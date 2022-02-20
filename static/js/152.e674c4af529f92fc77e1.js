"use strict";
(self["webpackChunkpromotion_web"] = self["webpackChunkpromotion_web"] || []).push([[152],{

/***/ 4152:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ dashboard; }
});

// EXTERNAL MODULE: ./node_modules/antd/es/button/style/index.js + 1 modules
var style = __webpack_require__(8385);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js + 4 modules
var es_button = __webpack_require__(404);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-router/index.js
var react_router = __webpack_require__(6974);
;// CONCATENATED MODULE: ./src/pages/dashboard/index.module.less
// extracted by mini-css-extract-plugin
/* harmony default export */ var index_module = ({"dashboard":"pages-dashboard-index-module__dashboard--KFcyE"});
;// CONCATENATED MODULE: ./src/pages/dashboard/index.js






var Dashboard = function Dashboard() {
  var navigate = (0,react_router/* useNavigate */.s0)();
  var navigateType = (0,react_router/* useNavigationType */.ur)();
  return /*#__PURE__*/react.createElement("div", {
    className: index_module.dashboard
  }, /*#__PURE__*/react.createElement("h3", null, "Look, more routes!"), /*#__PURE__*/react.createElement("h4", null, "Navigate type: ", navigateType), /*#__PURE__*/react.createElement(react_router/* Routes */.Z5, null, /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
    path: "/",
    element: /*#__PURE__*/react.createElement(es_button/* default */.Z, {
      type: "primary",
      onClick: function onClick() {
        return navigate('/');
      }
    }, "Navigate /")
  }), /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
    path: "invoices",
    element: /*#__PURE__*/react.createElement("h3", null, "invoies")
  })));
};

/* harmony default export */ var dashboard = (Dashboard);

/***/ })

}]);
//# sourceMappingURL=152.e674c4af529f92fc77e1.js.map