---
{
   "title": "Link",
   "layout": "LayoutComponent",
   "summary": "Clickable text element used when navigating to page section, another page or opening an overlay window such as modal dialog or popover.",
   "title_metadata": "Hyperlink, Anchor, CdrButton, CdrLink",
   "breadcrumbs": [
      {
         "text": "Components/",
         "href": "#"
      },
      {
         "text": "Another-Step/",
         "href": "#"
      },
      {
         "text": "Pathname/",
         "href": "#"
      }
   ],
  "name": "CdrLink",
  "versions": [
    {
      "api": {
        "props": [
          {
            "name": "size",
            "type": "string",
            "default": "\"medium\"",
            "description": "Sets a static size for the button, which scales padding and text size. {small, medium, large}"
          },
          {
            "name": "responsiveSize",
            "type": "array",
            "default": "n/a",
            "description": "Render a specific button size at a specific breakpoint. Takes precedence over size and fullWidth.\nFormat is size@breakpoint (ex: large@sm)."
          }
        ],
        "slots": [
          {
            "name": "default",
            "description": "innerHTML on the inside of the button component"
          },
          {
            "name": "test",
            "description": "testing multiple slot documentation"
          }
        ]
      },
      "version": "0.1.1"
    },
    {
      "api": {
        "props": [
          {
            "name": "tag",
            "type": "string",
            "default": "\"a\"",
            "description": "MISSING DESCRIPTION"
          },
          {
            "name": "href",
            "type": "string",
            "default": "\"#\"",
            "description": "MISSING DESCRIPTION"
          }
        ],
        "slots": [
          {
            "name": "default",
            "description": "innerHTML on the inside of the anchor component"
          }
        ]
      },
      "version": "0.1.0"
    }
  ]
}
---

<cdr-doc-tabs>
<template slot="Overview">

## Basic

```
<cdr-link href="https://www.rei.com/">REI.com home page</cdr-link>

```
[github](https://github.com/rei/rei-cedar/tree/cedar2/src/components/link)
[code sandbox](https://codesandbox.io/s/jnv1rko1z9)

## Standalone

```
<cdr-link modifier="standalone" href="https://www.rei.com/">REI.com</cdr-link>
```
[github](https://github.com/rei/rei-cedar/tree/cedar2/src/components/link)
[code sandbox](https://codesandbox.io/s/jnv1rko1z9)

## With Button Element

```
<cdr-link tag="button">add to cart</cdr-link>
```
[github](https://github.com/rei/rei-cedar/tree/cedar2/src/components/link)
[code sandbox](https://codesandbox.io/s/jnv1rko1z9)

</template>


<template slot="Design Guidelines">

## Use when

*   Navigating to another page or a different portion of the same page

### Don't use when

*   Triggering an action other than navigation. Instead, use [Button](/components/button)
*   Navigating a user from promotional or campaign content. Instead, use [Call-to-action](#)

## Foundations

*   Display a blue link style by default, adding an underline on hover
*   Accepted text/color pairings can be found in the [Color](#) documentation
()
*   Always underline Links within paragraphs increase scan-ability and accessibility

*   Link styles are adapted based on context and needed affordance, such as for Links included in the [Breadcrumb](#), [Menus](#) and [Navigation](#) component

## Behavior

## Accessibility

*   Always present Link with a Level AA contrast ratio of:

*   4.5:1 contrast between the link text color and the background
*   3:1 contrast between the link text color and the surrounding non-link text color

*   Always distinguish a Link's underline and color from surrounding text
*   Match hover and focus states to ensure the same visual presentation when keyboard users navigate or 'tab' to the link

## Resources

TBD -- Link to sketch file with info about link component.

</template>

<template slot="API">

<cdr-doc-versioned-api headerTag="h2" compName="CdrLink"/>

## Installation

Cdr-link required assets:

| Name          | type                | description                            |
| ------------- | ------------------- | -------------------------------------- |
| @rei/cdr-link | Node module package | Import the component into your project |
| cdr-link.css  | Style sheet         | Component specific styles              |


To incorporate the required assets for a component, use the following steps.
### #1. Install via NPM
Install the cdr-link package via `npm` in your terminal:

Terminal
```terminal
    npm install --save @rei/cdr-link
```

### #2. Import Dependencies

main.js 
```javascript
    // import your required css.
    import "@rei/cdr-assets/dist/cdr-core.css";
    import "@rei/cdr-assets/dist/cdr-fonts.css";
    import '@rei/cdr-link/dist/cdr-link.css';

    // If your link will display an icon ensure you also include the icon’s css file.
    import '@rei/cdr-link/dist/cdr-icon.css';
```

### #3. Use them in your component

local.vue 
```vue
  <template>
    ...
        <cdr-link href="rei.com">Ten Essentials.</cdr-link>
    ...
  </template>
    
  <script> 
    import * as CdrComponents from '../cedar.js';
    export default {
      ...
      components: {
        CdrComponents
      }
      ...
    }
  </script>
```

## Usage

By default, the component renders using an anchor element and requires an href attribute or tag to render a valid accessible link.

```vue
  <cdr-link href="http://rei.com">
    Visit REI
  </cdr-link>
```

Use the tag prop to render the link as a `<button>` element that presents a link appearance without an `href` attribute.

```vue
  <cdr-link tag="button">
    Show Details
  </cdr-link>
```

## Style Modifiers
To effect the visual presentation pass the following variants to the modifier attribute of the cdr-link component.

| Standalone | Include as an independent call to action to expand content, remove filters, or provide additional information. |

## Accessibility

* Always use a `<button>` element via the `tag` prop when there is no `href` attribute that can be applied to the link. Examples are: 
  * Toggling a display to fullscreen
  * Opening a modal window
  * Triggering a popup menu
  * Playing media content
* Always use the default `<a>` element for a link when the link will navigate the user to the location specified by the `href` attribute.
* Ensure links can be accessed via the keyboard.
  * Don’t manipulate the default tab index
* Ensure assistive technology can find all links on a page by:
  * Using link labels that are descriptive. Do not use  “click here” or “start here”
  * Describing the link’s destination when clicked 
  * Always providing a href attribute. Empty href attributes are not considered true links
  * Use hidden text that can be read by screen readers, if screen space for text is minimal
  * Use an inline element for hidden text using the `cdr-sr-only` class
```vue
    <cdr-link>
       Start here 
       <span class="cdr-sr-only">
         for help finding the proper sleeping bag 
       </span>
     </cdr-link>
```

## Development roadmap

The following features will be explored in future iterations.
* Support for vue router-link.

</template>

<template slot="History">

## 0.1.0
### What's new

Cdr-link component:
* Displays as an inline or standalone variant.
* Can render using an anchor or button element.
* Includes a property to allow the cdr-icon fill color to inherit the link color value.
* Support for a cdr-icon to display on left, on right, or, both.
Git commit reference (9d404f4).


</template>
</cdr-doc-tabs>
