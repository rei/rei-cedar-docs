export const data = {
  "key": "v-5a57d6a8",
  "path": "/components/chips/",
  "title": "Chip",
  "lang": "en-US",
  "frontmatter": {
    "title": "Chip",
    "layout_type": "LayoutComponent",
    "summary": "Allows users to make selections, filter content, or trigger actions",
    "title_metadata": "CdrChip",
    "breadcrumbs": [
      {
        "text": "Components/"
      }
    ],
    "sandboxData": {
      "components": "CdrChip, CdrChipGroup"
    },
    "case": [
      {
        "type": "do",
        "image": "chips/chips_do_case_1a.png",
        "ratio": "4-3",
        "caption": "use sentence case with only proper nouns capitalized."
      },
      {
        "type": "dont",
        "image": "chips/chips_dont_case_1b.png",
        "ratio": "4-3",
        "caption": "use title caps."
      }
    ],
    "phrasing": [
      {
        "type": "do",
        "image": "chips/chips_do_phrasing_2a.png",
        "ratio": "4-3",
        "caption": "use positive phrasing"
      },
      {
        "type": "dont",
        "image": "chips/chips_dont_phrasing_2b.png",
        "ratio": "4-3",
        "caption": "use negative phrasing for labels"
      }
    ],
    "labels": [
      {
        "type": "do",
        "image": "chips/chips_do_labels_3a.png",
        "ratio": "4-3",
        "caption": "make text brief."
      },
      {
        "type": "dont",
        "image": "chips/chips_dont_labels_3b.png",
        "ratio": "4-3",
        "caption": "put too much text in the chip."
      }
    ],
    "punctuation": [
      {
        "type": "do",
        "image": "chips/chips_do_punctuation_4a.png",
        "ratio": "4-3",
        "caption": "write sentence fragments with no ending punctuation."
      },
      {
        "type": "dont",
        "image": "chips/chips_dont_punctuation_4b.png",
        "ratio": "4-3",
        "caption": "add terminal punctuation."
      }
    ],
    "icon": [
      {
        "type": "do",
        "image": "chips/chips_do_icon_5a.png",
        "ratio": "4-3",
        "caption": "use either icons in the right or the left slot per chip and chip group."
      },
      {
        "type": "dont",
        "image": "chips/chips_dont_icon_5b.png",
        "ratio": "4-3",
        "caption": "put icons in the right and left slots in a single chip or chip group."
      }
    ],
    "x": [
      {
        "type": "do",
        "image": "chips/chips_do_x_6a.png",
        "ratio": "4-3",
        "caption": "use the X remove icon in the right slot."
      },
      {
        "type": "dont",
        "image": "chips/chips_dont_x_6b.png",
        "ratio": "4-3",
        "caption": "use the X remove icon in the left slot."
      }
    ],
    "overflow": [
      {
        "type": "do",
        "image": "chips/chips_do_overflow_7a.png",
        "ratio": "4-3",
        "caption": "allow a group of chips to overflow to a new row."
      },
      {
        "type": "dont",
        "image": "chips/chips_dont_overflow_7b.png",
        "ratio": "4-3",
        "caption": "create excessive line breaks in a group of chips."
      }
    ],
    "padding": [
      {
        "type": "do",
        "image": "chips/chips_do_padding_8a.png",
        "ratio": "4-3",
        "caption": "allow chip containers to hug their contents."
      },
      {
        "type": "dont",
        "image": "chips/chips_dont_padding_8b.png",
        "ratio": "4-3",
        "caption": "add extra padding and make all chips the same width."
      }
    ],
    "sequence": [
      {
        "type": "do",
        "image": "chips/chips_do_sequence_9a.png",
        "ratio": "4-3",
        "caption": "display selection chips sequentially."
      },
      {
        "type": "dont",
        "image": "chips/chips_dont_sequence_9b.png",
        "ratio": "4-3",
        "caption": "display selection chips in random order."
      }
    ],
    "group": [
      {
        "type": "do",
        "image": "chips/chips_do_group_10a.png",
        "ratio": "4-3",
        "caption": "display chips that offer a selection as a group."
      },
      {
        "type": "dont",
        "image": "chips/chips_dont_group_10b.png",
        "ratio": "4-3",
        "caption": "display a single chip to offer a selection."
      }
    ],
    "versions": [
      {
        "components": [
          {
            "name": "CdrChip",
            "api": {
              "slots": [
                {
                  "name": "default",
                  "description": "Slot for CdrChip content."
                }
              ]
            }
          },
          {
            "name": "CdrChipGroup",
            "api": {
              "props": [
                {
                  "name": "label",
                  "type": "string",
                  "default": "'default'",
                  "description": "Sets a label that describes the chip group and what it is selecting. By default this label is visually hidden and only made available to screen readers."
                },
                {
                  "name": "hide-label",
                  "type": "boolean",
                  "default": "'true'",
                  "description": "Visually hides the chip group label but makes it accessible to screen readers."
                }
              ],
              "slots": [
                {
                  "name": "label",
                  "description": "Slot for overriding CdrChip label content with a custom elementt."
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
      "title": "Default",
      "slug": "default",
      "children": []
    },
    {
      "level": 2,
      "title": "Icon Slots",
      "slug": "icon-slots",
      "children": []
    },
    {
      "level": 2,
      "title": "Stateful Chips",
      "slug": "stateful-chips",
      "children": []
    },
    {
      "level": 2,
      "title": "Filter Chips",
      "slug": "filter-chips",
      "children": []
    },
    {
      "level": 2,
      "title": "Selection Chips",
      "slug": "selection-chips",
      "children": [
        {
          "level": 3,
          "title": "Single Select",
          "slug": "single-select",
          "children": []
        },
        {
          "level": 3,
          "title": "Multiple Select",
          "slug": "multiple-select",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Accessibility",
      "slug": "accessibility",
      "children": []
    },
    {
      "level": 2,
      "title": "Use when",
      "slug": "use-when",
      "children": []
    },
    {
      "level": 2,
      "title": "Don’t use when",
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
      "title": "Do / Don't",
      "slug": "do-don-t",
      "children": []
    },
    {
      "level": 2,
      "title": "Behavior",
      "slug": "behavior",
      "children": []
    },
    {
      "level": 2,
      "title": "Resources",
      "slug": "resources",
      "children": []
    },
    {
      "level": 2,
      "title": "CdrChip",
      "slug": "cdrchip",
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
        }
      ]
    },
    {
      "level": 2,
      "title": "CdrChipGroup",
      "slug": "cdrchipgroup",
      "children": [
        {
          "level": 3,
          "title": "Props",
          "slug": "props-1",
          "children": []
        },
        {
          "level": 3,
          "title": "Slots",
          "slug": "slots-1",
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
        "commits": 14
      },
      {
        "name": "RachelDoren",
        "email": "racheledoren@gmail.com",
        "commits": 9
      },
      {
        "name": "cole",
        "email": "48567940+cowills@users.noreply.github.com",
        "commits": 3
      },
      {
        "name": "mking18",
        "email": "43073485+mking18@users.noreply.github.com",
        "commits": 3
      }
    ]
  },
  "filePathRelative": "components/chips/README.md"
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
