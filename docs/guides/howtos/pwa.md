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

## Implementing web push notifications

This section outlines the process for integrating web push notifications into a Kalisio application. Web push notifications allow your application to send real-time notifications to users' devices. 

::: tip
Web push notifications are managed by the [feathers-webpush module](https://github.com/kalisio/feathers-webpush), which must be added as a dependency in the application's development folder.
:::

### Step 1: Generate VAPID keys

VAPID (Voluntary Application Server Identification) keys are required for securely sending push notifications. These keys identify your application to the push service and are used for encrypting payloads.

1. **Install** the `web-push` library globally to use its command-line interface (CLI):
```bash
npm install web-push -g
```
2. **Generate VAPID Keys**
```bash
web-push generate-vapid-keys --json
```

::: tip
For more details on the CLI, see [web-push CLI documentation](https://github.com/web-push-libs/web-push#command-line).
:::

### Step 2: Configure environment variable

```plain
VAPID_SUBJECT="mailto:email-notifications@kalisio.com"
VAPID_PUBLIC_KEY=<Your Public Key from Step 1>
VAPID_PRIVATE_KEY=<Your Private Key from Step 1>
```

### Step 3: Configure the API

The KDK [automatically sets up a Feathers.js service](https://github.com/kalisio/kdk/blob/master/core/api/services/index.js#L169) for push notifications when configured correctly. Update the API configuration to include the VAPID details.

Edit the `app/api/config/default.cjs` file to include the push notification configuration. Add the following `push` object:
```js
module.exports = {
  // Other configurations...
  push: {
    vapidDetails: {
      subject: process.env.VAPID_SUBJECT,
      publicKey: process.env.VAPID_PUBLIC_KEY,
      privateKey: process.env.VAPID_PRIVATE_KEY
    },
    // By default, push service is not accessible externally
    disallowExternalPush: false
  }
  // Other configurations...
}
```

::: tip
For a reference implementation, see [kApp/api/config/default.cjs](https://github.com/kalisio/kApp/blob/master/api/config/default.cjs#L213).
:::

### Step 4: Subscribe to push notifications in the client

To receive push notifications, the client must subscribe to the push service after user authentication. [KDK provides a utility function](https://github.com/kalisio/kdk/blob/master/core/client/utils/utils.push.js#L17) to handle this subscription.

Modify the `app/src/boot/kdk.js` file to subscribe to push notifications after the user authenticates. Add the following code:
```js
// Subscribe to webpush notifications
api.on('authenticated', (data) => {
// User will be updated in store just after login so that we need to wait for the event
Events.once('user-changed', utils.subscribeToPushNotifications)
})
```

::: tip
For a reference implementation, see [kApp/src/boot/kdk.js](https://github.com/kalisio/kApp/blob/master/src/boot/kdk.js#L70).
:::

### Step 5: Handle push notifications in the service worker

The service worker is responsible for receiving and displaying push notifications. Update the custom service worker file to handle push events and notification clicks.

Edit the `app/src-pwa/custom-service-worker.js` file to include the following code:

```js
// Web push notification
let clickOpenUrl
self.addEventListener('push', event => {
  const pushOptions = event.data.json()
  clickOpenUrl = pushOptions.url
  // Show notification
  event.waitUntil(self.registration.showNotification(pushOptions.title, pushOptions))
})
self.addEventListener('notificationclick', event => {
  // Close notification if clicked
  event.notification.close()
  // Open window on the specified url
  if (clickOpenUrl) {
    const promiseChain = clients.openWindow(clickOpenUrl)
    event.waitUntil(promiseChain)
  }
})
```

::: tip
For a reference implementation, see [kApp/src-pwa/custom-service-worker.js](https://github.com/kalisio/kApp/blob/master/src-pwa/custom-service-worker.js#L24).
:::

### Step 6: Sending push notifications

To send a push notification, use the push service created.

```js
const pushService = app.getService('push')
pushService.create()
```

::: tip
For more details, refer to the [feathers-webpush documentation](https://github.com/kalisio/feathers-webpush).
:::