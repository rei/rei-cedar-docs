---
{
  "title": "Fall 2019 Release",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "summary": false,
  "breadcrumbs": [
    {
      "text": "3.x.x Release Notes"
    }
  ],
}
---

<cdr-doc-table-of-contents-shell>

## Update Steps

If you are not already on Cedar 2.x.x, you will first need to [upgrade your project](/release-notes/summer-2019/) to the single-package version of Cedar.

### For a Micro-Site

- Update to `@rei/cedar` 3.x.x
- Update to `@rei/febs` >= 5.4.0
- Ensure that you are on a recent version of Babel (>= 7.x.x) and Webpack (>= 4.x.x)

### For a Component Package

- Update to `@rei/cedar` 3.x.x
- Ensure that your component is treating `@rei/cedar` as a `peerDependency`/`devDependency`. This aligns with the REI micro-site architecture, and ensures that only 1 version of the design system is loaded on each page.
- You may need to configure you dev and test environments to handle loading the ESM build of Cedar

## New Features

### New Font/Typography

Sentinel and Roboto have been deprecated as global REI brand fonts. cdr-fonts.css has removed the base64 encoded versions of sentinel fonts as a result and has greatly reducing the overall size of this file.

The variant fonts for "REI Stuart App" and "Graphik App" have been added.

[more information on typography](../../foundation/typography/?active-tab=guidelines)

### New Icons Package

We have created a new [Cedar Icon Library](https://rei.github.io/cedar-icons/#/) which will be used to host and distribute Cedar SVG icons going forward.

- Allows consumers to pick and choose which icons to include in their sprite sheet rather than being forced to load all of them.
- Cedar no longer has to distribute SVG assets, which simplifies our build process.
- Decreases bundle size as sprite sheets are now loaded inline in the HTML rather than being included in the JavaScript bundle.

See the [deprecated icon components](#deprecated-icon-components) section for more information on updating your icon usage.

### Deprecated Token Warnings

The `cdr-tokens` package now emits warnings if it detects that you are using deprecated tokens in your SCSS. You can disable this by setting a SCSS variable `$cdr-warn: false;` in any scope that you are using `cdr-tokens` in. Note that these warnings are only emitted by the SCSS build and will not trigger if you are using LESS.

### Button/CTA full-width@bp

The [Button](/components/buttons/?active-tab=api) and [CTA](/components/cta/?active-tab=api) components now support setting `full-width` as either a boolean value or a list of responsive breakpoints. For example, `full-width: "@xs @lg"` would make that component be full-width at the extra small and large breakpoints. We have also resolved a bug where the full-width attribute could be overridden by a responsive size breakpoint.

### Link Scoped Slots for Pagination and Breadcrumb

In order to support client side routing we have updated [breadcrumb](/components/pagination/#link-scoped-slots) and [pagination](/components/breadcrumb/#link-scoped-slot) to expose  [scopedSlots](https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots-with-the-slot-scope-Attribute) that allow consumers to override the default anchor links that are normally rendered by these components.

### Input and Button Bind All Listeners

Rather than only binding specific listeners (like `on-click`), the [input](/components/input/?active-tab=api#events) and
[button](/components/button/?active-tab=api#events) components will now bind any event listeners attached to them to their root component. i.e, `@click`, `@focus`, `@input`

## Breaking Changes

### Tree Shaking / ES Module Build Changes

Version 2.x.x of Cedar contained both CommonJS (`@rei/cedar/dist/cedar.cjs.js`) and ES Module (`@rei/cedar/dist/cedar.esm.js`) single file builds. The ES Module build was supposed to allow consumers to "tree shake" out any un-used Cedar code from their bundles. However due to a variety of issues involving Vue and Webpack our ES Module build was not actually tree shakeable for our consumers. To work around this, we are now exporting a multi-file build inside `@rei/cedar/dist/lib` which is also the `module` entry point for Cedar.

If you are on the latest version of FEBS (> 5.4.0) then you will get this change automatically when you update your Cedar version. Any app that is loading `@rei/cedar` should see a significant reduction in bundle size after this update.

If you are not using FEBS, you will need to ensure that:

- Your project is loading the `module` entry for Cedar
-- This should happen automatically if you are using ES6 style `import`/`export` syntax
-- If not, you will need to configure your build to resolve `@rei/cedar` to `node_modules/@rei/cedar/dist/lib/index.mjs`
- Your build system is set up to process `mjs` files in node_modules.
-- In Webpack 4 this can be done with the `javascript/auto` loader: `{ test: /\.mjs$/, include: /node_modules/, type: "javascript/auto" }`.
-- This can also be achieved by running `node_modules/@rei/cedar` through Babel using `@babel/preset-env` and setting the `modules: false` (see [FEBS](https://github.com/rei/front-end-build-configs/blob/master/application/webpack.base.conf.js#L94-L126) for an example of this strategy)

Cedar is still exporting a single file CommonJS build (`dist/cedar.js`). This is appropriate to use in development or test environments but should be avoided in production as it cannot be tree-shaken.

### SSR Optimized Builds Are No Longer Being Exported

The previous release of Cedar included special `.ssr` variants of each build which were optimized for server side performance. These builds have been removed in the current release of Cedar.

This SSR optimization was only possible for `.vue` single-file components, which we can no longer use as such components cannot be built as ESM modules. Moreover, FEBS does not currently allow teams to have separate client and server configurations, so it was not possible for most consumers to use this feature as is.

Teams can still create SSR optimized builds themselves using either `vue-loader` or `rollup-plugin-vue` with the `optimizeSSR` option set to true.

### Stateless Accordion

CdrAccordion has been refactored to remove internal state tracking for toggling open and closed. For simplicity, the CdrAccordionItem component has been removed and its functionality merged with CdrAccordion. The `show` prop has been renamed to `opened` for clarity. Please review the [updated API and usage examples](/components/accordion/) for more information.

Before:

```vue
<cdr-accordion>
  <cdr-accordion-item
    id="accordion-1"
    label="How do I find my member number?">
    <cdr-text tag="p">
        Find your member number online. You can also call
        Customer Support at 1-800-426-4840 (U.S. and Canada)
        or 1-253-891-2500 (International).
    </cdr-text>
  </cdr-accordion-item>
</cdr-accordion>
```

After:

```vue
<cdr-accordion
  id="accordion-1"
  :opened="opened"
  @accordion-toggle="opened = !opened"
>
  <template slot="label">
    How do I find my member number?
  </template>
  <cdr-text tag="p">
    Find your member number online. You can also call
    Customer Support at 1-800-426-4840 (U.S. and Canada)
    or 1-253-891-2500 (International).
  </cdr-text>
</cdr-accordion>

<script>
export default {
  ...
  data() {
    return {
      opened: false
    }
  }
}
</script>
```

### Breadcrumb Truncation/SSR

In order to fix an issue with server-side rendering, as well as to simplify the API of [CdrBreadcrumb](/components/breadcrumb/), we have removed the `truncationThreshold` and `truncationXSThreshold` attributes. Instead, the `truncationEnabled` attr can be used to control whether or not the breadcrumb should be truncated. This change will not break any existing consumers of breadcrumb even if they are using those attributes.

### Large Breakpoint Value Corrected

The token value for the large breakpoint was updated to the correct value of `1232px` (it had previously been incorrectly set to `1200px`). If you are hard-coding any breakpoint values in your project you will need to update those to use the breakpoint values from cdr-tokens instead. If you have been using the breakpoint tokens then you just need to update your version of cedar and cdr-tokens.

### Letter Spacing Values Corrected

The letter spacing values for our text tokens have been corrected to add the `px` suffix.

### CdrRadio Value Prop Is Now CustomValue

In an effort to make our form components more consistent, we have changed CdrRadio to use the `customValue` prop instead of `value`. This is the same pattern that CdrCheckbox uses.

- Before: `<cdr-radio v-model="x" value="foo"/>`
- After: `<cdr-radio v-model="x" customValue="foo"/>`

### CdrPagination, CdrSelect, and CdrRadio v-model Binding

In an effort to make our components that use `v-model` more consistent we have changed the property bindings for CdrPagination, CdrSelect, and CdrRadio to use the same `value` prop and `@input` event pattern that [v-model sets up by default](https://vuejs.org/v2/guide/components.html#Using-v-model-on-Components). This change will only affect consumers using JSX or other templating languages which do not have access to Vue directives like v-model. If you were already using v-model with these components then you do not need to change anything.

- CdrPagination: `currentPage` is now `value`
- CdrSelect: `extVal` is now `value`
- CdrRadio: `modelValue` is now `value` [also see note about value/customValue](#cdrradio-value-prop-is-now-customvalue)

### CdrButton now uses @ bindings for events

Rather than pass in an `onClick` event handler as a prop, CdrButton will now bind any listened attached to it. Update `onClick` to be `@click` anywhere you are binding an event to a CdrButton.

- Before: `<cdr-button onClick="yourClickHandlerFunction" />`
- After: `<cdr-button @click="yourClickHandlerFunction" />`

### CdrTabs emits `tab-change` instead of `tabChange`

Vue expects event names to use kebab case and not camel case, so the `tabChange` event on CdrTabs could cause issues for some users. CdrTabs now emits a `tab-change` event instead.

- Before: `<CdrTabs @tabChange="handler" />`
- After: `<CdrTabs @tab-change="handler" />`

## Deprecations

Whenever possible and practical the Cedar team will deprecate features rather than issue outright breaking changes in order to allow teams some time to update their codebases. Features will be removed from the doc site when they are deprecated to ensure that they are no longer use in new code.

### Deprecated Typography/Headings

The cdr-text modifiers specific to headings have been deprecated. This update normalizes cdr-text modifiers with our other cedar component modifiers. Moving forward users will be expected and able to define a unique heading value for each breakpoint.

New modifiers have been added supporting the update to typography and the names have been extended to account for the size options now available to each heading family.

The following diagram provides a rough guideline of legacy modifier names to the general equivalent.


| Deprecated modifier name | Equivalent modifier names and breakpoints  |
|--------------------------|--------------------------------------------|
| display                  | heading-700 display-900@md display-1100@lg |
| display-static           | display-900                                |
| heading-large            | display-600 display-700@md display-900@lg  |
| heading-large-static     | display-700                                |
| heading-medium           | heading-600 heading-700@md heading-700@lg  |
| heading-medium-static    | heading-600                                |
| heading-small            | heading-400 heading-500@md heading-500@lg  |
| heading-small-static     | heading-400                                |
| subheading               | subheading-300                             |

In addition to the heading changes listed above, the paragraph modifier `body` is now also deprecated without a replacement. Moving forward we only support the generic non modified styling for paragraphs.
#### more infomation
-  [Headings](../../components/headings)
-  [Paragraphs](../../components/paragraphs)

### Deprecated Tokens and Mixins

In order to support the updates to typography, we have re-named some Cedar tokens related to headings. Please see the chart below for guidance on how to re-map the deprecated tokens and mixins

| Deprecated token/mixin  | Equivalent token/mixin |
|-------------------------|-------------------------|
| cdr-text-header-1 | cdr-text-display-1100 |
| cdr-text-header-1-family | cdr-text-display-1100-family |
| cdr-text-header-1-style | cdr-text-display-1100-style |
| cdr-text-header-1-weight | cdr-text-display-1100-weight |
| cdr-text-header-1-spacing | cdr-text-display-1100-spacing |
| cdr-text-header-1-size | cdr-text-display-1100-size |
| cdr-text-header-1-height | cdr-text-display-1100-height |
| cdr-text-header-2 | cdr-text-display-900 |
| cdr-text-header-2-family | cdr-text-display-900-family |
| cdr-text-header-2-style | cdr-text-display-900-style |
| cdr-text-header-2-weight | cdr-text-display-900-weight |
| cdr-text-header-2-spacing | cdr-text-display-900-spacing |
| cdr-text-header-2-size | cdr-text-display-900-size |
| cdr-text-header-2-height | cdr-text-display-900-height |
| cdr-text-header-3 | cdr-text-display-700 |
| cdr-text-header-3-family | cdr-text-display-700-family |
| cdr-text-header-3-style | cdr-text-display-700-style |
| cdr-text-header-3-weight | cdr-text-display-700-weight |
| cdr-text-header-3-spacing | cdr-text-display-700-spacing |
| cdr-text-header-3-size | cdr-text-display-700-size |
| cdr-text-header-3-height | cdr-text-display-700-height |
| cdr-text-header-4 | cdr-text-display-600 |
| cdr-text-header-4-family | cdr-text-display-600-family |
| cdr-text-header-4-style | cdr-text-display-600-style |
| cdr-text-header-4-weight | cdr-text-display-600-weight |
| cdr-text-header-4-spacing | cdr-text-display-600-spacing |
| cdr-text-header-4-size | cdr-text-display-600-size |
| cdr-text-header-4-height | cdr-text-display-600-height |
| cdr-text-header-5 | cdr-text-display-500 |
| cdr-text-header-5-family | cdr-text-display-500-family |
| cdr-text-header-5-style | cdr-text-display-500-style |
| cdr-text-header-5-weight | cdr-text-display-500-weight |
| cdr-text-header-5-spacing | cdr-text-display-500-spacing |
| cdr-text-header-5-size | cdr-text-display-500-size |
| cdr-text-header-5-height | cdr-text-display-500-height |
| cdr-text-header-6 | cdr-text-display-400 |
| cdr-text-header-6-family | cdr-text-display-400-family |
| cdr-text-header-6-style | cdr-text-display-400-style |
| cdr-text-header-6-weight | cdr-text-display-400-weight |
| cdr-text-header-6-spacing | cdr-text-display-400-spacing |
| cdr-text-header-6-size | cdr-text-display-400-size |
| cdr-text-header-6-height | cdr-text-display-400-height |
| cdr-text-header-7 | cdr-text-display-300 |
| cdr-text-header-7-family | cdr-text-display-300-family |
| cdr-text-header-7-style | cdr-text-display-300-style |
| cdr-text-header-7-weight | cdr-text-display-300-weight |
| cdr-text-header-7-spacing | cdr-text-display-300-spacing |
| cdr-text-header-7-size | cdr-text-display-300-size |
| cdr-text-header-7-height | cdr-text-display-300-height |
| cdr-text-editorial | cdr-text-default |
| cdr-text-editorial-family | cdr-text-default-family |
| cdr-text-editorial-style | cdr-text-default-style |
| cdr-text-editorial-weight | cdr-text-default-weight |
| cdr-text-editorial-spacing | cdr-text-default-spacing |
| cdr-text-editorial-size | cdr-text-default-size |
| cdr-text-editorial-height | cdr-text-default-height |
| cdr-text-editorial-compact | cdr-text-default-compact |
| cdr-text-editorial-compact-family | cdr-text-default-compact-family |
| cdr-text-editorial-compact-style | cdr-text-default-compact-style |
| cdr-text-editorial-compact-weight | cdr-text-default-compact-weight |
| cdr-text-editorial-compact-spacing | cdr-text-default-compact-spacing |
| cdr-text-editorial-compact-size | cdr-text-default-compact-size |
| cdr-text-editorial-compact-height | cdr-text-default-compact-height |


### Deprecated Utility Classes
#### Alignment classes

The utility alignment classes have been deprecated and updated to bring them in line with the latest token names. In addition they have been extended to support each of the breakpoint only options.

| Deprecated class name        | Equivalent class name        |
|------------------------------|------------------------------|
| cdr-text-left                | cdr-align-text-left          |
|                              | cdr-align-text-left@xs       |
|                              | cdr-align-text-left@sm       |
|                              | cdr-align-text-left@md       |
|                              | cdr-align-text-left@lg       |
| cdr-text-center              | cdr-align-text-center        |
|                              | cdr-align-text-center@xs     |
|                              | cdr-align-text-center@sm     |
|                              | cdr-align-text-center@md     |
|                              | cdr-align-text-center@lg     |
| cdr-text-right               | cdr-align-text-right         |
|                              | cdr-align-text-right@xs      |
|                              | cdr-align-text-right@sm      |
|                              | cdr-align-text-right@md      |
|                              | cdr-align-text-right@lg      |
|                              | cdr-align-text-justify       |
|                              | cdr-align-text-justify@xs    |
|                              | cdr-align-text-justify@sm    |
|                              | cdr-align-text-justify@md    |
|                              | cdr-align-text-justify@lg    |
| cdr-center-block             | cdr-align-center-block       |
|                              | cdr-align-center-block@xs    |
|                              | cdr-align-center-block@sm    |
|                              | cdr-align-center-block@md    |
|                              | cdr-align-center-block@lg    |

#### Display classes

The utility visibility and accessibility classes have been deprecated and updated to bring them in line with the latest token names. Below find a map to migrate to the new names

| Deprecated class name         | Equivalent class name       |
|-------------------------------|-----------------------------|
| cdr-hide                      | cdr-display-none            |
| cdr-hide@xs-only              | cdr-display-none@xs         |
| cdr-hide@xs                   |                             |
| cdr-hide@sm-only              | cdr-display-none@sm         |
| cdr-hide@sm                   |                             |
| cdr-hide@md-only              | cdr-display-none@md         |
| cdr-hide@md                   |                             |
| cdr-hide@lg-only              | cdr-display-none@lg         |
| cdr-hide@lg                   |                             |
|                               | cdr-display-hidden          |
|                               | cdr-display-hidden@xs       |
|                               | cdr-display-hidden@sm       |
|                               | cdr-display-hidden@md       |
|                               | cdr-display-hidden@lg       |
| cdr-show                      | cdr-display-block           |
| cdr-show@xs-only              | cdr-display-block@xs        |
| cdr-show@xs                   |                             |
| cdr-show@sm-only              | cdr-display-block@sm        |
| cdr-show@sm                   |                             |
| cdr-show@md-only              | cdr-display-block@md        |
| cdr-show@md                   |                             |
| cdr-show@lg-only              | cdr-display-block@lg        |
| cdr-show@lg                   |                             |
| cdr-show-inline               | cdr-display-inline          |
| cdr-show-inline@xs-only       | cdr-display-inline@xs       |
| cdr-show-inline@xs            |                             |
| cdr-show-inline@sm-only       | cdr-display-inline@sm       |
| cdr-show-inline@sm            |                             |
| cdr-show-inline@md-only       | cdr-display-inline@md       |
| cdr-show-inline@md            |                             |
| cdr-show-inline@lg-only       | cdr-display-inline@lg       |
| cdr-show-inline@lg            |                             |
| cdr-show-inline-block         | cdr-display-inline-block    |
| cdr-show-inline-block@xs-only | cdr-display-inline-block@xs |
| cdr-show-inline-block@xs      |                             |
| cdr-show-inline-block@sm-only | cdr-display-inline-block@sm |
| cdr-show-inline-block@sm      |                             |
| cdr-show-inline-block@md-only | cdr-display-inline-block@md |
| cdr-show-inline-block@md      |                             |
| cdr-show-inline-block@lg-only | cdr-display-inline-block@lg |
| cdr-show-inline-block@lg      |                             |
|                               | cdr-display-flex            |
|                               | cdr-display-flex@xs         |
|                               | cdr-display-flex@sm         |
|                               | cdr-display-flex@md         |
|                               | cdr-display-flex@lg         |
|                               | cdr-display-inline-flex     |
|                               | cdr-display-inline-flex@xs  |
|                               | cdr-display-inline-flex@sm  |
|                               | cdr-display-inline-flex@md  |
|                               | cdr-display-inline-flex@lg  |
| cdr-sr-only                   | cdr-display-sr-only         |
| cdr-sr-only-focusable         | cdr-display-sr-focusable    |


### Deprecated Icon Components

With the release of the [Cedar Icon Library](https://rei.github.io/cedar-icons/#/), we are deprecating the "single icon" components (i.e, `IconArrowDown`, `IconCart`, etc.) as well as  `CdrIconSprite`. These components will be removed in a future release.  

- If you were using the single icon components, you should update them to use `CdrIcon` and the `use` attribute instead, and follow the instructions below to create and load a sprite sheet.

- If you were using CdrIconSprite, you should use the [Cedar Icon Library](https://rei.github.io/cedar-icons/#/) to create an SVG file containing all the icons required for your application. You will then need to render that SVG file somewhere in your application. The best place to do this is inline in your root HTML template rather than in the JavaScript. This ensures that when your app is server-side rendered that the sprite sheet is only rendered one time, rather than being included in both the HTML and the JavaScript files. There are various ways to do this depending on how your application is built, but if you are using the standard REI micro-site architecture built on spring-boot/thymeleaf you can load the sprite sheet as follows:

1. Create a new template named `resources/templates/icon-sprite.html` and copy paste your generated SVG file into it:

```
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
  <body>
    <div th:remove="true" th:fragment="icon-sprite">
      <!-- copy paste your generated SVG file here -->
    </div>
  </body>
</html>
```

3. Render the sprite sheet somewhere in your app (note this needs to be rendered on every page that contains icons):

```
<div th:remove="true" th:insert="~{icon-sprite :: icon-sprite}"></div>
```

</cdr-doc-table-of-contents-shell>
