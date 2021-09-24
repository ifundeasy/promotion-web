(self["webpackChunkpromotion_web"] = self["webpackChunkpromotion_web"] || []).push([[150],{

/***/ 3732:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ useFlexGapSupport; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(9439);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/canUseDom.js
var canUseDom = __webpack_require__(8924);
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/styleChecker.js

var canUseDocElement = function canUseDocElement() {
  return (0,canUseDom/* default */.Z)() && window.document.documentElement;
};
var isStyleSupport = function isStyleSupport(styleName) {
  if (canUseDocElement()) {
    var styleNameList = Array.isArray(styleName) ? styleName : [styleName];
    var documentElement = window.document.documentElement;
    return styleNameList.some(function (name) {
      return name in documentElement.style;
    });
  }

  return false;
};
var flexGapSupported;
var detectFlexGapSupported = function detectFlexGapSupported() {
  if (!canUseDocElement()) {
    return false;
  }

  if (flexGapSupported !== undefined) {
    return flexGapSupported;
  } // create flex container with row-gap set


  var flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px'; // create two, elements inside it

  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div')); // append to the DOM (needed to obtain scrollHeight)

  document.body.appendChild(flex);
  flexGapSupported = flex.scrollHeight === 1; // flex container should be 1px high from the row-gap

  document.body.removeChild(flex);
  return flexGapSupported;
};
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/hooks/useFlexGapSupport.js



/* harmony default export */ var useFlexGapSupport = (function () {
  var _React$useState = react.useState(false),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      flexible = _React$useState2[0],
      setFlexible = _React$useState2[1];

  react.useEffect(function () {
    setFlexible(detectFlexGapSupported());
  }, []);
  return flexible;
});

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

/***/ 7150:
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
  }, "Decrement"), deReducer.deNumber)), /*#__PURE__*/react.createElement("h4", null, "ErrorBoundary"), /*#__PURE__*/react.createElement(stateful_ErrorBoundary, null, /*#__PURE__*/react.createElement(shopsList, null)));
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
//# sourceMappingURL=150.c4c5675f2df146f54592.js.map