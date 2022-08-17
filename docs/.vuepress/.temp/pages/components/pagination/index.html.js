export const data = {
  "key": "v-051d2c95",
  "path": "/components/pagination/",
  "title": "Pagination",
  "lang": "en-US",
  "frontmatter": {
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
                  }
                },
                {
                  "name": "prevLink",
                  "description": "Scoped slot used to override the default previous page link. Useful for integrating with client-side routing.",
                  "alert": {
                    "type": "deprecated",
                    "description": "The prevLink scoped slot has been deprecated, use an event handler on the `navigate` event instead to customize link navigation behavior"
                  }
                },
                {
                  "name": "nextLink",
                  "description": "Scoped slot used to override the default next page link. Useful for integrating with client-side routing.",
                  "alert": {
                    "type": "deprecated",
                    "description": "The nextLink scoped slot has been deprecated, use an event handler on the `navigate` event instead to customize link navigation behavior"
                  }
                }
              ]
            }
          }
        ],
        "version": "1.0.0"
      }
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Pagination @ sm, md, lg",
      "slug": "pagination-sm-md-lg",
      "children": []
    },
    {
      "level": 2,
      "title": "Intra-Page Navigation",
      "slug": "intra-page-navigation",
      "children": []
    },
    {
      "level": 2,
      "title": "Overriding Default Navigation",
      "slug": "overriding-default-navigation",
      "children": []
    },
    {
      "level": 2,
      "title": "Pagination @ xs",
      "slug": "pagination-xs",
      "children": []
    },
    {
      "level": 2,
      "title": "Accessibility",
      "slug": "accessibility",
      "children": []
    },
    {
      "level": 2,
      "title": "SEO",
      "slug": "seo",
      "children": []
    },
    {
      "level": 2,
      "title": "Use When",
      "slug": "use-when",
      "children": []
    },
    {
      "level": 2,
      "title": "Don't Use When",
      "slug": "don-t-use-when",
      "children": []
    },
    {
      "level": 2,
      "title": "Behavior",
      "slug": "behavior",
      "children": [
        {
          "level": 3,
          "title": "Do / Don't",
          "slug": "do-don-t",
          "children": []
        },
        {
          "level": 3,
          "title": "Responsiveness",
          "slug": "responsiveness",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Props",
      "slug": "props",
      "children": []
    },
    {
      "level": 2,
      "title": "Events",
      "slug": "events",
      "children": []
    },
    {
      "level": 2,
      "title": "Scoped Slots",
      "slug": "scoped-slots",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1623100606000,
    "contributors": [
      {
        "name": "Cole Willsea",
        "email": "cowills@rei.com",
        "commits": 19
      },
      {
        "name": "Darin Trimillos",
        "email": "darin@trimillos.com",
        "commits": 11
      },
      {
        "name": "Lance Harper",
        "email": "laharpe@rei.com",
        "commits": 6
      },
      {
        "name": "RaunCraig",
        "email": "RaunCraig@users.noreply.github.com",
        "commits": 2
      },
      {
        "name": "rebecca-larue",
        "email": "53016572+rebecca-larue@users.noreply.github.com",
        "commits": 2
      },
      {
        "name": "Darin Trimillos",
        "email": "darintrimillos@users.noreply.github.com",
        "commits": 2
      },
      {
        "name": "RatulaREI",
        "email": "51766235+RatulaREI@users.noreply.github.com",
        "commits": 2
      },
      {
        "name": "mking18",
        "email": "43073485+mking18@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "components/pagination/README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
