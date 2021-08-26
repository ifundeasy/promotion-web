"use strict";
(self["webpackChunkpromotion_web"] = self["webpackChunkpromotion_web"] || []).push([[500],{

/***/ 3732:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ useFlexGapSupport; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(2206);
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
var slicedToArray = __webpack_require__(2206);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__(344);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js + 4 modules
var context = __webpack_require__(6032);
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


// EXTERNAL MODULE: ./node_modules/antd/es/style/index.less
var style = __webpack_require__(632);
;// CONCATENATED MODULE: ./node_modules/antd/es/space/style/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/antd/es/space/style/index.js



/***/ }),

/***/ 8332:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
// EXTERNAL MODULE: ./src/service/index.js + 7 modules
var service = __webpack_require__(2697);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(2380);
// EXTERNAL MODULE: ./src/actions/index.js + 2 modules
var actions = __webpack_require__(9302);
;// CONCATENATED MODULE: ./src/pages/demo/shopsList/index.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var ShopsList = function ShopsList() {
  var _useGetFetch = (0,service/* useGetFetch */.tV)('/faker/shops'),
      _useGetFetch2 = _slicedToArray(_useGetFetch, 3),
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

  var _useReqFetch = (0,service/* useReqFetch */.H3)('/faker/app/api/user/list', {
    method: 'GET'
  }),
      _useReqFetch2 = demo_slicedToArray(_useReqFetch, 3),
      res = _useReqFetch2[0],
      loading = _useReqFetch2[1],
      error = _useReqFetch2[2];

  var _useGetFetch = (0,service/* useGetFetch */.tV)('/faker/shops'),
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

/***/ })

}]);
//# sourceMappingURL=500.c2f25f8117b4b9fca718.js.map