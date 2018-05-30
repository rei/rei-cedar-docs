---
title: API
---


## Installation

Cdr-link required assets:

| Name          | type                | description                            |
| ------------- | ------------------- | -------------------------------------- |
| @rei/cdr-link | Node module package | Import the component into your project |
| cdr-link.css  | Style sheet         | Component specific styles              |


There are several ways you may decide to incorporate the required assets for a component. The following steps provide *a* way rather than *the* way.
### #1. Install via NPM
Install the cdr-link package via `npm` in your terminal:
Terminal

```terminal
    npm install --save @rei/cdr-link
```

### #2. Import the Component
Once installed, navigate to your app’s main entry point. In this file you will import your cdr-components as well as their dependencies  and tell Vue to use them.
main.js 
```javascript
    // Cedar has one dependency which is vue.js 
    import Vue from 'vue'
```

Locally register your components
cedar.js 
```javascript
    export { CdrLink } from '@rei/cdr-link';
    
    // if using icons with the cdr-link component, also install cdr-icon 
    export { CdrIcon } from '@rei/cdr-icon';
```

### #3. Import Dependencies
cedar.js 
```javascript
    // import your required css.
    import '@rei/cdr-link/dist/cdr-link.css';
    import '@rei/cdr-link/dist/cdr-icon.css';
```

### #4. Use them in your component

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

Use the tag prop to render the link as a  `<button>` element that presents a link appearance without an `href` attribute.

```vue
  <cdr-link tag="button">
    Show Details
  </cdr-link>
```

## Style Modifiers
You can pass the following variants to the modifier attribute of the cdr-link component to effect its visual presentation.

| Standalone | Include as an independent call to action to expand content, remove filters, or provide additional information. |

## Accessibility

- Always use a `<button>` element via the `tag` prop when there is no `href` attribute that can be applied to the link. For example, toggling a display to fullscreen.
- Always use the default `<a>` element for a link when the link will navigate the user to the location specified by the `href` attribute. 
- Ensure assistive technology can find all links on a page.
- Never use link labels that aren’t descriptive, such as “click here” or “start here”
- Describe users destination when they click it
- Improve descriptiveness by including hidden text from view but read by screen readers via an inline element with the `cdr-sr-only` class.
```vue
    <cdr-link>
       Start here 
       <span class="cdr-sr-only">
         for help finding the proper sleeping bag 
       </span>
     </cdr-link>
```

- Always ensure links can be accessed via the keyboard.

## Development roadmap

The following features will be explored in future iterations
- Support for vue router-link.



