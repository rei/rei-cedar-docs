---
{
  "title": "Breadcrumb",
  "layout_type": "LayoutComponent",
  "summary": "Navigation used to reveal a page’s location within the site hierarchy",
  "title_metadata": "CdrBreadcrumb",
  "component_location": "https://github.com/rei/rei-cedar/tree/next/src/components/breadcrumb",
  "path": [
    {
      "type": "do",
      "image": "breadcrumb/breadcrumbs_path_do_16-9.png",
      "ratio": "16-9",
      "alt": "A breadcrumb with three items representing the full path.",
      "caption": "show the full path for breadcrumb items whenever possible."
    },
    {
      "type": "dont",
      "image": "breadcrumb/breadcrumbs_path_outline_dont_16-9.png",
      "ratio": "16-9",
      "alt": "Three mixed breadcrumb paths inappropriately used to show the path a user takes to arrive at a page.",
      "caption": "show the path that the user takes to arrive at a page."
    }
  ],
  "path_symbol": [
    {
      "type": "do",
      "image": "breadcrumb/breadcrumbs_path_symbol_do_16-9.png",
      "ratio": "16-9",
      "alt": "Breadcrumbs separated with a forward slash.",
      "caption": "separate breadcrumb items with the \"/\" symbol, automatically added in CSS."
    },
    {
      "type": "dont",
      "image": "breadcrumb/breadcrumbs_path_symbol_outline_dont_16-9.png",
      "ratio": "16-9",
      "alt": "Breadcrumbs separated with a right arrow.",
      "caption": "create a custom symbol to separate breadcrumb items."
    }
  ],
  "truncation": [
    {
      "type": "do",
      "image": "breadcrumb/breadcrumbs_truncate_do_16-9.png",
      "ratio": "16-9",
      "alt": "Truncated breadcrumbs with ellipses on the left so only final two links are visible.",
      "caption": "use truncation for breadcrumb path."
    },
    {
      "type": "dont",
      "image": "breadcrumb/breadcrumbs_truncate_outline_dont_16-9.png",
      "ratio": "16-9",
      "alt": "Breadcrumbs forcing a linebreak.",
      "caption": "break the page title when long breadcrumb path is expanded."
    }
  ],
  "link": [
    {
      "type": "do",
      "image": "breadcrumb/breadcrumbs_link_do_16-9.png",
      "ratio": "16-9",
      "alt": "Breadcrumbs links in gray.",
      "caption": "use gray color tints for breadcrumb items."
    },
    {
      "type": "dont",
      "image": "breadcrumb/breadcrumbs_link_outline_dont_16-9.png",
      "ratio": "16-9",
      "alt": "Breadcrumbs links in blue.",
      "caption": "color breadcrumb items blue."
    }
  ],
  "sandboxData": {
    "components": "CdrBreadcrumb"
  },
  "versions": [
    {
      "components": [
        {
          "name": "CdrBreadcrumb",
          "api": {
            "props": [
              {
                "name": "items",
                "type": "array",
                "default": "N/A",
                "description": "Sets the array of a breadcrumb object containing a 'url' and 'name' property."
              },
              {
                "name": "truncationEnabled",
                "type": "boolean",
                "default": "true",
                "description": "Controls the ability to truncate the entire breadcrumb path. If this value is false, truncation will no longer occur."
              },
            ],
            "scopedSlots": [
              {
                "name": "link",
                "description": "Scoped slot used to override the default links used in the breadcrumb. Useful for integrating with client-side routing. The slot scope exposes the following attributes: class, href, and content.",
                "alert": {
                  "type": "deprecated",
                  "description": "The link scoped slot has been deprecated, use an event handler on the `navigate` event instead to customize link navigation behavior"
                },
              }
            ],
            "events": [
              {
                  "name": "navigate",
                  "arguments": "breadcrumb, event",
                  "description": "$emit event fired when a breadcrumb item is clicked. `e.preventDefault()` may be used to override the default link navigation."
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

<cdr-doc-table-of-contents-shell parentSelector="h2" childSelector="h3">
## Overview

### Truncated (Default)

Long breadcrumb path shortened to display the last 2 items with hidden links indicated by ellipsis.

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" :backgroundToggle="false" :codeMaxHeight= false>

```html
    <cdr-breadcrumb
      :items="[
        {item:{url:'', name: 'Kids\' Clothing'}},
        {item:{url:'', name: 'Kids\' Clothing Accessories'}},
        {item:{url:'', name: 'Kids\' Snowboard Gloves and Mittens'}},
        {item:{url:'', name: 'Kids\' Gloves'}},
        {item:{url:'', name: 'Kids\' Insulated Gloves'}},
      ]"
    />
```
</cdr-doc-example-code-pair>

### Untruncated

Complete breadcrumb string with all items visible.

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" :backgroundToggle="false" :codeMaxHeight= false >

```html
  <cdr-breadcrumb
    :truncation-enabled="false"
    :items="[
      {item:{url:'', name: 'Snowboarding'}},
      {item:{url:'', name: 'Snowboard Clothing'}},
      {item:{url:'', name: 'Kids\' Snowboard Clothing'}}
    ]"
  />
```

</cdr-doc-example-code-pair>

### Custom Navigation

Can be used to override the default link navigation behavior inside a breadcrumb.

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" :backgroundToggle="false" :methods="{handleNavigation(bc, e) {e.preventDefault(); this.lastClicked = bc.item.name}}" :model="{lastClicked: ''}">

```html
<div>
  <cdr-breadcrumb :items="[
    {item:{url:'/snowboarding', name: 'Snowboarding'}},
    {item:{url:'/snowboarding/clothing', name: ' Clothing'}}
  ]"
  @navigate="handleNavigation"
  />

  Last Clicked: {{ lastClicked }}
</div>
```
</cdr-doc-example-code-pair>


### Accessibility


To ensure that usage of this component complies with accessibility guidelines:
- Indicate the current page location within a hierarchy using breadcrumbs
- Do not include the current page in breadcrumb path because the ```aria-current``` attribute is not defined for the last item

<br>

This component has compliance with WCAG guidelines by:
  - Using text color with a Level AA contrast ratio of 4.5:1 contrast between the text color and the background but only when displayed on light backgrounds
  - Defining the attribute `aria-label="Breadcrumb"`  in the  `<nav>`  element to identify the structure of  `cdr-breadcrumb`  as a breadcrumb path for assistive technologies
  - Defining that the ellipsis button contains the  `aria-expanded="false"`  attribute when the user has the ability to expand the breadcrumb path
  - Applying focus to the first breadcrumb item when the ellipsis button is clicked

<hr>

## Guidelines

### Use When

- Helping users understand where they are within the site hierarchy
- Providing a shortcut to explore similar products within common parent categories

### Don’t Use When

- Displaying a top-level page, such as a home or high-level category page
- Linking to previous steps of a sequential process

### The Basics

Breadcrumbs provide context and a sense of place. This is especially important on a small screen, where other orienting content isn’t visible.

- Include the full location path data once and only once in the code
- Always retain the full location path in page markup, even if shortened due to responsive styling
- Display the complete breadcrumb path—not just the previous item—when an ellipsis is clicked or tapped
- When full breadcrumbs path is displayed, it may wrap to 2 or more lines
- Avoid displaying breadcrumbs on non-white backgrounds
- Refer to API documentation for how to customize breadcrumb truncation width

### Content
- Always align breadcrumb labels with page names that are the destination of that breadcrumb
- Incorporate keywords into page names and breadcrumbs to improve SEO
- Align breadcrumb labels with words customers use while searching for products, events, adventures, or expert advice
- Never include the current page in a breadcrumb path. Instead, display that label only as a page title
- Guidelines for applying breadcrumb category names are found in the [REI Navigation Standards: Breadcrumbs](https://confluence.rei.com/display/NAV/Breadcrumb+Guidance) article
- For items in multiple categories and no primary path has been identified, display the most relevant path:
  - If an article lives in both Hiking and Camping, and the user browsed to the article through Hiking, show the breadcrumb that includes Hiking
  - If the user browsed to the same article through Camping, show the breadcrumb that includes Camping
  - If the user landed on the article from a Google search, show either category as a breadcrumb

### Behavior

- Emphasize breadcrumb hover states with an underline

<cdr-img class="cdr-doc-article-img" alt="Breadcrumb hover state is emphasized using link color and underline" :src="$withBase(`/breadcrumb/Spec__Breadcrumb_Long_16-2.png`)" />

### Do / Don't
<do-dont :examples="$page.frontmatter.path" />


#### Truncation

Indicate hidden links using an ellipsis.

<cdr-img class="cdr-doc-article-img" alt="breadcrumbs truncated with ellipsis" :src="$withBase(`/breadcrumb/Spec__Breadcrumb_Truncated_16-2.png`)" />

Truncate breadcrumbs left to right to show the final two links in the trail, so that at least the parent and grandparent are always visible.

<do-dont :examples="$page.frontmatter.truncation" />


#### Avoid Customization

<do-dont :examples="$page.frontmatter.path_symbol" />


<do-dont :examples="$page.frontmatter.link" />

### Resources

- [REI Navigation Standards: Breadcrumbs](https://confluence.rei.com/display/NAV/Breadcrumb+Guidance)

<hr>

## API

<cdr-icon class="cdr-doc-code-snippet__action-icon" use="#brand-github"/> View it on Github: 
<cdr-link :href="$page.frontmatter.component_location">{{$page.frontmatter.component_location}}</cdr-link>

### Props

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props"/>

**Note:** Truncation only occurs if the ```items``` collection contains more than 2 items and the value is set to ```truncationEnabled=true```.


### Events

<cdr-doc-api type="event" :api-data="$page.frontmatter.versions[0].components[0].api.events" />


### Component Variables

<cdr-doc-comp-vars name="CdrBreadcrumb"/>

### Usage

The ```items``` property requires an array of objects, in the format shown above. Notable values include:

- ```item.url``` (optional) string where the breadcrumb item segment links when clicked or tapped
- ```item.name``` (required) string for the breadcrumb text item segment

The array must be ordered appropriately from low index rendered on the left, to high index on the right.

The below example shows alternatively setting ```items``` using an array literal.
```vue
<cdr-breadcrumb
  :items="[
    {item:{url:'', name: 1}},
    {item:{url:'', name: 2}},
    {item:{url:'', name: 3}}
  ]"
/>
```

Use ```truncationEnabled``` to disable the truncation functionality. The example below shows truncation being disabled.

```vue
<cdr-breadcrumb
  :truncation-enabled="false"
  :items="[
    {item:{url:'', name: 1}},
    {item:{url:'', name: 2}},
    {item:{url:'', name: 3}}
  ]"
/>
```

</cdr-doc-table-of-contents-shell>
