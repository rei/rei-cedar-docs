---
{
  "title": "Summer 2020 Release",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "summary": false,
  "breadcrumbs": [
    {
      "text": "x.x.x Release Notes"
    }
  ],
}
---

<cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>

## Update Steps

- Update to the latest version of the Cedar packages:

| package name | version |
|--------------|---------|
| `@rei/cedar` | ^6.x.x |
| `@rei/cdr-tokens` | ^5.x.x |
| `@rei/cdr-component-variables` | ^4.x.x |
| `@rei/cedar-icons` | ^2.x.x |

- If your project depends on any shared component packages (i.e, FEDPACK, FEDCOMP, FEDPAGES), you will want to update those packages to the new version of Cedar before updating your micro-site.

## New Features

### Mixin and Token Usage

To align with performance goals for the co-op, we have updated our guidance around the [Cedar utility classes](../../components/utilities) to recommend that customer facing projects instead  use [Cedar tokens](../../tokens/all-tokens) to apply styling.

Cedar utility class files often contain a large number of options, and only a small number of them are used in most projects. By using Cedar tokens instead of utility classes, you can ensure that your project is only loading the styles you are directly using. Special attention should be paid to the space (`@rei/cedar/dist/style/space.css`) and text (`@rei/cedar/dist/style/text.css` or `@rei/cedar/dist/style/cdr-text.css`) utility class files as they are especially large.

- The [CdrText page](../../components/text) has been updated to show examples of using mixins instead of the modifier/utilities.
- CdrText related reset logic has been moved out of the CdrText CSS file and into the Cedar CSS reset file. The CdrText CSS file only needs to be loaded if you are using the `modifier` property to style text.
- We have deprecated the [space property](#space-property-deprecated) in the Cedar components.
- We have added mixins for [sr-only and cdr-container](#mixins-for-sr-only-and-cdr-container) so that they can be used in place of the equivalent utility classes.

### CdrAlert Component

CdrAlert is a simple wrapper component that allows for composing various alert layouts, and now officially supported in the system. See the [CdrAlert docs](../../components/alert/) for more details and usage guidelines.

### CdrFormGroup Component

CdrFormGroup is a simple wrapper component for grouping together form elements with a common label. See the [CdrFormGroup docs](../../components/form-group/) for more details and usage guidelines.

### CdrButton Icon Left and Right Slots

CdrButton has updated with 2 additional slots, `icon-left` and `icon-right`, for rendering icons to the left or right of the button text. Using these slots ensures that the icon is properly spaced within the button and that its size adjusts with the button size. The original `icon` slot can still be used for rendering `icon-only` buttons. See the [CdrButton docs](../../components/buttons/#slots) for more details.

### CdrButton Link Style

CdrButton has been updated to add new modifier: `link`. This is intended to visually style a CdrButton like a link, but with the same size and full-width options of a normal CdrButton. This allows for layouts which use links in the place of or alongside CdrButtons, while also providing an option for links with the bigger click target of a button. CdrLink should still be used for rendering a link inline with other text. See the [CdrButton docs](../../components/buttons/#link-style) for more details.

### CdrRating Rounding Logic

CdrRating has been updated to round the displayed rating to the nearest 1/10th rather than the nearest 1/4. Whole number values now display an empty decimal place. For example, an average rating of "3.71" now renders as "3.7" rather than "3.75", while a rating of "3" now renders as "3.0" rather than "3". Visually the star icons still render in 1/4 increments as they did previously.

### Media Query Mixins For Breakpoint And Below

We have updated our [media queries](../../layout/responsive/#scss-less-utilities) to add mixins that match below a given breakpoint. We have also renamed some of our existing media query mixins to follow this naming convention  

| Mixin Name     | Target                       |
|----------------|------------------------------|
| cdr-sm-mq-down | Below $cdr-breakpoint-sm     |
| cdr-md-mq-down | Below $cdr-breakpoint-md     |
| cdr-lg-mq-down | Below $cdr-breakpoint-lg     |
| | |
| cdr-xs-mq-up   | $cdr-breakpoint-xs and Above |
| cdr-sm-mq-up   | $cdr-breakpoint-sm and Above |
| cdr-md-mq-up   | $cdr-breakpoint-md and Above |
| cdr-lg-mq-up   | $cdr-breakpoint-lg and Above |

### Mixins for sr-only and cdr-container

Cedar tokens now includes mixins for the screen-reader only and container utility classes. This gives consumers the option of skipping loading the utility class files and instead just inlining the CSS that they need. The new mixins are named `cdr-display-sr-only`, `cdr-display-sr-focusable`, `cdr-container`, and `cdr-container-fluid`.

### Placeholder Selectors for SCSS Mixins

The SCSS distribution of Cedar tokens now includes [placeholder selectors](https://sass-lang.com/documentation/style-rules/placeholder-selectors). If you are using the same mixin multiple times then switching to placeholder selectors will allow SCSS to include that style only once. The placeholder selectors have the same names as their mixin equivalents, but are invoked by using `@extend %mixin-name` rather than `@include mixin-name`:

```
.mixin-example {
  @include cdr-display-sr-only;
}

.placeholder-example {
  @extend %cdr-display-sr-only;
}
```

### CdrTabs Auto Height

CdrTabs previously required a static `height` value to be set, with overflowing content rendered with a scrollbar. CdrTabs now accepts `height="auto"` which allows for rendering tabs with variable height based on the size of it's content. See the [CdrTabs docs](../../components/tabs/#auto) for more details.

### CdrTabs Background Color

In order to support CdrTabs that are rendered on non-primary backgrounds, we have added a `background-color` property that can be used to set the gradients inside CdrTabs to match it's background.

## Deprecations

### CdrCta Deprecated and Merged with CdrButton

The CdrCta component has been deprecated and its functionality has been merged with CdrButton. The `sale`, `dark`, `elevated`, and right-aligned-icon styles from CdrCta have all been added as options in CdrButton. This was intended to provide more flexibility in constructing calls to action, while also adding additional styling options for rendering CdrButtons.

See the [CdrButton with link tag](../components/buttons#button-with-link-tag) and [CdrButton alternative styles](../components/buttons#alternative-styles) for more information.

In order to update existing instances of CdrCta to instead use CdrButton:
- Pass the `icon-caret-left` CdrIcon into the `icon-right` slot. Note that this can be replaced with any icon, or the icon can be omitted completely.
- Update the `ctaStyle` property as needed and pass it into the `modifier` prop of CdrButton

| CdrCta `ctaStyle` | CdrButton `modifier` |
|--|--|
| brand | primary |
| light | secondary |
| sale | sale |
| dark | dark |

```
// "sale" CdrCta migrated to a CdrButton
<cdr-cta cta-style="sale">Call To Action</cdr-cta>
<cdr-button modifier="sale" tag="a" href="rei.com">
  Call To Action <icon-caret-left slot="icon-right"/>
</cdr-button>

// "brand" CdrCta migrated to a CdrButton
<cdr-cta cta-style="brand">Call To Action</cdr-cta>
<cdr-button modifier="primary" tag="a" href="rei.com">
  Call To Action <icon-caret-left slot="icon-right"/>
</cdr-button>
```

### CdrCta Tokens

We have deprecated all of the `cta` tokens and merged them with our `button` tokens. The CTA tokens will be removed in the winter 2021 release. Mappings between the `CTA` and `button` tokens are listed below:

| Deprecated Token | Equivalent Token |
|------------------|------------------|
| cdr-color-text-cta-dark | cdr-color-text-button-dark |
| cdr-color-text-cta-dark-hover | cdr-color-text-button-dark-hover |
| cdr-color-text-cta-dark-active | cdr-color-text-button-dark-active |
| cdr-color-text-cta-dark-disabled | cdr-color-text-button-dark-disabled |
| cdr-color-background-cta-dark-rest | cdr-color-background-button-dark-rest |
| cdr-color-background-cta-dark-active | cdr-color-background-button-dark-active |
| cdr-color-background-cta-dark-hover | cdr-color-background-button-dark-hover |
| cdr-color-border-cta-dark-rest | cdr-color-border-button-dark-rest |
| cdr-color-border-cta-dark-active | cdr-color-border-button-dark-active |
| cdr-color-border-cta-dark-active-inset | cdr-color-border-button-dark-active-inset |
| cdr-color-border-cta-dark-hover | cdr-color-border-button-dark-hover |
|||
| cdr-color-text-cta-light | cdr-color-text-button-secondary |
| cdr-color-text-cta-light-hover | cdr-color-text-button-secondary-hover |
| cdr-color-text-cta-light-active | cdr-color-text-button-secondary-active |
| cdr-color-text-cta-light-disabled | cdr-color-text-button-secondary-disabled |
| cdr-color-background-cta-light-rest | cdr-color-background-button-secondary-rest |
| cdr-color-background-cta-light-active | cdr-color-background-button-secondary-active |
| cdr-color-background-cta-light-hover | cdr-color-background-button-secondary-hover |
| cdr-color-background-cta-light-disabled | cdr-color-background-button-secondary-disabled |
| cdr-color-border-cta-light-rest | cdr-color-border-button-secondary-rest |
| cdr-color-border-cta-light-active | cdr-color-border-button-secondary-active |
| cdr-color-border-cta-light-active-inset | cdr-color-border-button-secondary-active-inset |
|||
| cdr-color-text-cta-brand | cdr-color-text-button-primary |
| cdr-color-text-cta-brand-hover | cdr-color-text-button-primary-hover |
| cdr-color-text-cta-brand-active | cdr-color-text-button-primary-active |
| cdr-color-text-cta-brand-disabled | cdr-color-text-button-primary-disabled |
| cdr-color-background-cta-brand-rest | cdr-color-background-button-primary-rest |
| cdr-color-background-cta-brand-active | cdr-color-background-button-primary-active |
| cdr-color-background-cta-brand-hover | cdr-color-background-button-primary-hover |
| cdr-color-border-cta-brand-rest | cdr-color-border-button-primary-rest |
| cdr-color-border-cta-brand-active | cdr-color-border-button-primary-active |
| cdr-color-border-cta-brand-active-inset | cdr-color-border-button-primary-active-inset |
| cdr-color-border-cta-brand-hover | cdr-color-border-button-primary-hover |
|||
| cdr-color-text-cta-sale | cdr-color-text-button-sale |
| cdr-color-text-cta-sale-hover | cdr-color-text-button-sale-hover |
| cdr-color-text-cta-sale-active | cdr-color-text-button-sale-active |
| cdr-color-text-cta-sale-disabled | cdr-color-text-button-sale-disabled |
| cdr-color-background-cta-sale-rest | cdr-color-background-button-sale-rest |
| cdr-color-background-cta-sale-active | cdr-color-background-button-sale-active |
| cdr-color-background-cta-sale-hover | cdr-color-background-button-sale-hover |
| cdr-color-border-cta-light-hover | cdr-color-border-button-secondary-hover |
| cdr-color-border-cta-sale-rest | cdr-color-border-button-sale-rest |
| cdr-color-border-cta-sale-active | cdr-color-border-button-sale-active |
| cdr-color-border-cta-sale-active-inset | cdr-color-border-button-sale-active-inset |
| cdr-color-border-cta-sale-hover | cdr-color-border-button-sale-hover |
|||
| cdr-color-background-cta-default-disabled | cdr-color-background-button-default-disabled |
| cdr-color-border-cta-default-disabled | cdr-color-border-button-default-disabled |

### Space Property Deprecated

Many of the Cedar components accepted a `space` property which applied a spacing utility class to that component. As part of our efforts to improve performance by de-coupling the utility classes from the components we have deprecated this property in all of our components. This change affects the following components: CdrButton, CdrCheckbox, CdrCta, CdrDataTable, CdrIcon, CdrInput, CdrLink, CdrList, CdrQuote, CdrRadio, CdrRating, CdrSelect, CdrText. Spacing utility classes can still be applied to any of these components by simply passing the utility class in via the `class` prop instead of `space`, for example:

```
<cdr-button space="cdr-mb-space-one-x">Deprecated</cdr-button>
<cdr-button class="cdr-mb-space-one-x">Supported</cdr-button>
```

### CdrButton Icon Utility Class No Longer Needed

The functionality of the `cdr-button__icon` utility class has been built directly into CdrButton. You can safely remove this class from any instances of CdrButton that uses CdrIcon.

### Media Query Mixin Renaming

In order to support adding the [breakpoint and below media queries](#media-query-mixins-for-breakpoint-and-below), we have renamed some of the existing media query mixins to follow that naming convention.

| Deprecated Mixin | New Mixin    |
|------------------|--------------|
| cdr-xs-mq        | cdr-xs-mq-up |
| cdr-sm-mq        | cdr-sm-mq-up |
| cdr-md-mq        | cdr-md-mq-up |
| cdr-lg-mq        | cdr-lg-mq-up |


## Bug Fixes

### CdrModal Smooth Scroll

CdrModal now renders its closing animation properly when the `scroll-behavior` of the page is set to `smooth`.

## Breaking Changes

### CdrIcon a11y Enhancements

We have improved the accessibility of the CdrIcon components by moving the `role="presentation"` attribute from the root element onto the path element. The CdrIcon components now add `aria-hidden="true"` to their root element by default. The meaning of the icon should either be explained by the visible text around it, or by including screenreader-only text using the `cdr-display-sr-only` utility class or mixin. [See the CdrIcon accessibility section](../components/icons#accessibility) for more details.

### CdrModal a11y Fix

We have removed the `role="presentation"` attribute from CdrModal as it is not needed for accessibility.

### Warning and Error Icons

We have updated our icon library to use circular icons for "error" states and triangular icons for "warning" states.

To align with this we have made the following breaking changes to our [icon library](https://rei.github.io/cedar-icons/#/):

| old asset name     | new asset name     |
|--------------------|--------------------|
| warning-stroke.svg | error-stroke.svg   |
| warning-fill.svg   | error-fill.svg     |
| warning-tri.svg    | warning-fill.svg   |
| n/a                | warning-stroke.svg |

We have also updated the Cedar icon components with the following breaking changes:

| old component name | new component name |
|--------------------|--------------------|
| IconWarningStroke  | IconErrorStroke    |
| IconWarningFill    | IconErrorFill      |
| IconWarningTri     | IconWarningFill    |
| n/a                | IconWarningStroke  |


### Removals

In accordance with our deprecation policy, features that were deprecated in the [Winter 2020 release](../winter-2020/#deprecations) have been removed from Cedar.

#### Deprecated Cedar Tokens and Text Utilities Removed

The following mixins and utility classes have been removed. See the linked deprecation mapping for information on updating:
- [redwood-display-N0](../winter-2020/#redwood-display)
- [redwood-body-N0](../winter-2020/#redwood-body)
- [maple-utility-N0](../winter-2020/#maple)
- [spruce-display-N0 and spruce-body-N0](../winter-2020/#spruce)
- [cdr-text-display-N00, cdr-text-heading-N00, and cdr-text-subheading-N00](../winter-2020/#headings)
- [cdr-text-body](../winter-2020/#type-utility-classes)

</cdr-doc-table-of-contents-shell>
