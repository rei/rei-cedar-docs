<template><cdr-doc-table-of-contents-shell parentSelector="h2" childSelector="h3">
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview">#</a> Overview</h2>
<p>CdrToast is a type of non-modal dialog used to communicate the status of a task or process. A proper toast is concise, time-relevant, and temporary.</p>
<p>There are five different options for styling the toast, based on the <RouterLink to="/components/toast/#guidelines">message type</RouterLink>.</p>
<h3 id="default-toast-with-icon" tabindex="-1"><a class="header-anchor" href="#default-toast-with-icon">#</a> Default toast with icon</h3>
<p>A toast should be passed a contextually appropriate icon using the <code>icon-left</code> slot.</p>
<cdr-doc-example-code-pair repository-href="/src/components/CdrToast"
:load-sprite="true"
:sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrToast, CdrButton, IconCheckFill'})" :model="{ opened: false }" >
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opened = true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Trigger toast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-button</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- CdrToast should always be contained within an absolutely 
  positioned element in the top right of your page --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span> <span class="token property">top</span><span class="token punctuation">:</span> 2rem<span class="token punctuation">;</span> <span class="token property">right</span><span class="token punctuation">:</span> 1.5rem</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-toast</span>
      <span class="token attr-name">:open</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opened<span class="token punctuation">"</span></span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span>
      <span class="token attr-name">@closed</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opened = false<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#icon-left</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>icon-check-fill</span> <span class="token attr-name">inherit-color</span><span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      I am a success toast
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-toast</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></cdr-doc-example-code-pair>
<h3 id="persistent-toast" tabindex="-1"><a class="header-anchor" href="#persistent-toast">#</a> Persistent toast</h3>
<p>CdrToast provides an optional <code>autoDismiss</code> property to disable the auto-dismiss functionality.</p>
<cdr-doc-example-code-pair repository-href="/src/components/CdrToast"
:load-sprite="true"
:sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrToast, CdrChip, IconWarningFill'})" :model="{ opened: false }" >
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-chip</span>
    <span class="token attr-name">:aria-pressed</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opened<span class="token punctuation">"</span></span>
    <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opened = true<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
    Trigger toast
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-chip</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- CdrToast should always be contained within an absolutely 
  positioned element in the top right of your page --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span> <span class="token property">top</span><span class="token punctuation">:</span> 2rem<span class="token punctuation">;</span> <span class="token property">right</span><span class="token punctuation">:</span> 1.5rem</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-toast</span>
      <span class="token attr-name">:open</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opened<span class="token punctuation">"</span></span>
      <span class="token attr-name">:auto-dismiss</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span>
      <span class="token attr-name">@closed</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opened = false<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#icon-left</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>icon-warning-fill</span> <span class="token attr-name">inherit-color</span><span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      I am a warning toast and must be dismissed by user action
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-toast</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div></cdr-doc-example-code-pair>
<h3 id="adjusting-auto-dismiss-timing" tabindex="-1"><a class="header-anchor" href="#adjusting-auto-dismiss-timing">#</a> Adjusting auto-dismiss timing</h3>
<p>CdrToast provides an optional <code>dismissDelay</code> property to adjust timing of the automatic dimissal under certain conditions, such as when the toast contains an action.</p>
<cdr-doc-example-code-pair repository-href="/src/components/CdrToast"
:load-sprite="true"
:sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrToast, CdrButton, CdrLink, IconInformationFill'})" :model="{ opened: false }" >
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opened = true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Trigger toast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-button</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- CdrToast should always be contained within an absolutely 
  positioned element in the top right of your page --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span> <span class="token property">top</span><span class="token punctuation">:</span> 2rem<span class="token punctuation">;</span> <span class="token property">right</span><span class="token punctuation">:</span> 1.5rem</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-toast</span>
      <span class="token attr-name">:open</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opened<span class="token punctuation">"</span></span>
      <span class="token attr-name">:dismiss-delay</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10000<span class="token punctuation">"</span></span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span>
      <span class="token attr-name">@closed</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opened = false<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#icon-left</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>icon-information-fill</span> <span class="token attr-name">inherit-color</span><span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      I am an informational toast with an <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>action<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-link</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-toast</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></cdr-doc-example-code-pair>
<h3 id="accessibility" tabindex="-1"><a class="header-anchor" href="#accessibility">#</a> Accessibility</h3>
<ul>
<li>All CdrToast components provide <code>role=&quot;status&quot;</code> to expose the notification to Accessibility APIs</li>
</ul>
<p>Many WCAG requirements are contextual to their implementation. To ensure that usage of this component complies with accessibility guidelines you are responsible for the following:</p>
<ul>
<li>Don't rely on color alone to convey your message. Provide an additional indicator to color, like an icon: <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html" target="_blank" rel="noopener noreferrer">WCAG 1.4.1<ExternalLinkIcon/></a></li>
<li>Error Identification techniques and criteria: <a href="https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html" target="_blank" rel="noopener noreferrer">WCAG 3.3.1<ExternalLinkIcon/></a></li>
<li>See <a href="../../patterns/status-notifications#transient-status-notifications">Transient Status Notifications</a> for more information</li>
</ul>
<h2 id="guidelines" tabindex="-1"><a class="header-anchor" href="#guidelines">#</a> Guidelines</h2>
<p>There are five information types supported for toasts: <strong>error, warning, success, informational, and default</strong>. Each type corresponds with a color and icon to provide a consistent, universal experience for users.</p>
<h3 id="information-types" tabindex="-1"><a class="header-anchor" href="#information-types">#</a> Information types</h3>
<h4 id="error" tabindex="-1"><a class="header-anchor" href="#error">#</a> <strong>Error</strong></h4>
<p>Use to inform that something went wrong. They affect or block the user's experience and must be resolved before moving forward.</p>
<h4 id="warning" tabindex="-1"><a class="header-anchor" href="#warning">#</a> <strong>Warning</strong></h4>
<p>Use for a message requiring attention but not resolution in order to continue. Warning toasts might tell a user what could happen if they don’t address what they’re being warned about.</p>
<h4 id="success" tabindex="-1"><a class="header-anchor" href="#success">#</a> <strong>Success</strong></h4>
<p>Use to communicate that an action has been successfully completed. Provides a positive response to user actions. No action is required.</p>
<h4 id="informational" tabindex="-1"><a class="header-anchor" href="#informational">#</a> <strong>Informational</strong></h4>
<p>Use to provide context around a situation. No action is required.</p>
<h4 id="default" tabindex="-1"><a class="header-anchor" href="#default">#</a> <strong>Default</strong></h4>
<p>Use to provide generic messaging that does not fit the other types</p>
<h3 id="use-when" tabindex="-1"><a class="header-anchor" href="#use-when">#</a> Use when</h3>
<ul>
<li>Confirming that a task or process initiated by the user was completed successfully</li>
<li>Providing contextual information on the page processes</li>
<li>Read more about using Toasts for <a href="../../patterns/status-notifications#transient-status-notifications">Transient Status Notifications</a></li>
</ul>
<h3 id="don-t-use-when" tabindex="-1"><a class="header-anchor" href="#don-t-use-when">#</a> Don’t use when</h3>
<ul>
<li>When a user’s input is required</li>
<li>When critical information is being communicated</li>
<li>When communicating alerts</li>
</ul>
<h3 id="content" tabindex="-1"><a class="header-anchor" href="#content">#</a> Content</h3>
<ul>
<li>An icon is both user-configurable and required</li>
<li>Titles should not exceed three words</li>
<li>Body copy should not exceed two lines</li>
<li>Content should be focused and be specific to a single message</li>
<li>Actions or links must be available elsewhere on the page</li>
</ul>
<h3 id="structure" tabindex="-1"><a class="header-anchor" href="#structure">#</a> Structure</h3>
<ul>
<li>The width of a toast is fixed for non-mobile implementations</li>
<li>The height of a toast is variable, content depending</li>
</ul>
<h3 id="behavior" tabindex="-1"><a class="header-anchor" href="#behavior">#</a> Behavior</h3>
<ul>
<li>Toasts auto-dismiss after 5 seconds—ten if it includes an action</li>
<li>Toasts may be manually dismissed sooner via the close button</li>
<li>Mousing over a toast will pause the auto-dismiss timer and reset it on mouse leave.</li>
</ul>
<h3 id="placement" tabindex="-1"><a class="header-anchor" href="#placement">#</a> Placement</h3>
<ul>
<li>Toasts are delivered from the top-right of a page</li>
<li>The most recent toast is always displayed on top of a stack</li>
</ul>
<h2 id="api" tabindex="-1"><a class="header-anchor" href="#api">#</a> API</h2>
<h3 id="props" tabindex="-1"><a class="header-anchor" href="#props">#</a> Props</h3>
<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />
<h3 id="slots" tabindex="-1"><a class="header-anchor" href="#slots">#</a> Slots</h3>
<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />
<h3 id="events" tabindex="-1"><a class="header-anchor" href="#events">#</a> Events</h3>
<cdr-doc-api type="event" :api-data="$page.frontmatter.versions[0].components[0].api.events" />
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage">#</a> Usage</h2>
<h3 id="positioning" tabindex="-1"><a class="header-anchor" href="#positioning">#</a> Positioning</h3>
<p>CdrToast component(s) should be contained within a <code>position: absolute</code> container in the top-right corner of your page. On smaller screens, they should appear at the top of the page and span the whole width of the viewport.</p>
<h3 id="elevation" tabindex="-1"><a class="header-anchor" href="#elevation">#</a> Elevation</h3>
<p>The CdrToast container should be be given an appropriate <code>z-index</code> value so that the toast components within will &quot;float&quot; on top of the other page elements.</p>
<h3 id="multiples" tabindex="-1"><a class="header-anchor" href="#multiples">#</a> Multiples</h3>
<p>If multiple CdrToast components are present, they should appear stacked with the newest at the bottom. Note: When a toast is closed, any toast components below it will take the place of the one above.</p>
</cdr-doc-table-of-contents-shell>
</template>
