---
{
  "title": "Summer 2022 Release | Vue 3",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "summary": false,
  "breadcrumbs": [
    {
      "text": "13.x.x Release Notes"
    }
  ],
}
---

<cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>

## Update steps

<cdr-banner type="warning" aria-live="polite"><template #icon-left><icon-warning-fill inherit-color /></template><span style="font-weight:500">For users at REI, our internal build system has also undergone significant changes</span><template #message-body>Teams should expect to refactor to the FEBS 3 pattern concurrently with this update</template></cdr-banner>

<br>

| package name | version |
|--------------|---------|
| `@rei/cedar` | ^13.x.x |
| `@rei/cdr-tokens` | ^10.x.x |
| `@rei/cdr-component-variables` | ^8.x.x |

If your project depends on any shared component packages (i.e, FEDPACK, FEDCOMP, FEDPAGES), you will want to update those packages to the new version of Cedar before updating your microsite.

<br> 

## Vue 3 component library

We've migrated to Vue 3! While the components and their API's remain largely the same, we have adopted Vue 3's Composition API and rewritten the entire library from the ground-up as Vue SFC's (Single File Components). We have also adopted Vite, allowing us to significantly reduce the complexity of our build system. 

Going forward, our Vue 3 library will be the only one we support with features and functionality. We will continue to support our Vue 2 library with basic maintenance and bug fixes until Spring 2023.

Check out the repo on <cdr-link style="vertical-align: baseline" href="https://github.com/rei/rei-cedar-next">Github <icon-brand-github /></cdr-link>.

Note: Shortly after launch, the Vue 3 repo will be renamed to `rei-cedar` and our Vue 2 library will be republished under `@rei/cedar-vue-2`. 

<br>

## Breaking changes

While the API for most components remains unchanged, some changes were necessary to accommodate breaking changes between Vue 2 and Vue 3.

### Vue 3 attribute handling

**The `$attrs` object now contains _all_ attributes passed to a component, including `class` and `style`.**

- By default, attributes applied to a component are "passed through" to the parent element. 
- For certain Cedar components, we make use of Vue's `inheritAttrs` property to bind attributes to a deeper element in the component. This allows us to pass attributes like `loading="lazy"` to the `<img>` element within CdrImg, even when it's being used with a wrapping ratio container
- We have identified two components where this deeper class binding was causing style issues. Rather than hack around Vue 3's new behavior, we have introduced new props that allow a custom class to be bound to the parent element
- **CdrImg:** A new `containerClass` prop has been added to allow passing a custom class to the `cdr-img-ratio` container div
- **CdrInput:** A new `labelClass` prop has been added to allow passing a custom class to the `cdr-label-standalone` container div

Please reach out to us if you identify other situations where this attribute changes is causing issues.

[Vue migration guide: $attrs](https://v3-migration.vuejs.org/breaking-changes/attrs-includes-class-style.html)

### Vue 3 updated `slot` syntax

The syntax for using a named slot on a `template` element has changed. Slots will not function correctly in Vue 3 using the old syntax.

**Old**
```html
<template slot="title">...</template>
```
**New**
```html
<template #title>...</template>
```

### Vue 3 `v-html` directive

Vue 3 has [limited the use](https://github.com/vuejs/core/issues/6553) of the `v-html` directive and it no longer functions on custom components (e.g. CdrText). If your application relied on this pattern, our current recommendation is to replace any custom components with standard HTML elements and style them using tokens and/or component variables.

**Old**
```html
<cdr-text 
  v-html="htmlContent"
  class="my-custom-class" 
/>

<style lang="scss">
  @import '@rei/cdr-tokens/dist/scss/cdr-tokens.scss';
  .my-custom-class {
     @cdr-text-subheading-sans-500;
  }
</style>
```
**New**
```html
<p 
  v-html="htmlContent"
  class="my-custom-class" 
/>

<style lang="scss">
  @import '@rei/cdr-tokens/dist/scss/cdr-tokens.scss';
  .my-custom-class {
     @cdr-text-subheading-sans-500;
  }
</style>
```

### Vue 3 `v-model`

Multiple Cedar components utilize the Vue's `v-model` directive. Depending on your implementation, you may have to refactor your applications for the updates to `v-model` in Vue 3.

Cedar components using `v-model`:
- CdrCheckbox
- CdrInput
- CdrPagination
- CdrRadio
- CdrSelect

[Vue migration guide: v-model](https://v3-migration.vuejs.org/breaking-changes/v-model.html)

<br>

## Non-breaking changes

- **CdrModal:** refactored to have a flatter HTML structure
  - To a consumer, nothing should change but the underlying structure is cleaner, easier to maintain, and adds fewer nodes to the DOM

<br>

## New features

- **CdrSwitch:** We have introduced a new UI switch control intended for switching between binary states (e.g. on/off, true/false, etc.)

- **CdrToggleButton:** We have introduced a new UI toggle control intended for toggling between distinct options (e.g. metric/imperial)

**Note: These components are only available in our Vue 3 library**

<br>

## Accessibility updates

- **CdrFormGroup:** Now applies an `aria-describedby` when in an error state
- **CdrInput:** Now correctly applies a unique ID to an error state (related to above)
- **CdrSelect:** No longer announces an error twice to a screen reader
- **CdrRating:** Improved the contrast ratio between the filled and non-filled state of the rating stars
- **CdrChipGroup:** Updated implementation guidance to apply `role="radiogroup"` for the CdrChipGroup when using Chip in a "single select" configuration
- **CdrChip:** Improved contrast ratio for SVG icons added to the icon slots

<br>

## Bug fixes

- **CdrBanner:** Updated to address a small visual glitch at certain browser zoom levels
- **CdrToast:** Updated to address a small visual glitch at certain browser zoom levels

<br>

## Doc site

A keen observer may notice our documentation site is still utilizing Vue 2. We're currently in the process of rebuilding our documentation site from the ground up and hope to have it released in early 2023. 

While it's not ideal to document a Vue 3 component library in a Vue 2 site, we have introduced a handful of changes to support our Vue 3 library in the interim: 

- Adding a utility to generate a Vue 3 version of our component sandboxes. [Try it out](../../components/buttons/#primary)
- Flagging when a change or feature applies to the Vue 3 library only



</cdr-doc-table-of-contents-shell>
