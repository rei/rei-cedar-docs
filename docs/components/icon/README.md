---
{
  "title": "Icons",
  "layout": "LayoutComponent",
  "summary": "Icons communicate meaning through the use of graphics",
  "meta": [
    {
      "name": "keywords",
      "content": "cdr-icon"
    }
  ],
  "breadcrumbs": [
    {
      "text": "Components/",
      "href": "#"
    }
  ],
  "name": "CdrIcon",
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
}
---

<cdr-doc-tabs>
<template slot="Overview">
<cdr-doc-table-of-contents-shell 
    :appended-nav-items="[
      {
        text: 'Related Components'
      },
      {
        text: 'Buttons',
        href: '../button/'
      },
      {
        text: 'Links',
        href: '../link/'
      }
    ]">

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

Create a new SVG icon using any valid internal SVG markup. This method creates an outer SVG wrapper for accessibility and styles. This is not recommended is if using a large number of icons.

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
- If an icon conveys meaning, there must be an `<alt>` tag that describes the action or idea that the icon represents
- If an icon is decorative, use an empty `<alt>` tag 
<div class="cdr-stack--lg"></div>

Recommendations for writing alternative text: 
- Be succinct. Exclude unnecessary words
- Be informative and accurate 
- Write in the active voice
- Avoid technical jargon
<div class="cdr-stack--lg"></div>

W3C recommends using `<title>` and `<desc>` elements in SVG for assistive technologies; however these elements have mixed support for screen readers as explained here. Cedar follows these recommendations by:
- Adding `role=’presentation’` to icons. This hide them from screen readers and causes the icon to be a nested image inside of a button or a link
- Assigning the attribute `focusable=’false’` to the SVG element
- Using `aria-label` for buttons or Cedar’s hidden text CSS style for links


</cdr-doc-table-of-contents-shell>
</template>

<template slot="Design Guidelines">
<cdr-doc-table-of-contents-shell 
    :appended-nav-items="[
      {
        text: 'Related Components'
      },
      {
        text: 'Buttons',
        href: '../button/'
      },
      {
        text: 'Links',
        href: '../link/'
      }
    ]">

## Use when
- Communicating simple actions and concepts that are easily understood, such as printing a receipt or sending email
- Making navigation easier for common actions. such as return to home page or search
- Representing an action, object or concept at a high level of abstraction, such as using the snowflake icon to represent snow sports
- Notifying users about status, such as the number of items in a shopping cart or a warning message 
- Conserving space for concepts that are difficult to depict, such as the progress icon or the 3-line “hamburger” menu

## Foundations
### Sizes
Icons are available in three sizes: small (16px), medium (24px), and large (32px).  Default size is 24px; however designers can choose a different size.

<cdr-img :src="$withBase(`/icon/Spec__Icon__Sizes_4-3.png`)" alt="Cedar icon sizes" ratio="4-3" />

### Color
Ensure that icons use contrast ratio of 4.5:1 contrast between icon color and background color. Follow recommendations in the Color article for pairing light and dark color tokens.

<cdr-img :src="$withBase(`/icon/Spec__Icon__Colors_21-9.png`)" alt="Cedar icon sizes" />

### Clearance
Adequate space around the icon allows for legibility and touch. A minimum touch target area of 40px is recommended for standalone iconography.

When the mouse and keyboard are the primary input methods or when icons are paired inline with text, measurements may be condensed to accommodate denser layouts. Icon size should align to the line-height of the paired text element. 

<cdr-img :src="$withBase(`/icon/Spec__Icon__Spacing_16-9.png`)" alt="Cedar icon sizes" ratio="16-9"/>

## Icon Library

TODO: Icon grid

List of icons with names and descriptions about when or how to use each icon. Icons are referred to as:
- `<name-of-icon>` when using with the method for SVG sprite. For example, account-profile 
- `Icon<name-of-icon>` when using with the method for Individual icon component. For example, the icon, ‘account-profile’ becomes is IconAccountProfile


TODO: Icon table

## Behavior
When using icons with links or buttons, make sure that the icon communicates intended meaning.

<do-dont :examples="$page.frontmatter.meaning" />

Ensure that icons are sized to provide a minimum click or touch target. 

<do-dont :examples="$page.frontmatter.clearance" />

Ensure that icons use contrast ratio of 4.5:1 between icon color and background color.

<do-dont :examples="$page.frontmatter.color" />


</cdr-doc-table-of-contents-shell>
</template>

<template slot="API">
<cdr-doc-table-of-contents-shell
    :appended-nav-items="[
      {
        text: 'Related Components'
      },
      {
        text: 'Buttons',
        href: '../button/'
      },
      {
        text: 'Links',
        href: '../link/'
      }
    ]">

</cdr-doc-table-of-contents-shell>
</template>

<template slot="History">

## 1.0.0

</template>
</cdr-doc-tabs>
