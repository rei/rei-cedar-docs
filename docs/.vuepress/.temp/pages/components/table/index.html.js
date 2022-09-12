export const data = {
  "key": "v-76f45561",
  "path": "/components/table/",
  "title": "Table",
  "lang": "en-US",
  "frontmatter": {
    "title": "Table",
    "layout_type": "LayoutComponent",
    "title_metadata": "Table, CdrTable",
    "summary": "Organizes structured content so that it is easy to scan, make comparisons, and analyze the data",
    "breadcrumbs": [
      {
        "text": "Components/"
      }
    ],
    "sandboxData": {
      "components": "CdrTable",
      "styleTag": ".advanced-table { &__header { background-color: $cdr-color-background-table-header; } }"
    },
    "versions": [
      {
        "components": [
          {
            "name": "CdrTable",
            "api": {
              "props": [
                {
                  "name": "striped",
                  "type": "Boolean",
                  "default": "false",
                  "required": "false",
                  "description": "Sets row colors to alternate between darker and lighter backgrounds. Striping will not apply when `border` is true"
                },
                {
                  "name": "border",
                  "type": "Boolean",
                  "default": "true",
                  "required": "false",
                  "description": "Adds borders between rows. Will disable `striped` if both are true"
                },
                {
                  "name": "full-width",
                  "type": "Boolean, string",
                  "default": "true",
                  "required": "false",
                  "description": "Sets the width to 100%. Also accepts space separated strings for breakpoints that it should be full width: { '@xs' | '@sm' | '@md' | '@lg' }"
                },
                {
                  "name": "responsive",
                  "type": "Boolean",
                  "default": "true",
                  "required": "false",
                  "description": "Makes the table scroll horizontally when it would overflow its container"
                },
                {
                  "name": "hover",
                  "type": "Boolean",
                  "default": "false",
                  "required": "false",
                  "description": "Adds a darker background on row hover"
                },
                {
                  "name": "size",
                  "type": "string",
                  "default": "'medium'",
                  "description": "Sets the table size (cell padding); values can target responsive breakpoints. Breakpoint values are: xs, sm, md, and lg. Examples: { 'small' | 'medium' | 'large' | 'large@sm' }"
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
      "title": "Default",
      "slug": "default",
      "children": []
    },
    {
      "level": 2,
      "title": "Striped",
      "slug": "striped",
      "children": []
    },
    {
      "level": 2,
      "title": "Border",
      "slug": "border",
      "children": []
    },
    {
      "level": 2,
      "title": "Advanced with custom styles",
      "slug": "advanced-with-custom-styles",
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
      "title": "Props",
      "slug": "props",
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
    "updatedTime": 1605820683000,
    "contributors": [
      {
        "name": "michael",
        "email": "mhewson@gmail.com",
        "commits": 6
      },
      {
        "name": "Cole Willsea",
        "email": "cowills@rei.com",
        "commits": 5
      },
      {
        "name": "Lance Harper",
        "email": "laharpe@rei.com",
        "commits": 2
      },
      {
        "name": "mking18",
        "email": "43073485+mking18@users.noreply.github.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "components/table/README.md"
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
