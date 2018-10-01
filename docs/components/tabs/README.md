---
{
  "title": "Tabs",
  "layout": "LayoutComponent",
  "summary": "Organize and group related content into smaller sections navigable within a single container",
  "title_metadata": "Tab Panels, CdrTabs",
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
                "name": "name",
                "type": "string",
                "default": "n/a",
                "description": "Sets code reference and tab display name. Required and must be unique for each tab"
              },
              {
                "name": "height",
                "type": "string",
                "default": "240px",
                "description": "Sets total height of tab container."
              },
              {
                "name": "modifier",
                "type": "string",
                "default": "n/a",
                "description": "Modifies the style variants for this component. Possible values: {  'compact'  |  'full-width'  |  'no-border'  }"
              }
            ],
            "events": [
              {
                "name": "tabChange",
                "arguments": "state, tabId",
                "description": "$emit event fired when the active tab has been changed"
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

<cdr-doc-tabs>
<template slot="Overview">
<cdr-doc-table-of-contents-shell>

## Default
Tab buttons align left and bottom border expands to full width of container

<cdr-doc-example-code-pair repository-href="https://github.com/rei/rei-cedar/tree/feat/tabs/src/components/tabs" sandbox-href="https://codesandbox.io/s/v19wpz29r7" :backgroundToggle="false" :codeMaxHeight="false" >

```html

<cdr-tabs height="100px">
  <cdr-tab-panel name="Product">Tab 1 Content</cdr-tab-panel>
  <cdr-tab-panel name="Articles">Tab 2 Content</cdr-tab-panel>
  <cdr-tab-panel name="Classes & Events">Tab 3 Content</cdr-tab-panel>
  <cdr-tab-panel name="Videos">Tab 4 Content</cdr-tab-panel>
</cdr-tabs>

```

</cdr-doc-example-code-pair>

## Compact

Reduced spacing around the tab buttons create a denser visual design

<cdr-doc-example-code-pair repository-href="https://github.com/rei/rei-cedar/tree/feat/tabs/src/components/tabs" sandbox-href="https://codesandbox.io/s/v19wpz29r7" :backgroundToggle="false" :codeMaxHeight="false">

```html
<cdr-tabs modifier="compact" height="100px">
  <cdr-tab-panel name="Product" >Tab 1 Content</cdr-tab-panel>
  <cdr-tab-panel name="Articles">Tab 2 Content</cdr-tab-panel>
  <cdr-tab-panel name="Classes & Events">Tab 3 Content</cdr-tab-panel>
  <cdr-tab-panel name="Videos">Tab 4 Content</cdr-tab-panel>
</cdr-tabs>
```

</cdr-doc-example-code-pair>

## Full Width

Tab buttons space evenly across the container

<cdr-doc-example-code-pair repository-href="https://github.com/rei/rei-cedar/tree/feat/tabs/src/components/tabs" sandbox-href="https://codesandbox.io/s/v19wpz29r7" :backgroundToggle="false" :codeMaxHeight="false" class="custom-radio-example">

```html
<cdr-tabs modifier="full-width" height="100px">
  <cdr-tab-panel name="Product">Tab 1 Content</cdr-tab-panel>
  <cdr-tab-panel name="Articles">Tab 2 Content</cdr-tab-panel>
  <cdr-tab-panel name="Classes & Events">Tab 3 Content</cdr-tab-panel>
  <cdr-tab-panel name="Videos">Tab 4 Content</cdr-tab-panel>
</cdr-tabs>
```

</cdr-doc-example-code-pair>

## No Border

Bottom border of tab header list is removed.

<cdr-doc-example-code-pair repository-href="https://github.com/rei/rei-cedar/tree/feat/tabs/src/components/tabs" sandbox-href="https://codesandbox.io/s/v19wpz29r7" :backgroundToggle="false" :codeMaxHeight="false" class="custom-radio-example">

```html
<cdr-tabs modifier="no-border" height="100px">
  <cdr-tab-panel name="Product">Tab 1 Content</cdr-tab-panel>
  <cdr-tab-panel name="Articles">Tab 2 Content</cdr-tab-panel>
  <cdr-tab-panel name="Classes & Events">Tab 3 Content</cdr-tab-panel>
  <cdr-tab-panel name="Videos">Tab 4 Content</cdr-tab-panel>
</cdr-tabs>
```

</cdr-doc-example-code-pair>

## Accessibility

To ensure that usage of this component complies with accessibility guidelines:
- Indicate tablist role in tabs header container
- Indicate tab role in tab header element
- Indicate tabpanel role in tab content element

<br/>

Tabs component maintains these keyboard interactions:
- Left arrow ( ` ← ` ) and Right arrow  ( ` → ` ) keystrokes move user between tabs
- ` Tab ` keystroke moves user into the content within the active tab section
- ` Shift ` + ` Tab ` returns the user to the selected tab

<br/>

This component has compliance with WCAG guidelines by:

- Using text color with a Level AA contrast ratio of 4.5:1 contrast between the text color and the background (but only when displayed on light backgrounds)

</cdr-doc-table-of-contents-shell>
</template>

<template slot="Design Guidelines">
<cdr-doc-table-of-contents-shell>

## Use when

- Organizing related content in a single container
- Flipping between multiple panes or sections
- Grouping content to display horizontally
- Content is lengthy and can be broken into discrete parts

### Don’t use when

- Grouping content to display vertically. Instead, use [Accordion](../accordion/)
- Creating primary navigation that links to other pages
- Creating anchor or in-page navigation
- Comparing related content

## Foundations

- Never display disabled tab labels
- Remove tab button if there is no content
- Keep to no more than 6 tab buttons
- Never display fewer than 2 tab buttons

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
- Scroll
  - If tabs exceed width of viewport, a gradient is added to the end (right) of tab container
  - When scrolled to end of tabs, a gradient is added to the beginning (left) of tab container
  - Scroll is set by default
  - Tabs labels never wrap to two lines
- Maintain layout for tabs when switching to smaller viewports. Do not replace the tab component with the accordion component
- Switching between tab component and accordion component is not supported in Cedar components library


</cdr-doc-table-of-contents-shell>
</template>

<template slot="API">
<cdr-doc-table-of-contents-shell>

## Props

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props"/>

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

Set the visual presentation by passing the following variants to the modifier attribute of the CdrTabs component.
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
