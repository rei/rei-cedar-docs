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
    "components": "CdrSwitch"
  },

  "label": [
    {
      "type": "do",
      "image": "switch/switch_clear_do_16-9.png",
      "ratio": "16-9",
      "alt": "Switch with label that says 'Email notifications'.",
      "caption": "use key word(s) first, forming unique labels."
    },
    {
      "type": "dont",
      "image": "switch/switch_clear_dont_16-9.png",
      "ratio": "16-9",
      "alt": "Switch with label that says 'Do you want to receive email notifications from us?'",
      "caption": "overload the popover with too much content "
    }
  ],

  "usage": [
      {
      "type": "do",
      "image": "switch/switch_preferences_do_16-9.png",
      "ratio": "16-9",
      "alt": "Switch with label that says 'Prefers reduced motion'.",
      "caption": "use the switch component for preferences, settings, or other immediate functions."
    },
    {
      "type": "dont",
      "image": "switch/switch_preferences_dont_16-9.png",
      "ratio": "16-9",
      "alt": "Switch with label that says 'Show in stock stores first'",
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
              }
            ],
            "slots": [
              {
                "name": "default",
                "description": "Slot for CdrSwitch label."
              }
            ],
            "events": [
              {
                "name": "switch",
                "arguments": "event",
                "description": "$emit event fired when the switch is toggled."
              }
            ]
          }
        }
      ]
    }
  ]
}
---

<cdr-doc-table-of-contents-shell>

## Overview
Switch is a system-wide control that is used to quickly change between two possible states. Toggles are only used for these binary actions that occur immediately after the user makes any changes.

### Default (standard spacing)

Default switch size and standard spacing.

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" :model="{ checked: false }">

```html
<div>
      <cdr-switch id="foo-123" :checked="checked" @switch="checked = !checked">
        Switch Label (medium)
      </cdr-switch>
</div>
```
</cdr-doc-example-code-pair>

### Default (full-width spacing)

Default switch size and full-width spacing.

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" :model="{ checked: false }">

```html
<div>
      <cdr-switch id="foo-345" :checked="checked" :full-width="true" @switch="checked = !checked">
        Switch Label (medium, full-width)
      </cdr-switch>
</div>
```
</cdr-doc-example-code-pair>

### Large (standard spacing)

Default switch size and standard spacing.

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" :model="{ checked: false }">

```html
<div>
      <cdr-switch id="foo-678" size="large" :checked="checked" @switch="checked = !checked">
       Switch Label (large)
      </cdr-switch>
</div>
```
</cdr-doc-example-code-pair>

### Large (standard)

Default switch size, standard spacing, and a label with custom styling.

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" :model="{ checked: false }">

```html
<div>
      <cdr-switch id="foo-101112" :checked="checked" @switch="checked = !checked">
        <cdr-text class="custom-text-style">Switch label with custom text style</cdr-text>
      </cdr-switch>
</div>
```
</cdr-doc-example-code-pair>

## Accessibility

To ensure that usage of this component complies with accessibility guidelines: 

- Always provide a descriptive label as a slotted element to the `cdr-switch` element 
- Always provide an `id` to the label of the switch 

This component complies with WCAG guidelines by: 

- Referencing the `id` of the switch label by using the `aria-label` property 
- Setting the `role` of the switch button element to `switch` 
- Applying the `aria-checked` attribute

<hr>

## Guidelines

### Use When

- Displaying two options (yes or no; on or off) 
- Changing system-level settings, preferences, or other functions 
- The change needs to take immediate effect 

### Don't Use When

- Requiring the user to save or submit to apply the state. Instead, use checkboxes or radio buttons 
- Showing more than one option. Instead, use checkboxes 
- Allowing users to filter. Instead, use checkboxes or chips

### Content

- Keep labels short and direct 
- The label should describe what the control will do when the switch is on 
- Labels should describe the state of the system when the switch is on (when in doubt, say the label aloud and append “on/off” to the end)  
- Start labels with a capital letter and use sentence case 
- Labels should have one or two words, preferably nouns, that describe the functionality of the switch

### Responsiveness

When a pull quote is displayed at XS breakpoint, the left border will appear below the pull quote and will use a smaller font size.

<hr>

### Do / Don't

<do-dont :examples="$page.frontmatter.label" />

### Do / Don't

<do-dont :examples="$page.frontmatter.usage" />

### Choosing the right component

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
      <td><strong>Options available</strong></td>
      <td>Multiple</td>
      <td>Multiple</td>
      <td>1</td>
      <td>1</td>
      <td>Multiple</td>
    </tr>
    <tr>
      <td><strong>Selections available</strong></td>
      <td>1</td>
      <td>0 - all</td>
      <td>2 (on/off)</td>
      <td>2 (on/off)</td>
      <td>1</td>
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

## API

### Props

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

### Slots

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />

### Events 

<cdr-doc-api type="event" :api-data="$page.frontmatter.versions[0].components[0].api.events" />

</cdr-doc-table-of-contents-shell>
