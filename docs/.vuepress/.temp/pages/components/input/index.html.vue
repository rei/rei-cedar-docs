<template><cdr-doc-table-of-contents-shell>
# Overview
<h2 id="default-medium" tabindex="-1"><a class="header-anchor" href="#default-medium">#</a> Default (Medium)</h2>
<p>Basic input field with label.</p>
<cdr-doc-example-code-pair repository-href="/src/components/input" :sandbox-data="$page.frontmatter.sandboxData" :codeMaxHeight="false" :model="{defaultModel: ''}">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-input</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultModel<span class="token punctuation">"</span></span>
  <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
  <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Input label<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-input</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultModel<span class="token punctuation">"</span></span>
  <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
  <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Input label<span class="token punctuation">"</span></span>
  <span class="token attr-name">disabled</span>
<span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="required" tabindex="-1"><a class="header-anchor" href="#required">#</a> Required</h2>
<p>Basic input field with label and required tag.</p>
<cdr-doc-example-code-pair repository-href="/src/components/input" :sandbox-data="$page.frontmatter.sandboxData" :codeMaxHeight="false" :model="{defaultModel: ''}">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-input</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultModel<span class="token punctuation">"</span></span>
  <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
  <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Input label<span class="token punctuation">"</span></span>
  <span class="token attr-name">required</span>
<span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="optional" tabindex="-1"><a class="header-anchor" href="#optional">#</a> Optional</h2>
<p>Basic input field with label and optional tag.</p>
<cdr-doc-example-code-pair repository-href="/src/components/input" :sandbox-data="$page.frontmatter.sandboxData" :codeMaxHeight="false" :model="{defaultModel: ''}">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-input</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultModel<span class="token punctuation">"</span></span>
  <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
  <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Input label<span class="token punctuation">"</span></span>
  <span class="token attr-name">optional</span>
<span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="sizing" tabindex="-1"><a class="header-anchor" href="#sizing">#</a> Sizing</h2>
<p>Change size for the input field. Default size is medium.</p>
<cdr-doc-example-code-pair repository-href="/src/components/input" :sandbox-data="$page.frontmatter.sandboxData" :codeMaxHeight="false" :model="{defaultModel: ''}">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-input</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultModel<span class="token punctuation">"</span></span>
  <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
  <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Input label<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-input</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultModel<span class="token punctuation">"</span></span>
  <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
  <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Input label<span class="token punctuation">"</span></span>
  <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="bare" tabindex="-1"><a class="header-anchor" href="#bare">#</a> Bare</h2>
<p>Input field with no label.</p>
<cdr-doc-example-code-pair repository-href="/src/components/input" :sandbox-data="$page.frontmatter.sandboxData" :codeMaxHeight="false" :model="{defaultModel: ''}">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-input</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultModel<span class="token punctuation">"</span></span>
  <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
  <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Input label<span class="token punctuation">"</span></span>
  <span class="token attr-name">:hide-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="validation" tabindex="-1"><a class="header-anchor" href="#validation">#</a> Validation</h2>
<p>Input field with validation that runs on <code>blur</code>. Error state is controlled with the <code>error</code> prop. Setting the <code>error</code> prop to a string will render that message with default error styling. The <code>error</code> slot can be used to fully customize the error message.</p>
<p>Error messaging will override helper text rendered in the bottom position.</p>
<cdr-doc-example-code-pair repository-href="/src/components/input" :sandbox-data="$page.frontmatter.sandboxData" :codeMaxHeight="false" :model="{defaultModel: '', modelError: false}" :methods="{validateInput() {this.modelError = this.defaultModel.length > 4 && 'Error: please enter 4 or less characters'}}">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-input</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultModel<span class="token punctuation">"</span></span>
  <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
  <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Input label<span class="token punctuation">"</span></span>
  <span class="token attr-name">:error</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modelError<span class="token punctuation">"</span></span>
  <span class="token attr-name">@blur</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>validateInput<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#helper-text-bottom</span><span class="token punctuation">></span></span>
    Must be 4 or less characters
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-input</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="multi-line-input" tabindex="-1"><a class="header-anchor" href="#multi-line-input">#</a> Multi-Line Input</h2>
<p>Multiple line input field with expander control in lower right. Note that the pre-icon, post-icon, and info-action slots will not work properly in multi-line inputs.</p>
<cdr-doc-example-code-pair repository-href="/src/components/input" :sandbox-data="$page.frontmatter.sandboxData" :codeMaxHeight="false" :model="{defaultModel: ''}">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-input</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultModel<span class="token punctuation">"</span></span>
  <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
  <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Input label<span class="token punctuation">"</span></span>
  <span class="token attr-name">:rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="numeric-input" tabindex="-1"><a class="header-anchor" href="#numeric-input">#</a> Numeric Input</h2>
<p>Input field designed to accept numerical input. Launches the numerical keyboard on mobile devices. Does not use the <code>type=&quot;number&quot;</code> attribute as that is intended for values that are strictly &quot;numbers&quot; such as quantities and not values that contain numerical characters such as credit cards, security codes, month/year values, etc. Can be used in conjunction with <a href="#input-masking">input masking</a> to handle formatting values like credit cards, or an <code>input</code> listener can be used to format or restrict input.</p>
<cdr-doc-example-code-pair repository-href="/src/components/input" :sandbox-data="$page.frontmatter.sandboxData" :codeMaxHeight="false" :model="{defaultModel: ''}" :methods="{restrictInput() {this.defaultModel = this.defaultModel.replace(/\D/g, '')}}">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-input</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultModel<span class="token punctuation">"</span></span>
  <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
  <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Numerical input label<span class="token punctuation">"</span></span>
  <span class="token attr-name">optional</span>
  <span class="token attr-name">:numeric</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
  <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>restrictInput<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="number-quantity-input" tabindex="-1"><a class="header-anchor" href="#number-quantity-input">#</a> Number/Quantity Input</h2>
<p>Use the <code>type=&quot;number&quot;</code> attribute only for input fields that reference a numerical value, for example a quantity of something. For input fields that are composed of numerical characters but are not strictly a number value, for example a credit card number or a month/year value, use a <RouterLink to="/components/input/#numeric-input">numeric input</RouterLink> instead. An input field with <code>type=&quot;number&quot;</code> set will only accept pure number values as input and rejects all other content, which can cause issues with a numeric identifier that has leading zeroes and may behave differently across browsers and devices.</p>
<cdr-doc-example-code-pair repository-href="/src/components/input" :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrInput, CdrButton, IconPlusLg, IconMinusLg'})" :codeMaxHeight="false" :model="{defaultModel: 0, decrementDisabled: true}" :methods="{decrement() {this.defaultModel--; if (this.defaultModel <= 0) {this.defaultModel = 0; this.decrementDisabled = true;}}, increment() {this.defaultModel++; this.decrementDisabled = false;}}">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-button</span> <span class="token attr-name">:icon-only</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">:with-background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>decrement<span class="token punctuation">"</span></span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Decrement counter<span class="token punctuation">"</span></span> <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>decrementDisabled<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>icon-minus-lg</span><span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-input</span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultModel<span class="token punctuation">"</span></span>
    <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
    <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Number input<span class="token punctuation">"</span></span>
    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>number<span class="token punctuation">"</span></span>
    <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span> <span class="token property">width</span><span class="token punctuation">:</span> 160px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span>
  <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-button</span> <span class="token attr-name">:icon-only</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">:with-background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>increment<span class="token punctuation">"</span></span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Increment counter<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>icon-plus-lg</span><span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="input-with-link-text" tabindex="-1"><a class="header-anchor" href="#input-with-link-text">#</a> Input with Link Text</h2>
<p>Input field with link text on right. The link should describe it's relationship to the input field either through it's text content or an aria-label.</p>
<cdr-doc-example-code-pair repository-href="/src/components/input" :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrInput, CdrLink'})" :codeMaxHeight="false" :model="{defaultModel: ''}">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-input</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultModel<span class="token punctuation">"</span></span>
  <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
  <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Input label<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#info</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">modifier</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>standalone<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Information link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-link</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-input</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="input-with-info-action" tabindex="-1"><a class="header-anchor" href="#input-with-info-action">#</a> Input with Info Action</h2>
<p>Input field with icon wrapped in an actionable element outside the input field on right. The actionable element should have an aria-label that explains it's relationship to the input field and what happens when you click on it.</p>
<cdr-doc-example-code-pair repository-href="/src/components/input" :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrInput, IconInformationFill, CdrLink'})" :codeMaxHeight="false" :model="{defaultModel: ''}">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-input</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultModel<span class="token punctuation">"</span></span>
  <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
  <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Input label<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#info-action</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-link</span> <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>icon-information-fill</span>
        <span class="token attr-name">inherit-color</span>
      <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-link</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-input</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="input-with-helper-text" tabindex="-1"><a class="header-anchor" href="#input-with-helper-text">#</a> Input with Helper Text</h2>
<p>Input field with helper or hint text below the input field. If the input is in an error state, the error messaging slot will override this text. Helper text should be used instead of the HTML <code>placeholder</code> attribute to provide additional information or context about the input.  Helper text is automatically linked to the input field through the <code>aria-describedby</code> attribute.</p>
<cdr-doc-example-code-pair repository-href="/src/components/input" :sandbox-data="$page.frontmatter.sandboxData" :codeMaxHeight="false" :model="{defaultModel: ''}">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-input</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultModel<span class="token punctuation">"</span></span>
  <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
  <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Input label<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#helper-text-bottom</span><span class="token punctuation">></span></span>
    Helper or additional text
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-input</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="input-with-helper-text-above" tabindex="-1"><a class="header-anchor" href="#input-with-helper-text-above">#</a> Input with Helper Text Above</h2>
<p>Input field with helper or hint text rendered above the input field. Helper text should be used instead of the HTML <code>placeholder</code> attribute to provide additional information or context about the input. Helper text is automatically linked to the input field through the <code>aria-describedby</code> attribute.</p>
<cdr-doc-example-code-pair repository-href="/src/components/input" :sandbox-data="$page.frontmatter.sandboxData" :codeMaxHeight="false" :model="{defaultModel: ''}">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-input</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultModel<span class="token punctuation">"</span></span>
  <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
  <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Input label<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#helper-text-top</span><span class="token punctuation">></span></span>
    Helper or additional text
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-input</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="input-with-icon-inserted-left" tabindex="-1"><a class="header-anchor" href="#input-with-icon-inserted-left">#</a> Input with Icon Inserted Left</h2>
<p>Input field with icon inserted into the input field on left. Icon is decorative and not intended for any action.</p>
<cdr-doc-example-code-pair repository-href="/src/components/input" :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrInput, IconLocationPinStroke'})" :codeMaxHeight="false"  :model="{defaultModel: ''}">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-input</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultModel<span class="token punctuation">"</span></span>
  <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
  <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Input label<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#pre-icon</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>icon-location-pin-stroke</span> <span class="token attr-name">inherit-color</span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-input</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="input-with-icon-inserted-right" tabindex="-1"><a class="header-anchor" href="#input-with-icon-inserted-right">#</a> Input with Icon Inserted Right</h2>
<p>Input field with icon inserted into the input field on right. Icon is decorative and not intended for any action.</p>
<cdr-doc-example-code-pair repository-href="/src/components/input" :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrInput, IconCreditCard'})" :codeMaxHeight="false"  :model="{defaultModel: ''}">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-input</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultModel<span class="token punctuation">"</span></span>
  <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
  <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Input label<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#post-icon</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>icon-credit-card</span>
      <span class="token attr-name">inherit-color</span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cdr-button__icon<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-input</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="input-with-actions" tabindex="-1"><a class="header-anchor" href="#input-with-actions">#</a> Input with Actions</h2>
<p>Input field with icon buttons inserted to the right. Up to 2 buttons can be passed into the <code>post-icon</code> slot. Each button should have the <code>cdr-input__button</code> utility class applied to it. Each button should indicate it's function and relationship to the input field through either an <code>aria-label</code> or a tooltip.</p>
<cdr-doc-example-code-pair repository-href="/src/components/input" :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrInput, IconCreditCard, IconXLg, CdrTooltip, CdrButton'})" :codeMaxHeight="false"  :model="{defaultModel: ''}">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-input</span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultModel<span class="token punctuation">"</span></span>
    <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
    <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Input label<span class="token punctuation">"</span></span>

  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#post-icon</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-tooltip</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cdr-input__button<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input-tooltip<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#trigger</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-button</span>
            <span class="token attr-name">:icon-only</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
          <span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>icon-x-lg</span>
              <span class="token attr-name">inherit-color</span>
            <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

        click me to clear this input!
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-tooltip</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-button</span>
        <span class="token attr-name">:icon-only</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cdr-input__button<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>icon-credit-card</span>
          <span class="token attr-name">inherit-color</span>
        <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-input</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-input</span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultModel<span class="token punctuation">"</span></span>
    <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
    <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Large Input label<span class="token punctuation">"</span></span>

    <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#post-icon</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-button</span>
        <span class="token attr-name">:icon-only</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
        <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span>
        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cdr-input__button<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>icon-credit-card</span>
          <span class="token attr-name">inherit-color</span>
        <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-input</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="accessibility" tabindex="-1"><a class="header-anchor" href="#accessibility">#</a> Accessibility</h2>
<p>This component has compliance with WCAG guidelines by:</p>
<ul>
<li>Requiring a value for the <code>label</code> field</li>
<li>When hiding a label, the <code>aria-label</code> attribute is set to the <code>label</code> value</li>
</ul>
<p>The HTML <code>placeholder</code> attribute should not be used as it creates an inaccessible experience when the placeholder content disappears as soon as the user begins typing into the input field. Instead the <code>helper-text-top</code>, <code>helper-text-bottom</code>, or <code>info</code> slots should be used to provide any additional information needed to complete the input.</p>
<p>Any additional actionable elements related to the input field, which may be external to the input component or passed in via the <code>info</code>, <code>info-action</code>, or <code>post-icon</code> slots, should indicate their function and relationship to the input field through their text content, and <code>aria-label</code>, or a tooltip.</p>
<hr>
<h1 id="guidelines" tabindex="-1"><a class="header-anchor" href="#guidelines">#</a> Guidelines</h1>
<h2 id="use-when" tabindex="-1"><a class="header-anchor" href="#use-when">#</a> Use When</h2>
<ul>
<li>Entering data with a wide variety of responses</li>
<li>Searching for content</li>
</ul>
<h2 id="don-t-use-when" tabindex="-1"><a class="header-anchor" href="#don-t-use-when">#</a> Don't Use When</h2>
<ul>
<li>Selecting from a specific set of options. Instead, use <RouterLink to="/components/selects/">Selects</RouterLink></li>
</ul>
<h2 id="the-basics" tabindex="-1"><a class="header-anchor" href="#the-basics">#</a> The Basics</h2>
<ul>
<li><strong>Identifiable</strong> - Input fields should indicate that users can enter information</li>
<li><strong>Findable</strong> - It should be easy to find an input field among other elements</li>
<li><strong>Legible</strong> - Input fields indicate their state such as enabled, focused, or disabled</li>
</ul>
<h3 id="options" tabindex="-1"><a class="header-anchor" href="#options">#</a> Options</h3>
<ul>
<li>Define width using CSS styles</li>
<li>Height options are medium or large.</li>
<li>Ability to specify field type for text, email, number, password, search, and URL</li>
</ul>
<h3 id="multi-line-input-fields" tabindex="-1"><a class="header-anchor" href="#multi-line-input-fields">#</a> Multi-Line Input Fields</h3>
<ul>
<li>Use when long free-form text is the desired user input such as a comment on a review or feedback form</li>
<li>Overflow text wraps to a new line</li>
<li>Scroll bar appears on right border when cursor reaches the bottom of the field</li>
<li>Is defined by setting the number of rows for a recommended response length</li>
<li>Resizing handle allows user to change the height of the input area</li>
<li>Min and max limits are set by the product team for:
<ul>
<li>Max-height of text area</li>
<li>Maximum and minimum number of characters</li>
</ul>
</li>
</ul>
<h2 id="content" tabindex="-1"><a class="header-anchor" href="#content">#</a> Content</h2>
<h3 id="labels" tabindex="-1"><a class="header-anchor" href="#labels">#</a> Labels</h3>
<ul>
<li>Use concise and consistent labels that describes the meaning of the input field</li>
<li>Limit labels to 1–3 words and fewer than 20 characters, including spaces</li>
<li>Use sentence case. Do not use all caps, title caps, or all lowercase</li>
<li>Don’t use colons after labels</li>
</ul>
<h3 id="helper-text" tabindex="-1"><a class="header-anchor" href="#helper-text">#</a> Helper Text</h3>
<ul>
<li>Use helper text for hints or suggestions</li>
<li>If help text is long or complex, use an icon or link above the input box</li>
<li>Too much helper help text can make a form look and feel difficult to use</li>
</ul>
<h3 id="icon" tabindex="-1"><a class="header-anchor" href="#icon">#</a> Icon</h3>
<ul>
<li>Use icons to trigger a popover for hints or suggestions</li>
<li>Reference Cedar's <RouterLink to="/components/icon/#guidelines/">icon guidelines</RouterLink> for additional information</li>
</ul>
<h3 id="link-text" tabindex="-1"><a class="header-anchor" href="#link-text">#</a> Link Text</h3>
<ul>
<li>Use a link when moving or navigating to another page or to a different portion of the same page</li>
<li>Use if navigating user to long or complex information</li>
<li>Reference the <RouterLink to="/components/links/">Links</RouterLink> component article for more information</li>
</ul>
<h3 id="do-don-t" tabindex="-1"><a class="header-anchor" href="#do-don-t">#</a> Do / Don't</h3>
<do-dont :examples="$page.frontmatter.length" />
<do-dont :examples="$page.frontmatter.label" />
<do-dont :examples="$page.frontmatter.case" />
<do-dont :examples="$page.frontmatter.punctuation" />
<!-- TODO: replace with DO use info/helper slots to describe desired input DON'T use placeholder attribute
<do-dont :examples="$page.frontmatter.placeholder" /> -->
<do-dont :examples="$page.frontmatter.sizes" />
<h2 id="behavior" tabindex="-1"><a class="header-anchor" href="#behavior">#</a> Behavior</h2>
<h3 id="default-input-attrs" tabindex="-1"><a class="header-anchor" href="#default-input-attrs">#</a> Default Input Attrs</h3>
<p>CdrInput sets some default attributes to make it easier to construct consistent and accessible forms. These default attributes can be overridden by passing the same attribute to the CdrInput component.</p>
<p>For all CdrInput elements:</p>
<ul>
<li><code>spellcheck</code> is set to <code>false</code></li>
<li><code>autocorrect</code> is set to <code>'off'</code></li>
<li><code>autocapitalize</code> is set to <code>'off'</code></li>
</ul>
<p>For CdrInput elements with <code>type=&quot;number&quot;</code> set, the following attributes are enabled to help ensure that numeric inputs behave consistently across browsers and devices:</p>
<ul>
<li><code>pattern</code> is set to <code>[0-9]*</code>, which restricts</li>
<li><code>novalidate</code> is set to <code>true</code></li>
<li><code>inputmode</code> is set to <code>numeric</code></li>
</ul>
<p>Note that the <code>maxlength</code> attribute does not work in conjunction with numeric inputs as they are treated as numbers not strings. Instead, the length can be restricted using either an event listener or the min/max attributes:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;!-- restrict numeric input to 3 characters max with a listener -->
&lt;cdr-input type="number" v-model="default" @input="() => {this.default = this.default.substring(0, 3)}"/>

&lt;!-- restrict numeric input to 3 digit numbers -->
&lt;cdr-input type="number" v-model="default" min="0" max="999"/>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="input-masking" tabindex="-1"><a class="header-anchor" href="#input-masking">#</a> Input Masking</h3>
<p>User input should be automatically formatted to make forms easier to comprehend and use, for example by adding parentheses and a dash to a phone number or inserting a space between every four digits of a credit card number.</p>
<p>Input masking has not been integrated directly into Cedar, however the CdrInput component implements the same API as a plain HTML text input element and can be used in conjunction with most input masking libraries.</p>
<p>We recommend using <a href="https://github.com/probil/v-mask" target="_blank" rel="noopener noreferrer">v-mask<ExternalLinkIcon/></a> as a local directive in any components where you need input masking, as it provides a number of benefits:</p>
<ul>
<li>one of the smallest vue plugins for input masking</li>
<li>can be loaded as a local directive directly in your component rather than as a global plugin that must be registered at the application level</li>
<li>the API of <code>v-mask</code> is extremely simple and easy to understand</li>
<li>if and when input masking support is built into CdrInput the <code>v-mask</code> API is what we will implement, making it easier for you to migrate in the future</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;script>
import { CdrInput } from "@rei/cedar";
import { VueMaskDirective } from "v-mask";

export default {
  name: "VueDirectiveExample",
  components: {
    CdrInput,
  },
  directives: {
    mask: VueMaskDirective,
  },
  data() {
    return {
      defaultModel: '',
    }
  }
};
&lt;/script>
&lt;template>
&lt;cdr-input
  v-model="defaultModel"
  type="tel"
  v-mask="'(###) ###-####'"
>
&lt;/template>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h3 id="inputs-with-icons" tabindex="-1"><a class="header-anchor" href="#inputs-with-icons">#</a> Inputs with Icons</h3>
<ul>
<li>Icons inserted into input fields are decorative, not inteded for any action</li>
</ul>
<h3 id="required-fields" tabindex="-1"><a class="header-anchor" href="#required-fields">#</a> Required Fields</h3>
<ul>
<li>The default status of an input field is “optional”. Setting the <code>optional</code> prop on the input will render a text label indicating it is optional</li>
<li>If the status is set to “required”, an asterisk will appear next to the input label with an aria-label indicating that the input is required and the input field will be marked <code>aria-required</code></li>
</ul>
<h1 id="api" tabindex="-1"><a class="header-anchor" href="#api">#</a> API</h1>
<h2 id="props" tabindex="-1"><a class="header-anchor" href="#props">#</a> Props</h2>
<p>This component will bind any attribute that a <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" target="_blank" rel="noopener noreferrer">native HTML input element<ExternalLinkIcon/></a> accepts.</p>
<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props"/>
<h2 id="slots" tabindex="-1"><a class="header-anchor" href="#slots">#</a> Slots</h2>
<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" :slots-getting-started-link="false" />
<h2 id="events" tabindex="-1"><a class="header-anchor" href="#events">#</a> Events</h2>
<cdr-doc-api type="event" :api-data="$page.frontmatter.versions[0].components[0].api.events" />
<h2 id="component-variables" tabindex="-1"><a class="header-anchor" href="#component-variables">#</a> Component Variables</h2>
<cdr-doc-comp-vars name="CdrInput">Note that the <a href="../component-variables/#CdrLabelStandalone">cdr-label-standalone mixins</a> should be used for assembling the label element. </cdr-doc-comp-vars>
</cdr-doc-table-of-contents-shell>
</template>
