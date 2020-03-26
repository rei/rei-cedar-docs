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

Color is one of the most important attributes of brand expression. The Cedar Design System color palette focuses on a primary color of natural and comforting green, with a supporting set of secondary colors that reflects REI's brand expression of the colors of nature. These brand colors are reflected through color tokens in our UI and other places.  

Color design tokens represent the fundamental decisions of Cedar’s visual language:
  - Stores color specifications using variable names, not hard-coded values such as hex values for color
  - Specifies a hierarchical and semantically-defined system


<br/>
<hr>

Below is a list of color tokens with descriptions and values. Web and mobile color tokens have identical hex values but the naming pattern differs. For example, color token names are:
  - **For Web:** cdr-color-text-primary
  - **For Android:** cdr_color_text_primary
  - **For iOS:** CdrColorTextPrimary  

For more information on naming structure for design token, visit the [Design Tokens](https://rei.github.io/rei-cedar-docs/components/design-tokens/#naming-structure-for-design-tokens/) page. <<Comment by RC: Link might change once we update the doc site>>

<tokens-color />

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
Text color and background color tokens have been chosen to ensure that any combination of them is accessible. By using color tokens semantically you can ensure that your application remains accessible as the system is updated. Mixing in non-Cedar color values may result in inaccessible combinations. Legend descriptions for WCAG contrast ratios requirements are:
  - **AAA:** 7:1 for normal text and 4.5:1 for large text
  - **AA:** 4.5:1 for normal text and 3:1 for large text
  - **AA-LG:** Only for large text, graphical objects and user interface components

<br>

**Note:** Large text is defined as 18 point (typically 24px) or larger, or with bold style, 14 point (typically 18.66px) or larger.

<br>


</cdr-doc-table-of-contents-shell>
