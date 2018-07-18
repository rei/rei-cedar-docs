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
  ]
}
---

<cdr-doc-tabs>
</cdr-doc-tabs>