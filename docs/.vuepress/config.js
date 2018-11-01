module.exports = {
  base: process.env.NODE_ENV === "production" ? "/rei-cedar-docs/" : "/",
  title: "Cedar Design System | REI Co-op",
  description:
    "The Cedar Design System provides digital teams with reusable UI components based on REI’s visual language.",
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto+Condensed:400|Roboto:400|Roboto+Mono:400"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico"
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
          {
            text: "Experience Principles",
            link: "/foundation/experience-principles/"
          },
          { text: "Accessibility", link: "/foundation/accessibility/" },
          { text: "Color", link: "/foundation/color/" },
          { text: "Iconography", link: "/foundation/iconography/" },
          { text: "Motion", link: "/foundation/motion/" },
          { text: "Typography", link: "/foundation/typography/" },
          { text: "Spacing", link: "/foundation/spacing/" }
        ]
      },
      {
        text: "Components",
        items: [
          { text: "Accordion", link: "/components/accordion/" },
          { text: "Block Quote", link: "/components/block-quote/" },
          { text: "Breadcrumb", link: "/components/breadcrumb/" },
          { text: "Buttons", link: "/components/buttons/" },
          { text: "Call to Action", link: "/components/cta/" },
          { text: "Caption", link: "/components/caption/" },
          { text: "Checkboxes", link: "/components/checkboxes/" },
          { text: "Grid", link: "/components/grid/" },
          { text: "Headings", link: "/components/headings/" },
          { text: "Icons", link: "/components/icon/" },
          { text: "Images", link: "/components/image/" },
          { text: "Links", link: "/components/links/" },
          { text: "Lists", link: "/components/lists/" },
          { text: "Paragraphs", link: "/components/paragraphs/" },
          { text: "Pull Quote", link: "/components/pull-quote/" },
          { text: "Radio Buttons", link: "/components/radio/" }
          /* { text: "Tabs", link: "/components/tabs/" } */
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
