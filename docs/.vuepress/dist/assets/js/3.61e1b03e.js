(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{206:function(t,e,s){"use strict";s.r(e);var i=s(0),r=Object(i.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),s("p",[t._v("Note that the tag itself does not determine display.")]),t._m(3),s("p",[t._v("In addition to our bare list the following modifiers are provided which accommodate our standard text list options.")]),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),s("p",[t._v("The compact modifier reduces the vertical space between list items for non inline list variants. For inline variants the compact modifier reduces the horizontal space between list items.")]),t._m(12),t._m(13),s("p",[t._v("The inline modifier is intended for generic or unordered list variants. In ether case this can be combined with compact to adjust the spacing of inline list variants.")]),t._m(14),t._m(15),t._m(16),s("p",[t._v("This section is focused on semantic implementations of list.")]),t._m(17),t._m(18),t._m(19),t._m(20),s("p",[t._v("Individual list items can contain a variety of HTML elements, including paragraphs, headings, form elements, and other (nested) lists.")]),t._m(21),t._m(22),t._m(23),t._m(24),t._m(25),t._m(26),t._m(27),t._m(28),s("p",[t._v("Placing the component into a your application is as simple as importing it:")]),t._m(29),t._m(30),s("ul",[s("li",[t._v("Join us on Slack at "),s("a",{attrs:{href:"https://rei.slack.com/messages/CA58YCGN4",target:"_blank",rel:"noopener noreferrer"}},[t._v("#design-systems"),s("OutboundLink")],1),t._v(".")]),t._m(31)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Usage")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("By default the "),e("code",[this._v("cdr-list")]),this._v(' component renders as an unordered and undecorated "bare" list.\nTo use an ordered list pass '),e("code",[this._v("ol")]),this._v(" to the tag property.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v(' <cdr-list tag="ol">\n   <li>..</li>\n </cdr-list>\n')])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br"),e("span",{staticClass:"line-number"},[this._v("3")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"modifiers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#modifiers","aria-hidden":"true"}},[this._v("#")]),this._v(" Modifiers")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("unordered")]),e("li",[this._v("ordered")]),e("li",[this._v("compact")]),e("li",[this._v("inline")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"unordered"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unordered","aria-hidden":"true"}},[this._v("#")]),this._v(" Unordered")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The unordered modifier adds a bullet decorator to child list items and a "),e("code",[this._v("en-dash")]),this._v(" decorator to grand child list items. this variant can be used on both "),e("code",[this._v("ul")]),this._v(" or "),e("code",[this._v("ol")]),this._v(" list types.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('  <cdr-list modifier="unordered">\n')])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"ordered"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ordered","aria-hidden":"true"}},[this._v("#")]),this._v(" ordered")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The ordered modifier adds a numeric decorator to child list items and a "),e("code",[this._v("en-dash")]),this._v(" decorator to grand child list items. this variant can be used on both "),e("code",[this._v("ul")]),this._v(" or "),e("code",[this._v("ol")]),this._v(" list types.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('  <cdr-list\n    tag="ol"\n    modifier="ordered"\n  >\n')])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br"),e("span",{staticClass:"line-number"},[this._v("3")]),e("br"),e("span",{staticClass:"line-number"},[this._v("4")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"compact"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compact","aria-hidden":"true"}},[this._v("#")]),this._v(" Compact")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('  <cdr-list modifier="compact unordered">\n')])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"inline"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#inline","aria-hidden":"true"}},[this._v("#")]),this._v(" Inline")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('    <cdr-list modifier="inline compact unordered">\n')])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"accessibility"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#accessibility","aria-hidden":"true"}},[this._v("#")]),this._v(" Accessibility")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("cdr-list")]),this._v(" component has decoupled the semantic tags "),e("code",[this._v("ul")]),this._v(" and "),e("code",[this._v("ol")]),this._v(" from the visual presentation provided by our modifiers.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Note")]),this._v(" that it is perfectly valid to render a semantic ordered list "),e("code",[this._v("ol")]),this._v(" as a visually non styled or bulleted list using our modifiers.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('  <cdr-list tag="ol">\n')])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Use different types of "),e("code",[this._v("cdr-list")]),this._v(" to group information according to its nature to provide orientation for users.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Unordered lists are used when the order of the items is not relevant. By default the "),e("code",[this._v("cdr-list")]),this._v(" component will use the "),e("code",[this._v("ul")]),this._v(" tag.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"unordered-list"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unordered-list","aria-hidden":"true"}},[this._v("#")]),this._v(" Unordered list")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The unordered list consists of one "),e("code",[this._v("<ul>")]),this._v(" element and multiple list item "),e("code",[this._v("<li>")]),this._v(" elements.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"ordered-list"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ordered-list","aria-hidden":"true"}},[this._v("#")]),this._v(" Ordered list")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The ordered list consists of one "),e("code",[this._v("<ol>")]),this._v(" element and multiple list item "),e("code",[this._v("<li>")]),this._v(" elements.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"nested-lists"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nested-lists","aria-hidden":"true"}},[this._v("#")]),this._v(" Nested lists")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Every "),e("code",[this._v("cdr-list")]),this._v(" can be nested into another list. Assistive technology can easily inform users about the number of steps.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('  <cdr-list>\n    <li> Unordered list item text\n      <cdr-list tag="ol">\n        <li>Ordered list item text</li>\n      </cdr-list>\n    </li>\n  </cdr-list>\n\n')])]),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("npm i @rei/cdr-list\n")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"contributing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#contributing","aria-hidden":"true"}},[this._v("#")]),this._v(" Contributing")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:""}},[this._v("#Log an issue")]),this._v("https://github.com/rei/rei-cedar/issues.")])}],!1,null,null,null);e.default=r.exports}}]);