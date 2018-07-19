module.exports = {
  base: process.env.NODE_ENV === 'production' ? "/rei-cedar-docs/" : "/",
  title: "REI CO-OP Design System",
  description: "A demo documentation using VuePress",
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto+Condensed:400|Roboto:400|Roboto+Mono:400"
      }
    ]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    logo: "/doc-site-logo.svg",
    search: false,
    nav: [
      {
        text: "Release History",
        link: "/release-history/"
      },
      {
        text: "Getting Started",
        items: [
          { text: "As a Developer", link: "/getting-started/as-a-developer/" },
          { text: "As a Designer", link: "/getting-started/as-a-designer/" }
        ]
      },
      {
        text: "Foundation",
        items: [{ text: "Color", link: "/foundation/color/" }]
      },
      {
        text: "Components",
        items: [
          { text: "Headings", link: "/components/heading/" },
          { text: "Link", link: "/components/link/" },
          { text: "Button", link: "/components/button/" },
          { text: "Paragraph", link: "/components/paragraph/" }
        ]
      },
      {
        text: "About Cedar",
        items: [
          { text: "Browser Support", link: "/about-cedar/browser-support/" }
        ]
      }
    ]
  },
  chainWebpack(config) {
    config.resolve.alias.set("$vue", "vue/dist/vue.esm.js");
  }
};
