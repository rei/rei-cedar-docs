---
{
  "title": "Design to Dev Handoff Process",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "breadcrumbs": [
    {
      "text": "Getting Started/"
    }
  ]
}
---

<cdr-doc-table-of-contents-shell>

<style> img{max-width:100%} </style>

The Cedar UI Sketch Toolkit provides tools and processes to communicate Cedar component and token usage in sketch design assets. Designers using the Cedar toolkit to build mockups and redlines will be creating annotated, inspectable, web-sharable assets to facilitate the developer handoff process.



## Developers
If you’re a developer, you can skip to the [review handoff section]() of this article.



## Designers – Design with These Goals in Mind:
- [Setup](): A set of up to 4 artboards for each screen, one for each responsive breakpoint. See recommended artboard widths. Follow the Cedar 12-column grid layout.
- [Design](): Construct your designs mostly from symbols, layer styles, and text styles available through Cedar UI Toolkit.
- [Redline](): Add spacing and inset or padding grid token overlays to visualize whitespace. Also see Redlining Tips for additional info.
- [Handoff](): Group sections from top to bottom as layers for parsability. Make collections of relevant artboard. Commit both the VISUAL and the REDLINE examples for the developers.



## Artboard Setup 
Each screen should have (up to) 4 versions, each at different breakpoint widths corresponding to [Cedar’s breakpoints](): `@Xs` `@Sm` `@Md` `@Lg`. The goal is to showcase how content will resize and reflow for responsive web layouts, and communicate those states to a developer.

We recommend making your designs at the following 4 screen widths: `400px`, `784px`, `992px`, and `1400px`. These widths align to an 8px grid and will also have consistent column and gutter spacing for the Cedar grid.

### Grid and Layout Artboard Template
Download or open the [template file]() and copy the artboards into your project.

![screenshot](../../.vuepress/public/getting-started-handoff/100-Grid.png)

### Manual Artboard Setup
You can also setup your artboards manually using the following settings. To access the artboard settings, click __View > Canvas > Layout Settings__. 

![screenshot](../../.vuepress/public/getting-started-handoff/200-Grid-Settings.png)

Use the table below to create 4 artboards with the correct layout properties. You can toggle an arboard’s column overlay with __View > Canvas > Show Layout__. 

| Name Suffix | Width | Total width | Offset | Number of columns | Gutter on outside | Gutter width | Column width
| ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| Mobile @Xs:<br/>w < 768px | 400px | 384px | 8px | 12 | ✔ | 16px | 16px |
| Tablet @Sm:<br/>768px < w < 992px | 784px | 768px | 8px | 12 | ✔ | 16px | 48px |
| Laptop @Md:<br/>992px < w < 1232px | 992px | 960px | 16px | 12 | ✔ | 32px | 48px |
| Desktop @Md:<br/>1232px < w | 1400px | 1200px | 100px | 12 | ✔ | 32px | 68px | 

We also recommend setting an 8px grid by clicking __View > Canvas > Grid Settings__.  You can toggle an arboard’s grid overlay with __View > Canvas > Show Grid (Ctrl+G)__ and column overlay with __View > Canvas > Show Layout (Ctrl+L)__.



## Create Your Design
Use the Cedar toolkit components symbols, layer styles, and text styles to make your designs. For more information about how to link and use these libraries, visit the [Getting Started as a Designer]() article.

To align to the Cedar grid where appropriate, see the [Grid]() article.

A Global Header & Footer library is also available in the Cedar toolkit to help put your designs in context.



## Redlining

![screenshot](../../.vuepress/public/getting-started-handoff/300-Redlining.png)

Redlining effectively communicates the intended construction of a webpage to the front-end developer. Cedar toolkit symbols and styles have vue- component and token names embedded within them so that developers can view them in the _Abstract Inspection Web-View_.

Use the redlining symbols found in the CDR tokens toolkit library to communicate whitespace in your designs. For more information on how spacing works within html and Cedar, see the [Spacing]() article.

You can view an example of the [Responsive Layout Handoff Collection]() in the Cedar [Example Project]().



## Handoff
After redlining is complete, make an [Abstract Collection]() of artboards to handoff to the front-end developers.

![screenshot](../../.vuepress/public/getting-started-handoff/400-Sharing.png)

We also recommend you make two commits of the final design: a `REDLINE` version and a `VISUAL` version. This will allow developers to toggle the redlines on and off. Use the process below for best results:

<!-- First, make a commit showing the file without redline spacing symbols visible: -->
1. In the lower left corner of the Layers panel (__Cmd+F__), type _“redlines”_ into the filter bar. This will show only the redline symbols from the CDR token library. Select the first object in the list, then Shift+Select the last object in the list to select all your redline symbols.  
![screenshot](../../.vuepress/public/getting-started-handoff/500-filter-redlines.png)
1. Hide the results using __Cmd+Shift+H__.  
![screenshot](../../.vuepress/public/getting-started-handoff/510-hide-redlines.png)
1. Commit the file to Abstract. When naming, use the name `VISUAL`. See a [VISUAL example]() here.  
![screenshot](../../.vuepress/public/getting-started-handoff/520-commit-REDLINE.png)

<!-- Next, make a commit showing the file to show redline spacing symbols visible. -->
1. Press __Cmd+Z__ to undo the _“hide all”_ command. Now, you can see all the redlines.  
![screenshot](../../.vuepress/public/getting-started-handoff/530-undo-hide.png)
1. Make another commit to Abstract. When naming, use the name `REDLINE`. See a [REDLINE example]() here.  
![screenshot](../../.vuepress/public/getting-started-handoff/540-commit-VISUAL.png)

__Note:__ If your design is split onto multiple pages, you may need to repeat steps _4_ and _6_ for each Sketch page.



## Redlining Tips for Designers
- Align all text to the object-bounding box, not to the text baseline or cap height  
![screenshot](../../.vuepress/public/getting-started-handoff/600-type-object-alignment.png)
- Add vertical spacing symbols in between elements you want spaced, select all the elements you want to stack vertically, click __Tidy__, and change the vertical space to 0  
![screenshot](../../.vuepress/public/getting-started-handoff/700-tidy-spacing.png)
- Elements that are locked in Sketch will not be selectable in the _Abstract Inspection Web-View_ canvas. This means elements that are layered underneath the locked elements will be selectable. Place a redline grid symbol over your entire page to communicate grid alignment. Lock this element in Sketch so that it is not selectable in _Abstract Inspection Web-View_ canvas.  
![screenshot](../../.vuepress/public/getting-started-handoff/800-lock-layers.png)
- Elements that are hidden in Sketch will not exist in the _Abstract Inspection Web-View_  
![screenshot](../../.vuepress/public/getting-started-handoff/900-layer-groups.png)
- Group your document in sections in a top to bottom vertical stacking order. This makes the file more digestible in _Abstract Inspection Web-View_ layer list  
![screenshot](../../.vuepress/public/getting-started-handoff/1000-invisible-object.png)
- To unhide all redline symbols:
  - In the lower-left corner of the layers panel (__Cmd+F__) type _“redlines”_ into the filter bar.
  - Shift-select all the results in the layers list 
  - Manually __Cmd+Click__ to deselect all artboards in the layers list.
  - Press __Cmd+Shift+H__ to hide and unhide.
- Use color token Layer Styles to help your developers find the right token values  
![screenshot](../../.vuepress/public/getting-started-handoff/1100-using-colors.png)
- Use the rectangle symbol to mix __border__, __background__, __prominence__, and __radius__ token values  
![screenshot](../../.vuepress/public/getting-started-handoff/1200-rectangle-symbol.png)
- Use __Text Styles__ to communicate Cedar text token values  
![screenshot](../../.vuepress/public/getting-started-handoff/1300-use-text-styles.png)
- To center text, just click __Center__ in Sketch. The Cedar toolkit does not provide the left, right, and centered variants of each text block



## Review of Design Handoff
Each Artboard committed to Abstract is viewable in a browser using a public link. For more information about the _Abstract Inspection Web-View_, visit the [Abstract website](). We recommend the following uses:

### Collections
Use __Collections__ to view a curated set of artboards in a list. When viewing a specific artboard, use the bottom bar to navigate and toggle to 100% zoom. For more information, read the [Abstract Collection]() documentation.  
<!-- ![screenshot](../../.vuepress/public/getting-started-handoff/.png) -->


### Comment Tab
Use the __Comment__ tab to navigate between different versions in the file’s commit history. This tab can also be used to toggle between the `VISUAL` and the `REDLINE` commits.  
![screenshot](../../.vuepress/public/getting-started-handoff/1400-visual-vs-redline-comparison.png)
You can also use the __Comment__ tab to create and reply to comments on specific artboards. We recommend using comments to:
- Communicate Intended Interactions  
![screenshot](../../.vuepress/public/getting-started-handoff/1500-interaction-comments.png)
- Annotate details, interaction, motion, or responsive details that might otherwise go overlooked  
![screenshot](../../.vuepress/public/getting-started-handoff/1510-subtle-comments.png)
- Resolve Issues with CSS layout  
![screenshot](../../.vuepress/public/getting-started-handoff/1520-code-comments.png)
To learn more, read the [Abstract Comments]() documentation.

## Inspect Tab
Developers use the Inspect tab to navigate the objects and layers from the Sketch file. Cedar token names are embedded in the Layer Style and Text Style names. You can view them in the selection column on the right.

### Spacing Token Symbols
Note that spacing tokens are orange and inset (padding) tokens are green. Developers can learn more about how these should be applied in the [Spacing]() article.  
![screenshot](../../.vuepress/public/getting-started-handoff/1600-finding-space-tokens.png)

### Token Layer Styles
Token Layer Style may be applied to a standalone element.  
![screenshot](../../.vuepress/public/getting-started-handoff/1610-finding-color-tokens.png)
Or, multiple token Layer Styles can be combined using a __Rectangle__ symbol.  
![screenshot](../../.vuepress/public/getting-started-handoff/1620-finding-rectangle-symbols.png)
To learn more about using Cedar color tokens, read the [Tokens]() article and the [Color Foundation]() article.  

### Text Tokens
Text Styles contain both the Text Style mixin and the text color to be applied. For a list of text token values and usage, see the [Typography]() article.  
![screenshot](../../.vuepress/public/getting-started-handoff/1630-finding-text-tokens.png)

### Icons
Icon names will appear in the Layers list. Go to the [icon library]() to see if this icon is publicly available. If the icon is custom, please export it from Sketch using [CDR icon export guide](). For more information about icon usage, see the [Iconography]() article and the [cdr-icon component]().  
![screenshot](../../.vuepress/public/getting-started-handoff/1700-icons.png)



## Prototype
Cedar doesn’t have a process for prototyping yet. Most REI teams use InVision. Abstract might support prototyping in the future. To read more, see this [Abstract]() forum.



## Suggestions?
Does this process work for you? Do you have any suggestions for improvement? Please let us know using the [#cedar-user-support]() slack channel.

__Now Go Be Awesome!__

</cdr-doc-table-of-contents-shell>
