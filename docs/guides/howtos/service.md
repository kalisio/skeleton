# Create a new service

Start creating a folder with service name in `api/src/services` and create your service inside.

>
> By convention the name of the files will be formated like `serviceName.service.js`.

You can also create a hook file to define custom hooks for the service using the same format, i.e.  `serviceName.hooks.js`.

If your service is relying on a MongoDB [Feathers database adapter](https://feathersjs.com/api/databases/adapters.html) you should create your model in `/src/models` formated like `serviceName/model.mongodb.js`.

The final structure will look like this:
```
├── src
│  ├── models
│  │  ├── messages.model.mongodb.js
│  ├── services
│  │  ├── messages
│  │  │  ├── messages.hooks.js
│  │  │  ├── messages.service.js
│  ├── service.js
  ...    
```

## Define the service

::: tip
If you service is a pure database service exposing no additional feature you don't actually need a service file.
:::

The content of the service file can either export a service object or a function generating one (possibly async):
```js
export default async function (name, app, options) {
  return {
    async publishMessage (message) {
      ...
      await this.create(message)
      this.emit('message-published', message)
    },
    
    async otherMethod () {
      ...
    },
  }
}
```

## Define the data model

Define the target collection name and any additional information (e.g. indices) in your model file:
```js
export default function (app, options) {
  const db = options.db || app.db
  options.Model = db.collection('messages')
  options.Model.createIndex({ createdAt: -1 })
  options.Model.createIndex({ description: 1 }, { name: 'description-en', collation: { locale: 'en', strength: 1 } })
  options.Model.createIndex({ description: 1 }, { name: 'description-fr', collation: { locale: 'fr', strength: 1 } })
}

```

## Define the hooks

The content of the hook file is simply the list of your [hooks](https://feathersjs.com/api/hooks.html) organized by types:
```js
import { myFirstHook, mySecondHook } from '../../hooks/index.js'

export default {
  before: {
    all: [],
    find: [],
    get: [],
    create: [myFirstHook, mySecondHook],
    update: [],
    patch: [],
    remove: [myFirstHook, mySecondHook]
  },
  after: {
    // Same as above
    ...
  },
  error: {
    // Same as above
    ...
  }
}
```

## Configure your new service

In the `service.js` file import and declare your new service with others (if any):
``` js
import path from 'path'
import { fileURLToPath } from 'url'
import kdkCore from '@kalisio/kdk/core.api.js'

//For autoloading service and model in service setup
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const modelsPath = path.join(__dirname, 'models')
const servicesPath = path.join(__dirname, 'services')

export default async function () {
  const app = this
  
  try {
    // Set up services  
    const messageService = await app.createService('messages', {
      modelsPath,
      servicesPath,
      methods: ['find', 'get', 'create', 'update', 'patch', 'remove', 'publishMessage'],
      events: ['message-published']
    })

    messageService.on('message-published', async event => {
      ...
    })

    await app.configure(kdkCore)

  } catch (error) {
    app.logger.error(error.message)
  }
}

```

If your service relies on some options available in the application configuration you can declare it like this in your `api/config/default.js`:
``` js
module.exports = {
  messages: {
    paginate: {
      default: 10,
      max: 50
    }
  }
}
```

Then use it when initializing your service:
``` js
const messageService = await app.createService('messages', Object.assign({
  modelsPath,
  servicesPath,
  methods: ['find', 'get', 'create', 'update', 'patch', 'remove', 'publishMessage'],
  events: ['message-published']
}, app.get('messages'))
```

## Frontend service

By default client-side services related to backend services don't have to be explicitely created as Feathers will automatically generate a wrapper on the first call of [`api.getService()`](https://kalisio.github.io/kdk/api/core/application.html#getservice-name-context).

However, Feathers requires to [explicitely register custom methods/events](https://feathersjs.com/api/client/rest.html#custom-methods), and the **KDK** recommand to use [`createService()`](https://kalisio.github.io/kdk/api/core/application.html#createservice-name-options) upfront notably to manage [context](https://kalisio.github.io/kdk/api/introduction.html#context) if required:
```js
api.createService('messages', {
  methods: ['find', 'get', 'create', 'update', 'patch', 'remove', 'publishMessage'],
  events: ['message-published']
})

await api.getService('messages').publishMessage({ ... })
```

