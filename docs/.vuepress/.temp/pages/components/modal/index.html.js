export const data = {
  "key": "v-6bc87262",
  "path": "/components/modal/",
  "title": "Modal",
  "lang": "en-US",
  "frontmatter": {
    "title": "Modal",
    "layout_type": "LayoutComponent",
    "summary": "Disruptive, action-blocking overlays used to display important, task-relevant information",
    "title_metadata": "CdrModal",
    "breadcrumbs": [
      {
        "text": "Components/"
      }
    ],
    "sandboxData": {
      "components": "CdrModal, CdrButton",
      "styleTag": ".title-header { @include cdr-text-heading-serif-600;}"
    },
    "versions": [
      {
        "components": [
          {
            "name": "CdrModal",
            "api": {
              "props": [
                {
                  "name": "opened",
                  "type": "Boolean",
                  "default": "N/A",
                  "description": "Toggles the state of the modal. Required."
                },
                {
                  "name": "label",
                  "type": "string",
                  "default": "N/A",
                  "description": "Text used to generate the `aria-label` attribute as well as the modal title text, if `labelSlot` is empty. Required."
                },
                {
                  "name": "showTitle",
                  "type": "boolean",
                  "default": "true",
                  "description": "Toggles the modal title text, which comes from `label` or `labelSlot`."
                },
                {
                  "name": "ariaDescribedby",
                  "type": "string",
                  "default": "'medium'",
                  "description": "Text for the `aria-describedby` attribute."
                },
                {
                  "name": "id",
                  "type": "string",
                  "default": "null",
                  "description": "Unique id for modal."
                },
                {
                  "name": "role",
                  "type": "string",
                  "default": "dialog",
                  "description": "Overrides the `role` attribute on the modal content element. Possible values: { 'dialog' | 'alertdialog' }"
                },
                {
                  "name": "overlayClass",
                  "type": "string",
                  "default": "N/A",
                  "description": "Adds a custom class to the `cdr-modal__overlay` div."
                },
                {
                  "name": "wrapperClass",
                  "type": "string",
                  "default": "N/A",
                  "description": "Add a custom class to the `cdr-modal__outerWrap` div."
                },
                {
                  "name": "contentClass",
                  "type": "string",
                  "default": "N/A",
                  "description": "Add a custom class to the `cdr-modal__innerWrap` div."
                },
                {
                  "name": "animationDuration",
                  "type": "number",
                  "default": "300",
                  "description": "Sets animation duration for when the modal is closed."
                }
              ],
              "slots": [
                {
                  "name": "default",
                  "description": "Slot for CdrModal content."
                },
                {
                  "name": "title",
                  "description": "Slot for CdrModal title."
                },
                {
                  "name": "modal",
                  "description": "Slot to override the entire CdrModal content."
                }
              ],
              "events": [
                {
                  "name": "closed",
                  "arguments": "event",
                  "description": "$emit event fired when closing the modal."
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
          "title": "Multiple Modals On One Page",
          "slug": "multiple-modals-on-one-page",
          "children": []
        },
        {
          "level": 3,
          "title": "Using Modals as alert dialogs",
          "slug": "using-modals-as-alert-dialogs",
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
          "title": "Behavior",
          "slug": "behavior",
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
          "title": "Modal Title",
          "slug": "modal-title",
          "children": []
        },
        {
          "level": 3,
          "title": "Size",
          "slug": "size",
          "children": []
        },
        {
          "level": 3,
          "title": "Scroll Behavior",
          "slug": "scroll-behavior",
          "children": []
        },
        {
          "level": 3,
          "title": "Keep Alive",
          "slug": "keep-alive",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": 1639430472000,
    "contributors": [
      {
        "name": "Cole Willsea",
        "email": "cowills@rei.com",
        "commits": 15
      },
      {
        "name": "Darin Trimillos",
        "email": "darin@trimillos.com",
        "commits": 9
      },
      {
        "name": "mhewson",
        "email": "mhewson@rei.com",
        "commits": 3
      },
      {
        "name": "Ben Griffin",
        "email": "bgriffi@rei.com",
        "commits": 2
      },
      {
        "name": "Lance Harper",
        "email": "laharpe@rei.com",
        "commits": 2
      },
      {
        "name": "RatulaREI",
        "email": "51766235+RatulaREI@users.noreply.github.com",
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
        "name": "cole",
        "email": "48567940+cowills@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "components/modal/README.md"
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
