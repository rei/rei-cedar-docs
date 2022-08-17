export const data = {
  "key": "v-9fdf917a",
  "path": "/components/banner/",
  "title": "Banner",
  "lang": "en-US",
  "frontmatter": {
    "title": "Banner",
    "layout_type": "LayoutComponent",
    "summary": "Provides contextual feedback messages for typical user actions",
    "title_metadata": "CdrBanner",
    "breadcrumbs": [
      {
        "text": "Components/"
      }
    ],
    "sandboxData": {
      "components": "CdrBanner"
    },
    "versions": [
      {
        "components": [
          {
            "name": "CdrBanner",
            "api": {
              "props": [
                {
                  "name": "type",
                  "type": "string",
                  "default": "'default'",
                  "description": "Sets the banner style. Possible values: { 'info' | 'success' | 'warning' | 'error' | 'default'}"
                }
              ],
              "slots": [
                {
                  "name": "default",
                  "description": "Slot for primary message text"
                },
                {
                  "name": "icon-left",
                  "description": "Slot for icon matching banner type"
                },
                {
                  "name": "message-body",
                  "description": "Slot for additional content about the message"
                },
                {
                  "name": "icon-right",
                  "description": "Slot for an additional icon on right"
                },
                {
                  "name": "info-action",
                  "description": "Slot for an action-wrapped icon"
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
          "title": "Default Banner with Icon Left",
          "slug": "default-banner-with-icon-left",
          "children": []
        },
        {
          "level": 3,
          "title": "Message Body",
          "slug": "message-body",
          "children": []
        },
        {
          "level": 3,
          "title": "Icon Right",
          "slug": "icon-right",
          "children": []
        },
        {
          "level": 3,
          "title": "Info Action",
          "slug": "info-action",
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
          "title": "Information types",
          "slug": "information-types",
          "children": []
        },
        {
          "level": 3,
          "title": "Use when",
          "slug": "use-when",
          "children": []
        },
        {
          "level": 3,
          "title": "Don't use when",
          "slug": "don-t-use-when",
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
          "title": "Structure",
          "slug": "structure",
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
          "title": "Placement",
          "slug": "placement",
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
        }
      ]
    }
  ],
  "git": {
    "updatedTime": 1634839645000,
    "contributors": [
      {
        "name": "Ben Griffin",
        "email": "bgriffi@rei.com",
        "commits": 5
      },
      {
        "name": "mking18",
        "email": "43073485+mking18@users.noreply.github.com",
        "commits": 2
      },
      {
        "name": "Cole Willsea",
        "email": "cowills@rei.com",
        "commits": 1
      },
      {
        "name": "RachelDoren",
        "email": "racheledoren@gmail.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "components/banner/README.md"
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
