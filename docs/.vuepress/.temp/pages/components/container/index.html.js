export const data = {
  "key": "v-157089e4",
  "path": "/components/container/",
  "title": "Container",
  "lang": "en-US",
  "frontmatter": {
    "title": "Container",
    "layout_type": "LayoutComponent",
    "summary": "Provides base margins and responsive layout logic for pages",
    "title_metadata": "CdrContainer",
    "breadcrumbs": [
      {
        "text": "Components/"
      }
    ],
    "sandboxData": {
      "components": "CdrContainer"
    },
    "versions": [
      {
        "components": [
          {
            "name": "CdrContainer",
            "api": {
              "props": [
                {
                  "name": "tag",
                  "type": "string",
                  "default": "'div'",
                  "description": ""
                },
                {
                  "name": "modifier",
                  "type": "string",
                  "default": "'static'",
                  "description": "Controls whether container is static or fluid width.  Possible values: { 'static' | 'fluid' }"
                }
              ],
              "slots": [
                {
                  "name": "default",
                  "description": "Slot for CdrContainer content."
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
        }
      ]
    }
  ],
  "git": {
    "updatedTime": 1634337680000,
    "contributors": [
      {
        "name": "Ben Griffin",
        "email": "bgriffi@rei.com",
        "commits": 1
      },
      {
        "name": "Cole Willsea",
        "email": "cowills@rei.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "components/container/README.md"
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
