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

### Single Icon Components

As part of the 3.x.x Cedar release we moved the Icon SVG assets into their own repository [@rei/cedar-icons](https://github.com/rei/cedar-icons), and deprecated the CdrIconSprite and inline single icon components in @rei/cedar. This was intended to allow teams to build their own SVG sprites containing only the Icons used in their application. However due to issues with Vue and SVG syntax this approach did not work well for teams that wanted to inline icons in their markup.

To resolve this issue we have chosen to leave the inline single icon components as part of @rei/cedar. These components have been updated to use the same SVG assets exported by [@rei/cedar-icons](https://github.com/rei/cedar-icons)

### Radio and Checkbox sizes

Radio and checkbox now have a `size` prop with small, medium (default), and large variants. As part of this feature, the modifier `compact` has been deprecated and will be removed in the future in favor of using the new size prop.

## Bug Fixes

### CdrBreadcrumb

- Applies focus to the first breadcrumb item when a truncated breadcrumb is expanded in order to support A11Y
- Re-evaluates truncation logic when breadcrumb items are updated in order to support asynchronous loading

### CdrRating

We have resolved an issue with CdrRating where it treated the `count` property differently depending on whether it was passed as a string or a number. Now CdrRating will show the review text any time it receives a value for `count`, and will not show any review text if it does not receive a value. You should not need to make any changes to your application code to support this change.

## Breaking Changes

### CdrIconSprite Removed

The CdrIconSprite has been removed from Cedar. Consumers should instead use the [Cedar sprite creator](https://rei.github.io/cedar-icons/#/sprite) to generate an optimized sprite and load it in their HTML. The [@rei/cedar-icons package](https://github.com/rei/cedar-icons) also exports an `all-icons.svg` file which contains all of the icons and can be loaded for convenience.

### Pagination events and vue-router support

Pagination functionality has been simplified and only emits a single `navigate` event. Responsive navigation behavior for the select no longer has to be manually attached. Vue-router example with router-link via scoped slots has been added. Previous and next links are always present (in a "disabled" state when appropriate). Minor style updates for hover and currently selected page.

API for scoped slots now uses an `attrs` object for easier binding.

## Typography
 
The root class `cdr-text` now has all attributes mapped to `inherit`. This change was necessary and
allows for descendant selectors to inherit the font settings of the parent.

You will now need to pass the cdr-text component the modifier you would like to use.
- `body-300` -- for paragraphs
- `utility-300` -- for generic text

Previously `cdr-text` defaulted to the paragraph styles. 
`cdr-container` and `cdr-container-fluid` will still provide the root font definition.
Note that this has been altered from the paragraph style to the `cdr-text--utility-300`.


## Deprecations

### Type Token mixins
**Redwood Display**  
| deprecated mixin name | equivalent mixin name | 
|-----------------------|-----------------------|
| redwood-display-70    | cdr-text-utility-700  |
| redwood-display-60    | cdr-text-utility-600  |
| redwood-display-50    | cdr-text-utility-500  |
| redwood-display-40    | cdr-text-utility-400  |
| redwood-display-30    | cdr-text-utility-300  |
| redwood-display-20    | cdr-text-utility-200  |
| redwood-display-10    | cdr-text-utility-100  |

**Redwood Body**  
| deprecated mixin name | equivalent mixin name | 
|-----------------------|-----------------------|
| redwood-body-40       | cdr-text-body-500     |
| redwood-body-30       | cdr-text-body-400     |
| redwood-body-20       | cdr-text-body-300     |
| redwood-body-10       |                       |

**Maple**  
| deprecated mixin name | equivalent mixin name | 
|-----------------------|-----------------------|
| maple-utility-70      | cdr-text-utility-700  |
| maple-utility-60      | cdr-text-utility-600  |
| maple-utility-50      | cdr-text-utility-500  |
| maple-utility-40      | cdr-text-utility-400  |
| maple-utility-30      | cdr-text-utility-300  |
| maple-utility-20      | cdr-text-utility-200  |
| maple-utility-10      | cdr-text-utility-100  |

### Type Utility classes
| deprecated class name | equivalent class name | 
|-----------------------|-----------------------|
| cdr-text-body         | cdr-text-body-300     |

## Removals

Please note that Tokens or Mixins deprecated in the Summer 2019 release will no longer be available
nor supported with the winter 2019 release.

</cdr-doc-table-of-contents-shell>
