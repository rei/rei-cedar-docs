---
{
  "title": "CSS Grid",
  "layout_type": "LayoutComponent",
  "summary": "Wrapper for working with CSS Grid",
  "title_metadata": "CdrGrid",
  "component_location": "https://github.com/rei/rei-cedar/tree/next/src/components/grid",
  "breadcrumbs": [
    {
      "text": "Components/"
    }
  ],
  "consistent": [
    {
      "type": "do",
      "image": "grid/grid_consistent_do_16-9.png",
      "alt": "A grid with a consistent system.",
      "caption": "maintain a consistent grid system."
    },
    {
      "type": "dont",
      "image": "grid/grid_consistent_dont_16-9.png",
      "alt": "A grid inconsistently mixed with other grid systems",
      "caption": "mix this grid and other grid systems."
    },
  ],
  "margins": [
    {
      "type": "do",
      "image": "grid/grid_margins_do_16-9.png",
      "alt": "Grid with consistent global margins.",
      "caption": "maintain global margins."
    },
    {
      "type": "dont",
      "image": "grid/grid_margins_dont_16-9.png",
      "alt": "Grid with overly large side margins.",
      "caption": "make margins too large."
    },
  ],
  "gutters": [
    {
      "type": "do",
      "image": "grid/grid_gutters_do_16-9.png",
      "alt": "Grid with appropriately maintained gutters.",
      "caption": "maintain global gutters."
    },
    {
      "type": "dont",
      "image": "grid/grid_gutters_dont_16-9.png",
      "alt": "Grid with overly large gutters.",
      "caption": "make gutters too large."
    },
  ],
  "sandboxData": {
    "components": "CdrGrid",
    "styleTag": ".grid-2-example div { border: 1px solid lightblue;}"
  },

  "versions": [
    {
      "components": [
        {
          "name": "CdrGrid",
          "api": {
            "props": [
              {
                "name": "gutter",
                "type": "string",
                "default": "N/A",
                "description": "Defines gutter size. Default gutter size is 16px for @xs and @sm (medium) and 32px for @md and @lg (large). Possible values: {  ‘none’  |  ‘small’ | 'medium' | 'large' }. Also accepts responsive values @breakpoint:  none@md’."
              },
              {
                "name": "tag",
                "type": "string",
                "default": "div",
                "description": "Sets the tag type for the CdrGrid element. Accepts any HTML tag name that can function using `display: grid`. Useful for constructing list based layouts."
              }
            ],
            "slots": [
              {
                "name": "default",
                "description": "Slot for CdrGrid content."
              }
            ]
          }
        }
      ]
    }
  ]
}
---

<cdr-doc-table-of-contents-shell parentSelector="h2" childSelector="h3">

## Overview

CdrGrid is a simple wrapper for working with CSS Grid. Any valid CSS Grid properties can be applied to a CdrGrid or it's grid items, allowing for more flexible layouts to be built using less markup and CSS classes.

CdrGrid applies a default responsive gutter which can be customized using the `gutter` prop or overridden completely using CSS. The examples on this page are meant to illustrate some basic usage of CSS grid but are by no means exhaustive. Note that when constructing page layouts your entire page should be wrapped in a single [cdr-container](../../foundation/responsive) to ensure the proper outer margins are maintained.


New to or unfamiliar with CSS Grid? We recommend these resources for getting up to speed with CSS Grid:

- [CSS Tricks guide](https://css-tricks.com/snippets/css/complete-guide-grid) for a handy glossary of examples for each CSS Grid related property.
- [Wes Bos CSS Grid Course](https://cssgrid.io/) has videos and interactive grid examples you can work through.
- [MDN CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) has many articles going in depth on CSS Grid features.



### Column Layout

Use rows and columns to lay out content by specifying equal widths for all columns.
Columns have a minimum width, if columns cannot be spaced equally etc. new line

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" >

```html

  <cdr-grid class="grid-2-example" style="grid-template-columns: repeat(12, 1fr);">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>10</div>
    <div>11</div>
    <div>12</div>
  </cdr-grid>

```

</cdr-doc-example-code-pair>

### Justify

Define x-axis alignment and distribute space for all columns per row. Containers may have set widths or may be flexible with max widths defined. This applies to all columns with left as the default value.

#### Left

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" >

```html

  <cdr-grid class="grid-2-example" style="grid-template-columns: 1fr 1fr 1fr; justify-items: left;">
    <div>content</div>
    <div>content</div>
    <div>content</div>
  </cdr-grid>

```

</cdr-doc-example-code-pair>

#### Center

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" >

```html

  <cdr-grid class="grid-2-example" style="grid-template-columns: 1fr 1fr 1fr; justify-items: center;">
    <div>content</div>
    <div>content</div>
    <div>content</div>
  </cdr-grid>

```

</cdr-doc-example-code-pair>

#### Right

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" >

```html

  <cdr-grid class="grid-2-example" style="grid-template-columns: 1fr 1fr 1fr; justify-items: end;">
    <div>content</div>
    <div>content</div>
    <div>content</div>
  </cdr-grid>

```

</cdr-doc-example-code-pair>

#### Around

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" >

```html
  <cdr-grid class="grid-2-example" style="grid-template-columns: 75px 75px 75px; justify-content: space-around;">
    <div>content</div>
    <div>content</div>
    <div>content</div>
  </cdr-grid>
```

</cdr-doc-example-code-pair>

#### Between

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" >

```html

  <cdr-grid class="grid-2-example" style="grid-template-columns: 75px 75px 75px; justify-content: space-between;">
    <div>content</div>
    <div>content</div>
    <div>content</div>
  </cdr-grid>
```

</cdr-doc-example-code-pair>

### Align

Define y-axis alignment per row and distribute space across all columns per row. This applies to all columns with stretch as the default value.

#### Top

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" >

```html

  <cdr-grid class="grid-2-example" style="grid-template-columns: 1fr 1fr 1fr; align-content: start; height: 250px;">
    <div style="align-self: start;">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique quis quae excepturi odit fugit commodi, molestiae eaque architecto dignissimos.</div>
    <div style="align-self: start;">content</div>
    <div style="align-self: start;">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
  </cdr-grid>

```

</cdr-doc-example-code-pair>

#### Bottom

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" >

```html

  <cdr-grid class="grid-2-example" style="grid-template-columns: 1fr 1fr 1fr; align-content: end; height: 250px;">
    <div style="align-self: end;">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique quis quae excepturi odit fugit commodi, molestiae eaque architecto dignissimos.</div>
    <div style="align-self: end;">content</div>
    <div style="align-self: end;">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
  </cdr-grid>

```

</cdr-doc-example-code-pair>

#### Middle

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" >

```html

  <cdr-grid class="grid-2-example"  style="grid-template-columns: 1fr 1fr 1fr; align-content: center; height: 250px;">
    <div style="align-self: center;">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique quis quae excepturi odit fugit commodi, molestiae eaque architecto dignissimos.</div>
    <div style="align-self: center;">content</div>
    <div style="align-self: center;">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
  </cdr-grid>

```

</cdr-doc-example-code-pair>

#### Stretch

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" >

```html

<cdr-grid class="grid-2-example"  style="grid-template-columns: 1fr 1fr 1fr; align-content: stretch; height: 250px;">
  <div style="align-self: stretch;">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique quis quae excepturi odit fugit commodi, molestiae eaque architecto dignissimos.</div>
  <div style="align-self: stretch;">content</div>
  <div style="align-self: stretch;">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
</cdr-grid>

```

</cdr-doc-example-code-pair>


#### Varied Alignment

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" >

```html

  <cdr-grid class="grid-2-example" style="grid-template-columns: 1fr 1fr 1fr 1fr; height: 250px;">
    <div style="align-self: start">
      Top
    </div>
    <div style="align-self: center">
      Middle. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    </div>
    <div style="align-self: end">
      Bottom
    </div>
    <div style="align-self: stretch">
      Stretch
    </div>
  </cdr-grid>

```

</cdr-doc-example-code-pair>


### Gutter

Defines gutter size for all columns on a row and maintains gutter size by breakpoint. This applies to all columns. When this value is not set, default sizes are used.

#### Default

The default `gutter` value is `medium@xs medium@sm large@md large@lg`.

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" >

```html

  <cdr-grid class="grid-2-example" style="grid-template-columns: 1fr 1fr 1fr;">
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
  </cdr-grid>
```

</cdr-doc-example-code-pair>

#### Small

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" >

```html

  <cdr-grid class="grid-2-example" style="grid-template-columns: 1fr 1fr 1fr;" gutter="small">
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
  </cdr-grid>

```

</cdr-doc-example-code-pair>

#### None


<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" >

```html

  <cdr-grid class="grid-2-example" style="grid-template-columns: 1fr 1fr 1fr;" gutter="none">
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
  </cdr-grid>

```

</cdr-doc-example-code-pair>


#### Custom Responsive Gutters

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" >

```html

  <cdr-grid class="grid-2-example" style="grid-template-columns: 1fr 1fr 1fr;" gutter="none@xs small@sm medium@md large@lg">
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
  </cdr-grid>

```

</cdr-doc-example-code-pair>

### Scrolling Grid

Scrollable grids can be created using the `grid-auto-flow` property set to `column` for horizontal scrolling or `row` for vertical scrolling.

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" >

```html

  <cdr-grid class="grid-2-example" style="overflow: scroll; grid-template-columns: 1fr 1fr 1fr; grid-auto-flow: column;">
    <div>some normal content</div>
    <div>short content</div>
    <div>some content that is longer</div>
    <div>short content</div>
    <div>some content that is much much longer</div>
    <div>some more content ...</div>
    <div>some more content ...</div>
    <div>some more content ...</div>
    <div>some more content ...</div>
    <div>some more content ...</div>
    <div>some more content ...</div>
    <div>some more content ...</div>
    <div>some more content ...</div>
  </cdr-grid>

```

</cdr-doc-example-code-pair>


### List Markup

For accessibility reasons it may make sense to construct your grid using list markup.

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" >

```html

  <cdr-grid class="grid-2-example" tag="ul" style="overflow: scroll; grid-template-columns: 1fr 1fr;">
    <li>some normal content</li>
    <li>short content</li>
    <li>some content that is longer</li>
    <li>short content</li>
  </cdr-grid>

```

</cdr-doc-example-code-pair>

### Span

Column width can be controlled using the `grid-template-columns` property.

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" >

```html

  <cdr-grid class="grid-2-example" style="grid-template-columns: 1fr 2fr 4fr;">
    <div>1fr</div>
    <div>2fr</div>
    <div>4fr</div>
    <div>1fr</div>
    <div>2fr</div>
    <div>4fr</div>
  </cdr-grid>

```

</cdr-doc-example-code-pair>


### Complex Span

Individual items can override their sizing with `grid-column` and `grid-row`;

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" >

```html

  <cdr-grid class="grid-2-example" style="grid-template-columns: 1fr 1fr 1fr;">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div style="grid-column: span 2; grid-row: span 3;">4</div>
    <div>5</div>
    <div>6</div>
  </cdr-grid>

```

</cdr-doc-example-code-pair>


### Offset

Offsets can be created on grid items using the `grid-column-start` property.

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" >

```html

  <cdr-grid class="grid-2-example" style="grid-template-columns: 1fr 1fr 1fr;">
    <div style="grid-column-start: 2;">1</div>
    <div>2</div>
  </cdr-grid>

```

</cdr-doc-example-code-pair>

### Nested Grids

Grids can be nested to any depth by passing another CdrGrid in as a grid item.

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" >

```html

  <cdr-grid class="grid-2-example" style="grid-template-columns: 1fr 2fr;">
    <div>content</div>
    <cdr-grid style="grid-template-columns: 1fr 2fr;">
      <div>content</div>
      <div>content</div>
      <div>content</div>
    </cdr-grid>
  </cdr-grid>

```

</cdr-doc-example-code-pair>

### Responsive Grids

CSS grid layouts using `fr` units will be inherently responsive, however additional breakpoint-specific behaviors can be created using media queries.

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" >

```html
  <cdr-grid class="grid-2-example responsive-grid-example">
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
  </cdr-grid>
```

</cdr-doc-example-code-pair>

```
.responsive-grid-example {
  grid-template-columns: '1fr 1fr 1fr';
  @include cdr-md-mq-down {
    grid-template-columns: '1fr';
  }
}
```

### Handling Leftover Columns

For grid layouts with an unknown number of items you may end up with an incomplete row at the end. These "leftover" or "orphan" columns can be styled using a combination of the `last-child`/`nth-last-child` and `nth-child` selectors depending on how many items are in your grid row.

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" >

```html

  <cdr-grid class="grid-2-example orphan-grid-example-2x2" style="grid-template-columns: 1fr 1fr;">
    <div>content</div>
    <div>content</div>
    <div>content</div>
  </cdr-grid>

```

</cdr-doc-example-code-pair>

```
/* Target leftover grid columns */

.orphan-grid-example-2x2 div:last-child:nth-child(2n + 1) {
  grid-column: 1 / span 2;
}
```

For grid layouts with an odd number of columns per row, make the grid-template and grid-items each twice as large so they can be offset as needed to center them.

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" >

```html
<div>
  2 leftover columns:
  <cdr-grid class="grid-2-example orphan-grid-example-3x3" style="grid-template-columns: repeat(6, 1fr);">
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
  </cdr-grid>
  <hr/>
  1 leftover item:
  <cdr-grid class="grid-2-example orphan-grid-example-3x3" style="grid-template-columns: repeat(6, 1fr);">
    <div>content</div>
    <div>content</div>
    <div>content</div>
    <div>content</div>
  </cdr-grid>
</div>
```

</cdr-doc-example-code-pair>

```

/* Make grid columns take up twice as much space */
.orphan-grid-example-3x3 div { grid-column: span 2;}

/* If 2 columns are leftover, center them by moving the second to last element to the right by 1 */
.orphan-grid-example-3x3 div:nth-last-child(2):nth-child(3n + 1) {
  grid-column: 2 / span 2;
}

/* If 1 column is leftover, center it by moving it to the right by 2 */
.orphan-grid-example-3x3 div:last-child:nth-child(3n + 1) {
  grid-column: 3 / span 2;
}
```


### Named Grid Areas

Use `grid-template-areas` to layout grid items named using the `grid-area` property.

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" >

```html

  <cdr-grid class="grid-2-example" style="grid-template-areas: 'logo header header header' 'content content content sidebar' 'footer footer footer footer';">
    <div style="grid-area: logo;">logo</div>
    <div style="grid-area: header;">header</div>
    <div style="grid-area: content;">content</div>
    <div style="grid-area: sidebar;">sidebar</div>
    <div style="grid-area: footer;">footer</div>
  </cdr-grid>

```

</cdr-doc-example-code-pair>


### Accessibility

To ensure that usage of this component complies with accessibility guidelines:
- Low-vision users should be able to increase the size of the text by up to 200 percent without breaking the layout
- Ensure the tab order for grid content makes sense. Avoid re-ordering the placement of items to differ from their order in the markup.
- Use [list markup](#list-markup) for content layout. List markup allow contents to be structured which makes it easier for assistive technologies

<hr>

## Guidelines

### Use When

- Arranging content and components into rows and columns
- Laying out a page of 2+ rows of body content (apart from site navigation), some of which may or may not have columns
- Applying responsive rules to columns of a row and/or regions of a page layout, or a container of many components
- Arranging elements within a single component with two or more zones, including those aligned to the left or right edge

### Don't Use When

- Presenting a multi-row columnar data display, such as features or specs of a product. Instead, use [Table](../table/)

### The Basics

Columns, gutters, and margins scales as a fluid system as the device and viewport increases from a small devices to a large device:

<cdr-img class="cdr-doc-article-img" :src="$withBase('/grid/Spec_Grid_Desktop_and_Mobile.png')" alt="grid concept at desktop and mobile sizes"/>

<cdr-img class="cdr-doc-article-img" :src="$withBase('/grid/Spec_Grids_Breakpoints.png')" alt="grid breakpoints"/>

### Anatomy

<cdr-img class="cdr-doc-article-img" :src="$withBase('/grid/Spec_Grids_Gutters_and_Margins.png')" alt="gutter margins and grids"/>

<cdr-table striped>
  <tbody>
    <tr>
      <td>XS (Extra Small)</td>
      <td>< 768px</td>
      <td>16px</td>
      <td>16px</td>
    </tr>
    <tr>
      <td>SM (Small)</td>
      <td>≥ 768px</td>
      <td>16px</td>
      <td>16px</td>
    </tr>
    <tr>
      <td>MD (Medium)</td>
      <td>≥ 992px</td>
      <td>32px</td>
      <td>32px</td>
    </tr>
    <tr>
      <td>LG (Large)</td>
      <td>≥ 1232px</td>
      <td>32px</td>
      <td>32px</td>
    </tr>
  </tbody>
</cdr-table>

<br/>

### Content

- Prioritize your content by organizing content to highlight the most important information
- Use white space created by grid system because too much dense information can be disorienting and overwhelming

### Behavior

- Avoid breaking alignment or slightly oversizing a container to stick out for visual interest or to add emphasis
- Create relationships and hierarchy between content elements by using the margins and gutters in the grid shared by the page layout

### Do/Don't

<do-dont :examples="$page.frontmatter.consistent" />

<do-dont :examples="$page.frontmatter.margins" />

<do-dont :examples="$page.frontmatter.gutters" />

### Responsiveness

To build an effective responsive grid:

- Design mobile first:
    - Use the XS (≤ 768px) viewport width applicable to small devices like a phone
    - Start with a one column layout and add columns as needed
- Apply responsive media queries to the grid and its contained content at relevant breakpoints including SM (≥ 768px) and MD (≥ 998px)
- Complete and optimize the layout for the widest LG (≥ 1232px) viewport width
- Inspect responsive displays in between each breakpoint for how content responds across the fluid spectrum

<hr>

# API

<cdr-icon class="cdr-doc-code-snippet__action-icon" use="#brand-github"/> View it on Github: 
<cdr-link :href="$page.frontmatter.component_location">{{$page.frontmatter.component_location}}</cdr-link>

## Props

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

## Slots

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />

## Usage

**CdrGrid** functions as a grid container, and it's immediate children are grid items.

- Use any native CSS grid properties on the CdrGrid or it's grid items
- Use media queries to add responsiveness to your grid layout
- Wrap your entire page layout in a single `cdr-container`

<br/>

</cdr-doc-table-of-contents-shell>
