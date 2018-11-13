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
      "image": "data-tables/table_sizecharts_do_4-3.png",
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
  "exampleTableData": {
    "colHeaders": ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    "rowHeaders": ["Chest", "Sleeve Length", "Waist", "Hip", "Inseam"],
    "rowData": [
      {
        "xs": "31.5 - 33",
        "s": "35 - 38",
        "m": "38 - 41",
        "l": "42 - 45",
        "xl": "46 - 49",
        "xxl": "50 - 53",
        "xxxl": "54-57"
      },
      {
        "s": "33",
        "m": "34",
        "l": "35",
        "xl": "35.5",
        "xxl": "36",
        "xxxl": "36.6",
        "xs": "N/A"
      },
      {
        "xs": "26.5 - 27.5",
        "s": "28 - 30",
        "m": "32 - 34",
        "l": "36 - 38",
        "xl": "40 - 42",
        "xxl": "44 - 46",
        "xxxl": "48 - 50"
      },
      {
        "xs": "N/A",
        "s": "35 - 37",
        "m": "38 - 40",
        "l": "41 - 43",
        "xl": "44 - 46",
        "xxl": "47 - 49",
        "xxxl": "51 - 54"
      },
      {
        "xs": "31",
        "s": "32",
        "m": "32",
        "l": "32",
        "xl": "32",
        "xxl": "32",
        "xxxl": "32"
      }
    ]
  },
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
                "name": "tbody",
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

## Default

Basic layout with a column of row headers.  Rows alternate background colors.

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.07.2/src/components/button" sandbox-href="https://codesandbox.io/s/62z9rk34rr" >

```html
  <cdr-data-table
    :row-headers="$page.frontmatter.exampleTableData.rowHeaders"
    :row-data="$page.frontmatter.exampleTableData.rowData"
    :key-order="['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl']"
    id="default-example"
  />
```

</cdr-doc-example-code-pair>

## Column Headers

Layout for making comparisons such as between size/sleeve length. Column headers and row headers are displayed. When columns scroll, row header column is locked in place.

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.07.2/src/components/button" sandbox-href="https://codesandbox.io/s/62z9rk34rr">

```html
  <cdr-data-table
    :col-headers="$page.frontmatter.exampleTableData.colHeaders"
    :row-headers="$page.frontmatter.exampleTableData.rowHeaders"
    :row-data="$page.frontmatter.exampleTableData.rowData"
    :key-order="['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl']"
    id="col-headers-example"
  />
```

</cdr-doc-example-code-pair>

## Compact and Borderless

Layout with reduced spacing within each cell. All cells are borderless. Defines a column of row headers. 

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.07.2/src/components/button" sandbox-href="https://codesandbox.io/s/62z9rk34rr">

```html
  <cdr-data-table modifier="compact borderless" id="manual-example">
    <template slot="tbody">
      <tr>
        <th>Best Use</th>
        <td>Casual</td>
      </tr>
      <tr>
        <th>Fabric</th>
        <td>Cotton canvas</td>
      </tr>
      <tr>
        <th>Lining Fabric</th>
        <td>Polyester microfleece/nylon</td>
      </tr>
      <tr>
        <th>Hood</th>
        <td>No</td>
      </tr>
      <tr>
        <th>Black Length</th>
        <td>Hip-length</td>
      </tr>
      <tr>
        <th>Weight</th>
        <td>Unavailable</td>
      </tr>
      <tr>
        <th>Gender</th>
        <td>Men's</td>
      </tr>
      <tr>
        <th>Number</th>
        <td>25</td>
      </tr>
    </template>
  </cdr-data-table>
```

</cdr-doc-example-code-pair>

## Accessibility

To ensure that usage of this component complies with accessibility guidelines and screen readers can correctly read data:

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

Data Tables are responsive when there are more than 2 columns:
- Whenever the number of columns overflows the container, content will scroll
- If row headers are defined, then the first column of headers will lock in place

For Data Tables with 2 columns:
- Content will not scroll
- Text within table cells will wrap to fit the smaller container (or viewport)

</cdr-doc-table-of-contents-shell>
</template>



<template slot="API">
<cdr-doc-table-of-contents-shell>

## Props

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

## Slots

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />

## Installation

Resources are available within the [CdrDataTable package:](https://www.npmjs.com/search?q=cdr-data-table)

<cdr-doc-api type="installation" />

- Component: `@rei/cdr-data-table`
- Component styles: `cdr-data-table.css`

<br />

To incorporate the required assets for a component, use the following steps:

### 1. Install using NPM

Install the CdrButton package using `npm` in your terminal:

_Terminal_

```bash
npm i -S @rei/cdr-data-table
```

### 2. Import dependencies

_main.js_

```javascript
// import your required CSS.
import "@rei/cdr-data-table/dist/cdr-data-table.css";
```

### 3. Add component to a template

_local.vue_

```vue
<template>
  <cdr-table
    id="size-details"
    :col-headers="colHeaders"
    :row-headers="rowHeaders"
    :row-data="rowData"
    :key-order="keyOrder"
  />
</template>

<script>
import { CdrTable } from '@rei/cdr-table';
export default {
  ...
  components: {
     CdrTable  
  }, 
  data() {
    ...
  },
}
</script>
```

## Usage

### Using Props

The simplest way to use CdrDataTable is using the props API. The below example shows how:
- The data props (`colHeaders`, `rowHeaders`, `rowData`) are used
- `keyOrder` determines values displayed in each cell. The array order must match the `colHeaders` or column order

```vue
<template>
  <cdr-data-table
    id="props-example"
    :col-headers="colHeaders"
    :row-headers="rowHeaders"
    :row-data="rowData"
    :key-order="keyOrder"
    caption="CdrTable props usage"
  />
</template>

<script>
  ...
  data() {
    colHeaders: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    rowHeaders: ['Chest', 'Sleeve Length', 'Waist', 'Hip', 'Inseam'],
    keyOrder: ['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl'],
    rowData: [
      {
        xs: '31.5 - 33',
        s: '35 - 38',
        m: '38 - 41',
        l: '42 - 45',
        xl: '46 - 49',
        xxl: '50 - 53',
        xxxl: '54-57',
      },
      {
        s: '33',
        m: '34',
        l: '35',
        xl: '35.5',
        xxl: '36',
        xxxl: '36.6',
        xs: 'N/A',
      },
      ...
    ],
  },
}
</script>
```

### Using Slots

The same table can be rendered using the `v-for` Vue directive and CdrDataTable's named slots:
- Iterates over the data set by looping through items in an array or object
- Generates appropriate markup for each named slot

In the below examples, the `colHeaders` prop is set to true because there are column headers for the data table.

```vue{4}
<template>
  <cdr-data-table
    id="slots-example"
    :col-headers="true"
    caption="CdrTable slots usage"
  >
    <template slot="thead">
       <tr>
         <th
           class="empty"
           scope="col"
         />
         <th
           v-for="(header, index) in tableData.colHeaders"
           :key="index"
         >
           {{ header }}
         </th>
       </tr>
     </template>
     <template slot="tbody">
       <tr
         v-for="(row, index) in tableData.rowData"
         :key="'tr_' + index"
       >
         <th
           scope="row"
         >{{ tableData.rowHeaders[index] }}</th>
         <td
           v-for="(key, index) in ['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl']"
           :key="index"
         >{{ row[key] }}
         </td>
       </tr>
     </template>
  </cdr-data-table>
</template>

<script>
  ...
  data() {
    ...
 ],
  },
}
</script>
```

The below example uses:
- `compact` and `borderless` modifiers
- CdrDataTable's named slots
- Markup is manual, not data-driven

```vue
<cdr-data-table
  modifier="compact borderless"
  caption="Full Manual - Compact & Borderless"
  id="full-manual"
>
  <template slot="tbody">
    <tr>
      <th scope=”row”>Best Use</th>
      <td>Casual</td>
    </tr>
    <tr>
      <th scope=”row”>Fabric</th>
      <td>Cotton canvas</td>
    </tr>
    <tr>
      <th scope=”row”>Lining Fabric</th>
      <td>Polyester microfleece/nylon</td>
    </tr>
    ...
  </template>
</cdr-data-table>
```

### Modifiers

Following variants are available to the `cdr-data-table` modifier attribute:

| Value        | Description          |
|--------------|----------------------|
| `compact`    | Reduces cell padding |
| `borderless` | Removes cell borders |

</cdr-doc-table-of-contents-shell>
</template>

<template slot="History">

## 1.0.0

- Supports size chart and technical specs table designs
- Responsive scroll behavior by default
- Supports accessible table captions
- Git commit reference [(3169234)](https://github.com/rei/rei-cedar/commit/3169234cb99b8fc750efd2e3d5813e19c10f8e71)

</template>
</cdr-doc-tabs>
