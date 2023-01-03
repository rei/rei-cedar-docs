(window.webpackJsonp=window.webpackJsonp||[]).push([[23,31],{243:function(t,e,s){},244:function(t,e,s){"use strict";s.d(e,"b",(function(){return o})),s.d(e,"c",(function(){return d})),s.d(e,"a",(function(){return l})),s.d(e,"d",(function(){return h}));const i=/#.*$/,a=/\.(md|html)$/,r=/\/$/,n=/^(https?:|mailto:)/;function c(t){return t.replace(i,"").replace(a,"")}function o(t){return n.test(t)}function d(t){return/^mailto:/.test(t)}function l(t){if(o(t))return t;const e=t.match(i),s=e?e[0]:"",a=c(t);return r.test(a)?t:a+".html"+s}function h(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},256:function(t,e,s){"use strict";s(243)},259:function(t,e,s){"use strict";s.r(e);var i=s(244),a={props:{item:{required:!0}},computed:{link(){return Object(i.a)(this.item.link)}},methods:{isExternal:i.b,isMailto:i.c}},r=(s(256),s(9)),n=Object(r.a)(a,(function(){var t=this,e=t._self._c;return t.isExternal(t.link)?e("a",{staticClass:"nav-link cdr-doc-side-navigation__link",attrs:{href:t.link,target:t.isMailto(t.link)?null:"_blank",rel:t.isMailto(t.link)?null:"noopener noreferrer"}},[t._v(t._s(t.item.text))]):e("router-link",{staticClass:"nav-link cdr-doc-side-navigation__link",attrs:{to:t.link,exact:"/"===t.link}},[t._v(t._s(t.item.text))])}),[],!1,null,null,null);e.default=n.exports},280:function(t,e,s){},323:function(t,e,s){"use strict";s(280)},382:function(t,e,s){"use strict";s.r(e);var i={components:{NavLink:s(259).default},computed:{data(){return this.$page.frontmatter},actionLink(){return{link:this.data.actionLink,text:this.data.actionText}}}},a=(s(323),s(9)),r=Object(a.a)(i,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("div",{staticClass:"hero stack-4"},[t.data.heroImage?e("cdr-img",{staticClass:"hero__image",attrs:{src:t.$withBase(t.data.heroImage),ratio:"2-1",crop:"y-center x-center",cover:"",alt:"hero"}}):t._e(),t._v(" "),e("div",{staticClass:"hero__container align-center"},[e("cdr-text",{staticClass:"stack-1 hero-heading"},[t._v(t._s(t.data.heroTitle))]),t._v(" "),e("p",{staticClass:"hero__description"},[t._v(t._s(t.data.heroDescription))])],1)],1),t._v(" "),e("div",{staticClass:"container"},[e("cdr-grid",{staticClass:"home-grid stack-4"},[e("div",[e("cdr-img",{staticClass:"getting-started-image",attrs:{src:t.$withBase("home/gettingstarted_icon.png"),ratio:"16-9",cover:"",radius:"rounded"}})],1),t._v(" "),e("div",[e("div",[e("h2",{staticClass:"home-heading"},[t._v("Getting Started")]),t._v(" "),e("p",{staticClass:"home-subheading"},[t._v("Learn how to start using Cedar components with handy onboarding guides.")]),t._v(" "),e("cdr-grid",{staticClass:"home-grid--sub-grid",attrs:{gutter:"small"}},[e("div",[e("cdr-button",{attrs:{tag:"a",href:t.$withBase("/resources/for-designers/"),modifier:"secondary"}},[t._v("\n                View Designer Guide\n              ")])],1),t._v(" "),e("div",[e("cdr-button",{attrs:{tag:"a",href:t.$withBase("/resources/for-developers/"),modifier:"secondary"}},[t._v("\n                View Developer Guide\n              ")])],1)])],1)])]),t._v(" "),e("div",{staticClass:"home-hr stack-4",attrs:{role:"presentation"}}),t._v(" "),e("cdr-grid",{staticClass:"home-grid stack-4"},[e("div",[e("div",{staticClass:"align-center"},[e("cdr-img",{staticClass:"home-start-image",attrs:{src:t.$withBase("home/foundation_icon.png"),ratio:"square",radius:"rounded",cover:""}}),t._v(" "),e("h2",{staticClass:"home-heading"},[t._v("Foundation")]),t._v(" "),e("cdr-text",{staticClass:"stack-1"},[t._v("Build cohesive digital experiences with the basic design elements that comprise the Cedar visual language.")]),t._v(" "),e("cdr-link",{attrs:{href:t.$withBase("/foundation/color/"),modifier:"standalone"}},[t._v("Start with color")])],1)]),t._v(" "),e("div",[e("div",{staticClass:"align-center"},[e("cdr-img",{staticClass:"home-start-image",attrs:{src:t.$withBase("home/components_icon.png"),ratio:"square",radius:"rounded",cover:""}}),t._v(" "),e("h2",{staticClass:"home-heading"},[t._v("Components")]),t._v(" "),e("cdr-text",{staticClass:"stack-1"},[t._v("Use components as building blocks to create new digital products - usage, visual guidelines, and code included.")]),t._v(" "),e("cdr-link",{attrs:{href:t.$withBase("/components/buttons/"),modifier:"standalone"}},[t._v("Start with buttons")])],1)])]),t._v(" "),e("div",{staticClass:"home-hr-tree stack-4"},[e("cdr-img",{staticClass:"home-hr-tree__image",attrs:{src:t.$withBase("home/hr_tree.png"),role:"presentation"}})],1),t._v(" "),e("h2",{staticClass:"home-heading align-center stack-4"},[t._v("Resources")]),t._v(" "),e("cdr-grid",{staticClass:"home-grid stack-4"},[e("div",[e("div",{staticClass:"home-card"},[e("cdr-grid",{staticClass:"home-grid--card-grid"},[e("div",{attrs:{span:"9"}},[e("div",[e("cdr-text",{staticClass:"home-card-heading stack-1",attrs:{tag:"h3"}},[t._v("Cedar Design Libraries")]),t._v(" "),e("cdr-link",{attrs:{href:t.$withBase("/resources/for-designers/#design-toolkits"),modifier:"standalone"}},[t._v("Learn more about the toolkit")])],1)]),t._v(" "),e("div",{staticStyle:{"justify-items":"end"}},[e("div",[e("cdr-img",{staticClass:"home-resource-icon",attrs:{src:t.$withBase("sketch_icon.png")}})],1)])])],1)]),t._v(" "),e("div",[e("div",{staticClass:"home-card"},[e("cdr-grid",{staticClass:"home-grid--card-grid"},[e("div",{attrs:{span:"9"}},[e("div",[e("cdr-text",{staticClass:"home-card-heading stack-1",attrs:{tag:"h3"}},[t._v("Vue.js components")]),t._v(" "),e("cdr-link",{attrs:{href:"https://www.npmjs.com/package/@rei/cedar",target:"_blank",modifier:"standalone"}},[t._v("View the NPM repository")])],1)]),t._v(" "),e("div",{staticStyle:{"justify-items":"end"}},[e("div",[e("cdr-img",{staticClass:"home-resource-icon",attrs:{src:t.$withBase("vue_icon.png")}})],1)])])],1)]),t._v(" "),e("div",[e("div",{staticClass:"home-card"},[e("cdr-text",{staticClass:"home-card-heading stack-1",attrs:{tag:"h3"}},[t._v("Contribute to Cedar")]),t._v(" "),e("cdr-text",{staticClass:"stack-1"},[t._v("The Cedar team welcomes contributions from the community. Learn how to become a pilot contributor.  ")]),t._v(" "),e("cdr-link",{attrs:{href:t.$withBase("/about/contributing-to-cedar/"),modifier:"standalone"}},[t._v("Help build Cedar")])],1)]),t._v(" "),e("div",[e("div",{staticClass:"home-card"},[e("cdr-text",{staticClass:"home-card-heading stack-1",attrs:{tag:"h3"}},[t._v("Feedback & support")]),t._v(" "),e("cdr-text",{staticClass:"stack-1"},[t._v("Questions, ideas, or comments? Your feedback can help improve Cedar. ")]),t._v(" "),e("cdr-link",{attrs:{href:t.$withBase("/about/cedar-design-system/get-in-touch//"),modifier:"standalone"}},[t._v("Get in touch")])],1)])])],1)])}),[],!1,null,null,null);e.default=r.exports}}]);