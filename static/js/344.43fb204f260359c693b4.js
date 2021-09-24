"use strict";
(self["webpackChunkpromotion_web"] = self["webpackChunkpromotion_web"] || []).push([[344],{

/***/ 1344:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8385);
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(404);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var _stateless_RouteWithSubRoutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8014);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5977);
/* harmony import */ var _stateless_CustomSwitch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4142);



function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






var Coupons = function Coupons(_ref) {
  var _ref$routes = _ref.routes,
      routes = _ref$routes === void 0 ? [] : _ref$routes;
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__/* .useHistory */ .k6)();

  var _useRouteMatch = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__/* .useRouteMatch */ .$B)(),
      url = _useRouteMatch.url;

  var redirectTo = function redirectTo(path) {
    history.push(path);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    type: "primary",
    style: {
      margin: 10
    },
    onClick: function onClick() {
      return redirectTo("".concat(url, "/add"));
    }
  }, "Add Coupons"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    style: {
      margin: 10
    },
    onClick: function onClick() {
      return redirectTo("".concat(url, "/edit"));
    }
  }, "Edit Coupons"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    type: "dashed",
    style: {
      margin: 10
    },
    onClick: function onClick() {
      return redirectTo("".concat(url, "/detail"));
    }
  }, "Detail Coupons"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_stateless_CustomSwitch__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, null, routes.map(function (route, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_stateless_RouteWithSubRoutes__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, _extends({
      key: i
    }, route));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Coupons);

/***/ })

}]);
//# sourceMappingURL=344.43fb204f260359c693b4.js.map