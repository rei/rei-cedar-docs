var _ = require('lodash');

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  router.options.scrollBehavior = function(to, frm, savedPosition) {
    if (frm && to.name === frm.name && _.isEqual(to.params, frm.params)) {
      console.log('object');
      return;
    }
    // Handle scroll
    // copied from https://github.com/vuejs/vuepress/blob/master/lib/app/app.js
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      if (store.disableScrollBehavior) {
        return false
      }
      return {
        selector: to.hash
      }
    } else {
      return { x: 0, y: 0 }
    }
  }
}
