"use strict";
(self["webpackChunkpromotion_web"] = self["webpackChunkpromotion_web"] || []).push([[584],{

/***/ 3994:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);


var FixTabPanel = function FixTabPanel(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      width: '100%',
      minHeight: 'calc(100vh - 252px)'
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["Z"] = (FixTabPanel);

/***/ }),

/***/ 3584:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ home; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/components/stateless/FixTabPanel/index.js
var FixTabPanel = __webpack_require__(3994);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(9439);
;// CONCATENATED MODULE: ./src/components/stateless/TypedText/index.js



var TypedText = function TypedText(_ref) {
  var children = _ref.children,
      _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 110 : _ref$delay;

  var _useState = (0,react.useState)(0),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      revealedLetters = _useState2[0],
      setRevealedLetters = _useState2[1];

  var interval = setInterval(function () {
    return setRevealedLetters(function (l) {
      return l + 1;
    });
  }, delay);
  (0,react.useEffect)(function () {
    if (revealedLetters === children.length) clearInterval(interval);
  }, [children, interval, revealedLetters]);
  (0,react.useEffect)(function () {
    return function () {
      return clearInterval(interval);
    };
  }, [interval]);
  return /*#__PURE__*/react.createElement(react.Fragment, null, children.substring(0, revealedLetters));
};

/* harmony default export */ var stateless_TypedText = (/*#__PURE__*/(0,react.memo)(TypedText));
;// CONCATENATED MODULE: ./src/pages/home/index.module.less
// extracted by mini-css-extract-plugin
/* harmony default export */ var index_module = ({"button":"pages-home-index-module__button--GgsIa","typedText":"pages-home-index-module__typedText--od9oV","spotLight":"pages-home-index-module__spotLight--ghGu1","move":"pages-home-index-module__move--SWK09"});
;// CONCATENATED MODULE: ./src/pages/home/index.js





var Home = function Home() {
  return /*#__PURE__*/react.createElement(FixTabPanel/* default */.Z, null, /*#__PURE__*/react.createElement("h2", {
    className: index_module.TypedText
  }, /*#__PURE__*/react.createElement(stateless_TypedText, null, "Cool! Hi, React & Ant Design!")), /*#__PURE__*/react.createElement("h3", {
    className: index_module.spotLight,
    "data-spotlight": "React version: ".concat(react.version)
  }, "React version: ", react.version));
};

/* harmony default export */ var home = (Home);

/***/ })

}]);
//# sourceMappingURL=584.450d491a81a410d73ad4.js.map