(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{361:function(a,t,n){},398:function(a,t,n){"use strict";n(361)},434:function(a,t,n){"use strict";n.r(t);var i={name:"TokenMotionExample",props:{prop:Object,useGroupAnimate:{type:Boolean,default:!1},groupAnimate:{type:Boolean,default:!1}},computed:{animationPlayState:function(){return this.useGroupAnimate?this.groupAnimate?"running":"paused":this.animate?"running":"paused"}},data:function(){return{animate:!1}}},e=(n(398),n(40)),o=Object(e.a)(i,(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"token-motion-example"},[a.useGroupAnimate?a._e():n("div",{staticClass:"animation-controls"},[n("cdr-button",{directives:[{name:"show",rawName:"v-show",value:"paused"===a.animationPlayState,expression:"animationPlayState === 'paused'"}],attrs:{"icon-only":!0},on:{click:function(t){a.animate=!0}}},[n("cdr-icon",{attrs:{use:"#play-fill",alt:"Play animation"}})],1),a._v(" "),n("cdr-button",{directives:[{name:"show",rawName:"v-show",value:"running"===a.animationPlayState,expression:"animationPlayState === 'running'"}],attrs:{"icon-only":!0},on:{click:function(t){a.animate=!1}}},[n("cdr-icon",{attrs:{use:"#pause-fill",alt:"Pause animation"}})],1)],1),a._v(" "),n("div",{staticClass:"motion-background"},["duration"===a.prop.docs.example?n("div",{staticClass:"motion-example duration",style:{"animation-play-state":a.animationPlayState,"animation-duration":a.prop.value}}):a._e(),a._v(" "),"timing"===a.prop.docs.example?n("div",{staticClass:"motion-example",style:{"animation-play-state":a.animationPlayState,"animation-timing-function":a.prop.value}}):a._e()])])}),[],!1,null,null,null);t.default=o.exports}}]);