webpackHotUpdate("static/development/pages/en/participate.js",{

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-translate/useTranslation */ "./node_modules/next-translate/useTranslation.js");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _i18n_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../i18n.json */ "./i18n.json");
var _i18n_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../i18n.json */ "./i18n.json", 1);

var _jsxFileName = "/Users/aroca/parkourcat/components/footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["common:change-lang"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






function Footer() {
  var _useTranslation = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4___default()(),
      t = _useTranslation.t,
      lang = _useTranslation.lang;

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])(),
      pathname = _useRouter.pathname;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("footer", {
    className: "jsx-3380081799",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, t(_templateObject()), _i18n_json__WEBPACK_IMPORTED_MODULE_6__.allLanguages.filter(function (l) {
    return l !== lang;
  }).map(function (l) {
    var href = pathname.replace("/".concat(lang), "/".concat(l)) || "/".concat(l);
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: l,
      href: href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-3380081799",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, l.toUpperCase()));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3380081799",
    __self: this
  }, "footer.jsx-3380081799{width:calc(100vw - 30px);padding:20px;background-color:#212121;margin:20px 0 -10px -10px;color:white;text-align:right;}footer.jsx-3380081799 a.jsx-3380081799{color:white;font-weight:bold;-webkit-text-decoration:none;text-decoration:none;margin:0 5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcm9jYS9wYXJrb3VyY2F0L2NvbXBvbmVudHMvZm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCa0IsQUFHa0MsQUFTYixZQUNLLGFBVEosSUFVUSxTQVRJLHlCQUNBLGdCQVNaLFVBUkQsR0FTZCxTQVJtQixpQkFDbkIiLCJmaWxlIjoiL1VzZXJzL2Fyb2NhL3BhcmtvdXJjYXQvY29tcG9uZW50cy9mb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuaW1wb3J0IGkxOG5Db25mIGZyb20gJy4uL2kxOG4uanNvbidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xuICBjb25zdCB7IHQsIGxhbmcgfSA9IHVzZVRyYW5zbGF0aW9uKClcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlUm91dGVyKClcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Zm9vdGVyPlxuICAgICAgICB7dGBjb21tb246Y2hhbmdlLWxhbmdgfVxuICAgICAgICB7aTE4bkNvbmYuYWxsTGFuZ3VhZ2VzXG4gICAgICAgICAgLmZpbHRlcihsID0+IGwgIT09IGxhbmcpXG4gICAgICAgICAgLm1hcChsID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhyZWYgPSBwYXRobmFtZS5yZXBsYWNlKGAvJHtsYW5nfWAsIGAvJHtsfWApIHx8wqBgLyR7bH1gXG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGluayBrZXk9e2x9IGhyZWY9e2hyZWZ9PlxuICAgICAgICAgICAgICA8YT57bC50b1VwcGVyQ2FzZSgpfTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGZvb3RlciB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMzBweCk7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XG4gICAgICAgIG1hcmdpbiAyMHB4IDAgLTEwcHggLTEwcHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICB9IFxuXG4gICAgICBmb290ZXIgYSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/aroca/parkourcat/components/footer.js */"));
}

/***/ })

})
//# sourceMappingURL=participate.js.a2d04f37479a5d3057b4.hot-update.js.map