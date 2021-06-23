---
{
  "title": "Alerts",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "summary": "",
  "sandboxData": {
    "components": "CdrBanner"
  },
  "breadcrumbs": [
    {
      "text": "Patterns/"
    }
  ],
}
---

<cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>
* Response to change > System updates
* Response to change > User Input: requires time sensitive interaction 

Alerts are critical responses to changes that have happened after page load. 
Their job is to keep our users informed of important system or time-sensitive changes. 

Before using an alert make sure your answer to the following questions are all "yes"
Make sure the information you are presenting in an alert warrants taking away your user’s attention from what they are doing (i.e. for errors, warnings, and validations)

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

### Cedar alert component
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

</cdr-doc-table-of-contents-shell>
