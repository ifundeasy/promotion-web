(self["webpackChunkpromotion_web"] = self["webpackChunkpromotion_web"] || []).push([[970,996],{

/***/ 6165:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1413);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4942);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4925);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3017);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1755);



var _excluded = ["className", "component", "viewBox", "spin", "rotate", "tabIndex", "onClick", "children"];




var Icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var className = props.className,
      Component = props.component,
      viewBox = props.viewBox,
      spin = props.spin,
      rotate = props.rotate,
      tabIndex = props.tabIndex,
      onClick = props.onClick,
      children = props.children,
      restProps = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(props, _excluded);

  (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .warning */ .Kp)(Boolean(Component || children), 'Should have `component` prop or `children`.');
  (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .useInsertStyles */ .C3)();

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_Context__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z),
      _React$useContext$pre = _React$useContext.prefixCls,
      prefixCls = _React$useContext$pre === void 0 ? 'anticon' : _React$useContext$pre;

  var classString = classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefixCls, className);
  var svgClassString = classnames__WEBPACK_IMPORTED_MODULE_1___default()((0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({}, "".concat(prefixCls, "-spin"), !!spin));
  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : undefined;

  var innerSvgProps = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({}, _utils__WEBPACK_IMPORTED_MODULE_3__/* .svgBaseProps */ .vD), {}, {
    className: svgClassString,
    style: svgStyle,
    viewBox: viewBox
  });

  if (!viewBox) {
    delete innerSvgProps.viewBox;
  } // component > children


  var renderInnerNode = function renderInnerNode() {
    if (Component) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({}, innerSvgProps), children);
    }

    if (children) {
      (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .warning */ .Kp)(Boolean(viewBox) || react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children) === 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children) && react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children).type === 'use', 'Make sure that you provide correct `viewBox`' + ' prop (default `0 0 1024 1024`) to the icon.');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({}, innerSvgProps), {}, {
        viewBox: viewBox
      }), children);
    }

    return null;
  };

  var iconTabIndex = tabIndex;

  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({
    role: "img"
  }, restProps), {}, {
    ref: ref,
    tabIndex: iconTabIndex,
    onClick: onClick,
    className: classString
  }), renderInnerNode());
});
Icon.displayName = 'AntdIcon';
/* harmony default export */ __webpack_exports__["Z"] = (Icon);

/***/ }),

/***/ 7254:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ icons_DownOutlined; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/DownOutlined.js
// This icon file is generated automatically.
var DownOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, "name": "down", "theme": "outlined" };
/* harmony default export */ var asn_DownOutlined = (DownOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 2 modules
var AntdIcon = __webpack_require__(7029);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/DownOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var DownOutlined_DownOutlined = function DownOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_DownOutlined
  }));
};

DownOutlined_DownOutlined.displayName = 'DownOutlined';
/* harmony default export */ var icons_DownOutlined = (/*#__PURE__*/react.forwardRef(DownOutlined_DownOutlined));

/***/ }),

/***/ 7724:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ icons_LeftOutlined; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/LeftOutlined.js
// This icon file is generated automatically.
var LeftOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" } }] }, "name": "left", "theme": "outlined" };
/* harmony default export */ var asn_LeftOutlined = (LeftOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 2 modules
var AntdIcon = __webpack_require__(7029);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/LeftOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var LeftOutlined_LeftOutlined = function LeftOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_LeftOutlined
  }));
};

LeftOutlined_LeftOutlined.displayName = 'LeftOutlined';
/* harmony default export */ var icons_LeftOutlined = (/*#__PURE__*/react.forwardRef(LeftOutlined_LeftOutlined));

/***/ }),

/***/ 8812:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ icons_RightOutlined; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/RightOutlined.js
// This icon file is generated automatically.
var RightOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" } }] }, "name": "right", "theme": "outlined" };
/* harmony default export */ var asn_RightOutlined = (RightOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 2 modules
var AntdIcon = __webpack_require__(7029);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/RightOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var RightOutlined_RightOutlined = function RightOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_RightOutlined
  }));
};

RightOutlined_RightOutlined.displayName = 'RightOutlined';
/* harmony default export */ var icons_RightOutlined = (/*#__PURE__*/react.forwardRef(RightOutlined_RightOutlined));

/***/ }),

/***/ 5467:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ getDataOrAriaProps; }
/* harmony export */ });
function getDataOrAriaProps(props) {
  return Object.keys(props).reduce(function (prev, key) {
    if ((key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-' || key === 'role') && key.substr(0, 7) !== 'data-__') {
      prev[key] = props[key];
    }

    return prev;
  }, {});
}

/***/ }),

/***/ 6367:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": function() { return /* binding */ isWindow; },
/* harmony export */   "Z": function() { return /* binding */ getScroll; }
/* harmony export */ });
function isWindow(obj) {
  return obj !== null && obj !== undefined && obj === obj.window;
}
function getScroll(target, top) {
  var _a;

  if (typeof window === 'undefined') {
    return 0;
  }

  var method = top ? 'scrollTop' : 'scrollLeft';
  var result = 0;

  if (isWindow(target)) {
    result = target[top ? 'pageYOffset' : 'pageXOffset'];
  } else if (target instanceof Document) {
    result = target.documentElement[method];
  } else if (target) {
    result = target[method];
  }

  if (target && !isWindow(target) && typeof result !== 'number') {
    result = (_a = (target.ownerDocument || target).documentElement) === null || _a === void 0 ? void 0 : _a[method];
  }

  return result;
}

/***/ }),

/***/ 6148:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ scrollTo; }
});

// EXTERNAL MODULE: ./node_modules/rc-util/es/raf.js
var raf = __webpack_require__(5164);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/getScroll.js
var getScroll = __webpack_require__(6367);
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/easings.js
// eslint-disable-next-line import/prefer-default-export
function easeInOutCubic(t, b, c, d) {
  var cc = c - b;
  t /= d / 2;

  if (t < 1) {
    return cc / 2 * t * t * t + b;
  } // eslint-disable-next-line no-return-assign


  return cc / 2 * ((t -= 2) * t * t + 2) + b;
}
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/scrollTo.js



function scrollTo(y) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$getContainer = options.getContainer,
      getContainer = _options$getContainer === void 0 ? function () {
    return window;
  } : _options$getContainer,
      callback = options.callback,
      _options$duration = options.duration,
      duration = _options$duration === void 0 ? 450 : _options$duration;
  var container = getContainer();
  var scrollTop = (0,getScroll/* default */.Z)(container, true);
  var startTime = Date.now();

  var frameFunc = function frameFunc() {
    var timestamp = Date.now();
    var time = timestamp - startTime;
    var nextScrollTop = easeInOutCubic(time > duration ? duration : time, scrollTop, y, duration);

    if ((0,getScroll/* isWindow */.F)(container)) {
      container.scrollTo(window.pageXOffset, nextScrollTop);
    } else if (container instanceof HTMLDocument || container.constructor.name === 'HTMLDocument') {
      container.documentElement.scrollTop = nextScrollTop;
    } else {
      container.scrollTop = nextScrollTop;
    }

    if (time < duration) {
      (0,raf/* default */.Z)(frameFunc);
    } else if (typeof callback === 'function') {
      callback();
    }
  };

  (0,raf/* default */.Z)(frameFunc);
}

/***/ }),

/***/ 6772:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

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
// EXTERNAL MODULE: ./node_modules/rc-motion/es/index.js + 12 modules
var es = __webpack_require__(444);
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
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(9340);
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

"use strict";

// EXTERNAL MODULE: ./node_modules/antd/es/style/default.less
var style_default = __webpack_require__(5608);
;// CONCATENATED MODULE: ./node_modules/antd/es/alert/style/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/antd/es/alert/style/index.js



/***/ }),

/***/ 1555:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ dropdown; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/rc-dropdown/es/index.js + 2 modules
var es = __webpack_require__(271);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/RightOutlined.js + 1 modules
var RightOutlined = __webpack_require__(8812);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(9439);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/EllipsisOutlined.js + 1 modules
var EllipsisOutlined = __webpack_require__(4545);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js + 4 modules
var es_button = __webpack_require__(404);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js + 1 modules
var context = __webpack_require__(5632);
;// CONCATENATED MODULE: ./node_modules/antd/es/dropdown/dropdown-button.js



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







var ButtonGroup = es_button/* default.Group */.Z.Group;

var DropdownButton = function DropdownButton(props) {
  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
      getContextPopupContainer = _React$useContext.getPopupContainer,
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var customizePrefixCls = props.prefixCls,
      _props$type = props.type,
      type = _props$type === void 0 ? 'default' : _props$type,
      disabled = props.disabled,
      loading = props.loading,
      onClick = props.onClick,
      htmlType = props.htmlType,
      children = props.children,
      className = props.className,
      overlay = props.overlay,
      trigger = props.trigger,
      align = props.align,
      visible = props.visible,
      onVisibleChange = props.onVisibleChange,
      placement = props.placement,
      getPopupContainer = props.getPopupContainer,
      href = props.href,
      _props$icon = props.icon,
      icon = _props$icon === void 0 ? /*#__PURE__*/react.createElement(EllipsisOutlined/* default */.Z, null) : _props$icon,
      title = props.title,
      _props$buttonsRender = props.buttonsRender,
      buttonsRender = _props$buttonsRender === void 0 ? function (buttons) {
    return buttons;
  } : _props$buttonsRender,
      mouseEnterDelay = props.mouseEnterDelay,
      mouseLeaveDelay = props.mouseLeaveDelay,
      overlayClassName = props.overlayClassName,
      overlayStyle = props.overlayStyle,
      destroyPopupOnHide = props.destroyPopupOnHide,
      restProps = __rest(props, ["prefixCls", "type", "disabled", "loading", "onClick", "htmlType", "children", "className", "overlay", "trigger", "align", "visible", "onVisibleChange", "placement", "getPopupContainer", "href", "icon", "title", "buttonsRender", "mouseEnterDelay", "mouseLeaveDelay", "overlayClassName", "overlayStyle", "destroyPopupOnHide"]);

  var prefixCls = getPrefixCls('dropdown-button', customizePrefixCls);
  var dropdownProps = {
    align: align,
    overlay: overlay,
    disabled: disabled,
    trigger: disabled ? [] : trigger,
    onVisibleChange: onVisibleChange,
    getPopupContainer: getPopupContainer || getContextPopupContainer,
    mouseEnterDelay: mouseEnterDelay,
    mouseLeaveDelay: mouseLeaveDelay,
    overlayClassName: overlayClassName,
    overlayStyle: overlayStyle,
    destroyPopupOnHide: destroyPopupOnHide
  };

  if ('visible' in props) {
    dropdownProps.visible = visible;
  }

  if ('placement' in props) {
    dropdownProps.placement = placement;
  } else {
    dropdownProps.placement = direction === 'rtl' ? 'bottomLeft' : 'bottomRight';
  }

  var leftButton = /*#__PURE__*/react.createElement(es_button/* default */.Z, {
    type: type,
    disabled: disabled,
    loading: loading,
    onClick: onClick,
    htmlType: htmlType,
    href: href,
    title: title
  }, children);
  var rightButton = /*#__PURE__*/react.createElement(es_button/* default */.Z, {
    type: type,
    icon: icon
  });

  var _buttonsRender = buttonsRender([leftButton, rightButton]),
      _buttonsRender2 = (0,slicedToArray/* default */.Z)(_buttonsRender, 2),
      leftButtonToRender = _buttonsRender2[0],
      rightButtonToRender = _buttonsRender2[1];

  return /*#__PURE__*/react.createElement(ButtonGroup, (0,esm_extends/* default */.Z)({}, restProps, {
    className: classnames_default()(prefixCls, className)
  }), leftButtonToRender, /*#__PURE__*/react.createElement(dropdown, dropdownProps, rightButtonToRender));
};

DropdownButton.__ANT_BUTTON = true;
/* harmony default export */ var dropdown_button = (DropdownButton);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/devWarning.js
var devWarning = __webpack_require__(1687);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/type.js
var type = __webpack_require__(3355);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(6159);
;// CONCATENATED MODULE: ./node_modules/antd/es/dropdown/dropdown.js











var Placements = (0,type/* tuple */.b)('topLeft', 'topCenter', 'topRight', 'bottomLeft', 'bottomCenter', 'bottomRight');

var Dropdown = function Dropdown(props) {
  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
      getContextPopupContainer = _React$useContext.getPopupContainer,
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var getTransitionName = function getTransitionName() {
    var rootPrefixCls = getPrefixCls();
    var _props$placement = props.placement,
        placement = _props$placement === void 0 ? '' : _props$placement,
        transitionName = props.transitionName;

    if (transitionName !== undefined) {
      return transitionName;
    }

    if (placement.indexOf('top') >= 0) {
      return "".concat(rootPrefixCls, "-slide-down");
    }

    return "".concat(rootPrefixCls, "-slide-up");
  };

  var renderOverlay = function renderOverlay(prefixCls) {
    // rc-dropdown already can process the function of overlay, but we have check logic here.
    // So we need render the element to check and pass back to rc-dropdown.
    var overlay = props.overlay;
    var overlayNode;

    if (typeof overlay === 'function') {
      overlayNode = overlay();
    } else {
      overlayNode = overlay;
    }

    overlayNode = react.Children.only(typeof overlayNode === 'string' ? /*#__PURE__*/react.createElement("span", null, overlayNode) : overlayNode);
    var overlayProps = overlayNode.props; // Warning if use other mode

    (0,devWarning/* default */.Z)(!overlayProps.mode || overlayProps.mode === 'vertical', 'Dropdown', "mode=\"".concat(overlayProps.mode, "\" is not supported for Dropdown's Menu.")); // menu cannot be selectable in dropdown defaultly

    var _overlayProps$selecta = overlayProps.selectable,
        selectable = _overlayProps$selecta === void 0 ? false : _overlayProps$selecta,
        expandIcon = overlayProps.expandIcon;
    var overlayNodeExpandIcon = typeof expandIcon !== 'undefined' && /*#__PURE__*/react.isValidElement(expandIcon) ? expandIcon : /*#__PURE__*/react.createElement("span", {
      className: "".concat(prefixCls, "-menu-submenu-arrow")
    }, /*#__PURE__*/react.createElement(RightOutlined/* default */.Z, {
      className: "".concat(prefixCls, "-menu-submenu-arrow-icon")
    }));
    var fixedModeOverlay = typeof overlayNode.type === 'string' ? overlayNode : (0,reactNode/* cloneElement */.Tm)(overlayNode, {
      mode: 'vertical',
      selectable: selectable,
      expandIcon: overlayNodeExpandIcon
    });
    return fixedModeOverlay;
  };

  var getPlacement = function getPlacement() {
    var placement = props.placement;

    if (placement !== undefined) {
      return placement;
    }

    return direction === 'rtl' ? 'bottomRight' : 'bottomLeft';
  };

  var arrow = props.arrow,
      customizePrefixCls = props.prefixCls,
      children = props.children,
      trigger = props.trigger,
      disabled = props.disabled,
      getPopupContainer = props.getPopupContainer,
      overlayClassName = props.overlayClassName;
  var prefixCls = getPrefixCls('dropdown', customizePrefixCls);
  var child = react.Children.only(children);
  var dropdownTrigger = (0,reactNode/* cloneElement */.Tm)(child, {
    className: classnames_default()("".concat(prefixCls, "-trigger"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'), child.props.className),
    disabled: disabled
  });
  var overlayClassNameCustomized = classnames_default()(overlayClassName, (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'));
  var triggerActions = disabled ? [] : trigger;
  var alignPoint;

  if (triggerActions && triggerActions.indexOf('contextMenu') !== -1) {
    alignPoint = true;
  }

  return /*#__PURE__*/react.createElement(es/* default */.Z, (0,esm_extends/* default */.Z)({
    arrow: arrow,
    alignPoint: alignPoint
  }, props, {
    overlayClassName: overlayClassNameCustomized,
    prefixCls: prefixCls,
    getPopupContainer: getPopupContainer || getContextPopupContainer,
    transitionName: getTransitionName(),
    trigger: triggerActions,
    overlay: function overlay() {
      return renderOverlay(prefixCls);
    },
    placement: getPlacement()
  }), dropdownTrigger);
};

Dropdown.Button = dropdown_button;
Dropdown.defaultProps = {
  mouseEnterDelay: 0.15,
  mouseLeaveDelay: 0.1
};
/* harmony default export */ var dropdown = (Dropdown);

/***/ }),

/***/ 3013:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1555);

/* harmony default export */ __webpack_exports__["Z"] = (_dropdown__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

/***/ }),

/***/ 3605:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/antd/es/style/default.less
var style_default = __webpack_require__(5608);
;// CONCATENATED MODULE: ./node_modules/antd/es/dropdown/style/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/antd/es/button/style/index.js + 1 modules
var style = __webpack_require__(8385);
;// CONCATENATED MODULE: ./node_modules/antd/es/dropdown/style/index.js

 // style dependencies



/***/ }),

/***/ 4025:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "D": function() { return /* binding */ SiderContext; },
  "Z": function() { return /* binding */ layout_Sider; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(9439);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__(8423);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/BarsOutlined.js
// This icon file is generated automatically.
var BarsOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, "name": "bars", "theme": "outlined" };
/* harmony default export */ var asn_BarsOutlined = (BarsOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 2 modules
var AntdIcon = __webpack_require__(7029);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/BarsOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var BarsOutlined_BarsOutlined = function BarsOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_BarsOutlined
  }));
};

BarsOutlined_BarsOutlined.displayName = 'BarsOutlined';
/* harmony default export */ var icons_BarsOutlined = (/*#__PURE__*/react.forwardRef(BarsOutlined_BarsOutlined));
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/RightOutlined.js + 1 modules
var RightOutlined = __webpack_require__(8812);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/LeftOutlined.js + 1 modules
var LeftOutlined = __webpack_require__(7724);
// EXTERNAL MODULE: ./node_modules/antd/es/layout/layout.js
var layout = __webpack_require__(2897);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js + 1 modules
var context = __webpack_require__(5632);
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/isNumeric.js
var isNumeric = function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
};

/* harmony default export */ var _util_isNumeric = (isNumeric);
;// CONCATENATED MODULE: ./node_modules/antd/es/layout/Sider.js




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











var dimensionMaxMap = {
  xs: '479.98px',
  sm: '575.98px',
  md: '767.98px',
  lg: '991.98px',
  xl: '1199.98px',
  xxl: '1599.98px'
};
var SiderContext = /*#__PURE__*/react.createContext({});

var generateId = function () {
  var i = 0;
  return function () {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    i += 1;
    return "".concat(prefix).concat(i);
  };
}();

var Sider = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var customizePrefixCls = _a.prefixCls,
      className = _a.className,
      trigger = _a.trigger,
      children = _a.children,
      _a$defaultCollapsed = _a.defaultCollapsed,
      defaultCollapsed = _a$defaultCollapsed === void 0 ? false : _a$defaultCollapsed,
      _a$theme = _a.theme,
      theme = _a$theme === void 0 ? 'dark' : _a$theme,
      _a$style = _a.style,
      style = _a$style === void 0 ? {} : _a$style,
      _a$collapsible = _a.collapsible,
      collapsible = _a$collapsible === void 0 ? false : _a$collapsible,
      _a$reverseArrow = _a.reverseArrow,
      reverseArrow = _a$reverseArrow === void 0 ? false : _a$reverseArrow,
      _a$width = _a.width,
      width = _a$width === void 0 ? 200 : _a$width,
      _a$collapsedWidth = _a.collapsedWidth,
      collapsedWidth = _a$collapsedWidth === void 0 ? 80 : _a$collapsedWidth,
      zeroWidthTriggerStyle = _a.zeroWidthTriggerStyle,
      breakpoint = _a.breakpoint,
      onCollapse = _a.onCollapse,
      onBreakpoint = _a.onBreakpoint,
      props = __rest(_a, ["prefixCls", "className", "trigger", "children", "defaultCollapsed", "theme", "style", "collapsible", "reverseArrow", "width", "collapsedWidth", "zeroWidthTriggerStyle", "breakpoint", "onCollapse", "onBreakpoint"]);

  var _useContext = (0,react.useContext)(layout/* LayoutContext */.Gs),
      siderHook = _useContext.siderHook;

  var _useState = (0,react.useState)('collapsed' in props ? props.collapsed : defaultCollapsed),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      collapsed = _useState2[0],
      setCollapsed = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      below = _useState4[0],
      setBelow = _useState4[1];

  (0,react.useEffect)(function () {
    if ('collapsed' in props) {
      setCollapsed(props.collapsed);
    }
  }, [props.collapsed]);

  var handleSetCollapsed = function handleSetCollapsed(value, type) {
    if (!('collapsed' in props)) {
      setCollapsed(value);
    }

    onCollapse === null || onCollapse === void 0 ? void 0 : onCollapse(value, type);
  }; // ========================= Responsive =========================


  var responsiveHandlerRef = (0,react.useRef)();

  responsiveHandlerRef.current = function (mql) {
    setBelow(mql.matches);
    onBreakpoint === null || onBreakpoint === void 0 ? void 0 : onBreakpoint(mql.matches);

    if (collapsed !== mql.matches) {
      handleSetCollapsed(mql.matches, 'responsive');
    }
  };

  (0,react.useEffect)(function () {
    function responsiveHandler(mql) {
      return responsiveHandlerRef.current(mql);
    }

    var mql;

    if (typeof window !== 'undefined') {
      var _window = window,
          matchMedia = _window.matchMedia;

      if (matchMedia && breakpoint && breakpoint in dimensionMaxMap) {
        mql = matchMedia("(max-width: ".concat(dimensionMaxMap[breakpoint], ")"));

        try {
          mql.addEventListener('change', responsiveHandler);
        } catch (error) {
          mql.addListener(responsiveHandler);
        }

        responsiveHandler(mql);
      }
    }

    return function () {
      try {
        mql === null || mql === void 0 ? void 0 : mql.removeEventListener('change', responsiveHandler);
      } catch (error) {
        mql === null || mql === void 0 ? void 0 : mql.removeListener(responsiveHandler);
      }
    };
  }, []);
  (0,react.useEffect)(function () {
    var uniqueId = generateId('ant-sider-');
    siderHook.addSider(uniqueId);
    return function () {
      return siderHook.removeSider(uniqueId);
    };
  }, []);

  var toggle = function toggle() {
    handleSetCollapsed(!collapsed, 'clickTrigger');
  };

  var _useContext2 = (0,react.useContext)(context/* ConfigContext */.E_),
      getPrefixCls = _useContext2.getPrefixCls;

  var renderSider = function renderSider() {
    var _classNames;

    var prefixCls = getPrefixCls('layout-sider', customizePrefixCls);
    var divProps = (0,omit/* default */.Z)(props, ['collapsed']);
    var rawWidth = collapsed ? collapsedWidth : width; // use "px" as fallback unit for width

    var siderWidth = _util_isNumeric(rawWidth) ? "".concat(rawWidth, "px") : String(rawWidth); // special trigger when collapsedWidth == 0

    var zeroWidthTrigger = parseFloat(String(collapsedWidth || 0)) === 0 ? /*#__PURE__*/react.createElement("span", {
      onClick: toggle,
      className: classnames_default()("".concat(prefixCls, "-zero-width-trigger"), "".concat(prefixCls, "-zero-width-trigger-").concat(reverseArrow ? 'right' : 'left')),
      style: zeroWidthTriggerStyle
    }, trigger || /*#__PURE__*/react.createElement(icons_BarsOutlined, null)) : null;
    var iconObj = {
      expanded: reverseArrow ? /*#__PURE__*/react.createElement(RightOutlined/* default */.Z, null) : /*#__PURE__*/react.createElement(LeftOutlined/* default */.Z, null),
      collapsed: reverseArrow ? /*#__PURE__*/react.createElement(LeftOutlined/* default */.Z, null) : /*#__PURE__*/react.createElement(RightOutlined/* default */.Z, null)
    };
    var status = collapsed ? 'collapsed' : 'expanded';
    var defaultTrigger = iconObj[status];
    var triggerDom = trigger !== null ? zeroWidthTrigger || /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-trigger"),
      onClick: toggle,
      style: {
        width: siderWidth
      }
    }, trigger || defaultTrigger) : null;

    var divStyle = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, style), {
      flex: "0 0 ".concat(siderWidth),
      maxWidth: siderWidth,
      minWidth: siderWidth,
      width: siderWidth
    });

    var siderCls = classnames_default()(prefixCls, "".concat(prefixCls, "-").concat(theme), (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-collapsed"), !!collapsed), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-has-trigger"), collapsible && trigger !== null && !zeroWidthTrigger), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-below"), !!below), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-zero-width"), parseFloat(siderWidth) === 0), _classNames), className);
    return /*#__PURE__*/react.createElement("aside", (0,esm_extends/* default */.Z)({
      className: siderCls
    }, divProps, {
      style: divStyle,
      ref: ref
    }), /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-children")
    }, children), collapsible || below && zeroWidthTrigger ? triggerDom : null);
  };

  var contextValue = react.useMemo(function () {
    return {
      siderCollapsed: collapsed
    };
  }, [collapsed]);
  return /*#__PURE__*/react.createElement(SiderContext.Provider, {
    value: contextValue
  }, renderSider());
});
Sider.displayName = 'Sider';
/* harmony default export */ var layout_Sider = (Sider);

/***/ }),

/***/ 2897:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gs": function() { return /* binding */ LayoutContext; },
/* harmony export */   "h4": function() { return /* binding */ Header; },
/* harmony export */   "$_": function() { return /* binding */ Footer; },
/* harmony export */   "VY": function() { return /* binding */ Content; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3433);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4942);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9439);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7462);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5632);





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




var LayoutContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  siderHook: {
    addSider: function addSider() {
      return null;
    },
    removeSider: function removeSider() {
      return null;
    }
  }
});

function generator(_ref) {
  var suffixCls = _ref.suffixCls,
      tagName = _ref.tagName,
      displayName = _ref.displayName;
  return function (BasicComponent) {
    var Adapter = function Adapter(props) {
      var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_config_provider__WEBPACK_IMPORTED_MODULE_2__/* .ConfigContext */ .E_),
          getPrefixCls = _React$useContext.getPrefixCls;

      var customizePrefixCls = props.prefixCls;
      var prefixCls = getPrefixCls(suffixCls, customizePrefixCls);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BasicComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
        prefixCls: prefixCls,
        tagName: tagName
      }, props));
    };

    Adapter.displayName = displayName;
    return Adapter;
  };
}

var Basic = function Basic(props) {
  var prefixCls = props.prefixCls,
      className = props.className,
      children = props.children,
      tagName = props.tagName,
      others = __rest(props, ["prefixCls", "className", "children", "tagName"]);

  var classString = classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefixCls, className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(tagName, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
    className: classString
  }, others), children);
};

var BasicLayout = function BasicLayout(props) {
  var _classNames;

  var _React$useContext2 = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_config_provider__WEBPACK_IMPORTED_MODULE_2__/* .ConfigContext */ .E_),
      direction = _React$useContext2.direction;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState([]),
      _React$useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(_React$useState, 2),
      siders = _React$useState2[0],
      setSiders = _React$useState2[1];

  var prefixCls = props.prefixCls,
      className = props.className,
      children = props.children,
      hasSider = props.hasSider,
      Tag = props.tagName,
      others = __rest(props, ["prefixCls", "className", "children", "hasSider", "tagName"]);

  var classString = classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefixCls, (_classNames = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_classNames, "".concat(prefixCls, "-has-sider"), typeof hasSider === 'boolean' ? hasSider : siders.length > 0), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
  var contextValue = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
    return {
      siderHook: {
        addSider: function addSider(id) {
          setSiders(function (prev) {
            return [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(prev), [id]);
          });
        },
        removeSider: function removeSider(id) {
          setSiders(function (prev) {
            return prev.filter(function (currentId) {
              return currentId !== id;
            });
          });
        }
      }
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LayoutContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
    className: classString
  }, others), children));
};

var Layout = generator({
  suffixCls: 'layout',
  tagName: 'section',
  displayName: 'Layout'
})(BasicLayout);
var Header = generator({
  suffixCls: 'layout-header',
  tagName: 'header',
  displayName: 'Header'
})(Basic);
var Footer = generator({
  suffixCls: 'layout-footer',
  tagName: 'footer',
  displayName: 'Footer'
})(Basic);
var Content = generator({
  suffixCls: 'layout-content',
  tagName: 'main',
  displayName: 'Content'
})(Basic);

/* harmony default export */ __webpack_exports__["ZP"] = (Layout);

/***/ }),

/***/ 8838:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ menu; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(3144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(9340);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__(8557);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/rc-menu/es/index.js + 25 modules
var es = __webpack_require__(1688);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__(8423);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/EllipsisOutlined.js + 1 modules
var EllipsisOutlined = __webpack_require__(4545);
// EXTERNAL MODULE: ./node_modules/memoize-one/dist/memoize-one.esm.js
var memoize_one_esm = __webpack_require__(845);
;// CONCATENATED MODULE: ./node_modules/antd/es/menu/MenuContext.js

var MenuContext = /*#__PURE__*/(0,react.createContext)({
  prefixCls: '',
  firstLevel: true,
  inlineCollapsed: false
});
/* harmony default export */ var menu_MenuContext = (MenuContext);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(6159);
;// CONCATENATED MODULE: ./node_modules/antd/es/menu/SubMenu.js








function SubMenu(props) {
  var _a;

  var popupClassName = props.popupClassName,
      icon = props.icon,
      title = props.title;
  var context = react.useContext(menu_MenuContext);
  var prefixCls = context.prefixCls,
      inlineCollapsed = context.inlineCollapsed,
      antdMenuTheme = context.antdMenuTheme;
  var parentPath = (0,es/* useFullPath */.Xl)();
  var titleNode;

  if (!icon) {
    titleNode = inlineCollapsed && !parentPath.length && title && typeof title === 'string' ? /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-inline-collapsed-noicon")
    }, title.charAt(0)) : /*#__PURE__*/react.createElement("span", {
      className: "".concat(prefixCls, "-title-content")
    }, title);
  } else {
    // inline-collapsed.md demo 依赖 span 来隐藏文字,有 icon 属性，则内部包裹一个 span
    // ref: https://github.com/ant-design/ant-design/pull/23456
    var titleIsSpan = (0,reactNode/* isValidElement */.l$)(title) && title.type === 'span';
    titleNode = /*#__PURE__*/react.createElement(react.Fragment, null, (0,reactNode/* cloneElement */.Tm)(icon, {
      className: classnames_default()((0,reactNode/* isValidElement */.l$)(icon) ? (_a = icon.props) === null || _a === void 0 ? void 0 : _a.className : '', "".concat(prefixCls, "-item-icon"))
    }), titleIsSpan ? title : /*#__PURE__*/react.createElement("span", {
      className: "".concat(prefixCls, "-title-content")
    }, title));
  }

  var contextValue = react.useMemo(function () {
    return (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, context), {
      firstLevel: false
    });
  }, [context]);
  return /*#__PURE__*/react.createElement(menu_MenuContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/react.createElement(es/* SubMenu */.Wd, (0,esm_extends/* default */.Z)({}, (0,omit/* default */.Z)(props, ['icon']), {
    title: titleNode,
    popupClassName: classnames_default()(prefixCls, "".concat(prefixCls, "-").concat(antdMenuTheme), popupClassName)
  })));
}

/* harmony default export */ var menu_SubMenu = (SubMenu);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__(344);
// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js + 5 modules
var tooltip = __webpack_require__(9713);
// EXTERNAL MODULE: ./node_modules/antd/es/layout/Sider.js + 3 modules
var Sider = __webpack_require__(4025);
;// CONCATENATED MODULE: ./node_modules/antd/es/menu/MenuItem.js







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










var MenuItem = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(MenuItem, _React$Component);

  var _super = (0,createSuper/* default */.Z)(MenuItem);

  function MenuItem() {
    var _this;

    (0,classCallCheck/* default */.Z)(this, MenuItem);

    _this = _super.apply(this, arguments);

    _this.renderItem = function (_ref) {
      var _classNames;

      var siderCollapsed = _ref.siderCollapsed;

      var _a;

      var _this$context = _this.context,
          prefixCls = _this$context.prefixCls,
          firstLevel = _this$context.firstLevel,
          inlineCollapsed = _this$context.inlineCollapsed,
          direction = _this$context.direction,
          disableMenuItemTitleTooltip = _this$context.disableMenuItemTitleTooltip;
      var _this$props = _this.props,
          className = _this$props.className,
          children = _this$props.children;

      var _b = _this.props,
          title = _b.title,
          icon = _b.icon,
          danger = _b.danger,
          rest = __rest(_b, ["title", "icon", "danger"]);

      var tooltipTitle = title;

      if (typeof title === 'undefined') {
        tooltipTitle = firstLevel ? children : '';
      } else if (title === false) {
        tooltipTitle = '';
      }

      var tooltipProps = {
        title: tooltipTitle
      };

      if (!siderCollapsed && !inlineCollapsed) {
        tooltipProps.title = null; // Reset `visible` to fix control mode tooltip display not correct
        // ref: https://github.com/ant-design/ant-design/issues/16742

        tooltipProps.visible = false;
      }

      var childrenLength = (0,toArray/* default */.Z)(children).length;
      var returnNode = /*#__PURE__*/react.createElement(es/* Item */.ck, (0,esm_extends/* default */.Z)({}, rest, {
        className: classnames_default()((_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-item-danger"), danger), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-item-only-child"), (icon ? childrenLength + 1 : childrenLength) === 1), _classNames), className),
        title: typeof title === 'string' ? title : undefined
      }), (0,reactNode/* cloneElement */.Tm)(icon, {
        className: classnames_default()((0,reactNode/* isValidElement */.l$)(icon) ? (_a = icon.props) === null || _a === void 0 ? void 0 : _a.className : '', "".concat(prefixCls, "-item-icon"))
      }), _this.renderItemChildren(inlineCollapsed));

      if (!disableMenuItemTitleTooltip) {
        returnNode = /*#__PURE__*/react.createElement(tooltip/* default */.Z, (0,esm_extends/* default */.Z)({}, tooltipProps, {
          placement: direction === 'rtl' ? 'left' : 'right',
          overlayClassName: "".concat(prefixCls, "-inline-collapsed-tooltip")
        }), returnNode);
      }

      return returnNode;
    };

    return _this;
  }

  (0,createClass/* default */.Z)(MenuItem, [{
    key: "renderItemChildren",
    value: function renderItemChildren(inlineCollapsed) {
      var _this$context2 = this.context,
          prefixCls = _this$context2.prefixCls,
          firstLevel = _this$context2.firstLevel;
      var _this$props2 = this.props,
          icon = _this$props2.icon,
          children = _this$props2.children;
      var wrapNode = /*#__PURE__*/react.createElement("span", {
        className: "".concat(prefixCls, "-title-content")
      }, children); // inline-collapsed.md demo 依赖 span 来隐藏文字,有 icon 属性，则内部包裹一个 span
      // ref: https://github.com/ant-design/ant-design/pull/23456

      if (!icon || (0,reactNode/* isValidElement */.l$)(children) && children.type === 'span') {
        if (children && inlineCollapsed && firstLevel && typeof children === 'string') {
          return /*#__PURE__*/react.createElement("div", {
            className: "".concat(prefixCls, "-inline-collapsed-noicon")
          }, children.charAt(0));
        }
      }

      return wrapNode;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement(Sider/* SiderContext.Consumer */.D.Consumer, null, this.renderItem);
    }
  }]);

  return MenuItem;
}(react.Component);


MenuItem.contextType = menu_MenuContext;
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js + 1 modules
var context = __webpack_require__(5632);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/devWarning.js
var devWarning = __webpack_require__(1687);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/motion.js
var motion = __webpack_require__(3603);
;// CONCATENATED MODULE: ./node_modules/antd/es/menu/MenuDivider.js



var MenuDivider_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};






var MenuDivider = function MenuDivider(_a) {
  var customizePrefixCls = _a.prefixCls,
      className = _a.className,
      dashed = _a.dashed,
      restProps = MenuDivider_rest(_a, ["prefixCls", "className", "dashed"]);

  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
      getPrefixCls = _React$useContext.getPrefixCls;

  var prefixCls = getPrefixCls('menu', customizePrefixCls);
  var classString = classnames_default()((0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-item-divider-dashed"), !!dashed), className);
  return /*#__PURE__*/react.createElement(es/* Divider */.iz, (0,esm_extends/* default */.Z)({
    className: classString
  }, restProps));
};

/* harmony default export */ var menu_MenuDivider = (MenuDivider);
;// CONCATENATED MODULE: ./node_modules/antd/es/menu/index.js






var menu_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

















var InternalMenu = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(InternalMenu, _React$Component);

  var _super = (0,createSuper/* default */.Z)(InternalMenu);

  function InternalMenu(props) {
    var _this;

    (0,classCallCheck/* default */.Z)(this, InternalMenu);

    _this = _super.call(this, props);

    _this.renderMenu = function (_ref) {
      var getPopupContainer = _ref.getPopupContainer,
          getPrefixCls = _ref.getPrefixCls,
          direction = _ref.direction;
      var rootPrefixCls = getPrefixCls();

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          className = _a.className,
          theme = _a.theme,
          expandIcon = _a.expandIcon,
          _internalDisableMenuItemTitleTooltip = _a._internalDisableMenuItemTitleTooltip,
          restProps = menu_rest(_a, ["prefixCls", "className", "theme", "expandIcon", "_internalDisableMenuItemTitleTooltip"]);

      var passedProps = (0,omit/* default */.Z)(restProps, ['siderCollapsed', 'collapsedWidth']);

      var inlineCollapsed = _this.getInlineCollapsed();

      var defaultMotions = {
        horizontal: {
          motionName: "".concat(rootPrefixCls, "-slide-up")
        },
        inline: motion/* default */.Z,
        other: {
          motionName: "".concat(rootPrefixCls, "-zoom-big")
        }
      };
      var prefixCls = getPrefixCls('menu', customizePrefixCls);
      var menuClassName = classnames_default()("".concat(prefixCls, "-").concat(theme), className); // TODO: refactor menu with function component

      var contextValue = (0,memoize_one_esm/* default */.Z)(function (cls, collapsed, the, dir, disableMenuItemTitleTooltip) {
        return {
          prefixCls: cls,
          inlineCollapsed: collapsed || false,
          antdMenuTheme: the,
          direction: dir,
          firstLevel: true,
          disableMenuItemTitleTooltip: disableMenuItemTitleTooltip
        };
      })(prefixCls, inlineCollapsed, theme, direction, _internalDisableMenuItemTitleTooltip);
      return /*#__PURE__*/react.createElement(menu_MenuContext.Provider, {
        value: contextValue
      }, /*#__PURE__*/react.createElement(es/* default */.ZP, (0,esm_extends/* default */.Z)({
        getPopupContainer: getPopupContainer,
        overflowedIndicator: /*#__PURE__*/react.createElement(EllipsisOutlined/* default */.Z, null),
        overflowedIndicatorPopupClassName: "".concat(prefixCls, "-").concat(theme)
      }, passedProps, {
        inlineCollapsed: inlineCollapsed,
        className: menuClassName,
        prefixCls: prefixCls,
        direction: direction,
        defaultMotions: defaultMotions,
        expandIcon: (0,reactNode/* cloneElement */.Tm)(expandIcon, {
          className: "".concat(prefixCls, "-submenu-expand-icon")
        })
      })));
    };

    (0,devWarning/* default */.Z)(!('inlineCollapsed' in props && props.mode !== 'inline'), 'Menu', '`inlineCollapsed` should only be used when `mode` is inline.');
    (0,devWarning/* default */.Z)(!(props.siderCollapsed !== undefined && 'inlineCollapsed' in props), 'Menu', '`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.');
    return _this;
  }

  (0,createClass/* default */.Z)(InternalMenu, [{
    key: "getInlineCollapsed",
    value: function getInlineCollapsed() {
      var _this$props = this.props,
          inlineCollapsed = _this$props.inlineCollapsed,
          siderCollapsed = _this$props.siderCollapsed;

      if (siderCollapsed !== undefined) {
        return siderCollapsed;
      }

      return inlineCollapsed;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement(context/* ConfigConsumer */.C, null, this.renderMenu);
    }
  }]);

  return InternalMenu;
}(react.Component);

InternalMenu.defaultProps = {
  theme: 'light' // or dark

}; // We should keep this as ref-able

var Menu = /*#__PURE__*/function (_React$Component2) {
  (0,inherits/* default */.Z)(Menu, _React$Component2);

  var _super2 = (0,createSuper/* default */.Z)(Menu);

  function Menu() {
    (0,classCallCheck/* default */.Z)(this, Menu);

    return _super2.apply(this, arguments);
  }

  (0,createClass/* default */.Z)(Menu, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react.createElement(Sider/* SiderContext.Consumer */.D.Consumer, null, function (context) {
        return /*#__PURE__*/react.createElement(InternalMenu, (0,esm_extends/* default */.Z)({}, _this2.props, context));
      });
    }
  }]);

  return Menu;
}(react.Component);

Menu.Divider = menu_MenuDivider;
Menu.Item = MenuItem;
Menu.SubMenu = menu_SubMenu;
Menu.ItemGroup = es/* ItemGroup */.BW;
/* harmony default export */ var menu = (Menu);

/***/ }),

/***/ 9650:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "u": function() { return /* binding */ SpaceContext; },
  "Z": function() { return /* binding */ space; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(9439);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__(344);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js + 1 modules
var context = __webpack_require__(5632);
;// CONCATENATED MODULE: ./node_modules/antd/es/space/Item.js




function Item(_ref) {
  var className = _ref.className,
      direction = _ref.direction,
      index = _ref.index,
      marginDirection = _ref.marginDirection,
      children = _ref.children,
      split = _ref.split,
      wrap = _ref.wrap;

  var _React$useContext = react.useContext(SpaceContext),
      horizontalSize = _React$useContext.horizontalSize,
      verticalSize = _React$useContext.verticalSize,
      latestIndex = _React$useContext.latestIndex,
      supportFlexGap = _React$useContext.supportFlexGap;

  var style = {};

  if (!supportFlexGap) {
    if (direction === 'vertical') {
      if (index < latestIndex) {
        style = {
          marginBottom: horizontalSize / (split ? 2 : 1)
        };
      }
    } else {
      style = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, index < latestIndex && (0,defineProperty/* default */.Z)({}, marginDirection, horizontalSize / (split ? 2 : 1))), wrap && {
        paddingBottom: verticalSize
      });
    }
  }

  if (children === null || children === undefined) {
    return null;
  }

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: className,
    style: style
  }, children), index < latestIndex && split && /*#__PURE__*/react.createElement("span", {
    className: "".concat(className, "-split"),
    style: style
  }, split));
}
// EXTERNAL MODULE: ./node_modules/antd/es/_util/hooks/useFlexGapSupport.js + 1 modules
var useFlexGapSupport = __webpack_require__(3732);
;// CONCATENATED MODULE: ./node_modules/antd/es/space/index.js




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







var SpaceContext = /*#__PURE__*/react.createContext({
  latestIndex: 0,
  horizontalSize: 0,
  verticalSize: 0,
  supportFlexGap: false
});
var spaceSize = {
  small: 8,
  middle: 16,
  large: 24
};

function getNumberSize(size) {
  return typeof size === 'string' ? spaceSize[size] : size || 0;
}

var Space = function Space(props) {
  var _classNames;

  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
      getPrefixCls = _React$useContext.getPrefixCls,
      space = _React$useContext.space,
      directionConfig = _React$useContext.direction;

  var _props$size = props.size,
      size = _props$size === void 0 ? (space === null || space === void 0 ? void 0 : space.size) || 'small' : _props$size,
      align = props.align,
      className = props.className,
      children = props.children,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'horizontal' : _props$direction,
      customizePrefixCls = props.prefixCls,
      split = props.split,
      style = props.style,
      _props$wrap = props.wrap,
      wrap = _props$wrap === void 0 ? false : _props$wrap,
      otherProps = __rest(props, ["size", "align", "className", "children", "direction", "prefixCls", "split", "style", "wrap"]);

  var supportFlexGap = (0,useFlexGapSupport/* default */.Z)();

  var _React$useMemo = react.useMemo(function () {
    return (Array.isArray(size) ? size : [size, size]).map(function (item) {
      return getNumberSize(item);
    });
  }, [size]),
      _React$useMemo2 = (0,slicedToArray/* default */.Z)(_React$useMemo, 2),
      horizontalSize = _React$useMemo2[0],
      verticalSize = _React$useMemo2[1];

  var childNodes = (0,toArray/* default */.Z)(children, {
    keepEmpty: true
  });
  var mergedAlign = align === undefined && direction === 'horizontal' ? 'center' : align;
  var prefixCls = getPrefixCls('space', customizePrefixCls);
  var cn = classnames_default()(prefixCls, "".concat(prefixCls, "-").concat(direction), (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-rtl"), directionConfig === 'rtl'), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-align-").concat(mergedAlign), mergedAlign), _classNames), className);
  var itemClassName = "".concat(prefixCls, "-item");
  var marginDirection = directionConfig === 'rtl' ? 'marginLeft' : 'marginRight'; // Calculate latest one

  var latestIndex = 0;
  var nodes = childNodes.map(function (child, i) {
    if (child !== null && child !== undefined) {
      latestIndex = i;
    }
    /* eslint-disable react/no-array-index-key */


    return /*#__PURE__*/react.createElement(Item, {
      className: itemClassName,
      key: "".concat(itemClassName, "-").concat(i),
      direction: direction,
      index: i,
      marginDirection: marginDirection,
      split: split,
      wrap: wrap
    }, child);
    /* eslint-enable */
  });
  var spaceContext = react.useMemo(function () {
    return {
      horizontalSize: horizontalSize,
      verticalSize: verticalSize,
      latestIndex: latestIndex,
      supportFlexGap: supportFlexGap
    };
  }, [horizontalSize, verticalSize, latestIndex, supportFlexGap]); // =========================== Render ===========================

  if (childNodes.length === 0) {
    return null;
  }

  var gapStyle = {};

  if (wrap) {
    gapStyle.flexWrap = 'wrap'; // Patch for gap not support

    if (!supportFlexGap) {
      gapStyle.marginBottom = -verticalSize;
    }
  }

  if (supportFlexGap) {
    gapStyle.columnGap = horizontalSize;
    gapStyle.rowGap = verticalSize;
  }

  return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    className: cn,
    style: (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, gapStyle), style)
  }, otherProps), /*#__PURE__*/react.createElement(SpaceContext.Provider, {
    value: spaceContext
  }, nodes));
};

/* harmony default export */ var space = (Space);

/***/ }),

/***/ 1114:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/antd/es/style/default.less
var style_default = __webpack_require__(5608);
;// CONCATENATED MODULE: ./node_modules/antd/es/space/style/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/antd/es/space/style/index.js



/***/ }),

/***/ 5299:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgLight = function SvgLight(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: 0,
    viewBox: "0 0 24 24",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    stroke: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85 1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"
  })));
};

/* harmony default export */ __webpack_exports__["Z"] = (SvgLight);

/***/ }),

/***/ 75:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var process = __webpack_require__(4155);
// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);

//# sourceMappingURL=performance-now.js.map


/***/ }),

/***/ 2703:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(414);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 5697:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(2703)();
}


/***/ }),

/***/ 414:
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 4087:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var now = __webpack_require__(75)
  , root = typeof window === 'undefined' ? __webpack_require__.g : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root['request' + suffix]
  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix]
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
}
module.exports.cancel = function() {
  caf.apply(root, arguments)
}
module.exports.polyfill = function(object) {
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf
  object.cancelAnimationFrame = caf
}


/***/ }),

/***/ 8474:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7294);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5697);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _raf = __webpack_require__(4087);

var _raf2 = _interopRequireDefault(_raf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = function (_PureComponent) {
  _inherits(Container, _PureComponent);

  function Container() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Container);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Container.__proto__ || Object.getPrototypeOf(Container)).call.apply(_ref, [this].concat(args))), _this), _this.events = ["resize", "scroll", "touchstart", "touchmove", "touchend", "pageshow", "load"], _this.subscribers = [], _this.rafHandle = null, _this.subscribe = function (handler) {
      _this.subscribers = _this.subscribers.concat(handler);
    }, _this.unsubscribe = function (handler) {
      _this.subscribers = _this.subscribers.filter(function (current) {
        return current !== handler;
      });
    }, _this.notifySubscribers = function (evt) {
      if (!_this.framePending) {
        var currentTarget = evt.currentTarget;


        _this.rafHandle = (0, _raf2.default)(function () {
          _this.framePending = false;

          var _this$node$getBoundin = _this.node.getBoundingClientRect(),
              top = _this$node$getBoundin.top,
              bottom = _this$node$getBoundin.bottom;

          _this.subscribers.forEach(function (handler) {
            return handler({
              distanceFromTop: top,
              distanceFromBottom: bottom,
              eventSource: currentTarget === window ? document.body : _this.node
            });
          });
        });
        _this.framePending = true;
      }
    }, _this.getParent = function () {
      return _this.node;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Container, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        subscribe: this.subscribe,
        unsubscribe: this.unsubscribe,
        getParent: this.getParent
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.events.forEach(function (event) {
        return window.addEventListener(event, _this2.notifySubscribers);
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this3 = this;

      if (this.rafHandle) {
        _raf2.default.cancel(this.rafHandle);
        this.rafHandle = null;
      }

      this.events.forEach(function (event) {
        return window.removeEventListener(event, _this3.notifySubscribers);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return _react2.default.createElement("div", _extends({}, this.props, {
        ref: function ref(node) {
          return _this4.node = node;
        },
        onScroll: this.notifySubscribers,
        onTouchStart: this.notifySubscribers,
        onTouchMove: this.notifySubscribers,
        onTouchEnd: this.notifySubscribers
      }));
    }
  }]);

  return Container;
}(_react.PureComponent);

Container.childContextTypes = {
  subscribe: _propTypes2.default.func,
  unsubscribe: _propTypes2.default.func,
  getParent: _propTypes2.default.func
};
exports["default"] = Container;

/***/ }),

/***/ 8579:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7294);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(3935);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(5697);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sticky = function (_Component) {
  _inherits(Sticky, _Component);

  function Sticky() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Sticky);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Sticky.__proto__ || Object.getPrototypeOf(Sticky)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isSticky: false,
      wasSticky: false,
      style: {}
    }, _this.handleContainerEvent = function (_ref2) {
      var distanceFromTop = _ref2.distanceFromTop,
          distanceFromBottom = _ref2.distanceFromBottom,
          eventSource = _ref2.eventSource;

      var parent = _this.context.getParent();

      var preventingStickyStateChanges = false;
      if (_this.props.relative) {
        preventingStickyStateChanges = eventSource !== parent;
        distanceFromTop = -(eventSource.scrollTop + eventSource.offsetTop) + _this.placeholder.offsetTop;
      }

      var placeholderClientRect = _this.placeholder.getBoundingClientRect();
      var contentClientRect = _this.content.getBoundingClientRect();
      var calculatedHeight = contentClientRect.height;

      var bottomDifference = distanceFromBottom - _this.props.bottomOffset - calculatedHeight;

      var wasSticky = !!_this.state.isSticky;
      var isSticky = preventingStickyStateChanges ? wasSticky : distanceFromTop <= -_this.props.topOffset && distanceFromBottom > -_this.props.bottomOffset;

      distanceFromBottom = (_this.props.relative ? parent.scrollHeight - parent.scrollTop : distanceFromBottom) - calculatedHeight;

      var style = !isSticky ? {} : {
        position: "fixed",
        top: bottomDifference > 0 ? _this.props.relative ? parent.offsetTop - parent.offsetParent.scrollTop : 0 : bottomDifference,
        left: placeholderClientRect.left,
        width: placeholderClientRect.width
      };

      if (!_this.props.disableHardwareAcceleration) {
        style.transform = "translateZ(0)";
      }

      _this.setState({
        isSticky: isSticky,
        wasSticky: wasSticky,
        distanceFromTop: distanceFromTop,
        distanceFromBottom: distanceFromBottom,
        calculatedHeight: calculatedHeight,
        style: style
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Sticky, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!this.context.subscribe) throw new TypeError("Expected Sticky to be mounted within StickyContainer");

      this.context.subscribe(this.handleContainerEvent);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.context.unsubscribe(this.handleContainerEvent);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.placeholder.style.paddingBottom = this.props.disableCompensation ? 0 : (this.state.isSticky ? this.state.calculatedHeight : 0) + "px";
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var element = _react2.default.cloneElement(this.props.children({
        isSticky: this.state.isSticky,
        wasSticky: this.state.wasSticky,
        distanceFromTop: this.state.distanceFromTop,
        distanceFromBottom: this.state.distanceFromBottom,
        calculatedHeight: this.state.calculatedHeight,
        style: this.state.style
      }), {
        ref: function ref(content) {
          _this2.content = _reactDom2.default.findDOMNode(content);
        }
      });

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement("div", { ref: function ref(placeholder) {
            return _this2.placeholder = placeholder;
          } }),
        element
      );
    }
  }]);

  return Sticky;
}(_react.Component);

Sticky.propTypes = {
  topOffset: _propTypes2.default.number,
  bottomOffset: _propTypes2.default.number,
  relative: _propTypes2.default.bool,
  children: _propTypes2.default.func.isRequired
};
Sticky.defaultProps = {
  relative: false,
  topOffset: 0,
  bottomOffset: 0,
  disableCompensation: false,
  disableHardwareAcceleration: false
};
Sticky.contextTypes = {
  subscribe: _propTypes2.default.func,
  unsubscribe: _propTypes2.default.func,
  getParent: _propTypes2.default.func
};
exports["default"] = Sticky;

/***/ }),

/***/ 8439:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports.L9 = exports.Le = undefined;

var _Sticky = __webpack_require__(8579);

var _Sticky2 = _interopRequireDefault(_Sticky);

var _Container = __webpack_require__(8474);

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Le = _Sticky2.default;
exports.L9 = _Container2.default;
__webpack_unused_export__ = _Sticky2.default;

/***/ }),

/***/ 8996:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);


var Home = function Home() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Cool! Hi, React && Ant Design"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 7285:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages_layout; }
});

// EXTERNAL MODULE: ./node_modules/antd/es/style/default.less
var style_default = __webpack_require__(5608);
;// CONCATENATED MODULE: ./node_modules/antd/es/layout/style/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/antd/es/layout/style/index.js


// EXTERNAL MODULE: ./node_modules/antd/es/layout/layout.js
var layout = __webpack_require__(2897);
// EXTERNAL MODULE: ./node_modules/antd/es/layout/Sider.js + 3 modules
var Sider = __webpack_require__(4025);
;// CONCATENATED MODULE: ./node_modules/antd/es/layout/index.js


var Layout = layout/* default */.ZP;
Layout.Header = layout/* Header */.h4;
Layout.Footer = layout/* Footer */.$_;
Layout.Content = layout/* Content */.VY;
Layout.Sider = Sider/* default */.Z;
/* harmony default export */ var es_layout = (Layout);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/antd/es/dropdown/style/index.js + 1 modules
var style = __webpack_require__(3605);
// EXTERNAL MODULE: ./node_modules/antd/es/dropdown/index.js
var dropdown = __webpack_require__(3013);
;// CONCATENATED MODULE: ./node_modules/antd/es/menu/style/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/style/index.js + 1 modules
var tooltip_style = __webpack_require__(3255);
;// CONCATENATED MODULE: ./node_modules/antd/es/menu/style/index.js

 // style dependencies
// deps-lint-skip: layout


// EXTERNAL MODULE: ./node_modules/antd/es/menu/index.js + 4 modules
var menu = __webpack_require__(8838);
// EXTERNAL MODULE: ./node_modules/antd/es/space/style/index.js + 1 modules
var space_style = __webpack_require__(1114);
// EXTERNAL MODULE: ./node_modules/antd/es/space/index.js + 1 modules
var space = __webpack_require__(9650);
;// CONCATENATED MODULE: ./node_modules/antd/es/switch/style/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/antd/es/switch/style/index.js


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(9439);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(4925);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useMergedState.js
var useMergedState = __webpack_require__(1770);
// EXTERNAL MODULE: ./node_modules/rc-util/es/KeyCode.js
var KeyCode = __webpack_require__(617);
;// CONCATENATED MODULE: ./node_modules/rc-switch/es/index.js







var Switch = react.forwardRef(function (_ref, ref) {
  var _classNames;

  var _ref$prefixCls = _ref.prefixCls,
      prefixCls = _ref$prefixCls === void 0 ? 'rc-switch' : _ref$prefixCls,
      className = _ref.className,
      checked = _ref.checked,
      defaultChecked = _ref.defaultChecked,
      disabled = _ref.disabled,
      loadingIcon = _ref.loadingIcon,
      checkedChildren = _ref.checkedChildren,
      unCheckedChildren = _ref.unCheckedChildren,
      onClick = _ref.onClick,
      onChange = _ref.onChange,
      onKeyDown = _ref.onKeyDown,
      restProps = (0,objectWithoutProperties/* default */.Z)(_ref, ["prefixCls", "className", "checked", "defaultChecked", "disabled", "loadingIcon", "checkedChildren", "unCheckedChildren", "onClick", "onChange", "onKeyDown"]);

  var _useMergedState = (0,useMergedState/* default */.Z)(false, {
    value: checked,
    defaultValue: defaultChecked
  }),
      _useMergedState2 = (0,slicedToArray/* default */.Z)(_useMergedState, 2),
      innerChecked = _useMergedState2[0],
      setInnerChecked = _useMergedState2[1];

  function triggerChange(newChecked, event) {
    var mergedChecked = innerChecked;

    if (!disabled) {
      mergedChecked = newChecked;
      setInnerChecked(mergedChecked);
      onChange === null || onChange === void 0 ? void 0 : onChange(mergedChecked, event);
    }

    return mergedChecked;
  }

  function onInternalKeyDown(e) {
    if (e.which === KeyCode/* default.LEFT */.Z.LEFT) {
      triggerChange(false, e);
    } else if (e.which === KeyCode/* default.RIGHT */.Z.RIGHT) {
      triggerChange(true, e);
    }

    onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e);
  }

  function onInternalClick(e) {
    var ret = triggerChange(!innerChecked, e); // [Legacy] trigger onClick with value

    onClick === null || onClick === void 0 ? void 0 : onClick(ret, e);
  }

  var switchClassName = classnames_default()(prefixCls, className, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-checked"), innerChecked), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames));
  return react.createElement("button", Object.assign({}, restProps, {
    type: "button",
    role: "switch",
    "aria-checked": innerChecked,
    disabled: disabled,
    className: switchClassName,
    ref: ref,
    onKeyDown: onInternalKeyDown,
    onClick: onInternalClick
  }), loadingIcon, react.createElement("span", {
    className: "".concat(prefixCls, "-inner")
  }, innerChecked ? checkedChildren : unCheckedChildren));
});
Switch.displayName = 'Switch';
/* harmony default export */ var es = (Switch);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/LoadingOutlined.js + 1 modules
var LoadingOutlined = __webpack_require__(7085);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/wave.js + 1 modules
var wave = __webpack_require__(1790);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js + 1 modules
var context = __webpack_require__(5632);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/SizeContext.js
var SizeContext = __webpack_require__(7647);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/devWarning.js
var devWarning = __webpack_require__(1687);
;// CONCATENATED MODULE: ./node_modules/antd/es/switch/index.js



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









var switch_Switch = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var _classNames;

  var customizePrefixCls = _a.prefixCls,
      customizeSize = _a.size,
      loading = _a.loading,
      _a$className = _a.className,
      className = _a$className === void 0 ? '' : _a$className,
      disabled = _a.disabled,
      props = __rest(_a, ["prefixCls", "size", "loading", "className", "disabled"]);

  (0,devWarning/* default */.Z)('checked' in props || !('value' in props), 'Switch', '`value` is not a valid prop, do you mean `checked`?');

  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var size = react.useContext(SizeContext/* default */.Z);
  var prefixCls = getPrefixCls('switch', customizePrefixCls);
  var loadingIcon = /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-handle")
  }, loading && /*#__PURE__*/react.createElement(LoadingOutlined/* default */.Z, {
    className: "".concat(prefixCls, "-loading-icon")
  }));
  var classes = classnames_default()((_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-small"), (customizeSize || size) === 'small'), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-loading"), loading), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
  return /*#__PURE__*/react.createElement(wave/* default */.Z, {
    insertExtraNode: true
  }, /*#__PURE__*/react.createElement(es, (0,esm_extends/* default */.Z)({}, props, {
    prefixCls: prefixCls,
    className: classes,
    disabled: disabled || loading,
    ref: ref,
    loadingIcon: loadingIcon
  })));
});
switch_Switch.__ANT_SWITCH = true;
switch_Switch.displayName = 'Switch';
/* harmony default export */ var es_switch = (switch_Switch);
;// CONCATENATED MODULE: ./node_modules/antd/es/tag/style/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/antd/es/tag/style/index.js


// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__(8423);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseOutlined.js + 1 modules
var CloseOutlined = __webpack_require__(4549);
;// CONCATENATED MODULE: ./node_modules/antd/es/tag/CheckableTag.js



var CheckableTag_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





var CheckableTag = function CheckableTag(_a) {
  var _classNames;

  var customizePrefixCls = _a.prefixCls,
      className = _a.className,
      checked = _a.checked,
      onChange = _a.onChange,
      onClick = _a.onClick,
      restProps = CheckableTag_rest(_a, ["prefixCls", "className", "checked", "onChange", "onClick"]);

  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
      getPrefixCls = _React$useContext.getPrefixCls;

  var handleClick = function handleClick(e) {
    onChange === null || onChange === void 0 ? void 0 : onChange(!checked);
    onClick === null || onClick === void 0 ? void 0 : onClick(e);
  };

  var prefixCls = getPrefixCls('tag', customizePrefixCls);
  var cls = classnames_default()(prefixCls, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-checkable"), true), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-checkable-checked"), checked), _classNames), className);
  return /*#__PURE__*/react.createElement("span", (0,esm_extends/* default */.Z)({}, restProps, {
    className: cls,
    onClick: handleClick
  }));
};

/* harmony default export */ var tag_CheckableTag = (CheckableTag);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/colors.js
var colors = __webpack_require__(8787);
;// CONCATENATED MODULE: ./node_modules/antd/es/tag/index.js




var tag_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};









var PresetColorRegex = new RegExp("^(".concat(colors/* PresetColorTypes.join */.Y.join('|'), ")(-inverse)?$"));
var PresetStatusColorRegex = new RegExp("^(".concat(colors/* PresetStatusColorTypes.join */.E.join('|'), ")$"));

var InternalTag = function InternalTag(_a, ref) {
  var _classNames;

  var customizePrefixCls = _a.prefixCls,
      className = _a.className,
      style = _a.style,
      children = _a.children,
      icon = _a.icon,
      color = _a.color,
      onClose = _a.onClose,
      closeIcon = _a.closeIcon,
      _a$closable = _a.closable,
      closable = _a$closable === void 0 ? false : _a$closable,
      props = tag_rest(_a, ["prefixCls", "className", "style", "children", "icon", "color", "onClose", "closeIcon", "closable"]);

  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var _React$useState = react.useState(true),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      visible = _React$useState2[0],
      setVisible = _React$useState2[1];

  react.useEffect(function () {
    if ('visible' in props) {
      setVisible(props.visible);
    }
  }, [props.visible]);

  var isPresetColor = function isPresetColor() {
    if (!color) {
      return false;
    }

    return PresetColorRegex.test(color) || PresetStatusColorRegex.test(color);
  };

  var tagStyle = (0,esm_extends/* default */.Z)({
    backgroundColor: color && !isPresetColor() ? color : undefined
  }, style);

  var presetColor = isPresetColor();
  var prefixCls = getPrefixCls('tag', customizePrefixCls);
  var tagClassName = classnames_default()(prefixCls, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-").concat(color), presetColor), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-has-color"), color && !presetColor), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-hidden"), !visible), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);

  var handleCloseClick = function handleCloseClick(e) {
    e.stopPropagation();
    onClose === null || onClose === void 0 ? void 0 : onClose(e);

    if (e.defaultPrevented) {
      return;
    }

    if (!('visible' in props)) {
      setVisible(false);
    }
  };

  var renderCloseIcon = function renderCloseIcon() {
    if (closable) {
      return closeIcon ? /*#__PURE__*/react.createElement("span", {
        className: "".concat(prefixCls, "-close-icon"),
        onClick: handleCloseClick
      }, closeIcon) : /*#__PURE__*/react.createElement(CloseOutlined/* default */.Z, {
        className: "".concat(prefixCls, "-close-icon"),
        onClick: handleCloseClick
      });
    }

    return null;
  };

  var isNeedWave = 'onClick' in props || children && children.type === 'a';
  var tagProps = (0,omit/* default */.Z)(props, ['visible']);
  var iconNode = icon || null;
  var kids = iconNode ? /*#__PURE__*/react.createElement(react.Fragment, null, iconNode, /*#__PURE__*/react.createElement("span", null, children)) : children;
  var tagNode = /*#__PURE__*/react.createElement("span", (0,esm_extends/* default */.Z)({}, tagProps, {
    ref: ref,
    className: tagClassName,
    style: tagStyle
  }), kids, renderCloseIcon());
  return isNeedWave ? /*#__PURE__*/react.createElement(wave/* default */.Z, null, tagNode) : tagNode;
};

var Tag = /*#__PURE__*/react.forwardRef(InternalTag);
Tag.displayName = 'Tag';
Tag.CheckableTag = tag_CheckableTag;
/* harmony default export */ var tag = (Tag);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/Icon.js
var Icon = __webpack_require__(6165);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/BellOutlined.js
// This icon file is generated automatically.
var BellOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z" } }] }, "name": "bell", "theme": "outlined" };
/* harmony default export */ var asn_BellOutlined = (BellOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 2 modules
var AntdIcon = __webpack_require__(7029);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/BellOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var BellOutlined_BellOutlined = function BellOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_BellOutlined
  }));
};

BellOutlined_BellOutlined.displayName = 'BellOutlined';
/* harmony default export */ var icons_BellOutlined = (/*#__PURE__*/react.forwardRef(BellOutlined_BellOutlined));
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/UserOutlined.js
// This icon file is generated automatically.
var UserOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z" } }] }, "name": "user", "theme": "outlined" };
/* harmony default export */ var asn_UserOutlined = (UserOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/UserOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var UserOutlined_UserOutlined = function UserOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_UserOutlined
  }));
};

UserOutlined_UserOutlined.displayName = 'UserOutlined';
/* harmony default export */ var icons_UserOutlined = (/*#__PURE__*/react.forwardRef(UserOutlined_UserOutlined));
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/SettingOutlined.js
// This icon file is generated automatically.
var SettingOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 009.3-35.2l-.9-2.6a443.74 443.74 0 00-79.7-137.9l-1.8-2.1a32.12 32.12 0 00-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 00-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 00-25.8 25.7l-15.8 85.4a351.86 351.86 0 00-99 57.4l-81.9-29.1a32 32 0 00-35.1 9.5l-1.8 2.1a446.02 446.02 0 00-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 00-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0035.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0025.8 25.7l2.7.5a449.4 449.4 0 00159 0l2.7-.5a32.05 32.05 0 0025.8-25.7l15.7-85a350 350 0 0099.7-57.6l81.3 28.9a32 32 0 0035.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 01-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 01-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 01624 502c0 29.9-11.7 58-32.8 79.2z" } }] }, "name": "setting", "theme": "outlined" };
/* harmony default export */ var asn_SettingOutlined = (SettingOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/SettingOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var SettingOutlined_SettingOutlined = function SettingOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_SettingOutlined
  }));
};

SettingOutlined_SettingOutlined.displayName = 'SettingOutlined';
/* harmony default export */ var icons_SettingOutlined = (/*#__PURE__*/react.forwardRef(SettingOutlined_SettingOutlined));
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/LogoutOutlined.js
// This icon file is generated automatically.
var LogoutOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z" } }] }, "name": "logout", "theme": "outlined" };
/* harmony default export */ var asn_LogoutOutlined = (LogoutOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/LogoutOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var LogoutOutlined_LogoutOutlined = function LogoutOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_LogoutOutlined
  }));
};

LogoutOutlined_LogoutOutlined.displayName = 'LogoutOutlined';
/* harmony default export */ var icons_LogoutOutlined = (/*#__PURE__*/react.forwardRef(LogoutOutlined_LogoutOutlined));
// EXTERNAL MODULE: ./node_modules/react-router/index.js
var react_router = __webpack_require__(6974);
// EXTERNAL MODULE: ./node_modules/react-css-theme-switcher/dist/react-css-theme-switcher.esm.js
var react_css_theme_switcher_esm = __webpack_require__(5105);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/CodeOutlined.js
// This icon file is generated automatically.
var CodeOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M516 673c0 4.4 3.4 8 7.5 8h185c4.1 0 7.5-3.6 7.5-8v-48c0-4.4-3.4-8-7.5-8h-185c-4.1 0-7.5 3.6-7.5 8v48zm-194.9 6.1l192-161c3.8-3.2 3.8-9.1 0-12.3l-192-160.9A7.95 7.95 0 00308 351v62.7c0 2.4 1 4.6 2.9 6.1L420.7 512l-109.8 92.2a8.1 8.1 0 00-2.9 6.1V673c0 6.8 7.9 10.5 13.1 6.1zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z" } }] }, "name": "code", "theme": "outlined" };
/* harmony default export */ var asn_CodeOutlined = (CodeOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/CodeOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var CodeOutlined_CodeOutlined = function CodeOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_CodeOutlined
  }));
};

CodeOutlined_CodeOutlined.displayName = 'CodeOutlined';
/* harmony default export */ var icons_CodeOutlined = (/*#__PURE__*/react.forwardRef(CodeOutlined_CodeOutlined));
;// CONCATENATED MODULE: ./src/pages/layout/primaryNav/index.js






var PrimaryNav = function PrimaryNav() {
  var navigate = (0,react_router/* useNavigate */.s0)();

  var redirectTo = function redirectTo(path) {
    navigate(path);
  };

  return /*#__PURE__*/react.createElement(menu/* default */.Z, {
    mode: "horizontal"
  }, /*#__PURE__*/react.createElement(menu/* default.Item */.Z.Item, {
    key: "mail",
    icon: /*#__PURE__*/react.createElement(icons_CodeOutlined, null),
    onClick: function onClick() {
      return redirectTo('basis');
    }
  }, "\u57FA\u7840\u7EC4\u4EF6\u5E93"));
};

/* harmony default export */ var primaryNav = (PrimaryNav);
// EXTERNAL MODULE: ./src/assets/svg/light.svg
var light = __webpack_require__(5299);
;// CONCATENATED MODULE: ./src/assets/svg/dark.svg
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgDark = function SvgDark(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: 0,
    viewBox: "0 0 24 24",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      width: 24,
      height: 24
    }
  }, props), /*#__PURE__*/react.createElement("g", {
    stroke: "none"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M10 6a8 8 0 0 0 11.955 6.956C21.474 18.03 17.2 22 12 22 6.477 22 2 17.523 2 12c0-5.2 3.97-9.474 9.044-9.955A7.963 7.963 0 0 0 10 6zm-6 6a8 8 0 0 0 8 8 8.006 8.006 0 0 0 6.957-4.045c-.316.03-.636.045-.957.045-5.523 0-10-4.477-10-10 0-.321.015-.64.045-.957A8.006 8.006 0 0 0 4 12zm14.164-9.709L19 2.5v1l-.836.209a2 2 0 0 0-1.455 1.455L16.5 6h-1l-.209-.836a2 2 0 0 0-1.455-1.455L13 3.5v-1l.836-.209A2 2 0 0 0 15.29.836L15.5 0h1l.209.836a2 2 0 0 0 1.455 1.455zm5 5L24 7.5v1l-.836.209a2 2 0 0 0-1.455 1.455L21.5 11h-1l-.209-.836a2 2 0 0 0-1.455-1.455L18 8.5v-1l.836-.209a2 2 0 0 0 1.455-1.455L20.5 5h1l.209.836a2 2 0 0 0 1.455 1.455z"
  })));
};

/* harmony default export */ var dark = (SvgDark);
;// CONCATENATED MODULE: ./src/pages/layout/proHeader/index.module.less
// extracted by mini-css-extract-plugin
/* harmony default export */ var index_module = ({"header":"pages-layout-proHeader-index-module__header--dEE7d","logo":"pages-layout-proHeader-index-module__logo--YMxnJ","headerMeta":"pages-layout-proHeader-index-module__headerMeta--COVbx","headerRight":"pages-layout-proHeader-index-module__headerRight--Egiwc"});
;// CONCATENATED MODULE: ./src/pages/layout/proHeader/index.js





















var ProHeader = function ProHeader() {
  var navigate = (0,react_router/* useNavigate */.s0)();

  var redirectTo = function redirectTo(path) {
    navigate(path);
  };

  var _useThemeSwitcher = (0,react_css_theme_switcher_esm/* useThemeSwitcher */.E)(),
      switcher = _useThemeSwitcher.switcher,
      themes = _useThemeSwitcher.themes,
      currentTheme = _useThemeSwitcher.currentTheme;

  (0,react.useEffect)(function () {
    switcher({
      theme: themes[localStorage.getItem('antd-theme') ? localStorage.getItem('theme') : 'dark']
    });
  }, [currentTheme, switcher, themes]);

  var changeTheme = function changeTheme(checked) {// switcher({ theme: checked ? themes.light : themes.dark })
    // localStorage.setItem('antd-theme', checked ? 'light' : 'dark')
  };

  return /*#__PURE__*/react.createElement(es_layout.Header, {
    className: index_module.header
  }, /*#__PURE__*/react.createElement("div", {
    className: index_module.logo,
    onClick: function onClick() {
      return redirectTo('/');
    }
  }, "Pro React ", /*#__PURE__*/react.createElement(tag, null, "Prod")), /*#__PURE__*/react.createElement("div", {
    className: index_module.headerMeta
  }, /*#__PURE__*/react.createElement("div", {
    className: index_module.headerMenu
  }, /*#__PURE__*/react.createElement(primaryNav, null)), /*#__PURE__*/react.createElement("div", {
    className: index_module.headerRight
  }, /*#__PURE__*/react.createElement(space/* default */.Z, {
    direction: "horizontal",
    style: {
      cursor: 'pointer',
      paddingRight: 8
    }
  }, /*#__PURE__*/react.createElement(es_switch, {
    checkedChildren: /*#__PURE__*/react.createElement(Icon/* default */.Z, {
      component: light/* default */.Z
    }),
    unCheckedChildren: /*#__PURE__*/react.createElement(Icon/* default */.Z, {
      component: dark
    }),
    defaultChecked: currentTheme === 'dark',
    onClick: changeTheme
  }), /*#__PURE__*/react.createElement(icons_BellOutlined, {
    style: {
      fontSize: 18
    }
  })), /*#__PURE__*/react.createElement(dropdown/* default */.Z, {
    arrow: true,
    overlay: /*#__PURE__*/react.createElement(menu/* default */.Z, null, /*#__PURE__*/react.createElement(menu/* default.Item */.Z.Item, {
      key: "1",
      icon: /*#__PURE__*/react.createElement(icons_UserOutlined, null),
      onClick: function onClick() {
        return redirectTo('/profile');
      }
    }, "\u4E2A\u4EBA\u4E2D\u5FC3"), /*#__PURE__*/react.createElement(menu/* default.Item */.Z.Item, {
      key: "2",
      icon: /*#__PURE__*/react.createElement(icons_SettingOutlined, null),
      onClick: function onClick() {
        return redirectTo('/setting');
      }
    }, "\u4E2A\u4EBA\u8BBE\u7F6E"), /*#__PURE__*/react.createElement(menu/* default.Divider */.Z.Divider, null), /*#__PURE__*/react.createElement(menu/* default.Item */.Z.Item, {
      key: "3",
      icon: /*#__PURE__*/react.createElement(icons_LogoutOutlined, null),
      onClick: function onClick() {
        return redirectTo('/signin');
      }
    }, "\u9000\u51FA\u767B\u5F55"))
  }, /*#__PURE__*/react.createElement(space/* default */.Z, {
    direction: "horizontal",
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/react.createElement(icons_UserOutlined, {
    style: {
      fontSize: 18
    }
  }), /*#__PURE__*/react.createElement("span", null, "Admin"))))));
};

/* harmony default export */ var proHeader = (ProHeader);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/MenuUnfoldOutlined.js
// This icon file is generated automatically.
var MenuUnfoldOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 000-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z" } }] }, "name": "menu-unfold", "theme": "outlined" };
/* harmony default export */ var asn_MenuUnfoldOutlined = (MenuUnfoldOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/MenuUnfoldOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var MenuUnfoldOutlined_MenuUnfoldOutlined = function MenuUnfoldOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_MenuUnfoldOutlined
  }));
};

MenuUnfoldOutlined_MenuUnfoldOutlined.displayName = 'MenuUnfoldOutlined';
/* harmony default export */ var icons_MenuUnfoldOutlined = (/*#__PURE__*/react.forwardRef(MenuUnfoldOutlined_MenuUnfoldOutlined));
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/MenuFoldOutlined.js
// This icon file is generated automatically.
var MenuFoldOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z" } }] }, "name": "menu-fold", "theme": "outlined" };
/* harmony default export */ var asn_MenuFoldOutlined = (MenuFoldOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/MenuFoldOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var MenuFoldOutlined_MenuFoldOutlined = function MenuFoldOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_MenuFoldOutlined
  }));
};

MenuFoldOutlined_MenuFoldOutlined.displayName = 'MenuFoldOutlined';
/* harmony default export */ var icons_MenuFoldOutlined = (/*#__PURE__*/react.forwardRef(MenuFoldOutlined_MenuFoldOutlined));
;// CONCATENATED MODULE: ./src/pages/layout/proSider/index.module.less
// extracted by mini-css-extract-plugin
/* harmony default export */ var proSider_index_module = ({"sider":"pages-layout-proSider-index-module__sider--zXPQj","proLink":"pages-layout-proSider-index-module__proLink--gTkg9"});
;// CONCATENATED MODULE: ./src/pages/layout/proSider/index.js



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var ProSider = function ProSider(props) {
  var _useState = (0,react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      collapsed = _useState2[0],
      setCollapsed = _useState2[1];

  var onCollapse = function onCollapse() {
    setCollapsed(!collapsed);
  };

  return /*#__PURE__*/react.createElement(es_layout.Sider, {
    width: 208,
    collapsedWidth: 80 // theme="dark"
    ,
    collapsible: true,
    collapsed: collapsed,
    trigger: null,
    className: proSider_index_module.sider
  }, props.children, /*#__PURE__*/react.createElement("div", {
    className: proSider_index_module.proLink,
    onClick: onCollapse
  }, collapsed ? /*#__PURE__*/react.createElement(icons_MenuUnfoldOutlined, {
    style: {
      fontSize: '16px',
      color: '#08c',
      cursor: 'pointer'
    }
  }) : /*#__PURE__*/react.createElement(icons_MenuFoldOutlined, {
    style: {
      fontSize: '18px',
      color: '#08c',
      cursor: 'pointer'
    }
  })));
};

/* harmony default export */ var proSider = (ProSider);
;// CONCATENATED MODULE: ./node_modules/antd/es/back-top/style/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/antd/es/back-top/style/index.js


// EXTERNAL MODULE: ./node_modules/rc-motion/es/index.js + 12 modules
var rc_motion_es = __webpack_require__(444);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/addEventListener.js
var addEventListener = __webpack_require__(4019);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/VerticalAlignTopOutlined.js
// This icon file is generated automatically.
var VerticalAlignTopOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z" } }] }, "name": "vertical-align-top", "theme": "outlined" };
/* harmony default export */ var asn_VerticalAlignTopOutlined = (VerticalAlignTopOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/VerticalAlignTopOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var VerticalAlignTopOutlined_VerticalAlignTopOutlined = function VerticalAlignTopOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_VerticalAlignTopOutlined
  }));
};

VerticalAlignTopOutlined_VerticalAlignTopOutlined.displayName = 'VerticalAlignTopOutlined';
/* harmony default export */ var icons_VerticalAlignTopOutlined = (/*#__PURE__*/react.forwardRef(VerticalAlignTopOutlined_VerticalAlignTopOutlined));
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(3433);
// EXTERNAL MODULE: ./node_modules/rc-util/es/raf.js
var raf = __webpack_require__(5164);
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/throttleByAnimationFrame.js


function throttleByAnimationFrame(fn) {
  var requestId;

  var later = function later(args) {
    return function () {
      requestId = null;
      fn.apply(void 0, (0,toConsumableArray/* default */.Z)(args));
    };
  };

  var throttled = function throttled() {
    if (requestId == null) {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      requestId = (0,raf/* default */.Z)(later(args));
    }
  };

  throttled.cancel = function () {
    return raf/* default.cancel */.Z.cancel(requestId);
  };

  return throttled;
}
function throttleByAnimationFrameDecorator() {
  return function throttle(target, key, descriptor) {
    var fn = descriptor.value;
    var definingProperty = false;
    return {
      configurable: true,
      get: function get() {
        // In IE11 calling Object.defineProperty has a side-effect of evaluating the
        // getter for the property which is being replaced. This causes infinite
        // recursion and an "Out of stack space" error.
        // eslint-disable-next-line no-prototype-builtins
        if (definingProperty || this === target.prototype || this.hasOwnProperty(key)) {
          /* istanbul ignore next */
          return fn;
        }

        var boundFn = throttleByAnimationFrame(fn.bind(this));
        definingProperty = true;
        Object.defineProperty(this, key, {
          value: boundFn,
          configurable: true,
          writable: true
        });
        definingProperty = false;
        return boundFn;
      }
    };
  };
}
// EXTERNAL MODULE: ./node_modules/antd/es/_util/getScroll.js
var getScroll = __webpack_require__(6367);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/scrollTo.js + 1 modules
var scrollTo = __webpack_require__(6148);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(6159);
;// CONCATENATED MODULE: ./node_modules/antd/es/back-top/index.js
















var BackTop = function BackTop(props) {
  var _useMergedState = (0,useMergedState/* default */.Z)(false, {
    value: props.visible
  }),
      _useMergedState2 = (0,slicedToArray/* default */.Z)(_useMergedState, 2),
      visible = _useMergedState2[0],
      setVisible = _useMergedState2[1];

  var ref = /*#__PURE__*/react.createRef();
  var scrollEvent = react.useRef();

  var getDefaultTarget = function getDefaultTarget() {
    return ref.current && ref.current.ownerDocument ? ref.current.ownerDocument : window;
  };

  var handleScroll = throttleByAnimationFrame(function (e) {
    var visibilityHeight = props.visibilityHeight;
    var scrollTop = (0,getScroll/* default */.Z)(e.target, true);
    setVisible(scrollTop > visibilityHeight);
  });

  var bindScrollEvent = function bindScrollEvent() {
    var target = props.target;
    var getTarget = target || getDefaultTarget;
    var container = getTarget();
    scrollEvent.current = (0,addEventListener/* default */.Z)(container, 'scroll', function (e) {
      handleScroll(e);
    });
    handleScroll({
      target: container
    });
  };

  react.useEffect(function () {
    bindScrollEvent();
    return function () {
      if (scrollEvent.current) {
        scrollEvent.current.remove();
      }

      handleScroll.cancel();
    };
  }, [props.target]);

  var scrollToTop = function scrollToTop(e) {
    var onClick = props.onClick,
        target = props.target,
        _props$duration = props.duration,
        duration = _props$duration === void 0 ? 450 : _props$duration;
    (0,scrollTo/* default */.Z)(0, {
      getContainer: target || getDefaultTarget,
      duration: duration
    });

    if (typeof onClick === 'function') {
      onClick(e);
    }
  };

  var renderChildren = function renderChildren(_ref) {
    var prefixCls = _ref.prefixCls,
        rootPrefixCls = _ref.rootPrefixCls;
    var children = props.children;
    var defaultElement = /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-content")
    }, /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-icon")
    }, /*#__PURE__*/react.createElement(icons_VerticalAlignTopOutlined, null)));
    return /*#__PURE__*/react.createElement(rc_motion_es/* default */.Z, {
      visible: visible,
      motionName: "".concat(rootPrefixCls, "-fade")
    }, function (_ref2) {
      var motionClassName = _ref2.className;
      return (0,reactNode/* cloneElement */.Tm)(children || defaultElement, function (_ref3) {
        var className = _ref3.className;
        return {
          className: classnames_default()(motionClassName, className)
        };
      });
    });
  };

  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var customizePrefixCls = props.prefixCls,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className;
  var prefixCls = getPrefixCls('back-top', customizePrefixCls);
  var rootPrefixCls = getPrefixCls();
  var classString = classnames_default()(prefixCls, (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'), className); // fix https://fb.me/react-unknown-prop

  var divProps = (0,omit/* default */.Z)(props, ['prefixCls', 'className', 'children', 'visibilityHeight', 'target', 'visible']);
  return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({}, divProps, {
    className: classString,
    onClick: scrollToTop,
    ref: ref
  }), renderChildren({
    prefixCls: prefixCls,
    rootPrefixCls: rootPrefixCls
  }));
};

BackTop.defaultProps = {
  visibilityHeight: 400
};
/* harmony default export */ var back_top = (/*#__PURE__*/react.memo(BackTop));
// EXTERNAL MODULE: ./src/routers/index.js + 1 modules
var routers = __webpack_require__(6586);
;// CONCATENATED MODULE: ./node_modules/antd/es/result/style/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/antd/es/result/style/index.js


// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js + 1 modules
var CheckCircleFilled = __webpack_require__(8819);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js + 1 modules
var CloseCircleFilled = __webpack_require__(3061);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/ExclamationCircleFilled.js + 1 modules
var ExclamationCircleFilled = __webpack_require__(8855);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/WarningFilled.js
// This icon file is generated automatically.
var WarningFilled = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M955.7 856l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zM480 416c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v184c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V416zm32 352a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, "name": "warning", "theme": "filled" };
/* harmony default export */ var asn_WarningFilled = (WarningFilled);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/WarningFilled.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var WarningFilled_WarningFilled = function WarningFilled(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_WarningFilled
  }));
};

WarningFilled_WarningFilled.displayName = 'WarningFilled';
/* harmony default export */ var icons_WarningFilled = (/*#__PURE__*/react.forwardRef(WarningFilled_WarningFilled));
;// CONCATENATED MODULE: ./node_modules/antd/es/result/noFound.js


var NoFound = function NoFound() {
  return /*#__PURE__*/react.createElement("svg", {
    width: "252",
    height: "294"
  }, /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    d: "M0 .387h251.772v251.772H0z"
  })), /*#__PURE__*/react.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react.createElement("g", {
    transform: "translate(0 .012)"
  }, /*#__PURE__*/react.createElement("mask", {
    fill: "#fff"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M0 127.32v-2.095C0 56.279 55.892.387 124.838.387h2.096c68.946 0 124.838 55.892 124.838 124.838v2.096c0 68.946-55.892 124.838-124.838 124.838h-2.096C55.892 252.16 0 196.267 0 127.321",
    fill: "#E4EBF7",
    mask: "url(#b)"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M39.755 130.84a8.276 8.276 0 1 1-16.468-1.66 8.276 8.276 0 0 1 16.468 1.66",
    fill: "#FFF"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M36.975 134.297l10.482 5.943M48.373 146.508l-12.648 10.788",
    stroke: "#FFF",
    strokeWidth: "2"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M39.875 159.352a5.667 5.667 0 1 1-11.277-1.136 5.667 5.667 0 0 1 11.277 1.136M57.588 143.247a5.708 5.708 0 1 1-11.358-1.145 5.708 5.708 0 0 1 11.358 1.145M99.018 26.875l29.82-.014a4.587 4.587 0 1 0-.003-9.175l-29.82.013a4.587 4.587 0 1 0 .003 9.176M110.424 45.211l29.82-.013a4.588 4.588 0 0 0-.004-9.175l-29.82.013a4.587 4.587 0 1 0 .004 9.175",
    fill: "#FFF"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M112.798 26.861v-.002l15.784-.006a4.588 4.588 0 1 0 .003 9.175l-15.783.007v-.002a4.586 4.586 0 0 0-.004-9.172M184.523 135.668c-.553 5.485-5.447 9.483-10.931 8.93-5.485-.553-9.483-5.448-8.93-10.932.552-5.485 5.447-9.483 10.932-8.93 5.485.553 9.483 5.447 8.93 10.932",
    fill: "#FFF"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M179.26 141.75l12.64 7.167M193.006 156.477l-15.255 13.011",
    stroke: "#FFF",
    strokeWidth: "2"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M184.668 170.057a6.835 6.835 0 1 1-13.6-1.372 6.835 6.835 0 0 1 13.6 1.372M203.34 153.325a6.885 6.885 0 1 1-13.7-1.382 6.885 6.885 0 0 1 13.7 1.382",
    fill: "#FFF"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M151.931 192.324a2.222 2.222 0 1 1-4.444 0 2.222 2.222 0 0 1 4.444 0zM225.27 116.056a2.222 2.222 0 1 1-4.445 0 2.222 2.222 0 0 1 4.444 0zM216.38 151.08a2.223 2.223 0 1 1-4.446-.001 2.223 2.223 0 0 1 4.446 0zM176.917 107.636a2.223 2.223 0 1 1-4.445 0 2.223 2.223 0 0 1 4.445 0zM195.291 92.165a2.223 2.223 0 1 1-4.445 0 2.223 2.223 0 0 1 4.445 0zM202.058 180.711a2.223 2.223 0 1 1-4.446 0 2.223 2.223 0 0 1 4.446 0z",
    stroke: "#FFF",
    strokeWidth: "2"
  }), /*#__PURE__*/react.createElement("path", {
    stroke: "#FFF",
    strokeWidth: "2",
    d: "M214.404 153.302l-1.912 20.184-10.928 5.99M173.661 174.792l-6.356 9.814h-11.36l-4.508 6.484M174.941 125.168v-15.804M220.824 117.25l-12.84 7.901-15.31-7.902V94.39"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M166.588 65.936h-3.951a4.756 4.756 0 0 1-4.743-4.742 4.756 4.756 0 0 1 4.743-4.743h3.951a4.756 4.756 0 0 1 4.743 4.743 4.756 4.756 0 0 1-4.743 4.742",
    fill: "#FFF"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M174.823 30.03c0-16.281 13.198-29.48 29.48-29.48 16.28 0 29.48 13.199 29.48 29.48 0 16.28-13.2 29.48-29.48 29.48-16.282 0-29.48-13.2-29.48-29.48",
    fill: "#1890FF"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M205.952 38.387c.5.5.785 1.142.785 1.928s-.286 1.465-.785 1.964c-.572.5-1.214.75-2 .75-.785 0-1.429-.285-1.929-.785-.572-.5-.82-1.143-.82-1.929s.248-1.428.82-1.928c.5-.5 1.144-.75 1.93-.75.785 0 1.462.25 1.999.75m4.285-19.463c1.428 1.249 2.143 2.963 2.143 5.142 0 1.712-.427 3.13-1.219 4.25-.067.096-.137.18-.218.265-.416.429-1.41 1.346-2.956 2.699a5.07 5.07 0 0 0-1.428 1.75 5.207 5.207 0 0 0-.536 2.357v.5h-4.107v-.5c0-1.357.215-2.536.714-3.5.464-.964 1.857-2.464 4.178-4.536l.43-.5c.643-.785.964-1.643.964-2.535 0-1.18-.358-2.108-1-2.785-.678-.68-1.643-1.001-2.858-1.001-1.536 0-2.642.464-3.357 1.43-.37.5-.621 1.135-.76 1.904a1.999 1.999 0 0 1-1.971 1.63h-.004c-1.277 0-2.257-1.183-1.98-2.43.337-1.518 1.02-2.78 2.073-3.784 1.536-1.5 3.607-2.25 6.25-2.25 2.32 0 4.214.607 5.642 1.894",
    fill: "#FFF"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M52.04 76.131s21.81 5.36 27.307 15.945c5.575 10.74-6.352 9.26-15.73 4.935-10.86-5.008-24.7-11.822-11.577-20.88",
    fill: "#FFB594"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M90.483 67.504l-.449 2.893c-.753.49-4.748-2.663-4.748-2.663l-1.645.748-1.346-5.684s6.815-4.589 8.917-5.018c2.452-.501 9.884.94 10.7 2.278 0 0 1.32.486-2.227.69-3.548.203-5.043.447-6.79 3.132-1.747 2.686-2.412 3.624-2.412 3.624",
    fill: "#FFC6A0"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M128.055 111.367c-2.627-7.724-6.15-13.18-8.917-15.478-3.5-2.906-9.34-2.225-11.366-4.187-1.27-1.231-3.215-1.197-3.215-1.197s-14.98-3.158-16.828-3.479c-2.37-.41-2.124-.714-6.054-1.405-1.57-1.907-2.917-1.122-2.917-1.122l-7.11-1.383c-.853-1.472-2.423-1.023-2.423-1.023l-2.468-.897c-1.645 9.976-7.74 13.796-7.74 13.796 1.795 1.122 15.703 8.3 15.703 8.3l5.107 37.11s-3.321 5.694 1.346 9.109c0 0 19.883-3.743 34.921-.329 0 0 3.047-2.546.972-8.806.523-3.01 1.394-8.263 1.736-11.622.385.772 2.019 1.918 3.14 3.477 0 0 9.407-7.365 11.052-14.012-.832-.723-1.598-1.585-2.267-2.453-.567-.736-.358-2.056-.765-2.717-.669-1.084-1.804-1.378-1.907-1.682",
    fill: "#FFF"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M101.09 289.998s4.295 2.041 7.354 1.021c2.821-.94 4.53.668 7.08 1.178 2.55.51 6.874 1.1 11.686-1.26-.103-5.51-6.889-3.98-11.96-6.713-2.563-1.38-3.784-4.722-3.598-8.799h-9.402s-1.392 10.52-1.16 14.573",
    fill: "#CBD1D1"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M101.067 289.826s2.428 1.271 6.759.653c3.058-.437 3.712.481 7.423 1.031 3.712.55 10.724-.069 11.823-.894.413 1.1-.343 2.063-.343 2.063s-1.512.603-4.812.824c-2.03.136-5.8.291-7.607-.503-1.787-1.375-5.247-1.903-5.728-.241-3.918.95-7.355-.286-7.355-.286l-.16-2.647z",
    fill: "#2B0849"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M108.341 276.044h3.094s-.103 6.702 4.536 8.558c-4.64.618-8.558-2.303-7.63-8.558",
    fill: "#A4AABA"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M57.542 272.401s-2.107 7.416-4.485 12.306c-1.798 3.695-4.225 7.492 5.465 7.492 6.648 0 8.953-.48 7.423-6.599-1.53-6.12.266-13.199.266-13.199h-8.669z",
    fill: "#CBD1D1"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M51.476 289.793s2.097 1.169 6.633 1.169c6.083 0 8.249-1.65 8.249-1.65s.602 1.114-.619 2.165c-.993.855-3.597 1.591-7.39 1.546-4.145-.048-5.832-.566-6.736-1.168-.825-.55-.687-1.58-.137-2.062",
    fill: "#2B0849"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M58.419 274.304s.033 1.519-.314 2.93c-.349 1.42-1.078 3.104-1.13 4.139-.058 1.151 4.537 1.58 5.155.034.62-1.547 1.294-6.427 1.913-7.252.619-.825-4.903-2.119-5.624.15",
    fill: "#A4AABA"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M99.66 278.514l13.378.092s1.298-54.52 1.853-64.403c.554-9.882 3.776-43.364 1.002-63.128l-12.547-.644-22.849.78s-.434 3.966-1.195 9.976c-.063.496-.682.843-.749 1.365-.075.585.423 1.354.32 1.966-2.364 14.08-6.377 33.104-8.744 46.677-.116.666-1.234 1.009-1.458 2.691-.04.302.211 1.525.112 1.795-6.873 18.744-10.949 47.842-14.277 61.885l14.607-.014s2.197-8.57 4.03-16.97c2.811-12.886 23.111-85.01 23.111-85.01l3.016-.521 1.043 46.35s-.224 1.234.337 2.02c.56.785-.56 1.123-.392 2.244l.392 1.794s-.449 7.178-.898 11.89c-.448 4.71-.092 39.165-.092 39.165",
    fill: "#7BB2F9"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M76.085 221.626c1.153.094 4.038-2.019 6.955-4.935M106.36 225.142s2.774-1.11 6.103-3.883",
    stroke: "#648BD8",
    strokeWidth: "1.051",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M107.275 222.1s2.773-1.11 6.102-3.884",
    stroke: "#648BD8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M74.74 224.767s2.622-.591 6.505-3.365M86.03 151.634c-.27 3.106.3 8.525-4.336 9.123M103.625 149.88s.11 14.012-1.293 15.065c-2.219 1.664-2.99 1.944-2.99 1.944M99.79 150.438s.035 12.88-1.196 24.377M93.673 175.911s7.212-1.664 9.431-1.664M74.31 205.861a212.013 212.013 0 0 1-.979 4.56s-1.458 1.832-1.009 3.776c.449 1.944-.947 2.045-4.985 15.355-1.696 5.59-4.49 18.591-6.348 27.597l-.231 1.12M75.689 197.807a320.934 320.934 0 0 1-.882 4.754M82.591 152.233L81.395 162.7s-1.097.15-.5 2.244c.113 1.346-2.674 15.775-5.18 30.43M56.12 274.418h13.31",
    stroke: "#648BD8",
    strokeWidth: "1.051",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M116.241 148.22s-17.047-3.104-35.893.2c.158 2.514-.003 4.15-.003 4.15s14.687-2.818 35.67-.312c.252-2.355.226-4.038.226-4.038",
    fill: "#192064"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M106.322 151.165l.003-4.911a.81.81 0 0 0-.778-.815c-2.44-.091-5.066-.108-7.836-.014a.818.818 0 0 0-.789.815l-.003 4.906a.81.81 0 0 0 .831.813c2.385-.06 4.973-.064 7.73.017a.815.815 0 0 0 .842-.81",
    fill: "#FFF"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M105.207 150.233l.002-3.076a.642.642 0 0 0-.619-.646 94.321 94.321 0 0 0-5.866-.01.65.65 0 0 0-.63.647v3.072a.64.64 0 0 0 .654.644 121.12 121.12 0 0 1 5.794.011c.362.01.665-.28.665-.642",
    fill: "#192064"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M100.263 275.415h12.338M101.436 270.53c.006 3.387.042 5.79.111 6.506M101.451 264.548a915.75 915.75 0 0 0-.015 4.337M100.986 174.965l.898 44.642s.673 1.57-.225 2.692c-.897 1.122 2.468.673.898 2.243-1.57 1.57.897 1.122 0 3.365-.596 1.489-.994 21.1-1.096 35.146",
    stroke: "#648BD8",
    strokeWidth: "1.051",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M46.876 83.427s-.516 6.045 7.223 5.552c11.2-.712 9.218-9.345 31.54-21.655-.786-2.708-2.447-4.744-2.447-4.744s-11.068 3.11-22.584 8.046c-6.766 2.9-13.395 6.352-13.732 12.801M104.46 91.057l.941-5.372-8.884-11.43-5.037 5.372-1.74 7.834a.321.321 0 0 0 .108.32c.965.8 6.5 5.013 14.347 3.544a.332.332 0 0 0 .264-.268",
    fill: "#FFC6A0"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M93.942 79.387s-4.533-2.853-2.432-6.855c1.623-3.09 4.513 1.133 4.513 1.133s.52-3.642 3.121-3.642c.52-1.04 1.561-4.162 1.561-4.162s11.445 2.601 13.526 3.121c0 5.203-2.304 19.424-7.84 19.861-8.892.703-12.449-9.456-12.449-9.456",
    fill: "#FFC6A0"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M113.874 73.446c2.601-2.081 3.47-9.722 3.47-9.722s-2.479-.49-6.64-2.05c-4.683-2.081-12.798-4.747-17.48.976-9.668 3.223-2.05 19.823-2.05 19.823l2.713-3.021s-3.935-3.287-2.08-6.243c2.17-3.462 3.92 1.073 3.92 1.073s.637-2.387 3.581-3.342c.355-.71 1.036-2.674 1.432-3.85a1.073 1.073 0 0 1 1.263-.704c2.4.558 8.677 2.019 11.356 2.662.522.125.871.615.82 1.15l-.305 3.248z",
    fill: "#520038"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M104.977 76.064c-.103.61-.582 1.038-1.07.956-.489-.083-.801-.644-.698-1.254.103-.61.582-1.038 1.07-.956.488.082.8.644.698 1.254M112.132 77.694c-.103.61-.582 1.038-1.07.956-.488-.083-.8-.644-.698-1.254.103-.61.582-1.038 1.07-.956.488.082.8.643.698 1.254",
    fill: "#552950"
  }), /*#__PURE__*/react.createElement("path", {
    stroke: "#DB836E",
    strokeWidth: "1.118",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M110.13 74.84l-.896 1.61-.298 4.357h-2.228"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M110.846 74.481s1.79-.716 2.506.537",
    stroke: "#5C2552",
    strokeWidth: "1.118",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M92.386 74.282s.477-1.114 1.113-.716c.637.398 1.274 1.433.558 1.99-.717.556.159 1.67.159 1.67",
    stroke: "#DB836E",
    strokeWidth: "1.118",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M103.287 72.93s1.83 1.113 4.137.954",
    stroke: "#5C2552",
    strokeWidth: "1.118",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M103.685 81.762s2.227 1.193 4.376 1.193M104.64 84.308s.954.398 1.511.318M94.693 81.205s2.308 7.4 10.424 7.639",
    stroke: "#DB836E",
    strokeWidth: "1.118",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M81.45 89.384s.45 5.647-4.935 12.787M69 82.654s-.726 9.282-8.204 14.206",
    stroke: "#E4EBF7",
    strokeWidth: "1.101",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M129.405 122.865s-5.272 7.403-9.422 10.768",
    stroke: "#E4EBF7",
    strokeWidth: "1.051",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M119.306 107.329s.452 4.366-2.127 32.062",
    stroke: "#E4EBF7",
    strokeWidth: "1.101",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M150.028 151.232h-49.837a1.01 1.01 0 0 1-1.01-1.01v-31.688c0-.557.452-1.01 1.01-1.01h49.837c.558 0 1.01.453 1.01 1.01v31.688a1.01 1.01 0 0 1-1.01 1.01",
    fill: "#F2D7AD"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M150.29 151.232h-19.863v-33.707h20.784v32.786a.92.92 0 0 1-.92.92",
    fill: "#F4D19D"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M123.554 127.896H92.917a.518.518 0 0 1-.425-.816l6.38-9.113c.193-.277.51-.442.85-.442h31.092l-7.26 10.371z",
    fill: "#F2D7AD"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#CC9B6E",
    d: "M123.689 128.447H99.25v-.519h24.169l7.183-10.26.424.298z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M158.298 127.896h-18.669a2.073 2.073 0 0 1-1.659-.83l-7.156-9.541h19.965c.49 0 .95.23 1.244.622l6.69 8.92a.519.519 0 0 1-.415.83",
    fill: "#F4D19D"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#CC9B6E",
    d: "M157.847 128.479h-19.384l-7.857-10.475.415-.31 7.7 10.266h19.126zM130.554 150.685l-.032-8.177.519-.002.032 8.177z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#CC9B6E",
    d: "M130.511 139.783l-.08-21.414.519-.002.08 21.414zM111.876 140.932l-.498-.143 1.479-5.167.498.143zM108.437 141.06l-2.679-2.935 2.665-3.434.41.318-2.397 3.089 2.384 2.612zM116.607 141.06l-.383-.35 2.383-2.612-2.397-3.089.41-.318 2.665 3.434z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M154.316 131.892l-3.114-1.96.038 3.514-1.043.092c-1.682.115-3.634.23-4.789.23-1.902 0-2.693 2.258 2.23 2.648l-2.645-.596s-2.168 1.317.504 2.3c0 0-1.58 1.217.561 2.58-.584 3.504 5.247 4.058 7.122 3.59 1.876-.47 4.233-2.359 4.487-5.16.28-3.085-.89-5.432-3.35-7.238",
    fill: "#FFC6A0"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M153.686 133.577s-6.522.47-8.36.372c-1.836-.098-1.904 2.19 2.359 2.264 3.739.15 5.451-.044 5.451-.044",
    stroke: "#DB836E",
    strokeWidth: "1.051",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M145.16 135.877c-1.85 1.346.561 2.355.561 2.355s3.478.898 6.73.617",
    stroke: "#DB836E",
    strokeWidth: "1.051",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M151.89 141.71s-6.28.111-6.73-2.132c-.223-1.346.45-1.402.45-1.402M146.114 140.868s-1.103 3.16 5.44 3.533M151.202 129.932v3.477M52.838 89.286c3.533-.337 8.423-1.248 13.582-7.754",
    stroke: "#DB836E",
    strokeWidth: "1.051",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M168.567 248.318a6.647 6.647 0 0 1-6.647-6.647v-66.466a6.647 6.647 0 1 1 13.294 0v66.466a6.647 6.647 0 0 1-6.647 6.647",
    fill: "#5BA02E"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M176.543 247.653a6.647 6.647 0 0 1-6.646-6.647v-33.232a6.647 6.647 0 1 1 13.293 0v33.232a6.647 6.647 0 0 1-6.647 6.647",
    fill: "#92C110"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M186.443 293.613H158.92a3.187 3.187 0 0 1-3.187-3.187v-46.134a3.187 3.187 0 0 1 3.187-3.187h27.524a3.187 3.187 0 0 1 3.187 3.187v46.134a3.187 3.187 0 0 1-3.187 3.187",
    fill: "#F2D7AD"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M88.979 89.48s7.776 5.384 16.6 2.842",
    stroke: "#E4EBF7",
    strokeWidth: "1.101",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

/* harmony default export */ var noFound = (NoFound);
;// CONCATENATED MODULE: ./node_modules/antd/es/result/serverError.js


var ServerError = function ServerError() {
  return /*#__PURE__*/react.createElement("svg", {
    width: "254",
    height: "294"
  }, /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    d: "M0 .335h253.49v253.49H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M0 293.665h253.49V.401H0z"
  })), /*#__PURE__*/react.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react.createElement("g", {
    transform: "translate(0 .067)"
  }, /*#__PURE__*/react.createElement("mask", {
    fill: "#fff"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M0 128.134v-2.11C0 56.608 56.273.334 125.69.334h2.11c69.416 0 125.69 56.274 125.69 125.69v2.11c0 69.417-56.274 125.69-125.69 125.69h-2.11C56.273 253.824 0 197.551 0 128.134",
    fill: "#E4EBF7",
    mask: "url(#b)"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M39.989 132.108a8.332 8.332 0 1 1-16.581-1.671 8.332 8.332 0 0 1 16.58 1.671",
    fill: "#FFF"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M37.19 135.59l10.553 5.983M48.665 147.884l-12.734 10.861",
    stroke: "#FFF",
    strokeWidth: "2"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M40.11 160.816a5.706 5.706 0 1 1-11.354-1.145 5.706 5.706 0 0 1 11.354 1.145M57.943 144.6a5.747 5.747 0 1 1-11.436-1.152 5.747 5.747 0 0 1 11.436 1.153M99.656 27.434l30.024-.013a4.619 4.619 0 1 0-.004-9.238l-30.024.013a4.62 4.62 0 0 0 .004 9.238M111.14 45.896l30.023-.013a4.62 4.62 0 1 0-.004-9.238l-30.024.013a4.619 4.619 0 1 0 .004 9.238",
    fill: "#FFF"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M113.53 27.421v-.002l15.89-.007a4.619 4.619 0 1 0 .005 9.238l-15.892.007v-.002a4.618 4.618 0 0 0-.004-9.234M150.167 70.091h-3.979a4.789 4.789 0 0 1-4.774-4.775 4.788 4.788 0 0 1 4.774-4.774h3.979a4.789 4.789 0 0 1 4.775 4.774 4.789 4.789 0 0 1-4.775 4.775",
    fill: "#FFF"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M171.687 30.234c0-16.392 13.289-29.68 29.681-29.68 16.392 0 29.68 13.288 29.68 29.68 0 16.393-13.288 29.681-29.68 29.681s-29.68-13.288-29.68-29.68",
    fill: "#FF603B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M203.557 19.435l-.676 15.035a1.514 1.514 0 0 1-3.026 0l-.675-15.035a2.19 2.19 0 1 1 4.377 0m-.264 19.378c.513.477.77 1.1.77 1.87s-.257 1.393-.77 1.907c-.55.476-1.21.733-1.943.733a2.545 2.545 0 0 1-1.87-.77c-.55-.514-.806-1.136-.806-1.87 0-.77.256-1.393.806-1.87.513-.513 1.137-.733 1.87-.733.77 0 1.43.22 1.943.733",
    fill: "#FFF"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M119.3 133.275c4.426-.598 3.612-1.204 4.079-4.778.675-5.18-3.108-16.935-8.262-25.118-1.088-10.72-12.598-11.24-12.598-11.24s4.312 4.895 4.196 16.199c1.398 5.243.804 14.45.804 14.45s5.255 11.369 11.78 10.487",
    fill: "#FFB594"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M100.944 91.61s1.463-.583 3.211.582c8.08 1.398 10.368 6.706 11.3 11.368 1.864 1.282 1.864 2.33 1.864 3.496.365.777 1.515 3.03 1.515 3.03s-7.225 1.748-10.954 6.758c-1.399-6.41-6.936-25.235-6.936-25.235",
    fill: "#FFF"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M94.008 90.5l1.019-5.815-9.23-11.874-5.233 5.581-2.593 9.863s8.39 5.128 16.037 2.246",
    fill: "#FFB594"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M82.931 78.216s-4.557-2.868-2.445-6.892c1.632-3.107 4.537 1.139 4.537 1.139s.524-3.662 3.139-3.662c.523-1.046 1.569-4.184 1.569-4.184s11.507 2.615 13.6 3.138c-.001 5.23-2.317 19.529-7.884 19.969-8.94.706-12.516-9.508-12.516-9.508",
    fill: "#FFC6A0"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M102.971 72.243c2.616-2.093 3.489-9.775 3.489-9.775s-2.492-.492-6.676-2.062c-4.708-2.092-12.867-4.771-17.575.982-9.54 4.41-2.062 19.93-2.062 19.93l2.729-3.037s-3.956-3.304-2.092-6.277c2.183-3.48 3.943 1.08 3.943 1.08s.64-2.4 3.6-3.36c.356-.714 1.04-2.69 1.44-3.872a1.08 1.08 0 0 1 1.27-.707c2.41.56 8.723 2.03 11.417 2.676.524.126.876.619.825 1.156l-.308 3.266z",
    fill: "#520038"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M101.22 76.514c-.104.613-.585 1.044-1.076.96-.49-.082-.805-.646-.702-1.26.104-.613.585-1.044 1.076-.961.491.083.805.647.702 1.26M94.26 75.074c-.104.613-.585 1.044-1.076.96-.49-.082-.805-.646-.702-1.26.104-.613.585-1.044 1.076-.96.491.082.805.646.702 1.26",
    fill: "#552950"
  }), /*#__PURE__*/react.createElement("path", {
    stroke: "#DB836E",
    strokeWidth: "1.063",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M99.206 73.644l-.9 1.62-.3 4.38h-2.24"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M99.926 73.284s1.8-.72 2.52.54",
    stroke: "#5C2552",
    strokeWidth: "1.117",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M81.367 73.084s.48-1.12 1.12-.72c.64.4 1.28 1.44.56 2s.16 1.68.16 1.68",
    stroke: "#DB836E",
    strokeWidth: "1.117",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M92.326 71.724s1.84 1.12 4.16.96",
    stroke: "#5C2552",
    strokeWidth: "1.117",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M92.726 80.604s2.24 1.2 4.4 1.2M93.686 83.164s.96.4 1.52.32M83.687 80.044s1.786 6.547 9.262 7.954",
    stroke: "#DB836E",
    strokeWidth: "1.063",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M95.548 91.663s-1.068 2.821-8.298 2.105c-7.23-.717-10.29-5.044-10.29-5.044",
    stroke: "#E4EBF7",
    strokeWidth: "1.136",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M78.126 87.478s6.526 4.972 16.47 2.486c0 0 9.577 1.02 11.536 5.322 5.36 11.77.543 36.835 0 39.962 3.496 4.055-.466 8.483-.466 8.483-15.624-3.548-35.81-.6-35.81-.6-4.849-3.546-1.223-9.044-1.223-9.044L62.38 110.32c-2.485-15.227.833-19.803 3.549-20.743 3.03-1.049 8.04-1.282 8.04-1.282.496-.058 1.08-.076 1.37-.233 2.36-1.282 2.787-.583 2.787-.583",
    fill: "#FFF"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M65.828 89.81s-6.875.465-7.59 8.156c-.466 8.857 3.03 10.954 3.03 10.954s6.075 22.102 16.796 22.957c8.39-2.176 4.758-6.702 4.661-11.42-.233-11.304-7.108-16.897-7.108-16.897s-4.212-13.75-9.789-13.75",
    fill: "#FFC6A0"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M71.716 124.225s.855 11.264 9.828 6.486c4.765-2.536 7.581-13.828 9.789-22.568 1.456-5.768 2.58-12.197 2.58-12.197l-4.973-1.709s-2.408 5.516-7.769 12.275c-4.335 5.467-9.144 11.11-9.455 17.713",
    fill: "#FFC6A0"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M108.463 105.191s1.747 2.724-2.331 30.535c2.376 2.216 1.053 6.012-.233 7.51",
    stroke: "#E4EBF7",
    strokeWidth: "1.085",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M123.262 131.527s-.427 2.732-11.77 1.981c-15.187-1.006-25.326-3.25-25.326-3.25l.933-5.8s.723.215 9.71-.068c11.887-.373 18.714-6.07 24.964-1.022 4.039 3.263 1.489 8.16 1.489 8.16",
    fill: "#FFC6A0"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M70.24 90.974s-5.593-4.739-11.054 2.68c-3.318 7.223.517 15.284 2.664 19.578-.31 3.729 2.33 4.311 2.33 4.311s.108.895 1.516 2.68c4.078-7.03 6.72-9.166 13.711-12.546-.328-.656-1.877-3.265-1.825-3.767.175-1.69-1.282-2.623-1.282-2.623s-.286-.156-1.165-2.738c-.788-2.313-2.036-5.177-4.895-7.575",
    fill: "#FFF"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M90.232 288.027s4.855 2.308 8.313 1.155c3.188-1.063 5.12.755 8.002 1.331 2.881.577 7.769 1.243 13.207-1.424-.117-6.228-7.786-4.499-13.518-7.588-2.895-1.56-4.276-5.336-4.066-9.944H91.544s-1.573 11.89-1.312 16.47",
    fill: "#CBD1D1"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M90.207 287.833s2.745 1.437 7.639.738c3.456-.494 3.223.66 7.418 1.282 4.195.621 13.092-.194 14.334-1.126.466 1.242-.388 2.33-.388 2.33s-1.709.682-5.438.932c-2.295.154-8.098.276-10.14-.621-2.02-1.554-4.894-1.515-6.06-.234-4.427 1.075-7.184-.31-7.184-.31l-.181-2.991z",
    fill: "#2B0849"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M98.429 272.257h3.496s-.117 7.574 5.127 9.671c-5.244.7-9.672-2.602-8.623-9.671",
    fill: "#A4AABA"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M44.425 272.046s-2.208 7.774-4.702 12.899c-1.884 3.874-4.428 7.854 5.729 7.854 6.97 0 9.385-.503 7.782-6.917-1.604-6.415.279-13.836.279-13.836h-9.088z",
    fill: "#CBD1D1"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M38.066 290.277s2.198 1.225 6.954 1.225c6.376 0 8.646-1.73 8.646-1.73s.63 1.168-.649 2.27c-1.04.897-3.77 1.668-7.745 1.621-4.347-.05-6.115-.593-7.062-1.224-.864-.577-.72-1.657-.144-2.162",
    fill: "#2B0849"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M45.344 274.041s.035 1.592-.329 3.07c-.365 1.49-1.13 3.255-1.184 4.34-.061 1.206 4.755 1.657 5.403.036.65-1.622 1.357-6.737 2.006-7.602.648-.865-5.14-2.222-5.896.156",
    fill: "#A4AABA"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M89.476 277.57l13.899.095s1.349-56.643 1.925-66.909c.576-10.267 3.923-45.052 1.042-65.585l-13.037-.669-23.737.81s-.452 4.12-1.243 10.365c-.065.515-.708.874-.777 1.417-.078.608.439 1.407.332 2.044-2.455 14.627-5.797 32.736-8.256 46.837-.121.693-1.282 1.048-1.515 2.796-.042.314.22 1.584.116 1.865-7.14 19.473-12.202 52.601-15.66 67.19l15.176-.015s2.282-10.145 4.185-18.871c2.922-13.389 24.012-88.32 24.012-88.32l3.133-.954-.158 48.568s-.233 1.282.35 2.098c.583.815-.581 1.167-.408 2.331l.408 1.864s-.466 7.458-.932 12.352c-.467 4.895 1.145 40.69 1.145 40.69",
    fill: "#7BB2F9"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M64.57 218.881c1.197.099 4.195-2.097 7.225-5.127M96.024 222.534s2.881-1.152 6.34-4.034",
    stroke: "#648BD8",
    strokeWidth: "1.085",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M96.973 219.373s2.882-1.153 6.34-4.034",
    stroke: "#648BD8",
    strokeWidth: "1.032",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M63.172 222.144s2.724-.614 6.759-3.496M74.903 146.166c-.281 3.226.31 8.856-4.506 9.478M93.182 144.344s.115 14.557-1.344 15.65c-2.305 1.73-3.107 2.02-3.107 2.02M89.197 144.923s.269 13.144-1.01 25.088M83.525 170.71s6.81-1.051 9.116-1.051M46.026 270.045l-.892 4.538M46.937 263.289l-.815 4.157M62.725 202.503c-.33 1.618-.102 1.904-.449 3.438 0 0-2.756 1.903-2.29 3.923.466 2.02-.31 3.424-4.505 17.252-1.762 5.807-4.233 18.922-6.165 28.278-.03.144-.521 2.646-1.14 5.8M64.158 194.136c-.295 1.658-.6 3.31-.917 4.938M71.33 146.787l-1.244 10.877s-1.14.155-.519 2.33c.117 1.399-2.778 16.39-5.382 31.615M44.242 273.727H58.07",
    stroke: "#648BD8",
    strokeWidth: "1.085",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M106.18 142.117c-3.028-.489-18.825-2.744-36.219.2a.625.625 0 0 0-.518.644c.063 1.307.044 2.343.015 2.995a.617.617 0 0 0 .716.636c3.303-.534 17.037-2.412 35.664-.266.347.04.66-.214.692-.56.124-1.347.16-2.425.17-3.029a.616.616 0 0 0-.52-.62",
    fill: "#192064"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M96.398 145.264l.003-5.102a.843.843 0 0 0-.809-.847 114.104 114.104 0 0 0-8.141-.014.85.85 0 0 0-.82.847l-.003 5.097c0 .476.388.857.864.845 2.478-.064 5.166-.067 8.03.017a.848.848 0 0 0 .876-.843",
    fill: "#FFF"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M95.239 144.296l.002-3.195a.667.667 0 0 0-.643-.672c-1.9-.061-3.941-.073-6.094-.01a.675.675 0 0 0-.654.672l-.002 3.192c0 .376.305.677.68.669 1.859-.042 3.874-.043 6.02.012.376.01.69-.291.691-.668",
    fill: "#192064"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M90.102 273.522h12.819M91.216 269.761c.006 3.519-.072 5.55 0 6.292M90.923 263.474c-.009 1.599-.016 2.558-.016 4.505M90.44 170.404l.932 46.38s.7 1.631-.233 2.796c-.932 1.166 2.564.7.932 2.33-1.63 1.633.933 1.166 0 3.497-.618 1.546-1.031 21.921-1.138 36.513",
    stroke: "#648BD8",
    strokeWidth: "1.085",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M73.736 98.665l2.214 4.312s2.098.816 1.865 2.68l.816 2.214M64.297 116.611c.233-.932 2.176-7.147 12.585-10.488M77.598 90.042s7.691 6.137 16.547 2.72",
    stroke: "#E4EBF7",
    strokeWidth: "1.085",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M91.974 86.954s5.476-.816 7.574-4.545c1.297-.345.72 2.212-.33 3.671-.7.971-1.01 1.554-1.01 1.554s.194.31.155.816c-.053.697-.175.653-.272 1.048-.081.335.108.657 0 1.049-.046.17-.198.5-.382.878-.12.249-.072.687-.2.948-.231.469-1.562 1.87-2.622 2.855-3.826 3.554-5.018 1.644-6.001-.408-.894-1.865-.661-5.127-.874-6.875-.35-2.914-2.622-3.03-1.923-4.429.343-.685 2.87.69 3.263 1.748.757 2.04 2.952 1.807 2.622 1.69",
    fill: "#FFC6A0"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M99.8 82.429c-.465.077-.35.272-.97 1.243-.622.971-4.817 2.932-6.39 3.224-2.589.48-2.278-1.56-4.254-2.855-1.69-1.107-3.562-.638-1.398 1.398.99.932.932 1.107 1.398 3.205.335 1.506-.64 3.67.7 5.593",
    stroke: "#DB836E",
    strokeWidth: ".774",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M79.543 108.673c-2.1 2.926-4.266 6.175-5.557 8.762",
    stroke: "#E59788",
    strokeWidth: ".774",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M87.72 124.768s-2.098-1.942-5.127-2.719c-3.03-.777-3.574-.155-5.516.078-1.942.233-3.885-.932-3.652.7.233 1.63 5.05 1.01 5.206 2.097.155 1.087-6.37 2.796-8.313 2.175-.777.777.466 1.864 2.02 2.175.233 1.554 2.253 1.554 2.253 1.554s.699 1.01 2.641 1.088c2.486 1.32 8.934-.7 10.954-1.554 2.02-.855-.466-5.594-.466-5.594",
    fill: "#FFC6A0"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M73.425 122.826s.66 1.127 3.167 1.418c2.315.27 2.563.583 2.563.583s-2.545 2.894-9.07 2.272M72.416 129.274s3.826.097 4.933-.718M74.98 130.75s1.961.136 3.36-.505M77.232 131.916s1.748.019 2.914-.505M73.328 122.321s-.595-1.032 1.262-.427c1.671.544 2.833.055 5.128.155 1.389.061 3.067-.297 3.982.15 1.606.784 3.632 2.181 3.632 2.181s10.526 1.204 19.033-1.127M78.864 108.104s-8.39 2.758-13.168 12.12",
    stroke: "#E59788",
    strokeWidth: ".774",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M109.278 112.533s3.38-3.613 7.575-4.662",
    stroke: "#E4EBF7",
    strokeWidth: "1.085",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M107.375 123.006s9.697-2.745 11.445-.88",
    stroke: "#E59788",
    strokeWidth: ".774",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M194.605 83.656l3.971-3.886M187.166 90.933l3.736-3.655M191.752 84.207l-4.462-4.56M198.453 91.057l-4.133-4.225M129.256 163.074l3.718-3.718M122.291 170.039l3.498-3.498M126.561 163.626l-4.27-4.27M132.975 170.039l-3.955-3.955",
    stroke: "#BFCDDD",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M190.156 211.779h-1.604a4.023 4.023 0 0 1-4.011-4.011V175.68a4.023 4.023 0 0 1 4.01-4.01h1.605a4.023 4.023 0 0 1 4.011 4.01v32.088a4.023 4.023 0 0 1-4.01 4.01",
    fill: "#A3B4C6"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M237.824 212.977a4.813 4.813 0 0 1-4.813 4.813h-86.636a4.813 4.813 0 0 1 0-9.626h86.636a4.813 4.813 0 0 1 4.813 4.813",
    fill: "#A3B4C6"
  }), /*#__PURE__*/react.createElement("mask", {
    fill: "#fff"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#A3B4C6",
    mask: "url(#d)",
    d: "M154.098 190.096h70.513v-84.617h-70.513z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M224.928 190.096H153.78a3.219 3.219 0 0 1-3.208-3.209V167.92a3.219 3.219 0 0 1 3.208-3.21h71.148a3.219 3.219 0 0 1 3.209 3.21v18.967a3.219 3.219 0 0 1-3.21 3.209M224.928 130.832H153.78a3.218 3.218 0 0 1-3.208-3.208v-18.968a3.219 3.219 0 0 1 3.208-3.209h71.148a3.219 3.219 0 0 1 3.209 3.21v18.967a3.218 3.218 0 0 1-3.21 3.208",
    fill: "#BFCDDD",
    mask: "url(#d)"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M159.563 120.546a2.407 2.407 0 1 1 0-4.813 2.407 2.407 0 0 1 0 4.813M166.98 120.546a2.407 2.407 0 1 1 0-4.813 2.407 2.407 0 0 1 0 4.813M174.397 120.546a2.407 2.407 0 1 1 0-4.813 2.407 2.407 0 0 1 0 4.813M222.539 120.546h-22.461a.802.802 0 0 1-.802-.802v-3.208c0-.443.359-.803.802-.803h22.46c.444 0 .803.36.803.803v3.208c0 .443-.36.802-.802.802",
    fill: "#FFF",
    mask: "url(#d)"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M224.928 160.464H153.78a3.218 3.218 0 0 1-3.208-3.209v-18.967a3.219 3.219 0 0 1 3.208-3.209h71.148a3.219 3.219 0 0 1 3.209 3.209v18.967a3.218 3.218 0 0 1-3.21 3.209",
    fill: "#BFCDDD",
    mask: "url(#d)"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M173.455 130.832h49.301M164.984 130.832h6.089M155.952 130.832h6.75M173.837 160.613h49.3M165.365 160.613h6.089M155.57 160.613h6.751",
    stroke: "#7C90A5",
    strokeWidth: "1.124",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    mask: "url(#d)"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M159.563 151.038a2.407 2.407 0 1 1 0-4.814 2.407 2.407 0 0 1 0 4.814M166.98 151.038a2.407 2.407 0 1 1 0-4.814 2.407 2.407 0 0 1 0 4.814M174.397 151.038a2.407 2.407 0 1 1 .001-4.814 2.407 2.407 0 0 1 0 4.814M222.539 151.038h-22.461a.802.802 0 0 1-.802-.802v-3.209c0-.443.359-.802.802-.802h22.46c.444 0 .803.36.803.802v3.209c0 .443-.36.802-.802.802M159.563 179.987a2.407 2.407 0 1 1 0-4.813 2.407 2.407 0 0 1 0 4.813M166.98 179.987a2.407 2.407 0 1 1 0-4.813 2.407 2.407 0 0 1 0 4.813M174.397 179.987a2.407 2.407 0 1 1 0-4.813 2.407 2.407 0 0 1 0 4.813M222.539 179.987h-22.461a.802.802 0 0 1-.802-.802v-3.209c0-.443.359-.802.802-.802h22.46c.444 0 .803.36.803.802v3.209c0 .443-.36.802-.802.802",
    fill: "#FFF",
    mask: "url(#d)"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M203.04 221.108h-27.372a2.413 2.413 0 0 1-2.406-2.407v-11.448a2.414 2.414 0 0 1 2.406-2.407h27.372a2.414 2.414 0 0 1 2.407 2.407V218.7a2.413 2.413 0 0 1-2.407 2.407",
    fill: "#BFCDDD",
    mask: "url(#d)"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M177.259 207.217v11.52M201.05 207.217v11.52",
    stroke: "#A3B4C6",
    strokeWidth: "1.124",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    mask: "url(#d)"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M162.873 267.894a9.422 9.422 0 0 1-9.422-9.422v-14.82a9.423 9.423 0 0 1 18.845 0v14.82a9.423 9.423 0 0 1-9.423 9.422",
    fill: "#5BA02E",
    mask: "url(#d)"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M171.22 267.83a9.422 9.422 0 0 1-9.422-9.423v-3.438a9.423 9.423 0 0 1 18.845 0v3.438a9.423 9.423 0 0 1-9.422 9.423",
    fill: "#92C110",
    mask: "url(#d)"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M181.31 293.666h-27.712a3.209 3.209 0 0 1-3.209-3.21V269.79a3.209 3.209 0 0 1 3.209-3.21h27.711a3.209 3.209 0 0 1 3.209 3.21v20.668a3.209 3.209 0 0 1-3.209 3.209",
    fill: "#F2D7AD",
    mask: "url(#d)"
  })));
};

/* harmony default export */ var serverError = (ServerError);
;// CONCATENATED MODULE: ./node_modules/antd/es/result/unauthorized.js


var Unauthorized = function Unauthorized() {
  return /*#__PURE__*/react.createElement("svg", {
    width: "251",
    height: "294"
  }, /*#__PURE__*/react.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 129.023v-2.084C0 58.364 55.591 2.774 124.165 2.774h2.085c68.574 0 124.165 55.59 124.165 124.165v2.084c0 68.575-55.59 124.166-124.165 124.166h-2.085C55.591 253.189 0 197.598 0 129.023",
    fill: "#E4EBF7"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M41.417 132.92a8.231 8.231 0 1 1-16.38-1.65 8.231 8.231 0 0 1 16.38 1.65",
    fill: "#FFF"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M38.652 136.36l10.425 5.91M49.989 148.505l-12.58 10.73",
    stroke: "#FFF",
    strokeWidth: "2"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M41.536 161.28a5.636 5.636 0 1 1-11.216-1.13 5.636 5.636 0 0 1 11.216 1.13M59.154 145.261a5.677 5.677 0 1 1-11.297-1.138 5.677 5.677 0 0 1 11.297 1.138M100.36 29.516l29.66-.013a4.562 4.562 0 1 0-.004-9.126l-29.66.013a4.563 4.563 0 0 0 .005 9.126M111.705 47.754l29.659-.013a4.563 4.563 0 1 0-.004-9.126l-29.66.013a4.563 4.563 0 1 0 .005 9.126",
    fill: "#FFF"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M114.066 29.503V29.5l15.698-.007a4.563 4.563 0 1 0 .004 9.126l-15.698.007v-.002a4.562 4.562 0 0 0-.004-9.122M185.405 137.723c-.55 5.455-5.418 9.432-10.873 8.882-5.456-.55-9.432-5.418-8.882-10.873.55-5.455 5.418-9.432 10.873-8.882 5.455.55 9.432 5.418 8.882 10.873",
    fill: "#FFF"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M180.17 143.772l12.572 7.129M193.841 158.42L178.67 171.36",
    stroke: "#FFF",
    strokeWidth: "2"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M185.55 171.926a6.798 6.798 0 1 1-13.528-1.363 6.798 6.798 0 0 1 13.527 1.363M204.12 155.285a6.848 6.848 0 1 1-13.627-1.375 6.848 6.848 0 0 1 13.626 1.375",
    fill: "#FFF"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M152.988 194.074a2.21 2.21 0 1 1-4.42 0 2.21 2.21 0 0 1 4.42 0zM225.931 118.217a2.21 2.21 0 1 1-4.421 0 2.21 2.21 0 0 1 4.421 0zM217.09 153.051a2.21 2.21 0 1 1-4.421 0 2.21 2.21 0 0 1 4.42 0zM177.84 109.842a2.21 2.21 0 1 1-4.422 0 2.21 2.21 0 0 1 4.421 0zM196.114 94.454a2.21 2.21 0 1 1-4.421 0 2.21 2.21 0 0 1 4.421 0zM202.844 182.523a2.21 2.21 0 1 1-4.42 0 2.21 2.21 0 0 1 4.42 0z",
    stroke: "#FFF",
    strokeWidth: "2"
  }), /*#__PURE__*/react.createElement("path", {
    stroke: "#FFF",
    strokeWidth: "2",
    d: "M215.125 155.262l-1.902 20.075-10.87 5.958M174.601 176.636l-6.322 9.761H156.98l-4.484 6.449M175.874 127.28V111.56M221.51 119.404l-12.77 7.859-15.228-7.86V96.668"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M180.68 29.32C180.68 13.128 193.806 0 210 0c16.193 0 29.32 13.127 29.32 29.32 0 16.194-13.127 29.322-29.32 29.322-16.193 0-29.32-13.128-29.32-29.321",
    fill: "#A26EF4"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M221.45 41.706l-21.563-.125a1.744 1.744 0 0 1-1.734-1.754l.071-12.23a1.744 1.744 0 0 1 1.754-1.734l21.562.125c.964.006 1.74.791 1.735 1.755l-.071 12.229a1.744 1.744 0 0 1-1.754 1.734",
    fill: "#FFF"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M215.106 29.192c-.015 2.577-2.049 4.654-4.543 4.64-2.494-.014-4.504-2.115-4.489-4.693l.04-6.925c.016-2.577 2.05-4.654 4.543-4.64 2.494.015 4.504 2.116 4.49 4.693l-.04 6.925zm-4.53-14.074a6.877 6.877 0 0 0-6.916 6.837l-.043 7.368a6.877 6.877 0 0 0 13.754.08l.042-7.368a6.878 6.878 0 0 0-6.837-6.917zM167.566 68.367h-3.93a4.73 4.73 0 0 1-4.717-4.717 4.73 4.73 0 0 1 4.717-4.717h3.93a4.73 4.73 0 0 1 4.717 4.717 4.73 4.73 0 0 1-4.717 4.717",
    fill: "#FFF"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M168.214 248.838a6.611 6.611 0 0 1-6.61-6.611v-66.108a6.611 6.611 0 0 1 13.221 0v66.108a6.611 6.611 0 0 1-6.61 6.61",
    fill: "#5BA02E"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M176.147 248.176a6.611 6.611 0 0 1-6.61-6.61v-33.054a6.611 6.611 0 1 1 13.221 0v33.053a6.611 6.611 0 0 1-6.61 6.611",
    fill: "#92C110"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M185.994 293.89h-27.376a3.17 3.17 0 0 1-3.17-3.17v-45.887a3.17 3.17 0 0 1 3.17-3.17h27.376a3.17 3.17 0 0 1 3.17 3.17v45.886a3.17 3.17 0 0 1-3.17 3.17",
    fill: "#F2D7AD"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M81.972 147.673s6.377-.927 17.566-1.28c11.729-.371 17.57 1.086 17.57 1.086s3.697-3.855.968-8.424c1.278-12.077 5.982-32.827.335-48.273-1.116-1.339-3.743-1.512-7.536-.62-1.337.315-7.147-.149-7.983-.1l-15.311-.347s-3.487-.17-8.035-.508c-1.512-.113-4.227-1.683-5.458-.338-.406.443-2.425 5.669-1.97 16.077l8.635 35.642s-3.141 3.61 1.219 7.085",
    fill: "#FFF"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M75.768 73.325l-.9-6.397 11.982-6.52s7.302-.118 8.038 1.205c.737 1.324-5.616.993-5.616.993s-1.836 1.388-2.615 2.5c-1.654 2.363-.986 6.471-8.318 5.986-1.708.284-2.57 2.233-2.57 2.233",
    fill: "#FFC6A0"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M52.44 77.672s14.217 9.406 24.973 14.444c1.061.497-2.094 16.183-11.892 11.811-7.436-3.318-20.162-8.44-21.482-14.496-.71-3.258 2.543-7.643 8.401-11.76M141.862 80.113s-6.693 2.999-13.844 6.876c-3.894 2.11-10.137 4.704-12.33 7.988-6.224 9.314 3.536 11.22 12.947 7.503 6.71-2.651 28.999-12.127 13.227-22.367",
    fill: "#FFB594"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M76.166 66.36l3.06 3.881s-2.783 2.67-6.31 5.747c-7.103 6.195-12.803 14.296-15.995 16.44-3.966 2.662-9.754 3.314-12.177-.118-3.553-5.032.464-14.628 31.422-25.95",
    fill: "#FFC6A0"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M64.674 85.116s-2.34 8.413-8.912 14.447c.652.548 18.586 10.51 22.144 10.056 5.238-.669 6.417-18.968 1.145-20.531-.702-.208-5.901-1.286-8.853-2.167-.87-.26-1.611-1.71-3.545-.936l-1.98-.869zM128.362 85.826s5.318 1.956 7.325 13.734c-.546.274-17.55 12.35-21.829 7.805-6.534-6.94-.766-17.393 4.275-18.61 4.646-1.121 5.03-1.37 10.23-2.929",
    fill: "#FFF"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M78.18 94.656s.911 7.41-4.914 13.078",
    stroke: "#E4EBF7",
    strokeWidth: "1.051",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M87.397 94.68s3.124 2.572 10.263 2.572c7.14 0 9.074-3.437 9.074-3.437",
    stroke: "#E4EBF7",
    strokeWidth: ".932",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M117.184 68.639l-6.781-6.177s-5.355-4.314-9.223-.893c-3.867 3.422 4.463 2.083 5.653 4.165 1.19 2.082.848 1.143-2.083.446-5.603-1.331-2.082.893 2.975 5.355 2.091 1.845 6.992.955 6.992.955l2.467-3.851z",
    fill: "#FFC6A0"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M105.282 91.315l-.297-10.937-15.918-.027-.53 10.45c-.026.403.17.788.515.999 2.049 1.251 9.387 5.093 15.799.424.287-.21.443-.554.431-.91",
    fill: "#FFB594"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M107.573 74.24c.817-1.147.982-9.118 1.015-11.928a1.046 1.046 0 0 0-.965-1.055l-4.62-.365c-7.71-1.044-17.071.624-18.253 6.346-5.482 5.813-.421 13.244-.421 13.244s1.963 3.566 4.305 6.791c.756 1.041.398-3.731 3.04-5.929 5.524-4.594 15.899-7.103 15.899-7.103",
    fill: "#5C2552"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M88.426 83.206s2.685 6.202 11.602 6.522c7.82.28 8.973-7.008 7.434-17.505l-.909-5.483c-6.118-2.897-15.478.54-15.478.54s-.576 2.044-.19 5.504c-2.276 2.066-1.824 5.618-1.824 5.618s-.905-1.922-1.98-2.321c-.86-.32-1.897.089-2.322 1.98-1.04 4.632 3.667 5.145 3.667 5.145",
    fill: "#FFC6A0"
  }), /*#__PURE__*/react.createElement("path", {
    stroke: "#DB836E",
    strokeWidth: "1.145",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M100.843 77.099l1.701-.928-1.015-4.324.674-1.406"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M105.546 74.092c-.022.713-.452 1.279-.96 1.263-.51-.016-.904-.607-.882-1.32.021-.713.452-1.278.96-1.263.51.016.904.607.882 1.32M97.592 74.349c-.022.713-.452 1.278-.961 1.263-.509-.016-.904-.607-.882-1.32.022-.713.452-1.279.961-1.263.51.016.904.606.882 1.32",
    fill: "#552950"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M91.132 86.786s5.269 4.957 12.679 2.327",
    stroke: "#DB836E",
    strokeWidth: "1.145",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M99.776 81.903s-3.592.232-1.44-2.79c1.59-1.496 4.897-.46 4.897-.46s1.156 3.906-3.457 3.25",
    fill: "#DB836E"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M102.88 70.6s2.483.84 3.402.715M93.883 71.975s2.492-1.144 4.778-1.073",
    stroke: "#5C2552",
    strokeWidth: "1.526",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M86.32 77.374s.961.879 1.458 2.106c-.377.48-1.033 1.152-.236 1.809M99.337 83.719s1.911.151 2.509-.254",
    stroke: "#DB836E",
    strokeWidth: "1.145",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M87.782 115.821l15.73-3.012M100.165 115.821l10.04-2.008",
    stroke: "#E4EBF7",
    strokeWidth: "1.051",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M66.508 86.763s-1.598 8.83-6.697 14.078",
    stroke: "#E4EBF7",
    strokeWidth: "1.114",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M128.31 87.934s3.013 4.121 4.06 11.785",
    stroke: "#E4EBF7",
    strokeWidth: "1.051",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M64.09 84.816s-6.03 9.912-13.607 9.903",
    stroke: "#DB836E",
    strokeWidth: ".795",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M112.366 65.909l-.142 5.32s5.993 4.472 11.945 9.202c4.482 3.562 8.888 7.455 10.985 8.662 4.804 2.766 8.9 3.355 11.076 1.808 4.071-2.894 4.373-9.878-8.136-15.263-4.271-1.838-16.144-6.36-25.728-9.73",
    fill: "#FFC6A0"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M130.532 85.488s4.588 5.757 11.619 6.214",
    stroke: "#DB836E",
    strokeWidth: ".75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M121.708 105.73s-.393 8.564-1.34 13.612",
    stroke: "#E4EBF7",
    strokeWidth: "1.051",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M115.784 161.512s-3.57-1.488-2.678-7.14",
    stroke: "#648BD8",
    strokeWidth: "1.051",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M101.52 290.246s4.326 2.057 7.408 1.03c2.842-.948 4.564.673 7.132 1.186 2.57.514 6.925 1.108 11.772-1.269-.104-5.551-6.939-4.01-12.048-6.763-2.582-1.39-3.812-4.757-3.625-8.863h-9.471s-1.402 10.596-1.169 14.68",
    fill: "#CBD1D1"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M101.496 290.073s2.447 1.281 6.809.658c3.081-.44 3.74.485 7.479 1.039 3.739.554 10.802-.07 11.91-.9.415 1.108-.347 2.077-.347 2.077s-1.523.608-4.847.831c-2.045.137-5.843.293-7.663-.507-1.8-1.385-5.286-1.917-5.77-.243-3.947.958-7.41-.288-7.41-.288l-.16-2.667z",
    fill: "#2B0849"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M108.824 276.19h3.116s-.103 6.751 4.57 8.62c-4.673.624-8.62-2.32-7.686-8.62",
    fill: "#A4AABA"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M57.65 272.52s-2.122 7.47-4.518 12.396c-1.811 3.724-4.255 7.548 5.505 7.548 6.698 0 9.02-.483 7.479-6.648-1.541-6.164.268-13.296.268-13.296H57.65z",
    fill: "#CBD1D1"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M51.54 290.04s2.111 1.178 6.682 1.178c6.128 0 8.31-1.662 8.31-1.662s.605 1.122-.624 2.18c-1 .862-3.624 1.603-7.444 1.559-4.177-.049-5.876-.57-6.786-1.177-.831-.554-.692-1.593-.138-2.078",
    fill: "#2B0849"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M58.533 274.438s.034 1.529-.315 2.95c-.352 1.431-1.087 3.127-1.139 4.17-.058 1.16 4.57 1.592 5.194.035.623-1.559 1.303-6.475 1.927-7.306.622-.831-4.94-2.135-5.667.15",
    fill: "#A4AABA"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M100.885 277.015l13.306.092s1.291-54.228 1.843-64.056c.552-9.828 3.756-43.13.997-62.788l-12.48-.64-22.725.776s-.433 3.944-1.19 9.921c-.062.493-.677.838-.744 1.358-.075.582.42 1.347.318 1.956-2.35 14.003-6.343 32.926-8.697 46.425-.116.663-1.227 1.004-1.45 2.677-.04.3.21 1.516.112 1.785-6.836 18.643-10.89 47.584-14.2 61.551l14.528-.014s2.185-8.524 4.008-16.878c2.796-12.817 22.987-84.553 22.987-84.553l3-.517 1.037 46.1s-.223 1.228.334 2.008c.558.782-.556 1.117-.39 2.233l.39 1.784s-.446 7.14-.892 11.826c-.446 4.685-.092 38.954-.092 38.954",
    fill: "#7BB2F9"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M77.438 220.434c1.146.094 4.016-2.008 6.916-4.91M107.55 223.931s2.758-1.103 6.069-3.862",
    stroke: "#648BD8",
    strokeWidth: "1.051",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M108.459 220.905s2.759-1.104 6.07-3.863",
    stroke: "#648BD8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M76.099 223.557s2.608-.587 6.47-3.346M87.33 150.82c-.27 3.088.297 8.478-4.315 9.073M104.829 149.075s.11 13.936-1.286 14.983c-2.207 1.655-2.975 1.934-2.975 1.934M101.014 149.63s.035 12.81-1.19 24.245M94.93 174.965s7.174-1.655 9.38-1.655M75.671 204.754c-.316 1.55-.64 3.067-.973 4.535 0 0-1.45 1.822-1.003 3.756.446 1.934-.943 2.034-4.96 15.273-1.686 5.559-4.464 18.49-6.313 27.447-.078.38-4.018 18.06-4.093 18.423M77.043 196.743a313.269 313.269 0 0 1-.877 4.729M83.908 151.414l-1.19 10.413s-1.091.148-.496 2.23c.111 1.34-2.66 15.692-5.153 30.267M57.58 272.94h13.238",
    stroke: "#648BD8",
    strokeWidth: "1.051",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M117.377 147.423s-16.955-3.087-35.7.199c.157 2.501-.002 4.128-.002 4.128s14.607-2.802 35.476-.31c.251-2.342.226-4.017.226-4.017",
    fill: "#192064"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M107.511 150.353l.004-4.885a.807.807 0 0 0-.774-.81c-2.428-.092-5.04-.108-7.795-.014a.814.814 0 0 0-.784.81l-.003 4.88c0 .456.371.82.827.808a140.76 140.76 0 0 1 7.688.017.81.81 0 0 0 .837-.806",
    fill: "#FFF"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M106.402 149.426l.002-3.06a.64.64 0 0 0-.616-.643 94.135 94.135 0 0 0-5.834-.009.647.647 0 0 0-.626.643l-.001 3.056c0 .36.291.648.651.64 1.78-.04 3.708-.041 5.762.012.36.009.662-.279.662-.64",
    fill: "#192064"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M101.485 273.933h12.272M102.652 269.075c.006 3.368.04 5.759.11 6.47M102.667 263.125c-.009 1.53-.015 2.98-.016 4.313M102.204 174.024l.893 44.402s.669 1.561-.224 2.677c-.892 1.116 2.455.67.893 2.231-1.562 1.562.893 1.116 0 3.347-.592 1.48-.988 20.987-1.09 34.956",
    stroke: "#648BD8",
    strokeWidth: "1.051",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

/* harmony default export */ var unauthorized = (Unauthorized);
;// CONCATENATED MODULE: ./node_modules/antd/es/result/index.js












var IconMap = {
  success: CheckCircleFilled/* default */.Z,
  error: CloseCircleFilled/* default */.Z,
  info: ExclamationCircleFilled/* default */.Z,
  warning: icons_WarningFilled
};
var ExceptionMap = {
  '404': noFound,
  '500': serverError,
  '403': unauthorized
}; // ExceptionImageMap keys

var ExceptionStatus = Object.keys(ExceptionMap);
/**
 * Render icon if ExceptionStatus includes ,render svg image else render iconNode
 *
 * @param prefixCls
 * @param {status, icon}
 */

var renderIcon = function renderIcon(prefixCls, _ref) {
  var status = _ref.status,
      icon = _ref.icon;
  var className = classnames_default()("".concat(prefixCls, "-icon"));
  (0,devWarning/* default */.Z)(!(typeof icon === 'string' && icon.length > 2), 'Result', "`icon` is using ReactNode instead of string naming in v4. Please check `".concat(icon, "` at https://ant.design/components/icon"));

  if (ExceptionStatus.includes("".concat(status))) {
    var SVGComponent = ExceptionMap[status];
    return /*#__PURE__*/react.createElement("div", {
      className: "".concat(className, " ").concat(prefixCls, "-image")
    }, /*#__PURE__*/react.createElement(SVGComponent, null));
  }

  var iconNode = /*#__PURE__*/react.createElement(IconMap[status]);
  return /*#__PURE__*/react.createElement("div", {
    className: className
  }, icon || iconNode);
};

var renderExtra = function renderExtra(prefixCls, _ref2) {
  var extra = _ref2.extra;
  return extra && /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-extra")
  }, extra);
};

var Result = function Result(_ref3) {
  var customizePrefixCls = _ref3.prefixCls,
      customizeClassName = _ref3.className,
      subTitle = _ref3.subTitle,
      title = _ref3.title,
      style = _ref3.style,
      children = _ref3.children,
      _ref3$status = _ref3.status,
      status = _ref3$status === void 0 ? 'info' : _ref3$status,
      icon = _ref3.icon,
      extra = _ref3.extra;

  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var prefixCls = getPrefixCls('result', customizePrefixCls);
  var className = classnames_default()(prefixCls, "".concat(prefixCls, "-").concat(status), customizeClassName, (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'));
  return /*#__PURE__*/react.createElement("div", {
    className: className,
    style: style
  }, renderIcon(prefixCls, {
    status: status,
    icon: icon
  }), /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-title")
  }, title), subTitle && /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-subtitle")
  }, subTitle), renderExtra(prefixCls, {
    extra: extra
  }), children && /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-content")
  }, children));
};

Result.PRESENTED_IMAGE_403 = ExceptionMap['403'];
Result.PRESENTED_IMAGE_404 = ExceptionMap['404'];
Result.PRESENTED_IMAGE_500 = ExceptionMap['500'];
/* harmony default export */ var result = (Result);
;// CONCATENATED MODULE: ./src/components/stateless/Exception/exception403.js




var Exception403 = function Exception403() {
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(result, {
    status: "403",
    title: "403",
    subTitle: "Sorry, you are not authorized to access this page."
  }));
};

/* harmony default export */ var exception403 = (Exception403);
;// CONCATENATED MODULE: ./src/utils/publicFn/index.js



var flattenRoutes = function flattenRoutes(arr) {
  return arr.reduce(function (prev, item) {
    if (Array.isArray(item.children)) {
      prev.push(item);
    }

    return prev.concat(Array.isArray(item.children) ? flattenRoutes(item.children) : item);
  }, []);
};
var getKeyName = function getKeyName() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/403';
  var thePath = path.split('?')[0];
  var curRoute = flattenRoutes(routers/* default */.Z).filter(function (item) {
    return !item.index;
  }).filter(function (item) {
    var _item$key;

    return ((_item$key = item.key) === null || _item$key === void 0 ? void 0 : _item$key.indexOf(thePath)) !== -1;
  });
  if (!curRoute[0]) return {
    title: '暂无权限',
    tabKey: '/403',
    element: /*#__PURE__*/react.createElement(exception403, null)
  };
  var _curRoute$ = curRoute[0],
      name = _curRoute$.name,
      key = _curRoute$.key,
      element = _curRoute$.element;
  return {
    title: name,
    tabKey: key,
    element: element
  };
};
;// CONCATENATED MODULE: ./node_modules/antd/es/breadcrumb/style/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/antd/es/breadcrumb/style/index.js

 // style dependencies



// EXTERNAL MODULE: ./node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__(344);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DownOutlined.js + 1 modules
var DownOutlined = __webpack_require__(7254);
// EXTERNAL MODULE: ./node_modules/antd/es/dropdown/dropdown.js + 1 modules
var dropdown_dropdown = __webpack_require__(1555);
;// CONCATENATED MODULE: ./node_modules/antd/es/breadcrumb/BreadcrumbItem.js


var BreadcrumbItem_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};






var BreadcrumbItem = function BreadcrumbItem(_a) {
  var customizePrefixCls = _a.prefixCls,
      _a$separator = _a.separator,
      separator = _a$separator === void 0 ? '/' : _a$separator,
      children = _a.children,
      overlay = _a.overlay,
      dropdownProps = _a.dropdownProps,
      restProps = BreadcrumbItem_rest(_a, ["prefixCls", "separator", "children", "overlay", "dropdownProps"]);

  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
      getPrefixCls = _React$useContext.getPrefixCls;

  var prefixCls = getPrefixCls('breadcrumb', customizePrefixCls);
  /** If overlay is have Wrap a DropDown */

  var renderBreadcrumbNode = function renderBreadcrumbNode(breadcrumbItem) {
    if (overlay) {
      return /*#__PURE__*/react.createElement(dropdown_dropdown/* default */.Z, (0,esm_extends/* default */.Z)({
        overlay: overlay,
        placement: "bottomCenter"
      }, dropdownProps), /*#__PURE__*/react.createElement("span", {
        className: "".concat(prefixCls, "-overlay-link")
      }, breadcrumbItem, /*#__PURE__*/react.createElement(DownOutlined/* default */.Z, null)));
    }

    return breadcrumbItem;
  };

  var link;

  if ('href' in restProps) {
    link = /*#__PURE__*/react.createElement("a", (0,esm_extends/* default */.Z)({
      className: "".concat(prefixCls, "-link")
    }, restProps), children);
  } else {
    link = /*#__PURE__*/react.createElement("span", (0,esm_extends/* default */.Z)({
      className: "".concat(prefixCls, "-link")
    }, restProps), children);
  } // wrap to dropDown


  link = renderBreadcrumbNode(link);

  if (children) {
    return /*#__PURE__*/react.createElement("span", null, link, separator && /*#__PURE__*/react.createElement("span", {
      className: "".concat(prefixCls, "-separator")
    }, separator));
  }

  return null;
};

BreadcrumbItem.__ANT_BREADCRUMB_ITEM = true;
/* harmony default export */ var breadcrumb_BreadcrumbItem = (BreadcrumbItem);
;// CONCATENATED MODULE: ./node_modules/antd/es/breadcrumb/BreadcrumbSeparator.js



var BreadcrumbSeparator = function BreadcrumbSeparator(_ref) {
  var children = _ref.children;

  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
      getPrefixCls = _React$useContext.getPrefixCls;

  var prefixCls = getPrefixCls('breadcrumb');
  return /*#__PURE__*/react.createElement("span", {
    className: "".concat(prefixCls, "-separator")
  }, children || '/');
};

BreadcrumbSeparator.__ANT_BREADCRUMB_SEPARATOR = true;
/* harmony default export */ var breadcrumb_BreadcrumbSeparator = (BreadcrumbSeparator);
;// CONCATENATED MODULE: ./node_modules/antd/es/breadcrumb/Breadcrumb.js




var Breadcrumb_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};











function getBreadcrumbName(route, params) {
  if (!route.breadcrumbName) {
    return null;
  }

  var paramsKeys = Object.keys(params).join('|');
  var name = route.breadcrumbName.replace(new RegExp(":(".concat(paramsKeys, ")"), 'g'), function (replacement, key) {
    return params[key] || replacement;
  });
  return name;
}

function defaultItemRender(route, params, routes, paths) {
  var isLastItem = routes.indexOf(route) === routes.length - 1;
  var name = getBreadcrumbName(route, params);
  return isLastItem ? /*#__PURE__*/react.createElement("span", null, name) : /*#__PURE__*/react.createElement("a", {
    href: "#/".concat(paths.join('/'))
  }, name);
}

var getPath = function getPath(path, params) {
  path = (path || '').replace(/^\//, '');
  Object.keys(params).forEach(function (key) {
    path = path.replace(":".concat(key), params[key]);
  });
  return path;
};

var addChildPath = function addChildPath(paths, childPath, params) {
  var originalPaths = (0,toConsumableArray/* default */.Z)(paths);

  var path = getPath(childPath || '', params);

  if (path) {
    originalPaths.push(path);
  }

  return originalPaths;
};

var Breadcrumb = function Breadcrumb(_a) {
  var customizePrefixCls = _a.prefixCls,
      _a$separator = _a.separator,
      separator = _a$separator === void 0 ? '/' : _a$separator,
      style = _a.style,
      className = _a.className,
      routes = _a.routes,
      children = _a.children,
      _a$itemRender = _a.itemRender,
      itemRender = _a$itemRender === void 0 ? defaultItemRender : _a$itemRender,
      _a$params = _a.params,
      params = _a$params === void 0 ? {} : _a$params,
      restProps = Breadcrumb_rest(_a, ["prefixCls", "separator", "style", "className", "routes", "children", "itemRender", "params"]);

  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var crumbs;
  var prefixCls = getPrefixCls('breadcrumb', customizePrefixCls);

  if (routes && routes.length > 0) {
    // generated by route
    var paths = [];
    crumbs = routes.map(function (route) {
      var path = getPath(route.path, params);

      if (path) {
        paths.push(path);
      } // generated overlay by route.children


      var overlay;

      if (route.children && route.children.length) {
        overlay = /*#__PURE__*/react.createElement(menu/* default */.Z, null, route.children.map(function (child) {
          return /*#__PURE__*/react.createElement(menu/* default.Item */.Z.Item, {
            key: child.path || child.breadcrumbName
          }, itemRender(child, params, routes, addChildPath(paths, child.path, params)));
        }));
      }

      return /*#__PURE__*/react.createElement(breadcrumb_BreadcrumbItem, {
        overlay: overlay,
        separator: separator,
        key: path || route.breadcrumbName
      }, itemRender(route, params, routes, paths));
    });
  } else if (children) {
    crumbs = (0,toArray/* default */.Z)(children).map(function (element, index) {
      if (!element) {
        return element;
      }

      (0,devWarning/* default */.Z)(element.type && (element.type.__ANT_BREADCRUMB_ITEM === true || element.type.__ANT_BREADCRUMB_SEPARATOR === true), 'Breadcrumb', "Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children");
      return (0,reactNode/* cloneElement */.Tm)(element, {
        separator: separator,
        key: index
      });
    });
  }

  var breadcrumbClassName = classnames_default()(prefixCls, (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'), className);
  return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    className: breadcrumbClassName,
    style: style
  }, restProps), crumbs);
};

Breadcrumb.Item = breadcrumb_BreadcrumbItem;
Breadcrumb.Separator = breadcrumb_BreadcrumbSeparator;
/* harmony default export */ var breadcrumb_Breadcrumb = (Breadcrumb);
;// CONCATENATED MODULE: ./node_modules/antd/es/breadcrumb/index.js

/* harmony default export */ var breadcrumb = (breadcrumb_Breadcrumb);
;// CONCATENATED MODULE: ./src/pages/layout/proContent/breadcrumb/util.js
var getRouteItem = function getRouteItem() {
  var arrList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var queryItem = arguments.length > 1 ? arguments[1] : undefined;
  var result;

  if (Array.isArray(arrList)) {
    result = arrList.find(function (item) {
      return item.path === queryItem || getRouteItem(item.children, queryItem);
    });
  }

  return result;
};
var getRouteList = function getRouteList(result) {
  var arrList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var queryItem = arguments.length > 2 ? arguments[2] : undefined;

  if (Array.isArray(arrList)) {
    arrList.forEach(function (item) {
      if (item.path === queryItem) {
        result.push({
          path: item.path,
          name: item.name
        });
      } else {
        result.push({
          path: item.path,
          name: item.name
        });
        getRouteList(result, getRouteItem(item.children, queryItem) ? [getRouteItem(item.children, queryItem)] : [], queryItem);
      }
    });
  }

  return result;
};
;// CONCATENATED MODULE: ./src/pages/layout/proContent/breadcrumb/index.module.less
// extracted by mini-css-extract-plugin
/* harmony default export */ var breadcrumb_index_module = ({"breadcrumb":"pages-layout-proContent-breadcrumb-index-module__breadcrumb--f4EjY"});
;// CONCATENATED MODULE: ./src/pages/layout/proContent/breadcrumb/index.js



function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || breadcrumb_unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return breadcrumb_arrayLikeToArray(arr); }

function breadcrumb_slicedToArray(arr, i) { return breadcrumb_arrayWithHoles(arr) || breadcrumb_iterableToArrayLimit(arr, i) || breadcrumb_unsupportedIterableToArray(arr, i) || breadcrumb_nonIterableRest(); }

function breadcrumb_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function breadcrumb_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return breadcrumb_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return breadcrumb_arrayLikeToArray(o, minLen); }

function breadcrumb_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function breadcrumb_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function breadcrumb_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var ProBreadcrumb = function ProBreadcrumb() {
  var _useLocation = (0,react_router/* useLocation */.TH)(),
      pathname = _useLocation.pathname;

  var navigate = (0,react_router/* useNavigate */.s0)();

  var _useState = (0,react.useState)([]),
      _useState2 = breadcrumb_slicedToArray(_useState, 2),
      breadcrumbList = _useState2[0],
      setBreadcrumbList = _useState2[1];

  (0,react.useEffect)(function () {
    var routeList = getRouteList([], getRouteItem(routers/* default */.Z, pathname) ? [getRouteItem(routers/* default */.Z, pathname)] : [], pathname);
    setBreadcrumbList(_toConsumableArray(routeList));
  }, [pathname]);

  var linkTo = function linkTo(path) {
    navigate(path);
  };

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(breadcrumb, {
    separator: "/"
  }, breadcrumbList.map(function (item, index) {
    return index !== breadcrumbList.length ? /*#__PURE__*/react.createElement(breadcrumb.Item, {
      className: breadcrumb_index_module.breadcrumb,
      key: item.path,
      onClick: function onClick() {
        return linkTo(item.path);
      }
    }, item.name) : /*#__PURE__*/react.createElement(breadcrumb.Item, {
      className: breadcrumb_index_module.lastBreadcrumb,
      key: item.path
    }, item.name);
  })));
};

/* harmony default export */ var proContent_breadcrumb = (ProBreadcrumb);
// EXTERNAL MODULE: ./node_modules/antd/es/tabs/style/index.js + 1 modules
var tabs_style = __webpack_require__(2293);
// EXTERNAL MODULE: ./node_modules/antd/es/tabs/index.js + 17 modules
var tabs = __webpack_require__(7428);
// EXTERNAL MODULE: ./node_modules/antd/es/alert/style/index.js + 1 modules
var alert_style = __webpack_require__(9485);
// EXTERNAL MODULE: ./node_modules/antd/es/alert/index.js + 1 modules
var es_alert = __webpack_require__(6772);
// EXTERNAL MODULE: ./node_modules/react-sticky/lib/index.js
var lib = __webpack_require__(8439);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/HeartTwoTone.js
// This icon file is generated automatically.
var HeartTwoTone = { "icon": function render(primaryColor, secondaryColor) { return { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z", "fill": primaryColor } }, { "tag": "path", "attrs": { "d": "M679.7 201c-73.1 0-136.5 40.8-167.7 100.4C480.8 241.8 417.4 201 344.3 201c-104 0-188.3 82.6-188.3 184.5 0 201.2 356 429.3 356 429.3s356-228.1 356-429.3C868 283.6 783.7 201 679.7 201z", "fill": secondaryColor } }] }; }, "name": "heart", "theme": "twotone" };
/* harmony default export */ var asn_HeartTwoTone = (HeartTwoTone);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/HeartTwoTone.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var HeartTwoTone_HeartTwoTone = function HeartTwoTone(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_HeartTwoTone
  }));
};

HeartTwoTone_HeartTwoTone.displayName = 'HeartTwoTone';
/* harmony default export */ var icons_HeartTwoTone = (/*#__PURE__*/react.forwardRef(HeartTwoTone_HeartTwoTone));
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/SyncOutlined.js
// This icon file is generated automatically.
var SyncOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4S337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27A341.5 341.5 0 01755 268.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 92 503.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8zm756 7.8h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4A342.45 342.45 0 01512.1 856a342.24 342.24 0 01-243.2-100.8c-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47a8 8 0 00-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.8-411.8a8 8 0 00-8-8.2z" } }] }, "name": "sync", "theme": "outlined" };
/* harmony default export */ var asn_SyncOutlined = (SyncOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/SyncOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var SyncOutlined_SyncOutlined = function SyncOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_SyncOutlined
  }));
};

SyncOutlined_SyncOutlined.displayName = 'SyncOutlined';
/* harmony default export */ var icons_SyncOutlined = (/*#__PURE__*/react.forwardRef(SyncOutlined_SyncOutlined));
// EXTERNAL MODULE: ./src/pages/home/index.js
var home = __webpack_require__(8996);
;// CONCATENATED MODULE: ./src/pages/layout/proTabs/index.module.less
// extracted by mini-css-extract-plugin
/* harmony default export */ var proTabs_index_module = ({"container":"container","ant-tabs-editable-card":"ant-tabs-editable-card","ant-tabs-content":"ant-tabs-content","ant-tabs-tabpane":"ant-tabs-tabpane","ant-tabs-nav":"ant-tabs-nav","ant-tabs-nav-wrap":"ant-tabs-nav-wrap"});
;// CONCATENATED MODULE: ./src/pages/layout/proTabs/index.js











function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function proTabs_toConsumableArray(arr) { return proTabs_arrayWithoutHoles(arr) || proTabs_iterableToArray(arr) || proTabs_unsupportedIterableToArray(arr) || proTabs_nonIterableSpread(); }

function proTabs_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function proTabs_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function proTabs_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return proTabs_arrayLikeToArray(arr); }

function proTabs_slicedToArray(arr, i) { return proTabs_arrayWithHoles(arr) || proTabs_iterableToArrayLimit(arr, i) || proTabs_unsupportedIterableToArray(arr, i) || proTabs_nonIterableRest(); }

function proTabs_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function proTabs_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return proTabs_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return proTabs_arrayLikeToArray(o, minLen); }

function proTabs_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function proTabs_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function proTabs_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function proTabs_extends() { proTabs_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return proTabs_extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import React, { useState, useEffect, useCallback, useRef } from 'react'




 // import Demo from '@pages/demo'
// import CouponsAdd from '@pages/coupons/add'
// import CouponsEdit from '@pages/coupons/edit'
// import Product from '@pages/product'
// import Exception403 from '@stateless/Exception/exception403'
// import { getKeyName } from '@utils/publicFn'


var initialPanes = [{
  title: '首页',
  key: '/',
  content: /*#__PURE__*/react.createElement(home["default"], null),
  closable: false,
  path: '/'
}];

var renderTabBar = function renderTabBar(props, DefaultTabBar) {
  return /*#__PURE__*/react.createElement(lib/* Sticky */.Le, {
    topOffset: 40,
    relative: true
  }, function (_ref) {
    var style = _ref.style;
    return /*#__PURE__*/react.createElement(DefaultTabBar, proTabs_extends({}, props, {
      style: _objectSpread({}, style)
    }));
  });
};

var ProTabs = function ProTabs(props) {
  var _useState = (0,react.useState)(''),
      _useState2 = proTabs_slicedToArray(_useState, 2),
      activeKey = _useState2[0],
      setActiveKey = _useState2[1];

  var _useState3 = (0,react.useState)(initialPanes),
      _useState4 = proTabs_slicedToArray(_useState3, 2),
      panes = _useState4[0],
      setPanes = _useState4[1];

  var _useState5 = (0,react.useState)(false),
      _useState6 = proTabs_slicedToArray(_useState5, 2),
      isReload = _useState6[0],
      setIsReload = _useState6[1];

  var _useState7 = (0,react.useState)({}),
      _useState8 = proTabs_slicedToArray(_useState7, 2),
      selectedPanel = _useState8[0],
      setSelectedPanel = _useState8[1];

  var pathRef = (0,react.useRef)('');
  var navigate = (0,react_router/* useNavigate */.s0)();
  var defaultActiveKey = props.defaultActiveKey,
      panesItem = props.panesItem,
      tabActiveKey = props.tabActiveKey;

  var _useLocation = (0,react_router/* useLocation */.TH)(),
      pathname = _useLocation.pathname,
      search = _useLocation.search;

  var fullPath = pathname + search; // 从本地存储中恢复已打开的tab列表
  // const resetTabs = useCallback(() => {
  //   const { tabKey } = getKeyName(pathname)
  //   setPanes(initialPanes)
  //   setActiveKey(tabKey)
  // }, [pathname])
  // 初始化页面
  // useEffect(() => {
  //   resetTabs()
  // }, [resetTabs])

  (0,react.useEffect)(function () {
    var newPath = pathname + search; // 当前的路由和上一次的一样，return

    if (!panesItem.path || panesItem.path === pathRef.current) return; // 保存这次的路由地址

    pathRef.current = newPath;
    var index = panes.findIndex(function (item) {
      return item.key === panesItem.key;
    }); // 无效的新tab，return

    if (!panesItem.key || index > -1 && newPath === panes[index].path) {
      setActiveKey(tabActiveKey);
      return;
    } // 新tab已存在，重新覆盖掉（解决带参数地址数据错乱问题）


    if (index > -1) {
      panes[index].path = newPath;
      setPanes(panes);
      setActiveKey(tabActiveKey);
      return;
    } // 添加新tab并保存起来


    setPanes([].concat(proTabs_toConsumableArray(panes), [panesItem]));
    setActiveKey(tabActiveKey); // storeTabs(panes)
  }, [panes, panesItem, pathname, search, tabActiveKey]);

  var onChange = function onChange(activeKey) {
    setActiveKey(activeKey);
    navigate(activeKey);
  };

  var onTabClick = function onTabClick(key) {};

  var onTabScroll = function onTabScroll(_ref2) {
    var direction = _ref2.direction;
  };

  var onEdit = function onEdit(targetKey, action) {
    action === 'remove' && remove(targetKey);
  };

  var remove = function remove(targetKey) {
    var delIndex = panes.findIndex(function (item) {
      return item.key === targetKey;
    });
    var filterPanes = panes.filter(function (pane) {
      return pane.key !== targetKey;
    }); // 删除非当前/当前tab

    if (targetKey !== activeKey) {
      setPanes(filterPanes); // storeTabs(panes) // 改变redux中数据
    } else {
      var nextPath = filterPanes[delIndex - 1].key;
      navigate(nextPath);
      setActiveKey(nextPath);
      setPanes(filterPanes);
    }
  };

  var isDisabled = function isDisabled() {
    return selectedPanel.key === '/';
  }; // 阻止右键默认事件


  var preventDefault = function preventDefault(event, panel) {
    event.preventDefault();
    setSelectedPanel(panel);
  }; // 刷新当前 tab


  var refreshTab = function refreshTab() {
    setIsReload(true);
    setTimeout(function () {
      setIsReload(false);
    }, 1000); // setStoreData('SET_RELOADPATH', pathname + search)
    // setTimeout(() => {
    //   setStoreData('SET_RELOADPATH', 'null')
    // }, 500)
  }; // 关闭其他或关闭所有


  var removeAll = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(isRemoveAll) {
      var key, homePanel, nowPanes;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              key = selectedPanel.key;
              navigate(isRemoveAll ? '/' : key);
              homePanel = [{
                title: '首页',
                key: '/',
                content: /*#__PURE__*/react.createElement(home["default"], null),
                closable: false,
                path: '/'
              }];
              nowPanes = key !== '/' && !isRemoveAll ? [].concat(homePanel, [selectedPanel]) : homePanel;
              setPanes(nowPanes);
              navigate(nowPanes[0].key);
              setActiveKey(isRemoveAll ? '/' : key); // storeTabs(nowPanes)

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function removeAll(_x) {
      return _ref3.apply(this, arguments);
    };
  }(); // tab 右键菜单


  var tabRightMenu = /*#__PURE__*/react.createElement(menu/* default */.Z, null, /*#__PURE__*/react.createElement(menu/* default.Item */.Z.Item, {
    key: "1",
    onClick: refreshTab,
    disabled: selectedPanel.key !== fullPath || selectedPanel.key === '/403'
  }, "\u5237\u65B0"), /*#__PURE__*/react.createElement(menu/* default.Item */.Z.Item, {
    key: "2",
    onClick: function onClick(e) {
      e.domEvent.stopPropagation();
      remove(selectedPanel.key);
    },
    disabled: isDisabled()
  }, "\u5173\u95ED"), /*#__PURE__*/react.createElement(menu/* default.Item */.Z.Item, {
    key: "3",
    onClick: function onClick(e) {
      e.domEvent.stopPropagation();
      removeAll();
    }
  }, "\u5173\u95ED\u5176\u4ED6"), /*#__PURE__*/react.createElement(menu/* default.Item */.Z.Item, {
    key: "4",
    onClick: function onClick(e) {
      e.domEvent.stopPropagation();
      removeAll(true);
    },
    disabled: isDisabled()
  }, "\u5168\u90E8\u5173\u95ED"));
  return /*#__PURE__*/react.createElement(lib/* StickyContainer */.L9, {
    className: proTabs_index_module.container,
    id: "container"
  }, /*#__PURE__*/react.createElement(tabs/* default */.Z, {
    hideAdd: true,
    type: "editable-card",
    activeKey: activeKey,
    defaultActiveKey: defaultActiveKey,
    onChange: onChange,
    onTabClick: onTabClick,
    onTabScroll: onTabScroll,
    onEdit: onEdit,
    renderTabBar: renderTabBar,
    tabBarGutter: 0,
    tabBarStyle: {
      zIndex: 2
    },
    className: proTabs_index_module.proTabs,
    tabBarExtraContent: {
      left: /*#__PURE__*/react.createElement(space/* default */.Z, {
        align: "center",
        size: 30,
        style: {
          margin: '0 25px'
        }
      }, /*#__PURE__*/react.createElement(icons_HeartTwoTone, {
        twoToneColor: "#eb2f96"
      }))
    }
  }, panes.map(function (pane) {
    return /*#__PURE__*/react.createElement(tabs/* default.TabPane */.Z.TabPane, {
      forceRender: true,
      key: pane.key,
      closable: pane.closable,
      tab: /*#__PURE__*/react.createElement(dropdown/* default */.Z, {
        overlay: tabRightMenu,
        placement: "bottomLeft",
        trigger: ['contextMenu'],
        getPopupContainer: function getPopupContainer(node) {
          return node.parentNode;
        }
      }, /*#__PURE__*/react.createElement("span", {
        onContextMenu: function onContextMenu(e) {
          return preventDefault(e, pane);
        }
      }, isReload && pane.key === fullPath && pane.key !== '/403' && /*#__PURE__*/react.createElement(icons_SyncOutlined, {
        title: "\u5237\u65B0",
        spin: isReload
      }), pane.title))
    }, isReload && pane.key === fullPath && pane.key !== '/403' ? /*#__PURE__*/react.createElement(es_alert/* default */.Z, {
      message: "\u5237\u65B0\u4E2D...",
      type: "info"
    }) : /*#__PURE__*/react.createElement(react.Fragment, null, pane.content));
  })));
};

/* harmony default export */ var proTabs = (ProTabs);
;// CONCATENATED MODULE: ./src/pages/layout/proContent/index.module.less
// extracted by mini-css-extract-plugin
/* harmony default export */ var proContent_index_module = ({"header":"header","footer":"footer","ant-back-top":"ant-back-top","content":"content","layout":"pages-layout-proContent-index-module__layout--rgXIe"});
;// CONCATENATED MODULE: ./src/pages/layout/proContent/index.js





function proContent_slicedToArray(arr, i) { return proContent_arrayWithHoles(arr) || proContent_iterableToArrayLimit(arr, i) || proContent_unsupportedIterableToArray(arr, i) || proContent_nonIterableRest(); }

function proContent_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function proContent_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return proContent_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return proContent_arrayLikeToArray(o, minLen); }

function proContent_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function proContent_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function proContent_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var Content = es_layout.Content,
    Header = es_layout.Header,
    Footer = es_layout.Footer; // const { Content, Footer } = Layout

var noNewTab = ['/signin', '/signup'];

var ProContent = function ProContent() {
  var _useState = (0,react.useState)('home'),
      _useState2 = proContent_slicedToArray(_useState, 2),
      tabActiveKey = _useState2[0],
      setTabActiveKey = _useState2[1];

  var _useState3 = (0,react.useState)({
    title: '',
    content: null,
    key: '',
    closable: false,
    path: ''
  }),
      _useState4 = proContent_slicedToArray(_useState3, 2),
      panesItem = _useState4[0],
      setPanesItem = _useState4[1];

  var pathRef = (0,react.useRef)('');
  var navigate = (0,react_router/* useNavigate */.s0)();

  var _useLocation = (0,react_router/* useLocation */.TH)(),
      pathname = _useLocation.pathname,
      search = _useLocation.search;

  (0,react.useEffect)(function () {
    // scroll to top
    document.querySelector('#container').scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    }); // 未登录
    // if (!token && pathname !== '/signin') {
    //   navigate('signin', { replace: true })
    //   return
    // }

    var _getKeyName = getKeyName(pathname),
        tabKey = _getKeyName.tabKey,
        title = _getKeyName.title,
        element = _getKeyName.element;

    if (pathname === pathRef.current || noNewTab.includes(pathname)) {
      setTabActiveKey(tabKey);
    }

    var newPath = search ? pathname + search : pathname;
    pathRef.current = newPath;
    setPanesItem({
      title: title,
      content: element,
      key: tabKey,
      closable: tabKey !== '/',
      path: newPath
    });
    setTabActiveKey(tabKey);
  }, [pathname, navigate, search]);
  return /*#__PURE__*/react.createElement(es_layout, {
    className: proContent_index_module.layout
  }, /*#__PURE__*/react.createElement(Header, {
    className: proContent_index_module.header
  }, /*#__PURE__*/react.createElement(proContent_breadcrumb, null)), /*#__PURE__*/react.createElement(Content, {
    className: proContent_index_module.content
  }, /*#__PURE__*/react.createElement(proTabs, {
    defaultActiveKey: "home",
    panesItem: panesItem,
    tabActiveKey: tabActiveKey
  })), /*#__PURE__*/react.createElement(Footer, {
    className: proContent_index_module.footer
  }, /*#__PURE__*/react.createElement(back_top, {
    target: function target() {
      return document.querySelector('#container');
    }
  }, /*#__PURE__*/react.createElement(icons_VerticalAlignTopOutlined, {
    style: {
      fontSize: 20
    }
  })), /*#__PURE__*/react.createElement("div", null, "\xA9 2020-", new Date().getFullYear(), " \u4E0A\u6D77\u9E92\u9E9F\u79D1\u6280\u6709\u9650\u516C\u53F8")));
};

/* harmony default export */ var proContent = (ProContent);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/HomeOutlined.js
// This icon file is generated automatically.
var HomeOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" } }] }, "name": "home", "theme": "outlined" };
/* harmony default export */ var asn_HomeOutlined = (HomeOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/HomeOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var HomeOutlined_HomeOutlined = function HomeOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_HomeOutlined
  }));
};

HomeOutlined_HomeOutlined.displayName = 'HomeOutlined';
/* harmony default export */ var icons_HomeOutlined = (/*#__PURE__*/react.forwardRef(HomeOutlined_HomeOutlined));
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/DeploymentUnitOutlined.js
// This icon file is generated automatically.
var DeploymentUnitOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M888.3 693.2c-42.5-24.6-94.3-18-129.2 12.8l-53-30.7V523.6c0-15.7-8.4-30.3-22-38.1l-136-78.3v-67.1c44.2-15 76-56.8 76-106.1 0-61.9-50.1-112-112-112s-112 50.1-112 112c0 49.3 31.8 91.1 76 106.1v67.1l-136 78.3c-13.6 7.8-22 22.4-22 38.1v151.6l-53 30.7c-34.9-30.8-86.8-37.4-129.2-12.8-53.5 31-71.7 99.4-41 152.9 30.8 53.5 98.9 71.9 152.2 41 42.5-24.6 62.7-73 53.6-118.8l48.7-28.3 140.6 81c6.8 3.9 14.4 5.9 22 5.9s15.2-2 22-5.9L674.5 740l48.7 28.3c-9.1 45.7 11.2 94.2 53.6 118.8 53.3 30.9 121.5 12.6 152.2-41 30.8-53.6 12.6-122-40.7-152.9zm-673 138.4a47.6 47.6 0 01-65.2-17.6c-13.2-22.9-5.4-52.3 17.5-65.5a47.6 47.6 0 0165.2 17.6c13.2 22.9 5.4 52.3-17.5 65.5zM522 463.8zM464 234a48.01 48.01 0 0196 0 48.01 48.01 0 01-96 0zm170 446.2l-122 70.3-122-70.3V539.8l122-70.3 122 70.3v140.4zm239.9 133.9c-13.2 22.9-42.4 30.8-65.2 17.6-22.8-13.2-30.7-42.6-17.5-65.5s42.4-30.8 65.2-17.6c22.9 13.2 30.7 42.5 17.5 65.5z" } }] }, "name": "deployment-unit", "theme": "outlined" };
/* harmony default export */ var asn_DeploymentUnitOutlined = (DeploymentUnitOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/DeploymentUnitOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var DeploymentUnitOutlined_DeploymentUnitOutlined = function DeploymentUnitOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_DeploymentUnitOutlined
  }));
};

DeploymentUnitOutlined_DeploymentUnitOutlined.displayName = 'DeploymentUnitOutlined';
/* harmony default export */ var icons_DeploymentUnitOutlined = (/*#__PURE__*/react.forwardRef(DeploymentUnitOutlined_DeploymentUnitOutlined));
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/HeatMapOutlined.js
// This icon file is generated automatically.
var HeatMapOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M955.7 856l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-790.4-23.9L512 231.9 858.7 832H165.3zm319-474.1l-228 394c-12.3 21.3 3.1 48 27.7 48h455.8c24.7 0 40.1-26.7 27.7-48L539.7 358c-6.2-10.7-17-16-27.7-16-10.8 0-21.6 5.3-27.7 16zm214 386H325.7L512 422l186.3 322zm-214-194.1l-57 98.4C415 669.5 430.4 696 455 696h114c24.6 0 39.9-26.5 27.7-47.7l-57-98.4c-6.1-10.6-16.9-15.9-27.7-15.9s-21.5 5.3-27.7 15.9zm57.1 98.4h-58.7l29.4-50.7 29.3 50.7z" } }] }, "name": "heat-map", "theme": "outlined" };
/* harmony default export */ var asn_HeatMapOutlined = (HeatMapOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/HeatMapOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var HeatMapOutlined_HeatMapOutlined = function HeatMapOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_HeatMapOutlined
  }));
};

HeatMapOutlined_HeatMapOutlined.displayName = 'HeatMapOutlined';
/* harmony default export */ var icons_HeatMapOutlined = (/*#__PURE__*/react.forwardRef(HeatMapOutlined_HeatMapOutlined));
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/OrderedListOutlined.js
// This icon file is generated automatically.
var OrderedListOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M920 760H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-568H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM216 712H100c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h72.4v20.5h-35.7c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h35.7V838H100c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h116c2.2 0 4-1.8 4-4V716c0-2.2-1.8-4-4-4zM100 188h38v120c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V152c0-4.4-3.6-8-8-8h-78c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4zm116 240H100c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4h68.4l-70.3 77.7a8.3 8.3 0 00-2.1 5.4V592c0 2.2 1.8 4 4 4h116c2.2 0 4-1.8 4-4v-36c0-2.2-1.8-4-4-4h-68.4l70.3-77.7a8.3 8.3 0 002.1-5.4V432c0-2.2-1.8-4-4-4z" } }] }, "name": "ordered-list", "theme": "outlined" };
/* harmony default export */ var asn_OrderedListOutlined = (OrderedListOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/OrderedListOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var OrderedListOutlined_OrderedListOutlined = function OrderedListOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_OrderedListOutlined
  }));
};

OrderedListOutlined_OrderedListOutlined.displayName = 'OrderedListOutlined';
/* harmony default export */ var icons_OrderedListOutlined = (/*#__PURE__*/react.forwardRef(OrderedListOutlined_OrderedListOutlined));
;// CONCATENATED MODULE: ./src/pages/layout/proSecNav/index.module.less
// extracted by mini-css-extract-plugin
/* harmony default export */ var proSecNav_index_module = ({"menu":"pages-layout-proSecNav-index-module__menu--PZvWo"});
;// CONCATENATED MODULE: ./src/pages/layout/proSecNav/index.js



function proSecNav_slicedToArray(arr, i) { return proSecNav_arrayWithHoles(arr) || proSecNav_iterableToArrayLimit(arr, i) || proSecNav_unsupportedIterableToArray(arr, i) || proSecNav_nonIterableRest(); }

function proSecNav_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function proSecNav_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return proSecNav_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return proSecNav_arrayLikeToArray(o, minLen); }

function proSecNav_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function proSecNav_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function proSecNav_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


 // import { useNavigate } from 'react-router-dom'



var pathSubmenu = {
  '/home': ['home'],
  '/coupons/add': ['/sub-act', '/sub-coupons'],
  '/coupons/edit': ['/sub-act', '/sub-coupons'],
  '/product': ['/sub-act', '/sub-coupons']
};

var ProSecNav = function ProSecNav() {
  var navigate = (0,react_router/* useNavigate */.s0)();

  var _useLocation = (0,react_router/* useLocation */.TH)(),
      pathname = _useLocation.pathname;

  var redirectTo = function redirectTo(path) {
    navigate(path);
  };

  var _useState = (0,react.useState)(['home']),
      _useState2 = proSecNav_slicedToArray(_useState, 2),
      selectedKeys = _useState2[0],
      setSelectedKeys = _useState2[1]; // 当前路由对应的 sub menu key


  var _useState3 = (0,react.useState)(['home']),
      _useState4 = proSecNav_slicedToArray(_useState3, 2),
      openKeys = _useState4[0],
      setOpenKeys = _useState4[1]; // 提取放在redux中, tab 切换时改成 false


  var _useState5 = (0,react.useState)(false),
      _useState6 = proSecNav_slicedToArray(_useState5, 2),
      isOpenChange = _useState6[0],
      setIsOpenChange = _useState6[1]; // submenu keys of first level


  var _useState7 = (0,react.useState)(['/sub-act', '/sub-list']),
      _useState8 = proSecNav_slicedToArray(_useState7, 1),
      rootSubmenuKeys = _useState8[0];

  (0,react.useEffect)(function () {
    var selectedPathKey = pathname;
    setSelectedKeys([selectedPathKey]);
    setOpenKeys(isOpenChange ? openKeys : pathSubmenu[pathname] ? pathSubmenu[pathname] : openKeys); // setOpenKeys(openKeys)
  }, [pathname, openKeys, isOpenChange]);

  var onItemClick = function onItemClick(_ref) {
    var item = _ref.item,
        key = _ref.key,
        keyPath = _ref.keyPath;
    setIsOpenChange(false);
    redirectTo(key);
  };

  var onOpenChange = function onOpenChange(keys) {
    // setOpenKeys(keys)
    var latestOpenKey = keys.find(function (key) {
      return openKeys.indexOf(key) === -1;
    });
    setIsOpenChange(true);

    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(menu/* default */.Z, {
    mode: "inline",
    defaultSelectedKeys: selectedKeys,
    defaultOpenKeys: openKeys,
    selectedKeys: selectedKeys,
    openKeys: openKeys // theme="dark"
    ,
    className: proSecNav_index_module.menu,
    onOpenChange: onOpenChange,
    onClick: onItemClick
  }, /*#__PURE__*/react.createElement(menu/* default.Item */.Z.Item, {
    key: "/",
    icon: /*#__PURE__*/react.createElement(icons_HomeOutlined, null)
  }, "Home"), /*#__PURE__*/react.createElement(menu/* default.Item */.Z.Item, {
    key: "/demo",
    icon: /*#__PURE__*/react.createElement(icons_DeploymentUnitOutlined, null)
  }, "Demo"), /*#__PURE__*/react.createElement(menu/* default.SubMenu */.Z.SubMenu, {
    key: "/sub-act",
    icon: /*#__PURE__*/react.createElement(icons_HeatMapOutlined, null),
    title: "\u6D3B\u52A8\u5355"
  }, /*#__PURE__*/react.createElement(menu/* default.SubMenu */.Z.SubMenu, {
    key: "/sub-coupons",
    icon: /*#__PURE__*/react.createElement(icons_DeploymentUnitOutlined, null),
    title: "\u9001\u5238\u6D3B\u52A8\u5355"
  }, /*#__PURE__*/react.createElement(menu/* default.Item */.Z.Item, {
    key: "/coupons/add"
  }, "\u65B0\u5EFA"), /*#__PURE__*/react.createElement(menu/* default.Item */.Z.Item, {
    key: "/coupons/edit"
  }, "\u7F16\u8F91")), /*#__PURE__*/react.createElement(menu/* default.Item */.Z.Item, {
    key: "/product",
    icon: /*#__PURE__*/react.createElement(icons_DeploymentUnitOutlined, null)
  }, "\u5546\u54C1\u8C03\u4EF7\u5355")), /*#__PURE__*/react.createElement(menu/* default.SubMenu */.Z.SubMenu, {
    key: "/sub-list",
    icon: /*#__PURE__*/react.createElement(icons_OrderedListOutlined, null),
    title: "\u4FC3\u9500\u5217\u8868"
  }, /*#__PURE__*/react.createElement(menu/* default.Item */.Z.Item, {
    key: "/coupons/list"
  }, "\u5238\u5217\u8868"), /*#__PURE__*/react.createElement(menu/* default.Item */.Z.Item, {
    key: "/order/list"
  }, "\u8BA2\u5355\u5217\u8868"))));
};

/* harmony default export */ var proSecNav = (ProSecNav);
;// CONCATENATED MODULE: ./src/pages/layout/index.module.less
// extracted by mini-css-extract-plugin
/* harmony default export */ var layout_index_module = ({"layout":"pages-layout-index-module__layout--keqwg"});
;// CONCATENATED MODULE: ./src/pages/layout/index.js









var ProLayout = function ProLayout() {
  return /*#__PURE__*/react.createElement(es_layout, {
    className: layout_index_module.layout
  }, /*#__PURE__*/react.createElement(proHeader, null), /*#__PURE__*/react.createElement(es_layout, {
    className: layout_index_module.layout
  }, /*#__PURE__*/react.createElement(proSider, null, /*#__PURE__*/react.createElement(proSecNav, null)), /*#__PURE__*/react.createElement(proContent, null)));
};

/* harmony default export */ var pages_layout = (ProLayout);

/***/ })

}]);
//# sourceMappingURL=970.e9747c2d17071e83fc92.js.map