<template><cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview">#</a> Overview</h2>
<p>Alerts inform users that something important has happened on the page. They need to be assertive and important messages with the intent to interrupt the user flow, even if not page blocking. They may communicate a critical error or request additional required input from our users.</p>
<h2 id="alert-notifications" tabindex="-1"><a class="header-anchor" href="#alert-notifications">#</a> Alert Notifications</h2>
<p>Persistent Alert Notifications provide brief, critical responses to changes in a page's data or user state. Their job is to keep users informed of important system or time-sensitive changes. These messages are displayed inline and are normally in close relation to the elements needing the user's attention.</p>
<p>As with other notifications, Alert Notifications are not provided as part of a page's content. Because of their assertive nature, Alert Notifications should be used sparingly and reserved for situations where the user's immediate attention is required. Dynamic notifications that are less urgent should use one of the appropriate <RouterLink to="/patterns/status-notifications/">Status Notification</RouterLink> types.</p>
<cdr-table class="advanced-table" full-width=false>
  <tr>
    <th class="advanced-table__header">
      Priority
    </th>
    <td><icon-warning-fill/> Prominent, high priority</td>
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
          <li>The application has made updates</li>
          <li>There are application failures, such as a lost connection to the server where local changes will not be saved</li>
          <li>The user is required to make a time-sensitive interaction</li>
        </cdr-list>
    </td>
  </tr>
  <tr>
    <th class="advanced-table__header">Interaction</th>
    <td>Non-blocking, most often inline, required</td>
  </tr>
  <tr>
    <th class="advanced-table__header">Information</th>
    <td>Critical or time-sensitive errors and warnings </td>
  </tr>
  <tr>
  <th class="advanced-table__header">Location</th>
  <td>Inline on page, generally located in associated section of effected content</td>
  </tr>
  <tr>
    <th class="advanced-table__header">Options</th>
    <td>
      <cdr-list>
        <li>May auto-dismiss once the originating cause has been resolved</li>
        <li>May provide anchors directing users to error origin</li>
      </cdr-list>
    </td>
  </tr>
  <tr>
  <th class="advanced-table__header">Components</th>
  <td>
    <cdr-list>
      <li><cdr-link href="../../components/banner/">Banner</cdr-link></li>
    </cdr-list>
  </td>
  </tr>
</cdr-table>
<h3 id="use-when" tabindex="-1"><a class="header-anchor" href="#use-when">#</a> Use When</h3>
<ul>
<li>The content added to the page is critical and needs immediate attention</li>
<li>The application has made updates</li>
<li>There are application failures, such as a lost connection to the server where local changes will not be saved</li>
<li>The user is required to make a time-sensitive interaction</li>
<li>The user is presented with a required option that is page blocking</li>
</ul>
<h3 id="don-t-use-when" tabindex="-1"><a class="header-anchor" href="#don-t-use-when">#</a> Don't Use When</h3>
<ul>
<li>Confirming that a task or process initiated by the user was completed successfully (see <RouterLink to="/patterns/status-notifications/#transient-status-notifications">Transient Status Notifications</RouterLink>)</li>
<li>Providing contextual information on the page processes (see <RouterLink to="/patterns/status-notifications/#transient-status-notifications">Transient Status Notifications</RouterLink>)</li>
<li>Providing errors, warnings, or success messaging related to user-entered formatting, incomplete inputs, or invalid selections (see <a href="../validation-notifications">Validation Notifications</a>)</li>
<li>Page usage needs to be blocked until the user takes an action within the message or exits (see <a href="#user-confirmation-alerts">User Confirmation Alerts</a>)</li>
<li>User interaction is required or content is critical to the user flow (see <RouterLink to="/components/modal/">Modal</RouterLink>)</li>
<li>The message contains a rich UI experience (see <RouterLink to="/components/modal/">Modal</RouterLink>)</li>
<li>The user makes a selection that does not add or change content to the page</li>
<li>Providing the only indication of an error, if needing to alert users on how to resolve the problem</li>
</ul>
<h3 id="use-caution-when" tabindex="-1"><a class="header-anchor" href="#use-caution-when">#</a> Use Caution When</h3>
<ul>
<li>Using an alert rather than a status notification within form field validation. While not invalid, this may cause confusion to some users of assisted technology as it may read over the current or next form field label. It may be helpful however to use role alert to represent a validation summary which would populate after a user attempts to submit the form.</li>
</ul>
<h3 id="anatomy-of-an-alert-notification" tabindex="-1"><a class="header-anchor" href="#anatomy-of-an-alert-notification">#</a> Anatomy of an Alert Notification</h3>
<cdr-img :src="$withBase('/notifications/persistentAlertAnatomy.png')" alt="Diagram for persistent alert notifications, annotating the required layout of the elements listed below" />
<ol>
<li><a href="#alert-notification-container">Container</a></li>
<li><a href="#alert-notification-message">Message</a></li>
</ol>
<h4 id="alert-notification-container" tabindex="-1"><a class="header-anchor" href="#alert-notification-container">#</a> Alert Notification Container</h4>
<ul>
<li><strong>Must</strong>
<ul>
<li>Add <code>role=”alert”</code> to the container on activation, interrupting the page flow of the user without interfering with their ability to continue working</li>
<li>Add an ID to the container</li>
<li>Pass the alert ID to the causing control if this alert was caused by an in-page action</li>
<li>Ensure the notification container is able to receive focus</li>
</ul>
</li>
<li><strong>Must Not</strong>
<ul>
<li>Move focus automatically to the alert notification</li>
<li>Open as a blocking overlay window</li>
<li>Direct the user to a new page or window</li>
<li>Overuse alert notifications. <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-postponed.html" target="_blank" rel="noopener noreferrer">Frequent interruptions<ExternalLinkIcon/></a> inhibit usability for people with visual and cognitive disabilities</li>
</ul>
</li>
<li><strong>Should</strong>
<ul>
<li>Make the relationship between page controls and the notification explicit with the <code>aria-controls</code> attribute if another part of the page controls what appears in the alert</li>
</ul>
</li>
<li><strong>Should not</strong>
<ul>
<li>Reuse bespoke UI intended for other message or navigation types</li>
</ul>
</li>
<li><strong>May</strong>
<ul>
<li>Auto-dismiss once originating cause has been resolved</li>
<li>Display notifications in unique UI to create distinction around themselves and the the page content</li>
<li>Update a live region of the page</li>
<li>Use the HTML <code>&lt;aside&gt;</code> tag, denoting the section that, though related to the main element, doesn't belong to the main flow</li>
</ul>
</li>
</ul>
<h4 id="alert-notification-message" tabindex="-1"><a class="header-anchor" href="#alert-notification-message">#</a> Alert Notification Message</h4>
<ul>
<li><strong>Should</strong>
<ul>
<li>Clearly communicate what has happened and how to proceed</li>
</ul>
</li>
<li><strong>May</strong>
<ul>
<li>May provide anchors directing users to error origin</li>
</ul>
</li>
</ul>
<h3 id="implementation" tabindex="-1"><a class="header-anchor" href="#implementation">#</a> Implementation</h3>
<cdr-doc-example-code-pair repository-href="/src/components/button" :sandbox-data="$page.frontmatter.sandboxData" :model="{isHidden: true}">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-chip</span>  <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isHidden = !isHidden<span class="token punctuation">"</span></span> <span class="token attr-name">aria-controls</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>alertContainer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
 Demo User Account Alert
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-chip</span><span class="token punctuation">></span></span>


<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-banner</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>alertContainer<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>error<span class="token punctuation">"</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>alert<span class="token punctuation">"</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>!isHidden<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#icon-left</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>icon-error-fill</span> <span class="token attr-name">inherit-color</span><span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
  You will be logged out, click the "Demo User Account Alert" Button to stay logged in
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-banner</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></cdr-doc-example-code-pair>
<br />
<hr />
<br />
<h2 id="user-confirmation-alerts" tabindex="-1"><a class="header-anchor" href="#user-confirmation-alerts">#</a> User Confirmation Alerts</h2>
<p>These alerts require the user to interact with additional options provided within the message and request user confirmation of a task or process initiated by the user or the application itself.</p>
<cdr-table class="advanced-table" full-width=false>
  <tr>
    <th class="advanced-table__header">
      Priority
    </th>
    <td><icon-warning-fill/> Prominent, high priority</td>
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
          <li>The user must confirm a requested action</li>
          <li>The user must agree to terms and conditions</li>
          <li>The user must acknowledge a change or condition that will effect the page</li>
          <li>The user is presented with a required option that is page blocking</li>
        </cdr-list>
    </td>
  </tr>
  <tr>
    <th class="advanced-table__header">Interaction</th>
    <td>Blocking, required</td>
  </tr>
  <tr>
    <th class="advanced-table__header">Information</th>
    <td>Required user conditions or acceptance</td>
  </tr>
  <tr>
  <th class="advanced-table__header">Location</th>
  <td>
    <cdr-list>
      <li>Overlay</li>
      <li>Typically in the middle of the page</li>
    </cdr-list>
  </td>
  </tr>
  <tr>
    <th class="advanced-table__header">Options</th>
    <td>
      <cdr-list>
        <li>May assign focus to the most appropriate action</li>
      </cdr-list>
    </td>
  </tr>
  <tr>
  <th class="advanced-table__header">Components</th>
  <td>
    <cdr-list>
      <li><cdr-link href="../../components/modal/">Modal</cdr-link></li>
    </cdr-list>
  </td>
  </tr>
</cdr-table>
<h3 id="use-when-1" tabindex="-1"><a class="header-anchor" href="#use-when-1">#</a> Use When</h3>
<ul>
<li>The message content provides actionable options, which are critical and need immediate attention</li>
<li>The message is dismissible by a user</li>
<li>Page usage is blocked until the user takes an action within the message or exits</li>
</ul>
<h3 id="don-t-use-when-1" tabindex="-1"><a class="header-anchor" href="#don-t-use-when-1">#</a> Don't Use When</h3>
<ul>
<li>There is no action the user must take</li>
<li>The alert provides context to the page or page section (see <a href="#alert-notifications">Alert Notifications</a>)</li>
<li>Providing errors, warnings, or success messaging related to user entered formatting, incomplete inputs, or invalid selections (see <a href="../validation-notifications">Validation Notifications</a>)</li>
<li>Confirming that a task or process initiated by the user was completed successfully (see <RouterLink to="/patterns/status-notifications/#transient-status-notifications">Transient Status Notifications</RouterLink>)</li>
<li>The message contains a rich UI experience where users interaction is not required (see <RouterLink to="/components/modal/">Modal</RouterLink>)</li>
</ul>
<h3 id="anatomy-of-a-user-confirmation-alert" tabindex="-1"><a class="header-anchor" href="#anatomy-of-a-user-confirmation-alert">#</a> Anatomy of a User Confirmation Alert</h3>
<cdr-img :src="$withBase('/notifications/confirmation-alert-anatomy.png')" alt="Diagram for alert dialogs, annotating the required layout of the elements listed below" />
<p>User confirmation alerts are urgent, blocking interactions that use a special type of modal called an alert dialog</p>
<p>The following are additive requirements to what the <RouterLink to="/components/modal/">Cedar Modal component</RouterLink> provides by default:</p>
<h4 id="alert-container" tabindex="-1"><a class="header-anchor" href="#alert-container">#</a> Alert Container</h4>
<ul>
<li><strong>Must</strong>
<ul>
<li>Apply the <code>role=&quot;alertdialog&quot;</code> to the modal dialog property, review <RouterLink to="/components/modal/">Modal</RouterLink> component documentation for more instruction</li>
</ul>
</li>
</ul>
<h4 id="alert-actions" tabindex="-1"><a class="header-anchor" href="#alert-actions">#</a> Alert Actions</h4>
<ul>
<li><strong>May</strong>
<ul>
<li>Assign focus to the most appropriate actionable element within the alert</li>
</ul>
</li>
</ul>
<h3 id="implementation-1" tabindex="-1"><a class="header-anchor" href="#implementation-1">#</a> Implementation</h3>
<p><RouterLink to="/components/modal/#using-modals-as-alert-dialogs">Using Modals as alert dialogs</RouterLink></p>
<h2 id="references" tabindex="-1"><a class="header-anchor" href="#references">#</a> References</h2>
<ul>
<li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-identified.html" target="_blank" rel="noopener noreferrer">Error Identification WCAG 3.3.1<ExternalLinkIcon/></a></li>
<li><a href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#qr-minimize-error-identified" target="_blank" rel="noopener noreferrer">How to meet SC 3.3.1<ExternalLinkIcon/></a></li>
</ul>
</cdr-doc-table-of-contents-shell>
</template>
