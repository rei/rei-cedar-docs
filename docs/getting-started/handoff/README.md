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

<cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>

The Cedar UI Toolkit provides tools and processes to communicate Cedar component and token usage in Figma design assets. Designers using the Cedar Toolkit to build mockups and redlines will be creating annotated, inspectable, web-sharable assets to facilitate the developer handoff process.


## Developers
Developers can jump to the [review handoff](#developer-review) section of this article.


## Designers
We approach the hand-off process in a standardized way to ensure that any designer can communicate design specifications to any developer. Designs that leverage Cedar’s UI Toolkit are faster to build, easier to maintain, and quicker to hand-off than bespoke designs. Use the tips below to optimize your project hand-off with Cedar.


## Setup
### Artboards
To cover all supported [breakpoints](../../components/grid/#the-basics), you will need to use, at minimum, four artboards. We recommend using 400px, 784px, 992px, and 1232px artboard widths. These values play nicely with an eight pixel grid and create whole-number column and gutter integers.

To make starting your project easier, duplicate our Figma [template file](https://www.figma.com/file/JlTaoRS1devxB4A4Xdd0oE/Artboards?node-id=0%3A1). If using device-specific artboard sizes for native applications, be sure to apply a Layout Grid to the frame.

<figure>
  <cdr-img alt="screenshot" :src="$withBase(`/getting-started-handoff/handoff-artboard-setup.png`)"/>
  <figcaption>
    <cdr-caption summary="The template file contains the artboard widths you need to get started."/>
  </figcaption>
</figure>

## Design
Toolkit libraries are automatically integrated into any new Figma project — simply drag-and-drop components from the asset tab or use shared styles for typography or color.

<figure>
  <cdr-img alt="screenshot" :src="$withBase(`/getting-started-handoff/handoff-component-example.gif`)"/>
  <figcaption>
    <cdr-caption summary="Components can be drag-and-dropped into your project from the assets panel in Figma."/>
  </figcaption>
</figure>

For more information on getting set up with Figma, visit the [Getting Started](../as-a-designer/) article for designers.

### Page Headers and Footers
The global header and footer are available as shared components. Look for them under the assets tab in Figma.


## Redlining
Effectively communicating specifications to a developer is the only way to ensure your design intention shows up in the delivered product. When you incorporate assets from the UI Toolkit into your designs, you’re also using the common language shared between the design assets in Figma and the code used to display them on the web.

<figure>
  <cdr-img alt="screenshot" :src="$withBase(`/getting-started-handoff/handoff-spacing.png`)"/>
  <figcaption>
    <cdr-caption summary="Here, spacing symbols are used to show separation between components."/>
  </figcaption>
</figure>

Component and token names are pre-embedded across the UI Toolkit to minimize the amount of redlining needed during this step. Developers can simply inspect the design assets to reference their coded counterparts.

### Organizing Design Specifications
We recommended teams keep all their design specifications together under one project. This lets developers know exactly where to find the most up-to-date assets and aligns closely to the single “source of truth” methodology.

- Do keep all design specifications consolidated under one project in Figma
- Don’t bury design specs within exploratory project files

### Developer Review
As developers, you have view access to any project you’re invited to in Figma. The primary tools at your disposal will be the ability to comment and inspect.

<figure>
  <cdr-img alt="screenshot" :src="$withBase(`/getting-started-handoff/handoff-commenting.png`)"/>
  <figcaption>
    <cdr-caption summary="Commenting directly in Figma is a great way to manage handoff conversations with your designer."/>
  </figcaption>
</figure>

<figure>
  <cdr-img alt="screenshot" :src="$withBase(`/getting-started-handoff/handoff-inspect.png`)"/>
  <figcaption>
    <cdr-caption summary="Use the inspect feature to discover component references or token names."/>
  </figcaption>
</figure>



## Suggestions?
Does this process work for you? Do you have any suggestions for improvement? Please let us know using the [#cedar-user-support](https://rei.slack.com/messages/CA58YCGN4) slack channel.


</cdr-doc-table-of-contents-shell>
