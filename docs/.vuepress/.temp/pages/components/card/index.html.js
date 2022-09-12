export const data = {
  "key": "v-7683e7df",
  "path": "/components/card/",
  "title": "Card",
  "lang": "en-US",
  "frontmatter": {
    "title": "Card",
    "layout_type": "LayoutComponent",
    "summary": "Linked, interactive surface that groups related information and/or actions associated with a singular subject or destination.",
    "title_metadata": "CdrCard",
    "breadcrumbs": [
      {
        "text": "Components/"
      }
    ],
    "sandboxData": {
      "components": "CdrCard, CdrText, CdrRating, CdrImg",
      "styleTag": ".content { padding: $cdr-space-one-x; }\n.title { @include cdr-text-heading-serif-500; }\n.body { @include cdr-text-body-300; }"
    },
    "content": [
      {
        "type": "do",
        "image": "card/card_essential_do.png",
        "ratio": "4-3",
        "alt": "Image showing proper card usage",
        "caption": "include essential, summarized information. "
      },
      {
        "type": "dont",
        "image": "card/card_excessive_dont.png",
        "ratio": "4-3",
        "alt": "Image showing improper card usage",
        "caption": "overwhelm the space with excessive content."
      }
    ],
    "grouping": [
      {
        "type": "do",
        "image": "card/card_consistent_do.png",
        "ratio": "4-3",
        "alt": "Image showing proper card usage",
        "caption": "use consistent elements from card to card when arranged in groups."
      },
      {
        "type": "dont",
        "image": "card/card_unlike_dont.png",
        "ratio": "4-3",
        "alt": "Image showing improper card usage",
        "caption": "group unlike cards that use different elements."
      }
    ],
    "versions": [
      {
        "components": [
          {
            "name": "CdrCard",
            "api": {
              "props": [
                {
                  "name": "tag",
                  "type": "string",
                  "default": "'article'",
                  "description": "Sets valid HTML container element tag."
                }
              ],
              "slots": [
                {
                  "name": "default",
                  "description": "Slot for CdrCard content."
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
          "title": "Customizing Cards",
          "slug": "customizing-cards",
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
          "title": "Use when",
          "slug": "use-when",
          "children": []
        },
        {
          "level": 3,
          "title": "Don’t use when",
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
          "title": "Do / Don't",
          "slug": "do-don-t",
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
        },
        {
          "level": 3,
          "title": "Slots",
          "slug": "slots",
          "children": []
        },
        {
          "level": 3,
          "title": "Component Variables",
          "slug": "component-variables",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": 1634337680000,
    "contributors": [
      {
        "name": "Cole Willsea",
        "email": "cowills@rei.com",
        "commits": 12
      },
      {
        "name": "michael",
        "email": "mhewson@gmail.com",
        "commits": 9
      },
      {
        "name": "RachelDoren",
        "email": "racheledoren@gmail.com",
        "commits": 2
      },
      {
        "name": "mking18",
        "email": "43073485+mking18@users.noreply.github.com",
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
  "filePathRelative": "components/card/README.md"
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
