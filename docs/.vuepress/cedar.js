import Vue from 'vue'; // for registering components globally
import FullVue from '$vue'; // for registering components globally

import "@rei/cedar/dist/cedar.css";

import * as components from '@rei/cedar';

Object.keys(components).forEach((key) => {
  Vue.component(key, components[key]);
  FullVue.component(key, components[key]);
});

