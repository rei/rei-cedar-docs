## Environment Setup

### Setup

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

### Development

Most doc site content is authored in markdown inside of the `/docs` directory.
Image assets can be put in a directory inside `/docs/.vuepress/public` and those assets can then be referenced inside of the markdown pages using the `$withBase` utility function: `<cdr-img :src="$withBase('/name_of_directory_inside_public/asset_file_name.png')"/>`.
Changes to the doc site page layout or styling can be made inside `/docs/.vuepress/theme`
Re-usable doc site components can be defined in `/docs/.vuepress/components`. These components can then be referenced inside of the markdown documents
Templates for new component or release note pages can be found in `/templates`.

### Deploying Doc Site Updates

Merges to the `next` branch will automatically be deployed to the staging site (See "Cedar Development Overview" in confluence for more information).
Merges to the `master` branch will automatically be deployed to the [public doc site](https://rei.github.io/rei-cedar-docs/).

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

Function objects can be added to the `methods` and `computed` properties of the component as well. Note that `window` functions will not be available within these functions (i.e, setTimeout, console.log, alert): `<cdr-doc-example-code-pair :sandbox-data="$page.frontmatter.sandboxData" :model="{foo: true}" :computed="{foo() {return this.foo ? 'bar' : 'baz';}}" :methods="{blah() {this.foo = false;}}">`

If you need to override the properties of the frontmatter object for a single example, you can do that with an inline `Object.assign`: `<cdr-doc-example-code-pair :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {styleTag: '.no-box:checked ~ .no-box__content {color: green;}'})">`

See the [buildSandbox.js](https://github.com/rei/rei-cedar-docs/blob/next/utils/buildSandbox.js) utility file for more information on how code examples are translated into a Codesandbox.
