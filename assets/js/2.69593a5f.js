(window.webpackJsonp=window.webpackJsonp||[]).push([[2,29,40,41,42,43,45,46,47,61,62],{263:function(t,n,e){},264:function(t,n,e){},297:function(t,n,e){var a=e(335),i=e(103);t.exports=function(t,n){return null!=t&&i(t,n,a)}},298:function(t,n,e){"use strict";e(263)},299:function(t,n,e){"use strict";e(264)},300:function(t,n,e){},301:function(t,n,e){},302:function(t,n,e){},303:function(t,n,e){},304:function(t,n,e){},320:function(t,n,e){"use strict";e.r(n);var a={name:"TokenMotionExample",props:{prop:Object,useGroupAnimate:{type:Boolean,default:!1},groupAnimate:{type:Boolean,default:!1}},computed:{animationPlayState(){return this.useGroupAnimate?this.groupAnimate?"running":"paused":this.animate?"running":"paused"}},data:()=>({animate:!1})},i=(e(298),e(9)),s=Object(i.a)(a,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"token-motion-example"},[t.useGroupAnimate?t._e():n("div",{staticClass:"animation-controls"},[n("cdr-button",{directives:[{name:"show",rawName:"v-show",value:"paused"===t.animationPlayState,expression:"animationPlayState === 'paused'"}],attrs:{"icon-only":!0},on:{click:function(n){t.animate=!0}}},[n("cdr-icon",{attrs:{use:"#play-fill",alt:"Play animation"}})],1),t._v(" "),n("cdr-button",{directives:[{name:"show",rawName:"v-show",value:"running"===t.animationPlayState,expression:"animationPlayState === 'running'"}],attrs:{"icon-only":!0},on:{click:function(n){t.animate=!1}}},[n("cdr-icon",{attrs:{use:"#pause-fill",alt:"Pause animation"}})],1)],1),t._v(" "),n("div",{staticClass:"motion-background"},["duration"===t.prop.docs.example?n("div",{staticClass:"motion-example duration",style:{"animation-play-state":t.animationPlayState,"animation-duration":t.prop.value}}):t._e(),t._v(" "),"timing"===t.prop.docs.example?n("div",{staticClass:"motion-example",style:{"animation-play-state":t.animationPlayState,"animation-timing-function":t.prop.value}}):t._e()])])}),[],!1,null,null,null);n.default=s.exports},321:function(t,n,e){"use strict";e.r(n);var a={name:"TypeColor",props:{prop:Object,description:Boolean}},i=(e(299),e(9)),s=Object(i.a)(a,(function(){var t=this,n=t._self._c;return n("tr",[n("td",{attrs:{width:"64"}},[n("div",{staticClass:"color-example",style:{backgroundColor:t.prop.value}})]),t._v(" "),n("td",[n("cdr-text",[n("b",[t._v(t._s(t.prop.name))])]),t._v(" "),t.prop.docs.description&&t.description?n("cdr-text",[t._v(t._s(t.prop.docs.description))]):t._e()],1),t._v(" "),n("td",{attrs:{width:"160"}},[t._v(t._s(t.prop.value))])])}),[],!1,null,null,null);n.default=s.exports},335:function(t,n){var e=Object.prototype.hasOwnProperty;t.exports=function(t,n){return null!=t&&e.call(t,n)}},336:function(t,n,e){"use strict";e(300)},337:function(t,n,e){"use strict";e(301)},338:function(t,n,e){"use strict";e(302)},339:function(t,n,e){"use strict";e(303)},340:function(t,n,e){"use strict";e(304)},387:function(t,n,e){"use strict";e.r(n);var a={name:"TokenTypeDefault",props:{prop:Object}},i=e(9),s=Object(i.a)(a,(function(){var t=this._self._c;return t("tr",[t("td",[this._v(this._s(this.prop.name))]),this._v(" "),t("td",[this._v(this._s(this.prop.value))]),this._v(" "),t("td")])}),[],!1,null,null,null);n.default=s.exports},388:function(t,n,e){"use strict";e.r(n);var a={name:"TypeSpace",props:{prop:Object}},i=(e(336),e(9)),s=Object(i.a)(a,(function(){var t=this,n=t._self._c;return n("tr",[n("td",[n("div",{staticClass:"space-example",style:{width:t.prop.value}})]),t._v(" "),n("td",[t._v(t._s(t.prop.name))]),t._v(" "),n("td",[t._v(t._s(t.prop.value))])])}),[],!1,null,null,null);n.default=s.exports},389:function(t,n,e){"use strict";e.r(n);var a={name:"TypeRadius",props:{prop:Object}},i=(e(337),e(9)),s=Object(i.a)(a,(function(){var t=this,n=t._self._c;return n("tr",[n("td",[n("div",{staticClass:"radius-example",style:{borderRadius:t.prop.value}})]),t._v(" "),n("td",[t._v(t._s(t.prop.name))]),t._v(" "),n("td",[t._v(t._s(t.prop.value))])])}),[],!1,null,null,null);n.default=s.exports},390:function(t,n,e){"use strict";e.r(n);var a={name:"TypeProminence",props:{prop:Object}},i=(e(338),e(9)),s=Object(i.a)(a,(function(){var t=this,n=t._self._c;return n("tr",[n("td",[n("div",{staticClass:"prominence-wrap"},[n("div",{staticClass:"prominence-example",style:{boxShadow:t.prop.value}})])]),t._v(" "),n("td",[t._v(t._s(t.prop.name))]),t._v(" "),n("td",[t._v(t._s(t.prop.value))])])}),[],!1,null,null,null);n.default=s.exports},391:function(t,n,e){"use strict";e.r(n);var a={name:"TypeInset",props:{prop:Object},computed:{pad(){const t=this.prop.value;if(t.indexOf(" ")<=0)return`${t} ${t}`;if(t.indexOf("*")>0){let[n,e]=t.split(") ");return`${n}) ${e}`}const[n,e]=t.split(" ");return`${n} ${e}`},inset(){const t=this.prop.value;if(t.indexOf(" ")<=0)return this.getInset(t,t,"-"+t,"-"+t);if(t.indexOf("*")>0){let[n,e]=t.split(") ");const a=`${n.slice(0,5)}-${n.slice(5)})`;return this.getInset(n+")",e,a,"-"+e)}const[n,e]=t.split(" ");return this.getInset(n,e,"-"+n,"-"+e)}},methods:{getInset:(t,n,e,a)=>`inset ${a} ${e} 0 rgb(199, 220, 191), inset ${n} ${t} 0 rgb(199, 220, 191)`}},i=(e(339),e(9)),s=Object(i.a)(a,(function(){var t=this,n=t._self._c;return n("tr",[n("td",[n("div",{staticClass:"inset-example",style:{boxShadow:t.inset,padding:t.pad}},[t._v("content")])]),t._v(" "),n("td",[t._v(t._s(t.prop.name))]),t._v(" "),n("td",[t._v(t._s(t.prop.value))])])}),[],!1,null,null,null);n.default=s.exports},392:function(t,n,e){"use strict";e.r(n);var a={name:"TypeBreakpoint",props:{prop:Object}},i=(e(340),e(9)),s=Object(i.a)(a,(function(){var t=this._self._c;return t("tr",[t("td",[this._v(this._s(this.prop.name))]),this._v(" "),t("td",[this._v(this._s(this.prop.value))]),this._v(" "),t("td")])}),[],!1,null,null,null);n.default=s.exports},393:function(t,n,e){"use strict";e.r(n);var a={name:"TypeTypography",props:{name:String,prop:Object}},i=e(9),s=Object(i.a)(a,(function(){var t=this,n=t._self._c;return n("tr",[n("td",[t._v(t._s(t.name))]),t._v(" "),n("td",[t._v("\n    "+t._s(t.prop.value)+"\n  ")]),t._v(" "),n("td",[t._v('\n    part of "'+t._s(t.kebab(t.prop.mixin))+'" mixin\n  ')])])}),[],!1,null,null,null);n.default=s.exports},394:function(t,n,e){"use strict";e.r(n);var a={name:"TypeMotion",components:{TokenMotionExample:e(320).default},props:{prop:Object},data:()=>({animate:!1})},i=e(9),s=Object(i.a)(a,(function(){var t=this,n=t._self._c;return n("tr",[n("td",[n("token-motion-example",{attrs:{prop:t.prop}})],1),t._v(" "),n("td",[t._v(t._s(t.prop.name))]),t._v(" "),n("td",[t._v(t._s(t.prop.value))])])}),[],!1,null,null,null);n.default=s.exports},475:function(t,n,e){"use strict";e.r(n);var a=e(297),i=e.n(a),s=e(387),o=e(321),r=e(388),p=e(389),l=e(390),u=e(391),c=e(392),d=e(393),v=e(394),f={name:"TokenSorter",functional:!0,props:{prop:Object},render:(t,n)=>t(function(){const t=i()(n.props.prop,"docs.example")?n.props.prop.docs.example:"token";return"color"===t?o.default:"spacing"===t||"sizing"===t?r.default:"radius"===t?p.default:"prominence"===t?l.default:"inset"===t?u.default:"breakpoint"===t?c.default:"text"===t?d.default:"timing"===t||"duration"===t?v.default:s.default}(),{...n},n.children)},_=e(9),m=Object(_.a)(f,void 0,void 0,!1,null,null,null);n.default=m.exports}}]);