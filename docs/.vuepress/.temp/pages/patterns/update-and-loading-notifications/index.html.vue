<template><cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview">#</a> Overview</h2>
<p>Update and Loading Notifications inform users of the current working state of their request and help reduce uncertainty. These notifications update pre-existing, inline page content.</p>
<p>Often a Loading Notification will precede an Update Notification, affecting the same content element on a page and intentionally paired together to communicate to users the ongoing status of their request. When not pairing Loading and Update Notifications, remember to create sufficient visual feedback as many Update Notifications will be unassociated to their triggering actions.</p>
<h2 id="update-notifications" tabindex="-1"><a class="header-anchor" href="#update-notifications">#</a> Update Notifications</h2>
<p>Update Notifications inform users of advisory information that enhances the site experience such as quantity updates or busy states. These notifications update a specific part of an inline content section, such as the number of items in a cart.</p>
<cdr-table class="advanced-table" full-width=false>
  <tr>
    <th class="advanced-table__header">
      Priority
    </th>
    <td> <icon-information-fill /> Low</td>
  </tr>
  <tr>
    <th class="advanced-table__header">
      Expectancy
    </th>
    <td>Expected / Assumed</td>
  </tr>
  <tr>
  <tr>
    <th class="advanced-table__header">
      Purpose
    </th>
    <td>
      <cdr-list>
        <li>Updating inline messaging</li>
        <li>Providing UI responses to user initiated actions</li>
      </cdr-list>
    </td>
  </tr>
  <tr>
    <th class="advanced-table__header">Interaction</th>
    <td>Non-blocking, Not Required</td>
  </tr>
  <tr>
    <th class="advanced-table__header">Information</th>
    <td>Passive state changes </td>
  </tr>
  <tr>
    <th class="advanced-table__header">Examples</th>
    <td>
      <cdr-list>
          <li>
            <figure>
              <cdr-img :src="$withBase('/notifications/cartUpdateExample.png')" alt="An example on REI.com of this notifications" width="80px"/>
              <figcaption>
                <cdr-caption
                summary="After a user adds an item to their cart, a section of content near the Shopping Cart icon increases in number. Additionally, assistive technology should announce 'x items in your cart'."/>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <cdr-img :src="$withBase('/notifications/updateExample.png')" alt="An example on REI.com of this notifications" width="350px"/>
              <figcaption>
                <cdr-caption
                summary=" After a user selects the 'Bontrager' filter on the Mountain Bike Helmets search results page, the 'Mountain Bike Helmets
            (number of results)' updates to 'Bontrager Mountain Bike Helmets (5 results)'. Ensuring this is marked up as a notification enable users of assistive technology stay informed of this update."/>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <cdr-img :src="$withBase('/notifications/quantityUpdate.png')" alt="An example on REI.com of this notifications" width="500px"/>
              <figcaption>
                <cdr-caption
                summary=" As a user updates the quantity of an product in the shopping cart, multiple items are updated to reflect this change: item price, order summary subtotal, order total, and total and savings of the shopping cart."/>
              </figcaption>
            </figure>
          </li>
        </cdr-list>
    </td>
  </tr>
</cdr-table>
<h3 id="use-when" tabindex="-1"><a class="header-anchor" href="#use-when">#</a> Use When</h3>
<ul>
<li>Incrementing results or items</li>
<li>Adding or removing items from a list</li>
<li>Changing inline content based on user selection</li>
</ul>
<h3 id="don-t-use-when" tabindex="-1"><a class="header-anchor" href="#don-t-use-when">#</a> Don't Use When</h3>
<ul>
<li>The notification relates to an actionable element in a busy state (see <RouterLink to="/patterns/update-and-loading-notifications/#loading-notifications">Loading Notifications</RouterLink>)</li>
<li>Confirming that a task or process initiated by the user was completed successfully (see <RouterLink to="/patterns/status-notifications/#transient-status-notifications">Transient Status Notifications</RouterLink>)</li>
<li>Providing contextual information on the page processes (see <RouterLink to="/patterns/status-notifications/#transient-status-notifications">Transient Status Notifications</RouterLink>)</li>
<li>Providing errors, warnings, or success messaging related to user entered formatting, incomplete inputs, or invalid selections (see <RouterLink to="/patterns/validation-notifications/">Validation Notifications</RouterLink>)</li>
<li>The content added to the page is critical and needs immediate attention (see <RouterLink to="/patterns/alerts/">Alerts</RouterLink>)</li>
<li>Page usage should be blocked until the user takes an action within the message or exits (see <RouterLink to="/patterns/alerts/#user-confirmation-alerts">User Confirmation Alerts</RouterLink>)</li>
<li>User interaction is required or content is critical to the user flow (see <RouterLink to="/components/modal/">Modal</RouterLink>)</li>
<li>The message contains a rich UI experience (see <RouterLink to="/components/modal/">Modal</RouterLink>)</li>
<li>During the appearance or disappearance of content following a user's interaction which is also announced to assistive technology such as the following:
<ul>
<li>Tab</li>
<li>Accordion</li>
<li>Dialog</li>
<li>Popover</li>
<li>Tooltip</li>
</ul>
</li>
</ul>
<h3 id="anatomy-of-a-update-notification" tabindex="-1"><a class="header-anchor" href="#anatomy-of-a-update-notification">#</a> Anatomy of a Update Notification</h3>
<cdr-img :src="$withBase('/notifications/updateNotification.png')" alt="Diagram for conditional notifications as an overlay, annotating the required layout of the elements listed below" />
<ul>
<li>1: <a href="#content-container">Content Container</a></li>
<li>2: <a href="#content-control">Content Control</a></li>
</ul>
<h4 id="content-container" tabindex="-1"><a class="header-anchor" href="#content-container">#</a> Content Container</h4>
<p>The Update Notification content container wraps both the element being updated and any assistive technology helpers such as screen reader text. It may be a pre-existing section of a page or dynamically added upon user action.</p>
<p>Design</p>
<ul>
<li>Should ensure the Update Notification does not receive focus as a result of a change in status</li>
<li>Should ensure sufficient visual feedback is provided to inform users that an update that may not be associated with the element they have interacted with has been updated</li>
<li>Should not overuse Update Notifications as they may interrupt the user experience</li>
<li>May be stacked with a Loading Notification</li>
</ul>
<hr/>
<p>Development</p>
<ul>
<li>
<p>Must ensure the container generating the update is able to receive focus</p>
</li>
<li>
<p>Must define pre-existing page sections where content may be updated as a WAI-ARIA live region</p>
</li>
<li>
<p>Must use the <code>aria-live</code> attribute on the container of the content that may be updated or, in special cases, use one of the WAI-ARIA special live region roles:</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code> <span class="token comment">&lt;!-- EXAMPLE: while stable --></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">aria-live</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>polite<span class="token punctuation">"</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>region<span class="token punctuation">"</span></span> <span class="token attr-name">aria-labelledby</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>shopping-cart<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
   4
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sr-only<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>items in your cart<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- EXAMPLE: when updated --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>status<span class="token punctuation">"</span></span> <span class="token attr-name">aria-live</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>polite<span class="token punctuation">"</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>region<span class="token punctuation">"</span></span> <span class="token attr-name">aria-labelledby</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>shopping-cart<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sr-only<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>there are now<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
  5
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sr-only<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>items in your cart<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li>
<li>
<p>May use <code>role=”status”</code> in place of or in addition to <code>aria-live</code></p>
</li>
<li>
<p>May include <a href="https://www.digitala11y.com/aria-atomic-properties/" target="_blank" rel="noopener noreferrer">aria-atomic<ExternalLinkIcon/></a> markup attribute to define what content will be presented to assistive technologies</p>
</li>
<li>
<p>May include <code>aria-relevant</code> to define what type of changes are being announced to assistive technologies</p>
</li>
</ul>
<h4 id="content-control" tabindex="-1"><a class="header-anchor" href="#content-control">#</a> Content Control</h4>
<p>The Update Notification content control may be any actionable element, such as a link or button.</p>
<p>Design</p>
<ul>
<li>Should not move focus to the notification automatically</li>
<li>May open or update content in locations unrelated to the action which caused the notification to appear</li>
</ul>
<hr />
<p>Development</p>
<ul>
<li>Should use the aria-controls attribute if another part of the page controls what appears in the notification</li>
</ul>
<br />
<hr />
<br />
<h2 id="loading-notifications" tabindex="-1"><a class="header-anchor" href="#loading-notifications">#</a> Loading Notifications</h2>
<p>Loading Notifications signal to users that loading is occurring, but do not give any specific indication of progress. Use Loading Notifcations to communicate the busy state of the page or content element, reassuring users that that page is not frozen and their request is in progress.</p>
<p>Transitions should also notify assistive technology to temporarily ignore changes to an element. This can be added in the form of additional element attributes that communicate to assistive technology, though consider if the action without context will create any cognitive dissonance for our visual users.</p>
<cdr-table class="advanced-table" full-width=false>
  <tr>
    <th class="advanced-table__header">
      Priority
    </th>
    <td> <icon-information-fill /> Low</td>
  </tr>
  <tr>
    <th class="advanced-table__header">
      Expectancy
    </th>
    <td>Expected / Assumed</td>
  </tr>
  <tr>
  <tr>
    <th class="advanced-table__header">
      Purpose
    </th>
    <td>
      <cdr-list>
      <li>Communicating the refresh of page data</li>
      <li>Disabling a section of a page as new data is presented</li>
      <li>Reporting the busy status of a page or section</li>
      </cdr-list>
    </td>
  </tr>
  <tr>
    <th class="advanced-table__header">Interaction</th>
    <td>Blocking, disabling</td>
  </tr>
  <tr>
    <th class="advanced-table__header">Information</th>
    <td>User requested state changes</td>
  </tr>
  <tr>
    <th class="advanced-table__header">Examples</th>
    <td>
      <cdr-list>
        <li>
          <figure>
            <cdr-img :src="$withBase('/notifications/updateExamples.png')" alt="An example on REI.com of this update notification" width="250px"/>
            <figcaption>
              <cdr-caption
              summary="As the 'Find a store near you' modal is loading results, it displays a loading icon. Additionally, assistive technology should inform non-vision users of the busy state. For more information, review the loading notification section above."/>
            </figcaption>
          </figure>
        </li>
        <li>
        <figure>
            <cdr-img :src="$withBase('/notifications/updateExampleAddToCartButton.png')" alt="An example on REI.com of this update notification" width="250px"/>
            <figcaption>
              <cdr-caption
              summary="After a user presses the Add to Cart button, the button grays out or changes to a loading icon. Additionally, assistive technology should inform users of the busy state. For more information review the loading notification section above."/>
            </figcaption>
          </figure> 
        </li>
      </cdr-list>
    </td>
  </tr>
</cdr-table>
<h3 id="use-when-1" tabindex="-1"><a class="header-anchor" href="#use-when-1">#</a> Use When</h3>
<ul>
<li>Refreshing data in a live region</li>
<li>Loading additional page content</li>
<li>Providing loading icons or states</li>
<li>Informing users that the application is busy</li>
</ul>
<h3 id="don-t-use-when-1" tabindex="-1"><a class="header-anchor" href="#don-t-use-when-1">#</a> Don't Use When</h3>
<ul>
<li>The notification does not relate to an actionable element in a busy state</li>
</ul>
<h3 id="anatomy-of-a-loading-notification" tabindex="-1"><a class="header-anchor" href="#anatomy-of-a-loading-notification">#</a> Anatomy of a Loading Notification</h3>
<cdr-img :src="$withBase('/notifications/loadingNotification.png')" alt="Diagram of loading animation annotating the list below" width="600px"/>
<ul>
<li>Should define pre-existing page sections where content may be updated as a WAI-ARIA live region</li>
<li>Should use the <code>aria-busy</code> attribute to indicate an element is being modified and that assistive technologies may want to wait until the modifications are complete before exposing them to the user</li>
</ul>
<cdr-doc-example-code-pair repository-href="/src/components/button" :sandbox-data="$page.frontmatter.sandboxData" :model="{isLoading: false}">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-button</span> <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isLoading<span class="token punctuation">"</span></span>  <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isLoading = true<span class="token punctuation">"</span></span> <span class="token attr-name">aria-controls</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>updateContainer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  {{isLoading ? 'Loading...' : 'Add to cart'}}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-button</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>region<span class="token punctuation">"</span></span> <span class="token attr-name">aria-live</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>polite<span class="token punctuation">"</span></span> <span class="token attr-name">:aria-busy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isLoading<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>updateContainer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{isLoading ? 'This content is being updated...' : 'Live content section'}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></cdr-doc-example-code-pair>
</cdr-doc-table-of-contents-shell>
</template>
