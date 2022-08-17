<template><cdr-doc-table-of-contents-shell parentSelector="h2" childSelector="h3">
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview">#</a> Overview</h2>
<p>Design tokens are special variables used to maintain a scalable visual system for UI development and brand consistency. Cedar design tokens store the visual design attributes that define the foundation of REI’s visual language, including color, typography, and spacing.</p>
<p>Visit the <RouterLink to="/tokens/all-tokens/">All Tokens</RouterLink> page for a complete list of available design tokens.</p>
<p>Design tokens are key-value pairs. For example:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Key: value;
cdr-color-text-primary: rgba(12, 11, 8, 0.75);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul>
<li>The key name defines the usage or how to apply the value to a specific context, such as using text on a light background</li>
<li>The key stores visual design attributes</li>
<li>The key replaces hard-coded values, such as hex values for color or pixel values for spacing</li>
</ul>
<h3 id="contract-of-intent" tabindex="-1"><a class="header-anchor" href="#contract-of-intent">#</a> Contract of Intent</h3>
<ul>
<li>Tokens are versioned and maintained by the design systems team</li>
<li>Consumers are required to stay within one major version of the current release</li>
<li>Contract of intent will not change when a variable value is updated over time</li>
</ul>
<h3 id="benefits" tabindex="-1"><a class="header-anchor" href="#benefits">#</a> Benefits</h3>
<h4 id="improved-ui-development" tabindex="-1"><a class="header-anchor" href="#improved-ui-development">#</a> Improved UI Development</h4>
<ul>
<li>Promotes greater visual consistency and maintainability (when there are changes to brand elements)</li>
<li>Aligns with brand standards</li>
<li>Consumers can stay in sync with any changes to the visual language with minimal impact to the code</li>
</ul>
<h4 id="ease-of-maintainability" tabindex="-1"><a class="header-anchor" href="#ease-of-maintainability">#</a> Ease of Maintainability</h4>
<p>Design Tokens can streamline redesign processes when:</p>
<ul>
<li>The Cedar team updates a <strong>value</strong> (such as with a new typeface or color hex value), the <strong>tokens</strong> do not need to be changed in code by consumers</li>
<li>Teams can consume these changes from SEMVER releases to our supported packages</li>
</ul>
<h4 id="brand-consistency-on-any-platform" tabindex="-1"><a class="header-anchor" href="#brand-consistency-on-any-platform">#</a> Brand Consistency on Any Platform</h4>
<ul>
<li>Extends the distribution of the REI visual language across platforms</li>
<li>Ensures brand consistency across all digital channels</li>
</ul>
<h4 id="extensibility" tabindex="-1"><a class="header-anchor" href="#extensibility">#</a> Extensibility</h4>
<ul>
<li>Designers and developers have access to design tokens when creating custom components for their applications (within brand standards)</li>
</ul>
<h3 id="use-when" tabindex="-1"><a class="header-anchor" href="#use-when">#</a> Use When</h3>
<p>Design Tokens can be used by teams:</p>
<ul>
<li>To supplement components when designing page layouts</li>
<li>To create custom components that are visually aligned to the REI brand styles</li>
<li>To create new components that can be contributed back to the system</li>
<li>When there are technical limitations to consuming components</li>
</ul>
<h3 id="don-t-use-when" tabindex="-1"><a class="header-anchor" href="#don-t-use-when">#</a> Don't Use When</h3>
<ul>
<li>Don’t use design tokens to make modifications to an existing Cedar component. <strong>Instead,</strong> submit a request on <a href="https://rei.slack.com/messages/CA58YCGN4" target="_blank" rel="noopener noreferrer">#cedar-user-support<ExternalLinkIcon/></a> or come and talk to us during our weekly office hours on how to support your needs on an existing component.</li>
<li>Don’t use design tokens to only access a value or values when the token name does not match it's application (for example, don't use a 'color-background-button' token to style a border or an element that is not a button). <strong>Instead</strong> create a local variable in your project or hardcode the desired value.</li>
</ul>
<p>Questions about when to use design tokens? Ask the Cedar team in <a href="https://rei.slack.com/messages/CA58YCGN4" target="_blank" rel="noopener noreferrer">#cedar-user-support<ExternalLinkIcon/></a></p>
<hr/>
<h2 id="token-criteria" tabindex="-1"><a class="header-anchor" href="#token-criteria">#</a> Token Criteria</h2>
<h4 id="is-cdr-color-text-primary-a-design-token" tabindex="-1"><a class="header-anchor" href="#is-cdr-color-text-primary-a-design-token">#</a> Is <strong>“cdr-color-text-primary</strong> a design token?</h4>
<cdr-table>
  <tbody>
    <tr>
      <td>Is “cdr-color-text-primary used in several components or layouts?</td>
      <td>Yes </td>
    </tr>
    <tr>
      <td>Is it clear where this is to be used based on its name? </td>
      <td>Yes </td>
    <tr>
      <td>If I apply this design token in my component and use it to specify the color for primary text will it still be used for the primary text color in a future design update? </td>
      <td>Yes </td>
    </tr>
    <tr>
      <td>Is this design token used for multiple elements and NOT specific to one element? </td>
      <td>Yes </td>
    </tr>
  </tbody>
</cdr-table>
<p><strong>Result:</strong> All of the criteria are met and so <strong>“cdr-color-text-primary</strong> qualifies as a design token.</p>
<br>
<br>
<h4 id="is-easily-excited-a-design-token" tabindex="-1"><a class="header-anchor" href="#is-easily-excited-a-design-token">#</a> Is <strong>“easily-excited”</strong> a design token?</h4>
<cdr-table>
  <tbody>
    <tr>
      <td>Is “easily-excited” used in several components or layouts? </td>
      <td>Yes </td>
    </tr>
    <tr>
      <td>Is it clear where this is to be used based on its name? </td>
      <td><b>No</b></td>
    </tr>
    <tr>
      <td>If I apply this design token in my component and use it to specify a color will it still be used for that color in a future design update? </td>
      <td>Yes </td>
    </tr>
    <tr>
      <td>Is this design token used for multiple elements and NOT specific to one element? </td>
      <td><b>Perhaps but it is not used consistently</b></td>
    </tr>
  </tbody>
</cdr-table>
<p><strong>Result:</strong> Only two criteria are met and so <strong>“easily-excited”</strong> does not qualify as a design token.</p>
<br>
<hr/>
<h2 id="naming-structure-for-design-tokens" tabindex="-1"><a class="header-anchor" href="#naming-structure-for-design-tokens">#</a> Naming Structure for Design Tokens</h2>
<p>The naming structure for design tokens follows:</p>
<ul>
<li><strong>Category:</strong> Top level that contains foundational elements such as <code>text</code>, <code>color</code>, <code>spacing</code></li>
<li><strong>Sub-Category:</strong> Describes and narrows category for token. For instance, <code>color-text</code> will define a color for text and can be used for icons</li>
<li><strong>Item:</strong> Continues to narrows usage for token. For example, if text is a property, the item could be <code>form</code> to indicate text used in a form control</li>
<li><strong>Sub-Item:</strong> Describes and narrows category for token. For instance, <code>form</code> could be modified by <code>input</code></li>
<li><strong>Variant:</strong> Describes prominence or state for a token</li>
<li><strong>Size:</strong> Describes size for a token, if applicable</li>
</ul>
<p>The below tables for the naming structure show that levels will be skipped when not used.</p>
<p>| Category | Sub-Category | Item | Sub-Item | Variant | Size |
| -- | -- | -- | -- | -- | -- | -- |
| <code>color</code> | <code>text</code> | <code>input</code> | <code>label</code> | ||
| <code>color</code> | <code>background</code> | | | <code>primary</code> ||
| <code>text</code> |  | <code>heeading</code> | | <code>serif</code> | <code>800</code>|</p>
<br>
<hr/>
<h2 id="how-to-use-tokens" tabindex="-1"><a class="header-anchor" href="#how-to-use-tokens">#</a> How to Use Tokens</h2>
<h3 id="for-designers" tabindex="-1"><a class="header-anchor" href="#for-designers">#</a> For Designers</h3>
<p>Token libraries are automatically available in the Assets panel when you create a new file in Figma. These libraries contain color, type, spacing, prominence, and icon styles that correspond to Cedar tokens.</p>
<p>When using design tokens, it’s your responsibility to pass the entire design token name to the developer during the design hand-off process—this can be through automated or manual methods.</p>
<p>For more information, see <RouterLink to="/getting-started/as-a-designer/">Getting Started As A Designer</RouterLink>.</p>
<h3 id="for-developers" tabindex="-1"><a class="header-anchor" href="#for-developers">#</a> For Developers</h3>
<p>A base requirement for using Cedar design tokens is that you are able to consume and maintain packages through the following development processes:</p>
<ul>
<li>Web consumers:
<ul>
<li>Your project can compile CSS variables</li>
<li>You can import NPM packages</li>
</ul>
</li>
<li>Native iOS:
<ul>
<li>You can import CocoaPods</li>
</ul>
</li>
</ul>
<h4 id="install" tabindex="-1"><a class="header-anchor" href="#install">#</a> Install</h4>
<p>To install the <a href="https://www.npmjs.com/package/@rei/cdr-tokens" target="_blank" rel="noopener noreferrer">CdrToken package<ExternalLinkIcon/></a> from npm:</p>
<p><code>npm install --save-dev @rei/cdr-tokens</code></p>
<p>Your project must be able to compile SCSS or LESS in order to make use of the SCSS and LESS modules.</p>
<p>The CdrToken package contains <code>/dist/less</code> and <code>/dist/scss</code> folders, each of which contains <code>cdr-tokens.{less|scss}</code> files with all the design tokens in the corresponding format.</p>
<p>Alternatively you could use <code>/dist/js</code> and/or <code>/dist/json</code> if your project cannot build SCSS and LESS.</p>
<h4 id="usage" tabindex="-1"><a class="header-anchor" href="#usage">#</a> Usage</h4>
<p>SCSS example:</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token keyword">@import</span> <span class="token string">'@rei/cdr-tokens/dist/scss/cdr-tokens.scss'</span><span class="token punctuation">;</span> <span class="token comment">/* import the design tokens file */</span>

<span class="token selector">.your-default-text-class </span><span class="token punctuation">{</span>
  <span class="token comment">/* use mixins to apply many properties at once */</span>
  <span class="token keyword">@include</span> cdr-text-default<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.your-other-default-text-class </span><span class="token punctuation">{</span>
  <span class="token comment">/* using SCSS placeholder selectors instead of mixins can optimize your final CSS output */</span>
  <span class="token keyword">@extend</span> <span class="token placeholder selector">%cdr-text-default</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.your-other-text-class </span><span class="token punctuation">{</span>
  <span class="token comment">/* use scss variables if you need to apply specific properties */</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$cdr-color-text-error</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>LESS example:</p>
<div class="language-less ext-less line-numbers-mode"><pre v-pre class="language-less"><code><span class="token variable">@import</span> <span class="token string">'@rei/cdr-tokens/dist/less/cdr-tokens.less'</span><span class="token punctuation">;</span> <span class="token comment">/* import the desogn tokens file */</span>

<span class="token selector">.your-default-text-class</span> <span class="token punctuation">{</span>
  <span class="token comment">/* use mixins to apply many properties at once */</span>
  .<span class="token function">cdr-text-default</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.your-other-text-class</span> <span class="token punctuation">{</span>
  <span class="token comment">/* use variables if you need to apply specific properties */</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">@cdr-color-text-error</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>JavaScript example:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> CdrBreakpointLg <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@rei/cdr-tokens'</span><span class="token punctuation">;</span> <span class="token comment">/* import the design tokens file */</span>

<span class="token keyword">let</span> screenWidth <span class="token operator">=</span> window<span class="token punctuation">.</span>innerWidth <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token comment">// Detect Large Breakpoint</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>screenWidth <span class="token operator">>=</span> CdrBreakpointLg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Do Something</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>This repository follows SEMVER practices and will notify users of changes and updates on the #cedar-user-support Slack channel.</p>
<hr/>
<h2 id="adding-design-tokens-to-the-repository" tabindex="-1"><a class="header-anchor" href="#adding-design-tokens-to-the-repository">#</a> Adding Design Tokens to the Repository</h2>
<p>If you have a request for a design token that is missing from the <RouterLink to="/tokens/all-tokens/">Cedar Tokens</RouterLink> list you can submit a request to <a href="https://rei.slack.com/messages/CA58YCGN4" target="_blank" rel="noopener noreferrer">#cedar-user-support<ExternalLinkIcon/></a> or come and talk to us during our weekly office hours.</p>
<p>Ensure that the design token meets the following requirements:</p>
<ul>
<li>Design token is used in several components or layouts</li>
<li>Design token is used for multiple elements and NOT specific to one element</li>
<li>Design token name will continue to have the same semantic meaning in future releases</li>
<li>Design token name follows platform requirements:
<ul>
<li><strong>Web:</strong> Uses Kebab case. For example, cdr-color-background-primary</li>
<li><strong>iOS:</strong> Uses Pascal case. For example, CdrColorBackgroundPrimary</li>
<li><strong>Android:</strong> Uses Snake case. For example, cdr_color_background_primary</li>
</ul>
</li>
</ul>
<hr/>
</cdr-doc-table-of-contents-shell>
</template>
