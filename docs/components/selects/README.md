---
{
  "title": "Select",
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
                "description": "Build options programatically with data. Array of objects [{ text: String, value: String}] to give greater control. Array of strings ['String'] for simpler setup (value and text will be the same)."
              },
              {
                "name": "required",
                "type": "boolean",
                "default": "false",
                "description": "Sets the field to required and displays an asterisk next to the input label."
              },
              {
                "name": "multiple",
                "type": "boolean",
                "default": "false",
                "description": "Creates a multi-select element. Expects an array to be passed as a v-model."
              },
              {
                "name": "size",
                "type": "number",
                "default": "1",
                "description": "Sets the number of visible options in the select dropdown"
              },
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
<cdr-doc-table-of-contents-shell>

# 🚧 Under Construction 🚧

<a href="/components/selects/?active-tab=api">See API Docs</a>

</cdr-doc-table-of-contents-shell>
</template>

<template slot="Design Guidelines">
<cdr-doc-table-of-contents-shell>

# 🚧 Under Construction 🚧

<a href="/components/selects/?active-tab=api">See API Docs</a>

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

The **CdrSelect** component requires `v-model` to bind the input value to your data model, as well as a `label` for accessibility.

```vue
<cdr-select
  label="Prompt"
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
