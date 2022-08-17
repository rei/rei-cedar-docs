<template><cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview">#</a> Overview</h2>
<p>Status Notifications inform users that something on the page has changed. These responses help users understand page processes, actions they have competed, additional options available, or actions still needing attention. Common examples include success and warning messages.</p>
<p>Depending on the information being communicated, status notifications can be persistent or transient. While it’s important to keep users informed when there is an update or status change, these notifications should not be page blocking.</p>
<h2 id="persistent-status-notifications" tabindex="-1"><a class="header-anchor" href="#persistent-status-notifications">#</a> Persistent Status Notifications</h2>
<p>Persistent Status Notifications are 'in page messages' presented to the user based on conditions the user has created via a selection of product or adjustment of settings.</p>
<cdr-table class="advanced-table" full-width=false>
  <tr>
    <th class="advanced-table__header">
      Priority
    </th>
    <td><icon-warning-fill/> Prominent, medium priority</td>
  </tr>
  <tr>
    <th class="advanced-table__header">
      Expectancy
    </th>
    <td>Unexpected</td>
  </tr>
  <tr>
    <th class="advanced-table__header">
      Purpose
    </th>
    <td>
        <cdr-list>
          <li>Exposing a status change to a product caused by user selection</li>
          <li>Providing non-validation errors or warnings or updates on the status of items in the user's curated item list</li>
          <li>Providing confirmation when updating and removing items which provide navigation or other actions</li>
        </cdr-list>
    </td>
  </tr>
  <tr>
    <th class="advanced-table__header">Interaction</th>
    <td>Non-blocking, not required</td>
  </tr>
  <tr>
    <th class="advanced-table__header">Information</th>
    <td>Advisory ancillary information </td>
  </tr>
  <tr>
  <th class="advanced-table__header">Location</th>
  <td>Inline on page, generally located in associated section of effected content</td>
  </tr>
  <tr>
    <th class="advanced-table__header">Options</th>
    <td>
      <cdr-list>
        <li>May contain detailed information</li>
        <li>May include additional actions</li>
        <li>May be dismissible</li>
      </cdr-list>
    </td>
  </tr>
  <tr>
  <th class="advanced-table__header">Components</th>
  <td>
    <cdr-list>
      <li><cdr-link href="../../components/banner/">Banner</cdr-link></li>
      <li>Announcement</li>
    </cdr-list>
  </td>
  </tr>
</cdr-table>
<h3 id="use-when" tabindex="-1"><a class="header-anchor" href="#use-when">#</a> Use When</h3>
<ul>
<li>Exposing a status change to a product caused by user selection</li>
<li>Providing confirmation when updating and removing items that provides navigation or other actions</li>
<li>To increase visibility of existing errors</li>
<li>When valid form options cause invalid selections</li>
</ul>
<h3 id="don-t-use-when" tabindex="-1"><a class="header-anchor" href="#don-t-use-when">#</a> Don't Use When</h3>
<ul>
<li>Changing inline content based on user selection (see <RouterLink to="/patterns/update-and-loading-notifications/#update-notifications">Update Notifications</RouterLink>)</li>
<li>The notification relates to an actionable element in a busy state (see <RouterLink to="/patterns/update-and-loading-notifications/#loading-notifications">Loading Notifications</RouterLink>)</li>
<li>Confirming that a task or process initiated by the user was completed successfully (see <a href="#transient-status-notifications">Transient Status Notifications</a>)</li>
<li>Providing contextual information on the page processes (see <a href="#transient-status-notifications">Transient Status Notifications</a>)</li>
<li>Providing errors, warnings, or success messaging related to user entered formatting, incomplete inputs, or invalid selections (see <a href="../validation-notifications">Validation Notifications</a>)</li>
<li>Providing summaries of errors, warnings, or success messaging related to form submission (see <RouterLink to="/patterns/validation-notifications/#validation-summary">Validation Summaries</RouterLink>)</li>
<li>The content added to the page is critical and needs immediate attention (see <RouterLink to="/patterns/alerts/">Alerts</RouterLink>)</li>
<li>Page usage should be blocked until the user takes an action within the message or exits (see <RouterLink to="/patterns/alerts/#user-confirmation-alerts">User Confirmation Alerts</RouterLink>)</li>
<li>User interaction is required or content is critical to the user flow (see <RouterLink to="/components/modal/">Modal</RouterLink>)</li>
<li>The message contains a rich UI experience (see <RouterLink to="/components/modal/">Modal</RouterLink>)</li>
<li>The user makes a selection that does not change or add content to the page</li>
<li>As the only indication of an error</li>
</ul>
<h3 id="implementation" tabindex="-1"><a class="header-anchor" href="#implementation">#</a> Implementation</h3>
<cdr-doc-example-code-pair repository-href="/src/components/button" :sandbox-data="$page.frontmatter.sandboxData" :model="{isHidden: true}">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-button</span>  <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isHidden = !isHidden<span class="token punctuation">"</span></span> <span class="token attr-name">aria-controls</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>statusContainer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  {{isHidden ? 'click me' : 'doh!'}}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-banner</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>statusContainer<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>error<span class="token punctuation">"</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>status<span class="token punctuation">"</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>!isHidden<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#icon-left</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>icon-error-fill</span> <span class="token attr-name">inherit-color</span><span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
  We don't have the quantity you want
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-banner</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></cdr-doc-example-code-pair>
<h3 id="anatomy-of-a-persistent-status-notification" tabindex="-1"><a class="header-anchor" href="#anatomy-of-a-persistent-status-notification">#</a> Anatomy of a Persistent Status Notification</h3>
<cdr-img :src="$withBase('/notifications/persistentStatusAnatomy.png')" alt="Diagram for persistent status notifications, annotating the required layout of the elements listed below" />
<ol>
<li><a href="#status-container">Status Container</a></li>
<li><a href="#optional-dismiss-action">Optional Dismiss Action</a></li>
<li><a href="#message">Message</a></li>
</ol>
<h4 id="status-container" tabindex="-1"><a class="header-anchor" href="#status-container">#</a> Status Container</h4>
<ul>
<li><strong>Must</strong>
<ul>
<li>Add <code>role=”status”</code>to the markup on activation, announcing the notification without interrupting the page flow of the user</li>
<li>Add ID to be referenced via <code>aria-controls</code> on the element which is causing the notification</li>
<li>Ensure the notification container is able to receive focus</li>
<li>If moving focus to the notification, the notification content container must be dismissible</li>
</ul>
</li>
<li><strong>Should</strong>
<ul>
<li>Ensure an element with role status does not receive focus as a result of change in status</li>
<li>Make the relationship between page controls and the notification explicit with the <code>aria-controls</code> attribute if another part of the page controls what appears in the status</li>
</ul>
</li>
<li><strong>Should not</strong>
<ul>
<li>Open as a blocking overlay window</li>
<li>Move focus automatically to the notification</li>
<li>Direct the user to a new page or window</li>
<li>Overuse notifications as they may interrupt the user experience</li>
<li>Reuse bespoke UI intended for other message or navigation types</li>
</ul>
</li>
<li><strong>May</strong>
<ul>
<li>Display notifications in unique UI to create distinction around themselves and the the page content</li>
<li>Open or update content in locations unrelated to the action which caused the notification to appear</li>
<li>Update a live region of the page</li>
<li>Use the HTML <code>&lt;aside&gt;</code> tag, denoting the section that, though related to the main element, doesn't belong to the main flow</li>
</ul>
</li>
</ul>
<h4 id="optional-dismiss-action" tabindex="-1"><a class="header-anchor" href="#optional-dismiss-action">#</a> Optional Dismiss Action</h4>
<ul>
<li><strong>Must</strong>
<ul>
<li>Ensure the notification will not be removed if keyboard focus or mouse hover is within or over the notification</li>
<li>Return user focus to a logical location</li>
<li>Provide at least one focusable UI element (i.e. Close button, primary button)</li>
</ul>
</li>
<li><strong>Should not</strong>
<ul>
<li>Create notifications that disappear automatically</li>
</ul>
</li>
</ul>
<h4 id="message" tabindex="-1"><a class="header-anchor" href="#message">#</a> Message</h4>
<ul>
<li><strong>Should</strong>
<ul>
<li>Clearly communicate what is happening</li>
</ul>
</li>
</ul>
<br />
<hr />
<br />
<h2 id="transient-status-notifications" tabindex="-1"><a class="header-anchor" href="#transient-status-notifications">#</a> Transient Status Notifications</h2>
<p>Transient Status Notifications are temporary messages that come and go without user input. They indicate the completion of a task or process initiated by the user or the application itself.</p>
<cdr-table class="advanced-table" full-width=false>
  <tr>
    <th class="advanced-table__header">
      Priority
    </th>
    <td><icon-information-fill /> Low, minimally disruptive</td>
  </tr>
  <tr>
    <th class="advanced-table__header">
      Expectancy
    </th>
    <td>Unexpected</td>
  </tr>
  <tr>
    <th class="advanced-table__header">
      Purpose
    </th>
    <td>
        <cdr-list>
          <li>Provide confirmation when updating and removing items</li>
          <li>Providing simple messages when saving user preferences</li>
          <li>provide contextual information on the page processes</li>
        </cdr-list>
    </td>
  </tr>
  <tr>
      <th class="advanced-table__header">
        Interaction
      </th>
      <td>
        <cdr-list>
          <li>Non-blocking</li>
          <li>Not required</li>
          <li>Temporary</li>
          <li>Usually auto dismisses</li>
        </cdr-list>
      </td>
  </tr>
  <tr>
    <th class="advanced-table__header">
      Information
    </th>
    <td>Advisory ancillary information</td>
  </tr>
  <tr>
    <th class="advanced-table__header">
      Location
    </th>
    <td>
      <cdr-list>
      <li>Overlay</li>
      <li>Typically in the top right of the page</li>
      </cdr-list>
    </td>
  </tr>
  <tr>
    <th class="advanced-table__header">Options</th>
    <td>
      <cdr-list>
        <li>Should not contain actions unless these actions are also available on the parent page</li>
        <li>Should not change their state nor update their content once visible</li>
        <li>May be dismissible</li>
        <li>Should not get in the way of important page content</li>
        <li>May be clicked on to see what’s previously happened</li>
      </cdr-list>
    </td>
  </tr>
  <tr>
  <th class="advanced-table__header">Components</th>
   <td>
      <cdr-link href="../../components/toast/">Toast</cdr-link>
    </td>
  </tr>
  <tr>
  <th class="advanced-table__header">Examples</th>
  <td>
  <cdr-list modifier="ordered">
  <li>
    <figure>
      <cdr-img :src="$withBase('/notifications/storeStatusNotification.png')" alt="An example on REI.com of this notification" width="200px"/>
      <figcaption>
        <cdr-caption
        summary="After a user selects a store to 'Set as my REI' a 'saved' notification overlay displays. Assistive technology should inform users of the busy state"/>
      </figcaption>
    </figure>
  </li>
  <li>
    <figure>
      <cdr-img :src="$withBase('/notifications/wishlist.png')" alt="" width="500px"/>
      <figcaption>
        <cdr-caption
        summary="The user adds an item to their wishlist"/>
      </figcaption>
    </figure>
  </li>
  <li>
   Updating and removing an item from wish list
  </li>
</cdr-list>
  </td>
  </tr>
</cdr-table>
<h3 id="use-when-1" tabindex="-1"><a class="header-anchor" href="#use-when-1">#</a> Use When</h3>
<ul>
<li>Confirming that a task or process initiated by the user was completed successfully</li>
<li>Providing contextual information on the page processes</li>
</ul>
<h3 id="don-t-use-when-1" tabindex="-1"><a class="header-anchor" href="#don-t-use-when-1">#</a> Don't Use When</h3>
<ul>
<li>Changing inline content based on user selection (see <RouterLink to="/patterns/update-and-loading-notifications/#update-notifications">Update Notifications</RouterLink>)</li>
<li>The notification relates to an actionable element in a busy state (see <RouterLink to="/patterns/update-and-loading-notifications/#loading-notifications">Loading Notifications</RouterLink>)</li>
<li>Exposing a status change to a product caused by user selection (see <RouterLink to="/patterns/status-notifications/#persistent-status-notifications/">Persistent Status Notifications</RouterLink>)</li>
<li>Providing error or warnings on the status of items in the users cart (see <RouterLink to="/patterns/status-notifications/#persistent-status-notifications/">Persistent Status Notifications</RouterLink>)</li>
<li>Providing confirmation when updating and removing items that provides navigation or other actions (see <a href="#persistent-status-notifications">Persistent Status Notifications</a>)</li>
<li>Notifying users of a potential problem, outside of a form, that may require their attention (see <a href="#persistent-status-notifications">Persistent Status Notifications</a>)</li>
<li>Providing errors, warnings, or success messaging related to user entered formatting, incomplete inputs, or invalid selections (see <RouterLink to="/patterns/validation-notifications/">Validation Notifications</RouterLink>)</li>
<li>The content added to the page is critical and needs immediate attention (see <RouterLink to="/patterns/alerts/">Alerts</RouterLink>)</li>
<li>Page usage should be blocked until the user takes an action within the message or exits (see <RouterLink to="/patterns/alerts/#user-confirmation-alerts">User Confirmation Alerts</RouterLink>)</li>
<li>User interaction is required or content is critical to the user flow (see <RouterLink to="/components/modal/">Modal</RouterLink>)</li>
<li>The message contains a rich UI experience (see <RouterLink to="/components/modal/">Modal</RouterLink>)</li>
<li>The user makes a selection that does not change or add content to the page</li>
</ul>
<h3 id="anatomy-of-a-transient-status-notification" tabindex="-1"><a class="header-anchor" href="#anatomy-of-a-transient-status-notification">#</a> Anatomy of a Transient Status Notification</h3>
<cdr-img :src="$withBase('/notifications/transientStatusAnatomy.png')" alt="Diagram for transient status notifications, annotating the required layout of the elements listed below" />
<p>Transient Status Notifications have the following requirements in addition to the requirements for Persistent Status Notifications (TODO should requirements that are pertinent be additive or all inclusive?)</p>
<ol>
<li><a href="#status-notifications-as-an-overlay">Status Notifications as an Overlay</a></li>
<li><a href="#automatic-dismissal">Automatic Dismissal</a></li>
<li><a href="#interactive-controls">Interactive Controls</a></li>
</ol>
<h4 id="status-notifications-as-an-overlay" tabindex="-1"><a class="header-anchor" href="#status-notifications-as-an-overlay">#</a> Status Notifications as an overlay</h4>
<p>The concise messages contained within Status Notifications are not required for a user to interact with, may open unexpectedly,
and should not be blocking. Note that opening in an overlay may disrupt or confuse users and may not be seen at all by users at some breakpoints.</p>
<ul>
<li><strong>Must</strong>
<ul>
<li>Not block page content</li>
<li>Return user focus to a logical location</li>
<li>If moving focus to the notification, the notification:
<ul>
<li>Must provide at least one focusable UI element (i.e. close button, primary button)</li>
<li>Content container must be dismissible</li>
<li>On dismiss, must return focus to the next logical location in the page flow</li>
</ul>
</li>
<li>Meet the standard color ratio requirements for both text (4.5:1) and activatable components (3.0:1)</li>
</ul>
</li>
<li><strong>Should</strong>
<ul>
<li>Be used for short messages to confirm an action</li>
</ul>
</li>
<li><strong>Should not</strong>
<ul>
<li>Be located near or on top of navigation area</li>
<li>Contain interactive controls if notification is displayed as an overlay</li>
<li>Open as a blocking overlay window</li>
</ul>
</li>
<li><strong>May</strong>
<ul>
<li>Appear as a timed display</li>
</ul>
</li>
</ul>
<p>If opening a Status Notification consider the following:</p>
<ul>
<li>A blocking window can introduce obstruction issues for people who have zoomed in browsers or for users at smaller breakpoints</li>
<li>A non-blocking window may be completely missed by those who are using screen magnification software, but who are not using a screen reader</li>
</ul>
<h4 id="automatic-dismissal" tabindex="-1"><a class="header-anchor" href="#automatic-dismissal">#</a> Automatic Dismissal</h4>
<p>In some scenarios status notifications may be displayed for a set amount of time rather than become a lasting feature of a page. In these cases there should be no negative impact on their current activities or the status that the message conveyed. Ignoring a timed notification would still mean that the action is completed successfully.</p>
<p>For example, an item would still be added to a cart regardless of a user's engagement with the notification informing them of the successfully added item.</p>
<ul>
<li><a href="https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html" target="_blank" rel="noopener noreferrer">WCAG 2.1 Understanding adjustable timing<ExternalLinkIcon/></a></li>
</ul>
<h4 id="interactive-controls" tabindex="-1"><a class="header-anchor" href="#interactive-controls">#</a> Interactive Controls</h4>
<p>Interactive controls within notifications produce several hurdles for users of assistive technology.
Specifically, the <code>Aria-live</code> region will not preserve the semantics of elements being read aloud.
As an example, consider the virtual outfitting notification previously seen on the product page: a user will not know what the title, copy, or link are in the following text:</p>
<p>&quot;<em>Need help deciding? Schedule a free 1-on-1 virtual appointment with one of our experts. Book now</em>&quot;.</p>
<p>Users may infer the &quot;book now&quot; text is a link - or just as likely search for a button or guess the entire text would be active.</p>
<p>Consider the following:</p>
<ul>
<li>When triggered, live regions only read out their content to assisted technologies. They will not distinguish text from actionable elements present within a notification</li>
<li>Users may infer that actionable element is present, however a user will need to guess what element to search for. This is especially problematic for notifications that are automatically dismissed, as users will have limited time to correctly guess and act on this choice</li>
</ul>
<p>If the notification must include an actionable element, you are responsible for the following:</p>
<ul>
<li><strong>Must</strong>
<ul>
<li>Return focus to next logical location in the page flow</li>
<li>Contained action is also readily available on the page</li>
<li>If the action is not available on page, the action should be added to a notification history page (see ARIA’s log role)</li>
</ul>
</li>
</ul>
<h2 id="accessibility-references" tabindex="-1"><a class="header-anchor" href="#accessibility-references">#</a> Accessibility References</h2>
<ul>
<li><a href="https://www.w3.org/WAI/perspective-videos/notifications/" target="_blank" rel="noopener noreferrer">Notifications and feedback<ExternalLinkIcon/></a></li>
<li><a href="https://www.w3.org/WAI/RD/wiki/Accessible_Notifications" target="_blank" rel="noopener noreferrer">Accessible Notifications<ExternalLinkIcon/></a></li>
<li><a href="https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html" target="_blank" rel="noopener noreferrer">WCAG status messages 4.1.3<ExternalLinkIcon/></a></li>
</ul>
</cdr-doc-table-of-contents-shell>
</template>
