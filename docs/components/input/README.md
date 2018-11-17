---
{
  "title": "Inputs",
  "layout": "LayoutComponent",
  "summary": "Allows a user to enter and edit data. Also used for search",
  "title_metadata": "Text field, CdrInput, cdr-input",
  "select": [
    {
      "type": "do",
      "image": "tabs/tab_select_do_16-9.png",
      "ratio": "16-9",
      "alt": "tab with content displaying.",
      "caption": "display a tab section on load."
    },
    {
      "type": "dont",
      "image": "tabs/tab_select_dont_16-9.png",
      "ratio": "16-9",
      "alt": "tab with empty content.",
      "caption": "display tabs without a section visible."
    }
  ],
  "number": [
    {
      "type": "do",
      "image": "tabs/tab_number_do_16-9.png",
      "ratio": "16-9",
      "alt": "tabs with two buttons.",
      "caption": "use tabs with at least 2 buttons."
    },
    {
      "type": "dont",
      "image": "tabs/tab_number_dont_16-9.png",
      "ratio": "16-9",
      "alt": "tab with one button.",
      "caption": "use tabs with only 1 button."
    }
  ],
  "capitalization": [
    {
      "type": "do",
      "image": "tabs/tab_capitalization_do_16-9.png",
      "ratio": "16-9",
      "alt": "tabs with title cased labels.",
      "caption": "use title case for tab labels."
    },
    {
      "type": "dont",
      "image": "tabs/tab_capitalization_dont_16-9.png",
      "ratio": "16-9",
      "alt": "tabs with all caps labels.",
      "caption": "use all caps for tab labels."
    }
  ],
    "label": [
    {
      "type": "do",
      "image": "tabs/tab_label_do_16-9.png",
      "ratio": "16-9",
      "alt": "tabs with succint labels.",
      "caption": "write succinct and meaningful tab labels. Between 1-2 words is best."
    },
    {
      "type": "dont",
      "image": "tabs/tab_label_dont_16-9.png",
      "ratio": "16-9",
      "alt": "tabs with truncated labels.",
      "caption": "truncate tab labels. If a label overruns the container, find a shorter alternative."
    }
  ],
  "versions": [
    {
      "components": [
        {
          "name": "CdrTabs",
          "api": {
            "props": [
              {
                "name": "height",
                "type": "string",
                "default": "240px",
                "description": "Sets total height of tab container."
              },
              {
                "name": "modifier",
                "type": "string",
                "default": "N/A",
                "description": "Modifies the style variants for this component. Possible values: {  'compact'  |  'full-width'  |  'no-border'  }"
              }
            ],
            "events": [
              {
                "name": "tabChange",
                "arguments": "state, tabId",
                "description": "$emit event fired when the active tab has been changed"
              }
            ]
          }
        },
        {
          "name": "CdrTabPanel",
          "api": {
            "props": [
              {
                "name": "name",
                "type": "string",
                "default": "N/A",
                "description": "Sets tab display name. Required and must be unique for each tab.  If id prop not provided, this value will be used as the reference identifier."
              },
              {
                "name": "id",
                "type": "string",
                "default": "N/A",
                "description": "Sets reference identifier.  Must be unique for each tab."
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
Basic input field with label

<cdr-doc-example-code-pair repository-href="https://github.com/rei/rei-cedar/tree/feat/tabs/src/components/tabs" sandbox-href="https://codesandbox.io/s/v19wpz29r7" :backgroundToggle="false" :codeMaxHeight="false" >

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

Basic input field with label and required tag

<cdr-doc-example-code-pair repository-href="https://github.com/rei/rei-cedar/tree/feat/tabs/src/components/tabs" sandbox-href="https://codesandbox.io/s/v19wpz29r7" :backgroundToggle="false" :codeMaxHeight="false">

```html
<cdr-input
  v-model="defaultModel"
  label="Input label"
  placeholder="Placeholder input"
  required
/>
```

</cdr-doc-example-code-pair>

## Sizing

Change size for the input field. Default size is medium.

<cdr-doc-example-code-pair repository-href="https://github.com/rei/rei-cedar/tree/feat/tabs/src/components/tabs" sandbox-href="https://codesandbox.io/s/v19wpz29r7" :backgroundToggle="false" :codeMaxHeight="false" class="custom-radio-example">

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

Input field with no label

<cdr-doc-example-code-pair repository-href="https://github.com/rei/rei-cedar/tree/feat/tabs/src/components/tabs" sandbox-href="https://codesandbox.io/s/v19wpz29r7" :backgroundToggle="false" :codeMaxHeight="false" class="custom-radio-example">

```html
<cdr-input
  v-model="defaultModel"
  label="Input label"
  placeholder="Placeholder input"
  hideLabel
/>
```

</cdr-doc-example-code-pair>

## Multi-line input

Multiple line input field with expander control in lower right

<cdr-doc-example-code-pair repository-href="https://github.com/rei/rei-cedar/tree/feat/tabs/src/components/tabs" sandbox-href="https://codesandbox.io/s/v19wpz29r7" :backgroundToggle="false" :codeMaxHeight="false" class="custom-radio-example">

```html
<cdr-input
  v-model="defaultModel"
  label="Input label"
  placeholder="Placeholder input"
  rows="4"
/>
```

</cdr-doc-example-code-pair>

## Input with link text

Input field with link text on right

<cdr-doc-example-code-pair repository-href="https://github.com/rei/rei-cedar/tree/feat/tabs/src/components/tabs" sandbox-href="https://codesandbox.io/s/v19wpz29r7" :backgroundToggle="false" :codeMaxHeight="false" class="custom-radio-example">

```html
<cdr-input
  v-model="defaultModel"
  label="Input label"
  placeholder="Placeholder input"
>
  <template slot="info">
    <a href="#">Information link</a>
  </template>
</cdr-input>
```

</cdr-doc-example-code-pair>

## Input with icon above

Input field with icon above input field on right

<cdr-doc-example-code-pair repository-href="https://github.com/rei/rei-cedar/tree/feat/tabs/src/components/tabs" sandbox-href="https://codesandbox.io/s/v19wpz29r7" :backgroundToggle="false" :codeMaxHeight="false" class="custom-radio-example">

```html
<cdr-icon-sprite />
<cdr-input
  v-model="defaultModel"
  label="Input label"
  placeholder="Placeholder input"
>
  <cdr-icon
    slot="info"
    use="#information-fill"
    class="cdr-button__icon"
    modifier="inherit-color"
  />
</cdr-input>
```

</cdr-doc-example-code-pair>

## Input with helper text

Input field with helper or hint text below input field

<cdr-doc-example-code-pair repository-href="https://github.com/rei/rei-cedar/tree/feat/tabs/src/components/tabs" sandbox-href="https://codesandbox.io/s/v19wpz29r7" :backgroundToggle="false" :codeMaxHeight="false" class="custom-radio-example">

```html
<cdr-input
  v-model="defaultModel"
  label="Input label"
  placeholder="Placeholder input"
>
  <template slot="helper-text">
    Helper or additional text
  </template>
</cdr-input>
```

</cdr-doc-example-code-pair>

## Input with icon inserted left

Input field with icon inserted into input field on left. Icon is decorative and not intended for any action

<cdr-doc-example-code-pair repository-href="https://github.com/rei/rei-cedar/tree/feat/tabs/src/components/tabs" sandbox-href="https://codesandbox.io/s/v19wpz29r7" :backgroundToggle="false" :codeMaxHeight="false" class="custom-radio-example">

```html
<cdr-icon-sprite />
<cdr-input
  v-model="defaultModel"
  label="Input label"
  placeholder="Placeholder input"
>
  <cdr-icon
    slot="pre-icon"
    use="#location-pin-stroke"
    class="cdr-button__icon"
    modifier="inherit-color"
  />
</cdr-input>
```

</cdr-doc-example-code-pair>

## Input with icon inserted right

Input field with icon inserted into input field on right. Icon is decorative and not intended for any action

<cdr-doc-example-code-pair repository-href="https://github.com/rei/rei-cedar/tree/feat/tabs/src/components/tabs" sandbox-href="https://codesandbox.io/s/v19wpz29r7" :backgroundToggle="false" :codeMaxHeight="false" class="custom-radio-example">

```html
<cdr-icon-sprite />
<cdr-input
  v-model="defaultModel"
  label="Input label"
  placeholder="Placeholder input"
>
  <cdr-icon
    slot="post-icon"
    use="#credit-card"
    class="cdr-button__icon"
    modifier="inherit-color"
  />
</cdr-input>
```

</cdr-doc-example-code-pair>

## Accessibility

This component has compliance with WCAG guidelines by:
- Requiring a value for the `label` field
- When hiding a label, the `aria-label` attribute is set to the `label` value

</cdr-doc-table-of-contents-shell>
</template>

<template slot="Design Guidelines">
<cdr-doc-table-of-contents-shell>

## Use when

- Entering data with a wide variety of responses
- Searching for content

### Don’t use when

- Selecting from a specific set of options. Use Selects

## Foundations

- **Identifiable** - Input fields should indicate that users can enter information
- **Findable** - It should be easy to find an input field among other elements
- **Legible** - Input fields indicate their state such as enabled, focused, or disabled

### Options

- Define width using CSS styles
- Height options are medium or large. For more information, view Overview tab
- Ability to specify field type for text, email, number, password, search, and URL

### Multi-line input fields

- Use when long free-form text is the desired user input such as a comment on a review or feedback form
- Overflow text wraps to a new line
- Scroll bar appears on right border when cursor reaches the bottom of the field
- This input field is defined by using the `rows` prop by defining the number of rows to present the user with a recommended length for a response
- Resizing handle allows user to change the height of the input area
- Min and max limits are set by the product team for:
  - Max-height of textarea
  - Maximum and minimum number of characters

<cdr-img class="cdr-doc-article-img" alt="Multi-line input field with resizing hande and scroll bar" :src="$withBase(`/breadcrumb/Spec__Breadcrumb_Long_16-2.png`)" />


## Content

- Order the tab buttons by priority/importance from left to right
- Keep tab labels succinct and meaningful. Between 1-2 words is best and written in plain language
- Never truncate tab labels
- Use title caps for tab labels

## Behavior

- The first tab section is selected by default
- Only one tab can be selected at a time
- Currently selected tab is always highlighted
- Tabs are scrollable by default and do not wrap to a second line
- Tabs become scrollable when the length of the labels exceed the width of the container
- Inactive tab panels are rendered for SEO purposes

### Do/Don't

<do-dont :examples="$page.frontmatter.select" />

<do-dont :examples="$page.frontmatter.number" />

<do-dont :examples="$page.frontmatter.capitalization" />

<do-dont :examples="$page.frontmatter.label" />


## Responsiveness

- Tabs can change styles based on breakpoint
  - Example: Default at MD/LG, Compact and Full-Width at XS/SM
- Tabs labels never wrap to two lines
- Scroll is set by default
  - If tabs exceed width of viewport, a gradient is added to the end (right) of tab container
  - When scrolled to end of tabs, a gradient is added to the beginning (left) of tab container
- Maintain layout for tabs when switching to smaller viewports. Do not replace the tab component with the accordion component
- Switching between tab component and accordion component is not supported in Cedar components library

</cdr-doc-table-of-contents-shell>
</template>

<template slot="API">
<cdr-doc-table-of-contents-shell>

## Props

### CdrTabs
<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props"/>

### CdrTabPanel
<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[1].api.props"/>

## Events

<cdr-doc-api type="event" :api-data="$page.frontmatter.versions[0].components[0].api.events" />

## Installation

Resources are available within the [CdrTabs package](https://www.npmjs.com/package/@rei/cdr-tabs):

- Component: `@rei/cdr-tabs`
- Component styles: `cdr-tabs.css`

<br/>

To incorporate the required assets for a component, use the following steps:

### 1. Install using NPM

Install the CdrTabs package using `npm` in your terminal:

_Terminal_

```bash
npm i -s @rei/cdr-tabs
```

## 2. Import Dependencies

_main.js_

```javascript
// import your required CSS.
import "@rei/cdr-tabs/dist/cdr-tabs.css";
```

### 3. Add component to a template

_local.vue_

```vue
<template>
  ...
     <cdr-tabs>
       <cdr-tab-panel name=”tab1”>TAB1 CONTENT GOES HERE</cdr-tab-panel>
       <cdr-tab-panel name=”tab2”>TAB2 CONTENT GOES HERE</cdr-tab-panel>
       <cdr-tab-panel name=”tab3”>TAB3 CONTENT GOES HERE</cdr-tab-panel>
     </cdr-tabs>
  ...
</template>

<script>
import { CdrTabs, CdrTabPanel } from '@rei/cdr-tabs’;
export default {
  ...
  components: {
     CdrTabs,
     CdrTabPanel
  },
}
</script>
```

## Usage

The ` cdr-tab-panel name ` property sets the tab display value and is used for reference.

```vue
 <cdr-tabs>
   <cdr-tab-panel name="tab1">Tab 1 Content</cdr-tab-panel>
 </cdr-tabs>
```

### Modifiers

Following variants are available to the `cdr-tabs` modifier attribute:
| Value        | Description            |
|:-------------|:-----------------------|
| 'compact'    | Sets the tabs styling for smaller screen sizes |
| 'full-width' | Sets the tab header to display evenly across the entire width instead of left justified |
| 'no-border'  | Removes the bottom border of the tabs header |

</cdr-doc-table-of-contents-shell>
</template>

<template slot="History">

## 1.0.0

- Organizes content across different screens
- Enables navigation between content with Tab Header List
- Tabs Header List supports overflow by allowing horizontal scrolling of header
- Incorporates accessibility and SEO compliant features
- Git commit reference [(cc6b3fb)](https://github.com/rei/rei-cedar/pull/454/commits/cc6b3fbd49bbe1b07165dd605df99fbe1743cbd6)

</template>
</cdr-doc-tabs>
