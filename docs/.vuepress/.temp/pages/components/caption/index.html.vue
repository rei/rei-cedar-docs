<template><cdr-doc-table-of-contents-shell>
# Overview
<h2 id="default-medium" tabindex="-1"><a class="header-anchor" href="#default-medium">#</a> Default (Medium)</h2>
<p>Caption aligns to the left alongside the body copy with inset padding. Default caption includes summary and credit.</p>
<cdr-doc-example-code-pair repository-href="/src/components/caption" :sandbox-data="$page.frontmatter.sandboxData" >
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-caption</span>
    <span class="token attr-name">summary</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Testing and validating the final fit of the 2018/2019 Tecnica ski boot collection during the September 2017 focus group in Park City, Utah.<span class="token punctuation">"</span></span>
    <span class="token attr-name">credit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Image Credit: Blizzard Tecnica<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary">#</a> Summary</h2>
<p>Summary has same CSS styles as the default; however, only the summary element is displayed.</p>
<cdr-doc-example-code-pair repository-href="/src/components/caption" :sandbox-data="$page.frontmatter.sandboxData">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-caption</span>
    <span class="token attr-name">summary</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Testing and validating the final fit of the 2018/2019 Tecnica ski boot collection during the September 2017 focus group in Park City, Utah.<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="credit" tabindex="-1"><a class="header-anchor" href="#credit">#</a> Credit</h2>
<p>Credit has same CSS styles as the default; however, only the credit element is displayed.</p>
<cdr-doc-example-code-pair repository-href="/src/components/caption" :sandbox-data="$page.frontmatter.sandboxData">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-caption</span>
    <span class="token attr-name">credit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Image Credit: Blizzard Tecnica<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="caption-with-image" tabindex="-1"><a class="header-anchor" href="#caption-with-image">#</a> Caption with Image</h2>
<p>The captions component is text-only; however, it is meant to be displayed in the context of a media object.</p>
<cdr-doc-example-code-pair repository-href="/src/components/caption" :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, { components: 'CdrCaption, CdrImg' })" >
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>figure</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://via.placeholder.com/350x150<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>figcaption</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-caption</span>
    <span class="token attr-name">summary</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Testing and validating the final fit of the 2018/2019 Tecnica ski boot collection during the September 2017 focus group in Park City, Utah.<span class="token punctuation">"</span></span>
    <span class="token attr-name">credit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Image Credit: Blizzard Tecnica<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>figcaption</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>figure</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="accessibility" tabindex="-1"><a class="header-anchor" href="#accessibility">#</a> Accessibility</h2>
<p>To ensure that usage of this component complies with the accessibility guidelines, do the following:</p>
<ul>
<li>Use captions sparingly and only with accompanied media</li>
<li>Do not use caption text styles for body copy. It is smaller than the recommended size for text readability</li>
</ul>
<br/>
<p>This component has compliance with WCAG guidelines by:</p>
<ul>
<li>Using text color with a Level AA contrast ratio of 4.5:1 contrast between the text color and the background but only when displayed on light backgrounds</li>
</ul>
<hr>
<h1 id="guidelines" tabindex="-1"><a class="header-anchor" href="#guidelines">#</a> Guidelines</h1>
<h2 id="use-when" tabindex="-1"><a class="header-anchor" href="#use-when">#</a> Use When</h2>
<ul>
<li>Providing further context and attribution to any figure or media asset such as an image, video, or chart</li>
</ul>
<h2 id="don-t-use-when" tabindex="-1"><a class="header-anchor" href="#don-t-use-when">#</a> Don’t Use When</h2>
<ul>
<li>Displaying body copy. Instead, use <RouterLink to="/components/text/#body/">Text</RouterLink></li>
<li>Breaking up the text styles in a layout for aesthetic purposes</li>
</ul>
<h2 id="content" tabindex="-1"><a class="header-anchor" href="#content">#</a> Content</h2>
<p>The Caption component has two separate fields: Summary and Credit. While they often appear together, one is not dependent on the other. Both are, however, dependent on media content (image, video, etc).</p>
<p>There are two text fields available within a caption:</p>
<ul>
<li>Summary text gives the media context
<ul>
<li>Keep summary text concise, 1-2 lines at LG breakpoint</li>
<li>Use sentence case</li>
</ul>
</li>
<li>Credit provides attribution to the correct sources
<ul>
<li>Helps users gauge the strength and validity of the material the author has used</li>
<li>Begin credit text with “Video Credit” or “Image Credit”</li>
</ul>
</li>
</ul>
<h2 id="anatomy" tabindex="-1"><a class="header-anchor" href="#anatomy">#</a> Anatomy</h2>
<ul>
<li>Captions align to the left border based on the paragraph container and not centered under the media object</li>
<li>Max width is 498 pixels, even if the media (image, video, or chart) extends beyond the paragraph max width
<br />
<br /></li>
</ul>
<cdr-img :src="$withBase(`/caption/spec_caption_layout-4-3.png`)"/>
<br />
<h3 id="types-of-accreditations" tabindex="-1"><a class="header-anchor" href="#types-of-accreditations">#</a> Types of Accreditations</h3>
<p>For photos submitted by customers or members:</p>
<ul>
<li>Provide first name, initial of last name (not full last name)</li>
<li>If available, social site handle from where the asset was provided</li>
<li>For example, Madeline G. @maddyluv</li>
</ul>
<p><br>
For multiple photo accreditations:</p>
<ul>
<li>List in clockwise order from top</li>
<li>Separated by commas and semicolons</li>
<li>No breaking spaces</li>
<li>For example, “Image Credits: top left, Madeline G. @maddyluv; top right, Kevin C.; bottom right, George M. @gmonkey”</li>
</ul>
<p><br>
For purchased assets (photos or video):</p>
<ul>
<li>Use full name, provided a signed release is on file</li>
</ul>
<p><br>
For copyrighted media (photos or video):</p>
<ul>
<li>Use © symbol and date separated by (non-breaking) spaces and photographer name. (e.g. © 2017 Norm Bellows)</li>
<li>If date is not available, use © symbol and photographer name separated by a (non-breaking) space. (e.g. © Norm Bellows)</li>
</ul>
<h3 id="resources" tabindex="-1"><a class="header-anchor" href="#resources">#</a> Resources</h3>
<ul>
<li>For more information about photo accreditation recommendations:
<ul>
<li>Noble Blogger Guidelines: <a href="https://writtent.com/blog/the-honor-code-of-a-noble-blogger-how-to-cite-pictures" target="_blank" rel="noopener noreferrer">How to Cite Pictures<ExternalLinkIcon/></a></li>
<li>NPR Training, Storytelling tips and best practices: <a href="http://training.npr.org/visual/these-are-nprs-photo-caption-guidelines" target="_blank" rel="noopener noreferrer">These are NPR's photo caption guidelines<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
<h2 id="behavior" tabindex="-1"><a class="header-anchor" href="#behavior">#</a> Behavior</h2>
<h3 id="do-don-t" tabindex="-1"><a class="header-anchor" href="#do-don-t">#</a> Do / Don’t</h3>
<p>Keep summary content short to avoid excess text-wrapping.
<br/>
<br/></p>
<do-dont :examples="$page.frontmatter.summaries" />
<p>Captions must be accompanied by media asset such as an image, video, or chart.
<br/>
<br/></p>
<do-dont :examples="$page.frontmatter.media" />
<p>Summary and Credit serve different purposes and should remain separate.
<br/>
<br/></p>
<do-dont :examples="$page.frontmatter.separate" />
<p>Caption stays left aligned with body copy regardless of the width of the media.
<br/>
<br/></p>
<do-dont :examples="$page.frontmatter.align" />
<hr>
<h1 id="api" tabindex="-1"><a class="header-anchor" href="#api">#</a> API</h1>
<h2 id="props" tabindex="-1"><a class="header-anchor" href="#props">#</a> Props</h2>
<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage">#</a> Usage</h2>
<p>The <strong>CdrCaption</strong> component is developed to work within a composition with other components; however, composition-type components have not been developed yet.</p>
<br />
<p>The below example demonstrates how to extend this component for use within a figure.</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>figure</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://via.placeholder.com/350x150<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>figcaption</span><span class="token punctuation">></span></span>
      &lt;cdr-caption
      summary="Testing and validating the final fit of the 2018/2019 Tecnica ski boot collection during the September 2017 focus group in Park City, Utah"
      credit="Image Credit: Blizzard Tecnica”
    />
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>figcaption</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>figure</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></cdr-doc-table-of-contents-shell>
</template>
