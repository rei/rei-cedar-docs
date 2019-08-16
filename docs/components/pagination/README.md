---
{
  "title": "Pagination",
  "layout_type": "LayoutComponent",
  "summary": "Allows users to navigate to next or previous page when content is split into several pages",
  "title_metadata": "Pagination, CdrPagination",
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
                "description": "$emit event fired when page changes based on user interaction by clicking a link or selecting an option from the select on mobile."
              },
              {
                "name": "input",
                "arguments": "pageNumber, event",
                "description": "$emit event fired when page changes based on user interaction by clicking a link or selecting an option from the select on mobile."
              },
              {
                "name": "select-change",
                "arguments": "pageUrl, event",
                "description": "$emit event fired on select change with the URL value of the selected option. Also triggers the 'change' event (above) with the selected page number."
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

Live code examples for **CdrPagination** can be found on [CodeSandbox](https://codesandbox.io/s/4jnw2l193x).

## Pagination @ SM, MD, LG

At the SM, MD, and LG breakpoints, pagination displays as a list of number text links with Prev and Next links when applicable.

<img :src="$withBase('/pagination/pagination_breakpoint_2x.png')" alt="Image showing full-sized pagination component" />

## Pagination @ XS

At the XS breakpoint, pagination adapts to a Select component using the native UI dropdown menu.

<img :src="$withBase('/pagination/pagination_breakpoint_xs_2x.png')" alt="Image showing responsive pagination component using Select element" />

## Degraded Pagination

For use when only prev and next data is available.

<img :src="$withBase('/pagination/pagination_degradation_2x.png')" alt="Image showing pagination with only previous and next data available" />

## Accessibility

To ensure that usage of this component complies with accessibility guidelines:

- Wrap the pagination links in a `<nav>` element to let screen readers recognize the pagination controls
- Inlcude `role=navigation` if the pagination component is not wrapped in a `<nav>`
- Add `aria-label="pagination"` to describe the type of navigation
- Indicate the active page by adding `aria-current="page"` to the link that points to the current page
- View these videos at [a11ymattters, Accessible Pagination](http://www.a11ymatters.com/pattern/pagination/). They demonstrate before and after pagination tests using a screen reader voiceover

<br />

This component has compliance WCAG guidelines by:
- [WCAG 2.4.8](https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&showtechniques=248#location): Information about the user's location within a set of Web pages is available
- [WCAG 3.2.3](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-consistent-locations.html): Navigation patterns follow a consistent pattern. Only position pagination component at the bottom of the page
- [WCAG 2.4.3](https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#qr-navigation-mechanisms-focus-order): Focus state receives focus in an order that preserves meaning
- [WCAG 2.4.7](https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#qr-navigation-mechanisms-focus-visible): Focus is visible
- [WCAG 2.5.5](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html): Target size for pagination links are large enough for users to easily activate them

</cdr-doc-table-of-contents-shell>
</template>

<template slot="Guidelines">
<cdr-doc-table-of-contents-shell>

## Use When
- Providing navigation to break apart large quantities of content
- Breaking up search result pages into manageable sections

### Don't Use When

- Using lazy load or infinite scroll within an experience
- Switching between slides or content in a carousel
- Displaying editorial content. Instead, show entire article on one page

## Behavior

- Page number links are truncated as follows: [first] ... [current-1] [current] [current+1] ... [last]
- If there are 7 pages or fewer, all page number links will be shown
- Prev or Next text links are removed when the first or last page are active

Within pagination, link styles are adapted

- Text links are displayed as $text-color-primary-on-dark
- Prev and Next links use the small size for the caret-left and caret-right icons


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

## Events

<cdr-doc-api type="event" :api-data="$page.frontmatter.versions[0].components[0].api.events" />

## Usage

The **CdrPagination** component provides a current page number control and renders a list of links. The current page value should be bound using `v-model` in your app.

You will need to enable navigation manually for pagination to work at mobile widths (see below).

The **CdrPagination** component does not make data calls, render or track paginated data, or handle routing beyond simple anchor links. However, it does emit events if you need to customize routing or need to add additional application logic. See section below, "Usage with Vue Router".

### Responsive Behavior and Navigation

The responsive behavior for the **CdrPagination** component automatically converts to **CdrSelect** component rather than a list of links. Values for the **CdrSelect** component are the provided page URL.

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
import { CdrPagination } from '@rei/cedar';
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

### SEO

For best SEO support, use of pagination requires additional markup and logic in the `<head>` of the page.

See REI's SEO Confluence page on [pagination](https://confluence.rei.com/display/SI/Pagination+Tag+Implementation) for information on implementing this correctly on your page.

Note that REI has chosen HTML `<link>` elements instead of HTTP headers. Make sure to use fully qualified absolute URLs in the `<link>` elements instead of relative URLs.

For general recommendations view Google's Search Console page, [Indicating paginated content to Google](https://support.google.com/webmasters/answer/1663744?hl=en).


</cdr-doc-table-of-contents-shell>
</template>

</cdr-doc-tabs>
