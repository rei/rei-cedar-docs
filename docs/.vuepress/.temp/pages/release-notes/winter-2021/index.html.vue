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
<td>^8.x.x</td>
</tr>
<tr>
<td><code>@rei/cdr-tokens</code></td>
<td>^8.x.x</td>
</tr>
<tr>
<td><code>@rei/cdr-component-variables</code></td>
<td>^6.x.x</td>
</tr>
</tbody>
</table>
<ul>
<li>If your project depends on any shared component packages (i.e, FEDPACK, FEDCOMP, FEDPAGES), you will want to update those packages to the new version of Cedar before updating your micro-site.</li>
</ul>
<h2 id="_8-0-6" tabindex="-1"><a class="header-anchor" href="#_8-0-6">#</a> 8.0.6</h2>
<h3 id="bug-fixes" tabindex="-1"><a class="header-anchor" href="#bug-fixes">#</a> Bug Fixes</h3>
<ul>
<li>Text heading tokens have been updated to address an issue with font ligatures not applying correctly</li>
</ul>
<h2 id="_8-0-5" tabindex="-1"><a class="header-anchor" href="#_8-0-5">#</a> 8.0.5</h2>
<h3 id="bug-fixes-1" tabindex="-1"><a class="header-anchor" href="#bug-fixes-1">#</a> Bug Fixes</h3>
<ul>
<li>CdrModal has been updated to address an issue with managing event handlers which could result in errors being thrown when the window is resized</li>
</ul>
<h2 id="_8-0-4" tabindex="-1"><a class="header-anchor" href="#_8-0-4">#</a> 8.0.4</h2>
<h3 id="bug-fixes-2" tabindex="-1"><a class="header-anchor" href="#bug-fixes-2">#</a> Bug Fixes</h3>
<ul>
<li>CdrModal has been updated to resolve an issue with the iOS bug fix released in Cedar 8.0.1</li>
</ul>
<h2 id="_8-0-3" tabindex="-1"><a class="header-anchor" href="#_8-0-3">#</a> 8.0.3</h2>
<h3 id="bug-fixes-3" tabindex="-1"><a class="header-anchor" href="#bug-fixes-3">#</a> Bug Fixes</h3>
<ul>
<li>CdrModal adds some additional <code>padding-right</code> when it's content is overflowing. <code>12px</code> is added when floating MacOS or iOS scrollbars are detected, and <code>4px</code> is added for regular permanent scrollbars. Additional padding can be added by consumers by customizing the CdrModal content slot.</li>
</ul>
<h2 id="_8-0-2" tabindex="-1"><a class="header-anchor" href="#_8-0-2">#</a> 8.0.2</h2>
<h3 id="bug-fixes-4" tabindex="-1"><a class="header-anchor" href="#bug-fixes-4">#</a> Bug Fixes</h3>
<ul>
<li>CdrAccordion <code>unwrap</code> breakpoint logic has been updated to handle cross browser issues and more closely match the behavior of media queries</li>
</ul>
<h2 id="_8-0-1" tabindex="-1"><a class="header-anchor" href="#_8-0-1">#</a> 8.0.1</h2>
<h3 id="bug-fixes-5" tabindex="-1"><a class="header-anchor" href="#bug-fixes-5">#</a> Bug Fixes</h3>
<ul>
<li>CdrModal has been updated to better handle scrolling on iOS Safari</li>
</ul>
<h2 id="new-features" tabindex="-1"><a class="header-anchor" href="#new-features">#</a> New Features</h2>
<h3 id="cdrchip-component" tabindex="-1"><a class="header-anchor" href="#cdrchip-component">#</a> CdrChip Component</h3>
<p>We have created a new CdrChip component that can be used to highlight and signal user selection and input in cases where a basic form element or button do not suffice.</p>
<p>See the <a href="../../components/chips">CdrChip docs page</a> for more information.</p>
<h3 id="cdrgrid-component" tabindex="-1"><a class="header-anchor" href="#cdrgrid-component">#</a> CdrGrid Component</h3>
<p>We have released a new CdrGrid component that is a simple wrapper around <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout" target="_blank" rel="noopener noreferrer">css-grid<ExternalLinkIcon/></a>. This component is intended to replace the flexbox based CdrRow and CdrCol components. CdrGrid allows for creating the same layouts as CdrRow and CdrCol but with less markup and less CSS assets required, improving performance while also simplifying our code.</p>
<p>See the <a href="../../components/grid">CdrGrid docs page</a> for more information.</p>
<h3 id="cdrimg-refactor" tabindex="-1"><a class="header-anchor" href="#cdrimg-refactor">#</a> CdrImg Refactor</h3>
<p>We refactored CdrImg to no longer use <code>background-image</code> to load images, which allows for any native <code>&lt;img&gt;</code> atttribute to be used with CdrImg. This not only makes the CdrImg component more flexible but opens up several opportunities to improve performance for image heavy pages. The <code>srcset</code> and <code>sizes</code> property can now be used to load optimal images for a users screen size, or <code>loading=&quot;lazy&quot;</code> can be used to enable lazy loading of images.</p>
<p>We did <a href="#cdrimg-responsive-ratio-and-lazy-loading">remove the responsive ratio and rei-lazy-image-loader</a> related properties as they are no longer necessary.</p>
<h3 id="cdrpagination-intra-page-navigation" tabindex="-1"><a class="header-anchor" href="#cdrpagination-intra-page-navigation">#</a> CdrPagination Intra-Page Navigation</h3>
<p>CdrPagination was originally designed for page-level navigation where the user navigates to a new URL. This pattern did not support cases where content is paginated inside of a page, for example when browsing through reviews of a product. CdrPagination now supports two additional properties: <code>linkTag</code> and <code>forLabel</code> which allow for creating a button based navigation that is linked to the content it paginates. See the <a href="../../components/pagination#intra-page-navigation">CdrPagination docs</a> for more information. For consumers using CdrPagination for page-level navigation there are no changes required.</p>
<h3 id="cdraccordion-unwrapped" tabindex="-1"><a class="header-anchor" href="#cdraccordion-unwrapped">#</a> CdrAccordion Unwrapped</h3>
<p>CdrAccordionGroup now accepts an <code>unwrap</code> property which renders the accordion headings and content in a plain &quot;unwrapped&quot; state. This can be used to render content in full at desktop view but display it in a collapsed accordion at mobile view. The <code>unwrap</code> property accepts either a boolean which toggles the behavior on and off, or a list of breakpoints <code>'@xs @sm @md @lg'</code> which activates it at the given breakpoint(s). See the <a href="../../components/accordion#unwrapped">CdrAccordion docs</a> for more information.</p>
<h3 id="sale-color-update" tabindex="-1"><a class="header-anchor" href="#sale-color-update">#</a> Sale Color Update</h3>
<ul>
<li>We have updated our sale color tokens to align with brand guidelines</li>
<li>We have created a new $cdr-color-background-sale token. This should be used in conjunction with $cdr-color-text-inverse.</li>
</ul>
<h2 id="bug-fixes-6" tabindex="-1"><a class="header-anchor" href="#bug-fixes-6">#</a> Bug Fixes</h2>
<h3 id="cdrmodal" tabindex="-1"><a class="header-anchor" href="#cdrmodal">#</a> CdrModal</h3>
<p>CdrModal no longer applies a fade-out gradient on overflowing content. Fading out content conflicts with accessibility requirements related to text contrast.
Padding to the right of content has been removed to accommodate more display patterns.</p>
<h2 id="deprecations" tabindex="-1"><a class="header-anchor" href="#deprecations">#</a> Deprecations</h2>
<h3 id="cdrrow-and-cdrcol" tabindex="-1"><a class="header-anchor" href="#cdrrow-and-cdrcol">#</a> CdrRow and CdrCol</h3>
<p>CdrRow and CdrCol have been deprecated in favor of <a href="../../components/grid">CdrGrid</a>. Teams using CdrRow and CdrCol should use CdrGrid for any new work, and begin incrementally migrating any existing usage.</p>
<h3 id="cdrtext-modifier-and-space-utility-classes" tabindex="-1"><a class="header-anchor" href="#cdrtext-modifier-and-space-utility-classes">#</a> CdrText Modifier and Space Utility Classes</h3>
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
<h3 id="cdrimg-responsive-ratio-and-lazy-loading" tabindex="-1"><a class="header-anchor" href="#cdrimg-responsive-ratio-and-lazy-loading">#</a> CdrImg Responsive Ratio and Lazy loading</h3>
<ul>
<li>The <code>ratioSm</code>, <code>ratioMd</code>, and <code>ratioLg</code> properties have been removed as they were not being used and do not match the responsive property patterns in use in the Cedar components. Please reach out in Slack at <a href="https://rei.slack.com/messages/CA58YCGN4" target="_blank" rel="noopener noreferrer">#cedar-user-support<ExternalLinkIcon/></a> if you need assistance building images with responsive ratios.</li>
<li>We have removed the <code>lazy</code> and <code>lazyOpts</code> properties which were tied to the <a href="https://git.rei.com/projects/FEDPACK/repos/rei-lazy-image-loader/browse" target="_blank" rel="noopener noreferrer">rei-lazy-image-loader<ExternalLinkIcon/></a> package. Usage of those props should be updated to use <code>loading=&quot;lazy&quot;</code> and the lazy loader package should be removed from your project. If necessary, the <code>data-lazy</code> attributes associated with <code>rei-lazy-image-loader</code> can be manually bound to any instance of CdrImg.</li>
</ul>
<h3 id="cdrtext-css-asset" tabindex="-1"><a class="header-anchor" href="#cdrtext-css-asset">#</a> CdrText CSS Asset</h3>
<p>The CdrText css asset (<code>@rei/cedar/dist/style/cdr-text.css</code>) has been updated to move the CdrText modifier classes into the text utility class (<code>@rei/cedar/dist/style/text.css</code>). The <code>cdr-text</code> base class is also now scoped to the current release to further avoid CSS collissions.</p>
<ul>
<li>If you are using CdrText in conjunction with type mixins from @rei/cdr-tokens should load the <code>cdr-text.css</code> file.</li>
<li>If you are using CdrText with the <code>modifier</code> property will need to load both the <code>cdr-text.css</code> and <code>text.css</code> files. You should also begin incrementally migrating your codebase to use the @rei/cdr-tokens type mixins instead of the CdrText modifiers</li>
<li>If you have any custom CSS that is targeting the <code>.cdr-text</code> class you will need to update that code to target a class or property that you add.</li>
</ul>
<h3 id="cedar-container-mixins" tabindex="-1"><a class="header-anchor" href="#cedar-container-mixins">#</a> Cedar Container Mixins</h3>
<p>The <code>cdr-container</code> and <code>cdr-container-fluid</code> mixins now also apply <code>cdr-text-default</code>. This makes those mixins match the functionality of the Cedar container utility classes.</p>
<h3 id="removals" tabindex="-1"><a class="header-anchor" href="#removals">#</a> Removals</h3>
<p>In accordance with our deprecation policy, features that were deprecated in the <RouterLink to="/release-notes/summer-2020/#deprecations">Summer 2020 release</RouterLink> have been removed from Cedar.</p>
<h4 id="cdrcta-removed" tabindex="-1"><a class="header-anchor" href="#cdrcta-removed">#</a> CdrCta Removed</h4>
<p><RouterLink to="/release-notes/summer-2020/#cdrcta-deprecated-and-merged-with-cdrbutton">CdrCta</RouterLink> has been removed from @rei/cedar, @rei/cdr-tokens, and @rei/cdr-component-variables</p>
<h4 id="space-prop-removed" tabindex="-1"><a class="header-anchor" href="#space-prop-removed">#</a> Space Prop Removed</h4>
<p>The <RouterLink to="/release-notes/summer-2020/#space-property-deprecated">space property</RouterLink> has been removed from @rei/cedar</p>
</cdr-doc-table-of-contents-shell>
</template>
