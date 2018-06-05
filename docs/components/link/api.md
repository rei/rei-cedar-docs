---
title: API
---


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
*Ensure links can be accessed via the keyboard.
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



