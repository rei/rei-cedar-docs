---
{
  "title": "Color",
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
<cdr-doc-tabs :labels="['Overview', 'Guidelines', 'Brand Palette']">
<template slot="Overview">
<cdr-doc-table-of-contents-shell>
  

Color design tokens store the fundamental decisions of Cedar’s visual language: 
  - Stores color specifications using variable names, not hard-coded values such as hex values for color
  - Allows us to maintain a scalable, adjustable, and consistent visual system 
  - Delivers updates to the brand identity with minimal impact to the code
  - Specifies a hierarchical and semantically defined system


<br/>
<hr>

List of color tokens with descriptions and values. Web and mobile color tokens have identical hex values but the naming pattern differs. For example, color token names are:
  - **For Web:** cdr-color-text-primary-lightmode 
  - **For Android:** cdr_color_text_primary_lightmode

## Background Colors

<table>
  <tbody>
    <tr>
      <td width=64> <color-example color="cdr-color-background-lightest" /> </td>
      <td><b>cdr-color-background-lightest </b> <br>Only use for light background color - lightest value </td>
      <td width=160>#ffffff <br>r255  g255  b255 </td>
    </tr>
    <tr>
      <td width=64> <color-example color="cdr-color-background-lighter" /> </td>
      <td><b>cdr-color-background-lighter </b> <br>Only use for light background color - value is between light and lightest  </td>
      <td width=160>#fafafa <br>r250  g250  b250 </td>
    </tr>
    <tr>
      <td width=64> <color-example color="cdr-color-background-light" /> </td>
      <td><b>cdr-color-background-light</b> <br>Only use for light background color </td>
      <td width=160>#f7f7f7 <br>r247  g247  b247 </td>
    </tr>
    <tr>
      <td width=64> <color-example color="cdr-color-background-dark" /> </td>
      <td><b>cdr-color-background-dark</b> <br>Only use for dark background color  </td>
      <td width=160>#292929 <br>r41  g41  b41 </td>
    </tr>
    <tr>
      <td width=64> <color-example color="cdr-color-background-darker" /> </td>
      <td><b>cdr-color-background-darker</b> <br>Only use for dark background color - darkest value  </td>
      <td width=160>#1a1a1a <br>r26  g26  b26 </td>
    </tr>
  </tbody>
</table>


<br>

## Typography Colors
### For Light Backgrounds

<table>
  <tbody>
    <tr>
      <td width=64> <color-example color="cdr-color-text-primary-lightmode" /> </td>
      <td><b>cdr-color-text-primary-lightmode</b> <br>Primary body text color on a light background</td>
      <td width=160>#292929 <br> r41  g41  b41 </td>
    </tr>
    <tr>
      <td width=64> <color-example color="cdr-color-text-secondary-lightmode" /> </td>
      <td><b>cdr-color-text-secondary-lightmode</b> <br>Secondary or supplemental text color on a light background  </td>
      <td width=160>#616161 <br>r97  g97  b97 </td>
    </tr>
    <tr>
      <td width=64> <color-example color="cdr-color-text-link-lightmode" />  </td>
      <td><b>cdr-color-text-link-lightmode</b> <br>Link text color on a light background  </td>
      <td width=160>#3278ae <br>r50  g120  b174 </td>
    </tr>
    <tr>
      <td width=64> <color-example color="cdr-color-text-error-lightmode" /> </td>
      <td><b>cdr-color-text-error-lightmode</b> <br>Error text color on a light background  </td>
      <td width=160>#b5292b <br>r181  g41  b43 </td>
    </tr>
    <tr>
      <td width=64> <color-example color="cdr-color-text-disabled-lightmode" />  </td>
      <td><b>cdr-color-text-disabled-lightmode</b> <br>Disabled text color for interactive UI elements on a light background  </td>
      <td width=160>#b8b8b8 <br>r184  g184  b184 </td>
    </tr>
  </tbody>
</table>


<br>

### For Dark Backgrounds

<table>
  <tbody>
    <tr>
      <td width=64> <color-example color="cdr-color-text-primary-darkmode" />  </td>
      <td><b>cdr-color-text-primary-darkmode </b> <br>Primary body text color on a dark background  </td>
      <td width=160>#fafafa <br>r250  g250  b250 </td>
    </tr>
    <tr>
      <td width=64> <color-example color="cdr-color-text-secondary-darkmode" />  </td>
      <td><b>cdr-color-text-secondary-darkmode </b> <br>Secondary or supplemental text color on a dark background </td>
      <td width=160>#999999 <br>r153  g153  b153 </td>
    </tr>
    <tr>
      <td width=64> <color-example color="cdr-color-text-link-darkmode" />  </td>
      <td><b>cdr-color-text-link-darkmode </b> <br>Link text color on a dark background  </td>
      <td width=160>#5197cd <br>r81  g151  b205 </td>
    </tr>
    <tr>
      <td width=64> <color-example color="cdr-color-text-error-darkmode" /> </td>
      <td><b>cdr-color-text-error-darkmode </b> <br>Error text color on a dark background   </td>
      <td width=160>#e86868 <br>r232  g104  b104 </td>
    </tr>
    <tr>
      <td width=64> <color-example color="cdr-color-text-disabled-darkmode" />  </td>
      <td><b>cdr-color-text-disabled-darkmode </b> <br>Disabled text color for interactive UI elements on a dark background </td>
      <td width=160>#616161 <br>r97  g97  b97 </td>
    </tr>
  </tbody>
</table>

<br>

## Icon Colors

<table>
  <tbody>
    <tr>
      <td width=64> <color-example color="cdr-color-icon-primary-lightmode" />  </td>
      <td><b>cdr-color-icon-primary-lightmode </b> <br>Primary icon color on a light background  </td>
      <td width=160>#292929 <br>r41  g41  b41 </td>
    </tr>
    <tr>
      <td width=64> <color-example color="cdr-color-icon-primary-darkmode" />  </td>
      <td><b>cdr-color-icon-primary-darkmode  </b> <br>Primary icon color on a dark background </td>
      <td width=160>#fafafa <br>r250  g250  b250 </td>
    </tr>
  </tbody>
</table>


<br>

## Form Colors
### For Light Backgrounds

<table>
  <tbody>
    <tr>
      <td width=64> <color-example color="cdr-color-text-form-label-lightmode" /> </td>
      <td><b>cdr-color-text-form-label-lightmode </b> <br>Label text color for forms on a light background. Can also be used for input entry text  </td>
      <td width=160>#292929 <br>r41  g41  b41 </td>
    </tr>
    <tr>
      <td width=64> <color-example color="cdr-color-text-form-placeholder-lightmode" />  </td>
      <td><b>cdr-color-text-form-placeholder-lightmode </b> <br>Placeholder text color for forms on a light background </td>
      <td width=160>#616161 <br>r97  g97  b97 </td>
    </tr>
    <tr>
      <td width=64> <color-example color="cdr-color-text-form-disabled-lightmode" />  </td>
      <td><b>cdr-color-text-form-disabled-lightmode </b> <br>Disabled text color for forms on a light background </td>
      <td width=160>#b8b8b8 <br>r184  g184  b184 </td>
    </tr>
    <tr>
      <td width=64> <color-example color="cdr-color-background-form-lightmode" />  </td>
      <td><b>cdr-color-background-form-lightmode </b> <br>Light background color for forms </td>
      <td width=160>#ffffff <br>r255  g255  b255 </td>
    </tr>
    <tr>
      <td width=64> <color-example color="cdr-color-background-form-input-lightmode" />  </td>
      <td><b>cdr-color-background-form-input-lightmode </b> <br>Light background color for input control </td>
      <td width=160>#ffffff <br>r255  g255  b255 </td>
    </tr>
  </tbody>
</table>


<br>

### For Dark Backgrounds

<table>
  <tbody>
    <tr>
      <td width=64> <color-example color="cdr-color-text-form-label-darkmode" />  </td>
      <td><b>cdr-color-text-form-label-darkmode </b> <br>Label text color for forms on a dark background. Can also be used for input entry text </td>
      <td width=160>#fafafa <br>r250  g250  b250 </td>
    </tr>
    <tr>
      <td width=64> <color-example color="cdr-color-text-form-placeholder-darkmode" />  </td>
      <td><b>cdr-color-text-form-placeholder-darkmode </b> <br>Placeholder text color for forms on a dark background </td>
      <td width=160>#999999 <br>r153  g153  b153 </td>
    </tr>
    <tr>
      <td width=64> <color-example color="cdr-color-text-form-disabled-darkmode" /> </td>
      <td><b>cdr-color-text-form-disabled-darkmode </b> <br>Disabled text color for forms on a dark background </td>
      <td width=160>#616161 <br>r97  g97  b97 </td>
    </tr>
    <tr>
      <td width=64> <color-example color="cdr-color-background-form-darkmode" />  </td>
      <td><b>cdr-color-background-form-darkmode </b> <br>Dark background color for forms </td>
      <td width=160>#292929 <br>r41  g41  b41 </td>
    </tr>
    <tr>
      <td width=64> <color-example color="cdr-color-background-form-input-darkmode" /> </td>
      <td><b>cdr-color-background-form-input-darkmode </b> <br>Dark background color for input control </td>
      <td width=160>#292929 <br>r41  g41  b41 </td>
    </tr>
  </tbody>
</table>


<br>

## Border Colors
### For Light Backgrounds

<table>
  <tbody>
    <tr>
      <td width=64> <color-example color="cdr-color-border-primary-lightmode" />  </td>
      <td><b>cdr-color-border-primary-lightmode </b> <br>Primary border color for light background </td>
      <td width=160>#616161 <br>r97  g97  b97 </td>
    </tr>
    <tr>
      <td width=64> <color-example color="cdr-color-border-secondary-lightmode" /> </td>
      <td><b>cdr-color-border-secondary-lightmode </b> <br>Secondary border color for light background </td>
      <td width=160>#b8b8b8 <br>r184  g184  b184 </td>
    </tr>
    <tr>
      <td width=64> <color-example color="cdr-color-border-disabled-lightmode" />  </td>
      <td><b>cdr-color-border-disabled-lightmode </b> <br>Border color for disabled state for light background </td>
      <td width=160>#dadada <br>r218  g218  b218 </td>
    </tr>
    <tr>
      <td width=64> <color-example color="cdr-color-border-error-lightmode" /> </td>
      <td><b>cdr-color-border-error-lightmode </b> <br>Border color for error validation state for light background </td>
      <td width=160>#e86868 <br>r232  g104  b104  </td>
    </tr>
    <tr>
      <td width=64> <color-example color="cdr-color-border-selected-lightmode" /> </td>
      <td><b>cdr-color-border-selected-lightmode </b>  </td>
      <td width=160>#2b6692 <br>r43  g102  b146  </td>
    </tr>
  </tbody>
</table>



<br>

### For Dark Backgrounds

<table>
  <tbody>
    <tr>
      <td width=64> <color-example color="cdr-color-border-secondary-darkmode" />  </td>
      <td> <b>cdr-color-border-secondary-darkmode </b> <br>Secondary border color for dark background </td>
      <td width=160>#999999  <br>r153  g153  b153  </td>
    </tr>
  </tbody>
</table>



<br>

</cdr-doc-table-of-contents-shell>
</template>




<template slot="Guidelines">
<cdr-doc-table-of-contents-shell>

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

Note: Large text is defined as 18 point (typically 24px) or larger or with bold style, 14 point (typically 18.66px) or larger

<br>

### For Light Backgrounds
WCAG color contrast ratios for frequently used Cedar color tokens for text or foreground colors on light background colors.

#### cdr-color-background-lightest
(Values for cdr-color-background-lightest: #ffffff or r255 g255 b255)

<table>
  <tbody>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations/wcag_rating_bkgnd_lightest_primary_4-3.png`)"/> </td>
      <td>AAA 14.55:1  </td>
      <td>cdr-color-text-primary-lightmode  <br>Values: #292929 &nbsp; / &nbsp; r41 g41 b41 </td>      
    </tr>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations/wcag_rating_bkgnd_lightest_secondary_4-3.png`)"/> </td>
      <td>AA 6.19:1 </td>
      <td>cdr-color-text-secondary-lightmode <br>Values: #616161 &nbsp; / &nbsp; r97 g97 b97</td>      
    </tr>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations/wcag_rating_bkgnd_lightest_link_4-3.png`)"/> </td>
      <td>AA 4.74:1 </td>
      <td>cdr-color-text-link-lightmode <br>Values: #3278ae &nbsp; / &nbsp; r50 g120 b174</td>      
    </tr>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations/wcag_rating_bkgnd_lightest_error_4-3.png`)"/> </td>
      <td>AA 6.33:1 </td>
      <td>cdr-color-text-error-lightmode <br>Values: #b5292b &nbsp; / &nbsp; r181 g41 b43</td>      
    </tr>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations/wcag_rating_bkgnd_lightest_disabled_4-3.png`)"/> </td>
      <td>N/A* </td>
      <td>cdr-color-text-disabled-lightmode <br>Values: #b8b8b8 &nbsp; / &nbsp; r184 g184 b184 <br><b>*When text is disabled </b> </td>      
    </tr>
  </tbody>
</table>


<br>

#### cdr-color-background-lighter
(Values for cdr-color-background-lighter: #fafafa or r250 g250 b250)

<table>
  <tbody>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations//wcag_rating_bkgnd_lighter_primary_4-3.png`)"/> </td>
      <td>AAA 13.94:1   </td>
      <td>cdr-color-text-primary-lightmode  <br>Values: #292929 &nbsp; / &nbsp; r41 g41 b41 </td>   
    </tr>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations//wcag_rating_bkgnd_lighter_secondary_4-3.png`)"/> </td>
      <td>AA 5.93:1   </td>
      <td>cdr-color-text-secondary-lightmode <br>Values: #616161 &nbsp; / &nbsp; r97 g97 b97</td>    
    </tr>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations//wcag_rating_bkgnd_lighter_link_4-3.png`)"/> </td>
      <td>AA 4.54:1  </td>
      <td>cdr-color-text-link-lightmode <br>Values: #3278ae &nbsp; / &nbsp; r50 g120 b174</td>   
    </tr>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations//wcag_rating_bkgnd_lighter_error_4-3.png`)"/> </td>
      <td>AA 6.07:1 </td>
      <td>cdr-color-text-error-lightmode <br>Values: #b5292b &nbsp; / &nbsp; r181 g41 b43</td>  
    </tr>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations//wcag_rating_bkgnd_lighter_disabled_4-3.png`)"/> </td>
      <td>N/A* </td>
      <td>cdr-color-text-disabled-lightmode <br>Values: #b8b8b8 &nbsp; / &nbsp; r184 g184 b184 <br><b>*When text is disabled </b> </td>   
    </tr>
  </tbody>
</table>

<br>

#### cdr-color-background-light
(Values for cdr-color-background-light: #f7f7f7 or r247 g247 b247)

<table>
  <tbody>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations//wcag_rating_bkgnd_light_primary_4-3.png`)"/> </td>
      <td>AAA 13.58:1  </td>
      <td>cdr-color-text-primary-lightmode  <br>Values: #292929 &nbsp; / &nbsp; r41 g41 b41 </td>   
    </tr>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations//wcag_rating_bkgnd_light_secondary_4-3.png`)"/> </td>
      <td>AA 5.78:1  </td>
      <td>cdr-color-text-secondary-lightmode <br>Values: #616161 &nbsp; / &nbsp; r97 g97 b97</td>    
    </tr>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations//wcag_rating_bkgnd_light_link_4-3.png`)"/> </td>
      <td>AA-LG 4.42:1 </td>
      <td>cdr-color-text-link-lightmode <br>Values: #3278ae &nbsp; / &nbsp; r50 g120 b174</td>   
    </tr>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations//wcag_rating_bkgnd_light_error_4-3.png`)"/> </td>
      <td>AA 5.91:1 </td>
      <td>cdr-color-text-error-lightmode <br>Values: #b5292b &nbsp; / &nbsp; r181 g41 b43</td>  
    </tr>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations//wcag_rating_bkgnd_light_disabled_4-3.png`)"/> </td>
      <td>N/A* </td>
      <td>cdr-color-text-disabled-lightmode <br>Values: #b8b8b8 &nbsp; / &nbsp; r184 g184 b184 <br><b>*When text is disabled </b> </td>   
    </tr>
  </tbody>
</table> 

<br>


### For Dark Backgrounds
WCAG color contrast ratios for frequently used Cedar color tokens for text or foreground colors on dark background colors.

#### cdr-color-background-dark
(Values for cdr-color-background-dark: #292929 or r41 g41 b41)

<table>
  <tbody>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations//wcag_rating_bkgnd_dark_primary_4-3.png`)"/> </td>
      <td>AAA 13.94:1 </td>
      <td>cdr-color-text-primary-darkmode <br>Values: #fafafa &nbsp; / &nbsp; r250 g250 b250 </td>
    </tr>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations//wcag_rating_bkgnd_dark_secondary_4-3.png`)"/> </td>
      <td>AA 5.11:1 </td>
      <td>cdr-color-text-secondary-darkmode <br>Values: #999999 &nbsp; / &nbsp; r153 g153 b153 </td>
    </tr>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations//wcag_rating_bkgnd_dark_link_4-3.png`)"/> </td>
      <td>AA 4.61:1  </td>
      <td>cdr-color-text-link-darkmode <br>Values: #5197cd &nbsp; / &nbsp; r81 g151 b205 </td>
    </tr>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations//wcag_rating_bkgnd_dark_error_4-3.png`)"/> </td>
      <td>AA 4.58:1 </td>
      <td>cdr-color-text-error-darkmode <br>Values: #e86868 &nbsp; / &nbsp; r232 g104 b104 </td>
    </tr>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations//wcag_rating_bkgnd_dark_disabled_4-3.png`)"/> </td>
      <td>N/A* </td>
      <td>cdr-color-text-disabled-darkmode <br>Values: #616161 &nbsp; / &nbsp; r97 g97 b97 <br><b>*When text is disabled </b> </td>   
    </tr>
  </tbody>
</table>

<br>

#### cdr-color-background-darker
(Values for cdr-color-background-darker: #1a1a1a or r26 g26 b26)

<table>
  <tbody>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations//wcag_rating_bkgnd_darker_primary_4-3.png`)"/> </td>
      <td>AAA 16.67:1   </td>
      <td>cdr-color-text-primary-darkmode <br>Values: #fafafa &nbsp; / &nbsp; r250 g250 b250 </td>
    </tr>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations//wcag_rating_bkgnd_darker_secondary_4-3.png`)"/> </td>
      <td>AA 6.11:1  </td>
      <td>cdr-color-text-secondary-darkmode <br>Values: #999999 &nbsp; / &nbsp; r153 g153 b153 </td>
    </tr>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations//wcag_rating_bkgnd_darker_link_4-3.png`)"/> </td>
      <td>AA 5.52:1  </td>
      <td>cdr-color-text-link-darkmode <br>Values: #5197cd &nbsp; / &nbsp; r81 g151 b205 </td>
    </tr>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations//wcag_rating_bkgnd_darker_error_4-3.png`)"/> </td>
      <td>AA 5.48:1  </td>
      <td>cdr-color-text-error-darkmode <br>Values: #e86868 &nbsp; / &nbsp; r232 g104 b104 </td>
    </tr>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations//wcag_rating_bkgnd_darker_disabled_4-3.png`)"/> </td>
      <td>N/A* </td>
      <td>cdr-color-text-disabled-darkmode <br>Values: #616161 &nbsp; / &nbsp; r97 g97 b97 <br><b>*When text is disabled </b> </td>   
    </tr>
  </tbody>
</table>

<br>

</cdr-doc-table-of-contents-shell>
</template>




<template slot="Brand Palette">
<cdr-doc-table-of-contents-shell>

<cdr-doc-alert style="border: 1px solid #c77523; border-left: 8px solid #c77523; fill: #c77523">These values are NOT to be used by developers for creating custom UI.<br>If you are extending or modifying an existing Cedar component please work with the design system team to add support for your enhancements.</cdr-doc-alert>

Colors from Cedar’s base color palette are use throughout Cedar components and design recommendations. Use these values when:
  - Requesting or updating for an existing Cedar component
  - Requesting a new token 
  - Developing a new component that will be adopted by Cedar Design System

<br> 

Note that the values on this page:
  - May not have a long lifespan
  - May alter the value more frequently
  - May be used for a wide variety of purposes

<br>  

**Requesting a Token**

If you have a request for a token that is missing, you can [submit a pull request to the cedar-token repo](https://www.npmjs.com/package/@rei/cdr-tokens#addingupdating-tokens) or ask in the [#cedar-user-support](https://rei.slack.com/messages/CA58YCGN4) Slack channel. View requirements on the <cdr-link :href="$withBase('/foundation/tokens?active-link=adding-tokens-to-the-repository')">adding tokens</cdr-link> on the Tokens article.   

**Developing or Updating Cedar Components**

The Cedar team welcomes contributions from the digital community at REI. If you are interested in contributing design or code, please reach out at in Slack at [#cedar-user-support](https://rei.slack.com/messages/CA58YCGN4), email [cedar@rei.com](mailto:cedar@rei.com), or talk to your manager.


<br>
<hr>

## Grey Colors
Grey colors support the cohesive use of typography, backgrounds, and borders across the digital ecosystem. 

<table>
  <tbody>
    <tr>
      <td colspan=2 height=32 bgcolor="#ffffff"> </td>
    </tr>
    <tr>
      <td width=144>
        #ffffff <br>
        r255  g255  b255 <br>
        <br>
        <br>
      </td>
      <td width=360>
        <b>Tokens:</b><br>
        cdr-color-background-lightest <br>
        cdr-color-background-form-lightmode <br>
        cdr-color-background-form-input-lightmode      
      </td>
    </tr>
  </tbody>
</table>

<br>

<table>
  <tbody>
    <tr>
      <td colspan=2 height=32 bgcolor="#fafafa"> </td>
    </tr>
    <tr>
      <td width=144>
        #fafafa <br>
        r250  g250  b250 <br>
        <br>
        <br>
        <br>
      </td>
      <td width=360>
        <b>Tokens:</b><br>
        cdr-color-background-lighter <br>
        cdr-color-text-primary-darkmode <br>
        cdr-color-text-form-label-darkmode <br>
        cdr-color-border-primary-darkmode <br>   
      </td>
    </tr>
  </tbody>
</table>

<br>

<table>
  <tbody>
    <tr>
      <td colspan=2 height=32 bgcolor="#f7f7f7"> </td>
    </tr>
    <tr>
      <td width=144>
        #f7f7f7 <br>
        r247  g247  b247  <br>
      </td>
      <td width=360>
        <b>Tokens:</b><br>
        cdr-color-background-light <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<table>
  <tbody>
    <tr>
      <td colspan=2 height=32 bgcolor="#dadada"> </td>
    </tr>
    <tr>
      <td width=144>
        #dadada <br>
        r218  g218  b218  <br>
      </td>
      <td width=360>
        <b>Tokens:</b><br>
        cdr-color-border-disabled-lightmode <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<table>
  <tbody>
    <tr>
      <td colspan=2 height=32 bgcolor="#b8b8b8"> </td>
    </tr>
    <tr>
      <td width=144>
        #b8b8b8 <br>
        r184  g184  b184  <br>
        <br>
        <br>
      </td>
      <td width=360>
        <b>Tokens:</b><br>
        cdr-color-text-disabled-lightmode <br>
        cdr-color-text-form-disabled-lightmode <br>
        cdr-color-border-secondary-lightmode 
      </td>
    </tr>
  </tbody>
</table>

<br>

<table>
  <tbody>
    <tr>
      <td colspan=2 height=32 bgcolor="#999999"> </td>
    </tr>
    <tr>
      <td width=144>
        #999999 <br>
        r153  g153  b153  <br>
        <br>
        <br>
      </td>
      <td width=360>
        <b>Tokens:</b><br>
        cdr-color-text-secondary-darkmode  <br>
        cdr-color-text-form-placeholder-darkmode <br>
        cdr-color-border-secondary-darkmode
      </td>
    </tr>
  </tbody>
</table>

<br>

<table>
  <tbody>
    <tr>
      <td colspan=2 height=32 bgcolor="#7a7a7a"> </td>
    </tr>
    <tr>
      <td width=144>
        #7a7a7a <br>
        r122  g122  b122  <br>
      </td>
      <td width=360>
        <b>Tokens:</b><br>
        N/A  <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<table>
  <tbody>
    <tr>
      <td colspan=2 height=32 bgcolor="#616161"> </td>
    </tr>
    <tr>
      <td width=144>
        #616161 <br>
        r97  g97  b97   <br>
        <br>
        <br>
        <br>
        <br>
      </td>
      <td width=360>
        <b>Tokens:</b><br>
        cdr-color-text-secondary-lightmode <br>
        cdr-color-text-form-placeholder-lightmode <br>
        cdr-color-text-disabled-darkmode <br>
        cdr-color-text-form-disabled-darkmode <br>
        cdr-color-border-primary-lightmode
      </td>
    </tr>
  </tbody>
</table>

<br>

<table>
  <tbody>
    <tr>
      <td colspan=2 height=32 bgcolor="#434343"> </td>
    </tr>
    <tr>
      <td width=144>
        #434343 <br>
        r67  g67  b67  <br>
      </td>
      <td width=360>
        <b>Tokens:</b><br>
        N/A  <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<table>
  <tbody>
    <tr>
      <td colspan=2 height=32 bgcolor="#292929"> </td>
    </tr>
    <tr>
      <td width=144>
        #292929 <br>
        r41  g41  b41  <br>
        <br>
        <br>
        <br>
        <br>
      </td>
      <td width=360>
        <b>Tokens:</b><br>
        cdr-color-background-dark <br>
        cdr-color-background-form-darkmode <br>
        cdr-color-background-form-input-darkmode <br>
        cdr-color-text-primary-lightmode <br>
        cdr-color-text-form-label-lightmode
      </td>
    </tr>
  </tbody>
</table>

<br>

<table>
  <tbody>
    <tr>
      <td colspan=2 height=32 bgcolor="#1a1a1a"> </td>
    </tr>
    <tr>
      <td width=144>
        #1a1a1a <br>
        r26  g26  b26   <br>
      </td>
      <td width=360>
        <b>Tokens:</b><br>
        cdr-color-background-darker <br>
      </td>
    </tr>
  </tbody>
</table>

<br>
<hr>

## Tan Colors
Tan or brand colors are core to the co-op. They’re often used as backgrounds when an experience calls for a stronger brand impression.

<table>
  <tbody>
    <tr>
      <td colspan=2 height=32 bgcolor="#faf9f5"> </td>
    </tr>
    <tr>
      <td width=144>
        #faf9f5 <br>
        r250  g249  b245  <br>
      </td>
      <td width=360>
        <b>Tokens:</b><br>
        N/A  <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<table>
  <tbody>
    <tr>
      <td colspan=2 height=32 bgcolor="#f1efe4"> </td>
    </tr>
    <tr>
      <td width=144>
        #f1efe4 <br>
        r241  g239  b228  <br>
      </td>
      <td width=360>
        <b>Tokens:</b><br>
        N/A  <br>
      </td>
    </tr>
  </tbody>
</table>

<br>
<hr>

## Blue Colors
Blue colors are used in a variety of scenarios such as prompting user actions, communicating informational messaging, and indicating links within body copy.

<table>
  <tbody>
    <tr>
      <td colspan=2 height=32 bgcolor="#5197cd"> </td>
    </tr>
    <tr>
      <td width=144>
        #5197cd <br>
        r81  g151  b205  <br>
      </td>
      <td width=360>
        <b>Tokens:</b><br>
        cdr-color-text-link-darkmode  <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<table>
  <tbody>
    <tr>
      <td colspan=2 height=32 bgcolor="#3278ae"> </td>
    </tr>
    <tr>
      <td width=144>
        #3278ae <br>
        r50  g120  b174 <br>
      </td>
      <td width=360>
        <b>Tokens:</b><br>
        cdr-color-text-link-lightmode  <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<table>
  <tbody>
    <tr>
      <td colspan=2 height=32 bgcolor="#2b6692"> </td>
    </tr>
    <tr>
      <td width=144>
        #2b6692 <br>
        r43  g102  b146  <br>
      </td>
      <td width=360>
        <b>Tokens:</b><br>
        cdr-color-border-selected-lightmode  <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<table>
  <tbody>
    <tr>
      <td colspan=2 height=32 bgcolor="#1e4e72"> </td>
    </tr>
    <tr>
      <td width=144>
        #1e4e72 <br>
        r30  g78  b114  <br>
      </td>
      <td width=360>
        <b>Tokens:</b><br>
        N/A  <br>
      </td>
    </tr>
  </tbody>
</table>

<br>
<hr>

## Green Colors
Green colors are used in a variety of scenarios such as providing feedback for successful form submission.

<table>
  <tbody>
    <tr>
      <td colspan=2 height=32 bgcolor="#edf7ee"> </td>
    </tr>
    <tr>
      <td width=144>
        #edf7ee <br>
        r237  g247  b238  <br>
      </td>
      <td width=360>
        <b>Tokens:</b><br>
        N/A  <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<table>
  <tbody>
    <tr>
      <td colspan=2 height=32 bgcolor="#6c9f71"> </td>
    </tr>
    <tr>
      <td width=144>
        #6c9f71 <br>
        r108  g159  b113  <br>
      </td>
      <td width=360>
        <b>Tokens:</b><br>
        N/A  <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<table>
  <tbody>
    <tr>
      <td colspan=2 height=32 bgcolor="#367c3c"> </td>
    </tr>
    <tr>
      <td width=144>
        #367c3c <br>
        r54  g124  b60  <br>
      </td>
      <td width=360>
        <b>Tokens:</b><br>
        N/A  <br>
      </td>
    </tr>
  </tbody>
</table>

<br>
<hr>

## Red Colors
Red colors are used in a variety of scenarios such as announcing sale items and communicating error messaging.

<table>
  <tbody>
    <tr>
      <td colspan=2 height=32 bgcolor="#e86868"> </td>
    </tr>
    <tr>
      <td width=144>
        #e86868 <br>
        r232  g104  b104 <br>
      </td>
      <td width=360>
        <b>Tokens:</b> <br> 
        cdr-color-text-error-darkmode <br>
        cdr-color-border-error-lightmode 
      </td>
    </tr>
  </tbody>
</table>

<br>

<table>
  <tbody>
    <tr>
      <td colspan=2 height=32 bgcolor="#c83232"> </td>
    </tr>
    <tr>
      <td width=144>
        #c83232 <br>
        r200  g50  b50  <br>
      </td>
      <td width=360>
        <b>Tokens:</b><br>
        N/A  <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<table>
  <tbody>
    <tr>
      <td colspan=2 height=32 bgcolor="#b5292b"> </td>
    </tr>
    <tr>
      <td width=144>
        #b5292b <br>
        r181  g41  b43  <br>
      </td>
      <td width=360>
        <b>Tokens:</b><br>
        cdr-color-text-error-lightmode  <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<table>
  <tbody>
    <tr>
      <td colspan=2 height=32 bgcolor="#a12024"> </td>
    </tr>
    <tr>
      <td width=144>
        #a12024 <br>
        r161  g32  b36  <br>
      </td>
      <td width=360>
        <b>Tokens:</b><br>
        N/A  <br>
      </td>
    </tr>
  </tbody>
</table>

<br>
<hr>

## Yellow Colors
Yellow colors are used in a variety of scenarios such as providing feedback for warning messages.

<table>
  <tbody>
    <tr>
      <td colspan=2 height=32 bgcolor="#fff5be"> </td>
    </tr>
    <tr>
      <td width=144>
        #fff5be <br>
        r255  g245  b190 <br>
      </td>
      <td width=360>
        <b>Tokens:</b><br>
        N/A  <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<table>
  <tbody>
    <tr>
      <td colspan=2 height=32 bgcolor="#f8b877"> </td>
    </tr>
    <tr>
      <td width=144>
        #f8b877 <br>
        r248  g184  b119 <br>
      </td>
      <td width=360>
        <b>Tokens:</b><br>
        N/A  <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<table>
  <tbody>
    <tr>
      <td colspan=2 height=32 bgcolor="#c77523"> </td>
    </tr>
    <tr>
      <td width=144>
        #c77523 <br>
        r199  g117  b35 <br>
      </td>
      <td width=360>
        <b>Tokens:</b><br>
        N/A  <br>
      </td>
    </tr>
  </tbody>
</table>

<br>
<hr>
 

</cdr-doc-table-of-contents-shell>
</template>
</cdr-doc-tabs>
