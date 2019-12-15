webpackHotUpdate("static/development/pages/en/about-us/what-do-we-do.js",{

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

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["common:contact"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["common:multimedia"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["common:participate"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["common:what-is-parkour"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["common:future-projects"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["common:what-do-we-do"]);

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
    href: "/".concat(lang, "/about-us"),
    children: [{
      label: t(_templateObject3()),
      href: "/".concat(lang, "/about-us/what-do-we-do")
    }, {
      label: t(_templateObject4()),
      href: "/".concat(lang, "/about-us/future-projects")
    }]
  }, {
    label: t(_templateObject5()),
    href: "/".concat(lang, "/what-is-parkour")
  }, {
    label: t(_templateObject6()),
    href: "/".concat(lang, "/participate")
  }, {
    label: t(_templateObject7()),
    href: "/".concat(lang, "/multimedia")
  }, {
    label: t(_templateObject8()),
    href: "/".concat(lang, "/contact")
  }];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("header", {
    className: "jsx-1912893089",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("nav", {
    className: "jsx-1912893089" + " " + "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-1912893089",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, menu.map(function (_ref) {
    var label = _ref.label,
        href = _ref.href,
        children = _ref.children;
    return __jsx("li", {
      key: label,
      className: "jsx-1912893089" + " " + ((pathname === href ? 'active' : '') || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-1912893089",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, label)), children && __jsx("ul", {
      className: "jsx-1912893089",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, children.map(function (d) {
      return __jsx("li", {
        key: label + '-' + d.label,
        className: "jsx-1912893089",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: d.href,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-1912893089",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, d.label)));
    })));
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1912893089",
    __self: this
  }, "header.jsx-1912893089{background-color:#f9b53c;top:0;left:0;width:100vw;position:fixed;}.menu.jsx-1912893089 ul.jsx-1912893089{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding:0;margin:0;background-color:transparent;list-style:none;}.menu.jsx-1912893089 a.jsx-1912893089{display:block;padding:2em;background-color:#f9b53c;-webkit-transition-duration:0.2s;transition-duration:0.2s;-webkit-text-decoration:none;text-decoration:none;color:#191c26;}.menu.jsx-1912893089 li.active.jsx-1912893089 a.jsx-1912893089{background-color:#fac569;}.menu.jsx-1912893089 a.jsx-1912893089:hover{background-color:#fac569;}.menu.jsx-1912893089 ul.jsx-1912893089 li.jsx-1912893089 ul.jsx-1912893089{display:none;}.menu.jsx-1912893089 ul.jsx-1912893089 li.jsx-1912893089 a.jsx-1912893089:hover+ul.jsx-1912893089,.menu.jsx-1912893089 ul.jsx-1912893089 li.jsx-1912893089 ul.jsx-1912893089:hover{display:block;max-width:200px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcm9jYS9hY3BrL2NvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZFUyxBQUdzQyxBQU9aLEFBU0MsQUFRVyxBQUdBLEFBR1osQUFJQyxhQUhoQixDQWRjLEFBa0JJLFdBbENWLEFBd0JSLEFBR0EsQ0FWMkIsSUFrQjNCLENBbENTLE9BQ0ssWUFDRyxDQWVVLGNBZDNCLFNBR2lCLG1DQVlNLHNCQVhJLDRCQVlYLGNBQ2hCLHVEQVpZLFVBQ0QsU0FDb0IsNkJBQ2IsZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9hcm9jYS9hY3BrL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3QgeyB0LCBsYW5nIH0gPSB1c2VUcmFuc2xhdGlvbigpXG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZVJvdXRlcigpXG5cbiAgY29uc3QgbWVudSA9IFtcbiAgICB7XG4gICAgICBsYWJlbDogdGBjb21tb246aG9tZWAsXG4gICAgICBocmVmOiBgLyR7bGFuZ31gLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IHRgY29tbW9uOmFib3V0LXVzYCxcbiAgICAgIGhyZWY6IGAvJHtsYW5nfS9hYm91dC11c2AsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IHRgY29tbW9uOndoYXQtZG8td2UtZG9gLFxuICAgICAgICAgIGhyZWY6IGAvJHtsYW5nfS9hYm91dC11cy93aGF0LWRvLXdlLWRvYCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiB0YGNvbW1vbjpmdXR1cmUtcHJvamVjdHNgLFxuICAgICAgICAgIGhyZWY6IGAvJHtsYW5nfS9hYm91dC11cy9mdXR1cmUtcHJvamVjdHNgLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiB0YGNvbW1vbjp3aGF0LWlzLXBhcmtvdXJgLFxuICAgICAgaHJlZjogYC8ke2xhbmd9L3doYXQtaXMtcGFya291cmAsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogdGBjb21tb246cGFydGljaXBhdGVgLFxuICAgICAgaHJlZjogYC8ke2xhbmd9L3BhcnRpY2lwYXRlYCxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiB0YGNvbW1vbjptdWx0aW1lZGlhYCxcbiAgICAgIGhyZWY6IGAvJHtsYW5nfS9tdWx0aW1lZGlhYCxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiB0YGNvbW1vbjpjb250YWN0YCxcbiAgICAgIGhyZWY6IGAvJHtsYW5nfS9jb250YWN0YCxcbiAgICB9LFxuICBdXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJtZW51XCI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge21lbnUubWFwKCh7IGxhYmVsLCBocmVmLCBjaGlsZHJlbiB9KSA9PiAoXG4gICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09IGhyZWYgPyAnYWN0aXZlJyA6ICcnfVxuICAgICAgICAgICAgICAgIGtleT17bGFiZWx9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtocmVmfT5cbiAgICAgICAgICAgICAgICAgIDxhPntsYWJlbH08L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbiAmJiAoXG4gICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbi5tYXAoZCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17bGFiZWwgKyAnLScgKyBkLmxhYmVsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2QuaHJlZn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntkLmxhYmVsfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9oZWFkZXI+XG5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgaGVhZGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWI1M2M7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubWVudSB1bCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tZW51IGEge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nOiAyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjliNTNjO1xuICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiAjMTkxYzI2O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubWVudSBsaS5hY3RpdmUgYSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFjNTY5O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubWVudSBhOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWM1Njk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tZW51IHVsIGxpIHVsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tZW51IHVsIGxpIGE6aG92ZXIgKyB1bCxcbiAgICAgICAgICAubWVudSB1bCBsaSB1bDpob3ZlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=/Users/aroca/acpk/components/header.js */"));
}

/***/ })

})
//# sourceMappingURL=what-do-we-do.js.ac3d2e0a218a7e5afd7a.hot-update.js.map