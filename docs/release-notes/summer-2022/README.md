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
| `@rei/cdr-tokens` | ^11.x.x |
| `@rei/cdr-component-variables` | ^8.x.x |

If your project depends on any shared component packages, you will want to update those packages to the new version of Cedar before updating your microsite.

<br />

## 13.3.0

### New features

Adds `type="date"` to CdrInput to support browser-native date-picking functionality. See the [CdrInput article](../../components/input#date-input) for more information.

<cdr-link style="vertical-align: baseline" href="https://github.com/rei/rei-cedar/releases/tag/v13.3.0">v13.3.3 changelog <icon-brand-github style="margin-left: 0.2rem"/></cdr-link>

<br />

## 13.2.1 

### Bug fixes

Resolved an issue where CdrTabs was not emitting a `tab-change` event.

<cdr-link style="vertical-align: baseline" href="https://github.com/rei/rei-cedar/releases/tag/v13.2.1">v13.2.1 changelog <icon-brand-github style="margin-left: 0.2rem"/></cdr-link>

<br />

## 13.2.0

### CdrSkeleton

CdrSkeleton is now available. Skeletons are used to visually communicate when content is in the process of loading. See the [CdrSkeleton article](../../components/skeleton) for more information.

### Polyfill removals

Polyfills for older, unsupported browsers have been removed. This has reduced the package size by about 50 Kb and should result in better application performance. View Cedar's [browser targets](https://github.com/rei/rei-cedar/blob/main/browserTargets.mjs).

<cdr-banner type="warning" aria-live="polite"><template #icon-left><icon-warning-fill inherit-color /></template><span style="font-weight:500">Users at REI should also update to the latest version of FEBS for optimal performance.</span></cdr-banner>


### Accessibility improvements
CdrChip's design has been tweaked to improve visual contrast between selected and unselected states.

### Bug fixes
The Cedar component library is now less vocal about transitions and when they end.

<cdr-link style="vertical-align: baseline" href="https://github.com/rei/rei-cedar/releases/tag/v13.2.0">v13.2.0 changelog <icon-brand-github style="margin-left: 0.2rem" /></cdr-link>

<br />

## 13.1.0

### New icons
New icons have been added to the library.

<cdr-link style="vertical-align: baseline" href="https://github.com/rei/rei-cedar/releases/tag/v13.1.0">v13.1.0 changelog <icon-brand-github style="margin-left: 0.2rem" /></cdr-link>

<br />

## 13.0.2

### Bug fixes

CdrModal has been updated to address an issue with the display of the close button when hiding the modal's title.

<cdr-link style="vertical-align: baseline" href="https://github.com/rei/rei-cedar/releases/tag/v13.0.2">v13.0.2 changelog <icon-brand-github style="margin-left: 0.2rem" /></cdr-link>

<br />

## 13.0.1

### Bug fixes

CdrAccordion has been updated to address an issue where the caret icon wasn't animating on accordion open/close.

<cdr-link style="vertical-align: baseline" href="https://github.com/rei/rei-cedar/releases/tag/v13.0.1">v13.0.1 changelog <icon-brand-github style="margin-left: 0.2rem" /></cdr-link>

<br />

## Vue 3 component library

We've migrated to Vue 3! While the components and their API's remain largely the same, we have adopted Vue 3's Composition API and rewritten the entire library from the ground-up as Vue SFC's (Single File Components). We have also adopted Vite, allowing us to significantly reduce the complexity of our build system. 

Going forward, our Vue 3 library will be the only one we support with features and functionality. We will continue to support our Vue 2 library with basic maintenance and bug fixes until Spring 2023.

Check out the repo on <cdr-link style="vertical-align: baseline" href="https://github.com/rei/rei-cedar">Github <icon-brand-github /></cdr-link>.

Note: Shortly after launch, the Vue 3 repo will be renamed to `rei-cedar` and our Vue 2 library will be republished under `@rei/cedar-vue-2`. 

<br>

## Breaking changes

While the API for most components remains unchanged, some changes were necessary to accommodate breaking changes between Vue 2 and Vue 3.

### Vue 3 attribute handling

In Vue 2, `class` and `style` attributes were excluded from the `$attrs` object.

**In Vue 3, The `$attrs` object now contains _all_ attributes passed to a component, including `class` and `style`.**

- By default, attributes applied to a component are "passed through" to its parent element. For certain Cedar components, we make use of Vue's `inheritAttrs` property to bind attributes to a deeper element in the component. This allows us to pass attributes like `loading="lazy"` to the `<img>` element within CdrImg, even when it's being used with a wrapping ratio container

- We have identified two components where this deeper class binding was causing style issues with the inclusion of `class` and `style` in the `$attrs` object. Rather than hack around Vue 3's new behavior, we have introduced new props that allow a custom class to be bound to the parent element

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

### Cedar reset

The `reset.css` asset is now consumed at the root level of the `/dist/`

**Old**
```html
import '@rei/cedar/dist/style/reset.css';
```
**New**
```html
import '@rei/cedar/dist/reset.css';
```

<br>

## Non-breaking changes

- **CdrModal:** refactored to have a flatter HTML structure
  - To a consumer, nothing should change but the underlying structure is cleaner, easier to maintain, and adds fewer nodes to the DOM

<br>

## New features

- **[CdrSwitch](../../components/switch/):** We have introduced a new UI switch control intended for switching between binary states (e.g. on/off, true/false, etc.)

- **[CdrToggleButton](../../components/toggle-button/):** We have introduced a new UI toggle control intended for toggling between distinct options (e.g. metric/imperial)

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

## Tokens v11.0.0

The JavaScript variable tokens are now exported as an ECMA module to work better with Vite applications.

## Doc site

A keen observer may notice our documentation site is still utilizing Vue 2. We're currently in the process of rebuilding our documentation site from the ground up and hope to have it released in early 2023. 

While it's not ideal to document a Vue 3 component library in a Vue 2 site, we have introduced a handful of changes to support our Vue 3 library in the interim: 

- Adding a utility to generate a Vue 3 version of our component sandboxes. [Try it out](../../components/buttons/#primary)
- Flagging when a change or feature applies to the Vue 3 library only



</cdr-doc-table-of-contents-shell>
