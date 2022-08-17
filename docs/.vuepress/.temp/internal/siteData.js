export const siteData = {
  "base": "/",
  "lang": "en-US",
  "title": "Cedar Design System | REI Co-op",
  "description": "The Cedar Design System provides digital teams with reusable UI components based on REI’s visual language.",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon-lm-dm.svg"
      }
    ],
    [
      "link",
      {
        "rel": "stylesheet",
        "href": "/cdr-fonts.css"
      }
    ],
    [
      "link",
      {
        "rel": "stylesheet",
        "href": "/cedar.css"
      }
    ],
    [
      "link",
      {
        "rel": "stylesheet",
        "href": "/back-to-top-btn.css"
      }
    ],
    [
      "meta",
      {
        "property": "og:image",
        "content": "https://rei.github.io/rei-cedar-docs/og.png"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
