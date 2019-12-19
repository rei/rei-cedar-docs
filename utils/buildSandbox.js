import { getParameters } from 'codesandbox/lib/api/define';
import packageJson from '../package.json';

const INDEX_JS = `import Vue from "vue";
import App from "./App";

import "@rei/cedar/dist/cdr-fonts.css";
/* NOTE: compiled Cedar CSS used for examples only */
import "@rei/cedar/dist/cedar-compiled.css";

new Vue({
el: "#app",
components: { App },
template: "<App/>"
});`;

export default function makeMeASandbox(data, model) {
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
            "@rei/cedar": packageJson.dependencies['@rei/cedar'],
            "vue": "^2.5.22"
          }
        },
      },
      'index.html': {
        content: buildIndexHtml(name)
      }
    },
  };

  if (data.loadSprite) {
    parameters.files['package.json'].content.dependencies['@rei/cedar-icons'] = packageJson.devDependencies['@rei/cedar-icons']
  }

  return `https://codesandbox.io/api/v1/sandboxes/define?parameters=${getParameters(parameters)}`;
}

function buildIndexHtml(title) {
  return `<!DOCTYPE html>
  <html>

  <head>
  	<meta charset="utf-8">
  	<meta name="viewport" content="width=device-width,initial-scale=1.0">
  	<title>${title}</title>
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
    ${data.loadSprite ? '<div v-html="svgSprite" style="display: none;"/>' : ''}
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
  const componentsImport = `import { ${data.components} } from "@rei/cedar";`;

  return `
${data.components ? componentsImport : ''}
${data.loadSprite ? 'import svgSprite from "@rei/cedar-icons/dist/all-icons.svg"; // note: sprite should be loaded via HTML, not JS' : ''}

export default {
  name: "App",
  components: {
    ${data.components ? data.components : ''}
  },
  data() {
    return ${model ? JSON.stringify(model) : "{}"}
  },
  ${data.loadSprite ? 'computed: { svgSprite() { return svgSprite; } }' : ''}
};`
}
