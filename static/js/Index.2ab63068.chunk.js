(this.webpackJsonpreact_ts_template=this.webpackJsonpreact_ts_template||[]).push([[2],{159:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(160),i=a.n(s),c=a(161),o=a.n(c);a(162);t.a=function(e){return r.a.createElement("div",{className:"logo",style:{width:"small"===e.size?"1rem":"2rem",height:"small"===e.size?"1rem":"2rem"}},r.a.createElement("img",{className:"bg",src:i.a,alt:""}),r.a.createElement("img",{className:"inner",src:o.a,alt:""}))}},160:function(e,t,a){e.exports=a.p+"static/media/preload-bg@2x.15f8750a.png"},161:function(e,t,a){e.exports=a.p+"static/media/preload-inner@2x.90da4dd6.png"},162:function(e,t,a){},184:function(e,t,a){},185:function(e,t,a){},211:function(e,t,a){"use strict";a.r(t);var n=a(174),r=a.n(n),s=(a(163),a(164)),i=a.n(s),c=a(183),o=a(0),u=a.n(o),l=a(74),m=a(26),p=function(e){return{type:m.c,value:e}},E=a(159),f=(a(184),["TypeScript \u5f00\u53d1\u8bed\u8a00","redux \u72b6\u6001\u7ba1\u7406","react-router \u8def\u7531\u7ba1\u7406","axios \u5c01\u88c5\u53ca\u63a5\u53e3\u7ba1\u7406","\u672c\u5730 mock server \u652f\u6301","\u672c\u5730\u8de8\u57df\u914d\u7f6e","esint + prettier \u7edf\u4e00\u5f00\u53d1\u89c4\u8303","\u652f\u6301\u81ea\u5b9a\u4e49 webpack \u914d\u7f6e","rem \u9002\u914d\u65b9\u6848","antd-moblie \u7ec4\u4ef6\u6309\u9700\u52a0\u8f7d","\u914d\u7f6e alias \u522b\u540d","\u914d\u7f6e\u591a\u73af\u5883\u53d8\u91cf"]);var d=function(){return u.a.createElement("div",{className:"list"},f.map((function(e){return u.a.createElement("div",{key:e,className:"item"},u.a.createElement("span",{role:"img","aria-label":""},"\u2705"),u.a.createElement("span",{className:"done"},e))})))},T=(a(185),a(186)),N=a(187),v=a.n(N),A=a(73),R={OK:200,CREATED:201,ACCEPTED:202,CLIENT_ERROR:400,AUTHENTICATE:401,FORBIDDEN:403,NOT_FOUND:404,SERVER_ERROR:500,BAD_GATEWAY:502,SERVICE_UNAVAILABLE:503,GATEWAY_TIMEOUT:504},h={OK:"200 - \u8bf7\u6c42\u6210\u529f",CREATED:"201 - \u8bf7\u6c42\u5df2\u521b\u5efa",ACCEPTED:"202 - \u8bf7\u6c42\u5df2\u63a5\u53d7",CLIENT_ERROR:"400 - \u9519\u8bef\u8bf7\u6c42! ",AUTHENTICATE:"401 - \u7528\u6237\u6ca1\u6709\u6743\u9650! ",FORBIDDEN:"403 - \u62d2\u7edd\u8bbf\u95ee! ",NOT_FOUND:"404 - \u8bf7\u6c42\u9519\u8bef, \u672a\u627e\u5230\u8be5\u8d44\u6e90! ",SERVER_ERROR:"500 - \u670d\u52a1\u5668\u53d1\u751f\u9519\u8bef\uff0c\u8bf7\u68c0\u67e5\u670d\u52a1\u5668! ",BAD_GATEWAY:"502 - \u7f51\u5173\u9519\u8bef! ",SERVICE_UNAVAILABLE:"503 - \u670d\u52a1\u4e0d\u53ef\u7528\uff0c\u670d\u52a1\u5668\u6682\u65f6\u8fc7\u8f7d\u6216\u7ef4\u62a4! ",GATEWAY_TIMEOUT:"504 - \u8fde\u63a5\u8d85\u65f6!"},O=function(e,t){for(var a in t&&t.response&&t.response.status&&(e=t.response.status),R){if(R[a]===e)return h[a]}return"string"===typeof t&&t.indexOf("timeout")>-1?"\u8bf7\u6c42\u8d85\u65f6\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5\uff01":"string"===typeof t&&t.indexOf("Network")>-1?"\u8bf7\u6c42\u5931\u8d25, \u8bf7\u68c0\u67e5\u7f51\u7edc\u8fde\u63a5":"\u672a\u77e5\u9519\u8bef"};function x(e,t,a,n){var r={env:A.a.ENV_TYPE,mockType:1,source:"h5"};a=Object.assign({},a,r);var s={url:e,method:t,params:"GET"===t.toUpperCase()||"DELETE"===t.toUpperCase()?a:null,data:"POST"===t.toUpperCase()||"PUT"===t.toUpperCase()?a:null},c=function(e){var t=v.a.create({baseURL:A.a.BASE_URL,timeout:5e3,withCredentials:!1});return t.interceptors.request.use((function(t){return e&&i.a.loading("\u52a0\u8f7d\u4e2d"),t.headers={"Content-Type":"application/json"},t})),t.interceptors.response.use((function(e){return i.a.hide(),e&&e.status&&200!==e.status?(i.a.info(O(e.status),2),Promise.reject(e||"error")):Promise.resolve(e)}),(function(e){return i.a.hide(),i.a.info(O(null,e),2),Promise.reject(e)})),t}(n);return new Promise((function(e,t){c(s).then((function(t){var a=t.data;e(a.data)})).catch((function(e){t(e)}))}))}var C=function e(){Object(T.a)(this,e)};C.getList=function(e){return x("/api/getInfo","GET",e,!0)},C.updateInfo=function(e){return x("/api/updateInfo","POST",e,!0)};var _=C;t.default=function(){var e=Object(l.c)((function(e){return e.user})),t=Object(l.b)(),a=function(){var e=Object(c.a)(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(p({userId:"413",nickName:"developer",sex:1})),e.next=3,_.getList({type:1});case 3:return a=e.sent,console.info(a[0].name),e.next=7,_.updateInfo({name:"Jhon",phone:"18888888888",password:"xxxxxxxx"});case 7:e.sent&&i.a.info("\u66f4\u65b0\u6210\u529f");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return u.a.createElement("div",{className:"index-page"},u.a.createElement("div",{className:"head",onClick:a},u.a.createElement(E.a,{size:"small"}),u.a.createElement("h2",{className:"title"},"React H5\u5f00\u53d1\u6a21\u677f")),u.a.createElement("div",{className:"desc"},"\u57fa\u4e8e react + antd-mobile + ts \u7684 h5 \u5f00\u53d1\u6a21\u677f"),u.a.createElement("div",{className:"welcome"},"hello ",e.nickName," !"),u.a.createElement(d,null))}}}]);