const tours = require('../tours')

module.exports = [{
  path: '/:token?',
  name: 'index',
  component: 'Index',
  meta: { unauthenticated: true },
  children: {
    login: 'screen/KLoginScreen',
    logout: {
      component: 'screen/KLogoutScreen',
      meta: { authenticated: true }
    },
    home: {
      // The name of the route has to be set the default child
      name: '',
      component: 'app/KHome',
      meta: { authenticated: true, unauthenticated: false },
      children: {
        'default-home-view': {
          // Because this child is the default one path is empty and name is the one of the parent route
          path: '',
          name: 'home',
          redirect: { name: 'activity-activity' },
          tour: {
            home: tours.home,
            'side-nav': tours['side-nav']
          }
        },
        activity: {
          name: 'activity-activity',
          component: 'Activity'
        }
      }
    }
  }
},
// Always leave this as last one,
// but you can also remove it
{
  path: '/:catchAll(.*)*',
  component: 'screen/KErrorScreen'
}
]
