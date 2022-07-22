---
{
  "title": "Switch",
  "layout_type": "LayoutComponent",
  "summary": "Permits users to select from two opposing options",
  "title_metadata": "CdrSwitch",
  "component_location": "https://github.com/rei/rei-cedar/tree/next/src/components/switch",
  "breadcrumbs": [
    {
      "text": "Components/"
    }
  ],
  "sandboxData": {
    "components": "CdrSwitch, CdrButton"
  },

  "content": [
    {
      "type": "do",
      "image": "switch/switch_clear_do_16-9.png",
      "ratio": "4-3",
      "alt": "Email notifications switch set to on.",
      "caption": "use key words first, forming unique labels."
    },
    {
      "type": "dont",
      "image": "switch/switch_clear_dont_16-9.png",
      "ratio": "4-3",
      "alt": "Switch label incorrectly used to ask users if they want to receive email notifications.",
      "caption": "ask questions in the label. "
    }
  ],

  "preferences": [
    {
      "type": "do",
      "image": "switch/switch_preferences_do_16-9.png",
      "ratio": "4-3",
      "alt": "A switch correctly applied to offer users the preference to reduce motion.",
      "caption": "use the switch component for preferences, settings, or other immediate functions."
    },
    {
      "type": "dont",
      "image": "switch/switch_preferences_dont_16-9.png",
      "ratio": "4-3",
      "alt": "A switch incorrectly used to allow users to show in stock stores first.",
      "caption": "use the switch component for filtering or sorting content."
    }
  ],

  "versions": [
    {
      "components": [
        {
          "name": "CdrSwitch",
          "api": {
            "props": [
              {
                "name": "id",
                "type": "string",
                "required": "true",
                "description": "Id for the CdrSwitch element. Required for accessibility."
              },
              {
                "name": "position",
                "type": "string",
                "default": "'top'",
                "description": "Sets the position where the popover will render relative to the trigger element. Possible values: 'top' | 'bottom' | 'left' | 'right'"
              },
              {
                "name": "autoPosition",
                "type": "boolean",
                "default": "true",
                "description": "If set to `true`, popover will attempt to dynamically set it's position to ensure it renders within the visible browser window. If `false` the popover will always render in the provided `position`."
              },
              {
                "name": "contentClass",
                "type": "string",
                "description": "Adds a custom class to the popover content wrapper. Allows for overriding it's size, styling, etc."
              },
              {
                "name": "open",
                "type": "boolean",
                "description": "Used to programmatically control the popover state. Does not need to be set if you are using the `trigger` slot. See the Custom Trigger examples for more info."
              },
            ],
            "slots": [
              {
                "name": "default",
                "description": "Slot for CdrPopover content."
              },
              {
                "name": "trigger",
                "description": "Slot for the element that triggers the popover. Element should be a button and must be the first and only child of this slot. Event handlers are bound to this element automatically."
              }
            ],
            "events": [
              {
                "name": "closed",
                "arguments": "event",
                "description": "$emit event fired when tooltip is closed."
              },
              {
                "name": "opened",
                "arguments": "event",
                "description": "$emit event fired when tooltip is opened."
              }
            ]
          }
        }
      ]
    }
  ]
}
---

<cdr-doc-table-of-contents-shell parentSelector="h2" childSelector="h3">

## Overview

TBD. 

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location"
:sandbox-data="$page.frontmatter.sandboxData" >

```html
<cdr-popover id="popover-example" position="top">
  <template #trigger>
    <cdr-button>
      Click me
    </cdr-button>
  </template>
  <div>
    I provide additional information to the user
  </div>
</cdr-popover>
```
</cdr-doc-example-code-pair>

### Custom Trigger

CdrPopover can also be controlled programmatically using the `open` prop. However, doing so means that you must implement certain behavior yourself:

- The CdrPopover element and the trigger element must be wrapped in a div with `position: relative` and `width: max-content`.
- The `open` property should be toggled to true when the trigger element is clicked.
- You will need to add an event listener on the CdrPopover element for the `@closed` event. In the example below we use `@closed="open = false"` to change the value passed to the `open` prop.
- The trigger element should have it's `aria-controls` property set to the ID of the CdrPopover, and it's `aria-haspopup` property set to "dialog".

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location"
:sandbox-data="$page.frontmatter.sandboxData" :model="{open: false}">

```html
<div style="position: relative; width: max-content;">
  <cdr-button
    aria-haspopup="dialog"
    aria-controls="popover-custom-example"
    @click="open = !open"
  >
    Click me
  </cdr-button>
  <cdr-popover id="popover-custom-example" position="top" :open="open" @closed="open = false">
    <div>
      I provide additional information to the user
    </div>
  </cdr-popover>
</div>
```
</cdr-doc-example-code-pair>


### Accessibility

To ensure your usage of this component complies with accessibility guidelines you are responsible for the following:

- Always provide a descriptive label as a slotted element to the `cdr-switch` element
- Always provide an `id` to the label of the switch 



This component complies with WCAG guidelines by:

- Referencing the `id` of the switch label by using the `aria-label` property 
- Setting the `role` of the switch button element to `switch`
- Applying the `aria-checked` attribute 
 


## Guidelines


### Use when
- Displaying two options (yes or no; on or off)
- Changing system-level settings, preferences, or other functions 
- The change needs to take immediate effect 

### Don’t use when
- Requiring the user to save or submit to apply the state. Instead, use checkboxes or radio buttons 
- Showing more than one option Instead, use [checkboxes](../checkboxes/)
- Allowing users to filter. Instead, use [checkboxes](../checkboxes/) or [chips](../chips/) 

### Content
- Keep labels short and direct
- The label should describe what the control will do when the switch is on 
- Labels should describe the state of the system when the switch is on (when in doubt, say the label aloud and append “on/off” to the end)
- Start labels with a capital letter and use sentence case
- Labels should have one or two words, preferably nouns, that describe the functionality of the switch
  
### Do / Don't


<do-dont :examples="$page.frontmatter.content" />

<do-dont :examples="$page.frontmatter.essential" />
  
## Behavior

### Choosing the right component

|                      | **Radio Button**                  | **Checkbox**                      | **Single Checkbox**               | **Switch**         | **Toggle Button**  |
|----------------------|-----------------------------------|-----------------------------------|-----------------------------------|--------------------|--------------------|
| Options available    | Multiple                          | Multiple                          | 1                                 | 1                  | Multiple           |
| Selections available | 1                                 | 0 – all                           | 2 (on/off)                        | 2 (on/off          | 1                  |
| Default option       | Yes                               | No                                | Yes                               | Yes                | Yes                |
| Choices              | Mutually exclusive                | Independent of each other         | Mutually exclusive                | Mutually exclusive | Mutually exclusive |
| Takes effect         | After user clicks a submit button | After user clicks a submit button | After user clicks a submit button | Immediately        | Immediately        | 

# API

<cdr-icon class="cdr-doc-code-snippet__action-icon" use="#brand-github"/> View it on Github: 
<cdr-link :href="$page.frontmatter.component_location">{{$page.frontmatter.component_location}}</cdr-link>

## Props

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

## Slots

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />

## Events

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.events" :slots-getting-started-link="false" />

</cdr-doc-table-of-contents-shell>
