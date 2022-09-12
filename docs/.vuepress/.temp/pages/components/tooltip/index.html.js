export const data = {
  "key": "v-f3fb1068",
  "path": "/components/tooltip/",
  "title": "Tooltip",
  "lang": "en-US",
  "frontmatter": {
    "title": "Tooltip",
    "layout_type": "LayoutComponent",
    "summary": "Floating label used to clarify interface actions",
    "title_metadata": "CdrTooltip",
    "breadcrumbs": [
      {
        "text": "Components/"
      }
    ],
    "sandboxData": {
      "components": "CdrTooltip, CdrButton, IconInformationStroke"
    },
    "consistency": [
      {
        "type": "do",
        "image": "tooltip/tooltip_consistency_do.png",
        "ratio": "4-3",
        "alt": "Image showing proper tooltip usage",
        "caption": "consistently provide tooltips for unlabeled icons "
      },
      {
        "type": "dont",
        "image": "tooltip/tooltip_consistency_dont.png",
        "ratio": "4-3",
        "alt": "Image showing improper tooltip usage",
        "caption": "provide tooltips for only a subset of icons within a set"
      }
    ],
    "redundancy": [
      {
        "type": "do",
        "image": "tooltip/tooltip_redundancy_do.png",
        "ratio": "4-3",
        "alt": "Image showing proper tooltip usage",
        "caption": "avoid using tooltips when actions are clearly defined"
      },
      {
        "type": "dont",
        "image": "tooltip/tooltip_redundancy_dont.png",
        "ratio": "4-3",
        "alt": "Image showing improper tooltip usage",
        "caption": "provide redundant information with a tooltip"
      }
    ],
    "versions": [
      {
        "components": [
          {
            "name": "CdrTooltip",
            "api": {
              "props": [
                {
                  "name": "id",
                  "type": "string",
                  "required": "true",
                  "description": "Id for the CdrTooltip element. Required for accessibility."
                },
                {
                  "name": "position",
                  "type": "string",
                  "default": "'top'",
                  "description": "Sets the position where the tooltip will render relative to the trigger element. Possible values: 'top' | 'bottom' | 'left' | 'right'"
                },
                {
                  "name": "autoPosition",
                  "type": "boolean",
                  "default": "true",
                  "description": "If set to `true`, tooltip will attempt to dynamically set it's position to ensure it renders within the visible browser window. If `false` the tooltip will always render in the provided `position`."
                },
                {
                  "name": "contentClass",
                  "type": "string",
                  "description": "Adds a custom class to the tooltip content wrapper. Allows for overriding it's size, styling, etc."
                },
                {
                  "name": "open",
                  "type": "boolean",
                  "description": "Used to programmatically control the tooltip state. Does not need to be set if you are using the `trigger` slot. See the Custom Trigger examples for more info."
                }
              ],
              "slots": [
                {
                  "name": "default",
                  "description": "Slot for CdrTooltip content."
                },
                {
                  "name": "trigger",
                  "description": "Slot for the element that triggers the tooltip. Element should be a button and must be the first and only child of this slot. Event handlers are bound to this element automatically."
                }
              ],
              "events": [
                {
                  "name": "closed",
                  "arguments": "event",
                  "description": "$emit event fired when tooltip is closed."
                },
                {
                  "name": "opened",
                  "arguments": "event",
                  "description": "$emit event fired when tooltip is opened."
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
          "title": "Custom Trigger",
          "slug": "custom-trigger",
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
          "title": "Events",
          "slug": "events",
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
        "commits": 11
      },
      {
        "name": "mking18",
        "email": "43073485+mking18@users.noreply.github.com",
        "commits": 4
      },
      {
        "name": "cole",
        "email": "48567940+cowills@users.noreply.github.com",
        "commits": 2
      },
      {
        "name": "mhewson",
        "email": "mhewson@rei.com",
        "commits": 2
      },
      {
        "name": "Ben Griffin",
        "email": "bgriffi@rei.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "components/tooltip/README.md"
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
