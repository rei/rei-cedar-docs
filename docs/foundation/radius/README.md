---
{
  "title": "Radius",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "summary": false,
  "breadcrumbs": [
    {
      "text": "Foundation/"
    }
  ],
  "basics": [
    {
      "image": "radius/radius-basics-1.png",
      "ratio": "4-3",
      "alt": "A graphic showing a rectangle with rounded edges with a pointer cursor nearby.",
      "caption": "With few exceptions, interactive components are rounded."
    },
    {
      "image": "radius/radius-basics-2.png",
      "ratio": "4-3",
      "alt": "A graphic showing a larger and smaller rectangle. The smaller rectangle has less rounded corners than the larger rectangle",
      "caption": "An object's border radius should be proportional to its shortest side."
    },
  ],
  "nested": [
    {
      "image": "radius/radius-nested-1.png",
      "ratio": "4-3",
      "alt": "A graphic showing a larger rectangle with four smaller rectangles nested inside. The larger rectangle has a border radius as well as the nested rectangles",
      "caption": "A nested object should inherit its parent's border type: rounded or not rounded."
    },
    {
      "image": "radius/radius-nested-2.png",
      "ratio": "4-3",
      "alt": "A graphic showing a larger rectangle with a smaller rectangle nested within. Both have a border radius. The nested rectangle has a smaller border radius than the larger one",
      "caption": "The border radius of a nested, rounded object should be smaller than that of its parent."
    },
  ]
}
---

<cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>

## Overview
<cdr-img :src="$withBase('/radius/radius-header.png')" ratio="16-9" alt="A graphic showing four nested rectangles against with rounded corners against a salmonberry colored background."/>

### Basics
<two-column-captioned-images :examples="$page.frontmatter.basics"/>
  
### Nested objects
<two-column-captioned-images :examples="$page.frontmatter.nested"/>
  
## Application

### Tokenized options
Cedar components include appropriate radii values applied by default. Use tokens to apply radii values to bespoke elements or containers.

<cdr-img :src="$withBase('/radius/radius-tokens.png')" style="display:block; margin: 1em auto;" alt="A graphic showing four numbered shapes, each shape has softer rounded corners than the next. The fourth shape is by far the roundest"/>
1. Sharp: `cdr-radius-sharp` 
2. Soft:  `cdr-radius-soft` 
3. Softer:  `cdr-radius-softer` 
4. Round:  `cdr-radius-round`
  
### When to use
- Do choose a radius that's proportional to the size of the element
- Do use rounded corners for actionable components like buttons, cards, and chips
  
### When to use a different approach
- Don't use roundness as the only means of conveying actionability
- Don't round the corners of small, non-interactive pieces of UI
- Don't overuse rounded corners, consider the whole page

</cdr-doc-table-of-contents-shell>
