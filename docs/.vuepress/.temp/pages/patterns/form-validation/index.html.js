export const data = {
  "key": "v-6e8cf7c0",
  "path": "/patterns/form-validation/",
  "title": "Form Validation",
  "lang": "en-US",
  "frontmatter": {
    "title": "Form Validation",
    "title_metadata": false,
    "layout_type": "LayoutArticle",
    "summary": "Form errors and warning responses based on user input",
    "sandboxData": {
      "components": "CdrInput, CdrLink, CdrSelect, CdrBanner",
      "styleTag": ".form-space {margin-top: $cdr-space-two-x;}"
    },
    "breadcrumbs": [
      {
        "text": "Patterns/Forms, Patterns/Messaging"
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
        }
      ]
    },
    {
      "level": 2,
      "title": "Best Practices for Form Validation",
      "slug": "best-practices-for-form-validation",
      "children": [
        {
          "level": 3,
          "title": "Validation Requirements",
          "slug": "validation-requirements",
          "children": []
        },
        {
          "level": 3,
          "title": "Error Prevention",
          "slug": "error-prevention",
          "children": []
        },
        {
          "level": 3,
          "title": "Error Detection",
          "slug": "error-detection",
          "children": []
        },
        {
          "level": 3,
          "title": "Validation Notifications",
          "slug": "validation-notifications",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "More Reading and Resources",
      "slug": "more-reading-and-resources",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1634763559000,
    "contributors": [
      {
        "name": "mhewson",
        "email": "mhewson@rei.com",
        "commits": 11
      },
      {
        "name": "mking18",
        "email": "43073485+mking18@users.noreply.github.com",
        "commits": 3
      }
    ]
  },
  "filePathRelative": "patterns/form-validation/Readme.md"
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
