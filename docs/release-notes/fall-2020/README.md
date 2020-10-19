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

### CdrTooltip Component

TODO:

### CdrPopover Component

TODO:

## Bug Fixes

## Deprecations

## Breaking Changes

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
