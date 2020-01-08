---
{
  "title": "Select",
  "layout_type": "LayoutComponent",
  "summary": "Select dropdown component",
  "title_metadata": "Dropdown, CdrSelect, cdr-select",
  "sandboxData": {
    "components": "CdrSelect"
  },
  "labels": [
    {
      "type": "do",
      "image": "select/select_label_do_16-9.png",
      "ratio": "16-9",
      "alt": "Image showing a State/Province label ",
      "caption": "use concise and meaningful labels."
    },
    {
      "type": "dont",
      "image": "select/select_label_dont_16-9.png",
      "ratio": "16-9",
      "alt": "Image showing STATE/PROVINCE label",
      "caption": "use instructional or help text for the label."
    }
  ],
  "case": [
    {
      "type": "do",
      "image": "select/select_case_do_16-9.png",
      "ratio": "16-9",
      "alt": "Image showing a State/Province label ",
      "caption": "use sentence case for labels."
    },
    {
      "type": "dont",
      "image": "select/select_case_dont_16-9.png",
      "ratio": "16-9",
      "alt": "Image showing STATE/PROVINCE label",
      "caption": "use all caps for labels."
    }
  ],
  "punctuation": [
    {
      "type": "do",
      "image": "select/select_punctuation_do_16-9.png",
      "ratio": "16-9",
      "alt": "Image showing a State/Province label ",
      "caption": "remove all terminal punctuation."
    },
    {
      "type": "dont",
      "image": "select/select_punctuation_dont_16-9.png",
      "ratio": "16-9",
      "alt": "Image showing State/Province: label",
      "caption": "use colons after labels."
    }
  ],
  "required": [
    {
      "type": "do",
      "image": "select/select_sizes_do_16-9.png",
      "ratio": "16-9",
      "alt": "Image showing an input element above a select element of the same size",
      "caption": "use consistent sizes for components on a single form."
    },
    {
      "type": "dont",
      "image": "select/select_sizes_dont_16-9.png",
      "ratio": "16-9",
      "alt": "Image showing an input element above a select element of a different size",
      "caption": "mix sizes for components on a single form."
    }
  ],
  "sizes": [
    {
      "type": "do",
      "image": "select/select_required_do_16-9.png",
      "ratio": "16-9",
      "alt": "Image showing the text required to the right of the label above the select element",
      "caption": "position the required label next to the select field label."
    },
    {
      "type": "dont",
      "image": "select/select_required_dont_16-9.png",
      "ratio": "16-9",
      "alt": "Image showing an asterisk to the right of the label above the select element",
      "caption": "use an asterisk for a required select."
    }
  ],
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
                "description": "All event listeners are passed through to the <select> element."
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


<cdr-doc-table-of-contents-shell tab-name="Overview">
# Overview

## Default (Medium)

Basic select control with label.


<cdr-doc-example-code-pair repository-href="/src/components/select" :sandbox-data="$page.frontmatter.sandboxData" :backgroundToggle="false" :codeMaxHeight="false" :model="{defaultModel: '', defaultOptions: ['Option A', 'Option B', 'Option C', 'Option D']}">

```html
<cdr-select
  v-model="defaultModel"
  label="Select label"
  prompt="Prompt text"
  :options="defaultOptions"
/>
<br>
<cdr-select
  v-model="defaultModel"
  label="Select label"
  prompt="Prompt text"
  :options="defaultOptions"
  disabled
/>
```

</cdr-doc-example-code-pair>


## Bare

Basic select control with no label.

<cdr-doc-example-code-pair repository-href="/src/components/select" :sandbox-data="$page.frontmatter.sandboxData" :backgroundToggle="false" :codeMaxHeight="false" :model="{defaultModel: '', defaultOptions: ['Option A', 'Option B', 'Option C', 'Option D']}">

```html
<cdr-select
  v-model="defaultModel"
  label="Select label"
  prompt="Prompt text"
  :options="defaultOptions"
  hideLabel
/>
<br>
<cdr-select
  v-model="defaultModel"
  label="Select label"
  prompt="Prompt text"
  :options="defaultOptions"
  disabled
  hideLabel
/>
```

</cdr-doc-example-code-pair>


## Select with Link Text

Select control with link text on right.

<cdr-doc-example-code-pair repository-href="/src/components/select" :sandbox-data="$page.frontmatter.sandboxData" :backgroundToggle="false" :codeMaxHeight="false" :model="{defaultModel: '', defaultOptions: ['Option A', 'Option B', 'Option C', 'Option D']}">

```html
<cdr-select
  v-model="defaultModel"
  label="Select label"
  prompt="Prompt text"
  :options="defaultOptions"
>
  <template slot="info">
    <cdr-link href="#/">
      Info Link/Icon
    </cdr-link>
  </template>
</cdr-select>
<br>
<cdr-select
  v-model="defaultModel"
  label="Select label"
  prompt="Prompt text"
  :options="defaultOptions"
  disabled
>
  <template slot="info">
    <cdr-link href="#/">
      Info Link/Icon
    </cdr-link>
  </template>
</cdr-select>
```

</cdr-doc-example-code-pair>


## Select with Icon Above

Select control with icon above the input field on right.



<cdr-doc-example-code-pair repository-href="/src/components/select" :sandbox-data="$page.frontmatter.sandboxData" :backgroundToggle="false" :codeMaxHeight="false" :model="{defaultModel: '', defaultOptions: ['Option A', 'Option B', 'Option C', 'Option D']}">

```html
<cdr-select
  v-model="defaultModel"
  label="Select label"
  prompt="Prompt text"
  :options="defaultOptions"
>
  <template slot="info">
    <icon-information-fill />
  </template>
</cdr-select>
<br>
<cdr-select
  v-model="defaultModel"
  label="Select label"
  prompt="Prompt text"
  :options="defaultOptions"
  disabled
>
  <template slot="info">
    <icon-information-fill />
  </template>
</cdr-select>
```

</cdr-doc-example-code-pair>


## Select with Helper Text

Input field with helper or hint text below the input field.

<cdr-doc-example-code-pair repository-href="/src/components/select" :sandbox-data="$page.frontmatter.sandboxData" :backgroundToggle="false" :codeMaxHeight="false" :model="{defaultModel: '', defaultOptions: ['Option A', 'Option B', 'Option C', 'Option D']}">

```html
<cdr-select
  v-model="defaultModel"
  label="Select label"
  prompt="Prompt text"
  :options="defaultOptions"
>
  <template slot="helper-text">
    This is helper text.
  </template>
</cdr-select>
<br>
<cdr-select
  v-model="defaultModel"
  label="Select label"
  prompt="Prompt text"
  :options="defaultOptions"
  disabled
>
  <template slot="helper-text">
    This is helper text.
  </template>
</cdr-select>
```

</cdr-doc-example-code-pair>


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

<hr>

# Guidelines

## Use When

+ Choosing an option from a predefined set of values
+ Recommending a default option for most users


## Don't Use When

+ Viewing or comparing all options is needed. Instead, use [Radio Buttons](https://rei.github.io/rei-cedar-docs/components/radio/)
+ Displaying a limited number of options. Instead, use [Radio Buttons](https://rei.github.io/rei-cedar-docs/components/radio/)
+ Displaying a "yes" or "no" selection. Instead, use [Radio Buttons](https://rei.github.io/rei-cedar-docs/components/radio/)
+ Turning an option on or off. Instead, use [Checkboxes](https://rei.github.io/rei-cedar-docs/components/checkboxes/)
+ Setting a value is required. Instead, use [Radio Buttons](https://rei.github.io/rei-cedar-docs/components/radio/)
+ Displaying more than 10 options. Instead, use [Inputs](https://rei.github.io/rei-cedar-docs/components/input/)
+ Sending the user to other areas of the site. Instead, use [Links](https://rei.github.io/rei-cedar-docs/components/links/)


## The Basics

Select and dropdown components tend to look similar, but have different functionality. While select is used for selecting from a list of options and submitting that data, dropdowns contain links and take users elsewhere. Also, the select appearance is owned by the browser, whereas dropdowns can be styled.

Select components should be:
+ **Identifiable:** Select fields should indicate that users can change its value
+ **Findable:** It should be easy to find a select field among other elements
+ **Legible:** Select fields indicate their state such as enabled, focused, or disabled

### Options
+ Define width using CSS styles
+ Height options are medium and large. These variations can be used for creating media queries for responsive layouts, or to call more or less attention to the component. For an example of medium and large sizes, visit the [Overview](https://rei.github.io/rei-cedar-docs/components/select/?active-tab=overview) tab


## Content

### Labels

+ Use concise and consistent labels that describe the meaning of the select field
+ Limit labels to 1–3 words and fewer than 20 characters, including spaces
+ Use sentence case only. Do not use all caps, title case, or lowercase
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
+ Be succinct. Too much helper text can make a form look and feel difficult to use

### Icon

- Use icons to trigger a popover for hints or suggestions
- Read more about icon guidelines using Cedar [here](https://rei.github.io/rei-cedar-docs/components/icon/?active-tab=guidelines)

### Link Text

- Use a link when moving or navigating to another page or to a different portion of the same page
- Use if navigating user to long or complex information
- Read more about links [here](https://rei.github.io/rei-cedar-docs/components/links/)


### Do / Don’t

<br/>

<do-dont :examples="$page.frontmatter.labels" />

// new images
do: https://drive.google.com/file/d/1sbJ5Cn4G8MuS0FwZybimfiJyT6wz9Hdg/view?usp=sharing
don't: https://drive.google.com/file/d/1PFBonE79BaUt7dVf-7VZSafEfG3ulQuC/view?usp=sharing

<do-dont :examples="$page.frontmatter.case" />

// new images
do: https://drive.google.com/file/d/1ln9lflUn2KpvzXon3DjSU2D1MCd_Uw6g/view?usp=sharing
don't: https://drive.google.com/file/d/104bUYbIhTIHfsSVhqY6cscvA6fhgE2Rq/view?usp=sharing

<do-dont :examples="$page.frontmatter.punctuation" />

// new images
do: https://drive.google.com/file/d/1XeYv3o1uSpvjOjBRcChgPMrSFFWkzxLa/view?usp=sharing
don't: https://drive.google.com/file/d/1417UyM2t6lNfcxiBPFcxbV6N8_jO1e53/view?usp=sharing


## Behavior

+ Avoid changing options in a dropdown menu based on the input from a different select field
+ Use a prompt in the format of “Select a…” or “Select category…”

### Required Fields

+ The text “Required” will appear next to the input label if the status is required

### Validation

+ Validate the user’s data before form submission

### Do/Don't

<do-dont :examples="$page.frontmatter.required" />

// new images
do: https://drive.google.com/file/d/1daIhuCAuqANCz-rQw69QqbqbVmiY9HhV/view?usp=sharing
don't: https://drive.google.com/file/d/1DUVCy7wqLYOYQ39upIFVXUV7mhp_OINh/view?usp=sharing

<do-dont :examples="$page.frontmatter.sizes" />

// new images
do: https://drive.google.com/file/d/1pLPgRDzSWcEdRCZ1YjUDnT31TYiSADXD/view?usp=sharing
don't: https://drive.google.com/file/d/1QNEOwkBFNGY7t04qY-ZKXAnhGiGyHRYu/view?usp=sharing


# API

## Props

This component will bind any attribute that a [native HTML select element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) accepts.

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
