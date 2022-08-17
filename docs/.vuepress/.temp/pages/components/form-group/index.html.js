export const data = {
  "key": "v-2a568379",
  "path": "/components/form-group/",
  "title": "FormGroup",
  "lang": "en-US",
  "frontmatter": {
    "title": "FormGroup",
    "layout_type": "LayoutComponent",
    "summary": "Groups related input elements together",
    "title_metadata": "CdrFormGroup",
    "see_also": [
      {
        "text": "See Also"
      },
      {
        "text": "Checkboxes",
        "href": "../checkboxes/"
      },
      {
        "text": "Radio Buttons",
        "href": "../radio/"
      },
      {
        "text": "Inputs",
        "href": "../input/"
      },
      {
        "text": "Selects",
        "href": "../selects/"
      }
    ],
    "breadcrumbs": [
      {
        "text": "Components/"
      }
    ],
    "sandboxData": {
      "components": "CdrFormGroup, CdrCheckbox, CdrRadio, CdrInput, CdrSelect"
    },
    "versions": [
      {
        "components": [
          {
            "name": "CdrFormGroup",
            "api": {
              "props": [
                {
                  "name": "label",
                  "type": "string",
                  "default": "none",
                  "description": "Sets the label/legend for the form group. Applies default text styles to this label. To override that default text style or apply other customization, use the `label` slot."
                },
                {
                  "name": "error",
                  "type": "boolean",
                  "default": "false",
                  "description": "Sets the form group to an error state, displays the `error` slot if one is present."
                },
                {
                  "name": "errorRole",
                  "type": "string",
                  "default": "status",
                  "description": "Sets the `role` attribute for the embedded error state messaging."
                },
                {
                  "name": "disabled",
                  "type": "boolean",
                  "default": "false",
                  "description": "Renders form group in a disabled state."
                },
                {
                  "name": "required",
                  "type": "boolean",
                  "default": "false",
                  "description": "Adds required label to the form group."
                },
                {
                  "name": "optional",
                  "type": "boolean",
                  "default": "false",
                  "description": "Adds optional label to the form group."
                }
              ],
              "slots": [
                {
                  "name": "default",
                  "description": "Slot for CdrFormGroup content. Should include a set of form elements."
                },
                {
                  "name": "error",
                  "description": "Error messaging text that is displayed when the `error` prop is true."
                },
                {
                  "name": "label",
                  "description": "Slot to override the CdrFormGroup label/legend. Should be a text element."
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
          "title": "Default",
          "slug": "default",
          "children": []
        },
        {
          "level": 3,
          "title": "Label Override",
          "slug": "label-override",
          "children": []
        },
        {
          "level": 3,
          "title": "Validation",
          "slug": "validation",
          "children": []
        },
        {
          "level": 3,
          "title": "Disabled",
          "slug": "disabled",
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
        "commits": 14
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
  "filePathRelative": "components/form-group/README.md"
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
