export const data = {
  "key": "v-9920e98c",
  "path": "/foundation/radius/",
  "title": "Radius",
  "lang": "en-US",
  "frontmatter": {
    "title": "Radius",
    "title_metadata": false,
    "layout_type": "LayoutArticle",
    "summary": false,
    "breadcrumbs": [
      {
        "text": "Foundation/"
      }
    ],
    "basics": [
      {
        "image": "radius/radius-basics-1.png",
        "ratio": "4-3",
        "alt": "A graphic showing a rectangle with rounded edges with a pointer cursor nearby.",
        "caption": "With few exceptions, interactive components are rounded."
      },
      {
        "image": "radius/radius-basics-2.png",
        "ratio": "4-3",
        "alt": "A graphic showing a larger and smaller rectangle. The smaller rectangle has less rounded corners than the larger rectangle",
        "caption": "An object's border radius should be proportional to its shortest side."
      }
    ],
    "nested": [
      {
        "image": "radius/radius-nested-1.png",
        "ratio": "4-3",
        "alt": "A graphic showing a larger rectangle with four smaller rectangles nested inside. The larger rectangle has a border radius as well as the nested rectangles",
        "caption": "A nested object should inherit its parent's border type: rounded or not rounded."
      },
      {
        "image": "radius/radius-nested-2.png",
        "ratio": "4-3",
        "alt": "A graphic showing a larger rectangle with a smaller rectangle nested within. Both have a border radius. The nested rectangle has a smaller border radius than the larger one",
        "caption": "The border radius of a nested, rounded object should be smaller than that of its parent."
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
          "title": "Basics",
          "slug": "basics",
          "children": []
        },
        {
          "level": 3,
          "title": "Nested objects",
          "slug": "nested-objects",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Application",
      "slug": "application",
      "children": [
        {
          "level": 3,
          "title": "Tokenized options",
          "slug": "tokenized-options",
          "children": []
        },
        {
          "level": 3,
          "title": "When to use",
          "slug": "when-to-use",
          "children": []
        },
        {
          "level": 3,
          "title": "When to use a different approach",
          "slug": "when-to-use-a-different-approach",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": 1637776954000,
    "contributors": [
      {
        "name": "Kenji Crosland",
        "email": "kcrosla@rei.com",
        "commits": 2
      },
      {
        "name": "rebecca-larue",
        "email": "53016572+rebecca-larue@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "foundation/radius/README.md"
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
