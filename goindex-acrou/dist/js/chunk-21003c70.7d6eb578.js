(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21003c70","chunk-936c1d92"],{"2db9":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"breadcrumb level g2-breadcrumb is-hidden-mobile",attrs:{"aria-label":"breadcrumbs"}},[n("div",{staticClass:"level-left"},[n("div",{staticClass:"level-item"},[n("ul",[n("li",[n("a",{directives:[{name:"show",rawName:"v-show",value:t.navs&&t.navs.length>0,expression:"navs && navs.length > 0"}],on:{click:function(e){return t.go("/"+t.index+":/")}}},[t._v(t._s(t.$t("index")))])]),t._l(t.navs,(function(e,r){return n("li",{key:r,class:r+1==t.navs.length?"is-active":""},[r+1==t.navs.length?n("a",{attrs:{"aria-current":"page",href:"#"}},[t._v(t._s(e.title))]):n("a",{on:{click:function(n){return t.go(e.path)}}},[t._v(t._s(e.title))])])}))],2)])]),n("div",{staticClass:"level-right"},[n("div",{staticClass:"level-item"},[n("view-mode")],1)])])])},a=[],i=(n("ac1f"),n("1276"),n("498a"),n("466d"),n("f3f7")),s=n("45d8"),c={props:["name"],components:{ViewMode:i["a"]},data:function(){return{navs:[],index:"/"}},mounted:function(){this.render()},watch:{$route:"render"},methods:{go:function(t){this.$router.push({path:t})},render:function(){this.index=this.$route.params.id;var t=this.$route.params.cmd;if("search"!==t){var e=this.$route.path;t&&(e=Object(s["d"])(this.$route.params.path));var n=e.trim("/").split("/"),r="/";if(n.length>0){var a=[];for(var i in n){var c=n[i];""!=c&&(c=decodeURIComponent(c),r+=n[i]+"/",c.match("[0-9]+:")||a.push({path:r,title:c}))}this.navs=a}}else this.navs=[]}}},u=c,o=(n("6118"),n("2877")),l=Object(o["a"])(u,r,a,!1,null,"18c33a6f",null);e["default"]=l.exports},"498a":function(t,e,n){"use strict";var r=n("23e7"),a=n("58a8").trim,i=n("c8d2");r({target:"String",proto:!0,forced:i("trim")},{trim:function(){return a(this)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),a=n("577e"),i=n("5899"),s="["+i+"]",c=RegExp("^"+s+s+"*"),u=RegExp(s+s+"*$"),o=function(t){return function(e){var n=a(r(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(u,"")),n}};t.exports={start:o(1),end:o(2),trim:o(3)}},6118:function(t,e,n){"use strict";n("7453")},7453:function(t,e,n){},c8d2:function(t,e,n){var r=n("5e77").PROPER,a=n("d039"),i=n("5899"),s="​᠎";t.exports=function(t){return a((function(){return!!i[t]()||s[t]()!==s||r&&i[t].name!==t}))}},e42c:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("bread-crumb",{ref:"breadcrumb"}),n("router-view")],1)},a=[],i=n("2db9"),s={components:{BreadCrumb:i["default"]}},c=s,u=n("2877"),o=Object(u["a"])(c,r,a,!1,null,null,null);e["default"]=o.exports}}]);