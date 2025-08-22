# Implementing Matomo Analytics in a Quasar application

This guide explains how to integrate [Matomo](https://matomo.org/) analytics into a Quasar application.  
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

In your Quasar application, install the [vue-matomo plugin](https://github.com/AmazingDreams/vue-matomo) dependency :

```bash
yarn add vue-matomo
```

## Step 2: Create a Quasar boot file

Create `src/boot/matomo.js` :

```js
import VueMatomo from 'vue-matomo'

export default async ({ app, router }) => {
  app.use(VueMatomo, {
    host: 'http://localhost:8080/', // Matomo instance
    siteId: 1,                      // Site ID from Matomo
    router,                         // Enables page tracking
    enableLinkTracking: true,       // Tracks external link clicks
    trackInitialView: true,         // Tracks the first page view
    domains: ['localhost:8082'],    // App domain (prevents false outlinks)
    // Request user consent before tracking:
    disableCookies: true,
    requireConsent: false,
    requireCookieConsent: false,
    // Measure time spent on page
    enableHeartBeatTimer: true,
    heartBeatTimerInterval: 15,
    // https://developer.matomo.org/guides/tracking-javascript-guide#user-id
    userId: undefined,
    debug: process.env.NODE_ENV === 'development'
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
  'matomo'
]
```