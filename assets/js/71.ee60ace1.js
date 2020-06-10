(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{720:function(e,t,a){"use strict";a.r(t);var n=a(33),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("cdr-doc-table-of-contents-shell",{attrs:{parentSelector:"h2",childSelector:"h3"}},[a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("Component variables provide a versioned method for teams to:")]),e._v(" "),a("ul",[a("li",[e._v("Import the exact CSS styles used in the Cedar Vue component")]),e._v(" "),a("li",[e._v("Apply these exact CSS styles to elements in their project")])]),e._v(" "),a("p",[e._v("Component variables are only available for a core subset of Cedar components, and are distributed in SCSS and LESS format.")]),e._v(" "),a("p",[e._v("Component variables include:")]),e._v(" "),a("ul",[a("li",[e._v("Variables for specific properties such as "),a("code",[e._v("$cdr-button-base-border-radius")]),e._v(". This is the border-radius value for all Cedar button components")]),e._v(" "),a("li",[e._v("Mixins such as "),a("code",[e._v("@include cdr-button-base-mixin")]),e._v(" which sets many properties on an element. Each component has a "),a("code",[e._v("base")]),e._v(" mixin which sets properties that apply to all components of that type, as well as "),a("code",[e._v("modifier")]),e._v(" mixins which only apply to a specific variant of that component")])]),e._v(" "),a("p",[e._v("For example, you can import the styling for a Cedar primary button component using a mixin:")]),e._v(" "),a("div",{staticClass:"language-scss line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[e._v(".your-button-component ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("@include")]),e._v(" cdr-button-base-mixin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("@include")]),e._v(" cdr-button-primary-mixin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("If you only need to apply some styles and not others, you can use individual variables:")]),e._v(" "),a("div",{staticClass:"language-scss line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[e._v(".your-custom-button-component ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("border-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$cdr-button-base-border-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$cdr-button-primary-background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("Teams that are replicating specific Cedar components will want to use the mixins because they are easier to maintain. For example, if a future version of Cedar adds additional properties to an existing mixin, your application will inherit those changes when you update to that version of component variables.")]),e._v(" "),a("p",[e._v("There are some cases where using individual component variables is preferable to using the mixins. For example, if you are using a third party library or component and need to override some values but not others.")]),e._v(" "),a("h3",{attrs:{id:"contract-of-intent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contract-of-intent"}},[e._v("#")]),e._v(" Contract of Intent")]),e._v(" "),a("p",[e._v("Versioning")]),e._v(" "),a("ul",[a("li",[e._v("Component variables are a versioned export of the exact CSS styles being used in the Cedar Vue components")]),e._v(" "),a("li",[e._v("Whenever a major version of Cedar is released, a corresponding major version of component variables will also be published")]),e._v(" "),a("li",[e._v("For minor or patch versions of Cedar, component variables will only be published if there were changes made to the distributed files")]),e._v(" "),a("li",[e._v("Outside of the Cedar release schedule, patch versions of component variables will only be issued if a bug is found in the distribution")])]),e._v(" "),a("p",[e._v("Semantic naming")]),e._v(" "),a("ul",[a("li",[e._v("Component variables and mixins are semantically named based on the component being styled, how the style is intended to be used, and the CSS property being targeted")]),e._v(" "),a("li",[e._v("Teams must only use component variables and mixins when semantically appropriate")])]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"use-when"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-when"}},[e._v("#")]),e._v(" Use When")]),e._v(" "),a("ul",[a("li",[e._v("Your project does not use Vue.js, but you want to use Cedar")]),e._v(" "),a("li",[e._v("Your component must visually match an existing Cedar component, but not it's functionality. For example, a "),a("code",[e._v("vue-router")]),e._v(" link component that looks like a "),a("code",[e._v("CdrLink")]),e._v(" component")]),e._v(" "),a("li",[e._v("Your project requires the smallest possible bundle size, and your team is willing to take on the additional maintenance cost of using component variables instead of the Vue.js Cedar components")])]),e._v(" "),a("h3",{attrs:{id:"don-t-use-when"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#don-t-use-when"}},[e._v("#")]),e._v(" Don't Use When")]),e._v(" "),a("ul",[a("li",[e._v("Do not use the component variables in a non-semantic way. For example, "),a("code",[e._v("cdr-button-base-border-radius")]),e._v(" should only ever be used to style the border radius of a button element")]),e._v(" "),a("li",[e._v("Do not use component variables to publish clones or forks of existing Cedar components. Instead, work with the Cedar team to find a long term solution to support your use case")])]),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"naming-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#naming-structure"}},[e._v("#")]),e._v(" Naming Structure")]),e._v(" "),a("p",[e._v("The naming structure for component variables and mixins is as follows:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Namespace:")]),e._v(" Top level namespace "),a("code",[e._v("cdr")])]),e._v(" "),a("li",[a("strong",[e._v("Component:")]),e._v(" Name of the Cedar component for the exported variable")]),e._v(" "),a("li",[a("strong",[e._v("Modifier:")]),e._v(" Variant of Cedar component for the exported variable\n"),a("ul",[a("li",[e._v("Base modifier ("),a("code",[e._v("base-")]),e._v(") indicates variables that apply to all instances of that Cedar component")]),e._v(" "),a("li",[e._v("Additional modifiers can be stacked on top of that")]),e._v(" "),a("li",[e._v("For example, to make a primary large button you would use the variables that have "),a("code",[e._v("base")]),e._v(", "),a("code",[e._v("primary")]),e._v(", and "),a("code",[e._v("large")]),e._v(" modifiers")])])]),e._v(" "),a("li",[a("strong",[e._v("Sub-Element:")]),e._v(" Indicates a sub-element of a component. For example, "),a("code",[e._v("cdr-input-base-label-color")]),e._v(" indicates the color of the label element used inside the input component")]),e._v(" "),a("li",[a("strong",[e._v("CSS Property:")]),e._v(" Describes the CSS property that this variable is applied to. If the property is listed as "),a("code",[e._v("mixin")]),e._v(", then  that mixin should be included in this component")]),e._v(" "),a("li",[a("strong",[e._v("State:")]),e._v(" Describes the interactive state that this variable is applied to. These correspond to CSS selectors such as "),a("code",[e._v(":focus")]),e._v(", "),a("code",[e._v(":active")]),e._v(", "),a("code",[e._v(":hover")]),e._v(", "),a("code",[e._v(":disabled")]),e._v(", etc.")])]),e._v(" "),a("h3",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("cdr-table",[a("thead",[a("tr",[a("th",{attrs:{width:"240"}},[e._v("\n        Namespace\n      ")]),e._v(" "),a("th",{attrs:{width:"240"}},[e._v("\n        Component\n      ")]),e._v(" "),a("th",{attrs:{width:"240"}},[e._v("\n        Modifier\n      ")]),e._v(" "),a("th",{attrs:{width:"240"}},[e._v("\n        Sub-Element\n      ")]),e._v(" "),a("th",{attrs:{width:"240"}},[e._v("\n        CSS Property\n      ")]),e._v(" "),a("th",{attrs:{width:"240"}},[e._v("\n        State\n      ")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("cdr-")]),e._v(" "),a("td",[e._v("button-")]),e._v(" "),a("td",[e._v("base-")]),e._v(" "),a("td"),e._v(" "),a("td",[e._v("border-radius")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v("cdr-")]),e._v(" "),a("td",[e._v("button-")]),e._v(" "),a("td",[e._v("primary-")]),e._v(" "),a("td"),e._v(" "),a("td",[e._v("background-color-")]),e._v(" "),a("td",[e._v("hover")])]),e._v(" "),a("tr",[a("td",[e._v("cdr-")]),e._v(" "),a("td",[e._v("input-")]),e._v(" "),a("td",[e._v("base-")]),e._v(" "),a("td",[e._v("label-")]),e._v(" "),a("td",[e._v("color-")]),e._v(" "),a("td",[e._v("disabled")])]),e._v(" "),a("tr",[a("td",[e._v("cdr-")]),e._v(" "),a("td",[e._v("input-")]),e._v(" "),a("td",[e._v("base-")]),e._v(" "),a("td"),e._v(" "),a("td",[e._v("mixin")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v("cdr-")]),e._v(" "),a("td",[e._v("button-")]),e._v(" "),a("td",[e._v("secondary-")]),e._v(" "),a("td"),e._v(" "),a("td",[e._v("mixin")]),e._v(" "),a("td")])])]),e._v(" "),a("br"),e._v(" "),a("h2",{attrs:{id:"resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[e._v("#")]),e._v(" Resources")]),e._v(" "),a("p",[e._v("For more information on installing and using component variables in your project, view the "),a("a",{attrs:{href:"https://github.com/rei/rei-cedar-component-variables",target:"_blank",rel:"noopener noreferrer"}},[e._v("README.md on GitHub"),a("OutboundLink")],1),e._v(". Additional examples and a list of supported components are located on the "),a("a",{attrs:{href:"https://rei.github.io/rei-cedar-component-variables/#/",target:"_blank",rel:"noopener noreferrer"}},[e._v("cedar-component-variables doc site"),a("OutboundLink")],1),e._v(".  There is also a "),a("a",{attrs:{href:"https://codesandbox.io/s/qkwn78nw99",target:"_blank",rel:"noopener noreferrer"}},[e._v("CodeSandbox"),a("OutboundLink")],1),e._v(" set up for testing out the component variables.")]),e._v(" "),a("p",[e._v("Questions about when to use component variables? Ask the Cedar team in "),a("a",{attrs:{href:"https://rei.slack.com/messages/CA58YCGN4",target:"_blank",rel:"noopener noreferrer"}},[e._v("#cedar-user-support"),a("OutboundLink")],1)])],1)],1)}),[],!1,null,null,null);t.default=s.exports}}]);