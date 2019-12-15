webpackHotUpdate("static/development/pages/ca/about-us/future-projects.js",{

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
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-translate/useTranslation */ "./node_modules/next-translate/useTranslation.js");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__);

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
  var _useTranslation = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3___default()(),
      t = _useTranslation.t,
      lang = _useTranslation.lang;

  var menu = [{
    label: t(_templateObject()),
    href: "/".concat(lang, "/")
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
  return __jsx("header", {
    className: "jsx-2383993665",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("nav", {
    className: "jsx-2383993665" + " " + "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-2383993665",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, menu.map(function (_ref) {
    var label = _ref.label,
        href = _ref.href,
        children = _ref.children;
    return __jsx("li", {
      key: label,
      className: "jsx-2383993665",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx("a", {
      href: href,
      className: "jsx-2383993665",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, label), children && __jsx("ul", {
      className: "jsx-2383993665",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, children.map(function (d) {
      return __jsx("li", {
        key: label + '-' + d.label,
        className: "jsx-2383993665",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, __jsx("a", {
        href: d.href,
        className: "jsx-2383993665",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, d.label));
    })));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2383993665",
    __self: this
  }, ".menu.jsx-2383993665{top:0;left:0;width:100vw;position:fixed;}.menu.jsx-2383993665 ul.jsx-2383993665{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0;margin:0;list-style:none;}.menu.jsx-2383993665 a.jsx-2383993665{display:block;padding:2em;background-color:#f9b53c;-webkit-text-decoration:none;text-decoration:none;color:#191c26;}.menu.jsx-2383993665 a.jsx-2383993665:hover{background-color:#cc673b;}.menu.jsx-2383993665 ul.jsx-2383993665 li.jsx-2383993665 ul.jsx-2383993665{display:none;}.menu.jsx-2383993665 ul.jsx-2383993665 li.jsx-2383993665 a.jsx-2383993665:hover+ul.jsx-2383993665,.menu.jsx-2383993665 ul.jsx-2383993665 li.jsx-2383993665 ul.jsx-2383993665:hover{display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcm9jYS9hY3BrL2NvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlFUyxBQUdtQixBQU1PLEFBT0MsQUFPVyxBQUdaLEFBSUMsTUExQlAsT0FDSyxBQXNCZCxDQVZjLEFBY2QsV0F6QmlCLEFBa0JqQixDQU4yQixjQVgzQixXQVl1Qix1QkFURiwyQkFVTCxjQUNoQixvREFWWSxVQUNELFNBQ08sZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9hcm9jYS9hY3BrL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gIGNvbnN0IHsgdCwgbGFuZyB9ID0gdXNlVHJhbnNsYXRpb24oKVxuXG4gIGNvbnN0IG1lbnUgPSBbXG4gICAge1xuICAgICAgbGFiZWw6IHRgY29tbW9uOmhvbWVgLFxuICAgICAgaHJlZjogYC8ke2xhbmd9L2AsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogdGBjb21tb246YWJvdXQtdXNgLFxuICAgICAgaHJlZjogYC8ke2xhbmd9L2Fib3V0LXVzYCxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogdGBjb21tb246d2hhdC1kby13ZS1kb2AsXG4gICAgICAgICAgaHJlZjogYC8ke2xhbmd9L2Fib3V0LXVzL3doYXQtZG8td2UtZG9gLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IHRgY29tbW9uOmZ1dHVyZS1wcm9qZWN0c2AsXG4gICAgICAgICAgaHJlZjogYC8ke2xhbmd9L2Fib3V0LXVzL2Z1dHVyZS1wcm9qZWN0c2AsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IHRgY29tbW9uOndoYXQtaXMtcGFya291cmAsXG4gICAgICBocmVmOiBgLyR7bGFuZ30vd2hhdC1pcy1wYXJrb3VyYCxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiB0YGNvbW1vbjpwYXJ0aWNpcGF0ZWAsXG4gICAgICBocmVmOiBgLyR7bGFuZ30vcGFydGljaXBhdGVgLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IHRgY29tbW9uOm11bHRpbWVkaWFgLFxuICAgICAgaHJlZjogYC8ke2xhbmd9L211bHRpbWVkaWFgLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IHRgY29tbW9uOmNvbnRhY3RgLFxuICAgICAgaHJlZjogYC8ke2xhbmd9L2NvbnRhY3RgLFxuICAgIH0sXG4gIF1cblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXI+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm1lbnVcIj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHttZW51Lm1hcCgoeyBsYWJlbCwgaHJlZiwgY2hpbGRyZW4gfSkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17bGFiZWx9PlxuICAgICAgICAgICAgICA8YSBocmVmPXtocmVmfT57bGFiZWx9PC9hPlxuICAgICAgICAgICAgICB7Y2hpbGRyZW4gJiYgKFxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbi5tYXAoZCA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2xhYmVsICsgJy0nICsgZC5sYWJlbH0+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17ZC5ocmVmfT57ZC5sYWJlbH08L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuXG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5tZW51IHtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tZW51IHVsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tZW51IGEge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nOiAyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjliNTNjO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6ICMxOTFjMjY7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tZW51IGE6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjNjczYjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1lbnUgdWwgbGkgdWwge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1lbnUgdWwgbGkgYTpob3ZlciArIHVsLFxuICAgICAgICAgIC5tZW51IHVsIGxpIHVsOmhvdmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9oZWFkZXI+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/aroca/acpk/components/header.js */"));
}

/***/ })

})
//# sourceMappingURL=future-projects.js.0b9ba8b41935874d9bff.hot-update.js.map