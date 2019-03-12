---
{
  "title": "Typography",
  "title_metadata": false,
  "layout": "LayoutComponent",
  "summary": false,
  "breadcrumbs": [
    {
      "text": "Foundation/"
    }
  ],
}
---
<cdr-doc-tabs :labels="['Overview', 'Guidelines', 'Resources']">
<template slot="Overview">
<cdr-doc-table-of-contents-shell>
  
Typography design tokens store the fundamental decisions of Cedar’s font system. 
- Naming entities store visual design attributes such as font specifications
- Replacing hard-coded values such as pixel values for font size
- Maintaining a scalable and consistent visual system for UI development
- Delivering updates to the brand identity with minimal impact to the code
- Specifying a hierarchical and semantically defined system

<br/>

## Type Tokens

### Web

## Typography Tokens
### Web 

<br/>

`CSS code for default-body-compact`  

Suggested usage: Use only for compact spacing with informational and supplemental body content

| Token Name                                  | Values      |
| :------------------------------------------ | :---------- |
| **cdr-text-default-body-compact**           | *Mixin*   |
| cdr-text-default-body-compact-family        | Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif   |
| cdr-text-default-body-compact-style         | normal  |
| cdr-text-default-body-compact-weight        | 400   |
| cdr-text-default-body-compact-spacing       | normal   |
| cdr-text-default-body-compact-size          | 1.4rem / 14px   |
| cdr-text-default-body-compact-height        | 2.4rem / 24px  |


<br/>


`CSS code for default-body` 

Suggested usage: Default for body content. Uses a more open line height to font size ratio

| Token Name                                  | Values      |
| :------------------------------------------ | :---------- |
| **cdr-text-default-body**                   | *Mixin*   |
| cdr-text-default-body-family                | Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif   |
| cdr-text-default-body-style                 | normal  |
| cdr-text-default-body-weight                | 400   |
| cdr-text-default-body-spacing               | normal   | 
| cdr-text-default-body-size                  | 1.6rem / 16px  |
| cdr-text-default-body-height                | 2.6rem / 26px  |


<br/>

`CSS code for editorial-body-compact`  

Suggested usage: Use only for compact spacing with editorial body content

| Token Name                                  | Values      |
| :------------------------------------------ | :---------- |
| **cdr-text-editorial-body-compact**         | *Mixin*   |
| cdr-text-editorial-body-compact-family      | Sentinel, Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif   |
| cdr-text-editorial-body-compact-style       | normal  |
| cdr-text-editorial-body-compact-weight      | 400   |
| cdr-text-editorial-body-compact-spacing     | normal   |
| cdr-text-editorial-body-compact-size        | 1.8rem / 18px |
| cdr-text-editorial-body-compact-height      | 2.8rem / 28px |


<br/>


`CSS code for editorial-body` 

Suggested usage: Default for editorial long-form content. Uses a more open line height to font size ratio

| Token Name                                  | Values      |
| :------------------------------------------ | :---------- |
| **cdr-text-editorial-body**                 | *Mixin*   |
| cdr-text-editorial-body-family              | Sentinel, Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif   | 
| cdr-text-editorial-body-style               | normal  |
| cdr-text-editorial-body-weight              | 400   |
| cdr-text-editorial-body-spacing             | normal   | 
| cdr-text-editorial-body-size                | 2rem / 20px |
| cdr-text-editorial-body-height              | 3.2rem / 32px |


<br/>


### Mobile

`CSS code for Display 1`

Suggested usage: Frequently used as the largest title for phone apps and can be used for page titles for larger devices 

| Token Name                                  | Values                       |
| :------------------------------------------ | :--------------------------- |
| Android name: Display 1 <br>iOS name: Large Title <br> <br> <br>          | Typeface: Roboto <br>Font weight: Medium <br>Font size: 34sp <br>Line height: 40sp |

<br>

`CSS code for Title 1`  

Suggested usage: Content titles, level 1

| Token Name                                  | Values                       |
| :------------------------------------------ | :--------------------------- |
| Android name: Title 1 <br>iOS name: Title 1 <br> <br> <br>          | Typeface: Sentinel <br>Font weight: Semi Bold <br>Font size: 28sp <br> Line height: 36sp |

<br>

`CSS code for Title 2` 

Suggested usage: Content titles, product names, level 2

| Token Name                                  | Values                       |
| :------------------------------------------ | :--------------------------- |
| Android name: Title 2 <br>iOS name: Title 2 <br> <br> <br>          | Typeface: Sentinel <br>Font weight: Semi Bold <br>Font size: 26sp <br>Line height: 32sp  |

<br>

`CSS code for Title 3` 

Suggested usage: Content titles, product names, product prices, level 3

| Token Name                                  | Values                       |
| :------------------------------------------ | :--------------------------- |
| Android name: Title 3 <br>iOS name: Title 3<br> <br> <br>          | Typeface: Sentinel <br>Font weight: Semi Bold <br>Font size: 21sp <br>Line height: 28sp  |

<br>

`CSS code for Headline`

Suggested usage: Heading primarily used with body copy, list items, table headers

| Token Name                                  | Values                       |
| :------------------------------------------ | :--------------------------- |
| Android name: Headline <br>iOS name: Headline <br> <br> <br>          | Typeface: Roboto <br>Font weight: Medium <br>Font size: 17sp <br>Line height: 24sp  |

<br>

`CSS code for Subhead`

Suggested usage: Subheading primarily used with body copy 

| Token Name                                  | Values                       |
| :------------------------------------------ | :--------------------------- |
| Android name: Subhead <br>iOS name: Subhead <br> <br> <br>          | Typeface: Roboto <br>Font weight: Medium <br>Font size: 15sp <br>Line height: 20sp |

<br>

`CSS code for Body 2`

Suggested usage: Secondary text intended for informational and supplemental body content

| Token Name                                  | Values                       |
| :------------------------------------------ | :--------------------------- |
| Android name: Body 2 <br>iOS name: Footnote <br> <br> <br>          | Typeface: Roboto <br>Font weight: Regular <br>Font size: 13sp <br> Line height: 20sp |

<br>

`CSS code for Body 1`

Suggested usage: Default for body content

| Token Name                                  | Values                       |
| :------------------------------------------ | :--------------------------- |
| Android name: Body 1 <br>iOS name: Body <br> <br> <br>          | Typeface: Roboto <br>Font weight: Regular <br>Font size: 15sp <br>Line height:  20sp  |

<br>

`CSS code for Caption 2`

Suggested usage: Smallest text size, use sparingly or for bottom tab bar text

| Token Name                                  | Values                       |
| :------------------------------------------ | :--------------------------- |
| Android name: Caption 2 <br>iOS name: Caption 2 <br> <br> <br>          | Typeface: Roboto <br>Font weight: Regular <br>Font size: 11sp <br>Line height: 16sp  |

<br>

`CSS code for Caption 1`

Suggested usage: Tertiary text, also intended for informational and supplemental body content. Also used for bottom action bar text for larger devices 

| Token Name                                  | Values                       |
| :------------------------------------------ | :--------------------------- |
| Android name: Caption 1 <br>iOS name: Caption 1<br> <br> <br>          | Typeface: Roboto <br>Font weight: Regular <br>Font size: 12sp <br>Line height: 16sp  |

<br>

`CSS code for Button`

Suggested usage: Button text has a thicker weight than body copy

| Token Name                                  | Values                       |
| :------------------------------------------ | :--------------------------- |
| Android name: Button <br>iOS name: none <br> <br> <br>          | Typeface: Roboto <br>Font weight: Medium <br>Font size: 15sp <br>Line height: 24sp  |

<br>

`CSS code for Button_accent`

Suggested usage: Link text has a thicker weight than body copy

| Token Name                                  | Values                       |
| :------------------------------------------ | :--------------------------- |
| Android name: Button_accent <br>iOS name: none <br> <br> <br>          | Typeface: Roboto <br>Font weight: Medium <br>Font size: 15sp <br>Line height: 24sp  |

<br>

`CSS code for Error State`  
Suggested usage: Only for message text with error or warning states

| Token Name                                  | Values                       |
| :------------------------------------------ | :--------------------------- |
| Android name: Error State <br>iOS name: none <br> <br> <br>          | Typeface: Roboto <br>Font weight: Medium <br>Font size: 15sp <br>Line height: 20sp  |

<br>

<hr/>

</cdr-doc-table-of-contents-shell>
</template>


<template slot="Guidelines">
<cdr-doc-table-of-contents-shell>

## Type Families

Cedar design system uses a limited number of tokens for typography:
- To define core styles
- By using tokens, Cedar can respond to changes in the brand identity with minimal impact to the code
- List of tokens is available on the [Overview tab](?active-tab=overview)

<br/>

Cedar has also defined a set of options for typography:
- Options provide great flexibility while aligning with design decisions
- Use options with caution; type specifications could change
- The Cedar team is tracking how options are used in components
- List of options is available on the [Resources tab](?active-tab=resources)


### Sentinel

<b>Sentinel</b> is REI’s first choice for headlines and body copy, as well as anywhere you need an editorial voice.

For <b>Sentinel</b>:
- Tokens start with this phrase: `cdr-text-editorial-`
- Options start with this phrase: `cdr-spruce-`

<br>

### Roboto

<b>Roboto</b> shines when you want a simple, straightforward typeface that doesn’t get in the way. It’s used liberally in the digital space as REI’s chosen font for informational or supplemental-level copy.

For <b>Roboto</b>:
- Tokens start with this phrase: `cdr-text-default-`
- Options start with this phrase:`cdr-redwood-`

<br>

### Roboto Condensed 

<b>Roboto Condensed</b> is used in special circumstances where size constraints exist or visual differentiation is needed. Examples of its use can be found in form labels and the Call to Action text.

For <b>Roboto Condensed</b>:
- Tokens start with this phrase: `cdr-text-utility-`
- Options start with this phrase: `cdr-maple-`

<br>

## Type Scale

The type scale powers all the typography within Cedar components. These preset options are the best way to reinforce visual hierarchy and consistency across pages. The styles can also be used standalone—all the options listed on the Resources tab are also available in the Sketch Toolkit to make your design decisions easier.


### Display 

The line height to font size ratio is catered to an overall shorter line length:
- Best used for big moments, headings, titles, or subheadings
- Avoid using display sizes for long-form content
- Frequently used by Cedar components for UI text 


### Body

Using a more open line height to font size ratio:
- Best suited for long-form content
- Specification is available for default (Roboto) and editorial (Sentinel) tokens


### Utility

Utility type styles are used sparingly within UI elements, currently used by Cedar components for:
- Form labels
- Call-to-Action text

<hr/>

</cdr-doc-table-of-contents-shell>
</template>


<template slot="Resources">
<cdr-doc-table-of-contents-shell>
 

## Type Scale


### Display Sizes

The line height to font size ratio is catered to an overall shorter line length and is best used for big moments, headings, titles, or subheadings. Avoid using display sizes for long-form content.

<cdr-doc-typography-sample token="spruce-display-00" weight="600" size="14" height="20"/>
<cdr-doc-typography-sample token="spruce-display-10" weight="600" size="16" height="24"/>
<cdr-doc-typography-sample token="spruce-display-20" weight="600" size="18" height="24"/>
<cdr-doc-typography-sample token="spruce-display-30" weight="600" size="20" height="28"/>
<cdr-doc-typography-sample token="spruce-display-40" weight="600" size="24" height="32"/>
<cdr-doc-typography-sample token="spruce-display-50" weight="600" size="28" height="36"/>
<cdr-doc-typography-sample token="spruce-display-60" weight="600" size="32" height="40"/>
<cdr-doc-typography-sample token="spruce-display-70" weight="600" size="40" height="48"/>
<cdr-doc-typography-sample token="spruce-display-80" weight="600" size="56" height="60"/>
<cdr-doc-typography-sample token="spruce-display-90" weight="600" size="76" height="84"/>
<cdr-doc-typography-sample token="spruce-display-100" weight="600" size="96" height="104"/>

<hr />

<cdr-doc-typography-sample token="redwood-display-10" weight="400" size="12" height="16"/>
<cdr-doc-typography-sample token="redwood-display-20" weight="400" size="14" height="20"/>
<cdr-doc-typography-sample token="redwood-display-30" weight="400" size="16" height="24"/>
<cdr-doc-typography-sample token="redwood-display-40" weight="400" size="18" height="24"/>
<cdr-doc-typography-sample token="redwood-display-50" weight="400" size="20" height="28"/>
<cdr-doc-typography-sample token="redwood-display-60" weight="400" size="24" height="32"/>
<cdr-doc-typography-sample token="redwood-display-70" weight="400" size="28" height="36"/>

<hr />

### Body

Using a more open line height to font size ratio, body typography is best suited for long-form content.

<cdr-doc-typography-sample token="spruce-body-20" weight="400" size="18" height="28"/>
<cdr-doc-typography-sample token="spruce-body-30" weight="400" size="20" height="32"/>

<hr />

<cdr-doc-typography-sample token="redwood-body-10" weight="400" size="14" height="24"/>
<cdr-doc-typography-sample token="redwood-body-20" weight="400" size="16" height="26"/>
<cdr-doc-typography-sample token="redwood-body-30" weight="400" size="18" height="28"/>
<cdr-doc-typography-sample token="redwood-body-40" weight="400" size="20" height="32"/>

<hr />

### Utility

Utility type styles are used sparingly within UI elements such as form labels and Call-to-Action text.

<cdr-doc-typography-sample token="maple-utility-10" weight="400" size="12" height="16"/>
<cdr-doc-typography-sample token="maple-utility-20" weight="400" size="14" height="20"/>
<cdr-doc-typography-sample token="maple-utility-30" weight="400" size="16" height="24"/>
<cdr-doc-typography-sample token="maple-utility-40" weight="400" size="18" height="24"/>
<cdr-doc-typography-sample token="maple-utility-50" weight="400" size="20" height="28"/>
<cdr-doc-typography-sample token="maple-utility-60" weight="400" size="24" height="32"/>
<cdr-doc-typography-sample token="maple-utility-70" weight="400" size="28" height="36"/>

</cdr-doc-table-of-contents-shell>
</template>
</cdr-doc-tabs>
