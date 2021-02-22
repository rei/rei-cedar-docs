---
{
  "title": "Winter 2021 Release",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "summary": false,
  "breadcrumbs": [
    {
      "text": "8.x.x Release Notes"
    }
  ],
}
---

<cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>

## Update Steps

- Update to the latest version of the Cedar packages:

| package name | version |
|--------------|---------|
| `@rei/cedar` | ^8.x.x |
| `@rei/cdr-tokens` | ^8.x.x |
| `@rei/cdr-component-variables` | ^6.x.x |

- If your project depends on any shared component packages (i.e, FEDPACK, FEDCOMP, FEDPAGES), you will want to update those packages to the new version of Cedar before updating your micro-site.

## New Features

### CdrChip Component

We have created a new CdrChip component that can be used to highlight and signal user selection and input in cases where a basic form element or button do not suffice. 

See the [CdrChip docs page](../../components/chips) for more information.

### CdrGrid Component

We have released a new CdrGrid component that is a simple wrapper around [css-grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout). This component is intended to replace the flexbox based CdrRow and CdrCol components. CdrGrid allows for creating the same layouts as CdrRow and CdrCol but with less markup and less CSS assets required, improving performance while also simplifying our code.

See the [CdrGrid docs page](../../components/grid) for more information.

### CdrImg Refactor

We refactored CdrImg to no longer use `background-image` to load images, which allows for any native `<img>` atttribute to be used with CdrImg. This not only makes the CdrImg component more flexible but opens up several opportunities to improve performance for image heavy pages. The `srcset` and `sizes` property can now be used to load optimal images for a users screen size, or `loading="lazy"` can be used to enable lazy loading of images.

We did [remove the responsive ratio and rei-lazy-image-loader](#cdrimg-responsive-ratio-and-lazy-loading) related properties as they are no longer necessary.

### CdrPagination Intra-Page Navigation

CdrPagination was originally designed for page-level navigation where the user navigates to a new URL. This pattern did not support cases where content is paginated inside of a page, for example when browsing through reviews of a product. CdrPagination now supports two additional properties: `linkTag` and `forLabel` which allow for creating a button based navigation that is linked to the content it paginates. See the [CdrPagination docs](../../components/pagination#intra-page-navigation) for more information. For consumers using CdrPagination for page-level navigation there are no changes required.

### CdrAccordion Unwrapped

CdrAccordionGroup now accepts an `unwrap` property which renders the accordion headings and content in a plain "unwrapped" state. This can be used to render content in full at desktop view but display it in a collapsed accordion at mobile view. The `unwrap` property accepts either a boolean which toggles the behavior on and off, or a list of breakpoints `'@xs @sm @md @lg'` which activates it at the given breakpoint(s). See the [CdrAccordion docs](../../components/accordion#unwrapped) for more information.

### Sale Color Update

- We have updated our sale color tokens to align with brand guidelines
- We have created a new $cdr-color-background-sale token. This should be used in conjunction with $cdr-color-text-inverse.

## Bug Fixes

- CdrBreadcrumb truncation logic has been updated to better handle screen readers TODO: verify
- CdrButton has been updated to apply an animation to the fill color on state changes. This matches the animation applied to the text color.
- CdrModal
-- No longer applies a fade-out gradient on overflowing content. Fading out content conflicts with accessibility requirements related to text contrast.
-- Has been updated to improve it's open and close animations. TODO: verify
-- Padding to the right of content has been removed to accommodate more display patterns

## Deprecations

### CdrRow and CdrCol

CdrRow and CdrCol have been deprecated in favor of [CdrGrid](../../components/grid). Teams using CdrRow and CdrCol should use CdrGrid for any new work, and begin incrementally migrating any existing usage.

### CdrText Modifier and Space Utility Classes

In order to align with performance goals, we are working on a long-term deprecation of the CdrText `modifier` property and the `space` utility classes. Both of these features require loading a large CSS asset even if you are only using a handful of the type or space options. Instead, you should begin using the [Cedar Design Tokens](../../tokens/all-tokens/) to apply the same styles using a custom CSS class. Projects that are currently using these features should instead use the design tokens for any new work, and incrementally migrate their existing usage when possible.

Example CdrText modifier update:
```
<cdr-text modifier="body-300">Old</cdr-text>

<cdr-text class="your-custom-type-class">New</cdr-text>
.your-custom-type-class {
  @include cdr-text-body-300;
}
```

Example Space utility update:
```
<div class="cdr-mb-space-one-x">old</div>

<div class="your-custom-space-class">new</div>
.your-custom-space-class {
  margin-bottom: $cdr-space-one-x
}
```

## Breaking Changes

### CdrImg Responsive Ratio and Lazy loading

- The `ratioSm`, `ratioMd`, and `ratioLg` properties have been removed as they were not being used and do not match the responsive property patterns in use in the Cedar components. Please reach out in Slack at #cedar-user-support if you need assistance building images with responsive ratios.
- We have removed the `lazy` and `lazyOpts` properties which were tied to the [rei-lazy-image-loader](https://git.rei.com/projects/FEDPACK/repos/rei-lazy-image-loader/browse) package. Usage of those props should be updated to use `loading="lazy"` and the lazy loader package should be removed from your project. If necessary, the `data-lazy` attributes associated with `rei-lazy-image-loader` can be manually bound to any instance of CdrImg.

### CdrText CSS Asset

The CdrText css asset (`@rei/cedar/dist/style/cdr-text.css`) has been updated to move the CdrText modifier classes into the text utility class (`@rei/cedar/dist/style/text.css`).
- If you are using CdrText in conjunction with type mixins from @rei/cdr-tokens should load the `cdr-text.css` file.
- If you are using CdrText with the `modifier` property will need to load both the `cdr-text.css` and `text.css` files. You should also begin incrementally migrating your codebase to use the @rei/cdr-tokens type mixins instead of the CdrText modifiers

### Removals

In accordance with our deprecation policy, features that were deprecated in the [Summer 2020 release](../summer-2020/#deprecations) have been removed from Cedar.

#### CdrCta Removed

[CdrCta](../summer-2020/#cdrcta-deprecated-and-merged-with-cdrbutton) has been removed from @rei/cedar, @rei/cdr-tokens, and @rei/cdr-component-variables

#### Space Prop Removed

The [space property](../summer-2020/#space-property-deprecated) has been removed from @rei/cedar

</cdr-doc-table-of-contents-shell>
