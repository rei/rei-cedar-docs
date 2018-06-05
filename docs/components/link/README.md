---
{
   "title": "Link",
   "layout": "LayoutComponent",
   "summary": "Clickable text element used when navigating to page section, another page or opening an overlay window such as modal dialog or popover.",
   "title_metadata": "Hyperlink, Anchor, CdrButton, CdrLink",
   "breadcrumbs": [
      {
         "text": "Components/",
         "href": "#"
      },
      {
         "text": "Another-Step/",
         "href": "#"
      },
      {
         "text": "Pathname/",
         "href": "#"
      }
   ],
  "name": "CdrLink",
  "versions": [
    {
      "api": {
        "props": [
          {
            "name": "tag",
            "type": "string",
            "default": "\"a\"",
            "description": "MISSING DESCRIPTION"
          },
          {
            "name": "href",
            "type": "string",
            "default": "\"#\"",
            "description": "MISSING DESCRIPTION"
          }
        ],
        "slots": [
          {
            "name": "default",
            "description": "innerHTML on the inside of the anchor component"
          }
        ]
      },
      "version": "0.1.0"
    }
  ]
}
---

## Basic

```
<cdr-link href="https://www.rei.com/">REI.com home page</cdr-link>

```
[github](https://github.com/rei/rei-cedar/tree/cedar2/src/components/link)
[code sandbox](https://codesandbox.io/s/jnv1rko1z9)

## Standalone

```
<cdr-link modifier="standalone" href="https://www.rei.com/">REI.com</cdr-link>
```
[github](https://github.com/rei/rei-cedar/tree/cedar2/src/components/link)
[code sandbox](https://codesandbox.io/s/jnv1rko1z9)

## With Button Element

```
<cdr-link tag="button">add to cart</cdr-link>
```
[github](https://github.com/rei/rei-cedar/tree/cedar2/src/components/link)
[code sandbox](https://codesandbox.io/s/jnv1rko1z9)

### Props

<cdr-doc-api type="prop" />

### Slots 

<cdr-doc-api type="slot" />