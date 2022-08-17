export const data = {
  "key": "v-7e89780e",
  "path": "/components/buttons/",
  "title": "Buttons",
  "lang": "en-US",
  "frontmatter": {
    "title": "Buttons",
    "layout_type": "LayoutComponent",
    "summary": "Invokes and communicates an action that will occur",
    "title_metadata": "CdrButton",
    "vertical": [
      {
        "type": "do",
        "image": "buttons/button_vert_do_4-3.png",
        "ratio": "4-3",
        "alt": "Image showing proper vertical button grouping",
        "caption": "match button widths."
      },
      {
        "type": "dont",
        "image": "buttons/button_vert_dont_4-3.png",
        "ratio": "4-3",
        "alt": "Image showing mixed button sizing",
        "caption": "mix button sizes."
      }
    ],
    "horizontal": [
      {
        "type": "do",
        "image": "buttons/button_horiz_do_4-3.png",
        "ratio": "4-3",
        "alt": "Image showing proper button height grouping",
        "caption": "match button heights."
      },
      {
        "type": "dont",
        "image": "buttons/button_horiz_dont_4-3.png",
        "ratio": "4-3",
        "alt": "Image showing mixed button sizing",
        "caption": "mix button sizes."
      }
    ],
    "label": [
      {
        "type": "do",
        "image": "buttons/button_label_do_4-3.png",
        "ratio": "4-3",
        "alt": "Image showing buttons with proper text length",
        "caption": "minimize label length."
      },
      {
        "type": "dont",
        "image": "buttons/button_label_dont_4-3.png",
        "ratio": "4-3",
        "alt": "Image showing buttons with too much text",
        "caption": "put too much text in a button."
      }
    ],
    "case": [
      {
        "type": "do",
        "image": "buttons/button_case_do_4-3.png",
        "ratio": "4-3",
        "alt": "Image showing buttons with proper text sentence case",
        "caption": "use sentence case."
      },
      {
        "type": "dont",
        "image": "buttons/button_case_dont_4-3.png",
        "ratio": "4-3",
        "alt": "Image showing buttons with title case",
        "caption": "use title case."
      }
    ],
    "noun": [
      {
        "type": "do",
        "image": "buttons/button_noun_do_4-3.png",
        "ratio": "4-3",
        "alt": "Image showing buttons with proper noun capitalization",
        "caption": "capitalize any proper nouns."
      },
      {
        "type": "dont",
        "image": "buttons/button_noun_dont_4-3.png",
        "ratio": "4-3",
        "alt": "Image showing buttons with all uppercase text",
        "caption": "use all caps."
      }
    ],
    "breadcrumbs": [
      {
        "text": "Components/"
      }
    ],
    "sandboxData": {
      "components": "CdrButton"
    },
    "versions": [
      {
        "components": [
          {
            "name": "CdrButton",
            "api": {
              "props": [
                {
                  "name": "tag",
                  "type": "string",
                  "default": "'button'",
                  "description": "Renders CdrButton as a <button> or <a> element. When using the value of <a>, this element renders as an anchor link. Possible values: { 'button' | 'a' }"
                },
                {
                  "name": "type",
                  "type": "string",
                  "default": "'button'",
                  "description": "Sets the button type. Possible values: { 'button' | 'submit' | 'reset' }"
                },
                {
                  "name": "fullWidth",
                  "type": "boolean",
                  "default": "false",
                  "description": "Sets button width to 100%. Setting this value to true will set the button width to 100% of the parent container. Use the 'fullWidth' prop with the 'size' prop to control top and bottom padding."
                },
                {
                  "name": "size",
                  "type": "string",
                  "default": "'medium'",
                  "description": "Sets the button size; values can target responsive breakpoints. Breakpoint values are: xs, sm, md, and lg. Examples: { 'small' | 'medium' | 'large' | 'large@sm' }"
                },
                {
                  "name": "iconOnly",
                  "type": "boolean",
                  "default": "false",
                  "description": "Renders an 'icon-only' button. When this value is true, it will override the size and 'responsiveSize' props. Can be used in conjunction with 'with-background'"
                },
                {
                  "name": "withBackground",
                  "type": "boolean",
                  "default": "false",
                  "description": "Renders an 'icon-only' button with a background color and border. Must be used in conjunction with the 'iconOnly' prop."
                },
                {
                  "name": "modifier",
                  "type": "string",
                  "default": "N/A",
                  "description": "Modifies the style variant for this component. Possible values: { 'primary' | 'secondary' | 'sale' | 'dark' | 'link'}"
                }
              ],
              "slots": [
                {
                  "name": "default",
                  "description": "Sets the innerHTML for CdrButton'. This is the readable text of the button. Leave empty if icon-only."
                },
                {
                  "name": "icon",
                  "description": "Sets the innerHTML for CdrButton icon-only button."
                },
                {
                  "name": "icon-left",
                  "description": "Sets the innerHTML for CdrButton with icon to the left of text content."
                },
                {
                  "name": "icon-right",
                  "description": "Sets the innerHTML for CdrButton with icon to the right of text content."
                }
              ],
              "events": [
                {
                  "description": "All event listeners are passed through to/from the component."
                }
              ]
            }
          }
        ],
        "version": "2.0.0"
      }
    ],
    "see_also": [
      {
        "text": "See Also"
      },
      {
        "text": "Links",
        "href": "../links/"
      }
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Primary",
      "slug": "primary",
      "children": []
    },
    {
      "level": 2,
      "title": "Secondary",
      "slug": "secondary",
      "children": []
    },
    {
      "level": 2,
      "title": "Alternative Styles",
      "slug": "alternative-styles",
      "children": []
    },
    {
      "level": 2,
      "title": "Link Style",
      "slug": "link-style",
      "children": []
    },
    {
      "level": 2,
      "title": "Text and Icon",
      "slug": "text-and-icon",
      "children": []
    },
    {
      "level": 2,
      "title": "Icon Only",
      "slug": "icon-only",
      "children": []
    },
    {
      "level": 2,
      "title": "Icon Only With Background",
      "slug": "icon-only-with-background",
      "children": []
    },
    {
      "level": 2,
      "title": "Stateful Button",
      "slug": "stateful-button",
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
      "title": "Button With Link Tag",
      "slug": "button-with-link-tag",
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
          "title": "Do / Don't",
          "slug": "do-don-t",
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
          "title": "Do / Don't",
          "slug": "do-don-t-1",
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
          "title": "Choosing a Button or a Link",
          "slug": "choosing-a-button-or-a-link",
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
    }
  ],
  "git": {
    "updatedTime": 1633454493000,
    "contributors": [
      {
        "name": "Cole Willsea",
        "email": "cowills@rei.com",
        "commits": 26
      },
      {
        "name": "Darin Trimillos",
        "email": "darin@trimillos.com",
        "commits": 17
      },
      {
        "name": "RaunCraig",
        "email": "RaunCraig@users.noreply.github.com",
        "commits": 8
      },
      {
        "name": "Lance Harper",
        "email": "laharpe@rei.com",
        "commits": 7
      },
      {
        "name": "shart-rei",
        "email": "43073801+shart-rei@users.noreply.github.com",
        "commits": 4
      },
      {
        "name": "cole",
        "email": "48567940+cowills@users.noreply.github.com",
        "commits": 3
      },
      {
        "name": "Darin Trimillos",
        "email": "darintrimillos@users.noreply.github.com",
        "commits": 2
      },
      {
        "name": "mhewson",
        "email": "mhewson@gmail.com",
        "commits": 2
      },
      {
        "name": "michael",
        "email": "mhewson@gmail.com",
        "commits": 2
      },
      {
        "name": "mking18",
        "email": "43073485+mking18@users.noreply.github.com",
        "commits": 2
      },
      {
        "name": "rebecca-larue",
        "email": "53016572+rebecca-larue@users.noreply.github.com",
        "commits": 2
      },
      {
        "name": "RatulaREI",
        "email": "51766235+RatulaREI@users.noreply.github.com",
        "commits": 2
      },
      {
        "name": "RachelDoren",
        "email": "racheledoren@gmail.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "components/buttons/README.md"
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
