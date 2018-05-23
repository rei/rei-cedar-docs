module.exports = {
  title: "REI CO-OP Design System",
  description: "A demo documentation using VuePress",
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
          { text: "Button", link: "/button/" },
          { text: "Link", link: "/link/" },
          { text: "List", link: "/list/" }
        ] 
      },
    ]
  }
};
