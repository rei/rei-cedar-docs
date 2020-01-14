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

<cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>


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

### UI Toolkit Update

- Sticker sheets for individual components has been implemented
- Relevant components have been rebuilt using the Smart Layout feature in Sketch
- New type styles


### New Typography

- Graphik has been introduced to replace Roboto
- All components have been revised to include Graphik
- New type tokens have been introduced to support body and utility styles
- For more information, visit the [Text component](../../components/text) page

### Decomposed CSS Output

Previously, Cedar offered a single `cedar.css` file that included all of the styling for the Cedar reset, components, and utilities. This made it very easy to set up a Cedar project, but the CSS assets could not be optimized. Now, there are separate CSS files for each element of Cedar.

These CSS files are intended to be compiled by postcss and postcss-import, which will de-dupe any Cedar assets that are required multiple times. If you are using febs^6 then this will already be set up for you. Note that postcss-import should only be run during the final micro-site build, and not as part of any component package build.

### Single Icon Components

As part of the 3.x.x Cedar release, the Icon SVG assets were moved into their own repository [@rei/cedar-icons](https://github.com/rei/cedar-icons), and deprecated the CdrIconSprite and inline single icon components in @rei/cedar. This was intended to allow teams to build their own SVG sprites containing only the Icons used in their application. However, due to issues with Vue and SVG syntax, this approach did not work well for teams that wanted inline icons in their markup.

To resolve this issue, the inline single icon components were left as is as part of @rei/cedar. These components have been updated to use the same SVG assets exported by [@rei/cedar-icons](https://github.com/rei/cedar-icons).

### Modal Component

- The modal component has been introduced
- Available in two width options: default (600px) and large (800px)
- For more information, visit the [Modal component](../../components/modal) page

### Radio and Checkbox Sizes

CdrRadio and CdrCheckbox now have a `size` prop with small, medium (default), and large variants. As part of this feature, the modifier `compact` has been deprecated and will be removed in the future in favor of using the new size prop.

### Tabs Centered Variant

CdrTabs now accepts `centered` as a `modifier` for a center-aligned tab header.

## Bug Fixes

### CdrButton

- Icon fill is now updated for interactive and disabled states

### CdrBreadcrumb

- Applies focus to the first breadcrumb item when a truncated breadcrumb is expanded in order to support A11Y
- Re-evaluates truncation logic when breadcrumb items are updated in order to support asynchronous loading

### CdrDataTable

- Updated styling logic so that the first row is always dark

### CdrGrid, CdrRow, CdrCol

- CdrRow and CdrCol have been updated so that clicks within the grid margin will no longer be blocked

### CdrInput

- Fixed padding of helper text

### CdrList

- Inline lists now wrap to a new line when appropriate

### CdrRating

- Resolved issue with CdrRating where it treated the `count` property differently depending on whether it was passed as a string or a number. Now CdrRating will show the review text any time it receives a value for `count`, and will not show any review text if it does not receive a value. No need to make any changes to the application code to support this change.

### CdrSelect

- Fixed padding of helper text

### Reset

- Removed a section of the Cedar CSS reset that disabled focus styling on elements with a tabindex of `-1`

### CdrTabs

- Several issues involving the behavior of the active tab underline on certain browsers has been resolved
- CdrTabPanel content will now show a scrollbar on MacOS when that content overflows it's container
- CdrTabs now uses hash links (`href="#hash-link"`) for navigation to improve SEO  

## Breaking Changes

### Cedar Is Now a Dependency Instead of a PeerDependency

Previously we recommended listing `@rei/cedar` as a `peerDependency` and `devDependency` in the `package.json` of any shared components or pages, and treating it as a `dependency` in micro-sites. This was necessary to ensure that only 1 version of Cedar was loaded on a page at a time so that the single `cedar.css` file would work. Now that we have a decomposed CSS output, consumers should [update their Cedar CSS imports accordingly](#decomposed-css-output) and edit their `package.json` file to instead list `@rei/cedar` as a dependency.

### Updating Cedar CSS in a Component

If you are updating a shared component:
- In your main CSS file, use `@import url();` to load the CSS for each Cedar component and utility type being used in this component. See the [Getting Started as a Developer Guide](https://rei.github.io/rei-cedar-docs/getting-started/as-a-developer#Include-Component-and-Utility-CSS) guide for more information on loading Cedar CSS assets
- You do not need to load the `cdr-fonts` or `reset` files in your component CSS, as those files will already be imported by the micro-site that consumes this package
- If you run your build and inspect the compiled CSS file, you should see the `@import url();` statements left un-transformed. This will allow any micro-site that consumes this package to de-dupe and compile those assets
- If your component has a local development environment you will need to update the entry file (usually named `local-development.js`) to import the Cedar reset and your main CSS file instead of importing `cedar.css`

```
import '@rei/cedar/dist/cdr-fonts.css';
import '@rei/cedar/dist/style/reset.css';
import './dist/index.css';
```

### Updating Cedar CSS in a Micro-Site

If you are updating a micro-site:
- In your main CSS file, instead of importing `cedar.css`, you will now import the Cedar reset along with the built CSS for all of your shared packages
- If you use any other Cedar components or utilities directly in your micro-site, you will also need to add imports for those. You should do this even if those assets are already loaded by shared components, as this ensures that the micro-site will still work even if one of those components was replaced in the future
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
- Note that assets can only be de-duped if they are compiled in the same entry file. If you are currently compiling global assets separately, you may want to update your build so that each page in your micro-site has a single JS and CSS entry file
- If you run your build and inspect the compiled CSS file, you should not see any `@import url();` statements, as those will all have been replaced with the actual contents of those CSS files

### CSS Asset Shuffle

In order to support the new [decomposed CSS output](#decomposed-css-output), we have re-named some of the existing Cedar CSS assets in order to better identify what they are and how they should be used. If you are importing one of these files into your project, you will need to update the path to the new location. Note that the `-compiled` CSS files should generally not be used for public-facing production micro-sites, as these files will not be de-duped by postcss-import.

| Previous path | New path |
|--------|------|
| `@rei/cedar/dist/cedar.css` | `@rei/cedar/dist/cedar-compiled.css` |
| `@rei/cedar/dist/utilities.css` | `@rei/cedar/dist/utilities-compiled.css` |
| `@rei/cedar/dist/reset.css` | `@rei/cedar/dist/style/reset.css` |

### CdrIconSprite Removed

The CdrIconSprite has been removed from Cedar. We recommend that consumers instead use the [inline Cedar Icon components](), as they are easier to maintain and the performance benefit of using a sprite is usually minimal.

Teams that do want to make use of an icon sprite for performance reasons, can use the [Cedar sprite creator](https://rei.github.io/cedar-icons/#/sprite) to generate an optimized sprite and load it in their HTML.

### CdrPagination Events and Vue-router Support

CdrPagination functionality has been simplified and only emits a single `navigate` event. Responsive navigation behavior for Select no longer has to be manually attached. Vue-router example with router-link using scoped slots has been added. Previous and next links are always present (in a "disabled" state when appropriate). Minor style updates for hover and currently selected page.

API for scoped slots now uses an `attrs` object for easier binding.

### Typography

The root class `cdr-text` now has all attributes mapped to `inherit`. This change was necessary and
allows for descendant selectors to inherit the font settings of the parent.

You will now need to pass the cdr-text component the modifier you would like to use.
- For paragraphs, use `body-300`
- For generic text, use `utility-300`

Previously `cdr-text` defaulted to the paragraph styles.
`cdr-container` and `cdr-container-fluid` will still provide the root font definition.
Note that this has been altered from the paragraph style to the `cdr-text--utility-300`.


## Deprecations

### Type Token Mixins
#### Redwood Display  
| Deprecated mixin name | Equivalent mixin name |
|-----------------------|-----------------------|
| redwood-display-70    | cdr-text-utility-700  |
| redwood-display-60    | cdr-text-utility-600  |
| redwood-display-50    | cdr-text-utility-500  |
| redwood-display-40    | cdr-text-utility-400  |
| redwood-display-30    | cdr-text-utility-300  |
| redwood-display-20    | cdr-text-utility-200  |
| redwood-display-10    | cdr-text-utility-100  |

#### Redwood Body  
| Deprecated mixin name | Equivalent mixin name |
|-----------------------|-----------------------|
| redwood-body-40       | cdr-text-body-500     |
| redwood-body-30       | cdr-text-body-400     |
| redwood-body-20       | cdr-text-body-300     |
| redwood-body-10       | cdr-text-body-300     |

#### Maple  
| Deprecated mixin name | Equivalent mixin name |
|-----------------------|-----------------------|
| maple-utility-70      | cdr-text-utility-700  |
| maple-utility-60      | cdr-text-utility-600  |
| maple-utility-50      | cdr-text-utility-500  |
| maple-utility-40      | cdr-text-utility-400  |
| maple-utility-30      | cdr-text-utility-300  |
| maple-utility-20      | cdr-text-utility-200  |
| maple-utility-10      | cdr-text-utility-100  |

#### Spruce
| Deprecated mixin name  | Equivalent mixin name     |
|--------------------|-----------------------|
| spruce-display-100 | cdr-text-heading-serif-strong-1200 |
| spruce-display-90  | cdr-text-heading-serif-strong-1200 |
| spruce-display-80  | cdr-text-heading-serif-strong-1200 |
| spruce-display-70  | cdr-text-heading-serif-strong-1100 |
| spruce-display-60  | cdr-text-heading-serif-strong-800  |
| spruce-display-50  | cdr-text-heading-serif-strong-700  |
| spruce-display-40  | cdr-text-heading-serif-strong-600  |
| spruce-display-30  | cdr-text-heading-sans-500  |
| spruce-display-20  | cdr-text-heading-sans-400  |
| spruce-display-10  | cdr-text-heading-sans-300  |
| spruce-display-00  | cdr-text-heading-sans-300  |
| spruce-body-30	| cdr-text-body-300 |
| spruce-body-20	| cdr-text-body-300 |

#### Headings
| Deprecated mixin name  | Equivalent mixin name     |
|--------------------|-----------------------|
| cdr-text-heading-300	| cdr-text-heading-sans-300 |
| cdr-text-heading-400	| cdr-text-heading-sans-400 |
| cdr-text-heading-500	| cdr-text-heading-sans-500 |
| cdr-text-heading-600	| cdr-text-heading-serif-600 |
| cdr-text-heading-700	| cdr-text-heading-serif-700 |
| cdr-text-heading-800	| cdr-text-heading-serif-700 |
| cdr-text-subheading-300 | cdr-text-subheading-sans-300 |
| cdr-text-subheading-400 | cdr-text-subheading-sans-400 |
| cdr-text-subheading-500 | cdr-text-subheading-sans-500 |
| cdr-text-subheading-600 | cdr-text-subheading-sans-600 |
| cdr-text-display-600	| cdr-text-heading-serif-strong-600 |
| cdr-text-display-700	| cdr-text-heading-serif-strong-700 |
| cdr-text-display-800	| cdr-text-heading-serif-strong-800 |
| cdr-text-display-900	| cdr-text-heading-serif-strong-900 |
| cdr-text-display-1000 | cdr-text-heading-serif-strong-1000 |
| cdr-text-display-1100 | cdr-text-heading-serif-strong-1100 |
| cdr-text-display-1200 | cdr-text-heading-serif-strong-1200 |

### CdrText Heading Modifiers
| Deprecated modifier name | Equivalent modifier name |
|--------------------------|--------------------------|
| heading-300	             | heading-sans-300        |
| heading-400	             | heading-sans-400        |
| heading-500	             | heading-sans-500        |
| heading-600	             | heading-serif-600       |
| heading-700	             | heading-serif-700       |
| heading-800	             | heading-serif-700       |
| subheading-300           | subheading-sans-300     |
| subheading-400           | subheading-sans-400     |
| subheading-500           | subheading-sans-500     |
| subheading-600           | subheading-sans-600     |
| display-600	             | heading-serif-strong-600       |
| display-700	             | heading-serif-strong-700       |
| display-800	             | heading-serif-strong-800       |
| display-900	             | heading-serif-strong-900       |
| display-1000             | heading-serif-strong-1000      |
| display-1100             | heading-serif-strong-1100      |
| display-1200             | heading-serif-strong-1200      |

### Type Utility classes
| Deprecated class name | Equivalent class name |
|-----------------------|-----------------------|
| cdr-text-body         | cdr-text-body-300     |

### Updated Deprecation Mappings

We have updated the recommended mappings for some features that were deprecated in the [Fall 2019 release](https://rei.github.io/rei-cedar-docs/release-notes/fall-2019/#deprecations).

**Text Tokens**
| Deprecated token/mixin  | Equivalent token/mixin |
|-------------------------|-------------------------|
| cdr-text-header-1 | cdr-text-heading-serif-1100 |
| cdr-text-header-2 | cdr-text-heading-serif-900 |
| cdr-text-header-3 | cdr-text-heading-serif-700 |
| cdr-text-header-4 | cdr-text-heading-serif-600 |
| cdr-text-header-5 | cdr-text-heading-sans-500 |
| cdr-text-header-6 | cdr-text-heading-sans-400 |
| cdr-text-header-7 | cdr-text-heading-sans-300 |

**CdrText Modifiers**
| Deprecated modifier name | Equivalent modifier names and breakpoints  |
|--------------------------|--------------------------------------------|
| display                  | heading-serif-strong-700 heading-serif-strong-900@md heading-serif-strong-1100@lg |
| display-static           | heading-serif-strong-900                                |
| heading-large            | heading-serif-600 heading-serif-700@md heading-serif-900@lg  |
| heading-large-static     | heading-serif-700                                |
| heading-medium           | heading-serif-600 heading-serif-700@md heading-serif-700@lg  |
| heading-medium-static    | heading-serif-600                                |
| heading-small            | heading-sans-400 heading-sans-500@md heading-sans-500@lg  |
| heading-small-static     | heading-sans-400                                |
| subheading               | subheading-sans-300                             |

### Removals

In accordance with our deprecation policy, features that were deprecated in the [Summer 2019 release](https://rei.github.io/rei-cedar-docs/release-notes/summer-2019/#revisions-for-spacing-utility-classes) have been removed from Cedar.

- Deprecated spacing utilities (`cdr-stack`, `cdr-inset`, `cdr-inline`) should be replaced with the new [`cdr-space` utilities](https://rei.github.io/rei-cedar-docs/components/utilities#spacing). For more information on updating, see the [Summer 2019 release notes](https://rei.github.io/rei-cedar-docs/release-notes/summer-2019/#revisions-for-spacing-utility-classes).

</cdr-doc-table-of-contents-shell>
