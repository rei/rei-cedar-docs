<template><cdr-doc-table-of-contents-shell parentSelector="h2" childSelector="h3">
## Overview
<p>The <code>CdrText</code> component is a simple wrapper for text elements that applies default type styles. Type styling should be applied by using the <RouterLink to="/tokens/all-tokens/#text">design tokens</RouterLink> and a custom CSS class.</p>
<h2 id="headings" tabindex="-1"><a class="header-anchor" href="#headings">#</a> Headings</h2>
<p>A heading helps users to identify and create a hierarchical structure within a page. Headings are typically the largest text on the screen and should be short and include important information. Cedar headings include <a href="#display">display</a>, <a href="#serif">serif</a>, and <a href="#sans">sans-serif</a> options.</p>
<h3 id="display" tabindex="-1"><a class="header-anchor" href="#display">#</a> Display</h3>
<p>Display headings, set in REI Stuart, include the largest type styles available and are intended to be used for emotional and impactful messages on top of the funnel experiences (i.e., homepage, brand pages, or landing pages). Because display styles are lighter in weight than other heading styles, they are meant for sizes 800 and above. However, it is recommended to reserve sizes 800 and 900 for mobile breakpoints.</p>
<cdr-doc-example-code-pair :copyButton="false" repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cdr-text--heading-display-1600<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    When you gear up, we give back
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></cdr-doc-example-code-pair>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom-heading-class<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    When you gear up, we give back
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token atrule"><span class="token rule">@import</span> <span class="token string">'~@rei/cdr-tokens/dist/scss/cdr-tokens.scss'</span><span class="token punctuation">;</span></span>
  <span class="token selector">.custom-heading-class</span> <span class="token punctuation">{</span>
    <span class="token atrule"><span class="token rule">@include</span> cdr-text-heading-display-1600<span class="token punctuation">;</span></span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="serif" tabindex="-1"><a class="header-anchor" href="#serif">#</a> Serif</h3>
<p>Serif headings, set in REI Stuart, work best in large sizes (cdr-text-heading-serif-600 and above) and are intended to be used for functional messages on middle to bottom of funnel experiences (i.e., product detail pages or checkout experiences). It’s also available for areas where space is limited but an important distinction or callout needs to be made, such as a card title or aligning to marketing collateral.</p>
<cdr-doc-example-code-pair :copyButton="false" repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cdr-text--heading-serif-1200<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    When you gear up, we give back
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></cdr-doc-example-code-pair>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom-heading-class<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    When you gear up, we give back
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token atrule"><span class="token rule">@import</span> <span class="token string">'~@rei/cdr-tokens/dist/scss/cdr-tokens.scss'</span><span class="token punctuation">;</span></span>
  <span class="token selector">.custom-heading-class</span> <span class="token punctuation">{</span>
    <span class="token atrule"><span class="token rule">@include</span> cdr-text-heading-serif-1200<span class="token punctuation">;</span></span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="serif-strong" tabindex="-1"><a class="header-anchor" href="#serif-strong">#</a> Serif Strong</h3>
<p>Serif strong headings, set in REI Stuart with a greater font weight than <a href="#display">display</a> or <a href="#serif">serif</a>, work best in larger sizes (cdr-text-heading-serif-strong-600 and above). Like serif headings, these styles are intended to be used for functional messages on middle to bottom of funnel experiences. It’s recommended to use serif strong headings very minimally throughout the page and should generally be reserved for important page titles, in cases where type overlays an image, or in situations where additional emphasis is needed.</p>
<cdr-doc-example-code-pair :copyButton="false" repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cdr-text--heading-serif-strong-1200<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    When you gear up, we give back
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></cdr-doc-example-code-pair>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom-heading-class<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    When you gear up, we give back
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token atrule"><span class="token rule">@import</span> <span class="token string">'~@rei/cdr-tokens/dist/scss/cdr-tokens.scss'</span><span class="token punctuation">;</span></span>
  <span class="token selector">.custom-heading-class</span> <span class="token punctuation">{</span>
    <span class="token atrule"><span class="token rule">@include</span> cdr-text-heading-serif-strong-1200<span class="token punctuation">;</span></span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="sans" tabindex="-1"><a class="header-anchor" href="#sans">#</a> Sans</h3>
<p>Sans headings, set in Graphik, should play a supporting role to serif headings. Sans headings work best in smaller sizes (cdr-text-heading-serif-strong-600 and below). Sans headings are not recommended for page titles or other prominent placements. Instead, use <a href="#serif">serif</a> or <a href="#serif-strong">serif strong</a> headings.</p>
<cdr-doc-example-code-pair :copyButton="false" repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cdr-text--heading-sans-600<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    When you gear up, we give back
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></cdr-doc-example-code-pair>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom-heading-class<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    When you gear up, we give back
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token atrule"><span class="token rule">@import</span> <span class="token string">'~@rei/cdr-tokens/dist/scss/cdr-tokens.scss'</span><span class="token punctuation">;</span></span>
  <span class="token selector">.custom-heading-class</span> <span class="token punctuation">{</span>
    <span class="token atrule"><span class="token rule">@include</span> cdr-text-heading-sans-600<span class="token punctuation">;</span></span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="guidelines" tabindex="-1"><a class="header-anchor" href="#guidelines">#</a> Guidelines</h3>
<h4 id="use-when" tabindex="-1"><a class="header-anchor" href="#use-when">#</a> Use When</h4>
<ul>
<li>Creating a hierarchical structure of information on a page</li>
</ul>
<h4 id="don-t-use-when" tabindex="-1"><a class="header-anchor" href="#don-t-use-when">#</a> Don’t Use When</h4>
<ul>
<li>Tagging as a semantic heading when an element only needs to be highlighted or emphasized within your content. Instead, use the type scale to alter the size or prominence of the text</li>
<li>Showcasing long form content. Instead, use <a href="#body">body</a></li>
</ul>
<h4 id="the-basics" tabindex="-1"><a class="header-anchor" href="#the-basics">#</a> The Basics</h4>
<ul>
<li>When using this component with semantic headings from <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>, typographic styles set up a visual hierarchy created within CSS that helps to establish the order of importance</li>
<li>Identify headings at the beginning of a section</li>
<li>Position headings at, or near, the top of a section</li>
<li>Consider cdr-color-text-primary, cdr-color-text-secondary, cdr-color-text-emphasis, cdr-color-text-brand, or cdr-color-text-inverse when choosing heading colors</li>
<li>Minimize text overlaid on images and multicolored background, which can degrade legibility. If text is overlaid on an image:
<ul>
<li>Ensure an accessible contrast between text and the background</li>
<li>Implement image text with proper HTML markup and use CSS to embed any special fonts</li>
<li>Consider using heading-serif-strong styles</li>
</ul>
</li>
</ul>
<h4 id="do-don-t" tabindex="-1"><a class="header-anchor" href="#do-don-t">#</a> Do / Don’t</h4>
<do-dont :examples="$page.frontmatter.semantic" />
<do-dont :examples="$page.frontmatter.utility" />
<h4 id="content" tabindex="-1"><a class="header-anchor" href="#content">#</a> Content</h4>
<ul>
<li>Be specific. Provide facts or information that pique user interest. Avoid broad and generic headings</li>
<li>Start heading titles with strong and familiar keywords to increase scannability</li>
<li>Ensure the heading works out of page context, such as search results, social media streams, blog posts, and news feeds
<ul>
<li>Start with most descriptive word. For example, instead of “Preparation for floods”, use “Flood preparation”</li>
<li>Avoid duplicating headings (e.g. &quot;More Details&quot;)</li>
</ul>
</li>
<li>Omit needless words. Be clear and concise</li>
<li>Limit heading length for improved scale across variable container widths</li>
<li>Headings must:
<ul>
<li>Start with a capital letter</li>
<li>Capitalize proper nouns</li>
<li>Use sentence case</li>
<li>Left-align multi-line headings</li>
</ul>
</li>
</ul>
<h3 id="responsive-headings" tabindex="-1"><a class="header-anchor" href="#responsive-headings">#</a> Responsive Headings</h3>
<p>Cedar does not offer pre-styled responsive headings. Instead, construct responsive headings by defining a heading style for specific <RouterLink to="/foundation/responsive/#the-cedar-container">breakpoints</RouterLink>. For instance, if the heading style is cdr-text-heading-serif-900 @lg, @md, and @sm sizes, set the heading style to cdr-text-heading-serif-800 at the @xs size. This helps to create optimal readability, spacing, and proportions for various breakpoint sizes. An examples in practice:</p>
<cdr-doc-example-code-pair :copyButton="false" repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData" >
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cdr-text--heading-serif-800@xs heading-serif-900<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      When you gear up, we give back
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></cdr-doc-example-code-pair>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom-heading-class<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    When you gear up, we give back
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token atrule"><span class="token rule">@import</span> <span class="token string">'~@rei/cdr-tokens/dist/scss/cdr-tokens.scss'</span><span class="token punctuation">;</span></span>
  <span class="token selector">.custom-heading-class</span> <span class="token punctuation">{</span>
    <span class="token atrule"><span class="token rule">@include</span> cdr-text-heading-serif-900<span class="token punctuation">;</span></span>
    <span class="token atrule"><span class="token rule">@include</span> cdr-xs-mq-only</span> <span class="token punctuation">{</span>
      <span class="token atrule"><span class="token rule">@include</span> cdr-text-heading-serif-800<span class="token punctuation">;</span></span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="resources" tabindex="-1"><a class="header-anchor" href="#resources">#</a> Resources</h3>
<ul>
<li>WebAIM: <a href="https://webaim.org/techniques/semanticstructure/" target="_blank" rel="noopener noreferrer">Semantic Structure<ExternalLinkIcon/></a></li>
</ul>
<h2 id="subheadings" tabindex="-1"><a class="header-anchor" href="#subheadings">#</a> Subheadings</h2>
<p>Subheadings give support or add meaning to a heading, and are intended to be paired with <a href="#headings">headings</a>. Never position a subheading on a page without pairing it with a heading style. Because subheadings are supportive, they should always be smaller in size than the heading they reinforce.</p>
<h3 id="sans-1" tabindex="-1"><a class="header-anchor" href="#sans-1">#</a> Sans</h3>
<p>Sans-serif subheadings are set in Graphik. They are intended to be paired with serif or serif strong headings. Pairing a sans subheading with a sans heading is also acceptable.</p>
<cdr-doc-example-code-pair :copyButton="false" repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cdr-text--subheading-sans-600<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    When you gear up, we give back
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></cdr-doc-example-code-pair>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom-subheading-class<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    When you gear up, we give back
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token atrule"><span class="token rule">@import</span> <span class="token string">'~@rei/cdr-tokens/dist/scss/cdr-tokens.scss'</span><span class="token punctuation">;</span></span>
  <span class="token selector">.custom-subheading-class</span> <span class="token punctuation">{</span>
    <span class="token atrule"><span class="token rule">@include</span> cdr-text-subheading-sans-600<span class="token punctuation">;</span></span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="heading-and-subheading-combinations" tabindex="-1"><a class="header-anchor" href="#heading-and-subheading-combinations">#</a> Heading and Subheading Combinations</h3>
<p>Heading and subheading combinations should have the appropriate contrast and hierarchy. Headings should always be larger than the accompanying subheading.</p>
<p>Serif headings should only accompanied by sans subheadings.</p>
<cdr-doc-example-code-pair :copyButton="false" repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData" >
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cdr-text--heading-serif-strong-900<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      When you gear up, we give back
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span>
       <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cdr-text--subheading-sans-500 stack<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
       Treat yourself to sweet gear
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></cdr-doc-example-code-pair>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom-heading-class<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    When you gear up, we give back>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom-subheading-class<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      Treat yourself to sweet gear
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token atrule"><span class="token rule">@import</span> <span class="token string">'~@rei/cdr-tokens/dist/scss/cdr-tokens.scss'</span><span class="token punctuation">;</span></span>
  <span class="token selector">.custom-heading-class</span> <span class="token punctuation">{</span>
    <span class="token atrule"><span class="token rule">@include</span> cdr-text-heading-serif-strong-900<span class="token punctuation">;</span></span>
  <span class="token punctuation">}</span>

  <span class="token selector">.custom-subheading-class</span> <span class="token punctuation">{</span>
    <span class="token atrule"><span class="token rule">@include</span> cdr-text-subheading-sans-500<span class="token punctuation">;</span></span>
    <span class="token property">padding-top</span><span class="token punctuation">:</span> $cdr-space-one-and-a-half-x<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>Sans headings also work best with sans subheadings.</p>
<cdr-doc-example-code-pair :copyButton="false" repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData" >
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cdr-text--heading-sans-600<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      When you gear up, we give back
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span>
       <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cdr-text--subheading-sans-300 stack<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
       Treat yourself to sweet gear
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></cdr-doc-example-code-pair>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom-heading-class<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    When you gear up, we give back>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom-subheading-class<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      Treat yourself to sweet gear
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token atrule"><span class="token rule">@import</span> <span class="token string">'~@rei/cdr-tokens/dist/scss/cdr-tokens.scss'</span><span class="token punctuation">;</span></span>
  <span class="token selector">.custom-heading-class</span> <span class="token punctuation">{</span>
    <span class="token atrule"><span class="token rule">@include</span> cdr-text-heading-sans-600<span class="token punctuation">;</span></span>
  <span class="token punctuation">}</span>

  <span class="token selector">.custom-subheading-class</span> <span class="token punctuation">{</span>
    <span class="token atrule"><span class="token rule">@include</span> cdr-text-subheading-sans-300<span class="token punctuation">;</span></span>
    <span class="token property">padding-top</span><span class="token punctuation">:</span> $cdr-space-one-x<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="guidelines-1" tabindex="-1"><a class="header-anchor" href="#guidelines-1">#</a> Guidelines</h3>
<h4 id="do-don-t-1" tabindex="-1"><a class="header-anchor" href="#do-don-t-1">#</a> Do / Don’t</h4>
<do-dont :examples="$page.frontmatter.subtitle" />
<do-dont :examples="$page.frontmatter.subheading" />
<h2 id="body" tabindex="-1"><a class="header-anchor" href="#body">#</a> Body</h2>
<p>Body styles work best for long-form copy like articles, customer reviews, or legal messages. Body styles have a generous line height and wider letter spacing for optimal reading. For tighter, more compact styles, use <a href="#utility">utility</a> styles.</p>
<cdr-doc-example-code-pair :copyButton="false" repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cdr-text--body-500<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Cross-country skiing (sometimes called classic skiing) encompasses several styles, from touring or racing on groomed ski tracks to gliding through deep backcountry snow.
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></cdr-doc-example-code-pair>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom-body-class<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Cross-country skiing (sometimes called classic skiing) encompasses several styles, from touring or racing on groomed ski tracks to gliding through deep backcountry snow.
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token atrule"><span class="token rule">@import</span> <span class="token string">'~@rei/cdr-tokens/dist/scss/cdr-tokens.scss'</span><span class="token punctuation">;</span></span>
  <span class="token selector">.custom-body-class</span> <span class="token punctuation">{</span>
    <span class="token atrule"><span class="token rule">@include</span> cdr-text-body-500<span class="token punctuation">;</span></span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="strong" tabindex="-1"><a class="header-anchor" href="#strong">#</a> Strong</h3>
<p>Body strong is also intended for long-form copy but should be used minimally. Use body strong styles when emphasizing a subset of copy and never for the entire length of copy.</p>
<cdr-doc-example-code-pair :copyButton="false" repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cdr-text--body-strong-500<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Cross-country skiing (sometimes called classic skiing) encompasses several styles, from touring or racing on groomed ski tracks to gliding through deep backcountry snow.
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></cdr-doc-example-code-pair>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom-body-class<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Cross-country skiing (sometimes called classic skiing) encompasses several styles, from touring or racing on groomed ski tracks to gliding through deep backcountry snow.
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token atrule"><span class="token rule">@import</span> <span class="token string">'~@rei/cdr-tokens/dist/scss/cdr-tokens.scss'</span><span class="token punctuation">;</span></span>
  <span class="token selector">.custom-body-class</span> <span class="token punctuation">{</span>
    <span class="token atrule"><span class="token rule">@include</span> cdr-text-body-strong-500<span class="token punctuation">;</span></span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="guidelines-2" tabindex="-1"><a class="header-anchor" href="#guidelines-2">#</a> Guidelines</h3>
<h4 id="use-when-1" tabindex="-1"><a class="header-anchor" href="#use-when-1">#</a> Use When</h4>
<ul>
<li>Displaying articles for long-form content, such as Expert Advice articles or Co-op Journal entries</li>
<li>Displaying member or legal messages, such as on the PDP</li>
<li>Displaying product descriptions</li>
<li>Displaying customer reviews, such as on the PDP</li>
</ul>
<h4 id="don-t-use-when-1" tabindex="-1"><a class="header-anchor" href="#don-t-use-when-1">#</a> Don't Use When</h4>
<ul>
<li>Displaying form inputs. Instead, use <RouterLink to="/components/input/">Inputs</RouterLink></li>
<li>Listing product features. Instead, use <RouterLink to="/components/lists/">Lists</RouterLink></li>
</ul>
<h4 id="the-basics-1" tabindex="-1"><a class="header-anchor" href="#the-basics-1">#</a> The Basics</h4>
<ul>
<li>
<p>Body styles should be used for:</p>
<ul>
<li>Legal messages</li>
<li>Shipping messages</li>
<li>Customer reviews</li>
<li>Product, class, event, or trip descriptions</li>
<li>Editorial copy</li>
<li>Long articles</li>
</ul>
</li>
<li>
<p>Max-width for paragraph containers is 634px or line length should not exceed 75 characters per line</p>
</li>
<li>
<p>Use standard (dark) text colors on light backgrounds for article text</p>
</li>
<li>
<p>Consider cdr-color-text-primary, cdr-color-text-secondary, cdr-color-text-emphasis, or cdr-color-text-inverse when choosing body colors. If needed, cdr-color-text-sale is also available. Avoid cdr-color-text-brand for body styles</p>
</li>
</ul>
<h4 id="content-1" tabindex="-1"><a class="header-anchor" href="#content-1">#</a> Content</h4>
<ul>
<li>Use adjacent text, a definition list, a glossary, or other method to supplement words that are ambiguous</li>
<li>Abbreviations:
<ul>
<li>Follow <a href="https://www.cloud-dam.rei.com/en-us/AssetGuidesandCreativeStandards/StyleGuidePage/MasterBrandCopyGuides" target="_blank" rel="noopener noreferrer">REI Copy Guidelines<ExternalLinkIcon/></a> for dates, time, dimensions, measurements, electrical units, and geographic reference</li>
<li>Expand abbreviations by explaining the definition the first time it is used</li>
<li>Use the <code>&lt;abbr&gt;</code> element, or link to a definition or glossary</li>
</ul>
</li>
<li>For ease of reading, readability level should be about Grade 7. To test the body text, use the <a href="http://www.hemingwayapp.com/" target="_blank" rel="noopener noreferrer">Hemingway Editor<ExternalLinkIcon/></a>.</li>
<li>When possible, write the first sentence as an introduction to the paragraph. With screen readers, users can jump from paragraph to paragraph, listening to the first sentence or two before moving on to the next paragraph</li>
</ul>
<h4 id="applying-strong-to-body-styles" tabindex="-1"><a class="header-anchor" href="#applying-strong-to-body-styles">#</a> Applying Strong to Body Styles</h4>
<p>Body styles include a set of strong options: <code>cdr-text-body-strong-500</code>, <code>cdr-text-body-strong-400</code>, and <code>cdr-text-body-strong-300</code>. However, there might be times when a set of words within a sentence needs to be bold. In those cases, use the generic cdr-text-strong. The set of strong options have a lighter font weight than the generic cdr-text-strong.</p>
<h4 id="do-don-t-2" tabindex="-1"><a class="header-anchor" href="#do-don-t-2">#</a> Do / Don’t</h4>
<do-dont :examples="$page.frontmatter.characterlength" />
<h3 id="resources-1" tabindex="-1"><a class="header-anchor" href="#resources-1">#</a> Resources</h3>
<ul>
<li>Article: Which Are More Legible: <a href="http://alexpoole.info/blog/which-are-more-legible-serif-or-sans-serif-typefaces/" target="_blank" rel="noopener noreferrer">Serif or Sans Serif Typefaces?<ExternalLinkIcon/></a></li>
<li>WebAIM Article: <a href="https://webaim.org/articles/evaluatingcognitive/" target="_blank" rel="noopener noreferrer">Evaluating Cognitive Web Accessibility<ExternalLinkIcon/></a></li>
</ul>
<h2 id="utility" tabindex="-1"><a class="header-anchor" href="#utility">#</a> Utility</h2>
<p>Utility styles are used to communicate  functionality or descriptive information. Shorter content is a good candidate for the more condensed and compact utility styling. Utility styles should not be replaced with headings. While headings help group and categorize content, utility styles help to label elements or give users information on how to take action. Cedar utility styles are available in both serif and <a href="https://rei.github.io/rei-cedar-docs/foundation/typography/#graphik" target="_blank" rel="noopener noreferrer">sans serif<ExternalLinkIcon/></a> options. Additionally, each utility style has a strong option.</p>
<h3 id="serif-1" tabindex="-1"><a class="header-anchor" href="#serif-1">#</a> Serif</h3>
<p>Utility serif styles should be used when additional brand emphasis is needed.</p>
<cdr-doc-example-code-pair :copyButton="false" repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cdr-text--utility-serif-800<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Mon–Fri, 7am–5pm PT
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></cdr-doc-example-code-pair>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom-utility-class<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Mon–Fri, 7am–5pm PT
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token atrule"><span class="token rule">@import</span> <span class="token string">'~@rei/cdr-tokens/dist/scss/cdr-tokens.scss'</span><span class="token punctuation">;</span></span>
  <span class="token selector">.custom-utility-class</span> <span class="token punctuation">{</span>
    <span class="token atrule"><span class="token rule">@include</span> cdr-text-utility-serif-800<span class="token punctuation">;</span></span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="serif-strong-1" tabindex="-1"><a class="header-anchor" href="#serif-strong-1">#</a> Serif Strong</h3>
<p>Utility serif strong styles should be used when additional emphasis is needed over utility serif.</p>
<cdr-doc-example-code-pair :copyButton="false" repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cdr-text--utility-serif-strong-800<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Mon–Fri, 7am–5pm PT
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></cdr-doc-example-code-pair>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom-utility-class<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Mon–Fri, 7am–5pm PT
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token atrule"><span class="token rule">@import</span> <span class="token string">'~@rei/cdr-tokens/dist/scss/cdr-tokens.scss'</span><span class="token punctuation">;</span></span>
  <span class="token selector">.custom-utility-class</span> <span class="token punctuation">{</span>
    <span class="token atrule"><span class="token rule">@include</span> cdr-text-utility-serif-strong-800<span class="token punctuation">;</span></span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="sans-2" tabindex="-1"><a class="header-anchor" href="#sans-2">#</a> Sans</h3>
<p>Utility sans styles typically make up the majority of utility styles used on a given page.</p>
<cdr-doc-example-code-pair :copyButton="false" repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cdr-text--utility-sans-800<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Mon–Fri, 7am–5pm PT
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></cdr-doc-example-code-pair>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom-utility-class<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Mon–Fri, 7am–5pm PT
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token atrule"><span class="token rule">@import</span> <span class="token string">'~@rei/cdr-tokens/dist/scss/cdr-tokens.scss'</span><span class="token punctuation">;</span></span>
  <span class="token selector">.custom-utility-class</span> <span class="token punctuation">{</span>
    <span class="token atrule"><span class="token rule">@include</span> cdr-text-utility-sans-800<span class="token punctuation">;</span></span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="sans-strong" tabindex="-1"><a class="header-anchor" href="#sans-strong">#</a> Sans Strong</h3>
<p>Utility sans styles should be used when additional emphasis is needed.</p>
<cdr-doc-example-code-pair :copyButton="false" repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cdr-text--utility-sans-strong-800<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Mon–Fri, 7am–5pm PT
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></cdr-doc-example-code-pair>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom-utility-class<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Mon–Fri, 7am–5pm PT
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token atrule"><span class="token rule">@import</span> <span class="token string">'~@rei/cdr-tokens/dist/scss/cdr-tokens.scss'</span><span class="token punctuation">;</span></span>
  <span class="token selector">.custom-utility-class</span> <span class="token punctuation">{</span>
    <span class="token atrule"><span class="token rule">@include</span> cdr-text-utility-sans-strong-800<span class="token punctuation">;</span></span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="guidelines-3" tabindex="-1"><a class="header-anchor" href="#guidelines-3">#</a> Guidelines</h3>
<ul>
<li>Utility styles should be used to label elements or give users information on how to take action. For instance, on error messages or pricing information</li>
<li>Consider all cdr-color-text colors with the exception of cdr-color-text-brand for utility styles</li>
</ul>
<h4 id="do-don-t-3" tabindex="-1"><a class="header-anchor" href="#do-don-t-3">#</a> Do / don’t</h4>
<do-dont :examples="$page.frontmatter.utilityHeadings" />
<do-dont :examples="$page.frontmatter.utilityTight" />
<h2 id="eyebrow" tabindex="-1"><a class="header-anchor" href="#eyebrow">#</a> Eyebrow</h2>
<p>Eyebrows introduce a topic or show how an item is categorized. Content tags or certain label styles are two examples. Eyebrow text styles should not be used as headings or used for brand names.</p>
<cdr-doc-example-code-pair :copyButton="false" repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cdr-text--eyebrow-100<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Hiking, backpacking
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></cdr-doc-example-code-pair>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom-eyebrow-class<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Mon–Fri, 7am–5pm PT
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token atrule"><span class="token rule">@import</span> <span class="token string">'~@rei/cdr-tokens/dist/scss/cdr-tokens.scss'</span><span class="token punctuation">;</span></span>
  <span class="token selector">.custom-eyebrow-class</span> <span class="token punctuation">{</span>
    <span class="token atrule"><span class="token rule">@include</span> cdr-text-eyebrow-100<span class="token punctuation">;</span></span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="guidelines-4" tabindex="-1"><a class="header-anchor" href="#guidelines-4">#</a> Guidelines</h3>
<h4 id="do-don-t-4" tabindex="-1"><a class="header-anchor" href="#do-don-t-4">#</a> Do / don’t</h4>
<do-dont :examples="$page.frontmatter.eyebrowBrand" />
<do-dont :examples="$page.frontmatter.eyebrowHeading" />
<h2 id="italic-and-strong-generic-classes" tabindex="-1"><a class="header-anchor" href="#italic-and-strong-generic-classes">#</a> Italic and Strong Generic Classes</h2>
<p>In addition to the specific type options listed above, we have provided two generic emphasis styles allowing you to make text italic or bold.</p>
<cdr-doc-example-code-pair :copyButton="false" repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cdr-text--body-300<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    REI Co-op’s Trailsmith line was featured in  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span>
    <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>em<span class="token punctuation">"</span></span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cdr-text--italic<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Field &amp; Stream’s
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>
    “10 Best Pants for Working Outside”
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></cdr-doc-example-code-pair>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom-body-class<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    REI Co-op’s Trailsmith line was featured in  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span>
    <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>em<span class="token punctuation">"</span></span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom-italic-class<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Field &amp; Stream’s
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>
    “10 Best Pants for Working Outside”
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token atrule"><span class="token rule">@import</span> <span class="token string">'~@rei/cdr-tokens/dist/scss/cdr-tokens.scss'</span><span class="token punctuation">;</span></span>
  <span class="token selector">.custom-body-class</span> <span class="token punctuation">{</span>
    <span class="token atrule"><span class="token rule">@include</span> cdr-text-body-300<span class="token punctuation">;</span></span>
  <span class="token punctuation">}</span>
  <span class="token selector">.custom-italic-class</span> <span class="token punctuation">{</span>
    <span class="token atrule"><span class="token rule">@include</span> cdr-text-italic<span class="token punctuation">;</span></span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><cdr-doc-example-code-pair :copyButton="false" repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cdr-text--body-300<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    This trip is rated as
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span>
    <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>strong<span class="token punctuation">"</span></span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cdr-text--strong<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Vigorous [4]
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>.
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></cdr-doc-example-code-pair>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom-body-class<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    This trip is rated as
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span>
    <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>strong<span class="token punctuation">"</span></span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom-strong-class<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Vigorous [4]
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>.
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token atrule"><span class="token rule">@import</span> <span class="token string">'~@rei/cdr-tokens/dist/scss/cdr-tokens.scss'</span><span class="token punctuation">;</span></span>
  <span class="token selector">.custom-body-class</span> <span class="token punctuation">{</span>
    <span class="token atrule"><span class="token rule">@include</span> cdr-text-body-300<span class="token punctuation">;</span></span>
  <span class="token punctuation">}</span>
  <span class="token selector">.custom-strong-class</span> <span class="token punctuation">{</span>
    <span class="token atrule"><span class="token rule">@include</span> cdr-text-strong<span class="token punctuation">;</span></span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="accessibility" tabindex="-1"><a class="header-anchor" href="#accessibility">#</a> Accessibility</h2>
<h3 id="headings-1" tabindex="-1"><a class="header-anchor" href="#headings-1">#</a> Headings</h3>
<p>To ensure that usage of this component complies with accessibility guidelines:</p>
<ul>
<li>Use h1-h6 to identify headings (<code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>, <code>&lt;h3&gt;</code>, <code>&lt;h4&gt;</code>, <code>&lt;h5&gt;</code>, and <code>&lt;h6&gt;</code>)</li>
<li>Headings are used to label page regions
<ul>
<li>Use the aria-label attribute to associate headings with their page region, as described in the <a href="https://www.w3.org/WAI/tutorials/page-structure/labels/#using-aria-labelledby" target="_blank" rel="noopener noreferrer">label page regions<ExternalLinkIcon/></a> tutorial</li>
</ul>
</li>
<li><a href="#subheadings">Subheadings</a> are not semantic headings. Subheadings may be visually styled as a heading, but will not be navigable using a screen reader</li>
<li>Assistive technologies skim the structure of a page:
<ul>
<li>Allow users to navigate to or skip over sections through the use of heading levels</li>
<li>Avoid skipping heading levels (e.g., <code>&lt;h2&gt;</code> to  <code>&lt;h4&gt;</code> )</li>
</ul>
</li>
</ul>
<p>This component has compliance with <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-keyboard-operable.html" target="_blank" rel="noopener noreferrer">WCAG SC 2.1.1<ExternalLinkIcon/></a> guidelines by:</p>
<ul>
<li>Defining semantic heading levels with the ability to assign predefined visual heading styles to each level</li>
</ul>
<h3 id="paragraphs" tabindex="-1"><a class="header-anchor" href="#paragraphs">#</a> Paragraphs</h3>
<p>To ensure that usage of this component complies with accessibility guidelines:</p>
<ul>
<li>Text container does not exceed 634px or line length does not exceed more than 75 characters</li>
<li>Minimize use of reversed-out body copy (light copy on a dark background) because it’s harder to read</li>
<li>When possible, use the first sentence as an introduction to the paragraph. With screen readers, users can listen to the first sentence and then jump to the next paragraph</li>
<li>Break long pages into shorter sections by organizing content into well-defined groups or chunks</li>
</ul>
<p>This component has compliance with following WebAIM’s accessibility guidelines:</p>
<ul>
<li><a href="https://www.w3.org/TR/WCAG20/#visual-audio-contrast-visual-presentation" target="_blank" rel="noopener noreferrer">WCAG SC 1.4.8: Visual presentation<ExternalLinkIcon/></a>: Cedar Design System text component provides for spacing for:
<ul>
<li>Within paragraphs, line spacing is at least 1.5 times font height</li>
</ul>
</li>
</ul>
<h2 id="implementation" tabindex="-1"><a class="header-anchor" href="#implementation">#</a> Implementation</h2>
<p>Cedar uses design tokens to store typographic attributes that represent the fundamental decisions of Cedar’s visual language.</p>
<p>For more information about design tokens and a complete list of tokens available in Cedar, visit the <RouterLink to="/tokens/overview/">Design Tokens</RouterLink> overview.</p>
<h3 id="component-api" tabindex="-1"><a class="header-anchor" href="#component-api">#</a> Component API</h3>
<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />
<h3 id="slots" tabindex="-1"><a class="header-anchor" href="#slots">#</a> Slots</h3>
<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage">#</a> Usage</h2>
<p>The <strong>CdrText</strong> component allows for styling any HTML element with available text styles. Visual style and semantic meaning are managed independently by providing:</p>
<ul>
<li>A <code>tag</code> property to control which type of element is rendered</li>
<li>Styling which can be applied with a custom CSS class and a text mixin</li>
</ul>
<p>This method decouples the semantic meaning of a heading level from the visual representation.</p>
<p>With this decoupling, you can style other markup to look like a heading that semantically isn’t a heading.</p>
<p>When creating page headers, apply the correct semantic tag.</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span> <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>h1<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom-heading-class<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    A navigable semantic heading
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token atrule"><span class="token rule">@import</span> <span class="token string">'~@rei/cdr-tokens/dist/scss/cdr-tokens.scss'</span><span class="token punctuation">;</span></span>
  <span class="token selector">.custom-heading-class</span> <span class="token punctuation">{</span>
    <span class="token atrule"><span class="token rule">@include</span> cdr-text-heading-700<span class="token punctuation">;</span></span>
    <span class="token atrule"><span class="token rule">@include</span> cdr-sm-mq</span> <span class="token punctuation">{</span>
      &lt;!-- `cdr-sm-mq` mixin applies styling at small breakpoint and above -->
      <span class="token atrule"><span class="token rule">@include</span> cdr-text-heading-800<span class="token punctuation">;</span></span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>Note that heading styles do not always need to be paired with heading tags. Heading tags should be used for accessibility purposes to describe the page hierarchy.</p>
<cdr-doc-code-snippet :copy-button="false" :line-numbers="false">
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom-heading-class<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Text styled as a heading for display only
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token atrule"><span class="token rule">@import</span> <span class="token string">'~@rei/cdr-tokens/dist/scss/cdr-tokens.scss'</span><span class="token punctuation">;</span></span>
  <span class="token selector">.custom-heading-class</span> <span class="token punctuation">{</span>
    <span class="token atrule"><span class="token rule">@include</span> cdr-text-heading-700<span class="token punctuation">;</span></span>
    <span class="token atrule"><span class="token rule">@include</span> cdr-sm-mq</span> <span class="token punctuation">{</span>
      &lt;!-- `cdr-sm-mq` mixin applies styling at small breakpoint and above -->
      <span class="token atrule"><span class="token rule">@include</span> cdr-text-heading-800<span class="token punctuation">;</span></span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></cdr-doc-code-snippet>
<p><strong>CdrText</strong> components can be extended with other Cedar or custom classes.</p>
<cdr-doc-code-snippet :copy-button="false" :line-numbers="false">
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom-body-class<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    This paragraph is adding a bottom margin to provide space between it and the paragraph below
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token atrule"><span class="token rule">@import</span> <span class="token string">'~@rei/cdr-tokens/dist/scss/cdr-tokens.scss'</span><span class="token punctuation">;</span></span>
  <span class="token selector">.custom-body-class</span> <span class="token punctuation">{</span>
    <span class="token atrule"><span class="token rule">@include</span> cdr-text-body-300<span class="token punctuation">;</span></span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> $cdr-space-one-x<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></cdr-doc-code-snippet>
<h2 id="text-options" tabindex="-1"><a class="header-anchor" href="#text-options">#</a> Text Options</h2>
<text-doc-overview />
</cdr-doc-table-of-contents-shell>
</template>
