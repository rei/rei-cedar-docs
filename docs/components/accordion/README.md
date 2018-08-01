---
{
  "title": "Accordion",
  "layout": "LayoutComponent",
  "summary": "Vertically-stacked list that allows users to expand and collapse additional content.",
  "title_metadata": "Accordion, cdrAccordion",
  "breadcrumbs": [
    {
      "text": "Components/",
      "href": "#"
    }
  ],
  "name": "CdrAccordion",
  "nesting": [
    {
      "type": "do",
      "image": "accordion/accordion_nest_do_4-3.png",
      "ratio": "4-3",
      "alt": "Image showing proper accordion usage",
      "caption": "present content in a single accordion"
    },
    {
      "type": "dont",
      "image": "accordion/accordion_nest_dont_4-3.png",
      "ratio": "4-3",
      "alt": "Image showing nested accordions",
      "caption": "nest accordions"
    }
  ],
  "titles": [
    {
      "type": "do",
      "image": "accordion/accordion_title_do_4-3.png",
      "ratio": "4-3",
      "alt": "Image showing short and succinct accordion titles",
      "caption": "keep titles short and succinct"
    },
    {
      "type": "dont",
      "image": "accordion/accordion_title_dont_4-3.png",
      "ratio": "4-3",
      "alt": "Image showing a too long accordion title wrapped to many lines",
      "caption": "create labels so lengthy that they wrap to a second line"
    }
  ],
  "versions": [
    {
      "components": [
        {
          "name": "CdrAccordion",
          "api": {
            "props": [
              {
                "name": "compact",
                "type": "boolean",
                "default": "false",
                "description": "Set compact style of cdr-accordion-item child components."
              },
              {
                "name": "borderAligned",
                "type": "boolean",
                "default": "false",
                "description": "Set border-aligned style of cdr-accordion-item child components."
              },
              {
                "name": "showAll",
                "type": "boolean",
                "default": "false",
                "description": "Set all child cdr-accordion-item components to display open by default."
              }
            ],
            "slots": [
              {
                "name": "default",
                "description": "Default slot for cdr-accordion-item(s)."
              }
            ],
          },
        },
        {
          "name": "CdrAccordionItem",
          "api": {
            "props": [
              {
                "name": "id",
                "type": "string",
                "default": "n/a",
                "description": "Required id for component reference. Id must be unique."
              },
              {
                "name": "label",
                "type": "string",
                "default": "n/a",
                "description": "Set the readable text on the cdr-accordion-item button or trigger. Required."
              },
              {
                "name": "show",
                "type": "boolean",
                "default": "false",
                "description": "Set a single cdr-accordion-item to display open by default. Prop showAll will take precedence, if true."
              }
            ],
            "slots": [
              {
                "name": "default",
                "description": "Default slot for cdr-accordion-item content."
              }
            ],
            "events": [
              {
                  "name": "accordion-item-toggle",
                  "arguments": "isOpen, event",
                  "description": "$emit event fired on cdr-accordion-item toggle"
              }
            ]
          }
        }
      ],
      "version": "0.1.0"
    }
  ],
}
---

<cdr-doc-tabs>

<template slot="Overview">
<cdr-doc-table-of-contents-shell>

## Default

Section borders expand to full width of container.

<cdr-doc-example-code-pair repository-href="https://github.com/rei/rei-cedar/tree/18.08.1/src/components/accordion" sandbox-href="https://codesandbox.io/s/m9jm5rw1zx">

```html
  <cdr-accordion>
    <cdr-accordion-item
      id="default-1"
      label="How do I find my member number?">
      <cdr-text tag="p">
          Find your member number online. You can also call 
          Customer Support at 1-800-426-4840 (U.S. and Canada) or 1-253-891-2500 (International).
      </cdr-text>
    </cdr-accordion-item>
    <cdr-accordion-item
      id="default-2"
      label="Does every member get an Annual Dividend?">
      <cdr-text tag="p">
          Only active REI Co-op members receive an Annual Dividend notice. To be an active 
          member, you need to make net merchandise or shipping purchases (purchases minus credits and returns) 
          of at least $10 per year, unless you joined during that calendar year.
      </cdr-text>
    </cdr-accordion-item>
    <cdr-accordion-item
      id="default-3"
      label="When does my dividend expire?">
      <cdr-text tag="p">
          Your dividend expires on Jan. 3, just under two years after it has been issued. 
          or example, your 2018 dividend earned on 2017 purchases will expire in January 2020.
      </cdr-text>
    </cdr-accordion-item>
  </cdr-accordion>
```

</cdr-doc-example-code-pair>

## Compact

Reduced spacing around title and content body. Also, smaller font sizes resulting in an overall denser display of content.

<cdr-doc-example-code-pair repository-href="https://github.com/rei/rei-cedar/tree/18.08.1/src/components/accordion" sandbox-href="https://codesandbox.io/s/m9jm5rw1zx">

```html
  <cdr-accordion :compact="true">
    <cdr-accordion-item
      id="compact-1"
      label="Why buy used gear?"
    >
      <cdr-text tag="p">
        Used Gear Beta is one way we are experimenting expanding opportunities 
        to enjoy life outdoors and bringing value to our members.
      </cdr-text>
    </cdr-accordion-item>
    <cdr-accordion-item
      id="compact-2"
      label="What's your cancellation policy?"
    >
      <cdr-text tag="p">
        Orders may be cancelled within 30 minutes of placing your order online. 
        After 30 minutes, your order will begin processing through our fulfillment center and cannot be cancelled.
      </cdr-text>
    </cdr-accordion-item>
    <cdr-accordion-item
      id="compact-3"
      label="When will my order arrive?"
    >
      <cdr-text tag="p">
        REI Co-op Used Gear Beta orders can take up to 3-4 business days to ship out. When your order ships, 
        we'll send you a shipping confirmation email that contains your tracking information. Shipping time is generally 3-5 business days.
      </cdr-text>
    </cdr-accordion-item>
  </cdr-accordion>
```

</cdr-doc-example-code-pair>

## Border Aligned

Border aligns to the title text and expand/collapse icon.

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.08.1/src/components/accordion" sandbox-href="https://codesandbox.io/s/m9jm5rw1zx">

```html
  <cdr-accordion :border-aligned="true">
    <cdr-accordion-item
      id="border-aligned-1"
      label="How long have you been in business?"
    >
      <cdr-text tag="p">
        REI has offered the finest in outdoor gear since 1938. In that same spirit, 
        REI Adventures has led the way down wilderness paths and cultural back roads 
        to the most intriguing destinations in the world since 1987.
      </cdr-text>
    </cdr-accordion-item>
    <cdr-accordion-item
      id="border-aligned-2"
      label="What kinds of trips are offered?"
    >
      <cdr-text tag="p">
        We have adventures that range from weekend getaways to three-week treks. We 
        explore the world on foot, by kayak, canoe or raft, bicycle, safari, 4-wheel 
        drive, cruise ship or a combination of these vehicles! Novices are welcome. 
        We can teach you to kayak or to safely summit a mountain.
      </cdr-text>
    </cdr-accordion-item>
    <cdr-accordion-item
      id="border-aligned-3"
      label="How do I know what each trip is like?"
    >
      <cdr-text tag="p">
        This website provides full details of each trip. If you still have questions, 
        please call us at 1-800-622-2236 or e-mail us at travel@rei.com.
      </cdr-text>
    </cdr-accordion-item>
  </cdr-accordion>
```

</cdr-doc-example-code-pair>

</cdr-doc-table-of-contents-shell>
</template>

<template slot="Design Guidelines">
<cdr-doc-table-of-contents-shell>

## Use when

- Providing users more content within the same layout
- Displaying content that's directly related, or supplemental, to the main subject of the page
- Designing with limited vertical space and there is enough content to condense

## Don't use when

- Linking a title to another page. Instead, use [Link](/components/link/)
- Designing with sparse content. Instead, use [List](/components/list/) or [Paragraph](/components/paragraph/)
- Content is lengthy. Instead, use Tabs

## Foundations

- Always include a title, icon and subsequent content for each section. All are required
- Use on either light or dark backgrounds, background color is provided for use on both
- Never nest accordions within themselves

## Content

- Order the accordion titles by priority and importance
- Keep titles short to avoid wrapping at smaller viewports
- Use sentence case for titles

## Behavior

- Entire title area is clickable, including icon and background.
- Accordion sections are all closed by default, however it is possible to:
  - Open all accordion sections when page is displayed
  - Open a single accordion section with remaining accordion section closed
- Multiple sections can be open at the same time
- Sections do not automatically collapse when another is expanded
- Position interactive elements (i.e. Select, Button, Link) within the container far enough from the title area to avoid accidental collapsing

Never nest accordions within themselves

<do-dont :examples="$page.frontmatter.nesting" />

Use short titles for accordion labels to avoid wrapping

<do-dont :examples="$page.frontmatter.titles" />

## Responsiveness

- Accordion style can change variant based on breakpoint. Example: _Default_ at MD/LG, _Compact_ and _Border-Aligned_ at XS/SM
- Switching between tab component and accordion component is not supported in Cedar components library. Do not replace the accordion component with the tab component and different breakpoints

## Accessibility

To ensure that usage of this component complies with accessibility guidelines:

- Provide descriptive label for accordion header
- Be aware that embedding lengthy content in an accordion can be disorienting. When the accordion header expands, it can give the appearance of moving to another page

This component has compliance with WCAG accessibility guidelines:

- Providing keyboard interactions to:
  - Expand and collapse accordion headers
  - Navigate and reverse navigate through the accordion headers
- Generates ARIA tags for accessibility, specifically aria-controls, aria-expanded, and aria-hidden

## Related links
- [List](/components/list/)
- Tabs

</cdr-doc-table-of-contents-shell>
</template>

<template slot="API">
<cdr-doc-table-of-contents-shell>

Accordions are built from two components, `cdr-accordion` and `cdr-accordion-item`, which are meant to be used together.

## Props

### cdr-accordion
<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

### cdr-accordion-item
<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[1].api.props" />

## Slots

### cdr-accordion
<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />

### cdr-accordion-item
<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[1].api.slots" />

## Events

### cdr-accordion-item
<cdr-doc-api type="event" :api-data="$page.frontmatter.versions[0].components[1].api.events" />

## Installation

Resources are available within the [cdr-accordion package](https://www.npmjs.com/package/@rei/cdr-accordion);

<cdr-doc-api type="installation" />

- Component: `@rei/cdr-accordion`
- Component styles: `cdr-accordion.css`

To incorporate the required assets for a component, use the following steps:

### #1. Install using NPM

Install the `cdr-accordion` package using `npm` in your terminal:

_Terminal_

```bash
npm i -s @rei/cdr-accordion
```

### #2. Import Dependencies

_main.js_

```javascript
// import your required css
import "@rei/cdr-accordion/dist/cdr-accordion.css";
```

### #3. Add component to a template

_local.vue_

```vue
<template>
  <cdr-accordion>
    <cdr-accordion-item
      id="default-example"
      label="This is the label text"
    >
      This is the accordion content.
    </cdr-accordion-item>
  </cdr-accordion>
</template>

<script>
  import { CdrAccordion, CdrAccordionItem } from "@rei/cdr-accordion";

  export default {
    ...
    components: {
      CdrAccordion,
      CdrAccordionItem
    }
  }
</script>
```

## Usage

### Style

Use `cdr-accordion` to pass styling options to `cdr-accordion-item`.

```vue
<template>
  <cdr-accordion
    :compact="true"
  >
    <cdr-accordion-item
      id="item-1"
      label="Label text"
    >
      Accordion content here
    </cdr-accordion-item>
  </cdr-accordion>
</template>
```

### Behavior

Set `show-all` to `true` on `cdr-accordion`, and each `cdr-accordion-item` will display in an open state.

```vue
<template>
  <cdr-accordion
    :show-all="true"
  >
    <cdr-accordion-item
      id="item-1"
      label="Label text"
    >
      Accordion content here
    ...
```

`cdr-accordion-item` can also be controlled individually. If `show-all` is `false` at the `cdr-accordion` level, set `show` to `true` to display an individual accordion item in an open state. Note that `cdr-accordion` settings will take precedence over `cdr-accordion-item` settings.

```vue
<template>
  <cdr-accordion>
    <cdr-accordion-item
      id="item-1"
      label="Label text"
      :show="true"
    >
      Accordion content here
    ...
```

Any options set at the `cdr-accordion` level can be set on any parent component of `cdr-accordion-item` by using Vue's provide/inject functionality. This is useful, for instance, if `cdr-accordion-item` ever needs to be used as a part of another group component.


```vue
<template>
  ...
  <cdr-accordion-item
    id="item-1"
    label="Label text"
  >
    Accordion content here
  </cdr-accordion-item>
  ...
</template>

<script>
  export default {
    ...
    provide() {
      return {
        borderAligned: true,
        showAll: true
      };
    }
  }
</script>
```

## Accessibility

To ensure that usage of this component complies with accessability guidelines:
  - Provide a descriptive label for accordion header

This component has compliance with WCAG accessibility guidelines:
  - Providing keyboard interactions to:
    - Expand and collapse accordion headers
    - Navigate and reverse navigate through the accordion headers
  - Generate ARIA tags for accessibility, speciically `aria-controls`, `aria-expanded`, and `aria-hidden`

</cdr-doc-table-of-contents-shell>
</template>

<template slot="History">

## 1.0.0

### What's new

**CdrAccordion** component:

- Includes cdr-accordion and cdr-accordion-item components
- Toggles initial open state at group and individual level
- Supports compact and border-aligned styles

Git commit reference ([cc998a4](https://github.com/rei/rei-cedar/commit/cc998a4f7a4a0278a86c35063ba6615196a46ba2))

</template>

</cdr-doc-tabs>