(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{274:function(t,n,e){"use strict";var i=e(139),r=e(138),c=e(14),s=e(19),l=e(275),a=e(140),u=e(16),o=e(141),p=e(55),h=e(3),v=[].push,d=Math.min,f=!h((function(){return!RegExp(4294967295,"y")}));i("split",2,(function(t,n,e){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var i=String(s(this)),c=void 0===e?4294967295:e>>>0;if(0===c)return[];if(void 0===t)return[i];if(!r(t))return n.call(i,t,c);for(var l,a,u,o=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,f=new RegExp(t.source,h+"g");(l=p.call(f,i))&&!((a=f.lastIndex)>d&&(o.push(i.slice(d,l.index)),l.length>1&&l.index<i.length&&v.apply(o,l.slice(1)),u=l[0].length,d=a,o.length>=c));)f.lastIndex===l.index&&f.lastIndex++;return d===i.length?!u&&f.test("")||o.push(""):o.push(i.slice(d)),o.length>c?o.slice(0,c):o}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,e){var r=s(this),c=null==n?void 0:n[t];return void 0!==c?c.call(n,r,e):i.call(String(r),n,e)},function(t,r){var s=e(i,t,this,r,i!==n);if(s.done)return s.value;var p=c(t),h=String(this),v=l(p,RegExp),g=p.unicode,x=(p.ignoreCase?"i":"")+(p.multiline?"m":"")+(p.unicode?"u":"")+(f?"y":"g"),b=new v(f?p:"^(?:"+p.source+")",x),m=void 0===r?4294967295:r>>>0;if(0===m)return[];if(0===h.length)return null===o(b,h)?[h]:[];for(var I=0,O=0,w=[];O<h.length;){b.lastIndex=f?O:0;var _,y=o(b,f?h:h.slice(O));if(null===y||(_=d(u(b.lastIndex+(f?0:O)),h.length))===I)O=a(h,O,g);else{if(w.push(h.slice(I,O)),w.length===m)return w;for(var j=1;j<=y.length-1;j++)if(w.push(y[j]),w.length===m)return w;O=I=_}}return w.push(h.slice(I)),w}]}),!f)},275:function(t,n,e){var i=e(14),r=e(85),c=e(4)("species");t.exports=function(t,n){var e,s=i(t).constructor;return void 0===s||null==(e=i(s)[c])?n:r(e)}},329:function(t,n,e){},403:function(t,n,e){"use strict";var i=e(329);e.n(i).a},473:function(t,n,e){"use strict";e.r(n);e(143),e(149),e(86),e(54),e(274);var i=e(64),r={name:"TypeInset",props:{prop:Object},computed:{pad:function(){var t=this.prop.value;if(t.indexOf(" ")<=0)return"".concat(t," ").concat(t);if(t.indexOf("*")>0){var n=t.split(") "),e=Object(i.a)(n,2),r=e[0],c=e[1];return"".concat(r,") ").concat(c)}var s=t.split(" "),l=Object(i.a)(s,2),a=l[0],u=l[1];return"".concat(a," ").concat(u)},inset:function(){var t=this.prop.value;if(t.indexOf(" ")<=0)return this.getInset(t,t,"-".concat(t),"-".concat(t));if(t.indexOf("*")>0){var n=t.split(") "),e=Object(i.a)(n,2),r=e[0],c=e[1],s="".concat(r.slice(0,5),"-").concat(r.slice(5),")");return this.getInset("".concat(r,")"),c,s,"-".concat(c))}var l=t.split(" "),a=Object(i.a)(l,2),u=a[0],o=a[1];return this.getInset(u,o,"-".concat(u),"-".concat(o))}},methods:{getInset:function(t,n,e,i){return"inset ".concat(i," ").concat(e," 0 rgb(199, 220, 191), inset ").concat(n," ").concat(t," 0 rgb(199, 220, 191)")}}},c=(e(403),e(33)),s=Object(c.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("tr",[e("td",[e("div",{staticClass:"inset-example",style:{boxShadow:t.inset,padding:t.pad}},[t._v("content")])]),t._v(" "),e("td",[t._v(t._s(t.prop.name))]),t._v(" "),e("td",[t._v(t._s(t.prop.value))])])}),[],!1,null,null,null);n.default=s.exports}}]);