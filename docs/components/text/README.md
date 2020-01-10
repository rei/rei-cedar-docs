---
{
  "title": "Text",
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
  "sandboxData": {
    "components": "CdrText"
  },
  "dataUtilitySerifStrong" : [ utility-serif-strong-100 , utility-serif-strong-200 , utility-serif-strong-300 , utility-serif-strong-400 , utility-serif-strong-500 , utility-serif-strong-600 , utility-serif-strong-700 , utility-serif-strong-800 ],
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
                "description": "Modifies the style variant for this component. Possible values: { 'body-300' | 'body-400' | 'body-500' | 'body-strong-300' | 'body-strong-400' | 'body-strong-500' | 'citation' | 'display-600' | 'display-700' | 'display-800' | 'display-900' | 'display-1000' | 'display-1100' | 'display-1200' | 'eyebrow-100' | 'heading-300' | 'heading-400' | 'heading-500' | 'heading-600' | 'heading-700' | 'heading-800' | 'italic' | 'strong' | 'subheading-300' | 'subheading-400' | 'subheading-500' | 'subheading-600' | 'utility-100' | 'utility-200' | 'utility-300' | 'utility-400' | 'utility-500' | 'utility-600' | 'utility-700' | 'utility-800' | 'utility-strong-100' | 'utility-strong-200' | 'utility-strong-300' | 'utility-strong-400' | 'utility-strong-500' | 'utility-strong-600' | 'utility-strong-700' | 'utility-strong-800' | 'utility-serif-100' | 'utility-serif-200' | 'utility-serif-300' | 'utility-serif-400' | 'utility-serif-500' | 'utility-serif-600' | 'utility-serif-700' | 'utility-serif-800' | 'utility-serif-strong-100' | 'utility-serif-strong-200' | 'utility-serif-strong-300' | 'utility-serif-strong-400' | 'utility-serif-strong-500' | 'utility-serif-strong-600' | 'utility-serif-strong-700' | 'utility-serif-strong-800' | }",
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
<div v-for>
<cdr-doc-example-code-pair repository-href="/src/components/text" :sandbox-data="$page.frontmatter.sandboxData" >

```html
  <cdr-text
    modifier="display-800@xs display-900">
      When you gear up, we give back
  </cdr-text>
```
</cdr-doc-example-code-pair>


# Guidelines

# API
## Tokens
## Utility Class
## Component
### Props

This component will bind any attribute that a [native HTML heading element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements) accepts.

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
  <strong class="cdr-text cdr-text-heading-700@xs cdr-text-heading-800">
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

Heading modifiers accept any of the supported Cedar breakpoints. For more information on how breakpoints work on components, visit the [Responsive Layout](../../layout/responsive/#components-and-breakpoints) article.



### Options
| Token | Utility Class | Component Modifier
|--------|------|
| `@rei/cedar/dist/cedar.css` | `@rei/cedar/dist/cedar-compiled.css` |
| `@rei/cedar/dist/utilities.css` | `@rei/cedar/dist/utilities-compiled.css` |
| `@rei/cedar/dist/reset.css` | `@rei/cedar/dist/style/reset.css` |

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
