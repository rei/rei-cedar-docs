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
| `@rei/cedar` | ^9.x.x |
| `@rei/cdr-tokens` | ^9.x.x |
| `@rei/cdr-component-variables` | ^x.x.x |
| `@rei/cedar-icons` | ^x.x.x |

- If your project depends on any shared component packages (i.e, FEDPACK, FEDCOMP, FEDPAGES), you will want to update those packages to the new version of Cedar before updating your micro-site.

## New Features

### Numeric CdrInput

CdrInput type="number" updated to restrict to numeric input, launch numeric keyboard

## Bug Fixes

## Deprecations

## Breaking Changes

### CdrModal Aria Describedby

- fixed typo/casing

### CdrInput Autocorrect

- Updated to default autocorrect/autocapitalize/spellcheck off, can be overridden, etc.

### Removals

In accordance with our deprecation policy, features that were deprecated in the [Fall 2020 release](../fall-2020/#deprecations) have been removed from Cedar.

- CdrText modifier and Cedar utilities have been removed. Moved to fedpack. Migrate incrementally to tokens. Perf benefits, code quality, etc..

TODO: link to cdr-legacy-utilities fed package, show how to convert cdrtext modifier to utility class

</cdr-doc-table-of-contents-shell>
