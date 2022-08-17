export const data = {
  "key": "v-77b94628",
  "path": "/components/toast/",
  "title": "Toast",
  "lang": "en-US",
  "frontmatter": {
    "title": "Toast",
    "layout_type": "LayoutComponent",
    "summary": "Non-modal dialog used to communicate the status of a task or process.",
    "title_metadata": "CdrToast",
    "breadcrumbs": [
      {
        "text": "Components/"
      }
    ],
    "sandboxData": {
      "components": "CdrToast"
    },
    "TODO-DO/DONT": [
      {
        "type": "do",
        "image": "",
        "ratio": "4-3",
        "alt": "Image showing proper COMPONETNAME usage",
        "caption": "TODO"
      },
      {
        "type": "dont",
        "image": "",
        "ratio": "4-3",
        "alt": "Image showing improper COMPONETNAME usage",
        "caption": "TODO"
      }
    ],
    "versions": [
      {
        "components": [
          {
            "name": "CdrToast",
            "api": {
              "props": [
                {
                  "name": "type",
                  "type": "string",
                  "default": "'default'",
                  "description": "Sets the toast style. Possible values: { 'info' | 'success' | 'warning' | 'error' | 'default'}"
                },
                {
                  "name": "open",
                  "type": "boolean",
                  "default": "false",
                  "description": "Used to programmatically control the toast open/close state"
                },
                {
                  "name": "autoDismiss",
                  "type": "boolean",
                  "default": "true",
                  "description": "If set to `false`, the toast will not automatically close after the set interval"
                },
                {
                  "name": "dismissDelay",
                  "type": "number",
                  "default": "5000",
                  "description": "Used to change the interval (in milliseconds) before the toast automatically closes"
                }
              ],
              "slots": [
                {
                  "name": "default",
                  "description": "Slot for notification content"
                },
                {
                  "name": "icon-left",
                  "description": "Slot for icon matching toast messaging type"
                }
              ],
              "events": [
                {
                  "name": "open",
                  "arguments": "event",
                  "description": "$emit event fired when opening the toast"
                },
                {
                  "name": "closed",
                  "arguments": "event",
                  "description": "$emit event fired when closing the toast"
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
          "title": "Default toast with icon",
          "slug": "default-toast-with-icon",
          "children": []
        },
        {
          "level": 3,
          "title": "Persistent toast",
          "slug": "persistent-toast",
          "children": []
        },
        {
          "level": 3,
          "title": "Adjusting auto-dismiss timing",
          "slug": "adjusting-auto-dismiss-timing",
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
          "title": "Don’t use when",
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
        },
        {
          "level": 3,
          "title": "Events",
          "slug": "events",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Usage",
      "slug": "usage",
      "children": [
        {
          "level": 3,
          "title": "Positioning",
          "slug": "positioning",
          "children": []
        },
        {
          "level": 3,
          "title": "Elevation",
          "slug": "elevation",
          "children": []
        },
        {
          "level": 3,
          "title": "Multiples",
          "slug": "multiples",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": 1634839797000,
    "contributors": [
      {
        "name": "Ben Griffin",
        "email": "bgriffi@rei.com",
        "commits": 11
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
  "filePathRelative": "components/toast/README.md"
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
