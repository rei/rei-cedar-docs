export const data = {
  "key": "v-2316b944",
  "path": "/components/checkboxes/",
  "title": "Checkboxes",
  "lang": "en-US",
  "frontmatter": {
    "title": "Checkboxes",
    "layout_type": "LayoutComponent",
    "title_metadata": "CdrCheckbox",
    "summary": "Permits user to make one or more selections from a list",
    "see_also": [
      {
        "text": "See Also"
      },
      {
        "text": "Radio Buttons",
        "href": "../radio/"
      },
      {
        "text": "Form Groups",
        "href": "../form-group/"
      }
    ],
    "case": [
      {
        "type": "do",
        "image": "checkbox/checkbox_case_do_4-3.png",
        "ratio": "4-3",
        "alt": "Image showing proper checkbox sentence case.",
        "caption": "use sentence case, with only proper nouns capitalized."
      },
      {
        "type": "dont",
        "image": "checkbox/checkbox_case_dont_4-3.png",
        "ratio": "4-3",
        "alt": "Image showing improper title caps use.",
        "caption": "use title caps for labels."
      }
    ],
    "fragment": [
      {
        "type": "do",
        "image": "checkbox/checkbox_fragment_do_4-3.png",
        "ratio": "4-3",
        "alt": "Image showing proper checkbox label with no ending punctuation",
        "caption": "write labels as sentence fragments with no ending punctuation."
      },
      {
        "type": "dont",
        "image": "checkbox/checkbox_fragment_dont_4-3.png",
        "ratio": "4-3",
        "alt": "Image showing improper terminal punctuation.",
        "caption": "add terminal punctuation at the end of a label."
      }
    ],
    "label": [
      {
        "type": "do",
        "image": "checkbox/checkbox_label_do_4-3.png",
        "ratio": "4-3",
        "alt": "Image showing proper checkbox label with brief copy",
        "caption": "make labels brief."
      },
      {
        "type": "dont",
        "image": "checkbox/checkbox_label_dont_4-3.png",
        "ratio": "4-3",
        "alt": "Image showing a label with too much text",
        "caption": "put too much text in the label."
      }
    ],
    "positivecopy": [
      {
        "type": "do",
        "image": "checkbox/checkbox_positivecopy_do_4-3.png",
        "ratio": "4-3",
        "alt": "Image showing proper checkbox positive phrasing",
        "caption": "use positive phrasing for labels."
      },
      {
        "type": "dont",
        "image": "checkbox/checkbox_positivecopy_dont_4-3.png",
        "ratio": "4-3",
        "alt": "Image showing a label with negative phrasing",
        "caption": "use negative phrasing for labels."
      }
    ],
    "simplify": [
      {
        "type": "do",
        "image": "checkbox/checkbox_simplify_do_4-3.png",
        "ratio": "4-3",
        "alt": "Image showing proper simple checkbox usage",
        "caption": "use a single checkbox."
      },
      {
        "type": "dont",
        "image": "checkbox/checkbox_simplify_dont_4-3.png",
        "ratio": "4-3",
        "alt": "Image showing a radio button used when a checkbox is preferred",
        "caption": "use radio buttons or toggles for a simple toggle selection."
      }
    ],
    "breadcrumbs": [
      {
        "text": "Components/"
      }
    ],
    "sandboxData": {
      "components": "CdrCheckbox, CdrFormGroup"
    },
    "versions": [
      {
        "components": [
          {
            "name": "CdrCheckbox",
            "api": {
              "props": [
                {
                  "name": "labelClass",
                  "type": "string",
                  "default": "N/A",
                  "description": "Adds CSS class to the label for custom styles."
                },
                {
                  "name": "inputClass",
                  "type": "string",
                  "default": "N/A",
                  "description": "Adds CSS class to the input for custom styles."
                },
                {
                  "name": "contentClass",
                  "type": "string",
                  "default": "N/A",
                  "description": "Adds CSS class to the slot wrapper for custom styles."
                },
                {
                  "name": "indeterminate",
                  "type": "boolean",
                  "default": "false",
                  "description": "Shows checkbox in indeterminate state. This is a visual-only state with no logic for when to show it."
                },
                {
                  "name": "trueValue",
                  "type": "string, number, boolean, object, array, symbol, function",
                  "default": "true",
                  "description": "The value when checked."
                },
                {
                  "name": "falseValue",
                  "type": "string, number, boolean, object, array, symbol, function",
                  "default": "false",
                  "description": "The value when unchecked."
                },
                {
                  "name": "customValue",
                  "type": "string, number, boolean, object, array, symbol, function",
                  "default": "false",
                  "description": "The value when used in a checkbox group. Replaces `trueValue` and `falseValue`."
                },
                {
                  "name": "modifier",
                  "type": "string",
                  "default": "N/A",
                  "description": "Modifies the style variant for this component.  Possible values: { ‘hide-figure’ }"
                },
                {
                  "name": "size",
                  "type": "string",
                  "default": "'medium'",
                  "description": "Sets the checkbox size; values can target responsive breakpoints. Breakpoint values are: xs, sm, md, and lg. Examples: { 'small' | 'medium' | 'large' | 'large@sm' }"
                }
              ],
              "slots": [
                {
                  "name": "default",
                  "description": "Sets the innerHTML for CdrCheckbox. This is the readable text for the <label> element."
                }
              ],
              "events": [
                {
                  "name": "change",
                  "arguments": "newValue, event",
                  "description": "$emit event fired on check/uncheck."
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
      "title": "Overview",
      "slug": "overview",
      "children": [
        {
          "level": 3,
          "title": "Default (Medium)",
          "slug": "default-medium",
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
          "title": "Custom True/False Value",
          "slug": "custom-true-false-value",
          "children": []
        },
        {
          "level": 3,
          "title": "Custom Model Value",
          "slug": "custom-model-value",
          "children": []
        },
        {
          "level": 3,
          "title": "Handling Change Events",
          "slug": "handling-change-events",
          "children": []
        },
        {
          "level": 3,
          "title": "Indeterminate",
          "slug": "indeterminate",
          "children": []
        },
        {
          "level": 3,
          "title": "Custom",
          "slug": "custom",
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
          "title": "Content",
          "slug": "content",
          "children": []
        },
        {
          "level": 3,
          "title": "Do/Don't",
          "slug": "do-don-t",
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
      "title": "Resources",
      "slug": "resources",
      "children": []
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
        },
        {
          "level": 3,
          "title": "Component Variables",
          "slug": "component-variables",
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
          "title": "Modifiers",
          "slug": "modifiers",
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
        "commits": 26
      },
      {
        "name": "Lance Harper",
        "email": "laharpe@rei.com",
        "commits": 11
      },
      {
        "name": "RaunCraig",
        "email": "RaunCraig@users.noreply.github.com",
        "commits": 7
      },
      {
        "name": "Darin Trimillos",
        "email": "darin@trimillos.com",
        "commits": 4
      },
      {
        "name": "michael",
        "email": "mhewson@gmail.com",
        "commits": 3
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
        "name": "lancetharper",
        "email": "lancetharper@users.noreply.github.com",
        "commits": 2
      },
      {
        "name": "rebecca-larue",
        "email": "53016572+rebecca-larue@users.noreply.github.com",
        "commits": 1
      },
      {
        "name": "Darin Trimillos",
        "email": "darintrimillos@users.noreply.github.com",
        "commits": 1
      },
      {
        "name": "Ben Griffin",
        "email": "bgriffi@rei.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "components/checkboxes/README.md"
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
