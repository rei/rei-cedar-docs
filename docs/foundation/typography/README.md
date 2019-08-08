---
{
  "title": "Typography",
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
<cdr-doc-tabs :labels="['Overview', 'Guidelines', 'Brand Typography']">
<template slot="Overview">
<cdr-doc-table-of-contents-shell>
  
Typography design tokens represent the fundamental decisions of Cedar’s visual language: 
- Stores font specifications using variable names, not hard-coded values such as font family name or pixel values for font size
- Specifies a hierarchical and semantically defined system

<br/>
<hr>


## Web

### Default

<tokens-typography platform="web" type="default" />

<br>

### Editorial

<tokens-typography platform="web" type="editorial" />

<br/>

### Headings

<tokens-typography platform="web" type="header" />

<br/>
<hr>


## Mobile Apps

### Headings 

<tokens-typography platform="native" type="header" />

<br>

### Body

<tokens-typography platform="native" type="body" />

### Buttons

<tokens-typography platform="native" type="button" />

<br>
<hr/>


</cdr-doc-table-of-contents-shell>
</template>


<template slot="Guidelines">
<cdr-doc-table-of-contents-shell>

## Type Families

Cedar design system uses a limited number of tokens for typography to define core styles. By using tokens, Cedar can respond to changes in the brand identity with minimal impact to the code.

<br/>

Cedar has defined typography specifications and values based on REI's brand guidelines:
- Use these values with caution; type specifications could change
- The design systems team is tracking how options are used in components
- List of typography values are available on the [Brand Typography tab](?active-tab=brand-typography)


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

- **Body:** Uses a more open line height to font size ratio and is best suited for long-form content 

- **Display:** Line height to font size ratio is more condensed than body type specifications and caters to an overall shorter line length. It is best used for big moments, headings, titles, or subheadings. Avoid using display sizes for long-form content

- **Utility:** Use sparingly within UI elements for Cedar components such as form labels and Call-to-Action text


<hr/>

</cdr-doc-table-of-contents-shell>
</template>


<template slot="Brand Typography">
<cdr-doc-table-of-contents-shell>

<cdr-doc-alert icon="warning"><strong>These values should not be used standalone to create custom UI.</strong></cdr-doc-alert>

Typography from REI’s brand guidelines are used throughout Cedar components and design recommendations. 

**Use these values when:**
  - Requesting an update to an existing Cedar component
  - Requesting a new token 
  - Developing a new component that will be adopted by Cedar Design System
  - Creating a custom or product-specific solution that will not be reused 

<br> 

**Don't use these values when:**
  - Creating a broad solution that can be shared across teams. Instead, develop a new component or utility
  - Wanting the benefit of dynamically-updated styles when there are changes in the brand guidelines. Instead, use tokens
  - Typography values are repeated throughout the page. Instead, request a new token

<br> 

Note that the values on this page:
  - May not have a long lifespan
  - May alter the value more frequently
  - May be used for a wide variety of purposes

<br>  

**Requesting a Token** <br>
If you have a request for a token that is missing, you can submit a request using the [Feature Request Form](https://airtable.com/shrcbq9CHthuMO7AC), or ask in the [#cedar-user-support](https://rei.slack.com/messages/CA58YCGN4) Slack channel. View requirements in the <cdr-link :href="$withBase('/foundation/tokens/?active-link=adding-tokens-to-the-repository')">Adding Tokens to the Repository</cdr-link> section on the Tokens article.   

**Developing or Updating Cedar Components** <br>
The Cedar team welcomes contributions from the digital community at REI. If you are interested in contributing design or code, please reach out at in Slack at [#cedar-user-support](https://rei.slack.com/messages/CA58YCGN4), email [cedar@rei.com](mailto:cedar@rei.com), or talk to your manager.


<br>
<hr>

The type scale powers all the typography within Cedar components. These preset values are the best way to reinforce visual hierarchy and consistency across pages. 

## Body 
Uses a more open line height to font size ratio:
- Best suited for long-form content
- Specifications are available for default (Roboto or sans type styles) and editorial (Sentinel or serif type styles)

<br>

### Default 

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto; font-variant: normal; font-weight: 400; font-size: 14px; line-height: 24px; letter-spacing: normal; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
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
        cdr-text-default-compact <br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto; font-variant: normal; font-weight: 400; font-size: 16px; line-height: 26px; letter-spacing: normal; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
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
        cdr-text-default  <br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto; font-variant: normal; font-weight: 400; font-size: 18px; line-height: 28px; letter-spacing: normal; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
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

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto; font-variant: normal; font-weight: 400; font-size: 20px; line-height: 32px; letter-spacing: normal; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
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

### Editorial 

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 400; font-size: 16px; line-height: 26px; letter-spacing: normal; color: #292929; background-color: #FFFFFF; margin: 0 0 2px 0; padding: 16px 0 16px 8px;">A different kind of company</div>
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

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 400; font-size: 18px; line-height: 28px; letter-spacing: normal; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
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
        cdr-text-editorial-compact<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 400; font-size: 20px; line-height: 32px; letter-spacing: normal; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
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
        cdr-text-editorial<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 400; font-size: 24px; line-height: 36px; letter-spacing: normal; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
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

## Display
Line height to font size ratio is more condensed than body type specifications and caters catered to an overall shorter line length:
- Best used for big moments, headings, titles, or subheadings
- Specifications are available for default (Roboto or sans type styles) and editorial (Sentinel or serif type styles)
- Avoid using display sizes for long-form content

### Default 

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto; font-variant: normal; font-weight: 400; font-size: 12px; line-height: 16px; letter-spacing: normal; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
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

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto; font-variant: normal; font-weight: 400; font-size: 14px; line-height: 20px; letter-spacing: normal; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
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

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto; font-variant: normal; font-weight: 400; font-size: 16px; line-height: 24px; letter-spacing: normal; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
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

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto; font-variant: normal; font-weight: 400; font-size: 18px; line-height: 24px; letter-spacing: normal; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
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

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto; font-variant: normal; font-weight: 400; font-size: 20px; line-height: 28px; letter-spacing: normal; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
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

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto; font-variant: normal; font-weight: 400; font-size: 24px; line-height: 32px; letter-spacing: normal; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
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

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto; font-variant: normal; font-weight: 400; font-size: 28px; line-height: 36px; letter-spacing: normal; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
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

### Editorial 

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 600; font-size: 14px; line-height: 20px; letter-spacing: 0.2px; color: #292929; background-color: #FFFFFF; margin: 0;padding: 16px 0 16px 8px;">A different kind of company</div>
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

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 600; font-size: 16px; line-height: 24px; letter-spacing: 0.2px; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
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

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 600; font-size: 18px; line-height: 24px; letter-spacing: 0.2px; color: #292929; background-color: #FFFFFF; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
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
        cdr-text-header-7<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 600; font-size: 20px; line-height: 28px; letter-spacing: 0.2px; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
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
        cdr-text-header-6<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 600; font-size: 24px; line-height: 32px; letter-spacing: 0.2px; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
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
        cdr-text-header-5<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 600; font-size: 28px; line-height: 36px; letter-spacing: 0.2px; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
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
        cdr-text-header-4<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 600; font-size: 32px; line-height: 40px; letter-spacing: 0.2px; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
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
        cdr-text-header-3<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 600; font-size: 40px; line-height: 48px; letter-spacing: 0.2px; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
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
        cdr-text-header-2<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 600; font-size: 56px; line-height: 60px; letter-spacing: 0.2px; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
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
        cdr-text-header-1<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 600; font-size: 76px; line-height: 84px; letter-spacing: 0.2px; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
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

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 600; font-size: 96px; line-height: 104px; letter-spacing: 0.2px; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
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

## Utility
Used sparingly within UI elements, currently used by Cedar components for:
- Form labels
- Call-to-Action text

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto Condensed; font-variant: normal; font-weight: 400; font-size: 12px; line-height: 16px; letter-spacing: normal; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
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

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto Condensed; font-variant: normal; font-weight: 400; font-size: 14px; line-height: 20px; letter-spacing: normal; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
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

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto Condensed; font-variant: normal; font-weight: 400; font-size: 16px; line-height: 24px; letter-spacing: normal; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
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

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto Condensed; font-variant: normal; font-weight: 400; font-size: 18px; line-height: 24px; letter-spacing: normal; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
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

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto Condensed; font-variant: normal; font-weight: 400; font-size: 20px; line-height: 28px; letter-spacing: normal; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
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

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto Condensed; font-variant: normal; font-weight: 400; font-size: 24px; line-height: 32px; letter-spacing: normal; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
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

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto Condensed; font-variant: normal; font-weight: 400; font-size: 28px; line-height: 36px; letter-spacing: normal; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
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
