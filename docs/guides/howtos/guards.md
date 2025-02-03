# Guards

[Navigation guards](https://router.vuejs.org/guide/advanced/navigation-guards.html) control access to [routes](https://quasar.dev/layout/routing-with-layouts-and-pages/) within an application. They allow you to define navigation rules in your app based on the user's status (authenticated or not), permissions, and route definitions.

## Registering and Unregistering Guards

Guards are registered and unregistered in the `boot/kdk.js` file.

### Registering

To register a guard, use the `registerGuard` method :

```js
import { beforeGuard, authenticationGuard } from '@kalisio/kdk/core.client'

beforeGuard.registerGuard(authenticationGuard)
```

### Unregistering

To unregister a guard, use the `unregisterGuard` method :

```js
beforeGuard.unregisterGuard(authenticationGuard)
```

## Authentication guard

The `authenticationGuard` function uses the metadata (`authenticated`, `unauthenticated` or `public`) defined in the [routes](https://quasar.dev/layout/routing-with-layouts-and-pages/) to check if a user is authenticated and whether to allow navigation.

## Permissions guard

The `permissionsGuard` function checks if the user has the necessary permissions to access a route. Permissions can be defined in the route's metadata (`can`) and may use route or query parameters.

## Public route guard

The `publicRouteGuard` checks if the corresponding route is an existing public route or not.

::: tip
`publicRouteGuard` should be defined after `authenticationGuard`.
:::