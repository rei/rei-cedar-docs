webpackJsonp([44],{"07vS":function(t,n,d){"use strict";var e=function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"cedar-comp"},domProps:{innerHTML:this._s(this.md)}})};e._withStripped=!0;var r={render:e,staticRenderFns:[]};n.a=r},"1GbG":function(t,n){t.exports='<section><h1><span class="display-name">CdrCol</span></h1>\n<p><span class="file">src/components/column/cdrCol.vue<span></p>\n<p>Cedar 2 component for column</p>\n<p><strong>Note</strong>: immediate children of <code>cdr-col</code> are treated as flex items (due to a flex height bug in Safari). As a result, if you want to have more than one child element they should be wrapped in a single <code>div</code> element.</p>\n<p><strong>NOTE</strong>: anytime a <code>cdr-col</code> is nested within another <code>cdr-col</code> the parent needs <code>is-row</code> to function correctly</p>\n<p>See cdr-row for complex example.</p>\n<h3><button class=\'title\'>PROPS, METHODS, EVENTS, SLOTS</button></h3>\n<table>\n<thead>\n<tr>\n<th>Prop Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Require</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>span</td>\n<td>string,number</td>\n<td>n/a</td>\n<td>false</td>\n<td>Number of columns (1-12) the column should span.</td>\n</tr>\n<tr>\n<td>spanSm</td>\n<td>string,number</td>\n<td>n/a</td>\n<td>false</td>\n<td>Sm breakpoint and above</td>\n</tr>\n<tr>\n<td>spanMd</td>\n<td>string,number</td>\n<td>n/a</td>\n<td>false</td>\n<td>Md breakpoint and above</td>\n</tr>\n<tr>\n<td>spanLg</td>\n<td>string,number</td>\n<td>n/a</td>\n<td>false</td>\n<td>Lg breakpoint and above</td>\n</tr>\n<tr>\n<td>offsetLeft</td>\n<td>string,number</td>\n<td>n/a</td>\n<td>false</td>\n<td>Number of columns (1-12) of empty space to add left of this column.</td>\n</tr>\n<tr>\n<td>offsetLeftSm</td>\n<td>string,number</td>\n<td>n/a</td>\n<td>false</td>\n<td>Sm breakpoint and above</td>\n</tr>\n<tr>\n<td>offsetLeftMd</td>\n<td>string,number</td>\n<td>n/a</td>\n<td>false</td>\n<td>Md breakpoint and above</td>\n</tr>\n<tr>\n<td>offsetLeftLg</td>\n<td>string,number</td>\n<td>n/a</td>\n<td>false</td>\n<td>Lg breakpoint and above</td>\n</tr>\n<tr>\n<td>offsetRight</td>\n<td>string,number</td>\n<td>n/a</td>\n<td>false</td>\n<td>Number of columns (1-12) of empty space to add right of this column.</td>\n</tr>\n<tr>\n<td>offsetRightSm</td>\n<td>string,number</td>\n<td>n/a</td>\n<td>false</td>\n<td>Sm breakpoint and above</td>\n</tr>\n<tr>\n<td>offsetRightMd</td>\n<td>string,number</td>\n<td>n/a</td>\n<td>false</td>\n<td>Md breakpoint and above</td>\n</tr>\n<tr>\n<td>offsetRightLg</td>\n<td>string,number</td>\n<td>n/a</td>\n<td>false</td>\n<td>Lg breakpoint and above</td>\n</tr>\n<tr>\n<td>alignSelf</td>\n<td>string</td>\n<td>n/a</td>\n<td>false</td>\n<td>How the column should align (overrides cdr-row alignment). Possible values: {top, middle, bottom, stretch}. See CSS flexbox align-self.</td>\n</tr>\n<tr>\n<td>alignSelfSm</td>\n<td>string</td>\n<td>n/a</td>\n<td>false</td>\n<td>Sm breakpoint and above</td>\n</tr>\n<tr>\n<td>alignSelfMd</td>\n<td>string</td>\n<td>n/a</td>\n<td>false</td>\n<td>Md breakpoint and above</td>\n</tr>\n<tr>\n<td>alignSelfLg</td>\n<td>string</td>\n<td>n/a</td>\n<td>false</td>\n<td>Lg breakpoint and above</td>\n</tr>\n<tr>\n<td>isRow</td>\n<td>boolean</td>\n<td>false</td>\n<td>false</td>\n<td>Makes the column act as a new cdr-row. Setting this to true exposes the same props as cdr-row.</td>\n</tr>\n</tbody>\n</table>\n<table>\n<thead>\n<tr>\n<th>Slot</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>default</td>\n<td>innerHTML inside of the column component</td>\n</tr>\n</tbody>\n</table>\n</section>\n'},NCxA:function(t,n,d){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=d("lhdW"),r=d("07vS"),a=d("VU/8")(e.a,r.a,!1,null,null,null);a.options.__file="pages/CdrCol/index.vue",n.default=a.exports},lhdW:function(t,n,d){"use strict";var e=d("1GbG"),r=d.n(e);n.a={name:"CdrCol-current",computed:{md:function(){return r.a}}}}});