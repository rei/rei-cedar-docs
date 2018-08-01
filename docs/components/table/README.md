---
{
    "title": "Data Table",
    "layout": "LayoutComponent",
    "summary": "Permits user to create tables with data fed in or through custom markup",
    "title_metadata": "Table, CdrTable",
    "breadcrumbs": [
        {
        "text": "Components/",
        "href": "#"
    }]
}
---

<cdr-doc-tabs>
<template slot="Overview">
<cdr-doc-table-of-contents-shell tab-name="Overview">

## Default

</cdr-doc-table-of-contents-shell>
</template>

<template slot="Design Guidelines">
  <cdr-doc-table-of-contents-shell
    tab-name="Design Guidelines"
    :appended-nav-items="[
      {
        text: 'Related Components'
      },
      {
        text: 'List Group',
        href: '/components/list'
      },
      {
        text: 'Radio buttons',
        href: '/components/radio'
      }
    ]">
    <cdr-doc-alert/>

## Use When

### Don't use when

## Content


## Behavior

## Accessibility

For more information, review techniques and failures for:

 - [WCAG 2.0,  1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)
 - [WCAG 2.0,  3.3.2 Labels and Instructions](https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html)

## Resources

 - [CDS UI Toolkit](/getting-started/as-a-designer/)
 - WebAIM: [Keyboard Accessibility](https://webaim.org/techniques/keyboard/)

  </cdr-doc-table-of-contents-shell>
</template>

<template slot="API">
<cdr-doc-table-of-contents-shell>

## Props

## Slots

## Events

## Modifiers

Following are modifiers for `cdrTable` component:

- compact
- borderless

## Installation

Resources are available within the [cdr-table package:](https://www.npmjs.com/search?q=cdr-table)

- Component: `@rei/cdr-table`
- Component styles: `cdr-table.css`

To incorporate the required assets for a component, use the following steps:

### 1. Install using NPM

Install the `cdr-table` package using `npm` in your terminal:

_Terminal_

```terminal
    npm i -s @rei/cdr-table
```

### 2. Import dependencies

_main.js_

```javascript
// import your required css.
import "@rei/cdr-table/dist/cdr-table.css";
```

### 3. Add component to a template

_local.vue_
```vue
<template>
  <cdr-table
      :records="bookRecords"
      :headers="bookHeaders"
      :row-headers="true"/>
</template>
<script>
import { CdrTable } from '@rei/cdr-table';
export default {
  components: { CdrTable },
  data() {
    return {
      bookHeaders: ['Title','Year','Author'],
      bookRecords: [
        {
          title: 'Book A',
          year: 1823,
          author: 'Mikey',
          rowheader: 'row 1',
        },
        {
          title: 'Book C',
          year: 1532,
          author: 'Joey',
          rowheader: 'row 2',
        },
        {
          title: 'Book E',
          year: 1253,
          author: 'Scotty',
          rowheader: 'row 3',
        },
      ],
    };
  },
};
</script>
```
## Usage



## Accessibility

- 


</cdr-doc-table-of-contents-shell>
</template>

<template slot="History">

## 1.0.0

- Supports tables created by custom HTML markup or feeding in data
- Removes tables borders with `borderless` modifier
- Makes table spacing more compact with `compact` modifier

</template>
</cdr-doc-tabs>
