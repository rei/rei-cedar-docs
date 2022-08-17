<template><cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>
<h2 id="the-cedar-container" tabindex="-1"><a class="header-anchor" href="#the-cedar-container">#</a> The Cedar Container</h2>
<p>The Cedar container <code>cdr-container</code> is the foundational layout mechanism on your page. It centers your content and provides the page with a left and right gutter helping you to separate your content and the edge of the browser window. The container should be added to the root wrapping element of your template using the <code>cdr-container</code> mixin from <code>@rei/cdr-tokens</code>, or the <a href="../../components/container">CdrContainer</a> component can be used as your root element.</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container-class<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>A cdr-container mixin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container-fluid-class<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>A cdr-container-fluid mixin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-container</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>A cdr-container component<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-container</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-container</span> <span class="token attr-name">modifier</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fluid<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>A cdr-container-fluid component<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-container</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token atrule"><span class="token rule">@import</span> <span class="token string">'~@rei/cdr-tokens/dist/scss/cdr-tokens.scss'</span><span class="token punctuation">;</span></span>
  <span class="token selector">.container-class</span> <span class="token punctuation">{</span>
    <span class="token atrule"><span class="token rule">@include</span> cdr-container<span class="token punctuation">;</span></span>
  <span class="token punctuation">}</span>
  <span class="token selector">.container-fluid-class</span> <span class="token punctuation">{</span>
    <span class="token atrule"><span class="token rule">@include</span> cdr-container-fluid<span class="token punctuation">;</span></span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>The container builds in its display settings for each of the breakpoints. This allows all pages to begin from the same layout context as each other. The container has two variants: standard container and fluid container.</p>
<cdr-img :src="$withBase('/layout/Spec_Grids_Breakpoints_16-9.png')" alt="Breakpoints for REI’s responsive layout" />
<h3 id="standard-vs-fluid-container" tabindex="-1"><a class="header-anchor" href="#standard-vs-fluid-container">#</a> Standard vs. Fluid Container</h3>
<p>The Cedar container allows flexible content width, up to a max width of 1232px. The fluid variant of the container does not have a max width. As shown below, pages can contain both fluid and standard containers.</p>
<cdr-img :src="$withBase('/layout/StandardvFluid.gif')" alt="Standard vs. Fluid container " />
<h2 id="display-breakpoints" tabindex="-1"><a class="header-anchor" href="#display-breakpoints">#</a> Display Breakpoints</h2>
<p>Cedar provides support for four layout screen widths: extra small, small, medium, and large.</p>
<p>These breakpoints set boundaries to be used by the media queries, providing ranges needed to ensure that your UI communicates what is most important to your customers for any screen size.</p>
<p>The responsive breakpoints do not provide any support for device detection, nor do they change the inherent functionality of elements at breakpoints.</p>
<h3 id="design-tokens" tabindex="-1"><a class="header-anchor" href="#design-tokens">#</a> Design Tokens</h3>
<p>The following design tokens are provided using the <code>@rei/cdr-tokens</code> package for breakpoint detection.</p>
<table>
<thead>
<tr>
<th>Display size</th>
<th>Design Token</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>Extra small</td>
<td><code>cdr-breakpoint-xs</code></td>
<td>0px</td>
</tr>
<tr>
<td>Small</td>
<td><code>cdr-breakpoint-sm</code></td>
<td>768px</td>
</tr>
<tr>
<td>Medium</td>
<td><code>cdr-breakpoint-md</code></td>
<td>992px</td>
</tr>
<tr>
<td>Large</td>
<td><code>cdr-breakpoint-lg</code></td>
<td>1232px</td>
</tr>
</tbody>
</table>
<p>For more information about using design tokens, visit the <RouterLink to="/tokens/overview/">Design Tokens</RouterLink> overview.</p>
<h3 id="scss-less-mixins" tabindex="-1"><a class="header-anchor" href="#scss-less-mixins">#</a> SCSS/LESS Mixins</h3>
<p><code>@rei/cdr-tokens</code> provides the following responsive breakpoint media queries for our patterns, components, and layouts. These provide size ranges intended to help facilitate the changing of layout at various screen widths or orientations.</p>
<table>
<thead>
<tr>
<th>Display size</th>
<th>Utility mixin</th>
<th>Range</th>
</tr>
</thead>
<tbody>
<tr>
<td>Extra Small &amp; Above</td>
<td><code>@include cdr-xs-mq-up {}</code></td>
<td>&gt;= 0</td>
</tr>
<tr>
<td>Extra Small Only</td>
<td><code>@include cdr-xs-mq-only {}</code></td>
<td>0-767px</td>
</tr>
<tr>
<td>Below Small</td>
<td><code>@include cdr-sm-mq-down {}</code></td>
<td>&lt; 768px</td>
</tr>
<tr>
<td>Small &amp; Above</td>
<td><code>@include cdr-sm-mq-up {}</code></td>
<td>&gt;= 768px</td>
</tr>
<tr>
<td>Small Only</td>
<td><code>@include cdr-sm-mq-only {}</code></td>
<td>768px-991px</td>
</tr>
<tr>
<td>Below Medium</td>
<td><code>@include cdr-md-mq-down {}</code></td>
<td>&lt; 992px</td>
</tr>
<tr>
<td>Medium &amp; Above</td>
<td><code>@include cdr-md-mq-up {}</code></td>
<td>&gt;= 992px</td>
</tr>
<tr>
<td>Medium Only</td>
<td><code>@include cdr-md-mq-only {}</code></td>
<td>992px-1231px</td>
</tr>
<tr>
<td>Below Large</td>
<td><code>@include cdr-lg-mq-down {}</code></td>
<td>&lt; 1232px</td>
</tr>
<tr>
<td>Large &amp; Above</td>
<td><code>@include cdr-lg-mq-up {}</code></td>
<td>&gt;= 1232px</td>
</tr>
<tr>
<td>Large Only</td>
<td><code>@include cdr-lg-mq-only {}</code></td>
<td>&gt;= 1232px</td>
</tr>
</tbody>
</table>
<h3 id="targeting-the-utility-media-query-with-class-names" tabindex="-1"><a class="header-anchor" href="#targeting-the-utility-media-query-with-class-names">#</a> Targeting the Utility Media Query with Class Names</h3>
<p>To avoid confusion between an element’s size variant and its breakpoint name, Cedar has the following naming conventions:</p>
<ul>
<li>Element sizes are treated as <strong>modifiers</strong> and follow the BEM naming convention of <code>block__element--modifier</code></li>
<li>Breakpoints are denoted with the @(xs, sm, md, lg) and are appended to a class name. This convention is outside of the BEM naming convention</li>
</ul>
<p>For example, <code>cdr-button size=&quot;small@lg&quot;</code>  will only apply the small button variant at the large breakpoint.</p>
<h3 id="greater-than-vs-range-values" tabindex="-1"><a class="header-anchor" href="#greater-than-vs-range-values">#</a> Greater Than vs. Range Values</h3>
<p>The <code>cdr-media queries</code> provide both “greater than” values and “ranges” for each breakpoint.</p>
<p>For example, a selector may target a small variant within the small breakpoint range like this:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>.cdr-example {
  @include cdr-sm-mq-only {
    &amp;--small\@sm {
      key: value;
    }
  }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Exploding the name <code>cdr-sm-mq-only</code> would read “cedar-small-media-query-only</p>
<p>Using the range ensures that the specified key:value pairs only applies to the <code>.cdr-example--small@sm</code> class name when it is displayed within the range of 768px-991px.</p>
<p>However, if you want to apply a value to the example that only needed to know when it was greater than the small breakpoint, you must use the root value query. This example allows you to update the display of the button when the display is at least  768px wide.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>.cdr-example {
  @include cdr-sm-mq-up {
    &amp;--small\@sm {
      key: value;
    }

  }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="components-and-breakpoints" tabindex="-1"><a class="header-anchor" href="#components-and-breakpoints">#</a> Components and breakpoints</h2>
<p>Components allow breakpoints to be passed as unique property variants.
When accepted, a breakpoint variant property will append the <code>@(xs, sm, md, lg)</code> to its name.</p>
<p>For example, to display the <code>cdr-button-small</code> variant at the small breakpoint:</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small@sm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  A primary button
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Note that the Cedar components will always use the range breakpoints. If you intend a component to continue to use the breakpoint variant within a different breakpoint range, you will also need to account for it within the same property definition.</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small@xs small@sm small@md<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  A primary button
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></cdr-doc-table-of-contents-shell>
</template>
