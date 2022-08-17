export const data = {
  "key": "v-b7837d68",
  "path": "/components/breadcrumb/",
  "title": "Breadcrumb",
  "lang": "en-US",
  "frontmatter": {
    "title": "Breadcrumb",
    "layout_type": "LayoutComponent",
    "summary": "Navigation used to reveal a page’s location within the site hierarchy",
    "title_metadata": "CdrBreadcrumb",
    "path": [
      {
        "type": "do",
        "image": "breadcrumb/breadcrumbs_path_do_16-9.png",
        "ratio": "16-9",
        "alt": "Image showing proper breadcrumb paths",
        "caption": "show the full path for breadcrumb items whenever possible."
      },
      {
        "type": "dont",
        "image": "breadcrumb/breadcrumbs_path_outline_dont_16-9.png",
        "ratio": "16-9",
        "alt": "Image showing mixed breadcrumb paths",
        "caption": "show the path that the user takes to arrive at a page."
      }
    ],
    "path_symbol": [
      {
        "type": "do",
        "image": "breadcrumb/breadcrumbs_path_symbol_do_16-9.png",
        "ratio": "16-9",
        "alt": "breadcrumbs separated with a forward slash",
        "caption": "separate breadcrumb items with the \"/\" symbol, automatically added in CSS."
      },
      {
        "type": "dont",
        "image": "breadcrumb/breadcrumbs_path_symbol_outline_dont_16-9.png",
        "ratio": "16-9",
        "alt": "breadcrumbs separated with a right arrow",
        "caption": "create a custom symbol to separate breadcrumb items."
      }
    ],
    "truncation": [
      {
        "type": "do",
        "image": "breadcrumb/breadcrumbs_truncate_do_16-9.png",
        "ratio": "16-9",
        "alt": "truncated breadcrumbs",
        "caption": "use truncation for breadcrumb path."
      },
      {
        "type": "dont",
        "image": "breadcrumb/breadcrumbs_truncate_outline_dont_16-9.png",
        "ratio": "16-9",
        "alt": "breadcrumbs forcing a linebreak",
        "caption": "break the page title when long breadcrumb path is expanded."
      }
    ],
    "link": [
      {
        "type": "do",
        "image": "breadcrumb/breadcrumbs_link_do_16-9.png",
        "ratio": "16-9",
        "alt": "breadcrumbs links in gray",
        "caption": "use gray color tints for breadcrumb items."
      },
      {
        "type": "dont",
        "image": "breadcrumb/breadcrumbs_link_outline_dont_16-9.png",
        "ratio": "16-9",
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
                }
              ],
              "scopedSlots": [
                {
                  "name": "link",
                  "description": "Scoped slot used to override the default links used in the breadcrumb. Useful for integrating with client-side routing. The slot scope exposes the following attributes: class, href, and content.",
                  "alert": {
                    "type": "deprecated",
                    "description": "The link scoped slot has been deprecated, use an event handler on the `navigate` event instead to customize link navigation behavior"
                  }
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
  },
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "Untruncated",
      "slug": "untruncated",
      "children": []
    },
    {
      "level": 2,
      "title": "Custom Navigation",
      "slug": "custom-navigation",
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
      "title": "Use When",
      "slug": "use-when",
      "children": []
    },
    {
      "level": 2,
      "title": "Don’t Use When",
      "slug": "don-t-use-when",
      "children": []
    },
    {
      "level": 2,
      "title": "The Basics",
      "slug": "the-basics",
      "children": []
    },
    {
      "level": 2,
      "title": "Content",
      "slug": "content",
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
          "title": "Truncation",
          "slug": "truncation",
          "children": []
        },
        {
          "level": 3,
          "title": "Avoid Customization",
          "slug": "avoid-customization",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Resources",
      "slug": "resources",
      "children": []
    },
    {
      "level": 2,
      "title": "Props",
      "slug": "props",
      "children": []
    },
    {
      "level": 2,
      "title": "Scoped Slots",
      "slug": "scoped-slots",
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
      "title": "Component Variables",
      "slug": "component-variables",
      "children": []
    },
    {
      "level": 2,
      "title": "Usage",
      "slug": "usage",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1633454782000,
    "contributors": [
      {
        "name": "Cole Willsea",
        "email": "cowills@rei.com",
        "commits": 16
      },
      {
        "name": "Jake Rohr",
        "email": "jrohr@c02r20peg8wl.reicorpnet.com",
        "commits": 8
      },
      {
        "name": "RaunCraig",
        "email": "RaunCraig@users.noreply.github.com",
        "commits": 6
      },
      {
        "name": "Lance Harper",
        "email": "laharpe@rei.com",
        "commits": 6
      },
      {
        "name": "mhewson",
        "email": "mhewson@gmail.com",
        "commits": 5
      },
      {
        "name": "Darin Trimillos",
        "email": "darin@trimillos.com",
        "commits": 5
      },
      {
        "name": "RatulaREI",
        "email": "51766235+RatulaREI@users.noreply.github.com",
        "commits": 4
      },
      {
        "name": "Kristopher Knabel",
        "email": "kknabel@rei.com",
        "commits": 4
      },
      {
        "name": "Darin Trimillos",
        "email": "darintrimillos@users.noreply.github.com",
        "commits": 2
      },
      {
        "name": "michael",
        "email": "mhewson@gmail.com",
        "commits": 2
      },
      {
        "name": "rebecca-larue",
        "email": "53016572+rebecca-larue@users.noreply.github.com",
        "commits": 2
      },
      {
        "name": "shart-rei",
        "email": "43073801+shart-rei@users.noreply.github.com",
        "commits": 2
      },
      {
        "name": "RachelDoren",
        "email": "racheledoren@gmail.com",
        "commits": 1
      },
      {
        "name": "mking18",
        "email": "43073485+mking18@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "components/breadcrumb/README.md"
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
