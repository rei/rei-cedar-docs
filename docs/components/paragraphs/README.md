---
{
  "title": "Paragraphs",
  "layout_type": "LayoutComponent",
  "summary": "Text container used for any text element such as paragraphs, headings, and lists. Establishes vertical spacing and optimizes the reading experience",
  "title_metadata": "CdrText",
  "see_also": [
    {
      "text": 'See Also'
    },
    {
      "text": 'Typography',
      "href": '../../foundation/typography/'
    },
    {
      "text": 'Caption',
      "href": '../caption/'
    },
    {
      "text": 'Block Quote',
      "href": '../block-quote/'
    },
    {
      "text": 'Headings',
      "href": '../headings/'
    }
  ],
  "width": [
    {
      "type": "do",
      "image": "paragraphs/paragraphs_characterlength_text_do.png",
      "ratio": "4-3",
      "alt": "Image showing proper link usage",
      "caption": "set max-width for paragraphs."
    },
    {
      "type": "dont",
      "image": "paragraphs/paragraphs_characterlength_text_dont.png",
      "ratio": "4-3",
      "alt": "Image showing mixed button sizes",
      "caption": "allow text to span beyond max-width for paragraphs."
    }
  ],
  "backgrounds": [
    {
      "type": "do",
      "image": "paragraphs/paragraphs_standardfont_text_do.png",
      "ratio": "4-3",
      "alt": "The link in this copy uses the cdr-link component, and, so correctly uses an underline",
      "caption": "use standard font color."
    },
    {
      "type": "dont",
      "image": "paragraphs/paragraphs_reversedfont_text_dont.png",
      "ratio": "4-3",
      "alt": "The default link in body copy incorrectly does not use an underline",
      "caption": "display long passages of text  on dark backgrounds. "
    }
  ],
  "sandboxData": {
    "components": "CdrText"
  },
  "versions": [
    {
      "components": [
        {
          "name": "CdrLink",
          "api": {
            "props": [
              {
                "name": "tag",
                "type": "string",
                "default": "'p'",
                "description": "Sets valid HTML element tag."
              },
               {
                "name": "modifier",
                "type": "string",
                "default": "N/A",
                "description": "Modifies the style variant for this component. Possible values: {  body  }",
                "alert": {
                  "type": "deprecated",
                  "description": "the body variant has been deprecated in v3.0.0."
                },
              }
            ],
            "slots": [
              {
                "name": "default",
                "description": "Sets the innerHTML for CdrText. This includes text and html markup."
              }
            ]
          }
        }
      ],
      "version": "0.1.0"
    }
  ]
}
---

<cdr-doc-tabs>
<template slot="Overview">
<cdr-doc-table-of-contents-shell>

## Default

Used as default font style for all text information. Also known as body-default in UI ToolKit.


<cdr-doc-example-code-pair repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData" >

```html
  <cdr-text>Pack everything you need with this handy checklist! We include the 10 essentials and more for comfort in the backcountry.</cdr-text>
```

</cdr-doc-example-code-pair>

## Accessibility

To ensure that usage of this component complies with accessibility guidelines:

- Text container does not exceed 634px or line length does not exceed more than 75 characters
- Minimize use of reversed-out body copy because it’s harder to read
- When possible, use the first sentence as an introduction to the paragraph. With screen readers, users can listen to the first sentence and then jump to the next paragraph
- Break long pages into shorter sections by organizing content into well-defined groups or chunks

<br/>

This component has compliance with following WebAIM’s accessibility guidelines:
- [WCAG SC 1.4.8: Visual presentation](https://www.w3.org/TR/WCAG20/#visual-audio-contrast-visual-presentation): Cedar Design System text component provides for spacing for:
  - Within paragraphs, line spacing is at least 1.5 times font height

 <!--  - Between paragraphs, at least 1.5 times larger than the line spacing -->

<!-- <cdr-img class="cdr-doc-article-img" alt="paragraphs_spacing_graphic_example" :src="$withBase(`/paragraphs/paragraphs_spacing_graphic_example.png`)" /> -->

</cdr-doc-table-of-contents-shell>
</template>

<template slot="Guidelines">
<cdr-doc-table-of-contents-shell>

## Use When

- Displaying articles for long-form content, such as Expert Advice articles or Co-op Journal entries
- Displaying member or legal messages, such as on PDP pages
- Displaying product descriptions
- Displaying customer reviews, such as on PDP pages

## Don't Use When

- Displaying form inputs. Instead, use [Inputs](../input/)
- Displaying alert messages. Instead, use Alerts
- Listing product features. Instead, use [Lists](../lists/)

## The Basics

Roboto is used for paragraph text because it is easy to scan. It is primarily used for:
- Legal messages on PDP pages
- Shipping messages on PDP pages
- Customer reviews on PDP pages
- Class or event descriptions
- REI Adventure descriptions
- Editorial copy on PDP pages
- Long articles on Expert Advice or Co-op Journal pages

## Content

- Use adjacent text, a definition list, a glossary, or other method to supplement words that are ambiguous
- Abbreviations:
  - Follow [REI Copy Guidelines](http://pcempub.rei.com/content/asset-guides/en_us/site/brand-assets-guides/copy/master-brand-copy-guides.html) for dates, time, dimensions, measurements, electrical units, and geographic reference
  - Expand abbreviations by explaining the definition the first time it is used
  - Use the `<abbr>` element, or link to a definition or glossary
- For ease of reading, readability level should be about Grade 7. To test the body text, use the [Hemingway Editor](http://www.hemingwayapp.com/). For more information, view the [Help information](http://www.hemingwayapp.com/help.html)
- When possible, write the first sentence as an introduction to the paragraph. With screen readers, users can jump from paragraph to paragraph, listening to the first sentence or two before moving on to the next paragraph

## Behavior

- Max-width for paragraph containers is 634px or line length should not exceed 75 characters per line.
- Use standard (dark) font color on light background for article text

### Do / Don’t

<do-dont :examples="$page.frontmatter.width" />

<do-dont :examples="$page.frontmatter.backgrounds" />

## Resources

- Article: Which Are More Legible: [Serif or Sans Serif Typefaces?](http://alexpoole.info/blog/which-are-more-legible-serif-or-sans-serif-typefaces/)
- WebAIM Article: [Evaluating Cognitive Web Accessibility](https://webaim.org/articles/evaluatingcognitive/)

</cdr-doc-table-of-contents-shell>
</template>

<template slot="API">
<cdr-doc-table-of-contents-shell>

## Props

This component will bind any attribute that a [native HTML paragraph element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p) accepts.

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

## Slots

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />

## Usage

The **CdrText** component allows for styling any html element with available text styles. Visual style and semantic meaning are managed independently by providing:

* Element to the `tag` prop
* Style to the `modifier` prop

<br />

By default the **CdrText** component renders as a paragraph, this default paragraph is intended for most standard use cases.

```vue
  <cdr-text>
    This is a standard paragraph, intended for non long form copy usage.
  </cdr-text>
```

### Paragraph spacing
By default there is no spacing between paragraphs. The space utility classes are
provided to increase legibility

```vue
  <cdr-text
    class="cdr-mb-space-one-x"
  >
   This paragraph is adding a bottom marging to provide space between it and the paragraph below
  </cdr-text>
  <cdr-text>
   This paragraph is last and does not need the additional utility class
  </cdr-text>
```

</cdr-doc-table-of-contents-shell>
</template>

</cdr-doc-tabs>
