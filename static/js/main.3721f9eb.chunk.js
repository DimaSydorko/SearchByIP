(this.webpackJsonpdmytro_sydorko_leany_labs_task=this.webpackJsonpdmytro_sydorko_leany_labs_task||[]).push([[0],{40:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},72:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);n(40);var c=n(0),a=n.n(c),r=n(15),A=n.n(r),o=n(39),i=n(14),s=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,A=t.getTTFB;n(e),c(e),a(e),r(e),A(e)}))},u=n(9),g=n(34),l=n(21),j=n.n(l),O=n(35),h=n(12),b=n(36),d=n.n(b),m=function(e){return d.a.get("https://ipapi.co/".concat(e,"/json/")).then((function(e){return e.data}))},p="location-reduser/SET_LOCATION_BY_IP",E="location-reduser/TOGGLE_IS_FETCHING",f="location-reduser/SOME_EROOR",I={isFetching:!1,locationData:null,error:null},x=function(e){return{type:p,locationData:e}},v=function(e){return{type:E,isFetching:e}},B=function(){return{type:f}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(h.a)(Object(h.a)({},e),{},{locationData:t.locationData,error:null});case E:return Object(h.a)(Object(h.a)({},e),{},{isFetching:t.isFetching,error:null});case f:return Object(h.a)(Object(h.a)({},e),{},{daysWeather:[],searchInProgres:"",error:"Something went wrong \ud83d\ude1e. Please try again."});default:return e}},y=Object(u.b)({geolocation:w}),S=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.c,U=Object(u.d)(y,S(Object(u.a)(g.a)));window.__store__=U;var C=U,F=(n(69),n(70),n(18)),G=n(1),R=a.a.memo((function(e){var t=e.search;return Object(G.jsx)(G.Fragment,{children:Object(G.jsx)(F.c,{initialValues:{searchLocationByIp:""},onSubmit:function(e){t(e.searchLocationByIp)},children:function(e){var t=e.handleSubmit,n=e.handleChange;return Object(G.jsxs)(F.b,{onSubmit:t,children:[Object(G.jsx)(F.a,{type:"search",name:"searchLocationByIp",placeholder:"8.8.8.8",autoComplete:"off",onChange:n}),Object(G.jsx)("button",{type:"submit",children:"Search"})]})}})})})),Y=Object(u.c)(Object(i.b)((function(e){return{search:e.search}}),{search:function(e){return function(){var t=Object(O.a)(j.a.mark((function t(n){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(v(!0)),t.next=3,m(e);case 3:c=t.sent,n(v(!1)),c.error?n(B()):n(x(c));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))(R),V=(n(72),a.a.memo((function(e){var t=e.geolocation;function n(e){switch(typeof e){case"string":return Object(G.jsxs)("div",{className:"string",children:[Object(G.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEvSURBVHgB7ZY9TwJBEIbfWS2s8Cot1ORoNUZILCy1tLMxlkZ/AVTa0tnJLxBttNACf4AJjYmFCZfw0fIRGmg46ChgmV0SEroh3F0C4Ukuc5PczHO3m9sMgdG1RxcbOgeNBKcOgoKQx5DSFH+qk5UoXQxUMIuPESUVSD+HKIHtzavFIlwhbHhLFKLBiUqEtWgFRfVWb3rv9wczeWCidOYHycscvGrb5hc373x9iGrFIvPm2Zd/OLEtJA538fpVYmEH52cHonqxKJP9tTF1f2rj22fZxtvrY1G9WORVJst1crRjY+GvaaO7ty2qF4u6vPGLsCl9ML4f4/NXT3OX83kg3XjQiID1ybAcIh8RYGYGD2EzwrfiuesO4X4V96aUMsOdmbv4X8wjWHzuWTC9jWMMMSpTc3syR4IAAAAASUVORK5CYII=",alt:"string"}),e]});case"number":return Object(G.jsxs)("div",{className:"number",children:[Object(G.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG/SURBVHgBzVY9SMNQEL68JqnFUotDEexgO1mh0E7WyUXdRLt2Ky5OpY7O4uQgzg5ubqKCmwhu/iyKgp2sHVpoK0KoFjFJG9+9mtIuzQttgh+E3IV3973v7h4vAlBMFU5nRK90BAYkqBuEkUE401V1qxpLlwRGIksPoyXog6KrWpKIsrzvIAkiiNUiAMY6OA3aEgLuIOgWEdgm0su1PrvdaHLF2SJSX4pQXdzo+h+bu/B9ecsVa4tIK7yBFIv2+EWQYxGuWHtEVJE01yH6uXtmb9O3ghB+vTAGLcAeKDuHneT3T0ACfpBmo9Cq1JiisaUF8K2kwLecGpSGT5EYDrGnVa6z0qGNGzBtEhi3zGGpyAQOQn01B3Q9898z20yFP7vGE87fo1al3jcI2KNe3wqi1YLmyRUtWY0lbje+oHFw3D07+A37xKPKksigyXXaG/Vv4tDGQfBMh5jN0x8uInO3lcQNTOQy4E3F2RQiweReHnjB1SNUY3w2u2cGy+Wdj4MdcBGZg2CWiZXRxiAguMd7WPzfa2IYIgVcAKH3+SM4DQPOie7RsuCsKoVy5Ek1ki7pREvizx6MFgpVco25keMXzgKzssFMeQUAAAAASUVORK5CYII=",alt:"string"}),e]});case"boolean":return Object(G.jsxs)("div",{className:"boolean",children:[Object(G.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGFSURBVHgB7Za/S0JRFMe/9+VmwZuMNh3aCtStqaitlmprSsHm9A+IGmxWg7ZE22pKA9uymtxKaGvJLWh6kI56O+eC4TN9r3w/IOgDb3jnXu73nh/3cASIq4YMTwElKRGFgA6XEAKVrkRma0m0BItoEk9uCpjVYPQkYgFSzdGvNyKMhM7R0oTEJjxGCkQ1+AF55Y8Q4Ujo+rKAve2I+l5fmpZ7A7Ch82Gg3TYwOxc22eu1Mor5NFbXE1iMLyM4ozsT4ltfFI9QbUiT/bZ2jhCJ7x+U8BMchS405KUVgm4qRy28v7VU7AfhMO2kDr/ZF+IrOD69w0RCHcoLJ5hDVL8pq4PYA84F28/yGbUvlc4pW2Q+aik0NkfBaV3d9Pnx4evWgx7wOrUXk92Kv/GO/oUs6b94rj4uec+E1jZ2VVmfZBMoZJOYlLHvaBj2hkvarqeNw7bX9flNuxmFj8UgYcAHNBpOmvAYmoKqWhdIeuoVny2Q1ni46wnEaBqqwE1IgMr5ns9mjU+3voA5+9ZhxwAAAABJRU5ErkJggg==",alt:"string"}),e.toString()]});default:return Object(G.jsx)("div",{className:"outher",children:"Unsupported type of data"})}}return Object(G.jsx)(G.Fragment,{children:Object(G.jsx)("div",{className:"Output",children:t.isFetching?"Loading...":t.error?t.error:t.locationData?Object.keys(t.locationData).map((function(e,c){return Object(G.jsxs)("li",{children:[e,": ",n(t.locationData[e])]},c)})):'Enter IP and press "Search" to get geplocation data'})})}))),N=Object(u.c)(Object(i.b)((function(e){return{geolocation:e.geolocation}}),null))(V),K=function(){return Object(G.jsxs)("div",{className:"App",children:[Object(G.jsx)("div",{className:"App-Bg"}),Object(G.jsxs)("div",{className:"page",children:[Object(G.jsx)("header",{children:"Find My IP"}),Object(G.jsx)(Y,{}),Object(G.jsx)(N,{})]})]})};A.a.render(Object(G.jsx)(o.a,{children:Object(G.jsx)(i.a,{store:C,children:Object(G.jsx)(K,{})})}),document.getElementById("root")),s()}},[[76,1,2]]]);
//# sourceMappingURL=main.3721f9eb.chunk.js.map