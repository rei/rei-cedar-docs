---
{
  "title": "Radio Buttons",
  "layout_type": "LayoutComponent",
  "summary": "Permits user to select only one option from a list of two or more",
  "title_metadata": "Radios, CdrRadio",
  "see_also": [
      {
      "text": 'See Also'
    },
    {
      "text": 'Checkboxes',
      "href": '../checkboxes/'
    }
  ],
  "case": [
    {
      "type": "do",
      "image": "radio/radio_case_do_16-9.png",
      "ratio": "16-9",
      "alt": "Radio buttons proper casing",
      "caption": "use sentence case, with only proper nouns capitalized."
    },
    {
      "type": "dont",
      "image": "radio/radio_case_dont_16-9.png",
      "ratio": "16-9",
      "alt": "Radio buttons with incorrect casing",
      "caption": "use title caps for labels."
    }
  ],
  "label": [
    {
      "type": "do",
      "image": "radio/radio_label_do_16-9.png",
      "ratio": "16-9",
      "alt": "radio buttons with brief labels",
      "caption": "make labels brief."
    },
    {
      "type": "dont",
      "image": "radio/radio_label_dont_16-9.png",
      "ratio": "16-9",
      "alt": "radio buttons with long labels",
      "caption": "put too much text in the label."
    }
  ],
  "fragment": [
    {
      "type": "do",
      "image": "radio/radio_fragment_do_16-9.png",
      "ratio": "16-9",
      "alt": "radio buttons with no ending punctuation",
      "caption": "write labels as sentence fragments with no ending punctuation."
    },
    {
      "type": "dont",
      "image": "radio/radio_fragment_dont_16-9.png",
      "ratio": "16-9",
      "alt": "radio buttons with ending punctuation",
      "caption": "add terminal punctuation at the end of a label."
    }
  ],
  "sandboxData": {
    "components": "CdrRadio"
  },
  "versions": [
    {
      "components": [
        {
          "name": "CdrRadio",
          "api": {
            "props": [
              {
                "name": "labelClass",
                "type": "string",
                "default": "N/A",
                "description": "Adds CSS class to the label for custom styles."
              },
              {
                "name": "inputClass",
                "type": "string",
                "default": "N/A",
                "description": "Adds CSS class to the input for custom styles."
              },
              {
                "name": "contentClass",
                "type": "string",
                "default": "N/A",
                "description": "Adds CSS class to the slot wrapper for custom styles."
              },
              {
                "name": "name",
                "type": "string",
                "default": "N/A",
                "description": "Sets the name of the radio button. Required."
              },
              {
                "name": "value",
                "type": "string, number, boolean, object, array, symbol, function",
                "default": "N/A",
                "description": "Sets the value of the radio button. Required."
              },
              {
                "name": "modifier",
                "type": "string",
                "default": "N/A",
                "description": "Modifies the style variants for this component. Possible values: {  ‘compact’  |  'hide-figure'  }"
              }
            ],
            "slots": [
              {
                "name": "default",
                "description": "Sets the innerHTML for CdrRadio. This is the readable text for the <label> element."
              }
            ],
            "events": [
              {
                "name": "change",
                "arguments": "value",
                "description": "$emit event fired on radio selection."
              }
            ]
          }
        }
      ],
      "version": "1.0.0"
    }
  ]
}
---

<cdr-doc-tabs>
<template slot="Overview">
<cdr-doc-table-of-contents-shell>

## Default
Default and standard spacing for radio buttons.

<cdr-doc-example-code-pair repository-href="/src/components/radio" :sandbox-data="$page.frontmatter.sandboxData" :backgroundToggle="false" :codeMaxHeight="false" :model="{ex: ''}">

```html
<div>
<cdr-radio
  name="default-example"
  value="ex1"
  v-model="ex"
>Default radio 1</cdr-radio>
<cdr-radio
  name="default-example"
  value="ex2"
  v-model="ex"
>Default radio 2</cdr-radio>
<cdr-radio
  name="default-example"
  :value="{val:'ex3'}"
  v-model="ex"
  disabled
>Default radio 3</cdr-radio>
<p>selected: {{ex}}</p>
</div>
```

</cdr-doc-example-code-pair>

## Compact

Compact spacing for radio buttons.

<cdr-doc-example-code-pair repository-href="/src/components/radio" :sandbox-data="$page.frontmatter.sandboxData" :backgroundToggle="false" :codeMaxHeight="false" :model="{ex: ''}">

```html
<div>
<cdr-radio
  modifier="compact"
  name="compact-example"
  value="ex1"
  v-model="ex"
>Compact radio 1</cdr-radio>
<cdr-radio
  modifier="compact"
  name="compact-example"
  value="ex2"
  v-model="ex"
>Compact radio 2</cdr-radio>
<cdr-radio
  modifier="compact"
  name="compact-example"
  :value="{val:'ex3'}"
  v-model="ex"
  disabled
>Compact radio 3</cdr-radio>
<p>selected: {{ex}}</p>
</div>
```

</cdr-doc-example-code-pair>

## Custom

Custom styles for radio buttons.

<cdr-doc-example-code-pair repository-href="/src/components/radio" :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {styleTag: '.no-box:checked ~ .no-box__content {color: green;}'})" :backgroundToggle="false" :codeMaxHeight="false" class="custom-radio-example" :model="{ex: ''}">

```html
<div>

<cdr-radio
  name="custom-example"
  value="ex1"
  v-model="ex"
  modifier="hide-figure"
  input-class="no-box"
  content-class="no-box__content"
>Custom radio 1</cdr-radio>
<cdr-radio
  name="custom-example"
  value="ex2"
  v-model="ex"
  modifier="hide-figure"
  input-class="no-box"
  content-class="no-box__content"
>Custom radio 2</cdr-radio>
<cdr-radio
  name="custom-example"
  :value="{val:'ex3'}"
  v-model="ex"
  modifier="hide-figure"
  input-class="no-box"
  content-class="no-box__content"
  disabled
>Custom radio 3</cdr-radio>
<p>selected: {{ex}}</p>
</div>
```

</cdr-doc-example-code-pair>

## Accessibility

To ensure that usage of this component complies with accessibility guidelines:

- Each radio button must be focusable and keyboard accessible:
  - When radio button has focus, the **Space** key changes the selection
  - **Tab** key moves to next element in list 
- Fieldsets should be: 
  - Used when associating group of radio buttons
  - Identified or described as a group using a `<legend>` tag
- Avoid nested fieldsets
- Custom radio buttons maintain accessibility requirements. The radio button icon is only visually hidden and replaced with custom style 

<br/>

This component has compliance with WCAG guidelines by:

- Wrapping the input in a label element and label is automatically associated with it

<br/>

For more information, review techniques and failures for:
- [WCAG 2.0,  1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)
- [WCAG 2.0,  3.3.2 Labels and Instructions](https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html)


</cdr-doc-table-of-contents-shell>
</template>

<template slot="Guidelines">
<cdr-doc-table-of-contents-shell>

## Use When

- Selecting only 1 choice from a list is allowed
- Viewing all available options is needed
- Comparing between list of selections is desired


### Don’t Use When

- Selecting from a list when multiple choices are allowed. Instead, use [Checkboxes](../checkboxes/)
- Providing a single selectable option. Instead, use [Checkboxes](../checkboxes/) (stand-alone checkbox)

## Content
When using radio buttons in a list:
- Use a logical order, whether it’s alphabetical, numerical, or time-based
- Labels should have approximately equal length
- Clearly communicate the effect of selecting the option
- Provide a link or include a subtitle for more information. Don’t rely on tooltips to explain a radio button

<br/>

Radio button labels should:
- Start with a capital letter
- Use sentence case
- Avoid long labels
- Be written as sentence fragments
- No terminal punctuation

### Do/Don't

<do-dont :examples="$page.frontmatter.case" />

<do-dont :examples="$page.frontmatter.label" />

<do-dont :examples="$page.frontmatter.fragment" />

## Resources

- WebAIM: [Semantic Structure: Using Lists Correctly](https://webaim.org/techniques/semanticstructure/)

</cdr-doc-table-of-contents-shell>
</template>

<template slot="API">
<cdr-doc-table-of-contents-shell>

## Props

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props"/>

## Slots

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots"/>

## Events

<cdr-doc-api type="event" :api-data="$page.frontmatter.versions[0].components[0].api.events"/>

## Usage

The **CdrRadio** component requires `v-model` to track the value of selected radios.

### Modifiers

Following variants are available to the `cdr-radio` modifier attribute: 
| Value | Description            |
|:------|:-----------------------|
| 'compact'  | Sets the spacing for smaller screen sizes |
| 'hide-figure'  | Hides the radio button icon |

<br/>

Use the `hide-figure` modifier to hide the radio button itself, which leaves text label as the clickable element. Add appropriate custom styles to convey selected and unselected states.

```vue
<template>
  <cdr-radio
    v-model="model"
    name="model"
    value="model"
    modifier="hide-figure"
    input-class="no-box"
    content-class="no-box__content"
  >
    Add to cart
  </cdr-radio>
</template>
<style>
.no-box:checked ~ .no-box__content {
   color: green;

   &::after {
     content: '(checked)';
   }
 }
</style>
```

</cdr-doc-table-of-contents-shell>
</template>

</cdr-doc-tabs>
