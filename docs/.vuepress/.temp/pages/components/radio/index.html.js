export const data = {
  "key": "v-738b82d4",
  "path": "/components/radio/",
  "title": "Radio Buttons",
  "lang": "en-US",
  "frontmatter": {
    "title": "Radio Buttons",
    "layout_type": "LayoutComponent",
    "summary": "Permits user to select only one option from a list of two or more",
    "title_metadata": "Radios, CdrRadio",
    "see_also": [
      {
        "text": "See Also"
      },
      {
        "text": "Checkboxes",
        "href": "../checkboxes/"
      },
      {
        "text": "Form Groups",
        "href": "../form-group/"
      }
    ],
    "case": [
      {
        "type": "do",
        "image": "radio/radio_case_do_16-9.png",
        "ratio": "16-9",
        "alt": "Radio buttons proper casing",
        "caption": "use sentence case, with only proper nouns capitalized."
      },
      {
        "type": "dont",
        "image": "radio/radio_case_dont_16-9.png",
        "ratio": "16-9",
        "alt": "Radio buttons with incorrect casing",
        "caption": "use title caps for labels."
      }
    ],
    "label": [
      {
        "type": "do",
        "image": "radio/radio_label_do_16-9.png",
        "ratio": "16-9",
        "alt": "radio buttons with brief labels",
        "caption": "make labels brief."
      },
      {
        "type": "dont",
        "image": "radio/radio_label_dont_16-9.png",
        "ratio": "16-9",
        "alt": "radio buttons with long labels",
        "caption": "put too much text in the label."
      }
    ],
    "fragment": [
      {
        "type": "do",
        "image": "radio/radio_fragment_do_16-9.png",
        "ratio": "16-9",
        "alt": "radio buttons with no ending punctuation",
        "caption": "write labels as sentence fragments with no ending punctuation."
      },
      {
        "type": "dont",
        "image": "radio/radio_fragment_dont_16-9.png",
        "ratio": "16-9",
        "alt": "radio buttons with ending punctuation",
        "caption": "add terminal punctuation at the end of a label."
      }
    ],
    "sandboxData": {
      "components": "CdrRadio, CdrFormGroup"
    },
    "versions": [
      {
        "components": [
          {
            "name": "CdrRadio",
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
                  "name": "name",
                  "type": "string",
                  "default": "N/A",
                  "description": "Sets the name of the radio button. Required."
                },
                {
                  "name": "customValue",
                  "type": "string, number, boolean, object, array, symbol, function",
                  "default": "N/A",
                  "description": "Sets the value of the radio button. Required."
                },
                {
                  "name": "modifier",
                  "type": "string",
                  "default": "N/A",
                  "description": "Modifies the style variants for this component. Possible values: {  'hide-figure'  }"
                },
                {
                  "name": "size",
                  "type": "string",
                  "default": "'medium'",
                  "description": "Sets the radio size; values can target responsive breakpoints. Breakpoint values are: xs, sm, md, and lg. Examples: { 'small' | 'medium' | 'large' | 'large@sm' }"
                }
              ],
              "slots": [
                {
                  "name": "default",
                  "description": "Sets the innerHTML for CdrRadio. This is the readable text for the <label> element."
                }
              ],
              "events": [
                {
                  "name": "change",
                  "arguments": "value, event",
                  "description": "$emit event fired on radio selection."
                },
                {
                  "name": "input",
                  "arguments": "value",
                  "description": "$emit event fired on radio selection."
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
      "title": "Size",
      "slug": "size",
      "children": []
    },
    {
      "level": 2,
      "title": "Custom",
      "slug": "custom",
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
      "title": "Content",
      "slug": "content",
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
      "title": "Resources",
      "slug": "resources",
      "children": []
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
    "updatedTime": 1623267544000,
    "contributors": [
      {
        "name": "Cole Willsea",
        "email": "cowills@rei.com",
        "commits": 25
      },
      {
        "name": "Lance Harper",
        "email": "laharpe@rei.com",
        "commits": 17
      },
      {
        "name": "Jake Rohr",
        "email": "jrohr@c02r20peg8wl.reicorpnet.com",
        "commits": 8
      },
      {
        "name": "RaunCraig",
        "email": "RaunCraig@users.noreply.github.com",
        "commits": 4
      },
      {
        "name": "Darin Trimillos",
        "email": "darin@trimillos.com",
        "commits": 3
      },
      {
        "name": "michael",
        "email": "mhewson@gmail.com",
        "commits": 2
      },
      {
        "name": "lancetharper",
        "email": "lancetharper@users.noreply.github.com",
        "commits": 2
      },
      {
        "name": "RatulaREI",
        "email": "51766235+RatulaREI@users.noreply.github.com",
        "commits": 2
      },
      {
        "name": "rebecca-larue",
        "email": "53016572+rebecca-larue@users.noreply.github.com",
        "commits": 1
      },
      {
        "name": "Kristopher Knabel",
        "email": "kknabel@rei.com",
        "commits": 1
      },
      {
        "name": "shart-rei",
        "email": "43073801+shart-rei@users.noreply.github.com",
        "commits": 1
      },
      {
        "name": "Darin Trimillos",
        "email": "darintrimillos@users.noreply.github.com",
        "commits": 1
      },
      {
        "name": "mhewson",
        "email": "mhewson@gmail.com",
        "commits": 1
      },
      {
        "name": "mking18",
        "email": "43073485+mking18@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "components/radio/README.md"
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
