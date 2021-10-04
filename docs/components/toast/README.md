---
{
  "title": "Toast",
  "layout_type": "LayoutComponent",
  "summary": "A type of non-modal dialog used to communicate the status of a task or process.",
  "title_metadata": "CdrToast",
  "breadcrumbs": [
    {
      "text": "Components/"
    }
  ],
  "sandboxData": {
    "components": "CdrToast, CdrButton, CdrChip"
  },

  "TODO-DO/DONT": [
    {
      "type": "do",
      "image": "",
      "ratio": "4-3",
      "alt": "Image showing proper COMPONETNAME usage",
      "caption": "TODO"
    },
    {
      "type": "dont",
      "image": "",
      "ratio": "4-3",
      "alt": "Image showing improper COMPONETNAME usage",
      "caption": "TODO"
    }
  ],

  "versions": [
    {
      "components": [
        {
          "name": "CdrToast",
          "api": {
            "props": [
              {
                "name": "type",
                "type": "string",
                "default": "'default'",
                "description": "Sets the banner style. Possible values: { 'info' | 'success' | 'warning' | 'error' | 'default'}"
              },
              {
                "name": "open",
                "type": "boolean",
                "default": "false",
                "description": "Used to programmatically control the toast open/close state"
              },
              {
                "name": "autoDismiss",
                "type": "boolean",
                "default": "true",
                "description": "If set to `false`, the toast will not automatically close after the set interval"
              },
              {
                "name": "dismissDelay",
                "type": "number",
                "default": "5000",
                "description": "Used to change the interval (in milliseconds) before the toast automatically closes"
              },                   
            ],
            "slots": [
              {
                "name": "default",
                "description": "Slot for notification content"
              },
              {
                "name": "icon-left",
                "description": "Slot for icon matching toast messaging type"
              },
            ],
            "events": [
              {
                "name": "open",
                "arguments": "event",
                "description": "$emit event fired when opening the toast"
              },
              {
                "name": "closed",
                "arguments": "event",
                "description": "$emit event fired when closing the toast"
              }
            ],
          }
        }
      ]
    }
  ]
}
---

<cdr-doc-table-of-contents-shell >

# Overview

CdrToast is a type of non-modal dialog used to communicate the status of a task or process. A proper toast is concise, time-relevant, and temporary.

There are five different options for styling the banner, based on the [message type](../toast/#guidelines).

## Default Banner with Icon Left

A toast should be passed a contextually appropriate icon using the `icon-left` slot.

<cdr-doc-example-code-pair repository-href="/src/components/CdrToast"
:load-sprite="true"
:sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrToast, CdrButton, IconCheckFill'})" :model="{ opened: false }" >

```html
<div>
  <cdr-button @click="opened = true">Trigger toast</cdr-button>
  <!-- CdrToast should always be contained within an absolutely 
  positioned element in the top right of your page -->
  <div style="position: absolute; top: 2rem; right: 1.5rem">
    <cdr-toast
      :open="opened"
      type="success"
      @closed="opened = false">
      <template #icon-left>
        <icon-check-fill inherit-color>
      </template>
      I am a success toast
    </cdr-toast>
  </div>
</div>
```
</cdr-doc-example-code-pair>

## Persistent toast

CdrToast provides an optional `autoDismiss` property to disable the auto-dismiss functionality.

<cdr-doc-example-code-pair repository-href="/src/components/CdrToast"
:load-sprite="true"
:sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrToast, CdrChip, IconWarningFill'})" :model="{ opened: false }" >

```html
<div>
  <cdr-chip
    :aria-pressed="opened"
    @click="opened = true"
  >
    Trigger toast
  </cdr-chip>
  <!-- CdrToast should always be contained within an absolutely 
  positioned element in the top right of your page -->
  <div style="position: absolute; top: 2rem; right: 1.5rem">
    <cdr-toast
      :open="opened"
      :auto-dismiss="false"
      type="warning"
      @closed="opened = false">
      <template #icon-left>
        <icon-warning-fill inherit-color>
      </template>
      I am a warning toast and must be dismissed by user action
    </cdr-toast>
  </div>
</div>
```
</cdr-doc-example-code-pair>

## Accessibility

Many WCAG requirements are contextual to their implementation. To ensure that usage of this component complies with accessibility guidelines you are responsible for the following:
- Add `role="alert"` for messages that are important or time sensitive to ensure that the messaging is immediately announced to screen readers. For other content, add `aria-live="polite"`.
- Don't rely on color alone to convey your message. Provide an additional indicator to color, like an icon: [WCAG 1.4.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html)
- Error Identification techniques and criteria: [WCAG 3.3.1](https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html)

# Guidelines

There are five information types supported for toasts: **error, warning, success, informational, and default**. Each type corresponds with a color and icon to provide a consistent, universal experience for users.

### **Error**
Use to inform that something went wrong. They affect or block the user's experience and must be resolved before moving forward.

### **Warning**
Use for a message requiring attention but not resolution in order to continue. Warning banners might tell a user what could happen if they don’t address what they’re being warned about.

### **Success**
Use to communicate that an action has been successfully completed. Provides a positive response to user actions. No action is required.

### **Informational**
Use to provide context around a situation. No action is required.

### **Default**
Use to provide generic messaging that does not fit the other types

## Use when

- When providing an at-a-glance view into the status of a task or process 
- When confirming a user’s action was successful 
- When a background process updates 

## Don’t use when

- When a user’s input is required  
- When critical information is being communicated 
- When communicating alerts 

## Content 

- An icon is both user-configurable and required
- Titles should not exceed three words 
- Body copy should not exceed two lines 
- Content should be focused and be specific to a single message 
- Actions or links must be available elsewhere on the page 

## Structure 

- The width of a toast is fixed for non-mobile implementations 
- The height of a toast is variable, content depending

## Behavior 

- Toasts auto-dismiss after 5 seconds—ten if it includes an action
- Toasts may be manually dismissed sooner via the close button
- Mousing over a toast will pause the auto-dismiss timer and reset it on mouse leave.

## Placement 

- Toasts are delivered from the top-right of a page 
- The most recent toast is always displayed on top of a stack 

## Do / Don't

TODO: Embed do-dont using metadata from frontmatter

<!-- <do-dont :examples="$page.frontmatter.DATAKEY" /> -->

# API

## Props

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

## Slots

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />

## Events

<cdr-doc-api type="event" :api-data="$page.frontmatter.versions[0].components[0].api.events" />


</cdr-doc-table-of-contents-shell>
