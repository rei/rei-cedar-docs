---
{
  "title": "Text",
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
      "alt": "create a semantic heading structure",
      "caption": "use heading levels to define hierarchical information."
    },
    {
      "type": "dont",
      "image": "text/headings_levels_dont.png",
      "ratio": "4-3",
      "alt": "Don't use semantic tags for display styles",
      "caption": "use heading tags for visual results. Instead use our text styles."
    }
  ],
  "utility": [
    {
      "type": "do",
      "image": "text/headings_utility_do.png",
      "ratio": "4-3",
      "alt": "",
      "caption": "use utility or body styles for descriptive or utilitarian purposes. "
    },
    {
      "type": "dont",
      "image": "text/headings_utility_dont.png",
      "ratio": "4-3",
      "alt": "",
      "caption": "use heading styles in areas that aren’t headlines. Instead, consider body or utility styles. "
    }
  ],
  "subtitle": [
    {
      "type": "do",
      "image": "text/headings_subtitle_do.png",
      "ratio": "4-3",
      "alt": "",
      "caption": "pair headings with subheadings."
    },
    {
      "type": "dont",
      "image": "text/headings_subtitle_dont.png",
      "ratio": "4-3",
      "alt": "",
      "caption": "use subheading as a primary heading or section heading."
    }
  ],
  "subheading": [
    {
      "type": "do",
      "image": "text/headings_h_tag_do.png",
      "ratio": "4-3",
      "alt": "",
      "caption": "use paragraph or span tags for subheadings. "
    },
    {
      "type": "dont",
      "image": "text/headings_h_tag_dont.png",
      "ratio": "4-3",
      "alt": "",
      "caption": "use heading tags for subheadings."
    }
  ],
  "characterlength": [
    {
      "type": "do",
      "image": "text/paragraphs_characterlength_text_do.png",
      "ratio": "4-3",
      "alt": "",
      "caption": "set a max-width for paragraphs."
    },
    {
      "type": "dont",
      "image": "text/paragraphs_characterlength_text_dont.png",
      "ratio": "4-3",
      "alt": "",
      "caption": "allow text to span beyond the max-width for paragraphs."
    }
  ],
  "utilityHeadings": [
    {
      "type": "do",
      "image": "text/utility_headings_do.png",
      "ratio": "4-3",
      "alt": "",
      "caption": "use utility styles for more functional elements."
    },
    {
      "type": "dont",
      "image": "text/utility_headings_dont.png",
      "ratio": "4-3",
      "alt": "",
      "caption": "use headings in place of utility styles."
    }
  ],
  "utilityTight": [
    {
      "type": "do",
      "image": "text/utility_tight_do.png",
      "ratio": "4-3",
      "alt": "",
      "caption": "use utility styles for tight spaces."
    },
    {
      "type": "dont",
      "image": "text/utility_tight_dont.png",
      "ratio": "4-3",
      "alt": "",
      "caption": "use utility styles for long-form content."
    }
  ],
  "eyebrowBrand": [
    {
      "type": "do",
      "image": "text/eyebrow_brand_do.png",
      "ratio": "4-3",
      "alt": "",
      "caption": "use eyebrows for categories or groupings."
    },
    {
      "type": "dont",
      "image": "text/eyebrow_brand_dont.png",
      "ratio": "4-3",
      "alt": "",
      "caption": "use eyebrows for brand names."
    }
  ],
  "eyebrowHeading": [
    {
      "type": "do",
      "image": "text/eyebrow_heading_do.png",
      "ratio": "4-3",
      "alt": "",
      "caption": "use eyebrows to categorize data."
    },
    {
      "type": "dont",
      "image": "text/eyebrow_heading_dont.png",
      "ratio": "4-3",
      "alt": "",
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
              },
              {
                "name": "modifier",
                "type": "string",
                "default": "N/A",
                "description": "Modifies the style variant for this component. see below tables for list of options. ",
              },
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


<cdr-doc-table-of-contents-shell>
# Overview

The `CdrText` component is a simple wrapper for text elements. Using the `CdrText` component ensures your text elements inherit the default styling from the Cedar CSS reset.


TODO: Styling can be applied by either using the `modifier` property in conjunction with the text utility classes, or by applying a custom CSS class which uses one of the text mixins from `cdr-tokens`.

<!--  -->TODO: update for swapperooni
Note that the text utility file (distributed as `@rei/cedar/dist/style/text.css` and `@rei/cedar/dist/style/cdr-text.css`) is over 100kb in size. Usage of the text utility classes and `CdrText` modifier property may impact the bundle size and performance of your application. For projects that are customer facing or which have performance constraints should not load the text utility file or `cdr-text` CSS file and instead apply text styling using the text mixins from `cdr-tokens`. Code samples on this page include examples of both the modifier/utility and text mixin usage.

## Headings

A heading helps users to identify and create a hierarchical structure within a page. Headings are typically the largest text on the screen and should be short and include important information. Cedar headings include a [serif](#serif) and a [sans-serif](#sans) option.

### Serif

Serif headings, set in REI Stuart, work best in larger sizes (cdr-text-heading-serif-600 and above). However, it’s also available for areas where space is limited but an important distinction or callout needs to be made, such as a card title or aligning to marketing collateral.

<cdr-doc-example-code-pair :hideCode="true" repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">

```html

  <cdr-text modifier="heading-serif-1200">
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

Serif strong headings, set in REI Stuart with a greater font weight than [serif](#serif), work best in larger sizes (cdr-text-heading-serif-strong-600 and above). It’s recommended to use serif strong headings very minimally throughout the page and should generally be reserved for important page titles, in cases where type overlays an image, or in situations where additional emphasis is needed.

<cdr-doc-example-code-pair :hideCode="true" repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">

```html

  <cdr-text modifier="heading-serif-strong-1200">
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

<cdr-doc-example-code-pair :hideCode="true" repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">

```html

  <cdr-text modifier="heading-sans-600">
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

### Use When
  - Creating a hierarchical structure of information on a page

### Don’t Use When
  - Tagging as a semantic heading when an element only needs to be highlighted or emphasized within your content. Instead, use a sizing modifier for this component
  - Showcasing long form content. Instead, use [body](#body)

### The Basics
  - When using this component with semantic headings from `<h1>` to `<h6>`, typographic styles set up a visual hierarchy created within CSS that helps to establish the order of importance
  - Identify headings at the beginning of a section
  - Position headings at, or near, the top of a section
  - Minimize text overlaid on images and multicolored background, which can degrade legibility. If text is overlaid on an image:
      - Ensure an accessible contrast between text and the background
    - Implement image text with proper HTML markup and use CSS to embed any special fonts
    - Consider using heading-serif-strong styles

### Do / Don’t

<do-dont :examples="$page.frontmatter.semantic" />

<do-dont :examples="$page.frontmatter.utility" />

### Content
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
Cedar does not offer pre-styled responsive headings. Instead, construct responsive headings by defining a heading style for specific [breakpoints](../../layout/responsive/#the-cedar-container). For instance, if the heading style is cdr-text-heading-serif-900 @lg, @md, and @sm sizes, set the heading style to cdr-text-heading-serif-800 at the @xs size. This helps to create optimal readability, spacing, and proportions for various breakpoint sizes. An examples in practice:

<cdr-doc-example-code-pair :hideCode="true" repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData" >

```html
  <cdr-text
    modifier="heading-serif-800@xs heading-serif-900">
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

<cdr-doc-example-code-pair :hideCode="true" repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">

```html

  <cdr-text modifier="subheading-serif-600">
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
    @include cdr-text-subheading-serif-600;
  }
</style>
```

### Heading and Subheading Combinations
Heading and subheading combinations should have the appropriate contrast and hierarchy. Headings should always be larger than the accompanying subheading.

Serif headings should only accompanied by sans subheadings.

<cdr-doc-example-code-pair :hideCode="true" repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData" >

```html
  <cdr-text
    modifier="heading-serif-strong-900">
      When you gear up, we give back
      <cdr-text
       modifier="subheading-sans-500"
       class="stack">
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

<cdr-doc-example-code-pair :hideCode="true" repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData" >

```html
  <cdr-text
    modifier="heading-sans-600">
      When you gear up, we give back
      <cdr-text
       modifier="subheading-sans-300"
       class="stack">
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

### Do / Don’t

<do-dont :examples="$page.frontmatter.subtitle" />

<do-dont :examples="$page.frontmatter.subheading" />

## Body
Body styles work best for long-form copy like articles, customer reviews, or legal messages. Body styles have a generous line height and wider letter spacing for optimal reading. For tighter, more compact styles, use [utility](#utility) styles.

<cdr-doc-example-code-pair :hideCode="true" repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">

```html

  <cdr-text modifier="body-500">
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

<cdr-doc-example-code-pair :hideCode="true" repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">

```html

  <cdr-text modifier="body-strong-500">
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

### Use When
  - Displaying articles for long-form content, such as Expert Advice articles or Co-op Journal entries
  - Displaying member or legal messages, such as on the PDP
  - Displaying product descriptions
  - Displaying customer reviews, such as on the PDP

### Don't Use When
  - Displaying form inputs. Instead, use [Inputs](../input/)
  - Listing product features. Instead, use [Lists](../lists/)


### The Basics
  - Body styles should be used for:
    - Legal messages
    - Shipping messages
    - Customer reviews
    - Product, class, event, or trip descriptions
    - Editorial copy
    - Long articles

  - Max-width for paragraph containers is 634px or line length should not exceed 75 characters per line
  - Use standard (dark) text colors on light backgrounds for article text

### Content
  - Use adjacent text, a definition list, a glossary, or other method to supplement words that are ambiguous
  - Abbreviations:
    - Follow [REI Copy Guidelines](https://www.cloud-dam.rei.com/en-us/AssetGuidesandCreativeStandards/StyleGuidePage/MasterBrandCopyGuides) for dates, time, dimensions, measurements, electrical units, and geographic reference
    - Expand abbreviations by explaining the definition the first time it is used
    - Use the `<abbr>` element, or link to a definition or glossary
  - For ease of reading, readability level should be about Grade 7. To test the body text, use the [Hemingway Editor](http://www.hemingwayapp.com/).
  - When possible, write the first sentence as an introduction to the paragraph. With screen readers, users can jump from paragraph to paragraph, listening to the first sentence or two before moving on to the next paragraph

### Applying Strong to Body Styles

Body styles include a set of strong options: `cdr-text-body-strong-500`, `cdr-text-body-strong-400`, and `cdr-text-body-strong-300`. However, there might be times when a set of words within a sentence needs to be bold. In those cases, use the generic cdr-text-strong. The set of strong options have a lighter font weight than the generic cdr-text-strong.

### Do / Don’t

<do-dont :examples="$page.frontmatter.characterlength" />

## Resources

- Article: Which Are More Legible: [Serif or Sans Serif Typefaces?](http://alexpoole.info/blog/which-are-more-legible-serif-or-sans-serif-typefaces/)
- WebAIM Article: [Evaluating Cognitive Web Accessibility](https://webaim.org/articles/evaluatingcognitive/)

## Utility

Utility styles are used to communicate  functionality or descriptive information. Shorter content is a good candidate for the more condensed and compact utility styling. Utility styles should not be replaced with headings. While headings help group and categorize content, utility styles help to label elements or give users information on how to take action. Cedar utility styles are available in both serif and [sans serif](https://rei.github.io/rei-cedar-docs/foundation/typography/#graphik) options. Additionally, each utility style has a strong option.

By default, text within a `cdr-container` will display as `cdr-text-utility-300`.

### Serif
Utility serif styles should be used when additional brand emphasis is needed.

<cdr-doc-example-code-pair :hideCode="true" repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">

```html

  <cdr-text modifier="utility-serif-800">
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

<cdr-doc-example-code-pair :hideCode="true" repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">

```html

  <cdr-text modifier="utility-serif-strong-800">
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

<cdr-doc-example-code-pair :hideCode="true" repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">

```html

  <cdr-text modifier="utility-sans-800">
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

<cdr-doc-example-code-pair :hideCode="true" repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">

```html

  <cdr-text modifier="utility-sans-strong-800">
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

### Do / don’t

<do-dont :examples="$page.frontmatter.utilityHeadings" />

<do-dont :examples="$page.frontmatter.utilityTight" />

## Eyebrow
Eyebrows introduce a topic or show how an item is categorized. Content tags or certain label styles are two examples. Eyebrow text styles should not be used as headings or used for brand names.

<cdr-doc-example-code-pair :hideCode="true" repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">

```html

  <cdr-text modifier="eyebrow-100">
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

### Do / don’t

<do-dont :examples="$page.frontmatter.eyebrowBrand" />

<do-dont :examples="$page.frontmatter.eyebrowHeading" />

## Italic and Strong Generic Classes

In addition to the specific type options listed above, we have provided two generic styles. These emphasis styles will extend other type styles allowing you to make text italic or more bold.

<cdr-doc-example-code-pair :hideCode="true" repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">

```html

  <cdr-text modifier="body-300">
    REI Co-op’s Trailsmith line was featured in  
    <cdr-text
    tag="em"
    modifier="italic">
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

<cdr-doc-example-code-pair :hideCode="true" repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">

```html

  <cdr-text modifier="body-300">
    This trip is rated as
    <cdr-text
    tag="strong"
    modifier="strong">
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

# Implementation

To work as intended, tokens, utility classes, and component require both `cdr-reset.css` and access to the REI brand fonts. For more information on how to access these resources, visit the [Developer getting started](../../getting-started/as-a-developer#setting-up-projects) guide.

The global text default `cdr-text-default` is defined in each of the available cdr-container classes as well as the Cedar reset. Ensure that all content is contained in one of the [available container classes](../../layout/responsive/#standard-vs-fluid-container).

The Cedar text css selectors provide no spacing values other than letter-spacing and line-height.

For proper spacing between blocks of text, use the [Cedar spacing options](../../layout/spacing/).

The Cedar text options can be utilized by your application using the [token mixins](https://www.npmjs.com/package/@rei/cdr-tokens), [utility classes](https://www.npmjs.com/package/@rei/cedar) or through the [cdr-text component](https://www.npmjs.com/package/@rei/cedar).

## Text Token Mixins

Cedar uses design tokens to store typographic attributes that represent the fundamental decisions of Cedar’s visual language.

For more information about design tokens and a complete list of tokens available in Cedar, visit the [Design Tokens](../../tokens/overview/) overview.

## Utility Classes

`cdr-text` styles are available as a standalone css classes for users unable or preferring not to add custom styles to their applications, and who are unable to use the `cdr-text` vue.js component. Note that the text utility class file is over 100kb in size and may impact the performance of your application. Using the [text token mixins](./#text-token-mixins) will allow you to bundle only the text styles used in your application.

For more information on importing these styles and how to use them, visit the [Developer getting started](../../getting-started/as-a-developer/) guide.

### Usage

The `cdr-text` root class sets all value pairs to `inherit`. When using these classes, ensure at least the parent class assigns the `cdr-text` root style.

The utility classes have two dashes between `cdr-text` and its modifier `body-300`.

<cdr-doc-code-snippet :copy-button="false" :line-numbers="false">

  ```html
  <p class=”cdr-text cdr-text--body-300”>
    My body 300 text
      <em class=”cdr-text--italic”>is</em>
    amazing
  </p>
  ```
</cdr-doc-code-snippet>

## Component API


<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

## Slots

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />

## Usage

The **CdrText** component allows for styling any HTML element with available text styles. Visual style and semantic meaning are managed independently by providing:

- Element to the `tag` prop
- TODO: update me Applying styling by either using the `modifier` prop and a utility class, or with a custom CSS class and a text mixin

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
    marign-bottom: $cdr-space-one-x;
  }
</style>
```

</cdr-doc-code-snippet>


## Text Options

<text-doc-overview />

</cdr-doc-table-of-contents-shell>
