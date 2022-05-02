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
- If your project depends on any shared component packages (i.e, FEDPACK, FEDCOMP, FEDPAGES), you will want to update those packages to the new version of Cedar and febs before updating your micro-site.

### For a Component Package

- Update to `@rei/cedar` ^5.0.0
- Ensure your component is using `@rei/febs` ^7.1.0 for it's prod and dev build systems

## 5.2.0

- Adds IconReturns, IconVirtualOutfitting, and IconStorefront components
- Fixes CdrBreadcrumb text styling at `sm` and `xs` breakpoints

## 5.1.0

- Fixes an issue with our ESM build that was breaking tree-shaking.
- Sets `cdr-color-text-link-visited` to the correct value. CdrLink does not currently have a `visited` state.
- Adds new tokens and utility classes for `cdr-space-three-x`.

## 5.0.0

## New Features

### Cedar Design Libraries Move to Figma
The UI Toolkit has migrated to Figma! Designers can find updated information in the [getting started](../../resources/for-designers/) article. Additionally, Figma replaces Abstract in facilitating the design to development [hand-off process](../../getting-started/hand-off/).

### Updated Brand Color Palette

Cedar components and design tokens have been updated to make use of the new brand palette. Any hardcoded color values in your application may need to be updated in order to stay in sync with the new brand palette. We have additionally removed the concept of "lightmode" and "darkmode" themes from Cedar to align with the brand palette updates. See the [color token deprecation list](#color-token-updates) for guidance on re-mapping existing color tokens.

### New Component: CdrTable

We have added a component for tables. This component is more generic than the existing data table (which has been moved to fed components). See the [CdrTable docs](../../components/table/) for more details and examples. Note that the [CdrDataTable component has been deprecated](#cdrdatatable).

### New Component: CdrCard
CdrCard is a simple wrapper component that allows for composing various card layouts, and now officially supported in the system. See the [CdrCard docs](../../components/card/) for more details and usage guidelines.

### CdrButton Icon-Only Variant

We have added a new variant to CdrButton that allows you to render an icon-only button that has a background and border in order to make icon-only buttons more visible. See the [CdrButton docs](../../components/buttons/#icon-only-with-background) for more details.

### New Utility Classes

Utility classes for foreground and background color are now available. See the [utilities page](../../components/utilities/#color) for a full list.
Note that the existing color utility classes have been [deprecated](#color-utility-classes).

### CdrAccordionGroup

We have added this wrapper component to better support the accessibility of accordion groups. Simply wrap your existing groups of accordions in this component and keyboard navigation will be taken care of. See the [CdrAccordion docs](../../components/accordion/) for more details and examples.

### CdrImg Event Handlers

We have updated CdrImg to accept event handlers. This is intended to support `onError` event handlers. See the [CdrImg docs](../../components/image/#error-event-handler) for more details and examples.

### CdrModal Fullscreen

CdrModal now shifts to a fullscreen view at the `xs` breakpoint, and will otherwise render at `640px` wide. Note that the `size` property  [has been removed from CdrModal](#cdrmodal-size-prop-removed) in order to accomodate this update.

### CdrTabs active-tab Property

CdrTabs now accepts a property named `active-tab` which allows for changing which tab content is "active" on the initial page load. See the [CdrTabs docs](../../components/tabs/#active-tab) for more information.

## Bug Fixes

### CdrRating Medium Size

Added missing medium responsive size modifier. Now all options can be used at all breakpoints for responsive sizing. The default size is still medium.

### CdrAccordion Content Reflow

CdrAccordion has been updated to better handle content reflows which may occur when a browser window is resized or when content is added or removed to an opened accordion.

### CdrTabs Mobile Underline

CdrTabs has been updated so that the active tab underline no longer causes window size issues on mobile when it is scrolled offscreen.

### Accessibility Enhancements

#### CdrAccordion

- Documentation updated with usage requirements.
- The button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.
- Each accordion header button is wrapped in an element with role heading that has a value set for aria-level that is appropriate for the information architecture of the page.

#### CdrLink

- Documentation updated with usage requirements.
- Color meets 4.5:1 contrast with background.
- Color meets 3:1 contrast with surrounding text.
- Hover and focus colors meet 3:1 contrast with surrounding text.

#### CdrBreadcrumb

- A nav element labeled Breadcrumb identifies the structure as a breadcrumb trail and makes it a navigation landmark so that it is easy to locate.
- The ellipsis button has added `aria-expanded="false"` and updated screen reader text ensuring the users understand the number of items hidden in this control.

#### CdrButton

- Documentation updated with usage requirements.
- Variants: color meets 3:1 contrast to background.
- Variants: Hover and focus states meet 3:1 contrast to background and surrounding actionable elements.
- Uses an ordered list structure.

#### CdrCheckbox

- Documentation updated with usage requirements.
- Active, hover, and focus have increased border width to ensure contrast meets 3:1 with background and default actionable elements.

#### CdrModal

- Focus on button click moves to modal panel.

#### CdrPagination

- Pagination component is wrapped with `<nav>` element.
- Changed `aria-label` to `pagination` rather than `pagination navigation` as navigation would be read out twice.
- Uses an ordered list structure.

#### CdrRadio

- Documentation updated with usage requirements.
- Active, hover, and focus have increased border width to ensure contrast meets 3:1 with background and default actionable elements.

#### CdrRating

- Documentation updated with usage requirements.
- Star icon visual boundaries provide a minimum of 3:1 to the background.
- Star icon visual boundaries provide a minimum of 3:1 fill to non-fill.
- When images are disabled, star icons are replaced with Unicode characters .
- Star icon is visible in high contrast mode.
- Screen reader text has been updated for each variant possible:

| Use Case | Screen Reader Text |
|------------------|------------------|
|linked rating stars with average and count: has reviews | View the (x) reviews with an average rating of #.## out of 5 stars|
|linked rating stars with count: has reviews | "View the (x) reviews with an average rating of #.## out of 5 stars"|
|linked rating stars with count: no reviews | "No reviews yet; be the first!"|
|rating stars with average and count: has reviews|"(x) reviews with an average rating of #.## out of 5 stars"|
|rating stars with average and count: no reviews|"0 reviews"|
|rating stars with count: has reviews|"(x) reviews with an average rating of #.## out of 5 stars"|
|rating stars with count: no reviews|"0 reviews"|

#### CdrTab

- Only the active tab is in the tab order. The user reaches the tabbed panel component by pressing the tab key until the active tab title receives focus.
- Clicking on the tab title activates the tab and sets focus to the tab title.
- Tab navigation will move from tab item to the associated panel.
- The currently selected tab list item has the state aria-selected="true".
- Uses an unordered list structure.


## Breaking Changes

### IE11 Support Dropped

Internet Explorer 11 has been removed from the REI browser support matrix. Cedar has been updated to no longer include IE11 related polyfills.

### Unitless JS Tokens For Spacing and Breakpoints

The space (`cdr-space-...`) and breakpoint (`cdr-breakpoint-...`) tokens in the JS distributions of @rei/cdr-tokens have been made "unitless". Those tokens previously had to be manipulated in order to use them effectively in JavaScript, for example by doing: `CdrSpaceOneX.split('px')[0]`.

### Component Variables Now Export Mixins Only

We have updated our [component variables](https://github.com/rei/rei-cedar-component-variables/) package to export only the mixins for component styles and have excluded the individual variables used within those mixins. Component variables are intended for applying the Cedar component CSS styles in projects which cannot use the Vue components directly, which is satisfied by exporting the mixins. Because the individual styles applied by a mixin might change from release to release it was very difficult to manage and document updates to the individual variables in a way that allowed consumers to stay up to date with Cedar. If you were using individual variables from the component variables package, we recommend you either switch to using the full mixin, replace that variable with the appropriate [Cedar token](../../tokens/all-tokens/) if one exists, or simply hardcoding the value.

### CdrAccordionGroup Wrapper

CdrAccordion components must now be wrapped inside an instance of CdrAccordionGroup to ensure that accordions meet accessibility requirements. See the [CdrAccordion docs](../../components/accordion/) for more details and examples.

### CdrAccordion Level Prop

CdrAccordion has a new required prop: `level`. This prop is required in order to meet WCAG accessibility standards and should be set to the appropriate heading level for the context of your page. See the [CdrAccordion docs](../../components/accordion/) for more details and examples.

### CdrLink Theming Removed

CdrLink previously supported theming by setting an `on-dark` or `on-light` CSS class on a container element. Due to the new color scale this feature was not possible to support in a consistent way and has been removed.

### CdrButton OnDark Removed

CdrButton previously accepted a prop named `on-dark` which could be used in conjunction with the `icon-only` prop to render a button with a background. This was intended to be used on dark backgrounds to make the icon button more visible and accessible. Due to the new color scale this feature was not possible to continue supporting as is, and has been replaced with a new [with-background](#cdrbutton-icon-only-variant) property.

### CdrModal Size Prop Removed

In order to support the CdrModal fullscreen functionality, we have removed its `size` prop. CdrModal will now always display at `640px` wide except when viewed in `xs` screen sizes.

### CdrTabPanel Accessibility Requirements

In order to make the CdrTabs component meet accessibility requirements, you must now explicitly set both an `id` and `aria-labelledby` property on CdrTabPanel elements. These properties must be unique identifiers, but other than that their content is arbitrary, for example: `<cdr-tab-panel id="foo-tab-panel" aria-labelledby="foo-tab" name="foo">`. This allows us to wire up `aria-` tags to correctly link the content of each tab to the header element that activates it.  See the [CdrTabs docs](../../components/tabs/#props) for more information and examples of usage.

## Deprecations

### CdrDataTable

The CdrDataTable component has been deprecated in favor of the new CdrTable component. CdrDataTable is a complex component which was difficult for developers to customize or enhance, whereas the new CdrTable component is a simple wrapper which applies styling to native HTML `<table>` markup. The existing CdrDataTable component has been ported to the FEDCOMP repository and is now available in the REI private NPM registry as [@rei/data-table](https://git.rei.com/projects/FEDCOMP/repos/data-table/browse). Note that `@rei/data-table` replaces the `modifier` property with individual `compact` and `borderless` boolean properties. Consumers of CdrDataTable should either replace their usage of that component with CdrTable, or install and use `@rei/data-table` instead.

### Color Token Updates

Legacy darkmode token variants have been deprecated. To update pages currently using darkmode tokens, consult your designer for a recommendation.  

Note that Cedar design tokens should always be applied semantically, when re-mapping tokens take care to ensure that the token name matches it's purpose i.e, don't use a `border-input` token for anything besides the border of an input element.

| Deprecated Token | Equivalent Token |
|------------------|------------------|
| cdr-color-text-primary-lightmode | cdr-color-text-primary |
| cdr-color-text-primary-darkmode | n/a |
| cdr-color-text-secondary-lightmode | cdr-color-text-secondary |
| cdr-color-text-secondary-darkmode | n/a |
| cdr-color-text-disabled-lightmode | cdr-color-text-disabled |
| cdr-color-text-disabled-darkmode | n/a |
| cdr-color-text-link-lightmode | cdr-color-text-link-rest |
| cdr-color-text-link-darkmode | n/a |
| cdr-color-text-error-lightmode | cdr-color-text-error |
| cdr-color-text-error-darkmode | n/a |
| cdr-color-text-form-label-lightmode | 	cdr-color-text-input-label |
| cdr-color-text-form-label-darkmode | n/a |
| cdr-color-text-form-placeholder-lightmode | cdr-color-text-input-placeholder |
| cdr-color-text-form-placeholder-darkmode | n/a |
| cdr-color-text-form-disabled-lightmode | cdr-color-text-input-disabled |
| cdr-color-text-form-disabled-darkmode | n/a |
| cdr-color-icon-primary-lightmode | cdr-color-icon-default |
| cdr-color-icon-primary-darkmode | n/a |
| cdr-color-icon-emphasis-lightmode | cdr-color-icon-emphasis |
| cdr-color-icon-emphasis-darkmode | n/a |
| cdr-color-background-dark | n/a |
| cdr-color-background-darker | n/a |
| cdr-color-background-light | cdr-color-background-primary |
| cdr-color-background-lighter | cdr-color-background-primary |
| cdr-color-background-lightest | cdr-color-background-primary |
| cdr-color-background-form-lightmode | cdr-color-background-primary |
| cdr-color-background-form-darkmode | n/a |
| cdr-color-background-form-input-lightmode | cdr-color-background-input-default |
| cdr-color-background-form-input-darkmode | n/a |
| cdr-color-border-primary-lightmode | cdr-color-border-primary |
| cdr-color-border-primary-darkmode | n/a |
| cdr-color-border-secondary-lightmode | cdr-color-border-secondary |
| cdr-color-border-secondary-darkmode | n/a |
| cdr-color-border-disabled-lightmode | cdr-color-border-input-default-disabled |
| cdr-color-border-disabled-darkmode | n/a |
| cdr-color-border-error-lightmode | cdr-color-border-error |
| cdr-color-border-selected-lightmode | cdr-color-border-input-default-selected |

### Color Utility Classes

| Deprecated utility | Equivalent utility |
|--------------------|--------------------|
| cdr-bg--light | cdr-color-background-primary |
| cdr-bg--lighter | cdr-color-background-primary |
| cdr-bg--lightest | cdr-color-background-primary |
| cdr-bg--dark | n/a |
| cdr-bg--darker | n/a |

### Text Tokens
| Deprecated token/mixin | Equivalent token/mixin |
|------------------------|------------------------|
| cdr-text-utility-n00 | cdr-text-utility-sans-n00 |
| cdr-text-utility-strong-n00 | cdr-text-utility-sans-strong-n00 |

### Type Utility classes
| Deprecated class name | Equivalent class name |
|-----------------------|-----------------------|
| cdr-text-utility-n00 | cdr-text--utility-sans-n00 |
| cdr-text-utility-strong-n00 | cdr-text--utility-sans-strong-n00 |


### CdrText Modifiers
| Deprecated class name | Equivalent class name |
|-----------------------|-----------------------|
| utility-n00 | utility-sans-n00 |
| utility-strong-n00 | utility-sans-strong-n00 |


## Removals

In accordance with our deprecation policy, features that were deprecated in the [Fall 2019 release](../fall-2019/#deprecations) have been removed from Cedar.

- The cdr-text modifiers for display, heading-small/medium/large, and subheading, as well as cdr-tokens mixins for `cdr-text-header-n` and `spruce-display` should be updated according to the typography mappings from the [Winter 2020 release](../winter-2020/#updated-deprecation-mappings) rather than the ones in the Fall 2019 release notes.
- Alignment and display utilities should be re-mapped to their new naming structure.

</cdr-doc-table-of-contents-shell>
