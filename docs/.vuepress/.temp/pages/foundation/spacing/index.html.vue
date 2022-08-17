<template><cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>
<p>Cedar Design System provides predefined spacing values that help reduce redundancy, declutter prototypes and style sheets, and utilize common terminology.</p>
<p>By design, Cedar elements are self contained and provide no spacing outside of their border and box shadows. This means that content elements will not stack one on top of another without the use of spacing elements.</p>
<h2 id="concepts" tabindex="-1"><a class="header-anchor" href="#concepts">#</a> Concepts</h2>
<h3 id="box-model" tabindex="-1"><a class="header-anchor" href="#box-model">#</a> Box Model</h3>
<p>The Cedar spacing system is built around HTML’s foundational layout principle known as the <strong>box model</strong>. Every webpage is made of boxes and includes the ‘box within a box’ structure. The graphic below shows how the box model defines the structure and layout for all elements on a page.</p>
<cdr-img :src="$withBase('/layout/spacing-box-model.png')" alt="Box model structure of a webpage" />
<p><strong>Content:</strong> In most cases, any content inside a box, text, or other boxes will wrap to its parent container’s width and push down to increase its parent container’s height dynamically.</p>
<p><strong>Padding:</strong> Padding is the space around the content inside a container. This spacing does not affect the total dimension of an element, but rather shrinks the working space within it. For example, a 300px wide container with <em>cdr-space-inset-one-x</em> padding will allow its content to grow to 268px wide.</p>
<p><strong>Borders:</strong> Borders function like padding but with color. Cedar uses borders that are only 1px thick.</p>
<p><strong>Margins:</strong> Margins provide the spacing around an element or container, pushing sibling content away. Margins do not contribute to an element’s width.</p>
<h3 id="spacing-margins" tabindex="-1"><a class="header-anchor" href="#spacing-margins">#</a> Spacing Margins</h3>
<p>Spacing is a unit of white space that pushes visual elements away from each other. Spacing is primarily used as margin, but can also be used as padding where inset padding does not apply. Spacing can be used to distribute content horizontally or vertically.</p>
<p>The Cedar spacing system is based on 1.6rem or 16px units. There are 8 spacing values derived from a 16px base.</p>
<cdr-img class="cdr-doc-article-img" :src="$withBase('/layout/spacing-margin-horizontal.png')" alt="Horizontal spacing" />
<cdr-img class="cdr-doc-article-img" :src="$withBase('/layout/spacing-margin-vertical.png')" alt="Vertical spacing" />
<h3 id="inset-padding" tabindex="-1"><a class="header-anchor" href="#inset-padding">#</a> Inset Padding</h3>
<p>An Inset padding is intended to provide consistent space within the content container. It defines how the typography, images, icons, and any content is spaced from the edge.</p>
<cdr-img :src="$withBase('/layout/spacing-inset-padding-sizes.png')" alt="Inset padding" />
<p>Cedar provides three different variants for each inset token size:</p>
<ul>
<li><strong>Default:</strong> All four sides match in size, resulting in consistent spacing within the content container</li>
<li><strong>Squish:</strong> Reduces top and bottom spacing by 50%, resulting in a vertically condensed visual display</li>
<li><strong>Stretch:</strong> Increases top and bottom spacing by 50%, resulting in a vertically expanded visual display</li>
</ul>
<cdr-img :src="$withBase('/layout/spacing-inset-padding-variations.png')" alt="The three different types of inset padding" />
<h3 id="breakpoints" tabindex="-1"><a class="header-anchor" href="#breakpoints">#</a> Breakpoints</h3>
<p>Like text size and other dimensions, Spacing and Inset can change based on screen width breakpoints. For more information on breakpoints, visit the <a href="../responsive">Responsive Layout</a> article.</p>
<h4 id="an-example" tabindex="-1"><a class="header-anchor" href="#an-example">#</a> An Example</h4>
<p>Spacing and Insets should be combined to create compositions.</p>
<cdr-img :src="$withBase('/layout/spacing-redline-example.png')" alt="An example of combined Spacing and Insets" />
<h2 id="usage-overview" tabindex="-1"><a class="header-anchor" href="#usage-overview">#</a> Usage Overview</h2>
<p>Use space tokens to apply the Cedar spacing convention within your stylesheets using SCSS or LESS. For a full list of available tokens and information on how to use them in your projects, visit the <RouterLink to="/tokens/overview/">Design Tokens</RouterLink> article.</p>
<h3 id="spacing-tokens" tabindex="-1"><a class="header-anchor" href="#spacing-tokens">#</a> Spacing Tokens</h3>
<p>The following are the available spacing token values:</p>
<table>
<thead>
<tr>
<th>Space token</th>
<th>Pixel values</th>
<th>Rem values</th>
</tr>
</thead>
<tbody>
<tr>
<td>cdr-space-eighth-x</td>
<td>2px</td>
<td>0.2rem</td>
</tr>
<tr>
<td>cdr-space-quarter-x</td>
<td>4px</td>
<td>0.4rem</td>
</tr>
<tr>
<td>cdr-space-half-x</td>
<td>8px</td>
<td>0.8rem</td>
</tr>
<tr>
<td>cdr-space-three-quarter-x</td>
<td>12px</td>
<td>1.2rem</td>
</tr>
<tr>
<td>cdr-space-one-x</td>
<td>16px</td>
<td>1.6rem</td>
</tr>
<tr>
<td>cdr-space-one-and-a-half-x</td>
<td>24px</td>
<td>2.4rem</td>
</tr>
<tr>
<td>cdr-space-two-x</td>
<td>32px</td>
<td>3.2rem</td>
</tr>
<tr>
<td>cdr-space-four-x</td>
<td>64px</td>
<td>6.4rem</td>
</tr>
</tbody>
</table>
</cdr-doc-table-of-contents-shell>
</template>
