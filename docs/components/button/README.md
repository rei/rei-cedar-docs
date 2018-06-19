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
<cdr-doc-alert/>


## Primary
Use primary button to emphasize an action to complete a form or more forward in a process such as "Submit" or "Add to cart".

<cdr-doc-example-code-pair repository-href="http://github.com" sandbox-href="http://github.com">

```html
  <cdr-button>Button Text</cdr-button>
  <cdr-button>Button Text</cdr-button>
  <cdr-button>Button Text</cdr-button>
  <cdr-button>Button Text</cdr-button>
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
  <cdr-button size="small">Add to cart</cdr-button>
  <cdr-button>Add to cart</cdr-button>
  <cdr-button size="large">Add to cart</cdr-button>
```

</cdr-doc-example-code-pair>
</cdr-doc-table-of-contents-shell>
</template>


<template slot="Design Guidelines">

# <span class="display-name">CdrButton</span>

### <span class="modifiers">Modifiers</span>

Modifiers can be combined 1 from each grouping.

{secondary} | {sm,xs} | {block, fixed, responsive} **OR** link

Use of the 'link' modifier depends on including the css for cdrA.

A modifier list that contains 'link' exposes the same modifiers as cdrA and the other modifiers shouldn't be combined with it.

Responsive makes the button full width and block @ sm breakpoint.

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
