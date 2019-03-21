---
{
  "title": "As a Developer",
  "title_metadata": false,
  "layout": "LayoutArticle",
  "breadcrumbs": [
    {
      "text": "Getting Started/"
    }
  ],
}
---

<cdr-doc-table-of-contents-shell>

## Cedar + Vue
Cedar components are built using [Vue](https://vuejs.org) and can only be used in Vue projects
<hr>

## About Component Packages
All components are available as a package on [NPM within the REI organization](https://www.npmjs.com/search?q=%40rei).

Each component is a separate NPM package. This ensures that you only have the essentials for your application - nothing more.

_Terminal_
```bash
npm install --save @rei/cdr-<component-name>
```

Once installed, files are located in the package&lsquo;s `dist/` folder. Component packages often contain one JS file and one CSS file. 

```js
node_modules/@rei/cdr-<component-name>/dist/cdr-<component-name>.js
node_modules/@rei/cdr-<component-name>/dist/cdr-<component-name>.css
```

Some packages contain more (or fewer) than these two files which is noted in the package’s documentation.

<hr>

## Setting Up Projects
All components depend upon core style and font assets. Without these assets included, components may be styled incorrectly.

First, install the assets package:

_Terminal_
```bash
npm install --save @rei/cdr-assets
```

The [CdrAssets package](https://www.npmjs.com/package/@rei/cdr-assets) contains these files:
  * cdr-core.css
  * cdr-fonts.css

### Install Required Core Styles
Cedar requires a core stylesheet to render components properly.

To include the stylesheet, import `cdr-core.css`:

_main.js_
```js
import '@rei/cdr-assets/dist/cdr-core.css';
```

## Install Required Fonts
Cedar uses specific fonts – Roboto, Roboto Condensed, and Sentinel – that are required for your project. 

Roboto and Roboto Condensed are available from [Google Fonts](https://fonts.google.com/selection?selection.family=Roboto%7CRoboto+Condensed&query=robo) (preselected for quick use).

Sentinel is available in the `cdr-assets` package and mapped using the `cdr-fonts.css` file.

To include these fonts, import `cdr-fonts.css`:

_main.js_
```js
import '@rei/cdr-assets/dist/cdr-fonts.css';
```

<hr>

## Accessibility
REI requires 100% compliance with WCAG AA guidelines. Relevant guidelines are provided in each component's documentation.

<hr>

## Developing for Web

### Install Components
The following example demonstrates the **CdrButton** component.

_Terminal_
```bash
npm install --save @rei/cdr-button
```

#### Include Component-Specific CSS
How you include CSS depends on your tech stack and varies from project to project. 

Here are a few common methods:

##### Webpack
If using a bundler, import CSS into JavaScript and let loaders such as `css-loader` extract it.

_main.js_
```js
import '@rei/cdr-button/dist/cdr-button.css';
```

##### PostCSS
Cedar packages include the [unofficial style field](https://jaketrent.com/post/package-json-style-attribute/) supported by `postcss-import`.

_cedar.postcss_
```css
import '@rei/cdr-button’;
```

##### SCSS
You can also import CSS from the node_modules folder such as SCSS or another pre-processor.

_cedar.scss_
```js
import '~@rei/cdr-button/dist/cdr-button.css';
```

**Note**: Code snippets provided throughout the docs will demonstrate the `webpack` and `css-loader` method.

<hr>

### Using Components
The examples in our documentation demonstrate usage in a [Single File Component](https://vuejs.org/v2/guide/single-file-components.html). If you aren’t using SFCs, read the Vue.js documentation for [registering components](https://vuejs.org/v2/guide/components-registration.html).

Examples below demonstrate the **CdrButton** component. Refer to each component’s documentation for a complete component API and advanced examples.

#### Include Component-Specific CSS
1. Import the component within the `script` block.

_local.vue_
```js
import { CdrButton } from '@rei/cdr-button';
```

2. Register the component in the `components:` object.

_local.vue_
```js
components: {
  CdrButton
}
```

3. Add the component element, such as `<cdr-button>` into the `template`.

_local.vue_
```html
<cdr-button>I'm a button</cdr-button>
```

**Final file:**

_local.vue_
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

#### Configure Component Props

Props are custom attributes registered on a component. For more information about props, read [Vue's Props documentation](https://vuejs.org/v2/guide/components-props.html).

Most Cedar components provide props to configure component data, display, and logic. For example, the **CdrButton** component provides a `size` prop to configure the button’s size.

```html
<cdr-button size="large">I'm a large button</cdr-button>
```

Refer to each component’s API documentation for a full list of available props.

#### Bind Dynamic Data to Components
Props can be [static or dynamic](https://vuejs.org/v2/guide/components-props.html#Passing-Static-or-Dynamic-Props). To provide dynamic data (or non-string data) add a colon (`:`) before the prop name.

Prop names are also documented and referenced in JavaScript as camel case, but [used in the template as kebab-case](https://vuejs.org/v2/guide/components-props.html#Prop-Casing-camelCase-vs-kebab-case).

In this example, the `responsiveSize` prop accepts an array of strings denoting size at different breakpoints. Note that `responsiveSize` is used as `responsive-size` in the template.

```html
<cdr-button :responsive-size="['small@xs', 'large@sm']">I'm a responsive button</cdr-button>
```

#### Add Content Using Slots

Some components use slots for content distribution. Most components will have a single default slot; others will have named slots. Slots are listed as part of the API for all components. For more information about slots, read [Vue's Slots documentation](https://vuejs.org/v2/guide/components-slots.html).

Adding content to a default slot

```html
<cdr-button>I'm content in the default slot</cdr-button>
```

Adding content to a named slot

```html
<my-component>
  <slot name="header">I'm content in the header slot</slot>

  <slot name="footer">I'm content in the footer slot</slot>
</my-component>
```

<hr>

### CSS Modules and Custom Class Names
Component CSS class names are [CSS Modules](https://github.com/css-modules/css-modules) that reflect the package version. For example, `CdrButton@0.2.0` will have classes that end in ‘_0-2-0’. This allows the possibility of components at different versions to live together without having CSS class name collisions. 

Never use Cedar class names within your own CSS or target them in JavaScript; they will change as you upgrade the package and break any functionality or styling you attach to them. 

To target CSS, create custom selectors such as `my-wrapper` and `my-selector` in the following example…

```html
<template>
  <div class="my-wrapper">
    <cdr-button class="my-selector">I'm a button</cdr-button>
  </div>
</template>

...

<style>
.my-wrapper > .my-selector {
 /* override button styles here */
}
</style>
```

Some components are more complex and have templates with multiple areas you may wish to add your own selectors. We try to be mindful of this and add props that will allow you to target your own classes to various elements. 

For example with checkbox you may want to target both the label and the content areas. 

```html
<template>
  <cdr-checkbox label-class="my-label" content-class="my-content">My checkbox</cdr-checkbox>
</template>

...

<style>
.my-label {

}

.my-content {

}
</style>
```

If you find that a component needs to have a targeted prop class added, please [create an issue](https://github.com/rei/rei-cedar/issues) and let us know.

<hr/>


## Using Token Variables
Cedar provides a robust collection of [design tokens](https://rei.github.io/rei-cedar-tokens/#/) corresponding to Cedar's foundations. Standard colors, typography mixins, space, size and other properties are available in the `cdr-tokens` package as Sass/SCSS variables. If you need them in a different format such as LESS or XML, please [submit a feature request](https://airtable.com/shrcbq9CHthuMO7AC).

As you extend Cedar components and create your own components, work with your designer to take advantage of this inventory in your custom classes. Using them this way will ensure your custom styles remain consistent with design guidelines.


### Web

#### Install Tokens Package

Resources are available within the CdrToken package:
  - SCSS variables at `dist/scss/cdr-tokens.scss`
  - LESS variables at `dist/less/cdr-tokens.less`
  - JS as both commonJS and ES module at `dist/js`. Also noted in package.json as `main` and `module` respectively


To incorporate the required assets, use the following steps:
1. Install the CdrToken package using `npm` in your terminal:

_Terminal_
```js
npm install --save @rei/cdr-tokens
```

#### Using Cedar Design Tokens

The package contains files for using tokens in both CSS (as SCSS and LESS variables) and JavaScript (as commonJS and ES modules).

Here we’re using a typography mixin and a color token to style `.myClass` from the SCSS tokens file.

_local.vue_
```html
<template>
  <p class="myClass">I'm styled with tokens!</p>
</template>

<script>
export default {
  ...
}
</script>

<style lang="scss">
@import '~@rei/cdr-tokens/dist/cdr-tokens.scss';

.myClass {
  @include cdr-text-default-body();
  color: $cdr-color-text-primary-lightmode;
}
</style>
```

<hr/>


### Developing for Mobile

Currently development for iOS and Android is through the usage of Cedar Tokens as documented below.  

Our mobile development packages include fonts that are licensed and proprietary to REI. For more information or questions regarding Cedar’s support for external consumers using the mobile development packages on GitHub or NPM, please reach out to cedar@rei.com.

#### iOS

##### CocoaPods
The preferred way to consume Cedar for iOS is through CocoaPods.  View [www.cocoapods.org](https://www.cocoapods.org/) for information.

To find out if Cocoapods is already installed, open the terminal and run:

_Terminal_
```bash
pod --version 
```

If “command not found” is returned then Cocoapods in not installed.

To install Cocoapods: 

_Terminal_
```bash
sudo gem install cocoapods 
```

To set up Cocoapods , from the project/workspace directory, run:

_Terminal_
```bash
pod init 
```

The above command will create a Podfile in your current directory.
 
 
The Podfile must be modified with the following to include Cedar as a dependency:

**1. Prior to the Targets Section of the Podfile:**

_Terminal_
```bash
source 'https://git.rei.com/projects/CDR/repos/cedar-iosl/CedarPodSpec.git'
```

**2. In the Targets Section of the Podfile:**

_Terminal_
```bash
pod 'CedarTokens', '~> 0.2.0'
```

**Full Podfile Example for Reference:**

_Terminal_
```bash
project 'CedarIOSCocoaPodDemo.xcodeproj/'

platform :ios, '12.0'

source 'https://git.rei.com/projects/CDR/repos/cedar-ios-podspec/CedarPodSpec.git'

target 'CedarIOSCocoaPodDemo' do
  # Pods for CedarIOSCocoaPodDemo
  pod 'CedarTokens', '~> 0.2.0'

end
```

<hr/>

##### Manual Consumption
If you don’t use Cocoapods, you can manually import files into your iOS project/workspace.  

**Colors**

Color Sets in a .xcasset file.  Import the file by dragging the `Cedar.xcassets > Colors` folder into your project's asset folder.

You can set the colors in Interface Builder, or by:

_Terminal_
```bash
Button1.backgroundColor = UIColor(named: "cdr_color_text_primary_lightmode");
```

**Text**

The package includes Sentinel and Roboto font source files along with Swift Classes for applying Apple's Dynamic Type behavior to the font.  

Importing the source font is done by creating a group under your target in xcode and dragging the font files into that group.  Add the fonts to the info.plist under `Fonts provided by application`.

Finally, import the CedarFont.swift file along with the CedarTextStyles.plist.  This will allow you to set the fonts by:

_Terminal_
```bash
  // Button Title 1 Style
  Button1.titleLabel?.font = CedarFont().getCedarFont(forTextStyle: .title1)
  Button1.titleLabel?.adjustsFontForContentSizeCategory = true;
```

**Icons**

Cedar provides icons  in vector pdf format for iOS scaling.  According to initial investigation, only one file per icon is needed in this format. There is no need for @1x, @2x, and @3x variants. 


<hr/>

#### Android
##### Maven
The preferred way to consume Cedar Tokens on Android is to use Maven.

Add the following to the build.gradle file in your Android project:

_Terminal_
```bash
Implementation mvnrepos.rei.com:cedar-android.aar:0.2.0
```

##### Manual Consumption
If you don’t use Maven, you can import the Cedar Tokens into your Android project/workspace manually by dragging the resources into your project within Android Studio.  The resources are located at the [cedar-android repository on Bitbucket]( https://git.rei.com/projects/CDR/repos/cedar-android) 


<hr/>


</cdr-doc-table-of-contents-shell>
