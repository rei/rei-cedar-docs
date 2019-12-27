---
{
  "title": "Breadcrumb",
  "layout_type": "LayoutComponent",
  "summary": "Navigation to reveal a page’s location within the site hierarchy",
  "title_metadata": "CdrBreadcrumb",
  "path": [
    {
      "type": "do",
      "image": "breadcrumb/breadcrumbs_path_do_4-3.png",
      "ratio": "4-3",
      "alt": "Image showing proper breadcrumb paths",
      "caption": "show the full path for breadcrumb items whenever possible."
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
      "caption": "separate breadcrumb items with the \"/\" symbol, automatically added in CSS."
    },
    {
      "type": "dont",
      "image": "breadcrumb/breadcrumbs_path_symbol_dont_4-3.png",
      "ratio": "4-3",
      "alt": "breadcrumbs separated with a right arrow",
      "caption": "create a custom symbol to separate breadcrumb items."
    }
  ],
  "truncation": [
    {
      "type": "do",
      "image": "breadcrumb/breadcrumbs_truncate_do_4-3.png",
      "ratio": "4-3",
      "alt": "truncated breadcrumbs",
      "caption": "use truncation for breadcrumb path."
    },
    {
      "type": "dont",
      "image": "breadcrumb/breadcrumbs_truncate_dont_4-3.png",
      "ratio": "4-3",
      "alt": "breadcrumbs forcing a linebreak",
      "caption": "break the page title when long breadcrumb path is expanded."
    }
  ],
  "link": [
    {
      "type": "do",
      "image": "breadcrumb/breadcrumbs_link_do_4-3.png",
      "ratio": "4-3",
      "alt": "breadcrumbs links in gray",
      "caption": "use gray color tints for breadcrumb items."
    },
    {
      "type": "dont",
      "image": "breadcrumb/breadcrumbs_link_dont_4-3.png",
      "ratio": "4-3",
      "alt": "breadcrumbs links in blue",
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
                "description": "Scoped slot used to override the default links used in the breadcrumb. Useful for integrating with client-side routing. The slot scope exposes the following attributes: class, href, and content."
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

<cdr-doc-table-of-contents-shell>

# Overview

## Default

Complete breadcrumb string with all items visible.

<cdr-doc-example-code-pair repository-href="/src/components/breadcrumb" :sandbox-data="$page.frontmatter.sandboxData" :backgroundToggle="false" :codeMaxHeight= false >
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

Long breadcrumb path shortened to display the last 2 items with hidden links indicated by ellipsis.

<cdr-doc-example-code-pair repository-href="/src/components/breadcrumb" :sandbox-data="$page.frontmatter.sandboxData" :backgroundToggle="false" :codeMaxHeight= false>

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

## Link Scoped Slot

Can be used to override the default links rendered in the breadcrumb. Useful for integrating with client side routing, as a `router-link` can be rendered instead of a plain `a` tag.  The `slot-scope` exposed includes:

- `class`: CSS class to be applied to your override element to match the breadcrumb styling
- `href`: the path that the link points to
- `content`: the text content of that link
- `ref`: a Vue `ref` to bind to your override element

<cdr-doc-example-code-pair repository-href="/src/components/breadcrumb" :sandbox-data="$page.frontmatter.sandboxData" :backgroundToggle="false" :codeMaxHeight= false>

```html
<cdr-breadcrumb :items="[
  {item:{url:'/snowboarding', name: 'Snowboarding'}},
  {item:{url:'/snowboarding/clothing', name: ' Clothing'}}
]">
  <template
    slot="link"
    slot-scope="link"
  >
    <div :class="link.class" @click="console.log(link.href)">
      {{ link.content }}
    </div>
  </template>
</cdr-breadcrumb>
```
</cdr-doc-example-code-pair>

## Accessibility


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

# Guidelines

## Use When

- Helping users understand where they are within the site hierarchy
- Providing a shortcut to explore similar products within common parent categories

## Don’t Use When

- Displaying a top-level page, such as a home or high level category page
- Linking to previous steps of a sequential process

## The Basics

- Avoid displaying breadcrumbs on non-white backgrounds

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
- Display the complete breadcrumb path—not just the previous item—when an ellipsis is clicked or tapped
- When full breadcrumbs path is displayed, it may wrap to 2 or more lines
- Refer to API documentation for how to customize breadcrumb truncation width- Within a breadcrumb, link styles are adapted:
  - Ancestor links are displayed as $sys-color-taken-for-granite
  - Last child link is emphasized as $sys-color-heart-of-darkness
- Emphasize breadcrumb hover states with the  $sys-color-heart-of-darkness color and an underline

<cdr-img class="cdr-doc-article-img" alt="Breadcrumb hover state is emphasized using link color and underline" :src="$withBase(`/breadcrumb/Spec__Breadcrumb_Long_16-2.png`)" />


### Do / Don't
<do-dont :examples="$page.frontmatter.path" />


### Truncation

Indicate hidden links using an ellipsis

<cdr-img class="cdr-doc-article-img" alt="breadcrumbs truncated with ellipsis" :src="$withBase(`/breadcrumb/Spec__Breadcrumb_Truncated_16-2.png`)" />

Truncate breadcrumbs left to right to show the final two links in the trail, so that at least the parent and grandparent are always visible

<do-dont :examples="$page.frontmatter.truncation" />


### Avoid Customization

<do-dont :examples="$page.frontmatter.path_symbol" />

<do-dont :examples="$page.frontmatter.link" />

## Resources

- [REI Navigation Standards: Breadcrumbs](https://confluence.rei.com/display/NAV/Breadcrumb+Guidance)

<hr>

# API

## Props

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props"/>

## Scoped Slots

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.scopedSlots" />

## Usage

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

Use ```truncationEnabled``` to disable the truncation functionality.  Below shows truncation being disabled.

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
