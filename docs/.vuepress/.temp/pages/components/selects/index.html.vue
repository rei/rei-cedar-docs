<template><cdr-doc-table-of-contents-shell tab-name="Overview">
# Overview
<h2 id="default-medium" tabindex="-1"><a class="header-anchor" href="#default-medium">#</a> Default (Medium)</h2>
<p>Basic select control with label.</p>
<cdr-doc-example-code-pair repository-href="/src/components/select" :sandbox-data="$page.frontmatter.sandboxData" :codeMaxHeight="false" :model="{defaultModel: '', defaultOptions: ['Option A', 'Option B', 'Option C', 'Option D']}">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-select</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultModel<span class="token punctuation">"</span></span>
  <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
  <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select label<span class="token punctuation">"</span></span>
  <span class="token attr-name">prompt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Prompt text<span class="token punctuation">"</span></span>
  <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultOptions<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-select</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultModel<span class="token punctuation">"</span></span>
  <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
  <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select label<span class="token punctuation">"</span></span>
  <span class="token attr-name">prompt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Prompt text<span class="token punctuation">"</span></span>
  <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultOptions<span class="token punctuation">"</span></span>
  <span class="token attr-name">disabled</span>
<span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="bare" tabindex="-1"><a class="header-anchor" href="#bare">#</a> Bare</h2>
<p>Basic select control with no label.</p>
<cdr-doc-example-code-pair repository-href="/src/components/select" :sandbox-data="$page.frontmatter.sandboxData" :codeMaxHeight="false" :model="{defaultModel: '', defaultOptions: ['Option A', 'Option B', 'Option C', 'Option D']}">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-select</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultModel<span class="token punctuation">"</span></span>
  <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
  <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select label<span class="token punctuation">"</span></span>
  <span class="token attr-name">prompt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Prompt text<span class="token punctuation">"</span></span>
  <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultOptions<span class="token punctuation">"</span></span>
  <span class="token attr-name">:hide-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-select</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultModel<span class="token punctuation">"</span></span>
  <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
  <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select label<span class="token punctuation">"</span></span>
  <span class="token attr-name">prompt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Prompt text<span class="token punctuation">"</span></span>
  <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultOptions<span class="token punctuation">"</span></span>
  <span class="token attr-name">disabled</span>
  <span class="token attr-name">:hide-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="select-with-link-text" tabindex="-1"><a class="header-anchor" href="#select-with-link-text">#</a> Select with Link Text</h2>
<p>Select control with link text on right.</p>
<cdr-doc-example-code-pair repository-href="/src/components/select" :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrSelect, CdrLink'})" :codeMaxHeight="false" :model="{defaultModel: '', defaultOptions: ['Option A', 'Option B', 'Option C', 'Option D']}">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-select</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultModel<span class="token punctuation">"</span></span>
  <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
  <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select label<span class="token punctuation">"</span></span>
  <span class="token attr-name">prompt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Prompt text<span class="token punctuation">"</span></span>
  <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultOptions<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#info</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-link</span>
      <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#/<span class="token punctuation">"</span></span>
      <span class="token attr-name">modifier</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>standalone<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      Info Link/Icon
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-link</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-select</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-select</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultModel<span class="token punctuation">"</span></span>
  <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
  <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select label<span class="token punctuation">"</span></span>
  <span class="token attr-name">prompt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Prompt text<span class="token punctuation">"</span></span>
  <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultOptions<span class="token punctuation">"</span></span>
  <span class="token attr-name">disabled</span>
<span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#info</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-link</span>
      <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#/<span class="token punctuation">"</span></span>
      <span class="token attr-name">modifier</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>standalone<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      Info Link/Icon
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-link</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="select-with-info-action" tabindex="-1"><a class="header-anchor" href="#select-with-info-action">#</a> Select with Info Action</h2>
<p>Select control with icon outside select field on right.</p>
<cdr-doc-example-code-pair repository-href="/src/components/select" :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrSelect, IconInformationFill, CdrButton'})" :codeMaxHeight="false" :model="{defaultModel: '', defaultOptions: ['Option A', 'Option B', 'Option C', 'Option D']}">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-select</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultModel<span class="token punctuation">"</span></span>
  <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
  <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select label<span class="token punctuation">"</span></span>
  <span class="token attr-name">prompt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Prompt text<span class="token punctuation">"</span></span>
  <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultOptions<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#info-action</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-link</span> <span class="token attr-name">tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>icon-information-fill</span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-link</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="select-with-helper-text" tabindex="-1"><a class="header-anchor" href="#select-with-helper-text">#</a> Select with Helper Text</h2>
<p>Input field with helper or hint text below the input field.</p>
<cdr-doc-example-code-pair repository-href="/src/components/select" :sandbox-data="$page.frontmatter.sandboxData" :codeMaxHeight="false" :model="{defaultModel: '', defaultOptions: ['Option A', 'Option B', 'Option C', 'Option D']}">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-select</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultModel<span class="token punctuation">"</span></span>
  <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
  <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select label<span class="token punctuation">"</span></span>
  <span class="token attr-name">prompt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Prompt text<span class="token punctuation">"</span></span>
  <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultOptions<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#helper-text</span><span class="token punctuation">></span></span>
    This is helper text.
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-select</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-select</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultModel<span class="token punctuation">"</span></span>
  <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
  <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select label<span class="token punctuation">"</span></span>
  <span class="token attr-name">prompt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Prompt text<span class="token punctuation">"</span></span>
  <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultOptions<span class="token punctuation">"</span></span>
  <span class="token attr-name">disabled</span>
<span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#helper-text</span><span class="token punctuation">></span></span>
    This is helper text.
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="validation" tabindex="-1"><a class="header-anchor" href="#validation">#</a> Validation</h2>
<p>Error prop and slot can be used to render the select in an error state</p>
<cdr-doc-example-code-pair repository-href="/src/components/select" :sandbox-data="$page.frontmatter.sandboxData" :codeMaxHeight="false" :model="{defaultModel: '', modelError: 'Please make a selection', defaultOptions: ['Option A', 'Option B', 'Option C', 'Option D']}" :methods="{validate() {this.modelError = !this.defaultModel.length && 'Please make a selection'}}">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-select</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultModel<span class="token punctuation">"</span></span>
  <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
  <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select label<span class="token punctuation">"</span></span>
  <span class="token attr-name">prompt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Prompt text<span class="token punctuation">"</span></span>
  <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultOptions<span class="token punctuation">"</span></span>
  <span class="token attr-name">:error</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modelError<span class="token punctuation">"</span></span>
  <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>validate<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="multiple-select" tabindex="-1"><a class="header-anchor" href="#multiple-select">#</a> Multiple Select</h2>
<p>CdrSelect can be rendered as a multi-select by passing the native HTML select <code>multiple</code> attribute. The <code>multipleSize</code> prop can be used to control the height of the multi-select.</p>
<cdr-doc-example-code-pair repository-href="/src/components/select" :sandbox-data="$page.frontmatter.sandboxData" :codeMaxHeight="false" :model="{defaultModel: [], defaultOptions: ['Option A', 'Option B', 'Option C', 'Option D', 'Option E', 'Option F']}">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>default multi-select:
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-select</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultModel<span class="token punctuation">"</span></span>
  <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
  <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select label<span class="token punctuation">"</span></span>
  <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultOptions<span class="token punctuation">"</span></span>
  <span class="token attr-name">multiple</span>
<span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
With multipleSize:
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-select</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultModel<span class="token punctuation">"</span></span>
  <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
  <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select label<span class="token punctuation">"</span></span>
  <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultOptions<span class="token punctuation">"</span></span>
  <span class="token attr-name">multiple</span>
  <span class="token attr-name">multipleSize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>6<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="nested-options" tabindex="-1"><a class="header-anchor" href="#nested-options">#</a> Nested Options</h2>
<p>CdrSelect can be rendered with nested options using the <code>optgroup</code> tag.</p>
<cdr-doc-example-code-pair repository-href="/src/components/select" :sandbox-data="$page.frontmatter.sandboxData" :codeMaxHeight="false" :model="{defaultModel: []}">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-select</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultModel<span class="token punctuation">"</span></span>
  <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
  <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select label<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>optgroup</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bread<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rye<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>rye<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sourdough<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>sourdough<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>wheat<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>wheat<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>optgroup</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>optgroup</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>toppings<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>provolone<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>provolone<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>peppers<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>peppers<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>gabagool<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>gabagool<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>optgroup</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="accessibility" tabindex="-1"><a class="header-anchor" href="#accessibility">#</a> Accessibility</h2>
<p>To ensure that the usage of Select component complies with the accessibility guidelines:</p>
<ul>
<li>Always provide a label for each select control</li>
<li>The <code>hide-label</code> property can be used to visually hide the label text while still leaving it available to screen readers</li>
</ul>
<p>When using the <code>aria-describedby</code>:</p>
<ul>
<li><code>aria-describedby</code> attribute does not override the select label</li>
<li>Use this attribute in addition to a label</li>
<li>Can be used to reference descriptions that appear as 'tooltips'</li>
<li>Content passed into the <code>helper-text</code> slot is automatically linked to the <code>aria-describedby</code> attribute</li>
</ul>
<p>This component has compliance with WCAG guidelines by:</p>
<ul>
<li>Requiring a value for the <code>label</code> field</li>
<li>When hiding a label, the <code>aria-label</code> attribute is set to the <code>label</code> value</li>
<li>Links <code>helper-text</code> content to the input field using the <code>aria-describedby</code> attribute</li>
</ul>
<hr>
<h1 id="guidelines" tabindex="-1"><a class="header-anchor" href="#guidelines">#</a> Guidelines</h1>
<h2 id="use-when" tabindex="-1"><a class="header-anchor" href="#use-when">#</a> Use When</h2>
<ul>
<li>Choosing an option from a predefined set of values</li>
<li>Recommending a default option for most users</li>
</ul>
<h2 id="don-t-use-when" tabindex="-1"><a class="header-anchor" href="#don-t-use-when">#</a> Don't Use When</h2>
<ul>
<li>Viewing or comparing all options is needed. Instead, use <RouterLink to="/components/radio/">Radio Buttons</RouterLink></li>
<li>Displaying a limited number of options. Instead, use <RouterLink to="/components/radio/">Radio Buttons</RouterLink></li>
<li>Displaying a &quot;yes&quot; or &quot;no&quot; selection. Instead, use <RouterLink to="/components/radio/">Radio Buttons</RouterLink></li>
<li>Turning an option on or off. Instead, use <RouterLink to="/components/checkboxes/">Checkboxes</RouterLink></li>
<li>Setting a value is required. Instead, use <RouterLink to="/components/radio/">Radio Buttons</RouterLink></li>
<li>Displaying more than 10 options. Instead, use <RouterLink to="/components/input/">Inputs</RouterLink></li>
<li>Sending the user to other areas of the site. Instead, use <RouterLink to="/components/links/">Links</RouterLink></li>
</ul>
<h2 id="the-basics" tabindex="-1"><a class="header-anchor" href="#the-basics">#</a> The Basics</h2>
<p>Select and dropdown components tend to look similar, but have different functionality. While select is used for selecting from a list of options and submitting that data, dropdowns contain links and take users elsewhere. Also, the select appearance is owned by the browser, whereas dropdowns can be styled.</p>
<p>Select components should be:</p>
<ul>
<li><strong>Identifiable:</strong> Select fields should indicate that users can change its value</li>
<li><strong>Findable:</strong> It should be easy to find a select field among other elements</li>
<li><strong>Legible:</strong> Select fields indicate their state such as enabled, focused, or disabled</li>
</ul>
<h3 id="options" tabindex="-1"><a class="header-anchor" href="#options">#</a> Options</h3>
<ul>
<li>Define width using CSS styles</li>
<li>Height options are medium and large. These variations can be used for creating media queries for responsive layouts, or to call more or less attention to the component.</li>
</ul>
<h2 id="content" tabindex="-1"><a class="header-anchor" href="#content">#</a> Content</h2>
<h3 id="labels" tabindex="-1"><a class="header-anchor" href="#labels">#</a> Labels</h3>
<ul>
<li>Use concise and consistent labels that describe the meaning of the select field</li>
<li>Limit labels to 1–3 words and fewer than 20 characters, including spaces</li>
<li>Use sentence case only. Do not use all caps, title case, or lowercase</li>
<li>Don’t use colons after labels</li>
</ul>
<h3 id="prompt-text" tabindex="-1"><a class="header-anchor" href="#prompt-text">#</a> Prompt Text</h3>
<ul>
<li>Limit prompt text to 1–3 words</li>
<li>Use descriptive prompt text for accessibility users who use screen readers to fill out forms</li>
</ul>
<h3 id="menu-or-list-text" tabindex="-1"><a class="header-anchor" href="#menu-or-list-text">#</a> Menu or List Text</h3>
<ul>
<li>Use sentence case</li>
<li>Simplify the list. If an option is rarely selected, consider removing it from the list</li>
<li>Use common sort order for menu items. Options include:
<ul>
<li>Frequency of use (recommended): For example, commonly-used credit cards would be listed first</li>
<li>Alpha: For example, state or city locations</li>
<li>Numeric: For example, distances or sizes</li>
</ul>
</li>
</ul>
<h3 id="helper-text" tabindex="-1"><a class="header-anchor" href="#helper-text">#</a> Helper Text</h3>
<ul>
<li>Use helper text for hints or suggestions</li>
<li>Be succinct. Too much helper text can make a form look and feel difficult to use</li>
</ul>
<h3 id="icon" tabindex="-1"><a class="header-anchor" href="#icon">#</a> Icon</h3>
<ul>
<li>Use icons to trigger a <a href="../popover">popover</a> or <a href="../tooltip">tooltip</a> for hints or suggestions</li>
<li>Reference Cedar's <RouterLink to="/components/icon/#guidelines">icon guidelines</RouterLink> for additional information</li>
</ul>
<h3 id="link-text" tabindex="-1"><a class="header-anchor" href="#link-text">#</a> Link Text</h3>
<ul>
<li>Use a link in the <code>info</code> slot when moving or navigating to another page or to a different portion of the same page</li>
<li>Use if navigating user to long or complex information</li>
<li>Reference the <RouterLink to="/components/links/">Links</RouterLink> component article for more information</li>
</ul>
<h3 id="do-don-t" tabindex="-1"><a class="header-anchor" href="#do-don-t">#</a> Do / Don’t</h3>
<br/>
<do-dont :examples="$page.frontmatter.labels" />
<do-dont :examples="$page.frontmatter.case" />
<do-dont :examples="$page.frontmatter.punctuation" />
<h2 id="behavior" tabindex="-1"><a class="header-anchor" href="#behavior">#</a> Behavior</h2>
<ul>
<li>Avoid changing options in a dropdown menu based on the input from a different select field</li>
<li>Use a prompt in the format of “Select a…” or “Select category…”</li>
</ul>
<h3 id="required-fields" tabindex="-1"><a class="header-anchor" href="#required-fields">#</a> Required Fields</h3>
<ul>
<li>An asterisk will appear next to the input label if the status is required and the input field will have <code>aria-required</code> set</li>
</ul>
<h3 id="validation-1" tabindex="-1"><a class="header-anchor" href="#validation-1">#</a> Validation</h3>
<ul>
<li>Validate the user’s data before form submission. The <code>error</code> property and slot can be used to render a message on error.</li>
</ul>
<h1 id="api" tabindex="-1"><a class="header-anchor" href="#api">#</a> API</h1>
<h2 id="props" tabindex="-1"><a class="header-anchor" href="#props">#</a> Props</h2>
<p>This component will bind any attribute that a <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select" target="_blank" rel="noopener noreferrer">native HTML select element<ExternalLinkIcon/></a> accepts.</p>
<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props"/>
<h2 id="slots" tabindex="-1"><a class="header-anchor" href="#slots">#</a> Slots</h2>
<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" :slots-getting-started-link="false" />
<h2 id="events" tabindex="-1"><a class="header-anchor" href="#events">#</a> Events</h2>
<cdr-doc-api type="event" :api-data="$page.frontmatter.versions[0].components[0].api.events" />
<h2 id="component-variables" tabindex="-1"><a class="header-anchor" href="#component-variables">#</a> Component Variables</h2>
<cdr-doc-comp-vars name="CdrSelect">Note that the <a href="../component-variables/#CdrLabelStandalone">cdr-label-standalone mixins</a> should be used for assembling the label element. </cdr-doc-comp-vars>
</cdr-doc-table-of-contents-shell>
</template>
