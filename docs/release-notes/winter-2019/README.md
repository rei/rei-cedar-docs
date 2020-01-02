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

- Update to `@rei/cedar` ^4.0.0
- Update to `@rei/febs` ^6.0.0
- If your project depends on any shared component packages (i.e, FEDPACK, FEDCOMP, FEDPAGES), you will want to update those packages to the new version of Cedar and febs before updating your micro-site.

### For a Component Package

- Update to `@rei/cedar` ^4.0.0
- Update to `@rei/febs` ^6.0.0
- Your package will need to have a build system set up to compile itself, as febs 6.0.0 no longer compiles packages in the `@rei` namespace. See the [@rei/component template](https://github.com/rei/component) for an example build system, as well as [climber-details-page](https://git.rei.com/projects/FEDPAGES/repos/climber-details-page/browse) and [climbers-site](https://git.rei.com/projects/CLIMB/repos/climbers-site/browse/climbers-site) for a full example micro-site integration.

## New Features

### New Typography

TODO: what did we release

### Decomposed CSS Output

Previously Cedar only offered a single `cedar.css` file that included all of the styling for the Cedar reset, components, and utilities. This made it very easy to set up a Cedar project, but meant that CSS assets could not be optimized. We are now exporting a separate CSS file for each element of Cedar.

These CSS files are intended to be compiled by postcss and postcss-import, which will de-dupe any Cedar assets that are required multiple times. If you are using febs^6 then this will already be set up for you. Note that postcss-import should only be run during the final micro-site build, and not as part of any component package build.

### Single Icon Components

As part of the 3.x.x Cedar release we moved the Icon SVG assets into their own repository [@rei/cedar-icons](https://github.com/rei/cedar-icons), and deprecated the CdrIconSprite and inline single icon components in @rei/cedar. This was intended to allow teams to build their own SVG sprites containing only the Icons used in their application. However due to issues with Vue and SVG syntax this approach did not work well for teams that wanted to inline icons in their markup.

To resolve this issue we have chosen to leave the inline single icon components as part of @rei/cedar. These components have been updated to use the same SVG assets exported by [@rei/cedar-icons](https://github.com/rei/cedar-icons).

### Modal Component

The [CdrModal](../../components/modal) component has been released.

### Radio and Checkbox sizes

CdrRadio and CdrCheckbox now have a `size` prop with small, medium (default), and large variants. As part of this feature, the modifier `compact` has been deprecated and will be removed in the future in favor of using the new size prop.

### Tabs Centered Variant

CdrTabs now accepts `centered` as a `modifier` for a center aligned tab header.

## Bug Fixes

### CdrButton

- Icon fill is now updated for interactive and disabled states.

### CdrBreadcrumb

- Applies focus to the first breadcrumb item when a truncated breadcrumb is expanded in order to support A11Y
- Re-evaluates truncation logic when breadcrumb items are updated in order to support asynchronous loading

### CdrDataTable

- Updated styling logic so first row is always dark

### CdrGrid, CdrRow, CdrCol

- CdrRow and CdrCol have been updated so that clicks within the grid margin will no longer be blocked

### CdrInput

- Fixed padding of helper text

### CdrRating

- We have resolved an issue with CdrRating where it treated the `count` property differently depending on whether it was passed as a string or a number. Now CdrRating will show the review text any time it receives a value for `count`, and will not show any review text if it does not receive a value. You should not need to make any changes to your application code to support this change.

### CdrSelect

- Fixed padding of helper text

### Reset

- Removed a section of the Cedar CSS reset that disabled focus styling on elements with a tabindex of `-1`

### CdrTabs

We have resolved several issues involving the behavior of the active tab underline on certain browsers.
CdrTabPanel content will now show a scrollbar on MacOS when that content overflows it's container.
CdrTabs now uses hash links (`href="#hash-link"`) for navigation to improve SEO.  

## Breaking Changes

### Cedar Is Now a Dependency Instead of a PeerDependency

Previously we recommended listing `@rei/cedar` as a `peerDependency` and `devDependency` in the `package.json` of any shared components or pages, and treating it as a `dependency` in micro-sites. This was necessary to ensure that only 1 version of Cedar was loaded on a page at a time so that the single `cedar.css` file would work. Now that we have a decomposed CSS output consumers should [update their Cedar CSS imports accordingly](#decomposed-css-output) and edit their `package.json` file to instead list `@rei/cedar` as a dependency.

### Updating Cedar CSS in a Component

If you are updating a shared component:
- In your main CSS file, use `@import url();` to load the CSS for each Cedar component and utility type being used in this component. See the [Getting Started as a Developer Guide](https://rei.github.io/rei-cedar-docs/getting-started/as-a-developer#Include-Component-and-Utility-CSS) guide for more information on loading Cedar CSS assets.
- You do not need to load the `cdr-fonts` or `reset` files in your component CSS, as those files will already be imported by the micro-site that consumes this package.
- If you run your build and inspect the compiled CSS file, you should see the `@import url();` statements left un-transformed. This will allow any micro-site that consumes this package to de-dupe and compile those assets.
- If your component has a local development environment you will need to update the entry file (usually named `local-development.js`) to import the Cedar reset and your main CSS file instead of importing `cedar.css`.

```
import '@rei/cedar/dist/cdr-fonts.css';
import '@rei/cedar/dist/style/reset.css';
import './dist/index.css';
```

### Updating Cedar CSS in a Micro-Site

If you are updating a micro-site:
- In your main CSS file, instead of importing `cedar.css` you will now import the Cedar reset along with the built CSS for all of your shared packages.
- If you use any other Cedar components or utilities directly in your micro-site you will also need to add imports for those. You should do this even if those assets are already loaded by shared components, as this ensures that the micro-site will still work even if one of those components was replaced in the future.
```
/* import the cedar fonts */
@import url('@rei/cedar/dist/cdr-fonts.css');

/* import the cedar reset */
@import url('@rei/cedar/dist/style/reset.css');

/* import compiled component CSS */
@import url('@rei/your-shared-component-package.css');

/* import any utilities or components used directly in the micro-site */
@import url('@rei/cedar/dist/style/container.css');
@import url('@rei/cedar/dist/style/cdr-text.css');
```
- Note that assets can only be de-duped if they are compiled in the same entry file. If you are currently compiling global assets separately you may want to update your build so that each page in your micro-site has a single JS and CSS entry file.
- If you run your build and inspect the compiled CSS file, you should not see any `@import url();` statements, as those will all have been replaced with the actual contents of those CSS files.

### CSS Asset Shuffle

In order to support the new [decomposed CSS output](#decomposed-css-output) we have re-named some of the existing Cedar CSS assets in order to better identify what they are and how they should be used. If you were importing one of these files into your project you will need to update the path to the new location. Note that the `-compiled` CSS files should generally not be used for public facing production micro-sites, as these files will not be de-duped by postcss-import.

| previous path | new path |
|--------|------|
| `@rei/cedar/dist/cedar.css` | `@rei/cedar/dist/cedar-compiled.css` |
| `@rei/cedar/dist/utilities.css` | `@rei/cedar/dist/utilities-compiled.css` |
| `@rei/cedar/dist/reset.css` | `@rei/cedar/dist/style/reset.css` |

### CdrIconSprite Removed

The CdrIconSprite has been removed from Cedar. We recommend that consumers instead use the [inline Cedar Icon components](), as they are easier to maintain and the performance benefit of using a sprite is usually minimal.

Teams that do want to make use of an icon sprite for performance reasons can use the [Cedar sprite creator](https://rei.github.io/cedar-icons/#/sprite) to generate an optimized sprite and load it in their HTML.

### CdrPagination Events and vue-router Support

CdrPagination functionality has been simplified and only emits a single `navigate` event. Responsive navigation behavior for the select no longer has to be manually attached. Vue-router example with router-link via scoped slots has been added. Previous and next links are always present (in a "disabled" state when appropriate). Minor style updates for hover and currently selected page.

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

In accordance with our deprecation policy, features that were deprecated in the [Summer 2019 release](https://rei.github.io/rei-cedar-docs/release-notes/summer-2019/#revisions-for-spacing-utility-classes) have been removed from Cedar.

- Deprecated spacing utilities (`cdr-stack`, `cdr-inset`, `cdr-inline`) should be replaced with the new [`cdr-space` utilities](https://rei.github.io/rei-cedar-docs/components/utilities/?active-link=spacing). See [Summer 2019 release notes](https://rei.github.io/rei-cedar-docs/release-notes/summer-2019/#revisions-for-spacing-utility-classes) for more info on updating.

</cdr-doc-table-of-contents-shell>
