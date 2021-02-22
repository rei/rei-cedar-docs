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
    "components": "CdrCard, CdrText, CdrRating, CdrImg",
    "styleTag": ".content { padding: $cdr-space-one-x; }\n.title { @include cdr-text-heading-serif-500; }\n.body { @include cdr-text-body-300; }"
  },

  "content": [
    {
      "type": "do",
      "image": "card/card_essential_do.png",
      "ratio": "4-3",
      "alt": "Image showing proper card usage",
      "caption": "include essential, summarized information. "
    },
    {
      "type": "dont",
      "image": "card/card_excessive_dont.png",
      "ratio": "4-3",
      "alt": "Image showing improper card usage",
      "caption": "overwhelm the space with excessive content."
    }
  ],
  "grouping": [
    {
      "type": "do",
      "image": "card/card_consistent_do.png",
      "ratio": "4-3",
      "alt": "Image showing proper card usage",
      "caption": "use consistent elements from card to card when arranged in groups."
    },
    {
      "type": "dont",
      "image": "card/card_unlike_dont.png",
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
                "name": "tag",
                "type": "string",
                "default": "'article'",
                "description": "Sets valid HTML container element tag."
              },
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

Cards should always be used to link to other content, and the `cdr-card__link` utility class should be used on the link element to ensure that the entire card functions as a click target.

<cdr-doc-example-code-pair repository-href="/src/components/card"
:sandbox-data="$page.frontmatter.sandboxData" >

```html
<cdr-card>
  <div>
    <cdr-img
      alt="card test image alt text"
      src="/rei-cedar-docs/live.jpg"
      modifier="responsive"
    />
  </div>
  <div class="content">
    <cdr-link class="cdr-card__link" href="#Overview">
      <cdr-text
        tag="h2"
        class="title"
      >
        Complex Card Title
      </cdr-text>
    </cdr-link>
    <cdr-rating
      rating="4.2"
      count="12"
      size="small"
    />
    <cdr-text class="body">
      Card content
    </cdr-text>
  </div>
</cdr-card>
```
</cdr-doc-example-code-pair>

## Customizing Cards

Because CdrCard is a simple wrapper component, it's behavior can be customized or overridden in a variety of ways. For example, adding a border, inset padding, or modifying the link behavior.

<cdr-doc-example-code-pair repository-href="/src/components/card"
:sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {styleTag: '.custom-card-example {border: 1px solid $cdr-color-border-primary; padding: $cdr-space-inset-one-x;} .custom-card-example .cdr-card__link {&:hover {color: $cdr-color-text-sale !important;}}'})" >

```html
<cdr-card class="custom-card-example">
  <div>
    <cdr-img
      alt="card test image alt text"
      src="/rei-cedar-docs/live.jpg"
      modifier="responsive"
    />
  </div>
  <div>
    <cdr-link class="cdr-card__link" href="#Overview">
      <cdr-text
        tag="h2"
        class="title"
      >
        Custom Card Title
      </cdr-text>
    </cdr-link>
    <cdr-rating
      rating="4.2"
      count="12"
      size="small"
    />
    <cdr-text class="body">
      Card content
    </cdr-text>
  </div>
</cdr-card>
```
</cdr-doc-example-code-pair>

## Accessibility

Many WCAG requirements are contextual to their implementation. To ensure that usage of this component complies with accessibility guidelines you are responsible for the following:

- Leave the default tag prop of `article` if the content includes a heading AND the content would be as useful on another web page
- Set the tag prop to `section` if the content contains a heading, but the content is dependent on its context to be meaningful
- Set the tag prop to `div` if your card title won’t be using a heading tag. This ensures it will not appear in the document’s outline
- CdrCard must contain a linked title
- All actionable elements contained within CdrCard must follow the guidelines outlined within their accessibility sections

# Guidelines

## Use when
- Previewing bite-sized information about an article or activity—such as a class or event

## Don’t use when
- The card will not link to a destination or contains no actionable elements
- Displaying search results
- The information contained within the card is not related
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

## Component Variables

<cdr-doc-comp-vars name="CdrCard"/>

</cdr-doc-table-of-contents-shell>
