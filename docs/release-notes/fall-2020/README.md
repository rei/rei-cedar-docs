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
| `@rei/cdr-tokens` | ^x.x.x |
| `@rei/cdr-component-variables` | ^x.x.x |
| `@rei/cedar-icons` | ^x.x.x |

- If your project depends on any shared component packages (i.e, FEDPACK, FEDCOMP, FEDPAGES), you will want to update those packages to the new version of Cedar before updating your micro-site.

## New Features

### CdrTooltip and CdrPopover Components

CdrTooltip and CdrPopover are both components that accepts a trigger element and content. CdrTooltip renders it's content whenever the trigger element is hovered or focused, and CdrPopover renders it's content whenever it's trigger element is clicked. See the [CdrTooltip page](../../components/tooltip) and  [CdrPopover page](../../components/popover) for more information.

### CdrInput Updates

- New `error` prop and slot added to enable validation.
- Updated `required` state to render as an asterisk `*`.
- New `optional` state added.
- New `background` prop added to adjust input styling depending on the background it is rendered on.
- New `helper-text-top` slot added to render helper text above the input. We have also renamed the `helper-text` slot to be `helper-text-bottom`.
- New `cdr-input__button` utility class has been added for styling icon buttons that are used inside of the `post-icon` slot.

## Bug Fixes

## Deprecations

### CdrInput Helper Text Slot

The `helper-text` slot in CdrInput has been deprecated and replaced with an identical `helper-text-bottom` slot. This was done to be consistent with the [new `helper-text-top` slot](#cdrinput-updates).

## Breaking Changes

### Removals

In accordance with our deprecation policy, features that were deprecated in the [Spring 2020 release](../spring-2020/#deprecations) have been removed from Cedar.

TODO: remove these and document what they were

</cdr-doc-table-of-contents-shell>
