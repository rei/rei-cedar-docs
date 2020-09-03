---
{
  "title": "Tooltip",
  "layout_type": "LayoutComponent",
  "summary": "TODO: show tips for the tools!",
  "title_metadata": "CdrTooltip",
  "breadcrumbs": [
    {
      "text": "Components/"
    }
  ],
  "sandboxData": {
    "components": "CdrTooltip, CdrButton"
  },
  "TODO-DO/DONT": [
    {
      "type": "do",
      "image": "",
      "ratio": "4-3",
      "alt": "Image showing proper tooltip usage",
      "caption": "TODO"
    },
    {
      "type": "dont",
      "image": "",
      "ratio": "4-3",
      "alt": "Image showing improper tooltip usage",
      "caption": "TODO"
    }
  ],

  "versions": [
    {
      "components": [
        {
          "name": "CdrTooltip",
          "api": {
            "props": [
              {
                "name": "position",
                "type": "string",
                "default": "'up'",
                "description": "Sets the position where the tooltip will render relative to the trigger element. Possible values: 'up' | 'down' | 'left' | 'right'"
              },
              {
                "name": "autoPosition",
                "type": "boolean",
                "default": "true",
                "description": "If set to `true`, tooltip will attempt to dynamically set it's position to ensure it renders within the visible browser window. If `false` the tooltip will always render in the provided `position`."
              },
            ],
            "slots": [
              {
                "name": "default",
                "description": "Slot for CdrTooltip content."
              },
              {
                "name": "trigger",
                "description": "Slot for the element that triggers the tooltip. Event handlers are bound to this element automatically."
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

CdrTooltip is a wrapper component that accepts a trigger element and tooltip content. When the trigger element is hovered or focused, the tooltip content is rendered.

<cdr-doc-example-code-pair repository-href="/src/components/CdrTooltip"
:sandbox-data="$page.frontmatter.sandboxData" >

```html
<cdr-tooltip :position="down">
  <cdr-button slot="trigger">X</cdr-button>
  <div>
    On hover or focus, I provide more information about what this button does
  </div>
</cdr-tooltip>
```
</cdr-doc-example-code-pair>

## Auto Position

The `autoPosition` property can be used to have the tooltip automatically position itself inside the visible browser window.

<cdr-doc-example-code-pair repository-href="/src/components/CdrTooltip"
:sandbox-data="$page.frontmatter.sandboxData" >

```html
<cdr-tooltip :position="left" :autoPosition="true">
  <cdr-button slot="trigger">X</cdr-button>
  <div>
    Using the `autoPosition` property ensures that the tooltip is not rendered offscreen
  </div>
</cdr-tooltip>
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
