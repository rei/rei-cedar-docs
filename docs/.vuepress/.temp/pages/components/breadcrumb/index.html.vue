<template><cdr-doc-table-of-contents-shell>
# Overview
## Truncated (Default)
<p>Long breadcrumb path shortened to display the last 2 items with hidden links indicated by ellipsis.</p>
<cdr-doc-example-code-pair repository-href="/src/components/breadcrumb" :sandbox-data="$page.frontmatter.sandboxData" :backgroundToggle="false" :codeMaxHeight= false>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-breadcrumb</span>
      <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[
        {item:{url:<span class="token punctuation">'</span><span class="token punctuation">'</span>, name: <span class="token punctuation">'</span>Kids\<span class="token punctuation">'</span> Clothing<span class="token punctuation">'</span>}},
        {item:{url:<span class="token punctuation">'</span><span class="token punctuation">'</span>, name: <span class="token punctuation">'</span>Kids\<span class="token punctuation">'</span> Clothing Accessories<span class="token punctuation">'</span>}},
        {item:{url:<span class="token punctuation">'</span><span class="token punctuation">'</span>, name: <span class="token punctuation">'</span>Kids\<span class="token punctuation">'</span> Snowboard Gloves and Mittens<span class="token punctuation">'</span>}},
        {item:{url:<span class="token punctuation">'</span><span class="token punctuation">'</span>, name: <span class="token punctuation">'</span>Kids\<span class="token punctuation">'</span> Gloves<span class="token punctuation">'</span>}},
        {item:{url:<span class="token punctuation">'</span><span class="token punctuation">'</span>, name: <span class="token punctuation">'</span>Kids\<span class="token punctuation">'</span> Insulated Gloves<span class="token punctuation">'</span>}},
      ]<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></cdr-doc-example-code-pair>
<h3 id="untruncated" tabindex="-1"><a class="header-anchor" href="#untruncated">#</a> Untruncated</h3>
<p>Complete breadcrumb string with all items visible.</p>
<cdr-doc-example-code-pair repository-href="/src/components/breadcrumb" :sandbox-data="$page.frontmatter.sandboxData" :backgroundToggle="false" :codeMaxHeight= false >
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-breadcrumb</span>
    <span class="token attr-name">:truncation-enabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span>
    <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[
      {item:{url:<span class="token punctuation">'</span><span class="token punctuation">'</span>, name: <span class="token punctuation">'</span>Snowboarding<span class="token punctuation">'</span>}},
      {item:{url:<span class="token punctuation">'</span><span class="token punctuation">'</span>, name: <span class="token punctuation">'</span>Snowboard Clothing<span class="token punctuation">'</span>}},
      {item:{url:<span class="token punctuation">'</span><span class="token punctuation">'</span>, name: <span class="token punctuation">'</span>Kids\<span class="token punctuation">'</span> Snowboard Clothing<span class="token punctuation">'</span>}}
    ]<span class="token punctuation">"</span></span>
  <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="custom-navigation" tabindex="-1"><a class="header-anchor" href="#custom-navigation">#</a> Custom Navigation</h2>
<p>Can be used to override the default link navigation behavior inside a breadcrumb.</p>
<cdr-doc-example-code-pair repository-href="/src/components/breadcrumb" :sandbox-data="$page.frontmatter.sandboxData" :backgroundToggle="false" :methods="{handleNavigation(bc, e) {e.preventDefault(); this.lastClicked = bc.item.name}}" :model="{lastClicked: ''}">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-breadcrumb</span> <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[
    {item:{url:<span class="token punctuation">'</span>/snowboarding<span class="token punctuation">'</span>, name: <span class="token punctuation">'</span>Snowboarding<span class="token punctuation">'</span>}},
    {item:{url:<span class="token punctuation">'</span>/snowboarding/clothing<span class="token punctuation">'</span>, name: <span class="token punctuation">'</span> Clothing<span class="token punctuation">'</span>}}
  ]<span class="token punctuation">"</span></span>
  <span class="token attr-name">@navigate</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleNavigation<span class="token punctuation">"</span></span>
  <span class="token punctuation">/></span></span>

  Last Clicked: {{ lastClicked }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></cdr-doc-example-code-pair>
<h2 id="accessibility" tabindex="-1"><a class="header-anchor" href="#accessibility">#</a> Accessibility</h2>
<p>To ensure that usage of this component complies with accessibility guidelines:</p>
<ul>
<li>Indicate the current page location within a hierarchy using breadcrumbs</li>
<li>Do not include the current page in breadcrumb path because the <code>aria-current</code> attribute is not defined for the last item</li>
</ul>
<br>
<p>This component has compliance with WCAG guidelines by:</p>
<ul>
<li>Using text color with a Level AA contrast ratio of 4.5:1 contrast between the text color and the background but only when displayed on light backgrounds</li>
<li>Defining the attribute <code>aria-label=&quot;Breadcrumb&quot;</code>  in the  <code>&lt;nav&gt;</code>  element to identify the structure of  <code>cdr-breadcrumb</code>  as a breadcrumb path for assistive technologies</li>
<li>Defining that the ellipsis button contains the  <code>aria-expanded=&quot;false&quot;</code>  attribute when the user has the ability to expand the breadcrumb path</li>
<li>Applying focus to the first breadcrumb item when the ellipsis button is clicked</li>
</ul>
<hr>
<h1 id="guidelines" tabindex="-1"><a class="header-anchor" href="#guidelines">#</a> Guidelines</h1>
<h2 id="use-when" tabindex="-1"><a class="header-anchor" href="#use-when">#</a> Use When</h2>
<ul>
<li>Helping users understand where they are within the site hierarchy</li>
<li>Providing a shortcut to explore similar products within common parent categories</li>
</ul>
<h2 id="don-t-use-when" tabindex="-1"><a class="header-anchor" href="#don-t-use-when">#</a> Don’t Use When</h2>
<ul>
<li>Displaying a top-level page, such as a home or high-level category page</li>
<li>Linking to previous steps of a sequential process</li>
</ul>
<h2 id="the-basics" tabindex="-1"><a class="header-anchor" href="#the-basics">#</a> The Basics</h2>
<p>Breadcrumbs provide context and a sense of place. This is especially important on a small screen, where other orienting content isn’t visible.</p>
<ul>
<li>Include the full location path data once and only once in the code</li>
<li>Always retain the full location path in page markup, even if shortened due to responsive styling</li>
<li>Display the complete breadcrumb path—not just the previous item—when an ellipsis is clicked or tapped</li>
<li>When full breadcrumbs path is displayed, it may wrap to 2 or more lines</li>
<li>Avoid displaying breadcrumbs on non-white backgrounds</li>
<li>Refer to API documentation for how to customize breadcrumb truncation width</li>
</ul>
<h2 id="content" tabindex="-1"><a class="header-anchor" href="#content">#</a> Content</h2>
<ul>
<li>Always align breadcrumb labels with page names that are the destination of that breadcrumb</li>
<li>Incorporate keywords into page names and breadcrumbs to improve SEO</li>
<li>Align breadcrumb labels with words customers use while searching for products, events, adventures, or expert advice</li>
<li>Never include the current page in a breadcrumb path. Instead, display that label only as a page title</li>
<li>Guidelines for applying breadcrumb category names are found in the <a href="https://confluence.rei.com/display/NAV/Breadcrumb+Guidance" target="_blank" rel="noopener noreferrer">REI Navigation Standards: Breadcrumbs<ExternalLinkIcon/></a> article</li>
<li>For items in multiple categories and no primary path has been identified, display the most relevant path:
<ul>
<li>If an article lives in both Hiking and Camping, and the user browsed to the article through Hiking, show the breadcrumb that includes Hiking</li>
<li>If the user browsed to the same article through Camping, show the breadcrumb that includes Camping</li>
<li>If the user landed on the article from a Google search, show either category as a breadcrumb</li>
</ul>
</li>
</ul>
<h2 id="behavior" tabindex="-1"><a class="header-anchor" href="#behavior">#</a> Behavior</h2>
<ul>
<li>Emphasize breadcrumb hover states with an underline</li>
</ul>
<cdr-img class="cdr-doc-article-img" alt="Breadcrumb hover state is emphasized using link color and underline" :src="$withBase(`/breadcrumb/Spec__Breadcrumb_Long_16-2.png`)" />
<h3 id="do-don-t" tabindex="-1"><a class="header-anchor" href="#do-don-t">#</a> Do / Don't</h3>
<do-dont :examples="$page.frontmatter.path" />
<h3 id="truncation" tabindex="-1"><a class="header-anchor" href="#truncation">#</a> Truncation</h3>
<p>Indicate hidden links using an ellipsis.</p>
<cdr-img class="cdr-doc-article-img" alt="breadcrumbs truncated with ellipsis" :src="$withBase(`/breadcrumb/Spec__Breadcrumb_Truncated_16-2.png`)" />
<p>Truncate breadcrumbs left to right to show the final two links in the trail, so that at least the parent and grandparent are always visible.</p>
<do-dont :examples="$page.frontmatter.truncation" />
<h3 id="avoid-customization" tabindex="-1"><a class="header-anchor" href="#avoid-customization">#</a> Avoid Customization</h3>
<do-dont :examples="$page.frontmatter.path_symbol" />
<do-dont :examples="$page.frontmatter.link" />
<h2 id="resources" tabindex="-1"><a class="header-anchor" href="#resources">#</a> Resources</h2>
<ul>
<li><a href="https://confluence.rei.com/display/NAV/Breadcrumb+Guidance" target="_blank" rel="noopener noreferrer">REI Navigation Standards: Breadcrumbs<ExternalLinkIcon/></a></li>
</ul>
<hr>
<h1 id="api" tabindex="-1"><a class="header-anchor" href="#api">#</a> API</h1>
<h2 id="props" tabindex="-1"><a class="header-anchor" href="#props">#</a> Props</h2>
<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props"/>
<p><strong>Note:</strong> Truncation only occurs if the <code>items</code> collection contains more than 2 items and the value is set to <code>truncationEnabled=true</code>.</p>
<h2 id="scoped-slots" tabindex="-1"><a class="header-anchor" href="#scoped-slots">#</a> Scoped Slots</h2>
<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.scopedSlots" />
<h2 id="events" tabindex="-1"><a class="header-anchor" href="#events">#</a> Events</h2>
<cdr-doc-api type="event" :api-data="$page.frontmatter.versions[0].components[0].api.events" />
<h2 id="component-variables" tabindex="-1"><a class="header-anchor" href="#component-variables">#</a> Component Variables</h2>
<cdr-doc-comp-vars name="CdrBreadcrumb"/>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage">#</a> Usage</h2>
<p>The <code>items</code> property requires an array of objects, in the format shown above. Notable values include:</p>
<ul>
<li><code>item.url</code> (optional) string where the breadcrumb item segment links when clicked or tapped</li>
<li><code>item.name</code> (required) string for the breadcrumb text item segment</li>
</ul>
<p>The array must be ordered appropriately from low index rendered on the left, to high index on the right.</p>
<p>The below example shows alternatively setting <code>items</code> using an array literal.</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-breadcrumb</span>
  <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[
    {item:{url:<span class="token punctuation">'</span><span class="token punctuation">'</span>, name: 1}},
    {item:{url:<span class="token punctuation">'</span><span class="token punctuation">'</span>, name: 2}},
    {item:{url:<span class="token punctuation">'</span><span class="token punctuation">'</span>, name: 3}}
  ]<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Use <code>truncationEnabled</code> to disable the truncation functionality. The example below shows truncation being disabled.</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-breadcrumb</span>
  <span class="token attr-name">:truncation-enabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span>
  <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[
    {item:{url:<span class="token punctuation">'</span><span class="token punctuation">'</span>, name: 1}},
    {item:{url:<span class="token punctuation">'</span><span class="token punctuation">'</span>, name: 2}},
    {item:{url:<span class="token punctuation">'</span><span class="token punctuation">'</span>, name: 3}}
  ]<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></cdr-doc-table-of-contents-shell>
</template>
