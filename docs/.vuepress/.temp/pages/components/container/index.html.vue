<template><cdr-doc-table-of-contents-shell parentSelector="h2" childSelector="h3">
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview">#</a> Overview</h2>
<p>CdrContainer is a simple wrapper that provides basic responsive layout logic. The padding and margin applied by CdrContainer is designed to align with the header and footer in the REI page template. This component provides the same functionality as the <code>cdr-container</code> or <code>cdr-container-fluid</code> mixins from <code>@rei/cdr-tokens</code> but wrapped in a Vue component for ease of use. Note that the example below needs to be opened in CodeSandbox to see the full static vs. fluid behavior.</p>
<cdr-doc-example-code-pair repository-href="/src/components/CdrContainer"
:sandbox-data="$page.frontmatter.sandboxData" >
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-container</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span> <span class="token property">border</span><span class="token punctuation">:</span> 1px dashed purple<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
      Static container content
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-container</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-container</span> <span class="token attr-name">modifier</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fluid<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span> <span class="token property">border</span><span class="token punctuation">:</span> 1px dashed purple<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
      Fluid container content
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-container</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></cdr-doc-example-code-pair>
<h3 id="accessibility" tabindex="-1"><a class="header-anchor" href="#accessibility">#</a> Accessibility</h3>
<p>Usage of the <code>tag</code> prop should semantically match the layout of your page. In general, the default tag value <code>div</code> will work for the majority of use cases.</p>
<h2 id="guidelines" tabindex="-1"><a class="header-anchor" href="#guidelines">#</a> Guidelines</h2>
<p>The default <code>static</code> CdrContainer has a flexible content width up to a max width of 1232px which corresponds to our <code>large</code> breakpoint, while the <code>fluid</code> CdrContainer has no max-width. See the <RouterLink to="/foundation/responsive/#the-cedar-container">responsive foundations</RouterLink> article for more information on container usage.</p>
<h3 id="use-when" tabindex="-1"><a class="header-anchor" href="#use-when">#</a> Use when</h3>
<ul>
<li>Use CdrContainer to wrap your page content and provide proper padding and margins around it.</li>
</ul>
<h3 id="don-t-use-when" tabindex="-1"><a class="header-anchor" href="#don-t-use-when">#</a> Don’t use when</h3>
<ul>
<li>Do not nest instances of CdrContainer within one another.</li>
<li>Do not wrap content that is intended to take up the full screen width within a CdrContainer, for example a hero image. Instead use multiple instances of CdrContainer adjacent to that full width content:</li>
</ul>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-container</span><span class="token punctuation">></span></span>
  page content
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-container</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>full-width-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  full screen width content
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-container</span><span class="token punctuation">></span></span>
  more page content
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-container</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api">#</a> API</h2>
<h3 id="props" tabindex="-1"><a class="header-anchor" href="#props">#</a> Props</h3>
<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />
<h3 id="slots" tabindex="-1"><a class="header-anchor" href="#slots">#</a> Slots</h3>
<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />
</cdr-doc-table-of-contents-shell>
</template>
