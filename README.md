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

This project will automatically generate Codesandbox.io links for any examples that are passed into `cdr-doc-example-code-pair` as long as you configure them properly. To do this, add a `sandboxData` object to that file's `frontmatter` (note that most examples will only need a list of `components` set to work properly):

```
"sandboxData": {
  "components": "CdrAccordion, CdrAccordionItem", // String, the names of the components being used directly in the example
  "styleTag": ".no-box:checked ~ .no-box__content {color: green;}", // String, allows you to pass custom CSS styles into the codesandbox
},
```

And pass it into each code example pair on that page: `<cdr-doc-example-code-pair :sandbox-data="$page.frontmatter.sandboxData">`

If your examples make use of CdrIcon, you can pass `:load-sprite="true"` in order to have the sandbox load the `all-icons.svg` file from @rei/cedar-icons.

If your examples depend on a `model` being available to the component, you can pass that directly into the object: `<cdr-doc-example-code-pair :sandbox-data="$page.frontmatter.sandboxData" :model="{foo: true}">`

If you need to override the properties of the frontmatter object for a single example, you can do that with an inline `Object.assign`: `<cdr-doc-example-code-pair :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {styleTag: '.no-box:checked ~ .no-box__content {color: green;}'})">`
