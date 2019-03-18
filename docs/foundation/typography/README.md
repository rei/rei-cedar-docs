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
<cdr-doc-tabs :labels="['Overview', 'Guidelines', 'Brand Typography']">
<template slot="Overview">
<cdr-doc-table-of-contents-shell>
  
Typography design tokens store the fundamental decisions of Cedar’s font system. 
- Naming entities store visual design attributes such as font specifications
- Replacing hard-coded values such as pixel values for font size
- Maintaining a scalable and consistent visual system for UI development
- Delivering updates to the brand identity with minimal impact to the code
- Specifying a hierarchical and semantically defined system

<br/>


## Typography Tokens

### Web 

<br/>

`CSS code for default-body-compact`  

Suggested usage: Use only for compact spacing with informational and supplemental body content

| Token Name                                  | Values      |
| :------------------------------------------ | :---------- |
| **cdr-text-default-body-compact**           | *Mixin*   |
| cdr-text-default-body-compact-family        | Roboto, "Helvetica Neue",<br> Helvetica, Arial, sans-serif   |
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
| cdr-text-default-body-family                | Roboto, "Helvetica Neue",<br> Helvetica, Arial, sans-serif   |
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
| cdr-text-editorial-body-compact-family      | Sentinel, Roboto, "Helvetica Neue",<br> Helvetica, Arial, sans-serif   |
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
| cdr-text-editorial-body-family              | Sentinel, Roboto, "Helvetica Neue",<br> Helvetica, Arial, sans-serif   | 
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

REI Digital Experience team has also defined typography specifications and values based on REI Brand:
- Use these values with caution; type specifications could change
- Cedar Design Systems team is tracking how options are used in components
- List of typography values is available on the [Resources tab](?active-tab=resources)


### Sentinel

<b>Sentinel</b> is REI’s first choice for headlines and body copy, as well as anywhere you need an editorial voice.

<br>

### Roboto

<b>Roboto</b> shines when you want a simple, straightforward typeface that doesn’t get in the way. It’s used liberally in the digital space as REI’s chosen font for informational or supplemental-level copy.

<br>

### Roboto Condensed 

<b>Roboto Condensed</b> is used in special circumstances where size constraints exist or visual differentiation is needed. Examples of its use can be found in form labels and the Call to Action text.

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


<template slot="Brand Typography">
<cdr-doc-table-of-contents-shell>

<cdr-doc-alert style="border: 1px solid #c77523; border-left: 8px solid #c77523;">These values are NOT to be used by developers for creating custom UI.<br>If you are extending or modifying an existing Cedar component please work with the design system team to add support for your enhancements.</cdr-doc-alert>

Colors from Cedar’s base color palette are use throughout Cedar components and design recommendations. Use these values when:
  - Requesting or updating for an existing Cedar component
  - Requesting a new token 
  - Developing a new component that will be adopted by Cedar Design System
  
Note that the values on this page:
  - May not have a long lifespan
  - May alter the value more frequently
  - May be used for a wide variety of purposes

**Requesting a Token**
If you have a request for a token that is missing, you can [submit a pull request to the cedar-token repo](https://www.npmjs.com/package/@rei/cdr-tokens#addingupdating-tokens) or ask in the #cedar-users-support Slack channel. View <cdr-link :href=“$withBase(‘/foundation/design-tokens?active-link=adding-tokens-to-the-repository’)“>requirements</cdr-link> in the Adding Tokens to the repository on the Design Tokens article.  

**Developing or Updating Cedar Components**
The Cedar team welcomes contributions from the digital community at REI. If you are interested in contributing design or code, please reach out at in Slack at #cedar-user-support, email cedar@rei.com, or talk to your manager.


 
## Type Scale
The type scale powers all the typography within Cedar components. These preset values are the best way to reinforce visual hierarchy and consistency across pages. 

### Body 
Uses a more open line height to font size ratio:
- Best suited for long-form content
- Specifications are available for default (Roboto or sans type styles) and editorial (Sentinel or serif type styles)

#### Default 

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/typography/ex_typography_redwood_body_10.png`)"/>

| Values                        | Tokens Using                                 |
| :---------------------------- | :------------------------------------------  |
| Typeface: Roboto <br>Font Weight: 400 <br>Font Size: 14 <br>Line Height: 24    | cdr-text-default-body-compact   | 

<br>

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/typography/ex_typography_redwood_body_20.png`)"/>

| Values                        | Tokens Using                                 |
| :---------------------------- | :------------------------------------------  |
| Typeface: Roboto <br>Font Weight: 400 <br>Font Size: 16 <br>Line Height: 26    | cdr-text-default-body   | 

<br>

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/typography/ex_typography_redwood_body_30.png`)"/>

| Values                        | Tokens Using                                 |
| :---------------------------- | :------------------------------------------  |
| Typeface: Roboto <br>Font Weight: 400 <br>Font Size: 18 <br>Line Height: 28    | N/A  |  

<br>

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/typography/ex_typography_redwood_body_40.png`)"/>
 
| Values                        | Tokens Using                                 |
| :---------------------------- | :------------------------------------------  |
| Typeface: Roboto <br>Font Weight: 400 <br>Font Size: 20 <br>Line Height: 32    | N/A  | 
        
<br>

<hr />

#### Editorial 

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/typography/ex_typography_spruce_body_10.png`)"/>

| Values                        | Tokens Using                                 |
| :---------------------------- | :------------------------------------------  |
| Typeface: Sentinel <br>Font Weight: 400 <br>Font Size: 16 <br>Line Height: 26    | N/A  | 

<br>

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/typography/ex_typography_spruce_body_20.png`)"/>

| Values                        | Tokens Using                                 |
| :---------------------------- | :------------------------------------------  |
| Typeface: Sentinel <br>Font Weight: 400 <br>Font Size: 18 <br>Line Height: 28    | cdr-text-editorial-body-compact   |  

<br>

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/typography/ex_typography_spruce_body_30.png`)"/>

| Values                        | Tokens Using                                 |
| :---------------------------- | :------------------------------------------  |
| Typeface: Sentinel <br>Font Weight: 400 <br>Font Size: 20 <br>Line Height: 32    | cdr-text-editorial-body   |   

<br>

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/typography/ex_typography_spruce_body_40.png`)"/>
 
| Values                        | Tokens Using                                 |
| :---------------------------- | :------------------------------------------  |
| Typeface: Sentinel <br>Font Weight: 400 <br>Font Size: 24 <br>Line Height: 36    | N/A  | 

<br>

<hr />

### Display
The line height to font size ratio is catered to an overall shorter line length and is best used for big moments, headings, titles, or subheadings. Avoid using display sizes for long-form content.

#### Default 

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/typography/ex_typography_redwood_display_10.png`)"/>

| Values                        | Tokens Using                                 |
| :---------------------------- | :------------------------------------------  |
| Typeface: Roboto <br>Font Weight: 400 <br>Font Size: 12 <br>Line Height: 16    | N/A  |  

<br>

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/typography/ex_typography_redwood_display_20.png`)"/>

| Values                        | Tokens Using                                 |
| :---------------------------- | :------------------------------------------  |
| Typeface: Roboto <br>Font Weight: 400 <br>Font Size: 14 <br>Line Height: 20    | N/A  |  

<br>

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/typography/ex_typography_redwood_display_30.png`)"/>

| Values                        | Tokens Using                                 |
| :---------------------------- | :------------------------------------------  |
| Typeface: Roboto <br>Font Weight: 400 <br>Font Size: 16 <br>Line Height: 24    | N/A  |  

<br>

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/typography/ex_typography_redwood_display_40.png`)"/>

| Values                        | Tokens Using                                 |
| :---------------------------- | :------------------------------------------  |
| Typeface: Roboto <br>Font Weight: 400 <br>Font Size: 18 <br>Line Height: 24    | N/A  |  

<br>

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/typography/ex_typography_redwood_display_50.png`)"/>

| Values                        | Tokens Using                                 |
| :---------------------------- | :------------------------------------------  |
| Typeface: Roboto <br>Font Weight: 400 <br>Font Size: 20 <br>Line Height: 28    | N/A  |  

<br>

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/typography/ex_typography_redwood_display_60.png`)"/>

| Values                        | Tokens Using                                 |
| :---------------------------- | :------------------------------------------  |
| Typeface: Roboto <br>Font Weight: 400 <br>Font Size: 24 <br>Line Height: 32    | N/A  |  

<br>

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/typography/ex_typography_redwood_display_70.png`)"/>

| Values                        | Tokens Using                                 |
| :---------------------------- | :------------------------------------------  |
| Typeface: Roboto <br>Font Weight: 400 <br>Font Size: 28 <br>Line Height: 36    | N/A  |  


<br>

<hr />

#### Editorial 

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/typography/ex_typography_spruce_display_00.png`)"/>

| Values                        | Tokens Using                                 |
| :---------------------------- | :------------------------------------------  |
| Typeface: Sentinel <br>Font Weight: 600 <br>Font Size: 14 <br>Line Height: 20    | N/A  |  

<br>

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/typography/ex_typography_spruce_display_10.png`)"/>

| Values                        | Tokens Using                                 |
| :---------------------------- | :------------------------------------------  |
| Typeface: Sentinel <br>Font Weight: 600 <br>Font Size: 16 <br>Line Height: 24    | N/A  |  

<br>

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/typography/ex_typography_spruce_display_20.png`)"/>

| Values                        | Tokens Using                                 |
| :---------------------------- | :------------------------------------------  |
| Typeface: Sentinel <br>Font Weight: 600 <br>Font Size: 18 <br>Line Height: 24    | N/A  |  

<br>

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/typography/ex_typography_spruce_display_30.png`)"/>

| Values                        | Tokens Using                                 |
| :---------------------------- | :------------------------------------------  |
| Typeface: Sentinel <br>Font Weight: 600 <br>Font Size: 20 <br>Line Height: 28    | N/A  |  

<br>

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/typography/ex_typography_spruce_display_40.png`)"/>

| Values                        | Tokens Using                                 |
| :---------------------------- | :------------------------------------------  |
| Typeface: Sentinel <br>Font Weight: 600 <br>Font Size: 24 <br>Line Height: 32    | N/A  |  

<br>

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/typography/ex_typography_spruce_display_50.png`)"/>

| Values                        | Tokens Using                                 |
| :---------------------------- | :------------------------------------------  |
| Typeface: Sentinel <br>Font Weight: 600 <br>Font Size: 28 <br>Line Height: 36    | N/A  |  

<br>

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/typography/ex_typography_spruce_display_60.png`)"/>

| Values                        | Tokens Using                                 |
| :---------------------------- | :------------------------------------------  |
| Typeface: Sentinel <br>Font Weight: 600 <br>Font Size: 32 <br>Line Height: 40    | N/A  |  

<br>

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/typography/ex_typography_spruce_display_70.png`)"/>

| Values                        | Tokens Using                                 |
| :---------------------------- | :------------------------------------------  |
| Typeface: Sentinel <br>Font Weight: 600 <br>Font Size: 40 <br>Line Height: 48    | N/A  |  

<br>

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/typography/ex_typography_spruce_display_80.png`)"/>

| Values                        | Tokens Using                                 |
| :---------------------------- | :------------------------------------------  |
| Typeface: Sentinel <br>Font Weight: 600 <br>Font Size: 56 <br>Line Height: 60    | N/A  |  

<br>

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/typography/ex_typography_spruce_display_90.png`)"/>

| Values                        | Tokens Using                                 |
| :---------------------------- | :------------------------------------------  |
| Typeface: Sentinel <br>Font Weight: 600 <br>Font Size: 76 <br>Line Height: 84    | N/A  |  

<br>

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/typography/ex_typography_spruce_display_100.png`)"/>

| Values                        | Tokens Using                                 |
| :---------------------------- | :------------------------------------------  |
| Typeface: Sentinel <br>Font Weight: 600 <br>Font Size: 96 <br>Line Height: 104    | N/A  |  

<br>

<hr />

### Utility

Utility type styles are used sparingly within UI elements such as form labels and Call-to-Action text.

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/typography/ex_typography_maple_utility_10).png`)"/>

| Values                        | Tokens Using                                 |
| :---------------------------- | :------------------------------------------  |
| Typeface: Roboto Condensed <br>Font Weight: 400 <br>Font Size: 12 <br>Line Height: 16    | N/A  |  

<br>

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/typography/ex_typography_maple_utility_20).png`)"/>

| Values                        | Tokens Using                                 |
| :---------------------------- | :------------------------------------------  |
| Typeface: Roboto Condensed <br>Font Weight: 400 <br>Font Size: 14 <br>Line Height: 20    | N/A  |  

<br>

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/typography/ex_typography_maple_utility_30).png`)"/>

| Values                        | Tokens Using                                 |
| :---------------------------- | :------------------------------------------  |
| Typeface: Roboto Condensed <br>Font Weight: 400 <br>Font Size: 16 <br>Line Height: 24    | N/A  |  

<br>

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/typography/ex_typography_maple_utility_40).png`)"/>

| Values                        | Tokens Using                                 |
| :---------------------------- | :------------------------------------------  |
| Typeface: Roboto Condensed <br>Font Weight: 400 <br>Font Size: 18 <br>Line Height: 24    | N/A  |  

<br>

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/typography/ex_typography_maple_utility_50).png`)"/>

| Values                        | Tokens Using                                 |
| :---------------------------- | :------------------------------------------  |
| Typeface: Roboto Condensed <br>Font Weight: 400 <br>Font Size: 20 <br>Line Height: 28    | N/A  |  

<br>

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/typography/ex_typography_maple_utility_60).png`)"/>

| Values                        | Tokens Using                                 |
| :---------------------------- | :------------------------------------------  |
| Typeface: Roboto Condensed <br>Font Weight: 400 <br>Font Size: 24 <br>Line Height: 32    | N/A  |  

<br>

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/typography/ex_typography_maple_utility_70).png`)"/>

| Values                        | Tokens Using                                 |
| :---------------------------- | :------------------------------------------  |
| Typeface: Roboto Condensed <br>Font Weight: 400 <br>Font Size: 28 <br>Line Height: 36    | N/A  |  

<br>

<hr />

</cdr-doc-table-of-contents-shell>
</template>
</cdr-doc-tabs>
