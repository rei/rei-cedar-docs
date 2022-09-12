export const data = {
  "key": "v-69c3bed6",
  "path": "/components/links/",
  "title": "Links",
  "lang": "en-US",
  "frontmatter": {
    "title": "Links",
    "layout_type": "LayoutComponent",
    "summary": "Clickable text element used to navigate to page section, another page or open an overlaid window such as modal dialog or popover",
    "title_metadata": "Hyperlink, Anchor, CdrButton, CdrLink",
    "see_also": [
      {
        "text": "See Also"
      },
      {
        "text": "Buttons",
        "href": "../buttons/"
      }
    ],
    "standalone": [
      {
        "type": "do",
        "image": "links/links_descriptivetext_do.png",
        "ratio": "16-9",
        "alt": "Image showing proper link usage",
        "caption": "use clear, concise, and descriptive text."
      },
      {
        "type": "dont",
        "image": "links/links_descriptivetext_dont.png",
        "ratio": "16-9",
        "alt": "Image showing click here link",
        "caption": "use “click here” or “start here” for link text."
      }
    ],
    "link": [
      {
        "type": "do",
        "image": "links/links_underlinestyle_text_do.png",
        "ratio": "16-9",
        "alt": "The link in this copy uses the cdr-link component, and, so correctly uses an underline",
        "caption": "underline every link."
      },
      {
        "type": "dont",
        "image": "links/links_underlinestyle_text_dont.png",
        "ratio": "16-9",
        "alt": "The default link in body copy incorrectly does not use an underline",
        "caption": "apply different visual treatments for hyperlinks."
      }
    ],
    "sandboxData": {
      "components": "CdrLink"
    },
    "versions": [
      {
        "components": [
          {
            "name": "CdrLink",
            "api": {
              "props": [
                {
                  "name": "tag",
                  "type": "string",
                  "default": "'a'",
                  "description": "Sets valid HTML element tag. Possible values: {  ‘a’  |  ‘button’  }"
                },
                {
                  "name": "modifier",
                  "type": "string",
                  "default": "N/A",
                  "description": "Modifies the style variant for this component. Possible values: {  ‘standalone’  }"
                },
                {
                  "name": "href",
                  "type": "string",
                  "default": "'#'",
                  "description": "Sets URL to ‘cdr-link’ href property. The tag prop requires value of <a>."
                }
              ],
              "slots": [
                {
                  "name": "default",
                  "description": "Sets the innerHTML for CdrLink. This includes text and html markup for icons."
                }
              ],
              "events": [
                {
                  "description": "All event listeners are passed through to/from the component."
                }
              ]
            }
          }
        ],
        "version": "0.1.0"
      }
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Default (Medium)",
      "slug": "default-medium",
      "children": []
    },
    {
      "level": 2,
      "title": "Standalone",
      "slug": "standalone",
      "children": []
    },
    {
      "level": 2,
      "title": "Icon on Left",
      "slug": "icon-on-left",
      "children": []
    },
    {
      "level": 2,
      "title": "Icon on Right",
      "slug": "icon-on-right",
      "children": []
    },
    {
      "level": 2,
      "title": "Inline Link Button",
      "slug": "inline-link-button",
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
      "title": "Don't Use When",
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
          "title": "Choosing a Button or Link",
          "slug": "choosing-a-button-or-link",
          "children": []
        },
        {
          "level": 3,
          "title": "Do / Don’t",
          "slug": "do-don-t",
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
      "title": "Slots",
      "slug": "slots",
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
      "children": [
        {
          "level": 3,
          "title": "Style Modifier",
          "slug": "style-modifier",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": 1634593747000,
    "contributors": [
      {
        "name": "Cole Willsea",
        "email": "cowills@rei.com",
        "commits": 19
      },
      {
        "name": "RaunCraig",
        "email": "RaunCraig@users.noreply.github.com",
        "commits": 12
      },
      {
        "name": "Lance Harper",
        "email": "laharpe@rei.com",
        "commits": 7
      },
      {
        "name": "cole",
        "email": "48567940+cowills@users.noreply.github.com",
        "commits": 4
      },
      {
        "name": "Darin Trimillos",
        "email": "darin@trimillos.com",
        "commits": 4
      },
      {
        "name": "mhewson",
        "email": "mhewson@gmail.com",
        "commits": 4
      },
      {
        "name": "michael",
        "email": "mhewson@gmail.com",
        "commits": 4
      },
      {
        "name": "RatulaREI",
        "email": "51766235+RatulaREI@users.noreply.github.com",
        "commits": 3
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
        "name": "shart-rei",
        "email": "43073801+shart-rei@users.noreply.github.com",
        "commits": 2
      },
      {
        "name": "mking18",
        "email": "43073485+mking18@users.noreply.github.com",
        "commits": 2
      },
      {
        "name": "RachelDoren",
        "email": "racheledoren@gmail.com",
        "commits": 1
      },
      {
        "name": "mhewson",
        "email": "mhewson@rei.com",
        "commits": 1
      },
      {
        "name": "lancetharper",
        "email": "lancetharper@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "components/links/README.md"
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
