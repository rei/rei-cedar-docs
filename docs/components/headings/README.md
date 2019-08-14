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
                "description": "Modifies the style variant for this component. Possible values: { ‘display’  |  ‘display-static’  |  ‘heading-large’  |  ‘heading-large-static’  |  ‘heading-medium’  |  ‘heading-medium-static’  |  ‘heading-small’  |  ‘heading-small-static’  |  ‘subheading' }"
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
      "version": "0.1.0"
    }
  ]
}
---

<cdr-doc-tabs>
<template slot="Overview">
<cdr-doc-table-of-contents-shell>

## Display Responsive

Use for responsive display heading.


<cdr-doc-example-code-pair :background-toggle="false" repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData" >

```html
  <cdr-text
    tag="h4"
    modifier="display">
      When you gear up, we give back
  </cdr-text>
```

</cdr-doc-example-code-pair>

## Display Static

Use for non-responsive display heading that maintains font size across all viewport sizes.


<cdr-doc-example-code-pair :background-toggle="false" repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">

```html
  <cdr-text modifier="display-static">
    When you gear up, we give back
  </cdr-text>
```

</cdr-doc-example-code-pair>

## Heading Large

Use for a responsive large heading.


<cdr-doc-example-code-pair :background-toggle="false" repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">

```html
  <cdr-text modifier="heading-large">
    When you gear up, we give back
  </cdr-text>
```

</cdr-doc-example-code-pair>

## Heading Large Static

Use for non-responsive large heading that maintains font size across all viewport sizes.


<cdr-doc-example-code-pair :background-toggle="false" repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">

```html
  <cdr-text modifier="heading-large-static">
    When you gear up, we give back
  </cdr-text>
```

</cdr-doc-example-code-pair>

## Heading Medium

Use for a responsive medium heading.


<cdr-doc-example-code-pair :background-toggle="false" repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">

```html
  <cdr-text modifier="heading-medium">
    When you gear up, we give back
  </cdr-text>
```

</cdr-doc-example-code-pair>

## Heading Medium Static

Use for non-responsive medium heading that maintains font size across all viewport sizes.


<cdr-doc-example-code-pair :background-toggle="false" repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">

```html
  <cdr-text modifier="heading-medium-static">
    When you gear up, we give back
  </cdr-text>
```

</cdr-doc-example-code-pair>

## Heading Small

Use for a responsive small heading.


<cdr-doc-example-code-pair :background-toggle="false" repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">

```html
  <cdr-text modifier="heading-small">
    When you gear up, we give back
  </cdr-text>
```

</cdr-doc-example-code-pair>

## Heading Small Static

Use for non-responsive small heading that maintains font size across all viewport sizes.


<cdr-doc-example-code-pair :background-toggle="false" repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">

```html
  <cdr-text modifier="heading-small-static">
    When you gear up, we give back
  </cdr-text>
```

</cdr-doc-example-code-pair>

## Subheading

Use for subheadings that are positioned beneath small headings.


<cdr-doc-example-code-pair :background-toggle="false" repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData">

```html
  <cdr-text modifier="subheading">
    When you gear up, we give back
  </cdr-text>
```

</cdr-doc-example-code-pair>

## Accessibility

To ensure that usage of this component complies with accessibility guidelines:

- Use h1-h6 to identify headings (`<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, and `<h6>`)
  - If additional headings are needed (`<h7>` and so on), follow the technique described on this page: [ARIA12: Using role=heading to identify headings](https://www.w3.org/TR/WCAG20-TECHS/ARIA12)
- Headings are used to label page regions
  - Use the `aria-label` attribute to associate headings with their page region, as described in the [label page regions](https://www.w3.org/WAI/tutorials/page-structure/labels/#using-aria-labelledby) section of this tutorial
- Subheadings are not semantic headings. Subheadings may be visually styled as a heading but will not be navigable using a screen reader
- For PDF documents, follow the technique on this page: [Providing headings by marking content with heading tags in PDF documents](https://www.w3.org/TR/WCAG20-TECHS/PDF9)
- Assistive technologies skim the structure of a page:
  - Allow users to navigate to or skip over sections through the use of heading levels
  - Avoid skipping heading levels (e.g., `<h2>`  to  `<h4>` )

<br />

This component has compliance with WCAG guidelines by:

- Defining semantic heading levels with ability to assign predefined visual heading styles to each level

</cdr-doc-table-of-contents-shell>
</template>

<template slot="Design Guidelines">
<cdr-doc-table-of-contents-shell>

## Use When

- Creating hierarchical structure of information in a page layout
- Improving quick scanning of page content for sighted users and screen readers

### Don’t Use When

- Tagging as a semantic heading when an element only needs to be highlighted or emphasized within your content. Instead, use sizing modifier for this component

## The Basics

- When using this component with semantic headings  from `<h1>` to `<h6>`, typographic styles set up a visual hierarchy created within CSS that helps to establish the order of importance
- Identify headings at the beginning of a section
- Position headings at or near the top of a section

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
    tag="a"
    modifier="heading-small"
    href="http://www.rei.com">
      Heading-large linked
  </cdr-text>
```

This will result in the following HTML:

```html
  <cdr-text modifier="body">
   <a class=”heading-small” href=”http://www.rei.com”>Heading-small linked</a>
  </cdr-text>
```

**CdrText** modifiers can be nested within semantic headings. The below modifier for subheading is nested in the `<h2>` tag.

```vue
  <cdr-text
    tag="h2"
    modifier="heading-large">
    I'm a heading
    <cdr-text
      tag="span"
      modifier="subheading"
    >
      And I'm a visual subheading
    </cdr-text>
  </cdr-text>
```

This will result in the following HTML:

```html
  <h2>
    I’m a heading
      <span class=”subheading”>
          And I’m a visual subheading
      </span>
  </h2>
```

### Responsive Headings

- Heading modifiers (without the “-static” ending) are responsive
- To disable resizing at breakpoints use static variants (ending with “-static”)

```vue
  <cdr-text
    tag="em"
    modifier="heading-medium-static">
    I should not change size at breakpoint
  </cdr-text>
```

## Heading Levels

When using actual heading elements via the tag property, nest headings by their level:

- Most important heading has the level 1 (`<h1>`) and the least important heading level 6 (`<h6>`)
- Headings with an equal or higher level start a new section
- Headings with a lower level start new subsections that are part of the higher level section

Skipping heading levels can be confusing and should be avoided where possible:

- Avoid following an `<h2>` tag by an `<h4>` tag
- If an `<h4>` tag closes a previous section, follow with a `<h2>` tag to open the next section

### Exception for Fixed Page Sections

In fixed sections of the page (e.g. sidebars), heading levels **should not** change depending on the heading levels in other areas of the page. Consistency across pages is required throughout the REI digital properties as explained on the [Navigation Design Principles Confluence page](https://confluence.rei.com/display/NAV/Navigation+Design+Principles).

</cdr-doc-table-of-contents-shell>
</template>

</cdr-doc-tabs>
