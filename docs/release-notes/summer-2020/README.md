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

### For a Micro-Site

- Update to `@rei/cedar` ^x.x.x (TODO: ???)
- If your project depends on any shared component packages (i.e, FEDPACK, FEDCOMP, FEDPAGES), you will want to update those packages to the new version of Cedar and febs before updating your micro-site.

### For a Component Package

- Update to `@rei/cedar` ^x.x.x (TODO: ???)
- Ensure your component is using `@rei/febs` ^7.1.0 for it's prod and dev build systems

## New Features

### CdrAlert Component


CdrAlert is a simple wrapper component that allows for composing various alert layouts, and now officially supported in the system. See the [CdrAlert docs](../../components/alert/) for more details and usage guidelines.

### CdrFormGroup Component

CdrAlert is a simple wrapper component for grouping together form elements with a common label. See the [CdrFormGroup docs](../../components/form-group/) for more details and usage guidelines.


## Bug Fixes

## Breaking Changes

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

## Deprecations

### CdrCta merged with CdrButton

TODO:
- made CTA more flexible, insert any icon
- CTA should use `tag="a"` and `href=""`, navigate to new page. Button should trigger action on current page
- CTA brand => primary button, CTA light => secondary button
- more color options for buttons

### CdrCta Tokens

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

## Removals

In accordance with our deprecation policy, features that were deprecated in the [Winter 2020 release](../winter-2020/#deprecations) have been removed from Cedar.

### Deprecated Cdr Tokens and CdrText Modifiers Removed

TODO:

Mixins removed:
[redwood-display-N0](../winter-2020/#redwood-display)
[redwood-body-N0](../winter-2020/#redwood-body)
[maple-utility-N0](../winter-2020/#maple)
[spruce-display-N0 and spruce-body-N0](../winter-2020/#spruce)

Mixins and utilities removed:
[cdr-text-display-N00, cdr-text-heading-N00, and cdr-text-subheading-N00](../winter-2020/#headings)
[cdr-text-body](http://localhost:8080/release-notes/winter-2020/#type-utility-classes)

</cdr-doc-table-of-contents-shell>
