<template><cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'> 
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview">#</a> Overview</h2>
<p>Consistency in messaging is important for communicating with users and providing additional information needed to complete common tasks.</p>
<p>Aside from the static content on a page, additional content can be exposed as a result of a user's actions or system-level events. As users encounter many types of actionable elements across a website, providing consistent interaction patterns can improve the overall usability of the experience and help distinguish critical actions that need their attention.</p>
<p>There are four primary messaging patterns. Determine which to use by starting with the intent of the communication:</p>
<ul>
<li>Inform</li>
<li>Notify</li>
<li>Alert</li>
<li>Help</li>
</ul>
<p>Alerts and notifications communicate that something on the page has changed. The event could be based on a user action (e.g. notified that a product has been successfully added to a cart) or initiated at the system-level (e.g. alerted that an item in a cart is now out of stock).</p>
<p>Help and informational messaging appear contextually (e.g. helping a user locate a credit card's security code) or as ancillary information (e.g. information explaining how shipping restrictions apply to an item).</p>
<p>Depending on the situation, messaging may appear in an overlay (modals, tooltips, popovers), while other messaging will appear in-line (e.g. form field validation). Regardless of approach, the messaging will open in-page and should not navigate users to a new page or window.</p>
<p>When deciding what type of messaging pattern to use, reference the flowchart and table on this page, as well as the usage guidelines in the subsequent pages to help determine which components are appropriate for each experience.</p>
<h2 id="deciding-what-to-use" tabindex="-1"><a class="header-anchor" href="#deciding-what-to-use">#</a> Deciding what to use</h2>
<p>Consider the intent of the messaging and specific user task to determine which pattern to use.</p>
<h3 id="priority-scale" tabindex="-1"><a class="header-anchor" href="#priority-scale">#</a> Priority scale</h3>
<ul>
<li><strong>Low</strong>
<br />
Confirmations, applications process, and information unassociated to the primary purpose of the page. These messages or notifications can be missed without blocking a user from
successfully moving through the primary flow of a page
<ul>
<li><RouterLink to="/patterns/update-and-loading-notifications/#loading-notifications">loading Notifications</RouterLink></li>
<li><RouterLink to="/patterns/status-notifications/#transient-status-notifications">Transient Status Notifications</RouterLink></li>
</ul>
</li>
<li><strong>Medium</strong>
<br />
Ancillary, informative messaging or notifications, pertinent to a task the user is doing
<ul>
<li><RouterLink to="/patterns/update-and-loading-notifications/#update-notifications">Update Notifications</RouterLink></li>
<li><RouterLink to="/patterns/status-notifications/#persistent-status-notifications">Persistent Status Notifications</RouterLink></li>
</ul>
</li>
<li><strong>High</strong>
<br />
Messaging that is important for our users to see and interact with, but that should not disrupt them when they are in the process of interacting with the page
<ul>
<li><RouterLink to="/patterns/form-validation/">Error Validation</RouterLink> (Notifications)</li>
</ul>
</li>
<li><strong>Critical</strong>
<br />
For the most important blocking, disrupting updates that need immediate user attention and
<ul>
<li><RouterLink to="/patterns/alerts/">System Alerts</RouterLink></li>
<li><RouterLink to="/patterns/alerts/#alert-dialog">Important User Prompts</RouterLink></li>
<li>Time Sensitive User Caused <RouterLink to="/patterns/form-validation/">Error Validation</RouterLink> (Alerts)</li>
</ul>
</li>
</ul>
<p>-- add condition for ending up as navigation as a parallel process</p>
<cdr-table>
  <thead>
    <tr>
      <th></th>
      <th>Intent</th>
      <th>Requires</th>
    </tr>
  </thead>
  <tbody>
  <tr>
  <th>Inform</th>
  <td>Provide ancillary information</td>
  <td></td>
  </tr>
  <tr>
  <th>Notify</th>
  <td>Notify of status update</td>
  <td>Provided after user interaction / pageload </td>
  </tr>
  <tr>
    <th>Alert</th>
    <td>
      <cdr-list>
        <li>System alerts</li>
        <li>Time sensitive notifications</li>
      </cdr-list>
    </td>
    <td>
      <cdr-list>
        <li>System alert OR time sensitive notification</li>
        <li>Provided after user interaction / pageload</li>
        </cdr-list>
    </td>
  </tr>
  <tr>
  <th>Help</th>
  <td>
    <cdr-list>
      <li>Provide additional context on a term</li>
      <li>Provide additional information on page content</li>
      <li>Provide reason for information being requested</li>
      <li>Inform users on how to format</li>
      <li>Inform users on what the actionable element will do</li>
    </cdr-list>
  </td>
  <td></td>
  </tr>
  </tbody>
  </cdr-table>
<h2 id="notifications" tabindex="-1"><a class="header-anchor" href="#notifications">#</a> Notifications</h2>
<p>Notifications are asynchronous events providing user feedback to changes on specific elements or page sections.
Notifications should be designed to attract rather than capture a user’s attention, they add context to elements that exist on a page and should not employee design that blocks page content.
As messages, notifications offer responses to change. These responses help users understand page processes, actions they have competed, additional options available, or actions still needing attention.
Though important, notifications should not interrupt a user nor should focus be moved to them automatically.</p>
<p>In general all notifications share the following traits:</p>
<ul>
<li>Notifications provide feedback to users about actions they are taking on a page. They are not promotional nor navigational</li>
<li>Notifications do not block a users access to the page and should not use a blocking overlay window</li>
<li>Notifications are not a part of the page content and become available when triggered by a user action</li>
</ul>
<p>Notifications may be used with the following message types</p>
<ul>
<li>Errors</li>
<li>Warnings</li>
<li>Success</li>
<li>Page status</li>
<li>Content updates</li>
</ul>
<p>Notifications may be stacked with each other to communicate complex processes to our users</p>
<p>** example removing an item from a cart **</p>
<p>A User removes an item from their wishlist using the &quot;remove item&quot; button; this triggers the following 3 actions:</p>
<ol>
<li>action 1 &gt; A loading notification displays, identifying that the list is busy processing request</li>
<li>action 2 &gt; once the data has been updated, an update notification, listening for &quot;removes&quot; communicates that the item has been removed to assistive technology</li>
<li>action 3 &gt; last in this example, a transient notification pops up confirming to the user that the item has been removed successfully</li>
</ol>
<h3 id="patterns" tabindex="-1"><a class="header-anchor" href="#patterns">#</a> Patterns</h3>
<p>(the following do not consider mobile app patterns)</p>
<cdr-table class="advanced-table" full-width=false>
  <tr>
    <th class="advanced-table__header">
      <cdr-link href="../update-notifications">Update Notification</cdr-link>
    </th>
    <td>UI updates and non-verbal application state communications (such as "busy" or "loading" icons)</td>
  </tr>
  <tr>
    <th class="advanced-table__header">
      <cdr-link href="../status-notifications">Status Notifications</cdr-link>
    </th>
    <td>Page level responses to user interactions confirming actions made, communicating additional information based on user provided input</td>
  </tr>
  <tr>
  <tr>
    <th class="advanced-table__header">
      <cdr-link href="../validation">Validation Notifications</cdr-link>
    </th>
    <td>
      Form validation instruction
    </td>
  </tr>
</cdr-table>
</cdr-doc-table-of-contents-shell>
</template>
