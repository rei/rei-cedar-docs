import { getParameters } from 'codesandbox/lib/api/define';

const INDEX_JS = `import Vue from "vue";
import App from "./App";

import "@rei/cedar/dist/cdr-fonts.css";
import "@rei/cedar/dist/cedar.css";

new Vue({
el: "#app",
components: { App },
template: "<App/>"
});`;

export default function makeMeASandbox(data, model) {
  if(!data.components) return false
  // TODO: can we grab the preceding heading to use for name/title?
  const name = "Cedar Example Sandbox";

  const parameters = {
    files: {
      'index.js': {
        content: INDEX_JS,
      },
      'App.vue': {
        content: buildContent(data, model)
      },
      'package.json': {
        content: {
          "name": name,
            // TODO: can we grab the preceding text to use for description?
          "description": "https://rei.github.io/rei-cedar-docs/",
          "dependencies": {
            "@rei/cedar": "^1.0.0-alpha.1",
            "lodash": "^4.17.4",
            "vue": "^2.5.22"
          }
        },
      },
      'index.html': {
        content: buildIndexHtml(name)
      }
    },
  };

  return `https://codesandbox.io/api/v1/sandboxes/define?parameters=${getParameters(parameters)}`;
}

function buildIndexHtml(title) {
  return `<!DOCTYPE html>
  <html>

  <head>
  	<meta charset="utf-8">
  	<meta name="viewport" content="width=device-width,initial-scale=1.0">
  	<title>${title}</title>
  	<link href="https://www.rei.com/static/rev/global/head/rei-cedar-fontless-7478200331.min.css" />
  	<link href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Condensed" rel="stylesheet">
  </head>
  
  <body>
  	<div id="app"></div>
  </body>
  
  </html>`;
}

function buildContent(data, model, fontImport) {
  return `
<template>
  <div style="margin: 32px;">
    ${data.code}
  </div>
</template>

<script>
  ${buildScriptTag(data, model)}
</script>

<style>
  ${data.styleTag || ''}
</style>`;
}

function buildScriptTag(data, model) {
  return `
import { ${data.components} } from "@rei/cedar";

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
