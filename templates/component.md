---
{
  "title": "COMPONENTNAME",
  "layout_type": "LayoutComponent",
  "summary": "TODO: COMPONENTDESCRIPTION",
  "title_metadata": "CdrCOMPONENTNAME",
  "breadcrumbs": [
    {
      "text": "Components/"
    }
  ],
  "sandboxData": {
    "components": "CdrCOMPONENTNAME"
  },

  "TODO-DO/DONT": [
    {
      "type": "do",
      "image": "",
      "ratio": "4-3",
      "alt": "Image showing proper COMPONETNAME usage",
      "caption": "TODO"
    },
    {
      "type": "dont",
      "image": "",
      "ratio": "4-3",
      "alt": "Image showing improper COMPONETNAME usage",
      "caption": "TODO"
    }
  ],

  "versions": [
    {
      "components": [
        {
          "name": "CdrCOMPONENTNAME",
          "api": {
            "props": [
              {
                "name": "PROPNAME",
                "type": "string",
                "default": "'DEFAULT'",
                "description": ""
              },
            ],
            "slots": [
              {
                "name": "default",
                "description": "Slot for CdrCOMPONENTNAME content."
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

CdrCOMPONENTNAME is a COMPONENTNAME

<cdr-doc-example-code-pair repository-href="/src/components/CdrCOMPONENTNAME"
:sandbox-data="$page.frontmatter.sandboxData" >

```html
<div> CdrCOMPONENTNAME </div>
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
