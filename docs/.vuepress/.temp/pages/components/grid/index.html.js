export const data = {
  "key": "v-76c3de69",
  "path": "/components/grid/",
  "title": "CSS Grid",
  "lang": "en-US",
  "frontmatter": {
    "title": "CSS Grid",
    "layout_type": "LayoutComponent",
    "summary": "Wrapper for working with CSS Grid",
    "title_metadata": "CdrGrid",
    "breadcrumbs": [
      {
        "text": "Components/"
      }
    ],
    "consistent": [
      {
        "type": "do",
        "image": "grid/grid_consistent_do_16-9.png",
        "alt": "Image showing proper grid usage",
        "caption": "maintain a consistent grid system."
      },
      {
        "type": "dont",
        "image": "grid/grid_consistent_dont_16-9.png",
        "alt": "Image showing mixed grid usage",
        "caption": "mix this grid and other grid systems."
      }
    ],
    "margins": [
      {
        "type": "do",
        "image": "grid/grid_margins_do_16-9.png",
        "alt": "Image showing grid margins",
        "caption": "maintain global margins."
      },
      {
        "type": "dont",
        "image": "grid/grid_margins_dont_16-9.png",
        "alt": "Image showing overly large side margins",
        "caption": "make margins too large."
      }
    ],
    "gutters": [
      {
        "type": "do",
        "image": "grid/grid_gutters_do_16-9.png",
        "alt": "Image showing grid gutters",
        "caption": "maintain global gutters."
      },
      {
        "type": "dont",
        "image": "grid/grid_gutters_dont_16-9.png",
        "alt": "Image showing overly large grid gutters",
        "caption": "make gutters too large."
      }
    ],
    "sandboxData": {
      "components": "CdrGrid",
      "styleTag": ".grid-2-example div { border: 1px solid lightblue;}"
    },
    "versions": [
      {
        "components": [
          {
            "name": "CdrGrid",
            "api": {
              "props": [
                {
                  "name": "gutter",
                  "type": "string",
                  "default": "N/A",
                  "description": "Defines gutter size. Default gutter size is 16px for @xs and @sm (medium) and 32px for @md and @lg (large). Possible values: {  ‘none’  |  ‘small’ | 'medium' | 'large' }. Also accepts responsive values @breakpoint:  none@md’."
                },
                {
                  "name": "tag",
                  "type": "string",
                  "default": "div",
                  "description": "Sets the tag type for the CdrGrid element. Accepts any HTML tag name that can function using `display: grid`. Useful for constructing list based layouts."
                }
              ],
              "slots": [
                {
                  "name": "default",
                  "description": "Slot for CdrGrid content."
                }
              ]
            }
          }
        ]
      }
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Overview",
      "slug": "overview",
      "children": [
        {
          "level": 3,
          "title": "Column Layout",
          "slug": "column-layout",
          "children": []
        },
        {
          "level": 3,
          "title": "Justify",
          "slug": "justify",
          "children": []
        },
        {
          "level": 3,
          "title": "Align",
          "slug": "align",
          "children": []
        },
        {
          "level": 3,
          "title": "Gutter",
          "slug": "gutter",
          "children": []
        },
        {
          "level": 3,
          "title": "Scrolling Grid",
          "slug": "scrolling-grid",
          "children": []
        },
        {
          "level": 3,
          "title": "List Markup",
          "slug": "list-markup",
          "children": []
        },
        {
          "level": 3,
          "title": "Span",
          "slug": "span",
          "children": []
        },
        {
          "level": 3,
          "title": "Complex Span",
          "slug": "complex-span",
          "children": []
        },
        {
          "level": 3,
          "title": "Offset",
          "slug": "offset",
          "children": []
        },
        {
          "level": 3,
          "title": "Nested Grids",
          "slug": "nested-grids",
          "children": []
        },
        {
          "level": 3,
          "title": "Responsive Grids",
          "slug": "responsive-grids",
          "children": []
        },
        {
          "level": 3,
          "title": "Handling Leftover Columns",
          "slug": "handling-leftover-columns",
          "children": []
        },
        {
          "level": 3,
          "title": "Named Grid Areas",
          "slug": "named-grid-areas",
          "children": []
        },
        {
          "level": 3,
          "title": "Accessibility",
          "slug": "accessibility",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Guidelines",
      "slug": "guidelines",
      "children": [
        {
          "level": 3,
          "title": "Use When",
          "slug": "use-when",
          "children": []
        },
        {
          "level": 3,
          "title": "Don't Use When",
          "slug": "don-t-use-when",
          "children": []
        },
        {
          "level": 3,
          "title": "The Basics",
          "slug": "the-basics",
          "children": []
        },
        {
          "level": 3,
          "title": "Anatomy",
          "slug": "anatomy",
          "children": []
        },
        {
          "level": 3,
          "title": "Content",
          "slug": "content",
          "children": []
        },
        {
          "level": 3,
          "title": "Behavior",
          "slug": "behavior",
          "children": []
        },
        {
          "level": 3,
          "title": "Do/Don't",
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
      "title": "API",
      "slug": "api",
      "children": [
        {
          "level": 3,
          "title": "Props",
          "slug": "props",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Slots",
      "slug": "slots",
      "children": [
        {
          "level": 3,
          "title": "Usage",
          "slug": "usage",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": 1634337680000,
    "contributors": [
      {
        "name": "Lance Harper",
        "email": "laharpe@rei.com",
        "commits": 19
      },
      {
        "name": "Cole Willsea",
        "email": "cowills@rei.com",
        "commits": 16
      },
      {
        "name": "Darin Trimillos",
        "email": "darin@trimillos.com",
        "commits": 6
      },
      {
        "name": "RaunCraig",
        "email": "RaunCraig@users.noreply.github.com",
        "commits": 5
      },
      {
        "name": "Ben Griffin",
        "email": "bgriffi@rei.com",
        "commits": 3
      },
      {
        "name": "mhewson",
        "email": "mhewson@gmail.com",
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
        "name": "michael",
        "email": "mhewson@gmail.com",
        "commits": 1
      },
      {
        "name": "mking18",
        "email": "43073485+mking18@users.noreply.github.com",
        "commits": 1
      },
      {
        "name": "RachelDoren",
        "email": "racheledoren@gmail.com",
        "commits": 1
      },
      {
        "name": "shart-rei",
        "email": "43073801+shart-rei@users.noreply.github.com",
        "commits": 1
      },
      {
        "name": "RatulaREI",
        "email": "51766235+RatulaREI@users.noreply.github.com",
        "commits": 1
      },
      {
        "name": "cole",
        "email": "48567940+cowills@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "components/grid/README.md"
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
