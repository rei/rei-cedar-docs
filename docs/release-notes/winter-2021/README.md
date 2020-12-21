---
{
  "title": "Winter 2021 Release",
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

- Update to the latest version of the Cedar packages:

| package name | version |
|--------------|---------|
| `@rei/cedar` | ^x.x.x |
| `@rei/cdr-tokens` | ^x.x.x |
| `@rei/cdr-component-variables` | ^x.x.x |
| `@rei/cedar-icons` | ^x.x.x |

- If your project depends on any shared component packages (i.e, FEDPACK, FEDCOMP, FEDPAGES), you will want to update those packages to the new version of Cedar before updating your micro-site.

## New Features

## Bug Fixes

## Deprecations

## Breaking Changes

### Removals

In accordance with our deprecation policy, features that were deprecated in the [Summer 2020 release](../summer-2020/#deprecations) have been removed from Cedar.

#### CdrCta Removed
- merged with button. button with tag="a". etc.
- CTA tokens removed, use corresponding button tokens.

#### Space Prop Removed
- can pass as class instead.
- but actually just migrate to cdr-tokens instead.

</cdr-doc-table-of-contents-shell>
