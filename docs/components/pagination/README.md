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
                "description": "$emit event fired when page changes based on user interaction by clicking a link or selecting an option from the select on mobile."
              }
            ],
            "scopedSlots": [
              {
                "name": "link",
                "description": "Scoped slot used to override the default page links used. Useful for integrating with client-side routing. See \"Scoped Slots and vue-router\" below for exposed prop API."
              },
              {
                "name": "prevLink",
                "description": "Scoped slot used to override the default previous page link. Useful for integrating with client-side routing. See \"Scoped Slots and vue-router\" below for exposed prop API."
              },
              {
                "name": "nextLink",
                "description": "Scoped slot used to override the default next page link. Useful for integrating with client-side routing. See \"Scoped Slots and vue-router\" below for exposed prop API."
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

<cdr-doc-example-code-pair repository-href="/src/components/accordion" :sandbox-data="$page.frontmatter.sandboxData" :model="{ page: 3, pages: [{page: 1, url: '#'}, {page: 2, url: '#'}, {page: 3, url: '#'}, {page: 4, url: '#'}, {page: 5, url: '#'}] }">

```html
<cdr-pagination
  :pages="pages"
  :total-pages="5"
  v-model="page"
/>
```
</cdr-doc-example-code-pair>

## Link Scoped Slots

The scoped slots can be used to override the default links rendered in the pagination. Useful for integrating with client-side routing, as a `router-link` can be rendered instead of a plain `a` tag. Pagination exposes 3 link scopedSlots: `link`, `prevLink`, and `nextLink`.

The 'link' slot scope exposes the following prop object:

```js
attrs: {
  class,
  'aria-label',
  'aria-current',
  ref:,
},
href,
page,
content,
click,
```

- `class`: a class to be applied to the link in order to match pagination styling
- `aria-label`: default aria-label for this link
- `aria-current`: reflects whether current link is the currently selected page
- `ref`: vue ref for tracking the element. Required for internal component behavior
- `href`: href that the link points to by default
- `page`: the page number that corresponds to this link. NOTE: that you must manually update your v-model attribute to be the value of `page` whenever this link is clicked
- `content`: the default content for that link
- `click`: function ran when element is clicked. Required for internal component behavior

The `prevLink` and `nextLink` slot scopes expose the following prop object:

```js
attrs: {
  class,
  'aria-label',
  ref,
},
href,
page,
content,
iconClass,
iconComponent,
iconPath,
click,
```

- `class`: a class to be applied to the link in order to match pagination styling
- `aria-label`: default aria-label for this link
- `ref`: vue ref for tracking the element for internal component behavior
- `href`: href that the link points to by default
- `page`: the page number that corresponds to this link. NOTE: that you must manually update your v-model attribute to be the value of `page` whenever this link is clicked
- `content`: the default content for that link
- `iconClass`: a class to be applied to the prev/next arrow icon in order to match pagination styling
- `iconPath`: the path to the icon in the [Cedar Icon Library](https://rei.github.io/cedar-icons/#/) used for this link
- `iconComponent`: name of the component used for this link
- `click`: function ran when element is clicked. Required for internal component behavior

<cdr-doc-example-code-pair repository-href="/src/components/accordion" :sandbox-data="$page.frontmatter.sandboxData" :model="{ page: 2, pages: [{page: 1, url: '1'}, {page: 2, url: '2'}, {page: 3, url: '3'}] }">

```html
<cdr-pagination
  :pages="pages"
  :total-pages="3"
  v-model="page"
>
  <!-- Previous -->
  <template slot="prevLink" slot-scope="prevLink">
    <p
      v-bind="prevLink.attrs"
      @click="prevLink.click"
    >
      <component
        :is="prevLink.iconComponent"
        :class="prevLink.iconClass"
      />
      {{ prevLink.content }}
    </p>
  </template>
  <!-- Single Page links -->
  <template slot="link" slot-scope="link">
    <p
      v-bind="link.attrs"
      @click="link.click"
    >
      {{ link.page }}
    </p>
  </template>
  <!-- Next -->
  <template slot="nextLink" slot-scope="nextLink">
    <p
      v-bind="nextLink.attrs"
      @click="nextLink.click"
    >
      {{ nextLink.content }}
      <component
        :is="nextLink.iconComponent"
        :class="nextLink.iconClass"
      />
    </p>
  </template>
</cdr-pagination>
```
</cdr-doc-example-code-pair>

## Pagination @ xs

At the xs breakpoint, pagination adapts to a Select component using the native UI dropdown menu.

<img :src="$withBase('/pagination/pagination_breakpoint_xs_2x.png')" alt="Image showing responsive pagination component using Select element" />

## Accessibility

This component complies with accessibility guidelines by doing the following:

- Wraps the pagination links in a `<nav>` element to let screen readers recognize the pagination controls
- Sets `aria-label="pagination"` to describe the type of navigation
- Indicates the active page by adding `aria-current="page"` to the link that points to the current page

View the videos at [a11ymattters, Accessible Pagination](http://www.a11ymatters.com/pattern/pagination/) for a demonstration of before and after pagination tests using a screen reader voiceover.

<br />

This component has compliance WCAG guidelines by:
- [WCAG 2.4.8](https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&showtechniques=248#location): Information about the user's location within a set of Web pages is available
- [WCAG 3.2.3](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-consistent-locations.html): Navigation patterns follow a consistent pattern. Only position pagination component at the bottom of the page
- [WCAG 2.4.3](https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#qr-navigation-mechanisms-focus-order): Focus state receives focus in an order that preserves meaning
- [WCAG 2.4.7](https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#qr-navigation-mechanisms-focus-visible): Focus is visible
- [WCAG 2.5.5](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html): Target size for pagination links are large enough for users to easily activate them

<hr>

# Guidelines

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

## Props
<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

## Events

<cdr-doc-api type="event" :api-data="$page.frontmatter.versions[0].components[0].api.events" />

## Scoped Slots

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.scopedSlots" />

## Usage

The **CdrPagination** component provides a current page number control and renders a list of links. The current page value should be bound using `v-model` in your app.

The **CdrPagination** component does not make data calls, render or track paginated data, or handle routing beyond simple anchor links. However, it does emit events if you need to customize routing or need to add additional application logic.

## Scoped Slots and vue-router

Previous, next, and individual page links can have their template overridden via scoped slots. While this isn't advisable under normal circumstances, it is necessary to make the component work with vue-router. It is similar to the [scoped slot example](#link-scoped-slots) but uses `router-link` with no click event (when paired with a computed prop v-model):

```vue
<cdr-pagination
  :pages="pages"
  :total-pages="20"
  v-model="page"
>
  <!-- Previous -->
  <template v-slot:prevLink="prevLink">
    <router-link
      v-bind="prevLink.attrs"
      :to="{ query: { 'page': prevLink.page } }"
      replace
    >
      <component
        :is="prevLink.iconComponent"
        :class="prevLink.iconClass"
      />
      {{ prevLink.content }}
    </router-link>
  </template>
  <!-- Single Page links -->
  <template v-slot:link="link">
    <router-link
      v-bind="link.attrs"
      :to="{ query: { 'page': link.page } }"
      replace
    >
      {{ link.page }}
    </router-link>
  </template>
  <!-- Next -->
  <template v-slot:nextLink="nextLink">
    <router-link
      v-bind="nextLink.attrs"
      :to="{ query: { 'page': nextLink.page } }"
      replace
    >
      {{ nextLink.content }}
      <component
        :is="nextLink.iconComponent"
        :class="nextLink.iconClass"
      />
    </router-link>
  </template>
</cdr-pagination>

...

<script>
...
computed: {
  page: {
    get() {
      return parseInt(this.$route.query['page'], 10) || 1;
    },
    set() {
      // No need to do anything for the component here
    },
  },
},
</script>
```

### SEO

For best SEO support, use of pagination requires additional markup and logic in the `<head>` of the page.

See REI's SEO Confluence page on [pagination](https://confluence.rei.com/display/SI/Pagination+Tag+Implementation) for information on implementing this correctly on your page.

Note that REI has chosen HTML `<link>` elements instead of HTTP headers. Make sure to use fully qualified absolute URLs in the `<link>` elements instead of relative URLs.


</cdr-doc-table-of-contents-shell>
