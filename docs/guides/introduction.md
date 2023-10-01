# Introduction

The KDK application template includes all the necessary boilerplate that you will need to get started building your application:
* [client-side boilerplate](https://quasar.dev/quasar-cli/developing-spa/introduction) in the *root* folder
* [server-side boilerplate](https://docs.feathersjs.com/guides/basics/generator.html) in the *api* folder
* [continuous integration/deployment boilerplate](./development/deploy.md) in the *root* folder as Dockerfiles and Travis CI scripts

It also includes a ready-to-use [user authentication service](https://kalisio.github.io/kdk/api/core/services.html#users-service) and [login screen](https://github.com/kalisio/kdk/blob/master/core/client/components/screen/KLoginScreen.vue).

## Infrastructure

The setup of application infrastructures is typically powered by our [kaabah](https://github.com/kalisio/kaabah) project while application deployment is typically powered by our [kargo](https://github.com/kalisio/kargo) project.
