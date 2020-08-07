---
{
  "title": "FormGroup",
  "layout_type": "LayoutComponent",
  "summary": "Group related input elements together",
  "title_metadata": "CdrFormGroup",
    "see_also": [
    {
      "text": 'See Also'
    },
    {
      "text": 'Checkboxes',
      "href": '../checkboxes/'
    },
    {
      "text": 'Radio Buttons',
      "href": '../radio/'
    },
    {
      "text": 'Inputs',
      "href": '../input/'
    },
    {
      "text": 'Selects',
      "href": '../selects/'
    }
  ],
  "breadcrumbs": [
    {
      "text": "Components/"
    }
  ],
  "sandboxData": {
    "components": "CdrFormGroup, CdrCheckbox, CdrRadio, CdrInput, CdrSelect"
  },

  "TODO-DO/DONT": [
    {
      "type": "do",
      "image": "",
      "ratio": "4-3",
      "alt": "Image showing proper form group usage",
      "caption": "TODO"
    },
    {
      "type": "dont",
      "image": "",
      "ratio": "4-3",
      "alt": "Image showing improper form group usage",
      "caption": "TODO"
    }
  ],

  "versions": [
    {
      "components": [
        {
          "name": "CdrFormGroup",
          "api": {
            "props": [
              {
                "name": "label",
                "type": "string",
                "default": "none",
                "description": "Sets the label/legend for the form group. Applies default text styles to this label. To override that default text style or apply other customization, use the `label` slot."
              },
            ],
            "slots": [
              {
                "name": "default",
                "description": "Slot for CdrFormGroup content. Should include a set of form elements."
              },
              {
                "name": "label",
                "description": "Slot to override the CdrFormGroup label/legend. Should be a text element."
              }
            ]
          }
        }
      ]
    }
  ]
}
---

<cdr-doc-table-of-contents-shell >

# Overview

CdrFormGroup is a simple wrapper component that provides structure and consistent spacing when composing various form layouts.  

Grouping related form controls makes forms more understandable for all users, and utilizing the `fieldset` and `legend` elements provides necessary context for users that rely on screen readers. 

## Default

<cdr-doc-example-code-pair repository-href="/src/components/formGroup"
:sandbox-data="$page.frontmatter.sandboxData" :model="{ex: []}">

```html
<cdr-form-group label="What's your favorite letter?">
  <cdr-checkbox
    custom-value="A"
    v-model="ex"
  >A</cdr-checkbox>
  <cdr-checkbox
    custom-value="B"
    v-model="ex"
  >B</cdr-checkbox>
  <cdr-checkbox
    custom-value="C"
    v-model="ex"
  >C</cdr-checkbox>
</cdr-form-group>
```
</cdr-doc-example-code-pair>

## Label Override

Rather than passing a `label` prop, the label element can be customized using the `label` slot.

<cdr-doc-example-code-pair repository-href="/src/components/formGroup"
:sandbox-data="$page.frontmatter.sandboxData" :model="{ex: []}">

```html
<cdr-form-group>
  <template slot="label">
    <cdr-text modifier="heading-sans-600">Optional Label Slot Override</cdr-text>
  </template>
  <cdr-checkbox
    custom-value="A"
    v-model="ex"
  >A</cdr-checkbox>
  <cdr-checkbox
    custom-value="B"
    v-model="ex"
  >B</cdr-checkbox>
  <cdr-checkbox
    custom-value="C"
    v-model="ex"
  >C</cdr-checkbox>
</cdr-form-group>
```
</cdr-doc-example-code-pair>

## Accessibility

CdrFormGroup provides a simple `fieldset` and `legend` wrapper for form element components. Using this component will ensure that your form communicates to screen readers that a group of form fields relate to each other, and will provide a label for the group.
 
When not semantically grouped, form elements mixed with text descriptions can quickly lose context to users who rely on non-visual means. Grouping controls makes it easier for users to understand their purpose

In CdrFormGroup, all of the related fields go inside the `fieldset` element, and the `legend` element is used to represent the question or overall theme of this section of your form.
  
- Use the `label` prop or slot to explain what the form elements are
- The legend improves accessibility when the fieldset is rendered non-visually
- A fieldset cannot be used without a legend
- A legend cannot be used without a fieldset
- Screen readers may repeat the legend for each control in the group, so the legend's text should be brief and descriptive 


# Guidelines

## Use when

- Creating groups of checkboxes or radio buttons for a single, multiple-choice selection
- Grouping several inputs related to the same topic, such as selecting the color, size and quantity of a product OR grouping fields for a delivery address during checkout

## Don’t use when

- Creating a single form field that asks for a single piece of information


# API

## Props

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

## Slots

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />


</cdr-doc-table-of-contents-shell>
