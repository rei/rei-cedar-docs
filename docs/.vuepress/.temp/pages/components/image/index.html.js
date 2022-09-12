export const data = {
  "key": "v-64d79974",
  "path": "/components/image/",
  "title": "Images",
  "lang": "en-US",
  "frontmatter": {
    "title": "Images",
    "layout_type": "LayoutComponent",
    "summary": "Captures the user’s attention and communicate your message",
    "title_metadata": "CdrImg",
    "sandboxData": {
      "components": "CdrImg"
    },
    "versions": [
      {
        "components": [
          {
            "name": "CdrLink",
            "api": {
              "props": [
                {
                  "name": "alt",
                  "type": "string",
                  "default": "empty",
                  "description": "Sets the alternate text attribute for the image. Default value is empty."
                },
                {
                  "name": "src",
                  "type": "string",
                  "default": "empty",
                  "description": "Sets image source URL."
                },
                {
                  "name": "ratio",
                  "type": "string",
                  "default": "N/A",
                  "description": "Sets the aspect ratio and scales the image as large as possible without cropping or stretching the image. Possible values: {  'auto'  |  'square'  |  '1-2'  |  '2-3'  |  '3-4'  |  '9-16'  |  '2-1'  |  '3-2'  |  '4-3'  |  '16-9'  }"
                },
                {
                  "name": "crop",
                  "type": "string",
                  "default": "N/A",
                  "description": "Requires ‘ratio’ to define the starting position for cropping image. Image will overflow and not be displayed. Possible values: {  ‘left’  |  ‘x-center’  |  ‘right’  |  ‘top’  |  ‘y-center’  |  ‘bottom’  }"
                },
                {
                  "name": "cover",
                  "type": "boolean",
                  "default": "N/A",
                  "description": "Requires ‘ratio’ to scale the image to be as large as possible to fill the entire background area."
                },
                {
                  "name": "radius",
                  "type": "string",
                  "default": "N/A",
                  "description": "Sets a border radius to the root element. Possible values: {  'circle'  |  ‘rounded’  }"
                },
                {
                  "name": "modifier",
                  "type": "string",
                  "default": "N/A",
                  "description": "Modifies the style variant for this component. Possible value: {  ‘responsive’  }"
                }
              ],
              "slots": [
                {
                  "name": "default",
                  "description": "Set the innerHTML for CdrImg. This includes text and html markup."
                }
              ]
            }
          }
        ],
        "version": "0.1.0"
      }
    ],
    "see_also": [
      {
        "text": "See Also"
      },
      {
        "text": "Caption",
        "href": "../caption/"
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
      "title": "Managing Images",
      "slug": "managing-images",
      "children": []
    },
    {
      "level": 2,
      "title": "Displaying Images as Backgrounds",
      "slug": "displaying-images-as-backgrounds",
      "children": []
    },
    {
      "level": 2,
      "title": "Ratio Auto",
      "slug": "ratio-auto",
      "children": []
    },
    {
      "level": 2,
      "title": "Shaping Images",
      "slug": "shaping-images",
      "children": [
        {
          "level": 3,
          "title": "Rounded",
          "slug": "rounded",
          "children": []
        },
        {
          "level": 3,
          "title": "Circle",
          "slug": "circle",
          "children": []
        },
        {
          "level": 3,
          "title": "Error Event Handler",
          "slug": "error-event-handler",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Lazy Loading",
      "slug": "lazy-loading",
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
          "title": "Aspect Ratio",
          "slug": "aspect-ratio",
          "children": []
        },
        {
          "level": 3,
          "title": "Quality",
          "slug": "quality",
          "children": []
        },
        {
          "level": 3,
          "title": "Sizing",
          "slug": "sizing",
          "children": []
        },
        {
          "level": 3,
          "title": "Color and Contrast",
          "slug": "color-and-contrast",
          "children": []
        },
        {
          "level": 3,
          "title": "Cropping Images",
          "slug": "cropping-images",
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
          "title": "File Names",
          "slug": "file-names",
          "children": []
        },
        {
          "level": 3,
          "title": "Overlaid Text",
          "slug": "overlaid-text",
          "children": []
        },
        {
          "level": 3,
          "title": "Decorative Images",
          "slug": "decorative-images",
          "children": []
        },
        {
          "level": 3,
          "title": "Alternative Text",
          "slug": "alternative-text",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Responsiveness",
      "slug": "responsiveness",
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
          "title": "Ratio",
          "slug": "ratio",
          "children": []
        },
        {
          "level": 3,
          "title": "Cover",
          "slug": "cover",
          "children": []
        },
        {
          "level": 3,
          "title": "Crop",
          "slug": "crop",
          "children": []
        },
        {
          "level": 3,
          "title": "Radius",
          "slug": "radius",
          "children": []
        },
        {
          "level": 3,
          "title": "Modifiers",
          "slug": "modifiers",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Performance",
      "slug": "performance",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1633454052000,
    "contributors": [
      {
        "name": "Cole Willsea",
        "email": "cowills@rei.com",
        "commits": 19
      },
      {
        "name": "mhewson",
        "email": "mhewson@gmail.com",
        "commits": 10
      },
      {
        "name": "RaunCraig",
        "email": "RaunCraig@users.noreply.github.com",
        "commits": 7
      },
      {
        "name": "Lance Harper",
        "email": "laharpe@rei.com",
        "commits": 6
      },
      {
        "name": "Darin Trimillos",
        "email": "darin@trimillos.com",
        "commits": 4
      },
      {
        "name": "lancetharper",
        "email": "lancetharper@users.noreply.github.com",
        "commits": 3
      },
      {
        "name": "Darin Trimillos",
        "email": "darintrimillos@users.noreply.github.com",
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
        "name": "cole",
        "email": "48567940+cowills@users.noreply.github.com",
        "commits": 1
      },
      {
        "name": "RatulaREI",
        "email": "51766235+RatulaREI@users.noreply.github.com",
        "commits": 1
      },
      {
        "name": "RachelDoren",
        "email": "racheledoren@gmail.com",
        "commits": 1
      },
      {
        "name": "shart-rei",
        "email": "43073801+shart-rei@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "components/image/README.md"
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
