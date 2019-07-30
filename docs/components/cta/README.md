---
{
  "title": "Call to Action",
  "layout_type": "LayoutComponent",
  "summary": "Stylized link used in campaigns and promotions to encourage users to further explore featured products, services or offers",
  "title_metadata": "CTA, CTA Button, CdrCta",
  "placement": [
    {
      "type": "do",
      "image": "cta/CTA_placement_do_16-9.png",
      "ratio": "16-9",
      "alt": "Image showing proper Call to Action usage",
      "caption": "use Call to Action to lead users to explore more."
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
      "text": "Components/"
    }
  ],
  "sandboxData": {
    "components": "CdrCta"
  },
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
                "description": "Sets Call to Action color by changing ctaStyle to match different themes. Possible values: { 'brand' | 'dark' | 'light' | 'sale' }"
              },
              {
                "name": "fullWidth",
                "type": "boolean",
                "default": "false",
                "description": "Sets Call to Action width to 100%. Setting this value to true will set the width to 100% of the parent container."
              },
              {
                "name": "href",
                "type": "string",
                "default": "\"#\"",
                "description": "Sets the link using the page url."
              },
              {
                "name": "modifier",
                "type": "string",
                "default": "N/A",
                "description": "Modifies the style variant for this component. Possible values: { 'elevated' }"
              }
            ],
            "slots": [
              {
                "name": "default",
                "description": "Sets the innerHTML for CdrCta. This is the readable text of the button."
              }
            ],
          }
        }
      ],
      "version": "0.1.0-alpha.1"
    }
  ],
  "see_also": [
    {
      "text": "See Also"
    },
    {
      "text": "Buttons",
      "href": "../buttons/"
    },
    {
      "text": "Links",
      "href": "../links/"
    }
  ]
}
---

<cdr-doc-tabs>
<template slot="Overview">
<cdr-doc-table-of-contents-shell>

## Dark

Use dark Call to Action over a light background image or color to provide proper contrast. This is the default Call to Action style.

<cdr-doc-example-code-pair :background-toggle="false" repository-href="/src/components/cta" :sandbox-data="$page.frontmatter.sandboxData">

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

<cdr-doc-example-code-pair repository-href="/src/components/cta" :sandbox-data="$page.frontmatter.sandboxData">

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

<cdr-doc-example-code-pair repository-href="/src/components/cta" :sandbox-data="$page.frontmatter.sandboxData">

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

Use brand Call to Action as an alternative.

<cdr-doc-example-code-pair repository-href="/src/components/cta" :sandbox-data="$page.frontmatter.sandboxData">

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

<cdr-doc-example-code-pair repository-href="/src/components/cta" :sandbox-data="$page.frontmatter.sandboxData">

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

## Accessibility

To ensure that usage of this component complies with accessibility guidelines:

- Clearly and concisely describe the link’s destination when the button is clicked or tapped:
  - For example, if the button text is "Shop Now", the `aria-label` might read: "Shop our &lt;specific advertising category&gt; now"
- Avoid using "click here" or "start here" but if screen space for text is minimal:
  - Provide text that can be read by screen readers
  - Use an inline element for hidden text with the `cdr-sr-only` class
  ```vue
  <cdr-cta>
    Start here <span class="cdr-sr-only">for help finding the proper sleeping bag</span>
  </cdr-cta>
  ```
- Ensure screen readers can find all **Call to Action** buttons on a page by:
  - Always providing an `href` attribute. Empty `href` attributes are not considered true links
  - Ensuring that it can be accessed via the keyboard. Don't manipulate the default tab index

<br />

This component has compliance with [WCAG SC 1.4.3: Contrast (Minimum)](https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast), however, do the following:

- Choose the light button theme for a dark background or the dark button theme for a light background
- Test color contrast for button themes against all backgrounds

</cdr-doc-table-of-contents-shell>
</template>

<template slot="Design Guidelines">
<cdr-doc-table-of-contents-shell>

## Use When
- Encouraging a user to navigate to a new location
- Promoting a campaign, promotional advertisements, or email offers

### Don't Use When

- Triggering interface interactions. Instead, use [Buttons](../buttons/)


## Content

Call to Action exists as a means to navigate users to a new location or additional information:

- Use clear and concise text
- Make it clear what happens when this link is clicked or tapped 
- For example, “Shop Backpacking” Call to Action on a homepage would navigate the user to an assortment of backpacking-related products available for purchase
- Use all caps for CTAs, not sentence case, title caps or all lowercase

<br />

To construct consistent and universal Call to Actions across the site:

- If leading to a Brand/Category/Activity Landing page, UI text for Call to Action should be **[Explore Brand/Category/Activity Name]**
- If leading to a Product Detail page, UI text for Call to Action should be **[Shop Product Name]**
- If leading to a Collection/Search Result, UI text for Call to Action should be **[Shop all Brand/Category/Activity Name]**

## Behavior

- Avoid combining a Call to Action with a basic button. Disabling Call to Actions is not semantically supported
- Maintain button styling including typographic and sizing for a Call to Action. Do not style as a link

### Do / Don't

<do-dont :examples="$page.frontmatter.placement" />

<br />

<do-dont :examples="$page.frontmatter.label" />

<br />

<do-dont :examples="$page.frontmatter.size" />

<br />

<do-dont :examples="$page.frontmatter.typography" />

<br />

<do-dont :examples="$page.frontmatter.link" />


</cdr-doc-table-of-contents-shell>
</template>

<template slot="API">
<cdr-doc-table-of-contents-shell>
  
## Props
<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

## Slots

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />

## Usage

This example code renders a full width `cdr-cta`, with the `elevated` modifier and the `sale` theme.

```vue
<template>
  <cdr-cta 
    href="https://rei.com" 
    :full-width="true" 
    cta-style="sale" 
    modifier="elevated"
  >
    See our new gear!
  </cdr-cta>
</template>
```

The **CdrCta** component looks like a button, however it's actually an anchor:
- Do not use when a button is preferable such as triggering an action
- Do not assign the role of button
- For basic links, use the [CdrLink component](../links/)

### Modifiers

The following variants are available to the `cdr-cta` modifier attribute:

| Value | Description            |
|:------|:-----------------------|
| 'elevated'  | Adds drop shadow to button |

</cdr-doc-table-of-contents-shell>
</template>

</cdr-doc-tabs>
