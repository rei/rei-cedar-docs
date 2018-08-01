---
{
   "title": "Paragraph",
   "layout": "LayoutComponent",
   "summary": "The HTML <p> element contains text elements such as paragraphs, headings, and lists to establish vertical spacing and optimize the reading experience.",
   "title_metadata": "Paragraph, cdrText",
	  "width": [
      {
        "type": "do",
        "image": "paragraph/paragraphs_characterlength_text_do.png",
        "ratio": "4-3",
        "alt": "Image showing proper link usage",
        "caption": "set max-width for paragraphs."
      },
      {
        "type": "dont",
        "image": "paragraph/paragraphs_characterlength_text_dont.png",
        "ratio": "4-3",
        "alt": "Image showing mixed button sizes",
        "caption": "allow text to span beyond max-width for paragraphs."
      }
    ],
    "backgrounds": [
      {
        "type": "do",
        "image": "paragraph/paragraphs_standardfont_text_do.png",
        "ratio": "4-3",
        "alt": "The link in this copy uses the cdr-link component, and, so correctly uses an underline",
        "caption": "use standard font color."
      },
      {
        "type": "dont",
        "image": "paragraph/paragraphs_reversedfont_text_dont.png",
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
                "default": "\"p\"",
                "description": "Valid HTML tag"
              },
              {
                "name": "modifier",
                "type": "string",
                "default": "N/A",
                "description": "Modifier allows the user to pass a style variant to this component  Possible values: body"
              }
            ],
            "slots": [
              {
                "name": "default",
                "description": "innerHTML on the inside of the anchor component"
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
<cdr-doc-table-of-contents-shell 
    :appended-nav-items="[
      {
        text: 'Related Components'
      },
      {
        text: 'Typography'
      },
      {
        text: 'Caption'
      },
      {
        text: 'Blockquote'
      },
      {
        text: 'Headings',
        href: '../heading/'
      }
    ]">

## Default

Used as default font style for all text information. Also known as body-default in UI ToolKit.

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.07.1/src/components/text" sandbox-href="https://codesandbox.io/s/10lx8v0qm4" >

```html
  <cdr-text>Pack everything you need with this handy checklist! We include the 10 essentials and more for comfort in the backcountry.</cdr-text>
```

</cdr-doc-example-code-pair>

## Body

Used for editorial content such as long-form articles like Expert Advice pages or editorial content on PDP pages.  Also known as body-editorial in UI ToolKit.

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.07.1/src/components/text" sandbox-href="https://codesandbox.io/s/10lx8v0qm4">

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

</cdr-doc-table-of-contents-shell>
</template>

<template slot="Design Guidelines">
<cdr-doc-table-of-contents-shell 
    :appended-nav-items="[
      {
        text: 'Related Components'
      },
      {
        text: 'Typography'
      },
      {
        text: 'Caption'
      },
      {
        text: 'Blockquote'
      },
      {
        text: 'Headings',
        href: '../heading/'
      }
    ]">

  <cdr-doc-alert/>

## Use when

- Displaying articles for long-form content, such as Expert Advice articles or Co-op Journal entries
- Displaying member or legal messages, such as on PDP pages
- Displaying product descriptions
- Displaying customer reviews, such as on PDP pages

## Don’t use when

- Displaying form inputs. Instead, use the Input component
- Displaying alert messages. Instead, use the Alert component
- Listing product features. Instead, use the List component

## Foundations

- Roboto is used for paragraph text because it is easy to scan. It is primarily used for:
  - Legal messages on PDP pages
  - Shipping messages on PDP pages
  - Customer reviews on PDP pages
  - Class or event descriptions
  - REI Adventure descriptions
- Sentinel carries a stronger brand impression with other brand material, and is primarily used for:
  - Editorial copy on PDP pages
  - Long articles on Expert Advice or Co-op Journal pages

## Content

- Use adjacent text, a definition list, a glossary, or other method to supplement words that are ambiguous
- Abbreviations:
  - Follow [REI Copy Guidelines](http://pcempub.rei.com/content/asset-guides/en_us/site/brand-assets-guides/copy/master-brand-copy-guides.html) for dates, time, dimensions, measurements, electrical units, and geographic reference
  - Expand abbreviations by explaining the definition the first time it is used
  - Use the `<abbr>` element, or link to a definition or glossary
- Readability level on Flesch-Kincaid Grade Level should be roughly 9 years of primary education. For more information, see [Test your document’s readability](https://support.office.com/en-us/article/Test-your-document-s-readability-85b4969e-e80a-4777-8dd3-f7fc3c8b3fd2) on Microsoft’s website
- When possible, write the first sentence as an introduction to the paragraph. With screen readers, users can jump from paragraph to paragraph, listening to the first sentence or two before moving on to the next paragraph

## Behavior

- Max-width for paragraph containers is 634px or line length should not exceed 75 characters per line.

<do-dont :examples="$page.frontmatter.width" />

- Use standard (dark) font color on light background for article text.

<do-dont :examples="$page.frontmatter.backgrounds" />

## Accessibility

- To ensure that usage of this component complies with accessibility guidelines, do the following:
  - Text container does not exceed 634px or line length does not exceed more than 75 characters 
  - Minimize use of reversed-out body copy because it’s harder to read 
  - When possible, use the first sentence as an introduction to the paragraph. With screen readers, users can listen to the first sentence and then jump to the next paragraph 
  - Break long pages into shorter sections by organizing content into well-defined groups or chunks
- This component has compliance with following WebAIM’s accessibility guidelines:
  - [WCAG SC 1.4.8: Visual presentation](https://www.w3.org/TR/WCAG20/#visual-audio-contrast-visual-presentation): Cedar Design System text component provides for spacing for: 
    - Within paragraphs, line spacing is at least 1.5 times font height
    - Between paragraphs, at least 1.5 times larger than the line spacing

  <cdr-img alt="paragraphs_spacing_graphic_example" :src="$withBase(`/paragraph/paragraphs_spacing_graphic_example.png`)" />

</cdr-doc-table-of-contents-shell>
</template>

<template slot="API">
<cdr-doc-table-of-contents-shell
    :appended-nav-items="[
      {
        text: 'Related Components'
      },
      {
        text: 'Typography'
      },
      {
        text: 'Caption'
      },
      {
        text: 'Blockquote'
      },
      {
        text: 'Headings',
        href: '../heading/'
      }
    ]">

## Props

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

## Slots

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />

## Installation

Resources are available within the [cdr-text package](https://www.npmjs.com/package/@rei/cdr-text):

- Component: `@rei/cdr-text`

To incorporate the required assets for a component, use the following steps:

### #1. Install using NPM

Install the `cdr-text` package using `npm` in your terminal:

_Terminal_

```bash
npm i -S @rei/cdr-text
```

### #2. Import Dependencies

_main.js_

```javascript
// import your required css.
import "@rei/cdr-assets/dist/cdr-core.css";
import "@rei/cdr-assets/dist/cdr-fonts.css";
```

### #3. Add component to a template

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

The **cdrText** component allows for styling any html element with available text styles. Visual style and semantic meaning are managed independently by providing: 

* Element to the `tag` prop 
* Style to the `modifier` prop

By default the **cdrText** component renders as a paragraph, this default paragraph is intended for most standard use cases.

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

Define custom tags by applying a specific **cdr-text** style with modifiers to it.

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

### What's new

**cdrText** component::

- Enables a consistent visual paragraph style applied to any html element using the tag property
- By default, results in a generic `<p>` tag
- Visual style is applied with the modifier property and supports:
  - **Unmodified variant**:  Used as default font style. It may be used for paragraphs, lists, or any basic information
  - **Body**: intended for long-form articles like Expert Advice pages or editorial content on PDP pages

</template>
</cdr-doc-tabs>
