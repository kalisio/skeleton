# Introduction

The KDK application template includes all the necessary boilerplate that you will need to get started building your application:
* [client-side boilerplate](https://quasar.dev/quasar-cli/developing-spa/introduction) in the *root* folder
* [server-side boilerplate](https://docs.feathersjs.com/guides/basics/generator.html) in the *api* folder
* [continuous integration/deployment boilerplate](./development/deploy.md) in the *root* folder as Dockerfiles and Travis CI scripts

It also includes a ready-to-use [user authentication service](https://kalisio.github.io/kdk/api/core/services.html#users-service) and [login screen](https://github.com/kalisio/kdk/blob/master/core/client/components/screen/KLoginScreen.vue).

## Howtos

Here are some howtos to help you start developing your application with the KDK:
* How to [create a service](./howtos/service.md) in your application,
* How to [distribute a service](./howtos/distribution.md) of your application to remote applications,
* How to [manage permissions](./howtos/permissions.md) to control service access in your application,
* How to [add guards](./howtos/guards.md) to control route access in your single-page application,
* How to [manage a collection](./howtos/collection.md) to display and interact with items managed by your services,
* How to [add tours](./howtos/tours.md) to guide your users through your application,
* How to [run](./howtos/guards.md) your application as a [Progressive Web App](https://web.dev/explore/progressive-web-apps),
* How to [connect to Keycloak](./howtos/keycloak.md) to authentication and authorise users using [Keycloak](https://www.keycloak.org),
* How to [connect to a planet](./howtos/planet.md) to use a [geospatial datasets catalog](https://kalisio.github.io/kano/guides/getting-started.html#projects).

## Infrastructure

The setup of application infrastructures is typically powered by our [kargo](https://github.com/kalisio/kargo) project.
