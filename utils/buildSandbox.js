import { getParameters } from 'codesandbox/lib/api/define';
// API for this function
// data.name: String, the name of the component(s). This must match what the package exports  (i.e, CdrComponent not cdr-component). for packages that export multiple components, separate the names with a comma (i.e, "CdrMainComponent, CdrSubComponent")
// data.description: String, a simple description of what the sandbox is demonstrating.
// data.dependencies: Object, should be an object with a single key value pair like `{ "@rei/cdr-component": "1.0.0"}`. If your component has peerDeps, they should be added here. If using the loadImg or loadIcon options, those deps and css improts will automatically be added
// data.loadComponentCss: Boolean, whether or not the package has a CSS file that needs to be loaded. Will be inferred based on the dependency name
// data.loadIcon: Boolean, if your component or examples needs to use cdr-icon or cdr-icon-sprite, set this value to `true`
// data.loadImg: Boolean, if your component or examples needs to use cdr-img, set this value to `true`
// model: Object, if component depends on model data, pass it here (TODO: can we inline this instead?)



// TODO: do we need to load roboto/sentinel/etc.?
// TODO: make the container div centered or something? add some body margin to every example?
// TODO: how to handle including CSS in a sandbox? (just for custom checkbox/radio style examples i think?)


export default function makeMeASandbox(data, model) {
  if(!data.name || !data.dependencies || !data.code) return false

  const mainDependency = Object.keys(data.dependencies)[0]
  const componentPath = mainDependency.split("/")[1];
  const componentCss = `import "@rei/${componentPath}/dist/${componentPath}.css"`;

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
        content: `<template>\n<div style="margin: 32px;">\n\n${data.code}\n</div>\n</template>\n\n<script>\n${buildScriptTag(data, model, mainDependency)}\n</script>`
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

