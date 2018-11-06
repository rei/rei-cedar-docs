---
{
  "title": "Data Tables",
  "layout": "LayoutComponent",
  "summary": "Organizes structured content so that it is easy to scan, make comparisons, and analyze the data",
  "title_metadata": "CdrDataTable",
  "tablelayout": [
    {
      "type": "do",
      "image": "data-tables/table_layout_do_4-3.png",
      "ratio": "4-3",
      "alt": "Image showing size chart",
      "caption": "use Data Tables to render size charts."
    },
    {
      "type": "dont",
      "image": "data-tables/table_layout_dont_4-3.png",
      "ratio": "4-3",
      "alt": "Image showing layout",
      "caption": "use Data Tables as a layout tool, including inserting images into tables."
    }
  ],
  "sizechart": [
    {
      "type": "do",
      "image": "data-tables/table_sizechars_do_4-3.png",
      "ratio": "4-3",
      "alt": "Image showing size chart",
      "caption": "use Data Tables to render size charts."
    },
    {
      "type": "dont",
      "image": "data-tables/table_sizecharts_dont_4-3.png",
      "ratio": "4-3",
      "alt": "Image showing links in table cells",
      "caption": "use Data Tables - version 1 for interactive experiences, including links in cells."
    }
  ],
  "techspecs": [
    {
      "type": "do",
      "image": "data-tables/table_techspecs_do_4-3.png",
      "ratio": "4-3",
      "alt": "Image showing technical specs table",
      "caption": "use Data Tables to render technical specs."
    },
    {
      "type": "dont",
      "image": "data-tables/table_techspecs_dont_4-3.png",
      "ratio": "4-3",
      "alt": "Image showing large table cells full of data",
      "caption": "use Data Tables - version 1 for large amounts of data."
    }
  ],
  "label": [
    {
      "type": "do",
      "image": "data-tables/table_label_do_4-3.png",
      "ratio": "4-3",
      "alt": "Image showing size chart with column and row headers",
      "caption": "label information with row header or column header titles, when appropriate."
    },
    {
      "type": "dont",
      "image": "data-tables/table_label_dont_4-3.png",
      "ratio": "4-3",
      "alt": "Image showing table data without column or row headers",
      "caption": "provide unlabeled data to the user."
    }
  ],
  "alternatestripe": [
    {
      "type": "do",
      "image": "data-tables/table_alternatestripe_do_4-3.png",
      "ratio": "4-3",
      "alt": "Image showing table with default alternating row background colors",
      "caption": "use standard table styles with alternate row background colors."
    },
    {
      "type": "dont",
      "image": "data-tables/table_alternatestripe_dont_4-3.png",
      "ratio": "4-3",
      "alt": "Image showing table with default styles removed",
      "caption": "override table styles with all-white row background colors."
    }
  ],
  "breadcrumbs": [
    {
      "text": "Components/"
    }
  ],
  "versions": [
    {
      "version": "1.0.0",
      "components": [
        {
          "name": "CdrDataTable",
          "api": {
            "props": [
              {
                "name": "id",
                "type": "string",
                "default": "n/a",
                "description": "Sets unique id on <table> element."
              },
              {
                "name": "colHeaders",
                "type": "array/boolean",
                "default": "false",
                "description": "The colHeaders prop accepts an array of column header strings or a boolean value. Renders in the `thead’ slot. If the value is false, column heads are not displayed. For example, possible values are:  [ ‘Column Header 1’, ‘Column Header 2’, ... ]"
              },
              {
                "name": "rowHeaders",
                "type": "array/boolean",
                "default": "false",
                "description": "The rowHeaders prop accepts an array of row header strings or a boolean value. Renders in the ‘tbody’ slot. If the value is false, row heads are not displayed.  For example, possible values are:  [ ‘Row Header 1’, ‘Row Header 2’, ... ]"
              },
              {
                "name": "rowData",
                "type": "array",
                "default": "[]",
                "description": "Sets an array of objects representing each row in the table."
              },
              {
                "name": "keyOrder",
                "type": "array",
                "default": "[]",
                "description": "Determines the order of cell content in a row."
              },
              {
                "name": "caption",
                "type": "string",
                "default": "n/a",
                "description": "Sets the caption text for the table"
              }                       
            ],
            "slots": [
              {
                "name": "thead",
                "description": "Sets the innerHTML for the thead element. Includes default slot content."
              },
              {
                "name": "icon",
                "description": "Sets the innerHTML for the tbody element. Includes default slot content."
              }
            ],
            "installation": [
              {
                "name": "@rei/cdr-data-table",
                "type": "Node module package",
                "description": "Import the component into your project"
              },
              {
                "name": "cdr-data-table.css",
                "type": "Style sheet",
                "description": "Component specific styles"
              }
            ]
          }
        }
      ]
    }
  ]
}
---

<cdr-doc-tabs>
<template slot="Overview">
<cdr-doc-table-of-contents-shell tab-name="Overview">

## Primary

## Accessibility

To ensure that usage of this component complies with accessibility guidelines and screen readers can correctly read the data:

- Table caption should be included
- Row headers and column headers should be defined
- Table headers should never be empty
  - Inlcuding the top-left cell of the data table
  - If needed, use `cdr-sr-only` to hide descriptive text that explains the content for the first column
- Set the scope attribute to `row` or `col` to indicate that a header applies to the entire row or column

<br />

This component has compliance with WCAG guidelines by:
  - Providing `<caption>` element for data tables
  - Providing `<th>` element for row or column headers

</cdr-doc-table-of-contents-shell>
</template>

<template slot="Design Guidelines">
  <cdr-doc-table-of-contents-shell>

These are guidelines for when and how to use the Data Table component.

## Use When

- Presenting multiple metrics and categories together
- Displaying tabular data for users to compare

### Don't use when

- Positioning contents on page. Instead, use [Grid](../grid/)
- Laying out a page design. Instead, use [Grid](../grid/)

## Foundations

Default styles for tables are:
- All cells have a 1px border
- Column headers have a 2px bottom border
- Row headers have a 2px right border. When columns can scroll, the border is 4px
- Rows alternate background colors to improve readability
- Scrollbars will be native and dictated by the browser
- Options available:
  - Compact only
  - Borderless only. If using borderless, ensure readability by using the alternating background colors for rows
  - Compact and borderless

## Content

All tables need a table caption or brief description that indicates the table's content.

Table headers:
  - Row headers are required
  - Column headers are optional
  - Use title case for header titles

<br />

Data cells:
  - Copy should be short and concise
  - Use sentence case for cell data
  - Text, numerical data, links, buttons, or icons are acceptable

## Behavior

### Text Alignment

Alignment impacts the table's readability. Make the data easy to read and simple to follow by:
- Left-align is the default
- Use the same number of decimal places

### Table Widths

- Minimum cell width is 127px
- Maximum cell width is 150px
- Text will wrap to another line, if needed

### Do/Don't

<do-dont :examples="$page.frontmatter.tablelayout" />

<br />

<do-dont :examples="$page.frontmatter.sizechart" />

<br />

<do-dont :examples="$page.frontmatter.techspecs" />

<br />

<do-dont :examples="$page.frontmatter.label" />

<br />

<do-dont :examples="$page.frontmatter.alternatestripe" />

## Responsiveness

Table will change its scroll functions depending on viewport size.

Default:
- Anything over two columns

</cdr-doc-table-of-contents-shell>
</template>

<template slot="API">
<cdr-doc-table-of-contents-shell>

## Props

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

## Slots

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />

## Installation

Resources are available within the [CdrButton package:](https://www.npmjs.com/search?q=cdr-button)

<cdr-doc-api type="installation" />

- Component: `@rei/cdr-button`
- Component styles: `cdr-button.css`

<br />

To incorporate the required assets for a component, use the following steps:

### 1. Install using NPM

Install the CdrButton package using `npm` in your terminal:

_Terminal_

```bash
npm i -S @rei/cdr-button
```

### 2. Import dependencies

_main.js_

```javascript
// import your required CSS.
import "@rei/cdr-link/dist/cdr-button.css";
```

### 3. Add component to a template

In this example we’ll create a medium-sized primary button, which is the default.

_local.vue_

```vue
<template>
  <cdr-button
    type="button"
  >
    Add to cart
  </cdr-button>
</template>

<script>
import { CdrButton } from '@rei/cdr-button';
export default {
  ...
  components: {
     CdrButton  
  }
}
</script>
```

## Usage

### Size, responsive size, and full-width sizing props

The below example uses both the `size` and `responsive-size` props. This button’s size is small, but it will become a large button at the `xs` and `sm` breakpoints.

```vue
<template>
  <cdr-button
    size="small"
    :responsive-size="[‘large@xs’, ‘large@sm’]"
  >
    Add to cart
  </cdr-button>
</template>
```

### Modifiers

Following variants are available to the `cdr-button` modifier attribute:

| Value | Description            |
|:------|:-----------------------|
| 'secondary' | Sets the secondary style for the button |


### Click Actions

Use the `on-click` prop to attach custom actions and event handling.

```vue
<template>
  <cdr-button
    :on-click="greet"
  >
    Greet
  </cdr-button>
</template>

<script>
export default {
  ...
  methods: {
    greet() {
      console.log(‘Hello there’);
    }
  }
}
</script>
```

## Composing with icons

CdrButton component can be used with the icon component from the CdrIcon package.

### Text and Icon

To scale Cedar icons appropriately, include the `cdr-button__icon` class with any icon component. The `size` prop scales both the icon and button.

In the below example, a _Download_ button is rendered as a button with icon and text using `cdr-icon` and the icon sprite.

```vue
<template>
  <cdr-button>
    <cdr-icon
      slot="icon"
      class="cdr-button__icon"
      use="#download"
    />
    Download
  </cdr-button>
</template>

<script>
import { CdrButton } from '@rei/cdr-button';
import { CdrIcon } from '@rei/cdr-icon;
export default {
  ...
  components: {
     CdrButton,
     CdrIcon,  
  }
}
</script>
```

### Icon Only

Use the following props to modify `cdr-button`:

- Default slot must be empty. If text is present in default slot, the text will render  
- `size` prop is disable when `icon-only` prop is true
- For the SVG files:
  - If the `fill` color is dark, assign true to the `on-dark` prop
  - `on-dark` prop only works if `icon-only` prop is also true
- Add `aria-label` text to describe the button’s action when clicked or tapped

```vue
<template>
  <cdr-button
    :icon-only="true"
    :on-dark="true"
    aria-label="Complete this step"
  >
    <icon-check-lg
      slot="icon"
      class="cdr-button__icon"
    />
  </cdr-button>
</template>
```


### CdrCloseButton & CdrPlayButton

The CdrButton package includes two specific icon-only variants. CdrCloseButton and CdrPlayButton include their respective icons and `aria-label` text for accessibility.

```vue
<template>
  <cdr-close-button />
</template>

<script>
import { CdrCloseButton } from '@rei/cdr-button';

export default {
  ...
  components: {
     CdrCloseButton  
  }
}
</script>
```

</cdr-doc-table-of-contents-shell>
</template>

<template slot="History">

## 1.0.0

- Renders using an anchor or button element
- Includes secondary button style
- Supports small, medium, large, responsive, and full-width sizes
- Works with `cdr-icon` for icons in buttons and icon-only buttons
- CdrButton package includes `cdr-close-button` and `cdr-play-button` components
- Git commit reference [(1531860)](https://github.com/rei/rei-cedar/pull/436/commits/15318606570811a6d53549a5335e0943a3463971)

</template>
</cdr-doc-tabs>
