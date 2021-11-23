"use strict";
(self["webpackChunkpromotion_web"] = self["webpackChunkpromotion_web"] || []).push([[116],{

/***/ 4308:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c4": function() { return /* binding */ responsiveArray; }
/* harmony export */ });
/* unused harmony export responsiveMap */
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4942);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7462);


var responsiveArray = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
var responsiveMap = {
  xs: '(max-width: 575px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1600px)'
};
var subscribers = new Map();
var subUid = -1;
var screens = {};
var responsiveObserve = {
  matchHandlers: {},
  dispatch: function dispatch(pointMap) {
    screens = pointMap;
    subscribers.forEach(function (func) {
      return func(screens);
    });
    return subscribers.size >= 1;
  },
  subscribe: function subscribe(func) {
    if (!subscribers.size) this.register();
    subUid += 1;
    subscribers.set(subUid, func);
    func(screens);
    return subUid;
  },
  unsubscribe: function unsubscribe(token) {
    subscribers["delete"](token);
    if (!subscribers.size) this.unregister();
  },
  unregister: function unregister() {
    var _this = this;

    Object.keys(responsiveMap).forEach(function (screen) {
      var matchMediaQuery = responsiveMap[screen];
      var handler = _this.matchHandlers[matchMediaQuery];
      handler === null || handler === void 0 ? void 0 : handler.mql.removeListener(handler === null || handler === void 0 ? void 0 : handler.listener);
    });
    subscribers.clear();
  },
  register: function register() {
    var _this2 = this;

    Object.keys(responsiveMap).forEach(function (screen) {
      var matchMediaQuery = responsiveMap[screen];

      var listener = function listener(_ref) {
        var matches = _ref.matches;

        _this2.dispatch((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({}, screens), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({}, screen, matches)));
      };

      var mql = window.matchMedia(matchMediaQuery);
      mql.addListener(listener);
      _this2.matchHandlers[matchMediaQuery] = {
        mql: mql,
        listener: listener
      };
      listener(mql);
    });
  }
};
/* harmony default export */ __webpack_exports__["ZP"] = (responsiveObserve);

/***/ }),

/***/ 5378:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9439);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _util_responsiveObserve__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4308);




function useBreakpoint() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
      _useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(_useState, 2),
      screens = _useState2[0],
      setScreens = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var token = _util_responsiveObserve__WEBPACK_IMPORTED_MODULE_2__/* ["default"].subscribe */ .ZP.subscribe(function (supportScreens) {
      setScreens(supportScreens);
    });
    return function () {
      return _util_responsiveObserve__WEBPACK_IMPORTED_MODULE_2__/* ["default"].unsubscribe */ .ZP.unsubscribe(token);
    };
  }, []);
  return screens;
}

/* harmony default export */ __webpack_exports__["Z"] = (useBreakpoint);

/***/ }),

/***/ 7880:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ steps; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__(8423);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(3144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(136);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__(8557);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__(344);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./node_modules/rc-steps/es/Step.js







var _excluded = ["className", "prefixCls", "style", "active", "status", "iconPrefix", "icon", "wrapperStyle", "stepNumber", "disabled", "description", "title", "subTitle", "progressDot", "stepIcon", "tailContent", "icons", "stepIndex", "onStepClick", "onClick"];

/* eslint react/prop-types: 0 */



function isString(str) {
  return typeof str === 'string';
}

var Step = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(Step, _React$Component);

  var _super = (0,createSuper/* default */.Z)(Step);

  function Step() {
    var _this;

    (0,classCallCheck/* default */.Z)(this, Step);

    _this = _super.apply(this, arguments);

    _this.onClick = function () {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          onStepClick = _this$props.onStepClick,
          stepIndex = _this$props.stepIndex;

      if (onClick) {
        onClick.apply(void 0, arguments);
      }

      onStepClick(stepIndex);
    };

    return _this;
  }

  (0,createClass/* default */.Z)(Step, [{
    key: "renderIconNode",
    value: function renderIconNode() {
      var _classNames;

      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          progressDot = _this$props2.progressDot,
          stepIcon = _this$props2.stepIcon,
          stepNumber = _this$props2.stepNumber,
          status = _this$props2.status,
          title = _this$props2.title,
          description = _this$props2.description,
          icon = _this$props2.icon,
          iconPrefix = _this$props2.iconPrefix,
          icons = _this$props2.icons;
      var iconNode;
      var iconClassName = classnames_default()("".concat(prefixCls, "-icon"), "".concat(iconPrefix, "icon"), (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(iconPrefix, "icon-").concat(icon), icon && isString(icon)), (0,defineProperty/* default */.Z)(_classNames, "".concat(iconPrefix, "icon-check"), !icon && status === 'finish' && (icons && !icons.finish || !icons)), (0,defineProperty/* default */.Z)(_classNames, "".concat(iconPrefix, "icon-cross"), !icon && status === 'error' && (icons && !icons.error || !icons)), _classNames));
      var iconDot = /*#__PURE__*/react.createElement("span", {
        className: "".concat(prefixCls, "-icon-dot")
      }); // `progressDot` enjoy the highest priority

      if (progressDot) {
        if (typeof progressDot === 'function') {
          iconNode = /*#__PURE__*/react.createElement("span", {
            className: "".concat(prefixCls, "-icon")
          }, progressDot(iconDot, {
            index: stepNumber - 1,
            status: status,
            title: title,
            description: description
          }));
        } else {
          iconNode = /*#__PURE__*/react.createElement("span", {
            className: "".concat(prefixCls, "-icon")
          }, iconDot);
        }
      } else if (icon && !isString(icon)) {
        iconNode = /*#__PURE__*/react.createElement("span", {
          className: "".concat(prefixCls, "-icon")
        }, icon);
      } else if (icons && icons.finish && status === 'finish') {
        iconNode = /*#__PURE__*/react.createElement("span", {
          className: "".concat(prefixCls, "-icon")
        }, icons.finish);
      } else if (icons && icons.error && status === 'error') {
        iconNode = /*#__PURE__*/react.createElement("span", {
          className: "".concat(prefixCls, "-icon")
        }, icons.error);
      } else if (icon || status === 'finish' || status === 'error') {
        iconNode = /*#__PURE__*/react.createElement("span", {
          className: iconClassName
        });
      } else {
        iconNode = /*#__PURE__*/react.createElement("span", {
          className: "".concat(prefixCls, "-icon")
        }, stepNumber);
      }

      if (stepIcon) {
        iconNode = stepIcon({
          index: stepNumber - 1,
          status: status,
          title: title,
          description: description,
          node: iconNode
        });
      }

      return iconNode;
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames2;

      var _this$props3 = this.props,
          className = _this$props3.className,
          prefixCls = _this$props3.prefixCls,
          style = _this$props3.style,
          active = _this$props3.active,
          _this$props3$status = _this$props3.status,
          status = _this$props3$status === void 0 ? 'wait' : _this$props3$status,
          iconPrefix = _this$props3.iconPrefix,
          icon = _this$props3.icon,
          wrapperStyle = _this$props3.wrapperStyle,
          stepNumber = _this$props3.stepNumber,
          disabled = _this$props3.disabled,
          description = _this$props3.description,
          title = _this$props3.title,
          subTitle = _this$props3.subTitle,
          progressDot = _this$props3.progressDot,
          stepIcon = _this$props3.stepIcon,
          tailContent = _this$props3.tailContent,
          icons = _this$props3.icons,
          stepIndex = _this$props3.stepIndex,
          onStepClick = _this$props3.onStepClick,
          onClick = _this$props3.onClick,
          restProps = (0,objectWithoutProperties/* default */.Z)(_this$props3, _excluded);

      var classString = classnames_default()("".concat(prefixCls, "-item"), "".concat(prefixCls, "-item-").concat(status), className, (_classNames2 = {}, (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-item-custom"), icon), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-item-active"), active), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-item-disabled"), disabled === true), _classNames2));

      var stepItemStyle = (0,objectSpread2/* default */.Z)({}, style);

      var accessibilityProps = {};

      if (onStepClick && !disabled) {
        accessibilityProps.role = 'button';
        accessibilityProps.tabIndex = 0;
        accessibilityProps.onClick = this.onClick;
      }

      return /*#__PURE__*/react.createElement("div", Object.assign({}, restProps, {
        className: classString,
        style: stepItemStyle
      }), /*#__PURE__*/react.createElement("div", Object.assign({
        onClick: onClick
      }, accessibilityProps, {
        className: "".concat(prefixCls, "-item-container")
      }), /*#__PURE__*/react.createElement("div", {
        className: "".concat(prefixCls, "-item-tail")
      }, tailContent), /*#__PURE__*/react.createElement("div", {
        className: "".concat(prefixCls, "-item-icon")
      }, this.renderIconNode()), /*#__PURE__*/react.createElement("div", {
        className: "".concat(prefixCls, "-item-content")
      }, /*#__PURE__*/react.createElement("div", {
        className: "".concat(prefixCls, "-item-title")
      }, title, subTitle && /*#__PURE__*/react.createElement("div", {
        title: typeof subTitle === 'string' ? subTitle : undefined,
        className: "".concat(prefixCls, "-item-subtitle")
      }, subTitle)), description && /*#__PURE__*/react.createElement("div", {
        className: "".concat(prefixCls, "-item-description")
      }, description))));
    }
  }]);

  return Step;
}(react.Component);


;// CONCATENATED MODULE: ./node_modules/rc-steps/es/Steps.js







var Steps_excluded = ["prefixCls", "style", "className", "children", "direction", "type", "labelPlacement", "iconPrefix", "status", "size", "current", "progressDot", "stepIcon", "initial", "icons", "onChange"];

/* eslint react/no-did-mount-set-state: 0, react/prop-types: 0 */





var Steps = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(Steps, _React$Component);

  var _super = (0,createSuper/* default */.Z)(Steps);

  function Steps() {
    var _this;

    (0,classCallCheck/* default */.Z)(this, Steps);

    _this = _super.apply(this, arguments);

    _this.onStepClick = function (next) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          current = _this$props.current;

      if (onChange && current !== next) {
        onChange(next);
      }
    };

    return _this;
  }

  (0,createClass/* default */.Z)(Steps, [{
    key: "render",
    value: function render() {
      var _classNames,
          _this2 = this;

      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          _this$props2$style = _this$props2.style,
          style = _this$props2$style === void 0 ? {} : _this$props2$style,
          className = _this$props2.className,
          children = _this$props2.children,
          direction = _this$props2.direction,
          type = _this$props2.type,
          labelPlacement = _this$props2.labelPlacement,
          iconPrefix = _this$props2.iconPrefix,
          status = _this$props2.status,
          size = _this$props2.size,
          current = _this$props2.current,
          progressDot = _this$props2.progressDot,
          stepIcon = _this$props2.stepIcon,
          initial = _this$props2.initial,
          icons = _this$props2.icons,
          onChange = _this$props2.onChange,
          restProps = (0,objectWithoutProperties/* default */.Z)(_this$props2, Steps_excluded);

      var isNav = type === 'navigation';
      var adjustedLabelPlacement = progressDot ? 'vertical' : labelPlacement;
      var classString = classnames_default()(prefixCls, "".concat(prefixCls, "-").concat(direction), className, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-").concat(size), size), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-label-").concat(adjustedLabelPlacement), direction === 'horizontal'), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-dot"), !!progressDot), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-navigation"), isNav), _classNames));
      return /*#__PURE__*/react.createElement("div", Object.assign({
        className: classString,
        style: style
      }, restProps), (0,toArray/* default */.Z)(children).map(function (child, index) {
        var stepNumber = initial + index;

        var childProps = (0,objectSpread2/* default */.Z)({
          stepNumber: "".concat(stepNumber + 1),
          stepIndex: stepNumber,
          key: stepNumber,
          prefixCls: prefixCls,
          iconPrefix: iconPrefix,
          wrapperStyle: style,
          progressDot: progressDot,
          stepIcon: stepIcon,
          icons: icons,
          onStepClick: onChange && _this2.onStepClick
        }, child.props); // fix tail color


        if (status === 'error' && index === current - 1) {
          childProps.className = "".concat(prefixCls, "-next-error");
        }

        if (!child.props.status) {
          if (stepNumber === current) {
            childProps.status = status;
          } else if (stepNumber < current) {
            childProps.status = 'finish';
          } else {
            childProps.status = 'wait';
          }
        }

        childProps.active = stepNumber === current;
        return /*#__PURE__*/(0,react.cloneElement)(child, childProps);
      }));
    }
  }]);

  return Steps;
}(react.Component);


Steps.Step = Step;
Steps.defaultProps = {
  type: 'default',
  prefixCls: 'rc-steps',
  iconPrefix: 'rc',
  direction: 'horizontal',
  labelPlacement: 'horizontal',
  initial: 0,
  current: 0,
  status: 'process',
  size: '',
  progressDot: false
};
;// CONCATENATED MODULE: ./node_modules/rc-steps/es/index.js



/* harmony default export */ var es = (Steps);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CheckOutlined.js + 1 modules
var CheckOutlined = __webpack_require__(9508);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseOutlined.js + 1 modules
var CloseOutlined = __webpack_require__(4549);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js + 1 modules
var context = __webpack_require__(5632);
// EXTERNAL MODULE: ./node_modules/antd/es/progress/index.js + 9 modules
var progress = __webpack_require__(2074);
// EXTERNAL MODULE: ./node_modules/antd/es/grid/hooks/useBreakpoint.js
var useBreakpoint = __webpack_require__(5378);
;// CONCATENATED MODULE: ./node_modules/antd/es/steps/index.js












var steps_Steps = function Steps(props) {
  var _classNames;

  var percent = props.percent,
      size = props.size,
      className = props.className,
      direction = props.direction,
      responsive = props.responsive;

  var _useBreakpoint = (0,useBreakpoint/* default */.Z)(),
      xs = _useBreakpoint.xs;

  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
      getPrefixCls = _React$useContext.getPrefixCls,
      rtlDirection = _React$useContext.direction;

  var getDirection = react.useCallback(function () {
    return responsive && xs ? 'vertical' : direction;
  }, [xs, direction]);
  var prefixCls = getPrefixCls('steps', props.prefixCls);
  var iconPrefix = getPrefixCls('', props.iconPrefix);
  var stepsClassName = classnames_default()((_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-rtl"), rtlDirection === 'rtl'), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-with-progress"), percent !== undefined), _classNames), className);
  var icons = {
    finish: /*#__PURE__*/react.createElement(CheckOutlined/* default */.Z, {
      className: "".concat(prefixCls, "-finish-icon")
    }),
    error: /*#__PURE__*/react.createElement(CloseOutlined/* default */.Z, {
      className: "".concat(prefixCls, "-error-icon")
    })
  };

  var stepIconRender = function stepIconRender(_ref) {
    var node = _ref.node,
        status = _ref.status;

    if (status === 'process' && percent !== undefined) {
      // currently it's hard-coded, since we can't easily read the actually width of icon
      var progressWidth = size === 'small' ? 32 : 40;
      var iconWithProgress = /*#__PURE__*/react.createElement("div", {
        className: "".concat(prefixCls, "-progress-icon")
      }, /*#__PURE__*/react.createElement(progress/* default */.Z, {
        type: "circle",
        percent: percent,
        width: progressWidth,
        strokeWidth: 4,
        format: function format() {
          return null;
        }
      }), node);
      return iconWithProgress;
    }

    return node;
  };

  return /*#__PURE__*/react.createElement(es, (0,esm_extends/* default */.Z)({
    icons: icons
  }, (0,omit/* default */.Z)(props, ['percent', 'responsive']), {
    direction: getDirection(),
    stepIcon: stepIconRender,
    prefixCls: prefixCls,
    iconPrefix: iconPrefix,
    className: stepsClassName
  }));
};

steps_Steps.Step = es.Step;
steps_Steps.defaultProps = {
  current: 0
};
/* harmony default export */ var steps = (steps_Steps);

/***/ }),

/***/ 2178:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ./node_modules/antd/es/style/index.less
var style = __webpack_require__(632);
;// CONCATENATED MODULE: ./node_modules/antd/es/steps/style/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/antd/es/progress/style/index.js + 1 modules
var progress_style = __webpack_require__(2078);
;// CONCATENATED MODULE: ./node_modules/antd/es/steps/style/index.js

 // style dependencies
// deps-lint-skip: grid



/***/ }),

/***/ 116:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_steps_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2178);
/* harmony import */ var antd_es_steps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7880);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);



var Step = antd_es_steps__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Step */ .Z.Step;

var AddCoupons = function AddCoupons() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd_es_steps__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    current: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Step, {
    title: "Finished",
    description: "This is a description."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Step, {
    title: "In Progress",
    subTitle: "Left 00:00:08",
    description: "This is a description."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Step, {
    title: "Waiting",
    description: "This is a description."
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    style: {
      height: 10000
    }
  }, "Scroll to top"));
};

/* harmony default export */ __webpack_exports__["default"] = (AddCoupons);

/***/ })

}]);
//# sourceMappingURL=116.2d5079dc14bdf8bd5c1c.js.map