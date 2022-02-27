"use strict";
(self["webpackChunkpromotion_web"] = self["webpackChunkpromotion_web"] || []).push([[344],{

/***/ 3994:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);


var FixTabPanel = function FixTabPanel(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      width: '100%',
      minHeight: 'calc(100vh - 242px)'
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["Z"] = (FixTabPanel);

/***/ }),

/***/ 1344:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8385);
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(404);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6974);
/* harmony import */ var _stateless_FixTabPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3994);






var Products = function Products() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__/* .useNavigate */ .s0)();

  var redirectTo = function redirectTo(path) {
    navigate(path);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_stateless_FixTabPanel__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    type: "primary",
    onClick: function onClick() {
      return redirectTo('coupons/add');
    },
    style: {
      margin: 10
    }
  }, "Add Coupons"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    onClick: function onClick() {
      return redirectTo('coupons/edit?id=1');
    },
    style: {
      margin: 10
    }
  }, "Edit Coupons"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    onClick: function onClick() {
      return redirectTo('coupons/detail?id=2');
    },
    type: "dashed",
    style: {
      margin: 10
    }
  }, "Detail Coupons"));
};

/* harmony default export */ __webpack_exports__["default"] = (Products);

/***/ })

}]);
//# sourceMappingURL=344.107b5aea15a9985b6aab.js.map