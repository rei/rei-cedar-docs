---
{
  "title": "Accordion",
  "layout": "LayoutComponent",
  "summary": "Vertically-stacked list that allows users to expand and collapse additional content. I assume this will be edited to be a proper sentence.",
  "title_metadata": "Why is this text here?",
  "breadcrumbs": [
    {
      "text": "Components/",
      "href": "#"
    }
  ],
  "name": "CdrAccordion",
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
                "description": "innerHTML on the inside of the accordion component"
              }
            ]
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

<template slot="API">
<cdr-doc-table-of-contents-shell>

Accordions are built from two components, `cdr-accordion` and `cdr-accordion-item`, which are meant to be used together.

## Properties

### cdr-accordion
<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

### cdr-accordion-item
<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[1].api.props" />

## Slots

#### cdr-accordion
<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />

#### cdr-accordion-item
<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[1].api.slots" />

## Installation

Resources are available within the [cdr-accordion package](https://www.npmjs.com/package/@rei/cdr-accordion);

<cdr-doc-api type="installation" />

- Component: `@rei/cdr-accordion`
- Component styles: `cdr-link.css`

To incorporate the required assets for a component, use the following steps:

### #1. Install using NPM

Install the `cdr-accordion` package using `npm` in your terminal:

_Terminal_

```terminal
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
  - Generate ARIA tags for accessibility, speciically aria-controls, aria-expanded, and aria-hidden

</cdr-doc-table-of-contents-shell>
</template>

<template slot="History">

## 1.0.0

### What's new

**CdrAccordion** component:

- Includes cdr-accordion and cdr-accordion-item components
- Toggles initial open state at group and individual level
- Supports compact and border-aligned styles

Git commit reference ([05adb80](https://github.com/rei/rei-cedar/commit/05adb8018e5c37cee764700c69c02d5281785f58))

</template>

</cdr-doc-tabs>