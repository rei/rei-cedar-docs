---
{
  "title": "Spring 2022 Release",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "summary": false,
  "breadcrumbs": [
    {
      "text": "12.x.x Release Notes"
    }
  ],
}
---

<cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>

## Update Steps

- Update to the latest version of the Cedar packages:

| package name | version |
|--------------|---------|
| `@rei/cedar` | ^12.x.x |
| `@rei/cdr-tokens` | ^11.x.x |
| `@rei/cdr-component-variables` | ^8.x.x |

- If your project depends on any shared component packages (i.e, FEDPACK, FEDCOMP, FEDPAGES), you will want to update those packages to the new version of Cedar before updating your micro-site.


## New Features

### New X Icons

## Bug Fixes

## Deprecations

### Vue2
In preparation of our Vue3 update the existing vue2 cedar library is now deprecated. As this is a major update that may impact teams differently we will continue our support of these assets for an additional release.
Additionally, we plan to archive the vue2 repository as "REI-Cedar-Vue2" and publish make this available vis NPM.

## Breaking Changes

### Removals

#### CdrBreadcrumb
Scoped Slots have been removed

#### CdrPagination
Scoped Slots have been removed


## Preparing for Vue 3

### Release Candidate plan

### Composition API

### Resources 



</cdr-doc-table-of-contents-shell>
