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
      "version": "0.1.0"
    }
  ],
  "related_components": [
    {
      "name": "CdrAccordionItem",
      "versions": [
        {
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
          },
          "version": "0.1.0"
        }
      ]
    }
  ]
}
---

<cdr-doc-tabs>

<template slot="API">
<cdr-doc-table-of-contents-shell>

Accordions are built from two components, `cdr-accordion` and `cdr-accordion-item`.

### Props

#### cdr-accordion
<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].api.props" />

#### cdr-accordion-item
<cdr-doc-api type="prop" :api-data="$page.frontmatter.related_components[0].versions[0].api.props" />

### Slots

#### cdr-accordion
<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].api.slots" />

#### cdr-accordion-item
<cdr-doc-api type="slot" :api-data="$page.frontmatter.related_components[0].versions[0].api.slots" />

</cdr-doc-table-of-contents-shell>
</template>

</cdr-doc-tabs>