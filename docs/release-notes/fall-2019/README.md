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

## Cedar Fall 2019 Release

TODO: quick blurbs on the high level themes

- tree shaking support
- typography, headings
- new icons repo
- new utility classes
- component normalization/consistency/bug fixes

## Update Steps

### For a Micro-Site

- update cedar
- update febs
- (probably) get on babel 7/webpack as well.
- compile MJS. make sure lib/index.mjs is loaded, not cedar.js.

### For a Component Package

- update cedar
- make it a peerDep
- make sure yr compiling it in tests/dev.
TODO: update steps might be more or less the same here?
TODO: how should components vs. micro-sites handle icons with the new repo?

## New Features

### New Font/Typography

Sentinal and Roboto have been deprecated as global REI brand fonts. cdr-fonts.css has removed the base64 encoded versions of sentinal fonts as a result and has greatly reducing the overall size of this file. 

the variant fonts for "REI Stuart App" and "Graphik App" have been added.

[more infomation on typeography](../../foundation/typography/?active-tab=guidelines) 

### New Icons Package

[@rei/icons]()

### Button/CTA full-width@bp

The [Button](https://rei.github.io/rei-cedar-docs/components/buttons/?active-tab=api) and [CTA](https://rei.github.io/rei-cedar-docs/components/cta/?active-tab=api) components now support setting `full-width` as either a boolean value or a list of responsive breakpoints. For example, `full-width: "@xs @lg"` would make that component be full-width at the extra small and large breakpoints. We have also resolved a bug where the full-width attribute could be overridden by a responsive size breakpoint.

### Link Scoped Slots for Pagination and Breadcrumb

TODO: update breadcrumb/pagination docs.

support for vue-router. these components render links, need to control them in order to handle routing.

[breaadcrumb](https://rei.github.io/rei-cedar-docs/components/breadcrumb/?active-tab=api#props)
[pagination](https://rei.github.io/rei-cedar-docs/components/pagination/?active-tab=api#props)

### Input and Button Bind All Listeners

Rather than only binding specific listeners (like `on-click`), the [input](https://rei.github.io/rei-cedar-docs/components/input/?active-tab=api#events) and
[button](https://rei.github.io/rei-cedar-docs/components/button/?active-tab=api#events) components will now bind any event listeners attached to them to their root component. i.e, `@click`, `@focus`, `@input`

## Breaking Changes

### Tree Shaking / ES Module Build Changes

(TODO: link to FEBS version once its available)

Version 2.x.x of Cedar contained both CommonJS (`@rei/cedar/dist/cedar.cjs.js`, `@rei/cedar/dist/cedar.cjs.ssr.js`) and ES Module (`@rei/cedar/dist/cedar.esm.js`, `@rei/cedar/dist/cedar.esm.ssr.js`) single file builds. The ES Module build was supposed to allow consumers to "tree shake" out any un-used Cedar code from their bundles. However due to a variety of issues involving Vue and Webpack our ES Module build was not actually tree shakeable for our consumers. To work around this, we are now exporting a multi-file build inside `@rei/cedar/dist/lib` which is also the `module` entry point for Cedar.

If you are on the latest version of FEBS (> 5.2.0) then you will get this change automatically when you update your cedar version. Any bundle that is loading @rei/cedar should see a significant reduction in bundle size after this update.

If you are not using febs, you will need to ensure that
- your project is loading the `module` entry for Cedar
-- should happen automatically if using imports/exports
-- if not, use a resolve alias to point to dist/lib/index.mjs
- your build system is set up to process `mjs` files in node_modules.

Single file CJS is now `dist/cedar.js`. This is appropriate to use for test/dev environments but should not be used in production as it is not tree-shakeable.
Single file ESM is now `dist/cedar.mjs` (however this file cannot be tree shaken by webpack 4)

### SSR Optimized Builds Are No Longer Being Exported

TODO: fill this out

no more SSR builds. only a .vue/sfc thing. you can still do this on yr code if you want?

### Stateless Accordion

CdrAccordion has been refactored to remove internal state tracking for toggling open and closed. For simplicity, the CdrAccordionItem component has been removed and its functionality merged with CdrAccordion. The `show` prop has been renamed to `opened` for clarity. Please review the [updated API and usage examples](https://rei.github.io/rei-cedar-docs/components/accordion/) for more information.

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

In order to fix an issue with server-side rendering, as well as to simplify the API of [CdrBreadcrumb](https://rei.github.io/rei-cedar-docs/components/breadcrumb/), we have removed the `truncationThreshold` and `truncationXSThreshold` attributes. Instead, the `truncationEnabled` attr can be used to control whether or not the breadcrumb should be truncated. This change will not break any existing consumers of breadcrumb even if they are using those attributes.

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

### Deprecated Tokens/Warnings

TODO: describe which heading tokens are deprecated, what they map to

### Deprecated Utility Classes

TODO: describe which classes are deprecated, what they are replaced with, where to see the full list

### Deprecated Icon Components

TODO: update links/package name:

With the release of the [@rei/icons]() package, we are deprecating the "single icon" components (i.e, IconArrowDown, IconCart) as well as the CdrIconSprite. These components will be removed in a future release. Instead, consumers should use the CdrIcon component in conjunction with the @rei/icons package to manage their icons.


</cdr-doc-table-of-contents-shell>
