---
{
  "title": "As a Developer",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "breadcrumbs": [
    {
      "text": "Getting Started/"
    }
  ],
}
---

<cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>

## Cedar + Vue
Cedar components are built using [Vue](https://vuejs.org) and can only be used in Vue projects.

All components are available using an [NPM package](https://www.npmjs.com/package/@rei/cedar).

_Terminal_
```bash
npm install --save @rei/cedar
```

Once installed, you can import individual Cedar components from the main package into your project:

_Main.vue_
```js
<script>
// import packages from Cedar
import { CdrText, CdrButton, CdrLink } from '@rei/cedar'

export default {
  name: 'ExampleComponent',
  // register your Cedar components
  components: {
    CdrText,
    CdrButton,
    CdrLink
  }
};
</script>

<template>
  // use the registered Cedar components in your template
  <cdr-text>Foo</cdr-text>
  <cdr-button>Bar</cdr-button>
  <cdr-link>Baz</cdr-link>
  // Cedar utility classes can be used as long as they are loaded in your main CSS file
  <cdr-text class="cdr-display-sr-only">Fizz</cdr-text>
</template>

<style>
  // no need to import any Cedar related CSS here
</style>
```
_index.scss_
```css
/* import the Cedar CSS reset first*/
@import url('@rei/cedar/dist/style/reset.css');
/* import each component used in your project  */
@import url('@rei/cedar/dist/style/cdr-text.css');
@import url('@rei/cedar/dist/style/cdr-button.css');
@import url('@rei/cedar/dist/style/cdr-link.css');
/* import any Cedar utility classes used */
@import url('@rei/cedar/dist/style/display.css');
```

<hr>

## Setting Up Projects
All components depend upon core reset and font assets. Without these assets included, components will not render correctly. These files are distributed as part of the Cedar NPM package.

### Install Vue Components Package

_Terminal_
```bash
npm install --save @rei/cedar
```

### Install Required Core Styles
Cedar requires a core reset stylesheet to render properly. This file should be loaded once per micro-site, and it should be the first CSS file loaded.

To include the stylesheet, import the `reset.css` file:

_main.js_
```js
import '@rei/cedar/dist/style/reset.css';
```

### Install Required Fonts
Cedar uses specific fonts – Stuart and Graphik – that are required for your project. These fonts are available in the Cedar NPM package and mapped using the `cdr-fonts.css` file.

To include these fonts, import `cdr-fonts.css`:

_main.js_
```js
import '@rei/cedar/dist/cdr-fonts.css';
```

<hr>

### Include Component and Utility CSS

How you include CSS depends on your tech stack and varies from project to project. We recommend using `postcss` with the `postcss-import` plugin to allow Cedar CSS assets to be de-duped. If you are using FEBS^6 then this is set up for you by default.

1. Create an SCSS file that imports the CSS for any Cedar components or utility classes used in your project.

_index.scss_
```css
/* import each component used in your project  */
@import url('@rei/cedar/dist/style/cdr-text.css');
@import url('@rei/cedar/dist/style/cdr-button.css');
@import url('@rei/cedar/dist/style/cdr-link.css');
/* import any Cedar utility classes used */
@import url('@rei/cedar/dist/style/display.css');
```

2. Load that file in your main JavaScript entry:

_index.js_
```js
import './index.scss';
/* rest of your component/app */
```

Cedar CSS assets can all be found inside `node_modules/@rei/cedar/dist/style/`. Filenames for component CSS match the `kebab-case` name of the component. Filenames for utility classes match their prefix as follows:

| Path | Prefix | Description |
|--------|------|------|
| @rei/cedar/dist/style/align.css | `cdr-align-` | CSS utility classes for alignment. |
| @rei/cedar/dist/style/color.css | `cdr-bg-`, `cdr-fg-` | CSS utility classes for color. |
| @rei/cedar/dist/style/container.css | `cdr-container-` | CSS utility classes for container. |
| @rei/cedar/dist/style/display.css | `cdr-display-` | CSS utility classes for display logic. |
| @rei/cedar/dist/style/space.css | `cdr-XX-space-` | CSS utility classes for spacing. |
| @rei/cedar/dist/style/text.css | `cdr-text-` | CSS utility classes for typography. This is the same file as `cdr-text.css`. |

#### Include Full CSS

For public facing production micro-sites you should always optimize your Cedar CSS imports by only loading the assets you need. However, for some projects it may make sense to skip that process and just load all of the Cedar assets. To support this we provide both compiled and un-compiled versions of the full Cedar CSS and the full utility classes. If your project is loading shared components then you should use the un-compiled version along with `postcss` and `postcss-import` to ensure that duplicate Cedar assets are not loaded. If your project is not using any shared components or has no build system at all it may make more sense to use the compiled version.

| path | description | compiled |
|--------|------|------|
| @rei/cedar/dist/style/cdr-full.css | Imports all of the Cedar component CSS and utility classes. | no |
| @rei/cedar/dist/style/utilities.css | Imports all of the Cedar CSS utility classes.  | no |
| @rei/cedar/dist/cedar.css | Full compiled Cedar component CSS and utilities. | yes |
| @rei/cedar/dist/utilities.css | Full compiled Cedar CSS utility classes. | yes |


<hr/>

### Using Components

The examples in our documentation demonstrate usage in a [Single File Component](https://vuejs.org/v2/guide/single-file-components.html). If you aren’t using SFCs, read the Vue.js documentation for [registering components](https://vuejs.org/v2/guide/components-registration.html).

Examples below demonstrate the **CdrButton** component. Refer to each component’s documentation for a complete component API and advanced examples.

#### Loading a component in Vue
1. Import the component within the `script` block.

_local.vue_
```js
import { CdrButton } from '@rei/cedar';
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
<cdr-button space="cdr-mb-space-one-x">I'm a button</cdr-button>
```

4. Load Cedar CSS assets in your main CSS file:

_index.scss_
```css
/* import the space utility classes (i.e, cs-mb-space-one-x) */
@import url('@rei/cedar/dist/style/space.css');
/* import the button CSS file */
@import url('@rei/cedar/dist/style/cdr-button.css');
```

**Final file:**

_local.vue_
```html
<template>
    <cdr-button space="cdr-mb-space-one-x">I'm a button</cdr-button>
</template>

<script>
import { CdrButton } from '@rei/cedar';
export default {
  ...
  components: {
      CdrButton
  }
}
</script>
```

_index.scss_
```css
@import url('@rei/cedar/dist/style/space.css');
@import url('@rei/cedar/dist/style/cdr-button.css');
```

#### Configure Component Props

Props are custom attributes registered on a component. For more information about props, read [Vue's Props documentation](https://vuejs.org/v2/guide/components-props.html).

Most Cedar components provide props to configure component data, display, and logic. For example, the **CdrButton** component provides a `size` prop to configure the button’s size.

```html
<cdr-button size="large">I'm a large button</cdr-button>
```

Refer to each component’s API documentation for a full list of available properties.

#### Bind Dynamic Data to Components
Props can be [static or dynamic](https://vuejs.org/v2/guide/components-props.html#Passing-Static-or-Dynamic-Props). To provide dynamic data (or non-string data) add a colon (`:`) before the prop name.

Prop names are also documented and referenced in JavaScript as camel case, but [used in the template as kebab-case](https://vuejs.org/v2/guide/components-props.html#Prop-Casing-camelCase-vs-kebab-case).

In this example, the `size` prop accepts a string denoting size at different breakpoints.

```html
<cdr-button size="small@xs large@sm">I'm a responsive button</cdr-button>
```

#### Add Content Using Slots

Some components use slots for content distribution. Most components will have a single default slot; others will have named slots or scoped slots. Slots are listed as part of the API for all components. For more information about slots, read [Vue's Slots documentation](https://vuejs.org/v2/guide/components-slots.html).

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

Adding content to a scoped slot

```html
<my-component>
  <template
    slot="name-of-the-slot"
    slot-scope="scopeObject"
  >
    {{scopeObject.content}} {{scopeObject.someAttribute}}
  </template>
</my-component>
```

<hr>

### CSS Modules and Custom Class Names
Component CSS class names use [CSS Modules](https://github.com/css-modules/css-modules) that reflect the package version. For example, `@rei/cedar@42.1.3` will have classes that end in `_42.1.3`. This allows for multiple versions of Cedar to be used together on the same page.

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

Some components are more complex and have templates with multiple areas where you may wish to add your own selectors. We try to be mindful of this and add props that will allow you to target your own classes to various elements.

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
Cedar provides a robust collection of [design tokens](https://rei.github.io/rei-cedar-tokens/#/) corresponding to Cedar's foundations. Standard colors, typography, space, size and other properties are available in the `cdr-tokens` package. Outputs support web, iOS, and Android consumers.

As you create your own components, work with your designer to take advantage of this inventory in your custom classes. Using them this way will ensure your custom styles remain consistent with design guidelines.



### Install Tokens Package

Resources are available within the **[CdrToken package](https://www.npmjs.com/package/@rei/cdr-tokens)**:
  - SCSS variables at `dist/scss/cdr-tokens.scss`
  - LESS variables at `dist/less/cdr-tokens.less`
  - JS as both commonJS and ES module at `dist/js`. Also noted in package.json as `main` and `module` respectively
    - `dist/js/cdr-tokens.common.js`
    - `dist/js/cdr-tokens.esm.js`

<br>

To incorporate the required assets, use the following steps:
1. Install the **CdrToken package** using `npm` in your terminal:

_Terminal_
```js
npm install --save @rei/cdr-tokens
```

### Using Cedar Design Tokens

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
@import '~@rei/cdr-tokens/dist/scss/cdr-tokens.scss';

.myClass {
  @include cdr-text-default-body();
  color: $cdr-color-text-primary-lightmode;
}
</style>
```

<hr/>


## Developing for Mobile

Currently development for iOS and Android is through the usage of Cedar Tokens as documented below.  

Our mobile development packages include fonts that are licensed and proprietary to REI. For more information or questions regarding Cedar’s support for external consumers using the mobile development packages on GitHub or NPM, please reach out to [cedar@rei.com](mailto:cedar@rei.com).

### iOS

#### CocoaPods
The preferred way to consume Cedar for iOS is through CocoaPods.  View [www.cocoapods.org](https://www.cocoapods.org/) for more information.

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

To set up Cocoapods from the project/workspace directory, run:

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

#### Manual Consumption
If you don’t use Cocoapods, you can manually import files into your iOS project/workspace.  

##### Colors

Color Sets in a .xcasset file.  Import the file by dragging the `Cedar.xcassets > Colors` folder into your project's asset folder.

You can set the colors in Interface Builder, or by:

_Terminal_
```bash
Button1.backgroundColor = UIColor(named: "cdr_color_text_primary_lightmode");
```

##### Text

The package includes Sentinel and Roboto font source files along with Swift Classes for applying Apple's Dynamic Type behavior to the font.  

Importing the source font is done by creating a group under your target in xcode and dragging the font files into that group.  Add the fonts to the info.plist under `Fonts provided by application`.

Finally, import the CedarFont.swift file along with the CedarTextStyles.plist.  This will allow you to set the fonts by:

_Terminal_
```bash
  // Button Title 1 Style
  Button1.titleLabel?.font = CedarFont().getCedarFont(forTextStyle: .title1)
  Button1.titleLabel?.adjustsFontForContentSizeCategory = true;
```

##### Icons

Cedar provides icons  in vector PDF format for iOS scaling.  According to initial investigation, only one file per icon is needed in this format. There is no need for @1x, @2x, and @3x variants.


<hr/>

### Android
#### Maven
The preferred way to consume Cedar Tokens on Android is to use Maven.

Add the following to the build.gradle file in your Android project:

_Terminal_
```bash
Implementation mvnrepos.rei.com:cedar-android.aar:0.2.0
```

#### Manual Consumption
If you don’t use Maven, you can import the Cedar Tokens into your Android project/workspace manually by dragging the resources into your project within Android Studio.  The resources are located at the [cedar-android repository on Bitbucket]( https://git.rei.com/projects/CDR/repos/cedar-android)


<hr/>


</cdr-doc-table-of-contents-shell>
