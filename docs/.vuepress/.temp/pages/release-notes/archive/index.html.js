export const data = {
  "key": "v-aa11280c",
  "path": "/release-notes/archive/",
  "title": "Release Notes Archive",
  "lang": "en-US",
  "frontmatter": {
    "title": "Release Notes Archive",
    "title_metadata": false,
    "layout_type": "LayoutArticle",
    "summary": false
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1633985698000,
    "contributors": [
      {
        "name": "Cole Willsea",
        "email": "cowills@rei.com",
        "commits": 7
      },
      {
        "name": "Ben Griffin",
        "email": "bgriffi@rei.com",
        "commits": 1
      },
      {
        "name": "Lance Harper",
        "email": "laharpe@rei.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "release-notes/archive/README.md"
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
