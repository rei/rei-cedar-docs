---
{
    "title": "Block Quote",
    "layout": "LayoutComponent",
    "title_metadata": "Quote, CdrQuote",
    "summary": "Short excerpt with an external citation and citation URL that is set off from the main body of text",
    "see_also": [
      {
        "text": "See Also"
      },
      {
         "text": "Pull Quote",
         "href": "../pull-quote/"
      },
      {
        "text": "Paragraphs",
        "href": "../paragraphs/"
      }
    ],
    "position": [
        {
            "type": "do",
            "image": "block-quote/quotes_block__do__9-16.png",
            "ratio": "9-16",
            "alt": "Image showing proper block quote use.",
            "caption": "position the quote near the surrounding text."
        },
        {
            "type": "dont",
            "image": "block-quote/quotes_block__random__dont_9-16.png",
            "ratio": "9-16",
            "alt": "Image showing random block quotes in an article",
            "caption": "position quotes in a random location on the page."
        }
    ],
    "indenting": [
        {
            "type": "do",
            "image": "block-quote/quotes_block__do__9-16.png",
            "ratio": "9-16",
            "alt": "Image showing proper block quote use.",
            "caption": "use for emphasizing content or additional content."
        },
        {
            "type": "dont",
            "image": "block-quote/quotes_block__indent_text__dont_9-16.png",
            "ratio": "9-16",
            "alt": "Image showing random block quotes in an article",
            "caption": "use for indenting text content."
        }
    ],
    "too_many": [
        {
            "type": "do",
            "image": "block-quote/quotes_block__do__9-16.png",
            "ratio": "9-16",
            "alt": "Image showing proper block quote position.",
            "caption": "position quotes so users can visually scan the page."
        },
        {
            "type": "dont",
            "image": "block-quote/quotes_block__too_many__dont_9-16.png",
            "ratio": "9-16",
            "alt": "Image showing too many block quotes in an article",
            "caption": "use too many block quotes."
        }
    ],
    "citation": [
        {
            "type": "do",
            "image": "block-quote/quotes_block__citation__do_3-2.png",
            "ratio": "3-2",
            "alt": "Image showing proper block citation.",
            "caption": "provide a citation."
        },
        {
            "type": "dont",
            "image": "block-quote/quotes_block__citation__dont_3-2.png",
            "ratio": "3-2",
            "alt": "Image showing too improper citation style",
            "caption": "emphasize the citation."
        }
    ],

    "breadcrumbs": [
        {
        "text": "Components/"
    }],
    "versions": [{
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
                "installation": [
                    {
                        "name": "@rei/cdr-quote",
                        "type": "Node module package",
                        "description": "Import the component into your project"
                    },
                    {
                        "name": "cdr-quote.css",
                        "type": "Style sheet",
                        "description": "Component specific styles"
                    }
                ]
            }
        }],
        "version": "1.0.0"
    }]
}
---

<cdr-doc-tabs>
<template slot="Overview">
<cdr-doc-table-of-contents-shell tab-name="Overview">

## Default

Default block quote can be used with the following HTML tags: `<p>`, `<div>`, `<aside>`. This is responsive with styles for XS breakpoint

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.09.2/src/components/quote" sandbox-href="https://codesandbox.io/s/q722z00mk4">

```html
<div>
  <cdr-quote
        modifier="block"
        summary="Stewardship is a choice and a mindset. It means that we look at our business differently, and we take individual responsibility for making a positive, lasting impact."
        citation="Jerry Stritzke, REI President and CEO"
      />
</div>
```

</cdr-doc-example-code-pair>

## Accessibility

To ensure that usage of this component complies with accessibility guidelines:

- All recommendations listed for [Paragraphs](../paragraphs/?active-link=accessibility) component apply to this component
- Do not use this component to indent text. Screen readers use the `<blockquote>` element to:
  - Provide semantic understanding of page content by announcing blockquote as quote
  - Define a sectioning root in HTML5, which means that any  `<h1>` - `<h6>`  elements it contains don’t become part of the document’s outline
- To make the blockquote content accessible, use the `<cite>` attribute with a valid URL

<br>

This component has compliance with WCAG guidelines by:

- Adding a `<cite>` element to refer to the source of the quote

</cdr-doc-table-of-contents-shell>
</template>

<template slot="Design Guidelines">
  <cdr-doc-table-of-contents-shell tab-name="Design Guidelines">

## Use when

- Highlighting valuable customer feedback
- Encouraging a customer to try out an experience or product

### Don't use when

- Pulling a direct quote from an article. Instead, use [Pull Quote](../pull-quote/)
- Displaying for a decorative treatment only

## Content

To make the block quote content accessible, following these rules:

- Must be quoted from another source, whose address, if it has one, may be cited in the `<cite>` attribute
- If the `<cite>` attribute is present:
  - Must be a valid URL
  - Link only to canonical end-state URLs with no parameter appended
  - Capitalize the cited source title the same as the author does
- For more information, see [REI Confluence Accessible Patterns: Quotes](https://confluence.rei.com/display/accessibility/Quote)

## Behavior

Use a block quote for emphasizing content that has a close and significant relationship with the surrounding text and will help users to visually scan the page.

<br/>

<do-dont :examples="$page.frontmatter.position" />

<do-dont :examples="$page.frontmatter.indenting" />

<do-dont :examples="$page.frontmatter.too_many" />

<br>

Provide a citation to the external source and if available, the URL address.

<br>

<do-dont :examples="$page.frontmatter.citation" />

## Responsiveness

When block quotes are displayed in at XS breakpoints, the text will use a smaller font size.

  </cdr-doc-table-of-contents-shell>
</template>

<template slot="API">
<cdr-doc-table-of-contents-shell>

## Props

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

## Installation

Resources are available within the [CdrQuote package:](https://www.npmjs.com/package/@rei/cdr-quote)

<cdr-doc-api type="installation" />

- Component: `@rei/cdr-quote`
- Component styles: `cdr-quote.css`

<br/>

To incorporate the required assets for a component, use the following steps:

### 1. Install using NPM

Install the **CdrQuote** package using `npm` in your terminal:

_Terminal_

```bash
import "@rei/cdr-quote/dist/cdr-quote.css";
```

### 2. Import dependencies

_main.js_

```javascript
// import your required CSS.
import "@rei/cdr-link/dist/cdr-quote.css";
```

### 3. Add component to a template

_local.vue_

```vue
<template>
  <cdr-quote
     cite="https://www.rei.com/stewardship"
     summary="As a co-op, we’re a different kind of company.
     We put purpose before profits and act with the long-term
     interests of our members in mind. Being a co-op also means
     we engage with our community and believe in collective
     accountability."
    citation="REI Stewardship"
 />
</template>

<script>
import { CdrQuote } from '@rei/cdr-quote';
export default {
  ...
  components: {
     CdrQuote
  }
}
</script>
```

</cdr-doc-table-of-contents-shell>
</template>

<template slot="History">

## 1.0.0

- Includes support for Block Quote component
- Includes support for Pull Quote component
- Link to full dev [changelog](https://github.com/rei/rei-cedar/blob/18.09.2/src/components/quote/CHANGELOG.md)

</template>
</cdr-doc-tabs>
