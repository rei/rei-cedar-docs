<template><cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>
<p>For our Summer 2019 release, the Cedar Vue components are moving from a multi-package component architecture to a single-package architecture. This means that <code>@rei/cdr-assets</code> as well as all of the existing Vue component packages under the <code>@rei/cdr-</code> namespace will now be distributed as one package named <code>@rei/cedar</code>. The <code>@rei/cdr-tokens</code> are unaffected by this change.</p>
<p>Cedar is also migrating our build process from Webpack to Rollup, which gives us the ability to export multiple builds of the components. For this release, we are exporting a CJS and ESM build of Cedar.</p>
<p>This release also comes with some breaking updates to our assets, such as the Cedar CSS reset, utility classes, and CSS bundling.</p>
<p>We acknowledge that dealing with <a href="#breaking-changes">breaking changes</a> in widely-used dependencies like Cedar can be problematic for your team, but we believe that this new architecture will allow us to better limit and control these kinds of breaking changes in the future.</p>
<h2 id="update-your-cedar-dependencies-and-imports" tabindex="-1"><a class="header-anchor" href="#update-your-cedar-dependencies-and-imports">#</a> Update Your Cedar Dependencies and Imports</h2>
<p>Assuming you are already consuming the multi-package form of the Cedar Vue components (i.e, <code>@rei/cdr-assets</code>, <code>@rei/cdr-button</code>, <code>@rei/cdr-link</code>, etc.), you will need to update your Cedar dependencies in your <code>package.json</code> file, as well as update any Cedar imports in your code. If you are not yet using the Cedar Vue components, please see our <a href="https://rei.github.io/rei-cedar-docs/getting-started/as-a-developer/" target="_blank" rel="noopener noreferrer">Getting Started as a Developer Guide<ExternalLinkIcon/></a> for more information.</p>
<p>Note that these steps will differ slightly depending on whether you are updating a micro-site or a component. Please reach out to the Cedar team if you have any questions, concerns, or need assistance with upgrading.</p>
<h3 id="for-a-micro-site" tabindex="-1"><a class="header-anchor" href="#for-a-micro-site">#</a> For a Micro-Site</h3>
<ol>
<li>
<p>Install the new Cedar single-package module: <code>npm install --save @rei/cedar</code></p>
</li>
<li>
<p>Update the Cedar imports in your JavaScript files:</p>
</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>// old JS import example:
import { CdrButton } from '@rei/cdr-button';
import { CdrLink } from '@rei/cdr-link';

// new JS import style:

import { CdrButton, CdrLink } from '@rei/cedar';
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol start="3">
<li>Update CSS imports:</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>/* old CSS import example: */

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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><ol start="4">
<li>
<p>Delete the old <code>@rei/cdr-</code> dependencies from your package.json (excluding <code>cdr-tokens</code> if you are using that), run npm install, and verify that your app builds correctly</p>
</li>
<li>
<p>You can always reach out to the Cedar team in the <a href="https://rei.slack.com/messages/CA58YCGN4" target="_blank" rel="noopener noreferrer">#cedar-user-support<ExternalLinkIcon/></a> slack channel for assistance</p>
</li>
</ol>
<h3 id="for-a-component" tabindex="-1"><a class="header-anchor" href="#for-a-component">#</a> For a Component</h3>
<p>Generally speaking, you should only install Cedar as a direct dependency once at the top level of your micro-site. Any component packages that you depend on should install Cedar as a <code>peerDependency</code> and <code>devDependency</code>. This ensures that Cedar is only loaded once in each micro-site, and that all of your code is running the same version of Cedar.</p>
<ol>
<li>Install Cedar as a <code>devDependency</code> by running: <code>npm install --save-dev @rei/cedar</code></li>
<li>After your <code>package.json</code> file updates, copy the generated <code>@rei/cedar</code> entry into <code>peerDependencies</code></li>
<li>Update JS imports following the <a href="#for-a-micro-site">same process as for a micro-site</a></li>
<li>If you were loading the Cedar component CSS as part of your component's production build, you should remove that import and instead let the consuming application load the Cedar CSS</li>
<li>If your component has a local development server, you will need to update it's CSS imports following the <a href="#for-a-micro-site">same process as for a micro-site</a></li>
<li>Delete old Cedar dependencies following the <a href="#for-a-micro-site">same process as for a micro-site</a></li>
<li>Release a new major version of this component</li>
</ol>
<h2 id="breaking-changes" tabindex="-1"><a class="header-anchor" href="#breaking-changes">#</a> Breaking Changes</h2>
<h3 id="dependencies-that-use-cedar-components-needs-to-be-updated" tabindex="-1"><a class="header-anchor" href="#dependencies-that-use-cedar-components-needs-to-be-updated">#</a> Dependencies That Use Cedar Components Needs to Be Updated</h3>
<p>If your project is using the new single-package version of Cedar but is also depending on FED components that load the old multi-package versions, you will end up loading those Cedar dependencies twice. Before updating your project, you should first verify that any dependencies you have that begin with <code>@rei/</code> have already been updated.</p>
<h3 id="deprecated-cedar-components-compositions-are-no-longer-usable" tabindex="-1"><a class="header-anchor" href="#deprecated-cedar-components-compositions-are-no-longer-usable">#</a> Deprecated Cedar Components/Compositions Are No Longer Usable</h3>
<p>One consequence of the multi-package architecture is that it makes deprecating packages difficult. Unless we release a new major version of every one of our components, there would be nothing to stop someone from continuing to use a deprecated component.</p>
<p>For example, the Cedar package <code>cdr-a</code>, which was re-factored into <code>cdr-link</code> and <code>cdr-button</code>. Previously you could still use <code>cdr-a</code> alongside any of the other Cedar components, but with the move to the single-package architecture that will no longer be possible.</p>
<p>We also had some deprecated compositions like <code>cdr-media-object</code> and <code>cdr-activity-card</code> which are no longer a part of the design system. We believe these compositions make more sense as FED components, and <a href="https://git.rei.com/projects/FEC/repos/activity-card/browse" target="_blank" rel="noopener noreferrer">activity-card<ExternalLinkIcon/></a> has already been forked in this fashion.</p>
<ul>
<li>If you are depending on a component like <code>cdr-a</code> which was re-named or refactored, you should update your code to use the new component</li>
<li>If you are depending on a component that is no longer in Cedar like <code>cdr-media-object</code>, you should talk to the Cedar team for help creating a FED component fork of that component</li>
</ul>
<h3 id="tokens-are-no-longer-packaged-in-cedar" tabindex="-1"><a class="header-anchor" href="#tokens-are-no-longer-packaged-in-cedar">#</a> Tokens Are No Longer Packaged in Cedar</h3>
<p>In April 2019, we released v1.0.0 of the <a href="https://github.com/rei/rei-cedar-tokens" target="_blank" rel="noopener noreferrer">Cedar design tokens<ExternalLinkIcon/></a> and deprecated the old tokens that were distributed using <code>cdr-assets</code>. You can read more about why we made this change in our <a href="https://rei.github.io/rei-cedar-docs/foundation/tokens/" target="_blank" rel="noopener noreferrer">Tokens foundation article<ExternalLinkIcon/></a>.</p>
<ul>
<li>If your project is still importing tokens from <code>cdr-assets</code> (i.e, <code>@import '~@rei/cdr-assets/dist/cdr-tokens.scss';</code>), you will need to migrate to the <code>@rei/cdr-tokens</code> package</li>
<li>You can also find <a href="https://confluence.rei.com/display/TP/v1+Token+Migration" target="_blank" rel="noopener noreferrer">migration notes<ExternalLinkIcon/></a> on Confluence</li>
</ul>
<h3 id="css-is-distributed-as-a-single-file" tabindex="-1"><a class="header-anchor" href="#css-is-distributed-as-a-single-file">#</a> CSS is Distributed as a Single File</h3>
<p>In the past, Cedar distributed a core CSS file, a fonts file, a tokens file, and CSS files for each individual component. Cedar now packages the core CSS and component CSS into one file. This makes things much easier for consumers to get started with Cedar, and makes it easier for the Cedar team to ensure that the correct CSS is being loaded.</p>
<p>This means that consuming teams have less options when it comes to bundling the Cedar CSS. However, as the total gzipped size of the <code>cedar.css</code> file is 16.397kb, this change should have a negligible impact on performance. Additionally, as a single file the Cedar CSS could easily be versioned and served using Satchel, so that teams can get the benefit of the client-side caching across micro-sites.</p>
<h3 id="new-css-reset" tabindex="-1"><a class="header-anchor" href="#new-css-reset">#</a> New CSS Reset</h3>
<p>The old Cedar CSS reset was heavyweight and opinionated, which made it likely to cause conflicts with other libraries that depend on global CSS. This was a frequent issue for teams that were trying to incrementally migrate from Cedar 1 to Cedar 2. Our new CSS reset is much more lightweight, and only sets the most critical properties needed for Cedar to work across browsers.</p>
<ul>
<li>This will likely result in minor UI differences in your app, particularly if your app's CSS was depending on the reset for certain elements to be styled</li>
<li>If your app pulls banners or content from an external source (for example, Hippo), you will need to verify that the content is also working as before</li>
<li>You can examine the differences between the 2 CSS resets here: https://gist.github.com/cowills/a868cd959f57be1b70a313b57a8dbe2b (0.3.0 is the old reset, 1.0.0 is the new reset)</li>
</ul>
<h3 id="jsdom-must-be-loaded-in-your-test-environment" tabindex="-1"><a class="header-anchor" href="#jsdom-must-be-loaded-in-your-test-environment">#</a> JSDOM Must Be Loaded in Your Test Environment</h3>
<p>In order to unit test code that loads Cedar, you will need to run JSDOM or an equivalent browser shim in your test environment. A testing error such as <code>document is not defined</code> is an indication that JSDOM is not being loaded.</p>
<h3 id="revisions-for-spacing-utility-classes" tabindex="-1"><a class="header-anchor" href="#revisions-for-spacing-utility-classes">#</a> Revisions for Spacing Utility Classes</h3>
<p>The spacing utility classes have been deprecated and re-named to be consistent with our naming structure for tokens. This includes <code>cdr-stack</code>, <code>cdr-inline</code>, and <code>cdr-inset</code>, as well as their modifiers like <code>cdr-stack--lg</code>, or <code>cdr-inset--squish</code>.</p>
<ul>
<li>All of the <a href="https://github.com/rei/rei-cedar-vue-2/blob/45f3242d3e52c26ec48157b7290529dbf951440a/src/css/utility/_legacy.scss" target="_blank" rel="noopener noreferrer">deprecated classes can be found here<ExternalLinkIcon/></a>, and you can read more about the new utility classes in our <a href="https://rei.github.io/rei-cedar-docs/foundation/spacing/" target="_blank" rel="noopener noreferrer">spacing foundation article<ExternalLinkIcon/></a></li>
<li>You can check if your project is affected by searching your codebase for the following CSS classes: <code>cdr-stack</code>, <code>cdr-inset</code>, and <code>cdr-inline</code>. Note which of the utility classes appear. They may show up either in their base form (i.e, <code>cdr-stack</code>), or with a size modifier (i.e, <code>cdr-stack--lg</code>)</li>
<li>We have also create a <a href="#spacing-utility-detector">spacing utility detector script</a> that will highlight any use of the deprecated spacing classes on a page</li>
<li>For each of the deprecated classes that you are using, look it up in the <a href="#spacing-utility-class-mapping">utility class migration map</a> to find which of the new classes is equivalent, and execute a find and replace on your codebase to update it</li>
</ul>
<h3 id="all-spacing-utility-classes-now-set-to-important" tabindex="-1"><a class="header-anchor" href="#all-spacing-utility-classes-now-set-to-important">#</a> All Spacing Utility Classes Now Set to <code>!important</code></h3>
<p>This change was necessary to support the changes to the CSS reset mentioned above. The utility classes need enough precedence to override the base Cedar styling, while the base Cedar styling needs enough specificity to not target Cedar 1 or non-Cedar elements.</p>
<p>Our utility classes always target a single CSS property. That means, if they are present on an element, then they should not be overridden by other styling. However this behavior may be undesirable if you are using utility classes for an initial layout and then applying custom classes as modifiers on top of that. If that is the case, then you will need to update your code to remove that utility class and instead apply that style in another way.</p>
<h3 id="spacing-utility-detector" tabindex="-1"><a class="header-anchor" href="#spacing-utility-detector">#</a> Spacing Utility Detector</h3>
<p>To check whether or not any of the deprecated spacing utilities are present on a page, you can open the Javascript Console in the development tools menu of your web browser and copy paste this script into it:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>var sheet=".cdr-inset { border: 5px dashed pink !important; } .cdr-inset:after { content: '.cdr-inset' }  .cdr-inset--squish { border: 5px dashed pink !important; } .cdr-inset--squish:after { content: '.cdr-inset--squish' }  .cdr-inset--stretch { border: 5px dashed pink !important; } .cdr-inset--stretch:after { content: '.cdr-inset--stretch' }  .cdr-inset--sm { border: 5px dashed pink !important; } .cdr-inset--sm:after { content: '.cdr-inset--sm' }  .cdr-inset--xs { border: 5px dashed pink !important; } .cdr-inset--xs:after { content: '.cdr-inset--xs' }  .cdr-inset--xxs { border: 5px dashed pink !important; } .cdr-inset--xxs:after { content: '.cdr-inset--xxs' }  .cdr-inset--lg { border: 5px dashed pink !important; } .cdr-inset--lg:after { content: '.cdr-inset--lg' }  .cdr-inset--xl { border: 5px dashed pink !important; } .cdr-inset--xl:after { content: '.cdr-inset--xl' }  .cdr-inset--remove-all { border: 5px dashed pink !important; } .cdr-inset--remove-all:after { content: '.cdr-inset--remove-all' }  .cdr-inset--remove-top { border: 5px dashed pink !important; } .cdr-inset--remove-top:after { content: '.cdr-inset--remove-top' }  .cdr-inset--remove-right { border: 5px dashed pink !important; } .cdr-inset--remove-right:after { content: '.cdr-inset--remove-right' }  .cdr-inset--remove-bottom { border: 5px dashed pink !important; } .cdr-inset--remove-bottom:after { content: '.cdr-inset--remove-bottom' }  .cdr-inset--remove-left { border: 5px dashed pink !important; } .cdr-inset--remove-left:after { content: '.cdr-inset--remove-left' }  .cdr-inline { border: 5px dashed pink !important; } .cdr-inline:after { content: '.cdr-inline' }  .cdr-inline--xxs { border: 5px dashed pink !important; } .cdr-inline--xxs:after { content: '.cdr-inline--xxs' }  .cdr-inline--xs { border: 5px dashed pink !important; } .cdr-inline--xs:after { content: '.cdr-inline--xs' }  .cdr-inline--sm { border: 5px dashed pink !important; } .cdr-inline--sm:after { content: '.cdr-inline--sm' }  .cdr-inline--lg { border: 5px dashed pink !important; } .cdr-inline--lg:after { content: '.cdr-inline--lg' }  .cdr-inline--xl { border: 5px dashed pink !important; } .cdr-inline--xl:after { content: '.cdr-inline--xl' }  .cdr-inline--xxl { border: 5px dashed pink !important; } .cdr-inline--xxl:after { content: '.cdr-inline--xxl' }  .cdr-inline-left { border: 5px dashed pink !important; } .cdr-inline-left:after { content: '.cdr-inline-left' }  .cdr-inline-left--xxs { border: 5px dashed pink !important; } .cdr-inline-left--xxs:after { content: '.cdr-inline-left--xxs' }  .cdr-inline-left--xs { border: 5px dashed pink !important; } .cdr-inline-left--xs:after { content: '.cdr-inline-left--xs' }  .cdr-inline-left--sm { border: 5px dashed pink !important; } .cdr-inline-left--sm:after { content: '.cdr-inline-left--sm' }  .cdr-inline-left--lg { border: 5px dashed pink !important; } .cdr-inline-left--lg:after { content: '.cdr-inline-left--lg' }  .cdr-inline-left--xl { border: 5px dashed pink !important; } .cdr-inline-left--xl:after { content: '.cdr-inline-left--xl' }  .cdr-inline-left--xxl { border: 5px dashed pink !important; } .cdr-inline-left--xxl:after { content: '.cdr-inline-left--xxl' }  .cdr-inline-right { border: 5px dashed pink !important; } .cdr-inline-right:after { content: '.cdr-inline-right' }  .cdr-inline-right--xxs { border: 5px dashed pink !important; } .cdr-inline-right--xxs:after { content: '.cdr-inline-right--xxs' }  .cdr-inline-right--xs { border: 5px dashed pink !important; } .cdr-inline-right--xs:after { content: '.cdr-inline-right--xs' }  .cdr-inline-right--sm { border: 5px dashed pink !important; } .cdr-inline-right--sm:after { content: '.cdr-inline-right--sm' }  .cdr-inline-right--lg { border: 5px dashed pink !important; } .cdr-inline-right--lg:after { content: '.cdr-inline-right--lg' }  .cdr-inline-right--xl { border: 5px dashed pink !important; } .cdr-inline-right--xl:after { content: '.cdr-inline-right--xl' }  .cdr-inline-right--xxl { border: 5px dashed pink !important; } .cdr-inline-right--xxl:after { content: '.cdr-inline-right--xxl' }  .cdr-stack { border: 5px dashed pink !important; } .cdr-stack:after { content: '.cdr-stack' }  .cdr-stack--xxs { border: 5px dashed pink !important; } .cdr-stack--xxs:after { content: '.cdr-stack--xxs' }  .cdr-stack--xs { border: 5px dashed pink !important; } .cdr-stack--xs:after { content: '.cdr-stack--xs' }  .cdr-stack--sm { border: 5px dashed pink !important; } .cdr-stack--sm:after { content: '.cdr-stack--sm' }  .cdr-stack--lg { border: 5px dashed pink !important; } .cdr-stack--lg:after { content: '.cdr-stack--lg' }  .cdr-stack--xl { border: 5px dashed pink !important; } .cdr-stack--xl:after { content: '.cdr-stack--xl' }  .cdr-stack--xxl { border: 5px dashed pink !important; } .cdr-stack--xxl:after { content: '.cdr-stack--xxl' }",
head=document.head,style=document.createElement("style");head.appendChild(style),style.type="text/css",style.appendChild(document.createTextNode(sheet));
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>This will add a dashed pink border to any element that is using one of the deprecated spacing classes, and will also append the class name to the end of that element. Note that you may have classes that are only added in certain states or after user input, so just running this script on page load may not catch every instance of the utility classes.</p>
<h3 id="spacing-utility-class-mapping" tabindex="-1"><a class="header-anchor" href="#spacing-utility-class-mapping">#</a> Spacing Utility Class Mapping</h3>
<p>Almost all of the deprecated spacing classes have direct equivalents in the new utility classes. The XXL sizes are absent, as that spacing value is no longer present in the design system, as well as the <code>--remove</code> classes which set values to 0. If you were depending on one of those classes that has no equivalent, we recommend that you either add this styling to an existing class in your app, or create a new class semantically for your project. If you do create a new class, do not use <code>cdr-</code> in the namespace.</p>
<table>
<thead>
<tr>
<th>deprecated class name</th>
<th>equivalent class name</th>
<th>style</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>cdr-inline--lg</code></td>
<td><code>cdr-mr-space-two-x</code></td>
<td><code>margin-right: 3.2rem</code></td>
</tr>
<tr>
<td><code>cdr-inline--sm</code></td>
<td><code>cdr-mr-space-half-x</code></td>
<td><code>margin-right: .8rem</code></td>
</tr>
<tr>
<td><code>cdr-inline--xl</code></td>
<td><code>cdr-mr-space-four-x</code></td>
<td><code>margin-right: 6.4rem</code></td>
</tr>
<tr>
<td><code>cdr-inline--xs</code></td>
<td><code>cdr-mr-space-quarter-x</code></td>
<td><code>margin-right: .4rem</code></td>
</tr>
<tr>
<td><code>cdr-inline--xxl</code></td>
<td>n/a</td>
<td><code>margin-right: 12.8rem</code></td>
</tr>
<tr>
<td><code>cdr-inline--xxs</code></td>
<td><code>cdr-mr-space-eighth-x</code></td>
<td><code>margin-right: .2rem</code></td>
</tr>
<tr>
<td><code>cdr-inline-left--lg</code></td>
<td><code>cdr-mr-space-two-x</code></td>
<td><code>margin-right: 3.2rem</code></td>
</tr>
<tr>
<td><code>cdr-inline-left--sm</code></td>
<td><code>cdr-mr-space-half-x</code></td>
<td><code>margin-right: .8rem</code></td>
</tr>
<tr>
<td><code>cdr-inline-left--xl</code></td>
<td><code>cdr-mr-space-four-x</code></td>
<td><code>margin-right: 6.4rem</code></td>
</tr>
<tr>
<td><code>cdr-inline-left--xs</code></td>
<td><code>cdr-mr-space-quarter-x</code></td>
<td><code>margin-right: .4rem</code></td>
</tr>
<tr>
<td><code>cdr-inline-left--xxl</code></td>
<td>n/a</td>
<td><code>margin-right: 12.8rem</code></td>
</tr>
<tr>
<td><code>cdr-inline-left--xxs</code></td>
<td><code>cdr-mr-space-eighth-x</code></td>
<td><code>margin-right: .2rem</code></td>
</tr>
<tr>
<td><code>cdr-inline-left</code></td>
<td><code>cdr-mr-space-one-x</code></td>
<td><code>margin-right: 1.6rem</code></td>
</tr>
<tr>
<td><code>cdr-inline-right--lg</code></td>
<td><code>cdr-ml-space-two-x</code></td>
<td><code>margin-left: 3.2rem</code></td>
</tr>
<tr>
<td><code>cdr-inline-right--sm</code></td>
<td><code>cdr-ml-space-half-x</code></td>
<td><code>margin-left: .8rem</code></td>
</tr>
<tr>
<td><code>cdr-inline-right--xl</code></td>
<td><code>cdr-ml-space-four-x</code></td>
<td><code>margin-left: 6.4rem</code></td>
</tr>
<tr>
<td><code>cdr-inline-right--xs</code></td>
<td><code>cdr-ml-space-quarter-x</code></td>
<td><code>margin-left: .4rem</code></td>
</tr>
<tr>
<td><code>cdr-inline-right--xxl</code></td>
<td>n/a</td>
<td><code>margin-left: 12.8rem</code></td>
</tr>
<tr>
<td><code>cdr-inline-right--xxs</code></td>
<td><code>cdr-ml-space-eighth-x</code></td>
<td><code>margin-left: .2rem</code></td>
</tr>
<tr>
<td><code>cdr-inline-right</code></td>
<td><code>cdr-ml-space-one-x</code></td>
<td><code>margin-left: 1.6rem</code></td>
</tr>
<tr>
<td><code>cdr-inline</code></td>
<td><code>cdr-mr-space-one-x</code></td>
<td><code>margin-right: 1.6rem</code></td>
</tr>
<tr>
<td><code>cdr-inset--lg.cdr-inset--squish</code></td>
<td><code>cdr-space-inset-four-x-squish</code></td>
<td><code>padding: 1.6rem 3.2rem</code></td>
</tr>
<tr>
<td><code>cdr-inset--lg.cdr-inset--stretch</code></td>
<td><code>cdr-space-inset-two-x-stretch</code></td>
<td><code>padding: 4.8rem 3.2rem</code></td>
</tr>
<tr>
<td><code>cdr-inset--lg</code></td>
<td><code>cdr-space-inset-two-x</code></td>
<td><code>padding: 3.2rem</code></td>
</tr>
<tr>
<td><code>cdr-inset--remove-all</code></td>
<td>n/a</td>
<td><code>padding: 0</code></td>
</tr>
<tr>
<td><code>cdr-inset--remove-bottom</code></td>
<td>n/a</td>
<td><code>padding-bottom: 0</code></td>
</tr>
<tr>
<td><code>cdr-inset--remove-left</code></td>
<td>n/a</td>
<td><code>padding-left: 0</code></td>
</tr>
<tr>
<td><code>cdr-inset--remove-right</code></td>
<td>n/a</td>
<td><code>padding-right: 0</code></td>
</tr>
<tr>
<td><code>cdr-inset--remove-top</code></td>
<td>n/a</td>
<td><code>padding-top: 0</code></td>
</tr>
<tr>
<td><code>cdr-inset--sm.cdr-inset--squish</code></td>
<td><code>cdr-space-inset-half-x-squish</code></td>
<td><code>padding: .4rem .8rem</code></td>
</tr>
<tr>
<td><code>cdr-inset--sm.cdr-inset--stretch</code></td>
<td><code>cdr-space-inset-half-x-stretch</code></td>
<td><code>padding: 1.2rem .8rem</code></td>
</tr>
<tr>
<td><code>cdr-inset--sm</code></td>
<td><code>cdr-space-inset-half-x</code></td>
<td><code>padding: .8rem</code></td>
</tr>
<tr>
<td><code>cdr-inset--squish</code></td>
<td><code>cdr-space-inset-one-x-squish</code></td>
<td><code>padding: .8rem 1.6rem</code></td>
</tr>
<tr>
<td><code>cdr-inset--stretch</code></td>
<td><code>cdr-space-inset-one-x-stretch</code></td>
<td><code>padding: 2.4rem 1.6rem</code></td>
</tr>
<tr>
<td><code>cdr-inset--xl.cdr-inset--squish</code></td>
<td><code>cdr-space-inset-two-x-squish</code></td>
<td><code>padding: 3.2rem 6.4rem</code></td>
</tr>
<tr>
<td><code>cdr-inset--xl.cdr-inset--stretch</code></td>
<td><code>cdr-space-inset-four-x-stretch</code></td>
<td><code>padding: 9.6rem 6.4rem</code></td>
</tr>
<tr>
<td><code>cdr-inset--xl</code></td>
<td><code>cdr-space-inset-four-x</code></td>
<td><code>padding: 6.4rem</code></td>
</tr>
<tr>
<td><code>cdr-inset--xs.cdr-inset--squish</code></td>
<td><code>cdr-space-inset-quarter-x-squish</code></td>
<td><code>padding: .2rem .4rem</code></td>
</tr>
<tr>
<td><code>cdr-inset--xs.cdr-inset--stretch</code></td>
<td><code>cdr-space-inset-quarter-x-stretch</code></td>
<td><code>padding: .6rem .4rem</code></td>
</tr>
<tr>
<td><code>cdr-inset--xs</code></td>
<td><code>cdr-space-inset-quarter-x</code></td>
<td><code>padding: .4rem</code></td>
</tr>
<tr>
<td><code>cdr-inset--xxs.cdr-inset--squish</code></td>
<td><code>cdr-space-inset-eighth-x-squish</code></td>
<td><code>padding: .1rem .2rem</code></td>
</tr>
<tr>
<td><code>cdr-inset--xxs.cdr-inset--stretch</code></td>
<td><code>cdr-space-inset-eighth-x-stretch</code></td>
<td><code>padding: .3rem .2rem</code></td>
</tr>
<tr>
<td><code>cdr-inset--xxs</code></td>
<td><code>cdr-space-inset-eighth-x</code></td>
<td><code>padding: .2rem</code></td>
</tr>
<tr>
<td><code>cdr-inset</code></td>
<td><code>cdr-space-inset-one-x</code></td>
<td><code>padding: 1.6rem</code></td>
</tr>
<tr>
<td><code>cdr-stack--lg</code></td>
<td><code>cdr-mb-space-two-x</code></td>
<td><code>margin-bottom: 3.2rem</code></td>
</tr>
<tr>
<td><code>cdr-stack--sm</code></td>
<td><code>cdr-mb-space-half-x</code></td>
<td><code>margin-bottom: .8rem</code></td>
</tr>
<tr>
<td><code>cdr-stack--xl</code></td>
<td><code>cdr-mb-space-four-x</code></td>
<td><code>margin-bottom: 6.4rem</code></td>
</tr>
<tr>
<td><code>cdr-stack--xs</code></td>
<td><code>cdr-mb-space-quarter-x</code></td>
<td><code>margin-bottom: .4rem</code></td>
</tr>
<tr>
<td><code>cdr-stack--xxl</code></td>
<td>n/a</td>
<td><code>margin-bottom: 12.8rem</code></td>
</tr>
<tr>
<td><code>cdr-stack--xxs</code></td>
<td><code>cdr-mb-space-eighth-x</code></td>
<td><code>margin-bottom: .2rem</code></td>
</tr>
<tr>
<td><code>cdr-stack</code></td>
<td><code>cdr-mb-space-one-x</code></td>
<td><code>margin-bottom: 1.6rem</code></td>
</tr>
</tbody>
</table>
</cdr-doc-table-of-contents-shell>
</template>
