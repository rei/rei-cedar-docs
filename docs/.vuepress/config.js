module.exports = {
  title: "REI-Cedar Documentation",
  description: "A demo documentation using VuePress",
  themeConfig: {
    nav: [
      { text: "BUTTON", link: "/button/" },
      { text: "LINK", link: "/link/" },
      { text: "LIST", link: "/list/" }
    ],
    sidebar: [
      {
        title: "Button",
        collapsable: true,
        children: ["/button/examples", "/button/api"]
      },
      {
        title: "link",
        collapsable: true,
        children: ["/link/examples", "/link/api"]
      },
      {
        title: "list",
        collapsable: true,
        children: ["/list/examples", "/list/api"]
      }
    ]
  }
};
