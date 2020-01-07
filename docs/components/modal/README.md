---
{
  "title": "Modal",
  "layout_type": "LayoutComponent",
  "summary": "Display additional page content in an overlay",
  "title_metadata": "CdrButton",
  "breadcrumbs": [
    {
      "text": "Components/"
    }
  ],
  "sandboxData": {
    "components": "CdrModal"
  },
  "versions": [
    {
      "components": [
        {
          "name": "CdrModal",
          "api": {
            "props": [
              {
                "name": "opened",
                "type": "Boolean",
                "default": "N/A",
                "description": "Toggles the state of the modal. Required."
              },
              {
                "name": "label",
                "type": "string",
                "default": "N/A",
                "description": "Text used to generate the `aria-label` attribute as well as the modal title text, if `labelSlot` is empty. Required."
              },
              {
                "name": "showTitle",
                "type": "boolean",
                "default": "true",
                "description": "Toggles the modal title text, which comes from `label` or `labelSlot`."
              },
              {
                "name": "ariaDescribedBy",
                "type": "string",
                "default": "'medium'",
                "description": "Text for the `aria-describedby` attribute."
              },
              {
                "name": "id",
                "type": "string",
                "default": "null",
                "description": "Unique id for modal."
              },
              {
                "name": "overlayClass",
                "type": "string",
                "default": "N/A",
                "description": "Adds a custom class to the `cdr-modal__overlay` div."
              },
              {
                "name": "wrapperClass",
                "type": "string",
                "default": "N/A",
                "description": "Add a custom class to the `cdr-modal__outerWrap` div."
              },
              {
                "name": "contentClass",
                "type": "string",
                "default": "N/A",
                "description": "Add a custom class to the `cdr-modal__innerWrap` div."
              },
              {
                "name": "animationDuration",
                "type": "number",
                "default": "300",
                "description": "Sets animation duration for when the modal is closed."
              },
              {
                "name": "size",
                "type": "string",
                "default": "'medium'",
                "description": "Sets the max-width of the modal. Possible values: { 'medium' | 'large' }"
              }
            ],
            "slots": [
              {
                "name": "default",
                "description": "Slot for CdrModal content."
              },
              {
                "name": "title",
                "description": "Slot for CdrModal title."
              }
            ],
            "events": [
              {
                  "name": "closed",
                  "arguments": "event",
                  "description": "$emit event fired when closing the modal."
              }
            ]
          }
        }
      ]
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

<cdr-doc-example-code-pair repository-href="/src/components/modal"
:sandbox-data="$page.frontmatter.sandboxData" :model="{ opened: false }">

```html
<cdr-button
  @click="opened = true"
  aria-haspopup="dialog"
>Show Modal
</cdr-button>

<cdr-modal
  label="Add to Cart"
  :opened="opened"
  @closed="opened = false"
  aria-described-by="description"
>
  <template slot="title">
    <cdr-text
      tag="h1"
      modifier="heading-600"
    >Add to Cart
    </cdr-text>
  </template>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet dictum ipsum.</p>
</cdr-modal>
```
</cdr-doc-example-code-pair>

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

## Events

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.events" :slots-getting-started-link="false" />

## Usage

```vue
<cdr-modal
  label="Add to Cart"
  :opened="opened"
  @closed="closed"
  aria-described-by="description"
>
  <template slot="title">
    <cdr-text
        tag="h1"
        modifier="heading-600"
      >Add to Cart
    </cdr-text>
  </template>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet dictum ipsum.</p>
</cdr-modal>
```

## Modal Title

If the `title` slot is left empty, the `label` prop will be rendered as the title. The title can be hidden altogether by setting `showTitle` to `false`.

When using the `label` slot, add CdrText to use the appropriate header styles.

```vue{3,4}
<template slot="title">
  <cdr-text
    tag="h1"
    modifier="heading-600"
  >Add to Cart
  </cdr-text>
</template>
```

## Size

The modal `size` prop controls the max-width of the modal. `medium` maps to a max-width of 600px; while `large` is 800px. 

## Scroll Behavior

The modal content area will scroll vertically if there's enough content. The modal title does not scroll; it stays affixed to the top of the modal.

## Accessibility

If your modal is launched by a button, addadd `aria-haspopup="dialog"` to the button element.

```vue
<template>
  <cdr-button
    aria-haspopup="dialog"
  >Launch modal</cdr-button>
</template>
```

</cdr-doc-table-of-contents-shell>
</template>

</cdr-doc-tabs>
 
