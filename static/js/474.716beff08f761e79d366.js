(self["webpackChunkpromotion_web"] = self["webpackChunkpromotion_web"] || []).push([[474],{

/***/ 5357:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ icons_EyeOutlined; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/EyeOutlined.js
// This icon file is generated automatically.
var EyeOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" } }] }, "name": "eye", "theme": "outlined" };
/* harmony default export */ var asn_EyeOutlined = (EyeOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 3 modules
var AntdIcon = __webpack_require__(76);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/EyeOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var EyeOutlined_EyeOutlined = function EyeOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_EyeOutlined
  }));
};

EyeOutlined_EyeOutlined.displayName = 'EyeOutlined';
/* harmony default export */ var icons_EyeOutlined = (/*#__PURE__*/react.forwardRef(EyeOutlined_EyeOutlined));

/***/ }),

/***/ 7838:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useForceUpdate; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9439);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);


function useForceUpdate() {
  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_0__.useReducer(function (x) {
    return x + 1;
  }, 0),
      _React$useReducer2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(_React$useReducer, 2),
      forceUpdate = _React$useReducer2[1];

  return forceUpdate;
}

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

// EXTERNAL MODULE: ./node_modules/antd/es/style/index.less
var style = __webpack_require__(632);
;// CONCATENATED MODULE: ./node_modules/antd/es/space/style/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/antd/es/space/style/index.js



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

/***/ 4217:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ pickAttrs; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1413);

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
    mergedConfig = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({}, ariaOnly);
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

/***/ }),

/***/ 2005:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ demo; }
});

// EXTERNAL MODULE: ./node_modules/antd/es/space/style/index.js + 1 modules
var style = __webpack_require__(1114);
// EXTERNAL MODULE: ./node_modules/antd/es/space/index.js + 1 modules
var space = __webpack_require__(9650);
// EXTERNAL MODULE: ./node_modules/antd/es/button/style/index.js + 1 modules
var button_style = __webpack_require__(8385);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js + 4 modules
var es_button = __webpack_require__(404);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./src/components/stateful/ErrorBoundary/index.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }






function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



// https://github.com/bvaughn/react-error-boundary
var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  _inherits(ErrorBoundary, _React$Component);

  var _super = _createSuper(ErrorBoundary);

  function ErrorBoundary() {
    var _this;

    _classCallCheck(this, ErrorBoundary);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      hasError: false
    });

    _defineProperty(_assertThisInitialized(_this), "triggerError", function (_ref) {
      var error = _ref.error,
          errorInfo = _ref.errorInfo;

      _this.setState({
        hasError: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "resetError", function () {
      return _this.setState({
        hasError: false
      });
    });

    return _this;
  }

  _createClass(ErrorBoundary, [{
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
// EXTERNAL MODULE: ./node_modules/antd/es/style/index.less
var es_style = __webpack_require__(632);
;// CONCATENATED MODULE: ./node_modules/antd/es/message/style/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/antd/es/message/style/index.js


// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 1 modules
var message = __webpack_require__(8086);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(3727);
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { suffix_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
  return _objectSpread(_objectSpread({}, map), {}, {
    sign: signStr
  });
}
;// CONCATENATED MODULE: ./src/utils/token/index.js
var getToken = function getToken() {
  return 'token';
};


// EXTERNAL MODULE: ./node_modules/fetch-intercept/lib/browser.js
var browser = __webpack_require__(8096);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);
;// CONCATENATED MODULE: ./src/service/fetch.js


var _excluded = ["isShowError", "timeout", "controller"];

function fetch_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function fetch_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { fetch_ownKeys(Object(source), true).forEach(function (key) { fetch_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { fetch_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function fetch_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Fetch Api
 * 1. reqFetch(url, params)
 *    params: {
 *      method: 'GET', // 请求方式
 *      payload: null, // 入参
 *      headers: null, // 自定义 Headers
 *      isShowError: true, // 是否显示total tips
 *      timeout: 20000 // 超时
 *    }
 * 2. postFetch --- method==='POST' 其他入参同 reqFetch
 * 3. getFetch --- method==='POST'  其他入参同 reqFetch
 * 4. putFethch
 * 5. deleteFetch
 * 6. patchFetch
 */



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
// https://github.com/Bigerfe/fe-learn-code/
// https://cloud.tencent.com/developer/article/1532107
// https://towardsdev.com/what-is-better-for-http-requests-fetch-or-axios-comparison-920ceffc5161
// https://javascript.info/fetch-progress
// https://github.com/AnthumChris/fetch-progress-indicators
// https://github.com/jserz/request-extensions
// allowHTTP1ForStreamingUpload
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


var baseUrl = "";
var hashRouter = new react_router_dom/* HashRouter */.UT();

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
    'Content-Type': 'application/json;charset=utf-8',
    // text/plain;charset=UTF-8 *application/json;charset=utf-8 application/x-www-form-urlencoded
    Authorization: getToken() ? "Bearer ".concat(getToken()) : null
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
      hashRouter.history.push('/signin');
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
      otherOptions = _objectWithoutProperties(options, _excluded);

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
function useFetch_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function useFetch_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { useFetch_ownKeys(Object(source), true).forEach(function (key) { useFetch_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { useFetch_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function useFetch_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Fetch Hooks
 * url： api endpoint
 * opts: 参见 fetch.js
 */


var useReqFetch = function useReqFetch(url, opts) {
  var _useState = (0,react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      res = _useState2[0],
      setRes = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = (0,react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
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
var es = __webpack_require__(3594);
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
// EXTERNAL MODULE: ./node_modules/antd/es/progress/index.js + 9 modules
var progress = __webpack_require__(2074);
;// CONCATENATED MODULE: ./node_modules/antd/es/upload/style/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/style/index.js + 1 modules
var tooltip_style = __webpack_require__(3255);
;// CONCATENATED MODULE: ./node_modules/antd/es/upload/style/index.js

 // style dependencies




// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(1002);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(3433);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(9439);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(7757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(3144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(136);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__(8557);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(5861);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-util/es/pickAttrs.js
var pickAttrs = __webpack_require__(4217);
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

      formData.append(key, option.data[key]);
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
// EXTERNAL MODULE: ./node_modules/rc-util/es/warning.js
var warning = __webpack_require__(334);
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
        (0,warning/* default */.ZP)(false, "Upload takes an invalidate 'accept' type '".concat(validType, "'.Skip for check."));
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











var AjaxUploader_excluded = ["component", "prefixCls", "className", "disabled", "id", "style", "multiple", "accept", "children", "directory", "openFileDialogOnClick", "onMouseEnter", "onMouseLeave", "capture"];








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
          children = _this$props4.children,
          directory = _this$props4.directory,
          openFileDialogOnClick = _this$props4.openFileDialogOnClick,
          onMouseEnter = _this$props4.onMouseEnter,
          onMouseLeave = _this$props4.onMouseLeave,
          capture = _this$props4.capture,
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
      }), /*#__PURE__*/react.createElement("input", (0,esm_extends/* default */.Z)({}, (0,pickAttrs/* default */.Z)(otherProps, {
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



function empty() {}

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
  onStart: empty,
  onError: empty,
  onSuccess: empty,
  multiple: false,
  beforeUpload: null,
  customRequest: null,
  withCredentials: false,
  openFileDialogOnClick: true
};
/* harmony default export */ var es_Upload = (Upload);
;// CONCATENATED MODULE: ./node_modules/rc-upload/es/index.js

/* harmony default export */ var rc_upload_es = (es_Upload);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useMergedState.js
var useMergedState = __webpack_require__(1770);
;// CONCATENATED MODULE: ./node_modules/antd/es/upload/Dragger.js


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




var InternalDragger = function InternalDragger(_a, ref) {
  var style = _a.style,
      height = _a.height,
      restProps = __rest(_a, ["style", "height"]);

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
// EXTERNAL MODULE: ./node_modules/rc-motion/es/index.js + 12 modules
var rc_motion_es = __webpack_require__(444);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/LoadingOutlined.js + 1 modules
var LoadingOutlined = __webpack_require__(7085);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/PaperClipOutlined.js
// This icon file is generated automatically.
var PaperClipOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 00174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z" } }] }, "name": "paper-clip", "theme": "outlined" };
/* harmony default export */ var asn_PaperClipOutlined = (PaperClipOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 3 modules
var AntdIcon = __webpack_require__(76);
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
// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(6159);
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
// EXTERNAL MODULE: ./node_modules/antd/es/_util/motion.js
var motion = __webpack_require__(3603);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js + 1 modules
var context = __webpack_require__(5632);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/hooks/useForceUpdate.js
var useForceUpdate = __webpack_require__(7838);
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
// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js + 5 modules
var tooltip = __webpack_require__(9713);
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
  }, /*#__PURE__*/react.createElement(EyeOutlined/* default */.Z, null)) : null;
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

  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
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
      downloadIcon = _ref.downloadIcon,
      progress = _ref.progress,
      appendAction = _ref.appendAction,
      itemRender = _ref.itemRender;
  var forceUpdate = (0,useForceUpdate/* default */.Z)();

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

  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
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
// EXTERNAL MODULE: ./node_modules/antd/es/locale-provider/LocaleReceiver.js + 1 modules
var LocaleReceiver = __webpack_require__(2051);
// EXTERNAL MODULE: ./node_modules/antd/es/locale/default.js + 4 modules
var locale_default = __webpack_require__(5767);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/devWarning.js
var devWarning = __webpack_require__(1687);
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

  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
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

var Upload_Upload = /*#__PURE__*/react.forwardRef(InternalUpload);
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
  }, uploading ? 'Uploading' : 'Start Upload'), "FileList: ".concat(JSON.stringify(fileList, 0, null)), "percent: ".concat(percent), /*#__PURE__*/react.createElement(progress/* default */.Z, {
    percent: percent
  }));
};

/* harmony default export */ var demo_fileUpload = (FileUpload);
;// CONCATENATED MODULE: ./src/pages/demo/index.js





function demo_slicedToArray(arr, i) { return demo_arrayWithHoles(arr) || demo_iterableToArrayLimit(arr, i) || demo_unsupportedIterableToArray(arr, i) || demo_nonIterableRest(); }

function demo_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function demo_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return demo_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return demo_arrayLikeToArray(o, minLen); }

function demo_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function demo_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function demo_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


 // import React, { useState, useEffect } from 'react'
// import { reqFetch } from '@src/service'







var ProDemo = function ProDemo() {
  var inReducer = (0,es/* useSelector */.v9)(function (state) {
    return state.inReducer;
  });
  var deReducer = (0,es/* useSelector */.v9)(function (state) {
    return state.deReducer;
  });
  var dispatch = (0,es/* useDispatch */.I0)();

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


  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h3", null, "\u9879\u76EE\u6587\u6863", /*#__PURE__*/react.createElement("span", {
    style: {
      fontSize: 12,
      color: '#999',
      margin: '0 10px'
    }
  }, "\u5F85\u5B8C\u5584")), /*#__PURE__*/react.createElement("h4", null, "Mock API \u793A\u4F8B\uFF1A"), /*#__PURE__*/react.createElement("h4", null, "useFetch: ", loading ? 'Loading...' : error ? 'error' : JSON.stringify(res, null, 2)), /*#__PURE__*/react.createElement("h4", null, "useFetch: ", booksLoading ? 'Books Loading...' : booksError ? 'error' : JSON.stringify(booksRes, null, 2)), /*#__PURE__*/react.createElement("h4", null, "Redux \u793A\u4F8B:"), /*#__PURE__*/react.createElement(space/* default */.Z, null, /*#__PURE__*/react.createElement(space/* default */.Z, null, /*#__PURE__*/react.createElement(es_button/* default */.Z, {
    type: "primary",
    onClick: function onClick() {
      return dispatch(actions/* default.inAction.increment */.Z.inAction.increment(1));
    }
  }, "Increment"), inReducer.inNumber), /*#__PURE__*/react.createElement(space/* default */.Z, null, /*#__PURE__*/react.createElement(es_button/* default */.Z, {
    onClick: function onClick() {
      return dispatch(actions/* default.deAction.decrement */.Z.deAction.decrement(2));
    }
  }, "Decrement"), deReducer.deNumber)), /*#__PURE__*/react.createElement("h4", null, "ErrorBoundary"), /*#__PURE__*/react.createElement(stateful_ErrorBoundary, null, /*#__PURE__*/react.createElement(shopsList, null)), /*#__PURE__*/react.createElement("h4", null, "File Upload"), /*#__PURE__*/react.createElement(demo_fileUpload, null), /*#__PURE__*/react.createElement("div", {
    style: {
      height: 1000
    }
  }, "Height"));
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
//# sourceMappingURL=474.716beff08f761e79d366.js.map