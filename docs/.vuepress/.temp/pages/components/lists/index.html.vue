<template><cdr-doc-table-of-contents-shell>
# Overview
<h2 id="bare" tabindex="-1"><a class="header-anchor" href="#bare">#</a> Bare</h2>
<p>Collect items to be displayed in a list when items are not marked with bullets.  This is the default and is also known as unordered and undecorated “bare” list.</p>
<cdr-doc-example-code-pair repository-href="/src/components/list" :sandbox-data="$page.frontmatter.sandboxData" :codeMaxHeight="false" >
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-list</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Default list item 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Default list item 2
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-list</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Default list item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-list</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Default list item 3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-list</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="unordered" tabindex="-1"><a class="header-anchor" href="#unordered">#</a> Unordered</h2>
<p>Collect related items that don’t need to be in a specific order or sequence. List items are typically marked with bullets.</p>
<cdr-doc-example-code-pair :codeMaxHeight="false" repository-href="/src/components/list" :sandbox-data="$page.frontmatter.sandboxData" >
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-list</span> <span class="token attr-name">modifier</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>unordered<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Default list item 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Default list item 2
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-list</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Default list item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-list</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Default list item 3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-list</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="ordered" tabindex="-1"><a class="header-anchor" href="#ordered">#</a> Ordered</h2>
<p>Collect related items with numeric order or sequence. Numbering starts at 1 with the first list item and increases by increments of 1 for each successive ordered list item.</p>
<cdr-doc-example-code-pair :codeMaxHeight="false" repository-href="/src/components/list" :sandbox-data="$page.frontmatter.sandboxData" >
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-list</span> <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ol<span class="token punctuation">"</span></span> <span class="token attr-name">modifier</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ordered<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Default list item 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Default list item 2
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-list</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Default list item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-list</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Default list item 3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-list</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="compact" tabindex="-1"><a class="header-anchor" href="#compact">#</a> Compact</h2>
<p>Compact modifier can be added to any <code>cdr-list</code> in order to reduce the margin between list items.</p>
<cdr-doc-example-code-pair repository-href="/src/components/list" :sandbox-data="$page.frontmatter.sandboxData" :codeMaxHeight="false" >
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-list</span> <span class="token attr-name">modifier</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>compact unordered<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Compact unordered list item 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Compact unordered list item 2
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-list</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Compact unordered list item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-list</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Compact unordered list item 3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-list</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="inline" tabindex="-1"><a class="header-anchor" href="#inline">#</a> Inline</h2>
<p>Display items horizontally with no divider.</p>
<cdr-doc-example-code-pair :codeMaxHeight="false" repository-href="/src/components/list" :sandbox-data="$page.frontmatter.sandboxData" >
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-list</span> <span class="token attr-name">modifier</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inline<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Default list item 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Default list item 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Default list item 3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-list</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="inline-unordered" tabindex="-1"><a class="header-anchor" href="#inline-unordered">#</a> Inline - Unordered</h2>
<p>Display items horizontally, separated by a bullet character.</p>
<cdr-doc-example-code-pair :codeMaxHeight="false" repository-href="/src/components/list" :sandbox-data="$page.frontmatter.sandboxData" >
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-list</span> <span class="token attr-name">modifier</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inline unordered<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Default list item 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Default list item 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Default list item 3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-list</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="accessibility" tabindex="-1"><a class="header-anchor" href="#accessibility">#</a> Accessibility</h2>
<p>To ensure that usage of this component complies with accessibility guidelines:</p>
<ul>
<li>Organize lists so users can understand the relationship and grouping of information</li>
<li>Use explicit list markup that allows users to:
<ul>
<li>Rapidly browse</li>
<li>Navigate a page using list content</li>
<li>Announce the number of items in each list when using screen readers</li>
</ul>
</li>
<li>Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text. (Level A)</li>
</ul>
<br />
<p>When creating nested lists, ensure they are coded properly. Always check that:</p>
<ul>
<li>List items are contained within one list</li>
<li>Spacing does not break a list into multiple individual points</li>
<li>Proper semantic tags are used - either <code>&lt;ol&gt;</code> or <code>&lt;ul&gt;</code></li>
<li>Proper structure is used to provide a visual list, do not rely on indentation</li>
<li>Special characters are not used to create a list</li>
</ul>
<br />
<p>This component has compliance with WCAG guidelines by:</p>
<ul>
<li>Providing ability to create structured lists. Lists are easier to navigate than simple tables</li>
</ul>
<hr>
<h1 id="guidelines" tabindex="-1"><a class="header-anchor" href="#guidelines">#</a> Guidelines</h1>
<h2 id="use-when" tabindex="-1"><a class="header-anchor" href="#use-when">#</a> Use When</h2>
<ul>
<li>Displaying groups of related items represented by text</li>
</ul>
<h2 id="don-t-use-when" tabindex="-1"><a class="header-anchor" href="#don-t-use-when">#</a> Don't Use When</h2>
<ul>
<li>Displaying content that is not primarily text</li>
<li>Displaying content with two or more well-defined dimensions. Instead, use <RouterLink to="/components/table/">Table</RouterLink></li>
</ul>
<h2 id="the-basics" tabindex="-1"><a class="header-anchor" href="#the-basics">#</a> The Basics</h2>
<ul>
<li>Lists can inherit cdr-text modifiers to make any text a list</li>
<li>Follow spacing requirements outlined in the <RouterLink to="/foundation/typography/">Typography</RouterLink> and <RouterLink to="/foundation/spacing/">Spacing</RouterLink> foundation articles.</li>
</ul>
<h2 id="content" tabindex="-1"><a class="header-anchor" href="#content">#</a> Content</h2>
<p>Break up chunks of content to make the information easier to scan:</p>
<ul>
<li>Separate consecutive lists on a page with a heading for each list</li>
<li>Start each item with a noun or a verb</li>
<li>Use similar phrases or clauses with the same grammatical structure. For example:
<ul>
<li><strong>Product.</strong> Zippered hand pockets; chest pocket with hidden zipper</li>
<li><strong>Materials.</strong> Snowshoes: plastic; poles: aluminum</li>
<li><strong>Duration.</strong> High: 4 hrs. 15 min.; low: 48 hrs. 20 min.</li>
</ul>
</li>
<li>Create structured content with a list. Do not use a list for formatting</li>
</ul>
<br />
<p>Use multi-column lists when:</p>
<ul>
<li>Specific ordering is not required</li>
<li>Listing items with a single word or very short phrases</li>
<li>Space is minimal</li>
<li>Viewing items at a glance is more beneficial than scrolling</li>
</ul>
<br />
<p>Every item in a list must:</p>
<ul>
<li>Start with a capital letter and use sentence case</li>
<li>Use semicolons when linking independent clauses and product details in the list</li>
<li>End each sentence in a list item with a period when there are multiple sentences; however, don’t add a period for the last sentence or phrase</li>
</ul>
<h3 id="do-don-t" tabindex="-1"><a class="header-anchor" href="#do-don-t">#</a> Do / Don’t</h3>
<do-dont :examples="$page.frontmatter.list1" />
<br />
<do-dont :examples="$page.frontmatter.list2" />
<h2 id="resources" tabindex="-1"><a class="header-anchor" href="#resources">#</a> Resources</h2>
<p>WebAIM: <a href="https://webaim.org/techniques/semanticstructure/" target="_blank" rel="noopener noreferrer">Semantic Structure: Using Lists Correctly<ExternalLinkIcon/></a></p>
<hr>
<h1 id="api" tabindex="-1"><a class="header-anchor" href="#api">#</a> API</h1>
<h2 id="props" tabindex="-1"><a class="header-anchor" href="#props">#</a> Props</h2>
<p>This component will bind any attribute that a <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul" target="_blank" rel="noopener noreferrer">native HTML list element<ExternalLinkIcon/></a> accepts.</p>
<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props"/>
<h2 id="slots" tabindex="-1"><a class="header-anchor" href="#slots">#</a> Slots</h2>
<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />
<h2 id="component-variables" tabindex="-1"><a class="header-anchor" href="#component-variables">#</a> Component Variables</h2>
<cdr-doc-comp-vars name="CdrList"/>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage">#</a> Usage</h2>
<p>Visual style and semantic meaning are managed independently by providing:</p>
<ul>
<li>Element to the <code>tag</code> prop</li>
<li>Style to the <code>modifier</code> prop</li>
</ul>
<br/>
<p>By default the <strong>CdrList</strong> component renders as an unordered and undecorated &quot;bare&quot; list. To use an ordered list, pass <code>&lt;ol&gt;</code> to the tag property.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-list</span> <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ol<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span> item one <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span> item two <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-list</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>The <strong>CdrList</strong> component has decoupled the semantic tags <code>&lt;ul&gt;</code> and <code>&lt;ol&gt;</code> from visual presentation.</p>
<br/>
<p>It is possible to render a semantic ordered list <code>&lt;ol&gt;</code> as a visually non-styled or bulleted list using the <code>cdr-list</code> modifiers. With this decoupling, individual list items can contain a variety of HTML elements, including paragraphs, headings, form elements, and other (nested) lists. Ensure that content is structured and follows design guidelines.</p>
<h3 id="tag-variants" tabindex="-1"><a class="header-anchor" href="#tag-variants">#</a> Tag Variants</h3>
<p>Following are different types of lists:</p>
<ul>
<li>Unordered lists:
<ul>
<li>Used when the order of the items is not relevant</li>
<li>Consists of one <code>&lt;ul&gt;</code> element and multiple list item <code>&lt;li&gt;</code> elements</li>
</ul>
</li>
<li>Ordered lists:
<ul>
<li>Used for sequential information</li>
<li>Consists of one <code>&lt;ol&gt;</code> element and multiple list item <code>&lt;li&gt;</code> elements</li>
</ul>
</li>
<li>Nested lists:
<ul>
<li>Every <code>cdr-list</code> can be nested into another list</li>
<li>Assistive technology can easily inform users about the number of steps</li>
</ul>
</li>
</ul>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-list</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span> Unordered list item text
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-list</span> <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ol<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Ordered list item text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-list</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-list</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul>
<li>Bare or unstyled lists:
<ul>
<li>Contains a variety of HTML elements, including paragraphs, headings, form elements, and other (nested) lists</li>
</ul>
</li>
</ul>
<h3 id="modifiers" tabindex="-1"><a class="header-anchor" href="#modifiers">#</a> Modifiers</h3>
<p>Note that the tag itself does not determine display, a modifier must be added for list styles. Add one of the following variants to the <code>modifier</code> attribute of the <code>cdr-list</code> tag to change the visual presentation:</p>
<table>
<thead>
<tr>
<th style="text-align:left">Value</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">'unordered'</td>
<td style="text-align:left">List items are typically marked with bullets</td>
</tr>
<tr>
<td style="text-align:left">'ordered'</td>
<td style="text-align:left">List items are typically marked with numbers</td>
</tr>
<tr>
<td style="text-align:left">'compact'</td>
<td style="text-align:left">Reduces spacing between list items</td>
</tr>
<tr>
<td style="text-align:left">'inline'</td>
<td style="text-align:left">List items appear horizontally with no divider</td>
</tr>
</tbody>
</table>
</cdr-doc-table-of-contents-shell>
</template>
