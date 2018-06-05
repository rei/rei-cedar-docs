import Vue from 'vue'; // for registering components globally

// Core assets
import "@rei/cdr-assets/dist/cdr-core.css";
import "@rei/cdr-assets/dist/cdr-fonts.css";


// Components
import { CdrList } from "@rei/cdr-list"; // import component
import "@rei/cdr-list/dist/cdr-list.css"; // import styles
Vue.component('CdrList', CdrList); // Register component globally

import { CdrButton } from "@rei/cdr-button";
import "@rei/cdr-button/dist/cdr-button.css";
Vue.component('CdrButton', CdrButton);
