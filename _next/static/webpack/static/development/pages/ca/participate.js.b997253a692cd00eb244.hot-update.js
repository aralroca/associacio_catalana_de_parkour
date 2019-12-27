webpackHotUpdate("static/development/pages/ca/participate.js",{

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

var _jsxFileName = "/Users/aroca/parkourcat/components/header.js";

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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      openMobileMenu = _useState[0],
      setOpenMobileMenu = _useState[1];

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
    className: "jsx-923707469",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("img", {
    onClick: function onClick() {
      return setOpenMobileMenu(function (b) {
        return !b;
      });
    },
    width: 30,
    alt: "menu",
    src: "/images/menu.svg",
    className: "jsx-923707469" + " " + "mobile-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx("nav", {
    className: "jsx-923707469" + " " + "menu ".concat(openMobileMenu ? 'open' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-923707469",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, menu.map(function (_ref) {
    var label = _ref.label,
        href = _ref.href;
    return __jsx("li", {
      key: label,
      className: "jsx-923707469" + " " + ((pathname === href ? 'active' : '') || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      onClick: function onClick() {
        return setOpenMobileMenu(false);
      },
      href: href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-923707469",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, label)));
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "923707469",
    __self: this
  }, "header.jsx-923707469{background-color:#99294d;top:0;left:0;z-index:1;width:100vw;height:66px;position:fixed;box-shadow:0 5px 5px -5px rgba(0,0,0,0.2);}.menu.jsx-923707469 ul.jsx-923707469{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding:0;margin:0;list-style:none;}.menu.jsx-923707469 a.jsx-923707469{display:block;padding:1.5em;background-color:#99294d;-webkit-transition-duration:0.2s;transition-duration:0.2s;-webkit-text-decoration:none;text-decoration:none;color:#fafafa;}.menu.jsx-923707469 a.jsx-923707469:hover,.menu.jsx-923707469 li.active.jsx-923707469 a.jsx-923707469{background-color:#ad4264;}.mobile-menu.jsx-923707469{display:none;position:absolute;right:10px;top:10px;}@media (max-width:940px){.menu.jsx-923707469 ul.jsx-923707469{display:none;overflow:auto;margin-top:66px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.mobile-menu.jsx-923707469{display:block;}.menu.open.jsx-923707469 ul.jsx-923707469{display:block;}.menu.jsx-923707469 a.jsx-923707469{padding:1.2em;background-color:#212121;border:1px solid #312121;}.menu.jsx-923707469 a.jsx-923707469:hover,.menu.jsx-923707469 li.active.jsx-923707469 a.jsx-923707469{background-color:#312121;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcm9jYS9wYXJrb3VyY2F0L2NvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVEUyxBQUdzQyxBQVVaLEFBUUMsQUFTVyxBQUlaLEFBUUUsQUFPQyxBQUlBLEFBSUEsQUFPVyxhQTdCVCxBQVFGLENBckJGLEFBNEJkLEFBSUEsQUFJMkIsV0F0RHJCLEFBMkJSLEFBa0NFLEVBckJrQixDQXJCTyxHQWxCbEIsQUErQkksT0E5QkQsQ0FxRGlCLEdBdEJsQixDQVFlLEtBdENaLEdBK0JkLEVBZDJCLE9BaEJiLElBb0RaLFFBbkRlLEVBS0EsYUFKOEIsd0JBZXhCLFVBcUJyQixRQW5DRixFQUkyQiw4QkFXWCxjQUNoQixxREFYWSxVQUNELFNBQ08sZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9hcm9jYS9wYXJrb3VyY2F0L2NvbXBvbmVudHMvaGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xuICBjb25zdCB7IHQsIGxhbmcgfSA9IHVzZVRyYW5zbGF0aW9uKClcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlUm91dGVyKClcbiAgY29uc3QgW29wZW5Nb2JpbGVNZW51LCBzZXRPcGVuTW9iaWxlTWVudV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBtZW51ID0gW1xuICAgIHtcbiAgICAgIGxhYmVsOiB0YGNvbW1vbjpob21lYCxcbiAgICAgIGhyZWY6IGAvJHtsYW5nfWAsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogdGBjb21tb246YWJvdXQtdXNgLFxuICAgICAgaHJlZjogYC8ke2xhbmd9L2Fib3V0LXVzYCxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiB0YGNvbW1vbjp3aGF0LWlzLXBhcmtvdXJgLFxuICAgICAgaHJlZjogYC8ke2xhbmd9L3doYXQtaXMtcGFya291cmAsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogdGBjb21tb246cGFydGljaXBhdGVgLFxuICAgICAgaHJlZjogYC8ke2xhbmd9L3BhcnRpY2lwYXRlYCxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiB0YGNvbW1vbjptdWx0aW1lZGlhYCxcbiAgICAgIGhyZWY6IGAvJHtsYW5nfS9tdWx0aW1lZGlhYCxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiB0YGNvbW1vbjpjb250YWN0YCxcbiAgICAgIGhyZWY6IGAvJHtsYW5nfS9jb250YWN0YCxcbiAgICB9LFxuICBdXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgICA8aW1nIG9uQ2xpY2s9eygpID0+IHNldE9wZW5Nb2JpbGVNZW51KGIgPT4gIWIpfSBjbGFzc05hbWU9XCJtb2JpbGUtbWVudVwiIHdpZHRoPXszMH0gYWx0PVwibWVudVwiIHNyYz1cIi9pbWFnZXMvbWVudS5zdmdcIiAvPlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT17YG1lbnUgJHtvcGVuTW9iaWxlTWVudSA/ICdvcGVuJyA6ICcnfWB9PlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHttZW51Lm1hcCgoeyBsYWJlbCwgaHJlZiB9KSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3BhdGhuYW1lID09PSBocmVmID8gJ2FjdGl2ZScgOiAnJ30ga2V5PXtsYWJlbH0+XG4gICAgICAgICAgICAgICAgPExpbmsgb25DbGljaz17KCkgPT4gc2V0T3Blbk1vYmlsZU1lbnUoZmFsc2UpfSBocmVmPXtocmVmfT5cbiAgICAgICAgICAgICAgICAgIDxhPntsYWJlbH08L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9uYXY+XG4gICAgICA8L2hlYWRlcj5cblxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk5Mjk0ZDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgaGVpZ2h0OiA2NnB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubWVudSB1bCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubWVudSBhIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcGFkZGluZzogMS41ZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTkyOTRkO1xuICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmFmYWZhO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubWVudSBhOmhvdmVyLFxuICAgICAgICAgIC5tZW51IGxpLmFjdGl2ZSBhIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhZDQyNjQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1vYmlsZS1tZW51IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTQwcHgpIHtcbiAgICAgICAgICAgIC5tZW51IHVsIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDY2cHg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tb2JpbGUtbWVudSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWVudS5vcGVuIHVsIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tZW51IGEge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxLjJlbTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzMxMjEyMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1lbnUgYTpob3ZlcixcbiAgICAgICAgICAgIC5tZW51IGxpLmFjdGl2ZSBhIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMxMjEyMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApXG59XG4iXX0= */\n/*@ sourceURL=/Users/aroca/parkourcat/components/header.js */"));
}

/***/ })

})
//# sourceMappingURL=participate.js.b997253a692cd00eb244.hot-update.js.map