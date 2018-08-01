import Vue from 'vue'; // for registering components globally
import FullVue from '$vue'; // for registering components globally

// Components
import { CdrAccordion } from "@rei/cdr-accordion";
Vue.component('CdrAccordion', CdrAccordion);
FullVue.component('CdrAccordion', CdrAccordion);

import { CdrAccordionItem } from "@rei/cdr-accordion";
import "@rei/cdr-accordion/dist/cdr-accordion.css";
Vue.component('CdrAccordionItem', CdrAccordionItem);
FullVue.component('CdrAccordionItem', CdrAccordionItem);

import { CdrButton } from "@rei/cdr-button";
import "@rei/cdr-button/dist/cdr-button.css";
Vue.component('CdrButton', CdrButton);
FullVue.component('CdrButton', CdrButton);

import { CdrCta } from "@rei/cdr-cta";
import "@rei/cdr-cta/dist/cdr-cta.css"
Vue.component('CdrCta', CdrCta);
FullVue.component('CdrCta', CdrCta);

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

import { CdrCheckbox } from "@rei/cdr-checkbox";
import "@rei/cdr-checkbox/dist/cdr-checkbox.css";
Vue.component("CdrCheckbox", CdrCheckbox);
FullVue.component("CdrCheckbox", CdrCheckbox);

import { CdrRadio } from "@rei/cdr-radio";
import "@rei/cdr-radio/dist/cdr-radio.css";
Vue.component("CdrRadio", CdrRadio);
FullVue.component("CdrRadio", CdrRadio);