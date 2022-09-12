<template><cdr-doc-table-of-contents-shell parentSelector="h2" childSelector="h3">
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview">#</a> Overview</h2>
<p>CdrTooltip is a wrapper component that accepts a trigger element and tooltip content. When the trigger element is hovered or focused, the tooltip content is rendered. Event bindings between the trigger and the tooltip are set up automatically. The tooltip will dynamically update its <code>position</code> property to ensure that it renders on screen, though this functionality can be disabled by setting <code>autoPosition</code> to <code>false</code>.</p>
<cdr-doc-example-code-pair repository-href="/src/components/CdrTooltip"
:sandbox-data="$page.frontmatter.sandboxData" >
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-tooltip</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tooltip-example<span class="token punctuation">"</span></span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#trigger</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-button</span> <span class="token attr-name">:icon-only</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">:with-background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#icon</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>icon-information-stroke</span><span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    On hover or focus, I provide more information about what this button does
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-tooltip</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></cdr-doc-example-code-pair>
<h3 id="custom-trigger" tabindex="-1"><a class="header-anchor" href="#custom-trigger">#</a> Custom Trigger</h3>
<p>CdrTooltip can also be controlled programmatically using the <code>open</code> prop. However, doing so means that you must implement certain behavior yourself:</p>
<ul>
<li>The CdrTooltip element and the trigger element must be wrapped in a div with <code>position: relative</code> and <code>width: max-content</code>.</li>
<li>The <code>open</code> property should be toggled to true on <code>mouseover</code> and <code>focus</code>, and toggled to false on <code>blur</code> and <code>focus</code>.</li>
<li>The trigger element should set its <code>aria-describedby</code> property set to the ID of the CdrTooltip.</li>
</ul>
<cdr-doc-example-code-pair repository-href="/src/components/CdrTooltip"
:sandbox-data="$page.frontmatter.sandboxData" :model="{open: false}">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span> <span class="token property">width</span><span class="token punctuation">:</span> max-content<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-button</span>
    <span class="token attr-name">@mouseover</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>open = true<span class="token punctuation">"</span></span>
    <span class="token attr-name">@mouseleave</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>open = false<span class="token punctuation">"</span></span>
    <span class="token attr-name">@focus</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>open = true<span class="token punctuation">"</span></span>
    <span class="token attr-name">@blur</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>open = false<span class="token punctuation">"</span></span>
    <span class="token attr-name">:icon-only</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
    <span class="token attr-name">:with-background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
    <span class="token attr-name">aria-describedby</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tooltip-custom-example<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#icon</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>icon-information-stroke</span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-tooltip</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tooltip-custom-example<span class="token punctuation">"</span></span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span> <span class="token attr-name">:open</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>open<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
      On click, I provide additional information to the user
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-tooltip</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div></cdr-doc-example-code-pair>
<h3 id="accessibility" tabindex="-1"><a class="header-anchor" href="#accessibility">#</a> Accessibility</h3>
<p>To ensure your usage of this component complies with accessibility guidelines you are responsible for the following:</p>
<ul>
<li>Set an <code>id</code> property on the CdrTooltip. The component will automatically link that <code>id</code> to the trigger element.</li>
<li>Content passed into the <code>trigger</code> slot must be an actionable element such as a button.</li>
<li>Tooltip content should directly describe the element that triggers it. For example, providing more information or context about what an input does, or adding a textual description of an icon-only buttton.</li>
<li>Avoid rich content. Formatting such as bold text, italics, headings, icons, etc. will not be conveyed through aria-describedby or aria-labelledby.</li>
<li>No interactive content. Any interactive content such as links or buttons should not be placed within a tooltip.</li>
<li>Do not put essential information in tooltips.</li>
<li>Do not use a timeout to hide the tooltip.</li>
</ul>
<p>This component complies with WCAG guidelines by:</p>
<ul>
<li>Adds hover and focus handlers to trigger element to manage tooltip state.</li>
<li>Dynamically sets <code>aria-described-by</code> on the trigger element to point to the id of the tooltip.</li>
<li>Adds <code>role=&quot;tooltip&quot;</code> to the tooltip content.</li>
<li>Tooltip content is visible to screen readers even when it is closed.</li>
<li>Tooltip content can be hovered over without the tooltip closing.</li>
<li>Tooltip can be closed by removing focus from the trigger, removing hover from the trigger or content, or by pressing the <code>esc</code> key.</li>
</ul>
<h2 id="guidelines" tabindex="-1"><a class="header-anchor" href="#guidelines">#</a> Guidelines</h2>
<h3 id="use-when" tabindex="-1"><a class="header-anchor" href="#use-when">#</a> Use when</h3>
<p>When an interface action is expressed solely through iconography, use a tooltip to clarify the action. Only interactive elements should trigger tooltips. The descriptions provided by tooltips should only contain one or two words: “close”, “clear”, or “save” are common examples.</p>
<p>Examples:</p>
<ul>
<li>A text input uses an icon to show that the field can be cleared. Use a tooltip to describe the action: “Clear”</li>
<li>An icon-only button is used to close a modal. Use a tooltip to describe what acting upon the button will do: “Close”</li>
<li>A toolbar within a content editor contains multiple icon-based actions. Use a tooltip to describe what each action does: “Left-align”</li>
<li>A quantity counter uses ‘-’ and ‘+’ symbols to increase or decrease the number of items that will be added to a user’s cart. Use a tooltip to describe the actions: “Decrease quantity” and “Increase quantity”</li>
</ul>
<h3 id="don-t-use-when" tabindex="-1"><a class="header-anchor" href="#don-t-use-when">#</a> Don’t use when</h3>
<ul>
<li>Don’t use a tooltip to provide additional context for form fields. Instead, use a <RouterLink to="/components/popover/">Popover</RouterLink></li>
<li>Don’t add actions or links inside a tooltip. Instead, use a <RouterLink to="/components/popover/">Popover</RouterLink></li>
<li>Don’t use a tooltip to describe a button that already describes itself through copy</li>
</ul>
<p>Example:</p>
<ul>
<li>A credit card security field needs to describe, in detail, where to find the card information. A popover should be used to contain the graphic and card-specific details, not a tooltip</li>
</ul>
<h3 id="do-don-t" tabindex="-1"><a class="header-anchor" href="#do-don-t">#</a> Do / Don't</h3>
<do-dont :examples="$page.frontmatter.consistency" />
<do-dont :examples="$page.frontmatter.redundancy" />
<h2 id="api" tabindex="-1"><a class="header-anchor" href="#api">#</a> API</h2>
<h3 id="props" tabindex="-1"><a class="header-anchor" href="#props">#</a> Props</h3>
<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />
<h3 id="slots" tabindex="-1"><a class="header-anchor" href="#slots">#</a> Slots</h3>
<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />
<h3 id="events" tabindex="-1"><a class="header-anchor" href="#events">#</a> Events</h3>
<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.events" :slots-getting-started-link="false" />
</cdr-doc-table-of-contents-shell>
</template>
