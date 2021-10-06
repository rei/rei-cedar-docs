---
{
  "title": "Filmstrip",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "summary": "",
  "breadcrumbs": [
    {
      "text": "Components/"
    }
  ],
}
---


<cdr-doc-table-of-contents-shell >

# Overview
    

<cdr-doc-alert icon="info">Filmstrip is a Cedar cookbook component. Developers can choose from an optional range of subcomponents to create a custom version of it.</cdr-doc-alert>

A filmstrip is a functional component container which allows users to preview multiple related pieces of content such as images, text, or cards in an allocated amount of space.

## Customizing Filmstrip

Because the Filmstrip is a cookbook of multiple subcomponents, its structure can be customized or overridden in a variety of ways. For example, not using a container, including a header, adding more or less content blocks in the preview, not including arrow pagination or using different types of content within the content blocks such as images, product tiles, animation or cards.

### Use When
- Providing a teaser of products, events, articles or categories to users

### Don't Use When
- The content blocks will not link to a destination or contains no actionable elements
- The information contained within the filmstrip is not related
- The content will exceed a maximum of 5 swipes to preview all the content
- The user will need to focus on 1 piece of content at a time 

### Implementation

<cdr-img src="https://i.imgur.com/Co3dIqI.jpg" alt="image of REI.com product recommendations filmstrip"/>

### Anatomy of a Filmstrip

<cdr-img src="https://i.imgur.com/ZSpOvmp.jpg" alt="a wireframe outlining the parts listed below"/>

Note that the header and link are not part of a filmstrip pattern per-say and are additional recommendations for page layout
#### Container

-  **Must**
  -  Be able to receive tab focus

#### Contents

-  **Should**
  -  be a set of like data

#### Controls 

-  **Must**
  -  Provide visual boundaries with a minimum of 3:1 contrast to the background
  -  For both keyboard focus and hover, it is important for the content to continue to have sufficient contrast, although it will depend on whether that content is text (relates to 1.4.3) or graphical (1.4.11) in nature.
  -  Provide 
Many WCAG requirements are contextual to their implementation. To ensure that usage of this component complies with accessibility guidelines you are responsible for the following:

- Include a skip link for keyboard and screen reading users to skip the filmstrip
- Ensuring all on-screen and touch target areas are at least 44 by 44 pixels.

## Variant 2

-  Description

### Use When

### Don't Use When
### Implementation

-  EXAMPLE 3 : code example
  
### Anatomy of Default variant


May use these 
## Content
  
## Structure
  
## Behavior 

## Placement 

</cdr-doc-table-of-contents-shell>
