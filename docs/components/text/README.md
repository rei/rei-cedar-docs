---
{
  "title": "Text",
  "layout_type": "LayoutComponent",
  "summary": "Text container used for any text element such as paragraphs, headings, and lists. Establishes vertical spacing and optimizes the reading experience",
  "title_metadata": "CdrText",
  "component_location": "https://github.com/rei/rei-cedar/tree/next/src/components/text",
  "see_also": [
    {
      "text": 'See Also'
    },
    {
      "text": 'Typography',
      "href": '../../foundation/typography/'
    }
  ],
  "sandboxData": {
    "components": "CdrText",
    "styleTag": ".stack { margin-top: $cdr-space-one-x}"
  },
  "semantic": [
    {
      "type": "do",
      "image": "text/headings_levels_do.png",
      "ratio": "4-3",
      "alt": "H1 and H3 used to display a semantic heading structure.",
      "caption": "use heading levels to define hierarchical information."
    },
    {
      "type": "dont",
      "image": "text/headings_levels_dont.png",
      "ratio": "4-3",
      "alt": "Semantic tags incorrectly used for visual emphasis.",
      "caption": "use heading tags for visual results. Instead use our text styles."
    }
  ],
  "utility": [
    {
      "type": "do",
      "image": "text/headings_utility_do.png",
      "ratio": "4-3",
      "alt": "Utility and body styles correctly used to add bolding to a number and increase size.",
      "caption": "use utility or body styles for descriptive or utilitarian purposes. "
    },
    {
      "type": "dont",
      "image": "text/headings_utility_dont.png",
      "ratio": "4-3",
      "alt": "Heading style incorrectly used for text that isn't a headline.",
      "caption": "use heading styles in areas that aren’t headlines. Instead, consider body or utility styles. "
    }
  ],
  "subtitle": [
    {
      "type": "do",
      "image": "text/headings_subtitle_do.png",
      "ratio": "4-3",
      "alt": "Heading correctly paired with a subheading.",
      "caption": "pair headings with subheadings."
    },
    {
      "type": "dont",
      "image": "text/headings_subtitle_dont.png",
      "ratio": "4-3",
      "alt": "Subheading incorrectly used instead of a primary heading.",
      "caption": "use subheading as a primary heading or section heading."
    }
  ],
  "subheading": [
    {
      "type": "do",
      "image": "text/headings_h_tag_do.png",
      "ratio": "4-3",
      "alt": "Subheading with correct use of a paragraph tag.",
      "caption": "use paragraph or span tags for subheadings. "
    },
    {
      "type": "dont",
      "image": "text/headings_h_tag_dont.png",
      "ratio": "4-3",
      "alt": "Subheading with incorrect use of heading tags.",
      "caption": "use heading tags for subheadings."
    }
  ],
  "characterlength": [
    {
      "type": "do",
      "image": "text/paragraphs_characterlength_text_do.png",
      "ratio": "4-3",
      "alt": "Paragraph with a set max-width.",
      "caption": "set a max-width for paragraphs."
    },
    {
      "type": "dont",
      "image": "text/paragraphs_characterlength_text_dont.png",
      "ratio": "4-3",
      "alt": "Paragraph with no max-width set.",
      "caption": "allow text to span beyond the max-width for paragraphs."
    }
  ],
  "utilityHeadings": [
    {
      "type": "do",
      "image": "text/utility_headings_do.png",
      "ratio": "4-3",
      "alt": "Product price displayed correctly with utility styles.",
      "caption": "use utility styles for more functional elements."
    },
    {
      "type": "dont",
      "image": "text/utility_headings_dont.png",
      "ratio": "4-3",
      "alt": "Product price incorrectly displayed with heading style.",
      "caption": "use headings in place of utility styles."
    }
  ],
  "utilityTight": [
    {
      "type": "do",
      "image": "text/utility_tight_do.png",
      "ratio": "4-3",
      "alt": "Product information displayed with utility styles to accomodate tight spacing.",
      "caption": "use utility styles for tight spaces."
    },
    {
      "type": "dont",
      "image": "text/utility_tight_dont.png",
      "ratio": "4-3",
      "alt": "Long-form content incorrectly displayed with utility styles.",
      "caption": "use utility styles for long-form content."
    }
  ],
  "eyebrowBrand": [
    {
      "type": "do",
      "image": "text/eyebrow_brand_do.png",
      "ratio": "4-3",
      "alt": "Eyebrow text correctly used to indicate the content's category.",
      "caption": "use eyebrows for categories or groupings."
    },
    {
      "type": "dont",
      "image": "text/eyebrow_brand_dont.png",
      "ratio": "4-3",
      "alt": "Eyebrow text incorrectly used to display a brand name.",
      "caption": "use eyebrows for brand names."
    }
  ],
  "eyebrowHeading": [
    {
      "type": "do",
      "image": "text/eyebrow_heading_do.png",
      "ratio": "4-3",
      "alt": "Three sets of data correctly categorized with eyebrow text.",
      "caption": "use eyebrows to categorize data."
    },
    {
      "type": "dont",
      "image": "text/eyebrow_heading_dont.png",
      "ratio": "4-3",
      "alt": "Eyebrow text incorrectly used as a heading above content.",
      "caption": "use eyebrows as headings."
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
              }
            ],
            "slots": [
              {
                "name": "default",
                "description": "Set the innerHTML for CdrText content. This includes text and html markup."
              }
            ]
          }
        }
      ],
      "version": "4.0"
    }
  ]
}
---


<cdr-doc-table-of-contents-shell parentSelector="h2" childSelector="h3">
## Overview

The `CdrText` component is a simple wrapper for text elements that applies default type styles. Type styling should be applied by using the [design tokens](../../tokens/all-tokens/#text) and a custom CSS class.
  
  
## Headings

A heading helps users to identify and create a hierarchical structure within a page. Headings are typically the largest text on the screen and should be short and include important information. Cedar headings include [display](#display), [serif](#serif), and [sans-serif](#sans) options.
  
### Display

Display headings, set in REI Stuart, include the largest type styles available and are intended to be used for emotional and impactful messages on top of the funnel experiences (i.e., homepage, brand pages, or landing pages). Because display styles are lighter in weight than other heading styles, they are meant for sizes 800 and above. However, it is recommended to reserve sizes 800 and 900 for mobile breakpoints.  
  
<cdr-doc-example-code-pair :copyButton="false" :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData">

```html

  <cdr-text class="cdr-text--heading-display-1600">
    When you gear up, we give back
  </cdr-text>

```
</cdr-doc-example-code-pair>

```vue{2,9}
<template>
  <cdr-text class="custom-heading-class">
    When you gear up, we give back
  </cdr-text>
</template>
<style>
  @import '~@rei/cdr-tokens/dist/scss/cdr-tokens.scss';
  .custom-heading-class {
    @include cdr-text-heading-display-1600;
  }
</style>
```

### Serif

Serif headings, set in REI Stuart, work best in large sizes (cdr-text-heading-serif-600 and above) and are intended to be used for functional messages on middle to bottom of funnel experiences (i.e., product detail pages or checkout experiences). It’s also available for areas where space is limited but an important distinction or callout needs to be made, such as a card title or aligning to marketing collateral.

<cdr-doc-example-code-pair :copyButton="false" :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData">

```html

  <cdr-text class="cdr-text--heading-serif-1200">
    When you gear up, we give back
  </cdr-text>

```
</cdr-doc-example-code-pair>

```vue{2,9}
<template>
  <cdr-text class="custom-heading-class">
    When you gear up, we give back
  </cdr-text>
</template>
<style>
  @import '~@rei/cdr-tokens/dist/scss/cdr-tokens.scss';
  .custom-heading-class {
    @include cdr-text-heading-serif-1200;
  }
</style>
```

### Serif Strong

Serif strong headings, set in REI Stuart with a greater font weight than [display](#display) or [serif](#serif), work best in larger sizes (cdr-text-heading-serif-strong-600 and above). Like serif headings, these styles are intended to be used for functional messages on middle to bottom of funnel experiences. It’s recommended to use serif strong headings very minimally throughout the page and should generally be reserved for important page titles, in cases where type overlays an image, or in situations where additional emphasis is needed.

<cdr-doc-example-code-pair :copyButton="false" :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData">

```html

  <cdr-text class="cdr-text--heading-serif-strong-1200">
    When you gear up, we give back
  </cdr-text>

```
</cdr-doc-example-code-pair>


```vue{2,9}
<template>
  <cdr-text class="custom-heading-class">
    When you gear up, we give back
  </cdr-text>
</template>
<style>
  @import '~@rei/cdr-tokens/dist/scss/cdr-tokens.scss';
  .custom-heading-class {
    @include cdr-text-heading-serif-strong-1200;
  }
</style>
```

### Sans

Sans headings, set in Graphik, should play a supporting role to serif headings. Sans headings work best in smaller sizes (cdr-text-heading-serif-strong-600 and below). Sans headings are not recommended for page titles or other prominent placements. Instead, use [serif](#serif) or [serif strong](#serif-strong) headings.

<cdr-doc-example-code-pair :copyButton="false" :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData">

```html

  <cdr-text class="cdr-text--heading-sans-600">
    When you gear up, we give back
  </cdr-text>

```
</cdr-doc-example-code-pair>

```vue{2,9}
<template>
  <cdr-text class="custom-heading-class">
    When you gear up, we give back
  </cdr-text>
</template>
<style>
  @import '~@rei/cdr-tokens/dist/scss/cdr-tokens.scss';
  .custom-heading-class {
    @include cdr-text-heading-sans-600;
  }
</style>
```
### Guidelines
#### Use When
  - Creating a hierarchical structure of information on a page

#### Don’t Use When
  - Tagging as a semantic heading when an element only needs to be highlighted or emphasized within your content. Instead, use the type scale to alter the size or prominence of the text
  - Showcasing long form content. Instead, use [body](#body)

#### The Basics
  - When using this component with semantic headings from `<h1>` to `<h6>`, typographic styles set up a visual hierarchy created within CSS that helps to establish the order of importance
  - Identify headings at the beginning of a section
  - Position headings at, or near, the top of a section
  - Consider cdr-color-text-primary, cdr-color-text-secondary, cdr-color-text-emphasis, cdr-color-text-brand, or cdr-color-text-inverse when choosing heading colors
  - Minimize text overlaid on images and multicolored background, which can degrade legibility. If text is overlaid on an image:
    - Ensure an accessible contrast between text and the background
    - Implement image text with proper HTML markup and use CSS to embed any special fonts
    - Consider using heading-serif-strong styles

#### Do / Don’t

<do-dont :examples="$page.frontmatter.semantic" />

<do-dont :examples="$page.frontmatter.utility" />

#### Content
  - Be specific. Provide facts or information that pique user interest. Avoid broad and generic headings
  - Start heading titles with strong and familiar keywords to increase scannability
  - Ensure the heading works out of page context, such as search results, social media streams, blog posts, and news feeds
    - Start with most descriptive word. For example, instead of “Preparation for floods”, use “Flood preparation”
    - Avoid duplicating headings (e.g. "More Details")
  - Omit needless words. Be clear and concise
  - Limit heading length for improved scale across variable container widths
  - Headings must:
    - Start with a capital letter
    - Capitalize proper nouns
    - Use sentence case
    - Left-align multi-line headings

### Responsive Headings
Cedar does not offer pre-styled responsive headings. Instead, construct responsive headings by defining a heading style for specific [breakpoints](../../foundation/responsive/#the-cedar-container). For instance, if the heading style is cdr-text-heading-serif-900 @lg, @md, and @sm sizes, set the heading style to cdr-text-heading-serif-800 at the @xs size. This helps to create optimal readability, spacing, and proportions for various breakpoint sizes. An examples in practice:

<cdr-doc-example-code-pair :copyButton="false" :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" >

```html
  <cdr-text
    class="cdr-text--heading-serif-800@xs heading-serif-900">
      When you gear up, we give back
  </cdr-text>
```

</cdr-doc-example-code-pair>

```vue{2,9-12}
<template>
  <cdr-text class="custom-heading-class">
    When you gear up, we give back
  </cdr-text>
</template>
<style>
  @import '~@rei/cdr-tokens/dist/scss/cdr-tokens.scss';
  .custom-heading-class {
    @include cdr-text-heading-serif-900;
    @include cdr-xs-mq-only {
      @include cdr-text-heading-serif-800;
    }
  }
</style>
```

### Resources

- WebAIM: [Semantic Structure](https://webaim.org/techniques/semanticstructure/)


## Subheadings

Subheadings give support or add meaning to a heading, and are intended to be paired with [headings](#headings). Never position a subheading on a page without pairing it with a heading style. Because subheadings are supportive, they should always be smaller in size than the heading they reinforce.

### Sans
Sans-serif subheadings are set in Graphik. They are intended to be paired with serif or serif strong headings. Pairing a sans subheading with a sans heading is also acceptable.

<cdr-doc-example-code-pair :copyButton="false" :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData">

```html

  <cdr-text class="cdr-text--subheading-sans-600">
    When you gear up, we give back
  </cdr-text>

```
</cdr-doc-example-code-pair>

```vue{2,9}
<template>
  <cdr-text class="custom-subheading-class">
    When you gear up, we give back
  </cdr-text>
</template>
<style>
  @import '~@rei/cdr-tokens/dist/scss/cdr-tokens.scss';
  .custom-subheading-class {
    @include cdr-text-subheading-sans-600;
  }
</style>
```

### Heading and Subheading Combinations
Heading and subheading combinations should have the appropriate contrast and hierarchy. Headings should always be larger than the accompanying subheading.

Serif headings should only accompanied by sans subheadings.

<cdr-doc-example-code-pair :copyButton="false" :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" >

```html
  <cdr-text
    class="cdr-text--heading-serif-strong-900">
      When you gear up, we give back
      <cdr-text
       class="cdr-text--subheading-sans-500 stack">
       Treat yourself to sweet gear
       </cdr-text>
  </cdr-text>
```

</cdr-doc-example-code-pair>

```vue
<template>
  <cdr-text class="custom-heading-class">
    When you gear up, we give back>
    <cdr-text class="custom-subheading-class">
      Treat yourself to sweet gear
    </cdr-text>
  </cdr-text>
</template>
<style>
  @import '~@rei/cdr-tokens/dist/scss/cdr-tokens.scss';
  .custom-heading-class {
    @include cdr-text-heading-serif-strong-900;
  }

  .custom-subheading-class {
    @include cdr-text-subheading-sans-500;
    padding-top: $cdr-space-one-and-a-half-x;
  }
</style>
```

Sans headings also work best with sans subheadings.

<cdr-doc-example-code-pair :copyButton="false" :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" >

```html
  <cdr-text
    class="cdr-text--heading-sans-600">
      When you gear up, we give back
      <cdr-text
       class="cdr-text--subheading-sans-300 stack">
       Treat yourself to sweet gear
       </cdr-text>
  </cdr-text>
```
</cdr-doc-example-code-pair>

```vue
<template>
  <cdr-text class="custom-heading-class">
    When you gear up, we give back>
    <cdr-text class="custom-subheading-class">
      Treat yourself to sweet gear
    </cdr-text>
  </cdr-text>
</template>
<style>
  @import '~@rei/cdr-tokens/dist/scss/cdr-tokens.scss';
  .custom-heading-class {
    @include cdr-text-heading-sans-600;
  }

  .custom-subheading-class {
    @include cdr-text-subheading-sans-300;
    padding-top: $cdr-space-one-x;
  }
</style>
```

### Guidelines
#### Do / Don’t

<do-dont :examples="$page.frontmatter.subtitle" />

<do-dont :examples="$page.frontmatter.subheading" />

## Body
Body styles work best for long-form copy like articles, customer reviews, or legal messages. Body styles have a generous line height and wider letter spacing for optimal reading. For tighter, more compact styles, use [utility](#utility) styles.

<cdr-doc-example-code-pair :copyButton="false" :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData">

```html

  <cdr-text class="cdr-text--body-500">
    Cross-country skiing (sometimes called classic skiing) encompasses several styles, from touring or racing on groomed ski tracks to gliding through deep backcountry snow.
  </cdr-text>

```
</cdr-doc-example-code-pair>


```vue{2,9}
<template>
  <cdr-text class="custom-body-class">
    Cross-country skiing (sometimes called classic skiing) encompasses several styles, from touring or racing on groomed ski tracks to gliding through deep backcountry snow.
  </cdr-text>
</template>
<style>
  @import '~@rei/cdr-tokens/dist/scss/cdr-tokens.scss';
  .custom-body-class {
    @include cdr-text-body-500;
  }
</style>
```

### Strong
Body strong is also intended for long-form copy but should be used minimally. Use body strong styles when emphasizing a subset of copy and never for the entire length of copy.

<cdr-doc-example-code-pair :copyButton="false" :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData">

```html

  <cdr-text class="cdr-text--body-strong-500">
    Cross-country skiing (sometimes called classic skiing) encompasses several styles, from touring or racing on groomed ski tracks to gliding through deep backcountry snow.
  </cdr-text>

```
</cdr-doc-example-code-pair>

```vue{2,9}
<template>
  <cdr-text class="custom-body-class">
    Cross-country skiing (sometimes called classic skiing) encompasses several styles, from touring or racing on groomed ski tracks to gliding through deep backcountry snow.
  </cdr-text>
</template>
<style>
  @import '~@rei/cdr-tokens/dist/scss/cdr-tokens.scss';
  .custom-body-class {
    @include cdr-text-body-strong-500;
  }
</style>
```

### Guidelines
#### Use When
  - Displaying articles for long-form content, such as Expert Advice articles or Co-op Journal entries
  - Displaying member or legal messages, such as on the PDP
  - Displaying product descriptions
  - Displaying customer reviews, such as on the PDP

#### Don't Use When
  - Displaying form inputs. Instead, use [Inputs](../input/)
  - Listing product features. Instead, use [Lists](../lists/)


#### The Basics
  - Body styles should be used for:
    - Legal messages
    - Shipping messages
    - Customer reviews
    - Product, class, event, or trip descriptions
    - Editorial copy
    - Long articles

  - Max-width for paragraph containers is 634px or line length should not exceed 75 characters per line
  - Use standard (dark) text colors on light backgrounds for article text
  - Consider cdr-color-text-primary, cdr-color-text-secondary, cdr-color-text-emphasis, or cdr-color-text-inverse when choosing body colors. If needed, cdr-color-text-sale is also available. Avoid cdr-color-text-brand for body styles


#### Content
  - Use adjacent text, a definition list, a glossary, or other method to supplement words that are ambiguous
  - Abbreviations:
    - Follow [REI Copy Guidelines](https://www.cloud-dam.rei.com/en-us/AssetGuidesandCreativeStandards/StyleGuidePage/MasterBrandCopyGuides) for dates, time, dimensions, measurements, electrical units, and geographic reference
    - Expand abbreviations by explaining the definition the first time it is used
    - Use the `<abbr>` element, or link to a definition or glossary
  - For ease of reading, readability level should be about Grade 7. To test the body text, use the [Hemingway Editor](http://www.hemingwayapp.com/).
  - When possible, write the first sentence as an introduction to the paragraph. With screen readers, users can jump from paragraph to paragraph, listening to the first sentence or two before moving on to the next paragraph

#### Applying Strong to Body Styles

Body styles include a set of strong options: `cdr-text-body-strong-500`, `cdr-text-body-strong-400`, and `cdr-text-body-strong-300`. However, there might be times when a set of words within a sentence needs to be bold. In those cases, use the generic cdr-text-strong. The set of strong options have a lighter font weight than the generic cdr-text-strong.

#### Do / Don’t

<do-dont :examples="$page.frontmatter.characterlength" />

### Resources

- Article: Which Are More Legible: [Serif or Sans Serif Typefaces?](http://alexpoole.info/blog/which-are-more-legible-serif-or-sans-serif-typefaces/)
- WebAIM Article: [Evaluating Cognitive Web Accessibility](https://webaim.org/articles/evaluatingcognitive/)

## Utility

Utility styles are used to communicate  functionality or descriptive information. Shorter content is a good candidate for the more condensed and compact utility styling. Utility styles should not be replaced with headings. While headings help group and categorize content, utility styles help to label elements or give users information on how to take action. Cedar utility styles are available in both serif and [sans serif](https://rei.github.io/rei-cedar-docs/foundation/typography/#graphik) options. Additionally, each utility style has a strong option.


### Serif
Utility serif styles should be used when additional brand emphasis is needed.

<cdr-doc-example-code-pair :copyButton="false" r:repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData">

```html

  <cdr-text class="cdr-text--utility-serif-800">
    Mon–Fri, 7am–5pm PT
  </cdr-text>

```
</cdr-doc-example-code-pair>

```vue{2,9}
<template>
  <cdr-text class="custom-utility-class">
    Mon–Fri, 7am–5pm PT
  </cdr-text>
</template>
<style>
  @import '~@rei/cdr-tokens/dist/scss/cdr-tokens.scss';
  .custom-utility-class {
    @include cdr-text-utility-serif-800;
  }
</style>
```

### Serif Strong
Utility serif strong styles should be used when additional emphasis is needed over utility serif.

<cdr-doc-example-code-pair :copyButton="false" :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData">

```html

  <cdr-text class="cdr-text--utility-serif-strong-800">
    Mon–Fri, 7am–5pm PT
  </cdr-text>

```
</cdr-doc-example-code-pair>

```vue{2,9}
<template>
  <cdr-text class="custom-utility-class">
    Mon–Fri, 7am–5pm PT
  </cdr-text>
</template>
<style>
  @import '~@rei/cdr-tokens/dist/scss/cdr-tokens.scss';
  .custom-utility-class {
    @include cdr-text-utility-serif-strong-800;
  }
</style>
```

### Sans
Utility sans styles typically make up the majority of utility styles used on a given page.

<cdr-doc-example-code-pair :copyButton="false" :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData">

```html

  <cdr-text class="cdr-text--utility-sans-800">
    Mon–Fri, 7am–5pm PT
  </cdr-text>

```
</cdr-doc-example-code-pair>

```vue{2,9}
<template>
  <cdr-text class="custom-utility-class">
    Mon–Fri, 7am–5pm PT
  </cdr-text>
</template>
<style>
  @import '~@rei/cdr-tokens/dist/scss/cdr-tokens.scss';
  .custom-utility-class {
    @include cdr-text-utility-sans-800;
  }
</style>
```

### Sans Strong
Utility sans styles should be used when additional emphasis is needed.

<cdr-doc-example-code-pair :copyButton="false" :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData">

```html

  <cdr-text class="cdr-text--utility-sans-strong-800">
    Mon–Fri, 7am–5pm PT
  </cdr-text>

```
</cdr-doc-example-code-pair>


```vue{2,9}
<template>
  <cdr-text class="custom-utility-class">
    Mon–Fri, 7am–5pm PT
  </cdr-text>
</template>
<style>
  @import '~@rei/cdr-tokens/dist/scss/cdr-tokens.scss';
  .custom-utility-class {
    @include cdr-text-utility-sans-strong-800;
  }
</style>
```

### Guidelines

  - Utility styles should be used to label elements or give users information on how to take action. For instance, on error messages or pricing information 
  - Consider all cdr-color-text colors with the exception of cdr-color-text-brand for utility styles

#### Do / don’t

<do-dont :examples="$page.frontmatter.utilityHeadings" />

<do-dont :examples="$page.frontmatter.utilityTight" />

## Eyebrow
Eyebrows introduce a topic or show how an item is categorized. Content tags or certain label styles are two examples. Eyebrow text styles should not be used as headings or used for brand names.

<cdr-doc-example-code-pair :copyButton="false" :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData">

```html

  <cdr-text class="cdr-text--eyebrow-100">
    Hiking, backpacking
  </cdr-text>

```
</cdr-doc-example-code-pair>


```vue{2,9}
<template>
  <cdr-text class="custom-eyebrow-class">
    Mon–Fri, 7am–5pm PT
  </cdr-text>
</template>
<style>
  @import '~@rei/cdr-tokens/dist/scss/cdr-tokens.scss';
  .custom-eyebrow-class {
    @include cdr-text-eyebrow-100;
  }
</style>
```

### Guidelines
#### Do / don’t

<do-dont :examples="$page.frontmatter.eyebrowBrand" />

<do-dont :examples="$page.frontmatter.eyebrowHeading" />

## Italic and Strong Generic Classes

In addition to the specific type options listed above, we have provided two generic emphasis styles allowing you to make text italic or bold.

<cdr-doc-example-code-pair :copyButton="false" :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData">

```html

  <cdr-text class="cdr-text--body-300">
    REI Co-op’s Trailsmith line was featured in  
    <cdr-text
    tag="em"
    class="cdr-text--italic">
    Field & Stream’s
    </cdr-text>
    “10 Best Pants for Working Outside”
  </cdr-text>

```
</cdr-doc-example-code-pair>

```vue
<template>
  <cdr-text class="custom-body-class">
    REI Co-op’s Trailsmith line was featured in  
    <cdr-text
    tag="em"
    class="custom-italic-class">
    Field & Stream’s
    </cdr-text>
    “10 Best Pants for Working Outside”
  </cdr-text>
</template>
<style>
  @import '~@rei/cdr-tokens/dist/scss/cdr-tokens.scss';
  .custom-body-class {
    @include cdr-text-body-300;
  }
  .custom-italic-class {
    @include cdr-text-italic;
  }
</style>
```

<cdr-doc-example-code-pair :copyButton="false" :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData">

```html

  <cdr-text class="cdr-text--body-300">
    This trip is rated as
    <cdr-text
    tag="strong"
    class="cdr-text--strong">
    Vigorous [4]
    </cdr-text>.
  </cdr-text>

```
</cdr-doc-example-code-pair>

```vue
<template>
  <cdr-text class="custom-body-class">
    This trip is rated as
    <cdr-text
    tag="strong"
    class="custom-strong-class">
    Vigorous [4]
    </cdr-text>.
  </cdr-text>
</template>
<style>
  @import '~@rei/cdr-tokens/dist/scss/cdr-tokens.scss';
  .custom-body-class {
    @include cdr-text-body-300;
  }
  .custom-strong-class {
    @include cdr-text-strong;
  }
</style>
```

## Accessibility

### Headings

To ensure that usage of this component complies with accessibility guidelines:
  - Use h1-h6 to identify headings (`<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, and `<h6>`)
  - Headings are used to label page regions
    - Use the aria-label attribute to associate headings with their page region, as described in the [label page regions](https://www.w3.org/WAI/tutorials/page-structure/labels/#using-aria-labelledby) tutorial
  - [Subheadings](#subheadings) are not semantic headings. Subheadings may be visually styled as a heading, but will not be navigable using a screen reader
  - Assistive technologies skim the structure of a page:
    - Allow users to navigate to or skip over sections through the use of heading levels
    - Avoid skipping heading levels (e.g., `<h2>` to  `<h4>` )

This component has compliance with [WCAG SC 2.1.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-keyboard-operable.html) guidelines by:
  - Defining semantic heading levels with the ability to assign predefined visual heading styles to each level

### Paragraphs

To ensure that usage of this component complies with accessibility guidelines:

  - Text container does not exceed 634px or line length does not exceed more than 75 characters
  - Minimize use of reversed-out body copy (light copy on a dark background) because it’s harder to read
  - When possible, use the first sentence as an introduction to the paragraph. With screen readers, users can listen to the first sentence and then jump to the next paragraph
  - Break long pages into shorter sections by organizing content into well-defined groups or chunks

This component has compliance with following WebAIM’s accessibility guidelines:

  - [WCAG SC 1.4.8: Visual presentation](https://www.w3.org/TR/WCAG20/#visual-audio-contrast-visual-presentation): Cedar Design System text component provides for spacing for:
    - Within paragraphs, line spacing is at least 1.5 times font height

## Implementation

Cedar uses design tokens to store typographic attributes that represent the fundamental decisions of Cedar’s visual language.

For more information about design tokens and a complete list of tokens available in Cedar, visit the [Design Tokens](../../tokens/overview/) overview.

## API

<cdr-icon class="cdr-doc-code-snippet__action-icon" use="#brand-github"/> View it on Github: 
<cdr-link :href="$page.frontmatter.component_location">{{$page.frontmatter.component_location}}</cdr-link>

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

### Slots

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />

### Usage

The **CdrText** component allows for styling any HTML element with available text styles. Visual style and semantic meaning are managed independently by providing:

- A `tag` property to control which type of element is rendered
- Styling which can be applied with a custom CSS class and a text mixin

This method decouples the semantic meaning of a heading level from the visual representation.

With this decoupling, you can style other markup to look like a heading that semantically isn’t a heading.

When creating page headers, apply the correct semantic tag.

```vue
<template>
  <cdr-text tag="h1" class="custom-heading-class">
    A navigable semantic heading
  </cdr-text>
</template>
<style>
  @import '~@rei/cdr-tokens/dist/scss/cdr-tokens.scss';
  .custom-heading-class {
    @include cdr-text-heading-700;
    @include cdr-sm-mq {
      <!-- `cdr-sm-mq` mixin applies styling at small breakpoint and above -->
      @include cdr-text-heading-800;
    }
  }
</style>
```

Note that heading styles do not always need to be paired with heading tags. Heading tags should be used for accessibility purposes to describe the page hierarchy.

<cdr-doc-code-snippet :copy-button="false" :line-numbers="false">

```vue
<template>
  <cdr-text class="custom-heading-class">
    Text styled as a heading for display only
  </cdr-text>
</template>
<style>
  @import '~@rei/cdr-tokens/dist/scss/cdr-tokens.scss';
  .custom-heading-class {
    @include cdr-text-heading-700;
    @include cdr-sm-mq {
      <!-- `cdr-sm-mq` mixin applies styling at small breakpoint and above -->
      @include cdr-text-heading-800;
    }
  }
</style>
```
</cdr-doc-code-snippet>

**CdrText** components can be extended with other Cedar or custom classes.

<cdr-doc-code-snippet :copy-button="false" :line-numbers="false">

```vue
<template>
  <cdr-text class="custom-body-class">
    This paragraph is adding a bottom margin to provide space between it and the paragraph below
  </cdr-text>
</template>
<style>
  @import '~@rei/cdr-tokens/dist/scss/cdr-tokens.scss';
  .custom-body-class {
    @include cdr-text-body-300;
    margin-bottom: $cdr-space-one-x;
  }
</style>
```

</cdr-doc-code-snippet>


### Text Options

<text-doc-overview />

</cdr-doc-table-of-contents-shell>
