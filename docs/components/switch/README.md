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

Switch is a system-wide control that is used to quickly change between two possible states. This component is only used for binary actions that occur immediately after the user makes any changes.

### Default

Default switch with medium size and standard spacing.

<iframe
  src="https://y6hei2.sse.codesandbox.io/embed/new?codemirror=1"
  style="width:100%; height:100px; border:1px solid #dcd6cb; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

<div class="cdr-doc-code-snippet__actions">
  <div class="cdr-doc-code-snippet__action-wrapper">
    <a target="_blank" rel="noopener noreferrer" href="https://github.com/rei/rei-cedar-next/tree/main/src/components/switch" class="cdr-doc-code-snippet__action cdr-link_12-0-0 cdr-link--standalone_12-0-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" class="cdr-doc-code-snippet__action-icon cdr-icon_12-0-0" title="An outline caricature of a cat"><use href="#brand-github" xlink:href="#brand-github"></use></svg>
            View on GitHub
    </a>
  </div> 
  <div class="cdr-doc-code-snippet__action-wrapper">
    <a target="_blank" rel="noopener noreferrer" href="https://codesandbox.io/s/cedarexamplesandbox-forked-y6hei2?file=/App.vue" class="cdr-doc-code-snippet__action cdr-link_12-0-0 cdr-link--standalone_12-0-0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" class="cdr-doc-code-snippet__action-icon cdr-icon_12-0-0" title="A hollow box with a small solid box in each box panel"><use href="#brand-code-sandbox" xlink:href="#brand-code-sandbox"></use></svg>
            View on CodeSandbox
    </a>
  </div>
</div>

### Full-width spacing

Displays at full-width of its container.

<iframe
  src="https://ez4mqc.sse.codesandbox.io/embed/new?codemirror=1"
  style="width:100%; height:100px; border:1px solid #dcd6cb; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

<div class="cdr-doc-code-snippet__actions"><div class="cdr-doc-code-snippet__action-wrapper">
  <a target="_blank" rel="noopener noreferrer" href="https://github.com/rei/rei-cedar-next/tree/main/src/components/switch" class="cdr-doc-code-snippet__action cdr-link_12-0-0 cdr-link--standalone_12-0-0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" class="cdr-doc-code-snippet__action-icon cdr-icon_12-0-0" title="An outline caricature of a cat"><use href="#brand-github" xlink:href="#brand-github"></use></svg>
        View on GitHub
</a>
</div> 
<div class="cdr-doc-code-snippet__action-wrapper"><a target="_blank" rel="noopener noreferrer" href="https://codesandbox.io/s/cdrswitch--medium-full-width-ez4mqc?file=/App.vue" class="cdr-doc-code-snippet__action cdr-link_12-0-0 cdr-link--standalone_12-0-0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" class="cdr-doc-code-snippet__action-icon cdr-icon_12-0-0" title="A hollow box with a small solid box in each box panel"><use href="#brand-code-sandbox" xlink:href="#brand-code-sandbox"></use></svg>
        View on CodeSandbox
</a></div></div>

### Large

Size can be changed to large based on where the component is being used.

<iframe
  src="https://55d0xb.sse.codesandbox.io/embed/new?codemirror=1"
  style="width:100%; height:100px; border:1px solid #dcd6cb; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

<div class="cdr-doc-code-snippet__actions"><div class="cdr-doc-code-snippet__action-wrapper">
  <a target="_blank" rel="noopener noreferrer" href="https://github.com/rei/rei-cedar-next/tree/main/src/components/switch" class="cdr-doc-code-snippet__action cdr-link_12-0-0 cdr-link--standalone_12-0-0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" class="cdr-doc-code-snippet__action-icon cdr-icon_12-0-0" title="An outline caricature of a cat"><use href="#brand-github" xlink:href="#brand-github"></use></svg>
        View on GitHub
</a>
</div> 
<div class="cdr-doc-code-snippet__action-wrapper"><a target="_blank" rel="noopener noreferrer" href="https://codesandbox.io/s/cdrswitch-large-55d0xb?file=/App.vue" class="cdr-doc-code-snippet__action cdr-link_12-0-0 cdr-link--standalone_12-0-0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" class="cdr-doc-code-snippet__action-icon cdr-icon_12-0-0" title="A hollow box with a small solid box in each box panel"><use href="#brand-code-sandbox" xlink:href="#brand-code-sandbox"></use></svg>
        View on CodeSandbox
</a></div></div>

### Custom labels

A label with custom styling.

<iframe
  src="https://53f6ly.sse.codesandbox.io/embed/new?codemirror=1"
  style="width:100%; height:100px; border:1px solid #dcd6cb; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

<div class="cdr-doc-code-snippet__actions"><div class="cdr-doc-code-snippet__action-wrapper">
  <a target="_blank" rel="noopener noreferrer" href="https://github.com/rei/rei-cedar-next/tree/main/src/components/switch" class="cdr-doc-code-snippet__action cdr-link_12-0-0 cdr-link--standalone_12-0-0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" class="cdr-doc-code-snippet__action-icon cdr-icon_12-0-0" title="An outline caricature of a cat"><use href="#brand-github" xlink:href="#brand-github"></use></svg>
        View on GitHub
</a>
</div> 
<div class="cdr-doc-code-snippet__action-wrapper"><a target="_blank" rel="noopener noreferrer" href="https://codesandbox.io/s/cdrswitch-custom-label-style-53f6ly?file=/App.vue" class="cdr-doc-code-snippet__action cdr-link_12-0-0 cdr-link--standalone_12-0-0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" class="cdr-doc-code-snippet__action-icon cdr-icon_12-0-0" title="A hollow box with a small solid box in each box panel"><use href="#brand-code-sandbox" xlink:href="#brand-code-sandbox"></use></svg>
        View on CodeSandbox
</a></div></div>

### Accessibility

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

- Requiring the user to save or submit to apply the state. Instead, use [checkboxes](../checkboxes/) or [radio buttons](../radio/) 
- Showing more than one option. Instead, use [checkboxes](../checkboxes/) 
- Allowing users to filter. Instead, use [checkboxes](../checkboxes/) or [chips](../chips/)

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

- Keep labels short and direct 
- The label should describe what the control will do when the switch is on 
- Labels should describe the state of the system when the switch is on (when in doubt, say the label aloud and append “on/off” to the end)  
- Start labels with a capital letter and use sentence case 
- Labels should have one or two words, preferably nouns, that describe the functionality of the switch


<hr>

### Do / Don't

<do-dont :examples="$page.frontmatter.label" />

<do-dont :examples="$page.frontmatter.usage" />

## API

### Props

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

### Slots

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />

### Events 

<cdr-doc-api type="event" :api-data="$page.frontmatter.versions[0].components[0].api.events" />

</cdr-doc-table-of-contents-shell>
