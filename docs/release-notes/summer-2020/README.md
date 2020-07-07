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

## Deprecations

## Removals

In accordance with our deprecation policy, features that were deprecated in the [Winter 2020 release](../winter-2020/#deprecations) have been removed from Cedar.

TODO: remove these and document what they were

</cdr-doc-table-of-contents-shell>
