---
{
  "title": "Card",
  "layout_type": "LayoutComponent",
  "summary": "TODO: Display stuff and things",
  "title_metadata": "CdrCard",
  "breadcrumbs": [
    {
      "text": "Components/"
    }
  ],
  "sandboxData": {
    "components": "CdrCard, CdrText, CdrRating, CdrImg"
  },
  "versions": [
    {
      "components": [
        {
          "name": "CdrCard",
          "api": {
            "slots": [
              {
                "name": "default",
                "description": "Slot for CdrCard content."
              }
            ]
          }
        }
      ]
    }
  ]
}
---

<cdr-doc-table-of-contents-shell >

# Overview

<cdr-doc-example-code-pair repository-href="/src/components/card"
:sandbox-data="$page.frontmatter.sandboxData" >

```html
<cdr-card class="card-example">
  <div>
    <cdr-img
      alt="card test image alt text"
      src="https://www.rei.com/assets/drsp/2018/q2/campaign/summer/chapter-4/rei-backpacking-bundle/live.jpg"
      modifier="responsive"
    />
  </div>
  <div class="cdr-space-inset-one-x">
    <cdr-text
      tag="h2"
      modifier="heading-serif-500"
    >
      Complex Card Title
    </cdr-text>
    <cdr-rating
      rating="4.2"
      count="12"
      size="small"
    />
    <cdr-text modifier="body-300">
      Card content
    </cdr-text>
  </div>
</cdr-card>
```
</cdr-doc-example-code-pair>

## Linked Card

Use the `linked` property to add a hover effect to cards that are wrapped in a link

<cdr-doc-example-code-pair repository-href="/src/components/card"
:sandbox-data="$page.frontmatter.sandboxData" >

```html
<a href="#">
  <cdr-card class="card-example" :linked="true">
    <cdr-text
      tag="h2"
      modifier="heading-serif-500"
    >
      Linked Card Title
    </cdr-text>
    <cdr-rating
      rating="4.2"
      count="12"
      size="small"
    />
    <cdr-text modifier="body-300">
      Linked Card content
    </cdr-text>
  </cdr-card>
</a>
```
</cdr-doc-example-code-pair>

## Accessibility

To ensure that usage of this component complies with accessibility guidelines, do the following:

- TODO: something
- TODO: something else

# Guidelines

## Use When

- TODO: something
- TODO: something else

## Don't Use When

- TODO: something
- TODO: something else
## The Basics

- TODO: something
- TODO: something else

## Behavior

- TODO: something
- TODO: something else

# API
## Slots

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />


## Usage

```vue
<cdr-card>
  TODO: Card Content
</cdr-card>
```

</cdr-doc-table-of-contents-shell>
