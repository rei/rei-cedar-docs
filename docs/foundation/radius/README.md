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
}
---

<cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>

## Overview
[insert image: https://www.figma.com/file/O5VYAUnSrzoTVikTMyIQtT/Production-Graphics?node-id=663%3A609]

### Basics
[insert 2-col grid for these...]
https://www.figma.com/file/O5VYAUnSrzoTVikTMyIQtT/Production-Graphics?node-id=663%3A622
With few exceptions, interactive components are rounded
  
https://www.figma.com/file/O5VYAUnSrzoTVikTMyIQtT/Production-Graphics?node-id=663%3A628
An object's border radius should be proportional to its shortest side
  
### Nested objects
[insert 2-col grid for these...]
https://www.figma.com/file/O5VYAUnSrzoTVikTMyIQtT/Production-Graphics?node-id=663%3A580
A nested object should inherit its parent's border type: rounded or not rounded
  
https://www.figma.com/file/O5VYAUnSrzoTVikTMyIQtT/Production-Graphics?node-id=663%3A595
The border radius of a nested, rounded object should be smaller than that of its parent
  
## Application

### Tokenized options
Cedar components include appropriate radii values applied by default. Use tokens to apply radii values to bespoke elements or containers.
[insert image: https://www.figma.com/file/O5VYAUnSrzoTVikTMyIQtT/Production-Graphics?node-id=663%3A569]
1. Sharp: `cdr-radius-sharp` 
2. Soft:  `cdr-radius-soft` 
3. Softer:  `cdr-radius-softer` 
4. Round:  `cdr-radius-round`
  
### When to use
+ Do choose a radius that's proportional to the size of the element
+ Do use rounded corners for actionable components like buttons, cards, and chips
  
### When to use a different approach
+ Don't use roundness as the only means of conveying actionability
+ Don't round the corners of small, non-interactive pieces of UI
+ Don't overuse rounded corners, consider the whole page
</cdr-doc-table-of-contents-shell>
