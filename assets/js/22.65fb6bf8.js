(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{418:function(e,t,n){},646:function(e,t,n){var s=n(647),i=n(160),a=n(648),r=n(142);e.exports=function(e,t,n){e=r(e),t=i(t);var u=e.length,c=n=void 0===n?u:s(a(n),0,u);return(n-=t.length)>=0&&e.slice(n,c)==t}},647:function(e,t){e.exports=function(e,t,n){return e==e&&(void 0!==n&&(e=e<=n?e:n),void 0!==t&&(e=e>=t?e:t)),e}},648:function(e,t,n){var s=n(649);e.exports=function(e){var t=s(e),n=t%1;return t==t?n?t-n:t:0}},649:function(e,t,n){var s=n(650);e.exports=function(e){return e?(e=s(e))===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}},650:function(e,t,n){var s=n(61),i=n(63),a=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,o=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return NaN;if(s(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=s(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=u.test(e);return n||c.test(e)?o(e.slice(2),n?2:8):r.test(e)?NaN:+e}},651:function(e,t,n){"use strict";var s=n(418);n.n(s).a},690:function(e,t,n){"use strict";n.r(t);n(81),n(155),n(87),n(84),n(156),n(82);var s=n(24),i=n(368),a=n(341),r=n.n(a),u=n(646),c=n.n(u),o={name:"TokensSpace",props:{type:{type:String,default:""}},data:function(){return{isInset:!1}},computed:{hasContent:function(){return 0!==Object.keys(this.spaceTokensByType).length},allSpaceTokens:function(){var e=[];return Object.keys(i).forEach((function(t){e.push.apply(e,Object(s.a)(i[t].spacing))})),r()(e,["attributes.deprecated",!1])},spaceTokensByType:function(){return"inset"===this.type?(this.isInset=!0,r()(this.allSpaceTokens,(function(e){return e.name.includes("inset")&&!e.name.includes("squish")&&!e.name.includes("stretch")}))):"inset-squish"===this.type?(this.isInset=!0,r()(this.allSpaceTokens,(function(e){return e.name.includes("inset")&&e.name.includes("squish")&&!(c()(e.name,"top-bottom")||c()(e.name,"left-right"))}))):"inset-stretch"===this.type?(this.isInset=!0,r()(this.allSpaceTokens,(function(e){return e.name.includes("inset")&&e.name.includes("stretch")&&!(c()(e.name,"top-bottom")||c()(e.name,"left-right"))}))):r()(this.allSpaceTokens,(function(e){return!e.name.includes("inset")}))}},methods:{insetPieces:function(e){return"inset-squish"===this.type?r()(this.allSpaceTokens,(function(t){return t.name.includes(e)&&t.name.includes("squish")&&(c()(t.name,"top-bottom")||c()(t.name,"left-right"))})):"inset-stretch"===this.type?r()(this.allSpaceTokens,(function(t){return t.name.includes(e)&&t.name.includes("stretch")&&(c()(t.name,"top-bottom")||c()(t.name,"left-right"))})):[]}}},l=(n(651),n(33)),p=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.hasContent?n("div",[e._t("default"),e._v(" "),e._l(e.spaceTokensByType,(function(t){return n("div",{staticClass:"cdr-mb-space-two-x"},[n("tokens-space-example",{attrs:{name:t.name,"is-inset":e.isInset}}),e._v(" "),n("cdr-table",{staticClass:"space-token-table"},[n("tbody",[n("tr",[n("td",[e.insetPieces(t.name).length>0?n("b",[e._v(e._s(t.name))]):n("span",[e._v(e._s(t.name))])]),e._v(" "),n("td",[e._v(e._s(t.value))])]),e._v(" "),e._l(e.insetPieces(t.name),(function(t){return n("tr",[n("td",[e._v(e._s(t.name)+" ")]),e._v(" "),n("td",[e._v(e._s(t.value))])])}))],2)])],1)}))],2):e._e()}),[],!1,null,null,null);t.default=p.exports}}]);