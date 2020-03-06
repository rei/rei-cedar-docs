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

<cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>

## Update Steps

If you are not already on Cedar 2.x.x, you will first need to [upgrade your project](../summer-2019/)) to the single-package version of Cedar.

### For a Micro-Site

- Update to `@rei/cedar` 3.x.x
- Update to `@rei/febs` >= 5.4.1
- Ensure that you are on a recent version of Babel (>= 7.x.x) and Webpack (>= 4.x.x)

### For a Component Package

- Update to `@rei/cedar` 3.x.x
- Ensure that your component is treating `@rei/cedar` as a `peerDependency`/`devDependency`. This aligns with the REI micro-site architecture, and ensures that only 1 version of the design system is loaded on each page
- You may need to configure you development and test environments to handle loading the ESM build of Cedar

## New Features

### Introducing New Fonts

Sentinel and Roboto have been deprecated as a global REI brand fonts. `cdr-fonts.css` has removed the base64 encoded versions of Sentinel fonts and has greatly reduced the overall size of this file.

The variant fonts for "Stuart" and "Graphik" have been added.

For more information, see the [Typography](../../foundation/typography/#guidelines) article.

### New Icons Package

A new [Cedar Icon Library](https://rei.github.io/cedar-icons/#/) has been created which will be used to host and distribute Cedar SVG icons.

- Allows consumers to pick and choose which icons to include in their sprite sheet rather than being forced to load all of them
- Cedar no longer has to distribute SVG assets, which simplifies our build process
- Decreases bundle size as sprite sheets are now loaded inline in the HTML rather than being included in the JavaScript bundle
- Consumers can still load the inline icon components from `@rei/cedar`

### Cedar Component Variables 1.0.0

The 1.0.0 version of [Cedar Component Variables](https://rei.github.io/rei-cedar-component-variables/#/) has been released which provide a method for using Cedar component styles in environments where the Vue components themselves cannot be used.

Component variables are currently exported for a subset of Cedar components (button, link, input, select, checkbox, radio, CTA, and list), and are intended to be used alongside the [Design Tokens](https://rei.github.io/rei-cedar-docs/components/design-tokens/).

For more information, please see the [Component Variables](https://rei.github.io/rei-cedar-docs/components/component-variables/) page.

### UI Toolkit Update

#### File Structure

+ The toolkit is now broken out into three versions—vCurrent, vLegacy, and vNext. vCurrent will include the Fall 2019 UI toolkit changes. vLegacy includes the previous release. vNext is a preview into future releases and is not officially supported
+ The file structures have changed. Web, Native, Tokens, and Icons are now seperate master files and libraries

#### Sticker Sheet

Sticker sheets have been included in Web, Native, Token, and Icon libraries. To use the sticker sheet, [link the library](../../getting-started/as-a-designer/#using-the-toolkit) you need, select the sticker sheet from Symbols, right-click the sticker sheet, select "Detach from Symbol", ungroup, and copy or paste as needed.

#### Select Component
A new Select component is available for use in the web components toolkit and the sticker sheet. For more information, see the [Select](../../components/selects/) page.

### Icon Contribution

- The [guidelines for contributing icons](../../icons/resources/#contribution-process) to the [CDR · Icon Contribution](https://share.goabstract.com/99335c38-51ee-41c8-8454-38c2a70c4c7f) project has been updated
- Minor updates to the [CDR Icons • vCurrent](https://share.goabstract.com/e9186773-0cc3-43a6-b7ff-54b163d95e00?sha=a814b05c391c93f5a7d39ce9508cd5238ae8fe0e) library to make icon symbols more consistent. For linking instructions, see the [Cedar UI Toolkit](../../getting-started/as-a-designer/#cedar-ui-toolkit) page
- A new Sketch plugin has been added to help you [export Cedar-compliant icons that are not in the icon repo](../../icons/resources/#exporting-icons-that-aren’t-in-the-library)

### SVG in Icon Slot

- `CdrIcon` now accepts full SVG markup in the slot
- All attributes, classes, listeners, etc. will be preserved with the exception of `viewBox`, `role`, and `xmlns`
- For more information and examples, see the [Icon Component](../../components/icon/#non-cedar-svg) page

### Deprecated Mixin Warnings

The `cdr-tokens` package now emits warnings if it detects that you are still using deprecated mixins in your SCSS. You can disable these warnings by setting a SCSS variable `$cdr-warn: false;` in any scope where you are using `cdr-tokens`. Note that these warnings are only emitted by mixins in the SCSS build and will not trigger for tokens or if you are using LESS.

### Button / CTA Full-Width at Breakpoint

The [Button](../../components/buttons/#api) and [CTA](../../components/cta/#api) components now support setting `full-width` as either a boolean value or as a list of responsive breakpoints. For example, `full-width: "@xs @lg"` would make that component be full-width at the extra small and large breakpoints. A bug where the full-width attribute could be overridden by a responsive size breakpoint has also been resolved.

### Link Scoped Slots for Pagination and Breadcrumb

In order to support client-side routing, [breadcrumb](../../components/pagination/#link-scoped-slots) and [pagination](../../components/breadcrumb/#link-scoped-slot) components have been updated to expose [scopedSlots](https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots-with-the-slot-scope-Attribute) that allow consumers to override the default anchor links that are normally rendered by these components.

### Input and Button Bind All Listeners

Rather than only binding specific listeners (like `on-click`), the [input](../../components/input/#events) and
[button](../../components/button/#events) components will now bind any event listeners attached to their root component, i.e, `@click`, `@focus`, `@input`.

## Breaking Changes

### Tree Shaking / ES Module Build Changes

Version 2.x.x of Cedar contained both CommonJS (`@rei/cedar/dist/cedar.cjs.js`) and ES Module (`@rei/cedar/dist/cedar.esm.js`) single-file builds. The ES Module build was supposed to allow consumers to "tree shake" out any un-used Cedar code from their bundles. However due to a variety of issues involving Vue and Webpack, our ES Module build was not actually tree-shakeable for our consumers. To work around this, we are now exporting a multi-file build inside `@rei/cedar/dist/lib` which is also the `module` entry point for Cedar.

If you are on the latest version of FEBS (> 5.4.1), then you will get this change automatically when you update your Cedar version. Any app that is loading `@rei/cedar` should see a significant reduction in bundle size after this update.

If you are not using FEBS, you will need to ensure that:

- Your project is loading the `module` entry for Cedar: This should happen automatically if you are using ES6 style `import`/`export` syntax. If not, you will need to configure your build to resolve `@rei/cedar` to `node_modules/@rei/cedar/dist/lib/index.mjs`
- Your build system is set up to process `mjs` files in node_modules: In Webpack 4 this can be done with the `javascript/auto` loader `{ test: /\.mjs$/, include: /node_modules/, type: "javascript/auto" }`. This can also be achieved by running `node_modules/@rei/cedar` through Babel using `@babel/preset-env` and setting the `modules: false` (for an example on this strategy, see [FEBS](https://github.com/rei/front-end-build-configs/blob/master/application/webpack.base.conf.js#L94-L126))

Cedar is still exporting a single-file CommonJS build (`dist/cedar.js`). This is appropriate to use in development or test environments, but should be avoided in production as it cannot be tree-shaken.

### SSR Optimized Builds Are No Longer Being Exported

The previous release of Cedar included special `.ssr` variants of each build which were optimized for server side performance. These builds have been removed in the current release of Cedar.

This SSR optimization was only possible for `.vue` single-file components, which we can no longer use as such components cannot be built as ESM modules. Moreover, FEBS does not currently allow teams to have separate client and server configurations, so it was not possible for most consumers to use this feature as is.

Teams can still create SSR optimized builds themselves using either `vue-loader` or `rollup-plugin-vue` with the `optimizeSSR` option set to true.

### Stateless Accordion

CdrAccordion has been refactored to remove internal state tracking for toggling open and closed. For simplicity, the CdrAccordionItem component has been removed and its functionality merged with CdrAccordion. The `show` prop has been renamed to `opened` for clarity. For more inforamtion, please review the [API and usage examples](../../components/accordion/).

Before:

```vue
<cdr-accordion>
  <cdr-accordion-item
    id="accordion-1"
    label="How do I find my member number?">
    <cdr-text>
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
  <cdr-text>
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

### Large Breakpoint Value Corrected

The token value for the large breakpoint was updated to the correct value of `1232px`. If you are hard-coding any breakpoint values in your project, you will need to update those to use the breakpoint values from cdr-tokens instead. If you were already using the breakpoint tokens, then you just need to update your version of Cedar and cdr-tokens.

### Letter Spacing Values Corrected

The letter spacing values for our text tokens have been corrected to add the `px` suffix.

### CdrRadio Value Prop Is Now CustomValue

In an effort to make our form components more consistent, we have changed [CdrRadio](../../components/radio/#api) to use the `customValue` prop instead of `value`. This is the same pattern that CdrCheckbox uses.

- Before: `<cdr-radio v-model="x" value="foo"/>`
- After: `<cdr-radio v-model="x" customValue="foo"/>`

### CdrPagination, CdrSelect, and CdrRadio Model Binding

In an effort to make our components that use `v-model` more consistent, we have changed the property bindings for CdrPagination, CdrSelect, and CdrRadio to use the same `value` prop and `@input` event pattern that [v-model sets up by default](https://vuejs.org/v2/guide/components.html#Using-v-model-on-Components). This change will only affect consumers using JSX or other templating languages which do not have access to Vue directives like v-model. If you were already using v-model with these components, then you do not need to change anything.

- CdrPagination: `currentPage` is now `value`
- CdrSelect: `extVal` is now `value`
- CdrRadio: `modelValue` is now `value` [See note about value/customValue](#cdrradio-value-prop-is-now-customvalue)

### CdrButton Now Uses Bindings for Events

Rather than pass in an `onClick` event handler as a prop, [CdrButton](../../components/buttons/#api) will now bind any listener attached to it. Update `onClick` to be `@click` wherever you are binding an event to a CdrButton.

- Before: `<cdr-button onClick="yourClickHandlerFunction" />`
- After: `<cdr-button @click="yourClickHandlerFunction" />`

### CdrTabs Emits `tab-change` Instead of `tabChange`

Vue expects event names to use kebab case and not camel case, so the `tabChange` event on [CdrTabs](../../components/tabs/#api) could cause issues for some users. CdrTabs now emits a `tab-change` event instead.

- Before: `<CdrTabs @tabChange="handler" />`
- After: `<CdrTabs @tab-change="handler" />`

## Deprecations

Whenever possible and practical, the Cedar team will deprecate features rather than issue outright breaking changes in order to allow teams some time to update their codebases. Features will be removed from the doc site when they are deprecated to ensure that they are no longer used in new code.

NOTE: The deprecated typohraphy tokens and mixins listed below received new mappings as part of the [Winter 2020 Release](https://rei.github.io/rei-cedar-docs/release-notes/winter-2020/#updated-deprecation-mappings)

### Deprecated Typography/Headings

"REI Stuart App" and "Graphik App" have replaced Sentinel heading styles. Designers with linked UI Toolkit libraries in Abstract will receive an automatic update of web component styles, but will need to link two new libraries (if they haven't already): icons and tokens. For more information on linking libraries in Abstract, see the [Designers Getting Started](../..getting-started/as-a-designer/) guidelines.  

The cdr-text modifiers specific to headings have been deprecated. This update normalizes cdr-text modifiers with our other Cedar component modifiers. Going forward, users will be able to define a unique heading value for each breakpoint.

New modifiers have been added supporting the update to typography. The names have been extended to account for the size options now available to each heading family.

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

In addition to the heading changes listed above, the paragraph modifier `body` is now also deprecated without a replacement. Moving forward, we will only support the generic non-modified styling for paragraphs.

For more infomation, see [Headings](../../components/headings) and [Paragraphs](../../components/paragraphs).

### Deprecated Tokens and Mixins

In order to support the updates to typography, we have re-named some Cedar tokens related to headings. Please see the chart below for guidance on how to re-map the deprecated tokens and mixins.

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
| cdr-text-header-3 | cdr-text-heading-700 |
| cdr-text-header-3-family | cdr-text-heading-700-family |
| cdr-text-header-3-style | cdr-text-heading-700-style |
| cdr-text-header-3-weight | cdr-text-heading-700-weight |
| cdr-text-header-3-spacing | cdr-text-heading-700-spacing |
| cdr-text-header-3-size | cdr-text-heading-700-size |
| cdr-text-header-3-height | cdr-text-heading-700-height |
| cdr-text-header-4 | cdr-text-heading-600 |
| cdr-text-header-4-family | cdr-text-heading-600-family |
| cdr-text-header-4-style | cdr-text-heading-600-style |
| cdr-text-header-4-weight | cdr-text-heading-600-weight |
| cdr-text-header-4-spacing | cdr-text-heading-600-spacing |
| cdr-text-header-4-size | cdr-text-heading-600-size |
| cdr-text-header-4-height | cdr-text-heading-600-height |
| cdr-text-header-5 | cdr-text-heading-500 |
| cdr-text-header-5-family | cdr-text-heading-500-family |
| cdr-text-header-5-style | cdr-text-heading-500-style |
| cdr-text-header-5-weight | cdr-text-heading-500-weight |
| cdr-text-header-5-spacing | cdr-text-heading-500-spacing |
| cdr-text-header-5-size | cdr-text-heading-500-size |
| cdr-text-header-5-height | cdr-text-heading-500-height |
| cdr-text-header-6 | cdr-text-heading-400 |
| cdr-text-header-6-family | cdr-text-heading-400-family |
| cdr-text-header-6-style | cdr-text-heading-400-style |
| cdr-text-header-6-weight | cdr-text-heading-400-weight |
| cdr-text-header-6-spacing | cdr-text-heading-400-spacing |
| cdr-text-header-6-size | cdr-text-heading-400-size |
| cdr-text-header-6-height | cdr-text-heading-400-height |
| cdr-text-header-7 | cdr-text-heading-300 |
| cdr-text-header-7-family | cdr-text-heading-300-family |
| cdr-text-header-7-style | cdr-text-heading-300-style |
| cdr-text-header-7-weight | cdr-text-heading-300-weight |
| cdr-text-header-7-spacing | cdr-text-heading-300-spacing |
| cdr-text-header-7-size | cdr-text-heading-300-size |
| cdr-text-header-7-height | cdr-text-heading-300-height |
| cdr-text-editorial | cdr-text-default |
| cdr-text-editorial-family | cdr-text-default-family |
| cdr-text-editorial-style | cdr-text-default-style |
| cdr-text-editorial-weight | cdr-text-default-weight |
| cdr-text-editorial-spacing | cdr-text-default-spacing |
| cdr-text-editorial-size | cdr-text-default-size |
| cdr-text-editorial-height | cdr-text-default-height |
| cdr-text-editorial-compact | cdr-text-default |
| cdr-text-editorial-compact-family | cdr-text-default-family |
| cdr-text-editorial-compact-style | cdr-text-default-style |
| cdr-text-editorial-compact-weight | cdr-text-default-weight |
| cdr-text-editorial-compact-spacing | cdr-text-default-spacing |
| cdr-text-editorial-compact-size | cdr-text-default-size |
| cdr-text-editorial-compact-height | cdr-text-default-height |

Additionally, we have new mixins available to replace the previously deprecated `spruce-display` typography mixins. Replacements for the `redwood` and `maple` mixins will be coming in a future Cedar release. See the  [v1 token migration](https://confluence.rei.com/display/TP/v1+Token+Migration) documents for more information on how to handle the deprecated pre-release tokens (if you haven't already).

| Deprecated mixin   | Equivalent mixin      |
|--------------------|-----------------------|
| spruce-display-100 | cdr-text-display-1200 |
| spruce-display-90  | cdr-text-display-1200 |
| spruce-display-80  | cdr-text-display-1200 |
| spruce-display-70  | cdr-text-display-1100 |
| spruce-display-60  | cdr-text-display-800  |
| spruce-display-50  | cdr-text-display-700  |
| spruce-display-40  | cdr-text-display-600  |
| spruce-display-30  | cdr-text-heading-500  |
| spruce-display-20  | cdr-text-heading-400  |
| spruce-display-10  | cdr-text-heading-300  |
| spruce-display-00  | cdr-text-heading-300  |

### Deprecated Utility Classes
#### Alignment Classes

The utility alignment classes have been deprecated and updated to bring them inline with the latest token names. In addition, they have been extended to support each of the breakpoint-only options.

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

#### Display Classes

The utility visibility and accessibility classes have been deprecated and updated to bring them inline with the latest token names. Please see the map below to review the new names.

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


### Breadcrumb Truncation/SSR

In order to fix an issue with server-side rendering, as well as to simplify the API of [CdrBreadcrumb](../../components/breadcrumb/), we have removed the `truncationThreshold` and `truncationXSThreshold` attributes. Instead, the `truncationEnabled` attr can be used to control whether or not the breadcrumb should be truncated. This change will not break any existing consumers of breadcrumb even if they are using those attributes.

</cdr-doc-table-of-contents-shell>
