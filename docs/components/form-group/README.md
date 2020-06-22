---
{
  "title": "FormGroup",
  "layout_type": "LayoutComponent",
  "summary": "TODO: wraps related input elements",
  "title_metadata": "CdrFormGroup",
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
                "description": "Sets the label/legend for the form group."
              },
            ],
            "slots": [
              {
                "name": "default",
                "description": "Slot for CdrFormGroup content. Should include a set of form elements"
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

Should be passed form elements that are logically related

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


## Accessibility
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
