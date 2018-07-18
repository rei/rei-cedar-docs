---
{
  "title": "Button",
  "layout": "LayoutComponent",
  "summary": "Buttons are used to invoke an event and communicate the action that will occur.",
  "title_metadata": "Also known as a Call-to-Action (CTA)",
  "vertical": [
      {
        "type": "do",
        "image": "button/button_vert_do_4-3.png",
        "ratio": "4-3",
        "alt": "Image showing proper vertical button grouping",
        "caption": "match button widths"
      },
      {
        "type": "dont",
        "image": "button/button_vert_dont_4-3.png",
        "ratio": "4-3",
        "alt": "Image showing mixed button sizing",
        "caption": "mix button sizes."
      }
    ],
    "horizontal": [
      {
        "type": "do",
        "image": "button/button_horiz_do_4-3.png",
        "ratio": "4-3",
        "alt": "Image showing proper button height grouping",
        "caption": "match button heights."
      },
      {
        "type": "dont",
        "image": "button/button_horiz_dont_4-3.png",
        "ratio": "4-3",
        "alt": "Image showing mixed button sizing",
        "caption": "mix button sizes."
      }
    ],
    "label": [
      {
        "type": "do",
        "image": "button/button_label_do_4-3.png",
        "ratio": "4-3",
        "alt": "Image showing buttons with proper text length",
        "caption": "minimize label length."
      },
      {
        "type": "dont",
        "image": "button/button_label_dont_4-3.png",
        "ratio": "4-3",
        "alt": "Image showing buttons with too much text",
        "caption": "put too much text in a button."
      }
    ],
    "case": [
      {
        "type": "do",
        "image": "button/button_case_do_4-3.png",
        "ratio": "4-3",
        "alt": "Image showing buttons with proper text sentance case",
        "caption": "use sentance case."
      },
      {
        "type": "dont",
        "image": "button/button_case_dont_4-3.png",
        "ratio": "4-3",
        "alt": "Image showing buttons with title case",
        "caption": "use title case."
      }
    ],
    "noun": [
      {
        "type": "do",
        "image": "button/button_noun_do_4-3.png",
        "ratio": "4-3",
        "alt": "Image showing buttons with proper noun capitalization",
        "caption": "capitalize any proper nouns."
      },
      {
        "type": "dont",
        "image": "button/button_noun_dont_4-3.png",
        "ratio": "4-3",
        "alt": "Image showing buttons with all uppercase text",
        "caption": "use all caps."
      }
    ],
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
<cdr-doc-table-of-contents-shell tab-name="Overview">

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
    tab-name="Design Guidelines" 
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

- Triggering an action  
- Enabling a “final” action  
- Progressing or regressing a user through a step in a flow
- Submitting requested information  
- Confirming the completion of a flow or cancelling out of it

### Don't use when

- Navigating to another page on a site
- Taking users to a different part within the same page. Instead, use [Links](/components/link) component

## Foundations

- Change the button size when:
  - Medium - default size
  - Small - for supplemental user actions such as product comparison or filter on product pages
  - Large - XS grid with full breakpoint width; in mobile version. Also, for &quot;Add to cart&quot; on product pages or CTA buttons on campaign pages
- When stacking buttons vertically:
  - Align left borders
  - Display all with the same width
  - Separate each by stack-1-x spacing
  <cdr-img :src="$withBase(`/button/Spec__Button_Vertical_Spacing_16-4.png`)"/>
- When arranging buttons horizontally:
  - Align top borders
  - Display all with the same height
  - Separate each by standard inline-1-x spacing
  <cdr-img :src="$withBase(`/button/Spec__Button_Horizontal_Spacing_16-9.png`)"/>
- When grouping buttons, match button sizes either horizontally or vertically

<do-dont :examples="$page.frontmatter.vertical" />

<do-dont :examples="$page.frontmatter.horizontal" />

## Content

- Clearly and concisely label with 1–3 words and fewer than 20 characters, including spaces
  <do-dont :examples="$page.frontmatter.label" />
- Start with a verb, if possible. Labels must be action-oriented and set expectations for what the user will see next
- Never repeat the context of a label when the context is already clear. For example, for a &quot;Save&quot; button, do not expand to &quot;Save Account Information&quot;
- Use sentence case, not all caps, title caps or all lowercase
  <do-dont :examples="$page.frontmatter.case" />

  <do-dont :examples="$page.frontmatter.noun" />




## Behavior

### Choosing a Button or Link

- When making decisions about using this component styled as a link or a button, consider the following:

| **Links**                                                                                           | **Buttons**                                                                          |
| --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Answers the question, "Where can I go"                                                              | Answers the question, "What can I do"                                                |
| Search engine crawlers can follow anchors for links (`<a>`)                                         | Search engine crawlers **cannot** follow links that are submitted by input or button |
| Default keyboard behavior is triggered using the Enter key                                          | Default keyboard behavior is triggered using the Space or Enter key                  |
| **Cannot be disabled** like buttons but can be made inert with tabindex="-1" and aria-hidden="true" | Can be disabled with disabled attribute                                              |

- Apply the following use cases when deciding when to use links as anchors or buttons:

| **Links**                                                                                           | **Buttons**                                                                          |
| --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Navigating user to a new page or view                                                               | Toggling a display to full screen                                                    |
| Changing the URL                                                                                    | Opening a modal window                                                               |
| Causing a browser redraw/refresh                                                                    | Triggering a popup menu                                                              |
| Supporting internal page jumps                                                                      | Can be disabled with disabled attribute                                              |

## Accessibility

  - For icon-only buttons, provide aria-label text that describes what the button does.
  - Apply keyboard interaction patterns as described on [REI universal design and accessibility: Buttons](https://confluence.rei.com/display/accessibility/Buttons)
  - This component has no specific WCAG compliance attributes built into the control. It is possible to define this component as a link or button. Both types can: 
    - Receive keyboard focus by default
    - Enable states: Focus, Hover, and Active 

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
