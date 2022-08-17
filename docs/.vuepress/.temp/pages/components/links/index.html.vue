<template><cdr-doc-table-of-contents-shell>
# Overview
<h2 id="default-medium" tabindex="-1"><a class="header-anchor" href="#default-medium">#</a> Default (Medium)</h2>
<p>Display within body copy for articles, hub cards, footer, or recommendations.</p>
<cdr-doc-example-code-pair :codeMaxHeight= false repository-href="/src/components/link" :sandbox-data="$page.frontmatter.sandboxData" >
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span><span class="token punctuation">></span></span>
  If you spend much time in the great outdoors,
  you’re likely to hear the phrase “Leave No Trace”
  as often as you hear
  "<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-link</span>
    <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.rei.com/learn/expert-advice/ten-essentials.html<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      the Ten Essentials
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-link</span><span class="token punctuation">></span></span>".
  What does it mean? Simply put, it’s the best practices
  we should follow to enjoy and protect our natural spaces.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="standalone" tabindex="-1"><a class="header-anchor" href="#standalone">#</a> Standalone</h2>
<p>Display independently with a Call to Action. Some examples are for finding a store, or viewing related products.</p>
<cdr-doc-example-code-pair repository-href="/src/components/link" :sandbox-data="$page.frontmatter.sandboxData">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.rei.com<span class="token punctuation">"</span></span> <span class="token attr-name">modifier</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>standalone<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    View all REI Co-op Backpacking Tents
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-link</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="icon-on-left" tabindex="-1"><a class="header-anchor" href="#icon-on-left">#</a> Icon on Left</h2>
<p>Display standalone link with icon on left.</p>
<cdr-doc-example-code-pair :codeMaxHeight= false repository-href="/src/components/link" :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrLink, IconShipping', styleTag: '.icon-class { margin-left: $cdr-space-one-x; }'})">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-link</span> <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">modifier</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>standalone<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>icon-shipping</span> <span class="token attr-name">inherit-color</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>icon-class<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
      This item ships for FREE!
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-link</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="icon-on-right" tabindex="-1"><a class="header-anchor" href="#icon-on-right">#</a> Icon on Right</h2>
<p>Display standalone link with icon on right.</p>
<cdr-doc-example-code-pair :codeMaxHeight= false repository-href="/src/components/link" :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrLink, IconExternalLink', styleTag: '.icon-class { margin-right: $cdr-space-one-x; }'})">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-link</span> <span class="token attr-name">modifier</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>standalone<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        Example external link
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>icon-external-link</span> <span class="token attr-name">inherit-color</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>icon-class<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>externalLink<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>An example of an external link icon<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>icon-external-link</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-link</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="inline-link-button" tabindex="-1"><a class="header-anchor" href="#inline-link-button">#</a> Inline Link Button</h2>
<p>Use the <code>tag</code> prop to render a button that looks like a link. Can be used inline with other text. Should trigger an action rather than navigate to a new page.</p>
<p>To render a link that has the spacing and sizing of a button, use <RouterLink to="/components/buttons/#link-style">CdrButton with link modifier</RouterLink>. To visually render a button that behaves like a link, use <a href="../buttons#button-with-link-tag">a CdrButton with link tag</a>.</p>
<cdr-doc-example-code-pair repository-href="/src/components/link" :sandbox-data="$page.frontmatter.sandboxData" :model="{ count: 0 }">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span><span class="token punctuation">></span></span>
    What do you think?
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-link</span> <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>count++<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      Yes
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-link</span><span class="token punctuation">></span></span>
    /
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-link</span> <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>count--<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      no
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-link</span><span class="token punctuation">></span></span>
    {{count}}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="accessibility" tabindex="-1"><a class="header-anchor" href="#accessibility">#</a> Accessibility</h2>
<p>Many WCAG requirements are contextual to their implementation.
To ensure that usage of this component complies with accessibility guidelines you are responsible for the following:</p>
<ul>
<li>Always use a <code>&lt;button&gt;</code> element for the <code>tag</code> prop when there is no <code>href</code> attribute that can be applied to the link. Examples are:
<ul>
<li>Toggling a display to full screen</li>
<li>Opening a modal window</li>
<li>Triggering a popup menu</li>
<li>Playing media content</li>
</ul>
</li>
<li>Always use the default <code>&lt;a&gt;</code> element for a link that navigates the user to the location specified by the <code>href</code> attribute</li>
<li>A link MUST have programmatically-discernible text</li>
<li>Links to the same destinations MUST be consistently identified with the same (or very similar) link text across all pages of the site</li>
<li>Avoid using only “Click here” or “Start here”, but if screen space for text is minimal:
<ul>
<li>Provide text that can be read by screen readers</li>
<li>Use an inline element for hidden text with the 'cdr-sr-only' class</li>
</ul>
</li>
</ul>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-link</span><span class="token punctuation">></span></span>
    Start here <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cdr-sr-only<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>for help finding the proper sleeping bag <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-link</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>Ensure assistive technology can find all links on a page:
<ul>
<li>Always provide a <code>href</code> attribute. Empty <code>href</code> attributes are not considered true links and are not accessible to keyboard users.</li>
<li>When using images as links, the <code>alt</code> attribute acts as the link text. Describe the action or hyperlink that the image represents</li>
</ul>
</li>
<li>Ensure that if the keyboard focus can be moved to a component of the page using a keyboard interface, then focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away.</li>
<li>Use <code>aria-label</code> or <code>aria-labelledby</code> to provide a more descriptive name when the text content of the link cannot be changed.</li>
<li>The purpose of each link MUST be understandable and distinguishable from other links on the same page, either from the link text alone (ideally), or from the immediate surrounding context of the link.
<br/></li>
</ul>
<p>This component has compliance with following WebAIM’s accessibility guidelines:</p>
<ul>
<li>Using text color with a Level AA contrast ratio of 4.5:1 contrast between the text color and the background but only when displayed on light backgrounds</li>
</ul>
<hr>
<h1 id="guidelines" tabindex="-1"><a class="header-anchor" href="#guidelines">#</a> Guidelines</h1>
<h2 id="use-when" tabindex="-1"><a class="header-anchor" href="#use-when">#</a> Use When</h2>
<ul>
<li>Navigating to another page or a different portion of the same page</li>
</ul>
<h2 id="don-t-use-when" tabindex="-1"><a class="header-anchor" href="#don-t-use-when">#</a> Don't Use When</h2>
<ul>
<li>Navigating a user from promotional or campaign content. Instead, use <RouterLink to="/components/buttons/">Buttons</RouterLink> styled to match the campaign</li>
</ul>
<h2 id="the-basics" tabindex="-1"><a class="header-anchor" href="#the-basics">#</a> The Basics</h2>
<ul>
<li>Link styles are adapted based on context, such as for links included in the <RouterLink to="/components/breadcrumb/">Breadcrumb</RouterLink>, Menus, and Navigation</li>
<li>There are 2 basic link styles: default and standalone
<ul>
<li>Use the default link when the link is near a body of text or in appears in a body of text</li>
<li>Use the standalone link when there is separation from a body of text</li>
</ul>
</li>
<li>When using multiple inline links together, be sure that their behaviors are consistent. For instance, don't have one link go to a new page and another one in the group trigger an action</li>
<li>Link buttons are often useful for reducing the visual clutter of large groups of actions. For example, when there are many cards in a group using the link button style instead of a true button style</li>
</ul>
<h2 id="content" tabindex="-1"><a class="header-anchor" href="#content">#</a> Content</h2>
<p>Use link labels that describe the link’s destination when clicked or tapped:</p>
<ul>
<li>Keep link text concise.  Restrict link text length to a maximum of 100 characters</li>
<li>Use descriptive text for links, so that the user knows where they are going or what action they are taking. Avoid using “Click here” or “Start here”</li>
<li>If screen space for text is minimal and text is only “Learn more”:
<ul>
<li>Provide <code>alt</code> text that can be read by screen readers</li>
<li>For example, if the link text is “Learn more”, then the <code>alt</code> text could be “Learn more about pick up in store”</li>
</ul>
</li>
<li>Don’t capitalize links. Some screen readers read capitalized text letter-by-letter. Instead, use sentence case</li>
<li>Restrict the number of text links on a page. Screen reader will read all the links on a page</li>
</ul>
<h2 id="behavior" tabindex="-1"><a class="header-anchor" href="#behavior">#</a> Behavior</h2>
<h3 id="choosing-a-button-or-link" tabindex="-1"><a class="header-anchor" href="#choosing-a-button-or-link">#</a> Choosing a Button or Link</h3>
<p>When making decisions about using this component styled as a link or a button, consider the following:</p>
<table>
<thead>
<tr>
<th><strong>Links</strong></th>
<th><strong>Buttons</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Answers the question, &quot;Where can I go&quot;</td>
<td>Answers the question, &quot;What can I do&quot;</td>
</tr>
<tr>
<td>Search engine crawlers can follow anchors for links (<code>&lt;a&gt;</code>)</td>
<td>Search engine crawlers <strong>cannot</strong> follow links that are submitted by input or button</td>
</tr>
<tr>
<td>Default keyboard behavior is triggered using the <strong>Enter</strong> key</td>
<td>Default keyboard behavior is triggered using the <strong>Space</strong> or <strong>Enter</strong> key</td>
</tr>
<tr>
<td><strong>Cannot be disabled</strong> like buttons but can be made inert with tabindex=&quot;-1&quot; and aria-hidden=&quot;true&quot;</td>
<td>Can be disabled with disabled attribute</td>
</tr>
</tbody>
</table>
<br />
<p>Apply the following use cases when deciding when to use links as anchors or buttons:</p>
<table>
<thead>
<tr>
<th>Links</th>
<th>Buttons</th>
</tr>
</thead>
<tbody>
<tr>
<td>Navigating user to a new page or view</td>
<td>Toggling a display to full screen</td>
</tr>
<tr>
<td>Changing the URL</td>
<td>Opening a modal window</td>
</tr>
<tr>
<td>Causing a browser redraw/refresh</td>
<td>Triggering a popup menu</td>
</tr>
<tr>
<td>Supporting internal page jumps</td>
<td>Playing media content</td>
</tr>
</tbody>
</table>
<h3 id="do-don-t" tabindex="-1"><a class="header-anchor" href="#do-don-t">#</a> Do / Don’t</h3>
<do-dont :examples="$page.frontmatter.standalone" />
<do-dont :examples="$page.frontmatter.link" />
<h2 id="resources" tabindex="-1"><a class="header-anchor" href="#resources">#</a> Resources</h2>
<p>WebAIM: Links and Hypertext <a href="https://webaim.org/techniques/hypertext/" target="_blank" rel="noopener noreferrer">Introduction to Links and Hypertext<ExternalLinkIcon/></a></p>
<hr>
<h1 id="api" tabindex="-1"><a class="header-anchor" href="#api">#</a> API</h1>
<h2 id="props" tabindex="-1"><a class="header-anchor" href="#props">#</a> Props</h2>
<p>This component will bind any attribute that a <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a" target="_blank" rel="noopener noreferrer">native HTML anchor element<ExternalLinkIcon/></a> accepts.</p>
<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />
<h2 id="slots" tabindex="-1"><a class="header-anchor" href="#slots">#</a> Slots</h2>
<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />
<h2 id="events" tabindex="-1"><a class="header-anchor" href="#events">#</a> Events</h2>
<cdr-doc-api type="event" :api-data="$page.frontmatter.versions[0].components[0].api.events"/>
<h2 id="component-variables" tabindex="-1"><a class="header-anchor" href="#component-variables">#</a> Component Variables</h2>
<cdr-doc-comp-vars name="CdrLink"/>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage">#</a> Usage</h2>
<p>By default, the component renders using an anchor element and requires an <code>href</code> attribute to render a valid, accessible link.</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://rei.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Visit REI
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-link</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Use the <code>tag</code> prop to render the link as a <code>&lt;button&gt;</code> element that appears as a link, but without an <code>href</code> attribute.</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-link</span> <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Show Details
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-link</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="style-modifier" tabindex="-1"><a class="header-anchor" href="#style-modifier">#</a> Style Modifier</h3>
<p>Following variants are available to the <code>cdr-link</code> modifier attribute:</p>
<table>
<thead>
<tr>
<th style="text-align:left">Value</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">'standalone'</td>
<td style="text-align:left">Change visual presentation by removing the underline for the normal state. Intended to be use for an independent Call to Action to expand content, remove filters, or provide additional information.</td>
</tr>
</tbody>
</table>
</cdr-doc-table-of-contents-shell>
</template>
