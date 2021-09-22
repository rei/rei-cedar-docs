---
{
  "title": "Alert Notifications",
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


Alerts provide critical response or notifications due to changes to a pages data or user state.
Their job is to keep users informed of important system or time-sensitive changes.

Like notifications, alerts are messages occurring after some external event has transpired. 
they are not provided as part of a pages content.


## Persistent Alert Notifications

Unlike status notifications, alerts use the `role="alert"` markup and are intended to interrupt a user from their current flow.
For example, when `role=”alert”` is applied to a banner message the browsers user agent
will trigger a system alert event if the operating system allows. This event will ensure that,
even if the user is on a different browser window they will be interrupted and notified that 
something has happened on the page.
Because of their intrusive nature, alerts must be used sparingly and only in situations where the user's immediate attention is required. 
Dynamic messages that are less urgent should use one of the appropriate [status notification](/patterns/status-notifications/) types.

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
          <li>The user is presented with a required option that is page blocking</li>
        </cdr-list>
    </td>
  </tr>
  <tr>
    <th class="advanced-table__header">Interaction</th>
    <td>Non-blocking, required</td>
  </tr>
  <tr>
    <th class="advanced-table__header">Information</th>
    <td>Critical or time sensitive information </td>
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
-  The application has made updates
-  There are application failures, such as a lost connection to the server where local changes will not be saved
-  The user is required to make a time sensitive interaction
-  The user is presented with a required option that is page blocking

While not invalid, using an alert, rather than a status notification within form field validation my cause 
confusion to some users of assisted technology. This is because it may read over the current or next form field label.

It may be helpful however to user role alert to represent a 
validation summary which would populate after a user attempts to submit the form.

### Implementation

<cdr-doc-example-code-pair repository-href="/src/components/button" :sandbox-data="$page.frontmatter.sandboxData" :model="{isHidden: true}">

```html

<cdr-button  @click="isHidden = !isHidden" aria-controls="alertContainer">
  {{isHidden ? 'click me' : 'dooh!'}}
</cdr-button>
<cdr-banner id="alertContainer" type="error" role="alert" v-if="!isHidden">
  <icon-x-fill/> There was a critical error
</cdr-banner>

```

</cdr-doc-example-code-pair>

### Use when
-  Use `role=”alert”` for messages that are only dismissible once the condition is no longer in an error state 
-  Use `role=”alertdialog”` for dismissible alert messages

## System alerts 
these short messages appear due to critical issues that have effected the user session or application.

| alert priorities     | error, warning |
| Content              | Includes the core, most important alert content. |
### Cedar component options
- Alert
- Toast

- ToDO identify(name) the types of alerts rather than the components to support them - alert dialog is a component, what type of message should use this?

## Accessibility
An alert is a special type of ARIA live region. Screen readers will announce the text inside the alert, without moving the focus to the alert message. 
"Activation: 
An alert can be activated by a user action (such as clicking on a button), a timed event, or other circumstance.

Keyboard: 
The focus stays where it is. The focus does not move anywhere when an alert is activated.

Screen Readers:
An alert is a special kind of assertive ARIA live region, so screen readers should immediately interrupt anything they were previously saying and instead read the announcement. Most screen readers say ""Alert,"" before reading the text inside the alert.
"
## API
| Content                                          | Accessibility          |
|--------------------------------------------------|------------------------|
| Includes the core, most important alert content. | `aria-live="Asertive"` |
|                                                  | 'role="alert"          |

## Transient Alert Notifications

Transient Alert Notifications are dismissible messages requiring additional user input.
They request the user confirmation of a task or process initiated by the user or the application itself.
### Use When
- When the page requires immediate action by the current user.
- When the message content provides actionable options
- When the message is dismissible by a user
- When the message content should block other page interaction.
### Don't use when
- There is no action which the user must take.
- The alert provides context to the page or page section.

### Alert Dialog
Most often, transient alert notifications will use a [modal dialog](../../components/modal/)
to present the user with a page blocking experience.

To use a modal as an alert add `role="alertdialog"`, note that dialogs do not use the `role="alert"` property
review the [Cedar modal component](../../components/modal/) for instruction on using Cedar components for your `alertdialog`.

Alert Dialogs provide page blocking information that users are required to interact with before proceeding.
They appear over the interface and block further interactions until an action is selected.

<cdr-doc-example-code-pair repository-href="/src/components/modal"
:sandbox-data="$page.frontmatter.sandboxData" :model="{ opened: false }">

```html
<cdr-button
  @click="opened = true"
  aria-haspopup="dialog"
>Terms and Conditions
</cdr-button>

<cdr-modal
  label="Add to Cart"
  :opened="opened"
  @closed="opened = false"
  aria-described-by="description"
  role="alertdialog"
>
  <template #title>
    <cdr-text
      tag="h3"
      class="title-header"
    >Add to Cart
    </cdr-text>
  </template>
  <cdr-text tag="p" id="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet dictum ipsum.</cdr-text>
</cdr-modal>
```
</cdr-doc-example-code-pair>

## References

-  [Error Identification WCAG 3.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-identified.html)
-  [How to meet SC 3.3.1](https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#qr-minimize-error-identified)

</cdr-doc-table-of-contents-shell>
