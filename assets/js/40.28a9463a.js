(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{263:function(a,t,n){},298:function(a,t,n){"use strict";n(263)},320:function(a,t,n){"use strict";n.r(t);var i={name:"TokenMotionExample",props:{prop:Object,useGroupAnimate:{type:Boolean,default:!1},groupAnimate:{type:Boolean,default:!1}},computed:{animationPlayState(){return this.useGroupAnimate?this.groupAnimate?"running":"paused":this.animate?"running":"paused"}},data:()=>({animate:!1})},e=(n(298),n(9)),o=Object(e.a)(i,(function(){var a=this,t=a._self._c;return t("div",{staticClass:"token-motion-example"},[a.useGroupAnimate?a._e():t("div",{staticClass:"animation-controls"},[t("cdr-button",{directives:[{name:"show",rawName:"v-show",value:"paused"===a.animationPlayState,expression:"animationPlayState === 'paused'"}],attrs:{"icon-only":!0},on:{click:function(t){a.animate=!0}}},[t("cdr-icon",{attrs:{use:"#play-fill",alt:"Play animation"}})],1),a._v(" "),t("cdr-button",{directives:[{name:"show",rawName:"v-show",value:"running"===a.animationPlayState,expression:"animationPlayState === 'running'"}],attrs:{"icon-only":!0},on:{click:function(t){a.animate=!1}}},[t("cdr-icon",{attrs:{use:"#pause-fill",alt:"Pause animation"}})],1)],1),a._v(" "),t("div",{staticClass:"motion-background"},["duration"===a.prop.docs.example?t("div",{staticClass:"motion-example duration",style:{"animation-play-state":a.animationPlayState,"animation-duration":a.prop.value}}):a._e(),a._v(" "),"timing"===a.prop.docs.example?t("div",{staticClass:"motion-example",style:{"animation-play-state":a.animationPlayState,"animation-timing-function":a.prop.value}}):a._e()])])}),[],!1,null,null,null);t.default=o.exports}}]);