<template><cdr-doc-table-of-contents-shell>
# Overview
<h2 id="default-medium" tabindex="-1"><a class="header-anchor" href="#default-medium">#</a> Default (Medium)</h2>
<p>Use for images with no responsive qualities.</p>
<cdr-doc-example-code-pair :codeMaxHeight= false repository-href="/src/components/image" :sandbox-data="$page.frontmatter.sandboxData" >
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-img</span>
  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/rei-cedar-docs/live.jpg<span class="token punctuation">"</span></span>
  <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>REI employees building trails during a stewardship event<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="managing-images" tabindex="-1"><a class="header-anchor" href="#managing-images">#</a> Managing Images</h2>
<p>Apply rules to an image using ratio and crop properties. The below example is cropped using top alignment with the aspect ratio set as 9:16.</p>
<cdr-doc-example-code-pair :codeMaxHeight= false repository-href="/src/components/image" :sandbox-data="$page.frontmatter.sandboxData" >
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-img</span>
  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/rei-cedar-docs/live.jpg<span class="token punctuation">"</span></span>
  <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>REI employees building trails during a stewardship event<span class="token punctuation">"</span></span>
  <span class="token attr-name">ratio</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>9-16<span class="token punctuation">"</span></span>
  <span class="token attr-name">crop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span>
  <span class="token attr-name">cover</span>
<span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="displaying-images-as-backgrounds" tabindex="-1"><a class="header-anchor" href="#displaying-images-as-backgrounds">#</a> Displaying Images as Backgrounds</h2>
<p>Use the cover property to resize the background image to fill the entire container.</p>
<cdr-doc-example-code-pair :codeMaxHeight= false repository-href="/src/components/image" :sandbox-data="$page.frontmatter.sandboxData" >
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-img</span>
  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/rei-cedar-docs/live.jpg<span class="token punctuation">"</span></span>
  <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>REI employees building trails during a stewardship event<span class="token punctuation">"</span></span>
  <span class="token attr-name">ratio</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>16-9<span class="token punctuation">"</span></span>
  <span class="token attr-name">cover</span>
  <span class="token attr-name">crop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="ratio-auto" tabindex="-1"><a class="header-anchor" href="#ratio-auto">#</a> Ratio Auto</h2>
<p>To use cover or crop properties without a defined aspect ratio, set <code>ratio=&quot;auto&quot;</code> and give the image an explicit height and/or width. This can be done in several ways:</p>
<ul>
<li>Apply <code>height</code> or <code>min-height</code> to the CdrImg element directly</li>
<li>Apply <code>height: 100%</code> to the CdrImg element to have it take up the full height of it's container (which must also have a height defined through some means)</li>
<li>Make the CdrImg be a grid item, in which case the image height would be determined by the height of the other grid items in the same row</li>
</ul>
<cdr-doc-example-code-pair :codeMaxHeight= false repository-href="/src/components/image" :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrImg, CdrGrid'})" >
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-img</span>
    <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/rei-cedar-docs/live.jpg<span class="token punctuation">"</span></span>
    <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>REI employees building trails during a stewardship event<span class="token punctuation">"</span></span>
    <span class="token attr-name">ratio</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>auto<span class="token punctuation">"</span></span>
    <span class="token attr-name">cover</span>
    <span class="token attr-name">crop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span>
    <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">min-height</span><span class="token punctuation">:</span> 200px</span><span class="token punctuation">"</span></span></span>
  <span class="token punctuation">/></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-img</span>
      <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/rei-cedar-docs/live.jpg<span class="token punctuation">"</span></span>
      <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>REI employees building trails during a stewardship event<span class="token punctuation">"</span></span>
      <span class="token attr-name">ratio</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>auto<span class="token punctuation">"</span></span>
      <span class="token attr-name">cover</span>
      <span class="token attr-name">crop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span>
      <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">height</span><span class="token punctuation">:</span> 100%</span><span class="token punctuation">"</span></span></span>
    <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-grid</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>grid-template-columns: 1fr 2fr<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-img</span>
      <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/rei-cedar-docs/live.jpg<span class="token punctuation">"</span></span>
      <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>REI employees building trails during a stewardship event<span class="token punctuation">"</span></span>
      <span class="token attr-name">ratio</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>auto<span class="token punctuation">"</span></span>
      <span class="token attr-name">cover</span>
      <span class="token attr-name">crop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span>
      <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">height</span><span class="token punctuation">:</span> 100px</span><span class="token punctuation">"</span></span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Content to the side of an image in a grid<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-grid</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="shaping-images" tabindex="-1"><a class="header-anchor" href="#shaping-images">#</a> Shaping Images</h2>
<p>Apply a radius to an image.</p>
<h3 id="rounded" tabindex="-1"><a class="header-anchor" href="#rounded">#</a> Rounded</h3>
<p>The below example is cropped using center alignment with the aspect ratio set as square and the radius set as rounded.</p>
<cdr-doc-example-code-pair :codeMaxHeight= false repository-href="/src/components/image" :sandbox-data="$page.frontmatter.sandboxData" >
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-img</span>
  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/rei-cedar-docs/live.jpg<span class="token punctuation">"</span></span>
  <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>REI employees building trails during a stewardship event<span class="token punctuation">"</span></span>
  <span class="token attr-name">ratio</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span>
  <span class="token attr-name">radius</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rounded<span class="token punctuation">"</span></span>
  <span class="token attr-name">crop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>y-center x-center<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></cdr-doc-example-code-pair>
<h3 id="circle" tabindex="-1"><a class="header-anchor" href="#circle">#</a> Circle</h3>
<p>The below example is cropped using center alignment with the aspect ratio set as square and the radius set as circle.</p>
<cdr-doc-example-code-pair :codeMaxHeight= false repository-href="/src/components/image" :sandbox-data="$page.frontmatter.sandboxData">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-img</span>
  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/rei-cedar-docs/live.jpg<span class="token punctuation">"</span></span>
  <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>REI employees building trails during a stewardship event<span class="token punctuation">"</span></span>
  <span class="token attr-name">ratio</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span>
  <span class="token attr-name">radius</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>circle<span class="token punctuation">"</span></span>
  <span class="token attr-name">crop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>y-center x-center<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></cdr-doc-example-code-pair>
<h3 id="error-event-handler" tabindex="-1"><a class="header-anchor" href="#error-event-handler">#</a> Error Event Handler</h3>
<p>CdrImg will bind any event handlers to the <code>img</code> element that it wraps. This is intended to support attaching an error handler function in case an image does not load, but can be used for any HTML/JS event. Note that because images are usually not &quot;interactive&quot; elements you should not bind click handlers to them.</p>
<cdr-doc-code-snippet :copy-button="false" :line-numbers="false">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-img</span>
  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span>
  <span class="token attr-name">@error</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>eventHandler<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></cdr-doc-code-snippet>
<h2 id="lazy-loading" tabindex="-1"><a class="header-anchor" href="#lazy-loading">#</a> Lazy Loading</h2>
<p>The CdrImg component accepts any valid HTML <code>img</code> attribute. CdrImg works with <a href="https://css-tricks.com/native-lazy-loading/" target="_blank" rel="noopener noreferrer">native lazy loading<ExternalLinkIcon/></a> by setting the <code>loading</code> attribute.</p>
<cdr-doc-example-code-pair :codeMaxHeight= false repository-href="/src/components/image" :sandbox-data="$page.frontmatter.sandboxData">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-img</span>
  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/rei-cedar-docs/live2.jpg<span class="token punctuation">"</span></span>
  <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>REI employees building trails during a stewardship event<span class="token punctuation">"</span></span>
  <span class="token attr-name">loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lazy<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="accessibility" tabindex="-1"><a class="header-anchor" href="#accessibility">#</a> Accessibility</h2>
<p>To ensure that usage of this component complies with accessibility guidelines, provide descriptive text for <code>alt</code> attribute for:</p>
<ul>
<li>Informative images:
<ul>
<li>Convey a simple concept or information</li>
<li>For more information, <a href="https://www.w3.org/WAI/tutorials/images/informative/" target="_blank" rel="noopener noreferrer">Web Accessibility Tutorials: Informative Images<ExternalLinkIcon/></a></li>
</ul>
</li>
<li>Functional images:
<ul>
<li>Initiate an action, rather than to convey information (such as a printer icon)</li>
<li>Describe functionality of the link or button, rather than the visual image</li>
<li>For more information, <a href="https://www.w3.org/WAI/tutorials/images/functional/" target="_blank" rel="noopener noreferrer">Web Accessibility Tutorials: Functional Images<ExternalLinkIcon/></a></li>
</ul>
</li>
<li>Images of Text:
<ul>
<li>Displays text that is intended to be read</li>
<li>Avoid text in images, unless the image is a logo</li>
<li>Text alternative should contain the same words that appear in the image</li>
<li>For more information, <a href="https://www.w3.org/WAI/tutorials/images/textual/#image-of-styled-text-with-decorative-effect" target="_blank" rel="noopener noreferrer">Web Accessibility Tutorials: Images of Text<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
<br/>
<p>This component has compliance with WCAG guidelines by:</p>
<ul>
<li>Adding an empty <code>alt</code> attribute into the image element by default</li>
<li>An empty <code>alt</code> attribute is needed to meet accessibility requirements for decorative images</li>
</ul>
<hr>
<h1 id="guidelines" tabindex="-1"><a class="header-anchor" href="#guidelines">#</a> Guidelines</h1>
<h2 id="use-when" tabindex="-1"><a class="header-anchor" href="#use-when">#</a> Use When</h2>
<ul>
<li>Illustrating a product feature</li>
<li>Allowing comparisons between similar items</li>
<li>Capturing the user’s attention</li>
<li>Telling a story</li>
<li>Communicating the REI brand message</li>
<li>Explaining a complex procedure or how to perform an action</li>
</ul>
<h2 id="the-basics" tabindex="-1"><a class="header-anchor" href="#the-basics">#</a> The Basics</h2>
<p>REI image requirements are described on the <a href="https://confluence.rei.com/display/CMA/Launch-and-DefaultShop-Image-Sizes" target="_blank" rel="noopener noreferrer">Launch and DefaultShop Image Sizes<ExternalLinkIcon/></a> page.</p>
<h3 id="aspect-ratio" tabindex="-1"><a class="header-anchor" href="#aspect-ratio">#</a> Aspect Ratio</h3>
<p>Use conventional aspect ratios:</p>
<ul>
<li>Square</li>
<li>Portrait: 1:2, 2:3, 3:4, 9:16</li>
<li>Landscape: 2:1, 3:2, 4:3, 16:9</li>
</ul>
<h3 id="quality" tabindex="-1"><a class="header-anchor" href="#quality">#</a> Quality</h3>
<ul>
<li>Always maintain high image quality</li>
<li>Choose the right file format when saving your images to ensure proper image quality and file size:
<ul>
<li>For photos, use JPEG. Optimize JPEG files to find a balance between size and quality</li>
<li>For bitmap/raster artwork, use PNG with 8-bit color palette</li>
</ul>
</li>
</ul>
<h3 id="sizing" tabindex="-1"><a class="header-anchor" href="#sizing">#</a> Sizing</h3>
<ul>
<li>Avoid small file sizes that pixelate the image</li>
<li>Avoid unnecessarily large file sizes. Export images at the lowest file size possible without compromising quality</li>
<li>Optimize high resolution images using <a href="https://tinypng.com/" target="_blank" rel="noopener noreferrer">TinyPNG<ExternalLinkIcon/></a></li>
<li>Must display images at a proper pixel size compared to natural size</li>
</ul>
<h3 id="color-and-contrast" tabindex="-1"><a class="header-anchor" href="#color-and-contrast">#</a> Color and Contrast</h3>
<ul>
<li>Test images for high contrast displays</li>
<li>Ensure that no meaning is lost when colors are removed</li>
<li>Include text only with sufficient contrast</li>
</ul>
<h3 id="cropping-images" tabindex="-1"><a class="header-anchor" href="#cropping-images">#</a> Cropping Images</h3>
<ul>
<li>Specify the ratio of all cropped images</li>
<li>Enable background image to use the entire container:
<ul>
<li>Without stretching the image</li>
<li>Cropped either vertically or horizontally without empty space</li>
</ul>
</li>
<li>Crop images by specifying the starting point:
<ul>
<li>Adjust the starting background position on the x-axis of the image:
<ul>
<li>Left: Orients the image to its horizontal left</li>
<li>Right: Orients the image to its horizontal right</li>
<li>X-center: Orients the image to its horizontal center</li>
</ul>
</li>
<li>Adjust the starting background position on the y-axis of the image:
<ul>
<li>Top: Orients the image to its top</li>
<li>Bottom: Orients the image to its bottom</li>
<li>Y-center: Orients the image to its vertical center</li>
</ul>
</li>
</ul>
</li>
<li>Accepts x and y axis combination (e.g. crop=&quot;top left&quot;)</li>
</ul>
<cdr-img class="cdr-doc-article-img captioned" :src="$withBase(`/image-component/Spec__Image_Crop_Top_16-4.png`)"/>
Images are cropped on y-axis with top value and on x-axis with left, x-center, and right values
<cdr-img class="cdr-doc-article-img captioned" :src="$withBase(`/image-component/Spec__Image_Crop_Center_16-4.png`)"/>
Images are cropped on y-axis with y-center value and on x-axis with left, x-center, and right values
<cdr-img class="cdr-doc-article-img captioned" :src="$withBase(`/image-component/Spec__Image_Crop_Bottom_16-4.png`)"/>
Images are cropped on y-axis with bottom value and on x-axis with left, x-center, and right values
<h2 id="content" tabindex="-1"><a class="header-anchor" href="#content">#</a> Content</h2>
<h3 id="file-names" tabindex="-1"><a class="header-anchor" href="#file-names">#</a> File Names</h3>
<ul>
<li>Image file name should include primary keyword or what the page is targeting</li>
<li>Showcase keyword targeting through file name and alt text</li>
<li>For more information, view SEO How-to article <a href="https://confluence.rei.com/display/SI/Image+Implementation" target="_blank" rel="noopener noreferrer">Image Implementation<ExternalLinkIcon/></a></li>
</ul>
<h3 id="overlaid-text" tabindex="-1"><a class="header-anchor" href="#overlaid-text">#</a> Overlaid Text</h3>
<ul>
<li>Only display heading text on non-solid backgrounds:
<ul>
<li>Text should be at least 18px</li>
<li>Never allow overlaid text to wrap. Longer strings of text can be harder to navigate when the background varies</li>
<li>Consider adding a semi-transparent black gradient over the image in the CSS</li>
</ul>
</li>
<li>Apply only vertical gradient backgrounds. Avoid horizontal, diagonal, and radial gradients</li>
<li>Always include a backup background color so that when the background image is disabled, text is still legible and passes contrast requirements</li>
<li>For help in determining whether your text and image combination conforms to the required contrast ratio, use the <a href="https://chrome.google.com/webstore/detail/color-contrast-analyzer/dagdlcijhfbmgkjokkjicnnfimlebcll" target="_blank" rel="noopener noreferrer">Color Contrast Analyzer<ExternalLinkIcon/></a> Chrome plugin</li>
</ul>
<h3 id="decorative-images" tabindex="-1"><a class="header-anchor" href="#decorative-images">#</a> Decorative Images</h3>
<ul>
<li>Avoid using decorative images; instead present the image as a background image using CSS</li>
<li>If using the HTML <code>&lt;img&gt;</code> element, add:
<ul>
<li>An empty <code>alt</code> attribute</li>
<li>Attribute <code>role=&quot;presentation&quot;</code></li>
</ul>
</li>
</ul>
<h3 id="alternative-text" tabindex="-1"><a class="header-anchor" href="#alternative-text">#</a> Alternative Text</h3>
<ul>
<li>Use <a href="https://www.w3.org/WAI/tutorials/images/decision-tree/" target="_blank" rel="noopener noreferrer">this decision tree<ExternalLinkIcon/></a> to determine how to use the <code>alt</code> attribute</li>
<li>Be succinct. Ideally, one sentence or less</li>
<li>Be informative and accurate</li>
<li>If images of text are used, the <code>alt</code> attribute should contain the same words that appear in the image</li>
<li>Avoid repetitive labels. For example: “image of” or “picture of”</li>
<li>Descriptions:
<ul>
<li>Use short description that conveys the essential information presented by the image without burdening users with unnecessary details</li>
<li>Use long descriptions for complex images, such as graphs, charts, or diagrams, to provide enough information</li>
</ul>
</li>
<li>For groups of images that convey a single piece of information, apply the <code>alt</code> attribute to only one image for the entire group</li>
<li>For image maps with multiple clickable areas:
<ul>
<li>Must provide an overall context for the set of links using <code>alt</code> attribute</li>
<li>Each individual clickable area should have an <code>alt</code> attribute that describes the purpose or destination of the link</li>
</ul>
</li>
</ul>
<h2 id="responsiveness" tabindex="-1"><a class="header-anchor" href="#responsiveness">#</a> Responsiveness</h2>
<ul>
<li>Ability to control image display at small, medium, and large breakpoints</li>
<li>Lazy loading of images is provided</li>
<li>The <code>srcet</code> and <code>sizes</code> attributes can be used to control which image loads at which screeen size</li>
</ul>
<h2 id="resources" tabindex="-1"><a class="header-anchor" href="#resources">#</a> Resources</h2>
<ul>
<li>Chrome plugin, <a href="https://chrome.google.com/webstore/detail/color-contrast-analyzer/dagdlcijhfbmgkjokkjicnnfimlebcll" target="_blank" rel="noopener noreferrer">Color Contrast Analyzer<ExternalLinkIcon/></a></li>
<li>Image compression service, <a href="https://tinypng.com/" target="_blank" rel="noopener noreferrer">TinyPNG<ExternalLinkIcon/></a></li>
</ul>
<hr>
<h1 id="api" tabindex="-1"><a class="header-anchor" href="#api">#</a> API</h1>
<h2 id="props" tabindex="-1"><a class="header-anchor" href="#props">#</a> Props</h2>
<p>This component will bind any attribute that a <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img" target="_blank" rel="noopener noreferrer">native HTML img element<ExternalLinkIcon/></a> accepts.</p>
<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />
<h2 id="slots" tabindex="-1"><a class="header-anchor" href="#slots">#</a> Slots</h2>
<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage">#</a> Usage</h2>
<h3 id="ratio" tabindex="-1"><a class="header-anchor" href="#ratio">#</a> Ratio</h3>
<ul>
<li>Positions the original image asset off-screen and replaces it with a background image</li>
<li>CSS background property value is set to <code>contain</code> which resizes the background image to make sure it is fully visible</li>
<li>Shrinks the image and display additional padding to the requested ratio</li>
<li>To manipulate background property and remove excess padding:
<ul>
<li>Use <code>cover</code> property</li>
<li>Use <code>crop</code> property</li>
<li>Use both <code>cover</code> and <code>crop</code> properties together</li>
</ul>
</li>
</ul>
<h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover">#</a> Cover</h3>
<ul>
<li>Resizes the background image to cover the entire container
<ul>
<li>Without stretching the image</li>
<li>Cropped either vertically or horizontally without empty space</li>
</ul>
</li>
<li>Requires the <code>ratio</code> property</li>
</ul>
<h3 id="crop" tabindex="-1"><a class="header-anchor" href="#crop">#</a> Crop</h3>
<ul>
<li>Background image is displayed in its original size</li>
<li>Requires the <code>ratio</code> property</li>
<li>Defines the starting point of the overflow position</li>
<li>Accepts a single x-axis and y-axis value (e.g. <code>crop=”top left”</code>):
<ul>
<li>Adjust the starting background position on the x-axis of the image:
<ul>
<li><code>left</code>: Orients the image to its horizontal left</li>
<li><code>right</code>: Orients the image to its horizontal right</li>
<li><code>x-center</code>: Orients the image to its horizontal center</li>
</ul>
</li>
<li>Adjust the starting background position on the y-axis of the image:
<ul>
<li><code>top</code>: Orients the image to its top</li>
<li><code>bottom</code>: Orients the image to its bottom</li>
<li><code>y-center</code>: Orients the image to its vertical center</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="radius" tabindex="-1"><a class="header-anchor" href="#radius">#</a> Radius</h3>
<ul>
<li>Variants for this property: <code>circle</code> or <code>rounded</code> (for rounded rectangle)</li>
<li>Uses preset values provided in <code>cdr-core.css</code></li>
</ul>
<h3 id="modifiers" tabindex="-1"><a class="header-anchor" href="#modifiers">#</a> Modifiers</h3>
<p>Following variants are available to the <code>cdr-img</code> modifier attribute:</p>
<table>
<thead>
<tr>
<th style="text-align:left">Value</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">'responsive'</td>
<td style="text-align:left">Sets the image to display block and 100% width</td>
</tr>
</tbody>
</table>
<h2 id="performance" tabindex="-1"><a class="header-anchor" href="#performance">#</a> Performance</h2>
<p>For internal applications with large images or images that would benefit from changes due to platform or breakpoint, use the <code>loading=&quot;lazy&quot;</code> property to lazy load the images. The <code>srcset</code> and <code>sizes</code> properties can also be used to load the optimal image size for the user's screen. CdrImg supports any attribute that a native <code>img</code> element accepts, see the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img" target="_blank" rel="noopener noreferrer">MDN img docs<ExternalLinkIcon/></a> for more information on the <code>loading</code>, <code>srcset</code>, <code>sizes</code>, and other properties.</p>
</cdr-doc-table-of-contents-shell>
</template>
