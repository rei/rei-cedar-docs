export const data = {
  "key": "v-2f44852c",
  "path": "/components/popover/",
  "title": "Popover",
  "lang": "en-US",
  "frontmatter": {
    "title": "Popover",
    "layout_type": "LayoutComponent",
    "summary": "Small overlay used to display contextual information",
    "title_metadata": "CdrPopover",
    "breadcrumbs": [
      {
        "text": "Components/"
      }
    ],
    "sandboxData": {
      "components": "CdrPopover, CdrButton"
    },
    "content": [
      {
        "type": "do",
        "image": "popover/popover_content_do.png",
        "ratio": "4-3",
        "alt": "Image showing proper popover usage",
        "caption": "link to additional content within a popover if additional information might be needed"
      },
      {
        "type": "dont",
        "image": "popover/popover_content_dont.png",
        "ratio": "4-3",
        "alt": "Image showing improper popover usage",
        "caption": "overload the popover with too much content "
      }
    ],
    "essential": [
      {
        "type": "do",
        "image": "popover/popover_essential_do.png",
        "ratio": "4-3",
        "alt": "Image showing proper popover usage",
        "caption": "provide users with additional information in a popover when a feature or task might need clarification"
      },
      {
        "type": "dont",
        "image": "popover/popover_essential_dont.png",
        "ratio": "4-3",
        "alt": "Image showing improper popover usage",
        "caption": "put information that's essential for completing a task in a popover"
      }
    ],
    "versions": [
      {
        "components": [
          {
            "name": "CdrPopover",
            "api": {
              "props": [
                {
                  "name": "id",
                  "type": "string",
                  "required": "true",
                  "description": "Id for the CdrPopover element. Required for accessibility."
                },
                {
                  "name": "position",
                  "type": "string",
                  "default": "'top'",
                  "description": "Sets the position where the popover will render relative to the trigger element. Possible values: 'top' | 'bottom' | 'left' | 'right'"
                },
                {
                  "name": "autoPosition",
                  "type": "boolean",
                  "default": "true",
                  "description": "If set to `true`, popover will attempt to dynamically set it's position to ensure it renders within the visible browser window. If `false` the popover will always render in the provided `position`."
                },
                {
                  "name": "contentClass",
                  "type": "string",
                  "description": "Adds a custom class to the popover content wrapper. Allows for overriding it's size, styling, etc."
                },
                {
                  "name": "open",
                  "type": "boolean",
                  "description": "Used to programmatically control the popover state. Does not need to be set if you are using the `trigger` slot. See the Custom Trigger examples for more info."
                }
              ],
              "slots": [
                {
                  "name": "default",
                  "description": "Slot for CdrPopover content."
                },
                {
                  "name": "trigger",
                  "description": "Slot for the element that triggers the popover. Element should be a button and must be the first and only child of this slot. Event handlers are bound to this element automatically."
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
        "commits": 12
      },
      {
        "name": "mhewson",
        "email": "mhewson@rei.com",
        "commits": 3
      },
      {
        "name": "mking18",
        "email": "43073485+mking18@users.noreply.github.com",
        "commits": 3
      },
      {
        "name": "Ben Griffin",
        "email": "bgriffi@rei.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "components/popover/README.md"
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
