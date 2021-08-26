"use strict";
(self["webpackChunkpromotion_web"] = self["webpackChunkpromotion_web"] || []).push([[194],{

/***/ 4194:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ basis; }
});

// EXTERNAL MODULE: ./node_modules/antd/es/layout/style/index.js + 1 modules
var style = __webpack_require__(5278);
// EXTERNAL MODULE: ./node_modules/antd/es/layout/index.js
var layout = __webpack_require__(7183);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/pages/layout/proHeader/index.js + 13 modules
var proHeader = __webpack_require__(1436);
// EXTERNAL MODULE: ./src/pages/layout/proSider/index.js + 5 modules
var proSider = __webpack_require__(785);
// EXTERNAL MODULE: ./src/pages/layout/proContent/index.js + 19 modules
var proContent = __webpack_require__(5155);
// EXTERNAL MODULE: ./node_modules/antd/es/menu/style/index.js + 1 modules
var menu_style = __webpack_require__(582);
// EXTERNAL MODULE: ./node_modules/antd/es/menu/index.js + 3 modules
var menu = __webpack_require__(9210);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(5977);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/HomeOutlined.js + 1 modules
var HomeOutlined = __webpack_require__(9271);
;// CONCATENATED MODULE: ./src/pages/layout/actSecNav/index.module.less
// extracted by mini-css-extract-plugin
/* harmony default export */ var index_module = ({"menu":"pages-layout-actSecNav-index-module__menu--1qhpN"});
;// CONCATENATED MODULE: ./src/pages/layout/actSecNav/index.js







var ActSecNav = function ActSecNav() {
  var history = (0,react_router/* useHistory */.k6)();

  var redirectTo = function redirectTo(path) {
    history.push(path);
  };

  return /*#__PURE__*/react.createElement(menu/* default */.Z, {
    mode: "inline",
    defaultSelectedKeys: ['11'],
    defaultOpenKeys: ['sub1'],
    theme: "dark",
    className: index_module.menu
  }, /*#__PURE__*/react.createElement(menu/* default.SubMenu */.Z.SubMenu, {
    key: "sub1",
    icon: /*#__PURE__*/react.createElement(HomeOutlined/* default */.Z, null),
    title: "\u6D3B\u52A8\u57FA\u7840\u7EC4\u4EF6\u5E93"
  }, /*#__PURE__*/react.createElement(menu/* default.Item */.Z.Item, {
    key: "21",
    onClick: function onClick() {
      return redirectTo('/basis/deduct');
    }
  }, "\u4FC3\u9500\u6263\u6B3E"), /*#__PURE__*/react.createElement(menu/* default.Item */.Z.Item, {
    key: "31",
    onClick: function onClick() {
      return redirectTo('/basis/audiences');
    }
  }, "\u53D7\u4F17\u8303\u56F4"), /*#__PURE__*/react.createElement(menu/* default.Item */.Z.Item, {
    key: "41",
    onClick: function onClick() {
      return redirectTo('/basis/commodity');
    }
  }, "\u5546\u54C1\u8303\u56F4"), /*#__PURE__*/react.createElement(menu/* default.Item */.Z.Item, {
    key: "51",
    onClick: function onClick() {
      return redirectTo('/basis/exclude');
    }
  }, "\u5546\u54C1\u5217\u8868")));
};

/* harmony default export */ var actSecNav = (ActSecNav);
;// CONCATENATED MODULE: ./src/pages/basis/index.module.less
// extracted by mini-css-extract-plugin
/* harmony default export */ var basis_index_module = ({"layout":"pages-basis-index-module__layout--3AysM"});
;// CONCATENATED MODULE: ./src/pages/basis/index.js









var BasicComponents = function BasicComponents(_ref) {
  var _ref$routes = _ref.routes,
      routes = _ref$routes === void 0 ? [] : _ref$routes;
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(layout/* default */.Z, {
    className: basis_index_module.layout
  }, /*#__PURE__*/react.createElement(proHeader/* default */.Z, null), /*#__PURE__*/react.createElement(layout/* default */.Z, {
    className: basis_index_module.layout
  }, /*#__PURE__*/react.createElement(proSider/* default */.Z, null, /*#__PURE__*/react.createElement(actSecNav, null)), /*#__PURE__*/react.createElement(proContent/* default */.Z, {
    routes: routes
  }))));
};

/* harmony default export */ var basis = (BasicComponents);

/***/ })

}]);
//# sourceMappingURL=194.150725868db4f0ed89ab.js.map