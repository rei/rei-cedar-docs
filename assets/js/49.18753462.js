(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{317:function(t,e,s){},408:function(t,e,s){"use strict";s(317)},449:function(t,e,s){"use strict";s.r(e);var n=s(407),i=s(269),a=s.n(i),c={name:"TokensSpaceExample",props:{name:String,isInset:{type:Boolean,default:!1}},data:()=>({tokens:n}),computed:{spaceValue(){return this.tokens[a()(this.name)]},pad(){const t=this.spaceValue;if(t.indexOf(" ")<=0)return`${t} ${t}`;if(t.indexOf("*")>0){let[e,s]=t.split(") ");return`${e}) ${s}`}const[e,s]=t.split(" ");return`${e} ${s}`},inset(){const t=this.spaceValue;if(t.indexOf(" ")<=0)return this.getInset(t,t,"-"+t,"-"+t);if(t.indexOf("*")>0){let[e,s]=t.split(") ");const n=`${e.slice(0,5)}-${e.slice(5)})`;return this.getInset(e+")",s,n,"-"+s)}const[e,s]=t.split(" ");return this.getInset(e,s,"-"+e,"-"+s)}},methods:{getInset:(t,e,s,n)=>`inset ${n} ${s} 0 rgb(199, 220, 191), inset ${e} ${t} 0 rgb(199, 220, 191)`}},l=(s(408),s(4)),p=Object(l.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:[this.isInset?"":"space-wrapper","stack-1"]},[this.isInset?e("div",{staticClass:"inset-example",style:{boxShadow:this.inset,padding:this.pad}},[this._v("content")]):e("div",{staticClass:"space-example",style:{width:this.spaceValue,height:this.spaceValue}})])}),[],!1,null,null,null);e.default=p.exports}}]);