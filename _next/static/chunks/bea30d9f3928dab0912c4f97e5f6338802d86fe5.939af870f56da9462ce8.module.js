(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"/0+H":function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r("zx1J")),i=r("lwAK");function s(){var{ampFirst:e=!1,hybrid:t=!1,hasQuery:r=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e||t&&r}t.isInAmpMode=s,t.useAmp=function(){return s(o.default.useContext(i.AmpStateContext))}},"284h":function(e,t,r){var n=r("cDf5");function o(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var a=i?Object.getOwnPropertyDescriptor(e,s):null;a&&(a.get||a.set)?Object.defineProperty(r,s,a):r[s]=e[s]}return r.default=e,t&&t.set(e,r),r}},"3niX":function(e,t,r){t.__esModule=!0,t.flush=function(){var e=i.cssRules();return i.flush(),e},t.default=void 0;var n,o=r("zx1J");var i=new(((n=r("SevZ"))&&n.__esModule?n:{default:n}).default),s=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).prevProps={},r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.dynamic=function(e){return e.map((function(e){var t=e[0],r=e[1];return i.computeId(t,r)})).join(" ")};var o=n.prototype;return o.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},o.componentWillUnmount=function(){i.remove(this.props)},o.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&i.remove(this.prevProps),i.add(this.props),this.prevProps=this.props),null},n}(o.Component);t.default=s},"8Kt/":function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r("zx1J")),i=n(r("Xuae")),s=r("lwAK"),a=r("FYa8"),u=r("/0+H");function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"===typeof t||"number"===typeof t?e:e.concat(t),[])):e.concat(t)}t.defaultHead=c;var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((e,t)=>{var r=o.default.Children.toArray(t.props.children);return e.concat(r)},[]).reduce(l,[]).reverse().concat(c(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return o=>{var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var s=o.key.slice(o.key.indexOf("$")+1);e.has(s)?i=!1:e.add(s)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var a=0,u=f.length;a<u;a++){var c=f[a];if(o.props.hasOwnProperty(c))if("charSet"===c)r.has(c)?i=!1:r.add(c);else{var l=o.props[c],p=n[c]||new Set;p.has(l)?i=!1:(p.add(l),n[c]=p)}}}return i}}()).reverse().map((e,t)=>{var r=e.key||t;return o.default.cloneElement(e,{key:r})})}var d=i.default();function h(e){var{children:t}=e;return o.default.createElement(s.AmpStateContext.Consumer,null,e=>o.default.createElement(a.HeadManagerContext.Consumer,null,r=>o.default.createElement(d,{reduceComponentsToState:p,handleStateChange:r,inAmpMode:u.isInAmpMode(e)},t)))}h.rewind=d.rewind,t.default=h},"8oxB":function(e,t){var r,n,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(r===setTimeout)return setTimeout(e,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:i}catch(e){r=i}try{n="function"===typeof clearTimeout?clearTimeout:s}catch(e){n=s}}();var u,c=[],l=!1,f=-1;function p(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&d())}function d(){if(!l){var e=a(p);l=!0;for(var t=c.length;t;){for(u=c,c=[];++f<t;)u&&u[f].run();f=-1,t=c.length}u=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new h(e,t)),1!==c.length||l||a(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"9kyW":function(e,t,r){e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}},BIX1:function(e,t,r){var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return(0,o.useContext)(i.default)};var o=r("zx1J"),i=n(r("TdOP"))},CafY:function(e,t,r){r.d(t,"a",(function(){return k}));var n=r("h4VS"),o=r("MX0m"),i=r.n(o),s=r("zx1J"),a=r("8Kt/"),u=r.n(a),c=r("BIX1"),l=r.n(c),f=r("YFqc"),p=r.n(f),d=r("nOHt"),h=s.default.createElement;function m(){var e=Object(n.a)(["common:contact"]);return m=function(){return e},e}function v(){var e=Object(n.a)(["common:what-is-parkour"]);return v=function(){return e},e}function y(){var e=Object(n.a)(["common:about-us"]);return y=function(){return e},e}function _(){var e=Object(n.a)(["common:home"]);return _=function(){return e},e}function g(){var{t:e,lang:t}=l()(),{pathname:r}=Object(d.useRouter)(),{0:n,1:o}=Object(s.useState)(!1),a=[{label:e(_()),href:"/".concat(t)},{label:e(y()),href:"/".concat(t,"/about-us")},{label:e(v()),href:"/".concat(t,"/what-is-parkour")},{label:e(m()),href:"/".concat(t,"/contact")}];return h(s.default.Fragment,null,h("header",{className:"jsx-4250501996"},h("img",{onClick:()=>o(e=>!e),width:30,alt:"menu",src:"/images/menu.svg",className:"jsx-4250501996 mobile-menu"}),h("nav",{className:"jsx-4250501996 "+"menu ".concat(n?"open":"")},h("ul",{className:"jsx-4250501996"},a.map(e=>{var{label:t,href:n}=e;return h("li",{key:t,className:"jsx-4250501996 "+((r===n?"active":"")||"")},h(p.a,{href:n},h("a",{onClick:()=>o(!1),className:"jsx-4250501996"},t)))})))),h(i.a,{id:"4250501996"},["header.jsx-4250501996{background-color:#99294d;top:0;left:0;z-index:1;width:100vw;height:66px;position:fixed;box-shadow:0 5px 5px -5px rgba(0,0,0,0.2);}",".menu.jsx-4250501996 ul.jsx-4250501996{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding:0;margin:0;list-style:none;}",".menu.jsx-4250501996 a.jsx-4250501996{display:block;padding:1.5em;background-color:#99294d;-webkit-transition-duration:0.2s;transition-duration:0.2s;-webkit-text-decoration:none;text-decoration:none;color:#fafafa;}",".menu.jsx-4250501996 a.jsx-4250501996:hover,.menu.jsx-4250501996 li.active.jsx-4250501996 a.jsx-4250501996{background-color:#ad4264;}",".mobile-menu.jsx-4250501996{display:none;position:absolute;right:10px;cursor:pointer;top:10px;}","@media (max-width:940px){.menu.jsx-4250501996 ul.jsx-4250501996{display:none;overflow:auto;margin-top:66px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.mobile-menu.jsx-4250501996{display:block;}.menu.open.jsx-4250501996 ul.jsx-4250501996{display:block;}.menu.jsx-4250501996 a.jsx-4250501996{padding:1.2em;background-color:#212121;border:1px solid #312121;}.menu.jsx-4250501996 a.jsx-4250501996:hover,.menu.jsx-4250501996 li.active.jsx-4250501996 a.jsx-4250501996{background-color:#312121;}}"]))}var b=r("dUq6"),x=s.default.createElement;function w(){var e=Object(n.a)(["common:change-lang"]);return w=function(){return e},e}function S(){var{t:e,lang:t}=l()(),{pathname:r}=Object(d.useRouter)();return x(s.default.Fragment,null,x("footer",{className:"jsx-3605414633"},e(w()),b.allLanguages.filter(e=>e!==t).map(e=>{var n="/"===r?"/".concat(e):r.replace("/".concat(t),"/".concat(e));return x(p.a,{key:e,href:n},x("a",{className:"jsx-3605414633"},e.toUpperCase()))})),x(i.a,{id:"3605414633"},["footer.jsx-3605414633{width:calc(100vw - 30px);padding:20px;background-color:#212121;margin:50px 0 -10px -10px;color:white;text-align:right;}","footer.jsx-3605414633 a.jsx-3605414633{color:white;font-weight:bold;-webkit-text-decoration:none;text-decoration:none;margin:0 5px;}"]))}var j=s.default.createElement;function O(){var e=Object(n.a)(["common:title"]);return O=function(){return e},e}function k(e){var{children:t}=e,{t:r}=l()();return j(s.default.Fragment,null,j(u.a,null,j("title",{className:"jsx-1509788238"},r(O())),j("link",{rel:"icon",href:"/favicon.ico",className:"jsx-1509788238"})),j(g,null),j("main",{className:"jsx-1509788238"},t),j(i.a,{id:"1230862436"},["*{padding:0;margin:0;}","p,h1,h2{margin:20px;}","h1{padding-top:20px;border-bottom:1px solid #111;}"]),j(i.a,{id:"4107368547"},["main.jsx-1509788238{min-height:80vh;max-width:920px;margin:70px auto 0;}"]),j(S,null))}},FYa8:function(e,t,r){var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r("zx1J"));t.HeadManagerContext=o.createContext(null)},J4zp:function(e,t,r){var n=r("wTVA"),o=r("m0LI"),i=r("wkBT");e.exports=function(e,t){return n(e)||o(e,t)||i()}},MA9B:function(e,t,r){var n=r("284h"),o=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.lang,r=e.namespaces,n=void 0===r?{}:r,o=e.children,v=e.isStaticMode,y=function(e){for(var t,r=1;r<arguments.length;r++)t=null==arguments[r]?{}:arguments[r],r%2?f(Object(t),!0).forEach((function(r){(0,s.default)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}));return e}({},(0,a.useContext)(p),{},n);return(0,c.setInternals)({lang:t,isStaticMode:v}),l(u.default.Provider,{value:{lang:t,t:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=1<arguments.length?arguments[1]:void 0,r=Array.isArray(e)?e[0]:e,n=r.split(":"),o=(0,i.default)(n,2),s=o[0],a=o[1],u=y[s]||{},c=h(u,a,t),l=d(u,c);return m(l,t)||r}}},l(p.Provider,{value:y},o))};var i=o(r("J4zp")),s=o(r("lSNA")),a=n(r("zx1J")),u=o(r("TdOP")),c=r("tQgH"),l=a.default.createElement;function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var p=(0,a.createContext)({});function d(e){var t=(1<arguments.length&&void 0!==arguments[1]?arguments[1]:"").split(".").reduce((function(e,t){return e[t]}),e);return"string"==typeof t?t:void 0}function h(e,t,r){if(!r||"number"!=typeof r.count)return t;var n="".concat(t,"_").concat(r.count);if(void 0!==d(e,n))return n;var o="".concat(t,"_plural");return 1<r.count&&void 0!==d(e,o)?o:t}function m(e,t){return e&&t?Object.keys(t).reduce((function(e,r){var n=new RegExp("{{\\s*".concat(r,"\\s*}}"),"gm");return e=e.replace(n,"".concat(t[r]))}),e):e||""}},MX0m:function(e,t,r){e.exports=r("3niX")},SevZ:function(e,t,r){t.__esModule=!0,t.default=void 0;var n=i(r("9kyW")),o=i(r("bVZc"));function i(e){return e&&e.__esModule?e:{default:e}}var s=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,n=void 0===r?null:r,i=t.optimizeForSpeed,s=void 0!==i&&i,a=t.isBrowser,u=void 0===a?"undefined"!==typeof window:a;this._sheet=n||new o.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),n&&"boolean"===typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=u,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var r=this.getIdAndRules(e),n=r.styleId,o=r.rules;if(n in this._instancesCounts)this._instancesCounts[n]+=1;else{var i=o.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[n]=i,this._instancesCounts[n]=1}},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return r[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,r){if(!r)return"jsx-"+t;var o=String(r),i=t+o;return e[i]||(e[i]="jsx-"+(0,n.default)(t+"-"+o)),e[i]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(r,n){this._isBrowser||(n=n.replace(/\/style/gi,"\\/style"));var o=r+n;return t[o]||(t[o]=n.replace(e,r)),t[o]}},t.getIdAndRules=function(e){var t=this,r=e.children,n=e.dynamic,o=e.id;if(n){var i=this.computeId(o,n);return{styleId:i,rules:Array.isArray(r)?r.map((function(e){return t.computeSelector(i,e)})):[this.computeSelector(i,r)]}}return{styleId:this.computeId(o),rules:Array.isArray(r)?r:[r]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=s},TdOP:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r("zx1J").createContext)({t:function(e){return Array.isArray(e)?e[0]:e},lang:""});t.default=n},TqRt:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},Xuae:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r("zx1J");t.default=()=>{var e,t=new Set;function r(r){e=r.props.reduceComponentsToState([...t],r.props),r.props.handleStateChange&&r.props.handleStateChange(e)}return class extends n.Component{static rewind(){var r=e;return e=void 0,t.clear(),r}constructor(e){super(e)}componentDidMount(){t.add(this),r(this)}componentDidUpdate(){r(this)}componentWillUnmount(){t.delete(this),r(this)}render(){return null}}}},YFqc:function(e,t,r){e.exports=r("cTJO")},bVZc:function(e,t,r){(function(e){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}t.__esModule=!0,t.default=void 0;var n="undefined"!==typeof e&&e.env&&!0,o=function(e){return"[object String]"===Object.prototype.toString.call(e)},i=function(){function e(e){var t=void 0===e?{}:e,r=t.name,i=void 0===r?"stylesheet":r,a=t.optimizeForSpeed,u=void 0===a?n:a,c=t.isBrowser,l=void 0===c?"undefined"!==typeof window:c;s(o(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",s("boolean"===typeof u,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=u,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var f=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=f?f.getAttribute("content"):null}var t,i,a,u=e.prototype;return u.setOptimizeForSpeed=function(e){s("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),s(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},u.isOptimizeForSpeed=function(){return this._optimizeForSpeed},u.inject=function(){var e=this;if(s(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(n||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"===typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},u.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},u.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},u.insertRule=function(e,t){if(s(o(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!==typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(a){return n||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},u.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var r=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(i){n||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var o=this._tags[e];s(o,"old rule at index `"+e+"` not found"),o.textContent=t}return e},u.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];s(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},u.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},u.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},u.makeStyleTag=function(e,t,r){t&&s(o(t),"makeStyleTag acceps only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return r?i.insertBefore(n,r):i.appendChild(n),n},t=e,(i=[{key:"length",get:function(){return this._rulesCount}}])&&r(t.prototype,i),a&&r(t,a),e}();function s(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=i}).call(this,r("8oxB"))},cDf5:function(e,t){function r(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r},cTJO:function(e,t,r){var n=r("AroE"),o=r("7KCV");t.__esModule=!0,t.default=void 0;var i,s=o(r("zx1J")),a=r("QmWs"),u=r("g/15"),c=n(r("nOHt"));function l(e){return e&&"object"===typeof e?(0,u.formatWithValidation)(e):e}var f=new Map,p=window.IntersectionObserver,d={};function h(){return i||(p?i=new p(e=>{e.forEach(e=>{if(f.has(e.target)){var t=f.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),f.delete(e.target),t())}})},{rootMargin:"200px"}):void 0)}var m=(e,t)=>{var r=h();return r?(r.observe(e),f.set(e,t),()=>{try{r.unobserve(e)}catch(t){console.error(t)}f.delete(e)}):()=>{}};class v extends s.Component{constructor(e){super(e),this.p=void 0,this.cleanUpListeners=()=>{},this.formatUrls=function(e){var t=null,r=null,n=null;return(o,i)=>{if(n&&o===t&&i===r)return n;var s=e(o,i);return t=o,r=i,n=s,s}}((e,t)=>({href:l(e),as:t?l(t):t})),this.linkClicked=e=>{var{nodeName:t,target:r}=e.currentTarget;if("A"!==t||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var{href:n,as:o}=this.formatUrls(this.props.href,this.props.as);if(function(e){var t=(0,a.parse)(e,!1,!0),r=(0,a.parse)((0,u.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(n)){var{pathname:i}=window.location;n=(0,a.resolve)(i,n),o=o?(0,a.resolve)(i,o):n,e.preventDefault();var{scroll:s}=this.props;null==s&&(s=o.indexOf("#")<0),c.default[this.props.replace?"replace":"push"](n,o,{shallow:this.props.shallow}).then(e=>{e&&s&&(window.scrollTo(0,0),document.body.focus())})}}},this.p=!1!==e.prefetch}componentWillUnmount(){this.cleanUpListeners()}getPaths(){var{pathname:e}=window.location,{href:t,as:r}=this.formatUrls(this.props.href,this.props.as),n=(0,a.resolve)(e,t);return[n,r?(0,a.resolve)(e,r):n]}handleRef(e){this.p&&p&&e&&e.tagName&&(this.cleanUpListeners(),d[this.getPaths().join("%")]||(this.cleanUpListeners=m(e,()=>{this.prefetch()})))}prefetch(e){if(this.p){var t=this.getPaths();c.default.prefetch(t[0],t[1],e).catch(e=>{0}),d[t.join("%")]=!0}}render(){var{children:e}=this.props,{href:t,as:r}=this.formatUrls(this.props.href,this.props.as);"string"===typeof e&&(e=s.default.createElement("a",null,e));var n=s.Children.only(e),o={ref:e=>{this.handleRef(e),n&&"object"===typeof n&&n.ref&&("function"===typeof n.ref?n.ref(e):"object"===typeof n.ref&&(n.ref.current=e))},onMouseEnter:e=>{n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),this.prefetch({priority:!0})},onClick:e=>{n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||this.linkClicked(e)}};return!this.props.passHref&&("a"!==n.type||"href"in n.props)||(o.href=r||t),s.default.cloneElement(n,o)}}var y=v;t.default=y},dUq6:function(e){e.exports=JSON.parse('{"allLanguages":["en","ca","es"],"defaultLanguage":"ca","currentPagesDir":"views","finalPagesDir":"pages","redirectToDefaultLang":true,"localesPath":"locales","pages":{"*":["common"],"/about-us":["about-us"],"/contact":["contact"],"/multimedia":[],"/participate":[],"/what-is-parkour":["what-is-parkour"]}}')},h4VS:function(e,t,r){function n(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}r.d(t,"a",(function(){return n}))},lSNA:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},lwAK:function(e,t,r){var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r("zx1J"));t.AmpStateContext=o.createContext({})},m0LI:function(e,t){e.exports=function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(n=(s=a.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(u){o=!0,i=u}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return r}}},rePB:function(e,t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},tQgH:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.setInternals=void 0;var n={};t.setInternals=function(e){n.lang=e.lang,n.isStaticMode=e.isStaticMode};var o=n;t.default=o},wTVA:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},wkBT:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}}}]);