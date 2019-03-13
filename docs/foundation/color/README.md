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
<cdr-doc-tabs :labels="['Overview', 'Guidelines', 'Resources']">
<template slot="Overview">
<cdr-doc-table-of-contents-shell>
  

Color design tokens store the fundamental color decisions of REI’s visual language:
  - Naming entities to store visual design attributes such as color specifications
  - Replacing hard-coded values such as hex values for color
  - Maintaining a scalable and consistent visual system for UI development
  - Delivering updates to the brand identity with minimal impact to the code
  - Specifying a hierarchical and semantically defined system


## Color Tokens

### Web and Mobile
List of color tokens with descriptions and values. Web and mobile color tokens have identical hex values but the naming pattern differs. For example, color token names are:
  - **For Web:** cdr-color-text-primary-lightmode 
  - **For Android:** cdr_color_text_primary_lightmode

#### Background
| Token              | Token Name and Usage                   | Token Values        |
| :----------------- | :------------------------------------- | :------------------ |
| `CSS code` | **cdr-color-background-form-input-lightmode** <br>Only use for light background color - lightest value    | #ffffff <br>r255  g255  b255  |
| `CSS code` | **cdr-color-background-lighter** <br>Only use for light background color - value is between light and lightest   | #fafafa <br>r250  g250  b250  |
| `CSS code` | **cdr-color-background-light** <br>Only use for light background color <br>  | #f7f7f7 <br>r247  g247  b247  |
| `CSS code` | **cdr-color-background-dark** <br>Only use for dark background color   | #292929 <br>r41  g41  b41  |
| `CSS code` | **cdr-color-background-darker** <br>Only use for dark background color - darkest value   | #1a1a1a <br>r26  g26  b26  |

<br>
#### Typography Colors
##### Text or Foreground Colors on Light Backgrounds
| Token              | Token Name and Usage                   | Token Values        |
| :----------------- | :------------------------------------- | :------------------ |
| `CSS code` | **cdr-color-text-primary-lightmode** <br>Primary body text color on a light background    | #292929<br>r41  g41  b41  |
| `CSS code` | **cdr-color-text-secondary-lightmode** <br>Secondary or supplemental text color on a light background   | #616161<br>r97  g97  b97  |
| `CSS code` | **cdr-color-text-link-lightmode** <br>Link text color on a light background   | #3278ae<br>r50  g120  b174  |
| `CSS code` | **cdr-color-text-disabled-lightmode** <br>Disabled text color for interactive UI elements on a light background   | #b8b8b8<br>r184  g184  b184  |
| `CSS code` | **cdr-color-text-error-lightmode** <br>Error text color on a light background   | #b5292b<br>r181  g41  b43  |

<br>

##### Text or Foreground Colors on Dark Backgrounds
| Token              | Token Name and Usage                   | Token Values        |
| :----------------- | :------------------------------------- | :------------------ |
| `CSS code` | **cdr-color-text-primary-darkmode** <br>Primary body text color on a dark background     | #fafafa<br>r250  g250  b250  |
| `CSS code` | **cdr-color-text-secondary-darkmode** <br>Secondary or supplemental text color on a dark background    | #999999<br>r153  g153  b153  |
| `CSS code` | **cdr-color-text-link-darkmode** <br>Link text color on a dark background    | #5197cd<br>r81  g151  b205  |
| `CSS code` | **cdr-color-text-disabled-darkmode** <br>Disabled text color for interactive UI elements on a dark background    | #616161<br>r97  g97  b97  |
| `CSS code` | **cdr-color-text-error-darkmode** <br>Error text color on a dark background     | #e86868<br>r232  g104  b104  |


<br>
#### Forms Colors
##### Text and Backgrounds for Forms on Light Backgrounds
| Token              | Token Name and Usage                   | Token Values        |
| :----------------- | :------------------------------------- | :------------------ |
| `CSS code` | **cdr-color-text-form-label-lightmode** <br>Label text color for forms on a light background. Can also be used for input entry text    | #292929<br>r41  g41  b41  |
| `CSS code` | **cdr-color-text-form-placeholder-lightmode** <br>Placeholder text color for forms on a light background     | #616161<br>r97  g97  b97  |
| `CSS code` | **cdr-color-text-form-disabled-lightmode** <br>Disabled text color for forms on a light background     | #b8b8b8<br>r184  g184  b184  |
| `CSS code` | **cdr-color-background-form-lightmode** <br>Light background color for forms    | #ffffff<br>r255  g255  b255  |
| `CSS code` | **cdr-color-background-form-input-lightmode** <br>Light background color for input control    | #ffffff<br>r255  g255  b255  |

<br>

##### Text and Backgrounds for Forms on Dark Backgrounds
| Token              | Token Name and Usage                   | Token Values        |
| :----------------- | :------------------------------------- | :------------------ |
| `CSS code` | **cdr-color-text-form-label-darkmode** <br>Label text color for forms on a dark background. Can also be used for input entry text    | #fafafa<br>r250  g250  b250   |
| `CSS code` | **cdr-color-text-form-placeholder-darkmode** <br>Placeholder text color for forms on a dark background     | #999999<br>r153  g153  b153   |
| `CSS code` | **cdr-color-text-form-disabled-darkmode** <br>Disabled text color for forms on a dark background     | #616161<br>r97  g97  b97   |
| `CSS code` | **cdr-color-background-form-darkmode** <br>Dark background color for forms    | #292929<br>r41  g41  b41  |
| `CSS code` | **cdr-color-background-form-input-darkmode** <br>Dark background color for input control    | #292929<br>r41  g41  b41  |

<br>

#### Border Colors
##### For Light Backgrounds
| Token              | Token Name and Usage                   | Token Values        |
| :----------------- | :------------------------------------- | :------------------ |
| `CSS code` | **cdr-color-border-primary-lightmode** <br>Primary border color for light background    | #616161<br>r97  g97  b97  |
| `CSS code` | **cdr-color-border-secondary-lightmode** <br>Secondary border color for light background    | #b8b8b8<br>r184  g184  b184  |
| `CSS code` | **cdr-color-border-disabled-lightmode** <br>Border color for disabled state for light background     | #dadada<br>r218  g218  b218  |
| `CSS code` | **cdr-color-border-error-lightmode** <br>Border color for error validation state for light background     | #e86868<br>r232  g104  b104  |
| `CSS code` | **cdr-color-border-selected-lightmode** <br>     | #2b6692<br><nobr>r43  g102  b146  |

<br>

##### For Dark Backgrounds
| Token              | Token Name and Usage                   | Token Values        |
| :----------------- | :------------------------------------- | :------------------ |
| `CSS code` | **cdr-color-border-secondary-darkmode** <br>Secondary border color for dark background    | #999999<br>r153  g153  b153   | 


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
<table>
  <tbody>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations/wcag_rating_bkgnd_lightest_primary_4-3.png`)"/> </td>
      <td>cdr-color-text-primary-lightmode  <br>AAA 14.55:1  </td>
    </tr>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations/wcag_rating_bkgnd_lightest_secondary_4-3.png`)"/> </td>
      <td>cdr-color-text-secondary-lightmode <br>AA 6.19:1 </td>
    </tr>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations/wcag_rating_bkgnd_lightest_link_4-3.png`)"/> </td>
      <td>cdr-color-text-link-lightmode <br>AA 4.74:1 </td>
    </tr>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations/wcag_rating_bkgnd_lightest_error_4-3.png`)"/> </td>
      <td>cdr-color-text-error-lightmode <br>AA 6.33:1 </td>
    </tr>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations/wcag_rating_bkgnd_lightest_disabled_4-3.png`)"/> </td>
      <td>cdr-color-text-disabled-lightmode <br>FAIL 1.98:1 </td>
    </tr>
  </tbody>
</table>

<br>

#### cdr-color-background-lighter
<table>
  <tbody>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations/wcag_rating_bkgnd_lighter_primary_4-3.png`)"/> </td>
      <td>cdr-color-text-primary-lightmode  <br>AAA 13.94:1   </td>
    </tr>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations/wcag_rating_bkgnd_lighter_secondary_4-3.png`)"/> </td>
      <td>cdr-color-text-secondary-lightmode <br>AA 5.93:1   </td>
    </tr>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations/wcag_rating_bkgnd_lighter_link_4-3.png`)"/> </td>
      <td>cdr-color-text-link-lightmode <br>AA 4.54:1  </td>
    </tr>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations/wcag_rating_bkgnd_lighter_error_4-3.png`)"/> </td>
      <td>cdr-color-text-error-lightmode <br>AA 6.07:1 </td>
    </tr>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations/wcag_rating_bkgnd_lighter_disabled_4-3.png`)"/> </td>
      <td>cdr-color-text-disabled-lightmode <br>FAIL 1.90:1 </td>
    </tr>
  </tbody>
</table>

<br>

#### cdr-color-background-light
<table>
  <tbody>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations/wcag_rating_bkgnd_light_primary_4-3.png`)"/> </td>
      <td>cdr-color-text-primary-lightmode  <br>AAA 13.58:1  </td>
    </tr>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations/wcag_rating_bkgnd_light_secondary_4-3.png`)"/> </td>
      <td>cdr-color-text-secondary-lightmode <br>AA 5.78:1  </td>
    </tr>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations/wcag_rating_bkgnd_light_link_4-3.png`)"/> </td>
      <td>cdr-color-text-link-lightmode <br>AA-LG 4.42:1 </td>
    </tr>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations/wcag_rating_bkgnd_light_error_4-3.png`)"/> </td>
      <td>cdr-color-text-error-lightmode <br>AA 5.91:1 </td>
    </tr>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations/wcag_rating_bkgnd_light_disabled_4-3.png`)"/> </td>
      <td>cdr-color-text-disabled-lightmode <br>FAIL 1.85:1  </td>
    </tr>
  </tbody>
</table> 

<br>


### For Dark Backgrounds
WCAG color contrast ratios for frequently used Cedar color tokens for text or foreground colors on dark background colors.

#### cdr-color-background-dark
<table>
  <tbody>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations/wcag_rating_bkgnd_dark_primary_4-3.png`)"/> </td>
      <td>cdr-color-text-primary-darkmode  <br>AAA 13.94:1 </td>
    </tr>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations/wcag_rating_bkgnd_dark_secondary_4-3.png`)"/> </td>
      <td>cdr-color-text-secondary-darkmode <br>AA 5.11:1 </td>
    </tr>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations/wcag_rating_bkgnd_dark_link_4-3.png`)"/> </td>
      <td>cdr-color-text-link-darkmode <br>AA 4.61:1  </td>
    </tr>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations/wcag_rating_bkgnd_dark_error_4-3.png`)"/> </td>
      <td>cdr-color-text-error-darkmode <br>AA 4.58:1 </td>
    </tr>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations/wcag_rating_bkgnd_dark_disabled_4-3.png`)"/> </td>
      <td>cdr-color-text-disabled-darkmode <br>FAIL 2.35:1  </td>
    </tr>
  </tbody>
</table>

<br>

#### cdr-color-background-darker
<table>
  <tbody>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations/wcag_rating_bkgnd_darker_primary_4-3.png`)"/> </td>
      <td>cdr-color-text-primary-darkmode  <br>AAA 16.67:1 </td>
    </tr>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations/wcag_rating_bkgnd_darker_secondary_4-3.png`)"/> </td>
      <td>cdr-color-text-secondary-darkmode <br>AA 6.11:1 </td>
    </tr>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations/wcag_rating_bkgnd_darker_link_4-3.png`)"/> </td>
      <td>cdr-color-text-link-darkmode <br>AA 5.52:1  </td>
    </tr>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations/wcag_rating_bkgnd_darker_error_4-3.png`)"/> </td>
      <td>cdr-color-text-error-darkmode <br>AA 5.48:1 </td>
    </tr>
    <tr>
      <td> <cdr-img class="cdr-doc-article-img" :src="$withBase(`/color-illustrations/wcag_rating_bkgnd_darker_disabled_4-3.png`)"/> </td>
      <td>cdr-color-text-disabled-darkmode <br>FAIL 2.81:1  </td>
    </tr>
  </tbody>
</table>

<br>

</cdr-doc-table-of-contents-shell>
</template>




<template slot="Resources">
<cdr-doc-table-of-contents-shell>

## Color Options
Color options are part of the Cedar base color palette. You will find these colors in use throughout Cedar components and design recommendations. Developer note: Please use the variables in your code instead of hex values, as it ensures that your application will stay current.

### Color Option List

#### Grey Colors
Grey colors support the cohesive use of typography, backgrounds, and borders across the digital ecosystem. 

*TBD - Table for grey colors*

<br>

#### Tan Colors
Tan or brand colors are core to the co-op. They’re often used as backgrounds when an experience calls for a stronger brand impression.

*TBD - Table for tan colors*

<br>

#### Blue Colors
Blue colors are used in a variety of scenarios such as:
  - Prompting user actions 
  - Communicate informational messaging
  - Indicate links within body copy

*TBD - Table for blue colors*

<br>

#### Green Colors
Green colors are used in a variety of scenarios such as providing feedback for successful form submission.

*TBD - Table for green colors*

<br>

#### Red Colors
Red colors are used in a variety of scenarios such as:
  - Announcing sale items 
  - Communicate error messaging

*TBD - Table for red colors*

<br>

#### Yellow Colors
Yellow colors are used in a variety of scenarios such as providing feedback for warning messages.

*TBD - Table for yellow colors*

<br>

<br>

</cdr-doc-table-of-contents-shell>
</template>
</cdr-doc-tabs>
