export const data = {
  "key": "v-30010501",
  "path": "/release-notes/summer-2021/",
  "title": "Summer 2021 Release",
  "lang": "en-US",
  "frontmatter": {
    "title": "Summer 2021 Release",
    "title_metadata": false,
    "layout_type": "LayoutArticle",
    "summary": false,
    "breadcrumbs": [
      {
        "text": "10.0.0 Release Notes"
      }
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Update Steps",
      "slug": "update-steps",
      "children": []
    },
    {
      "level": 2,
      "title": "10.0.1",
      "slug": "_10-0-1",
      "children": [
        {
          "level": 3,
          "title": "Bug Fixes",
          "slug": "bug-fixes",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "New Features",
      "slug": "new-features",
      "children": [
        {
          "level": 3,
          "title": "Polyfill Removals",
          "slug": "polyfill-removals",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Breaking Changes",
      "slug": "breaking-changes",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1634247762000,
    "contributors": [
      {
        "name": "Ben Griffin",
        "email": "bgriffi@rei.com",
        "commits": 3
      },
      {
        "name": "Kenji Crosland",
        "email": "kcrosla@rei.com",
        "commits": 3
      },
      {
        "name": "Cole Willsea",
        "email": "cowills@rei.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "release-notes/summer-2021/README.md"
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
