const leftPane = require('./kdk/panes.left')

module.exports = {
  ACTIVITY: {
    id: 'activity',
    icon: 'las la-smile',
    label: 'Activity.LABEL',
    renderer: 'item',
    route: {
      name: 'activity'
    }
  },
  LOGOUT: leftPane.LOGOUT
}