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


Alerts are a critical response to changes that have happened after page load.
Their job is to keep our users informed of important system or time-sensitive changes.

Like notifications, alerts are messages that occur after some external thing has happened, 
they are not provided as part of a pages content.

Unlike notifications, alerts use the `role="alert"` markup and are intended to interrupt a user from their current flow.
For example, when `role=”alert”` is applied to a banner message the browsers user agent
will trigger a system alert event if the operating system allows. This event will ensure that,
even if the user is on a different browser window they will be interrupted and notified that 
something has happened on the page.
Because of their intrusive nature, alerts must be used sparingly and only in situations where the user's immediate attention is required. 
Dynamic messages that are less urgent should use one of the appropriate notification types, such as [persi]()`aria-live="polite"`.

These messages are provided to the user when:
-  The application has made updates
-  There are application failures
  - such as a lost connection to the server, local changes will not be saved
-  The user is required to provide time sensitive interactions
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
  <icon-x-fill/> you have a critical error
</cdr-banner>


```

</cdr-doc-example-code-pair>

### Use when
-  Use `role=”alert”` for non-dismissible alert messages
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

## UI options and considerations

### Cedar banner component
<cdr-doc-example-code-pair repository-href="/src/components/alert"
:sandbox-data="$page.frontmatter.sandboxData" >

```html
<cdr-alert type="error" role="alert">
  <icon-x-fill/> Error
</cdr-alert>
```
</cdr-doc-example-code-pair>

### Alert dialog

Alert Dialogs provide page blocking information that users are required to interact with before proceeding.
They appear over the interface and block further interactions until an action is selected.

#### Use When
- When the page requires immediate action by the current user.
- When the message content should block other page interaction.

#### Don't use when
- There is no action the the user must take ([see modal](/components/modal/)).
- The alert provides context to the page or page section.

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
