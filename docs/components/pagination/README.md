---
{
  "title": "Pagination",
  "layout_type": "LayoutComponent",
  "summary": "Allows users to navigate to next or previous page when content is split into several pages",
  "title_metadata": "Pagination, CdrPagination",
  "component_location": "https://github.com/rei/rei-cedar/tree/next/src/components/pagination",
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
      "image": "pagination/pagination_all_do.png",
      "ratio": "16-9",
      "alt": "Image showing pagination page number truncation",
      "caption": "show the first, previous, next, and last page links when possible. If not, use the degraded designs."
    },
    {
      "type": "dont",
      "image": "pagination/pagination_all_dont.png",
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
  "sandboxData": {
    "components": "CdrPagination, CdrIcon"
  },
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
              },
              {
                "name": "linkTag",
                "type": "string",
                "default": "a",
                "description": "Sets which tag type is used to render pagination elements. Possible values: { 'a' | 'button' }"
              },
              {
                "name": "forLabel",
                "type": "string",
                "default": "N/A",
                "description": "Used to customize the aria-label for the root pagination element. For page-level pagination (i.e, pagination that updates the entire page content and changes the URL) this property should be omitted. For intra-page navigation this property should describe the element being paginated, for example: `Pagination for sub-content`"
              }
            ],
            "events": [
              {
                "name": "input",
                "arguments": "pageNumber, event",
                "description": "$emit event fired when page prop value is updated."
              },
              {
                "name": "navigate",
                "arguments": "pageNumber, url, event",
                "description": "$emit event fired when page changes based on user interaction by clicking a link or selecting an option from the select on mobile. `event.preventDefault()` can be used to override the default link navigation behavior"
              }
            ],
            "scopedSlots": [
              {
                "name": "link",
                "description": "Scoped slot used to override the default page links used. Useful for integrating with client-side routing.",
                "alert": {
                  "type": "deprecated",
                  "description": "The link scoped slot has been deprecated, use an event handler on the `navigate` event instead to customize link navigation behavior"
                },
              },
              {
                "name": "prevLink",
                "description": "Scoped slot used to override the default previous page link. Useful for integrating with client-side routing.",
                "alert": {
                  "type": "deprecated",
                  "description": "The prevLink scoped slot has been deprecated, use an event handler on the `navigate` event instead to customize link navigation behavior"
                },
              },
              {
                "name": "nextLink",
                "description": "Scoped slot used to override the default next page link. Useful for integrating with client-side routing.",
                "alert": {
                  "type": "deprecated",
                  "description": "The nextLink scoped slot has been deprecated, use an event handler on the `navigate` event instead to customize link navigation behavior"
                },
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
## Pagination @ sm, md, lg

At the sm, md, and lg breakpoints, pagination displays as a list of number text links. Prev and Next links are also added when applicable.

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" :model="{ page: 3, pages: [{page: 1, url: '#'}, {page: 2, url: '#'}, {page: 3, url: '#'}, {page: 4, url: '#'}, {page: 5, url: '#'}] }">

```html
<cdr-pagination
  :pages="pages"
  :total-pages="5"
  v-model="page"
/>
```
</cdr-doc-example-code-pair>

## Intra-Page Navigation

By default, CdrPagination assumes that you are navigating through pages on a site and will update the URL on change. For content that requires pagination but is part of a larger page the `linkTag` and `forLabel` properties can be used to render a button based pagination. Set `linkTag` to be `"button"` and set the `forLabel` to describe what element is being paginated, for example `"Pagination for user reviews"`

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" :model="{ page: 3, pages: [{page: 1, url: '#'}, {page: 2, url: '#'}, {page: 3, url: '#'}, {page: 4, url: '#'}, {page: 5, url: '#'}] }">

```html
<cdr-pagination
  link-tag="button"
  for-label="Pagination for user reviews"
  :pages="pages"
  :total-pages="5"
  v-model="page"
/>
```
</cdr-doc-example-code-pair>

## Overriding Default Navigation

By default pagination uses anchor elements which navigate the users web browser when clicked. This behavior can be overriden by adding a handler to the `navigate` event which emits `(currentPage, currentUrl, event)` and calling `event.preventDefault()` in the handler function. The `currentPage` and `currentUrl` can then be used to implement router based navigation or programmatically navigate the page. This can also be used in conjunction with the `link-tag` property to render a button based pagination.

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" :model="{ lastNavigation: '', page: 3, pages: [{page: 1, url: '#'}, {page: 2, url: '#'}, {page: 3, url: '#'}, {page: 4, url: '#'}, {page: 5, url: '#'}] }" :methods="{handleNavigation(num, url, e) {e.preventDefault(); this.lastNavigation = num }}">

```html
<div>
  <cdr-pagination
    :pages="pages"
    :total-pages="5"
    v-model="page"
    @navigate="handleNavigation"
  />
  Last Navigation: {{ lastNavigation }}
</div>
```

</cdr-doc-example-code-pair>

## Pagination @ xs

At the xs breakpoint, pagination adapts to a Select component using the native UI dropdown menu.

<img :src="$withBase('/pagination/pagination_breakpoint_xs_2x.png')" alt="Image showing responsive pagination component using Select element" />

## Accessibility

This component complies with accessibility guidelines by doing the following:

- Wraps the pagination links in a `<nav>` element to let screen readers recognize the pagination controls
- Sets `aria-label="pagination"` to describe the type of navigation.
- Indicates the active page by adding `aria-current="page"` to the link that points to the current page

If you are building an intra-page button based pagination, the `forLabel` property must be used to indicate what content is being paginated. For example,

```
<div>
  <div>{{ reviews content }}</div>

  <cdr-pagination
    link-tag="button"
    for-label="pagination for reviews"

    :pages="pages"
    :total-pages="5"
    v-model="page"
  />
</div>

```

<br />

This component has compliance with WCAG guidelines by:
- [WCAG 2.4.8](https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&showtechniques=248#location): Information about the user's location within a set of Web pages is available
- [WCAG 3.2.3](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-consistent-locations.html): Navigation patterns follow a consistent pattern. Only position pagination component at the bottom of the page
- [WCAG 2.4.3](https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#qr-navigation-mechanisms-focus-order): Focus state receives focus in an order that preserves meaning
- [WCAG 2.4.7](https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#qr-navigation-mechanisms-focus-visible): Focus is visible
- [WCAG 2.5.5](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html): Target size for pagination links are large enough for users to easily activate them

<hr>

# Guidelines

## SEO

For best SEO support, use of pagination requires additional markup and logic in the `<head>` of the page.

See REI's SEO Confluence page on [pagination](https://confluence.rei.com/display/SI/Pagination+Tag+Implementation) for information on implementing this correctly on your page.

Note that REI has chosen HTML `<link>` elements instead of HTTP headers. Make sure to use fully qualified absolute URLs in the `<link>` elements instead of relative URLs.

## Use When
- Providing navigation to break apart large quantities of content
- Breaking up search result pages into manageable sections

## Don't Use When

- Using lazy load or infinite scroll within an experience
- Switching between slides or content in a carousel
- Displaying editorial content. Instead, show entire article on one page

## Behavior

- Page number links are truncated as follows: [first] ... [current-1] [current] [current+1] ... [last]
- If there are 7 pages or fewer, all page number links will be shown
- Prev or Next text links are removed when the first or last page are active

Within pagination, link styles are adapted

- Text links are displayed as the primary text color
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

<hr>

# API

<cdr-icon class="cdr-doc-code-snippet__action-icon" use="#brand-github"/> View it on Github: 
<cdr-link :href="$page.frontmatter.component_location">{{$page.frontmatter.component_location}}</cdr-link>

## Props
<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

## Events

<cdr-doc-api type="event" :api-data="$page.frontmatter.versions[0].components[0].api.events" />

## Scoped Slots

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.scopedSlots" />

</cdr-doc-table-of-contents-shell>
