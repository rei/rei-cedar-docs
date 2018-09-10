---
{
  "title": "Icons",
  "layout": "LayoutComponent",
  "summary": "Icons communicate meaning through the use of graphics",
  "title_metadata": "cdr-icon",
  "breadcrumbs": [
    {
      "text": "Components/",
      "href": "#"
    }
  ],
  "name": "CdrIcon",
  "see_also": [
    {
      "text": 'See Also'
    },
    {
      "text": 'Buttons',
      "href": '../button/'
    },
    {
      "text": 'Links',
      "href": '../link/'
    },
    {
      "text": 'Iconography',
      "href": '../../foundation/iconography/'
    }
  ],
  "meaning": [
    {
      "type": "do",
      "image": "icon/icon_meaning_do_16-9.png",
      "ratio": "16-9",
      "alt": "box icon by text which reads use 'this item ships free'",
      "caption": "use the appropriate icon."
    },
    {
      "type": "dont",
      "image": "icon/icon_meaning_dont_16-9.png",
      "ratio": "16-9",
      "alt": "box icon by text which reads 'write a review'",
      "caption": "change the meaning or intention of the Cedar icons."
    }
  ],
  "clearance": [
    {
      "type": "do",
      "image": "icon/icon_clearance_do_16-9.png",
      "ratio": "16-9",
      "alt": "icons with sufficient padding",
      "caption": "provide at least 40 pixel target area."
    },
    {
      "type": "dont",
      "image": "icon/icon_clearance_dont_16-9.png",
      "ratio": "16-9",
      "alt": "icons with too little padding",
      "caption": "make click or touch target too small."
    }
  ],
  "color": [
    {
      "type": "do",
      "image": "icon/icon_color_do_16-9.png",
      "ratio": "16-9",
      "alt": "icons with sufficient contrast",
      "caption": "use primary color tokens for icon color."
    },
    {
      "type": "dont",
      "image": "icon/icon_color_dont_16-9.png",
      "ratio": "16-9",
      "alt": "icons with too little contrast",
      "caption": "create new color tokens for icons or use secondary color tokens."
    }
  ],
  "versions": [
    {
      "components": [
        {
          "name": "CdrIcon",
          "api": {
            "props": [
              {
                "name": "use",
                "type": "string",
                "default": "none",
                "description": "Only on CdrIcon. Sets the href attribute for use with SVG symbol sprite (CdrIconSprite)"
              },
              {
                "name": "modifier",
                "type": "string",
                "default": "N/A",
                "description": "Modifies the style variant for this component.  Possible values: {   ‘sm’  |  ‘md’  |  ‘lg’  }"
              }
            ],
            "slots": [
              {
                "name": "default",
                "description": "Sets the innerHTML of SVG element. This includes <title>, <desc>, or any other valid SVG xml."
              }
            ]
          }
        }
      ],
      "version": "0.1.0"
    }
  ]
}
---

<cdr-doc-tabs>
<template slot="Overview">
<cdr-doc-table-of-contents-shell>

## SVG sprite

A collection of SVG icon files composed into a single file. This method provides a single server download request and caches icons for display. This is the most efficient way of displaying large numbers of icons.

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.07.1/src/components/icon" sandbox-href="https://codesandbox.io/s/wq7x673mol" >

```html
  <cdr-icon-sprite />

  <cdr-icon use="#arrow-up" />
  <cdr-icon use="#arrow-down" />
```

</cdr-doc-example-code-pair>

## Individual icon components

Display any icon separately. This may be the easiest way to use an icon on a page however it is not recommended for every circumstance. When using a large number of icons, it will generate multiple server requests and slow down performance.

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.07.1/src/components/icon" sandbox-href="https://codesandbox.io/s/wq7x673mol" >

```html
  <icon-caret-up />
  <icon-caret-down />
```

</cdr-doc-example-code-pair>

## Non-Cedar SVG

Create a new SVG icon using any valid internal SVG markup. This method creates an outer SVG wrapper for accessibility and styles. This is not recommended if using a large number of icons.

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.07.1/src/components/icon" sandbox-href="https://codesandbox.io/s/wq7x673mol" >

```html
  <cdr-icon>
    <title>extremeBlk</title>
    <defs>
        <polygon id="path-1" points="6.5 18 0 9 6.5 0 13 9"></polygon>
        <mask id="mask-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="13"
              height="18" fill="white">
            <use xlink:href="#path-1"></use>
        </mask>
        <polygon id="path-3" points="11.5 18 5 9 11.5 0 18 9"></polygon>
        <mask id="mask-4" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="13"
              height="18" fill="white">
            <use xlink:href="#path-3"></use>
        </mask>
    </defs>
    <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="extremeBlk" stroke-width="1.5" stroke="#F2F2F2" fill="#000000">
            <g id="extreme">
                <use id="Fill-9" mask="url(#mask-2)" xlink:href="#path-1"></use>
                <use id="Fill-9" mask="url(#mask-4)" xlink:href="#path-3"></use>
            </g>
        </g>
    </g>
  </cdr-icon>
```

</cdr-doc-example-code-pair>

## Accessibility 

To ensure that usage of this component complies with accessibility guidelines:
- If an icon conveys meaning, there must be an `alt` attribute that describes the action or idea that the icon represents
- If an icon is decorative, use an empty `alt` attribute 

Recommendations for writing alternative text: 
- Be succinct. Exclude unnecessary words
- Be informative and accurate 
- Write in the active voice
- Avoid technical jargon

W3C recommends using `<title>` and `<desc>` elements in SVG for assistive technologies; however these elements have mixed support for screen readers as explained here. Cedar follows these recommendations by:
- Adding `role=’presentation’` to icons. This hides them from screen readers and causes the icon to be a nested image inside of a button or a link
- Assigning the attribute `focusable=’false’` to the SVG element
- Using `aria-label` for buttons or Cedar’s hidden text CSS style for links


</cdr-doc-table-of-contents-shell>
</template>

<template slot="Design Guidelines">
<cdr-doc-table-of-contents-shell>

## Use when
- Communicating simple actions and concepts that are easily understood, such as printing a receipt or sending email
- Making navigation easier for common actions. such as return to home page or search
- Representing an action, object or concept at a high level of abstraction, such as using the snowflake icon to represent snow sports
- Notifying users about status, such as the number of items in a shopping cart or a warning message 
- Conserving space for concepts that are difficult to depict, such as the progress icon or the 3-line “hamburger” menu

## Foundations
### Sizes
Icons are available in three sizes: small (16px), medium (24px), and large (32px).  Default size is 24px; however designers can choose a different size.

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/icon/Spec__Icon__Sizes_4-3.png`)" alt="Cedar icon sizes" />

### Color
Ensure that icons use contrast ratio of 4.5:1 contrast between icon color and background color. Follow recommendations in the [Color article](../../foundation/color/) for pairing light and dark color tokens.

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/icon/Spec__Icon__Colors_21-9.png`)" alt="Cedar icon sizes" />

### Clearance
Adequate space around the icon allows for legibility and touch. A minimum touch target area of 40px is recommended for standalone iconography.

When the mouse and keyboard are the primary input methods or when icons are paired inline with text, measurements may be condensed to accommodate denser layouts. Icon size should align to the line-height of the paired text element. 

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/icon/Spec__Icon__Spacing_21-9.png`)" alt="Cedar icon sizes" />

## Icon Library

<icon-grid />

List of icons with names and descriptions about when or how to use each icon. Icons are referred to as:
- `<name-of-icon>` when using with the method for SVG sprite. For example, account-profile 
- `Icon<NameOfIcon>` when using with the method for Individual icon component. For example, the icon, ‘account-profile’ becomes IconAccountProfile

<icon-table />

## Behavior
When using icons with links or buttons, make sure that the icon communicates intended meaning.

<do-dont :examples="$page.frontmatter.meaning" class="cdr-stack--lg"/>

Ensure that icons are sized to provide a minimum click or touch target. 

<do-dont :examples="$page.frontmatter.clearance" class="cdr-stack--lg"/>

Ensure that icons use contrast ratio of 4.5:1 between icon color and background color.

<do-dont :examples="$page.frontmatter.color" class="cdr-stack--lg"/>


</cdr-doc-table-of-contents-shell>
</template>

<template slot="API">
<cdr-doc-table-of-contents-shell>

## Props

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

## Slots

CdrIcon and all Icon* (IconArrowUp, IconCalendar, etc.) components have a default slot.

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />

## Installation

Resources are available within the [CdrIcon package](https://www.npmjs.com/package/@rei/cdr-icon):

- Component: `@rei/cdr-icon`
- Component styles: `cdr-icon.css`


To incorporate the required assets for a component, use the following steps:

### 1. Install using NPM

Install the CdrIcon package using `npm` in your terminal:

_Terminal_

```bash
npm i -S @rei/cdr-icon
```

### 2. Import dependencies

_main.js_

```bash
// import your required CSS.
import '@rei/cdr-icon/dist/cdr-icon.css';
```

### 3. Add component to a template

_local.vue_

```vue
<template>
  ...
    <icon-arrow-down />
  ...
</template>

<script>
import { IconArrowDown } from '@rei/cdr-icon';
export default {
  ...
  components: {
     IconArrowDown  
  }
}
</script>
```

## Usage

The **CdrIcon** package contains many different components:

1. **CdrIcon**  -- This is a basic SVG wrapper. This component allows for using Non-Cedar SVGs. Use this component in conjunction with the CdrIconSprite package
2. **CdrIconSprite** -- A symbol definition sprite with all Cedar icons
3. Individual icons -- For available icons, view [Cedar Icon Library](?active-tab=design-guidelines&active-link=icon-library) on Design Guidelines tab

There are 3 different options to display SVG icons on your page using the `CdrIcon` package.

### 1. SVG Sprite

#### Option A: Inline symbol sprite
 
Requires: 
- Icon sprite inline on page
 
The sprite needs to be available on any page where the icons are being used, so add the sprite component at the base layout or index:

_App.vue (base template)_

```vue
<template> 
  <div id="main"> 
    <cdr-icon-sprite /> 
 
    <router-view></router-view> // rest of app
  </div> 
</template> 
 
<script> 
import { CdrIconSprite } from '@rei/cdr-icon';

... 
components: {
  CdrIconSprite
}
... 
</script> 
```

_Child.vue (any descendant component of App.vue above)_

```vue
<template> 
  <div> 
    <cdr-icon use="#caret-right" />
  </div> 
</template> 
 
<script> 
import { CdrIcon } from '@rei/cdr-icon';

... 
components: {
  CdrIcon
}
... 
</script> 
```

#### Option B: External symbol defs
 
Requires:
- `@rei/cdr-icon/sprite/cdr-icon-sprite.svg`
- A webpack loader to handle the asset. This example assumes the file-loader package
- A polyfill for external SVG resource. Possible packages are: svgxuse or svg4everybody 
 
Within an individual component (there may be a better way to scale this if the code calls it in many places): 

```vue
<template> 
  ... 
  <cdr-icon :use="`${iconUrl}#caret-right`" />
  ... 
</template> 
 
<script> 
// import the sprite so file-loader will do its magic 
@import iconUrl from '@rei/cdr-assets/dist/cdr-icons.svg`; 
 
export default { 
  ... 
  data() { 
    return { 
      iconUrl 
    }; 
  } 
} 
 
</script> 
```

### 2. Individual icon components
 
This may be the easiest way to use an icon on a page however use this method carefully. This method will increase HTML file size and slow down performance if using a lot of icons. 
 
Requires:
- Install  `@rei/cdr-icon`

```vue
<template>
  ...
    <icon-caret-right />
    <icon-clock />
  ...
</template>

<script>
import { IconCaretRight, IconClock } from '@rei/cdr-icon';

...
  components: {
    IconCaretRight,
    IconClock
  }
...

</script>
```

### 3. Non-Cedar SVG
 
The CdrIcon package is simply an SVG with default attributes set for accessibility and styling. 

- Any SVG markup can be used
- Any attributes added will override the defaults
- This method will increase HTML file size and slow down performance if using a lot of icons.
 
Requires: 
- None

Use any valid SVG markup in the CdrIcon slot. 

```vue
<template> 
  ... 
  <cdr-icon viewBox="0 0 30 30">
    <title>My icon</title>
    <path d="M12 12c1.9329966 0 3.5-1.5670034 3.5-3.5C15.5 6.56700338 13.9329966 5 12 5S8.5 6.56700338 8.5 8.5c0 1.9329966 1.5670034 3.5 3.5 3.5zm6.7621385 7c-.8850139-2.8946791-3.5777143-5-6.7621387-5-3.1844245 0-5.87712493 2.1053209-6.76213876 5H18.7621385zM4 21c-.55228475 0-1-.4477153-1-1h-.00754862a9.07963802 9.07963802 0 0 1 .01314502-.1064258c.00185549-.0175393.0041644-.0349433.00691478-.0522001.43595408-3.2192393 2.56090871-5.9021068 5.45328094-7.1270196C7.26398091 11.7054407 6.5 10.191939 6.5 8.5 6.5 5.46243388 8.96243388 3 12 3c3.0375661 0 5.5 2.46243388 5.5 5.5 0 1.6919391-.763981 3.2054409-1.9657923 4.2143547 2.8923661 1.2249103 5.0173178 3.9077692 5.4532779 7.1269995.0027529.0172699.0050636.0346873.0069201.0522401A9.07834213 9.07834213 0 0 1 21.0075481 20H21c0 .5522847-.4477153 1-1 1H4z"/>
  </cdr-icon> 
  ... 
</template> 
 
<script> 
@import { CdrIcon } from '@rei/cdr-icon'; 
 
...
  components: {
    CdrIcon
  }
...
 
</script>
```

## Modifiers

Following variants are available to the `cdr-icon` modifier attribute: 
| Value | Description |
|:-------|:-----------------------|
| 'sm' | Sets icon size to 16px |
| 'md' | Sets icon size to 24px |
| 'lg' | Sets icon size to 32px |

</cdr-doc-table-of-contents-shell>
</template>

<template slot="History">

## 1.0.0

- Add grid-view, list-view, and scan-barcode icons
- All icon components have a slot that accepts any SVG xml
- Individual icon components for all icons (use only what you need)
- CdrIcon is lower-level component that acts as an SVG wrapper.
- Link to full dev [changelog](https://github.com/rei/rei-cedar/blob/master/src/components/icon/CHANGELOG.md)

</template>
</cdr-doc-tabs>
