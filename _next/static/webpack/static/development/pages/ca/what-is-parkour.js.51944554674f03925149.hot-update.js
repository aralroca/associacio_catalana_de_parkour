webpackHotUpdate("static/development/pages/ca/what-is-parkour.js",{

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
    className: "jsx-4115154854",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("nav", {
    className: "jsx-4115154854" + " " + "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-4115154854",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, menu.map(function (_ref) {
    var label = _ref.label,
        href = _ref.href,
        children = _ref.children;
    return __jsx("li", {
      key: label,
      className: "jsx-4115154854",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx("a", {
      href: href,
      className: "jsx-4115154854",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, label), children && __jsx("ul", {
      className: "jsx-4115154854",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, children.map(function (d) {
      return __jsx("li", {
        key: label + '-' + d.label,
        className: "jsx-4115154854",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx("a", {
        href: d.href,
        className: "jsx-4115154854",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, d.label));
    })));
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "4115154854",
    __self: this
  }, "header.jsx-4115154854{background-color:#f9b53c;top:0;left:0;width:100vw;position:fixed;}.menu.jsx-4115154854 ul.jsx-4115154854{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding:0;margin:0;background-color:transparent;list-style:none;}.menu.jsx-4115154854 a.jsx-4115154854{display:block;padding:2em;background-color:#f9b53c;-webkit-text-decoration:none;text-decoration:none;color:#191c26;}.menu.jsx-4115154854 a.jsx-4115154854:hover{background-color:#fac569;}.menu.jsx-4115154854 ul.jsx-4115154854 li.jsx-4115154854 ul.jsx-4115154854{display:none;}.menu.jsx-4115154854 ul.jsx-4115154854 li.jsx-4115154854 a.jsx-4115154854:hover+ul.jsx-4115154854,.menu.jsx-4115154854 ul.jsx-4115154854 li.jsx-4115154854 ul.jsx-4115154854:hover{display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcm9jYS9hY3BrL2NvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1FVyxBQUd1QyxBQVVYLEFBUUMsQUFPVyxBQUdaLEFBSUMsYUFIaEIsQ0FWYyxBQWNkLFdBaENPLEFBeUJQLENBTjJCLEtBbEJsQixPQUNLLFlBQ0csQ0FpQk0sY0FoQnZCLFNBTTJCLDJCQVdYLGNBQ2hCLHdEQVhZLFVBQ0QsU0FDb0IsNkJBQ2IsZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9hcm9jYS9hY3BrL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gIGNvbnN0IHsgdCwgbGFuZyB9ID0gdXNlVHJhbnNsYXRpb24oKVxuXG4gIGNvbnN0IG1lbnUgPSBbXG4gICAge1xuICAgICAgbGFiZWw6IHRgY29tbW9uOmhvbWVgLFxuICAgICAgaHJlZjogYC8ke2xhbmd9YCxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiB0YGNvbW1vbjphYm91dC11c2AsXG4gICAgICBocmVmOiBgLyR7bGFuZ30vYWJvdXQtdXNgLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiB0YGNvbW1vbjp3aGF0LWRvLXdlLWRvYCxcbiAgICAgICAgICBocmVmOiBgLyR7bGFuZ30vYWJvdXQtdXMvd2hhdC1kby13ZS1kb2AsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogdGBjb21tb246ZnV0dXJlLXByb2plY3RzYCxcbiAgICAgICAgICBocmVmOiBgLyR7bGFuZ30vYWJvdXQtdXMvZnV0dXJlLXByb2plY3RzYCxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogdGBjb21tb246d2hhdC1pcy1wYXJrb3VyYCxcbiAgICAgIGhyZWY6IGAvJHtsYW5nfS93aGF0LWlzLXBhcmtvdXJgLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IHRgY29tbW9uOnBhcnRpY2lwYXRlYCxcbiAgICAgIGhyZWY6IGAvJHtsYW5nfS9wYXJ0aWNpcGF0ZWAsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogdGBjb21tb246bXVsdGltZWRpYWAsXG4gICAgICBocmVmOiBgLyR7bGFuZ30vbXVsdGltZWRpYWAsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogdGBjb21tb246Y29udGFjdGAsXG4gICAgICBocmVmOiBgLyR7bGFuZ30vY29udGFjdGAsXG4gICAgfSxcbiAgXVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8aGVhZGVyPlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJtZW51XCI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7bWVudS5tYXAoKHsgbGFiZWwsIGhyZWYsIGNoaWxkcmVuIH0pID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2xhYmVsfT5cbiAgICAgICAgICAgICAgPGEgaHJlZj17aHJlZn0+e2xhYmVsfTwvYT5cbiAgICAgICAgICAgICAge2NoaWxkcmVuICYmIChcbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICB7Y2hpbGRyZW4ubWFwKGQgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtsYWJlbCArICctJyArIGQubGFiZWx9PlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2QuaHJlZn0+e2QubGFiZWx9PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICA8L2hlYWRlcj5cblxuICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5YjUzYztcbiAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUge1xuICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSB1bCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSBhIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDJlbTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5YjUzYztcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICBjb2xvcjogIzE5MWMyNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IGE6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFjNTY5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgdWwgbGkgdWwge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgdWwgbGkgYTpob3ZlciArIHVsLFxuICAgICAgICAgICAgLm1lbnUgdWwgbGkgdWw6aG92ZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8Lz5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=/Users/aroca/acpk/components/header.js */"));
}

/***/ })

})
//# sourceMappingURL=what-is-parkour.js.51944554674f03925149.hot-update.js.map