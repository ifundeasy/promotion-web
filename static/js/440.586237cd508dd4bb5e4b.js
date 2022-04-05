"use strict";
(self["webpackChunkpromotion_web"] = self["webpackChunkpromotion_web"] || []).push([[440],{

/***/ 7580:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);


var FixLayout = function FixLayout(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      width: '100%',
      minHeight: '100vh'
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["Z"] = (FixLayout);

/***/ }),

/***/ 5440:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ landing; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/components/stateless/FixLayout/index.js
var FixLayout = __webpack_require__(7580);
// EXTERNAL MODULE: ./node_modules/antd/es/button/style/index.js + 1 modules
var style = __webpack_require__(8385);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js + 4 modules
var es_button = __webpack_require__(404);
// EXTERNAL MODULE: ./node_modules/react-router/index.js
var react_router = __webpack_require__(6974);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/ArrowLeftOutlined.js
// This icon file is generated automatically.
var ArrowLeftOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" } }] }, "name": "arrow-left", "theme": "outlined" };
/* harmony default export */ var asn_ArrowLeftOutlined = (ArrowLeftOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 2 modules
var AntdIcon = __webpack_require__(7029);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/ArrowLeftOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var ArrowLeftOutlined_ArrowLeftOutlined = function ArrowLeftOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_ArrowLeftOutlined
  }));
};

ArrowLeftOutlined_ArrowLeftOutlined.displayName = 'ArrowLeftOutlined';
/* harmony default export */ var icons_ArrowLeftOutlined = (/*#__PURE__*/react.forwardRef(ArrowLeftOutlined_ArrowLeftOutlined));
;// CONCATENATED MODULE: ./src/components/container/landingPage/index.module.less
// extracted by mini-css-extract-plugin
/* harmony default export */ var index_module = ({"landing":"components-container-landingPage-index-module__landing--OGQMD","overlay":"components-container-landingPage-index-module__overlay--M6nBt","rollback":"components-container-landingPage-index-module__rollback--AXrLZ"});
// EXTERNAL MODULE: ./src/assets/video/background.mp4
var background = __webpack_require__(5430);
;// CONCATENATED MODULE: ./src/components/container/landingPage/index.js








var LandingPage = function LandingPage() {
  var navigate = (0,react_router/* useNavigate */.s0)();
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("section", {
    className: index_module.landing
  }, /*#__PURE__*/react.createElement("video", {
    autoPlay: true,
    loop: true,
    muted: true,
    src: background
  }), /*#__PURE__*/react.createElement("section", {
    className: index_module.overlay
  }), /*#__PURE__*/react.createElement(es_button/* default */.Z, {
    className: index_module.rollback,
    icon: /*#__PURE__*/react.createElement(icons_ArrowLeftOutlined, {
      style: {
        fontSize: 18
      }
    }),
    type: "text",
    size: "large",
    onClick: function onClick() {
      return navigate('/');
    }
  }, "Roll Back")));
};

/* harmony default export */ var landingPage = (LandingPage);
;// CONCATENATED MODULE: ./src/pages/landing/index.js
 // import { useNavigate } from 'react-router-dom'




var Landing = function Landing() {
  // const navigate = useNavigate()
  return /*#__PURE__*/react.createElement(FixLayout/* default */.Z, null, /*#__PURE__*/react.createElement(landingPage, null));
};

/* harmony default export */ var landing = (Landing);

/***/ }),

/***/ 5430:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "539b0ac66c7910956915.mp4";

/***/ })

}]);
//# sourceMappingURL=440.586237cd508dd4bb5e4b.js.map