---
{
	"title": "Button",
	"layout": "LayoutComponent",
	"summary": "Buttons are used to invoke an event and communicate the action that will occur.",
	"title_metadata": "Also known as a Call-to-Action (CTA)",
	"breadcrumbs": [
		{
			"text": "Components/",
			"href": "#"
		}
  ],
  "name": "CdrButton",
  "versions": [
    {
      "api": {
        "props": [
          {
            "name": "size",
            "type": "string",
            "default": "\"medium\"",
            "description": "Sets a static size for the button, which scales padding and text size. {small, medium, large}"
          },
          {
            "name": "responsiveSize",
            "type": "array",
            "default": "n/a",
            "description": "Render a specific button size at a specific breakpoint. Takes precedence over size and fullWidth.\nFormat is size@breakpoint (ex: large@sm)."
          }
        ],
        "slots": [
          {
            "name": "default",
            "description": "innerHTML on the inside of the button component"
          },
          {
            "name": "test",
            "description": "testing multiple slot documentation"
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

## Primary
Use primary button to emphasize an action to complete a form or more forward in a process such as "Submit" or "Add to cart".

<cdr-doc-example-code-pair repository-href="http://github.com" sandbox-href="http://github.com">

```html
  <cdr-button>Button more Text</cdr-button>
```

</cdr-doc-example-code-pair>



## Secondary
Use secondary button for all actions that do not move the user to the next step or are additional user actions such as “Add to wish list” or “Load more”. There should be only 1 primary action per major page section.

<cdr-doc-example-code-pair>

```html
  <cdr-button class="cdr-button--secondary">Button Text</cdr-button>
```

</cdr-doc-example-code-pair>

## Button with icon
Most common icon only button is for closing a modal or accordion panel.

<cdr-doc-example-code-pair>

```html
  <cdr-button>Button Text</cdr-button>
```

</cdr-doc-example-code-pair>


## Size
Change the button size based on where button is used

<cdr-doc-example-code-pair>

```html
  <div>
    <cdr-button size="small">Add to cart</cdr-button>
    <cdr-button>Add to cart</cdr-button>
    <cdr-button size="large">Add to cart</cdr-button>
  </div>
```

</cdr-doc-example-code-pair>
</cdr-doc-table-of-contents-shell>
</template>


<template slot="Design Guidelines">
  <cdr-doc-table-of-contents-shell 
    :appended-nav-items="[
      {
        text: 'Related Components'
      },
      {
        text: 'Call to Action buttons',
        href: '#'
      },
      {
        text: 'Toggle buttons',
        href: '#'
      },
      {
        text: 'Button groups',
        href: '#'
      }
    ]">
    <cdr-doc-alert/>

## Use When

  * Triggering an action when a user clicks or taps on the component.
  * Enabling a &ldquo;final&rdquo; action.
  * Progressing or regressing a user through a step in a flow.
  * Submitting requested information. 
  * Confirming the completion of a flow or cancelling out of it.

### Don't use when

  * Navigating to another page on a site. Instead, use Call-to-action.
  * Taking a user to a different part within the same page. Instead, use Link.

## Visual language
Buttons should be self-contained visual elements, typically a form of rectangle, that encloses text, iconography, or both. Hierarchy of importance is emphasized and delineated by using primary and secondary buttons. These button types should utilize visual and spatial cues to communicate their importance within that hierarchy, such as boldness of color/value choices and order of presentation such as left-to-right or top-to-bottom arrangements.

Visual specs for small, medium and large buttons.

## Behavior
These are guidelines for when and how to use the Button component.

## Content

  * Clearly and accurately label buttons.
  * Lead with strong, actionable verbs.
  * Depending on the use case, buttons may contain a label and/or an icon.
  * All button labels are sentence case, with only the first word in a phrase and any proper nouns capitalized.
  * Button labels should be as short as possible and communicate the action that will occur when the user touches them.

## Accessibility

  * Display a visible focus state when users tab to the button.
  * For icon-only buttons, provide engineers with UI text to be used inside the `<button>` element for screen readers. This text is defined in the `<title>` tag for SVG files or `<ALT>` tag.
  * If needed, a longer description for the icon (or SVG element) that contains its purpose or provides additional and/or clarifying information can be provided to engineers. This text will appear in the `<desc>` tag and is very helpful to users of assistive technology.
Modifiers can be combined 1 from each grouping.
  * If the SVG is purely decorative or has supporting text, define UI text as “NONE” because no UI text needs to be provided for `<title>` or `<desc>` or `<alt>` tags. 

  </cdr-doc-table-of-contents-shell>
</template>

<template slot="API">

# Properties
### Props

<cdr-doc-api type="prop" />

### Slots 

<cdr-doc-api type="slot" />
</template>

<template slot="History">

# Last updated
June 19, 2018

# Contributors

</template>
</cdr-doc-tabs>
