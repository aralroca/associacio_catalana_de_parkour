(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=u,t.useAmp=function(){return u(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("zx1J"))&&r.__esModule?r:{default:r},o=n("lwAK");function u(){var{ampFirst:e=!1,hybrid:t=!1,hasQuery:n=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e||t&&n}},"/a9y":function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.default=void 0;var a=r(n("zx1J")),o=r(n("8Kt/")),u={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function l(e){var{res:t,err:n}=e;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}class i extends a.default.Component{render(){var{statusCode:e}=this.props,t=this.props.title||u[e]||"An unexpected error has occurred";return a.default.createElement("div",{style:d.error},a.default.createElement(o.default,null,a.default.createElement("title",null,e,": ",t)),a.default.createElement("div",null,a.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?a.default.createElement("h1",{style:d.h1},e):null,a.default.createElement("div",{style:d.desc},a.default.createElement("h2",{style:d.h2},t,"."))))}}t.default=i,i.displayName="ErrorPage",i.getInitialProps=l,i.origGetInitialProps=l;var d={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=d,t.default=void 0;var r=i(n("zx1J")),a=i(n("Xuae")),o=n("lwAK"),u=n("FYa8"),l=n("/0+H");function i(e){return e&&e.__esModule?e:{default:e}}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function s(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((e,t)=>"string"===typeof t||"number"===typeof t?e:e.concat(t),[])):e.concat(t)}var c=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((e,t)=>{var n=r.default.Children.toArray(t.props.children);return e.concat(n)},[]).reduce(s,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return a=>{var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var u=a.key.slice(a.key.indexOf("$")+1);e.has(u)?o=!1:e.add(u)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var l=0,i=c.length;l<i;l++){var d=c[l];if(a.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?o=!1:n.add(d);else{var s=a.props[d],p=r[d]||new Set;p.has(s)?o=!1:(p.add(s),r[d]=p)}}}return o}}()).reverse().map((e,t)=>{var n=e.key||t;return r.default.cloneElement(e,{key:n})})}var f=(0,a.default)();function m(e){var{children:t}=e;return(r.default.createElement(o.AmpStateContext.Consumer,null,e=>r.default.createElement(u.HeadManagerContext.Consumer,null,n=>r.default.createElement(f,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:(0,l.isInAmpMode)(e)},t))))}m.rewind=f.rewind;var h=m;t.default=h},IXjt:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var r=n("zx1J"),a=n("eomm"),o=n.n(a),u=n("nOHt"),l=r.default.createElement;function i(){var e=Object(u.useRouter)();if(Array.isArray(e.query.path)){if("ca"===e.query.path[0])return l(o.a,{statusCode:"404"});e.replace("/ca/".concat(e.query.path.join("/")))}return null}},Xuae:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=n("zx1J");t.default=()=>{var e,t=new Set;function n(n){e=n.props.reduceComponentsToState([...t],n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return class extends r.Component{static rewind(){var n=e;return e=void 0,t.clear(),n}constructor(e){super(e)}componentDidMount(){t.add(this),n(this)}componentDidUpdate(){n(this)}componentWillUnmount(){t.delete(this),n(this)}render(){return null}}}},eomm:function(e,t,n){e.exports=n("/a9y")},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("zx1J"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},naum:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[...path]",function(){return n("IXjt")}])}},[["naum",0,1]]]);