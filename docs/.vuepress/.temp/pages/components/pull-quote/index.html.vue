<template><cdr-doc-table-of-contents-shell>
<h1 id="overview" tabindex="-1"><a class="header-anchor" href="#overview">#</a> Overview</h1>
<h2 id="default-medium" tabindex="-1"><a class="header-anchor" href="#default-medium">#</a> Default (Medium)</h2>
<p>Default pull quote can be used with the following HTML tags: <code>&lt;p&gt;</code>, <code>&lt;div&gt;</code>, <code>&lt;aside&gt;</code>. For XS breakpoint, a border is added below the pull quote and the font size is smaller.</p>
<cdr-doc-example-code-pair repository-href="/src/components/quote" :sandbox-data="$page.frontmatter.sandboxData">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-quote</span>
        <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>aside<span class="token punctuation">"</span></span>
        <span class="token attr-name">modifier</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pull<span class="token punctuation">"</span></span>
        <span class="token attr-name">summary</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it<span class="token punctuation">'</span>s the only thing that ever has.<span class="token punctuation">"</span></span>
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
</ul>
<br>
<p>This component has compliance with WCAG guidelines by:</p>
<ul>
<li>Setting the <code>aria-hidden=&quot;true&quot;</code> so that the pull quote cannot be read by a screen reader</li>
</ul>
<hr>
<h1 id="guidelines" tabindex="-1"><a class="header-anchor" href="#guidelines">#</a> Guidelines</h1>
<h2 id="use-when" tabindex="-1"><a class="header-anchor" href="#use-when">#</a> Use When</h2>
<ul>
<li>Attracting the user’s attention to article text</li>
<li>Breaking up a large body of text</li>
<li>Providing the reader with visual markers</li>
<li>Maintaining a sense of sequence and place</li>
</ul>
<h2 id="don-t-use-when" tabindex="-1"><a class="header-anchor" href="#don-t-use-when">#</a> Don't Use When</h2>
<ul>
<li>Displaying a citation reference. Instead, use <RouterLink to="/components/block-quote/">Block Quote</RouterLink></li>
<li>Displaying for a decorative treatment only</li>
</ul>
<h2 id="the-basics" tabindex="-1"><a class="header-anchor" href="#the-basics">#</a> The Basics</h2>
<p>Use a pull quote for emphasizing content that has a close and significant relationship with the surrounding text and will help users to visually scan the page.</p>
<br/>
<do-dont :examples="$page.frontmatter.indenting" />
<do-dont :examples="$page.frontmatter.too_many" />
<do-dont :examples="$page.frontmatter.position" />
<h2 id="responsiveness" tabindex="-1"><a class="header-anchor" href="#responsiveness">#</a> Responsiveness</h2>
<p>When a pull quote is displayed at XS breakpoint, the left border will appear below the pull quote and will use a smaller font size.</p>
<hr>
<h1 id="api" tabindex="-1"><a class="header-anchor" href="#api">#</a> API</h1>
<h2 id="props" tabindex="-1"><a class="header-anchor" href="#props">#</a> Props</h2>
<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />
</cdr-doc-table-of-contents-shell>
</template>
