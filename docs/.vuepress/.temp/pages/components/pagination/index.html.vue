<template><cdr-doc-table-of-contents-shell>
<h1 id="overview" tabindex="-1"><a class="header-anchor" href="#overview">#</a> Overview</h1>
<h2 id="pagination-sm-md-lg" tabindex="-1"><a class="header-anchor" href="#pagination-sm-md-lg">#</a> Pagination @ sm, md, lg</h2>
<p>At the sm, md, and lg breakpoints, pagination displays as a list of number text links. Prev and Next links are also added when applicable.</p>
<cdr-doc-example-code-pair repository-href="/src/components/accordion" :sandbox-data="$page.frontmatter.sandboxData" :model="{ page: 3, pages: [{page: 1, url: '#'}, {page: 2, url: '#'}, {page: 3, url: '#'}, {page: 4, url: '#'}, {page: 5, url: '#'}] }">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-pagination</span>
  <span class="token attr-name">:pages</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pages<span class="token punctuation">"</span></span>
  <span class="token attr-name">:total-pages</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>page<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="intra-page-navigation" tabindex="-1"><a class="header-anchor" href="#intra-page-navigation">#</a> Intra-Page Navigation</h2>
<p>By default, CdrPagination assumes that you are navigating through pages on a site and will update the URL on change. For content that requires pagination but is part of a larger page the <code>linkTag</code> and <code>forLabel</code> properties can be used to render a button based pagination. Set <code>linkTag</code> to be <code>&quot;button&quot;</code> and set the <code>forLabel</code> to describe what element is being paginated, for example <code>&quot;Pagination for user reviews&quot;</code></p>
<cdr-doc-example-code-pair repository-href="/src/components/accordion" :sandbox-data="$page.frontmatter.sandboxData" :model="{ page: 3, pages: [{page: 1, url: '#'}, {page: 2, url: '#'}, {page: 3, url: '#'}, {page: 4, url: '#'}, {page: 5, url: '#'}] }">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-pagination</span>
  <span class="token attr-name">link-tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span>
  <span class="token attr-name">for-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Pagination for user reviews<span class="token punctuation">"</span></span>
  <span class="token attr-name">:pages</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pages<span class="token punctuation">"</span></span>
  <span class="token attr-name">:total-pages</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>page<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="overriding-default-navigation" tabindex="-1"><a class="header-anchor" href="#overriding-default-navigation">#</a> Overriding Default Navigation</h2>
<p>By default pagination uses anchor elements which navigate the users web browser when clicked. This behavior can be overriden by adding a handler to the <code>navigate</code> event which emits <code>(currentPage, currentUrl, event)</code> and calling <code>event.preventDefault()</code> in the handler function. The <code>currentPage</code> and <code>currentUrl</code> can then be used to implement router based navigation or programmatically navigate the page. This can also be used in conjunction with the <code>link-tag</code> property to render a button based pagination.</p>
<cdr-doc-example-code-pair repository-href="/src/components/accordion" :sandbox-data="$page.frontmatter.sandboxData" :model="{ lastNavigation: '', page: 3, pages: [{page: 1, url: '#'}, {page: 2, url: '#'}, {page: 3, url: '#'}, {page: 4, url: '#'}, {page: 5, url: '#'}] }" :methods="{handleNavigation(num, url, e) {e.preventDefault(); this.lastNavigation = num }}">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-pagination</span>
    <span class="token attr-name">:pages</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pages<span class="token punctuation">"</span></span>
    <span class="token attr-name">:total-pages</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>page<span class="token punctuation">"</span></span>
    <span class="token attr-name">@navigate</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleNavigation<span class="token punctuation">"</span></span>
  <span class="token punctuation">/></span></span>
  Last Navigation: {{ lastNavigation }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="pagination-xs" tabindex="-1"><a class="header-anchor" href="#pagination-xs">#</a> Pagination @ xs</h2>
<p>At the xs breakpoint, pagination adapts to a Select component using the native UI dropdown menu.</p>
<img :src="$withBase('/pagination/pagination_breakpoint_xs_2x.png')" alt="Image showing responsive pagination component using Select element" />
<h2 id="accessibility" tabindex="-1"><a class="header-anchor" href="#accessibility">#</a> Accessibility</h2>
<p>This component complies with accessibility guidelines by doing the following:</p>
<ul>
<li>Wraps the pagination links in a <code>&lt;nav&gt;</code> element to let screen readers recognize the pagination controls</li>
<li>Sets <code>aria-label=&quot;pagination&quot;</code> to describe the type of navigation.</li>
<li>Indicates the active page by adding <code>aria-current=&quot;page&quot;</code> to the link that points to the current page</li>
</ul>
<p>If you are building an intra-page button based pagination, the <code>forLabel</code> property must be used to indicate what content is being paginated. For example,</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;div>
  &lt;div>{{ reviews content }}&lt;/div>

  &lt;cdr-pagination
    link-tag="button"
    for-label="pagination for reviews"

    :pages="pages"
    :total-pages="5"
    v-model="page"
  />
&lt;/div>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><br />
<p>This component has compliance with WCAG guidelines by:</p>
<ul>
<li><a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&amp;showtechniques=248#location" target="_blank" rel="noopener noreferrer">WCAG 2.4.8<ExternalLinkIcon/></a>: Information about the user's location within a set of Web pages is available</li>
<li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-consistent-locations.html" target="_blank" rel="noopener noreferrer">WCAG 3.2.3<ExternalLinkIcon/></a>: Navigation patterns follow a consistent pattern. Only position pagination component at the bottom of the page</li>
<li><a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#qr-navigation-mechanisms-focus-order" target="_blank" rel="noopener noreferrer">WCAG 2.4.3<ExternalLinkIcon/></a>: Focus state receives focus in an order that preserves meaning</li>
<li><a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#qr-navigation-mechanisms-focus-visible" target="_blank" rel="noopener noreferrer">WCAG 2.4.7<ExternalLinkIcon/></a>: Focus is visible</li>
<li><a href="https://www.w3.org/WAI/WCAG21/Understanding/target-size.html" target="_blank" rel="noopener noreferrer">WCAG 2.5.5<ExternalLinkIcon/></a>: Target size for pagination links are large enough for users to easily activate them</li>
</ul>
<hr>
<h1 id="guidelines" tabindex="-1"><a class="header-anchor" href="#guidelines">#</a> Guidelines</h1>
<h2 id="seo" tabindex="-1"><a class="header-anchor" href="#seo">#</a> SEO</h2>
<p>For best SEO support, use of pagination requires additional markup and logic in the <code>&lt;head&gt;</code> of the page.</p>
<p>See REI's SEO Confluence page on <a href="https://confluence.rei.com/display/SI/Pagination+Tag+Implementation" target="_blank" rel="noopener noreferrer">pagination<ExternalLinkIcon/></a> for information on implementing this correctly on your page.</p>
<p>Note that REI has chosen HTML <code>&lt;link&gt;</code> elements instead of HTTP headers. Make sure to use fully qualified absolute URLs in the <code>&lt;link&gt;</code> elements instead of relative URLs.</p>
<h2 id="use-when" tabindex="-1"><a class="header-anchor" href="#use-when">#</a> Use When</h2>
<ul>
<li>Providing navigation to break apart large quantities of content</li>
<li>Breaking up search result pages into manageable sections</li>
</ul>
<h2 id="don-t-use-when" tabindex="-1"><a class="header-anchor" href="#don-t-use-when">#</a> Don't Use When</h2>
<ul>
<li>Using lazy load or infinite scroll within an experience</li>
<li>Switching between slides or content in a carousel</li>
<li>Displaying editorial content. Instead, show entire article on one page</li>
</ul>
<h2 id="behavior" tabindex="-1"><a class="header-anchor" href="#behavior">#</a> Behavior</h2>
<ul>
<li>Page number links are truncated as follows: [first] ... [current-1] [current] [current+1] ... [last]</li>
<li>If there are 7 pages or fewer, all page number links will be shown</li>
<li>Prev or Next text links are removed when the first or last page are active</li>
</ul>
<p>Within pagination, link styles are adapted</p>
<ul>
<li>Text links are displayed as the primary text color</li>
<li>Prev and Next links use the small size for the caret-left and caret-right icons</li>
</ul>
<h3 id="do-don-t" tabindex="-1"><a class="header-anchor" href="#do-don-t">#</a> Do / Don't</h3>
<p>By default, pagination is center aligned under category or search results content.</p>
<do-dont :examples="$page.frontmatter.align" />
<br />
<p>The primary placement for pagination is at the bottom of a page that displays rows of content.</p>
<do-dont :examples="$page.frontmatter.placement" />
<br />
<p>Use pagination logic to truncate link list, when possible.</p>
<do-dont :examples="$page.frontmatter.truncate" />
<h3 id="responsiveness" tabindex="-1"><a class="header-anchor" href="#responsiveness">#</a> Responsiveness</h3>
<p>Pagination adapts to a Select component with a native UI dropdown menu on XS breakpoints to provide a mobile-friendly experience.</p>
<hr>
<h1 id="api" tabindex="-1"><a class="header-anchor" href="#api">#</a> API</h1>
<h2 id="props" tabindex="-1"><a class="header-anchor" href="#props">#</a> Props</h2>
<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />
<h2 id="events" tabindex="-1"><a class="header-anchor" href="#events">#</a> Events</h2>
<cdr-doc-api type="event" :api-data="$page.frontmatter.versions[0].components[0].api.events" />
<h2 id="scoped-slots" tabindex="-1"><a class="header-anchor" href="#scoped-slots">#</a> Scoped Slots</h2>
<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.scopedSlots" />
</cdr-doc-table-of-contents-shell>
</template>
