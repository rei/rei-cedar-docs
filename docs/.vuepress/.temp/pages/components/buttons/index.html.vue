<template><cdr-doc-table-of-contents-shell tab-name="Overview">
<h1 id="overview" tabindex="-1"><a class="header-anchor" href="#overview">#</a> Overview</h1>
<h2 id="primary" tabindex="-1"><a class="header-anchor" href="#primary">#</a> Primary</h2>
<p>Use primary buttons for actions to complete a task or to move forward in a process such as &quot;Add to cart.&quot; There is only one primary action per major page section.</p>
<cdr-doc-example-code-pair repository-href="/src/components/button" :sandbox-data="$page.frontmatter.sandboxData" >
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-button</span><span class="token punctuation">></span></span>Add to cart<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-button</span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>Add to cart<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="secondary" tabindex="-1"><a class="header-anchor" href="#secondary">#</a> Secondary</h2>
<p>Use secondary buttons for all actions that do not move the user to the next step or require additional user actions such as &quot;Add to wish list&quot; or &quot;Find a campout near you.&quot;</p>
<cdr-doc-example-code-pair repository-href="/src/components/button" :sandbox-data="$page.frontmatter.sandboxData" >
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-button</span> <span class="token attr-name">modifier</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>secondary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Add to wish list<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-button</span> <span class="token attr-name">modifier</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>secondary<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>Add to wish list<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="alternative-styles" tabindex="-1"><a class="header-anchor" href="#alternative-styles">#</a> Alternative Styles</h2>
<p>Use <code>sale</code> or <code>dark</code> for alternative button styling.</p>
<cdr-doc-example-code-pair repository-href="/src/components/button" :sandbox-data="$page.frontmatter.sandboxData" >
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-button</span> <span class="token attr-name">modifier</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sale<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Buy now<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-button</span> <span class="token attr-name">modifier</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sale<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>Buy now<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-button</span> <span class="token attr-name">modifier</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Add to wish list<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-button</span> <span class="token attr-name">modifier</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>Add to wish list<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="link-style" tabindex="-1"><a class="header-anchor" href="#link-style">#</a> Link Style</h2>
<p>Use <code>link</code> modifier to render a button that is styled like a CdrLink. This can be used to create links with the padding and sizing options of a button. Can be used with the <code>tag</code> property set to the default <code>&quot;button&quot;</code> or <code>&quot;a&quot;</code>. For rendering a link inline with text, use <a href="../links">CdrLink</a>. To render a button that behaves like a link, use a <a href="#button-with-link-tag">CdrButton with link tag</a>.</p>
<cdr-doc-example-code-pair repository-href="/src/components/button" :sandbox-data="$page.frontmatter.sandboxData" >
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-button</span> <span class="token attr-name">modifier</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>link<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Buy now<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-button</span> <span class="token attr-name">modifier</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>link<span class="token punctuation">"</span></span> <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>a<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>View cart<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="text-and-icon" tabindex="-1"><a class="header-anchor" href="#text-and-icon">#</a> Text and Icon</h2>
<p>Pair an icon with text to improve recognition about an object or action.</p>
<cdr-doc-example-code-pair repository-href="/src/components/button" :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrButton, IconPlayStroke'})" >
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-button</span>
      <span class="token attr-name">modifier</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>secondary<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#icon-left</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>icon-play-stroke</span>
          <span class="token attr-name">inherit-color</span>
        <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      Play video
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-button</span>
      <span class="token attr-name">modifier</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>secondary<span class="token punctuation">"</span></span>
      <span class="token attr-name">disabled</span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#icon-left</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>icon-play-stroke</span>
          <span class="token attr-name">inherit-color</span>
        <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      Play video
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="icon-only" tabindex="-1"><a class="header-anchor" href="#icon-only">#</a> Icon Only</h2>
<p>Use icons to visually communicate an object or action in a limited space. Include alternative text to describe what the button does.</p>
<cdr-doc-example-code-pair repository-href="/src/components/button" :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrButton, IconQuestionFill'})" >
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-button</span>
      <span class="token attr-name">:icon-only</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
      <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>More information about icon<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#icon</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>icon-question-fill</span> <span class="token attr-name">inherit-color</span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="icon-only-with-background" tabindex="-1"><a class="header-anchor" href="#icon-only-with-background">#</a> Icon Only With Background</h2>
<p>Use <code>with-background</code> property in conjunction with the <code>icon-only</code> property to make icon buttons more identifiable. Include alternative text to describe what the button does.</p>
<cdr-doc-example-code-pair repository-href="/src/components/button" :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrButton, IconAccountProfile'})" >
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-button</span>
      <span class="token attr-name">:icon-only</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
      <span class="token attr-name">:with-background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
      <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>More information about icon<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#icon</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>icon-account-profile</span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="stateful-button" tabindex="-1"><a class="header-anchor" href="#stateful-button">#</a> Stateful Button</h2>
<p>For buttons that trigger asynchronous actions, use the <code>click</code> event and dynamic properties in order to change the label or state of a button.</p>
<cdr-doc-example-code-pair repository-href="/src/components/button" :sandbox-data="$page.frontmatter.sandboxData" :model="{isLoading: false}">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-button</span> <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isLoading<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isLoading = true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  {{isLoading ? 'Loading...' : 'Add to cart'}}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="full-width" tabindex="-1"><a class="header-anchor" href="#full-width">#</a> Full Width</h2>
<p>Displays at full width of its container.</p>
<cdr-doc-example-code-pair repository-href="/src/components/button" :sandbox-data="$page.frontmatter.sandboxData" >
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-button</span>
      <span class="token attr-name">:full-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>Full width<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-button</span>
      <span class="token attr-name">full-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@md<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>Full Width @md<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="button-with-link-tag" tabindex="-1"><a class="header-anchor" href="#button-with-link-tag">#</a> Button With Link Tag</h2>
<p>For a CdrButton that looks like a button but behaves like a link, set <code>tag=&quot;a&quot;</code> and pass an <code>href</code>.</p>
<cdr-doc-example-code-pair repository-href="/src/components/button" :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrButton, IconCaretRight'})" >
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-button</span>
    <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>a<span class="token punctuation">"</span></span>
    <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
    Call To Action
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="sizing" tabindex="-1"><a class="header-anchor" href="#sizing">#</a> Sizing</h2>
<p>Change the button size based on where the button is used. The default size is medium.</p>
<cdr-doc-example-code-pair repository-href="/src/components/button" :sandbox-data="$page.frontmatter.sandboxData" >
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Add to cart<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-button</span><span class="token punctuation">></span></span>Add to cart<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Add to cart<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="accessibility" tabindex="-1"><a class="header-anchor" href="#accessibility">#</a> Accessibility</h2>
<p>Many WCAG requirements are contextual to their implementation.
To ensure that usage of this component complies with accessibility guidelines you are responsible for the following:</p>
<ul>
<li>For icon-only buttons, provide <code>aria-label</code> text that describes the button's action</li>
<li>If activating the button does not dismiss the current context, then focus typically remains on the button after activation, e.g., an Apply or Recalculate button.</li>
<li>If a description of the button's function is present, the button element has <code>aria-describedby</code> set to the <code>ID</code> of the element containing the description.</li>
<li>If the button is a toggle button, it has an <code>aria-pressed</code> state. When the button is toggled on, the value of this state is true, and when toggled off, the state is false.</li>
<li>If the button action indicates a context change, such as move to next step in a wizard or add another search criteria, then it is often appropriate to move focus to the starting point for that action.</li>
<li>Apply keyboard interaction patterns as described on <a href="https://confluence.rei.com/display/accessibility/Buttons" target="_blank" rel="noopener noreferrer">REI universal design and accessibility: Buttons<ExternalLinkIcon/></a></li>
<li>Clearly and concisely describe the button's action or destination when the button is clicked or tapped:
<ul>
<li>For example, if the button text is &quot;Shop now&quot;, the <code>aria-label</code> might read: &quot;Shop our &lt;specific advertising category&gt; now&quot;</li>
</ul>
</li>
<li>Avoid using &quot;click here&quot; or &quot;start here&quot; for buttons. If screen space for text is minimal:
<ul>
<li>Provide text that can be read by screen readers</li>
<li>Use an inline element for hidden text with the <code>cdr-sr-only</code> class</li>
</ul>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-cta</span><span class="token punctuation">></span></span>
  Start here <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cdr-sr-only<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>for help finding the proper sleeping bag<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-cta</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li>
<li>For buttons with the <code>tag</code> set to <code>&quot;a&quot;</code>, always providing an <code>href</code> attribute. Empty <code>href</code> attributes are not considered true links
<br /></li>
</ul>
<p>This component has no specific WCAG compliance attributes built into the control. It is possibile to define this component as a link or button:</p>
<ul>
<li>Select the semantically-correct element, which will ensure that assistive technologies have correct instructions for how to interact with the component</li>
<li>Use the <strong>CdrLink</strong> component to make a button that looks like a link</li>
<li>Do not use <code>div</code> or <code>input</code> elements</li>
<li>Do not add <code>role=&quot;button&quot;</code> to the <strong>CdrButton</strong> component</li>
</ul>
<hr>
<h1 id="guidelines" tabindex="-1"><a class="header-anchor" href="#guidelines">#</a> Guidelines</h1>
<h2 id="use-when" tabindex="-1"><a class="header-anchor" href="#use-when">#</a> Use When</h2>
<ul>
<li>Triggering an action</li>
<li>Enabling a “final” action</li>
<li>Progressing or regressing a user through a step in a flow</li>
<li>Submitting requested information</li>
<li>Confirming the completion of a flow or cancelling out of it</li>
<li>Use <code>tag=&quot;a&quot;</code> and <code>href</code> when navigating to another page on the site</li>
</ul>
<h2 id="don-t-use-when" tabindex="-1"><a class="header-anchor" href="#don-t-use-when">#</a> Don't Use When</h2>
<ul>
<li>Taking users to a different part within the same page. Instead, use <RouterLink to="/components/links/">Links</RouterLink></li>
</ul>
<h2 id="the-basics" tabindex="-1"><a class="header-anchor" href="#the-basics">#</a> The Basics</h2>
<p>Three button sizes are available: Small, Medium, and Large. Medium is the default size.
<br />
Generally, buttons should be sized based on their content and used to convey the importance of actions.</p>
<ul>
<li>Use Large buttons for primary page actions</li>
<li>Use Small buttons for supplemental user actions</li>
<li>For Mobile screens using XS grid, use Large buttons set to full width</li>
</ul>
<br />
<p>When stacking buttons vertically:</p>
<ul>
<li>Align left borders</li>
<li>Display all with the same width</li>
<li>Separate each by stack-1-x spacing</li>
</ul>
  <cdr-img class="cdr-doc-article-img" :src="$withBase(`/buttons/spec__button__vertical_spacing_16-4.png`)"/>
<br />
<p>When arranging buttons horizontally:</p>
<ul>
<li>Align top borders</li>
<li>Display all with the same height</li>
<li>Separate each by standard inline-1-x spacing</li>
</ul>
  <cdr-img class="cdr-doc-article-img" :src="$withBase(`/buttons/spec__button__horizontal_spacing_16-9.png`)"/>
<br />
<h3 id="do-don-t" tabindex="-1"><a class="header-anchor" href="#do-don-t">#</a> Do / Don't</h3>
<p>When grouping buttons, match button sizes either horizontally or vertically.</p>
<do-dont :examples="$page.frontmatter.vertical" />
<br />
<do-dont :examples="$page.frontmatter.horizontal" />
<br />
<h2 id="content" tabindex="-1"><a class="header-anchor" href="#content">#</a> Content</h2>
<ul>
<li>Clearly and concisely label with 1–3 words and fewer than 20 characters, including spaces</li>
<li>Start with a verb, if possible. Labels must be action-oriented and set expectations for what the user will see next</li>
<li>Never repeat the context of a label when the context is already clear. For example, for a &quot;Save&quot; button, do not expand to &quot;Save Account Information&quot;</li>
<li>Use sentence case. Do not use all caps, title caps, or all lowercase</li>
</ul>
  <br />
<p>To construct consistent and universal Calls to Action across the site:</p>
<ul>
<li>If leading to a Brand, Category, or Activity Landing page, UI text for Call to Action should be <strong>Explore Brand/Category/Activity Name</strong></li>
<li>If leading to a Product Detail page, UI text for Call to Action should be <strong>Shop product name</strong></li>
<li>If leading to a Collection or search result, UI text for Call to Action should be <strong>Shop all Brand/Category/Activity Name</strong></li>
</ul>
<h3 id="do-don-t-1" tabindex="-1"><a class="header-anchor" href="#do-don-t-1">#</a> Do / Don't</h3>
  <do-dont :examples="$page.frontmatter.label" />
  <do-dont :examples="$page.frontmatter.case" />
  <do-dont :examples="$page.frontmatter.noun" />
<h2 id="behavior" tabindex="-1"><a class="header-anchor" href="#behavior">#</a> Behavior</h2>
<h3 id="choosing-a-button-or-a-link" tabindex="-1"><a class="header-anchor" href="#choosing-a-button-or-a-link">#</a> Choosing a Button or a Link</h3>
<p>When making decisions about whether to use a link or a button, consider the following:</p>
<table>
<thead>
<tr>
<th><strong>Links</strong></th>
<th><strong>Buttons</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Answers the question, &quot;Where can I go&quot;</td>
<td>Answers the question, &quot;What can I do&quot;</td>
</tr>
<tr>
<td>Search engine crawlers can follow anchors for links (<code>&lt;a&gt;</code>)</td>
<td>Search engine crawlers <strong>cannot</strong> follow links that are submitted by input or button</td>
</tr>
<tr>
<td>Default keyboard behavior is triggered using the <strong>Enter</strong> key</td>
<td>Default keyboard behavior is triggered using the <strong>Space</strong> or <strong>Enter</strong> key</td>
</tr>
<tr>
<td><strong>Cannot be disabled</strong> like buttons but can be made inert with tabindex=&quot;-1&quot; and aria-hidden=&quot;true&quot;</td>
<td>Can be disabled with disabled attribute</td>
</tr>
</tbody>
</table>
<br />
<p>Apply the following use cases when deciding when to use links as anchors or buttons:</p>
<table>
<thead>
<tr>
<th><strong>Links</strong></th>
<th><strong>Buttons</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Navigating user to a new page or view</td>
<td>Toggling a display to full screen</td>
</tr>
<tr>
<td>Changing the URL</td>
<td>Opening a modal window</td>
</tr>
<tr>
<td>Causing a browser redraw or refresh</td>
<td>Triggering a popup menu</td>
</tr>
<tr>
<td>Supporting internal page jumps</td>
<td>Can be disabled with disabled attribute</td>
</tr>
</tbody>
</table>
<h2 id="resources" tabindex="-1"><a class="header-anchor" href="#resources">#</a> Resources</h2>
<ul>
<li>WebAIM: <a href="https://webaim.org/techniques/keyboard/" target="_blank" rel="noopener noreferrer">Keyboard Accessibility<ExternalLinkIcon/></a></li>
<li>WebAIM <a href="https://webaim.org/standards/wcag/checklist" target="_blank" rel="noopener noreferrer">WCAG 2.0 Checklist<ExternalLinkIcon/></a></li>
</ul>
<hr>
<h1 id="api" tabindex="-1"><a class="header-anchor" href="#api">#</a> API</h1>
<h2 id="props" tabindex="-1"><a class="header-anchor" href="#props">#</a> Props</h2>
<p>This component will bind any attribute that a <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button" target="_blank" rel="noopener noreferrer">native HTML button element<ExternalLinkIcon/></a> accepts.</p>
<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />
<h2 id="slots" tabindex="-1"><a class="header-anchor" href="#slots">#</a> Slots</h2>
<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />
<h2 id="events" tabindex="-1"><a class="header-anchor" href="#events">#</a> Events</h2>
<cdr-doc-api type="event" :api-data="$page.frontmatter.versions[0].components[0].api.events" />
<h2 id="component-variables" tabindex="-1"><a class="header-anchor" href="#component-variables">#</a> Component Variables</h2>
<cdr-doc-comp-vars name="CdrButton"/>
</cdr-doc-table-of-contents-shell>
</template>
