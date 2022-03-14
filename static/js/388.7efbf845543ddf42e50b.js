"use strict";
(self["webpackChunkpromotion_web"] = self["webpackChunkpromotion_web"] || []).push([[388],{

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

/***/ 9388:
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
;// CONCATENATED MODULE: ./src/components/stateless/TypedText/index.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var TypedText = function TypedText(_ref) {
  var children = _ref.children,
      _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 110 : _ref$delay;

  var _useState = (0,react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
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
;// CONCATENATED MODULE: ./src/pages/home/index.js




var Home = function Home() {
  return /*#__PURE__*/react.createElement(FixTabPanel/* default */.Z, null, /*#__PURE__*/react.createElement("h2", null, /*#__PURE__*/react.createElement(stateless_TypedText, null, "Cool! Hi, React & Ant Design!")), /*#__PURE__*/react.createElement("h3", null, "React version: ", react.version));
};

/* harmony default export */ var home = (Home);

/***/ })

}]);
//# sourceMappingURL=388.7efbf845543ddf42e50b.js.map