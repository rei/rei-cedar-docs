import { isEqual } from 'lodash';
import { VueMaskDirective } from 'v-mask';

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {

  Vue.directive('mask', VueMaskDirective);
  router.options.scrollBehavior = function(to, frm, savedPosition) {
    if (frm && to.name === frm.name && isEqual(to.params, frm.params)) {
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
