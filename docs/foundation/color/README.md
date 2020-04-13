---
{
  "title": "Color",
  "title_metadata": false,
  "layout_type": "LayoutComponent",
  "summary": false,
  "breadcrumbs": [
    {
      "text": "Foundation/"
    }
  ],
}
---
<cdr-doc-table-of-contents-shell>

# Overview

Color design tokens represent the fundamental decisions of Cedar’s visual language:
  - Stores color specifications using variable names, not hard-coded values such as hex values for color
  - Specifies a hierarchical and semantically-defined system


<br/>
<hr>

Below is a list of color tokens with descriptions and values. Web and mobile color tokens have identical hex values but the naming pattern differs. For example, color token names are:
  - **For Web:** cdr-color-text-primary-lightmode
  - **For Android:** cdr_color_text_primary_lightmode
  - **For iOS:** CdrColorTextPrimaryLightmode  


<tokens-color type="background">

## Background Colors

</tokens-color>

<br>

## Typography Colors

<tokens-color type="text" mode="light">
### For Light Backgrounds
</tokens-color>

<br>


<tokens-color type="text" mode="dark">
### For Dark Backgrounds
</tokens-color>

<br>

## Icon Colors

<tokens-color type="icon" mode="light">
### For Light Backgrounds
</tokens-color>

<tokens-color type="icon" mode="dark">
### For Dark Backgrounds
</tokens-color>

<br>

## Border Colors

<tokens-color type="border" mode="light">
### For Light Backgrounds
</tokens-color>

<br>

<tokens-color type="border" mode="dark">
### For Dark Backgrounds
</tokens-color>

<br>


# Guidelines

Cedar offers a range of colors designed to be accessed, understood, and used by all people regardless of their age, background, or ability. We meet or exceed color contrast [WCAG AA accessibility standards](https://www.w3.org/WAI/standards-guidelines/wcag/).

## Examples
<do-dont :examples="[
  {
    type: 'do',
    image: 'color-illustrations/color_1_do.png',
    caption: 'use approved background colors to separate content areas'
  },
  {
    type: 'dont',
    image: 'color-illustrations/color_1_dont.png',
    caption: 'use accent colors as backgrounds'
  }
]" />

<br>

<do-dont :examples="[
  {
    type: 'do',
    image: 'color-illustrations/color_2_do.png',
    caption: 'arrange background colors to promote page hierarchy by minimizing shifts in background'
  },
  {
    type: 'dont',
    image: 'color-illustrations/color_2_dont.png',
    caption: 'alternate background colors in visually jarring ways'
  }
]" />

<br>

## Accessibility
Text choices should be paired with their corresponding background color to ensure accessibility. Legend descriptions for WCAG contrast ratios requirements are:
  - **AAA:** 7:1 for normal text and 4.5:1 for large text
  - **AA:** 4.5:1 for normal text and 3:1 for large text
  - **AA-LG:** Only for large text, graphical objects and user interface components

<br>

**Note:** Large text is defined as 18 point (typically 24px) or larger, or with bold style, 14 point (typically 18.66px) or larger.

<br>


</cdr-doc-table-of-contents-shell>
