(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{211:function(o,t,e){},234:function(o,t,e){"use strict";var c=e(211);e.n(c).a},263:function(o,t,e){"use strict";e.r(t);var c={name:"CdrDocCodeSnippet",props:{copyButton:{default:!0,type:Boolean},lineNumbers:{default:!0,type:Boolean},maxHeight:{default:!0,type:Boolean},repositoryHref:{default:!1,type:[String,Boolean]},sandboxHref:{default:!1,type:[String,Boolean]},codeToggle:{default:!1,type:Boolean},hideCode:{default:!1,type:Boolean}},data:function(){return{copied:!1,copyError:!1,copyNotSupported:!1,codeHidden:!1,hideCodeToggleText:"Hide code"}},created:function(){this.codeHidden=this.hideCode,this.setCodeToggleText()},methods:{setCodeToggleText:function(){this.hideCodeToggleText=this.codeHidden?"Show code":"Hide code"},toggleCodeDisplay:function(){this.codeHidden=!this.codeHidden,this.setCodeToggleText()},copyToClipBoard:function(){var o=this.$refs.source.querySelector("code"),t=document.createElement("textarea");t.style.height="0",t.style.width="0",t.style.position="absolute",t.style.left="-99999px",t.tabIndex=-1,this.$refs.codeWrap.appendChild(t),t.textContent=o.textContent,t.select();try{document.execCommand("copy")?this.triggerCopySuccess():this.triggerCopyError()}catch(o){this.triggerCopyNotSupported()}this.$refs.codeWrap.removeChild(t)},triggerCopySuccess:function(){var o=this;this.copied=!0,this.copyError=!1,this.copyNotSupported=!1,setTimeout(function(){o.copied=!1},2e3)},triggerCopyError:function(){this.copied=!1,this.copyError=!0,this.copyNotSupported=!1},triggerCopyNotSupported:function(){this.copied=!1,this.copyError=!1,this.copyNotSupported=!0}}},i=(e(234),e(0)),d=Object(i.a)(c,function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("div",{staticClass:"cdr-doc-code-snippet",class:{"cdr-doc-code-snippet--show-copied-notification":o.copied,"cdr-doc-code-snippet--no-line-numbers":!o.lineNumbers,"cdr-doc-code-snippet--code-hidden":o.codeHidden,"cdr-doc-code-snippet--no-max-height":!o.maxHeight}},[o.copyButton?e("div",{staticClass:"cdr-doc-code-snippet__actions"},[e("div",{staticClass:"cdr-doc-code-snippet__copy-action cdr-doc-code-snippet__action",on:{click:o.copyToClipBoard}},[e("button",{staticClass:"cdr-doc-code-snippet__copy-action"},[e("img",{staticClass:"cdr-doc-code-snippet__action-icon",attrs:{src:o.$withBase("/Copy@2x.png"),alt:"Copy to clipboard"}})]),e("span",{staticClass:"cdr-doc-code-snippet__tooltip cdr-doc-code-snippet__tooltip--show-on-hover"},[o._v("\n        Copy to clipboard\n      ")]),e("span",{staticClass:"cdr-doc-code-snippet__tooltip cdr-doc-code-snippet__tooltip--copied-notification",attrs:{"aria-live":"polite"}},[o.copied?e("span",{staticClass:"cdr-doc-code-snippet__tooltip-message"},[o._v("\n          Copied!\n        ")]):o._e(),o.copyError?e("span",{staticClass:"cdr-doc-code-snippet__tooltip-message"},[o._v("\n          Could not copy to clipboard.\n        ")]):o._e(),o.copyNotSupported?e("span",{staticClass:"cdr-doc-code-snippet__tooltip-message"},[o._v("\n          This browser does not support automatic copying to clipboard.\n        ")]):o._e()])]),o.repositoryHref?e("a",{staticClass:"cdr-doc-code-snippet__action",attrs:{href:o.repositoryHref}},[e("img",{staticClass:"cdr-doc-code-snippet__action-icon",attrs:{src:o.$withBase("/Github@2x.png"),alt:"View source in repository"}}),e("span",{staticClass:"cdr-doc-code-snippet__tooltip cdr-doc-code-snippet__tooltip--show-on-hover"},[o._v("\n        View in repository\n      ")])]):o._e(),o.sandboxHref?e("a",{staticClass:"cdr-doc-code-snippet__action",attrs:{href:o.sandboxHref}},[e("img",{staticClass:"cdr-doc-code-snippet__action-icon",attrs:{src:o.$withBase("/CodeSandbox@2x.png"),alt:"View in code sandbox"}}),e("span",{staticClass:"cdr-doc-code-snippet__tooltip cdr-doc-code-snippet__tooltip--show-on-hover"},[o._v("\n        View in sandbox\n      ")])]):o._e(),o.codeToggle?e("button",{staticClass:"cdr-doc-snippet__hide-code-toggle",on:{click:o.toggleCodeDisplay}},[o._v(o._s(o.hideCodeToggleText))]):o._e()]):o._e(),e("div",{ref:"codeWrap",staticClass:"cdr-doc-code-snippet__code-wrap"},[e("div",{ref:"source",staticClass:"cdr-doc-code-snippet__code"},[o._t("default")],2)])])},[],!1,null,null,null);t.default=d.exports}}]);