<template><cdr-doc-table-of-contents-shell parentSelector="h2" childSelector="h3">
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview">#</a> Overview</h2>
<p>CdrPopover is a wrapper component that accepts a trigger element and popover content. When the trigger element is clicked, the popover content is rendered. Event bindings between the trigger and the popover are set up automatically. The popover will dynamically update its position property to ensure that it renders on screen, though this functionality can be disabled by setting autoPosition to false.</p>
<cdr-doc-example-code-pair repository-href="/src/components/CdrPopover"
:sandbox-data="$page.frontmatter.sandboxData" >
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-popover</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>popover-example<span class="token punctuation">"</span></span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#trigger</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-button</span><span class="token punctuation">></span></span>
      Click me
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    I provide additional information to the user
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-popover</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></cdr-doc-example-code-pair>
<h3 id="custom-trigger" tabindex="-1"><a class="header-anchor" href="#custom-trigger">#</a> Custom Trigger</h3>
<p>CdrPopover can also be controlled programmatically using the <code>open</code> prop. However, doing so means that you must implement certain behavior yourself:</p>
<ul>
<li>The CdrPopover element and the trigger element must be wrapped in a div with <code>position: relative</code> and <code>width: max-content</code>.</li>
<li>The <code>open</code> property should be toggled to true when the trigger element is clicked. Close logic will be handled by CdrPopover.</li>
<li>The trigger element should have it's <code>aria-controls</code> property set to the ID of the CdrPopover, and it's <code>aria-haspopup</code> property set to &quot;dialog&quot;.</li>
</ul>
<cdr-doc-example-code-pair repository-href="/src/components/CdrPopover"
:sandbox-data="$page.frontmatter.sandboxData" :model="{open: false}">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span> <span class="token property">width</span><span class="token punctuation">:</span> max-content<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-button</span>
    <span class="token attr-name">aria-haspopup</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dialog<span class="token punctuation">"</span></span>
    <span class="token attr-name">aria-controls</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>popover-custom-example<span class="token punctuation">"</span></span>
    <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>open = true<span class="token punctuation">"</span></span>
    <span class="token attr-name">@closed</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>open = false<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
    Click me
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-popover</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>popover-custom-example<span class="token punctuation">"</span></span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span> <span class="token attr-name">:open</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>open<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
      I provide additional information to the user
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-popover</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></cdr-doc-example-code-pair>
<h3 id="accessibility" tabindex="-1"><a class="header-anchor" href="#accessibility">#</a> Accessibility</h3>
<p>To ensure your usage of this component complies with accessibility guidelines you are responsible for the following:</p>
<ul>
<li>Set an <code>id</code> property on the CdrPopover. The component will automatically link that <code>id</code> to the trigger element.</li>
<li>Content passed in to the <code>trigger</code> slot must be an actionable element such as a button.</li>
<li>Popovers can contain complex content structures such as headers, lists, and actionable items that provide related additional content to the section of the triggering element.</li>
</ul>
<p>This component complies with WCAG guidelines by:</p>
<ul>
<li>Adds click handler to trigger element that manages popover state.</li>
<li>When opened, moves focus to the first actionable element inside the popover.</li>
<li>When closed, restores focus to the last active element before the popover was opened.</li>
<li>Dynamically sets <code>aria-controls</code> on the trigger element to point to the id of the tooltip.</li>
<li>Sets <code>aria-haspopup=&quot;dialog&quot;</code> on the trigger element.</li>
<li>Dynamically sets <code>aria-expanded</code> on the popover content.</li>
<li>Adds <code>role=&quot;dialog&quot;</code> to the tooltip content.</li>
<li>Popover content is not visible to screen readers when it is closed.</li>
<li>Popover can be closed by pressing the close button in the top right corner, by pressing the <code>esc</code> key, or by clicking anywhere outside of the popover content.</li>
</ul>
<h2 id="guidelines" tabindex="-1"><a class="header-anchor" href="#guidelines">#</a> Guidelines</h2>
<p>A popover is a floating container useful for communicating small amounts of clarifying information. It's revealed through acting upon a trigger, like a button, but can also be used to preemptively bring attention to new interface features.</p>
<h3 id="use-when" tabindex="-1"><a class="header-anchor" href="#use-when">#</a> Use when</h3>
<p>Use a popover when a subset of users require additional information.</p>
<p>Example:</p>
<ul>
<li>When the co-op requests a user’s email, a popover is used to explain why an email is required and the ways in which it might be used.</li>
<li>Some users aren’t familiar with a credit card security field. Using a popover, describe specifically where to find the information being asked for the identified card type.</li>
</ul>
<h3 id="don-t-use-when" tabindex="-1"><a class="header-anchor" href="#don-t-use-when">#</a> Don’t use when</h3>
<ul>
<li>Don’t put critical information in a popover. Instead, place the information inline so that it’s always visible to users.</li>
<li>Don’t put excessive content into popover. Instead, use a <RouterLink to="/components/modal/">Modal</RouterLink>.</li>
</ul>
<p>Example:</p>
<ul>
<li>The terms and conditions of a free shipping offer needs to be easily viewed, if desired. Place the lengthy details of the offer in a modal, not a popover.</li>
</ul>
<h3 id="do-don-t" tabindex="-1"><a class="header-anchor" href="#do-don-t">#</a> Do / Don't</h3>
<do-dont :examples="$page.frontmatter.content" />
<do-dont :examples="$page.frontmatter.essential" />
<h2 id="api" tabindex="-1"><a class="header-anchor" href="#api">#</a> API</h2>
<h3 id="props" tabindex="-1"><a class="header-anchor" href="#props">#</a> Props</h3>
<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />
<h3 id="slots" tabindex="-1"><a class="header-anchor" href="#slots">#</a> Slots</h3>
<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />
<h3 id="events" tabindex="-1"><a class="header-anchor" href="#events">#</a> Events</h3>
<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.events" :slots-getting-started-link="false" />
</cdr-doc-table-of-contents-shell>
</template>
