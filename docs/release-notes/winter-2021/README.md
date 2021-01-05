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

### CdrGrid Component

- uses css-grid. replaces flexbox based cdrrow/cdrcol.
- more flexible, lightweight. just sets gutters and (????). TODO: bundle size notees
- use any valid CSS grid syntax.

### CdrImg Refactor

- refactored CdrImg to make use of `object-fit` and `object-position` properties. This allows the use of any native HTML image attribute on any CdrImg element. lazy loading, responsive images, performance (dont load huge image for tiny screen), etc.

## Bug Fixes

## Deprecations

### CdrRow CdrCol
- long term deprecation, incrementally migrate to ____, example of doing that, etc.

### CdrText Modifier
- long term deprecation, incrementally migrate to ____, example of doing that, etc.

### Space utility classes
- long term deprecation, incrementally migrate to ____, example of doing that, etc.

## Breaking Changes

### CdrImg Responsive Ratio and Lazy loading

- Removed responsive ratio props. These used an old syntax that does not match the other cedar components. was not being used.
- Removed "lazy" props. Were hardcoded to match API of REI lazy loader package. Can apply any arbitrary attrs as needed
TODO: show re-map to data-lazy- etc.

### CdrText CSS Asset

- CdrText modifier actually uses `text.css` utility class file.
cdr-text.css has lil default text styling. text.css has every type option at every breakpoint.
- load text.css file, start migrating to using cdr-text mixins instead

### Removals

In accordance with our deprecation policy, features that were deprecated in the [Summer 2020 release](../summer-2020/#deprecations) have been removed from Cedar.

#### CdrCta Removed
- merged with button. button with tag="a". etc.
- CTA tokens removed, use corresponding button tokens.

#### Space Prop Removed
- can pass as class instead.
- but actually just migrate to cdr-tokens instead.

</cdr-doc-table-of-contents-shell>
