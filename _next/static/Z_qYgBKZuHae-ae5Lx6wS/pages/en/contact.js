(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"2FT4":function(t,n,e){"use strict";var r=e("TqRt"),a=e("284h");Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t){var n=t.i18nKey,e=t.values,r=t.components,a=(0,i.default)().t;return(0,o.useMemo)((function(){var t=a(n,e);return r&&0!==r.length?function t(n){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],r=n.replace(f,"").split(s);if(1===r.length)return n;var a=[],i=r.shift();i&&a.push(i);var p,d=function(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,n){if(t){if("string"==typeof t)return l(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?l(t,n):void 0}}(t))){var n=0,e=function(){};return{s:e,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,a=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return t.done,t},e:function(t){a=!0,t},f:function t(){try{t||null==r.return||r.return()}finally{if(a)throw void 0}}}}(function t(n){if(!n.length)return[];var e=n.slice(0,4),r=(0,c.default)(e,4),a=r[0],o=r[1],i=r[2],u=r[3];return[[parseInt(a||i),o||"",u]].concat(t(n.slice(4,n.length)))}(r));try{for(d.s();!(p=d.n()).done;){var g=(0,c.default)(p.value,3),b=g[0],h=g[1],m=g[2],v=e[b]||u(o.Fragment,null);a.push((0,o.cloneElement)(v,{key:b},h?t(h,e):v.props.children)),m&&a.push(m)}}catch(n){d.e(n)}finally{d.f()}return a}(t,r):t}),[n,e,r])};var o=a(e("zx1J")),c=r(e("J4zp")),i=r(e("BIX1")),u=o.default.createElement;function l(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=Array(n);e<n;e++)r[e]=t[e];return r}var s=/<(\d+)>(.*?)<\/\1>|<(\d+)\/>/,f=/(?:\r\n|\r|\n)/g},"7ubu":function(t){t.exports=JSON.parse('{"about-us":"About us","change-lang":"Change language:","contact":"Contact","home":"Home","multimedia":"Multimedia","participate":"Participate","title":"Catalan Parkour Association","what-is-parkour":"What is parkour?"}')},TxQa:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/en/contact",function(){return e("bIxD")}])},USPk:function(t,n,e){"use strict";e.d(n,"a",(function(){return p}));var r=e("h4VS"),a=e("zx1J"),o=e("CafY"),c=e("BIX1"),i=e.n(c),u=e("2FT4"),l=e.n(u),s=a.default.createElement;function f(){var t=Object(r.a)(["contact:title"]);return f=function(){return t},t}function p(){var t=i()().t;return s(o.a,null,s("h1",null,t(f())),s("div",{className:"contact-box"},s("img",{alt:"contact",src:"/images/contact.svg"}),s(l.a,{i18nKey:"contact:description",components:[s("p",null),s("strong",null),s("a",{href:"mailto:consell@acpk.cat"})]})))}},awoA:function(t){t.exports=JSON.parse('{"title":"Contact with us","description":"<0>To contact the <1>Catalan Association of Parkour</1>, send an email to <2>consell@acpk.cat</2>.</0>"}')},bIxD:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return g}));var r=e("rePB"),a=e("MA9B"),o=e.n(a),c=e("zx1J"),i=e("USPk"),u=e("7ubu"),l=e("awoA"),s=c.default.createElement;function f(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function p(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?f(Object(e),!0).forEach((function(n){Object(r.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):f(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var d={common:u,contact:l};function g(t){return s(o.a,{lang:"en",namespaces:d,internals:{defaultLangRedirect:"lang-path",defaultLanguage:"ca",isStaticMode:!0}},s(i.a,t))}g=Object.assign(g,p({},i.a)),i.a&&i.a.getInitialProps&&(g.getInitialProps=function(t){return i.a.getInitialProps(p(p({},t),{},{lang:"en"}))})}},[["TxQa",0,1,2]]]);