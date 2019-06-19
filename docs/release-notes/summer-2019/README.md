---
{
  "title": "Release History",
  "title_metadata": false,
  "layout": "LayoutArticle",
  "summary": false,
  "breadcrumbs": [
    {
      "text": ""
    }
  ],
}
---

<cdr-doc-table-of-contents-shell>

## Summer 2019 Release

The Cedar vue.js components are moving from a multi-package component architecture to a single-package. This means that `@rei/cdr-assets` as well as all of the existing vue.js component packages under the `@rei/cdr-` namespace will now be distributed as one package named `@rei/cedar`. The `@rei/cdr-tokens` is unaffected by this change. 

The multi-package architecture for the Cedar vue.js components was originally intended to provide more flexibility and modularity to the system, as compared to the opinionated structure of the Cedar 1 patterns library. However, in practice managing versioning across two dozen inter-dependent vue.js component packages was more trouble than it was worth, both for the Cedar team and for teams using Cedar in their projects. Moving to a single-package gives our teams using vue.js a way to simply "install the latest version of Cedar", and allows the Cedar team to spend more time working on the design system and building tools for the co-op and less time managing our architecture.

Additionally, moving from Webpack to Rollup for the Cedar build process gives us the ability to export multiple builds of Cedar. For this release we are exporting a CJS and ESM build of Cedar, as well as `ssr` variations of each build that are optimized for use in server side rendering.

We tried to make it so the only breaking change in this release would be updating dependencies and imports. However, there were some [breaking changes](#breaking-changes) to `@rei/cdr-assets` that had not yet been released officially, mostly involving the CSS reset, tokens, utilities, and the way the Cedar CSS is bundled. Depending on how your app is bundled and which features of Cedar you are using, this may or may not be an issue. 

We acknowledge that dealing with breaking changes in widely-used dependencies like Cedar can be problematic for your team, but we believe that the single-package architecture will allow us to better limit and control these kinds of breaking changes in the future. 

### Update Your NPM Dependencies, CSS imports, and JS Imports

Assuming you are already consuming the multi-package form of the Cedar vue.js components (i.e, `@rei/cdr-assets`, `@rei/cdr-button`, `@rei/cdr-link`, etc.), you will be able to update by changing your dependencies and imports. These steps are also covered in more detail in our [getting started for developers guide](https://rei.github.io/rei-cedar-docs/getting-started/as-a-developer/). 

Note that these steps are slightly different depending on whether you are updating a micro-site/page or just a single component package. The following instructions are examples/suggestions and that things may vary depending on how your front-end codebase is set up or how your build is configured. Please reach out to the Cedar team if you have any questions, concerns, or need assistance.

#### For A Micro-Site/Page

1. install the new Cedar single-package module: `npm install --save @rei/cedar`

2. update the Cedar imports in your JavaScript files:

```
// old JS import example: 
import { CdrButton } from '@rei/cdr-button';
import { CdrLink } from '@rei/cdr-link';

// new JS import style: 

import { CdrButton, CdrLink } from '@rei/cedar';
```

3. update CSS imports:

```
/* old CSS import example: */

@import '@rei/cdr-assets/dist/cdr-fonts.css'; // import cedar fonts
@import '@rei/cdr-assets/dist/cdr-core.css'; // import cedar reset and utility classes

@import '@rei/cdr-COMPONENT_NAME/dist/cdr-COMPONENT_NAME.css'; // import CSS for individual components
@import '@rei/cdr-button/dist/cdr-button.css'; // etc.

/* new CSS import example: */

@import '@rei/cedar/dist/cdr-fonts.css'; // import cedar fonts
@import '@rei/cedar/dist/cedar.css'; // import cedar reset, utility classes, and component CSS
```

4. delete the old `@rei/cdr-` dependencies from your package.json (excluding `cdr-tokens` if you are using that), run npm install, and check to see that your app still builds. 

5. you can always reach out to the Cedar team in the #cedar-user-support slack channel for assistance.


#### For A FED Component 

Generally speaking, you should only install Cedar as a direct dependency once at the top/"page" level of your project, and any component packages that you depend on should install Cedar as a peerDependency/devDependency. This is to ensure that Cedar is only loaded once for your project, and that all of your code is running the same version of Cedar. This seems to be the front-end architecture that most teams at REI are adopting, however your project and needs may differ.

1. install Cedar as a devDependency `npm install --save-dev @rei/cedar`, and add that entry to peerDependencies in your package.json. this tells NPM that any project that loads this component will also need to load a compatible verison of cedar
2. update JS imports following the [same process as for a micro-site/page](#for-a-micro-site-page)
3. if you were loading the cedar component CSS as part of your component's prod build, you should remove that import and instead let the consuming application load the Cedar CSS. If your component has a local dev server, you will need to update it's CSS imports following the [same process as for a micro-site/page](#for-a-micro-site-page) as though it were a micro-site.
4. delete old Cedar dependencies following the [same process as for a micro-site/page](#for-a-micro-site-page)
5. release a new major version of this component.

TODO: do this to a couple fed components and link to the PRs 
TODO: add one of those fed components to climbers site if not already

### Breaking Changes

#### Dependencies That Use Cedar Components Will Need To Be Updated 

If your project is using the new single-package version of Cedar but is also depending on FED components that load the old multi-package versions, you will end up loading those Cedar dependencies twice. Before updating your project, you should first verify that any dependencies you have that begin with `@rei/` have already been updated. 

#### Deprecated Cedar Components/Compositions Are No Longer Usable  

One consequence of the multi-package architecture is that deprecating packages was difficult. Unless we released a new major version of every one of our components, there would be nothing to stop someone from continuing to use a deprecated component. 

For example there used to be a packaged called `cdr-a` which was re-named to be `cdr-link` and some of it's functionality was moved into `cdr-button`. Previously you could still use `cdr-a` alongside any of the other Cedar components, but with the move to the single package architecture that will no longer be possible.

We also had some "compositions" like `cdr-media-object` and `cdr-activity-card` which are no longer a part of the design system. Cedar is intended to only implement the core UI elements that are widely used across REI digital properties, and these compositions proved to be too complex for us to implement in a generic way. We believe these compositions make more sense as FED components, and [activity-card](https://git.rei.com/projects/FEC/repos/activity-card/browse) has already been forked in this fashion. 

- If you are depending on a component like `cdr-a` which was re-named or refactored, you should update your code to use the new component. 
- If you are depending on a component that is no longer in Cedar like `cdr-media-object`, you should talk to the Cedar team for help creating a FED component fork of that component

#### Tokens Are No Longer Packaged In Cedar 

Back in April we released v1.0.0 of the Cedar design tokens: https://github.com/rei/rei-cedar-tokens At the same time, we deprecated the old tokens that were distributed via `cdr-assets`. 

- If your project is still importing tokens from `cdr-assets` (i.e, `@import '~@rei/cdr-assets/dist/cdr-tokens.scss';`) you will need to migrate to the `@rei/cdr-tokens` package. 
- You can find the [migration notes on confluence](https://confluence.rei.com/display/TP/v1+Token+Migration) and can read more about why we made this change [on our doc site](https://rei.github.io/rei-cedar-docs/foundation/tokens/)

#### Cedar Core CSS and Component CSS Is Now In One File

In the past Cedar distributed a core CSS file, a fonts file, a tokens file, and CSS files for each individual component. Cedar now packages the core CSS and component CSS into one file. This makes things much easier for consumers to get started with Cedar, and makes it easier for the Cedar team to ensure that the correct CSS is being loaded. 

This does mean that consuming teams have less options when it comes to bundling the Cedar CSS. In the past, teams could load only the CSS for the components they were using. This often proved difficult as some component styles depend on each other, and it was often unclear whether the responsibility for loading the CSS should happen at the component level or at the page/app level. Moreover, as of this writing the total gzipped size of the `cedar.css` file is 16.397kb, so the ability to "tree-shake" out un-used CSS does not provide nearly the same benefit as doing that for JavaScript. Additionally, as a single file the Cedar CSS could easily be versioned and served via Satchel so that teams can get the benefit of client-side caching across micro-sites. 

Please reach out to the Cedar team if your project requires individual Cedar CSS files so we can work with you on a solution. 

#### New CSS Reset 

The old Cedar CSS reset was heavyweight and opinionated, which made it likely to cause conflicts with other libraries that depend on global CSS. This was a frequent issue for teams that were trying to incrementally migrate from Cedar 1 to Cedar 2.

Our new CSS reset is much more lightweight, and only sets the most critical properties needed for Cedar to work across browsers. Instead, the styling that used to be done in the reset is now done in the Cedar components, so we can be sure those styles do not affect non-Cedar components.

This change to the reset was intended to go out as part of the 1.0.0 release of `cdr-assets`. However, because we switched gears to focus on the single-package architecture we did not get a chance to do that, which means that this is now a breaking change for the single-package release. 

- The change to the reset will likely result in minor UI differences in your app, particularly if your app's CSS was depending on the reset for certain elements to be styled.
- If your app pulls banners/content from the CMS/hippo/etc. you will want to verify that that content is also working as before.
- You can examine the differences between the 2 CSS resets here: https://gist.github.com/cowills/a868cd959f57be1b70a313b57a8dbe2b (0.3.0 is the old reset, 1.0.0 is the new reset)
- You can find what would have been the `@rei/cdr-assets@1.0.0` changelog here: https://github.com/rei/rei-cedar/blob/next/src/cdr-assets/CHANGELOG.md#breaking-changes
- Any issues that might arise due to the CSS reset change will likely have to be addressed on a case by case basis. However you should absolutely not solve the problem by continuing to load the old reset, or manually importing a global style that it was setting. Rather, you should seek to solve this issue with CSS that target specific elements by class.

#### JSDOM must be loaded in your test environment

In order to unit test code that loads Cedar you will need to run JSDOM or an equivalent browser shim in your test environment. If your tests do not compile and return an error such as `document is not defined` then that is indication that JSDOM is not being loaded.

#### New Spacing Utility Classes Are Available, Old Spacing Utility Classes Are Deprecated

The spacing utility classes have been deprecated and re-named to be consistent with our naming structure for tokens. This includes `cdr-stack`, `cdr-inline`, and `cdr-inset`, as well as their modifiers like `cdr-stack--lg` or `cdr-inset--squish`.

- All of the [deprecated classes can be found here](https://github.com/rei/rei-cedar/blob/next/src/css/utility/_legacy.scss), and you can read more about the new utility classes in the [spacing foundation article on our doc site](https://rei.github.io/rei-cedar-docs/foundation/spacing/)
- You can check if your project is affected by searching your codebase for the following CSS classes: `cdr-stack`, `cdr-inset`, and `cdr-inline`. Note which of the utility classes appear. They may show up either in their base form (i.e, `cdr-stack`) or with a size modifier (i.e, `cdr-stack--lg`)
- We've also create a [spacing utility detector script](#spacing-utility-detector) that will highlight any use of the deprecated spacing classes on a page. 
- For each of the deprecated classes that you are using look it up in the [utility class migration map](TODO) to find which of the new classes is equivalent, and execute a find and replace on your codebase to update it. Be careful to re-map the size modifier classes first before mapping the base classes, so that they do not conflict.


#### All Spacing Utility Classes Now Set `!important` 

This change was necessary to support the aforementioned changes to the CSS reset, as utility classes need enough precedence to override the base Cedar styling, while the base Cedar styling needs enough specificity to not target Cedar 1 or non-Cedar elements.

Our utility classes always target a single CSS property, so if they are present on an element they should not be overridden by other styling, so in this change should not affect most teams. However this behavior may be undesirable if you are using utility classes for an initial layout, and then applying custom classes as modifiers on top of that. If that is the case, you will need to update your code to remove that utility class and instead apply that style in another way. All of the [deprecated utility classes and their property/value can be found here](https://github.com/rei/rei-cedar/blob/next/src/css/utility/_legacy.scss).

### Spacing Utility Detector 

To check whether or not any of the deprecated spacing utilities are present on a page, you can open the javascript console in the dev tools of your web browser and copy paste this script into it:

```
var sheet=".cdr-inset { border: 5px dashed pink !important; } .cdr-inset:after { content: '.cdr-inset' }  .cdr-inset--squish { border: 5px dashed pink !important; } .cdr-inset--squish:after { content: '.cdr-inset--squish' }  .cdr-inset--stretch { border: 5px dashed pink !important; } .cdr-inset--stretch:after { content: '.cdr-inset--stretch' }  .cdr-inset--sm { border: 5px dashed pink !important; } .cdr-inset--sm:after { content: '.cdr-inset--sm' }  .cdr-inset--xs { border: 5px dashed pink !important; } .cdr-inset--xs:after { content: '.cdr-inset--xs' }  .cdr-inset--xxs { border: 5px dashed pink !important; } .cdr-inset--xxs:after { content: '.cdr-inset--xxs' }  .cdr-inset--lg { border: 5px dashed pink !important; } .cdr-inset--lg:after { content: '.cdr-inset--lg' }  .cdr-inset--xl { border: 5px dashed pink !important; } .cdr-inset--xl:after { content: '.cdr-inset--xl' }  .cdr-inset--remove-all { border: 5px dashed pink !important; } .cdr-inset--remove-all:after { content: '.cdr-inset--remove-all' }  .cdr-inset--remove-top { border: 5px dashed pink !important; } .cdr-inset--remove-top:after { content: '.cdr-inset--remove-top' }  .cdr-inset--remove-right { border: 5px dashed pink !important; } .cdr-inset--remove-right:after { content: '.cdr-inset--remove-right' }  .cdr-inset--remove-bottom { border: 5px dashed pink !important; } .cdr-inset--remove-bottom:after { content: '.cdr-inset--remove-bottom' }  .cdr-inset--remove-left { border: 5px dashed pink !important; } .cdr-inset--remove-left:after { content: '.cdr-inset--remove-left' }  .cdr-inline { border: 5px dashed pink !important; } .cdr-inline:after { content: '.cdr-inline' }  .cdr-inline--xxs { border: 5px dashed pink !important; } .cdr-inline--xxs:after { content: '.cdr-inline--xxs' }  .cdr-inline--xs { border: 5px dashed pink !important; } .cdr-inline--xs:after { content: '.cdr-inline--xs' }  .cdr-inline--sm { border: 5px dashed pink !important; } .cdr-inline--sm:after { content: '.cdr-inline--sm' }  .cdr-inline--lg { border: 5px dashed pink !important; } .cdr-inline--lg:after { content: '.cdr-inline--lg' }  .cdr-inline--xl { border: 5px dashed pink !important; } .cdr-inline--xl:after { content: '.cdr-inline--xl' }  .cdr-inline--xxl { border: 5px dashed pink !important; } .cdr-inline--xxl:after { content: '.cdr-inline--xxl' }  .cdr-inline-left { border: 5px dashed pink !important; } .cdr-inline-left:after { content: '.cdr-inline-left' }  .cdr-inline-left--xxs { border: 5px dashed pink !important; } .cdr-inline-left--xxs:after { content: '.cdr-inline-left--xxs' }  .cdr-inline-left--xs { border: 5px dashed pink !important; } .cdr-inline-left--xs:after { content: '.cdr-inline-left--xs' }  .cdr-inline-left--sm { border: 5px dashed pink !important; } .cdr-inline-left--sm:after { content: '.cdr-inline-left--sm' }  .cdr-inline-left--lg { border: 5px dashed pink !important; } .cdr-inline-left--lg:after { content: '.cdr-inline-left--lg' }  .cdr-inline-left--xl { border: 5px dashed pink !important; } .cdr-inline-left--xl:after { content: '.cdr-inline-left--xl' }  .cdr-inline-left--xxl { border: 5px dashed pink !important; } .cdr-inline-left--xxl:after { content: '.cdr-inline-left--xxl' }  .cdr-inline-right { border: 5px dashed pink !important; } .cdr-inline-right:after { content: '.cdr-inline-right' }  .cdr-inline-right--xxs { border: 5px dashed pink !important; } .cdr-inline-right--xxs:after { content: '.cdr-inline-right--xxs' }  .cdr-inline-right--xs { border: 5px dashed pink !important; } .cdr-inline-right--xs:after { content: '.cdr-inline-right--xs' }  .cdr-inline-right--sm { border: 5px dashed pink !important; } .cdr-inline-right--sm:after { content: '.cdr-inline-right--sm' }  .cdr-inline-right--lg { border: 5px dashed pink !important; } .cdr-inline-right--lg:after { content: '.cdr-inline-right--lg' }  .cdr-inline-right--xl { border: 5px dashed pink !important; } .cdr-inline-right--xl:after { content: '.cdr-inline-right--xl' }  .cdr-inline-right--xxl { border: 5px dashed pink !important; } .cdr-inline-right--xxl:after { content: '.cdr-inline-right--xxl' }  .cdr-stack { border: 5px dashed pink !important; } .cdr-stack:after { content: '.cdr-stack' }  .cdr-stack--xxs { border: 5px dashed pink !important; } .cdr-stack--xxs:after { content: '.cdr-stack--xxs' }  .cdr-stack--xs { border: 5px dashed pink !important; } .cdr-stack--xs:after { content: '.cdr-stack--xs' }  .cdr-stack--sm { border: 5px dashed pink !important; } .cdr-stack--sm:after { content: '.cdr-stack--sm' }  .cdr-stack--lg { border: 5px dashed pink !important; } .cdr-stack--lg:after { content: '.cdr-stack--lg' }  .cdr-stack--xl { border: 5px dashed pink !important; } .cdr-stack--xl:after { content: '.cdr-stack--xl' }  .cdr-stack--xxl { border: 5px dashed pink !important; } .cdr-stack--xxl:after { content: '.cdr-stack--xxl' }",
head=document.head,style=document.createElement("style");head.appendChild(style),style.type="text/css",style.appendChild(document.createTextNode(sheet));
```

This will add a dashed pink border to any element that is using one of the deprecated spacing classes, and will also append the class name to the end of that element. Note that you may have classes that are only added in certain states or after user input, so just running this script on page load may not catch every instance of the utility classes 

### Spacing Utility Class Mapping 

Almost all of the deprecated spacing classes have direct equivalents in the new utility classes. The XXL sizes are absent, as that spacing value is no longer present in the design system, as well as the `--remove` classes which set values to 0. If you were depending on one of those classes that has no equivalent we recommend that you either add this styling to an existing class in your app, or create a new class semantically for your project. If you do create a new class, do not use `cdr-` in the namespace.

| deprecated class name | equivalent class name | style       |
|-----------------------|-----------------------|-------------|
| `.cdr-inline--lg` | `.cdr-mr-space-two-x` | `margin-right: 3.2rem !important;` |
| `.cdr-inline--sm` | `.cdr-mr-space-half-x` | `margin-right: .8rem !important;` |
| `.cdr-inline--xl` | `.cdr-mr-space-four-x` | `margin-right: 6.4rem !important;` |
| `.cdr-inline--xs` | `.cdr-mr-space-quarter-x` | `margin-right: .4rem !important;` |
| `.cdr-inline--xxl` | n/a | `margin-right: 12.8rem !important;` |
| `.cdr-inline--xxs` | `.cdr-mr-space-eighth-x` | `margin-right: .2rem !important;` |
| `.cdr-inline-left--lg` | `.cdr-mr-space-two-x` | `margin-right: 3.2rem !important;` |
| `.cdr-inline-left--sm` | `.cdr-mr-space-half-x` | `margin-right: .8rem !important;` |
| `.cdr-inline-left--xl` | `.cdr-mr-space-four-x` | `margin-right: 6.4rem !important;` |
| `.cdr-inline-left--xs` | `.cdr-mr-space-quarter-x` | `margin-right: .4rem !important;` |
| `.cdr-inline-left--xxl` | n/a | `margin-right: 12.8rem !important;` |
| `.cdr-inline-left--xxs` | `.cdr-mr-space-eighth-x` | `margin-right: .2rem !important;` |
| `.cdr-inline-left` | `.cdr-mr-space-one-x` | `margin-right: 1.6rem !important;` |
| `.cdr-inline-right--lg` | `.cdr-ml-space-two-x` | `margin-left: 3.2rem !important;` |
| `.cdr-inline-right--sm` | `.cdr-ml-space-half-x` | `margin-left: .8rem !important;` |
| `.cdr-inline-right--xl` | `.cdr-ml-space-four-x` | `margin-left: 6.4rem !important;` |
| `.cdr-inline-right--xs` | `.cdr-ml-space-quarter-x` | `margin-left: .4rem !important;` |
| `.cdr-inline-right--xxl` | n/a | `margin-left: 12.8rem !important;` |
| `.cdr-inline-right--xxs` | `.cdr-ml-space-eighth-x` | `margin-left: .2rem !important;` |
| `.cdr-inline-right` | `.cdr-ml-space-one-x` | `margin-left: 1.6rem !important;` |
| `.cdr-inline` | `.cdr-mr-space-one-x` | `margin-right: 1.6rem !important;` |
| `.cdr-inset--lg.cdr-inset--squish` | `.cdr-space-inset-four-x-squish` | `padding: 1.6rem 3.2rem !important;` |
| `.cdr-inset--lg.cdr-inset--stretch` | `.cdr-space-inset-two-x-stretch` | `padding: 4.8rem 3.2rem !important;` |
| `.cdr-inset--lg` | `.cdr-space-inset-two-x` | `padding: 3.2rem !important;` |
| `.cdr-inset--remove-all` | n/a | `padding: 0 !important;` |
| `.cdr-inset--remove-bottom` | n/a | `padding-bottom: 0 !important;` |
| `.cdr-inset--remove-left` | n/a | `padding-left: 0 !important;` |
| `.cdr-inset--remove-right` | n/a | `padding-right: 0 !important;` |
| `.cdr-inset--remove-top` | n/a | `padding-top: 0 !important;` |
| `.cdr-inset--sm.cdr-inset--squish` | `.cdr-space-inset-half-x-squish` | `padding: .4rem .8rem !important;` |
| `.cdr-inset--sm.cdr-inset--stretch` | `.cdr-space-inset-half-x-stretch` | `padding: 1.2rem .8rem !important;` |
| `.cdr-inset--sm` | `.cdr-space-inset-half-x` | `padding: .8rem !important;` |
| `.cdr-inset--squish` | `.cdr-space-inset-one-x-squish` | `padding: .8rem 1.6rem !important;` |
| `.cdr-inset--stretch` | `.cdr-space-inset-one-x-stretch` | `padding: 2.4rem 1.6rem !important;` |
| `.cdr-inset--xl.cdr-inset--squish` | `.cdr-space-inset-two-x-squish` | `padding: 3.2rem 6.4rem !important;` |
| `.cdr-inset--xl.cdr-inset--stretch` | `.cdr-space-inset-four-x-stretch` | `padding: 9.6rem 6.4rem !important;` |
| `.cdr-inset--xl` | `.cdr-space-inset-four-x` | `padding: 6.4rem !important;` |
| `.cdr-inset--xs.cdr-inset--squish` | `.cdr-space-inset-quarter-x-squish` | `padding: .2rem .4rem !important;` |
| `.cdr-inset--xs.cdr-inset--stretch` | `.cdr-space-inset-quarter-x-stretch` | `padding: .6rem .4rem !important;` |
| `.cdr-inset--xs` | `.cdr-space-inset-quarter-x` | `padding: .4rem !important;` |
| `.cdr-inset--xxs.cdr-inset--squish` | `.cdr-space-inset-eighth-x-squish` | `padding: .1rem .2rem !important;` |
| `.cdr-inset--xxs.cdr-inset--stretch` | `.cdr-space-inset-eighth-x-stretch` | `padding: .3rem .2rem !important;` |
| `.cdr-inset--xxs` | `.cdr-space-inset-eighth-x` | `padding: .2rem !important;` |
| `.cdr-inset` | `.cdr-space-inset-one-x` | `padding: 1.6rem !important; display: block; |
| `.cdr-stack--lg` | `.cdr-mb-space-two-x` | `margin-bottom: 3.2rem !important;` |
| `.cdr-stack--sm` | `.cdr-mb-space-half-x` | `margin-bottom: .8rem !important;` |
| `.cdr-stack--xl` | `.cdr-mb-space-four-x` | `margin-bottom: 6.4rem !important;` |
| `.cdr-stack--xs` | `.cdr-mb-space-quarter-x` | `margin-bottom: .4rem !important;` |
| `.cdr-stack--xxl` | n/a | `margin-bottom: 12.8rem !important;` |
| `.cdr-stack--xxs` | `.cdr-mb-space-eighth-x` | `margin-bottom: .2rem !important;` |
| `.cdr-stack` | `.cdr-mb-space-one-x` | `margin-bottom: 1.6rem !important;` |

</cdr-doc-table-of-contents-shell>
