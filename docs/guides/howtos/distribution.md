# Distribute a service

Using the [feathers-distributed](https://github.com/kalisio/feathers-distributed) module you can easily make your service available to another Feathers or KDK application.

## Configure the distribution

In the configuration file of your server (usually `api/config/default.js`) add the following configuration for the distribution:
```js
const express = require('@feathersjs/express')

module.exports = {
	...
	distribution: {
	  // Return true whenever you'd like to distribute the service
    services: (service) => service.path.includes('articles'),
    // Distribute at least modelName for KFS to know about features services
    middlewares: { after: express.errorHandler() },
    // When called internally from remote service do not authenticate,
    // this assumes a gateway scenario where authentication is performed externally
    authentication: false,
    // Unique key identifying your app in the distribution, used as a partition key
    key: 'my-app',
    // Methods and events you'd like to distribute, include any custom method or event
    distributedMethods: ['find', 'get', 'create', 'update', 'patch', 'remove', 'publish-article'],
    distributedEvents: ['created', 'updated', 'patched', 'removed', 'article-published']
  }
}
```

## Activate the distribution

In the main entry point (usually `api/main.js` or `server.js`) where you create your HTTP server, add the following to ensure service distribution:
```js
import distribution, { finalize } from '@kalisio/feathers-distributed'

// Distribute services
app.configure(distribution(app.get('distribution')))
// Finalize distribution on server shutdown
server.on('close', () => finalize(app))
```

## Consume the distributed service

### Backend

Any application that needs to consume your distributed service should also be setup by configuring the distribution in the server configuration file (usually `api/config/default.js`):
```js
module.exports = {
	...
	distribution: {
	  // We don't distribute any service here
	  services: (service) => false,
	  // We only consume services from my app
	  remoteServices: (service) => (service.key === 'my-app'),
	  // Avoid conflict with internal jobs service
	  middlewares: { after: express.errorHandler() },
	  distributedMethods: ['find', 'get', 'create', 'update', 'patch', 'remove', 'publish-article'],
    distributedEvents: ['created', 'updated', 'patched', 'removed', 'article-published']
  }
}
```

Similarly activate it in the main entry point (usually `api/src/main.js` or `api/src/server.js`):
```js
import distribution, { finalize } from '@kalisio/feathers-distributed'

// Distribute services
app.configure(distribution(app.get('distribution')))
// Finalize distribution on server shutdown
server.on('close', () => finalize(app))
```

Finally, decorate the distributed service with KDK-specific add-ons so that it wil appear to your application if it has been created by it using [`createService()`](./service.md), this is typically useful to also use [permisisons](./permissions.md) on it (usually `api/src/services.js`):
```js
import { permissions, decorateDistributedService } from '@kalisio/kdk/core.api.js'

app.on('service', service => {
  // Make remote services compliant with our internal app services so that e.g. permissions can be used
  if (service.key === 'my-app') {
    decorateDistributedService.call(app, service)
    // Register default permissions for it
    debug('Registering permissions for remote service ', service.name)
    permissions.defineAbilities.registerHook((subject, can, cannot) => {
      can('service', service.name)
      can('read', service.name)
    })
    // We then need to update abilities cache
    const authorisationService = app.getService('authorisations')
    if (authorisationService) authorisationService.clearAbilities()
  }
})
```

Now, you should be able to access the remote service either on the backend or the frontend side:
```js
const articlesService = app.getService('articles')
```

### Frontend

On the client-side distributed services should be used like [any service directly hosted by your application](./service.md).