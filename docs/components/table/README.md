---
{
  "title": "Table",
  "layout_type": "LayoutComponent",
  "title_metadata": "Table, CdrTable",
  "summary": "TODO: Summary",
  "see_also": [
    {
      "text": "See Also"
    },
    {
      "text": "TODO?",
      "href": ""
    },
  ],
  "breadcrumbs": [
    {
      "text": "Components/"
    }
  ],
  "sandboxData": {
    "components": "CdrTable"
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

# Overview

## Default

The default table is medium sized, bordered, full width, and has responsive overflow scrolling.

<cdr-doc-example-code-pair repository-href="/src/components/table" :sandbox-data="$page.frontmatter.sandboxData">

```html
<div>
  <cdr-table>
    <thead>
      <tr>
        <th>Test head</th>
        <th>Test head</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Test content</td>
        <td>Test content</td>
      </tr>
      <tr>
        <td>Test content</td>
        <td>Test content</td>
      </tr>
      <tr>
        <td>Test content</td>
        <td>Test content</td>
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
    <thead>
      <tr>
        <th>Test head</th>
        <th>Test head</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Test content</td>
        <td>Test content</td>
      </tr>
      <tr>
        <td>Test content</td>
        <td>Test content</td>
      </tr>
      <tr>
        <td>Test content</td>
        <td>Test content</td>
      </tr>
    </tbody>
  </cdr-table>
</div>
```

</cdr-doc-example-code-pair>

## Accessibility

To ensure that usage of this component complies with accessibility guidelines:

- TODO

<br>

This component has compliance with WCAG guidelines by:

- TODO

<hr>

# Guidelines

## Use When

- TODO

## Don't Use When

- TODO

<hr>

# API

## Props

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

## Usage

### Markup

While tables can be as simple as `CdrTable > tr > td`, tables should make use of `thead`, `tbody`, and/or `tfoot` for the best user experience and for correct styles. 

</cdr-doc-table-of-contents-shell>
