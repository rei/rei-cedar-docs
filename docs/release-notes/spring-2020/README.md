---
{
  "title": "Spring 2020 Release",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "summary": false,
  "breadcrumbs": [
    {
      "text": "5.x.x Release Notes"
    }
  ],
}
---

<cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>


## Update Steps

If you are not already on `@rei/cedar` >= 2.x.x, you will first need to [upgrade your project](../summer-2019/) to the single-package version of Cedar.

### For a Micro-Site

- Update to `@rei/cedar` ^5.0.0
- If your project depends on any shared component packages (i.e, FEDPACK, FEDCOMP, FEDPAGES), you will want to update those packages to the new version of Cedar and febs before updating your micro-site

### For a Component Package

- Update to `@rei/cedar` ^5.0.0
- Ensure your component is using `@rei/febs` ^7.1.0 for it's prod and dev build systems

## New Features

## Bug Fixes

## Breaking Changes

### CdrLink Theming Removed

CdrLink previously supported theming by setting an `on-dark` or `on-light` CSS class on a container element. Due to the new color scale this feature was not possible to support in a consistent way and has been removed.

## Deprecations

### Removals

In accordance with our deprecation policy, features that were deprecated in the [Fall 2019 release](https://rei.github.io/rei-cedar-docs/release-notes/fall-2019/#deprecations) have been removed from Cedar.

- The cdr-text modifiers for display, heading-small/medium/large, and subheading, as well as cdr-tokens mixins for `cdr-text-header-n` and `spruce-display` should be updated according to the typography mappings from the [Winter 2020 release](https://rei.github.io/rei-cedar-docs/release-notes/winter-2020/#updated-deprecation-mappings) rather than the ones in the Fall 2019 release notes.
- Alignment and display utilities should be re-mapped to their new naming structure

</cdr-doc-table-of-contents-shell>
