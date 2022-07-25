---
{
  "title": "Block Quote",
  "layout_type": "LayoutComponent",
  "title_metadata": "Quote, CdrQuote",
  "summary": "Short excerpt with an external citation and citation URL that is set off from the main body of text",
  "component_location": "https://github.com/rei/rei-cedar/tree/next/src/components/quote",
  "see_also": [
    {
      "text": "See Also"
    },
    {
      "text": "Pull Quote",
      "href": "../pull-quote/"
    },
    {
      "text": "Text",
      "href": "../text/"
    }
  ],
  "position": [
    {
      "type": "do",
      "image": "block-quote/quotes_block_position_do.png",
      "ratio": "3-2",
      "alt": "A box representing a webpage shows a block quote appropriately placed near the surrounding text.",
      "caption": "position the quote near the surrounding text."
    },
    {
      "type": "dont",
      "image": "block-quote/quotes_block_position_dont.png",
      "ratio": "3-2",
      "alt": "A box representing a webpage shows a block quote positioned inappropriately at random.",
      "caption": "position quotes in a random location on the page."
    }
  ],
  "indenting": [
    {
      "type": "do",
      "image": "block-quote/quotes_block_indent_do.png",
      "ratio": "3-2",
      "alt": "A box representing a webpage shows a block quote intended to add emphasis or additional content to an article.",
      "caption": "use for emphasizing content or additional content."
    },
    {
      "type": "dont",
      "image": "block-quote/quotes_block_indent_dont.png",
      "ratio": "3-2",
      "alt": "A box representing a webpage shows a block quote inappropriately used to indent content.",
      "caption": "use for indenting text content."
    }
  ],
  "too_many": [
    {
      "type": "do",
      "image": "block-quote/quotes_block_too_many_do.png",
      "ratio": "3-2",
      "alt": "A box representing a webpage shows a block quote positioned appropriately so users can easily scan the page.",
      "caption": "position quotes so users can visually scan the page."
    },
    {
      "type": "dont",
      "image": "block-quote/quotes_block_too_many_dont.png",
      "ratio": "3-2",
      "alt": "A box representing a webpage shows too many block quotes used in a single article.",
      "caption": "use too many block quotes."
    }
  ],
  "citation": [
    {
      "type": "do",
      "image": "block-quote/quotes_block_citation_do.png",
      "ratio": "3-2",
      "alt": "Image showing proper block citation.",
      "caption": "provide a citation."
    },
    {
      "type": "dont",
      "image": "block-quote/quotes_block_citation_dont.png",
      "ratio": "3-2",
      "alt": "Image showing too improper citation style",
      "caption": "emphasize the citation."
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
                "type": "string",
                "default": "`blockquote`",
                "required": "false",
                "description": "Sets the ‘tag’ attribute for cdr-quote to define the root HTML element. Possible values: {  ‘blockquote’  |  ‘aside’  |  ‘q’  |  ‘div’  }"
              },
              {
                "name": "summary",
                "type": "string",
                "default": "",
                "required": "false",
                "description": "Sets the quote body text."
              },
              {
                "name": "cite",
                "type": "string",
                "default": "",
                "required": "false",
                "description": "When the ‘tag’ prop is set to ‘blockquote’ provide a URL to the quote’s source. This does not render but is available to screen readers and search engines."
              },
              {
                "name": "citation",
                "type": "string",
                "default": "",
                "required": "false",
                "description": "Sets the quote attribution text."
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
## Overview

### Default (Medium)

Default block quote can be used with the following HTML tags: `<p>`, `<div>`, `<aside>`. This is responsive with styles for XS breakpoint.

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData">

```html
<div>
  <cdr-quote
        modifier="block"
        summary="Never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it's the only thing that ever has."
        citation="Margaret Mead"
      />
</div>
```

</cdr-doc-example-code-pair>

## Accessibility

To ensure that usage of this component complies with accessibility guidelines:

- All recommendations listed for [Paragraphs](../text/#paragraphs) apply to this component
- Do not use this component to indent text. Screen readers use the `<blockquote>` element to:
  - Provide semantic understanding of page content by announcing blockquote as quote
  - Define a sectioning root in HTML5, which means that any  `<h1>` - `<h6>`  element doesn't become part of the document’s outline
- To make the blockquote content accessible, use the `<cite>` attribute with a valid URL

<br>

This component has compliance with WCAG guidelines by:

- Adding a `<cite>` element to refer to the source of the quote

<hr>

## Guidelines

### Use When

- Highlighting valuable customer feedback
- Encouraging a customer to try out an experience or product

### Don't Use When

- Pulling a direct quote from an article. Instead, use [Pull Quote](../pull-quote/)
- Displaying for a decorative treatment only

### The Basics

Use a block quote for emphasizing content that has a close and significant relationship with the surrounding text and will help users to visually scan the page.

<br/>

<do-dont :examples="$page.frontmatter.position" />

<do-dont :examples="$page.frontmatter.indenting" />

<do-dont :examples="$page.frontmatter.too_many" />

<br>

Provide a citation to the external source and if available, the URL address.

<br>

<do-dont :examples="$page.frontmatter.citation" />

### Content

To make the block quote content accessible, follow these rules:

- Must be quoted from another source, whose address, if it has one, may be cited in the `<cite>` attribute
- If the `<cite>` attribute is present:
  - Must be a valid URL
  - Link only to canonical end-state URLs with no parameter appended
  - Capitalize the cited source title the same as the author does
- For more information, see [REI Accessible Patterns: Quotes](https://confluence.rei.com/display/accessibility/Quote)


### Responsiveness

When block quotes are displayed at XS breakpoint, the text will use a smaller font size.

<hr>

## API

<cdr-icon class="cdr-doc-code-snippet__action-icon" use="#brand-github"/> View it on Github: 
<cdr-link :href="$page.frontmatter.component_location">{{$page.frontmatter.component_location}}</cdr-link>

### Props

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

</cdr-doc-table-of-contents-shell>
