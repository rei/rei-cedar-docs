import { getParameters } from 'codesandbox/lib/api/define';

export default function makeMeASandbox(data, model) {
  if(!data.name || !data.dependencies || !data.code) return false

  const mainDependency = Object.keys(data.dependencies)[0]
  const componentPath = mainDependency.split("/")[1];
  const componentCss = `import "@rei/${componentPath}/dist/${componentPath}.css"`;
  const fontImport = "@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:400|Roboto:400|Roboto+Mono:400');";

  let dependencies = {
    ...data.dependencies,
    ...data.loadIcon && {"@rei/cdr-icon": "^2.0.0"},
    ...data.loadImg && {"@rei/cdr-img": "^1.0.0"},
  }

  const parameters = {
    files: {
      'index.js': {
        content: buildIndexFile(data, componentCss),
      },
      'App.vue': {
        content: `<template>\n<div style="margin: 32px;">\n\n${data.code}\n</div>\n</template>\n\n<script>\n${buildScriptTag(data, model, mainDependency)}\n</script>\n<style>\n${fontImport}\n${data.styleTag || ''}</style>`
      },
      'package.json': {
        content: {
          "name": data.name,
          "dependencies": {
            "@rei/cdr-assets": "^0.3.0",
            "vue": "2.5.16",
            ...dependencies
          }
        },
      },
    },
  };

  return `https://codesandbox.io/api/v1/sandboxes/define?parameters=${getParameters(parameters)}`;
}


function buildScriptTag(data, model, mainDependency) {
    return `import { ${data.name} } from "${mainDependency}";
${data.loadIcon ? 'import { CdrIcon, CdrIconSprite } from "@rei/cdr-icon"' : ''}
${data.loadImg ? 'import { CdrImg } from "@rei/cdr-img"' : ''}

export default {
  name: "App",
  components: {
    ${data.name}
    ${data.loadIcon ? ', CdrIconSprite, CdrIcon' : ''}
    ${data.loadImg ? ', CdrImg' : ''}
  },
  data() {
    return ${model ? JSON.stringify(model) : "{}"}
  }
};`
}

function buildIndexFile(data, componentCss) {
  return `import Vue from "vue";
import App from "./App";

import "@rei/cdr-assets/dist/cdr-core.css";
import "@rei/cdr-assets/dist/cdr-fonts.css";

${data.loadComponentCss ? componentCss : ''}
${data.loadIcon ? 'import "@rei/cdr-icon/dist/cdr-icon.css";' : ''}
${data.loadImg ? 'import "@rei/cdr-img/dist/cdr-img.css";' : ''}

new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});`
}

