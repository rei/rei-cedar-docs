<template><cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>
<p>The Cedar UI Toolkit provides tools and processes to communicate Cedar component and token usage in Figma design assets. Designers using the Cedar Toolkit to build mockups and redlines will be creating annotated, inspectable, web-sharable assets to facilitate the developer hand-off process.</p>
<h2 id="developers" tabindex="-1"><a class="header-anchor" href="#developers">#</a> Developers</h2>
<p>Developers can jump to the <a href="#developer-review">hand-off</a> section of this article.</p>
<h2 id="designers" tabindex="-1"><a class="header-anchor" href="#designers">#</a> Designers</h2>
<p>We approach the hand-off process in a standardized way to ensure that any designer can communicate design specifications to any developer. Designs that leverage Cedar’s UI Toolkit are faster to build, easier to maintain, and quicker to hand-off than bespoke designs. Use the tips below to optimize your project hand-off with Cedar.</p>
<h2 id="setup" tabindex="-1"><a class="header-anchor" href="#setup">#</a> Setup</h2>
<h3 id="artboards" tabindex="-1"><a class="header-anchor" href="#artboards">#</a> Artboards</h3>
<p>To cover all supported <RouterLink to="/components/grid/#the-basics">breakpoints</RouterLink>, you will need to use, at minimum, four artboards. We recommend using 400px, 784px, 992px, and 1232px artboard widths. These values play nicely with an eight pixel grid and create whole-number column and gutter integers.</p>
<p>To make starting your project easier, duplicate our Figma <a href="https://www.figma.com/file/JlTaoRS1devxB4A4Xdd0oE/Artboards?node-id=0%3A1" target="_blank" rel="noopener noreferrer">template file<ExternalLinkIcon/></a>. If using device-specific artboard sizes for native applications, be sure to apply a Layout Grid to the frame.</p>
<figure>
  <cdr-img alt="screenshot" :src="$withBase(`/getting-started-hand-off/hand-off-artboard-setup.png`)"/>
  <figcaption>
    <cdr-caption summary="The template file contains the artboard widths you need to get started."/>
  </figcaption>
</figure>
<h2 id="design" tabindex="-1"><a class="header-anchor" href="#design">#</a> Design</h2>
<p>Toolkit libraries are automatically integrated into any new Figma project — simply drag-and-drop components from the asset tab or use shared styles for typography or color.</p>
<figure>
  <cdr-img alt="screenshot" :src="$withBase(`/getting-started-hand-off/hand-off-component-example.gif`)"/>
  <figcaption>
    <cdr-caption summary="Components can be drag-and-dropped into your project from the assets panel in Figma."/>
  </figcaption>
</figure>
<p>For more information on getting set up with Figma, visit the <RouterLink to="/getting-started/as-a-designer/">Getting Started</RouterLink> article for designers.</p>
<h3 id="page-headers-and-footers" tabindex="-1"><a class="header-anchor" href="#page-headers-and-footers">#</a> Page Headers and Footers</h3>
<p>The global header and footer are available as shared components. Look for them under the assets tab in Figma.</p>
<h2 id="redlining" tabindex="-1"><a class="header-anchor" href="#redlining">#</a> Redlining</h2>
<p>Effectively communicating specifications to a developer is the only way to ensure your design intention shows up in the delivered product. When you incorporate assets from the UI Toolkit into your designs, you’re also using the common language shared between the design assets in Figma and the code used to display them on the web.</p>
<figure>
  <cdr-img alt="screenshot" :src="$withBase(`/getting-started-hand-off/hand-off-spacing.png`)"/>
  <figcaption>
    <cdr-caption summary="Here, spacing symbols are used to show separation between components."/>
  </figcaption>
</figure>
<p>Component and token names are pre-embedded across the UI Toolkit to minimize the amount of redlining needed during this step. Developers can simply inspect the design assets to reference their coded counterparts.</p>
<h3 id="organizing-design-specifications" tabindex="-1"><a class="header-anchor" href="#organizing-design-specifications">#</a> Organizing Design Specifications</h3>
<p>We recommended teams keep all their design specifications together under one project. This lets developers know exactly where to find the most up-to-date assets and aligns closely to the single “source of truth” methodology.</p>
<ul>
<li>Do keep all design specifications consolidated under one project in Figma</li>
<li>Don’t bury design specs within exploratory project files</li>
</ul>
<h2 id="hand-off" tabindex="-1"><a class="header-anchor" href="#hand-off">#</a> Hand-off</h2>
<h3 id="developer-review" tabindex="-1"><a class="header-anchor" href="#developer-review">#</a> Developer Review</h3>
<p>As developers, you have view access to any project you’re invited to in Figma. The primary tools at your disposal will be the ability to comment and inspect.</p>
<figure>
  <cdr-img alt="screenshot" :src="$withBase(`/getting-started-hand-off/hand-off-commenting.png`)"/>
  <figcaption>
    <cdr-caption summary="Commenting directly in Figma is a great way to manage hand-off conversations with your designer."/>
  </figcaption>
</figure>
<figure>
  <cdr-img alt="screenshot" :src="$withBase(`/getting-started-hand-off/hand-off-inspect.png`)"/>
  <figcaption>
    <cdr-caption summary="Use the inspect feature to discover component references or token names."/>
  </figcaption>
</figure>
<h2 id="suggestions" tabindex="-1"><a class="header-anchor" href="#suggestions">#</a> Suggestions?</h2>
<p>Does this process work for you? Do you have any suggestions for improvement? Please let us know using the <a href="https://rei.slack.com/messages/CA58YCGN4" target="_blank" rel="noopener noreferrer">#cedar-user-support<ExternalLinkIcon/></a> slack channel.</p>
</cdr-doc-table-of-contents-shell>
</template>
