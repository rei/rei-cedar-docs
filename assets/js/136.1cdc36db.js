(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{575:function(e,a,t){"use strict";t.r(a);var r=t(9),s=Object(r.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("cdr-doc-table-of-contents-shell",{attrs:{parentSelector:"h2",childSelector:"h3"}},[a("h2",{attrs:{id:"update-steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-steps"}},[e._v("#")]),e._v(" Update Steps")]),e._v(" "),a("ul",[a("li",[e._v("Update to the latest version of the Cedar packages:")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("package name")]),e._v(" "),a("th",[e._v("version")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("@rei/cedar")])]),e._v(" "),a("td",[e._v("^8.x.x")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("@rei/cdr-tokens")])]),e._v(" "),a("td",[e._v("^8.x.x")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("@rei/cdr-component-variables")])]),e._v(" "),a("td",[e._v("^6.x.x")])])])]),e._v(" "),a("ul",[a("li",[e._v("If your project depends on any shared component packages (i.e, FEDPACK, FEDCOMP, FEDPAGES), you will want to update those packages to the new version of Cedar before updating your micro-site.")])]),e._v(" "),a("h2",{attrs:{id:"_8-0-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-0-6"}},[e._v("#")]),e._v(" 8.0.6")]),e._v(" "),a("h3",{attrs:{id:"bug-fixes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bug-fixes"}},[e._v("#")]),e._v(" Bug Fixes")]),e._v(" "),a("ul",[a("li",[e._v("Text heading tokens have been updated to address an issue with font ligatures not applying correctly")])]),e._v(" "),a("h2",{attrs:{id:"_8-0-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-0-5"}},[e._v("#")]),e._v(" 8.0.5")]),e._v(" "),a("h3",{attrs:{id:"bug-fixes-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bug-fixes-2"}},[e._v("#")]),e._v(" Bug Fixes")]),e._v(" "),a("ul",[a("li",[e._v("CdrModal has been updated to address an issue with managing event handlers which could result in errors being thrown when the window is resized")])]),e._v(" "),a("h2",{attrs:{id:"_8-0-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-0-4"}},[e._v("#")]),e._v(" 8.0.4")]),e._v(" "),a("h3",{attrs:{id:"bug-fixes-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bug-fixes-3"}},[e._v("#")]),e._v(" Bug Fixes")]),e._v(" "),a("ul",[a("li",[e._v("CdrModal has been updated to resolve an issue with the iOS bug fix released in Cedar 8.0.1")])]),e._v(" "),a("h2",{attrs:{id:"_8-0-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-0-3"}},[e._v("#")]),e._v(" 8.0.3")]),e._v(" "),a("h3",{attrs:{id:"bug-fixes-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bug-fixes-4"}},[e._v("#")]),e._v(" Bug Fixes")]),e._v(" "),a("ul",[a("li",[e._v("CdrModal adds some additional "),a("code",[e._v("padding-right")]),e._v(" when it's content is overflowing. "),a("code",[e._v("12px")]),e._v(" is added when floating MacOS or iOS scrollbars are detected, and "),a("code",[e._v("4px")]),e._v(" is added for regular permanent scrollbars. Additional padding can be added by consumers by customizing the CdrModal content slot.")])]),e._v(" "),a("h2",{attrs:{id:"_8-0-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-0-2"}},[e._v("#")]),e._v(" 8.0.2")]),e._v(" "),a("h3",{attrs:{id:"bug-fixes-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bug-fixes-5"}},[e._v("#")]),e._v(" Bug Fixes")]),e._v(" "),a("ul",[a("li",[e._v("CdrAccordion "),a("code",[e._v("unwrap")]),e._v(" breakpoint logic has been updated to handle cross browser issues and more closely match the behavior of media queries")])]),e._v(" "),a("h2",{attrs:{id:"_8-0-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-0-1"}},[e._v("#")]),e._v(" 8.0.1")]),e._v(" "),a("h3",{attrs:{id:"bug-fixes-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bug-fixes-6"}},[e._v("#")]),e._v(" Bug Fixes")]),e._v(" "),a("ul",[a("li",[e._v("CdrModal has been updated to better handle scrolling on iOS Safari")])]),e._v(" "),a("h2",{attrs:{id:"new-features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-features"}},[e._v("#")]),e._v(" New Features")]),e._v(" "),a("h3",{attrs:{id:"cdrchip-component"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cdrchip-component"}},[e._v("#")]),e._v(" CdrChip Component")]),e._v(" "),a("p",[e._v("We have created a new CdrChip component that can be used to highlight and signal user selection and input in cases where a basic form element or button do not suffice.")]),e._v(" "),a("p",[e._v("See the "),a("a",{attrs:{href:"../../components/chips"}},[e._v("CdrChip docs page")]),e._v(" for more information.")]),e._v(" "),a("h3",{attrs:{id:"cdrgrid-component"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cdrgrid-component"}},[e._v("#")]),e._v(" CdrGrid Component")]),e._v(" "),a("p",[e._v("We have released a new CdrGrid component that is a simple wrapper around "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout",target:"_blank",rel:"noopener noreferrer"}},[e._v("css-grid"),a("OutboundLink")],1),e._v(". This component is intended to replace the flexbox based CdrRow and CdrCol components. CdrGrid allows for creating the same layouts as CdrRow and CdrCol but with less markup and less CSS assets required, improving performance while also simplifying our code.")]),e._v(" "),a("p",[e._v("See the "),a("a",{attrs:{href:"../../components/grid"}},[e._v("CdrGrid docs page")]),e._v(" for more information.")]),e._v(" "),a("h3",{attrs:{id:"cdrimg-refactor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cdrimg-refactor"}},[e._v("#")]),e._v(" CdrImg Refactor")]),e._v(" "),a("p",[e._v("We refactored CdrImg to no longer use "),a("code",[e._v("background-image")]),e._v(" to load images, which allows for any native "),a("code",[e._v("<img>")]),e._v(" atttribute to be used with CdrImg. This not only makes the CdrImg component more flexible but opens up several opportunities to improve performance for image heavy pages. The "),a("code",[e._v("srcset")]),e._v(" and "),a("code",[e._v("sizes")]),e._v(" property can now be used to load optimal images for a users screen size, or "),a("code",[e._v('loading="lazy"')]),e._v(" can be used to enable lazy loading of images.")]),e._v(" "),a("p",[e._v("We did "),a("a",{attrs:{href:"#cdrimg-responsive-ratio-and-lazy-loading"}},[e._v("remove the responsive ratio and rei-lazy-image-loader")]),e._v(" related properties as they are no longer necessary.")]),e._v(" "),a("h3",{attrs:{id:"cdrpagination-intra-page-navigation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cdrpagination-intra-page-navigation"}},[e._v("#")]),e._v(" CdrPagination Intra-Page Navigation")]),e._v(" "),a("p",[e._v("CdrPagination was originally designed for page-level navigation where the user navigates to a new URL. This pattern did not support cases where content is paginated inside of a page, for example when browsing through reviews of a product. CdrPagination now supports two additional properties: "),a("code",[e._v("linkTag")]),e._v(" and "),a("code",[e._v("forLabel")]),e._v(" which allow for creating a button based navigation that is linked to the content it paginates. See the "),a("a",{attrs:{href:"../../components/pagination#intra-page-navigation"}},[e._v("CdrPagination docs")]),e._v(" for more information. For consumers using CdrPagination for page-level navigation there are no changes required.")]),e._v(" "),a("h3",{attrs:{id:"cdraccordion-unwrapped"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cdraccordion-unwrapped"}},[e._v("#")]),e._v(" CdrAccordion Unwrapped")]),e._v(" "),a("p",[e._v("CdrAccordionGroup now accepts an "),a("code",[e._v("unwrap")]),e._v(' property which renders the accordion headings and content in a plain "unwrapped" state. This can be used to render content in full at desktop view but display it in a collapsed accordion at mobile view. The '),a("code",[e._v("unwrap")]),e._v(" property accepts either a boolean which toggles the behavior on and off, or a list of breakpoints "),a("code",[e._v("'@xs @sm @md @lg'")]),e._v(" which activates it at the given breakpoint(s). See the "),a("a",{attrs:{href:"../../components/accordion#unwrapped"}},[e._v("CdrAccordion docs")]),e._v(" for more information.")]),e._v(" "),a("h3",{attrs:{id:"sale-color-update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sale-color-update"}},[e._v("#")]),e._v(" Sale Color Update")]),e._v(" "),a("ul",[a("li",[e._v("We have updated our sale color tokens to align with brand guidelines")]),e._v(" "),a("li",[e._v("We have created a new $cdr-color-background-sale token. This should be used in conjunction with $cdr-color-text-inverse.")])]),e._v(" "),a("h2",{attrs:{id:"bug-fixes-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bug-fixes-7"}},[e._v("#")]),e._v(" Bug Fixes")]),e._v(" "),a("h3",{attrs:{id:"cdrmodal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cdrmodal"}},[e._v("#")]),e._v(" CdrModal")]),e._v(" "),a("p",[e._v("CdrModal no longer applies a fade-out gradient on overflowing content. Fading out content conflicts with accessibility requirements related to text contrast.\nPadding to the right of content has been removed to accommodate more display patterns.")]),e._v(" "),a("h2",{attrs:{id:"deprecations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deprecations"}},[e._v("#")]),e._v(" Deprecations")]),e._v(" "),a("h3",{attrs:{id:"cdrrow-and-cdrcol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cdrrow-and-cdrcol"}},[e._v("#")]),e._v(" CdrRow and CdrCol")]),e._v(" "),a("p",[e._v("CdrRow and CdrCol have been deprecated in favor of "),a("a",{attrs:{href:"../../components/grid"}},[e._v("CdrGrid")]),e._v(". Teams using CdrRow and CdrCol should use CdrGrid for any new work, and begin incrementally migrating any existing usage.")]),e._v(" "),a("h3",{attrs:{id:"cdrtext-modifier-and-space-utility-classes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cdrtext-modifier-and-space-utility-classes"}},[e._v("#")]),e._v(" CdrText Modifier and Space Utility Classes")]),e._v(" "),a("p",[e._v("In order to align with performance goals, we are working on a long-term deprecation of the CdrText "),a("code",[e._v("modifier")]),e._v(" property and the "),a("code",[e._v("space")]),e._v(" utility classes. Both of these features require loading a large CSS asset even if you are only using a handful of the type or space options. Instead, you should begin using the "),a("RouterLink",{attrs:{to:"/tokens/all-tokens/"}},[e._v("Cedar Design Tokens")]),e._v(" to apply the same styles using a custom CSS class. Projects that are currently using these features should instead use the design tokens for any new work, and incrementally migrate their existing usage when possible.")],1),e._v(" "),a("p",[e._v("Example CdrText modifier update:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<cdr-text modifier="body-300">Old</cdr-text>\n\n<cdr-text class="your-custom-type-class">New</cdr-text>\n.your-custom-type-class {\n  @include cdr-text-body-300;\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("p",[e._v("Example Space utility update:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<div class="cdr-mb-space-one-x">old</div>\n\n<div class="your-custom-space-class">new</div>\n.your-custom-space-class {\n  margin-bottom: $cdr-space-one-x\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("h2",{attrs:{id:"breaking-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#breaking-changes"}},[e._v("#")]),e._v(" Breaking Changes")]),e._v(" "),a("h3",{attrs:{id:"cdrimg-responsive-ratio-and-lazy-loading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cdrimg-responsive-ratio-and-lazy-loading"}},[e._v("#")]),e._v(" CdrImg Responsive Ratio and Lazy loading")]),e._v(" "),a("ul",[a("li",[e._v("The "),a("code",[e._v("ratioSm")]),e._v(", "),a("code",[e._v("ratioMd")]),e._v(", and "),a("code",[e._v("ratioLg")]),e._v(" properties have been removed as they were not being used and do not match the responsive property patterns in use in the Cedar components. Please reach out in Slack at "),a("a",{attrs:{href:"https://rei.slack.com/messages/CA58YCGN4",target:"_blank",rel:"noopener noreferrer"}},[e._v("#cedar-user-support"),a("OutboundLink")],1),e._v(" if you need assistance building images with responsive ratios.")]),e._v(" "),a("li",[e._v("We have removed the "),a("code",[e._v("lazy")]),e._v(" and "),a("code",[e._v("lazyOpts")]),e._v(" properties which were tied to the "),a("a",{attrs:{href:"https://git.rei.com/projects/FEDPACK/repos/rei-lazy-image-loader/browse",target:"_blank",rel:"noopener noreferrer"}},[e._v("rei-lazy-image-loader"),a("OutboundLink")],1),e._v(" package. Usage of those props should be updated to use "),a("code",[e._v('loading="lazy"')]),e._v(" and the lazy loader package should be removed from your project. If necessary, the "),a("code",[e._v("data-lazy")]),e._v(" attributes associated with "),a("code",[e._v("rei-lazy-image-loader")]),e._v(" can be manually bound to any instance of CdrImg.")])]),e._v(" "),a("h3",{attrs:{id:"cdrtext-css-asset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cdrtext-css-asset"}},[e._v("#")]),e._v(" CdrText CSS Asset")]),e._v(" "),a("p",[e._v("The CdrText css asset ("),a("code",[e._v("@rei/cedar/dist/style/cdr-text.css")]),e._v(") has been updated to move the CdrText modifier classes into the text utility class ("),a("code",[e._v("@rei/cedar/dist/style/text.css")]),e._v("). The "),a("code",[e._v("cdr-text")]),e._v(" base class is also now scoped to the current release to further avoid CSS collissions.")]),e._v(" "),a("ul",[a("li",[e._v("If you are using CdrText in conjunction with type mixins from @rei/cdr-tokens should load the "),a("code",[e._v("cdr-text.css")]),e._v(" file.")]),e._v(" "),a("li",[e._v("If you are using CdrText with the "),a("code",[e._v("modifier")]),e._v(" property will need to load both the "),a("code",[e._v("cdr-text.css")]),e._v(" and "),a("code",[e._v("text.css")]),e._v(" files. You should also begin incrementally migrating your codebase to use the @rei/cdr-tokens type mixins instead of the CdrText modifiers")]),e._v(" "),a("li",[e._v("If you have any custom CSS that is targeting the "),a("code",[e._v(".cdr-text")]),e._v(" class you will need to update that code to target a class or property that you add.")])]),e._v(" "),a("h3",{attrs:{id:"cedar-container-mixins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cedar-container-mixins"}},[e._v("#")]),e._v(" Cedar Container Mixins")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("cdr-container")]),e._v(" and "),a("code",[e._v("cdr-container-fluid")]),e._v(" mixins now also apply "),a("code",[e._v("cdr-text-default")]),e._v(". This makes those mixins match the functionality of the Cedar container utility classes.")]),e._v(" "),a("h3",{attrs:{id:"removals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#removals"}},[e._v("#")]),e._v(" Removals")]),e._v(" "),a("p",[e._v("In accordance with our deprecation policy, features that were deprecated in the "),a("RouterLink",{attrs:{to:"/release-notes/summer-2020/#deprecations"}},[e._v("Summer 2020 release")]),e._v(" have been removed from Cedar.")],1),e._v(" "),a("h4",{attrs:{id:"cdrcta-removed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cdrcta-removed"}},[e._v("#")]),e._v(" CdrCta Removed")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/release-notes/summer-2020/#cdrcta-deprecated-and-merged-with-cdrbutton"}},[e._v("CdrCta")]),e._v(" has been removed from @rei/cedar, @rei/cdr-tokens, and @rei/cdr-component-variables")],1),e._v(" "),a("h4",{attrs:{id:"space-prop-removed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#space-prop-removed"}},[e._v("#")]),e._v(" Space Prop Removed")]),e._v(" "),a("p",[e._v("The "),a("RouterLink",{attrs:{to:"/release-notes/summer-2020/#space-property-deprecated"}},[e._v("space property")]),e._v(" has been removed from @rei/cedar")],1)])],1)}),[],!1,null,null,null);a.default=s.exports}}]);