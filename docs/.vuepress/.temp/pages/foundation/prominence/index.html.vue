<template><cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>
## Overview
<cdr-img :src="$withBase('/prominence/prominence-header.png')" ratio="16-9" alt="A graphic showing a rectangular layout tilted at 45 degrees, with each rectangle slightly elevated. Next to the layout are x, y, and z axes to indicate height, width and depth"/>
### How designers create depth
Most digital interfaces are inherently flat—which is to say all objects within an interface are constrained by two spatial dimensions: width (x) and height (y). To add additional dimensionality designers must create an illusion of depth (z). While there are several techniques to achieve this, designers typically will use varying degrees of a drop shadow. The ranges of depth created are used to strengthen spatial relationships and provide additional interaction affordances. 
<p>While there are some parallels between an object's elevation and its z-index—specifically regarding overlapping content—the system chooses to not create dependencies between the two. The reasons are two-fold: 1) there are not enough tokenized elevation options to account for the wide range of z-index values, and 2) elevation may be applied to objects that are not intended to stack on top of or otherwise interfere with adjacent objects—forcing a z-index value in these cases could yield unpredictable results.</p>
<h2 id="best-practices" tabindex="-1"><a class="header-anchor" href="#best-practices">#</a> Best practices</h2>
<h3 id="why-designers-chose-to-elevate-interface-objects" tabindex="-1"><a class="header-anchor" href="#why-designers-chose-to-elevate-interface-objects">#</a> Why designers chose to elevate interface objects</h3>
<p>The shadow cast by an elevated object helps to communicate aspects of interactivity, order, and priority by drawing from real-world conventions. More specifically, designers use this implied sense of depth to:</p>
<two-column-captioned-images :examples="$page.frontmatter.bestPractices"/>
<h2 id="application" tabindex="-1"><a class="header-anchor" href="#application">#</a> Application</h2>
<h3 id="tokenized-options" tabindex="-1"><a class="header-anchor" href="#tokenized-options">#</a> Tokenized options</h3>
<cdr-img :src="$withBase('/prominence/prominence-tokens.png')" style="display:block; margin: 1em auto;" alt="A graphic showing squares labeled 1 through 5 in ascending prominence"/>
<ol>
<li>Flat: cdr-prominence-height-flat</li>
<li>Raised: cdr-prominence-height-raised</li>
<li>Elevated: cdr-prominence-height-elevated</li>
<li>Floating: cdr-prominence-height-floating</li>
<li>Lifted: cdr-prominence-height-lifted</li>
</ol>
<h3 id="when-to-use" tabindex="-1"><a class="header-anchor" href="#when-to-use">#</a> When to use</h3>
<ul>
<li>Do use prominence to emphasize and respond to interaction or a change of state</li>
<li>Do use prominence to reinforce the hierarchy of a page</li>
<li>Do use a stronger prominence value for elements that overlap other areas of the UI</li>
</ul>
<h3 id="when-to-use-a-different-approach" tabindex="-1"><a class="header-anchor" href="#when-to-use-a-different-approach">#</a> When to use a different approach</h3>
<ul>
<li>Don't use prominence as the only means of conveying actionability</li>
<li>Don't rely solely on a drop shadow to meet accessibility contrast requirements</li>
<li>Don't elevate large proportions of the UI at the same time</li>
</ul>
</cdr-doc-table-of-contents-shell>
</template>
