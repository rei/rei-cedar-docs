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

### CdrChip Component

- new component
- signals and highlights user selection/input
- generic button that can be composed in different ways to create accessible controls
- [docs page](../../components/chip)

### CdrGrid Component

- uses css-grid. replaces flexbox based cdrrow/cdrcol.
- more flexible, lightweight. just sets gutters and (????). TODO: bundle size notees
- use any valid CSS grid syntax.
- [docs page](../../components/grid)

### CdrImg Refactor

- refactored CdrImg to make use of `object-fit` and `object-position` properties. This allows the use of any native HTML image attribute on any CdrImg element. lazy loading, responsive images, performance (dont load huge image for tiny screen), etc.

### CdrPagination Intra-Page Navigation

CdrPagination was originally designed for page-level navigation where the user navigates to a new URL. This pattern did not support cases where content is paginated inside of a page, for example when browsing through reviews of a product. CdrPagination now supports two additional properties: `linkTag` and `forLabel` which allow for creating a button based navigation that is linked to the content it paginates. See the [CdrPagination docs](../../components/pagination#intra-page-navigation) for more information. For consumers using CdrPagination for page-level navigation there are no changes required.

### CdrAccordion Unwrapped

CdrAccordionGroup now accepts an `unwrap` property which renders the accordion headings and content in a plain "unwrapped" state. This can be used to render content in full at desktop view but display it in a collapsed accordion at mobile view. The `unwrap` property accepts either a boolean which toggles the behavior on and off, or a list of breakpoints `'@xs @sm @md @lg'` which activates it at the given breakpoint(s). See the [CdrAccordion docs](../../components/accordion#unwrapped) for more information.

### Sale Color Update

- update sale color tokens.
- new background-sale token. use with color-text-inverse

### A11Y Testing Updates

- wcag 3, etc.

## Bug Fixes

- CdrBreadcrumb truncation logic has been updated to better handle screen readers TODO: verify
- CdrButton has been updated to apply an animation to the fill color on state changes. This matches the animation applied to the text color.
- CdrModal
-- No longer applies a fade-out gradient on overflowing content. Fading out content conflicts with accessibility requirements related to text contrast.
-- Has been updated to improve it's open and close animations. TODO: verify
-- Padding to the right of content has been removed to accommodate more display patterns

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
- `cdr-text` base class now scopeed, will need to update code if you were targetting that class directly.

### Removals

In accordance with our deprecation policy, features that were deprecated in the [Summer 2020 release](../summer-2020/#deprecations) have been removed from Cedar.

#### CdrCta Removed
- merged with button. button with tag="a". etc.
- CTA tokens removed, use corresponding button tokens.

#### Space Prop Removed
- can pass as class instead.
- but actually just migrate to cdr-tokens instead.

</cdr-doc-table-of-contents-shell>
