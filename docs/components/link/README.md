---
{
   "title": "Link",
   "layout": "LayoutComponent",
   "summary": "Clickable text element to navigate to page section, another page or open an overlaid window such as modal dialog or popover.",
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
	  "standalone": [
      {
        "type": "do",
        "image": "links_descriptivetext_do.png",
        "alt": "Image showing proper link usage",
        "caption": "use clear, concise, and descriptive text."
      },
      {
        "type": "dont",
        "image": "links_descriptivetext_dont.png",
        "alt": "Image showing mixed button sizes",
        "caption": "use multiple sizes in the same context."
      }
    ],
    "link": [
      {
        "type": "do",
        "image": "links_underlinestyle_text_do.png",
        "alt": "The link in this copy uses the cdr-link component, and, so correctly uses an underline",
        "caption": "underline every link."
      },
      {
        "type": "dont",
        "image": "links_underlinestyle_text_dont.png",
        "alt": "The default link in body copy incorrectly does not use an underline",
        "caption": "apply different visual treatments for hyperlinks."
      }
    ],
  "name": "CdrLink",
  "versions": [
    {
      "api": {
        "props": [
          {
            "name": "tag",
            "type": "string",
            "default": "\"a\"",
            "description": "Enables user to set appropriate HTML element tag. {a, button}"
          },
          {
            "name": "modifier",
            "type": "string",
            "default": "N/A",
            "description": "Modifier allows the user to pass a style variant to this component {standalone}"
          },
          {
            "name": "href",
            "type": "string",
            "default": "\"#\"",
            "description": "Requires tag to be set to “a”. Sets URL to cdr-link href property"
          }
        ],
        "slots": [
          {
            "name": "default",
            "description": "innerHTML on the inside of the anchor component"
          }
        ],
        "installation": [
          {
            "name": "@rei/cdr-link",
            "type": "Node module package",
            "description": "Import the component into your project"
          },
          { 
            "name": "cdr-link.css", 
            "type": "css", 
            "description": "Component specific styles" 
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
<cdr-doc-table-of-contents-shell>

## Basic

Display within body copy for articles, hub cards, footer, or recommendations.

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/master/src/components/link" sandbox-href="https://codesandbox.io/s/jnv1rko1z9" >

```html
  <div>
  <cdr-text>If you spend much time in the great outdoors, you’re likely to hear the phrase “Leave No Trace” as often as you hear “<cdr-link href="https://www.rei.com/learn/expert-advice/ten-essentials.html">the Ten Essentials</cdr-link>.” What does it mean? Simply put, it’s the best practices we should follow to enjoy and protect our natural spaces.</cdr-text>
  </div>
```

</cdr-doc-example-code-pair>

## Standalone

Display independently with a call to action. Examples are remove filters, find a store, or view related products.

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/master/src/components/link" sandbox-href="https://codesandbox.io/s/jnv1rko1z9">

```html
  <div>
    <cdr-text tag="h1" modifier="heading-large" class="cdr-stack--md">
      REI CO-op Half Dome 2 Plus Tent
    </cdr-text>
    <cdr-link href="https://www.rei.com" modifier="standalone">
      View all REI Co-op Backpacking Tents
    </cdr-link>
  </div>
```

</cdr-doc-example-code-pair>

## Icon on left

Display icon on left of link message.

<cdr-doc-example-code-pair repository-href="https://github.com/rei/rei-cedar/tree/master/src/components/link" sandbox-href="https://codesandbox.io/s/jnv1rko1z9">

```html
  <div>
    <cdr-icon-sprite />
      <cdr-link tag="button">
        <!-- Using the sprite -->
        <cdr-icon
            use="#shipping"
            modifier="inherit-color"
            class="cdr-inline-left--sm"
        />
        This item ships for FREE!
      </cdr-link>
  </div>
```

</cdr-doc-example-code-pair>

## Icon on right

Display icon on right of link message.

<cdr-doc-example-code-pair repository-href="https://github.com/rei/rei-cedar/tree/master/src/components/link" sandbox-href="https://codesandbox.io/s/jnv1rko1z9">

```html
  <div>
    <cdr-icon-sprite />
      <cdr-link>
        Visit site
        <!-- Using the sprite -->
        <cdr-icon
            use="#external-link"
            modifier="inherit-color"
            class="cdr-inline-right--sm"/>
      </cdr-link>
  </div>
```

</cdr-doc-example-code-pair>
</cdr-doc-table-of-contents-shell>
</template>

<template slot="Design Guidelines">

# Use when

- Navigating to another page or a different portion of the same page

**Don’t use when**

- Triggering an action other than navigation. Instead, use [Button](https://docs.google.com/document/d/1RlEPYma55X_EKcxKOoBdnYqwEaWsXwGAaaGmP-1KjYQ/edit?usp=sharing)
- Navigating a user from promotional or campaign content. Instead, use [Call-to-action](https://docs.google.com/document/d/14GC9JaIxOVYHkL1qinHr5KsPBfnLCxo5sU1lZ2_-6Eg/edit?usp=sharing)

## Foundations

- Link styles are adapted based on context, such as for links included in the [Breadcrumb](http://breadcrumb.html), [Menus](http://menus.html) and [Navigation](http://navigation.html) component

## Content

- If screen space for text is minimal:
  - Use link labels that are descriptive. Do not use “click here” or “start here”
  - Describe the link’s destination when clicked
  - Use descriptive hidden text to explain the link
  - For example, if the Learn more link is connected to a control for pick up in store, then the hidden or descriptive text would be “Learn more about pick up in store”

## Behavior

**Choosing a Button or Link**

- When making decisions about using this component styled as a link or a button, consider the following:

| **Links**                                                                                           | **Buttons**                                                                          |
| --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Answers the question, "Where can I go"                                                              | Answers the question, "What can I do"                                                |
| Search engine crawlers can follow anchors for links (`<a>`)                                         | Search engine crawlers **cannot** follow links that are submitted by input or button |
| Default keyboard behavior is triggered using the Enter key                                          | Default keyboard behavior is triggered using the Space or Enter key                  |
| **Cannot be disabled** like buttons but can be made inert with tabindex="-1" and aria-hidden="true" | Can be disabled with disabled attribute                                              |



- Apply the following use cases when deciding when to use links as anchors or buttons:

<do-dont :examples="$page.frontmatter.standalone" />

- Use underline text style for links in paragraphs.

<do-dont :examples="$page.frontmatter.link" />

</template>

<template slot="API">

## Properties

<cdr-doc-api type="prop" />

## Slots

<cdr-doc-api type="slot" />

## Installation

Resources are available within the [cdr-link package](https://www.npmjs.com/package/@rei/cdr-link):

<cdr-doc-api type="installation" />

- Component: **@rei/cdr-link**

- Component styles: **cdr-link.css**

To incorporate the required assets for a component, use the following steps.

### #1. Install using NPM

Install the `cdr-link` package using `npm` in your terminal:

_Terminal_

```terminal
    npm i -s @rei/cdr-link
```

### #2. Import Dependencies

_main.js_

```javascript
// import your required css.
import "@rei/cdr-link/dist/cdr-link.css";

// If your link will display an icon ensure you also include the icon’s css file.
import "@rei/cdr-link/dist/cdr-icon.css";
```

### #3. Add component to a template

_local.vue_

```vue
<template>
...
    <cdr-link href="rei.com">Ten Essentials.</cdr-link>
...
</template>

<script>
import { CdrLink } from '@rei/cdr-link';
export default {
  ...
  components: {
     CdrLink  
  }
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

- **Standalone**: Include as an independent call to action to expand content, remove filters, or provide additional information.

## Accessibility

To ensure that usage of this component complies with accessibility guidelines, do the following:

- Always use a `<button>` element via the `tag` prop when there is no href attribute that can be applied to the link. Examples are:
  - Toggling a display to full screen
  - Opening a modal window
  - Triggering a popup menu
  - Playing media content
- Always use the default `<a>` element for a link when the link will navigate the user to the location specified by the href attribute
- Ensure links can be accessed via the keyboard. Don’t manipulate the default tab index
- Ensure assistive technology can find all links on a page by:
  - Using link labels that are descriptive. Do not use “click here” or “start here”
  - Describing the link’s destination when clicked
  - Always providing a href attribute. Empty href attributes are not considered true links

This component has compliance with following WebAIM’s accessibility guidelines:

- [WCAG SC 1.4.3: Contrast (Minimum)](https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast): Cedar Design System text color uses a Level AA contrast ratio of 4.5:1 contrast between the text color and the background, only when using the text color pairings

</template>

<template slot="History">

## 1.0.0

### What's new

Cdr-link component:

- Displays as an inline or standalone variant.
- Can render using an anchor or button element.
- Includes a property to allow the cdr-icon fill color to inherit the link color value.
- Support for a cdr-icon to display on left, on right, or, both. Git commit reference (9d404f4).

</template>
</cdr-doc-tabs>
