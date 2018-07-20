---
{
   "title": "Lists",
   "layout": "LayoutComponent",
   "summary": "Group related content items together either vertically or horizontally.",
   "title_metadata": "List, Bare list, Unstyled list, Unordered list, Ordered list, Inline list",
	  "list1": [
      {
        "type": "do",
        "image": "list/lists_grammar_do__4-3.png",
        "ratio": "4-3",
        "alt": "",
        "caption": "link independent clauses and product details."
      },
      {
        "type": "dont",
        "image": "list/lists_grammar_dont__4-3.png",
        "ratio": "4-3",
        "alt": "",
        "caption": "link unrelated items together."
      }
    ],
    "list2": [
      {
        "type": "do",
        "image": "list/lists_punctuation_do_3-4.png",
        "ratio": "3-4",
        "cover", true,
        "crop": "x-center",
        "alt": "",
        "caption": "end each sentence with a period except last sentence."
      },
      {
        "type": "dont",
        "image": "list/lists_punctuation_dont_3-4.png",
        "ratio": "3-4",
        "cover", true,
        "crop": "x-center",
        "alt": "",
        "caption": "add terminal punctuation."
      }
    ],
  "name": "CdrLink",
  "versions": [
    {
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
        ],
      },
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
        text: 'Breadcrumb',
        href: '../breadcrumb/'
      }
    ]">

  <cdr-doc-alert/>

## Use when

- Displaying groups of related items represented by text

## Don’t use when

- Displaying content that is not primarily text
- Displaying content with two or more well-defined dimensions. Instead, use a Data Table  or List Group

## Foundations

- Vary list item font size
- Follow spacing requirements found on [Typography](../../foundation/typography/) and Space pages

<cdr-img :src="$withBase(`/list/Spec_List_Font_Size_Variations_16-9.png`)" ratio="16-9"/>

## Content

Break up chunks of content to make the information easier to scan:

- Separate consecutive lists on a page with a heading for each list
- Start each item with a noun or a verb
- Use similar phrases or clauses with the same grammatical structure. For example:
  - **Product.** Zippered hand pockets; chest pocket with hidden zipper
  - **Materials.** Snowshoes: plastic; poles: aluminum
  - **Duration.** High: 4 hrs. 15 min.; low: 48 hrs. 20 min.
- Create structured content with a list. Do not use a list for formatting

Use multi-column lists when:

- Specific ordering is not required
- Listing items with a single word or very short phrases
- Space is minimal
- Viewing items at a glance is more beneficial than scrolling

Every item in a list must:

- Start with a capital letter and use sentence case
- Use semicolons when linking independent clauses and product details in the list

<do-dont :examples="$page.frontmatter.list1" />

- End each sentence in a list item with a period when there are multiple sentences; however, don’t add a period for the last sentence or phrase

<do-dont :examples="$page.frontmatter.list2" />

## Accessibility

- To ensure that usage of this component complies with accessibility guidelines, do the following:
  - Organize lists so users can understand the relationship and grouping of information
  - Use explicit list markup that allows users to:
    - Rapidly browse
    - Access list content
    - Navigate a page using list content
    - Use screen readers to announce the number of items in each list
  - Use aria labels:
    - Use the aria-labelledby attribute to reference the IDs of one or more elements to describe the list contents
    - Use the aria-label attribute to provide an explicit text description of list contents
    - Alternatively, the title attribute can provide an explicit text description of the list contents
- This component has compliance with following WebAIM’s accessibility guidelines:
  - [WCAG SC 1.3.1: Info and Relationships:](https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast) Cedar Design System provides ability to create structured lists. Lists are easier to navigate than simple tables 



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

## Properties

<cdr-doc-api type="prop" />

## Slots

<cdr-doc-api type="slot" />

## Installation

Resources are available within the [cdr-text package](https://www.npmjs.com/package/@rei/cdr-text):

# 
| Name          | Type                | Description                            |
|:--------------|:--------------------|:---------------------------------------|
| @rei/cdr-text | Node module package | Import the component into your project |


To incorporate the required assets for a component, use the following steps:

### #1. Install using NPM

Install the `cdr-text` package using `npm` in your terminal:

_Terminal_

```terminal
    npm i -s @rei/cdr-text
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
