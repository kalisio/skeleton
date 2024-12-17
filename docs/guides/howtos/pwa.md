# PWA

The skeleton is a **Progressive Web App (PWA)**, which means it functions as both a web page and a mobile app, offering a versatile experience on any device.

::: tip
To build and run the skeleton as a PWA, check out the main commands [here](https://kalisio.github.io/skeleton/guides/development/develop.html)
:::

## Configuration

### Web app manifest

A web app manifest provides essential information about the application, such as its name, author, icon, and description, in a JSON text document. The purpose of the manifest is to allow the installation of applications on a device's home screen. You can find this manifest in the [Quasar configuration](https://github.com/kalisio/skeleton/blob/master/quasar.config.js#L246).

### Service Worker 

[Service workers](https://github.com/kalisio/skeleton/blob/master/src-pwa/custom-service-worker.js), which operate as JavaScript events, are a core component of a PWA and act as a proxy. They enable fast loading, offline access, push notifications, and other capabilities. 

<img src="../../.vitepress/public/images/service-worker.svg" style="margin-left: auto; margin-right: auto;">

::: tip
When the application is ready to be installed or updated, a pop-up window will appear.
:::

### Push notfication

[KApp](https://kalisio.github.io/kApp) provides an example of how to implement push notifications using the [feathers-webpush module](https://github.com/kalisio/feathers-webpush).

For this you will need to generate private and public [VAPID keys](https://github.com/web-push-libs/web-push#command-line).
