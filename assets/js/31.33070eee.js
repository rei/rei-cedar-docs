(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{154:function(t,n,i){},164:function(t,n,i){"use strict";i.d(n,"b",(function(){return u})),i.d(n,"c",(function(){return o})),i.d(n,"a",(function(){return a})),i.d(n,"d",(function(){return f}));const e=/#.*$/,r=/\.(md|html)$/,l=/\/$/,s=/^(https?:|mailto:)/;function c(t){return t.replace(e,"").replace(r,"")}function u(t){return s.test(t)}function o(t){return/^mailto:/.test(t)}function a(t){if(u(t))return t;const n=t.match(e),i=n?n[0]:"",r=c(t);return l.test(r)?t:r+".html"+i}function f(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},169:function(t,n,i){"use strict";i(154)},180:function(t,n,i){"use strict";i.r(n);var e=i(164),r={props:{item:{required:!0}},computed:{link(){return Object(e.a)(this.item.link)}},methods:{isExternal:e.b,isMailto:e.c}},l=(i(169),i(4)),s=Object(l.a)(r,(function(){var t=this,n=t.$createElement,i=t._self._c||n;return t.isExternal(t.link)?i("a",{staticClass:"nav-link cdr-doc-side-navigation__link",attrs:{href:t.link,target:t.isMailto(t.link)?null:"_blank",rel:t.isMailto(t.link)?null:"noopener noreferrer"}},[t._v(t._s(t.item.text))]):i("router-link",{staticClass:"nav-link cdr-doc-side-navigation__link",attrs:{to:t.link,exact:"/"===t.link}},[t._v(t._s(t.item.text))])}),[],!1,null,null,null);n.default=s.exports}}]);