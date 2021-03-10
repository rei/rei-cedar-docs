---
{
  "title": "Modal",
  "layout_type": "LayoutComponent",
  "summary": "Display additional page content in an overlay",
  "title_metadata": "CdrModal",
  "breadcrumbs": [
    {
      "text": "Components/"
    }
  ],
  "sandboxData": {
    "components": "CdrModal, CdrButton",
    "styleTag": ".title-header { @include cdr-text-heading-serif-600;}"
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
              },
              {
                "name": "modal",
                "description": "Slot to override the entire CdrModal content."
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
  ]
}
---

<cdr-doc-table-of-contents-shell >

# Overview

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
      tag="h3"
      class="title-header"
    >Add to Cart
    </cdr-text>
  </template>
  <cdr-text tag="p" id="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet dictum ipsum.</cdr-text>
</cdr-modal>
```
</cdr-doc-example-code-pair>


## Multiple Modals On One Page

When rendering multiple modals on a single page you can reduce your markup size by using a single CdrModal instance to launch all of the modals.

<cdr-doc-example-code-pair repository-href="/src/components/modal"
:sandbox-data="$page.frontmatter.sandboxData" :model="{ opened: false, termsContent: 'Terms and conditions may apply', termsTitle: 'Terms and Conditions', shippingTitle: 'Free Shipping', shippingContent: 'Free shipping available on certain orders', title: '', content: '' }" :methods="{openTermsModal(){this.title = this.termsTitle; this.content = this.termsContent; this.opened = true;}, openShippingModal(){this.title = this.shippingTitle; this.content = this.shippingContent; this.opened = true;}}">

```html
<cdr-button
  @click="openTermsModal"
  aria-haspopup="dialog"
>Terms and Conditions
</cdr-button>

<cdr-button
  @click="openShippingModal"
  modifier="secondary"
  aria-haspopup="dialog"
>Free Shipping
</cdr-button>

<cdr-modal
  :opened="opened"
  :label="title"
  @closed="opened = false"
  aria-described-by="description"
>
  <template slot="title">
    <cdr-text
      tag="h3"
      class="title-header"
    >{{ title }}
    </cdr-text>
  </template>
  <cdr-text tag="p" id="description"> {{ content }}</cdr-text>
</cdr-modal>
```
</cdr-doc-example-code-pair>

## Accessibility

Ensure that usage of this component complies with accessibility guidelines:

- If your modal is launched by a button, add `aria-haspopup="dialog"` to the button element:

```vue
<cdr-button
  aria-haspopup="dialog"
>Launch modal</cdr-button>
```

- Set the `aria-described-by` prop to point to an element that describes what the modal does:

```vue
  <cdr-modal aria-described-by="description" label="modal title">
    <div id="description">
      modal content description
    </div>
  </cdr-modal>
```

This component complies with WCAG guidelines by:
- Uses the `label` prop to set the aria-label
- Assigns role="document" to the modal content
- All text content within the modal is read by screen readers, including the Close button text
- Only the content in the modal is read by the screen reader. Content outside modal is not read when the modal is in focus
- Modal can be closed using the keyboard (ESC key), Close button, or by clicking outside of modal
- Using the `aria-hidden` and `tabindex="-1"` on focusable items for all content outside of the modal

# Guidelines

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
  - Clicking the **Close** button
  - Interacting with the overlay background
  - Pressing the escape key (ESC)
- Modal opens one at a time and are never displayed in groups

# API
## Props

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

## Slots

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />

## Events

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.events" :slots-getting-started-link="false" />


## Modal Title

If the `title` slot is left empty, the `label` prop will be rendered as the title. The title can be hidden altogether by setting `showTitle` to `false`.

When using the `label` slot, add CdrText to use the appropriate header styles.

```vue{3,4}
<template slot="title">
  <cdr-text
    tag="h1"
    class="custom-text-class"
  >Add to Cart
  </cdr-text>
</template>
```

## Size

The modal has a default width of `640px` which converts to a fullscreen view at `xs` screen sizes.

## Scroll Behavior

The modal content area will scroll vertically if there's enough content. The modal title does not scroll; it stays affixed to the top of the modal.

## Keep Alive

Do not use `v-if` with CdrModal unless the component is wrapped with `keep-alive`. CdrModal handles showing and hiding itself when toggling, so `v-if` should be unneeded in most cases.

```vue{1,3,11}
<keep-alive>
  <cdr-modal
    v-if="opened"
    :opened="opened"
    label="Add to Cart"
    @closed="closed"
    aria-described-by="description"
  >
    ...
  </cdr-modal>
</keep-alive>
```

</cdr-doc-table-of-contents-shell>
