"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{634:function(e,t,r){r.d(t,{BG:function(){return o},E9:function(){return c},FE:function(){return p},kK:function(){return v},sv:function(){return f}});var n=r(861),a=r(757),u=r.n(a),i=r(340);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="6d230c622d6ef293e3241f7254a93d17",c=function(){var e=(0,n.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("trending/movie/day",{params:{api_key:s}});case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t),{params:{api_key:s}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("search/movie",{params:{api_key:s,query:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t,"/reviews?language=en-US&page=1"),{params:{api_key:s}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t,"/credits?language=en-US&page=1"),{params:{api_key:s}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},186:function(e,t,r){r.r(t),r.d(t,{Reviews:function(){return c}});var n=r(439),a=r(791),u=r(689),i=r(634),s=r(184),c=function(){var e=(0,u.UO)().movieId,t=(0,a.useState)([]),r=(0,n.Z)(t,2),c=r[0],o=r[1];return(0,a.useEffect)((function(){(0,i.sv)(e).then((function(e){return o(e)}))}),[e]),(0,s.jsx)("div",{children:(0,s.jsx)("ul",{children:0!==c.length?c.map((function(e){return(0,s.jsxs)("li",{children:[(0,s.jsx)("span",{children:e.author}),(0,s.jsx)("p",{children:e.content})]},e.id)})):(0,s.jsx)("h2",{children:"There are currently no reviews. This movie has not yet had time to talk about itself, but we hope that the reviews will be positive."})})})};t.default=c}}]);
//# sourceMappingURL=186.c9bfeb1f.chunk.js.map