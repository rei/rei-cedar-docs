---
{
   "title": "Paragraphs",
   "layout": "LayoutComponent",
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
                "description": "Modifies the style variant for this component. Possible values: {  body  }"
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

<cdr-doc-example-code-pair :background-toggle="false" repository-href="/src/components/text" sandbox-href="https://codesandbox.io/s/10lx8v0qm4" >

```html
  <cdr-text>Pack everything you need with this handy checklist! We include the 10 essentials and more for comfort in the backcountry.</cdr-text>
```

</cdr-doc-example-code-pair>

## Body

Used for editorial content such as long-form articles like Expert Advice pages or editorial content on PDP pages.  Also known as body-editorial in UI ToolKit.

<cdr-doc-example-code-pair :background-toggle="false" repository-href="/src/components/text" sandbox-href="https://codesandbox.io/s/10lx8v0qm4">

```html
  <div>
    <cdr-text modifier="body">
      You don’t want to have to cut your day of skiing or snowboarding short because of tired legs. So before you gather your friends and family and purchase your lift tickets, it’s important to follow a workout plan that will get you fit for the slopes.
    </cdr-text>
    <cdr-text modifier="body">
      The following workout guide is designed to help you focus on the most essential aspects of fitness for completing a ski or snowboard trip: cardiovascular fitness, strength and balance. Remember, you should always start your ski day with a few easy warm-up runs, no matter how skilled you are.
    </cdr-text>
  </div>
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
  - Between paragraphs, at least 1.5 times larger than the line spacing

<cdr-img class="cdr-doc-article-img" alt="paragraphs_spacing_graphic_example" :src="$withBase(`/paragraphs/paragraphs_spacing_graphic_example.png`)" />

</cdr-doc-table-of-contents-shell>
</template>

<template slot="Design Guidelines">
<cdr-doc-table-of-contents-shell>

## Use When

- Displaying articles for long-form content, such as Expert Advice articles or Co-op Journal entries
- Displaying member or legal messages, such as on PDP pages
- Displaying product descriptions
- Displaying customer reviews, such as on PDP pages

### Don’t Use When

- Displaying form inputs. Instead, use [Inputs](../input/)
- Displaying alert messages. Instead, use Alerts
- Listing product features. Instead, use [Lists](../lists/)

## Foundations

Roboto is used for paragraph text because it is easy to scan. It is primarily used for:
- Legal messages on PDP pages
- Shipping messages on PDP pages
- Customer reviews on PDP pages
- Class or event descriptions
- REI Adventure descriptions

Sentinel carries a stronger brand impression with other brand material, and is primarily used for:
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

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

## Slots

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />

## Installation

Resources are available within the [CdrText package](https://www.npmjs.com/package/@rei/cdr-text)

- Component: `@rei/cdr-text`

<br />

To incorporate the required assets for a component, use the following steps:

### 1. Install using NPM 

Install the **CdrText** package using `npm` in your terminal:

_Terminal_

```bash
npm i -S @rei/cdr-text
```

### 2. Import Dependencies

_main.js_

```javascript
// import your required CSS.
import "@rei/cdr-assets/dist/cdr-core.css";
import "@rei/cdr-assets/dist/cdr-fonts.css";
```

### 3. Add Component to a Template

_local.vue_

```vue
<template>
  <cdr-text
    modifier="body"
  >
    For long-form content like expert advice articles or co-op journal entries.
  </cdr-text>
</template>

<script>
import { CdrText } from '@rei/cdr-text';
export default {
  ...
  components: {
     CdrText  
  }
}
</script>
```

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

When rendering long form copy add the `body` modifier.

```vue
  <cdr-text modifier="body">
    This paragraph is intended for long form copy usage.  
  </cdr-text>
```

Define custom tags by applying a specific `cdr-text` style with modifiers to it.

```vue
  <cdr-text
    tag="span"
    modifier="body">
    This span now renders as a long form copy paragraph that displays inline.
  </cdr-text>
```

</cdr-doc-table-of-contents-shell>
</template>

<template slot="History">

## 1.0.0

- Enables a consistent visual paragraph style applied to any HTML element using the `tag` property
- By default, results in a generic `<p>` tag
- Visual style is applied with the `modifier` property and supports:
  - **Default**:  Used as default font style. It may be used for paragraphs, lists, or any basic information
  - **Body**: Intended for long-form articles like Expert Advice pages or editorial content on PDP pages

</template>
</cdr-doc-tabs>
