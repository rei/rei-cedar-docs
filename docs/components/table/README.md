---
{
  "title": "Table",
  "layout_type": "LayoutComponent",
  "title_metadata": "Table, CdrTable",
  "summary": "Organizes structured content so that it is easy to scan, make comparisons, and analyze the data",
  "breadcrumbs": [
    {
      "text": "Components/"
    }
  ],
  "sandboxData": {
    "components": "CdrTable",
    "styleTag": ".advanced-table {
      &__header {
        background-color: $cdr-color-background-table-header;
      }
    }",
  },
  "versions": [
    {
      "components": [
        {
          "name": "CdrTable",
          "api": {
            "props": [
              {
                "name": "striped",
                "type": "Boolean",
                "default": "false",
                "required": "false",
                "description": "Sets row colors to alternate between darker and lighter backgrounds. Striping will not apply when `border` is true"
              },
              {
                "name": "border",
                "type": "Boolean",
                "default": "true",
                "required": "false",
                "description": "Adds borders between rows. Will disable `striped` if both are true"
              },
              {
                "name": "full-width",
                "type": "Boolean, string",
                "default": "true",
                "required": "false",
                "description": "Sets the width to 100%. Also accepts space separated strings for breakpoints that it should be full width: { '@xs' | '@sm' | '@md' | '@lg' }"
              },
              {
                "name": "responsive",
                "type": "Boolean",
                "default": "true",
                "required": "false",
                "description": "Makes the table scroll horizontally when it would overflow its container"
              },
              {
                "name": "hover",
                "type": "Boolean",
                "default": "false",
                "required": "false",
                "description": "Adds a darker background on row hover"
              },
              {
                "name": "size",
                "type": "string",
                "default": "'medium'",
                "description": "Sets the table size (cell padding); values can target responsive breakpoints. Breakpoint values are: xs, sm, md, and lg. Examples: { 'small' | 'medium' | 'large' | 'large@sm' }"
              },
            ],
          }
        }
      ],
      "version": "1.0.0"
    }
  ]
}

---



<cdr-doc-table-of-contents-shell>

<br>

<cdr-doc-alert icon="info">CdrTable replaces the deprecated CdrDataTable component. The <cdr-link href="../data-tables/">documentation for CdrDataTable</cdr-link> is still available, and the component itself has been ported to FEDCOMP as <cdr-link href="https://git.rei.com/projects/FEDCOMP/repos/data-table/browse">@rei/data-table</cdr-link> </cdr-doc-alert>

# Overview

## Default

The default table is medium sized, bordered, full width, and has responsive overflow scrolling.

<cdr-doc-example-code-pair repository-href="/src/components/table" :sandbox-data="$page.frontmatter.sandboxData">

```html
<div>
  <cdr-table>
  <caption>A sample table</caption>
    <thead>
      <tr>
        <th id="head1" scope="col">Test head</th>
        <th id="head2" scope="col">Test head</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td headers="head1">Test content</td>
        <td headers="head2">Test content</td>
      </tr>
      <tr>
        <td headers="head1">Test content</td>
        <td headers="head2">Test content</td>
      </tr>
      <tr>
        <td headers="head1">Test content</td>
        <td headers="head2">Test content</td>
      </tr>
    </tbody>
  </cdr-table>
</div>
```

</cdr-doc-example-code-pair>

## Striped

Alternating light/dark backgrounds.

<cdr-doc-example-code-pair repository-href="/src/components/table" :sandbox-data="$page.frontmatter.sandboxData">

```html
<div>
  <cdr-table striped>
    <caption>A sample striped table</caption>
    <thead>
      <tr>
        <th id="stripedhead1" scope="col">Test head</th>
        <th id="stripedhead2" scope="col">Test head</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td headers="stripedhead1">Test content</td>
        <td headers="stripedhead2">Test content</td>
      </tr>
      <tr>
        <td headers="stripedhead1">Test content</td>
        <td headers="stripedhead2">Test content</td>
      </tr>
      <tr>
        <td headers="stripedhead1" >Test content</td>
        <td headers="stripedhead2">Test content</td>
      </tr>
    </tbody>
  </cdr-table>
</div>
```

</cdr-doc-example-code-pair>


## Border

Adds border between rows

<cdr-doc-example-code-pair repository-href="/src/components/table" :sandbox-data="$page.frontmatter.sandboxData">

```html
<div>
  <cdr-table border>
    <caption>A sample table displaying a border</caption>
    <thead>
      <tr>
        <th id="borderhead1" scope="col">Test head 1</th>
        <th id="borderhead2" scope="col">Test head 2</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td headers="borderhead1">Test content</td>
        <td headers="borderhead2">Test content</td>
      </tr>
      <tr>
        <td headers="borderhead1">Test content</td>
        <td headers="borderhead2">Test content</td>
      </tr>
      <tr>
        <td headers="borderhead1">Test content</td>
        <td headers="borderhead2">Test content</td>
      </tr>
    </tbody>
  </cdr-table>
</div>
```

</cdr-doc-example-code-pair>

## Advanced with custom styles

This is an advanced example with multiple headers and a custom class to change the background color for headers inside `<tbody>`

<cdr-doc-example-code-pair repository-href="/src/components/table" :sandbox-data="$page.frontmatter.sandboxData">

```html
<div>
  <cdr-table class="advanced-table">
    <caption>Availability of holiday accommodation</caption>
    <thead>
      <tr>
        <td></td>
        <th id="stud" scope="col">Studio</th>
        <th id="apt" scope="col"><abbr title="Apartment">Apt</abbr></th>
        <th id="chal" scope="col">Chalet</th>
        <th id="villa" scope="col">Villa</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th id="par" colspan="5" scope="colgroup" class="advanced-table__header">Paris</th>
      </tr>
      <tr>
        <th headers="par" id="pbed1" class="advanced-table__header" scope="row">1 bedroom</th>
        <td headers="par pbed1 stud">11</td>
        <td headers="par pbed1 apt">20</td>
        <td headers="par pbed1 chal">25</td>
        <td headers="par pbed1 villa">23</td>
      </tr>
      <tr>
        <th headers="par" id="pbed2" class="advanced-table__header" scope="row">2 bedroom</th>
        <td headers="par pbed2 stud">-</td>
        <td headers="par pbed2 apt">43</td>
        <td headers="par pbed2 chal">52</td>
        <td headers="par pbed2 villa">32</td>
      </tr>
      <tr>
        <th headers="par" id="pbed3" class="advanced-table__header" scope="row">3 bedroom</th>
        <td headers="par pbed3 stud">-</td>
        <td headers="par pbed3 apt">13</td>
        <td headers="par pbed3 chal">15</td>
        <td headers="par pbed3 villa">40</td>
      </tr>
      <tr>
        <th id="rome" colspan="5" scope="colgroup" class="advanced-table__header">Rome</th>
      </tr>
      <tr>
        <th id="rbed1" headers="rome" class="advanced-table__header" scope="row">1 bedroom</th>
        <td headers="rome rbed1 stud">13</td>
        <td headers="rome rbed1 apt">21</td>
        <td headers="rome rbed1 chal">22</td>
        <td headers="rome rbed1 villa">3</td>
      </tr>
      <tr>
        <th id="rbed2" headers="rome" class="advanced-table__header" scope="row">2 bedroom</th>
        <td headers="rome rbed2 stud">-</td>
        <td headers="rome rbed2 apt">23</td>
        <td headers="rome rbed2 chal">43</td>
        <td headers="rome rbed2 villa">30</td>
      </tr>
      <tr>
          <th id="rbed3" headers="rome" class="advanced-table__header" scope="row">3 bedroom</th>
          <td headers="rome rbed3 stud">-</td>
          <td headers="rome rbed3 apt">16</td>
          <td headers="rome rbed3 chal">32</td>
          <td headers="rome rbed3 villa">40</td>
      </tr>
    </tbody>
  </cdr-table>
</div>
```

</cdr-doc-example-code-pair>

## Accessibility

Many WCAG requierments are contextual to their implementation. 
To ensure that usage of this component complies with accessibility guidelines you are responcible for the following:

- WCAG level A requierments:
  - Table headers MUST be designated with `<th>`
  - Table header text MUST accurately describe the category of the corresponding data cells.
  - Table data cells MUST be associated with their corresponding header cells.
Note: Use of scope (`<th scope="col">` and `<th scope="row">`) is highly recommended, though not always necessary (i.e. if all cells in the first row are marked as `<th>` without scope, most modern screen readers will infer that the scope is the column below each header cell).
  - Table data group headers (if any) MUST be associated with their corresponding data cell groups (e.g. via scope="rowgroup" or scope="colgroup").
  - Table headers and data associations MUST NOT be referenced across nested, merged, or separate tables.

- WCAG level AA requierments:
  - Tabular data SHOULD be represented in a `<table>`.
Note: Even if the data are not represented in a table, WCAG 1.3.1 requires the data to be associated with their labels.
  - Tables SHOULD have a programmatically-associated `<caption>` or name (e.g. via aria-label or aria-labelledby).
  - The name or `<caption>` of a table SHOULD describe the identity or purpose of the table accurately, meaningfully, and succinctly.


<br>

This component has compliance with WCAG guidelines by:

- Routing all attributes to the table element

<hr>

# Guidelines

## Use When

- Presenting multiple metrics and categories together
- Displaying tabular data for users to compare

## Don't Use When

- Positioning contents on page. Instead, use [Grid](../grid/)
- Laying out a page design. Instead, use [Grid](../grid/)

## The Basics

- Use on either light or dark backgrounds.
- Content within tables can include text, photos, graphics, or other components (i.e. links, buttons, icons)

## Anatomy

- `cdr-table` like `cdr-grid` is a wrapper component without predetermined layout requirements. This allows you the flexibility to construct the structure you need to accurately display the data you have. There are cases where you might need to change background colors or add additional borders (see [advanced example](#advanced-with-custom-styles) below). When this is done, tokens for the table colors (background, border, etc.) should be used so your customizations can persist through future cedar updates.
- Our table component provides the visual class only and does not account for markup requirements to create an accessible table. Be sure to review the examples and the accessibility requirements for this component.

<hr>

# API

## Props

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

</cdr-doc-table-of-contents-shell>
