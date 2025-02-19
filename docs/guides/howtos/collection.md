# Manage a collection

We previously covered how to [create a new activity](./activity.md), we will now detail how to setup an activity to manage a [collection](https://kalisio.github.io/kdk/api/core/components.html#collections) of [items](https://kalisio.github.io/kdk/api/core/components/items.html) hosted by a [service](./service.md).

**To be completed**

## Sort the collection

### Make the collection sortable

By default any service supports sorting based on FeathersJS [common way for sorting](https://feathersjs.com/api/databases/querying.html#sort).

However, you will need to update your service model file (usually `api/src/models/serviceName.model.mongodb.js`) like this to support case insensitive sorting:
```js
export default function (app, options) {
  ...
  // Collation provided in query ensure sorting to be case insensitive w.r.t. user's language
  // We built indices with collation to cover the most used languages, it requires different naming...
  options.Model.createIndex({ name: 1 }, { name: 'name-en', collation: { locale: 'en', strength: 1 } })
  options.Model.createIndex({ name: 1 }, { name: 'name-fr', collation: { locale: 'fr', strength: 1 } })
  options.Model.createIndex({ description: 1 }, { name: 'description-en', collation: { locale: 'en', strength: 1 } })
  options.Model.createIndex({ description: 1 }, { name: 'description-fr', collation: { locale: 'fr', strength: 1 } })
}
```

### Add sorter component

**TODO**: KSorter + layout configuration

## Filter the collection

By default any service supports filtering based on FeathersJS [common way for querying](https://feathersjs.com/api/databases/querying.html#sort).
However, it is often useful to be able to search the collection for items matching a *pattern*, e.g. in their names, instead of exact matching. 

### Make the collection searchable

We rely on the (feathers-mongodb-fuzzy-search)[https://github.com/arve0/feathers-mongodb-fuzzy-search] module to make the collection service support searching. Declare the fields of the item you'd like to make searchable when using the provided hook.
You can also add the KDK `diacriticSearch` hook to support [diacritic search](https://connect.ebsco.com/s/article/What-is-diacritic-search).

Update your service hooks file (usually `api/src/services/serviceName/serviceName.hooks.js`) like this:
```js
import fuzzySearch from 'feathers-mongodb-fuzzy-search'
import { hooks as kdkCoreHooks } from '@kalisio/kdk/core.api.js'

export default {
  before: {
    find: [
      fuzzySearch({ fields: ['name', 'description'] }),
      kdkCoreHooks.diacriticSearch(),
      ...
    ],
    ...
  }
}
```

### Add filter component

**TODO**: KFilter + layout configuration
