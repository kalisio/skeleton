# Connect to Keycloak

In this section we assume the you already have a configured and running [Keycloak](https://www.keycloak.org) instance with a realm to host your users.
Additionally, you have to create an OpenID Connect client in your Keycloak instance in order to connect through your application, here is the usual configuration for it assuming your application will locally run on port `8080` and be deployed on `https://your.domain.com`:
* Client authentication set to ON (i.e. no public access),
* Authentication flow set to "*Standard flow*" and "*Direct access grants*",
* Redirect URIs: `https://your.domain.com/oauth/keycloak/callback` and `http://localhost:8080/oauth/keycloak/callback`,
* Web origins: `https://your.domain.com` and `http://localhost:8080`.

The following sections will explain how to make your KDK-based application connect using Keycloak instead of the default local authentication system based on the following environment variables:
* `KEYCLOAK_URL`: your Keycloak domain,
* `KEYCLOAK_REALM`: your Keycloak realm name,
* `KEYCLOAK_CLIENT_ID`: your Keycloak application client ID,
* `KEYCLOAK_CLIENT_SECRET`: your Keycloak application client secret.

## Configure the authentication

In the configuration file of your server (usually `api/config/default.js`) add the following configuration to declare the Keycloak OAuth provider:
```js
const domain = 'your.domain.com'
// Keycloak base url
const keycloakBaseUrl = `${process.env.KEYCLOAK_URL}/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect`
module.exports = {
	...
	authentication: {
	  oauth: {
      redirect: domain + '/',
      defaults: {
        origin: domain
      },
      keycloak: {
        key: process.env.KEYCLOAK_CLIENT_ID,
        secret: process.env.KEYCLOAK_CLIENT_SECRET,
        oauth: 2,
        scope: ['openid'],
        authorize_url: `${keycloakBaseUrl}/auth`,
        access_url: `${keycloakBaseUrl}/token`,
        profile_url: `${keycloakBaseUrl}/userinfo`,
        logout_url: `${keycloakBaseUrl}/logout`,
        nonce: true
      }
    }
  }
}
```

::: tip
Configuring another authentication provider like Google or GitHub is pretty similar, simply change the configuration key from `keycloak` to e.g. `google` and adapt the options if required. The callback URL will then become `https://your.domain.com/oauth/google/callback`.
For configuration options details you should have a look to the [Grant documentation](https://github.com/simov/grant) used under-the-hood by Feathers for OAuth.
:::

## Configure the client

### Router

Ensure your routes configuration (usually `/src/router/routes.js`) allows the authentication token to be set in the URL of your application. If you'd like to synchronize the logout from your application with the logout from keycloak you can also use the `KOAuthLogoutScreen` instead of the standard `KLogoutScreen` on logout, take care that the route then requires a `provider` parameter being the name of the OAuth provider to logout from (like `keycloak`):
```js
module.exports = [{
  path: '/:token?',
  name: 'index',
  component: 'Index',
  children: {
    login: 'screen/KLoginScreen',
    'logout/:provider?': {
      name: 'logout',
      component: 'screen/KOAuthLogoutScreen',
      meta: { authenticated: true }
    }
    ...
  }
}]
```

### Default login screen

You can simply change the frontend configuration (usually `/config/default.js`) of the default login screen by adding a link with an internationalized label after adding the label entries in your [i18n](https://kalisio.github.io/kdk/api/core/application.html#i18n) files (e.g. `src/i18n/app_en.json` and `src/i18n/app_fr.json`) to log with Keycloak like this:
```js
module.exports = {
	screens: {
		login: {
			actions: [
	      { id: 'keycloak-link', label: 'screen.LOGIN_WITH_KEYCLOAK', route: { url: '/oauth/keycloak' } }
	    ]
		}
	}
}
```

### OAuth login screen

If you don't allow local authentication but only use Keycloak you can switch from the standard login screen to the OAuth login screen provided by the KDK.
For this simply reference it for the ` login` route in your routes configuration (usually `/src/router/routes.js`):
```js
module.exports = [{
  children: {
    login: 'screen/KOAuthLoginScreen',
    ...
  }
}]
```

Similarly as presented before for the default login screen add a button with an internationalized label to log with Keycloak:
```js
module.exports = {
	screens: {
		login: {
			actions: [
	      { id: 'keycloak-link', label: 'screen.LOGIN_WITH_KEYCLOAK', renderer: 'form-button', route: { url: '/oauth/keycloak' } }
	    ]
		}
	}
}
```

### Custom login screen

If you'd like to build your own login screen you can create a new component `MyLoginScreen.vue` (usually in `/src/components`) and reference it for the ` login` route in your routes configuration (usually `/src/router/routes.js`):
```js
module.exports = [{
  children: {
    login: 'MyLoginScreen',
    ...
  }
}]
```

Your login screen should rely on the base `KScreen` component if you'd like to display some actions or change the banner:
```js
<template>
	<KScreen :actions="actions">
    <template v-slot:banner>
      ... your logo ...
    </template>
  </KScreen>
</template>

<script setup>
import _ from 'lodash'
import config from 'config'
import { ref } from 'vue'
import KScreen from './KScreen.vue'

// Data
const actions = ref(_.get(config, 'screens.login.actions', []))
</script>
```

### OAuth logout

In order to synchronize the logout from your application with the logout from keycloak your logout action should specify the `provider` parameter of the route:
```js
leftPane: {
  content: [
  ...
  {
    id: 'logout-action',
    icon: 'las la-sign-out-alt',
    label: 'layout.LOGOUT',
    route: {
      name: 'logout',
      params: { provider: 'keycloak' }
    },
    renderer: 'item'
  }]
}
```

## Manage permissions

If you only use Keycloak to authenticate you might then need to also manage [permissions](./permissions.md) based on Keycloak [Role Based Access Control](https://en.wikipedia.org/wiki/Role-based_access_control) (RBAC). For this you can the following procedure:

1) Create your roles in Keycloak, either realm roles or client roles.

2) Create a mapper that will expose this information as an attribute in the user information. Predefined mappers already exist in Keycloak for roles, simply activate "*Add to userinfo*" option and select your token claim name like `roles`.

3) Add appropriate hooks to extract this information from the user profile coming from keycloak, either when the user is created or update, typically in `api/src/services/users/hooks.js`. You might create your own hook or rely on the `serialize()` hook that extract a source property and move it to a target property, possibly filtering invalid items using a [sift filter](https://github.com/crcn/sift.js).

```js
import commonHooks from 'feathers-hooks-common'
import { hooks as kdkCoreHooks } from '@kalisio/kdk/core.api.js'
import * as permissions from '../../../../common/permissions.mjs'

// Used to retrieve keycloak roles and convert into permissions system
const serializeRoles = kdkCoreHooks.serialize([{ source: 'keycloak.roles', target: 'permissions', filter: { $in: permissions.RoleNames } }])

export default {
  before: {
    create: [..., serializeRoles],
    update: [..., serializeRoles],
    patch: [..., serializeRoles]
  },
  ...
}

```

## Manage custom attributes

Similarly to roles, you can retrieve custom user attributes from Keycloak by adding a *by configuration mapper* of type *User Attribute*, which maps a custom user attribute to a token claim, in your client scopes.

