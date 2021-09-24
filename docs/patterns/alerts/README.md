---
{
  "title": "Alerts",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "summary": "",
  "sandboxData": {
    "components": "CdrBanner, CdrButton"
  },
  "breadcrumbs": [
    {
      "text": "Patterns/"
    }
  ],
}
---

<cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>

## Overview

Alerts inform our users that something important has happened on the page.
They may communicate a critical error or request additional required input from our users.
Even if not page page blocking, alerts need to be assertive, important messages whose intent is to interrupt the user flow.

## Alert Notifications

Persistent Alert Notifications provide brief, critical responses to changes in a pages data or user state.
These messages, displayed inline, normally in close relation to the elements needing users attention.
Their job is to keep users informed of important system or time-sensitive changes.
As with other notifications, alert notifications are not provided as part of a pages content.
Because of their assertive nature, alert notifications should be used sparingly, reserved for situations where the user's immediate attention is required. 
Dynamic notifications that are less urgent should use one of the appropriate [status notification](/patterns/status-notifications/) types instead.

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
          <li>The user is required to make a time sensitive interaction</li>
        </cdr-list>
    </td>
  </tr>
  <tr>
    <th class="advanced-table__header">Interaction</th>
    <td>Non-blocking, most often inline, required</td>
  </tr>
  <tr>
    <th class="advanced-table__header">Information</th>
    <td>Critical or time sensitive errors and warnings </td>
  </tr>
  <tr>
  <th class="advanced-table__header">Location</th>
  <td>Inline on page, generally located in associated section of effected content</td>
  </tr>
  <tr>
    <th class="advanced-table__header">Options</th>
    <td>
      <cdr-list>
        <li>May auto-dismiss once originating cause has been resolved</li>
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

### Use When
-  The content added to the page is critical and needs immediate attention
-  The application has made updates
-  There are application failures, such as a lost connection to the server where local changes will not be saved
-  The user is required to make a time sensitive interaction
-  The user is presented with a required option that is page blocking

### Don't Use When
- Confirming that a task or process initiated by the user was completed successfully (see [Transient Status Notifications](#transient-status-notifications))
- Providing contextual information on the page processes (see [Transient Status Notifications](#transient-status-notifications))
- Providing errors, warnings, or success messaging related to user entered formatting, incomplete inputs, or invalid selections (see [Validation Notifications](../validation-notifications))
- Page usage should be blocked until the user takes an action within the message or exits (see [Alert Dialog](../alert-notifications/#transient-alert-notifications))
- User interaction is required or content is critical to the user flow (see [Modal](../../components/modal/))
- The message contains a rich UI experience (see [Modal](../../components/modal/))
- The user makes a selection that does not change or add content to the page
- As the only indication of an error


While not invalid, using an alert, rather than a status notification within form field validation my cause 
confusion to some users of assisted technology. This is because it may read over the current or next form field label.

It may be helpful however to user role alert to represent a 
validation summary which would populate after a user attempts to submit the form.

### Anatomy of an alert notification

<cdr-img :src="$withBase('/notifications/persistentAlertAnatomy.png')" alt="Diagram for persistent alert notifications, annotating the required layout of the elements listed below" />

1. [Container](#alert-notification-container)
2. [Message](#alert-notification-message)

#### Alert Notification Container
- **Must**
  - Add `role=”alert”`to the container on activation, interrupting the page flow of the user without interfering with their ability to continue working
  - Add an ID to the container 
  - Pass the alert ID to the causing control if this alert was caused by an in-page action
  - Ensure the notification container is able to receive focus
- **Must Not**
  - Move focus automatically to the alert notification
  - Open as a blocking overlay window
  - Direct the user to a new page or window
  - Overuse alert notifications, [frequent interruptions](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-postponed.html) inhibit usability for people with visual and cognitive disabilities
- **Should**
  - Make the relationship between page controls and the notification explicit with the `aria-controls` attribute if another part of the page controls what appears in the alert
- **Should not**
  - Reuse bespoke UI intended for other message or navigation types
- **May**
  - May auto-dismiss once originating cause has been resolved
  - Display notifications in unique UI to create distinction around themselves and the the page content
  - Update a live region of the page
  - Use the HTML `<aside>` tag, denoting the section that, though related to the main element, doesn't belong to the main flow

#### Alert Notification Message
- **Should**
  -  Clearly communicate what has happened and how to proceed
- **May**
  - May provide anchors directing users to error origin


### Implementation

<cdr-doc-example-code-pair repository-href="/src/components/button" :sandbox-data="$page.frontmatter.sandboxData" :model="{isHidden: true}">

```html

<cdr-button  @click="isHidden = !isHidden" aria-controls="alertContainer">
 Demo User Account Alert
</cdr-button>


<cdr-banner id="alertContainer" type="error" role="alert" v-if="!isHidden">
  <icon-x-fill/> You will be logged out, click the "Demo User Account Alert" Button to stay logged in
</cdr-banner>

```

</cdr-doc-example-code-pair>

<br />
<hr />
<br />

## User Confirmation Alerts

These alerts require the user to interact with additional options provided within the message.
They request the user confirmation of a task or process initiated by the user or the application itself.

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

### Use When
- When the message content provides actionable options, which are themselves critical and needing immediate attention
- When the message is dismissible by a user
- Page usage should be blocked until the user takes an action within the message or exits

### Don't use when
- There is no action which the user must take.
- The alert provides context to the page or page section (see [Alert Notifications](#alert-notifications)
- Providing errors, warnings, or success messaging related to user entered formatting, incomplete inputs, or invalid selections (see [Validation Notifications](../validation-notifications)
- Confirming that a task or process initiated by the user was completed successfully (see [Transient Status Notifications](#transient-status-notifications)
- User interaction is required or content is critical to the user flow (see [Modal](../../components/modal/)
- The message contains a rich UI experience where users interaction is not required (see [Modal](../../components/modal/)

### Anatomy of a user confirmation alert

<cdr-img :src="$withBase('/notifications/confirmation-alert-anatomy.png')" alt="Diagram for alert dialogs, annotating the required layout of the elements listed below" />

User confirmation alerts are urgent blocking interactions that use a special type of modal called an alert dialog

The following are additive requirements to what the [Cedar modal component](../../components/modal/) provides by default.
#### Alert Container
- **Must**
  -  Apply the `role="alertdialog"` to the modal dialog property, review [Cedar modal component](../../components/modal/) for more instruction
#### Alert Actions
- **May**
  - assign focus to the most appropriate actionable element within the alert
## Implementation

[Cedar modal component](../../components/modal/#multiple-modals-on-one-page)
## References

-  [Error Identification WCAG 3.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-identified.html)
-  [How to meet SC 3.3.1](https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#qr-minimize-error-identified)

</cdr-doc-table-of-contents-shell>
