---
{
  "title": "CTA",
  "layout": "LayoutComponent",
  "summary": "Provides an emphasized path to a new location or page view. It’s primary purpose is for selling or marketing a product(s) and entices users to perform an action. ",
  "title_metadata": "Can I just remove this property?",
  "breadcrumbs": [
    {
      "text": "Components/",
      "href": "#"
    }
  ],
  "name": "CdrCTA",
  "versions": [
    {
      "api": {
        "props": [
          {
            "name": "ctaStyle",
            "type": "string",
            "default": "\"brand\"",
            "description": "Set CTA style. Changes the color to match different themes. Possible values: { brand, dark, light, sale }"
          },
          {
            "name": "fullWidth",
            "type": "boolean",
            "default": "false",
            "description": "Set CTA width to be 100% of the parent container."
          },
          {
            "name": "href",
            "type": "string",
            "default": "\"#\"",
            "description": "The destination page url."
          }
        ],
        "slots": [
          {
            "name": "default",
            "description": "This is for the readable text of cdr-cta."
          }
        ]
      },
      "version": "0.1.0-alpha.0"
    }
  ]
}
---

<cdr-doc-tabs>
<template slot="API">
<cdr-doc-table-of-contents-shell>
  
## Properties
<cdr-doc-api type="prop" />

## Slots
<cdr-doc-api type="slot" />

## Installation

Resources are available with the [cdr-cta package](https://www.npmjs.com/package/@rei/cdr-cta):

<cdr-doc-api type="installation" />

- Component: `@rei/cdr-cta`
- Component styles: `cdr-cta.css`

To incorporate the required assets for a component, use the following steps:

### #1. Install using NPM

Install the `cdr-cta` package using `npm` in your terminal:

_Terminal_

```terminal
    npm i -s @rei/cdr-link
```

### #2. Import Dependencies

_main.js_

```javascript
// import your required css
import "@rei/cdr-cta/dist/cdr-cta.css";

// CTA uses a 
import "@rei/cdr-link/dist/cdr-icon.css";
```

### #3. Add component to a template

_local.vue_

```vue
<template>
...
  <cdr-cta href="rei.com"></cdr-cta>
...
</template>

<script>
import { CdrCta } from '@rei/cdr-cta';
export default {
  ...
  components: {
    CdrCta
  }
}
</script>
```

## Usage

Cdr-cta is meant to standardize calls-to-action, so there are a limited number of ways it can change. Use the 'elevated' modifier to change the drop shadow, and ctaStyle to change the theme.

This example code renders a full-width cdr-cta link, with the elevated modifier and the sale theme.
```vue
<template>
  <cdr-cta 
    href="https://rei.com" 
    :full-width="true" 
    cta-style="sale" 
    modifier"elevated"
  >
    See our new gear!
  </cdr-cta>
</template>
```

While cdr-cta looks like a button, it's actually an anchor, and should never be used where a button is preferable. Furthermore, cdr-cta should never be assigned a role of button.

If you need to make a link that does not look like a button, use cdr-link.

## Accessibility

- Ensure cdr-cta can be accessed via the keyboard. Don't manipulate the default tab index
- Ensure assistive technologies can find all cdr-cta links on a page by:
  - Using labels that are descriptive. Do not use "Click here" or "start here"
  - Describing the cdr-cta link's destination when clicked
  - Always providing an href attribute. Empty href attributes are not considered true links.
  - Use hidden text that can be read by screen readers, if screen space for text is minimal
  - Use an inline element for hidden text using the cdr-sr-only class
  ```vue
  <cdr-cta>
    Start here <span class="cdr-sr-only">for help finding the proper sleeping bag</span>
  </cdr-cta>
  ```

</cdr-doc-table-of-contents-shell>
</template>

<template slot="History">

## 0.1.0-alpha.0

### What's new

**CdrCTA** component:

- Includes suppoort for various themes
- Renders default and full-width sizes

</template>
</cdr-doc-tabs>