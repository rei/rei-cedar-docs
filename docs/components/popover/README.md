---
{
  "title": "Popover",
  "layout_type": "LayoutComponent",
  "summary": "TODO: what is a popover, really?",
  "title_metadata": "CdrPopover",
  "breadcrumbs": [
    {
      "text": "Components/"
    }
  ],
  "sandboxData": {
    "components": "CdrPopover, CdrButton, IconInformationFill"
  },

  "TODO-DO/DONT": [
    {
      "type": "do",
      "image": "",
      "ratio": "4-3",
      "alt": "Image showing proper popover usage",
      "caption": "TODO"
    },
    {
      "type": "dont",
      "image": "",
      "ratio": "4-3",
      "alt": "Image showing improper popover usage",
      "caption": "TODO"
    }
  ],

  "versions": [
    {
      "components": [
        {
          "name": "CdrPopover",
          "api": {
            "props": [
              {
                "name": "position",
                "type": "string",
                "default": "'up'",
                "description": "Sets the position where the popover will render relative to the trigger element. Possible values: 'up' | 'down' | 'left' | 'right'"
              },
              {
                "name": "autoPosition",
                "type": "boolean",
                "default": "true",
                "description": "If set to `true`, popover will attempt to dynamically set it's position to ensure it renders within the visible browser window. If `false` the popover will always render in the provided `position`."
              },
            ],
            "slots": [
              {
                "name": "default",
                "description": "Slot for CdrPopover content."
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

CdrPopover is a Popover

<cdr-doc-example-code-pair repository-href="/src/components/CdrPopover"
:sandbox-data="$page.frontmatter.sandboxData" >

```html
<div> CdrPopover </div>
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

TODO: Embed do-dont using metadata from frontmatter

<!-- <do-dont :examples="$page.frontmatter.DATAKEY" /> -->

# API

## Props

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

## Slots

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />


</cdr-doc-table-of-contents-shell>
