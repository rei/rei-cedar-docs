---
{
  "title": "Selects",
  "layout_type": "LayoutComponent",
  "summary": "Select dropdown component",
  "title_metadata": "Dropdown, CdrSelect, cdr-select",
  "sandboxData": {
    "components": "CdrSelect"
  },
  "breadcrumbs": [
    {
      "text": "Components/"
    }
  ],
  "versions": [
    {
      "components": [
        {
          "name": "CdrSelect",
          "api": {
            "props": [
              {
                "name": "id",
                "type": "string",
                "default": "auto-generated",
                "description": "`id` for the select that is mapped to the label `for` attribute. If one is not provided, it will be generated."
              },
              {
                "name": "label",
                "type": "string",
                "default": "N/A",
                "description": "Sets the text value for the select label.  Required for a11y compliance.  Use ‘hideLabel’ if the label display is not desired. Required."
              },
              {
                "name": "hideLabel",
                "type": "boolean",
                "default": "false",
                "description": "Hides the label element and sets the input ‘aria-label’ to the value of the ‘label’ prop for a11y compliance."
              },
              {
                "name": "prompt",
                "type": "string",
                "default": "null",
                "description": "Adds an option that is disabled and selected by default to serve as a `placeholder` for the select."
              },
              {
                "name": "options",
                "type": "array",
                "default": "null",
                "description": "Build options programatically with data. Provide an array of objects [{ text: String, value: String}] for greater control or provide an array of strings ['String'] for simpler setup (value and text will be the same)."
              },
              {
                "name": "required",
                "type": "boolean",
                "default": "false",
                "description": "Sets the field to required and displays the text “Required” next to the input label"
              },
              {
                "name": "size",
                "type": "number",
                "default": "medium",
                "description": "Sets the select field size. Possible sizes are: {  ‘medium’  |  ‘large’  }. Also works with responsive breakpoints. Breakpoint values are: xs, sm, md, and lg. Examples: { 'small' | 'medium' | 'large' | 'large@sm' }"
              }
            ],
            "events": [
              {
                "description": "All event listeners are passed through to the <input> element."
              }
            ],
            "slots": [
              {
                "name": "default",
                "description": "Sets the innerHTML for CdrSelect, used to pass in `<option>` tags. Leave empty if using the `options` prop."
              },{
                "name": "info",
                "description": "Location for information link or icon markup to the right above the select field."
              },
              {
                "name": "helper-text",
                "description": "Location for helper or information text to the left below the select field."
              }
            ]
          }
        }
      ],
      "version": "1.0.0"
    }
  ]
}
---

<cdr-doc-tabs>
<template slot="Overview">
<cdr-doc-table-of-contents-shell tab-name="Overview">

## Default

Select control with no label.

```code markup for default select```


## Bare

Basic select control with label.

```code markup for bare select```


## Select with Link Text

Select control with link text on right.

```code markup for select with link text```


## Select with Icon Above

Select control with icon above input field on right.

```code markup for select with icon above```


## Select with Helper Text

Input field with helper or hint text below the input field.

```code markup for select with helper text```

  
## Accessibility
 
To ensure that the usage of Select component complies with the accessibility guidelines:
+ Always provide a label for each select control 
+ If hiding a label, use the [ aria-label ] attribute for the label contents

When using the [ aria-describedby ]: 
+ [ aria-describedby ] attribute does not override the select label
+ Use this attribute in addition to a label
+ Can be used to reference descriptions that appear as 'tooltips'

This component has compliance with WCAG guidelines by:
+ Requiring a value for the [ label ] field 
+ When hiding a label, the [ aria-label ] attribute is set to the [ label ] value 


</cdr-doc-table-of-contents-shell>
</template>

<template slot="Design Guidelines">
<cdr-doc-table-of-contents-shell>
  
## Use When

+ Choosing an option from a predefined set of values
+ Recommending a default option for most users


### Don't Use When

+ Viewing or comparing all options is needed. Instead, use [Radio Buttons](https://rei.github.io/rei-cedar-docs/components/radio/) 
+ Displaying a limited number of options. Instead, use [Radio Buttons](https://rei.github.io/rei-cedar-docs/components/radio/)
+ Displaying a yes or no selection. Instead, use [Radio Buttons](https://rei.github.io/rei-cedar-docs/components/radio/)
+ Turning an option on or off. Instead, use [Checkboxes](https://rei.github.io/rei-cedar-docs/components/checkboxes/)
+ Setting a value is required. Instead, use [Radio Buttons](https://rei.github.io/rei-cedar-docs/components/radio/)
+ Displaying more than 10 options. Instead, use [Inputs](https://rei.github.io/rei-cedar-docs/components/input/)
+ Sending the user to other areas of the site. Instead, use [Links](https://rei.github.io/rei-cedar-docs/components/links/)


## The Basics

Select and dropdown components tend to look similar, however have differing functionality. While select is used for selecting from a list of options and submitting that data, dropdowns contain links and take users elsewhere. Also, the select appearance is owned by the browser, whereas dropdowns can be styled.

Select components should be:
+ **Identifiable:** Select fields should indicate that users can change it’s value
+ **Findable:** It should be easy to find a select field among other elements
+ **Legible:** Select fields indicate their state such as enabled, focused, or disabled

### Options
+ Define width using CSS styles
+ Height options are medium and large. These variations can be used for creating media queries for responsive layouts, or to call more or less attention to the component. For an example of medium and large sizes, view [the Overview tab](https://rei.github.io/rei-cedar-docs/components/select/?active-tab=overview)


## Content

### Labels

+ Use concise and consistent labels that describes the meaning of the select field 
+ Limit labels to 1–3 words and fewer than 20 characters, including spaces
+ Use sentence case only. Do not use all caps, title case, or lowercase. 
+ Don’t use colons after labels

### Prompt Text

+ Limit prompt text to 1–3 words
+ Use descriptive prompt text for accessibility users who use screen readers to fill out forms 

### Menu or List Text 

+ Use sentence case
+ Simplify the list. If an option is rarely selected, consider removing it from the list
+ Use common sort order for menu items. Options include:
  + Frequency of use (recommended): For example, commonly-used credit cards would be listed first
  + Alpha: For example, state or city locations 
  + Numeric: For example, distances or sizes

### Helper Text

+ Use helper text for hints or suggestions 
+ If help text is long or complex, use a tooltip or popover that is opened from the support link on the right above the select field. Note that too much helper text can make a form look and feel difficult to use. 


### Do/Don't

* Do use concise and meaningful labels. https://drive.google.com/file/d/1I9aP9cvWnvHE-VVqJCVW6BnVmFkbyMse/view?usp=sharing
* Don’t use instructional or help text for the label. https://drive.google.com/file/d/1JMK7U5ED0xYwE7_x5QVrYry4XrA2tx37/view?usp=sharing

* Do use sentence case for labels. https://drive.google.com/file/d/151XY_YB-P_OWOWjUuIpelLHUMQPjaeAe/view?usp=sharing
* Don't use all caps for labels. https://drive.google.com/file/d/1OpxjTlUT0GDLgCkbPGklAlNGVkVYOU0t/view?usp=sharing

* Do remove all terminal punctuation. https://drive.google.com/file/d/128lsaDor9TzXb0fjlEPbLibQ6Fb7BdVe/view?usp=sharing
* Don't use colons after labels. https://drive.google.com/file/d/1o8xBGQnAJjBvmp2HZs7MuEBmtxIG91fJ/view?usp=sharing


## Behavior 

+ Avoid changing options in a dropdown menu based on the input from a different select field
+ Use a prompt in the format of “Select a…” or “Select category…”

### Required Fields

+ The text, “Required” will appear next to the input label if the status is required

### Validation

+ Validate the user’s data before form submission

### Do/Don't

* Do position the required label next to the select field label. https://drive.google.com/file/d/1uSLyidgKAK7khDs7d_z3ylwwNb5iJCaq/view?usp=sharing
* Don’t use an asterisk for a required select. https://drive.google.com/file/d/1QUJWa26KvSQKbnJbtjPm-Rn102WMT53S/view?usp=sharing

* Do use consistent sizes for components on a single form. https://drive.google.com/file/d/1tw54MgHJsFWdHE7yOdt7qBigyh2RoP6Q/view?usp=sharing
* Don't mix sizes for components on a single form. https://drive.google.com/file/d/10LUkpAma8EW2idqNF-Wxlq69XwdfGbSu/view?usp=sharing

</cdr-doc-table-of-contents-shell>
</template>

<template slot="API">
<cdr-doc-table-of-contents-shell>

## Props

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props"/>

## Slots

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" :slots-getting-started-link="false" />

## Events

<cdr-doc-api type="event" :api-data="$page.frontmatter.versions[0].components[0].api.events" />

## Usage

The **CdrSelect** component requires `v-model` to bind the selected value to your data model, as well as a `label` for accessibility.

```vue
<cdr-select
  label="Label Text"
  v-model="selected"
>
  <option value="1">
    1
  </option>
  <option value="2">
    2
  </option>
  <option value="3">
    3
  </option>
  <option value="4">
    4
  </option>
</cdr-select>
```

</cdr-doc-table-of-contents-shell>
</template>

</cdr-doc-tabs>
