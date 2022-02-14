"use strict";
(self["webpackChunkpromotion_web"] = self["webpackChunkpromotion_web"] || []).push([[344],{

/***/ 1344:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8385);
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(404);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6974);





var Products = function Products() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__/* .useNavigate */ .s0)();

  var redirectTo = function redirectTo(path) {
    navigate(path);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    type: "primary",
    onClick: function onClick() {
      return redirectTo('coupons/add');
    },
    style: {
      margin: 10
    }
  }, "Add Coupons"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    onClick: function onClick() {
      return redirectTo('coupons/edit?id=1');
    },
    style: {
      margin: 10
    }
  }, "Edit Coupons"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
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
//# sourceMappingURL=344.5e2430a4bbd60f48d726.js.map