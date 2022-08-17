export const data = {
  "key": "v-76d95396",
  "path": "/components/icon/",
  "title": "Icons",
  "lang": "en-US",
  "frontmatter": {
    "title": "Icons",
    "layout_type": "LayoutComponent",
    "summary": "Communicates meaning through the use of graphics",
    "title_metadata": "CdrIcon",
    "breadcrumbs": [
      {
        "text": "Components/"
      }
    ],
    "name": "CdrIcon",
    "see_also": [
      {
        "text": "See Also"
      },
      {
        "text": "Buttons",
        "href": "../buttons/"
      },
      {
        "text": "Links",
        "href": "../links/"
      },
      {
        "text": "Iconography",
        "href": "../../icons/iconography/"
      },
      {
        "text": "Icon Library",
        "href": "../../icons/library/"
      }
    ],
    "meaning": [
      {
        "type": "do",
        "image": "icon/icon_meaning_do_16-9.png",
        "ratio": "16-9",
        "alt": "box icon by text which reads use 'this item ships free'",
        "caption": "use the appropriate icon."
      },
      {
        "type": "dont",
        "image": "icon/icon_meaning_dont_16-9.png",
        "ratio": "16-9",
        "alt": "box icon by text which reads 'write a review'",
        "caption": "change the meaning or intention of the Cedar icons."
      }
    ],
    "clearance": [
      {
        "type": "do",
        "image": "icon/icon_clearance_do_16-9.png",
        "ratio": "16-9",
        "alt": "icons with sufficient padding",
        "caption": "provide at least 40 pixel target area."
      },
      {
        "type": "dont",
        "image": "icon/icon_clearance_dont_16-9.png",
        "ratio": "16-9",
        "alt": "icons with too little padding",
        "caption": "make click or touch target too small."
      }
    ],
    "color": [
      {
        "type": "do",
        "image": "icon/icon_color_do_16-9.png",
        "ratio": "16-9",
        "alt": "icons with sufficient contrast",
        "caption": "use primary color tokens for icon color."
      },
      {
        "type": "dont",
        "image": "icon/icon_color_dont_16-9.png",
        "ratio": "16-9",
        "alt": "icons with too little contrast",
        "caption": "create new color tokens for icons or use secondary color tokens."
      }
    ],
    "sandboxData": {
      "components": "CdrIcon"
    },
    "versions": [
      {
        "components": [
          {
            "name": "CdrIcon",
            "api": {
              "props": [
                {
                  "name": "use",
                  "type": "string",
                  "default": "none",
                  "description": "Only on CdrIcon. Sets the href attribute for use with SVG symbol sprite (see @rei/cedar-icons)."
                },
                {
                  "name": "size",
                  "type": "string",
                  "default": "medium",
                  "description": "Modifies the icon size; values can target responsive breakpoints. Breakpoint values are: xs, sm, md, and lg. Examples: { 'small' | 'medium' | 'large' | 'large@sm' }"
                },
                {
                  "name": "inherit-color",
                  "type": "boolean",
                  "default": "false",
                  "description": "Sets icon fill color to 'inherit'."
                }
              ],
              "slots": [
                {
                  "name": "default",
                  "description": "Sets the innerHTML of SVG element. This includes <title>, <desc>, or any other valid SVG xml."
                }
              ]
            }
          }
        ],
        "version": "0.1.0"
      }
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Inline Icon Components",
      "slug": "inline-icon-components",
      "children": []
    },
    {
      "level": 2,
      "title": "SVG Sprite",
      "slug": "svg-sprite",
      "children": []
    },
    {
      "level": 2,
      "title": "Non-Cedar SVG",
      "slug": "non-cedar-svg",
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
      "title": "The Basics",
      "slug": "the-basics",
      "children": [
        {
          "level": 3,
          "title": "Sizes",
          "slug": "sizes",
          "children": []
        },
        {
          "level": 3,
          "title": "Color",
          "slug": "color",
          "children": []
        },
        {
          "level": 3,
          "title": "Clearance",
          "slug": "clearance",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Icon Library",
      "slug": "icon-library",
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
      "title": "Usage",
      "slug": "usage",
      "children": [
        {
          "level": 3,
          "title": "1. SVG Sprite",
          "slug": "_1-svg-sprite",
          "children": []
        },
        {
          "level": 3,
          "title": "2. Non-Cedar SVG",
          "slug": "_2-non-cedar-svg",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": 1634247926000,
    "contributors": [
      {
        "name": "Cole Willsea",
        "email": "cowills@rei.com",
        "commits": 23
      },
      {
        "name": "Lance Harper",
        "email": "laharpe@rei.com",
        "commits": 18
      },
      {
        "name": "RaunCraig",
        "email": "RaunCraig@users.noreply.github.com",
        "commits": 9
      },
      {
        "name": "Darin Trimillos",
        "email": "darin@trimillos.com",
        "commits": 9
      },
      {
        "name": "mking18",
        "email": "43073485+mking18@users.noreply.github.com",
        "commits": 3
      },
      {
        "name": "lancetharper",
        "email": "lancetharper@users.noreply.github.com",
        "commits": 3
      },
      {
        "name": "shart-rei",
        "email": "43073801+shart-rei@users.noreply.github.com",
        "commits": 2
      },
      {
        "name": "RatulaREI",
        "email": "51766235+RatulaREI@users.noreply.github.com",
        "commits": 2
      },
      {
        "name": "mhewson",
        "email": "mhewson@gmail.com",
        "commits": 2
      },
      {
        "name": "rebecca-larue",
        "email": "53016572+rebecca-larue@users.noreply.github.com",
        "commits": 2
      },
      {
        "name": "Kristopher Knabel",
        "email": "kknabel@rei.com",
        "commits": 1
      },
      {
        "name": "mhewson",
        "email": "mhewson@rei.com",
        "commits": 1
      },
      {
        "name": "Jay S",
        "email": "jaysmizle@gmail.com",
        "commits": 1
      },
      {
        "name": "cole",
        "email": "48567940+cowills@users.noreply.github.com",
        "commits": 1
      },
      {
        "name": "Darin Trimillos",
        "email": "darintrimillos@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "components/icon/README.md"
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
