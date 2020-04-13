---
{
  "title": "Spring 2020 Release",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "summary": false,
  "breadcrumbs": [
    {
      "text": "5.x.x Release Notes"
    }
  ],
}
---

<cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>


## Update Steps

If you are not already on `@rei/cedar` >= 2.x.x, you will first need to [upgrade your project](../summer-2019/) to the single-package version of Cedar.

### For a Micro-Site

- Update to `@rei/cedar` ^5.0.0
- If your project depends on any shared component packages (i.e, FEDPACK, FEDCOMP, FEDPAGES), you will want to update those packages to the new version of Cedar and febs before updating your micro-site

### For a Component Package

- Update to `@rei/cedar` ^5.0.0
- Ensure your component is using `@rei/febs` ^7.1.0 for it's prod and dev build systems

## New Features

### New Component: CdrTable

We have added a component for tables. This component is more generic than the existing data table (which has been moved to fed components). See the [CdrTable docs](../../components/table/) for more details and examples

### CdrButton Icon-Only Variant

We have added a new variant to CdrButton that allows you to render an icon-only button that has a background and border in order to make icon-only buttons more visible. See the [CdrButton docs](../../components/buttons/#icon-only-with-background) for more details

### New Utility Classes

Utility classes for foreground and background color are now available. See the  [utilities page](../../components/utilities/#color) for a full list.
Note that the existing color utility classes have been [deprecated](#color-utility-classes)

### CdrAccordionGroup

We have added this wrapper component to better support the accessibility of accordion groups. Simply wrap your existing groups of accordions in this component and keyboard navigation will be taken care of. See the [CdrAccordion docs](../../components/accordion/) for more details and examples

### CdrImg Event Handlers

We have updated CdrImg to accept event handlers. This is intended to support `onError` event handlers. See the [CdrImg docs](../../components/image/#error-event-handler) for more details and examples

### CdrCard Hover State

CdrCard has been updated with a new hover state. Any custom hover logic that you may have applied to instances of CdrCard should be removed in favor of this new default behavior.

## Bug Fixes

### CdrRating Medium Size

Added missing medium responsive size modifier. Now all options can be used at all breakpoints for responsive sizing. The default size is still medium.

## Breaking Changes

### Unitless JS Tokens For Spacing and Breakpoints

The space (`cdr-space-...`) and breakpoint (`cdr-breakpoint-...`) tokens in the JS distributions of @rei/cdr-tokens have been made "unitless". Those tokens previously had to be manipulated in order to use them effectively in JavaScript, for example by doing: `CdrSpaceOneX.split('px')[0]`. 

### CdrAccordion Level Prop

CdrAccordion has a new required prop: `level`. This prop is required in order to meet WCAG accessibility standards and should be set to the appropriate heading level for the context of your page. See the [CdrAccordion docs](../../components/accordion/) for more details and examples

### CdrLink Theming Removed

CdrLink previously supported theming by setting an `on-dark` or `on-light` CSS class on a container element. Due to the new color scale this feature was not possible to support in a consistent way and has been removed.

### CdrButton OnDark Removed

CdrButton previously accepted a prop named `on-dark` which could be used in conjunction with the `icon-only` prop to render a button with a background. This was intended to be used on dark backgrounds to make the icon button more visible and accessible. Due to the new color scale this feature was not possible to continue supporting as is, and has been replaced with a new [with-background](./#cdrbutton-icon-only-variant) property.

### CdrCard Position Update

We have updated the CdrCard component to use `position: relative` in order to support upcoming work that will enable more complex card compositions. If you have been applying custom styling to instances of CdrCard this may cause conflicts with your implementation. 

## Deprecations

### Color Utility Classes


| Deprecated utility   | Equivalent utility       |
|----------------------|--------------------------|
| cdr-bg--light        | cdr-color-background-primary     |
| cdr-bg--lighter      | cdr-color-background-primary     |
| cdr-bg--lightest     | cdr-color-background-primary     |
| cdr-bg--dark         | n/a  |
| cdr-bg--darker       | n/a  |

### Text Tokens
| Deprecated token/mixin   | Equivalent token/mixin       |
|--------------------------|------------------------------|
| cdr-text-utility-n00         | cdr-text-utility-sans-n00         |
| cdr-text-utility-strong-n00  | cdr-text-utility-sans-strong-n00  |

### Type Utility classes
| Deprecated class name   | Equivalent class name         |
|-------------------------|-------------------------------|
| cdr-text-utility-n00        | cdr-text--utility-sans-n00         |
| cdr-text-utility-strong-n00 | cdr-text--utility-sans-strong-n00  |


### CdrText Modifiers
| Deprecated class name   | Equivalent class name         |
|-------------------------|-------------------------------|
| utility-n00                 | utility-sans-n00                  |
| utility-strong-n00          | utility-sans-strong-n00          |


## Removals

In accordance with our deprecation policy, features that were deprecated in the [Fall 2019 release](../fall-2019/#deprecations) have been removed from Cedar.

- The cdr-text modifiers for display, heading-small/medium/large, and subheading, as well as cdr-tokens mixins for `cdr-text-header-n` and `spruce-display` should be updated according to the typography mappings from the [Winter 2020 release](../winter-2020/#updated-deprecation-mappings) rather than the ones in the Fall 2019 release notes.
- Alignment and display utilities should be re-mapped to their new naming structure

</cdr-doc-table-of-contents-shell>
