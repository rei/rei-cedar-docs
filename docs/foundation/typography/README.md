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

<table>
 <tbody>
   <tr>
     <td>CSS code for Default Body Compact</td>
     <td>Suggested usage: Use only for compact spacing with informational and supplemental body content.</td>
   </tr>
    <tr>
     <td><b>cdr-text-default-body-compact</b></td>
      <td><i>Mixin</i></td>
   </tr>
   <tr>
     <td>cdr-text-default-body-compact-family</td>
     <td>Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif</td>
   </tr>
   <tr>
     <td>cdr-text-default-body-compact-style</td>
     <td>normal</td>
   </tr>
   <tr>
     <td>cdr-text-default-body-compact-weight</td>
     <td>400</td>
   </tr>
   <tr>
     <td>cdr-text-default-body-compact-spacing</td>
     <td>normal</td>
   </tr>
   <tr>
     <td>cdr-text-default-body-compact-size</td>
     <td>1.4rem / 14px</td>
   </tr>
   <tr>
     <td>cdr-text-default-body-compact-height</td>
     <td>2.4rem / 24px</td>
   </tr>
 </tbody>
</table>

<br/>

<table>
 <tbody>
   <tr>
     <td>CSS Code for Default Body</td>
     <td>Suggested usage: Default for body content. Uses a more open line height to font size ratio.</td>
   </tr>
    <tr>
     <td><b>cdr-text-default-body</b></td>
      <td><i>Mixin</i></td>
   </tr>
   <tr>
     <td>cdr-text-default-body-family</td>
     <td>Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif</td>
   </tr>
   <tr>
     <td>cdr-text-default-body-style</td>
     <td>normal</td>
   </tr>
   <tr>
     <td>cdr-text-default-body-weight</td>
     <td>400</td>
   </tr>
   <tr>
     <td>cdr-text-default-body-spacing</td>
     <td>normal</td>
   </tr>
   <tr>
     <td>cdr-text-default-body-size</td>
     <td>1.6rem / 16px</td>
   </tr>
   <tr>
     <td>cdr-text-default-body-height</td>
     <td>2.6rem / 26px</td>
   </tr>
 </tbody>
</table>

<br/>

<table>
 <tbody>
   <tr>
     <td>CSS Code for Editorial Body Compact</td>
     <td>Suggested usage: Use only for compact spacing with editorial body content.</td>
   </tr>
    <tr>
     <td><b>cdr-text-editorial-body-compact</b></td>
      <td><i>Mixin</i></td>
   </tr>
   <tr>
     <td>cdr-text-editorial-body-compact-family</td>
     <td>Sentinel, Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif</td>
   </tr>
   <tr>
     <td>cdr-text-editorial-body-compact-style</td>
     <td>normal</td>
   </tr>
   <tr>
     <td>cdr-text-editorial-body-compact-weight</td>
     <td>400</td>
   </tr>
   <tr>
     <td>cdr-text-editorial-body-compact-spacing</td>
     <td>normal</td>
   </tr>
   <tr>
     <td>cdr-text-editorial-body-compact-size</td>
     <td>1.8rem / 18px</td>
   </tr>
   <tr>
     <td>cdr-text-editorial-body-compact-height</td>
     <td>2.8rem / 28px</td>
   </tr>
 </tbody>
</table>

<br/>

<table>
 <tbody>
   <tr>
     <td>CSS Code for Editorial Body</td>
     <td>Suggested usage: Default for editorial long-form content. Uses a more open line height to font size ratio.</td>
   </tr>
    <tr>
     <td><b>cdr-text-editorial-body</b></td>
      <td><i>Mixin</i></td>
   </tr>
   <tr>
     <td>cdr-text-editorial-body-compact-family</td>
     <td>Sentinel, Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif</td>
   </tr>
   <tr>
     <td>cdr-text-editorial-body-style</td>
     <td>normal</td>
   </tr>
   <tr>
     <td>cdr-text-editorial-body-weight</td>
     <td>400</td>
   </tr>
   <tr>
     <td>cdr-text-editorial-body-spacing</td>
     <td>normal</td>
   </tr>
   <tr>
     <td>cdr-text-editorial-body-size</td>
     <td>2rem / 20px</td>
   </tr>
   <tr>
     <td>cdr-text-editorial-body-height</td>
     <td>3.2rem / 32px</td>
   </tr>
 </tbody>
</table>

<br/>

### Mobile

<table>
 <tbody>
   <tr>
     <td>CSS Code for Display 1</td>
     <td>Suggested usage: Frequently used as the largest title for phone apps and can be used for page titles for larger devices.</td>
   </tr>
    <tr>
     <td>iOS name: Large Title</td>
      <td>Typeface: Roboto<br/> 
          Font weight: Medium<br/> 
          Font size: 34sp<br/> 
          Line height: 40sp
      </td>
   </tr>
 </tbody>
</table>

<br/>

<table>
 <tbody>
   <tr>
     <td>CSS Code for Title 1</td>
     <td>Suggested usage: Content titles, level 1</td>
   </tr>
    <tr>
     <td>iOS name: Title 1</td>
      <td>Typeface: Sentinel<br/> 
          Font weight: Semi Bold<br/>
          Font size: 28sp<br/>
          Line height: 36sp 
      </td>
   </tr>
 </tbody>
</table>

<br/>

<table>
 <tbody>
   <tr>
     <td>CSS Code for Title 2</td>
     <td>Suggested usage: Content titles, product names, level 2</td>
   </tr>
    <tr>
     <td>iOS name: Title 2</td>
      <td>Typeface: Sentinel<br/> 
          Font weight: Semi Bold<br/>
          Font size: 26sp<br/>
          Line height: 32sp 
      </td>
   </tr>
 </tbody>
</table>

<br/>

<table>
 <tbody>
   <tr>
     <td>CSS Code for Title 3</td>
     <td>Suggested usage: Content titles, product names, product prices, level 3</td>
   </tr>
    <tr>
     <td>iOS name: Title 3</td>
      <td>Typeface: Sentinel<br/> 
          Font weight: Semi Bold<br/>
          Font size: 21sp<br/>
          Line height: 28sp 
      </td>
   </tr>
 </tbody>
</table>

<br/>

<table>
 <tbody>
   <tr>
     <td>CSS Code for Headline</td>
     <td>Suggested usage: Heading primarily used with body copy, list items, table headers</td>
   </tr>
    <tr>
     <td>iOS name: Headline</td>
      <td>Typeface: Roboto<br/>
          Font weight: Medium<br/>
          Font size: 17sp<br/>
          Line height: 24sp<br/>
      </td>
   </tr>
 </tbody>
</table>

<br/>

<table>
 <tbody>
   <tr>
     <td>CSS Code for Subhead</td>
     <td>Suggested usage: Subheading primarily used with body copy </td>
   </tr>
    <tr>
     <td>iOS name: Subhead</td>
      <td>Typeface: Roboto<br/>
          Font weight: Medium<br/>
          Font size: 15sp<br/>
          Line height: 20sp<br/>
      </td>
   </tr>
 </tbody>
</table>

<br/>

<table>
 <tbody>
   <tr>
     <td>CSS Code for Body 2</td>
     <td>Suggested usage: Secondary text intended for informational and supplemental body content </td>
   </tr>
    <tr>
     <td>iOS name: Footnote</td>
      <td>Typeface: Roboto<br/>
          Font weight: Regular<br/>
          Font size: 13sp<br/>
          Line height: 20sp<br/>
      </td>
   </tr>
 </tbody>
</table>

<br/>

<table>
 <tbody>
   <tr>
     <td>CSS Code for Body 1</td>
     <td>Suggested usage: Default for body content</td>
   </tr>
    <tr>
     <td>iOS name: Body</td>
      <td>Typeface: Roboto<br/>
          Font weight: Regular<br/>
          Font size: 15sp<br/>
          Line height: 20sp<br/>
      </td>
   </tr>
 </tbody>
</table>

<br/>

<table>
 <tbody>
   <tr>
     <td>CSS Code for Caption 2</td>
     <td>Suggested usage: Smallest text size, use sparingly or for bottom tab bar text</td>
   </tr>
    <tr>
     <td>iOS name: Caption 2</td>
      <td>Typeface: Roboto<br/>
          Font weight: Regular<br/>
          Font size: 11sp<br/>
          Line height: 16sp<br/>
      </td>
   </tr>
 </tbody>
</table>

<br/>

<table>
 <tbody>
   <tr>
     <td>CSS Code for Caption 1</td>
     <td>Suggested usage: Tertiary text, also intended for informational and supplemental body content. Also used for bottom action bar text for larger devices </td>
   </tr>
    <tr>
     <td>iOS name: Caption 1</td>
      <td>Typeface: Roboto<br/>
          Font weight: Regular<br/>
          Font size: 12sp<br/>
          Line height: 16sp<br/>
      </td>
   </tr>
 </tbody>
</table>

<br/>

<table>
 <tbody>
   <tr>
     <td>CSS Code for Button</td>
     <td>Suggested usage: Button text has a thicker weight than body copy </td>
   </tr>
    <tr>
     <td>iOS name: none</td>
      <td>Typeface: Roboto<br/>
          Font weight: Medium<br/>
          Font size: 15sp<br/>
          Line height: 24sp<br/>
      </td>
   </tr>
 </tbody>
</table>

<br/>

<table>
 <tbody>
   <tr>
     <td>CSS Code for Button_accent</td>
     <td>Suggested usage: Link text has a thicker weight than body copy </td>
   </tr>
    <tr>
     <td>iOS name: none</td>
      <td>Typeface: Roboto<br/>
          Font weight: Medium<br/>
          Font size: 15sp<br/>
          Line height: 24sp<br/>
      </td>
   </tr>
 </tbody>
</table>

<br/>

<table>
 <tbody>
   <tr>
     <td>CSS Code for Error State</td>
     <td>Suggested usage: Only for message text with error or warning states </td>
   </tr>
    <tr>
     <td>iOS name: none</td>
      <td>Typeface: Roboto<br/>
          Font weight: Medium<br/>
          Font size: 15sp<br/>
          Line height: 20sp<br/>
      </td>
   </tr>
 </tbody>
</table>

<br/>

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


</cdr-doc-table-of-contents-shell>
</template>

### Sentinel

<b>Sentinel</b> is REI’s first choice for headlines and body copy, as well as anywhere you need an editorial voice.

For <b>Sentinel</b>:

<table>
 <tbody>
   <tr>
     <td>Tokens start with this phrase</td>
     <td>`cdr-text-editorial-`</td>
   </tr>
    <tr>
     <td>Options start with this phrase</td>
      <td>`cdr-spruce-`</td>
   </tr>
 </tbody>
</table>


### Roboto

<b>Roboto</b> shines when you want a simple, straightforward typeface that doesn’t get in the way. It’s used liberally in the digital space as REI’s chosen font for informational or supplemental-level copy.

For <b>Roboto</b>:

<table>
 <tbody>
   <tr>
     <td>Tokens start with this phrase</td>
     <td>`cdr-text-default-`</td>
   </tr>
    <tr>
     <td>Options start with this phrase</td>
      <td>`cdr-redwood-`</td>
   </tr>
 </tbody>
</table>


### Roboto Condensed 

<b>Roboto Condensed</b> is used in special circumstances where size constraints exist or visual differentiation is needed. Examples of its use can be found in form labels and the Call to Action text.

For <b>Roboto Condensed</b>:

<table>
 <tbody>
   <tr>
     <td>Tokens start with this phrase</td>
     <td>`cdr-text-utility-`</td>
   </tr>
    <tr>
     <td>Options start with this phrase</td>
      <td>`cdr-maple-`</td>
   </tr>
 </tbody>
</table>


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

</template>
</cdr-doc-table-of-contents-shell>

<template slot="Guidelines">
<cdr-doc-table-of-contents-shell>
 
# Resources 

**Hi Steve, 
Content for the Resource tab goes here but don't add content yet.
Thanks, Pat**



## Type Scale

The type scale powers all the typography within Cedar components. These preset options are the best way to reinforce visual hierarchy and consistency across pages. Use the styles standalone too—all the options below are also available in the Sketch Toolkit to make your design decisions easier.

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
</cdr-doc-tabs>
