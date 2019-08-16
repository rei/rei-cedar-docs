---
{
  "title": "Caption",
  "layout_type": "LayoutComponent",
  "summary": "Provides further context and attribution for a figure or media asset such as an image, video, or chart",
  "title_metadata": "CdrCaption",
  "see_also": [
    {
      "text": "See Also"
    },
    {
      "text": "Images",
      "href": "../image/"
    }
  ],
  "align": [
    {
      "type": "do",
      "image": "caption/caption_align_do_4-3.png",
      "ratio": "4-3",
      "alt": "Image showing proper alignment use.",
      "caption": "left align the caption to the body copy."
    },
    {
      "type": "dont",
      "image": "caption/caption_align_dont_4-3.png",
      "ratio": "4-3",
      "alt": "Image showing improper alignment use.",
      "caption": "center the caption beneath the media."
    }
  ],
  "media": [
    {
      "type": "do",
      "image": "caption/caption_media_do_4-3.png",
      "ratio": "4-3",
      "alt": "Image showing proper media use.",
      "caption": "provide a caption for images when attribution information is available."
    },
    {
      "type": "dont",
      "image": "caption/caption_media_dont_4-3.png",
      "ratio": "4-3",
      "alt": "Image showing improper media use.",
      "caption": "use captions without associated media content (image, video, chart, etc.)."
    }
  ],
  "separate": [
    {
      "type": "do",
      "image": "caption/caption_separate_do_4-3.png",
      "ratio": "4-3",
      "alt": "Image showing proper use of summary and credit separation.",
      "caption": "provide further explanation of media in the Summary field and attribution in the Credit field."
    },
    {
      "type": "dont",
      "image": "caption/caption_separate_dont_4-3.png",
      "ratio": "4-3",
      "alt": "Image showing improper use of summary and credit separation.",
      "caption": "combine attribution within the Summary field."
    }
  ],
  "summaries": [
    {
      "type": "do",
      "image": "caption/caption_summary_do_4-3.png",
      "ratio": "4-3",
      "alt": "Image showing proper summary use.",
      "caption": "write succinct, informative summaries."
    },
    {
      "type": "dont",
      "image": "caption/caption_summary_dont_4-3.png",
      "ratio": "4-3",
      "alt": "Image showing improper summary use.",
      "caption": "write long summaries that wrap to more than 3 lines on desktop breakpoints."
    }
  ],
  "sandboxData": {
    "components": "CdrCaption"
  },
  "versions": [
    {
      "components": [
        {
          "name": "CdrLink",
          "api": {
            "props": [
              {
                "name": "summary",
                "type": "string",
                "default": "N/A",
                "description": "Sets the string content for the description body of the caption. Not required."
              },
              {
                "name": "credit",
                "type": "string",
                "default": "N/A",
                "description": "Sets the string content for attribution. Not required."
              }
            ]
          }
        }
      ],
      "version": "1.0.0"
    }
  ]
}
---

<cdr-doc-tabs>
<template slot="Overview">
<cdr-doc-table-of-contents-shell>

## Default

Caption aligns to the left alongside the body copy with inset padding. Default caption includes summary and credit.

<cdr-doc-example-code-pair :background-toggle="false" repository-href="/src/components/caption" :sandbox-data="$page.frontmatter.sandboxData" >

```html
  <cdr-caption
    summary="Testing and validating the final fit of the 2018/2019 Tecnica ski boot collection during the September 2017 focus group in Park City, Utah."
    credit="Image Credit: Blizzard Tecnica"/>
```

</cdr-doc-example-code-pair>

## Summary

Summary has same CSS styles as the default; however, only the summary element is displayed.

<cdr-doc-example-code-pair :background-toggle="false" repository-href="/src/components/caption" :sandbox-data="$page.frontmatter.sandboxData">

```html
  <cdr-caption
    summary="Testing and validating the final fit of the 2018/2019 Tecnica ski boot collection during the September 2017 focus group in Park City, Utah."/>
```

</cdr-doc-example-code-pair>


## Credit

Credit has same CSS styles as the default; however, only the credit element is displayed.

<cdr-doc-example-code-pair :background-toggle="false" repository-href="/src/components/caption" :sandbox-data="$page.frontmatter.sandboxData">

```html
  <cdr-caption
    credit="Image Credit: Blizzard Tecnica"/>
```

</cdr-doc-example-code-pair>


## Caption with Image

The captions component is text-only; however, it is meant to be displayed in the context of a media object.

<cdr-doc-example-code-pair :background-toggle="false" repository-href="/src/components/caption" :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, { components: 'CdrCaption, CdrImg' })" >

```html
<figure>
  <cdr-img src="http://via.placeholder.com/350x150"/>
  <figcaption>
    <cdr-caption
    summary="Testing and validating the final fit of the 2018/2019 Tecnica ski boot collection during the September 2017 focus group in Park City, Utah."
    credit="Image Credit: Blizzard Tecnica"/>
  </figcaption>
</figure>

```

</cdr-doc-example-code-pair>


## Accessibility

To ensure that usage of this component complies with accessibility guidelines, do the following:

- Use captions sparingly and only with accompanied media
- Do not use caption text styles for body copy; it is smaller than the recommended size for text readability

<br/>

This component has compliance with WCAG guidelines by:

- Using text color with a Level AA contrast ratio of 4.5:1 contrast between the text color and the background but only when displayed on light backgrounds

</cdr-doc-table-of-contents-shell>
</template>

<template slot="Guidelines">
<cdr-doc-table-of-contents-shell>

## Use When

- Providing further context and attribution to any figure or media asset such as an image, video or chart

### Don’t Use When

- Displaying body copy. Instead, use [Paragraphs](../paragraphs/)
- Breaking up the text styles in a layout for aesthetic purposes

## Content

The Captions component has two separate fields: Summary and Credit.
  - While they often appear together, one is not dependent on the other
  - Both are, however, dependent on media content (image, video, etc)

\
Text fields within a caption:
  - Summary text gives the media context:
      - Keep summary text concise, 1-2 lines at LG breakpoint
      - Use sentence case
  - Credit provides attribution to the correct sources:
      - Helps users gauge the strength and validity of the material the author has used
      - Begin credit text with “Video Credit” or “Image Credit”

## Anatomy

- Captions align to the left border based on the paragraph container and not centered under the media object
- Max width is 498 pixels, even if the media (image, video, or chart) extends beyond the paragraph max width
- Left padding is added to the caption container
<br />
<br />
<cdr-img :src="$withBase(`/caption/spec_caption_layout-4-3.png`)"/>
<br />

### Types of Accreditations

For photos submitted by customers or members:
  - Provide first name, initial of last name (not full last name)
  - If available, social site handle from where the asset was provided
  - For example, Madeline G. @maddyluv

\
For multiple photo accreditations:
  - List in clockwise order from top
  - Separated by commas and semicolons
  - No breaking spaces
  - For example, “Image credits: top left, Madeline G. @maddyluv; top right, Kevin C.; bottom right, George M. @gmonkey”

\
For purchased assets (photos or video):
  - Use full name, provided there a signed release is on file

\
For copyrighted media (photos or video):
  - Use © symbol and date separated by (non-breaking) spaces and photographer name. (e.g. © 2017 Norm Bellows)
  - If date is not available, use © symbol and photographer name separated by a (non-breaking) space. (e.g. © Norm Bellows)

### For More Information

- For more information about photo accreditation recommendations:
  - Noble Blogger Guidelines: [How to Cite Pictures](https://writtent.com/blog/the-honor-code-of-a-noble-blogger-how-to-cite-pictures)
  - NPR Training, Storytelling tips and best practices: [These are NPR's photo caption guidelines](http://training.npr.org/visual/these-are-nprs-photo-caption-guidelines)


## Behavior

### Do / Don’t

Keep summary content short to avoid excess text-wrapping.
<br/>
<br/>
<do-dont :examples="$page.frontmatter.summaries" />

Captions must be accompanied by media asset such as an image, video or chart.
<br/>
<br/>
<do-dont :examples="$page.frontmatter.media" />

Summary and Credit serve different purposes and should remain separate.
<br/>
<br/>
<do-dont :examples="$page.frontmatter.separate" />

Caption stays left aligned with body copy regardless of the width of the media.
<br/>
<br/>
<do-dont :examples="$page.frontmatter.align" />


</cdr-doc-table-of-contents-shell>
</template>

<template slot="API">
<cdr-doc-table-of-contents-shell>

## Props

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

## Usage

The **CdrCaption** component is developed to work within a composition with other components; however composition-type components have not been developed yet.

<br />

The below example demonstrates how to extend this component for use within a figure.

```vue
<figure>
  <cdr-img src="http://via.placeholder.com/350x150" />
  <figcaption>
      <cdr-caption
      summary="Testing and validating the final fit of the 2018/2019 Tecnica ski boot collection during the September 2017 focus group in Park City, Utah"
      credit="Image Credit: Blizzard Tecnica”
    />
  </figcaption>
</figure>
```

</cdr-doc-table-of-contents-shell>
</template>

</cdr-doc-tabs>
