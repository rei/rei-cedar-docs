(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{365:function(t,n,e){},440:function(t,n,e){"use strict";e(365)},491:function(t,n,e){"use strict";e.r(n);var o=e(439),i=(e(270),{name:"TokensMotion",data:()=>({animate:!1}),props:{comparisonView:{type:Boolean,default:!1},motionType:{type:String,default:""},descriptions:{type:Object}},computed:{motionTokensByType(){const{motion:t}=o;return _.groupBy(t,"docs.type")}},methods:{description(t){return!!this.descriptions&&this.descriptions[t]}}}),a=(e(440),e(9)),s=Object(a.a)(i,(function(){var t=this,n=t._self._c;return n("div",[t.comparisonView?n("div",[n("cdr-button",{directives:[{name:"show",rawName:"v-show",value:!t.animate,expression:"!animate"}],attrs:{"icon-only":!0},on:{click:function(n){t.animate=!0}}},[n("cdr-icon",{attrs:{use:"#play-fill",alt:"Play animation"}})],1),t._v(" "),n("cdr-button",{directives:[{name:"show",rawName:"v-show",value:t.animate,expression:"animate"}],attrs:{"icon-only":!0},on:{click:function(n){t.animate=!1}}},[n("cdr-icon",{attrs:{use:"#pause-fill",alt:"Pause animation"}})],1),t._v(" "),n("cdr-table",t._l(t.motionTokensByType[t.motionType],(function(e){return n("tr",[n("td",[n("token-motion-example",{attrs:{prop:e,"use-group-animate":!0,"group-animate":t.animate}})],1),t._v(" "),n("td",[t._v("\n          "+t._s(e.name)+"\n        ")])])})),0)],1):t._l(t.motionTokensByType[t.motionType],(function(e){return n("div",[n("cdr-table",{staticClass:"motion-token-definition"},[n("tr",[n("td",[n("strong",[t._v(t._s(e.name))])])]),t._v(" "),n("tr",[n("td",[n("token-motion-example",{attrs:{prop:e}})],1)]),t._v(" "),n("tr",[n("td",[t._v("\n          Value: "+t._s(e.value)),n("br"),t._v("\n          "+t._s(t.description(e.name))+"\n        ")])])])],1)}))],2)}),[],!1,null,null,null);n.default=s.exports}}]);