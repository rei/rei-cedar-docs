<template><cdr-doc-table-of-contents-shell parentSelector="h2" childSelector="h3">
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview">#</a> Overview</h2>
<p>Filmstrip allows users to preview multiple pieces of related content in a constrained container. Filmstrip is different from carousel because while filmstrip shows multiple pieces of content per view, carousel only shows one piece of content per view.</p>
<p><strong>Filmstrip is not a traditional component that is functional out of the box.</strong> Designers and developers need to use this documentation to compose their own custom version of a filmstrip using the recommended components and guidance relevant to their specific use case.</p>
<cdr-img :src="$withBase('/filmstrip/product-filmstrip.jpeg')" alt="image of REI.com product recommendations filmstrip"/>
<h2 id="getting-started-building-a-filmstrip" tabindex="-1"><a class="header-anchor" href="#getting-started-building-a-filmstrip">#</a> Getting Started Building a Filmstrip</h2>
<p>There are two common examples documented below: <a href="#product-recommendation-filmstrip">Product Recommendation Filmstrip</a> and <a href="#prominent-card-filmstrip">Prominent Card Filmstrip</a>.</p>
<p>Designers can get started by pulling one of these examples from <a href="https://www.figma.com/file/dGjTo4tpmVlSZQPWPnCLy0/Cedar-Web-Components?node-id=2019%3A183215" target="_blank" rel="noopener noreferrer">the Figma library here.<ExternalLinkIcon/></a> and then optionally customizing the header and subheader, content blocks, pagination controls, link to all content and/or overflow grid based on the needs of your use case.</p>
<p>Developers can use the following <a href="#development-instructions">development guide</a> which applies specific filmstrip requirements to basic cedar components as a starting point for your custom filmstrip.</p>
<p>Please feel free to share feedback with us by posting in the <a href="https://rei.slack.com/archives/CA58YCGN4" target="_blank" rel="noopener noreferrer">cedar-user-support slack channel<ExternalLinkIcon/></a> or by coming to an office hours.</p>
<h2 id="anatomy" tabindex="-1"><a class="header-anchor" href="#anatomy">#</a> Anatomy</h2>
<p>Because the Filmstrip is a cookbook of multiple sub-components, its structure can be customized in a variety of ways.</p>
<cdr-img :src="$withBase('/filmstrip/filmstrip-anatomy.png')" alt="a wireframe outlining the parts listed below"/>
<h3 id="_1-wrapping-container" tabindex="-1"><a class="header-anchor" href="#_1-wrapping-container">#</a> 1. Wrapping container</h3>
<p>The wrapping container is a required element to house the filmstrip structure. The end of the page container can be removed to allow for a filmstrip that visually overflows.</p>
<p><strong>Must</strong></p>
<ul>
<li>
<p>Ensure all on-screen and touch target areas are at least 44 by 44 pixels</p>
</li>
<li>
<p>Include a skip link for keyboard and screen reading users to skip the filmstrip</p>
</li>
</ul>
<h3 id="_2-header-and-subheader-optional-and-customizable" tabindex="-1"><a class="header-anchor" href="#_2-header-and-subheader-optional-and-customizable">#</a> 2. Header and subheader (optional and customizable)</h3>
<p>The header is a recommended element for many filmstrip use cases to prime the user on the content that is within the filmstrip. A subheader can be used if more information is needed to understand the content within the filmstrip.</p>
<p><strong>Should</strong></p>
<ul>
<li>Be short, informative and directly related to the content within the filmstrip</li>
</ul>
<h3 id="_3-content-blocks-customizable" tabindex="-1"><a class="header-anchor" href="#_3-content-blocks-customizable">#</a> 3. Content Blocks (customizable)</h3>
<p>Content blocks can include any type of content such as images, product tiles, videos, gifs or cards. You can have 3-6 content blocks shown in a filmstrip at a time. Generally, the less content blocks a filmstrip has in a view, the greater the focus is on each content block in the filmstrip and the greater the filmstrip's general visual hierarchy is on the page. Choose the number of content blocks which corresponds with each individual content's importance and the importance that the filstrip has on the page as a whole.</p>
<p>On an X-axis, filmstrips items are linear and ordered, they start at item1 and end at item(n).</p>
<p><strong>Must</strong></p>
<ul>
<li>Be a set of like content. For example, a filmstrip with images should only show images while a filmstrip with videos should only show videos within its content blocks</li>
</ul>
<h3 id="_4-pagination-controls-optional" tabindex="-1"><a class="header-anchor" href="#_4-pagination-controls-optional">#</a> 4. Pagination Controls (optional)</h3>
<p>Pagination controls are an optional element that allows the user to move from one display view to another. Pagination controls in the form of arrow buttons allow users to navigate from one view to the next or previous.</p>
<p><strong>Behavior</strong></p>
<ul>
<li>Pagination controls become disabled when the set of data reaches either end of the x-axis.</li>
<li>A filmstrip has a defined beginning and end: if the user clicks a pagination control when it is disabled, a bouncing animation occurs.</li>
<li>When a user moves to a new view, there will always be 1 content block that stays the same, allowing the user to understand how the new view relates to the last view seen (for example, when the user clicks the right pagination control, the last card becomes the first card and when the user clicks the left pagination control, the first card becomes the last card).</li>
<li>The number of new content blocks shown on the last page is determined by the remainder of content blocks when the total number of content blocks is divided by the amount of content blocks per view (for example, if there are 9 total blocks of content in a filmstrip that shows 4 blocks of content per view, then only 1 new block of content will display in the last view along with 3 blocks of repeated content from the previous views).</li>
</ul>
<p><strong>Must</strong></p>
<ul>
<li>Provide visual boundaries with a minimum of 3:1 contrast to the background</li>
<li>For both keyboard focus and hover, it is important for the content to continue to have sufficient contrast, although it will depend on whether that content is text (relates to 1.4.3) or graphical (1.4.11) in nature</li>
<li>Provide a way for someone to escape the filmstrip items once they enter</li>
</ul>
<p><strong>Should</strong></p>
<ul>
<li>Use aria-hidden to remove controls from the tab and AT reading order</li>
</ul>
<h3 id="_5-link-to-all-content-optional-and-customizable" tabindex="-1"><a class="header-anchor" href="#_5-link-to-all-content-optional-and-customizable">#</a> 5. Link to all content (optional and customizable)</h3>
<p>The view all link is a recommended element for filmstrip use cases that have more related content than is being shown in the filmstrip.</p>
<p><strong>Should</strong></p>
<ul>
<li>Follow <a href="https://rei.github.io/rei-cedar-docs/components/links/#standalone" target="_blank" rel="noopener noreferrer">standalone link guidelines<ExternalLinkIcon/></a></li>
</ul>
<h3 id="_6-overflow-grid-customizable" tabindex="-1"><a class="header-anchor" href="#_6-overflow-grid-customizable">#</a> 6. Overflow Grid (customizable)</h3>
<p>The overflow grid container is the heavy lifter of this pattern, this is where the filmstrip items will be displayed. It sets up how many items are in view at a time, the spacing between items, the hiding of all items not in view, and it provides the basic functionality of a horizontal scroll container.</p>
<p><strong>Must</strong></p>
<ul>
<li>Be able to receive tab focus</li>
<li>Allow left and right arrow key scrolling</li>
<li>Be assigned a <code>role</code> of “region”</li>
<li>Associate your filmstrip to the optional title by providing your filmstrip a heading as <code>aria-labelledby</code></li>
<li>Apply <code>aria-label</code> if you are not using an optional title to provide the filmstrip a meaningful name</li>
</ul>
<h2 id="development-instructions" tabindex="-1"><a class="header-anchor" href="#development-instructions">#</a> Development Instructions</h2>
<p>These instructions will take you through three stages of filmstrip development. These stages are:</p>
<p>[Stage 1.](Stage 1: Developing a simple filmstrip Development of a simple filmstrip with an overflow container</p>
<p>Stage 2. Enhancing the simple filmstrip to address accessibility and performance issues</p>
<p>Stage 3. Extending and light refactoring of the filmstrip to include interactive controls</p>
<h3 id="stage-1-developing-a-simple-filmstrip" tabindex="-1"><a class="header-anchor" href="#stage-1-developing-a-simple-filmstrip">#</a> Stage 1: Developing a simple filmstrip</h3>
<p>The development of a simple filmstrip will require the use of a <code>&lt;cdr-grid&gt;</code> component and the addition of some CSS styling.</p>
<p><strong>Step a) Create markup and populate content</strong></p>
<p>Your markup should look something like this:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;cdr-grid class=”filmstrip”> 

  &lt;! --- Your grid items go here ---> 

&lt;/cdr-grid> 

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>The individual grid items that you place inside the grid can be any type of content you wish as long as the size of each item is identical.</p>
<p><strong>Step b) Add filmstrip styling</strong></p>
<p>The next step will be to add CSS styling to your <code>.filmstrip</code> class so that it becomes a proper Cedar filmstrip.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>.filmstrip { 
  grid-template-columns: repeat(auto-fill, 25rem);
  grid-auto-columns: 25rem;
  grid-auto-flow: column;
  overflow: scroll; 
} 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Let’s break down what each of these properties do and why we chose these values for them:</p>
<p><code>grid-template-columns</code>:</p>
<p>This property is doing most of the heavy lifting. The <code>repeat()</code> function here takes two arguments. The first argument can be a number (For example, we can use the number ‘9’ to create 9 columns to correspond with our 9 grid items). However, because we likely won’t know how many items our filmstrip will contain, we have chosen <code>auto-fill</code> as our value for this argument. <code>auto-fill</code> will essentially create as many columns as there are items within the grid for us automatically.</p>
<p>The second value that we pass to the repeat function is the size we want for each column. In this case we are using a fixed unit of <code>rem</code>. While you can use percentages or <code>vw</code> units you will find that your grid items get smaller as the viewport gets smaller, which will lead to very tiny looking filmstrips at mobile widths. Thus it is more manageable to decide upon fixed units for your column sizes and change them with media queries.</p>
<p><code>grid-auto-columns</code>:</p>
<p>This will dictate the size of each item that doesn’t fit in the main container. If you don’t set this property you will notice that the grid items will be the size you specify for the <code>repeat()</code> function until the items reach the end of the container. After that they will be a different size.</p>
<p><code>grid-auto-flow</code>:</p>
<p>The default behavior is to lay out each grid item by row, which means that after the container has been filled another row will be created. Because we want all our items in the same row, we are setting this property to <code>column</code>.</p>
<p><code>overflow</code>:</p>
<p>This property is set to <code>scroll</code> so that we get the handy scrollbar at the bottom of the filmstrip.</p>
<p>Additionally, it's worth pointing out that no additional styling is needed to remove default styling from the list items.</p>
<h4 id="is-the-filmstrip-finished" tabindex="-1"><a class="header-anchor" href="#is-the-filmstrip-finished">#</a> Is the filmstrip finished?</h4>
<p>At this point you should have a simple functioning filmstrip which should be good enough for a demo or a proof of concept. However, there are a few accessibility and performance concerns that need to be addressed before using this in a production environment. We will go over these concerns in the next stage of our filmstrip development.</p>
<p>This example below is what you should have after completing stage 1:</p>
<cdr-doc-example-code-pair repository-href="/src/components/grid" :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData)" :model="{items: [1, 2, 3, 4, 5, 6, 7, 8, 9]}">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>   
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-grid</span> <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ul<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>auto-fill<span class="token punctuation">,</span> 25rem<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token property">grid-auto-columns</span><span class="token punctuation">:</span> 25rem<span class="token punctuation">;</span> <span class="token property">grid-auto-flow</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span> <span class="token property">overflow</span><span class="token punctuation">:</span> scroll<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(item, index) in items<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://via.placeholder.com/400/400<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span> 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-grid</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></cdr-doc-example-code-pair>
<h3 id="stage-2-enhancing-filmstrip-accessibility-and-performance" tabindex="-1"><a class="header-anchor" href="#stage-2-enhancing-filmstrip-accessibility-and-performance">#</a> Stage 2: Enhancing filmstrip accessibility and performance</h3>
<p>While the filmstrip looks good and seems to function smoothly, there are several accessibility and performance requirements that we need to address.</p>
<p><strong>Step a) Keyboard Navigation Requirements</strong></p>
<p>Keyboard navigation in web pages is the process by which keyboard or <a href="https://www.youtube.com/watch?v=V1yoOLhx_qA" target="_blank" rel="noopener noreferrer">switch device<ExternalLinkIcon/></a> users can navigate from one interactive element to another. Users can observe which element is active or <strong>focused</strong> by certain cues such as a blue outlined border around a form field or, as in the case of screen readers, an audio description of the element that is currently receiving focus.</p>
<p>Unfortunately, our filmstrip currently provides a suboptimal experience for users on screen readers and keyboards. The main issue that we need to address is that the filmstrip currently functions as a “<a href="https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html" target="_blank" rel="noopener noreferrer">keyboard trap<ExternalLinkIcon/></a>”. If we don’t make any adjustments to our markup or our code, keyboard and screen reader users will have to tab through every single one of the links in your filmstrip before they will be able to move on to content outside of the filmstrip. This is not a great experience, especially if your filmstrip has a lot of content.</p>
<p>The filmstrip is what we would call a “composite widget”, a term that encompasses a single UI component with multiple focusable elements. As such, we should follow some established patterns when it comes to navigating the individual items of that widget.</p>
<p>Commonly used keys for navigation, activation, and/or selection within composite widgets are:</p>
<ul>
<li>Arrow Keys</li>
<li>Space Bar</li>
<li>Enter</li>
<li>Escape</li>
<li>Home / End</li>
</ul>
<p>An example of a composite widget within Cedar are <a href="http://cedar-docs.rei-cloud.com/rei-cedar-docs/components/radio/" target="_blank" rel="noopener noreferrer">Radio button groups<ExternalLinkIcon/></a>. Before moving on, take a moment to try to navigate the some of these radio button groups using your keyboard. You’ll notice that using the tab key will only activate focus on a single element within that group and to select other elements within that group you’ll need to use arrow keys.</p>
<p>In order to reproduce this behavior in our filmstrip, we change the default focusable behavior of our filmstrip container and the individual items contained therein. Then, we must set up keyboard event listeners that will respond to arrow key events (and change focus accordingly).</p>
<p>First, we modify the default focusable behavior by changing the <code>tabindex</code> of both the filmstrip and the links inside the filmstrip.</p>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex" target="_blank" rel="noopener noreferrer">Read more about the tabindex property on MDN<ExternalLinkIcon/></a></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
&lt;cdr-grid class="filmstrip" tabindex="0" tag=”ul”> 

  &lt;li> 
      &lt;cdr-link 

        v-for="item in items" 

        href="http://example.path.to/a/page" 

        alt="Check out this other webpage" 

        tabindex="-1" 
      >  
        &lt;cdr-img 

          class="grid-item" 

          src="https://via.placeholder.com/400/400" 

        /> 
    &lt;/cdr-link> 
  &lt;/li> 
&lt;/cdr-grid> 

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>The code example above is a slightly modified version of the code found in stage 1 of the filmstrip development process as we have wrapped the placeholder image in an anchor tag.</p>
<p>Note the <code>tabindex</code> attribute added to the <code>&lt;cdr-grid&gt;</code> element and to the <code>&lt;cdr-link&gt;</code> element. For the <code>&lt;cdr-grid&gt;</code> we have explicitly added <code>tabindex=0</code> to let the browser know that we want this element to be focusable (it’s not by default). Conversely, we have added <code>tabindex=-1</code> to each of the anchor tags in the filmstrip so they are not focusable by default.</p>
<p>At the moment, our work is only partway done. If you include this filmstrip on a page with other elements, you’ll find that you will be able to focus on the filmstrip using the tab key, but there is no way to currently focus on the individual items in the filmstrip.</p>
<p>The next step, then, is to add some event listeners which will listen for keydown events and focus on the appropriate elements much in the same way as the [radio button group] (http://cedar-docs.rei-cloud.com/rei-cedar-docs/components/radio/) we mentioned above.</p>
<p>Below is an example of what a keydown event handler method might look like. Written in pseudocode:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
handleKeyDown(e) { 

  //If the filmstrip or any of the filmstrip items don’t have focus, return;  

  if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { 

    //If the filmstrip currently has focus, then change the tab index of the first filmstrip item to ‘0’ 

    //focus on the first filmstrip item 

    //If an individual filmstrip item is focused (not the filmstrip itself), select the next filmstrip item. 

    //Be sure to reset any filmstrip item currently not receiving focus back to -1 

  } 

  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { 

    // Do a similar implementation as above but select the previous item instead of the next item 

  } 

  if (e.key === 'Tab') { 

    //If an individual filmstrip item has focus, the browser should naturally focus on the next 	element outside the filmstrip. Be sure to change the tab-index of the filmstrip item back 	to -1 

  } 
} 

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h4 id="what-about-nested-filmstrip-content" tabindex="-1"><a class="header-anchor" href="#what-about-nested-filmstrip-content">#</a> What about nested filmstrip content?</h4>
<p>It’s possible that you may have filmstrip items where one or more focusable elements are nested within the filmstrip item. An example of this is a filmstrip full of <a href="https://rei.github.io/rei-cedar-docs/components/card/" target="_blank" rel="noopener noreferrer">card components<ExternalLinkIcon/></a>. Here are a few additional rules that you should follow when responding to keydown events with nested content:</p>
<p>While the filmstrip or a filmstrip item has focus, arrow keys will select individual filmstrip items but not the content (buttons, links, etc.) nested within those items.</p>
<p>While a filmstrip item is selected, hitting the tab button will cycle through all the nested focusable content within that item.</p>
<p>If an element nested within a filmstrip item has focus, and there are no more elements within the filmstrip item to focus on, hitting <strong>tab</strong> will shift focus over to the first element outside the filmstrip.</p>
<p>If an element nested within a filmstrip item has focus, and there are no previous elements within the filmstrip item to focus on, hitting <strong>Shift-tab</strong> will shift focus over to the filmstrip item itself.</p>
<p><strong>Step b) Proper semantic markup, aria-role, and aria-labels</strong></p>
<p>It’s important that the markup we put on the page properly expresses what kind of content happens to be on the page. While this may seem evident to visual users, it may not be so apparent to those using screen readers. Furthermore, semantic HTML makes web page content more crawlable by search engines, thus ensuring that the page containing the filmstrip is properly indexed.</p>
<p>As it happens, we’ve already done some work making our markup semantically accurate in stage one by making the grid container a <code>&lt;ul&gt;</code> element and every filmstrip item within that container an <code>&lt;li&gt;</code> element. This makes sense because at its core a filmstrip really is just an unordered list of content items.</p>
<p>However, there’s more we can do to ensure that all users have the best experience possible with our filmstrip. Below is a possible example of what we can do.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;span id=”filmstrip-navigation” style=”display: none;”> 
  This section will be read out loud by a screen reader. It is referenced via the id by the aria-describedby property of the cdr-grid element below. You might include a detailed description here like: Product gallery. Use arrow keys to navigate the individual items of the gallery. Use the tab key to access the links inside one of the gallery items. 
&lt;/span> 

&lt;cdr-grid class=”filmstrip” tag="ul" aria-role=”region” aria-describedby=”filmstrip-navigation”>  
  &lt;li v-for="item in items" aria-label=”productname”>  
    &lt;cdr-img src="https://via.placeholder.com/400/400"/>  
  &lt;/li>  
&lt;/cdr-grid> 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>First of all, we’ve added an <code>aria-role=”region”</code> to the <code>&lt;cdr-grid&gt;</code>. This <code>aria-role</code> property ensures that screen readers will read out other attributes like <code>aria-describedby</code> should they exist. This may be needed in some cases, especially if you have complex navigation due to nested content within your filmstrip items.</p>
<p>In many cases, however, an <code>aria-label=gallery</code> should be enough. Choose either <code>aria-label</code> or <code>aria-describedby</code> depending on your needs. Do not include both. Below is an example with <code>aria-label</code> instead of <code>aria-describedby</code>.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
&lt;cdr-grid class=”filmstrip” tag="ul" aria-role=”region” aria-label=”gallery”> 

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>In addition to the addition of <code>aria-role</code>, <code>aria-label</code>, and <code>aria-describedby</code>. It would be helpful to add an <code>aria-label</code> to the individual filmstrip items. Here, you may put a product name, or use <code>aria-labelledby</code> to reference a header tag within the filmstrip item. Whatever you choose for the aria-label for filmstrip items, be sure that the label succinctly and accurately describes the content within.</p>
<p><strong>Step c) Lazy-loading of images</strong></p>
<p>Although our <code>&lt;cdr-img&gt;</code> components use native lazy loading which is as simple as putting the <code>loading= &quot;lazy&quot;</code> attribute on them, this unfortunately won’t work for filmstrip images that happen to be hidden by the overflow container. Native lazy loading only works with the main viewport, so you will need to implement your own solution here.</p>
<h3 id="stage-3-adding-interactive-controls-to-the-filmstrip" tabindex="-1"><a class="header-anchor" href="#stage-3-adding-interactive-controls-to-the-filmstrip">#</a> Stage 3: Adding interactive controls to the filmstrip</h3>
<p>As an enhancement to the filmstrip you can add arrow button controls. In order to do this you will first need to modify the markup and styles so that the button can appear where we expect them.</p>
<p><strong>Step a) Modify the markup for control placement</strong></p>
<p>While a simple filmstrip requires only one CSS grid, you will need to use nested CSS grids in order to properly place the filmstrip buttons. Here’s what the markup should look like:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
&lt;cdr-grid class=”filmstrip”> 

  &lt;cdr-button 

    @click="scrollLeft" 

    ref="left-button" 

    class="arrow-button__left" 

    :icon-only="true" 

    :with-background="true" 

    :full-width="true" 

    size="small" 

    tabindex="-1" 

  > 

    &lt;cdr-icon 

      use="#arrow-left" 

      inherit-color 

      slot="icon" 

    /> 

&lt;/cdr-button>  

  &lt;cdr-grid class="filmstrip__content" ref="filmstrip" tag="ul"> 

    &lt;li v-for="(item, index) in items">  

      &lt;cdr-img src="https://via.placeholder.com/400/400"/>  

    &lt;/li>  

  &lt;/cdr-grid> 

  &lt;cdr-button 

    ref="right-button" 

    @click="scrollRight" 

    class="arrow-button__right" 

    :icon-only="true" 

    :with-background="true" 

    :full-width="true" 

    size="small" 

    tabindex="-1" 

  > 

    &lt;cdr-icon 

      use="#arrow-right" 

      inherit-color 

      slot="icon" 

    /> 

  &lt;/cdr-button> 

&lt;/cdr-grid> 

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br></div></div><p>In this example, we have 2 <code>&lt;cdr-grid&gt;</code> elements. The first element represents the outer grid which contains three columns: once column for each of the buttons and one column for the filmstrip content itself.</p>
<p>For buttons we are using the <a href="https://rei.github.io/rei-cedar-docs/components/buttons/#icon-only-with-background" target="_blank" rel="noopener noreferrer">icon only with background<ExternalLinkIcon/></a>. The settings for the buttons in your filmstrip should be identical to those provided in the example markup above. The only deviation from the icon only with background pattern we have made is the <code>tabindex=-1</code>. As the buttons are really only here for mouse users, there is no reason to make these filmstrip controls focusable on a keyboard.</p>
<p>Next, let’s add the styling of the filmstrip itself:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
.filmstrip { 

  grid-template-columns: 1fr; 

  &amp;__content { 

    grid-row-start: 1; 

    grid-column: 1 / -1; 

    scroll-behavior: smooth; 

    z-index: 0; 

    //These styles remain unchanged from stage #1 

    grid-template-columns: repeat(auto-fill, 25rem); 

    grid-auto-columns: 25rem; 

    grid-auto-flow: column; 

    overflow: scroll;
  } 
} 

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>Here we have two classes: <code>.filmstrip</code> represents the new outer grid, while <code>.filmstrip__content</code> represents the inner grid. The <code>.filmstrip__content</code> class, as noted by the comments, takes a lot of styles from the simple filmstrip and remain unchanged.</p>
<p>Let’s break down some of the new style rules we have created:</p>
<p><code>grid-template-columns</code>:
We have added a property for grid template columns. Here we only need to define a single column because that’s all we’ll need to properly position the filmstrip and the filmstrip buttons. We have chosen <code>1fr</code> to so that the single column will take up all the space within the container.</p>
<p><code>grid-row-start</code>:
We want our buttons and our filmstrip content to occupy the same row. Without specifying this property, you will find new rows being created for each individual button and the filmstrip content. By giving all buttons and the filmstrip content a <code>grid-row-start</code> value of 1, you will avoid new row creation.</p>
<p><code>grid-column</code>:
Additionally, we don’t want new columns created for both the buttons and and the filmstrip. By setting this property to <code>1 / -1</code> this will ensure that the filmstrip column will start at the very first grid line and end at the very last grid line. Because of this, no new implicit columns will be created.</p>
<p><code>scroll-behavior</code>:
This property is optional. You will find this property helpful when implementing scroll behavior in the buttons. When you set this property, you will find the filmstrip smoothly transitions to a new scroll position when you invoke the <code>Element.scrollTo()</code> method. However, you may find a more appropriate solution for your needs that doesn’t require the use of this property.</p>
<p><code>z-index</code>:
While the default z-index for any element is zero, we found some issues with filmstrip buttons not consistently firing click events. Explicitly setting the z-index of the filmstrip to zero container solves this issue.</p>
<p>Next, let’s look at the styling for the buttons:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>.arrow-button { 

  grid-row-start: 1; 

  align-self: center; 

  z-index: 1; 

  &amp;__left { 

    @extend .arrow-button; 

    justify-self: start; 

    grid-column-start: 1; 

  } 

  &amp;__right { 

    @extend .arrow-button; 

    justify-self: end; 

    grid-column-end: -1; 

  } 

  &amp;[aria-disabled="true"] { 

    color: $cdr-color-text-button-secondary-disabled; 

    cursor: not-allowed; 

    background-color: $cdr-color-background-button-secondary-disabled !important; 

    box-shadow: inset 0 0 0 0.1rem $cdr-color-background-button-default-disabled !important; 

    fill: $cdr-color-text-button-secondary-disabled !important; 

    border: none !important; 

  } 
} 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><p>First let’s go over the styles that the two buttons have in common.</p>
<p><code>grid-row-start</code>:
We want the buttons to occupy the same row as the filmstrip and each other, thus we must explicitly set this property.</p>
<p><code>align-self</code>:
This property sets alignment for the buttons on the y-axis. The default value for this property is <code>stretch</code> which will make the buttons look like elongated stretched ovals spanning from the top to the bottom of the filmstrip. We set it to <code>center</code> here so the buttons retain their preferred dimensions as well as positions themselves conveniently in the center of the row they occupy.</p>
<p><code>z-index</code>:
We’re setting z-index to 1 to ensure that the buttons appear above the filmstrip content.</p>
<p>Now for the properties the with different values:</p>
<p><code>justify-self</code>:
This property sets alignment for the buttons on the x-axis. The default value for this property is <code>stretch</code> which will make the buttons look like elongated stretched ovals spanning from the left to the right of the filmstrip. For the left button the property value is set to <code>start</code> because we want the button to be positioned at the beginning of the filmstrip. Likewise, we have set the value for this property to <code>end</code> for the right button because we want it positioned at the end of the filmstrip.</p>
<p><code>grid-column-start</code>/<code>grid-column-end</code>:
If we don't set these properties for the left and right buttons the grid will want to create new columns for each of the buttons. Since we don’t want this, we specify the grid line where we want the left button to start and the grid line where we want the right button to end. This will position the left and right buttons at the beginning and end of the one column we’ve created the one column grid we’ve created for the buttons and the filmstrip content.</p>
<p><strong>Step b) Disabled button styles:</strong></p>
<p>Finally, while disabled styles come out of the box for the icon button, disabling the filmstrip buttons will make it so they don’t capture click events. While normally we want that, in some cases you may want to trigger a “bounce” animation as a cue to users that you are at the end of filmstrip. In order to fire this event you’ll need to disable the button in a different way. Using the <code>[aria-disabled=”true”]</code> should serve this purpose for you.</p>
<p><strong>Step c) Additional Enhancements:</strong></p>
<p>At this point we have set up a filmstrip with buttons as well as attach click listeners on each. As a developer, it’ll be up to you to write the methods to handle the click events. Below is a list of high level suggestions for the rest of your filmstrip implementation:</p>
<ul>
<li>Implement a <code>scrollLeft()</code> and <code>scrollRight()</code> function. As part of your implementation of these functions you will need to calculate the number of pixels to scroll left/right which will change depending on the size of the container.</li>
<li>Include methods to determine if user has scrolled to the end of the filmstrip (either the left or the right end). These methods will be needed to determine the enabled/disabled state of the left and right buttons.</li>
<li>Implement <code>bounceLeft()</code> and <code>bounceRight()</code> methods which will produce a bouncing animation when clicking a disabled left or right button.</li>
<li>Ensure that the methods mentioned are called when a <code>@wheel</code> event (this is similar to a scroll event) is fired. This happens a lot so you will need to <a href="https://css-tricks.com/debouncing-throttling-explained-examples/" target="_blank" rel="noopener noreferrer">debounce or throttle<ExternalLinkIcon/></a> the event to ensure that the methods are only called as often as needed.</li>
</ul>
<p>Below is an example of a filmstrip with left and right buttons:</p>
<cdr-doc-example-code-pair copy-button="false" repository-href="/src/components/grid" 
  :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData)"
  :methods="{
    getFilmstripDimensions() {
      this.filmstrip = this.$refs.filmstrip.$el;
      this.filmstripWidth = this.filmstrip.offsetWidth;
      this.currentPosition = this.filmstrip.scrollLeft;
      this.maxScrollRight = this.filmstrip.scrollWidth - this.filmstrip.clientWidth;
    },
    handleButtonState() {
      this.getFilmstripDimensions();
      this.filmstrip = this.$refs.filmstrip.$el;
      this.leftButton = this.$refs['left-button'].$el;
      this.rightButton = this.$refs['right-button'].$el;
      if (this.currentPosition === this.maxScrollRight) {
        this.rightArrowDisabled = true;
        this.rightButton.setAttribute('aria-disabled', 'true');
        this.rightButton.style = this.rightButtonDisabled;
      }
      if (this.currentPosition === 0) {
        this.leftArrowDisabled = true;
        this.leftButton.setAttribute('aria-disabled', 'true');
        this.leftButton.style = this.leftButtonDisabled;
      }
      if (this.currentPosition !== this.maxScrollRight) {
        this.enableRightButton();
      }
      if (this.currentPosition !== 0) {
        this.enableLeftButton();
      }
    },
    enableRightButton(){
      this.rightButton = this.$refs['right-button'].$el;
      this.rightArrowDisabled = false;
      this.rightButton.setAttribute('aria-disabled', 'false');
      this.rightButton.style = this.rightButtonEnabled;
    },
    enableLeftButton(){
      this.leftButton = this.$refs['left-button'].$el;
      this.leftArrowDisabled = false;
      this.leftButton.setAttribute('aria-disabled', 'false');
      this.leftButton.style = this.leftButtonEnabled;
    },
    scrollRight() {
      this.filmstrip = this.$refs.filmstrip.$el;
      this.getFilmstripDimensions();
      this.filmstrip.scrollTo(this.currentPosition + 900, 0);
      this.currentPosition = this.filmstrip.scrollLeft;
      this.handleButtonState();
      this.enableLeftButton();
    },
    scrollLeft() {
      this.filmstrip = this.$refs.filmstrip.$el;
      this.getFilmstripDimensions();
      this.filmstrip.scrollTo(this.currentPosition - 900, 0);
      this.currentPosition = this.filmstrip.scrollLeft;
      this.handleButtonState();
      this.enableRightButton();
    }
  }"
  :model="{items: [1, 2, 3, 4, 5, 6, 7, 8, 9], currentPosition: null, rightButtonEnabled: 'grid-row-start: 1; z-index: 1; justify-self: end; align-self: center; grid-column-end: -1;', leftButtonEnabled: 'grid-row-start: 1; z-index: 1; justify-self: start; align-self: center; grid-column-start: 1;', rightButtonDisabled: 'grid-row-start: 1; z-index: 1; justify-self: end; align-self: center; grid-column-end: -1; color: #d1cbbd;cursor: not-allowed;background-color: #f9f8f6 !important;box-shadow: inset 0 0 0 0.1rem #dcd6cb !important;fill: #d1cbbd !important;border: none !important;', leftButtonDisabled: 'grid-row-start: 1; z-index: 1; justify-self: start; align-self: center; grid-column-start: 1; color: #d1cbbd;cursor: not-allowed;background-color: #f9f8f6 !important;box-shadow: inset 0 0 0 0.1rem #dcd6cb !important;fill: #d1cbbd !important;border: none !important;'}"
>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-grid</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 1fr<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-button</span>
      <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scrollLeft<span class="token punctuation">"</span></span>
      <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left-button<span class="token punctuation">"</span></span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>arrow-button__left<span class="token punctuation">"</span></span>
      <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">grid-row-start</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span> <span class="token property">z-index</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span> <span class="token property">justify-self</span><span class="token punctuation">:</span> start<span class="token punctuation">;</span> <span class="token property">align-self</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span> <span class="token property">grid-column-start</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span>
      <span class="token attr-name">:icon-only</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
      <span class="token attr-name">:with-background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
      <span class="token attr-name">:full-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
      <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>
      <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scroll left<span class="token punctuation">"</span></span>
      <span class="token attr-name">data-backstop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cdr-button--icon-only<span class="token punctuation">"</span></span>
      <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>-1<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-icon</span>
      <span class="token attr-name">use</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#arrow-left<span class="token punctuation">"</span></span>
      <span class="token attr-name">inherit-color</span>
      <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-button</span><span class="token punctuation">></span></span>   
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-grid</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>filmstrip<span class="token punctuation">"</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>filmstrip<span class="token punctuation">"</span></span> <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ul<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">grid-row-start</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span> <span class="token property">grid-column</span><span class="token punctuation">:</span> 1 / -1<span class="token punctuation">;</span> <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>auto-fill<span class="token punctuation">,</span> 25rem<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token property">grid-auto-columns</span><span class="token punctuation">:</span> 25rem<span class="token punctuation">;</span> <span class="token property">grid-auto-flow</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span> <span class="token property">overflow</span><span class="token punctuation">:</span> scroll<span class="token punctuation">;</span> <span class="token property">scroll-behavior</span><span class="token punctuation">:</span> smooth<span class="token punctuation">;</span> <span class="token property">transition</span><span class="token punctuation">:</span> 0.30s <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>0.32<span class="token punctuation">,</span> 0.94<span class="token punctuation">,</span> 0.60<span class="token punctuation">,</span> 1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token property">z-index</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span>
            <span class="token attr-name">@wheel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleButtonState<span class="token punctuation">"</span></span>
            <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(item,index) in items<span class="token punctuation">"</span></span>
            <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>grid-item<span class="token punctuation">"</span></span>
            <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span>
          <span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-card</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-img</span>
                  <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>card test image alt text<span class="token punctuation">"</span></span>
                  <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$withBase(<span class="token punctuation">'</span>/live.jpg<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span>
                  <span class="token attr-name">modifier</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>responsive<span class="token punctuation">"</span></span>
                <span class="token punctuation">/></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-link</span>
                  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cdr-card__link<span class="token punctuation">"</span></span>
                  <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#Overview<span class="token punctuation">"</span></span>
                  <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>-1<span class="token punctuation">"</span></span>
                <span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span>
                    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span>
                  <span class="token punctuation">></span></span>
                    Complex Card Title
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-link</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-rating</span>
                  <span class="token attr-name">rating</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>4.2<span class="token punctuation">"</span></span>
                  <span class="token attr-name">count</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>12<span class="token punctuation">"</span></span>
                  <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>
                <span class="token punctuation">/></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>body<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                  Card content
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-text</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-card</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-grid</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-button</span>
    <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right-button<span class="token punctuation">"</span></span>
    <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scrollRight<span class="token punctuation">"</span></span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>arrow-button__right<span class="token punctuation">"</span></span>
    <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">grid-row-start</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span> <span class="token property">z-index</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span> <span class="token property">justify-self</span><span class="token punctuation">:</span> end<span class="token punctuation">;</span> <span class="token property">align-self</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span> <span class="token property">grid-column-end</span><span class="token punctuation">:</span> -1<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span>
    <span class="token attr-name">:icon-only</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
    <span class="token attr-name">:with-background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
    <span class="token attr-name">:full-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
    <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>
    <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scroll right<span class="token punctuation">"</span></span>
    <span class="token attr-name">data-backstop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cdr-button--icon-only<span class="token punctuation">"</span></span>
    <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>-1<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-icon</span>
    <span class="token attr-name">use</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#arrow-right<span class="token punctuation">"</span></span>
    <span class="token attr-name">inherit-color</span>
    <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span>
  <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-grid</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples">#</a> Examples</h2>
<p>The following are two common use cases that can be followed. Designers can copy and paste these examples from the Figma library.</p>
<h3 id="product-recommendation-filmstrip" tabindex="-1"><a class="header-anchor" href="#product-recommendation-filmstrip">#</a> Product Recommendation Filmstrip</h3>
<p>Use the product recommendation filmstrip pattern to showcase relevant and related products or services.</p>
<p>This pattern commonly displays six content blocks per view and does not require more than 5 clicks or swipes to view all of the content within it.</p>
<cdr-img :src="$withBase('/filmstrip/product-filmstrip.jpeg')" alt="image of REI.com product recommendations filmstrip"/>
<h3 id="prominent-card-filmstrip" tabindex="-1"><a class="header-anchor" href="#prominent-card-filmstrip">#</a> Prominent Card Filmstrip</h3>
<p>Use the prominent card filmstrip pattern to display larger categories of content.</p>
<p>This pattern commonly displays 3 to 4 content blocks per view to emphasize the fact that each piece of content has more prominence than individual products. This pattern should not require more than 5 clicks or swipes to view all of the content within it.</p>
<cdr-img :src="$withBase('/filmstrip/category-hub-filmstrip.png')" alt="image of REI.com prominent card filmstrip"/>
<h2 id="guidelines" tabindex="-1"><a class="header-anchor" href="#guidelines">#</a> Guidelines</h2>
<h3 id="use-when" tabindex="-1"><a class="header-anchor" href="#use-when">#</a> Use When</h3>
<ul>
<li>Providing a teaser of products, events, articles or categories to users</li>
</ul>
<h3 id="don-t-use-when" tabindex="-1"><a class="header-anchor" href="#don-t-use-when">#</a> Don't Use When</h3>
<ul>
<li>The content blocks will not link to a destination or contains no actionable elements</li>
<li>The information contained within the filmstrip is not related</li>
<li>The content will exceed a maximum of 5 swipes to preview all the content</li>
<li>The user will need to focus on 1 piece of content at a time. Instead, use a carousel</li>
<li>There will be more than 5 full filmstrip views worth of content. Instead, consider using <RouterLink to="/components/links/">Links</RouterLink></li>
</ul>
<h3 id="do-don-t" tabindex="-1"><a class="header-anchor" href="#do-don-t">#</a> Do/Don't</h3>
<ul>
<li>
<p>Do display a minimum of 3 content blocks per view</p>
</li>
<li>
<p>Don’t display less than 3 content blocks per view</p>
</li>
<li>
<p>Do display a maximum of 6 content blocks per view</p>
</li>
<li>
<p>Don’t display more than 6 content blocks per view</p>
</li>
<li>
<p>Do include up to 5 clicks or swipes per filmstrip</p>
</li>
<li>
<p>Do not allow the user to click or swipe excessively to view content in the filmstrip</p>
</li>
<li>
<p>Do give the filmstrip a defined start and endpoint</p>
</li>
<li>
<p>Do not allow the filmstrip to infinitely loop</p>
</li>
<li>
<p>Do use like content for content blocks within the same filmstrip</p>
</li>
<li>
<p>Do not present different types of content within the same filmstrip</p>
</li>
</ul>
<h3 id="behavior" tabindex="-1"><a class="header-anchor" href="#behavior">#</a> Behavior</h3>
<ul>
<li>A tab user will focus first on the filmstrip container</li>
<li>The container should be scrollable via left and right arrow keys</li>
<li>A screen reader user will not hear the arrow controls but should hear the filmstrip container (Use aria-hidden to remove controls from the tab and AT reading order)</li>
</ul>
<h3 id="accessibility" tabindex="-1"><a class="header-anchor" href="#accessibility">#</a> Accessibility</h3>
<h4 id="overflow-and-focus-problem" tabindex="-1"><a class="header-anchor" href="#overflow-and-focus-problem">#</a> Overflow and Focus problem</h4>
<ul>
<li>Firefox puts an overflowing container into the tab order, making it reachable and its content scrollable. Because it has no focus styles, it is not obvious</li>
<li>Chrome, Chrome-based Edge and Safari do not add overflow containers to the tab order. By default, overflowing content on these browsers is not scrollable with the keyboard</li>
</ul>
<h4 id="overflow-and-focus-solution" tabindex="-1"><a class="header-anchor" href="#overflow-and-focus-solution">#</a> Overflow and Focus solution</h4>
<ul>
<li>Add <code>tabindex=&quot;0&quot;</code> to the overflowing container to make it baseline keyboard accessible.</li>
<li>Show this keyboard accessibility to users by applying focus styles (Cedar token mixin)</li>
<li>&quot;Promote&quot; the <code>&lt;div&gt;</code> to a landmark region by both applying role=&quot;region&quot; and supplying an accessible name, by using aria-label, for example. By doing so, you provide much-needed context to screen reader users - because they suddenly discover a focusable element that is not interactive in the classic sense (like a link or button would be).</li>
</ul>
</cdr-doc-table-of-contents-shell>
</template>
