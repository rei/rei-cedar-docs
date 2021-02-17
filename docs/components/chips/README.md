---
{
  "title": "Chip",
  "layout_type": "LayoutComponent",
  "summary": "Chips can be used to specify, filter or perform a discrete action that immediately updates on the page.",
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

<cdr-doc-table-of-contents-shell>

# Overview

## Default

Use default chips for actions to filter or to allow the user to specify or perform a discrete action which is lower in the page's information hierarchy. 

<cdr-doc-example-code-pair repository-href="/src/components/CdrChip"
:sandbox-data="$page.frontmatter.sandboxData" >

```html
<div>
  <cdr-chip> default chip </cdr-chip>
  <cdr-chip> disabled default chip </cdr-chip>
</div>
```
</cdr-doc-example-code-pair>

## Emphasis

Use emphasis chips for actions to filter or to allow the user to specify or perform a discrete action which is higher in the page's information hierarchy. 

<cdr-doc-example-code-pair repository-href="/src/components/CdrChip"
:sandbox-data="$page.frontmatter.sandboxData" >

```html
<div>
  <cdr-chip> emphasis chip </cdr-chip>
  <cdr-chip> emphasis disabled chip </cdr-chip>
</div>
```
</cdr-doc-example-code-pair>

## Text and Prefix Icon

Pair an icon with text to improve recognition about an object or action.

<cdr-doc-example-code-pair repository-href="/src/components/CdrChip"
:sandbox-data="$page.frontmatter.sandboxData" >

```html
<div>
  <cdr-chip> text and prefix icon chip </cdr-chip>
</div>
```
</cdr-doc-example-code-pair>

## Text and Suffix Icon

Pair an x icon with text to allow users to remove a functional descriptor chip.

<cdr-doc-example-code-pair repository-href="/src/components/CdrChip"
:sandbox-data="$page.frontmatter.sandboxData" >

```html
<div>
  <cdr-chip> text and suffix icon chip </cdr-chip>
</div>
```
</cdr-doc-example-code-pair>

## Stateful Chip

For buttons that trigger asynchronous actions, use the click event and dynamic properties in order to change the label or state of a button.

<cdr-doc-example-code-pair repository-href="/src/components/CdrChip"
:sandbox-data="$page.frontmatter.sandboxData" >

```html
<div>
  <cdr-chip> stateful chip </cdr-chip>
</div>
```
</cdr-doc-example-code-pair>

## Accessibility
Many WCAG requirements are contextual to their implementation. To ensure that usage of this component complies with accessibility guidelines:

- Setting `tabindex=”0”` for filter chips
- Setting `role=”button”` for filter chips
- Each selection chip must be focusable and keyboard accessible:
  - When selection chip has focus, the Space key changes the selection
  - Tab key moves to next element in list
- `CdrFormGroup` should be:
  - Used when associating group of selection chips or filter chips.
  - Identified or described as a group using the label property or slot
- Avoid nesting `CdrFormGroup`

# Guidelines

TODO

## Use when

- Categorizing information based on descriptive words
- Offering a choice with more than one option
- Allowing the user to trigger an immediate action while staying on the same page
- Allowing users to update or configure settings immediately


## Don’t use when

- Navigating a user. Instead, use [Buttons](../buttons/) or [Links](../links/)
- Displaying non-interactive elements
- Displaying more than two rows of chips. Instead use horizontal scrolling or [Select](../select/)
- Representing page tags


## The Basics

When arranging buttons horizontally:


## Do / Don't

TODO: Embed do-dont using metadata from frontmatter

<!-- <do-dont :examples="$page.frontmatter.DATAKEY" /> -->

# API

## Props

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

## Slots

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />


</cdr-doc-table-of-contents-shell>
