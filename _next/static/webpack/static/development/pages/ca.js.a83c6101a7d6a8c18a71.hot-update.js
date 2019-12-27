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
    className: "jsx-3532466201",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("nav", {
    className: "jsx-3532466201" + " " + "menu ".concat(openMobileMenu ? 'open' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-3532466201",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, menu.map(function (_ref) {
    var label = _ref.label,
        href = _ref.href;
    return __jsx("li", {
      key: label,
      className: "jsx-3532466201" + " " + ((pathname === href ? 'active' : '') || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      onClick: function onClick() {
        return setOpenMobileMenu(false);
      },
      href: href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-3532466201",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, label)));
  })), __jsx("div", {
    onClick: function onClick() {
      return setOpenMobileMenu(function (b) {
        return !b;
      });
    },
    className: "jsx-3532466201" + " " + "mobile-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Toggle"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3532466201",
    __self: this
  }, "header.jsx-3532466201{background-color:#99294d;top:0;left:0;z-index:1;width:100vw;height:66px;position:fixed;box-shadow:0 5px 5px -5px rgba(0,0,0,0.2);}.menu.jsx-3532466201 ul.jsx-3532466201{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding:0;margin:0;list-style:none;}.menu.jsx-3532466201 a.jsx-3532466201{display:block;padding:1.5em;background-color:#99294d;-webkit-transition-duration:0.2s;transition-duration:0.2s;-webkit-text-decoration:none;text-decoration:none;color:#fafafa;}.menu.jsx-3532466201 a.jsx-3532466201:hover,.menu.jsx-3532466201 li.active.jsx-3532466201 a.jsx-3532466201{background-color:#ad4264;}@media(max-width:940px){.menu.jsx-3532466201 ul.jsx-3532466201{display:none;overflow:auto;margin-top:66px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.menu.open.jsx-3532466201 ul.jsx-3532466201{display:block;}.menu.jsx-3532466201 a.jsx-3532466201{padding:1.2em;background-color:#212121;border:1px solid #312121;}.menu.jsx-3532466201 a.jsx-3532466201:hover,.menu.jsx-3532466201 li.active.jsx-3532466201 a.jsx-3532466201{background-color:#312121;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcm9jYS9wYXJrb3VyY2F0L2NvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTREUyxBQUdzQyxBQVVaLEFBUUMsQUFTVyxBQUtWLEFBT0MsQUFJQSxBQU9VLGFBakJWLENBZEYsQUFxQmQsQUFJMkIsV0EzQ3JCLEFBMkJSLEFBdUJDLEVBakJtQixDQWRPLEdBbEJsQixPQUNHLENBMENpQixJQVZILEtBL0JaLEtBaUJhLE9BaEJiLElBeUNaLFFBeENlLEVBS0EsYUFKOEIsd0JBZXhCLFVBY3JCLFFBNUJGLEVBSTJCLDhCQVdYLGNBQ2hCLHFEQVhZLFVBQ0QsU0FDTyxnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL2Fyb2NhL3BhcmtvdXJjYXQvY29tcG9uZW50cy9oZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gIGNvbnN0IHsgdCwgbGFuZyB9ID0gdXNlVHJhbnNsYXRpb24oKVxuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBbb3Blbk1vYmlsZU1lbnUsIHNldE9wZW5Nb2JpbGVNZW51XSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IG1lbnUgPSBbXG4gICAge1xuICAgICAgbGFiZWw6IHRgY29tbW9uOmhvbWVgLFxuICAgICAgaHJlZjogYC8ke2xhbmd9YCxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiB0YGNvbW1vbjphYm91dC11c2AsXG4gICAgICBocmVmOiBgLyR7bGFuZ30vYWJvdXQtdXNgLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IHRgY29tbW9uOndoYXQtaXMtcGFya291cmAsXG4gICAgICBocmVmOiBgLyR7bGFuZ30vd2hhdC1pcy1wYXJrb3VyYCxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiB0YGNvbW1vbjpwYXJ0aWNpcGF0ZWAsXG4gICAgICBocmVmOiBgLyR7bGFuZ30vcGFydGljaXBhdGVgLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IHRgY29tbW9uOm11bHRpbWVkaWFgLFxuICAgICAgaHJlZjogYC8ke2xhbmd9L211bHRpbWVkaWFgLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IHRgY29tbW9uOmNvbnRhY3RgLFxuICAgICAgaHJlZjogYC8ke2xhbmd9L2NvbnRhY3RgLFxuICAgIH0sXG4gIF1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT17YG1lbnUgJHtvcGVuTW9iaWxlTWVudSA/ICdvcGVuJyA6ICcnfWB9PlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHttZW51Lm1hcCgoeyBsYWJlbCwgaHJlZiB9KSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3BhdGhuYW1lID09PSBocmVmID8gJ2FjdGl2ZScgOiAnJ30ga2V5PXtsYWJlbH0+XG4gICAgICAgICAgICAgICAgPExpbmsgb25DbGljaz17KCkgPT4gc2V0T3Blbk1vYmlsZU1lbnUoZmFsc2UpfSBocmVmPXtocmVmfT5cbiAgICAgICAgICAgICAgICAgIDxhPntsYWJlbH08L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3Blbk1vYmlsZU1lbnUoYiA9PiAhYil9IFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibW9iaWxlLW1lbnVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFRvZ2dsZVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICAgIDwvaGVhZGVyPlxuXG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTkyOTRkO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgICBoZWlnaHQ6IDY2cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDVweCA1cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tZW51IHVsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tZW51IGEge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nOiAxLjVlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTI5NGQ7XG4gICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6ICNmYWZhZmE7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tZW51IGE6aG92ZXIsXG4gICAgICAgICAgLm1lbnUgbGkuYWN0aXZlIGEge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2FkNDI2NDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiA5NDBweCkge1xuICAgICAgICAgICAgLm1lbnUgdWwge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNjZweDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1lbnUub3BlbiB1bCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWVudSBhIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMS4yZW07XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMTIxMjE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tZW51IGE6aG92ZXIsXG4gICAgICAgICAgICAubWVudSBsaS5hY3RpdmUgYSB7XG4gICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMxMjEyMTtcbiAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC8+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/aroca/parkourcat/components/header.js */"));
}

/***/ })

})
//# sourceMappingURL=ca.js.a83c6101a7d6a8c18a71.hot-update.js.map