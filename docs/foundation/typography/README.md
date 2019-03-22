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
  
Typography design tokens store the fundamental decisions of Cedar’s visual language: 
- Stores font specifications using variable names, not hard-coded values such as pixel values for font size
- Allows us to maintain a scalable, adjustable, and consistent visual system 
- Delivers updates to the brand identity with minimal impact to the code
- Specifies a hierarchical and semantically defined system

<br/>


## Typography Tokens

### Web 

<br/>

**NOTE: Testing new format (Web 2)**
<br>

<div style="overflow: hidden; white-space: nowrap; margin: 8px 0 8px 0;  padding: 16px 0 16px 0; background-color: #FFFFFF ;"><typography-example name="cdr-text-default-body-compact" /> </div>

**cdr-text-default-body-compact** 
<br>
**Suggested usage:** Use only for compact spacing with informational and supplemental body content 
<table>
  <tbody>
    <tr>
      <td>cdr-text-default-body-compact-family </td>
      <td>Roboto, "Helvetica Neue", Helvetica,<br> Arial, sans-serif </td>
    </tr>
    <tr>
      <td>cdr-text-default-body-compact-style </td>
      <td>Normal </td>
    </tr>
    <tr>
      <td>cdr-text-default-body-compact-weight </td>
      <td>400 </td>
    </tr>
    <tr>
      <td>cdr-text-default-body-compact-spacing </td>
      <td>Normal </td>
    </tr>
    <tr>
      <td>cdr-text-default-body-compact-size </td>
      <td>14px </td>
    </tr>   
    <tr>
      <td>cdr-text-default-body-compact-height </td>
      <td>24px </td>
    </tr>   
  </tbody>
</table>

<br/>


<div style="overflow: hidden; white-space: nowrap; margin: 8px 0 8px 0;  padding: 16px 0 16px 0; background-color: #FFFFFF ;"><typography-example name="cdr-text-default-body-compact" /> </div>

**cdr-text-default-body-compact** 
<br>
**Suggested usage:** Use only for compact spacing with informational and supplemental body content 
<table>
  <tbody>
    <tr>
      <td>cdr-text-default-body-compact-family </td>
      <td>Roboto, "Helvetica Neue", Helvetica,<br> Arial, sans-serif </td>
    </tr>
    <tr>
      <td>cdr-text-default-body-compact-style </td>
      <td>Normal </td>
    </tr>
    <tr>
      <td>cdr-text-default-body-compact-weight </td>
      <td>400 </td>
    </tr>
    <tr>
      <td>cdr-text-default-body-compact-spacing </td>
      <td>Normal </td>
    </tr>
    <tr>
      <td>cdr-text-default-body-compact-size </td>
      <td>14px </td>
    </tr>   
    <tr>
      <td>cdr-text-default-body-compact-height  </td>
      <td>24px </td>
    </tr>   
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; margin: 8px 0 8px 0;  padding: 16px 0 16px 0; background-color: #FFFFFF ;"><typography-example name="cdr-text-default-body" /> </div>

**cdr-text-default-body** 
<br><br> 
**Suggested usage:** Default for body content. Uses a more open line height to font size ratio
<br>
<table>
  <tbody>
    <tr>
      <td>cdr-text-default-body-compact-family </td>
      <td>Roboto, "Helvetica Neue", Helvetica,<br> Arial, sans-serif </td>
    </tr>
    <tr>
      <td>cdr-text-default-body-compact-style </td>
      <td>Normal </td>
    </tr>
    <tr>
      <td>cdr-text-default-body-compact-weight </td>
      <td>400 </td>
    </tr>
    <tr>
      <td>cdr-text-default-body-compact-spacing </td>
      <td>Normal </td>
    </tr>
    <tr>
      <td>cdr-text-default-body-compact-size </td>
      <td>16px </td>
    </tr>   
    <tr>
      <td>cdr-text-default-body-compact-height  </td>
      <td>26px </td>
    </tr>   
  </tbody>
</table>

**NOTE: Keep this - previous formatting**
<br>

<typography-example name="cdr-text-default-body" />

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

<typography-example name="cdr-text-editorial-body-compact" />

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


<typography-example name="cdr-text-editorial-body" />

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

**NOTE: Testing new format (Mobile 2)**
<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto; font-variant: normal; font-weight: 500; font-size: 34px; line-height: 40px; letter-spacing: normal; color: #292929; margin: 8px 0 8px 0;  padding: 16px 0 16px 0; background-color: #FFFFFF ;">A different kind of company</div>

<b>Display 1</b> (Android)<br>
<b>Large Title</b> (iOS)<br>
<b>Suggested Usage:</b> Frequently used as the largest title for phone apps and can be used for page titles for larger devices 
<br>
<table>
  <tbody>
    <tr>
      <td>font-family </td>
      <td>Roboto </td>
    </tr>
    <tr>
      <td>font-weight </td>
      <td>Medium </td>
    </tr>
    <tr>
      <td>font-size </td>
      <td>34sp </td>
    </tr>
    <tr>
      <td>line-height </td>
      <td>40sp </td>
    </tr>   
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 600; font-size: 28px; line-height: 36px; letter-spacing: normal; color: #292929; margin: 8px 0 8px 0;  padding: 16px 0 16px 0; background-color: #FFFFFF ;">A different kind of company</div>

<b>Title 1</b> (Android and iOS)<br>
<b>Suggested Usage:</b> Content titles, level 1
<br>
<table>
  <tbody>
    <tr>
      <td>font-family </td>
      <td>Sentinel </td>
    </tr>
    <tr>
      <td>font-weight </td>
      <td>Semi Bold </td>
    </tr>
    <tr>
      <td>font-size </td>
      <td>28sp </td>
    </tr>
    <tr>
      <td>line-height </td>
      <td>36sp </td>
    </tr>   
  </tbody>
</table>

<br>

**NOTE: Keep this - previous formatting**
<br>

`CSS code for Display 1`

Suggested usage: Frequently used as the largest title for phone apps and can be used for page titles for larger devices 

| Token Name                                  | Values                       |
| :------------------------------------------ | :--------------------------- |
| Android name: Display 1 <br>iOS name: Large Title <br> <br> <br>          | font-family: Roboto <br>font-weight: Medium <br>font-size: 34sp <br>line-height: 40sp |

<br>

`CSS code for Title 1`  

Suggested usage: Content titles, level 1

| Token Name                                  | Values                       |
| :------------------------------------------ | :--------------------------- |
| Android name: Title 1 <br>iOS name: Title 1 <br> <br> <br>          | font-family: Sentinel <br>font-weight: Semi Bold <br>font-size: 28sp <br>line-height: 36sp |

<br>

`CSS code for Title 2` 

Suggested usage: Content titles, product names, level 2

| Token Name                                  | Values                       |
| :------------------------------------------ | :--------------------------- |
| Android name: Title 2 <br>iOS name: Title 2 <br> <br> <br>          | font-family: Sentinel <br>font-weight: Semi Bold <br>font-size: 26sp <br>line-height: 32sp  |

<br>

`CSS code for Title 3` 

Suggested usage: Content titles, product names, product prices, level 3

| Token Name                                  | Values                       |
| :------------------------------------------ | :--------------------------- |
| Android name: Title 3 <br>iOS name: Title 3<br> <br> <br>          | font-family: Sentinel <br>font-weight: Semi Bold <br>font-size: 21sp <br>line-height: 28sp  |

<br>

`CSS code for Headline`

Suggested usage: Heading primarily used with body copy, list items, table headers

| Token Name                                  | Values                       |
| :------------------------------------------ | :--------------------------- |
| Android name: Headline <br>iOS name: Headline <br> <br> <br>          | font-family: Roboto <br>font-weight: Medium <br>font-size: 17sp <br>line-height: 24sp  |

<br>

`CSS code for Subhead`

Suggested usage: Subheading primarily used with body copy 

| Token Name                                  | Values                       |
| :------------------------------------------ | :--------------------------- |
| Android name: Subhead <br>iOS name: Subhead <br> <br> <br>          | font-family: Roboto <br>font-weight: Medium <br>font-size: 15sp <br>line-height: 20sp |

<br>

`CSS code for Body 2`

Suggested usage: Secondary text intended for informational and supplemental body content

| Token Name                                  | Values                       |
| :------------------------------------------ | :--------------------------- |
| Android name: Body 2 <br>iOS name: Footnote <br> <br> <br>          | font-family: Roboto <br>font-weight: Regular <br>font-size: 13sp <br>line-height: 20sp |

<br>

`CSS code for Body 1`

Suggested usage: Default for body content

| Token Name                                  | Values                       |
| :------------------------------------------ | :--------------------------- |
| Android name: Body 1 <br>iOS name: Body <br> <br> <br>          | font-family: Roboto <br>font-weight: Regular <br>font-size: 15sp <br>line-height: 20sp  |

<br>

`CSS code for Caption 2`

Suggested usage: Smallest text size, use sparingly or for bottom tab bar text

| Token Name                                  | Values                       |
| :------------------------------------------ | :--------------------------- |
| Android name: Caption 2 <br>iOS name: Caption 2 <br> <br> <br>          | font-family: Roboto <br>font-weight: Regular <br>font-size: 11sp <br>line-height: 16sp  |

<br>

`CSS code for Caption 1`

Suggested usage: Tertiary text, also intended for informational and supplemental body content. Also used for bottom action bar text for larger devices 

| Token Name                                  | Values                       |
| :------------------------------------------ | :--------------------------- |
| Android name: Caption 1 <br>iOS name: Caption 1<br> <br> <br>          | font-family: Roboto <br>font-weight: Regular <br>font-size: 12sp <br>line-height: 16sp  |

<br>

`CSS code for Button`

Suggested usage: Button text has a thicker weight than body copy

| Token Name                                  | Values                       |
| :------------------------------------------ | :--------------------------- |
| Android name: Button <br>iOS name: none <br> <br> <br>          | font-family: Roboto <br>font-weight: Medium <br>font-size: 15sp <br>line-height: 24sp  |

<br>

`CSS code for Button_accent`

Suggested usage: Link text has a thicker weight than body copy

| Token Name                                  | Values                       |
| :------------------------------------------ | :--------------------------- |
| Android name: Button_accent <br>iOS name: none <br> <br> <br>          | font-family: Roboto <br>font-weight: Medium <br>font-size: 15sp <br>line-height: 24sp  |

<br>

`CSS code for Error State`  
Suggested usage: Only for message text with error or warning states

| Token Name                                  | Values                       |
| :------------------------------------------ | :--------------------------- |
| Android name: Error State <br>iOS name: none <br> <br> <br>          | font-family: Roboto <br>font-weight: Medium <br>font-size: 15sp <br>line-height: 20sp  |

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
- List of typography values is available on the [Brand Typography tab](?active-tab=brand typography)


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
For type scale specifications are located on the [Brand Typography tab](?active-tab=brand typography). Specifications are available for:

- **Body:** Uses a more open line height to font size ratio and is best suited for long-form content 

- **Display:** Line height to font size ratio is more condensed than body type specifications and caters to an overall shorter line length. It is best used for big moments, headings, titles, or subheadings. Avoid using display sizes for long-form content 

- **Utility:** Use sparingly within UI elements for Cedar components such as form labels and Call-to-Action text


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
If you have a request for a token that is missing, you can [submit a pull request to the cedar-token repo](https://www.npmjs.com/package/@rei/cdr-tokens#addingupdating-tokens) or ask in the #cedar-users-support Slack channel. View requirements on the(<cdr-link :href="$withBase('/foundation/tokens?active-link=adding-tokens-to-the-repository')">Adding Tokens to the Repository</cdr-link>) on the Design Tokens article.  

**Developing or Updating Cedar Components**
The Cedar team welcomes contributions from the digital community at REI. If you are interested in contributing design or code, please reach out at in Slack at #cedar-user-support, email cedar@rei.com, or talk to your manager.


 
## Type Scale
The type scale powers all the typography within Cedar components. These preset values are the best way to reinforce visual hierarchy and consistency across pages. 

### Body 
Uses a more open line height to font size ratio:
- Best suited for long-form content
- Specifications are available for default (Roboto or sans type styles) and editorial (Sentinel or serif type styles)

#### Default 

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto; font-variant: normal; font-weight: 400; font-size: 14px; line-height: 24px; letter-spacing: normal; color: #292929; margin: 0 0 16px 0;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Roboto <br>
        font-weight: 400 <br>
        font-size: 14 <br>
        line-height: 24  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        cdr-text-default-body-compact <br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto; font-variant: normal; font-weight: 400; font-size: 16px; line-height: 26px; letter-spacing: normal; color: #292929; margin: 0 0 16px 0;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Roboto <br>
        font-weight: 400 <br>
        font-size: 16 <br>
        line-height: 26  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        cdr-text-default-body  <br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto; font-variant: normal; font-weight: 400; font-size: 18px; line-height: 28px; letter-spacing: normal; color: #292929; margin: 0 0 16px 0;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Roboto <br>
        font-weight: 400 <br>
        font-size: 18 <br>
        line-height: 28  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        N/A<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto; font-variant: normal; font-weight: 400; font-size: 20px; line-height: 32px; letter-spacing: normal; color: #292929; margin: 0 0 16px 0;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Roboto <br>
        font-weight: 400 <br>
        font-size: 20 <br>
        line-height: 32  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        N/A<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<hr />

#### Editorial 

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 400; font-size: 16px; line-height: 26px; letter-spacing: normal; color: #292929; margin: 0 0 16px 0;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Sentinel <br>
        font-weight: 400 <br>
        font-size: 16 <br>
        line-height: 26  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        N/A<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 400; font-size: 18px; line-height: 28px; letter-spacing: normal; color: #292929; margin: 0 0 16px 0;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Sentinel <br>
        font-weight: 400 <br>
        font-size: 18 <br>
        line-height: 28  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        cdr-text-editorial-body-compact<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 400; font-size: 20px; line-height: 32px; letter-spacing: normal; color: #292929; margin: 0 0 16px 0;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Sentinel <br>
        font-weight: 400 <br>
        font-size: 20 <br>
        line-height: 32  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        cdr-text-editorial-body<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 400; font-size: 24px; line-height: 36px; letter-spacing: normal; color: #292929; margin: 0 0 16px 0;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Sentinel <br>
        font-weight: 400 <br>
        font-size: 24 <br>
        line-height: 36  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        N/A<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<hr />

### Display
Line height to font size ratio is more condensed than body type specifications and caters catered to an overall shorter line length:
- Best used for big moments, headings, titles, or subheadings
- Specifications are available for default (Roboto or sans type styles) and editorial (Sentinel or serif type styles)
- Avoid using display sizes for long-form content

#### Default 

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto; font-variant: normal; font-weight: 400; font-size: 12px; line-height: 16px; letter-spacing: normal; color: #292929; margin: 0 0 16px 0;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Roboto <br>
        font-weight: 400 <br>
        font-size: 12 <br>
        line-height: 16  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        N/A<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto; font-variant: normal; font-weight: 400; font-size: 14px; line-height: 20px; letter-spacing: normal; color: #292929; margin: 0 0 16px 0;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Roboto <br>
        font-weight: 400 <br>
        font-size: 14 <br>
        line-height: 20  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        N/A<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto; font-variant: normal; font-weight: 400; font-size: 16px; line-height: 24px; letter-spacing: normal; color: #292929; margin: 0 0 16px 0;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Roboto <br>
        font-weight: 400 <br>
        font-size: 16 <br>
        line-height: 24  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        N/A<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto; font-variant: normal; font-weight: 400; font-size: 18px; line-height: 24px; letter-spacing: normal; color: #292929; margin: 0 0 16px 0;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Roboto <br>
        font-weight: 400 <br>
        font-size: 18 <br>
        line-height: 24  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        N/A<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto; font-variant: normal; font-weight: 400; font-size: 20px; line-height: 28px; letter-spacing: normal; color: #292929; margin: 0 0 16px 0;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Roboto <br>
        font-weight: 400 <br>
        font-size: 20 <br>
        line-height: 28  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        N/A<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto; font-variant: normal; font-weight: 400; font-size: 24px; line-height: 32px; letter-spacing: normal; color: #292929; margin: 0 0 16px 0;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Roboto <br>
        font-weight: 400 <br>
        font-size: 24 <br>
        line-height: 32  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        N/A<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto; font-variant: normal; font-weight: 400; font-size: 28px; line-height: 36px; letter-spacing: normal; color: #292929; margin: 0 0 16px 0;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Roboto <br>
        font-weight: 400 <br>
        font-size: 28 <br>
        line-height: 36  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        N/A<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<hr />

#### Editorial 


<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 600; font-size: 14px; line-height: 20px; letter-spacing: 0.2; color: #292929; margin: 0 0 16px 0;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Sentinel<br>
        font-weight: 600 <br>
        font-size: 14 <br>
        line-height: 20  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        N/A<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 600; font-size: 16px; line-height: 24px; letter-spacing: 0.2; color: #292929; margin: 0 0 16px 0;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Sentinel<br>
        font-weight: 600 <br>
        font-size: 16 <br>
        line-height: 24  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        N/A<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 600; font-size: 18px; line-height: 24px; letter-spacing: 0.2; color: #292929; margin: 0 0 16px 0;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Sentinel<br>
        font-weight: 600 <br>
        font-size: 18 <br>
        line-height: 24  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        N/A<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 600; font-size: 20px; line-height: 28px; letter-spacing: 0.2; color: #292929; margin: 0 0 16px 0;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Sentinel<br>
        font-weight: 600 <br>
        font-size: 20 <br>
        line-height: 28  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        N/A<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 600; font-size: 24px; line-height: 32px; letter-spacing: 0.2; color: #292929; margin: 0 0 16px 0;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Sentinel<br>
        font-weight: 600 <br>
        font-size: 24 <br>
        line-height: 32  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        N/A<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 600; font-size: 28px; line-height: 36px; letter-spacing: 0.2; color: #292929; margin: 0 0 16px 0;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Sentinel<br>
        font-weight: 600 <br>
        font-size: 28 <br>
        line-height: 36  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        N/A<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 600; font-size: 32px; line-height: 40px; letter-spacing: 0.2; color: #292929; margin: 0 0 16px 0;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Sentinel<br>
        font-weight: 600 <br>
        font-size: 32 <br>
        line-height: 40  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        N/A<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 600; font-size: 40px; line-height: 48px; letter-spacing: 0.2; color: #292929; margin: 0 0 16px 0;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Sentinel<br>
        font-weight: 600 <br>
        font-size: 40 <br>
        line-height: 48  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        N/A<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 600; font-size: 56px; line-height: 60px; letter-spacing: 0.2; color: #292929; margin: 0 0 16px 0;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Sentinel<br>
        font-weight: 600 <br>
        font-size: 56 <br>
        line-height: 60  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        N/A<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 600; font-size: 76px; line-height: 84px; letter-spacing: 0.2; color: #292929; margin: 0 0 16px 0;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Sentinel<br>
        font-weight: 600 <br>
        font-size: 76 <br>
        line-height: 84  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        N/A<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 600; font-size: 96px; line-height: 104px; letter-spacing: 0.2; color: #292929; margin: 0 0 16px 0;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Sentinel<br>
        font-weight: 600 <br>
        font-size: 96 <br>
        line-height: 104  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        N/A<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<hr />

### Utility
Used sparingly within UI elements, currently used by Cedar components for:
- Form labels
- Call-to-Action text

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto Condensed; font-variant: normal; font-weight: 400; font-size: 12px; line-height: 16px; letter-spacing: normal; color: #292929; margin: 0 0 16px 0;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=264>
        font-family: Roboto Condensed<br>
        font-weight: 400 <br>
        font-size: 12 <br>
        line-height: 16  
      </td>
      <td width=328>
        <b>Tokens:</b><br>
        N/A<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto Condensed; font-variant: normal; font-weight: 400; font-size: 14px; line-height: 20px; letter-spacing: normal; color: #292929; margin: 0 0 16px 0;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=264>
        font-family: Roboto Condensed<br>
        font-weight: 400 <br>
        font-size: 14 <br>
        line-height: 20  
      </td>
      <td width=328>
        <b>Tokens:</b><br>
        N/A<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto Condensed; font-variant: normal; font-weight: 400; font-size: 16px; line-height: 24px; letter-spacing: normal; color: #292929; margin: 0 0 16px 0;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=264>
        font-family: Roboto Condensed<br>
        font-weight: 400 <br>
        font-size: 16 <br>
        line-height: 24  
      </td>
      <td width=328>
        <b>Tokens:</b><br>
        N/A<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto Condensed; font-variant: normal; font-weight: 400; font-size: 18px; line-height: 24px; letter-spacing: normal; color: #292929; margin: 0 0 16px 0;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=264>
        font-family: Roboto Condensed<br>
        font-weight: 400 <br>
        font-size: 18 <br>
        line-height: 24  
      </td>
      <td width=328>
        <b>Tokens:</b><br>
        N/A<br>
       <br>
       <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto Condensed; font-variant: normal; font-weight: 400; font-size: 20px; line-height: 28px; letter-spacing: normal; color: #292929; margin: 0 0 16px 0;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=264>
        font-family: Roboto Condensed<br>
        font-weight: 400 <br>
        font-size: 20 <br>
        line-height: 28  
      </td>
      <td width=328>
        <b>Tokens:</b><br>
        N/A<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto Condensed; font-variant: normal; font-weight: 400; font-size: 24px; line-height: 32px; letter-spacing: normal; color: #292929; margin: 0 0 16px 0;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=264>
        font-family: Roboto Condensed<br>
        font-weight: 400 <br>
        font-size: 24 <br>
        line-height: 32  
      </td>
      <td width=328>
        <b>Tokens:</b><br>
        N/A<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto Condensed; font-variant: normal; font-weight: 400; font-size: 28px; line-height: 36px; letter-spacing: normal; color: #292929; margin: 0 0 16px 0;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=264>
        font-family: Roboto Condensed<br>
        font-weight: 400 <br>
        font-size: 28 <br>
        line-height: 36  
      </td>
      <td width=328>
        <b>Tokens:</b><br>
        N/A<br>
       <br>
       <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<hr />

</cdr-doc-table-of-contents-shell>
</template>
</cdr-doc-tabs>
