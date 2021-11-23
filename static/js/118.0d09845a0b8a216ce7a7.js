"use strict";
(self["webpackChunkpromotion_web"] = self["webpackChunkpromotion_web"] || []).push([[118],{

/***/ 8118:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ signin; }
});

// EXTERNAL MODULE: ./node_modules/antd/es/button/style/index.js + 1 modules
var style = __webpack_require__(8385);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js + 4 modules
var es_button = __webpack_require__(404);
// EXTERNAL MODULE: ./node_modules/antd/es/checkbox/style/index.js + 1 modules
var checkbox_style = __webpack_require__(3116);
// EXTERNAL MODULE: ./node_modules/antd/es/checkbox/index.js + 3 modules
var es_checkbox = __webpack_require__(371);
// EXTERNAL MODULE: ./node_modules/antd/es/form/style/index.js + 3 modules
var form_style = __webpack_require__(7696);
// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 19 modules
var es_form = __webpack_require__(1190);
// EXTERNAL MODULE: ./node_modules/antd/es/input/style/index.js + 1 modules
var input_style = __webpack_require__(9113);
// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 12 modules
var input = __webpack_require__(924);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-router-dom/node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(5168);
;// CONCATENATED MODULE: ./src/pages/signin/index.module.less
// extracted by mini-css-extract-plugin
/* harmony default export */ var index_module = ({"container":"pages-signin-index-module__container--zKj1J"});
;// CONCATENATED MODULE: ./src/pages/signin/index.js









function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




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

var SignIn = function SignIn() {
  var onFinish = function onFinish(values) {};

  var onFinishFailed = function onFinishFailed(errorInfo) {};

  var history = (0,react_router/* useHistory */.k6)();

  var redirectTo = function redirectTo(path) {
    history.push(path);
  };

  return /*#__PURE__*/react.createElement("div", {
    className: index_module.container
  }, /*#__PURE__*/react.createElement(es_form/* default */.Z, _extends({}, layout, {
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
  }, /*#__PURE__*/react.createElement(input/* default.Password */.Z.Password, null)), /*#__PURE__*/react.createElement(es_form/* default.Item */.Z.Item, _extends({}, tailLayout, {
    name: "remember",
    valuePropName: "checked"
  }), /*#__PURE__*/react.createElement(es_checkbox/* default */.Z, null, "Remember me")), /*#__PURE__*/react.createElement(es_form/* default.Item */.Z.Item, tailLayout, /*#__PURE__*/react.createElement(es_button/* default */.Z, {
    type: "primary",
    onClick: function onClick() {
      return redirectTo('/');
    }
  }, "Sign in"))));
};

/* harmony default export */ var signin = (SignIn);

/***/ })

}]);
//# sourceMappingURL=118.0d09845a0b8a216ce7a7.js.map