(window.webpackJsonp=window.webpackJsonp||[]).push([[9,42],{262:function(t,n){var r=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");t.exports=function(t){return r.test(t)}},264:function(t,n,r){},270:function(t,n,r){var e=r(271),o=r(272),u=Object.prototype.hasOwnProperty,f=o((function(t,n,r){u.call(t,r)?t[r].push(n):e(t,r,[n])}));t.exports=f},271:function(t,n,r){var e=r(96);t.exports=function(t,n,r){"__proto__"==n&&e?e(t,n,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[n]=r}},272:function(t,n,r){var e=r(273),o=r(274),u=r(94),f=r(6);t.exports=function(t,n){return function(r,c){var s=f(r)?e:o,i=n?n():{};return s(r,t,u(c,2),i)}}},273:function(t,n){t.exports=function(t,n,r,e){for(var o=-1,u=null==t?0:t.length;++o<u;){var f=t[o];n(e,f,r(f),t)}return e}},274:function(t,n,r){var e=r(265);t.exports=function(t,n,r,o){return e(t,(function(t,e,u){n(o,t,r(t),u)})),o}},276:function(t,n,r){var e=r(289)("toUpperCase");t.exports=e},289:function(t,n,r){var e=r(290),o=r(262),u=r(292),f=r(93);t.exports=function(t){return function(n){n=f(n);var r=o(n)?u(n):void 0,c=r?r[0]:n.charAt(0),s=r?e(r,1).join(""):n.slice(1);return c[t]()+s}}},290:function(t,n,r){var e=r(291);t.exports=function(t,n,r){var o=t.length;return r=void 0===r?o:r,!n&&r>=o?t:e(t,n,r)}},291:function(t,n){t.exports=function(t,n,r){var e=-1,o=t.length;n<0&&(n=-n>o?0:o+n),(r=r>o?o:r)<0&&(r+=o),o=n>r?0:r-n>>>0,n>>>=0;for(var u=Array(o);++e<o;)u[e]=t[e+n];return u}},292:function(t,n,r){var e=r(293),o=r(262),u=r(294);t.exports=function(t){return o(t)?u(t):e(t)}},293:function(t,n){t.exports=function(t){return t.split("")}},294:function(t,n){var r="[\\ud800-\\udfff]",e="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",o="\\ud83c[\\udffb-\\udfff]",u="[^\\ud800-\\udfff]",f="(?:\\ud83c[\\udde6-\\uddff]){2}",c="[\\ud800-\\udbff][\\udc00-\\udfff]",s="(?:"+e+"|"+o+")"+"?",i="[\\ufe0e\\ufe0f]?"+s+("(?:\\u200d(?:"+[u,f,c].join("|")+")[\\ufe0e\\ufe0f]?"+s+")*"),a="(?:"+[u+e+"?",e,f,c,r].join("|")+")",p=RegExp(o+"(?="+o+")|"+a+i,"g");t.exports=function(t){return t.match(p)||[]}},295:function(t,n,r){var e=r(93),o=r(276);t.exports=function(t){return o(e(t).toLowerCase())}},299:function(t,n,r){"use strict";r(264)},321:function(t,n,r){"use strict";r.r(n);var e={name:"TypeColor",props:{prop:Object,description:Boolean}},o=(r(299),r(9)),u=Object(o.a)(e,(function(){var t=this,n=t._self._c;return n("tr",[n("td",{attrs:{width:"64"}},[n("div",{staticClass:"color-example",style:{backgroundColor:t.prop.value}})]),t._v(" "),n("td",[n("cdr-text",[n("b",[t._v(t._s(t.prop.name))])]),t._v(" "),t.prop.docs.description&&t.description?n("cdr-text",[t._v(t._s(t.prop.docs.description))]):t._e()],1),t._v(" "),n("td",{attrs:{width:"160"}},[t._v(t._s(t.prop.value))])])}),[],!1,null,null,null);n.default=u.exports},322:function(t,n,r){"use strict";var e={"cdr-text":"cdr-text_12-1-0"},o={name:"CdrText",props:{tag:{type:String,default:"p"}},data:()=>({s:e}),computed:{baseClass:()=>"cdr-text"},render(){return(0,arguments[0])(this.tag,{class:this.s[this.baseClass]},[this.$slots.default])}};n.a=o},364:function(t,n,r){},438:function(t,n,r){"use strict";r(364)},490:function(t,n,r){"use strict";r.r(n);r(46);var e=r(314),o=r(321),u=r(270),f=r.n(u),c=r(277),s=r.n(c),i=r(295),a=r.n(i),p=r(322),d={name:"TokensColor",components:{TokenTypeColor:o.default,CdrText:p.a},computed:{colorTokensByType(){const t=[];Object.keys(e).forEach(n=>{t.push(...e[n].colors)});const n=s()(t,["attributes.deprecated",!1]);return f()(n,"docs.type")}},methods:{makeCapital:t=>a()(t)}},l=(r(438),r(9)),v=Object(l.a)(d,(function(){var t=this,n=t._self._c;return n("div",[t._l(t.colorTokensByType,(function(r,e){return[n("cdr-text",{attrs:{tag:"h2"}},[t._v(t._s(t.makeCapital(e))+" Color Tokens")]),t._v(" "),n("cdr-table",{attrs:{striped:""}},[n("tbody",[t._l(r,(function(t){return[n("token-type-color",{attrs:{prop:t,description:""}})]}))],2)])]}))],2)}),[],!1,null,null,null);n.default=v.exports}}]);