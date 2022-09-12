<template><cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>
<h2 id="update-steps" tabindex="-1"><a class="header-anchor" href="#update-steps">#</a> Update Steps</h2>
<cdr-banner type="warning" aria-live="polite"><template #icon-left><icon-warning-fill inherit-color /></template><span style="font-weight:500">We recommend updating older versions to Cedar 10.x.x before proceeding</span><template #message-body>We have concurrently released an update to Cedar's babel config to align with FEBS and reduce bundle sizes. This update has been released as standalone major version, please see the <cdr-link href="../summer-2021/">release notes</cdr-link> for upgrade instructions.</template></cdr-banner>
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
<td>^11.x.x</td>
</tr>
<tr>
<td><code>@rei/cdr-tokens</code></td>
<td>^10.x.x</td>
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
<br>
<h2 id="_11-1-0" tabindex="-1"><a class="header-anchor" href="#_11-1-0">#</a> 11.1.0</h2>
<h3 id="new-features" tabindex="-1"><a class="header-anchor" href="#new-features">#</a> New Features</h3>
<h4 id="tiktok" tabindex="-1"><a class="header-anchor" href="#tiktok">#</a> TikTok</h4>
<ul>
<li>We have introduced a new social brand icon for TikTok to our <RouterLink to="/icons/library/">icon library</RouterLink></li>
</ul>
<icon-brand-tiktok/>
<h4 id="cdraccordion-content-spacing" tabindex="-1"><a class="header-anchor" href="#cdraccordion-content-spacing">#</a> CdrAccordion Content Spacing</h4>
<ul>
<li>CdrAccordion has a new <code>content-spacing</code> prop that allows a consuming application to disable spacing (css padding) on the accordion content.</li>
<li>See the <a href="../../components/accordion#content-spacing">CdrAccordion docs page</a> for more information.</li>
</ul>
<h2 id="_11-0-1" tabindex="-1"><a class="header-anchor" href="#_11-0-1">#</a> 11.0.1</h2>
<h3 id="bug-fixes" tabindex="-1"><a class="header-anchor" href="#bug-fixes">#</a> Bug fixes</h3>
<ul>
<li>CdrToast and CdrBanner have been updated to address style discrepancies between the design and code libraries.</li>
</ul>
<h2 id="new-features-1" tabindex="-1"><a class="header-anchor" href="#new-features-1">#</a> New Features</h2>
<h3 id="cdrbanner-redesign" tabindex="-1"><a class="header-anchor" href="#cdrbanner-redesign">#</a> CdrBanner Redesign</h3>
<p>CdrBanner has been redesigned to support additional configurations and utilize the new messaging color tokens.</p>
<p>See the <a href="../../components/banner">CdrBanner docs page</a> for more information.</p>
<h3 id="cdrtoast" tabindex="-1"><a class="header-anchor" href="#cdrtoast">#</a> CdrToast</h3>
<p>We have created a new CdrToast component that can be used for transient status notifications.</p>
<p>See the <a href="../../components/toast">CdrToast docs page</a> for more information.</p>
<h3 id="heading-display" tabindex="-1"><a class="header-anchor" href="#heading-display">#</a> Heading Display</h3>
<p>We have introduced a new suite of display heading styles for certain campaign applications. These larger and lighter styles can be consumed via <RouterLink to="/tokens/all-tokens/#text">token mixins</RouterLink>.</p>
<h3 id="messaging-color-update" tabindex="-1"><a class="header-anchor" href="#messaging-color-update">#</a> Messaging color update</h3>
<p>New messaging <RouterLink to="/tokens/all-tokens/#colors">color tokens</RouterLink> have been added to CdrTokens to support our updates to messaging patterns.</p>
<h3 id="new-error-icons" tabindex="-1"><a class="header-anchor" href="#new-error-icons">#</a> New Error Icons</h3>
<p>We have introduced new error icons to our <RouterLink to="/icons/library/">icon library</RouterLink> to create more clear delineation between warning and error icons.</p>
<icon-error-stroke/> <icon-error-fill/>
<h3 id="cdrbutton-type-size" tabindex="-1"><a class="header-anchor" href="#cdrbutton-type-size">#</a> CdrButton Type Size</h3>
<p>We have aligned the type size of CdrButton to be same at the medium (default) and large <RouterLink to="/components/buttons/#sizing">button sizes</RouterLink>.</p>
<br>
<h2 id="patterns" tabindex="-1"><a class="header-anchor" href="#patterns">#</a> Patterns</h2>
<p>Patterns are intended serve as guidance for teams solving similar problems over and over, and to document best practices for interaction design patterns to guide users through common tasks.</p>
<p>The first batch of Cedar Patterns focuses on the themes of Forms and Messaging, bringing forward the research and reasoning behind many new components delivered in the past year, and helping teams determine what available components are appropriate for each experience.</p>
<h3 id="alerts" tabindex="-1"><a class="header-anchor" href="#alerts">#</a> Alerts</h3>
<p>Alerts inform users that something important has happened on the page.</p>
<p>See the <a href="../../patterns/alerts">Alerts docs page</a> for more information.</p>
<h3 id="form-inputs" tabindex="-1"><a class="header-anchor" href="#form-inputs">#</a> Form Inputs</h3>
<p>Use form input patterns to capture user data in a consistent, optimized manner.</p>
<p>See the <a href="../../patterns/forms-input-types">Form Input Types docs page</a> for more information.</p>
<h3 id="form-validation" tabindex="-1"><a class="header-anchor" href="#form-validation">#</a> Form Validation</h3>
<p>Form validation ensures the data a user has entered into a form matches the requirements of our systems.</p>
<p>See the <a href="../../patterns/form-validation">Form validation docs page</a> for more information.</p>
<h3 id="validation-notifications" tabindex="-1"><a class="header-anchor" href="#validation-notifications">#</a> Validation Notifications</h3>
<p>Validation notifications provide important feedback to users during and after form submission.</p>
<p>See the <a href="../../patterns/validation-notifications">Validation notifications docs page</a> for more information.</p>
<h3 id="update-and-loading-notifications" tabindex="-1"><a class="header-anchor" href="#update-and-loading-notifications">#</a> Update and Loading Notifications</h3>
<p>Update and loading notifications inform users of the current working state of their request and help reduce uncertainty.</p>
<p>See the <a href="../../patterns/update-and-loading-notifications">Update and loading notifications docs page</a> for more information.</p>
<h3 id="status-notifications" tabindex="-1"><a class="header-anchor" href="#status-notifications">#</a> Status Notifications</h3>
<p>Status Notifications inform users that something on the page has changed.</p>
<p>See the <a href="../../patterns/status-notifications">Status notifications docs page</a> for more information.</p>
<br>
<h2 id="bug-fixes-1" tabindex="-1"><a class="header-anchor" href="#bug-fixes-1">#</a> Bug Fixes</h2>
<h3 id="cdrmodal" tabindex="-1"><a class="header-anchor" href="#cdrmodal">#</a> CdrModal</h3>
<p>CdrModal has been updated to address an issue when using the <code>modal</code> slot that would result in errors being thrown when opened.</p>
<br>
<h2 id="deprecations" tabindex="-1"><a class="header-anchor" href="#deprecations">#</a> Deprecations</h2>
<h3 id="cdrbanner-component-variable" tabindex="-1"><a class="header-anchor" href="#cdrbanner-component-variable">#</a> CdrBanner Component Variable</h3>
<p>With the redesign of CdrBanner, the component variable has been deprecated and will be removed in a future release. Teams who are unable to utilize the Vue component should plan to make use of the <a href="http://localhost:8080/tokens/all-tokens/#colors" target="_blank" rel="noopener noreferrer">messaging tokens<ExternalLinkIcon/></a> to create their banners.</p>
<h3 id="preparing-for-vue-3" tabindex="-1"><a class="header-anchor" href="#preparing-for-vue-3">#</a> Preparing for Vue 3</h3>
<p><em>The following have been carried over from the <RouterLink to="/release-notes/spring-2021/#deprecations">Spring 2021 release</RouterLink>. We will continue to note Vue 3 related deprecations so teams can adequately prepare for the upcoming migration.</em></p>
<h4 id="cdrbreadcrumb-and-cdrpagination-scoped-slots" tabindex="-1"><a class="header-anchor" href="#cdrbreadcrumb-and-cdrpagination-scoped-slots">#</a> CdrBreadcrumb and CdrPagination Scoped Slots</h4>
<p>CdrBreadcrumb and CdrPagination both allow for passing in a scoped slot for rendering their link elements which was intended to support things like vue-router which must override the default link navigation behavior. This feature increased the complexity of both components, making it difficult to maintain and improve the components over time. It requires that consumers bind multiple attributes to the slot element to ensure a consistent UI. Most importantly, this functionality is better served through an event handler which would allow the Cedar components to remain simple and consistent but give consumers the flexibility to customize their behavior.</p>
<p>We are planning to remove support for scoped slots in both components as part of our future Vue 3 updates. See the <RouterLink to="/components/breadcrumb/#custom-navigation">CdrBreadcrumb</RouterLink> or <RouterLink to="/components/pagination/#overriding-default-navigation">CdrPagination</RouterLink> pages for examples of how to override their default navigation behavior. Please reach out to the Cedar team if you have any questions or concerns about this change.</p>
<h4 id="vue-3-update-slot-syntax" tabindex="-1"><a class="header-anchor" href="#vue-3-update-slot-syntax">#</a> Vue 3: Update Slot Syntax</h4>
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
<br>
<h2 id="breaking-changes" tabindex="-1"><a class="header-anchor" href="#breaking-changes">#</a> Breaking Changes</h2>
<h3 id="removals" tabindex="-1"><a class="header-anchor" href="#removals">#</a> Removals</h3>
<p>In accordance with our deprecation policy, features that were deprecated in the <RouterLink to="/release-notes/winter-2021/#deprecations">Winter 2021 release</RouterLink> and <RouterLink to="/release-notes/spring-2021/#deprecations">Spring 2021 release</RouterLink> have been removed from Cedar.</p>
<h4 id="cdrrow-and-cdrcol" tabindex="-1"><a class="header-anchor" href="#cdrrow-and-cdrcol">#</a> CdrRow and CdrCol</h4>
<p>CdrRow and CdrCol have been removed from Cedar in favor of the more performant <a href="../../components/grid">CdrGrid</a>. If teams are still needing to incrementally migrate their usage, CdrRow and CdrCol can be consumed from <a href="https://git.rei.com/projects/FEDCOMP/repos/flex-grid/browse" target="_blank" rel="noopener noreferrer">@rei/flex-grid<ExternalLinkIcon/></a>.</p>
</cdr-doc-table-of-contents-shell>
</template>
