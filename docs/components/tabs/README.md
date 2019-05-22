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
      "alt": "tab with content displaying",
      "caption": "display a tab section on load."
    },
    {
      "type": "dont",
      "image": "tabs/tab_select_dont_16-9.png",
      "ratio": "16-9",
      "alt": "tab with empty content",
      "caption": "display tabs without a section visible."
    }
  ],
  "number": [
    {
      "type": "do",
      "image": "tabs/tab_number_do_16-9.png",
      "ratio": "16-9",
      "alt": "tabs with two buttons",
      "caption": "use tabs with at least 2 buttons."
    },
    {
      "type": "dont",
      "image": "tabs/tab_number_dont_16-9.png",
      "ratio": "16-9",
      "alt": "tab with one button",
      "caption": "use tabs with only 1 button."
    }
  ],
  "capitalization": [
    {
      "type": "do",
      "image": "tabs/tab_capitalization_do_16-9.png",
      "ratio": "16-9",
      "alt": "tabs with title cased labels",
      "caption": "use title case for tab labels."
    },
    {
      "type": "dont",
      "image": "tabs/tab_capitalization_dont_16-9.png",
      "ratio": "16-9",
      "alt": "tabs with all caps labels",
      "caption": "use all caps for tab labels."
    }
  ],
    "label": [
    {
      "type": "do",
      "image": "tabs/tab_label_do_16-9.png",
      "ratio": "16-9",
      "alt": "tabs with succint labels",
      "caption": "write short and meaningful tab labels. Between 1-2 words is best."
    },
    {
      "type": "dont",
      "image": "tabs/tab_label_dont_16-9.png",
      "ratio": "16-9",
      "alt": "tabs with truncated labels.",
      "caption": "truncate tab labels. If a label overruns the container, find a shorter alternative."
    }
  ],
  "sandboxData": {
    "components": "CdrTabs, CdrTabPanel"
  },
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
                "description": "Sets height of the tabs container element.  This is needed for managing content overflow and animations."
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
                "description": "$emit event fired when the active tab has been changed."
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
Tab buttons align left and bottom border expands to full width of container.

<cdr-doc-example-code-pair repository-href="https://github.com/rei/rei-cedar/tree/feat/tabs/src/components/tabs" :sandbox-data="$page.frontmatter.sandboxData" :backgroundToggle="false" :codeMaxHeight="false" >

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

Reduced spacing around the tab buttons create a denser visual design.

<cdr-doc-example-code-pair repository-href="/src/components/tabs" :sandbox-data="$page.frontmatter.sandboxData" :backgroundToggle="false" :codeMaxHeight="false">

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

Tab buttons space evenly across the container.

<cdr-doc-example-code-pair repository-href="/src/components/tabs" :sandbox-data="$page.frontmatter.sandboxData" :backgroundToggle="false" :codeMaxHeight="false" class="custom-radio-example">

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

<cdr-doc-example-code-pair repository-href="/src/components/tabs" :sandbox-data="$page.frontmatter.sandboxData" :backgroundToggle="false" :codeMaxHeight="false" class="custom-radio-example">

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

Tabs component maintains these keyboard interactions:

- **Left arrow** and **Right arrow** keys:  Moves user between tabs
- **Down arrow**:  Moves user into the content within the active tab section
- **Up arrow**:  Returns user to the selected tab

<br/>

This component has compliance with WCAG guidelines by:

- Using text color with a Level AA contrast ratio of 4.5:1 contrast between the text color and the background (but only when displayed on light backgrounds)
- Includes tablist role in tabs header container
- Includes tab role in tab header element
- Includes tabpanel role in tab content element

</cdr-doc-table-of-contents-shell>
</template>

<template slot="Design Guidelines">
<cdr-doc-table-of-contents-shell>

## Use When

- Organizing related content in a single container
- Flipping between multiple panes or sections
- Grouping content to display horizontally
- Content is lengthy and can be broken into discrete parts

### Don’t Use When

- Grouping content to display vertically. Instead, use [Accordion](../accordion/)
- Creating primary navigation that links to other pages
- Comparing related content. Instead, use [Data Tables](../data-tables/)

## Foundations

- Never display disabled tab labels
- Remove tab button if there is no content
- Keep to no more than 6 tab buttons
- Never display fewer than 2 tab buttons

## Content

- Order the tab buttons by priority or importance from left to right
- Keep tab labels short and meaningful. Between 1-2 words is best and written in plain language
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
  - Example: _Default_ at MD/LG, _Compact_ and _Full Width_ at XS/SM
- Tabs labels never wrap to two lines
- Scroll is set by default:
  - If tabs exceed width of viewport, a gradient is added to the end (right) of tab container
  - When scrolled to end of tabs, a gradient is added to the beginning (left) of tab container
- Maintain layout for tabs when switching to smaller viewports. Do not replace the tab component with the accordion component
- Switching between tab component and accordion component is not supported in Cedar components library

</cdr-doc-table-of-contents-shell>
</template>

<template slot="API">
<cdr-doc-table-of-contents-shell>

Tabs are built from two components, **CdrTabs** and **CdrTabPanel**, which are meant to be used together.

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

Install the **CdrTabs** package using `npm` in your terminal:

_Terminal_

```bash
npm i -s @rei/cdr-tabs
```

### 2. Import Dependencies

_main.js_

```javascript
// import your required CSS.
import "@rei/cdr-tabs/dist/cdr-tabs.css";
```

### 3. Add Component to a Template

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

The `cdr-tab-panel name` property sets the tab display value and is used for reference.

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
- Git commit reference [(cc6b3fb)](https://github.com/rei/rei-cedar/blob/next/src/components/tabs/CHANGELOG.md)

</template>
</cdr-doc-tabs>
