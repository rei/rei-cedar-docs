---
{
  "title": "Spring 2021 Release",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "summary": false,
  "breadcrumbs": [
    {
      "text": "9.x.x Release Notes"
    }
  ],
}
---

<cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>

## Update Steps

- Update to the latest version of the Cedar packages:

| package name | version |
|--------------|---------|
| `@rei/cedar` | ^9.0.0 |
| `@rei/cdr-tokens` | ^9.0.0 |
| `@rei/cdr-component-variables` | ^7.0.0 |

- If your project depends on any shared component packages (i.e, FEDPACK, FEDCOMP, FEDPAGES), you will want to update those packages to the new version of Cedar before updating your micro-site.

## New Features

### CdrContainer Component

We have created a new CdrContainer component which encapsulates the basic responsive layout logic for REI pages. This component behaves the same as the `cdr-container` mixins and is intended as an option for replacing the now deprecated `cdr-container` utility class. See the [CdrContainer](../../components/container) page for more information.

### Brand Color Updates

We have updated the color values of some Cedar tokens to make use of the REI brand color palette. Those tokens are also being used to style the `default` and `sale` version of the CdrButton.

We have created a new `cdr-color-background-brand-spruce` color token that can be used as a background color in certain situations. Note that only the `background-primary` and `background-secondary` color tokens are designed to work and have accessible contrast levels against all of Cedar.

### CdrBreadcrumb Navigate Event

The CdrBreadcrumb component now emits a `navigate` event which allows users to override the default link-based navigation or otherwise programmatically handle breadcrumb link clicks. This is intended to support router based navigation without requiring the use of scoped slots. See the [CdrBreadcrumb](../../components/breadcrumb/#custom-navigation) page for more information.

### Numeric CdrInput Default Attributes

CdrInput now accepts a new boolean property called `numeric` which sets some default attributes for inputs that are composed of numerical characters but are not strictly "number" values themselves. The `type="number"` attribute for input elements is designed to be used with actual numbers such as quantities, and does not behave properly with values such as credit cards, security codes, postal codes, or month/year combos.

If a CdrInput receives either `type="number"` or `:numeric="true"`, it will set default values for the `inputmode` and `pattern` attributes which will force mobile devices to launch a numeric only keyboard. Note that solely using `:numeric="true"` will not restrict input to only numeric characters, see the [CdrInput page](../../components/input#numeric-input) for more information.

### Form Accessibility Improvements

We have made a number of improvements to our form components to make them more accessible and consistent:

- Default `autocorrect`, `autocapitalize`, and `spellcheck` attributes on CdrInput are now set automatically to make input more consistent across different browsers and devices. These attributes can be overridden if needed.
- CdrInput and CdrSelect now set `aria-required` instead of the `required` attribute on the HTML input element when the `required` property is passed in. Because validation is handled programmatically `aria-required` results in a more consistent user experience across browsers than `required` does.
- If a `helper-text` slot is used in conjunction with CdrInput or CdrSelect that helper text element is now automatically linked to the input field using the `aria-describedby` attribute. The `aria-describedby` attribute can still be used to link additional elements to the input if needed.
- If the `error` property is used on a CdrInput, CdrSelect, or CdrFormGroup component the input field gets marked as `aria-invalid="true"` and the error message is linked to the input field using the `aria-errormessage` attribute.

### Form Element Error Role Property

CdrFormGroup, CdrInput, and CdrSelect now accept an `error-role` property that allows for overriding the accessible `role` attribute on their embedded error state notification. The default value of `error-role` is `status`.

### CdrModal Role Property

CdrModal now accepts a `role` property that allows for overriding the accessible `role` property on the modal content element. The default value of `role` is `dialog`.


## Deprecations

### CdrBreadcrumb and CdrPagination Scoped Slots

CdrBreadcrumb and CdrPagination both allow for passing in a scoped slot for rendering their link elements which was intended to support things like vue-router which must override the default link navigation behavior. This feature increased the complexity of both components, making it difficult to maintain and improve the components over time. It requires that consumers bind multiple attributes to the slot element to ensure a consistent UI. Most importantly, this functionality is better served through an event handler which would allow the Cedar components to remain simple and consistent but give consumers the flexibility to customize their behavior.

 We are planning to remove support for scoped slots in both components as part of our future Vue 3 updates. See the [CdrBreadcrumb](../../components/breadcrumb/#custom-navigation) or [CdrPagination](../../components/pagination/#overriding-default-navigation) pages for examples of how to override their default navigation behavior. Please reach out to the Cedar team if you have any questions or concerns about this change.

### Vue 3: Update Slot Syntax

Vue 2.6 introduced a new `v-slot` syntax for passing slot content into components. A pound sign `#` can be used as a shorthand for `v-slot:`, much like a colon `:` can be used as a shorthand for `v-bind`. The old syntax is removed from Vue 3 and we recommend updating your codebase to make use of the new slot syntax to simplify the upgrade process in the future. Note that the new `v-slot` or `#` syntax can only be used on a `template` tag, however those additional `template` tags will not be included in the rendered HTML.

```
<!-- Named slots -->
<span slot="slotname">old named slot syntax</span>
<template #slotname>
  <span>new named slot syntax<span>
</template>

<!-- Scoped slots -->
<template slot="slotname" slot-scope="scopeObject">old scoped slot syntax {{ scopeObject.name }}</template>
<template #slotname="scopeObject">new scoped slot syntax {{ scopeObject.name }}</template>
```

The examples on this doc site have been updated to make use of the new syntax, see the [Vue documentation](https://vuejs.org/v2/guide/components-slots.html#Named-Slots) for more information.

## Breaking Changes

### CdrAlert Renamed to CdrBanner

The CdrAlert component has been renamed to be CdrBanner to better align with the intention and meaning of the component. CdrBanner may be used for a [wide array of messaging types](../../components/banner/#ccessibility) not restricted to the accessible "alert" pattern. Nothing in the component API has changed aside from the name, consumers can migrate by simply replacing any instance of `cdr-alert` with `cdr-banner`, as well as replacing `CdrAlert` with `CdrBanner`. Note that this change impacts both the @rei/cedar component package as well as the @rei/cdr-component-variables SCSS/LESS mixins.

### CdrTokens Background Scoping

In order to distinguish generic background colors like primary and secondary from more specific background colors we have re-named several of our background color tokens. This is necessary because the Cedar team exhaustively tests the accessibility of our components against our primary and secondary background colors, but we are unable to guarantee that every state of every Cedar component will be accessible against certain rarer or more specific background types. This scoping also helps clarify that these background color tokens are intended to be used for simple messaging and should not be applied as general background colors.

| Old token name | New token name |
|----|-------|
| cdr-color-background-success | cdr-color-background-message-success |
| cdr-color-background-warning | cdr-color-background-message-warning |
| cdr-color-background-error | cdr-color-background-message-error |
| cdr-color-background-info | cdr-color-background-message-info |
| cdr-color-background-sale | cdr-color-background-message-sale |

### CdrModal Aria Describedby

The `aria-describedby` property on CdrModal has been updated to use the correct casing in order to match the default HTML aria attribute. To address this change, in any CdrModal instance replace `ariaDescribedBy` with `ariaDescribedby` or `aria-described-by` with `aria-describedby`.

### Removals

In accordance with our deprecation policy, features that were deprecated in the [Fall 2020 release](../fall-2020/#deprecations) have been removed from Cedar.

#### CdrInput Helper Text Slot

The `helper-text` slot in CdrInput was removed in favor of the `helper-text-bottom` slot. To update, rename any instance of `helper-text` in CdrInput to be `helper-text-bottom` instead.

#### Cedar Utility Classes And CdrText Modifier Have Been Removed

The Cedar CSS utility classes and CdrText modifier property were intended to allow developers to quickly apply common styling attributes to their applications, as well as to provide parity with some features that were available in Cedar 1. However there are a number of issues with using global CSS utility classes in a micro-site based architecture such as we have at REI:

- In order to use a single utility class, every class in that file must be loaded, which can be quite costly for larger files such as the text or space utilities. This cost comes both in the form of the large CSS asset that must be downloaded, as well as the time it takes the user's browser to parse and render the CSS file.
- Because each micro-site manages it's own assets independently it is difficult for those larger utility files to be cached and shared across micro-sites without simply loading those utilities on every page. This was not a problem for Cedar 1 as it was loaded on every page already and used primarily in the monolith.
- Global CSS classes may end up being used in markup that is unrelated to the package that loads it, which can cause unexpected issues when that package is changed. For example, if a shared FEDCOMP component loads the Cedar space utility classes, a micro-site that consumes that component could also end up using those space utilities without loading the utility class file itself. If that shared component is removed or changed, it may break code in the micro-site that depended on that space utility file being loaded. This is an ongoing issue in the removal of Cedar 1 from the monolith and global page template, as often times projects will end up using Cedar 1 classes without realizing where they are being loaded from.
- Global CSS classes are impossible to version, which makes it very difficult to roll out changes without potentially breaking existing code. A micro-site that imports a specific verison of Cedar can be tested before it is deployed and rolled out independently, but if a global CSS file is altered it will immediately impact every piece of markup that references it.

We have been warning that these files will be deprecated for our past several releases, yet we continue to see new instances of them appear in REI codebases, so we have made the decision to delete them entirely in order to mitigate these ongoing issues with performance and code maintainability.

For teams that need to update to the latest version of Cedar but which use the utility classes or CdrText modifier property too extensively to migrate all at once, we have created a [bitbucket project](https://git.rei.com/users/cowills/repos/cedar-deprecated-utilities/browse) containing those utility class definitions to allow you to incrementally migrate towards @rei/cdr-tokens.

#### Example migrations

##### Align Utils

Alignment utilities can be replaced with the equivalent plain CSS
```html
<div class="cdr-align-text-center">
  Deprecated utility
</div>
```
```html
<template>
  <div class="your-custom-alignment-class">
    Using plain CSS
  </div>
</template>
<style lang="scss">
  .your-custom-alignment-class {
    text-align: center;
  }
</style>

```

##### Color Utils

Color utilities can be replaced with the equivalent value from @rei/cdr-tokens targeting either `background-color`, `color`, or `fill` as appropriate.

```html
<div class="cdr-color-background-primary">
  Deprecated background color utility
</div>

<div class="cdr-color-text-primary">
  Deprecated text color utility
</div>
```

```html
<template>
  <div class="your-custom-background-color-class">
    Using plain CSS/tokens for background color
  </div>

  <div class="your-custom-text-color-class">
    Using plain CSS/tokens for text color
  </div>
</template>
<style lang="scss">
  @import '~@rei/cdr-tokens/dist/scss/cdr-tokens';

  .your-custom-background-color-class {
    background-color: $cdr-color-background-primary;
  }

  .your-custom-text-color-class {
    color: $cdr-color-text-primary;
  }
</style>
```

##### Container Utils

The `cdr-container` and `cdr-container-fluid` utility classes should be replaced with either the [CdrContainer](../../components/container) component or the equivalent mixin from @rei/cdr-tokens. See the [Cedar Responsive article](https://rei.github.io/rei-cedar-docs/foundation/responsive/) for more information on general container usage.

```html
<div class="cdr-container">
  Deprecated utility
</div>
```

```html
<template>
  <div>
    <cdr-container>
      Using the CdrContainer component
    </cdr-container>

    <div class="your-custom-container-class">
      Using plain CSS/tokens
    </div>

  </div>
</template>
<style lang="scss">
  @import '~@rei/cdr-tokens/dist/scss/cdr-tokens';

  .your-custom-container-class {
    @include cdr-container;
  }
</style>
```


##### Display Utils

Display utilities can be replaced with the equivalent plain CSS

```html
<div class="cdr-display-none">
  Deprecated utility
</div>
```
```html
<template>
  <div class="your-custom-display-class">
    Using plain CSS
  </div>
</template>
<style lang="scss">
  .your-custom-display-class {
    display: none;
  }
</style>
```

##### Space Utils

Space utility classes were a combination of the targeted property and a Cedar spacing token.

| prefix | property |
|--|--|
| inset | padding |
| pl | padding-left |
| pt | padding-top |
| pr | padding-right |
| pb | padding-bottom |
| px | padding-left and padding-right |
| py | padding-top and padding-bottom |
| ml | margin-left |
| mt | margin-top |
| mr | margin-right |
| mb | margin-bottom |
| mx | margin-left and margin-right |
| my | margin-top and margin-bottom |


```html
<div class="cdr-space-inset-half-x">
  Deprecated utility
</div>
```

```html
<template>
  <div class="your-custom-space-class">
    Using plain CSS/tokens
  </div>
</template>
<style lang="scss">
  @import '~@rei/cdr-tokens/dist/scss/cdr-tokens';

  .your-custom-space-class {
    padding: $cdr-space-half-x;
  }
</style>
```


##### Text Utils

Note that the text utility classes were available both as CSS utility classes and via the cdr-text modifier prop. The migration path is the same for both patterns.

```html
<p class="cdr-text--utility-sans-strong-300">
  Deprecated utility
</p>

<cdr-text modifier="utility-sans-strong-300" tag="p">
  Deprecated modifier
</cdr-text>
```

```html
<template>
  <p class="your-custom-type-class">
    Using plain CSS/tokens
  </p>
</template>
<style lang="scss">
  @import '~@rei/cdr-tokens/dist/scss/cdr-tokens';

  .your-custom-type-class {
    @include cdr-text-utility-sans-strong-300;
  }
</style>
```

##### Responsive Utilities

The align, display, space, and text utility classes supported breakpoint modifiers as a suffix which would only activate the utility class at the given breakpoint. Those instances should be migrated as described above but additionally use a [breakpoint mixin from @rei/cdr-tokens](https://rei.github.io/rei-cedar-docs/foundation/responsive/#scss-less-utilities).

```html
<div class="cdr-mb-space-quarter-x\@md">
  Deprecated responsive utility
</div>
```

```html
<template>
  <div class="your-custom-responsive-space-class">
    Using plain CSS/tokens
  </div>
</template>
<style lang="scss">
  @import '~@rei/cdr-tokens/dist/scss/cdr-tokens';

  @include cdr-md-mq-only {
    .your-custom-responsive-space-class {
      margin-bottom: $cdr-space-quarter-x;
    }
  }

</style>
```



</cdr-doc-table-of-contents-shell>
