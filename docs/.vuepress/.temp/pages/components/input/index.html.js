export const data = {
  "key": "v-64ecb8e5",
  "path": "/components/input/",
  "title": "Inputs",
  "lang": "en-US",
  "frontmatter": {
    "title": "Inputs",
    "layout_type": "LayoutComponent",
    "summary": "Allows a user to enter data, edit data and search",
    "title_metadata": "Text field, CdrInput, cdr-input",
    "length": [
      {
        "type": "do",
        "image": "input/Input__Length_Do__16-9.png",
        "ratio": "16-9",
        "alt": "input with width limited",
        "caption": "limit the width of the input field."
      },
      {
        "type": "dont",
        "image": "input/Input__Length_Dont__16-9.png",
        "ratio": "16-9",
        "alt": "input with too much width",
        "caption": "make the input field wider than approximately ⅓ of the information being entered."
      }
    ],
    "label": [
      {
        "type": "do",
        "image": "input/Input__Label_Do__16-9.png",
        "ratio": "16-9",
        "alt": "input with proper label",
        "caption": "use concise and meaningful labels."
      },
      {
        "type": "dont",
        "image": "input/Input__Label_Dont__16-9.png",
        "ratio": "16-9",
        "alt": "input with too long of label",
        "caption": "use instructional or help text for the label."
      }
    ],
    "case": [
      {
        "type": "do",
        "image": "input/Input__Case_Do__16-9.png",
        "ratio": "16-9",
        "alt": "label with proper case",
        "caption": "use sentence case for labels."
      },
      {
        "type": "dont",
        "image": "input/Input__Case_Dont__16-9.png",
        "ratio": "16-9",
        "alt": "label with all caps",
        "caption": "use all caps for labels."
      }
    ],
    "punctuation": [
      {
        "type": "do",
        "image": "input/Input__Punctuation_Do__16-9.png",
        "ratio": "16-9",
        "alt": "label without terminal punctuation",
        "caption": "remove unnecessary terminal punctuation such as semicolons, colons or periods."
      },
      {
        "type": "dont",
        "image": "input/Input__Punctuation_Dont__16-9.png",
        "ratio": "16-9",
        "alt": "label with colon after",
        "caption": "use colons after labels."
      }
    ],
    "placeholder": [
      {
        "type": "do",
        "image": "input/Input__Placeholder_Do__16-9.png",
        "ratio": "16-9",
        "alt": "proper placeholder text usage",
        "caption": "use placeholder text when providing extra help, so user understands what to enter."
      },
      {
        "type": "dont",
        "image": "input/Input__Placeholder_Dont__16-9.png",
        "ratio": "16-9",
        "alt": "placeholder text with too much information",
        "caption": "use placeholder text as an alternative to a label."
      }
    ],
    "sizes": [
      {
        "type": "do",
        "image": "input/Input__Sizes_Do__4-3.png",
        "ratio": "4-3",
        "alt": "Image showing two equally sized input fields as a part of a form",
        "caption": "use consistent sizes for components on a single form."
      },
      {
        "type": "dont",
        "image": "input/Input__Sizes_Dont__4-3.png",
        "ratio": "4-3",
        "alt": "Image showing missized input and button elements in a form",
        "caption": "mix sizes for components on a single form."
      }
    ],
    "sandboxData": {
      "components": "CdrInput"
    },
    "versions": [
      {
        "components": [
          {
            "name": "Inputs",
            "api": {
              "props": [
                {
                  "name": "id",
                  "type": "string",
                  "default": "auto-generated",
                  "description": "Requires unique ID that is mapped to the label ‘for’ attribute.  If this value is not set, it will be auto-generated."
                },
                {
                  "name": "type",
                  "type": "string",
                  "default": "text",
                  "description": "Supports HTML5 <input> types for text, email, number, password, search, and URL."
                },
                {
                  "name": "label",
                  "type": "string",
                  "default": "N/A",
                  "description": "Sets the text value for the input label.  Required for a11y compliance.  Use ‘hideLabel’ if the label display is not desired. Required."
                },
                {
                  "name": "hideLabel",
                  "type": "boolean",
                  "default": "false",
                  "description": "Visually hides the label element, but leaves it available to screen readers for a11y compliance."
                },
                {
                  "name": "rows",
                  "type": "number",
                  "default": "null",
                  "description": "Sets the number of rows for the input field and converts input field to textarea if the value of the ‘rows’ prop is greater than 1."
                },
                {
                  "name": "disabled",
                  "type": "boolean",
                  "default": "false",
                  "description": "Sets the disabled state for the input field and label styling. Also, restricts user input."
                },
                {
                  "name": "numeric",
                  "type": "boolean",
                  "default": "false",
                  "description": "Sets default attributes for an input that should launch a numeric keyboard but is not strictly a 'number' (credit card, security code, postal code, etc.). Should be used in conjunction with the default text type input. An `input` listener can be used to fully restrict input values to numerical characters only"
                },
                {
                  "name": "required",
                  "type": "boolean",
                  "default": "false",
                  "description": "Sets aria-required on the input field and displays an asterisk next to the input label."
                },
                {
                  "name": "optional",
                  "type": "boolean",
                  "default": "false",
                  "description": "Displays '(optional)' text next to the input label."
                },
                {
                  "name": "error",
                  "type": "boolean",
                  "default": "false",
                  "description": "Sets the input to an error state, displays the `error` slot if one is present."
                },
                {
                  "name": "errorRole",
                  "type": "string",
                  "default": "status",
                  "description": "Sets the `role` attribute for the embedded error state messaging."
                },
                {
                  "name": "background",
                  "type": "string",
                  "default": "primary",
                  "description": "Set which background color the input is being rendered on. Adjusts styling to ensure accessibility. Possible options are: {  ‘primary’  |  ‘secondary’  }."
                },
                {
                  "name": "size",
                  "type": "string",
                  "default": "medium",
                  "description": "Sets the input field size. Possible sizes are: {  ‘medium’  |  ‘large’  }. Also works with responsive breakpoints. Breakpoint values are: xs, sm, md, and lg. Examples: { 'small' | 'medium' | 'large' | 'large@sm' }"
                }
              ],
              "slots": [
                {
                  "name": "error",
                  "description": "Error messaging text that is displayed when the `error` prop is true."
                },
                {
                  "name": "info",
                  "description": "Location for  information link or icon markup to the right above the input field."
                },
                {
                  "name": "info-action",
                  "description": "Location for icon button rendered to the right outside the input field"
                },
                {
                  "name": "pre-icon",
                  "description": "Location for icon markup to the left inside the input field."
                },
                {
                  "name": "post-icon",
                  "description": "Location for icon markup to the right inside the input field."
                },
                {
                  "name": "helper-text-bottom",
                  "description": "Location for helper or information text to the left below the input field."
                },
                {
                  "name": "helper-text-top",
                  "description": "Location for helper or information text to the left above the input field."
                }
              ],
              "events": [
                {
                  "description": "All event listeners are passed through to the <input> element."
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
      "title": "Required",
      "slug": "required",
      "children": []
    },
    {
      "level": 2,
      "title": "Optional",
      "slug": "optional",
      "children": []
    },
    {
      "level": 2,
      "title": "Sizing",
      "slug": "sizing",
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
      "title": "Validation",
      "slug": "validation",
      "children": []
    },
    {
      "level": 2,
      "title": "Multi-Line Input",
      "slug": "multi-line-input",
      "children": []
    },
    {
      "level": 2,
      "title": "Numeric Input",
      "slug": "numeric-input",
      "children": []
    },
    {
      "level": 2,
      "title": "Number/Quantity Input",
      "slug": "number-quantity-input",
      "children": []
    },
    {
      "level": 2,
      "title": "Input with Link Text",
      "slug": "input-with-link-text",
      "children": []
    },
    {
      "level": 2,
      "title": "Input with Info Action",
      "slug": "input-with-info-action",
      "children": []
    },
    {
      "level": 2,
      "title": "Input with Helper Text",
      "slug": "input-with-helper-text",
      "children": []
    },
    {
      "level": 2,
      "title": "Input with Helper Text Above",
      "slug": "input-with-helper-text-above",
      "children": []
    },
    {
      "level": 2,
      "title": "Input with Icon Inserted Left",
      "slug": "input-with-icon-inserted-left",
      "children": []
    },
    {
      "level": 2,
      "title": "Input with Icon Inserted Right",
      "slug": "input-with-icon-inserted-right",
      "children": []
    },
    {
      "level": 2,
      "title": "Input with Actions",
      "slug": "input-with-actions",
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
        },
        {
          "level": 3,
          "title": "Multi-Line Input Fields",
          "slug": "multi-line-input-fields",
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
          "title": "Do / Don't",
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
          "title": "Default Input Attrs",
          "slug": "default-input-attrs",
          "children": []
        },
        {
          "level": 3,
          "title": "Input Masking",
          "slug": "input-masking",
          "children": []
        },
        {
          "level": 3,
          "title": "Inputs with Icons",
          "slug": "inputs-with-icons",
          "children": []
        },
        {
          "level": 3,
          "title": "Required Fields",
          "slug": "required-fields",
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
    "updatedTime": 1633454024000,
    "contributors": [
      {
        "name": "Cole Willsea",
        "email": "cowills@rei.com",
        "commits": 36
      },
      {
        "name": "Darin Trimillos",
        "email": "darin@trimillos.com",
        "commits": 10
      },
      {
        "name": "Kristopher Knabel",
        "email": "kknabel@rei.com",
        "commits": 7
      },
      {
        "name": "Lance Harper",
        "email": "laharpe@rei.com",
        "commits": 5
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
        "name": "RaunCraig",
        "email": "RaunCraig@users.noreply.github.com",
        "commits": 3
      },
      {
        "name": "mking18",
        "email": "43073485+mking18@users.noreply.github.com",
        "commits": 3
      },
      {
        "name": "shart-rei",
        "email": "43073801+shart-rei@users.noreply.github.com",
        "commits": 2
      },
      {
        "name": "Darin Trimillos",
        "email": "darintrimillos@users.noreply.github.com",
        "commits": 2
      },
      {
        "name": "cole",
        "email": "48567940+cowills@users.noreply.github.com",
        "commits": 1
      },
      {
        "name": "RachelDoren",
        "email": "racheledoren@gmail.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "components/input/README.md"
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
