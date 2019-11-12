---
{
  "title": "Winter 2019 Release",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "summary": false,
  "breadcrumbs": [
    {
      "text": "4.x.x Release Notes"
    }
  ],
}
---

<cdr-doc-table-of-contents-shell>


## Update Steps

If you are not already on `@rei/cedar` >= 2.x.x, you will first need to [upgrade your project](../summer-2019/)) to the single-package version of Cedar.

### For a Micro-Site

- Update to `@rei/cedar` 4.x.x
- Update to `@rei/febs` >= 6.0.0
### For a Component Package

- Update to `@rei/cedar` 4.x.x

## New Features

## Breaking Changes

### CdrRating Count Bugfix

We have resolved an issue with CdrRating where it treated the `count` property differently depending on whether it was passed as a string or a number. Now CdrRating will show the review text any time it receives a value for `count`, and will not show any review text if it does not receive a value. You should not need to make any changes to your application code to support this change.

### Pagination events and vue-router support

Pagination functionality has been simplified and only emits a single `navigate` event. Responsive navigation behavior for the select no longer has to be manually attached. Vue-router example with router-link via scoped slots has been added. Previous and next links are always present (in a "disabled" state when appropriate). Minor style updates for hover and currently selected page.

## Deprecations

</cdr-doc-table-of-contents-shell>
