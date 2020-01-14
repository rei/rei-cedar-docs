---
{
  "title": "Pull Quote",
  "layout_type": "LayoutComponent",
  "title_metadata": "Quote, CdrQuote",
  "summary": "Short excerpt taken from the main body of text to give a dominant position",
  "see_also": [
    {
      "text": "See Also"
    },
    {
      "text": "Block Quote",
      "href": "../block-quote/"
    },
    {
      "text": "Paragraphs",
      "href": "../paragraphs/"
    }
  ],
  "indenting": [
    {
      "type": "do",
      "image": "pull-quote/quotes_pull_indent_do.png",
      "ratio": "4-3",
      "alt": "Image showing proper pull quote use.",
      "caption": "position the quote near the surrounding text."
    },
    {
      "type": "dont",
      "image": "pull-quote/quotes_pull_indent_dont.png",
      "ratio": "4-3",
      "alt": "Image showing improper pull quote use in an article",
      "caption": "use for indenting text content."
    }
  ],
  "position": [
    {
      "type": "do",
      "image": "pull-quote/quotes_pull_position_do.png",
      "ratio": "4-3",
      "alt": "Image showing proper pull quote use.",
      "caption": "relate the quote to the surrounding text."
    },
    {
      "type": "dont",
      "image": "pull-quote/quotes_pull_position_dont.png",
      "ratio": "4-3",
      "alt": "Image showing improper pull quote use in an article",
      "caption": "position quotes in a random location on the page."
    }
  ],
  "too_many": [
    {
      "type": "do",
      "image": "pull-quote/quotes_pull_too_many_do.png",
      "ratio": "4-3",
      "alt": "Image showing proper pull quote use.",
      "caption": "use for emphasizing content or additional content."
    },
    {
      "type": "dont",
      "image": "pull-quote/quotes_pull_too_many_dont.png",
      "ratio": "4-3",
      "alt": "Image showing too many pull quotes in an article",
      "caption": "use too many pull quotes."
    }
  ],
  "breadcrumbs": [
    {
      "text": "Components/"
    }
  ],
  "sandboxData": {
    "components": "CdrQuote"
  },
  "versions": [
    {
      "components": [
        {
          "name": "CdrQuote",
          "api": {
            "props": [
              {
                "name": "tag",
                "type": "enum",
                "default": "`blockquote`",
                "required": "false",
                "description": "Sets the ‘tag’ attribute for cdr-quote to define the root HTML element. Possible values: {  ‘blockquote’  |  ‘aside’  |  ‘q’  |  ‘div’  }"
              },
              {
                "name": "modifier",
                "type": "string",
                "default": "",
                "required": "false",
                "description": "Modifies the style variant for this component. Possible values: {  ‘pull’  }"
              },
              {
                "name": "role",
                "type": "string",
                "default": "",
                "required": "false",
                "description": "Sets the ‘role’ attribute to ‘presentation’ when creating a pull quote. Possible values: {  ‘presentation’  }"
              },
              {
                "name": "aria-hidden",
                "type": "string",
                "default": "",
                "required": "false",
                "description": "Sets the ‘aria-hidden’ attribute to ‘true’ when creating a pull quote. Possible values: {  ‘true’  }"
              },
              {
                "name": "summary",
                "type": "string",
                "default": "",
                "required": "false",
                "description": "Sets the pull quote body text."
              },
              {
                "name": "citation",
                "type": "string",
                "default": "",
                "required": "false",
                "description": "Sets the pull quote attribution text."
              }
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
## Default (Medium)

Default pull quote can be used with the following HTML tags: `<p>`, `<div>`, `<aside>`. For XS breakpoint, a border is added below the pull quote and the font size is smaller.

<cdr-doc-example-code-pair repository-href="/src/components/quote" :sandbox-data="$page.frontmatter.sandboxData">

```html
<div>
  <cdr-quote
        tag="aside"
        modifier="pull"
        summary="Never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it's the only thing that ever has."
      />
</div>
```

</cdr-doc-example-code-pair>

## Accessibility

To ensure that usage of this component complies with accessibility guidelines:

- All recommendations listed for [Paragraphs](../paragraphs/#accessibility) component apply to this component
- Do not use this component to indent text. Screen readers use the `<blockquote>` element to:
  - Provide semantic understanding of page content by announcing blockquote as quote
  - Define a sectioning root in HTML5, which means that any  `<h1>` - `<h6>`  element doesn't become part of the document’s outline

<br>

This component has compliance with WCAG guidelines by:

- Setting the `aria-hidden="true"` so that the pull quote cannot be read by a screen reader

<hr>

# Guidelines

## Use When

- Attracting the user’s attention to article text
- Breaking up a large body of text
- Providing the reader with visual markers
- Maintaining a sense of sequence and place

## Don't Use When

- Displaying a citation reference. Instead, use [Block Quote](../block-quote/)
- Displaying for a decorative treatment only

## The Basics

Use a pull quote for emphasizing content that has a close and significant relationship with the surrounding text and will help users to visually scan the page.

<br/>

<do-dont :examples="$page.frontmatter.indenting" />

<do-dont :examples="$page.frontmatter.too_many" />

<do-dont :examples="$page.frontmatter.position" />

## Responsiveness

When a pull quote is displayed at XS breakpoint, the left border will appear below the pull quote and will use a smaller font size.

<hr>

# API

## Props

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

</cdr-doc-table-of-contents-shell>
