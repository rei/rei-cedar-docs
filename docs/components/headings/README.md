---
{
  "title": "Headings",
  "layout_type": "LayoutComponent",
  "summary": "Used as titles to create hierarchical information structure within a page layout",
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
      "text": 'Paragraphs',
      "href": '../paragraphs/'
    }
  ],
  "minimize": [
    {
      "type": "do",
      "image": "headings/headings_text_do.png",
      "ratio": "4-3",
      "alt": "Image showing proper link usage",
      "caption": "use heading levels to define hierarchical information."
    },
    {
      "type": "dont",
      "image": "headings/headings_text_dont.png",
      "ratio": "4-3",
      "alt": "Image showing mixed button sizes",
      "caption": "use heading tag for visual results. Instead use heading modifiers."
    }
  ],
  "subtitle": [
    {
      "type": "do",
      "image": "headings/headings_subtitle_do.png",
      "ratio": "4-3",
      "alt": "Image showing proper subtitle usage",
      "caption": "pair subtitles with titles and subheadlines with headlines"
    },
    {
      "type": "dont",
      "image": "headings/headings_subtitle_dont.png",
      "ratio": "4-3",
      "alt": "Image showing subtitle used without a page title",
      "caption": "use a subtitle or subheadline as a primary heading or section heading."
    }
  ],
  "semantic": [
    {
      "type": "do",
      "image": "headings/headings_minimize_do.png",
      "ratio": "4-3",
      "alt": "Image showing semantic heading usage",
      "caption": "use heading levels to define hierarchical information."
    },
    {
      "type": "dont",
      "image": "headings_minimize_dont.png",
      "ratio": "4-3",
      "alt": "Image showing and h1 followed by an h5",
      "caption": "use heading tag for visual results. Instead use heading modifiers."
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
                "description": "Modifies the style variant for this component. Possible values: { ‘display-600’  | ‘display-700 | ‘display-800 | ‘display-900 | ‘display-1000 | ‘display-1100 | ‘display-1200 | ‘heading-300' | ‘heading-400 | ‘heading-500 | ‘heading-600 | ‘heading-700 | ‘heading-800 | ‘subheading-300 | ‘subheading-400 | ‘subheading-500 | ‘subheading-600 | }",
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
      "version": "0.1.0"
    }
  ]
}
---

<cdr-doc-tabs>
<template slot="Overview">
<cdr-doc-table-of-contents-shell>

Stuart is our first choice for larger, more expressive moments. Graphik rounds out the heading schema with smaller sizes and its simplicity allows it to play a supporting role across a wide range of projects.

**Usage Considerations**
-  Heading styles should never end with a period
-  Sentence case should be used whenever possible
-  Consider the white space around headings

## Contextual Headings

The following are recommended type styles for use at varying breakpoint sizes.

### Headline 

Use for the most prominent type style on the page in place of titles. Also, use headings rarely to emphasize important information.

<cdr-doc-example-code-pair repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData" >

```html
  <cdr-text
    modifier="display-800@xs display-900">
      When you gear up, we give back
  </cdr-text>
```

</cdr-doc-example-code-pair>

### Headline/Subheadline Combination

Use when pairing with subheadlines with headline-like styles.

<cdr-doc-example-code-pair repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">

```html
  <cdr-text tag="h1" modifier="display-800@xs display-900">
    When you gear up, we give back
    <cdr-text
      class="cdr-pt-space-one-x@xs cdr-pt-space-one-and-a-half-x" 
      modifier="subheading-400@xs subheading-500">
      Treat yourself to sweet gear
    </cdr-text>
  </cdr-text>
```

</cdr-doc-example-code-pair>

### Page Title

Use for one of the most prominent type styles on the page and only once per page. Applied to level 1 headings only.


<cdr-doc-example-code-pair repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">

```html
  <cdr-text modifier="heading-700@xs heading-800">
    When you gear up, we give back
  </cdr-text>
```

</cdr-doc-example-code-pair>

### Title/Subtitle Combination

Use only when pairing subtitles with title-type styles.

<cdr-doc-example-code-pair repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">

```html
  <cdr-text modifier="heading-700@xs heading-800">
    When you gear up, we give back
    <cdr-text 
      class="cdr-pt-space-one-x@xs cdr-pt-space-one-and-a-half-x" 
      modifier="subheading-300@xs subheading-400">
      Treat yourself to sweet gear
    </cdr-text>
  </cdr-text>
```

</cdr-doc-example-code-pair>

### Section Heading

Use for headings of a section on the page.

<cdr-doc-example-code-pair repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">

```html
  <cdr-text modifier="heading-600@xs heading-700">
    When you gear up, we give back
  </cdr-text>
```

</cdr-doc-example-code-pair>

### Subsection Heading

Use for headings nested within a section of your page.

<cdr-doc-example-code-pair repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">

```html
  <cdr-text modifier="heading-400@xs heading-500">
    When you gear up, we give back
  </cdr-text>
```

</cdr-doc-example-code-pair>

### Sub-subsection Heading

Use for headings nested within a sub-section of your page.

<cdr-doc-example-code-pair repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">

```html
  <cdr-text modifier="heading-300@xs heading-400">
    When you gear up, we give back
  </cdr-text>
```

</cdr-doc-example-code-pair>

## Headings Styles

The following type styles should be used when contextual styles (above) are not being used or when supplement contextual headings are needed.

### Display 1200

<cdr-doc-example-code-pair repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">

```html
  <cdr-text modifier="display-1200">
    When you gear up, we give back
  </cdr-text>
```
</cdr-doc-example-code-pair>

### Display 1100

<cdr-doc-example-code-pair repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">

```html
  <cdr-text modifier="display-1100">
    When you gear up, we give back
  </cdr-text>
```
</cdr-doc-example-code-pair>

### Display 1000

<cdr-doc-example-code-pair repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">

```html
  <cdr-text modifier="display-1000">
    When you gear up, we give back
  </cdr-text>
```
</cdr-doc-example-code-pair>

### Display 900

<cdr-doc-example-code-pair repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">

```html
  <cdr-text modifier="display-900">
    When you gear up, we give back
  </cdr-text>
```
</cdr-doc-example-code-pair>

### Display 800

<cdr-doc-example-code-pair repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">

```html
  <cdr-text modifier="display-800">
    When you gear up, we give back
  </cdr-text>
```
</cdr-doc-example-code-pair>

### Display 700

<cdr-doc-example-code-pair repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">

```html
  <cdr-text modifier="display-700">
    When you gear up, we give back
  </cdr-text>
```
</cdr-doc-example-code-pair>

### Display 600

<cdr-doc-example-code-pair repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">

```html
  <cdr-text modifier="display-600">
    When you gear up, we give back
  </cdr-text>
```
</cdr-doc-example-code-pair>

### Heading 800

<cdr-doc-example-code-pair repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">

```html
  <cdr-text modifier="heading-800">
    When you gear up, we give back
  </cdr-text>
```
</cdr-doc-example-code-pair>

### Heading 700

<cdr-doc-example-code-pair repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">

```html
  <cdr-text modifier="heading-700">
    When you gear up, we give back
  </cdr-text>
```
</cdr-doc-example-code-pair>

### Heading 600

<cdr-doc-example-code-pair repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">

```html
  <cdr-text modifier="heading-600">
    When you gear up, we give back
  </cdr-text>
```
</cdr-doc-example-code-pair>

### Heading 500

<cdr-doc-example-code-pair repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">

```html
  <cdr-text modifier="heading-500">
    When you gear up, we give back
  </cdr-text>
```
</cdr-doc-example-code-pair>

### Heading 400

<cdr-doc-example-code-pair repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">

```html
  <cdr-text modifier="heading-400">
    When you gear up, we give back
  </cdr-text>
```
</cdr-doc-example-code-pair>

### Heading 300

<cdr-doc-example-code-pair repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">

```html
  <cdr-text modifier="heading-300">
    When you gear up, we give back
  </cdr-text>
```
</cdr-doc-example-code-pair>


### Subheading 600

<cdr-doc-example-code-pair repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">

```html
  <cdr-text modifier="heading-600">
    When you gear up, we give back
  </cdr-text>
```
</cdr-doc-example-code-pair>

### Subheading 500

<cdr-doc-example-code-pair repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">

```html
  <cdr-text modifier="heading-500">
    When you gear up, we give back
  </cdr-text>
```
</cdr-doc-example-code-pair>

### Subheading 400

<cdr-doc-example-code-pair repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">

```html
  <cdr-text modifier="heading-400">
    When you gear up, we give back
  </cdr-text>
```
</cdr-doc-example-code-pair>

### Subheading 300

<cdr-doc-example-code-pair repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">

```html
  <cdr-text modifier="heading-300">
    When you gear up, we give back
  </cdr-text>
```
</cdr-doc-example-code-pair>

## Accessibility

To ensure that usage of this component complies with accessibility guidelines:

- Use h1-h6 to identify headings (`<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, and `<h6>`)
  - If additional headings are needed (`<h7>` and so on), follow the technique described on the [ARIA12: Using role=heading to identify headings](https://www.w3.org/TR/WCAG20-TECHS/ARIA12) page
- Headings are used to label page regions
  - Use the `aria-label` attribute to associate headings with their page region, as described in the [label page regions](https://www.w3.org/WAI/tutorials/page-structure/labels/#using-aria-labelledby) tutorial 
- Subheadings are not semantic headings. Subheadings may be visually styled as a heading but will not be navigable using a screen reader
- For PDF documents, follow the technique on this page: [Providing headings by marking content with heading tags in PDF documents](https://www.w3.org/TR/WCAG20-TECHS/PDF9)
- Assistive technologies skim the structure of a page:
  - Allow users to navigate to or skip over sections through the use of heading levels
  - Avoid skipping heading levels (e.g., `<h2>`  to  `<h4>` )

<br />

This component has compliance with WCAG guidelines by:

- Defining semantic heading levels with the ability to assign predefined visual heading styles to each level

</cdr-doc-table-of-contents-shell>
</template>

<template slot="Guidelines">
<cdr-doc-table-of-contents-shell>

## Use When

- Creating hierarchical structure of information in a page layout
- Improving quick scanning of page content for sighted users and screen readers

## Don't’t Use When

- Tagging as a semantic heading when an element only needs to be highlighted or emphasized within your content. Instead, use sizing modifier for this component
- Showcasing long form content. Instead use [Paragraphs](https://rei.github.io/rei-cedar-docs/components/paragraphs/)


## The Basics

- When using this component with semantic headings  from `<h1>` to `<h6>`, typographic styles set up a visual hierarchy created within CSS that helps to establish the order of importance
- Identify headings at the beginning of a section
- Position headings at or near the top of a section

<cdr-img class="cdr-doc-article-img" :src="$withBase('/headings/heading_proper-page-construction.png')" alt="image of page layout with headings"/>

## Content

- Be specific. Provide facts or information that pique user interest. Avoid broad and generic headings
- Start heading titles with strong and familiar keywords to increase scannability
- Ensure the heading works out of page context, such as in search results, social media streams, blog posts, and news feeds
  - Start with most descriptive word. For example, in a section labeled “Disaster Relief” instead of “Preparation for floods”, use “Flood preparation”
  - Avoid duplicating headings (e.g. "More Details")
- Omit needless words. Be clear and concise
- Limit heading length for improved scale across variable container widths
- Headings must:
  - Start with a capital letter
  - Capitalize proper nouns
  - Use sentence case
  - Left-align multi-line headings
  
### Do / Don’t

<do-dont :examples="$page.frontmatter.subtitle" />

## Behavior

- Minimize text overlaid on images and multicolored backgrounds, which can degrade legibility. If text is overlaid on an image:
  - Ensure an accessible contrast between the text and the background
  - Implement image text with proper HTML markup and use CSS to embed any special fonts

### Do / Don’t

<do-dont :examples="$page.frontmatter.minimize" />

## Responsiveness

Responsive heading font sizes are the default for heading levels except subheading. Refer to Overview section for more information.

## Resources

- WebAIM: [Semantic Structure](https://webaim.org/techniques/semanticstructure/)

</cdr-doc-table-of-contents-shell>
</template>

<template slot="API">
<cdr-doc-table-of-contents-shell>

## Props

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

## Slots

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />

## Usage

The **CdrText** component allows for styling any html element with available text styles. Visual style and semantic meaning are managed independently by providing:

- Element to the `tag` prop
- Style to the `modifier` prop

This method decouples the semantic meaning of a heading level from the visual representation.

With this decoupling, you can style other markup to look like a heading that semantically isn’t a heading. For example, you can style an `<a>` tag in a multi-level navigation as a heading.

```vue
  <cdr-text
    tag="strong"
    modifier="heading-700 heading-800@sm heading-800@md heading-800@lg"
   >
      Styled as a heading
  </cdr-text>
```

This will result in the following HTML:

```html
  <strong 
    class="
    cdr-text cdr-text-heading-700@xs
    cdr-text-heading-800” 
  >
    Styled as a heading
  </strong>
```

**CdrText** components can be nested within a parent. The below example shows a subheading properly nested within the `<h2>` tag.

```vue
  <cdr-text 
    tag="h2" 
    modifier="
      heading-700@xs 
      heading-800"
  >
    I’m a heading
    <cdr-text 
      class="
        cdr-pt-space-one-x@xs
        cdr-pt-space-one-and-a-half-x" 
      modifier="
        subheading-300@xs 
        subheading-400">
      And I’m a visual subheading
    </cdr-text>
  </cdr-text>
```

This will result in the following HTML:

```html
  <h2 
  class="
    cdr-text 
    cdr-text-heading-700@xs 
    cdr-text-heading-800">
    I’m a heading
      <span class="
        cdr-pt-space-one-x@xs 
        cdr-pt-space-one-and-a-half-x
        cdr-text 
        cdr-text-subheading-300@xs 
        cdr-text-subheading-400">
        And I’m a visual subheading
      </span>
  </h2>
```

### Responsive Headings

Heading modifiers accept any of the supported Cedar breakpoints. For more information on how breakpoints work on components, visit the [Responsive Layout](../../layout/responsive/?active-link=components-and-breakpoints) article. 

### Modifiers

The following variants are available for heading construction within the `cdr-text` modifier attribute:

#### Display

Display styles are intended to be used for titles and other larger text. Display styles are a larger weight, and therefore more bold, than headers.

*  `display-1200`
*  `display-1100`
*  `display-1000`
*  `display-900`
*  `display-800`
*  `display-700`
*  `display-600`

#### Heading

Heading styles are used to provide context and create hierarchy on a page. Whereas one display style per page is suggested, many heading styles can be used on a page for titles, articles, or topics.

*  `heading-800`
*  `heading-700`
*  `heading-600`
*  `heading-500`
*  `heading-400`
*  `heading-300`

#### Subheading

Subheading styles are intended to be paired with display and heading styles as a secondary piece of copy.

*  `subheading-600`
*  `subheading-500`
*  `subheading-400`
*  `subheading-300`


## Heading Levels

When using actual heading elements with the tag property, nest headings by their level:

- Most important heading has the level 1 (`<h1>`) and the least important heading level 6 (`<h6>`)
- Headings with an equal or higher level start a new section
- Headings with a lower level start new subsections that are part of the higher level section

Skipping heading levels can be confusing and should be avoided where possible:

- Avoid following an `<h2>` tag by an `<h4>` tag
- If an `<h4>` tag closes a previous section, follow with a `<h2>` tag to open the next section

### Exception for Fixed Page Sections

In fixed sections of the page (e.g. sidebars), heading levels **should not** change depending on the heading levels in other areas of the page. Consistency across pages is required throughout the REI digital properties as explained on the [Navigation Design Principles Confluence](https://confluence.rei.com/display/NAV/Navigation+Design+Principles) page.

</cdr-doc-table-of-contents-shell>
</template>

</cdr-doc-tabs>
