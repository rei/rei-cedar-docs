(window.webpackJsonp=window.webpackJsonp||[]).push([[26,51],{234:function(t,a,s){},278:function(t,a,s){"use strict";s(234)},321:function(t,a,s){},344:function(t,a,s){"use strict";s.r(a);var c={name:"CdrDocColorSwatch",props:{tokenName:{type:String,default:"$clean-slate"},showNames:{type:Boolean,default:!0}},computed:{tokenData(){return tokens.foundations.find(t=>t.name===this.tokenName)},hex(){return this.tokenData.value},rgb(){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(this.hex);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}}},o=(s(278),s(4)),e=Object(o.a)(c,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"cdr-doc-color-swatch"},[s("div",{staticClass:"cdr-doc-color-swatch__sample",style:{backgroundColor:t.hex}}),t._v(" "),t.showNames?s("span",{staticClass:"cdr-doc-color-swatch__token-name"},[t._v("\n    $"+t._s(t.tokenName)+"\n  ")]):t._e(),t._v(" "),s("div",{staticClass:"cdr-doc-color-swatch__values"},[s("span",{staticClass:"cdr-doc-color-swatch__hex"},[t._v("\n      "+t._s(t.hex)+"\n    ")]),t._v(" "),s("span",{staticClass:"cdr-doc-color-swatch__rgb"},[s("span",{staticClass:"cdr-doc-color-swatch__rgb-part"},[t._v("\n        r"+t._s(t.rgb.r)+"\n      ")]),t._v(" "),s("span",{staticClass:"cdr-doc-color-swatch__rgb-part"},[t._v("\n        g"+t._s(t.rgb.g)+"\n      ")]),t._v(" "),s("span",{staticClass:"cdr-doc-color-swatch__rgb-part"},[t._v("\n        b"+t._s(t.rgb.b)+"\n      ")])])])])}),[],!1,null,null,null);a.default=e.exports},415:function(t,a,s){"use strict";s(321)},451:function(t,a,s){"use strict";s.r(a);var c=s(344),o={name:"CdrDocColorSwatchGrid",props:{tokenNames:{type:Array,default:()=>["center-of-attention","golden-face"]},showNames:{type:Boolean,default:!0}},components:{CdrDocColorSwatch:c.default}},e=(s(415),s(4)),r=Object(e.a)(o,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"cdr-doc-color-swatch-grid"},[t._l(t.tokenNames,(function(a){return s("cdr-doc-color-swatch",{key:a,attrs:{"token-name":a,"show-names":t.showNames}})})),t._v(" "),s("div",{staticClass:"cdr-doc-color-swatch-grid-dummy"}),t._v(" "),s("div",{staticClass:"cdr-doc-color-swatch-grid-dummy"})],2)}),[],!1,null,null,null);a.default=r.exports}}]);