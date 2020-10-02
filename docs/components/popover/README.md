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
    "components": "CdrPopover, CdrButton, IconInformationStroke"
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
                "name": "id",
                "type": "string",
                "required": "true",
                "description": "Id for the CdrPopover element. Required for accessibility."
              },
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
              },
              {
                "name": "trigger",
                "description": "Slot for the element that triggers the popover. Element should be a button and must be the first and only child of this slot. Event handlers are bound to this element automatically."
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

CdrPopover is a wrapper component that accepts a trigger element and popover content. When the trigger element is clicked, the poppver content is rendered. Event bindings between the trigger and the popover are set up automatically. The popover will dynamically update it's position property to ensure that it renders on screen, though this functionality can be disabled by setting autoPosition to false.

<cdr-doc-example-code-pair repository-href="/src/components/CdrPopover"
:sandbox-data="$page.frontmatter.sandboxData" >

```html
<cdr-popover id="popover-example" :position="down">
  <cdr-button slot="trigger" :icon-only="true" :with-background="true">
    <icon-information-stroke slot="icon"/>
  </cdr-button>
  <div>
    On click, I provide additional information to the user
  </div>
</cdr-popover>
```
</cdr-doc-example-code-pair>


## Accessibility

Ensure that usage of this component complies with accessibility guidelines:

- Set an `id` property on the CdrPopover. The component will automatically link that `id` to the trigger element.
- Content passed in to the `trigger` slot must be an actionable element such as a button.
- Popover content should ...

This component complies with WCAG guidelines by:

- Adds click handler to trigger element that manages popover state.
- When opened, moves focus to the first actionable element inside the popover.
- When closed, restores focus to the last active element before the popover was opened.
- Dynamically sets `aria-controls` on the trigger element to point to the id of the tooltip.
- Sets `aria-haspopup="dialog"` on the trigger element.
- Dynamically sets `aria-expanded` on the popover content.
- Adds `role="dialog"` to the tooltip content.
- Popover content is not visible to screen readers when it is closed.
- Popover can be closed by pressing the close button in the top right corner, by pressing the `esc` key, or by clicking anywhere outside of the popover content.


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
