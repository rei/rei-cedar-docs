---
{
  "title": "Call to Action",
  "layout": "LayoutComponent",
  "summary": "Stylized link used in campaigns and promotions to encourage users to further explore featured products, services or offers.",
  "title_metadata": "Call to Action, CTA, CTA button, cdrCta",
  "placement": [
    {
      "type": "do",
      "image": "cta/CTA_placement_do_16-9.png",
      "ratio": "16-9",
      "alt": "Image showing proper Call to Action usage",
      "caption": "use Call to Action to lead users to explain more."
    },
    {
      "type": "dont",
      "image": "cta/CTA_placement_dont_16-9.png",
      "ratio": "16-9",
      "alt": "Image showing proper Call to Action paired with basic button",
      "caption": "mix Call to Action and basic buttons."
    }
  ],
  "label": [
    {
      "type": "do",
      "image": "cta/CTA_label_do_16-9.png",
      "ratio": "16-9",
      "alt": "Image showing Call to Action with a brief label",
      "caption": "write brief and concise labels."
    },
    {
      "type": "dont",
      "image": "cta/CTA_label_dont_16-9.png",
      "ratio": "16-9",
      "alt": "Image showing a Call to Action with a long label",
      "caption": "write long labels."
    }
  ],
  "size": [
    {
      "type": "do",
      "image": "cta/CTA_size_do_16-9.png",
      "ratio": "16-9",
      "alt": "Image showing standard size Call to Action",
      "caption": "maintain standard size."
    },
    {
      "type": "dont",
      "image": "cta/CTA_size_dont_16-9.png",
      "ratio": "16-9",
      "alt": "Image showing a different sized Call to Action",
      "caption": "alter the button size."
    }
  ],
  "typography": [
    {
      "type": "do",
      "image": "cta/CTA_type_do_16-9.png",
      "ratio": "16-9",
      "alt": "Image showing standard Call to Action typography",
      "caption": "maintain standard typography."
    },
    {
      "type": "dont",
      "image": "cta/CTA_type_dont_16-9.png",
      "ratio": "16-9",
      "alt": "Image showing a Call to Action with different typography",
      "caption": "alter standard typography."
    }
  ],
  "link": [
    {
      "type": "do",
      "image": "cta/CTA_link_do_16-9.png",
      "ratio": "16-9",
      "alt": "Image showing standard Call to Action link style",
      "caption": "maintain standard button-like styles."
    },
    {
      "type": "dont",
      "image": "cta/CTA_link_dont_16-9.png",
      "ratio": "16-9",
      "alt": "Image showing a Call to Action as a link",
      "caption": "style as a link."
    }
  ],
  "breadcrumbs": [
    {
      "text": "Components/",
      "href": "#"
    }
  ],
  "versions": [
    {
      "components": [
        {
          "name": "CdrCTA",
          "api": {
            "props": [
              {
                "name": "ctaStyle",
                "type": "string",
                "default": "\"brand\"",
                "description": "Set Call to Action color by changing ctaStyle to match different themes. \nPossible values: {brand, dark, light, sale}"
              },
              {
                "name": "fullWidth",
                "type": "boolean",
                "default": "false",
                "description": "Set Call to Action width to 100%. Setting it to true will set the width to 100% of the parent container. "
              },
              {
                "name": "href",
                "type": "string",
                "default": "\"#\"",
                "description": "Set the link using the page url."
              }
            ],
            "slots": [
              {
                "name": "default",
                "description": "This is for the readable text of cdr-cta."
              }
            ],
          }
        }
      ],
      "version": "0.1.0-alpha.1"
    }
  ]
}
---

<cdr-doc-tabs>
<template slot="Overview">
<cdr-doc-table-of-contents-shell>

## Dark

Use dark Call to Action over a light background image or color to provide proper contrast. This is the default Call to Action style.

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.08.1/src/components/cta" sandbox-href="https://codesandbox.io/s/9ojj43x1op">

```html
  <cdr-cta 
    href="https://rei.com"
    cta-style="dark"
  >
    Explore travel tips &amp; gear
  </cdr-cta>
```

</cdr-doc-example-code-pair>

## Light

Use light Call to Action over a dark background image or color to provide proper contrast.

<cdr-doc-example-code-pair repository-href="https://github.com/rei/rei-cedar/tree/18.08.1/src/components/cta" sandbox-href="https://codesandbox.io/s/9ojj43x1op">

```html
  <cdr-cta 
    href="https://rei.com"
    cta-style="light"
  >
    Explore travel tips &amp; gear
  </cdr-cta>
```

</cdr-doc-example-code-pair>

## Sale

Use sale Call to Action for off-price placements.

<cdr-doc-example-code-pair repository-href="https://github.com/rei/rei-cedar/tree/18.08.1/src/components/cta" sandbox-href="https://codesandbox.io/s/9ojj43x1op">

```html
  <cdr-cta 
    href="https://rei.com"
    cta-style="sale"
  >
    Shop top-rated gear
  </cdr-cta>
```

</cdr-doc-example-code-pair>

## Brand

Use CTA blue link as an alternative.

<cdr-doc-example-code-pair repository-href="https://github.com/rei/rei-cedar/tree/18.08.1/src/components/cta" sandbox-href="https://codesandbox.io/s/9ojj43x1op">

```html
  <cdr-cta
    cta-style="brand"
    href="https://rei.com"
  >
    Explore travel tips &amp; gear
  </cdr-cta>
```

</cdr-doc-example-code-pair>

## Elevated

Adds drop shadow to increase contrast and visibility of Call to Action when placed over an image.

<cdr-doc-example-code-pair repository-href="https://github.com/rei/rei-cedar/tree/18.08.1/src/components/cta" sandbox-href="https://codesandbox.io/s/9ojj43x1op">

```html
  <cdr-cta 
    href="https://rei.com"
    cta-style="brand"
    modifier="elevated"
  >
    Explore travel tips &amp; gear
  </cdr-cta>
```

</cdr-doc-example-code-pair>

</cdr-doc-table-of-contents-shell>
</template>

<template slot="Design Guidelines">
<cdr-doc-table-of-contents-shell>

## Use when
- Encouraging a user to navigate to a new location
- Promoting a campaign, promotional advertisements, or email offers

## Don't use when

- Triggering interface interactions. Instead, use a [Button](/components/button/) component

## Foundation

- Use uppercase for all words within a Call to Action

## Content

Call to Action exists as a means to navigate users to a new location or additional information:

- Use clear and concise text
- Make it clear what happens when this link is clicked or tapped 
- For example, “Shop Backpacking” Call to Action on a homepage would navigate the user to an assortment of backpacking-related products available for purchase
- Use all caps for CTAs, not sentence case, title caps or all lowercase

To construct consistent and universal Call to Actions across the site:

- If leading to a Brand/Category/Activity Landing page, UI text for Call to Action should be **[Explore Brand/Category/Activity Name]**
- If leading to a Product Detail page, UI text for Call to Action should be **[Shop Product Name]**
- If leading to a Collection/Search Result, UI text for Call to Action should be **[Shop all Brand/Category/Activity Name]**

## Behavior

Avoid combining a Call to Action with a basic button. Disabling Call to Actions is not semantically supported.

<do-dont :examples="$page.frontmatter.placement" />

Write brief and concise Call to Action labels to ensure a good customer experience for mobile and desktop users.

<do-dont :examples="$page.frontmatter.label" />

Maintain standard size of a Call to Action.

<do-dont :examples="$page.frontmatter.size" />

Maintain typography styling for a Call to Action.

<do-dont :examples="$page.frontmatter.typography" />

Maintain button styling for a Call to Action. Do not style as a link.

<do-dont :examples="$page.frontmatter.link" />

## Accessibility

When using Call to Action with assistive technology:

- Use an aria-label to clarify information 
- Clearly and concisely label what happens when the Call to Action is clicked or tapped
- For example, aria-label might read: “Shop our \<specific advertising category\>"

Call to Action text and text links must comply to AA color contrast and text size accessibility compliance guidelines:

- Choose a the light button theme on dark background or dark button theme on light background
- Test color contrast for button themes against all backgrounds

This component has no specific WCAG compliance attributes built into the control. Call to Action can: 

- Receive keyboard focus by default
- Enable states: Focus, Hover, and Active

## Related Links

- [Button](/components/button/)
- [Links](/components/link/)


</cdr-doc-table-of-contents-shell>
</template>

<template slot="API">
<cdr-doc-table-of-contents-shell>
  
## Props
<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

## Slots
<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />

## Modifiers

- elevated

## Installation

Resources are available with the [cdr-cta package](https://www.npmjs.com/package/@rei/cdr-cta):

<cdr-doc-api type="installation" />

- Component: `@rei/cdr-cta`
- Component styles: `cdr-cta.css`

To incorporate the required assets for a component, use the following steps:

### #1. Install using NPM

Install the `cdr-cta` package using `npm` in your terminal:

_Terminal_

```bash
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

This example code renders a full width `cdr-cta`, with the `elevated` modifier and the `sale` theme.

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

The `cdr-cta` component looks like a button; however it's actually an anchor:
- Do not use when a button is preferable such as triggering an action
- Do not assign the role of button
- For basic links, use [cdr-link](/components/link/)

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

## 1.0.0

### What's new

**CdrCTA** component:

- Includes suppoort for various themes
- Renders default and full-width sizes

Git commit reference [(b944d3a)](https://github.com/rei/rei-cedar/commit/b944d3a91b45dd1778d71674eaf26073f4521caa)

</template>
</cdr-doc-tabs>