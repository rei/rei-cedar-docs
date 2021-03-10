---
{
  "title": "Chip",
  "layout_type": "LayoutComponent",
  "summary": "Allows users to make selections, filter content, or trigger actions",
  "title_metadata": "CdrChip",
  "breadcrumbs": [
    {
      "text": "Components/"
    }
  ],
  "sandboxData": {
    "components": "CdrChip, CdrChipGroup"
  },

  "case": [
    {
      "type": "do",
      "image": "chips/chips_do_case_1a.png",
      "ratio": "4-3",
      "caption": "use sentence case with only proper nouns capitalized."
    },
    {
      "type": "dont",
      "image": "chips/chips_dont_case_1b.png",
      "ratio": "4-3",
      "caption": "use title caps."
    }
  ],

  "phrasing": [
    {
      "type": "do",
      "image": "chips/chips_do_phrasing_2a.png",
      "ratio": "4-3",
      "caption": "use positive phrasing"
    },
    {
      "type": "dont",
      "image": "chips/chips_dont_phrasing_2b.png",
      "ratio": "4-3",
      "caption": "use negative phrasing for labels"
    }
  ],

  "labels": [
    {
      "type": "do",
      "image": "chips/chips_do_labels_3a.png",
      "ratio": "4-3",
      "caption": "make text brief."
    },
    {
      "type": "dont",
      "image": "chips/chips_dont_labels_3b.png",
      "ratio": "4-3",
      "caption": "put too much text in the chip."
    }
  ],

  "punctuation": [
    {
      "type": "do",
      "image": "chips/chips_do_punctuation_4a.png",
      "ratio": "4-3",
      "caption": "write sentence fragments with no ending punctuation."
    },
    {
      "type": "dont",
      "image": "chips/chips_dont_punctuation_4b.png",
      "ratio": "4-3",
      "caption": "add terminal punctuation."
    }
  ],

  "icon": [
    {
      "type": "do",
      "image": "chips/chips_do_icon_5a.png",
      "ratio": "4-3",
      "caption": "use either icons in the right or the left slot per chip and chip group."
    },
    {
      "type": "dont",
      "image": "chips/chips_dont_icon_5b.png",
      "ratio": "4-3",
      "caption": "put icons in the right and left slots in a single chip or chip group."
    }
  ],

  "x": [
    {
      "type": "do",
      "image": "chips/chips_do_x_6a.png",
      "ratio": "4-3",
      "caption": "use the X remove icon in the right slot."
    },
    {
      "type": "dont",
      "image": "chips/chips_dont_x_6b.png",
      "ratio": "4-3",
      "caption": "use the X remove icon in the left slot."
    }
  ],

  "overflow": [
    {
      "type": "do",
      "image": "chips/chips_do_overflow_7a.png",
      "ratio": "4-3",
      "caption": "allow a group of chips to overflow to a new row."
    },
    {
      "type": "dont",
      "image": "chips/chips_dont_overflow_7b.png",
      "ratio": "4-3",
      "caption": "create excessive line breaks in a group of chips."
    }
  ],

  "padding": [
    {
      "type": "do",
      "image": "chips/chips_do_padding_8a.png",
      "ratio": "4-3",
      "caption": "allow chip containers to hug their contents."
    },
    {
      "type": "dont",
      "image": "chips/chips_dont_padding_8b.png",
      "ratio": "4-3",
      "caption": "add extra padding and make all chips the same width."
    }
  ],

  "sequence": [
    {
      "type": "do",
      "image": "chips/chips_do_sequence_9a.png",
      "ratio": "4-3",
      "caption": "display selection chips sequentially."
    },
    {
      "type": "dont",
      "image": "chips/chips_dont_sequence_9b.png",
      "ratio": "4-3",
      "caption": "display selection chips in random order."
    }
  ],

  "group": [
    {
      "type": "do",
      "image": "chips/chips_do_group_10a.png",
      "ratio": "4-3",
      "caption": "display chips that offer a selection as a group."
    },
    {
      "type": "dont",
      "image": "chips/chips_dont_group_10b.png",
      "ratio": "4-3",
      "caption": "display a single chip to offer a selection."
    }
  ],
  "versions": [
    {
      "components": [
        {
          "name": "CdrChip",
          "api": {
            "slots": [
              {
                "name": "default",
                "description": "Slot for CdrChip content."
              }
            ]
          }
        },
        {
          "name": "CdrChipGroup",
          "api": {
            "props": [
              {
                "name": "label",
                "type": "string",
                "default": "'default'",
                "description": "Sets a label that describes the chip group and what it is selecting. By default this label is visually hidden and only made available to screen readers."
              },
              {
                "name": "hide-label",
                "type": "boolean",
                "default": "'true'",
                "description": "Visually hides the chip group label but makes it accessible to screen readers."
              },
            ],
            "slots": [
              {
                "name": "label",
                "description": "Slot for overriding CdrChip label content with a custom elementt."
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
Chips are compact elements that represent a selection, attribute, or dynamic action. 

## Default

Use chips to directly specify, dynamically categorize or immediately perform a discrete action.

<cdr-doc-example-code-pair repository-href="/src/components/CdrChip"
:sandbox-data="$page.frontmatter.sandboxData" >

```html
<div>
  <cdr-chip>Default chip</cdr-chip>
  <cdr-chip disabled>Disabled default chip</cdr-chip>
</div>
```
</cdr-doc-example-code-pair>

## Icon Slots

Use `icon-left` or `icon-right` slots to pass icons into a chip. Place the X remove icon in the icon-right slot only. Place other icons in the icon-left slot. Use only one icon per chip.

<cdr-doc-example-code-pair repository-href="/src/components/CdrChip"
 :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrChip, IconHeartStroke, IconCheckLg'})">

```html
<div>
  <cdr-chip>Text and icon left <icon-heart-stroke inherit-color size="small" slot="icon-left"/></cdr-chip>
  <cdr-chip>Text and icon right <icon-check-lg size="small" inherit-color slot="icon-right"/></cdr-chip>
</div>
```
</cdr-doc-example-code-pair>

## Stateful Chips

Use stateful chips to update settings immediately or trigger an immediate action while staying on the same page.

For chips that toggle a single selection on and off, use the click event and dynamic properties in order to change the label or state of a chip. The `aria-pressed` attribute should be used to designate the state of the toggle.

<cdr-doc-example-code-pair repository-href="/src/components/CdrChip"
:sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrChip, IconHeartStroke, IconHeartFill'})" :model="{ toggled: false }" :methods="{toggle() {this.toggled = !this.toggled}}" >

```html
<div>
  <cdr-chip
    @click="toggle"
    :aria-pressed="toggled ? 'true' : 'false'"
  >
    <icon-heart-stroke
      slot="icon-left"
      size="small"
      inherit-color
      v-if="!toggled"
    />
    <icon-heart-fill
      slot="icon-left"
      size="small"
      inherit-color
      v-else
    />
    Toggle
  </cdr-chip>
</div>
```
</cdr-doc-example-code-pair>


## Filter Chips

Filter chips add a visual representation of user selected filters. Filter chips that represent user selections that can be dynamically removed should include an X icon in the right icon slot and be linked to the ID of the input it controls using `aria-controls`. The `aria-pressed` property should be set to true to designate that this selection is active.

<cdr-doc-example-code-pair repository-href="/src/components/CdrChip"
:sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrChip, IconXLg, CdrCheckbox'})" :model="{ filtered: true }" :methods="{updateFilter() {this.filtered = !this.filtered}}">

```html
<div>
  <cdr-checkbox v-model="filtered" id="filter-checkbox" @change="updateFilter">Add Filter</cdr-checkbox>
  <cdr-chip v-if="filtered" @click="updateFilter" aria-controls="filter-checkbox" aria-pressed="true"> Remove filter <icon-x-lg size="small" slot="icon-right"/></cdr-chip>
</div>
```
</cdr-doc-example-code-pair>


## Selection Chips

Use selection chips to allow users to make a single select choice or a multiple select choice. Single select chip groups are a more prominent alternative to radio buttons while multiple select chip groups are a more prominent alternative to checkboxes.

### Single Select

For single select chip groups, apply `role='radio'` to each chip, use `aria-checked="true"` and `tabindex="0"` to designate the selected chip, and apply `aria-checked="false"` and `tabindex="-1"` to the other chips. The chip elements should be grouped directly inside a CdrChipGroup element to ensure keyboard navigation is properly managed. The CdrChipGroup element requires a label property or slot be passed in which describes the chip group. This label is visually hidden by default.

<cdr-doc-example-code-pair repository-href="/src/components/CdrChip"
:sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrChip, IconXSm, CdrCheckbox'})" :model="{ categories: ['a', 'b', 'c'], selectedCategory: 'a' }" :methods="{selectCategory(category) {this.selectedCategory = category}}">

```html
<div>
  <cdr-chip-group label="Chip group description">
    <cdr-chip v-for="category in categories" role="radio" :aria-checked="category === selectedCategory" :tabindex="category === selectedCategory ? 0 : -1" @click="selectCategory(category)">
      Option {{ category }}
    </cdr-chip>
  </cdr-chip-group>

</div>
```
</cdr-doc-example-code-pair>

### Multiple Select

For multiple select chip groups, apply `role='checkbox'` to each chip, use `aria-checked="true"` to designate the selected chip, and apply `aria-checked="false"` to the other chips. The chip elements should be grouped directly inside a CdrChipGroup element to ensure keyboard navigation is properly managed. The CdrChipGroup element requires a label property or slot be passed in which describes the chip group. This label is visually hidden by default.

<cdr-doc-example-code-pair repository-href="/src/components/CdrChip"
:sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrChip, IconXSm, CdrCheckbox'})" :model="{ categories: ['a', 'b', 'c', 'd'], selectedCategories: ['b', 'c'] }" :methods="{selectCategory(category) {const i = this.selectedCategories.indexOf(category); if (i !== -1) { this.selectedCategories.splice(i, 1) } else { this.selectedCategories.push(category)}}}">

```html
<div>
  <cdr-chip-group label="Chip group description">
    <cdr-chip v-for="category in categories" role="checkbox" :key="category" :aria-checked="selectedCategories.includes(category)" @click="selectCategory(category)">
      Option {{ category }}
    </cdr-chip>
  </cdr-chip-group>

</div>
```
</cdr-doc-example-code-pair>



## Accessibility
Many WCAG requirements are contextual to their implementation. To ensure that usage of this component complies with accessibility guidelines:

- For a group of chips related to a single selection, use `role="radio"`, `aria-checked`, and `tabindex` on each chip and wrap the group in a CdrChipGroup component. The selected chip should have `aria-checked="true"` and `tabindex="0"` set, while the rest of the chips should have `aria-checked="false"` and `tabindex="-1"`.
- For a chip that controls a selection made elsewhere on the page, set `aria-controls` on the chip to point to the ID of the input being modified
- For a chip that toggles a selection on and off, use `role="switch"` and `aria-checked` to designate its state.
- For other uses of CdrChip please reach out in Slack at #cedar-user-support

CdrChip and CdrChipGroup implement the following accessibility requirements:
- CdrChip uses a button tag
- CdrChipGroup implements keyboard navigation for a group of CdrChips

# Guidelines

Chips allow users to make selections, filter content, or trigger actions. While buttons are expected to appear consistently and with familiar calls to action, chips should appear dynamically.

## Use when

- Dynamically categorizing content based on descriptive words
- Representing a checkbox group with more emphasis
- Representing a radio button group with more emphasis
- Clearly delineating and displaying options in a compact area
- Offering dynamic and contextual actions related to primary content
- Allowing the user to trigger an immediate action while staying on the same page
- Allowing users to update or configure settings immediately

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

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/chips/basics_horizontal.png`)"/>

When stacking chips vertically:
- Make sure chips overflow based on the width of the chip group area
- Separate each by cdr-space-half-x

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/chips/basics_vertical.png`)"/>


## Content

When using chips in a group:
- Use a logical order, whether it’s alphabetical, numerical, or time-based
- Clearly communicate the effect of selecting the option
- Provide a link or include a subtitle for more information. Don’t rely on tooltips to explain a radio button

Chip text should:
- Start with a capital letter
- Use sentence case
- Avoid long labels
- Be written as sentence fragments
- No terminal punctuation


## Do / Don't

<do-dont :examples="$page.frontmatter.case" />
<do-dont :examples="$page.frontmatter.phrasing" />
<do-dont :examples="$page.frontmatter.labels" />
<do-dont :examples="$page.frontmatter.punctuation" />
<do-dont :examples="$page.frontmatter.icon" />
<do-dont :examples="$page.frontmatter.x" />
<do-dont :examples="$page.frontmatter.overflow" />
<do-dont :examples="$page.frontmatter.padding" />
<do-dont :examples="$page.frontmatter.sequence" />
<do-dont :examples="$page.frontmatter.group" />




<!-- When grouping chips, Do not exceed 2 rows of chips.

<do-dont :examples="$page.frontmatter.DATAKEY" />

When grouping chips, left align chips.

<do-dont :examples="$page.frontmatter.DATAKEY" />

When representing radio button or checkbox groups, include more than 2 chips in a group.

<do-dont :examples="$page.frontmatter.DATAKEY" /> -->

## Behavior

Stateful chips used to dynamically perform a discrete action:
- Can show confirmation feedback.

Chips used for single selection:
- Selecting a single choice automatically deselects all other chips in the group.
- Include more than one option per chip group.

Chips used for multiple selection:
- Selecting one chip shouldn’t change the selection status of another chip in the list.

Filter chips:
- Can optionally include an X remove icon.


When making decisions about whether to use a button, links or chips, consider the following:

| **Buttons**                                      | **Links**                                                 | **Chips**                                  |
| ------------------------------------------------ | --------------------------------------------------------- | ------------------------------------------ |
| Toggling a display to full screen       | Navigating user to a new page or view	  | Representing a filtered list of content that appear on the same page  |     
| Opening a modal window                           | Changing the URL                                          | Offering a choice or representing a filter |
| Triggering a popup menu                          | Causing a browser redraw or refresh                       | Immediately changing a setting on the page |

## Resources
  - WebAIM: [Keyboard Accessibility](https://webaim.org/techniques/keyboard/)
  - WebAIM [WCAG 2.0 Checklist](https://webaim.org/standards/wcag/checklist)
  - W3C: [WCAG 3.0 Guidelines](https://www.w3.org/TR/wcag-3.0/)

# API


## CdrChip
### Props


<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

### Slots

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />

## CdrChipGroup
### Props


<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[1].api.props" />

### Slots

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[1].api.slots" />


</cdr-doc-table-of-contents-shell>
