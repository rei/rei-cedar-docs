---
{
  "title": "Alert",
  "layout_type": "LayoutComponent",
  "summary": "TODO: an Alert alerts you to things.",
  "title_metadata": "CdrAlert",
  "breadcrumbs": [
    {
      "text": "Components/"
    }
  ],
  "sandboxData": {
    "components": "CdrAlert, IconInformationFill, IconCheckFill, IconWarningFill, IconXFill"
  },

  "TODO-DO/DONT": [
    {
      "type": "do",
      "image": "",
      "ratio": "4-3",
      "alt": "Image showing proper alert usage",
      "caption": "TODO"
    },
    {
      "type": "dont",
      "image": "",
      "ratio": "4-3",
      "alt": "Image showing improper alert usage",
      "caption": "TODO"
    }
  ],

  "versions": [
    {
      "components": [
        {
          "name": "CdrAlert",
          "api": {
            "props": [
              {
                "name": "type",
                "type": "string",
                "default": "'info'",
                "description": "Sets the alert style. Possible values: { 'info' | 'success' | 'warning' | 'error'}"
              },
            ],
            "slots": [
              {
                "name": "default",
                "description": "Slot for CdrAlert content."
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

CdrAlert is a simple wrapper component that allows for composing various alert layouts.

Has 4 different options for styling the alert

Alerts should be passed an icon component and text

<cdr-doc-example-code-pair repository-href="/src/components/alert"
:sandbox-data="$page.frontmatter.sandboxData" >

```html
<cdr-alert type="info">
  <icon-information-fill /> Info Alert
</cdr-alert>
<br>
<cdr-alert type="success">
  <icon-check-fill/> success alert
</cdr-alert>
<br>
<cdr-alert type="warning">
  <icon-warning-fill/> warning alert
</cdr-alert>
<br>
<cdr-alert type="error">
  <icon-x-fill/> error alert
</cdr-alert>
```
</cdr-doc-example-code-pair>


## Accessibility
TODO
- Component sets `role="alert"` so you don't have to

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
