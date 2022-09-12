<template><cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview">#</a> Overview</h2>
<cdr-img :src="$withBase('/radius/radius-header.png')" ratio="16-9" alt="A graphic showing four nested rectangles against with rounded corners against a salmonberry colored background."/>
<h3 id="basics" tabindex="-1"><a class="header-anchor" href="#basics">#</a> Basics</h3>
<two-column-captioned-images :examples="$page.frontmatter.basics"/>
<h3 id="nested-objects" tabindex="-1"><a class="header-anchor" href="#nested-objects">#</a> Nested objects</h3>
<two-column-captioned-images :examples="$page.frontmatter.nested"/>
<h2 id="application" tabindex="-1"><a class="header-anchor" href="#application">#</a> Application</h2>
<h3 id="tokenized-options" tabindex="-1"><a class="header-anchor" href="#tokenized-options">#</a> Tokenized options</h3>
<p>Cedar components include appropriate radii values applied by default. Use tokens to apply radii values to bespoke elements or containers.</p>
<cdr-img :src="$withBase('/radius/radius-tokens.png')" style="display:block; margin: 1em auto;" alt="A graphic showing four numbered shapes, each shape has softer rounded corners than the next. The fourth shape is by far the roundest"/>
1. Sharp: `cdr-radius-sharp` 
2. Soft:  `cdr-radius-soft` 
3. Softer:  `cdr-radius-softer` 
4. Round:  `cdr-radius-round`
<h3 id="when-to-use" tabindex="-1"><a class="header-anchor" href="#when-to-use">#</a> When to use</h3>
<ul>
<li>Do choose a radius that's proportional to the size of the element</li>
<li>Do use rounded corners for actionable components like buttons, cards, and chips</li>
</ul>
<h3 id="when-to-use-a-different-approach" tabindex="-1"><a class="header-anchor" href="#when-to-use-a-different-approach">#</a> When to use a different approach</h3>
<ul>
<li>Don't use roundness as the only means of conveying actionability</li>
<li>Don't round the corners of small, non-interactive pieces of UI</li>
<li>Don't overuse rounded corners, consider the whole page</li>
</ul>
</cdr-doc-table-of-contents-shell>
</template>
