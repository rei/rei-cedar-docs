---
{
  "title": "Inputs",
  "layout_type": "LayoutComponent",
  "summary": "Allows a user to enter and edit data. Also used for search",
  "title_metadata": "Text field, CdrInput, cdr-input",
  "length": [
    {
      "type": "do",
      "image": "input/Input__Length_Do__16-9.png",
      "ratio": "16-9",
      "alt": "input with width limited",
      "caption": "limit the width of the input field."
    },
    {
      "type": "dont",
      "image": "input/Input__Length_Dont__16-9.png",
      "ratio": "16-9",
      "alt": "input with too much width",
      "caption": "make the input field wider than approximately ⅓ of the information being entered."
    }
  ],
  "label": [
    {
      "type": "do",
      "image": "input/Input__Label_Do__16-9.png",
      "ratio": "16-9",
      "alt": "input with proper label",
      "caption": "use concise and meaningful labels."
    },
    {
      "type": "dont",
      "image": "input/Input__Label_Dont__16-9.png",
      "ratio": "16-9",
      "alt": "input with too long of label",
      "caption": "use instructional or help text for the label."
    }
  ],
  "case": [
    {
      "type": "do",
      "image": "input/Input__Case_Do__16-9.png",
      "ratio": "16-9",
      "alt": "label with proper case",
      "caption": "use sentence case for labels."
    },
    {
      "type": "dont",
      "image": "input/Input__Case_Dont__16-9.png",
      "ratio": "16-9",
      "alt": "label with all caps",
      "caption": "use all caps for labels."
    }
  ],
  "punctuation": [
    {
      "type": "do",
      "image": "input/Input__Punctuation_Do__16-9.png",
      "ratio": "16-9",
      "alt": "label without terminal punctuation",
      "caption": "remove unnecessary terminal punctuation such as semicolons, colons or periods."
    },
    {
      "type": "dont",
      "image": "input/Input__Punctuation_Dont__16-9.png",
      "ratio": "16-9",
      "alt": "label with colon after",
      "caption": "use colons after labels."
    }
  ],
  "placeholder": [
    {
      "type": "do",
      "image": "input/Input__Placeholder_Do__16-9.png",
      "ratio": "16-9",
      "alt": "proper placeholder text usage",
      "caption": "use placeholder text when providing extra help, so user understands what to enter."
    },
    {
      "type": "dont",
      "image": "input/Input__Placeholder_Dont__16-9.png",
      "ratio": "16-9",
      "alt": "placeholder text with too much information",
      "caption": "use placeholder text as an alternative to a label."
    }
  ],
  "required": [
    {
      "type": "do",
      "image": "input/Input__Required_Do__16-9.png",
      "ratio": "16-9",
      "alt": "Image showing 'Required' label next to field label",
      "caption": "position the required label next to input field label."
    },
    {
      "type": "dont",
      "image": "input/Input__Required_Dont__16-9.png",
      "ratio": "16-9",
      "alt": "Image showing asterisk to denote required label",
      "caption": "use an asterisk for a required field."
    }
  ],
  "sizes": [
    {
      "type": "do",
      "image": "input/Input__Sizes_Do__4-3.png",
      "ratio": "4-3",
      "alt": "Image showing two equally sized input fields as a part of a form",
      "caption": "use consistent sizes for components on a single form."
    },
    {
      "type": "dont",
      "image": "input/Input__Sizes_Dont__4-3.png",
      "ratio": "4-3",
      "alt": "Image showing missized input and button elements in a form",
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
                "description": "Hides the label element and sets the input ‘aria-label’ to the value of the ‘label’ prop for a11y compliance."
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
                "name": "required",
                "type": "boolean",
                "default": "false",
                "description": "Sets the field to required and displays an asterisk next to the input label."
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
                "name": "helper-text",
                "description": "Location for helper or information text to the left below the input field."
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


<cdr-doc-example-code-pair repository-href="/src/components/input" :sandbox-data="$page.frontmatter.sandboxData" :backgroundToggle="false" :codeMaxHeight="false" :model="{defaultModel: ''}">

```html
<cdr-input
  v-model="defaultModel"
  label="Input label"
  placeholder="Placeholder input"
/>
<br>
<cdr-input
  v-model="defaultModel"
  label="Input label"
  placeholder="Placeholder input"
  disabled
/>
```

</cdr-doc-example-code-pair>

## Required

Basic input field with label and required tag.


<cdr-doc-example-code-pair repository-href="/src/components/input" :sandbox-data="$page.frontmatter.sandboxData" :backgroundToggle="false" :codeMaxHeight="false" :model="{defaultModel: ''}">

```html
<cdr-input
  v-model="defaultModel"
  label="Input label"
  placeholder="Placeholder input"
  required
/>
```

</cdr-doc-example-code-pair>

## Optional

Basic input field with label and optional tag.


<cdr-doc-example-code-pair repository-href="/src/components/input" :sandbox-data="$page.frontmatter.sandboxData" :backgroundToggle="false" :codeMaxHeight="false" :model="{defaultModel: ''}">

```html
<cdr-input
  v-model="defaultModel"
  label="Input label"
  placeholder="Placeholder input"
  optional
/>
```

</cdr-doc-example-code-pair>

## Sizing

Change size for the input field. Default size is medium.


<cdr-doc-example-code-pair repository-href="/src/components/input" :sandbox-data="$page.frontmatter.sandboxData" :backgroundToggle="false" :codeMaxHeight="false" :model="{defaultModel: ''}">

```html
<cdr-input
  v-model="defaultModel"
  label="Input label"
  placeholder="Placeholder input"
/>
<br>
<cdr-input
  v-model="defaultModel"
  label="Input label"
  placeholder="Placeholder input"
  size="large"
/>
```

</cdr-doc-example-code-pair>

## Bare

Input field with no label.


<cdr-doc-example-code-pair repository-href="/src/components/input" :sandbox-data="$page.frontmatter.sandboxData" :backgroundToggle="false" :codeMaxHeight="false" :model="{defaultModel: ''}">

```html
<cdr-input
  v-model="defaultModel"
  label="Input label"
  placeholder="Placeholder input"
  hideLabel
/>
```

</cdr-doc-example-code-pair>

## Validation

Input field with validation that runs on `blur`. Error state is controlled with the `error` prop. Setting the `error` prop to a string will render that message with default error styling. The `error` slot can be used to fully customize the error message.


Error messaging will override helper text rendered in the bottom position.

<cdr-doc-example-code-pair repository-href="/src/components/input" :sandbox-data="$page.frontmatter.sandboxData" :backgroundToggle="false" :codeMaxHeight="false" :model="{defaultModel: '', modelError: false}" :methods="{validateInput() {this.modelError = this.defaultModel.length > 4 && 'Error: please enter 4 or less characters'}}">

```html
<cdr-input
  v-model="defaultModel"
  label="Input label"
  placeholder="Placeholder input"
  :error="modelError"
  @blur="validateInput"
>
  <template slot="helper-text">
    Must be 4 or less characters
  </template>
</cdr-input>
```

</cdr-doc-example-code-pair>

## Multi-Line Input

Multiple line input field with expander control in lower right. Note that the pre-icon, post-icon, and info-action slots will not work properly in multi-line inputs.

<cdr-doc-example-code-pair repository-href="/src/components/input" :sandbox-data="$page.frontmatter.sandboxData" :backgroundToggle="false" :codeMaxHeight="false" :model="{defaultModel: ''}">

```html
<cdr-input
  v-model="defaultModel"
  label="Input label"
  placeholder="Placeholder input"
  :rows="4"
/>
```

</cdr-doc-example-code-pair>

## Input with Link Text

Input field with link text on right.


<cdr-doc-example-code-pair repository-href="/src/components/input" :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrInput, CdrLink'})" :backgroundToggle="false" :codeMaxHeight="false" :model="{defaultModel: ''}">

```html
<cdr-input
  v-model="defaultModel"
  label="Input label"
  placeholder="Placeholder input"
>
  <template slot="info">
    <cdr-link href="#" modifier="standalone">Information link</cdr-link>
  </template>
</cdr-input>
```

</cdr-doc-example-code-pair>

## Input with Info Action

Input field with icon outside the input field on right.

<cdr-doc-example-code-pair repository-href="/src/components/input" :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrInput, IconInformationFill, CdrLink'})" :backgroundToggle="false" :codeMaxHeight="false" :model="{defaultModel: ''}">

```html
<cdr-input
  v-model="defaultModel"
  label="Input label"
  placeholder="Placeholder input"
>
  <cdr-link tag="button" slot="info-action">
    <icon-information-fill
      inherit-color
    />
  </cdr-link>
</cdr-input>
```

</cdr-doc-example-code-pair>

## Input with Helper Text

Input field with helper or hint text below the input field. If the input is in an error state, the error messaging slot will override this text.

<cdr-doc-example-code-pair repository-href="/src/components/input" :sandbox-data="$page.frontmatter.sandboxData" :backgroundToggle="false" :codeMaxHeight="false" :model="{defaultModel: ''}">

```html
<cdr-input
  v-model="defaultModel"
  label="Input label"
  placeholder="Placeholder input"
>
  <template slot="helper-text-bottom">
    Helper or additional text
  </template>
</cdr-input>
```

</cdr-doc-example-code-pair>

## Input with Helper Text Above

Input field with helper or hint text rendered above the input field.

<cdr-doc-example-code-pair repository-href="/src/components/input" :sandbox-data="$page.frontmatter.sandboxData" :backgroundToggle="false" :codeMaxHeight="false" :model="{defaultModel: ''}">

```html
<cdr-input
  v-model="defaultModel"
  label="Input label"
  placeholder="Placeholder input"
>
  <template slot="helper-text-top">
    Helper or additional text
  </template>
</cdr-input>
```

</cdr-doc-example-code-pair>

## Input with Icon Inserted Left

Input field with icon inserted into the input field on left. Icon is decorative and not intended for any action.

<cdr-doc-example-code-pair repository-href="/src/components/input" :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrInput, IconLocationPinStroke'})" :backgroundToggle="false" :codeMaxHeight="false"  :model="{defaultModel: ''}">

```html
<cdr-input
  v-model="defaultModel"
  label="Input label"
  placeholder="Placeholder input"
>
  <IconLocationPinStroke
    slot="pre-icon"
    class="cdr-button__icon"
    inherit-color
  />
</cdr-input>
```

</cdr-doc-example-code-pair>

## Input with Icon Inserted Right

Input field with icon inserted into the input field on right. Icon is decorative and not intended for any action.

<cdr-doc-example-code-pair repository-href="/src/components/input" :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrInput, IconCreditCard'})" :backgroundToggle="false" :codeMaxHeight="false"  :model="{defaultModel: ''}">

```html
<cdr-input
  v-model="defaultModel"
  label="Input label"
  placeholder="Placeholder input"
>
  <IconCreditCard
    slot="post-icon"
    inherit-color
  />
</cdr-input>
```

</cdr-doc-example-code-pair>


## Input with Actions

Input field with icon buttons inserted to the right. Up to 2 buttons can be passed into the `post-icon` slot. Each button should have the `cdr-input__button` utility class applied to it.

<cdr-doc-example-code-pair repository-href="/src/components/input" :sandbox-data="Object.assign({}, $page.frontmatter.sandboxData, {components: 'CdrInput, IconCreditCard, IconXLg, CdrTooltip, CdrButton'})" :backgroundToggle="false" :codeMaxHeight="false"  :model="{defaultModel: ''}">

```html
<div>
  <cdr-input
    v-model="defaultModel"
    label="Input label"
    placeholder="Placeholder input"
  >
    <template slot="post-icon">
      <cdr-tooltip class="cdr-input__button" id="input-tooltip">
        <cdr-button
          :icon-only="true"
          slot="trigger"
        >
          <icon-x-lg
            inherit-color
          />
        </cdr-button>

        click me to clear this input!
      </cdr-tooltip>
      <cdr-button
        :icon-only="true"
        class="cdr-input__button"
      >
        <icon-credit-card
          inherit-color
        />
      </cdr-button>
    </template>
  </cdr-input>

  <cdr-input
    v-model="defaultModel"
    label="Large Input label"
    placeholder="Placeholder input"
    size="large"
  >
    <cdr-button
      slot="post-icon"
      :icon-only="true"
      size="large"
      class="cdr-input__button"
    >
      <icon-credit-card
        inherit-color
      />
    </cdr-button>
  </cdr-input>
</div>
```

</cdr-doc-example-code-pair>

## Accessibility

This component has compliance with WCAG guidelines by:
- Requiring a value for the `label` field
- When hiding a label, the `aria-label` attribute is set to the `label` value

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

### Placeholder Text

- When user enters data into the input field, the placeholder text is not visible
- Placeholder text gives context about a field’s input, such as what type of input is expected.  For example, for a date input field, use “mm/dd/yyyy”
- Limit placeholder text to 1–3 words

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

<do-dont :examples="$page.frontmatter.placeholder" />

## Behavior

### Inputs with Icons

- Icons inserted into input fields are decorative, not inteded for any action

### Required Fields

- The default status of an input field is “optional”
- If the status is set to “required”, the text, “Required” will appear next to the input label

### Do / Don't

<do-dont :examples="$page.frontmatter.required" />

<do-dont :examples="$page.frontmatter.sizes" />

# API

## Props

This component will bind any attribute that a [native HTML input element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) accepts.

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props"/>

## Slots

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" :slots-getting-started-link="false" />

## Events

<cdr-doc-api type="event" :api-data="$page.frontmatter.versions[0].components[0].api.events" />


## Component Variables

<cdr-doc-comp-vars name="CdrInput">Note that the <a href="../component-variables/#CdrLabelStandalone">cdr-label-standalone mixins</a> should be used for assembling the label element. </cdr-doc-comp-vars>

## Usage

The **CdrInput** component requires `v-model` to bind the input value to your data model.  You can also use `helper-text` to display additional information below the input.

```vue {3,6,7,8}
<cdr-input
  class="demo-input"
  v-model="inputWithSlots"
  id="slots-demo"
  label="Billing address ZIP code">
  <template slot="helper-text">
    International customers, if no postal code, enter "NA"
  </template>
</cdr-input>
```

The `aria-label` attribute will be automatically added on compilation based upon what is provided in the `label` prop.

```vue
<cdr-input
  class="demo-input"
  v-model="ariaModel"
  id="aria-demo"
  label="First Name">
</cdr-input>
```

This will result in the following HTML:

```vue
<div class="cdr-input-wrap">
  <input
    id="aria-demo"
    type="text"
    class="cdr-input"
    aria-label="First Name">
</div>
```

Input inherits the `placeholder` attribute for the placeholder text. You can also use the `post-icon` slot for adding an icon.

```vue {4,7,8,9}
<cdr-input
  class="demo-input"
  v-model="inputWithSlots"
  placeholder="mm/dd/yyyy"
  id="slots-demo"
  label="Event Date">
  <template slot="post-icon">
    <icon-calendar />
  </template>
</cdr-input>
```

</cdr-doc-table-of-contents-shell>
