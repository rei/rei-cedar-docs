export const data = {
  "key": "v-77733d31",
  "path": "/components/tabs/",
  "title": "Tabs",
  "lang": "en-US",
  "frontmatter": {
    "title": "Tabs",
    "layout_type": "LayoutComponent",
    "summary": "Container used to organize and group related content into smaller sections navigable within a single container",
    "title_metadata": "Tab Panels, CdrTabs",
    "select": [
      {
        "type": "do",
        "image": "tabs/tab_select_do.png",
        "ratio": "16-9",
        "alt": "tab with content displaying",
        "caption": "display a tab section on load."
      },
      {
        "type": "dont",
        "image": "tabs/tab_select_dont.png",
        "ratio": "16-9",
        "alt": "tab with empty content",
        "caption": "display tabs without a section visible."
      }
    ],
    "number": [
      {
        "type": "do",
        "image": "tabs/tab_number_do.png",
        "ratio": "16-9",
        "alt": "tabs with two buttons",
        "caption": "use tabs with at least 2 buttons."
      },
      {
        "type": "dont",
        "image": "tabs/tab_number_dont.png",
        "ratio": "16-9",
        "alt": "tab with one button",
        "caption": "use tabs with only 1 button."
      }
    ],
    "capitalization": [
      {
        "type": "do",
        "image": "tabs/tab_capitalization_do.png",
        "ratio": "16-9",
        "alt": "tabs with title cased labels",
        "caption": "use title case for tab labels."
      },
      {
        "type": "dont",
        "image": "tabs/tab_capitalization_dont.png",
        "ratio": "16-9",
        "alt": "tabs with all caps labels",
        "caption": "use all caps for tab labels."
      }
    ],
    "label": [
      {
        "type": "do",
        "image": "tabs/tab_label_do.png",
        "ratio": "16-9",
        "alt": "tabs with succint labels",
        "caption": "write short and meaningful tab labels. Between 1-2 words is best."
      },
      {
        "type": "dont",
        "image": "tabs/tab_label_dont.png",
        "ratio": "16-9",
        "alt": "tabs with truncated labels.",
        "caption": "truncate tab labels. If a label overruns the container, find a shorter alternative."
      }
    ],
    "sandboxData": {
      "components": "CdrTabs, CdrTabPanel"
    },
    "versions": [
      {
        "components": [
          {
            "name": "CdrTabs",
            "api": {
              "props": [
                {
                  "name": "height",
                  "type": "string",
                  "default": "240px",
                  "description": "Sets height of the tabs container element. Passing a `px` value will render tabs with a static height, passing `auto` will render tabs with variable height based on content size."
                },
                {
                  "name": "activeTab",
                  "type": "number",
                  "default": "0",
                  "description": "Sets the index of the tab that should be active on initial page load. Note that this property is zero-indexed."
                },
                {
                  "name": "modifier",
                  "type": "string",
                  "default": "N/A",
                  "description": "Modifies the style variants for this component. Possible values: {  'centered'  |  'compact'  |  'full-width'  |  'no-border'  }"
                },
                {
                  "name": "backgroundColor",
                  "type": "string",
                  "default": "$cdr-color-background-primary",
                  "description": "For CdrTabs that are rendered on non-primary backgrounds. Pass the background-color into the component to ensure that the scrolling gradients render correctly."
                }
              ],
              "events": [
                {
                  "name": "tab-change",
                  "arguments": "state, tabId",
                  "description": "$emit event fired when the active tab has been changed."
                }
              ]
            }
          },
          {
            "name": "CdrTabPanel",
            "api": {
              "props": [
                {
                  "name": "name",
                  "type": "string",
                  "default": "N/A",
                  "description": "Sets tab display name. Required and must be unique for each tab.  If id prop not provided, this value will be used as the reference identifier."
                },
                {
                  "name": "id",
                  "type": "string",
                  "default": "N/A",
                  "description": "Sets reference identifier for tab content. This property is required and is necessary for accessibility. Must be unique for each tabPanel, and cannot be the same as the `aria-labelledby` property."
                },
                {
                  "name": "aria-labelledby",
                  "type": "string",
                  "default": "N/A",
                  "description": "Sets reference identifier for tab header. This property is required and is necessary for accessibility. Must be unique for each tabPanel, and cannot be the same as the `id` property."
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
      "title": "Full Width",
      "slug": "full-width",
      "children": []
    },
    {
      "level": 2,
      "title": "No Border",
      "slug": "no-border",
      "children": []
    },
    {
      "level": 2,
      "title": "Centered",
      "slug": "centered",
      "children": []
    },
    {
      "level": 2,
      "title": "Active Tab",
      "slug": "active-tab",
      "children": []
    },
    {
      "level": 2,
      "title": "Auto",
      "slug": "auto",
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
          "title": "Do/Don't",
          "slug": "do-don-t",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Responsiveness",
      "slug": "responsiveness",
      "children": [
        {
          "level": 3,
          "title": "Important",
          "slug": "important",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Props",
      "slug": "props",
      "children": [
        {
          "level": 3,
          "title": "CdrTabs",
          "slug": "cdrtabs",
          "children": []
        },
        {
          "level": 3,
          "title": "CdrTabPanel",
          "slug": "cdrtabpanel",
          "children": []
        }
      ]
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
          "title": "Modifiers",
          "slug": "modifiers",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": 1634249312000,
    "contributors": [
      {
        "name": "Cole Willsea",
        "email": "cowills@rei.com",
        "commits": 15
      },
      {
        "name": "RaunCraig",
        "email": "RaunCraig@users.noreply.github.com",
        "commits": 8
      },
      {
        "name": "Jake Rohr",
        "email": "jrohr@c02r20peg8wl.reicorpnet.com",
        "commits": 7
      },
      {
        "name": "Kristopher Knabel",
        "email": "kknabel@rei.com",
        "commits": 6
      },
      {
        "name": "Lance Harper",
        "email": "laharpe@rei.com",
        "commits": 4
      },
      {
        "name": "RatulaREI",
        "email": "51766235+RatulaREI@users.noreply.github.com",
        "commits": 4
      },
      {
        "name": "shart-rei",
        "email": "43073801+shart-rei@users.noreply.github.com",
        "commits": 3
      },
      {
        "name": "Darin Trimillos",
        "email": "darin@trimillos.com",
        "commits": 3
      },
      {
        "name": "mhewson",
        "email": "mhewson@gmail.com",
        "commits": 3
      },
      {
        "name": "cole",
        "email": "48567940+cowills@users.noreply.github.com",
        "commits": 2
      },
      {
        "name": "Ben Griffin",
        "email": "bgriffi@rei.com",
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
        "name": "RachelDoren",
        "email": "racheledoren@gmail.com",
        "commits": 1
      },
      {
        "name": "lancetharper",
        "email": "lancetharper@users.noreply.github.com",
        "commits": 1
      },
      {
        "name": "mhewson",
        "email": "mhewson@rei.com",
        "commits": 1
      },
      {
        "name": "michael",
        "email": "mhewson@gmail.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "components/tabs/README.md"
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
