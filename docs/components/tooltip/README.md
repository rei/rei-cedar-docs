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
                "name": "id",
                "type": "string",
                "required": "true",
                "description": "Id for the CdrTooltip element. Required for accessibility."
              },
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
              {
                "name": "contentClass",
                "type": "string",
                "description": "Adds a custom class to the tooltip content wrapper. Allows for overriding it's size, styling, etc."
              },
            ],
            "slots": [
              {
                "name": "default",
                "description": "Slot for CdrTooltip content."
              },
              {
                "name": "trigger",
                "description": "Slot for the element that triggers the tooltip. Element should be a button and must be the first and only child of this slot. Event handlers are bound to this element automatically."
              }
            ],
            "events": [
              {
                "name": "closed",
                "arguments": "event",
                "description": "$emit event fired when tooltip is closed."
              },
              {
                "name": "opened",
                "arguments": "event",
                "description": "$emit event fired when tooltip is opened."
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

CdrTooltip is a wrapper component that accepts a trigger element and tooltip content. When the trigger element is hovered or focused, the tooltip content is rendered. Event bindings between the trigger and the tooltip are set up automatically. The tooltip will dynamically update it's `position` property to ensure that it renders on screen, though this functionality can be disabled by setting `autoPosition` to `false`.

<cdr-doc-example-code-pair repository-href="/src/components/CdrTooltip"
:sandbox-data="$page.frontmatter.sandboxData" >

```html
<cdr-tooltip id="tooltip-example" position="up">
  <cdr-button slot="trigger">
    Add To Cart
  </cdr-button>
  <div>
    On hover or focus, I provide more information about what this button does
  </div>
</cdr-tooltip>
```
</cdr-doc-example-code-pair>

## Accessibility

Ensure that usage of this component complies with accessibility guidelines:

- Set an `id` property on the CdrTooltip. The component will automatically link that `id` to the trigger element.
- Content passed in to the `trigger` slot must be an actionable element such as a button.
- Tooltip content should directly describe the element that triggers it. For example, providing more information or context about what a button does, or adding a textual description of an icon-only buttton.

This component complies with WCAG guidelines by:

- Adds hover and focus handlers to trigger element to manage tooltip state.
- Dynamically sets `aria-described-by` on the trigger element to point to the id of the tooltip.
- Adds `role="tooltip"` to the tooltip content.
- Tooltip content is visible to screen readers even when it is closed.
- Tooltip content can be hovered over without the tooltip closing.
- Tooltip can be closed by removing focus from the trigger, removing hover from the trigger or content, or by pressing the `esc` key.

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

## Events

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.events" :slots-getting-started-link="false" />

</cdr-doc-table-of-contents-shell>
