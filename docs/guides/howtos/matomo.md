# Implementing Matomo Analytics in a KDK-based application 

This guide explains how to integrate [Matomo](https://matomo.org/) analytics into a KDK-based application .  
Matomo is an open-source analytics platform, similar to Google Analytics, but self-hosted.

::: tip
To run a local Matomo instance:  

1. Start the containers: `docker compose up -d`
2. Visit `http://localhost:8080` and complete the setup wizard.

⚠️ Note your **Site ID** (usually `1`) and your **Matomo URL** (e.g. `http://localhost:8080/`).

::: details docker-compose.yml
```
version: '3.7'
services:
  db:
    image: mariadb:10.6
    container_name: matomo_db
    environment:
      - MYSQL_ROOT_PASSWORD=example
      - MYSQL_DATABASE=matomo
      - MYSQL_USER=matomo
      - MYSQL_PASSWORD=matomo
    volumes:
      - db_data:/var/lib/mysql

  matomo:
    image: matomo:latest
    container_name: matomo_app
    ports:
      - "8080:80"
    environment:
      - MATOMO_DATABASE_HOST=db
      - MATOMO_DATABASE_ADAPTER=mysql
      - MATOMO_DATABASE_TABLES_PREFIX=matomo_
      - MATOMO_DATABASE_USERNAME=matomo
      - MATOMO_DATABASE_PASSWORD=matomo
      - MATOMO_DATABASE_DBNAME=matomo
    volumes:
      - matomo_data:/var/www/html

volumes:
  db_data:
  matomo_data:
```
:::

## Step 1: Install the Vue Matomo plugin

In your KDK-based application , install the [vue-matomo plugin](https://github.com/AmazingDreams/vue-matomo) dependency :

```bash
yarn add vue-matomo
```

## Step 2: Configure Matomo settings in capabilities

Update `api/src/services.js` :

```js
app.use(app.get('apiPath') + '/capabilities', (req, res, next) => {
  const response = {
    // Other configuration
    matomo: {
      host: process.env.MATOMO_HOST,
      siteId: parseInt(process.env.MATOMO_SITE_ID)
    }
  }
  if (process.env.BUILD_NUMBER) {
    response.buildNumber = process.env.BUILD_NUMBER
  }
  res.json(response)
})
```

## Step 3: Create a Quasar boot file

Create `src/boot/matomo.js` :

```js
import _ from 'lodash'
import { Store } from '@kalisio/kdk/core.client'
import VueMatomo from 'vue-matomo'

export default async ({ app, router }) => {
  app.use(VueMatomo, {
    host: _.get(Store, 'capabilities.api.matomo.host'),
    siteId: _.get(Store, 'capabilities.api.matomo.siteId'),
    router,
    enableLinkTracking: true,
    trackInitialView: true,
    // Request user consent before tracking:
    disableCookies: true,
    requireConsent: false,
    requireCookieConsent: false,
    // Measure time spent on page
    enableHeartBeatTimer: true,
    heartBeatTimerInterval: 15,
    // https://developer.matomo.org/guides/tracking-javascript-guide#user-id
    userId: undefined
  })
}
```

:::tip
See the [Matomo tracking guide](https://developer.matomo.org/guides/tracking-javascript-guide) for full configuration details.
:::

## Step 3: Register the boot file

Edit `quasar.config.js` and add `matomo` to the `boot` section:

```js
boot: [
  'kdk',
  'tour',
  'matomo'
],
```

:::tip
The order of registration is important: `kdk` must be loaded first. 
:::