<template><cdr-doc-table-of-contents-shell>
<h1 id="overview" tabindex="-1"><a class="header-anchor" href="#overview">#</a> Overview</h1>
<p>Chips are compact elements that represent a selection, attribute, or dynamic action.</p>
<h2 id="default" tabindex="-1"><a class="header-anchor" href="#default">#</a> Default</h2>
<p>Use chips to directly specify, dynamically categorize or immediately perform a discrete action.</p>
<cdr-doc-example-code-pair repository-href="/src/components/CdrChip"
:sandbox-data="$page.frontmatter.sandboxData" >
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-chip</span><span class="token punctuation">></span></span>Default chip<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-chip</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-chip</span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>Disabled default chip<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-chip</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="icon-slots" tabindex="-1"><a class="header-anchor" href="#icon-slots">#</a> Icon Slots</h2>
<p>Use <code>icon-left</code> or <code>icon-right</code> slots to pass icons into a chip. Place the X remove icon in the icon-right slot only. Place other icons in the icon-left slot. Use only one icon per chip.</p>
<cdr-doc-example-code-pair repository-href="/src/components/CdrChip"
 :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrChip, IconHeartStroke, IconCheckLg'})">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-chip</span><span class="token punctuation">></span></span>Text and icon left <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#icon-left</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>icon-heart-stroke</span> <span class="token attr-name">inherit-color</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-chip</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-chip</span><span class="token punctuation">></span></span>Text and icon right <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#icon-right</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>icon-check-lg</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">inherit-color</span><span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-chip</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="stateful-chips" tabindex="-1"><a class="header-anchor" href="#stateful-chips">#</a> Stateful Chips</h2>
<p>Use stateful chips to update settings immediately or trigger an immediate action while staying on the same page.</p>
<p>For chips that toggle a single selection on and off, use the click event and dynamic properties in order to change the label or state of a chip. The <code>aria-pressed</code> attribute should be used to designate the state of the toggle.</p>
<cdr-doc-example-code-pair repository-href="/src/components/CdrChip"
:sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrChip, IconHeartStroke, IconHeartFill'})" :model="{ toggled: false }" :methods="{toggle() {this.toggled = !this.toggled}}" >
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-chip</span>
    <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>toggle<span class="token punctuation">"</span></span>
    <span class="token attr-name">:aria-pressed</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>toggled ? <span class="token punctuation">'</span>true<span class="token punctuation">'</span> : <span class="token punctuation">'</span>false<span class="token punctuation">'</span><span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#icon-left</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>icon-heart-stroke</span>
        <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>
        <span class="token attr-name">inherit-color</span>
        <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>!toggled<span class="token punctuation">"</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#icon-left</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>icon-heart-fill</span>
        <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>
        <span class="token attr-name">inherit-color</span>
        <span class="token attr-name">v-else</span>
      <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
    Toggle
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-chip</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="filter-chips" tabindex="-1"><a class="header-anchor" href="#filter-chips">#</a> Filter Chips</h2>
<p>Filter chips add a visual representation of user selected filters. Filter chips that represent user selections that can be dynamically removed should include an X icon in the right icon slot and be linked to the ID of the input it controls using <code>aria-controls</code>. The <code>aria-pressed</code> property should be set to true to designate that this selection is active. Filter chips that are linked to a checkbox should appear selected and be included in the same form group as the checkboxes.</p>
<cdr-doc-example-code-pair repository-href="/src/components/CdrChip"
:sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrChip, IconXLg, CdrCheckbox'})" :model="{ filtered: true }" :methods="{updateFilter() {this.filtered = !this.filtered}}">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-checkbox</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>filtered<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>filter-checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>updateFilter<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Add Filter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-checkbox</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-chip</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>filtered<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>updateFilter<span class="token punctuation">"</span></span> <span class="token attr-name">aria-controls</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>filter-checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">aria-pressed</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> Remove filter <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#icon-right</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>icon-x-lg</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-chip</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="selection-chips" tabindex="-1"><a class="header-anchor" href="#selection-chips">#</a> Selection Chips</h2>
<p>Use selection chips to allow users to make a single select choice or a multiple select choice. Single select chip groups are a more prominent alternative to radio buttons while multiple select chip groups are a more prominent alternative to checkboxes.</p>
<h3 id="single-select" tabindex="-1"><a class="header-anchor" href="#single-select">#</a> Single Select</h3>
<p>For single select chip groups, apply <code>role='radio'</code> to each chip, use <code>aria-checked=&quot;true&quot;</code> and <code>tabindex=&quot;0&quot;</code> to designate the selected chip, and apply <code>aria-checked=&quot;false&quot;</code> and <code>tabindex=&quot;-1&quot;</code> to the other chips. The chip elements should be grouped directly inside a CdrChipGroup element to ensure keyboard navigation is properly managed. The CdrChipGroup element requires a label property or slot be passed in which describes the chip group. This label is visually hidden by default.</p>
<cdr-doc-example-code-pair repository-href="/src/components/CdrChip"
:sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrChip, IconXSm, CdrCheckbox'})" :model="{ categories: ['a', 'b', 'c'], selectedCategory: 'a' }" :methods="{selectCategory(category) {this.selectedCategory = category}}">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-chip-group</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Chip group description<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-chip</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>category in categories<span class="token punctuation">"</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>radio<span class="token punctuation">"</span></span> <span class="token attr-name">:aria-checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>category === selectedCategory<span class="token punctuation">"</span></span> <span class="token attr-name">:tabindex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>category === selectedCategory ? 0 : -1<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>selectCategory(category)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      Option {{ category }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-chip</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-chip-group</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></cdr-doc-example-code-pair>
<h3 id="multiple-select" tabindex="-1"><a class="header-anchor" href="#multiple-select">#</a> Multiple Select</h3>
<p>For multiple select chip groups, apply <code>role='checkbox'</code> to each chip, use <code>aria-checked=&quot;true&quot;</code> to designate the selected chip, and apply <code>aria-checked=&quot;false&quot;</code> to the other chips. The chip elements should be grouped directly inside a CdrChipGroup element to ensure keyboard navigation is properly managed. The CdrChipGroup element requires a label property or slot be passed in which describes the chip group. This label is visually hidden by default.</p>
<cdr-doc-example-code-pair repository-href="/src/components/CdrChip"
:sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrChip, IconXSm, CdrCheckbox'})" :model="{ categories: ['a', 'b', 'c', 'd'], selectedCategories: ['b', 'c'] }" :methods="{selectCategory(category) {const i = this.selectedCategories.indexOf(category); if (i !== -1) { this.selectedCategories.splice(i, 1) } else { this.selectedCategories.push(category)}}}">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-chip-group</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Chip group description<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-chip</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>category in categories<span class="token punctuation">"</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>category<span class="token punctuation">"</span></span> <span class="token attr-name">:aria-checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>selectedCategories.includes(category)<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>selectCategory(category)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      Option {{ category }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-chip</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-chip-group</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="accessibility" tabindex="-1"><a class="header-anchor" href="#accessibility">#</a> Accessibility</h2>
<p>Many WCAG requirements are contextual to their implementation. To ensure that usage of this component complies with accessibility guidelines:</p>
<ul>
<li>For a group of chips related to a single selection, use <code>role=&quot;radio&quot;</code>, <code>aria-checked</code>, and <code>tabindex</code> on each chip and wrap the group in a CdrChipGroup component. The selected chip should have <code>aria-checked=&quot;true&quot;</code> and <code>tabindex=&quot;0&quot;</code> set, while the rest of the chips should have <code>aria-checked=&quot;false&quot;</code> and <code>tabindex=&quot;-1&quot;</code>.</li>
<li>For a chip that controls a selection made elsewhere on the page, set <code>aria-controls</code> on the chip to point to the ID of the input being modified</li>
<li>For a chip that toggles a selection on and off, use <code>role=&quot;switch&quot;</code> and <code>aria-checked</code> to designate its state.</li>
<li>For other uses of CdrChip please reach out in Slack at #cedar-user-support</li>
</ul>
<p>CdrChip and CdrChipGroup implement the following accessibility requirements:</p>
<ul>
<li>CdrChip uses a button tag</li>
<li>CdrChipGroup implements keyboard navigation for a group of CdrChips</li>
</ul>
<h1 id="guidelines" tabindex="-1"><a class="header-anchor" href="#guidelines">#</a> Guidelines</h1>
<p>Chips allow users to make selections, filter content, or trigger actions. While buttons are expected to appear consistently and with familiar calls to action, chips should appear dynamically.</p>
<h2 id="use-when" tabindex="-1"><a class="header-anchor" href="#use-when">#</a> Use when</h2>
<ul>
<li>Dynamically categorizing content based on descriptive words</li>
<li>Representing a checkbox group with more emphasis</li>
<li>Representing a radio button group with more emphasis</li>
<li>Clearly delineating and displaying options in a compact area</li>
<li>Offering dynamic and contextual actions related to primary content</li>
<li>Allowing the user to trigger an immediate action while staying on the same page</li>
<li>Allowing users to update or configure settings immediately</li>
</ul>
<h2 id="don-t-use-when" tabindex="-1"><a class="header-anchor" href="#don-t-use-when">#</a> Don’t use when</h2>
<ul>
<li>Navigating a user. Instead, use <RouterLink to="/components/buttons/">Buttons</RouterLink> or <RouterLink to="/components/links/">Links</RouterLink></li>
<li>Displaying non-interactive elements</li>
<li>Displaying more than two rows of chips. Instead use horizontal scrolling or <RouterLink to="/components/select/">Select</RouterLink></li>
<li>Representing page tags</li>
</ul>
<h2 id="the-basics" tabindex="-1"><a class="header-anchor" href="#the-basics">#</a> The Basics</h2>
<p>One chip container style is available: pill.</p>
<p>When arranging chips horizontally:</p>
<ul>
<li>Left align chip group</li>
<li>Separate each by cdr-space-half-x</li>
</ul>
<cdr-img class="cdr-doc-article-img" :src="$withBase(`/chips/basics_horizontal.png`)"/>
<p>When stacking chips vertically:</p>
<ul>
<li>Make sure chips overflow based on the width of the chip group area</li>
<li>Separate each by cdr-space-half-x</li>
</ul>
<cdr-img class="cdr-doc-article-img" :src="$withBase(`/chips/basics_vertical.png`)"/>
<h2 id="content" tabindex="-1"><a class="header-anchor" href="#content">#</a> Content</h2>
<p>When using chips in a group:</p>
<ul>
<li>Use a logical order, whether it’s alphabetical, numerical, or time-based</li>
<li>Clearly communicate the effect of selecting the option</li>
<li>Provide a link or include a subtitle for more information. Don’t rely on tooltips to explain a radio button</li>
</ul>
<p>Chip text should:</p>
<ul>
<li>Start with a capital letter</li>
<li>Use sentence case</li>
<li>Avoid long labels</li>
<li>Be written as sentence fragments</li>
<li>No terminal punctuation</li>
</ul>
<h2 id="do-don-t" tabindex="-1"><a class="header-anchor" href="#do-don-t">#</a> Do / Don't</h2>
<do-dont :examples="$page.frontmatter.case" />
<do-dont :examples="$page.frontmatter.phrasing" />
<do-dont :examples="$page.frontmatter.labels" />
<do-dont :examples="$page.frontmatter.punctuation" />
<do-dont :examples="$page.frontmatter.icon" />
<do-dont :examples="$page.frontmatter.x" />
<do-dont :examples="$page.frontmatter.overflow" />
<do-dont :examples="$page.frontmatter.padding" />
<do-dont :examples="$page.frontmatter.sequence" />
<do-dont :examples="$page.frontmatter.group" />
<!-- When grouping chips, Do not exceed 2 rows of chips.

<do-dont :examples="$page.frontmatter.DATAKEY" />

When grouping chips, left align chips.

<do-dont :examples="$page.frontmatter.DATAKEY" />

When representing radio button or checkbox groups, include more than 2 chips in a group.

<do-dont :examples="$page.frontmatter.DATAKEY" /> -->
<h2 id="behavior" tabindex="-1"><a class="header-anchor" href="#behavior">#</a> Behavior</h2>
<p>Stateful chips used to dynamically perform a discrete action:</p>
<ul>
<li>Can show confirmation feedback.</li>
</ul>
<p>Chips used for single selection:</p>
<ul>
<li>Selecting a single choice automatically deselects all other chips in the group.</li>
<li>Include more than one option per chip group.</li>
</ul>
<p>Chips used for multiple selection:</p>
<ul>
<li>Selecting one chip shouldn’t change the selection status of another chip in the list.</li>
</ul>
<p>Filter chips:</p>
<ul>
<li>Can optionally include an X remove icon.</li>
</ul>
<p>When making decisions about whether to use a button, links or chips, consider the following:</p>
<table>
<thead>
<tr>
<th><strong>Buttons</strong></th>
<th><strong>Links</strong></th>
<th><strong>Chips</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Toggling a display to full screen</td>
<td>Navigating user to a new page or view</td>
<td>Representing a filtered list of content that appear on the same page</td>
</tr>
<tr>
<td>Opening a modal window</td>
<td>Changing the URL</td>
<td>Offering a choice or representing a filter</td>
</tr>
<tr>
<td>Triggering a popup menu</td>
<td>Causing a browser redraw or refresh</td>
<td>Immediately changing a setting on the page</td>
</tr>
</tbody>
</table>
<h2 id="resources" tabindex="-1"><a class="header-anchor" href="#resources">#</a> Resources</h2>
<ul>
<li>WebAIM: <a href="https://webaim.org/techniques/keyboard/" target="_blank" rel="noopener noreferrer">Keyboard Accessibility<ExternalLinkIcon/></a></li>
<li>WebAIM <a href="https://webaim.org/standards/wcag/checklist" target="_blank" rel="noopener noreferrer">WCAG 2.0 Checklist<ExternalLinkIcon/></a></li>
<li>W3C: <a href="https://www.w3.org/TR/wcag-3.0/" target="_blank" rel="noopener noreferrer">WCAG 3.0 Guidelines<ExternalLinkIcon/></a></li>
</ul>
<h1 id="api" tabindex="-1"><a class="header-anchor" href="#api">#</a> API</h1>
<h2 id="cdrchip" tabindex="-1"><a class="header-anchor" href="#cdrchip">#</a> CdrChip</h2>
<h3 id="props" tabindex="-1"><a class="header-anchor" href="#props">#</a> Props</h3>
<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />
<h3 id="slots" tabindex="-1"><a class="header-anchor" href="#slots">#</a> Slots</h3>
<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />
<h2 id="cdrchipgroup" tabindex="-1"><a class="header-anchor" href="#cdrchipgroup">#</a> CdrChipGroup</h2>
<h3 id="props-1" tabindex="-1"><a class="header-anchor" href="#props-1">#</a> Props</h3>
<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[1].api.props" />
<h3 id="slots-1" tabindex="-1"><a class="header-anchor" href="#slots-1">#</a> Slots</h3>
<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[1].api.slots" />
</cdr-doc-table-of-contents-shell>
</template>
