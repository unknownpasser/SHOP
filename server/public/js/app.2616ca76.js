(function(t){function e(e){for(var r,o,i=e[0],c=e[1],u=e[2],l=0,d=[];l<i.length;l++)o=i[l],a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},a={app:0},s=[];function i(t){return c.p+"js/"+({components:"components"}[t]||t)+"."+{components:"44f76789"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={components:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise(function(e,n){for(var r="css/"+({components:"components"}[t]||t)+"."+{components:"b4cd5b42"}[t]+".css",a=c.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===r||l===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||a,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete o[t],f.parentNode.removeChild(f),n(s)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){o[t]=0}));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise(function(e,n){r=a[t]=[e,n]});e.push(r[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(t),u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+r+": "+o+")");s.type=r,s.request=o,n[1](s)}a[t]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"12ae":function(t,e,n){t.exports=n.p+"img/loading.407618d7.gif"},"4dcc":function(t,e,n){"use strict";var r=n("8fe4"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",{attrs:{exclude:"Detail"}},[n("router-view")],1),t.loading?n("loading"):t._e()],1)},a=[],s=n("cebc"),i=n("2f62"),c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading-pack"},[n("div",{staticClass:"spinner"},[n("div",{staticClass:"spinner-container container1"},[n("div",{staticClass:"circle1"}),n("div",{staticClass:"circle2"}),n("div",{staticClass:"circle3"}),n("div",{staticClass:"circle4"})]),n("div",{staticClass:"spinner-container container2"},[n("div",{staticClass:"circle1"}),n("div",{staticClass:"circle2"}),n("div",{staticClass:"circle3"}),n("div",{staticClass:"circle4"})]),n("div",{staticClass:"spinner-container container3"},[n("div",{staticClass:"circle1"}),n("div",{staticClass:"circle2"}),n("div",{staticClass:"circle3"}),n("div",{staticClass:"circle4"})])]),n("p",{staticStyle:{color:"#67cf22","text-align":"center"}},[t._v("正在加载")])])}],l={name:"Loading"},d=l,f=(n("4dcc"),n("2877")),p=Object(f["a"])(d,c,u,!1,null,"078310c0",null),m=p.exports,h={components:{Loading:m},data:function(){return{}},computed:Object(s["a"])({},Object(i["c"])(["loading"]))},v=h,g=(n("7faf"),Object(f["a"])(v,o,a,!1,null,null,null)),b=g.exports,L=n("8c4f"),y=function(){return n.e("components").then(n.bind(null,"bb51"))},C=function(){return n.e("components").then(n.bind(null,"c84b"))},S=function(){return n.e("components").then(n.bind(null,"364d"))},E=function(){return n.e("components").then(n.bind(null,"befe"))},w=function(){return n.e("components").then(n.bind(null,"a55b"))},_=function(){return n.e("components").then(n.bind(null,"1511"))},j=function(){return n.e("components").then(n.bind(null,"b789"))},k=function(){return n.e("components").then(n.bind(null,"78c1"))};r["a"].use(L["a"]);var A=new L["a"]({routes:[{path:"/",name:"home",component:y},{path:"/detail",naem:"detail",component:C},{path:"/test",naem:"test",component:k},{path:"/addressList",name:"addressList",component:E,meta:{requireAuth:!0}},{path:"/addressEdit",name:"addressEdit",component:S,meta:{requireAuth:!0}},{path:"/login",name:"login",component:w},{path:"/user",name:"user",component:_,meta:{requireAuth:!0}},{path:"/cart",name:"cart",component:j,meta:{requireAuth:!0}},{path:"/test",name:"test",component:k}]});A.beforeEach(function(t,e,n){var r=localStorage.getItem("token");t.meta.requireAuth?r?n():n({path:"/",replace:!0}):n()});var O=A,x={loading:!0,Num:1,address:"请选择地址",token:localStorage.getItem("token")||"",cartsList:[]},I=(n("ac6a"),{onLoading:function(t){t.loading=!0},offLoading:function(t){t.loading=!1},setAddress:function(t,e){t.address=e},setToken:function(t,e){t.token=e,localStorage.setItem("token",e)},setNum:function(t,e){t.Num=e},setCartsList:function(t,e){t.cartsList=e,t.cartsList.map(function(t){t.chooseStatus=!0,t.deleteStatus=!1})},setCartsListNum:function(t,e){var n=[];t.cartsList.forEach(function(t){t.goodsId==e.goodsId?(t.num=e.num,n.push(t)):n.push(t)}),t.cartsList=n},setCartsListAllStatus:function(t,e){var n=[];e.deleteflag?e.allflag?t.cartsList.forEach(function(t){t.deleteStatus=!1,n.push(t)}):t.cartsList.forEach(function(t){t.deleteStatus=!0,n.push(t)}):e.allflag?t.cartsList.forEach(function(t){t.chooseStatus=!1,n.push(t)}):t.cartsList.forEach(function(t){t.chooseStatus=!0,n.push(t)}),t.cartsList=n},setCartsListStatus:function(t,e){var n=[];t.cartsList.forEach(function(t){1==e.deleteflag?(t.goodsId==e.goodsId&&(t.deleteStatus=!t.deleteStatus),n.push(t)):(t.goodsId==e.goodsId&&(t.chooseStatus=!t.chooseStatus),n.push(t))}),t.cartsList=n},deleteCartsList:function(t,e){var n=t.cartsList;e.forEach(function(t){n=n.filter(function(e){return e.goodsId!=t})}),t.cartsList=n}});r["a"].use(i["a"]);var P=new i["a"].Store({state:x,mutations:I,actions:{}}),N=n("bc3a"),T=n.n(N),q=T.a.create({timeout:3e4});q.interceptors.request.use(function(t){P.commit("onLoading");var e=P.state.token;return""!=e&&(t.headers.Authorization=e),t},function(t){return Promise.reject(t)}),q.interceptors.response.use(function(t){return P.commit("offLoading"),t},function(t){return Promise.reject(t.response)});var M=q,$=(n("f5df"),n("a342"),n("283e")),B=n.n($);r["a"].use(B.a,{loading:n("12ae")}),r["a"].prototype.http=M,r["a"].config.productionTip=!1,new r["a"]({router:O,store:P,render:function(t){return t(b)}}).$mount("#app")},"7faf":function(t,e,n){"use strict";var r=n("8fba"),o=n.n(r);o.a},"8fba":function(t,e,n){},"8fe4":function(t,e,n){},a342:function(t,e,n){}});
//# sourceMappingURL=app.2616ca76.js.map