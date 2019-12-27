---
{
  "title": "Icons",
  "layout_type": "LayoutComponent",
  "summary": "Communicates meaning through the use of graphics",
  "title_metadata": "CdrIcon",
  "breadcrumbs": [
    {
      "text": "Components/"
    }
  ],
  "name": "CdrIcon",
  "see_also": [
    {
      "text": 'See Also'
    },
    {
      "text": 'Buttons',
      "href": '../buttons/'
    },
    {
      "text": 'Links',
      "href": '../links/'
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
  "sandboxData": {
    "components": "CdrIcon"
  },
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
                "description": "Only on CdrIcon. Sets the href attribute for use with SVG symbol sprite (see @rei/cedar-icons)."
              },
              {
                "name": "size",
                "type": "string",
                "default": "medium",
                "description": "Modifies the icon size; values can target responsive breakpoints. Breakpoint values are: xs, sm, md, and lg. Examples: { 'small' | 'medium' | 'large' | 'large@sm' }"
              },
              {
                "name": "inherit-color",
                "type": "boolean",
                "default": "false",
                "description": "Sets icon fill color to 'inherit'.",
              },
              {
                "name": "modifier",
                "type": "string",
                "default": "N/A",
                "description": "Modifies the style variant for this component.",
                "alert": {
                  "type": "deprecated",
                  "description": "Deprecated in v2.0.0. Moved sized values to 'size' prop. Added 'inherit-color' prop."
                }
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


<cdr-doc-table-of-contents-shell>
# Overview

## SVG Sprite

A collection of SVG icon files composed into a single file. This method provides a single server download request and caches icons for display. This is the most efficient way of displaying large numbers of icons.

See the [Cedar Icon Library](https://rei.github.io/cedar-icons/#/) to generate a sprite sheet for your project. You will need to ensure that your sprite contains all the Cedar icons used in your application, including those used in shared components. The generated sprite sheet should be rendered inline at the root of your HTML. You should avoid rendering the sprite sheet in JavaScript/Vue, as that will cause it to be included twice (once in the server rendered HTML, and once in the client side bundle).

<cdr-doc-example-code-pair repository-href="/src/components/icon" :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrIcon'})" :load-sprite="true">

```html
  <cdr-icon use="#arrow-up" />
  <cdr-icon use="#arrow-down" />
```

</cdr-doc-example-code-pair>


## Inline Icon Components

While using an icon sprite is the most optimal way of loading SVGs there may be use cases where you need to inline SVG content directly in your markup. For example, if you are building a component that may be rendered across multiple pages and you cannot guarantee that your icon sprite will always be present.

For these cases, Cedar exports a component version of every SVG Icon in the [Cedar Icon Library](https://rei.github.io/cedar-icons/#/). These components are named using capitalized camel casing, for example `account-profile` becomes `IconAccountProfile` or `camping` becomes `IconCamping`.

<cdr-doc-example-code-pair repository-href="/src/components/icon" :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'IconAccountProfile, IconCamera'})">

```html
  <IconAccountProfile />
  <IconCamera />
```

</cdr-doc-example-code-pair>

## Non-Cedar SVG

Create a new SVG icon using any valid SVG markup. The wrapping SVG element can be stripped (below) or maintained. Note that if it is not stripped `viewBox`, `role`, and `xmlns` attributes will not be preserved, all others will. This method creates an outer SVG wrapper for accessibility and styles. This is not recommended if using a large number of icons.

<cdr-doc-example-code-pair repository-href="/src/components/icon" :sandbox-data="$page.frontmatter.sandboxData" >

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
- If an icon conveys meaning, there must be an `aria-label` that describes the action or idea that the icon represents
- If an icon is decorative, use an empty `alt` attribute

<br/>

Recommendations for writing screen reader text:
- Be succinct. Exclude unnecessary words
- Be informative and accurate
- Write in the active voice
- Avoid technical jargon

<br/>

W3C recommends using `<title>` and `<desc>` elements in SVG for assistive technologies; however these elements have mixed support for screen readers as explained [here](http://haltersweb.github.io/Accessibility/svg.html). Cedar follows these recommendations by:
- Adding `role=’presentation’` to icons. This hides them from screen readers and causes the icon to be a nested image inside of a button or a link
- Assigning the attribute `focusable=’false’` to the SVG element
- Using `aria-label` for buttons or Cedar’s hidden text CSS style for links

<hr>

# Guidelines

## Use When
- Communicating simple actions and concepts that are easily understood, such as printing a receipt or sending email
- Making navigation easier for common actions. such as return to home page or search
- Representing an action, object or concept at a high level of abstraction, such as using the snowflake icon to represent snow sports
- Notifying users about status, such as the number of items in a shopping cart or a warning message
- Conserving space for concepts that are difficult to depict, such as the progress icon or the 3-line “hamburger” menu

## The Basics
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

For a list of all available icons and their names, see the [Icon Library](https://rei.github.io/cedar-icons/#/)

## Behavior

When using icons with links or buttons, make sure that the icon communicates intended meaning.

<do-dont :examples="$page.frontmatter.meaning" class="cdr-mb-space-two-x"/>

Ensure that icons are sized to provide a minimum click or touch target.

<do-dont :examples="$page.frontmatter.clearance" class="cdr-mb-space-two-x"/>

Ensure that icons use contrast ratio of 4.5:1 between icon color and background color.

<do-dont :examples="$page.frontmatter.color" class="cdr-mb-space-two-x"/>

<hr>

# API

## Props

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

## Slots

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />

## Usage

For a list of all available icons and their names, see the [Icon Library](https://rei.github.io/cedar-icons/#/)

There are 2 different options to display SVG icons on your page using the **CdrIcon** package.

### 1. SVG Sprite

Requires:
- Icon sprite inline on page

Icon sprites can be generated using the [Cedar Icon Library](https://rei.github.io/cedar-icons/#/).

The sprite needs to be available on any page where the icons are being used, so add the sprite component at the base layout or index:

_App.vue (base template)_

```vue
<template>
  <div id="main">
    <div v-html="iconSprite" style="display: none;" />

    <router-view></router-view> // rest of app
  </div>
</template>

<script>
/* NOTE: you should create your own optimized sprite file for your project, `all-icons.svg` is only used here for convenience */
import { iconSprite } from '@rei/cedar-icons/dist/all-icons.svg';

...
data() {
  return {
    iconSprite
  }
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
import { CdrIcon } from '@rei/cedar';

...
components: {
  CdrIcon
}
...
</script>
```

### 2. Non-Cedar SVG

The **CdrIcon** package is simply an SVG with default attributes set for accessibility and styling.

- Any SVG markup can be used
- All attributes, event listeners, classes, etc. will be carried over with the exception of `viewBox`, `role`, and `xmlns`
- This method will increase HTML file size and slow down performance if using a lot of icons.


Requires:
- None


Use any valid SVG markup in the **CdrIcon** slot.

The svg element in this example will be stripped but the class and data- atrribute will be preserved (and could be moved to cdr-icon also)

```vue
<template>
  ...
  <cdr-icon>
    <svg class="my-class" data-example="this stays">
      <title>My icon</title>
      <path d="M12 12c1.9329966 0 3.5-1.5670034 3.5-3.5C15.5 6.56700338 13.9329966 5 12 5S8.5 6.56700338 8.5 8.5c0 1.9329966 1.5670034 3.5 3.5 3.5zm6.7621385 7c-.8850139-2.8946791-3.5777143-5-6.7621387-5-3.1844245 0-5.87712493 2.1053209-6.76213876 5H18.7621385zM4 21c-.55228475 0-1-.4477153-1-1h-.00754862a9.07963802 9.07963802 0 0 1 .01314502-.1064258c.00185549-.0175393.0041644-.0349433.00691478-.0522001.43595408-3.2192393 2.56090871-5.9021068 5.45328094-7.1270196C7.26398091 11.7054407 6.5 10.191939 6.5 8.5 6.5 5.46243388 8.96243388 3 12 3c3.0375661 0 5.5 2.46243388 5.5 5.5 0 1.6919391-.763981 3.2054409-1.9657923 4.2143547 2.8923661 1.2249103 5.0173178 3.9077692 5.4532779 7.1269995.0027529.0172699.0050636.0346873.0069201.0522401A9.07834213 9.07834213 0 0 1 21.0075481 20H21c0 .5522847-.4477153 1-1 1H4z"/>
    </svg>
  </cdr-icon>
  ...
</template>

<script>
import { CdrIcon } from '@rei/cedar';

...
  components: {
    CdrIcon
  }
...

</script>
```

You can also omit the wrapping svg element.

```vue
<template>
  ...
  <cdr-icon>
    <title>My icon</title>
    <path d="M12 12c1.9329966 0 3.5-1.5670034 3.5-3.5C15.5 6.56700338 13.9329966 5 12 5S8.5 6.56700338 8.5 8.5c0 1.9329966 1.5670034 3.5 3.5 3.5zm6.7621385 7c-.8850139-2.8946791-3.5777143-5-6.7621387-5-3.1844245 0-5.87712493 2.1053209-6.76213876 5H18.7621385zM4 21c-.55228475 0-1-.4477153-1-1h-.00754862a9.07963802 9.07963802 0 0 1 .01314502-.1064258c.00185549-.0175393.0041644-.0349433.00691478-.0522001.43595408-3.2192393 2.56090871-5.9021068 5.45328094-7.1270196C7.26398091 11.7054407 6.5 10.191939 6.5 8.5 6.5 5.46243388 8.96243388 3 12 3c3.0375661 0 5.5 2.46243388 5.5 5.5 0 1.6919391-.763981 3.2054409-1.9657923 4.2143547 2.8923661 1.2249103 5.0173178 3.9077692 5.4532779 7.1269995.0027529.0172699.0050636.0346873.0069201.0522401A9.07834213 9.07834213 0 0 1 21.0075481 20H21c0 .5522847-.4477153 1-1 1H4z"/>
  </cdr-icon>
  ...
</template>

<script>
import { CdrIcon } from '@rei/cedar';

...
  components: {
    CdrIcon
  }
...

</script>
```

</cdr-doc-table-of-contents-shell>
