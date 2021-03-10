---
{
  "title": "Links",
  "layout_type": "LayoutComponent",
  "summary": "Clickable text element to navigate to page section, another page or open an overlaid window such as modal dialog or popover",
  "title_metadata": "Hyperlink, Anchor, CdrButton, CdrLink",
  "see_also": [
    {
      "text": 'See Also'
    },
    {
      "text": 'Buttons',
      "href": '../buttons/'
    }
  ],
  "standalone": [
    {
      "type": "do",
      "image": "links/links_descriptivetext_do.png",
      "ratio": "16-9",
      "alt": "Image showing proper link usage",
      "caption": "use clear, concise, and descriptive text."
    },
    {
      "type": "dont",
      "image": "links/links_descriptivetext_dont.png",
      "ratio": "16-9",
      "alt": "Image showing click here link",
      "caption": "use “click here” or “start here” for link text."
    }
  ],
  "link": [
    {
      "type": "do",
      "image": "links/links_underlinestyle_text_do.png",
      "ratio": "16-9",
      "alt": "The link in this copy uses the cdr-link component, and, so correctly uses an underline",
      "caption": "underline every link."
    },
    {
      "type": "dont",
      "image": "links/links_underlinestyle_text_dont.png",
      "ratio": "16-9",
      "alt": "The default link in body copy incorrectly does not use an underline",
      "caption": "apply different visual treatments for hyperlinks."
    }
  ],
  "sandboxData": {
    "components": "CdrLink"
  },
  "versions": [
    {
      "components": [
        {
          "name": "CdrLink",
          "api": {
            "props": [
              {
                "name": "tag",
                "type": "string",
                "default": "'a'",
                "description": "Sets valid HTML element tag. Possible values: {  ‘a’  |  ‘button’  }"
              },
              {
                "name": "modifier",
                "type": "string",
                "default": "N/A",
                "description": "Modifies the style variant for this component. Possible values: {  ‘standalone’  }"
              },
              {
                "name": "href",
                "type": "string",
                "default": "'#'",
                "description": "Sets URL to ‘cdr-link’ href property. The tag prop requires value of <a>."
              }
            ],
            "slots": [
              {
                "name": "default",
                "description": "Sets the innerHTML for CdrLink. This includes text and html markup for icons."
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
      "version": "0.1.0"
    }
  ]
}
---


<cdr-doc-table-of-contents-shell>
# Overview

## Default (Medium)

Display within body copy for articles, hub cards, footer, or recommendations.

<cdr-doc-example-code-pair :codeMaxHeight= false repository-href="/src/components/link" :sandbox-data="$page.frontmatter.sandboxData" >

```html
<cdr-text>
  If you spend much time in the great outdoors,
  you’re likely to hear the phrase “Leave No Trace”
  as often as you hear
  "<cdr-link
    href="https://www.rei.com/learn/expert-advice/ten-essentials.html">
      the Ten Essentials
  </cdr-link>".
  What does it mean? Simply put, it’s the best practices
  we should follow to enjoy and protect our natural spaces.
</cdr-text>
```

</cdr-doc-example-code-pair>

## Standalone

Display independently with a Call to Action. Some examples are for finding a store, or viewing related products.

<cdr-doc-example-code-pair repository-href="/src/components/link" :sandbox-data="$page.frontmatter.sandboxData">

```html
  <cdr-link href="https://www.rei.com" modifier="standalone">
    View all REI Co-op Backpacking Tents
  </cdr-link>
```

</cdr-doc-example-code-pair>

## Icon on Left

Display standalone link with icon on left.

<cdr-doc-example-code-pair :codeMaxHeight= false repository-href="/src/components/link" :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrLink, IconShipping', styleTag: '.icon-class { margin-left: $cdr-space-one-x; }'})">

```html
  <div>
    <cdr-link tag="button" modifier="standalone">
      <icon-shipping inherit-color class="icon-class"/>
      This item ships for FREE!
    </cdr-link>
  </div>
```

</cdr-doc-example-code-pair>

## Icon on Right

Display standalone link with icon on right.

<cdr-doc-example-code-pair :codeMaxHeight= false repository-href="/src/components/link" :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrLink, IconExternalLink', styleTag: '.icon-class { margin-right: $cdr-space-one-x; }'})">

```html
  <div>
      <cdr-link modifier="standalone">
        Visit site
        <icon-external-link inherit-color class="icon-class"/>
      </cdr-link>
  </div>
```

</cdr-doc-example-code-pair>


## Inline Link Button

Use the `tag` prop to render a button that looks like a link. Can be used inline with other text. Should trigger an action rather than navigate to a new page.

To render a link that has the spacing and sizing of a button, use [CdrButton with link modifier](../buttons/#link-style). To visually render a button that behaves like a link, use [a CdrButton with link tag](../buttons#button-with-link-tag).

<cdr-doc-example-code-pair repository-href="/src/components/link" :sandbox-data="$page.frontmatter.sandboxData" :model="{ count: 0 }">

```html
  <cdr-text>
    What do you think?
    <cdr-link tag="button" @click="count++">
      Yes
    </cdr-link>
    /
    <cdr-link tag="button" @click="count--">
      no
    </cdr-link>
    {{count}}
  </cdr-text>
```

</cdr-doc-example-code-pair>

## Accessibility

Many WCAG requirements are contextual to their implementation.
To ensure that usage of this component complies with accessibility guidelines you are responsible for the following:

- Always use a `<button>` element for the `tag` prop when there is no `href` attribute that can be applied to the link. Examples are:
  - Toggling a display to full screen
  - Opening a modal window
  - Triggering a popup menu
  - Playing media content
- Always use the default `<a>` element for a link that navigates the user to the location specified by the `href` attribute
- A link MUST have programmatically-discernible text
- Links to the same destinations MUST be consistently identified with the same (or very similar) link text across all pages of the site
- Avoid using only “Click here” or “Start here”, but if screen space for text is minimal:
  - Provide text that can be read by screen readers
  - Use an inline element for hidden text with the 'cdr-sr-only' class

```vue
  <cdr-link>
    Start here <span class="cdr-sr-only">for help finding the proper sleeping bag </span>
  </cdr-link>
```

- Ensure assistive technology can find all links on a page:
  - Always provide a `href` attribute. Empty `href` attributes are not considered true links and are not accessible to keyboard users.
  - When using images as links, the `alt` attribute acts as the link text. Describe the action or hyperlink that the image represents
- Ensure that if the keyboard focus can be moved to a component of the page using a keyboard interface, then focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away.
-  Use `aria-label` or `aria-labelledby` to provide a more descriptive name when the text content of the link cannot be changed.
- The purpose of each link MUST be understandable and distinguishable from other links on the same page, either from the link text alone (ideally), or from the immediate surrounding context of the link.
<br/>

This component has compliance with following WebAIM’s accessibility guidelines:

- Using text color with a Level AA contrast ratio of 4.5:1 contrast between the text color and the background but only when displayed on light backgrounds

<hr>

# Guidelines

## Use When

- Navigating to another page or a different portion of the same page

## Don't Use When

- Navigating a user from promotional or campaign content. Instead, use [Buttons](../buttons/) styled to match the campaign

## The Basics

- Link styles are adapted based on context, such as for links included in the [Breadcrumb](../breadcrumb/), Menus, and Navigation
- There are 2 basic link styles: default and standalone
  - Use the default link when the link is near a body of text or in appears in a body of text
  - Use the standalone link when there is separation from a body of text
- When using multiple inline links together, be sure that their behaviors are consistent. For instance, don't have one link go to a new page and another one in the group trigger an action
- Link buttons are often useful for reducing the visual clutter of large groups of actions. For example, when there are many cards in a group using the link button style instead of a true button style

## Content

Use link labels that describe the link’s destination when clicked or tapped:

- Keep link text concise.  Restrict link text length to a maximum of 100 characters
- Use descriptive text for links, so that the user knows where they are going or what action they are taking. Avoid using “Click here” or “Start here”
- If screen space for text is minimal and text is only “Learn more”:
  - Provide `alt` text that can be read by screen readers
  - For example, if the link text is “Learn more”, then the `alt` text could be “Learn more about pick up in store”
- Don’t capitalize links. Some screen readers read capitalized text letter-by-letter. Instead, use sentence case
- Restrict the number of text links on a page. Screen reader will read all the links on a page

## Behavior

### Choosing a Button or Link

When making decisions about using this component styled as a link or a button, consider the following:

| **Links**                                                                                           | **Buttons**                                                                          |
| --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Answers the question, "Where can I go"                                                              | Answers the question, "What can I do"                                                |
| Search engine crawlers can follow anchors for links (`<a>`)                                         | Search engine crawlers **cannot** follow links that are submitted by input or button |
| Default keyboard behavior is triggered using the **Enter** key                                          | Default keyboard behavior is triggered using the **Space** or **Enter** key                  |
| **Cannot be disabled** like buttons but can be made inert with tabindex="-1" and aria-hidden="true" | Can be disabled with disabled attribute                                              |

<br />

Apply the following use cases when deciding when to use links as anchors or buttons:

| Links                                 	| Buttons                           	|
|---------------------------------------	|-----------------------------------	|
| Navigating user to a new page or view 	| Toggling a display to full screen 	|
| Changing the URL                      	| Opening a modal window            	|
| Causing a browser redraw/refresh      	| Triggering a popup menu           	|
| Supporting internal page jumps        	| Playing media content             	|
### Do / Don’t

<do-dont :examples="$page.frontmatter.standalone" />

<do-dont :examples="$page.frontmatter.link" />

## Resources

WebAIM: Links and Hypertext [Introduction to Links and Hypertext](https://webaim.org/techniques/hypertext/)

<hr>

# API

## Props

This component will bind any attribute that a [native HTML anchor element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) accepts.

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

## Slots

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />

## Events

<cdr-doc-api type="event" :api-data="$page.frontmatter.versions[0].components[0].api.events"/>

## Component Variables

<cdr-doc-comp-vars name="CdrLink"/>

## Usage

By default, the component renders using an anchor element and requires an `href` attribute to render a valid, accessible link.

```vue
  <cdr-link href="http://rei.com">
    Visit REI
  </cdr-link>
```

Use the `tag` prop to render the link as a `<button>` element that appears as a link, but without an `href` attribute.

```vue
  <cdr-link tag="button">
    Show Details
  </cdr-link>
```

### Style Modifier

Following variants are available to the `cdr-link` modifier attribute:

| Value | Description            |
|:------|:--------------------------------------------------------------|
| 'standalone'  | Change visual presentation by removing the underline for the normal state. Intended to be use for an independent Call to Action to expand content, remove filters, or provide additional information. |


</cdr-doc-table-of-contents-shell>
