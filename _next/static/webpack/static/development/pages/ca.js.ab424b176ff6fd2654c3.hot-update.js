webpackHotUpdate("static/development/pages/ca.js",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-translate/useTranslation */ "./node_modules/next-translate/useTranslation.js");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/aroca/acpk/components/header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["common:contact"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["common:multimedia"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["common:participate"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["common:what-is-parkour"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["common:about-us"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["common:home"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





function Header() {
  var _useTranslation = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5___default()(),
      t = _useTranslation.t,
      lang = _useTranslation.lang;

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])(),
      pathname = _useRouter.pathname;

  var menu = [{
    label: t(_templateObject()),
    href: "/".concat(lang)
  }, {
    label: t(_templateObject2()),
    href: "/".concat(lang, "/about-us")
  }, {
    label: t(_templateObject3()),
    href: "/".concat(lang, "/what-is-parkour")
  }, {
    label: t(_templateObject4()),
    href: "/".concat(lang, "/participate")
  }, {
    label: t(_templateObject5()),
    href: "/".concat(lang, "/multimedia")
  }, {
    label: t(_templateObject6()),
    href: "/".concat(lang, "/contact")
  }];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("header", {
    className: "jsx-1684024283",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("nav", {
    className: "jsx-1684024283" + " " + "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-1684024283",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, menu.map(function (_ref) {
    var label = _ref.label,
        href = _ref.href,
        children = _ref.children;
    return __jsx("li", {
      key: label,
      className: "jsx-1684024283" + " " + ((pathname === href ? 'active' : '') || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-1684024283",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, label)));
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1684024283",
    __self: this
  }, "header.jsx-1684024283{background-color:#99294d;color:white;top:0;left:0;width:100vw;position:fixed;box-shadow:0 5px 5px -5px rgba(0,0,0,0.2);}.menu.jsx-1684024283 ul.jsx-1684024283{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding:0;margin:0;list-style:none;}.menu.jsx-1684024283 a.jsx-1684024283{display:block;padding:1.5em;background-color:#99294d;-webkit-transition-duration:0.2s;transition-duration:0.2s;-webkit-text-decoration:none;text-decoration:none;color:#212121;}.menu.jsx-1684024283 a.jsx-1684024283:hover,.menu.jsx-1684024283 li.active.jsx-1684024283 a.jsx-1684024283{background-color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcm9jYS9hY3BrL2NvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFEUyxBQUdzQyxBQVNaLEFBUUMsQUFTUyxjQVJULFNBU2hCLEVBMUJjLEdBa0JhLFNBakJuQixNQUNDLE9BQ0ssR0FnQmEsU0FmVixZQUtBLEdBSjhCLGtDQWV4QixRQWR2QixZQUkyQiw4QkFXWCxjQUNoQixxREFYWSxVQUNELFNBQ08sZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9hcm9jYS9hY3BrL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3QgeyB0LCBsYW5nIH0gPSB1c2VUcmFuc2xhdGlvbigpXG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZVJvdXRlcigpXG5cbiAgY29uc3QgbWVudSA9IFtcbiAgICB7XG4gICAgICBsYWJlbDogdGBjb21tb246aG9tZWAsXG4gICAgICBocmVmOiBgLyR7bGFuZ31gLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IHRgY29tbW9uOmFib3V0LXVzYCxcbiAgICAgIGhyZWY6IGAvJHtsYW5nfS9hYm91dC11c2AsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogdGBjb21tb246d2hhdC1pcy1wYXJrb3VyYCxcbiAgICAgIGhyZWY6IGAvJHtsYW5nfS93aGF0LWlzLXBhcmtvdXJgLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IHRgY29tbW9uOnBhcnRpY2lwYXRlYCxcbiAgICAgIGhyZWY6IGAvJHtsYW5nfS9wYXJ0aWNpcGF0ZWAsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogdGBjb21tb246bXVsdGltZWRpYWAsXG4gICAgICBocmVmOiBgLyR7bGFuZ30vbXVsdGltZWRpYWAsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogdGBjb21tb246Y29udGFjdGAsXG4gICAgICBocmVmOiBgLyR7bGFuZ30vY29udGFjdGAsXG4gICAgfSxcbiAgXVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibWVudVwiPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHttZW51Lm1hcCgoeyBsYWJlbCwgaHJlZiwgY2hpbGRyZW4gfSkgPT4gKFxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtwYXRobmFtZSA9PT0gaHJlZiA/ICdhY3RpdmUnIDogJyd9IGtleT17bGFiZWx9PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9PlxuICAgICAgICAgICAgICAgICAgPGE+e2xhYmVsfTwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L25hdj5cbiAgICAgIDwvaGVhZGVyPlxuXG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTkyOTRkO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1lbnUgdWwge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1lbnUgYSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuNWVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk5Mjk0ZDtcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogIzIxMjEyMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1lbnUgYTpob3ZlcixcbiAgICAgICAgICAubWVudSBsaS5hY3RpdmUgYSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApXG59XG4iXX0= */\n/*@ sourceURL=/Users/aroca/acpk/components/header.js */"));
}

/***/ })

})
//# sourceMappingURL=ca.js.ab424b176ff6fd2654c3.hot-update.js.map