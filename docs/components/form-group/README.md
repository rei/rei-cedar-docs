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

CdrFormGroup is a simple wrapper component that allows for composing various form layouts.

Use to group form controls and provide structure and consistent spacing within a form. 

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

CdrFormGroup is meant to group logically related form elements. Either the `label` prop or slot should be used to explain what these elements are.

TODO


# Guidelines

TODO

## Use when

## Don’t use when

## The Basics

## Do / Don't

TODO

# API

## Props

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

## Slots

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />


</cdr-doc-table-of-contents-shell>
