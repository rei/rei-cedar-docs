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
  
Typography design tokens represent the fundamental decisions of Cedar’s visual language: 
- Stores font specifications using variable names, not hard-coded values such as font family name or pixel values for font size
- Specifies a hierarchical and semantically defined system

<br/>
<hr>


## Web 

### Default 

<div style="overflow: hidden; white-space: nowrap; margin: 8px 0 8px 0;  padding: 16px 0 16px 8px; background-color: #FFFFFF ;"><typography-example name="cdr-text-default-compact" /> </div>

**cdr-text-default-compact**  (_Mixin_)  <br>
Suggested usage: Use only for compact spacing with informational and supplemental body content

<table>
  <tbody>
    <tr>
      <td>cdr-text-default-compact-family </td>
      <td>Roboto, "Helvetica Neue", Helvetica,<br> Arial, sans-serif </td>
    </tr>
    <tr>
      <td>cdr-text-default-compact-style </td>
      <td>Normal </td>
    </tr>
    <tr>
      <td>cdr-text-default-compact-weight </td>
      <td>400 </td>
    </tr>
    <tr>
      <td>cdr-text-default-compact-spacing </td>
      <td>Normal </td>
    </tr>
    <tr>
      <td>cdr-text-default-compact-size </td>
      <td>14px </td>
    </tr>   
    <tr>
      <td>cdr-text-default-compact-height </td>
      <td>24px </td>
    </tr>   
  </tbody>
</table>

<br/>


<div style="overflow: hidden; white-space: nowrap; margin: 8px 0 8px 0;  padding: 16px 0 16px 8px; background-color: #FFFFFF ;"><typography-example name="cdr-text-default" /> </div>

**cdr-text-default**  (_Mixin_)  <br>
Suggested usage: Default for body content. Uses a more open line height to font size ratio

<table>
  <tbody>
    <tr>
      <td>cdr-text-default-family </td>
      <td>Roboto, "Helvetica Neue", Helvetica,<br> Arial, sans-serif </td>
    </tr>
    <tr>
      <td>cdr-text-default-style </td>
      <td>Normal </td>
    </tr>
    <tr>
      <td>cdr-text-default-weight </td>
      <td>400 </td>
    </tr>
    <tr>
      <td>cdr-text-default-spacing </td>
      <td>Normal </td>
    </tr>
    <tr>
      <td>cdr-text-default-size </td>
      <td>16px </td>
    </tr>   
    <tr>
      <td>cdr-text-default-height  </td>
      <td>26px </td>
    </tr>   
  </tbody>
</table>

<br>

### Editorial 

<div style="overflow: hidden; white-space: nowrap; margin: 0 0 8px 0; padding: 16px 0 16px 8px; background-color: #FFFFFF ;"> <typography-example name="cdr-text-editorial-compact" /> </div>

**cdr-text-editorial-compact**  (_Mixin_)  <br>
Suggested Usage: Use only for compact spacing with editorial body content

<table>
  <tbody>
    <tr>
      <td>cdr-text-editorial-compact-family </td>
      <td>Sentinel, Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif </td>
    </tr>
    <tr>
      <td>cdr-text-editorial-compact-style</td>
      <td>Normal </td>
    </tr>
    <tr>
      <td>cdr-text-editorial-compact-weight</td>
      <td>400 </td>
    </tr>
    <tr>
      <td>cdr-text-editorial-compact-spacing</td>
      <td>Normal </td>
    </tr>
    <tr>
      <td>cdr-text-editorial-compact-size</td>
      <td>18px </td>
    </tr>
    <tr>
      <td>cdr-text-editorial-compact-height</td>
      <td>28px </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; margin: 0 0 8px 0; padding: 16px 0 16px 8px; background-color: #FFFFFF ;"> <typography-example name="cdr-text-editorial" /> </div>

**cdr-text-editorial**  (_Mixin_)  <br>
Suggested Usage: Default for editorial long-form content. Uses a more open line height to font size ratio

<table>
  <tbody>
    <tr>
      <td>cdr-text-editorial-family </td>
      <td>Sentinel, Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif </td>
    </tr>
    <tr>
      <td>cdr-text-editorial-style</td>
      <td>Normal </td>
    </tr>
    <tr>
      <td>cdr-text-editorial-weight</td>
      <td>400 </td>
    </tr>
    <tr>
      <td>cdr-text-editorial-spacing</td>
      <td>Normal </td>
    </tr>
    <tr>
      <td>cdr-text-editorial-size</td>
      <td>20px </td>
    </tr>
    <tr>
      <td>cdr-text-editorial-height</td>
      <td>32px </td>
    </tr>
  </tbody>
</table>


### Headings 

<div style="overflow: hidden; white-space: nowrap; margin: 0 0 8px 0; padding: 16px 0 16px 8px; background-color: #FFFFFF ;"> <typography-example name="cdr-text-header-1" /> </div>

**cdr-text-header-1**  (_Mixin_)  <br>

<table>
  <tbody>
    <tr>
      <td>cdr-text-header-1-family </td>
      <td>Sentinel, Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif </td>
    </tr>
    <tr>
      <td>cdr-text-header-1-style</td>
      <td>Normal </td>
    </tr>
    <tr>
      <td>cdr-text-header-1-weight</td>
      <td>600 </td>
    </tr>
    <tr>
      <td>cdr-text-header-1-spacing</td>
      <td>0.2 </td>
    </tr>
    <tr>
      <td>cdr-text-header-1-size</td>
      <td>56px </td>
    </tr>
    <tr>
      <td>cdr-text-header-1-height</td>
      <td>60px </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; margin: 0 0 8px 0; padding: 16px 0 16px 8px; background-color: #FFFFFF ;"> <typography-example name="cdr-text-header-2" /> </div>

**cdr-text-header-2**  (_Mixin_)  <br>

<table>
  <tbody>
    <tr>
      <td>cdr-text-header-2-family </td>
      <td>Sentinel, Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif </td>
    </tr>
    <tr>
      <td>cdr-text-header-2-style</td>
      <td>Normal </td>
    </tr>
    <tr>
      <td>cdr-text-header-2-weight</td>
      <td>600 </td>
    </tr>
    <tr>
      <td>cdr-text-header-2-spacing</td>
      <td>0.2 </td>
    </tr>
    <tr>
      <td>cdr-text-header-2-size</td>
      <td>40px </td>
    </tr>
    <tr>
      <td>cdr-text-header-2-height</td>
      <td>48px </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; margin: 0 0 8px 0; padding: 16px 0 16px 8px; background-color: #FFFFFF ;"> <typography-example name="cdr-text-header-3" /> </div>

**cdr-text-header-3**  (_Mixin_)  <br>

<table>
  <tbody>
    <tr>
      <td>cdr-text-header-3-family </td>
      <td>Sentinel, Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif </td>
    </tr>
    <tr>
      <td>cdr-text-header-3-style</td>
      <td>Normal </td>
    </tr>
    <tr>
      <td>cdr-text-header-3-weight</td>
      <td>600 </td>
    </tr>
    <tr>
      <td>cdr-text-header-3-spacing</td>
      <td>0.2 </td>
    </tr>
    <tr>
      <td>cdr-text-header-3-size</td>
      <td>32px </td>
    </tr>
    <tr>
      <td>cdr-text-header-3-height</td>
      <td>40px </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; margin: 0 0 8px 0; padding: 16px 0 16px 8px; background-color: #FFFFFF ;"> <typography-example name="cdr-text-header-4" /> </div>

**cdr-text-header-4**  (_Mixin_)  <br>

<table>
  <tbody>
    <tr>
      <td>cdr-text-header-4-family </td>
      <td>Sentinel, Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif </td>
    </tr>
    <tr>
      <td>cdr-text-header-4-style</td>
      <td>Normal </td>
    </tr>
    <tr>
      <td>cdr-text-header-4-weight</td>
      <td>600 </td>
    </tr>
    <tr>
      <td>cdr-text-header-4-spacing</td>
      <td>0.2 </td>
    </tr>
    <tr>
      <td>cdr-text-header-4-size</td>
      <td>28px </td>
    </tr>
    <tr>
      <td>cdr-text-header-4-height</td>
      <td>36px </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; margin: 0 0 8px 0; padding: 16px 0 16px 8px; background-color: #FFFFFF ;"> <typography-example name="cdr-text-header-5" /> </div>

**cdr-text-header-5**  (_Mixin_)  <br>

<table>
  <tbody>
    <tr>
      <td>cdr-text-header-5-family </td>
      <td>Sentinel, Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif </td>
    </tr>
    <tr>
      <td>cdr-text-header-5-style</td>
      <td>Normal </td>
    </tr>
    <tr>
      <td>cdr-text-header-5-weight</td>
      <td>600 </td>
    </tr>
    <tr>
      <td>cdr-text-header-5-spacing</td>
      <td>0.2 </td>
    </tr>
    <tr>
      <td>cdr-text-header-5-size</td>
      <td>24px </td>
    </tr>
    <tr>
      <td>cdr-text-header-5-height</td>
      <td>32px </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; margin: 0 0 8px 0; padding: 16px 0 16px 8px; background-color: #FFFFFF ;"> <typography-example name="cdr-text-header-6" /> </div>

**cdr-text-header-6**  (_Mixin_)  <br>

<table>
  <tbody>
    <tr>
      <td>cdr-text-header-6-family </td>
      <td>Sentinel, Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif </td>
    </tr>
    <tr>
      <td>cdr-text-header-6-style</td>
      <td>Normal </td>
    </tr>
    <tr>
      <td>cdr-text-header-6-weight</td>
      <td>600 </td>
    </tr>
    <tr>
      <td>cdr-text-header-6-spacing</td>
      <td>0.2 </td>
    </tr>
    <tr>
      <td>cdr-text-header-6-size</td>
      <td>20px </td>
    </tr>
    <tr>
      <td>cdr-text-header-6-height</td>
      <td>28px </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; margin: 0 0 8px 0; padding: 16px 0 16px 8px; background-color: #FFFFFF ;"> <typography-example name="cdr-text-header-7" /> </div>

**cdr-text-header-7**  (_Mixin_)  <br>

<table>
  <tbody>
    <tr>
      <td>cdr-text-header-7-family </td>
      <td>Sentinel, Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif </td>
    </tr>
    <tr>
      <td>cdr-text-header-7-style</td>
      <td>Normal </td>
    </tr>
    <tr>
      <td>cdr-text-header-7-weight</td>
      <td>600 </td>
    </tr>
    <tr>
      <td>cdr-text-header-7-spacing</td>
      <td>0.2 </td>
    </tr>
    <tr>
      <td>cdr-text-header-7-size</td>
      <td>18px </td>
    </tr>
    <tr>
      <td>cdr-text-header-7-height</td>
      <td>24px </td>
    </tr>
  </tbody>
</table>

<br/>
<hr>


## Mobile

### Headings 

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto; font-variant: normal; font-weight: 500; font-size: 34px; line-height: 40px; letter-spacing: normal; color: #292929; margin: 0 0 8px 0; padding: 16px 0 16px 8px; background-color: #FFFFFF ;">A different kind of company</div>

Android: Display 1 <br>
iOS: Large Title <br>
Suggested Usage: Frequently used as the largest title for phone apps and can be used for page titles for larger devices 

<table>
  <tbody>
    <tr>
      <td width=160>font-family </td>
      <td>Roboto </td>
    </tr>
    <tr>
      <td width=160>font-weight</td>
      <td>Medium </td>
    </tr>
    <tr>
      <td width=160>font-size</td>
      <td>34sp</td>
    </tr>
    <tr>
      <td width=160>font-height</td>
      <td>40sp </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 600; font-size: 28px; line-height: 36px; letter-spacing: normal; color: #292929; margin: 0 0 8px 0; padding: 16px 0 16px 8px; background-color: #FFFFFF ;">A different kind of company</div>

Android and iOS: Title 1 <br>
Suggested Usage: Content titles, level 1

<table>
  <tbody>
    <tr>
      <td width=160>font-family </td>
      <td>Sentinel </td>
    </tr>
    <tr>
      <td width=160>font-weight </td>
      <td>Semi Bold </td>
    </tr>
    <tr>
      <td width=160>font-size </td>
      <td>28sp </td>
    </tr>
    <tr>
      <td width=160>line-height </td>
      <td>36sp </td>
    </tr>   
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 600; font-size: 26px; line-height: 32px; letter-spacing: normal; color: #292929; margin: 0 0 8px 0; padding: 16px 0 16px 8px; background-color: #FFFFFF ;">A different kind of company</div>

Android and iOS: Title 2 <br>
Suggested Usage: Content titles, product names, level 2

<table>
  <tbody>
    <tr>
      <td width=160>font-family </td>
      <td>Sentinel </td>
    </tr>
    <tr>
      <td width=160>font-weight </td>
      <td>Semi Bold </td>
    </tr>
    <tr>
      <td width=160>font-size </td>
      <td>26sp </td>
    </tr>
    <tr>
      <td width=160>line-height </td>
      <td>32sp </td>
    </tr>   
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 600; font-size: 21px; line-height: 28px; letter-spacing: normal; color: #292929; margin: 0 0 8px 0; padding: 16px 0 16px 8px; background-color: #FFFFFF ;">A different kind of company</div>

Android and iOS: Title 3 <br>
Suggested Usage: Content titles, product names, product prices, level 3

<table>
  <tbody>
    <tr>
      <td width=160>font-family </td>
      <td>Sentinel </td>
    </tr>
    <tr>
      <td width=160>font-weight </td>
      <td>Semi Bold </td>
    </tr>
    <tr>
      <td width=160>font-size </td>
      <td>21sp </td>
    </tr>
    <tr>
      <td width=160>line-height </td>
      <td>28sp </td>
    </tr>   
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto; font-variant: normal; font-weight: 500; font-size: 17px; line-height: 24px; letter-spacing: normal; color: #292929; margin: 0 0 8px 0; padding: 16px 0 16px 8px; background-color: #FFFFFF ;">A different kind of company</div>

Android and iOS: Headline  <br>
Suggested Usage: Heading primarily used with body copy, list items, table headers

<table>
  <tbody>
    <tr>
      <td width=160>font-family </td>
      <td>Roboto </td>
    </tr>
    <tr>
      <td width=160>font-weight </td>
      <td>Medium </td>
    </tr>
    <tr>
      <td width=160>font-size </td>
      <td>17sp </td>
    </tr>
    <tr>
      <td width=160>line-height </td>
      <td>24sp </td>
    </tr>   
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto; font-variant: normal; font-weight: 500; font-size: 15px; line-height: 20px; letter-spacing: normal; color: #292929; margin: 0 0 8px 0; padding: 16px 0 16px 8px; background-color: #FFFFFF ;">A different kind of company</div>

Android and iOS: Subhead  <br>
Suggested Usage: Subheading primarily used with body copy 

<table>
  <tbody>
    <tr>
      <td width=160>font-family </td>
      <td>Roboto </td>
    </tr>
    <tr>
      <td width=160>font-weight </td>
      <td>Medium </td>
    </tr>
    <tr>
      <td width=160>font-size </td>
      <td>15sp </td>
    </tr>
    <tr>
      <td width=160>line-height </td>
      <td>20sp </td>
    </tr>   
  </tbody>
</table>

<br>

### Body 

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto; font-variant: normal; font-weight: 400; font-size: 13px; line-height: 20px; letter-spacing: normal; color: #292929; margin: 0 0 8px 0; padding: 16px 0 16px 8px; background-color: #FFFFFF ;">A different kind of company</div>

Android: Body 2  <br>
iOS: Footnote <br>
Suggested Usage: Secondary text intended for informational and supplemental body content 

<table>
  <tbody>
    <tr>
      <td width=160>font-family </td>
      <td>Roboto </td>
    </tr>
    <tr>
      <td width=160>font-weight </td>
      <td>Regular </td>
    </tr>
    <tr>
      <td width=160>font-size </td>
      <td>13sp </td>
    </tr>
    <tr>
      <td width=160>line-height </td>
      <td>20sp </td>
    </tr>   
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto; font-variant: normal; font-weight: 400; font-size: 15px; line-height: 20px; letter-spacing: normal; color: #292929; margin: 0 0 8px 0; padding: 16px 0 16px 8px; background-color: #FFFFFF ;">A different kind of company</div>

Android: Body 1  <br>
iOS: Body <br>
Suggested Usage: Default for body content 

<table>
  <tbody>
    <tr>
      <td width=160>font-family </td>
      <td>Roboto </td>
    </tr>
    <tr>
      <td width=160>font-weight </td>
      <td>Regular </td>
    </tr>
    <tr>
      <td width=160>font-size </td>
      <td>15sp </td>
    </tr>
    <tr>
      <td width=160>line-height </td>
      <td>20sp </td>
    </tr>   
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto; font-variant: normal; font-weight: 400; font-size: 11px; line-height: 16px; letter-spacing: normal; color: #292929; margin: 0 0 8px 0; padding: 16px 0 16px 8px; background-color: #FFFFFF ;">A different kind of company</div>

Android and iOS: Caption 2  <br>
Suggested Usage: Smallest text size, use sparingly or for bottom tab bar text 

<table>
  <tbody>
    <tr>
      <td width=160>font-family </td>
      <td>Roboto </td>
    </tr>
    <tr>
      <td width=160>font-weight </td>
      <td>Regular </td>
    </tr>
    <tr>
      <td width=160>font-size </td>
      <td>11sp </td>
    </tr>
    <tr>
      <td width=160>line-height </td>
      <td>16sp </td>
    </tr>   
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto; font-variant: normal; font-weight: 400; font-size: 12px; line-height: 20px; letter-spacing: normal; color: #292929; margin: 0 0 8px 0; padding: 16px 0 16px 8px; background-color: #FFFFFF ;">A different kind of company</div>

Android and iOS: Caption 1 <br>
Suggested Usage: Tertiary text, also intended for informational and supplemental body content. Also used for bottom action bar text for larger devices  

<table>
  <tbody>
    <tr>
      <td width=160>font-family </td>
      <td>Roboto </td>
    </tr>
    <tr>
      <td width=160>font-weight </td>
      <td>Regular </td>
    </tr>
    <tr>
      <td width=160>font-size </td>
      <td>12sp </td>
    </tr>
    <tr>
      <td width=160>line-height </td>
      <td>16sp </td>
    </tr>   
  </tbody>
</table>

<br>

### Buttons 

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto; font-variant: normal; font-weight: 500; font-size: 15px; line-height: 24px; letter-spacing: normal; color: #292929; margin: 0 0 8px 0; padding: 16px 0 16px 8px; background-color: #FFFFFF ;">A different kind of company</div>

Android: Button <br>
iOS: N/A <br>
Suggested Usage: Button text has a thicker weight than body copy

<table>
  <tbody>
    <tr>
      <td width=160>font-family </td>
      <td>Roboto </td>
    </tr>
    <tr>
      <td width=160>font-weight </td>
      <td>Medium </td>
    </tr>
    <tr>
      <td width=160>font-size </td>
      <td>15sp </td>
    </tr>
    <tr>
      <td width=160>line-height </td>
      <td>24sp </td>
    </tr>   
  </tbody>
</table>

<br>

### Links 

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto; font-variant: normal; font-weight: 500; font-size: 15px; line-height: 24px; letter-spacing: normal; color: #3278ae; margin: 0 0 8px 0; padding: 16px 0 16px 8px; background-color: #FFFFFF ;">A different kind of company</div>

Android: Button_accent <br>
iOS: N/A <br>
Suggested Usage: Link text has a thicker weight than body copy. Use #3278ae only on light background

<table>
  <tbody>
    <tr>
      <td width=160>font-family </td>
      <td>Roboto </td>
    </tr>
    <tr>
      <td width=160>font-weight </td>
      <td>Medium </td>
    </tr>
    <tr>
      <td width=160>font-size </td>
      <td>15sp </td>
    </tr>
    <tr>
      <td width=160>line-height </td>
      <td>24sp </td>
    </tr>    
    <tr>
      <td width=160>color </td>
      <td>#3278ae </td>
    </tr>   
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto; font-variant: normal; font-weight: 500; font-size: 15px; line-height: 24px; letter-spacing: normal; color: #5197cd; margin: 0 0 8px 0; padding: 16px 0 16px 8px; background-color: #292929 ;">A different kind of company</div>

Android: Button_accent  <br>
iOS: N/A <br>
Suggested Usage: Link text has a thicker weight than body copy. Use #5197cd only on dark background

<table>
  <tbody>
    <tr>
      <td width=160>font-family </td>
      <td>Roboto </td>
    </tr>
    <tr>
      <td width=160>font-weight </td>
      <td>Medium </td>
    </tr>
    <tr>
      <td width=160>font-size </td>
      <td>15sp </td>
    </tr>
    <tr>
      <td width=160>line-height </td>
      <td>24sp </td>
    </tr>    
    <tr>
      <td width=160>color </td>
      <td>#5197cd </td>
    </tr>   
  </tbody>
</table>

<br>

### Message States 

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto; font-variant: normal; font-weight: 500; font-size: 15px; line-height: 20px; letter-spacing: normal; color: #c32a2e; margin: 0 0 8px 0; padding: 16px 0 16px 8px; background-color: #FFFFFF ;">A different kind of company</div>

Android: Error State <br>
iOS: N/A <br>
Suggested Usage: Only for message text with error or warning states. Use #c32a2e only on light background

<table>
  <tbody>
    <tr>
      <td width=160>font-family </td>
      <td>Roboto </td>
    </tr>
    <tr>
      <td width=160>font-weight </td>
      <td>Medium </td>
    </tr>
    <tr>
      <td width=160>font-size </td>
      <td>15sp </td>
    </tr>
    <tr>
      <td width=160>line-height </td>
      <td>20sp </td>
    </tr>    
    <tr>
      <td width=160>color </td>
      <td>#c32a2e </td>
    </tr>   
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto; font-variant: normal; font-weight: 500; font-size: 15px; line-height: 20px; letter-spacing: normal; color: #e86868; margin: 0 0 8px 0; padding: 16px 0 16px 8px; background-color: #292929 ;">A different kind of company</div>

Android: Error State <br>
iOS: N/A <br>
Suggested Usage: Only for message text with error or warning states. Use #e86868 only on dark background

<table>
  <tbody>
    <tr>
      <td width=160>font-family </td>
      <td>Roboto </td>
    </tr>
    <tr>
      <td width=160>font-weight </td>
      <td>Medium </td>
    </tr>
    <tr>
      <td width=160>font-size </td>
      <td>15sp </td>
    </tr>
    <tr>
      <td width=160>line-height </td>
      <td>20sp </td>
    </tr>    
    <tr>
      <td width=160>color </td>
      <td>#e86868 </td>
    </tr>   
  </tbody>
</table>


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

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 600; font-size: 14px; line-height: 20px; letter-spacing: 0.2; color: #292929; background-color: #FFFFFF; margin: 0;padding: 16px 0 16px 8px;">A different kind of company</div>
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

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 600; font-size: 16px; line-height: 24px; letter-spacing: 0.2; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
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

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 600; font-size: 18px; line-height: 24px; letter-spacing: 0.2; color: #292929; background-color: #FFFFFF; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
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

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 600; font-size: 20px; line-height: 28px; letter-spacing: 0.2; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
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

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 600; font-size: 24px; line-height: 32px; letter-spacing: 0.2; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
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

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 600; font-size: 28px; line-height: 36px; letter-spacing: 0.2; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
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

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 600; font-size: 32px; line-height: 40px; letter-spacing: 0.2; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
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

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 600; font-size: 40px; line-height: 48px; letter-spacing: 0.2; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
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

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 600; font-size: 56px; line-height: 60px; letter-spacing: 0.2; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
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

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 600; font-size: 76px; line-height: 84px; letter-spacing: 0.2; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
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

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 600; font-size: 96px; line-height: 104px; letter-spacing: 0.2; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
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
