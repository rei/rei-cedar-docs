(window.webpackJsonp=window.webpackJsonp||[]).push([[29,40],{263:function(t,a,n){},298:function(t,a,n){"use strict";n(263)},320:function(t,a,n){"use strict";n.r(a);var e={name:"TokenMotionExample",props:{prop:Object,useGroupAnimate:{type:Boolean,default:!1},groupAnimate:{type:Boolean,default:!1}},computed:{animationPlayState(){return this.useGroupAnimate?this.groupAnimate?"running":"paused":this.animate?"running":"paused"}},data:()=>({animate:!1})},i=(n(298),n(9)),o=Object(i.a)(e,(function(){var t=this,a=t._self._c;return a("div",{staticClass:"token-motion-example"},[t.useGroupAnimate?t._e():a("div",{staticClass:"animation-controls"},[a("cdr-button",{directives:[{name:"show",rawName:"v-show",value:"paused"===t.animationPlayState,expression:"animationPlayState === 'paused'"}],attrs:{"icon-only":!0},on:{click:function(a){t.animate=!0}}},[a("cdr-icon",{attrs:{use:"#play-fill",alt:"Play animation"}})],1),t._v(" "),a("cdr-button",{directives:[{name:"show",rawName:"v-show",value:"running"===t.animationPlayState,expression:"animationPlayState === 'running'"}],attrs:{"icon-only":!0},on:{click:function(a){t.animate=!1}}},[a("cdr-icon",{attrs:{use:"#pause-fill",alt:"Pause animation"}})],1)],1),t._v(" "),a("div",{staticClass:"motion-background"},["duration"===t.prop.docs.example?a("div",{staticClass:"motion-example duration",style:{"animation-play-state":t.animationPlayState,"animation-duration":t.prop.value}}):t._e(),t._v(" "),"timing"===t.prop.docs.example?a("div",{staticClass:"motion-example",style:{"animation-play-state":t.animationPlayState,"animation-timing-function":t.prop.value}}):t._e()])])}),[],!1,null,null,null);a.default=o.exports},394:function(t,a,n){"use strict";n.r(a);var e={name:"TypeMotion",components:{TokenMotionExample:n(320).default},props:{prop:Object},data:()=>({animate:!1})},i=n(9),o=Object(i.a)(e,(function(){var t=this,a=t._self._c;return a("tr",[a("td",[a("token-motion-example",{attrs:{prop:t.prop}})],1),t._v(" "),a("td",[t._v(t._s(t.prop.name))]),t._v(" "),a("td",[t._v(t._s(t.prop.value))])])}),[],!1,null,null,null);a.default=o.exports}}]);