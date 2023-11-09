const website = 'https://kalisio.com'

const serverPort = process.env.PORT || 8081
// Required to know webpack port so that in dev we can build correct URLs
const clientPort = process.env.CLIENT_PORT || 8080
const API_PREFIX = '/api'

let domain
let appName = 'Kalisio Skeleton'
let pwaAppName = appName
let pwaShortName = appName
// If we build a specific staging instance
if (process.env.NODE_APP_INSTANCE === 'dev') {
  domain = 'https://skeleton.dev.kalisio.xyz'
  pwaAppName += ' (dev)'
  pwaShortName += ' (dev)'
} else if (process.env.NODE_APP_INSTANCE === 'test') {
  domain = 'https://skeleton.test.kalisio.xyz'
  pwaAppName += ' (test)'
  pwaShortName += ' (test)'
} else if (process.env.NODE_APP_INSTANCE === 'prod') {
  domain = 'https://skeleton.planet.kalisio.com'
} else {
  // Otherwise we are on a developer machine
  if (process.env.NODE_ENV === 'development') {
    domain = 'http://localhost:' + clientPort
  } else {
    domain = 'http://localhost:' + serverPort
  }
}

const leftPane = {
  content: [
    { id: 'home', icon: 'las la-home', label: 'HomeActivity.LABEL', renderer: 'item', route: { name: 'home-activity' } },
    { id: 'logout', icon: 'las la-sign-out-alt', label: 'LOGOUT', renderer: 'item', route: { name: 'logout' } }
  ],
  opener: true,
  visible: false
}

module.exports = {
  // Special alias to host loopback interface in cordova
  // domain: 'http://10.0.2.2:8081',
  // If using port forwarding
  // domain: 'http://localhost:8081',
  // If using local IP on WiFi router
  // domain: 'http://192.168.1.16:8081',
  domain,
  appName,
  pwaAppName,
  pwaShortName,
  appLogo: 'skeleton-logo.png',  
  flavor: process.env.NODE_APP_INSTANCE || 'dev',
  version: require('../package.json').version,
  buildNumber: process.env.BUILD_NUMBER,
  apiPath: API_PREFIX,
  terms: 'skeleton-terms',
  apiJwt: 'skeleton-jwt',
  apiTimeout: 20000,
  transport: 'websocket', // Could be 'http' or 'websocket',
  appChangelog: 'https://kalisio.github.io/kApp/about/changelog.html',
  publisher: 'Kalisio',
  publisherWebsite: website,
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
    // header: 'screen/KScreenHeader',
    // footer: 'screen/KScreenFooter',
    // backgroundColor: '#FFF8ED',
    // textColor: 'white',
    actions: [{ 
      id: 'terms-policies', 
      label: 'screen.TERMS_AND_POLICIES', 
      dialog: {
        component: 'app/KTerms'
      }
    }],
    logout: {
      actions: [
        { id: 'login-link', label: 'KLogoutScreen.LOG_IN_AGAIN_LABEL', route: { name: 'login' } }
      ]
    }
  },
  homeActivity: {
    leftPane: leftPane
  },
  routes: require('../src/router/routes')
}
