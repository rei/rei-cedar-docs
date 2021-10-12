---
{
  "title": "Summer 2021 Release",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "summary": false,
  "breadcrumbs": [
    {
      "text": "10.0.0 Release Notes"
    }
  ],
}
---

<cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>

## Update Steps

- Update to the latest version of the Cedar packages:

| package name | version |
|--------------|---------|
| `@rei/cedar` | ^10.x.x |
| `@rei/febs` | ^8.x.x |

- Remove `@babel/preset-env` and `@babel/register` if they are included in your project.
- Since you're updating packages, now would be a good time to update some of your other dependencies as well!
- If your project depends on any shared component packages (i.e, FEDPACK, FEDCOMP, FEDPAGES), you will want to update those packages to the new version of Cedar before updating your micro-site.

## New Features

Polyfills for older, unsupported browsers have been removed. This should reduce the bundle sizes and result in better performance.

</cdr-doc-table-of-contents-shell>
