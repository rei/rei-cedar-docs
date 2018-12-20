---
{
  "title": "Pagination",
  "layout": "LayoutComponent",
  "summary": "Allows users to navigate to next or previous page when content is split into several pages",
  "title_metadata": "CTA, CTA Button, CdrCta",
  "align": [
    {
      "type": "do",
      "image": "pagination/pagination_align_do_16-9.png",
      "ratio": "16-9",
      "alt": "Image showing center-aligned pagination",
      "caption": "center align pagination beneath search results."
    },
    {
      "type": "dont",
      "image": "pagination/pagination_align_dont_16-9.png",
      "ratio": "16-9",
      "alt": "Image showing right-aligned pagination",
      "caption": "right or left align pagination."
    }
  ],
  "placement": [
    {
      "type": "do",
      "image": "pagination/pagination_placement_do_16-9.png",
      "ratio": "16-9",
      "alt": "Image showing pagination at bottom of page below search results",
      "caption": "place pagination at the bottom of search results."
    },
    {
      "type": "dont",
      "image": "pagination/pagination_placement_dont_16-9.png",
      "ratio": "16-9",
      "alt": "Image showing pagination above search results",
      "caption": "place pagination above search results."
    }
  ],
  "truncate": [
    {
      "type": "do",
      "image": "pagination/pagination_all_do_16-9.png",
      "ratio": "16-9",
      "alt": "Image showing pagination page number truncation",
      "caption": "show the first, previous, next, and last page links when possible. If not, use the degraded designs."
    },
    {
      "type": "dont",
      "image": "pagination/pagination_all_dont_16-9.png",
      "ratio": "16-9",
      "alt": "Image showing pagination with all page numbers",
      "caption": "show all available pages."
    }
  ],
  "breadcrumbs": [
    {
      "text": "Components/"
    }
  ],
  "versions": [
    {
      "components": [
        {
          "name": "CdrPagination",
          "api": {
            "props": [
              {
                "name": "pages",
                "type": "array",
                "default": "N/A",
                "description": "Array of objects containing pagination data. Objects have structure of { page: number, url: string }. Required."
              },
              {
                "name": "totalPages",
                "type": "number",
                "default": "null",
                "description": "Sets the total number of pages for displaying \"Page x of <totalPages>\". Sometimes the total number of pages is different than total page data objects in the pages array. For example, if only the next and previous pages are provided."
              }
            ],
            "events": [
              {
                "name": "change",
                "arguments": "pageNumber, event",
                "notes": "$emit event fired when page changes based on user interaction by clicking a link or selecting an option from the select on mobile."
              },
              {
                "name": "select-change",
                "arguments": "pageUrl, event",
                "notes": "$emit event fired on select change with the URL value of the selected option. Also triggers the 'change' event (above) with the selected page number."
              }
            ]
          }
        }
      ],
      "version": "1.0.0"
    }
  ],
  "see_also": [
    {
      "text": "See Also"
    },
    {
      "text": "Buttons",
      "href": "../buttons/"
    },
    {
      "text": "Links",
      "href": "../links/"
    }
  ]
}
---

<cdr-doc-tabs>
<template slot="Overview">
<cdr-doc-table-of-contents-shell>

## Dark

Use dark Call to Action over a light background image or color to provide proper contrast. This is the default Call to Action style.

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.08.1/src/components/cta" sandbox-href="https://codesandbox.io/s/9ojj43x1op">

```html
  <cdr-cta 
    href="https://rei.com"
    cta-style="dark"
  >
    Explore travel tips &amp; gear
  </cdr-cta>
```

</cdr-doc-example-code-pair>

## Light

Use light Call to Action over a dark background image or color to provide proper contrast.

<cdr-doc-example-code-pair repository-href="https://github.com/rei/rei-cedar/tree/18.08.1/src/components/cta" sandbox-href="https://codesandbox.io/s/9ojj43x1op">

```html
  <cdr-cta 
    href="https://rei.com"
    cta-style="light"
  >
    Explore travel tips &amp; gear
  </cdr-cta>
```

</cdr-doc-example-code-pair>

## Accessibility



</cdr-doc-table-of-contents-shell>
</template>

<template slot="Design Guidelines">
<cdr-doc-table-of-contents-shell>

## Use when
- Providing navigation to break apart large quantities of content
- Breaking up search result pages into manageable sections

### Don't use when

- Using lazy load or infinite scroll within an experience
- Switching between slides or content in a carousel
- Displaying editorial content. Instead, show entire article on one page

## Foundation

Within pagination, link styles are adapted

- Text links are displayed as $text-color-primary-on-dark
- Prev and Next links use the small size for the caret-left and caret-right icons

## Behavior

- Page number links are truncated as follows: [first] ... [current-1] [current] [current+1] ... [last]
- If there are 7 pages or fewer, all page number links will be shown
- Prev or Next text links are removed when the first or last page are active

### Do / Don't

By default, pagination is center aligned under category or search results content.

<do-dont :examples="$page.frontmatter.align" />

<br />

The primary placement for pagination is at the bottom of a page that displays rows of content.

<do-dont :examples="$page.frontmatter.placement" />

<br />

Use pagination logic to truncate link list, when possible.

<do-dont :examples="$page.frontmatter.truncate" />

### Responsiveness

Pagination adapts to a Select component with a native UI dropdown menu on XS breakpoints to provide a mobile-friendly experience.


</cdr-doc-table-of-contents-shell>
</template>

<template slot="API">
<cdr-doc-table-of-contents-shell>
  
## Props
<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

## Slots

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />

## Installation

Resources are available with the [CdrPagination package](https://www.npmjs.com/package/@rei/cdr-pagination):

<cdr-doc-api type="installation" />

- Component: `@rei/cdr-pagination`
- Component styles: `cdr-pagination.css`

<br />

To incorporate the required assets for a component, use the following steps:

### 1. Install using NPM

Install the **CdrPagination** package using `npm` in your terminal:

_Terminal_

```bash
npm i -s @rei/cdr-pagination
```

### 2. Import Dependencies

_main.js_

```javascript
// import your required CSS
import "@rei/cdr-pagination/dist/cdr-pagination.css";
```

### 3. Add component to a template

_local.vue_

```vue
<template>
  ...
    <cdr-pagination
      :pages="pageData"
      :total-pages="pageData.length"
      v-model="ex1Page"
    />
  ...
</template>

<script>
import { CdrPagination } from '@rei/cdr-pagination;
export default {
  ...
  components: {
     CdrPagination  
  },
  data() {
    return {
      ex1Page: 1,
      pageData: [
        { page: 1, url: 'https://www.rei.com/search?page=1' },
        { page: 2, url: 'https://www.rei.com/search?page=2' },
        { page: 3, url: 'https://www.rei.com/search?page=3' }
      ]
    };
  },
}
</script>
```

## Usage

The **CdrPagination** component provides a current page number control and renders a list of links. The current page value should be bound via `v-model` in your app.

You will need to enable navigation manually for pagination to work at mobile widths (see below).

The **CdrPagination** component does not make data calls, render or track paginated data, or handle routing beyond simple anchor links. However, it does emit events if you need to customize routing or need to add additional application logic. See section below, "Usage with Vue Router".

### Responsive behavior and navigation

The responsive behavior for the **CdrPagination** component automatically converts to **CdrSelect** component rather than a list of links. Values for the **CdrSelect** compnent are the provided page URL.

If not using Vue Router (see "Usage with Vue Router" below) you will need to manually update window location by using the `select-change` event.

```vue
<template>
  ...
     <cdr-pagination
       :pages="pageData"
       :total-pages="pageData.length"
       v-model="ex1Page"
       @select-change="selectNavigate"      
     />
  ...
</template>

<script>
import { CdrPagination } from '@rei/cdr-pagination;
export default {
  ...
  components: {
     CdrPagination  
  },
  data() {
    Return {
      ex1Page: 1,
      pageData: [
        { page: 1, url: 'https://www.rei.com/search?page=1' },
        { page: 2, url: 'https://www.rei.com/search?page=2' },
        { page: 3, url: 'https://www.rei.com/search?page=3' }
      ]
    };
  },
  methods: {
    selectNavigate(url, e) {
      window.location = url;
    },
  },
}
</script>
```

### Usage with Vue Router

Page URLs still need to be provided for SEO purposes, but the events emitted by the component can be used for routing using Vue Router by modifying $route in a method.

```vue
<template>
  ...
     <cdr-pagination
       :pages="pageData"
       :total-pages="pageData.length"
       v-model="ex1Page"
       @change="vueNavigate"      
     />
  ...
</template>

<script>
import { CdrPagination } from '@rei/cdr-pagination;
export default {
  ...
  components: {
     CdrPagination  
  },
  data() {
    Return {
      ex1Page: 1,
      pageData: [
        { page: 1, url: 'https://www.rei.com/search?page=1' },
        { page: 2, url: 'https://www.rei.com/search?page=2' },
        { page: 3, url: 'https://www.rei.com/search?page=3' }
      ]
    };
  },
  methods: {
    vueNavigate(num, e) {
           e.preventDefault();
           this.$router.replace({ query: Object.assign({}, this.$route.query, { 'router-query’: num }) });
       },
  },
}
</script>
```

### SEO

For best SEO support, use of pagination requires additional markup and logic in the `<head>` of the page.

See REI's SEO Confluence page on [pagination](https://confluence.rei.com/display/SI/Pagination+Tag+Implementation) for information on implementing this correctly on your page.

Note that REI has chosen HTML `<link>` elements instead of HTTP headers. Make sure to use fully qualified absolute URLs in the `<link>` elements instead of relative URLs.

For general recommendations view Google's Search Console page, [Indicating paginated content to Google](https://support.google.com/webmasters/answer/1663744?hl=en).


</cdr-doc-table-of-contents-shell>
</template>

<template slot="History">

## 1.0.0

- Organizes page numbers and URLs into links with logic for display truncation
- Responsive behavior using the Select component
- Emits events for link click ('change') and select change ('select-change')
- Incorporates accessibility and SEO compliant features
- Git commit reference 

</template>
</cdr-doc-tabs>