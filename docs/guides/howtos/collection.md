# Manage a collection

We previously covered how to [create a new activity](./activity.md), we will now detail how to setup an activity to manage a [collection](https://kalisio.github.io/kdk/api/core/components.html#collections) of [items](https://kalisio.github.io/kdk/api/core/components/items.html) hosted by a [service](./service.md).

Once you created your (service)[./service/md] and initialized your [activity](activity.md) you can add a set of components to display and edit the collection of items managed by your service.

## Display the collection

Pick one of our collection component like the [grid}(https://kalisio.github.io/kdk/api/core/components.html#grid) and add it in your activity:
```html
<template>
  <KActivity name="my-activity">
    <KGrid service="my-service" />
  </KActivity>
</template>
<script setup>
import KGrid from '@kalisio/kdk/core.client/components'
</script>
```

## Display items

By default the items will be displayed based on a generic [item components](https://kalisio.github.io/kdk/api/core/components/items.html) but you can customise it for your own needs by defining the collection `renderer` like this
```html
<template>
  <KActivity name="my-activity">
    <KGrid service="my-service"
    :renderer="{
      component: 'components/MyItem',
      options: { avatar: false}
    }"
    />
  </KActivity>
</template>
```

In your item component you can reuse and extend the base item component using slots like this:
```html
<template>
  <KItem>
    <template v-slot:item-avatar>
      Your avatar content
    </template>
    <template v-slot:item-content>
      Your component content
    </template>
  </KItem>
</template>
<script setup>
import KItem from '@kalisio/kdk/core.client/components'
</script>
```

**TODO**: sections

## Add item actions

An item component manages a set of actions for the user to interact with the underlying object, you can specify actions with related handlers in the `renderer`:
```html
<template>
  <KActivity name="my-activity">
    <KGrid service="my-service"
    :renderer="{
      component: 'components/MyItem',
      actions: [{
        id: 'my-action',
        icon: 'las la-trash',
        tooltip: 'My tooltip',
        handler
      }]
    }"
    />
  </KActivity>
</template>
<script setup>
function handler (object) {
  // Do whatever with the underlying object
}
</script>
```

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

You can add the sorter component either in the top pane by updating the layout configuration of your application or include it directly in your activity content through a panel.
In order to make the collection display reflect the sort options you have to update the base query used by the collection based on the sorter input:
```html
<template>
  <KActivity name="my-activity">
    <KPanel :content="toolbar" />
    <KGrid service="my-service"
    :base-query="baseQuery"
    ...
    />
  </KActivity>
</template>
<script setup>
import { Sorter } from '@kalisio/kdk/core.client'

const toolbar = ref([{
  component: 'collection/KSorter',
  id: 'sorter-options',
  tooltip: 'My tooltip',
  options: [
    { icon: 'las la-sort-alpha-down', value: { field: 'name', order: 1 }, default: true },
    { icon: 'las la-sort-alpha-up', value: { field: 'name', order: -1 } }
  ]
}])
const baseQuery = computed(() => {
  // Merge current sort options with any additional option to build the base query
  return Object.assign({}, Sorter.get().query)
})
</script>
```

## Filter the collection

By default any service supports filtering based on FeathersJS [common way for querying](https://feathersjs.com/api/databases/querying.html#sort).
However, it is often useful to be able to search the collection for items matching a *pattern*, e.g. in their names, instead of exact matching. 

### Make the collection searchable

We rely on the [feathers-mongodb-fuzzy-search](https://github.com/arve0/feathers-mongodb-fuzzy-search) module to make the collection service support searching. Declare the fields of the item you'd like to make searchable when using the provided hook.
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

Like the sorter component, you can add the filter component either in the top pane by updating the layout configuration of your application or include it directly in your activity content through a panel.
In order to make the collection display reflect the filtering options you have to update the filter query used by the collection based on the filter input. Let extend the previous configuration including collection filtering:
```html
<template>
  <KActivity name="my-activity">
    <KPanel :content="toolbar" />
    <KGrid service="my-service"
    :base-query="baseQuery"
    :filter-query="filterQuery"
    ...
    />
  </KActivity>
</template>
<script setup>
import { Sorter, Filter } from '@kalisio/kdk/core.client'

const toolbar = ref([{
  component: 'collection/KSorter',
  id: 'sorter-options',
  tooltip: 'My tooltip',
  options: [
    { icon: 'las la-sort-alpha-down', value: { field: 'name', order: 1 }, default: true },
    { icon: 'las la-sort-alpha-up', value: { field: 'name', order: -1 } }
  ]
}, { component: 'collection/KFilter' }])

const baseQuery = computed(() => {
  // Merge current sort options with any additional option to build the base query
  return Object.assign({}, Sorter.get().query)
})
const filterQuery = computed(() => {
  // Merge current filter options with any additional option to build the filter query
  return Object.assign({}, Filter.get().query)
})
</script>
```
