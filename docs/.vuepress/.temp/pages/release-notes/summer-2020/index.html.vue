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
<td>^6.x.x</td>
</tr>
<tr>
<td><code>@rei/cdr-tokens</code></td>
<td>^6.x.x</td>
</tr>
<tr>
<td><code>@rei/cdr-component-variables</code></td>
<td>^4.x.x</td>
</tr>
<tr>
<td><code>@rei/cedar-icons</code></td>
<td>^2.x.x</td>
</tr>
</tbody>
</table>
<ul>
<li>If your project depends on any shared component packages (i.e, FEDPACK, FEDCOMP, FEDPAGES), you will want to update those packages to the new version of Cedar before updating your micro-site.</li>
</ul>
<h2 id="_6-1-1" tabindex="-1"><a class="header-anchor" href="#_6-1-1">#</a> 6.1.1</h2>
<ul>
<li>Adds <code>small</code> and <code>medium</code> options for the <code>gutter</code> property of CdrRow. Note that CdrRow has built in responsive gutter behavior, and that the CdrGrid responsive properties target breakpoints and above rather than just specific breakpoints. For example, the default CdrGrid gutter behavior is <code>&lt;cdr-row gutter=&quot;small small@sm medium@md medium@lg&quot;&gt;</code>.</li>
</ul>
<h2 id="_6-1-0" tabindex="-1"><a class="header-anchor" href="#_6-1-0">#</a> 6.1.0</h2>
<ul>
<li>Adds new <code>IconMap</code> component.</li>
<li>Removes deprecated media query mixin from <code>cdr-container</code> mixin.</li>
<li>Includes correct <code>cdr-container</code> mixins in LESS output.</li>
<li>Removes <code>min-height</code> value on table cells.</li>
<li>Improves underline logic in CdrTabs, simplifies tab header markup.</li>
<li>Removes <code>id</code> attribute from CdrModal close button.</li>
</ul>
<h2 id="_6-0-0" tabindex="-1"><a class="header-anchor" href="#_6-0-0">#</a> 6.0.0</h2>
<h2 id="new-features" tabindex="-1"><a class="header-anchor" href="#new-features">#</a> New Features</h2>
<h3 id="mixin-and-token-usage" tabindex="-1"><a class="header-anchor" href="#mixin-and-token-usage">#</a> Mixin and Token Usage</h3>
<p>To align with performance goals for the co-op, we have updated our guidance around the <a href="../../components/utilities">Cedar utility classes</a> to recommend that customer facing projects instead  use <a href="../../tokens/all-tokens">Cedar tokens</a> to apply styling.</p>
<p>Cedar utility class files often contain a large number of options, and only a small number of them are used in most projects. By using Cedar tokens instead of utility classes, you can ensure that your project is only loading the styles you are directly using. Special attention should be paid to the space (<code>@rei/cedar/dist/style/space.css</code>) and text (<code>@rei/cedar/dist/style/text.css</code> or <code>@rei/cedar/dist/style/cdr-text.css</code>) utility class files as they are especially large.</p>
<ul>
<li>The <a href="../../components/text">CdrText page</a> has been updated to show examples of using mixins instead of the modifier/utilities.</li>
<li>CdrText related reset logic has been moved out of the CdrText CSS file and into the Cedar CSS reset file. The CdrText CSS file only needs to be loaded if you are using the <code>modifier</code> property to style text.</li>
<li>We have deprecated the <a href="#space-property-deprecated">space property</a> in the Cedar components.</li>
<li>We have added mixins for <a href="#mixins-for-sr-only-and-cdr-container">sr-only and cdr-container</a> so that they can be used in place of the equivalent utility classes.</li>
</ul>
<h3 id="cdralert-component" tabindex="-1"><a class="header-anchor" href="#cdralert-component">#</a> CdrAlert Component</h3>
<p>CdrAlert is a simple wrapper component that allows for composing various alert layouts, and now officially supported in the system. See the <RouterLink to="/components/alert/">CdrAlert docs</RouterLink> for more details and usage guidelines.</p>
<h3 id="cdrformgroup-component" tabindex="-1"><a class="header-anchor" href="#cdrformgroup-component">#</a> CdrFormGroup Component</h3>
<p>CdrFormGroup is a simple wrapper component for grouping together form elements with a common label. See the <RouterLink to="/components/form-group/">CdrFormGroup docs</RouterLink> for more details and usage guidelines.</p>
<h3 id="cdrbutton-icon-left-and-right-slots" tabindex="-1"><a class="header-anchor" href="#cdrbutton-icon-left-and-right-slots">#</a> CdrButton Icon Left and Right Slots</h3>
<p>CdrButton has updated with 2 additional slots, <code>icon-left</code> and <code>icon-right</code>, for rendering icons to the left or right of the button text. Using these slots ensures that the icon is properly spaced within the button and that its size adjusts with the button size. The original <code>icon</code> slot can still be used for rendering <code>icon-only</code> buttons. See the <RouterLink to="/components/buttons/#slots">CdrButton docs</RouterLink> for more details.</p>
<h3 id="cdrbutton-link-style" tabindex="-1"><a class="header-anchor" href="#cdrbutton-link-style">#</a> CdrButton Link Style</h3>
<p>CdrButton has been updated to add new modifier: <code>link</code>. This is intended to visually style a CdrButton like a link, but with the same size and full-width options of a normal CdrButton. This allows for layouts which use links in the place of or alongside CdrButtons, while also providing an option for links with the bigger click target of a button. CdrLink should still be used for rendering a link inline with other text. See the <RouterLink to="/components/buttons/#link-style">CdrButton docs</RouterLink> for more details.</p>
<h3 id="cdrrating-rounding-logic" tabindex="-1"><a class="header-anchor" href="#cdrrating-rounding-logic">#</a> CdrRating Rounding Logic</h3>
<p>CdrRating has been updated to round the displayed rating to the nearest 1/10th rather than the nearest 1/4. Whole number values now display an empty decimal place. For example, an average rating of &quot;3.71&quot; now renders as &quot;3.7&quot; rather than &quot;3.75&quot;, while a rating of &quot;3&quot; now renders as &quot;3.0&quot; rather than &quot;3&quot;. Visually the star icons still render in 1/4 increments as they did previously.</p>
<h3 id="media-query-mixins-for-breakpoint-and-below" tabindex="-1"><a class="header-anchor" href="#media-query-mixins-for-breakpoint-and-below">#</a> Media Query Mixins For Breakpoint And Below</h3>
<p>We have updated our <RouterLink to="/foundation/responsive/#scss-less-utilities">media queries</RouterLink> to add mixins that match below a given breakpoint. We have also renamed some of our existing media query mixins to follow this naming convention</p>
<table>
<thead>
<tr>
<th>Mixin Name</th>
<th>Target</th>
</tr>
</thead>
<tbody>
<tr>
<td>cdr-sm-mq-down</td>
<td>Below $cdr-breakpoint-sm</td>
</tr>
<tr>
<td>cdr-md-mq-down</td>
<td>Below $cdr-breakpoint-md</td>
</tr>
<tr>
<td>cdr-lg-mq-down</td>
<td>Below $cdr-breakpoint-lg</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td>cdr-xs-mq-up</td>
<td>$cdr-breakpoint-xs and Above</td>
</tr>
<tr>
<td>cdr-sm-mq-up</td>
<td>$cdr-breakpoint-sm and Above</td>
</tr>
<tr>
<td>cdr-md-mq-up</td>
<td>$cdr-breakpoint-md and Above</td>
</tr>
<tr>
<td>cdr-lg-mq-up</td>
<td>$cdr-breakpoint-lg and Above</td>
</tr>
</tbody>
</table>
<h3 id="mixins-for-sr-only-and-cdr-container" tabindex="-1"><a class="header-anchor" href="#mixins-for-sr-only-and-cdr-container">#</a> Mixins for sr-only and cdr-container</h3>
<p>Cedar tokens now includes mixins for the screen-reader only and container utility classes. This gives consumers the option of skipping loading the utility class files and instead just inlining the CSS that they need. The new mixins are named <code>cdr-display-sr-only</code>, <code>cdr-display-sr-focusable</code>, <code>cdr-container</code>, and <code>cdr-container-fluid</code>.</p>
<h3 id="placeholder-selectors-for-scss-mixins" tabindex="-1"><a class="header-anchor" href="#placeholder-selectors-for-scss-mixins">#</a> Placeholder Selectors for SCSS Mixins</h3>
<p>The SCSS distribution of Cedar tokens now includes <a href="https://sass-lang.com/documentation/style-rules/placeholder-selectors" target="_blank" rel="noopener noreferrer">placeholder selectors<ExternalLinkIcon/></a>. If you are using the same mixin multiple times then switching to placeholder selectors will allow SCSS to include that style only once. The placeholder selectors have the same names as their mixin equivalents, but are invoked by using <code>@extend %mixin-name</code> rather than <code>@include mixin-name</code>:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>.mixin-example {
  @include cdr-display-sr-only;
}

.placeholder-example {
  @extend %cdr-display-sr-only;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="cdrtabs-auto-height" tabindex="-1"><a class="header-anchor" href="#cdrtabs-auto-height">#</a> CdrTabs Auto Height</h3>
<p>CdrTabs previously required a static <code>height</code> value to be set, with overflowing content rendered with a scrollbar. CdrTabs now accepts <code>height=&quot;auto&quot;</code> which allows for rendering tabs with variable height based on the size of it's content. See the <RouterLink to="/components/tabs/#auto">CdrTabs docs</RouterLink> for more details.</p>
<h3 id="cdrtabs-background-color" tabindex="-1"><a class="header-anchor" href="#cdrtabs-background-color">#</a> CdrTabs Background Color</h3>
<p>In order to support CdrTabs that are rendered on non-primary backgrounds, we have added a <code>background-color</code> property that can be used to set the gradients inside CdrTabs to match it's background.</p>
<h2 id="deprecations" tabindex="-1"><a class="header-anchor" href="#deprecations">#</a> Deprecations</h2>
<h3 id="cdrcta-deprecated-and-merged-with-cdrbutton" tabindex="-1"><a class="header-anchor" href="#cdrcta-deprecated-and-merged-with-cdrbutton">#</a> CdrCta Deprecated and Merged with CdrButton</h3>
<p>The CdrCta component has been deprecated and its functionality has been merged with CdrButton. The <code>sale</code>, <code>dark</code>, <code>elevated</code>, and right-aligned-icon styles from CdrCta have all been added as options in CdrButton. This was intended to provide more flexibility in constructing calls to action, while also adding additional styling options for rendering CdrButtons.</p>
<p>See the <a href="../../components/buttons#button-with-link-tag">CdrButton with link tag</a> and <a href="../../components/buttons#alternative-styles">CdrButton alternative styles</a> for more information.</p>
<p>In order to update existing instances of CdrCta to instead use CdrButton:</p>
<ul>
<li>Pass the <code>icon-caret-left</code> CdrIcon into the <code>icon-right</code> slot. Note that this can be replaced with any icon, or the icon can be omitted completely.</li>
<li>Update the <code>ctaStyle</code> property as needed and pass it into the <code>modifier</code> prop of CdrButton</li>
</ul>
<table>
<thead>
<tr>
<th>CdrCta <code>ctaStyle</code></th>
<th>CdrButton <code>modifier</code></th>
</tr>
</thead>
<tbody>
<tr>
<td>brand</td>
<td>primary</td>
</tr>
<tr>
<td>light</td>
<td>secondary</td>
</tr>
<tr>
<td>sale</td>
<td>sale</td>
</tr>
<tr>
<td>dark</td>
<td>dark</td>
</tr>
</tbody>
</table>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>// "sale" CdrCta migrated to a CdrButton
&lt;cdr-cta cta-style="sale">Call To Action&lt;/cdr-cta>
&lt;cdr-button modifier="sale" tag="a" href="rei.com">
  Call To Action &lt;icon-caret-left slot="icon-right"/>
&lt;/cdr-button>

// "brand" CdrCta migrated to a CdrButton
&lt;cdr-cta cta-style="brand">Call To Action&lt;/cdr-cta>
&lt;cdr-button modifier="primary" tag="a" href="rei.com">
  Call To Action &lt;icon-caret-left slot="icon-right"/>
&lt;/cdr-button>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="cdrcta-tokens" tabindex="-1"><a class="header-anchor" href="#cdrcta-tokens">#</a> CdrCta Tokens</h3>
<p>We have deprecated all of the <code>cta</code> tokens and merged them with our <code>button</code> tokens. The CTA tokens will be removed in the winter 2021 release. Mappings between the <code>CTA</code> and <code>button</code> tokens are listed below:</p>
<table>
<thead>
<tr>
<th>Deprecated Token</th>
<th>Equivalent Token</th>
</tr>
</thead>
<tbody>
<tr>
<td>cdr-color-text-cta-dark</td>
<td>cdr-color-text-button-dark</td>
</tr>
<tr>
<td>cdr-color-text-cta-dark-hover</td>
<td>cdr-color-text-button-dark-hover</td>
</tr>
<tr>
<td>cdr-color-text-cta-dark-active</td>
<td>cdr-color-text-button-dark-active</td>
</tr>
<tr>
<td>cdr-color-text-cta-dark-disabled</td>
<td>cdr-color-text-button-dark-disabled</td>
</tr>
<tr>
<td>cdr-color-background-cta-dark-rest</td>
<td>cdr-color-background-button-dark-rest</td>
</tr>
<tr>
<td>cdr-color-background-cta-dark-active</td>
<td>cdr-color-background-button-dark-active</td>
</tr>
<tr>
<td>cdr-color-background-cta-dark-hover</td>
<td>cdr-color-background-button-dark-hover</td>
</tr>
<tr>
<td>cdr-color-border-cta-dark-rest</td>
<td>cdr-color-border-button-dark-rest</td>
</tr>
<tr>
<td>cdr-color-border-cta-dark-active</td>
<td>cdr-color-border-button-dark-active</td>
</tr>
<tr>
<td>cdr-color-border-cta-dark-active-inset</td>
<td>cdr-color-border-button-dark-active-inset</td>
</tr>
<tr>
<td>cdr-color-border-cta-dark-hover</td>
<td>cdr-color-border-button-dark-hover</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td>cdr-color-text-cta-light</td>
<td>cdr-color-text-button-secondary</td>
</tr>
<tr>
<td>cdr-color-text-cta-light-hover</td>
<td>cdr-color-text-button-secondary-hover</td>
</tr>
<tr>
<td>cdr-color-text-cta-light-active</td>
<td>cdr-color-text-button-secondary-active</td>
</tr>
<tr>
<td>cdr-color-text-cta-light-disabled</td>
<td>cdr-color-text-button-secondary-disabled</td>
</tr>
<tr>
<td>cdr-color-background-cta-light-rest</td>
<td>cdr-color-background-button-secondary-rest</td>
</tr>
<tr>
<td>cdr-color-background-cta-light-active</td>
<td>cdr-color-background-button-secondary-active</td>
</tr>
<tr>
<td>cdr-color-background-cta-light-hover</td>
<td>cdr-color-background-button-secondary-hover</td>
</tr>
<tr>
<td>cdr-color-background-cta-light-disabled</td>
<td>cdr-color-background-button-secondary-disabled</td>
</tr>
<tr>
<td>cdr-color-border-cta-light-rest</td>
<td>cdr-color-border-button-secondary-rest</td>
</tr>
<tr>
<td>cdr-color-border-cta-light-active</td>
<td>cdr-color-border-button-secondary-active</td>
</tr>
<tr>
<td>cdr-color-border-cta-light-active-inset</td>
<td>cdr-color-border-button-secondary-active-inset</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td>cdr-color-text-cta-brand</td>
<td>cdr-color-text-button-primary</td>
</tr>
<tr>
<td>cdr-color-text-cta-brand-hover</td>
<td>cdr-color-text-button-primary-hover</td>
</tr>
<tr>
<td>cdr-color-text-cta-brand-active</td>
<td>cdr-color-text-button-primary-active</td>
</tr>
<tr>
<td>cdr-color-text-cta-brand-disabled</td>
<td>cdr-color-text-button-primary-disabled</td>
</tr>
<tr>
<td>cdr-color-background-cta-brand-rest</td>
<td>cdr-color-background-button-primary-rest</td>
</tr>
<tr>
<td>cdr-color-background-cta-brand-active</td>
<td>cdr-color-background-button-primary-active</td>
</tr>
<tr>
<td>cdr-color-background-cta-brand-hover</td>
<td>cdr-color-background-button-primary-hover</td>
</tr>
<tr>
<td>cdr-color-border-cta-brand-rest</td>
<td>cdr-color-border-button-primary-rest</td>
</tr>
<tr>
<td>cdr-color-border-cta-brand-active</td>
<td>cdr-color-border-button-primary-active</td>
</tr>
<tr>
<td>cdr-color-border-cta-brand-active-inset</td>
<td>cdr-color-border-button-primary-active-inset</td>
</tr>
<tr>
<td>cdr-color-border-cta-brand-hover</td>
<td>cdr-color-border-button-primary-hover</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td>cdr-color-text-cta-sale</td>
<td>cdr-color-text-button-sale</td>
</tr>
<tr>
<td>cdr-color-text-cta-sale-hover</td>
<td>cdr-color-text-button-sale-hover</td>
</tr>
<tr>
<td>cdr-color-text-cta-sale-active</td>
<td>cdr-color-text-button-sale-active</td>
</tr>
<tr>
<td>cdr-color-text-cta-sale-disabled</td>
<td>cdr-color-text-button-sale-disabled</td>
</tr>
<tr>
<td>cdr-color-background-cta-sale-rest</td>
<td>cdr-color-background-button-sale-rest</td>
</tr>
<tr>
<td>cdr-color-background-cta-sale-active</td>
<td>cdr-color-background-button-sale-active</td>
</tr>
<tr>
<td>cdr-color-background-cta-sale-hover</td>
<td>cdr-color-background-button-sale-hover</td>
</tr>
<tr>
<td>cdr-color-border-cta-light-hover</td>
<td>cdr-color-border-button-secondary-hover</td>
</tr>
<tr>
<td>cdr-color-border-cta-sale-rest</td>
<td>cdr-color-border-button-sale-rest</td>
</tr>
<tr>
<td>cdr-color-border-cta-sale-active</td>
<td>cdr-color-border-button-sale-active</td>
</tr>
<tr>
<td>cdr-color-border-cta-sale-active-inset</td>
<td>cdr-color-border-button-sale-active-inset</td>
</tr>
<tr>
<td>cdr-color-border-cta-sale-hover</td>
<td>cdr-color-border-button-sale-hover</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td>cdr-color-background-cta-default-disabled</td>
<td>cdr-color-background-button-default-disabled</td>
</tr>
<tr>
<td>cdr-color-border-cta-default-disabled</td>
<td>cdr-color-border-button-default-disabled</td>
</tr>
</tbody>
</table>
<h3 id="space-property-deprecated" tabindex="-1"><a class="header-anchor" href="#space-property-deprecated">#</a> Space Property Deprecated</h3>
<p>Many of the Cedar components accepted a <code>space</code> property which applied a spacing utility class to that component. As part of our efforts to improve performance by de-coupling the utility classes from the components we have deprecated this property in all of our components. This change affects the following components: CdrButton, CdrCheckbox, CdrCta, CdrDataTable, CdrIcon, CdrInput, CdrLink, CdrList, CdrQuote, CdrRadio, CdrRating, CdrSelect, CdrText. Spacing utility classes can still be applied to any of these components by simply passing the utility class in via the <code>class</code> prop instead of <code>space</code>, for example:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;cdr-button space="cdr-mb-space-one-x">Deprecated&lt;/cdr-button>
&lt;cdr-button class="cdr-mb-space-one-x">Supported&lt;/cdr-button>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="cdrbutton-icon-utility-class-no-longer-needed" tabindex="-1"><a class="header-anchor" href="#cdrbutton-icon-utility-class-no-longer-needed">#</a> CdrButton Icon Utility Class No Longer Needed</h3>
<p>The functionality of the <code>cdr-button__icon</code> utility class has been built directly into CdrButton. You can safely remove this class from any instances of CdrButton that uses CdrIcon.</p>
<h3 id="media-query-mixin-renaming" tabindex="-1"><a class="header-anchor" href="#media-query-mixin-renaming">#</a> Media Query Mixin Renaming</h3>
<p>In order to support adding the <a href="#media-query-mixins-for-breakpoint-and-below">breakpoint and below media queries</a>, we have renamed some of the existing media query mixins to follow that naming convention.</p>
<table>
<thead>
<tr>
<th>Deprecated Mixin</th>
<th>New Mixin</th>
</tr>
</thead>
<tbody>
<tr>
<td>cdr-xs-mq</td>
<td>cdr-xs-mq-up</td>
</tr>
<tr>
<td>cdr-sm-mq</td>
<td>cdr-sm-mq-up</td>
</tr>
<tr>
<td>cdr-md-mq</td>
<td>cdr-md-mq-up</td>
</tr>
<tr>
<td>cdr-lg-mq</td>
<td>cdr-lg-mq-up</td>
</tr>
</tbody>
</table>
<h2 id="bug-fixes" tabindex="-1"><a class="header-anchor" href="#bug-fixes">#</a> Bug Fixes</h2>
<h3 id="cdrmodal-smooth-scroll" tabindex="-1"><a class="header-anchor" href="#cdrmodal-smooth-scroll">#</a> CdrModal Smooth Scroll</h3>
<p>CdrModal now renders its closing animation properly when the <code>scroll-behavior</code> of the page is set to <code>smooth</code>.</p>
<h2 id="breaking-changes" tabindex="-1"><a class="header-anchor" href="#breaking-changes">#</a> Breaking Changes</h2>
<h3 id="cdricon-a11y-enhancements" tabindex="-1"><a class="header-anchor" href="#cdricon-a11y-enhancements">#</a> CdrIcon a11y Enhancements</h3>
<p>We have improved the accessibility of the CdrIcon components by moving the <code>role=&quot;presentation&quot;</code> attribute from the root element onto the path element. The CdrIcon components now add <code>aria-hidden=&quot;true&quot;</code> to their root element by default. The meaning of the icon should either be explained by the visible text around it, or by including screenreader-only text using the <code>cdr-display-sr-only</code> utility class or mixin. <a href="../../components/icons#accessibility">See the CdrIcon accessibility section</a> for more details.</p>
<h3 id="cdrmodal-a11y-fix" tabindex="-1"><a class="header-anchor" href="#cdrmodal-a11y-fix">#</a> CdrModal a11y Fix</h3>
<p>We have removed the <code>role=&quot;presentation&quot;</code> attribute from CdrModal as it is not needed for accessibility.</p>
<h3 id="warning-and-error-icons" tabindex="-1"><a class="header-anchor" href="#warning-and-error-icons">#</a> Warning and Error Icons</h3>
<p>We have updated our icon library to use circular icons for &quot;error&quot; states and triangular icons for &quot;warning&quot; states.</p>
<p>To align with this we have made the following breaking changes to our <a href="https://rei.github.io/cedar-icons/#/" target="_blank" rel="noopener noreferrer">icon library<ExternalLinkIcon/></a>:</p>
<table>
<thead>
<tr>
<th>old asset name</th>
<th>new asset name</th>
</tr>
</thead>
<tbody>
<tr>
<td>warning-stroke.svg</td>
<td>error-stroke.svg</td>
</tr>
<tr>
<td>warning-fill.svg</td>
<td>error-fill.svg</td>
</tr>
<tr>
<td>warning-tri.svg</td>
<td>warning-fill.svg</td>
</tr>
<tr>
<td>n/a</td>
<td>warning-stroke.svg</td>
</tr>
</tbody>
</table>
<p>We have also updated the Cedar icon components with the following breaking changes:</p>
<table>
<thead>
<tr>
<th>old component name</th>
<th>new component name</th>
</tr>
</thead>
<tbody>
<tr>
<td>IconWarningStroke</td>
<td>IconErrorStroke</td>
</tr>
<tr>
<td>IconWarningFill</td>
<td>IconErrorFill</td>
</tr>
<tr>
<td>IconWarningTri</td>
<td>IconWarningFill</td>
</tr>
<tr>
<td>n/a</td>
<td>IconWarningStroke</td>
</tr>
</tbody>
</table>
<h3 id="cdrtokens-js-naming-format" tabindex="-1"><a class="header-anchor" href="#cdrtokens-js-naming-format">#</a> CdrTokens JS Naming Format</h3>
<p>In version 6.x.x of @rei/cdr-tokens we updated the naming format for the CJS output to be <code>PascalCase</code> so that it matches the formatting of the ESM output. This was done to ensure that CJS and ESM interoperability works properly. Note that loading the CJS output of tokens directly is not recommended as it results in the entire tokens object being imported.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>// CJS import
var tokens = require('@rei/cdr-tokens');
var CdrColorTextPrimary = tokens.CdrColorTextPrimary;

// ESM import
import { CdrColorTextPrimary } from '@rei/cdr-tokens';
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="removals" tabindex="-1"><a class="header-anchor" href="#removals">#</a> Removals</h3>
<p>In accordance with our deprecation policy, features that were deprecated in the <RouterLink to="/release-notes/winter-2020/#deprecations">Winter 2020 release</RouterLink> have been removed from Cedar.</p>
<h4 id="deprecated-cedar-tokens-and-text-utilities-removed" tabindex="-1"><a class="header-anchor" href="#deprecated-cedar-tokens-and-text-utilities-removed">#</a> Deprecated Cedar Tokens and Text Utilities Removed</h4>
<p>The following mixins and utility classes have been removed. See the linked deprecation mapping for information on updating:</p>
<ul>
<li><RouterLink to="/release-notes/winter-2020/#redwood-display">redwood-display-N0</RouterLink></li>
<li><RouterLink to="/release-notes/winter-2020/#redwood-body">redwood-body-N0</RouterLink></li>
<li><RouterLink to="/release-notes/winter-2020/#maple">maple-utility-N0</RouterLink></li>
<li><RouterLink to="/release-notes/winter-2020/#spruce">spruce-display-N0 and spruce-body-N0</RouterLink></li>
<li><RouterLink to="/release-notes/winter-2020/#headings">cdr-text-display-N00, cdr-text-heading-N00, and cdr-text-subheading-N00</RouterLink></li>
<li><RouterLink to="/release-notes/winter-2020/#type-utility-classes">cdr-text-body</RouterLink></li>
</ul>
</cdr-doc-table-of-contents-shell>
</template>
