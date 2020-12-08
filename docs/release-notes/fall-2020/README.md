---
{
  "title": "Fall 2020 Release",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "summary": false,
  "breadcrumbs": [
    {
      "text": "7.x.x Release Notes"
    }
  ],
}
---

<cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>

## Update Steps

- Update to the latest version of the Cedar packages:

| package name | version |
|--------------|---------|
| `@rei/cedar` | ^7.x.x |
| `@rei/cdr-tokens` | ^7.x.x |
| `@rei/cdr-component-variables` | ^5.x.x |

- If your project depends on any shared component packages (i.e, FEDPACK, FEDCOMP, FEDPAGES), you will want to update those packages to the new version of Cedar before updating your micro-site.

## New Features

### CdrTooltip and CdrPopover Components

CdrTooltip and CdrPopover are both components that accepts a trigger element and content. CdrTooltip renders it's content whenever the trigger element is hovered or focused, and CdrPopover renders it's content whenever it's trigger element is clicked. See the [CdrTooltip page](../../components/tooltip) and  [CdrPopover page](../../components/popover) for more information.

### Form Updates

#### CdrSelect
- New `error` prop and slot added to enable validation.
- New `info-action` slot for rendering an icon outside and to the right of the input.
- Updated `required` state to render as an asterisk `*`.
- New `optional` state added.
- New `background` prop added to adjust input styling depending on the background it is rendered on.

#### CdrInput
- New `error` prop and slot added to enable validation.
- New `info-action` slot for rendering an icon outside and to the right of the input.
- Updated `required` state to render as an asterisk `*`.
- New `optional` state added.
- New `background` prop added to adjust input styling depending on the background it is rendered on.
- New `helper-text-top` slot added to render helper text above the input. We have also renamed the `helper-text` slot to be `helper-text-bottom`.
- New `cdr-input__button` utility class has been added for styling icon buttons that are used inside of the `post-icon` slot.

#### CdrRadio / CdrCheckbox
- Spacing and interaction logic has been updated.

#### CdrFormGroup
- New `error` prop and slot added to enable validation of checkbox and radio groups.
- New `optional` and `required` states added.

### Documentation Updates

- The [component variables page](../../components/component-variables) has been updated to include examples of mixin usage for all supported components.
- Cedar components that support component variables now note that on their pages.
- The github pages doc sites for `@rei/cdr-component-variables` and `@rei/cdr-tokens` have been deleted and now redirect to the equivalent pages on this site.
- A new page tracking [deprecated deatures](../deprecated) has been created to more easily track down breaking updates to Cedar.

## Deprecations

### CdrInput Helper Text Slot

The `helper-text` slot in CdrInput has been deprecated and replaced with an identical `helper-text-bottom` slot. This was done to be consistent with the [new `helper-text-top` slot](#cdrinput-updates).

## Breaking Changes

### Component Variables

- We have created a new [Component Variables examples page](../../components/component-variables) with more information on how to use `@rei/cdr-component-variables`.
- We have added primary and secondary mixins for input, select, radio, and checkbox to control how they render on different background colors.
- We have refactored how the form labels work inside Cedar to reduce duplication. Styles for CdrRadio and CdrCheckbox can now be found in the [CdrLabelWrapper mixins](../../components/component-variables/#CdrLabelWrapper), while styles for CdrInput and CdrSelect can now be found in the [CdrLabelStandalone mixins](../../components/component-variables/#CdrLabelStandalone). The `form-label.vars.scss` file has been removed. See the chart below for information on re-mapping those mixins.

| Old Mixin | New Mixin |
|----|-----|
| cdr-input-base-label-mixin | cdr-label-standalone-label-mixin |
| cdr-input-required-label-mixin | cdr-label-standalone-label-mixin |
| cdr-input-info-container-mixin | cdr-label-standalone-info-mixin |
| cdr-input-helper-text-mixin | cdr-label-standalone-helper-mixin |
| cdr-input-base-label-disabled-mixin | cdr-label-standalone-disabled-mixin |
| cdr-select-base-label-mixin | cdr-label-standalone-label-mixin |
| cdr-select-base-label-disabled-mixin| cdr-label-standalone-disabled-mixin |
| cdr-select-required-label-mixin| cdr-label-standalone-label-mixin |
| cdr-select-info-container-mixin | cdr-label-standalone-info-mixin |
| cdr-select-helper-text-mixin | cdr-label-standalone-helper-mixin |
| cdr-label-base-mixin | cdr-label-wrapper-base-mixin, cdr-label-wrapper-primary-mixin |
| cdr-label-disabled-mixin | cdr-label-wrapper-disabled-mixin|
| cdr-label-small-mixin | cdr-label-wrapper-small-mixin |
| cdr-label-large-mixin | cdr-label-wrapper-large-mixin |

### Removals

In accordance with our deprecation policy, features that were deprecated in the [Spring 2020 release](../spring-2020/#deprecations) or prior have been removed from Cedar.

- Color utility classes (`cdr-bg--`) have been removed. Use the `cdr-color-background-` format instead.
- Generic tokens, mixins, and CdrText modifiers for `cdr-text-utility-n00` have been removed. Use the `cdr-text-utility-sans-n00` format instead.
- Color tokens using `lightmode` or `darkmode` have beeen removed. See the [spring release notes](../spring-2020/#color-token-updates) for more information on updating
- CdrDataTable component has been removed. Use [CdrTable](../../components/table) or [@rei/data-table](https://git.rei.com/projects/FEDCOMP/repos/data-table/browse) instead.
- The `compact` modifier for CdrCheckbox and CdrRadio has been removed. Use `size="small"` instead.
- The `tabChange` event has been removed from CdrTabs. Use `tab-change` instead.
- The `label` prop for CdrAccordion has been removed. Use the `label` slot instead.

</cdr-doc-table-of-contents-shell>
