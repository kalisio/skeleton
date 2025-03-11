const leftPane = require('./kdk/panes.left')

// Helper declaration
const APP_SLUG = 'skeleton'
const API_PATH = '/api'

const LEFT_PANE = {
  content: [
    leftPane.activityLink('activity', 'las la-smile', 'Activity.LABEL'),
    leftPane.LOGOUT
  ],
  opener: true
}

module.exports = {
  appName: 'Kalisio Skeleton',
  appSlug: APP_SLUG,
  buildMode: process.env.BUILD_MODE === 'pwa' ? 'pwa' : 'spa',
  flavor: process.env.NODE_APP_INSTANCE || 'dev',
  version: require('../package.json').version,
  buildNumber: process.env.BUILD_NUMBER,
  apiPath: API_PATH,
  apiJwt: `${APP_SLUG}-jwt`,
  apiTimeout: 20000,
  transport: 'websocket', // Could be 'http' or 'websocket',
  appChangelog: 'https://kalisio.github.io/skeleton/about/changelog.html',
  locale: {
    // If you'd like to force locale otherwise it is retrieved from browser
    // default: 'en',
    fallback: 'en'
  },
  logs: {
    level: (process.env.NODE_ENV === 'development' ? 'debug' : 'info')
  },
  storage: {
    useProxy: true
  },
  screens: {
    actions: [{
      id: 'terms-policies',
      label: 'screen.TERMS_AND_POLICIES',
      dialog: {
        component: 'document/KDocument',
        url: 'skeleton-terms.md'
      }
    }],
    logout: {
      actions: [
        { id: 'login-link', label: 'KLogoutScreen.LOG_IN_AGAIN_LABEL', route: { name: 'login' } }
      ]
    }
  },
  homeActivity: {
    panes: {
      left: LEFT_PANE
    }
  },
  routes: require('../src/router/routes')
}
