(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{565:function(e,t,a){"use strict";a.r(t);var r=a(9),o=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("cdr-doc-table-of-contents-shell",{attrs:{parentSelector:"h2",childSelector:"h3"}},[t("h2",{attrs:{id:"update-steps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update-steps"}},[e._v("#")]),e._v(" Update Steps")]),e._v(" "),t("ul",[t("li",[e._v("Update to the latest version of the Cedar packages:")])]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("package name")]),e._v(" "),t("th",[e._v("version")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[t("code",[e._v("@rei/cedar")])]),e._v(" "),t("td",[e._v("^7.x.x")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("@rei/cdr-tokens")])]),e._v(" "),t("td",[e._v("^7.x.x")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("@rei/cdr-component-variables")])]),e._v(" "),t("td",[e._v("^5.x.x")])])])]),e._v(" "),t("ul",[t("li",[e._v("If your project depends on any shared component packages (i.e, FEDPACK, FEDCOMP, FEDPAGES), you will want to update those packages to the new version of Cedar before updating your micro-site.")])]),e._v(" "),t("h2",{attrs:{id:"_7-1-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-2"}},[e._v("#")]),e._v(" 7.1.2")]),e._v(" "),t("h3",{attrs:{id:"bug-fixes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bug-fixes"}},[e._v("#")]),e._v(" Bug Fixes")]),e._v(" "),t("ul",[t("li",[e._v("CdrModal has been updated to better handle scrolling on iOS Safari")])]),e._v(" "),t("h2",{attrs:{id:"_7-1-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-1"}},[e._v("#")]),e._v(" 7.1.1")]),e._v(" "),t("h3",{attrs:{id:"bug-fixes-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bug-fixes-2"}},[e._v("#")]),e._v(" Bug Fixes")]),e._v(" "),t("ul",[t("li",[e._v("CdrBreadcrumb truncation logic has been updated to better handle screen readers")]),e._v(" "),t("li",[e._v("CdrButton has been updated to apply an animation to the fill color on state changes")]),e._v(" "),t("li",[e._v("CdrRadio and CdrCheckbox no longer duplicate HTML attributes when rendered in SSR")]),e._v(" "),t("li",[e._v("CdrPopover and CdrTooltip now render properly when used in the "),t("code",[e._v("info-action")]),e._v(" slot of CdrInput or CdrSelect")]),e._v(" "),t("li",[e._v("CdrModal has been updated to improve it's open and close animations")])]),e._v(" "),t("h2",{attrs:{id:"_7-1-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-0"}},[e._v("#")]),e._v(" 7.1.0")]),e._v(" "),t("h3",{attrs:{id:"cdrmodal-override-slot"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cdrmodal-override-slot"}},[e._v("#")]),e._v(" CdrModal Override Slot")]),e._v(" "),t("p",[e._v("We added a new slot to CdrModal called "),t("code",[e._v("modal")]),e._v(" which overrides the entire modal dialog box including the title and close button.")]),e._v(" "),t("h3",{attrs:{id:"cdrmodal-re-open-fix"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cdrmodal-re-open-fix"}},[e._v("#")]),e._v(" CdrModal Re-Open Fix")]),e._v(" "),t("p",[e._v("We resolved a bug where re-opening a CdrModal immediately after closing can result in blank content.")]),e._v(" "),t("h2",{attrs:{id:"new-features"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new-features"}},[e._v("#")]),e._v(" New Features")]),e._v(" "),t("h3",{attrs:{id:"cdrtooltip-and-cdrpopover-components"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cdrtooltip-and-cdrpopover-components"}},[e._v("#")]),e._v(" CdrTooltip and CdrPopover Components")]),e._v(" "),t("p",[e._v("CdrTooltip and CdrPopover are both components that accepts a trigger element and content. CdrTooltip renders it's content whenever the trigger element is hovered or focused, and CdrPopover renders it's content whenever it's trigger element is clicked. See the "),t("a",{attrs:{href:"../../components/tooltip"}},[e._v("CdrTooltip page")]),e._v(" and  "),t("a",{attrs:{href:"../../components/popover"}},[e._v("CdrPopover page")]),e._v(" for more information.")]),e._v(" "),t("h3",{attrs:{id:"form-updates"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#form-updates"}},[e._v("#")]),e._v(" Form Updates")]),e._v(" "),t("h4",{attrs:{id:"cdrselect"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cdrselect"}},[e._v("#")]),e._v(" CdrSelect")]),e._v(" "),t("ul",[t("li",[e._v("New "),t("code",[e._v("error")]),e._v(" prop and slot added to enable validation.")]),e._v(" "),t("li",[e._v("New "),t("code",[e._v("info-action")]),e._v(" slot for rendering an icon outside and to the right of the input.")]),e._v(" "),t("li",[e._v("Updated "),t("code",[e._v("required")]),e._v(" state to render as an asterisk "),t("code",[e._v("*")]),e._v(".")]),e._v(" "),t("li",[e._v("New "),t("code",[e._v("optional")]),e._v(" state added.")]),e._v(" "),t("li",[e._v("New "),t("code",[e._v("background")]),e._v(" prop added to adjust input styling depending on the background it is rendered on.")])]),e._v(" "),t("h4",{attrs:{id:"cdrinput"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cdrinput"}},[e._v("#")]),e._v(" CdrInput")]),e._v(" "),t("ul",[t("li",[e._v("New "),t("code",[e._v("error")]),e._v(" prop and slot added to enable validation.")]),e._v(" "),t("li",[e._v("New "),t("code",[e._v("info-action")]),e._v(" slot for rendering an icon outside and to the right of the input.")]),e._v(" "),t("li",[e._v("Updated "),t("code",[e._v("required")]),e._v(" state to render as an asterisk "),t("code",[e._v("*")]),e._v(".")]),e._v(" "),t("li",[e._v("New "),t("code",[e._v("optional")]),e._v(" state added.")]),e._v(" "),t("li",[e._v("New "),t("code",[e._v("background")]),e._v(" prop added to adjust input styling depending on the background it is rendered on.")]),e._v(" "),t("li",[e._v("New "),t("code",[e._v("helper-text-top")]),e._v(" slot added to render helper text above the input. We have also renamed the "),t("code",[e._v("helper-text")]),e._v(" slot to be "),t("code",[e._v("helper-text-bottom")]),e._v(".")]),e._v(" "),t("li",[e._v("New "),t("code",[e._v("cdr-input__button")]),e._v(" utility class has been added for styling icon buttons that are used inside of the "),t("code",[e._v("post-icon")]),e._v(" slot.")])]),e._v(" "),t("h4",{attrs:{id:"cdrradio-cdrcheckbox"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cdrradio-cdrcheckbox"}},[e._v("#")]),e._v(" CdrRadio / CdrCheckbox")]),e._v(" "),t("ul",[t("li",[e._v("Spacing and interaction logic has been updated.")]),e._v(" "),t("li",[e._v("New "),t("code",[e._v("background")]),e._v(" prop added to adjust input styling depending on the background it is rendered on.")])]),e._v(" "),t("h4",{attrs:{id:"cdrformgroup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cdrformgroup"}},[e._v("#")]),e._v(" CdrFormGroup")]),e._v(" "),t("ul",[t("li",[e._v("New "),t("code",[e._v("error")]),e._v(" prop and slot added to enable validation of checkbox and radio groups.")]),e._v(" "),t("li",[e._v("New "),t("code",[e._v("optional")]),e._v(" and "),t("code",[e._v("required")]),e._v(" states added.")])]),e._v(" "),t("h3",{attrs:{id:"font-performance-update"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#font-performance-update"}},[e._v("#")]),e._v(" Font Performance Update")]),e._v(" "),t("p",[e._v("Cedar worked with the Performance team to optimize the "),t("code",[e._v("cdr-fonts.css")]),e._v(" file. The fonts must be loaded on every page so this should improve performance across REI. Micro-sites can also opt in to a cached version of this file by loading the "),t("a",{attrs:{href:"https://git.rei.com/projects/FEDPACK/repos/rei-fonts/browse",target:"_blank",rel:"noopener noreferrer"}},[e._v("@rei/fonts"),t("OutboundLink")],1),e._v(" package rather than importing the "),t("code",[e._v("cdr-fonts.css")]),e._v(" file directly from Cedar.")]),e._v(" "),t("h3",{attrs:{id:"documentation-updates"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#documentation-updates"}},[e._v("#")]),e._v(" Documentation Updates")]),e._v(" "),t("ul",[t("li",[e._v("The "),t("a",{attrs:{href:"../../components/component-variables"}},[e._v("component variables page")]),e._v(" has been updated to include examples of mixin usage for all supported components.")]),e._v(" "),t("li",[e._v("Cedar components that support component variables now note that on their pages.")]),e._v(" "),t("li",[e._v("The github pages doc sites for "),t("code",[e._v("@rei/cdr-component-variables")]),e._v(" and "),t("code",[e._v("@rei/cdr-tokens")]),e._v(" have been deleted and now redirect to the equivalent pages on this site.")]),e._v(" "),t("li",[e._v("A new page tracking "),t("a",{attrs:{href:"../deprecated"}},[e._v("deprecated deatures")]),e._v(" has been created to more easily track down breaking updates to Cedar.")])]),e._v(" "),t("h2",{attrs:{id:"deprecations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deprecations"}},[e._v("#")]),e._v(" Deprecations")]),e._v(" "),t("h3",{attrs:{id:"cdrinput-helper-text-slot"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cdrinput-helper-text-slot"}},[e._v("#")]),e._v(" CdrInput Helper Text Slot")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("helper-text")]),e._v(" slot in CdrInput has been deprecated and replaced with an identical "),t("code",[e._v("helper-text-bottom")]),e._v(" slot. This was done to be consistent with the "),t("a",{attrs:{href:"#cdrinput-updates"}},[e._v("new "),t("code",[e._v("helper-text-top")]),e._v(" slot")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"cdrtext-and-space-utilities"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cdrtext-and-space-utilities"}},[e._v("#")]),e._v(" CdrText and Space Utilities")]),e._v(" "),t("p",[e._v("In order to align with performance goals, we are working on a long-term deprecation of the CdrText "),t("code",[e._v("modifier")]),e._v(" property and the "),t("code",[e._v("space")]),e._v(" utility classes. Both of these features require loading a large CSS asset even if you are only using a handful of the type or space options. Instead, you should begin using the "),t("RouterLink",{attrs:{to:"/tokens/all-tokens/"}},[e._v("Cedar Design Tokens")]),e._v(" to apply the same styles using a custom CSS class. Projects that are currently using these features should instead use the design tokens for any new work, and incrementally migrate their existing usage when possible.")],1),e._v(" "),t("p",[e._v("Example CdrText modifier update:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<cdr-text modifier="body-300">Old</cdr-text>\n\n<cdr-text class="your-custom-type-class">New</cdr-text>\n.your-custom-type-class {\n  @include cdr-text-body-300;\n}\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("p",[e._v("Example Space utility update:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<div class="cdr-mb-space-one-x">old</div>\n\n<div class="your-custom-space-class">new</div>\n.your-custom-space-class {\n  margin-bottom: $cdr-space-one-x\n}\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("h2",{attrs:{id:"breaking-changes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#breaking-changes"}},[e._v("#")]),e._v(" Breaking Changes")]),e._v(" "),t("h3",{attrs:{id:"component-variables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#component-variables"}},[e._v("#")]),e._v(" Component Variables")]),e._v(" "),t("ul",[t("li",[e._v("We have created a new "),t("a",{attrs:{href:"../../components/component-variables"}},[e._v("Component Variables examples page")]),e._v(" with more information on how to use "),t("code",[e._v("@rei/cdr-component-variables")]),e._v(".")]),e._v(" "),t("li",[e._v("We have added primary and secondary mixins for input, select, radio, and checkbox to control how they render on different background colors.")]),e._v(" "),t("li",[e._v("We have refactored how the form labels work inside Cedar to reduce duplication. Styles for CdrRadio and CdrCheckbox can now be found in the "),t("RouterLink",{attrs:{to:"/components/component-variables/#CdrLabelWrapper"}},[e._v("CdrLabelWrapper mixins")]),e._v(", while styles for CdrInput and CdrSelect can now be found in the "),t("RouterLink",{attrs:{to:"/components/component-variables/#CdrLabelStandalone"}},[e._v("CdrLabelStandalone mixins")]),e._v(". The "),t("code",[e._v("form-label.vars.scss")]),e._v(" file has been removed. See the chart below for information on re-mapping those mixins.")],1)]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Old Mixin")]),e._v(" "),t("th",[e._v("New Mixin")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("cdr-input-base-label-mixin")]),e._v(" "),t("td",[e._v("cdr-label-standalone-label-mixin")])]),e._v(" "),t("tr",[t("td",[e._v("cdr-input-required-label-mixin")]),e._v(" "),t("td",[e._v("cdr-label-standalone-label-mixin")])]),e._v(" "),t("tr",[t("td",[e._v("cdr-input-info-container-mixin")]),e._v(" "),t("td",[e._v("cdr-label-standalone-info-mixin")])]),e._v(" "),t("tr",[t("td",[e._v("cdr-input-helper-text-mixin")]),e._v(" "),t("td",[e._v("cdr-label-standalone-helper-mixin")])]),e._v(" "),t("tr",[t("td",[e._v("cdr-input-base-label-disabled-mixin")]),e._v(" "),t("td",[e._v("cdr-label-standalone-disabled-mixin")])]),e._v(" "),t("tr",[t("td",[e._v("cdr-select-base-label-mixin")]),e._v(" "),t("td",[e._v("cdr-label-standalone-label-mixin")])]),e._v(" "),t("tr",[t("td",[e._v("cdr-select-base-label-disabled-mixin")]),e._v(" "),t("td",[e._v("cdr-label-standalone-disabled-mixin")])]),e._v(" "),t("tr",[t("td",[e._v("cdr-select-required-label-mixin")]),e._v(" "),t("td",[e._v("cdr-label-standalone-label-mixin")])]),e._v(" "),t("tr",[t("td",[e._v("cdr-select-info-container-mixin")]),e._v(" "),t("td",[e._v("cdr-label-standalone-info-mixin")])]),e._v(" "),t("tr",[t("td",[e._v("cdr-select-helper-text-mixin")]),e._v(" "),t("td",[e._v("cdr-label-standalone-helper-mixin")])]),e._v(" "),t("tr",[t("td",[e._v("cdr-label-base-mixin")]),e._v(" "),t("td",[e._v("cdr-label-wrapper-base-mixin, cdr-label-wrapper-primary-mixin")])]),e._v(" "),t("tr",[t("td",[e._v("cdr-label-disabled-mixin")]),e._v(" "),t("td",[e._v("cdr-label-wrapper-disabled-mixin")])]),e._v(" "),t("tr",[t("td",[e._v("cdr-label-small-mixin")]),e._v(" "),t("td",[e._v("cdr-label-wrapper-small-mixin")])]),e._v(" "),t("tr",[t("td",[e._v("cdr-label-large-mixin")]),e._v(" "),t("td",[e._v("cdr-label-wrapper-large-mixin")])])])]),e._v(" "),t("h3",{attrs:{id:"removals"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#removals"}},[e._v("#")]),e._v(" Removals")]),e._v(" "),t("p",[e._v("In accordance with our deprecation policy, features that were deprecated in the "),t("RouterLink",{attrs:{to:"/release-notes/spring-2020/#deprecations"}},[e._v("Spring 2020 release")]),e._v(" or prior have been removed from Cedar.")],1),e._v(" "),t("ul",[t("li",[e._v("Color utility classes ("),t("code",[e._v("cdr-bg--")]),e._v(") have been removed. Use the "),t("code",[e._v("cdr-color-background-")]),e._v(" format instead.")]),e._v(" "),t("li",[e._v("Generic tokens, mixins, and CdrText modifiers for "),t("code",[e._v("cdr-text-utility-n00")]),e._v(" have been removed. Use the "),t("code",[e._v("cdr-text-utility-sans-n00")]),e._v(" format instead.")]),e._v(" "),t("li",[e._v("Color tokens using "),t("code",[e._v("lightmode")]),e._v(" or "),t("code",[e._v("darkmode")]),e._v(" have beeen removed. See the "),t("RouterLink",{attrs:{to:"/release-notes/spring-2020/#color-token-updates"}},[e._v("spring release notes")]),e._v(" for more information on updating")],1),e._v(" "),t("li",[e._v("CdrDataTable component has been removed. Use "),t("a",{attrs:{href:"../../components/table"}},[e._v("CdrTable")]),e._v(" or "),t("a",{attrs:{href:"https://git.rei.com/projects/FEDCOMP/repos/data-table/browse",target:"_blank",rel:"noopener noreferrer"}},[e._v("@rei/data-table"),t("OutboundLink")],1),e._v(" instead.")]),e._v(" "),t("li",[e._v("The "),t("code",[e._v("compact")]),e._v(" modifier for CdrCheckbox and CdrRadio has been removed. Use "),t("code",[e._v('size="small"')]),e._v(" instead.")]),e._v(" "),t("li",[e._v("The "),t("code",[e._v("tabChange")]),e._v(" event has been removed from CdrTabs. Use "),t("code",[e._v("tab-change")]),e._v(" instead.")]),e._v(" "),t("li",[e._v("The "),t("code",[e._v("label")]),e._v(" prop for CdrAccordion has been removed. Use the "),t("code",[e._v("label")]),e._v(" slot instead.")])])])],1)}),[],!1,null,null,null);t.default=o.exports}}]);