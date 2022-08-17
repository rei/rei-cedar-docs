<template><cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>
<h2 id="update-steps" tabindex="-1"><a class="header-anchor" href="#update-steps">#</a> Update Steps</h2>
<p>If you are not already on <code>@rei/cedar</code> &gt;= 2.x.x, you will first need to <RouterLink to="/release-notes/summer-2019/">upgrade your project</RouterLink> to the single-package version of Cedar.</p>
<h3 id="for-a-micro-site" tabindex="-1"><a class="header-anchor" href="#for-a-micro-site">#</a> For a Micro-Site</h3>
<ul>
<li>Update to <code>@rei/cedar</code> ^4.0.0</li>
<li>Update to <code>@rei/febs</code> ^6.0.0</li>
<li>If your project depends on any shared component packages (i.e, FEDPACK, FEDCOMP, FEDPAGES), you will want to update those packages to the new version of Cedar and febs before updating your micro-site</li>
</ul>
<h3 id="for-a-component-package" tabindex="-1"><a class="header-anchor" href="#for-a-component-package">#</a> For a Component Package</h3>
<ul>
<li>Update to <code>@rei/cedar</code> ^4.0.0</li>
<li>Update to <code>@rei/febs</code> ^6.0.0</li>
<li>Your package will need to have a build system set up to compile itself, as febs 6.0.0 no longer compiles packages in the <code>@rei</code> namespace. See the <a href="https://github.com/rei/component" target="_blank" rel="noopener noreferrer">@rei/component template<ExternalLinkIcon/></a> for an example of a build system, as well as <a href="https://git.rei.com/projects/FEDPAGES/repos/climber-details-page/browse" target="_blank" rel="noopener noreferrer">climber-details-page<ExternalLinkIcon/></a> and <a href="https://git.rei.com/projects/CLIMB/repos/climbers-site/browse/climbers-site" target="_blank" rel="noopener noreferrer">climbers-site<ExternalLinkIcon/></a> for a full example of a micro-site integration</li>
</ul>
<h2 id="_4-1-0" tabindex="-1"><a class="header-anchor" href="#_4-1-0">#</a> 4.1.0</h2>
<ul>
<li>Added <code>curbside-pickup</code> SVG icon to <code>@rei/cedar-icons^1.4.0</code> and icon component to <code>@rei/cedar</code></li>
</ul>
<h2 id="_4-0-3" tabindex="-1"><a class="header-anchor" href="#_4-0-3">#</a> 4.0.3</h2>
<h3 id="bug-fixes" tabindex="-1"><a class="header-anchor" href="#bug-fixes">#</a> Bug Fixes</h3>
<ul>
<li>Fixed an issue where <code>CdrTabs</code> headers would become un-scrollable if their content overflowed their container when using the <code>centered</code> modifier</li>
<li>Fixed an issue where <code>CdrTabs</code> active tab underline element would overlap improperly with tab content</li>
</ul>
<h2 id="_4-0-2" tabindex="-1"><a class="header-anchor" href="#_4-0-2">#</a> 4.0.2</h2>
<h3 id="bug-fixes-1" tabindex="-1"><a class="header-anchor" href="#bug-fixes-1">#</a> Bug Fixes</h3>
<ul>
<li>Fixed an issue where <code>CdrSelect</code> would emit an event twice</li>
<li>Fixed an issue where <code>event.preventDefault()</code> didn't work with the <code>navigate</code> event from <code>CdrPagination</code>. The above <code>CdrSelect</code> fix was also applied</li>
<li>Fixed a build configuration issue that resulted in Cedar CSS being dropped by Webpack when in production mode</li>
<li>Updated the <code>style</code> path in Cedar to point to the correct file</li>
<li>Added responsive <code>CdrText</code> modifiers for <code>heading-serif-strong</code></li>
</ul>
<h3 id="icon-library" tabindex="-1"><a class="header-anchor" href="#icon-library">#</a> Icon Library</h3>
<p>The Cedar Icon Library has been updated with new icons. For the complete and searchable list of Cedar icons, visit the <a href="https://rei.github.io/cedar-icons/#/" target="_blank" rel="noopener noreferrer">Cedar Icon Library<ExternalLinkIcon/></a>. Corresponding icon components have been added.</p>
<h2 id="_4-0-1" tabindex="-1"><a class="header-anchor" href="#_4-0-1">#</a> 4.0.1</h2>
<h3 id="bug-fixes-2" tabindex="-1"><a class="header-anchor" href="#bug-fixes-2">#</a> Bug Fixes</h3>
<p>Resolves display issue with rating icons overlapping, modal close button spacing, and removes italics from caption's citation.</p>
<h2 id="_4-0-0" tabindex="-1"><a class="header-anchor" href="#_4-0-0">#</a> 4.0.0</h2>
<h2 id="new-features" tabindex="-1"><a class="header-anchor" href="#new-features">#</a> New Features</h2>
<h3 id="ui-toolkit-update" tabindex="-1"><a class="header-anchor" href="#ui-toolkit-update">#</a> UI Toolkit Update</h3>
<ul>
<li>Sticker sheets for individual components has been implemented</li>
<li>Relevant components have been rebuilt using the Smart Layout feature in Sketch</li>
<li>New type styles</li>
</ul>
<h3 id="new-typography" tabindex="-1"><a class="header-anchor" href="#new-typography">#</a> New Typography</h3>
<ul>
<li>Graphik has been introduced to replace Roboto</li>
<li>All components have been revised to include Graphik</li>
<li>New type tokens have been introduced to support body and utility styles</li>
<li>For more information, visit the <a href="../../components/text">Text component</a> page</li>
</ul>
<h3 id="decomposed-css-output" tabindex="-1"><a class="header-anchor" href="#decomposed-css-output">#</a> Decomposed CSS Output</h3>
<p>Previously, Cedar offered a single <code>cedar.css</code> file that included all of the styling for the Cedar reset, components, and utilities. This made it very easy to set up a Cedar project, but the CSS assets could not be optimized. Now, there are separate CSS files for each element of Cedar.</p>
<p>These CSS files are intended to be compiled by postcss and postcss-import, which will de-dupe any Cedar assets that are required multiple times. If you are using febs^6, then this will already be set up for you. Note that postcss-import should only be run during the final micro-site build, and not as a part of any component package build.</p>
<h3 id="single-icon-components" tabindex="-1"><a class="header-anchor" href="#single-icon-components">#</a> Single Icon Components</h3>
<p>As part of the 3.x.x Cedar release, the Icon SVG assets were moved into their own repository <a href="https://github.com/rei/cedar-icons" target="_blank" rel="noopener noreferrer">@rei/cedar-icons<ExternalLinkIcon/></a>, and CdrIconSprite and inline single icon components in @rei/cedar have been deprecated. This was intended to allow teams to build their own SVG sprites containing only the icons used in their application. However, due to issues with Vue and SVG syntax, this approach did not work well for teams that wanted inline icons in their markup.</p>
<p>To resolve this issue, the <a href="https://rei.github.io/rei-cedar-docs/components/icon/#inline-icon-components" target="_blank" rel="noopener noreferrer">inline single icon components<ExternalLinkIcon/></a> were left as is as part of @rei/cedar. These components have been updated to use the same SVG assets exported by <a href="https://github.com/rei/cedar-icons" target="_blank" rel="noopener noreferrer">@rei/cedar-icons<ExternalLinkIcon/></a>.</p>
<h3 id="modal-component" tabindex="-1"><a class="header-anchor" href="#modal-component">#</a> Modal Component</h3>
<ul>
<li>The modal component has been introduced</li>
<li>Available in two width options: default (600px) and large (800px)</li>
<li>For more information, visit the <a href="../../components/modal">Modal component</a> page</li>
</ul>
<h3 id="radio-and-checkbox-sizes" tabindex="-1"><a class="header-anchor" href="#radio-and-checkbox-sizes">#</a> Radio and Checkbox Sizes</h3>
<p>CdrRadio and CdrCheckbox now have a <code>size</code> prop with small, medium (default), and large variants. As part of this feature, the modifier <code>compact</code> has been deprecated and will be removed in the future in favor of using the new size prop.</p>
<h3 id="tabs-centered-variant" tabindex="-1"><a class="header-anchor" href="#tabs-centered-variant">#</a> Tabs Centered Variant</h3>
<p>CdrTabs now accepts <code>centered</code> as a <code>modifier</code> for a center-aligned tab header.</p>
<h2 id="bug-fixes-3" tabindex="-1"><a class="header-anchor" href="#bug-fixes-3">#</a> Bug Fixes</h2>
<h3 id="cdrbutton" tabindex="-1"><a class="header-anchor" href="#cdrbutton">#</a> CdrButton</h3>
<ul>
<li>Icon fill is now updated for interactive and disabled states</li>
</ul>
<h3 id="cdrbreadcrumb" tabindex="-1"><a class="header-anchor" href="#cdrbreadcrumb">#</a> CdrBreadcrumb</h3>
<ul>
<li>Focus is applied to the first breadcrumb item when a truncated breadcrumb is expanded in order to support A11Y</li>
<li>Truncation logic is re-evaluated when breadcrumb items are updated in order to support asynchronous loading</li>
</ul>
<h3 id="cdrdatatable" tabindex="-1"><a class="header-anchor" href="#cdrdatatable">#</a> CdrDataTable</h3>
<ul>
<li>Updated styling logic so that the first row is always dark</li>
</ul>
<h3 id="cdrgrid-cdrrow-cdrcol" tabindex="-1"><a class="header-anchor" href="#cdrgrid-cdrrow-cdrcol">#</a> CdrGrid, CdrRow, CdrCol</h3>
<ul>
<li>CdrRow and CdrCol have been updated so that clicks within the grid margin will no longer be blocked</li>
</ul>
<h3 id="cdrinput" tabindex="-1"><a class="header-anchor" href="#cdrinput">#</a> CdrInput</h3>
<ul>
<li>Fixed padding of helper text</li>
</ul>
<h3 id="cdrlist" tabindex="-1"><a class="header-anchor" href="#cdrlist">#</a> CdrList</h3>
<ul>
<li>Inline lists now wrap to a new line when appropriate</li>
</ul>
<h3 id="cdrrating" tabindex="-1"><a class="header-anchor" href="#cdrrating">#</a> CdrRating</h3>
<ul>
<li>Resolved issue with CdrRating where it treated the <code>count</code> property differently depending on whether it was passed as a string or a number. Now CdrRating will show the review text any time it receives a value for <code>count</code>, and will not show any review text if it does not receive a value. No need to make any changes to the application code to support this change.</li>
</ul>
<h3 id="cdrselect" tabindex="-1"><a class="header-anchor" href="#cdrselect">#</a> CdrSelect</h3>
<ul>
<li>Fixed padding of helper text</li>
</ul>
<h3 id="reset" tabindex="-1"><a class="header-anchor" href="#reset">#</a> Reset</h3>
<ul>
<li>Removed a section of the Cedar CSS reset that disabled focus styling on elements with a tabindex of <code>-1</code></li>
</ul>
<h3 id="cdrtabs" tabindex="-1"><a class="header-anchor" href="#cdrtabs">#</a> CdrTabs</h3>
<ul>
<li>Several issues involving the behavior of the active tab underline on certain browsers has been resolved</li>
<li>CdrTabPanel content will now show a scrollbar on MacOS when that content overflows it's container</li>
<li>CdrTabs now uses hash links (<code>href=&quot;#hash-link&quot;</code>) for navigation to improve SEO</li>
</ul>
<h2 id="breaking-changes" tabindex="-1"><a class="header-anchor" href="#breaking-changes">#</a> Breaking Changes</h2>
<h3 id="cedar-is-now-a-dependency-instead-of-a-peerdependency" tabindex="-1"><a class="header-anchor" href="#cedar-is-now-a-dependency-instead-of-a-peerdependency">#</a> Cedar Is Now a Dependency Instead of a PeerDependency</h3>
<p>Previously we recommended listing <code>@rei/cedar</code> as a <code>peerDependency</code> and <code>devDependency</code> in the <code>package.json</code> of any shared components or pages, and treating it as a <code>dependency</code> in micro-sites. This was necessary to ensure that only 1 version of Cedar was loaded on a page at a time so that the single <code>cedar.css</code> file would work. Now that we have a decomposed CSS output, consumers should <a href="#decomposed-css-output">update their Cedar CSS imports accordingly</a> and edit their <code>package.json</code> file to instead list <code>@rei/cedar</code> as a dependency.</p>
<h3 id="updating-cedar-css-in-a-component" tabindex="-1"><a class="header-anchor" href="#updating-cedar-css-in-a-component">#</a> Updating Cedar CSS in a Component</h3>
<p>If you are updating a shared component:</p>
<ul>
<li>In your main CSS file, use <code>@import url();</code> to load the CSS for each Cedar component and utility type being used in this component. See the <a href="https://rei.github.io/rei-cedar-docs/getting-started/as-a-developer#Include-Component-and-Utility-CSS" target="_blank" rel="noopener noreferrer">Getting Started as a Developer Guide<ExternalLinkIcon/></a> guide for more information on loading Cedar CSS assets</li>
<li>You do not need to load the <code>cdr-fonts</code> or <code>reset</code> files in your component CSS, as those files will already be imported by the micro-site that consumes this package</li>
<li>If you run your build and inspect the compiled CSS file, you should see the <code>@import url();</code> statements left un-transformed. This will allow any micro-site that consumes this package to de-dupe and compile those assets</li>
<li>If your component has a local development environment you will need to update the entry file (usually named <code>local-development.js</code>) to import the Cedar reset and your main CSS file instead of importing <code>cedar.css</code></li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>import '@rei/cedar/dist/cdr-fonts.css';
import '@rei/cedar/dist/style/reset.css';
import './dist/index.css';
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="updating-cedar-css-in-a-micro-site" tabindex="-1"><a class="header-anchor" href="#updating-cedar-css-in-a-micro-site">#</a> Updating Cedar CSS in a Micro-Site</h3>
<p>If you are updating a micro-site:</p>
<ul>
<li>In your main CSS file, instead of importing <code>cedar.css</code>, you will now import the Cedar reset along with the built CSS for all of your shared packages</li>
<li>If you use any other Cedar components or utilities directly in your micro-site, you will also need to add imports for those. You should do this even if those assets are already loaded by shared components, as this ensures that the micro-site will still work even if one of those components was replaced in the future</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>/* import the cedar fonts */
@import url('@rei/cedar/dist/cdr-fonts.css');

/* import the cedar reset */
@import url('@rei/cedar/dist/style/reset.css');

/* import compiled component CSS */
@import url('@rei/your-shared-component-package.css');

/* import any utilities or components used directly in the micro-site */
@import url('@rei/cedar/dist/style/container.css');
@import url('@rei/cedar/dist/style/cdr-text.css');
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ul>
<li>Note that assets can only be de-duped if they are compiled in the same entry file. If you are currently compiling global assets separately, you may want to update your build so that each page in your micro-site has a single JS and CSS entry file</li>
<li>If you run your build and inspect the compiled CSS file, you should not see any <code>@import url();</code> statements, as those will all have been replaced with the actual contents of those CSS files</li>
</ul>
<h3 id="css-asset-shuffle" tabindex="-1"><a class="header-anchor" href="#css-asset-shuffle">#</a> CSS Asset Shuffle</h3>
<p>In order to support the new <a href="#decomposed-css-output">decomposed CSS output</a>, we have re-named some of the existing Cedar CSS assets in order to better identify what they are and how they should be used. If you are importing one of these files into your project, you will need to update the path to the new location. Note that the <code>-compiled</code> CSS files should generally not be used for public-facing production micro-sites, as these files will not be de-duped by postcss-import.</p>
<table>
<thead>
<tr>
<th>Previous path</th>
<th>New path</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>@rei/cedar/dist/cedar.css</code></td>
<td><code>@rei/cedar/dist/cedar-compiled.css</code></td>
</tr>
<tr>
<td><code>@rei/cedar/dist/utilities.css</code></td>
<td><code>@rei/cedar/dist/utilities-compiled.css</code></td>
</tr>
<tr>
<td><code>@rei/cedar/dist/reset.css</code></td>
<td><code>@rei/cedar/dist/style/reset.css</code></td>
</tr>
</tbody>
</table>
<h3 id="cdriconsprite-removed" tabindex="-1"><a class="header-anchor" href="#cdriconsprite-removed">#</a> CdrIconSprite Removed</h3>
<p>The CdrIconSprite has been removed from Cedar. We recommend that consumers instead use the <a href="">inline Cedar Icon components</a>, as they are easier to maintain and the performance benefit of using a sprite is usually minimal.</p>
<p>Teams that do want to make use of an icon sprite for performance reasons, can use the <a href="https://rei.github.io/cedar-icons/#/sprite" target="_blank" rel="noopener noreferrer">Cedar sprite creator<ExternalLinkIcon/></a> to generate an optimized sprite and load it in their HTML.</p>
<h3 id="cdrpagination-events-and-vue-router-support" tabindex="-1"><a class="header-anchor" href="#cdrpagination-events-and-vue-router-support">#</a> CdrPagination Events and Vue-Router Support</h3>
<p>CdrPagination functionality has been simplified and only emits a single <code>navigate</code> event. Responsive navigation behavior for Select no longer has to be manually attached. Vue-router example with router-link using scoped slots has been added. Previous and next links are always present (in a &quot;disabled&quot; state when appropriate). Minor style updates for hover and currently selected page.</p>
<p>API for scoped slots now uses an <code>attrs</code> object for easier binding.</p>
<h3 id="typography" tabindex="-1"><a class="header-anchor" href="#typography">#</a> Typography</h3>
<p>The root class <code>cdr-text</code> now has all attributes mapped to <code>inherit</code>. This change was necessary and
allows for descendant selectors to inherit the font settings of the parent.</p>
<p>You will now need to pass the cdr-text component the modifier you would like to use.</p>
<ul>
<li>For paragraphs, use <code>body-300</code></li>
<li>For generic text, use <code>utility-300</code></li>
</ul>
<p>Previously <code>cdr-text</code> defaulted to the paragraph styles.
<code>cdr-container</code> and <code>cdr-container-fluid</code> will still provide the root font definition.
Note that this has been altered from the paragraph style to the <code>cdr-text--utility-300</code>.</p>
<h2 id="deprecations" tabindex="-1"><a class="header-anchor" href="#deprecations">#</a> Deprecations</h2>
<h3 id="type-token-mixins" tabindex="-1"><a class="header-anchor" href="#type-token-mixins">#</a> Type Token Mixins</h3>
<h4 id="redwood-display" tabindex="-1"><a class="header-anchor" href="#redwood-display">#</a> Redwood Display</h4>
<table>
<thead>
<tr>
<th>Deprecated mixin name</th>
<th>Equivalent mixin name</th>
</tr>
</thead>
<tbody>
<tr>
<td>redwood-display-70</td>
<td>cdr-text-utility-700</td>
</tr>
<tr>
<td>redwood-display-60</td>
<td>cdr-text-utility-600</td>
</tr>
<tr>
<td>redwood-display-50</td>
<td>cdr-text-utility-500</td>
</tr>
<tr>
<td>redwood-display-40</td>
<td>cdr-text-utility-400</td>
</tr>
<tr>
<td>redwood-display-30</td>
<td>cdr-text-utility-300</td>
</tr>
<tr>
<td>redwood-display-20</td>
<td>cdr-text-utility-200</td>
</tr>
<tr>
<td>redwood-display-10</td>
<td>cdr-text-utility-100</td>
</tr>
</tbody>
</table>
<h4 id="redwood-body" tabindex="-1"><a class="header-anchor" href="#redwood-body">#</a> Redwood Body</h4>
<table>
<thead>
<tr>
<th>Deprecated mixin name</th>
<th>Equivalent mixin name</th>
</tr>
</thead>
<tbody>
<tr>
<td>redwood-body-40</td>
<td>cdr-text-body-500</td>
</tr>
<tr>
<td>redwood-body-30</td>
<td>cdr-text-body-400</td>
</tr>
<tr>
<td>redwood-body-20</td>
<td>cdr-text-body-300</td>
</tr>
<tr>
<td>redwood-body-10</td>
<td>cdr-text-body-300</td>
</tr>
</tbody>
</table>
<h4 id="maple" tabindex="-1"><a class="header-anchor" href="#maple">#</a> Maple</h4>
<table>
<thead>
<tr>
<th>Deprecated mixin name</th>
<th>Equivalent mixin name</th>
</tr>
</thead>
<tbody>
<tr>
<td>maple-utility-70</td>
<td>cdr-text-utility-700</td>
</tr>
<tr>
<td>maple-utility-60</td>
<td>cdr-text-utility-600</td>
</tr>
<tr>
<td>maple-utility-50</td>
<td>cdr-text-utility-500</td>
</tr>
<tr>
<td>maple-utility-40</td>
<td>cdr-text-utility-400</td>
</tr>
<tr>
<td>maple-utility-30</td>
<td>cdr-text-utility-300</td>
</tr>
<tr>
<td>maple-utility-20</td>
<td>cdr-text-utility-200</td>
</tr>
<tr>
<td>maple-utility-10</td>
<td>cdr-text-utility-100</td>
</tr>
</tbody>
</table>
<h4 id="spruce" tabindex="-1"><a class="header-anchor" href="#spruce">#</a> Spruce</h4>
<table>
<thead>
<tr>
<th>Deprecated mixin name</th>
<th>Equivalent mixin name</th>
</tr>
</thead>
<tbody>
<tr>
<td>spruce-display-100</td>
<td>cdr-text-heading-serif-strong-1200</td>
</tr>
<tr>
<td>spruce-display-90</td>
<td>cdr-text-heading-serif-strong-1200</td>
</tr>
<tr>
<td>spruce-display-80</td>
<td>cdr-text-heading-serif-strong-1200</td>
</tr>
<tr>
<td>spruce-display-70</td>
<td>cdr-text-heading-serif-strong-1100</td>
</tr>
<tr>
<td>spruce-display-60</td>
<td>cdr-text-heading-serif-strong-800</td>
</tr>
<tr>
<td>spruce-display-50</td>
<td>cdr-text-heading-serif-strong-700</td>
</tr>
<tr>
<td>spruce-display-40</td>
<td>cdr-text-heading-serif-strong-600</td>
</tr>
<tr>
<td>spruce-display-30</td>
<td>cdr-text-heading-sans-500</td>
</tr>
<tr>
<td>spruce-display-20</td>
<td>cdr-text-heading-sans-400</td>
</tr>
<tr>
<td>spruce-display-10</td>
<td>cdr-text-heading-sans-300</td>
</tr>
<tr>
<td>spruce-display-00</td>
<td>cdr-text-heading-sans-300</td>
</tr>
<tr>
<td>spruce-body-30</td>
<td>cdr-text-body-300</td>
</tr>
<tr>
<td>spruce-body-20</td>
<td>cdr-text-body-300</td>
</tr>
</tbody>
</table>
<h4 id="headings" tabindex="-1"><a class="header-anchor" href="#headings">#</a> Headings</h4>
<table>
<thead>
<tr>
<th>Deprecated mixin name</th>
<th>Equivalent mixin name</th>
</tr>
</thead>
<tbody>
<tr>
<td>cdr-text-heading-300</td>
<td>cdr-text-heading-sans-300</td>
</tr>
<tr>
<td>cdr-text-heading-400</td>
<td>cdr-text-heading-sans-400</td>
</tr>
<tr>
<td>cdr-text-heading-500</td>
<td>cdr-text-heading-sans-500</td>
</tr>
<tr>
<td>cdr-text-heading-600</td>
<td>cdr-text-heading-serif-600</td>
</tr>
<tr>
<td>cdr-text-heading-700</td>
<td>cdr-text-heading-serif-700</td>
</tr>
<tr>
<td>cdr-text-heading-800</td>
<td>cdr-text-heading-serif-700</td>
</tr>
<tr>
<td>cdr-text-subheading-300</td>
<td>cdr-text-subheading-sans-300</td>
</tr>
<tr>
<td>cdr-text-subheading-400</td>
<td>cdr-text-subheading-sans-400</td>
</tr>
<tr>
<td>cdr-text-subheading-500</td>
<td>cdr-text-subheading-sans-500</td>
</tr>
<tr>
<td>cdr-text-subheading-600</td>
<td>cdr-text-subheading-sans-600</td>
</tr>
<tr>
<td>cdr-text-display-600</td>
<td>cdr-text-heading-serif-strong-600</td>
</tr>
<tr>
<td>cdr-text-display-700</td>
<td>cdr-text-heading-serif-strong-700</td>
</tr>
<tr>
<td>cdr-text-display-800</td>
<td>cdr-text-heading-serif-strong-800</td>
</tr>
<tr>
<td>cdr-text-display-900</td>
<td>cdr-text-heading-serif-strong-900</td>
</tr>
<tr>
<td>cdr-text-display-1000</td>
<td>cdr-text-heading-serif-strong-1000</td>
</tr>
<tr>
<td>cdr-text-display-1100</td>
<td>cdr-text-heading-serif-strong-1100</td>
</tr>
<tr>
<td>cdr-text-display-1200</td>
<td>cdr-text-heading-serif-strong-1200</td>
</tr>
</tbody>
</table>
<h3 id="cdrtext-heading-modifiers" tabindex="-1"><a class="header-anchor" href="#cdrtext-heading-modifiers">#</a> CdrText Heading Modifiers</h3>
<table>
<thead>
<tr>
<th>Deprecated modifier name</th>
<th>Equivalent modifier name</th>
</tr>
</thead>
<tbody>
<tr>
<td>heading-300</td>
<td>heading-sans-300</td>
</tr>
<tr>
<td>heading-400</td>
<td>heading-sans-400</td>
</tr>
<tr>
<td>heading-500</td>
<td>heading-sans-500</td>
</tr>
<tr>
<td>heading-600</td>
<td>heading-serif-600</td>
</tr>
<tr>
<td>heading-700</td>
<td>heading-serif-700</td>
</tr>
<tr>
<td>heading-800</td>
<td>heading-serif-700</td>
</tr>
<tr>
<td>subheading-300</td>
<td>subheading-sans-300</td>
</tr>
<tr>
<td>subheading-400</td>
<td>subheading-sans-400</td>
</tr>
<tr>
<td>subheading-500</td>
<td>subheading-sans-500</td>
</tr>
<tr>
<td>subheading-600</td>
<td>subheading-sans-600</td>
</tr>
<tr>
<td>display-600</td>
<td>heading-serif-strong-600</td>
</tr>
<tr>
<td>display-700</td>
<td>heading-serif-strong-700</td>
</tr>
<tr>
<td>display-800</td>
<td>heading-serif-strong-800</td>
</tr>
<tr>
<td>display-900</td>
<td>heading-serif-strong-900</td>
</tr>
<tr>
<td>display-1000</td>
<td>heading-serif-strong-1000</td>
</tr>
<tr>
<td>display-1100</td>
<td>heading-serif-strong-1100</td>
</tr>
<tr>
<td>display-1200</td>
<td>heading-serif-strong-1200</td>
</tr>
</tbody>
</table>
<h3 id="type-utility-classes" tabindex="-1"><a class="header-anchor" href="#type-utility-classes">#</a> Type Utility classes</h3>
<table>
<thead>
<tr>
<th>Deprecated class name</th>
<th>Equivalent class name</th>
</tr>
</thead>
<tbody>
<tr>
<td>cdr-text-body</td>
<td>cdr-text-body-300</td>
</tr>
</tbody>
</table>
<h3 id="updated-deprecation-mappings" tabindex="-1"><a class="header-anchor" href="#updated-deprecation-mappings">#</a> Updated Deprecation Mappings</h3>
<p>We have updated the recommended mappings for some features that were deprecated in the <a href="https://rei.github.io/rei-cedar-docs/release-notes/fall-2019/#deprecations" target="_blank" rel="noopener noreferrer">Fall 2019 release<ExternalLinkIcon/></a>.</p>
<h4 id="text-tokens" tabindex="-1"><a class="header-anchor" href="#text-tokens">#</a> Text Tokens</h4>
<table>
<thead>
<tr>
<th>Deprecated token/mixin</th>
<th>Equivalent token/mixin</th>
</tr>
</thead>
<tbody>
<tr>
<td>cdr-text-header-1</td>
<td>cdr-text-heading-serif-1100</td>
</tr>
<tr>
<td>cdr-text-header-2</td>
<td>cdr-text-heading-serif-900</td>
</tr>
<tr>
<td>cdr-text-header-3</td>
<td>cdr-text-heading-serif-700</td>
</tr>
<tr>
<td>cdr-text-header-4</td>
<td>cdr-text-heading-serif-600</td>
</tr>
<tr>
<td>cdr-text-header-5</td>
<td>cdr-text-heading-sans-500</td>
</tr>
<tr>
<td>cdr-text-header-6</td>
<td>cdr-text-heading-sans-400</td>
</tr>
<tr>
<td>cdr-text-header-7</td>
<td>cdr-text-heading-sans-300</td>
</tr>
</tbody>
</table>
<h4 id="cdrtext-modifiers" tabindex="-1"><a class="header-anchor" href="#cdrtext-modifiers">#</a> CdrText Modifiers</h4>
<table>
<thead>
<tr>
<th>Deprecated modifier name</th>
<th>Equivalent modifier names and breakpoints</th>
</tr>
</thead>
<tbody>
<tr>
<td>display</td>
<td>heading-serif-strong-700 heading-serif-strong-900@md heading-serif-strong-1100@lg</td>
</tr>
<tr>
<td>display-static</td>
<td>heading-serif-strong-900</td>
</tr>
<tr>
<td>heading-large</td>
<td>heading-serif-600 heading-serif-700@md heading-serif-900@lg</td>
</tr>
<tr>
<td>heading-large-static</td>
<td>heading-serif-700</td>
</tr>
<tr>
<td>heading-medium</td>
<td>heading-serif-600 heading-serif-700@md heading-serif-700@lg</td>
</tr>
<tr>
<td>heading-medium-static</td>
<td>heading-serif-600</td>
</tr>
<tr>
<td>heading-small</td>
<td>heading-sans-400 heading-sans-500@md heading-sans-500@lg</td>
</tr>
<tr>
<td>heading-small-static</td>
<td>heading-sans-400</td>
</tr>
<tr>
<td>subheading</td>
<td>subheading-sans-300</td>
</tr>
</tbody>
</table>
<h3 id="removals" tabindex="-1"><a class="header-anchor" href="#removals">#</a> Removals</h3>
<p>In accordance with our deprecation policy, features that were deprecated in the <a href="https://rei.github.io/rei-cedar-docs/release-notes/summer-2019/#revisions-for-spacing-utility-classes" target="_blank" rel="noopener noreferrer">Summer 2019 release<ExternalLinkIcon/></a> have been removed from Cedar.</p>
<ul>
<li>Deprecated spacing utilities (<code>cdr-stack</code>, <code>cdr-inset</code>, <code>cdr-inline</code>) should be replaced with the new <a href="https://rei.github.io/rei-cedar-docs/components/utilities#spacing" target="_blank" rel="noopener noreferrer"><code>cdr-space</code> utilities<ExternalLinkIcon/></a>. For more information on updating, see the <a href="https://rei.github.io/rei-cedar-docs/release-notes/summer-2019/#revisions-for-spacing-utility-classes" target="_blank" rel="noopener noreferrer">Summer 2019 release notes<ExternalLinkIcon/></a>.</li>
</ul>
</cdr-doc-table-of-contents-shell>
</template>
