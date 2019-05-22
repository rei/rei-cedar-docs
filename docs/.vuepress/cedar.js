import Vue from 'vue'; // for registering components globally
import FullVue from '$vue'; // for registering components globally

import * as Components from '@rei/cedar';

Object.keys(Components).forEach((key) => {
  Vue.component(key, Components[key]);
  FullVue.component(key, Components[key]);
});

