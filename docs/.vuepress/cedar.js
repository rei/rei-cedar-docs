import Vue from 'vue'; // for registering components globally
import FullVue from '$vue'; // for registering components globally

// Components
import { CdrButton } from "@rei/cdr-button";
import "@rei/cdr-button/dist/cdr-button.css";
Vue.component('CdrButton', CdrButton);
FullVue.component('CdrButton', CdrButton);

import { CdrImg } from "@rei/cdr-img";
import "@rei/cdr-img/dist/cdr-img.css";
Vue.component("CdrImg", CdrImg);
FullVue.component("CdrImg", CdrImg);

import { CdrIcon } from "@rei/cdr-icon";
import "@rei/cdr-icon/dist/cdr-icon.css";
Vue.component("CdrIcon", CdrIcon);
FullVue.component("CdrIcon", CdrIcon);

import { CdrIconSprite } from "@rei/cdr-icon";
Vue.component("CdrIconSprite", CdrIconSprite);
FullVue.component("CdrIconSprite", CdrIconSprite);

import { CdrLink } from "@rei/cdr-link";
import "@rei/cdr-link/dist/cdr-link.css";
Vue.component("CdrLink", CdrLink);
FullVue.component("CdrLink", CdrLink);

import { CdrList } from "@rei/cdr-list"; // import component
import "@rei/cdr-list/dist/cdr-list.css"; // import styles
Vue.component('CdrList', CdrList); // Register component globally
FullVue.component('CdrList', CdrList); // Register component globally

import { CdrText } from "@rei/cdr-text";
Vue.component("CdrText", CdrText);
FullVue.component("CdrText", CdrText);

import { CdrRow, CdrCol } from "@rei/cdr-grid";
import "@rei/cdr-grid/dist/cdr-grid.css";
Vue.component('CdrRow', CdrRow);
FullVue.component('CdrRow', CdrRow);
Vue.component('CdrCol', CdrCol);
FullVue.component('CdrCol', CdrCol);

import { CdrBreadcrumb } from "@rei/cdr-breadcrumb";
import "@rei/cdr-breadcrumb/dist/cdr-breadcrumb.css";
Vue.component("CdrBreadcrumb", CdrBreadcrumb);
FullVue.component("CdrBreadcrumb", CdrBreadcrumb);

import { CdrCard } from "@rei/cdr-card";
import "@rei/cdr-card/dist/cdr-card.css";
Vue.component('CdrCard', CdrCard);
FullVue.component('CdrCard', CdrCard);

// Core assets
import "@rei/cdr-assets/dist/cdr-core.css";
import "@rei/cdr-assets/dist/cdr-fonts.css";
