---
{
  "title": "Tooltip",
  "layout_type": "LayoutComponent",
  "summary": "Floating label used to clarify interface actions",
  "title_metadata": "CdrTooltip",
  "breadcrumbs": [
    {
      "text": "Components/"
    }
  ],
  "sandboxData": {
    "components": "CdrTooltip, CdrButton"
  },
  "consistency": [
    {
      "type": "do",
      "image": "tooltip/tooltip_consistency_do.png",
      "ratio": "4-3",
      "alt": "Image showing proper tooltip usage",
      "caption": "Do consistently provide tooltips for unlabeled icons "
    },
    {
      "type": "dont",
      "image": "tooltip/tooltip_consistency_dont.png",
      "ratio": "4-3",
      "alt": "Image showing improper tooltip usage",
      "caption": "Don't provide tooltips for only a subset of icons within a set"
    }
  ],

  "redundancy": [
    {
      "type": "do",
      "image": "tooltip/tooltip_redundancy_do.png",
      "ratio": "4-3",
      "alt": "Image showing proper tooltip usage",
      "caption": "Do avoid using tooltips when actions are clearly defined"
    },
    {
      "type": "dont",
      "image": "tooltip/tooltip_redundancy_dont.png",
      "ratio": "4-3",
      "alt": "Image showing improper tooltip usage",
      "caption": "Don't provide redundant information with a tooltip"
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
                "default": "'top'",
                "description": "Sets the position where the tooltip will render relative to the trigger element. Possible values: 'top' | 'bottom' | 'left' | 'right'"
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
<cdr-tooltip id="tooltip-example" position="top">
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

To ensure your usage of this component complies with accessibility guidelines you are responsible for the following:

- Set an `id` property on the CdrTooltip. The component will automatically link that `id` to the trigger element.
- Content passed into the `trigger` slot must be an actionable element such as a button.
- Tooltip content should directly describe the element that triggers it. For example, providing more information or context about what an input does, or adding a textual description of an icon-only buttton.
- Avoid rich content. Formatting such as bold text, italics, headings, icons, etc. will not be conveyed through aria-describedby or aria-labelledby.
- No interactive content. Any interactive content such as links or buttons should not be placed within a tooltip.
- Do not put essential information in tooltips
- Do not use a timeout to hide the tooltip

This component complies with WCAG guidelines by:

- Adds hover and focus handlers to trigger element to manage tooltip state.
- Dynamically sets `aria-described-by` on the trigger element to point to the id of the tooltip.
- Adds `role="tooltip"` to the tooltip content.
- Tooltip content is visible to screen readers even when it is closed.
- Tooltip content can be hovered over without the tooltip closing.
- Tooltip can be closed by removing focus from the trigger, removing hover from the trigger or content, or by pressing the `esc` key.

# Guidelines

## Use when

When an interface action is expressed solely through iconography, use a tooltip to clarify the action. The descriptions provided by tooltips should only contain one or two words: “close”, “clear”, or “save” are common examples.

Examples:
- A text input uses an icon to show that the field can be cleared. Use a tooltip to describe the action: “Clear”
- An icon-only button is used to close a modal. Use a tooltip to describe what acting upon the button will do: “Close”
- A toolbar within a content editor contains multiple icon-based actions. Use a tooltip to describe what each action does: “Left-align”
- A quantity counter uses ‘-’ and ‘+’ symbols to increase or decrease the number of items that will be added to a user’s cart. Use a tooltip to describe the actions: “Decrease quantity” and “Increase quantity”


## Don’t use when

- Don’t use a tooltip to provide additional context for form fields. Instead, use a [Popover](../popover/)
- Don’t add actions or links inside a tooltip. Instead, use a [Popover](../popover/)
- Don’t use a tooltip to describe a button that already describes itself through copy

Example:
- A credit card security field needs to describe, in detail, where to find the card information. A popover should be used to contain the graphic and card-specific details, not a tooltip


## Do / Don't


<do-dont :examples="$page.frontmatter.consistency" />
<do-dont :examples="$page.frontmatter.redundancy" />

# API

## Props

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

## Slots

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />

## Events

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.events" :slots-getting-started-link="false" />

</cdr-doc-table-of-contents-shell>
