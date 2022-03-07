---
{
  "title": "Prominence",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "summary": false,
  "breadcrumbs": [
    {
      "text": "Foundation/"
    }
  ],
  "bestPractices": [
    {
      "image": "prominence/prominence-best-practice-1.png",
      "ratio": "4-3",
      "alt": "Content with a slightly elevated border with a standard pointer cursor nearby",
      "caption": "Along with other attributes, convey an ability to be pressed."
    },
    {
      "image": "prominence/prominence-best-practice-2.png",
      "ratio": "4-3",
      "alt": "A link pointer hovers over a rectangle representing content, making it appear slightly higher than the rectangle next to it
",
      "caption": "Respond to interaction by raising or lowering."
    },
    {
      "image": "prominence/prominence-best-practice-3.png",
      "ratio": "4-3",
      "alt": "Text next to elevated content on the right hand side",
      "caption": "Focus a user's attention on a specific object."
    },
    {
      "image": "prominence/prominence-best-practice-4.png",
      "ratio": "4-3",
      "alt": "A grabber pointer hovering over one of three identically sized rectangles, making the first item appear to be elevated higher",
      "caption": "Signal that an object can be moved across a surface."
    },
    {
      "image": "prominence/prominence-best-practice-5.png",
      "ratio": "4-3",
      "alt": "Two sets of three rectangles, with the bottom set appearing elevated while the top three are not elevated",
      "caption": "Visually separate dissimilar content or help group like items."
    },
    {
      "image": "prominence/prominence-best-practice-6.png",
      "ratio": "4-3",
      "alt": "The lower corner of a rectangle is superimposed over another rectangle",
      "caption": "Create emphasize foreground and background relationships."
    },
  ],
}
---

<cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>
## Overview
<cdr-img :src="$withBase('/prominence/prominence-header.png')" ratio="16-9" alt="A rectangular layout tilted at 45 degrees, with each rectangle slightly elevated, and x, y, and z axes to indicate height, width, and depth"/>
### How designers create depth
Most digital interfaces are inherently flat—which is to say all objects within an interface are constrained by two spatial dimensions: width (x) and height (y). To add additional dimensionality designers must create an illusion of depth (z). While there are several techniques to achieve this, designers typically will use varying degrees of a drop shadow. The ranges of depth created are used to strengthen spatial relationships and provide additional interaction affordances. 

While there are some parallels between an object's elevation and its z-index—specifically regarding overlapping content—the system chooses to not create dependencies between the two. The reasons are two-fold: 1) there are not enough tokenized elevation options to account for the wide range of z-index values, and 2) elevation may be applied to objects that are not intended to stack on top of or otherwise interfere with adjacent objects—forcing a z-index value in these cases could yield unpredictable results. 

## Best practices

### Why designers chose to elevate interface objects
The shadow cast by an elevated object helps to communicate aspects of interactivity, order, and priority by drawing from real-world conventions. More specifically, designers use this implied sense of depth to: 
<two-column-captioned-images :examples="$page.frontmatter.bestPractices"/>

## Application
  
### Tokenized options
<cdr-img :src="$withBase('/prominence/prominence-tokens.png')" style="display:block; margin: 1em auto;" alt="Squares labeled 1 through 5 in ascending prominence"/>

1.	Flat: cdr-prominence-height-flat
2.	Raised: cdr-prominence-height-raised
3.	Elevated: cdr-prominence-height-elevated
4.	Floating: cdr-prominence-height-floating
5.	Lifted: cdr-prominence-height-lifted

### When to use
+ Do use prominence to emphasize and respond to interaction or a change of state 
+ Do use prominence to reinforce the hierarchy of a page
+ Do use a stronger prominence value for elements that overlap other areas of the UI 

### When to use a different approach
+	Don't use prominence as the only means of conveying actionability
+	Don't rely solely on a drop shadow to meet accessibility contrast requirements 
+	Don't elevate large proportions of the UI at the same time


</cdr-doc-table-of-contents-shell>
