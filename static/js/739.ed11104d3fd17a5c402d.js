"use strict";
(self["webpackChunkpromotion_web"] = self["webpackChunkpromotion_web"] || []).push([[739],{

/***/ 7739:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ signup; }
});

// EXTERNAL MODULE: ./node_modules/antd/es/button/style/index.js + 1 modules
var style = __webpack_require__(8385);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js + 4 modules
var es_button = __webpack_require__(404);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/antd/es/checkbox/style/index.js + 1 modules
var checkbox_style = __webpack_require__(3116);
// EXTERNAL MODULE: ./node_modules/antd/es/checkbox/index.js + 2 modules
var es_checkbox = __webpack_require__(9676);
// EXTERNAL MODULE: ./node_modules/antd/es/form/style/index.js + 3 modules
var form_style = __webpack_require__(7696);
// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 16 modules
var es_form = __webpack_require__(6571);
// EXTERNAL MODULE: ./node_modules/antd/es/input/style/index.js + 1 modules
var input_style = __webpack_require__(9113);
// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 16 modules
var input = __webpack_require__(2884);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-router/index.js
var react_router = __webpack_require__(6974);
;// CONCATENATED MODULE: ./src/pages/signup/index.module.less
// extracted by mini-css-extract-plugin
/* harmony default export */ var index_module = ({"container":"pages-signup-index-module__container--MCdGZ"});
;// CONCATENATED MODULE: ./src/pages/signup/index.js












var layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
var tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
};

var SignUp = function SignUp() {
  var onFinish = function onFinish(values) {};

  var onFinishFailed = function onFinishFailed(errorInfo) {};

  var navigate = (0,react_router/* useNavigate */.s0)();

  var redirectTo = function redirectTo(path) {
    navigate(path);
  };

  return /*#__PURE__*/react.createElement("div", {
    className: index_module.container
  }, /*#__PURE__*/react.createElement(es_form/* default */.Z, (0,esm_extends/* default */.Z)({}, layout, {
    name: "basic",
    initialValues: {
      remember: true
    },
    onFinish: onFinish,
    onFinishFailed: onFinishFailed
  }), /*#__PURE__*/react.createElement(es_form/* default.Item */.Z.Item, {
    label: "Username",
    name: "username",
    rules: [{
      required: true,
      message: 'Please input your username!'
    }]
  }, /*#__PURE__*/react.createElement(input/* default */.Z, null)), /*#__PURE__*/react.createElement(es_form/* default.Item */.Z.Item, {
    label: "Password",
    name: "password",
    rules: [{
      required: true,
      message: 'Please input your password!'
    }]
  }, /*#__PURE__*/react.createElement(input/* default.Password */.Z.Password, null)), /*#__PURE__*/react.createElement(es_form/* default.Item */.Z.Item, (0,esm_extends/* default */.Z)({}, tailLayout, {
    name: "remember",
    valuePropName: "checked"
  }), /*#__PURE__*/react.createElement(es_checkbox/* default */.Z, null, "Remember me")), /*#__PURE__*/react.createElement(es_form/* default.Item */.Z.Item, tailLayout, /*#__PURE__*/react.createElement(es_button/* default */.Z, {
    type: "primary",
    onClick: function onClick() {
      return redirectTo('/');
    }
  }, "Sign up"))));
};

/* harmony default export */ var signup = (SignUp);

/***/ })

}]);
//# sourceMappingURL=739.ed11104d3fd17a5c402d.js.map