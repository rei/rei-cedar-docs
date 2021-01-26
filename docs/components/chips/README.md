---
{
  "title": "Chip",
  "layout_type": "LayoutComponent",
  "summary": "TODO: COMPONENTDESCRIPTION",
  "title_metadata": "CdrChip",
  "breadcrumbs": [
    {
      "text": "Components/"
    }
  ],
  "sandboxData": {
    "components": "CdrChip"
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
          "name": "CdrChip",
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
                "description": "Slot for CdrChip content."
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

## Default
CdrChip is a Chip

<cdr-doc-example-code-pair repository-href="/src/components/CdrChip"
:sandbox-data="$page.frontmatter.sandboxData" >

```html
<div>
  <cdr-chip> Potato! </cdr-chip>
  <cdr-chip> Tortilla! </cdr-chip>
</div>
```
</cdr-doc-example-code-pair>

## As A Radio or Checkbox

CdrChip is a Chip

<cdr-doc-example-code-pair repository-href="/src/components/CdrChip"
:sandbox-data="$page.frontmatter.sandboxData" >

```html
<div>
  <cdr-chip> Potato! </cdr-chip>
  <cdr-chip> Tortilla! </cdr-chip>
</div>
```
</cdr-doc-example-code-pair>

## As A Stateful Button

CdrChip is a Chip

<cdr-doc-example-code-pair repository-href="/src/components/CdrChip"
:sandbox-data="$page.frontmatter.sandboxData" >

```html
<div>
  <cdr-chip> Potato! </cdr-chip>
  <cdr-chip> Tortilla! </cdr-chip>
</div>
```
</cdr-doc-example-code-pair>

## As A Link

CdrChip is a Chip

<cdr-doc-example-code-pair repository-href="/src/components/CdrChip"
:sandbox-data="$page.frontmatter.sandboxData" >

```html
<div>
  <cdr-chip> Potato! </cdr-chip>
  <cdr-chip> Tortilla! </cdr-chip>
</div>
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
