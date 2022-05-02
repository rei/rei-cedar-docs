module.exports = {
  base: process.env.NODE_ENV === "production" ? "/rei-cedar-docs/" : "/",
  title: "Cedar Design System | REI Co-op",
  description:
    "The Cedar Design System provides digital teams with reusable UI components based on REI’s visual language.",
  head: [
    ["link", { rel: "icon", href: "/favicon-lm-dm.svg" }],
    ["link", { rel: "stylesheet", href: "/cdr-fonts.css" }],
    ["link", { rel: "stylesheet", href: "/cedar.css" }],
    ["link", { rel: "stylesheet", href: "/back-to-top-btn.css" }],
    ["meta", { property: "og:image", content: "https://rei.github.io/rei-cedar-docs/og.png" }],
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
          { text: "Spring 2022", link: "/release-notes/spring-2022/" },
          { text: "Fall 2021", link: "/release-notes/fall-2021/" },
          { text: "Summer 2021", link: "/release-notes/summer-2021/" },
          { text: "Spring 2021", link: "/release-notes/spring-2021/" },
          { text: "Winter 2021", link: "/release-notes/winter-2021/" },
          { text: "Deprecated", link: "/release-notes/deprecated/" },
          { text: "Archive", link: "/release-notes/archive/" },
        ]
      },
      {
        text: "About",
        items: [
          { text: "Cedar's Purpose & Parts", link: "/about/cedar-design-system/" },
          { text: "Contributing to Cedar", link: "/about/contributing-to-cedar/" },
          { text: "Browser Support", link: "/about/browser-support/" },
          { text: "Get in Touch", link: "/about/get-in-touch/" }
        ]
      },
      {
        text: "Resources",
        items: [
          { text: "For Designers", link: "/resources/for-designers/" },
          { text: "For Developers", link: "/resources/for-developers/"},
          { text: "Hand-off Process", link: "/resources/hand-off/" },
          { text: "Installing Cedar", link: "/resources/installing-cedar/" },
          { text: "Building Reusable Components", link: "/resources/building-components-with-cedar/" },
          { text: "Frequently Asked Questions", link: "/resources/frequently-asked-questions/" }
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
          { text: "Prominence", link: "/foundation/prominence/" },
          { text: "Radius", link: "/foundation/radius/" },
          { text: "Responsive", link: "/foundation/responsive/" },
          { text: "Spacing", link: "/foundation/spacing/" },
          { text: "Typography", link: "/foundation/typography/" },
        ]
      },
      {
        text: "Patterns",
        items: [
          { text: "Alerts", link: "/patterns/alerts/", },
          { text: "Form Input Types", link: "/patterns/forms-input-types/" },
          { text: "Form Validation", link: "/patterns/form-validation/" },
          { text: "Validation Notifications", link: "/patterns/validation-notifications/" },
          { text: "Update and Loading Notifications", link: "/patterns/update-and-loading-notifications/" },
          { text: "Status Notifications", link: "/patterns/status-notifications/" },
        ]
      },
      {
        text: "Components",
        items: [
          { text: "Component Variables", link: "/components/component-variables/" },
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
          { text: "Filmstrip", link: "/components/filmstrip/" },
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
          { text: "Toast", link: "/components/toast/" },
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
