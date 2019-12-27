webpackHotUpdate("static/development/pages/en/contact.js",{

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
    var href = pathname === '/' ? "/".concat(l) : pathname.replace("/".concat(lang), "/".concat(l));
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: l,
      href: href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-3380081799",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, l.toUpperCase()));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3380081799",
    __self: this
  }, "footer.jsx-3380081799{width:calc(100vw - 30px);padding:20px;background-color:#212121;margin:20px 0 -10px -10px;color:white;text-align:right;}footer.jsx-3380081799 a.jsx-3380081799{color:white;font-weight:bold;-webkit-text-decoration:none;text-decoration:none;margin:0 5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcm9jYS9wYXJrb3VyY2F0L2NvbXBvbmVudHMvZm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCa0IsQUFHa0MsQUFTYixZQUNLLGFBVEosSUFVUSxTQVRJLHlCQUNBLGdCQVNaLFVBUkQsR0FTZCxTQVJtQixpQkFDbkIiLCJmaWxlIjoiL1VzZXJzL2Fyb2NhL3BhcmtvdXJjYXQvY29tcG9uZW50cy9mb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuaW1wb3J0IGkxOG5Db25mIGZyb20gJy4uL2kxOG4uanNvbidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xuICBjb25zdCB7IHQsIGxhbmcgfSA9IHVzZVRyYW5zbGF0aW9uKClcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlUm91dGVyKClcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Zm9vdGVyPlxuICAgICAgICB7dGBjb21tb246Y2hhbmdlLWxhbmdgfVxuICAgICAgICB7aTE4bkNvbmYuYWxsTGFuZ3VhZ2VzXG4gICAgICAgICAgLmZpbHRlcihsID0+IGwgIT09IGxhbmcpXG4gICAgICAgICAgLm1hcChsID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhyZWYgPVxuICAgICAgICAgICAgICBwYXRobmFtZSA9PT0gJy8nID8gYC8ke2x9YCA6IHBhdGhuYW1lLnJlcGxhY2UoYC8ke2xhbmd9YCwgYC8ke2x9YClcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPExpbmsga2V5PXtsfSBocmVmPXtocmVmfT5cbiAgICAgICAgICAgICAgICA8YT57bC50b1VwcGVyQ2FzZSgpfTwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgPC9mb290ZXI+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICBmb290ZXIge1xuICAgICAgICB3aWR0aDogY2FsYygxMDB2dyAtIDMwcHgpO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xuICAgICAgICBtYXJnaW4gMjBweCAwIC0xMHB4IC0xMHB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgfSBcblxuICAgICAgZm9vdGVyIGEge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIG1hcmdpbjogMCA1cHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApXG59XG4iXX0= */\n/*@ sourceURL=/Users/aroca/parkourcat/components/footer.js */"));
}

/***/ }),

/***/ "./views/contact/index.js":
/*!********************************!*\
  !*** ./views/contact/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contact; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-translate/useTranslation */ "./node_modules/next-translate/useTranslation.js");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_translate_Trans__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-translate/Trans */ "./node_modules/next-translate/Trans.js");
/* harmony import */ var next_translate_Trans__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_translate_Trans__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/aroca/parkourcat/views/contact/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["contact:title"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





function Contact() {
  var _useTranslation = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4___default()(),
      t = _useTranslation.t;

  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3263664027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, t(_templateObject())), __jsx("div", {
    className: "jsx-3263664027" + " " + "contact-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("img", {
    alt: "contact",
    src: "/images/contact.svg",
    className: "jsx-3263664027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx(next_translate_Trans__WEBPACK_IMPORTED_MODULE_5___default.a, {
    i18nKey: "contact:description",
    components: [__jsx("p", {
      className: "jsx-3263664027",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }), __jsx("strong", {
      className: "jsx-3263664027",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }), __jsx("a", {
      href: "mailto:consell@acpk.cat",
      className: "jsx-3263664027",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    })],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3263664027",
    __self: this
  }, ".contact-box.jsx-3263664027{max-width:500px;margin:20px auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;box-shadow:2px 2px 10px 0 hsla(0,0%,40%,0.5);background-color:#fff;border-radius:2px;border:1px solid #a6a7a9;padding:10px;min-height:100px;}.contact-box.jsx-3263664027 img.jsx-3263664027{width:80px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcm9jYS9wYXJrb3VyY2F0L3ZpZXdzL2NvbnRhY3QvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJTLEFBRzZCLEFBY0wsV0FDYixLQWRtQixpQkFDSiwwRUFDUSw0RUFDUyxtSEFDa0IsNkNBQzFCLHNCQUNKLGtCQUNPLHlCQUNaLGFBQ0ksaUJBQ25CIiwiZmlsZSI6Ii9Vc2Vycy9hcm9jYS9wYXJrb3VyY2F0L3ZpZXdzL2NvbnRhY3QvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xuaW1wb3J0IFRyYW5zIGZyb20gJ25leHQtdHJhbnNsYXRlL1RyYW5zJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0KCkge1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKClcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8aDE+e3RgY29udGFjdDp0aXRsZWB9PC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1ib3hcIj5cbiAgICAgICAgPGltZyBhbHQ9XCJjb250YWN0XCIgc3JjPVwiL2ltYWdlcy9jb250YWN0LnN2Z1wiIC8+XG4gICAgICAgIDxUcmFuc1xuICAgICAgICAgIGkxOG5LZXk9XCJjb250YWN0OmRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb21wb25lbnRzPXtbPHAgLz4sIDxzdHJvbmcgLz4sIDxhIGhyZWY9XCJtYWlsdG86Y29uc2VsbEBhY3BrLmNhdFwiIC8+XX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAuY29udGFjdC1ib3gge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCAwIGhzbGEoMCwgMCUsIDQwJSwgMC41KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYTZhN2E5O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb250YWN0LWJveCBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=/Users/aroca/parkourcat/views/contact/index.js */"));
}

/***/ })

})
//# sourceMappingURL=contact.js.9c81e75a53d483ab641a.hot-update.js.map