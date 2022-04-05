"use strict";
(self["webpackChunkpromotion_web"] = self["webpackChunkpromotion_web"] || []).push([[374,584],{

/***/ 5467:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ getDataOrAriaProps; }
/* harmony export */ });
function getDataOrAriaProps(props) {
  return Object.keys(props).reduce(function (prev, key) {
    if ((key.startsWith('data-') || key.startsWith('aria-') || key === 'role') && !key.startsWith('data-__')) {
      prev[key] = props[key];
    }

    return prev;
  }, {});
}

/***/ }),

/***/ 6772:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ es_alert; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(9439);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseOutlined.js + 1 modules
var CloseOutlined = __webpack_require__(4549);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CheckCircleOutlined.js + 1 modules
var CheckCircleOutlined = __webpack_require__(5873);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/ExclamationCircleOutlined.js + 1 modules
var ExclamationCircleOutlined = __webpack_require__(7119);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/InfoCircleOutlined.js + 1 modules
var InfoCircleOutlined = __webpack_require__(8628);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseCircleOutlined.js + 1 modules
var CloseCircleOutlined = __webpack_require__(1627);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js + 1 modules
var CheckCircleFilled = __webpack_require__(8819);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/ExclamationCircleFilled.js + 1 modules
var ExclamationCircleFilled = __webpack_require__(8855);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/InfoCircleFilled.js + 1 modules
var InfoCircleFilled = __webpack_require__(847);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js + 1 modules
var CloseCircleFilled = __webpack_require__(3061);
// EXTERNAL MODULE: ./node_modules/rc-motion/es/index.js + 11 modules
var es = __webpack_require__(3441);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js + 1 modules
var context = __webpack_require__(5632);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/getDataOrAriaProps.js
var getDataOrAriaProps = __webpack_require__(5467);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(3144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(136);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__(8557);
;// CONCATENATED MODULE: ./node_modules/antd/es/alert/ErrorBoundary.js







var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(ErrorBoundary, _React$Component);

  var _super = (0,createSuper/* default */.Z)(ErrorBoundary);

  function ErrorBoundary() {
    var _this;

    (0,classCallCheck/* default */.Z)(this, ErrorBoundary);

    _this = _super.apply(this, arguments);
    _this.state = {
      error: undefined,
      info: {
        componentStack: ''
      }
    };
    return _this;
  }

  (0,createClass/* default */.Z)(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      this.setState({
        error: error,
        info: info
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          message = _this$props.message,
          description = _this$props.description,
          children = _this$props.children;
      var _this$state = this.state,
          error = _this$state.error,
          info = _this$state.info;
      var componentStack = info && info.componentStack ? info.componentStack : null;
      var errorMessage = typeof message === 'undefined' ? (error || '').toString() : message;
      var errorDescription = typeof description === 'undefined' ? componentStack : description;

      if (error) {
        return /*#__PURE__*/react.createElement(es_alert, {
          type: "error",
          message: errorMessage,
          description: /*#__PURE__*/react.createElement("pre", null, errorDescription)
        });
      }

      return children;
    }
  }]);

  return ErrorBoundary;
}(react.Component);


// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(6159);
;// CONCATENATED MODULE: ./node_modules/antd/es/alert/index.js




var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

















var iconMapFilled = {
  success: CheckCircleFilled/* default */.Z,
  info: InfoCircleFilled/* default */.Z,
  error: CloseCircleFilled/* default */.Z,
  warning: ExclamationCircleFilled/* default */.Z
};
var iconMapOutlined = {
  success: CheckCircleOutlined/* default */.Z,
  info: InfoCircleOutlined/* default */.Z,
  error: CloseCircleOutlined/* default */.Z,
  warning: ExclamationCircleOutlined/* default */.Z
};

var Alert = function Alert(_a) {
  var _classNames2;

  var description = _a.description,
      customizePrefixCls = _a.prefixCls,
      message = _a.message,
      banner = _a.banner,
      _a$className = _a.className,
      className = _a$className === void 0 ? '' : _a$className,
      style = _a.style,
      onMouseEnter = _a.onMouseEnter,
      onMouseLeave = _a.onMouseLeave,
      onClick = _a.onClick,
      afterClose = _a.afterClose,
      showIcon = _a.showIcon,
      closable = _a.closable,
      closeText = _a.closeText,
      _a$closeIcon = _a.closeIcon,
      closeIcon = _a$closeIcon === void 0 ? /*#__PURE__*/react.createElement(CloseOutlined/* default */.Z, null) : _a$closeIcon,
      action = _a.action,
      props = __rest(_a, ["description", "prefixCls", "message", "banner", "className", "style", "onMouseEnter", "onMouseLeave", "onClick", "afterClose", "showIcon", "closable", "closeText", "closeIcon", "action"]);

  var _React$useState = react.useState(false),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      closed = _React$useState2[0],
      setClosed = _React$useState2[1];

  var ref = react.useRef();

  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var prefixCls = getPrefixCls('alert', customizePrefixCls);

  var handleClose = function handleClose(e) {
    var _a;

    setClosed(true);
    (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props, e);
  };

  var getType = function getType() {
    var type = props.type;

    if (type !== undefined) {
      return type;
    } // banner 模式默认为警告


    return banner ? 'warning' : 'info';
  }; // closeable when closeText is assigned


  var isClosable = closeText ? true : closable;
  var type = getType();

  var renderIconNode = function renderIconNode() {
    var icon = props.icon; // use outline icon in alert with description

    var iconType = (description ? iconMapOutlined : iconMapFilled)[type] || null;

    if (icon) {
      return (0,reactNode/* replaceElement */.wm)(icon, /*#__PURE__*/react.createElement("span", {
        className: "".concat(prefixCls, "-icon")
      }, icon), function () {
        return {
          className: classnames_default()("".concat(prefixCls, "-icon"), (0,defineProperty/* default */.Z)({}, icon.props.className, icon.props.className))
        };
      });
    }

    return /*#__PURE__*/react.createElement(iconType, {
      className: "".concat(prefixCls, "-icon")
    });
  };

  var renderCloseIcon = function renderCloseIcon() {
    return isClosable ? /*#__PURE__*/react.createElement("button", {
      type: "button",
      onClick: handleClose,
      className: "".concat(prefixCls, "-close-icon"),
      tabIndex: 0
    }, closeText ? /*#__PURE__*/react.createElement("span", {
      className: "".concat(prefixCls, "-close-text")
    }, closeText) : closeIcon) : null;
  }; // banner 模式默认有 Icon


  var isShowIcon = banner && showIcon === undefined ? true : showIcon;
  var alertCls = classnames_default()(prefixCls, "".concat(prefixCls, "-").concat(type), (_classNames2 = {}, (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-with-description"), !!description), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-no-icon"), !isShowIcon), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-banner"), !!banner), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames2), className);
  var dataOrAriaProps = (0,getDataOrAriaProps/* default */.Z)(props);
  return /*#__PURE__*/react.createElement(es/* default */.Z, {
    visible: !closed,
    motionName: "".concat(prefixCls, "-motion"),
    motionAppear: false,
    motionEnter: false,
    onLeaveStart: function onLeaveStart(node) {
      return {
        maxHeight: node.offsetHeight
      };
    },
    onLeaveEnd: afterClose
  }, function (_ref) {
    var motionClassName = _ref.className,
        motionStyle = _ref.style;
    return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
      ref: ref,
      "data-show": !closed,
      className: classnames_default()(alertCls, motionClassName),
      style: (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, style), motionStyle),
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onClick: onClick,
      role: "alert"
    }, dataOrAriaProps), isShowIcon ? renderIconNode() : null, /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-content")
    }, message ? /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-message")
    }, message) : null, description ? /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-description")
    }, description) : null), action ? /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-action")
    }, action) : null, renderCloseIcon());
  });
};

Alert.ErrorBoundary = ErrorBoundary;
/* harmony default export */ var es_alert = (Alert);

/***/ }),

/***/ 9485:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ./node_modules/antd/es/style/default.less
var style_default = __webpack_require__(5608);
;// CONCATENATED MODULE: ./node_modules/antd/es/alert/style/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/antd/es/alert/style/index.js



/***/ }),

/***/ 8163:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": function() { return /* binding */ useProTabContext; },
/* harmony export */   "n": function() { return /* binding */ ProTabProvider; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9439);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6974);
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3584);




var defaultValue = {
  activeKey: '',
  setActiveKey: function setActiveKey() {},
  panes: [],
  setPanes: function setPanes() {},
  removeTab: function removeTab() {}
};
var initialPanes = [{
  title: '首页',
  key: '/',
  content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_home__WEBPACK_IMPORTED_MODULE_1__["default"], null),
  closable: false,
  path: '/'
}];
var ProTabContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultValue);

var useProTabContext = function useProTabContext() {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ProTabContext);

  if (context === undefined) {
    throw new Error('useValue must be used within a ValueProvider');
  }

  return context;
};

var ProTabProvider = function ProTabProvider(_ref) {
  var children = _ref.children;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_useState, 2),
      activeKey = _useState2[0],
      setActiveKey = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialPanes),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_useState3, 2),
      panes = _useState4[0],
      setPanes = _useState4[1];

  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__/* .useNavigate */ .s0)();
  var removeTab = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (targetKey) {
    var callbackFun = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
    var delIndex = panes.findIndex(function (item) {
      return item.key === targetKey;
    });
    var filterPanes = panes.filter(function (pane) {
      return pane.key !== targetKey;
    }); // 删除非当前/当前tab

    if (targetKey !== activeKey) {
      setPanes(filterPanes);
    } else {
      var nextPath = filterPanes[delIndex - 1].key;
      navigate(nextPath);
      setActiveKey(nextPath);
      setPanes(filterPanes);
    }

    callbackFun();
  }, [activeKey, panes, navigate]);
  var providerValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      activeKey: activeKey,
      setActiveKey: setActiveKey,
      panes: panes,
      setPanes: setPanes,
      removeTab: removeTab
    };
  }, [activeKey, setActiveKey, panes, setPanes, removeTab]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ProTabContext.Provider, {
    value: providerValue
  }, children));
};



/***/ }),

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

/***/ 8374:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_alert_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9485);
/* harmony import */ var antd_es_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6772);
/* harmony import */ var antd_es_button_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8385);
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(404);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7294);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6974);
/* harmony import */ var _stateless_FixTabPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3994);
/* harmony import */ var _hooks_proTabsContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8163);









var AddCoupons = function AddCoupons() {
  var _useProTabContext = (0,_hooks_proTabsContext__WEBPACK_IMPORTED_MODULE_4__/* .useProTabContext */ .A)(),
      activeKey = _useProTabContext.activeKey,
      removeTab = _useProTabContext.removeTab;

  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__/* .useNavigate */ .s0)();

  var closeActiveOpenAngular = function closeActiveOpenAngular() {
    removeTab(activeKey, function () {
      navigate('coupons/edit', {
        replace: true
      });
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_stateless_FixTabPanel__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    type: "link",
    onClick: closeActiveOpenAngular
  }, "\u5173\u95ED\u5F53\u524D\u6807\u7B7E \u5E76\u6253\u5F00 Angular\u6807\u7B7E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(antd_es_alert__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    message: "Success Tips",
    description: "Detailed description and advice about successful copywriting.",
    type: "success",
    showIcon: true
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AddCoupons);

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
//# sourceMappingURL=374.cb1053ee1dc9e510ac6f.js.map