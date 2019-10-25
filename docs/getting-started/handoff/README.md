---
{
  "title": "Design to Development Handoff Process",
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

The Cedar UI Sketch Toolkit provides tools and processes to communicate Cedar component and token usage in sketch design assets. Designers using the Cedar toolkit to build mockups and redlines will be creating annotated, inspectable, web-sharble assets to facilitate the developer handoff process.

## Developers
If you’re a developer, you can skip to the review handoff section of this article.

## Designers – Design with These Goals in Mind:
Setup: A set of up to 4 artboards for each screen, one for each responsive breakpoint. See recommended artboard widths. Follow the Cedar 12-column grid layout.
Design: Construct your designs mostly from symbols, layer styles, and text styles available through Cedar UI Toolkit.
Redline: Add spacing and inset or padding grid token overlays to visualize whitespace. Also see Redlining Tips for additional info.
Handoff: Group sections from top to bottom as layers for parsability. Make collections of relevant artboard. Commit both the VISUAL and the REDLINE examples for the developers.

## Artboard Setup 
Each screen should have (up to) 4 versions, each at different breakpoint widths corresponding to Cedar’s breakpoints: @Xs @Sm @Md @Lg. The goal is to showcase how content will resize and reflow for responsive web layouts, and communicate those states to a developer.
We recommend making your designs at the following 4 screen widths: 400px, 784px, 992px, and 1400px. These widths align to an 8px grid and will also have consistent column and gutter spacing for the Cedar grid.
Grid and Layout Artboard Template
Download or open the template file and copy the artboards into your project.
Manual Artboard Setup
You can also setup your artboards manually using the following settings. To access the artboard settings, click View > Canvas > Layout Settings. 

Use the table below to create 4 artboards with the correct layout properties. You can toggle an arboard’s column overlay with View > Canvas > Show Layout. 





Name Suffix
Width
Total width
Offset
Number of columns
Gutter on outside
Gutter
width
Column
width
Mobile @Xs: 
w < 768px
400
384
8
12
✔


16
16
Tablet @Sm:
768px < w < 992px
784
768
8
12
✔
16
48
Laptop @Md:
992px < w < 1232px
992
960
16
12
✔
32
48
Desktop @Md:
1232px < w 
1400
1200
100
12
✔
32
68

We also recommend setting an 8px grid by clicking View > Canvas > Grid Settings.  You can toggle an arboard’s grid overlay with View > Canvas > Show Grid (Ctrl+G) and column overlay with View > Canvas > Show Layout (Ctrl+L).
Create Your Design
Use the Cedar toolkit components symbols, layer styles, and text styles to make your designs. For more information about how to link and use these libraries, visit the Getting Started as a Designer article.
To align to the Cedar grid where appropriate, see the Grid article.
A Global Header & Footer library is also available in the Cedar toolkit to help put your designs in context.
Redlining
Redlining effectively communicates the intended construction of a webpage to the front-end developer. Cedar toolkit symbols and styles have vue- component and token names embedded within them so that developers can view them in the Abstract Inspection web view.
Use the redlining symbols found in the CDR tokens toolkit library to communicate whitespace in your designs. For more information on how spacing works within html and Cedar, see the Spacing article.
You can view an example of the Responsive Layout Handoff Collection in the Cedar Example Project.
Handoff
After redling is complete, make an Abstract Collection of artboards to handoff to the front-end developers.
We also recommend you make two commits of the final design: a REDLINED version and a VISUAL version. This will allow developers to toggle the redlines on and off. Use the process below for best results:
First, make a commit showing the file without redline spacing symbols visible:
In the lower left corner of the Layers panel (Cmd+F), type “redlines” into the filter bar. This will show only the redline symbols from the CDR token library. Select the first object in the list, then Shift+Select the last object in the list to select all your redline symbols.

Hide the results using Cmd+Shift+H. 

Commit the file to Abstract. When naming, use the name VISUAL. See a VISUAL example here. 

Next, make a commit showing the file to show redline spacing symbols visible.

Press Cmd+Z to undo the “hide all” command. Now, you can see all the redlines.

Make another commit to Abstract. When naming, use the name REDLINE. See a REDLINE example here. 

Note: If your design is split onto multiple pages, you may need to repeat steps 4 and 6 for each Sketch page.
Redlining Tips for Designers
Align all text to the object-bounding box, not to the text baseline or cap height

Add vertical spacing symbols in between elements you want spaced, select all the element you want to stack vertically, click Tidy, and change the vertical space to 0


Elements that are locked in Sketch will not be selectable in the Abstract Inspection Web-View Canvas. This means elements that are layered underneath the locked elements will be selectable. Place a redline grid symbol over your entire page to communicate grid alignment. Lock this element in Sketch so that it is not selectable in Abstract Inspection Web-View Canvas. 

Elements that are hidden in Sketch will not exist in the Abstract Inspection Web-View 
 
Group your document in sections in a top to bottom vertical stacking order. This makes the file more digestible in Abstract Inspection Web-View layer list
To unhide all redline symbols:
In the lower-left corner of the layers panel (Cmd-F) type “redlines” into the filter bar.
Shift-select all the results in the layers list 
Manually Cmd-Click to deselect all artboards in the layers list. (tedious…)
Press Cmd-Shift-H to hide and unhide.
Use color token Layer Styles to help your developers find the right token values 

Use the rectangle symbol to mix border, background, prominence, and radius token values

Use Text Styles to communicate Cedar text token values
To center text, just click Center in Sketch. The Cedar toolkit does not provide the left, right, and centered variants of each text block
Review of Design Handoff
Each Artboard committed to Abstract is viewable in a browser using a public link. For more information about the Abstract Inspection tool, visit the Abstract website. We recommend the following uses:
Collections
Use Collections to view a curated set of artboards in a list. When viewing a specific artboard, use the bottom bar to navigate and toggle to 100% zoom. For more information, read the Abstract Collection documentation.
Comment Tab
Use the Comment tab to navigate between different versions in the file’s commit history. This tab can also be used to toggle between the VISUAL and the REDLINE commits.You can also use the Comment tab to create and reply to comments on specific artboards. We recommend using comments to:
Communicate Intended Interactions

Annotate details, interaction, motion, or responsive details that might otherwise go overlooked

Resolve Issues with CSS layout
To learn more, read the Abstract Comments documentation.
Inspect Tab
Developers use the Inspect tab to navigate the objects and layers from the Sketch file. Cedar token names are embedded in the Layer Style and Text Style names. You can view them in the selection column on the right.
Spacing Token Symbols
Note that spacing tokens are orange and inset (padding) tokens are green. Developers can learn more about how these should be applied in the Spacing article.
Token Layer Styles
Token Layer Style may be applied to a standalone element.
Or, multiple token Layer Styles can be combined using a Rectangle symbol.
To learn more about using Cedar color tokens, read the Tokens article and the Color Foundation article.
Text Tokens
Text Styles contain both the Text Style mixin and the text color to be applied. For a list of text token values and usage, see the Typography article.
Icons
Icon names will appear in the Layers list. Go to the icon library to see if this icon is publicly available. If the icon is custom, please export it from Sketch using CDR icon export guide. For more information about icon usage, see the Iconography article and the cdr-icon component.

Prototype
Cedar doesn’t have a process for prototyping yet. Most REI teams use InVision. Abstract might support prototyping in the future. To read more, see this Abstract forum.
Suggestions?
Does this process work for you? Do you have any suggestions for improvement? Please let us know using the #cedar-user-support slack channel.
Now Go Be Awesome!


</cdr-doc-table-of-contents-shell>
