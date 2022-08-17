export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroTitle": "Welcome to Cedar",
    "heroImage": "home/hero-banner.jpg",
    "heroDescription": "The Cedar Design System provides digital teams with reusable UI components based on REI’s visual language.",
    "title_metadata": false,
    "breadcrumbs": false,
    "summary": false,
    "intro_size": "default"
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1533141612000,
    "contributors": [
      {
        "name": "Lance Harper",
        "email": "laharpe@rei.com",
        "commits": 3
      },
      {
        "name": "Kevin Powell",
        "email": "kevin@eightshapes.com",
        "commits": 2
      },
      {
        "name": "Unknown",
        "email": "allen.taylor@paviasystems.com",
        "commits": 1
      },
      {
        "name": "mhewson",
        "email": "mhewson@gmail.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "README.md"
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
