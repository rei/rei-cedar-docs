(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{243:function(t,n,i){},244:function(t,n,i){"use strict";i.d(n,"b",(function(){return c})),i.d(n,"c",(function(){return o})),i.d(n,"a",(function(){return a})),i.d(n,"d",(function(){return f}));const e=/#.*$/,r=/\.(md|html)$/,l=/\/$/,s=/^(https?:|mailto:)/;function u(t){return t.replace(e,"").replace(r,"")}function c(t){return s.test(t)}function o(t){return/^mailto:/.test(t)}function a(t){if(c(t))return t;const n=t.match(e),i=n?n[0]:"",r=u(t);return l.test(r)?t:r+".html"+i}function f(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},256:function(t,n,i){"use strict";i(243)},259:function(t,n,i){"use strict";i.r(n);var e=i(244),r={props:{item:{required:!0}},computed:{link(){return Object(e.a)(this.item.link)}},methods:{isExternal:e.b,isMailto:e.c}},l=(i(256),i(9)),s=Object(l.a)(r,(function(){var t=this,n=t._self._c;return t.isExternal(t.link)?n("a",{staticClass:"nav-link cdr-doc-side-navigation__link",attrs:{href:t.link,target:t.isMailto(t.link)?null:"_blank",rel:t.isMailto(t.link)?null:"noopener noreferrer"}},[t._v(t._s(t.item.text))]):n("router-link",{staticClass:"nav-link cdr-doc-side-navigation__link",attrs:{to:t.link,exact:"/"===t.link}},[t._v(t._s(t.item.text))])}),[],!1,null,null,null);n.default=s.exports}}]);