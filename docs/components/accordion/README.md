---
{
  "title": "Accordion",
  "layout_type": "LayoutComponent",
  "summary": "Vertically-stacked list that allows users to expand and collapse additional content",
  "title_metadata": "CdrAccordion, CdrAccordionGroup",
  "component_location": "https://github.com/rei/rei-cedar-vue-2/tree/next/src/components/accordion",
  "breadcrumbs": [
    {
      "text": "Components/"
    }
  ],
  "name": "CdrAccordion",
  "nesting": [
    {
      "type": "do",
      "image": "accordion/accordion_nest_do_4-3.png",
      "ratio": "4-3",
      "alt": "A box representing a webpage shows an accordion dropdown containing a single section of content.",
      "caption": "present content in a single accordion."
    },
    {
      "type": "dont",
      "image": "accordion/accordion_nest_dont_4-3.png",
      "ratio": "4-3",
      "alt": "A box representing a webpage shows an accordion dropdown containing multiple sections of content and nested accordions.",
      "caption": "nest accordions."
    }
  ],
  "titles": [
    {
      "type": "do",
      "image": "accordion/accordion_title_do_4-3.png",
      "ratio": "4-3",
      "alt": "A box representing a webpage shows an accordion which is labeled appropriately with short titles.",
      "caption": "keep titles short and concise."
    },
    {
      "type": "dont",
      "image": "accordion/accordion_title_dont_4-3.png",
      "ratio": "4-3",
      "alt": "A box representing a webpage shows an accordion which is labeled with a too long title that wraps to the next line.",
      "caption": "create labels so lengthy that they wrap to a second line."
    }
  ],
  "sandboxData": {
    "components": "CdrAccordionGroup, CdrAccordion, CdrText"
  },
  "versions": [
    {
      "components": [
        {
          "name": "CdrAccordion",
          "api": {
            "props": [
              {
                "name": "id",
                "type": "string",
                "default": "N/A",
                "description": "Unique id required."
              },
              {
                "name": "level",
                "type": "string, number",
                "default": "N/A",
                "description": "Set the heading that wraps the button to the appropriate level for the page. This aids in accesibility and navigaiton for keyboard users."
              },
              {
                "name": "opened",
                "type": "boolean",
                "default": "false",
                "description": "Toggle to open/close the accordion."
              },
              {
                "name": "compact",
                "type": "boolean",
                "default": "false",
                "description": "Sets the compact style."
              },
              {
                "name": "borderAligned",
                "type": "boolean",
                "default": "false",
                "description": "Sets the border-aligned style."
              },
              {
                "name": "contentSpacing",
                "type": "boolean",
                "default": "true",
                "description": "Sets the content spacing style"
              }
            ],
            "slots": [
              {
                "name": "label",
                "description": "Sets the readable text on the CdrAccordion button."
              },
              {
                "name": "default",
                "description": "Slot for the CdrAccordion content."
              }
            ],
            "events": [
              {
                  "name": "accordion-toggle",
                  "arguments": "event",
                  "description": "$emit event fired on CdrAccordion toggle."
              }
            ]
          }
        }
      ],
      "version": "0.1.0"
    }
  ],
  "see_also": [
    {
      "text": "See Also",
    },
    {
      "text": "Lists",
      "href": "../lists/"
    }
  ]
}
---

<cdr-doc-table-of-contents-shell parentSelector="h2" childSelector="h3">
## Overview

### Default (Medium)

Section borders expand to full width of container.

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" :model="{ default1: false, default2: false, default3: false }">

```html
<cdr-accordion-group>
  <cdr-accordion
    id="default-1"
    level="4"
    :opened="default1"
    @accordion-toggle="default1 = !default1"
  >
    <template #label>
      How do I find my member number?
    </template>
    <cdr-text tag="p">
        Find your member number online. You can also call
        Customer Support at 1-800-426-4840 (U.S. and Canada) or 1-253-891-2500 (International).
    </cdr-text>
  </cdr-accordion>
  <cdr-accordion
    id="default-2"
    level="4"
    :opened="default2"
    @accordion-toggle="default2 = !default2"  
  >
    <template #label>
      Does every member get an Annual Dividend?
    </template>
    <cdr-text tag="p">
        Only active REI Co-op members receive an Annual Dividend notice. To be an active
        member, you need to make net merchandise or shipping purchases (purchases minus credits and returns)
        of at least $10 per year, unless you joined during that calendar year.
    </cdr-text>
  </cdr-accordion>
  <cdr-accordion
    id="default-3"
    level="4"
    :opened="default3"
    @accordion-toggle="default3 = !default3"
  >
    <template #label>
      When does my dividend expire?
    </template>
    <cdr-text tag="p">
        Your dividend expires on Jan. 3, just under two years after it has been issued.
        or example, your 2018 dividend earned on 2017 purchases will expire in January 2020.
    </cdr-text>
  </cdr-accordion>
</cdr-accordion-group>
```

</cdr-doc-example-code-pair>

### Compact (Small)

Reduced spacing around title and content body. Also, smaller font sizes resulting in overall denser display of content.

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" :model="{ compact1: false, compact2: false, compact3: false }">

```html
<cdr-accordion-group>
  <cdr-accordion
    id="compact-1"
    level="4"
    :compact="true"
    :opened="compact1"
    @accordion-toggle="compact1 = !compact1"
  >
    <template #label>
      Why buy used gear?
    </template>
    <cdr-text tag="p">
      Used Gear Beta is one way we are experimenting expanding opportunities
      to enjoy life outdoors and bringing value to our members.
    </cdr-text>
  </cdr-accordion>
  <cdr-accordion
    id="compact-2"
    level="4"
    :compact="true"
    :opened="compact2"
    @accordion-toggle="compact2 = !compact2"
  >
    <template #label>
      What's your cancellation policy?
    </template>
    <cdr-text tag="p">
      Orders may be cancelled within 30 minutes of placing your order online.
      After 30 minutes, your order will begin processing through our fulfillment center and cannot be cancelled.
    </cdr-text>
  </cdr-accordion>
  <cdr-accordion
    id="compact-3"
    level="4"
    :compact="true"
    :opened="compact3"
    @accordion-toggle="compact3 = !compact3"
  >
    <template #label>
      When will my order arrive?
    </template>
    <cdr-text tag="p">
      REI Co-op Used Gear Beta orders can take up to 3-4 business days to ship out. When your order ships,
      we'll send you a shipping confirmation email that contains your tracking information. Shipping time is generally 3-5 business days.
    </cdr-text>
  </cdr-accordion>
</cdr-accordion-group>
```

</cdr-doc-example-code-pair>

### Border Aligned

Border aligns to the title text and expand/collapse icon.

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" :model="{ borderAligned1: false, borderAligned2: false, borderAligned3: false }">

```html
<cdr-accordion-group>
  <cdr-accordion
    id="border-aligned-1"
    level="4"
    :border-aligned="true"
    :opened="borderAligned1"
    @accordion-toggle="borderAligned1 = !borderAligned1"
  >
    <template #label>
      How long have you been in business?
    </template>
    <cdr-text tag="p">
      REI has offered the finest in outdoor gear since 1938. In that same spirit,
      REI Adventures has led the way down wilderness paths and cultural back roads
      to the most intriguing destinations in the world since 1987.
    </cdr-text>
  </cdr-accordion>
  <cdr-accordion
    id="border-aligned-2"
    level="4"
    :border-aligned="true"
    :opened="borderAligned2"
    @accordion-toggle="borderAligned2 = !borderAligned2"
  >
    <template #label>
      What kinds of trips are offered?
    </template>
    <cdr-text tag="p">
      We have adventures that range from weekend getaways to three-week treks. We
      explore the world on foot, by kayak, canoe or raft, bicycle, safari, 4-wheel
      drive, cruise ship or a combination of these vehicles! Novices are welcome.
      We can teach you to kayak or to safely summit a mountain.
    </cdr-text>
  </cdr-accordion>
  <cdr-accordion
    id="border-aligned-3"
    level="4"
    :border-aligned="true"
    :opened="borderAligned3"
    @accordion-toggle="borderAligned3 = !borderAligned3"
  >
    <template #label>
      How do I know what each trip is like?
    </template>
    <cdr-text tag="p">
      This website provides full details of each trip. If you still have questions,
      please call us at 1-800-622-2236 or e-mail us at travel@rei.com.
    </cdr-text>
  </cdr-accordion>
</cdr-accordion-group>
```

</cdr-doc-example-code-pair>

### Content Spacing

Optionally remove content spacing (css padding) from the accordion content for applications needing more design flexibility.

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" :model="{ contentSpacing1: false, contentSpacing2: false, contentSpacing3: false }">

```html
<cdr-accordion-group>
  <cdr-accordion
    id="content-spacing-1"
    level="4"
    :content-spacing="false"
    :opened="contentSpacing1"
    @accordion-toggle="contentSpacing1 = !contentSpacing1"
  >
    <template #label>
      How long have you been in business?
    </template>
    <cdr-img
      src="/rei-cedar-docs/live.jpg"
      alt="REI employees building trails during a stewardship event"
    />
    <cdr-text tag="p">
      REI has offered the finest in outdoor gear since 1938. In that same spirit,
      REI Adventures has led the way down wilderness paths and cultural back roads
      to the most intriguing destinations in the world since 1987.
    </cdr-text>
  </cdr-accordion>
  <cdr-accordion
    id="content-spacing-2"
    level="4"
    :content-spacing="false"
    :opened="contentSpacing2"
    @accordion-toggle="contentSpacing2 = !contentSpacing2"
  >
    <template #label>
      What kinds of trips are offered?
    </template>
    <cdr-img
      src="/rei-cedar-docs/live.jpg"
      alt="REI employees building trails during a stewardship event"
    />
    <cdr-text tag="p">
      We have adventures that range from weekend getaways to three-week treks. We
      explore the world on foot, by kayak, canoe or raft, bicycle, safari, 4-wheel
      drive, cruise ship or a combination of these vehicles! Novices are welcome.
      We can teach you to kayak or to safely summit a mountain.
    </cdr-text>
  </cdr-accordion>
  <cdr-accordion
    id="content-spacing-3"
    level="4"
    :content-spacing="false"
    :opened="contentSpacing3"
    @accordion-toggle="contentSpacing3 = !contentSpacing3"
  >
    <template #label>
      How do I know what each trip is like?
    </template>
    <cdr-img
      src="/rei-cedar-docs/live.jpg"
      alt="REI employees building trails during a stewardship event"
    />
    <cdr-text tag="p">
      This website provides full details of each trip. If you still have questions,
      please call us at 1-800-622-2236 or e-mail us at travel@rei.com.
    </cdr-text>
  </cdr-accordion>
</cdr-accordion-group>
```

</cdr-doc-example-code-pair>

### Dynamic Accordions

In order to render a dynamic list of accordions, for example using data retrieved from a back-end API, you will need to use `this.$set` or some other Vue method to make the array of accordion data reactive. This can also be used to avoid creating an individual data attribute for every accordion and instead track their state with an array of booleans.

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" :model="{ accordions: [{id: 'dynamic-a', label: 'Dynamic A label', content: 'Dynamic A content', opened: false},{id: 'dynamic-b', label: 'Dynamic B label', content: 'Dynamic B content', opened: false},{id: 'dynamic-c', label: 'Dynamic C label', content: 'Dynamic C content', opened: false},] }" :methods="{toggleAccordion(idx){ this.$set(this.accordions[idx], 'opened', !this.accordions[idx].opened)}}">

```html
<cdr-accordion-group>
  <cdr-accordion
    v-for="(accordion, idx) in accordions"
    :key="accordion.id"
    :id="accordion.id"
    level="4"
    :opened="accordion.opened"
    @accordion-toggle="toggleAccordion(idx)"
  >
    <template #label>
      {{ accordion.label }}
    </template>
    <cdr-text tag="p">
      {{ accordion.content }}
    </cdr-text>
  </cdr-accordion>
</cdr-accordion-group>
```

</cdr-doc-example-code-pair>


### Unwrapped

The `unwrap` property of `CdrAccordionGroup` can be used to render the accordion content in an "unwrapped" state. This property accepts either a boolean toggle or a list of breakpoints.

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" :model="{ unwrap1: false, unwrap2: false, unwrap3: false }">

```html
<cdr-accordion-group unwrap="@md @lg">
  <cdr-accordion
    id="unwrap-1"
    level="4"
    :opened="unwrap1"
    @accordion-toggle="unwrap1 = !unwrap1"
  >
    <template #label>
      How do I find my member number?
    </template>
    <cdr-text tag="p">
        Find your member number online. You can also call
        Customer Support at 1-800-426-4840 (U.S. and Canada) or 1-253-891-2500 (International).
    </cdr-text>
  </cdr-accordion>
  <cdr-accordion
    id="unwrap-2"
    level="4"
    :opened="unwrap2"
    @accordion-toggle="unwrap2 = !unwrap2"  
  >
    <template #label>
      Does every member get an Annual Dividend?
    </template>
    <cdr-text tag="p">
        Only active REI Co-op members receive an Annual Dividend notice. To be an active
        member, you need to make net merchandise or shipping purchases (purchases minus credits and returns)
        of at least $10 per year, unless you joined during that calendar year.
    </cdr-text>
  </cdr-accordion>
  <cdr-accordion
    id="unwrap-3"
    level="4"
    :opened="unwrap3"
    @accordion-toggle="unwrap3 = !unwrap3"
  >
    <template #label>
      When does my dividend expire?
    </template>
    <cdr-text tag="p">
        Your dividend expires on Jan. 3, just under two years after it has been issued.
        or example, your 2018 dividend earned on 2017 purchases will expire in January 2020.
    </cdr-text>
  </cdr-accordion>
</cdr-accordion-group>
```

</cdr-doc-example-code-pair>

### Accessibility

To ensure that usage of this component complies with accessibility guidelines:
- Provide descriptive label for accordion header
- Be aware that embedding lengthy content in an accordion can be disorienting. When the accordion header expands, it can give the appearance of moving to another page

<br />

This component has compliance with WCAG guidelines by:
- Providing keyboard interactions to:
  - Expand and collapse accordion headers
  - Navigate and reverse navigate through the accordion headers
- Generating ARIA tags for accessibility, specifically `aria-controls`, `aria-expanded`, and `aria-hidden`

<hr>

## Guidelines

### Use When

- Providing users more content within the same layout
- Displaying content that is directly related, or supplemental, to the main subject of the page
- Designing with limited vertical space and there is enough content to condense

### Don't Use When

- Linking a title to another page. Instead, use [Links](../links/)
- Designing with sparse content. Instead, use [Lists](../lists/)
- Content is lengthy. Instead, use [Tabs](../tabs/)

### The Basics

- Use on either light or dark backgrounds. Background color is provided for both
- Content within accordions can include text, photos, graphics, or other components (i.e. links, buttons, tables)

### Content

- Order the accordion titles by priority and importance
- Keep titles short to avoid wrapping at smaller viewports
- Use sentence case for titles
- Use short titles for accordion labels to avoid wrapping
- Always include a title, icon, and subsequent content for each section. All are required

### Anatomy

- Position interactive elements (i.e. Select, Button, Link) within the container far enough from the title area to avoid accidental collapsing

### Behavior

- Entire title area is clickable, including icon and background
- Never nest accordions within themselves


#### Show and Hide

- Revealing the first accordion section is recommended
- Other accordion sections are all hidden by default, however it is possible to specify that:
  - All accordion sections are revealed when page is displayed
  - A specific accordion section is revealed with remaining accordion section closed
- Sections do not automatically collapse when another is expanded

### Do / Don't

<do-dont :examples="$page.frontmatter.nesting" />

<br />

<do-dont :examples="$page.frontmatter.titles" />


### Responsiveness

- Accordion style can change variant based on breakpoint. Example: Default at MD/LG can change to Compact and Border-Aligned at XS/SM
- Switching between the Tab component and the Accordion component is not supported in Cedar components library
- Do not replace the Accordion component with the Tab component at different breakpoints

<hr>

## API

<cdr-icon class="cdr-doc-code-snippet__action-icon" use="#brand-github"/> View it on Github: 
<cdr-link :href="$page.frontmatter.component_location">{{$page.frontmatter.component_location}}</cdr-link>


### Props

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

### Slots

<api-slot :slots-getting-started-link="true" />

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" :slots-getting-started-link="false" />

### Events

<cdr-doc-api type="event" :api-data="$page.frontmatter.versions[0].components[0].api.events" />

### Usage

CdrAccordion emits an event when its button is clicked. Use an event listener to toggle the value of the opened prop to open or close the accordion.

```html
<template>
  <cdr-accordion
    id="item"
    level="3"
    :compact="true"
    :opened="opened"
    @accordion-toggle="opened = !opened"
  >
    <template #label>
      Click me to show content!
    </template>
      This content is revealed when the accordion is opened.
  </cdr-accordion>
</template>

<script>
export default {
  ...
  data() {
    return {
      opened: false
    }
  }
}
</script>
```

### Accordion Groups

Accordion has a complementary wrapping component `CdrAccordionGroup` which should be used when creating a group of accordions. `CdrAccordionGroup` has no API and simply acts to enhance a11y and keyboard interactions for the group.

Creating groups can be useful if, for instance, you wanted to close the other accordions when one is opened.

```html
<cdr-accordion-group>
  <cdr-accordion
    v-for="(item, index) in grouped"
    :id="item.id"
    level="2"
    :border-aligned="true"
    :opened="item.opened"
    :key="item.id"
    @accordion-toggle="updateGroup(index)"
  >
    <template #label>
      {{ item.label }}
    </template>
    {{ item.content }}
  </cdr-accordion>
</cdr-accordion-group>

<script>
export default {
  ...
  data() {
    return {
      grouped: [
        {
          label: 'These are border-aligned',
          content: 'These accordions will only allow one open at a time.',
          opened: false,
          id: 'linked1',
        },
        {
          label: 'And they are also linked',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
          opened: false,
          id: 'linked2',
        },
        {
          label: 'To close others when one is opened',
          content: 'These accordions will only allow one open at a time.',
          opened: false,
          id: 'linked3',
        },
      ],
    }
  },
  methods: {
    updateGroup(index) {
      const { opened } = this.grouped[index];
      if (opened) {
        // closing opened accordion
        this.grouped[index].opened = false;
      } else {
        // open closed accordion. close all others.
        for (let i = 0; i < this.grouped.length; i += 1) {
          this.grouped[i].opened = index === i;
        }
      }
    },
  }
}
</script>
```

</cdr-doc-table-of-contents-shell>
