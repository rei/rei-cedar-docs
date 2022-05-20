---
{
  "title": "Tooltip",
  "layout_type": "LayoutComponent",
  "summary": "Floating label used to clarify interface actions",
  "title_metadata": "CdrTooltip",
  "component_location": "https://github.com/rei/rei-cedar/tree/next/src/components/tooltip",
  "breadcrumbs": [
    {
      "text": "Components/"
    }
  ],
  "sandboxData": {
    "components": "CdrTooltip, CdrButton, IconInformationStroke"
  },
  "consistency": [
    {
      "type": "do",
      "image": "tooltip/tooltip_consistency_do.png",
      "ratio": "4-3",
      "alt": "A set of three unlabeled icons with tooltips revealing their names upon hover.",
      "caption": "consistently provide tooltips for unlabeled icons "
    },
    {
      "type": "dont",
      "image": "tooltip/tooltip_consistency_dont.png",
      "ratio": "4-3",
      "alt": "A set of three unlabeled icons with tooltips incorrectly only provided for one.",
      "caption": "provide tooltips for only a subset of icons within a set"
    }
  ],

  "redundancy": [
    {
      "type": "do",
      "image": "tooltip/tooltip_redundancy_do.png",
      "ratio": "4-3",
      "alt": "A button with its action clearly labeled Add to Cart does not display a tooltip upon hover.",
      "caption": "avoid using tooltips when actions are clearly defined"
    },
    {
      "type": "dont",
      "image": "tooltip/tooltip_redundancy_dont.png",
      "ratio": "4-3",
      "alt": "A button with its action clearly labeled Add to Cart incorrectly displays a tooltip with redundant info upon hover.",
      "caption": "provide redundant information with a tooltip"
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
              {
                "name": "open",
                "type": "boolean",
                "description": "Used to programmatically control the tooltip state. Does not need to be set if you are using the `trigger` slot. See the Custom Trigger examples for more info."
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

<cdr-doc-table-of-contents-shell parentSelector="h2" childSelector="h3">

## Overview

CdrTooltip is a wrapper component that accepts a trigger element and tooltip content. When the trigger element is hovered or focused, the tooltip content is rendered. Event bindings between the trigger and the tooltip are set up automatically. The tooltip will dynamically update its `position` property to ensure that it renders on screen, though this functionality can be disabled by setting `autoPosition` to `false`.

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location"
:sandbox-data="$page.frontmatter.sandboxData" >

```html
<cdr-tooltip id="tooltip-example" position="top">
  <template #trigger>
    <cdr-button :icon-only="true" :with-background="true" aria-label="Overview example: additional information">
      <template #icon>
        <icon-information-stroke title="info icon"/>
      </template>
    </cdr-button>
  </template>
  <div>
    On hover or focus, I provide more information about what this button does
  </div>
</cdr-tooltip>
```
</cdr-doc-example-code-pair>

### Custom Trigger

CdrTooltip can also be controlled programmatically using the `open` prop. However, doing so means that you must implement certain behavior yourself:

- The CdrTooltip element and the trigger element must be wrapped in a div with `position: relative` and `width: max-content`.
- The `open` property should be toggled to true on `mouseover` and `focus`, and toggled to false on `blur` and `focus`.
- The trigger element should set its `aria-describedby` property set to the ID of the CdrTooltip.

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location"
:sandbox-data="$page.frontmatter.sandboxData" :model="{open: false}">

```html
<div style="position: relative; width: max-content;">
  <cdr-button
    @mouseover="open = true"
    @mouseleave="open = false"
    @focus="open = true"
    @blur="open = false"
    :icon-only="true"
    :with-background="true"
    aria-label="Custom Trigger example: additional information"
    aria-describedby="tooltip-custom-example"
  >
    <template #icon>
      <icon-information-stroke title="info icon"/>
    </template>
  </cdr-button>
  <cdr-tooltip id="tooltip-custom-example" position="top" :open="open">
    <div>
      On click, I provide additional information to the user
    </div>
  </cdr-tooltip>
</div>
```
</cdr-doc-example-code-pair>

### Accessibility

To ensure your usage of this component complies with accessibility guidelines you are responsible for the following:

- Set an `id` property on the CdrTooltip. The component will automatically link that `id` to the trigger element.
- Content passed into the `trigger` slot must be an actionable element such as a button.
- Tooltip content should directly describe the element that triggers it. For example, providing more information or context about what an input does, or adding a textual description of an icon-only buttton.
- Avoid rich content. Formatting such as bold text, italics, headings, icons, etc. will not be conveyed through aria-describedby or aria-labelledby.
- No interactive content. Any interactive content such as links or buttons should not be placed within a tooltip.
- Do not put essential information in tooltips.
- Do not use a timeout to hide the tooltip.

This component complies with WCAG guidelines by:

- Adds hover and focus handlers to trigger element to manage tooltip state.
- Dynamically sets `aria-described-by` on the trigger element to point to the id of the tooltip.
- Adds `role="tooltip"` to the tooltip content.
- Tooltip content is visible to screen readers even when it is closed.
- Tooltip content can be hovered over without the tooltip closing.
- Tooltip can be closed by removing focus from the trigger, removing hover from the trigger or content, or by pressing the `esc` key.

## Guidelines

### Use when

When an interface action is expressed solely through iconography, use a tooltip to clarify the action. Only interactive elements should trigger tooltips. The descriptions provided by tooltips should only contain one or two words: “close”, “clear”, or “save” are common examples.

Examples:
- A text input uses an icon to show that the field can be cleared. Use a tooltip to describe the action: “Clear”
- An icon-only button is used to close a modal. Use a tooltip to describe what acting upon the button will do: “Close”
- A toolbar within a content editor contains multiple icon-based actions. Use a tooltip to describe what each action does: “Left-align”
- A quantity counter uses ‘-’ and ‘+’ symbols to increase or decrease the number of items that will be added to a user’s cart. Use a tooltip to describe the actions: “Decrease quantity” and “Increase quantity”


### Don’t use when

- Don’t use a tooltip to provide additional context for form fields. Instead, use a [Popover](../popover/)
- Don’t add actions or links inside a tooltip. Instead, use a [Popover](../popover/)
- Don’t use a tooltip to describe a button that already describes itself through copy

Example:
- A credit card security field needs to describe, in detail, where to find the card information. A popover should be used to contain the graphic and card-specific details, not a tooltip


### Do / Don't


<do-dont :examples="$page.frontmatter.consistency" />
<do-dont :examples="$page.frontmatter.redundancy" />

# API

<cdr-icon class="cdr-doc-code-snippet__action-icon" use="#brand-github"/> View it on Github: 
<cdr-link :href="$page.frontmatter.component_location">{{$page.frontmatter.component_location}}</cdr-link>

## Props

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

## Slots

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />

## Events

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.events" :slots-getting-started-link="false" />

</cdr-doc-table-of-contents-shell>
