---
{
  "title": "Rating",
  "layout_type": "LayoutComponent",
  "title_metadata": "Rating, Stars, Reviews, CdrRating",
  "summary": "Provide insight of others’ opinions for products, experiences and expert information",
  "stars": [
    {
      "type": "do",
      "image": "rating/rating_stars_do_16-9.png",
      "ratio": "16-9",
      "alt": "Image showing rating with 5 stars",
      "caption": "show all 5 stars."
    },
    {
      "type": "dont",
      "image": "rating/rating_stars_dont_16-9.png",
      "ratio": "16-9",
      "alt": "Image showing rating with fewer than 5 stars",
      "caption": "adjust the number of stars."
    }
  ],
  "number": [
    {
      "type": "do",
      "image": "rating/rating_number_do_16-9.png",
      "ratio": "16-9",
      "alt": "Image showing rating with number of reviews text",
      "caption": "display the number of reviews next to the star rating."
    },
    {
      "type": "dont",
      "image": "rating/rating_number_dont_16-9.png",
      "ratio": "16-9",
      "alt": "Image showing rating without number of reviews text",
      "caption": "only show the stars."
    }
  ],
  "none": [
    {
      "type": "do",
      "image": "rating/rating_none_do_16-9.png",
      "ratio": "16-9",
      "alt": "Image showing rating with empty stars",
      "caption": "show an empty rating when no reviews are available."
    },
    {
      "type": "dont",
      "image": "rating/rating_none_dont_16-9.png",
      "ratio": "16-9",
      "alt": "Image showing the text 'no ratings available'",
      "caption": "hide rating in lieu of ‘No Ratings Available’ or blank space."
    }
  ],
  "breadcrumbs": [
    {
      "text": "Components/"
    }
  ],
  "sandboxData": {
    "components": "CdrRating"
  },
  "versions": [
    {
      "components": [
        {
          "name": "CdrRating",
          "api": {
            "props": [
              {
                "name": "rating",
                "type": "number",
                "default": "0",
                "required": "true",
                "description": "Sets the rating values between 0 and 5. Required."
              },
              {
                "name": "count",
                "type": "number",
                "default": "0",
                "required": "false",
                "description": "Displays the total number of reviews."
              },
              {
                "name": "compact",
                "type": "boolean",
                "default": "false",
                "required": "false",
                "description": "Hides the word 'Reviews' if true."
              },
              {
                "name": "href",
                "type": "string",
                "default": "N/A",
                "required": "false",
                "description": "Sets the rating component (icons and text) to display inline and wraps them in an anchor tag."
              },
              {
                "name": "size",
                "type": "string",
                "default": "medium",
                "required": "false",
                "description": "Sets the rating component size; Breakpoint values are: xs, sm, md, and lg. Examples: { 'small' | 'medium' | 'large' | 'large@sm' }"
              },
            ]
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
<cdr-doc-alert icon="info"><strong>REI.com is currently using Bazaarvoice for ratings.</strong>Styles documented here may not reflect the current styles provided by the tool. Reach out in <cdr-link href="https://rei.slack.com/messages/CA58YCGN4" target="_blank"
>#cedar-user-support</cdr-link> for further guidance or questions.</cdr-doc-alert>

## Default

Shows review rating with up to 5 stars highlighted. If rating is zero, star icons are displayed using the grey outline star icon.

<cdr-doc-example-code-pair repository-href="/src/components/rating" :sandbox-data="$page.frontmatter.sandboxData">

```html
<div>
  <cdr-rating rating="3.33333" count="100" class="cdr-mb-space-one-x" />
  <cdr-rating rating="0" count="0" />
</div>
```

</cdr-doc-example-code-pair>

## Linked

Creates a link to the corresponding review content if on the same page.

<cdr-doc-example-code-pair repository-href="/src/components/rating" :sandbox-data="$page.frontmatter.sandboxData">

```html
<div>
  <p>
    <cdr-rating href="https://rei.com" rating="3.33333" count="100" />
  </p>
  <p>
    <cdr-rating href="https://rei.com" rating="0" count="0" />
  </p>
</div>
```

</cdr-doc-example-code-pair>

## Compact

Removes the word "Reviews" from the label for limited space layout.

<cdr-doc-example-code-pair repository-href="/src/components/rating" :sandbox-data="$page.frontmatter.sandboxData">

```html
<div>
  <cdr-rating rating="3.33333" count="100" compact class="cdr-mb-space-one-x" />
  <cdr-rating rating="0" count="0" compact />
</div>
```

</cdr-doc-example-code-pair>

## Sizing

Change size for the star icon and text. Default size is medium.

<cdr-doc-example-code-pair repository-href="/src/components/rating" :sandbox-data="$page.frontmatter.sandboxData">

```html
<div>
  <cdr-rating size="small" rating="3.33333" count="100" compact class="cdr-mb-space-one-x" />
  <cdr-rating size="medium" rating="3.33333" count="100" compact class="cdr-mb-space-one-x" />
  <cdr-rating size="large" rating="3.33333" count="100" compact class="cdr-mb-space-one-x" />
  <cdr-rating size="small" rating="0" count="0" compact class="cdr-mb-space-one-x" />
  <cdr-rating size="medium" rating="0" count="0" compact class="cdr-mb-space-one-x" />
  <cdr-rating size="large" rating="0" count="0" compact class="cdr-mb-space-one-x" />
</div>
```

</cdr-doc-example-code-pair>

## Accessibility

To ensure that usage of this component complies with accessibility guidelines:

- Use Rating component only on light backgrounds

<br/>

This component has compliance with WCAG guidelines by:

- Providing screen reader text that reads “Rated { rounded } out of 5 with { count }”
- Using text color with a Level AA contrast ratio of 4.5:1 contrast between the text color and the background (only when displayed on light backgrounds)
- Text links displays:
  - Underline text style for mouse usage
  - Focus state for keyboard usage

<hr>

# Guidelines

## Use When

- Providing a tool for comparing others’ opinions

## Don't Use When

- Displaying a range of data

## Content

- Always display the number of reviews next to the star rating
- Use accompanying text label ‘Reviews’ when space allows


## Behavior

- Rating appears with grey outlined stars when no reviews are available
- Link to the corresponding review content if on the same page

### Do / Don’t

<br/>

<do-dont :examples="$page.frontmatter.stars" />

<do-dont :examples="$page.frontmatter.number" />

<do-dont :examples="$page.frontmatter.none" />

## Resources

- [Icons](../icon/)
- [Iconography](../../foundation/iconography/)

<hr>

# API

## Props

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

## Usage

By default the **CdrRating** component renders the icons in medium size (24px) with the total number of reviews.

### Rating Values
- The count for reviews will always be visible
- Ratings are rounded to the nearest .25 because icons are represented in 25% increments
- Screen reader text is provided which reads, “Rated [ rounded ] out of 5 with [ count ] reviews”


</cdr-doc-table-of-contents-shell>
