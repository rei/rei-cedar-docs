<template><cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>
<h2 id="update-steps" tabindex="-1"><a class="header-anchor" href="#update-steps">#</a> Update Steps</h2>
<p>If you are not already on <code>@rei/cedar</code> &gt;= 2.x.x, you will first need to <RouterLink to="/release-notes/summer-2019/">upgrade your project</RouterLink> to the single-package version of Cedar.</p>
<h3 id="for-a-micro-site" tabindex="-1"><a class="header-anchor" href="#for-a-micro-site">#</a> For a Micro-Site</h3>
<ul>
<li>Update to <code>@rei/cedar</code> ^5.0.0</li>
<li>If your project depends on any shared component packages (i.e, FEDPACK, FEDCOMP, FEDPAGES), you will want to update those packages to the new version of Cedar and febs before updating your micro-site.</li>
</ul>
<h3 id="for-a-component-package" tabindex="-1"><a class="header-anchor" href="#for-a-component-package">#</a> For a Component Package</h3>
<ul>
<li>Update to <code>@rei/cedar</code> ^5.0.0</li>
<li>Ensure your component is using <code>@rei/febs</code> ^7.1.0 for it's prod and dev build systems</li>
</ul>
<h2 id="_5-2-0" tabindex="-1"><a class="header-anchor" href="#_5-2-0">#</a> 5.2.0</h2>
<ul>
<li>Adds IconReturns, IconVirtualOutfitting, and IconStorefront components</li>
<li>Fixes CdrBreadcrumb text styling at <code>sm</code> and <code>xs</code> breakpoints</li>
</ul>
<h2 id="_5-1-0" tabindex="-1"><a class="header-anchor" href="#_5-1-0">#</a> 5.1.0</h2>
<ul>
<li>Fixes an issue with our ESM build that was breaking tree-shaking.</li>
<li>Sets <code>cdr-color-text-link-visited</code> to the correct value. CdrLink does not currently have a <code>visited</code> state.</li>
<li>Adds new tokens and utility classes for <code>cdr-space-three-x</code>.</li>
</ul>
<h2 id="_5-0-0" tabindex="-1"><a class="header-anchor" href="#_5-0-0">#</a> 5.0.0</h2>
<h2 id="new-features" tabindex="-1"><a class="header-anchor" href="#new-features">#</a> New Features</h2>
<h3 id="cedar-design-libraries-move-to-figma" tabindex="-1"><a class="header-anchor" href="#cedar-design-libraries-move-to-figma">#</a> Cedar Design Libraries Move to Figma</h3>
<p>The UI Toolkit has migrated to Figma! Designers can find updated information in the <RouterLink to="/getting-started/as-a-designer/">getting started</RouterLink> article. Additionally, Figma replaces Abstract in facilitating the design to development <RouterLink to="/getting-started/hand-off/">hand-off process</RouterLink>.</p>
<h3 id="updated-brand-color-palette" tabindex="-1"><a class="header-anchor" href="#updated-brand-color-palette">#</a> Updated Brand Color Palette</h3>
<p>Cedar components and design tokens have been updated to make use of the new brand palette. Any hardcoded color values in your application may need to be updated in order to stay in sync with the new brand palette. We have additionally removed the concept of &quot;lightmode&quot; and &quot;darkmode&quot; themes from Cedar to align with the brand palette updates. See the <a href="#color-token-updates">color token deprecation list</a> for guidance on re-mapping existing color tokens.</p>
<h3 id="new-component-cdrtable" tabindex="-1"><a class="header-anchor" href="#new-component-cdrtable">#</a> New Component: CdrTable</h3>
<p>We have added a component for tables. This component is more generic than the existing data table (which has been moved to fed components). See the <RouterLink to="/components/table/">CdrTable docs</RouterLink> for more details and examples. Note that the <a href="#cdrdatatable">CdrDataTable component has been deprecated</a>.</p>
<h3 id="new-component-cdrcard" tabindex="-1"><a class="header-anchor" href="#new-component-cdrcard">#</a> New Component: CdrCard</h3>
<p>CdrCard is a simple wrapper component that allows for composing various card layouts, and now officially supported in the system. See the <RouterLink to="/components/card/">CdrCard docs</RouterLink> for more details and usage guidelines.</p>
<h3 id="cdrbutton-icon-only-variant" tabindex="-1"><a class="header-anchor" href="#cdrbutton-icon-only-variant">#</a> CdrButton Icon-Only Variant</h3>
<p>We have added a new variant to CdrButton that allows you to render an icon-only button that has a background and border in order to make icon-only buttons more visible. See the <RouterLink to="/components/buttons/#icon-only-with-background">CdrButton docs</RouterLink> for more details.</p>
<h3 id="new-utility-classes" tabindex="-1"><a class="header-anchor" href="#new-utility-classes">#</a> New Utility Classes</h3>
<p>Utility classes for foreground and background color are now available. See the <RouterLink to="/components/utilities/#color">utilities page</RouterLink> for a full list.
Note that the existing color utility classes have been <a href="#color-utility-classes">deprecated</a>.</p>
<h3 id="cdraccordiongroup" tabindex="-1"><a class="header-anchor" href="#cdraccordiongroup">#</a> CdrAccordionGroup</h3>
<p>We have added this wrapper component to better support the accessibility of accordion groups. Simply wrap your existing groups of accordions in this component and keyboard navigation will be taken care of. See the <RouterLink to="/components/accordion/">CdrAccordion docs</RouterLink> for more details and examples.</p>
<h3 id="cdrimg-event-handlers" tabindex="-1"><a class="header-anchor" href="#cdrimg-event-handlers">#</a> CdrImg Event Handlers</h3>
<p>We have updated CdrImg to accept event handlers. This is intended to support <code>onError</code> event handlers. See the <RouterLink to="/components/image/#error-event-handler">CdrImg docs</RouterLink> for more details and examples.</p>
<h3 id="cdrmodal-fullscreen" tabindex="-1"><a class="header-anchor" href="#cdrmodal-fullscreen">#</a> CdrModal Fullscreen</h3>
<p>CdrModal now shifts to a fullscreen view at the <code>xs</code> breakpoint, and will otherwise render at <code>640px</code> wide. Note that the <code>size</code> property  <a href="#cdrmodal-size-prop-removed">has been removed from CdrModal</a> in order to accomodate this update.</p>
<h3 id="cdrtabs-active-tab-property" tabindex="-1"><a class="header-anchor" href="#cdrtabs-active-tab-property">#</a> CdrTabs active-tab Property</h3>
<p>CdrTabs now accepts a property named <code>active-tab</code> which allows for changing which tab content is &quot;active&quot; on the initial page load. See the <RouterLink to="/components/tabs/#active-tab">CdrTabs docs</RouterLink> for more information.</p>
<h2 id="bug-fixes" tabindex="-1"><a class="header-anchor" href="#bug-fixes">#</a> Bug Fixes</h2>
<h3 id="cdrrating-medium-size" tabindex="-1"><a class="header-anchor" href="#cdrrating-medium-size">#</a> CdrRating Medium Size</h3>
<p>Added missing medium responsive size modifier. Now all options can be used at all breakpoints for responsive sizing. The default size is still medium.</p>
<h3 id="cdraccordion-content-reflow" tabindex="-1"><a class="header-anchor" href="#cdraccordion-content-reflow">#</a> CdrAccordion Content Reflow</h3>
<p>CdrAccordion has been updated to better handle content reflows which may occur when a browser window is resized or when content is added or removed to an opened accordion.</p>
<h3 id="cdrtabs-mobile-underline" tabindex="-1"><a class="header-anchor" href="#cdrtabs-mobile-underline">#</a> CdrTabs Mobile Underline</h3>
<p>CdrTabs has been updated so that the active tab underline no longer causes window size issues on mobile when it is scrolled offscreen.</p>
<h3 id="accessibility-enhancements" tabindex="-1"><a class="header-anchor" href="#accessibility-enhancements">#</a> Accessibility Enhancements</h3>
<h4 id="cdraccordion" tabindex="-1"><a class="header-anchor" href="#cdraccordion">#</a> CdrAccordion</h4>
<ul>
<li>Documentation updated with usage requirements.</li>
<li>The button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.</li>
<li>Each accordion header button is wrapped in an element with role heading that has a value set for aria-level that is appropriate for the information architecture of the page.</li>
</ul>
<h4 id="cdrlink" tabindex="-1"><a class="header-anchor" href="#cdrlink">#</a> CdrLink</h4>
<ul>
<li>Documentation updated with usage requirements.</li>
<li>Color meets 4.5:1 contrast with background.</li>
<li>Color meets 3:1 contrast with surrounding text.</li>
<li>Hover and focus colors meet 3:1 contrast with surrounding text.</li>
</ul>
<h4 id="cdrbreadcrumb" tabindex="-1"><a class="header-anchor" href="#cdrbreadcrumb">#</a> CdrBreadcrumb</h4>
<ul>
<li>A nav element labeled Breadcrumb identifies the structure as a breadcrumb trail and makes it a navigation landmark so that it is easy to locate.</li>
<li>The ellipsis button has added <code>aria-expanded=&quot;false&quot;</code> and updated screen reader text ensuring the users understand the number of items hidden in this control.</li>
</ul>
<h4 id="cdrbutton" tabindex="-1"><a class="header-anchor" href="#cdrbutton">#</a> CdrButton</h4>
<ul>
<li>Documentation updated with usage requirements.</li>
<li>Variants: color meets 3:1 contrast to background.</li>
<li>Variants: Hover and focus states meet 3:1 contrast to background and surrounding actionable elements.</li>
<li>Uses an ordered list structure.</li>
</ul>
<h4 id="cdrcheckbox" tabindex="-1"><a class="header-anchor" href="#cdrcheckbox">#</a> CdrCheckbox</h4>
<ul>
<li>Documentation updated with usage requirements.</li>
<li>Active, hover, and focus have increased border width to ensure contrast meets 3:1 with background and default actionable elements.</li>
</ul>
<h4 id="cdrmodal" tabindex="-1"><a class="header-anchor" href="#cdrmodal">#</a> CdrModal</h4>
<ul>
<li>Focus on button click moves to modal panel.</li>
</ul>
<h4 id="cdrpagination" tabindex="-1"><a class="header-anchor" href="#cdrpagination">#</a> CdrPagination</h4>
<ul>
<li>Pagination component is wrapped with <code>&lt;nav&gt;</code> element.</li>
<li>Changed <code>aria-label</code> to <code>pagination</code> rather than <code>pagination navigation</code> as navigation would be read out twice.</li>
<li>Uses an ordered list structure.</li>
</ul>
<h4 id="cdrradio" tabindex="-1"><a class="header-anchor" href="#cdrradio">#</a> CdrRadio</h4>
<ul>
<li>Documentation updated with usage requirements.</li>
<li>Active, hover, and focus have increased border width to ensure contrast meets 3:1 with background and default actionable elements.</li>
</ul>
<h4 id="cdrrating" tabindex="-1"><a class="header-anchor" href="#cdrrating">#</a> CdrRating</h4>
<ul>
<li>Documentation updated with usage requirements.</li>
<li>Star icon visual boundaries provide a minimum of 3:1 to the background.</li>
<li>Star icon visual boundaries provide a minimum of 3:1 fill to non-fill.</li>
<li>When images are disabled, star icons are replaced with Unicode characters .</li>
<li>Star icon is visible in high contrast mode.</li>
<li>Screen reader text has been updated for each variant possible:</li>
</ul>
<table>
<thead>
<tr>
<th>Use Case</th>
<th>Screen Reader Text</th>
</tr>
</thead>
<tbody>
<tr>
<td>linked rating stars with average and count: has reviews</td>
<td>View the (x) reviews with an average rating of #.## out of 5 stars</td>
</tr>
<tr>
<td>linked rating stars with count: has reviews</td>
<td>&quot;View the (x) reviews with an average rating of #.## out of 5 stars&quot;</td>
</tr>
<tr>
<td>linked rating stars with count: no reviews</td>
<td>&quot;No reviews yet; be the first!&quot;</td>
</tr>
<tr>
<td>rating stars with average and count: has reviews</td>
<td>&quot;(x) reviews with an average rating of #.## out of 5 stars&quot;</td>
</tr>
<tr>
<td>rating stars with average and count: no reviews</td>
<td>&quot;0 reviews&quot;</td>
</tr>
<tr>
<td>rating stars with count: has reviews</td>
<td>&quot;(x) reviews with an average rating of #.## out of 5 stars&quot;</td>
</tr>
<tr>
<td>rating stars with count: no reviews</td>
<td>&quot;0 reviews&quot;</td>
</tr>
</tbody>
</table>
<h4 id="cdrtab" tabindex="-1"><a class="header-anchor" href="#cdrtab">#</a> CdrTab</h4>
<ul>
<li>Only the active tab is in the tab order. The user reaches the tabbed panel component by pressing the tab key until the active tab title receives focus.</li>
<li>Clicking on the tab title activates the tab and sets focus to the tab title.</li>
<li>Tab navigation will move from tab item to the associated panel.</li>
<li>The currently selected tab list item has the state aria-selected=&quot;true&quot;.</li>
<li>Uses an unordered list structure.</li>
</ul>
<h2 id="breaking-changes" tabindex="-1"><a class="header-anchor" href="#breaking-changes">#</a> Breaking Changes</h2>
<h3 id="ie11-support-dropped" tabindex="-1"><a class="header-anchor" href="#ie11-support-dropped">#</a> IE11 Support Dropped</h3>
<p>Internet Explorer 11 has been removed from the REI browser support matrix. Cedar has been updated to no longer include IE11 related polyfills.</p>
<h3 id="unitless-js-tokens-for-spacing-and-breakpoints" tabindex="-1"><a class="header-anchor" href="#unitless-js-tokens-for-spacing-and-breakpoints">#</a> Unitless JS Tokens For Spacing and Breakpoints</h3>
<p>The space (<code>cdr-space-...</code>) and breakpoint (<code>cdr-breakpoint-...</code>) tokens in the JS distributions of @rei/cdr-tokens have been made &quot;unitless&quot;. Those tokens previously had to be manipulated in order to use them effectively in JavaScript, for example by doing: <code>CdrSpaceOneX.split('px')[0]</code>.</p>
<h3 id="component-variables-now-export-mixins-only" tabindex="-1"><a class="header-anchor" href="#component-variables-now-export-mixins-only">#</a> Component Variables Now Export Mixins Only</h3>
<p>We have updated our <a href="https://github.com/rei/rei-cedar-component-variables/" target="_blank" rel="noopener noreferrer">component variables<ExternalLinkIcon/></a> package to export only the mixins for component styles and have excluded the individual variables used within those mixins. Component variables are intended for applying the Cedar component CSS styles in projects which cannot use the Vue components directly, which is satisfied by exporting the mixins. Because the individual styles applied by a mixin might change from release to release it was very difficult to manage and document updates to the individual variables in a way that allowed consumers to stay up to date with Cedar. If you were using individual variables from the component variables package, we recommend you either switch to using the full mixin, replace that variable with the appropriate <RouterLink to="/tokens/all-tokens/">Cedar token</RouterLink> if one exists, or simply hardcoding the value.</p>
<h3 id="cdraccordiongroup-wrapper" tabindex="-1"><a class="header-anchor" href="#cdraccordiongroup-wrapper">#</a> CdrAccordionGroup Wrapper</h3>
<p>CdrAccordion components must now be wrapped inside an instance of CdrAccordionGroup to ensure that accordions meet accessibility requirements. See the <RouterLink to="/components/accordion/">CdrAccordion docs</RouterLink> for more details and examples.</p>
<h3 id="cdraccordion-level-prop" tabindex="-1"><a class="header-anchor" href="#cdraccordion-level-prop">#</a> CdrAccordion Level Prop</h3>
<p>CdrAccordion has a new required prop: <code>level</code>. This prop is required in order to meet WCAG accessibility standards and should be set to the appropriate heading level for the context of your page. See the <RouterLink to="/components/accordion/">CdrAccordion docs</RouterLink> for more details and examples.</p>
<h3 id="cdrlink-theming-removed" tabindex="-1"><a class="header-anchor" href="#cdrlink-theming-removed">#</a> CdrLink Theming Removed</h3>
<p>CdrLink previously supported theming by setting an <code>on-dark</code> or <code>on-light</code> CSS class on a container element. Due to the new color scale this feature was not possible to support in a consistent way and has been removed.</p>
<h3 id="cdrbutton-ondark-removed" tabindex="-1"><a class="header-anchor" href="#cdrbutton-ondark-removed">#</a> CdrButton OnDark Removed</h3>
<p>CdrButton previously accepted a prop named <code>on-dark</code> which could be used in conjunction with the <code>icon-only</code> prop to render a button with a background. This was intended to be used on dark backgrounds to make the icon button more visible and accessible. Due to the new color scale this feature was not possible to continue supporting as is, and has been replaced with a new <a href="#cdrbutton-icon-only-variant">with-background</a> property.</p>
<h3 id="cdrmodal-size-prop-removed" tabindex="-1"><a class="header-anchor" href="#cdrmodal-size-prop-removed">#</a> CdrModal Size Prop Removed</h3>
<p>In order to support the CdrModal fullscreen functionality, we have removed its <code>size</code> prop. CdrModal will now always display at <code>640px</code> wide except when viewed in <code>xs</code> screen sizes.</p>
<h3 id="cdrtabpanel-accessibility-requirements" tabindex="-1"><a class="header-anchor" href="#cdrtabpanel-accessibility-requirements">#</a> CdrTabPanel Accessibility Requirements</h3>
<p>In order to make the CdrTabs component meet accessibility requirements, you must now explicitly set both an <code>id</code> and <code>aria-labelledby</code> property on CdrTabPanel elements. These properties must be unique identifiers, but other than that their content is arbitrary, for example: <code>&lt;cdr-tab-panel id=&quot;foo-tab-panel&quot; aria-labelledby=&quot;foo-tab&quot; name=&quot;foo&quot;&gt;</code>. This allows us to wire up <code>aria-</code> tags to correctly link the content of each tab to the header element that activates it.  See the <RouterLink to="/components/tabs/#props">CdrTabs docs</RouterLink> for more information and examples of usage.</p>
<h2 id="deprecations" tabindex="-1"><a class="header-anchor" href="#deprecations">#</a> Deprecations</h2>
<h3 id="cdrdatatable" tabindex="-1"><a class="header-anchor" href="#cdrdatatable">#</a> CdrDataTable</h3>
<p>The CdrDataTable component has been deprecated in favor of the new CdrTable component. CdrDataTable is a complex component which was difficult for developers to customize or enhance, whereas the new CdrTable component is a simple wrapper which applies styling to native HTML <code>&lt;table&gt;</code> markup. The existing CdrDataTable component has been ported to the FEDCOMP repository and is now available in the REI private NPM registry as <a href="https://git.rei.com/projects/FEDCOMP/repos/data-table/browse" target="_blank" rel="noopener noreferrer">@rei/data-table<ExternalLinkIcon/></a>. Note that <code>@rei/data-table</code> replaces the <code>modifier</code> property with individual <code>compact</code> and <code>borderless</code> boolean properties. Consumers of CdrDataTable should either replace their usage of that component with CdrTable, or install and use <code>@rei/data-table</code> instead.</p>
<h3 id="color-token-updates" tabindex="-1"><a class="header-anchor" href="#color-token-updates">#</a> Color Token Updates</h3>
<p>Legacy darkmode token variants have been deprecated. To update pages currently using darkmode tokens, consult your designer for a recommendation.</p>
<p>Note that Cedar design tokens should always be applied semantically, when re-mapping tokens take care to ensure that the token name matches it's purpose i.e, don't use a <code>border-input</code> token for anything besides the border of an input element.</p>
<table>
<thead>
<tr>
<th>Deprecated Token</th>
<th>Equivalent Token</th>
</tr>
</thead>
<tbody>
<tr>
<td>cdr-color-text-primary-lightmode</td>
<td>cdr-color-text-primary</td>
</tr>
<tr>
<td>cdr-color-text-primary-darkmode</td>
<td>n/a</td>
</tr>
<tr>
<td>cdr-color-text-secondary-lightmode</td>
<td>cdr-color-text-secondary</td>
</tr>
<tr>
<td>cdr-color-text-secondary-darkmode</td>
<td>n/a</td>
</tr>
<tr>
<td>cdr-color-text-disabled-lightmode</td>
<td>cdr-color-text-disabled</td>
</tr>
<tr>
<td>cdr-color-text-disabled-darkmode</td>
<td>n/a</td>
</tr>
<tr>
<td>cdr-color-text-link-lightmode</td>
<td>cdr-color-text-link-rest</td>
</tr>
<tr>
<td>cdr-color-text-link-darkmode</td>
<td>n/a</td>
</tr>
<tr>
<td>cdr-color-text-error-lightmode</td>
<td>cdr-color-text-error</td>
</tr>
<tr>
<td>cdr-color-text-error-darkmode</td>
<td>n/a</td>
</tr>
<tr>
<td>cdr-color-text-form-label-lightmode</td>
<td>cdr-color-text-input-label</td>
</tr>
<tr>
<td>cdr-color-text-form-label-darkmode</td>
<td>n/a</td>
</tr>
<tr>
<td>cdr-color-text-form-placeholder-lightmode</td>
<td>cdr-color-text-input-placeholder</td>
</tr>
<tr>
<td>cdr-color-text-form-placeholder-darkmode</td>
<td>n/a</td>
</tr>
<tr>
<td>cdr-color-text-form-disabled-lightmode</td>
<td>cdr-color-text-input-disabled</td>
</tr>
<tr>
<td>cdr-color-text-form-disabled-darkmode</td>
<td>n/a</td>
</tr>
<tr>
<td>cdr-color-icon-primary-lightmode</td>
<td>cdr-color-icon-default</td>
</tr>
<tr>
<td>cdr-color-icon-primary-darkmode</td>
<td>n/a</td>
</tr>
<tr>
<td>cdr-color-icon-emphasis-lightmode</td>
<td>cdr-color-icon-emphasis</td>
</tr>
<tr>
<td>cdr-color-icon-emphasis-darkmode</td>
<td>n/a</td>
</tr>
<tr>
<td>cdr-color-background-dark</td>
<td>n/a</td>
</tr>
<tr>
<td>cdr-color-background-darker</td>
<td>n/a</td>
</tr>
<tr>
<td>cdr-color-background-light</td>
<td>cdr-color-background-primary</td>
</tr>
<tr>
<td>cdr-color-background-lighter</td>
<td>cdr-color-background-primary</td>
</tr>
<tr>
<td>cdr-color-background-lightest</td>
<td>cdr-color-background-primary</td>
</tr>
<tr>
<td>cdr-color-background-form-lightmode</td>
<td>cdr-color-background-primary</td>
</tr>
<tr>
<td>cdr-color-background-form-darkmode</td>
<td>n/a</td>
</tr>
<tr>
<td>cdr-color-background-form-input-lightmode</td>
<td>cdr-color-background-input-default</td>
</tr>
<tr>
<td>cdr-color-background-form-input-darkmode</td>
<td>n/a</td>
</tr>
<tr>
<td>cdr-color-border-primary-lightmode</td>
<td>cdr-color-border-primary</td>
</tr>
<tr>
<td>cdr-color-border-primary-darkmode</td>
<td>n/a</td>
</tr>
<tr>
<td>cdr-color-border-secondary-lightmode</td>
<td>cdr-color-border-secondary</td>
</tr>
<tr>
<td>cdr-color-border-secondary-darkmode</td>
<td>n/a</td>
</tr>
<tr>
<td>cdr-color-border-disabled-lightmode</td>
<td>cdr-color-border-input-default-disabled</td>
</tr>
<tr>
<td>cdr-color-border-disabled-darkmode</td>
<td>n/a</td>
</tr>
<tr>
<td>cdr-color-border-error-lightmode</td>
<td>cdr-color-border-error</td>
</tr>
<tr>
<td>cdr-color-border-selected-lightmode</td>
<td>cdr-color-border-input-default-selected</td>
</tr>
</tbody>
</table>
<h3 id="color-utility-classes" tabindex="-1"><a class="header-anchor" href="#color-utility-classes">#</a> Color Utility Classes</h3>
<table>
<thead>
<tr>
<th>Deprecated utility</th>
<th>Equivalent utility</th>
</tr>
</thead>
<tbody>
<tr>
<td>cdr-bg--light</td>
<td>cdr-color-background-primary</td>
</tr>
<tr>
<td>cdr-bg--lighter</td>
<td>cdr-color-background-primary</td>
</tr>
<tr>
<td>cdr-bg--lightest</td>
<td>cdr-color-background-primary</td>
</tr>
<tr>
<td>cdr-bg--dark</td>
<td>n/a</td>
</tr>
<tr>
<td>cdr-bg--darker</td>
<td>n/a</td>
</tr>
</tbody>
</table>
<h3 id="text-tokens" tabindex="-1"><a class="header-anchor" href="#text-tokens">#</a> Text Tokens</h3>
<table>
<thead>
<tr>
<th>Deprecated token/mixin</th>
<th>Equivalent token/mixin</th>
</tr>
</thead>
<tbody>
<tr>
<td>cdr-text-utility-n00</td>
<td>cdr-text-utility-sans-n00</td>
</tr>
<tr>
<td>cdr-text-utility-strong-n00</td>
<td>cdr-text-utility-sans-strong-n00</td>
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
<td>cdr-text-utility-n00</td>
<td>cdr-text--utility-sans-n00</td>
</tr>
<tr>
<td>cdr-text-utility-strong-n00</td>
<td>cdr-text--utility-sans-strong-n00</td>
</tr>
</tbody>
</table>
<h3 id="cdrtext-modifiers" tabindex="-1"><a class="header-anchor" href="#cdrtext-modifiers">#</a> CdrText Modifiers</h3>
<table>
<thead>
<tr>
<th>Deprecated class name</th>
<th>Equivalent class name</th>
</tr>
</thead>
<tbody>
<tr>
<td>utility-n00</td>
<td>utility-sans-n00</td>
</tr>
<tr>
<td>utility-strong-n00</td>
<td>utility-sans-strong-n00</td>
</tr>
</tbody>
</table>
<h2 id="removals" tabindex="-1"><a class="header-anchor" href="#removals">#</a> Removals</h2>
<p>In accordance with our deprecation policy, features that were deprecated in the <RouterLink to="/release-notes/fall-2019/#deprecations">Fall 2019 release</RouterLink> have been removed from Cedar.</p>
<ul>
<li>The cdr-text modifiers for display, heading-small/medium/large, and subheading, as well as cdr-tokens mixins for <code>cdr-text-header-n</code> and <code>spruce-display</code> should be updated according to the typography mappings from the <RouterLink to="/release-notes/winter-2020/#updated-deprecation-mappings">Winter 2020 release</RouterLink> rather than the ones in the Fall 2019 release notes.</li>
<li>Alignment and display utilities should be re-mapped to their new naming structure.</li>
</ul>
</cdr-doc-table-of-contents-shell>
</template>
