webpackJsonp([1],{"11li":function(t,i){},"1MxG":function(t,i,s){t.exports=s.p+"static/img/banner1.58d54e6.png"},JBxo:function(t,i){},JqNy:function(t,i){},NHnr:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=s("7+uW"),e={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},staticRenderFns:[]};var n=s("VU/8")({name:"App"},e,!1,function(t){s("s3jv")},null,null).exports,l=s("/ocq"),c={name:"Home",data:function(){return{img_c:[],list:{}}},methods:{getImageList:function(){var t=this;this.$http.get("http://127.0.0.1:3008/carousel").then(function(i){t.img_c=i.data})},getNewsList:function(){var t=this;this.$http.get("http://127.0.0.1:3008/news").then(function(i){t.list=i.data})}},created:function(){this.getImageList(),this.getNewsList();var t=this;window.onscroll=function(){var i=document.documentElement.scrollTop||document.body.scrollTop,s=document.documentElement.clientHeight||document.body.clientHeight,a=document.documentElement.scrollHeight||document.body.scrollHeight;0!=i&&i+s==a&&(t.ntime=t.ntime-864e5,t.getNewsList())},this.mui.init();var i=this.mui("#offCanvasWrapper"),s=document.querySelector(".mui-inner-wrap"),a=document.getElementById("offCanvasSide"),e=!1,n=i.classList;this.mui(".mui-input-group").on("change","input",function(){if(this.checked){switch(a.classList.remove("mui-transitioning"),a.setAttribute("style",""),n.remove("mui-slide-in"),n.remove("mui-scalable"),this.value){case"main-move":e&&i[0].insertBefore(a,i[0].firstElementChild);break;case"main-move-scalable":e&&i[0].insertBefore(a,i[0].firstElementChild),n.add("mui-scalable");break;case"menu-move":n.add("mui-slide-in");break;case"all-move":e=!0,s.insertBefore(a,s.firstElementChild)}i.offCanvas().refresh()}}),this.mui("#offCanvasSideScroll").scroll(),this.mui("#offCanvasContentScroll").scroll(),this.mui.os.plus&&this.mui.os.ios&&this.mui.plusReady(function(){plus.webview.currentWebview().setStyle({popGesture:"none"})})},updated:function(){this.mui(".mui-slider").slider({interval:1e3})}},o={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"app-home"},[a("div",{staticClass:"mui-off-canvas-wrap mui-draggable",attrs:{id:"offCanvasWrapper"}},[a("aside",{staticClass:"mui-off-canvas-left",attrs:{id:"offCanvasSide"}},[a("div",{staticClass:"mui-scroll-wrapper",attrs:{id:"offCanvasSideScroll"}},[a("div",{staticClass:"mui-scroll"},[a("div",{staticClass:"canvas_title"},[a("img",{staticClass:"canvas_img",attrs:{src:s("1MxG")}}),t._v(" "),a("router-link",{staticClass:"link",attrs:{to:""}},[t._v("请登录")])],1),t._v(" "),a("div",{staticClass:"canvas_subtitle"},[a("router-link",{staticClass:"link",attrs:{to:""}},[a("span",{staticClass:"mui-icon mui-icon-star-filled"}),a("span",[t._v("我的收藏")])]),t._v(" "),a("router-link",{staticClass:"link",attrs:{to:""}},[a("span",{staticClass:"mui-icon mui-icon-pulldown"}),a("span",[t._v("离线下载")])])],1),t._v(" "),a("div",{staticClass:"canvas_list_container"},[a("span",[t._v("首页")]),t._v(" "),a("ul",{staticClass:"mui-table-view mui-table-view-chevron mui-table-view-inverted"},[a("li",{staticClass:"mui-table-view-cell"},[a("router-link",{staticClass:"mui-navigate-right link",attrs:{to:""}},[t._v("\n                    Item 1\n                  ")])],1),t._v(" "),a("li",{staticClass:"mui-table-view-cell"},[a("router-link",{staticClass:"mui-navigate-right link",attrs:{to:""}},[t._v("\n                    Item 2\n                  ")])],1),t._v(" "),a("li",{staticClass:"mui-table-view-cell"},[a("router-link",{staticClass:"mui-navigate-right link",attrs:{to:""}},[t._v("\n                    Item 3\n                  ")])],1),t._v(" "),a("li",{staticClass:"mui-table-view-cell"},[a("router-link",{staticClass:"mui-navigate-right link",attrs:{to:""}},[t._v("\n                    Item 4\n                  ")])],1),t._v(" "),a("li",{staticClass:"mui-table-view-cell"},[a("router-link",{staticClass:"mui-navigate-right link",attrs:{to:""}},[t._v("\n                    Item 5\n                  ")])],1),t._v(" "),a("li",{staticClass:"mui-table-view-cell"},[a("router-link",{staticClass:"mui-navigate-right link",attrs:{to:""}},[t._v("\n                    Item 6\n                  ")])],1)])])])])]),t._v(" "),a("div",{staticClass:"mui-inner-wrap"},[a("header",{staticClass:"mui-bar mui-bar-nav"},[a("router-link",{staticClass:"mui-icon mui-action-menu mui-icon-bars mui-pull-left",attrs:{to:"",href:"#offCanvasSide"}}),t._v(" "),a("router-link",{staticClass:" mui-btn mui-btn-link mui-pull-right",attrs:{to:"/Setting"}},[t._v("设置")]),t._v(" "),a("h1",{staticClass:"mui-title"},[t._v("首页")])],1),t._v(" "),a("div",{staticClass:"mui-content mui-scroll-wrapper",attrs:{id:"offCanvasContentScroll"}},[a("div",{staticClass:"mui-scroll"},[a("mt-swipe",{attrs:{auto:4e3}},t._l(t.img_c,function(t){return a("mt-swipe-item",{key:t.cid},[a("img",{staticClass:"banner-img",attrs:{src:t.img}})])})),t._v(" "),t._l(t.list,function(i,s){return a("div",{key:i.nid},[a("p",{staticClass:"date"},[t._v(t._s(s))]),t._v(" "),t._l(i,function(i){return a("div",{key:i.nid,staticClass:"list"},[a("ul",{staticClass:"mui-table-view"},[a("li",{staticClass:"mui-table-view-cell mui-media"},[a("router-link",{staticClass:"link",attrs:{to:"/NewsDetails/"+i.nid}},[a("img",{staticClass:"mui-media-object mui-pull-right",attrs:{src:i.img}}),t._v(" "),a("div",{staticClass:"mui-media-body"},[a("p",{staticClass:"mui-ellipsis",domProps:{textContent:t._s(i.title)}})])])],1)])])})],2)})],2)]),t._v(" "),a("div",{staticClass:"mui-off-canvas-backdrop"})])])])},staticRenderFns:[]};var r=s("VU/8")(c,o,!1,function(t){s("11li")},"data-v-00f3ace6",null).exports,u={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"app-newsdet"},[s("header",{staticClass:"mui-bar mui-bar-nav",attrs:{id:"header"}},[s("router-link",{staticClass:"mui-action-back mui-icon mui-icon-left-nav mui-pull-left link",attrs:{to:""}}),t._v(" "),s("router-link",{staticClass:"right link",attrs:{to:""},on:{click:t.addLike}},[s("span",{staticClass:"mui-icon-extra mui-icon-extra-like"}),t._v(" "),s("span",[t._v(t._s(t.like))])]),t._v(" "),s("router-link",{staticClass:"right link",attrs:{to:""}},[s("span",{staticClass:"mui-icon-extra mui-icon-extra-comment"}),t._v(" "),s("span",[t._v("1")])]),t._v(" "),s("router-link",{staticClass:"right link",attrs:{to:"",id:"icon-star"}},[s("span",{staticClass:"mui-icon mui-icon-star-filled"})]),t._v(" "),s("router-link",{staticClass:"right link",attrs:{to:""}},[s("span",{staticClass:"mui-icon-extra mui-icon-extra-share"})])],1),t._v(" "),t._l(t.list,function(i,a){return s("div",{key:i.pid},[s("div",[a%2==0?s("img",{staticClass:"img",attrs:{src:t.list[0].img}}):t._e(),t._v(" "),a%2==0?s("p",{staticClass:"txt title",domProps:{textContent:t._s(t.list[0].title)}}):t._e()]),t._v(" "),a%2==0?s("p",{staticClass:"txt subtitle",domProps:{textContent:t._s(i.subtitle)}}):t._e(),t._v(" "),s("div",{staticClass:"content"},[s("p",{staticClass:"txt author",domProps:{textContent:t._s(i.author)}}),t._v(" "),s("div",{staticClass:"clear"},[s("p",{staticClass:"txt",domProps:{textContent:t._s(i.content1)}}),t._v(" "),s("img",{staticClass:"img_det",attrs:{src:i.img_detail1}}),t._v(" "),s("p",{staticClass:"txt",domProps:{textContent:t._s(i.content2)}}),t._v(" "),s("img",{staticClass:"img_det",attrs:{src:i.img_detail2}}),t._v(" "),s("p",{staticClass:"txt",domProps:{textContent:t._s(i.content3)}}),t._v(" "),s("img",{staticClass:"img_det",attrs:{src:i.img_detail3}}),t._v(" "),s("p",{staticClass:"txt",domProps:{textContent:t._s(i.content4)}})])])])}),t._v(" "),s("p",{staticClass:"copy"},[t._v("知乎网 ©2018-知乎")])],2)},staticRenderFns:[]};var m=s("VU/8")({name:"newsDetails",data:function(){return{list:[],like:0}},methods:{getNewsList:function(){var t=this,i="http://127.0.0.1:3008/newsdetails?nid="+this.nid;this.$http.get(i).then(function(i){t.list=i.data})},addLike:function(){this.like++}},created:function(){this.getNewsList()},props:["nid"]},u,!1,function(t){s("jI/w")},"data-v-3d6801cc",null).exports,v={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"app-setting"}},[s("div",{staticClass:"set-title"},[s("button",{staticClass:"mui-btn mui-btn-link",attrs:{type:"button"},on:{click:t.back}},[s("span",{staticClass:"mui-icon mui-icon-back"}),t._v("\n            返回\n        ")]),t._v(" "),s("span",[t._v("设置")])]),t._v(" "),t._m(0),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"set-content"},[s("p",{staticClass:"content-title"},[t._v("常规")]),t._v(" "),s("ul",[s("li",{staticClass:"mui-table-view-cell"},[s("div",{staticClass:"content-opt"},[s("p",{staticClass:"opt-large"},[t._v("自动离线下载")]),t._v(" "),s("p",{staticClass:"opt-small"},[t._v("仅Wi-Fi下可用，自动下载最新内容")])]),t._v(" "),s("div",{staticClass:"mui-switch mui-switch-blue mui-switch-mini"},[s("div",{staticClass:"mui-switch-handle"})])]),t._v(" "),s("li",{staticClass:"mui-table-view-cell"},[s("div",{staticClass:"content-opt"},[s("p",{staticClass:"opt-large"},[t._v("无图模式")]),t._v(" "),s("p",{staticClass:"opt-small"},[t._v("2G/3G网络下不下载图片")])]),t._v(" "),s("div",{staticClass:"mui-switch mui-switch-blue mui-switch-mini mui-active"},[s("div",{staticClass:"mui-switch-handle"})])]),t._v(" "),s("li",{staticClass:"mui-table-view-cell"},[s("div",{staticClass:"content-opt center"},[s("p",{staticClass:"opt-large"},[t._v("大字号")])]),t._v(" "),s("div",{staticClass:"mui-switch mui-switch-blue mui-switch-mini mui-active"},[s("div",{staticClass:"mui-switch-handle"})])])]),t._v(" "),s("p",{staticClass:"content-title"},[t._v("其他")]),t._v(" "),s("div",{staticClass:"mui-content"},[s("div",{staticClass:"mui-card"},[s("ul",{staticClass:"mui-table-view"},[s("li",{staticClass:"mui-table-view-cell"},[s("div",{staticClass:"content-opt center"},[s("p",{staticClass:"opt-large"},[t._v("推送消息")])]),t._v(" "),s("div",{staticClass:"mui-switch mui-switch-blue mui-switch-mini mui-active"},[s("div",{staticClass:"mui-switch-handle"})])]),t._v(" "),s("li",{staticClass:"mui-table-view-cell"},[s("div",{staticClass:"content-opt center"},[s("p",{staticClass:"opt-large"},[t._v("点评分享到微博")])]),t._v(" "),s("div",{staticClass:"mui-switch mui-switch-blue mui-switch-mini mui-active"},[s("div",{staticClass:"mui-switch-handle"})])]),t._v(" "),s("li",{staticClass:"mui-table-view-cell"},[s("div",{staticClass:"center"},[s("p",{staticClass:"opt-large"},[t._v("清除缓存")])])]),t._v(" "),s("li",{staticClass:"mui-table-view-cell"},[s("div",[s("p",{staticClass:"opt-large"},[t._v("检查更新")]),t._v(" "),s("p",{staticClass:"opt-small"},[t._v("版本：2.6.6(795)")])])])])])]),t._v(" "),s("p",{staticClass:"content-title"},[t._v("反馈")]),t._v(" "),s("p",{staticClass:"opt-large"},[t._v("意见反馈")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("p",{staticClass:"bottom"},[this._v("登录即代表你同意"),i("span",[this._v("《知乎协议》")])])}]};var d=s("VU/8")({name:"Setting",data:function(){return{}},methods:{back:function(){this.$router.push({name:"Home"})}},created:function(){this.mui.init({swipeBack:!0})}},v,!1,function(t){s("JBxo")},"data-v-0d7f78e0",null).exports,p={methods:{back:function(){var t=this;setTimeout(function(){t.$router.go(-1)},2e3)}},created:function(){this.back()}},_={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("p",[this._v("您请求的页面不存在")])])}]};var C=s("VU/8")(p,_,!1,function(t){s("mAsr")},"data-v-14d9cfab",null).exports;a.default.use(l.a);var h=new l.a({routes:[{path:"/",name:"Home",component:r},{path:"/Home",name:"Home",component:r},{path:"/NewsDetails/:nid",name:"NewsDetails",component:m,props:!0},{path:"/Setting",name:"Setting",component:d},{path:"/*",name:"NotFound",component:C}]}),f=s("NYxO");a.default.use(f.a);var g=new f.a.Store({state:{},mutations:{},actions:{}}),w=s("mtWM"),b=s.n(w),k=(s("JqNy"),s("ZkRW"),s("d8/S"),s("OTjt")),x=s.n(k),S=s("Au9i");a.default.component(S.Swipe.name,S.Swipe),a.default.component(S.SwipeItem.name,S.SwipeItem),a.default.config.productionTip=!1,b.a.defaults.withCredentials=!0,a.default.prototype.$http=b.a,a.default.prototype.mui=x.a,new a.default({el:"#app",router:h,store:g,components:{App:n},template:"<App/>"})},ZkRW:function(t,i){},"d8/S":function(t,i){},"jI/w":function(t,i){},mAsr:function(t,i){},s3jv:function(t,i){}},["NHnr"]);
//# sourceMappingURL=app.83a7ba24f8b57657d832.js.map