module.exports = {
  title: "REI CO-OP Design System",
  description: "A demo documentation using VuePress",
  head: [
    ['link', { rel: 'stylesheet', href:'https://fonts.googleapis.com/css?family=Roboto+Condensed:400|Roboto:400' }]
  ],
  themeConfig: {
    logo: "doc-site-logo.png",
    search: false,
    nav: [
      { 
        text: "Home",
        link: "/" 
      },
      { 
        text: "Release History",
        link: "#" 
      },
      { 
        text: "Getting Started",
        link: "#" 
      },
      { 
        text: "Foundation",
        link: "#" 
      },
      { text: "Components",
        items: [
          { text: "Overview", link: "/components/" },
          { text: "Button", link: "/components/button/" },
          { text: "Link", link: "/components/link/" },
          { text: "List", link: "/components/list/" }
        ] 
      },
    ]
  }
};
