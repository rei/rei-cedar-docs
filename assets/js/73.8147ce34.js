(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{772:function(e,t,s){"use strict";s.r(t);var a=s(40),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("cdr-doc-table-of-contents-shell",{attrs:{parentSelector:"h2",childSelector:"h3"}},[s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),s("p",[e._v("Component variables provide a versioned method for teams to:")]),e._v(" "),s("ul",[s("li",[e._v("Import the exact CSS styles used in the Cedar Vue component")]),e._v(" "),s("li",[e._v("Apply these exact CSS styles to elements in their project")])]),e._v(" "),s("p",[e._v("Component variables are only available for a core subset of Cedar components, and are distributed in SCSS and LESS format.")]),e._v(" "),s("p",[e._v("Component variables include mixins such as "),s("code",[e._v("@include cdr-button-base-mixin")]),e._v(" which sets many properties on an element. Each component has a "),s("code",[e._v("base")]),e._v(" mixin which sets properties that apply to all components of that type, as well as "),s("code",[e._v("modifier")]),e._v(" mixins which only apply to a specific variant of that component")]),e._v(" "),s("p",[e._v("For example, you can import the styling for a Cedar primary button component using a mixin:")]),e._v(" "),s("div",{staticClass:"language-scss line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-scss"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[e._v(".your-button-component ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("@include")]),e._v(" cdr-button-base-mixin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("@include")]),e._v(" cdr-button-primary-mixin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("Test out what you can do with the component variables in this "),s("a",{attrs:{href:"https://codesandbox.io/s/qkwn78nw99",target:"_blank",rel:"noopener noreferrer"}},[e._v("CodeSandbox"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"contract-of-intent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contract-of-intent"}},[e._v("#")]),e._v(" Contract of Intent")]),e._v(" "),s("p",[e._v("Versioning")]),e._v(" "),s("ul",[s("li",[e._v("Component variables are a versioned export of the exact CSS styles being used in the Cedar Vue components")]),e._v(" "),s("li",[e._v("Whenever a major version of Cedar is released, a corresponding major version of component variables will also be published")]),e._v(" "),s("li",[e._v("For minor or patch versions of Cedar, component variables will only be published if there were changes made to the distributed files")]),e._v(" "),s("li",[e._v("Outside of the Cedar release schedule, patch versions of component variables will only be issued if a bug is found in the distribution")])]),e._v(" "),s("p",[e._v("Semantic naming")]),e._v(" "),s("ul",[s("li",[e._v("Component variable mixins are semantically named based on the component being styled, how the style is intended to be used, and the CSS property being targeted")]),e._v(" "),s("li",[e._v("Teams must only use component variables when semantically appropriate")])]),e._v(" "),s("hr"),e._v(" "),s("h3",{attrs:{id:"use-when"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-when"}},[e._v("#")]),e._v(" Use When")]),e._v(" "),s("ul",[s("li",[e._v("Your project does not use Vue.js, but you want to use Cedar")]),e._v(" "),s("li",[e._v("Your component must visually match an existing Cedar component, but not it's functionality. For example, a "),s("code",[e._v("vue-router")]),e._v(" link component that looks like a "),s("code",[e._v("CdrLink")]),e._v(" component")]),e._v(" "),s("li",[e._v("Your project requires the smallest possible bundle size, and your team is willing to take on the additional maintenance cost of using component variables instead of the Vue.js Cedar components")])]),e._v(" "),s("h3",{attrs:{id:"don-t-use-when"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#don-t-use-when"}},[e._v("#")]),e._v(" Don't Use When")]),e._v(" "),s("ul",[s("li",[e._v("Do not use the component variables in a non-semantic way. For example, "),s("code",[e._v("cdr-button-base-mixin")]),e._v(" should only ever be used to style a button element")]),e._v(" "),s("li",[e._v("Do not use component variables to publish clones or forks of existing Cedar components. Instead, work with the Cedar team to find a long term solution to support your use case")])]),e._v(" "),s("hr"),e._v(" "),s("h2",{attrs:{id:"naming-structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#naming-structure"}},[e._v("#")]),e._v(" Naming Structure")]),e._v(" "),s("p",[e._v("The naming structure for component variables and mixins is as follows:")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Namespace:")]),e._v(" Top level namespace "),s("code",[e._v("cdr")])]),e._v(" "),s("li",[s("strong",[e._v("Component:")]),e._v(" Name of the Cedar component for the exported variable")]),e._v(" "),s("li",[s("strong",[e._v("Modifier:")]),e._v(" Variant of Cedar component for the exported variable\n"),s("ul",[s("li",[e._v("Base modifier ("),s("code",[e._v("base-")]),e._v(") indicates variables that apply to all instances of that Cedar component")]),e._v(" "),s("li",[e._v("Additional modifiers can be stacked on top of that")]),e._v(" "),s("li",[e._v("For example, to make a primary large button you would use the variables that have "),s("code",[e._v("base")]),e._v(", "),s("code",[e._v("primary")]),e._v(", and "),s("code",[e._v("large")]),e._v(" modifiers")])])]),e._v(" "),s("li",[s("strong",[e._v("Sub-Element:")]),e._v(" Indicates a sub-element of a component. For example, "),s("code",[e._v("cdr-input-base-label-color")]),e._v(" indicates the color of the label element used inside the input component")]),e._v(" "),s("li",[s("strong",[e._v("State:")]),e._v(" Describes the interactive state that this variable is applied to. These correspond to CSS selectors such as "),s("code",[e._v(":focus")]),e._v(", "),s("code",[e._v(":active")]),e._v(", "),s("code",[e._v(":hover")]),e._v(", "),s("code",[e._v(":disabled")]),e._v(", etc.")])]),e._v(" "),s("h3",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),s("cdr-table",[s("thead",[s("tr",[s("th",{attrs:{width:"240"}},[e._v("\n        Namespace\n      ")]),e._v(" "),s("th",{attrs:{width:"240"}},[e._v("\n        Component\n      ")]),e._v(" "),s("th",{attrs:{width:"240"}},[e._v("\n        Modifier\n      ")]),e._v(" "),s("th",{attrs:{width:"240"}},[e._v("\n        Sub-Element\n      ")]),e._v(" "),s("th",{attrs:{width:"240"}},[e._v("\n        State\n      ")]),e._v(" "),s("th",{attrs:{width:"240"}},[e._v("\n        Mixin\n      ")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("cdr-")]),e._v(" "),s("td",[e._v("input-")]),e._v(" "),s("td",[e._v("base-")]),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td",[e._v("mixin")])]),e._v(" "),s("tr",[s("td",[e._v("cdr-")]),e._v(" "),s("td",[e._v("button-")]),e._v(" "),s("td",[e._v("secondary-")]),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td",[e._v("mixin")])]),e._v(" "),s("tr",[s("td",[e._v("cdr-")]),e._v(" "),s("td",[e._v("breadcrumb-")]),e._v(" "),s("td"),e._v(" "),s("td",[e._v("item-")]),e._v(" "),s("td",[e._v("linked-")]),e._v(" "),s("td",[e._v("mixin")])]),e._v(" "),s("tr",[s("td",[e._v("cdr-")]),e._v(" "),s("td",[e._v("select-")]),e._v(" "),s("td",[e._v("base-")]),e._v(" "),s("td",[e._v("label-")]),e._v(" "),s("td",[e._v("disabled-")]),e._v(" "),s("td",[e._v("mixin")])])])]),e._v(" "),s("br"),e._v(" "),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),s("h3",{attrs:{id:"install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[e._v("#")]),e._v(" Install")]),e._v(" "),s("p",[e._v("The component variables inherit values from the Cedar design tokens, so you will need to install both packages and keep them in sync when updating:")]),e._v(" "),s("p",[s("code",[e._v("npm install --save-dev @rei/cdr-tokens @rei/cdr-component-variables")])]),e._v(" "),s("p",[e._v("SCSS example:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("@import '@rei/cdr-tokens/dist/scss/cdr-tokens.scss'; /* import the tokens file */\n@import '@rei/cdr-component-variables/dist/scss/index.scss'; /* import the component variables */\n\n.your-button-class {\n  /* use mixins to apply many properties at once */\n  @include cdr-button-base-mixin;\n  @include cdr-button-primary-mixin;\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br")])]),s("p",[e._v("LESS example:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("@import '@rei/cdr-tokens/dist/less/cdr-tokens.less'; /* import the tokens file */\n@import '@rei/cdr-component-variables/dist/less/index.less'; /* import the component variables */\n\n.your-button-class {\n  /* use mixins to apply many properties at once */\n  .cdr-button-base-mixin();\n  .cdr-button-primary-mixin();\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br")])]),s("h2",{attrs:{id:"examples-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples-2"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),s("component-variables-page"),e._v(" "),s("p",[e._v("Questions about when to use component variables? Ask the Cedar team in "),s("a",{attrs:{href:"https://rei.slack.com/messages/CA58YCGN4",target:"_blank",rel:"noopener noreferrer"}},[e._v("#cedar-user-support"),s("OutboundLink")],1)])],1)],1)}),[],!1,null,null,null);t.default=n.exports}}]);