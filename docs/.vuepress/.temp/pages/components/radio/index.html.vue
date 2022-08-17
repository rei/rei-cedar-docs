<template><cdr-doc-table-of-contents-shell>
# Overview
## Default (Medium)
Default and standard spacing for radio buttons.
<cdr-doc-example-code-pair repository-href="/src/components/radio" :sandbox-data="$page.frontmatter.sandboxData" :codeMaxHeight="false" :model="{ex: ''}">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-form-group</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#label</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>legend-1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Default Radio Example<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-radio</span>
      <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>default-example<span class="token punctuation">"</span></span>
      <span class="token attr-name">custom-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ex1<span class="token punctuation">"</span></span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ex<span class="token punctuation">"</span></span>
      <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      Default radio 1
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-radio</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-radio</span>
      <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>default-example<span class="token punctuation">"</span></span>
      <span class="token attr-name">custom-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ex2<span class="token punctuation">"</span></span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ex<span class="token punctuation">"</span></span>
      <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      Default radio 2
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-radio</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-radio</span>
      <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>default-example<span class="token punctuation">"</span></span>
      <span class="token attr-name">:custom-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{val:<span class="token punctuation">'</span>ex3<span class="token punctuation">'</span>}<span class="token punctuation">"</span></span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ex<span class="token punctuation">"</span></span>
      <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
      <span class="token attr-name">disabled</span>
    <span class="token punctuation">></span></span>
      Default radio 3
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-radio</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-form-group</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>selected: {{ex}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="size" tabindex="-1"><a class="header-anchor" href="#size">#</a> Size</h2>
<p>Different sizing for radio buttons.</p>
<cdr-doc-example-code-pair repository-href="/src/components/radio" :sandbox-data="$page.frontmatter.sandboxData" :codeMaxHeight="false" :model="{ex: ''}">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-form-group</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#label</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>legend-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Radio Size Example<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-radio</span>
      <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>
      <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>size-example<span class="token punctuation">"</span></span>
      <span class="token attr-name">custom-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ex1<span class="token punctuation">"</span></span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ex<span class="token punctuation">"</span></span>
      <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      Small radio
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-radio</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-radio</span>
      <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>size-example<span class="token punctuation">"</span></span>
      <span class="token attr-name">custom-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ex2<span class="token punctuation">"</span></span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ex<span class="token punctuation">"</span></span>
      <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      Medium radio
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-radio</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-radio</span>
      <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span>
      <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>size-example<span class="token punctuation">"</span></span>
      <span class="token attr-name">:custom-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{val:<span class="token punctuation">'</span>ex3<span class="token punctuation">'</span>}<span class="token punctuation">"</span></span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ex<span class="token punctuation">"</span></span>
      <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
      <span class="token attr-name">disabled</span>
    <span class="token punctuation">></span></span>
      Large radio
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-radio</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-form-group</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>selected: {{ex}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="custom" tabindex="-1"><a class="header-anchor" href="#custom">#</a> Custom</h2>
<p>Custom styles for radio buttons.</p>
<cdr-doc-example-code-pair repository-href="/src/components/radio" :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {styleTag: '.no-box:checked ~ .no-box__content {color: green;}'})" :codeMaxHeight="false" class="custom-radio-example" :model="{ex: ''}">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-form-group</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#label</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>legend-3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Custom Radio Example<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-radio</span>
      <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom-example<span class="token punctuation">"</span></span>
      <span class="token attr-name">custom-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ex1<span class="token punctuation">"</span></span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ex<span class="token punctuation">"</span></span>
      <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
      <span class="token attr-name">modifier</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hide-figure<span class="token punctuation">"</span></span>
      <span class="token attr-name">input-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>no-box<span class="token punctuation">"</span></span>
      <span class="token attr-name">content-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>no-box__content<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      Custom radio 1
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-radio</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-radio</span>
      <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom-example<span class="token punctuation">"</span></span>
      <span class="token attr-name">custom-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ex2<span class="token punctuation">"</span></span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ex<span class="token punctuation">"</span></span>
      <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
      <span class="token attr-name">modifier</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hide-figure<span class="token punctuation">"</span></span>
      <span class="token attr-name">input-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>no-box<span class="token punctuation">"</span></span>
      <span class="token attr-name">content-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>no-box__content<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      Custom radio 2
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-radio</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-radio</span>
      <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom-example<span class="token punctuation">"</span></span>
      <span class="token attr-name">:custom-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{val:<span class="token punctuation">'</span>ex3<span class="token punctuation">'</span>}<span class="token punctuation">"</span></span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ex<span class="token punctuation">"</span></span>
      <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
      <span class="token attr-name">modifier</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hide-figure<span class="token punctuation">"</span></span>
      <span class="token attr-name">input-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>no-box<span class="token punctuation">"</span></span>
      <span class="token attr-name">content-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>no-box__content<span class="token punctuation">"</span></span>
      <span class="token attr-name">disabled</span>
    <span class="token punctuation">></span></span>
      Custom radio 3
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-radio</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-form-group</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>selected: {{ex}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="validation" tabindex="-1"><a class="header-anchor" href="#validation">#</a> Validation</h2>
<p>Render a radio group with validation and error state</p>
<cdr-doc-example-code-pair repository-href="/src/components/radio"
:sandbox-data="$page.frontmatter.sandboxData" :model="{ex: [], modelError: 'Please make a selection'}" :methods="{validate() {this.modelError = !this.ex.length && 'Please make a selection'}}">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-form-group</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>What<span class="token punctuation">'</span>s your favorite letter?<span class="token punctuation">"</span></span> <span class="token attr-name">:error</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modelError<span class="token punctuation">"</span></span> <span class="token attr-name">:required</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-radio</span>
    <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>letter<span class="token punctuation">"</span></span>
    <span class="token attr-name">custom-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>A<span class="token punctuation">"</span></span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ex<span class="token punctuation">"</span></span>
    <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
    <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>validate<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-radio</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-radio</span>
    <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>letter<span class="token punctuation">"</span></span>
    <span class="token attr-name">custom-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>B<span class="token punctuation">"</span></span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ex<span class="token punctuation">"</span></span>
    <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
    <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>validate<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>B<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-radio</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-radio</span>
    <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>letter<span class="token punctuation">"</span></span>
    <span class="token attr-name">custom-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>C<span class="token punctuation">"</span></span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ex<span class="token punctuation">"</span></span>
    <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
    <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>validate<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>C<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-radio</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-form-group</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="accessibility" tabindex="-1"><a class="header-anchor" href="#accessibility">#</a> Accessibility</h2>
<p>Many WCAG requirements are contextual to their implementation.
To ensure that usage of this component complies with accessibility guidelines you are responsible for the following:</p>
<ul>
<li>Each radio button must be focusable and keyboard accessible:
<ul>
<li>When radio button has focus, the <strong>Space</strong> key changes the selection</li>
<li><strong>Tab</strong> key moves to next element in list</li>
</ul>
</li>
<li><code>CdrFormGroup</code> should be:
<ul>
<li>Used when associating group of radio buttons</li>
<li>Identified or described as a group using the <code>label</code> property or slot</li>
</ul>
</li>
<li>Avoid nesting <code>CdrFormGroup</code></li>
<li>Custom radio buttons maintain accessibility requirements. The radio button icon is only visually hidden and replaced with custom style</li>
</ul>
<br/>
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
<h1 id="guidelines" tabindex="-1"><a class="header-anchor" href="#guidelines">#</a> Guidelines</h1>
<h2 id="use-when" tabindex="-1"><a class="header-anchor" href="#use-when">#</a> Use When</h2>
<ul>
<li>Selecting only 1 choice from a list is allowed</li>
<li>Viewing all available options is needed</li>
<li>Comparing between list of selections is desired</li>
</ul>
<h2 id="don-t-use-when" tabindex="-1"><a class="header-anchor" href="#don-t-use-when">#</a> Don't Use When</h2>
<ul>
<li>Selecting from a list when multiple choices are allowed. Instead, use <RouterLink to="/components/checkboxes/">Checkboxes</RouterLink></li>
<li>Providing a single selectable option. Instead, use <RouterLink to="/components/checkboxes/">Checkboxes</RouterLink> as a stand-alone checkbox</li>
</ul>
<h2 id="content" tabindex="-1"><a class="header-anchor" href="#content">#</a> Content</h2>
<p>When using radio buttons in a list:</p>
<ul>
<li>Use a logical order, whether it’s alphabetical, numerical, or time-based</li>
<li>Labels should have approximately equal length</li>
<li>Clearly communicate the effect of selecting the option</li>
<li>Provide a link or include a subtitle for more information. Don’t rely on tooltips to explain a radio button</li>
</ul>
<br/>
<p>Radio button labels should:</p>
<ul>
<li>Start with a capital letter</li>
<li>Use sentence case</li>
<li>Avoid long labels</li>
<li>Be written as sentence fragments</li>
<li>No terminal punctuation</li>
</ul>
<h3 id="do-don-t" tabindex="-1"><a class="header-anchor" href="#do-don-t">#</a> Do/Don't</h3>
<do-dont :examples="$page.frontmatter.case" />
<do-dont :examples="$page.frontmatter.label" />
<do-dont :examples="$page.frontmatter.fragment" />
<h2 id="resources" tabindex="-1"><a class="header-anchor" href="#resources">#</a> Resources</h2>
<ul>
<li>WebAIM: <a href="https://webaim.org/techniques/semanticstructure/" target="_blank" rel="noopener noreferrer">Semantic Structure: Using Lists Correctly<ExternalLinkIcon/></a></li>
</ul>
<hr>
<h1 id="api" tabindex="-1"><a class="header-anchor" href="#api">#</a> API</h1>
<h2 id="props" tabindex="-1"><a class="header-anchor" href="#props">#</a> Props</h2>
<p>This component will bind any attribute that a <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio" target="_blank" rel="noopener noreferrer">native HTML radio element<ExternalLinkIcon/></a> accepts.</p>
<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props"/>
<h2 id="slots" tabindex="-1"><a class="header-anchor" href="#slots">#</a> Slots</h2>
<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots"/>
<h2 id="events" tabindex="-1"><a class="header-anchor" href="#events">#</a> Events</h2>
<cdr-doc-api type="event" :api-data="$page.frontmatter.versions[0].components[0].api.events"/>
<h2 id="component-variables" tabindex="-1"><a class="header-anchor" href="#component-variables">#</a> Component Variables</h2>
<cdr-doc-comp-vars name="CdrLabelWrapper"/>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage">#</a> Usage</h2>
<p>The <strong>CdrRadio</strong> component requires <code>v-model</code> to track the value of selected radios.</p>
<h3 id="modifiers" tabindex="-1"><a class="header-anchor" href="#modifiers">#</a> Modifiers</h3>
<p>Following variants are available to the <code>cdr-radio</code> modifier attribute:</p>
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
<td style="text-align:left">Hides the radio button icon</td>
</tr>
</tbody>
</table>
<br/>
<p>Use the <code>hide-figure</code> modifier to hide the radio button itself, which leaves text label as the clickable element. Add appropriate custom styles to convey selected and unselected states.</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-radio</span>
    <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>example<span class="token punctuation">"</span></span>
    <span class="token attr-name">custom-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>model1<span class="token punctuation">"</span></span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>model<span class="token punctuation">"</span></span>
    <span class="token attr-name">modifier</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hide-figure<span class="token punctuation">"</span></span>
    <span class="token attr-name">input-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>no-box<span class="token punctuation">"</span></span>
    <span class="token attr-name">content-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>no-box__content<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
    Add to cart
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-radio</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.no-box:checked ~ .no-box__content</span> <span class="token punctuation">{</span>
   <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>

   <span class="token selector">&amp;::after</span> <span class="token punctuation">{</span>
     <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">'(checked)'</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div></cdr-doc-table-of-contents-shell>
</template>
