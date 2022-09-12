export const data = {
  "key": "v-91e549b2",
  "path": "/components/accordion/",
  "title": "Accordion",
  "lang": "en-US",
  "frontmatter": {
    "title": "Accordion",
    "layout_type": "LayoutComponent",
    "summary": "Vertically-stacked list that allows users to expand and collapse additional content",
    "title_metadata": "CdrAccordion, CdrAccordionGroup",
    "breadcrumbs": [
      {
        "text": "Components/"
      }
    ],
    "name": "CdrAccordion",
    "nesting": [
      {
        "type": "do",
        "image": "accordion/accordion_nest_do_4-3.png",
        "ratio": "4-3",
        "alt": "Image showing proper accordion usage",
        "caption": "present content in a single accordion."
      },
      {
        "type": "dont",
        "image": "accordion/accordion_nest_dont_4-3.png",
        "ratio": "4-3",
        "alt": "Image showing nested accordions",
        "caption": "nest accordions."
      }
    ],
    "titles": [
      {
        "type": "do",
        "image": "accordion/accordion_title_do_4-3.png",
        "ratio": "4-3",
        "alt": "Image showing short and succinct accordion titles",
        "caption": "keep titles short and concise."
      },
      {
        "type": "dont",
        "image": "accordion/accordion_title_dont_4-3.png",
        "ratio": "4-3",
        "alt": "Image showing a too long accordion title wrapped to many lines",
        "caption": "create labels so lengthy that they wrap to a second line."
      }
    ],
    "sandboxData": {
      "components": "CdrAccordionGroup, CdrAccordion, CdrText"
    },
    "versions": [
      {
        "components": [
          {
            "name": "CdrAccordion",
            "api": {
              "props": [
                {
                  "name": "id",
                  "type": "string",
                  "default": "N/A",
                  "description": "Unique id required."
                },
                {
                  "name": "level",
                  "type": "string, number",
                  "default": "N/A",
                  "description": "Set the heading that wraps the button to the appropriate level for the page. This aids in accesibility and navigaiton for keyboard users."
                },
                {
                  "name": "opened",
                  "type": "boolean",
                  "default": "false",
                  "description": "Toggle to open/close the accordion."
                },
                {
                  "name": "compact",
                  "type": "boolean",
                  "default": "false",
                  "description": "Sets the compact style."
                },
                {
                  "name": "borderAligned",
                  "type": "boolean",
                  "default": "false",
                  "description": "Sets the border-aligned style."
                },
                {
                  "name": "contentSpacing",
                  "type": "boolean",
                  "default": "true",
                  "description": "Sets the content spacing style"
                }
              ],
              "slots": [
                {
                  "name": "label",
                  "description": "Sets the readable text on the CdrAccordion button."
                },
                {
                  "name": "default",
                  "description": "Slot for the CdrAccordion content."
                }
              ],
              "events": [
                {
                  "name": "accordion-toggle",
                  "arguments": "event",
                  "description": "$emit event fired on CdrAccordion toggle."
                }
              ]
            }
          }
        ],
        "version": "0.1.0"
      }
    ],
    "see_also": [
      {
        "text": "See Also"
      },
      {
        "text": "Lists",
        "href": "../lists/"
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
      "title": "Compact (Small)",
      "slug": "compact-small",
      "children": []
    },
    {
      "level": 2,
      "title": "Border Aligned",
      "slug": "border-aligned",
      "children": []
    },
    {
      "level": 2,
      "title": "Content Spacing",
      "slug": "content-spacing",
      "children": []
    },
    {
      "level": 2,
      "title": "Unwrapped",
      "slug": "unwrapped",
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
      "title": "Anatomy",
      "slug": "anatomy",
      "children": []
    },
    {
      "level": 2,
      "title": "Behavior",
      "slug": "behavior",
      "children": [
        {
          "level": 3,
          "title": "Show and Hide",
          "slug": "show-and-hide",
          "children": []
        },
        {
          "level": 3,
          "title": "Do / Don't",
          "slug": "do-don-t",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Responsiveness",
      "slug": "responsiveness",
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
      "title": "Usage",
      "slug": "usage",
      "children": [
        {
          "level": 3,
          "title": "Accordion Groups",
          "slug": "accordion-groups",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": 1639004863000,
    "contributors": [
      {
        "name": "Darin Trimillos",
        "email": "darin@trimillos.com",
        "commits": 34
      },
      {
        "name": "Cole Willsea",
        "email": "cowills@rei.com",
        "commits": 16
      },
      {
        "name": "RaunCraig",
        "email": "RaunCraig@users.noreply.github.com",
        "commits": 13
      },
      {
        "name": "Lance Harper",
        "email": "laharpe@rei.com",
        "commits": 10
      },
      {
        "name": "rebecca-larue",
        "email": "53016572+rebecca-larue@users.noreply.github.com",
        "commits": 4
      },
      {
        "name": "RatulaREI",
        "email": "51766235+RatulaREI@users.noreply.github.com",
        "commits": 3
      },
      {
        "name": "mking18",
        "email": "43073485+mking18@users.noreply.github.com",
        "commits": 2
      },
      {
        "name": "Darin Trimillos",
        "email": "darintrimillos@users.noreply.github.com",
        "commits": 2
      },
      {
        "name": "Ben Griffin",
        "email": "bgriffi@rei.com",
        "commits": 1
      },
      {
        "name": "mhewson",
        "email": "mhewson@gmail.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "components/accordion/README.md"
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
