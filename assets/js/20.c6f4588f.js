(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{366:function(e,t,n){},442:function(e,t,n){var s=n(443),i=n(111),a=n(444),r=n(93);e.exports=function(e,t,n){e=r(e),t=i(t);var c=e.length,o=n=void 0===n?c:s(a(n),0,c);return(n-=t.length)>=0&&e.slice(n,o)==t}},443:function(e,t){e.exports=function(e,t,n){return e==e&&(void 0!==n&&(e=e<=n?e:n),void 0!==t&&(e=e>=t?e:t)),e}},444:function(e,t,n){var s=n(445);e.exports=function(e){var t=s(e),n=t%1;return t==t?n?t-n:t:0}},445:function(e,t,n){var s=n(446);e.exports=function(e){return e?(e=s(e))===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}},446:function(e,t,n){var s=n(447),i=n(32),a=n(33),r=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,o=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(a(e))return NaN;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=s(e);var n=c.test(e);return n||o.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}},447:function(e,t,n){var s=n(448),i=/^\s+/;e.exports=function(e){return e?e.slice(0,s(e)+1).replace(i,""):e}},448:function(e,t){var n=/\s/;e.exports=function(e){for(var t=e.length;t--&&n.test(e.charAt(t)););return t}},449:function(e,t,n){"use strict";n(366)},493:function(e,t,n){"use strict";n.r(t);n(46);var s=n(314),i=n(277),a=n.n(i),r=n(442),c=n.n(r),o={name:"TokensSpace",props:{type:{type:String,default:""}},data:()=>({isInset:!1}),computed:{hasContent(){return 0!==Object.keys(this.spaceTokensByType).length},allSpaceTokens(){const e=[];Object.keys(s).forEach(t=>{e.push(...s[t].spacing)});return a()(e,["attributes.deprecated",!1])},spaceTokensByType(){return"inset"===this.type?(this.isInset=!0,a()(this.allSpaceTokens,e=>e.name.includes("inset")&&!e.name.includes("squish")&&!e.name.includes("stretch"))):"inset-squish"===this.type?(this.isInset=!0,a()(this.allSpaceTokens,e=>e.name.includes("inset")&&e.name.includes("squish")&&!(c()(e.name,"top-bottom")||c()(e.name,"left-right")))):"inset-stretch"===this.type?(this.isInset=!0,a()(this.allSpaceTokens,e=>e.name.includes("inset")&&e.name.includes("stretch")&&!(c()(e.name,"top-bottom")||c()(e.name,"left-right")))):a()(this.allSpaceTokens,e=>!e.name.includes("inset"))}},methods:{insetPieces(e){return"inset-squish"===this.type?a()(this.allSpaceTokens,t=>t.name.includes(e)&&t.name.includes("squish")&&(c()(t.name,"top-bottom")||c()(t.name,"left-right"))):"inset-stretch"===this.type?a()(this.allSpaceTokens,t=>t.name.includes(e)&&t.name.includes("stretch")&&(c()(t.name,"top-bottom")||c()(t.name,"left-right"))):[]}}},u=(n(449),n(9)),l=Object(u.a)(o,(function(){var e=this,t=e._self._c;return e.hasContent?t("div",[e._t("default"),e._v(" "),e._l(e.spaceTokensByType,(function(n){return t("div",{staticClass:"stack-2"},[t("tokens-space-example",{attrs:{name:n.name,"is-inset":e.isInset}}),e._v(" "),t("cdr-table",{staticClass:"space-token-table"},[t("tbody",[t("tr",[t("td",[e.insetPieces(n.name).length>0?t("b",[e._v(e._s(n.name))]):t("span",[e._v(e._s(n.name))])]),e._v(" "),t("td",[e._v(e._s(n.value))])]),e._v(" "),e._l(e.insetPieces(n.name),(function(n){return t("tr",[t("td",[e._v(e._s(n.name)+" ")]),e._v(" "),t("td",[e._v(e._s(n.value))])])}))],2)])],1)}))],2):e._e()}),[],!1,null,null,null);t.default=l.exports}}]);