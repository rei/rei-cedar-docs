<template><cdr-doc-table-of-contents-shell>
# Overview
<h2 id="inline-icon-components" tabindex="-1"><a class="header-anchor" href="#inline-icon-components">#</a> Inline Icon Components</h2>
<p>The inline icon components are the recommended method for using Cedar icons in a Vue application. Cedar exports a component version of every SVG Icon in the <a href="../../icons/library">Cedar Icon Library</a>. These components are named using PascalCase, for example <code>account-profile</code> becomes <code>IconAccountProfile</code> or <code>camping</code> becomes <code>IconCamping</code>.</p>
<cdr-doc-example-code-pair repository-href="/src/components/icon" :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'IconAccountProfile, IconCamera'})">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>icon-account-profile</span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>icon-camera</span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="svg-sprite" tabindex="-1"><a class="header-anchor" href="#svg-sprite">#</a> SVG Sprite</h2>
<p>A collection of SVG icon files composed into a single file. This method provides a single server download request and caches icons for display. This is the most efficient way of displaying large numbers of icons, but has an added maintenance cost in that every icon used in the application must be manually added to it's sprite sheet. We recommend using the <a href="#inline-icon-components">inline icon components</a>, and optimizing to use a sprite only if it would provide a measurable performance benefit.</p>
<p>Visit the <a href="https://rei.github.io/cedar-icons/#/sprite" target="_blank" rel="noopener noreferrer">Cedar Icon Sprite Creator<ExternalLinkIcon/></a> to generate a sprite sheet for your project. You will need to ensure that your sprite contains all the Cedar icons used in your application, including those used in shared components. The generated sprite sheet should be rendered inline at the root of your HTML. You should avoid rendering the sprite sheet in JavaScript/Vue, as that will cause it to be included twice (once in the server rendered HTML, and once in the client side bundle).</p>
<cdr-doc-example-code-pair repository-href="/src/components/icon" :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrIcon'})" :load-sprite="true">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-icon</span> <span class="token attr-name">use</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#arrow-up<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-icon</span> <span class="token attr-name">use</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#arrow-down<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="non-cedar-svg" tabindex="-1"><a class="header-anchor" href="#non-cedar-svg">#</a> Non-Cedar SVG</h2>
<p>Create a new SVG icon using any valid SVG markup. The wrapping SVG element can be stripped (below) or maintained. Ensure that ID is not a used attribute in your icon to avoid introducing non-unique ID's on a page that may use this icon several times. Note that if it is not stripped, then <code>viewBox</code>, <code>role</code>, and <code>xmlns</code> attributes will not be preserved. Whereas, all other attributes will be preserved. This method creates an outer SVG wrapper for accessibility and styles. This is not recommended if using a large number of icons. See the <RouterLink to="/icons/overview/">icon overview</RouterLink> page for more details on building SVG for use with Cedar.</p>
<cdr-doc-example-code-pair repository-href="/src/components/icon" :sandbox-data="$page.frontmatter.sandboxData" >
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-icon</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>extremeBlk<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>defs</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>polygon</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>path-1<span class="token punctuation">"</span></span> <span class="token attr-name">points</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>6.5 18 0 9 6.5 0 13 9<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>polygon</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mask</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mask-2<span class="token punctuation">"</span></span> <span class="token attr-name">maskContentUnits</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userSpaceOnUse<span class="token punctuation">"</span></span> <span class="token attr-name">maskUnits</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>objectBoundingBox<span class="token punctuation">"</span></span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>13<span class="token punctuation">"</span></span>
              <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>18<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>white<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>use</span> <span class="token attr-name"><span class="token namespace">xlink:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#path-1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>use</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mask</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>polygon</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>path-3<span class="token punctuation">"</span></span> <span class="token attr-name">points</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>11.5 18 5 9 11.5 0 18 9<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>polygon</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mask</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mask-4<span class="token punctuation">"</span></span> <span class="token attr-name">maskContentUnits</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userSpaceOnUse<span class="token punctuation">"</span></span> <span class="token attr-name">maskUnits</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>objectBoundingBox<span class="token punctuation">"</span></span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>13<span class="token punctuation">"</span></span>
              <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>18<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>white<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>use</span> <span class="token attr-name"><span class="token namespace">xlink:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#path-3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>use</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mask</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>defs</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>g</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Icons<span class="token punctuation">"</span></span> <span class="token attr-name">stroke</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>none<span class="token punctuation">"</span></span> <span class="token attr-name">stroke-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>none<span class="token punctuation">"</span></span> <span class="token attr-name">fill-rule</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>evenodd<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>g</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>extremeBlk<span class="token punctuation">"</span></span> <span class="token attr-name">stroke-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1.5<span class="token punctuation">"</span></span> <span class="token attr-name">stroke</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#F2F2F2<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#000000<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>g</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>extreme<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>use</span> <span class="token attr-name">mask</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url(#mask-2)<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">xlink:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#path-1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>use</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>use</span> <span class="token attr-name">mask</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url(#mask-4)<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">xlink:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#path-3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>use</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>g</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>g</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>g</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-icon</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="accessibility" tabindex="-1"><a class="header-anchor" href="#accessibility">#</a> Accessibility</h2>
<p>CdrIcon by default adds <code>aria-hidden=&quot;true&quot;</code> to the root SVG element. If your usage of CdrIcon is purely decorative, or if the icon is already explained by the text surrounding it, then there are no other accessibility steps needed.</p>
<ul>
<li>For a button that only contains an icon, add an <code>aria-label</code> to the button element describing what the button does.</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;cdr-button :icon-only="true" aria-label="Add to Cart">
  &lt;icon-cart/>
&lt;/cdr-button>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>For a link that only contains an icon, include screenreader-only text inside of the link element using the <code>cdr-display-sr-only</code> mixin from <code>@rei/cdr-tokens</code>.</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;cdr-link href="/cart">
  &lt;icon-cart/>&lt;span class="sr-only">Go to cart page&lt;/span>
&lt;/cdr-link>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>For a button or link that contains text alongside an icon:</p>
<ul>
<li>If the text provides sufficient description on it's own (for example, &quot;Add to cart&quot; with a cart icon) there is no need to add any additional accessible text.</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;cdr-button>
  &lt;icon-cart/> Add to Cart
&lt;/cdr-button>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>If the icon has meaning that is not conveyed by the text, add <code>aria-hidden=&quot;true&quot;</code> to the icon and use the <code>cdr-display-sr-only</code> mixin from <code>@rei/cdr-tokens</code> to insert screenreader-only text into the button or link in the appropriate place.</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;cdr-link>
  &lt;icon-check-lg/>&lt;span class="sr-only">Available For&lt;/span> Curbside Pickup
&lt;/cdr-link>


&lt;cdr-button>
  &lt;icon-check-lg/>&lt;span class="sr-only">Available for&lt;/span> Curbside Pickup
&lt;/cdr-button>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>For an icon that exists outside of a link, button, or other actionable element, there are 2 ways to apply accessible text to the icon:</p>
<ul>
<li>Include screenreader only text alongside the icon describing it's meaning. This is the simplest approach for applying accessible text to an icon and has the best support across browsers and screenreaders.</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;icon-virtual-outfitting/>
&lt;span class="sr-only">Virtual Outfitting&lt;/span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul>
<li>Pass a <code>&lt;title&gt;</code> and <code>&lt;desc&gt;</code> into the default slot of the icon component, each with unique ids. Add <code>role=&quot;img&quot;</code> and <code>aria-labelledby=&quot;titleid descid&quot;</code> to the icon component, replacing <code>titleid</code> and <code>descid</code> with the IDs that correspond to the <code>&lt;title&gt;</code> and <code>&lt;desc&gt;</code> elements. If using CdrIcon with custom SVG, make sure title is the first child element. Note that this approach should be used to visually describe the icon as if it were an image, and should not be used to add contextual description of the icon's meaning.</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;icon-ski role="img" aria-labelledby="skiTitle skiDesc">
  &lt;title id="skiTitle">Skiing&lt;/title>
  &lt;desc id="skiDesc">A stick figure skiing downhill&lt;/desc>
&lt;/icon-ski>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><br/>
<p>Recommendations for writing screen reader text:</p>
<ul>
<li>Be succinct. Exclude unnecessary words</li>
<li>Be informative and accurate</li>
<li>Write in the active voice</li>
<li>Avoid technical jargon</li>
</ul>
<br/>
<hr>
<h1 id="guidelines" tabindex="-1"><a class="header-anchor" href="#guidelines">#</a> Guidelines</h1>
<h2 id="use-when" tabindex="-1"><a class="header-anchor" href="#use-when">#</a> Use When</h2>
<ul>
<li>Communicating simple actions and concepts that are easily understood, such as printing a receipt or sending an email</li>
<li>Making navigation easier for common actions, such as return to home page or search</li>
<li>Representing an action, object, or concept at a high level of abstraction, such as using the snowflake icon to represent snow sports</li>
<li>Notifying users about status, such as the number of items in a shopping cart or a warning message</li>
<li>Conserving space for concepts that are difficult to depict, such as the progress icon or the 3-line “hamburger” menu</li>
</ul>
<h2 id="the-basics" tabindex="-1"><a class="header-anchor" href="#the-basics">#</a> The Basics</h2>
<h3 id="sizes" tabindex="-1"><a class="header-anchor" href="#sizes">#</a> Sizes</h3>
<p>Icons are available in three sizes: small (16px), medium (24px), and large (32px).  Default size is medium (24px); however, designers can choose a different size.</p>
<cdr-img class="cdr-doc-article-img" :src="$withBase(`/icon/Spec__Icon__Sizes.png`)" alt="Cedar icon sizes" />
<h3 id="color" tabindex="-1"><a class="header-anchor" href="#color">#</a> Color</h3>
<p>Ensure that icons use the ratio of 4.5:1 contrast between icon color and background color. Follow recommendations in the <RouterLink to="/foundation/color/">Color Foundation</RouterLink> article for pairing color tokens.</p>
<cdr-img class="cdr-doc-article-img" :src="$withBase(`/icon/Spec__Icon__Colors.png`)" alt="Cedar icon color options" />
<h3 id="clearance" tabindex="-1"><a class="header-anchor" href="#clearance">#</a> Clearance</h3>
<p>Adequate space around the icon allows for legibility and touch. A minimum touch target area of 40px is recommended for standalone iconography.</p>
<p>When the mouse and keyboard are the primary input methods or when icons are paired inline with text, measurements may be condensed to accommodate denser layouts. Icon size should align to the line-height of the paired text element.</p>
<cdr-img class="cdr-doc-article-img" :src="$withBase(`/icon/Spec__Icon__Spacing.png`)" alt="Cedar icon clearance" />
<h2 id="icon-library" tabindex="-1"><a class="header-anchor" href="#icon-library">#</a> Icon Library</h2>
<p>For a list of all available icons and their names, visit the <a href="https://rei.github.io/cedar-icons/#/" target="_blank" rel="noopener noreferrer">Cedar Icon Library<ExternalLinkIcon/></a>.</p>
<h2 id="behavior" tabindex="-1"><a class="header-anchor" href="#behavior">#</a> Behavior</h2>
<p>When using icons with links or buttons, ensure that the icon communicates intended meaning.</p>
<do-dont :examples="$page.frontmatter.meaning" class="stack-2"/>
<p>Ensure that icons are sized to provide a minimum click or touch target.</p>
<do-dont :examples="$page.frontmatter.clearance" class="stack-2"/>
<p>Ensure that icons use contrast ratio of 4.5:1 between icon color and background color.</p>
<do-dont :examples="$page.frontmatter.color" class="stack-2"/>
<h1 id="api" tabindex="-1"><a class="header-anchor" href="#api">#</a> API</h1>
<h2 id="props" tabindex="-1"><a class="header-anchor" href="#props">#</a> Props</h2>
<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />
<h2 id="slots" tabindex="-1"><a class="header-anchor" href="#slots">#</a> Slots</h2>
<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage">#</a> Usage</h2>
<p>For a list of all available icons and their names, visit the <a href="https://rei.github.io/cedar-icons/#/" target="_blank" rel="noopener noreferrer">Cedar Icon Library<ExternalLinkIcon/></a>.</p>
<p>There are 2 different options to display SVG icons on your page using the <strong>CdrIcon</strong> package.</p>
<h3 id="_1-svg-sprite" tabindex="-1"><a class="header-anchor" href="#_1-svg-sprite">#</a> 1. SVG Sprite</h3>
<p>Requires:</p>
<ul>
<li>Icon sprite inline on page</li>
</ul>
<p>Icon sprites can be generated using the <a href="https://rei.github.io/cedar-icons/#/sprite" target="_blank" rel="noopener noreferrer">Cedar Icon Sprite Creator<ExternalLinkIcon/></a>.</p>
<p>The sprite needs to be available on any page where the icons are being used. Add the sprite component at the base layout or index:</p>
<p><em>App.vue (base template)</em></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>main<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-html</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>iconSprite<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span> <span class="token punctuation">/></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">></span></span> // rest of app
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">/* NOTE: you should create your own optimized sprite file for your project, `all-icons.svg` is only used here for convenience */</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> iconSprite <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@rei/cedar-icons/dist/all-icons.svg'</span><span class="token punctuation">;</span>

<span class="token operator">...</span>
<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    iconSprite
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">...</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p><em>Child.vue (any descendant component of App.vue above)</em></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-icon</span> <span class="token attr-name">use</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#caret-right<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> CdrIcon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@rei/cedar'</span><span class="token punctuation">;</span>

<span class="token operator">...</span>
components<span class="token operator">:</span> <span class="token punctuation">{</span>
  CdrIcon
<span class="token punctuation">}</span>
<span class="token operator">...</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="_2-non-cedar-svg" tabindex="-1"><a class="header-anchor" href="#_2-non-cedar-svg">#</a> 2. Non-Cedar SVG</h3>
<p>The <strong>CdrIcon</strong> package is simply an SVG with default attributes set for accessibility and styling.</p>
<ul>
<li>Any SVG markup can be used</li>
<li>All attributes, event listeners, classes, etc. will be carried over with the exception of <code>viewBox</code>, <code>role</code>, and <code>xmlns</code></li>
<li>This method will increase HTML file size and slow down performance if using a lot of icons.</li>
</ul>
<p>Requires:</p>
<ul>
<li>None</li>
</ul>
<p>Use any valid SVG markup in the <strong>CdrIcon</strong> slot.</p>
<p>The svg element in this example will be stripped, but the class and data atrribute will be preserved (and could be moved to cdr-icon also).</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  ...
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-icon</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>my-class<span class="token punctuation">"</span></span> <span class="token attr-name">data-example</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>this stays<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>My icon<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span> <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>M12 12c1.9329966 0 3.5-1.5670034 3.5-3.5C15.5 6.56700338 13.9329966 5 12 5S8.5 6.56700338 8.5 8.5c0 1.9329966 1.5670034 3.5 3.5 3.5zm6.7621385 7c-.8850139-2.8946791-3.5777143-5-6.7621387-5-3.1844245 0-5.87712493 2.1053209-6.76213876 5H18.7621385zM4 21c-.55228475 0-1-.4477153-1-1h-.00754862a9.07963802 9.07963802 0 0 1 .01314502-.1064258c.00185549-.0175393.0041644-.0349433.00691478-.0522001.43595408-3.2192393 2.56090871-5.9021068 5.45328094-7.1270196C7.26398091 11.7054407 6.5 10.191939 6.5 8.5 6.5 5.46243388 8.96243388 3 12 3c3.0375661 0 5.5 2.46243388 5.5 5.5 0 1.6919391-.763981 3.2054409-1.9657923 4.2143547 2.8923661 1.2249103 5.0173178 3.9077692 5.4532779 7.1269995.0027529.0172699.0050636.0346873.0069201.0522401A9.07834213 9.07834213 0 0 1 21.0075481 20H21c0 .5522847-.4477153 1-1 1H4z<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-icon</span><span class="token punctuation">></span></span>
  ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> CdrIcon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@rei/cedar'</span><span class="token punctuation">;</span>

<span class="token operator">...</span>
  components<span class="token operator">:</span> <span class="token punctuation">{</span>
    CdrIcon
  <span class="token punctuation">}</span>
<span class="token operator">...</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>You can also omit the wrapping svg element.</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  ...
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-icon</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>My icon<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span> <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>M12 12c1.9329966 0 3.5-1.5670034 3.5-3.5C15.5 6.56700338 13.9329966 5 12 5S8.5 6.56700338 8.5 8.5c0 1.9329966 1.5670034 3.5 3.5 3.5zm6.7621385 7c-.8850139-2.8946791-3.5777143-5-6.7621387-5-3.1844245 0-5.87712493 2.1053209-6.76213876 5H18.7621385zM4 21c-.55228475 0-1-.4477153-1-1h-.00754862a9.07963802 9.07963802 0 0 1 .01314502-.1064258c.00185549-.0175393.0041644-.0349433.00691478-.0522001.43595408-3.2192393 2.56090871-5.9021068 5.45328094-7.1270196C7.26398091 11.7054407 6.5 10.191939 6.5 8.5 6.5 5.46243388 8.96243388 3 12 3c3.0375661 0 5.5 2.46243388 5.5 5.5 0 1.6919391-.763981 3.2054409-1.9657923 4.2143547 2.8923661 1.2249103 5.0173178 3.9077692 5.4532779 7.1269995.0027529.0172699.0050636.0346873.0069201.0522401A9.07834213 9.07834213 0 0 1 21.0075481 20H21c0 .5522847-.4477153 1-1 1H4z<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-icon</span><span class="token punctuation">></span></span>
  ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> CdrIcon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@rei/cedar'</span><span class="token punctuation">;</span>

<span class="token operator">...</span>
  components<span class="token operator">:</span> <span class="token punctuation">{</span>
    CdrIcon
  <span class="token punctuation">}</span>
<span class="token operator">...</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></cdr-doc-table-of-contents-shell>
</template>
