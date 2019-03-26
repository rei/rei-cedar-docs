## Environment Setup

### Install nodejs if you haven't already
Download the latest long-term stable (LTS) version from the nodejs website:

https://nodejs.org/en/

``` bash
# clone the repo
$ git clone git@github.com:rei/rei-cedar-docs.git
OR
$ git clone https://github.com/rei/rei-cedar-docs.git

# cd to cloned repo
$ cd /path/to/cloned/repo

# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:8080
$ npm run dev

# build for production
$ npm run build
```

The doc site is built using [VuePress](https://vuepress.vuejs.org) and is available for viewing on the `next` branch [here](http://cedar-docs.rei-cloud.com/rei-cedar-docs/)

### Codesandbox Examples

This project will automatically generate Codesandbox.io links for any examples that are passed into `cdr-doc-example-code-pair` as long as you configure them properly. To do this, add a `sandboxData` object to that file's `frontmatter` (note that most examples will only need a name, dependencies, and loadComponentCss set to work properly):

```
"sandboxData": {
  "name": "CdrAccordion, CdrAccordionItem", // String, the names of the components being demonstrated. If a package exports multiple components, separate them with a comma
  "dependencies": { "@rei/cdr-accordion": "^1.0.0" }, // Object, the package name and version of the component 
  "loadComponentCss": true, // Boolean, whether or not the package has a CSS file that needs to be loaded
  "loadIcon": true, // Boolean, whether or not the codesandbox needs to load CdrIcon and CdrIconSprite in the example code
  "loadImage": true, // Boolean, whether or not the codesandbox needs to load CdrImg in the example code
  "styleTag": ".no-box:checked ~ .no-box__content {color: green;}", // String, allows you to pass custom CSS styles into the codesandbox 
  
},
```

And pass it into each code example pair on that page: `<cdr-doc-example-code-pair :sandbox-data="$page.frontmatter.sandboxData">`

If your examples depend on a `model` being available to the component, you can pass that directly into the object: `<cdr-doc-example-code-pair :sandbox-data="$page.frontmatter.sandboxData" :model="{foo: true}">`

If you need to override the properties of the frontmatter object for a single example, you can do that with an inline `Object.assign`: `<cdr-doc-example-code-pair :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {styleTag: '.no-box:checked ~ .no-box__content {color: green;}'})">`

