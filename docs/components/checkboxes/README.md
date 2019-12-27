---
{
  "title": "Checkboxes",
  "layout_type": "LayoutComponent",
  "title_metadata": "CdrCheckbox",
  "summary": "Permits user to make one or more selections from a list",
  "see_also": [
    {
      "text": "See Also"
    },
    {
      "text": "Radio Buttons",
      "href": "../radio/"
    }
  ],
  "case": [
    {
      "type": "do",
      "image": "checkbox/checkbox_case_do_16-9.png",
      "ratio": "16-9",
      "alt": "Image showing proper checkbox sentence case.",
      "caption": "use sentence case, with only proper nouns capitalized."
    },
    {
      "type": "dont",
      "image": "checkbox/checkbox_case_dont_16-9.png",
      "ratio": "16-9",
      "alt": "Image showing improper title caps use.",
      "caption": "use title caps for labels."
    }
  ],
  "fragment": [
    {
      "type": "do",
      "image": "checkbox/checkbox_fragment_do_16-9.png",
      "ratio": "16-9",
      "alt": "Image showing proper checkbox label with no ending punctuation",
      "caption": "write labels as sentence fragments with no ending punctuation."
    },
    {
      "type": "dont",
      "image": "checkbox/checkbox_fragment_dont_16-9.png",
      "ratio": "16-9",
      "alt": "Image showing improper terminal punctuation.",
      "caption": "add terminal punctuation at the end of a label."
    }
  ],
  "label": [
    {
      "type": "do",
      "image": "checkbox/checkbox_label_do_16-9.png",
      "ratio": "16-9",
      "alt": "Image showing proper checkbox label with brief copy",
      "caption": "make labels brief."
    },
    {
      "type": "dont",
      "image": "checkbox/checkbox_label_dont_16-9.png",
      "ratio": "16-9",
      "alt": "Image showing a label with too much text",
      "caption": "put too much text in the label."
    }
  ],
  "positivecopy": [
    {
      "type": "do",
      "image": "checkbox/checkbox_positivecopy_do_16-9.png",
      "ratio": "16-9",
      "alt": "Image showing proper checkbox positive phrasing",
      "caption": "use positive phrasing for labels."
    },
    {
      "type": "dont",
      "image": "checkbox/checkbox_positivecopy_dont_16-9.png",
      "ratio": "16-9",
      "alt": "Image showing a label with negative phrasing",
      "caption": "use negative phrasing for labels."
    }
  ],
  "simplify": [
    {
      "type": "do",
      "image": "checkbox/checkbox_simplify_do_16-9.png",
      "ratio": "16-9",
      "alt": "Image showing proper simple checkbox usage",
      "caption": "use a single checkbox."
    },
    {
      "type": "dont",
      "image": "checkbox/checkbox_simplify_dont_16-9.png",
      "ratio": "16-9",
      "alt": "Image showing a radio button used when a checkbox is preferred",
      "caption": "use radio buttons or toggles for a simple toggle selection."
    }
  ],

  "breadcrumbs": [
    {
      "text": "Components/"
    }
  ],
  "sandboxData": {
    "components": "CdrCheckbox"
  },
  "versions": [
    {
      "components": [
        {
          "name": "CdrCheckbox",
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
                "name": "indeterminate",
                "type": "boolean",
                "default": "false",
                "description": "Shows checkbox in indeterminate state. This is a visual-only state with no logic for when to show it."
              },
              {
                "name": "trueValue",
                "type": "string, number, boolean, object, array, symbol, function",
                "default": "true",
                "description": "The value when checked."
              },
              {
                "name": "falseValue",
                "type": "string, number, boolean, object, array, symbol, function",
                "default": "false",
                "description": "The value when unchecked."
              },
              {
                "name": "customValue",
                "type": "string, number, boolean, object, array, symbol, function",
                "default": "false",
                "description": "The value when used in a checkbox group. Replaces `trueValue` and `falseValue`."
              },
              {
                "name": "modifier",
                "type": "string",
                "default": "N/A",
                "description": "Modifies the style variant for this component.  Possible values: { ‘hide-figure’ }",
                "alert": {
                  "type": "deprecated",
                  "description": "The `compact` modifier is deprecated in the winter 2019 release and will be removed. Use size=\"small\" instead"
                },
              },
              {
                "name": "size",
                "type": "string",
                "default": "'medium'",
                "description": "Sets the checkbox size; values can target responsive breakpoints. Breakpoint values are: xs, sm, md, and lg. Examples: { 'small' | 'medium' | 'large' | 'large@sm' }",
              },
            ],
            "slots": [
              {
                "name": "default",
                "description": "Sets the innerHTML for CdrCheckbox. This is the readable text for the <label> element."
              }
            ],
            "events": [
              {
                "name": "change",
                "arguments": "newValue, event",
                "description": "$emit event fired on check/uncheck."
              }
            ],
          }
        }
      ],
      "version": "1.0.0"
    }
  ]
}

---

<cdr-doc-table-of-contents-shell >

# Overview

## Default

Default and standard spacing for checkboxes.

<cdr-doc-example-code-pair repository-href="/src/components/checkbox" :sandbox-data="$page.frontmatter.sandboxData" :model="{ex1: true, ex2: false, ex3: false}" >

```html
<div>
  <cdr-checkbox v-model="ex1">Default checkbox 1</cdr-checkbox>
  <cdr-checkbox v-model="ex2">Default checkbox 2</cdr-checkbox>
  <cdr-checkbox v-model="ex3" disabled>Default checkbox 3</cdr-checkbox>
</div>
```

</cdr-doc-example-code-pair>

## Size

Different sizing for checkboxes.

<cdr-doc-example-code-pair repository-href="/src/components/checkbox" :sandbox-data="$page.frontmatter.sandboxData" :model="{ex1: true, ex2: false, ex3: false}">

```html
<div>
  <cdr-checkbox v-model="ex1" size="small">Small checkbox</cdr-checkbox>
  <cdr-checkbox v-model="ex2" size="medium">Medium checkbox</cdr-checkbox>
  <cdr-checkbox v-model="ex3" disabled size="large">Large checkbox</cdr-checkbox>
</div>
```

</cdr-doc-example-code-pair>

## Indeterminate

Displays status for checkbox group by indicating that some of the sub-selections in a list are selected. Provides user with ability to select or unselect all items in the list’s sub-group.

<cdr-doc-example-code-pair repository-href="/src/components/checkbox" :sandbox-data="$page.frontmatter.sandboxData" :model="{ex1: false}">

```html
<div>
  <cdr-checkbox v-model="ex1" indeterminate>Indeterminate</cdr-checkbox>
</div>
```

</cdr-doc-example-code-pair>

## Custom

Custom styles for checkboxes.

<cdr-doc-example-code-pair repository-href="/src/components/checkbox" :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {styleTag: '.no-box:checked ~ .no-box__content {color: green;}'})" class="custom-checkbox-example" :model="{ex1: true, ex2: false, ex3: false}">

```html
<div>
  <cdr-checkbox
    v-model="ex1"
    modifier="hide-figure"
    input-class="no-box"
    content-class="no-box__content">Custom checkbox 1</cdr-checkbox>
  <cdr-checkbox
    v-model="ex2"
    modifier="hide-figure"
    input-class="no-box"
    content-class="no-box__content">Custom checkbox 2</cdr-checkbox>
  <cdr-checkbox
    v-model="ex3"
    modifier="hide-figure"
    input-class="no-box"
    content-class="no-box__content"
    disabled>Custom checkbox 3</cdr-checkbox>
</div>
```

</cdr-doc-example-code-pair>

## Accessibility

To ensure that usage of this component complies with accessibility guidelines:
- Each checkbox must be focusable and keyboard accessible:
  - When the checkbox has focus, the **Space** key changes the selection
  - **Tab** key moves to next element in list
- Fieldsets (or grouped checkboxes) should be:
  - Used when associating group of checkboxes
  - Identified or described as a group using a `<legend>` tag
- Avoid nested fieldsets
- Single checkboxes:
  - May be interchangeable with a toggle
  - Write labels to be self-explanatory
- Custom checkboxes maintain accessibility requirements. The checkbox icon is only visually hidden and replaced with custom style

<br/>

This component has compliance with WCAG guidelines by:

- Wrapping the input in a label element and label is automatically associated with it

<br/>

For more information, review techniques and failures for:
- [WCAG 2.0,  1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)
- [WCAG 2.0,  3.3.2 Labels and Instructions](https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html)

<hr>

# Guidelines

## Use When

- Selecting one or multiple choices from a list
- Selecting options from a list that contains sub-selections
- Choosing &quot;yes&quot; or &quot;no&quot; when there is a single option (stand-alone checkbox)
- Viewing all available options is needed
- Comparing between a list of selections is desired

## Don't Use When

- Selecting from a list when only one choice is allowed. Instead, use [Radio Buttons](../radio/)

## Content

When using checkboxes in a list:

 - Use a logical order,  whether it’s alphabetical, numerical, or time-based
 - Labels should have approximately equal length
 - Clearly communicate the effect of selecting the option
 - Provide a link or include a subtitle for more information. Don’t rely on tooltips to explain a checkbox

<br/>

Checkbox labels should:

 - Start with a capital letter
 - Use sentence case
 - Use positive phrasing; so the label describes the selected state
 - Avoid long labels
 - Be written as sentence fragments
 - No terminal punctuation

<br/>

### Do/Don't

<do-dont :examples="$page.frontmatter.case" />

<do-dont :examples="$page.frontmatter.label" />

<do-dont :examples="$page.frontmatter.positivecopy" />

<do-dont :examples="$page.frontmatter.fragment" />

## Behavior

Checkboxes work independently from each other:

 - Selecting one checkbox shouldn’t change the selection status of another checkbox in the list
 - When parent checkbox is used for a bulk selection action, all child checkbox items will be selected or not selected
 - Use a standalone checkbox for a simple toggle selection. Don’t use radio buttons or toggles

<br/>

<do-dont :examples="$page.frontmatter.simplify" />

## Resources

 - WebAIM: [Semantic Structure: Using Lists Correctly](https://webaim.org/techniques/semanticstructure/)

<hr>

# API

## Props

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />


## Slots

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />

## Events

<cdr-doc-api type="event" :api-data="$page.frontmatter.versions[0].components[0].api.events" />

## Usage

The **CdrCheckbox** component requires  `v-model`  to track  `:checked`  values.

This example uses  `true-value`  and  `false-value`  props to change what’s saved to the model.

```vue
<template>
  <cdr-checkbox
    v-model="model"
    true-value="checked"
    false-value="unchecked"
  >
    Option 1
  </cdr-checkbox>
</template>
```

Use  `custom-value`  with a shared model to create a checkbox group that will track multiple checkbox values.

```vue
<template>
  <cdr-checkbox
    v-model="groupModel"
    :custom-value="{ value: ‘D’ }"
  >
    Option 1
  </cdr-checkbox>
  <cdr-checkbox
    v-model="groupModel"
    :custom-value="[ 9, 10 ]"
  >
    Option 2
  </cdr-checkbox>
</template>
```

If both values are checked the model would be `[  { value: ‘D’ }, [ 9, 10 ]  ]`. Unchecking either checkbox would remove its value from the model array.

Default checkbox to checked/unchecked state by setting the model in Javascript.

```vue
<template>
  <cdr-checkbox
    v-model="groupModel"
    :custom-value="{ value: ‘D’ }"
  >
    Option 1
  </cdr-checkbox>
  ...
</template>
<script>
  ...
  data() {
    return {
      groupModel: [ { value: ‘D’ } ],
    };
  },
}
</script>
```

Set the `indeterminate` prop to `true` to generate an indeterminate checkbox, which looks different than the default. This is a visual styling only; it does not include any of the functional aspects of an indeterminate checkbox.

```vue
<template>
  <cdr-checkbox
    v-model="groupModel"
    :indeterminate="true"
  >
    Option 1
  </cdr-checkbox>
  ...
</template>
```

### Modifiers

Following variants are available to the `cdr-checkbox` modifier attribute:
| Value | Description            |
|:------|:-----------------------|
| 'hide-figure'  | Hides the checkbox icon |

<br/>

Use the `hide-figure` modifier to hide the checkbox itself, which leaves the text label as the clickable element. Add appropriate custom styles to convey selected and unselected states.

```vue
<template>
  <cdr-checkbox
    v-model="model"
    name="model"
    value="model"
    modifier="hide-figure"
    input-class="no-box"
    content-class="no-box__content"
  >
    Add to cart
  </cdr-checkbox>
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
