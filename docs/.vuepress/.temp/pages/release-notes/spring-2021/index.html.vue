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
<td>^9.x.x</td>
</tr>
<tr>
<td><code>@rei/cdr-tokens</code></td>
<td>^9.x.x</td>
</tr>
<tr>
<td><code>@rei/cdr-component-variables</code></td>
<td>^7.x.x</td>
</tr>
</tbody>
</table>
<ul>
<li>If your project depends on any shared component packages (i.e, FEDPACK, FEDCOMP, FEDPAGES), you will want to update those packages to the new version of Cedar before updating your micro-site.</li>
</ul>
<h2 id="_9-1-1" tabindex="-1"><a class="header-anchor" href="#_9-1-1">#</a> 9.1.1</h2>
<h3 id="bug-fixes" tabindex="-1"><a class="header-anchor" href="#bug-fixes">#</a> Bug Fixes</h3>
<ul>
<li>CdrModal has been updated to address an issue when using the <code>modal</code> slot that would result in errors being thrown when opened</li>
</ul>
<h2 id="_9-1-0" tabindex="-1"><a class="header-anchor" href="#_9-1-0">#</a> 9.1.0</h2>
<h3 id="new-features" tabindex="-1"><a class="header-anchor" href="#new-features">#</a> New Features</h3>
<h4 id="brand-color-updates" tabindex="-1"><a class="header-anchor" href="#brand-color-updates">#</a> Brand Color Updates</h4>
<ul>
<li>We have created a new <code>cdr-color-text-emphasis</code> color token that can be used as a text color in certain situations</li>
<li>Updates the <code>cdr-color-text-brand</code> color token to match match new guidelines</li>
</ul>
<h3 id="bug-fixes-1" tabindex="-1"><a class="header-anchor" href="#bug-fixes-1">#</a> Bug Fixes</h3>
<ul>
<li>Text heading tokens have been updated to address an issue with font ligatures not applying correctly</li>
</ul>
<h2 id="_9-0-1" tabindex="-1"><a class="header-anchor" href="#_9-0-1">#</a> 9.0.1</h2>
<h3 id="bug-fixes-2" tabindex="-1"><a class="header-anchor" href="#bug-fixes-2">#</a> Bug Fixes</h3>
<ul>
<li>CdrModal has been updated to address an issue with managing event handlers which could result in errors being thrown when the window is resized</li>
</ul>
<h2 id="new-features-1" tabindex="-1"><a class="header-anchor" href="#new-features-1">#</a> New Features</h2>
<h3 id="cdrcontainer-component" tabindex="-1"><a class="header-anchor" href="#cdrcontainer-component">#</a> CdrContainer Component</h3>
<p>We have created a new CdrContainer component which encapsulates the basic responsive layout logic for REI pages. This component behaves the same as the <code>cdr-container</code> mixins and is intended as an option for replacing the now deprecated <code>cdr-container</code> utility class. See the <a href="../../components/container">CdrContainer</a> page for more information.</p>
<h3 id="brand-color-updates-1" tabindex="-1"><a class="header-anchor" href="#brand-color-updates-1">#</a> Brand Color Updates</h3>
<p>We have updated the color values of some Cedar tokens to make use of the REI brand color palette. Those tokens are also being used to style the <code>default</code> and <code>sale</code> version of the CdrButton.</p>
<p>We have created a new <code>cdr-color-background-brand-spruce</code> color token that can be used as a background color in certain situations. Note that only the <code>background-primary</code> and <code>background-secondary</code> color tokens are designed to work and have accessible contrast levels against all of Cedar.</p>
<h3 id="cdrbreadcrumb-navigate-event" tabindex="-1"><a class="header-anchor" href="#cdrbreadcrumb-navigate-event">#</a> CdrBreadcrumb Navigate Event</h3>
<p>The CdrBreadcrumb component now emits a <code>navigate</code> event which allows users to override the default link-based navigation or otherwise programmatically handle breadcrumb link clicks. This is intended to support router based navigation without requiring the use of scoped slots. See the <RouterLink to="/components/breadcrumb/#custom-navigation">CdrBreadcrumb</RouterLink> page for more information.</p>
<h3 id="numeric-cdrinput-default-attributes" tabindex="-1"><a class="header-anchor" href="#numeric-cdrinput-default-attributes">#</a> Numeric CdrInput Default Attributes</h3>
<p>CdrInput now accepts a new boolean property called <code>numeric</code> which sets some default attributes for inputs that are composed of numerical characters but are not strictly &quot;number&quot; values themselves. The <code>type=&quot;number&quot;</code> attribute for input elements is designed to be used with actual numbers such as quantities, and does not behave properly with values such as credit cards, security codes, postal codes, or month/year combos.</p>
<p>If a CdrInput receives either <code>type=&quot;number&quot;</code> or <code>:numeric=&quot;true&quot;</code>, it will set default values for the <code>inputmode</code> and <code>pattern</code> attributes which will force mobile devices to launch a numeric only keyboard. Note that solely using <code>:numeric=&quot;true&quot;</code> will not restrict input to only numeric characters, see the <a href="../../components/input#numeric-input">CdrInput page</a> for more information.</p>
<h3 id="form-accessibility-improvements" tabindex="-1"><a class="header-anchor" href="#form-accessibility-improvements">#</a> Form Accessibility Improvements</h3>
<p>We have made a number of improvements to our form components to make them more accessible and consistent:</p>
<ul>
<li>Default <code>autocorrect</code>, <code>autocapitalize</code>, and <code>spellcheck</code> attributes on CdrInput are now set automatically to make input more consistent across different browsers and devices. These attributes can be overridden if needed.</li>
<li>CdrInput and CdrSelect now set <code>aria-required</code> instead of the <code>required</code> attribute on the HTML input element when the <code>required</code> property is passed in. Because validation is handled programmatically <code>aria-required</code> results in a more consistent user experience across browsers than <code>required</code> does.</li>
<li>If a <code>helper-text</code> slot is used in conjunction with CdrInput or CdrSelect that helper text element is now automatically linked to the input field using the <code>aria-describedby</code> attribute. The <code>aria-describedby</code> attribute can still be used to link additional elements to the input if needed.</li>
<li>If the <code>error</code> property is used on a CdrInput, CdrSelect, or CdrFormGroup component the input field gets marked as <code>aria-invalid=&quot;true&quot;</code> and the error message is linked to the input field using the <code>aria-errormessage</code> attribute.</li>
</ul>
<h3 id="form-element-error-role-property" tabindex="-1"><a class="header-anchor" href="#form-element-error-role-property">#</a> Form Element Error Role Property</h3>
<p>CdrFormGroup, CdrInput, and CdrSelect now accept an <code>error-role</code> property that allows for overriding the accessible <code>role</code> attribute on their embedded error state notification. The default value of <code>error-role</code> is <code>status</code>.</p>
<h3 id="cdrmodal-role-property" tabindex="-1"><a class="header-anchor" href="#cdrmodal-role-property">#</a> CdrModal Role Property</h3>
<p>CdrModal now accepts a <code>role</code> property that allows for overriding the accessible <code>role</code> property on the modal content element. The default value of <code>role</code> is <code>dialog</code>.</p>
<h2 id="deprecations" tabindex="-1"><a class="header-anchor" href="#deprecations">#</a> Deprecations</h2>
<h3 id="cdrbreadcrumb-and-cdrpagination-scoped-slots" tabindex="-1"><a class="header-anchor" href="#cdrbreadcrumb-and-cdrpagination-scoped-slots">#</a> CdrBreadcrumb and CdrPagination Scoped Slots</h3>
<p>CdrBreadcrumb and CdrPagination both allow for passing in a scoped slot for rendering their link elements which was intended to support things like vue-router which must override the default link navigation behavior. This feature increased the complexity of both components, making it difficult to maintain and improve the components over time. It requires that consumers bind multiple attributes to the slot element to ensure a consistent UI. Most importantly, this functionality is better served through an event handler which would allow the Cedar components to remain simple and consistent but give consumers the flexibility to customize their behavior.</p>
<p>We are planning to remove support for scoped slots in both components as part of our future Vue 3 updates. See the <RouterLink to="/components/breadcrumb/#custom-navigation">CdrBreadcrumb</RouterLink> or <RouterLink to="/components/pagination/#overriding-default-navigation">CdrPagination</RouterLink> pages for examples of how to override their default navigation behavior. Please reach out to the Cedar team if you have any questions or concerns about this change.</p>
<h3 id="vue-3-update-slot-syntax" tabindex="-1"><a class="header-anchor" href="#vue-3-update-slot-syntax">#</a> Vue 3: Update Slot Syntax</h3>
<p>Vue 2.6 introduced a new <code>v-slot</code> syntax for passing slot content into components. A pound sign <code>#</code> can be used as a shorthand for <code>v-slot:</code>, much like a colon <code>:</code> can be used as a shorthand for <code>v-bind</code>. The old syntax is removed from Vue 3 and we recommend updating your codebase to make use of the new slot syntax to simplify the upgrade process in the future. Note that the new <code>v-slot</code> or <code>#</code> syntax can only be used on a <code>template</code> tag, however those additional <code>template</code> tags will not be included in the rendered HTML.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;!-- Named slots -->
&lt;span slot="slotname">old named slot syntax&lt;/span>
&lt;template #slotname>
  &lt;span>new named slot syntax&lt;span>
&lt;/template>

&lt;!-- Scoped slots -->
&lt;template slot="slotname" slot-scope="scopeObject">old scoped slot syntax {{ scopeObject.name }}&lt;/template>
&lt;template #slotname="scopeObject">new scoped slot syntax {{ scopeObject.name }}&lt;/template>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>The examples on this doc site have been updated to make use of the new syntax, see the <a href="https://vuejs.org/v2/guide/components-slots.html#Named-Slots" target="_blank" rel="noopener noreferrer">Vue documentation<ExternalLinkIcon/></a> for more information.</p>
<h2 id="bug-fixes-3" tabindex="-1"><a class="header-anchor" href="#bug-fixes-3">#</a> Bug Fixes</h2>
<h3 id="cdrimg-ratio-auto" tabindex="-1"><a class="header-anchor" href="#cdrimg-ratio-auto">#</a> CdrImg Ratio Auto</h3>
<p>We have fixed a bug in CdrImg when the <code>ratio</code> prop is set to <code>&quot;auto&quot;</code> where a CSS value would resolve to <code>NaN</code>. We have also updated the <RouterLink to="/components/image/#ratio-auto">CdrImg page</RouterLink> to better demonstrate how to use the cropping features of CdrImg without giving the image a specific aspect ratio.</p>
<h2 id="breaking-changes" tabindex="-1"><a class="header-anchor" href="#breaking-changes">#</a> Breaking Changes</h2>
<h3 id="cdralert-renamed-to-cdrbanner" tabindex="-1"><a class="header-anchor" href="#cdralert-renamed-to-cdrbanner">#</a> CdrAlert Renamed to CdrBanner</h3>
<p>The CdrAlert component has been renamed to be CdrBanner to better align with the intention and meaning of the component. CdrBanner may be used for a <RouterLink to="/components/banner/#ccessibility">wide array of messaging types</RouterLink> not restricted to the accessible &quot;alert&quot; pattern. Nothing in the component API has changed aside from the name, consumers can migrate by simply replacing any instance of <code>cdr-alert</code> with <code>cdr-banner</code>, as well as replacing <code>CdrAlert</code> with <code>CdrBanner</code>. Note that this change impacts both the @rei/cedar component package as well as the @rei/cdr-component-variables SCSS/LESS mixins.</p>
<h3 id="cdrtokens-background-scoping" tabindex="-1"><a class="header-anchor" href="#cdrtokens-background-scoping">#</a> CdrTokens Background Scoping</h3>
<p>In order to distinguish generic background colors like primary and secondary from more specific background colors we have re-named several of our background color tokens. This is necessary because the Cedar team exhaustively tests the accessibility of our components against our primary and secondary background colors, but we are unable to guarantee that every state of every Cedar component will be accessible against certain rarer or more specific background types. This scoping also helps clarify that these background color tokens are intended to be used for simple messaging and should not be applied as general background colors.</p>
<table>
<thead>
<tr>
<th>Old token name</th>
<th>New token name</th>
</tr>
</thead>
<tbody>
<tr>
<td>cdr-color-background-success</td>
<td>cdr-color-background-message-success</td>
</tr>
<tr>
<td>cdr-color-background-warning</td>
<td>cdr-color-background-message-warning</td>
</tr>
<tr>
<td>cdr-color-background-error</td>
<td>cdr-color-background-message-error</td>
</tr>
<tr>
<td>cdr-color-background-info</td>
<td>cdr-color-background-message-info</td>
</tr>
<tr>
<td>cdr-color-background-sale</td>
<td>cdr-color-background-message-sale</td>
</tr>
</tbody>
</table>
<h3 id="cdrmodal-aria-describedby" tabindex="-1"><a class="header-anchor" href="#cdrmodal-aria-describedby">#</a> CdrModal Aria Describedby</h3>
<p>The <code>aria-describedby</code> property on CdrModal has been updated to use the correct casing in order to match the default HTML aria attribute. To address this change, in any CdrModal instance replace <code>ariaDescribedBy</code> with <code>ariaDescribedby</code> or <code>aria-described-by</code> with <code>aria-describedby</code>.</p>
<h3 id="removals" tabindex="-1"><a class="header-anchor" href="#removals">#</a> Removals</h3>
<p>In accordance with our deprecation policy, features that were deprecated in the <RouterLink to="/release-notes/fall-2020/#deprecations">Fall 2020 release</RouterLink> have been removed from Cedar.</p>
<h4 id="cdrinput-helper-text-slot" tabindex="-1"><a class="header-anchor" href="#cdrinput-helper-text-slot">#</a> CdrInput Helper Text Slot</h4>
<p>The <code>helper-text</code> slot in CdrInput was removed in favor of the <code>helper-text-bottom</code> slot. To update, rename any instance of <code>helper-text</code> in CdrInput to be <code>helper-text-bottom</code> instead.</p>
<h4 id="cedar-utility-classes-and-cdrtext-modifier-have-been-removed" tabindex="-1"><a class="header-anchor" href="#cedar-utility-classes-and-cdrtext-modifier-have-been-removed">#</a> Cedar Utility Classes And CdrText Modifier Have Been Removed</h4>
<p>The Cedar CSS utility classes and CdrText modifier property were intended to allow developers to quickly apply common styling attributes to their applications, as well as to provide parity with some features that were available in Cedar 1. However there are a number of issues with using global CSS utility classes in a micro-site based architecture such as we have at REI:</p>
<ul>
<li>In order to use a single utility class, every class in that file must be loaded, which can be quite costly for larger files such as the text or space utilities. This cost comes both in the form of the large CSS asset that must be downloaded, as well as the time it takes the user's browser to parse and render the CSS file.</li>
<li>Because each micro-site manages it's own assets independently it is difficult for those larger utility files to be cached and shared across micro-sites without simply loading those utilities on every page. This was not a problem for Cedar 1 as it was loaded on every page already and used primarily in the monolith.</li>
<li>Global CSS classes may end up being used in markup that is unrelated to the package that loads it, which can cause unexpected issues when that package is changed. For example, if a shared FEDCOMP component loads the Cedar space utility classes, a micro-site that consumes that component could also end up using those space utilities without loading the utility class file itself. If that shared component is removed or changed, it may break code in the micro-site that depended on that space utility file being loaded. This is an ongoing issue in the removal of Cedar 1 from the monolith and global page template, as often times projects will end up using Cedar 1 classes without realizing where they are being loaded from.</li>
<li>Global CSS classes are impossible to version, which makes it very difficult to roll out changes without potentially breaking existing code. A micro-site that imports a specific verison of Cedar can be tested before it is deployed and rolled out independently, but if a global CSS file is altered it will immediately impact every piece of markup that references it.</li>
</ul>
<p>We have been warning that these files will be deprecated for our past several releases, yet we continue to see new instances of them appear in REI codebases, so we have made the decision to delete them entirely in order to mitigate these ongoing issues with performance and code maintainability.</p>
<p>For teams that need to update to the latest version of Cedar but which use the utility classes or CdrText modifier property too extensively to migrate all at once, we have created a <a href="https://git.rei.com/users/cowills/repos/cedar-deprecated-utilities/browse" target="_blank" rel="noopener noreferrer">bitbucket project<ExternalLinkIcon/></a> containing those utility class definitions to allow you to incrementally migrate towards @rei/cdr-tokens.</p>
<h4 id="example-migrations" tabindex="-1"><a class="header-anchor" href="#example-migrations">#</a> Example migrations</h4>
<h5 id="align-utils" tabindex="-1"><a class="header-anchor" href="#align-utils">#</a> Align Utils</h5>
<p>Alignment utilities can be replaced with the equivalent plain CSS</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cdr-align-text-center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  Deprecated utility
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>your-custom-alignment-class<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Using plain CSS
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.your-custom-alignment-class</span> <span class="token punctuation">{</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h5 id="color-utils" tabindex="-1"><a class="header-anchor" href="#color-utils">#</a> Color Utils</h5>
<p>Color utilities can be replaced with the equivalent value from @rei/cdr-tokens targeting either <code>background-color</code>, <code>color</code>, or <code>fill</code> as appropriate.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cdr-color-background-primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  Deprecated background color utility
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cdr-color-text-primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  Deprecated text color utility
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>your-custom-background-color-class<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Using plain CSS/tokens for background color
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>your-custom-text-color-class<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Using plain CSS/tokens for text color
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token atrule"><span class="token rule">@import</span> <span class="token string">'~@rei/cdr-tokens/dist/scss/cdr-tokens'</span><span class="token punctuation">;</span></span>

  <span class="token selector">.your-custom-background-color-class</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> $cdr-color-background-primary<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.your-custom-text-color-class</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> $cdr-color-text-primary<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h5 id="container-utils" tabindex="-1"><a class="header-anchor" href="#container-utils">#</a> Container Utils</h5>
<p>The <code>cdr-container</code> and <code>cdr-container-fluid</code> utility classes should be replaced with either the <a href="../../components/container">CdrContainer</a> component or the equivalent mixin from @rei/cdr-tokens. See the <a href="https://rei.github.io/rei-cedar-docs/foundation/responsive/" target="_blank" rel="noopener noreferrer">Cedar Responsive article<ExternalLinkIcon/></a> for more information on general container usage.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cdr-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  Deprecated utility
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-container</span><span class="token punctuation">></span></span>
      Using the CdrContainer component
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-container</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>your-custom-container-class<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      Using plain CSS/tokens
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token atrule"><span class="token rule">@import</span> <span class="token string">'~@rei/cdr-tokens/dist/scss/cdr-tokens'</span><span class="token punctuation">;</span></span>

  <span class="token selector">.your-custom-container-class</span> <span class="token punctuation">{</span>
    <span class="token atrule"><span class="token rule">@include</span> cdr-container<span class="token punctuation">;</span></span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h5 id="display-utils" tabindex="-1"><a class="header-anchor" href="#display-utils">#</a> Display Utils</h5>
<p>Display utilities can be replaced with the equivalent plain CSS</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cdr-display-none<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  Deprecated utility
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>your-custom-display-class<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Using plain CSS
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.your-custom-display-class</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h5 id="space-utils" tabindex="-1"><a class="header-anchor" href="#space-utils">#</a> Space Utils</h5>
<p>Space utility classes were a combination of the targeted property and a Cedar spacing token.</p>
<table>
<thead>
<tr>
<th>prefix</th>
<th>property</th>
</tr>
</thead>
<tbody>
<tr>
<td>inset</td>
<td>padding</td>
</tr>
<tr>
<td>pl</td>
<td>padding-left</td>
</tr>
<tr>
<td>pt</td>
<td>padding-top</td>
</tr>
<tr>
<td>pr</td>
<td>padding-right</td>
</tr>
<tr>
<td>pb</td>
<td>padding-bottom</td>
</tr>
<tr>
<td>px</td>
<td>padding-left and padding-right</td>
</tr>
<tr>
<td>py</td>
<td>padding-top and padding-bottom</td>
</tr>
<tr>
<td>ml</td>
<td>margin-left</td>
</tr>
<tr>
<td>mt</td>
<td>margin-top</td>
</tr>
<tr>
<td>mr</td>
<td>margin-right</td>
</tr>
<tr>
<td>mb</td>
<td>margin-bottom</td>
</tr>
<tr>
<td>mx</td>
<td>margin-left and margin-right</td>
</tr>
<tr>
<td>my</td>
<td>margin-top and margin-bottom</td>
</tr>
</tbody>
</table>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cdr-space-inset-half-x<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  Deprecated utility
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>your-custom-space-class<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Using plain CSS/tokens
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token atrule"><span class="token rule">@import</span> <span class="token string">'~@rei/cdr-tokens/dist/scss/cdr-tokens'</span><span class="token punctuation">;</span></span>

  <span class="token selector">.your-custom-space-class</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> $cdr-space-half-x<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h5 id="text-utils" tabindex="-1"><a class="header-anchor" href="#text-utils">#</a> Text Utils</h5>
<p>Note that the text utility classes were available both as CSS utility classes and via the cdr-text modifier prop. The migration path is the same for both patterns.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cdr-text--utility-sans-strong-300<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  Deprecated utility
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span> <span class="token attr-name">modifier</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utility-sans-strong-300<span class="token punctuation">"</span></span> <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>p<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  Deprecated modifier
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>your-custom-type-class<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Using plain CSS/tokens
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token atrule"><span class="token rule">@import</span> <span class="token string">'~@rei/cdr-tokens/dist/scss/cdr-tokens'</span><span class="token punctuation">;</span></span>

  <span class="token selector">.your-custom-type-class</span> <span class="token punctuation">{</span>
    <span class="token atrule"><span class="token rule">@include</span> cdr-text-utility-sans-strong-300<span class="token punctuation">;</span></span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h5 id="responsive-utilities" tabindex="-1"><a class="header-anchor" href="#responsive-utilities">#</a> Responsive Utilities</h5>
<p>The align, display, space, and text utility classes supported breakpoint modifiers as a suffix which would only activate the utility class at the given breakpoint. Those instances should be migrated as described above but additionally use a <a href="https://rei.github.io/rei-cedar-docs/foundation/responsive/#scss-less-utilities" target="_blank" rel="noopener noreferrer">breakpoint mixin from @rei/cdr-tokens<ExternalLinkIcon/></a>.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cdr-mb-space-quarter-x\@md<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  Deprecated responsive utility
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>your-custom-responsive-space-class<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Using plain CSS/tokens
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token atrule"><span class="token rule">@import</span> <span class="token string">'~@rei/cdr-tokens/dist/scss/cdr-tokens'</span><span class="token punctuation">;</span></span>

  <span class="token atrule"><span class="token rule">@include</span> cdr-md-mq-only</span> <span class="token punctuation">{</span>
    <span class="token selector">.your-custom-responsive-space-class</span> <span class="token punctuation">{</span>
      <span class="token property">margin-bottom</span><span class="token punctuation">:</span> $cdr-space-quarter-x<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></cdr-doc-table-of-contents-shell>
</template>
