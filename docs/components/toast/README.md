---
{
  "title": "Toast",
  "layout_type": "LayoutComponent",
  "summary": "Non-modal dialog used to communicate the status of a task or process.",
  "title_metadata": "CdrToast",
  "component_location": "https://github.com/rei/rei-cedar/tree/next/src/components/toast",
  "breadcrumbs": [
    {
      "text": "Components/"
    }
  ],
  "sandboxData": {
    "components": "CdrToast"
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
                "description": "Sets the toast style. Possible values: { 'info' | 'success' | 'warning' | 'error' | 'default'}"
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

<cdr-doc-table-of-contents-shell parentSelector="h2" childSelector="h3">

## Overview

CdrToast is a type of non-modal dialog used to communicate the status of a task or process. A proper toast is concise, time-relevant, and temporary.

There are five different options for styling the toast, based on the [message type](../toast/#guidelines).

### Default toast with icon

A toast should be passed a contextually appropriate icon using the `icon-left` slot.

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location"
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
        <icon-check-fill inherit-color/>
      </template>
      I am a success toast
    </cdr-toast>
  </div>
</div>
```
</cdr-doc-example-code-pair>

### Persistent toast

CdrToast provides an optional `autoDismiss` property to disable the auto-dismiss functionality.

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location"
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
        <icon-warning-fill inherit-color/>
      </template>
      I am a warning toast and must be dismissed by user action
    </cdr-toast>
  </div>
</div>
```
</cdr-doc-example-code-pair>

### Adjusting auto-dismiss timing

CdrToast provides an optional `dismissDelay` property to adjust timing of the automatic dismissal under certain conditions, such as when the toast contains an action.

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location"
:load-sprite="true"
:sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrToast, CdrButton, CdrLink, IconInformationFill'})" :model="{ opened: false }" >

```html
<div>
  <cdr-button @click="opened = true">Trigger toast</cdr-button>
  <!-- CdrToast should always be contained within an absolutely 
  positioned element in the top right of your page -->
  <div style="position: absolute; top: 2rem; right: 1.5rem">
    <cdr-toast
      :open="opened"
      :dismiss-delay="10000"
      type="info"
      @closed="opened = false">
      <template #icon-left>
        <icon-information-fill inherit-color/>
      </template>
      I am an informational toast with an <cdr-link href="#">action</cdr-link>
    </cdr-toast>
  </div>
</div>
```
</cdr-doc-example-code-pair>

### Accessibility

- All CdrToast components provide `role="status"` to expose the notification to Accessibility APIs

Many WCAG requirements are contextual to their implementation. To ensure that usage of this component complies with accessibility guidelines you are responsible for the following:
- Don't rely on color alone to convey your message. Provide an additional indicator to color, like an icon: [WCAG 1.4.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html)
- Error Identification techniques and criteria: [WCAG 3.3.1](https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html)
- See [Transient Status Notifications](../../patterns/status-notifications#transient-status-notifications) for more information

## Guidelines

There are five information types supported for toasts: **error, warning, success, informational, and default**. Each type corresponds with a color and icon to provide a consistent, universal experience for users.

### Information types
#### **Error**
Use to inform that something went wrong. They affect or block the user's experience and must be resolved before moving forward.

#### **Warning**
Use for a message requiring attention but not resolution in order to continue. Warning toasts might tell a user what could happen if they don’t address what they’re being warned about.

#### **Success**
Use to communicate that an action has been successfully completed. Provides a positive response to user actions. No action is required.

#### **Informational**
Use to provide context around a situation. No action is required.

#### **Default**
Use to provide generic messaging that does not fit the other types

### Use when

- Confirming that a task or process initiated by the user was completed successfully
- Providing contextual information on the page processes 
- Read more about using Toasts for [Transient Status Notifications](../../patterns/status-notifications#transient-status-notifications)

### Don’t use when

- When a user’s input is required  
- When critical information is being communicated 
- When communicating alerts 

### Content 

- An icon is both user-configurable and required
- Titles should not exceed three words 
- Body copy should not exceed two lines 
- Content should be focused and be specific to a single message 
- Actions or links must be available elsewhere on the page 

### Structure 

- The width of a toast is fixed for non-mobile implementations 
- The height of a toast is variable, content depending

### Behavior 

- Toasts auto-dismiss after 5 seconds—ten if it includes an action
- Toasts may be manually dismissed sooner via the close button
- Mousing over a toast will pause the auto-dismiss timer and reset it on mouse leave.

### Placement 

- Toasts are delivered from the top-right of a page 
- The most recent toast is always displayed on top of a stack 

# API

<cdr-icon class="cdr-doc-code-snippet__action-icon" use="#brand-github"/> View it on Github: 
<cdr-link :href="$page.frontmatter.component_location">{{$page.frontmatter.component_location}}</cdr-link>

## Props

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

## Slots

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />

## Events

<cdr-doc-api type="event" :api-data="$page.frontmatter.versions[0].components[0].api.events" />

## Usage

### Positioning

CdrToast component(s) should be contained within a `position: absolute` container in the top-right corner of your page. On smaller screens, they should appear at the top of the page and span the whole width of the viewport.

### Elevation

The CdrToast container should be be given an appropriate `z-index` value so that the toast components within will "float" on top of the other page elements.

### Multiples

If multiple CdrToast components are present, they should appear stacked with the newest at the bottom. Note: When a toast is closed, any toast components below it will take the place of the one above.

</cdr-doc-table-of-contents-shell>
