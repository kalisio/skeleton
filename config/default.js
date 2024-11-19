module.exports = {
  appName: 'Kalisio Skeleton',
  buildMode: process.env.BUILD_MODE === 'pwa' ? 'pwa' : 'spa',
  appLogo: 'skeleton-logo.png',  
  flavor: process.env.NODE_APP_INSTANCE || 'dev',
  version: require('../package.json').version,
  buildNumber: process.env.BUILD_NUMBER,
  apiPath: '/api',
  apiJwt: 'skeleton-jwt',
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
      left: {
        content: [
          { id: 'home', icon: 'las la-home', label: 'HomeActivity.LABEL', renderer: 'item', route: { name: 'home-activity' } },
          { id: 'logout', icon: 'las la-sign-out-alt', label: 'LOGOUT', renderer: 'item', route: { name: 'logout' } }
        ],
        opener: true
      }
    } 
  },
  routes: require('../src/router/routes')
}
