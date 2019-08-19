---
{
  "title": "Summer 2019 Release",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "summary": false,
  "breadcrumbs": [
    {
      "text": "2.x.x Release Notes"
    }
  ],
}
---

<cdr-doc-table-of-contents-shell>



For our Summer 2019 release, the Cedar Vue components are moving from a multi-package component architecture to a single-package architecture. This means that `@rei/cdr-assets` as well as all of the existing Vue component packages under the `@rei/cdr-` namespace will now be distributed as one package named `@rei/cedar`. The `@rei/cdr-tokens` are unaffected by this change. 

Cedar is also migrating our build process from Webpack to Rollup, which gives us the ability to export multiple builds of the components. For this release, we are exporting a CJS and ESM build of Cedar.

This release also comes with some breaking updates to our assets, such as the Cedar CSS reset, utility classes, and CSS bundling. 

We acknowledge that dealing with [breaking changes](#breaking-changes) in widely-used dependencies like Cedar can be problematic for your team, but we believe that this new architecture will allow us to better limit and control these kinds of breaking changes in the future. 

## Update Your Cedar Dependencies and Imports

Assuming you are already consuming the multi-package form of the Cedar Vue components (i.e, `@rei/cdr-assets`, `@rei/cdr-button`, `@rei/cdr-link`, etc.), you will need to update your Cedar dependencies in your `package.json` file, as well as update any Cedar imports in your code. If you are not yet using the Cedar Vue components, please see our [Getting Started as a Developer Guide](https://rei.github.io/rei-cedar-docs/getting-started/as-a-developer/) for more information.

Note that these steps will differ slightly depending on whether you are updating a micro-site or a component. Please reach out to the Cedar team if you have any questions, concerns, or need assistance with upgrading.

### For a Micro-Site

1. Install the new Cedar single-package module: `npm install --save @rei/cedar`

2. Update the Cedar imports in your JavaScript files:

```
// old JS import example: 
import { CdrButton } from '@rei/cdr-button';
import { CdrLink } from '@rei/cdr-link';

// new JS import style: 

import { CdrButton, CdrLink } from '@rei/cedar';
```

3. Update CSS imports:

```
/* old CSS import example: */

// import Cedar fonts
@import '@rei/cdr-assets/dist/cdr-fonts.css';

// import Cedar reset and utility classes
@import '@rei/cdr-assets/dist/cdr-core.css';

// import CSS for individual components
@import '@rei/cdr-COMPONENT_NAME/dist/cdr-COMPONENT_NAME.css'; 
@import '@rei/cdr-button/dist/cdr-button.css'; // etc.

/* new CSS import example: */

// import Cedar fonts
@import '@rei/cedar/dist/cdr-fonts.css'; 

// import Cedar reset, utility classes, and component CSS
@import '@rei/cedar/dist/cedar.css'; 
```

4. Delete the old `@rei/cdr-` dependencies from your package.json (excluding `cdr-tokens` if you are using that), run npm install, and verify that your app builds correctly

5. You can always reach out to the Cedar team in the #cedar-user-support slack channel for assistance

### For a Component 

Generally speaking, you should only install Cedar as a direct dependency once at the top level of your micro-site. Any component packages that you depend on should install Cedar as a `peerDependency` and `devDependency`. This ensures that Cedar is only loaded once in each micro-site, and that all of your code is running the same version of Cedar. 

1. Install Cedar as a `devDependency` by running: `npm install --save-dev @rei/cedar`
2. After your `package.json` file updates, copy the generated `@rei/cedar` entry into `peerDependencies`
3. Update JS imports following the [same process as for a micro-site](#for-a-micro-site)
4. If you were loading the Cedar component CSS as part of your component's production build, you should remove that import and instead let the consuming application load the Cedar CSS
5. If your component has a local development server, you will need to update it's CSS imports following the [same process as for a micro-site](#for-a-micro-site)
6. Delete old Cedar dependencies following the [same process as for a micro-site](#for-a-micro-site)
7. Release a new major version of this component

## Breaking Changes

### Dependencies That Use Cedar Components Needs to Be Updated 

If your project is using the new single-package version of Cedar but is also depending on FED components that load the old multi-package versions, you will end up loading those Cedar dependencies twice. Before updating your project, you should first verify that any dependencies you have that begin with `@rei/` have already been updated.

### Deprecated Cedar Components/Compositions Are No Longer Usable  

One consequence of the multi-package architecture is that it makes deprecating packages difficult. Unless we release a new major version of every one of our components, there would be nothing to stop someone from continuing to use a deprecated component. 

For example, the Cedar package `cdr-a`, which was re-factored into `cdr-link` and `cdr-button`. Previously you could still use `cdr-a` alongside any of the other Cedar components, but with the move to the single-package architecture that will no longer be possible.

We also had some deprecated compositions like `cdr-media-object` and `cdr-activity-card` which are no longer a part of the design system. We believe these compositions make more sense as FED components, and [activity-card](https://git.rei.com/projects/FEC/repos/activity-card/browse) has already been forked in this fashion. 

- If you are depending on a component like `cdr-a` which was re-named or refactored, you should update your code to use the new component
- If you are depending on a component that is no longer in Cedar like `cdr-media-object`, you should talk to the Cedar team for help creating a FED component fork of that component

### Tokens Are No Longer Packaged in Cedar 

In April 2019, we released v1.0.0 of the [Cedar design tokens](https://github.com/rei/rei-cedar-tokens) and deprecated the old tokens that were distributed using `cdr-assets`. You can read more about why we made this change in our [Tokens foundation article](https://rei.github.io/rei-cedar-docs/foundation/tokens/). 

- If your project is still importing tokens from `cdr-assets` (i.e, `@import '~@rei/cdr-assets/dist/cdr-tokens.scss';`), you will need to migrate to the `@rei/cdr-tokens` package 
- You can also find [migration notes](https://confluence.rei.com/display/TP/v1+Token+Migration) on Confluence

### CSS is Distributed as a Single File

In the past, Cedar distributed a core CSS file, a fonts file, a tokens file, and CSS files for each individual component. Cedar now packages the core CSS and component CSS into one file. This makes things much easier for consumers to get started with Cedar, and makes it easier for the Cedar team to ensure that the correct CSS is being loaded. 

This means that consuming teams have less options when it comes to bundling the Cedar CSS. However, as the total gzipped size of the `cedar.css` file is 16.397kb, this change should have a negligible impact on performance. Additionally, as a single file the Cedar CSS could easily be versioned and served using Satchel, so that teams can get the benefit of the client-side caching across micro-sites. 

### New CSS Reset 

The old Cedar CSS reset was heavyweight and opinionated, which made it likely to cause conflicts with other libraries that depend on global CSS. This was a frequent issue for teams that were trying to incrementally migrate from Cedar 1 to Cedar 2. Our new CSS reset is much more lightweight, and only sets the most critical properties needed for Cedar to work across browsers. 

- This will likely result in minor UI differences in your app, particularly if your app's CSS was depending on the reset for certain elements to be styled
- If your app pulls banners or content from an external source (for example, Hippo), you will need to verify that the content is also working as before
- You can examine the differences between the 2 CSS resets here: https://gist.github.com/cowills/a868cd959f57be1b70a313b57a8dbe2b (0.3.0 is the old reset, 1.0.0 is the new reset)

### JSDOM Must Be Loaded in Your Test Environment

In order to unit test code that loads Cedar, you will need to run JSDOM or an equivalent browser shim in your test environment. A testing error such as `document is not defined` is an indication that JSDOM is not being loaded.

### Revisions for Spacing Utility Classes

The spacing utility classes have been deprecated and re-named to be consistent with our naming structure for tokens. This includes `cdr-stack`, `cdr-inline`, and `cdr-inset`, as well as their modifiers like `cdr-stack--lg`, or `cdr-inset--squish`.

- All of the [deprecated classes can be found here](https://github.com/rei/rei-cedar/blob/45f3242d3e52c26ec48157b7290529dbf951440a/src/css/utility/_legacy.scss), and you can read more about the new utility classes in our [spacing foundation article](https://rei.github.io/rei-cedar-docs/foundation/spacing/)
- You can check if your project is affected by searching your codebase for the following CSS classes: `cdr-stack`, `cdr-inset`, and `cdr-inline`. Note which of the utility classes appear. They may show up either in their base form (i.e, `cdr-stack`), or with a size modifier (i.e, `cdr-stack--lg`)
- We have also create a [spacing utility detector script](#spacing-utility-detector) that will highlight any use of the deprecated spacing classes on a page 
- For each of the deprecated classes that you are using, look it up in the [utility class migration map](#spacing-utility-class-mapping ) to find which of the new classes is equivalent, and execute a find and replace on your codebase to update it 


### All Spacing Utility Classes Now Set to `!important` 

This change was necessary to support the changes to the CSS reset mentioned above. The utility classes need enough precedence to override the base Cedar styling, while the base Cedar styling needs enough specificity to not target Cedar 1 or non-Cedar elements.

Our utility classes always target a single CSS property. That means, if they are present on an element, then they should not be overridden by other styling. However this behavior may be undesirable if you are using utility classes for an initial layout and then applying custom classes as modifiers on top of that. If that is the case, then you will need to update your code to remove that utility class and instead apply that style in another way. All of the [deprecated utility classes and their property or value can be found here](https://github.com/rei/rei-cedar/blob/next/src/css/utility/_legacy.scss).

### Spacing Utility Detector 

To check whether or not any of the deprecated spacing utilities are present on a page, you can open the Javascript Console in the development tools menu of your web browser and copy paste this script into it:

```
var sheet=".cdr-inset { border: 5px dashed pink !important; } .cdr-inset:after { content: '.cdr-inset' }  .cdr-inset--squish { border: 5px dashed pink !important; } .cdr-inset--squish:after { content: '.cdr-inset--squish' }  .cdr-inset--stretch { border: 5px dashed pink !important; } .cdr-inset--stretch:after { content: '.cdr-inset--stretch' }  .cdr-inset--sm { border: 5px dashed pink !important; } .cdr-inset--sm:after { content: '.cdr-inset--sm' }  .cdr-inset--xs { border: 5px dashed pink !important; } .cdr-inset--xs:after { content: '.cdr-inset--xs' }  .cdr-inset--xxs { border: 5px dashed pink !important; } .cdr-inset--xxs:after { content: '.cdr-inset--xxs' }  .cdr-inset--lg { border: 5px dashed pink !important; } .cdr-inset--lg:after { content: '.cdr-inset--lg' }  .cdr-inset--xl { border: 5px dashed pink !important; } .cdr-inset--xl:after { content: '.cdr-inset--xl' }  .cdr-inset--remove-all { border: 5px dashed pink !important; } .cdr-inset--remove-all:after { content: '.cdr-inset--remove-all' }  .cdr-inset--remove-top { border: 5px dashed pink !important; } .cdr-inset--remove-top:after { content: '.cdr-inset--remove-top' }  .cdr-inset--remove-right { border: 5px dashed pink !important; } .cdr-inset--remove-right:after { content: '.cdr-inset--remove-right' }  .cdr-inset--remove-bottom { border: 5px dashed pink !important; } .cdr-inset--remove-bottom:after { content: '.cdr-inset--remove-bottom' }  .cdr-inset--remove-left { border: 5px dashed pink !important; } .cdr-inset--remove-left:after { content: '.cdr-inset--remove-left' }  .cdr-inline { border: 5px dashed pink !important; } .cdr-inline:after { content: '.cdr-inline' }  .cdr-inline--xxs { border: 5px dashed pink !important; } .cdr-inline--xxs:after { content: '.cdr-inline--xxs' }  .cdr-inline--xs { border: 5px dashed pink !important; } .cdr-inline--xs:after { content: '.cdr-inline--xs' }  .cdr-inline--sm { border: 5px dashed pink !important; } .cdr-inline--sm:after { content: '.cdr-inline--sm' }  .cdr-inline--lg { border: 5px dashed pink !important; } .cdr-inline--lg:after { content: '.cdr-inline--lg' }  .cdr-inline--xl { border: 5px dashed pink !important; } .cdr-inline--xl:after { content: '.cdr-inline--xl' }  .cdr-inline--xxl { border: 5px dashed pink !important; } .cdr-inline--xxl:after { content: '.cdr-inline--xxl' }  .cdr-inline-left { border: 5px dashed pink !important; } .cdr-inline-left:after { content: '.cdr-inline-left' }  .cdr-inline-left--xxs { border: 5px dashed pink !important; } .cdr-inline-left--xxs:after { content: '.cdr-inline-left--xxs' }  .cdr-inline-left--xs { border: 5px dashed pink !important; } .cdr-inline-left--xs:after { content: '.cdr-inline-left--xs' }  .cdr-inline-left--sm { border: 5px dashed pink !important; } .cdr-inline-left--sm:after { content: '.cdr-inline-left--sm' }  .cdr-inline-left--lg { border: 5px dashed pink !important; } .cdr-inline-left--lg:after { content: '.cdr-inline-left--lg' }  .cdr-inline-left--xl { border: 5px dashed pink !important; } .cdr-inline-left--xl:after { content: '.cdr-inline-left--xl' }  .cdr-inline-left--xxl { border: 5px dashed pink !important; } .cdr-inline-left--xxl:after { content: '.cdr-inline-left--xxl' }  .cdr-inline-right { border: 5px dashed pink !important; } .cdr-inline-right:after { content: '.cdr-inline-right' }  .cdr-inline-right--xxs { border: 5px dashed pink !important; } .cdr-inline-right--xxs:after { content: '.cdr-inline-right--xxs' }  .cdr-inline-right--xs { border: 5px dashed pink !important; } .cdr-inline-right--xs:after { content: '.cdr-inline-right--xs' }  .cdr-inline-right--sm { border: 5px dashed pink !important; } .cdr-inline-right--sm:after { content: '.cdr-inline-right--sm' }  .cdr-inline-right--lg { border: 5px dashed pink !important; } .cdr-inline-right--lg:after { content: '.cdr-inline-right--lg' }  .cdr-inline-right--xl { border: 5px dashed pink !important; } .cdr-inline-right--xl:after { content: '.cdr-inline-right--xl' }  .cdr-inline-right--xxl { border: 5px dashed pink !important; } .cdr-inline-right--xxl:after { content: '.cdr-inline-right--xxl' }  .cdr-stack { border: 5px dashed pink !important; } .cdr-stack:after { content: '.cdr-stack' }  .cdr-stack--xxs { border: 5px dashed pink !important; } .cdr-stack--xxs:after { content: '.cdr-stack--xxs' }  .cdr-stack--xs { border: 5px dashed pink !important; } .cdr-stack--xs:after { content: '.cdr-stack--xs' }  .cdr-stack--sm { border: 5px dashed pink !important; } .cdr-stack--sm:after { content: '.cdr-stack--sm' }  .cdr-stack--lg { border: 5px dashed pink !important; } .cdr-stack--lg:after { content: '.cdr-stack--lg' }  .cdr-stack--xl { border: 5px dashed pink !important; } .cdr-stack--xl:after { content: '.cdr-stack--xl' }  .cdr-stack--xxl { border: 5px dashed pink !important; } .cdr-stack--xxl:after { content: '.cdr-stack--xxl' }",
head=document.head,style=document.createElement("style");head.appendChild(style),style.type="text/css",style.appendChild(document.createTextNode(sheet));
```

This will add a dashed pink border to any element that is using one of the deprecated spacing classes, and will also append the class name to the end of that element. Note that you may have classes that are only added in certain states or after user input, so just running this script on page load may not catch every instance of the utility classes. 

### Spacing Utility Class Mapping 

Almost all of the deprecated spacing classes have direct equivalents in the new utility classes. The XXL sizes are absent, as that spacing value is no longer present in the design system, as well as the `--remove` classes which set values to 0. If you were depending on one of those classes that has no equivalent, we recommend that you either add this styling to an existing class in your app, or create a new class semantically for your project. If you do create a new class, do not use `cdr-` in the namespace.

| deprecated class name | equivalent class name | style       |
|-----------------------|-----------------------|-------------|
| `cdr-inline--lg` | `cdr-mr-space-two-x` | `margin-right: 3.2rem` |
| `cdr-inline--sm` | `cdr-mr-space-half-x` | `margin-right: .8rem` |
| `cdr-inline--xl` | `cdr-mr-space-four-x` | `margin-right: 6.4rem` |
| `cdr-inline--xs` | `cdr-mr-space-quarter-x` | `margin-right: .4rem` |
| `cdr-inline--xxl` | n/a | `margin-right: 12.8rem` |
| `cdr-inline--xxs` | `cdr-mr-space-eighth-x` | `margin-right: .2rem` |
| `cdr-inline-left--lg` | `cdr-mr-space-two-x` | `margin-right: 3.2rem` |
| `cdr-inline-left--sm` | `cdr-mr-space-half-x` | `margin-right: .8rem` |
| `cdr-inline-left--xl` | `cdr-mr-space-four-x` | `margin-right: 6.4rem` |
| `cdr-inline-left--xs` | `cdr-mr-space-quarter-x` | `margin-right: .4rem` |
| `cdr-inline-left--xxl` | n/a | `margin-right: 12.8rem` |
| `cdr-inline-left--xxs` | `cdr-mr-space-eighth-x` | `margin-right: .2rem` |
| `cdr-inline-left` | `cdr-mr-space-one-x` | `margin-right: 1.6rem` |
| `cdr-inline-right--lg` | `cdr-ml-space-two-x` | `margin-left: 3.2rem` |
| `cdr-inline-right--sm` | `cdr-ml-space-half-x` | `margin-left: .8rem` |
| `cdr-inline-right--xl` | `cdr-ml-space-four-x` | `margin-left: 6.4rem` |
| `cdr-inline-right--xs` | `cdr-ml-space-quarter-x` | `margin-left: .4rem` |
| `cdr-inline-right--xxl` | n/a | `margin-left: 12.8rem` |
| `cdr-inline-right--xxs` | `cdr-ml-space-eighth-x` | `margin-left: .2rem` |
| `cdr-inline-right` | `cdr-ml-space-one-x` | `margin-left: 1.6rem` |
| `cdr-inline` | `cdr-mr-space-one-x` | `margin-right: 1.6rem` |
| `cdr-inset--lg.cdr-inset--squish` | `cdr-space-inset-four-x-squish` | `padding: 1.6rem 3.2rem` |
| `cdr-inset--lg.cdr-inset--stretch` | `cdr-space-inset-two-x-stretch` | `padding: 4.8rem 3.2rem` |
| `cdr-inset--lg` | `cdr-space-inset-two-x` | `padding: 3.2rem` |
| `cdr-inset--remove-all` | n/a | `padding: 0` |
| `cdr-inset--remove-bottom` | n/a | `padding-bottom: 0` |
| `cdr-inset--remove-left` | n/a | `padding-left: 0` |
| `cdr-inset--remove-right` | n/a | `padding-right: 0` |
| `cdr-inset--remove-top` | n/a | `padding-top: 0` |
| `cdr-inset--sm.cdr-inset--squish` | `cdr-space-inset-half-x-squish` | `padding: .4rem .8rem` |
| `cdr-inset--sm.cdr-inset--stretch` | `cdr-space-inset-half-x-stretch` | `padding: 1.2rem .8rem` |
| `cdr-inset--sm` | `cdr-space-inset-half-x` | `padding: .8rem` |
| `cdr-inset--squish` | `cdr-space-inset-one-x-squish` | `padding: .8rem 1.6rem` |
| `cdr-inset--stretch` | `cdr-space-inset-one-x-stretch` | `padding: 2.4rem 1.6rem` |
| `cdr-inset--xl.cdr-inset--squish` | `cdr-space-inset-two-x-squish` | `padding: 3.2rem 6.4rem` |
| `cdr-inset--xl.cdr-inset--stretch` | `cdr-space-inset-four-x-stretch` | `padding: 9.6rem 6.4rem` |
| `cdr-inset--xl` | `cdr-space-inset-four-x` | `padding: 6.4rem` |
| `cdr-inset--xs.cdr-inset--squish` | `cdr-space-inset-quarter-x-squish` | `padding: .2rem .4rem` |
| `cdr-inset--xs.cdr-inset--stretch` | `cdr-space-inset-quarter-x-stretch` | `padding: .6rem .4rem` |
| `cdr-inset--xs` | `cdr-space-inset-quarter-x` | `padding: .4rem` |
| `cdr-inset--xxs.cdr-inset--squish` | `cdr-space-inset-eighth-x-squish` | `padding: .1rem .2rem` |
| `cdr-inset--xxs.cdr-inset--stretch` | `cdr-space-inset-eighth-x-stretch` | `padding: .3rem .2rem` |
| `cdr-inset--xxs` | `cdr-space-inset-eighth-x` | `padding: .2rem` |
| `cdr-inset` | `cdr-space-inset-one-x` | `padding: 1.6rem` |
| `cdr-stack--lg` | `cdr-mb-space-two-x` | `margin-bottom: 3.2rem` |
| `cdr-stack--sm` | `cdr-mb-space-half-x` | `margin-bottom: .8rem` |
| `cdr-stack--xl` | `cdr-mb-space-four-x` | `margin-bottom: 6.4rem` |
| `cdr-stack--xs` | `cdr-mb-space-quarter-x` | `margin-bottom: .4rem` |
| `cdr-stack--xxl` | n/a | `margin-bottom: 12.8rem` |
| `cdr-stack--xxs` | `cdr-mb-space-eighth-x` | `margin-bottom: .2rem` |
| `cdr-stack` | `cdr-mb-space-one-x` | `margin-bottom: 1.6rem` |

</cdr-doc-table-of-contents-shell>
