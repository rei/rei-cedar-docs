---
{
  "title": "Chip",
  "layout_type": "LayoutComponent",
  "summary": "Chips are compact elements that represent a selection, attribute, or dynamic action.",
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
                "name": "modifier",
                "type": "string",
                "default": "'defaultt'",
                "description": "Sets the styling modifier for chip. Possible values: {'default' | 'emphasis'}"
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

Use default chips to specify, dynamically categorize or dynamically perform a discrete action which is lower in the page's information hierarchy.

<cdr-doc-example-code-pair repository-href="/src/components/CdrChip"
:sandbox-data="$page.frontmatter.sandboxData" >

```html
<div>
  <cdr-chip> default chip </cdr-chip>
  <cdr-chip disabled> disabled default chip </cdr-chip>
</div>
```
</cdr-doc-example-code-pair>

## Emphasis

Use emphasis chips to specify, dynamically categorize or dynamically perform a discrete action which is higher in the page's information hierarchy.

<cdr-doc-example-code-pair repository-href="/src/components/CdrChip"
:sandbox-data="$page.frontmatter.sandboxData" >

```html
<div>
  <cdr-chip modifier="emphasis"> emphasis chip </cdr-chip>
  <cdr-chip modifier="emphasis" disabled> emphasis disabled chip </cdr-chip>
</div>
```
</cdr-doc-example-code-pair>

## Icon Slots

Use `icon-left` or `icon-right` slots to pass icons into a chip.

<cdr-doc-example-code-pair repository-href="/src/components/CdrChip"
 :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrChip, IconHeartStroke, IconXSm'})">

```html
<div>
  <cdr-chip> text and icon left <icon-heart-stoke inherit-color slot="icon-left"/></cdr-chip>
  <cdr-chip> text and icon right <icon-x-sm inherit-color slot="icon-left"/></cdr-chip>
</div>
```
</cdr-doc-example-code-pair>

## "Filter Chips"

Pair an x icon with text to allow users to remove a chip with a functional descriptor.

<cdr-doc-example-code-pair repository-href="/src/components/CdrChip"
:sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrChip, IconXSm, CdrCheckbox'})">

```html
<div>
  <cdr-chip> text and prefix icon chip <icon-x-sm slot="icon-left"/></cdr-chip>
  TODO: wire these dudes together
  <cdr-checkbox></cdr-checkbox>
</div>
```
</cdr-doc-example-code-pair>


## "Category Chips"



<cdr-doc-example-code-pair repository-href="/src/components/CdrChip"
:sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrChip, IconXSm, CdrCheckbox'})">

```html
<div>
  TODO: implement chipGroups to handle this
  <cdr-chip> Option A</cdr-chip>
  <cdr-chip> Option B</cdr-chip>
  <cdr-chip> Option C</cdr-chip>

</div>
```
</cdr-doc-example-code-pair>

## Toggle Chip

For chips that trigger asynchronous actions, use the click event and dynamic properties in order to change the label or state of a chip.

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

Chips allow users to make selections, filter content, or trigger actions. While buttons are expected to appear consistently and with familiar calls to action, chips should appear dynamically.

## Use when

- Dynamically categorizing content based on descriptive words.
- Representing a checkbox group with more emphasis.
- Representing a radio button group with more emphasis.
- Clearly delineating and displaying options in a compact area.
- Offering dynamic and contextual actions related to primary content.
- Allowing the user to trigger an immediate action while staying on the same page.
- Allowing users to update or configure settings immediately.


## Don’t use when

- Navigating a user. Instead, use [Buttons](../buttons/) or [Links](../links/)
- Displaying non-interactive elements
- Displaying more than two rows of chips. Instead use horizontal scrolling or [Select](../select/)
- Representing page tags

## The Basics

One chip container style is available: pill.

When arranging chips horizontally:
- Left align chip group
- Separate each by cdr-space-half-x

When stacking chips vertically:
- Make sure chips overflow based on the width of the chip group area
- Separate each by cdr-space-half-x

## Do / Don't

When grouping chips, Do not exceed 2 rows of chips.

<!-- <do-dont :examples="$page.frontmatter.DATAKEY" /> -->

When grouping chips, left align chips.

<!-- <do-dont :examples="$page.frontmatter.DATAKEY" /> -->

When representing radio button or checkbox groups, include more than 2 chips in a group.

<!-- <do-dont :examples="$page.frontmatter.DATAKEY" /> -->

## Content

When using chips in a group:
- Use a logical order, whether it’s alphabetical, numerical, or time-based
- Clearly communicate the effect of selecting the option
Provide a link or include a subtitle for more information. Don’t rely on tooltips to explain a radio button

Chip labels should:
- Start with a capital letter
- Use sentence case
- Avoid long labels
- Be written as sentence fragments
- No terminal punctuation


## Do / Don't
"Can be resoled"
"New arrivals"
"Co-op exclusive"
Do use sentence case with only proper nouns capitalized.
"Can Be Resoled"
"New Arrivals"
"Co-op Exclusive"
Don't use title caps for labels.

"Set as my REI"
Do use positive phrasing for labels.
"Do not set as my REI"
Don't use negative phrasing for labels.

"New arrivals"
Do make labels brief.
"New women's climbing shoe gear arrivals"
Don't put too much text in the label.

"Set as my REI"
Do write labels as sentence fragments with no ending punctuation.
"Set this store at my REI store."
Don't add terminal punctuation at the end of a label.

Do use either prefix icon or suffix icon in one chip group.
Do not mix prefix icons and suffix icons in a single chip group.

Do use suffix icon for chips that dynamically categorize content
Do not use suffix icon for chips that perform a discrete action or offer a selection.

Do make chips horizontally scrollable or wrap to a new row.
Do not line up chips on the left margin.

Do allow chip containers to hug their contents.
Do not make all chips the same width, ignoring varied content widths.

Do display chips that offer a selection sequentially.
Do not display chips that offer a selection in random order.

Do display chips that offer a selection as a group.
Do not display a single chip to offer a selection.

## Behavior

Stateful chips used to dynamically perform a discrete action:
- Can show confirmation feedback.

Chips used for single selection:
- Selecting a single choice automatically deselects all other chips in the group.
- Include more than one option per chip group.

Chips used for multiple selection:
- Selecting one chip shouldn’t change the selection status of another chip in the list.

Chips used to dynamically categorize content:
- Can optionally include a suffix exit icon.

## Resources
  - WebAIM: [Keyboard Accessibility](https://webaim.org/techniques/keyboard/)
  - WebAIM [WCAG 2.0 Checklist](https://webaim.org/standards/wcag/checklist)
  - W3C: [WCAG 3.0 Guidelines](https://www.w3.org/TR/wcag-3.0/)

# API

## Props

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

## Slots

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />


</cdr-doc-table-of-contents-shell>
