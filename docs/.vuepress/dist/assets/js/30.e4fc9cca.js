(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{193:function(t,a,e){e(7)&&"g"!=/./g.flags&&e(9).f(RegExp.prototype,"flags",{configurable:!0,get:e(83)})},194:function(t,a,e){"use strict";e(193);var n=e(5),i=e(83),c=e(7),r=/./.toString,o=function(t){e(12)(RegExp.prototype,"toString",t,!0)};e(8)(function(){return"/a/b"!=r.call({source:"a",flags:"b"})})?o(function(){var t=n(this);return"/".concat(t.source,"/","flags"in t?t.flags:!c&&t instanceof RegExp?i.call(t):void 0)}):"toString"!=r.name&&o(function(){return r.call(this)})},195:function(t,a,e){"use strict";e.d(a,"a",function(){return n});e(194),e(21),e(82);function n(t){var a="àáäâèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;",e=new RegExp(a.split("").join("|"),"g");return t.toString().toLowerCase().replace(/\s+/g,"-").replace(e,function(t){return"aaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------".charAt(a.indexOf(t))}).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}},213:function(t,a,e){},236:function(t,a,e){"use strict";var n=e(213);e.n(n).a},265:function(t,a,e){"use strict";e.r(a);var n=e(195),i={data:function(){return{activeTab:"Overview"}},computed:{pageData:function(){return this.$page.frontmatter},tabLabels:function(){return this.pageData.tabLabels||["Overview","Design Guidelines","API","History"]},tabId:function(){return this.pageData.tabId||"global-component-doc-tabs"},activeTabClass:function(){return"cdr-doc-component-layout--".concat(Object(n.a)(this.activeTab),"-active")}},methods:{activeTabSwitched:function(t){this.activeTab=t}}},c=(e(236),e(0)),r=Object(c.a)(i,function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"page cdr-doc-component-layout",class:this.activeTabClass},[a("cdr-doc-intro",{attrs:{title:this.pageData.title,metadata:this.pageData.title_metadata,breadcrumbs:this.pageData.breadcrumbs}},[this._v("\n    "+this._s(this.pageData.summary)+"\n  ")]),a("Content",{attrs:{custom:!1}})],1)},[],!1,null,null,null);a.default=r.exports}}]);