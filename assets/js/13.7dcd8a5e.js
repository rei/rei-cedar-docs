(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{155:function(t,e,n){var u=n(156),r=n(157),o=n(160),i=RegExp("['’]","g");t.exports=function(t){return function(e){return u(o(r(e).replace(i,"")),t,"")}}},156:function(t,e){t.exports=function(t,e,n,u){var r=-1,o=null==t?0:t.length;for(u&&o&&(n=t[++r]);++r<o;)n=e(n,t[r],r,t);return n}},157:function(t,e,n){var u=n(158),r=n(49),o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");t.exports=function(t){return(t=r(t))&&t.replace(o,u).replace(i,"")}},158:function(t,e,n){var u=n(159)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});t.exports=u},159:function(t,e){t.exports=function(t){return function(e){return null==t?void 0:t[e]}}},160:function(t,e,n){var u=n(161),r=n(162),o=n(49),i=n(163);t.exports=function(t,e,n){return t=o(t),void 0===(e=n?void 0:e)?r(t)?i(t):u(t):t.match(e)||[]}},161:function(t,e){var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;t.exports=function(t){return t.match(n)||[]}},162:function(t,e){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;t.exports=function(t){return n.test(t)}},163:function(t,e){var n="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",u="["+n+"]",r="\\d+",o="[\\u2700-\\u27bf]",i="[a-z\\xdf-\\xf6\\xf8-\\xff]",f="[^\\ud800-\\udfff"+n+r+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",c="(?:\\ud83c[\\udde6-\\uddff]){2}",s="[\\ud800-\\udbff][\\udc00-\\udfff]",a="[A-Z\\xc0-\\xd6\\xd8-\\xde]",d="(?:"+i+"|"+f+")",x="(?:"+a+"|"+f+")",p="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",l="[\\ufe0e\\ufe0f]?"+p+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",c,s].join("|")+")[\\ufe0e\\ufe0f]?"+p+")*"),v="(?:"+[o,c,s].join("|")+")"+l,b=RegExp([a+"?"+i+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[u,a,"$"].join("|")+")",x+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[u,a+d,"$"].join("|")+")",a+"?"+d+"+(?:['’](?:d|ll|m|re|s|t|ve))?",a+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",r,v].join("|"),"g");t.exports=function(t){return t.match(b)||[]}},173:function(t,e,n){var u=n(155)((function(t,e,n){return t+(n?"-":"")+e.toLowerCase()}));t.exports=u},174:function(t,e,n){var u=n(175),r=n(176),o=Object.prototype.hasOwnProperty,i=r((function(t,e,n){o.call(t,n)?t[n].push(e):u(t,n,[e])}));t.exports=i},175:function(t,e,n){var u=n(51);t.exports=function(t,e,n){"__proto__"==e&&u?u(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},176:function(t,e,n){var u=n(177),r=n(178),o=n(50),i=n(2);t.exports=function(t,e){return function(n,f){var c=i(n)?u:r,s=e?e():{};return c(n,t,o(f,2),s)}}},177:function(t,e){t.exports=function(t,e,n,u){for(var r=-1,o=null==t?0:t.length;++r<o;){var i=t[r];e(u,i,n(i),t)}return u}},178:function(t,e,n){var u=n(179);t.exports=function(t,e,n,r){return u(t,(function(t,u,o){e(r,t,n(t),o)})),r}},318:function(t,e,n){},407:function(t,e,n){var u=n(50),r=n(55);t.exports=function(t,e){return t&&t.length?r(t,u(e,2)):[]}},408:function(t,e,n){"use strict";n(318)},449:function(t,e,n){"use strict";n.r(e);var u=n(240),r=n(174),o=n.n(r),i=n(173),f=n.n(i),c=n(193),s=n.n(c),a=n(407),d=n.n(a),x={name:"TokensTypography",props:{platform:String,type:String},computed:{hasContent(){return 0!==Object.keys(this.webMixinsByType).length||0!==Object.keys(this.nativeTokensByType).length},webTokensByMixin(){const t=u.web.text,e=s()(t,["attributes.deprecated",!1]),n=o()(e,"mixin");return Object.keys(n).map(t=>{const e=f()(t);n[e]=n[t],delete n[t]}),n},webMixinsByType(){const t={};return Object.keys(this.webTokensByMixin).forEach(e=>{e.includes(this.type)&&(t[e]=this.webTokensByMixin[e])}),t},nativeTokensByType(){const t=[...new Set([...u.android.text,...u.ios.text])],e=s()(t,["attributes.deprecated",!1]),n=o()(e,"docs.type"),r=o()(n[this.type],t=>Object.prototype.hasOwnProperty.call(t.docs,"android")&&"N/A"!==t.docs.android?t.docs.android:Object.prototype.hasOwnProperty.call(t.docs,"ios")&&"N/A"!==t.docs.ios?t.docs.ios:"undefined");return Object.keys(r).forEach(t=>{r[t]=d()(r[t],"original.value")}),r}},methods:{makeStyleObj(t){let e={};return t.forEach(t=>{e[t.property]=t.value}),e}}},p=(n(408),n(4)),l=Object(p.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.hasContent?n("div",[t._t("default"),t._v(" "),"web"===t.platform?t._l(t.webMixinsByType,(function(e,u){return n("div",{staticClass:"stack-2"},[n("p",{staticClass:"typography-example",style:t.makeStyleObj(e)},[t._v("A different kind of company")]),t._v(" "),n("cdr-text",[n("b",[t._v(t._s(u))]),t._v(" (mixin)")]),t._v(" "),n("cdr-table",[n("tbody",t._l(e,(function(e){return n("tr",[n("td",[n("cdr-text",[n("b",[t._v(t._s(e.name))])])],1),t._v(" "),n("td",[t._v(t._s(e.value))])])})),0)])],1)})):t._e(),t._v(" "),"native"===t.platform?t._l(t.nativeTokensByType,(function(e,u){return n("div",{staticClass:"stack-2"},[n("cdr-text",[n("b",[t._v("Android:")]),t._v(" "+t._s(e[0].docs.android))]),t._v(" "),n("cdr-text",[n("b",[t._v("iOS:")]),t._v(" "+t._s(e[0].docs.ios))]),t._v(" "),n("cdr-text",{staticClass:"stack-1"},[t._v(t._s(e[0].docs.description)+".")]),t._v(" "),n("cdr-table",[n("tbody",t._l(e,(function(e){return n("tr",[n("td",[n("cdr-text",[t._v(t._s(e.property))])],1),t._v(" "),n("td",[t._v(t._s(e.value))])])})),0)])],1)})):t._e()],2):t._e()}),[],!1,null,null,null);e.default=l.exports}}]);