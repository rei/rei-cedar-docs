<template><cdr-doc-table-of-contents-shell parentSelector="h2" childSelector="h3">
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview">#</a> Overview</h2>
<p>Component variables provide a versioned method for teams to:</p>
<ul>
<li>Import the exact CSS styles used in the Cedar Vue component</li>
<li>Apply these exact CSS styles to elements in their project</li>
</ul>
<p>Component variables are only available for a core subset of Cedar components, and are distributed in SCSS and LESS format.</p>
<p>Component variables include mixins such as <code>@include cdr-button-base-mixin</code> which sets many properties on an element. Each component has a <code>base</code> mixin which sets properties that apply to all components of that type, as well as <code>modifier</code> mixins which only apply to a specific variant of that component</p>
<p>For example, you can import the styling for a Cedar primary button component using a mixin:</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token selector">.your-button-component </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> cdr-button-base-mixin<span class="token punctuation">;</span>
  <span class="token keyword">@include</span> cdr-button-primary-mixin<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Test out what you can do with the component variables in this <a href="https://codesandbox.io/s/qkwn78nw99" target="_blank" rel="noopener noreferrer">CodeSandbox<ExternalLinkIcon/></a>.</p>
<p>See the <a href="https://github.com/rei/rei-cedar-component-variables-example" target="_blank" rel="noopener noreferrer">component variables example project<ExternalLinkIcon/></a> for a template demonstrating how to use Cedar tokens and component variables to generate a unique CSS stylesheet that applies Cedar styles to arbitrary HTML markup.</p>
<h3 id="contract-of-intent" tabindex="-1"><a class="header-anchor" href="#contract-of-intent">#</a> Contract of Intent</h3>
<p>Versioning</p>
<ul>
<li>Component variables are a versioned export of the exact CSS styles being used in the Cedar Vue components</li>
<li>Whenever a major version of Cedar is released, a corresponding major version of component variables will also be published</li>
<li>For minor or patch versions of Cedar, component variables will only be published if there were changes made to the distributed files</li>
<li>Outside of the Cedar release schedule, patch versions of component variables will only be issued if a bug is found in the distribution</li>
</ul>
<p>Semantic naming</p>
<ul>
<li>Component variable mixins are semantically named based on the component being styled, how the style is intended to be used, and the CSS property being targeted</li>
<li>Teams must only use component variables when semantically appropriate</li>
</ul>
<hr />
<h3 id="use-when" tabindex="-1"><a class="header-anchor" href="#use-when">#</a> Use When</h3>
<ul>
<li>Your project does not use Vue.js, but you want to use Cedar</li>
<li>Your component must visually match an existing Cedar component, but not it's functionality. For example, a <code>vue-router</code> link component that looks like a <code>CdrLink</code> component</li>
<li>Your project requires the smallest possible bundle size, and your team is willing to take on the additional maintenance cost of using component variables instead of the Vue.js Cedar components</li>
</ul>
<h3 id="don-t-use-when" tabindex="-1"><a class="header-anchor" href="#don-t-use-when">#</a> Don't Use When</h3>
<ul>
<li>Do not use the component variables in a non-semantic way. For example, <code>cdr-button-base-mixin</code> should only ever be used to style a button element</li>
<li>Do not use component variables to publish clones or forks of existing Cedar components. Instead, work with the Cedar team to find a long term solution to support your use case</li>
</ul>
<hr/>
<h2 id="naming-structure" tabindex="-1"><a class="header-anchor" href="#naming-structure">#</a> Naming Structure</h2>
<p>The naming structure for component variables and mixins is as follows:</p>
<ul>
<li><strong>Namespace:</strong> Top level namespace <code>cdr</code></li>
<li><strong>Component:</strong> Name of the Cedar component for the exported variable</li>
<li><strong>Modifier:</strong> Variant of Cedar component for the exported variable
<ul>
<li>Base modifier (<code>base-</code>) indicates variables that apply to all instances of that Cedar component</li>
<li>Additional modifiers can be stacked on top of that</li>
<li>For example, to make a primary large button you would use the variables that have <code>base</code>, <code>primary</code>, and <code>large</code> modifiers</li>
</ul>
</li>
<li><strong>Sub-Element:</strong> Indicates a sub-element of a component. For example, <code>cdr-input-base-label-color</code> indicates the color of the label element used inside the input component</li>
<li><strong>State:</strong> Describes the interactive state that this variable is applied to. These correspond to CSS selectors such as <code>:focus</code>, <code>:active</code>, <code>:hover</code>, <code>:disabled</code>, etc.</li>
</ul>
<h3 id="examples" tabindex="-1"><a class="header-anchor" href="#examples">#</a> Examples</h3>
<cdr-table>
  <thead>
    <tr>
      <th width=240>
        Namespace
      </th>
      <th width=240>
        Component
      </th>
      <th width=240>
        Modifier
      </th>
      <th width=240>
        Sub-Element
      </th>
      <th width=240>
        State
      </th>
      <th width=240>
        Mixin
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>cdr-</td>
      <td>input-</td>
      <td>base-</td>
      <td></td>
      <td></td>
      <td>mixin</td>
    </tr>
    <tr>
      <td>cdr-</td>
      <td>button-</td>
      <td>secondary-</td>
      <td></td>
      <td></td>
      <td>mixin</td>
    </tr>
    <tr>
      <td>cdr-</td>
      <td>breadcrumb-</td>
      <td></td>
      <td>item-</td>
      <td>linked-</td>
      <td>mixin</td>
    </tr>
    <tr>
      <td>cdr-</td>
      <td>select-</td>
      <td>base-</td>
      <td>label-</td>
      <td>disabled-</td>
      <td>mixin</td>
    </tr>
  </tbody>
</cdr-table>
<br>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage">#</a> Usage</h2>
<h3 id="install" tabindex="-1"><a class="header-anchor" href="#install">#</a> Install</h3>
<p>The component variables inherit values from the Cedar design tokens, so you will need to install both packages and keep them in sync when updating:</p>
<p><code>npm install --save-dev @rei/cdr-tokens @rei/cdr-component-variables</code></p>
<p>SCSS example:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>@import '@rei/cdr-tokens/dist/scss/cdr-tokens.scss'; /* import the tokens file */
@import '@rei/cdr-component-variables/dist/scss/index.scss'; /* import the component variables */

.your-button-class {
  /* use mixins to apply many properties at once */
  @include cdr-button-base-mixin;
  @include cdr-button-primary-mixin;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>LESS example:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>@import '@rei/cdr-tokens/dist/less/cdr-tokens.less'; /* import the tokens file */
@import '@rei/cdr-component-variables/dist/less/index.less'; /* import the component variables */

.your-button-class {
  /* use mixins to apply many properties at once */
  .cdr-button-base-mixin();
  .cdr-button-primary-mixin();
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="examples-1" tabindex="-1"><a class="header-anchor" href="#examples-1">#</a> Examples</h2>
<component-variables-page />
<p>Questions about when to use component variables? Ask the Cedar team in <a href="https://rei.slack.com/messages/CA58YCGN4" target="_blank" rel="noopener noreferrer">#cedar-user-support<ExternalLinkIcon/></a></p>
</cdr-doc-table-of-contents-shell>
</template>
