<template><cdr-doc-table-of-contents-shell parentSelector="h2" childSelector="h3">
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview">#</a> Overview</h2>
<h3 id="default-medium" tabindex="-1"><a class="header-anchor" href="#default-medium">#</a> Default (Medium)</h3>
<p>Default and standard spacing for checkboxes.</p>
<cdr-doc-example-code-pair repository-href="/src/components/checkbox" :sandbox-data="$page.frontmatter.sandboxData" :model="{ex1: true, ex2: false, ex3: false}" >
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-form-group</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Default label<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-checkbox</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ex1<span class="token punctuation">"</span></span> <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Default checkbox 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-checkbox</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-checkbox</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ex2<span class="token punctuation">"</span></span> <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Default checkbox 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-checkbox</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-checkbox</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ex3<span class="token punctuation">"</span></span> <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>Default checkbox 3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-checkbox</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-form-group</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></cdr-doc-example-code-pair>
<h3 id="size" tabindex="-1"><a class="header-anchor" href="#size">#</a> Size</h3>
<p>Different sizing for checkboxes.</p>
<cdr-doc-example-code-pair repository-href="/src/components/checkbox" :sandbox-data="$page.frontmatter.sandboxData" :model="{ex1: true, ex2: false, ex3: false}">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-form-group</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Size label<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-checkbox</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ex1<span class="token punctuation">"</span></span> <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Small checkbox<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-checkbox</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-checkbox</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ex2<span class="token punctuation">"</span></span> <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>medium<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Medium checkbox<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-checkbox</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-checkbox</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ex3<span class="token punctuation">"</span></span> <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Large checkbox<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-checkbox</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-form-group</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></cdr-doc-example-code-pair>
<h3 id="custom-true-false-value" tabindex="-1"><a class="header-anchor" href="#custom-true-false-value">#</a> Custom True/False Value</h3>
<p>Use a custom value in place of true/false checked state.</p>
<cdr-doc-example-code-pair repository-href="/src/components/checkbox" :sandbox-data="$page.frontmatter.sandboxData" :model="{ex1: 'no', ex2: 'yes', ex3: 'no'}">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-form-group</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Custom true/false label<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-checkbox</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ex1<span class="token punctuation">"</span></span> <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span> <span class="token attr-name">true-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>yes<span class="token punctuation">"</span></span> <span class="token attr-name">false-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>no<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Option 1?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-checkbox</span><span class="token punctuation">></span></span> {{this.ex1}}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-checkbox</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ex2<span class="token punctuation">"</span></span> <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span> <span class="token attr-name">true-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>yes<span class="token punctuation">"</span></span> <span class="token attr-name">false-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>no<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Option 2?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-checkbox</span><span class="token punctuation">></span></span> {{this.ex2}}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-checkbox</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ex3<span class="token punctuation">"</span></span> <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span> <span class="token attr-name">true-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>yes<span class="token punctuation">"</span></span> <span class="token attr-name">false-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>no<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Option 3?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-checkbox</span><span class="token punctuation">></span></span> {{this.ex3}}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-form-group</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></cdr-doc-example-code-pair>
<h3 id="custom-model-value" tabindex="-1"><a class="header-anchor" href="#custom-model-value">#</a> Custom Model Value</h3>
<p>Use an array as the model to track a list of custom values.</p>
<cdr-doc-example-code-pair repository-href="/src/components/checkbox" :sandbox-data="$page.frontmatter.sandboxData" :model="{ex: ['2']}">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-form-group</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Custom value label<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-checkbox</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ex<span class="token punctuation">"</span></span> <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span> <span class="token attr-name">custom-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-checkbox</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-checkbox</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ex<span class="token punctuation">"</span></span> <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span> <span class="token attr-name">custom-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-checkbox</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-checkbox</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ex<span class="token punctuation">"</span></span> <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span> <span class="token attr-name">custom-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-checkbox</span><span class="token punctuation">></span></span>
  {{this.ex}}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-form-group</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></cdr-doc-example-code-pair>
<h3 id="handling-change-events" tabindex="-1"><a class="header-anchor" href="#handling-change-events">#</a> Handling Change Events</h3>
<p>Pass checkbox data into change handlers.</p>
<cdr-doc-example-code-pair repository-href="/src/components/checkbox" :sandbox-data="$page.frontmatter.sandboxData" :model="{ex: ['2'], lastEdited: ''}">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-form-group</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Handling change label<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  Last edited: {{ this.lastEdited }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-checkbox</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ex<span class="token punctuation">"</span></span> <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span> <span class="token attr-name">custom-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>() => lastEdited = <span class="token punctuation">'</span>1<span class="token punctuation">'</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-checkbox</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-checkbox</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ex<span class="token punctuation">"</span></span> <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span> <span class="token attr-name">custom-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>() => lastEdited = <span class="token punctuation">'</span>2<span class="token punctuation">'</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-checkbox</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-checkbox</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ex<span class="token punctuation">"</span></span> <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span> <span class="token attr-name">custom-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>() => lastEdited = <span class="token punctuation">'</span>3<span class="token punctuation">'</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-checkbox</span><span class="token punctuation">></span></span>
  {{ this.ex }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-form-group</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></cdr-doc-example-code-pair>
<h3 id="indeterminate" tabindex="-1"><a class="header-anchor" href="#indeterminate">#</a> Indeterminate</h3>
<p>Displays status for checkbox group by indicating that some of the sub-selections in a list are selected. Provides user with ability to select or unselect all items in the list’s sub-group.
Note the usage of <code>aria-controls</code>, <code>id</code>, <code>role</code>, <code>aria-label</code>, and <code>aria-labelledby</code>.</p>
<cdr-doc-example-code-pair repository-href="/src/components/checkbox" :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrCheckbox, CdrList, CdrFormGroup', styleTag: '.inset { margin-left: $cdr-space-one-x;}'})" :model="{selected: ['Cheese'], toppings: ['Cheese', 'Pepperoni', 'Mushroom', 'Peppers'], isIndeterminate: true, allSelected: false }" :methods="{selectAll(isChecked) {if (isChecked) {this.selected = this.toppings.slice();this.allSelected = true; this.isIndeterminate = false;} else { this.selected = []; this.allSelected = false; this.isIndeterminate = false; } }, selectOne() {if (this.selected.length === 0) {this.isIndeterminate = false; this.allSelected = false;} else if (this.selected.length === this.toppings.length) {this.allSelected = true; this.isIndeterminate = false;} else { this.isIndeterminate = true; this.allSelected = false;}}}">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-form-group</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Choose your toppings<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-checkbox</span>
     <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>allSelected<span class="token punctuation">"</span></span>
     <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
     <span class="token attr-name">:indeterminate</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isIndeterminate<span class="token punctuation">"</span></span>
     <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>selectAll<span class="token punctuation">"</span></span>
     <span class="token attr-name">aria-controls</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>toppings-input<span class="token punctuation">"</span></span>
   <span class="token punctuation">></span></span>Select All<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-checkbox</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-list</span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>group<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>toppings-input<span class="token punctuation">"</span></span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Individual toppings<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inset<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>topping in toppings<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>`checkbox-${topping}`<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-checkbox</span>
          <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>selected<span class="token punctuation">"</span></span>
          <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
          <span class="token attr-name">:custom-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>topping<span class="token punctuation">"</span></span>
          <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>toppings<span class="token punctuation">"</span></span>
          <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>selectOne<span class="token punctuation">"</span></span>
          <span class="token attr-name">aria-labelledby</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>toppings-input<span class="token punctuation">"</span></span>
        <span class="token punctuation">></span></span>{{ topping }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-checkbox</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-list</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-form-group</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div></cdr-doc-example-code-pair>
<h3 id="custom" tabindex="-1"><a class="header-anchor" href="#custom">#</a> Custom</h3>
<p>Custom styles for checkboxes.</p>
<cdr-doc-example-code-pair repository-href="/src/components/checkbox" :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {styleTag: '.no-box:checked ~ .no-box__content {color: green;}'})" class="custom-checkbox-example" :model="{ex1: true, ex2: false, ex3: false}">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-form-group</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Custom checkbox label<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-checkbox</span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ex1<span class="token punctuation">"</span></span>
    <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
    <span class="token attr-name">modifier</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hide-figure<span class="token punctuation">"</span></span>
    <span class="token attr-name">input-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>no-box<span class="token punctuation">"</span></span>
    <span class="token attr-name">content-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>no-box__content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Custom checkbox 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-checkbox</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-checkbox</span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ex2<span class="token punctuation">"</span></span>
    <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
    <span class="token attr-name">modifier</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hide-figure<span class="token punctuation">"</span></span>
    <span class="token attr-name">input-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>no-box<span class="token punctuation">"</span></span>
    <span class="token attr-name">content-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>no-box__content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Custom checkbox 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-checkbox</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-checkbox</span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ex3<span class="token punctuation">"</span></span>
    <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
    <span class="token attr-name">modifier</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hide-figure<span class="token punctuation">"</span></span>
    <span class="token attr-name">input-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>no-box<span class="token punctuation">"</span></span>
    <span class="token attr-name">content-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>no-box__content<span class="token punctuation">"</span></span>
    <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>Custom checkbox 3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-checkbox</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-form-group</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div></cdr-doc-example-code-pair>
<h3 id="validation" tabindex="-1"><a class="header-anchor" href="#validation">#</a> Validation</h3>
<p>Render a checkbox group with validation and error state</p>
<cdr-doc-example-code-pair repository-href="/src/components/checkbox"
:sandbox-data="$page.frontmatter.sandboxData" :model="{ex: [], modelError: 'Please make a selection'}" :methods="{validate() {this.modelError = !this.ex.length && 'Please make a selection'}}">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-form-group</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>What<span class="token punctuation">'</span>s your favorite letter?<span class="token punctuation">"</span></span> <span class="token attr-name">:error</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modelError<span class="token punctuation">"</span></span> <span class="token attr-name">:required</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-checkbox</span>
    <span class="token attr-name">custom-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>A<span class="token punctuation">"</span></span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ex<span class="token punctuation">"</span></span>
    <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
    <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>validate<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-checkbox</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-checkbox</span>
    <span class="token attr-name">custom-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>B<span class="token punctuation">"</span></span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ex<span class="token punctuation">"</span></span>
    <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
    <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>validate<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>B<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-checkbox</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-checkbox</span>
    <span class="token attr-name">custom-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>C<span class="token punctuation">"</span></span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ex<span class="token punctuation">"</span></span>
    <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
    <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>validate<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>C<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-checkbox</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-form-group</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div></cdr-doc-example-code-pair>
<h3 id="accessibility" tabindex="-1"><a class="header-anchor" href="#accessibility">#</a> Accessibility</h3>
<p>Many WCAG requirements are contextual to their implementation.
To ensure that usage of this component complies with accessibility guidelines you are responsible for the following:</p>
<ul>
<li>Each checkbox must be focusable and keyboard accessible:
<ul>
<li>When the checkbox has focus, the <strong>Space</strong> key changes the selection</li>
<li><strong>Tab</strong> key moves to next element in list</li>
</ul>
</li>
<li><code>CdrFormGroup</code> should be:
<ul>
<li>Used when associating group of checkboxes</li>
<li>Identified or described as a group using the <code>label</code> property or slot</li>
</ul>
</li>
<li>Avoid nesting <code>CdrFormGroup</code></li>
<li>Single checkboxes:
<ul>
<li>May be interchangeable with a toggle or <RouterLink to="/components/radio/">Radio Button</RouterLink></li>
<li>Write labels to be self-explanatory</li>
</ul>
</li>
<li>Custom checkboxes maintain accessibility requirements. The checkbox icon is only visually hidden and replaced with custom style
<br/></li>
</ul>
<p>This component has compliance with WCAG guidelines by:</p>
<ul>
<li>Wrapping the input in a label element and label is automatically associated with it</li>
</ul>
<br/>
<p>For more information, review techniques and failures for:</p>
<ul>
<li><a href="https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html" target="_blank" rel="noopener noreferrer">WCAG 2.0,  1.3.1 Info and Relationships<ExternalLinkIcon/></a></li>
<li><a href="https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html" target="_blank" rel="noopener noreferrer">WCAG 2.0,  3.3.2 Labels and Instructions<ExternalLinkIcon/></a></li>
</ul>
<hr>
<h2 id="guidelines" tabindex="-1"><a class="header-anchor" href="#guidelines">#</a> Guidelines</h2>
<h3 id="use-when" tabindex="-1"><a class="header-anchor" href="#use-when">#</a> Use When</h3>
<ul>
<li>Selecting one or multiple choices from a list</li>
<li>Selecting options from a list that contains sub-selections</li>
<li>Choosing &quot;yes&quot; or &quot;no&quot; when there is a single option (stand-alone checkbox)</li>
<li>Viewing all available options is needed</li>
<li>Comparing between a list of selections is desired</li>
</ul>
<h3 id="don-t-use-when" tabindex="-1"><a class="header-anchor" href="#don-t-use-when">#</a> Don't Use When</h3>
<ul>
<li>Selecting from a list when only one choice is allowed. Instead, use <RouterLink to="/components/radio/">Radio Buttons</RouterLink></li>
</ul>
<h3 id="content" tabindex="-1"><a class="header-anchor" href="#content">#</a> Content</h3>
<p>When using checkboxes in a list:</p>
<ul>
<li>Use a logical order,  whether it’s alphabetical, numerical, or time-based</li>
<li>Labels should have approximately equal length</li>
<li>Clearly communicate the effect of selecting the option</li>
<li>Provide a link or include a subtitle for more information. Don’t rely on tooltips to explain a checkbox</li>
</ul>
<br/>
<p>Checkbox labels should:</p>
<ul>
<li>Start with a capital letter</li>
<li>Use sentence case</li>
<li>Use positive phrasing so that the label describes the selected state</li>
<li>Avoid long labels</li>
<li>Be written as sentence fragments</li>
<li>No terminal punctuation</li>
</ul>
<br/>
<h3 id="do-don-t" tabindex="-1"><a class="header-anchor" href="#do-don-t">#</a> Do/Don't</h3>
<do-dont :examples="$page.frontmatter.case" />
<do-dont :examples="$page.frontmatter.label" />
<do-dont :examples="$page.frontmatter.positivecopy" />
<do-dont :examples="$page.frontmatter.fragment" />
<h3 id="behavior" tabindex="-1"><a class="header-anchor" href="#behavior">#</a> Behavior</h3>
<p>Checkboxes work independently from each other:</p>
<ul>
<li>Selecting one checkbox shouldn’t change the selection status of another checkbox in the list</li>
<li>When parent checkbox is used for a bulk selection action, all child checkbox items will be selected or not selected</li>
<li>Use a standalone checkbox for a simple toggle selection. Don’t use radio buttons or toggles</li>
</ul>
<br/>
<do-dont :examples="$page.frontmatter.simplify" />
<h2 id="resources" tabindex="-1"><a class="header-anchor" href="#resources">#</a> Resources</h2>
<ul>
<li>WebAIM: <a href="https://webaim.org/techniques/semanticstructure/" target="_blank" rel="noopener noreferrer">Semantic Structure: Using Lists Correctly<ExternalLinkIcon/></a></li>
</ul>
<hr>
<h2 id="api" tabindex="-1"><a class="header-anchor" href="#api">#</a> API</h2>
<h3 id="props" tabindex="-1"><a class="header-anchor" href="#props">#</a> Props</h3>
<p>This component will bind any attribute that a <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox" target="_blank" rel="noopener noreferrer">native HTML checkbox element<ExternalLinkIcon/></a> accepts.</p>
<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />
<h3 id="slots" tabindex="-1"><a class="header-anchor" href="#slots">#</a> Slots</h3>
<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />
<h3 id="events" tabindex="-1"><a class="header-anchor" href="#events">#</a> Events</h3>
<cdr-doc-api type="event" :api-data="$page.frontmatter.versions[0].components[0].api.events" />
<h3 id="component-variables" tabindex="-1"><a class="header-anchor" href="#component-variables">#</a> Component Variables</h3>
<cdr-doc-comp-vars name="CdrLabelWrapper"/>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage">#</a> Usage</h2>
<p>The <strong>CdrCheckbox</strong> component requires  <code>v-model</code>  to track  <code>:checked</code>  values.</p>
<p>This example uses  <code>true-value</code>  and  <code>false-value</code>  props to change what’s saved to the model.</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-checkbox</span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>model<span class="token punctuation">"</span></span>
    <span class="token attr-name">true-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checked<span class="token punctuation">"</span></span>
    <span class="token attr-name">false-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>unchecked<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
    Option 1
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-checkbox</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Use  <code>custom-value</code>  with a shared model to create a checkbox group that will track multiple checkbox values.</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-checkbox</span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>groupModel<span class="token punctuation">"</span></span>
    <span class="token attr-name">:custom-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ value: ‘D’ }<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
    Option 1
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-checkbox</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-checkbox</span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>groupModel<span class="token punctuation">"</span></span>
    <span class="token attr-name">:custom-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[ 9, 10 ]<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
    Option 2
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-checkbox</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>If both values are checked, the model would be <code>[  { value: ‘D’ }, [ 9, 10 ]  ]</code>. Unchecking either checkbox would remove its value from the model array.</p>
<p>Default checkbox to checked/unchecked state by setting the model in Javascript.</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-checkbox</span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>groupModel<span class="token punctuation">"</span></span>
    <span class="token attr-name">:custom-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ value: ‘D’ }<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
    Option 1
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-checkbox</span><span class="token punctuation">></span></span>
  ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token operator">...</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      groupModel<span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">{</span> value<span class="token operator">:</span> ‘<span class="token constant">D</span>’ <span class="token punctuation">}</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>Set the <code>indeterminate</code> prop to <code>true</code> to generate an indeterminate checkbox, which looks different than the default. This is a visual styling only; it does not include any of the functional aspects of an indeterminate checkbox. To see a functioning example see the <a href="#indeterminate">indeterminate example</a>.</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-checkbox</span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>groupModel<span class="token punctuation">"</span></span>
    <span class="token attr-name">:indeterminate</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
    Option 1
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-checkbox</span><span class="token punctuation">></span></span>
  ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="modifiers" tabindex="-1"><a class="header-anchor" href="#modifiers">#</a> Modifiers</h3>
<p>Following variants are available to the <code>cdr-checkbox</code> modifier attribute:</p>
<table>
<thead>
<tr>
<th style="text-align:left">Value</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">'hide-figure'</td>
<td style="text-align:left">Hides the checkbox icon</td>
</tr>
</tbody>
</table>
<br/>
<p>Use the <code>hide-figure</code> modifier to hide the checkbox itself, which leaves the text label as the clickable element. Add appropriate custom styles to convey selected and unselected states.</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-checkbox</span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>model<span class="token punctuation">"</span></span>
    <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>model<span class="token punctuation">"</span></span>
    <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>model<span class="token punctuation">"</span></span>
    <span class="token attr-name">modifier</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hide-figure<span class="token punctuation">"</span></span>
    <span class="token attr-name">input-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>no-box<span class="token punctuation">"</span></span>
    <span class="token attr-name">content-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>no-box__content<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
    Add to cart
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-checkbox</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.no-box:checked ~ .no-box__content</span> <span class="token punctuation">{</span>
   <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>

   <span class="token selector">&amp;::after</span> <span class="token punctuation">{</span>
     <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">'(checked)'</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div></cdr-doc-table-of-contents-shell>
</template>
