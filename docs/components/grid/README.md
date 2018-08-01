---
{
  "title": "Grid",
  "layout": "LayoutComponent",
  "summary": "Cedar’s grid system is a responsive, mobile first, fluid system that appropriately scales 12 columns as the device or viewport size increases.",
  "title_metadata": "Grid, layout, cdrGrid",
  #DO-DON'T
  "consistent": [
    {
        "type": "do",
        "image": "grid/grid_consistent_do.png",
        "ratio": "4-3",
        "alt": "Image showing proper grid usage",
        "caption": "maintain a consistent grid system."
      },
    {
        "type": "dont",
        "image": "grid/grid_consistent_dont.png",
        "ratio": "4-3",
        "alt": "Image showing mixed grid usage",
        "caption": "mix this grid and other grid systems."
      },
  ],
  "margins": [
    {
      "type": "do",
      "image": "grid/grid_margins_do.png",
      "ratio": "4-3",
      "alt": "Image showing grid margins and gutters",
      "caption": "maintain global margins and gutters."
    },
    {
      "type": "dont",
      "image": "grid/grid_margins_dont.png",
      "ratio": "4-3",
      "alt": "Image showing overly large side margins",
      "caption": "make margins too large."
    },
    {
      "type": "dont",
      "image": "grid/grid_gutters_dont.png",
      "ratio": "4-3",
      "alt": "Image showing overly large grid gutters",
      "caption": "make gutters too large."
    },
  ],
  #API
  "versions": [
    {
      "components": [
        {
          "name": "CdrRow",
          "api": {
            "props": [
              {
                "name": "cols",
                "type": "string",
                "default": "n/a",
                "description": "Number of equal-width columns in the row. A value of ‘auto’ will size columns as wide as their content.\nPossible values: {1-12, auto}\nAlso accepts responsive values with `@breakpoint`: \"2 4@md\""
              },
              {
                "name": "justify",
                "type": "string",
                "default": "n/a",
                "description": "Justify columns within a row. See CSS flexbox justify-content.\nPossible values: {left, center, right, around, between}.\nAlso accepts responsive values with `@breakpoint`: \"center right@lg\""
              },
              {
                "name": "align",
                "type": "string",
                "default": "n/a",
                "description": "Align columns of different heights. See CSS flexbox align-items.\nPossible values: {top, middle, bottom, stretch}.\nAlso accepts responsive values with `@breakpoint`: \"top middle@sm\""
              },
              {
                "name": "gutter",
                "type": "string",
                "default": "n/a",
                "description": "Defines gutter size. Default gutter size is 16px @xs and @sm and 32px @md and @lg.\nPossible values: {none, xxs}.\nAlso accepts responsive values with `@breakpoint`: \"none@md\""
              },
              {
                "name": "vertical",
                "type": "string",
                "default": "n/a",
                "description": "Changes row to a column layout. See CSS flexbox flex-direction.\nPossible values: {vertical}.\nAlso accepts responsive values with `@breakpoint`: \"vertical@md\""
              },
              {
                "name": "wrap",
                "type": "string",
                "default": "n/a",
                "description": "Enables row wrapping. Only needs to be changed if overriding `nowrap`. See CSS flexbox flex-wrap.\nPossible values: {wrap}.\nAlso accepts responsive values with `@breakpoint`: \"wrap@md\""
              },
              {
                "name": "nowrap",
                "type": "string",
                "default": "n/a",
                "description": "Disables row wrapping and enables overflow scrolling. See CSS flexbox flex-wrap.\nPossible values: {nowrap}.\nAlso accepts responsive values with `@breakpoint`: \"nowrap@md\""
              },
              {
                "name": "type",
                "type": "string",
                "default": "\"normal\"",
                "description": "Sets grid to use `ul` and `li` or `div`.\nPossible values: {normal, list}."
              }
            ],
            "slots": [
              {
                "name": "default",
                "description": "innerHTML on the inside of the row component"
              }
            ]
          },
        },
        {
          "name": "CdrCol",
          "api": {
            "props": [
              {
                "name": "span",
                "type": "string",
                "default": "n/a",
                "description": "Number of columns (out of 12) the column should span. Functions like bootstrap col-* classes.\nOverrides widths set by \"cols\" prop on CdrRow.\nPossible values: {1-12}\nAlso accepts responsive values with `@breakpoint`: \"12 8@lg\""
              },
              {
                "name": "offsetLeft",
                "type": "string",
                "default": "n/a",
                "description": "Number of columns (out of 12) of empty space to add left of this column.\nPossible values: {0-12}\nAlso accepts responsive values with `@breakpoint`: \"12 8@lg\""
              },
              {
                "name": "offsetRight",
                "type": "string",
                "default": "n/a",
                "description": "Number of columns (out of 12) of empty space to add right of this column.\nPossible values: {0-12}\nAlso accepts responsive values with `@breakpoint`: \"12 8@lg\""
              },
              {
                "name": "alignSelf",
                "type": "string",
                "default": "n/a",
                "description": "How the column should align (overrides CdrRow alignment). See CSS flexbox align-self.\nPossible values: {top, middle, bottom, stretch}.\nAlso accepts responsive values with `@breakpoint`: \"middle@sm\""
              },
              {
                "name": "isRow",
                "type": "boolean",
                "default": "false",
                "description": "Makes the column act as a CdrRow. Setting this to true exposes all props of CdrRow in addition to cdr-col props."
              }
            ],
            "slots": [
              {
                "name": "default",
                "description": "Default slot for cdr-col content."
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

## Column Layout

Use rows and columns to lay out content by specifying equal-widths for all columns

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.07.2/src/components/grid" sandbox-href="https://codesandbox.io/s/18r9z588l" >

```html
<div class="grid-example-wrap">
  <cdr-row cols="12">
    <cdr-col>
      <div>1</div>
    </cdr-col>
    <cdr-col>
      <div>2</div>
    </cdr-col>
    <cdr-col>
      <div>3</div>
    </cdr-col>
    <cdr-col>
      <div>4</div>
    </cdr-col>
    <cdr-col>
      <div>5</div>
    </cdr-col>
    <cdr-col>
      <div>6</div>
    </cdr-col>
    <cdr-col>
      <div>7</div>
    </cdr-col>
    <cdr-col>
      <div>8</div>
    </cdr-col>
    <cdr-col>
      <div>9</div>
    </cdr-col>
    <cdr-col>
      <div>10</div>
    </cdr-col>
    <cdr-col>
      <div>11</div>
    </cdr-col>
    <cdr-col>
      <div>12</div>
    </cdr-col>
  </cdr-row>
</div>
```

</cdr-doc-example-code-pair>

## Justify

Define x-axis alignment and distribute space for all columns per row. Containers may have set widths or may be flexible with max-widths defined. This applies to all columns with left as the default value.

### Left

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.07.2/src/components/grid" sandbox-href="https://codesandbox.io/s/9z3nqnp2lw" >

```html
<div class="grid-example-wrap">
  <cdr-row justify="left">
    <cdr-col span="3">
      <div>content</div>
    </cdr-col>
    <cdr-col span="3">
      <div>content</div>
    </cdr-col>
    <cdr-col span="3">
      <div>content</div>
    </cdr-col>
  </cdr-row>
</div>
```

</cdr-doc-example-code-pair>

### Center

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.07.2/src/components/grid" sandbox-href="https://codesandbox.io/s/9z3nqnp2lw" >

```html
<div class="grid-example-wrap">
  <cdr-row justify="center">
    <cdr-col span="3">
      <div>content</div>
    </cdr-col>
    <cdr-col span="3">
      <div>content</div>
    </cdr-col>
    <cdr-col span="3">
      <div>content</div>
    </cdr-col>
  </cdr-row>
</div>
```

</cdr-doc-example-code-pair>

### Right

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.07.2/src/components/grid" sandbox-href="https://codesandbox.io/s/9z3nqnp2lw" >

```html
<div class="grid-example-wrap">
  <cdr-row justify="right">
    <cdr-col span="3">
      <div>content</div>
    </cdr-col>
    <cdr-col span="3">
      <div>content</div>
    </cdr-col>
    <cdr-col span="3">
      <div>content</div>
    </cdr-col>
  </cdr-row>
</div>
```

</cdr-doc-example-code-pair>

### Around

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.07.2/src/components/grid" sandbox-href="https://codesandbox.io/s/9z3nqnp2lw" >

```html
<div class="grid-example-wrap">
  <cdr-row justify="around">
    <cdr-col span="3">
      <div>content</div>
    </cdr-col>
    <cdr-col span="3">
      <div>content</div>
    </cdr-col>
    <cdr-col span="3">
      <div>content</div>
    </cdr-col>
  </cdr-row>
</div>
```

</cdr-doc-example-code-pair>

### Between

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.07.2/src/components/grid" sandbox-href="https://codesandbox.io/s/9z3nqnp2lw" >

```html
<div class="grid-example-wrap">
  <cdr-row justify="between">
    <cdr-col span="3">
      <div>content</div>
    </cdr-col>
    <cdr-col span="3">
      <div>content</div>
    </cdr-col>
    <cdr-col span="3">
      <div>content</div>
    </cdr-col>
  </cdr-row>
</div>
```

</cdr-doc-example-code-pair>

## Align

Define y-axis alignment per row and distribute space across all columns per row. This applies to all columns with stretch as the default value.

### Top

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.07.2/src/components/grid" sandbox-href="https://codesandbox.io/s/18j2kwqy8j" >

```html
<div class="grid-example-wrap">
  <cdr-row cols="3" align="top">
    <cdr-col>
      <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique quis quae excepturi odit fugit commodi, molestiae eaque architecto dignissimos.</div>
    </cdr-col>
    <cdr-col>
      <div>content</div>
    </cdr-col>
    <cdr-col>
      <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
    </cdr-col>
  </cdr-row>
</div>
```

</cdr-doc-example-code-pair>

### Bottom

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.07.2/src/components/grid" sandbox-href="https://codesandbox.io/s/18j2kwqy8j" >

```html
<div class="grid-example-wrap">
  <cdr-row cols="3" align="bottom">
    <cdr-col>
      <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique quis quae excepturi odit fugit commodi, molestiae eaque architecto dignissimos.</div>
    </cdr-col>
    <cdr-col>
      <div>content</div>
    </cdr-col>
    <cdr-col>
      <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
    </cdr-col>
  </cdr-row>
</div>
```

</cdr-doc-example-code-pair>

### Middle

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.07.2/src/components/grid" sandbox-href="https://codesandbox.io/s/18j2kwqy8j" >

```html
<div class="grid-example-wrap">
  <cdr-row cols="3" align="middle">
    <cdr-col>
      <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique quis quae excepturi odit fugit commodi, molestiae eaque architecto dignissimos.</div>
    </cdr-col>
    <cdr-col>
      <div>content</div>
    </cdr-col>
    <cdr-col>
      <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
    </cdr-col>
  </cdr-row>
</div>
```

</cdr-doc-example-code-pair>

### Stretch

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.07.2/src/components/grid" sandbox-href="https://codesandbox.io/s/18j2kwqy8j" >

```html
<div class="grid-example-wrap">
  <cdr-row cols="3" align="stretch">
    <cdr-col>
      <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique quis quae excepturi odit fugit commodi, molestiae eaque architecto dignissimos.</div>
    </cdr-col>
    <cdr-col>
      <div>content</div>
    </cdr-col>
    <cdr-col>
      <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
    </cdr-col>
  </cdr-row>
</div>
```

</cdr-doc-example-code-pair>

## Gutter

Defines gutter size for all columns on a row and maintains gutter size by breakpoint. This applies to all columns. When this value is not set, default sizes are used.

### Default

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.07.2/src/components/grid" sandbox-href="https://codesandbox.io/s/l72jz831mq" >

```html
<div class="grid-example-wrap">
  <cdr-row cols="3">
    <cdr-col>
      <div class="grid-example">content</div>
    </cdr-col>
    <cdr-col>
      <div class="grid-example">content</div>
    </cdr-col>
    <cdr-col>
      <div class="grid-example">content</div>
    </cdr-col>
    <cdr-col>
      <div class="grid-example">content</div>
    </cdr-col>
    <cdr-col>
      <div class="grid-example">content</div>
    </cdr-col>
    <cdr-col>
      <div class="grid-example">content</div>
    </cdr-col>
  </cdr-row>
</div>
```

</cdr-doc-example-code-pair>

### xxs

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.07.2/src/components/grid" sandbox-href="https://codesandbox.io/s/l72jz831mq" >

```html
<div class="grid-example-wrap">
  <cdr-row cols="3" gutter="xxs">
    <cdr-col>
      <div class="grid-example">content</div>
    </cdr-col>
    <cdr-col>
      <div class="grid-example">content</div>
    </cdr-col>
    <cdr-col>
      <div class="grid-example">content</div>
    </cdr-col>
    <cdr-col>
      <div class="grid-example">content</div>
    </cdr-col>
    <cdr-col>
      <div class="grid-example">content</div>
    </cdr-col>
    <cdr-col>
      <div class="grid-example">content</div>
    </cdr-col>
  </cdr-row>
</div>
```

</cdr-doc-example-code-pair>

### None

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.07.2/src/components/grid" sandbox-href="https://codesandbox.io/s/l72jz831mq" >

```html
<div class="grid-example-wrap">
  <cdr-row cols="3" gutter="none">
    <cdr-col>
      <div class="grid-example">content</div>
    </cdr-col>
    <cdr-col>
      <div class="grid-example">content</div>
    </cdr-col>
    <cdr-col>
      <div class="grid-example">content</div>
    </cdr-col>
    <cdr-col>
      <div class="grid-example">content</div>
    </cdr-col>
    <cdr-col>
      <div class="grid-example">content</div>
    </cdr-col>
    <cdr-col>
      <div class="grid-example">content</div>
    </cdr-col>
  </cdr-row>
</div>
```

</cdr-doc-example-code-pair>

## Vertical

Defines direction for items in a container for all columns of a row. This applies to all columns. Default is horizontal.

### Default

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.07.2/src/components/grid" sandbox-href="https://codesandbox.io/s/nn29799pyj" >

```html
<div class="grid-example-wrap">
  <cdr-row cols="3">
    <cdr-col>
      <div class="grid-example">content</div>
    </cdr-col>
    <cdr-col>
      <div class="grid-example">content</div>
    </cdr-col>
    <cdr-col>
      <div class="grid-example">content</div>
    </cdr-col>
    <cdr-col>
      <div class="grid-example">content</div>
    </cdr-col>
    <cdr-col>
      <div class="grid-example">content</div>
    </cdr-col>
    <cdr-col>
      <div class="grid-example">content</div>
    </cdr-col>
  </cdr-row>
</div>
```

</cdr-doc-example-code-pair>

### Vertical

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.07.2/src/components/grid" sandbox-href="https://codesandbox.io/s/nn29799pyj" >

```html
<div class="grid-example-wrap">
  <cdr-row cols="3" vertical="vertical">
    <cdr-col>
      <div class="grid-example">content</div>
    </cdr-col>
    <cdr-col>
      <div class="grid-example">content</div>
    </cdr-col>
    <cdr-col>
      <div class="grid-example">content</div>
    </cdr-col>
    <cdr-col>
      <div class="grid-example">content</div>
    </cdr-col>
    <cdr-col>
      <div class="grid-example">content</div>
    </cdr-col>
    <cdr-col>
      <div class="grid-example">content</div>
    </cdr-col>
  </cdr-row>
</div>
```

</cdr-doc-example-code-pair>

## Wrap/Nowrap

Wrapping columns is the default; however, it is possible to disable or enable column wrapping of a row with the ability to set values based on breakpoint. The disable value also invokes overflow scrolling. This applies to all columns.

### Wrap (default)

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.07.2/src/components/grid" sandbox-href="https://codesandbox.io/s/r48j2yw7kq" >

```html
<div class="grid-example-wrap">
  <cdr-row cols="auto">
    <cdr-col>
      <div class="grid-example">some normal content</div>
    </cdr-col>
    <cdr-col>
      <div class="grid-example">short content</div>
    </cdr-col>
    <cdr-col>
      <div class="grid-example">some content that is longer</div>
    </cdr-col>
    <cdr-col>
      <div class="grid-example">short content</div>
    </cdr-col>
    <cdr-col>
      <div class="grid-example">some content that is much much longer content</div>
    </cdr-col>
  </cdr-row>
</div>
```

</cdr-doc-example-code-pair>

### Nowrap (scroll)

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.07.2/src/components/grid" sandbox-href="https://codesandbox.io/s/r48j2yw7kq" >

```html
<div class="grid-example-wrap">
  <cdr-row cols="auto" nowrap="nowrap">
    <cdr-col>
      <div class="grid-example">some normal content</div>
    </cdr-col>
    <cdr-col>
      <div class="grid-example">short content</div>
    </cdr-col>
    <cdr-col>
      <div class="grid-example">some content that is longer</div>
    </cdr-col>
    <cdr-col>
      <div class="grid-example">short content</div>
    </cdr-col>
    <cdr-col>
      <div class="grid-example">some content that is much much longer content</div>
    </cdr-col>
  </cdr-row>
</div>
```

</cdr-doc-example-code-pair>

## Span

Controls column width by overriding columns value for a specific column or columns. Span will override values from columns.

### 12 cols

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.07.2/src/components/grid" >

```html
<div class="grid-example-wrap">
  <cdr-row cols="12">
    <cdr-col span="1">
      <div>1</div>
    </cdr-col>
    <cdr-col>
      <div>2</div>
    </cdr-col>
    <cdr-col>
      <div>3</div>
    </cdr-col>
    <cdr-col>
      <div>4</div>
    </cdr-col>
    <cdr-col>
      <div>5</div>
    </cdr-col>
    <cdr-col>
      <div>6</div>
    </cdr-col>
    <cdr-col>
      <div>7</div>
    </cdr-col>
    <cdr-col>
      <div>8</div>
    </cdr-col>
    <cdr-col>
      <div>9</div>
    </cdr-col>
    <cdr-col>
      <div>10</div>
    </cdr-col>
    <cdr-col>
      <div>11</div>
    </cdr-col>
    <cdr-col>
      <div>12</div>
    </cdr-col>
  </cdr-row>
</div>
```

</cdr-doc-example-code-pair>

### Span 2

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.07.2/src/components/grid" >

```html
<div class="grid-example-wrap">
  <cdr-row cols="12">
    <cdr-col span="2">
      <div>2</div>
    </cdr-col>
    <cdr-col>
      <div>1</div>
    </cdr-col>
    <cdr-col>
      <div>2</div>
    </cdr-col>
    <cdr-col>
      <div>3</div>
    </cdr-col>
    <cdr-col>
      <div>4</div>
    </cdr-col>
    <cdr-col>
      <div>5</div>
    </cdr-col>
    <cdr-col>
      <div>6</div>
    </cdr-col>
    <cdr-col>
      <div>7</div>
    </cdr-col>
    <cdr-col>
      <div>8</div>
    </cdr-col>
    <cdr-col>
      <div>9</div>
    </cdr-col>
    <cdr-col>
      <div>10</div>
    </cdr-col>
  </cdr-row>
</div>
```

</cdr-doc-example-code-pair>

### Span 4

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.07.2/src/components/grid" >

```html
<div class="grid-example-wrap">
  <cdr-row cols="12">
    <cdr-col span="4">
      <div>4</div>
    </cdr-col>
    <cdr-col>
      <div>1</div>
    </cdr-col>
    <cdr-col>
      <div>2</div>
    </cdr-col>
    <cdr-col>
      <div>3</div>
    </cdr-col>
    <cdr-col>
      <div>4</div>
    </cdr-col>
    <cdr-col>
      <div>5</div>
    </cdr-col>
    <cdr-col>
      <div>6</div>
    </cdr-col>
    <cdr-col>
      <div>7</div>
    </cdr-col>
    <cdr-col>
      <div>8</div>
    </cdr-col>
  </cdr-row>
</div>
```

</cdr-doc-example-code-pair>

## Offset

Adds empty space (or columns) to left or right of a column, either to the left (offset-left) or right (offset-right). This can be applied to an individual column.

### Offset Left

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.07.2/src/components/grid" >

```html
<div class="grid-example-wrap">
  <cdr-row cols="12">
    <cdr-col offset-left="1">
      <div>1</div>
    </cdr-col>
    <cdr-col offset-left="1">
      <div>2</div>
    </cdr-col>
    <cdr-col offset-left="1">
      <div>3</div>
    </cdr-col>
    <cdr-col offset-left="1">
      <div>4</div>
    </cdr-col>
    <cdr-col offset-left="1">
      <div>5</div>
    </cdr-col>
    <cdr-col offset-left="1">
      <div>6</div>
    </cdr-col>
  </cdr-row>
</div>
```

</cdr-doc-example-code-pair>

### Offset Right

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.07.2/src/components/grid" >

```html
<div class="grid-example-wrap">
  <cdr-row cols="12">
    <cdr-col offset-right="1">
      <div>1</div>
    </cdr-col>
    <cdr-col offset-right="1">
      <div>2</div>
    </cdr-col>
    <cdr-col offset-right="1">
      <div>3</div>
    </cdr-col>
    <cdr-col offset-right="1">
      <div>4</div>
    </cdr-col>
    <cdr-col offset-right="1">
      <div>5</div>
    </cdr-col>
    <cdr-col offset-right="1">
      <div>6</div>
    </cdr-col>
  </cdr-row>
</div>
```

</cdr-doc-example-code-pair>

## Align Self

Overrides row-level alignment for a column. This can be applied to an individual column.

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.07.2/src/components/grid" >

```html
<div class="grid-example-wrap">
  <cdr-row cols="5">
    <cdr-col>
      <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique quis quae excepturi odit fugit commodi, molestiae eaque architecto dignissimos.</div>
    </cdr-col>
    <cdr-col align-self="top">
      <div>Top</div>
    </cdr-col>
    <cdr-col align-self="middle">
      <div>Middle. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
    </cdr-col>
    <cdr-col align-self="bottom">
      <div>Bottom</div>
    </cdr-col>
    <cdr-col align-self="stretch">
      <div>Stretch</div>
    </cdr-col>
  </cdr-row>
</div>
```

</cdr-doc-example-code-pair>

## Nested Grids

Defines nested columns (also known as isRow). 

### Simple

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.07.2/src/components/grid" sandbox-href="https://codesandbox.io/s/x931y6r7q" >

```html
<div class="grid-example-wrap">
  <cdr-row cols="3">
    <cdr-col>
      <div>content</div>
    </cdr-col>
    <cdr-col span="8" is-row cols="3">
      <cdr-col>
        <div>content</div>
      </cdr-col>
      <cdr-col>
        <div>content</div>
      </cdr-col>
      <cdr-col>
        <div>content</div>
      </cdr-col>
    </cdr-col>
  </cdr-row>
</div>
```

</cdr-doc-example-code-pair>

### Complex

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.07.2/src/components/grid" sandbox-href="https://codesandbox.io/s/x931y6r7q" >

```html
<div class="grid-example-wrap">
  <cdr-row cols="1 4@sm">
    <cdr-col>
      <div>One</div>
    </cdr-col>
    <cdr-col cols="7">
      <div>Two</div>
    </cdr-col>
    <cdr-col>
      <div>Three</div>
    </cdr-col>
    <cdr-col>
      <div>Four</div>
    </cdr-col>
    <cdr-col
      span="12"
      is-row
    >
      <cdr-col
        span="12 9@sm"
        is-row
      >
        <cdr-col span="12 4@sm">
          <div>
            Five
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, labore. Quos dolor tempore accusamus eius, voluptas, ipsum nulla. At fugiat quas est modi autem quam dolores maxime, provident commodi alias.</p>
          </div>
        </cdr-col>
        <cdr-col
          span="12 8@sm"
          is-row
          cols="1 2@sm"
        >
          <cdr-col>
            <div>Six</div>
          </cdr-col>
          <cdr-col>
            <div>Seven</div>
          </cdr-col>
          <cdr-col span="12">
            <div>Eight</div>
          </cdr-col>
        </cdr-col>
        <cdr-col span="12 9@sm">
          <div>
            Nine
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos minima aliquam reprehenderit iusto ratione nihil ipsum, perferendis quasi nulla ad quis. Consequuntur odio blanditiis aliquid voluptatem, veniam porro, ad assumenda!</p>
          </div>
        </cdr-col>
        <cdr-col span="12 3@sm">
          <div>
            Ten
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </cdr-col>
      </cdr-col>
      <cdr-col span="12 3@sm">
        <div>
          Eleven
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis deserunt, at, illum, earum quibusdam temporibus, molestiae doloremque iure ad est pariatur? Minima, fugit, accusantium. Aspernatur consectetur, labore enim ratione ducimus.</p>
        </div>
      </cdr-col>
    </cdr-col>
    <cdr-col>
      <div>
        Twelve
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
    </cdr-col>
    <cdr-col span="12 6@sm">
      <div>
        Thirteen
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque suscipit cum nemo aperiam esse, error ipsam, at aliquam similique optio est quaerat impedit id hic asperiores veritatis unde quod voluptatibus.</p>
      </div>
    </cdr-col>
    <cdr-col>
      <div>
        Fourteen
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
    </cdr-col>
  </cdr-row>
</div>
```

</cdr-doc-example-code-pair>

</cdr-doc-table-of-contents-shell>
</template>

<template slot="Design Guidelines">
<cdr-doc-table-of-contents-shell>

<cdr-doc-alert/>

## Use when

- Arranging content and components into rows and columns
- Laying out a page of 2+ rows of body content (apart from site navigation), some of which may or may not have columns
- Applying responsive rules to columns of a row and/or regions of a page layout or a container of many components
- Arranging elements within a single component with two or more zones, including those aligned to the left or right edge

## Don’t use when

- Presenting a multi-row columnar data display, such as features or specs of a product. Instead, use the `Data Table` component

## Foundations

Columns, gutters, and margins scales as a fluid system as the device and viewport increases from a small devices to a large device: 

<cdr-img :src="$withBase('/grid/Spec_Grid_Desktop_and_Mobile_4-3.png')" alt="grid concept at desktop and mobile sizes"/>
<cdr-img :src="$withBase('/grid/Spec_Grids_Breakpoints_16-9.png')" alt="grid breakpoints"/>

## Anatomy

<cdr-img :src="$withBase('/grid/Spec_Grids_Gutters_and_Margins_16-9.png')" alt="gutter margins and grids"/>

- Maximum width of 1232px:
  - Allows for padding between grid and browser window
  - Utilities are available to manage layout and presentation
  - Stay within max width to match the width of the global navigation


| **Breakpoints**  | **Viewpoint Width** | **Left Margin** | **Right Margin** |
| ---------------- | ------------------- | --------------- | ---------------- |
| XS - Extra Small | < 768px             | 16px            | 16px             |
| S - Small        | ≥ 768px             | 16px            | 16px             |
| M - Medium       | ≥ 992px             | 32px            | 32px             |
| L - Large        | ≥ 1232px            | 32px            | 32px             |

- Limit to 12 columns per row: 
  - If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new line
  - If a layout does not need 12 columns, specify that number to the engineering team
- Gutters separate columns with pre-defined padding:


| **Breakpoints**  | **Viewpoint Width** | **Gutter Size**                            |
| ---------------- | ------------------- | ------------------------------------------ |
| XS - Extra Small | < 768px             | 16px gutters (8px on left + 8px on right)  |
| S - Small        | ≥ 768px             | 16px gutters (8px on left + 8px on right)  |
| M - Medium       | ≥ 992px             | 32px gutters (16px on left +16px on right) |
| L - Large        | ≥ 1232px            | 32px gutters (16px on left +16px on right) |

## Content

- Prioritize your content by organizing content to highlight the most important information
- Use white space created by grid system because too much dense information can be disorienting and overwhelming

## Behavior

- Avoid breaking alignment or slightly oversizing a container to stick out for visual interest or to add emphasis.

<do-dont :examples="$page.frontmatter.consistent" />

- Create relationships and hierarchy between content elements by using the margins and gutters in the grid shared by the page layout.

<do-dont :examples="$page.frontmatter.margins" />

## Responsiveness

To build an effective responsive grid:

- Design mobile first:
    - Use the XS (≤ 768px) viewport width applicable to small devices like a phone
    - Start with a one column layout and add columns as needed
- Apply responsive rules to the grid and its contained content at relevant breakpoints including S (≥ 768px) and M (≥ 998px)
- Complete and optimize the layout for the widest L (≥ 1232px) viewport width
- Inspect responsive displays “in between” each breakpoint for how content responds across the fluid spectrum

## Accessibility

To ensure that usage of this component complies with accessibility guidelines, do the following:

- Low-vision users should be able to increase the size of the text by up to 200 percent without breaking the layout

This component follows WebAIM’s accessibility guidelines:

- [WCAG SC 1.3.2: Meaningful Sequence](https://www.w3.org/TR/WCAG20/#content-structure-separation-sequence): Cedar Design System does not provide for flexbox’s order property.  Reverse order or reordering of items is not allowed. Content must be presented in a correct reading sequence to comply with accessibility standards

</cdr-doc-table-of-contents-shell>
</template>

<template slot="API">
<cdr-doc-table-of-contents-shell>

Grids are built from two components, `cdr-row` and `cdr-col`.

## Props

### cdr-row
<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

### cdr-col
<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[1].api.props" />

## Slots

### cdr-row
<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />

### cdr-col
<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[1].api.slots" />

## Installation

Resources are available within the [cdr-grid package](https://www.npmjs.com/package/@rei/cdr-grid):

<cdr-doc-api type="installation" />

- Component: `@rei/cdr-grid`
- Component styles: `cdr-grid.css`

To incorporate the required assets for a component, use the following steps:

### #1. Install using NPM

Install the `cdr-grid` package using `npm` in your terminal:

_Terminal_

```bash
npm i -s @rei/cdr-grid
```

### #2. Import Dependencies

_main.js_

```javascript
// import your required css.
import "@rei/cdr-grid/dist/cdr-grid.css";
```

### #3. Add component to a template

_local.vue_

```vue
<template>
  <cdr-row>
    <cdr-col>
      ...
    </cdr-col>
    <cdr-col>
      ...
    </cdr-col>
  </cdr-row>
</template>

<script>
import { CdrRow, CdrCol } from '@rei/cdr-grid';
export default {
  ...
  components: {
     CdrRow,
     CdrCol  
  }
}
</script>
```

## Usage

CdrRow functions as a flexbox container, and CdrCol functions as a flexbox item.

- Always use CdrRow and CdrCol together:
    - Attempting to use either without the other will not work
    - Never include other elements as immediate children of CdrRow besides CdrCol 
- The grid system is mobile-first, flexbox based, and 12 columns wide. Many props mirror the flexbox API and work as you’d expect CSS flexbox to work.

New to or unfamiliar with flexbox? Read this [CSS Tricks flexbox guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background) for background, terminology, guidelines, and examples.

Immediate children of `cdr-col` are flexed due to a flex height display bug in some versions of Safari. This causes immediate children to be full-width and display stacked horizontally. Wrapping child elements in a single `div` element will fix these problems (if undesired). 

<cdr-doc-code-snippet :copy-button="false" :max-height="false">
  ```html{3,6}
  <cdr-row>
    <cdr-col>
      <div>
        <p>This will display</p>
        <p>As expected</p>
      </div>
    </cdr-col>
  </cdr-row>
  ```
</cdr-doc-code-snippet>

### Nested Grids

Nested grids are made by nesting CdrCols and adding the `is-row` prop to the `CdrCol` that acts as the row wrapper:

- Add `is-row` prop to `cdr-col` that has other `cdr-col` as children
- `is-row` will expose all props for both col and row


<cdr-doc-code-snippet :copy-button="false" :max-height="false">
  ```html
  <cdr-row cols=”3”>
    <cdr-col is-row span=”6” cols”2”>
      <cdr-col></cdr-col>
    </cdr-col>
  </cdr-row>
  ```
</cdr-doc-code-snippet>

## Accessibility

- Low-vision users should be able to increase the size of the text by up to 200 percent without breaking the layout
- Use list markup for content layout. List markup allow contents to be structured which makes it easier for assistive technologies

This component follows WebAIM’s accessibility guidelines:

- [WCAG SC 1.3.2: Meaningful Sequence](https://www.w3.org/TR/WCAG20/#content-structure-separation-sequence): Cedar Design System does not provide for flexbox’s order property.  Reverse order or reordering of items is not allowed. Content must be presented in a correct reading sequence to comply with accessibility standards

</cdr-doc-table-of-contents-shell>
</template>

<template slot="History">

## 1.0.0

- Consolidate responsive props to single prop that accepts responsive values
See full dev [changelog](https://github.com/rei/rei-cedar/blob/master/src/components/grid/CHANGELOG.md)
- Replaces `@rei/cdr-row` and `@rei/cdr-col` packages (both components are available from this package)
- The Grid css is contained in this package and not in `@rei/cdr-assets` core.css

</template>
</cdr-doc-tabs>