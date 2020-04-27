---
{
  "title": "Tabs",
  "layout_type": "LayoutComponent",
  "summary": "Organize and group related content into smaller sections navigable within a single container",
  "title_metadata": "Tab Panels, CdrTabs",
  "select": [
    {
      "type": "do",
      "image": "tabs/tab_select_do.png",
      "ratio": "16-9",
      "alt": "tab with content displaying",
      "caption": "display a tab section on load."
    },
    {
      "type": "dont",
      "image": "tabs/tab_select_dont.png",
      "ratio": "16-9",
      "alt": "tab with empty content",
      "caption": "display tabs without a section visible."
    }
  ],
  "number": [
    {
      "type": "do",
      "image": "tabs/tab_number_do.png",
      "ratio": "16-9",
      "alt": "tabs with two buttons",
      "caption": "use tabs with at least 2 buttons."
    },
    {
      "type": "dont",
      "image": "tabs/tab_number_dont.png",
      "ratio": "16-9",
      "alt": "tab with one button",
      "caption": "use tabs with only 1 button."
    }
  ],
  "capitalization": [
    {
      "type": "do",
      "image": "tabs/tab_capitalization_do.png",
      "ratio": "16-9",
      "alt": "tabs with title cased labels",
      "caption": "use title case for tab labels."
    },
    {
      "type": "dont",
      "image": "tabs/tab_capitalization_dont.png",
      "ratio": "16-9",
      "alt": "tabs with all caps labels",
      "caption": "use all caps for tab labels."
    }
  ],
  "label": [
    {
      "type": "do",
      "image": "tabs/tab_label_do.png",
      "ratio": "16-9",
      "alt": "tabs with succint labels",
      "caption": "write short and meaningful tab labels. Between 1-2 words is best."
    },
    {
      "type": "dont",
      "image": "tabs/tab_label_dont.png",
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
                "name": "activeTab",
                "type": "number",
                "default": "0",
                "description": "Sets the index of the tab that should be active on initial page load. Note that this property is zero-indexed."
              },
              {
                "name": "modifier",
                "type": "string",
                "default": "N/A",
                "description": "Modifies the style variants for this component. Possible values: {  'centered'  |  'compact'  |  'full-width'  |  'no-border'  }"
              }
            ],
            "events": [
              {
                "name": "tab-change",
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
                "description": "Sets reference identifier for tab content. This property is required and is necessary or accessibility. Must be unique for each tabPanel, and cannot be the same as the `aria-labelledby` property."
              },
              {
                "name": "aria-labelledby",
                "type": "string",
                "default": "N/A",
                "description": "Sets reference identifier for tab header. This property is required and is necessary for accessibility. Must be unique for each tabPanel, and cannot be the same as the `id` property."
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
Tabs align left and bottom border expands to full width of container.

<cdr-doc-example-code-pair repository-href="https://github.com/rei/rei-cedar/tree/feat/tabs/src/components/tabs" :sandbox-data="$page.frontmatter.sandboxData" :backgroundToggle="false" :codeMaxHeight="false" >

```html

<cdr-tabs height="100px">
  <cdr-tab-panel name="Product" id="product-tab-panel" aria-labelledby="product-tab">Tab 1 Content</cdr-tab-panel>
  <cdr-tab-panel name="Articles" id="article-tab-panel" aria-labelledby="article-tab">Tab 2 Content</cdr-tab-panel>
  <cdr-tab-panel name="Classes & Events" id="classes-tab-panel" aria-labelledby="classes-tab">Tab 3 Content</cdr-tab-panel>
  <cdr-tab-panel name="Videos" id="videos-tab-panel" aria-labelledby="videos-tab">Tab 4 Content</cdr-tab-panel>
</cdr-tabs>

```

</cdr-doc-example-code-pair>

## Compact (Small)

Reduced spacing around the tabs to create a denser visual design.

<cdr-doc-example-code-pair repository-href="/src/components/tabs" :sandbox-data="$page.frontmatter.sandboxData" :backgroundToggle="false" :codeMaxHeight="false">

```html
<cdr-tabs modifier="compact" height="100px">
  <cdr-tab-panel name="Product" id="product-tab-panel" aria-labelledby="product-tab">Tab 1 Content</cdr-tab-panel>
  <cdr-tab-panel name="Articles" id="articles-tab-panel" aria-labelledby="articles-tab">Tab 2 Content</cdr-tab-panel>
  <cdr-tab-panel name="Classes & Events" id="classes-tab-panel" aria-labelledby="classes-tab">Tab 3 Content</cdr-tab-panel>
  <cdr-tab-panel name="Videos" id="videos-tab-panel" aria-labelledby="videos-tab">Tab 4 Content</cdr-tab-panel>
</cdr-tabs>
```

</cdr-doc-example-code-pair>

## Full Width

Tabs space evenly across the container.

<cdr-doc-example-code-pair repository-href="/src/components/tabs" :sandbox-data="$page.frontmatter.sandboxData" :backgroundToggle="false" :codeMaxHeight="false">

```html
<cdr-tabs modifier="full-width" height="100px">
  <cdr-tab-panel name="Product" id="product-tab-panel" aria-labelledby="product-tab">Tab 1 Content</cdr-tab-panel>
  <cdr-tab-panel name="Articles" id="articles-tab-panel" aria-labelledby="articles-tab">Tab 2 Content</cdr-tab-panel>
  <cdr-tab-panel name="Classes & Events" id="classes-tab-panel" aria-labelledby="classes-tab">Tab 3 Content</cdr-tab-panel>
  <cdr-tab-panel name="Videos" id="videos-tab-panel" aria-labelledby="videos-tab">Tab 4 Content</cdr-tab-panel>
</cdr-tabs>
```

</cdr-doc-example-code-pair>

## No Border

Bottom border of tab header list is removed.

<cdr-doc-example-code-pair repository-href="/src/components/tabs" :sandbox-data="$page.frontmatter.sandboxData" :backgroundToggle="false" :codeMaxHeight="false">

```html
<cdr-tabs modifier="no-border" height="100px">
  <cdr-tab-panel name="Product" id="product-tab-panel" aria-labelledby="product-tab">Tab 1 Content</cdr-tab-panel>
  <cdr-tab-panel name="Articles" id="articles-tab-panel" aria-labelledby="articles-tab">Tab 2 Content</cdr-tab-panel>
  <cdr-tab-panel name="Classes & Events" id="classes-tab-panel" aria-labelledby="classes-tab">Tab 3 Content</cdr-tab-panel>
  <cdr-tab-panel name="Videos" id="videos-tab-panel" aria-labelledby="videos-tab">Tab 4 Content</cdr-tab-panel>
</cdr-tabs>
```

</cdr-doc-example-code-pair>

## Centered

Centered tab header content.

<cdr-doc-example-code-pair repository-href="/src/components/tabs" :sandbox-data="$page.frontmatter.sandboxData" :backgroundToggle="false" :codeMaxHeight="false">

```html
<cdr-tabs modifier="centered" height="100px">
  <cdr-tab-panel name="Product" id="product-tab-panel" aria-labelledby="product-tab">Tab 1 Content</cdr-tab-panel>
  <cdr-tab-panel name="Articles" id="articles-tab-panel" aria-labelledby="articles-tab">Tab 2 Content</cdr-tab-panel>
  <cdr-tab-panel name="Classes & Events" id="classes-tab-panel" aria-labelledby="classes-tab">Tab 3 Content</cdr-tab-panel>
  <cdr-tab-panel name="Videos" id="videos-tab-panel" aria-labelledby="videos-tab">Tab 4 Content</cdr-tab-panel>
</cdr-tabs>
```

</cdr-doc-example-code-pair>

## Active Tab

Tabs using the `active-tab` property to make the third element active on page load.

<cdr-doc-example-code-pair repository-href="/src/components/tabs" :sandbox-data="$page.frontmatter.sandboxData" :backgroundToggle="false" :codeMaxHeight="false">

```html
<cdr-tabs :active-tab="2" height="100px">
  <cdr-tab-panel name="Product" id="product-tab-panel" aria-labelledby="product-tab">Tab 1 Content</cdr-tab-panel>
  <cdr-tab-panel name="Articles" id="articles-tab-panel" aria-labelledby="articles-tab">Tab 2 Content</cdr-tab-panel>
  <cdr-tab-panel name="Classes & Events" id="classes-tab-panel" aria-labelledby="classes-tab">Tab 3 Content</cdr-tab-panel>
  <cdr-tab-panel name="Videos" id="videos-tab-panel" aria-labelledby="videos-tab">Tab 4 Content</cdr-tab-panel>
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

<hr>

# Guidelines

## Use When

- Organizing related content in a single container
- Flipping between multiple panes or sections
- Grouping content to display horizontally
- Content can be broken into discrete parts

## Don't Use When

- Grouping content to display vertically. Instead, use [Accordion](../accordion/)
- Creating primary navigation that links to other pages
- Comparing related content. Instead, use [Data Tables](../data-tables/)

## The Basics

- Keep tabs in the same order, even when some tabs are disabled
- Keep to no more than 6 tabs
- Never display fewer than 2 tabs
- Avoid changing the order of the tabs often. If your content changes frequently and needs to be selectively displayed, consider adopting a Filter pattern as in Product Display (https://www.rei.com/c/mens-climbing-shoes)

## Content

- Order the tabs by priority or importance from left to right
- Keep tab labels short and meaningful. Between 1-2 words is best and written in plain language
- Ensure that each tab label is unique
- Never truncate tab labels
- Use title caps for tab labels
- Tab headers can be animated, but tab content should not be

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

### Important

Linking to a specific tab or accordion has SEO costs. If you still wish to implement these changes for your project, reach out to the SEO team at the #team-seo and #team-ia Slack channels.

<hr>

# API

Tabs are built from two components: **CdrTabs** and **CdrTabPanel**. These are meant to be used together.

## Props

### CdrTabs

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props"/>

### CdrTabPanel

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[1].api.props"/>

## Events

<cdr-doc-api type="event" :api-data="$page.frontmatter.versions[0].components[0].api.events" />

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
| 'centered'   | Centers the tab header content |
| 'compact'    | Sets the tabs styling for smaller screen sizes |
| 'full-width' | Sets the tab header to display evenly across the entire width instead of left justified |
| 'no-border'  | Removes the bottom border of the tabs header |

</cdr-doc-table-of-contents-shell>
