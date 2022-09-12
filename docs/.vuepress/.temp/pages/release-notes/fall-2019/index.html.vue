<template><cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>
<h2 id="update-steps" tabindex="-1"><a class="header-anchor" href="#update-steps">#</a> Update Steps</h2>
<p>If you are not already on Cedar 2.x.x, you will first need to <RouterLink to="/release-notes/summer-2019/">upgrade your project</RouterLink>) to the single-package version of Cedar.</p>
<h3 id="for-a-micro-site" tabindex="-1"><a class="header-anchor" href="#for-a-micro-site">#</a> For a Micro-Site</h3>
<ul>
<li>Update to <code>@rei/cedar</code> 3.x.x</li>
<li>Update to <code>@rei/febs</code> &gt;= 5.4.1</li>
<li>Ensure that you are on a recent version of Babel (&gt;= 7.x.x) and Webpack (&gt;= 4.x.x)</li>
</ul>
<h3 id="for-a-component-package" tabindex="-1"><a class="header-anchor" href="#for-a-component-package">#</a> For a Component Package</h3>
<ul>
<li>Update to <code>@rei/cedar</code> 3.x.x</li>
<li>Ensure that your component is treating <code>@rei/cedar</code> as a <code>peerDependency</code>/<code>devDependency</code>. This aligns with the REI micro-site architecture, and ensures that only 1 version of the design system is loaded on each page</li>
<li>You may need to configure you development and test environments to handle loading the ESM build of Cedar</li>
</ul>
<h2 id="new-features" tabindex="-1"><a class="header-anchor" href="#new-features">#</a> New Features</h2>
<h3 id="introducing-new-fonts" tabindex="-1"><a class="header-anchor" href="#introducing-new-fonts">#</a> Introducing New Fonts</h3>
<p>Sentinel and Roboto have been deprecated as a global REI brand fonts. <code>cdr-fonts.css</code> has removed the base64 encoded versions of Sentinel fonts and has greatly reduced the overall size of this file.</p>
<p>The variant fonts for &quot;Stuart&quot; and &quot;Graphik&quot; have been added.</p>
<p>For more information, see the <RouterLink to="/foundation/typography/#guidelines">Typography</RouterLink> article.</p>
<h3 id="new-icons-package" tabindex="-1"><a class="header-anchor" href="#new-icons-package">#</a> New Icons Package</h3>
<p>A new <a href="https://rei.github.io/cedar-icons/#/" target="_blank" rel="noopener noreferrer">Cedar Icon Library<ExternalLinkIcon/></a> has been created which will be used to host and distribute Cedar SVG icons.</p>
<ul>
<li>Allows consumers to pick and choose which icons to include in their sprite sheet rather than being forced to load all of them</li>
<li>Cedar no longer has to distribute SVG assets, which simplifies our build process</li>
<li>Decreases bundle size as sprite sheets are now loaded inline in the HTML rather than being included in the JavaScript bundle</li>
<li>Consumers can still load the inline icon components from <code>@rei/cedar</code></li>
</ul>
<h3 id="cedar-component-variables-1-0-0" tabindex="-1"><a class="header-anchor" href="#cedar-component-variables-1-0-0">#</a> Cedar Component Variables 1.0.0</h3>
<p>The 1.0.0 version of <a href="https://rei.github.io/rei-cedar-component-variables/#/" target="_blank" rel="noopener noreferrer">Cedar Component Variables<ExternalLinkIcon/></a> has been released which provide a method for using Cedar component styles in environments where the Vue components themselves cannot be used.</p>
<p>Component variables are currently exported for a subset of Cedar components (button, link, input, select, checkbox, radio, CTA, and list), and are intended to be used alongside the <a href="https://rei.github.io/rei-cedar-docs/components/design-tokens/" target="_blank" rel="noopener noreferrer">Design Tokens<ExternalLinkIcon/></a>.</p>
<p>For more information, please see the <a href="https://rei.github.io/rei-cedar-docs/components/component-variables/" target="_blank" rel="noopener noreferrer">Component Variables<ExternalLinkIcon/></a> page.</p>
<h3 id="ui-toolkit-update" tabindex="-1"><a class="header-anchor" href="#ui-toolkit-update">#</a> UI Toolkit Update</h3>
<h4 id="file-structure" tabindex="-1"><a class="header-anchor" href="#file-structure">#</a> File Structure</h4>
<ul>
<li>The toolkit is now broken out into three versions—vCurrent, vLegacy, and vNext. vCurrent will include the Fall 2019 UI toolkit changes. vLegacy includes the previous release. vNext is a preview into future releases and is not officially supported</li>
<li>The file structures have changed. Web, Native, Tokens, and Icons are now seperate master files and libraries</li>
</ul>
<h4 id="sticker-sheet" tabindex="-1"><a class="header-anchor" href="#sticker-sheet">#</a> Sticker Sheet</h4>
<p>Sticker sheets have been included in Web, Native, Token, and Icon libraries. To use the sticker sheet, <RouterLink to="/getting-started/as-a-designer/#using-the-toolkit">link the library</RouterLink> you need, select the sticker sheet from Symbols, right-click the sticker sheet, select &quot;Detach from Symbol&quot;, ungroup, and copy or paste as needed.</p>
<h4 id="select-component" tabindex="-1"><a class="header-anchor" href="#select-component">#</a> Select Component</h4>
<p>A new Select component is available for use in the web components toolkit and the sticker sheet. For more information, see the <RouterLink to="/components/selects/">Select</RouterLink> page.</p>
<h3 id="icon-contribution" tabindex="-1"><a class="header-anchor" href="#icon-contribution">#</a> Icon Contribution</h3>
<ul>
<li>The <RouterLink to="/icons/resources/#contribution-process">guidelines for contributing icons</RouterLink> to the <a href="https://share.goabstract.com/99335c38-51ee-41c8-8454-38c2a70c4c7f" target="_blank" rel="noopener noreferrer">CDR · Icon Contribution<ExternalLinkIcon/></a> project has been updated</li>
<li>Minor updates to the <a href="https://share.goabstract.com/e9186773-0cc3-43a6-b7ff-54b163d95e00?sha=a814b05c391c93f5a7d39ce9508cd5238ae8fe0e" target="_blank" rel="noopener noreferrer">CDR Icons • vCurrent<ExternalLinkIcon/></a> library to make icon symbols more consistent. For linking instructions, see the <RouterLink to="/getting-started/as-a-designer/#cedar-ui-toolkit">Cedar UI Toolkit</RouterLink> page</li>
<li>A new Sketch plugin has been added to help you <RouterLink to="/icons/resources/#exporting-icons-that-aren%E2%80%99t-in-the-library">export Cedar-compliant icons that are not in the icon repo</RouterLink></li>
</ul>
<h3 id="svg-in-icon-slot" tabindex="-1"><a class="header-anchor" href="#svg-in-icon-slot">#</a> SVG in Icon Slot</h3>
<ul>
<li><code>CdrIcon</code> now accepts full SVG markup in the slot</li>
<li>All attributes, classes, listeners, etc. will be preserved with the exception of <code>viewBox</code>, <code>role</code>, and <code>xmlns</code></li>
<li>For more information and examples, see the <RouterLink to="/components/icon/#non-cedar-svg">Icon Component</RouterLink> page</li>
</ul>
<h3 id="deprecated-mixin-warnings" tabindex="-1"><a class="header-anchor" href="#deprecated-mixin-warnings">#</a> Deprecated Mixin Warnings</h3>
<p>The <code>cdr-tokens</code> package now emits warnings if it detects that you are still using deprecated mixins in your SCSS. You can disable these warnings by setting a SCSS variable <code>$cdr-warn: false;</code> in any scope where you are using <code>cdr-tokens</code>. Note that these warnings are only emitted by mixins in the SCSS build and will not trigger for tokens or if you are using LESS.</p>
<h3 id="button-cta-full-width-at-breakpoint" tabindex="-1"><a class="header-anchor" href="#button-cta-full-width-at-breakpoint">#</a> Button / CTA Full-Width at Breakpoint</h3>
<p>The <RouterLink to="/components/buttons/#api">Button</RouterLink> and <RouterLink to="/components/cta/#api">CTA</RouterLink> components now support setting <code>full-width</code> as either a boolean value or as a list of responsive breakpoints. For example, <code>full-width: &quot;@xs @lg&quot;</code> would make that component be full-width at the extra small and large breakpoints. A bug where the full-width attribute could be overridden by a responsive size breakpoint has also been resolved.</p>
<h3 id="link-scoped-slots-for-pagination-and-breadcrumb" tabindex="-1"><a class="header-anchor" href="#link-scoped-slots-for-pagination-and-breadcrumb">#</a> Link Scoped Slots for Pagination and Breadcrumb</h3>
<p>In order to support client-side routing, <RouterLink to="/components/pagination/#link-scoped-slots">breadcrumb</RouterLink> and <RouterLink to="/components/breadcrumb/#link-scoped-slot">pagination</RouterLink> components have been updated to expose <a href="https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots-with-the-slot-scope-Attribute" target="_blank" rel="noopener noreferrer">scopedSlots<ExternalLinkIcon/></a> that allow consumers to override the default anchor links that are normally rendered by these components.</p>
<h3 id="input-and-button-bind-all-listeners" tabindex="-1"><a class="header-anchor" href="#input-and-button-bind-all-listeners">#</a> Input and Button Bind All Listeners</h3>
<p>Rather than only binding specific listeners (like <code>on-click</code>), the <RouterLink to="/components/input/#events">input</RouterLink> and
<RouterLink to="/components/button/#events">button</RouterLink> components will now bind any event listeners attached to their root component, i.e, <code>@click</code>, <code>@focus</code>, <code>@input</code>.</p>
<h2 id="breaking-changes" tabindex="-1"><a class="header-anchor" href="#breaking-changes">#</a> Breaking Changes</h2>
<h3 id="tree-shaking-es-module-build-changes" tabindex="-1"><a class="header-anchor" href="#tree-shaking-es-module-build-changes">#</a> Tree Shaking / ES Module Build Changes</h3>
<p>Version 2.x.x of Cedar contained both CommonJS (<code>@rei/cedar/dist/cedar.cjs.js</code>) and ES Module (<code>@rei/cedar/dist/cedar.esm.js</code>) single-file builds. The ES Module build was supposed to allow consumers to &quot;tree shake&quot; out any un-used Cedar code from their bundles. However due to a variety of issues involving Vue and Webpack, our ES Module build was not actually tree-shakeable for our consumers. To work around this, we are now exporting a multi-file build inside <code>@rei/cedar/dist/lib</code> which is also the <code>module</code> entry point for Cedar.</p>
<p>If you are on the latest version of FEBS (&gt; 5.4.1), then you will get this change automatically when you update your Cedar version. Any app that is loading <code>@rei/cedar</code> should see a significant reduction in bundle size after this update.</p>
<p>If you are not using FEBS, you will need to ensure that:</p>
<ul>
<li>Your project is loading the <code>module</code> entry for Cedar: This should happen automatically if you are using ES6 style <code>import</code>/<code>export</code> syntax. If not, you will need to configure your build to resolve <code>@rei/cedar</code> to <code>node_modules/@rei/cedar/dist/lib/index.mjs</code></li>
<li>Your build system is set up to process <code>mjs</code> files in node_modules: In Webpack 4 this can be done with the <code>javascript/auto</code> loader <code>{ test: /\.mjs$/, include: /node_modules/, type: &quot;javascript/auto&quot; }</code>. This can also be achieved by running <code>node_modules/@rei/cedar</code> through Babel using <code>@babel/preset-env</code> and setting the <code>modules: false</code> (for an example on this strategy, see <a href="https://github.com/rei/front-end-build-configs/blob/master/application/webpack.base.conf.js#L94-L126" target="_blank" rel="noopener noreferrer">FEBS<ExternalLinkIcon/></a>)</li>
</ul>
<p>Cedar is still exporting a single-file CommonJS build (<code>dist/cedar.js</code>). This is appropriate to use in development or test environments, but should be avoided in production as it cannot be tree-shaken.</p>
<h3 id="ssr-optimized-builds-are-no-longer-being-exported" tabindex="-1"><a class="header-anchor" href="#ssr-optimized-builds-are-no-longer-being-exported">#</a> SSR Optimized Builds Are No Longer Being Exported</h3>
<p>The previous release of Cedar included special <code>.ssr</code> variants of each build which were optimized for server side performance. These builds have been removed in the current release of Cedar.</p>
<p>This SSR optimization was only possible for <code>.vue</code> single-file components, which we can no longer use as such components cannot be built as ESM modules. Moreover, FEBS does not currently allow teams to have separate client and server configurations, so it was not possible for most consumers to use this feature as is.</p>
<p>Teams can still create SSR optimized builds themselves using either <code>vue-loader</code> or <code>rollup-plugin-vue</code> with the <code>optimizeSSR</code> option set to true.</p>
<h3 id="stateless-accordion" tabindex="-1"><a class="header-anchor" href="#stateless-accordion">#</a> Stateless Accordion</h3>
<p>CdrAccordion has been refactored to remove internal state tracking for toggling open and closed. For simplicity, the CdrAccordionItem component has been removed and its functionality merged with CdrAccordion. The <code>show</code> prop has been renamed to <code>opened</code> for clarity. For more inforamtion, please review the <RouterLink to="/components/accordion/">API and usage examples</RouterLink>.</p>
<p>Before:</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-accordion</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-accordion-item</span>
    <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>accordion-1<span class="token punctuation">"</span></span>
    <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>How do I find my member number?<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span><span class="token punctuation">></span></span>
        Find your member number online. You can also call
        Customer Support at 1-800-426-4840 (U.S. and Canada)
        or 1-253-891-2500 (International).
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-accordion-item</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-accordion</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>After:</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-accordion</span>
  <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>accordion-1<span class="token punctuation">"</span></span>
  <span class="token attr-name">:opened</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opened<span class="token punctuation">"</span></span>
  <span class="token attr-name">@accordion-toggle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opened = !opened<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#label</span><span class="token punctuation">></span></span>
    How do I find my member number?
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span><span class="token punctuation">></span></span>
    Find your member number online. You can also call
    Customer Support at 1-800-426-4840 (U.S. and Canada)
    or 1-253-891-2500 (International).
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-accordion</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      opened<span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h3 id="large-breakpoint-value-corrected" tabindex="-1"><a class="header-anchor" href="#large-breakpoint-value-corrected">#</a> Large Breakpoint Value Corrected</h3>
<p>The token value for the large breakpoint was updated to the correct value of <code>1232px</code>. If you are hard-coding any breakpoint values in your project, you will need to update those to use the breakpoint values from cdr-tokens instead. If you were already using the breakpoint tokens, then you just need to update your version of Cedar and cdr-tokens.</p>
<h3 id="letter-spacing-values-corrected" tabindex="-1"><a class="header-anchor" href="#letter-spacing-values-corrected">#</a> Letter Spacing Values Corrected</h3>
<p>The letter spacing values for our text tokens have been corrected to add the <code>px</code> suffix.</p>
<h3 id="cdrradio-value-prop-is-now-customvalue" tabindex="-1"><a class="header-anchor" href="#cdrradio-value-prop-is-now-customvalue">#</a> CdrRadio Value Prop Is Now CustomValue</h3>
<p>In an effort to make our form components more consistent, we have changed <RouterLink to="/components/radio/#api">CdrRadio</RouterLink> to use the <code>customValue</code> prop instead of <code>value</code>. This is the same pattern that CdrCheckbox uses.</p>
<ul>
<li>Before: <code>&lt;cdr-radio v-model=&quot;x&quot; value=&quot;foo&quot;/&gt;</code></li>
<li>After: <code>&lt;cdr-radio v-model=&quot;x&quot; customValue=&quot;foo&quot;/&gt;</code></li>
</ul>
<h3 id="cdrpagination-cdrselect-and-cdrradio-model-binding" tabindex="-1"><a class="header-anchor" href="#cdrpagination-cdrselect-and-cdrradio-model-binding">#</a> CdrPagination, CdrSelect, and CdrRadio Model Binding</h3>
<p>In an effort to make our components that use <code>v-model</code> more consistent, we have changed the property bindings for CdrPagination, CdrSelect, and CdrRadio to use the same <code>value</code> prop and <code>@input</code> event pattern that <a href="https://vuejs.org/v2/guide/components.html#Using-v-model-on-Components" target="_blank" rel="noopener noreferrer">v-model sets up by default<ExternalLinkIcon/></a>. This change will only affect consumers using JSX or other templating languages which do not have access to Vue directives like v-model. If you were already using v-model with these components, then you do not need to change anything.</p>
<ul>
<li>CdrPagination: <code>currentPage</code> is now <code>value</code></li>
<li>CdrSelect: <code>extVal</code> is now <code>value</code></li>
<li>CdrRadio: <code>modelValue</code> is now <code>value</code> <a href="#cdrradio-value-prop-is-now-customvalue">See note about value/customValue</a></li>
</ul>
<h3 id="cdrbutton-now-uses-bindings-for-events" tabindex="-1"><a class="header-anchor" href="#cdrbutton-now-uses-bindings-for-events">#</a> CdrButton Now Uses Bindings for Events</h3>
<p>Rather than pass in an <code>onClick</code> event handler as a prop, <RouterLink to="/components/buttons/#api">CdrButton</RouterLink> will now bind any listener attached to it. Update <code>onClick</code> to be <code>@click</code> wherever you are binding an event to a CdrButton.</p>
<ul>
<li>Before: <code>&lt;cdr-button onClick=&quot;yourClickHandlerFunction&quot; /&gt;</code></li>
<li>After: <code>&lt;cdr-button @click=&quot;yourClickHandlerFunction&quot; /&gt;</code></li>
</ul>
<h3 id="cdrtabs-emits-tab-change-instead-of-tabchange" tabindex="-1"><a class="header-anchor" href="#cdrtabs-emits-tab-change-instead-of-tabchange">#</a> CdrTabs Emits <code>tab-change</code> Instead of <code>tabChange</code></h3>
<p>Vue expects event names to use kebab case and not camel case, so the <code>tabChange</code> event on <RouterLink to="/components/tabs/#api">CdrTabs</RouterLink> could cause issues for some users. CdrTabs now emits a <code>tab-change</code> event instead.</p>
<ul>
<li>Before: <code>&lt;CdrTabs @tabChange=&quot;handler&quot; /&gt;</code></li>
<li>After: <code>&lt;CdrTabs @tab-change=&quot;handler&quot; /&gt;</code></li>
</ul>
<h2 id="deprecations" tabindex="-1"><a class="header-anchor" href="#deprecations">#</a> Deprecations</h2>
<p>Whenever possible and practical, the Cedar team will deprecate features rather than issue outright breaking changes in order to allow teams some time to update their codebases. Features will be removed from the doc site when they are deprecated to ensure that they are no longer used in new code.</p>
<p>NOTE: The deprecated typohraphy tokens and mixins listed below received new mappings as part of the <a href="https://rei.github.io/rei-cedar-docs/release-notes/winter-2020/#updated-deprecation-mappings" target="_blank" rel="noopener noreferrer">Winter 2020 Release<ExternalLinkIcon/></a></p>
<h3 id="deprecated-typography-headings" tabindex="-1"><a class="header-anchor" href="#deprecated-typography-headings">#</a> Deprecated Typography/Headings</h3>
<p>&quot;REI Stuart App&quot; and &quot;Graphik App&quot; have replaced Sentinel heading styles. Designers with linked UI Toolkit libraries in Abstract will receive an automatic update of web component styles, but will need to link two new libraries (if they haven't already): icons and tokens. For more information on linking libraries in Abstract, see the <RouterLink to="/release-notes/..getting-started/as-a-designer/">Designers Getting Started</RouterLink> guidelines.</p>
<p>The cdr-text modifiers specific to headings have been deprecated. This update normalizes cdr-text modifiers with our other Cedar component modifiers. Going forward, users will be able to define a unique heading value for each breakpoint.</p>
<p>New modifiers have been added supporting the update to typography. The names have been extended to account for the size options now available to each heading family.</p>
<p>The following diagram provides a rough guideline of legacy modifier names to the general equivalent.</p>
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
<td>heading-700 display-900@md display-1100@lg</td>
</tr>
<tr>
<td>display-static</td>
<td>display-900</td>
</tr>
<tr>
<td>heading-large</td>
<td>display-600 display-700@md display-900@lg</td>
</tr>
<tr>
<td>heading-large-static</td>
<td>display-700</td>
</tr>
<tr>
<td>heading-medium</td>
<td>heading-600 heading-700@md heading-700@lg</td>
</tr>
<tr>
<td>heading-medium-static</td>
<td>heading-600</td>
</tr>
<tr>
<td>heading-small</td>
<td>heading-400 heading-500@md heading-500@lg</td>
</tr>
<tr>
<td>heading-small-static</td>
<td>heading-400</td>
</tr>
<tr>
<td>subheading</td>
<td>subheading-300</td>
</tr>
</tbody>
</table>
<p>In addition to the heading changes listed above, the paragraph modifier <code>body</code> is now also deprecated without a replacement. Moving forward, we will only support the generic non-modified styling for paragraphs.</p>
<p>For more infomation, see <a href="../../components/headings">Headings</a> and <a href="../../components/paragraphs">Paragraphs</a>.</p>
<h3 id="deprecated-tokens-and-mixins" tabindex="-1"><a class="header-anchor" href="#deprecated-tokens-and-mixins">#</a> Deprecated Tokens and Mixins</h3>
<p>In order to support the updates to typography, we have re-named some Cedar tokens related to headings. Please see the chart below for guidance on how to re-map the deprecated tokens and mixins.</p>
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
<td>cdr-text-display-1100</td>
</tr>
<tr>
<td>cdr-text-header-1-family</td>
<td>cdr-text-display-1100-family</td>
</tr>
<tr>
<td>cdr-text-header-1-style</td>
<td>cdr-text-display-1100-style</td>
</tr>
<tr>
<td>cdr-text-header-1-weight</td>
<td>cdr-text-display-1100-weight</td>
</tr>
<tr>
<td>cdr-text-header-1-spacing</td>
<td>cdr-text-display-1100-spacing</td>
</tr>
<tr>
<td>cdr-text-header-1-size</td>
<td>cdr-text-display-1100-size</td>
</tr>
<tr>
<td>cdr-text-header-1-height</td>
<td>cdr-text-display-1100-height</td>
</tr>
<tr>
<td>cdr-text-header-2</td>
<td>cdr-text-display-900</td>
</tr>
<tr>
<td>cdr-text-header-2-family</td>
<td>cdr-text-display-900-family</td>
</tr>
<tr>
<td>cdr-text-header-2-style</td>
<td>cdr-text-display-900-style</td>
</tr>
<tr>
<td>cdr-text-header-2-weight</td>
<td>cdr-text-display-900-weight</td>
</tr>
<tr>
<td>cdr-text-header-2-spacing</td>
<td>cdr-text-display-900-spacing</td>
</tr>
<tr>
<td>cdr-text-header-2-size</td>
<td>cdr-text-display-900-size</td>
</tr>
<tr>
<td>cdr-text-header-2-height</td>
<td>cdr-text-display-900-height</td>
</tr>
<tr>
<td>cdr-text-header-3</td>
<td>cdr-text-heading-700</td>
</tr>
<tr>
<td>cdr-text-header-3-family</td>
<td>cdr-text-heading-700-family</td>
</tr>
<tr>
<td>cdr-text-header-3-style</td>
<td>cdr-text-heading-700-style</td>
</tr>
<tr>
<td>cdr-text-header-3-weight</td>
<td>cdr-text-heading-700-weight</td>
</tr>
<tr>
<td>cdr-text-header-3-spacing</td>
<td>cdr-text-heading-700-spacing</td>
</tr>
<tr>
<td>cdr-text-header-3-size</td>
<td>cdr-text-heading-700-size</td>
</tr>
<tr>
<td>cdr-text-header-3-height</td>
<td>cdr-text-heading-700-height</td>
</tr>
<tr>
<td>cdr-text-header-4</td>
<td>cdr-text-heading-600</td>
</tr>
<tr>
<td>cdr-text-header-4-family</td>
<td>cdr-text-heading-600-family</td>
</tr>
<tr>
<td>cdr-text-header-4-style</td>
<td>cdr-text-heading-600-style</td>
</tr>
<tr>
<td>cdr-text-header-4-weight</td>
<td>cdr-text-heading-600-weight</td>
</tr>
<tr>
<td>cdr-text-header-4-spacing</td>
<td>cdr-text-heading-600-spacing</td>
</tr>
<tr>
<td>cdr-text-header-4-size</td>
<td>cdr-text-heading-600-size</td>
</tr>
<tr>
<td>cdr-text-header-4-height</td>
<td>cdr-text-heading-600-height</td>
</tr>
<tr>
<td>cdr-text-header-5</td>
<td>cdr-text-heading-500</td>
</tr>
<tr>
<td>cdr-text-header-5-family</td>
<td>cdr-text-heading-500-family</td>
</tr>
<tr>
<td>cdr-text-header-5-style</td>
<td>cdr-text-heading-500-style</td>
</tr>
<tr>
<td>cdr-text-header-5-weight</td>
<td>cdr-text-heading-500-weight</td>
</tr>
<tr>
<td>cdr-text-header-5-spacing</td>
<td>cdr-text-heading-500-spacing</td>
</tr>
<tr>
<td>cdr-text-header-5-size</td>
<td>cdr-text-heading-500-size</td>
</tr>
<tr>
<td>cdr-text-header-5-height</td>
<td>cdr-text-heading-500-height</td>
</tr>
<tr>
<td>cdr-text-header-6</td>
<td>cdr-text-heading-400</td>
</tr>
<tr>
<td>cdr-text-header-6-family</td>
<td>cdr-text-heading-400-family</td>
</tr>
<tr>
<td>cdr-text-header-6-style</td>
<td>cdr-text-heading-400-style</td>
</tr>
<tr>
<td>cdr-text-header-6-weight</td>
<td>cdr-text-heading-400-weight</td>
</tr>
<tr>
<td>cdr-text-header-6-spacing</td>
<td>cdr-text-heading-400-spacing</td>
</tr>
<tr>
<td>cdr-text-header-6-size</td>
<td>cdr-text-heading-400-size</td>
</tr>
<tr>
<td>cdr-text-header-6-height</td>
<td>cdr-text-heading-400-height</td>
</tr>
<tr>
<td>cdr-text-header-7</td>
<td>cdr-text-heading-300</td>
</tr>
<tr>
<td>cdr-text-header-7-family</td>
<td>cdr-text-heading-300-family</td>
</tr>
<tr>
<td>cdr-text-header-7-style</td>
<td>cdr-text-heading-300-style</td>
</tr>
<tr>
<td>cdr-text-header-7-weight</td>
<td>cdr-text-heading-300-weight</td>
</tr>
<tr>
<td>cdr-text-header-7-spacing</td>
<td>cdr-text-heading-300-spacing</td>
</tr>
<tr>
<td>cdr-text-header-7-size</td>
<td>cdr-text-heading-300-size</td>
</tr>
<tr>
<td>cdr-text-header-7-height</td>
<td>cdr-text-heading-300-height</td>
</tr>
<tr>
<td>cdr-text-editorial</td>
<td>cdr-text-default</td>
</tr>
<tr>
<td>cdr-text-editorial-family</td>
<td>cdr-text-default-family</td>
</tr>
<tr>
<td>cdr-text-editorial-style</td>
<td>cdr-text-default-style</td>
</tr>
<tr>
<td>cdr-text-editorial-weight</td>
<td>cdr-text-default-weight</td>
</tr>
<tr>
<td>cdr-text-editorial-spacing</td>
<td>cdr-text-default-spacing</td>
</tr>
<tr>
<td>cdr-text-editorial-size</td>
<td>cdr-text-default-size</td>
</tr>
<tr>
<td>cdr-text-editorial-height</td>
<td>cdr-text-default-height</td>
</tr>
<tr>
<td>cdr-text-editorial-compact</td>
<td>cdr-text-default</td>
</tr>
<tr>
<td>cdr-text-editorial-compact-family</td>
<td>cdr-text-default-family</td>
</tr>
<tr>
<td>cdr-text-editorial-compact-style</td>
<td>cdr-text-default-style</td>
</tr>
<tr>
<td>cdr-text-editorial-compact-weight</td>
<td>cdr-text-default-weight</td>
</tr>
<tr>
<td>cdr-text-editorial-compact-spacing</td>
<td>cdr-text-default-spacing</td>
</tr>
<tr>
<td>cdr-text-editorial-compact-size</td>
<td>cdr-text-default-size</td>
</tr>
<tr>
<td>cdr-text-editorial-compact-height</td>
<td>cdr-text-default-height</td>
</tr>
</tbody>
</table>
<p>Additionally, we have new mixins available to replace the previously deprecated <code>spruce-display</code> typography mixins. Replacements for the <code>redwood</code> and <code>maple</code> mixins will be coming in a future Cedar release. See the  <a href="https://confluence.rei.com/display/TP/v1+Token+Migration" target="_blank" rel="noopener noreferrer">v1 token migration<ExternalLinkIcon/></a> documents for more information on how to handle the deprecated pre-release tokens (if you haven't already).</p>
<table>
<thead>
<tr>
<th>Deprecated mixin</th>
<th>Equivalent mixin</th>
</tr>
</thead>
<tbody>
<tr>
<td>spruce-display-100</td>
<td>cdr-text-display-1200</td>
</tr>
<tr>
<td>spruce-display-90</td>
<td>cdr-text-display-1200</td>
</tr>
<tr>
<td>spruce-display-80</td>
<td>cdr-text-display-1200</td>
</tr>
<tr>
<td>spruce-display-70</td>
<td>cdr-text-display-1100</td>
</tr>
<tr>
<td>spruce-display-60</td>
<td>cdr-text-display-800</td>
</tr>
<tr>
<td>spruce-display-50</td>
<td>cdr-text-display-700</td>
</tr>
<tr>
<td>spruce-display-40</td>
<td>cdr-text-display-600</td>
</tr>
<tr>
<td>spruce-display-30</td>
<td>cdr-text-heading-500</td>
</tr>
<tr>
<td>spruce-display-20</td>
<td>cdr-text-heading-400</td>
</tr>
<tr>
<td>spruce-display-10</td>
<td>cdr-text-heading-300</td>
</tr>
<tr>
<td>spruce-display-00</td>
<td>cdr-text-heading-300</td>
</tr>
</tbody>
</table>
<h3 id="deprecated-utility-classes" tabindex="-1"><a class="header-anchor" href="#deprecated-utility-classes">#</a> Deprecated Utility Classes</h3>
<h4 id="alignment-classes" tabindex="-1"><a class="header-anchor" href="#alignment-classes">#</a> Alignment Classes</h4>
<p>The utility alignment classes have been deprecated and updated to bring them inline with the latest token names. In addition, they have been extended to support each of the breakpoint-only options.</p>
<table>
<thead>
<tr>
<th>Deprecated class name</th>
<th>Equivalent class name</th>
</tr>
</thead>
<tbody>
<tr>
<td>cdr-text-left</td>
<td>cdr-align-text-left</td>
</tr>
<tr>
<td></td>
<td>cdr-align-text-left@xs</td>
</tr>
<tr>
<td></td>
<td>cdr-align-text-left@sm</td>
</tr>
<tr>
<td></td>
<td>cdr-align-text-left@md</td>
</tr>
<tr>
<td></td>
<td>cdr-align-text-left@lg</td>
</tr>
<tr>
<td>cdr-text-center</td>
<td>cdr-align-text-center</td>
</tr>
<tr>
<td></td>
<td>cdr-align-text-center@xs</td>
</tr>
<tr>
<td></td>
<td>cdr-align-text-center@sm</td>
</tr>
<tr>
<td></td>
<td>cdr-align-text-center@md</td>
</tr>
<tr>
<td></td>
<td>cdr-align-text-center@lg</td>
</tr>
<tr>
<td>cdr-text-right</td>
<td>cdr-align-text-right</td>
</tr>
<tr>
<td></td>
<td>cdr-align-text-right@xs</td>
</tr>
<tr>
<td></td>
<td>cdr-align-text-right@sm</td>
</tr>
<tr>
<td></td>
<td>cdr-align-text-right@md</td>
</tr>
<tr>
<td></td>
<td>cdr-align-text-right@lg</td>
</tr>
<tr>
<td></td>
<td>cdr-align-text-justify</td>
</tr>
<tr>
<td></td>
<td>cdr-align-text-justify@xs</td>
</tr>
<tr>
<td></td>
<td>cdr-align-text-justify@sm</td>
</tr>
<tr>
<td></td>
<td>cdr-align-text-justify@md</td>
</tr>
<tr>
<td></td>
<td>cdr-align-text-justify@lg</td>
</tr>
<tr>
<td>cdr-center-block</td>
<td>cdr-align-center-block</td>
</tr>
<tr>
<td></td>
<td>cdr-align-center-block@xs</td>
</tr>
<tr>
<td></td>
<td>cdr-align-center-block@sm</td>
</tr>
<tr>
<td></td>
<td>cdr-align-center-block@md</td>
</tr>
<tr>
<td></td>
<td>cdr-align-center-block@lg</td>
</tr>
</tbody>
</table>
<h4 id="display-classes" tabindex="-1"><a class="header-anchor" href="#display-classes">#</a> Display Classes</h4>
<p>The utility visibility and accessibility classes have been deprecated and updated to bring them inline with the latest token names. Please see the map below to review the new names.</p>
<table>
<thead>
<tr>
<th>Deprecated class name</th>
<th>Equivalent class name</th>
</tr>
</thead>
<tbody>
<tr>
<td>cdr-hide</td>
<td>cdr-display-none</td>
</tr>
<tr>
<td>cdr-hide@xs-only</td>
<td>cdr-display-none@xs</td>
</tr>
<tr>
<td>cdr-hide@xs</td>
<td></td>
</tr>
<tr>
<td>cdr-hide@sm-only</td>
<td>cdr-display-none@sm</td>
</tr>
<tr>
<td>cdr-hide@sm</td>
<td></td>
</tr>
<tr>
<td>cdr-hide@md-only</td>
<td>cdr-display-none@md</td>
</tr>
<tr>
<td>cdr-hide@md</td>
<td></td>
</tr>
<tr>
<td>cdr-hide@lg-only</td>
<td>cdr-display-none@lg</td>
</tr>
<tr>
<td>cdr-hide@lg</td>
<td></td>
</tr>
<tr>
<td></td>
<td>cdr-display-hidden</td>
</tr>
<tr>
<td></td>
<td>cdr-display-hidden@xs</td>
</tr>
<tr>
<td></td>
<td>cdr-display-hidden@sm</td>
</tr>
<tr>
<td></td>
<td>cdr-display-hidden@md</td>
</tr>
<tr>
<td></td>
<td>cdr-display-hidden@lg</td>
</tr>
<tr>
<td>cdr-show</td>
<td>cdr-display-block</td>
</tr>
<tr>
<td>cdr-show@xs-only</td>
<td>cdr-display-block@xs</td>
</tr>
<tr>
<td>cdr-show@xs</td>
<td></td>
</tr>
<tr>
<td>cdr-show@sm-only</td>
<td>cdr-display-block@sm</td>
</tr>
<tr>
<td>cdr-show@sm</td>
<td></td>
</tr>
<tr>
<td>cdr-show@md-only</td>
<td>cdr-display-block@md</td>
</tr>
<tr>
<td>cdr-show@md</td>
<td></td>
</tr>
<tr>
<td>cdr-show@lg-only</td>
<td>cdr-display-block@lg</td>
</tr>
<tr>
<td>cdr-show@lg</td>
<td></td>
</tr>
<tr>
<td>cdr-show-inline</td>
<td>cdr-display-inline</td>
</tr>
<tr>
<td>cdr-show-inline@xs-only</td>
<td>cdr-display-inline@xs</td>
</tr>
<tr>
<td>cdr-show-inline@xs</td>
<td></td>
</tr>
<tr>
<td>cdr-show-inline@sm-only</td>
<td>cdr-display-inline@sm</td>
</tr>
<tr>
<td>cdr-show-inline@sm</td>
<td></td>
</tr>
<tr>
<td>cdr-show-inline@md-only</td>
<td>cdr-display-inline@md</td>
</tr>
<tr>
<td>cdr-show-inline@md</td>
<td></td>
</tr>
<tr>
<td>cdr-show-inline@lg-only</td>
<td>cdr-display-inline@lg</td>
</tr>
<tr>
<td>cdr-show-inline@lg</td>
<td></td>
</tr>
<tr>
<td>cdr-show-inline-block</td>
<td>cdr-display-inline-block</td>
</tr>
<tr>
<td>cdr-show-inline-block@xs-only</td>
<td>cdr-display-inline-block@xs</td>
</tr>
<tr>
<td>cdr-show-inline-block@xs</td>
<td></td>
</tr>
<tr>
<td>cdr-show-inline-block@sm-only</td>
<td>cdr-display-inline-block@sm</td>
</tr>
<tr>
<td>cdr-show-inline-block@sm</td>
<td></td>
</tr>
<tr>
<td>cdr-show-inline-block@md-only</td>
<td>cdr-display-inline-block@md</td>
</tr>
<tr>
<td>cdr-show-inline-block@md</td>
<td></td>
</tr>
<tr>
<td>cdr-show-inline-block@lg-only</td>
<td>cdr-display-inline-block@lg</td>
</tr>
<tr>
<td>cdr-show-inline-block@lg</td>
<td></td>
</tr>
<tr>
<td></td>
<td>cdr-display-flex</td>
</tr>
<tr>
<td></td>
<td>cdr-display-flex@xs</td>
</tr>
<tr>
<td></td>
<td>cdr-display-flex@sm</td>
</tr>
<tr>
<td></td>
<td>cdr-display-flex@md</td>
</tr>
<tr>
<td></td>
<td>cdr-display-flex@lg</td>
</tr>
<tr>
<td></td>
<td>cdr-display-inline-flex</td>
</tr>
<tr>
<td></td>
<td>cdr-display-inline-flex@xs</td>
</tr>
<tr>
<td></td>
<td>cdr-display-inline-flex@sm</td>
</tr>
<tr>
<td></td>
<td>cdr-display-inline-flex@md</td>
</tr>
<tr>
<td></td>
<td>cdr-display-inline-flex@lg</td>
</tr>
<tr>
<td>cdr-sr-only</td>
<td>cdr-display-sr-only</td>
</tr>
<tr>
<td>cdr-sr-only-focusable</td>
<td>cdr-display-sr-focusable</td>
</tr>
</tbody>
</table>
<h3 id="breadcrumb-truncation-ssr" tabindex="-1"><a class="header-anchor" href="#breadcrumb-truncation-ssr">#</a> Breadcrumb Truncation/SSR</h3>
<p>In order to fix an issue with server-side rendering, as well as to simplify the API of <RouterLink to="/components/breadcrumb/">CdrBreadcrumb</RouterLink>, we have removed the <code>truncationThreshold</code> and <code>truncationXSThreshold</code> attributes. Instead, the <code>truncationEnabled</code> attr can be used to control whether or not the breadcrumb should be truncated. This change will not break any existing consumers of breadcrumb even if they are using those attributes.</p>
</cdr-doc-table-of-contents-shell>
</template>
