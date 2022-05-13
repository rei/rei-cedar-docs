---
{
  "title": "Inputs",
  "layout_type": "LayoutComponent",
  "summary": "Allows a user to enter data, edit data and search",
  "title_metadata": "Text field, CdrInput, cdr-input",
  "component_location": "https://github.com/rei/rei-cedar/tree/next/src/components/input",
  "length": [
    {
      "type": "do",
      "image": "input/Input__Length_Do__16-9.png",
      "ratio": "16-9",
      "alt": "Input with width limited.",
      "caption": "limit the width of the input field."
    },
    {
      "type": "dont",
      "image": "input/Input__Length_Dont__16-9.png",
      "ratio": "16-9",
      "alt": "Input with too much width.",
      "caption": "make the input field wider than approximately ⅓ of the information being entered."
    }
  ],
  "label": [
    {
      "type": "do",
      "image": "input/Input__Label_Do__16-9.png",
      "ratio": "16-9",
      "alt": "Input with proper label concisely describing what needs to be entered.",
      "caption": "use concise and meaningful labels."
    },
    {
      "type": "dont",
      "image": "input/Input__Label_Dont__16-9.png",
      "ratio": "16-9",
      "alt": "Input with a label that's too long and includes help text.",
      "caption": "use instructional or help text for the label."
    }
  ],
  "case": [
    {
      "type": "do",
      "image": "input/Input__Case_Do__16-9.png",
      "ratio": "16-9",
      "alt": "Label with proper use of sentence case.",
      "caption": "use sentence case for labels."
    },
    {
      "type": "dont",
      "image": "input/Input__Case_Dont__16-9.png",
      "ratio": "16-9",
      "alt": "Label with incorrect use of all caps",
      "caption": "use all caps for labels."
    }
  ],
  "punctuation": [
    {
      "type": "do",
      "image": "input/Input__Punctuation_Do__16-9.png",
      "ratio": "16-9",
      "alt": "Label without terminal punctuation.",
      "caption": "remove unnecessary terminal punctuation such as semicolons, colons or periods."
    },
    {
      "type": "dont",
      "image": "input/Input__Punctuation_Dont__16-9.png",
      "ratio": "16-9",
      "alt": "Label with an incorrect use of a colon as terminal punctuation.",
      "caption": "use colons after labels."
    }
  ],
  "placeholder": [
    {
      "type": "do",
      "image": "input/Input__Placeholder_Do__16-9.png",
      "ratio": "16-9",
      "alt": "Proper placeholder text usage to provide extra help.",
      "caption": "use placeholder text when providing extra help, so user understands what to enter."
    },
    {
      "type": "dont",
      "image": "input/Input__Placeholder_Dont__16-9.png",
      "ratio": "16-9",
      "alt": "Placeholder text with too much information.",
      "caption": "use placeholder text as an alternative to a label."
    }
  ],
  "sizes": [
    {
      "type": "do",
      "image": "input/Input__Sizes_Do__4-3.png",
      "ratio": "4-3",
      "alt": "Two equally sized input fields as a part of a form.",
      "caption": "use consistent sizes for components on a single form."
    },
    {
      "type": "dont",
      "image": "input/Input__Sizes_Dont__4-3.png",
      "ratio": "4-3",
      "alt": "Unequally-sized input and button elements in a form.",
      "caption": "mix sizes for components on a single form."
    }
  ],
  "sandboxData": {
    "components": "CdrInput"
  },
  "versions": [
    {
      "components": [
        {
          "name": "Inputs",
          "api": {
            "props": [
              {
                "name": "id",
                "type": "string",
                "default": "auto-generated",
                "description": "Requires unique ID that is mapped to the label ‘for’ attribute.  If this value is not set, it will be auto-generated."
              },
              {
                "name": "type",
                "type": "string",
                "default": "text",
                "description": "Supports HTML5 <input> types for text, email, number, password, search, and URL."
              },
              {
                "name": "label",
                "type": "string",
                "default": "N/A",
                "description": "Sets the text value for the input label.  Required for a11y compliance.  Use ‘hideLabel’ if the label display is not desired. Required."
              },
              {
                "name": "hideLabel",
                "type": "boolean",
                "default": "false",
                "description": "Visually hides the label element, but leaves it available to screen readers for a11y compliance."
              },
              {
                "name": "rows",
                "type": "number",
                "default": "null",
                "description": "Sets the number of rows for the input field and converts input field to textarea if the value of the ‘rows’ prop is greater than 1."
              },
              {
                "name": "disabled",
                "type": "boolean",
                "default": "false",
                "description": "Sets the disabled state for the input field and label styling. Also, restricts user input."
              },
              {
                "name": "numeric",
                "type": "boolean",
                "default": "false",
                "description": "Sets default attributes for an input that should launch a numeric keyboard but is not strictly a 'number' (credit card, security code, postal code, etc.). Should be used in conjunction with the default text type input. An `input` listener can be used to fully restrict input values to numerical characters only"
              },
              {
                "name": "required",
                "type": "boolean",
                "default": "false",
                "description": "Sets aria-required on the input field and displays an asterisk next to the input label."
              },
              {
                "name": "optional",
                "type": "boolean",
                "default": "false",
                "description": "Displays '(optional)' text next to the input label."
              },
              {
                "name": "error",
                "type": "boolean",
                "default": "false",
                "description": "Sets the input to an error state, displays the `error` slot if one is present."
              },
              {
                "name": "errorRole",
                "type": "string",
                "default": "status",
                "description": "Sets the `role` attribute for the embedded error state messaging."
              },
              {
                "name": "background",
                "type": "string",
                "default": "primary",
                "description": "Set which background color the input is being rendered on. Adjusts styling to ensure accessibility. Possible options are: {  ‘primary’  |  ‘secondary’  }."
              },
              {
                "name": "size",
                "type": "string",
                "default": "medium",
                "description": "Sets the input field size. Possible sizes are: {  ‘medium’  |  ‘large’  }. Also works with responsive breakpoints. Breakpoint values are: xs, sm, md, and lg. Examples: { 'small' | 'medium' | 'large' | 'large@sm' }"
              }
            ],
            "slots": [
              {
                "name": "error",
                "description": "Error messaging text that is displayed when the `error` prop is true."
              },
              {
                "name": "info",
                "description": "Location for  information link or icon markup to the right above the input field."
              },
              {
                "name": "info-action",
                "description": "Location for icon button rendered to the right outside the input field"
              },
              {
                "name": "pre-icon",
                "description": "Location for icon markup to the left inside the input field."
              },
              {
                "name": "post-icon",
                "description": "Location for icon markup to the right inside the input field."
              },
              {
                "name": "helper-text-bottom",
                "description": "Location for helper or information text to the left below the input field."
              },
              {
                "name": "helper-text-top",
                "description": "Location for helper or information text to the left above the input field."
              }
            ],
            "events": [
              {
                "description": "All event listeners are passed through to the <input> element."
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


<cdr-doc-table-of-contents-shell>
# Overview

## Default (Medium)
Basic input field with label.


<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" :codeMaxHeight="false" :model="{defaultModel: ''}">

```html
<cdr-input
  v-model="defaultModel"
  :background="backgroundColor"
  label="Input label"
/>
<br>
<cdr-input
  v-model="defaultModel"
  :background="backgroundColor"
  label="Input label"
  disabled
/>
```

</cdr-doc-example-code-pair>

## Required

Basic input field with label and required tag.


<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" :codeMaxHeight="false" :model="{defaultModel: ''}">

```html
<cdr-input
  v-model="defaultModel"
  :background="backgroundColor"
  label="Input label"
  required
/>
```

</cdr-doc-example-code-pair>

## Optional

Basic input field with label and optional tag.


<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" :codeMaxHeight="false" :model="{defaultModel: ''}">

```html
<cdr-input
  v-model="defaultModel"
  :background="backgroundColor"
  label="Input label"
  optional
/>
```

</cdr-doc-example-code-pair>

## Sizing

Change size for the input field. Default size is medium.


<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" :codeMaxHeight="false" :model="{defaultModel: ''}">

```html
<cdr-input
  v-model="defaultModel"
  :background="backgroundColor"
  label="Input label"
/>
<br>
<cdr-input
  v-model="defaultModel"
  :background="backgroundColor"
  label="Input label"
  size="large"
/>
```

</cdr-doc-example-code-pair>

## Bare

Input field with no label.


<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" :codeMaxHeight="false" :model="{defaultModel: ''}">

```html
<cdr-input
  v-model="defaultModel"
  :background="backgroundColor"
  label="Input label"
  :hide-label="true"
/>
```

</cdr-doc-example-code-pair>

## Validation

Input field with validation that runs on `blur`. Error state is controlled with the `error` prop. Setting the `error` prop to a string will render that message with default error styling. The `error` slot can be used to fully customize the error message.


Error messaging will override helper text rendered in the bottom position.

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" :codeMaxHeight="false" :model="{defaultModel: '', modelError: false}" :methods="{validateInput() {this.modelError = this.defaultModel.length > 4}}">

```html
<cdr-input
  v-model="defaultModel"
  :background="backgroundColor"
  label="Input label"
  :error="modelError"
  aria-describedby="errorMessage"
  @blur="validateInput"
>
  <template #helper-text-bottom>
    Must be 4 or less characters
  </template>
  <template #error>
    <span id="errorMessage">Error: please enter 4 or less characters</span>
  </template >
</cdr-input>
```

</cdr-doc-example-code-pair>

## Multi-Line Input

Multiple line input field with expander control in lower right. Note that the pre-icon, post-icon, and info-action slots will not work properly in multi-line inputs.

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" :codeMaxHeight="false" :model="{defaultModel: ''}">

```html
<cdr-input
  v-model="defaultModel"
  :background="backgroundColor"
  label="Input label"
  :rows="4"
/>
```

</cdr-doc-example-code-pair>

## Numeric Input

Input field designed to accept numerical input. Launches the numerical keyboard on mobile devices. Does not use the `type="number"` attribute as that is intended for values that are strictly "numbers" such as quantities and not values that contain numerical characters such as credit cards, security codes, month/year values, etc. Can be used in conjunction with [input masking](#input-masking) to handle formatting values like credit cards, or an `input` listener can be used to format or restrict input.

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" :codeMaxHeight="false" :model="{defaultModel: ''}" :methods="{restrictInput() {this.defaultModel = this.defaultModel.replace(/\D/g, '')}}">

```html
<cdr-input
  v-model="defaultModel"
  :background="backgroundColor"
  label="Numerical input label"
  optional
  :numeric="true"
  @input="restrictInput"
/>
```

</cdr-doc-example-code-pair>

## Number/Quantity Input

Use the `type="number"` attribute only for input fields that reference a numerical value, for example a quantity of something. For input fields that are composed of numerical characters but are not strictly a number value, for example a credit card number or a month/year value, use a [numeric input](./#numeric-input) instead. An input field with `type="number"` set will only accept pure number values as input and rejects all other content, which can cause issues with a numeric identifier that has leading zeroes and may behave differently across browsers and devices.

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrInput, CdrButton, IconPlusLg, IconMinusLg'})" :codeMaxHeight="false" :model="{defaultModel: 0, decrementDisabled: true}" :methods="{decrement() {this.defaultModel--; if (this.defaultModel <= 0) {this.defaultModel = 0; this.decrementDisabled = true;}}, increment() {this.defaultModel++; this.decrementDisabled = false;}}">

```html
<div>
  <cdr-button :icon-only="true" :with-background="true" @click="decrement" aria-label="Decrement counter" :disabled="decrementDisabled">
    <icon-minus-lg/>
  </cdr-button>
  <cdr-input
    v-model="defaultModel"
    :background="backgroundColor"
    label="Number input"
    type="number"
    style="display: inline-block; width: 160px;"
  />
  <cdr-button :icon-only="true" :with-background="true" @click="increment" aria-label="Increment counter">
    <icon-plus-lg/>
  </cdr-button>
</div>
```

</cdr-doc-example-code-pair>

## Input with Link Text

Input field with link text on right. The link should describe it's relationship to the input field either through it's text content or an aria-label.


<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrInput, CdrLink'})" :codeMaxHeight="false" :model="{defaultModel: ''}">

```html
<cdr-input
  v-model="defaultModel"
  :background="backgroundColor"
  label="Input label"
>
  <template #info>
    <cdr-link href="#" modifier="standalone">Information link</cdr-link>
  </template>
</cdr-input>
```

</cdr-doc-example-code-pair>

## Input with Info Action

Input field with icon wrapped in an actionable element outside the input field on right. The actionable element should have an aria-label that explains it's relationship to the input field and what happens when you click on it.

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrInput, IconInformationFill, CdrLink'})" :codeMaxHeight="false" :model="{defaultModel: ''}">

```html
<cdr-input
  v-model="defaultModel"
  :background="backgroundColor"
  label="Input label"
>
  <template #info-action>
    <cdr-link
      tag="button"
      aria-label="An external link to more information">
      <icon-information-fill
        title ="More information"
        inherit-color
      />
    </cdr-link>
  </template>
</cdr-input>
```

</cdr-doc-example-code-pair>

## Input with Helper Text

Input field with helper or hint text below the input field. If the input is in an error state, the error messaging slot will override this text. Helper text should be used instead of the HTML `placeholder` attribute to provide additional information or context about the input.  Helper text is automatically linked to the input field through the `aria-describedby` attribute.

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" :codeMaxHeight="false" :model="{defaultModel: ''}">

```html
<cdr-input
  v-model="defaultModel"
  :background="backgroundColor"
  label="Input label"
>
  <template #helper-text-bottom>
    Helper or additional text
  </template>
</cdr-input>
```

</cdr-doc-example-code-pair>

## Input with Helper Text Above

Input field with helper or hint text rendered above the input field. Helper text should be used instead of the HTML `placeholder` attribute to provide additional information or context about the input. Helper text is automatically linked to the input field through the `aria-describedby` attribute.

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" :codeMaxHeight="false" :model="{defaultModel: ''}">

```html
<cdr-input
  v-model="defaultModel"
  :background="backgroundColor"
  label="Input label"
>
  <template #helper-text-top>
    Helper or additional text
  </template>
</cdr-input>
```

</cdr-doc-example-code-pair>

## Input with Icon Inserted Left

Input field with icon inserted into the input field on left. Icon is decorative and not intended for any action.

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrInput, IconLocationPinStroke'})" :codeMaxHeight="false"  :model="{defaultModel: ''}">

```html
<cdr-input
  v-model="defaultModel"
  :background="backgroundColor"
  label="Input label"
>
  <template #pre-icon>
    <icon-location-pin-stroke title="a decorative icon example inserted into the input field on its left side" inherit-color />
  </template>
</cdr-input>
```

</cdr-doc-example-code-pair>

## Input with Icon Inserted Right

Input field with icon inserted into the input field on right. Icon is decorative and not intended for any action.

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrInput, IconCreditCard'})" :codeMaxHeight="false"  :model="{defaultModel: ''}">

```html
<cdr-input
  v-model="defaultModel"
  :background="backgroundColor"
  label="Input label"
>
  <template #post-icon>
    <icon-credit-card
      title="a decorative icon example inserted into the input field on its right side"
      inherit-color
      class="cdr-button__icon"
    />
  </template>
</cdr-input>
```

</cdr-doc-example-code-pair>


## Input with Actions

Input field with icon buttons inserted to the right. Up to 2 buttons can be passed into the `post-icon` slot. Each button should have the `cdr-input__button` utility class applied to it. Each button should indicate it's function and relationship to the input field through either an `aria-label` or a tooltip.

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrInput, IconCreditCard, IconXLg, CdrTooltip, CdrButton'})" :codeMaxHeight="false"  :model="{defaultModel: ''}">

```html
<div>
  <cdr-input
    v-model="defaultModel"
    :background="backgroundColor"
    label="Input label"

  >
    <template #post-icon>
      <cdr-tooltip class="cdr-input__button" id="input-tooltip">
        <template #trigger>
          <cdr-button
            aria-label="Clear input text"
            :icon-only="true"
          >
            <icon-x-lg
              title="A large X"
              inherit-color
            />
          </cdr-button>
        </template>

        click me to clear this input!
      </cdr-tooltip>
      <cdr-button
        :icon-only="true"
        class="cdr-input__button"
        aria-label="More information about happens when you click on the icon"
      >
        <icon-credit-card
          title="icon representing a credit-card"
          inherit-color
        />
      </cdr-button>
    </template>
  </cdr-input>

  <cdr-input
    v-model="defaultModel"
    :background="backgroundColor"
    label="Large Input label"

    size="large"
  >
    <template #post-icon>
      <cdr-button
        :icon-only="true"
        size="large"
        class="cdr-input__button"
        aria-label="More information about happens when you click on the icon"
      >
        <icon-credit-card
          inherit-color
        />
      </cdr-button>
    </template>
  </cdr-input>
</div>
```

</cdr-doc-example-code-pair>

## Accessibility

This component has compliance with WCAG guidelines by:
- Requiring a value for the `label` field
- When hiding a label, the `aria-label` attribute is set to the `label` value

The HTML `placeholder` attribute should not be used as it creates an inaccessible experience when the placeholder content disappears as soon as the user begins typing into the input field. Instead the `helper-text-top`, `helper-text-bottom`, or `info` slots should be used to provide any additional information needed to complete the input.

Any additional actionable elements related to the input field, which may be external to the input component or passed in via the `info`, `info-action`, or `post-icon` slots, should indicate their function and relationship to the input field through their text content, and `aria-label`, or a tooltip.

<hr>

# Guidelines

## Use When

- Entering data with a wide variety of responses
- Searching for content

## Don't Use When

- Selecting from a specific set of options. Instead, use [Selects](../selects/)

## The Basics

- **Identifiable** - Input fields should indicate that users can enter information
- **Findable** - It should be easy to find an input field among other elements
- **Legible** - Input fields indicate their state such as enabled, focused, or disabled

### Options

- Define width using CSS styles
- Height options are medium or large.
- Ability to specify field type for text, email, number, password, search, and URL

### Multi-Line Input Fields

- Use when long free-form text is the desired user input such as a comment on a review or feedback form
- Overflow text wraps to a new line
- Scroll bar appears on right border when cursor reaches the bottom of the field
- Is defined by setting the number of rows for a recommended response length
- Resizing handle allows user to change the height of the input area
- Min and max limits are set by the product team for:
  - Max-height of text area
  - Maximum and minimum number of characters

## Content

### Labels

- Use concise and consistent labels that describes the meaning of the input field
- Limit labels to 1–3 words and fewer than 20 characters, including spaces
- Use sentence case. Do not use all caps, title caps, or all lowercase
- Don’t use colons after labels

### Helper Text

- Use helper text for hints or suggestions
- If help text is long or complex, use an icon or link above the input box
- Too much helper help text can make a form look and feel difficult to use

### Icon

- Use icons to trigger a popover for hints or suggestions
- Reference Cedar's [icon guidelines](../icon/#guidelines/) for additional information

### Link Text

- Use a link when moving or navigating to another page or to a different portion of the same page
- Use if navigating user to long or complex information
- Reference the [Links](../links/) component article for more information

### Do / Don't

<do-dont :examples="$page.frontmatter.length" />

<do-dont :examples="$page.frontmatter.label" />

<do-dont :examples="$page.frontmatter.case" />

<do-dont :examples="$page.frontmatter.punctuation" />
<!-- TODO: replace with DO use info/helper slots to describe desired input DON'T use placeholder attribute
<do-dont :examples="$page.frontmatter.placeholder" /> -->

<do-dont :examples="$page.frontmatter.sizes" />

## Behavior

### Default Input Attrs

CdrInput sets some default attributes to make it easier to construct consistent and accessible forms. These default attributes can be overridden by passing the same attribute to the CdrInput component.

For all CdrInput elements:
- `spellcheck` is set to `false`
- `autocorrect` is set to `'off'`
- `autocapitalize` is set to `'off'`

For CdrInput elements with `type="number"` set, the following attributes are enabled to help ensure that numeric inputs behave consistently across browsers and devices:
- `pattern` is set to `[0-9]*`, which restricts
- `novalidate` is set to `true`
- `inputmode` is set to `numeric`

Note that the `maxlength` attribute does not work in conjunction with numeric inputs as they are treated as numbers not strings. Instead, the length can be restricted using either an event listener or the min/max attributes:

```
<!-- restrict numeric input to 3 characters max with a listener -->
<cdr-input type="number" v-model="default" @input="() => {this.default = this.default.substring(0, 3)}"/>

<!-- restrict numeric input to 3 digit numbers -->
<cdr-input type="number" v-model="default" min="0" max="999"/>

```


### Input Masking

User input should be automatically formatted to make forms easier to comprehend and use, for example by adding parentheses and a dash to a phone number or inserting a space between every four digits of a credit card number.

Input masking has not been integrated directly into Cedar, however the CdrInput component implements the same API as a plain HTML text input element and can be used in conjunction with most input masking libraries.

We recommend using [v-mask](https://github.com/probil/v-mask) as a local directive in any components where you need input masking, as it provides a number of benefits:

- one of the smallest vue plugins for input masking
- can be loaded as a local directive directly in your component rather than as a global plugin that must be registered at the application level
- the API of `v-mask` is extremely simple and easy to understand
- if and when input masking support is built into CdrInput the `v-mask` API is what we will implement, making it easier for you to migrate in the future

```
<script>
import { CdrInput } from "@rei/cedar";
import { VueMaskDirective } from "v-mask";

export default {
  name: "VueDirectiveExample",
  components: {
    CdrInput,
  },
  directives: {
    mask: VueMaskDirective,
  },
  data() {
    return {
      defaultModel: '',
    }
  }
};
</script>
<template>
<cdr-input
  v-model="defaultModel"
  type="tel"
  v-mask="'(###) ###-####'"
>
</template>

```

### Inputs with Icons

- Icons inserted into input fields are decorative, not intended for any action

### Required Fields

- The default status of an input field is “optional”. Setting the `optional` prop on the input will render a text label indicating it is optional
- If the status is set to “required”, an asterisk will appear next to the input label with an aria-label indicating that the input is required and the input field will be marked `aria-required`


# API

<cdr-icon class="cdr-doc-code-snippet__action-icon" title="An outline caricature of a cat" use="#brand-github"/> View it on Github: 
<cdr-link :href="$page.frontmatter.component_location">{{$page.frontmatter.component_location}}</cdr-link>

## Props

This component will bind any attribute that a [native HTML input element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) accepts.

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props"/>

## Slots

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" :slots-getting-started-link="false" />

## Events

<cdr-doc-api type="event" :api-data="$page.frontmatter.versions[0].components[0].api.events" />


## Component Variables

<cdr-doc-comp-vars name="CdrInput">Note that the <a href="../component-variables/#CdrLabelStandalone">cdr-label-standalone mixins</a> should be used for assembling the label element. </cdr-doc-comp-vars>

</cdr-doc-table-of-contents-shell>
