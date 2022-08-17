export const data = {
  "key": "v-079a3b58",
  "path": "/components/selects/",
  "title": "Select",
  "lang": "en-US",
  "frontmatter": {
    "title": "Select",
    "layout_type": "LayoutComponent",
    "summary": "Allows a user to select one or more options from a dropdown list",
    "title_metadata": "Dropdown, CdrSelect, cdr-select",
    "sandboxData": {
      "components": "CdrSelect"
    },
    "labels": [
      {
        "type": "do",
        "image": "select/select_label_do_16-9.png",
        "ratio": "16-9",
        "alt": "Image showing a State/Province label ",
        "caption": "use concise and meaningful labels."
      },
      {
        "type": "dont",
        "image": "select/select_label_dont_16-9.png",
        "ratio": "16-9",
        "alt": "Image showing STATE/PROVINCE label",
        "caption": "use instructional or help text for the label."
      }
    ],
    "case": [
      {
        "type": "do",
        "image": "select/select_case_do_16-9.png",
        "ratio": "16-9",
        "alt": "Image showing a State/Province label ",
        "caption": "use sentence case for labels."
      },
      {
        "type": "dont",
        "image": "select/select_case_dont_16-9.png",
        "ratio": "16-9",
        "alt": "Image showing STATE/PROVINCE label",
        "caption": "use all caps for labels."
      }
    ],
    "punctuation": [
      {
        "type": "do",
        "image": "select/select_punctuation_do_16-9.png",
        "ratio": "16-9",
        "alt": "Image showing a State/Province label ",
        "caption": "remove all terminal punctuation."
      },
      {
        "type": "dont",
        "image": "select/select_punctuation_dont_16-9.png",
        "ratio": "16-9",
        "alt": "Image showing State/Province: label",
        "caption": "use colons after labels."
      }
    ],
    "breadcrumbs": [
      {
        "text": "Components/"
      }
    ],
    "versions": [
      {
        "components": [
          {
            "name": "CdrSelect",
            "api": {
              "props": [
                {
                  "name": "id",
                  "type": "string",
                  "default": "auto-generated",
                  "description": "`id` for the select that is mapped to the label `for` attribute. If one is not provided, it will be generated."
                },
                {
                  "name": "label",
                  "type": "string",
                  "default": "N/A",
                  "description": "Sets the text value for the select label.  Required for a11y compliance.  Use ‘hideLabel’ if the label display is not desired. Required."
                },
                {
                  "name": "hideLabel",
                  "type": "boolean",
                  "default": "false",
                  "description": "Visually hides the label element, but leaves it available to screen readers for a11y compliance."
                },
                {
                  "name": "prompt",
                  "type": "string",
                  "default": "null",
                  "description": "Adds an option that is disabled and selected by default to serve as a `placeholder` for the select."
                },
                {
                  "name": "options",
                  "type": "array",
                  "default": "null",
                  "description": "Build options programatically with data. Provide an array of objects [{ text: String, value: String}] for greater control or provide an array of strings ['String'] for simpler setup (value and text will be the same)."
                },
                {
                  "name": "required",
                  "type": "boolean",
                  "default": "false",
                  "description": "Sets aria-required on the input field and displays an asterisk next to the select label"
                },
                {
                  "name": "optional",
                  "type": "boolean",
                  "default": "false",
                  "description": "Displays '(optional)' text next to the select label."
                },
                {
                  "name": "error",
                  "type": "boolean",
                  "default": "false",
                  "description": "Sets the select to an error state, displays the `error` slot if one is present."
                },
                {
                  "name": "errorRole",
                  "type": "string",
                  "default": "status",
                  "description": "Sets the `role` attribute for the embedded error state messaging."
                },
                {
                  "name": "size",
                  "type": "number",
                  "default": "medium",
                  "description": "Sets the select field size. Possible sizes are: {  ‘medium’  |  ‘large’  }. Also works with responsive breakpoints. Breakpoint values are: xs, sm, md, and lg. Examples: { 'small' | 'medium' | 'large' | 'large@sm' }"
                },
                {
                  "name": "multiple",
                  "type": "boolean",
                  "default": "false",
                  "description": "Turns CdrSelect into a multi-select element."
                },
                {
                  "name": "multipleSize",
                  "type": "number",
                  "default": "null",
                  "description": "Sets the height of the CdrSelect when using the multiple option. This number corresponds to the number of select options that will be visible without scrolling."
                },
                {
                  "name": "background",
                  "type": "string",
                  "default": "primary",
                  "description": "Set which background color the select is being rendered on. Adjusts styling to ensure accessibility. Possible options are: {  ‘primary’  |  ‘secondary’  }."
                }
              ],
              "events": [
                {
                  "description": "All event listeners are passed through to the <select> element."
                }
              ],
              "slots": [
                {
                  "name": "default",
                  "description": "Sets the innerHTML for CdrSelect, used to pass in `<option>` tags. Leave empty if using the `options` prop."
                },
                {
                  "name": "error",
                  "description": "Error messaging text that is displayed when the `error` prop is true."
                },
                {
                  "name": "info",
                  "description": "Location for information link or icon markup to the right above the select field."
                },
                {
                  "name": "info-action",
                  "description": "Location for icon button rendered to the right outside the input field"
                },
                {
                  "name": "pre-icon",
                  "description": "Location for icon markup to the left inside the select field."
                },
                {
                  "name": "helper-text",
                  "description": "Location for helper or information text to the left above the select field."
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
      "title": "Bare",
      "slug": "bare",
      "children": []
    },
    {
      "level": 2,
      "title": "Select with Link Text",
      "slug": "select-with-link-text",
      "children": []
    },
    {
      "level": 2,
      "title": "Select with Info Action",
      "slug": "select-with-info-action",
      "children": []
    },
    {
      "level": 2,
      "title": "Select with Helper Text",
      "slug": "select-with-helper-text",
      "children": []
    },
    {
      "level": 2,
      "title": "Validation",
      "slug": "validation",
      "children": []
    },
    {
      "level": 2,
      "title": "Multiple Select",
      "slug": "multiple-select",
      "children": []
    },
    {
      "level": 2,
      "title": "Nested Options",
      "slug": "nested-options",
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
      "children": [
        {
          "level": 3,
          "title": "Options",
          "slug": "options",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Content",
      "slug": "content",
      "children": [
        {
          "level": 3,
          "title": "Labels",
          "slug": "labels",
          "children": []
        },
        {
          "level": 3,
          "title": "Prompt Text",
          "slug": "prompt-text",
          "children": []
        },
        {
          "level": 3,
          "title": "Menu or List Text",
          "slug": "menu-or-list-text",
          "children": []
        },
        {
          "level": 3,
          "title": "Helper Text",
          "slug": "helper-text",
          "children": []
        },
        {
          "level": 3,
          "title": "Icon",
          "slug": "icon",
          "children": []
        },
        {
          "level": 3,
          "title": "Link Text",
          "slug": "link-text",
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
      "title": "Behavior",
      "slug": "behavior",
      "children": [
        {
          "level": 3,
          "title": "Required Fields",
          "slug": "required-fields",
          "children": []
        },
        {
          "level": 3,
          "title": "Validation",
          "slug": "validation-1",
          "children": []
        }
      ]
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
    }
  ],
  "git": {
    "updatedTime": 1623351461000,
    "contributors": [
      {
        "name": "Cole Willsea",
        "email": "cowills@rei.com",
        "commits": 21
      },
      {
        "name": "Kristopher Knabel",
        "email": "kknabel@rei.com",
        "commits": 7
      },
      {
        "name": "rebecca-larue",
        "email": "53016572+rebecca-larue@users.noreply.github.com",
        "commits": 4
      },
      {
        "name": "mking18",
        "email": "43073485+mking18@users.noreply.github.com",
        "commits": 4
      },
      {
        "name": "mhewson",
        "email": "mhewson@gmail.com",
        "commits": 2
      },
      {
        "name": "Darin Trimillos",
        "email": "darin@trimillos.com",
        "commits": 2
      },
      {
        "name": "RatulaREI",
        "email": "51766235+RatulaREI@users.noreply.github.com",
        "commits": 1
      },
      {
        "name": "Lance Harper",
        "email": "laharpe@rei.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "components/selects/README.md"
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
