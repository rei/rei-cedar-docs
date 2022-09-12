export const data = {
  "key": "v-1f173c15",
  "path": "/components/grid-deprecated/",
  "title": "Grid",
  "lang": "en-US",
  "frontmatter": {
    "title": "Grid",
    "layout_type": "LayoutComponent",
    "summary": "A responsive, mobile first, fluid system that appropriately scales 12 columns as the device or viewport size increases",
    "title_metadata": "Layout, CdrGrid, CdrRow, CdrCol",
    "consistent": [
      {
        "type": "do",
        "image": "grid/grid_consistent_do_16-9.png",
        "alt": "Image showing proper grid usage",
        "caption": "maintain a consistent grid system."
      },
      {
        "type": "dont",
        "image": "grid/grid_consistent_dont_16-9.png",
        "alt": "Image showing mixed grid usage",
        "caption": "mix this grid and other grid systems."
      }
    ],
    "margins": [
      {
        "type": "do",
        "image": "grid/grid_margins_do_16-9.png",
        "alt": "Image showing grid margins",
        "caption": "maintain global margins."
      },
      {
        "type": "dont",
        "image": "grid/grid_margins_dont_16-9.png",
        "alt": "Image showing overly large side margins",
        "caption": "make margins too large."
      }
    ],
    "gutters": [
      {
        "type": "do",
        "image": "grid/grid_gutters_do_16-9.png",
        "alt": "Image showing grid gutters",
        "caption": "maintain global gutters."
      },
      {
        "type": "dont",
        "image": "grid/grid_gutters_dont_16-9.png",
        "alt": "Image showing overly large grid gutters",
        "caption": "make gutters too large."
      }
    ],
    "sandboxData": {
      "components": "CdrRow, CdrCol",
      "styleTag": ".grid-example-wrap { width: 100%;\n[class^=\"cdr-row\"] { position: relative;\n&::before { content: ''; position: absolute; top: 1.6rem; left: 1.6rem; height: 100%; width: 100%; background-color: rgba(130, 234, 255, 0.1);\n@media (max-width: $cdr-breakpoint-md) { top: 0.8rem; left: 0.8rem; } } }\n[class*=\"cdr-row--gutter-xxs\"]::before { top: .2rem; left: .2rem; }\n[class*=\"cdr-row--gutter-none\"]::before { top: 0; left: 0; }\n[class^=\"cdr-col__content\"] { background-color: rgba(130, 234, 255, 0.35); color: rgba(60, 120, 174, 1.0); text-align: center; } }"
    },
    "versions": [
      {
        "components": [
          {
            "name": "CdrRow",
            "api": {
              "props": [
                {
                  "name": "cols",
                  "type": "string",
                  "default": "N/A",
                  "description": "Number of equal-width columns in the row; however the value of ‘auto’ will size columns as wide as the column’s content. Possible values: {  ‘1’  through  ‘12’  |  ‘auto’  }.  Also accepts responsive values @breakpoint: ‘2 4@md’. Note that responsive modifiers for grid apply at the given breakpoint and above."
                },
                {
                  "name": "justify",
                  "type": "string",
                  "default": "N/A",
                  "description": "Justify columns within a row. See CSS Flexbox justify-content. Possible values: {  ‘left’  |  ‘center’  |  ‘right’  |  ‘around’  |  ‘between’  }. Also accepts responsive values @breakpoint: ‘center right@lg’. Note that responsive modifiers for grid apply at the given breakpoint and above."
                },
                {
                  "name": "align",
                  "type": "string",
                  "default": "N/A",
                  "description": "Align columns of different heights. See CSS Flexbox align-items. Possible values: {  ‘top’  |  ‘middle’  |  ‘bottom’  |  ‘stretch’  }. Also accepts responsive values @breakpoint:  ‘top middle@sm’. Note that responsive modifiers for grid apply at the given breakpoint and above."
                },
                {
                  "name": "gutter",
                  "type": "string",
                  "default": "N/A",
                  "description": "Defines gutter size. Default gutter size is 16px for @xs and @sm (small) and 32px for @md and @lg (medium). Possible values: {  ‘none’  |  ‘xxs’ | 'small' | 'medium' }. Also accepts responsive values @breakpoint:  none@md’. Note that responsive modifiers for grid apply at the given breakpoint and above."
                },
                {
                  "name": "vertical",
                  "type": "string",
                  "default": "N/A",
                  "description": "Changes row to a column layout. See CSS Flexbox flex-direction. Possible values: {  ‘vertical’  }. Also accepts responsive values @breakpoint:  vertical@md’. Note that responsive modifiers for grid apply at the given breakpoint and above."
                },
                {
                  "name": "wrap",
                  "type": "string",
                  "default": "N/A",
                  "description": "Enables row wrapping. Change only if overriding `nowrap`. See CSS Flexbox flex-wrap."
                },
                {
                  "name": "nowrap",
                  "type": "string",
                  "default": "N/A",
                  "description": "Disables row wrapping and enables overflow scrolling. See CSS Flexbox flex-wrap. Possible values: {  ‘nowrap’  }. Also accepts responsive values with @breakpoint: ‘nowrap@md’. Note that responsive modifiers for grid apply at the given breakpoint and above."
                },
                {
                  "name": "type",
                  "type": "string",
                  "default": "\"normal\"",
                  "description": "Sets grid to use <ul> and <li> or <div>. Possible values: {  ‘normal’  |  ‘list’  }"
                }
              ],
              "slots": [
                {
                  "name": "default",
                  "description": "Sets the innerHTML for CdrRow content. This includes text and html markup."
                }
              ]
            }
          },
          {
            "name": "CdrCol",
            "api": {
              "props": [
                {
                  "name": "span",
                  "type": "string",
                  "default": "N/A",
                  "description": "Number of columns (out of 12) the column will span. Functions like bootstrap col-* classes. Overrides widths set by ‘cols’ prop on CdrRow. Possible values: {  ‘1’  through   ‘12’  }. Also accepts responsive values with @breakpoint: ‘12 8@lg’."
                },
                {
                  "name": "offsetLeft",
                  "type": "string",
                  "default": "N/A",
                  "description": "Adds up to 12 columns of empty space to left of an individual column. Possible values: {  ‘1’  through  ‘12’  }. Also accepts responsive values with @breakpoint: ‘12 8@lg’. Note that responsive modifiers for grid apply at the given breakpoint and above."
                },
                {
                  "name": "offsetRight",
                  "type": "string",
                  "default": "N/A",
                  "description": "Adds up to 12 columns of empty space to right of an individual column. Possible values: {  ‘1’  through  ‘12’  }. Also accepts responsive values with @breakpoint: ‘12 8@lg’. Note that responsive modifiers for grid apply at the given breakpoint and above."
                },
                {
                  "name": "alignSelf",
                  "type": "string",
                  "default": "N/A",
                  "description": "Aligns individual column by overriding CdrRow alignment. See CSS Flexbox align-self. Possible values: {  ‘top’  |  ‘middle’  |  ‘bottom’  |  ‘stretch’  }. Also accepts responsive values with @breakpoint: ‘middle@sm’. Note that responsive modifiers for grid apply at the given breakpoint and above."
                },
                {
                  "name": "isRow",
                  "type": "boolean",
                  "default": "false",
                  "description": "Makes the column act as a CdrRow. Setting this value to true will expose all props of CdrRow in addition to CdrCol props."
                }
              ],
              "slots": [
                {
                  "name": "default",
                  "description": "Sets the innerHTML for CdrCol content. This includes text and html markup."
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
      "title": "Column Layout",
      "slug": "column-layout",
      "children": []
    },
    {
      "level": 2,
      "title": "Justify",
      "slug": "justify",
      "children": [
        {
          "level": 3,
          "title": "Left",
          "slug": "left",
          "children": []
        },
        {
          "level": 3,
          "title": "Center",
          "slug": "center",
          "children": []
        },
        {
          "level": 3,
          "title": "Right",
          "slug": "right",
          "children": []
        },
        {
          "level": 3,
          "title": "Around",
          "slug": "around",
          "children": []
        },
        {
          "level": 3,
          "title": "Between",
          "slug": "between",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Align",
      "slug": "align",
      "children": [
        {
          "level": 3,
          "title": "Top",
          "slug": "top",
          "children": []
        },
        {
          "level": 3,
          "title": "Bottom",
          "slug": "bottom",
          "children": []
        },
        {
          "level": 3,
          "title": "Middle",
          "slug": "middle",
          "children": []
        },
        {
          "level": 3,
          "title": "Stretch",
          "slug": "stretch",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Gutter",
      "slug": "gutter",
      "children": [
        {
          "level": 3,
          "title": "Default",
          "slug": "default",
          "children": []
        },
        {
          "level": 3,
          "title": "xxs",
          "slug": "xxs",
          "children": []
        },
        {
          "level": 3,
          "title": "None",
          "slug": "none",
          "children": []
        },
        {
          "level": 3,
          "title": "Custom",
          "slug": "custom",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Vertical",
      "slug": "vertical",
      "children": [
        {
          "level": 3,
          "title": "Default",
          "slug": "default-1",
          "children": []
        },
        {
          "level": 3,
          "title": "Vertical",
          "slug": "vertical-1",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Wrap/Nowrap",
      "slug": "wrap-nowrap",
      "children": [
        {
          "level": 3,
          "title": "Wrap (Default)",
          "slug": "wrap-default",
          "children": []
        },
        {
          "level": 3,
          "title": "Nowrap (Scroll)",
          "slug": "nowrap-scroll",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Span",
      "slug": "span",
      "children": [
        {
          "level": 3,
          "title": "12 Columns",
          "slug": "_12-columns",
          "children": []
        },
        {
          "level": 3,
          "title": "Span 2",
          "slug": "span-2",
          "children": []
        },
        {
          "level": 3,
          "title": "Span 4",
          "slug": "span-4",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Offset",
      "slug": "offset",
      "children": [
        {
          "level": 3,
          "title": "Offset Left",
          "slug": "offset-left",
          "children": []
        },
        {
          "level": 3,
          "title": "Offset Right",
          "slug": "offset-right",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Align Self",
      "slug": "align-self",
      "children": []
    },
    {
      "level": 2,
      "title": "Nested Grids",
      "slug": "nested-grids",
      "children": [
        {
          "level": 3,
          "title": "Simple",
          "slug": "simple",
          "children": []
        },
        {
          "level": 3,
          "title": "Complex",
          "slug": "complex",
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
      "title": "Anatomy",
      "slug": "anatomy",
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
      "children": []
    },
    {
      "level": 2,
      "title": "Do/Don't",
      "slug": "do-don-t",
      "children": []
    },
    {
      "level": 2,
      "title": "Responsiveness",
      "slug": "responsiveness",
      "children": []
    },
    {
      "level": 2,
      "title": "Props",
      "slug": "props",
      "children": [
        {
          "level": 3,
          "title": "CdrRow",
          "slug": "cdrrow",
          "children": []
        },
        {
          "level": 3,
          "title": "CdrCol",
          "slug": "cdrcol",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Slots",
      "slug": "slots",
      "children": [
        {
          "level": 3,
          "title": "CdrRow",
          "slug": "cdrrow-1",
          "children": []
        },
        {
          "level": 3,
          "title": "CdrCol",
          "slug": "cdrcol-1",
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
          "title": "CdrCol Content Width",
          "slug": "cdrcol-content-width",
          "children": []
        },
        {
          "level": 3,
          "title": "Nested Grids",
          "slug": "nested-grids-1",
          "children": []
        },
        {
          "level": 3,
          "title": "Utility class use",
          "slug": "utility-class-use",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": 1608590668000,
    "contributors": [
      {
        "name": "Cole Willsea",
        "email": "cowills@rei.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "components/grid-deprecated/README.md"
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
