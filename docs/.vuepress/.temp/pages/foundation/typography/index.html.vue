<template><cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>
<h1 id="guidelines" tabindex="-1"><a class="header-anchor" href="#guidelines">#</a> Guidelines</h1>
<h2 id="typefaces" tabindex="-1"><a class="header-anchor" href="#typefaces">#</a> Typefaces</h2>
<p>Cedar supports two primary brand typefaces: Stuart and Graphik. Each play a specific role in our typographic system. While Graphik is available to consumers outside the co-op, Stuart is licensed and proprietary to REI.</p>
<h3 id="stuart" tabindex="-1"><a class="header-anchor" href="#stuart">#</a> Stuart</h3>
<p>Designed exclusively for the co-op, Stuart was influenced by the U.S. National Park Service signage. Modeled after Plantin, Stuart embraces the same softness in both structure and finish and its warm character balances well with the clean simplicity of Graphik.</p>
<cdr-img class="cdr-doc-article-img" alt="A mosaic showing the Stuart font in various sizes and colors" :src="$withBase(`/typography/typography_stuart.png`)" />
<h4 id="features" tabindex="-1"><a class="header-anchor" href="#features">#</a> Features</h4>
<p>Accessibility was front-of-mind during the development of Stuart. Accessible typefaces are inherently optimized for mobile usage.</p>
<cdr-img class="cdr-doc-article-img" alt="An graphic highlighting the Stuart font's open terminals, optimal x-height, optimal stroke width, ligatures, and co-op diamond" :src="$withBase(`/typography/typography_stuart_features.png`)" />
<h3 id="graphik" tabindex="-1"><a class="header-anchor" href="#graphik">#</a> Graphik</h3>
<p>Graphik is a sans-serif typeface designed by Christian Schwartz and released through Commercial Type in 2009. Inspired by the lesser known grotesques and geometric sans-serifs, Graphik’s lower stroke contrast and a generous x-height lend it great versatility. Graphik is used for high-function or less-expressive moments.</p>
<cdr-img class="cdr-doc-article-img" alt="A mosaic showing the Graphik font in various sizes and colors" :src="$withBase(`/typography/typography_graphik.png`)" />
<h2 id="type-scale" tabindex="-1"><a class="header-anchor" href="#type-scale">#</a> Type Scale</h2>
<p>The typographic scale manages the font sizes used within Cedar. All type styles are derived from this scale.</p>
<cdr-img class="cdr-doc-article-img" alt="A graphic displaying the range of sizes available for headings" :src="$withBase(`/typography/typography_type-scale.png`)" />
<h3 id="font-families" tabindex="-1"><a class="header-anchor" href="#font-families">#</a> Font Families</h3>
<p>Cedar typography references two distinct font stacks: a serif and a sans-serif. Our default display preference always prioritizes Stuart and Graphik. Local fonts act as fallbacks should a brand font fail to load.</p>
<p><strong>Serif</strong></p>
<p><code>font-family: Stuart, Georgia, serif</code></p>
<p><strong>Sans-serif</strong></p>
<p><code>font-family: Graphik, 'Helvetica Neue', sans-serif</code></p>
<h4 id="fallbacks" tabindex="-1"><a class="header-anchor" href="#fallbacks">#</a> Fallbacks</h4>
<p>If everything goes right, REI Stuart will load. If it doesn’t, the serif font displayed on Apple and Microsoft platforms will be Georgia. At the same time, Android devices will display Noto Serif and Linux devices will display Liberation Serif.</p>
<p>It’s a similar story for sans-serif fonts. Graphik will display if there are no hiccups. If it fails to load, Apple devices will display Helvetica Neue while Microsoft platforms will display Arial. Android devices will display Roboto and Linux devices will display Liberation Sans.</p>
<h3 id="supported-languages" tabindex="-1"><a class="header-anchor" href="#supported-languages">#</a> Supported Languages</h3>
<p>Both Stuart and Graphik support the standard Western European languages.</p>
<p><strong>Coverage:</strong></p>
<ul>
<li>Italian, Spanish, Portuguese, French, German, Dutch, English, Danish, Swedish, Norwegian, and Icelandic</li>
</ul>
<h3 id="resources" tabindex="-1"><a class="header-anchor" href="#resources">#</a> Resources</h3>
<p>The distribution of brand fonts are managed through REI’s Self Service application.</p>
<h2 id="type-guidelines" tabindex="-1"><a class="header-anchor" href="#type-guidelines">#</a> Type Guidelines</h2>
<h3 id="size" tabindex="-1"><a class="header-anchor" href="#size">#</a> Size</h3>
<p>Font size selection directly impacts both readability and comprehension. Type styles are pre-optimized.</p>
<cdr-img class="cdr-doc-article-img" alt="A mosaic of various examples of typographic hierarchy" :src="$withBase(`/typography/typography_type_guidelines_size.png`)" />
<h3 id="type-pairing" tabindex="-1"><a class="header-anchor" href="#type-pairing">#</a> Type Pairing</h3>
<p>To create the appropriate contrast and hierarchy, use a mix of Stuart and Graphik—the latter typically plays a supporting role.</p>
<cdr-img class="cdr-doc-article-img" alt="A graphic showing mixed usage of Stuart and Graphik typefaces" :src="$withBase(`/typography/typography_type_guidelines_type-pairing.png`)" />
<h3 id="font-style" tabindex="-1"><a class="header-anchor" href="#font-style">#</a> Font Style</h3>
<h4 id="italics" tabindex="-1"><a class="header-anchor" href="#italics">#</a> Italics</h4>
<p>Users with certain disabilities like dyslexia might have difficulty making out italicized words. Only use italics if necessary and never for critical user flows.</p>
<do-dont :examples="$page.frontmatter.italics" />
<h3 id="font-weight" tabindex="-1"><a class="header-anchor" href="#font-weight">#</a> Font Weight</h3>
<p>From refined to playful, Stuart’s personality becomes increasingly casual as it gets heavier. While six weights are included in the Stuart family, medium is preferred for most situations.</p>
<cdr-img class="cdr-doc-article-img" alt="A graphic showing various Stuart font weights, highlighting Medium" :src="$withBase(`/typography/typography_type_guidelines_font-weight_stuart.png`)" />
<p>The Graphik family includes five weights. Preferred choices are: regular, medium, and semibold. Regular is appropriate for most applications.</p>
<cdr-img class="cdr-doc-article-img" alt="A graphic showing various Graphik font weights, highlighting Semibold, Medium, and Regular" :src="$withBase(`/typography/typography_type_guidelines_font-weight_graphik.png`)" />
<h3 id="letter-spacing" tabindex="-1"><a class="header-anchor" href="#letter-spacing">#</a> Letter Spacing</h3>
<p>Stuart and Graphik were both designed with looser tracking to improve readability at smaller sizes. In code-driven environments, tracking is known as letter spacing. To best support the widest range of sizes, the letter spacing of text styles have been pre-optimized.</p>
<cdr-img class="cdr-doc-article-img" alt="A graphic showing the difference between default and pre-optimized letter spacing" :src="$withBase(`/typography/typography_type_guidelines_letter-spacing.png`)" />
<h3 id="alignment" tabindex="-1"><a class="header-anchor" href="#alignment">#</a> Alignment</h3>
<p>For optimum legibility, it’s important to establish a strong vertical alignment. All text should be left-aligned whenever possible. Some exceptions include single words and short headlines. Never left and right justify text.</p>
<do-dont :examples="$page.frontmatter.alignment1" />
<do-dont :examples="$page.frontmatter.alignment2" />
<h3 id="line-length" tabindex="-1"><a class="header-anchor" href="#line-length">#</a> Line Length</h3>
<p>An optimal length, or measure, of a line of copy is 50 to 60 characters. Line lengths more than 80 characters are discouraged.</p>
<cdr-img class="cdr-doc-article-img" alt="A graphic showing how long a line of copy should be on mobile and desktop" :src="$withBase(`/typography/typography_type_guidelines_line-length.png`)" />
<do-dont :examples="$page.frontmatter.lineLengthMobile" />
<do-dont :examples="$page.frontmatter.lineLengthDesktop" />
<h4 id="_1-4-8-visual-presentation-aaa" tabindex="-1"><a class="header-anchor" href="#_1-4-8-visual-presentation-aaa">#</a> 1.4.8 Visual Presentation (AAA)</h4>
<p>For people with certain reading of vision disabilities, long lines of text can become a significant barrier. They have trouble keeping their place and following the flow of text. Having a narrow block of text makes it easier for them to continue on to the next line in a block. Lines of copy should not exceed 80 characters or glyphs.</p>
<hr/>
</cdr-doc-table-of-contents-shell>
</template>
