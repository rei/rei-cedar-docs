---
{
  "title": "Breadcrumb",
  "layout": "LayoutComponent",
  "summary": "Navigation to reveal a page’s location within the site hierarchy.",
  "title_metadata": "Breadcrumb, cdrBreadcrumb",
	  "path": [
      {
        "type": "do",
        "image": "breadcrumb/breadcrumbs_path_do_4-3.png",
        "ratio": "4-3",
        "alt": "Image showing proper breadcrumb paths",
        "caption": "show the full path for breadcrumbs whenever possible."
      },
      {
        "type": "dont",
        "image": "breadcrumb/breadcrumbs_path_dont_4-3.png",
        "ratio": "4-3",
        "alt": "Image showing mixed breadcrumb paths",
        "caption": "show the path that the user takes to arrive at a page."
      }
    ],
    "path_symbol": [
      {
        "type": "do",
        "image": "breadcrumb/breadcrumbs_path_symbol_do_4-3.png",
        "ratio": "4-3",
        "alt": "breadcrumbs separated with a forward slash",
        "caption": "separate breadcrumbs with the \"/\" symbol, automatically added in CSS."
      },
      {
        "type": "dont",
        "image": "breadcrumb/breadcrumbs_path_symbol_dont_4-3.png",
        "ratio": "4-3",
        "alt": "breadcrumbs separated with a right arrow",
        "caption": "create a custom symbol to separate breadcrumbs."
      }
    ],
    "truncation": [
      {
        "type": "do",
        "image": "breadcrumb/breadcrumbs_truncate_do_4-3.png",
        "ratio": "4-3",
        "alt": "truncated breadcrumbs",
        "caption": "use truncated breadcrumbs."
      },
      {
        "type": "dont",
        "image": "breadcrumb/breadcrumbs_truncate_dont_4-3.png",
        "ratio": "4-3",
        "alt": "breadcrumbs forcing a linebreak",
        "caption": "break the page title when long breadcrumbs are expanded."
      }
    ],
    "link": [
      {
        "type": "do",
        "image": "breadcrumb/breadcrumbs_link_do_4-3.png",
        "ratio": "4-3",
        "alt": "breadcrumbs links in gray",
        "caption": "use gray color tints for breadcrumbs."
      },
      {
        "type": "dont",
        "image": "breadcrumb/breadcrumbs_link_dont_4-3.png",
        "ratio": "4-3",
        "alt": "breadcrumbs links in blue",
        "caption": "color breadcrumbs blue."
      }
    ],
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
                "description": "An array of breadcrumb objects that each contain a \"url\" and \"name\" property"
              },
              {
                "name": "truncationEnabled",
                "type": "boolean",
                "default": "true",
                "description": "Controls the ability to truncate. If a user sets this to false, truncation will no longer occur"
              },
              {
                "name": "truncationThreshold",
                "type": "number",
                "default": 0.80,
                "description": "This property respresents the ratio between breadcrumb width vs container width that truncation will occur"
              },
              {
                "name": "truncationXSThreshold",
                "type": "number",
                "default": 1,
                "description": "This property respresents the ratio between breadcrumb width vs container width that truncation will occur on the XS breakpoint"
              }
            ],
            "installation": [
              {
                "name": "@rei/cdr-breadcrumb",
                "type": "Node module package",
                "description": "Import the component into your project"
              },
              {
                "name": "cdr-breadcrumb.css",
                "type": "css",
                "description": "Component specific styles"
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

Complete breadcrumb string with all items visible.

<cdr-doc-example-code-pair repository-href="https://github.com/rei/rei-cedar/tree/18.07.2/src/components/breadcrumb" sandbox-href="https://codesandbox.io/s/mm9qpyjojp" :backgroundToggle="false" :codeMaxHeight= false >

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

## Truncated

Long breadcrumbs shortened to display the last 2 links in the trail, with hidden links indicated by ellipsis.

<cdr-doc-example-code-pair repository-href="https://github.com/rei/rei-cedar/tree/18.07.2/src/components/breadcrumb" sandbox-href="https://codesandbox.io/s/mm9qpyjojp" :backgroundToggle="false" :codeMaxHeight= false>

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
</cdr-doc-table-of-contents-shell>
</template>

<template slot="Design Guidelines">
<cdr-doc-table-of-contents-shell>

  <cdr-doc-alert/>

## Use when

- Helping users understand where they are within the site hierarchy
- Providing a shortcut to explore similar products within common parent categories

## Don’t use when

- Displaying a top-level page, such as a home or high level category page
- Linking to previous steps of a sequential process

## Foundations

- Avoid displaying breadcrumbs on non-white backgrounds
- Within a breadcrumb, link styles are adapted:
  - Ancestor links are displayed as $sys-color-taken-for-granite
  - Last child link is emphasized as $sys-color-heart-of-darkness
- Emphasize breadcrumb hover states with the  $sys-color-heart-of-darkness color and an underline

<cdr-img alt="Breadcrumb hover state is emphasized using link color and underline" :src="$withBase(`/breadcrumb/Spec__Breadcrumb_Long_16-2.png`)" />

## Content
- Always align breadcrumb labels with page names that are the destination of that breadcrumb
- Incorporate keywords into page names and breadcrumbs to improve SEO
- Align breadcrumb labels with words customers use while searching for products, events, adventures or expert advice
- Never include the current page in a breadcrumb path. Instead, display that label only as a page title
- Guidelines for applying breadcrumb category names are found in the [REI Navigation Standards: Breadcrumbs](https://confluence.rei.com/display/NAV/Breadcrumb+Guidance) article
- For items in multiple categories and no primary path has been identified, display the most relevant path:
  - If an article lives in both Hiking and Camping, and the user browsed to the article through Hiking, show the breadcrumb that includes Hiking
  - If the user browsed to the same article through Camping, show the breadcrumb that includes Camping
  - If the user landed on the article from a Google search, show either category as a breadcrumb

## Behavior

Breadcrumbs provide context and a sense of place. This is especially important on a small screen, where other orienting content isn’t visible.

- Include the full location path data once and only once in the code
- Always retain the full location path in page markup, even if shortened due to responsive styling

<do-dont :examples="$page.frontmatter.path" />

### Truncation

- Truncate breadcrumbs at 80% width of the screen’s content container except for mobile (that truncates at 100%) as shown below

<cdr-img alt="breadcrumbs truncated to 80 percent of the container" :src="$withBase(`/breadcrumb/Spec__Breadcrumb_Truncated_with_Grid_16-4.png`)" />

- Truncate breadcrumbs left to right to show the final two links in the trail, so that at least the parent and grandparent are always visible

<do-dont :examples="$page.frontmatter.truncation" />

- Indicate hidden links using an ellipsis

<cdr-img alt="breadcrumbs truncated with ellipsis" :src="$withBase(`/breadcrumb/Spec__Breadcrumb_Truncated_16-2.png`)" />

- Display the complete breadcrumb path—not just that item—when an ellipsis is clicked or tapped
- When full breadcrumbs path is displayed, it may wrap to 2 or more lines
- Refer to API documentation for how to customize breadcrumb truncation width

### Avoid customization

<do-dont :examples="$page.frontmatter.path_symbol" />

<do-dont :examples="$page.frontmatter.link" />

## Accessibility

- Web browsers, plug-ins, and assistive technologies use headings to provide in-page navigation. To ensure that usage of this component complies with accessibility guidelines, do the following:
  - Indicate the current page location within a hierarchy using breadcrumbs
  - Do not include the current page in breadcrumb path Instead, use sentence case
- This component has compliance with following WebAIM’s accessibility guidelines:
  - [WCAG SC 1.4.3: Contrast (Minimum)](https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast): Cedar Design System text color uses a Level AA contrast ratio of 4.5:1 contrast between the text color and the background
  - [WCAG SC 2.4.8:Location](https://www.w3.org/TR/WCAG20/#navigation-mechanisms-location): Cedar Design System breadcrumb component provides this functionality

## Resources

- [REI Navigation Standards: Breadcrumbs](https://confluence.rei.com/display/NAV/Breadcrumb+Guidance)

</cdr-doc-table-of-contents-shell>
</template>

<template slot="API">
<cdr-doc-table-of-contents-shell>

## Props

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props"/>

## Installation

Resources are available within the [cdr-breadcrumb package](https://www.npmjs.com/package/@rei/cdr-breadcrumb):

<cdr-doc-api type="installation" />

- Component: `@rei/cdr-breadcrumb`
- Component styles: `cdr-breadcrumb.css`

To incorporate the required assets for a component, use the following steps:

### #1. Install using NPM

Install the `cdr-breadcrumb` package using `npm` in your terminal:

_Terminal_

```bash
npm i -S @rei/cdr-breadcrumb
```

### #2. Import Dependencies

_main.js_

```javascript
// import your required css.
import "@rei/cdr-breadcrumb/dist/cdr-breadcrumb.css";
```

### #3. Add component to a template

_local.vue_

```vue
<template>
  <cdr-breadcrumb :items="breadcrumbItems"/>
</template>

<script>
import { CdrBreadcrumb } from '@rei/cdr-breadcrumb';
export default {

  components: {
     CdrBreadcrumb
  },
  data () {
    breadcrumbItems: [
      {
        item: {
          name: ‘Great GrandParent Page’,
          url: “<UrlBreadcrumb1>”
        }
      },
      {
        item: {
          name: “Grandparent Page”,
          url: “<UrlBreadcrumb2>”
        }
      }
      {
        item: {
          name: “Parent Page”,
          url: “<UrlBreadcrumb3>”
        }
      }
    ]
  }
}
</script>
```

## Usage

The ```items``` property requires an array of objects, in the format shown above. Notable values include:

- ```item.url (optional)``` string where the breadcrumb item segment links when clicked or tapped
- ```item.name (required)```  string for the breadcrumb text item segment

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

Use ```truncationEnabled``` to disable the truncation functionality.  Below shows truncation being disabled.

```vue
<cdr-breadcrumb
  :truncation-enabled="false"
  :items="[
    {url:'', name: 1},
    {url:'', name: 2},
    {url:'', name: 3}
  ]"
/>
```

Use the ```truncationThreshold``` prop to alter when truncation occurs:

- value must be a number between 0 and 1
- Truncation occurs when (breadcrumb width)/(container width) exceeds the ```truncationThreshold``` value

The default value is 0.80 ( 80% ).

Below shows using ```truncationThreshold``` to set truncation to occur at 50%.

<cdr-img alt="Breadcrumb with truncation threshold at 50% and 80%" :src="$withBase(`/breadcrumb/Spec_API___Breadcrumb_Truncated_Threshold_50to80_16-4.png`)" />

```vue
<cdr-breadcrumb
  :truncation-threshold="0.50"
  :items="breadcrumbItems"
/>
```
Use the ```truncationXSThreshold``` prop to alter when truncation occurs:

- value must be a number between 0 and 1
- Truncation occurs when (breadcrumb width)/(container width) exceeds the ```truncationXSThreshold``` value on XS screen sizes

The default value is 1 ( 100% ).

Below shows using ```truncationXSThreshold``` to set truncation to occur at 70%.

<cdr-img alt="Breadcrumb with truncation XS  threshold at 70%" :src="$withBase(`/breadcrumb/Spec_API___Breadcrumb_Truncated_XSThreshold_70to100_16-4.png`)" />

```vue
<cdr-breadcrumb
  :truncation-x-s-threshold=“0.70”
  :items="breadcrumbItems"
/>
```

## Accessibility

Web browsers, plug-ins, and assistive technologies use headings to provide in-page navigation. To ensure that usage of this component complies with accessibility guidelines, do the following:

- Indicate the current page location within a hierarchy using breadcrumbs
- Do not include the current page in breadcrumb path

This component has compliance with following WebAIM’s accessibility guidelines:
  - [WCAG SC 1.4.3: Contrast (Minimum)](https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast): Only when displayed on light backgrounds, Cedar Design System text color uses a Level AA contrast ratio of 4.5:1 contrast between the text color and the background
  - [WCAG SC 2.4.8:Location](https://www.w3.org/TR/WCAG20/#navigation-mechanisms-location): Cedar Design System breadcrumb component provides this functionality
    - The attribute aria-label=”Breadcrumb” in the ```<nav>``` element identifies the structure of  ```cdr-breadcrumb as a breadcrumb``` trail for screen readers
    - The final breadcrumb link element must not link to the current page because the ```aria-current``` attribute is not defined for the last item
    - The ellipsis button contains the ```aria-expanded="false"``` attribute when the user has the ability to expand the breadcrumb

</cdr-doc-table-of-contents-shell>
</template>

<template slot="History">

## 1.0.0

- Displays as an inline list with links to previous sections
- Truncates when entire breadcrumb string gets too long
- Enables customization of whitespace threshold to the right, by default and in narrow viewports
- Incorporates accessibility and SEO compliant features

Git commit reference [08b883c](https://github.com/rei/rei-cedar/commit/08b883c)

</template>
</cdr-doc-tabs>
