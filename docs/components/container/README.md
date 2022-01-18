---
{
  "title": "Container",
  "layout_type": "LayoutComponent",
  "summary": "Provides base margins and responsive layout logic for pages",
  "title_metadata": "CdrContainer",
  "component_location": "https://github.com/rei/rei-cedar/tree/next/src/components/container",
  "breadcrumbs": [
    {
      "text": "Components/"
    }
  ],
  "sandboxData": {
    "components": "CdrContainer"
  },
  "versions": [
    {
      "components": [
        {
          "name": "CdrContainer",
          "api": {
            "props": [
              {
                "name": "tag",
                "type": "string",
                "default": "'div'",
                "description": ""
              },
              {
                "name": "modifier",
                "type": "string",
                "default": "'static'",
                "description": "Controls whether container is static or fluid width.  Possible values: { 'static' | 'fluid' }"
              },
            ],
            "slots": [
              {
                "name": "default",
                "description": "Slot for CdrContainer content."
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

CdrContainer is a simple wrapper that provides basic responsive layout logic. The padding and margin applied by CdrContainer is designed to align with the header and footer in the REI page template. This component provides the same functionality as the `cdr-container` or `cdr-container-fluid` mixins from `@rei/cdr-tokens` but wrapped in a Vue component for ease of use. Note that the example below needs to be opened in CodeSandbox to see the full static vs. fluid behavior.

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location"
:sandbox-data="$page.frontmatter.sandboxData" >

```html
<div>
  <cdr-container>
    <div style="width: 100%; border: 1px dashed purple;">
      Static container content
    </div>
  </cdr-container>
  <br/>
  <cdr-container modifier="fluid">
    <div style="width: 100%; border: 1px dashed purple;">
      Fluid container content
    </div>
  </cdr-container>
</div>
```
</cdr-doc-example-code-pair>


### Accessibility

Usage of the `tag` prop should semantically match the layout of your page. In general, the default tag value `div` will work for the majority of use cases.

## Guidelines


The default `static` CdrContainer has a flexible content width up to a max width of 1232px which corresponds to our `large` breakpoint, while the `fluid` CdrContainer has no max-width. See the [responsive foundations](../../foundation/responsive/#the-cedar-container) article for more information on container usage.

### Use when

- Use CdrContainer to wrap your page content and provide proper padding and margins around it.

### Don’t use when

- Do not nest instances of CdrContainer within one another.
- Do not wrap content that is intended to take up the full screen width within a CdrContainer, for example a hero image. Instead use multiple instances of CdrContainer adjacent to that full width content:

```vue
<cdr-container>
  page content
</cdr-container>
<div class="full-width-content">
  full screen width content
</div>
<cdr-container>
  more page content
</cdr-container>
```

# API

<cdr-icon class="cdr-doc-code-snippet__action-icon" use="#brand-github"/> View it on Github: 
<cdr-link :href="$page.frontmatter.component_location">{{$page.frontmatter.component_location}}</cdr-link>

## Props

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

## Slots

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />


</cdr-doc-table-of-contents-shell>
