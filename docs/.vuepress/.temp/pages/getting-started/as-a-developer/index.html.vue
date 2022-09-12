<template><cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>
<h2 id="cedar-vue" tabindex="-1"><a class="header-anchor" href="#cedar-vue">#</a> Cedar + Vue</h2>
<p>Cedar components are built using <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">Vue<ExternalLinkIcon/></a> and can only be used in Vue projects.</p>
<p>All components are available using an <a href="https://www.npmjs.com/package/@rei/cedar" target="_blank" rel="noopener noreferrer">NPM package<ExternalLinkIcon/></a>.</p>
<p><em>Terminal</em></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save @rei/cedar
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Once installed, you can import individual Cedar components from the main package into your project:</p>
<p><em>Main.vue</em></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token comment">// import packages from Cedar</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> CdrText<span class="token punctuation">,</span> CdrButton<span class="token punctuation">,</span> CdrLink <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@rei/cedar'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">'ExampleComponent'</span><span class="token punctuation">,</span>
  <span class="token comment">// register your Cedar components</span>
  components<span class="token operator">:</span> <span class="token punctuation">{</span>
    CdrText<span class="token punctuation">,</span>
    CdrButton<span class="token punctuation">,</span>
    CdrLink
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>

<span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token comment">// use the registered Cedar components in your template</span>
  <span class="token operator">&lt;</span>cdr<span class="token operator">-</span>text<span class="token operator">></span>Foo<span class="token operator">&lt;</span><span class="token operator">/</span>cdr<span class="token operator">-</span>text<span class="token operator">></span>
  <span class="token operator">&lt;</span>cdr<span class="token operator">-</span>button<span class="token operator">></span>Bar<span class="token operator">&lt;</span><span class="token operator">/</span>cdr<span class="token operator">-</span>button<span class="token operator">></span>
  <span class="token operator">&lt;</span>cdr<span class="token operator">-</span>link<span class="token operator">></span>Baz<span class="token operator">&lt;</span><span class="token operator">/</span>cdr<span class="token operator">-</span>link<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>

<span class="token operator">&lt;</span>style<span class="token operator">></span>
  <span class="token comment">// no need to import any Cedar related CSS here</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p><em>index.scss</em></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/* import the Cedar CSS reset and fonts first,
  these files only needs to be loaded once on each page,
  components should expect that the micro-site consuming them will load the fonts and reset */</span>
<span class="token atrule"><span class="token rule">@import</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'@rei/cedar/dist/cdr-fonts.css'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
<span class="token atrule"><span class="token rule">@import</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'@rei/cedar/dist/style/reset.css'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
<span class="token comment">/* import each component used in your project  */</span>
<span class="token atrule"><span class="token rule">@import</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'@rei/cedar/dist/style/cdr-text.css'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
<span class="token atrule"><span class="token rule">@import</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'@rei/cedar/dist/style/cdr-button.css'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
<span class="token atrule"><span class="token rule">@import</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'@rei/cedar/dist/style/cdr-link.css'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><hr>
<h2 id="setting-up-projects" tabindex="-1"><a class="header-anchor" href="#setting-up-projects">#</a> Setting Up Projects</h2>
<p>All components depend upon core reset and font assets. Without these assets included, components will not render correctly. These files are distributed as part of the Cedar NPM package.</p>
<h3 id="install-vue-components-package" tabindex="-1"><a class="header-anchor" href="#install-vue-components-package">#</a> Install Vue Components Package</h3>
<p><em>Terminal</em></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save @rei/cedar
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="install-required-core-styles" tabindex="-1"><a class="header-anchor" href="#install-required-core-styles">#</a> Install Required Core Styles</h3>
<p>Cedar requires a core reset stylesheet to render properly. This file should be loaded once per micro-site, and it should be the first CSS file loaded.</p>
<p>To include the stylesheet, import the <code>reset.css</code> file:</p>
<p><em>main.scss</em></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@<span class="token keyword">import</span> <span class="token function">url</span><span class="token punctuation">(</span><span class="token string">'@rei/cedar/dist/style/reset.css'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="install-required-fonts" tabindex="-1"><a class="header-anchor" href="#install-required-fonts">#</a> Install Required Fonts</h3>
<p>Cedar uses specific fonts – Stuart and Graphik – that are required for your project. These fonts are available in the Cedar NPM package and mapped using the <code>cdr-fonts.css</code> file.</p>
<p>To include these fonts, import <code>cdr-fonts.css</code>:</p>
<p><em>main.scss</em></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@<span class="token keyword">import</span> <span class="token function">url</span><span class="token punctuation">(</span><span class="token string">'@rei/cedar/dist/cdr-fonts.css'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><hr>
<h3 id="include-component-css" tabindex="-1"><a class="header-anchor" href="#include-component-css">#</a> Include Component CSS</h3>
<p>How you include CSS depends on your tech stack and varies from project to project. We recommend using <code>postcss</code> with the <code>postcss-import</code> plugin to allow Cedar CSS assets to be de-duped. If you are using FEBS^6 then this is set up for you by default.</p>
<ol>
<li>Create an SCSS file that imports the CSS for any Cedar components used in your project.</li>
</ol>
<p><em>index.scss</em></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/* import each component used in your project  */</span>
<span class="token atrule"><span class="token rule">@import</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'@rei/cedar/dist/style/cdr-text.css'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
<span class="token atrule"><span class="token rule">@import</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'@rei/cedar/dist/style/cdr-button.css'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
<span class="token atrule"><span class="token rule">@import</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'@rei/cedar/dist/style/cdr-link.css'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="2">
<li>Load that file in your main JavaScript entry:</li>
</ol>
<p><em>index.js</em></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">'./index.scss'</span><span class="token punctuation">;</span>
<span class="token comment">/* rest of your component/app */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Cedar CSS assets can all be found inside <code>node_modules/@rei/cedar/dist/style/</code>. Filenames for component CSS match the <code>kebab-case</code> name of the component.</p>
<h4 id="include-full-css" tabindex="-1"><a class="header-anchor" href="#include-full-css">#</a> Include Full CSS</h4>
<p>For public facing production micro-sites you should always optimize your Cedar CSS imports by only loading the assets you need. However, for some projects it may make sense to skip that process and just load all of the Cedar assets. To support this we provide both compiled and un-compiled versions of the full Cedar CSS. If your project is loading shared components then you should use the un-compiled version (<code>@rei/cedar/dist/style/cedar-full.css</code>) along with <code>postcss</code> and <code>postcss-import</code> to ensure that duplicate Cedar assets are not loaded. If your project is not using any shared components or has no build system at all it may make more sense to use the compiled version (<code>@rei/cedar/dist/cedar-compiled.css</code>).</p>
<hr/>
<h3 id="using-components" tabindex="-1"><a class="header-anchor" href="#using-components">#</a> Using Components</h3>
<p>The examples in our documentation demonstrate usage in a <a href="https://vuejs.org/v2/guide/single-file-components.html" target="_blank" rel="noopener noreferrer">Single File Component<ExternalLinkIcon/></a>. If you aren’t using SFCs, read the Vue.js documentation for <a href="https://vuejs.org/v2/guide/components-registration.html" target="_blank" rel="noopener noreferrer">registering components<ExternalLinkIcon/></a>.</p>
<p>Examples below demonstrate the <strong>CdrButton</strong> component. Refer to each component’s documentation for a complete component API and advanced examples.</p>
<h4 id="loading-a-component-in-vue" tabindex="-1"><a class="header-anchor" href="#loading-a-component-in-vue">#</a> Loading a component in Vue</h4>
<ol>
<li>Import the component within the <code>script</code> block.</li>
</ol>
<p><em>local.vue</em></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> CdrButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@rei/cedar'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2">
<li>Register the component in the <code>components:</code> object.</li>
</ol>
<p><em>local.vue</em></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>components<span class="token operator">:</span> <span class="token punctuation">{</span>
  CdrButton
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="3">
<li>Add the component element, such as <code>&lt;cdr-button&gt;</code> into the <code>template</code>.</li>
</ol>
<p><em>local.vue</em></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-button</span><span class="token punctuation">></span></span>I'm a button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="4">
<li>Load Cedar CSS assets in your main CSS file:</li>
</ol>
<p><em>index.scss</em></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/* import the button CSS file */</span>
<span class="token atrule"><span class="token rule">@import</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'@rei/cedar/dist/style/cdr-button.css'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>Final file:</strong></p>
<p><em>local.vue</em></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-button</span><span class="token punctuation">></span></span>I'm a button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> CdrButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@rei/cedar'</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  components<span class="token operator">:</span> <span class="token punctuation">{</span>
      CdrButton
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><em>index.scss</em></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token atrule"><span class="token rule">@import</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'@rei/cedar/dist/style/cdr-button.css'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="configure-component-props" tabindex="-1"><a class="header-anchor" href="#configure-component-props">#</a> Configure Component Props</h4>
<p>Props are custom attributes registered on a component. For more information about props, read <a href="https://vuejs.org/v2/guide/components-props.html" target="_blank" rel="noopener noreferrer">Vue's Props documentation<ExternalLinkIcon/></a>.</p>
<p>Most Cedar components provide props to configure component data, display, and logic. For example, the <strong>CdrButton</strong> component provides a <code>size</code> prop to configure the button’s size.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>I'm a large button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Refer to each component’s API documentation for a full list of available properties.</p>
<h4 id="bind-dynamic-data-to-components" tabindex="-1"><a class="header-anchor" href="#bind-dynamic-data-to-components">#</a> Bind Dynamic Data to Components</h4>
<p>Props can be <a href="https://vuejs.org/v2/guide/components-props.html#Passing-Static-or-Dynamic-Props" target="_blank" rel="noopener noreferrer">static or dynamic<ExternalLinkIcon/></a>. To provide dynamic data (or non-string data) add a colon (<code>:</code>) before the prop name.</p>
<p>Prop names are also documented and referenced in JavaScript as camel case, but <a href="https://vuejs.org/v2/guide/components-props.html#Prop-Casing-camelCase-vs-kebab-case" target="_blank" rel="noopener noreferrer">used in the template as kebab-case<ExternalLinkIcon/></a>.</p>
<p>In this example, the <code>size</code> prop accepts a string denoting size at different breakpoints.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small@xs large@sm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>I'm a responsive button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="add-content-using-slots" tabindex="-1"><a class="header-anchor" href="#add-content-using-slots">#</a> Add Content Using Slots</h4>
<p>Some components use slots for content distribution. Most components will have a single default slot; others will have named slots or scoped slots. Slots are listed as part of the API for all components. For more information about slots, read <a href="https://vuejs.org/v2/guide/components-slots.html" target="_blank" rel="noopener noreferrer">Vue's Slots documentation<ExternalLinkIcon/></a>.</p>
<p>Adding content to a component that has a default slot</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-button</span><span class="token punctuation">></span></span>I'm content in the default slot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Adding content to a component that has named slots</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-component</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">></span></span>I'm content in the header slot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#footer</span><span class="token punctuation">></span></span>I'm content in the footer slot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>my-component</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Adding content to a scoped slot</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-component</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#name-of-the-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scopeObject<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    {{scopeObject.content}} {{scopeObject.someAttribute}}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>my-component</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><hr>
<h3 id="css-modules-and-custom-class-names" tabindex="-1"><a class="header-anchor" href="#css-modules-and-custom-class-names">#</a> CSS Modules and Custom Class Names</h3>
<p>Component CSS class names use <a href="https://github.com/css-modules/css-modules" target="_blank" rel="noopener noreferrer">CSS Modules<ExternalLinkIcon/></a> that reflect the package version. For example, <code>@rei/cedar@42.1.3</code> will have classes that end in <code>_42.1.3</code>. This allows for multiple versions of Cedar to be used together on the same page.</p>
<p>Never use Cedar class names within your own CSS or target them in JavaScript; they will change as you upgrade the package and break any functionality or styling you attach to them.</p>
<p>To target CSS, create custom selectors such as <code>my-wrapper</code> and <code>my-selector</code> in the following example…</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>my-wrapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>my-selector<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>I'm a button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

...

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.my-wrapper > .my-selector</span> <span class="token punctuation">{</span>
 <span class="token comment">/* override button styles here */</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>Some components are more complex and have templates with multiple areas where you may wish to add your own selectors. We try to be mindful of this and add props that will allow you to target your own classes to various elements.</p>
<p>For example with checkbox you may want to target both the label and the content areas.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-checkbox</span> <span class="token attr-name">label-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>my-label<span class="token punctuation">"</span></span> <span class="token attr-name">content-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>my-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>My checkbox<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-checkbox</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

...

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.my-label</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token selector">.my-content</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>If you find that a component needs to have a targeted prop class added, please <a href="https://github.com/rei/rei-cedar/issues" target="_blank" rel="noopener noreferrer">create an issue<ExternalLinkIcon/></a> and let us know.</p>
<hr/>
<h2 id="using-token-variables" tabindex="-1"><a class="header-anchor" href="#using-token-variables">#</a> Using Token Variables</h2>
<p>Cedar provides a robust collection of <a href="https://rei.github.io/rei-cedar-tokens/#/" target="_blank" rel="noopener noreferrer">design tokens<ExternalLinkIcon/></a> corresponding to Cedar's foundations. Standard colors, typography, space, size and other properties are available in the <code>cdr-tokens</code> package. Outputs support web, iOS, and Android consumers.</p>
<p>As you create your own components, work with your designer to take advantage of this inventory in your custom classes. Using them this way will ensure your custom styles remain consistent with design guidelines.</p>
<h3 id="install-tokens-package" tabindex="-1"><a class="header-anchor" href="#install-tokens-package">#</a> Install Tokens Package</h3>
<p>Resources are available within the <strong><a href="https://www.npmjs.com/package/@rei/cdr-tokens" target="_blank" rel="noopener noreferrer">CdrToken package<ExternalLinkIcon/></a></strong>:</p>
<ul>
<li>SCSS variables at <code>dist/scss/cdr-tokens.scss</code></li>
<li>LESS variables at <code>dist/less/cdr-tokens.less</code></li>
<li>JS as both commonJS and ES module at <code>dist/js</code>. Also noted in package.json as <code>main</code> and <code>module</code> respectively
<ul>
<li><code>dist/js/cdr-tokens.common.js</code></li>
<li><code>dist/js/cdr-tokens.esm.js</code></li>
</ul>
</li>
</ul>
<br>
<p>To incorporate the required assets, use the following steps:</p>
<ol>
<li>Install the <strong>CdrToken package</strong> using <code>npm</code> in your terminal:</li>
</ol>
<p><em>Terminal</em></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install <span class="token operator">--</span>save @rei<span class="token operator">/</span>cdr<span class="token operator">-</span>tokens
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="using-cedar-design-tokens" tabindex="-1"><a class="header-anchor" href="#using-cedar-design-tokens">#</a> Using Cedar Design Tokens</h3>
<p>The package contains files for using tokens in both CSS (as SCSS and LESS variables) and JavaScript (as commonJS and ES modules).</p>
<p>Here we’re using a typography mixin and a color token to style <code>.myClass</code> from the SCSS tokens file.</p>
<p><em>local.vue</em></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>myClass<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>I'm styled with tokens!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">'~@rei/cdr-tokens/dist/scss/cdr-tokens.scss'</span><span class="token punctuation">;</span></span>

<span class="token selector">.myClass</span> <span class="token punctuation">{</span>
  <span class="token atrule"><span class="token rule">@include</span> <span class="token function">cdr-text-default-body</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
  <span class="token property">color</span><span class="token punctuation">:</span> $cdr-color-text-primary<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div></cdr-doc-table-of-contents-shell>
</template>
