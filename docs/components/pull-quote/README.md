---
{
    "title": "Pull Quote",
    "layout": "LayoutComponent",
    "title_metadata": "Quote, CdrQuote, cdr-quote",
    "summary": "Short excerpt taken from the main body of text to give a dominant position",
    "see_also": [
      {
        "text": "See Also"
      },
      {
         "text": "Block Quote",
         "href": "/components/block-quote/"
      },
      {
        "text": "Paragraph",
        "href": "/components/paragraph/"
      }
    ],
    "indenting": [
        {
            "type": "do",
            "image": "pull-quote/quotes_pull__do__9-16.png",
            "ratio": "16-9",
            "alt": "Image showing proper pull quote use.",
            "caption": "position the quote near the surrounding text."
        },
        {
            "type": "dont",
            "image": "pull-quote/quotes_pull__indent_text__dont_9-16.png",
            "ratio": "16-9",
            "alt": "Image showing improper pull quote use in an article",
            "caption": "use for indenting text content."
        }
    ],
    "position": [
        {
            "type": "do",
            "image": "pull-quote/quotes_pull__do__9-16.png",
            "ratio": "16-9",
            "alt": "Image showing proper pull quote use.",
            "caption": "position the quote near the surrounding text."
        },
        {
            "type": "dont",
            "image": "pull-quote/quotes_pull__random__dont_9-16.png",
            "ratio": "16-9",
            "alt": "Image showing improper pull quote use in an article",
            "caption": "position quotes in a random location on the page."
        }
    ],
    "too_many": [
        {
            "type": "do",
            "image": "pull-quote/quotes_pull__do__9-16.png",
            "ratio": "16-9",
            "alt": "Image showing proper pull quote use.",
            "caption": "use for emphasizing content or additional content."
        },
        {
            "type": "dont",
            "image": "pull-quote/quotes_pull__too_many__dont_9-16.png",
            "ratio": "16-9",
            "alt": "Image showing too many pull quotes in an article",
            "caption": "use too many pull quotes."
        }
    ],
    "breadcrumbs": [
        {
            "text": "Components/",
            "href": "#"
        }
    ],
    "versions": [{
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
                        "description": "Sets the pull quote body text"
                    },
                    {
                        "name": "citation",
                        "type": "string",
                        "default": "",
                        "required": "false",
                        "description": "Sets the pull quote attribution text"
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

Default pull quote can be used with the following HTML tags: `<p>`, `<div>`, `<aside>`. For XS breakpoint, a border is below pull quote and font size is smaller.

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.08.1/src/components/quote" sandbox-href="https://codesandbox.io/s/q722z00mk4">

```html
<div>
  <cdr-quote
        tag="aside"
        modifier="pull"
        summary="Stewardship is a choice and a mindset. It means that we look at our business differently, an we take individual responsibility for making a positive, lasting impact."
      />
</div>
```

</cdr-doc-example-code-pair>

## Accessibility

To ensure that usage of this component complies with accessibility guidelines:

- All recommendations listed for [Paragraphs](/components/paragraphs/?active-link=accessibility) component apply to this component
- Do not use this component to indent text. Screen readers use the `<blockquote>` element to:
  - Provide semantic understanding of page content by announcing blockquote as quote
  - Define a sectioning root in HTML5, which means that any  `<h1>` - `<h6>`  elements it contains don’t become part of the document’s outline

This component has compliance with WCAG guidelines by:

- Setting the `aria-hidden="true"` so the pull quote will not be conveyed to a screen reader


</cdr-doc-table-of-contents-shell>
</template>

<template slot="Design Guidelines">
  <cdr-doc-table-of-contents-shell tab-name="Design Guidelines">

## Use When

- Attracting the user’s attention to article text 
- Breaking up a large body of text
- Providing the reader with visual markers 
- Maintaining a sense of sequence and place

### Don't use when

- Displaying a citation reference. Instead, use [Block Quote](/components/block-quote/)
- Displaying for a decorative treatment only

## Behavior

Use a pull quote for emphasizing content that has a close and significant relationship with the surrounding text and will help users to visually scan the page

<br/>

<do-dont :examples="$page.frontmatter.indenting" />

<do-dont :examples="$page.frontmatter.too_many" />

<do-dont :examples="$page.frontmatter.position" />

## Responsiveness

When a pull quote is displayed in at XS breakpoints, the left border will appear below the pull quote and will use a smaller font size.

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

Install the `CdrQuote` package using `npm` in your terminal:

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
     tag="aside"
     modifier="pull"
     summary="As a co-op, we’re a different kind of company.
     We put purpose before profits and act with the long-term
     interests of our members in mind. Being a co-op also means
     we engage with our community and believe in collective
     accountability."
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
- Git commit reference [(1531860)](https://github.com/rei/rei-cedar/commit/f53e0b729fb8ee968f912f9af4457f74da6e8ed8)

</template>
</cdr-doc-tabs>
