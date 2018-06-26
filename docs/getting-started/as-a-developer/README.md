---
{
  "title": "As a Developer",
  "title_metadata": false,
  "layout": "LayoutArticle",
  "summary": false,
  "breadcrumbs": [
    {
      "text": "Getting Started/",
      "href": "/getting-started/"
    }
  ],
}
---

<cdr-doc-table-of-contents-shell>

## Cedar + Vue
Cedar components are built using [Vue](https://vuejs.org) and can only be used in Vue projects
<hr>

## About component packages
All components are available as a package on [npm within the REI organization](https://www.npmjs.com/search?q=%40rei).

Each component is a separate NPM package. This ensures that you only have the essentials for your application - nothing more.

<cdr-doc-code-snippet :copy-button="false" :line-numbers="false">
```js
npm install --save @rei/cdr-<component-name>
```
</cdr-doc-code-snippet>

Once installed, files are located in the package&lsquo;s `dist/` folder. Component packages often contain one JS file and one CSS file. 

<cdr-doc-code-snippet :copy-button="false" :line-numbers="false">
```js
node_modules/@rei/cdr-<component-name>/dist/cdr-<component-name>.js
node_modules/@rei/cdr-<component-name>/dist/cdr-<component-name>.css
```
</cdr-doc-code-snippet>

Some packages contain more (or fewer) than these two files which is noted in the package’s documentation.

<hr>

## Setup a project
All components depend upon core style and font assets. Without these assets included, components may be styled incorrectly.

First, install the assets package:

<cdr-doc-code-snippet :copy-button="false" :line-numbers="false">
```js
npm install --save @rei/cdr-assets
```
</cdr-doc-code-snippet>

The [cdr-assets package](https://www.npmjs.com/package/@rei/cdr-assets) contains these files:
  * cdr-core.css
  * cdr-fonts.css
  * cdr-tokens.scss

### Install required core styles
Cedar requires a core stylesheet to render components properly.

To include the stylesheet, import `cdr-core.css`:

<cdr-doc-code-snippet :copy-button="false" :line-numbers="false">
```js
import '@rei/cdr-assets/dist/cdr-core.css';
```
</cdr-doc-code-snippet>

## Install required fonts
Cedar uses specific fonts – Roboto, Roboto Condensed, and Sentinel – that are required for your project. 

Roboto and Roboto Condensed are available from [Google Fonts](https://fonts.google.com/specimen/Roboto).

Sentinel is available in the `cdr-assets` package and mapped using the `cdr-fonts.css` file.

To include these fonts, import `cdr-fonts.css`:

<cdr-doc-code-snippet :copy-button="false" :line-numbers="false">
```js
import '@rei/cdr-assets/dist/cdr-fonts.css';
```
</cdr-doc-code-snippet>

<hr>

## Install a component
Examples below demo the `CdrButton` component.

<cdr-doc-code-snippet :copy-button="false" :line-numbers="false">
```js
npm install --save @rei/cdr-button
```
</cdr-doc-code-snippet>

### Including component-specific CSS
How you include css depends on your tech stack and varies from project to project. 

Here are a few common methods:

#### Webpack (css-loader)
If using a bundler, import css into javascript and let loaders extract it.

<cdr-doc-code-snippet :copy-button="false" :line-numbers="false">
```js
import '@rei/cdr-button/dist/cdr-button.css';
```
</cdr-doc-code-snippet>

#### Postcss-import
Cedar packages include the [unofficial style field]() supported by postcss-import.

<cdr-doc-code-snippet :copy-button="false" :line-numbers="false">
```js
import '@rei/cdr-button’;
```
</cdr-doc-code-snippet>

#### SCSS (or another pre-processor)
You can also import css from the node_modules folder.

<cdr-doc-code-snippet :copy-button="false" :line-numbers="false">
```js
import 'path/to/node_modules/@rei/cdr-button/dist/cdr-button.css';
```
</cdr-doc-code-snippet>

Note: Code snippets provided throughout the docs will demonstrate the webpack + css-loader method.

<hr>

## Use a component
The examples in our documentation demonstrate usage in a [Single File Component](https://vuejs.org/v2/guide/single-file-components.html). If you aren’t using SFCs, read the vue docs for [registering components](https://vuejs.org/v2/guide/components-registration.html).

Examples below demonstrate the `CdrButton` component. Refer to each component’s documentation for a complete component API and advanced examples.

### Including component-specific CSS
1. Import the component within the `script` block.

<cdr-doc-code-snippet :copy-button="false" :line-numbers="false">
```js
import { CdrButton } from '@rei/cdr-button';
```
</cdr-doc-code-snippet>

2. Register the component in the `components:` object.

<cdr-doc-code-snippet :copy-button="false" :line-numbers="false">
```js
components: {
  CdrButton
}
```
</cdr-doc-code-snippet>

3. Add the component element, such as `<cdr-button>` into the template.

<cdr-doc-code-snippet :copy-button="false" :line-numbers="false">
```html
<cdr-button>I'm a button</cdr-button>
```
</cdr-doc-code-snippet>

Final file:

<cdr-doc-code-snippet :copy-button="false" :line-numbers="false" :max-height="false">
```html
<template>
    <cdr-button>I'm a button</cdr-button>
</template>

<script>
import { CdrButton } from '@rei/cdr-button';
export default {
  ...
  components: {
      CdrButton
  }
}
</script>
```
</cdr-doc-code-snippet>


</cdr-doc-table-of-contents-shell>
