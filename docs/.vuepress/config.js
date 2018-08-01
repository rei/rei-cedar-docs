module.exports = {
  base: process.env.NODE_ENV === "production" ? "/rei-cedar-docs/" : "/",
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
          { text: "As a Designer", link: "/getting-started/as-a-designer/" },
          { text: "As a Developer", link: "/getting-started/as-a-developer/" },
          {
            text: "As an Adopting Team",
            link: "/getting-started/as-an-adopter/"
          }
        ]
      },
      {
        text: "Foundation",
        items: [
          { text: "Experience Principles", link: "/foundation/experience-principles/" },
          { text: "Color", link: "/foundation/color/" },
          { text: "Iconography", link: "/foundation/iconography/" },
          { text: "Motion", link: "/foundation/motion/" },
          { text: "Typography", link: "/foundation/typography/" }
        ]
      },
      {
        text: "Components",
        items: [
          { text: "Accordion", link: "/components/accordion/" },
          { text: "Breadcrumb", link: "/components/breadcrumb/" },
          { text: "Button", link: "/components/button/" },
          { text: "Call to Action", link: "/components/cta/" },
          { text: "Checkbox", link: "/components/checkbox/" },
          { text: "Data Table", link: "/components/table/" },
          { text: "Grid", link: "/components/grid/" },
          { text: "Heading", link: "/components/heading/" },
          { text: "Image", link: "/components/image/" },
          { text: "Link", link: "/components/link/" },
          { text: "List", link: "/components/list/" },
          { text: "Paragraph", link: "/components/paragraph/" },
          { text: "Radio", link: "/components/radio/" }
        ]
      },
      {
        text: "About",
        items: [
          { text: "Cedar Design System", link: "/about/cedar-design-system/" },
          { text: "Browser Support", link: "/about/browser-support/" }
        ]
      }
    ]
  },
  chainWebpack(config) {
    config.resolve.alias.set("$vue", "vue/dist/vue.esm.js");
  }
};
