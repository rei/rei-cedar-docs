<template><cdr-doc-table-of-contents-shell>
<h1 id="overview" tabindex="-1"><a class="header-anchor" href="#overview">#</a> Overview</h1>
<p>Color is one of the most important attributes of brand expression. The Cedar Design System color palette focuses on a primary color of natural and comforting green, with a supporting set of secondary colors that reflects REI's brand expression of the colors of nature. These brand colors are reflected through color tokens in our UI and other places.</p>
<p>Color design tokens represent the fundamental decisions of Cedar’s visual language:</p>
<ul>
<li>Stores color specifications using variable names, not hard-coded values such as hex values for color</li>
<li>Specifies a hierarchical and semantically-defined system</li>
</ul>
<p>The color values in Cedar have been carefully selected and tested to meet WCAG accessibility requirements for contrast and color. Using colors outside of this palette may result in an inaccessible experience for some users, and should be avoided when possible. Learn more about accessibility in the Cedar Design System in the <RouterLink to="/foundation/accessibility/">Accessibility Foundation</RouterLink> article as well as throughout the component guidelines.</p>
<br/>
<hr>
<p>Below is a list of color tokens with descriptions and values. Web and mobile color tokens have identical hex values but the naming pattern differs. For example, color token names are:</p>
<ul>
<li><strong>For Web:</strong> cdr-color-text-primary</li>
<li><strong>For Android:</strong> cdr_color_text_primary</li>
<li><strong>For iOS:</strong> CdrColorTextPrimary</li>
</ul>
<p>For more information on naming structure for design token, visit the <RouterLink to="/components/design-tokens/#naming-structure-for-design-tokens/">Design Tokens</RouterLink> overview.</p>
<tokens-color />
<br>
<h1 id="guidelines" tabindex="-1"><a class="header-anchor" href="#guidelines">#</a> Guidelines</h1>
<p>Cedar offers a range of colors designed to be accessed, understood, and used by all people regardless of their age, background, or ability. We meet or exceed color contrast <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noopener noreferrer">WCAG AA accessibility standards<ExternalLinkIcon/></a>.</p>
<h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples">#</a> Examples</h2>
<do-dont :examples="[
  {
    type: 'do',
    image: 'color-illustrations/color_1_do.png',
    caption: 'use approved background colors to separate content areas'
  },
  {
    type: 'dont',
    image: 'color-illustrations/color_1_dont.png',
    caption: 'use accent colors as backgrounds'
  }
]" />
<br>
<do-dont :examples="[
  {
    type: 'do',
    image: 'color-illustrations/color_2_do.png',
    caption: 'arrange background colors to promote page hierarchy by minimizing shifts in background'
  },
  {
    type: 'dont',
    image: 'color-illustrations/color_2_dont.png',
    caption: 'alternate background colors in visually jarring ways'
  }
]" />
<br>
<h2 id="accessibility" tabindex="-1"><a class="header-anchor" href="#accessibility">#</a> Accessibility</h2>
<p>Text color and background color tokens have been chosen to ensure that any combination of them is accessible. By using color tokens semantically you can ensure that your application remains accessible as the system is updated. Mixing in non-Cedar color values may result in inaccessible combinations. Legend descriptions for WCAG contrast ratios requirements are:</p>
<ul>
<li><strong>AAA:</strong> 7:1 for normal text and 4.5:1 for large text</li>
<li><strong>AA:</strong> 4.5:1 for normal text and 3:1 for large text</li>
<li><strong>AA-LG:</strong> Only for large text, graphical objects and user interface components</li>
</ul>
<br>
<p><strong>Note:</strong> Large text is defined as 18 point (typically 24px) or larger, or with bold style, 14 point (typically 18.66px) or larger.</p>
<br>
</cdr-doc-table-of-contents-shell>
</template>
