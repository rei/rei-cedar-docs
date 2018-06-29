const _ = require('lodash');

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements to the app
  // Prevent scrollTop behavior if query param is changed on route
  router.scrollBehavior = (to, frm, savedPosition) => {
    console.log("SOME SCROLL BEHAVIOR");
      if (frm && to.name === frm.name && _.isEqual(to.params, frm.params)) {
        console.log("SOME CONTROLLED SCROLL BEHAVIOR");
        return;
      } // Handle scroll
  }
}
