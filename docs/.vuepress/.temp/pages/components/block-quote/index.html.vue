<template><cdr-doc-table-of-contents-shell>
# Overview
<h2 id="default-medium" tabindex="-1"><a class="header-anchor" href="#default-medium">#</a> Default (Medium)</h2>
<p>Default block quote can be used with the following HTML tags: <code>&lt;p&gt;</code>, <code>&lt;div&gt;</code>, <code>&lt;aside&gt;</code>. This is responsive with styles for XS breakpoint.</p>
<cdr-doc-example-code-pair repository-href="/src/components/quote" :sandbox-data="$page.frontmatter.sandboxData">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-quote</span>
        <span class="token attr-name">modifier</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>block<span class="token punctuation">"</span></span>
        <span class="token attr-name">summary</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it<span class="token punctuation">'</span>s the only thing that ever has.<span class="token punctuation">"</span></span>
        <span class="token attr-name">citation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Margaret Mead<span class="token punctuation">"</span></span>
      <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="accessibility" tabindex="-1"><a class="header-anchor" href="#accessibility">#</a> Accessibility</h2>
<p>To ensure that usage of this component complies with accessibility guidelines:</p>
<ul>
<li>All recommendations listed for <RouterLink to="/components/text/#paragraphs">Paragraphs</RouterLink> apply to this component</li>
<li>Do not use this component to indent text. Screen readers use the <code>&lt;blockquote&gt;</code> element to:
<ul>
<li>Provide semantic understanding of page content by announcing blockquote as quote</li>
<li>Define a sectioning root in HTML5, which means that any  <code>&lt;h1&gt;</code> - <code>&lt;h6&gt;</code>  element doesn't become part of the document’s outline</li>
</ul>
</li>
<li>To make the blockquote content accessible, use the <code>&lt;cite&gt;</code> attribute with a valid URL</li>
</ul>
<br>
<p>This component has compliance with WCAG guidelines by:</p>
<ul>
<li>Adding a <code>&lt;cite&gt;</code> element to refer to the source of the quote</li>
</ul>
<hr>
<h1 id="guidelines" tabindex="-1"><a class="header-anchor" href="#guidelines">#</a> Guidelines</h1>
<h2 id="use-when" tabindex="-1"><a class="header-anchor" href="#use-when">#</a> Use When</h2>
<ul>
<li>Highlighting valuable customer feedback</li>
<li>Encouraging a customer to try out an experience or product</li>
</ul>
<h2 id="don-t-use-when" tabindex="-1"><a class="header-anchor" href="#don-t-use-when">#</a> Don't Use When</h2>
<ul>
<li>Pulling a direct quote from an article. Instead, use <RouterLink to="/components/pull-quote/">Pull Quote</RouterLink></li>
<li>Displaying for a decorative treatment only</li>
</ul>
<h2 id="the-basics" tabindex="-1"><a class="header-anchor" href="#the-basics">#</a> The Basics</h2>
<p>Use a block quote for emphasizing content that has a close and significant relationship with the surrounding text and will help users to visually scan the page.</p>
<br/>
<do-dont :examples="$page.frontmatter.position" />
<do-dont :examples="$page.frontmatter.indenting" />
<do-dont :examples="$page.frontmatter.too_many" />
<br>
<p>Provide a citation to the external source and if available, the URL address.</p>
<br>
<do-dont :examples="$page.frontmatter.citation" />
<h2 id="content" tabindex="-1"><a class="header-anchor" href="#content">#</a> Content</h2>
<p>To make the block quote content accessible, follow these rules:</p>
<ul>
<li>Must be quoted from another source, whose address, if it has one, may be cited in the <code>&lt;cite&gt;</code> attribute</li>
<li>If the <code>&lt;cite&gt;</code> attribute is present:
<ul>
<li>Must be a valid URL</li>
<li>Link only to canonical end-state URLs with no parameter appended</li>
<li>Capitalize the cited source title the same as the author does</li>
</ul>
</li>
<li>For more information, see <a href="https://confluence.rei.com/display/accessibility/Quote" target="_blank" rel="noopener noreferrer">REI Accessible Patterns: Quotes<ExternalLinkIcon/></a></li>
</ul>
<h2 id="responsiveness" tabindex="-1"><a class="header-anchor" href="#responsiveness">#</a> Responsiveness</h2>
<p>When block quotes are displayed at XS breakpoint, the text will use a smaller font size.</p>
<hr>
<h1 id="api" tabindex="-1"><a class="header-anchor" href="#api">#</a> API</h1>
<h2 id="props" tabindex="-1"><a class="header-anchor" href="#props">#</a> Props</h2>
<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />
</cdr-doc-table-of-contents-shell>
</template>
