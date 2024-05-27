# Guards

[Guards](https://github.com/kalisio/kdk/blob/master/core/client/guards.js) control access to routes within an application. They allow you to define navigation rules based on the user's status (authenticated or not), permissions, and route definitions.

## Registering and Unregistering Guards

Guards are registered and unregistered in the `boot/kdk.js` file.

### Registering

To register a guard, use the `registerGuard` method :

```js
beforeGuard.registerGuard(authenticationGuard)
beforeGuard.registerGuard(routeGuard)
```

### Unregistering

To unregister a guard, use the `unregisterGuard` method :

```js
beforeGuard.unregisterGuard(authenticationGuard)
beforeGuard.unregisterGuard(routeGuard)
```


## Authentication Guard

The `authenticationGuard` function uses the metadata (`authenticated`, `unauthenticated` or `public`) defined in the [routes](https://quasar.dev/layout/routing-with-layouts-and-pages/) to check if a user is authenticated and whether to allow navigation.

## Permissions Guard

The `permissionsGuard` function checks if the user has the necessary permissions to access a route. Permissions can be defined in the route's metadata (`can`) and may use route or query parameters.

## Route Guard

The `routeGuard` checks if the corresponding route is valid. 

::: tip
`routeGuard` should be defined after `authenticationGuard`.
:::