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

## Deprecations

</cdr-doc-table-of-contents-shell>
