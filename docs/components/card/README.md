---
{
  "title": "Card",
  "layout_type": "LayoutComponent",
  "summary": "A card is a linked, interactive surface that groups related information and/or actions associated with a singular subject or destination.",
  "title_metadata": "CdrCard",
  "breadcrumbs": [
    {
      "text": "Components/"
    }
  ],
  "sandboxData": {
    "components": "CdrCard, CdrText, CdrRating, CdrImg"
  },

  "content": [
    {
      "type": "do",
      "image": "",
      "ratio": "4-3",
      "alt": "Image showing proper card usage",
      "caption": "include essential, summarized information. "
    },
    {
      "type": "dont",
      "image": "",
      "ratio": "4-3",
      "alt": "Image showing improper card usage",
      "caption": "overwhelm the space with excessive content."
    }
  ],
  "grouping": [
    {
      "type": "do",
      "image": "",
      "ratio": "4-3",
      "alt": "Image showing proper card usage",
      "caption": "use consistent elements from card to card when arranged in groups."
    },
    {
      "type": "dont",
      "image": "",
      "ratio": "4-3",
      "alt": "Image showing improper card usage",
      "caption": "group unlike cards that use different elements."
    }
  ],

  "versions": [
    {
      "components": [
        {
          "name": "CdrCard",
          "api": {
            "props": [
              {
                "name": "linked",
                "type": "boolean",
                "default": "false",
                "required": "false",
                "description": "Adds an elevated effect on hover for use with CdrCards that are wrapped in a link"
              }
            ],
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

CdrCard is a simple wrapper component that allows for composing various card layouts.

CdrCards should always be used to link to other content, and the `cdr-card__link` utility class should be used on the link element to ensure that the entire card functions as a click target.

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
    <cdr-link class="cdr-card__link" href="#">
      <cdr-text
        tag="h2"
        modifier="heading-serif-500"
      >
        Complex Card Title
      </cdr-text>
    </cdr-link>
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


## Accessibility

To ensure that usage of this component complies with accessibility guidelines, do the following:

- TODO: something
- TODO: something else

# Guidelines

## Use when
- Previewing bite-sized information about an article or activity—such as a class or event

## Don’t use when
- The card will not link to a destination or contains no actionable elements
- To display search results
- The information contained within the card is not related to each other
- The visual presentation of a card is desired but the interaction pattern is not

## The Basics
- A card is a linked container with several pre-defined behaviors:
    - Cards have a defined background color
    - Cards resemble physical cards in that they have a defined area and visually sit above the background
    - Cards are interactive and respond to a user's input by "lifting" off a page's background
- Cards must be composed using different components. These components work together to provide details about a singular subject or destination
- For groups of cards:
    - Separate each card by using the grid system
    - Ensure the components used are consistent from card to card
    - Use the same height and width for each card on the page

## Do / Don't

<do-dont :examples="$page.frontmatter.content" />

<br />

<do-dont :examples="$page.frontmatter.grouping" />

# API


## Props

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

## Slots

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />


## Usage

```vue
<cdr-card>
  TODO: Card Content
</cdr-card>
```

</cdr-doc-table-of-contents-shell>
