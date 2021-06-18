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
                "description": "Sets the button size; values can target responsive breakpoints. Breakpoint values are: xs, sm, md, and lg. Examples: { 'small' | 'medium' | 'large' | 'large@sm' }"
              },
              {
                "name": "iconOnly",
                "type": "boolean",
                "default": "false",
                "description": "Renders an 'icon-only' button. When this value is true, it will override the size and 'responsiveSize' props. Can be used in conjunction with 'with-background'"
              },
              {
                "name": "withBackground",
                "type": "boolean",
                "default": "false",
                "description": "Renders an 'icon-only' button with a background color and border. Must be used in conjunction with the 'iconOnly' prop."
              },
              {
                "name": "modifier",
                "type": "string",
                "default": "N/A",
                "description": "Modifies the style variant for this component. Possible values: { 'primary' | 'secondary' | 'sale' | 'dark' | 'link'}"
              }                          
            ],
            "slots": [
              {
                "name": "default",
                "description": "Sets the innerHTML for CdrButton'. This is the readable text of the button. Leave empty if icon-only."
              },
              {
                "name": "icon",
                "description": "Sets the innerHTML for CdrButton icon-only button."
              },
              {
                "name": "icon-left",
                "description": "Sets the innerHTML for CdrButton with icon to the left of text content."
              },
              {
                "name": "icon-right",
                "description": "Sets the innerHTML for CdrButton with icon to the right of text content."
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
      "text": "Links",
      "href": "../links/"
    }
  ]
}
---


<cdr-doc-table-of-contents-shell tab-name="Overview">

# Overview
## Primary

Use primary buttons for actions to complete a task or to move forward in a process such as &quot;Add to cart.&quot; There is only one primary action per major page section.

<cdr-doc-example-code-pair repository-href="/src/components/button" :sandbox-data="$page.frontmatter.sandboxData" >

```html
  <cdr-button>Add to cart</cdr-button>
  <cdr-button disabled>Add to cart</cdr-button>
```

</cdr-doc-example-code-pair>



## Secondary

Use secondary buttons for all actions that do not move the user to the next step or require additional user actions such as &quot;Add to wish list&quot; or &quot;Find a campout near you.&quot;

<cdr-doc-example-code-pair repository-href="/src/components/button" :sandbox-data="$page.frontmatter.sandboxData" >

```html
  <cdr-button modifier="secondary">Add to wish list</cdr-button>
  <cdr-button modifier="secondary" disabled>Add to wish list</cdr-button>
```

</cdr-doc-example-code-pair>

## Alternative Styles

Use `sale` or `dark` for alternative button styling.

<cdr-doc-example-code-pair repository-href="/src/components/button" :sandbox-data="$page.frontmatter.sandboxData" >

```html
  <cdr-button modifier="sale">Buy now</cdr-button>
  <cdr-button modifier="sale" disabled>Buy now</cdr-button>
  <cdr-button modifier="dark">Add to wish list</cdr-button>
  <cdr-button modifier="dark" disabled>Add to wish list</cdr-button>
```

</cdr-doc-example-code-pair>

## Link Style

Use `link` modifier to render a button that is styled like a CdrLink. This can be used to create links with the padding and sizing options of a button. Can be used with the `tag` property set to the default `"button"` or `"a"`. For rendering a link inline with text, use [CdrLink](../links). To render a button that behaves like a link, use a [CdrButton with link tag](#button-with-link-tag).

<cdr-doc-example-code-pair repository-href="/src/components/button" :sandbox-data="$page.frontmatter.sandboxData" >

```html
  <cdr-button modifier="link">Buy now</cdr-button>
  <br/>
  <cdr-button modifier="link" tag="a" href="#">View cart</cdr-button>
```

</cdr-doc-example-code-pair>

## Text and Icon

Pair an icon with text to improve recognition about an object or action.

<cdr-doc-example-code-pair repository-href="/src/components/button" :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrButton, IconPlayStroke'})" >

```html
  <div>
    <cdr-button
      modifier="secondary"
    >
      <template #icon-left>
        <icon-play-stroke
          inherit-color
        />
      </template>
      Play video
    </cdr-button>
    <cdr-button
      modifier="secondary"
      disabled
    >
      <template #icon-left>
        <icon-play-stroke
          inherit-color
        />
      </template>
      Play video
    </cdr-button>
  </div>
```

</cdr-doc-example-code-pair>

## Icon Only

Use icons to visually communicate an object or action in a limited space. Include alternative text to describe what the button does.

<cdr-doc-example-code-pair repository-href="/src/components/button" :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrButton, IconQuestionFill'})" >

```html
  <div>
    <cdr-button
      :icon-only="true"
      aria-label="More information about icon"
    >
      <template #icon>
        <icon-question-fill inherit-color />
      </template>
    </cdr-button>
  </div>
```

</cdr-doc-example-code-pair>

## Icon Only With Background

Use `with-background` property in conjunction with the `icon-only` property to make icon buttons more identifiable. Include alternative text to describe what the button does.

<cdr-doc-example-code-pair repository-href="/src/components/button" :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrButton, IconAccountProfile'})" >

```html
  <div>
    <cdr-button
      :icon-only="true"
      :with-background="true"
      aria-label="More information about icon"
    >
      <template #icon>
        <icon-account-profile />
      </template>
    </cdr-button>
  </div>
```

</cdr-doc-example-code-pair>

## Stateful Button

For buttons that trigger asynchronous actions, use the `click` event and dynamic properties in order to change the label or state of a button.

<cdr-doc-example-code-pair repository-href="/src/components/button" :sandbox-data="$page.frontmatter.sandboxData" :model="{isLoading: false}">

```html
<cdr-button :disabled="isLoading" @click="isLoading = true">
  {{isLoading ? 'Loading...' : 'Add to cart'}}
</cdr-button>
```

</cdr-doc-example-code-pair>


## Full Width

Displays at full width of its container.

<cdr-doc-example-code-pair repository-href="/src/components/button" :sandbox-data="$page.frontmatter.sandboxData" >

```html
    <cdr-button
      :full-width="true"
    >Full width</cdr-button>
    <cdr-button
      full-width="@md"
    >Full Width @md</cdr-button>
```

</cdr-doc-example-code-pair>


## Button With Link Tag

For a CdrButton that looks like a button but behaves like a link, set `tag="a"` and pass an `href`.

<cdr-doc-example-code-pair repository-href="/src/components/button" :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrButton, IconCaretRight'})" >

```html
  <cdr-button
    tag="a"
    href="#"
  >
    Call To Action
  </cdr-button>
```

</cdr-doc-example-code-pair>

## Sizing

Change the button size based on where the button is used. The default size is medium.

<cdr-doc-example-code-pair repository-href="/src/components/button" :sandbox-data="$page.frontmatter.sandboxData" >

```html
    <div>
      <cdr-button size="small">Add to cart</cdr-button>
      <cdr-button>Add to cart</cdr-button>
      <cdr-button size="large">Add to cart</cdr-button>
    </div>
```

</cdr-doc-example-code-pair>

## Accessibility
Many WCAG requirements are contextual to their implementation.
To ensure that usage of this component complies with accessibility guidelines you are responsible for the following:

- For icon-only buttons, provide `aria-label` text that describes the button's action
- If activating the button does not dismiss the current context, then focus typically remains on the button after activation, e.g., an Apply or Recalculate button.
- If a description of the button's function is present, the button element has `aria-describedby` set to the `ID` of the element containing the description.
- If the button is a toggle button, it has an `aria-pressed` state. When the button is toggled on, the value of this state is true, and when toggled off, the state is false.
- If the button action indicates a context change, such as move to next step in a wizard or add another search criteria, then it is often appropriate to move focus to the starting point for that action.
- Apply keyboard interaction patterns as described on [REI universal design and accessibility: Buttons](https://confluence.rei.com/display/accessibility/Buttons)
- Clearly and concisely describe the button's action or destination when the button is clicked or tapped:
  - For example, if the button text is "Shop now", the `aria-label` might read: "Shop our &lt;specific advertising category&gt; now"
- Avoid using "click here" or "start here" for buttons. If screen space for text is minimal:
  - Provide text that can be read by screen readers
  - Use an inline element for hidden text with the `cdr-sr-only` class
  ```vue
  <cdr-cta>
    Start here <span class="cdr-sr-only">for help finding the proper sleeping bag</span>
  </cdr-cta>
  ```
- For buttons with the `tag` set to `"a"`, always providing an `href` attribute. Empty `href` attributes are not considered true links
<br />

This component has no specific WCAG compliance attributes built into the control. It is possibile to define this component as a link or button:

- Select the semantically-correct element, which will ensure that assistive technologies have correct instructions for how to interact with the component
- Use the **CdrLink** component to make a button that looks like a link
- Do not use `div` or `input` elements
- Do not add `role="button"` to the **CdrButton** component

<hr>

# Guidelines

## Use When

- Triggering an action  
- Enabling a “final” action  
- Progressing or regressing a user through a step in a flow
- Submitting requested information
- Confirming the completion of a flow or cancelling out of it
- Use `tag="a"` and `href` when navigating to another page on the site

## Don't Use When

- Taking users to a different part within the same page. Instead, use [Links](../links/)

## The Basics

Three button sizes are available: Small, Medium, and Large. Medium is the default size.
<br />
Generally, buttons should be sized based on their content and used to convey the importance of actions.
  - Use Large buttons for primary page actions
  - Use Small buttons for supplemental user actions
  - For Mobile screens using XS grid, use Large buttons set to full width

<br />

When stacking buttons vertically:
  - Align left borders
  - Display all with the same width
  - Separate each by stack-1-x spacing
  <cdr-img class="cdr-doc-article-img" :src="$withBase(`/buttons/spec__button__vertical_spacing_16-4.png`)"/>

<br />

When arranging buttons horizontally:
  - Align top borders
  - Display all with the same height
  - Separate each by standard inline-1-x spacing
  <cdr-img class="cdr-doc-article-img" :src="$withBase(`/buttons/spec__button__horizontal_spacing_16-9.png`)"/>

<br />

### Do / Don't

When grouping buttons, match button sizes either horizontally or vertically.

<do-dont :examples="$page.frontmatter.vertical" />

<br />

<do-dont :examples="$page.frontmatter.horizontal" />

<br />


## Content

  - Clearly and concisely label with 1–3 words and fewer than 20 characters, including spaces
  - Start with a verb, if possible. Labels must be action-oriented and set expectations for what the user will see next
  - Never repeat the context of a label when the context is already clear. For example, for a &quot;Save&quot; button, do not expand to &quot;Save Account Information&quot;
  - Use sentence case. Do not use all caps, title caps, or all lowercase

  <br />

To construct consistent and universal Calls to Action across the site:

- If leading to a Brand, Category, or Activity Landing page, UI text for Call to Action should be **Explore Brand/Category/Activity Name**
- If leading to a Product Detail page, UI text for Call to Action should be **Shop product name**
- If leading to a Collection or search result, UI text for Call to Action should be **Shop all Brand/Category/Activity Name**

### Do / Don't

  <do-dont :examples="$page.frontmatter.label" />

  <do-dont :examples="$page.frontmatter.case" />

  <do-dont :examples="$page.frontmatter.noun" />

## Behavior

### Choosing a Button or a Link

When making decisions about whether to use a link or a button, consider the following:

| **Links**                                                                                           | **Buttons**                                                                          |
| --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Answers the question, "Where can I go"                                                              | Answers the question, "What can I do"                                                |
| Search engine crawlers can follow anchors for links (`<a>`)                                 | Search engine crawlers **cannot** follow links that are submitted by input or button |
| Default keyboard behavior is triggered using the **Enter** key                                      | Default keyboard behavior is triggered using the **Space** or **Enter** key          |
| **Cannot be disabled** like buttons but can be made inert with tabindex="-1" and aria-hidden="true" | Can be disabled with disabled attribute                                              |

<br />

Apply the following use cases when deciding when to use links as anchors or buttons:

| **Links**                                                                                           | **Buttons**                                                                          |
| --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Navigating user to a new page or view                                                               | Toggling a display to full screen                                                    |
| Changing the URL                                                                                    | Opening a modal window                                                               |
| Causing a browser redraw or refresh                                                                    | Triggering a popup menu                                                              |
| Supporting internal page jumps                                                                      | Can be disabled with disabled attribute                                              |


## Resources

  - WebAIM: [Keyboard Accessibility](https://webaim.org/techniques/keyboard/)
  - WebAIM [WCAG 2.0 Checklist](https://webaim.org/standards/wcag/checklist)

<hr>

# API

## Props

This component will bind any attribute that a [native HTML button element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) accepts.

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

## Slots

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />

## Events

<cdr-doc-api type="event" :api-data="$page.frontmatter.versions[0].components[0].api.events" />


## Component Variables

<cdr-doc-comp-vars name="CdrButton"/>

</cdr-doc-table-of-contents-shell>
