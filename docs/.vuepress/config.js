module.exports = {
  base: process.env.NODE_ENV === "production" ? "/rei-cedar-docs/" : "/",
  title: "Cedar Design System | REI Co-op",
  description:
    "The Cedar Design System provides digital teams with reusable UI components based on REI’s visual language.",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico"
      }
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "/cdr-fonts.css"
      }
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "/cedar.css"
      }
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "/back-to-top-btn.css"
      }
    ]
  ],
  ga: '',
  plugins: [
    ['@vuepress/google-analytics', { ga: 'UA-129829250-1' }],
    'flowchart'
  ],
  markdown: {
    lineNumbers: true,
    anchor: { permalink: true, permalinkBefore: true, permalinkSymbol: '#' } // generate links to headings
  },
  themeConfig: {
    logo: "/doc-site-logo.svg",
    search: false,
    nav: [
      {
        text: "Release Notes",
        items: [
          { text: "Summer 2021", link: "/release-notes/summer-2021/" },
          { text: "Spring 2021", link: "/release-notes/spring-2021/" },
          { text: "Winter 2021", link: "/release-notes/winter-2021/" },
          { text: "Fall 2020", link: "/release-notes/fall-2020/" },
          { text: "Deprecated", link: "/release-notes/deprecated/" },
          { text: "Archive", link: "/release-notes/archive/" },
        ]
      },
      {
        text: "About",
        items: [
          { text: "Cedar Design System", link: "/about/cedar-design-system/" },
          { text: "Contributing to Cedar", link: "/about/contributing-to-cedar/" },
          { text: "Browser Support", link: "/about/browser-support/" }
        ]
      },
      {
        text: "Getting Started",
        items: [
          { text: "As a Designer", link: "/getting-started/as-a-designer/" },
          { text: "As a Developer", link: "/getting-started/as-a-developer/" },
          { text: "As a Mobile Developer", link: "/getting-started/as-a-mobile-developer/" },
          { text: "Hand-off Process", link: "/getting-started/hand-off/" },
          { text: "Using Cedar", link: "/getting-started/using-cedar/" },
          { text: "Building Reusable Components", link: "/getting-started/building-components-with-cedar/" },
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
          { text: "Motion", link: "/foundation/motion/" },
          { text: "Typography", link: "/foundation/typography/" },
          { text: "Spacing", link: "/foundation/spacing/" },
          { text: "Responsive", link: "/foundation/responsive/" },
        ]
      },
      {
        text: "Patterns",
        items: [
          { text: "Alerts", link: "/patterns/alerts/", },
          { text: "Form Input Types", link: "/patterns/forms-input-types/" },
          { text: "Form Validation", link: "/patterns/form-validation/" },
          { text: "Messaging", link: "/patterns/messaging/", },
          { text: "Update and Loading Notifications", link: "/patterns/update-and-loading-notifications/" },
          { text: "Status Notifications", link: "/patterns/status-notifications/" },
        ]
      },
      {
        text: "Components",
        items: [
          { text: "Component Variables", link: "/components/component-variables/" },
          { text: "Utilities", link: "/components/utilities/" },
          { text: "Accordion", link: "/components/accordion/" },
          { text: "Banner", link: "/components/banner/" },
          { text: "Block Quote", link: "/components/block-quote/" },
          { text: "Breadcrumb", link: "/components/breadcrumb/" },
          { text: "Buttons", link: "/components/buttons/" },
          { text: "Caption", link: "/components/caption/" },
          { text: "Card", link: "/components/card/" },
          { text: "Checkboxes", link: "/components/checkboxes/" },
          { text: "Chips", link: "/components/chips/" },
          { text: "Container", link: "/components/container/" },
          { text: "Form Group", link: "/components/form-group/" },
          { text: "Grid", link: "/components/grid/" },
          { text: "Icons", link: "/components/icon/" },
          { text: "Images", link: "/components/image/" },
          { text: "Inputs", link: "/components/input/" },
          { text: "Links", link: "/components/links/" },
          { text: "Lists", link: "/components/lists/" },
          { text: "Modal", link: "/components/modal/" },
          { text: "Pagination", link: "/components/pagination/" },
          { text: "Popover", link: "/components/popover/" },
          { text: "Pull Quote", link: "/components/pull-quote/" },
          { text: "Radio Buttons", link: "/components/radio/" },
          { text: "Ratings", link: "/components/rating/" },
          { text: "Select", link: "/components/selects/" },
          { text: "Table", link: "/components/table/" },
          { text: "Tabs", link: "/components/tabs/" },
          { text: "Text", link: "/components/text/" },
          { text: "Tooltip", link: "/components/tooltip/" }
        ]
      },
      {
        text: "Icons",
        items: [
          { text: "Overview", link: "/icons/overview/" },
          { text: "Library", link: "/icons/library/" }
        ]
      },
      {
        text: "Tokens",
        items: [
          { text: "Overview", link: "/tokens/overview/" },
          { text: "All Tokens", link: "/tokens/all-tokens/" },
        ]
      }
    ]
  },
  configureWebpack(config) {
    // make npm link work
    if (process.env.NODE_ENV !== "production") {
      config.resolve.symlinks = false;
    }
  },
  chainWebpack(config, isServer) {
    config.resolve.alias.set("$vue", "vue/dist/vue.esm.js");
    config.resolve.alias.set("@rei/cdr-tokens$", "@rei/cdr-tokens/dist/js/cdr-tokens.esm.js");
    config.module.rules.delete('svg')
    config.module
      .rule('svg')
      .test(/\.svg$/)
      .use('svg-inline-loader')
      .loader('svg-inline-loader')
      .end()
  }
};
