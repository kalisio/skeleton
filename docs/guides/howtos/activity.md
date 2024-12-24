# Create a new activity

To create a new [activity](https://kalisio.github.io/kdk/api/core/components.html#activity) initiate a component file `MyActivity.vue` in your `src/components` folder, the content of your activity will go in the default slot of the `KActivity` component like this:
```js
<template>
  <KActivity name="my-activity">
    // Here comes your a ctivity content
  </KActivity>
</template>
```

This will automatically allow to setup the [layout](https://kalisio.github.io/kdk/api/core/components.html#layout) of your activity based on the application configuration as explained hereafter.

## Configure the activity

In the configuration file of your client (usually `config/default.js`) setup the configuration for your activity using a key based on its name in [camel case](https://lodash.com/docs/4.17.15#camelCase):
```js
module.exports = {
	...
	myActivity: {
    header: {
    	// This adds a custom component to be used as header
      content: [
        { id: 'header', component: 'MyHeader' }
      ],
      visible: true
    },
    panes: {
      left: {
        content: [
          // This adds an action to route to another activity
      		{ id: 'another-activity', icon: 'las la-xxx', label: 'MyActivity.ANOTHER_LABEL', renderer: 'item', route: { name: 'another-activity' } },
          // This adds an action to perform a user action
      		{ id: 'user-action', icon: 'las la-yyy', label: 'MyActivity.ACTION_LABEL', renderer: 'item', handler: { name: 'logout' } }
        ],
        opener: true
      }
    } 
  }
}
```

## Use layout modes in the activity

Layout configuration depends on a `mode` that the application can switch whenever required to change its content. Update the configuration file of your client (usually `config/default.js`) to setup additional modes for your layout using keys based on the mode name like this:
```js
module.exports = {
	...
	myActivity: {
    panes: {
      topPane: {
	      content: {
	      	// Default mode content
	        default: [
	        	...
	          { component: 'QSeparator', vertical: true, inset: true, color: 'grey-5', style: 'max-width: 1px; min-width: 1px;' },
	          // Action used to activate search mode
	          { id: 'search', icon: 'las la-search', tooltip: 'MyActivity.SEARCH', handler: { name: 'setTopPaneMode', params: ['filter'] } }
	        ],
	        // Search mode content
	        search: [
				    { id: 'back', icon: 'las la-arrow-left', handler: { name: 'setTopPaneMode', params: ['default'] } },
				    { component: 'QSeparator', vertical: true,  color: 'lightgrey' },
				    { component: 'MySearch' }
				  ]
	      },
	      // Default layout mode
	      mode: 'default'
    } 
  }
}
```

If your action handlers directly call functions exposed by your activity this should be sufficient. However, as this is the case in this example, if the action handlers are calling functions that manipulate the application layout like `setTopPaneMode`, you have to expose it in your activity by using the [`useLayout`](https://kalisio.github.io/kdk/api/core/composables.html#uselayout) composable:
```js
<script setup>
import { composables as kdkCoreComposables } from '@kalisio/kdk/core.client'
// Need to expose layout functions to be used from configuration
const layout = kdkCoreComposables.useLayout()

...

defineExpose({
  ...layout
})
</script>
```
