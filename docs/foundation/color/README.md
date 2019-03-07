---
{
  "title": "Color",
  "title_metadata": false,
  "layout": "LayoutArticle",
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
List of color tokens with descriptions, Cedar Color Options used, and values. Web and mobile color tokens have identical hex values but the naming pattern differs. For example, color token names are:
  - **For Web:** cdr-color-text-primary-lightmode 
  - **For Android:** cdr_color_text_primary_lightmode
  
#### Background
| Token| Token Name and Usage | Token Values |
| :--- | :--- | :--- |
| `CSS code for`  <br> `color-background-lightest`| **color-background-lightest** <br>Only use for light background color - lightest value   | #ffffff<br><nobr>r255  g255  b255   
| `CSS code for`  <br> `color-background-lighter`| **color-background-lighter** <br>Only use for light background color - value is between light and lightest   | #fafafa<br><nobr>r250  g250  b250  |
| `CSS code for` <br> `color-background-light`  | **color-background-light** <br>Only use for light background color <br>  | #f7f7f7<br><nobr>r247  g247  b247   
| `CSS code for`  <br> `color-background-dark`   | **color-background-dark** <br>Only use for dark background color   | #292929<br><nobr>r41  g41  b41  |
| `CSS code for` <br> `color-background-darker` | **color-background-darker** <br>Only use for dark background color - darkest value   | #1a1a1a<br><nobr>r26  g26  b26  |

<hr>

#### Typography Colors
##### Text or Foreground Colors on Light Backgrounds

| Token| Token Name and Usage | Token Values |
| :--- | :--- | :--- |
| ` CSS code for`  <br> `cdr-color-text-primary-lightmode` | **cdr-color-text-primary-lightmode** <br>  Primary body text color on a light background | #292929<br><nobr>r41  g41  b41 |
| ` CSS code for`  <br> `cdr-color-text-secondary-lightmode` | **cdr-color-text-secondary-lightmode** <br>Secondary or supplemental text color on a light background   | #616161<br><nobr>r97  g97  b97   
| ` CSS code for`  <br> `cdr-color-text-link-lightmode`   | **cdr-color-text-link-lightmode** <br>Link text color on a light background  | #3278ae<br><nobr>r50  g120  b174   
| ` CSS code for`  <br> `cdr-color-text-disabled-lightmode`  | **cdr-color-text-disabled-lightmode** <br>Disabled text color for interactive UI elements on a light background  | #b8b8b8<br><nobr>r184  g184  b184   
| ` CSS code for`  <br> `cdr-color-text-error-lightmode`  | **cdr-color-text-error-lightmode** <br>Error text color on a light background  | #b5292b<br><nobr>r181  g41  b43  |

<br>

##### Text or Foreground Colors on Dark Backgrounds
| Token| Token Name and Usage | Token Values |
| :--- | :--- | :--- |
| `CSS code for`  <br> `color-text-primary-darkmode`   | **color-text-primary-darkmode** <br>Primary body text color on a dark background     | #fafafa<br><nobr>r250  g250  b250  |
| `CSS code for`  <br> `color-text-secondary-darkmode`   | **color-text-secondary-darkmode** <br>Secondary or supplemental text color on a dark background    | #999999<br><nobr>r153  g153  b153  |
| `CSS code for`  <br> `color-text-link-darkmode`   | **color-text-link-darkmode** <br>Link text color on a dark background    | #5197cd<br><nobr>r81  g151  b205  |
| `CSS code for`  <br> `color-text-disabled-darkmode`   | **color-text-disabled-darkmode** <br>Disabled text color for interactive UI elements on a dark background    | #616161<br><nobr>r97  g97  b97  |
| `CSS code for` <br> `color-text-error-darkmode`   | **color-text-error-darkmode** <br>Error text color on a dark background     | #e86868<br><nobr>r232  g104  b104  |

<hr>

#### Forms Colors
##### Text and Backgrounds for Forms on Light Backgrounds
| Token| Token Name and Usage | Token Values |
| :--- | :--- | :--- |
| `CSS code for`  <br> `color-text-form-label-lightmode`   | **color-text-form-label-lightmode** <br>Label text color for forms on a light background. Can also be used for input entry text    | #292929<br><nobr>r41  g41  b41  |
| `CSS code for`  <br> `color-text-form-placeholder-lightmode`   | **color-text-form-placeholder-lightmode** <br>Placeholder text color for forms on a light background     | #616161<br><nobr>r97  g97  b97  |
| `CSS code for`  <br> `color-text-form-disabled-lightmode`   | **color-text-form-disabled-lightmode** <br>Disabled text color for forms on a light background     | #b8b8b8<br><nobr>r184  g184  b184  |
| `CSS code for`  <br> `color-background-form-lightmode`   | **color-background-form-lightmode** <br>Light background color for forms    | #ffffff<br><nobr>r255  g255  b255  |
| `CSS code for` <br> `color-background-form-input-lightmode`   | **color-background-form-input-lightmode** <br>Light background color for input controls    | #ffffff<br><nobr>r255  g255  b255  |

<br>

##### Text and Backgrounds for Forms on Dark Backgrounds
| Token| Token Name and Usage | Token Values |
| :--- | :--- | :--- |
| `CSS code for`  <br> `color-text-form-label-darkmode`   | **color-text-form-label-darkmode** <br>Label text color for forms on a dark background. Can also be used for input entry text    | #fafafa<br><nobr>r250  g250  b250   |
| `CSS code for`  <br> `color-text-form-placeholder-darkmode`   | **color-text-form-placeholder-darkmode** <br>Placeholder text color for forms on a dark background     | #999999<br><nobr>r153  g153  b153   |
| `CSS code for`  <br> `color-text-form-disabled-darkmode`   | **color-text-form-disabled-darkmode** <br>Disabled text color for forms on a dark background     | #616161<br><nobr>r97  g97  b97   |
| `CSS code for`  <br> `color-background-form-darkmode`   | **color-background-form-darkmode** <br>Dark background color for forms    | #292929<br><nobr> r41  g41  b41  |
| `CSS code for` <br> `color-background-form-input-darkmode`   | **color-background-form-input-darkmode** <br>Dark background color for input control    | #292929<br><nobr> r41  g41  b41  |

<hr>

#### Border Colors
##### For Light Backgrounds
| Token| Token Name and Usage | Token Values |
| :--- | :--- | :--- |
| `CSS code for`  <br> `color-border-primary-lightmode`   | **color-border-primary-lightmode** <br>Primary border color for light background    | #616161<br><nobr>r97  g97  b97  |
| `CSS code for`  <br> `color-border-secondary-lightmode`   | **color-border-secondary-lightmode** <br>Secondary border color for light background    | #b8b8b8<br><nobr>r184  g184  b184  |
| `CSS code for`  <br> `color-border-disabled-lightmode`   | **color-border-disabled-lightmode** <br>Border color for disabled state for light background     | #dadada<br><nobr> r218  g218  b218   
| `CSS code for`  <br> `color-border-error-lightmode`   | **color-border-error-lightmode** <br>Border color for error validation state for light background     | #e86868<br><nobr>r232  g104  b104   
| `CSS code for` <br> `color-border-selected-lightmode`   | **color-border-selected-lightmode** <br>     | #2b6692<br><nobr>r43  g102  b146  |

<br>

##### For Dark Backgrounds
| Token| Token Name and Usage | Token Values |
| :--- | :--- | :--- |
| `CSS code for`  <br> `color-border-primary-darkmode`   | **color-border-primary-darkmode** <br>Primary border color for dark background    | #fafafa<br><nobr>r250  g250  b250  |
| `CSS code for`  <br> `color-border-secondary-darkmode`   | **color-border-secondary-darkmode** <br>Secondary border color for dark background    | #999999<br><nobr>r153  g153  b153  |
| `CSS code for`  <br> `color-border-disabled-darkmode`   | **color-border-disabled-darkmode** <br>Border color for disabled state for light background     | #dadada<br><nobr>r218  g218  b218   

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
  - AAA: 7:1 for normal text and 4.5:1 for large text 
  - AA: 4.5:1 for normal text and 3:1 for large text
  - AA-LG: Only for large text and graphical objects and user interface components

Note: Large text is defined as 14 point (typically 18.66px) and bold or larger, or 18 point (typically 24px) or larger.



**TBD - more content goes here**

<br>

</cdr-doc-table-of-contents-shell>
</template>


<template slot="Resources">
<cdr-doc-table-of-contents-shell>

## Color Options
Color options are part of the Cedar base color palette. You will find these colors in use throughout Cedar components and design recommendations. Developer note: Please use the variables in your code instead of hex values, as it ensures that your application will stay current.


**TBD - more content goes here**

<br>

</cdr-doc-table-of-contents-shell>
</template>
