---
{
  "title": "Toggle Button",
  "layout_type": "LayoutComponent",
  "summary": "Permits user to switch two or more options on and off",
  "title_metadata": "CdrToggleButton",
  "component_location": "https://github.com/rei/rei-cedar/tree/next/src/components/toggle-button",
  "breadcrumbs": [
    {
      "text": "Components/"
    }
  ],
  "width": [
      {
"type": "do",

"image": "toggle-button/toggle-button_width_do_16-9.png",

"ratio": "16-9",

"alt": "A toggle button with two segments of equal width.",

"caption": "ensure that each segment is equal in width."

},
    {
      "type": "dont",
      "image": "toggle-button/toggle-button_width_dont_16-9.png",
      "ratio": "16-9",
      "alt": "A toggle button with two segments of unequal width.",
      "caption": "allow segments to be varying widths."
    }
  ],

  "segment": [
      {
      "type": "do",
      "image": "toggle-button/toggle-button_segment_do_16-9.png",
      "ratio": "16-9",
      "alt": "A toggle button with two segments labeled day and night.",
      "caption": "limit the number of segments to aid in usability and scannability."
    },
    {
      "type": "dont",
      "image": "toggle-button/toggle-button_segment_dont_16-9.png",
      "ratio": "16-9",
      "alt": "A toggle button with three segments labeled morning, afternoon, and night that don't fit the breakpoint.'",
      "caption": "include more segments than what fit on the smallest breakpoint."
    } 
  ],
  "contentTypes": [

{

"type": "do",

"image": "toggle-button/toggle-button_content-types_do_16-9.png",

"ratio": "16-9",

"alt": "A toggle button with two segments labeled centimeters and inches.",

"caption": "use content types that make sense for each experience."

},

{

"type": "dont",

"image": "toggle-button/toggle-button_content-types_do_16-9.png",

"ratio": "16-9",

"alt": "A toggle button with a ruler icon on one segment and not on the other.",

"caption": "mix content types in the same toggle button."

}

],
    "versions": [
    {
      "components": [
        {
          "name": "CdrToggleGroup",
          "api": {
            "props": [
              {
                "name": "size",
                "type": "boolean",
                "description": "When true, this prop will make the toggle buttons larger than the default size."
              },
            ],
            "slots": [
              {
                "name": "default",
                "description": "Slot for individual cdr-toggle-button elements"
              }
            ],
          }
        },
       {
          "name": "CdrToggleButton",
          "api": {
            "props": [
              {
                "name": "toggleValue",
                "type": "string",
                "required": "true",
                "description": "When a toggleButton is selected, this prop provides the selected value for the parent CdrToggleGroup. It also provides a label if no text is slotted to the toggleButton."
              }
            ],
            "slots": [
              {
                "name": "default",
                "description": "Slot for a toggle button label. Can either be text or an icon or both."
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

<br>

<cdr-banner type="warning" aria-live="polite"><template #icon-left><icon-information-fill inherit-color /></template><span style="font-weight:500">ToggleButton is only available in the Vue 3 (v13) Cedar release.</span><template #message-body>Upgrade to Vue 3 and Cedar v13 to access the ToggleButton component.</template></cdr-banner>

## Overview

Toggle buttons are a set of two or more options, each of which functions as a button. They can be used to switch between alternative views of similar or related content in a contextual setting. For instance, the component allows users to toggle between a grid or list view, or to toggle between centimeters or inches.

### The Basics 
The Toggle Button has at least two selections, with a default option selected. The component can also be extended to include more than two. Take care in using Toggle Buttons that include more than five selections, as space on mobile is limited. Consider checking that the Toggle Button will work on Cedar’s XS breakpoint to ensure usage.

### Default

Default toggle button with medium size and standard spacing.

### Icon with label

Default size toggle button with icon and label

### Icon

Default size toggle button with just an icon

### Full-width spacing

Displays at full-width of its container.

### Large

Size can be changed to large based on where the component is being used.

Toggle buttons, checkboxes, radio buttons, and switches are all similar types of selection controls, but they generally are not interchangeable. If you're not sure which one to use for a certain scenario, here's a table that might help. 


### Accessibility

To ensure that usage of this component complies with accessibility guidelines: 

- Always provide a `toggleValue` prop. The value of this property will be used as an `aria-label` attribute. This can be useful to spell out abbreviated values (ie "centimeters" instead of "cm") for screen readers, as well as provide a label when only an icon is slotted to the toggle button

This component complies with WCAG guidelines by: 

- Setting the role of the unordered list to `radiogroup`
- Setting the role of the individual toggle buttons to `radio`
- Providing an `aria-checked` property for each toggle button

<hr>

## Guidelines

### Use When

- Providing choices that affect an object, state, or view 
- Displaying two or more mutually exclusive options 
- Changing contextual information 
- The change needs to take immediate effect 

### Don't Use When
- Displaying content that while related, isn’t the same type, which should be separated completely. Instead, use [tabs](../tabs/)
- Content should be separated completely. Instead, use [tabs](../tabs/)
- Allowing the user to take an action, such as add and remove. Instead, use a [button](../button/)
- Content can’t fit on the smallest breakpoint (too many options can be hard to scan and navigate). Aim for five options at most. Instead, use [radio buttons](../radio/) or [select](../selects/)

### Choosing the right component

Switches, checkboxes, radio buttons, and toggle buttons are all similar types of selection controls, but are generally not interchangeable. If you're not sure which one to use for a certain scenario, here's a table that might help. 

<cdr-table striped>
  <tbody>
      <tr>
      <td></td>
      <td><strong>Radio Button</strong></td>
      <td><strong>Checkbox</strong></td>
      <td><strong>Single Checkbox</strong></td>
      <td><strong>Switch</strong></td>
      <td><strong>Toggle Button</strong></td>
    </tr>
    <tr>
      <td><strong>Selections available</strong></td>
      <td>At least two</td>
      <td>At least one</td>
      <td>Just one</td>
      <td>Only two (on or off)</td>
      <td>At least two (this or that)</td>
    </tr>
    <tr>
      <td><strong>Default option</strong></td>
      <td>Yes</td>
      <td>No</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td><strong>Choices</strong></td>
      <td>Mutually exclusive</td>
      <td>Independent of each other</td>
      <td>Mutually exclusive</td>
      <td>Mutually exclusive</td>
      <td>Mutually exclusive</td>
    </tr>
    <tr>
      <td><strong>Takes effect</strong></td>
      <td>After a user clicks a submit button</td>
      <td>After a user clicks a submit button</td>
      <td>After a user clicks a submit button</td>
      <td>Immediately</td>
      <td>Immediately</td>
    </tr>
  </tbody>
</cdr-table>

### Content
- Use nouns or noun phrases for labels 
- As much as possible, use content with a similar character count in each segment 

**Use text only when:**
- Text/copy adequately informs the user of the expected content  
- There is no CdrIcon to properly inform the user of represented content

**Accessibility note:** As with any graphic or image, be sure to provide a toggleValue attribute. This attribute will be used for people who use screen readers. 

<hr>

### Do / Don't

<do-dont :examples="$page.frontmatter.width" />

<do-dont :examples="$page.frontmatter.segment" />

<do-dont :examples="$page.frontmatter.contentTypes" />

<hr>

## API
Toggle Button is built from two components: **CdrToggleGroup** and **CdrToggleButton**. These are meant to be used together.

### Props
#### CdrToggleGroup
<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

#### CdrToggleButton
<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[1].api.props" />

### Slots
#### CdrToggleGroup
<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />

#### CdrToggleButton
<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[1].api.slots" />

### Usage

The parent **CdrToggleGroup** contains all the child **CdrToggleButton** components. This component will track the value of the selected toggle button among all the toggle buttons slotted to it.  **CdrToggleGroup** requires `v-model` to track the value of the selected child **CdrToggleButton**.

```vue
<template>
   <cdr-toggle-group v-model="units">
      <cdr-toggle-button toggleValue="centimeters">cm</cdr-toggle-button>
      <cdr-toggle-button toggleValue="inches">in</cdr-toggle-button>
    </cdr-toggle-group>
</template>
```

The `toggleValue` prop of the selected **CdrToggleButton** will determine the `modelValue` of the selected toggle button. If no text or icon has been slotted to the toggle button, the string provided for the required `toggleValue` prop will be displayed as the button text. In cases where the slotted text and the `toggleValue` are different, as shown above, it will be the slotted text which gets displayed in the browser.

The `modelValue` of the **CdrToggleGroup** will always be determined by the `toggleValue` prop of the selected **CdrToggleButton**. Also, screen readers will choose to read the `toggleValue` over the slotted text, which can be handy in the case of abbreviations like in the example above.

</cdr-doc-table-of-contents-shell>