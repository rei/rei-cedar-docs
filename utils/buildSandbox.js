import { getParameters } from 'codesandbox/lib/api/define';

const INDEX_FILE = `import Vue from "vue";
import App from "./App";

import "@rei/cedar/dist/cdr-fonts.css";
import "@rei/cedar/dist/cedar.css";

new Vue({
el: "#app",
components: { App },
template: "<App/>"
});`

export default function makeMeASandbox(data, model) {
  // TODO: can we pull name from main page frontmatter?
  if(!data.components) return false
  const fontImport = "";


  const parameters = {
    files: {
      'index.js': {
        content: INDEX_FILE,
      },
      'App.vue': {
        content: `<template>\n<div style="margin: 32px;">\n\n${data.code}\n</div>\n</template>\n\n<script>\n${buildScriptTag(data, model)}\n</script>\n<style>\n${fontImport}\n${data.styleTag || ''}</style>`
      },
      'package.json': {
        content: {
          // TODO: can we pull a sensible name/description from the surrounding docs somehow?
          "name": "Cedar Example Sandbox",
          "description": "https://rei.github.io/rei-cedar-docs/",
          "dependencies": {
            "@rei/cedar": "^1.0.0-alpha.1",
            "lodash": "^4.17.4",
            "vue": "^2.5.22"
          }
        },
      },
    },
  };

  return `https://codesandbox.io/api/v1/sandboxes/define?parameters=${getParameters(parameters)}`;
}

function buildScriptTag(data, model) {

  return `import { ${data.components} } from "@rei/cedar";

export default {
  name: "App",
  components: {
    ${data.components}
  },
  data() {
    return ${model ? JSON.stringify(model) : "{}"}
  }
};`
}
