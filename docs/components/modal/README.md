---
{
  "title": "Buttons",
  "layout_type": "LayoutComponent",
  "summary": "Invoke and communicate an action that will occur",
  "title_metadata": "CdrButton",
  "vertical": [
    {
      "type": "do",
      "image": "buttons/button_vert_do_4-3.png",
      "ratio": "4-3",
      "alt": "Image showing proper vertical button grouping",
      "caption": "match button widths."
    },
    {
      "type": "dont",
      "image": "buttons/button_vert_dont_4-3.png",
      "ratio": "4-3",
      "alt": "Image showing mixed button sizing",
      "caption": "mix button sizes."
    }
  ],
  "horizontal": [
    {
      "type": "do",
      "image": "buttons/button_horiz_do_4-3.png",
      "ratio": "4-3",
      "alt": "Image showing proper button height grouping",
      "caption": "match button heights."
    },
    {
      "type": "dont",
      "image": "buttons/button_horiz_dont_4-3.png",
      "ratio": "4-3",
      "alt": "Image showing mixed button sizing",
      "caption": "mix button sizes."
    }
  ],
  "label": [
    {
      "type": "do",
      "image": "buttons/button_label_do_4-3.png",
      "ratio": "4-3",
      "alt": "Image showing buttons with proper text length",
      "caption": "minimize label length."
    },
    {
      "type": "dont",
      "image": "buttons/button_label_dont_4-3.png",
      "ratio": "4-3",
      "alt": "Image showing buttons with too much text",
      "caption": "put too much text in a button."
    }
  ],
  "case": [
    {
      "type": "do",
      "image": "buttons/button_case_do_4-3.png",
      "ratio": "4-3",
      "alt": "Image showing buttons with proper text sentence case",
      "caption": "use sentence case."
    },
    {
      "type": "dont",
      "image": "buttons/button_case_dont_4-3.png",
      "ratio": "4-3",
      "alt": "Image showing buttons with title case",
      "caption": "use title case."
    }
  ],
  "noun": [
    {
      "type": "do",
      "image": "buttons/button_noun_do_4-3.png",
      "ratio": "4-3",
      "alt": "Image showing buttons with proper noun capitalization",
      "caption": "capitalize any proper nouns."
    },
    {
      "type": "dont",
      "image": "buttons/button_noun_dont_4-3.png",
      "ratio": "4-3",
      "alt": "Image showing buttons with all uppercase text",
      "caption": "use all caps."
    }
  ],
  "breadcrumbs": [
    {
      "text": "Components/"
    }
  ],
  "sandboxData": {
    "components": "CdrButton"
  },
  "versions": [
    {
      "components": [
        {
          "name": "CdrButton",
          "api": {
            "props": [
              {
                "name": "tag",
                "type": "string",
                "default": "'button'",
                "description": "Renders CdrButton as a <button> or <a> element. When using the value of <a>, this element renders as an anchor link. Possible values: { 'button' | 'a' }"
              },
              {
                "name": "type",
                "type": "string",
                "default": "'button'",
                "description": "Sets the button type. Possible values: { 'button' | 'submit' | 'reset' }"
              },
              {
                "name": "fullWidth",
                "type": "boolean",
                "default": "false",
                "description": "Sets button width to 100%. Setting this value to true will set the button width to 100% of the parent container. Use the 'fullWidth' prop with the 'size' prop to control top and bottom padding."
              },
              {
                "name": "size",
                "type": "string",
                "default": "'medium'",
                "description": "Sets the button size; values can target responsive breakpoints. Breakpoint values are: xs, sm, md, and lg. Examples: { 'small' | 'medium' | 'large' | 'large@sm' }",
                "alert": {
                  "type": "updated",
                  "description": "Updated in v.2.0.0. See usage examples below."
                }
              },
              {
                "name": "responsiveSize",
                "type": "array",
                "default": "N/A",
                "description": "Sets the button size at different responsive breakpoints. Breakpoints values are: xs, sm, md, and lg. Examples: { ‘large@xs’ | ‘small@lg’ }",
                "alert": {
                  "type": "deprecated",
                  "description": "Deprecated in v2.0.0. Instead, use 'size' prop."
                }
              },
              {
                "name": "iconOnly",
                "type": "boolean",
                "default": "false",
                "description": "Renders an 'icon-only' button. When this value is true, it will override the size and 'responsiveSize' props."
              },
              {
                "name": "onDark",
                "type": "boolean",
                "default": "false",
                "description": "Renders an 'icon-only' button with a light fill color for use on dark backgrounds. The 'iconOnly' prop must be true."
              },
              {
                "name": "modifier",
                "type": "string",
                "default": "N/A",
                "description": "Modifies the style variant for this component. Possible values: { 'secondary' }"
              }                          
            ],
            "slots": [
              {
                "name": "default",
                "description": "Sets the innerHTML for CdrButton'. This is the readable text of the button. Leave empty if icon-only."
              },
              {
                "name": "icon",
                "description": "Sets the innerHTML for CdrButton. This is for the icon."
              }
            ],
            "events": [
              {
                "description": "All event listeners are passed through to/from the component."
              }
            ]
          }
        }
      ],
      "version": "2.0.0"
    }
  ],
  "see_also": [
    {
      "text": "See Also",
    },
    {
      "text": "Call to Action",
      "href": "../cta/"
    }
  ]
}
---

<cdr-doc-tabs>
<template slot="Overview">
<cdr-doc-table-of-contents-shell tab-name="Overview">

## Accessibility

To ensure that usage of this component complies with accessibility guidelines, do the following:

- All text content within the modal is read by screen readers, including the Close button text
- Only the content in the modal is read by the screen reader. Content outside modal is not read when the modal is in focus
- Modal can be closed using the keyboard (ESC key), Close button, or by clicking outside of modal

This component has compliance with WCAG guidelines by:
- Select the appropriate attributes and aria roles: 
  - For modal without title: aria-label
  - For short modal: aria-describedby
  - For longer modal: assign role="document" to the modal content
- Use the `aria-hidden` and `tabindex="-1"` on focusable items for all content outside of the modal

</cdr-doc-table-of-contents-shell>
</template>

<template slot="Guidelines">
  <cdr-doc-table-of-contents-shell>

## Use When

- Displaying important information users need to respond to
- Displaying non-essential content related to the underlying page that exceeds 560 characters


## Don't Use When

- Displaying limited additional page content
- Providing status feedback or messages

## The Basics

- Use modals sparingly. Modals are disruptive and their sudden appearance forces users to stop their current task and focus on the modal content
- Two width options are available: 600px (default) and 800px (large)
- Headlines should not exceed 68 characters
- Modal centers within the page
- Keep modal titles succinct and informative 

## Behavior

- If two buttons are needed, place the primary button on the left and the secondary button on the right. Stack buttons at XS
- Content behind modal does not scroll and cannot be interacted with in any way
- Gradient is added at bottom to signify further scrollable content
- Modal is dismissed by: 
  - Clicking the Close button 
  - Interacting with the overlay background
  - Pressing the escape key (ESC)
- Modal opens one at a time and are never displayed in groups

</cdr-doc-table-of-contents-shell>
</template>

<template slot="API">
<cdr-doc-table-of-contents-shell>

## Props

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

## Slots

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />

## Usage

### Size Prop

The below example uses the `size` prop to set a default and responsive size. This button’s size is small, but it will become a large button at the `xs` and `sm` breakpoints.

```vue{3}
<template>
  <cdr-button
    size="small large@xs large@sm"
  >
    Add to cart
  </cdr-button>
</template>
```

### Modifiers

Following variants are available to the `cdr-button` modifier attribute:

| Value | Description            |
|:------|:-----------------------|
| 'secondary' | Sets the secondary style for the button |


### Click Actions

Use an `@click` event handler to attach custom actions and event handling.

```vue{3}
<template>
  <cdr-button
    @click="greet"
  >
    Greet
  </cdr-button>
</template>

<script>
export default {
  ...
  methods: {
    greet() {
      console.log(‘Hello there’);
    }
  }
}
</script>
```

## Composing with Icons

**CdrButton** component can be used with the icon component from the **CdrIcon** package.

### Text and Icon

To scale Cedar icons appropriately, include the `cdr-button__icon` class with any icon component. The `size` prop scales both the icon and button.

In the below example, a "Download" button is rendered as a button with icon and text using `cdr-icon` and the icon sprite.

```vue{5}
<template>
  <cdr-button>
    <cdr-icon
      slot="icon"
      class="cdr-button__icon"
      use="#download"
    />
    Download
  </cdr-button>
</template>

<script>
import { CdrButton, CdrIcon } from '@rei/cedar';
export default {
  ...
  components: {
     CdrButton,
     CdrIcon,  
  }
}
</script>
```

### Icon Only

Use the following props to modify `cdr-button`:

- Default slot must be empty. If text is present in default slot, the text will render  
- `size` prop is disabled when `icon-only` prop is true
- For the SVG files:
  - If the `fill` color is dark, assign true to the `on-dark` prop
  - `on-dark` prop only works if `icon-only` prop is also true
- Add `aria-label` text to describe the button’s action when clicked or tapped

```vue{3,4,5}
<template>
  <cdr-button
    :icon-only="true"
    :on-dark="true"
    aria-label="Complete this step"
  >
    <icon-check-lg
      slot="icon"
      class="cdr-button__icon"
    />
  </cdr-button>
</template>
```


</cdr-doc-table-of-contents-shell>
</template>

</cdr-doc-tabs>
