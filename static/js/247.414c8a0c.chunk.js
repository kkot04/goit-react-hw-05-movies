"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[247],{634:function(e,n,r){r.d(n,{BG:function(){return o},E9:function(){return i},FE:function(){return p},kK:function(){return h},sv:function(){return f}});var t=r(861),a=r(757),u=r.n(a),c=r(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="6d230c622d6ef293e3241f7254a93d17",i=function(){var e=(0,t.Z)(u().mark((function e(){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day",{params:{api_key:s}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n),{params:{api_key:s}});case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie",{params:{api_key:s,query:n}});case 2:return r=e.sent,t=r.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/reviews?language=en-US&page=1"),{params:{api_key:s}});case 2:return r=e.sent,t=r.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/credits?language=en-US&page=1"),{params:{api_key:s}});case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},247:function(e,n,r){r.r(n);var t=r(439),a=r(791),u=r(689),c=r(634),s=r(184);n.default=function(){var e=(0,u.UO)().movieId,n=(0,a.useState)([]),r=(0,t.Z)(n,2),i=r[0],o=r[1];return(0,a.useEffect)((function(){(0,c.kK)(e).then((function(e){return o(e.cast)}))}),[e]),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("ul",{children:0!==i.length?i.map((function(e){return(0,s.jsx)("li",{children:(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:e.name}),(0,s.jsxs)("span",{children:[(0,s.jsx)("b",{children:"Role:"})," ",e.character]})]})},e.id)})):(0,s.jsx)("h2",{children:"We do not have information about the cast, or they have wished to remain anonymous."})})})}}}]);
//# sourceMappingURL=247.414c8a0c.chunk.js.map