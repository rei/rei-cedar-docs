import { getParameters } from 'codesandbox/lib/api/define';
import packageJson from '../package.json';

const INDEX_JS = `import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
`;

const VITE_CONFIG_JS = `
  import { defineConfig } from 'vite'
  import vue from '@vitejs/plugin-vue'

  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [vue()]
  })
`

const SANDBOX_CONFIG_JS = `
  {
    "infiniteLoopProtection": true,
    "hardReloadOnChange": false,
    "view": "browser",
    "container": {
      "node": "16"
    }
  }
`
export default function makeMeASandbox(data, model, computed, methods) {
  // TODO: can we grab the preceding heading to use for name/title?
  const name = "CedarExampleSandbox";

  const parameters = {
    files: {
      'index.js': {
        content: INDEX_JS,
      },
      'App.vue': {
        content: buildContent(data, model, computed, methods)
      },
      'package.json': {
        content: {
          "name": name,
            // TODO: can we grab the preceding text to use for description?
          "description": "https://rei.github.io/rei-cedar-docs/",
          "scripts": {
            "dev": "vite",
            "build": "vite build",
            "serve": "vite preview"
          },
          "devDependencies": {
            "vite": "latest",
            "@vitejs/plugin-vue": "^2.2.4",
            "sass": "^1.32.11",
          },
          "dependencies": {
            "@rei/cdr-tokens": "^11.0.0",
            "@rei/cedar": "^13.0.0",
            "core-js": "^3.22.7",
            "lodash-es": "^4.17.21",
            "tabbable": "^4.0.0",
            "vue": "^3.2.23"
          }
        },
      },
      'index.html': {
        content: buildIndexHtml(name)
      },
      'vite.config.js': {
        content: VITE_CONFIG_JS
      },
      'sandbox.config.json': {
        content: SANDBOX_CONFIG_JS
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
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/index.js"></script>
  </body>
</html>`;
}

function buildContent(data, model, computed, methods) {
  return `
<template>
  <div class="example-root">
    ${data.loadSprite ? '<div v-html="svgSprite" style="display: none;"/>' : ''}
    ${data.code}
  </div>
</template>

<script>
  ${buildScriptTag(data, model, computed, methods)}
</script>

<style lang="scss">
  @import "@rei/cedar/dist/cdr-fonts.css";
  /* NOTE: compiled Cedar CSS used for examples only */
  @import "@rei/cedar/dist/cedar-compiled.css";
  @import "@rei/cdr-tokens/dist/scss/cdr-tokens.scss";
  .example-root { margin: $cdr-space-two-x }
  ${data.styleTag || ''}
</style>`;
}

function buildScriptTag(data, model, computed, methods) {
  const componentsImport = `import { ${data.components} } from "@rei/cedar";`
  const spriteString = 'svgSprite, ';

  let stringModel = model ? JSON.stringify(model) : "{}";

  // Insert sprite string into model data
  if (data.loadSprite) {
    stringModel = stringModel.slice(0, 1) + spriteString + stringModel.slice(1);
  }

  return `
${data.components ? componentsImport : ''}
${data.loadSprite ? 'import svgSprite from "@rei/cedar-icons/dist/all-icons.svg"; // note: sprite should be loaded via HTML, not JS' : ''}

export default {
  name: "App",
  components: {
    ${data.components ? data.components : ''}
  },
  data() {
    return ${stringModel}
  },
  ${computed ? `computed: ${stringifyFunctionObject(computed)},` : ''}
  ${methods ? `methods: ${stringifyFunctionObject(methods)},` : ''}
};`
}

function stringifyFunctionObject(obj) {
  const funcs = Object.keys(obj).map((key) => {
    return `${key}: ${obj[key].toString()}`
  })
  return `{${funcs.join(',\n ')}}`
}
