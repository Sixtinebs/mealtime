(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2475a1c0"],{1453:function(e,t,n){},"19ec":function(e,t,n){},"20d3":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),a=function(e){return Object(c["v"])("data-v-565c972f"),e=e(),Object(c["t"])(),e},r={class:"container"},s=a((function(){return Object(c["g"])("h1",null,"International Cooking !",-1)}));function o(e,t,n,a,o,i){var l=Object(c["z"])("Area");return Object(c["s"])(),Object(c["f"])("section",r,[s,Object(c["i"])(l)])}var i={class:"areas"},l=["onClick"],u=["onClick"];function f(e,t,n,a,r,s){var o=Object(c["z"])("List");return Object(c["s"])(),Object(c["f"])("div",i,[(Object(c["s"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(r.areas,(function(e,t){return Object(c["s"])(),Object(c["f"])("div",{class:Object(c["o"])(["area",{isActive:t==r.selected}]),key:e,onClick:function(e){return r.selected=t}},[Object(c["g"])("p",{onClick:function(t){return s.seeAreaMeal(e.strArea)}},Object(c["B"])(e.strArea),9,u)],10,l)})),128)),Object(c["i"])(o,{"meal-list":r.areaSelect},null,8,["meal-list"])])}var d=n("ec49"),b=n("2e90"),O={components:{List:b["a"]},data:function(){return{areas:null,areaSelect:null,selected:void 0}},methods:{getAllArea:function(){var e=this;d["a"].getAllArea().then((function(t){e.areas=t.data.meals})).catch((function(e){return console.log(e)}))},getOneArea:function(e){var t=this;d["a"].getOneArea(e).then((function(e){console.log(e),t.areaSelect=e.data.meals,console.log(t.areaSelect)}))},seeAreaMeal:function(e){this.getOneArea(e)},testClass:function(e){this.isActive="index-".concat(e)}},mounted:function(){this.getAllArea()}},j=(n("2cd2"),n("6b0d")),v=n.n(j);const A=v()(O,[["render",f],["__scopeId","data-v-1ca39328"]]);var g=A,h={components:{Area:g}};n("fe02");const p=v()(h,[["render",o],["__scopeId","data-v-565c972f"]]);t["default"]=p},"2cd2":function(e,t,n){"use strict";n("19ec")},fe02:function(e,t,n){"use strict";n("1453")}}]);
//# sourceMappingURL=chunk-2475a1c0.173d81f0.js.map