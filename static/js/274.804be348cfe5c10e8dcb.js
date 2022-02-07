(self["webpackChunkpromotion_web"] = self["webpackChunkpromotion_web"] || []).push([[274],{

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

/***/ 9508:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ icons_CheckOutlined; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/CheckOutlined.js
// This icon file is generated automatically.
var CheckOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, "name": "check", "theme": "outlined" };
/* harmony default export */ var asn_CheckOutlined = (CheckOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 2 modules
var AntdIcon = __webpack_require__(7029);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/CheckOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var CheckOutlined_CheckOutlined = function CheckOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_CheckOutlined
  }));
};

CheckOutlined_CheckOutlined.displayName = 'CheckOutlined';
/* harmony default export */ var icons_CheckOutlined = (/*#__PURE__*/react.forwardRef(CheckOutlined_CheckOutlined));

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

/***/ 6114:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ es_dropdown; }
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
;// CONCATENATED MODULE: ./node_modules/antd/es/dropdown/index.js

/* harmony default export */ var es_dropdown = (dropdown);

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

/***/ 5378:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ 4458:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ progress; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(3144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(7326);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(9340);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__(8557);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__(8423);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseOutlined.js + 1 modules
var CloseOutlined = __webpack_require__(4549);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CheckOutlined.js + 1 modules
var CheckOutlined = __webpack_require__(9508);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js + 1 modules
var CheckCircleFilled = __webpack_require__(8819);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js + 1 modules
var CloseCircleFilled = __webpack_require__(3061);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js + 1 modules
var context = __webpack_require__(5632);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/type.js
var type = __webpack_require__(3355);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/devWarning.js
var devWarning = __webpack_require__(1687);
// EXTERNAL MODULE: ./node_modules/@ant-design/colors/dist/index.esm.js
var index_esm = __webpack_require__(2138);
;// CONCATENATED MODULE: ./node_modules/antd/es/progress/utils.js

function validProgress(progress) {
  if (!progress || progress < 0) {
    return 0;
  }

  if (progress > 100) {
    return 100;
  }

  return progress;
}
function getSuccessPercent(_ref) {
  var success = _ref.success,
      successPercent = _ref.successPercent;
  var percent = successPercent;
  /** @deprecated Use `percent` instead */

  if (success && 'progress' in success) {
    (0,devWarning/* default */.Z)(false, 'Progress', '`success.progress` is deprecated. Please use `success.percent` instead.');
    percent = success.progress;
  }

  if (success && 'percent' in success) {
    percent = success.percent;
  }

  return percent;
}
;// CONCATENATED MODULE: ./node_modules/antd/es/progress/Line.js


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




/**
 * @example
 *   {
 *     "0%": "#afc163",
 *     "75%": "#009900",
 *     "50%": "green", // ====> '#afc163 0%, #66FF00 25%, #00CC00 50%, #009900 75%, #ffffff 100%'
 *     "25%": "#66FF00",
 *     "100%": "#ffffff"
 *   }
 */

var sortGradient = function sortGradient(gradients) {
  var tempArr = [];
  Object.keys(gradients).forEach(function (key) {
    var formattedKey = parseFloat(key.replace(/%/g, ''));

    if (!isNaN(formattedKey)) {
      tempArr.push({
        key: formattedKey,
        value: gradients[key]
      });
    }
  });
  tempArr = tempArr.sort(function (a, b) {
    return a.key - b.key;
  });
  return tempArr.map(function (_ref) {
    var key = _ref.key,
        value = _ref.value;
    return "".concat(value, " ").concat(key, "%");
  }).join(', ');
};
/**
 * Then this man came to realize the truth: Besides six pence, there is the moon. Besides bread and
 * butter, there is the bug. And... Besides women, there is the code.
 *
 * @example
 *   {
 *     "0%": "#afc163",
 *     "25%": "#66FF00",
 *     "50%": "#00CC00", // ====>  linear-gradient(to right, #afc163 0%, #66FF00 25%,
 *     "75%": "#009900", //        #00CC00 50%, #009900 75%, #ffffff 100%)
 *     "100%": "#ffffff"
 *   }
 */

var handleGradient = function handleGradient(strokeColor, directionConfig) {
  var _strokeColor$from = strokeColor.from,
      from = _strokeColor$from === void 0 ? index_esm/* presetPrimaryColors.blue */.ez.blue : _strokeColor$from,
      _strokeColor$to = strokeColor.to,
      to = _strokeColor$to === void 0 ? index_esm/* presetPrimaryColors.blue */.ez.blue : _strokeColor$to,
      _strokeColor$directio = strokeColor.direction,
      direction = _strokeColor$directio === void 0 ? directionConfig === 'rtl' ? 'to left' : 'to right' : _strokeColor$directio,
      rest = __rest(strokeColor, ["from", "to", "direction"]);

  if (Object.keys(rest).length !== 0) {
    var sortedGradients = sortGradient(rest);
    return {
      backgroundImage: "linear-gradient(".concat(direction, ", ").concat(sortedGradients, ")")
    };
  }

  return {
    backgroundImage: "linear-gradient(".concat(direction, ", ").concat(from, ", ").concat(to, ")")
  };
};

var Line = function Line(props) {
  var prefixCls = props.prefixCls,
      directionConfig = props.direction,
      percent = props.percent,
      strokeWidth = props.strokeWidth,
      size = props.size,
      strokeColor = props.strokeColor,
      strokeLinecap = props.strokeLinecap,
      children = props.children,
      trailColor = props.trailColor,
      success = props.success;
  var backgroundProps = strokeColor && typeof strokeColor !== 'string' ? handleGradient(strokeColor, directionConfig) : {
    background: strokeColor
  };
  var trailStyle = trailColor ? {
    backgroundColor: trailColor
  } : undefined;

  var percentStyle = (0,esm_extends/* default */.Z)({
    width: "".concat(validProgress(percent), "%"),
    height: strokeWidth || (size === 'small' ? 6 : 8),
    borderRadius: strokeLinecap === 'square' ? 0 : ''
  }, backgroundProps);

  var successPercent = getSuccessPercent(props);
  var successPercentStyle = {
    width: "".concat(validProgress(successPercent), "%"),
    height: strokeWidth || (size === 'small' ? 6 : 8),
    borderRadius: strokeLinecap === 'square' ? 0 : '',
    backgroundColor: success === null || success === void 0 ? void 0 : success.strokeColor
  };
  var successSegment = successPercent !== undefined ? /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-success-bg"),
    style: successPercentStyle
  }) : null;
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-outer")
  }, /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-inner"),
    style: trailStyle
  }, /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-bg"),
    style: percentStyle
  }), successSegment)), children);
};

/* harmony default export */ var progress_Line = (Line);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(9439);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(4925);
;// CONCATENATED MODULE: ./node_modules/rc-progress/es/common.js

var defaultProps = {
  className: '',
  percent: 0,
  prefixCls: 'rc-progress',
  strokeColor: '#2db7f5',
  strokeLinecap: 'round',
  strokeWidth: 1,
  style: {},
  trailColor: '#D9D9D9',
  trailWidth: 1
};
var useTransitionDuration = function useTransitionDuration(percentList) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  var paths = percentList.map(function () {
    return (0,react.useRef)();
  });
  var prevTimeStamp = (0,react.useRef)(null);
  (0,react.useEffect)(function () {
    var now = Date.now();
    var updated = false;
    Object.keys(paths).forEach(function (key) {
      var path = paths[key].current;

      if (!path) {
        return;
      }

      updated = true;
      var pathStyle = path.style;
      pathStyle.transitionDuration = '.3s, .3s, .3s, .06s';

      if (prevTimeStamp.current && now - prevTimeStamp.current < 100) {
        pathStyle.transitionDuration = '0s, 0s';
      }
    });

    if (updated) {
      prevTimeStamp.current = Date.now();
    }
  });
  return [paths];
};
;// CONCATENATED MODULE: ./node_modules/rc-progress/es/Line.js



var _excluded = ["className", "percent", "prefixCls", "strokeColor", "strokeLinecap", "strokeWidth", "style", "trailColor", "trailWidth", "transition"];




var Line_Line = function Line(_ref) {
  var className = _ref.className,
      percent = _ref.percent,
      prefixCls = _ref.prefixCls,
      strokeColor = _ref.strokeColor,
      strokeLinecap = _ref.strokeLinecap,
      strokeWidth = _ref.strokeWidth,
      style = _ref.style,
      trailColor = _ref.trailColor,
      trailWidth = _ref.trailWidth,
      transition = _ref.transition,
      restProps = (0,objectWithoutProperties/* default */.Z)(_ref, _excluded);

  // eslint-disable-next-line no-param-reassign
  delete restProps.gapPosition;
  var percentList = Array.isArray(percent) ? percent : [percent];
  var strokeColorList = Array.isArray(strokeColor) ? strokeColor : [strokeColor];

  var _useTransitionDuratio = useTransitionDuration(percentList),
      _useTransitionDuratio2 = (0,slicedToArray/* default */.Z)(_useTransitionDuratio, 1),
      paths = _useTransitionDuratio2[0];

  var center = strokeWidth / 2;
  var right = 100 - strokeWidth / 2;
  var pathString = "M ".concat(strokeLinecap === 'round' ? center : 0, ",").concat(center, "\n         L ").concat(strokeLinecap === 'round' ? right : 100, ",").concat(center);
  var viewBoxString = "0 0 100 ".concat(strokeWidth);
  var stackPtg = 0;
  return /*#__PURE__*/react.createElement("svg", (0,esm_extends/* default */.Z)({
    className: classnames_default()("".concat(prefixCls, "-line"), className),
    viewBox: viewBoxString,
    preserveAspectRatio: "none",
    style: style
  }, restProps), /*#__PURE__*/react.createElement("path", {
    className: "".concat(prefixCls, "-line-trail"),
    d: pathString,
    strokeLinecap: strokeLinecap,
    stroke: trailColor,
    strokeWidth: trailWidth || strokeWidth,
    fillOpacity: "0"
  }), percentList.map(function (ptg, index) {
    var dashPercent = 1;

    switch (strokeLinecap) {
      case 'round':
        dashPercent = 1 - strokeWidth / 100;
        break;

      case 'square':
        dashPercent = 1 - strokeWidth / 2 / 100;
        break;

      default:
        dashPercent = 1;
        break;
    }

    var pathStyle = {
      strokeDasharray: "".concat(ptg * dashPercent, "px, 100px"),
      strokeDashoffset: "-".concat(stackPtg, "px"),
      transition: transition || 'stroke-dashoffset 0.3s ease 0s, stroke-dasharray .3s ease 0s, stroke 0.3s linear'
    };
    var color = strokeColorList[index] || strokeColorList[strokeColorList.length - 1];
    stackPtg += ptg;
    return /*#__PURE__*/react.createElement("path", {
      key: index,
      className: "".concat(prefixCls, "-line-path"),
      d: pathString,
      strokeLinecap: strokeLinecap,
      stroke: color,
      strokeWidth: strokeWidth,
      fillOpacity: "0",
      ref: paths[index],
      style: pathStyle
    });
  }));
};

Line_Line.defaultProps = defaultProps;
Line_Line.displayName = 'Line';
/* harmony default export */ var es_Line = (Line_Line);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(1002);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/canUseDom.js
var canUseDom = __webpack_require__(8924);
;// CONCATENATED MODULE: ./node_modules/rc-progress/es/hooks/useId.js



var uuid = 0;
/** Is client side and not jsdom */

var isBrowserClient =  true && (0,canUseDom/* default */.Z)();
/** Get unique id for accessibility usage */

function getUUID() {
  var retId; // Test never reach

  /* istanbul ignore if */

  if (isBrowserClient) {
    retId = uuid;
    uuid += 1;
  } else {
    retId = 'TEST_OR_SSR';
  }

  return retId;
}

/* harmony default export */ var useId = (function (id) {
  // Inner id for accessibility usage. Only work in client side
  var _React$useState = react.useState(),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      innerId = _React$useState2[0],
      setInnerId = _React$useState2[1];

  react.useEffect(function () {
    setInnerId("rc_progress_".concat(getUUID()));
  }, []);
  return id || innerId;
});
;// CONCATENATED MODULE: ./node_modules/rc-progress/es/Circle.js




var Circle_excluded = ["id", "prefixCls", "strokeWidth", "trailWidth", "gapDegree", "gapPosition", "trailColor", "strokeLinecap", "style", "className", "strokeColor", "percent"];





function stripPercentToNumber(percent) {
  return +percent.replace('%', '');
}

function toArray(value) {
  var mergedValue = value !== null && value !== void 0 ? value : [];
  return Array.isArray(mergedValue) ? mergedValue : [mergedValue];
}

function getPathStyles(offset, percent, strokeColor, strokeWidth) {
  var gapDegree = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var gapPosition = arguments.length > 5 ? arguments[5] : undefined;
  var radius = 50 - strokeWidth / 2;
  var beginPositionX = 0;
  var beginPositionY = -radius;
  var endPositionX = 0;
  var endPositionY = -2 * radius;

  switch (gapPosition) {
    case 'left':
      beginPositionX = -radius;
      beginPositionY = 0;
      endPositionX = 2 * radius;
      endPositionY = 0;
      break;

    case 'right':
      beginPositionX = radius;
      beginPositionY = 0;
      endPositionX = -2 * radius;
      endPositionY = 0;
      break;

    case 'bottom':
      beginPositionY = radius;
      endPositionY = 2 * radius;
      break;

    default:
  }

  var pathString = "M 50,50 m ".concat(beginPositionX, ",").concat(beginPositionY, "\n   a ").concat(radius, ",").concat(radius, " 0 1 1 ").concat(endPositionX, ",").concat(-endPositionY, "\n   a ").concat(radius, ",").concat(radius, " 0 1 1 ").concat(-endPositionX, ",").concat(endPositionY);
  var len = Math.PI * 2 * radius;
  var pathStyle = {
    stroke: typeof strokeColor === 'string' ? strokeColor : undefined,
    strokeDasharray: "".concat(percent / 100 * (len - gapDegree), "px ").concat(len, "px"),
    strokeDashoffset: "-".concat(gapDegree / 2 + offset / 100 * (len - gapDegree), "px"),
    transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s' // eslint-disable-line

  };
  return {
    pathString: pathString,
    pathStyle: pathStyle
  };
}

var Circle = function Circle(_ref) {
  var id = _ref.id,
      prefixCls = _ref.prefixCls,
      strokeWidth = _ref.strokeWidth,
      trailWidth = _ref.trailWidth,
      gapDegree = _ref.gapDegree,
      gapPosition = _ref.gapPosition,
      trailColor = _ref.trailColor,
      strokeLinecap = _ref.strokeLinecap,
      style = _ref.style,
      className = _ref.className,
      strokeColor = _ref.strokeColor,
      percent = _ref.percent,
      restProps = (0,objectWithoutProperties/* default */.Z)(_ref, Circle_excluded);

  var mergedId = useId(id);
  var gradientId = "".concat(mergedId, "-gradient");

  var _getPathStyles = getPathStyles(0, 100, trailColor, strokeWidth, gapDegree, gapPosition),
      pathString = _getPathStyles.pathString,
      pathStyle = _getPathStyles.pathStyle;

  var percentList = toArray(percent);
  var strokeColorList = toArray(strokeColor);
  var gradient = strokeColorList.find(function (color) {
    return color && (0,esm_typeof/* default */.Z)(color) === 'object';
  });

  var _useTransitionDuratio = useTransitionDuration(percentList),
      _useTransitionDuratio2 = (0,slicedToArray/* default */.Z)(_useTransitionDuratio, 1),
      paths = _useTransitionDuratio2[0];

  var getStokeList = function getStokeList() {
    var stackPtg = 0;
    return percentList.map(function (ptg, index) {
      var color = strokeColorList[index] || strokeColorList[strokeColorList.length - 1];
      var stroke = color && (0,esm_typeof/* default */.Z)(color) === 'object' ? "url(#".concat(gradientId, ")") : '';
      var pathStyles = getPathStyles(stackPtg, ptg, color, strokeWidth, gapDegree, gapPosition);
      stackPtg += ptg;
      return /*#__PURE__*/react.createElement("path", {
        key: index,
        className: "".concat(prefixCls, "-circle-path"),
        d: pathStyles.pathString,
        stroke: stroke,
        strokeLinecap: strokeLinecap,
        strokeWidth: strokeWidth,
        opacity: ptg === 0 ? 0 : 1,
        fillOpacity: "0",
        style: pathStyles.pathStyle,
        ref: paths[index]
      });
    });
  };

  return /*#__PURE__*/react.createElement("svg", (0,esm_extends/* default */.Z)({
    className: classnames_default()("".concat(prefixCls, "-circle"), className),
    viewBox: "0 0 100 100",
    style: style,
    id: id
  }, restProps), gradient && /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("linearGradient", {
    id: gradientId,
    x1: "100%",
    y1: "0%",
    x2: "0%",
    y2: "0%"
  }, Object.keys(gradient).sort(function (a, b) {
    return stripPercentToNumber(a) - stripPercentToNumber(b);
  }).map(function (key, index) {
    return /*#__PURE__*/react.createElement("stop", {
      key: index,
      offset: key,
      stopColor: gradient[key]
    });
  }))), /*#__PURE__*/react.createElement("path", {
    className: "".concat(prefixCls, "-circle-trail"),
    d: pathString,
    stroke: trailColor,
    strokeLinecap: strokeLinecap,
    strokeWidth: trailWidth || strokeWidth,
    fillOpacity: "0",
    style: pathStyle
  }), getStokeList().reverse());
};

Circle.defaultProps = defaultProps;
Circle.displayName = 'Circle';
/* harmony default export */ var es_Circle = (Circle);
;// CONCATENATED MODULE: ./node_modules/rc-progress/es/index.js



/* harmony default export */ var es = ({
  Line: es_Line,
  Circle: es_Circle
});
;// CONCATENATED MODULE: ./node_modules/antd/es/progress/Circle.js







function getPercentage(_ref) {
  var percent = _ref.percent,
      success = _ref.success,
      successPercent = _ref.successPercent;
  var realSuccessPercent = validProgress(getSuccessPercent({
    success: success,
    successPercent: successPercent
  }));
  return [realSuccessPercent, validProgress(validProgress(percent) - realSuccessPercent)];
}

function getStrokeColor(_ref2) {
  var _ref2$success = _ref2.success,
      success = _ref2$success === void 0 ? {} : _ref2$success,
      strokeColor = _ref2.strokeColor;
  var successColor = success.strokeColor;
  return [successColor || index_esm/* presetPrimaryColors.green */.ez.green, strokeColor || null];
}

var Circle_Circle = function Circle(props) {
  var prefixCls = props.prefixCls,
      width = props.width,
      strokeWidth = props.strokeWidth,
      trailColor = props.trailColor,
      strokeLinecap = props.strokeLinecap,
      gapPosition = props.gapPosition,
      gapDegree = props.gapDegree,
      type = props.type,
      children = props.children,
      success = props.success;
  var circleSize = width || 120;
  var circleStyle = {
    width: circleSize,
    height: circleSize,
    fontSize: circleSize * 0.15 + 6
  };
  var circleWidth = strokeWidth || 6;
  var gapPos = gapPosition || type === 'dashboard' && 'bottom' || 'top';

  var getGapDegree = function getGapDegree() {
    // Support gapDeg = 0 when type = 'dashboard'
    if (gapDegree || gapDegree === 0) {
      return gapDegree;
    }

    if (type === 'dashboard') {
      return 75;
    }

    return undefined;
  }; // using className to style stroke color


  var isGradient = Object.prototype.toString.call(props.strokeColor) === '[object Object]';
  var strokeColor = getStrokeColor({
    success: success,
    strokeColor: props.strokeColor
  });
  var wrapperClassName = classnames_default()("".concat(prefixCls, "-inner"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-circle-gradient"), isGradient));
  return /*#__PURE__*/react.createElement("div", {
    className: wrapperClassName,
    style: circleStyle
  }, /*#__PURE__*/react.createElement(es_Circle, {
    percent: getPercentage(props),
    strokeWidth: circleWidth,
    trailWidth: circleWidth,
    strokeColor: strokeColor,
    strokeLinecap: strokeLinecap,
    trailColor: trailColor,
    prefixCls: prefixCls,
    gapDegree: getGapDegree(),
    gapPosition: gapPos
  }), children);
};

/* harmony default export */ var progress_Circle = (Circle_Circle);
;// CONCATENATED MODULE: ./node_modules/antd/es/progress/Steps.js




var Steps = function Steps(props) {
  var size = props.size,
      steps = props.steps,
      _props$percent = props.percent,
      percent = _props$percent === void 0 ? 0 : _props$percent,
      _props$strokeWidth = props.strokeWidth,
      strokeWidth = _props$strokeWidth === void 0 ? 8 : _props$strokeWidth,
      strokeColor = props.strokeColor,
      trailColor = props.trailColor,
      prefixCls = props.prefixCls,
      children = props.children;
  var current = Math.round(steps * (percent / 100));
  var stepWidth = size === 'small' ? 2 : 14;
  var styledSteps = [];

  for (var i = 0; i < steps; i += 1) {
    styledSteps.push( /*#__PURE__*/react.createElement("div", {
      key: i,
      className: classnames_default()("".concat(prefixCls, "-steps-item"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-steps-item-active"), i <= current - 1)),
      style: {
        backgroundColor: i <= current - 1 ? strokeColor : trailColor,
        width: stepWidth,
        height: strokeWidth
      }
    }));
  }

  return /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-steps-outer")
  }, styledSteps, children);
};

/* harmony default export */ var progress_Steps = (Steps);
;// CONCATENATED MODULE: ./node_modules/antd/es/progress/progress.js








var progress_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};















var ProgressTypes = (0,type/* tuple */.b)('line', 'circle', 'dashboard');
var ProgressStatuses = (0,type/* tuple */.b)('normal', 'exception', 'active', 'success');

var Progress = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(Progress, _React$Component);

  var _super = (0,createSuper/* default */.Z)(Progress);

  function Progress() {
    var _this;

    (0,classCallCheck/* default */.Z)(this, Progress);

    _this = _super.apply(this, arguments);

    _this.renderProgress = function (_ref) {
      var _classNames;

      var getPrefixCls = _ref.getPrefixCls,
          direction = _ref.direction;

      var _assertThisInitialize = (0,assertThisInitialized/* default */.Z)(_this),
          props = _assertThisInitialize.props;

      var customizePrefixCls = props.prefixCls,
          className = props.className,
          size = props.size,
          type = props.type,
          steps = props.steps,
          showInfo = props.showInfo,
          strokeColor = props.strokeColor,
          restProps = progress_rest(props, ["prefixCls", "className", "size", "type", "steps", "showInfo", "strokeColor"]);

      var prefixCls = getPrefixCls('progress', customizePrefixCls);

      var progressStatus = _this.getProgressStatus();

      var progressInfo = _this.renderProcessInfo(prefixCls, progressStatus);

      (0,devWarning/* default */.Z)(!('successPercent' in props), 'Progress', '`successPercent` is deprecated. Please use `success.percent` instead.');
      var progress; // Render progress shape

      if (type === 'line') {
        progress = steps ? /*#__PURE__*/react.createElement(progress_Steps, (0,esm_extends/* default */.Z)({}, _this.props, {
          strokeColor: typeof strokeColor === 'string' ? strokeColor : undefined,
          prefixCls: prefixCls,
          steps: steps
        }), progressInfo) : /*#__PURE__*/react.createElement(progress_Line, (0,esm_extends/* default */.Z)({}, _this.props, {
          prefixCls: prefixCls,
          direction: direction
        }), progressInfo);
      } else if (type === 'circle' || type === 'dashboard') {
        progress = /*#__PURE__*/react.createElement(progress_Circle, (0,esm_extends/* default */.Z)({}, _this.props, {
          prefixCls: prefixCls,
          progressStatus: progressStatus
        }), progressInfo);
      }

      var classString = classnames_default()(prefixCls, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-").concat(type === 'dashboard' && 'circle' || steps && 'steps' || type), true), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-status-").concat(progressStatus), true), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-show-info"), showInfo), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-").concat(size), size), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
      return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({}, (0,omit/* default */.Z)(restProps, ['status', 'format', 'trailColor', 'strokeWidth', 'width', 'gapDegree', 'gapPosition', 'strokeLinecap', 'percent', 'success', 'successPercent']), {
        className: classString
      }), progress);
    };

    return _this;
  }

  (0,createClass/* default */.Z)(Progress, [{
    key: "getPercentNumber",
    value: function getPercentNumber() {
      var _this$props$percent = this.props.percent,
          percent = _this$props$percent === void 0 ? 0 : _this$props$percent;
      var successPercent = getSuccessPercent(this.props);
      return parseInt(successPercent !== undefined ? successPercent.toString() : percent.toString(), 10);
    }
  }, {
    key: "getProgressStatus",
    value: function getProgressStatus() {
      var status = this.props.status;

      if (ProgressStatuses.indexOf(status) < 0 && this.getPercentNumber() >= 100) {
        return 'success';
      }

      return status || 'normal';
    }
  }, {
    key: "renderProcessInfo",
    value: function renderProcessInfo(prefixCls, progressStatus) {
      var _this$props = this.props,
          showInfo = _this$props.showInfo,
          format = _this$props.format,
          type = _this$props.type,
          percent = _this$props.percent;
      var successPercent = getSuccessPercent(this.props);

      if (!showInfo) {
        return null;
      }

      var text;

      var textFormatter = format || function (percentNumber) {
        return "".concat(percentNumber, "%");
      };

      var isLineType = type === 'line';

      if (format || progressStatus !== 'exception' && progressStatus !== 'success') {
        text = textFormatter(validProgress(percent), validProgress(successPercent));
      } else if (progressStatus === 'exception') {
        text = isLineType ? /*#__PURE__*/react.createElement(CloseCircleFilled/* default */.Z, null) : /*#__PURE__*/react.createElement(CloseOutlined/* default */.Z, null);
      } else if (progressStatus === 'success') {
        text = isLineType ? /*#__PURE__*/react.createElement(CheckCircleFilled/* default */.Z, null) : /*#__PURE__*/react.createElement(CheckOutlined/* default */.Z, null);
      }

      return /*#__PURE__*/react.createElement("span", {
        className: "".concat(prefixCls, "-text"),
        title: typeof text === 'string' ? text : undefined
      }, text);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement(context/* ConfigConsumer */.C, null, this.renderProgress);
    }
  }]);

  return Progress;
}(react.Component);


Progress.defaultProps = {
  type: 'line',
  percent: 0,
  showInfo: true,
  // null for different theme definition
  trailColor: null,
  size: 'default',
  gapDegree: undefined,
  strokeLinecap: 'round'
};
;// CONCATENATED MODULE: ./node_modules/antd/es/progress/index.js

/* harmony default export */ var progress = (Progress);

/***/ }),

/***/ 2078:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/antd/es/style/default.less
var style_default = __webpack_require__(5608);
;// CONCATENATED MODULE: ./node_modules/antd/es/progress/style/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/antd/es/progress/style/index.js



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

/***/ 8096:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_187__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_187__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_187__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_187__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_187__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_187__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __nested_webpack_require_1468__) {

	'use strict';
	
	var attach = __nested_webpack_require_1468__(1);
	var ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
	
	module.exports = attach(ENVIRONMENT_IS_WORKER ? self : window);

/***/ }),
/* 1 */
/***/ (function(module, exports, __nested_webpack_require_1732__) {

	'use strict';
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/*
	* Configuration for React-Native's package system
	* @providesModule whatwg-fetch
	*/
	
	var interceptors = [];
	
	function interceptor(fetch) {
	  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    args[_key - 1] = arguments[_key];
	  }
	
	  var reversedInterceptors = interceptors.reduce(function (array, interceptor) {
	    return [interceptor].concat(array);
	  }, []);
	  var promise = Promise.resolve(args);
	
	  // Register request interceptors
	  reversedInterceptors.forEach(function (_ref) {
	    var request = _ref.request,
	        requestError = _ref.requestError;
	
	    if (request || requestError) {
	      promise = promise.then(function (args) {
	        return request.apply(undefined, _toConsumableArray(args));
	      }, requestError);
	    }
	  });
	
	  // Register fetch call
	  promise = promise.then(function (args) {
	    var request = new (Function.prototype.bind.apply(Request, [null].concat(_toConsumableArray(args))))();
	    return fetch(request).then(function (response) {
	      response.request = request;
	      return response;
	    }).catch(function (error) {
	      error.request = request;
	      return Promise.reject(error);
	    });
	  });
	
	  // Register response interceptors
	  reversedInterceptors.forEach(function (_ref2) {
	    var response = _ref2.response,
	        responseError = _ref2.responseError;
	
	    if (response || responseError) {
	      promise = promise.then(response, responseError);
	    }
	  });
	
	  return promise;
	}
	
	module.exports = function attach(env) {
	  // Make sure fetch is available in the given environment
	  if (!env.fetch) {
	    try {
	      __nested_webpack_require_1732__(2);
	    } catch (err) {
	      throw Error('No fetch available. Unable to register fetch-intercept');
	    }
	  }
	  env.fetch = function (fetch) {
	    return function () {
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }
	
	      return interceptor.apply(undefined, [fetch].concat(args));
	    };
	  }(env.fetch);
	
	  return {
	    register: function register(interceptor) {
	      interceptors.push(interceptor);
	      return function () {
	        var index = interceptors.indexOf(interceptor);
	        if (index >= 0) {
	          interceptors.splice(index, 1);
	        }
	      };
	    },
	    clear: function clear() {
	      interceptors = [];
	    }
	  };
	};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __webpack_require__(7147);

/***/ })
/******/ ]);
//# sourceMappingURL=browser.js.map

/***/ }),

/***/ 4301:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(7147);
module.exports = self.fetch.bind(self);


/***/ }),

/***/ 2827:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ demo; }
});

// EXTERNAL MODULE: ./node_modules/antd/es/tabs/style/index.js + 1 modules
var style = __webpack_require__(2293);
// EXTERNAL MODULE: ./node_modules/antd/es/tabs/index.js + 17 modules
var tabs = __webpack_require__(7428);
// EXTERNAL MODULE: ./node_modules/antd/es/style/default.less
var style_default = __webpack_require__(5608);
;// CONCATENATED MODULE: ./node_modules/antd/es/cascader/style/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/antd/es/empty/style/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/antd/es/empty/style/index.js


;// CONCATENATED MODULE: ./node_modules/antd/es/select/style/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/antd/es/select/style/index.js

 // style dependencies


;// CONCATENATED MODULE: ./node_modules/antd/es/cascader/style/index.js

 // style dependencies



// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(1002);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(3433);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(9439);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(4925);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/canUseDom.js
var canUseDom = __webpack_require__(8924);
;// CONCATENATED MODULE: ./node_modules/rc-select/es/hooks/useId.js



var uuid = 0;
/** Is client side and not jsdom */

var isBrowserClient =  true && (0,canUseDom/* default */.Z)();
/** Get unique id for accessibility usage */

function getUUID() {
  var retId; // Test never reach

  /* istanbul ignore if */

  if (isBrowserClient) {
    retId = uuid;
    uuid += 1;
  } else {
    retId = 'TEST_OR_SSR';
  }

  return retId;
}
function useId(id) {
  // Inner id for accessibility usage. Only work in client side
  var _React$useState = react.useState(),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      innerId = _React$useState2[0],
      setInnerId = _React$useState2[1];

  react.useEffect(function () {
    setInnerId("rc_select_".concat(getUUID()));
  }, []);
  return id || innerId;
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/warning.js
var es_warning = __webpack_require__(334);
;// CONCATENATED MODULE: ./node_modules/rc-tree/es/utils/conductUtil.js


function removeFromCheckedKeys(halfCheckedKeys, checkedKeys) {
  var filteredKeys = new Set();
  halfCheckedKeys.forEach(function (key) {
    if (!checkedKeys.has(key)) {
      filteredKeys.add(key);
    }
  });
  return filteredKeys;
}

function isCheckDisabled(node) {
  var _ref = node || {},
      disabled = _ref.disabled,
      disableCheckbox = _ref.disableCheckbox,
      checkable = _ref.checkable;

  return !!(disabled || disableCheckbox) || checkable === false;
} // Fill miss keys

function fillConductCheck(keys, levelEntities, maxLevel, syntheticGetCheckDisabled) {
  var checkedKeys = new Set(keys);
  var halfCheckedKeys = new Set(); // Add checked keys top to bottom

  for (var level = 0; level <= maxLevel; level += 1) {
    var entities = levelEntities.get(level) || new Set();
    entities.forEach(function (entity) {
      var key = entity.key,
          node = entity.node,
          _entity$children = entity.children,
          children = _entity$children === void 0 ? [] : _entity$children;

      if (checkedKeys.has(key) && !syntheticGetCheckDisabled(node)) {
        children.filter(function (childEntity) {
          return !syntheticGetCheckDisabled(childEntity.node);
        }).forEach(function (childEntity) {
          checkedKeys.add(childEntity.key);
        });
      }
    });
  } // Add checked keys from bottom to top


  var visitedKeys = new Set();

  for (var _level = maxLevel; _level >= 0; _level -= 1) {
    var _entities = levelEntities.get(_level) || new Set();

    _entities.forEach(function (entity) {
      var parent = entity.parent,
          node = entity.node; // Skip if no need to check

      if (syntheticGetCheckDisabled(node) || !entity.parent || visitedKeys.has(entity.parent.key)) {
        return;
      } // Skip if parent is disabled


      if (syntheticGetCheckDisabled(entity.parent.node)) {
        visitedKeys.add(parent.key);
        return;
      }

      var allChecked = true;
      var partialChecked = false;
      (parent.children || []).filter(function (childEntity) {
        return !syntheticGetCheckDisabled(childEntity.node);
      }).forEach(function (_ref2) {
        var key = _ref2.key;
        var checked = checkedKeys.has(key);

        if (allChecked && !checked) {
          allChecked = false;
        }

        if (!partialChecked && (checked || halfCheckedKeys.has(key))) {
          partialChecked = true;
        }
      });

      if (allChecked) {
        checkedKeys.add(parent.key);
      }

      if (partialChecked) {
        halfCheckedKeys.add(parent.key);
      }

      visitedKeys.add(parent.key);
    });
  }

  return {
    checkedKeys: Array.from(checkedKeys),
    halfCheckedKeys: Array.from(removeFromCheckedKeys(halfCheckedKeys, checkedKeys))
  };
} // Remove useless key


function cleanConductCheck(keys, halfKeys, levelEntities, maxLevel, syntheticGetCheckDisabled) {
  var checkedKeys = new Set(keys);
  var halfCheckedKeys = new Set(halfKeys); // Remove checked keys from top to bottom

  for (var level = 0; level <= maxLevel; level += 1) {
    var entities = levelEntities.get(level) || new Set();
    entities.forEach(function (entity) {
      var key = entity.key,
          node = entity.node,
          _entity$children2 = entity.children,
          children = _entity$children2 === void 0 ? [] : _entity$children2;

      if (!checkedKeys.has(key) && !halfCheckedKeys.has(key) && !syntheticGetCheckDisabled(node)) {
        children.filter(function (childEntity) {
          return !syntheticGetCheckDisabled(childEntity.node);
        }).forEach(function (childEntity) {
          checkedKeys.delete(childEntity.key);
        });
      }
    });
  } // Remove checked keys form bottom to top


  halfCheckedKeys = new Set();
  var visitedKeys = new Set();

  for (var _level2 = maxLevel; _level2 >= 0; _level2 -= 1) {
    var _entities2 = levelEntities.get(_level2) || new Set();

    _entities2.forEach(function (entity) {
      var parent = entity.parent,
          node = entity.node; // Skip if no need to check

      if (syntheticGetCheckDisabled(node) || !entity.parent || visitedKeys.has(entity.parent.key)) {
        return;
      } // Skip if parent is disabled


      if (syntheticGetCheckDisabled(entity.parent.node)) {
        visitedKeys.add(parent.key);
        return;
      }

      var allChecked = true;
      var partialChecked = false;
      (parent.children || []).filter(function (childEntity) {
        return !syntheticGetCheckDisabled(childEntity.node);
      }).forEach(function (_ref3) {
        var key = _ref3.key;
        var checked = checkedKeys.has(key);

        if (allChecked && !checked) {
          allChecked = false;
        }

        if (!partialChecked && (checked || halfCheckedKeys.has(key))) {
          partialChecked = true;
        }
      });

      if (!allChecked) {
        checkedKeys.delete(parent.key);
      }

      if (partialChecked) {
        halfCheckedKeys.add(parent.key);
      }

      visitedKeys.add(parent.key);
    });
  }

  return {
    checkedKeys: Array.from(checkedKeys),
    halfCheckedKeys: Array.from(removeFromCheckedKeys(halfCheckedKeys, checkedKeys))
  };
}
/**
 * Conduct with keys.
 * @param keyList current key list
 * @param keyEntities key - dataEntity map
 * @param mode `fill` to fill missing key, `clean` to remove useless key
 */


function conductCheck(keyList, checked, keyEntities, getCheckDisabled) {
  var warningMissKeys = [];
  var syntheticGetCheckDisabled;

  if (getCheckDisabled) {
    syntheticGetCheckDisabled = getCheckDisabled;
  } else {
    syntheticGetCheckDisabled = isCheckDisabled;
  } // We only handle exist keys


  var keys = new Set(keyList.filter(function (key) {
    var hasEntity = !!keyEntities[key];

    if (!hasEntity) {
      warningMissKeys.push(key);
    }

    return hasEntity;
  }));
  var levelEntities = new Map();
  var maxLevel = 0; // Convert entities by level for calculation

  Object.keys(keyEntities).forEach(function (key) {
    var entity = keyEntities[key];
    var level = entity.level;
    var levelSet = levelEntities.get(level);

    if (!levelSet) {
      levelSet = new Set();
      levelEntities.set(level, levelSet);
    }

    levelSet.add(entity);
    maxLevel = Math.max(maxLevel, level);
  });
  (0,es_warning/* default */.ZP)(!warningMissKeys.length, "Tree missing follow keys: ".concat(warningMissKeys.slice(0, 100).map(function (key) {
    return "'".concat(key, "'");
  }).join(', ')));
  var result;

  if (checked === true) {
    result = fillConductCheck(keys, levelEntities, maxLevel, syntheticGetCheckDisabled);
  } else {
    result = cleanConductCheck(keys, checked.halfCheckedKeys, levelEntities, maxLevel, syntheticGetCheckDisabled);
  }

  return result;
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useMergedState.js
var useMergedState = __webpack_require__(1770);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/rc-util/es/KeyCode.js
var KeyCode = __webpack_require__(617);
// EXTERNAL MODULE: ./node_modules/rc-util/es/isMobile.js
var isMobile = __webpack_require__(1131);
// EXTERNAL MODULE: ./node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(2550);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/hooks/useLayoutEffect.js


/**
 * Wrap `React.useLayoutEffect` which will not throw warning message in test env
 */

var useLayoutEffect =  true && (0,canUseDom/* default */.Z)() ? react.useLayoutEffect : react.useEffect;
/* harmony default export */ var hooks_useLayoutEffect = (useLayoutEffect);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toArray.js
var esm_toArray = __webpack_require__(4506);
;// CONCATENATED MODULE: ./node_modules/rc-select/es/utils/valueUtil.js





function getKey(data, index) {
  var key = data.key;
  var value;

  if ('value' in data) {
    value = data.value;
  }

  if (key !== null && key !== undefined) {
    return key;
  }

  if (value !== undefined) {
    return value;
  }

  return "rc-index-key-".concat(index);
}

function fillFieldNames(fieldNames, childrenAsData) {
  var _ref = fieldNames || {},
      label = _ref.label,
      value = _ref.value,
      options = _ref.options;

  return {
    label: label || (childrenAsData ? 'children' : 'label'),
    value: value || 'value',
    options: options || 'options'
  };
}
/**
 * Flat options into flatten list.
 * We use `optionOnly` here is aim to avoid user use nested option group.
 * Here is simply set `key` to the index if not provided.
 */

function flattenOptions(options) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      fieldNames = _ref2.fieldNames,
      childrenAsData = _ref2.childrenAsData;

  var flattenList = [];

  var _fillFieldNames = fillFieldNames(fieldNames, false),
      fieldLabel = _fillFieldNames.label,
      fieldValue = _fillFieldNames.value,
      fieldOptions = _fillFieldNames.options;

  function dig(list, isGroupOption) {
    list.forEach(function (data) {
      var label = data[fieldLabel];

      if (isGroupOption || !(fieldOptions in data)) {
        var value = data[fieldValue]; // Option

        flattenList.push({
          key: getKey(data, flattenList.length),
          groupOption: isGroupOption,
          data: data,
          label: label,
          value: value
        });
      } else {
        var grpLabel = label;

        if (grpLabel === undefined && childrenAsData) {
          grpLabel = data.label;
        } // Option Group


        flattenList.push({
          key: getKey(data, flattenList.length),
          group: true,
          data: data,
          label: grpLabel
        });
        dig(data[fieldOptions], true);
      }
    });
  }

  dig(options, false);
  return flattenList;
}
/**
 * Inject `props` into `option` for legacy usage
 */

function injectPropsWithOption(option) {
  var newOption = (0,objectSpread2/* default */.Z)({}, option);

  if (!('props' in newOption)) {
    Object.defineProperty(newOption, 'props', {
      get: function get() {
        (0,es_warning/* default */.ZP)(false, 'Return type is option instead of Option instance. Please read value directly instead of reading from `props`.');
        return newOption;
      }
    });
  }

  return newOption;
}
function getSeparatedContent(text, tokens) {
  if (!tokens || !tokens.length) {
    return null;
  }

  var match = false;

  function separate(str, _ref3) {
    var _ref4 = (0,esm_toArray/* default */.Z)(_ref3),
        token = _ref4[0],
        restTokens = _ref4.slice(1);

    if (!token) {
      return [str];
    }

    var list = str.split(token);
    match = match || list.length > 1;
    return list.reduce(function (prevList, unitStr) {
      return [].concat((0,toConsumableArray/* default */.Z)(prevList), (0,toConsumableArray/* default */.Z)(separate(unitStr, restTokens)));
    }, []).filter(function (unit) {
      return unit;
    });
  }

  var list = separate(text, tokens);
  return match ? list : null;
}
// EXTERNAL MODULE: ./node_modules/rc-trigger/es/index.js + 16 modules
var es = __webpack_require__(3084);
;// CONCATENATED MODULE: ./node_modules/rc-select/es/SelectTrigger.js




var _excluded = ["prefixCls", "disabled", "visible", "children", "popupElement", "containerWidth", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "direction", "placement", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "getPopupContainer", "empty", "getTriggerDOMNode", "onPopupVisibleChange", "onPopupMouseEnter"];




var getBuiltInPlacements = function getBuiltInPlacements(dropdownMatchSelectWidth) {
  // Enable horizontal overflow auto-adjustment when a custom dropdown width is provided
  var adjustX = dropdownMatchSelectWidth === true ? 0 : 1;
  return {
    bottomLeft: {
      points: ['tl', 'bl'],
      offset: [0, 4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      }
    },
    bottomRight: {
      points: ['tr', 'br'],
      offset: [0, 4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      }
    },
    topLeft: {
      points: ['bl', 'tl'],
      offset: [0, -4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      }
    },
    topRight: {
      points: ['br', 'tr'],
      offset: [0, -4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      }
    }
  };
};

var SelectTrigger = function SelectTrigger(props, ref) {
  var prefixCls = props.prefixCls,
      disabled = props.disabled,
      visible = props.visible,
      children = props.children,
      popupElement = props.popupElement,
      containerWidth = props.containerWidth,
      animation = props.animation,
      transitionName = props.transitionName,
      dropdownStyle = props.dropdownStyle,
      dropdownClassName = props.dropdownClassName,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'ltr' : _props$direction,
      placement = props.placement,
      dropdownMatchSelectWidth = props.dropdownMatchSelectWidth,
      dropdownRender = props.dropdownRender,
      dropdownAlign = props.dropdownAlign,
      getPopupContainer = props.getPopupContainer,
      empty = props.empty,
      getTriggerDOMNode = props.getTriggerDOMNode,
      onPopupVisibleChange = props.onPopupVisibleChange,
      onPopupMouseEnter = props.onPopupMouseEnter,
      restProps = (0,objectWithoutProperties/* default */.Z)(props, _excluded);

  var dropdownPrefixCls = "".concat(prefixCls, "-dropdown");
  var popupNode = popupElement;

  if (dropdownRender) {
    popupNode = dropdownRender(popupElement);
  }

  var builtInPlacements = react.useMemo(function () {
    return getBuiltInPlacements(dropdownMatchSelectWidth);
  }, [dropdownMatchSelectWidth]); // ===================== Motion ======================

  var mergedTransitionName = animation ? "".concat(dropdownPrefixCls, "-").concat(animation) : transitionName; // ======================= Ref =======================

  var popupRef = react.useRef(null);
  react.useImperativeHandle(ref, function () {
    return {
      getPopupElement: function getPopupElement() {
        return popupRef.current;
      }
    };
  });

  var popupStyle = (0,objectSpread2/* default */.Z)({
    minWidth: containerWidth
  }, dropdownStyle);

  if (typeof dropdownMatchSelectWidth === 'number') {
    popupStyle.width = dropdownMatchSelectWidth;
  } else if (dropdownMatchSelectWidth) {
    popupStyle.width = containerWidth;
  }

  return /*#__PURE__*/react.createElement(es/* default */.Z, (0,esm_extends/* default */.Z)({}, restProps, {
    showAction: onPopupVisibleChange ? ['click'] : [],
    hideAction: onPopupVisibleChange ? ['click'] : [],
    popupPlacement: placement || (direction === 'rtl' ? 'bottomRight' : 'bottomLeft'),
    builtinPlacements: builtInPlacements,
    prefixCls: dropdownPrefixCls,
    popupTransitionName: mergedTransitionName,
    popup: /*#__PURE__*/react.createElement("div", {
      ref: popupRef,
      onMouseEnter: onPopupMouseEnter
    }, popupNode),
    popupAlign: dropdownAlign,
    popupVisible: visible,
    getPopupContainer: getPopupContainer,
    popupClassName: classnames_default()(dropdownClassName, (0,defineProperty/* default */.Z)({}, "".concat(dropdownPrefixCls, "-empty"), empty)),
    popupStyle: popupStyle,
    getTriggerDOMNode: getTriggerDOMNode,
    onPopupVisibleChange: onPopupVisibleChange
  }), children);
};

var RefSelectTrigger = /*#__PURE__*/react.forwardRef(SelectTrigger);
RefSelectTrigger.displayName = 'SelectTrigger';
/* harmony default export */ var es_SelectTrigger = (RefSelectTrigger);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/pickAttrs.js

var attributes = "accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap";
var eventsName = "onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError";
var propList = "".concat(attributes, " ").concat(eventsName).split(/[\s\n]+/);
/* eslint-enable max-len */

var ariaPrefix = 'aria-';
var dataPrefix = 'data-';

function match(key, prefix) {
  return key.indexOf(prefix) === 0;
}
/**
 * Picker props from exist props with filter
 * @param props Passed props
 * @param ariaOnly boolean | { aria?: boolean; data?: boolean; attr?: boolean; } filter config
 */


function pickAttrs(props) {
  var ariaOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var mergedConfig;

  if (ariaOnly === false) {
    mergedConfig = {
      aria: true,
      data: true,
      attr: true
    };
  } else if (ariaOnly === true) {
    mergedConfig = {
      aria: true
    };
  } else {
    mergedConfig = (0,objectSpread2/* default */.Z)({}, ariaOnly);
  }

  var attrs = {};
  Object.keys(props).forEach(function (key) {
    if ( // Aria
    mergedConfig.aria && (key === 'role' || match(key, ariaPrefix)) || mergedConfig.data && match(key, dataPrefix) || mergedConfig.attr && propList.includes(key)) {
      attrs[key] = props[key];
    }
  });
  return attrs;
}
// EXTERNAL MODULE: ./node_modules/rc-overflow/es/index.js + 4 modules
var rc_overflow_es = __webpack_require__(9214);
;// CONCATENATED MODULE: ./node_modules/rc-select/es/TransBtn.js



var TransBtn = function TransBtn(_ref) {
  var className = _ref.className,
      customizeIcon = _ref.customizeIcon,
      customizeIconProps = _ref.customizeIconProps,
      _onMouseDown = _ref.onMouseDown,
      onClick = _ref.onClick,
      children = _ref.children;
  var icon;

  if (typeof customizeIcon === 'function') {
    icon = customizeIcon(customizeIconProps);
  } else {
    icon = customizeIcon;
  }

  return /*#__PURE__*/react.createElement("span", {
    className: className,
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();

      if (_onMouseDown) {
        _onMouseDown(event);
      }
    },
    style: {
      userSelect: 'none',
      WebkitUserSelect: 'none'
    },
    unselectable: "on",
    onClick: onClick,
    "aria-hidden": true
  }, icon !== undefined ? icon : /*#__PURE__*/react.createElement("span", {
    className: classnames_default()(className.split(/\s+/).map(function (cls) {
      return "".concat(cls, "-icon");
    }))
  }, children));
};

/* harmony default export */ var es_TransBtn = (TransBtn);
;// CONCATENATED MODULE: ./node_modules/rc-select/es/Selector/Input.js





var Input = function Input(_ref, ref) {
  var _inputNode2, _inputNode2$props;

  var prefixCls = _ref.prefixCls,
      id = _ref.id,
      inputElement = _ref.inputElement,
      disabled = _ref.disabled,
      tabIndex = _ref.tabIndex,
      autoFocus = _ref.autoFocus,
      autoComplete = _ref.autoComplete,
      editable = _ref.editable,
      activeDescendantId = _ref.activeDescendantId,
      value = _ref.value,
      maxLength = _ref.maxLength,
      _onKeyDown = _ref.onKeyDown,
      _onMouseDown = _ref.onMouseDown,
      _onChange = _ref.onChange,
      onPaste = _ref.onPaste,
      _onCompositionStart = _ref.onCompositionStart,
      _onCompositionEnd = _ref.onCompositionEnd,
      open = _ref.open,
      attrs = _ref.attrs;
  var inputNode = inputElement || /*#__PURE__*/react.createElement("input", null);
  var _inputNode = inputNode,
      originRef = _inputNode.ref,
      _inputNode$props = _inputNode.props,
      onOriginKeyDown = _inputNode$props.onKeyDown,
      onOriginChange = _inputNode$props.onChange,
      onOriginMouseDown = _inputNode$props.onMouseDown,
      onOriginCompositionStart = _inputNode$props.onCompositionStart,
      onOriginCompositionEnd = _inputNode$props.onCompositionEnd,
      style = _inputNode$props.style;
  inputNode = /*#__PURE__*/react.cloneElement(inputNode, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
    id: id,
    ref: (0,es_ref/* composeRef */.sQ)(ref, originRef),
    disabled: disabled,
    tabIndex: tabIndex,
    autoComplete: autoComplete || 'off',
    type: 'search',
    autoFocus: autoFocus,
    className: classnames_default()("".concat(prefixCls, "-selection-search-input"), (_inputNode2 = inputNode) === null || _inputNode2 === void 0 ? void 0 : (_inputNode2$props = _inputNode2.props) === null || _inputNode2$props === void 0 ? void 0 : _inputNode2$props.className),
    style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, style), {}, {
      opacity: editable ? null : 0
    }),
    role: 'combobox',
    'aria-expanded': open,
    'aria-haspopup': 'listbox',
    'aria-owns': "".concat(id, "_list"),
    'aria-autocomplete': 'list',
    'aria-controls': "".concat(id, "_list"),
    'aria-activedescendant': activeDescendantId
  }, attrs), {}, {
    value: editable ? value : '',
    maxLength: maxLength,
    readOnly: !editable,
    unselectable: !editable ? 'on' : null,
    onKeyDown: function onKeyDown(event) {
      _onKeyDown(event);

      if (onOriginKeyDown) {
        onOriginKeyDown(event);
      }
    },
    onMouseDown: function onMouseDown(event) {
      _onMouseDown(event);

      if (onOriginMouseDown) {
        onOriginMouseDown(event);
      }
    },
    onChange: function onChange(event) {
      _onChange(event);

      if (onOriginChange) {
        onOriginChange(event);
      }
    },
    onCompositionStart: function onCompositionStart(event) {
      _onCompositionStart(event);

      if (onOriginCompositionStart) {
        onOriginCompositionStart(event);
      }
    },
    onCompositionEnd: function onCompositionEnd(event) {
      _onCompositionEnd(event);

      if (onOriginCompositionEnd) {
        onOriginCompositionEnd(event);
      }
    },
    onPaste: onPaste
  }));
  return inputNode;
};

var RefInput = /*#__PURE__*/react.forwardRef(Input);
RefInput.displayName = 'Input';
/* harmony default export */ var Selector_Input = (RefInput);
;// CONCATENATED MODULE: ./node_modules/rc-select/es/utils/commonUtil.js
function commonUtil_toArray(value) {
  if (Array.isArray(value)) {
    return value;
  }

  return value !== undefined ? [value] : [];
}
var isClient = typeof window !== 'undefined' && window.document && window.document.documentElement;
/** Is client side and not jsdom */

var commonUtil_isBrowserClient =  true && isClient;
;// CONCATENATED MODULE: ./node_modules/rc-select/es/hooks/useLayoutEffect.js
/* eslint-disable react-hooks/rules-of-hooks */


/**
 * Wrap `React.useLayoutEffect` which will not throw warning message in test env
 */

function useLayoutEffect_useLayoutEffect(effect, deps) {
  // Never happen in test env
  if (commonUtil_isBrowserClient) {
    /* istanbul ignore next */
    react.useLayoutEffect(effect, deps);
  } else {
    react.useEffect(effect, deps);
  }
}
/* eslint-enable */
;// CONCATENATED MODULE: ./node_modules/rc-select/es/Selector/MultipleSelector.js











var onPreventMouseDown = function onPreventMouseDown(event) {
  event.preventDefault();
  event.stopPropagation();
};

var SelectSelector = function SelectSelector(props) {
  var id = props.id,
      prefixCls = props.prefixCls,
      values = props.values,
      open = props.open,
      searchValue = props.searchValue,
      inputRef = props.inputRef,
      placeholder = props.placeholder,
      disabled = props.disabled,
      mode = props.mode,
      showSearch = props.showSearch,
      autoFocus = props.autoFocus,
      autoComplete = props.autoComplete,
      activeDescendantId = props.activeDescendantId,
      tabIndex = props.tabIndex,
      removeIcon = props.removeIcon,
      maxTagCount = props.maxTagCount,
      maxTagTextLength = props.maxTagTextLength,
      _props$maxTagPlacehol = props.maxTagPlaceholder,
      maxTagPlaceholder = _props$maxTagPlacehol === void 0 ? function (omittedValues) {
    return "+ ".concat(omittedValues.length, " ...");
  } : _props$maxTagPlacehol,
      tagRender = props.tagRender,
      onToggleOpen = props.onToggleOpen,
      onRemove = props.onRemove,
      onInputChange = props.onInputChange,
      onInputPaste = props.onInputPaste,
      onInputKeyDown = props.onInputKeyDown,
      onInputMouseDown = props.onInputMouseDown,
      onInputCompositionStart = props.onInputCompositionStart,
      onInputCompositionEnd = props.onInputCompositionEnd;
  var measureRef = react.useRef(null);

  var _useState = (0,react.useState)(0),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      inputWidth = _useState2[0],
      setInputWidth = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      focused = _useState4[0],
      setFocused = _useState4[1];

  var selectionPrefixCls = "".concat(prefixCls, "-selection"); // ===================== Search ======================

  var inputValue = open || mode === 'tags' ? searchValue : '';
  var inputEditable = mode === 'tags' || showSearch && (open || focused); // We measure width and set to the input immediately

  useLayoutEffect_useLayoutEffect(function () {
    setInputWidth(measureRef.current.scrollWidth);
  }, [inputValue]); // ===================== Render ======================
  // >>> Render Selector Node. Includes Item & Rest

  function defaultRenderSelector(title, content, itemDisabled, closable, onClose) {
    return /*#__PURE__*/react.createElement("span", {
      className: classnames_default()("".concat(selectionPrefixCls, "-item"), (0,defineProperty/* default */.Z)({}, "".concat(selectionPrefixCls, "-item-disabled"), itemDisabled)),
      title: typeof title === 'string' || typeof title === 'number' ? title.toString() : undefined
    }, /*#__PURE__*/react.createElement("span", {
      className: "".concat(selectionPrefixCls, "-item-content")
    }, content), closable && /*#__PURE__*/react.createElement(es_TransBtn, {
      className: "".concat(selectionPrefixCls, "-item-remove"),
      onMouseDown: onPreventMouseDown,
      onClick: onClose,
      customizeIcon: removeIcon
    }, "\xD7"));
  }

  function customizeRenderSelector(value, content, itemDisabled, closable, onClose) {
    var onMouseDown = function onMouseDown(e) {
      onPreventMouseDown(e);
      onToggleOpen(!open);
    };

    return /*#__PURE__*/react.createElement("span", {
      onMouseDown: onMouseDown
    }, tagRender({
      label: content,
      value: value,
      disabled: itemDisabled,
      closable: closable,
      onClose: onClose
    }));
  }

  function renderItem(valueItem) {
    var itemDisabled = valueItem.disabled,
        label = valueItem.label,
        value = valueItem.value;
    var closable = !disabled && !itemDisabled;
    var displayLabel = label;

    if (typeof maxTagTextLength === 'number') {
      if (typeof label === 'string' || typeof label === 'number') {
        var strLabel = String(displayLabel);

        if (strLabel.length > maxTagTextLength) {
          displayLabel = "".concat(strLabel.slice(0, maxTagTextLength), "...");
        }
      }
    }

    var onClose = function onClose(event) {
      if (event) event.stopPropagation();
      onRemove(valueItem);
    };

    return typeof tagRender === 'function' ? customizeRenderSelector(value, displayLabel, itemDisabled, closable, onClose) : defaultRenderSelector(label, displayLabel, itemDisabled, closable, onClose);
  }

  function renderRest(omittedValues) {
    var content = typeof maxTagPlaceholder === 'function' ? maxTagPlaceholder(omittedValues) : maxTagPlaceholder;
    return defaultRenderSelector(content, content, false);
  } // >>> Input Node


  var inputNode = /*#__PURE__*/react.createElement("div", {
    className: "".concat(selectionPrefixCls, "-search"),
    style: {
      width: inputWidth
    },
    onFocus: function onFocus() {
      setFocused(true);
    },
    onBlur: function onBlur() {
      setFocused(false);
    }
  }, /*#__PURE__*/react.createElement(Selector_Input, {
    ref: inputRef,
    open: open,
    prefixCls: prefixCls,
    id: id,
    inputElement: null,
    disabled: disabled,
    autoFocus: autoFocus,
    autoComplete: autoComplete,
    editable: inputEditable,
    activeDescendantId: activeDescendantId,
    value: inputValue,
    onKeyDown: onInputKeyDown,
    onMouseDown: onInputMouseDown,
    onChange: onInputChange,
    onPaste: onInputPaste,
    onCompositionStart: onInputCompositionStart,
    onCompositionEnd: onInputCompositionEnd,
    tabIndex: tabIndex,
    attrs: pickAttrs(props, true)
  }), /*#__PURE__*/react.createElement("span", {
    ref: measureRef,
    className: "".concat(selectionPrefixCls, "-search-mirror"),
    "aria-hidden": true
  }, inputValue, "\xA0")); // >>> Selections

  var selectionNode = /*#__PURE__*/react.createElement(rc_overflow_es/* default */.Z, {
    prefixCls: "".concat(selectionPrefixCls, "-overflow"),
    data: values,
    renderItem: renderItem,
    renderRest: renderRest,
    suffix: inputNode,
    itemKey: "key",
    maxCount: maxTagCount
  });
  return /*#__PURE__*/react.createElement(react.Fragment, null, selectionNode, !values.length && !inputValue && /*#__PURE__*/react.createElement("span", {
    className: "".concat(selectionPrefixCls, "-placeholder")
  }, placeholder));
};

/* harmony default export */ var MultipleSelector = (SelectSelector);
;// CONCATENATED MODULE: ./node_modules/rc-select/es/Selector/SingleSelector.js





var SingleSelector = function SingleSelector(props) {
  var inputElement = props.inputElement,
      prefixCls = props.prefixCls,
      id = props.id,
      inputRef = props.inputRef,
      disabled = props.disabled,
      autoFocus = props.autoFocus,
      autoComplete = props.autoComplete,
      activeDescendantId = props.activeDescendantId,
      mode = props.mode,
      open = props.open,
      values = props.values,
      placeholder = props.placeholder,
      tabIndex = props.tabIndex,
      showSearch = props.showSearch,
      searchValue = props.searchValue,
      activeValue = props.activeValue,
      maxLength = props.maxLength,
      onInputKeyDown = props.onInputKeyDown,
      onInputMouseDown = props.onInputMouseDown,
      onInputChange = props.onInputChange,
      onInputPaste = props.onInputPaste,
      onInputCompositionStart = props.onInputCompositionStart,
      onInputCompositionEnd = props.onInputCompositionEnd;

  var _React$useState = react.useState(false),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      inputChanged = _React$useState2[0],
      setInputChanged = _React$useState2[1];

  var combobox = mode === 'combobox';
  var inputEditable = combobox || showSearch;
  var item = values[0];
  var inputValue = searchValue || '';

  if (combobox && activeValue && !inputChanged) {
    inputValue = activeValue;
  }

  react.useEffect(function () {
    if (combobox) {
      setInputChanged(false);
    }
  }, [combobox, activeValue]); // Not show text when closed expect combobox mode

  var hasTextInput = mode !== 'combobox' && !open && !showSearch ? false : !!inputValue;
  var title = item && (typeof item.label === 'string' || typeof item.label === 'number') ? item.label.toString() : undefined;

  var renderPlaceholder = function renderPlaceholder() {
    if (item) {
      return null;
    }

    var hiddenStyle = hasTextInput ? {
      visibility: 'hidden'
    } : undefined;
    return /*#__PURE__*/react.createElement("span", {
      className: "".concat(prefixCls, "-selection-placeholder"),
      style: hiddenStyle
    }, placeholder);
  };

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("span", {
    className: "".concat(prefixCls, "-selection-search")
  }, /*#__PURE__*/react.createElement(Selector_Input, {
    ref: inputRef,
    prefixCls: prefixCls,
    id: id,
    open: open,
    inputElement: inputElement,
    disabled: disabled,
    autoFocus: autoFocus,
    autoComplete: autoComplete,
    editable: inputEditable,
    activeDescendantId: activeDescendantId,
    value: inputValue,
    onKeyDown: onInputKeyDown,
    onMouseDown: onInputMouseDown,
    onChange: function onChange(e) {
      setInputChanged(true);
      onInputChange(e);
    },
    onPaste: onInputPaste,
    onCompositionStart: onInputCompositionStart,
    onCompositionEnd: onInputCompositionEnd,
    tabIndex: tabIndex,
    attrs: pickAttrs(props, true),
    maxLength: combobox ? maxLength : undefined
  })), !combobox && item && !hasTextInput && /*#__PURE__*/react.createElement("span", {
    className: "".concat(prefixCls, "-selection-item"),
    title: title
  }, item.label), renderPlaceholder());
};

/* harmony default export */ var Selector_SingleSelector = (SingleSelector);
;// CONCATENATED MODULE: ./node_modules/rc-select/es/hooks/useLock.js

/**
 * Locker return cached mark.
 * If set to `true`, will return `true` in a short time even if set `false`.
 * If set to `false` and then set to `true`, will change to `true`.
 * And after time duration, it will back to `null` automatically.
 */

function useLock() {
  var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 250;
  var lockRef = react.useRef(null);
  var timeoutRef = react.useRef(null); // Clean up

  react.useEffect(function () {
    return function () {
      window.clearTimeout(timeoutRef.current);
    };
  }, []);

  function doLock(locked) {
    if (locked || lockRef.current === null) {
      lockRef.current = locked;
    }

    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(function () {
      lockRef.current = null;
    }, duration);
  }

  return [function () {
    return lockRef.current;
  }, doLock];
}
;// CONCATENATED MODULE: ./node_modules/rc-select/es/utils/keyUtil.js

/** keyCode Judgment function */

function isValidateOpenKey(currentKeyCode) {
  return ![// System function button
  KeyCode/* default.ESC */.Z.ESC, KeyCode/* default.SHIFT */.Z.SHIFT, KeyCode/* default.BACKSPACE */.Z.BACKSPACE, KeyCode/* default.TAB */.Z.TAB, KeyCode/* default.WIN_KEY */.Z.WIN_KEY, KeyCode/* default.ALT */.Z.ALT, KeyCode/* default.META */.Z.META, KeyCode/* default.WIN_KEY_RIGHT */.Z.WIN_KEY_RIGHT, KeyCode/* default.CTRL */.Z.CTRL, KeyCode/* default.SEMICOLON */.Z.SEMICOLON, KeyCode/* default.EQUALS */.Z.EQUALS, KeyCode/* default.CAPS_LOCK */.Z.CAPS_LOCK, KeyCode/* default.CONTEXT_MENU */.Z.CONTEXT_MENU, // F1-F12
  KeyCode/* default.F1 */.Z.F1, KeyCode/* default.F2 */.Z.F2, KeyCode/* default.F3 */.Z.F3, KeyCode/* default.F4 */.Z.F4, KeyCode/* default.F5 */.Z.F5, KeyCode/* default.F6 */.Z.F6, KeyCode/* default.F7 */.Z.F7, KeyCode/* default.F8 */.Z.F8, KeyCode/* default.F9 */.Z.F9, KeyCode/* default.F10 */.Z.F10, KeyCode/* default.F11 */.Z.F11, KeyCode/* default.F12 */.Z.F12].includes(currentKeyCode);
}
;// CONCATENATED MODULE: ./node_modules/rc-select/es/Selector/index.js



/**
 * Cursor rule:
 * 1. Only `showSearch` enabled
 * 2. Only `open` is `true`
 * 3. When typing, set `open` to `true` which hit rule of 2
 *
 * Accessibility:
 * - https://www.w3.org/TR/wai-aria-practices/examples/combobox/aria1.1pattern/listbox-combo.html
 */








var Selector = function Selector(props, ref) {
  var inputRef = (0,react.useRef)(null);
  var compositionStatusRef = (0,react.useRef)(false);
  var prefixCls = props.prefixCls,
      open = props.open,
      mode = props.mode,
      showSearch = props.showSearch,
      tokenWithEnter = props.tokenWithEnter,
      onSearch = props.onSearch,
      onSearchSubmit = props.onSearchSubmit,
      onToggleOpen = props.onToggleOpen,
      onInputKeyDown = props.onInputKeyDown,
      domRef = props.domRef; // ======================= Ref =======================

  react.useImperativeHandle(ref, function () {
    return {
      focus: function focus() {
        inputRef.current.focus();
      },
      blur: function blur() {
        inputRef.current.blur();
      }
    };
  }); // ====================== Input ======================

  var _useLock = useLock(0),
      _useLock2 = (0,slicedToArray/* default */.Z)(_useLock, 2),
      getInputMouseDown = _useLock2[0],
      setInputMouseDown = _useLock2[1];

  var onInternalInputKeyDown = function onInternalInputKeyDown(event) {
    var which = event.which;

    if (which === KeyCode/* default.UP */.Z.UP || which === KeyCode/* default.DOWN */.Z.DOWN) {
      event.preventDefault();
    }

    if (onInputKeyDown) {
      onInputKeyDown(event);
    }

    if (which === KeyCode/* default.ENTER */.Z.ENTER && mode === 'tags' && !compositionStatusRef.current && !open) {
      // When menu isn't open, OptionList won't trigger a value change
      // So when enter is pressed, the tag's input value should be emitted here to let selector know
      onSearchSubmit === null || onSearchSubmit === void 0 ? void 0 : onSearchSubmit(event.target.value);
    }

    if (isValidateOpenKey(which)) {
      onToggleOpen(true);
    }
  };
  /**
   * We can not use `findDOMNode` sine it will get warning,
   * have to use timer to check if is input element.
   */


  var onInternalInputMouseDown = function onInternalInputMouseDown() {
    setInputMouseDown(true);
  }; // When paste come, ignore next onChange


  var pastedTextRef = (0,react.useRef)(null);

  var triggerOnSearch = function triggerOnSearch(value) {
    if (onSearch(value, true, compositionStatusRef.current) !== false) {
      onToggleOpen(true);
    }
  };

  var onInputCompositionStart = function onInputCompositionStart() {
    compositionStatusRef.current = true;
  };

  var onInputCompositionEnd = function onInputCompositionEnd(e) {
    compositionStatusRef.current = false; // Trigger search again to support `tokenSeparators` with typewriting

    if (mode !== 'combobox') {
      triggerOnSearch(e.target.value);
    }
  };

  var onInputChange = function onInputChange(event) {
    var value = event.target.value; // Pasted text should replace back to origin content

    if (tokenWithEnter && pastedTextRef.current && /[\r\n]/.test(pastedTextRef.current)) {
      // CRLF will be treated as a single space for input element
      var replacedText = pastedTextRef.current.replace(/[\r\n]+$/, '').replace(/\r\n/g, ' ').replace(/[\r\n]/g, ' ');
      value = value.replace(replacedText, pastedTextRef.current);
    }

    pastedTextRef.current = null;
    triggerOnSearch(value);
  };

  var onInputPaste = function onInputPaste(e) {
    var clipboardData = e.clipboardData;
    var value = clipboardData.getData('text');
    pastedTextRef.current = value;
  };

  var onClick = function onClick(_ref) {
    var target = _ref.target;

    if (target !== inputRef.current) {
      // Should focus input if click the selector
      var isIE = document.body.style.msTouchAction !== undefined;

      if (isIE) {
        setTimeout(function () {
          inputRef.current.focus();
        });
      } else {
        inputRef.current.focus();
      }
    }
  };

  var onMouseDown = function onMouseDown(event) {
    var inputMouseDown = getInputMouseDown();

    if (event.target !== inputRef.current && !inputMouseDown) {
      event.preventDefault();
    }

    if (mode !== 'combobox' && (!showSearch || !inputMouseDown) || !open) {
      if (open) {
        onSearch('', true, false);
      }

      onToggleOpen();
    }
  }; // ================= Inner Selector ==================


  var sharedProps = {
    inputRef: inputRef,
    onInputKeyDown: onInternalInputKeyDown,
    onInputMouseDown: onInternalInputMouseDown,
    onInputChange: onInputChange,
    onInputPaste: onInputPaste,
    onInputCompositionStart: onInputCompositionStart,
    onInputCompositionEnd: onInputCompositionEnd
  };
  var selectNode = mode === 'multiple' || mode === 'tags' ? /*#__PURE__*/react.createElement(MultipleSelector, (0,esm_extends/* default */.Z)({}, props, sharedProps)) : /*#__PURE__*/react.createElement(Selector_SingleSelector, (0,esm_extends/* default */.Z)({}, props, sharedProps));
  return /*#__PURE__*/react.createElement("div", {
    ref: domRef,
    className: "".concat(prefixCls, "-selector"),
    onClick: onClick,
    onMouseDown: onMouseDown
  }, selectNode);
};

var ForwardSelector = /*#__PURE__*/react.forwardRef(Selector);
ForwardSelector.displayName = 'Selector';
/* harmony default export */ var es_Selector = (ForwardSelector);
;// CONCATENATED MODULE: ./node_modules/rc-select/es/hooks/useSelectTriggerControl.js

function useSelectTriggerControl(elements, open, triggerOpen) {
  var propsRef = react.useRef(null);
  propsRef.current = {
    open: open,
    triggerOpen: triggerOpen
  };
  react.useEffect(function () {
    function onGlobalMouseDown(event) {
      var target = event.target;

      if (target.shadowRoot && event.composed) {
        target = event.composedPath()[0] || target;
      }

      if (propsRef.current.open && elements().filter(function (element) {
        return element;
      }).every(function (element) {
        return !element.contains(target) && element !== target;
      })) {
        // Should trigger close
        propsRef.current.triggerOpen(false);
      }
    }

    window.addEventListener('mousedown', onGlobalMouseDown);
    return function () {
      return window.removeEventListener('mousedown', onGlobalMouseDown);
    };
  }, []);
}
;// CONCATENATED MODULE: ./node_modules/rc-select/es/hooks/useDelayReset.js


/**
 * Similar with `useLock`, but this hook will always execute last value.
 * When set to `true`, it will keep `true` for a short time even if `false` is set.
 */

function useDelayReset() {
  var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

  var _React$useState = react.useState(false),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      bool = _React$useState2[0],
      setBool = _React$useState2[1];

  var delayRef = react.useRef(null);

  var cancelLatest = function cancelLatest() {
    window.clearTimeout(delayRef.current);
  };

  react.useEffect(function () {
    return cancelLatest;
  }, []);

  var delaySetBool = function delaySetBool(value, callback) {
    cancelLatest();
    delayRef.current = window.setTimeout(function () {
      setBool(value);

      if (callback) {
        callback();
      }
    }, timeout);
  };

  return [bool, delaySetBool, cancelLatest];
}
;// CONCATENATED MODULE: ./node_modules/rc-select/es/hooks/useBaseProps.js
/**
 * BaseSelect provide some parsed data into context.
 * You can use this hooks to get them.
 */

var BaseSelectContext = /*#__PURE__*/react.createContext(null);
function useBaseProps() {
  return react.useContext(BaseSelectContext);
}
;// CONCATENATED MODULE: ./node_modules/rc-select/es/BaseSelect.js







var BaseSelect_excluded = ["id", "prefixCls", "className", "showSearch", "tagRender", "direction", "omitDomProps", "displayValues", "onDisplayValuesChange", "emptyOptions", "notFoundContent", "onClear", "mode", "disabled", "loading", "getInputElement", "getRawInputElement", "open", "defaultOpen", "onDropdownVisibleChange", "activeValue", "onActiveValueChange", "activeDescendantId", "searchValue", "onSearch", "onSearchSplit", "tokenSeparators", "allowClear", "showArrow", "inputIcon", "clearIcon", "OptionList", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "placement", "getPopupContainer", "showAction", "onFocus", "onBlur", "onKeyUp", "onKeyDown", "onMouseDown", "suffix"];















var DEFAULT_OMIT_PROPS = ['value', 'onChange', 'removeIcon', 'placeholder', 'autoFocus', 'maxTagCount', 'maxTagTextLength', 'maxTagPlaceholder', 'choiceTransitionName', 'onInputKeyDown', 'onPopupScroll', 'tabIndex'];
function BaseSelect_isMultiple(mode) {
  return mode === 'tags' || mode === 'multiple';
}
var BaseSelect = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _customizeRawInputEle, _classNames2;

  var id = props.id,
      prefixCls = props.prefixCls,
      className = props.className,
      showSearch = props.showSearch,
      tagRender = props.tagRender,
      direction = props.direction,
      omitDomProps = props.omitDomProps,
      displayValues = props.displayValues,
      onDisplayValuesChange = props.onDisplayValuesChange,
      emptyOptions = props.emptyOptions,
      _props$notFoundConten = props.notFoundContent,
      notFoundContent = _props$notFoundConten === void 0 ? 'Not Found' : _props$notFoundConten,
      onClear = props.onClear,
      mode = props.mode,
      disabled = props.disabled,
      loading = props.loading,
      getInputElement = props.getInputElement,
      getRawInputElement = props.getRawInputElement,
      open = props.open,
      defaultOpen = props.defaultOpen,
      onDropdownVisibleChange = props.onDropdownVisibleChange,
      activeValue = props.activeValue,
      onActiveValueChange = props.onActiveValueChange,
      activeDescendantId = props.activeDescendantId,
      searchValue = props.searchValue,
      onSearch = props.onSearch,
      onSearchSplit = props.onSearchSplit,
      tokenSeparators = props.tokenSeparators,
      allowClear = props.allowClear,
      showArrow = props.showArrow,
      inputIcon = props.inputIcon,
      clearIcon = props.clearIcon,
      OptionList = props.OptionList,
      animation = props.animation,
      transitionName = props.transitionName,
      dropdownStyle = props.dropdownStyle,
      dropdownClassName = props.dropdownClassName,
      dropdownMatchSelectWidth = props.dropdownMatchSelectWidth,
      dropdownRender = props.dropdownRender,
      dropdownAlign = props.dropdownAlign,
      placement = props.placement,
      getPopupContainer = props.getPopupContainer,
      _props$showAction = props.showAction,
      showAction = _props$showAction === void 0 ? [] : _props$showAction,
      onFocus = props.onFocus,
      onBlur = props.onBlur,
      onKeyUp = props.onKeyUp,
      onKeyDown = props.onKeyDown,
      onMouseDown = props.onMouseDown,
      suffix = props.suffix,
      restProps = (0,objectWithoutProperties/* default */.Z)(props, BaseSelect_excluded); // ============================== MISC ==============================


  var multiple = BaseSelect_isMultiple(mode);
  var mergedShowSearch = (showSearch !== undefined ? showSearch : multiple) || mode === 'combobox';

  var domProps = (0,objectSpread2/* default */.Z)({}, restProps);

  DEFAULT_OMIT_PROPS.forEach(function (propName) {
    delete domProps[propName];
  });
  omitDomProps === null || omitDomProps === void 0 ? void 0 : omitDomProps.forEach(function (propName) {
    delete domProps[propName];
  }); // ============================= Mobile =============================

  var _React$useState = react.useState(false),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      mobile = _React$useState2[0],
      setMobile = _React$useState2[1];

  react.useEffect(function () {
    // Only update on the client side
    setMobile((0,isMobile/* default */.Z)());
  }, []); // ============================== Refs ==============================

  var containerRef = react.useRef(null);
  var selectorDomRef = react.useRef(null);
  var triggerRef = react.useRef(null);
  var selectorRef = react.useRef(null);
  var listRef = react.useRef(null);
  /** Used for component focused management */

  var _useDelayReset = useDelayReset(),
      _useDelayReset2 = (0,slicedToArray/* default */.Z)(_useDelayReset, 3),
      mockFocused = _useDelayReset2[0],
      setMockFocused = _useDelayReset2[1],
      cancelSetMockFocused = _useDelayReset2[2]; // =========================== Imperative ===========================


  react.useImperativeHandle(ref, function () {
    var _selectorRef$current, _selectorRef$current2;

    return {
      focus: (_selectorRef$current = selectorRef.current) === null || _selectorRef$current === void 0 ? void 0 : _selectorRef$current.focus,
      blur: (_selectorRef$current2 = selectorRef.current) === null || _selectorRef$current2 === void 0 ? void 0 : _selectorRef$current2.blur,
      scrollTo: function scrollTo(arg) {
        var _listRef$current;

        return (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.scrollTo(arg);
      }
    };
  }); // ========================== Search Value ==========================

  var mergedSearchValue = react.useMemo(function () {
    var _displayValues$;

    if (mode !== 'combobox') {
      return searchValue;
    }

    var val = (_displayValues$ = displayValues[0]) === null || _displayValues$ === void 0 ? void 0 : _displayValues$.value;
    return typeof val === 'string' || typeof val === 'number' ? String(val) : '';
  }, [searchValue, mode, displayValues]); // ========================== Custom Input ==========================
  // Only works in `combobox`

  var customizeInputElement = mode === 'combobox' && typeof getInputElement === 'function' && getInputElement() || null; // Used for customize replacement for `rc-cascader`

  var customizeRawInputElement = typeof getRawInputElement === 'function' && getRawInputElement();
  var customizeRawInputRef = (0,es_ref/* useComposeRef */.x1)(selectorDomRef, customizeRawInputElement === null || customizeRawInputElement === void 0 ? void 0 : (_customizeRawInputEle = customizeRawInputElement.props) === null || _customizeRawInputEle === void 0 ? void 0 : _customizeRawInputEle.ref); // ============================== Open ==============================

  var _useMergedState = (0,useMergedState/* default */.Z)(undefined, {
    defaultValue: defaultOpen,
    value: open
  }),
      _useMergedState2 = (0,slicedToArray/* default */.Z)(_useMergedState, 2),
      innerOpen = _useMergedState2[0],
      setInnerOpen = _useMergedState2[1];

  var mergedOpen = innerOpen; // Not trigger `open` in `combobox` when `notFoundContent` is empty

  var emptyListContent = !notFoundContent && emptyOptions;

  if (disabled || emptyListContent && mergedOpen && mode === 'combobox') {
    mergedOpen = false;
  }

  var triggerOpen = emptyListContent ? false : mergedOpen;
  var onToggleOpen = react.useCallback(function (newOpen) {
    var nextOpen = newOpen !== undefined ? newOpen : !mergedOpen;

    if (mergedOpen !== nextOpen && !disabled) {
      setInnerOpen(nextOpen);
      onDropdownVisibleChange === null || onDropdownVisibleChange === void 0 ? void 0 : onDropdownVisibleChange(nextOpen);
    }
  }, [disabled, mergedOpen, setInnerOpen, onDropdownVisibleChange]); // ============================= Search =============================

  var tokenWithEnter = react.useMemo(function () {
    return (tokenSeparators || []).some(function (tokenSeparator) {
      return ['\n', '\r\n'].includes(tokenSeparator);
    });
  }, [tokenSeparators]);

  var onInternalSearch = function onInternalSearch(searchText, fromTyping, isCompositing) {
    var ret = true;
    var newSearchText = searchText;
    onActiveValueChange === null || onActiveValueChange === void 0 ? void 0 : onActiveValueChange(null); // Check if match the `tokenSeparators`

    var patchLabels = isCompositing ? null : getSeparatedContent(searchText, tokenSeparators); // Ignore combobox since it's not split-able

    if (mode !== 'combobox' && patchLabels) {
      newSearchText = '';
      onSearchSplit === null || onSearchSplit === void 0 ? void 0 : onSearchSplit(patchLabels); // Should close when paste finish

      onToggleOpen(false); // Tell Selector that break next actions

      ret = false;
    }

    if (onSearch && mergedSearchValue !== newSearchText) {
      onSearch(newSearchText, {
        source: fromTyping ? 'typing' : 'effect'
      });
    }

    return ret;
  }; // Only triggered when menu is closed & mode is tags
  // If menu is open, OptionList will take charge
  // If mode isn't tags, press enter is not meaningful when you can't see any option


  var onInternalSearchSubmit = function onInternalSearchSubmit(searchText) {
    // prevent empty tags from appearing when you click the Enter button
    if (!searchText || !searchText.trim()) {
      return;
    }

    onSearch(searchText, {
      source: 'submit'
    });
  }; // Close will clean up single mode search text


  react.useEffect(function () {
    if (!mergedOpen && !multiple && mode !== 'combobox') {
      onInternalSearch('', false, false);
    }
  }, [mergedOpen]); // ============================ Disabled ============================
  // Close dropdown & remove focus state when disabled change

  react.useEffect(function () {
    if (innerOpen && disabled) {
      setInnerOpen(false);
    }

    if (disabled) {
      setMockFocused(false);
    }
  }, [disabled]); // ============================ Keyboard ============================

  /**
   * We record input value here to check if can press to clean up by backspace
   * - null: Key is not down, this is reset by key up
   * - true: Search text is empty when first time backspace down
   * - false: Search text is not empty when first time backspace down
   */

  var _useLock = useLock(),
      _useLock2 = (0,slicedToArray/* default */.Z)(_useLock, 2),
      getClearLock = _useLock2[0],
      setClearLock = _useLock2[1]; // KeyDown


  var onInternalKeyDown = function onInternalKeyDown(event) {
    var clearLock = getClearLock();
    var which = event.which;

    if (which === KeyCode/* default.ENTER */.Z.ENTER) {
      // Do not submit form when type in the input
      if (mode !== 'combobox') {
        event.preventDefault();
      } // We only manage open state here, close logic should handle by list component


      if (!mergedOpen) {
        onToggleOpen(true);
      }
    }

    setClearLock(!!mergedSearchValue); // Remove value by `backspace`

    if (which === KeyCode/* default.BACKSPACE */.Z.BACKSPACE && !clearLock && multiple && !mergedSearchValue && displayValues.length) {
      var cloneDisplayValues = (0,toConsumableArray/* default */.Z)(displayValues);

      var removedDisplayValue = null;

      for (var i = cloneDisplayValues.length - 1; i >= 0; i -= 1) {
        var current = cloneDisplayValues[i];

        if (!current.disabled) {
          cloneDisplayValues.splice(i, 1);
          removedDisplayValue = current;
          break;
        }
      }

      if (removedDisplayValue) {
        onDisplayValuesChange(cloneDisplayValues, {
          type: 'remove',
          values: [removedDisplayValue]
        });
      }
    }

    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    if (mergedOpen && listRef.current) {
      var _listRef$current2;

      (_listRef$current2 = listRef.current).onKeyDown.apply(_listRef$current2, [event].concat(rest));
    }

    onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown.apply(void 0, [event].concat(rest));
  }; // KeyUp


  var onInternalKeyUp = function onInternalKeyUp(event) {
    for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      rest[_key2 - 1] = arguments[_key2];
    }

    if (mergedOpen && listRef.current) {
      var _listRef$current3;

      (_listRef$current3 = listRef.current).onKeyUp.apply(_listRef$current3, [event].concat(rest));
    }

    onKeyUp === null || onKeyUp === void 0 ? void 0 : onKeyUp.apply(void 0, [event].concat(rest));
  }; // ============================ Selector ============================


  var onSelectorRemove = function onSelectorRemove(val) {
    var newValues = displayValues.filter(function (i) {
      return i !== val;
    });
    onDisplayValuesChange(newValues, {
      type: 'remove',
      values: [val]
    });
  }; // ========================== Focus / Blur ==========================

  /** Record real focus status */


  var focusRef = react.useRef(false);

  var onContainerFocus = function onContainerFocus() {
    setMockFocused(true);

    if (!disabled) {
      if (onFocus && !focusRef.current) {
        onFocus.apply(void 0, arguments);
      } // `showAction` should handle `focus` if set


      if (showAction.includes('focus')) {
        onToggleOpen(true);
      }
    }

    focusRef.current = true;
  };

  var onContainerBlur = function onContainerBlur() {
    setMockFocused(false, function () {
      focusRef.current = false;
      onToggleOpen(false);
    });

    if (disabled) {
      return;
    }

    if (mergedSearchValue) {
      // `tags` mode should move `searchValue` into values
      if (mode === 'tags') {
        onSearch(mergedSearchValue, {
          source: 'submit'
        });
      } else if (mode === 'multiple') {
        // `multiple` mode only clean the search value but not trigger event
        onSearch('', {
          source: 'blur'
        });
      }
    }

    if (onBlur) {
      onBlur.apply(void 0, arguments);
    }
  }; // Give focus back of Select


  var activeTimeoutIds = [];
  react.useEffect(function () {
    return function () {
      activeTimeoutIds.forEach(function (timeoutId) {
        return clearTimeout(timeoutId);
      });
      activeTimeoutIds.splice(0, activeTimeoutIds.length);
    };
  }, []);

  var onInternalMouseDown = function onInternalMouseDown(event) {
    var _triggerRef$current;

    var target = event.target;
    var popupElement = (_triggerRef$current = triggerRef.current) === null || _triggerRef$current === void 0 ? void 0 : _triggerRef$current.getPopupElement(); // We should give focus back to selector if clicked item is not focusable

    if (popupElement && popupElement.contains(target)) {
      var timeoutId = setTimeout(function () {
        var index = activeTimeoutIds.indexOf(timeoutId);

        if (index !== -1) {
          activeTimeoutIds.splice(index, 1);
        }

        cancelSetMockFocused();

        if (!mobile && !popupElement.contains(document.activeElement)) {
          var _selectorRef$current3;

          (_selectorRef$current3 = selectorRef.current) === null || _selectorRef$current3 === void 0 ? void 0 : _selectorRef$current3.focus();
        }
      });
      activeTimeoutIds.push(timeoutId);
    }

    for (var _len3 = arguments.length, restArgs = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      restArgs[_key3 - 1] = arguments[_key3];
    }

    onMouseDown === null || onMouseDown === void 0 ? void 0 : onMouseDown.apply(void 0, [event].concat(restArgs));
  }; // ============================ Dropdown ============================


  var _React$useState3 = react.useState(null),
      _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
      containerWidth = _React$useState4[0],
      setContainerWidth = _React$useState4[1];

  var _React$useState5 = react.useState({}),
      _React$useState6 = (0,slicedToArray/* default */.Z)(_React$useState5, 2),
      forceUpdate = _React$useState6[1]; // We need force update here since popup dom is render async


  function onPopupMouseEnter() {
    forceUpdate({});
  }

  hooks_useLayoutEffect(function () {
    if (triggerOpen) {
      var _containerRef$current;

      var newWidth = Math.ceil((_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.offsetWidth);

      if (containerWidth !== newWidth && !Number.isNaN(newWidth)) {
        setContainerWidth(newWidth);
      }
    }
  }, [triggerOpen]); // Used for raw custom input trigger

  var onTriggerVisibleChange;

  if (customizeRawInputElement) {
    onTriggerVisibleChange = function onTriggerVisibleChange(newOpen) {
      onToggleOpen(newOpen);
    };
  } // Close when click on non-select element


  useSelectTriggerControl(function () {
    var _triggerRef$current2;

    return [containerRef.current, (_triggerRef$current2 = triggerRef.current) === null || _triggerRef$current2 === void 0 ? void 0 : _triggerRef$current2.getPopupElement()];
  }, triggerOpen, onToggleOpen); // ============================ Context =============================

  var baseSelectContext = react.useMemo(function () {
    return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
      notFoundContent: notFoundContent,
      open: mergedOpen,
      triggerOpen: triggerOpen,
      id: id,
      showSearch: mergedShowSearch,
      multiple: multiple,
      toggleOpen: onToggleOpen
    });
  }, [props, notFoundContent, triggerOpen, mergedOpen, id, mergedShowSearch, multiple, onToggleOpen]); // ==================================================================
  // ==                            Render                            ==
  // ==================================================================
  // ============================= Arrow ==============================

  var mergedShowArrow = showArrow !== undefined ? showArrow : loading || !multiple && mode !== 'combobox';
  var arrowNode;

  if (mergedShowArrow) {
    arrowNode = /*#__PURE__*/react.createElement(es_TransBtn, {
      className: classnames_default()("".concat(prefixCls, "-arrow"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-arrow-loading"), loading)),
      customizeIcon: inputIcon,
      customizeIconProps: {
        loading: loading,
        searchValue: mergedSearchValue,
        open: mergedOpen,
        focused: mockFocused,
        showSearch: mergedShowSearch
      }
    });
  } // ============================= Clear ==============================


  var clearNode;

  var onClearMouseDown = function onClearMouseDown() {
    onClear === null || onClear === void 0 ? void 0 : onClear();
    onDisplayValuesChange([], {
      type: 'clear',
      values: displayValues
    });
    onInternalSearch('', false, false);
  };

  if (!disabled && allowClear && (displayValues.length || mergedSearchValue)) {
    clearNode = /*#__PURE__*/react.createElement(es_TransBtn, {
      className: "".concat(prefixCls, "-clear"),
      onMouseDown: onClearMouseDown,
      customizeIcon: clearIcon
    }, "\xD7");
  } // =========================== OptionList ===========================


  var optionList = /*#__PURE__*/react.createElement(OptionList, {
    ref: listRef
  }); // ============================= Select =============================

  var mergedClassName = classnames_default()(prefixCls, className, (_classNames2 = {}, (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-focused"), mockFocused), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-multiple"), multiple), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-single"), !multiple), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-allow-clear"), allowClear), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-show-arrow"), mergedShowArrow), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-disabled"), disabled), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-loading"), loading), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-open"), mergedOpen), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-customize-input"), customizeInputElement), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-show-search"), mergedShowSearch), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-has-suffix"), suffix), _classNames2)); // >>> Selector

  var selectorNode = /*#__PURE__*/react.createElement(es_SelectTrigger, {
    ref: triggerRef,
    disabled: disabled,
    prefixCls: prefixCls,
    visible: triggerOpen,
    popupElement: optionList,
    containerWidth: containerWidth,
    animation: animation,
    transitionName: transitionName,
    dropdownStyle: dropdownStyle,
    dropdownClassName: dropdownClassName,
    direction: direction,
    dropdownMatchSelectWidth: dropdownMatchSelectWidth,
    dropdownRender: dropdownRender,
    dropdownAlign: dropdownAlign,
    placement: placement,
    getPopupContainer: getPopupContainer,
    empty: emptyOptions,
    getTriggerDOMNode: function getTriggerDOMNode() {
      return selectorDomRef.current;
    },
    onPopupVisibleChange: onTriggerVisibleChange,
    onPopupMouseEnter: onPopupMouseEnter
  }, customizeRawInputElement ? /*#__PURE__*/react.cloneElement(customizeRawInputElement, {
    ref: customizeRawInputRef
  }) : /*#__PURE__*/react.createElement(es_Selector, (0,esm_extends/* default */.Z)({}, props, {
    domRef: selectorDomRef,
    prefixCls: prefixCls,
    inputElement: customizeInputElement,
    ref: selectorRef,
    id: id,
    showSearch: mergedShowSearch,
    mode: mode,
    activeDescendantId: activeDescendantId,
    tagRender: tagRender,
    values: displayValues,
    open: mergedOpen,
    onToggleOpen: onToggleOpen,
    activeValue: activeValue,
    searchValue: mergedSearchValue,
    onSearch: onInternalSearch,
    onSearchSubmit: onInternalSearchSubmit,
    onRemove: onSelectorRemove,
    tokenWithEnter: tokenWithEnter
  }))); // >>> Render

  var renderNode; // Render raw

  if (customizeRawInputElement) {
    renderNode = selectorNode;
  } else {
    renderNode = /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
      className: mergedClassName
    }, domProps, {
      ref: containerRef,
      onMouseDown: onInternalMouseDown,
      onKeyDown: onInternalKeyDown,
      onKeyUp: onInternalKeyUp,
      onFocus: onContainerFocus,
      onBlur: onContainerBlur
    }), mockFocused && !mergedOpen && /*#__PURE__*/react.createElement("span", {
      style: {
        width: 0,
        height: 0,
        display: 'flex',
        overflow: 'hidden',
        opacity: 0
      },
      "aria-live": "polite"
    }, "".concat(displayValues.map(function (_ref) {
      var label = _ref.label,
          value = _ref.value;
      return ['number', 'string'].includes((0,esm_typeof/* default */.Z)(label)) ? label : value;
    }).join(', '))), selectorNode, arrowNode, clearNode, suffix && /*#__PURE__*/react.createElement("span", {
      className: "".concat(prefixCls, "-suffix")
    }, suffix));
  }

  return /*#__PURE__*/react.createElement(BaseSelectContext.Provider, {
    value: baseSelectContext
  }, renderNode);
}); // Set display name for dev

if (false) {}

/* harmony default export */ var es_BaseSelect = (BaseSelect);
// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__(8423);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useMemo.js
var useMemo = __webpack_require__(6982);
// EXTERNAL MODULE: ./node_modules/rc-resize-observer/es/index.js + 4 modules
var rc_resize_observer_es = __webpack_require__(8717);
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/Filler.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Fill component to provided the scroll content real height.
 */

var Filler = /*#__PURE__*/react.forwardRef(function (_ref, ref) {
  var height = _ref.height,
      offset = _ref.offset,
      children = _ref.children,
      prefixCls = _ref.prefixCls,
      onInnerResize = _ref.onInnerResize;
  var outerStyle = {};
  var innerStyle = {
    display: 'flex',
    flexDirection: 'column'
  };

  if (offset !== undefined) {
    outerStyle = {
      height: height,
      position: 'relative',
      overflow: 'hidden'
    };
    innerStyle = _objectSpread(_objectSpread({}, innerStyle), {}, {
      transform: "translateY(".concat(offset, "px)"),
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0
    });
  }

  return /*#__PURE__*/react.createElement("div", {
    style: outerStyle
  }, /*#__PURE__*/react.createElement(rc_resize_observer_es/* default */.Z, {
    onResize: function onResize(_ref2) {
      var offsetHeight = _ref2.offsetHeight;

      if (offsetHeight && onInnerResize) {
        onInnerResize();
      }
    }
  }, /*#__PURE__*/react.createElement("div", {
    style: innerStyle,
    className: classnames_default()(_defineProperty({}, "".concat(prefixCls, "-holder-inner"), prefixCls)),
    ref: ref
  }, children)));
});
Filler.displayName = 'Filler';
/* harmony default export */ var es_Filler = (Filler);
// EXTERNAL MODULE: ./node_modules/rc-util/es/raf.js
var raf = __webpack_require__(5164);
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/ScrollBar.js
function ScrollBar_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ScrollBar_typeof = function _typeof(obj) { return typeof obj; }; } else { ScrollBar_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ScrollBar_typeof(obj); }

function ScrollBar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (ScrollBar_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var MIN_SIZE = 20;

function getPageY(e) {
  return 'touches' in e ? e.touches[0].pageY : e.pageY;
}

var ScrollBar = /*#__PURE__*/function (_React$Component) {
  _inherits(ScrollBar, _React$Component);

  var _super = _createSuper(ScrollBar);

  function ScrollBar() {
    var _this;

    _classCallCheck(this, ScrollBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.moveRaf = null;
    _this.scrollbarRef = /*#__PURE__*/react.createRef();
    _this.thumbRef = /*#__PURE__*/react.createRef();
    _this.visibleTimeout = null;
    _this.state = {
      dragging: false,
      pageY: null,
      startTop: null,
      visible: false
    };

    _this.delayHidden = function () {
      clearTimeout(_this.visibleTimeout);

      _this.setState({
        visible: true
      });

      _this.visibleTimeout = setTimeout(function () {
        _this.setState({
          visible: false
        });
      }, 2000);
    };

    _this.onScrollbarTouchStart = function (e) {
      e.preventDefault();
    };

    _this.onContainerMouseDown = function (e) {
      e.stopPropagation();
      e.preventDefault();
    };

    _this.patchEvents = function () {
      window.addEventListener('mousemove', _this.onMouseMove);
      window.addEventListener('mouseup', _this.onMouseUp);

      _this.thumbRef.current.addEventListener('touchmove', _this.onMouseMove);

      _this.thumbRef.current.addEventListener('touchend', _this.onMouseUp);
    };

    _this.removeEvents = function () {
      window.removeEventListener('mousemove', _this.onMouseMove);
      window.removeEventListener('mouseup', _this.onMouseUp);

      _this.scrollbarRef.current.removeEventListener('touchstart', _this.onScrollbarTouchStart);

      _this.thumbRef.current.removeEventListener('touchstart', _this.onMouseDown);

      _this.thumbRef.current.removeEventListener('touchmove', _this.onMouseMove);

      _this.thumbRef.current.removeEventListener('touchend', _this.onMouseUp);

      raf/* default.cancel */.Z.cancel(_this.moveRaf);
    };

    _this.onMouseDown = function (e) {
      var onStartMove = _this.props.onStartMove;

      _this.setState({
        dragging: true,
        pageY: getPageY(e),
        startTop: _this.getTop()
      });

      onStartMove();

      _this.patchEvents();

      e.stopPropagation();
      e.preventDefault();
    };

    _this.onMouseMove = function (e) {
      var _this$state = _this.state,
          dragging = _this$state.dragging,
          pageY = _this$state.pageY,
          startTop = _this$state.startTop;
      var onScroll = _this.props.onScroll;
      raf/* default.cancel */.Z.cancel(_this.moveRaf);

      if (dragging) {
        var offsetY = getPageY(e) - pageY;
        var newTop = startTop + offsetY;

        var enableScrollRange = _this.getEnableScrollRange();

        var enableHeightRange = _this.getEnableHeightRange();

        var ptg = enableHeightRange ? newTop / enableHeightRange : 0;
        var newScrollTop = Math.ceil(ptg * enableScrollRange);
        _this.moveRaf = (0,raf/* default */.Z)(function () {
          onScroll(newScrollTop);
        });
      }
    };

    _this.onMouseUp = function () {
      var onStopMove = _this.props.onStopMove;

      _this.setState({
        dragging: false
      });

      onStopMove();

      _this.removeEvents();
    };

    _this.getSpinHeight = function () {
      var _this$props = _this.props,
          height = _this$props.height,
          count = _this$props.count;
      var baseHeight = height / count * 10;
      baseHeight = Math.max(baseHeight, MIN_SIZE);
      baseHeight = Math.min(baseHeight, height / 2);
      return Math.floor(baseHeight);
    };

    _this.getEnableScrollRange = function () {
      var _this$props2 = _this.props,
          scrollHeight = _this$props2.scrollHeight,
          height = _this$props2.height;
      return scrollHeight - height || 0;
    };

    _this.getEnableHeightRange = function () {
      var height = _this.props.height;

      var spinHeight = _this.getSpinHeight();

      return height - spinHeight || 0;
    };

    _this.getTop = function () {
      var scrollTop = _this.props.scrollTop;

      var enableScrollRange = _this.getEnableScrollRange();

      var enableHeightRange = _this.getEnableHeightRange();

      if (scrollTop === 0 || enableScrollRange === 0) {
        return 0;
      }

      var ptg = scrollTop / enableScrollRange;
      return ptg * enableHeightRange;
    };

    _this.showScroll = function () {
      var _this$props3 = _this.props,
          height = _this$props3.height,
          scrollHeight = _this$props3.scrollHeight;
      return scrollHeight > height;
    };

    return _this;
  }

  _createClass(ScrollBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollbarRef.current.addEventListener('touchstart', this.onScrollbarTouchStart);
      this.thumbRef.current.addEventListener('touchstart', this.onMouseDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.scrollTop !== this.props.scrollTop) {
        this.delayHidden();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeEvents();
      clearTimeout(this.visibleTimeout);
    }
  }, {
    key: "render",
    value: // ====================== Render =======================
    function render() {
      var _this$state2 = this.state,
          dragging = _this$state2.dragging,
          visible = _this$state2.visible;
      var prefixCls = this.props.prefixCls;
      var spinHeight = this.getSpinHeight();
      var top = this.getTop();
      var canScroll = this.showScroll();
      var mergedVisible = canScroll && visible;
      return /*#__PURE__*/react.createElement("div", {
        ref: this.scrollbarRef,
        className: classnames_default()("".concat(prefixCls, "-scrollbar"), ScrollBar_defineProperty({}, "".concat(prefixCls, "-scrollbar-show"), canScroll)),
        style: {
          width: 8,
          top: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: mergedVisible ? null : 'none'
        },
        onMouseDown: this.onContainerMouseDown,
        onMouseMove: this.delayHidden
      }, /*#__PURE__*/react.createElement("div", {
        ref: this.thumbRef,
        className: classnames_default()("".concat(prefixCls, "-scrollbar-thumb"), ScrollBar_defineProperty({}, "".concat(prefixCls, "-scrollbar-thumb-moving"), dragging)),
        style: {
          width: '100%',
          height: spinHeight,
          top: top,
          left: 0,
          position: 'absolute',
          background: 'rgba(0, 0, 0, 0.5)',
          borderRadius: 99,
          cursor: 'pointer',
          userSelect: 'none'
        },
        onMouseDown: this.onMouseDown
      }));
    }
  }]);

  return ScrollBar;
}(react.Component);


;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/Item.js

function Item(_ref) {
  var children = _ref.children,
      setRef = _ref.setRef;
  var refFunc = react.useCallback(function (node) {
    setRef(node);
  }, []);
  return /*#__PURE__*/react.cloneElement(children, {
    ref: refFunc
  });
}
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/hooks/useChildren.js


function useChildren(list, startIndex, endIndex, setNodeRef, renderFunc, _ref) {
  var getKey = _ref.getKey;
  return list.slice(startIndex, endIndex + 1).map(function (item, index) {
    var eleIndex = startIndex + index;
    var node = renderFunc(item, eleIndex, {// style: status === 'MEASURE_START' ? { visibility: 'hidden' } : {},
    });
    var key = getKey(item);
    return /*#__PURE__*/react.createElement(Item, {
      key: key,
      setRef: function setRef(ele) {
        return setNodeRef(item, ele);
      }
    }, node);
  });
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/findDOMNode.js
var findDOMNode = __webpack_require__(4203);
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/utils/CacheMap.js
function CacheMap_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CacheMap_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CacheMap_createClass(Constructor, protoProps, staticProps) { if (protoProps) CacheMap_defineProperties(Constructor.prototype, protoProps); if (staticProps) CacheMap_defineProperties(Constructor, staticProps); return Constructor; }

// Firefox has low performance of map.
var CacheMap = /*#__PURE__*/function () {
  function CacheMap() {
    CacheMap_classCallCheck(this, CacheMap);

    this.maps = void 0;
    this.maps = Object.create(null);
  }

  CacheMap_createClass(CacheMap, [{
    key: "set",
    value: function set(key, value) {
      this.maps[key] = value;
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.maps[key];
    }
  }]);

  return CacheMap;
}();

/* harmony default export */ var utils_CacheMap = (CacheMap);
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/hooks/useHeights.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function useHeights(getKey, onItemAdd, onItemRemove) {
  var _React$useState = react.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      updatedMark = _React$useState2[0],
      setUpdatedMark = _React$useState2[1];

  var instanceRef = (0,react.useRef)(new Map());
  var heightsRef = (0,react.useRef)(new utils_CacheMap());
  var heightUpdateIdRef = (0,react.useRef)(0);

  function collectHeight() {
    heightUpdateIdRef.current += 1;
    var currentId = heightUpdateIdRef.current;
    Promise.resolve().then(function () {
      // Only collect when it's latest call
      if (currentId !== heightUpdateIdRef.current) return;
      instanceRef.current.forEach(function (element, key) {
        if (element && element.offsetParent) {
          var htmlElement = (0,findDOMNode/* default */.Z)(element);
          var offsetHeight = htmlElement.offsetHeight;

          if (heightsRef.current.get(key) !== offsetHeight) {
            heightsRef.current.set(key, htmlElement.offsetHeight);
          }
        }
      }); // Always trigger update mark to tell parent that should re-calculate heights when resized

      setUpdatedMark(function (c) {
        return c + 1;
      });
    });
  }

  function setInstanceRef(item, instance) {
    var key = getKey(item);
    var origin = instanceRef.current.get(key);

    if (instance) {
      instanceRef.current.set(key, instance);
      collectHeight();
    } else {
      instanceRef.current.delete(key);
    } // Instance changed


    if (!origin !== !instance) {
      if (instance) {
        onItemAdd === null || onItemAdd === void 0 ? void 0 : onItemAdd(item);
      } else {
        onItemRemove === null || onItemRemove === void 0 ? void 0 : onItemRemove(item);
      }
    }
  }

  return [setInstanceRef, collectHeight, heightsRef.current, updatedMark];
}
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/hooks/useScrollTo.js
function useScrollTo_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { useScrollTo_typeof = function _typeof(obj) { return typeof obj; }; } else { useScrollTo_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return useScrollTo_typeof(obj); }

/* eslint-disable no-param-reassign */


function useScrollTo(containerRef, data, heights, itemHeight, getKey, collectHeight, syncScrollTop, triggerFlash) {
  var scrollRef = react.useRef();
  return function (arg) {
    // When not argument provided, we think dev may want to show the scrollbar
    if (arg === null || arg === undefined) {
      triggerFlash();
      return;
    } // Normal scroll logic


    raf/* default.cancel */.Z.cancel(scrollRef.current);

    if (typeof arg === 'number') {
      syncScrollTop(arg);
    } else if (arg && useScrollTo_typeof(arg) === 'object') {
      var index;
      var align = arg.align;

      if ('index' in arg) {
        index = arg.index;
      } else {
        index = data.findIndex(function (item) {
          return getKey(item) === arg.key;
        });
      }

      var _arg$offset = arg.offset,
          offset = _arg$offset === void 0 ? 0 : _arg$offset; // We will retry 3 times in case dynamic height shaking

      var syncScroll = function syncScroll(times, targetAlign) {
        if (times < 0 || !containerRef.current) return;
        var height = containerRef.current.clientHeight;
        var needCollectHeight = false;
        var newTargetAlign = targetAlign; // Go to next frame if height not exist

        if (height) {
          var mergedAlign = targetAlign || align; // Get top & bottom

          var stackTop = 0;
          var itemTop = 0;
          var itemBottom = 0;
          var maxLen = Math.min(data.length, index);

          for (var i = 0; i <= maxLen; i += 1) {
            var key = getKey(data[i]);
            itemTop = stackTop;
            var cacheHeight = heights.get(key);
            itemBottom = itemTop + (cacheHeight === undefined ? itemHeight : cacheHeight);
            stackTop = itemBottom;

            if (i === index && cacheHeight === undefined) {
              needCollectHeight = true;
            }
          } // Scroll to


          var targetTop = null;

          switch (mergedAlign) {
            case 'top':
              targetTop = itemTop - offset;
              break;

            case 'bottom':
              targetTop = itemBottom - height + offset;
              break;

            default:
              {
                var scrollTop = containerRef.current.scrollTop;
                var scrollBottom = scrollTop + height;

                if (itemTop < scrollTop) {
                  newTargetAlign = 'top';
                } else if (itemBottom > scrollBottom) {
                  newTargetAlign = 'bottom';
                }
              }
          }

          if (targetTop !== null && targetTop !== containerRef.current.scrollTop) {
            syncScrollTop(targetTop);
          }
        } // We will retry since element may not sync height as it described


        scrollRef.current = (0,raf/* default */.Z)(function () {
          if (needCollectHeight) {
            collectHeight();
          }

          syncScroll(times - 1, newTargetAlign);
        });
      };

      syncScroll(3);
    }
  };
}
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/utils/algorithmUtil.js
/**
 * Get index with specific start index one by one. e.g.
 * min: 3, max: 9, start: 6
 *
 * Return index is:
 * [0]: 6
 * [1]: 7
 * [2]: 5
 * [3]: 8
 * [4]: 4
 * [5]: 9
 * [6]: 3
 */
function getIndexByStartLoc(min, max, start, index) {
  var beforeCount = start - min;
  var afterCount = max - start;
  var balanceCount = Math.min(beforeCount, afterCount) * 2; // Balance

  if (index <= balanceCount) {
    var stepIndex = Math.floor(index / 2);

    if (index % 2) {
      return start + stepIndex + 1;
    }

    return start - stepIndex;
  } // One is out of range


  if (beforeCount > afterCount) {
    return start - (index - afterCount);
  }

  return start + (index - beforeCount);
}
/**
 * We assume that 2 list has only 1 item diff and others keeping the order.
 * So we can use dichotomy algorithm to find changed one.
 */

function findListDiffIndex(originList, targetList, getKey) {
  var originLen = originList.length;
  var targetLen = targetList.length;
  var shortList;
  var longList;

  if (originLen === 0 && targetLen === 0) {
    return null;
  }

  if (originLen < targetLen) {
    shortList = originList;
    longList = targetList;
  } else {
    shortList = targetList;
    longList = originList;
  }

  var notExistKey = {
    __EMPTY_ITEM__: true
  };

  function getItemKey(item) {
    if (item !== undefined) {
      return getKey(item);
    }

    return notExistKey;
  } // Loop to find diff one


  var diffIndex = null;
  var multiple = Math.abs(originLen - targetLen) !== 1;

  for (var i = 0; i < longList.length; i += 1) {
    var shortKey = getItemKey(shortList[i]);
    var longKey = getItemKey(longList[i]);

    if (shortKey !== longKey) {
      diffIndex = i;
      multiple = multiple || shortKey !== getItemKey(longList[i + 1]);
      break;
    }
  }

  return diffIndex === null ? null : {
    index: diffIndex,
    multiple: multiple
  };
}
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/hooks/useDiffItem.js
function useDiffItem_slicedToArray(arr, i) { return useDiffItem_arrayWithHoles(arr) || useDiffItem_iterableToArrayLimit(arr, i) || useDiffItem_unsupportedIterableToArray(arr, i) || useDiffItem_nonIterableRest(); }

function useDiffItem_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function useDiffItem_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useDiffItem_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useDiffItem_arrayLikeToArray(o, minLen); }

function useDiffItem_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function useDiffItem_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function useDiffItem_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function useDiffItem(data, getKey, onDiff) {
  var _React$useState = react.useState(data),
      _React$useState2 = useDiffItem_slicedToArray(_React$useState, 2),
      prevData = _React$useState2[0],
      setPrevData = _React$useState2[1];

  var _React$useState3 = react.useState(null),
      _React$useState4 = useDiffItem_slicedToArray(_React$useState3, 2),
      diffItem = _React$useState4[0],
      setDiffItem = _React$useState4[1];

  react.useEffect(function () {
    var diff = findListDiffIndex(prevData || [], data || [], getKey);

    if ((diff === null || diff === void 0 ? void 0 : diff.index) !== undefined) {
      onDiff === null || onDiff === void 0 ? void 0 : onDiff(diff.index);
      setDiffItem(data[diff.index]);
    }

    setPrevData(data);
  }, [data]);
  return [diffItem];
}
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/utils/isFirefox.js
function isFirefox_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { isFirefox_typeof = function _typeof(obj) { return typeof obj; }; } else { isFirefox_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return isFirefox_typeof(obj); }

var isFF = (typeof navigator === "undefined" ? "undefined" : isFirefox_typeof(navigator)) === 'object' && /Firefox/i.test(navigator.userAgent);
/* harmony default export */ var isFirefox = (isFF);
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/hooks/useOriginScroll.js

/* harmony default export */ var useOriginScroll = (function (isScrollAtTop, isScrollAtBottom) {
  // Do lock for a wheel when scrolling
  var lockRef = (0,react.useRef)(false);
  var lockTimeoutRef = (0,react.useRef)(null);

  function lockScroll() {
    clearTimeout(lockTimeoutRef.current);
    lockRef.current = true;
    lockTimeoutRef.current = setTimeout(function () {
      lockRef.current = false;
    }, 50);
  } // Pass to ref since global add is in closure


  var scrollPingRef = (0,react.useRef)({
    top: isScrollAtTop,
    bottom: isScrollAtBottom
  });
  scrollPingRef.current.top = isScrollAtTop;
  scrollPingRef.current.bottom = isScrollAtBottom;
  return function (deltaY) {
    var smoothOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var originScroll = // Pass origin wheel when on the top
    deltaY < 0 && scrollPingRef.current.top || // Pass origin wheel when on the bottom
    deltaY > 0 && scrollPingRef.current.bottom;

    if (smoothOffset && originScroll) {
      // No need lock anymore when it's smooth offset from touchMove interval
      clearTimeout(lockTimeoutRef.current);
      lockRef.current = false;
    } else if (!originScroll || lockRef.current) {
      lockScroll();
    }

    return !lockRef.current && originScroll;
  };
});
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/hooks/useFrameWheel.js




function useFrameWheel(inVirtual, isScrollAtTop, isScrollAtBottom, onWheelDelta) {
  var offsetRef = (0,react.useRef)(0);
  var nextFrameRef = (0,react.useRef)(null); // Firefox patch

  var wheelValueRef = (0,react.useRef)(null);
  var isMouseScrollRef = (0,react.useRef)(false); // Scroll status sync

  var originScroll = useOriginScroll(isScrollAtTop, isScrollAtBottom);

  function onWheel(event) {
    if (!inVirtual) return;
    raf/* default.cancel */.Z.cancel(nextFrameRef.current);
    var deltaY = event.deltaY;
    offsetRef.current += deltaY;
    wheelValueRef.current = deltaY; // Do nothing when scroll at the edge, Skip check when is in scroll

    if (originScroll(deltaY)) return; // Proxy of scroll events

    if (!isFirefox) {
      event.preventDefault();
    }

    nextFrameRef.current = (0,raf/* default */.Z)(function () {
      // Patch a multiple for Firefox to fix wheel number too small
      // ref: https://github.com/ant-design/ant-design/issues/26372#issuecomment-679460266
      var patchMultiple = isMouseScrollRef.current ? 10 : 1;
      onWheelDelta(offsetRef.current * patchMultiple);
      offsetRef.current = 0;
    });
  } // A patch for firefox


  function onFireFoxScroll(event) {
    if (!inVirtual) return;
    isMouseScrollRef.current = event.detail === wheelValueRef.current;
  }

  return [onWheel, onFireFoxScroll];
}
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/hooks/useMobileTouchMove.js


var SMOOTH_PTG = 14 / 15;
function useMobileTouchMove(inVirtual, listRef, callback) {
  var touchedRef = (0,react.useRef)(false);
  var touchYRef = (0,react.useRef)(0);
  var elementRef = (0,react.useRef)(null); // Smooth scroll

  var intervalRef = (0,react.useRef)(null);
  /* eslint-disable prefer-const */

  var cleanUpEvents;

  var onTouchMove = function onTouchMove(e) {
    if (touchedRef.current) {
      var currentY = Math.ceil(e.touches[0].pageY);
      var offsetY = touchYRef.current - currentY;
      touchYRef.current = currentY;

      if (callback(offsetY)) {
        e.preventDefault();
      } // Smooth interval


      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(function () {
        offsetY *= SMOOTH_PTG;

        if (!callback(offsetY, true) || Math.abs(offsetY) <= 0.1) {
          clearInterval(intervalRef.current);
        }
      }, 16);
    }
  };

  var onTouchEnd = function onTouchEnd() {
    touchedRef.current = false;
    cleanUpEvents();
  };

  var onTouchStart = function onTouchStart(e) {
    cleanUpEvents();

    if (e.touches.length === 1 && !touchedRef.current) {
      touchedRef.current = true;
      touchYRef.current = Math.ceil(e.touches[0].pageY);
      elementRef.current = e.target;
      elementRef.current.addEventListener('touchmove', onTouchMove);
      elementRef.current.addEventListener('touchend', onTouchEnd);
    }
  };

  cleanUpEvents = function cleanUpEvents() {
    if (elementRef.current) {
      elementRef.current.removeEventListener('touchmove', onTouchMove);
      elementRef.current.removeEventListener('touchend', onTouchEnd);
    }
  };

  react.useLayoutEffect(function () {
    if (inVirtual) {
      listRef.current.addEventListener('touchstart', onTouchStart);
    }

    return function () {
      listRef.current.removeEventListener('touchstart', onTouchStart);
      cleanUpEvents();
      clearInterval(intervalRef.current);
    };
  }, [inVirtual]);
}
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/List.js
var List_excluded = ["prefixCls", "className", "height", "itemHeight", "fullHeight", "style", "data", "children", "itemKey", "virtual", "component", "onScroll", "onVisibleChange"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function List_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function List_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { List_ownKeys(Object(source), true).forEach(function (key) { List_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { List_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function List_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function List_slicedToArray(arr, i) { return List_arrayWithHoles(arr) || List_iterableToArrayLimit(arr, i) || List_unsupportedIterableToArray(arr, i) || List_nonIterableRest(); }

function List_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function List_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return List_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return List_arrayLikeToArray(o, minLen); }

function List_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function List_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function List_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function List_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }













var EMPTY_DATA = [];
var ScrollStyle = {
  overflowY: 'auto',
  overflowAnchor: 'none'
};
function RawList(props, ref) {
  var _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-virtual-list' : _props$prefixCls,
      className = props.className,
      height = props.height,
      itemHeight = props.itemHeight,
      _props$fullHeight = props.fullHeight,
      fullHeight = _props$fullHeight === void 0 ? true : _props$fullHeight,
      style = props.style,
      data = props.data,
      children = props.children,
      itemKey = props.itemKey,
      virtual = props.virtual,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      onScroll = props.onScroll,
      onVisibleChange = props.onVisibleChange,
      restProps = List_objectWithoutProperties(props, List_excluded); // ================================= MISC =================================


  var useVirtual = !!(virtual !== false && height && itemHeight);
  var inVirtual = useVirtual && data && itemHeight * data.length > height;

  var _useState = (0,react.useState)(0),
      _useState2 = List_slicedToArray(_useState, 2),
      scrollTop = _useState2[0],
      setScrollTop = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = List_slicedToArray(_useState3, 2),
      scrollMoving = _useState4[0],
      setScrollMoving = _useState4[1];

  var mergedClassName = classnames_default()(prefixCls, className);
  var mergedData = data || EMPTY_DATA;
  var componentRef = (0,react.useRef)();
  var fillerInnerRef = (0,react.useRef)();
  var scrollBarRef = (0,react.useRef)(); // Hack on scrollbar to enable flash call
  // =============================== Item Key ===============================

  var getKey = react.useCallback(function (item) {
    if (typeof itemKey === 'function') {
      return itemKey(item);
    }

    return item === null || item === void 0 ? void 0 : item[itemKey];
  }, [itemKey]);
  var sharedConfig = {
    getKey: getKey
  }; // ================================ Scroll ================================

  function syncScrollTop(newTop) {
    setScrollTop(function (origin) {
      var value;

      if (typeof newTop === 'function') {
        value = newTop(origin);
      } else {
        value = newTop;
      }

      var alignedTop = keepInRange(value);
      componentRef.current.scrollTop = alignedTop;
      return alignedTop;
    });
  } // ================================ Legacy ================================
  // Put ref here since the range is generate by follow


  var rangeRef = (0,react.useRef)({
    start: 0,
    end: mergedData.length
  });
  var diffItemRef = (0,react.useRef)();

  var _useDiffItem = useDiffItem(mergedData, getKey),
      _useDiffItem2 = List_slicedToArray(_useDiffItem, 1),
      diffItem = _useDiffItem2[0];

  diffItemRef.current = diffItem; // ================================ Height ================================

  var _useHeights = useHeights(getKey, null, null),
      _useHeights2 = List_slicedToArray(_useHeights, 4),
      setInstanceRef = _useHeights2[0],
      collectHeight = _useHeights2[1],
      heights = _useHeights2[2],
      heightUpdatedMark = _useHeights2[3]; // ========================== Visible Calculation =========================


  var _React$useMemo = react.useMemo(function () {
    if (!useVirtual) {
      return {
        scrollHeight: undefined,
        start: 0,
        end: mergedData.length - 1,
        offset: undefined
      };
    } // Always use virtual scroll bar in avoid shaking


    // Always use virtual scroll bar in avoid shaking
    if (!inVirtual) {
      var _fillerInnerRef$curre;

      return {
        scrollHeight: ((_fillerInnerRef$curre = fillerInnerRef.current) === null || _fillerInnerRef$curre === void 0 ? void 0 : _fillerInnerRef$curre.offsetHeight) || 0,
        start: 0,
        end: mergedData.length - 1,
        offset: undefined
      };
    }

    var itemTop = 0;
    var startIndex;
    var startOffset;
    var endIndex;
    var dataLen = mergedData.length;

    for (var i = 0; i < dataLen; i += 1) {
      var item = mergedData[i];
      var key = getKey(item);
      var cacheHeight = heights.get(key);
      var currentItemBottom = itemTop + (cacheHeight === undefined ? itemHeight : cacheHeight); // Check item top in the range

      // Check item top in the range
      if (currentItemBottom >= scrollTop && startIndex === undefined) {
        startIndex = i;
        startOffset = itemTop;
      } // Check item bottom in the range. We will render additional one item for motion usage


      // Check item bottom in the range. We will render additional one item for motion usage
      if (currentItemBottom > scrollTop + height && endIndex === undefined) {
        endIndex = i;
      }

      itemTop = currentItemBottom;
    } // Fallback to normal if not match. This code should never reach

    /* istanbul ignore next */


    // Fallback to normal if not match. This code should never reach

    /* istanbul ignore next */
    if (startIndex === undefined) {
      startIndex = 0;
      startOffset = 0;
    }

    if (endIndex === undefined) {
      endIndex = mergedData.length - 1;
    } // Give cache to improve scroll experience


    // Give cache to improve scroll experience
    endIndex = Math.min(endIndex + 1, mergedData.length);
    return {
      scrollHeight: itemTop,
      start: startIndex,
      end: endIndex,
      offset: startOffset
    };
  }, [inVirtual, useVirtual, scrollTop, mergedData, heightUpdatedMark, height]),
      scrollHeight = _React$useMemo.scrollHeight,
      start = _React$useMemo.start,
      end = _React$useMemo.end,
      offset = _React$useMemo.offset;

  rangeRef.current.start = start;
  rangeRef.current.end = end; // =============================== In Range ===============================

  var maxScrollHeight = scrollHeight - height;
  var maxScrollHeightRef = (0,react.useRef)(maxScrollHeight);
  maxScrollHeightRef.current = maxScrollHeight;

  function keepInRange(newScrollTop) {
    var newTop = newScrollTop;

    if (!Number.isNaN(maxScrollHeightRef.current)) {
      newTop = Math.min(newTop, maxScrollHeightRef.current);
    }

    newTop = Math.max(newTop, 0);
    return newTop;
  }

  var isScrollAtTop = scrollTop <= 0;
  var isScrollAtBottom = scrollTop >= maxScrollHeight;
  var originScroll = useOriginScroll(isScrollAtTop, isScrollAtBottom); // ================================ Scroll ================================

  function onScrollBar(newScrollTop) {
    var newTop = newScrollTop;
    syncScrollTop(newTop);
  } // When data size reduce. It may trigger native scroll event back to fit scroll position


  function onFallbackScroll(e) {
    var newScrollTop = e.currentTarget.scrollTop;

    if (newScrollTop !== scrollTop) {
      syncScrollTop(newScrollTop);
    } // Trigger origin onScroll


    onScroll === null || onScroll === void 0 ? void 0 : onScroll(e);
  } // Since this added in global,should use ref to keep update


  var _useFrameWheel = useFrameWheel(useVirtual, isScrollAtTop, isScrollAtBottom, function (offsetY) {
    syncScrollTop(function (top) {
      var newTop = top + offsetY;
      return newTop;
    });
  }),
      _useFrameWheel2 = List_slicedToArray(_useFrameWheel, 2),
      onRawWheel = _useFrameWheel2[0],
      onFireFoxScroll = _useFrameWheel2[1]; // Mobile touch move


  useMobileTouchMove(useVirtual, componentRef, function (deltaY, smoothOffset) {
    if (originScroll(deltaY, smoothOffset)) {
      return false;
    }

    onRawWheel({
      preventDefault: function preventDefault() {},
      deltaY: deltaY
    });
    return true;
  });
  (0,react.useLayoutEffect)(function () {
    // Firefox only
    function onMozMousePixelScroll(e) {
      if (useVirtual) {
        e.preventDefault();
      }
    }

    componentRef.current.addEventListener('wheel', onRawWheel);
    componentRef.current.addEventListener('DOMMouseScroll', onFireFoxScroll);
    componentRef.current.addEventListener('MozMousePixelScroll', onMozMousePixelScroll);
    return function () {
      componentRef.current.removeEventListener('wheel', onRawWheel);
      componentRef.current.removeEventListener('DOMMouseScroll', onFireFoxScroll);
      componentRef.current.removeEventListener('MozMousePixelScroll', onMozMousePixelScroll);
    };
  }, [useVirtual]); // ================================= Ref ==================================

  var scrollTo = useScrollTo(componentRef, mergedData, heights, itemHeight, getKey, collectHeight, syncScrollTop, function () {
    var _scrollBarRef$current;

    (_scrollBarRef$current = scrollBarRef.current) === null || _scrollBarRef$current === void 0 ? void 0 : _scrollBarRef$current.delayHidden();
  });
  react.useImperativeHandle(ref, function () {
    return {
      scrollTo: scrollTo
    };
  }); // ================================ Effect ================================

  /** We need told outside that some list not rendered */

  (0,react.useLayoutEffect)(function () {
    if (onVisibleChange) {
      var renderList = mergedData.slice(start, end + 1);
      onVisibleChange(renderList, mergedData);
    }
  }, [start, end, mergedData]); // ================================ Render ================================

  var listChildren = useChildren(mergedData, start, end, setInstanceRef, children, sharedConfig);
  var componentStyle = null;

  if (height) {
    componentStyle = List_objectSpread(List_defineProperty({}, fullHeight ? 'height' : 'maxHeight', height), ScrollStyle);

    if (useVirtual) {
      componentStyle.overflowY = 'hidden';

      if (scrollMoving) {
        componentStyle.pointerEvents = 'none';
      }
    }
  }

  return /*#__PURE__*/react.createElement("div", _extends({
    style: List_objectSpread(List_objectSpread({}, style), {}, {
      position: 'relative'
    }),
    className: mergedClassName
  }, restProps), /*#__PURE__*/react.createElement(Component, {
    className: "".concat(prefixCls, "-holder"),
    style: componentStyle,
    ref: componentRef,
    onScroll: onFallbackScroll
  }, /*#__PURE__*/react.createElement(es_Filler, {
    prefixCls: prefixCls,
    height: scrollHeight,
    offset: offset,
    onInnerResize: collectHeight,
    ref: fillerInnerRef
  }, listChildren)), useVirtual && /*#__PURE__*/react.createElement(ScrollBar, {
    ref: scrollBarRef,
    prefixCls: prefixCls,
    scrollTop: scrollTop,
    height: height,
    scrollHeight: scrollHeight,
    count: mergedData.length,
    onScroll: onScrollBar,
    onStartMove: function onStartMove() {
      setScrollMoving(true);
    },
    onStopMove: function onStopMove() {
      setScrollMoving(false);
    }
  }));
}
var List = /*#__PURE__*/react.forwardRef(RawList);
List.displayName = 'List';
/* harmony default export */ var es_List = (List);
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/index.js

/* harmony default export */ var rc_virtual_list_es = (es_List);
;// CONCATENATED MODULE: ./node_modules/rc-select/es/utils/platformUtil.js
/* istanbul ignore file */
function isPlatformMac() {
  return /(mac\sos|macintosh)/i.test(navigator.appVersion);
}
;// CONCATENATED MODULE: ./node_modules/rc-select/es/SelectContext.js

var SelectContext = /*#__PURE__*/react.createContext(null);
/* harmony default export */ var es_SelectContext = (SelectContext);
;// CONCATENATED MODULE: ./node_modules/rc-select/es/OptionList.js




var OptionList_excluded = ["disabled", "title", "children", "style", "className"];












/**
 * Using virtual list of option display.
 * Will fallback to dom if use customize render.
 */

var OptionList = function OptionList(_, ref) {
  var _useBaseProps = useBaseProps(),
      prefixCls = _useBaseProps.prefixCls,
      id = _useBaseProps.id,
      open = _useBaseProps.open,
      multiple = _useBaseProps.multiple,
      searchValue = _useBaseProps.searchValue,
      toggleOpen = _useBaseProps.toggleOpen,
      notFoundContent = _useBaseProps.notFoundContent,
      onPopupScroll = _useBaseProps.onPopupScroll;

  var _React$useContext = react.useContext(es_SelectContext),
      flattenOptions = _React$useContext.flattenOptions,
      onActiveValue = _React$useContext.onActiveValue,
      defaultActiveFirstOption = _React$useContext.defaultActiveFirstOption,
      onSelect = _React$useContext.onSelect,
      menuItemSelectedIcon = _React$useContext.menuItemSelectedIcon,
      rawValues = _React$useContext.rawValues,
      fieldNames = _React$useContext.fieldNames,
      virtual = _React$useContext.virtual,
      listHeight = _React$useContext.listHeight,
      listItemHeight = _React$useContext.listItemHeight;

  var itemPrefixCls = "".concat(prefixCls, "-item");
  var memoFlattenOptions = (0,useMemo/* default */.Z)(function () {
    return flattenOptions;
  }, [open, flattenOptions], function (prev, next) {
    return next[0] && prev[1] !== next[1];
  }); // =========================== List ===========================

  var listRef = react.useRef(null);

  var onListMouseDown = function onListMouseDown(event) {
    event.preventDefault();
  };

  var scrollIntoView = function scrollIntoView(index) {
    if (listRef.current) {
      listRef.current.scrollTo({
        index: index
      });
    }
  }; // ========================== Active ==========================


  var getEnabledActiveIndex = function getEnabledActiveIndex(index) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var len = memoFlattenOptions.length;

    for (var i = 0; i < len; i += 1) {
      var current = (index + i * offset + len) % len;
      var _memoFlattenOptions$c = memoFlattenOptions[current],
          group = _memoFlattenOptions$c.group,
          data = _memoFlattenOptions$c.data;

      if (!group && !data.disabled) {
        return current;
      }
    }

    return -1;
  };

  var _React$useState = react.useState(function () {
    return getEnabledActiveIndex(0);
  }),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      activeIndex = _React$useState2[0],
      setActiveIndex = _React$useState2[1];

  var setActive = function setActive(index) {
    var fromKeyboard = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    setActiveIndex(index);
    var info = {
      source: fromKeyboard ? 'keyboard' : 'mouse'
    }; // Trigger active event

    var flattenItem = memoFlattenOptions[index];

    if (!flattenItem) {
      onActiveValue(null, -1, info);
      return;
    }

    onActiveValue(flattenItem.data.value, index, info);
  }; // Auto active first item when list length or searchValue changed


  (0,react.useEffect)(function () {
    setActive(defaultActiveFirstOption !== false ? getEnabledActiveIndex(0) : -1);
  }, [memoFlattenOptions.length, searchValue]); // Auto scroll to item position in single mode

  (0,react.useEffect)(function () {
    /**
     * React will skip `onChange` when component update.
     * `setActive` function will call root accessibility state update which makes re-render.
     * So we need to delay to let Input component trigger onChange first.
     */
    var timeoutId = setTimeout(function () {
      if (!multiple && open && rawValues.size === 1) {
        var value = Array.from(rawValues)[0];
        var index = memoFlattenOptions.findIndex(function (_ref) {
          var data = _ref.data;
          return data.value === value;
        });

        if (index !== -1) {
          setActive(index);
          scrollIntoView(index);
        }
      }
    }); // Force trigger scrollbar visible when open

    if (open) {
      var _listRef$current;

      (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.scrollTo(undefined);
    }

    return function () {
      return clearTimeout(timeoutId);
    };
  }, [open, searchValue]); // ========================== Values ==========================

  var onSelectValue = function onSelectValue(value) {
    if (value !== undefined) {
      onSelect(value, {
        selected: !rawValues.has(value)
      });
    } // Single mode should always close by select


    if (!multiple) {
      toggleOpen(false);
    }
  }; // ========================= Keyboard =========================


  react.useImperativeHandle(ref, function () {
    return {
      onKeyDown: function onKeyDown(event) {
        var which = event.which,
            ctrlKey = event.ctrlKey;

        switch (which) {
          // >>> Arrow keys & ctrl + n/p on Mac
          case KeyCode/* default.N */.Z.N:
          case KeyCode/* default.P */.Z.P:
          case KeyCode/* default.UP */.Z.UP:
          case KeyCode/* default.DOWN */.Z.DOWN:
            {
              var offset = 0;

              if (which === KeyCode/* default.UP */.Z.UP) {
                offset = -1;
              } else if (which === KeyCode/* default.DOWN */.Z.DOWN) {
                offset = 1;
              } else if (isPlatformMac() && ctrlKey) {
                if (which === KeyCode/* default.N */.Z.N) {
                  offset = 1;
                } else if (which === KeyCode/* default.P */.Z.P) {
                  offset = -1;
                }
              }

              if (offset !== 0) {
                var nextActiveIndex = getEnabledActiveIndex(activeIndex + offset, offset);
                scrollIntoView(nextActiveIndex);
                setActive(nextActiveIndex, true);
              }

              break;
            }
          // >>> Select

          case KeyCode/* default.ENTER */.Z.ENTER:
            {
              // value
              var item = memoFlattenOptions[activeIndex];

              if (item && !item.data.disabled) {
                onSelectValue(item.data.value);
              } else {
                onSelectValue(undefined);
              }

              if (open) {
                event.preventDefault();
              }

              break;
            }
          // >>> Close

          case KeyCode/* default.ESC */.Z.ESC:
            {
              toggleOpen(false);

              if (open) {
                event.stopPropagation();
              }
            }
        }
      },
      onKeyUp: function onKeyUp() {},
      scrollTo: function scrollTo(index) {
        scrollIntoView(index);
      }
    };
  }); // ========================== Render ==========================

  if (memoFlattenOptions.length === 0) {
    return /*#__PURE__*/react.createElement("div", {
      role: "listbox",
      id: "".concat(id, "_list"),
      className: "".concat(itemPrefixCls, "-empty"),
      onMouseDown: onListMouseDown
    }, notFoundContent);
  }

  var omitFieldNameList = Object.keys(fieldNames).map(function (key) {
    return fieldNames[key];
  });

  var getLabel = function getLabel(item) {
    return item.label;
  };

  var renderItem = function renderItem(index) {
    var item = memoFlattenOptions[index];
    if (!item) return null;
    var itemData = item.data || {};
    var value = itemData.value;
    var group = item.group;
    var attrs = pickAttrs(itemData, true);
    var mergedLabel = getLabel(item);
    return item ? /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
      "aria-label": typeof mergedLabel === 'string' && !group ? mergedLabel : null
    }, attrs, {
      key: index,
      role: group ? 'presentation' : 'option',
      id: "".concat(id, "_list_").concat(index),
      "aria-selected": rawValues.has(value)
    }), value) : null;
  };

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    role: "listbox",
    id: "".concat(id, "_list"),
    style: {
      height: 0,
      width: 0,
      overflow: 'hidden'
    }
  }, renderItem(activeIndex - 1), renderItem(activeIndex), renderItem(activeIndex + 1)), /*#__PURE__*/react.createElement(rc_virtual_list_es, {
    itemKey: "key",
    ref: listRef,
    data: memoFlattenOptions,
    height: listHeight,
    itemHeight: listItemHeight,
    fullHeight: false,
    onMouseDown: onListMouseDown,
    onScroll: onPopupScroll,
    virtual: virtual
  }, function (item, itemIndex) {
    var _classNames;

    var group = item.group,
        groupOption = item.groupOption,
        data = item.data,
        label = item.label,
        value = item.value;
    var key = data.key; // Group

    if (group) {
      return /*#__PURE__*/react.createElement("div", {
        className: classnames_default()(itemPrefixCls, "".concat(itemPrefixCls, "-group"))
      }, label !== undefined ? label : key);
    }

    var disabled = data.disabled,
        title = data.title,
        children = data.children,
        style = data.style,
        className = data.className,
        otherProps = (0,objectWithoutProperties/* default */.Z)(data, OptionList_excluded);

    var passedProps = (0,omit/* default */.Z)(otherProps, omitFieldNameList); // Option

    var selected = rawValues.has(value);
    var optionPrefixCls = "".concat(itemPrefixCls, "-option");
    var optionClassName = classnames_default()(itemPrefixCls, optionPrefixCls, className, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(optionPrefixCls, "-grouped"), groupOption), (0,defineProperty/* default */.Z)(_classNames, "".concat(optionPrefixCls, "-active"), activeIndex === itemIndex && !disabled), (0,defineProperty/* default */.Z)(_classNames, "".concat(optionPrefixCls, "-disabled"), disabled), (0,defineProperty/* default */.Z)(_classNames, "".concat(optionPrefixCls, "-selected"), selected), _classNames));
    var mergedLabel = getLabel(item);
    var iconVisible = !menuItemSelectedIcon || typeof menuItemSelectedIcon === 'function' || selected;
    var content = mergedLabel || value; // https://github.com/ant-design/ant-design/issues/26717

    var optionTitle = typeof content === 'string' || typeof content === 'number' ? content.toString() : undefined;

    if (title !== undefined) {
      optionTitle = title;
    }

    return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({}, passedProps, {
      "aria-selected": selected,
      className: optionClassName,
      title: optionTitle,
      onMouseMove: function onMouseMove() {
        if (activeIndex === itemIndex || disabled) {
          return;
        }

        setActive(itemIndex);
      },
      onClick: function onClick() {
        if (!disabled) {
          onSelectValue(value);
        }
      },
      style: style
    }), /*#__PURE__*/react.createElement("div", {
      className: "".concat(optionPrefixCls, "-content")
    }, content), /*#__PURE__*/react.isValidElement(menuItemSelectedIcon) || selected, iconVisible && /*#__PURE__*/react.createElement(es_TransBtn, {
      className: "".concat(itemPrefixCls, "-option-state"),
      customizeIcon: menuItemSelectedIcon,
      customizeIconProps: {
        isSelected: selected
      }
    }, selected ? '✓' : null));
  }));
};

var RefOptionList = /*#__PURE__*/react.forwardRef(OptionList);
RefOptionList.displayName = 'OptionList';
/* harmony default export */ var es_OptionList = (RefOptionList);
;// CONCATENATED MODULE: ./node_modules/rc-select/es/Option.js
/** This is a placeholder, not real render in dom */
var Option = function Option() {
  return null;
};

Option.isSelectOption = true;
/* harmony default export */ var es_Option = (Option);
;// CONCATENATED MODULE: ./node_modules/rc-select/es/OptGroup.js
/** This is a placeholder, not real render in dom */
var OptGroup = function OptGroup() {
  return null;
};

OptGroup.isSelectOptGroup = true;
/* harmony default export */ var es_OptGroup = (OptGroup);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Children/toArray.js
var Children_toArray = __webpack_require__(344);
;// CONCATENATED MODULE: ./node_modules/rc-select/es/utils/legacyUtil.js


var legacyUtil_excluded = ["children", "value"],
    _excluded2 = ["children"];



function convertNodeToOption(node) {
  var key = node.key,
      _node$props = node.props,
      children = _node$props.children,
      value = _node$props.value,
      restProps = (0,objectWithoutProperties/* default */.Z)(_node$props, legacyUtil_excluded);

  return (0,objectSpread2/* default */.Z)({
    key: key,
    value: value !== undefined ? value : key,
    children: children
  }, restProps);
}

function legacyUtil_convertChildrenToData(nodes) {
  var optionOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return (0,Children_toArray/* default */.Z)(nodes).map(function (node, index) {
    if (! /*#__PURE__*/react.isValidElement(node) || !node.type) {
      return null;
    }

    var isSelectOptGroup = node.type.isSelectOptGroup,
        key = node.key,
        _node$props2 = node.props,
        children = _node$props2.children,
        restProps = (0,objectWithoutProperties/* default */.Z)(_node$props2, _excluded2);

    if (optionOnly || !isSelectOptGroup) {
      return convertNodeToOption(node);
    }

    return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
      key: "__RC_SELECT_GRP__".concat(key === null ? index : key, "__"),
      label: key
    }, restProps), {}, {
      options: legacyUtil_convertChildrenToData(children)
    });
  }).filter(function (data) {
    return data;
  });
}
;// CONCATENATED MODULE: ./node_modules/rc-select/es/hooks/useOptions.js


/**
 * Parse `children` to `options` if `options` is not provided.
 * Then flatten the `options`.
 */

function useOptions(options, children, fieldNames) {
  return react.useMemo(function () {
    var mergedOptions = options;
    var childrenAsData = !options;

    if (childrenAsData) {
      mergedOptions = legacyUtil_convertChildrenToData(children);
    }

    var valueOptions = new Map();
    var labelOptions = new Map();

    function dig(optionList) {
      var isChildren = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      // for loop to speed up collection speed
      for (var i = 0; i < optionList.length; i += 1) {
        var option = optionList[i];

        if (!option[fieldNames.options] || isChildren) {
          valueOptions.set(option[fieldNames.value], option);
          labelOptions.set(option[fieldNames.label], option);
        } else {
          dig(option[fieldNames.options], true);
        }
      }
    }

    dig(mergedOptions);
    return {
      options: mergedOptions,
      valueOptions: valueOptions,
      labelOptions: labelOptions
    };
  }, [options, children, fieldNames]);
}
;// CONCATENATED MODULE: ./node_modules/rc-select/es/hooks/useRefFunc.js

/**
 * Same as `React.useCallback` but always return a memoized function
 * but redirect to real function.
 */

function useRefFunc(callback) {
  var funcRef = react.useRef();
  funcRef.current = callback;
  var cacheFn = react.useCallback(function () {
    return funcRef.current.apply(funcRef, arguments);
  }, []);
  return cacheFn;
}
;// CONCATENATED MODULE: ./node_modules/rc-select/es/utils/warningPropsUtil.js








function warningProps(props) {
  var mode = props.mode,
      options = props.options,
      children = props.children,
      backfill = props.backfill,
      allowClear = props.allowClear,
      placeholder = props.placeholder,
      getInputElement = props.getInputElement,
      showSearch = props.showSearch,
      onSearch = props.onSearch,
      defaultOpen = props.defaultOpen,
      autoFocus = props.autoFocus,
      labelInValue = props.labelInValue,
      value = props.value,
      inputValue = props.inputValue,
      optionLabelProp = props.optionLabelProp;
  var multiple = isMultiple(mode);
  var mergedShowSearch = showSearch !== undefined ? showSearch : multiple || mode === 'combobox';
  var mergedOptions = options || convertChildrenToData(children); // `tags` should not set option as disabled

  warning(mode !== 'tags' || mergedOptions.every(function (opt) {
    return !opt.disabled;
  }), 'Please avoid setting option to disabled in tags mode since user can always type text as tag.'); // `combobox` & `tags` should option be `string` type

  if (mode === 'tags' || mode === 'combobox') {
    var hasNumberValue = mergedOptions.some(function (item) {
      if (item.options) {
        return item.options.some(function (opt) {
          return typeof ('value' in opt ? opt.value : opt.key) === 'number';
        });
      }

      return typeof ('value' in item ? item.value : item.key) === 'number';
    });
    warning(!hasNumberValue, '`value` of Option should not use number type when `mode` is `tags` or `combobox`.');
  } // `combobox` should not use `optionLabelProp`


  warning(mode !== 'combobox' || !optionLabelProp, '`combobox` mode not support `optionLabelProp`. Please set `value` on Option directly.'); // Only `combobox` support `backfill`

  warning(mode === 'combobox' || !backfill, '`backfill` only works with `combobox` mode.'); // Only `combobox` support `getInputElement`

  warning(mode === 'combobox' || !getInputElement, '`getInputElement` only work with `combobox` mode.'); // Customize `getInputElement` should not use `allowClear` & `placeholder`

  noteOnce(mode !== 'combobox' || !getInputElement || !allowClear || !placeholder, 'Customize `getInputElement` should customize clear and placeholder logic instead of configuring `allowClear` and `placeholder`.'); // `onSearch` should use in `combobox` or `showSearch`

  if (onSearch && !mergedShowSearch && mode !== 'combobox' && mode !== 'tags') {
    warning(false, '`onSearch` should work with `showSearch` instead of use alone.');
  }

  noteOnce(!defaultOpen || autoFocus, '`defaultOpen` makes Select open without focus which means it will not close by click outside. You can set `autoFocus` if needed.');

  if (value !== undefined && value !== null) {
    var values = toArray(value);
    warning(!labelInValue || values.every(function (val) {
      return _typeof(val) === 'object' && ('key' in val || 'value' in val);
    }), '`value` should in shape of `{ value: string | number, label?: ReactNode }` when you set `labelInValue` to `true`');
    warning(!multiple || Array.isArray(value), '`value` should be array when `mode` is `multiple` or `tags`');
  } // Syntactic sugar should use correct children type


  if (children) {
    var invalidateChildType = null;
    toNodeArray(children).some(function (node) {
      if (! /*#__PURE__*/React.isValidElement(node) || !node.type) {
        return false;
      }

      var type = node.type;

      if (type.isSelectOption) {
        return false;
      }

      if (type.isSelectOptGroup) {
        var allChildrenValid = toNodeArray(node.props.children).every(function (subNode) {
          if (! /*#__PURE__*/React.isValidElement(subNode) || !node.type || subNode.type.isSelectOption) {
            return true;
          }

          invalidateChildType = subNode.type;
          return false;
        });

        if (allChildrenValid) {
          return false;
        }

        return true;
      }

      invalidateChildType = type;
      return true;
    });

    if (invalidateChildType) {
      warning(false, "`children` should be `Select.Option` or `Select.OptGroup` instead of `".concat(invalidateChildType.displayName || invalidateChildType.name || invalidateChildType, "`."));
    }

    warning(inputValue === undefined, '`inputValue` is deprecated, please use `searchValue` instead.');
  }
}

/* harmony default export */ var warningPropsUtil = ((/* unused pure expression or super */ null && (warningProps)));
;// CONCATENATED MODULE: ./node_modules/rc-select/es/hooks/useFilterOptions.js






function includes(test, search) {
  return commonUtil_toArray(test).join('').toUpperCase().includes(search);
}

/* harmony default export */ var useFilterOptions = (function (options, fieldNames, searchValue, filterOption, optionFilterProp) {
  return react.useMemo(function () {
    if (!searchValue || filterOption === false) {
      return options;
    }

    var fieldOptions = fieldNames.options,
        fieldLabel = fieldNames.label,
        fieldValue = fieldNames.value;
    var filteredOptions = [];
    var customizeFilter = typeof filterOption === 'function';
    var upperSearch = searchValue.toUpperCase();
    var filterFunc = customizeFilter ? filterOption : function (_, option) {
      // Use provided `optionFilterProp`
      if (optionFilterProp) {
        return includes(option[optionFilterProp], upperSearch);
      } // Auto select `label` or `value` by option type


      if (option[fieldOptions]) {
        // hack `fieldLabel` since `OptionGroup` children is not `label`
        return includes(option[fieldLabel !== 'children' ? fieldLabel : 'label'], upperSearch);
      }

      return includes(option[fieldValue], upperSearch);
    };
    var wrapOption = customizeFilter ? function (opt) {
      return injectPropsWithOption(opt);
    } : function (opt) {
      return opt;
    };
    options.forEach(function (item) {
      // Group should check child options
      if (item[fieldOptions]) {
        // Check group first
        var matchGroup = filterFunc(searchValue, wrapOption(item));

        if (matchGroup) {
          filteredOptions.push(item);
        } else {
          // Check option
          var subOptions = item[fieldOptions].filter(function (subItem) {
            return filterFunc(searchValue, wrapOption(subItem));
          });

          if (subOptions.length) {
            filteredOptions.push((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, item), {}, (0,defineProperty/* default */.Z)({}, fieldOptions, subOptions)));
          }
        }

        return;
      }

      if (filterFunc(searchValue, wrapOption(item))) {
        filteredOptions.push(item);
      }
    });
    return filteredOptions;
  }, [options, filterOption, optionFilterProp, searchValue, fieldNames]);
});
;// CONCATENATED MODULE: ./node_modules/rc-select/es/hooks/useCache.js


/**
 * Cache `value` related LabeledValue & options.
 */

/* harmony default export */ var useCache = (function (labeledValues, valueOptions) {
  var cacheRef = react.useRef({
    values: new Map(),
    options: new Map()
  });
  var filledLabeledValues = react.useMemo(function () {
    var _cacheRef$current = cacheRef.current,
        prevValueCache = _cacheRef$current.values,
        prevOptionCache = _cacheRef$current.options; // Fill label by cache

    var patchedValues = labeledValues.map(function (item) {
      if (item.label === undefined) {
        var _prevValueCache$get;

        return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, item), {}, {
          label: (_prevValueCache$get = prevValueCache.get(item.value)) === null || _prevValueCache$get === void 0 ? void 0 : _prevValueCache$get.label
        });
      }

      return item;
    }); // Refresh cache

    var valueCache = new Map();
    var optionCache = new Map();
    patchedValues.forEach(function (item) {
      valueCache.set(item.value, item);
      optionCache.set(item.value, valueOptions.get(item.value) || prevOptionCache.get(item.value));
    });
    cacheRef.current.values = valueCache;
    cacheRef.current.options = optionCache;
    return patchedValues;
  }, [labeledValues, valueOptions]);
  var getOption = react.useCallback(function (val) {
    return valueOptions.get(val) || cacheRef.current.options.get(val);
  }, [valueOptions]);
  return [filledLabeledValues, getOption];
});
;// CONCATENATED MODULE: ./node_modules/rc-select/es/Select.js







var Select_excluded = ["id", "mode", "prefixCls", "backfill", "fieldNames", "inputValue", "searchValue", "onSearch", "autoClearSearchValue", "onSelect", "onDeselect", "dropdownMatchSelectWidth", "filterOption", "filterSort", "optionFilterProp", "optionLabelProp", "options", "children", "defaultActiveFirstOption", "menuItemSelectedIcon", "virtual", "listHeight", "listItemHeight", "value", "defaultValue", "labelInValue", "onChange"];

/**
 * To match accessibility requirement, we always provide an input in the component.
 * Other element will not set `tabIndex` to avoid `onBlur` sequence problem.
 * For focused select, we set `aria-live="polite"` to update the accessibility content.
 *
 * ref:
 * - keyboard: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role#Keyboard_interactions
 *
 * New api:
 * - listHeight
 * - listItemHeight
 * - component
 *
 * Remove deprecated api:
 * - multiple
 * - tags
 * - combobox
 * - firstActiveValue
 * - dropdownMenuStyle
 * - openClassName (Not list in api)
 *
 * Update:
 * - `backfill` only support `combobox` mode
 * - `combobox` mode not support `labelInValue` since it's meaningless
 * - `getInputElement` only support `combobox` mode
 * - `onChange` return OptionData instead of ReactNode
 * - `filterOption` `onChange` `onSelect` accept OptionData instead of ReactNode
 * - `combobox` mode trigger `onChange` will get `undefined` if no `value` match in Option
 * - `combobox` mode not support `optionLabelProp`
 */
















var OMIT_DOM_PROPS = ['inputValue'];

function isRawValue(value) {
  return !value || (0,esm_typeof/* default */.Z)(value) !== 'object';
}

var Select = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var id = props.id,
      mode = props.mode,
      _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-select' : _props$prefixCls,
      backfill = props.backfill,
      fieldNames = props.fieldNames,
      inputValue = props.inputValue,
      searchValue = props.searchValue,
      onSearch = props.onSearch,
      _props$autoClearSearc = props.autoClearSearchValue,
      autoClearSearchValue = _props$autoClearSearc === void 0 ? true : _props$autoClearSearc,
      onSelect = props.onSelect,
      onDeselect = props.onDeselect,
      _props$dropdownMatchS = props.dropdownMatchSelectWidth,
      dropdownMatchSelectWidth = _props$dropdownMatchS === void 0 ? true : _props$dropdownMatchS,
      filterOption = props.filterOption,
      filterSort = props.filterSort,
      optionFilterProp = props.optionFilterProp,
      optionLabelProp = props.optionLabelProp,
      options = props.options,
      children = props.children,
      defaultActiveFirstOption = props.defaultActiveFirstOption,
      menuItemSelectedIcon = props.menuItemSelectedIcon,
      virtual = props.virtual,
      _props$listHeight = props.listHeight,
      listHeight = _props$listHeight === void 0 ? 200 : _props$listHeight,
      _props$listItemHeight = props.listItemHeight,
      listItemHeight = _props$listItemHeight === void 0 ? 20 : _props$listItemHeight,
      value = props.value,
      defaultValue = props.defaultValue,
      labelInValue = props.labelInValue,
      onChange = props.onChange,
      restProps = (0,objectWithoutProperties/* default */.Z)(props, Select_excluded);

  var mergedId = useId(id);
  var multiple = BaseSelect_isMultiple(mode);
  var childrenAsData = !!(!options && children);
  var mergedFilterOption = react.useMemo(function () {
    if (filterOption === undefined && mode === 'combobox') {
      return false;
    }

    return filterOption;
  }, [filterOption, mode]); // ========================= FieldNames =========================

  var mergedFieldNames = react.useMemo(function () {
    return fillFieldNames(fieldNames, childrenAsData);
  },
  /* eslint-disable react-hooks/exhaustive-deps */
  [// We stringify fieldNames to avoid unnecessary re-renders.
  JSON.stringify(fieldNames), childrenAsData]); // =========================== Search ===========================

  var _useMergedState = (0,useMergedState/* default */.Z)('', {
    value: searchValue !== undefined ? searchValue : inputValue,
    postState: function postState(search) {
      return search || '';
    }
  }),
      _useMergedState2 = (0,slicedToArray/* default */.Z)(_useMergedState, 2),
      mergedSearchValue = _useMergedState2[0],
      setSearchValue = _useMergedState2[1]; // =========================== Option ===========================


  var parsedOptions = useOptions(options, children, mergedFieldNames);
  var valueOptions = parsedOptions.valueOptions,
      labelOptions = parsedOptions.labelOptions,
      mergedOptions = parsedOptions.options; // ========================= Wrap Value =========================

  var convert2LabelValues = react.useCallback(function (draftValues) {
    // Convert to array
    var valueList = commonUtil_toArray(draftValues); // Convert to labelInValue type

    return valueList.map(function (val) {
      var rawValue;
      var rawLabel;
      var rawKey;
      var rawDisabled; // Fill label & value

      if (isRawValue(val)) {
        rawValue = val;
      } else {
        var _val$value;

        rawKey = val.key;
        rawLabel = val.label;
        rawValue = (_val$value = val.value) !== null && _val$value !== void 0 ? _val$value : rawKey;
      }

      var option = valueOptions.get(rawValue);

      if (option) {
        var _option$key;

        // Fill missing props
        if (rawLabel === undefined) rawLabel = option === null || option === void 0 ? void 0 : option[optionLabelProp || mergedFieldNames.label];
        if (rawKey === undefined) rawKey = (_option$key = option === null || option === void 0 ? void 0 : option.key) !== null && _option$key !== void 0 ? _option$key : rawValue;
        rawDisabled = option === null || option === void 0 ? void 0 : option.disabled; // Warning if label not same as provided

        if (false) { var optionLabel; }
      }

      return {
        label: rawLabel,
        value: rawValue,
        key: rawKey,
        disabled: rawDisabled
      };
    });
  }, [mergedFieldNames, optionLabelProp, valueOptions]); // =========================== Values ===========================

  var _useMergedState3 = (0,useMergedState/* default */.Z)(defaultValue, {
    value: value
  }),
      _useMergedState4 = (0,slicedToArray/* default */.Z)(_useMergedState3, 2),
      internalValue = _useMergedState4[0],
      setInternalValue = _useMergedState4[1]; // Merged value with LabelValueType


  var rawLabeledValues = react.useMemo(function () {
    var _values$;

    var values = convert2LabelValues(internalValue); // combobox no need save value when it's empty

    if (mode === 'combobox' && !((_values$ = values[0]) === null || _values$ === void 0 ? void 0 : _values$.value)) {
      return [];
    }

    return values;
  }, [internalValue, convert2LabelValues, mode]); // Fill label with cache to avoid option remove

  var _useCache = useCache(rawLabeledValues, valueOptions),
      _useCache2 = (0,slicedToArray/* default */.Z)(_useCache, 2),
      mergedValues = _useCache2[0],
      getMixedOption = _useCache2[1];

  var displayValues = react.useMemo(function () {
    // `null` need show as placeholder instead
    // https://github.com/ant-design/ant-design/issues/25057
    if (!mode && mergedValues.length === 1) {
      var firstValue = mergedValues[0];

      if (firstValue.value === null && (firstValue.label === null || firstValue.label === undefined)) {
        return [];
      }
    }

    return mergedValues.map(function (item) {
      var _item$label;

      return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, item), {}, {
        label: (_item$label = item.label) !== null && _item$label !== void 0 ? _item$label : item.value
      });
    });
  }, [mode, mergedValues]);
  /** Convert `displayValues` to raw value type set */

  var rawValues = react.useMemo(function () {
    return new Set(mergedValues.map(function (val) {
      return val.value;
    }));
  }, [mergedValues]);
  react.useEffect(function () {
    if (mode === 'combobox') {
      var _mergedValues$;

      var strValue = (_mergedValues$ = mergedValues[0]) === null || _mergedValues$ === void 0 ? void 0 : _mergedValues$.value;

      if (strValue !== undefined && strValue !== null) {
        setSearchValue(String(strValue));
      }
    }
  }, [mergedValues]); // ======================= Display Option =======================
  // Create a placeholder item if not exist in `options`

  var createTagOption = useRefFunc(function (val, label) {
    var _ref;

    var mergedLabel = label !== null && label !== void 0 ? label : val;
    return _ref = {}, (0,defineProperty/* default */.Z)(_ref, mergedFieldNames.value, val), (0,defineProperty/* default */.Z)(_ref, mergedFieldNames.label, mergedLabel), _ref;
  }); // Fill tag as option if mode is `tags`

  var filledTagOptions = react.useMemo(function () {
    if (mode !== 'tags') {
      return mergedOptions;
    } // >>> Tag mode


    var cloneOptions = (0,toConsumableArray/* default */.Z)(mergedOptions); // Check if value exist in options (include new patch item)


    var existOptions = function existOptions(val) {
      return valueOptions.has(val);
    }; // Fill current value as option


    (0,toConsumableArray/* default */.Z)(mergedValues).sort(function (a, b) {
      return a.value < b.value ? -1 : 1;
    }).forEach(function (item) {
      var val = item.value;

      if (!existOptions(val)) {
        cloneOptions.push(createTagOption(val, item.label));
      }
    });

    return cloneOptions;
  }, [createTagOption, mergedOptions, valueOptions, mergedValues, mode]);
  var filteredOptions = useFilterOptions(filledTagOptions, mergedFieldNames, mergedSearchValue, mergedFilterOption, optionFilterProp); // Fill options with search value if needed

  var filledSearchOptions = react.useMemo(function () {
    if (mode !== 'tags' || !mergedSearchValue || filteredOptions.some(function (item) {
      return item[optionFilterProp || 'value'] === mergedSearchValue;
    })) {
      return filteredOptions;
    } // Fill search value as option


    return [createTagOption(mergedSearchValue)].concat((0,toConsumableArray/* default */.Z)(filteredOptions));
  }, [createTagOption, optionFilterProp, mode, filteredOptions, mergedSearchValue]);
  var orderedFilteredOptions = react.useMemo(function () {
    if (!filterSort) {
      return filledSearchOptions;
    }

    return (0,toConsumableArray/* default */.Z)(filledSearchOptions).sort(function (a, b) {
      return filterSort(a, b);
    });
  }, [filledSearchOptions, filterSort]);
  var displayOptions = react.useMemo(function () {
    return flattenOptions(orderedFilteredOptions, {
      fieldNames: mergedFieldNames,
      childrenAsData: childrenAsData
    });
  }, [orderedFilteredOptions, mergedFieldNames, childrenAsData]); // =========================== Change ===========================

  var triggerChange = function triggerChange(values) {
    var labeledValues = convert2LabelValues(values);
    setInternalValue(labeledValues);

    if (onChange && ( // Trigger event only when value changed
    labeledValues.length !== mergedValues.length || labeledValues.some(function (newVal, index) {
      var _mergedValues$index;

      return ((_mergedValues$index = mergedValues[index]) === null || _mergedValues$index === void 0 ? void 0 : _mergedValues$index.value) !== (newVal === null || newVal === void 0 ? void 0 : newVal.value);
    }))) {
      var returnValues = labelInValue ? labeledValues : labeledValues.map(function (v) {
        return v.value;
      });
      var returnOptions = labeledValues.map(function (v) {
        return injectPropsWithOption(getMixedOption(v.value));
      });
      onChange( // Value
      multiple ? returnValues : returnValues[0], // Option
      multiple ? returnOptions : returnOptions[0]);
    }
  }; // ======================= Accessibility ========================


  var _React$useState = react.useState(null),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      activeValue = _React$useState2[0],
      setActiveValue = _React$useState2[1];

  var _React$useState3 = react.useState(0),
      _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
      accessibilityIndex = _React$useState4[0],
      setAccessibilityIndex = _React$useState4[1];

  var mergedDefaultActiveFirstOption = defaultActiveFirstOption !== undefined ? defaultActiveFirstOption : mode !== 'combobox';
  var onActiveValue = react.useCallback(function (active, index) {
    var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        _ref2$source = _ref2.source,
        source = _ref2$source === void 0 ? 'keyboard' : _ref2$source;

    setAccessibilityIndex(index);

    if (backfill && mode === 'combobox' && active !== null && source === 'keyboard') {
      setActiveValue(String(active));
    }
  }, [backfill, mode]); // ========================= OptionList =========================

  var triggerSelect = function triggerSelect(val, selected) {
    var getSelectEnt = function getSelectEnt() {
      var _option$key2;

      var option = getMixedOption(val);
      return [labelInValue ? {
        label: option === null || option === void 0 ? void 0 : option[mergedFieldNames.label],
        value: val,
        key: (_option$key2 = option.key) !== null && _option$key2 !== void 0 ? _option$key2 : val
      } : val, injectPropsWithOption(option)];
    };

    if (selected && onSelect) {
      var _getSelectEnt = getSelectEnt(),
          _getSelectEnt2 = (0,slicedToArray/* default */.Z)(_getSelectEnt, 2),
          wrappedValue = _getSelectEnt2[0],
          option = _getSelectEnt2[1];

      onSelect(wrappedValue, option);
    } else if (!selected && onDeselect) {
      var _getSelectEnt3 = getSelectEnt(),
          _getSelectEnt4 = (0,slicedToArray/* default */.Z)(_getSelectEnt3, 2),
          _wrappedValue = _getSelectEnt4[0],
          _option = _getSelectEnt4[1];

      onDeselect(_wrappedValue, _option);
    }
  }; // Used for OptionList selection


  var onInternalSelect = useRefFunc(function (val, info) {
    var cloneValues; // Single mode always trigger select only with option list

    var mergedSelect = multiple ? info.selected : true;

    if (mergedSelect) {
      cloneValues = multiple ? [].concat((0,toConsumableArray/* default */.Z)(mergedValues), [val]) : [val];
    } else {
      cloneValues = mergedValues.filter(function (v) {
        return v.value !== val;
      });
    }

    triggerChange(cloneValues);
    triggerSelect(val, mergedSelect); // Clean search value if single or configured

    if (mode === 'combobox') {
      // setSearchValue(String(val));
      setActiveValue('');
    } else if (!BaseSelect_isMultiple || autoClearSearchValue) {
      setSearchValue('');
      setActiveValue('');
    }
  }); // ======================= Display Change =======================
  // BaseSelect display values change

  var onDisplayValuesChange = function onDisplayValuesChange(nextValues, info) {
    triggerChange(nextValues);

    if (info.type === 'remove' || info.type === 'clear') {
      info.values.forEach(function (item) {
        triggerSelect(item.value, false);
      });
    }
  }; // =========================== Search ===========================


  var onInternalSearch = function onInternalSearch(searchText, info) {
    setSearchValue(searchText);
    setActiveValue(null); // [Submit] Tag mode should flush input

    if (info.source === 'submit') {
      var formatted = (searchText || '').trim(); // prevent empty tags from appearing when you click the Enter button

      if (formatted) {
        var newRawValues = Array.from(new Set([].concat((0,toConsumableArray/* default */.Z)(rawValues), [formatted])));
        triggerChange(newRawValues);
        triggerSelect(formatted, true);
        setSearchValue('');
      }

      return;
    }

    if (info.source !== 'blur') {
      if (mode === 'combobox') {
        triggerChange(searchText);
      }

      onSearch === null || onSearch === void 0 ? void 0 : onSearch(searchText);
    }
  };

  var onInternalSearchSplit = function onInternalSearchSplit(words) {
    var patchValues = words;

    if (mode !== 'tags') {
      patchValues = words.map(function (word) {
        var opt = labelOptions.get(word);
        return opt === null || opt === void 0 ? void 0 : opt.value;
      }).filter(function (val) {
        return val !== undefined;
      });
    }

    var newRawValues = Array.from(new Set([].concat((0,toConsumableArray/* default */.Z)(rawValues), (0,toConsumableArray/* default */.Z)(patchValues))));
    triggerChange(newRawValues);
    newRawValues.forEach(function (newRawValue) {
      triggerSelect(newRawValue, true);
    });
  }; // ========================== Context ===========================


  var selectContext = react.useMemo(function () {
    var realVirtual = virtual !== false && dropdownMatchSelectWidth !== false;
    return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, parsedOptions), {}, {
      flattenOptions: displayOptions,
      onActiveValue: onActiveValue,
      defaultActiveFirstOption: mergedDefaultActiveFirstOption,
      onSelect: onInternalSelect,
      menuItemSelectedIcon: menuItemSelectedIcon,
      rawValues: rawValues,
      fieldNames: mergedFieldNames,
      virtual: realVirtual,
      listHeight: listHeight,
      listItemHeight: listItemHeight,
      childrenAsData: childrenAsData
    });
  }, [parsedOptions, displayOptions, onActiveValue, mergedDefaultActiveFirstOption, onInternalSelect, menuItemSelectedIcon, rawValues, mergedFieldNames, virtual, dropdownMatchSelectWidth, listHeight, listItemHeight, childrenAsData]); // ========================== Warning ===========================

  if (false) {} // ==============================================================
  // ==                          Render                          ==
  // ==============================================================


  return /*#__PURE__*/react.createElement(es_SelectContext.Provider, {
    value: selectContext
  }, /*#__PURE__*/react.createElement(es_BaseSelect, (0,esm_extends/* default */.Z)({}, restProps, {
    // >>> MISC
    id: mergedId,
    prefixCls: prefixCls,
    ref: ref,
    omitDomProps: OMIT_DOM_PROPS,
    mode: mode // >>> Values
    ,
    displayValues: displayValues,
    onDisplayValuesChange: onDisplayValuesChange // >>> Search
    ,
    searchValue: mergedSearchValue,
    onSearch: onInternalSearch,
    onSearchSplit: onInternalSearchSplit,
    dropdownMatchSelectWidth: dropdownMatchSelectWidth // >>> OptionList
    ,
    OptionList: es_OptionList,
    emptyOptions: !displayOptions.length // >>> Accessibility
    ,
    activeValue: activeValue,
    activeDescendantId: "".concat(mergedId, "_list_").concat(accessibilityIndex)
  })));
});

if (false) {}

var TypedSelect = Select;
TypedSelect.Option = es_Option;
TypedSelect.OptGroup = es_OptGroup;
/* harmony default export */ var es_Select = (TypedSelect);
;// CONCATENATED MODULE: ./node_modules/rc-select/es/index.js






/* harmony default export */ var rc_select_es = (es_Select);
;// CONCATENATED MODULE: ./node_modules/rc-cascader/es/utils/commonUtil.js
var VALUE_SPLIT = '__RC_CASCADER_SPLIT__';
function toPathKey(value) {
  return value.join(VALUE_SPLIT);
}
function toPathKeys(value) {
  return value.map(toPathKey);
}
function toPathValueStr(pathKey) {
  return pathKey.split(VALUE_SPLIT);
}
function commonUtil_fillFieldNames(fieldNames) {
  var _ref = fieldNames || {},
      label = _ref.label,
      value = _ref.value,
      children = _ref.children;

  var val = value || 'value';
  return {
    label: label || 'label',
    value: val,
    key: val,
    children: children || 'children'
  };
}
function isLeaf(option, fieldNames) {
  var _option$isLeaf, _option$fieldNames$ch;

  return (_option$isLeaf = option.isLeaf) !== null && _option$isLeaf !== void 0 ? _option$isLeaf : !((_option$fieldNames$ch = option[fieldNames.children]) === null || _option$fieldNames$ch === void 0 ? void 0 : _option$fieldNames$ch.length);
}
;// CONCATENATED MODULE: ./node_modules/rc-cascader/es/context.js

var CascaderContext = /*#__PURE__*/react.createContext(null);
/* harmony default export */ var context = (CascaderContext);
;// CONCATENATED MODULE: ./node_modules/rc-cascader/es/OptionList/Checkbox.js




function Checkbox(_ref) {
  var _classNames;

  var prefixCls = _ref.prefixCls,
      checked = _ref.checked,
      halfChecked = _ref.halfChecked,
      disabled = _ref.disabled,
      onClick = _ref.onClick;

  var _React$useContext = react.useContext(context),
      checkable = _React$useContext.checkable;

  var customCheckbox = typeof checkable !== 'boolean' ? checkable : null;
  return /*#__PURE__*/react.createElement("span", {
    className: classnames_default()("".concat(prefixCls), (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-checked"), checked), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-indeterminate"), !checked && halfChecked), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames)),
    onClick: onClick
  }, customCheckbox);
}
;// CONCATENATED MODULE: ./node_modules/rc-cascader/es/hooks/useSearchOptions.js




var SEARCH_MARK = '__rc_cascader_search_mark__';

var defaultFilter = function defaultFilter(search, options, _ref) {
  var label = _ref.label;
  return options.some(function (opt) {
    return String(opt[label]).toLowerCase().includes(search.toLowerCase());
  });
};

var defaultRender = function defaultRender(inputValue, path, prefixCls, fieldNames) {
  return path.map(function (opt) {
    return opt[fieldNames.label];
  }).join(' / ');
};

/* harmony default export */ var useSearchOptions = (function (search, options, fieldNames, prefixCls, config, changeOnSelect) {
  var _config$filter = config.filter,
      filter = _config$filter === void 0 ? defaultFilter : _config$filter,
      _config$render = config.render,
      render = _config$render === void 0 ? defaultRender : _config$render,
      _config$limit = config.limit,
      limit = _config$limit === void 0 ? 50 : _config$limit,
      sort = config.sort;
  return react.useMemo(function () {
    var filteredOptions = [];

    if (!search) {
      return [];
    }

    function dig(list, pathOptions) {
      list.forEach(function (option) {
        // Perf saving when `sort` is disabled and `limit` is provided
        if (!sort && limit > 0 && filteredOptions.length >= limit) {
          return;
        }

        var connectedPathOptions = [].concat((0,toConsumableArray/* default */.Z)(pathOptions), [option]);
        var children = option[fieldNames.children]; // If current option is filterable

        if ( // If is leaf option
        !children || // If is changeOnSelect
        changeOnSelect) {
          if (filter(search, connectedPathOptions, {
            label: fieldNames.label
          })) {
            var _objectSpread2;

            filteredOptions.push((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, option), {}, (_objectSpread2 = {}, (0,defineProperty/* default */.Z)(_objectSpread2, fieldNames.label, render(search, connectedPathOptions, prefixCls, fieldNames)), (0,defineProperty/* default */.Z)(_objectSpread2, SEARCH_MARK, connectedPathOptions), _objectSpread2)));
          }
        }

        if (children) {
          dig(option[fieldNames.children], connectedPathOptions);
        }
      });
    }

    dig(options, []); // Do sort

    if (sort) {
      filteredOptions.sort(function (a, b) {
        return sort(a[SEARCH_MARK], b[SEARCH_MARK], search, fieldNames);
      });
    }

    return limit > 0 ? filteredOptions.slice(0, limit) : filteredOptions;
  }, [search, options, fieldNames, prefixCls, render, changeOnSelect, filter, sort, limit]);
});
;// CONCATENATED MODULE: ./node_modules/rc-cascader/es/OptionList/Column.js








function Column(_ref) {
  var prefixCls = _ref.prefixCls,
      multiple = _ref.multiple,
      options = _ref.options,
      activeValue = _ref.activeValue,
      prevValuePath = _ref.prevValuePath,
      onToggleOpen = _ref.onToggleOpen,
      onSelect = _ref.onSelect,
      onActive = _ref.onActive,
      checkedSet = _ref.checkedSet,
      halfCheckedSet = _ref.halfCheckedSet,
      loadingKeys = _ref.loadingKeys,
      isSelectable = _ref.isSelectable;
  var menuPrefixCls = "".concat(prefixCls, "-menu");
  var menuItemPrefixCls = "".concat(prefixCls, "-menu-item");

  var _React$useContext = react.useContext(context),
      fieldNames = _React$useContext.fieldNames,
      changeOnSelect = _React$useContext.changeOnSelect,
      expandTrigger = _React$useContext.expandTrigger,
      expandIcon = _React$useContext.expandIcon,
      loadingIcon = _React$useContext.loadingIcon,
      dropdownMenuColumnStyle = _React$useContext.dropdownMenuColumnStyle;

  var hoverOpen = expandTrigger === 'hover'; // ============================ Render ============================

  return /*#__PURE__*/react.createElement("ul", {
    className: menuPrefixCls,
    role: "menu"
  }, options.map(function (option) {
    var _classNames;

    var disabled = option.disabled;
    var searchOptions = option[SEARCH_MARK];
    var label = option[fieldNames.label];
    var value = option[fieldNames.value];
    var isMergedLeaf = isLeaf(option, fieldNames); // Get real value of option. Search option is different way.

    var fullPath = searchOptions ? searchOptions.map(function (opt) {
      return opt[fieldNames.value];
    }) : [].concat((0,toConsumableArray/* default */.Z)(prevValuePath), [value]);
    var fullPathKey = toPathKey(fullPath);
    var isLoading = loadingKeys.includes(fullPathKey); // >>>>> checked

    var checked = checkedSet.has(fullPathKey); // >>>>> halfChecked

    var halfChecked = halfCheckedSet.has(fullPathKey); // >>>>> Open

    var triggerOpenPath = function triggerOpenPath() {
      if (!disabled && (!hoverOpen || !isMergedLeaf)) {
        onActive(fullPath);
      }
    }; // >>>>> Selection


    var triggerSelect = function triggerSelect() {
      if (isSelectable(option)) {
        onSelect(fullPath, isMergedLeaf);
      }
    }; // >>>>> Title


    var title;

    if (typeof option.title === 'string') {
      title = option.title;
    } else if (typeof label === 'string') {
      title = label;
    } // >>>>> Render


    return /*#__PURE__*/react.createElement("li", {
      key: fullPathKey,
      className: classnames_default()(menuItemPrefixCls, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(menuItemPrefixCls, "-expand"), !isMergedLeaf), (0,defineProperty/* default */.Z)(_classNames, "".concat(menuItemPrefixCls, "-active"), activeValue === value), (0,defineProperty/* default */.Z)(_classNames, "".concat(menuItemPrefixCls, "-disabled"), disabled), (0,defineProperty/* default */.Z)(_classNames, "".concat(menuItemPrefixCls, "-loading"), isLoading), _classNames)),
      style: dropdownMenuColumnStyle,
      role: "menuitemcheckbox",
      title: title,
      "aria-checked": checked,
      "data-path-key": fullPathKey,
      onClick: function onClick() {
        triggerOpenPath();

        if (!multiple || isMergedLeaf) {
          triggerSelect();
        }
      },
      onDoubleClick: function onDoubleClick() {
        if (changeOnSelect) {
          onToggleOpen(false);
        }
      },
      onMouseEnter: function onMouseEnter() {
        if (hoverOpen) {
          triggerOpenPath();
        }
      },
      onMouseDown: function onMouseDown(e) {
        // Prevent selector from blurring
        e.preventDefault();
      }
    }, multiple && /*#__PURE__*/react.createElement(Checkbox, {
      prefixCls: "".concat(prefixCls, "-checkbox"),
      checked: checked,
      halfChecked: halfChecked,
      disabled: disabled,
      onClick: function onClick(e) {
        e.stopPropagation();
        triggerSelect();
      }
    }), /*#__PURE__*/react.createElement("div", {
      className: "".concat(menuItemPrefixCls, "-content")
    }, option[fieldNames.label]), !isLoading && expandIcon && !isMergedLeaf && /*#__PURE__*/react.createElement("div", {
      className: "".concat(menuItemPrefixCls, "-expand-icon")
    }, expandIcon), isLoading && loadingIcon && /*#__PURE__*/react.createElement("div", {
      className: "".concat(menuItemPrefixCls, "-loading-icon")
    }, loadingIcon));
  }));
}
;// CONCATENATED MODULE: ./node_modules/rc-cascader/es/OptionList/useActive.js




/**
 * Control the active open options path.
 */

/* harmony default export */ var useActive = (function () {
  var _useBaseProps = useBaseProps(),
      multiple = _useBaseProps.multiple,
      open = _useBaseProps.open;

  var _React$useContext = react.useContext(context),
      values = _React$useContext.values; // Record current dropdown active options
  // This also control the open status


  var _React$useState = react.useState([]),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      activeValueCells = _React$useState2[0],
      setActiveValueCells = _React$useState2[1];

  react.useEffect(function () {
    if (open && !multiple) {
      var firstValueCells = values[0];
      setActiveValueCells(firstValueCells || []);
    }
  },
  /* eslint-disable react-hooks/exhaustive-deps */
  [open]);
  return [activeValueCells, setActiveValueCells];
});
;// CONCATENATED MODULE: ./node_modules/rc-cascader/es/OptionList/useKeyboard.js






/* harmony default export */ var useKeyboard = (function (ref, options, fieldNames, activeValueCells, setActiveValueCells, containerRef, onKeyBoardSelect) {
  var _useBaseProps = useBaseProps(),
      direction = _useBaseProps.direction,
      searchValue = _useBaseProps.searchValue,
      toggleOpen = _useBaseProps.toggleOpen,
      open = _useBaseProps.open;

  var rtl = direction === 'rtl';

  var _React$useMemo = react.useMemo(function () {
    var activeIndex = -1;
    var currentOptions = options;
    var mergedActiveIndexes = [];
    var mergedActiveValueCells = [];
    var len = activeValueCells.length; // Fill validate active value cells and index

    var _loop = function _loop(i) {
      // Mark the active index for current options
      var nextActiveIndex = currentOptions.findIndex(function (option) {
        return option[fieldNames.value] === activeValueCells[i];
      });

      if (nextActiveIndex === -1) {
        return "break";
      }

      activeIndex = nextActiveIndex;
      mergedActiveIndexes.push(activeIndex);
      mergedActiveValueCells.push(activeValueCells[i]);
      currentOptions = currentOptions[activeIndex][fieldNames.children];
    };

    // Fill validate active value cells and index
    for (var i = 0; i < len; i += 1) {
      var _ret = _loop(i);

      if (_ret === "break") break;
    } // Fill last active options


    // Fill last active options
    var activeOptions = options;

    for (var _i = 0; _i < mergedActiveIndexes.length - 1; _i += 1) {
      activeOptions = activeOptions[mergedActiveIndexes[_i]][fieldNames.children];
    }

    return [mergedActiveValueCells, activeIndex, activeOptions];
  }, [activeValueCells, fieldNames, options]),
      _React$useMemo2 = (0,slicedToArray/* default */.Z)(_React$useMemo, 3),
      validActiveValueCells = _React$useMemo2[0],
      lastActiveIndex = _React$useMemo2[1],
      lastActiveOptions = _React$useMemo2[2]; // Update active value cells and scroll to target element


  var internalSetActiveValueCells = function internalSetActiveValueCells(next) {
    var _containerRef$current, _ele$scrollIntoView;

    setActiveValueCells(next);
    var ele = (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.querySelector("li[data-path-key=\"".concat(toPathKey(next), "\"]"));
    ele === null || ele === void 0 ? void 0 : (_ele$scrollIntoView = ele.scrollIntoView) === null || _ele$scrollIntoView === void 0 ? void 0 : _ele$scrollIntoView.call(ele, {
      block: 'nearest'
    });
  }; // Same options offset


  var offsetActiveOption = function offsetActiveOption(offset) {
    var len = lastActiveOptions.length;
    var currentIndex = lastActiveIndex;

    if (currentIndex === -1 && offset < 0) {
      currentIndex = len;
    }

    for (var i = 0; i < len; i += 1) {
      currentIndex = (currentIndex + offset + len) % len;
      var option = lastActiveOptions[currentIndex];

      if (option && !option.disabled) {
        var value = option[fieldNames.value];
        var nextActiveCells = validActiveValueCells.slice(0, -1).concat(value);
        internalSetActiveValueCells(nextActiveCells);
        return;
      }
    }
  }; // Different options offset


  var prevColumn = function prevColumn() {
    if (validActiveValueCells.length > 1) {
      var nextActiveCells = validActiveValueCells.slice(0, -1);
      internalSetActiveValueCells(nextActiveCells);
    } else {
      toggleOpen(false);
    }
  };

  var nextColumn = function nextColumn() {
    var _lastActiveOptions$la;

    var nextOptions = ((_lastActiveOptions$la = lastActiveOptions[lastActiveIndex]) === null || _lastActiveOptions$la === void 0 ? void 0 : _lastActiveOptions$la[fieldNames.children]) || [];
    var nextOption = nextOptions.find(function (option) {
      return !option.disabled;
    });

    if (nextOption) {
      var nextActiveCells = [].concat((0,toConsumableArray/* default */.Z)(validActiveValueCells), [nextOption[fieldNames.value]]);
      internalSetActiveValueCells(nextActiveCells);
    }
  };

  react.useImperativeHandle(ref, function () {
    return {
      // scrollTo: treeRef.current?.scrollTo,
      onKeyDown: function onKeyDown(event) {
        var which = event.which;

        switch (which) {
          // >>> Arrow keys
          case KeyCode/* default.UP */.Z.UP:
          case KeyCode/* default.DOWN */.Z.DOWN:
            {
              var offset = 0;

              if (which === KeyCode/* default.UP */.Z.UP) {
                offset = -1;
              } else if (which === KeyCode/* default.DOWN */.Z.DOWN) {
                offset = 1;
              }

              if (offset !== 0) {
                offsetActiveOption(offset);
              }

              break;
            }

          case KeyCode/* default.LEFT */.Z.LEFT:
            {
              if (rtl) {
                nextColumn();
              } else {
                prevColumn();
              }

              break;
            }

          case KeyCode/* default.RIGHT */.Z.RIGHT:
            {
              if (rtl) {
                prevColumn();
              } else {
                nextColumn();
              }

              break;
            }

          case KeyCode/* default.BACKSPACE */.Z.BACKSPACE:
            {
              if (!searchValue) {
                prevColumn();
              }

              break;
            }
          // >>> Select

          case KeyCode/* default.ENTER */.Z.ENTER:
            {
              if (validActiveValueCells.length) {
                onKeyBoardSelect(validActiveValueCells, lastActiveOptions[lastActiveIndex]);
              }

              break;
            }
          // >>> Close

          case KeyCode/* default.ESC */.Z.ESC:
            {
              toggleOpen(false);

              if (open) {
                event.stopPropagation();
              }
            }
        }
      },
      onKeyUp: function onKeyUp() {}
    };
  });
});
;// CONCATENATED MODULE: ./node_modules/rc-cascader/es/utils/treeUtil.js
function formatStrategyValues(pathKeys, getKeyPathEntities) {
  var valueSet = new Set(pathKeys);
  var keyPathEntities = getKeyPathEntities();
  return pathKeys.filter(function (key) {
    var entity = keyPathEntities[key];
    var parent = entity ? entity.parent : null;

    if (parent && !parent.node.disabled && valueSet.has(parent.key)) {
      return false;
    }

    return true;
  });
}
function toPathOptions(valueCells, options, fieldNames) {
  var stringMode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var currentList = options;
  var valueOptions = [];

  var _loop = function _loop(i) {
    var _currentList, _currentList2, _foundOption$fieldNam;

    var valueCell = valueCells[i];
    var foundIndex = (_currentList = currentList) === null || _currentList === void 0 ? void 0 : _currentList.findIndex(function (option) {
      var val = option[fieldNames.value];
      return stringMode ? String(val) === String(valueCell) : val === valueCell;
    });
    var foundOption = foundIndex !== -1 ? (_currentList2 = currentList) === null || _currentList2 === void 0 ? void 0 : _currentList2[foundIndex] : null;
    valueOptions.push({
      value: (_foundOption$fieldNam = foundOption === null || foundOption === void 0 ? void 0 : foundOption[fieldNames.value]) !== null && _foundOption$fieldNam !== void 0 ? _foundOption$fieldNam : valueCell,
      index: foundIndex,
      option: foundOption
    });
    currentList = foundOption === null || foundOption === void 0 ? void 0 : foundOption[fieldNames.children];
  };

  for (var i = 0; i < valueCells.length; i += 1) {
    _loop(i);
  }

  return valueOptions;
}
;// CONCATENATED MODULE: ./node_modules/rc-cascader/es/OptionList/index.js






/* eslint-disable default-case */









var OptionList_RefOptionList = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _optionColumns$, _optionColumns$$optio, _ref3, _classNames;

  var _useBaseProps = useBaseProps(),
      prefixCls = _useBaseProps.prefixCls,
      multiple = _useBaseProps.multiple,
      searchValue = _useBaseProps.searchValue,
      toggleOpen = _useBaseProps.toggleOpen,
      notFoundContent = _useBaseProps.notFoundContent,
      direction = _useBaseProps.direction;

  var containerRef = react.useRef();
  var rtl = direction === 'rtl';

  var _React$useContext = react.useContext(context),
      options = _React$useContext.options,
      values = _React$useContext.values,
      halfValues = _React$useContext.halfValues,
      fieldNames = _React$useContext.fieldNames,
      changeOnSelect = _React$useContext.changeOnSelect,
      onSelect = _React$useContext.onSelect,
      searchOptions = _React$useContext.searchOptions,
      dropdownPrefixCls = _React$useContext.dropdownPrefixCls,
      loadData = _React$useContext.loadData,
      expandTrigger = _React$useContext.expandTrigger;

  var mergedPrefixCls = dropdownPrefixCls || prefixCls; // ========================= loadData =========================

  var _React$useState = react.useState([]),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      loadingKeys = _React$useState2[0],
      setLoadingKeys = _React$useState2[1];

  var internalLoadData = function internalLoadData(valueCells) {
    // Do not load when search
    if (!loadData || searchValue) {
      return;
    }

    var optionList = toPathOptions(valueCells, options, fieldNames);
    var rawOptions = optionList.map(function (_ref) {
      var option = _ref.option;
      return option;
    });
    var lastOption = rawOptions[rawOptions.length - 1];

    if (lastOption && !isLeaf(lastOption, fieldNames)) {
      var pathKey = toPathKey(valueCells);
      setLoadingKeys(function (keys) {
        return [].concat((0,toConsumableArray/* default */.Z)(keys), [pathKey]);
      });
      loadData(rawOptions);
    }
  }; // zombieJ: This is bad. We should make this same as `rc-tree` to use Promise instead.


  react.useEffect(function () {
    if (loadingKeys.length) {
      loadingKeys.forEach(function (loadingKey) {
        var valueStrCells = toPathValueStr(loadingKey);
        var optionList = toPathOptions(valueStrCells, options, fieldNames, true).map(function (_ref2) {
          var option = _ref2.option;
          return option;
        });
        var lastOption = optionList[optionList.length - 1];

        if (!lastOption || lastOption[fieldNames.children] || isLeaf(lastOption, fieldNames)) {
          setLoadingKeys(function (keys) {
            return keys.filter(function (key) {
              return key !== loadingKey;
            });
          });
        }
      });
    }
  }, [options, loadingKeys, fieldNames]); // ========================== Values ==========================

  var checkedSet = react.useMemo(function () {
    return new Set(toPathKeys(values));
  }, [values]);
  var halfCheckedSet = react.useMemo(function () {
    return new Set(toPathKeys(halfValues));
  }, [halfValues]); // ====================== Accessibility =======================

  var _useActive = useActive(),
      _useActive2 = (0,slicedToArray/* default */.Z)(_useActive, 2),
      activeValueCells = _useActive2[0],
      setActiveValueCells = _useActive2[1]; // =========================== Path ===========================


  var onPathOpen = function onPathOpen(nextValueCells) {
    setActiveValueCells(nextValueCells); // Trigger loadData

    internalLoadData(nextValueCells);
  };

  var isSelectable = function isSelectable(option) {
    var disabled = option.disabled;
    var isMergedLeaf = isLeaf(option, fieldNames);
    return !disabled && (isMergedLeaf || changeOnSelect || multiple);
  };

  var onPathSelect = function onPathSelect(valuePath, leaf) {
    var fromKeyboard = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    onSelect(valuePath);

    if (!multiple && (leaf || changeOnSelect && (expandTrigger === 'hover' || fromKeyboard))) {
      toggleOpen(false);
    }
  }; // ========================== Option ==========================


  var mergedOptions = react.useMemo(function () {
    if (searchValue) {
      return searchOptions;
    }

    return options;
  }, [searchValue, searchOptions, options]); // ========================== Column ==========================

  var optionColumns = react.useMemo(function () {
    var optionList = [{
      options: mergedOptions
    }];
    var currentList = mergedOptions;

    var _loop = function _loop(i) {
      var activeValueCell = activeValueCells[i];
      var currentOption = currentList.find(function (option) {
        return option[fieldNames.value] === activeValueCell;
      });
      var subOptions = currentOption === null || currentOption === void 0 ? void 0 : currentOption[fieldNames.children];

      if (!(subOptions === null || subOptions === void 0 ? void 0 : subOptions.length)) {
        return "break";
      }

      currentList = subOptions;
      optionList.push({
        options: subOptions
      });
    };

    for (var i = 0; i < activeValueCells.length; i += 1) {
      var _ret = _loop(i);

      if (_ret === "break") break;
    }

    return optionList;
  }, [mergedOptions, activeValueCells, fieldNames]); // ========================= Keyboard =========================

  var onKeyboardSelect = function onKeyboardSelect(selectValueCells, option) {
    if (isSelectable(option)) {
      onPathSelect(selectValueCells, isLeaf(option, fieldNames), true);
    }
  };

  useKeyboard(ref, mergedOptions, fieldNames, activeValueCells, onPathOpen, containerRef, onKeyboardSelect); // ========================== Render ==========================
  // >>>>> Empty

  var isEmpty = !((_optionColumns$ = optionColumns[0]) === null || _optionColumns$ === void 0 ? void 0 : (_optionColumns$$optio = _optionColumns$.options) === null || _optionColumns$$optio === void 0 ? void 0 : _optionColumns$$optio.length);
  var emptyList = [(_ref3 = {}, (0,defineProperty/* default */.Z)(_ref3, fieldNames.label, notFoundContent), (0,defineProperty/* default */.Z)(_ref3, fieldNames.value, '__EMPTY__'), (0,defineProperty/* default */.Z)(_ref3, "disabled", true), _ref3)];

  var columnProps = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    multiple: !isEmpty && multiple,
    onSelect: onPathSelect,
    onActive: onPathOpen,
    onToggleOpen: toggleOpen,
    checkedSet: checkedSet,
    halfCheckedSet: halfCheckedSet,
    loadingKeys: loadingKeys,
    isSelectable: isSelectable
  }); // >>>>> Columns


  var mergedOptionColumns = isEmpty ? [{
    options: emptyList
  }] : optionColumns;
  var columnNodes = mergedOptionColumns.map(function (col, index) {
    var prevValuePath = activeValueCells.slice(0, index);
    var activeValue = activeValueCells[index];
    return /*#__PURE__*/react.createElement(Column, (0,esm_extends/* default */.Z)({
      key: index
    }, columnProps, {
      prefixCls: mergedPrefixCls,
      options: col.options,
      prevValuePath: prevValuePath,
      activeValue: activeValue
    }));
  }); // >>>>> Render

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: classnames_default()("".concat(mergedPrefixCls, "-menus"), (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(mergedPrefixCls, "-menu-empty"), isEmpty), (0,defineProperty/* default */.Z)(_classNames, "".concat(mergedPrefixCls, "-rtl"), rtl), _classNames)),
    ref: containerRef
  }, columnNodes));
});
/* harmony default export */ var rc_cascader_es_OptionList = (OptionList_RefOptionList);
;// CONCATENATED MODULE: ./node_modules/rc-cascader/es/hooks/useDisplayValues.js





/* harmony default export */ var useDisplayValues = (function (rawValues, options, fieldNames, multiple, displayRender) {
  return react.useMemo(function () {
    var mergedDisplayRender = displayRender || // Default displayRender
    function (labels) {
      var mergedLabels = multiple ? labels.slice(-1) : labels;
      var SPLIT = ' / ';

      if (mergedLabels.every(function (label) {
        return ['string', 'number'].includes((0,esm_typeof/* default */.Z)(label));
      })) {
        return mergedLabels.join(SPLIT);
      } // If exist non-string value, use ReactNode instead


      return mergedLabels.reduce(function (list, label, index) {
        var keyedLabel = /*#__PURE__*/react.isValidElement(label) ? /*#__PURE__*/react.cloneElement(label, {
          key: index
        }) : label;

        if (index === 0) {
          return [keyedLabel];
        }

        return [].concat((0,toConsumableArray/* default */.Z)(list), [SPLIT, keyedLabel]);
      }, []);
    };

    return rawValues.map(function (valueCells) {
      var valueOptions = toPathOptions(valueCells, options, fieldNames);
      var label = mergedDisplayRender(valueOptions.map(function (_ref) {
        var _option$fieldNames$la;

        var option = _ref.option,
            value = _ref.value;
        return (_option$fieldNames$la = option === null || option === void 0 ? void 0 : option[fieldNames.label]) !== null && _option$fieldNames$la !== void 0 ? _option$fieldNames$la : value;
      }), valueOptions.map(function (_ref2) {
        var option = _ref2.option;
        return option;
      }));
      return {
        label: label,
        value: toPathKey(valueCells),
        valueCells: valueCells
      };
    });
  }, [rawValues, options, fieldNames, displayRender, multiple]);
});
;// CONCATENATED MODULE: ./node_modules/rc-cascader/es/hooks/useRefFunc.js

/**
 * Same as `React.useCallback` but always return a memoized function
 * but redirect to real function.
 */

function useRefFunc_useRefFunc(callback) {
  var funcRef = react.useRef();
  funcRef.current = callback;
  var cacheFn = react.useCallback(function () {
    return funcRef.current.apply(funcRef, arguments);
  }, []);
  return cacheFn;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(3144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(7326);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(9340);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__(8557);
;// CONCATENATED MODULE: ./node_modules/rc-tree/es/contextTypes.js
/**
 * Webpack has bug for import loop, which is not the same behavior as ES module.
 * When util.js imports the TreeNode for tree generate will cause treeContextTypes be empty.
 */

var TreeContext = /*#__PURE__*/react.createContext(null);
;// CONCATENATED MODULE: ./node_modules/rc-tree/es/Indent.js




var Indent = function Indent(_ref) {
  var prefixCls = _ref.prefixCls,
      level = _ref.level,
      isStart = _ref.isStart,
      isEnd = _ref.isEnd;
  var baseClassName = "".concat(prefixCls, "-indent-unit");
  var list = [];

  for (var i = 0; i < level; i += 1) {
    var _classNames;

    list.push( /*#__PURE__*/react.createElement("span", {
      key: i,
      className: classnames_default()(baseClassName, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(baseClassName, "-start"), isStart[i]), (0,defineProperty/* default */.Z)(_classNames, "".concat(baseClassName, "-end"), isEnd[i]), _classNames))
    }));
  }

  return /*#__PURE__*/react.createElement("span", {
    "aria-hidden": "true",
    className: "".concat(prefixCls, "-indent")
  }, list);
};

/* harmony default export */ var es_Indent = (/*#__PURE__*/react.memo(Indent));
;// CONCATENATED MODULE: ./node_modules/rc-tree/es/TreeNode.js









var TreeNode_excluded = ["eventKey", "className", "style", "dragOver", "dragOverGapTop", "dragOverGapBottom", "isLeaf", "isStart", "isEnd", "expanded", "selected", "checked", "halfChecked", "loading", "domRef", "active", "data", "onMouseMove", "selectable"];


 // @ts-ignore




var ICON_OPEN = 'open';
var ICON_CLOSE = 'close';
var defaultTitle = '---';

var InternalTreeNode = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(InternalTreeNode, _React$Component);

  var _super = (0,createSuper/* default */.Z)(InternalTreeNode);

  function InternalTreeNode() {
    var _this;

    (0,classCallCheck/* default */.Z)(this, InternalTreeNode);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      dragNodeHighlight: false
    };
    _this.selectHandle = void 0;

    _this.onSelectorClick = function (e) {
      // Click trigger before select/check operation
      var onNodeClick = _this.props.context.onNodeClick;
      onNodeClick(e, convertNodePropsToEventData(_this.props));

      if (_this.isSelectable()) {
        _this.onSelect(e);
      } else {
        _this.onCheck(e);
      }
    };

    _this.onSelectorDoubleClick = function (e) {
      var onNodeDoubleClick = _this.props.context.onNodeDoubleClick;
      onNodeDoubleClick(e, convertNodePropsToEventData(_this.props));
    };

    _this.onSelect = function (e) {
      if (_this.isDisabled()) return;
      var onNodeSelect = _this.props.context.onNodeSelect;
      e.preventDefault();
      onNodeSelect(e, convertNodePropsToEventData(_this.props));
    };

    _this.onCheck = function (e) {
      if (_this.isDisabled()) return;
      var _this$props = _this.props,
          disableCheckbox = _this$props.disableCheckbox,
          checked = _this$props.checked;
      var onNodeCheck = _this.props.context.onNodeCheck;
      if (!_this.isCheckable() || disableCheckbox) return;
      e.preventDefault();
      var targetChecked = !checked;
      onNodeCheck(e, convertNodePropsToEventData(_this.props), targetChecked);
    };

    _this.onMouseEnter = function (e) {
      var onNodeMouseEnter = _this.props.context.onNodeMouseEnter;
      onNodeMouseEnter(e, convertNodePropsToEventData(_this.props));
    };

    _this.onMouseLeave = function (e) {
      var onNodeMouseLeave = _this.props.context.onNodeMouseLeave;
      onNodeMouseLeave(e, convertNodePropsToEventData(_this.props));
    };

    _this.onContextMenu = function (e) {
      var onNodeContextMenu = _this.props.context.onNodeContextMenu;
      onNodeContextMenu(e, convertNodePropsToEventData(_this.props));
    };

    _this.onDragStart = function (e) {
      var onNodeDragStart = _this.props.context.onNodeDragStart;
      e.stopPropagation();

      _this.setState({
        dragNodeHighlight: true
      });

      onNodeDragStart(e, (0,assertThisInitialized/* default */.Z)(_this));

      try {
        // ie throw error
        // firefox-need-it
        e.dataTransfer.setData('text/plain', '');
      } catch (error) {// empty
      }
    };

    _this.onDragEnter = function (e) {
      var onNodeDragEnter = _this.props.context.onNodeDragEnter;
      e.preventDefault();
      e.stopPropagation();
      onNodeDragEnter(e, (0,assertThisInitialized/* default */.Z)(_this));
    };

    _this.onDragOver = function (e) {
      var onNodeDragOver = _this.props.context.onNodeDragOver;
      e.preventDefault();
      e.stopPropagation();
      onNodeDragOver(e, (0,assertThisInitialized/* default */.Z)(_this));
    };

    _this.onDragLeave = function (e) {
      var onNodeDragLeave = _this.props.context.onNodeDragLeave;
      e.stopPropagation();
      onNodeDragLeave(e, (0,assertThisInitialized/* default */.Z)(_this));
    };

    _this.onDragEnd = function (e) {
      var onNodeDragEnd = _this.props.context.onNodeDragEnd;
      e.stopPropagation();

      _this.setState({
        dragNodeHighlight: false
      });

      onNodeDragEnd(e, (0,assertThisInitialized/* default */.Z)(_this));
    };

    _this.onDrop = function (e) {
      var onNodeDrop = _this.props.context.onNodeDrop;
      e.preventDefault();
      e.stopPropagation();

      _this.setState({
        dragNodeHighlight: false
      });

      onNodeDrop(e, (0,assertThisInitialized/* default */.Z)(_this));
    };

    _this.onExpand = function (e) {
      var _this$props2 = _this.props,
          loading = _this$props2.loading,
          onNodeExpand = _this$props2.context.onNodeExpand;
      if (loading) return;
      onNodeExpand(e, convertNodePropsToEventData(_this.props));
    };

    _this.setSelectHandle = function (node) {
      _this.selectHandle = node;
    };

    _this.getNodeState = function () {
      var expanded = _this.props.expanded;

      if (_this.isLeaf()) {
        return null;
      }

      return expanded ? ICON_OPEN : ICON_CLOSE;
    };

    _this.hasChildren = function () {
      var eventKey = _this.props.eventKey;
      var keyEntities = _this.props.context.keyEntities;

      var _ref = keyEntities[eventKey] || {},
          children = _ref.children;

      return !!(children || []).length;
    };

    _this.isLeaf = function () {
      var _this$props3 = _this.props,
          isLeaf = _this$props3.isLeaf,
          loaded = _this$props3.loaded;
      var loadData = _this.props.context.loadData;

      var hasChildren = _this.hasChildren();

      if (isLeaf === false) {
        return false;
      }

      return isLeaf || !loadData && !hasChildren || loadData && loaded && !hasChildren;
    };

    _this.isDisabled = function () {
      var disabled = _this.props.disabled;
      var treeDisabled = _this.props.context.disabled;
      return !!(treeDisabled || disabled);
    };

    _this.isCheckable = function () {
      var checkable = _this.props.checkable;
      var treeCheckable = _this.props.context.checkable; // Return false if tree or treeNode is not checkable

      if (!treeCheckable || checkable === false) return false;
      return treeCheckable;
    };

    _this.syncLoadData = function (props) {
      var expanded = props.expanded,
          loading = props.loading,
          loaded = props.loaded;
      var _this$props$context = _this.props.context,
          loadData = _this$props$context.loadData,
          onNodeLoad = _this$props$context.onNodeLoad;

      if (loading) {
        return;
      } // read from state to avoid loadData at same time


      if (loadData && expanded && !_this.isLeaf()) {
        // We needn't reload data when has children in sync logic
        // It's only needed in node expanded
        if (!_this.hasChildren() && !loaded) {
          onNodeLoad(convertNodePropsToEventData(_this.props));
        }
      }
    };

    _this.isDraggable = function () {
      var _this$props4 = _this.props,
          data = _this$props4.data,
          draggable = _this$props4.context.draggable;
      return !!(draggable && (!draggable.nodeDraggable || draggable.nodeDraggable(data)));
    };

    _this.renderDragHandler = function () {
      var _this$props$context2 = _this.props.context,
          draggable = _this$props$context2.draggable,
          prefixCls = _this$props$context2.prefixCls;
      return (draggable === null || draggable === void 0 ? void 0 : draggable.icon) ? /*#__PURE__*/react.createElement("span", {
        className: "".concat(prefixCls, "-draggable-icon")
      }, draggable.icon) : null;
    };

    _this.renderSwitcherIconDom = function (isLeaf) {
      var switcherIconFromProps = _this.props.switcherIcon;
      var switcherIconFromCtx = _this.props.context.switcherIcon;
      var switcherIcon = switcherIconFromProps || switcherIconFromCtx; // if switcherIconDom is null, no render switcher span

      if (typeof switcherIcon === 'function') {
        return switcherIcon((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, _this.props), {}, {
          isLeaf: isLeaf
        }));
      }

      return switcherIcon;
    };

    _this.renderSwitcher = function () {
      var expanded = _this.props.expanded;
      var prefixCls = _this.props.context.prefixCls;

      if (_this.isLeaf()) {
        // if switcherIconDom is null, no render switcher span
        var _switcherIconDom = _this.renderSwitcherIconDom(true);

        return _switcherIconDom !== false ? /*#__PURE__*/react.createElement("span", {
          className: classnames_default()("".concat(prefixCls, "-switcher"), "".concat(prefixCls, "-switcher-noop"))
        }, _switcherIconDom) : null;
      }

      var switcherCls = classnames_default()("".concat(prefixCls, "-switcher"), "".concat(prefixCls, "-switcher_").concat(expanded ? ICON_OPEN : ICON_CLOSE));

      var switcherIconDom = _this.renderSwitcherIconDom(false);

      return switcherIconDom !== false ? /*#__PURE__*/react.createElement("span", {
        onClick: _this.onExpand,
        className: switcherCls
      }, switcherIconDom) : null;
    };

    _this.renderCheckbox = function () {
      var _this$props5 = _this.props,
          checked = _this$props5.checked,
          halfChecked = _this$props5.halfChecked,
          disableCheckbox = _this$props5.disableCheckbox;
      var prefixCls = _this.props.context.prefixCls;

      var disabled = _this.isDisabled();

      var checkable = _this.isCheckable();

      if (!checkable) return null; // [Legacy] Custom element should be separate with `checkable` in future

      var $custom = typeof checkable !== 'boolean' ? checkable : null;
      return /*#__PURE__*/react.createElement("span", {
        className: classnames_default()("".concat(prefixCls, "-checkbox"), checked && "".concat(prefixCls, "-checkbox-checked"), !checked && halfChecked && "".concat(prefixCls, "-checkbox-indeterminate"), (disabled || disableCheckbox) && "".concat(prefixCls, "-checkbox-disabled")),
        onClick: _this.onCheck
      }, $custom);
    };

    _this.renderIcon = function () {
      var loading = _this.props.loading;
      var prefixCls = _this.props.context.prefixCls;
      return /*#__PURE__*/react.createElement("span", {
        className: classnames_default()("".concat(prefixCls, "-iconEle"), "".concat(prefixCls, "-icon__").concat(_this.getNodeState() || 'docu'), loading && "".concat(prefixCls, "-icon_loading"))
      });
    };

    _this.renderSelector = function () {
      var dragNodeHighlight = _this.state.dragNodeHighlight;
      var _this$props6 = _this.props,
          title = _this$props6.title,
          selected = _this$props6.selected,
          icon = _this$props6.icon,
          loading = _this$props6.loading,
          data = _this$props6.data;
      var _this$props$context3 = _this.props.context,
          prefixCls = _this$props$context3.prefixCls,
          showIcon = _this$props$context3.showIcon,
          treeIcon = _this$props$context3.icon,
          loadData = _this$props$context3.loadData,
          titleRender = _this$props$context3.titleRender;

      var disabled = _this.isDisabled();

      var wrapClass = "".concat(prefixCls, "-node-content-wrapper"); // Icon - Still show loading icon when loading without showIcon

      var $icon;

      if (showIcon) {
        var currentIcon = icon || treeIcon;
        $icon = currentIcon ? /*#__PURE__*/react.createElement("span", {
          className: classnames_default()("".concat(prefixCls, "-iconEle"), "".concat(prefixCls, "-icon__customize"))
        }, typeof currentIcon === 'function' ? currentIcon(_this.props) : currentIcon) : _this.renderIcon();
      } else if (loadData && loading) {
        $icon = _this.renderIcon();
      } // Title


      var titleNode;

      if (typeof title === 'function') {
        titleNode = title(data);
      } else if (titleRender) {
        titleNode = titleRender(data);
      } else {
        titleNode = title;
      }

      var $title = /*#__PURE__*/react.createElement("span", {
        className: "".concat(prefixCls, "-title")
      }, titleNode);
      return /*#__PURE__*/react.createElement("span", {
        ref: _this.setSelectHandle,
        title: typeof title === 'string' ? title : '',
        className: classnames_default()("".concat(wrapClass), "".concat(wrapClass, "-").concat(_this.getNodeState() || 'normal'), !disabled && (selected || dragNodeHighlight) && "".concat(prefixCls, "-node-selected")),
        onMouseEnter: _this.onMouseEnter,
        onMouseLeave: _this.onMouseLeave,
        onContextMenu: _this.onContextMenu,
        onClick: _this.onSelectorClick,
        onDoubleClick: _this.onSelectorDoubleClick
      }, $icon, $title, _this.renderDropIndicator());
    };

    _this.renderDropIndicator = function () {
      var _this$props7 = _this.props,
          disabled = _this$props7.disabled,
          eventKey = _this$props7.eventKey;
      var _this$props$context4 = _this.props.context,
          draggable = _this$props$context4.draggable,
          dropLevelOffset = _this$props$context4.dropLevelOffset,
          dropPosition = _this$props$context4.dropPosition,
          prefixCls = _this$props$context4.prefixCls,
          indent = _this$props$context4.indent,
          dropIndicatorRender = _this$props$context4.dropIndicatorRender,
          dragOverNodeKey = _this$props$context4.dragOverNodeKey,
          direction = _this$props$context4.direction;
      var rootDraggable = draggable !== false; // allowDrop is calculated in Tree.tsx, there is no need for calc it here

      var showIndicator = !disabled && rootDraggable && dragOverNodeKey === eventKey;
      return showIndicator ? dropIndicatorRender({
        dropPosition: dropPosition,
        dropLevelOffset: dropLevelOffset,
        indent: indent,
        prefixCls: prefixCls,
        direction: direction
      }) : null;
    };

    return _this;
  }

  (0,createClass/* default */.Z)(InternalTreeNode, [{
    key: "componentDidMount",
    value: // Isomorphic needn't load data in server side
    function componentDidMount() {
      this.syncLoadData(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.syncLoadData(this.props);
    }
  }, {
    key: "isSelectable",
    value: function isSelectable() {
      var selectable = this.props.selectable;
      var treeSelectable = this.props.context.selectable; // Ignore when selectable is undefined or null

      if (typeof selectable === 'boolean') {
        return selectable;
      }

      return treeSelectable;
    }
  }, {
    key: "render",
    value: // =========================== Render ===========================
    function render() {
      var _classNames;

      var _this$props8 = this.props,
          eventKey = _this$props8.eventKey,
          className = _this$props8.className,
          style = _this$props8.style,
          dragOver = _this$props8.dragOver,
          dragOverGapTop = _this$props8.dragOverGapTop,
          dragOverGapBottom = _this$props8.dragOverGapBottom,
          isLeaf = _this$props8.isLeaf,
          isStart = _this$props8.isStart,
          isEnd = _this$props8.isEnd,
          expanded = _this$props8.expanded,
          selected = _this$props8.selected,
          checked = _this$props8.checked,
          halfChecked = _this$props8.halfChecked,
          loading = _this$props8.loading,
          domRef = _this$props8.domRef,
          active = _this$props8.active,
          data = _this$props8.data,
          onMouseMove = _this$props8.onMouseMove,
          selectable = _this$props8.selectable,
          otherProps = (0,objectWithoutProperties/* default */.Z)(_this$props8, TreeNode_excluded);

      var _this$props$context5 = this.props.context,
          prefixCls = _this$props$context5.prefixCls,
          filterTreeNode = _this$props$context5.filterTreeNode,
          keyEntities = _this$props$context5.keyEntities,
          dropContainerKey = _this$props$context5.dropContainerKey,
          dropTargetKey = _this$props$context5.dropTargetKey,
          draggingNodeKey = _this$props$context5.draggingNodeKey;
      var disabled = this.isDisabled();
      var dataOrAriaAttributeProps = pickAttrs(otherProps, {
        aria: true,
        data: true
      });

      var _ref2 = keyEntities[eventKey] || {},
          level = _ref2.level;

      var isEndNode = isEnd[isEnd.length - 1];
      var mergedDraggable = this.isDraggable();
      var draggableWithoutDisabled = !disabled && mergedDraggable;
      var dragging = draggingNodeKey === eventKey;
      var ariaSelected = selectable !== undefined ? {
        'aria-selected': !!selectable
      } : undefined;
      return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
        ref: domRef,
        className: classnames_default()(className, "".concat(prefixCls, "-treenode"), (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-treenode-disabled"), disabled), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-treenode-switcher-").concat(expanded ? 'open' : 'close'), !isLeaf), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-treenode-checkbox-checked"), checked), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-treenode-checkbox-indeterminate"), halfChecked), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-treenode-selected"), selected), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-treenode-loading"), loading), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-treenode-active"), active), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-treenode-leaf-last"), isEndNode), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-treenode-draggable"), draggableWithoutDisabled), (0,defineProperty/* default */.Z)(_classNames, "dragging", dragging), (0,defineProperty/* default */.Z)(_classNames, 'drop-target', dropTargetKey === eventKey), (0,defineProperty/* default */.Z)(_classNames, 'drop-container', dropContainerKey === eventKey), (0,defineProperty/* default */.Z)(_classNames, 'drag-over', !disabled && dragOver), (0,defineProperty/* default */.Z)(_classNames, 'drag-over-gap-top', !disabled && dragOverGapTop), (0,defineProperty/* default */.Z)(_classNames, 'drag-over-gap-bottom', !disabled && dragOverGapBottom), (0,defineProperty/* default */.Z)(_classNames, 'filter-node', filterTreeNode && filterTreeNode(convertNodePropsToEventData(this.props))), _classNames)),
        style: style // Draggable config
        ,
        draggable: draggableWithoutDisabled,
        "aria-grabbed": dragging,
        onDragStart: draggableWithoutDisabled ? this.onDragStart : undefined // Drop config
        ,
        onDragEnter: mergedDraggable ? this.onDragEnter : undefined,
        onDragOver: mergedDraggable ? this.onDragOver : undefined,
        onDragLeave: mergedDraggable ? this.onDragLeave : undefined,
        onDrop: mergedDraggable ? this.onDrop : undefined,
        onDragEnd: mergedDraggable ? this.onDragEnd : undefined,
        onMouseMove: onMouseMove
      }, ariaSelected, dataOrAriaAttributeProps), /*#__PURE__*/react.createElement(es_Indent, {
        prefixCls: prefixCls,
        level: level,
        isStart: isStart,
        isEnd: isEnd
      }), this.renderDragHandler(), this.renderSwitcher(), this.renderCheckbox(), this.renderSelector());
    }
  }]);

  return InternalTreeNode;
}(react.Component);

var ContextTreeNode = function ContextTreeNode(props) {
  return /*#__PURE__*/react.createElement(TreeContext.Consumer, null, function (context) {
    return /*#__PURE__*/react.createElement(InternalTreeNode, (0,esm_extends/* default */.Z)({}, props, {
      context: context
    }));
  });
};

ContextTreeNode.displayName = 'TreeNode';
ContextTreeNode.defaultProps = {
  title: defaultTitle
};
ContextTreeNode.isTreeNode = 1;

/* harmony default export */ var es_TreeNode = (ContextTreeNode);
;// CONCATENATED MODULE: ./node_modules/rc-tree/es/util.js



var util_excluded = (/* unused pure expression or super */ null && (["children"]));

/* eslint-disable no-lonely-if */

/**
 * Legacy code. Should avoid to use if you are new to import these code.
 */



function arrDel(list, value) {
  if (!list) return [];
  var clone = list.slice();
  var index = clone.indexOf(value);

  if (index >= 0) {
    clone.splice(index, 1);
  }

  return clone;
}
function arrAdd(list, value) {
  var clone = (list || []).slice();

  if (clone.indexOf(value) === -1) {
    clone.push(value);
  }

  return clone;
}
function posToArr(pos) {
  return pos.split('-');
}
function getPosition(level, index) {
  return "".concat(level, "-").concat(index);
}
function isTreeNode(node) {
  return node && node.type && node.type.isTreeNode;
}
function getDragChildrenKeys(dragNodeKey, keyEntities) {
  // not contains self
  // self for left or right drag
  var dragChildrenKeys = [];
  var entity = keyEntities[dragNodeKey];

  function dig() {
    var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    list.forEach(function (_ref) {
      var key = _ref.key,
          children = _ref.children;
      dragChildrenKeys.push(key);
      dig(children);
    });
  }

  dig(entity.children);
  return dragChildrenKeys;
}
function isLastChild(treeNodeEntity) {
  if (treeNodeEntity.parent) {
    var posArr = posToArr(treeNodeEntity.pos);
    return Number(posArr[posArr.length - 1]) === treeNodeEntity.parent.children.length - 1;
  }

  return false;
}
function isFirstChild(treeNodeEntity) {
  var posArr = posToArr(treeNodeEntity.pos);
  return Number(posArr[posArr.length - 1]) === 0;
} // Only used when drag, not affect SSR.

function calcDropPosition(event, dragNode, targetNode, indent, startMousePosition, allowDrop, flattenedNodes, keyEntities, expandKeys, direction) {
  var _abstractDropNodeEnti;

  var clientX = event.clientX,
      clientY = event.clientY;

  var _event$target$getBoun = event.target.getBoundingClientRect(),
      top = _event$target$getBoun.top,
      height = _event$target$getBoun.height; // optional chain for testing


  var horizontalMouseOffset = (direction === 'rtl' ? -1 : 1) * (((startMousePosition === null || startMousePosition === void 0 ? void 0 : startMousePosition.x) || 0) - clientX);
  var rawDropLevelOffset = (horizontalMouseOffset - 12) / indent; // find abstract drop node by horizontal offset

  var abstractDropNodeEntity = keyEntities[targetNode.props.eventKey];

  if (clientY < top + height / 2) {
    // first half, set abstract drop node to previous node
    var nodeIndex = flattenedNodes.findIndex(function (flattenedNode) {
      return flattenedNode.key === abstractDropNodeEntity.key;
    });
    var prevNodeIndex = nodeIndex <= 0 ? 0 : nodeIndex - 1;
    var prevNodeKey = flattenedNodes[prevNodeIndex].key;
    abstractDropNodeEntity = keyEntities[prevNodeKey];
  }

  var initialAbstractDropNodeKey = abstractDropNodeEntity.key;
  var abstractDragOverEntity = abstractDropNodeEntity;
  var dragOverNodeKey = abstractDropNodeEntity.key;
  var dropPosition = 0;
  var dropLevelOffset = 0; // Only allow cross level drop when dragging on a non-expanded node

  if (!expandKeys.includes(initialAbstractDropNodeKey)) {
    for (var i = 0; i < rawDropLevelOffset; i += 1) {
      if (isLastChild(abstractDropNodeEntity)) {
        abstractDropNodeEntity = abstractDropNodeEntity.parent;
        dropLevelOffset += 1;
      } else {
        break;
      }
    }
  }

  var abstractDragDataNode = dragNode.props.data;
  var abstractDropDataNode = abstractDropNodeEntity.node;
  var dropAllowed = true;

  if (isFirstChild(abstractDropNodeEntity) && abstractDropNodeEntity.level === 0 && clientY < top + height / 2 && allowDrop({
    dragNode: abstractDragDataNode,
    dropNode: abstractDropDataNode,
    dropPosition: -1
  }) && abstractDropNodeEntity.key === targetNode.props.eventKey) {
    // first half of first node in first level
    dropPosition = -1;
  } else if ((abstractDragOverEntity.children || []).length && expandKeys.includes(dragOverNodeKey)) {
    // drop on expanded node
    // only allow drop inside
    if (allowDrop({
      dragNode: abstractDragDataNode,
      dropNode: abstractDropDataNode,
      dropPosition: 0
    })) {
      dropPosition = 0;
    } else {
      dropAllowed = false;
    }
  } else if (dropLevelOffset === 0) {
    if (rawDropLevelOffset > -1.5) {
      // | Node     | <- abstractDropNode
      // | -^-===== | <- mousePosition
      // 1. try drop after
      // 2. do not allow drop
      if (allowDrop({
        dragNode: abstractDragDataNode,
        dropNode: abstractDropDataNode,
        dropPosition: 1
      })) {
        dropPosition = 1;
      } else {
        dropAllowed = false;
      }
    } else {
      // | Node     | <- abstractDropNode
      // | ---==^== | <- mousePosition
      // whether it has children or doesn't has children
      // always
      // 1. try drop inside
      // 2. try drop after
      // 3. do not allow drop
      if (allowDrop({
        dragNode: abstractDragDataNode,
        dropNode: abstractDropDataNode,
        dropPosition: 0
      })) {
        dropPosition = 0;
      } else if (allowDrop({
        dragNode: abstractDragDataNode,
        dropNode: abstractDropDataNode,
        dropPosition: 1
      })) {
        dropPosition = 1;
      } else {
        dropAllowed = false;
      }
    }
  } else {
    // | Node1 | <- abstractDropNode
    //      |  Node2  |
    // --^--|----=====| <- mousePosition
    // 1. try insert after Node1
    // 2. do not allow drop
    if (allowDrop({
      dragNode: abstractDragDataNode,
      dropNode: abstractDropDataNode,
      dropPosition: 1
    })) {
      dropPosition = 1;
    } else {
      dropAllowed = false;
    }
  }

  return {
    dropPosition: dropPosition,
    dropLevelOffset: dropLevelOffset,
    dropTargetKey: abstractDropNodeEntity.key,
    dropTargetPos: abstractDropNodeEntity.pos,
    dragOverNodeKey: dragOverNodeKey,
    dropContainerKey: dropPosition === 0 ? null : ((_abstractDropNodeEnti = abstractDropNodeEntity.parent) === null || _abstractDropNodeEnti === void 0 ? void 0 : _abstractDropNodeEnti.key) || null,
    dropAllowed: dropAllowed
  };
}
/**
 * Return selectedKeys according with multiple prop
 * @param selectedKeys
 * @param props
 * @returns [string]
 */

function calcSelectedKeys(selectedKeys, props) {
  if (!selectedKeys) return undefined;
  var multiple = props.multiple;

  if (multiple) {
    return selectedKeys.slice();
  }

  if (selectedKeys.length) {
    return [selectedKeys[0]];
  }

  return selectedKeys;
}

var internalProcessProps = function internalProcessProps(props) {
  return props;
};

function convertDataToTree(treeData, processor) {
  if (!treeData) return [];

  var _ref2 = processor || {},
      _ref2$processProps = _ref2.processProps,
      processProps = _ref2$processProps === void 0 ? internalProcessProps : _ref2$processProps;

  var list = Array.isArray(treeData) ? treeData : [treeData];
  return list.map(function (_ref3) {
    var children = _ref3.children,
        props = _objectWithoutProperties(_ref3, util_excluded);

    var childrenNodes = convertDataToTree(children, processor);
    return /*#__PURE__*/React.createElement(TreeNode, processProps(props), childrenNodes);
  });
}
/**
 * Parse `checkedKeys` to { checkedKeys, halfCheckedKeys } style
 */

function parseCheckedKeys(keys) {
  if (!keys) {
    return null;
  } // Convert keys to object format


  var keyProps;

  if (Array.isArray(keys)) {
    // [Legacy] Follow the api doc
    keyProps = {
      checkedKeys: keys,
      halfCheckedKeys: undefined
    };
  } else if ((0,esm_typeof/* default */.Z)(keys) === 'object') {
    keyProps = {
      checkedKeys: keys.checked || undefined,
      halfCheckedKeys: keys.halfChecked || undefined
    };
  } else {
    (0,es_warning/* default */.ZP)(false, '`checkedKeys` is not an array or an object');
    return null;
  }

  return keyProps;
}
/**
 * If user use `autoExpandParent` we should get the list of parent node
 * @param keyList
 * @param keyEntities
 */

function conductExpandParent(keyList, keyEntities) {
  var expandedKeys = new Set();

  function conductUp(key) {
    if (expandedKeys.has(key)) return;
    var entity = keyEntities[key];
    if (!entity) return;
    expandedKeys.add(key);
    var parent = entity.parent,
        node = entity.node;
    if (node.disabled) return;

    if (parent) {
      conductUp(parent.key);
    }
  }

  (keyList || []).forEach(function (key) {
    conductUp(key);
  });
  return (0,toConsumableArray/* default */.Z)(expandedKeys);
}
;// CONCATENATED MODULE: ./node_modules/rc-tree/es/utils/treeUtil.js




var treeUtil_excluded = ["children"];




function treeUtil_getKey(key, pos) {
  if (key !== null && key !== undefined) {
    return key;
  }

  return pos;
}
function treeUtil_fillFieldNames(fieldNames) {
  var _ref = fieldNames || {},
      title = _ref.title,
      _title = _ref._title,
      key = _ref.key,
      children = _ref.children;

  var mergedTitle = title || 'title';
  return {
    title: mergedTitle,
    _title: _title || [mergedTitle],
    key: key || 'key',
    children: children || 'children'
  };
}
/**
 * Warning if TreeNode do not provides key
 */

function warningWithoutKey(treeData, fieldNames) {
  var keys = new Map();

  function dig(list) {
    var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    (list || []).forEach(function (treeNode) {
      var key = treeNode[fieldNames.key];
      var children = treeNode[fieldNames.children];
      warning(key !== null && key !== undefined, "Tree node must have a certain key: [".concat(path).concat(key, "]"));
      var recordKey = String(key);
      warning(!keys.has(recordKey) || key === null || key === undefined, "Same 'key' exist in the Tree: ".concat(recordKey));
      keys.set(recordKey, true);
      dig(children, "".concat(path).concat(recordKey, " > "));
    });
  }

  dig(treeData);
}
/**
 * Convert `children` of Tree into `treeData` structure.
 */

function convertTreeToData(rootNodes) {
  function dig(node) {
    var treeNodes = (0,Children_toArray/* default */.Z)(node);
    return treeNodes.map(function (treeNode) {
      // Filter invalidate node
      if (!isTreeNode(treeNode)) {
        (0,es_warning/* default */.ZP)(!treeNode, 'Tree/TreeNode can only accept TreeNode as children.');
        return null;
      }

      var key = treeNode.key;

      var _treeNode$props = treeNode.props,
          children = _treeNode$props.children,
          rest = (0,objectWithoutProperties/* default */.Z)(_treeNode$props, treeUtil_excluded);

      var dataNode = (0,objectSpread2/* default */.Z)({
        key: key
      }, rest);

      var parsedChildren = dig(children);

      if (parsedChildren.length) {
        dataNode.children = parsedChildren;
      }

      return dataNode;
    }).filter(function (dataNode) {
      return dataNode;
    });
  }

  return dig(rootNodes);
}
/**
 * Flat nest tree data into flatten list. This is used for virtual list render.
 * @param treeNodeList Origin data node list
 * @param expandedKeys
 * need expanded keys, provides `true` means all expanded (used in `rc-tree-select`).
 */

function flattenTreeData(treeNodeList, expandedKeys, fieldNames) {
  var _fillFieldNames = treeUtil_fillFieldNames(fieldNames),
      fieldTitles = _fillFieldNames._title,
      fieldKey = _fillFieldNames.key,
      fieldChildren = _fillFieldNames.children;

  var expandedKeySet = new Set(expandedKeys === true ? [] : expandedKeys);
  var flattenList = [];

  function dig(list) {
    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return list.map(function (treeNode, index) {
      var pos = getPosition(parent ? parent.pos : '0', index);
      var mergedKey = treeUtil_getKey(treeNode[fieldKey], pos); // Pick matched title in field title list

      var mergedTitle;

      for (var i = 0; i < fieldTitles.length; i += 1) {
        var fieldTitle = fieldTitles[i];

        if (treeNode[fieldTitle] !== undefined) {
          mergedTitle = treeNode[fieldTitle];
          break;
        }
      } // Add FlattenDataNode into list


      var flattenNode = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, (0,omit/* default */.Z)(treeNode, [].concat((0,toConsumableArray/* default */.Z)(fieldTitles), [fieldKey, fieldChildren]))), {}, {
        title: mergedTitle,
        key: mergedKey,
        parent: parent,
        pos: pos,
        children: null,
        data: treeNode,
        isStart: [].concat((0,toConsumableArray/* default */.Z)(parent ? parent.isStart : []), [index === 0]),
        isEnd: [].concat((0,toConsumableArray/* default */.Z)(parent ? parent.isEnd : []), [index === list.length - 1])
      });

      flattenList.push(flattenNode); // Loop treeNode children

      if (expandedKeys === true || expandedKeySet.has(mergedKey)) {
        flattenNode.children = dig(treeNode[fieldChildren] || [], flattenNode);
      } else {
        flattenNode.children = [];
      }

      return flattenNode;
    });
  }

  dig(treeNodeList);
  return flattenList;
}
/**
 * Traverse all the data by `treeData`.
 * Please not use it out of the `rc-tree` since we may refactor this code.
 */

function traverseDataNodes(dataNodes, callback, // To avoid too many params, let use config instead of origin param
config) {
  var mergedConfig = {};

  if ((0,esm_typeof/* default */.Z)(config) === 'object') {
    mergedConfig = config;
  } else {
    mergedConfig = {
      externalGetKey: config
    };
  }

  mergedConfig = mergedConfig || {}; // Init config

  var _mergedConfig = mergedConfig,
      childrenPropName = _mergedConfig.childrenPropName,
      externalGetKey = _mergedConfig.externalGetKey,
      fieldNames = _mergedConfig.fieldNames;

  var _fillFieldNames2 = treeUtil_fillFieldNames(fieldNames),
      fieldKey = _fillFieldNames2.key,
      fieldChildren = _fillFieldNames2.children;

  var mergeChildrenPropName = childrenPropName || fieldChildren; // Get keys

  var syntheticGetKey;

  if (externalGetKey) {
    if (typeof externalGetKey === 'string') {
      syntheticGetKey = function syntheticGetKey(node) {
        return node[externalGetKey];
      };
    } else if (typeof externalGetKey === 'function') {
      syntheticGetKey = function syntheticGetKey(node) {
        return externalGetKey(node);
      };
    }
  } else {
    syntheticGetKey = function syntheticGetKey(node, pos) {
      return treeUtil_getKey(node[fieldKey], pos);
    };
  } // Process


  function processNode(node, index, parent, pathNodes) {
    var children = node ? node[mergeChildrenPropName] : dataNodes;
    var pos = node ? getPosition(parent.pos, index) : '0';
    var connectNodes = node ? [].concat((0,toConsumableArray/* default */.Z)(pathNodes), [node]) : []; // Process node if is not root

    if (node) {
      var key = syntheticGetKey(node, pos);
      var data = {
        node: node,
        index: index,
        pos: pos,
        key: key,
        parentPos: parent.node ? parent.pos : null,
        level: parent.level + 1,
        nodes: connectNodes
      };
      callback(data);
    } // Process children node


    if (children) {
      children.forEach(function (subNode, subIndex) {
        processNode(subNode, subIndex, {
          node: node,
          pos: pos,
          level: parent ? parent.level + 1 : -1
        }, connectNodes);
      });
    }
  }

  processNode(null);
}
/**
 * Convert `treeData` into entity records.
 */

function convertDataToEntities(dataNodes) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      initWrapper = _ref2.initWrapper,
      processEntity = _ref2.processEntity,
      onProcessFinished = _ref2.onProcessFinished,
      externalGetKey = _ref2.externalGetKey,
      childrenPropName = _ref2.childrenPropName,
      fieldNames = _ref2.fieldNames;

  var
  /** @deprecated Use `config.externalGetKey` instead */
  legacyExternalGetKey = arguments.length > 2 ? arguments[2] : undefined;
  // Init config
  var mergedExternalGetKey = externalGetKey || legacyExternalGetKey;
  var posEntities = {};
  var keyEntities = {};
  var wrapper = {
    posEntities: posEntities,
    keyEntities: keyEntities
  };

  if (initWrapper) {
    wrapper = initWrapper(wrapper) || wrapper;
  }

  traverseDataNodes(dataNodes, function (item) {
    var node = item.node,
        index = item.index,
        pos = item.pos,
        key = item.key,
        parentPos = item.parentPos,
        level = item.level,
        nodes = item.nodes;
    var entity = {
      node: node,
      nodes: nodes,
      index: index,
      key: key,
      pos: pos,
      level: level
    };
    var mergedKey = treeUtil_getKey(key, pos);
    posEntities[pos] = entity;
    keyEntities[mergedKey] = entity; // Fill children

    entity.parent = posEntities[parentPos];

    if (entity.parent) {
      entity.parent.children = entity.parent.children || [];
      entity.parent.children.push(entity);
    }

    if (processEntity) {
      processEntity(entity, wrapper);
    }
  }, {
    externalGetKey: mergedExternalGetKey,
    childrenPropName: childrenPropName,
    fieldNames: fieldNames
  });

  if (onProcessFinished) {
    onProcessFinished(wrapper);
  }

  return wrapper;
}
/**
 * Get TreeNode props with Tree props.
 */

function getTreeNodeProps(key, _ref3) {
  var expandedKeys = _ref3.expandedKeys,
      selectedKeys = _ref3.selectedKeys,
      loadedKeys = _ref3.loadedKeys,
      loadingKeys = _ref3.loadingKeys,
      checkedKeys = _ref3.checkedKeys,
      halfCheckedKeys = _ref3.halfCheckedKeys,
      dragOverNodeKey = _ref3.dragOverNodeKey,
      dropPosition = _ref3.dropPosition,
      keyEntities = _ref3.keyEntities;
  var entity = keyEntities[key];
  var treeNodeProps = {
    eventKey: key,
    expanded: expandedKeys.indexOf(key) !== -1,
    selected: selectedKeys.indexOf(key) !== -1,
    loaded: loadedKeys.indexOf(key) !== -1,
    loading: loadingKeys.indexOf(key) !== -1,
    checked: checkedKeys.indexOf(key) !== -1,
    halfChecked: halfCheckedKeys.indexOf(key) !== -1,
    pos: String(entity ? entity.pos : ''),
    // [Legacy] Drag props
    // Since the interaction of drag is changed, the semantic of the props are
    // not accuracy, I think it should be finally removed
    dragOver: dragOverNodeKey === key && dropPosition === 0,
    dragOverGapTop: dragOverNodeKey === key && dropPosition === -1,
    dragOverGapBottom: dragOverNodeKey === key && dropPosition === 1
  };
  return treeNodeProps;
}
function convertNodePropsToEventData(props) {
  var data = props.data,
      expanded = props.expanded,
      selected = props.selected,
      checked = props.checked,
      loaded = props.loaded,
      loading = props.loading,
      halfChecked = props.halfChecked,
      dragOver = props.dragOver,
      dragOverGapTop = props.dragOverGapTop,
      dragOverGapBottom = props.dragOverGapBottom,
      pos = props.pos,
      active = props.active,
      eventKey = props.eventKey;

  var eventData = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, data), {}, {
    expanded: expanded,
    selected: selected,
    checked: checked,
    loaded: loaded,
    loading: loading,
    halfChecked: halfChecked,
    dragOver: dragOver,
    dragOverGapTop: dragOverGapTop,
    dragOverGapBottom: dragOverGapBottom,
    pos: pos,
    active: active,
    key: eventKey
  });

  if (!('props' in eventData)) {
    Object.defineProperty(eventData, 'props', {
      get: function get() {
        (0,es_warning/* default */.ZP)(false, 'Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`.');
        return props;
      }
    });
  }

  return eventData;
}
;// CONCATENATED MODULE: ./node_modules/rc-cascader/es/hooks/useEntities.js




/** Lazy parse options data into conduct-able info to avoid perf issue in single mode */

/* harmony default export */ var useEntities = (function (options, fieldNames) {
  var cacheRef = react.useRef({
    options: null,
    info: null
  });
  var getEntities = react.useCallback(function () {
    if (cacheRef.current.options !== options) {
      cacheRef.current.options = options;
      cacheRef.current.info = convertDataToEntities(options, {
        fieldNames: fieldNames,
        initWrapper: function initWrapper(wrapper) {
          return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, wrapper), {}, {
            pathKeyEntities: {}
          });
        },
        processEntity: function processEntity(entity, wrapper) {
          var pathKey = entity.nodes.map(function (node) {
            return node[fieldNames.value];
          }).join(VALUE_SPLIT);
          wrapper.pathKeyEntities[pathKey] = entity; // Overwrite origin key.
          // this is very hack but we need let conduct logic work with connect path

          entity.key = pathKey;
        }
      });
    }

    return cacheRef.current.info.pathKeyEntities;
  }, [fieldNames, options]);
  return getEntities;
});
;// CONCATENATED MODULE: ./node_modules/rc-cascader/es/hooks/useSearchConfig.js



 // Convert `showSearch` to unique config

function useSearchConfig(showSearch) {
  return react.useMemo(function () {
    if (!showSearch) {
      return [false, {}];
    }

    var searchConfig = {
      matchInputWidth: true,
      limit: 50
    };

    if (showSearch && (0,esm_typeof/* default */.Z)(showSearch) === 'object') {
      searchConfig = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, searchConfig), showSearch);
    }

    if (searchConfig.limit <= 0) {
      delete searchConfig.limit;

      if (false) {}
    }

    return [true, searchConfig];
  }, [showSearch]);
}
;// CONCATENATED MODULE: ./node_modules/rc-cascader/es/hooks/useMissingValues.js


/* harmony default export */ var useMissingValues = (function (options, fieldNames) {
  return react.useCallback(function (rawValues) {
    var missingValues = [];
    var existsValues = [];
    rawValues.forEach(function (valueCell) {
      var pathOptions = toPathOptions(valueCell, options, fieldNames);

      if (pathOptions.every(function (opt) {
        return opt.option;
      })) {
        existsValues.push(valueCell);
      } else {
        missingValues.push(valueCell);
      }
    });
    return [existsValues, missingValues];
  }, [options, fieldNames]);
});
;// CONCATENATED MODULE: ./node_modules/rc-cascader/es/Cascader.js




var Cascader_excluded = ["id", "prefixCls", "fieldNames", "defaultValue", "value", "changeOnSelect", "onChange", "displayRender", "checkable", "searchValue", "onSearch", "showSearch", "expandTrigger", "options", "dropdownPrefixCls", "loadData", "popupVisible", "open", "popupClassName", "dropdownClassName", "dropdownMenuColumnStyle", "popupPlacement", "placement", "onDropdownVisibleChange", "onPopupVisibleChange", "expandIcon", "loadingIcon", "children"];

















function isMultipleValue(value) {
  return Array.isArray(value) && Array.isArray(value[0]);
}

function toRawValues(value) {
  if (!value) {
    return [];
  }

  if (isMultipleValue(value)) {
    return value;
  }

  return value.length === 0 ? [] : [value];
}

var Cascader = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var id = props.id,
      _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-cascader' : _props$prefixCls,
      fieldNames = props.fieldNames,
      defaultValue = props.defaultValue,
      value = props.value,
      changeOnSelect = props.changeOnSelect,
      onChange = props.onChange,
      displayRender = props.displayRender,
      checkable = props.checkable,
      searchValue = props.searchValue,
      onSearch = props.onSearch,
      showSearch = props.showSearch,
      expandTrigger = props.expandTrigger,
      options = props.options,
      dropdownPrefixCls = props.dropdownPrefixCls,
      loadData = props.loadData,
      popupVisible = props.popupVisible,
      open = props.open,
      popupClassName = props.popupClassName,
      dropdownClassName = props.dropdownClassName,
      dropdownMenuColumnStyle = props.dropdownMenuColumnStyle,
      popupPlacement = props.popupPlacement,
      placement = props.placement,
      onDropdownVisibleChange = props.onDropdownVisibleChange,
      onPopupVisibleChange = props.onPopupVisibleChange,
      _props$expandIcon = props.expandIcon,
      expandIcon = _props$expandIcon === void 0 ? '>' : _props$expandIcon,
      loadingIcon = props.loadingIcon,
      children = props.children,
      restProps = (0,objectWithoutProperties/* default */.Z)(props, Cascader_excluded);

  var mergedId = useId(id);
  var multiple = !!checkable; // =========================== Values ===========================

  var _useMergedState = (0,useMergedState/* default */.Z)(defaultValue, {
    value: value,
    postState: toRawValues
  }),
      _useMergedState2 = (0,slicedToArray/* default */.Z)(_useMergedState, 2),
      rawValues = _useMergedState2[0],
      setRawValues = _useMergedState2[1]; // ========================= FieldNames =========================


  var mergedFieldNames = react.useMemo(function () {
    return commonUtil_fillFieldNames(fieldNames);
  },
  /* eslint-disable react-hooks/exhaustive-deps */
  [JSON.stringify(fieldNames)]); // =========================== Option ===========================

  var mergedOptions = react.useMemo(function () {
    return options || [];
  }, [options]); // Only used in multiple mode, this fn will not call in single mode

  var getPathKeyEntities = useEntities(mergedOptions, mergedFieldNames);
  /** Convert path key back to value format */

  var getValueByKeyPath = react.useCallback(function (pathKeys) {
    var ketPathEntities = getPathKeyEntities();
    return pathKeys.map(function (pathKey) {
      var nodes = ketPathEntities[pathKey].nodes;
      return nodes.map(function (node) {
        return node[mergedFieldNames.value];
      });
    });
  }, [getPathKeyEntities, mergedFieldNames]); // =========================== Search ===========================

  var _useMergedState3 = (0,useMergedState/* default */.Z)('', {
    value: searchValue,
    postState: function postState(search) {
      return search || '';
    }
  }),
      _useMergedState4 = (0,slicedToArray/* default */.Z)(_useMergedState3, 2),
      mergedSearchValue = _useMergedState4[0],
      setSearchValue = _useMergedState4[1];

  var onInternalSearch = function onInternalSearch(searchText, info) {
    setSearchValue(searchText);

    if (info.source !== 'blur' && onSearch) {
      onSearch(searchText);
    }
  };

  var _useSearchConfig = useSearchConfig(showSearch),
      _useSearchConfig2 = (0,slicedToArray/* default */.Z)(_useSearchConfig, 2),
      mergedShowSearch = _useSearchConfig2[0],
      searchConfig = _useSearchConfig2[1];

  var searchOptions = useSearchOptions(mergedSearchValue, mergedOptions, mergedFieldNames, dropdownPrefixCls || prefixCls, searchConfig, changeOnSelect); // =========================== Values ===========================

  var getMissingValues = useMissingValues(mergedOptions, mergedFieldNames); // Fill `rawValues` with checked conduction values

  var _React$useMemo = react.useMemo(function () {
    var _getMissingValues = getMissingValues(rawValues),
        _getMissingValues2 = (0,slicedToArray/* default */.Z)(_getMissingValues, 2),
        existValues = _getMissingValues2[0],
        missingValues = _getMissingValues2[1];

    if (!multiple || !rawValues.length) {
      return [existValues, [], missingValues];
    }

    var keyPathValues = toPathKeys(existValues);
    var ketPathEntities = getPathKeyEntities();

    var _conductCheck = conductCheck(keyPathValues, true, ketPathEntities),
        checkedKeys = _conductCheck.checkedKeys,
        halfCheckedKeys = _conductCheck.halfCheckedKeys; // Convert key back to value cells


    // Convert key back to value cells
    return [getValueByKeyPath(checkedKeys), getValueByKeyPath(halfCheckedKeys), missingValues];
  }, [multiple, rawValues, getPathKeyEntities, getValueByKeyPath, getMissingValues]),
      _React$useMemo2 = (0,slicedToArray/* default */.Z)(_React$useMemo, 3),
      checkedValues = _React$useMemo2[0],
      halfCheckedValues = _React$useMemo2[1],
      missingCheckedValues = _React$useMemo2[2];

  var deDuplicatedValues = react.useMemo(function () {
    var checkedKeys = toPathKeys(checkedValues);
    var deduplicateKeys = formatStrategyValues(checkedKeys, getPathKeyEntities);
    return [].concat((0,toConsumableArray/* default */.Z)(missingCheckedValues), (0,toConsumableArray/* default */.Z)(getValueByKeyPath(deduplicateKeys)));
  }, [checkedValues, getPathKeyEntities, getValueByKeyPath, missingCheckedValues]);
  var displayValues = useDisplayValues(deDuplicatedValues, mergedOptions, mergedFieldNames, multiple, displayRender); // =========================== Change ===========================

  var triggerChange = useRefFunc_useRefFunc(function (nextValues) {
    setRawValues(nextValues); // Save perf if no need trigger event

    if (onChange) {
      var nextRawValues = toRawValues(nextValues);
      var valueOptions = nextRawValues.map(function (valueCells) {
        return toPathOptions(valueCells, mergedOptions, mergedFieldNames).map(function (valueOpt) {
          return valueOpt.option;
        });
      });
      var triggerValues = multiple ? nextRawValues : nextRawValues[0];
      var triggerOptions = multiple ? valueOptions : valueOptions[0];
      onChange(triggerValues, triggerOptions);
    }
  }); // =========================== Select ===========================

  var onInternalSelect = useRefFunc_useRefFunc(function (valuePath) {
    setSearchValue('');

    if (!multiple) {
      triggerChange(valuePath);
    } else {
      // Prepare conduct required info
      var pathKey = toPathKey(valuePath);
      var checkedPathKeys = toPathKeys(checkedValues);
      var halfCheckedPathKeys = toPathKeys(halfCheckedValues);
      var existInChecked = checkedPathKeys.includes(pathKey);
      var existInMissing = missingCheckedValues.some(function (valueCells) {
        return toPathKey(valueCells) === pathKey;
      }); // Do update

      var nextCheckedValues = checkedValues;
      var nextMissingValues = missingCheckedValues;

      if (existInMissing && !existInChecked) {
        // Missing value only do filter
        nextMissingValues = missingCheckedValues.filter(function (valueCells) {
          return toPathKey(valueCells) !== pathKey;
        });
      } else {
        // Update checked key first
        var nextRawCheckedKeys = existInChecked ? checkedPathKeys.filter(function (key) {
          return key !== pathKey;
        }) : [].concat((0,toConsumableArray/* default */.Z)(checkedPathKeys), [pathKey]);
        var pathKeyEntities = getPathKeyEntities(); // Conduction by selected or not

        var checkedKeys;

        if (existInChecked) {
          var _conductCheck2 = conductCheck(nextRawCheckedKeys, {
            checked: false,
            halfCheckedKeys: halfCheckedPathKeys
          }, pathKeyEntities);

          checkedKeys = _conductCheck2.checkedKeys;
        } else {
          var _conductCheck3 = conductCheck(nextRawCheckedKeys, true, pathKeyEntities);

          checkedKeys = _conductCheck3.checkedKeys;
        } // Roll up to parent level keys


        var deDuplicatedKeys = formatStrategyValues(checkedKeys, getPathKeyEntities);
        nextCheckedValues = getValueByKeyPath(deDuplicatedKeys);
      }

      triggerChange([].concat((0,toConsumableArray/* default */.Z)(nextMissingValues), (0,toConsumableArray/* default */.Z)(nextCheckedValues)));
    }
  }); // Display Value change logic

  var onDisplayValuesChange = function onDisplayValuesChange(_, info) {
    if (info.type === 'clear') {
      triggerChange([]);
      return;
    } // Cascader do not support `add` type. Only support `remove`


    var valueCells = info.values[0].valueCells;
    onInternalSelect(valueCells);
  }; // ============================ Open ============================


  if (false) {}

  var mergedOpen = open !== undefined ? open : popupVisible;
  var mergedDropdownClassName = dropdownClassName || popupClassName;
  var mergedPlacement = placement || popupPlacement;

  var onInternalDropdownVisibleChange = function onInternalDropdownVisibleChange(nextVisible) {
    onDropdownVisibleChange === null || onDropdownVisibleChange === void 0 ? void 0 : onDropdownVisibleChange(nextVisible);
    onPopupVisibleChange === null || onPopupVisibleChange === void 0 ? void 0 : onPopupVisibleChange(nextVisible);
  }; // ========================== Context ===========================


  var cascaderContext = react.useMemo(function () {
    return {
      options: mergedOptions,
      fieldNames: mergedFieldNames,
      values: checkedValues,
      halfValues: halfCheckedValues,
      changeOnSelect: changeOnSelect,
      onSelect: onInternalSelect,
      checkable: checkable,
      searchOptions: searchOptions,
      dropdownPrefixCls: dropdownPrefixCls,
      loadData: loadData,
      expandTrigger: expandTrigger,
      expandIcon: expandIcon,
      loadingIcon: loadingIcon,
      dropdownMenuColumnStyle: dropdownMenuColumnStyle
    };
  }, [mergedOptions, mergedFieldNames, checkedValues, halfCheckedValues, changeOnSelect, onInternalSelect, checkable, searchOptions, dropdownPrefixCls, loadData, expandTrigger, expandIcon, loadingIcon, dropdownMenuColumnStyle]); // ==============================================================
  // ==                          Render                          ==
  // ==============================================================

  var emptyOptions = !(mergedSearchValue ? searchOptions : mergedOptions).length;
  var dropdownStyle = // Search to match width
  mergedSearchValue && searchConfig.matchInputWidth || // Empty keep the width
  emptyOptions ? {} : {
    minWidth: 'auto'
  };
  return /*#__PURE__*/react.createElement(context.Provider, {
    value: cascaderContext
  }, /*#__PURE__*/react.createElement(es_BaseSelect, (0,esm_extends/* default */.Z)({}, restProps, {
    // MISC
    ref: ref,
    id: mergedId,
    prefixCls: prefixCls,
    dropdownMatchSelectWidth: false,
    dropdownStyle: dropdownStyle // Value
    ,
    displayValues: displayValues,
    onDisplayValuesChange: onDisplayValuesChange,
    mode: multiple ? 'multiple' : undefined // Search
    ,
    searchValue: mergedSearchValue,
    onSearch: onInternalSearch,
    showSearch: mergedShowSearch // Options
    ,
    OptionList: rc_cascader_es_OptionList,
    emptyOptions: emptyOptions // Open
    ,
    open: mergedOpen,
    dropdownClassName: mergedDropdownClassName,
    placement: mergedPlacement,
    onDropdownVisibleChange: onInternalDropdownVisibleChange // Children
    ,
    getRawInputElement: function getRawInputElement() {
      return children;
    }
  })));
});

if (false) {}

/* harmony default export */ var es_Cascader = (Cascader);
;// CONCATENATED MODULE: ./node_modules/rc-cascader/es/index.js

/* harmony default export */ var rc_cascader_es = (es_Cascader);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/RightOutlined.js + 1 modules
var RightOutlined = __webpack_require__(8812);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/RedoOutlined.js
// This icon file is generated automatically.
var RedoOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M758.2 839.1C851.8 765.9 912 651.9 912 523.9 912 303 733.5 124.3 512.6 124 291.4 123.7 112 302.8 112 523.9c0 125.2 57.5 236.9 147.6 310.2 3.5 2.8 8.6 2.2 11.4-1.3l39.4-50.5c2.7-3.4 2.1-8.3-1.2-11.1-8.1-6.6-15.9-13.7-23.4-21.2a318.64 318.64 0 01-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 01-68.6 101.7c-9.3 9.3-19.1 18-29.3 26L668.2 724a8 8 0 00-14.1 3l-39.6 162.2c-1.2 5 2.6 9.9 7.7 9.9l167 .8c6.7 0 10.5-7.7 6.3-12.9l-37.3-47.9z" } }] }, "name": "redo", "theme": "outlined" };
/* harmony default export */ var asn_RedoOutlined = (RedoOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 2 modules
var AntdIcon = __webpack_require__(7029);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/RedoOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var RedoOutlined_RedoOutlined = function RedoOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_RedoOutlined
  }));
};

RedoOutlined_RedoOutlined.displayName = 'RedoOutlined';
/* harmony default export */ var icons_RedoOutlined = (/*#__PURE__*/react.forwardRef(RedoOutlined_RedoOutlined));
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/LeftOutlined.js + 1 modules
var LeftOutlined = __webpack_require__(7724);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js + 1 modules
var config_provider_context = __webpack_require__(5632);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/SizeContext.js
var SizeContext = __webpack_require__(7647);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/DownOutlined.js
// This icon file is generated automatically.
var DownOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, "name": "down", "theme": "outlined" };
/* harmony default export */ var asn_DownOutlined = (DownOutlined);

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
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/LoadingOutlined.js + 1 modules
var LoadingOutlined = __webpack_require__(7085);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CheckOutlined.js + 1 modules
var CheckOutlined = __webpack_require__(9508);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseOutlined.js + 1 modules
var CloseOutlined = __webpack_require__(4549);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js + 1 modules
var CloseCircleFilled = __webpack_require__(3061);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/SearchOutlined.js + 1 modules
var SearchOutlined = __webpack_require__(6570);
;// CONCATENATED MODULE: ./node_modules/antd/es/select/utils/iconUtil.js







function getIcons(_ref) {
  var suffixIcon = _ref.suffixIcon,
      clearIcon = _ref.clearIcon,
      menuItemSelectedIcon = _ref.menuItemSelectedIcon,
      removeIcon = _ref.removeIcon,
      loading = _ref.loading,
      multiple = _ref.multiple,
      prefixCls = _ref.prefixCls;
  // Clear Icon
  var mergedClearIcon = clearIcon;

  if (!clearIcon) {
    mergedClearIcon = /*#__PURE__*/react.createElement(CloseCircleFilled/* default */.Z, null);
  } // Arrow item icon


  var mergedSuffixIcon = null;

  if (suffixIcon !== undefined) {
    mergedSuffixIcon = suffixIcon;
  } else if (loading) {
    mergedSuffixIcon = /*#__PURE__*/react.createElement(LoadingOutlined/* default */.Z, {
      spin: true
    });
  } else {
    var iconCls = "".concat(prefixCls, "-suffix");

    mergedSuffixIcon = function mergedSuffixIcon(_ref2) {
      var open = _ref2.open,
          showSearch = _ref2.showSearch;

      if (open && showSearch) {
        return /*#__PURE__*/react.createElement(SearchOutlined/* default */.Z, {
          className: iconCls
        });
      }

      return /*#__PURE__*/react.createElement(icons_DownOutlined, {
        className: iconCls
      });
    };
  } // Checked item icon


  var mergedItemIcon = null;

  if (menuItemSelectedIcon !== undefined) {
    mergedItemIcon = menuItemSelectedIcon;
  } else if (multiple) {
    mergedItemIcon = /*#__PURE__*/react.createElement(CheckOutlined/* default */.Z, null);
  } else {
    mergedItemIcon = null;
  }

  var mergedRemoveIcon = null;

  if (removeIcon !== undefined) {
    mergedRemoveIcon = removeIcon;
  } else {
    mergedRemoveIcon = /*#__PURE__*/react.createElement(CloseOutlined/* default */.Z, null);
  }

  return {
    clearIcon: mergedClearIcon,
    suffixIcon: mergedSuffixIcon,
    itemIcon: mergedItemIcon,
    removeIcon: mergedRemoveIcon
  };
}
// EXTERNAL MODULE: ./node_modules/antd/es/_util/motion.js
var motion = __webpack_require__(3603);
;// CONCATENATED MODULE: ./node_modules/antd/es/cascader/index.js





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














function highlightKeyword(str, lowerKeyword, prefixCls) {
  var cells = str.toLowerCase().split(lowerKeyword).reduce(function (list, cur, index) {
    return index === 0 ? [cur] : [].concat((0,toConsumableArray/* default */.Z)(list), [lowerKeyword, cur]);
  }, []);
  var fillCells = [];
  var start = 0;
  cells.forEach(function (cell, index) {
    var end = start + cell.length;
    var originWorld = str.slice(start, end);
    start = end;

    if (index % 2 === 1) {
      originWorld =
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      react.createElement("span", {
        className: "".concat(prefixCls, "-menu-item-keyword"),
        key: "seperator-".concat(index)
      }, originWorld);
    }

    fillCells.push(originWorld);
  });
  return fillCells;
}

var defaultSearchRender = function defaultSearchRender(inputValue, path, prefixCls, fieldNames) {
  var optionList = []; // We do lower here to save perf

  var lower = inputValue.toLowerCase();
  path.forEach(function (node, index) {
    if (index !== 0) {
      optionList.push(' / ');
    }

    var label = node[fieldNames.label];

    var type = (0,esm_typeof/* default */.Z)(label);

    if (type === 'string' || type === 'number') {
      label = highlightKeyword(String(label), lower, prefixCls);
    }

    optionList.push(label);
  });
  return optionList;
};

var cascader_Cascader = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _classNames2;

  var customizePrefixCls = props.prefixCls,
      customizeSize = props.size,
      className = props.className,
      multiple = props.multiple,
      _props$bordered = props.bordered,
      bordered = _props$bordered === void 0 ? true : _props$bordered,
      transitionName = props.transitionName,
      _props$choiceTransiti = props.choiceTransitionName,
      choiceTransitionName = _props$choiceTransiti === void 0 ? '' : _props$choiceTransiti,
      popupClassName = props.popupClassName,
      dropdownClassName = props.dropdownClassName,
      expandIcon = props.expandIcon,
      showSearch = props.showSearch,
      _props$allowClear = props.allowClear,
      allowClear = _props$allowClear === void 0 ? true : _props$allowClear,
      notFoundContent = props.notFoundContent,
      direction = props.direction,
      getPopupContainer = props.getPopupContainer,
      rest = __rest(props, ["prefixCls", "size", "className", "multiple", "bordered", "transitionName", "choiceTransitionName", "popupClassName", "dropdownClassName", "expandIcon", "showSearch", "allowClear", "notFoundContent", "direction", "getPopupContainer"]);

  var restProps = (0,omit/* default */.Z)(rest, ['suffixIcon']);

  var _React$useContext = react.useContext(config_provider_context/* ConfigContext */.E_),
      getContextPopupContainer = _React$useContext.getPopupContainer,
      getPrefixCls = _React$useContext.getPrefixCls,
      renderEmpty = _React$useContext.renderEmpty,
      rootDirection = _React$useContext.direction;

  var mergedDirection = direction || rootDirection;
  var isRtl = mergedDirection === 'rtl'; // =================== Warning =====================

  if (false) {} // =================== No Found ====================


  var mergedNotFoundContent = notFoundContent || renderEmpty('Cascader'); // ==================== Prefix =====================

  var rootPrefixCls = getPrefixCls();
  var prefixCls = getPrefixCls('select', customizePrefixCls);
  var cascaderPrefixCls = getPrefixCls('cascader', customizePrefixCls); // =================== Dropdown ====================

  var mergedDropdownClassName = classnames_default()(dropdownClassName || popupClassName, "".concat(cascaderPrefixCls, "-dropdown"), (0,defineProperty/* default */.Z)({}, "".concat(cascaderPrefixCls, "-dropdown-rtl"), mergedDirection === 'rtl')); // ==================== Search =====================

  var mergedShowSearch = react.useMemo(function () {
    if (!showSearch) {
      return showSearch;
    }

    var searchConfig = {
      render: defaultSearchRender
    };

    if ((0,esm_typeof/* default */.Z)(showSearch) === 'object') {
      searchConfig = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, searchConfig), showSearch);
    }

    return searchConfig;
  }, [showSearch]); // ===================== Size ======================

  var size = react.useContext(SizeContext/* default */.Z);
  var mergedSize = customizeSize || size; // ===================== Icon ======================

  var mergedExpandIcon = expandIcon;

  if (!expandIcon) {
    mergedExpandIcon = isRtl ? /*#__PURE__*/react.createElement(LeftOutlined/* default */.Z, null) : /*#__PURE__*/react.createElement(RightOutlined/* default */.Z, null);
  }

  var loadingIcon = /*#__PURE__*/react.createElement("span", {
    className: "".concat(prefixCls, "-menu-item-loading-icon")
  }, /*#__PURE__*/react.createElement(icons_RedoOutlined, {
    spin: true
  })); // =================== Multiple ====================

  var checkable = react.useMemo(function () {
    return multiple ? /*#__PURE__*/react.createElement("span", {
      className: "".concat(cascaderPrefixCls, "-checkbox-inner")
    }) : false;
  }, [multiple]); // ===================== Icons =====================

  var _getIcons = getIcons((0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, props), {
    multiple: multiple,
    prefixCls: prefixCls
  })),
      suffixIcon = _getIcons.suffixIcon,
      removeIcon = _getIcons.removeIcon,
      clearIcon = _getIcons.clearIcon; // ==================== Render =====================


  return /*#__PURE__*/react.createElement(rc_cascader_es, (0,esm_extends/* default */.Z)({
    prefixCls: prefixCls,
    className: classnames_default()(!customizePrefixCls && cascaderPrefixCls, (_classNames2 = {}, (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-lg"), mergedSize === 'large'), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-sm"), mergedSize === 'small'), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-rtl"), isRtl), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-borderless"), !bordered), _classNames2), className)
  }, restProps, {
    direction: mergedDirection,
    notFoundContent: mergedNotFoundContent,
    allowClear: allowClear,
    showSearch: mergedShowSearch,
    expandIcon: mergedExpandIcon,
    inputIcon: suffixIcon,
    removeIcon: removeIcon,
    clearIcon: clearIcon,
    loadingIcon: loadingIcon,
    checkable: checkable,
    dropdownClassName: mergedDropdownClassName,
    dropdownPrefixCls: customizePrefixCls || cascaderPrefixCls,
    choiceTransitionName: (0,motion/* getTransitionName */.m)(rootPrefixCls, '', choiceTransitionName),
    transitionName: (0,motion/* getTransitionName */.m)(rootPrefixCls, 'slide-up', transitionName),
    getPopupContainer: getPopupContainer || getContextPopupContainer,
    ref: ref
  }));
});
cascader_Cascader.displayName = 'Cascader';
/* harmony default export */ var cascader = (cascader_Cascader);
;// CONCATENATED MODULE: ./node_modules/antd/es/table/style/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/antd/es/button/style/index.js + 1 modules
var button_style = __webpack_require__(8385);
;// CONCATENATED MODULE: ./node_modules/antd/es/radio/style/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/antd/es/radio/style/index.js


// EXTERNAL MODULE: ./node_modules/antd/es/checkbox/style/index.js + 1 modules
var checkbox_style = __webpack_require__(3116);
// EXTERNAL MODULE: ./node_modules/antd/es/dropdown/style/index.js + 1 modules
var dropdown_style = __webpack_require__(3605);
// EXTERNAL MODULE: ./node_modules/antd/es/spin/style/index.js + 1 modules
var spin_style = __webpack_require__(9862);
;// CONCATENATED MODULE: ./node_modules/antd/es/pagination/style/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/antd/es/pagination/style/index.js

 // style dependencies
// deps-lint-skip: grid


// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/style/index.js + 1 modules
var tooltip_style = __webpack_require__(3255);
// EXTERNAL MODULE: ./node_modules/antd/es/input/style/index.js + 1 modules
var input_style = __webpack_require__(9113);
;// CONCATENATED MODULE: ./node_modules/antd/es/tree/style/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/antd/es/tree/style/index.js


;// CONCATENATED MODULE: ./node_modules/antd/es/table/style/index.js

 // style dependencies
// deps-lint-skip: menu
// deps-lint-skip: grid











// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/isVisible.js
var isVisible = __webpack_require__(5110);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/Dom/styleChecker.js


var isStyleNameSupport = function isStyleNameSupport(styleName) {
  if ((0,canUseDom/* default */.Z)() && window.document.documentElement) {
    var styleNameList = Array.isArray(styleName) ? styleName : [styleName];
    var documentElement = window.document.documentElement;
    return styleNameList.some(function (name) {
      return name in documentElement.style;
    });
  }

  return false;
};

var isStyleValueSupport = function isStyleValueSupport(styleName, value) {
  if (!isStyleNameSupport(styleName)) {
    return false;
  }

  var ele = document.createElement('div');
  var origin = ele.style[styleName];
  ele.style[styleName] = value;
  return ele.style[styleName] !== origin;
};

function isStyleSupport(styleName, styleValue) {
  if (!Array.isArray(styleName) && styleValue !== undefined) {
    return isStyleValueSupport(styleName, styleValue);
  }

  return isStyleNameSupport(styleName);
}
// EXTERNAL MODULE: ./node_modules/shallowequal/index.js
var shallowequal = __webpack_require__(6774);
var shallowequal_default = /*#__PURE__*/__webpack_require__.n(shallowequal);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/getScrollBarSize.js
/* eslint-disable no-param-reassign */
var cached;
function getScrollBarSize(fresh) {
  if (typeof document === 'undefined') {
    return 0;
  }

  if (fresh || cached === undefined) {
    var inner = document.createElement('div');
    inner.style.width = '100%';
    inner.style.height = '200px';
    var outer = document.createElement('div');
    var outerStyle = outer.style;
    outerStyle.position = 'absolute';
    outerStyle.top = '0';
    outerStyle.left = '0';
    outerStyle.pointerEvents = 'none';
    outerStyle.visibility = 'hidden';
    outerStyle.width = '200px';
    outerStyle.height = '150px';
    outerStyle.overflow = 'hidden';
    outer.appendChild(inner);
    document.body.appendChild(outer);
    var widthContained = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var widthScroll = inner.offsetWidth;

    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth;
    }

    document.body.removeChild(outer);
    cached = widthContained - widthScroll;
  }

  return cached;
}

function ensureSize(str) {
  var match = str.match(/^(.*)px$/);
  var value = Number(match === null || match === void 0 ? void 0 : match[1]);
  return Number.isNaN(value) ? getScrollBarSize() : value;
}

function getTargetScrollBarSize(target) {
  if (typeof document === 'undefined' || !target || !(target instanceof Element)) {
    return {
      width: 0,
      height: 0
    };
  }

  var _getComputedStyle = getComputedStyle(target, '::-webkit-scrollbar'),
      width = _getComputedStyle.width,
      height = _getComputedStyle.height;

  return {
    width: ensureSize(width),
    height: ensureSize(height)
  };
}
;// CONCATENATED MODULE: ./node_modules/rc-table/es/sugar/ColumnGroup.js
/* istanbul ignore next */

/**
 * This is a syntactic sugar for `columns` prop.
 * So HOC will not work on this.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ColumnGroup(_) {
  return null;
}

/* harmony default export */ var sugar_ColumnGroup = (ColumnGroup);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/sugar/Column.js
/* istanbul ignore next */

/**
 * This is a syntactic sugar for `columns` prop.
 * So HOC will not work on this.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Column_Column(_) {
  return null;
}

/* harmony default export */ var sugar_Column = (Column_Column);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/utils/valueUtil.js

var INTERNAL_KEY_PREFIX = 'RC_TABLE_KEY';

function valueUtil_toArray(arr) {
  if (arr === undefined || arr === null) {
    return [];
  }

  return Array.isArray(arr) ? arr : [arr];
}

function getPathValue(record, path) {
  // Skip if path is empty
  if (!path && typeof path !== 'number') {
    return record;
  }

  var pathList = valueUtil_toArray(path);
  var current = record;

  for (var i = 0; i < pathList.length; i += 1) {
    if (!current) {
      return null;
    }

    var prop = pathList[i];
    current = current[prop];
  }

  return current;
}
function getColumnsKey(columns) {
  var columnKeys = [];
  var keys = {};
  columns.forEach(function (column) {
    var _ref = column || {},
        key = _ref.key,
        dataIndex = _ref.dataIndex;

    var mergedKey = key || valueUtil_toArray(dataIndex).join('-') || INTERNAL_KEY_PREFIX;

    while (keys[mergedKey]) {
      mergedKey = "".concat(mergedKey, "_next");
    }

    keys[mergedKey] = true;
    columnKeys.push(mergedKey);
  });
  return columnKeys;
}
function mergeObject() {
  var merged = {};
  /* eslint-disable no-param-reassign */

  function fillProps(obj, clone) {
    if (clone) {
      Object.keys(clone).forEach(function (key) {
        var value = clone[key];

        if (value && (0,esm_typeof/* default */.Z)(value) === 'object') {
          obj[key] = obj[key] || {};
          fillProps(obj[key], value);
        } else {
          obj[key] = value;
        }
      });
    }
  }
  /* eslint-enable */


  for (var _len = arguments.length, objects = new Array(_len), _key = 0; _key < _len; _key++) {
    objects[_key] = arguments[_key];
  }

  objects.forEach(function (clone) {
    fillProps(merged, clone);
  });
  return merged;
}
function validateValue(val) {
  return val !== null && val !== undefined;
}
;// CONCATENATED MODULE: ./node_modules/rc-table/es/context/StickyContext.js
 // Tell cell that browser support sticky

var StickyContext = /*#__PURE__*/react.createContext(false);
/* harmony default export */ var context_StickyContext = (StickyContext);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/context/HoverContext.js

var HoverContext = /*#__PURE__*/react.createContext({});
/* harmony default export */ var context_HoverContext = (HoverContext);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/Cell/index.js





var Cell_excluded = ["colSpan", "rowSpan", "style", "className"];








/** Check if cell is in hover range */

function inHoverRange(cellStartRow, cellRowSpan, startRow, endRow) {
  var cellEndRow = cellStartRow + cellRowSpan - 1;
  return cellStartRow <= endRow && cellEndRow >= startRow;
}

function isRenderCell(data) {
  return data && (0,esm_typeof/* default */.Z)(data) === 'object' && !Array.isArray(data) && ! /*#__PURE__*/react.isValidElement(data);
}

function isRefComponent(component) {
  // String tag component also support ref
  if (typeof component === 'string') {
    return true;
  }

  return (0,es_ref/* supportRef */.Yr)(component);
}

function Cell(_ref, ref) {
  var _ref3, _ref4, _classNames;

  var prefixCls = _ref.prefixCls,
      className = _ref.className,
      record = _ref.record,
      index = _ref.index,
      renderIndex = _ref.renderIndex,
      dataIndex = _ref.dataIndex,
      render = _ref.render,
      children = _ref.children,
      _ref$component = _ref.component,
      Component = _ref$component === void 0 ? 'td' : _ref$component,
      colSpan = _ref.colSpan,
      rowSpan = _ref.rowSpan,
      fixLeft = _ref.fixLeft,
      fixRight = _ref.fixRight,
      firstFixLeft = _ref.firstFixLeft,
      lastFixLeft = _ref.lastFixLeft,
      firstFixRight = _ref.firstFixRight,
      lastFixRight = _ref.lastFixRight,
      appendNode = _ref.appendNode,
      _ref$additionalProps = _ref.additionalProps,
      additionalProps = _ref$additionalProps === void 0 ? {} : _ref$additionalProps,
      ellipsis = _ref.ellipsis,
      align = _ref.align,
      rowType = _ref.rowType,
      isSticky = _ref.isSticky,
      hovering = _ref.hovering,
      onHover = _ref.onHover;
  var cellPrefixCls = "".concat(prefixCls, "-cell");
  var supportSticky = react.useContext(context_StickyContext); // ==================== Child Node ====================

  var cellProps;
  var childNode;

  if (validateValue(children)) {
    childNode = children;
  } else {
    var value = getPathValue(record, dataIndex); // Customize render node

    childNode = value;

    if (render) {
      var renderData = render(value, record, renderIndex);

      if (isRenderCell(renderData)) {
        if (false) {}

        childNode = renderData.children;
        cellProps = renderData.props;
      } else {
        childNode = renderData;
      }
    }
  } // Not crash if final `childNode` is not validate ReactNode


  if ((0,esm_typeof/* default */.Z)(childNode) === 'object' && !Array.isArray(childNode) && ! /*#__PURE__*/react.isValidElement(childNode)) {
    childNode = null;
  }

  if (ellipsis && (lastFixLeft || firstFixRight)) {
    childNode = /*#__PURE__*/react.createElement("span", {
      className: "".concat(cellPrefixCls, "-content")
    }, childNode);
  }

  var _ref2 = cellProps || {},
      cellColSpan = _ref2.colSpan,
      cellRowSpan = _ref2.rowSpan,
      cellStyle = _ref2.style,
      cellClassName = _ref2.className,
      restCellProps = (0,objectWithoutProperties/* default */.Z)(_ref2, Cell_excluded);

  var mergedColSpan = (_ref3 = cellColSpan !== undefined ? cellColSpan : colSpan) !== null && _ref3 !== void 0 ? _ref3 : 1;
  var mergedRowSpan = (_ref4 = cellRowSpan !== undefined ? cellRowSpan : rowSpan) !== null && _ref4 !== void 0 ? _ref4 : 1;

  if (mergedColSpan === 0 || mergedRowSpan === 0) {
    return null;
  } // ====================== Fixed =======================


  var fixedStyle = {};
  var isFixLeft = typeof fixLeft === 'number' && supportSticky;
  var isFixRight = typeof fixRight === 'number' && supportSticky;

  if (isFixLeft) {
    fixedStyle.position = 'sticky';
    fixedStyle.left = fixLeft;
  }

  if (isFixRight) {
    fixedStyle.position = 'sticky';
    fixedStyle.right = fixRight;
  } // ====================== Align =======================


  var alignStyle = {};

  if (align) {
    alignStyle.textAlign = align;
  } // ====================== Hover =======================


  var onMouseEnter = function onMouseEnter(event) {
    var _additionalProps$onMo;

    if (record) {
      onHover(index, index + mergedRowSpan - 1);
    }

    additionalProps === null || additionalProps === void 0 ? void 0 : (_additionalProps$onMo = additionalProps.onMouseEnter) === null || _additionalProps$onMo === void 0 ? void 0 : _additionalProps$onMo.call(additionalProps, event);
  };

  var onMouseLeave = function onMouseLeave(event) {
    var _additionalProps$onMo2;

    if (record) {
      onHover(-1, -1);
    }

    additionalProps === null || additionalProps === void 0 ? void 0 : (_additionalProps$onMo2 = additionalProps.onMouseLeave) === null || _additionalProps$onMo2 === void 0 ? void 0 : _additionalProps$onMo2.call(additionalProps, event);
  }; // ====================== Render ======================


  var title;
  var ellipsisConfig = ellipsis === true ? {
    showTitle: true
  } : ellipsis;

  if (ellipsisConfig && (ellipsisConfig.showTitle || rowType === 'header')) {
    if (typeof childNode === 'string' || typeof childNode === 'number') {
      title = childNode.toString();
    } else if ( /*#__PURE__*/react.isValidElement(childNode) && typeof childNode.props.children === 'string') {
      title = childNode.props.children;
    }
  }

  var componentProps = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
    title: title
  }, restCellProps), additionalProps), {}, {
    colSpan: mergedColSpan !== 1 ? mergedColSpan : null,
    rowSpan: mergedRowSpan !== 1 ? mergedRowSpan : null,
    className: classnames_default()(cellPrefixCls, className, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(cellPrefixCls, "-fix-left"), isFixLeft && supportSticky), (0,defineProperty/* default */.Z)(_classNames, "".concat(cellPrefixCls, "-fix-left-first"), firstFixLeft && supportSticky), (0,defineProperty/* default */.Z)(_classNames, "".concat(cellPrefixCls, "-fix-left-last"), lastFixLeft && supportSticky), (0,defineProperty/* default */.Z)(_classNames, "".concat(cellPrefixCls, "-fix-right"), isFixRight && supportSticky), (0,defineProperty/* default */.Z)(_classNames, "".concat(cellPrefixCls, "-fix-right-first"), firstFixRight && supportSticky), (0,defineProperty/* default */.Z)(_classNames, "".concat(cellPrefixCls, "-fix-right-last"), lastFixRight && supportSticky), (0,defineProperty/* default */.Z)(_classNames, "".concat(cellPrefixCls, "-ellipsis"), ellipsis), (0,defineProperty/* default */.Z)(_classNames, "".concat(cellPrefixCls, "-with-append"), appendNode), (0,defineProperty/* default */.Z)(_classNames, "".concat(cellPrefixCls, "-fix-sticky"), (isFixLeft || isFixRight) && isSticky && supportSticky), (0,defineProperty/* default */.Z)(_classNames, "".concat(cellPrefixCls, "-row-hover"), !cellProps && hovering), _classNames), additionalProps.className, cellClassName),
    style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, additionalProps.style), alignStyle), fixedStyle), cellStyle),
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    ref: isRefComponent(Component) ? ref : null
  });

  return /*#__PURE__*/react.createElement(Component, componentProps, appendNode, childNode);
}

var RefCell = /*#__PURE__*/react.forwardRef(Cell);
RefCell.displayName = 'Cell';
var comparePropList = ['expanded', 'className', 'hovering'];
var MemoCell = /*#__PURE__*/react.memo(RefCell, function (prev, next) {
  if (next.shouldCellUpdate) {
    return (// Additional handle of expanded logic
      comparePropList.every(function (propName) {
        return prev[propName] === next[propName];
      }) && // User control update logic
      !next.shouldCellUpdate(next.record, prev.record)
    );
  }

  return shallowequal_default()(prev, next);
});
/** Inject hover data here, we still wish MemoCell keep simple `shouldCellUpdate` logic */

var WrappedCell = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _React$useContext = react.useContext(context_HoverContext),
      onHover = _React$useContext.onHover,
      startRow = _React$useContext.startRow,
      endRow = _React$useContext.endRow;

  var index = props.index,
      _props$additionalProp = props.additionalProps,
      additionalProps = _props$additionalProp === void 0 ? {} : _props$additionalProp,
      colSpan = props.colSpan,
      rowSpan = props.rowSpan;
  var cellColSpan = additionalProps.colSpan,
      cellRowSpan = additionalProps.rowSpan;
  var mergedColSpan = colSpan !== null && colSpan !== void 0 ? colSpan : cellColSpan;
  var mergedRowSpan = rowSpan !== null && rowSpan !== void 0 ? rowSpan : cellRowSpan;
  var hovering = inHoverRange(index, mergedRowSpan || 1, startRow, endRow);
  return /*#__PURE__*/react.createElement(MemoCell, (0,esm_extends/* default */.Z)({}, props, {
    colSpan: mergedColSpan,
    rowSpan: mergedRowSpan,
    hovering: hovering,
    ref: ref,
    onHover: onHover
  }));
});
WrappedCell.displayName = 'WrappedCell';
/* harmony default export */ var es_Cell = (WrappedCell);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/context/TableContext.js

var TableContext = /*#__PURE__*/react.createContext(null);
/* harmony default export */ var context_TableContext = (TableContext);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/utils/fixUtil.js
function getCellFixedInfo(colStart, colEnd, columns, stickyOffsets, direction) {
  var startColumn = columns[colStart] || {};
  var endColumn = columns[colEnd] || {};
  var fixLeft;
  var fixRight;

  if (startColumn.fixed === 'left') {
    fixLeft = stickyOffsets.left[colStart];
  } else if (endColumn.fixed === 'right') {
    fixRight = stickyOffsets.right[colEnd];
  }

  var lastFixLeft = false;
  var firstFixRight = false;
  var lastFixRight = false;
  var firstFixLeft = false;
  var nextColumn = columns[colEnd + 1];
  var prevColumn = columns[colStart - 1];

  if (direction === 'rtl') {
    if (fixLeft !== undefined) {
      var prevFixLeft = prevColumn && prevColumn.fixed === 'left';
      firstFixLeft = !prevFixLeft;
    } else if (fixRight !== undefined) {
      var nextFixRight = nextColumn && nextColumn.fixed === 'right';
      lastFixRight = !nextFixRight;
    }
  } else if (fixLeft !== undefined) {
    var nextFixLeft = nextColumn && nextColumn.fixed === 'left';
    lastFixLeft = !nextFixLeft;
  } else if (fixRight !== undefined) {
    var prevFixRight = prevColumn && prevColumn.fixed === 'right';
    firstFixRight = !prevFixRight;
  }

  return {
    fixLeft: fixLeft,
    fixRight: fixRight,
    lastFixLeft: lastFixLeft,
    firstFixRight: firstFixRight,
    lastFixRight: lastFixRight,
    firstFixLeft: firstFixLeft,
    isSticky: stickyOffsets.isSticky
  };
}
;// CONCATENATED MODULE: ./node_modules/rc-table/es/Header/HeaderRow.js







function HeaderRow(_ref) {
  var cells = _ref.cells,
      stickyOffsets = _ref.stickyOffsets,
      flattenColumns = _ref.flattenColumns,
      RowComponent = _ref.rowComponent,
      CellComponent = _ref.cellComponent,
      onHeaderRow = _ref.onHeaderRow,
      index = _ref.index;

  var _React$useContext = react.useContext(context_TableContext),
      prefixCls = _React$useContext.prefixCls,
      direction = _React$useContext.direction;

  var rowProps;

  if (onHeaderRow) {
    rowProps = onHeaderRow(cells.map(function (cell) {
      return cell.column;
    }), index);
  }

  var columnsKey = getColumnsKey(cells.map(function (cell) {
    return cell.column;
  }));
  return /*#__PURE__*/react.createElement(RowComponent, rowProps, cells.map(function (cell, cellIndex) {
    var column = cell.column;
    var fixedInfo = getCellFixedInfo(cell.colStart, cell.colEnd, flattenColumns, stickyOffsets, direction);
    var additionalProps;

    if (column && column.onHeaderCell) {
      additionalProps = cell.column.onHeaderCell(column);
    }

    return /*#__PURE__*/react.createElement(es_Cell, (0,esm_extends/* default */.Z)({}, cell, {
      ellipsis: column.ellipsis,
      align: column.align,
      component: CellComponent,
      prefixCls: prefixCls,
      key: columnsKey[cellIndex]
    }, fixedInfo, {
      additionalProps: additionalProps,
      rowType: "header"
    }));
  }));
}

HeaderRow.displayName = 'HeaderRow';
/* harmony default export */ var Header_HeaderRow = (HeaderRow);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/Header/Header.js




function parseHeaderRows(rootColumns) {
  var rows = [];

  function fillRowCells(columns, colIndex) {
    var rowIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    // Init rows
    rows[rowIndex] = rows[rowIndex] || [];
    var currentColIndex = colIndex;
    var colSpans = columns.filter(Boolean).map(function (column) {
      var cell = {
        key: column.key,
        className: column.className || '',
        children: column.title,
        column: column,
        colStart: currentColIndex
      };
      var colSpan = 1;
      var subColumns = column.children;

      if (subColumns && subColumns.length > 0) {
        colSpan = fillRowCells(subColumns, currentColIndex, rowIndex + 1).reduce(function (total, count) {
          return total + count;
        }, 0);
        cell.hasSubColumns = true;
      }

      if ('colSpan' in column) {
        colSpan = column.colSpan;
      }

      if ('rowSpan' in column) {
        cell.rowSpan = column.rowSpan;
      }

      cell.colSpan = colSpan;
      cell.colEnd = cell.colStart + colSpan - 1;
      rows[rowIndex].push(cell);
      currentColIndex += colSpan;
      return colSpan;
    });
    return colSpans;
  } // Generate `rows` cell data


  fillRowCells(rootColumns, 0); // Handle `rowSpan`

  var rowCount = rows.length;

  var _loop = function _loop(rowIndex) {
    rows[rowIndex].forEach(function (cell) {
      if (!('rowSpan' in cell) && !cell.hasSubColumns) {
        // eslint-disable-next-line no-param-reassign
        cell.rowSpan = rowCount - rowIndex;
      }
    });
  };

  for (var rowIndex = 0; rowIndex < rowCount; rowIndex += 1) {
    _loop(rowIndex);
  }

  return rows;
}

function Header(_ref) {
  var stickyOffsets = _ref.stickyOffsets,
      columns = _ref.columns,
      flattenColumns = _ref.flattenColumns,
      onHeaderRow = _ref.onHeaderRow;

  var _React$useContext = react.useContext(context_TableContext),
      prefixCls = _React$useContext.prefixCls,
      getComponent = _React$useContext.getComponent;

  var rows = react.useMemo(function () {
    return parseHeaderRows(columns);
  }, [columns]);
  var WrapperComponent = getComponent(['header', 'wrapper'], 'thead');
  var trComponent = getComponent(['header', 'row'], 'tr');
  var thComponent = getComponent(['header', 'cell'], 'th');
  return /*#__PURE__*/react.createElement(WrapperComponent, {
    className: "".concat(prefixCls, "-thead")
  }, rows.map(function (row, rowIndex) {
    var rowNode = /*#__PURE__*/react.createElement(Header_HeaderRow, {
      key: rowIndex,
      flattenColumns: flattenColumns,
      cells: row,
      stickyOffsets: stickyOffsets,
      rowComponent: trComponent,
      cellComponent: thComponent,
      onHeaderRow: onHeaderRow,
      index: rowIndex
    });
    return rowNode;
  }));
}

/* harmony default export */ var Header_Header = (Header);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/context/BodyContext.js

var BodyContext = /*#__PURE__*/react.createContext(null);
/* harmony default export */ var context_BodyContext = (BodyContext);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/context/ExpandedRowContext.js

var ExpandedRowContext = /*#__PURE__*/react.createContext(null);
/* harmony default export */ var context_ExpandedRowContext = (ExpandedRowContext);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/Body/ExpandedRow.js





function ExpandedRow(_ref) {
  var prefixCls = _ref.prefixCls,
      children = _ref.children,
      Component = _ref.component,
      cellComponent = _ref.cellComponent,
      className = _ref.className,
      expanded = _ref.expanded,
      colSpan = _ref.colSpan,
      isEmpty = _ref.isEmpty;

  var _React$useContext = react.useContext(context_TableContext),
      scrollbarSize = _React$useContext.scrollbarSize;

  var _React$useContext2 = react.useContext(context_ExpandedRowContext),
      fixHeader = _React$useContext2.fixHeader,
      fixColumn = _React$useContext2.fixColumn,
      componentWidth = _React$useContext2.componentWidth,
      horizonScroll = _React$useContext2.horizonScroll; // Cache render node


  return react.useMemo(function () {
    var contentNode = children;

    if (isEmpty ? horizonScroll : fixColumn) {
      contentNode = /*#__PURE__*/react.createElement("div", {
        style: {
          width: componentWidth - (fixHeader ? scrollbarSize : 0),
          position: 'sticky',
          left: 0,
          overflow: 'hidden'
        },
        className: "".concat(prefixCls, "-expanded-row-fixed")
      }, contentNode);
    }

    return /*#__PURE__*/react.createElement(Component, {
      className: className,
      style: {
        display: expanded ? null : 'none'
      }
    }, /*#__PURE__*/react.createElement(es_Cell, {
      component: cellComponent,
      prefixCls: prefixCls,
      colSpan: colSpan
    }, contentNode));
  }, [children, Component, className, expanded, colSpan, isEmpty, scrollbarSize, componentWidth, fixColumn, fixHeader, horizonScroll]);
}

/* harmony default export */ var Body_ExpandedRow = (ExpandedRow);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/context/ResizeContext.js

var ResizeContext = /*#__PURE__*/react.createContext(null);
/* harmony default export */ var context_ResizeContext = (ResizeContext);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/Body/BodyRow.js











function BodyRow(props) {
  var className = props.className,
      style = props.style,
      record = props.record,
      index = props.index,
      renderIndex = props.renderIndex,
      rowKey = props.rowKey,
      rowExpandable = props.rowExpandable,
      expandedKeys = props.expandedKeys,
      onRow = props.onRow,
      _props$indent = props.indent,
      indent = _props$indent === void 0 ? 0 : _props$indent,
      RowComponent = props.rowComponent,
      cellComponent = props.cellComponent,
      childrenColumnName = props.childrenColumnName;

  var _React$useContext = react.useContext(context_TableContext),
      prefixCls = _React$useContext.prefixCls,
      fixedInfoList = _React$useContext.fixedInfoList;

  var _React$useContext2 = react.useContext(context_BodyContext),
      flattenColumns = _React$useContext2.flattenColumns,
      expandableType = _React$useContext2.expandableType,
      expandRowByClick = _React$useContext2.expandRowByClick,
      onTriggerExpand = _React$useContext2.onTriggerExpand,
      rowClassName = _React$useContext2.rowClassName,
      expandedRowClassName = _React$useContext2.expandedRowClassName,
      indentSize = _React$useContext2.indentSize,
      expandIcon = _React$useContext2.expandIcon,
      expandedRowRender = _React$useContext2.expandedRowRender,
      expandIconColumnIndex = _React$useContext2.expandIconColumnIndex;

  var _React$useState = react.useState(false),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      expandRended = _React$useState2[0],
      setExpandRended = _React$useState2[1];

  var expanded = expandedKeys && expandedKeys.has(props.recordKey);
  react.useEffect(function () {
    if (expanded) {
      setExpandRended(true);
    }
  }, [expanded]);
  var rowSupportExpand = expandableType === 'row' && (!rowExpandable || rowExpandable(record)); // Only when row is not expandable and `children` exist in record

  var nestExpandable = expandableType === 'nest';
  var hasNestChildren = childrenColumnName && record && record[childrenColumnName];
  var mergedExpandable = rowSupportExpand || nestExpandable; // ======================== Expandable =========================

  var onExpandRef = react.useRef(onTriggerExpand);
  onExpandRef.current = onTriggerExpand;

  var onInternalTriggerExpand = function onInternalTriggerExpand() {
    onExpandRef.current.apply(onExpandRef, arguments);
  }; // =========================== onRow ===========================


  var additionalProps;

  if (onRow) {
    additionalProps = onRow(record, index);
  }

  var onClick = function onClick(event) {
    var _additionalProps, _additionalProps$onCl;

    if (expandRowByClick && mergedExpandable) {
      onInternalTriggerExpand(record, event);
    }

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    (_additionalProps = additionalProps) === null || _additionalProps === void 0 ? void 0 : (_additionalProps$onCl = _additionalProps.onClick) === null || _additionalProps$onCl === void 0 ? void 0 : _additionalProps$onCl.call.apply(_additionalProps$onCl, [_additionalProps, event].concat(args));
  }; // ======================== Base tr row ========================


  var computeRowClassName;

  if (typeof rowClassName === 'string') {
    computeRowClassName = rowClassName;
  } else if (typeof rowClassName === 'function') {
    computeRowClassName = rowClassName(record, index, indent);
  }

  var columnsKey = getColumnsKey(flattenColumns);
  var baseRowNode = /*#__PURE__*/react.createElement(RowComponent, (0,esm_extends/* default */.Z)({}, additionalProps, {
    "data-row-key": rowKey,
    className: classnames_default()(className, "".concat(prefixCls, "-row"), "".concat(prefixCls, "-row-level-").concat(indent), computeRowClassName, additionalProps && additionalProps.className),
    style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, style), additionalProps ? additionalProps.style : null),
    onClick: onClick
  }), flattenColumns.map(function (column, colIndex) {
    var render = column.render,
        dataIndex = column.dataIndex,
        columnClassName = column.className;
    var key = columnsKey[colIndex];
    var fixedInfo = fixedInfoList[colIndex]; // ============= Used for nest expandable =============

    var appendCellNode;

    if (colIndex === (expandIconColumnIndex || 0) && nestExpandable) {
      appendCellNode = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("span", {
        style: {
          paddingLeft: "".concat(indentSize * indent, "px")
        },
        className: "".concat(prefixCls, "-row-indent indent-level-").concat(indent)
      }), expandIcon({
        prefixCls: prefixCls,
        expanded: expanded,
        expandable: hasNestChildren,
        record: record,
        onExpand: onInternalTriggerExpand
      }));
    }

    var additionalCellProps;

    if (column.onCell) {
      additionalCellProps = column.onCell(record, index);
    }

    return /*#__PURE__*/react.createElement(es_Cell, (0,esm_extends/* default */.Z)({
      className: columnClassName,
      ellipsis: column.ellipsis,
      align: column.align,
      component: cellComponent,
      prefixCls: prefixCls,
      key: key,
      record: record,
      index: index,
      renderIndex: renderIndex,
      dataIndex: dataIndex,
      render: render,
      shouldCellUpdate: column.shouldCellUpdate,
      expanded: appendCellNode && expanded
    }, fixedInfo, {
      appendNode: appendCellNode,
      additionalProps: additionalCellProps
    }));
  })); // ======================== Expand Row =========================

  var expandRowNode;

  if (rowSupportExpand && (expandRended || expanded)) {
    var expandContent = expandedRowRender(record, index, indent + 1, expanded);
    var computedExpandedRowClassName = expandedRowClassName && expandedRowClassName(record, index, indent);
    expandRowNode = /*#__PURE__*/react.createElement(Body_ExpandedRow, {
      expanded: expanded,
      className: classnames_default()("".concat(prefixCls, "-expanded-row"), "".concat(prefixCls, "-expanded-row-level-").concat(indent + 1), computedExpandedRowClassName),
      prefixCls: prefixCls,
      component: RowComponent,
      cellComponent: cellComponent,
      colSpan: flattenColumns.length,
      isEmpty: false
    }, expandContent);
  }

  return /*#__PURE__*/react.createElement(react.Fragment, null, baseRowNode, expandRowNode);
}

BodyRow.displayName = 'BodyRow';
/* harmony default export */ var Body_BodyRow = (BodyRow);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/hooks/useFlattenRecords.js

 // recursion (flat tree structure)

function flatRecord(record, indent, childrenColumnName, expandedKeys, getRowKey, index) {
  var arr = [];
  arr.push({
    record: record,
    indent: indent,
    index: index
  });
  var key = getRowKey(record);
  var expanded = expandedKeys === null || expandedKeys === void 0 ? void 0 : expandedKeys.has(key);

  if (record && Array.isArray(record[childrenColumnName]) && expanded) {
    // expanded state, flat record
    for (var i = 0; i < record[childrenColumnName].length; i += 1) {
      var tempArr = flatRecord(record[childrenColumnName][i], indent + 1, childrenColumnName, expandedKeys, getRowKey, i);
      arr.push.apply(arr, (0,toConsumableArray/* default */.Z)(tempArr));
    }
  }

  return arr;
}
/**
 * flat tree data on expanded state
 *
 * @export
 * @template T
 * @param {*} data : table data
 * @param {string} childrenColumnName : 指定树形结构的列名
 * @param {Set<Key>} expandedKeys : 展开的行对应的keys
 * @param {GetRowKey<T>} getRowKey  : 获取当前rowKey的方法
 * @returns flattened data
 */


function useFlattenRecords(data, childrenColumnName, expandedKeys, getRowKey) {
  var arr = react.useMemo(function () {
    if (expandedKeys === null || expandedKeys === void 0 ? void 0 : expandedKeys.size) {
      var temp = []; // collect flattened record

      for (var i = 0; i < (data === null || data === void 0 ? void 0 : data.length); i += 1) {
        var record = data[i];
        temp.push.apply(temp, (0,toConsumableArray/* default */.Z)(flatRecord(record, 0, childrenColumnName, expandedKeys, getRowKey, i)));
      }

      return temp;
    }

    return data === null || data === void 0 ? void 0 : data.map(function (item, index) {
      return {
        record: item,
        indent: 0,
        index: index
      };
    });
  }, [data, childrenColumnName, expandedKeys, getRowKey]);
  return arr;
}
;// CONCATENATED MODULE: ./node_modules/rc-table/es/Body/MeasureCell.js


function MeasureCell(_ref) {
  var columnKey = _ref.columnKey,
      onColumnResize = _ref.onColumnResize;
  var cellRef = react.useRef();
  react.useEffect(function () {
    if (cellRef.current) {
      onColumnResize(columnKey, cellRef.current.offsetWidth);
    }
  }, []);
  return /*#__PURE__*/react.createElement(rc_resize_observer_es/* default */.Z, {
    data: columnKey
  }, /*#__PURE__*/react.createElement("td", {
    ref: cellRef,
    style: {
      padding: 0,
      border: 0,
      height: 0
    }
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      height: 0,
      overflow: 'hidden'
    }
  }, "\xA0")));
}
;// CONCATENATED MODULE: ./node_modules/rc-table/es/Body/MeasureRow.js




function MeasureRow(_ref) {
  var prefixCls = _ref.prefixCls,
      columnsKey = _ref.columnsKey,
      onColumnResize = _ref.onColumnResize;
  // delay state update while resize continuously, e.g. window resize
  var resizedColumnsRef = react.useRef(new Map());
  var rafIdRef = react.useRef(null);

  var delayOnColumnResize = function delayOnColumnResize() {
    if (rafIdRef.current === null) {
      rafIdRef.current = (0,raf/* default */.Z)(function () {
        resizedColumnsRef.current.forEach(function (width, columnKey) {
          onColumnResize(columnKey, width);
        });
        resizedColumnsRef.current.clear();
        rafIdRef.current = null;
      }, 2);
    }
  };

  react.useEffect(function () {
    return function () {
      raf/* default.cancel */.Z.cancel(rafIdRef.current);
    };
  }, []);
  return /*#__PURE__*/react.createElement("tr", {
    "aria-hidden": "true",
    className: "".concat(prefixCls, "-measure-row"),
    style: {
      height: 0,
      fontSize: 0
    }
  }, /*#__PURE__*/react.createElement(rc_resize_observer_es/* default.Collection */.Z.Collection, {
    onBatchResize: function onBatchResize(infoList) {
      infoList.forEach(function (_ref2) {
        var columnKey = _ref2.data,
            size = _ref2.size;
        resizedColumnsRef.current.set(columnKey, size.offsetWidth);
      });
      delayOnColumnResize();
    }
  }, columnsKey.map(function (columnKey) {
    return /*#__PURE__*/react.createElement(MeasureCell, {
      key: columnKey,
      columnKey: columnKey,
      onColumnResize: onColumnResize
    });
  })));
}
;// CONCATENATED MODULE: ./node_modules/rc-table/es/Body/index.js












function Body(_ref) {
  var data = _ref.data,
      getRowKey = _ref.getRowKey,
      measureColumnWidth = _ref.measureColumnWidth,
      expandedKeys = _ref.expandedKeys,
      onRow = _ref.onRow,
      rowExpandable = _ref.rowExpandable,
      emptyNode = _ref.emptyNode,
      childrenColumnName = _ref.childrenColumnName;

  var _React$useContext = react.useContext(context_ResizeContext),
      onColumnResize = _React$useContext.onColumnResize;

  var _React$useContext2 = react.useContext(context_TableContext),
      prefixCls = _React$useContext2.prefixCls,
      getComponent = _React$useContext2.getComponent;

  var _React$useContext3 = react.useContext(context_BodyContext),
      flattenColumns = _React$useContext3.flattenColumns;

  var flattenData = useFlattenRecords(data, childrenColumnName, expandedKeys, getRowKey); // ====================== Hover =======================

  var _React$useState = react.useState(-1),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      startRow = _React$useState2[0],
      setStartRow = _React$useState2[1];

  var _React$useState3 = react.useState(-1),
      _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
      endRow = _React$useState4[0],
      setEndRow = _React$useState4[1];

  var onHover = react.useCallback(function (start, end) {
    setStartRow(start);
    setEndRow(end);
  }, []);
  var hoverContext = react.useMemo(function () {
    return {
      startRow: startRow,
      endRow: endRow,
      onHover: onHover
    };
  }, [onHover, startRow, endRow]); // ====================== Render ======================

  var bodyNode = react.useMemo(function () {
    var WrapperComponent = getComponent(['body', 'wrapper'], 'tbody');
    var trComponent = getComponent(['body', 'row'], 'tr');
    var tdComponent = getComponent(['body', 'cell'], 'td');
    var rows;

    if (data.length) {
      rows = flattenData.map(function (item, idx) {
        var record = item.record,
            indent = item.indent,
            renderIndex = item.index;
        var key = getRowKey(record, idx);
        return /*#__PURE__*/react.createElement(Body_BodyRow, {
          key: key,
          rowKey: key,
          record: record,
          recordKey: key,
          index: idx,
          renderIndex: renderIndex,
          rowComponent: trComponent,
          cellComponent: tdComponent,
          expandedKeys: expandedKeys,
          onRow: onRow,
          getRowKey: getRowKey,
          rowExpandable: rowExpandable,
          childrenColumnName: childrenColumnName,
          indent: indent
        });
      });
    } else {
      rows = /*#__PURE__*/react.createElement(Body_ExpandedRow, {
        expanded: true,
        className: "".concat(prefixCls, "-placeholder"),
        prefixCls: prefixCls,
        component: trComponent,
        cellComponent: tdComponent,
        colSpan: flattenColumns.length,
        isEmpty: true
      }, emptyNode);
    }

    var columnsKey = getColumnsKey(flattenColumns);
    return /*#__PURE__*/react.createElement(WrapperComponent, {
      className: "".concat(prefixCls, "-tbody")
    }, measureColumnWidth && /*#__PURE__*/react.createElement(MeasureRow, {
      prefixCls: prefixCls,
      columnsKey: columnsKey,
      onColumnResize: onColumnResize
    }), rows);
  }, [data, prefixCls, onRow, measureColumnWidth, expandedKeys, getRowKey, getComponent, emptyNode, flattenColumns, childrenColumnName, onColumnResize, rowExpandable, flattenData]);
  return /*#__PURE__*/react.createElement(context_HoverContext.Provider, {
    value: hoverContext
  }, bodyNode);
}

var MemoBody = /*#__PURE__*/react.memo(Body);
MemoBody.displayName = 'Body';
/* harmony default export */ var es_Body = (MemoBody);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/utils/legacyUtil.js


var utils_legacyUtil_excluded = ["expandable"];

var INTERNAL_COL_DEFINE = 'RC_TABLE_INTERNAL_COL_DEFINE';
function getExpandableProps(props) {
  var expandable = props.expandable,
      legacyExpandableConfig = (0,objectWithoutProperties/* default */.Z)(props, utils_legacyUtil_excluded);

  var config;

  if ('expandable' in props) {
    config = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, legacyExpandableConfig), expandable);
  } else {
    if (false) {}

    config = legacyExpandableConfig;
  }

  if (config.showExpandColumn === false) {
    config.expandIconColumnIndex = -1;
  }

  return config;
}
;// CONCATENATED MODULE: ./node_modules/rc-table/es/constant.js
var EXPAND_COLUMN = {};
;// CONCATENATED MODULE: ./node_modules/rc-table/es/hooks/useColumns.js




var useColumns_excluded = ["children"],
    useColumns_excluded2 = ["fixed"];





function convertChildrenToColumns(children) {
  return (0,Children_toArray/* default */.Z)(children).filter(function (node) {
    return /*#__PURE__*/react.isValidElement(node);
  }).map(function (_ref) {
    var key = _ref.key,
        props = _ref.props;

    var nodeChildren = props.children,
        restProps = (0,objectWithoutProperties/* default */.Z)(props, useColumns_excluded);

    var column = (0,objectSpread2/* default */.Z)({
      key: key
    }, restProps);

    if (nodeChildren) {
      column.children = convertChildrenToColumns(nodeChildren);
    }

    return column;
  });
}

function flatColumns(columns) {
  return columns.reduce(function (list, column) {
    var fixed = column.fixed; // Convert `fixed='true'` to `fixed='left'` instead

    var parsedFixed = fixed === true ? 'left' : fixed;
    var subColumns = column.children;

    if (subColumns && subColumns.length > 0) {
      return [].concat((0,toConsumableArray/* default */.Z)(list), (0,toConsumableArray/* default */.Z)(flatColumns(subColumns).map(function (subColum) {
        return (0,objectSpread2/* default */.Z)({
          fixed: parsedFixed
        }, subColum);
      })));
    }

    return [].concat((0,toConsumableArray/* default */.Z)(list), [(0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, column), {}, {
      fixed: parsedFixed
    })]);
  }, []);
}

function warningFixed(flattenColumns) {
  var allFixLeft = true;

  for (var i = 0; i < flattenColumns.length; i += 1) {
    var col = flattenColumns[i];

    if (allFixLeft && col.fixed !== 'left') {
      allFixLeft = false;
    } else if (!allFixLeft && col.fixed === 'left') {
      warning(false, "Index ".concat(i - 1, " of `columns` missing `fixed='left'` prop."));
      break;
    }
  }

  var allFixRight = true;

  for (var _i = flattenColumns.length - 1; _i >= 0; _i -= 1) {
    var _col = flattenColumns[_i];

    if (allFixRight && _col.fixed !== 'right') {
      allFixRight = false;
    } else if (!allFixRight && _col.fixed === 'right') {
      warning(false, "Index ".concat(_i + 1, " of `columns` missing `fixed='right'` prop."));
      break;
    }
  }
}

function revertForRtl(columns) {
  return columns.map(function (column) {
    var fixed = column.fixed,
        restProps = (0,objectWithoutProperties/* default */.Z)(column, useColumns_excluded2); // Convert `fixed='left'` to `fixed='right'` instead


    var parsedFixed = fixed;

    if (fixed === 'left') {
      parsedFixed = 'right';
    } else if (fixed === 'right') {
      parsedFixed = 'left';
    }

    return (0,objectSpread2/* default */.Z)({
      fixed: parsedFixed
    }, restProps);
  });
}
/**
 * Parse `columns` & `children` into `columns`.
 */


function useColumns(_ref2, transformColumns) {
  var prefixCls = _ref2.prefixCls,
      columns = _ref2.columns,
      children = _ref2.children,
      expandable = _ref2.expandable,
      expandedKeys = _ref2.expandedKeys,
      getRowKey = _ref2.getRowKey,
      onTriggerExpand = _ref2.onTriggerExpand,
      expandIcon = _ref2.expandIcon,
      rowExpandable = _ref2.rowExpandable,
      expandIconColumnIndex = _ref2.expandIconColumnIndex,
      direction = _ref2.direction,
      expandRowByClick = _ref2.expandRowByClick,
      columnWidth = _ref2.columnWidth,
      fixed = _ref2.fixed;
  var baseColumns = react.useMemo(function () {
    return columns || convertChildrenToColumns(children);
  }, [columns, children]); // ========================== Expand ==========================

  var withExpandColumns = react.useMemo(function () {
    if (expandable) {
      var _expandColumn;

      var cloneColumns = baseColumns.slice(); // >>> Warning if use `expandIconColumnIndex`

      if (false) {} // >>> Insert expand column if not exist


      if (!cloneColumns.includes(EXPAND_COLUMN)) {
        var expandColIndex = expandIconColumnIndex || 0;

        if (expandColIndex >= 0) {
          cloneColumns.splice(expandColIndex, 0, EXPAND_COLUMN);
        }
      } // >>> Deduplicate additional expand column


      if (false) {}

      var expandColumnIndex = cloneColumns.indexOf(EXPAND_COLUMN);
      cloneColumns = cloneColumns.filter(function (column, index) {
        return column !== EXPAND_COLUMN || index === expandColumnIndex;
      }); // >>> Check if expand column need to fixed

      var prevColumn = baseColumns[expandColumnIndex];
      var fixedColumn;

      if ((fixed === 'left' || fixed) && !expandIconColumnIndex) {
        fixedColumn = 'left';
      } else if ((fixed === 'right' || fixed) && expandIconColumnIndex === baseColumns.length) {
        fixedColumn = 'right';
      } else {
        fixedColumn = prevColumn ? prevColumn.fixed : null;
      } // >>> Create expandable column


      var expandColumn = (_expandColumn = {}, (0,defineProperty/* default */.Z)(_expandColumn, INTERNAL_COL_DEFINE, {
        className: "".concat(prefixCls, "-expand-icon-col"),
        columnType: 'EXPAND_COLUMN'
      }), (0,defineProperty/* default */.Z)(_expandColumn, "title", ''), (0,defineProperty/* default */.Z)(_expandColumn, "fixed", fixedColumn), (0,defineProperty/* default */.Z)(_expandColumn, "className", "".concat(prefixCls, "-row-expand-icon-cell")), (0,defineProperty/* default */.Z)(_expandColumn, "width", columnWidth), (0,defineProperty/* default */.Z)(_expandColumn, "render", function render(_, record, index) {
        var rowKey = getRowKey(record, index);
        var expanded = expandedKeys.has(rowKey);
        var recordExpandable = rowExpandable ? rowExpandable(record) : true;
        var icon = expandIcon({
          prefixCls: prefixCls,
          expanded: expanded,
          expandable: recordExpandable,
          record: record,
          onExpand: onTriggerExpand
        });

        if (expandRowByClick) {
          return /*#__PURE__*/react.createElement("span", {
            onClick: function onClick(e) {
              return e.stopPropagation();
            }
          }, icon);
        }

        return icon;
      }), _expandColumn);
      return cloneColumns.map(function (col) {
        return col === EXPAND_COLUMN ? expandColumn : col;
      });
    }

    if (false) {}

    return baseColumns.filter(function (col) {
      return col !== EXPAND_COLUMN;
    });
  }, [expandable, baseColumns, getRowKey, expandedKeys, expandIcon, direction]); // ========================= Transform ========================

  var mergedColumns = react.useMemo(function () {
    var finalColumns = withExpandColumns;

    if (transformColumns) {
      finalColumns = transformColumns(finalColumns);
    } // Always provides at least one column for table display


    if (!finalColumns.length) {
      finalColumns = [{
        render: function render() {
          return null;
        }
      }];
    }

    return finalColumns;
  }, [transformColumns, withExpandColumns, direction]); // ========================== Flatten =========================

  var flattenColumns = react.useMemo(function () {
    if (direction === 'rtl') {
      return revertForRtl(flatColumns(mergedColumns));
    }

    return flatColumns(mergedColumns);
  }, [mergedColumns, direction]); // Only check out of production since it's waste for each render

  if (false) {}

  return [mergedColumns, flattenColumns];
}

/* harmony default export */ var hooks_useColumns = (useColumns);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/hooks/useFrame.js


/**
 * Execute code before next frame but async
 */

function useLayoutState(defaultState) {
  var stateRef = (0,react.useRef)(defaultState);

  var _useState = (0,react.useState)({}),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      forceUpdate = _useState2[1];

  var lastPromiseRef = (0,react.useRef)(null);
  var updateBatchRef = (0,react.useRef)([]);

  function setFrameState(updater) {
    updateBatchRef.current.push(updater);
    var promise = Promise.resolve();
    lastPromiseRef.current = promise;
    promise.then(function () {
      if (lastPromiseRef.current === promise) {
        var prevBatch = updateBatchRef.current;
        var prevState = stateRef.current;
        updateBatchRef.current = [];
        prevBatch.forEach(function (batchUpdater) {
          stateRef.current = batchUpdater(stateRef.current);
        });
        lastPromiseRef.current = null;

        if (prevState !== stateRef.current) {
          forceUpdate({});
        }
      }
    });
  }

  (0,react.useEffect)(function () {
    return function () {
      lastPromiseRef.current = null;
    };
  }, []);
  return [stateRef.current, setFrameState];
}
/** Lock frame, when frame pass reset the lock. */

function useTimeoutLock(defaultState) {
  var frameRef = (0,react.useRef)(defaultState || null);
  var timeoutRef = (0,react.useRef)();

  function cleanUp() {
    window.clearTimeout(timeoutRef.current);
  }

  function setState(newState) {
    frameRef.current = newState;
    cleanUp();
    timeoutRef.current = window.setTimeout(function () {
      frameRef.current = null;
      timeoutRef.current = undefined;
    }, 100);
  }

  function getState() {
    return frameRef.current;
  }

  (0,react.useEffect)(function () {
    return cleanUp;
  }, []);
  return [setState, getState];
}
;// CONCATENATED MODULE: ./node_modules/rc-table/es/hooks/useStickyOffsets.js

/**
 * Get sticky column offset width
 */

function useStickyOffsets(colWidths, columnCount, direction) {
  var stickyOffsets = (0,react.useMemo)(function () {
    var leftOffsets = [];
    var rightOffsets = [];
    var left = 0;
    var right = 0;

    for (var start = 0; start < columnCount; start += 1) {
      if (direction === 'rtl') {
        // Left offset
        rightOffsets[start] = right;
        right += colWidths[start] || 0; // Right offset

        var end = columnCount - start - 1;
        leftOffsets[end] = left;
        left += colWidths[end] || 0;
      } else {
        // Left offset
        leftOffsets[start] = left;
        left += colWidths[start] || 0; // Right offset

        var _end = columnCount - start - 1;

        rightOffsets[_end] = right;
        right += colWidths[_end] || 0;
      }
    }

    return {
      left: leftOffsets,
      right: rightOffsets
    };
  }, [colWidths, columnCount, direction]);
  return stickyOffsets;
}

/* harmony default export */ var hooks_useStickyOffsets = (useStickyOffsets);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/ColGroup.js


var ColGroup_excluded = ["columnType"];



function ColGroup(_ref) {
  var colWidths = _ref.colWidths,
      columns = _ref.columns,
      columCount = _ref.columCount;
  var cols = [];
  var len = columCount || columns.length; // Only insert col with width & additional props
  // Skip if rest col do not have any useful info

  var mustInsert = false;

  for (var i = len - 1; i >= 0; i -= 1) {
    var width = colWidths[i];
    var column = columns && columns[i];
    var additionalProps = column && column[INTERNAL_COL_DEFINE];

    if (width || additionalProps || mustInsert) {
      var _ref2 = additionalProps || {},
          columnType = _ref2.columnType,
          restAdditionalProps = (0,objectWithoutProperties/* default */.Z)(_ref2, ColGroup_excluded);

      cols.unshift( /*#__PURE__*/react.createElement("col", (0,esm_extends/* default */.Z)({
        key: i,
        style: {
          width: width
        }
      }, restAdditionalProps)));
      mustInsert = true;
    }
  }

  return /*#__PURE__*/react.createElement("colgroup", null, cols);
}

/* harmony default export */ var es_ColGroup = (ColGroup);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/Panel/index.js


function Panel(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return /*#__PURE__*/react.createElement("div", {
    className: className
  }, children);
}

/* harmony default export */ var es_Panel = (Panel);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/Footer/Cell.js






function SummaryCell(_ref) {
  var className = _ref.className,
      index = _ref.index,
      children = _ref.children,
      _ref$colSpan = _ref.colSpan,
      colSpan = _ref$colSpan === void 0 ? 1 : _ref$colSpan,
      rowSpan = _ref.rowSpan,
      align = _ref.align;

  var _React$useContext = react.useContext(context_TableContext),
      prefixCls = _React$useContext.prefixCls,
      direction = _React$useContext.direction;

  var _React$useContext2 = react.useContext(SummaryContext),
      scrollColumnIndex = _React$useContext2.scrollColumnIndex,
      stickyOffsets = _React$useContext2.stickyOffsets,
      flattenColumns = _React$useContext2.flattenColumns;

  var lastIndex = index + colSpan - 1;
  var mergedColSpan = lastIndex + 1 === scrollColumnIndex ? colSpan + 1 : colSpan;
  var fixedInfo = getCellFixedInfo(index, index + mergedColSpan - 1, flattenColumns, stickyOffsets, direction);
  return /*#__PURE__*/react.createElement(es_Cell, (0,esm_extends/* default */.Z)({
    className: className,
    index: index,
    component: "td",
    prefixCls: prefixCls,
    record: null,
    dataIndex: null,
    align: align,
    colSpan: mergedColSpan,
    rowSpan: rowSpan,
    render: function render() {
      return children;
    }
  }, fixedInfo));
}
;// CONCATENATED MODULE: ./node_modules/rc-table/es/Footer/Row.js

var Row_excluded = ["children"];

function FooterRow(_ref) {
  var children = _ref.children,
      props = (0,objectWithoutProperties/* default */.Z)(_ref, Row_excluded);

  return /*#__PURE__*/react.createElement("tr", props, children);
}
;// CONCATENATED MODULE: ./node_modules/rc-table/es/Footer/Summary.js


/**
 * Syntactic sugar. Do not support HOC.
 */

function Summary(_ref) {
  var children = _ref.children;
  return children;
}

Summary.Row = FooterRow;
Summary.Cell = SummaryCell;
/* harmony default export */ var Footer_Summary = (Summary);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/Footer/index.js



var SummaryContext = /*#__PURE__*/react.createContext({});

function Footer(_ref) {
  var children = _ref.children,
      stickyOffsets = _ref.stickyOffsets,
      flattenColumns = _ref.flattenColumns;
  var tableContext = react.useContext(context_TableContext);
  var prefixCls = tableContext.prefixCls;
  var lastColumnIndex = flattenColumns.length - 1;
  var scrollColumn = flattenColumns[lastColumnIndex];
  var summaryContext = react.useMemo(function () {
    return {
      stickyOffsets: stickyOffsets,
      flattenColumns: flattenColumns,
      scrollColumnIndex: (scrollColumn === null || scrollColumn === void 0 ? void 0 : scrollColumn.scrollbar) ? lastColumnIndex : null
    };
  }, [scrollColumn, flattenColumns, lastColumnIndex, stickyOffsets]);
  return /*#__PURE__*/react.createElement(SummaryContext.Provider, {
    value: summaryContext
  }, /*#__PURE__*/react.createElement("tfoot", {
    className: "".concat(prefixCls, "-summary")
  }, children));
}

/* harmony default export */ var es_Footer = (Footer);
var FooterComponents = Footer_Summary;
;// CONCATENATED MODULE: ./node_modules/rc-table/es/utils/expandUtil.js



function renderExpandIcon(_ref) {
  var _classNames;

  var prefixCls = _ref.prefixCls,
      record = _ref.record,
      onExpand = _ref.onExpand,
      expanded = _ref.expanded,
      expandable = _ref.expandable;
  var expandClassName = "".concat(prefixCls, "-row-expand-icon");

  if (!expandable) {
    return /*#__PURE__*/react.createElement("span", {
      className: classnames_default()(expandClassName, "".concat(prefixCls, "-row-spaced"))
    });
  }

  var onClick = function onClick(event) {
    onExpand(record, event);
    event.stopPropagation();
  };

  return /*#__PURE__*/react.createElement("span", {
    className: classnames_default()(expandClassName, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-row-expanded"), expanded), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-row-collapsed"), !expanded), _classNames)),
    onClick: onClick
  });
}
function findAllChildrenKeys(data, getRowKey, childrenColumnName) {
  var keys = [];

  function dig(list) {
    (list || []).forEach(function (item, index) {
      keys.push(getRowKey(item, index));
      dig(item[childrenColumnName]);
    });
  }

  dig(data);
  return keys;
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/addEventListener.js
var addEventListener = __webpack_require__(4019);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/Dom/css.js
/* eslint-disable no-nested-ternary */
var PIXEL_PATTERN = /margin|padding|width|height|max|min|offset/;
var removePixel = {
  left: true,
  top: true
};
var floatMap = {
  cssFloat: 1,
  styleFloat: 1,
  float: 1
};

function css_getComputedStyle(node) {
  return node.nodeType === 1 ? node.ownerDocument.defaultView.getComputedStyle(node, null) : {};
}

function getStyleValue(node, type, value) {
  type = type.toLowerCase();

  if (value === 'auto') {
    if (type === 'height') {
      return node.offsetHeight;
    }

    if (type === 'width') {
      return node.offsetWidth;
    }
  }

  if (!(type in removePixel)) {
    removePixel[type] = PIXEL_PATTERN.test(type);
  }

  return removePixel[type] ? parseFloat(value) || 0 : value;
}

function get(node, name) {
  var length = arguments.length;
  var style = css_getComputedStyle(node);
  name = floatMap[name] ? 'cssFloat' in node.style ? 'cssFloat' : 'styleFloat' : name;
  return length === 1 ? style : getStyleValue(node, name, style[name] || node.style[name]);
}
function set(node, name, value) {
  var length = arguments.length;
  name = floatMap[name] ? 'cssFloat' in node.style ? 'cssFloat' : 'styleFloat' : name;

  if (length === 3) {
    if (typeof value === 'number' && PIXEL_PATTERN.test(name)) {
      value = "".concat(value, "px");
    }

    node.style[name] = value; // Number

    return value;
  }

  for (var x in name) {
    if (name.hasOwnProperty(x)) {
      set(node, x, name[x]);
    }
  }

  return css_getComputedStyle(node);
}
function getOuterWidth(el) {
  if (el === document.body) {
    return document.documentElement.clientWidth;
  }

  return el.offsetWidth;
}
function getOuterHeight(el) {
  if (el === document.body) {
    return window.innerHeight || document.documentElement.clientHeight;
  }

  return el.offsetHeight;
}
function getDocSize() {
  var width = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
  var height = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
  return {
    width: width,
    height: height
  };
}
function getClientSize() {
  var width = document.documentElement.clientWidth;
  var height = window.innerHeight || document.documentElement.clientHeight;
  return {
    width: width,
    height: height
  };
}
function getScroll() {
  return {
    scrollLeft: Math.max(document.documentElement.scrollLeft, document.body.scrollLeft),
    scrollTop: Math.max(document.documentElement.scrollTop, document.body.scrollTop)
  };
}
function getOffset(node) {
  var box = node.getBoundingClientRect();
  var docElem = document.documentElement; // < ie8 不支持 win.pageXOffset, 则使用 docElem.scrollLeft

  return {
    left: box.left + (window.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || document.body.clientLeft || 0),
    top: box.top + (window.pageYOffset || docElem.scrollTop) - (docElem.clientTop || document.body.clientTop || 0)
  };
}
;// CONCATENATED MODULE: ./node_modules/rc-table/es/stickyScrollBar.js











var StickyScrollBar = function StickyScrollBar(_ref, ref) {
  var _scrollBodyRef$curren, _scrollBodyRef$curren2;

  var scrollBodyRef = _ref.scrollBodyRef,
      onScroll = _ref.onScroll,
      offsetScroll = _ref.offsetScroll,
      container = _ref.container;

  var _React$useContext = react.useContext(context_TableContext),
      prefixCls = _React$useContext.prefixCls;

  var bodyScrollWidth = ((_scrollBodyRef$curren = scrollBodyRef.current) === null || _scrollBodyRef$curren === void 0 ? void 0 : _scrollBodyRef$curren.scrollWidth) || 0;
  var bodyWidth = ((_scrollBodyRef$curren2 = scrollBodyRef.current) === null || _scrollBodyRef$curren2 === void 0 ? void 0 : _scrollBodyRef$curren2.clientWidth) || 0;
  var scrollBarWidth = bodyScrollWidth && bodyWidth * (bodyWidth / bodyScrollWidth);
  var scrollBarRef = react.useRef();

  var _useLayoutState = useLayoutState({
    scrollLeft: 0,
    isHiddenScrollBar: false
  }),
      _useLayoutState2 = (0,slicedToArray/* default */.Z)(_useLayoutState, 2),
      scrollState = _useLayoutState2[0],
      setScrollState = _useLayoutState2[1];

  var refState = react.useRef({
    delta: 0,
    x: 0
  });

  var _React$useState = react.useState(false),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      isActive = _React$useState2[0],
      setActive = _React$useState2[1];

  var onMouseUp = function onMouseUp() {
    setActive(false);
  };

  var onMouseDown = function onMouseDown(event) {
    event.persist();
    refState.current.delta = event.pageX - scrollState.scrollLeft;
    refState.current.x = 0;
    setActive(true);
    event.preventDefault();
  };

  var onMouseMove = function onMouseMove(event) {
    var _window;

    // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/buttons
    var _ref2 = event || ((_window = window) === null || _window === void 0 ? void 0 : _window.event),
        buttons = _ref2.buttons;

    if (!isActive || buttons === 0) {
      // If out body mouse up, we can set isActive false when mouse move
      if (isActive) {
        setActive(false);
      }

      return;
    }

    var left = refState.current.x + event.pageX - refState.current.x - refState.current.delta;

    if (left <= 0) {
      left = 0;
    }

    if (left + scrollBarWidth >= bodyWidth) {
      left = bodyWidth - scrollBarWidth;
    }

    onScroll({
      scrollLeft: left / bodyWidth * (bodyScrollWidth + 2)
    });
    refState.current.x = event.pageX;
  };

  var onContainerScroll = function onContainerScroll() {
    if (!scrollBodyRef.current) {
      return;
    }

    var tableOffsetTop = getOffset(scrollBodyRef.current).top;
    var tableBottomOffset = tableOffsetTop + scrollBodyRef.current.offsetHeight;
    var currentClientOffset = container === window ? document.documentElement.scrollTop + window.innerHeight : getOffset(container).top + container.clientHeight;

    if (tableBottomOffset - getScrollBarSize() <= currentClientOffset || tableOffsetTop >= currentClientOffset - offsetScroll) {
      setScrollState(function (state) {
        return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, state), {}, {
          isHiddenScrollBar: true
        });
      });
    } else {
      setScrollState(function (state) {
        return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, state), {}, {
          isHiddenScrollBar: false
        });
      });
    }
  };

  var setScrollLeft = function setScrollLeft(left) {
    setScrollState(function (state) {
      return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, state), {}, {
        scrollLeft: left / bodyScrollWidth * bodyWidth || 0
      });
    });
  };

  react.useImperativeHandle(ref, function () {
    return {
      setScrollLeft: setScrollLeft
    };
  });
  react.useEffect(function () {
    var onMouseUpListener = (0,addEventListener/* default */.Z)(document.body, 'mouseup', onMouseUp, false);
    var onMouseMoveListener = (0,addEventListener/* default */.Z)(document.body, 'mousemove', onMouseMove, false);
    onContainerScroll();
    return function () {
      onMouseUpListener.remove();
      onMouseMoveListener.remove();
    };
  }, [scrollBarWidth, isActive]);
  react.useEffect(function () {
    var onScrollListener = (0,addEventListener/* default */.Z)(container, 'scroll', onContainerScroll, false);
    var onResizeListener = (0,addEventListener/* default */.Z)(window, 'resize', onContainerScroll, false);
    return function () {
      onScrollListener.remove();
      onResizeListener.remove();
    };
  }, [container]);
  react.useEffect(function () {
    if (!scrollState.isHiddenScrollBar) {
      setScrollState(function (state) {
        var bodyNode = scrollBodyRef.current;

        if (!bodyNode) {
          return state;
        }

        return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, state), {}, {
          scrollLeft: bodyNode.scrollLeft / bodyNode.scrollWidth * bodyNode.clientWidth
        });
      });
    }
  }, [scrollState.isHiddenScrollBar]);

  if (bodyScrollWidth <= bodyWidth || !scrollBarWidth || scrollState.isHiddenScrollBar) {
    return null;
  }

  return /*#__PURE__*/react.createElement("div", {
    style: {
      height: getScrollBarSize(),
      width: bodyWidth,
      bottom: offsetScroll
    },
    className: "".concat(prefixCls, "-sticky-scroll")
  }, /*#__PURE__*/react.createElement("div", {
    onMouseDown: onMouseDown,
    ref: scrollBarRef,
    className: classnames_default()("".concat(prefixCls, "-sticky-scroll-bar"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-sticky-scroll-bar-active"), isActive)),
    style: {
      width: "".concat(scrollBarWidth, "px"),
      transform: "translate3d(".concat(scrollState.scrollLeft, "px, 0, 0)")
    }
  }));
};

/* harmony default export */ var stickyScrollBar = (/*#__PURE__*/react.forwardRef(StickyScrollBar));
;// CONCATENATED MODULE: ./node_modules/rc-table/es/hooks/useSticky.js


 // fix ssr render

var defaultContainer = (0,canUseDom/* default */.Z)() ? window : null;
/** Sticky header hooks */

function useSticky(sticky, prefixCls) {
  var _ref = (0,esm_typeof/* default */.Z)(sticky) === 'object' ? sticky : {},
      _ref$offsetHeader = _ref.offsetHeader,
      offsetHeader = _ref$offsetHeader === void 0 ? 0 : _ref$offsetHeader,
      _ref$offsetSummary = _ref.offsetSummary,
      offsetSummary = _ref$offsetSummary === void 0 ? 0 : _ref$offsetSummary,
      _ref$offsetScroll = _ref.offsetScroll,
      offsetScroll = _ref$offsetScroll === void 0 ? 0 : _ref$offsetScroll,
      _ref$getContainer = _ref.getContainer,
      getContainer = _ref$getContainer === void 0 ? function () {
    return defaultContainer;
  } : _ref$getContainer;

  var container = getContainer() || defaultContainer;
  return react.useMemo(function () {
    var isSticky = !!sticky;
    return {
      isSticky: isSticky,
      stickyClassName: isSticky ? "".concat(prefixCls, "-sticky-holder") : '',
      offsetHeader: offsetHeader,
      offsetSummary: offsetSummary,
      offsetScroll: offsetScroll,
      container: container
    };
  }, [offsetScroll, offsetHeader, offsetSummary, prefixCls, container]);
}
;// CONCATENATED MODULE: ./node_modules/rc-table/es/FixedHolder/index.js




var FixedHolder_excluded = ["className", "noData", "columns", "flattenColumns", "colWidths", "columCount", "stickyOffsets", "direction", "fixHeader", "stickyTopOffset", "stickyBottomOffset", "stickyClassName", "onScroll", "maxContentScroll", "children"];







function useColumnWidth(colWidths, columCount) {
  return (0,react.useMemo)(function () {
    var cloneColumns = [];

    for (var i = 0; i < columCount; i += 1) {
      var val = colWidths[i];

      if (val !== undefined) {
        cloneColumns[i] = val;
      } else {
        return null;
      }
    }

    return cloneColumns;
  }, [colWidths.join('_'), columCount]);
}

var FixedHolder = /*#__PURE__*/react.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      noData = _ref.noData,
      columns = _ref.columns,
      flattenColumns = _ref.flattenColumns,
      colWidths = _ref.colWidths,
      columCount = _ref.columCount,
      stickyOffsets = _ref.stickyOffsets,
      direction = _ref.direction,
      fixHeader = _ref.fixHeader,
      stickyTopOffset = _ref.stickyTopOffset,
      stickyBottomOffset = _ref.stickyBottomOffset,
      stickyClassName = _ref.stickyClassName,
      onScroll = _ref.onScroll,
      maxContentScroll = _ref.maxContentScroll,
      children = _ref.children,
      props = (0,objectWithoutProperties/* default */.Z)(_ref, FixedHolder_excluded);

  var _React$useContext = react.useContext(context_TableContext),
      prefixCls = _React$useContext.prefixCls,
      scrollbarSize = _React$useContext.scrollbarSize,
      isSticky = _React$useContext.isSticky;

  var combinationScrollBarSize = isSticky && !fixHeader ? 0 : scrollbarSize; // Pass wheel to scroll event

  var scrollRef = react.useRef(null);
  var setScrollRef = react.useCallback(function (element) {
    (0,es_ref/* fillRef */.mH)(ref, element);
    (0,es_ref/* fillRef */.mH)(scrollRef, element);
  }, []);
  react.useEffect(function () {
    var _scrollRef$current;

    function onWheel(e) {
      var currentTarget = e.currentTarget,
          deltaX = e.deltaX;

      if (deltaX) {
        onScroll({
          currentTarget: currentTarget,
          scrollLeft: currentTarget.scrollLeft + deltaX
        });
        e.preventDefault();
      }
    }

    (_scrollRef$current = scrollRef.current) === null || _scrollRef$current === void 0 ? void 0 : _scrollRef$current.addEventListener('wheel', onWheel);
    return function () {
      var _scrollRef$current2;

      (_scrollRef$current2 = scrollRef.current) === null || _scrollRef$current2 === void 0 ? void 0 : _scrollRef$current2.removeEventListener('wheel', onWheel);
    };
  }, []); // Check if all flattenColumns has width

  var allFlattenColumnsWithWidth = react.useMemo(function () {
    return flattenColumns.every(function (column) {
      return column.width >= 0;
    });
  }, [flattenColumns]); // Add scrollbar column

  var lastColumn = flattenColumns[flattenColumns.length - 1];
  var ScrollBarColumn = {
    fixed: lastColumn ? lastColumn.fixed : null,
    scrollbar: true,
    onHeaderCell: function onHeaderCell() {
      return {
        className: "".concat(prefixCls, "-cell-scrollbar")
      };
    }
  };
  var columnsWithScrollbar = (0,react.useMemo)(function () {
    return combinationScrollBarSize ? [].concat((0,toConsumableArray/* default */.Z)(columns), [ScrollBarColumn]) : columns;
  }, [combinationScrollBarSize, columns]);
  var flattenColumnsWithScrollbar = (0,react.useMemo)(function () {
    return combinationScrollBarSize ? [].concat((0,toConsumableArray/* default */.Z)(flattenColumns), [ScrollBarColumn]) : flattenColumns;
  }, [combinationScrollBarSize, flattenColumns]); // Calculate the sticky offsets

  var headerStickyOffsets = (0,react.useMemo)(function () {
    var right = stickyOffsets.right,
        left = stickyOffsets.left;
    return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, stickyOffsets), {}, {
      left: direction === 'rtl' ? [].concat((0,toConsumableArray/* default */.Z)(left.map(function (width) {
        return width + combinationScrollBarSize;
      })), [0]) : left,
      right: direction === 'rtl' ? right : [].concat((0,toConsumableArray/* default */.Z)(right.map(function (width) {
        return width + combinationScrollBarSize;
      })), [0]),
      isSticky: isSticky
    });
  }, [combinationScrollBarSize, stickyOffsets, isSticky]);
  var mergedColumnWidth = useColumnWidth(colWidths, columCount);
  return /*#__PURE__*/react.createElement("div", {
    style: (0,objectSpread2/* default */.Z)({
      overflow: 'hidden'
    }, isSticky ? {
      top: stickyTopOffset,
      bottom: stickyBottomOffset
    } : {}),
    ref: setScrollRef,
    className: classnames_default()(className, (0,defineProperty/* default */.Z)({}, stickyClassName, !!stickyClassName))
  }, /*#__PURE__*/react.createElement("table", {
    style: {
      tableLayout: 'fixed',
      visibility: noData || mergedColumnWidth ? null : 'hidden'
    }
  }, (!noData || !maxContentScroll || allFlattenColumnsWithWidth) && /*#__PURE__*/react.createElement(es_ColGroup, {
    colWidths: mergedColumnWidth ? [].concat((0,toConsumableArray/* default */.Z)(mergedColumnWidth), [combinationScrollBarSize]) : [],
    columCount: columCount + 1,
    columns: flattenColumnsWithScrollbar
  }), children((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    stickyOffsets: headerStickyOffsets,
    columns: columnsWithScrollbar,
    flattenColumns: flattenColumnsWithScrollbar
  }))));
});
FixedHolder.displayName = 'FixedHolder';
/* harmony default export */ var es_FixedHolder = (FixedHolder);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/Table.js







/**
 * Feature:
 *  - fixed not need to set width
 *  - support `rowExpandable` to config row expand logic
 *  - add `summary` to support `() => ReactNode`
 *
 * Update:
 *  - `dataIndex` is `array[]` now
 *  - `expandable` wrap all the expand related props
 *
 * Removed:
 *  - expandIconAsCell
 *  - useFixedHeader
 *  - rowRef
 *  - columns[number].onCellClick
 *  - onRowClick
 *  - onRowDoubleClick
 *  - onRowMouseEnter
 *  - onRowMouseLeave
 *  - getBodyWrapper
 *  - bodyStyle
 *
 * Deprecated:
 *  - All expanded props, move into expandable
 */
































 // Used for conditions cache

var Table_EMPTY_DATA = []; // Used for customize scroll

var EMPTY_SCROLL_TARGET = {};
var INTERNAL_HOOKS = 'rc-table-internal-hook';
var MemoTableContent = /*#__PURE__*/react.memo(function (_ref) {
  var children = _ref.children;
  return children;
}, function (prev, next) {
  if (!shallowequal_default()(prev.props, next.props)) {
    return false;
  } // No additional render when pinged status change.
  // This is not a bug.


  return prev.pingLeft !== next.pingLeft || prev.pingRight !== next.pingRight;
});

function Table(props) {
  var _classNames;

  var prefixCls = props.prefixCls,
      className = props.className,
      rowClassName = props.rowClassName,
      style = props.style,
      data = props.data,
      rowKey = props.rowKey,
      scroll = props.scroll,
      tableLayout = props.tableLayout,
      direction = props.direction,
      title = props.title,
      footer = props.footer,
      summary = props.summary,
      id = props.id,
      showHeader = props.showHeader,
      components = props.components,
      emptyText = props.emptyText,
      onRow = props.onRow,
      onHeaderRow = props.onHeaderRow,
      internalHooks = props.internalHooks,
      transformColumns = props.transformColumns,
      internalRefs = props.internalRefs,
      sticky = props.sticky;
  var mergedData = data || Table_EMPTY_DATA;
  var hasData = !!mergedData.length; // ===================== Warning ======================

  if (false) {} // ==================== Customize =====================


  var mergedComponents = react.useMemo(function () {
    return mergeObject(components, {});
  }, [components]);
  var getComponent = react.useCallback(function (path, defaultComponent) {
    return getPathValue(mergedComponents, path) || defaultComponent;
  }, [mergedComponents]);
  var getRowKey = react.useMemo(function () {
    if (typeof rowKey === 'function') {
      return rowKey;
    }

    return function (record) {
      var key = record && record[rowKey];

      if (false) {}

      return key;
    };
  }, [rowKey]); // ====================== Expand ======================

  var expandableConfig = getExpandableProps(props);
  var expandIcon = expandableConfig.expandIcon,
      expandedRowKeys = expandableConfig.expandedRowKeys,
      defaultExpandedRowKeys = expandableConfig.defaultExpandedRowKeys,
      defaultExpandAllRows = expandableConfig.defaultExpandAllRows,
      expandedRowRender = expandableConfig.expandedRowRender,
      onExpand = expandableConfig.onExpand,
      onExpandedRowsChange = expandableConfig.onExpandedRowsChange,
      expandRowByClick = expandableConfig.expandRowByClick,
      rowExpandable = expandableConfig.rowExpandable,
      expandIconColumnIndex = expandableConfig.expandIconColumnIndex,
      expandedRowClassName = expandableConfig.expandedRowClassName,
      childrenColumnName = expandableConfig.childrenColumnName,
      indentSize = expandableConfig.indentSize;
  var mergedExpandIcon = expandIcon || renderExpandIcon;
  var mergedChildrenColumnName = childrenColumnName || 'children';
  var expandableType = react.useMemo(function () {
    if (expandedRowRender) {
      return 'row';
    }
    /* eslint-disable no-underscore-dangle */

    /**
     * Fix https://github.com/ant-design/ant-design/issues/21154
     * This is a workaround to not to break current behavior.
     * We can remove follow code after final release.
     *
     * To other developer:
     *  Do not use `__PARENT_RENDER_ICON__` in prod since we will remove this when refactor
     */


    if (props.expandable && internalHooks === INTERNAL_HOOKS && props.expandable.__PARENT_RENDER_ICON__ || mergedData.some(function (record) {
      return record && (0,esm_typeof/* default */.Z)(record) === 'object' && record[mergedChildrenColumnName];
    })) {
      return 'nest';
    }
    /* eslint-enable */


    return false;
  }, [!!expandedRowRender, mergedData]);

  var _React$useState = react.useState(function () {
    if (defaultExpandedRowKeys) {
      return defaultExpandedRowKeys;
    }

    if (defaultExpandAllRows) {
      return findAllChildrenKeys(mergedData, getRowKey, mergedChildrenColumnName);
    }

    return [];
  }),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      innerExpandedKeys = _React$useState2[0],
      setInnerExpandedKeys = _React$useState2[1];

  var mergedExpandedKeys = react.useMemo(function () {
    return new Set(expandedRowKeys || innerExpandedKeys || []);
  }, [expandedRowKeys, innerExpandedKeys]);
  var onTriggerExpand = react.useCallback(function (record) {
    var key = getRowKey(record, mergedData.indexOf(record));
    var newExpandedKeys;
    var hasKey = mergedExpandedKeys.has(key);

    if (hasKey) {
      mergedExpandedKeys.delete(key);
      newExpandedKeys = (0,toConsumableArray/* default */.Z)(mergedExpandedKeys);
    } else {
      newExpandedKeys = [].concat((0,toConsumableArray/* default */.Z)(mergedExpandedKeys), [key]);
    }

    setInnerExpandedKeys(newExpandedKeys);

    if (onExpand) {
      onExpand(!hasKey, record);
    }

    if (onExpandedRowsChange) {
      onExpandedRowsChange(newExpandedKeys);
    }
  }, [getRowKey, mergedExpandedKeys, mergedData, onExpand, onExpandedRowsChange]); // Warning if use `expandedRowRender` and nest children in the same time

  if (false) {} // ====================== Column ======================


  var _React$useState3 = react.useState(0),
      _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
      componentWidth = _React$useState4[0],
      setComponentWidth = _React$useState4[1];

  var _useColumns = hooks_useColumns((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), expandableConfig), {}, {
    expandable: !!expandedRowRender,
    expandedKeys: mergedExpandedKeys,
    getRowKey: getRowKey,
    // https://github.com/ant-design/ant-design/issues/23894
    onTriggerExpand: onTriggerExpand,
    expandIcon: mergedExpandIcon,
    expandIconColumnIndex: expandIconColumnIndex,
    direction: direction
  }), internalHooks === INTERNAL_HOOKS ? transformColumns : null),
      _useColumns2 = (0,slicedToArray/* default */.Z)(_useColumns, 2),
      columns = _useColumns2[0],
      flattenColumns = _useColumns2[1];

  var columnContext = react.useMemo(function () {
    return {
      columns: columns,
      flattenColumns: flattenColumns
    };
  }, [columns, flattenColumns]); // ====================== Scroll ======================

  var fullTableRef = react.useRef();
  var scrollHeaderRef = react.useRef();
  var scrollBodyRef = react.useRef();
  var scrollSummaryRef = react.useRef();

  var _React$useState5 = react.useState(false),
      _React$useState6 = (0,slicedToArray/* default */.Z)(_React$useState5, 2),
      pingedLeft = _React$useState6[0],
      setPingedLeft = _React$useState6[1];

  var _React$useState7 = react.useState(false),
      _React$useState8 = (0,slicedToArray/* default */.Z)(_React$useState7, 2),
      pingedRight = _React$useState8[0],
      setPingedRight = _React$useState8[1];

  var _useLayoutState = useLayoutState(new Map()),
      _useLayoutState2 = (0,slicedToArray/* default */.Z)(_useLayoutState, 2),
      colsWidths = _useLayoutState2[0],
      updateColsWidths = _useLayoutState2[1]; // Convert map to number width


  var colsKeys = getColumnsKey(flattenColumns);
  var pureColWidths = colsKeys.map(function (columnKey) {
    return colsWidths.get(columnKey);
  });
  var colWidths = react.useMemo(function () {
    return pureColWidths;
  }, [pureColWidths.join('_')]);
  var stickyOffsets = hooks_useStickyOffsets(colWidths, flattenColumns.length, direction);
  var fixHeader = scroll && validateValue(scroll.y);
  var horizonScroll = scroll && validateValue(scroll.x) || Boolean(expandableConfig.fixed);
  var fixColumn = horizonScroll && flattenColumns.some(function (_ref2) {
    var fixed = _ref2.fixed;
    return fixed;
  }); // Sticky

  var stickyRef = react.useRef();

  var _useSticky = useSticky(sticky, prefixCls),
      isSticky = _useSticky.isSticky,
      offsetHeader = _useSticky.offsetHeader,
      offsetSummary = _useSticky.offsetSummary,
      offsetScroll = _useSticky.offsetScroll,
      stickyClassName = _useSticky.stickyClassName,
      container = _useSticky.container; // Footer (Fix footer must fixed header)


  var summaryNode = summary === null || summary === void 0 ? void 0 : summary(mergedData);
  var fixFooter = (fixHeader || isSticky) && /*#__PURE__*/react.isValidElement(summaryNode) && summaryNode.type === Footer_Summary && summaryNode.props.fixed; // Scroll

  var scrollXStyle;
  var scrollYStyle;
  var scrollTableStyle;

  if (fixHeader) {
    scrollYStyle = {
      overflowY: 'scroll',
      maxHeight: scroll.y
    };
  }

  if (horizonScroll) {
    scrollXStyle = {
      overflowX: 'auto'
    }; // When no vertical scrollbar, should hide it
    // https://github.com/ant-design/ant-design/pull/20705
    // https://github.com/ant-design/ant-design/issues/21879

    if (!fixHeader) {
      scrollYStyle = {
        overflowY: 'hidden'
      };
    }

    scrollTableStyle = {
      width: scroll.x === true ? 'auto' : scroll.x,
      minWidth: '100%'
    };
  }

  var onColumnResize = react.useCallback(function (columnKey, width) {
    if ((0,isVisible/* default */.Z)(fullTableRef.current)) {
      updateColsWidths(function (widths) {
        if (widths.get(columnKey) !== width) {
          var newWidths = new Map(widths);
          newWidths.set(columnKey, width);
          return newWidths;
        }

        return widths;
      });
    }
  }, []);

  var _useTimeoutLock = useTimeoutLock(null),
      _useTimeoutLock2 = (0,slicedToArray/* default */.Z)(_useTimeoutLock, 2),
      setScrollTarget = _useTimeoutLock2[0],
      getScrollTarget = _useTimeoutLock2[1];

  function forceScroll(scrollLeft, target) {
    if (!target) {
      return;
    }

    if (typeof target === 'function') {
      target(scrollLeft);
    } else if (target.scrollLeft !== scrollLeft) {
      // eslint-disable-next-line no-param-reassign
      target.scrollLeft = scrollLeft;
    }
  }

  var onScroll = function onScroll(_ref3) {
    var currentTarget = _ref3.currentTarget,
        scrollLeft = _ref3.scrollLeft;
    var isRTL = direction === 'rtl';
    var mergedScrollLeft = typeof scrollLeft === 'number' ? scrollLeft : currentTarget.scrollLeft;
    var compareTarget = currentTarget || EMPTY_SCROLL_TARGET;

    if (!getScrollTarget() || getScrollTarget() === compareTarget) {
      var _stickyRef$current;

      setScrollTarget(compareTarget);
      forceScroll(mergedScrollLeft, scrollHeaderRef.current);
      forceScroll(mergedScrollLeft, scrollBodyRef.current);
      forceScroll(mergedScrollLeft, scrollSummaryRef.current);
      forceScroll(mergedScrollLeft, (_stickyRef$current = stickyRef.current) === null || _stickyRef$current === void 0 ? void 0 : _stickyRef$current.setScrollLeft);
    }

    if (currentTarget) {
      var scrollWidth = currentTarget.scrollWidth,
          clientWidth = currentTarget.clientWidth;

      if (isRTL) {
        setPingedLeft(-mergedScrollLeft < scrollWidth - clientWidth);
        setPingedRight(-mergedScrollLeft > 0);
      } else {
        setPingedLeft(mergedScrollLeft > 0);
        setPingedRight(mergedScrollLeft < scrollWidth - clientWidth);
      }
    }
  };

  var triggerOnScroll = function triggerOnScroll() {
    if (horizonScroll && scrollBodyRef.current) {
      onScroll({
        currentTarget: scrollBodyRef.current
      });
    } else {
      setPingedLeft(false);
      setPingedRight(false);
    }
  };

  var onFullTableResize = function onFullTableResize(_ref4) {
    var width = _ref4.width;

    if (width !== componentWidth) {
      triggerOnScroll();
      setComponentWidth(fullTableRef.current ? fullTableRef.current.offsetWidth : width);
    }
  }; // Sync scroll bar when init or `horizonScroll`, `data` and `columns.length` changed


  var mounted = react.useRef(false);
  react.useEffect(function () {
    // onFullTableResize will be trigger once when ResizeObserver is mounted
    // This will reduce one duplicated triggerOnScroll time
    if (mounted.current) {
      triggerOnScroll();
    }
  }, [horizonScroll, data, columns.length]);
  react.useEffect(function () {
    mounted.current = true;
  }, []); // ===================== Effects ======================

  var _React$useState9 = react.useState(0),
      _React$useState10 = (0,slicedToArray/* default */.Z)(_React$useState9, 2),
      scrollbarSize = _React$useState10[0],
      setScrollbarSize = _React$useState10[1];

  var _React$useState11 = react.useState(true),
      _React$useState12 = (0,slicedToArray/* default */.Z)(_React$useState11, 2),
      supportSticky = _React$useState12[0],
      setSupportSticky = _React$useState12[1]; // Only IE not support, we mark as support first


  react.useEffect(function () {
    setScrollbarSize(getTargetScrollBarSize(scrollBodyRef.current).width);
    setSupportSticky(isStyleSupport('position', 'sticky'));
  }, []); // ================== INTERNAL HOOKS ==================

  react.useEffect(function () {
    if (internalHooks === INTERNAL_HOOKS && internalRefs) {
      internalRefs.body.current = scrollBodyRef.current;
    }
  }); // ====================== Render ======================

  var TableComponent = getComponent(['table'], 'table'); // Table layout

  var mergedTableLayout = react.useMemo(function () {
    if (tableLayout) {
      return tableLayout;
    } // https://github.com/ant-design/ant-design/issues/25227
    // When scroll.x is max-content, no need to fix table layout
    // it's width should stretch out to fit content


    if (fixColumn) {
      return scroll.x === 'max-content' ? 'auto' : 'fixed';
    }

    if (fixHeader || isSticky || flattenColumns.some(function (_ref5) {
      var ellipsis = _ref5.ellipsis;
      return ellipsis;
    })) {
      return 'fixed';
    }

    return 'auto';
  }, [fixHeader, fixColumn, flattenColumns, tableLayout, isSticky]);
  var groupTableNode; // Header props

  var headerProps = {
    colWidths: colWidths,
    columCount: flattenColumns.length,
    stickyOffsets: stickyOffsets,
    onHeaderRow: onHeaderRow,
    fixHeader: fixHeader,
    scroll: scroll
  }; // Empty

  var emptyNode = react.useMemo(function () {
    if (hasData) {
      return null;
    }

    if (typeof emptyText === 'function') {
      return emptyText();
    }

    return emptyText;
  }, [hasData, emptyText]); // Body

  var bodyTable = /*#__PURE__*/react.createElement(es_Body, {
    data: mergedData,
    measureColumnWidth: fixHeader || horizonScroll || isSticky,
    expandedKeys: mergedExpandedKeys,
    rowExpandable: rowExpandable,
    getRowKey: getRowKey,
    onRow: onRow,
    emptyNode: emptyNode,
    childrenColumnName: mergedChildrenColumnName
  });
  var bodyColGroup = /*#__PURE__*/react.createElement(es_ColGroup, {
    colWidths: flattenColumns.map(function (_ref6) {
      var width = _ref6.width;
      return width;
    }),
    columns: flattenColumns
  });
  var customizeScrollBody = getComponent(['body']);

  if (false) {}

  if (fixHeader || isSticky) {
    // >>>>>> Fixed Header
    var bodyContent;

    if (typeof customizeScrollBody === 'function') {
      bodyContent = customizeScrollBody(mergedData, {
        scrollbarSize: scrollbarSize,
        ref: scrollBodyRef,
        onScroll: onScroll
      });
      headerProps.colWidths = flattenColumns.map(function (_ref7, index) {
        var width = _ref7.width;
        var colWidth = index === columns.length - 1 ? width - scrollbarSize : width;

        if (typeof colWidth === 'number' && !Number.isNaN(colWidth)) {
          return colWidth;
        }

        (0,es_warning/* default */.ZP)(false, 'When use `components.body` with render props. Each column should have a fixed `width` value.');
        return 0;
      });
    } else {
      bodyContent = /*#__PURE__*/react.createElement("div", {
        style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, scrollXStyle), scrollYStyle),
        onScroll: onScroll,
        ref: scrollBodyRef,
        className: classnames_default()("".concat(prefixCls, "-body"))
      }, /*#__PURE__*/react.createElement(TableComponent, {
        style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, scrollTableStyle), {}, {
          tableLayout: mergedTableLayout
        })
      }, bodyColGroup, bodyTable, !fixFooter && summaryNode && /*#__PURE__*/react.createElement(es_Footer, {
        stickyOffsets: stickyOffsets,
        flattenColumns: flattenColumns
      }, summaryNode)));
    } // Fixed holder share the props


    var fixedHolderProps = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
      noData: !mergedData.length,
      maxContentScroll: horizonScroll && scroll.x === 'max-content'
    }, headerProps), columnContext), {}, {
      direction: direction,
      stickyClassName: stickyClassName,
      onScroll: onScroll
    });

    groupTableNode = /*#__PURE__*/react.createElement(react.Fragment, null, showHeader !== false && /*#__PURE__*/react.createElement(es_FixedHolder, (0,esm_extends/* default */.Z)({}, fixedHolderProps, {
      stickyTopOffset: offsetHeader,
      className: "".concat(prefixCls, "-header"),
      ref: scrollHeaderRef
    }), function (fixedHolderPassProps) {
      return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Header_Header, fixedHolderPassProps), fixFooter === 'top' && /*#__PURE__*/react.createElement(es_Footer, fixedHolderPassProps, summaryNode));
    }), bodyContent, fixFooter && fixFooter !== 'top' && /*#__PURE__*/react.createElement(es_FixedHolder, (0,esm_extends/* default */.Z)({}, fixedHolderProps, {
      stickyBottomOffset: offsetSummary,
      className: "".concat(prefixCls, "-summary"),
      ref: scrollSummaryRef
    }), function (fixedHolderPassProps) {
      return /*#__PURE__*/react.createElement(es_Footer, fixedHolderPassProps, summaryNode);
    }), isSticky && /*#__PURE__*/react.createElement(stickyScrollBar, {
      ref: stickyRef,
      offsetScroll: offsetScroll,
      scrollBodyRef: scrollBodyRef,
      onScroll: onScroll,
      container: container
    }));
  } else {
    // >>>>>> Unique table
    groupTableNode = /*#__PURE__*/react.createElement("div", {
      style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, scrollXStyle), scrollYStyle),
      className: classnames_default()("".concat(prefixCls, "-content")),
      onScroll: onScroll,
      ref: scrollBodyRef
    }, /*#__PURE__*/react.createElement(TableComponent, {
      style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, scrollTableStyle), {}, {
        tableLayout: mergedTableLayout
      })
    }, bodyColGroup, showHeader !== false && /*#__PURE__*/react.createElement(Header_Header, (0,esm_extends/* default */.Z)({}, headerProps, columnContext)), bodyTable, summaryNode && /*#__PURE__*/react.createElement(es_Footer, {
      stickyOffsets: stickyOffsets,
      flattenColumns: flattenColumns
    }, summaryNode)));
  }

  var ariaProps = pickAttrs(props, {
    aria: true,
    data: true
  });
  var fullTable = /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    className: classnames_default()(prefixCls, className, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-ping-left"), pingedLeft), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-ping-right"), pingedRight), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-layout-fixed"), tableLayout === 'fixed'), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-fixed-header"), fixHeader), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-fixed-column"), fixColumn), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-scroll-horizontal"), horizonScroll), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-has-fix-left"), flattenColumns[0] && flattenColumns[0].fixed), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-has-fix-right"), flattenColumns[flattenColumns.length - 1] && flattenColumns[flattenColumns.length - 1].fixed === 'right'), _classNames)),
    style: style,
    id: id,
    ref: fullTableRef
  }, ariaProps), /*#__PURE__*/react.createElement(MemoTableContent, {
    pingLeft: pingedLeft,
    pingRight: pingedRight,
    props: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
      stickyOffsets: stickyOffsets,
      mergedExpandedKeys: mergedExpandedKeys
    })
  }, title && /*#__PURE__*/react.createElement(es_Panel, {
    className: "".concat(prefixCls, "-title")
  }, title(mergedData)), /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-container")
  }, groupTableNode), footer && /*#__PURE__*/react.createElement(es_Panel, {
    className: "".concat(prefixCls, "-footer")
  }, footer(mergedData))));

  if (horizonScroll) {
    fullTable = /*#__PURE__*/react.createElement(rc_resize_observer_es/* default */.Z, {
      onResize: onFullTableResize
    }, fullTable);
  }

  var TableContextValue = react.useMemo(function () {
    return {
      prefixCls: prefixCls,
      getComponent: getComponent,
      scrollbarSize: scrollbarSize,
      direction: direction,
      fixedInfoList: flattenColumns.map(function (_, colIndex) {
        return getCellFixedInfo(colIndex, colIndex, flattenColumns, stickyOffsets, direction);
      }),
      isSticky: isSticky
    };
  }, [prefixCls, getComponent, scrollbarSize, direction, flattenColumns, stickyOffsets, direction, isSticky]);
  var BodyContextValue = react.useMemo(function () {
    return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, columnContext), {}, {
      tableLayout: mergedTableLayout,
      rowClassName: rowClassName,
      expandedRowClassName: expandedRowClassName,
      expandIcon: mergedExpandIcon,
      expandableType: expandableType,
      expandRowByClick: expandRowByClick,
      expandedRowRender: expandedRowRender,
      onTriggerExpand: onTriggerExpand,
      expandIconColumnIndex: expandIconColumnIndex,
      indentSize: indentSize
    });
  }, [columnContext, mergedTableLayout, rowClassName, expandedRowClassName, mergedExpandIcon, expandableType, expandRowByClick, expandedRowRender, onTriggerExpand, expandIconColumnIndex, indentSize]);
  var ExpandedRowContextValue = react.useMemo(function () {
    return {
      componentWidth: componentWidth,
      fixHeader: fixHeader,
      fixColumn: fixColumn,
      horizonScroll: horizonScroll
    };
  }, [componentWidth, fixHeader, fixColumn, horizonScroll]);
  var ResizeContextValue = react.useMemo(function () {
    return {
      onColumnResize: onColumnResize
    };
  }, [onColumnResize]);
  return /*#__PURE__*/react.createElement(context_StickyContext.Provider, {
    value: supportSticky
  }, /*#__PURE__*/react.createElement(context_TableContext.Provider, {
    value: TableContextValue
  }, /*#__PURE__*/react.createElement(context_BodyContext.Provider, {
    value: BodyContextValue
  }, /*#__PURE__*/react.createElement(context_ExpandedRowContext.Provider, {
    value: ExpandedRowContextValue
  }, /*#__PURE__*/react.createElement(context_ResizeContext.Provider, {
    value: ResizeContextValue
  }, fullTable)))));
}

Table.EXPAND_COLUMN = EXPAND_COLUMN;
Table.Column = sugar_Column;
Table.ColumnGroup = sugar_ColumnGroup;
Table.Summary = FooterComponents;
Table.defaultProps = {
  rowKey: 'key',
  prefixCls: 'rc-table',
  emptyText: function emptyText() {
    return 'No Data';
  }
};
/* harmony default export */ var es_Table = (Table);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/index.js






/* harmony default export */ var rc_table_es = (es_Table);
// EXTERNAL MODULE: ./node_modules/antd/es/spin/index.js
var spin = __webpack_require__(1382);
;// CONCATENATED MODULE: ./node_modules/rc-pagination/es/Pager.js


/* eslint react/prop-types: 0 */



var Pager = function Pager(props) {
  var _classNames;

  var prefixCls = "".concat(props.rootPrefixCls, "-item");
  var cls = classnames_default()(prefixCls, "".concat(prefixCls, "-").concat(props.page), (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-active"), props.active), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-disabled"), !props.page), (0,defineProperty/* default */.Z)(_classNames, props.className, !!props.className), _classNames));

  var handleClick = function handleClick() {
    props.onClick(props.page);
  };

  var handleKeyPress = function handleKeyPress(e) {
    props.onKeyPress(e, props.onClick, props.page);
  };

  return /*#__PURE__*/react.createElement("li", {
    title: props.showTitle ? props.page : null,
    className: cls,
    onClick: handleClick,
    onKeyPress: handleKeyPress,
    tabIndex: "0"
  }, props.itemRender(props.page, 'page', /*#__PURE__*/react.createElement("a", {
    rel: "nofollow"
  }, props.page)));
};

/* harmony default export */ var es_Pager = (Pager);
;// CONCATENATED MODULE: ./node_modules/rc-pagination/es/KeyCode.js
/* harmony default export */ var es_KeyCode = ({
  ZERO: 48,
  NINE: 57,
  NUMPAD_ZERO: 96,
  NUMPAD_NINE: 105,
  BACKSPACE: 8,
  DELETE: 46,
  ENTER: 13,
  ARROW_UP: 38,
  ARROW_DOWN: 40
});
;// CONCATENATED MODULE: ./node_modules/rc-pagination/es/Options.js





/* eslint react/prop-types: 0 */



var Options = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(Options, _React$Component);

  var _super = (0,createSuper/* default */.Z)(Options);

  function Options() {
    var _this;

    (0,classCallCheck/* default */.Z)(this, Options);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      goInputText: ''
    };

    _this.buildOptionText = function (value) {
      return "".concat(value, " ").concat(_this.props.locale.items_per_page);
    };

    _this.changeSize = function (value) {
      _this.props.changeSize(Number(value));
    };

    _this.handleChange = function (e) {
      _this.setState({
        goInputText: e.target.value
      });
    };

    _this.handleBlur = function (e) {
      var _this$props = _this.props,
          goButton = _this$props.goButton,
          quickGo = _this$props.quickGo,
          rootPrefixCls = _this$props.rootPrefixCls;
      var goInputText = _this.state.goInputText;

      if (goButton || goInputText === '') {
        return;
      }

      _this.setState({
        goInputText: ''
      });

      if (e.relatedTarget && (e.relatedTarget.className.indexOf("".concat(rootPrefixCls, "-item-link")) >= 0 || e.relatedTarget.className.indexOf("".concat(rootPrefixCls, "-item")) >= 0)) {
        return;
      }

      quickGo(_this.getValidValue());
    };

    _this.go = function (e) {
      var goInputText = _this.state.goInputText;

      if (goInputText === '') {
        return;
      }

      if (e.keyCode === es_KeyCode.ENTER || e.type === 'click') {
        _this.setState({
          goInputText: ''
        });

        _this.props.quickGo(_this.getValidValue());
      }
    };

    return _this;
  }

  (0,createClass/* default */.Z)(Options, [{
    key: "getValidValue",
    value: function getValidValue() {
      var goInputText = this.state.goInputText; // eslint-disable-next-line no-restricted-globals

      return !goInputText || isNaN(goInputText) ? undefined : Number(goInputText);
    }
  }, {
    key: "getPageSizeOptions",
    value: function getPageSizeOptions() {
      var _this$props2 = this.props,
          pageSize = _this$props2.pageSize,
          pageSizeOptions = _this$props2.pageSizeOptions;

      if (pageSizeOptions.some(function (option) {
        return option.toString() === pageSize.toString();
      })) {
        return pageSizeOptions;
      }

      return pageSizeOptions.concat([pageSize.toString()]).sort(function (a, b) {
        // eslint-disable-next-line no-restricted-globals
        var numberA = isNaN(Number(a)) ? 0 : Number(a); // eslint-disable-next-line no-restricted-globals

        var numberB = isNaN(Number(b)) ? 0 : Number(b);
        return numberA - numberB;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          pageSize = _this$props3.pageSize,
          locale = _this$props3.locale,
          rootPrefixCls = _this$props3.rootPrefixCls,
          changeSize = _this$props3.changeSize,
          quickGo = _this$props3.quickGo,
          goButton = _this$props3.goButton,
          selectComponentClass = _this$props3.selectComponentClass,
          buildOptionText = _this$props3.buildOptionText,
          selectPrefixCls = _this$props3.selectPrefixCls,
          disabled = _this$props3.disabled;
      var goInputText = this.state.goInputText;
      var prefixCls = "".concat(rootPrefixCls, "-options");
      var Select = selectComponentClass;
      var changeSelect = null;
      var goInput = null;
      var gotoButton = null;

      if (!changeSize && !quickGo) {
        return null;
      }

      var pageSizeOptions = this.getPageSizeOptions();

      if (changeSize && Select) {
        var options = pageSizeOptions.map(function (opt, i) {
          return /*#__PURE__*/react.createElement(Select.Option, {
            key: i,
            value: opt.toString()
          }, (buildOptionText || _this2.buildOptionText)(opt));
        });
        changeSelect = /*#__PURE__*/react.createElement(Select, {
          disabled: disabled,
          prefixCls: selectPrefixCls,
          showSearch: false,
          className: "".concat(prefixCls, "-size-changer"),
          optionLabelProp: "children",
          dropdownMatchSelectWidth: false,
          value: (pageSize || pageSizeOptions[0]).toString(),
          onChange: this.changeSize,
          getPopupContainer: function getPopupContainer(triggerNode) {
            return triggerNode.parentNode;
          },
          "aria-label": locale.page_size,
          defaultOpen: false
        }, options);
      }

      if (quickGo) {
        if (goButton) {
          gotoButton = typeof goButton === 'boolean' ? /*#__PURE__*/react.createElement("button", {
            type: "button",
            onClick: this.go,
            onKeyUp: this.go,
            disabled: disabled,
            className: "".concat(prefixCls, "-quick-jumper-button")
          }, locale.jump_to_confirm) : /*#__PURE__*/react.createElement("span", {
            onClick: this.go,
            onKeyUp: this.go
          }, goButton);
        }

        goInput = /*#__PURE__*/react.createElement("div", {
          className: "".concat(prefixCls, "-quick-jumper")
        }, locale.jump_to, /*#__PURE__*/react.createElement("input", {
          disabled: disabled,
          type: "text",
          value: goInputText,
          onChange: this.handleChange,
          onKeyUp: this.go,
          onBlur: this.handleBlur,
          "aria-label": locale.page
        }), locale.page, gotoButton);
      }

      return /*#__PURE__*/react.createElement("li", {
        className: "".concat(prefixCls)
      }, changeSelect, goInput);
    }
  }]);

  return Options;
}(react.Component);

Options.defaultProps = {
  pageSizeOptions: ['10', '20', '50', '100']
};
/* harmony default export */ var es_Options = (Options);
;// CONCATENATED MODULE: ./node_modules/rc-pagination/es/locale/zh_CN.js
/* harmony default export */ var zh_CN = ({
  // Options.jsx
  items_per_page: '条/页',
  jump_to: '跳至',
  jump_to_confirm: '确定',
  page: '页',
  // Pagination.jsx
  prev_page: '上一页',
  next_page: '下一页',
  prev_5: '向前 5 页',
  next_5: '向后 5 页',
  prev_3: '向前 3 页',
  next_3: '向后 3 页',
  page_size: '页码'
});
;// CONCATENATED MODULE: ./node_modules/rc-pagination/es/Pagination.js
/* provided dependency */ var console = __webpack_require__(5108);








/* eslint react/prop-types: 0 */







function noop() {}

function isInteger(v) {
  var value = Number(v);
  return (// eslint-disable-next-line no-restricted-globals
    typeof value === 'number' && !isNaN(value) && isFinite(value) && Math.floor(value) === value
  );
}

function defaultItemRender(page, type, element) {
  return element;
}

function calculatePage(p, state, props) {
  var pageSize = typeof p === 'undefined' ? state.pageSize : p;
  return Math.floor((props.total - 1) / pageSize) + 1;
}

var Pagination = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(Pagination, _React$Component);

  var _super = (0,createSuper/* default */.Z)(Pagination);

  function Pagination(props) {
    var _this;

    (0,classCallCheck/* default */.Z)(this, Pagination);

    _this = _super.call(this, props);

    _this.getJumpPrevPage = function () {
      return Math.max(1, _this.state.current - (_this.props.showLessItems ? 3 : 5));
    };

    _this.getJumpNextPage = function () {
      return Math.min(calculatePage(undefined, _this.state, _this.props), _this.state.current + (_this.props.showLessItems ? 3 : 5));
    };

    _this.getItemIcon = function (icon, label) {
      var prefixCls = _this.props.prefixCls;
      var iconNode = icon || /*#__PURE__*/react.createElement("button", {
        type: "button",
        "aria-label": label,
        className: "".concat(prefixCls, "-item-link")
      });

      if (typeof icon === 'function') {
        iconNode = /*#__PURE__*/react.createElement(icon, (0,objectSpread2/* default */.Z)({}, _this.props));
      }

      return iconNode;
    };

    _this.savePaginationNode = function (node) {
      _this.paginationNode = node;
    };

    _this.isValid = function (page) {
      var total = _this.props.total;
      return isInteger(page) && page !== _this.state.current && isInteger(total) && total > 0;
    };

    _this.shouldDisplayQuickJumper = function () {
      var _this$props = _this.props,
          showQuickJumper = _this$props.showQuickJumper,
          total = _this$props.total;
      var pageSize = _this.state.pageSize;

      if (total <= pageSize) {
        return false;
      }

      return showQuickJumper;
    };

    _this.handleKeyDown = function (e) {
      if (e.keyCode === es_KeyCode.ARROW_UP || e.keyCode === es_KeyCode.ARROW_DOWN) {
        e.preventDefault();
      }
    };

    _this.handleKeyUp = function (e) {
      var value = _this.getValidValue(e);

      var currentInputValue = _this.state.currentInputValue;

      if (value !== currentInputValue) {
        _this.setState({
          currentInputValue: value
        });
      }

      if (e.keyCode === es_KeyCode.ENTER) {
        _this.handleChange(value);
      } else if (e.keyCode === es_KeyCode.ARROW_UP) {
        _this.handleChange(value - 1);
      } else if (e.keyCode === es_KeyCode.ARROW_DOWN) {
        _this.handleChange(value + 1);
      }
    };

    _this.handleBlur = function (e) {
      var value = _this.getValidValue(e);

      _this.handleChange(value);
    };

    _this.changePageSize = function (size) {
      var current = _this.state.current;
      var newCurrent = calculatePage(size, _this.state, _this.props);
      current = current > newCurrent ? newCurrent : current; // fix the issue:
      // Once 'total' is 0, 'current' in 'onShowSizeChange' is 0, which is not correct.

      if (newCurrent === 0) {
        // eslint-disable-next-line prefer-destructuring
        current = _this.state.current;
      }

      if (typeof size === 'number') {
        if (!('pageSize' in _this.props)) {
          _this.setState({
            pageSize: size
          });
        }

        if (!('current' in _this.props)) {
          _this.setState({
            current: current,
            currentInputValue: current
          });
        }
      }

      _this.props.onShowSizeChange(current, size);

      if ('onChange' in _this.props && _this.props.onChange) {
        _this.props.onChange(current, size);
      }
    };

    _this.handleChange = function (p) {
      var disabled = _this.props.disabled;
      var page = p;

      if (_this.isValid(page) && !disabled) {
        var currentPage = calculatePage(undefined, _this.state, _this.props);

        if (page > currentPage) {
          page = currentPage;
        } else if (page < 1) {
          page = 1;
        }

        if (!('current' in _this.props)) {
          _this.setState({
            current: page,
            currentInputValue: page
          });
        }

        var pageSize = _this.state.pageSize;

        _this.props.onChange(page, pageSize);

        return page;
      }

      return _this.state.current;
    };

    _this.prev = function () {
      if (_this.hasPrev()) {
        _this.handleChange(_this.state.current - 1);
      }
    };

    _this.next = function () {
      if (_this.hasNext()) {
        _this.handleChange(_this.state.current + 1);
      }
    };

    _this.jumpPrev = function () {
      _this.handleChange(_this.getJumpPrevPage());
    };

    _this.jumpNext = function () {
      _this.handleChange(_this.getJumpNextPage());
    };

    _this.hasPrev = function () {
      return _this.state.current > 1;
    };

    _this.hasNext = function () {
      return _this.state.current < calculatePage(undefined, _this.state, _this.props);
    };

    _this.runIfEnter = function (event, callback) {
      if (event.key === 'Enter' || event.charCode === 13) {
        for (var _len = arguments.length, restParams = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          restParams[_key - 2] = arguments[_key];
        }

        callback.apply(void 0, restParams);
      }
    };

    _this.runIfEnterPrev = function (e) {
      _this.runIfEnter(e, _this.prev);
    };

    _this.runIfEnterNext = function (e) {
      _this.runIfEnter(e, _this.next);
    };

    _this.runIfEnterJumpPrev = function (e) {
      _this.runIfEnter(e, _this.jumpPrev);
    };

    _this.runIfEnterJumpNext = function (e) {
      _this.runIfEnter(e, _this.jumpNext);
    };

    _this.handleGoTO = function (e) {
      if (e.keyCode === es_KeyCode.ENTER || e.type === 'click') {
        _this.handleChange(_this.state.currentInputValue);
      }
    };

    var hasOnChange = props.onChange !== noop;
    var hasCurrent = ('current' in props);

    if (hasCurrent && !hasOnChange) {
      // eslint-disable-next-line no-console
      console.warn('Warning: You provided a `current` prop to a Pagination component without an `onChange` handler. This will render a read-only component.');
    }

    var _current = props.defaultCurrent;

    if ('current' in props) {
      // eslint-disable-next-line prefer-destructuring
      _current = props.current;
    }

    var _pageSize = props.defaultPageSize;

    if ('pageSize' in props) {
      // eslint-disable-next-line prefer-destructuring
      _pageSize = props.pageSize;
    }

    _current = Math.min(_current, calculatePage(_pageSize, undefined, props));
    _this.state = {
      current: _current,
      currentInputValue: _current,
      pageSize: _pageSize
    };
    return _this;
  }

  (0,createClass/* default */.Z)(Pagination, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      // When current page change, fix focused style of prev item
      // A hacky solution of https://github.com/ant-design/ant-design/issues/8948
      var prefixCls = this.props.prefixCls;

      if (prevState.current !== this.state.current && this.paginationNode) {
        var lastCurrentNode = this.paginationNode.querySelector(".".concat(prefixCls, "-item-").concat(prevState.current));

        if (lastCurrentNode && document.activeElement === lastCurrentNode) {
          lastCurrentNode.blur();
        }
      }
    }
  }, {
    key: "getValidValue",
    value: function getValidValue(e) {
      var inputValue = e.target.value;
      var allPages = calculatePage(undefined, this.state, this.props);
      var currentInputValue = this.state.currentInputValue;
      var value;

      if (inputValue === '') {
        value = inputValue; // eslint-disable-next-line no-restricted-globals
      } else if (isNaN(Number(inputValue))) {
        value = currentInputValue;
      } else if (inputValue >= allPages) {
        value = allPages;
      } else {
        value = Number(inputValue);
      }

      return value;
    }
  }, {
    key: "getShowSizeChanger",
    value: function getShowSizeChanger() {
      var _this$props2 = this.props,
          showSizeChanger = _this$props2.showSizeChanger,
          total = _this$props2.total,
          totalBoundaryShowSizeChanger = _this$props2.totalBoundaryShowSizeChanger;

      if (typeof showSizeChanger !== 'undefined') {
        return showSizeChanger;
      }

      return total > totalBoundaryShowSizeChanger;
    }
  }, {
    key: "renderPrev",
    value: function renderPrev(prevPage) {
      var _this$props3 = this.props,
          prevIcon = _this$props3.prevIcon,
          itemRender = _this$props3.itemRender;
      var prevButton = itemRender(prevPage, 'prev', this.getItemIcon(prevIcon, 'prev page'));
      var disabled = !this.hasPrev();
      return /*#__PURE__*/(0,react.isValidElement)(prevButton) ? /*#__PURE__*/(0,react.cloneElement)(prevButton, {
        disabled: disabled
      }) : prevButton;
    }
  }, {
    key: "renderNext",
    value: function renderNext(nextPage) {
      var _this$props4 = this.props,
          nextIcon = _this$props4.nextIcon,
          itemRender = _this$props4.itemRender;
      var nextButton = itemRender(nextPage, 'next', this.getItemIcon(nextIcon, 'next page'));
      var disabled = !this.hasNext();
      return /*#__PURE__*/(0,react.isValidElement)(nextButton) ? /*#__PURE__*/(0,react.cloneElement)(nextButton, {
        disabled: disabled
      }) : nextButton;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props5 = this.props,
          prefixCls = _this$props5.prefixCls,
          className = _this$props5.className,
          style = _this$props5.style,
          disabled = _this$props5.disabled,
          hideOnSinglePage = _this$props5.hideOnSinglePage,
          total = _this$props5.total,
          locale = _this$props5.locale,
          showQuickJumper = _this$props5.showQuickJumper,
          showLessItems = _this$props5.showLessItems,
          showTitle = _this$props5.showTitle,
          showTotal = _this$props5.showTotal,
          simple = _this$props5.simple,
          itemRender = _this$props5.itemRender,
          showPrevNextJumpers = _this$props5.showPrevNextJumpers,
          jumpPrevIcon = _this$props5.jumpPrevIcon,
          jumpNextIcon = _this$props5.jumpNextIcon,
          selectComponentClass = _this$props5.selectComponentClass,
          selectPrefixCls = _this$props5.selectPrefixCls,
          pageSizeOptions = _this$props5.pageSizeOptions;
      var _this$state = this.state,
          current = _this$state.current,
          pageSize = _this$state.pageSize,
          currentInputValue = _this$state.currentInputValue; // When hideOnSinglePage is true and there is only 1 page, hide the pager

      if (hideOnSinglePage === true && total <= pageSize) {
        return null;
      }

      var allPages = calculatePage(undefined, this.state, this.props);
      var pagerList = [];
      var jumpPrev = null;
      var jumpNext = null;
      var firstPager = null;
      var lastPager = null;
      var gotoButton = null;
      var goButton = showQuickJumper && showQuickJumper.goButton;
      var pageBufferSize = showLessItems ? 1 : 2;
      var prevPage = current - 1 > 0 ? current - 1 : 0;
      var nextPage = current + 1 < allPages ? current + 1 : allPages;
      var dataOrAriaAttributeProps = Object.keys(this.props).reduce(function (prev, key) {
        if (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-' || key === 'role') {
          // eslint-disable-next-line no-param-reassign
          prev[key] = _this2.props[key];
        }

        return prev;
      }, {});

      if (simple) {
        if (goButton) {
          if (typeof goButton === 'boolean') {
            gotoButton = /*#__PURE__*/react.createElement("button", {
              type: "button",
              onClick: this.handleGoTO,
              onKeyUp: this.handleGoTO
            }, locale.jump_to_confirm);
          } else {
            gotoButton = /*#__PURE__*/react.createElement("span", {
              onClick: this.handleGoTO,
              onKeyUp: this.handleGoTO
            }, goButton);
          }

          gotoButton = /*#__PURE__*/react.createElement("li", {
            title: showTitle ? "".concat(locale.jump_to).concat(current, "/").concat(allPages) : null,
            className: "".concat(prefixCls, "-simple-pager")
          }, gotoButton);
        }

        return /*#__PURE__*/react.createElement("ul", (0,esm_extends/* default */.Z)({
          className: classnames_default()(prefixCls, "".concat(prefixCls, "-simple"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-disabled"), disabled), className),
          style: style,
          ref: this.savePaginationNode
        }, dataOrAriaAttributeProps), /*#__PURE__*/react.createElement("li", {
          title: showTitle ? locale.prev_page : null,
          onClick: this.prev,
          tabIndex: this.hasPrev() ? 0 : null,
          onKeyPress: this.runIfEnterPrev,
          className: classnames_default()("".concat(prefixCls, "-prev"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-disabled"), !this.hasPrev())),
          "aria-disabled": !this.hasPrev()
        }, this.renderPrev(prevPage)), /*#__PURE__*/react.createElement("li", {
          title: showTitle ? "".concat(current, "/").concat(allPages) : null,
          className: "".concat(prefixCls, "-simple-pager")
        }, /*#__PURE__*/react.createElement("input", {
          type: "text",
          value: currentInputValue,
          disabled: disabled,
          onKeyDown: this.handleKeyDown,
          onKeyUp: this.handleKeyUp,
          onChange: this.handleKeyUp,
          onBlur: this.handleBlur,
          size: "3"
        }), /*#__PURE__*/react.createElement("span", {
          className: "".concat(prefixCls, "-slash")
        }, "/"), allPages), /*#__PURE__*/react.createElement("li", {
          title: showTitle ? locale.next_page : null,
          onClick: this.next,
          tabIndex: this.hasPrev() ? 0 : null,
          onKeyPress: this.runIfEnterNext,
          className: classnames_default()("".concat(prefixCls, "-next"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-disabled"), !this.hasNext())),
          "aria-disabled": !this.hasNext()
        }, this.renderNext(nextPage)), gotoButton);
      }

      if (allPages <= 3 + pageBufferSize * 2) {
        var pagerProps = {
          locale: locale,
          rootPrefixCls: prefixCls,
          onClick: this.handleChange,
          onKeyPress: this.runIfEnter,
          showTitle: showTitle,
          itemRender: itemRender
        };

        if (!allPages) {
          pagerList.push( /*#__PURE__*/react.createElement(es_Pager, (0,esm_extends/* default */.Z)({}, pagerProps, {
            key: "noPager",
            page: 1,
            className: "".concat(prefixCls, "-item-disabled")
          })));
        }

        for (var i = 1; i <= allPages; i += 1) {
          var active = current === i;
          pagerList.push( /*#__PURE__*/react.createElement(es_Pager, (0,esm_extends/* default */.Z)({}, pagerProps, {
            key: i,
            page: i,
            active: active
          })));
        }
      } else {
        var prevItemTitle = showLessItems ? locale.prev_3 : locale.prev_5;
        var nextItemTitle = showLessItems ? locale.next_3 : locale.next_5;

        if (showPrevNextJumpers) {
          jumpPrev = /*#__PURE__*/react.createElement("li", {
            title: showTitle ? prevItemTitle : null,
            key: "prev",
            onClick: this.jumpPrev,
            tabIndex: "0",
            onKeyPress: this.runIfEnterJumpPrev,
            className: classnames_default()("".concat(prefixCls, "-jump-prev"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-jump-prev-custom-icon"), !!jumpPrevIcon))
          }, itemRender(this.getJumpPrevPage(), 'jump-prev', this.getItemIcon(jumpPrevIcon, 'prev page')));
          jumpNext = /*#__PURE__*/react.createElement("li", {
            title: showTitle ? nextItemTitle : null,
            key: "next",
            tabIndex: "0",
            onClick: this.jumpNext,
            onKeyPress: this.runIfEnterJumpNext,
            className: classnames_default()("".concat(prefixCls, "-jump-next"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-jump-next-custom-icon"), !!jumpNextIcon))
          }, itemRender(this.getJumpNextPage(), 'jump-next', this.getItemIcon(jumpNextIcon, 'next page')));
        }

        lastPager = /*#__PURE__*/react.createElement(es_Pager, {
          locale: locale,
          last: true,
          rootPrefixCls: prefixCls,
          onClick: this.handleChange,
          onKeyPress: this.runIfEnter,
          key: allPages,
          page: allPages,
          active: false,
          showTitle: showTitle,
          itemRender: itemRender
        });
        firstPager = /*#__PURE__*/react.createElement(es_Pager, {
          locale: locale,
          rootPrefixCls: prefixCls,
          onClick: this.handleChange,
          onKeyPress: this.runIfEnter,
          key: 1,
          page: 1,
          active: false,
          showTitle: showTitle,
          itemRender: itemRender
        });
        var left = Math.max(1, current - pageBufferSize);
        var right = Math.min(current + pageBufferSize, allPages);

        if (current - 1 <= pageBufferSize) {
          right = 1 + pageBufferSize * 2;
        }

        if (allPages - current <= pageBufferSize) {
          left = allPages - pageBufferSize * 2;
        }

        for (var _i = left; _i <= right; _i += 1) {
          var _active = current === _i;

          pagerList.push( /*#__PURE__*/react.createElement(es_Pager, {
            locale: locale,
            rootPrefixCls: prefixCls,
            onClick: this.handleChange,
            onKeyPress: this.runIfEnter,
            key: _i,
            page: _i,
            active: _active,
            showTitle: showTitle,
            itemRender: itemRender
          }));
        }

        if (current - 1 >= pageBufferSize * 2 && current !== 1 + 2) {
          pagerList[0] = /*#__PURE__*/(0,react.cloneElement)(pagerList[0], {
            className: "".concat(prefixCls, "-item-after-jump-prev")
          });
          pagerList.unshift(jumpPrev);
        }

        if (allPages - current >= pageBufferSize * 2 && current !== allPages - 2) {
          pagerList[pagerList.length - 1] = /*#__PURE__*/(0,react.cloneElement)(pagerList[pagerList.length - 1], {
            className: "".concat(prefixCls, "-item-before-jump-next")
          });
          pagerList.push(jumpNext);
        }

        if (left !== 1) {
          pagerList.unshift(firstPager);
        }

        if (right !== allPages) {
          pagerList.push(lastPager);
        }
      }

      var totalText = null;

      if (showTotal) {
        totalText = /*#__PURE__*/react.createElement("li", {
          className: "".concat(prefixCls, "-total-text")
        }, showTotal(total, [total === 0 ? 0 : (current - 1) * pageSize + 1, current * pageSize > total ? total : current * pageSize]));
      }

      var prevDisabled = !this.hasPrev() || !allPages;
      var nextDisabled = !this.hasNext() || !allPages;
      return /*#__PURE__*/react.createElement("ul", (0,esm_extends/* default */.Z)({
        className: classnames_default()(prefixCls, className, (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-disabled"), disabled)),
        style: style,
        unselectable: "unselectable",
        ref: this.savePaginationNode
      }, dataOrAriaAttributeProps), totalText, /*#__PURE__*/react.createElement("li", {
        title: showTitle ? locale.prev_page : null,
        onClick: this.prev,
        tabIndex: prevDisabled ? null : 0,
        onKeyPress: this.runIfEnterPrev,
        className: classnames_default()("".concat(prefixCls, "-prev"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-disabled"), prevDisabled)),
        "aria-disabled": prevDisabled
      }, this.renderPrev(prevPage)), pagerList, /*#__PURE__*/react.createElement("li", {
        title: showTitle ? locale.next_page : null,
        onClick: this.next,
        tabIndex: nextDisabled ? null : 0,
        onKeyPress: this.runIfEnterNext,
        className: classnames_default()("".concat(prefixCls, "-next"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-disabled"), nextDisabled)),
        "aria-disabled": nextDisabled
      }, this.renderNext(nextPage)), /*#__PURE__*/react.createElement(es_Options, {
        disabled: disabled,
        locale: locale,
        rootPrefixCls: prefixCls,
        selectComponentClass: selectComponentClass,
        selectPrefixCls: selectPrefixCls,
        changeSize: this.getShowSizeChanger() ? this.changePageSize : null,
        current: current,
        pageSize: pageSize,
        pageSizeOptions: pageSizeOptions,
        quickGo: this.shouldDisplayQuickJumper() ? this.handleChange : null,
        goButton: goButton
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, prevState) {
      var newState = {};

      if ('current' in props) {
        newState.current = props.current;

        if (props.current !== prevState.current) {
          newState.currentInputValue = newState.current;
        }
      }

      if ('pageSize' in props && props.pageSize !== prevState.pageSize) {
        var current = prevState.current;
        var newCurrent = calculatePage(props.pageSize, prevState, props);
        current = current > newCurrent ? newCurrent : current;

        if (!('current' in props)) {
          newState.current = current;
          newState.currentInputValue = current;
        }

        newState.pageSize = props.pageSize;
      }

      return newState;
    }
  }]);

  return Pagination;
}(react.Component);

Pagination.defaultProps = {
  defaultCurrent: 1,
  total: 0,
  defaultPageSize: 10,
  onChange: noop,
  className: '',
  selectPrefixCls: 'rc-select',
  prefixCls: 'rc-pagination',
  selectComponentClass: null,
  hideOnSinglePage: false,
  showPrevNextJumpers: true,
  showQuickJumper: false,
  showLessItems: false,
  showTitle: true,
  onShowSizeChange: noop,
  locale: zh_CN,
  style: {},
  itemRender: defaultItemRender,
  totalBoundaryShowSizeChanger: 50
};
/* harmony default export */ var es_Pagination = (Pagination);
;// CONCATENATED MODULE: ./node_modules/rc-pagination/es/index.js

// EXTERNAL MODULE: ./node_modules/rc-pagination/es/locale/en_US.js
var en_US = __webpack_require__(2906);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/DoubleLeftOutlined.js
// This icon file is generated automatically.
var DoubleLeftOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z" } }] }, "name": "double-left", "theme": "outlined" };
/* harmony default export */ var asn_DoubleLeftOutlined = (DoubleLeftOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/DoubleLeftOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var DoubleLeftOutlined_DoubleLeftOutlined = function DoubleLeftOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_DoubleLeftOutlined
  }));
};

DoubleLeftOutlined_DoubleLeftOutlined.displayName = 'DoubleLeftOutlined';
/* harmony default export */ var icons_DoubleLeftOutlined = (/*#__PURE__*/react.forwardRef(DoubleLeftOutlined_DoubleLeftOutlined));
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/DoubleRightOutlined.js
// This icon file is generated automatically.
var DoubleRightOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z" } }] }, "name": "double-right", "theme": "outlined" };
/* harmony default export */ var asn_DoubleRightOutlined = (DoubleRightOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/DoubleRightOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var DoubleRightOutlined_DoubleRightOutlined = function DoubleRightOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_DoubleRightOutlined
  }));
};

DoubleRightOutlined_DoubleRightOutlined.displayName = 'DoubleRightOutlined';
/* harmony default export */ var icons_DoubleRightOutlined = (/*#__PURE__*/react.forwardRef(DoubleRightOutlined_DoubleRightOutlined));
;// CONCATENATED MODULE: ./node_modules/antd/es/select/index.js



// TODO: 4.0 - codemod should help to change `filterOption` to support node props.
var select_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};









var SECRET_COMBOBOX_MODE_DO_NOT_USE = 'SECRET_COMBOBOX_MODE_DO_NOT_USE';

var InternalSelect = function InternalSelect(_a, ref) {
  var _classNames2;

  var customizePrefixCls = _a.prefixCls,
      _a$bordered = _a.bordered,
      bordered = _a$bordered === void 0 ? true : _a$bordered,
      className = _a.className,
      getPopupContainer = _a.getPopupContainer,
      dropdownClassName = _a.dropdownClassName,
      _a$listHeight = _a.listHeight,
      listHeight = _a$listHeight === void 0 ? 256 : _a$listHeight,
      _a$listItemHeight = _a.listItemHeight,
      listItemHeight = _a$listItemHeight === void 0 ? 24 : _a$listItemHeight,
      customizeSize = _a.size,
      notFoundContent = _a.notFoundContent,
      props = select_rest(_a, ["prefixCls", "bordered", "className", "getPopupContainer", "dropdownClassName", "listHeight", "listItemHeight", "size", "notFoundContent"]);

  var _React$useContext = react.useContext(config_provider_context/* ConfigContext */.E_),
      getContextPopupContainer = _React$useContext.getPopupContainer,
      getPrefixCls = _React$useContext.getPrefixCls,
      renderEmpty = _React$useContext.renderEmpty,
      direction = _React$useContext.direction,
      virtual = _React$useContext.virtual,
      dropdownMatchSelectWidth = _React$useContext.dropdownMatchSelectWidth;

  var size = react.useContext(SizeContext/* default */.Z);
  var prefixCls = getPrefixCls('select', customizePrefixCls);
  var rootPrefixCls = getPrefixCls();
  var mode = react.useMemo(function () {
    var m = props.mode;

    if (m === 'combobox') {
      return undefined;
    }

    if (m === SECRET_COMBOBOX_MODE_DO_NOT_USE) {
      return 'combobox';
    }

    return m;
  }, [props.mode]);
  var isMultiple = mode === 'multiple' || mode === 'tags'; // ===================== Empty =====================

  var mergedNotFound;

  if (notFoundContent !== undefined) {
    mergedNotFound = notFoundContent;
  } else if (mode === 'combobox') {
    mergedNotFound = null;
  } else {
    mergedNotFound = renderEmpty('Select');
  } // ===================== Icons =====================


  var _getIcons = getIcons((0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, props), {
    multiple: isMultiple,
    prefixCls: prefixCls
  })),
      suffixIcon = _getIcons.suffixIcon,
      itemIcon = _getIcons.itemIcon,
      removeIcon = _getIcons.removeIcon,
      clearIcon = _getIcons.clearIcon;

  var selectProps = (0,omit/* default */.Z)(props, ['suffixIcon', 'itemIcon']);
  var rcSelectRtlDropDownClassName = classnames_default()(dropdownClassName, (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-dropdown-").concat(direction), direction === 'rtl'));
  var mergedSize = customizeSize || size;
  var mergedClassName = classnames_default()((_classNames2 = {}, (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-lg"), mergedSize === 'large'), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-sm"), mergedSize === 'small'), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-borderless"), !bordered), _classNames2), className);
  return /*#__PURE__*/react.createElement(rc_select_es, (0,esm_extends/* default */.Z)({
    ref: ref,
    virtual: virtual,
    dropdownMatchSelectWidth: dropdownMatchSelectWidth
  }, selectProps, {
    transitionName: (0,motion/* getTransitionName */.m)(rootPrefixCls, 'slide-up', props.transitionName),
    listHeight: listHeight,
    listItemHeight: listItemHeight,
    mode: mode,
    prefixCls: prefixCls,
    direction: direction,
    inputIcon: suffixIcon,
    menuItemSelectedIcon: itemIcon,
    removeIcon: removeIcon,
    clearIcon: clearIcon,
    notFoundContent: mergedNotFound,
    className: mergedClassName,
    getPopupContainer: getPopupContainer || getContextPopupContainer,
    dropdownClassName: rcSelectRtlDropDownClassName
  }));
};

var select_Select = /*#__PURE__*/react.forwardRef(InternalSelect);
select_Select.SECRET_COMBOBOX_MODE_DO_NOT_USE = SECRET_COMBOBOX_MODE_DO_NOT_USE;
select_Select.Option = es_Option;
select_Select.OptGroup = es_OptGroup;
/* harmony default export */ var es_select = (select_Select);
;// CONCATENATED MODULE: ./node_modules/antd/es/pagination/MiniSelect.js




var MiniSelect = function MiniSelect(props) {
  return /*#__PURE__*/react.createElement(es_select, (0,esm_extends/* default */.Z)({
    size: "small"
  }, props));
};

MiniSelect.Option = es_select.Option;
/* harmony default export */ var pagination_MiniSelect = (MiniSelect);
// EXTERNAL MODULE: ./node_modules/antd/es/locale-provider/LocaleReceiver.js + 1 modules
var LocaleReceiver = __webpack_require__(2051);
// EXTERNAL MODULE: ./node_modules/antd/es/grid/hooks/useBreakpoint.js
var useBreakpoint = __webpack_require__(5378);
;// CONCATENATED MODULE: ./node_modules/antd/es/pagination/Pagination.js



var Pagination_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};















var Pagination_Pagination = function Pagination(_a) {
  var customizePrefixCls = _a.prefixCls,
      customizeSelectPrefixCls = _a.selectPrefixCls,
      className = _a.className,
      size = _a.size,
      customLocale = _a.locale,
      selectComponentClass = _a.selectComponentClass,
      restProps = Pagination_rest(_a, ["prefixCls", "selectPrefixCls", "className", "size", "locale", "selectComponentClass"]);

  var _useBreakpoint = (0,useBreakpoint/* default */.Z)(),
      xs = _useBreakpoint.xs;

  var _React$useContext = react.useContext(config_provider_context/* ConfigContext */.E_),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var prefixCls = getPrefixCls('pagination', customizePrefixCls);

  var getIconsProps = function getIconsProps() {
    var ellipsis = /*#__PURE__*/react.createElement("span", {
      className: "".concat(prefixCls, "-item-ellipsis")
    }, "\u2022\u2022\u2022");
    var prevIcon = /*#__PURE__*/react.createElement("button", {
      className: "".concat(prefixCls, "-item-link"),
      type: "button",
      tabIndex: -1
    }, /*#__PURE__*/react.createElement(LeftOutlined/* default */.Z, null));
    var nextIcon = /*#__PURE__*/react.createElement("button", {
      className: "".concat(prefixCls, "-item-link"),
      type: "button",
      tabIndex: -1
    }, /*#__PURE__*/react.createElement(RightOutlined/* default */.Z, null));
    var jumpPrevIcon = /*#__PURE__*/react.createElement("a", {
      className: "".concat(prefixCls, "-item-link")
    }, /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-item-container")
    }, /*#__PURE__*/react.createElement(icons_DoubleLeftOutlined, {
      className: "".concat(prefixCls, "-item-link-icon")
    }), ellipsis));
    var jumpNextIcon = /*#__PURE__*/react.createElement("a", {
      className: "".concat(prefixCls, "-item-link")
    }, /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-item-container")
    }, /*#__PURE__*/react.createElement(icons_DoubleRightOutlined, {
      className: "".concat(prefixCls, "-item-link-icon")
    }), ellipsis)); // change arrows direction in right-to-left direction

    if (direction === 'rtl') {
      var _ref = [nextIcon, prevIcon];
      prevIcon = _ref[0];
      nextIcon = _ref[1];
      var _ref2 = [jumpNextIcon, jumpPrevIcon];
      jumpPrevIcon = _ref2[0];
      jumpNextIcon = _ref2[1];
    }

    return {
      prevIcon: prevIcon,
      nextIcon: nextIcon,
      jumpPrevIcon: jumpPrevIcon,
      jumpNextIcon: jumpNextIcon
    };
  };

  var renderPagination = function renderPagination(contextLocale) {
    var locale = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, contextLocale), customLocale);

    var isSmall = size === 'small' || !!(xs && !size && restProps.responsive);
    var selectPrefixCls = getPrefixCls('select', customizeSelectPrefixCls);
    var extendedClassName = classnames_default()((0,defineProperty/* default */.Z)({
      mini: isSmall
    }, "".concat(prefixCls, "-rtl"), direction === 'rtl'), className);
    return /*#__PURE__*/react.createElement(es_Pagination, (0,esm_extends/* default */.Z)({}, getIconsProps(), restProps, {
      prefixCls: prefixCls,
      selectPrefixCls: selectPrefixCls,
      className: extendedClassName,
      selectComponentClass: selectComponentClass || (isSmall ? pagination_MiniSelect : es_select),
      locale: locale
    }));
  };

  return /*#__PURE__*/react.createElement(LocaleReceiver/* default */.Z, {
    componentName: "Pagination",
    defaultLocale: en_US/* default */.Z
  }, renderPagination);
};

/* harmony default export */ var pagination_Pagination = (Pagination_Pagination);
;// CONCATENATED MODULE: ./node_modules/antd/es/pagination/index.js

/* harmony default export */ var es_pagination = (pagination_Pagination);
;// CONCATENATED MODULE: ./node_modules/antd/es/table/hooks/usePagination.js




var usePagination_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};


var DEFAULT_PAGE_SIZE = 10;
function getPaginationParam(pagination, mergedPagination) {
  var param = {
    current: mergedPagination.current,
    pageSize: mergedPagination.pageSize
  };
  var paginationObj = pagination && (0,esm_typeof/* default */.Z)(pagination) === 'object' ? pagination : {};
  Object.keys(paginationObj).forEach(function (pageProp) {
    var value = mergedPagination[pageProp];

    if (typeof value !== 'function') {
      param[pageProp] = value;
    }
  });
  return param;
}

function extendsObject() {
  var result = {};

  for (var _len = arguments.length, list = new Array(_len), _key = 0; _key < _len; _key++) {
    list[_key] = arguments[_key];
  }

  list.forEach(function (obj) {
    if (obj) {
      Object.keys(obj).forEach(function (key) {
        var val = obj[key];

        if (val !== undefined) {
          result[key] = val;
        }
      });
    }
  });
  return result;
}

function usePagination(total, pagination, onChange) {
  var _a = pagination && (0,esm_typeof/* default */.Z)(pagination) === 'object' ? pagination : {},
      _a$total = _a.total,
      paginationTotal = _a$total === void 0 ? 0 : _a$total,
      paginationObj = usePagination_rest(_a, ["total"]);

  var _useState = (0,react.useState)(function () {
    return {
      current: 'defaultCurrent' in paginationObj ? paginationObj.defaultCurrent : 1,
      pageSize: 'defaultPageSize' in paginationObj ? paginationObj.defaultPageSize : DEFAULT_PAGE_SIZE
    };
  }),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      innerPagination = _useState2[0],
      setInnerPagination = _useState2[1]; // ============ Basic Pagination Config ============


  var mergedPagination = extendsObject(innerPagination, paginationObj, {
    total: paginationTotal > 0 ? paginationTotal : total
  }); // Reset `current` if data length or pageSize changed

  var maxPage = Math.ceil((paginationTotal || total) / mergedPagination.pageSize);

  if (mergedPagination.current > maxPage) {
    // Prevent a maximum page count of 0
    mergedPagination.current = maxPage || 1;
  }

  var refreshPagination = function refreshPagination(current, pageSize) {
    setInnerPagination({
      current: current !== null && current !== void 0 ? current : 1,
      pageSize: pageSize || mergedPagination.pageSize
    });
  };

  var onInternalChange = function onInternalChange(current, pageSize) {
    var _a;

    if (pagination) {
      (_a = pagination.onChange) === null || _a === void 0 ? void 0 : _a.call(pagination, current, pageSize);
    }

    refreshPagination(current, pageSize);
    onChange(current, pageSize || (mergedPagination === null || mergedPagination === void 0 ? void 0 : mergedPagination.pageSize));
  };

  if (pagination === false) {
    return [{}, function () {}];
  }

  return [(0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, mergedPagination), {
    onChange: onInternalChange
  }), refreshPagination];
}
;// CONCATENATED MODULE: ./node_modules/antd/es/table/hooks/useLazyKVMap.js


function useLazyKVMap(data, childrenColumnName, getRowKey) {
  var mapCacheRef = react.useRef({});

  function getRecordByKey(key) {
    if (!mapCacheRef.current || mapCacheRef.current.data !== data || mapCacheRef.current.childrenColumnName !== childrenColumnName || mapCacheRef.current.getRowKey !== getRowKey) {
      var kvMap = new Map();
      /* eslint-disable no-inner-declarations */

      function dig(records) {
        records.forEach(function (record, index) {
          var rowKey = getRowKey(record, index);
          kvMap.set(rowKey, record);

          if (record && (0,esm_typeof/* default */.Z)(record) === 'object' && childrenColumnName in record) {
            dig(record[childrenColumnName] || []);
          }
        });
      }
      /* eslint-enable */


      dig(data);
      mapCacheRef.current = {
        data: data,
        childrenColumnName: childrenColumnName,
        kvMap: kvMap,
        getRowKey: getRowKey
      };
    }

    return mapCacheRef.current.kvMap.get(key);
  }

  return [getRecordByKey];
}
// EXTERNAL MODULE: ./node_modules/antd/es/checkbox/index.js + 2 modules
var es_checkbox = __webpack_require__(9676);
// EXTERNAL MODULE: ./node_modules/antd/es/dropdown/index.js + 2 modules
var dropdown = __webpack_require__(6114);
// EXTERNAL MODULE: ./node_modules/antd/es/menu/index.js + 4 modules
var es_menu = __webpack_require__(8838);
// EXTERNAL MODULE: ./node_modules/rc-checkbox/es/index.js
var rc_checkbox_es = __webpack_require__(132);
;// CONCATENATED MODULE: ./node_modules/antd/es/radio/context.js

var RadioGroupContext = /*#__PURE__*/react.createContext(null);
var RadioGroupContextProvider = RadioGroupContext.Provider;
/* harmony default export */ var radio_context = (RadioGroupContext);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/devWarning.js
var devWarning = __webpack_require__(1687);
;// CONCATENATED MODULE: ./node_modules/antd/es/radio/radio.js



var radio_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};









var InternalRadio = function InternalRadio(props, ref) {
  var _classNames;

  var context = react.useContext(radio_context);

  var _React$useContext = react.useContext(config_provider_context/* ConfigContext */.E_),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var innerRef = react.useRef();
  var mergedRef = (0,es_ref/* composeRef */.sQ)(ref, innerRef);
  react.useEffect(function () {
    (0,devWarning/* default */.Z)(!('optionType' in props), 'Radio', '`optionType` is only support in Radio.Group.');
  }, []);

  var onChange = function onChange(e) {
    var _a, _b;

    (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, e);
    (_b = context === null || context === void 0 ? void 0 : context.onChange) === null || _b === void 0 ? void 0 : _b.call(context, e);
  };

  var customizePrefixCls = props.prefixCls,
      className = props.className,
      children = props.children,
      style = props.style,
      restProps = radio_rest(props, ["prefixCls", "className", "children", "style"]);

  var prefixCls = getPrefixCls('radio', customizePrefixCls);

  var radioProps = (0,esm_extends/* default */.Z)({}, restProps);

  if (context) {
    radioProps.name = context.name;
    radioProps.onChange = onChange;
    radioProps.checked = props.value === context.value;
    radioProps.disabled = props.disabled || context.disabled;
  }

  var wrapperClassString = classnames_default()("".concat(prefixCls, "-wrapper"), (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-wrapper-checked"), radioProps.checked), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-wrapper-disabled"), radioProps.disabled), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-wrapper-rtl"), direction === 'rtl'), _classNames), className);
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    react.createElement("label", {
      className: wrapperClassString,
      style: style,
      onMouseEnter: props.onMouseEnter,
      onMouseLeave: props.onMouseLeave
    }, /*#__PURE__*/react.createElement(rc_checkbox_es/* default */.Z, (0,esm_extends/* default */.Z)({}, radioProps, {
      type: "radio",
      prefixCls: prefixCls,
      ref: mergedRef
    })), children !== undefined ? /*#__PURE__*/react.createElement("span", null, children) : null)
  );
};

var Radio = /*#__PURE__*/react.forwardRef(InternalRadio);
Radio.displayName = 'Radio';
/* harmony default export */ var radio_radio = (Radio);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/getDataOrAriaProps.js
var getDataOrAriaProps = __webpack_require__(5467);
;// CONCATENATED MODULE: ./node_modules/antd/es/radio/group.js











var RadioGroup = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _React$useContext = react.useContext(config_provider_context/* ConfigContext */.E_),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var size = react.useContext(SizeContext/* default */.Z);

  var _useMergedState = (0,useMergedState/* default */.Z)(props.defaultValue, {
    value: props.value
  }),
      _useMergedState2 = (0,slicedToArray/* default */.Z)(_useMergedState, 2),
      value = _useMergedState2[0],
      setValue = _useMergedState2[1];

  var onRadioChange = function onRadioChange(ev) {
    var lastValue = value;
    var val = ev.target.value;

    if (!('value' in props)) {
      setValue(val);
    }

    var onChange = props.onChange;

    if (onChange && val !== lastValue) {
      onChange(ev);
    }
  };

  var renderGroup = function renderGroup() {
    var _classNames;

    var customizePrefixCls = props.prefixCls,
        _props$className = props.className,
        className = _props$className === void 0 ? '' : _props$className,
        options = props.options,
        optionType = props.optionType,
        _props$buttonStyle = props.buttonStyle,
        buttonStyle = _props$buttonStyle === void 0 ? 'outline' : _props$buttonStyle,
        disabled = props.disabled,
        children = props.children,
        customizeSize = props.size,
        style = props.style,
        id = props.id,
        onMouseEnter = props.onMouseEnter,
        onMouseLeave = props.onMouseLeave;
    var prefixCls = getPrefixCls('radio', customizePrefixCls);
    var groupPrefixCls = "".concat(prefixCls, "-group");
    var childrenToRender = children; // 如果存在 options, 优先使用

    if (options && options.length > 0) {
      var optionsPrefixCls = optionType === 'button' ? "".concat(prefixCls, "-button") : prefixCls;
      childrenToRender = options.map(function (option) {
        if (typeof option === 'string' || typeof option === 'number') {
          // 此处类型自动推导为 string
          return /*#__PURE__*/react.createElement(radio_radio, {
            key: option.toString(),
            prefixCls: optionsPrefixCls,
            disabled: disabled,
            value: option,
            checked: value === option
          }, option);
        } // 此处类型自动推导为 { label: string value: string }


        return /*#__PURE__*/react.createElement(radio_radio, {
          key: "radio-group-value-options-".concat(option.value),
          prefixCls: optionsPrefixCls,
          disabled: option.disabled || disabled,
          value: option.value,
          checked: value === option.value,
          style: option.style
        }, option.label);
      });
    }

    var mergedSize = customizeSize || size;
    var classString = classnames_default()(groupPrefixCls, "".concat(groupPrefixCls, "-").concat(buttonStyle), (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(groupPrefixCls, "-").concat(mergedSize), mergedSize), (0,defineProperty/* default */.Z)(_classNames, "".concat(groupPrefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
    return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({}, (0,getDataOrAriaProps/* default */.Z)(props), {
      className: classString,
      style: style,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      id: id,
      ref: ref
    }), childrenToRender);
  };

  return /*#__PURE__*/react.createElement(RadioGroupContextProvider, {
    value: {
      onChange: onRadioChange,
      value: value,
      disabled: props.disabled,
      name: props.name
    }
  }, renderGroup());
});
/* harmony default export */ var group = (/*#__PURE__*/react.memo(RadioGroup));
;// CONCATENATED MODULE: ./node_modules/antd/es/radio/radioButton.js


var radioButton_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};






var RadioButton = function RadioButton(props, ref) {
  var radioGroupContext = react.useContext(radio_context);

  var _React$useContext = react.useContext(config_provider_context/* ConfigContext */.E_),
      getPrefixCls = _React$useContext.getPrefixCls;

  var customizePrefixCls = props.prefixCls,
      radioProps = radioButton_rest(props, ["prefixCls"]);

  var prefixCls = getPrefixCls('radio-button', customizePrefixCls);

  if (radioGroupContext) {
    radioProps.checked = props.value === radioGroupContext.value;
    radioProps.disabled = props.disabled || radioGroupContext.disabled;
  }

  return /*#__PURE__*/react.createElement(radio_radio, (0,esm_extends/* default */.Z)({
    prefixCls: prefixCls
  }, radioProps, {
    type: "radio",
    ref: ref
  }));
};

/* harmony default export */ var radioButton = (/*#__PURE__*/react.forwardRef(RadioButton));
;// CONCATENATED MODULE: ./node_modules/antd/es/radio/index.js



var radio_Radio = radio_radio;
radio_Radio.Button = radioButton;
radio_Radio.Group = group;

/* harmony default export */ var es_radio = (radio_Radio);
;// CONCATENATED MODULE: ./node_modules/antd/es/table/hooks/useSelection.js


















 // TODO: warning if use ajax!!!

var SELECTION_COLUMN = {};
var SELECTION_ALL = 'SELECT_ALL';
var SELECTION_INVERT = 'SELECT_INVERT';
var SELECTION_NONE = 'SELECT_NONE';

function flattenData(data, childrenColumnName) {
  var list = [];
  (data || []).forEach(function (record) {
    list.push(record);

    if (record && (0,esm_typeof/* default */.Z)(record) === 'object' && childrenColumnName in record) {
      list = [].concat((0,toConsumableArray/* default */.Z)(list), (0,toConsumableArray/* default */.Z)(flattenData(record[childrenColumnName], childrenColumnName)));
    }
  });
  return list;
}

function useSelection(rowSelection, config) {
  var _ref = rowSelection || {},
      preserveSelectedRowKeys = _ref.preserveSelectedRowKeys,
      selectedRowKeys = _ref.selectedRowKeys,
      defaultSelectedRowKeys = _ref.defaultSelectedRowKeys,
      getCheckboxProps = _ref.getCheckboxProps,
      onSelectionChange = _ref.onChange,
      onSelect = _ref.onSelect,
      onSelectAll = _ref.onSelectAll,
      onSelectInvert = _ref.onSelectInvert,
      onSelectNone = _ref.onSelectNone,
      onSelectMultiple = _ref.onSelectMultiple,
      selectionColWidth = _ref.columnWidth,
      selectionType = _ref.type,
      selections = _ref.selections,
      fixed = _ref.fixed,
      customizeRenderCell = _ref.renderCell,
      hideSelectAll = _ref.hideSelectAll,
      _ref$checkStrictly = _ref.checkStrictly,
      checkStrictly = _ref$checkStrictly === void 0 ? true : _ref$checkStrictly;

  var prefixCls = config.prefixCls,
      data = config.data,
      pageData = config.pageData,
      getRecordByKey = config.getRecordByKey,
      getRowKey = config.getRowKey,
      expandType = config.expandType,
      childrenColumnName = config.childrenColumnName,
      tableLocale = config.locale,
      getPopupContainer = config.getPopupContainer; // ========================= Keys =========================

  var _useMergedState = (0,useMergedState/* default */.Z)(selectedRowKeys || defaultSelectedRowKeys || [], {
    value: selectedRowKeys
  }),
      _useMergedState2 = (0,slicedToArray/* default */.Z)(_useMergedState, 2),
      mergedSelectedKeys = _useMergedState2[0],
      setMergedSelectedKeys = _useMergedState2[1]; // ======================== Caches ========================


  var preserveRecordsRef = react.useRef(new Map());
  var updatePreserveRecordsCache = (0,react.useCallback)(function (keys) {
    if (preserveSelectedRowKeys) {
      var newCache = new Map(); // Keep key if mark as preserveSelectedRowKeys

      keys.forEach(function (key) {
        var record = getRecordByKey(key);

        if (!record && preserveRecordsRef.current.has(key)) {
          record = preserveRecordsRef.current.get(key);
        }

        newCache.set(key, record);
      }); // Refresh to new cache

      preserveRecordsRef.current = newCache;
    }
  }, [getRecordByKey, preserveSelectedRowKeys]); // Update cache with selectedKeys

  react.useEffect(function () {
    updatePreserveRecordsCache(mergedSelectedKeys);
  }, [mergedSelectedKeys]);

  var _useMemo = (0,react.useMemo)(function () {
    return checkStrictly ? {
      keyEntities: null
    } : convertDataToEntities(data, {
      externalGetKey: getRowKey,
      childrenPropName: childrenColumnName
    });
  }, [data, getRowKey, checkStrictly, childrenColumnName]),
      keyEntities = _useMemo.keyEntities; // Get flatten data


  var flattedData = (0,react.useMemo)(function () {
    return flattenData(pageData, childrenColumnName);
  }, [pageData, childrenColumnName]); // Get all checkbox props

  var checkboxPropsMap = (0,react.useMemo)(function () {
    var map = new Map();
    flattedData.forEach(function (record, index) {
      var key = getRowKey(record, index);
      var checkboxProps = (getCheckboxProps ? getCheckboxProps(record) : null) || {};
      map.set(key, checkboxProps);

      if (false) {}
    });
    return map;
  }, [flattedData, getRowKey, getCheckboxProps]);
  var isCheckboxDisabled = (0,react.useCallback)(function (r) {
    var _a;

    return !!((_a = checkboxPropsMap.get(getRowKey(r))) === null || _a === void 0 ? void 0 : _a.disabled);
  }, [checkboxPropsMap, getRowKey]);

  var _useMemo2 = (0,react.useMemo)(function () {
    if (checkStrictly) {
      return [mergedSelectedKeys || [], []];
    }

    var _conductCheck = conductCheck(mergedSelectedKeys, true, keyEntities, isCheckboxDisabled),
        checkedKeys = _conductCheck.checkedKeys,
        halfCheckedKeys = _conductCheck.halfCheckedKeys;

    return [checkedKeys || [], halfCheckedKeys];
  }, [mergedSelectedKeys, checkStrictly, keyEntities, isCheckboxDisabled]),
      _useMemo3 = (0,slicedToArray/* default */.Z)(_useMemo2, 2),
      derivedSelectedKeys = _useMemo3[0],
      derivedHalfSelectedKeys = _useMemo3[1];

  var derivedSelectedKeySet = (0,react.useMemo)(function () {
    var keys = selectionType === 'radio' ? derivedSelectedKeys.slice(0, 1) : derivedSelectedKeys;
    return new Set(keys);
  }, [derivedSelectedKeys, selectionType]);
  var derivedHalfSelectedKeySet = (0,react.useMemo)(function () {
    return selectionType === 'radio' ? new Set() : new Set(derivedHalfSelectedKeys);
  }, [derivedHalfSelectedKeys, selectionType]); // Save last selected key to enable range selection

  var _useState = (0,react.useState)(null),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      lastSelectedKey = _useState2[0],
      setLastSelectedKey = _useState2[1]; // Reset if rowSelection reset


  react.useEffect(function () {
    if (!rowSelection) {
      setMergedSelectedKeys([]);
    }
  }, [!!rowSelection]);
  var setSelectedKeys = (0,react.useCallback)(function (keys) {
    var availableKeys;
    var records;
    updatePreserveRecordsCache(keys);

    if (preserveSelectedRowKeys) {
      availableKeys = keys;
      records = keys.map(function (key) {
        return preserveRecordsRef.current.get(key);
      });
    } else {
      // Filter key which not exist in the `dataSource`
      availableKeys = [];
      records = [];
      keys.forEach(function (key) {
        var record = getRecordByKey(key);

        if (record !== undefined) {
          availableKeys.push(key);
          records.push(record);
        }
      });
    }

    setMergedSelectedKeys(availableKeys);
    onSelectionChange === null || onSelectionChange === void 0 ? void 0 : onSelectionChange(availableKeys, records);
  }, [setMergedSelectedKeys, getRecordByKey, onSelectionChange, preserveSelectedRowKeys]); // ====================== Selections ======================
  // Trigger single `onSelect` event

  var triggerSingleSelection = (0,react.useCallback)(function (key, selected, keys, event) {
    if (onSelect) {
      var rows = keys.map(function (k) {
        return getRecordByKey(k);
      });
      onSelect(getRecordByKey(key), selected, rows, event);
    }

    setSelectedKeys(keys);
  }, [onSelect, getRecordByKey, setSelectedKeys]);
  var mergedSelections = (0,react.useMemo)(function () {
    if (!selections || hideSelectAll) {
      return null;
    }

    var selectionList = selections === true ? [SELECTION_ALL, SELECTION_INVERT, SELECTION_NONE] : selections;
    return selectionList.map(function (selection) {
      if (selection === SELECTION_ALL) {
        return {
          key: 'all',
          text: tableLocale.selectionAll,
          onSelect: function onSelect() {
            setSelectedKeys(data.map(function (record, index) {
              return getRowKey(record, index);
            }).filter(function (key) {
              var checkProps = checkboxPropsMap.get(key);
              return !(checkProps === null || checkProps === void 0 ? void 0 : checkProps.disabled) || derivedSelectedKeySet.has(key);
            }));
          }
        };
      }

      if (selection === SELECTION_INVERT) {
        return {
          key: 'invert',
          text: tableLocale.selectInvert,
          onSelect: function onSelect() {
            var keySet = new Set(derivedSelectedKeySet);
            pageData.forEach(function (record, index) {
              var key = getRowKey(record, index);
              var checkProps = checkboxPropsMap.get(key);

              if (!(checkProps === null || checkProps === void 0 ? void 0 : checkProps.disabled)) {
                if (keySet.has(key)) {
                  keySet["delete"](key);
                } else {
                  keySet.add(key);
                }
              }
            });
            var keys = Array.from(keySet);

            if (onSelectInvert) {
              (0,devWarning/* default */.Z)(false, 'Table', '`onSelectInvert` will be removed in future. Please use `onChange` instead.');
              onSelectInvert(keys);
            }

            setSelectedKeys(keys);
          }
        };
      }

      if (selection === SELECTION_NONE) {
        return {
          key: 'none',
          text: tableLocale.selectNone,
          onSelect: function onSelect() {
            onSelectNone === null || onSelectNone === void 0 ? void 0 : onSelectNone();
            setSelectedKeys(Array.from(derivedSelectedKeySet).filter(function (key) {
              var checkProps = checkboxPropsMap.get(key);
              return checkProps === null || checkProps === void 0 ? void 0 : checkProps.disabled;
            }));
          }
        };
      }

      return selection;
    });
  }, [selections, derivedSelectedKeySet, pageData, getRowKey, onSelectInvert, setSelectedKeys]); // ======================= Columns ========================

  var transformColumns = (0,react.useCallback)(function (columns) {
    var _a; // >>>>>>>>>>> Skip if not exists `rowSelection`


    if (!rowSelection) {
      if (false) {}

      return columns.filter(function (col) {
        return col !== SELECTION_COLUMN;
      });
    } // >>>>>>>>>>> Support selection


    var cloneColumns = (0,toConsumableArray/* default */.Z)(columns);

    var keySet = new Set(derivedSelectedKeySet); // Record key only need check with enabled

    var recordKeys = flattedData.map(getRowKey).filter(function (key) {
      return !checkboxPropsMap.get(key).disabled;
    });
    var checkedCurrentAll = recordKeys.every(function (key) {
      return keySet.has(key);
    });
    var checkedCurrentSome = recordKeys.some(function (key) {
      return keySet.has(key);
    });

    var onSelectAllChange = function onSelectAllChange() {
      var changeKeys = [];

      if (checkedCurrentAll) {
        recordKeys.forEach(function (key) {
          keySet["delete"](key);
          changeKeys.push(key);
        });
      } else {
        recordKeys.forEach(function (key) {
          if (!keySet.has(key)) {
            keySet.add(key);
            changeKeys.push(key);
          }
        });
      }

      var keys = Array.from(keySet);
      onSelectAll === null || onSelectAll === void 0 ? void 0 : onSelectAll(!checkedCurrentAll, keys.map(function (k) {
        return getRecordByKey(k);
      }), changeKeys.map(function (k) {
        return getRecordByKey(k);
      }));
      setSelectedKeys(keys);
    }; // ===================== Render =====================
    // Title Cell


    var title;

    if (selectionType !== 'radio') {
      var customizeSelections;

      if (mergedSelections) {
        var menu = /*#__PURE__*/react.createElement(es_menu/* default */.Z, {
          getPopupContainer: getPopupContainer
        }, mergedSelections.map(function (selection, index) {
          var key = selection.key,
              text = selection.text,
              onSelectionClick = selection.onSelect;
          return /*#__PURE__*/react.createElement(es_menu/* default.Item */.Z.Item, {
            key: key || index,
            onClick: function onClick() {
              onSelectionClick === null || onSelectionClick === void 0 ? void 0 : onSelectionClick(recordKeys);
            }
          }, text);
        }));
        customizeSelections = /*#__PURE__*/react.createElement("div", {
          className: "".concat(prefixCls, "-selection-extra")
        }, /*#__PURE__*/react.createElement(dropdown/* default */.Z, {
          overlay: menu,
          getPopupContainer: getPopupContainer
        }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(icons_DownOutlined, null))));
      }

      var allDisabledData = flattedData.map(function (record, index) {
        var key = getRowKey(record, index);
        var checkboxProps = checkboxPropsMap.get(key) || {};
        return (0,esm_extends/* default */.Z)({
          checked: keySet.has(key)
        }, checkboxProps);
      }).filter(function (_ref2) {
        var disabled = _ref2.disabled;
        return disabled;
      });
      var allDisabled = !!allDisabledData.length && allDisabledData.length === flattedData.length;
      var allDisabledAndChecked = allDisabled && allDisabledData.every(function (_ref3) {
        var checked = _ref3.checked;
        return checked;
      });
      var allDisabledSomeChecked = allDisabled && allDisabledData.some(function (_ref4) {
        var checked = _ref4.checked;
        return checked;
      });
      title = !hideSelectAll && /*#__PURE__*/react.createElement("div", {
        className: "".concat(prefixCls, "-selection")
      }, /*#__PURE__*/react.createElement(es_checkbox/* default */.Z, {
        checked: !allDisabled ? !!flattedData.length && checkedCurrentAll : allDisabledAndChecked,
        indeterminate: !allDisabled ? !checkedCurrentAll && checkedCurrentSome : !allDisabledAndChecked && allDisabledSomeChecked,
        onChange: onSelectAllChange,
        disabled: flattedData.length === 0 || allDisabled,
        skipGroup: true
      }), customizeSelections);
    } // Body Cell


    var renderCell;

    if (selectionType === 'radio') {
      renderCell = function renderCell(_, record, index) {
        var key = getRowKey(record, index);
        var checked = keySet.has(key);
        return {
          node: /*#__PURE__*/react.createElement(es_radio, (0,esm_extends/* default */.Z)({}, checkboxPropsMap.get(key), {
            checked: checked,
            onClick: function onClick(e) {
              return e.stopPropagation();
            },
            onChange: function onChange(event) {
              if (!keySet.has(key)) {
                triggerSingleSelection(key, true, [key], event.nativeEvent);
              }
            }
          })),
          checked: checked
        };
      };
    } else {
      renderCell = function renderCell(_, record, index) {
        var _a;

        var key = getRowKey(record, index);
        var checked = keySet.has(key);
        var indeterminate = derivedHalfSelectedKeySet.has(key);
        var checkboxProps = checkboxPropsMap.get(key);
        var mergedIndeterminate;

        if (expandType === 'nest') {
          mergedIndeterminate = indeterminate;
          (0,devWarning/* default */.Z)(typeof (checkboxProps === null || checkboxProps === void 0 ? void 0 : checkboxProps.indeterminate) !== 'boolean', 'Table', 'set `indeterminate` using `rowSelection.getCheckboxProps` is not allowed with tree structured dataSource.');
        } else {
          mergedIndeterminate = (_a = checkboxProps === null || checkboxProps === void 0 ? void 0 : checkboxProps.indeterminate) !== null && _a !== void 0 ? _a : indeterminate;
        } // Record checked


        return {
          node: /*#__PURE__*/react.createElement(es_checkbox/* default */.Z, (0,esm_extends/* default */.Z)({}, checkboxProps, {
            indeterminate: mergedIndeterminate,
            checked: checked,
            skipGroup: true,
            onClick: function onClick(e) {
              return e.stopPropagation();
            },
            onChange: function onChange(_ref5) {
              var nativeEvent = _ref5.nativeEvent;
              var shiftKey = nativeEvent.shiftKey;
              var startIndex = -1;
              var endIndex = -1; // Get range of this

              if (shiftKey && checkStrictly) {
                var pointKeys = new Set([lastSelectedKey, key]);
                recordKeys.some(function (recordKey, recordIndex) {
                  if (pointKeys.has(recordKey)) {
                    if (startIndex === -1) {
                      startIndex = recordIndex;
                    } else {
                      endIndex = recordIndex;
                      return true;
                    }
                  }

                  return false;
                });
              }

              if (endIndex !== -1 && startIndex !== endIndex && checkStrictly) {
                // Batch update selections
                var rangeKeys = recordKeys.slice(startIndex, endIndex + 1);
                var changedKeys = [];

                if (checked) {
                  rangeKeys.forEach(function (recordKey) {
                    if (keySet.has(recordKey)) {
                      changedKeys.push(recordKey);
                      keySet["delete"](recordKey);
                    }
                  });
                } else {
                  rangeKeys.forEach(function (recordKey) {
                    if (!keySet.has(recordKey)) {
                      changedKeys.push(recordKey);
                      keySet.add(recordKey);
                    }
                  });
                }

                var keys = Array.from(keySet);
                onSelectMultiple === null || onSelectMultiple === void 0 ? void 0 : onSelectMultiple(!checked, keys.map(function (recordKey) {
                  return getRecordByKey(recordKey);
                }), changedKeys.map(function (recordKey) {
                  return getRecordByKey(recordKey);
                }));
                setSelectedKeys(keys);
              } else {
                // Single record selected
                var originCheckedKeys = derivedSelectedKeys;

                if (checkStrictly) {
                  var checkedKeys = checked ? arrDel(originCheckedKeys, key) : arrAdd(originCheckedKeys, key);
                  triggerSingleSelection(key, !checked, checkedKeys, nativeEvent);
                } else {
                  // Always fill first
                  var result = conductCheck([].concat((0,toConsumableArray/* default */.Z)(originCheckedKeys), [key]), true, keyEntities, isCheckboxDisabled);
                  var _checkedKeys = result.checkedKeys,
                      halfCheckedKeys = result.halfCheckedKeys;
                  var nextCheckedKeys = _checkedKeys; // If remove, we do it again to correction

                  if (checked) {
                    var tempKeySet = new Set(_checkedKeys);
                    tempKeySet["delete"](key);
                    nextCheckedKeys = conductCheck(Array.from(tempKeySet), {
                      checked: false,
                      halfCheckedKeys: halfCheckedKeys
                    }, keyEntities, isCheckboxDisabled).checkedKeys;
                  }

                  triggerSingleSelection(key, !checked, nextCheckedKeys, nativeEvent);
                }
              }

              setLastSelectedKey(key);
            }
          })),
          checked: checked
        };
      };
    }

    var renderSelectionCell = function renderSelectionCell(_, record, index) {
      var _renderCell = renderCell(_, record, index),
          node = _renderCell.node,
          checked = _renderCell.checked;

      if (customizeRenderCell) {
        return customizeRenderCell(checked, record, index, node);
      }

      return node;
    }; // Insert selection column if not exist


    if (!cloneColumns.includes(SELECTION_COLUMN)) {
      // Always after expand icon
      if (cloneColumns.findIndex(function (col) {
        var _a;

        return ((_a = col[INTERNAL_COL_DEFINE]) === null || _a === void 0 ? void 0 : _a.columnType) === 'EXPAND_COLUMN';
      }) === 0) {
        var _cloneColumns = cloneColumns,
            _cloneColumns2 = (0,esm_toArray/* default */.Z)(_cloneColumns),
            expandColumn = _cloneColumns2[0],
            restColumns = _cloneColumns2.slice(1);

        cloneColumns = [expandColumn, SELECTION_COLUMN].concat((0,toConsumableArray/* default */.Z)(restColumns));
      } else {
        // Normal insert at first column
        cloneColumns = [SELECTION_COLUMN].concat((0,toConsumableArray/* default */.Z)(cloneColumns));
      }
    } // Deduplicate selection column


    var selectionColumnIndex = cloneColumns.indexOf(SELECTION_COLUMN);

    if (false) {}

    cloneColumns = cloneColumns.filter(function (column, index) {
      return column !== SELECTION_COLUMN || index === selectionColumnIndex;
    }); // Fixed column logic

    var prevCol = cloneColumns[selectionColumnIndex - 1];
    var nextCol = cloneColumns[selectionColumnIndex + 1];
    var mergedFixed = fixed;

    if (mergedFixed === undefined) {
      if ((nextCol === null || nextCol === void 0 ? void 0 : nextCol.fixed) !== undefined) {
        mergedFixed = nextCol.fixed;
      } else if ((prevCol === null || prevCol === void 0 ? void 0 : prevCol.fixed) !== undefined) {
        mergedFixed = prevCol.fixed;
      }
    }

    if (mergedFixed && prevCol && ((_a = prevCol[INTERNAL_COL_DEFINE]) === null || _a === void 0 ? void 0 : _a.columnType) === 'EXPAND_COLUMN' && prevCol.fixed === undefined) {
      prevCol.fixed = mergedFixed;
    } // Replace with real selection column


    var selectionColumn = (0,defineProperty/* default */.Z)({
      fixed: mergedFixed,
      width: selectionColWidth,
      className: "".concat(prefixCls, "-selection-column"),
      title: rowSelection.columnTitle || title,
      render: renderSelectionCell
    }, INTERNAL_COL_DEFINE, {
      className: "".concat(prefixCls, "-selection-col")
    });

    return cloneColumns.map(function (col) {
      return col === SELECTION_COLUMN ? selectionColumn : col;
    });
  }, [getRowKey, flattedData, rowSelection, derivedSelectedKeys, derivedSelectedKeySet, derivedHalfSelectedKeySet, selectionColWidth, mergedSelections, expandType, lastSelectedKey, checkboxPropsMap, onSelectMultiple, triggerSingleSelection, isCheckboxDisabled]);
  return [transformColumns, derivedSelectedKeySet];
}
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/CaretDownOutlined.js
// This icon file is generated automatically.
var CaretDownOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" } }] }, "name": "caret-down", "theme": "outlined" };
/* harmony default export */ var asn_CaretDownOutlined = (CaretDownOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/CaretDownOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var CaretDownOutlined_CaretDownOutlined = function CaretDownOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_CaretDownOutlined
  }));
};

CaretDownOutlined_CaretDownOutlined.displayName = 'CaretDownOutlined';
/* harmony default export */ var icons_CaretDownOutlined = (/*#__PURE__*/react.forwardRef(CaretDownOutlined_CaretDownOutlined));
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/CaretUpOutlined.js
// This icon file is generated automatically.
var CaretUpOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z" } }] }, "name": "caret-up", "theme": "outlined" };
/* harmony default export */ var asn_CaretUpOutlined = (CaretUpOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/CaretUpOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var CaretUpOutlined_CaretUpOutlined = function CaretUpOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_CaretUpOutlined
  }));
};

CaretUpOutlined_CaretUpOutlined.displayName = 'CaretUpOutlined';
/* harmony default export */ var icons_CaretUpOutlined = (/*#__PURE__*/react.forwardRef(CaretUpOutlined_CaretUpOutlined));
// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js + 5 modules
var tooltip = __webpack_require__(9713);
;// CONCATENATED MODULE: ./node_modules/antd/es/table/util.js
function getColumnKey(column, defaultKey) {
  if ('key' in column && column.key !== undefined && column.key !== null) {
    return column.key;
  }

  if (column.dataIndex) {
    return Array.isArray(column.dataIndex) ? column.dataIndex.join('.') : column.dataIndex;
  }

  return defaultKey;
}
function getColumnPos(index, pos) {
  return pos ? "".concat(pos, "-").concat(index) : "".concat(index);
}
function renderColumnTitle(title, props) {
  if (typeof title === 'function') {
    return title(props);
  }

  return title;
}
;// CONCATENATED MODULE: ./node_modules/antd/es/table/hooks/useSorter.js











var ASCEND = 'ascend';
var DESCEND = 'descend';

function getMultiplePriority(column) {
  if ((0,esm_typeof/* default */.Z)(column.sorter) === 'object' && typeof column.sorter.multiple === 'number') {
    return column.sorter.multiple;
  }

  return false;
}

function getSortFunction(sorter) {
  if (typeof sorter === 'function') {
    return sorter;
  }

  if (sorter && (0,esm_typeof/* default */.Z)(sorter) === 'object' && sorter.compare) {
    return sorter.compare;
  }

  return false;
}

function nextSortDirection(sortDirections, current) {
  if (!current) {
    return sortDirections[0];
  }

  return sortDirections[sortDirections.indexOf(current) + 1];
}

function collectSortStates(columns, init, pos) {
  var sortStates = [];

  function pushState(column, columnPos) {
    sortStates.push({
      column: column,
      key: getColumnKey(column, columnPos),
      multiplePriority: getMultiplePriority(column),
      sortOrder: column.sortOrder
    });
  }

  (columns || []).forEach(function (column, index) {
    var columnPos = getColumnPos(index, pos);

    if (column.children) {
      if ('sortOrder' in column) {
        // Controlled
        pushState(column, columnPos);
      }

      sortStates = [].concat((0,toConsumableArray/* default */.Z)(sortStates), (0,toConsumableArray/* default */.Z)(collectSortStates(column.children, init, columnPos)));
    } else if (column.sorter) {
      if ('sortOrder' in column) {
        // Controlled
        pushState(column, columnPos);
      } else if (init && column.defaultSortOrder) {
        // Default sorter
        sortStates.push({
          column: column,
          key: getColumnKey(column, columnPos),
          multiplePriority: getMultiplePriority(column),
          sortOrder: column.defaultSortOrder
        });
      }
    }
  });
  return sortStates;
}

function injectSorter(prefixCls, columns, sorterSates, triggerSorter, defaultSortDirections, tableLocale, tableShowSorterTooltip, pos) {
  return (columns || []).map(function (column, index) {
    var columnPos = getColumnPos(index, pos);
    var newColumn = column;

    if (newColumn.sorter) {
      var sortDirections = newColumn.sortDirections || defaultSortDirections;
      var showSorterTooltip = newColumn.showSorterTooltip === undefined ? tableShowSorterTooltip : newColumn.showSorterTooltip;
      var columnKey = getColumnKey(newColumn, columnPos);
      var sorterState = sorterSates.find(function (_ref) {
        var key = _ref.key;
        return key === columnKey;
      });
      var sorterOrder = sorterState ? sorterState.sortOrder : null;
      var nextSortOrder = nextSortDirection(sortDirections, sorterOrder);
      var upNode = sortDirections.includes(ASCEND) && /*#__PURE__*/react.createElement(icons_CaretUpOutlined, {
        className: classnames_default()("".concat(prefixCls, "-column-sorter-up"), {
          active: sorterOrder === ASCEND
        })
      });
      var downNode = sortDirections.includes(DESCEND) && /*#__PURE__*/react.createElement(icons_CaretDownOutlined, {
        className: classnames_default()("".concat(prefixCls, "-column-sorter-down"), {
          active: sorterOrder === DESCEND
        })
      });

      var _ref2 = tableLocale || {},
          cancelSort = _ref2.cancelSort,
          triggerAsc = _ref2.triggerAsc,
          triggerDesc = _ref2.triggerDesc;

      var sortTip = cancelSort;

      if (nextSortOrder === DESCEND) {
        sortTip = triggerDesc;
      } else if (nextSortOrder === ASCEND) {
        sortTip = triggerAsc;
      }

      var tooltipProps = (0,esm_typeof/* default */.Z)(showSorterTooltip) === 'object' ? showSorterTooltip : {
        title: sortTip
      };
      newColumn = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, newColumn), {
        className: classnames_default()(newColumn.className, (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-column-sort"), sorterOrder)),
        title: function title(renderProps) {
          var renderSortTitle = /*#__PURE__*/react.createElement("div", {
            className: "".concat(prefixCls, "-column-sorters")
          }, /*#__PURE__*/react.createElement("span", {
            className: "".concat(prefixCls, "-column-title")
          }, renderColumnTitle(column.title, renderProps)), /*#__PURE__*/react.createElement("span", {
            className: classnames_default()("".concat(prefixCls, "-column-sorter"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-column-sorter-full"), !!(upNode && downNode)))
          }, /*#__PURE__*/react.createElement("span", {
            className: "".concat(prefixCls, "-column-sorter-inner")
          }, upNode, downNode)));
          return showSorterTooltip ? /*#__PURE__*/react.createElement(tooltip/* default */.Z, tooltipProps, renderSortTitle) : renderSortTitle;
        },
        onHeaderCell: function onHeaderCell(col) {
          var cell = column.onHeaderCell && column.onHeaderCell(col) || {};
          var originOnClick = cell.onClick;

          cell.onClick = function (event) {
            triggerSorter({
              column: column,
              key: columnKey,
              sortOrder: nextSortOrder,
              multiplePriority: getMultiplePriority(column)
            });

            if (originOnClick) {
              originOnClick(event);
            }
          };

          cell.className = classnames_default()(cell.className, "".concat(prefixCls, "-column-has-sorters"));
          return cell;
        }
      });
    }

    if ('children' in newColumn) {
      newColumn = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, newColumn), {
        children: injectSorter(prefixCls, newColumn.children, sorterSates, triggerSorter, defaultSortDirections, tableLocale, tableShowSorterTooltip, columnPos)
      });
    }

    return newColumn;
  });
}

function stateToInfo(sorterStates) {
  var column = sorterStates.column,
      sortOrder = sorterStates.sortOrder;
  return {
    column: column,
    order: sortOrder,
    field: column.dataIndex,
    columnKey: column.key
  };
}

function generateSorterInfo(sorterStates) {
  var list = sorterStates.filter(function (_ref3) {
    var sortOrder = _ref3.sortOrder;
    return sortOrder;
  }).map(stateToInfo); // =========== Legacy compatible support ===========
  // https://github.com/ant-design/ant-design/pull/19226

  if (list.length === 0 && sorterStates.length) {
    return (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, stateToInfo(sorterStates[sorterStates.length - 1])), {
      column: undefined
    });
  }

  if (list.length <= 1) {
    return list[0] || {};
  }

  return list;
}

function getSortData(data, sortStates, childrenColumnName) {
  var innerSorterStates = sortStates.slice().sort(function (a, b) {
    return b.multiplePriority - a.multiplePriority;
  });
  var cloneData = data.slice();
  var runningSorters = innerSorterStates.filter(function (_ref4) {
    var sorter = _ref4.column.sorter,
        sortOrder = _ref4.sortOrder;
    return getSortFunction(sorter) && sortOrder;
  }); // Skip if no sorter needed

  if (!runningSorters.length) {
    return cloneData;
  }

  return cloneData.sort(function (record1, record2) {
    for (var i = 0; i < runningSorters.length; i += 1) {
      var sorterState = runningSorters[i];
      var sorter = sorterState.column.sorter,
          sortOrder = sorterState.sortOrder;
      var compareFn = getSortFunction(sorter);

      if (compareFn && sortOrder) {
        var compareResult = compareFn(record1, record2, sortOrder);

        if (compareResult !== 0) {
          return sortOrder === ASCEND ? compareResult : -compareResult;
        }
      }
    }

    return 0;
  }).map(function (record) {
    var subRecords = record[childrenColumnName];

    if (subRecords) {
      return (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, record), (0,defineProperty/* default */.Z)({}, childrenColumnName, getSortData(subRecords, sortStates, childrenColumnName)));
    }

    return record;
  });
}
function useFilterSorter(_ref5) {
  var prefixCls = _ref5.prefixCls,
      mergedColumns = _ref5.mergedColumns,
      onSorterChange = _ref5.onSorterChange,
      sortDirections = _ref5.sortDirections,
      tableLocale = _ref5.tableLocale,
      showSorterTooltip = _ref5.showSorterTooltip;

  var _React$useState = react.useState(collectSortStates(mergedColumns, true)),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      sortStates = _React$useState2[0],
      setSortStates = _React$useState2[1];

  var mergedSorterStates = react.useMemo(function () {
    var validate = true;
    var collectedStates = collectSortStates(mergedColumns, false); // Return if not controlled

    if (!collectedStates.length) {
      return sortStates;
    }

    var validateStates = [];

    function patchStates(state) {
      if (validate) {
        validateStates.push(state);
      } else {
        validateStates.push((0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, state), {
          sortOrder: null
        }));
      }
    }

    var multipleMode = null;
    collectedStates.forEach(function (state) {
      if (multipleMode === null) {
        patchStates(state);

        if (state.sortOrder) {
          if (state.multiplePriority === false) {
            validate = false;
          } else {
            multipleMode = true;
          }
        }
      } else if (multipleMode && state.multiplePriority !== false) {
        patchStates(state);
      } else {
        validate = false;
        patchStates(state);
      }
    });
    return validateStates;
  }, [mergedColumns, sortStates]); // Get render columns title required props

  var columnTitleSorterProps = react.useMemo(function () {
    var sortColumns = mergedSorterStates.map(function (_ref6) {
      var column = _ref6.column,
          sortOrder = _ref6.sortOrder;
      return {
        column: column,
        order: sortOrder
      };
    });
    return {
      sortColumns: sortColumns,
      // Legacy
      sortColumn: sortColumns[0] && sortColumns[0].column,
      sortOrder: sortColumns[0] && sortColumns[0].order
    };
  }, [mergedSorterStates]);

  function triggerSorter(sortState) {
    var newSorterStates;

    if (sortState.multiplePriority === false || !mergedSorterStates.length || mergedSorterStates[0].multiplePriority === false) {
      newSorterStates = [sortState];
    } else {
      newSorterStates = [].concat((0,toConsumableArray/* default */.Z)(mergedSorterStates.filter(function (_ref7) {
        var key = _ref7.key;
        return key !== sortState.key;
      })), [sortState]);
    }

    setSortStates(newSorterStates);
    onSorterChange(generateSorterInfo(newSorterStates), newSorterStates);
  }

  var transformColumns = function transformColumns(innerColumns) {
    return injectSorter(prefixCls, innerColumns, mergedSorterStates, triggerSorter, sortDirections, tableLocale, showSorterTooltip);
  };

  var getSorters = function getSorters() {
    return generateSorterInfo(mergedSorterStates);
  };

  return [transformColumns, mergedSorterStates, columnTitleSorterProps, getSorters];
}
// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(8446);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/FilterFilled.js
// This icon file is generated automatically.
var FilterFilled = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M349 838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V642H349v196zm531.1-684H143.9c-24.5 0-39.8 26.7-27.5 48l221.3 376h348.8l221.3-376c12.1-21.3-3.2-48-27.7-48z" } }] }, "name": "filter", "theme": "filled" };
/* harmony default export */ var asn_FilterFilled = (FilterFilled);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/FilterFilled.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var FilterFilled_FilterFilled = function FilterFilled(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_FilterFilled
  }));
};

FilterFilled_FilterFilled.displayName = 'FilterFilled';
/* harmony default export */ var icons_FilterFilled = (/*#__PURE__*/react.forwardRef(FilterFilled_FilterFilled));
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js + 4 modules
var es_button = __webpack_require__(404);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/HolderOutlined.js
// This icon file is generated automatically.
var HolderOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M300 276.5a56 56 0 1056-97 56 56 0 00-56 97zm0 284a56 56 0 1056-97 56 56 0 00-56 97zM640 228a56 56 0 10112 0 56 56 0 00-112 0zm0 284a56 56 0 10112 0 56 56 0 00-112 0zM300 844.5a56 56 0 1056-97 56 56 0 00-56 97zM640 796a56 56 0 10112 0 56 56 0 00-112 0z" } }] }, "name": "holder", "theme": "outlined" };
/* harmony default export */ var asn_HolderOutlined = (HolderOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/HolderOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var HolderOutlined_HolderOutlined = function HolderOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_HolderOutlined
  }));
};

HolderOutlined_HolderOutlined.displayName = 'HolderOutlined';
/* harmony default export */ var icons_HolderOutlined = (/*#__PURE__*/react.forwardRef(HolderOutlined_HolderOutlined));
// EXTERNAL MODULE: ./node_modules/rc-motion/es/index.js + 12 modules
var rc_motion_es = __webpack_require__(444);
;// CONCATENATED MODULE: ./node_modules/rc-tree/es/MotionTreeNode.js



var MotionTreeNode_excluded = ["className", "style", "motion", "motionNodes", "motionType", "onMotionStart", "onMotionEnd", "active", "treeNodeRequiredProps"];








var MotionTreeNode = function MotionTreeNode(_ref, ref) {
  var className = _ref.className,
      style = _ref.style,
      motion = _ref.motion,
      motionNodes = _ref.motionNodes,
      motionType = _ref.motionType,
      onOriginMotionStart = _ref.onMotionStart,
      onOriginMotionEnd = _ref.onMotionEnd,
      active = _ref.active,
      treeNodeRequiredProps = _ref.treeNodeRequiredProps,
      props = (0,objectWithoutProperties/* default */.Z)(_ref, MotionTreeNode_excluded);

  var _React$useState = react.useState(true),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      visible = _React$useState2[0],
      setVisible = _React$useState2[1];

  var _React$useContext = react.useContext(TreeContext),
      prefixCls = _React$useContext.prefixCls;

  var motionedRef = react.useRef(false);

  var onMotionEnd = function onMotionEnd() {
    if (!motionedRef.current) {
      onOriginMotionEnd();
    }

    motionedRef.current = true;
  };

  (0,react.useEffect)(function () {
    if (motionNodes && motionType === 'hide' && visible) {
      setVisible(false);
    }
  }, [motionNodes]);
  (0,react.useEffect)(function () {
    // Trigger motion only when patched
    if (motionNodes) {
      onOriginMotionStart();
    }

    return function () {
      if (motionNodes) {
        onMotionEnd();
      }
    };
  }, []);

  if (motionNodes) {
    return /*#__PURE__*/react.createElement(rc_motion_es/* default */.Z, (0,esm_extends/* default */.Z)({
      ref: ref,
      visible: visible
    }, motion, {
      motionAppear: motionType === 'show',
      onAppearEnd: onMotionEnd,
      onLeaveEnd: onMotionEnd
    }), function (_ref2, motionRef) {
      var motionClassName = _ref2.className,
          motionStyle = _ref2.style;
      return /*#__PURE__*/react.createElement("div", {
        ref: motionRef,
        className: classnames_default()("".concat(prefixCls, "-treenode-motion"), motionClassName),
        style: motionStyle
      }, motionNodes.map(function (treeNode) {
        var restProps = (0,esm_extends/* default */.Z)({}, treeNode.data),
            title = treeNode.title,
            key = treeNode.key,
            isStart = treeNode.isStart,
            isEnd = treeNode.isEnd;

        delete restProps.children;
        var treeNodeProps = getTreeNodeProps(key, treeNodeRequiredProps);
        return /*#__PURE__*/react.createElement(es_TreeNode, (0,esm_extends/* default */.Z)({}, restProps, treeNodeProps, {
          title: title,
          active: active,
          data: treeNode.data,
          key: key,
          isStart: isStart,
          isEnd: isEnd
        }));
      }));
    });
  }

  return /*#__PURE__*/react.createElement(es_TreeNode, (0,esm_extends/* default */.Z)({
    domRef: ref,
    className: className,
    style: style
  }, props, {
    active: active
  }));
};

MotionTreeNode.displayName = 'MotionTreeNode';
var RefMotionTreeNode = /*#__PURE__*/react.forwardRef(MotionTreeNode);
/* harmony default export */ var es_MotionTreeNode = (RefMotionTreeNode);
;// CONCATENATED MODULE: ./node_modules/rc-tree/es/utils/diffUtil.js
function findExpandedKeys() {
  var prev = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var prevLen = prev.length;
  var nextLen = next.length;

  if (Math.abs(prevLen - nextLen) !== 1) {
    return {
      add: false,
      key: null
    };
  }

  function find(shorter, longer) {
    var cache = new Map();
    shorter.forEach(function (key) {
      cache.set(key, true);
    });
    var keys = longer.filter(function (key) {
      return !cache.has(key);
    });
    return keys.length === 1 ? keys[0] : null;
  }

  if (prevLen < nextLen) {
    return {
      add: true,
      key: find(prev, next)
    };
  }

  return {
    add: false,
    key: find(next, prev)
  };
}
function getExpandRange(shorter, longer, key) {
  var shorterStartIndex = shorter.findIndex(function (_ref) {
    var data = _ref.data;
    return data.key === key;
  });
  var shorterEndNode = shorter[shorterStartIndex + 1];
  var longerStartIndex = longer.findIndex(function (_ref2) {
    var data = _ref2.data;
    return data.key === key;
  });

  if (shorterEndNode) {
    var longerEndIndex = longer.findIndex(function (_ref3) {
      var data = _ref3.data;
      return data.key === shorterEndNode.data.key;
    });
    return longer.slice(longerStartIndex + 1, longerEndIndex);
  }

  return longer.slice(longerStartIndex + 1);
}
;// CONCATENATED MODULE: ./node_modules/rc-tree/es/NodeList.js



var NodeList_excluded = ["prefixCls", "data", "selectable", "checkable", "expandedKeys", "selectedKeys", "checkedKeys", "loadedKeys", "loadingKeys", "halfCheckedKeys", "keyEntities", "disabled", "dragging", "dragOverNodeKey", "dropPosition", "motion", "height", "itemHeight", "virtual", "focusable", "activeItem", "focused", "tabIndex", "onKeyDown", "onFocus", "onBlur", "onActiveChange", "onListChangeStart", "onListChangeEnd"];

/**
 * Handle virtual list of the TreeNodes.
 */





var HIDDEN_STYLE = {
  width: 0,
  height: 0,
  display: 'flex',
  overflow: 'hidden',
  opacity: 0,
  border: 0,
  padding: 0,
  margin: 0
};

var NodeList_noop = function noop() {};

var MOTION_KEY = "RC_TREE_MOTION_".concat(Math.random());
var MotionNode = {
  key: MOTION_KEY
};
var MotionEntity = {
  key: MOTION_KEY,
  level: 0,
  index: 0,
  pos: '0',
  node: MotionNode,
  nodes: [MotionNode]
};
var MotionFlattenData = {
  parent: null,
  children: [],
  pos: MotionEntity.pos,
  data: MotionNode,
  title: null,
  key: MOTION_KEY,

  /** Hold empty list here since we do not use it */
  isStart: [],
  isEnd: []
};
/**
 * We only need get visible content items to play the animation.
 */

function getMinimumRangeTransitionRange(list, virtual, height, itemHeight) {
  if (virtual === false || !height) {
    return list;
  }

  return list.slice(0, Math.ceil(height / itemHeight) + 1);
}

function itemKey(item) {
  var key = item.key,
      pos = item.pos;
  return treeUtil_getKey(key, pos);
}

function getAccessibilityPath(item) {
  var path = String(item.data.key);
  var current = item;

  while (current.parent) {
    current = current.parent;
    path = "".concat(current.data.key, " > ").concat(path);
  }

  return path;
}

var RefNodeList = function RefNodeList(props, ref) {
  var prefixCls = props.prefixCls,
      data = props.data,
      selectable = props.selectable,
      checkable = props.checkable,
      expandedKeys = props.expandedKeys,
      selectedKeys = props.selectedKeys,
      checkedKeys = props.checkedKeys,
      loadedKeys = props.loadedKeys,
      loadingKeys = props.loadingKeys,
      halfCheckedKeys = props.halfCheckedKeys,
      keyEntities = props.keyEntities,
      disabled = props.disabled,
      dragging = props.dragging,
      dragOverNodeKey = props.dragOverNodeKey,
      dropPosition = props.dropPosition,
      motion = props.motion,
      height = props.height,
      itemHeight = props.itemHeight,
      virtual = props.virtual,
      focusable = props.focusable,
      activeItem = props.activeItem,
      focused = props.focused,
      tabIndex = props.tabIndex,
      onKeyDown = props.onKeyDown,
      onFocus = props.onFocus,
      onBlur = props.onBlur,
      onActiveChange = props.onActiveChange,
      onListChangeStart = props.onListChangeStart,
      onListChangeEnd = props.onListChangeEnd,
      domProps = (0,objectWithoutProperties/* default */.Z)(props, NodeList_excluded); // =============================== Ref ================================


  var listRef = react.useRef(null);
  var indentMeasurerRef = react.useRef(null);
  react.useImperativeHandle(ref, function () {
    return {
      scrollTo: function scrollTo(scroll) {
        listRef.current.scrollTo(scroll);
      },
      getIndentWidth: function getIndentWidth() {
        return indentMeasurerRef.current.offsetWidth;
      }
    };
  }); // ============================== Motion ==============================

  var _React$useState = react.useState(expandedKeys),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      prevExpandedKeys = _React$useState2[0],
      setPrevExpandedKeys = _React$useState2[1];

  var _React$useState3 = react.useState(data),
      _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
      prevData = _React$useState4[0],
      setPrevData = _React$useState4[1];

  var _React$useState5 = react.useState(data),
      _React$useState6 = (0,slicedToArray/* default */.Z)(_React$useState5, 2),
      transitionData = _React$useState6[0],
      setTransitionData = _React$useState6[1];

  var _React$useState7 = react.useState([]),
      _React$useState8 = (0,slicedToArray/* default */.Z)(_React$useState7, 2),
      transitionRange = _React$useState8[0],
      setTransitionRange = _React$useState8[1];

  var _React$useState9 = react.useState(null),
      _React$useState10 = (0,slicedToArray/* default */.Z)(_React$useState9, 2),
      motionType = _React$useState10[0],
      setMotionType = _React$useState10[1];

  function onMotionEnd() {
    setPrevData(data);
    setTransitionData(data);
    setTransitionRange([]);
    setMotionType(null);
    onListChangeEnd();
  } // Do animation if expanded keys changed


  react.useEffect(function () {
    setPrevExpandedKeys(expandedKeys);
    var diffExpanded = findExpandedKeys(prevExpandedKeys, expandedKeys);

    if (diffExpanded.key !== null) {
      if (diffExpanded.add) {
        var keyIndex = prevData.findIndex(function (_ref) {
          var key = _ref.data.key;
          return key === diffExpanded.key;
        });
        var rangeNodes = getMinimumRangeTransitionRange(getExpandRange(prevData, data, diffExpanded.key), virtual, height, itemHeight);
        var newTransitionData = prevData.slice();
        newTransitionData.splice(keyIndex + 1, 0, MotionFlattenData);
        setTransitionData(newTransitionData);
        setTransitionRange(rangeNodes);
        setMotionType('show');
      } else {
        var _keyIndex = data.findIndex(function (_ref2) {
          var key = _ref2.data.key;
          return key === diffExpanded.key;
        });

        var _rangeNodes = getMinimumRangeTransitionRange(getExpandRange(data, prevData, diffExpanded.key), virtual, height, itemHeight);

        var _newTransitionData = data.slice();

        _newTransitionData.splice(_keyIndex + 1, 0, MotionFlattenData);

        setTransitionData(_newTransitionData);
        setTransitionRange(_rangeNodes);
        setMotionType('hide');
      }
    } else if (prevData !== data) {
      // If whole data changed, we just refresh the list
      setPrevData(data);
      setTransitionData(data);
    }
  }, [expandedKeys, data]); // We should clean up motion if is changed by dragging

  react.useEffect(function () {
    if (!dragging) {
      onMotionEnd();
    }
  }, [dragging]);
  var mergedData = motion ? transitionData : data;
  var treeNodeRequiredProps = {
    expandedKeys: expandedKeys,
    selectedKeys: selectedKeys,
    loadedKeys: loadedKeys,
    loadingKeys: loadingKeys,
    checkedKeys: checkedKeys,
    halfCheckedKeys: halfCheckedKeys,
    dragOverNodeKey: dragOverNodeKey,
    dropPosition: dropPosition,
    keyEntities: keyEntities
  };
  return /*#__PURE__*/react.createElement(react.Fragment, null, focused && activeItem && /*#__PURE__*/react.createElement("span", {
    style: HIDDEN_STYLE,
    "aria-live": "assertive"
  }, getAccessibilityPath(activeItem)), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("input", {
    style: HIDDEN_STYLE,
    disabled: focusable === false || disabled,
    tabIndex: focusable !== false ? tabIndex : null,
    onKeyDown: onKeyDown,
    onFocus: onFocus,
    onBlur: onBlur,
    value: "",
    onChange: NodeList_noop,
    "aria-label": "for screen reader"
  })), /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-treenode"),
    "aria-hidden": true,
    style: {
      position: 'absolute',
      pointerEvents: 'none',
      visibility: 'hidden',
      height: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-indent")
  }, /*#__PURE__*/react.createElement("div", {
    ref: indentMeasurerRef,
    className: "".concat(prefixCls, "-indent-unit")
  }))), /*#__PURE__*/react.createElement(rc_virtual_list_es, (0,esm_extends/* default */.Z)({}, domProps, {
    data: mergedData,
    itemKey: itemKey,
    height: height,
    fullHeight: false,
    virtual: virtual,
    itemHeight: itemHeight,
    prefixCls: "".concat(prefixCls, "-list"),
    ref: listRef,
    onVisibleChange: function onVisibleChange(originList, fullList) {
      var originSet = new Set(originList);
      var restList = fullList.filter(function (item) {
        return !originSet.has(item);
      }); // Motion node is not render. Skip motion

      if (restList.some(function (item) {
        return itemKey(item) === MOTION_KEY;
      })) {
        onMotionEnd();
      }
    }
  }), function (treeNode) {
    var pos = treeNode.pos,
        restProps = (0,esm_extends/* default */.Z)({}, treeNode.data),
        title = treeNode.title,
        key = treeNode.key,
        isStart = treeNode.isStart,
        isEnd = treeNode.isEnd;

    var mergedKey = treeUtil_getKey(key, pos);
    delete restProps.key;
    delete restProps.children;
    var treeNodeProps = getTreeNodeProps(mergedKey, treeNodeRequiredProps);
    return /*#__PURE__*/react.createElement(es_MotionTreeNode, (0,esm_extends/* default */.Z)({}, restProps, treeNodeProps, {
      title: title,
      active: !!activeItem && key === activeItem.key,
      pos: pos,
      data: treeNode.data,
      isStart: isStart,
      isEnd: isEnd,
      motion: motion,
      motionNodes: key === MOTION_KEY ? transitionRange : null,
      motionType: motionType,
      onMotionStart: onListChangeStart,
      onMotionEnd: onMotionEnd,
      treeNodeRequiredProps: treeNodeRequiredProps,
      onMouseMove: function onMouseMove() {
        onActiveChange(null);
      }
    }));
  }));
};

var NodeList = /*#__PURE__*/react.forwardRef(RefNodeList);
NodeList.displayName = 'NodeList';
/* harmony default export */ var es_NodeList = (NodeList);
;// CONCATENATED MODULE: ./node_modules/rc-tree/es/DropIndicator.js

function DropIndicator(_ref) {
  var dropPosition = _ref.dropPosition,
      dropLevelOffset = _ref.dropLevelOffset,
      indent = _ref.indent;
  var style = {
    pointerEvents: 'none',
    position: 'absolute',
    right: 0,
    backgroundColor: 'red',
    height: 2
  };

  switch (dropPosition) {
    case -1:
      style.top = 0;
      style.left = -dropLevelOffset * indent;
      break;

    case 1:
      style.bottom = 0;
      style.left = -dropLevelOffset * indent;
      break;

    case 0:
      style.bottom = 0;
      style.left = indent;
      break;
  }

  return /*#__PURE__*/react.createElement("div", {
    style: style
  });
}
;// CONCATENATED MODULE: ./node_modules/rc-tree/es/Tree.js










// TODO: https://www.w3.org/TR/2017/NOTE-wai-aria-practices-1.1-20171214/examples/treeview/treeview-2/treeview-2a.html
// Fully accessibility support












var MAX_RETRY_TIMES = 10;

var Tree = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(Tree, _React$Component);

  var _super = (0,createSuper/* default */.Z)(Tree);

  function Tree() {
    var _this;

    (0,classCallCheck/* default */.Z)(this, Tree);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(_args));
    _this.destroyed = false;
    _this.delayedDragEnterLogic = void 0;
    _this.loadingRetryTimes = {};
    _this.state = {
      keyEntities: {},
      indent: null,
      selectedKeys: [],
      checkedKeys: [],
      halfCheckedKeys: [],
      loadedKeys: [],
      loadingKeys: [],
      expandedKeys: [],
      draggingNodeKey: null,
      dragChildrenKeys: [],
      // dropTargetKey is the key of abstract-drop-node
      // the abstract-drop-node is the real drop node when drag and drop
      // not the DOM drag over node
      dropTargetKey: null,
      dropPosition: null,
      dropContainerKey: null,
      dropLevelOffset: null,
      dropTargetPos: null,
      dropAllowed: true,
      // the abstract-drag-over-node
      // if mouse is on the bottom of top dom node or no the top of the bottom dom node
      // abstract-drag-over-node is the top node
      dragOverNodeKey: null,
      treeData: [],
      flattenNodes: [],
      focused: false,
      activeKey: null,
      listChanging: false,
      prevProps: null,
      fieldNames: treeUtil_fillFieldNames()
    };
    _this.dragStartMousePosition = null;
    _this.dragNode = void 0;
    _this.currentMouseOverDroppableNodeKey = null;
    _this.listRef = /*#__PURE__*/react.createRef();

    _this.onNodeDragStart = function (event, node) {
      var _this$state = _this.state,
          expandedKeys = _this$state.expandedKeys,
          keyEntities = _this$state.keyEntities;
      var onDragStart = _this.props.onDragStart;
      var eventKey = node.props.eventKey;
      _this.dragNode = node;
      _this.dragStartMousePosition = {
        x: event.clientX,
        y: event.clientY
      };
      var newExpandedKeys = arrDel(expandedKeys, eventKey);

      _this.setState({
        draggingNodeKey: eventKey,
        dragChildrenKeys: getDragChildrenKeys(eventKey, keyEntities),
        indent: _this.listRef.current.getIndentWidth()
      });

      _this.setExpandedKeys(newExpandedKeys);

      window.addEventListener('dragend', _this.onWindowDragEnd);

      if (onDragStart) {
        onDragStart({
          event: event,
          node: convertNodePropsToEventData(node.props)
        });
      }
    };

    _this.onNodeDragEnter = function (event, node) {
      var _this$state2 = _this.state,
          expandedKeys = _this$state2.expandedKeys,
          keyEntities = _this$state2.keyEntities,
          dragChildrenKeys = _this$state2.dragChildrenKeys,
          flattenNodes = _this$state2.flattenNodes,
          indent = _this$state2.indent;
      var _this$props = _this.props,
          onDragEnter = _this$props.onDragEnter,
          onExpand = _this$props.onExpand,
          allowDrop = _this$props.allowDrop,
          direction = _this$props.direction;
      var _node$props = node.props,
          pos = _node$props.pos,
          eventKey = _node$props.eventKey;

      var _assertThisInitialize = (0,assertThisInitialized/* default */.Z)(_this),
          dragNode = _assertThisInitialize.dragNode; // record the key of node which is latest entered, used in dragleave event.


      if (_this.currentMouseOverDroppableNodeKey !== eventKey) {
        _this.currentMouseOverDroppableNodeKey = eventKey;
      }

      if (!dragNode) {
        _this.resetDragState();

        return;
      }

      var _calcDropPosition = calcDropPosition(event, dragNode, node, indent, _this.dragStartMousePosition, allowDrop, flattenNodes, keyEntities, expandedKeys, direction),
          dropPosition = _calcDropPosition.dropPosition,
          dropLevelOffset = _calcDropPosition.dropLevelOffset,
          dropTargetKey = _calcDropPosition.dropTargetKey,
          dropContainerKey = _calcDropPosition.dropContainerKey,
          dropTargetPos = _calcDropPosition.dropTargetPos,
          dropAllowed = _calcDropPosition.dropAllowed,
          dragOverNodeKey = _calcDropPosition.dragOverNodeKey;

      if ( // don't allow drop inside its children
      dragChildrenKeys.indexOf(dropTargetKey) !== -1 || // don't allow drop when drop is not allowed caculated by calcDropPosition
      !dropAllowed) {
        _this.resetDragState();

        return;
      } // Side effect for delay drag


      if (!_this.delayedDragEnterLogic) {
        _this.delayedDragEnterLogic = {};
      }

      Object.keys(_this.delayedDragEnterLogic).forEach(function (key) {
        clearTimeout(_this.delayedDragEnterLogic[key]);
      });

      if (dragNode.props.eventKey !== node.props.eventKey) {
        // hoist expand logic here
        // since if logic is on the bottom
        // it will be blocked by abstract dragover node check
        //   => if you dragenter from top, you mouse will still be consider as in the top node
        event.persist();
        _this.delayedDragEnterLogic[pos] = window.setTimeout(function () {
          if (_this.state.draggingNodeKey === null) return;

          var newExpandedKeys = (0,toConsumableArray/* default */.Z)(expandedKeys);

          var entity = keyEntities[node.props.eventKey];

          if (entity && (entity.children || []).length) {
            newExpandedKeys = arrAdd(expandedKeys, node.props.eventKey);
          }

          if (!('expandedKeys' in _this.props)) {
            _this.setExpandedKeys(newExpandedKeys);
          }

          if (onExpand) {
            onExpand(newExpandedKeys, {
              node: convertNodePropsToEventData(node.props),
              expanded: true,
              nativeEvent: event.nativeEvent
            });
          }
        }, 800);
      } // Skip if drag node is self


      if (dragNode.props.eventKey === dropTargetKey && dropLevelOffset === 0) {
        _this.resetDragState();

        return;
      } // Update drag over node and drag state


      _this.setState({
        dragOverNodeKey: dragOverNodeKey,
        dropPosition: dropPosition,
        dropLevelOffset: dropLevelOffset,
        dropTargetKey: dropTargetKey,
        dropContainerKey: dropContainerKey,
        dropTargetPos: dropTargetPos,
        dropAllowed: dropAllowed
      });

      if (onDragEnter) {
        onDragEnter({
          event: event,
          node: convertNodePropsToEventData(node.props),
          expandedKeys: expandedKeys
        });
      }
    };

    _this.onNodeDragOver = function (event, node) {
      var _this$state3 = _this.state,
          dragChildrenKeys = _this$state3.dragChildrenKeys,
          flattenNodes = _this$state3.flattenNodes,
          keyEntities = _this$state3.keyEntities,
          expandedKeys = _this$state3.expandedKeys,
          indent = _this$state3.indent;
      var _this$props2 = _this.props,
          onDragOver = _this$props2.onDragOver,
          allowDrop = _this$props2.allowDrop,
          direction = _this$props2.direction;

      var _assertThisInitialize2 = (0,assertThisInitialized/* default */.Z)(_this),
          dragNode = _assertThisInitialize2.dragNode;

      if (!dragNode) {
        return;
      }

      var _calcDropPosition2 = calcDropPosition(event, dragNode, node, indent, _this.dragStartMousePosition, allowDrop, flattenNodes, keyEntities, expandedKeys, direction),
          dropPosition = _calcDropPosition2.dropPosition,
          dropLevelOffset = _calcDropPosition2.dropLevelOffset,
          dropTargetKey = _calcDropPosition2.dropTargetKey,
          dropContainerKey = _calcDropPosition2.dropContainerKey,
          dropAllowed = _calcDropPosition2.dropAllowed,
          dropTargetPos = _calcDropPosition2.dropTargetPos,
          dragOverNodeKey = _calcDropPosition2.dragOverNodeKey;

      if (dragChildrenKeys.indexOf(dropTargetKey) !== -1 || !dropAllowed) {
        // don't allow drop inside its children
        // don't allow drop when drop is not allowed caculated by calcDropPosition
        return;
      } // Update drag position


      if (dragNode.props.eventKey === dropTargetKey && dropLevelOffset === 0) {
        if (!(_this.state.dropPosition === null && _this.state.dropLevelOffset === null && _this.state.dropTargetKey === null && _this.state.dropContainerKey === null && _this.state.dropTargetPos === null && _this.state.dropAllowed === false && _this.state.dragOverNodeKey === null)) {
          _this.resetDragState();
        }
      } else if (!(dropPosition === _this.state.dropPosition && dropLevelOffset === _this.state.dropLevelOffset && dropTargetKey === _this.state.dropTargetKey && dropContainerKey === _this.state.dropContainerKey && dropTargetPos === _this.state.dropTargetPos && dropAllowed === _this.state.dropAllowed && dragOverNodeKey === _this.state.dragOverNodeKey)) {
        _this.setState({
          dropPosition: dropPosition,
          dropLevelOffset: dropLevelOffset,
          dropTargetKey: dropTargetKey,
          dropContainerKey: dropContainerKey,
          dropTargetPos: dropTargetPos,
          dropAllowed: dropAllowed,
          dragOverNodeKey: dragOverNodeKey
        });
      }

      if (onDragOver) {
        onDragOver({
          event: event,
          node: convertNodePropsToEventData(node.props)
        });
      }
    };

    _this.onNodeDragLeave = function (event, node) {
      // if it is outside the droppable area
      // currentMouseOverDroppableNodeKey will be updated in dragenter event when into another droppable receiver.
      if (_this.currentMouseOverDroppableNodeKey === node.props.eventKey && !event.currentTarget.contains(event.relatedTarget)) {
        _this.resetDragState();

        _this.currentMouseOverDroppableNodeKey = null;
      }

      var onDragLeave = _this.props.onDragLeave;

      if (onDragLeave) {
        onDragLeave({
          event: event,
          node: convertNodePropsToEventData(node.props)
        });
      }
    };

    _this.onWindowDragEnd = function (event) {
      _this.onNodeDragEnd(event, null, true);

      window.removeEventListener('dragend', _this.onWindowDragEnd);
    };

    _this.onNodeDragEnd = function (event, node) {
      var outsideTree = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var onDragEnd = _this.props.onDragEnd;

      _this.setState({
        dragOverNodeKey: null
      });

      _this.cleanDragState();

      if (onDragEnd && !outsideTree) {
        onDragEnd({
          event: event,
          node: convertNodePropsToEventData(node.props)
        });
      }

      _this.dragNode = null;
    };

    _this.onNodeDrop = function (event, node) {
      var _this$getActiveItem;

      var outsideTree = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var _this$state4 = _this.state,
          dragChildrenKeys = _this$state4.dragChildrenKeys,
          dropPosition = _this$state4.dropPosition,
          dropTargetKey = _this$state4.dropTargetKey,
          dropTargetPos = _this$state4.dropTargetPos,
          dropAllowed = _this$state4.dropAllowed;
      if (!dropAllowed) return;
      var onDrop = _this.props.onDrop;

      _this.setState({
        dragOverNodeKey: null
      });

      _this.cleanDragState();

      if (dropTargetKey === null) return;

      var abstractDropNodeProps = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, getTreeNodeProps(dropTargetKey, _this.getTreeNodeRequiredProps())), {}, {
        active: ((_this$getActiveItem = _this.getActiveItem()) === null || _this$getActiveItem === void 0 ? void 0 : _this$getActiveItem.data.key) === dropTargetKey,
        data: _this.state.keyEntities[dropTargetKey].node
      });

      var dropToChild = dragChildrenKeys.indexOf(dropTargetKey) !== -1;
      (0,es_warning/* default */.ZP)(!dropToChild, "Can not drop to dragNode's children node. This is a bug of rc-tree. Please report an issue.");
      var posArr = posToArr(dropTargetPos);
      var dropResult = {
        event: event,
        node: convertNodePropsToEventData(abstractDropNodeProps),
        dragNode: _this.dragNode ? convertNodePropsToEventData(_this.dragNode.props) : null,
        dragNodesKeys: [_this.dragNode.props.eventKey].concat(dragChildrenKeys),
        dropToGap: dropPosition !== 0,
        dropPosition: dropPosition + Number(posArr[posArr.length - 1])
      };

      if (onDrop && !outsideTree) {
        onDrop(dropResult);
      }

      _this.dragNode = null;
    };

    _this.cleanDragState = function () {
      var draggingNodeKey = _this.state.draggingNodeKey;

      if (draggingNodeKey !== null) {
        _this.setState({
          draggingNodeKey: null,
          dropPosition: null,
          dropContainerKey: null,
          dropTargetKey: null,
          dropLevelOffset: null,
          dropAllowed: true,
          dragOverNodeKey: null
        });
      }

      _this.dragStartMousePosition = null;
      _this.currentMouseOverDroppableNodeKey = null;
    };

    _this.onNodeClick = function (e, treeNode) {
      var onClick = _this.props.onClick;

      if (onClick) {
        onClick(e, treeNode);
      }
    };

    _this.onNodeDoubleClick = function (e, treeNode) {
      var onDoubleClick = _this.props.onDoubleClick;

      if (onDoubleClick) {
        onDoubleClick(e, treeNode);
      }
    };

    _this.onNodeSelect = function (e, treeNode) {
      var selectedKeys = _this.state.selectedKeys;
      var _this$state5 = _this.state,
          keyEntities = _this$state5.keyEntities,
          fieldNames = _this$state5.fieldNames;
      var _this$props3 = _this.props,
          onSelect = _this$props3.onSelect,
          multiple = _this$props3.multiple;
      var selected = treeNode.selected;
      var key = treeNode[fieldNames.key];
      var targetSelected = !selected; // Update selected keys

      if (!targetSelected) {
        selectedKeys = arrDel(selectedKeys, key);
      } else if (!multiple) {
        selectedKeys = [key];
      } else {
        selectedKeys = arrAdd(selectedKeys, key);
      } // [Legacy] Not found related usage in doc or upper libs


      var selectedNodes = selectedKeys.map(function (selectedKey) {
        var entity = keyEntities[selectedKey];
        if (!entity) return null;
        return entity.node;
      }).filter(function (node) {
        return node;
      });

      _this.setUncontrolledState({
        selectedKeys: selectedKeys
      });

      if (onSelect) {
        onSelect(selectedKeys, {
          event: 'select',
          selected: targetSelected,
          node: treeNode,
          selectedNodes: selectedNodes,
          nativeEvent: e.nativeEvent
        });
      }
    };

    _this.onNodeCheck = function (e, treeNode, checked) {
      var _this$state6 = _this.state,
          keyEntities = _this$state6.keyEntities,
          oriCheckedKeys = _this$state6.checkedKeys,
          oriHalfCheckedKeys = _this$state6.halfCheckedKeys;
      var _this$props4 = _this.props,
          checkStrictly = _this$props4.checkStrictly,
          onCheck = _this$props4.onCheck;
      var key = treeNode.key; // Prepare trigger arguments

      var checkedObj;
      var eventObj = {
        event: 'check',
        node: treeNode,
        checked: checked,
        nativeEvent: e.nativeEvent
      };

      if (checkStrictly) {
        var checkedKeys = checked ? arrAdd(oriCheckedKeys, key) : arrDel(oriCheckedKeys, key);
        var halfCheckedKeys = arrDel(oriHalfCheckedKeys, key);
        checkedObj = {
          checked: checkedKeys,
          halfChecked: halfCheckedKeys
        };
        eventObj.checkedNodes = checkedKeys.map(function (checkedKey) {
          return keyEntities[checkedKey];
        }).filter(function (entity) {
          return entity;
        }).map(function (entity) {
          return entity.node;
        });

        _this.setUncontrolledState({
          checkedKeys: checkedKeys
        });
      } else {
        // Always fill first
        var _conductCheck = conductCheck([].concat((0,toConsumableArray/* default */.Z)(oriCheckedKeys), [key]), true, keyEntities),
            _checkedKeys = _conductCheck.checkedKeys,
            _halfCheckedKeys = _conductCheck.halfCheckedKeys; // If remove, we do it again to correction


        if (!checked) {
          var keySet = new Set(_checkedKeys);
          keySet.delete(key);

          var _conductCheck2 = conductCheck(Array.from(keySet), {
            checked: false,
            halfCheckedKeys: _halfCheckedKeys
          }, keyEntities);

          _checkedKeys = _conductCheck2.checkedKeys;
          _halfCheckedKeys = _conductCheck2.halfCheckedKeys;
        }

        checkedObj = _checkedKeys; // [Legacy] This is used for `rc-tree-select`

        eventObj.checkedNodes = [];
        eventObj.checkedNodesPositions = [];
        eventObj.halfCheckedKeys = _halfCheckedKeys;

        _checkedKeys.forEach(function (checkedKey) {
          var entity = keyEntities[checkedKey];
          if (!entity) return;
          var node = entity.node,
              pos = entity.pos;
          eventObj.checkedNodes.push(node);
          eventObj.checkedNodesPositions.push({
            node: node,
            pos: pos
          });
        });

        _this.setUncontrolledState({
          checkedKeys: _checkedKeys
        }, false, {
          halfCheckedKeys: _halfCheckedKeys
        });
      }

      if (onCheck) {
        onCheck(checkedObj, eventObj);
      }
    };

    _this.onNodeLoad = function (treeNode) {
      var key = treeNode.key;
      var loadPromise = new Promise(function (resolve, reject) {
        // We need to get the latest state of loading/loaded keys
        _this.setState(function (_ref) {
          var _ref$loadedKeys = _ref.loadedKeys,
              loadedKeys = _ref$loadedKeys === void 0 ? [] : _ref$loadedKeys,
              _ref$loadingKeys = _ref.loadingKeys,
              loadingKeys = _ref$loadingKeys === void 0 ? [] : _ref$loadingKeys;
          var _this$props5 = _this.props,
              loadData = _this$props5.loadData,
              onLoad = _this$props5.onLoad;

          if (!loadData || loadedKeys.indexOf(key) !== -1 || loadingKeys.indexOf(key) !== -1) {
            return null;
          } // Process load data


          var promise = loadData(treeNode);
          promise.then(function () {
            var currentLoadedKeys = _this.state.loadedKeys;
            var newLoadedKeys = arrAdd(currentLoadedKeys, key); // onLoad should trigger before internal setState to avoid `loadData` trigger twice.
            // https://github.com/ant-design/ant-design/issues/12464

            if (onLoad) {
              onLoad(newLoadedKeys, {
                event: 'load',
                node: treeNode
              });
            }

            _this.setUncontrolledState({
              loadedKeys: newLoadedKeys
            });

            _this.setState(function (prevState) {
              return {
                loadingKeys: arrDel(prevState.loadingKeys, key)
              };
            });

            resolve();
          }).catch(function (e) {
            _this.setState(function (prevState) {
              return {
                loadingKeys: arrDel(prevState.loadingKeys, key)
              };
            }); // If exceed max retry times, we give up retry


            _this.loadingRetryTimes[key] = (_this.loadingRetryTimes[key] || 0) + 1;

            if (_this.loadingRetryTimes[key] >= MAX_RETRY_TIMES) {
              var currentLoadedKeys = _this.state.loadedKeys;
              (0,es_warning/* default */.ZP)(false, 'Retry for `loadData` many times but still failed. No more retry.');

              _this.setUncontrolledState({
                loadedKeys: arrAdd(currentLoadedKeys, key)
              });

              resolve();
            }

            reject(e);
          });
          return {
            loadingKeys: arrAdd(loadingKeys, key)
          };
        });
      }); // Not care warning if we ignore this

      loadPromise.catch(function () {});
      return loadPromise;
    };

    _this.onNodeMouseEnter = function (event, node) {
      var onMouseEnter = _this.props.onMouseEnter;

      if (onMouseEnter) {
        onMouseEnter({
          event: event,
          node: node
        });
      }
    };

    _this.onNodeMouseLeave = function (event, node) {
      var onMouseLeave = _this.props.onMouseLeave;

      if (onMouseLeave) {
        onMouseLeave({
          event: event,
          node: node
        });
      }
    };

    _this.onNodeContextMenu = function (event, node) {
      var onRightClick = _this.props.onRightClick;

      if (onRightClick) {
        event.preventDefault();
        onRightClick({
          event: event,
          node: node
        });
      }
    };

    _this.onFocus = function () {
      var onFocus = _this.props.onFocus;

      _this.setState({
        focused: true
      });

      if (onFocus) {
        onFocus.apply(void 0, arguments);
      }
    };

    _this.onBlur = function () {
      var onBlur = _this.props.onBlur;

      _this.setState({
        focused: false
      });

      _this.onActiveChange(null);

      if (onBlur) {
        onBlur.apply(void 0, arguments);
      }
    };

    _this.getTreeNodeRequiredProps = function () {
      var _this$state7 = _this.state,
          expandedKeys = _this$state7.expandedKeys,
          selectedKeys = _this$state7.selectedKeys,
          loadedKeys = _this$state7.loadedKeys,
          loadingKeys = _this$state7.loadingKeys,
          checkedKeys = _this$state7.checkedKeys,
          halfCheckedKeys = _this$state7.halfCheckedKeys,
          dragOverNodeKey = _this$state7.dragOverNodeKey,
          dropPosition = _this$state7.dropPosition,
          keyEntities = _this$state7.keyEntities;
      return {
        expandedKeys: expandedKeys || [],
        selectedKeys: selectedKeys || [],
        loadedKeys: loadedKeys || [],
        loadingKeys: loadingKeys || [],
        checkedKeys: checkedKeys || [],
        halfCheckedKeys: halfCheckedKeys || [],
        dragOverNodeKey: dragOverNodeKey,
        dropPosition: dropPosition,
        keyEntities: keyEntities
      };
    };

    _this.setExpandedKeys = function (expandedKeys) {
      var _this$state8 = _this.state,
          treeData = _this$state8.treeData,
          fieldNames = _this$state8.fieldNames;
      var flattenNodes = flattenTreeData(treeData, expandedKeys, fieldNames);

      _this.setUncontrolledState({
        expandedKeys: expandedKeys,
        flattenNodes: flattenNodes
      }, true);
    };

    _this.onNodeExpand = function (e, treeNode) {
      var expandedKeys = _this.state.expandedKeys;
      var _this$state9 = _this.state,
          listChanging = _this$state9.listChanging,
          fieldNames = _this$state9.fieldNames;
      var _this$props6 = _this.props,
          onExpand = _this$props6.onExpand,
          loadData = _this$props6.loadData;
      var expanded = treeNode.expanded;
      var key = treeNode[fieldNames.key]; // Do nothing when motion is in progress

      if (listChanging) {
        return;
      } // Update selected keys


      var index = expandedKeys.indexOf(key);
      var targetExpanded = !expanded;
      (0,es_warning/* default */.ZP)(expanded && index !== -1 || !expanded && index === -1, 'Expand state not sync with index check');

      if (targetExpanded) {
        expandedKeys = arrAdd(expandedKeys, key);
      } else {
        expandedKeys = arrDel(expandedKeys, key);
      }

      _this.setExpandedKeys(expandedKeys);

      if (onExpand) {
        onExpand(expandedKeys, {
          node: treeNode,
          expanded: targetExpanded,
          nativeEvent: e.nativeEvent
        });
      } // Async Load data


      if (targetExpanded && loadData) {
        var loadPromise = _this.onNodeLoad(treeNode);

        if (loadPromise) {
          loadPromise.then(function () {
            // [Legacy] Refresh logic
            var newFlattenTreeData = flattenTreeData(_this.state.treeData, expandedKeys, fieldNames);

            _this.setUncontrolledState({
              flattenNodes: newFlattenTreeData
            });
          }).catch(function () {
            var currentExpandedKeys = _this.state.expandedKeys;
            var expandedKeysToRestore = arrDel(currentExpandedKeys, key);

            _this.setExpandedKeys(expandedKeysToRestore);
          });
        }
      }
    };

    _this.onListChangeStart = function () {
      _this.setUncontrolledState({
        listChanging: true
      });
    };

    _this.onListChangeEnd = function () {
      setTimeout(function () {
        _this.setUncontrolledState({
          listChanging: false
        });
      });
    };

    _this.onActiveChange = function (newActiveKey) {
      var activeKey = _this.state.activeKey;
      var onActiveChange = _this.props.onActiveChange;

      if (activeKey === newActiveKey) {
        return;
      }

      _this.setState({
        activeKey: newActiveKey
      });

      if (newActiveKey !== null) {
        _this.scrollTo({
          key: newActiveKey
        });
      }

      if (onActiveChange) {
        onActiveChange(newActiveKey);
      }
    };

    _this.getActiveItem = function () {
      var _this$state10 = _this.state,
          activeKey = _this$state10.activeKey,
          flattenNodes = _this$state10.flattenNodes;

      if (activeKey === null) {
        return null;
      }

      return flattenNodes.find(function (_ref2) {
        var key = _ref2.key;
        return key === activeKey;
      }) || null;
    };

    _this.offsetActiveKey = function (offset) {
      var _this$state11 = _this.state,
          flattenNodes = _this$state11.flattenNodes,
          activeKey = _this$state11.activeKey;
      var index = flattenNodes.findIndex(function (_ref3) {
        var key = _ref3.key;
        return key === activeKey;
      }); // Align with index

      if (index === -1 && offset < 0) {
        index = flattenNodes.length;
      }

      index = (index + offset + flattenNodes.length) % flattenNodes.length;
      var item = flattenNodes[index];

      if (item) {
        var key = item.key;

        _this.onActiveChange(key);
      } else {
        _this.onActiveChange(null);
      }
    };

    _this.onKeyDown = function (event) {
      var _this$state12 = _this.state,
          activeKey = _this$state12.activeKey,
          expandedKeys = _this$state12.expandedKeys,
          checkedKeys = _this$state12.checkedKeys;
      var _this$props7 = _this.props,
          onKeyDown = _this$props7.onKeyDown,
          checkable = _this$props7.checkable,
          selectable = _this$props7.selectable; // >>>>>>>>>> Direction

      switch (event.which) {
        case KeyCode/* default.UP */.Z.UP:
          {
            _this.offsetActiveKey(-1);

            event.preventDefault();
            break;
          }

        case KeyCode/* default.DOWN */.Z.DOWN:
          {
            _this.offsetActiveKey(1);

            event.preventDefault();
            break;
          }
      } // >>>>>>>>>> Expand & Selection


      var activeItem = _this.getActiveItem();

      if (activeItem && activeItem.data) {
        var treeNodeRequiredProps = _this.getTreeNodeRequiredProps();

        var expandable = activeItem.data.isLeaf === false || !!(activeItem.data.children || []).length;
        var eventNode = convertNodePropsToEventData((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, getTreeNodeProps(activeKey, treeNodeRequiredProps)), {}, {
          data: activeItem.data,
          active: true
        }));

        switch (event.which) {
          // >>> Expand
          case KeyCode/* default.LEFT */.Z.LEFT:
            {
              // Collapse if possible
              if (expandable && expandedKeys.includes(activeKey)) {
                _this.onNodeExpand({}, eventNode);
              } else if (activeItem.parent) {
                _this.onActiveChange(activeItem.parent.data.key);
              }

              event.preventDefault();
              break;
            }

          case KeyCode/* default.RIGHT */.Z.RIGHT:
            {
              // Expand if possible
              if (expandable && !expandedKeys.includes(activeKey)) {
                _this.onNodeExpand({}, eventNode);
              } else if (activeItem.children && activeItem.children.length) {
                _this.onActiveChange(activeItem.children[0].data.key);
              }

              event.preventDefault();
              break;
            }
          // Selection

          case KeyCode/* default.ENTER */.Z.ENTER:
          case KeyCode/* default.SPACE */.Z.SPACE:
            {
              if (checkable && !eventNode.disabled && eventNode.checkable !== false && !eventNode.disableCheckbox) {
                _this.onNodeCheck({}, eventNode, !checkedKeys.includes(activeKey));
              } else if (!checkable && selectable && !eventNode.disabled && eventNode.selectable !== false) {
                _this.onNodeSelect({}, eventNode);
              }

              break;
            }
        }
      }

      if (onKeyDown) {
        onKeyDown(event);
      }
    };

    _this.setUncontrolledState = function (state) {
      var atomic = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var forceState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      if (!_this.destroyed) {
        var needSync = false;
        var allPassed = true;
        var newState = {};
        Object.keys(state).forEach(function (name) {
          if (name in _this.props) {
            allPassed = false;
            return;
          }

          needSync = true;
          newState[name] = state[name];
        });

        if (needSync && (!atomic || allPassed)) {
          _this.setState((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, newState), forceState));
        }
      }
    };

    _this.scrollTo = function (scroll) {
      _this.listRef.current.scrollTo(scroll);
    };

    return _this;
  }

  (0,createClass/* default */.Z)(Tree, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.onUpdated();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.onUpdated();
    }
  }, {
    key: "onUpdated",
    value: function onUpdated() {
      var activeKey = this.props.activeKey;

      if (activeKey !== undefined && activeKey !== this.state.activeKey) {
        this.setState({
          activeKey: activeKey
        });

        if (activeKey !== null) {
          this.scrollTo({
            key: activeKey
          });
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('dragend', this.onWindowDragEnd);
      this.destroyed = true;
    }
  }, {
    key: "resetDragState",
    value: function resetDragState() {
      this.setState({
        dragOverNodeKey: null,
        dropPosition: null,
        dropLevelOffset: null,
        dropTargetKey: null,
        dropContainerKey: null,
        dropTargetPos: null,
        dropAllowed: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$state13 = this.state,
          focused = _this$state13.focused,
          flattenNodes = _this$state13.flattenNodes,
          keyEntities = _this$state13.keyEntities,
          draggingNodeKey = _this$state13.draggingNodeKey,
          activeKey = _this$state13.activeKey,
          dropLevelOffset = _this$state13.dropLevelOffset,
          dropContainerKey = _this$state13.dropContainerKey,
          dropTargetKey = _this$state13.dropTargetKey,
          dropPosition = _this$state13.dropPosition,
          dragOverNodeKey = _this$state13.dragOverNodeKey,
          indent = _this$state13.indent;
      var _this$props8 = this.props,
          prefixCls = _this$props8.prefixCls,
          className = _this$props8.className,
          style = _this$props8.style,
          showLine = _this$props8.showLine,
          focusable = _this$props8.focusable,
          _this$props8$tabIndex = _this$props8.tabIndex,
          tabIndex = _this$props8$tabIndex === void 0 ? 0 : _this$props8$tabIndex,
          selectable = _this$props8.selectable,
          showIcon = _this$props8.showIcon,
          icon = _this$props8.icon,
          switcherIcon = _this$props8.switcherIcon,
          draggable = _this$props8.draggable,
          checkable = _this$props8.checkable,
          checkStrictly = _this$props8.checkStrictly,
          disabled = _this$props8.disabled,
          motion = _this$props8.motion,
          loadData = _this$props8.loadData,
          filterTreeNode = _this$props8.filterTreeNode,
          height = _this$props8.height,
          itemHeight = _this$props8.itemHeight,
          virtual = _this$props8.virtual,
          titleRender = _this$props8.titleRender,
          dropIndicatorRender = _this$props8.dropIndicatorRender,
          onContextMenu = _this$props8.onContextMenu,
          onScroll = _this$props8.onScroll,
          direction = _this$props8.direction;
      var domProps = pickAttrs(this.props, {
        aria: true,
        data: true
      }); // It's better move to hooks but we just simply keep here

      var draggableConfig;

      if (draggable) {
        if ((0,esm_typeof/* default */.Z)(draggable) === 'object') {
          draggableConfig = draggable;
        } else if (typeof draggable === 'function') {
          draggableConfig = {
            nodeDraggable: draggable
          };
        } else {
          draggableConfig = {};
        }
      }

      return /*#__PURE__*/react.createElement(TreeContext.Provider, {
        value: {
          prefixCls: prefixCls,
          selectable: selectable,
          showIcon: showIcon,
          icon: icon,
          switcherIcon: switcherIcon,
          draggable: draggableConfig,
          draggingNodeKey: draggingNodeKey,
          checkable: checkable,
          checkStrictly: checkStrictly,
          disabled: disabled,
          keyEntities: keyEntities,
          dropLevelOffset: dropLevelOffset,
          dropContainerKey: dropContainerKey,
          dropTargetKey: dropTargetKey,
          dropPosition: dropPosition,
          dragOverNodeKey: dragOverNodeKey,
          indent: indent,
          direction: direction,
          dropIndicatorRender: dropIndicatorRender,
          loadData: loadData,
          filterTreeNode: filterTreeNode,
          titleRender: titleRender,
          onNodeClick: this.onNodeClick,
          onNodeDoubleClick: this.onNodeDoubleClick,
          onNodeExpand: this.onNodeExpand,
          onNodeSelect: this.onNodeSelect,
          onNodeCheck: this.onNodeCheck,
          onNodeLoad: this.onNodeLoad,
          onNodeMouseEnter: this.onNodeMouseEnter,
          onNodeMouseLeave: this.onNodeMouseLeave,
          onNodeContextMenu: this.onNodeContextMenu,
          onNodeDragStart: this.onNodeDragStart,
          onNodeDragEnter: this.onNodeDragEnter,
          onNodeDragOver: this.onNodeDragOver,
          onNodeDragLeave: this.onNodeDragLeave,
          onNodeDragEnd: this.onNodeDragEnd,
          onNodeDrop: this.onNodeDrop
        }
      }, /*#__PURE__*/react.createElement("div", {
        role: "tree",
        className: classnames_default()(prefixCls, className, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-show-line"), showLine), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-focused"), focused), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-active-focused"), activeKey !== null), _classNames))
      }, /*#__PURE__*/react.createElement(es_NodeList, (0,esm_extends/* default */.Z)({
        ref: this.listRef,
        prefixCls: prefixCls,
        style: style,
        data: flattenNodes,
        disabled: disabled,
        selectable: selectable,
        checkable: !!checkable,
        motion: motion,
        dragging: draggingNodeKey !== null,
        height: height,
        itemHeight: itemHeight,
        virtual: virtual,
        focusable: focusable,
        focused: focused,
        tabIndex: tabIndex,
        activeItem: this.getActiveItem(),
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onKeyDown: this.onKeyDown,
        onActiveChange: this.onActiveChange,
        onListChangeStart: this.onListChangeStart,
        onListChangeEnd: this.onListChangeEnd,
        onContextMenu: onContextMenu,
        onScroll: onScroll
      }, this.getTreeNodeRequiredProps(), domProps))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, prevState) {
      var prevProps = prevState.prevProps;
      var newState = {
        prevProps: props
      };

      function needSync(name) {
        return !prevProps && name in props || prevProps && prevProps[name] !== props[name];
      } // ================== Tree Node ==================


      var treeData; // fieldNames

      var fieldNames = prevState.fieldNames;

      if (needSync('fieldNames')) {
        fieldNames = treeUtil_fillFieldNames(props.fieldNames);
        newState.fieldNames = fieldNames;
      } // Check if `treeData` or `children` changed and save into the state.


      if (needSync('treeData')) {
        treeData = props.treeData;
      } else if (needSync('children')) {
        (0,es_warning/* default */.ZP)(false, '`children` of Tree is deprecated. Please use `treeData` instead.');
        treeData = convertTreeToData(props.children);
      } // Save flatten nodes info and convert `treeData` into keyEntities


      if (treeData) {
        newState.treeData = treeData;
        var entitiesMap = convertDataToEntities(treeData, {
          fieldNames: fieldNames
        });
        newState.keyEntities = (0,objectSpread2/* default */.Z)((0,defineProperty/* default */.Z)({}, MOTION_KEY, MotionEntity), entitiesMap.keyEntities); // Warning if treeNode not provide key

        if (false) {}
      }

      var keyEntities = newState.keyEntities || prevState.keyEntities; // ================ expandedKeys =================

      if (needSync('expandedKeys') || prevProps && needSync('autoExpandParent')) {
        newState.expandedKeys = props.autoExpandParent || !prevProps && props.defaultExpandParent ? conductExpandParent(props.expandedKeys, keyEntities) : props.expandedKeys;
      } else if (!prevProps && props.defaultExpandAll) {
        var cloneKeyEntities = (0,objectSpread2/* default */.Z)({}, keyEntities);

        delete cloneKeyEntities[MOTION_KEY];
        newState.expandedKeys = Object.keys(cloneKeyEntities).map(function (key) {
          return cloneKeyEntities[key].key;
        });
      } else if (!prevProps && props.defaultExpandedKeys) {
        newState.expandedKeys = props.autoExpandParent || props.defaultExpandParent ? conductExpandParent(props.defaultExpandedKeys, keyEntities) : props.defaultExpandedKeys;
      }

      if (!newState.expandedKeys) {
        delete newState.expandedKeys;
      } // ================ flattenNodes =================


      if (treeData || newState.expandedKeys) {
        var flattenNodes = flattenTreeData(treeData || prevState.treeData, newState.expandedKeys || prevState.expandedKeys, fieldNames);
        newState.flattenNodes = flattenNodes;
      } // ================ selectedKeys =================


      if (props.selectable) {
        if (needSync('selectedKeys')) {
          newState.selectedKeys = calcSelectedKeys(props.selectedKeys, props);
        } else if (!prevProps && props.defaultSelectedKeys) {
          newState.selectedKeys = calcSelectedKeys(props.defaultSelectedKeys, props);
        }
      } // ================= checkedKeys =================


      if (props.checkable) {
        var checkedKeyEntity;

        if (needSync('checkedKeys')) {
          checkedKeyEntity = parseCheckedKeys(props.checkedKeys) || {};
        } else if (!prevProps && props.defaultCheckedKeys) {
          checkedKeyEntity = parseCheckedKeys(props.defaultCheckedKeys) || {};
        } else if (treeData) {
          // If `treeData` changed, we also need check it
          checkedKeyEntity = parseCheckedKeys(props.checkedKeys) || {
            checkedKeys: prevState.checkedKeys,
            halfCheckedKeys: prevState.halfCheckedKeys
          };
        }

        if (checkedKeyEntity) {
          var _checkedKeyEntity = checkedKeyEntity,
              _checkedKeyEntity$che = _checkedKeyEntity.checkedKeys,
              checkedKeys = _checkedKeyEntity$che === void 0 ? [] : _checkedKeyEntity$che,
              _checkedKeyEntity$hal = _checkedKeyEntity.halfCheckedKeys,
              halfCheckedKeys = _checkedKeyEntity$hal === void 0 ? [] : _checkedKeyEntity$hal;

          if (!props.checkStrictly) {
            var conductKeys = conductCheck(checkedKeys, true, keyEntities);
            checkedKeys = conductKeys.checkedKeys;
            halfCheckedKeys = conductKeys.halfCheckedKeys;
          }

          newState.checkedKeys = checkedKeys;
          newState.halfCheckedKeys = halfCheckedKeys;
        }
      } // ================= loadedKeys ==================


      if (needSync('loadedKeys')) {
        newState.loadedKeys = props.loadedKeys;
      }

      return newState;
    }
  }]);

  return Tree;
}(react.Component);

Tree.defaultProps = {
  prefixCls: 'rc-tree',
  showLine: false,
  showIcon: true,
  selectable: true,
  multiple: false,
  checkable: false,
  disabled: false,
  checkStrictly: false,
  draggable: false,
  defaultExpandParent: true,
  autoExpandParent: false,
  defaultExpandAll: false,
  defaultExpandedKeys: [],
  defaultCheckedKeys: [],
  defaultSelectedKeys: [],
  dropIndicatorRender: DropIndicator,
  allowDrop: function allowDrop() {
    return true;
  }
};
Tree.TreeNode = es_TreeNode;
/* harmony default export */ var es_Tree = (Tree);
;// CONCATENATED MODULE: ./node_modules/rc-tree/es/index.js



/* harmony default export */ var rc_tree_es = (es_Tree);
// EXTERNAL MODULE: ./node_modules/lodash/debounce.js
var debounce = __webpack_require__(3279);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/FileOutlined.js
// This icon file is generated automatically.
var FileOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z" } }] }, "name": "file", "theme": "outlined" };
/* harmony default export */ var asn_FileOutlined = (FileOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/FileOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var FileOutlined_FileOutlined = function FileOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_FileOutlined
  }));
};

FileOutlined_FileOutlined.displayName = 'FileOutlined';
/* harmony default export */ var icons_FileOutlined = (/*#__PURE__*/react.forwardRef(FileOutlined_FileOutlined));
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/FolderOpenOutlined.js
// This icon file is generated automatically.
var FolderOpenOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 00-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z" } }] }, "name": "folder-open", "theme": "outlined" };
/* harmony default export */ var asn_FolderOpenOutlined = (FolderOpenOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/FolderOpenOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var FolderOpenOutlined_FolderOpenOutlined = function FolderOpenOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_FolderOpenOutlined
  }));
};

FolderOpenOutlined_FolderOpenOutlined.displayName = 'FolderOpenOutlined';
/* harmony default export */ var icons_FolderOpenOutlined = (/*#__PURE__*/react.forwardRef(FolderOpenOutlined_FolderOpenOutlined));
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/FolderOutlined.js
// This icon file is generated automatically.
var FolderOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z" } }] }, "name": "folder", "theme": "outlined" };
/* harmony default export */ var asn_FolderOutlined = (FolderOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/FolderOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var FolderOutlined_FolderOutlined = function FolderOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_FolderOutlined
  }));
};

FolderOutlined_FolderOutlined.displayName = 'FolderOutlined';
/* harmony default export */ var icons_FolderOutlined = (/*#__PURE__*/react.forwardRef(FolderOutlined_FolderOutlined));
;// CONCATENATED MODULE: ./node_modules/antd/es/tree/utils/dictUtil.js

var Record;

(function (Record) {
  Record[Record["None"] = 0] = "None";
  Record[Record["Start"] = 1] = "Start";
  Record[Record["End"] = 2] = "End";
})(Record || (Record = {}));

function traverseNodesKey(treeData, callback) {
  function processNode(dataNode) {
    var key = dataNode.key,
        children = dataNode.children;

    if (callback(key, dataNode) !== false) {
      traverseNodesKey(children || [], callback);
    }
  }

  treeData.forEach(processNode);
}
/** 计算选中范围，只考虑expanded情况以优化性能 */


function calcRangeKeys(_ref) {
  var treeData = _ref.treeData,
      expandedKeys = _ref.expandedKeys,
      startKey = _ref.startKey,
      endKey = _ref.endKey;
  var keys = [];
  var record = Record.None;

  if (startKey && startKey === endKey) {
    return [startKey];
  }

  if (!startKey || !endKey) {
    return [];
  }

  function matchKey(key) {
    return key === startKey || key === endKey;
  }

  traverseNodesKey(treeData, function (key) {
    if (record === Record.End) {
      return false;
    }

    if (matchKey(key)) {
      // Match test
      keys.push(key);

      if (record === Record.None) {
        record = Record.Start;
      } else if (record === Record.Start) {
        record = Record.End;
        return false;
      }
    } else if (record === Record.Start) {
      // Append selection
      keys.push(key);
    }

    if (expandedKeys.indexOf(key) === -1) {
      return false;
    }

    return true;
  });
  return keys;
}
function convertDirectoryKeysToNodes(treeData, keys) {
  var restKeys = (0,toConsumableArray/* default */.Z)(keys);

  var nodes = [];
  traverseNodesKey(treeData, function (key, node) {
    var index = restKeys.indexOf(key);

    if (index !== -1) {
      nodes.push(node);
      restKeys.splice(index, 1);
    }

    return !!restKeys.length;
  });
  return nodes;
}
;// CONCATENATED MODULE: ./node_modules/antd/es/tree/DirectoryTree.js





var DirectoryTree_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};













function getIcon(props) {
  var isLeaf = props.isLeaf,
      expanded = props.expanded;

  if (isLeaf) {
    return /*#__PURE__*/react.createElement(icons_FileOutlined, null);
  }

  return expanded ? /*#__PURE__*/react.createElement(icons_FolderOpenOutlined, null) : /*#__PURE__*/react.createElement(icons_FolderOutlined, null);
}

function getTreeData(_ref) {
  var treeData = _ref.treeData,
      children = _ref.children;
  return treeData || convertTreeToData(children);
}

var DirectoryTree = function DirectoryTree(_a, ref) {
  var defaultExpandAll = _a.defaultExpandAll,
      defaultExpandParent = _a.defaultExpandParent,
      defaultExpandedKeys = _a.defaultExpandedKeys,
      props = DirectoryTree_rest(_a, ["defaultExpandAll", "defaultExpandParent", "defaultExpandedKeys"]); // Shift click usage


  var lastSelectedKey = react.useRef();
  var cachedSelectedKeys = react.useRef();
  var treeRef = /*#__PURE__*/react.createRef();
  react.useImperativeHandle(ref, function () {
    return treeRef.current;
  });

  var getInitExpandedKeys = function getInitExpandedKeys() {
    var _convertDataToEntitie = convertDataToEntities(getTreeData(props)),
        keyEntities = _convertDataToEntitie.keyEntities;

    var initExpandedKeys; // Expanded keys

    if (defaultExpandAll) {
      initExpandedKeys = Object.keys(keyEntities);
    } else if (defaultExpandParent) {
      initExpandedKeys = conductExpandParent(props.expandedKeys || defaultExpandedKeys || [], keyEntities);
    } else {
      initExpandedKeys = props.expandedKeys || defaultExpandedKeys;
    }

    return initExpandedKeys;
  };

  var _React$useState = react.useState(props.selectedKeys || props.defaultSelectedKeys || []),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      selectedKeys = _React$useState2[0],
      setSelectedKeys = _React$useState2[1];

  var _React$useState3 = react.useState(getInitExpandedKeys()),
      _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
      expandedKeys = _React$useState4[0],
      setExpandedKeys = _React$useState4[1];

  react.useEffect(function () {
    if ('selectedKeys' in props) {
      setSelectedKeys(props.selectedKeys);
    }
  }, [props.selectedKeys]);
  react.useEffect(function () {
    if ('expandedKeys' in props) {
      setExpandedKeys(props.expandedKeys);
    }
  }, [props.expandedKeys]);

  var expandFolderNode = function expandFolderNode(event, node) {
    var isLeaf = node.isLeaf;

    if (isLeaf || event.shiftKey || event.metaKey || event.ctrlKey) {
      return;
    } // Call internal rc-tree expand function
    // https://github.com/ant-design/ant-design/issues/12567


    treeRef.current.onNodeExpand(event, node);
  };

  var onDebounceExpand = debounce_default()(expandFolderNode, 200, {
    leading: true
  });

  var onExpand = function onExpand(keys, info) {
    var _a;

    if (!('expandedKeys' in props)) {
      setExpandedKeys(keys);
    } // Call origin function


    return (_a = props.onExpand) === null || _a === void 0 ? void 0 : _a.call(props, keys, info);
  };

  var onClick = function onClick(event, node) {
    var _a;

    var expandAction = props.expandAction; // Expand the tree

    if (expandAction === 'click') {
      onDebounceExpand(event, node);
    }

    (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, event, node);
  };

  var onDoubleClick = function onDoubleClick(event, node) {
    var _a;

    var expandAction = props.expandAction; // Expand the tree

    if (expandAction === 'doubleClick') {
      onDebounceExpand(event, node);
    }

    (_a = props.onDoubleClick) === null || _a === void 0 ? void 0 : _a.call(props, event, node);
  };

  var onSelect = function onSelect(keys, event) {
    var _a;

    var multiple = props.multiple;
    var node = event.node,
        nativeEvent = event.nativeEvent;
    var _node$key = node.key,
        key = _node$key === void 0 ? '' : _node$key;
    var treeData = getTreeData(props); // const newState: DirectoryTreeState = {};
    // We need wrap this event since some value is not same

    var newEvent = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, event), {
      selected: true
    }); // Windows / Mac single pick


    var ctrlPick = (nativeEvent === null || nativeEvent === void 0 ? void 0 : nativeEvent.ctrlKey) || (nativeEvent === null || nativeEvent === void 0 ? void 0 : nativeEvent.metaKey);
    var shiftPick = nativeEvent === null || nativeEvent === void 0 ? void 0 : nativeEvent.shiftKey; // Generate new selected keys

    var newSelectedKeys;

    if (multiple && ctrlPick) {
      // Control click
      newSelectedKeys = keys;
      lastSelectedKey.current = key;
      cachedSelectedKeys.current = newSelectedKeys;
      newEvent.selectedNodes = convertDirectoryKeysToNodes(treeData, newSelectedKeys);
    } else if (multiple && shiftPick) {
      // Shift click
      newSelectedKeys = Array.from(new Set([].concat((0,toConsumableArray/* default */.Z)(cachedSelectedKeys.current || []), (0,toConsumableArray/* default */.Z)(calcRangeKeys({
        treeData: treeData,
        expandedKeys: expandedKeys,
        startKey: key,
        endKey: lastSelectedKey.current
      })))));
      newEvent.selectedNodes = convertDirectoryKeysToNodes(treeData, newSelectedKeys);
    } else {
      // Single click
      newSelectedKeys = [key];
      lastSelectedKey.current = key;
      cachedSelectedKeys.current = newSelectedKeys;
      newEvent.selectedNodes = convertDirectoryKeysToNodes(treeData, newSelectedKeys);
    }

    (_a = props.onSelect) === null || _a === void 0 ? void 0 : _a.call(props, newSelectedKeys, newEvent);

    if (!('selectedKeys' in props)) {
      setSelectedKeys(newSelectedKeys);
    }
  };

  var _React$useContext = react.useContext(config_provider_context/* ConfigContext */.E_),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var customizePrefixCls = props.prefixCls,
      className = props.className,
      otherProps = DirectoryTree_rest(props, ["prefixCls", "className"]);

  var prefixCls = getPrefixCls('tree', customizePrefixCls);
  var connectClassName = classnames_default()("".concat(prefixCls, "-directory"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-directory-rtl"), direction === 'rtl'), className);
  return /*#__PURE__*/react.createElement(tree_Tree, (0,esm_extends/* default */.Z)({
    icon: getIcon,
    ref: treeRef,
    blockNode: true
  }, otherProps, {
    prefixCls: prefixCls,
    className: connectClassName,
    expandedKeys: expandedKeys,
    selectedKeys: selectedKeys,
    onSelect: onSelect,
    onClick: onClick,
    onDoubleClick: onDoubleClick,
    onExpand: onExpand
  }));
};

var ForwardDirectoryTree = /*#__PURE__*/react.forwardRef(DirectoryTree);
ForwardDirectoryTree.displayName = 'DirectoryTree';
ForwardDirectoryTree.defaultProps = {
  showIcon: true,
  expandAction: 'click'
};
/* harmony default export */ var tree_DirectoryTree = (ForwardDirectoryTree);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/MinusSquareOutlined.js
// This icon file is generated automatically.
var MinusSquareOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z" } }, { "tag": "path", "attrs": { "d": "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z" } }] }, "name": "minus-square", "theme": "outlined" };
/* harmony default export */ var asn_MinusSquareOutlined = (MinusSquareOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/MinusSquareOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var MinusSquareOutlined_MinusSquareOutlined = function MinusSquareOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_MinusSquareOutlined
  }));
};

MinusSquareOutlined_MinusSquareOutlined.displayName = 'MinusSquareOutlined';
/* harmony default export */ var icons_MinusSquareOutlined = (/*#__PURE__*/react.forwardRef(MinusSquareOutlined_MinusSquareOutlined));
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/PlusSquareOutlined.js
// This icon file is generated automatically.
var PlusSquareOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z" } }, { "tag": "path", "attrs": { "d": "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z" } }] }, "name": "plus-square", "theme": "outlined" };
/* harmony default export */ var asn_PlusSquareOutlined = (PlusSquareOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/PlusSquareOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var PlusSquareOutlined_PlusSquareOutlined = function PlusSquareOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_PlusSquareOutlined
  }));
};

PlusSquareOutlined_PlusSquareOutlined.displayName = 'PlusSquareOutlined';
/* harmony default export */ var icons_PlusSquareOutlined = (/*#__PURE__*/react.forwardRef(PlusSquareOutlined_PlusSquareOutlined));
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/CaretDownFilled.js
// This icon file is generated automatically.
var CaretDownFilled = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" } }] }, "name": "caret-down", "theme": "filled" };
/* harmony default export */ var asn_CaretDownFilled = (CaretDownFilled);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/CaretDownFilled.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var CaretDownFilled_CaretDownFilled = function CaretDownFilled(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_CaretDownFilled
  }));
};

CaretDownFilled_CaretDownFilled.displayName = 'CaretDownFilled';
/* harmony default export */ var icons_CaretDownFilled = (/*#__PURE__*/react.forwardRef(CaretDownFilled_CaretDownFilled));
// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(6159);
;// CONCATENATED MODULE: ./node_modules/antd/es/tree/utils/iconUtil.js









function renderSwitcherIcon(prefixCls, switcherIcon, showLine, _ref) {
  var isLeaf = _ref.isLeaf,
      expanded = _ref.expanded,
      loading = _ref.loading;

  if (loading) {
    return /*#__PURE__*/react.createElement(LoadingOutlined/* default */.Z, {
      className: "".concat(prefixCls, "-switcher-loading-icon")
    });
  }

  var showLeafIcon;

  if (showLine && (0,esm_typeof/* default */.Z)(showLine) === 'object') {
    showLeafIcon = showLine.showLeafIcon;
  }

  if (isLeaf) {
    if (showLine) {
      if ((0,esm_typeof/* default */.Z)(showLine) === 'object' && !showLeafIcon) {
        return /*#__PURE__*/react.createElement("span", {
          className: "".concat(prefixCls, "-switcher-leaf-line")
        });
      }

      return /*#__PURE__*/react.createElement(icons_FileOutlined, {
        className: "".concat(prefixCls, "-switcher-line-icon")
      });
    }

    return null;
  }

  var switcherCls = "".concat(prefixCls, "-switcher-icon");

  if ((0,reactNode/* isValidElement */.l$)(switcherIcon)) {
    return (0,reactNode/* cloneElement */.Tm)(switcherIcon, {
      className: classnames_default()(switcherIcon.props.className || '', switcherCls)
    });
  }

  if (switcherIcon) {
    return switcherIcon;
  }

  if (showLine) {
    return expanded ? /*#__PURE__*/react.createElement(icons_MinusSquareOutlined, {
      className: "".concat(prefixCls, "-switcher-line-icon")
    }) : /*#__PURE__*/react.createElement(icons_PlusSquareOutlined, {
      className: "".concat(prefixCls, "-switcher-line-icon")
    });
  }

  return /*#__PURE__*/react.createElement(icons_CaretDownFilled, {
    className: switcherCls
  });
}
;// CONCATENATED MODULE: ./node_modules/antd/es/tree/utils/dropIndicator.js


var offset = 4;
function dropIndicatorRender(props) {
  var _style;

  var dropPosition = props.dropPosition,
      dropLevelOffset = props.dropLevelOffset,
      prefixCls = props.prefixCls,
      indent = props.indent,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'ltr' : _props$direction;
  var startPosition = direction === 'ltr' ? 'left' : 'right';
  var endPosition = direction === 'ltr' ? 'right' : 'left';
  var style = (_style = {}, (0,defineProperty/* default */.Z)(_style, startPosition, -dropLevelOffset * indent + offset), (0,defineProperty/* default */.Z)(_style, endPosition, 0), _style);

  switch (dropPosition) {
    case -1:
      style.top = -3;
      break;

    case 1:
      style.bottom = -3;
      break;

    default:
      // dropPosition === 0
      style.bottom = -3;
      style[startPosition] = indent + offset;
      break;
  }

  return /*#__PURE__*/react.createElement("div", {
    style: style,
    className: "".concat(prefixCls, "-drop-indicator")
  });
}
;// CONCATENATED MODULE: ./node_modules/antd/es/tree/Tree.js












var Tree_Tree = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _classNames;

  var _React$useContext = react.useContext(config_provider_context/* ConfigContext */.E_),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction,
      virtual = _React$useContext.virtual;

  var customizePrefixCls = props.prefixCls,
      className = props.className,
      showIcon = props.showIcon,
      showLine = props.showLine,
      _switcherIcon = props.switcherIcon,
      blockNode = props.blockNode,
      children = props.children,
      checkable = props.checkable,
      selectable = props.selectable,
      draggable = props.draggable;
  var prefixCls = getPrefixCls('tree', customizePrefixCls);

  var newProps = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, props), {
    showLine: Boolean(showLine),
    dropIndicatorRender: dropIndicatorRender
  });

  var draggableConfig = react.useMemo(function () {
    if (!draggable) {
      return false;
    }

    var mergedDraggable = {};

    switch ((0,esm_typeof/* default */.Z)(draggable)) {
      case 'function':
        mergedDraggable.nodeDraggable = draggable;
        break;

      case 'object':
        mergedDraggable = (0,esm_extends/* default */.Z)({}, draggable);
        break;

      default: // Do nothing

    }

    if (mergedDraggable.icon !== false) {
      mergedDraggable.icon = mergedDraggable.icon || /*#__PURE__*/react.createElement(icons_HolderOutlined, null);
    }

    return mergedDraggable;
  }, [draggable]);
  return /*#__PURE__*/react.createElement(rc_tree_es, (0,esm_extends/* default */.Z)({
    itemHeight: 20,
    ref: ref,
    virtual: virtual
  }, newProps, {
    prefixCls: prefixCls,
    className: classnames_default()((_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-icon-hide"), !showIcon), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-block-node"), blockNode), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-unselectable"), !selectable), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className),
    direction: direction,
    checkable: checkable ? /*#__PURE__*/react.createElement("span", {
      className: "".concat(prefixCls, "-checkbox-inner")
    }) : checkable,
    selectable: selectable,
    switcherIcon: function switcherIcon(nodeProps) {
      return renderSwitcherIcon(prefixCls, _switcherIcon, showLine, nodeProps);
    },
    draggable: draggableConfig
  }), children);
});
Tree_Tree.TreeNode = es_TreeNode;
Tree_Tree.DirectoryTree = tree_DirectoryTree;
Tree_Tree.defaultProps = {
  checkable: false,
  selectable: true,
  showIcon: false,
  motion: (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, motion/* default */.Z), {
    motionAppear: false
  }),
  blockNode: false
};
/* harmony default export */ var tree_Tree = (Tree_Tree);
;// CONCATENATED MODULE: ./node_modules/antd/es/tree/index.js

/* harmony default export */ var tree = (tree_Tree);
// EXTERNAL MODULE: ./node_modules/antd/es/empty/index.js + 2 modules
var empty = __webpack_require__(4277);
;// CONCATENATED MODULE: ./node_modules/antd/es/table/hooks/useFilter/FilterWrapper.js


var FilterDropdownMenuWrapper = function FilterDropdownMenuWrapper(props) {
  return /*#__PURE__*/react.createElement("div", {
    className: props.className,
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, props.children);
};

/* harmony default export */ var FilterWrapper = (FilterDropdownMenuWrapper);
// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 12 modules
var input = __webpack_require__(924);
;// CONCATENATED MODULE: ./node_modules/antd/es/table/hooks/useFilter/FilterSearch.js




var FilterSearch = function FilterSearch(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      filterSearch = _ref.filterSearch,
      tablePrefixCls = _ref.tablePrefixCls,
      locale = _ref.locale;

  if (!filterSearch) {
    return null;
  }

  return /*#__PURE__*/react.createElement("div", {
    className: "".concat(tablePrefixCls, "-filter-dropdown-search")
  }, /*#__PURE__*/react.createElement(input/* default */.Z, {
    prefix: /*#__PURE__*/react.createElement(SearchOutlined/* default */.Z, null),
    placeholder: locale.filterSearchPlaceholder,
    onChange: onChange,
    value: value // for skip min-width of input
    ,
    htmlSize: 1,
    className: "".concat(tablePrefixCls, "-filter-dropdown-search-input")
  }));
};

/* harmony default export */ var useFilter_FilterSearch = (FilterSearch);
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/hooks/useForceUpdate.js


function useForceUpdate() {
  var _React$useReducer = react.useReducer(function (x) {
    return x + 1;
  }, 0),
      _React$useReducer2 = (0,slicedToArray/* default */.Z)(_React$useReducer, 2),
      forceUpdate = _React$useReducer2[1];

  return forceUpdate;
}
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/hooks/useSyncState.js


function useSyncState(initialValue) {
  var ref = react.useRef(initialValue);
  var forceUpdate = useForceUpdate();
  return [function () {
    return ref.current;
  }, function (newValue) {
    ref.current = newValue; // re-render

    forceUpdate();
  }];
}
;// CONCATENATED MODULE: ./node_modules/antd/es/table/hooks/useFilter/FilterDropdown.js



















function hasSubMenu(filters) {
  return filters.some(function (_ref) {
    var children = _ref.children;
    return children;
  });
}

function searchValueMatched(searchValue, text) {
  if (typeof text === 'string' || typeof text === 'number') {
    return text === null || text === void 0 ? void 0 : text.toString().toLowerCase().includes(searchValue.trim().toLowerCase());
  }

  return false;
}

function renderFilterItems(_ref2) {
  var filters = _ref2.filters,
      prefixCls = _ref2.prefixCls,
      filteredKeys = _ref2.filteredKeys,
      filterMultiple = _ref2.filterMultiple,
      searchValue = _ref2.searchValue;
  return filters.map(function (filter, index) {
    var key = String(filter.value);

    if (filter.children) {
      return /*#__PURE__*/react.createElement(es_menu/* default.SubMenu */.Z.SubMenu, {
        key: key || index,
        title: filter.text,
        popupClassName: "".concat(prefixCls, "-dropdown-submenu")
      }, renderFilterItems({
        filters: filter.children,
        prefixCls: prefixCls,
        filteredKeys: filteredKeys,
        filterMultiple: filterMultiple,
        searchValue: searchValue
      }));
    }

    var Component = filterMultiple ? es_checkbox/* default */.Z : es_radio;
    var item = /*#__PURE__*/react.createElement(es_menu/* default.Item */.Z.Item, {
      key: filter.value !== undefined ? key : index
    }, /*#__PURE__*/react.createElement(Component, {
      checked: filteredKeys.includes(key)
    }), /*#__PURE__*/react.createElement("span", null, filter.text));

    if (searchValue.trim()) {
      return searchValueMatched(searchValue, filter.text) ? item : undefined;
    }

    return item;
  });
}

function FilterDropdown(props) {
  var _a;

  var tablePrefixCls = props.tablePrefixCls,
      prefixCls = props.prefixCls,
      column = props.column,
      dropdownPrefixCls = props.dropdownPrefixCls,
      columnKey = props.columnKey,
      filterMultiple = props.filterMultiple,
      _props$filterMode = props.filterMode,
      filterMode = _props$filterMode === void 0 ? 'menu' : _props$filterMode,
      _props$filterSearch = props.filterSearch,
      filterSearch = _props$filterSearch === void 0 ? false : _props$filterSearch,
      filterState = props.filterState,
      triggerFilter = props.triggerFilter,
      locale = props.locale,
      children = props.children,
      getPopupContainer = props.getPopupContainer;
  var filterDropdownVisible = column.filterDropdownVisible,
      onFilterDropdownVisibleChange = column.onFilterDropdownVisibleChange;

  var _React$useState = react.useState(false),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      visible = _React$useState2[0],
      setVisible = _React$useState2[1];

  var filtered = !!(filterState && (((_a = filterState.filteredKeys) === null || _a === void 0 ? void 0 : _a.length) || filterState.forceFiltered));

  var triggerVisible = function triggerVisible(newVisible) {
    setVisible(newVisible);
    onFilterDropdownVisibleChange === null || onFilterDropdownVisibleChange === void 0 ? void 0 : onFilterDropdownVisibleChange(newVisible);
  };

  var mergedVisible = typeof filterDropdownVisible === 'boolean' ? filterDropdownVisible : visible; // ===================== Select Keys =====================

  var propFilteredKeys = filterState === null || filterState === void 0 ? void 0 : filterState.filteredKeys;

  var _useSyncState = useSyncState(propFilteredKeys || []),
      _useSyncState2 = (0,slicedToArray/* default */.Z)(_useSyncState, 2),
      getFilteredKeysSync = _useSyncState2[0],
      setFilteredKeysSync = _useSyncState2[1];

  var onSelectKeys = function onSelectKeys(_ref3) {
    var selectedKeys = _ref3.selectedKeys;
    setFilteredKeysSync(selectedKeys);
  };

  var onCheck = function onCheck(keys, _ref4) {
    var node = _ref4.node,
        checked = _ref4.checked;

    if (!filterMultiple) {
      onSelectKeys({
        selectedKeys: checked && node.key ? [node.key] : []
      });
    } else {
      onSelectKeys({
        selectedKeys: keys
      });
    }
  };

  react.useEffect(function () {
    if (!visible) {
      return;
    }

    onSelectKeys({
      selectedKeys: propFilteredKeys || []
    });
  }, [propFilteredKeys]); // ====================== Open Keys ======================

  var _React$useState3 = react.useState([]),
      _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
      openKeys = _React$useState4[0],
      setOpenKeys = _React$useState4[1];

  var openRef = react.useRef();

  var onOpenChange = function onOpenChange(keys) {
    openRef.current = window.setTimeout(function () {
      setOpenKeys(keys);
    });
  };

  var onMenuClick = function onMenuClick() {
    window.clearTimeout(openRef.current);
  };

  react.useEffect(function () {
    return function () {
      window.clearTimeout(openRef.current);
    };
  }, []); // search in tree mode column filter

  var _React$useState5 = react.useState(''),
      _React$useState6 = (0,slicedToArray/* default */.Z)(_React$useState5, 2),
      searchValue = _React$useState6[0],
      setSearchValue = _React$useState6[1];

  var onSearch = function onSearch(e) {
    var value = e.target.value;
    setSearchValue(value);
  }; // clear search value after close filter dropdown


  react.useEffect(function () {
    if (!visible) {
      setSearchValue('');
    }
  }, [visible]); // ======================= Submit ========================

  var internalTriggerFilter = function internalTriggerFilter(keys) {
    var mergedKeys = keys && keys.length ? keys : null;

    if (mergedKeys === null && (!filterState || !filterState.filteredKeys)) {
      return null;
    }

    if (isEqual_default()(mergedKeys, filterState === null || filterState === void 0 ? void 0 : filterState.filteredKeys)) {
      return null;
    }

    triggerFilter({
      column: column,
      key: columnKey,
      filteredKeys: mergedKeys
    });
  };

  var onConfirm = function onConfirm() {
    triggerVisible(false);
    internalTriggerFilter(getFilteredKeysSync());
  };

  var onReset = function onReset() {
    setSearchValue('');
    setFilteredKeysSync([]);
  };

  var doFilter = function doFilter() {
    var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      closeDropdown: true
    },
        closeDropdown = _ref5.closeDropdown;

    if (closeDropdown) {
      triggerVisible(false);
    }

    internalTriggerFilter(getFilteredKeysSync());
  };

  var onVisibleChange = function onVisibleChange(newVisible) {
    if (newVisible && propFilteredKeys !== undefined) {
      // Sync filteredKeys on appear in controlled mode (propFilteredKeys !== undefiend)
      setFilteredKeysSync(propFilteredKeys || []);
    }

    triggerVisible(newVisible); // Default will filter when closed

    if (!newVisible && !column.filterDropdown) {
      onConfirm();
    }
  }; // ======================== Style ========================


  var dropdownMenuClass = classnames_default()((0,defineProperty/* default */.Z)({}, "".concat(dropdownPrefixCls, "-menu-without-submenu"), !hasSubMenu(column.filters || [])));

  var onCheckAll = function onCheckAll(e) {
    if (e.target.checked) {
      var allFilterKeys = flattenKeys(column === null || column === void 0 ? void 0 : column.filters).map(function (key) {
        return String(key);
      });
      setFilteredKeysSync(allFilterKeys);
    } else {
      setFilteredKeysSync([]);
    }
  };

  var getTreeData = function getTreeData(_ref6) {
    var filters = _ref6.filters;
    return (filters || []).map(function (filter, index) {
      var key = String(filter.value);
      var item = {
        title: filter.text,
        key: filter.value !== undefined ? key : index
      };

      if (filter.children) {
        item.children = getTreeData({
          filters: filter.children
        });
      }

      return item;
    });
  };

  var dropdownContent;

  if (typeof column.filterDropdown === 'function') {
    dropdownContent = column.filterDropdown({
      prefixCls: "".concat(dropdownPrefixCls, "-custom"),
      setSelectedKeys: function setSelectedKeys(selectedKeys) {
        return onSelectKeys({
          selectedKeys: selectedKeys
        });
      },
      selectedKeys: getFilteredKeysSync(),
      confirm: doFilter,
      clearFilters: onReset,
      filters: column.filters,
      visible: mergedVisible
    });
  } else if (column.filterDropdown) {
    dropdownContent = column.filterDropdown;
  } else {
    var selectedKeys = getFilteredKeysSync() || [];

    var getFilterComponent = function getFilterComponent() {
      if ((column.filters || []).length === 0) {
        return /*#__PURE__*/react.createElement(empty/* default */.Z, {
          image: empty/* default.PRESENTED_IMAGE_SIMPLE */.Z.PRESENTED_IMAGE_SIMPLE,
          description: locale.filterEmptyText,
          imageStyle: {
            height: 24
          },
          style: {
            margin: 0,
            padding: '16px 0'
          }
        });
      }

      if (filterMode === 'tree') {
        return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(useFilter_FilterSearch, {
          filterSearch: filterSearch,
          value: searchValue,
          onChange: onSearch,
          tablePrefixCls: tablePrefixCls,
          locale: locale
        }), /*#__PURE__*/react.createElement("div", {
          className: "".concat(tablePrefixCls, "-filter-dropdown-tree")
        }, filterMultiple ? /*#__PURE__*/react.createElement(es_checkbox/* default */.Z, {
          className: "".concat(tablePrefixCls, "-filter-dropdown-checkall"),
          onChange: onCheckAll
        }, locale.filterCheckall) : null, /*#__PURE__*/react.createElement(tree, {
          checkable: true,
          selectable: false,
          blockNode: true,
          multiple: filterMultiple,
          checkStrictly: !filterMultiple,
          className: "".concat(dropdownPrefixCls, "-menu"),
          onCheck: onCheck,
          checkedKeys: selectedKeys,
          selectedKeys: selectedKeys,
          showIcon: false,
          treeData: getTreeData({
            filters: column.filters
          }),
          autoExpandParent: true,
          defaultExpandAll: true,
          filterTreeNode: searchValue.trim() ? function (node) {
            return searchValueMatched(searchValue, node.title);
          } : undefined
        })));
      }

      return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(useFilter_FilterSearch, {
        filterSearch: filterSearch,
        value: searchValue,
        onChange: onSearch,
        tablePrefixCls: tablePrefixCls,
        locale: locale
      }), /*#__PURE__*/react.createElement(es_menu/* default */.Z, {
        multiple: filterMultiple,
        prefixCls: "".concat(dropdownPrefixCls, "-menu"),
        className: dropdownMenuClass,
        onClick: onMenuClick,
        onSelect: onSelectKeys,
        onDeselect: onSelectKeys,
        selectedKeys: selectedKeys,
        getPopupContainer: getPopupContainer,
        openKeys: openKeys,
        onOpenChange: onOpenChange
      }, renderFilterItems({
        filters: column.filters || [],
        prefixCls: prefixCls,
        filteredKeys: getFilteredKeysSync(),
        filterMultiple: filterMultiple,
        searchValue: searchValue
      })));
    };

    dropdownContent = /*#__PURE__*/react.createElement(react.Fragment, null, getFilterComponent(), /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-dropdown-btns")
    }, /*#__PURE__*/react.createElement(es_button/* default */.Z, {
      type: "link",
      size: "small",
      disabled: selectedKeys.length === 0,
      onClick: onReset
    }, locale.filterReset), /*#__PURE__*/react.createElement(es_button/* default */.Z, {
      type: "primary",
      size: "small",
      onClick: onConfirm
    }, locale.filterConfirm)));
  }

  var menu = /*#__PURE__*/react.createElement(FilterWrapper, {
    className: "".concat(prefixCls, "-dropdown")
  }, dropdownContent);
  var filterIcon;

  if (typeof column.filterIcon === 'function') {
    filterIcon = column.filterIcon(filtered);
  } else if (column.filterIcon) {
    filterIcon = column.filterIcon;
  } else {
    filterIcon = /*#__PURE__*/react.createElement(icons_FilterFilled, null);
  }

  var _React$useContext = react.useContext(config_provider_context/* ConfigContext */.E_),
      direction = _React$useContext.direction;

  return /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-column")
  }, /*#__PURE__*/react.createElement("span", {
    className: "".concat(tablePrefixCls, "-column-title")
  }, children), /*#__PURE__*/react.createElement(dropdown/* default */.Z, {
    overlay: menu,
    trigger: ['click'],
    visible: mergedVisible,
    onVisibleChange: onVisibleChange,
    getPopupContainer: getPopupContainer,
    placement: direction === 'rtl' ? 'bottomLeft' : 'bottomRight'
  }, /*#__PURE__*/react.createElement("span", {
    role: "button",
    tabIndex: -1,
    className: classnames_default()("".concat(prefixCls, "-trigger"), {
      active: filtered
    }),
    onClick: function onClick(e) {
      e.stopPropagation();
    }
  }, filterIcon)));
}

/* harmony default export */ var useFilter_FilterDropdown = (FilterDropdown);
;// CONCATENATED MODULE: ./node_modules/antd/es/table/hooks/useFilter/index.js








function collectFilterStates(columns, init, pos) {
  var filterStates = [];
  (columns || []).forEach(function (column, index) {
    var _a;

    var columnPos = getColumnPos(index, pos);

    if (column.filters || 'filterDropdown' in column || 'onFilter' in column) {
      if ('filteredValue' in column) {
        // Controlled
        var filteredValues = column.filteredValue;

        if (!('filterDropdown' in column)) {
          filteredValues = (_a = filteredValues === null || filteredValues === void 0 ? void 0 : filteredValues.map(String)) !== null && _a !== void 0 ? _a : filteredValues;
        }

        filterStates.push({
          column: column,
          key: getColumnKey(column, columnPos),
          filteredKeys: filteredValues,
          forceFiltered: column.filtered
        });
      } else {
        // Uncontrolled
        filterStates.push({
          column: column,
          key: getColumnKey(column, columnPos),
          filteredKeys: init && column.defaultFilteredValue ? column.defaultFilteredValue : undefined,
          forceFiltered: column.filtered
        });
      }
    }

    if ('children' in column) {
      filterStates = [].concat((0,toConsumableArray/* default */.Z)(filterStates), (0,toConsumableArray/* default */.Z)(collectFilterStates(column.children, init, columnPos)));
    }
  });
  return filterStates;
}

function injectFilter(prefixCls, dropdownPrefixCls, columns, filterStates, triggerFilter, getPopupContainer, locale, pos) {
  return columns.map(function (column, index) {
    var columnPos = getColumnPos(index, pos);
    var _column$filterMultipl = column.filterMultiple,
        filterMultiple = _column$filterMultipl === void 0 ? true : _column$filterMultipl,
        filterMode = column.filterMode,
        filterSearch = column.filterSearch;
    var newColumn = column;

    if (newColumn.filters || newColumn.filterDropdown) {
      var columnKey = getColumnKey(newColumn, columnPos);
      var filterState = filterStates.find(function (_ref) {
        var key = _ref.key;
        return columnKey === key;
      });
      newColumn = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, newColumn), {
        title: function title(renderProps) {
          return /*#__PURE__*/react.createElement(useFilter_FilterDropdown, {
            tablePrefixCls: prefixCls,
            prefixCls: "".concat(prefixCls, "-filter"),
            dropdownPrefixCls: dropdownPrefixCls,
            column: newColumn,
            columnKey: columnKey,
            filterState: filterState,
            filterMultiple: filterMultiple,
            filterMode: filterMode,
            filterSearch: filterSearch,
            triggerFilter: triggerFilter,
            locale: locale,
            getPopupContainer: getPopupContainer
          }, renderColumnTitle(column.title, renderProps));
        }
      });
    }

    if ('children' in newColumn) {
      newColumn = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, newColumn), {
        children: injectFilter(prefixCls, dropdownPrefixCls, newColumn.children, filterStates, triggerFilter, getPopupContainer, locale, columnPos)
      });
    }

    return newColumn;
  });
}

function flattenKeys(filters) {
  var keys = [];
  (filters || []).forEach(function (_ref2) {
    var value = _ref2.value,
        children = _ref2.children;
    keys.push(value);

    if (children) {
      keys = [].concat((0,toConsumableArray/* default */.Z)(keys), (0,toConsumableArray/* default */.Z)(flattenKeys(children)));
    }
  });
  return keys;
}

function generateFilterInfo(filterStates) {
  var currentFilters = {};
  filterStates.forEach(function (_ref3) {
    var key = _ref3.key,
        filteredKeys = _ref3.filteredKeys,
        column = _ref3.column;
    var filters = column.filters,
        filterDropdown = column.filterDropdown;

    if (filterDropdown) {
      currentFilters[key] = filteredKeys || null;
    } else if (Array.isArray(filteredKeys)) {
      var keys = flattenKeys(filters);
      currentFilters[key] = keys.filter(function (originKey) {
        return filteredKeys.includes(String(originKey));
      });
    } else {
      currentFilters[key] = null;
    }
  });
  return currentFilters;
}

function getFilterData(data, filterStates) {
  return filterStates.reduce(function (currentData, filterState) {
    var _filterState$column = filterState.column,
        onFilter = _filterState$column.onFilter,
        filters = _filterState$column.filters,
        filteredKeys = filterState.filteredKeys;

    if (onFilter && filteredKeys && filteredKeys.length) {
      return currentData.filter(function (record) {
        return filteredKeys.some(function (key) {
          var keys = flattenKeys(filters);
          var keyIndex = keys.findIndex(function (k) {
            return String(k) === String(key);
          });
          var realKey = keyIndex !== -1 ? keys[keyIndex] : key;
          return onFilter(realKey, record);
        });
      });
    }

    return currentData;
  }, data);
}

function useFilter(_ref4) {
  var prefixCls = _ref4.prefixCls,
      dropdownPrefixCls = _ref4.dropdownPrefixCls,
      mergedColumns = _ref4.mergedColumns,
      onFilterChange = _ref4.onFilterChange,
      getPopupContainer = _ref4.getPopupContainer,
      tableLocale = _ref4.locale;

  var _React$useState = react.useState(collectFilterStates(mergedColumns, true)),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      filterStates = _React$useState2[0],
      setFilterStates = _React$useState2[1];

  var mergedFilterStates = react.useMemo(function () {
    var collectedStates = collectFilterStates(mergedColumns, false);
    var filteredKeysIsNotControlled = collectedStates.every(function (_ref5) {
      var filteredKeys = _ref5.filteredKeys;
      return filteredKeys === undefined;
    }); // Return if not controlled

    if (filteredKeysIsNotControlled) {
      return filterStates;
    }

    var filteredKeysIsAllControlled = collectedStates.every(function (_ref6) {
      var filteredKeys = _ref6.filteredKeys;
      return filteredKeys !== undefined;
    });
    (0,devWarning/* default */.Z)(filteredKeysIsNotControlled || filteredKeysIsAllControlled, 'Table', '`FilteredKeys` should all be controlled or not controlled.');
    return collectedStates;
  }, [mergedColumns, filterStates]);
  var getFilters = react.useCallback(function () {
    return generateFilterInfo(mergedFilterStates);
  }, [mergedFilterStates]);

  var triggerFilter = function triggerFilter(filterState) {
    var newFilterStates = mergedFilterStates.filter(function (_ref7) {
      var key = _ref7.key;
      return key !== filterState.key;
    });
    newFilterStates.push(filterState);
    setFilterStates(newFilterStates);
    onFilterChange(generateFilterInfo(newFilterStates), newFilterStates);
  };

  var transformColumns = function transformColumns(innerColumns) {
    return injectFilter(prefixCls, dropdownPrefixCls, innerColumns, mergedFilterStates, triggerFilter, getPopupContainer, tableLocale);
  };

  return [transformColumns, mergedFilterStates, getFilters];
}

/* harmony default export */ var hooks_useFilter = (useFilter);
;// CONCATENATED MODULE: ./node_modules/antd/es/table/hooks/useTitleColumns.js




function fillTitle(columns, columnTitleProps) {
  return columns.map(function (column) {
    var cloneColumn = (0,esm_extends/* default */.Z)({}, column);

    cloneColumn.title = renderColumnTitle(column.title, columnTitleProps);

    if ('children' in cloneColumn) {
      cloneColumn.children = fillTitle(cloneColumn.children, columnTitleProps);
    }

    return cloneColumn;
  });
}

function useTitleColumns(columnTitleProps) {
  var filledColumns = react.useCallback(function (columns) {
    return fillTitle(columns, columnTitleProps);
  }, [columnTitleProps]);
  return [filledColumns];
}
;// CONCATENATED MODULE: ./node_modules/antd/es/table/ExpandIcon.js




function ExpandIcon_renderExpandIcon(locale) {
  return function expandIcon(_ref) {
    var _classNames;

    var prefixCls = _ref.prefixCls,
        onExpand = _ref.onExpand,
        record = _ref.record,
        expanded = _ref.expanded,
        expandable = _ref.expandable;
    var iconPrefix = "".concat(prefixCls, "-row-expand-icon");
    return /*#__PURE__*/react.createElement("button", {
      type: "button",
      onClick: function onClick(e) {
        onExpand(record, e);
        e.stopPropagation();
      },
      className: classnames_default()(iconPrefix, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(iconPrefix, "-spaced"), !expandable), (0,defineProperty/* default */.Z)(_classNames, "".concat(iconPrefix, "-expanded"), expandable && expanded), (0,defineProperty/* default */.Z)(_classNames, "".concat(iconPrefix, "-collapsed"), expandable && !expanded), _classNames)),
      "aria-label": expanded ? locale.collapse : locale.expand
    });
  };
}

/* harmony default export */ var ExpandIcon = (ExpandIcon_renderExpandIcon);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/scrollTo.js + 1 modules
var scrollTo = __webpack_require__(6148);
// EXTERNAL MODULE: ./node_modules/antd/es/locale/default.js + 4 modules
var locale_default = __webpack_require__(5767);
;// CONCATENATED MODULE: ./node_modules/antd/es/locale/en_US.js

/* harmony default export */ var locale_en_US = (locale_default/* default */.Z);
;// CONCATENATED MODULE: ./node_modules/antd/es/table/Column.js
/* istanbul ignore next */

/** This is a syntactic sugar for `columns` prop. So HOC will not work on this. */
// eslint-disable-next-line no-unused-vars
function table_Column_Column(_) {
  return null;
}

/* harmony default export */ var table_Column = (table_Column_Column);
;// CONCATENATED MODULE: ./node_modules/antd/es/table/ColumnGroup.js
/* istanbul ignore next */

/** This is a syntactic sugar for `columns` prop. So HOC will not work on this. */
// eslint-disable-next-line no-unused-vars
function ColumnGroup_ColumnGroup(_) {
  return null;
}

/* harmony default export */ var table_ColumnGroup = (ColumnGroup_ColumnGroup);
;// CONCATENATED MODULE: ./node_modules/antd/es/table/Table.js



























var EMPTY_LIST = [];

function InternalTable(props, ref) {
  var _classNames3;

  var customizePrefixCls = props.prefixCls,
      className = props.className,
      style = props.style,
      customizeSize = props.size,
      bordered = props.bordered,
      customizeDropdownPrefixCls = props.dropdownPrefixCls,
      dataSource = props.dataSource,
      pagination = props.pagination,
      rowSelection = props.rowSelection,
      rowKey = props.rowKey,
      rowClassName = props.rowClassName,
      columns = props.columns,
      children = props.children,
      legacyChildrenColumnName = props.childrenColumnName,
      onChange = props.onChange,
      getPopupContainer = props.getPopupContainer,
      loading = props.loading,
      expandIcon = props.expandIcon,
      expandable = props.expandable,
      expandedRowRender = props.expandedRowRender,
      expandIconColumnIndex = props.expandIconColumnIndex,
      indentSize = props.indentSize,
      scroll = props.scroll,
      sortDirections = props.sortDirections,
      locale = props.locale,
      _props$showSorterTool = props.showSorterTooltip,
      showSorterTooltip = _props$showSorterTool === void 0 ? true : _props$showSorterTool;
  (0,devWarning/* default */.Z)(!(typeof rowKey === 'function' && rowKey.length > 1), 'Table', '`index` parameter of `rowKey` function is deprecated. There is no guarantee that it will work as expected.');
  var screens = (0,useBreakpoint/* default */.Z)();
  var mergedColumns = react.useMemo(function () {
    var matched = new Set(Object.keys(screens).filter(function (m) {
      return screens[m];
    }));
    return (columns || convertChildrenToColumns(children)).filter(function (c) {
      return !c.responsive || c.responsive.some(function (r) {
        return matched.has(r);
      });
    });
  }, [children, columns, screens]);
  var tableProps = (0,omit/* default */.Z)(props, ['className', 'style', 'columns']);
  var size = react.useContext(SizeContext/* default */.Z);

  var _React$useContext = react.useContext(config_provider_context/* ConfigContext */.E_),
      _React$useContext$loc = _React$useContext.locale,
      contextLocale = _React$useContext$loc === void 0 ? locale_en_US : _React$useContext$loc,
      renderEmpty = _React$useContext.renderEmpty,
      direction = _React$useContext.direction;

  var mergedSize = customizeSize || size;

  var tableLocale = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, contextLocale.Table), locale);

  var rawData = dataSource || EMPTY_LIST;

  var _React$useContext2 = react.useContext(config_provider_context/* ConfigContext */.E_),
      getPrefixCls = _React$useContext2.getPrefixCls;

  var prefixCls = getPrefixCls('table', customizePrefixCls);
  var dropdownPrefixCls = getPrefixCls('dropdown', customizeDropdownPrefixCls);

  var mergedExpandable = (0,esm_extends/* default */.Z)({
    childrenColumnName: legacyChildrenColumnName,
    expandIconColumnIndex: expandIconColumnIndex
  }, expandable);

  var _mergedExpandable$chi = mergedExpandable.childrenColumnName,
      childrenColumnName = _mergedExpandable$chi === void 0 ? 'children' : _mergedExpandable$chi;
  var expandType = react.useMemo(function () {
    if (rawData.some(function (item) {
      var _a;

      return (_a = item) === null || _a === void 0 ? void 0 : _a[childrenColumnName];
    })) {
      return 'nest';
    }

    if (expandedRowRender || expandable && expandable.expandedRowRender) {
      return 'row';
    }

    return null;
  }, [rawData]);
  var internalRefs = {
    body: react.useRef()
  }; // ============================ RowKey ============================

  var getRowKey = react.useMemo(function () {
    if (typeof rowKey === 'function') {
      return rowKey;
    }

    return function (record) {
      var _a;

      return (_a = record) === null || _a === void 0 ? void 0 : _a[rowKey];
    };
  }, [rowKey]);

  var _useLazyKVMap = useLazyKVMap(rawData, childrenColumnName, getRowKey),
      _useLazyKVMap2 = (0,slicedToArray/* default */.Z)(_useLazyKVMap, 1),
      getRecordByKey = _useLazyKVMap2[0]; // ============================ Events =============================


  var changeEventInfo = {};

  var triggerOnChange = function triggerOnChange(info, action) {
    var reset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var changeInfo = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, changeEventInfo), info);

    if (reset) {
      changeEventInfo.resetPagination(); // Reset event param

      if (changeInfo.pagination.current) {
        changeInfo.pagination.current = 1;
      } // Trigger pagination events


      if (pagination && pagination.onChange) {
        pagination.onChange(1, changeInfo.pagination.pageSize);
      }
    }

    if (scroll && scroll.scrollToFirstRowOnChange !== false && internalRefs.body.current) {
      (0,scrollTo/* default */.Z)(0, {
        getContainer: function getContainer() {
          return internalRefs.body.current;
        }
      });
    }

    onChange === null || onChange === void 0 ? void 0 : onChange(changeInfo.pagination, changeInfo.filters, changeInfo.sorter, {
      currentDataSource: getFilterData(getSortData(rawData, changeInfo.sorterStates, childrenColumnName), changeInfo.filterStates),
      action: action
    });
  };
  /**
   * Controlled state in `columns` is not a good idea that makes too many code (1000+ line?) to read
   * state out and then put it back to title render. Move these code into `hooks` but still too
   * complex. We should provides Table props like `sorter` & `filter` to handle control in next big version.
   */
  // ============================ Sorter =============================


  var onSorterChange = function onSorterChange(sorter, sorterStates) {
    triggerOnChange({
      sorter: sorter,
      sorterStates: sorterStates
    }, 'sort', false);
  };

  var _useSorter = useFilterSorter({
    prefixCls: prefixCls,
    mergedColumns: mergedColumns,
    onSorterChange: onSorterChange,
    sortDirections: sortDirections || ['ascend', 'descend'],
    tableLocale: tableLocale,
    showSorterTooltip: showSorterTooltip
  }),
      _useSorter2 = (0,slicedToArray/* default */.Z)(_useSorter, 4),
      transformSorterColumns = _useSorter2[0],
      sortStates = _useSorter2[1],
      sorterTitleProps = _useSorter2[2],
      getSorters = _useSorter2[3];

  var sortedData = react.useMemo(function () {
    return getSortData(rawData, sortStates, childrenColumnName);
  }, [rawData, sortStates]);
  changeEventInfo.sorter = getSorters();
  changeEventInfo.sorterStates = sortStates; // ============================ Filter ============================

  var onFilterChange = function onFilterChange(filters, filterStates) {
    triggerOnChange({
      filters: filters,
      filterStates: filterStates
    }, 'filter', true);
  };

  var _useFilter = hooks_useFilter({
    prefixCls: prefixCls,
    locale: tableLocale,
    dropdownPrefixCls: dropdownPrefixCls,
    mergedColumns: mergedColumns,
    onFilterChange: onFilterChange,
    getPopupContainer: getPopupContainer
  }),
      _useFilter2 = (0,slicedToArray/* default */.Z)(_useFilter, 3),
      transformFilterColumns = _useFilter2[0],
      filterStates = _useFilter2[1],
      getFilters = _useFilter2[2];

  var mergedData = getFilterData(sortedData, filterStates);
  changeEventInfo.filters = getFilters();
  changeEventInfo.filterStates = filterStates; // ============================ Column ============================

  var columnTitleProps = react.useMemo(function () {
    return (0,esm_extends/* default */.Z)({}, sorterTitleProps);
  }, [sorterTitleProps]);

  var _useTitleColumns = useTitleColumns(columnTitleProps),
      _useTitleColumns2 = (0,slicedToArray/* default */.Z)(_useTitleColumns, 1),
      transformTitleColumns = _useTitleColumns2[0]; // ========================== Pagination ==========================


  var onPaginationChange = function onPaginationChange(current, pageSize) {
    triggerOnChange({
      pagination: (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, changeEventInfo.pagination), {
        current: current,
        pageSize: pageSize
      })
    }, 'paginate');
  };

  var _usePagination = usePagination(mergedData.length, pagination, onPaginationChange),
      _usePagination2 = (0,slicedToArray/* default */.Z)(_usePagination, 2),
      mergedPagination = _usePagination2[0],
      resetPagination = _usePagination2[1];

  changeEventInfo.pagination = pagination === false ? {} : getPaginationParam(pagination, mergedPagination);
  changeEventInfo.resetPagination = resetPagination; // ============================= Data =============================

  var pageData = react.useMemo(function () {
    if (pagination === false || !mergedPagination.pageSize) {
      return mergedData;
    }

    var _mergedPagination$cur = mergedPagination.current,
        current = _mergedPagination$cur === void 0 ? 1 : _mergedPagination$cur,
        total = mergedPagination.total,
        _mergedPagination$pag = mergedPagination.pageSize,
        pageSize = _mergedPagination$pag === void 0 ? DEFAULT_PAGE_SIZE : _mergedPagination$pag;
    (0,devWarning/* default */.Z)(current > 0, 'Table', '`current` should be positive number.'); // Dynamic table data

    if (mergedData.length < total) {
      if (mergedData.length > pageSize) {
        (0,devWarning/* default */.Z)(false, 'Table', '`dataSource` length is less than `pagination.total` but large than `pagination.pageSize`. Please make sure your config correct data with async mode.');
        return mergedData.slice((current - 1) * pageSize, current * pageSize);
      }

      return mergedData;
    }

    return mergedData.slice((current - 1) * pageSize, current * pageSize);
  }, [!!pagination, mergedData, mergedPagination && mergedPagination.current, mergedPagination && mergedPagination.pageSize, mergedPagination && mergedPagination.total]); // ========================== Selections ==========================

  var _useSelection = useSelection(rowSelection, {
    prefixCls: prefixCls,
    data: mergedData,
    pageData: pageData,
    getRowKey: getRowKey,
    getRecordByKey: getRecordByKey,
    expandType: expandType,
    childrenColumnName: childrenColumnName,
    locale: tableLocale,
    getPopupContainer: getPopupContainer
  }),
      _useSelection2 = (0,slicedToArray/* default */.Z)(_useSelection, 2),
      transformSelectionColumns = _useSelection2[0],
      selectedKeySet = _useSelection2[1];

  var internalRowClassName = function internalRowClassName(record, index, indent) {
    var mergedRowClassName;

    if (typeof rowClassName === 'function') {
      mergedRowClassName = classnames_default()(rowClassName(record, index, indent));
    } else {
      mergedRowClassName = classnames_default()(rowClassName);
    }

    return classnames_default()((0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-row-selected"), selectedKeySet.has(getRowKey(record, index))), mergedRowClassName);
  }; // ========================== Expandable ==========================
  // Pass origin render status into `rc-table`, this can be removed when refactor with `rc-table`


  mergedExpandable.__PARENT_RENDER_ICON__ = mergedExpandable.expandIcon; // Customize expandable icon

  mergedExpandable.expandIcon = mergedExpandable.expandIcon || expandIcon || ExpandIcon(tableLocale); // Adjust expand icon index, no overwrite expandIconColumnIndex if set.

  if (expandType === 'nest' && mergedExpandable.expandIconColumnIndex === undefined) {
    mergedExpandable.expandIconColumnIndex = rowSelection ? 1 : 0;
  } else if (mergedExpandable.expandIconColumnIndex > 0 && rowSelection) {
    mergedExpandable.expandIconColumnIndex -= 1;
  } // Indent size


  if (typeof mergedExpandable.indentSize !== 'number') {
    mergedExpandable.indentSize = typeof indentSize === 'number' ? indentSize : 15;
  } // ============================ Render ============================


  var transformColumns = react.useCallback(function (innerColumns) {
    return transformTitleColumns(transformSelectionColumns(transformFilterColumns(transformSorterColumns(innerColumns))));
  }, [transformSorterColumns, transformFilterColumns, transformSelectionColumns]);
  var topPaginationNode;
  var bottomPaginationNode;

  if (pagination !== false && (mergedPagination === null || mergedPagination === void 0 ? void 0 : mergedPagination.total)) {
    var paginationSize;

    if (mergedPagination.size) {
      paginationSize = mergedPagination.size;
    } else {
      paginationSize = mergedSize === 'small' || mergedSize === 'middle' ? 'small' : undefined;
    }

    var renderPagination = function renderPagination(position) {
      return /*#__PURE__*/react.createElement(es_pagination, (0,esm_extends/* default */.Z)({}, mergedPagination, {
        className: classnames_default()("".concat(prefixCls, "-pagination ").concat(prefixCls, "-pagination-").concat(position), mergedPagination.className),
        size: paginationSize
      }));
    };

    var defaultPosition = direction === 'rtl' ? 'left' : 'right';
    var position = mergedPagination.position;

    if (position !== null && Array.isArray(position)) {
      var topPos = position.find(function (p) {
        return p.indexOf('top') !== -1;
      });
      var bottomPos = position.find(function (p) {
        return p.indexOf('bottom') !== -1;
      });
      var isDisable = position.every(function (p) {
        return "".concat(p) === 'none';
      });

      if (!topPos && !bottomPos && !isDisable) {
        bottomPaginationNode = renderPagination(defaultPosition);
      }

      if (topPos) {
        topPaginationNode = renderPagination(topPos.toLowerCase().replace('top', ''));
      }

      if (bottomPos) {
        bottomPaginationNode = renderPagination(bottomPos.toLowerCase().replace('bottom', ''));
      }
    } else {
      bottomPaginationNode = renderPagination(defaultPosition);
    }
  } // >>>>>>>>> Spinning


  var spinProps;

  if (typeof loading === 'boolean') {
    spinProps = {
      spinning: loading
    };
  } else if ((0,esm_typeof/* default */.Z)(loading) === 'object') {
    spinProps = (0,esm_extends/* default */.Z)({
      spinning: true
    }, loading);
  }

  var wrapperClassNames = classnames_default()("".concat(prefixCls, "-wrapper"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-wrapper-rtl"), direction === 'rtl'), className);
  return /*#__PURE__*/react.createElement("div", {
    ref: ref,
    className: wrapperClassNames,
    style: style
  }, /*#__PURE__*/react.createElement(spin/* default */.Z, (0,esm_extends/* default */.Z)({
    spinning: false
  }, spinProps), topPaginationNode, /*#__PURE__*/react.createElement(rc_table_es, (0,esm_extends/* default */.Z)({}, tableProps, {
    columns: mergedColumns,
    direction: direction,
    expandable: mergedExpandable,
    prefixCls: prefixCls,
    className: classnames_default()((_classNames3 = {}, (0,defineProperty/* default */.Z)(_classNames3, "".concat(prefixCls, "-middle"), mergedSize === 'middle'), (0,defineProperty/* default */.Z)(_classNames3, "".concat(prefixCls, "-small"), mergedSize === 'small'), (0,defineProperty/* default */.Z)(_classNames3, "".concat(prefixCls, "-bordered"), bordered), (0,defineProperty/* default */.Z)(_classNames3, "".concat(prefixCls, "-empty"), rawData.length === 0), _classNames3)),
    data: pageData,
    rowKey: getRowKey,
    rowClassName: internalRowClassName,
    emptyText: locale && locale.emptyText || renderEmpty('Table') // Internal
    ,
    internalHooks: INTERNAL_HOOKS,
    internalRefs: internalRefs,
    transformColumns: transformColumns
  })), bottomPaginationNode));
}

var ForwardTable = /*#__PURE__*/react.forwardRef(InternalTable);
var Table_Table = ForwardTable;
Table_Table.defaultProps = {
  rowKey: 'key'
};
Table_Table.SELECTION_COLUMN = SELECTION_COLUMN;
Table_Table.EXPAND_COLUMN = rc_table_es.EXPAND_COLUMN;
Table_Table.SELECTION_ALL = SELECTION_ALL;
Table_Table.SELECTION_INVERT = SELECTION_INVERT;
Table_Table.SELECTION_NONE = SELECTION_NONE;
Table_Table.Column = table_Column;
Table_Table.ColumnGroup = table_ColumnGroup;
Table_Table.Summary = FooterComponents;
/* harmony default export */ var table_Table = (Table_Table);
;// CONCATENATED MODULE: ./node_modules/antd/es/table/index.js

/* harmony default export */ var table = (table_Table);
// EXTERNAL MODULE: ./node_modules/antd/es/space/style/index.js + 1 modules
var space_style = __webpack_require__(1114);
// EXTERNAL MODULE: ./node_modules/antd/es/space/index.js + 1 modules
var space = __webpack_require__(9650);
;// CONCATENATED MODULE: ./src/components/stateful/ErrorBoundary/index.js
function ErrorBoundary_typeof(obj) { "@babel/helpers - typeof"; return ErrorBoundary_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, ErrorBoundary_typeof(obj); }






function ErrorBoundary_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ErrorBoundary_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ErrorBoundary_createClass(Constructor, protoProps, staticProps) { if (protoProps) ErrorBoundary_defineProperties(Constructor.prototype, protoProps); if (staticProps) ErrorBoundary_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function ErrorBoundary_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) ErrorBoundary_setPrototypeOf(subClass, superClass); }

function ErrorBoundary_setPrototypeOf(o, p) { ErrorBoundary_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ErrorBoundary_setPrototypeOf(o, p); }

function ErrorBoundary_createSuper(Derived) { var hasNativeReflectConstruct = ErrorBoundary_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = ErrorBoundary_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = ErrorBoundary_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return ErrorBoundary_possibleConstructorReturn(this, result); }; }

function ErrorBoundary_possibleConstructorReturn(self, call) { if (call && (ErrorBoundary_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return ErrorBoundary_assertThisInitialized(self); }

function ErrorBoundary_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ErrorBoundary_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ErrorBoundary_getPrototypeOf(o) { ErrorBoundary_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ErrorBoundary_getPrototypeOf(o); }

function ErrorBoundary_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



// https://github.com/bvaughn/react-error-boundary
var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  ErrorBoundary_inherits(ErrorBoundary, _React$Component);

  var _super = ErrorBoundary_createSuper(ErrorBoundary);

  function ErrorBoundary() {
    var _this;

    ErrorBoundary_classCallCheck(this, ErrorBoundary);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    ErrorBoundary_defineProperty(ErrorBoundary_assertThisInitialized(_this), "state", {
      hasError: false
    });

    ErrorBoundary_defineProperty(ErrorBoundary_assertThisInitialized(_this), "triggerError", function (_ref) {
      var error = _ref.error,
          errorInfo = _ref.errorInfo;

      _this.setState({
        hasError: true
      });
    });

    ErrorBoundary_defineProperty(ErrorBoundary_assertThisInitialized(_this), "resetError", function () {
      return _this.setState({
        hasError: false
      });
    });

    return _this;
  }

  ErrorBoundary_createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {}
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(space/* default */.Z, null, /*#__PURE__*/react.createElement("span", null, "\u54CE\u5440\uFF0C\u6211\u4EEC\u641E\u7838\u4E86!!!"), /*#__PURE__*/react.createElement(es_button/* default */.Z, {
          onClick: this.resetError
        }, "Try again?")));
      }

      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError() {
      return {
        hasError: true
      };
    }
  }]);

  return ErrorBoundary;
}(react.Component);

/* harmony default export */ var stateful_ErrorBoundary = (ErrorBoundary);
;// CONCATENATED MODULE: ./node_modules/antd/es/message/style/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/antd/es/message/style/index.js


// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 1 modules
var message = __webpack_require__(8086);
;// CONCATENATED MODULE: ./src/utils/md5/index.js
/* eslint-disable prefer-const */

/* eslint-disable camelcase */

/* eslint-disable one-var */
function safeAdd(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRol(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5Cmn(q, a, b, x, s, t) {
  return safeAdd(bitRol(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5Ff(a, b, c, d, x, s, t) {
  return md5Cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5Gg(a, b, c, d, x, s, t) {
  return md5Cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5Hh(a, b, c, d, x, s, t) {
  return md5Cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5Ii(a, b, c, d, x, s, t) {
  return md5Cmn(c ^ (b | ~d), a, b, x, s, t);
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function binlMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[(len + 64 >>> 9 << 4) + 14] = len;
  var i,
      olda,
      oldb,
      oldc,
      oldd,
      a = 1732584193,
      b = -271733879,
      c = -1732584194,
      d = 271733878;

  for (i = 0; i < x.length; i += 16) {
    olda = a;
    oldb = b;
    oldc = c;
    oldd = d;
    a = md5Ff(a, b, c, d, x[i], 7, -680876936);
    d = md5Ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5Ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5Ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5Ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5Ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5Ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5Ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5Ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5Ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5Ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5Ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5Ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5Ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5Ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5Ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5Gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5Gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5Gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5Gg(b, c, d, a, x[i], 20, -373897302);
    a = md5Gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5Gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5Gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5Gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5Gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5Gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5Gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5Gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5Gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5Gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5Gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5Gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5Hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5Hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5Hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5Hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5Hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5Hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5Hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5Hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5Hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5Hh(d, a, b, c, x[i], 11, -358537222);
    c = md5Hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5Hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5Hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5Hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5Hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5Hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5Ii(a, b, c, d, x[i], 6, -198630844);
    d = md5Ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5Ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5Ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5Ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5Ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5Ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5Ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5Ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5Ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5Ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5Ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5Ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5Ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5Ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5Ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array of little-endian words to a string
 */


function binl2rstr(input) {
  var i,
      output = '';

  for (i = 0; i < input.length * 32; i += 8) {
    output += String.fromCharCode(input[i >> 5] >>> i % 32 & 0xff);
  }

  return output;
}
/*
 * Convert a raw string to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function rstr2binl(input) {
  var i;
  var output = [];
  output[(input.length >> 2) - 1] = undefined;

  for (i = 0; i < output.length; i += 1) {
    output[i] = 0;
  }

  for (i = 0; i < input.length * 8; i += 8) {
    output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << i % 32;
  }

  return output;
}
/*
 * Calculate the MD5 of a raw string
 */


function rstrMd5(s) {
  return binl2rstr(binlMd5(rstr2binl(s), s.length * 8));
}
/*
 * Calculate the HMAC-MD5, of a key and some data (raw strings)
 */


function rstr_hmac_md5(key, data) {
  var i,
      bkey = rstr2binl(key),
      ipad = [],
      opad = [],
      hash;
  ipad[15] = opad[15] = undefined;

  if (bkey.length > 16) {
    bkey = binlMd5(bkey, key.length * 8);
  }

  for (i = 0; i < 16; i += 1) {
    ipad[i] = bkey[i] ^ 0x36363636;
    opad[i] = bkey[i] ^ 0x5c5c5c5c;
  }

  hash = binlMd5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
  return binl2rstr(binlMd5(opad.concat(hash), 512 + 128));
}
/*
 * Convert a raw string to a hex string
 */


function rstr2hex(input) {
  var hex_tab = '0123456789abcdef',
      output = '',
      x,
      i;

  for (i = 0; i < input.length; i += 1) {
    x = input.charCodeAt(i);
    output += hex_tab.charAt(x >>> 4 & 0x0f) + hex_tab.charAt(x & 0x0f);
  }

  return output;
}
/*
 * Encode a string as utf-8
 */


function str2rstr_utf8(input) {
  return unescape(encodeURIComponent(input));
}
/*
 * Take string arguments and return either raw or hex encoded strings
 */


function raw_md5(s) {
  return rstrMd5(str2rstr_utf8(s));
}

function hex_md5(s) {
  return rstr2hex(raw_md5(s));
}

function raw_hmac_md5(k, d) {
  return rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d));
}

function hex_hmac_md5(k, d) {
  return rstr2hex(raw_hmac_md5(k, d));
}

function md5(string, key, raw) {
  if (!key) {
    if (!raw) {
      return hex_md5(string);
    }

    return raw_md5(string);
  }

  if (!raw) {
    return hex_hmac_md5(key, string);
  }

  return raw_hmac_md5(key, string);
}
;// CONCATENATED MODULE: ./src/utils/suffix/index.js
function suffix_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function suffix_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? suffix_ownKeys(Object(source), !0).forEach(function (key) { suffix_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : suffix_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function suffix_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable prefer-const */

var signConfig = {
  signStr: 'kl4w3hbbh7jp5ocu9n' // 设置签名key

};

function _sign(map) {
  var json = null;
  var keys = Object.keys(map);
  var count = keys.length;
  keys.sort();
  var signStr = signConfig.signStr;

  for (var i = 0; i < count; i++) {
    var k = keys[i];
    var v = map[k];

    if (k === 'json') {
      json = v;
    } else {
      signStr = signStr + k + v;
    }
  }

  if (json) {
    signStr = signStr + json;
  }

  return md5(signStr);
}

function suffix(map) {
  var timestamp = Math.round(new Date().getTime());
  map.timestamp = timestamp;

  var signStr = _sign(map);

  delete map.json;
  return suffix_objectSpread(suffix_objectSpread({}, map), {}, {
    sign: signStr
  });
}
// EXTERNAL MODULE: ./node_modules/fetch-intercept/lib/browser.js
var browser = __webpack_require__(8096);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);
;// CONCATENATED MODULE: ./src/service/fetch.js


var fetch_excluded = ["isShowError", "timeout", "controller"];

function fetch_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function fetch_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? fetch_ownKeys(Object(source), !0).forEach(function (key) { fetch_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : fetch_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function fetch_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function fetch_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = fetch_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function fetch_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // import { getToken } from '../utils/token'

 // import fetch from 'cross-fetch'

__webpack_require__(4301); // fetch polyfill
// https://github.com/node-fetch/node-fetch
// https://github.com/matthew-andrews/isomorphic-fetch
// https://github.com/lquixada/cross-fetch
// https://github.com/github/fetch
// fetch(url, initParams).then((res) => res.json).then((body) = body).catch((error) => error)
// const response = fetch(url, {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'text/plain;charset=UTF-8', //application/json;charset=utf-8
//   },
//   body: undefined,
//   referrer: 'about:client',
//   referrerPolicy: 'no-referrer-when-downgrade',
//   mode: 'cors',
//   credentials: 'same-origin',
//   cache: 'default',
//   redirect: 'follow',
//   integrity: '',
//   keepalive: false,
//   signal: undefined,
// })

/**
 * Timeout function
 * @param {Integer} time (miliseconds)
 * @param {Promise} promise
 */
// const timeout = (time, promise) => {
//   return new Promise(function(resolve, reject) {
//     setTimeout(() => {
//       reject(new Error('Request timed out.'))
//     }, time);
//     promise.then(resolve, reject);
//   });
// }
// https://use-http.com/#/
// https://github.com/Bigerfe/fe-learn-code/
// https://cloud.tencent.com/developer/article/1532107
// https://towardsdev.com/what-is-better-for-http-requests-fetch-or-axios-comparison-920ceffc5161
// https://javascript.info/fetch-progress
// https://github.com/AnthumChris/fetch-progress-indicators
// https://github.com/jserz/request-extensions
// allowHTTP1ForStreamingUpload
// https://medium.datadriveninvestor.com/aborting-cancelling-requests-with-fetch-or-axios-db2e93825a36
// fetch(url).then(res => consume(res.body.getReader()))
// const consume = (reader) => {
//   let total = 0
//   return new Promise((resolve, reject) => {
//     function pump() {
//       reader
//         .read()
//         .then(({ done, value }) => {
//           if (done) {
//             resolve()
//             return
//           }
//           total += value.byteLength
//           console.log(`received ${value.byteLength} bytes (${total} bytes in total)`)
//           pump()
//         })
//         .catch(reject)
//     }
//     pump()
//   })
// }


var baseUrl = ""; // const hashRouter = new HashRouter()

var parseToQuery = function parseToQuery(query) {
  return Object.keys(query).reduce(function (ary, key) {
    // if (query[key]) {
    //   ary.push(encodeURIComponent(key) + '=' + encodeURIComponent(query[key]))
    // }
    ary.push(encodeURIComponent(key) + '=' + encodeURIComponent(query[key] === undefined ? '' : query[key]));
    return ary;
  }, []).join('&');
};

var initOptions = {
  method: 'GET',
  // POST, *GET,  PUT, DELETE, PATCH, [HEAD, CONNECT, OPTIONS, TRACE]
  headers: {
    // Accept: 'application/json',
    'Content-Type': 'application/json;charset=utf-8' // text/plain;charset=UTF-8 *application/json;charset=utf-8 application/x-www-form-urlencoded
    // Authorization: getToken() ? `Bearer ${getToken()}` : null,

  },
  signal: undefined,
  credentials: 'include' // include *same-origin
  // mode: 'cors', // no-cors, cors, *same-origin
  // redirect: 'follow', // manual, *follow, error
  // referrer: 'no-referrer', // no-referrer *client,
  // referrerPolicy: 'no-referrer-when-downgrade',
  // cache: 'default', // *default no-store reload no-cache force-cache only-if-cached
  // integrity: '', // sha256-abcdef
  // keepalive: false,

};

var handleFailedResult = function handleFailedResult(result, error, isShowError) {
  if (result.code !== 0 && isShowError) {
    var errMsg = result.message || result.error || error && error.message;
    var errStatus = result.status ? result.status : error && error.name;
    var errStr = "".concat(result.code ? result.code : errStatus, ": ").concat(errMsg);

    if (!error || error && error.name !== 'AbortError') {
      message/* default.error */.ZP.error(errStr, 2);
    }
  }

  return result;
};

var handleSuccessResult = function handleSuccessResult(result, isShowError) {
  // response.ok text/html text/plain result may be string
  if (result.code !== 0) {
    if (result.code === 41002) {
      // window.location.href = '#/signin'
      // hashRouter.history.push('/signin')
      return;
    }

    if (isShowError && result.code) {
      var errStr = "".concat(result.code, ": ").concat(result.message);

      message/* default.error */.ZP.error(errStr, 2);
    }
  }

  return result;
};

var handleErrorResponse = function handleErrorResponse(reject, response, error, isShowError) {
  var msg = '';

  switch (response.status) {
    case 401:
      msg = 'Unauthorized';
      break;

    case 403:
      msg = 'Forbidden';
      break;

    case 404:
      msg = 'Not Found';
      break;

    case 405:
      msg = 'Method Not Allowed';
      break;

    case 504:
      msg = 'Gateway Timeout';
      break;

    default:
      msg = response.statusText;
  }

  reject(handleFailedResult({
    status: response.status,
    error: msg
  }, error, isShowError));
};

var handleSuccessResponse = function handleSuccessResponse(resolve, reject, response, resBody, isShowError) {
  if (response.ok) {
    resolve(handleSuccessResult(resBody, isShowError));
  } else {
    handleErrorResponse(reject, response, Object.assign({}, resBody, {
      status: response.status,
      error: response.statusText
    }), isShowError);
  }
};

var handleFetchData = function handleFetchData(url, options) {
  var isShowError = options.isShowError,
      timeout = options.timeout,
      controller = options.controller,
      otherOptions = fetch_objectWithoutProperties(options, fetch_excluded);

  if (otherOptions.signal) throw new Error('Signal not supported in timeoutable fetch');
  var abortController = controller || new AbortController();
  var signal = abortController.signal;
  return new Promise(function (resolve, reject) {
    var timer = setTimeout(function () {
      reject(handleFailedResult({
        error: 'Timeout for Promise'
      }, new Error('TimeoutError: Timeout for Promise'), isShowError));
      abortController.abort();
    }, timeout);
    fetch(url, fetch_objectSpread(fetch_objectSpread({}, otherOptions), {}, {
      signal: signal
    })).finally(function () {
      return clearTimeout(timer);
    }).then(function (response) {
      // response.text() response.json() response.blob() response.formData() response.arrayBuffer() response.clone()
      // if(response.ok || (response.status >= 200 && response.status < 300)) { 成功 } else { 失败}
      // response.status
      // response.statusText
      // response.type >> *basic cors opaque error opaqueredirect(manual)
      // cors >> Cache-Control, Content-Language, Content-Type, Expores, Last-Modified, Progma
      // res.body.getReader()
      // for (const [key, value] of response.headers.entries()) {
      //   console.log(`response ${key} : ${value}`)
      // }
      var contentType = response.headers.get('Content-Type');

      if (!response.ok && !contentType) {
        handleErrorResponse(reject, response, null, isShowError);
        return;
      }

      if (contentType.includes('application/json')) {
        response.json().then(function (resBody) {
          handleSuccessResponse(resolve, reject, response, resBody, isShowError);
        }).catch(function (error) {
          handleErrorResponse(reject, response, error, isShowError);
        });
      } else if (contentType.includes('application/vnd.ms-excel')) {
        // application/octet-stream
        response.arrayBuffer().then(function (resBuffer) {
          var blob = new Blob([resBuffer], {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
          });
          var disposition = response.headers.get('content-disposition');
          var fileName = decodeURI(disposition.split('=')[1].replace(/'/g, ''));
          var objectUrl = URL.createObjectURL(blob);
          var downloadElement = document.createElement('a');
          document.body.appendChild(downloadElement);
          downloadElement.style = 'display: none';
          downloadElement.href = objectUrl;
          downloadElement.download = fileName;
          downloadElement.click();
          document.body.removeChild(downloadElement);
        }).catch(function (error) {
          handleErrorResponse(reject, response, error, isShowError);
        });
      } else if (contentType.includes('text/html') || contentType.includes('text/plain')) {
        var resType = response.text();
        resType.then(function (resBody) {
          handleSuccessResponse(resolve, reject, response, resBody, isShowError);
        }).catch(function (error) {
          handleErrorResponse(reject, response, error, isShowError);
        });
      } else {
        // context-type */*
        response.text().then(function (resBody) {
          handleSuccessResponse(resolve, reject, response, resBody, isShowError);
        }).catch(function (error) {
          handleErrorResponse(reject, response, error, isShowError);
        });
      }
    }).catch(function (error) {
      var errMsg = "".concat(error.name, " ").concat(error.message);
      reject(handleFailedResult({
        error: errMsg
      }, error, isShowError));
    });
  });
};

browser_default().register({
  request: function request(url, config) {
    // Modify the url or config here
    // console.log('url', url)
    return [url, config];
  },
  requestError: function requestError(error) {
    // Called when an error occured during another 'request' interceptor call
    return Promise.reject(error);
  },
  response: function response(_response) {
    // Modify the reponse object
    // console.log('response', response)
    return _response;
  },
  responseError: function responseError(error) {
    // Handle an fetch error
    // console.log('res error', error)
    return Promise.reject(error);
  }
});
var reqFetch = function reqFetch(url) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    method: 'GET',
    payload: null,
    headers: null,
    isShowError: true,
    timeout: 20000,
    controller: undefined
  };
  var _params$method = params.method,
      method = _params$method === void 0 ? 'GET' : _params$method,
      _params$payload = params.payload,
      payload = _params$payload === void 0 ? null : _params$payload,
      _params$headers = params.headers,
      headers = _params$headers === void 0 ? null : _params$headers,
      _params$isShowError = params.isShowError,
      isShowError = _params$isShowError === void 0 ? true : _params$isShowError,
      _params$timeout = params.timeout,
      timeout = _params$timeout === void 0 ? 20000 : _params$timeout,
      _params$controller = params.controller,
      controller = _params$controller === void 0 ? undefined : _params$controller;

  var defaultOptions = fetch_objectSpread(fetch_objectSpread({}, initOptions), {}, {
    method: method,
    headers: fetch_objectSpread(fetch_objectSpread({}, initOptions.headers), headers),
    controller: controller,
    isShowError: isShowError,
    timeout: timeout
  }); // POST, *GET,  PUT, DELETE, PATCH, [HEAD, CONNECT, OPTIONS, TRACE]


  var noReqBody = ['GET', 'CONNECT', 'HEAD', 'OPTIONS', 'TRACE'];
  var isNoReqBody = noReqBody.includes(method.toUpperCase());
  var options = isNoReqBody ? defaultOptions : fetch_objectSpread(fetch_objectSpread({}, defaultOptions), {}, {
    body: JSON.stringify(payload)
  });
  var suffixPayload = isNoReqBody ? fetch_objectSpread({}, payload) : {};
  var signedPayload = suffix(suffixPayload);
  var queryParams = parseToQuery(signedPayload);
  var fetchUrl = "".concat(baseUrl).concat(url, "?").concat(queryParams);
  return handleFetchData(fetchUrl, options);
};
var getFetch = function getFetch(url, params) {
  return reqFetch(url, fetch_objectSpread({
    method: 'GET'
  }, params));
};
var postFetch = function postFetch(url, params) {
  return reqFetch(url, fetch_objectSpread({
    method: 'POST'
  }, params));
};
var putFetch = function putFetch(url, params) {
  return reqFetch(url, fetch_objectSpread({
    method: 'PUT'
  }, params));
};
var deleteFetch = function deleteFetch(url, params) {
  return reqFetch(url, fetch_objectSpread({
    method: 'DELETE'
  }, params));
};
var patchFetch = function patchFetch(url, params) {
  return reqFetch(url, fetch_objectSpread({
    method: 'PATCH'
  }, params));
};
;// CONCATENATED MODULE: ./src/service/useFetch.js
function useFetch_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function useFetch_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? useFetch_ownKeys(Object(source), !0).forEach(function (key) { useFetch_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : useFetch_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function useFetch_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function useFetch_slicedToArray(arr, i) { return useFetch_arrayWithHoles(arr) || useFetch_iterableToArrayLimit(arr, i) || useFetch_unsupportedIterableToArray(arr, i) || useFetch_nonIterableRest(); }

function useFetch_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function useFetch_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useFetch_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useFetch_arrayLikeToArray(o, minLen); }

function useFetch_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function useFetch_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function useFetch_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Fetch Hooks
 * url： api endpoint
 * opts: 参见 fetch.js
 */


var useReqFetch = function useReqFetch(url, opts) {
  var _useState = (0,react.useState)(null),
      _useState2 = useFetch_slicedToArray(_useState, 2),
      res = _useState2[0],
      setRes = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = useFetch_slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = (0,react.useState)(false),
      _useState6 = useFetch_slicedToArray(_useState5, 2),
      error = _useState6[0],
      setError = _useState6[1];

  var asyncFetch = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(canceled, controller) {
      var resData;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (!loading) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return");

            case 3:
              setLoading(true);
              _context.next = 6;
              return reqFetch(url, useFetch_objectSpread(useFetch_objectSpread({}, opts), {}, {
                controller: controller
              }));

            case 6:
              resData = _context.sent;

              if (!canceled) {
                setRes(resData);
              }

              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              setError(true);

            case 13:
              _context.prev = 13;
              setLoading(false);
              return _context.finish(13);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10, 13, 16]]);
    }));

    return function asyncFetch(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  var reFetch = (0,react.useCallback)(function () {
    var canceled = false;
    var controller = new AbortController();
    asyncFetch(canceled, controller);
    return function () {
      setRes(function () {}); // return undefined

      canceled = true;
      controller.abort();
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, opts]); // eslint-disable-next-line react-hooks/exhaustive-deps

  (0,react.useEffect)(reFetch, []);
  return [res, loading, error];
};
var usePostFetch = function usePostFetch(url, opts) {
  return useReqFetch(url, useFetch_objectSpread(useFetch_objectSpread({}, opts), {}, {
    method: 'POST'
  }));
};
var useGetFetch = function useGetFetch(url, opts) {
  return useReqFetch(url, useFetch_objectSpread(useFetch_objectSpread({}, opts), {}, {
    method: 'GET'
  }));
};
var usePutFetch = function usePutFetch(url, opts) {
  return useReqFetch(url, useFetch_objectSpread(useFetch_objectSpread({}, opts), {}, {
    method: 'PUT'
  }));
};
var useDeleteFetch = function useDeleteFetch(url, opts) {
  return useReqFetch(url, useFetch_objectSpread(useFetch_objectSpread({}, opts), {}, {
    method: 'DELETE'
  }));
};
var usePatchFetch = function usePatchFetch(url, opts) {
  return useReqFetch(url, useFetch_objectSpread(useFetch_objectSpread({}, opts), {}, {
    method: 'PATCH'
  }));
};
;// CONCATENATED MODULE: ./src/service/index.js
// https://github.com/ava/use-http
// https://react-query-v2.tanstack.com/
// https://github.com/umijs/umi-request
// https://www.npmjs.com/package/merced-react-hooks
// https://www.npmjs.com/package/react-request
// https://www.npmjs.com/package/axios-hooks
// https://github.com/visionmedia/superagent



// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 22 modules
var react_redux_es = __webpack_require__(3594);
// EXTERNAL MODULE: ./src/actions/index.js + 2 modules
var actions = __webpack_require__(9302);
;// CONCATENATED MODULE: ./src/pages/demo/shopsList/index.js
function shopsList_slicedToArray(arr, i) { return shopsList_arrayWithHoles(arr) || shopsList_iterableToArrayLimit(arr, i) || shopsList_unsupportedIterableToArray(arr, i) || shopsList_nonIterableRest(); }

function shopsList_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function shopsList_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return shopsList_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return shopsList_arrayLikeToArray(o, minLen); }

function shopsList_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function shopsList_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function shopsList_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var ShopsList = function ShopsList() {
  var _useGetFetch = useGetFetch('/faker/shops'),
      _useGetFetch2 = shopsList_slicedToArray(_useGetFetch, 3),
      booksRes = _useGetFetch2[0],
      booksLoading = _useGetFetch2[1],
      booksError = _useGetFetch2[2];

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h4", null, "ShopsList:"), /*#__PURE__*/react.createElement("h4", null, booksLoading && 'Books Loading...'), /*#__PURE__*/react.createElement("h4", null, booksError && 'error'), /*#__PURE__*/react.createElement("h4", null, booksRes === null || booksRes === void 0 ? void 0 : booksRes.map(function (item) {
    return item.shopName;
  })));
};

/* harmony default export */ var shopsList = (ShopsList);
// EXTERNAL MODULE: ./node_modules/antd/es/progress/style/index.js + 1 modules
var progress_style = __webpack_require__(2078);
// EXTERNAL MODULE: ./node_modules/antd/es/progress/index.js + 10 modules
var progress = __webpack_require__(4458);
;// CONCATENATED MODULE: ./node_modules/antd/es/upload/style/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/antd/es/upload/style/index.js

 // style dependencies




// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(7757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(5861);
;// CONCATENATED MODULE: ./node_modules/rc-upload/es/request.js
function getError(option, xhr) {
  var msg = "cannot ".concat(option.method, " ").concat(option.action, " ").concat(xhr.status, "'");
  var err = new Error(msg);
  err.status = xhr.status;
  err.method = option.method;
  err.url = option.action;
  return err;
}

function getBody(xhr) {
  var text = xhr.responseText || xhr.response;

  if (!text) {
    return text;
  }

  try {
    return JSON.parse(text);
  } catch (e) {
    return text;
  }
}

function upload(option) {
  // eslint-disable-next-line no-undef
  var xhr = new XMLHttpRequest();

  if (option.onProgress && xhr.upload) {
    xhr.upload.onprogress = function progress(e) {
      if (e.total > 0) {
        e.percent = e.loaded / e.total * 100;
      }

      option.onProgress(e);
    };
  } // eslint-disable-next-line no-undef


  var formData = new FormData();

  if (option.data) {
    Object.keys(option.data).forEach(function (key) {
      var value = option.data[key]; // support key-value array data

      if (Array.isArray(value)) {
        value.forEach(function (item) {
          // { list: [ 11, 22 ] }
          // formData.append('list[]', 11);
          formData.append("".concat(key, "[]"), item);
        });
        return;
      }

      formData.append(key, value);
    });
  } // eslint-disable-next-line no-undef


  if (option.file instanceof Blob) {
    formData.append(option.filename, option.file, option.file.name);
  } else {
    formData.append(option.filename, option.file);
  }

  xhr.onerror = function error(e) {
    option.onError(e);
  };

  xhr.onload = function onload() {
    // allow success when 2xx status
    // see https://github.com/react-component/upload/issues/34
    if (xhr.status < 200 || xhr.status >= 300) {
      return option.onError(getError(option, xhr), getBody(xhr));
    }

    return option.onSuccess(getBody(xhr), xhr);
  };

  xhr.open(option.method, option.action, true); // Has to be after `.open()`. See https://github.com/enyo/dropzone/issues/179

  if (option.withCredentials && 'withCredentials' in xhr) {
    xhr.withCredentials = true;
  }

  var headers = option.headers || {}; // when set headers['X-Requested-With'] = null , can close default XHR header
  // see https://github.com/react-component/upload/issues/33

  if (headers['X-Requested-With'] !== null) {
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  }

  Object.keys(headers).forEach(function (h) {
    if (headers[h] !== null) {
      xhr.setRequestHeader(h, headers[h]);
    }
  });
  xhr.send(formData);
  return {
    abort: function abort() {
      xhr.abort();
    }
  };
}
;// CONCATENATED MODULE: ./node_modules/rc-upload/es/uid.js
var now = +new Date();
var index = 0;
function uid() {
  // eslint-disable-next-line no-plusplus
  return "rc-upload-".concat(now, "-").concat(++index);
}
;// CONCATENATED MODULE: ./node_modules/rc-upload/es/attr-accept.js

/* harmony default export */ var attr_accept = (function (file, acceptedFiles) {
  if (file && acceptedFiles) {
    var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(',');
    var fileName = file.name || '';
    var mimeType = file.type || '';
    var baseMimeType = mimeType.replace(/\/.*$/, '');
    return acceptedFilesArray.some(function (type) {
      var validType = type.trim(); // This is something like */*,*  allow all files

      if (/^\*(\/\*)?$/.test(type)) {
        return true;
      } // like .jpg, .png


      if (validType.charAt(0) === '.') {
        var lowerFileName = fileName.toLowerCase();
        var lowerType = validType.toLowerCase();
        var affixList = [lowerType];

        if (lowerType === '.jpg' || lowerType === '.jpeg') {
          affixList = ['.jpg', '.jpeg'];
        }

        return affixList.some(function (affix) {
          return lowerFileName.endsWith(affix);
        });
      } // This is something like a image/* mime type


      if (/\/\*$/.test(validType)) {
        return baseMimeType === validType.replace(/\/.*$/, '');
      } // Full match


      if (mimeType === validType) {
        return true;
      } // Invalidate type should skip


      if (/^\w+$/.test(validType)) {
        (0,es_warning/* default */.ZP)(false, "Upload takes an invalidate 'accept' type '".concat(validType, "'.Skip for check."));
        return true;
      }

      return false;
    });
  }

  return true;
});
;// CONCATENATED MODULE: ./node_modules/rc-upload/es/traverseFileTree.js
function loopFiles(item, callback) {
  var dirReader = item.createReader();
  var fileList = [];

  function sequence() {
    dirReader.readEntries(function (entries) {
      var entryList = Array.prototype.slice.apply(entries);
      fileList = fileList.concat(entryList); // Check if all the file has been viewed

      var isFinished = !entryList.length;

      if (isFinished) {
        callback(fileList);
      } else {
        sequence();
      }
    });
  }

  sequence();
}

var traverseFileTree = function traverseFileTree(files, callback, isAccepted) {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  var _traverseFileTree = function _traverseFileTree(item, path) {
    // eslint-disable-next-line no-param-reassign
    item.path = path || '';

    if (item.isFile) {
      item.file(function (file) {
        if (isAccepted(file)) {
          // https://github.com/ant-design/ant-design/issues/16426
          if (item.fullPath && !file.webkitRelativePath) {
            Object.defineProperties(file, {
              webkitRelativePath: {
                writable: true
              }
            }); // eslint-disable-next-line no-param-reassign

            file.webkitRelativePath = item.fullPath.replace(/^\//, '');
            Object.defineProperties(file, {
              webkitRelativePath: {
                writable: false
              }
            });
          }

          callback([file]);
        }
      });
    } else if (item.isDirectory) {
      loopFiles(item, function (entries) {
        entries.forEach(function (entryItem) {
          _traverseFileTree(entryItem, "".concat(path).concat(item.name, "/"));
        });
      });
    }
  };

  files.forEach(function (file) {
    _traverseFileTree(file.webkitGetAsEntry());
  });
};

/* harmony default export */ var es_traverseFileTree = (traverseFileTree);
;// CONCATENATED MODULE: ./node_modules/rc-upload/es/AjaxUploader.js











var AjaxUploader_excluded = ["component", "prefixCls", "className", "disabled", "id", "style", "multiple", "accept", "capture", "children", "directory", "openFileDialogOnClick", "onMouseEnter", "onMouseLeave"];








var AjaxUploader = /*#__PURE__*/function (_Component) {
  (0,inherits/* default */.Z)(AjaxUploader, _Component);

  var _super = (0,createSuper/* default */.Z)(AjaxUploader);

  function AjaxUploader() {
    var _this;

    (0,classCallCheck/* default */.Z)(this, AjaxUploader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      uid: uid()
    };
    _this.reqs = {};
    _this.fileInput = void 0;
    _this._isMounted = void 0;

    _this.onChange = function (e) {
      var _this$props = _this.props,
          accept = _this$props.accept,
          directory = _this$props.directory;
      var files = e.target.files;

      var acceptedFiles = (0,toConsumableArray/* default */.Z)(files).filter(function (file) {
        return !directory || attr_accept(file, accept);
      });

      _this.uploadFiles(acceptedFiles);

      _this.reset();
    };

    _this.onClick = function (e) {
      var el = _this.fileInput;

      if (!el) {
        return;
      }

      var _this$props2 = _this.props,
          children = _this$props2.children,
          onClick = _this$props2.onClick;

      if (children && children.type === 'button') {
        var parent = el.parentNode;
        parent.focus();
        parent.querySelector('button').blur();
      }

      el.click();

      if (onClick) {
        onClick(e);
      }
    };

    _this.onKeyDown = function (e) {
      if (e.key === 'Enter') {
        _this.onClick(e);
      }
    };

    _this.onFileDrop = function (e) {
      var multiple = _this.props.multiple;
      e.preventDefault();

      if (e.type === 'dragover') {
        return;
      }

      if (_this.props.directory) {
        es_traverseFileTree(Array.prototype.slice.call(e.dataTransfer.items), _this.uploadFiles, function (_file) {
          return attr_accept(_file, _this.props.accept);
        });
      } else {
        var files = (0,toConsumableArray/* default */.Z)(e.dataTransfer.files).filter(function (file) {
          return attr_accept(file, _this.props.accept);
        });

        if (multiple === false) {
          files = files.slice(0, 1);
        }

        _this.uploadFiles(files);
      }
    };

    _this.uploadFiles = function (files) {
      var originFiles = (0,toConsumableArray/* default */.Z)(files);

      var postFiles = originFiles.map(function (file) {
        // eslint-disable-next-line no-param-reassign
        file.uid = uid();
        return _this.processFile(file, originFiles);
      }); // Batch upload files

      Promise.all(postFiles).then(function (fileList) {
        var onBatchStart = _this.props.onBatchStart;
        onBatchStart === null || onBatchStart === void 0 ? void 0 : onBatchStart(fileList.map(function (_ref) {
          var origin = _ref.origin,
              parsedFile = _ref.parsedFile;
          return {
            file: origin,
            parsedFile: parsedFile
          };
        }));
        fileList.filter(function (file) {
          return file.parsedFile !== null;
        }).forEach(function (file) {
          _this.post(file);
        });
      });
    };

    _this.processFile = /*#__PURE__*/function () {
      var _ref2 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee(file, fileList) {
        var beforeUpload, transformedFile, action, mergedAction, data, mergedData, parsedData, parsedFile, mergedParsedFile;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                beforeUpload = _this.props.beforeUpload;
                transformedFile = file;

                if (!beforeUpload) {
                  _context.next = 14;
                  break;
                }

                _context.prev = 3;
                _context.next = 6;
                return beforeUpload(file, fileList);

              case 6:
                transformedFile = _context.sent;
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](3);
                // Rejection will also trade as false
                transformedFile = false;

              case 12:
                if (!(transformedFile === false)) {
                  _context.next = 14;
                  break;
                }

                return _context.abrupt("return", {
                  origin: file,
                  parsedFile: null,
                  action: null,
                  data: null
                });

              case 14:
                // Get latest action
                action = _this.props.action;

                if (!(typeof action === 'function')) {
                  _context.next = 21;
                  break;
                }

                _context.next = 18;
                return action(file);

              case 18:
                mergedAction = _context.sent;
                _context.next = 22;
                break;

              case 21:
                mergedAction = action;

              case 22:
                // Get latest data
                data = _this.props.data;

                if (!(typeof data === 'function')) {
                  _context.next = 29;
                  break;
                }

                _context.next = 26;
                return data(file);

              case 26:
                mergedData = _context.sent;
                _context.next = 30;
                break;

              case 29:
                mergedData = data;

              case 30:
                parsedData = // string type is from legacy `transformFile`.
                // Not sure if this will work since no related test case works with it
                ((0,esm_typeof/* default */.Z)(transformedFile) === 'object' || typeof transformedFile === 'string') && transformedFile ? transformedFile : file;

                if (parsedData instanceof File) {
                  parsedFile = parsedData;
                } else {
                  parsedFile = new File([parsedData], file.name, {
                    type: file.type
                  });
                }

                mergedParsedFile = parsedFile;
                mergedParsedFile.uid = file.uid;
                return _context.abrupt("return", {
                  origin: file,
                  data: mergedData,
                  parsedFile: mergedParsedFile,
                  action: mergedAction
                });

              case 35:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 9]]);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.saveFileInput = function (node) {
      _this.fileInput = node;
    };

    return _this;
  }

  (0,createClass/* default */.Z)(AjaxUploader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
      this.abort();
    }
  }, {
    key: "post",
    value: function post(_ref3) {
      var _this2 = this;

      var data = _ref3.data,
          origin = _ref3.origin,
          action = _ref3.action,
          parsedFile = _ref3.parsedFile;

      if (!this._isMounted) {
        return;
      }

      var _this$props3 = this.props,
          onStart = _this$props3.onStart,
          customRequest = _this$props3.customRequest,
          name = _this$props3.name,
          headers = _this$props3.headers,
          withCredentials = _this$props3.withCredentials,
          method = _this$props3.method;
      var uid = origin.uid;
      var request = customRequest || upload;
      var requestOption = {
        action: action,
        filename: name,
        data: data,
        file: parsedFile,
        headers: headers,
        withCredentials: withCredentials,
        method: method || 'post',
        onProgress: function onProgress(e) {
          var onProgress = _this2.props.onProgress;
          onProgress === null || onProgress === void 0 ? void 0 : onProgress(e, parsedFile);
        },
        onSuccess: function onSuccess(ret, xhr) {
          var onSuccess = _this2.props.onSuccess;
          onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess(ret, parsedFile, xhr);
          delete _this2.reqs[uid];
        },
        onError: function onError(err, ret) {
          var onError = _this2.props.onError;
          onError === null || onError === void 0 ? void 0 : onError(err, ret, parsedFile);
          delete _this2.reqs[uid];
        }
      };
      onStart(origin);
      this.reqs[uid] = request(requestOption);
    }
  }, {
    key: "reset",
    value: function reset() {
      this.setState({
        uid: uid()
      });
    }
  }, {
    key: "abort",
    value: function abort(file) {
      var reqs = this.reqs;

      if (file) {
        var uid = file.uid ? file.uid : file;

        if (reqs[uid] && reqs[uid].abort) {
          reqs[uid].abort();
        }

        delete reqs[uid];
      } else {
        Object.keys(reqs).forEach(function (uid) {
          if (reqs[uid] && reqs[uid].abort) {
            reqs[uid].abort();
          }

          delete reqs[uid];
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props4 = this.props,
          Tag = _this$props4.component,
          prefixCls = _this$props4.prefixCls,
          className = _this$props4.className,
          disabled = _this$props4.disabled,
          id = _this$props4.id,
          style = _this$props4.style,
          multiple = _this$props4.multiple,
          accept = _this$props4.accept,
          capture = _this$props4.capture,
          children = _this$props4.children,
          directory = _this$props4.directory,
          openFileDialogOnClick = _this$props4.openFileDialogOnClick,
          onMouseEnter = _this$props4.onMouseEnter,
          onMouseLeave = _this$props4.onMouseLeave,
          otherProps = (0,objectWithoutProperties/* default */.Z)(_this$props4, AjaxUploader_excluded);

      var cls = classnames_default()((_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, prefixCls, true), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-disabled"), disabled), (0,defineProperty/* default */.Z)(_classNames, className, className), _classNames)); // because input don't have directory/webkitdirectory type declaration

      var dirProps = directory ? {
        directory: 'directory',
        webkitdirectory: 'webkitdirectory'
      } : {};
      var events = disabled ? {} : {
        onClick: openFileDialogOnClick ? this.onClick : function () {},
        onKeyDown: openFileDialogOnClick ? this.onKeyDown : function () {},
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        onDrop: this.onFileDrop,
        onDragOver: this.onFileDrop,
        tabIndex: '0'
      };
      return /*#__PURE__*/react.createElement(Tag, (0,esm_extends/* default */.Z)({}, events, {
        className: cls,
        role: "button",
        style: style
      }), /*#__PURE__*/react.createElement("input", (0,esm_extends/* default */.Z)({}, pickAttrs(otherProps, {
        aria: true,
        data: true
      }), {
        id: id,
        type: "file",
        ref: this.saveFileInput,
        onClick: function onClick(e) {
          return e.stopPropagation();
        } // https://github.com/ant-design/ant-design/issues/19948
        ,
        key: this.state.uid,
        style: {
          display: 'none'
        },
        accept: accept
      }, dirProps, {
        multiple: multiple,
        onChange: this.onChange
      }, capture != null ? {
        capture: capture
      } : {})), children);
    }
  }]);

  return AjaxUploader;
}(react.Component);

/* harmony default export */ var es_AjaxUploader = (AjaxUploader);
;// CONCATENATED MODULE: ./node_modules/rc-upload/es/Upload.js






/* eslint react/prop-types:0 */



function Upload_empty() {}

var Upload = /*#__PURE__*/function (_Component) {
  (0,inherits/* default */.Z)(Upload, _Component);

  var _super = (0,createSuper/* default */.Z)(Upload);

  function Upload() {
    var _this;

    (0,classCallCheck/* default */.Z)(this, Upload);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.uploader = void 0;

    _this.saveUploader = function (node) {
      _this.uploader = node;
    };

    return _this;
  }

  (0,createClass/* default */.Z)(Upload, [{
    key: "abort",
    value: function abort(file) {
      this.uploader.abort(file);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement(es_AjaxUploader, (0,esm_extends/* default */.Z)({}, this.props, {
        ref: this.saveUploader
      }));
    }
  }]);

  return Upload;
}(react.Component);

Upload.defaultProps = {
  component: 'span',
  prefixCls: 'rc-upload',
  data: {},
  headers: {},
  name: 'file',
  multipart: false,
  onStart: Upload_empty,
  onError: Upload_empty,
  onSuccess: Upload_empty,
  multiple: false,
  beforeUpload: null,
  customRequest: null,
  withCredentials: false,
  openFileDialogOnClick: true
};
/* harmony default export */ var es_Upload = (Upload);
;// CONCATENATED MODULE: ./node_modules/rc-upload/es/index.js

/* harmony default export */ var rc_upload_es = (es_Upload);
;// CONCATENATED MODULE: ./node_modules/antd/es/upload/Dragger.js


var Dragger_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




var InternalDragger = function InternalDragger(_a, ref) {
  var style = _a.style,
      height = _a.height,
      restProps = Dragger_rest(_a, ["style", "height"]);

  return /*#__PURE__*/react.createElement(upload_Upload, (0,esm_extends/* default */.Z)({
    ref: ref
  }, restProps, {
    type: "drag",
    style: (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, style), {
      height: height
    })
  }));
};

var Dragger = /*#__PURE__*/react.forwardRef(InternalDragger);
Dragger.displayName = 'Dragger';
/* harmony default export */ var upload_Dragger = (Dragger);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/PaperClipOutlined.js
// This icon file is generated automatically.
var PaperClipOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 00174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z" } }] }, "name": "paper-clip", "theme": "outlined" };
/* harmony default export */ var asn_PaperClipOutlined = (PaperClipOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/PaperClipOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var PaperClipOutlined_PaperClipOutlined = function PaperClipOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_PaperClipOutlined
  }));
};

PaperClipOutlined_PaperClipOutlined.displayName = 'PaperClipOutlined';
/* harmony default export */ var icons_PaperClipOutlined = (/*#__PURE__*/react.forwardRef(PaperClipOutlined_PaperClipOutlined));
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/PictureTwoTone.js
// This icon file is generated automatically.
var PictureTwoTone = { "icon": function render(primaryColor, secondaryColor) { return { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2z", "fill": primaryColor } }, { "tag": "path", "attrs": { "d": "M424.6 765.8l-150.1-178L136 752.1V792h752v-30.4L658.1 489z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M136 652.7l132.4-157c3.2-3.8 9-3.8 12.2 0l144 170.7L652 396.8c3.2-3.8 9-3.8 12.2 0L888 662.2V232H136v420.7zM304 280a88 88 0 110 176 88 88 0 010-176z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M276 368a28 28 0 1056 0 28 28 0 10-56 0z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M304 456a88 88 0 100-176 88 88 0 000 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z", "fill": primaryColor } }] }; }, "name": "picture", "theme": "twotone" };
/* harmony default export */ var asn_PictureTwoTone = (PictureTwoTone);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/PictureTwoTone.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var PictureTwoTone_PictureTwoTone = function PictureTwoTone(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_PictureTwoTone
  }));
};

PictureTwoTone_PictureTwoTone.displayName = 'PictureTwoTone';
/* harmony default export */ var icons_PictureTwoTone = (/*#__PURE__*/react.forwardRef(PictureTwoTone_PictureTwoTone));
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/FileTwoTone.js
// This icon file is generated automatically.
var FileTwoTone = { "icon": function render(primaryColor, secondaryColor) { return { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M534 352V136H232v752h560V394H576a42 42 0 01-42-42z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0042 42h216v494z", "fill": primaryColor } }] }; }, "name": "file", "theme": "twotone" };
/* harmony default export */ var asn_FileTwoTone = (FileTwoTone);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/FileTwoTone.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var FileTwoTone_FileTwoTone = function FileTwoTone(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_FileTwoTone
  }));
};

FileTwoTone_FileTwoTone.displayName = 'FileTwoTone';
/* harmony default export */ var icons_FileTwoTone = (/*#__PURE__*/react.forwardRef(FileTwoTone_FileTwoTone));
;// CONCATENATED MODULE: ./node_modules/antd/es/upload/utils.js


function file2Obj(file) {
  return (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, file), {
    lastModified: file.lastModified,
    lastModifiedDate: file.lastModifiedDate,
    name: file.name,
    size: file.size,
    type: file.type,
    uid: file.uid,
    percent: 0,
    originFileObj: file
  });
}
/** Upload fileList. Replace file if exist or just push into it. */

function updateFileList(file, fileList) {
  var nextFileList = (0,toConsumableArray/* default */.Z)(fileList);

  var fileIndex = nextFileList.findIndex(function (_ref) {
    var uid = _ref.uid;
    return uid === file.uid;
  });

  if (fileIndex === -1) {
    nextFileList.push(file);
  } else {
    nextFileList[fileIndex] = file;
  }

  return nextFileList;
}
function getFileItem(file, fileList) {
  var matchKey = file.uid !== undefined ? 'uid' : 'name';
  return fileList.filter(function (item) {
    return item[matchKey] === file[matchKey];
  })[0];
}
function removeFileItem(file, fileList) {
  var matchKey = file.uid !== undefined ? 'uid' : 'name';
  var removed = fileList.filter(function (item) {
    return item[matchKey] !== file[matchKey];
  });

  if (removed.length === fileList.length) {
    return null;
  }

  return removed;
} // ==================== Default Image Preview ====================

var extname = function extname() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var temp = url.split('/');
  var filename = temp[temp.length - 1];
  var filenameWithoutSuffix = filename.split(/#|\?/)[0];
  return (/\.[^./\\]*$/.exec(filenameWithoutSuffix) || [''])[0];
};

var isImageFileType = function isImageFileType(type) {
  return type.indexOf('image/') === 0;
};

var isImageUrl = function isImageUrl(file) {
  if (file.type && !file.thumbUrl) {
    return isImageFileType(file.type);
  }

  var url = file.thumbUrl || file.url || '';
  var extension = extname(url);

  if (/^data:image\//.test(url) || /(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico)$/i.test(extension)) {
    return true;
  }

  if (/^data:/.test(url)) {
    // other file types of base64
    return false;
  }

  if (extension) {
    // other file types which have extension
    return false;
  }

  return true;
};
var MEASURE_SIZE = 200;
function previewImage(file) {
  return new Promise(function (resolve) {
    if (!file.type || !isImageFileType(file.type)) {
      resolve('');
      return;
    }

    var canvas = document.createElement('canvas');
    canvas.width = MEASURE_SIZE;
    canvas.height = MEASURE_SIZE;
    canvas.style.cssText = "position: fixed; left: 0; top: 0; width: ".concat(MEASURE_SIZE, "px; height: ").concat(MEASURE_SIZE, "px; z-index: 9999; display: none;");
    document.body.appendChild(canvas);
    var ctx = canvas.getContext('2d');
    var img = new Image();

    img.onload = function () {
      var width = img.width,
          height = img.height;
      var drawWidth = MEASURE_SIZE;
      var drawHeight = MEASURE_SIZE;
      var offsetX = 0;
      var offsetY = 0;

      if (width > height) {
        drawHeight = height * (MEASURE_SIZE / width);
        offsetY = -(drawHeight - drawWidth) / 2;
      } else {
        drawWidth = width * (MEASURE_SIZE / height);
        offsetX = -(drawWidth - drawHeight) / 2;
      }

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      var dataURL = canvas.toDataURL();
      document.body.removeChild(canvas);
      resolve(dataURL);
    };

    img.src = window.URL.createObjectURL(file);
  });
}
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/EyeOutlined.js + 1 modules
var EyeOutlined = __webpack_require__(5357);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/DeleteOutlined.js
// This icon file is generated automatically.
var DeleteOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" } }] }, "name": "delete", "theme": "outlined" };
/* harmony default export */ var asn_DeleteOutlined = (DeleteOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/DeleteOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var DeleteOutlined_DeleteOutlined = function DeleteOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_DeleteOutlined
  }));
};

DeleteOutlined_DeleteOutlined.displayName = 'DeleteOutlined';
/* harmony default export */ var icons_DeleteOutlined = (/*#__PURE__*/react.forwardRef(DeleteOutlined_DeleteOutlined));
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/DownloadOutlined.js
// This icon file is generated automatically.
var DownloadOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z" } }] }, "name": "download", "theme": "outlined" };
/* harmony default export */ var asn_DownloadOutlined = (DownloadOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/DownloadOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var DownloadOutlined_DownloadOutlined = function DownloadOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_DownloadOutlined
  }));
};

DownloadOutlined_DownloadOutlined.displayName = 'DownloadOutlined';
/* harmony default export */ var icons_DownloadOutlined = (/*#__PURE__*/react.forwardRef(DownloadOutlined_DownloadOutlined));
;// CONCATENATED MODULE: ./node_modules/antd/es/upload/UploadList/ListItem.js












var ListItem = /*#__PURE__*/react.forwardRef(function (_ref, ref) {
  var _classNames3;

  var prefixCls = _ref.prefixCls,
      className = _ref.className,
      style = _ref.style,
      locale = _ref.locale,
      listType = _ref.listType,
      file = _ref.file,
      items = _ref.items,
      progressProps = _ref.progress,
      iconRender = _ref.iconRender,
      actionIconRender = _ref.actionIconRender,
      itemRender = _ref.itemRender,
      isImgUrl = _ref.isImgUrl,
      showPreviewIcon = _ref.showPreviewIcon,
      showRemoveIcon = _ref.showRemoveIcon,
      showDownloadIcon = _ref.showDownloadIcon,
      customPreviewIcon = _ref.previewIcon,
      customRemoveIcon = _ref.removeIcon,
      customDownloadIcon = _ref.downloadIcon,
      onPreview = _ref.onPreview,
      onDownload = _ref.onDownload,
      onClose = _ref.onClose;

  var _a, _b; // Delay to show the progress bar


  var _React$useState = react.useState(false),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      showProgress = _React$useState2[0],
      setShowProgress = _React$useState2[1];

  var progressRafRef = react.useRef();
  react.useEffect(function () {
    progressRafRef.current = setTimeout(function () {
      setShowProgress(true);
    }, 300);
    return function () {
      window.clearTimeout(progressRafRef.current);
    };
  }, []); // This is used for legacy span make scrollHeight the wrong value.
  // We will force these to be `display: block` with non `picture-card`

  var spanClassName = "".concat(prefixCls, "-span");
  var iconNode = iconRender(file);
  var icon = /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-text-icon")
  }, iconNode);

  if (listType === 'picture' || listType === 'picture-card') {
    if (file.status === 'uploading' || !file.thumbUrl && !file.url) {
      var _classNames;

      var uploadingClassName = classnames_default()((_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-list-item-thumbnail"), true), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-list-item-file"), file.status !== 'uploading'), _classNames));
      icon = /*#__PURE__*/react.createElement("div", {
        className: uploadingClassName
      }, iconNode);
    } else {
      var _classNames2;

      var thumbnail = (isImgUrl === null || isImgUrl === void 0 ? void 0 : isImgUrl(file)) ? /*#__PURE__*/react.createElement("img", {
        src: file.thumbUrl || file.url,
        alt: file.name,
        className: "".concat(prefixCls, "-list-item-image")
      }) : iconNode;
      var aClassName = classnames_default()((_classNames2 = {}, (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-list-item-thumbnail"), true), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-list-item-file"), isImgUrl && !isImgUrl(file)), _classNames2));
      icon = /*#__PURE__*/react.createElement("a", {
        className: aClassName,
        onClick: function onClick(e) {
          return onPreview(file, e);
        },
        href: file.url || file.thumbUrl,
        target: "_blank",
        rel: "noopener noreferrer"
      }, thumbnail);
    }
  }

  var infoUploadingClass = classnames_default()((_classNames3 = {}, (0,defineProperty/* default */.Z)(_classNames3, "".concat(prefixCls, "-list-item"), true), (0,defineProperty/* default */.Z)(_classNames3, "".concat(prefixCls, "-list-item-").concat(file.status), true), (0,defineProperty/* default */.Z)(_classNames3, "".concat(prefixCls, "-list-item-list-type-").concat(listType), true), _classNames3));
  var linkProps = typeof file.linkProps === 'string' ? JSON.parse(file.linkProps) : file.linkProps;
  var removeIcon = showRemoveIcon ? actionIconRender((typeof customRemoveIcon === 'function' ? customRemoveIcon(file) : customRemoveIcon) || /*#__PURE__*/react.createElement(icons_DeleteOutlined, null), function () {
    return onClose(file);
  }, prefixCls, locale.removeFile) : null;
  var downloadIcon = showDownloadIcon && file.status === 'done' ? actionIconRender((typeof customDownloadIcon === 'function' ? customDownloadIcon(file) : customDownloadIcon) || /*#__PURE__*/react.createElement(icons_DownloadOutlined, null), function () {
    return onDownload(file);
  }, prefixCls, locale.downloadFile) : null;
  var downloadOrDelete = listType !== 'picture-card' && /*#__PURE__*/react.createElement("span", {
    key: "download-delete",
    className: classnames_default()("".concat(prefixCls, "-list-item-card-actions"), {
      picture: listType === 'picture'
    })
  }, downloadIcon, removeIcon);
  var listItemNameClass = classnames_default()("".concat(prefixCls, "-list-item-name"));
  var preview = file.url ? [/*#__PURE__*/react.createElement("a", (0,esm_extends/* default */.Z)({
    key: "view",
    target: "_blank",
    rel: "noopener noreferrer",
    className: listItemNameClass,
    title: file.name
  }, linkProps, {
    href: file.url,
    onClick: function onClick(e) {
      return onPreview(file, e);
    }
  }), file.name), downloadOrDelete] : [/*#__PURE__*/react.createElement("span", {
    key: "view",
    className: listItemNameClass,
    onClick: function onClick(e) {
      return onPreview(file, e);
    },
    title: file.name
  }, file.name), downloadOrDelete];
  var previewStyle = {
    pointerEvents: 'none',
    opacity: 0.5
  };
  var previewIcon = showPreviewIcon ? /*#__PURE__*/react.createElement("a", {
    href: file.url || file.thumbUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    style: file.url || file.thumbUrl ? undefined : previewStyle,
    onClick: function onClick(e) {
      return onPreview(file, e);
    },
    title: locale.previewFile
  }, typeof customPreviewIcon === 'function' ? customPreviewIcon(file) : customPreviewIcon || /*#__PURE__*/react.createElement(EyeOutlined/* default */.Z, null)) : null;
  var actions = listType === 'picture-card' && file.status !== 'uploading' && /*#__PURE__*/react.createElement("span", {
    className: "".concat(prefixCls, "-list-item-actions")
  }, previewIcon, file.status === 'done' && downloadIcon, removeIcon);
  var message;

  if (file.response && typeof file.response === 'string') {
    message = file.response;
  } else {
    message = ((_a = file.error) === null || _a === void 0 ? void 0 : _a.statusText) || ((_b = file.error) === null || _b === void 0 ? void 0 : _b.message) || locale.uploadError;
  }

  var iconAndPreview = /*#__PURE__*/react.createElement("span", {
    className: spanClassName
  }, icon, preview);

  var _React$useContext = react.useContext(config_provider_context/* ConfigContext */.E_),
      getPrefixCls = _React$useContext.getPrefixCls;

  var rootPrefixCls = getPrefixCls();
  var dom = /*#__PURE__*/react.createElement("div", {
    className: infoUploadingClass
  }, /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-list-item-info")
  }, iconAndPreview), actions, showProgress && /*#__PURE__*/react.createElement(rc_motion_es/* default */.Z, {
    motionName: "".concat(rootPrefixCls, "-fade"),
    visible: file.status === 'uploading',
    motionDeadline: 2000
  }, function (_ref2) {
    var motionClassName = _ref2.className;
    // show loading icon if upload progress listener is disabled
    var loadingProgress = 'percent' in file ? /*#__PURE__*/react.createElement(progress/* default */.Z, (0,esm_extends/* default */.Z)({}, progressProps, {
      type: "line",
      percent: file.percent
    })) : null;
    return /*#__PURE__*/react.createElement("div", {
      className: classnames_default()("".concat(prefixCls, "-list-item-progress"), motionClassName)
    }, loadingProgress);
  }));
  var listContainerNameClass = classnames_default()("".concat(prefixCls, "-list-").concat(listType, "-container"), className);
  var item = file.status === 'error' ? /*#__PURE__*/react.createElement(tooltip/* default */.Z, {
    title: message,
    getPopupContainer: function getPopupContainer(node) {
      return node.parentNode;
    }
  }, dom) : dom;
  return /*#__PURE__*/react.createElement("div", {
    className: listContainerNameClass,
    style: style,
    ref: ref
  }, itemRender ? itemRender(item, file, items, {
    download: onDownload.bind(null, file),
    preview: onPreview.bind(null, file),
    remove: onClose.bind(null, file)
  }) : item);
});
/* harmony default export */ var UploadList_ListItem = (ListItem);
;// CONCATENATED MODULE: ./node_modules/antd/es/upload/UploadList/index.js



















var listItemMotion = (0,esm_extends/* default */.Z)({}, motion/* default */.Z);

delete listItemMotion.onAppearEnd;
delete listItemMotion.onEnterEnd;
delete listItemMotion.onLeaveEnd;

var InternalUploadList = function InternalUploadList(_ref, ref) {
  var _classNames;

  var listType = _ref.listType,
      previewFile = _ref.previewFile,
      onPreview = _ref.onPreview,
      onDownload = _ref.onDownload,
      onRemove = _ref.onRemove,
      locale = _ref.locale,
      iconRender = _ref.iconRender,
      isImgUrl = _ref.isImageUrl,
      customizePrefixCls = _ref.prefixCls,
      _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      showPreviewIcon = _ref.showPreviewIcon,
      showRemoveIcon = _ref.showRemoveIcon,
      showDownloadIcon = _ref.showDownloadIcon,
      removeIcon = _ref.removeIcon,
      previewIcon = _ref.previewIcon,
      downloadIcon = _ref.downloadIcon,
      progress = _ref.progress,
      appendAction = _ref.appendAction,
      itemRender = _ref.itemRender;
  var forceUpdate = useForceUpdate();

  var _React$useState = react.useState(false),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      motionAppear = _React$useState2[0],
      setMotionAppear = _React$useState2[1]; // ============================= Effect =============================


  react.useEffect(function () {
    if (listType !== 'picture' && listType !== 'picture-card') {
      return;
    }

    (items || []).forEach(function (file) {
      if (typeof document === 'undefined' || typeof window === 'undefined' || !window.FileReader || !window.File || !(file.originFileObj instanceof File || file.originFileObj instanceof Blob) || file.thumbUrl !== undefined) {
        return;
      }

      file.thumbUrl = '';

      if (previewFile) {
        previewFile(file.originFileObj).then(function (previewDataUrl) {
          // Need append '' to avoid dead loop
          file.thumbUrl = previewDataUrl || '';
          forceUpdate();
        });
      }
    });
  }, [listType, items, previewFile]);
  react.useEffect(function () {
    setMotionAppear(true);
  }, []); // ============================= Events =============================

  var onInternalPreview = function onInternalPreview(file, e) {
    if (!onPreview) {
      return;
    }

    e === null || e === void 0 ? void 0 : e.preventDefault();
    return onPreview(file);
  };

  var onInternalDownload = function onInternalDownload(file) {
    if (typeof onDownload === 'function') {
      onDownload(file);
    } else if (file.url) {
      window.open(file.url);
    }
  };

  var onInternalClose = function onInternalClose(file) {
    onRemove === null || onRemove === void 0 ? void 0 : onRemove(file);
  };

  var internalIconRender = function internalIconRender(file) {
    if (iconRender) {
      return iconRender(file, listType);
    }

    var isLoading = file.status === 'uploading';
    var fileIcon = isImgUrl && isImgUrl(file) ? /*#__PURE__*/react.createElement(icons_PictureTwoTone, null) : /*#__PURE__*/react.createElement(icons_FileTwoTone, null);
    var icon = isLoading ? /*#__PURE__*/react.createElement(LoadingOutlined/* default */.Z, null) : /*#__PURE__*/react.createElement(icons_PaperClipOutlined, null);

    if (listType === 'picture') {
      icon = isLoading ? /*#__PURE__*/react.createElement(LoadingOutlined/* default */.Z, null) : fileIcon;
    } else if (listType === 'picture-card') {
      icon = isLoading ? locale.uploading : fileIcon;
    }

    return icon;
  };

  var actionIconRender = function actionIconRender(customIcon, callback, prefixCls, title) {
    var btnProps = {
      type: 'text',
      size: 'small',
      title: title,
      onClick: function onClick(e) {
        callback();

        if ((0,reactNode/* isValidElement */.l$)(customIcon) && customIcon.props.onClick) {
          customIcon.props.onClick(e);
        }
      },
      className: "".concat(prefixCls, "-list-item-card-actions-btn")
    };

    if ((0,reactNode/* isValidElement */.l$)(customIcon)) {
      var btnIcon = (0,reactNode/* cloneElement */.Tm)(customIcon, (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, customIcon.props), {
        onClick: function onClick() {}
      }));
      return /*#__PURE__*/react.createElement(es_button/* default */.Z, (0,esm_extends/* default */.Z)({}, btnProps, {
        icon: btnIcon
      }));
    }

    return /*#__PURE__*/react.createElement(es_button/* default */.Z, btnProps, /*#__PURE__*/react.createElement("span", null, customIcon));
  }; // ============================== Ref ===============================
  // Test needs


  react.useImperativeHandle(ref, function () {
    return {
      handlePreview: onInternalPreview,
      handleDownload: onInternalDownload
    };
  });

  var _React$useContext = react.useContext(config_provider_context/* ConfigContext */.E_),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction; // ============================= Render =============================


  var prefixCls = getPrefixCls('upload', customizePrefixCls);
  var listClassNames = classnames_default()((_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-list"), true), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-list-").concat(listType), true), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-list-rtl"), direction === 'rtl'), _classNames)); // >>> Motion config

  var motionKeyList = (0,toConsumableArray/* default */.Z)(items.map(function (file) {
    return {
      key: file.uid,
      file: file
    };
  }));

  var animationDirection = listType === 'picture-card' ? 'animate-inline' : 'animate'; // const transitionName = list.length === 0 ? '' : `${prefixCls}-${animationDirection}`;

  var motionConfig = {
    motionDeadline: 2000,
    motionName: "".concat(prefixCls, "-").concat(animationDirection),
    keys: motionKeyList,
    motionAppear: motionAppear
  };

  if (listType !== 'picture-card') {
    motionConfig = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, listItemMotion), motionConfig);
  }

  return /*#__PURE__*/react.createElement("div", {
    className: listClassNames
  }, /*#__PURE__*/react.createElement(rc_motion_es/* CSSMotionList */.V, (0,esm_extends/* default */.Z)({}, motionConfig, {
    component: false
  }), function (_ref2) {
    var key = _ref2.key,
        file = _ref2.file,
        motionClassName = _ref2.className,
        motionStyle = _ref2.style;
    return /*#__PURE__*/react.createElement(UploadList_ListItem, {
      key: key,
      locale: locale,
      prefixCls: prefixCls,
      className: motionClassName,
      style: motionStyle,
      file: file,
      items: items,
      progress: progress,
      listType: listType,
      isImgUrl: isImgUrl,
      showPreviewIcon: showPreviewIcon,
      showRemoveIcon: showRemoveIcon,
      showDownloadIcon: showDownloadIcon,
      removeIcon: removeIcon,
      previewIcon: previewIcon,
      downloadIcon: downloadIcon,
      iconRender: internalIconRender,
      actionIconRender: actionIconRender,
      itemRender: itemRender,
      onPreview: onInternalPreview,
      onDownload: onInternalDownload,
      onClose: onInternalClose
    });
  }), appendAction && /*#__PURE__*/react.createElement(rc_motion_es/* default */.Z, motionConfig, function (_ref3) {
    var motionClassName = _ref3.className,
        motionStyle = _ref3.style;
    return (0,reactNode/* cloneElement */.Tm)(appendAction, function (oriProps) {
      return {
        className: classnames_default()(oriProps.className, motionClassName),
        style: (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, motionStyle), oriProps.style)
      };
    });
  }));
};

var UploadList = /*#__PURE__*/react.forwardRef(InternalUploadList);
UploadList.displayName = 'UploadList';
UploadList.defaultProps = {
  listType: 'text',
  progress: {
    strokeWidth: 2,
    showInfo: false
  },
  showRemoveIcon: true,
  showDownloadIcon: false,
  showPreviewIcon: true,
  previewFile: previewImage,
  isImageUrl: isImageUrl
};
/* harmony default export */ var upload_UploadList = (UploadList);
;// CONCATENATED MODULE: ./node_modules/antd/es/upload/Upload.js







var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};












var LIST_IGNORE = "__LIST_IGNORE_".concat(Date.now(), "__");

var InternalUpload = function InternalUpload(props, ref) {
  var _classNames2;

  var fileList = props.fileList,
      defaultFileList = props.defaultFileList,
      onRemove = props.onRemove,
      showUploadList = props.showUploadList,
      listType = props.listType,
      onPreview = props.onPreview,
      onDownload = props.onDownload,
      onChange = props.onChange,
      onDrop = props.onDrop,
      previewFile = props.previewFile,
      disabled = props.disabled,
      propLocale = props.locale,
      iconRender = props.iconRender,
      isImageUrl = props.isImageUrl,
      progress = props.progress,
      customizePrefixCls = props.prefixCls,
      className = props.className,
      type = props.type,
      children = props.children,
      style = props.style,
      itemRender = props.itemRender,
      maxCount = props.maxCount;

  var _useMergedState = (0,useMergedState/* default */.Z)(defaultFileList || [], {
    value: fileList,
    postState: function postState(list) {
      return list !== null && list !== void 0 ? list : [];
    }
  }),
      _useMergedState2 = (0,slicedToArray/* default */.Z)(_useMergedState, 2),
      mergedFileList = _useMergedState2[0],
      setMergedFileList = _useMergedState2[1];

  var _React$useState = react.useState('drop'),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      dragState = _React$useState2[0],
      setDragState = _React$useState2[1];

  var upload = react.useRef();
  react.useEffect(function () {
    (0,devWarning/* default */.Z)('fileList' in props || !('value' in props), 'Upload', '`value` is not a valid prop, do you mean `fileList`?');
    (0,devWarning/* default */.Z)(!('transformFile' in props), 'Upload', '`transformFile` is deprecated. Please use `beforeUpload` directly.');
  }, []); // Control mode will auto fill file uid if not provided

  react.useMemo(function () {
    var timestamp = Date.now();
    (fileList || []).forEach(function (file, index) {
      if (!file.uid && !Object.isFrozen(file)) {
        file.uid = "__AUTO__".concat(timestamp, "_").concat(index, "__");
      }
    });
  }, [fileList]);

  var onInternalChange = function onInternalChange(file, changedFileList, event) {
    var cloneList = (0,toConsumableArray/* default */.Z)(changedFileList); // Cut to match count


    if (maxCount === 1) {
      cloneList = cloneList.slice(-1);
    } else if (maxCount) {
      cloneList = cloneList.slice(0, maxCount);
    }

    setMergedFileList(cloneList);
    var changeInfo = {
      file: file,
      fileList: cloneList
    };

    if (event) {
      changeInfo.event = event;
    }

    onChange === null || onChange === void 0 ? void 0 : onChange(changeInfo);
  };

  var mergedBeforeUpload = function mergedBeforeUpload(file, fileListArgs) {
    return __awaiter(void 0, void 0, void 0, /*#__PURE__*/regenerator_default().mark(function _callee() {
      var beforeUpload, transformFile, parsedFile, result;
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              beforeUpload = props.beforeUpload, transformFile = props.transformFile;
              parsedFile = file;

              if (!beforeUpload) {
                _context.next = 13;
                break;
              }

              _context.next = 5;
              return beforeUpload(file, fileListArgs);

            case 5:
              result = _context.sent;

              if (!(result === false)) {
                _context.next = 8;
                break;
              }

              return _context.abrupt("return", false);

            case 8:
              // Hack for LIST_IGNORE, we add additional info to remove from the list
              delete file[LIST_IGNORE];

              if (!(result === LIST_IGNORE)) {
                _context.next = 12;
                break;
              }

              Object.defineProperty(file, LIST_IGNORE, {
                value: true,
                configurable: true
              });
              return _context.abrupt("return", false);

            case 12:
              if ((0,esm_typeof/* default */.Z)(result) === 'object' && result) {
                parsedFile = result;
              }

            case 13:
              if (!transformFile) {
                _context.next = 17;
                break;
              }

              _context.next = 16;
              return transformFile(parsedFile);

            case 16:
              parsedFile = _context.sent;

            case 17:
              return _context.abrupt("return", parsedFile);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
  };

  var onBatchStart = function onBatchStart(batchFileInfoList) {
    // Skip file which marked as `LIST_IGNORE`, these file will not add to file list
    var filteredFileInfoList = batchFileInfoList.filter(function (info) {
      return !info.file[LIST_IGNORE];
    }); // Nothing to do since no file need upload

    if (!filteredFileInfoList.length) {
      return;
    }

    var objectFileList = filteredFileInfoList.map(function (info) {
      return file2Obj(info.file);
    }); // Concat new files with prev files

    var newFileList = (0,toConsumableArray/* default */.Z)(mergedFileList);

    objectFileList.forEach(function (fileObj) {
      // Replace file if exist
      newFileList = updateFileList(fileObj, newFileList);
    });
    objectFileList.forEach(function (fileObj, index) {
      // Repeat trigger `onChange` event for compatible
      var triggerFileObj = fileObj;

      if (!filteredFileInfoList[index].parsedFile) {
        // `beforeUpload` return false
        var originFileObj = fileObj.originFileObj;
        var clone;

        try {
          clone = new File([originFileObj], originFileObj.name, {
            type: originFileObj.type
          });
        } catch (e) {
          clone = new Blob([originFileObj], {
            type: originFileObj.type
          });
          clone.name = originFileObj.name;
          clone.lastModifiedDate = new Date();
          clone.lastModified = new Date().getTime();
        }

        clone.uid = fileObj.uid;
        triggerFileObj = clone;
      } else {
        // Inject `uploading` status
        fileObj.status = 'uploading';
      }

      onInternalChange(triggerFileObj, newFileList);
    });
  };

  var onSuccess = function onSuccess(response, file, xhr) {
    try {
      if (typeof response === 'string') {
        response = JSON.parse(response);
      }
    } catch (e) {
      /* do nothing */
    } // removed


    if (!getFileItem(file, mergedFileList)) {
      return;
    }

    var targetItem = file2Obj(file);
    targetItem.status = 'done';
    targetItem.percent = 100;
    targetItem.response = response;
    targetItem.xhr = xhr;
    var nextFileList = updateFileList(targetItem, mergedFileList);
    onInternalChange(targetItem, nextFileList);
  };

  var onProgress = function onProgress(e, file) {
    // removed
    if (!getFileItem(file, mergedFileList)) {
      return;
    }

    var targetItem = file2Obj(file);
    targetItem.status = 'uploading';
    targetItem.percent = e.percent;
    var nextFileList = updateFileList(targetItem, mergedFileList);
    onInternalChange(targetItem, nextFileList, e);
  };

  var onError = function onError(error, response, file) {
    // removed
    if (!getFileItem(file, mergedFileList)) {
      return;
    }

    var targetItem = file2Obj(file);
    targetItem.error = error;
    targetItem.response = response;
    targetItem.status = 'error';
    var nextFileList = updateFileList(targetItem, mergedFileList);
    onInternalChange(targetItem, nextFileList);
  };

  var handleRemove = function handleRemove(file) {
    var currentFile;
    Promise.resolve(typeof onRemove === 'function' ? onRemove(file) : onRemove).then(function (ret) {
      var _a; // Prevent removing file


      if (ret === false) {
        return;
      }

      var removedFileList = removeFileItem(file, mergedFileList);

      if (removedFileList) {
        currentFile = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, file), {
          status: 'removed'
        });
        mergedFileList === null || mergedFileList === void 0 ? void 0 : mergedFileList.forEach(function (item) {
          var matchKey = currentFile.uid !== undefined ? 'uid' : 'name';

          if (item[matchKey] === currentFile[matchKey] && !Object.isFrozen(item)) {
            item.status = 'removed';
          }
        });
        (_a = upload.current) === null || _a === void 0 ? void 0 : _a.abort(currentFile);
        onInternalChange(currentFile, removedFileList);
      }
    });
  };

  var onFileDrop = function onFileDrop(e) {
    setDragState(e.type);

    if (e.type === 'drop') {
      onDrop === null || onDrop === void 0 ? void 0 : onDrop(e);
    }
  }; // Test needs


  react.useImperativeHandle(ref, function () {
    return {
      onBatchStart: onBatchStart,
      onSuccess: onSuccess,
      onProgress: onProgress,
      onError: onError,
      fileList: mergedFileList,
      upload: upload.current
    };
  });

  var _React$useContext = react.useContext(config_provider_context/* ConfigContext */.E_),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var prefixCls = getPrefixCls('upload', customizePrefixCls);

  var rcUploadProps = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({
    onBatchStart: onBatchStart,
    onError: onError,
    onProgress: onProgress,
    onSuccess: onSuccess
  }, props), {
    prefixCls: prefixCls,
    beforeUpload: mergedBeforeUpload,
    onChange: undefined
  });

  delete rcUploadProps.className;
  delete rcUploadProps.style; // Remove id to avoid open by label when trigger is hidden
  // !children: https://github.com/ant-design/ant-design/issues/14298
  // disabled: https://github.com/ant-design/ant-design/issues/16478
  //           https://github.com/ant-design/ant-design/issues/24197

  if (!children || disabled) {
    delete rcUploadProps.id;
  }

  var renderUploadList = function renderUploadList(button) {
    return showUploadList ? /*#__PURE__*/react.createElement(LocaleReceiver/* default */.Z, {
      componentName: "Upload",
      defaultLocale: locale_default/* default.Upload */.Z.Upload
    }, function (locale) {
      var _ref = typeof showUploadList === 'boolean' ? {} : showUploadList,
          showRemoveIcon = _ref.showRemoveIcon,
          showPreviewIcon = _ref.showPreviewIcon,
          showDownloadIcon = _ref.showDownloadIcon,
          removeIcon = _ref.removeIcon,
          previewIcon = _ref.previewIcon,
          downloadIcon = _ref.downloadIcon;

      return /*#__PURE__*/react.createElement(upload_UploadList, {
        listType: listType,
        items: mergedFileList,
        previewFile: previewFile,
        onPreview: onPreview,
        onDownload: onDownload,
        onRemove: handleRemove,
        showRemoveIcon: !disabled && showRemoveIcon,
        showPreviewIcon: showPreviewIcon,
        showDownloadIcon: showDownloadIcon,
        removeIcon: removeIcon,
        previewIcon: previewIcon,
        downloadIcon: downloadIcon,
        iconRender: iconRender,
        locale: (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, locale), propLocale),
        isImageUrl: isImageUrl,
        progress: progress,
        appendAction: button,
        itemRender: itemRender
      });
    }) : button;
  };

  if (type === 'drag') {
    var _classNames;

    var dragCls = classnames_default()(prefixCls, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-drag"), true), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-drag-uploading"), mergedFileList.some(function (file) {
      return file.status === 'uploading';
    })), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-drag-hover"), dragState === 'dragover'), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-disabled"), disabled), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
    return /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("div", {
      className: dragCls,
      onDrop: onFileDrop,
      onDragOver: onFileDrop,
      onDragLeave: onFileDrop,
      style: style
    }, /*#__PURE__*/react.createElement(rc_upload_es, (0,esm_extends/* default */.Z)({}, rcUploadProps, {
      ref: upload,
      className: "".concat(prefixCls, "-btn")
    }), /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-drag-container")
    }, children))), renderUploadList());
  }

  var uploadButtonCls = classnames_default()(prefixCls, (_classNames2 = {}, (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-select"), true), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-select-").concat(listType), true), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-disabled"), disabled), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames2));
  var uploadButton = /*#__PURE__*/react.createElement("div", {
    className: uploadButtonCls,
    style: children ? undefined : {
      display: 'none'
    }
  }, /*#__PURE__*/react.createElement(rc_upload_es, (0,esm_extends/* default */.Z)({}, rcUploadProps, {
    ref: upload
  })));

  if (listType === 'picture-card') {
    return /*#__PURE__*/react.createElement("span", {
      className: classnames_default()("".concat(prefixCls, "-picture-card-wrapper"), className)
    }, renderUploadList(uploadButton));
  }

  return /*#__PURE__*/react.createElement("span", {
    className: className
  }, uploadButton, renderUploadList());
};

var ForwardUpload = /*#__PURE__*/react.forwardRef(InternalUpload);
var Upload_Upload = ForwardUpload;
Upload_Upload.Dragger = upload_Dragger;
Upload_Upload.LIST_IGNORE = LIST_IGNORE;
Upload_Upload.displayName = 'Upload';
Upload_Upload.defaultProps = {
  type: 'select',
  multiple: false,
  action: '',
  data: {},
  accept: '',
  showUploadList: true,
  listType: 'text',
  className: '',
  disabled: false,
  supportServerRender: true
};
/* harmony default export */ var upload_Upload = (Upload_Upload);
;// CONCATENATED MODULE: ./node_modules/antd/es/upload/index.js


upload_Upload.Dragger = upload_Dragger;
/* harmony default export */ var es_upload = (upload_Upload);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/UploadOutlined.js
// This icon file is generated automatically.
var UploadOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z" } }] }, "name": "upload", "theme": "outlined" };
/* harmony default export */ var asn_UploadOutlined = (UploadOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/UploadOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var UploadOutlined_UploadOutlined = function UploadOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_UploadOutlined
  }));
};

UploadOutlined_UploadOutlined.displayName = 'UploadOutlined';
/* harmony default export */ var icons_UploadOutlined = (/*#__PURE__*/react.forwardRef(UploadOutlined_UploadOutlined));
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(9669);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// CONCATENATED MODULE: ./src/pages/demo/fileUpload/index.js









function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || fileUpload_unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return fileUpload_arrayLikeToArray(arr); }

function fileUpload_slicedToArray(arr, i) { return fileUpload_arrayWithHoles(arr) || fileUpload_iterableToArrayLimit(arr, i) || fileUpload_unsupportedIterableToArray(arr, i) || fileUpload_nonIterableRest(); }

function fileUpload_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function fileUpload_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return fileUpload_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return fileUpload_arrayLikeToArray(o, minLen); }

function fileUpload_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function fileUpload_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function fileUpload_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var FileUpload = function FileUpload() {
  var _useState = (0,react.useState)([]),
      _useState2 = fileUpload_slicedToArray(_useState, 2),
      fileList = _useState2[0],
      setFileList = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = fileUpload_slicedToArray(_useState3, 2),
      uploading = _useState4[0],
      setUploading = _useState4[1];

  var _useState5 = (0,react.useState)(0),
      _useState6 = fileUpload_slicedToArray(_useState5, 2),
      percent = _useState6[0],
      setPercent = _useState6[1];

  var handleUpload = function handleUpload() {
    var formData = new FormData();
    fileList.forEach(function (file) {
      formData.append('files[]', file);
    });
    setUploading(true);
    axios_default()({
      url: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      method: 'post',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      data: formData,
      onUploadProgress: function onUploadProgress(progressEvent) {
        // Do whatever you want with the native progress event
        var completedPercent = Math.round(progressEvent.loaded * 100 / progressEvent.total);
        setPercent(completedPercent);
      }
    }).then(function (response) {}).catch(function (error) {
      setUploading(false);

      if (error.response) {} else if (error.request) {} else {}

      setPercent(0);

      message/* default.error */.ZP.error(error.message); // console.log(error.config)

    });
  };

  var props = {
    onRemove: function onRemove(file) {
      var index = fileList.indexOf(file);
      var newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: function beforeUpload(file) {
      setFileList(function (preFileList) {
        return [].concat(_toConsumableArray(preFileList), [file]);
      });
      return false;
    },
    fileList: fileList,
    multiple: true
  };
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(es_upload, props, /*#__PURE__*/react.createElement(es_button/* default */.Z, {
    icon: /*#__PURE__*/react.createElement(icons_UploadOutlined, null)
  }, "Click to Upload")), /*#__PURE__*/react.createElement(es_button/* default */.Z, {
    type: "primary",
    onClick: handleUpload,
    disabled: fileList.length === 0,
    loading: uploading,
    style: {
      marginTop: 16
    }
  }, uploading ? 'Uploading' : 'Start Upload'), "FileList: ".concat(JSON.stringify(fileList, null, 2)), "percent: ".concat(percent), /*#__PURE__*/react.createElement(progress/* default */.Z, {
    percent: percent
  }));
};

/* harmony default export */ var demo_fileUpload = (FileUpload);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/Icon.js
var Icon = __webpack_require__(6165);
// EXTERNAL MODULE: ./src/assets/svg/light.svg
var light = __webpack_require__(5299);
;// CONCATENATED MODULE: ./src/pages/demo/tsDemo/User.tsx




var UserDemo = function UserDemo(_ref) {
  var children = _ref.children,
      user = _ref.user;
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", null, user.name), /*#__PURE__*/react.createElement("div", null, user.age), /*#__PURE__*/react.createElement("div", null, user.address), /*#__PURE__*/react.createElement("div", null, user.dob.toDateString()), /*#__PURE__*/react.createElement(Icon/* default */.Z, {
    component: light/* default */.Z
  }));
};

/* harmony default export */ var User = (UserDemo);
;// CONCATENATED MODULE: ./src/pages/demo/tsDemo/index.tsx
function tsDemo_slicedToArray(arr, i) { return tsDemo_arrayWithHoles(arr) || tsDemo_iterableToArrayLimit(arr, i) || tsDemo_unsupportedIterableToArray(arr, i) || tsDemo_nonIterableRest(); }

function tsDemo_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function tsDemo_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return tsDemo_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return tsDemo_arrayLikeToArray(o, minLen); }

function tsDemo_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function tsDemo_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function tsDemo_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var TsDemo = function TsDemo() {
  var _useGetFetch = useGetFetch('/faker/shops'),
      _useGetFetch2 = tsDemo_slicedToArray(_useGetFetch, 2),
      booksLoading = _useGetFetch2[0],
      booksError = _useGetFetch2[1];

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", null, "TSX is cool!"), /*#__PURE__*/react.createElement("h4", null, "ShopsList:"), /*#__PURE__*/react.createElement("h4", null, booksLoading && 'Books Loading...'), /*#__PURE__*/react.createElement("h4", null, booksError && 'error'), /*#__PURE__*/react.createElement(User, {
    user: {
      name: 'wkylin',
      age: 16,
      address: 'shanghai',
      dob: new Date('2022-01-01')
    }
  }));
};

/* harmony default export */ var tsDemo = (TsDemo);
;// CONCATENATED MODULE: ./src/pages/demo/index.js













function demo_slicedToArray(arr, i) { return demo_arrayWithHoles(arr) || demo_iterableToArrayLimit(arr, i) || demo_unsupportedIterableToArray(arr, i) || demo_nonIterableRest(); }

function demo_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function demo_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return demo_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return demo_arrayLikeToArray(o, minLen); }

function demo_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function demo_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function demo_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


 // import React, { useState, useEffect } from 'react'
// import { reqFetch } from '@src/service'







var columns = [{
  title: 'Name',
  dataIndex: 'name',
  width: 150
}, {
  title: 'Age',
  dataIndex: 'age',
  width: 150
}, {
  title: 'Address',
  dataIndex: 'address'
}];
var options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake'
    }]
  }]
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men'
    }]
  }]
}];

var ProDemo = function ProDemo() {
  var inReducer = (0,react_redux_es/* useSelector */.v9)(function (state) {
    return state.inReducer;
  });
  var deReducer = (0,react_redux_es/* useSelector */.v9)(function (state) {
    return state.deReducer;
  });
  var dispatch = (0,react_redux_es/* useDispatch */.I0)();

  var _useReqFetch = useReqFetch('/faker/app/api/user/list', {
    method: 'GET'
  }),
      _useReqFetch2 = demo_slicedToArray(_useReqFetch, 3),
      res = _useReqFetch2[0],
      loading = _useReqFetch2[1],
      error = _useReqFetch2[2];

  var _useGetFetch = useGetFetch('/faker/shops'),
      _useGetFetch2 = demo_slicedToArray(_useGetFetch, 3),
      booksRes = _useGetFetch2[0],
      booksLoading = _useGetFetch2[1],
      booksError = _useGetFetch2[2]; // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState(false)
  // const [res, setRes] = useState([])
  // const useAsyncFetch = async (canceled, controller) => {
  //   try {
  //     if (loading) return
  //     setLoading(true)
  //     const res = await reqFetch('/mocker/app/api/user/list', {
  //       method: 'GET',
  //       controller,
  //     })
  //     if (!canceled) {
  //       setRes(res)
  //     }
  //   } catch (error) {
  //     setError(true)
  //   } finally {
  //     setLoading(false)
  //   }
  // }
  // useEffect(() => {
  //   const controller = new AbortController()
  //   let canceled = false
  //   useAsyncFetch(canceled, controller)
  //   return () => {
  //     setRes(() => {})
  //     canceled = true
  //     controller.abort()
  //   }
  // }, [])


  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h2", null, "\u9879\u76EE\u6587\u6863", /*#__PURE__*/react.createElement("span", {
    style: {
      fontSize: 12,
      color: '#999',
      margin: '0 10px'
    }
  }, "\u5F85\u5B8C\u5584")), /*#__PURE__*/react.createElement("h4", null, "Mock API \u793A\u4F8B"), /*#__PURE__*/react.createElement("h4", null, "useFetch: ", loading ? 'Loading...' : error ? 'error' : JSON.stringify(res, null, 2)), /*#__PURE__*/react.createElement("h4", null, "useFetch: ", booksLoading ? 'Books Loading...' : booksError ? 'error' : JSON.stringify(booksRes, null, 2)), /*#__PURE__*/react.createElement("h4", null, "Redux \u793A\u4F8B:"), /*#__PURE__*/react.createElement(space/* default */.Z, null, /*#__PURE__*/react.createElement(space/* default */.Z, null, /*#__PURE__*/react.createElement(es_button/* default */.Z, {
    type: "primary",
    onClick: function onClick() {
      return dispatch(actions/* default.inAction.increment */.Z.inAction.increment(1));
    }
  }, "Increment"), inReducer.inNumber), /*#__PURE__*/react.createElement(space/* default */.Z, null, /*#__PURE__*/react.createElement(es_button/* default */.Z, {
    onClick: function onClick() {
      return dispatch(actions/* default.deAction.decrement */.Z.deAction.decrement(2));
    }
  }, "Decrement"), deReducer.deNumber)), /*#__PURE__*/react.createElement("h4", null, "ErrorBoundary"), /*#__PURE__*/react.createElement(stateful_ErrorBoundary, null, /*#__PURE__*/react.createElement(shopsList, null)), /*#__PURE__*/react.createElement("h4", null, "File Upload"), /*#__PURE__*/react.createElement(demo_fileUpload, null), /*#__PURE__*/react.createElement(es_select, {
    placeholder: "Select a person",
    optionFilterProp: "children"
  }, /*#__PURE__*/react.createElement(es_select.Option, {
    value: "jack"
  }, "Jack"), /*#__PURE__*/react.createElement(es_select.Option, {
    value: "lucy"
  }, "Lucy"), /*#__PURE__*/react.createElement(es_select.Option, {
    value: "tom"
  }, "Tom")), /*#__PURE__*/react.createElement(table, {
    columns: columns,
    dataSource: [],
    pagination: {
      pageSize: 50
    },
    scroll: {
      y: 240
    }
  }), /*#__PURE__*/react.createElement(cascader, {
    options: options,
    expandTrigger: "hover",
    placeholder: "Please select"
  }), /*#__PURE__*/react.createElement(tsDemo, null), /*#__PURE__*/react.createElement(tabs/* default */.Z, {
    defaultActiveKey: "1"
  }, /*#__PURE__*/react.createElement(tabs/* default.TabPane */.Z.TabPane, {
    tab: "Tab 1",
    key: "1"
  }, "Content of Tab Pane 1"), /*#__PURE__*/react.createElement(tabs/* default.TabPane */.Z.TabPane, {
    tab: "Tab 2",
    key: "2"
  }, "Content of Tab Pane 2"), /*#__PURE__*/react.createElement(tabs/* default.TabPane */.Z.TabPane, {
    tab: "Tab 3",
    key: "3"
  }, "Content of Tab Pane 3")), /*#__PURE__*/react.createElement("div", {
    style: {
      height: 400
    }
  }, "Height For Scroll"));
};

/* harmony default export */ var demo = (ProDemo);

/***/ }),

/***/ 7147:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Headers": function() { return /* binding */ Headers; },
/* harmony export */   "Request": function() { return /* binding */ Request; },
/* harmony export */   "Response": function() { return /* binding */ Response; },
/* harmony export */   "DOMException": function() { return /* binding */ DOMException; },
/* harmony export */   "fetch": function() { return /* binding */ fetch; }
/* harmony export */ });
var global =
  (typeof globalThis !== 'undefined' && globalThis) ||
  (typeof self !== 'undefined' && self) ||
  (typeof global !== 'undefined' && global)

var support = {
  searchParams: 'URLSearchParams' in global,
  iterable: 'Symbol' in global && 'iterator' in Symbol,
  blob:
    'FileReader' in global &&
    'Blob' in global &&
    (function() {
      try {
        new Blob()
        return true
      } catch (e) {
        return false
      }
    })(),
  formData: 'FormData' in global,
  arrayBuffer: 'ArrayBuffer' in global
}

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj)
}

if (support.arrayBuffer) {
  var viewClasses = [
    '[object Int8Array]',
    '[object Uint8Array]',
    '[object Uint8ClampedArray]',
    '[object Int16Array]',
    '[object Uint16Array]',
    '[object Int32Array]',
    '[object Uint32Array]',
    '[object Float32Array]',
    '[object Float64Array]'
  ]

  var isArrayBufferView =
    ArrayBuffer.isView ||
    function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name)
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === '') {
    throw new TypeError('Invalid character in header field name: "' + name + '"')
  }
  return name.toLowerCase()
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value)
  }
  return value
}

// Build a destructive iterator for the value list
function iteratorFor(items) {
  var iterator = {
    next: function() {
      var value = items.shift()
      return {done: value === undefined, value: value}
    }
  }

  if (support.iterable) {
    iterator[Symbol.iterator] = function() {
      return iterator
    }
  }

  return iterator
}

function Headers(headers) {
  this.map = {}

  if (headers instanceof Headers) {
    headers.forEach(function(value, name) {
      this.append(name, value)
    }, this)
  } else if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      this.append(header[0], header[1])
    }, this)
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.append(name, headers[name])
    }, this)
  }
}

Headers.prototype.append = function(name, value) {
  name = normalizeName(name)
  value = normalizeValue(value)
  var oldValue = this.map[name]
  this.map[name] = oldValue ? oldValue + ', ' + value : value
}

Headers.prototype['delete'] = function(name) {
  delete this.map[normalizeName(name)]
}

Headers.prototype.get = function(name) {
  name = normalizeName(name)
  return this.has(name) ? this.map[name] : null
}

Headers.prototype.has = function(name) {
  return this.map.hasOwnProperty(normalizeName(name))
}

Headers.prototype.set = function(name, value) {
  this.map[normalizeName(name)] = normalizeValue(value)
}

Headers.prototype.forEach = function(callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this)
    }
  }
}

Headers.prototype.keys = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push(name)
  })
  return iteratorFor(items)
}

Headers.prototype.values = function() {
  var items = []
  this.forEach(function(value) {
    items.push(value)
  })
  return iteratorFor(items)
}

Headers.prototype.entries = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push([name, value])
  })
  return iteratorFor(items)
}

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries
}

function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'))
  }
  body.bodyUsed = true
}

function fileReaderReady(reader) {
  return new Promise(function(resolve, reject) {
    reader.onload = function() {
      resolve(reader.result)
    }
    reader.onerror = function() {
      reject(reader.error)
    }
  })
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsArrayBuffer(blob)
  return promise
}

function readBlobAsText(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsText(blob)
  return promise
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf)
  var chars = new Array(view.length)

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i])
  }
  return chars.join('')
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0)
  } else {
    var view = new Uint8Array(buf.byteLength)
    view.set(new Uint8Array(buf))
    return view.buffer
  }
}

function Body() {
  this.bodyUsed = false

  this._initBody = function(body) {
    /*
      fetch-mock wraps the Response object in an ES6 Proxy to
      provide useful test harness features such as flush. However, on
      ES5 browsers without fetch or Proxy support pollyfills must be used;
      the proxy-pollyfill is unable to proxy an attribute unless it exists
      on the object before the Proxy is created. This change ensures
      Response.bodyUsed exists on the instance, while maintaining the
      semantic of setting Request.bodyUsed in the constructor before
      _initBody is called.
    */
    this.bodyUsed = this.bodyUsed
    this._bodyInit = body
    if (!body) {
      this._bodyText = ''
    } else if (typeof body === 'string') {
      this._bodyText = body
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString()
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer)
      // IE 10-11 can't handle a DataView body.
      this._bodyInit = new Blob([this._bodyArrayBuffer])
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body)
    } else {
      this._bodyText = body = Object.prototype.toString.call(body)
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8')
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type)
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
      }
    }
  }

  if (support.blob) {
    this.blob = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob')
      } else {
        return Promise.resolve(new Blob([this._bodyText]))
      }
    }

    this.arrayBuffer = function() {
      if (this._bodyArrayBuffer) {
        var isConsumed = consumed(this)
        if (isConsumed) {
          return isConsumed
        }
        if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
          return Promise.resolve(
            this._bodyArrayBuffer.buffer.slice(
              this._bodyArrayBuffer.byteOffset,
              this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
            )
          )
        } else {
          return Promise.resolve(this._bodyArrayBuffer)
        }
      } else {
        return this.blob().then(readBlobAsArrayBuffer)
      }
    }
  }

  this.text = function() {
    var rejected = consumed(this)
    if (rejected) {
      return rejected
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob)
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text')
    } else {
      return Promise.resolve(this._bodyText)
    }
  }

  if (support.formData) {
    this.formData = function() {
      return this.text().then(decode)
    }
  }

  this.json = function() {
    return this.text().then(JSON.parse)
  }

  return this
}

// HTTP methods whose capitalization should be normalized
var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

function normalizeMethod(method) {
  var upcased = method.toUpperCase()
  return methods.indexOf(upcased) > -1 ? upcased : method
}

function Request(input, options) {
  if (!(this instanceof Request)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
  }

  options = options || {}
  var body = options.body

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read')
    }
    this.url = input.url
    this.credentials = input.credentials
    if (!options.headers) {
      this.headers = new Headers(input.headers)
    }
    this.method = input.method
    this.mode = input.mode
    this.signal = input.signal
    if (!body && input._bodyInit != null) {
      body = input._bodyInit
      input.bodyUsed = true
    }
  } else {
    this.url = String(input)
  }

  this.credentials = options.credentials || this.credentials || 'same-origin'
  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers)
  }
  this.method = normalizeMethod(options.method || this.method || 'GET')
  this.mode = options.mode || this.mode || null
  this.signal = options.signal || this.signal
  this.referrer = null

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests')
  }
  this._initBody(body)

  if (this.method === 'GET' || this.method === 'HEAD') {
    if (options.cache === 'no-store' || options.cache === 'no-cache') {
      // Search for a '_' parameter in the query string
      var reParamSearch = /([?&])_=[^&]*/
      if (reParamSearch.test(this.url)) {
        // If it already exists then set the value with the current time
        this.url = this.url.replace(reParamSearch, '$1_=' + new Date().getTime())
      } else {
        // Otherwise add a new '_' parameter to the end with the current time
        var reQueryString = /\?/
        this.url += (reQueryString.test(this.url) ? '&' : '?') + '_=' + new Date().getTime()
      }
    }
  }
}

Request.prototype.clone = function() {
  return new Request(this, {body: this._bodyInit})
}

function decode(body) {
  var form = new FormData()
  body
    .trim()
    .split('&')
    .forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
  return form
}

function parseHeaders(rawHeaders) {
  var headers = new Headers()
  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
  // Avoiding split via regex to work around a common IE11 bug with the core-js 3.6.0 regex polyfill
  // https://github.com/github/fetch/issues/748
  // https://github.com/zloirock/core-js/issues/751
  preProcessedHeaders
    .split('\r')
    .map(function(header) {
      return header.indexOf('\n') === 0 ? header.substr(1, header.length) : header
    })
    .forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
  return headers
}

Body.call(Request.prototype)

function Response(bodyInit, options) {
  if (!(this instanceof Response)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
  }
  if (!options) {
    options = {}
  }

  this.type = 'default'
  this.status = options.status === undefined ? 200 : options.status
  this.ok = this.status >= 200 && this.status < 300
  this.statusText = options.statusText === undefined ? '' : '' + options.statusText
  this.headers = new Headers(options.headers)
  this.url = options.url || ''
  this._initBody(bodyInit)
}

Body.call(Response.prototype)

Response.prototype.clone = function() {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  })
}

Response.error = function() {
  var response = new Response(null, {status: 0, statusText: ''})
  response.type = 'error'
  return response
}

var redirectStatuses = [301, 302, 303, 307, 308]

Response.redirect = function(url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code')
  }

  return new Response(null, {status: status, headers: {location: url}})
}

var DOMException = global.DOMException
try {
  new DOMException()
} catch (err) {
  DOMException = function(message, name) {
    this.message = message
    this.name = name
    var error = Error(message)
    this.stack = error.stack
  }
  DOMException.prototype = Object.create(Error.prototype)
  DOMException.prototype.constructor = DOMException
}

function fetch(input, init) {
  return new Promise(function(resolve, reject) {
    var request = new Request(input, init)

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'))
    }

    var xhr = new XMLHttpRequest()

    function abortXhr() {
      xhr.abort()
    }

    xhr.onload = function() {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      }
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
      var body = 'response' in xhr ? xhr.response : xhr.responseText
      setTimeout(function() {
        resolve(new Response(body, options))
      }, 0)
    }

    xhr.onerror = function() {
      setTimeout(function() {
        reject(new TypeError('Network request failed'))
      }, 0)
    }

    xhr.ontimeout = function() {
      setTimeout(function() {
        reject(new TypeError('Network request failed'))
      }, 0)
    }

    xhr.onabort = function() {
      setTimeout(function() {
        reject(new DOMException('Aborted', 'AbortError'))
      }, 0)
    }

    function fixUrl(url) {
      try {
        return url === '' && global.location.href ? global.location.href : url
      } catch (e) {
        return url
      }
    }

    xhr.open(request.method, fixUrl(request.url), true)

    if (request.credentials === 'include') {
      xhr.withCredentials = true
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false
    }

    if ('responseType' in xhr) {
      if (support.blob) {
        xhr.responseType = 'blob'
      } else if (
        support.arrayBuffer &&
        request.headers.get('Content-Type') &&
        request.headers.get('Content-Type').indexOf('application/octet-stream') !== -1
      ) {
        xhr.responseType = 'arraybuffer'
      }
    }

    if (init && typeof init.headers === 'object' && !(init.headers instanceof Headers)) {
      Object.getOwnPropertyNames(init.headers).forEach(function(name) {
        xhr.setRequestHeader(name, normalizeValue(init.headers[name]))
      })
    } else {
      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })
    }

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr)

      xhr.onreadystatechange = function() {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr)
        }
      }
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
  })
}

fetch.polyfill = true

if (!global.fetch) {
  global.fetch = fetch
  global.Headers = Headers
  global.Request = Request
  global.Response = Response
}


/***/ })

}]);
//# sourceMappingURL=274.804be348cfe5c10e8dcb.js.map