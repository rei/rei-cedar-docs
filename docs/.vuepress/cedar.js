import Vue from 'vue'; // for registering components globally
import FullVue from '$vue'; // for registering components globally

// Core assets
import "@rei/cdr-assets/dist/cdr-core.css";
import "@rei/cdr-assets/dist/cdr-fonts.css";


// Components
import { CdrList } from "@rei/cdr-list"; // import component
import "@rei/cdr-list/dist/cdr-list.css"; // import styles
Vue.component('CdrList', CdrList); // Register component globally
FullVue.component('CdrList', CdrList); // Register component globally

import { CdrButton } from "@rei/cdr-button";
import "@rei/cdr-button/dist/cdr-button.css";
Vue.component('CdrButton', CdrButton);
FullVue.component('CdrButton', CdrButton);

import { CdrLink } from "@rei/cdr-link";
import "@rei/cdr-link/dist/cdr-link.css";
Vue.component("CdrLink", CdrLink);
FullVue.component("CdrLink", CdrLink);

import { CdrImg } from "@rei/cdr-img";
import "@rei/cdr-img/dist/cdr-img.css";
Vue.component('CdrImg', CdrImg);
FullVue.component('CdrImg', CdrImg);

import { CdrRow } from "@rei/cdr-row";
Vue.component('CdrRow', CdrRow);
FullVue.component('CdrRow', CdrRow);

import { CdrCol } from "@rei/cdr-col";
Vue.component('CdrCol', CdrCol);
FullVue.component('CdrCol', CdrCol);
