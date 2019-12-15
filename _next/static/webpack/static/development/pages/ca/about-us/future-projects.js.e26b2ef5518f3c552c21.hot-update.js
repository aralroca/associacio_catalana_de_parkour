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
    className: "jsx-4289141110",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("nav", {
    className: "jsx-4289141110" + " " + "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-4289141110",
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
      className: "jsx-4289141110",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx("a", {
      href: href,
      className: "jsx-4289141110",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, label), children && __jsx("ul", {
      className: "jsx-4289141110",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, children.map(function (d) {
      return __jsx("li", {
        key: label + '-' + d.label,
        className: "jsx-4289141110",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, __jsx("a", {
        href: d.href,
        className: "jsx-4289141110",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, d.label));
    })));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "4289141110",
    __self: this
  }, ".header.jsx-4289141110{background-color:#f9b53c;}.menu.jsx-4289141110{top:0;left:0;width:100vw;position:fixed;}.menu.jsx-4289141110 ul.jsx-4289141110{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding:0;margin:0;list-style:none;}.menu.jsx-4289141110 a.jsx-4289141110{display:block;padding:2em;background-color:#f9b53c;-webkit-text-decoration:none;text-decoration:none;color:#191c26;}.menu.jsx-4289141110 a.jsx-4289141110:hover{background-color:#cc673b;}.menu.jsx-4289141110 ul.jsx-4289141110 li.jsx-4289141110 ul.jsx-4289141110{display:none;}.menu.jsx-4289141110 ul.jsx-4289141110 li.jsx-4289141110 a.jsx-4289141110:hover+ul.jsx-4289141110,.menu.jsx-4289141110 ul.jsx-4289141110 li.jsx-4289141110 ul.jsx-4289141110:hover{display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcm9jYS9hY3BrL2NvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlFUyxBQUdzQyxBQUduQixBQU1PLEFBT0MsQUFPVyxBQUdaLEFBSUMsTUExQlAsT0FDSyxBQXNCZCxDQVZjLEFBY2QsV0E5QkEsQUFLaUIsQUFrQmpCLENBTjJCLGNBWDNCLFdBWXVCLHVCQVRJLDJCQVVYLGNBQ2hCLHdEQVZZLFVBQ0QsU0FDTyxnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL2Fyb2NhL2FjcGsvY29tcG9uZW50cy9oZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3QgeyB0LCBsYW5nIH0gPSB1c2VUcmFuc2xhdGlvbigpXG5cbiAgY29uc3QgbWVudSA9IFtcbiAgICB7XG4gICAgICBsYWJlbDogdGBjb21tb246aG9tZWAsXG4gICAgICBocmVmOiBgLyR7bGFuZ30vYCxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiB0YGNvbW1vbjphYm91dC11c2AsXG4gICAgICBocmVmOiBgLyR7bGFuZ30vYWJvdXQtdXNgLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiB0YGNvbW1vbjp3aGF0LWRvLXdlLWRvYCxcbiAgICAgICAgICBocmVmOiBgLyR7bGFuZ30vYWJvdXQtdXMvd2hhdC1kby13ZS1kb2AsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogdGBjb21tb246ZnV0dXJlLXByb2plY3RzYCxcbiAgICAgICAgICBocmVmOiBgLyR7bGFuZ30vYWJvdXQtdXMvZnV0dXJlLXByb2plY3RzYCxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogdGBjb21tb246d2hhdC1pcy1wYXJrb3VyYCxcbiAgICAgIGhyZWY6IGAvJHtsYW5nfS93aGF0LWlzLXBhcmtvdXJgLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IHRgY29tbW9uOnBhcnRpY2lwYXRlYCxcbiAgICAgIGhyZWY6IGAvJHtsYW5nfS9wYXJ0aWNpcGF0ZWAsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogdGBjb21tb246bXVsdGltZWRpYWAsXG4gICAgICBocmVmOiBgLyR7bGFuZ30vbXVsdGltZWRpYWAsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogdGBjb21tb246Y29udGFjdGAsXG4gICAgICBocmVmOiBgLyR7bGFuZ30vY29udGFjdGAsXG4gICAgfSxcbiAgXVxuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlcj5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibWVudVwiPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge21lbnUubWFwKCh7IGxhYmVsLCBocmVmLCBjaGlsZHJlbiB9KSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtsYWJlbH0+XG4gICAgICAgICAgICAgIDxhIGhyZWY9e2hyZWZ9PntsYWJlbH08L2E+XG4gICAgICAgICAgICAgIHtjaGlsZHJlbiAmJiAoXG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAge2NoaWxkcmVuLm1hcChkID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17bGFiZWwgKyAnLScgKyBkLmxhYmVsfT5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtkLmhyZWZ9PntkLmxhYmVsfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9uYXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjliNTNjO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubWVudSB7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubWVudSB1bCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubWVudSBhIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcGFkZGluZzogMmVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5YjUzYztcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiAjMTkxYzI2O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubWVudSBhOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjYzY3M2I7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tZW51IHVsIGxpIHVsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tZW51IHVsIGxpIGE6aG92ZXIgKyB1bCxcbiAgICAgICAgICAubWVudSB1bCBsaSB1bDpob3ZlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvaGVhZGVyPlxuICApXG59XG4iXX0= */\n/*@ sourceURL=/Users/aroca/acpk/components/header.js */"));
}

/***/ })

})
//# sourceMappingURL=future-projects.js.e26b2ef5518f3c552c21.hot-update.js.map