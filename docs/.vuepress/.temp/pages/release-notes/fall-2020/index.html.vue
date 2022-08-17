<template><cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>
<h2 id="update-steps" tabindex="-1"><a class="header-anchor" href="#update-steps">#</a> Update Steps</h2>
<ul>
<li>Update to the latest version of the Cedar packages:</li>
</ul>
<table>
<thead>
<tr>
<th>package name</th>
<th>version</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>@rei/cedar</code></td>
<td>^7.x.x</td>
</tr>
<tr>
<td><code>@rei/cdr-tokens</code></td>
<td>^7.x.x</td>
</tr>
<tr>
<td><code>@rei/cdr-component-variables</code></td>
<td>^5.x.x</td>
</tr>
</tbody>
</table>
<ul>
<li>If your project depends on any shared component packages (i.e, FEDPACK, FEDCOMP, FEDPAGES), you will want to update those packages to the new version of Cedar before updating your micro-site.</li>
</ul>
<h2 id="_7-1-2" tabindex="-1"><a class="header-anchor" href="#_7-1-2">#</a> 7.1.2</h2>
<h3 id="bug-fixes" tabindex="-1"><a class="header-anchor" href="#bug-fixes">#</a> Bug Fixes</h3>
<ul>
<li>CdrModal has been updated to better handle scrolling on iOS Safari</li>
</ul>
<h2 id="_7-1-1" tabindex="-1"><a class="header-anchor" href="#_7-1-1">#</a> 7.1.1</h2>
<h3 id="bug-fixes-1" tabindex="-1"><a class="header-anchor" href="#bug-fixes-1">#</a> Bug Fixes</h3>
<ul>
<li>CdrBreadcrumb truncation logic has been updated to better handle screen readers</li>
<li>CdrButton has been updated to apply an animation to the fill color on state changes</li>
<li>CdrRadio and CdrCheckbox no longer duplicate HTML attributes when rendered in SSR</li>
<li>CdrPopover and CdrTooltip now render properly when used in the <code>info-action</code> slot of CdrInput or CdrSelect</li>
<li>CdrModal has been updated to improve it's open and close animations</li>
</ul>
<h2 id="_7-1-0" tabindex="-1"><a class="header-anchor" href="#_7-1-0">#</a> 7.1.0</h2>
<h3 id="cdrmodal-override-slot" tabindex="-1"><a class="header-anchor" href="#cdrmodal-override-slot">#</a> CdrModal Override Slot</h3>
<p>We added a new slot to CdrModal called <code>modal</code> which overrides the entire modal dialog box including the title and close button.</p>
<h3 id="cdrmodal-re-open-fix" tabindex="-1"><a class="header-anchor" href="#cdrmodal-re-open-fix">#</a> CdrModal Re-Open Fix</h3>
<p>We resolved a bug where re-opening a CdrModal immediately after closing can result in blank content.</p>
<h2 id="new-features" tabindex="-1"><a class="header-anchor" href="#new-features">#</a> New Features</h2>
<h3 id="cdrtooltip-and-cdrpopover-components" tabindex="-1"><a class="header-anchor" href="#cdrtooltip-and-cdrpopover-components">#</a> CdrTooltip and CdrPopover Components</h3>
<p>CdrTooltip and CdrPopover are both components that accepts a trigger element and content. CdrTooltip renders it's content whenever the trigger element is hovered or focused, and CdrPopover renders it's content whenever it's trigger element is clicked. See the <a href="../../components/tooltip">CdrTooltip page</a> and  <a href="../../components/popover">CdrPopover page</a> for more information.</p>
<h3 id="form-updates" tabindex="-1"><a class="header-anchor" href="#form-updates">#</a> Form Updates</h3>
<h4 id="cdrselect" tabindex="-1"><a class="header-anchor" href="#cdrselect">#</a> CdrSelect</h4>
<ul>
<li>New <code>error</code> prop and slot added to enable validation.</li>
<li>New <code>info-action</code> slot for rendering an icon outside and to the right of the input.</li>
<li>Updated <code>required</code> state to render as an asterisk <code>*</code>.</li>
<li>New <code>optional</code> state added.</li>
<li>New <code>background</code> prop added to adjust input styling depending on the background it is rendered on.</li>
</ul>
<h4 id="cdrinput" tabindex="-1"><a class="header-anchor" href="#cdrinput">#</a> CdrInput</h4>
<ul>
<li>New <code>error</code> prop and slot added to enable validation.</li>
<li>New <code>info-action</code> slot for rendering an icon outside and to the right of the input.</li>
<li>Updated <code>required</code> state to render as an asterisk <code>*</code>.</li>
<li>New <code>optional</code> state added.</li>
<li>New <code>background</code> prop added to adjust input styling depending on the background it is rendered on.</li>
<li>New <code>helper-text-top</code> slot added to render helper text above the input. We have also renamed the <code>helper-text</code> slot to be <code>helper-text-bottom</code>.</li>
<li>New <code>cdr-input__button</code> utility class has been added for styling icon buttons that are used inside of the <code>post-icon</code> slot.</li>
</ul>
<h4 id="cdrradio-cdrcheckbox" tabindex="-1"><a class="header-anchor" href="#cdrradio-cdrcheckbox">#</a> CdrRadio / CdrCheckbox</h4>
<ul>
<li>Spacing and interaction logic has been updated.</li>
<li>New <code>background</code> prop added to adjust input styling depending on the background it is rendered on.</li>
</ul>
<h4 id="cdrformgroup" tabindex="-1"><a class="header-anchor" href="#cdrformgroup">#</a> CdrFormGroup</h4>
<ul>
<li>New <code>error</code> prop and slot added to enable validation of checkbox and radio groups.</li>
<li>New <code>optional</code> and <code>required</code> states added.</li>
</ul>
<h3 id="font-performance-update" tabindex="-1"><a class="header-anchor" href="#font-performance-update">#</a> Font Performance Update</h3>
<p>Cedar worked with the Performance team to optimize the <code>cdr-fonts.css</code> file. The fonts must be loaded on every page so this should improve performance across REI. Micro-sites can also opt in to a cached version of this file by loading the <a href="https://git.rei.com/projects/FEDPACK/repos/rei-fonts/browse" target="_blank" rel="noopener noreferrer">@rei/fonts<ExternalLinkIcon/></a> package rather than importing the <code>cdr-fonts.css</code> file directly from Cedar.</p>
<h3 id="documentation-updates" tabindex="-1"><a class="header-anchor" href="#documentation-updates">#</a> Documentation Updates</h3>
<ul>
<li>The <a href="../../components/component-variables">component variables page</a> has been updated to include examples of mixin usage for all supported components.</li>
<li>Cedar components that support component variables now note that on their pages.</li>
<li>The github pages doc sites for <code>@rei/cdr-component-variables</code> and <code>@rei/cdr-tokens</code> have been deleted and now redirect to the equivalent pages on this site.</li>
<li>A new page tracking <a href="../deprecated">deprecated deatures</a> has been created to more easily track down breaking updates to Cedar.</li>
</ul>
<h2 id="deprecations" tabindex="-1"><a class="header-anchor" href="#deprecations">#</a> Deprecations</h2>
<h3 id="cdrinput-helper-text-slot" tabindex="-1"><a class="header-anchor" href="#cdrinput-helper-text-slot">#</a> CdrInput Helper Text Slot</h3>
<p>The <code>helper-text</code> slot in CdrInput has been deprecated and replaced with an identical <code>helper-text-bottom</code> slot. This was done to be consistent with the <a href="#cdrinput-updates">new <code>helper-text-top</code> slot</a>.</p>
<h3 id="cdrtext-and-space-utilities" tabindex="-1"><a class="header-anchor" href="#cdrtext-and-space-utilities">#</a> CdrText and Space Utilities</h3>
<p>In order to align with performance goals, we are working on a long-term deprecation of the CdrText <code>modifier</code> property and the <code>space</code> utility classes. Both of these features require loading a large CSS asset even if you are only using a handful of the type or space options. Instead, you should begin using the <RouterLink to="/tokens/all-tokens/">Cedar Design Tokens</RouterLink> to apply the same styles using a custom CSS class. Projects that are currently using these features should instead use the design tokens for any new work, and incrementally migrate their existing usage when possible.</p>
<p>Example CdrText modifier update:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;cdr-text modifier="body-300">Old&lt;/cdr-text>

&lt;cdr-text class="your-custom-type-class">New&lt;/cdr-text>
.your-custom-type-class {
  @include cdr-text-body-300;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Example Space utility update:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;div class="cdr-mb-space-one-x">old&lt;/div>

&lt;div class="your-custom-space-class">new&lt;/div>
.your-custom-space-class {
  margin-bottom: $cdr-space-one-x
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="breaking-changes" tabindex="-1"><a class="header-anchor" href="#breaking-changes">#</a> Breaking Changes</h2>
<h3 id="component-variables" tabindex="-1"><a class="header-anchor" href="#component-variables">#</a> Component Variables</h3>
<ul>
<li>We have created a new <a href="../../components/component-variables">Component Variables examples page</a> with more information on how to use <code>@rei/cdr-component-variables</code>.</li>
<li>We have added primary and secondary mixins for input, select, radio, and checkbox to control how they render on different background colors.</li>
<li>We have refactored how the form labels work inside Cedar to reduce duplication. Styles for CdrRadio and CdrCheckbox can now be found in the <RouterLink to="/components/component-variables/#CdrLabelWrapper">CdrLabelWrapper mixins</RouterLink>, while styles for CdrInput and CdrSelect can now be found in the <RouterLink to="/components/component-variables/#CdrLabelStandalone">CdrLabelStandalone mixins</RouterLink>. The <code>form-label.vars.scss</code> file has been removed. See the chart below for information on re-mapping those mixins.</li>
</ul>
<table>
<thead>
<tr>
<th>Old Mixin</th>
<th>New Mixin</th>
</tr>
</thead>
<tbody>
<tr>
<td>cdr-input-base-label-mixin</td>
<td>cdr-label-standalone-label-mixin</td>
</tr>
<tr>
<td>cdr-input-required-label-mixin</td>
<td>cdr-label-standalone-label-mixin</td>
</tr>
<tr>
<td>cdr-input-info-container-mixin</td>
<td>cdr-label-standalone-info-mixin</td>
</tr>
<tr>
<td>cdr-input-helper-text-mixin</td>
<td>cdr-label-standalone-helper-mixin</td>
</tr>
<tr>
<td>cdr-input-base-label-disabled-mixin</td>
<td>cdr-label-standalone-disabled-mixin</td>
</tr>
<tr>
<td>cdr-select-base-label-mixin</td>
<td>cdr-label-standalone-label-mixin</td>
</tr>
<tr>
<td>cdr-select-base-label-disabled-mixin</td>
<td>cdr-label-standalone-disabled-mixin</td>
</tr>
<tr>
<td>cdr-select-required-label-mixin</td>
<td>cdr-label-standalone-label-mixin</td>
</tr>
<tr>
<td>cdr-select-info-container-mixin</td>
<td>cdr-label-standalone-info-mixin</td>
</tr>
<tr>
<td>cdr-select-helper-text-mixin</td>
<td>cdr-label-standalone-helper-mixin</td>
</tr>
<tr>
<td>cdr-label-base-mixin</td>
<td>cdr-label-wrapper-base-mixin, cdr-label-wrapper-primary-mixin</td>
</tr>
<tr>
<td>cdr-label-disabled-mixin</td>
<td>cdr-label-wrapper-disabled-mixin</td>
</tr>
<tr>
<td>cdr-label-small-mixin</td>
<td>cdr-label-wrapper-small-mixin</td>
</tr>
<tr>
<td>cdr-label-large-mixin</td>
<td>cdr-label-wrapper-large-mixin</td>
</tr>
</tbody>
</table>
<h3 id="removals" tabindex="-1"><a class="header-anchor" href="#removals">#</a> Removals</h3>
<p>In accordance with our deprecation policy, features that were deprecated in the <RouterLink to="/release-notes/spring-2020/#deprecations">Spring 2020 release</RouterLink> or prior have been removed from Cedar.</p>
<ul>
<li>Color utility classes (<code>cdr-bg--</code>) have been removed. Use the <code>cdr-color-background-</code> format instead.</li>
<li>Generic tokens, mixins, and CdrText modifiers for <code>cdr-text-utility-n00</code> have been removed. Use the <code>cdr-text-utility-sans-n00</code> format instead.</li>
<li>Color tokens using <code>lightmode</code> or <code>darkmode</code> have beeen removed. See the <RouterLink to="/release-notes/spring-2020/#color-token-updates">spring release notes</RouterLink> for more information on updating</li>
<li>CdrDataTable component has been removed. Use <a href="../../components/table">CdrTable</a> or <a href="https://git.rei.com/projects/FEDCOMP/repos/data-table/browse" target="_blank" rel="noopener noreferrer">@rei/data-table<ExternalLinkIcon/></a> instead.</li>
<li>The <code>compact</code> modifier for CdrCheckbox and CdrRadio has been removed. Use <code>size=&quot;small&quot;</code> instead.</li>
<li>The <code>tabChange</code> event has been removed from CdrTabs. Use <code>tab-change</code> instead.</li>
<li>The <code>label</code> prop for CdrAccordion has been removed. Use the <code>label</code> slot instead.</li>
</ul>
</cdr-doc-table-of-contents-shell>
</template>
