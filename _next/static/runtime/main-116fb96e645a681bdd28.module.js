(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"1ccW":function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},r.apply(this,arguments)}e.exports=r},BMP1:function(e,t,r){var n=r("7KCV")(r("IKlv"));window.next=n,(0,n.default)().catch(e=>{console.error(e.message+"\n"+e.stack)})},DqTX:function(e,t,r){t.__esModule=!0,t.default=function(){var e=null;return t=>{var r=e=Promise.resolve().then(()=>{if(r===e){e=null;var n={};t.forEach(e=>{var t=n[e.type]||[];t.push(e),n[e.type]=t});var o=n.title?n.title[0]:null,i="";if(o){var{children:s}=o.props;i="string"===typeof s?s:s.join("")}i!==document.title&&(document.title=i),["meta","base","link","style","script"].forEach(e=>{!function(e,t){var r=document.getElementsByTagName("head")[0],n=r.querySelector("meta[name=next-head-count]");0;for(var o=Number(n.content),i=[],s=0,c=n.previousElementSibling;s<o;s++,c=c.previousElementSibling)c.tagName.toLowerCase()===e&&i.push(c);var p=t.map(a).filter(e=>{for(var t=0,r=i.length;t<r;t++){if(i[t].isEqualNode(e))return i.splice(t,1),!1}return!0});i.forEach(e=>e.parentNode.removeChild(e)),p.forEach(e=>r.insertBefore(e,n)),n.content=(o-i.length+p.length).toString()}(e,n[e]||[])})}})}};var n={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"};function a(e){var{type:t,props:r}=e,a=document.createElement(t);for(var o in r)if(r.hasOwnProperty(o)&&"children"!==o&&"dangerouslySetInnerHTML"!==o&&void 0!==r[o]){var i=n[o]||o.toLowerCase();a.setAttribute(i,r[o])}var{children:s,dangerouslySetInnerHTML:c}=r;return c?a.innerHTML=c.__html||"":s&&(a.textContent="string"===typeof s?s:s.join("")),a}},IKlv:function(e,t,r){var n=r("7KCV"),a=r("AroE");t.__esModule=!0,t.render=F,t.renderError=X,t.default=t.emitter=t.router=t.version=void 0;var o=a(r("1ccW")),i=(a(r("7KCV")),a(r("zx1J"))),s=a(r("o7G4")),c=a(r("DqTX")),p=r("nOHt"),u=a(r("dZ6Y")),d=r("g/15"),l=a(r("zmvN")),f=n(r("yLiY")),m=r("FYa8"),h=r("qOIg"),v=r("s4NR"),g=r("/jkW"),y=r("bGXG");"finally"in Promise.prototype||(Promise.prototype.finally=r("Z577"));var E=JSON.parse(document.getElementById("__NEXT_DATA__").textContent);window.__NEXT_DATA__=E;t.version="9.3.4";var{props:_,err:w,page:b,query:P,buildId:R,assetPrefix:C,runtimeConfig:S,dynamicIds:T,isFallback:x}=E,N=C||"";r.p=N+"/_next/",f.setConfig({serverRuntimeConfig:{},publicRuntimeConfig:S||{}});var I=(0,d.getURL)(),A=new l.default(R,N),j=e=>{var[t,r]=e;return A.registerPage(t,r)};window.__NEXT_P&&window.__NEXT_P.map(j),window.__NEXT_P=[],window.__NEXT_P.push=j;var M,D,L,k,B,O,q=(0,c.default)(),H=document.getElementById("__next");t.router=D;class G extends i.default.Component{componentDidCatch(e,t){this.props.fn(e,t)}componentDidMount(){this.scrollToHash(),D.isSsr&&(x||E.nextExport&&((0,g.isDynamicRoute)(D.pathname)||location.search)||_.__N_SSG&&location.search)&&D.replace(D.pathname+"?"+(0,v.stringify)((0,o.default)({},D.query,{},(0,v.parse)(location.search.substr(1)))),I,{_h:1,shallow:!x})}componentDidUpdate(){this.scrollToHash()}scrollToHash(){var{hash:e}=location;if(e=e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout(()=>t.scrollIntoView(),0)}}render(){return this.props.children}}var U=(0,u.default)();t.emitter=U;async function F(e){if(e.err)await X(e);else try{await Z(e)}catch(w){await X((0,o.default)({},e,{err:w}))}}async function X(e){var{App:t,err:r}=e;console.error(r),({page:L}=await A.loadPage("/_error"));var n=V(t),a={Component:L,AppTree:n,router:D,ctx:{err:r,pathname:b,query:P,asPath:I,AppTree:n}},i=e.props?e.props:await(0,d.loadGetInitialProps)(t,a);await Z((0,o.default)({},e,{err:r,Component:L,props:i}))}t.default=async function(e){var{webpackHMR:r}=void 0===e?{}:e;var{page:n,mod:a}=await A.loadPageScript("/_app");B=n,a&&a.unstable_onPerformanceData&&(O=function(e){var{name:t,startTime:r,value:n,duration:o,entryType:i}=e;a.unstable_onPerformanceData({name:t,startTime:r,value:n,duration:o,entryType:i})});var o=w;try{({page:k}=await A.loadPage(b))}catch(i){o=i}return window.__NEXT_PRELOADREADY&&await window.__NEXT_PRELOADREADY(T),t.router=D=(0,p.createRouter)(b,P,I,{initialProps:_,pageLoader:A,App:B,Component:k,wrapApp:V,err:o,isFallback:x,subscription:(e,t)=>{var{Component:r,props:n,err:a}=e;F({App:t,Component:r,props:n,err:a})}}),F({App:B,Component:k,props:_,err:o}),U};var Y="function"===typeof s.default.hydrate;function $(){d.ST&&(performance.mark("afterHydrate"),performance.measure("Next.js-before-hydration","navigationStart","beforeRender"),performance.measure("Next.js-hydration","beforeRender","afterHydrate"),O&&(performance.getEntriesByName("Next.js-hydration").forEach(O),performance.getEntriesByName("beforeRender").forEach(O)),W())}function K(){if(d.ST){performance.mark("afterRender");var e=performance.getEntriesByName("routeChange","mark");e.length&&(performance.measure("Next.js-route-change-to-render",e[0].name,"beforeRender"),performance.measure("Next.js-render","beforeRender","afterRender"),O&&(performance.getEntriesByName("Next.js-render").forEach(O),performance.getEntriesByName("Next.js-route-change-to-render").forEach(O)),W())}}function W(){["beforeRender","afterHydrate","afterRender","routeChange"].forEach(e=>performance.clearMarks(e)),["Next.js-before-hydration","Next.js-hydration","Next.js-route-change-to-render","Next.js-render"].forEach(e=>performance.clearMeasures(e))}function J(e){var{children:t}=e;return i.default.createElement(G,{fn:e=>X({App:B,err:e}).catch(e=>console.error("Error rendering page: ",e))},i.default.createElement(h.RouterContext.Provider,{value:(0,p.makePublicRouterInstance)(D)},i.default.createElement(m.HeadManagerContext.Provider,{value:q},t)))}var V=e=>t=>{var r=(0,o.default)({},t,{Component:k,err:w,router:D});return i.default.createElement(J,null,i.default.createElement(e,r))};async function Z(e){var{App:t,Component:r,props:n,err:a}=e;if(!n&&r&&r!==L&&M.Component===L){var{pathname:c,query:p,asPath:u}=D,l=V(t),f={router:D,AppTree:l,Component:L,ctx:{err:a,pathname:c,query:p,asPath:u,AppTree:l}};n=await(0,d.loadGetInitialProps)(t,f)}r=r||M.Component,n=n||M.props;var m=(0,o.default)({},n,{Component:r,err:a,router:D});M=m,U.emit("before-reactdom-render",{Component:r,ErrorComponent:L,appProps:m}),function(e,t){if(d.ST&&performance.mark("beforeRender"),Y?(s.default.hydrate(e,t,$),Y=!1):s.default.render(e,t,K),O&&d.ST)try{(0,y.observeLayoutShift)(O),(0,y.observeLargestContentfulPaint)(O),(0,y.observePaint)(O)}catch(r){window.addEventListener("load",()=>{performance.getEntriesByType("paint").forEach(O)})}}(i.default.createElement(J,null,i.default.createElement(t,m)),H),U.emit("after-reactdom-render",{Component:r,ErrorComponent:L,appProps:m})}},Z577:function(e,t){Promise.prototype.finally=function(e){if("function"!=typeof e)return this.then(e,e);var t=this.constructor||Promise;return this.then((function(r){return t.resolve(e()).then((function(){return r}))}),(function(r){return t.resolve(e()).then((function(){throw r}))}))}},bGXG:function(e,t,r){function n(e){return!(!self.PerformanceObserver||!PerformanceObserver.supportedEntryTypes)&&PerformanceObserver.supportedEntryTypes.includes(e)}t.__esModule=!0,t.observeLayoutShift=function(e){if(n("layout-shift")){var t=0,r=new PerformanceObserver(e=>{for(var r of e.getEntries())r.hadRecentInput||(t+=r.value)});r.observe({type:"layout-shift",buffered:!0}),document.addEventListener("visibilitychange",(function n(){"hidden"===document.visibilityState&&(r.takeRecords(),r.disconnect(),document.removeEventListener("visibilitychange",n,!0),e({name:"cumulative-layout-shift",value:t}))}),!0)}},t.observeLargestContentfulPaint=function(e){if(n("largest-contentful-paint")){var t;new PerformanceObserver(e=>{var r=e.getEntries(),n=r[r.length-1];t=n.renderTime||n.loadTime}).observe({type:"largest-contentful-paint",buffered:!0}),document.addEventListener("visibilitychange",(function r(){t&&"hidden"===document.visibilityState&&(document.removeEventListener("visibilitychange",r,!0),e({name:"largest-contentful-paint",value:t}))}),!0)}},t.observePaint=function(e){new PerformanceObserver(t=>{t.getEntries().forEach(e)}).observe({type:"paint",buffered:!0})}},yLiY:function(e,t,r){var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=()=>n,t.setConfig=function(e){n=e}},zmvN:function(e,t,r){var n=r("AroE");t.__esModule=!0,t.default=void 0;var a=r("QmWs"),o=n(r("dZ6Y")),i=r("/jkW"),s=r("gguc"),c=r("YTqd");function p(e,t){try{return document.createElement("link").relList.supports(e)}catch(r){}}var u=p("preload")&&!p("prefetch")?"preload":"prefetch",d="noModule"in document.createElement("script");function l(e){if("/"!==e[0])throw new Error('Route name should start with a "/", got "'+e+'"');return"/"===(e=e.replace(/\/index$/,"/"))?e:e.replace(/\/$/,"")}function f(e,t,r){return new Promise((n,a,o)=>{(o=document.createElement("link")).crossOrigin="anonymous",o.href=e,o.rel=t,r&&(o.as=r),o.onload=n,o.onerror=a,document.head.appendChild(o)})}t.default=class{constructor(e,t){this.buildId=e,this.assetPrefix=t,this.pageCache={},this.pageRegisterEvents=(0,o.default)(),this.loadingRoutes={},this.promisedBuildManifest=new Promise(e=>{window.__BUILD_MANIFEST?e(window.__BUILD_MANIFEST):window.__BUILD_MANIFEST_CB=()=>{e(window.__BUILD_MANIFEST)}}),this.promisedSsgManifest=new Promise(e=>{window.__SSG_MANIFEST?e(window.__SSG_MANIFEST):window.__SSG_MANIFEST_CB=()=>{e(window.__SSG_MANIFEST)}})}getDependencies(e){return this.promisedBuildManifest.then(t=>t[e]&&t[e].map(e=>this.assetPrefix+"/_next/"+encodeURI(e))||[])}getDataHref(e,t){var r,n=e=>this.assetPrefix+"/_next/data/"+this.buildId+("/"===e?"/index":e)+".json",{pathname:o,query:p}=(0,a.parse)(e,!0),{pathname:u}=(0,a.parse)(t),d=l(o),f=(0,i.isDynamicRoute)(d);if(f){var m=(0,c.getRouteRegex)(d),h=m.groups,v=(0,s.getRouteMatcher)(m)(u)||p;r=d,Object.keys(h).every(e=>{var t=v[e],n=h[e].repeat;return n&&!Array.isArray(t)&&(t=[t]),e in v&&(r=r.replace("["+(n?"...":"")+e+"]",n?t.map(encodeURIComponent).join("/"):encodeURIComponent(t)))})||(r="")}return f?r&&n(r):n(d)}prefetchData(e,t){var{pathname:r}=(0,a.parse)(e,!0),n=l(r);return this.promisedSsgManifest.then((r,a)=>r.has(n)&&(a=this.getDataHref(e,t))&&!document.querySelector('link[rel="'+u+'"][href^="'+a+'"]')&&f(a,u,"fetch"))}loadPage(e){return this.loadPageScript(e)}loadPageScript(e){return e=l(e),new Promise((t,r)=>{var n=a=>{var{error:o,page:i,mod:s}=a;this.pageRegisterEvents.off(e,n),delete this.loadingRoutes[e],o?r(o):t({page:i,mod:s})},a=this.pageCache[e];if(a){var{error:o,page:i,mod:s}=a;o?r(o):t({page:i,mod:s})}else this.pageRegisterEvents.on(e,n),document.querySelector('script[data-next-page="'+e+'"]')||this.loadingRoutes[e]||(this.loadingRoutes[e]=!0,this.getDependencies(e).then(t=>{t.forEach(t=>{/\.js$/.test(t)&&!document.querySelector('script[src^="'+t+'"]')&&this.loadScript(t,e,!1),/\.css$/.test(t)&&!document.querySelector('link[rel=stylesheet][href^="'+t+'"]')&&f(t,"stylesheet").catch(()=>{})}),this.loadRoute(e)}))})}loadRoute(e){var t="/"===(e=l(e))?"/index.js":e+".js",r=this.assetPrefix+"/_next/static/"+encodeURIComponent(this.buildId)+"/pages"+encodeURI(t);this.loadScript(r,e,!0)}loadScript(e,t,r){var n=document.createElement("script");d&&(n.type="module",r&&(e=e.replace(/\.js$/,".module.js"))),n.crossOrigin="anonymous",n.src=e,n.onerror=()=>{var r=new Error("Error loading script "+e);r.code="PAGE_LOAD_ERROR",this.pageRegisterEvents.emit(t,{error:r})},document.body.appendChild(n)}registerPage(e,t){(()=>{try{var r=t(),n={page:r.default||r,mod:r};this.pageCache[e]=n,this.pageRegisterEvents.emit(e,n)}catch(a){this.pageCache[e]={error:a},this.pageRegisterEvents.emit(e,{error:a})}})()}prefetch(e,t){var r,n;if((r=navigator.connection)&&(r.saveData||/2g/.test(r.effectiveType)))return Promise.resolve();if(t)n=e;else{var a=("/"===(e=l(e))?"/index":e)+".js";d&&(a=a.replace(/\.js$/,".module.js")),n=this.assetPrefix+"/_next/static/"+encodeURIComponent(this.buildId)+"/pages"+encodeURI(a)}return Promise.all(document.querySelector('link[rel="'+u+'"][href^="'+n+'"], script[data-next-page="'+e+'"]')?[]:[f(n,u,n.match(/\.css$/)?"style":"script"),!t&&this.getDependencies(e).then(e=>Promise.all(e.map(e=>this.prefetch(e,!0))))]).then(()=>{},()=>{})}}}},[["BMP1",0,1]]]);