---
{
  "title": "Headings",
  "layout": "LayoutComponent",
  "summary": "Used as titles to create hierarchical information structure within a page layout.",
  "title_metadata": "Heading, cdrText",
  "minimize": [
    {
      "type": "do",
      "image": "heading/headings_text_do.png",
      "ratio": "4-3",
      "alt": "Image showing proper link usage",
      "caption": "use heading levels to define hierarchical information."
    },
    {
      "type": "dont",
      "image": "heading/headings_text_dont.png",
      "ratio": "4-3",
      "alt": "Image showing mixed button sizes",
      "caption": "use heading tag for visual results. Instead use heading modifiers."
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
                "description": "Modifier allows the user to pass a style variant to this component.  Possible values: display | display-static | heading-large | heading-large-static | heading-medium | heading-medium-static | heading-small | heading-small-static | subheading"
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
        text: 'Paragraph',
        href: '../paragraph/'
      }
    ]">

## Display

Use for responsive display heading.

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.07.1/src/components/text" sandbox-href="https://codesandbox.io/s/10lx8v0qm4" >

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

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.07.1/src/components/text" sandbox-href="https://codesandbox.io/s/10lx8v0qm4">

```html
  <cdr-text modifier="display-static">
    When you gear up, we give back
  </cdr-text>
```

</cdr-doc-example-code-pair>

## Heading Large

Use for a responsive large heading.

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.07.1/src/components/text" sandbox-href="https://codesandbox.io/s/10lx8v0qm4">

```html
  <cdr-text modifier="heading-large">
    When you gear up, we give back
  </cdr-text>
```

</cdr-doc-example-code-pair>

## Heading Large Static

Use for non-responsive large heading that maintains font size across all viewport sizes.

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.07.1/src/components/text" sandbox-href="https://codesandbox.io/s/10lx8v0qm4">

```html
  <cdr-text modifier="heading-large-static">
    When you gear up, we give back
  </cdr-text>
```

</cdr-doc-example-code-pair>

## Heading Medium

Use for a responsive medium heading.

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.07.1/src/components/text" sandbox-href="https://codesandbox.io/s/10lx8v0qm4">

```html
  <cdr-text modifier="heading-medium">
    When you gear up, we give back
  </cdr-text>
```

</cdr-doc-example-code-pair>

## Heading Medium Static

Use for non-responsive medium heading that maintains font size across all viewport sizes.

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.07.1/src/components/text" sandbox-href="https://codesandbox.io/s/10lx8v0qm4">

```html
  <cdr-text modifier="heading-medium-static">
    When you gear up, we give back
  </cdr-text>
```

</cdr-doc-example-code-pair>

## Heading Small

Use for a responsive small heading.

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.07.1/src/components/text" sandbox-href="https://codesandbox.io/s/10lx8v0qm4">

```html
  <cdr-text modifier="heading-small">
    When you gear up, we give back
  </cdr-text>
```

</cdr-doc-example-code-pair>

## Heading Small Static

Use for non-responsive small heading that maintains font size across all viewport sizes.

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.07.1/src/components/text" sandbox-href="https://codesandbox.io/s/10lx8v0qm4">

```html
  <cdr-text modifier="heading-small-static">
    When you gear up, we give back
  </cdr-text>
```

</cdr-doc-example-code-pair>

## Subheading

Use for subheadings that are positioned beneath small headings.

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.07.1/src/components/text" sandbox-href="https://codesandbox.io/s/10lx8v0qm4">

```html
  <cdr-text modifier="subheading">
    When you gear up, we give back
  </cdr-text>
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
        text: 'Paragraph',
        href: '../paragraph/'
      }
    ]">

  <cdr-doc-alert/>

## Use when

- Creating hierarchical structure of information in a page layout
- Improving quick scanning of page content for sighted users and screen readers

## Don’t use when

- Tagging as a semantic heading when an element only needs to be highlighted or emphasized within your content. Instead, use sizing modifier for this component

## Foundations

- When using this component with semantic headings  from `<h1>` to `<h6>`, typographic styles set up a visual hierarchy created within CSS that helps to establish the order of importance
- Identify headings at the beginning of a section
- Position headings at or near the top of a section

## Content

- Be specific. Provide facts or information that pique user interest. Avoid broad and generic headings
- Start heading titles with strong and familiar keywords to increase scannability
- Ensure the heading works out of context in search results, social-media streams, blog posts, and news feeds
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

<do-dont :examples="$page.frontmatter.minimize" />

## Responsiveness

Responsive heading font sizes are the default for heading levels except subheading. Refer to Overview section for more information. 

## Accessibility

- Web browsers, plug-ins, and assistive technologies use headings to provide in-page navigation. To ensure that usage of this component complies with accessibility guidelines, do the following:
  - Use headings for content structure:
    - Headings must be marked up as true headings and identified by order of importance starting with `<h1>`, `<h2>`, and so on
    - Use headings to identify individual sections of content, where appropriate
    - Avoid skipping heading levels (e.g., `<h2>` to `<h4>`)
    - Screen reader and other assistive technology users skim the structure of a page and navigate to or skip over sections through the use of heading levels
  - Compose headings that are easily understood by all users, regardless of age, cultures, education levels:
    - Start with most descriptive word. For example, in a section labeled “Disaster Relief” instead of “Preparation for floods”, use “Flood preparation:”
  - Avoid duplicating heading (e.g., "More Details") unless the structure provides adequate differentiation between them
- This component follows WebAIM’s accessibility guidelines:
  - [WCAG SC 1.3.1: Info and Relationships:](https://www.w3.org/TR/WCAG20/#content-structure-separation-programmatic) Cedar Design System defines semantic heading levels for `<h1>` through `<h6>` with ability to assign predefined visual heading styles to each level
  - [WCAG SC 2.4.6: Headings and Labels:](https://www.w3.org/TR/WCAG20/#navigation-mechanisms-descriptive) Cedar Design System defines semantic heading levels for `<h1>` through `<h6>` with ability to assign predefined visual heading styles to each level

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
        text: 'Paragraph',
        href: '../paragraph/'
      }
    ]">

## Props

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

## Slots

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />

## Installation

Resources are available within the [cdr-text package](https://www.npmjs.com/package/@rei/cdr-text):


| Name          | Type                | Description                            |
|:--------------|:--------------------|:---------------------------------------|
| @rei/cdr-text | Node module package | Import the component into your project |


To incorporate the required assets for a component, use the following steps:

### #1. Install using NPM

Install the `cdr-text` package using **npm** in your terminal:

_Terminal_

```bash
npm i -S @rei/cdr-text
```

### #2. Import Dependencies

_main.js_

```javascript
// import your required css.
import '@rei/cdr-assets/dist/cdr-core.css';
import '@rei/cdr-assets/dist/cdr-fonts.css';
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

**Cdr-text** modifiers can be nested within semantic headings. The below modifier for subheading is nested in the `<h2>` tag.

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

### Responsive headings

- Heading modifiers (without the “-static” ending) are responsive
- To disable resizing at breakpoints use static variants (ending with “-static”)

```vue
  <cdr-text
    tag="em"
    modifier="heading-medium-static">
    I should not change size at breakpoint
  </cdr-text>
```

## Heading levels

When using actual heading elements via the tag property, nest headings by their level:

- Most important heading has the level 1 (`<h1>`) and the least important heading level 6 (`<h6>`)
- Headings with an equal or higher level start a new section
- Headings with a lower level start new subsections that are part of the higher level section

Skipping heading levels can be confusing and should be avoided where possible:

- Avoid following an `<h2>` tag by an `<h4>` tag
- If an `<h4>` tag closes a previous section, follow with a `<h2>` tag to open the next section

### Exception for fixed page sections

In fixed sections of the page (e.g. sidebars), heading levels **should not** change depending on the heading levels in other areas of the page. Consistency across pages is required throughout the REI digital properties as explained on the [Navigation Design Principles Confluence page](https://confluence.rei.com/display/NAV/Navigation+Design+Principles).

## Accessibility

Web browsers, plug-ins, and assistive technologies use headings to provide in-page navigation. To ensure that usage of this component complies with accessibility guidelines, do the following:
- Use h1-h6 to identify headings (`<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, and `<h6>`)
  - If additional headings are needed (`<h7>` and so on), following technique described on this page: [ARIA12: Using role=heading to identify headings](https://www.w3.org/TR/WCAG20-TECHS/ARIA12)
- Headings are used to label page regions
  - Use aria-labelled to associate headings with their page region, as described in the [label page regions](https://www.w3.org/WAI/tutorials/page-structure/labels/#using-aria-labelledby) section of this tutorial
- Subheadings are not semantic headings. Subheadings may be visually styled as a heading but will not be navigable using a screen reader
- For PDF documents, follow technique on this page: [Providing headings by marking content with heading tags in PDF documents](https://www.w3.org/TR/WCAG20-TECHS/PDF9)
- This component follows WebAIM’s accessibility guidelines:
  - [WCAG SC 1.3.1: Info and Relationships:](https://www.w3.org/TR/WCAG20/#content-structure-separation-programmatic) Cedar Design System defines semantic heading levels for `<h1>` through `<h6>` with ability to assign predefined visual heading styles to each level
  - [WCAG SC 2.4.6: Headings and Labels:](https://www.w3.org/TR/WCAG20/#navigation-mechanisms-descriptive) Cedar Design System defines semantic heading levels for `<h1>` through `<h6>` with ability to assign predefined visual heading styles to each level

</cdr-doc-table-of-contents-shell>
</template>

<template slot="History">

## 1.0.0

### What's new

**cdrText** component:

- Enables the visual style of many heading levels and subheading to be applied flexibly to HTML headings (`<h1>` to `<h6>`) and other HTML elements
- Enabled responsive heading font sizing applied by default and disabled as an alternative with following modifiers:
  - Display
  - Heading-large
  - Heading-medium
  - Heading-small
  - Disabled as an alternative with following modifiers:
  - Display-static
  - Heading-large-static
  - Heading-medium-static
  - Heading-small-static
  - Subheading


</template>
</cdr-doc-tabs>
