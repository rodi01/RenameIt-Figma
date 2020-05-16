/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/code.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@rodi01/renameitlib/lib/FindReplace.js":
/*!*************************************************************!*\
  !*** ./node_modules/@rodi01/renameitlib/lib/FindReplace.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable class-methods-use-this */
/**
 * @Author: Rodrigo Soares <rodrigo>
 * @Date:   2017-11-17T17:26:39-08:00
 * @Project: Rename It
 * @Last modified by:   rodrigo
 * @Last modified time: 2017-12-02T21:22:41-08:00
 */

var FindReplace = function () {
  function FindReplace() {
    _classCallCheck(this, FindReplace);
  }

  _createClass(FindReplace, [{
    key: "escapeRegExp",
    value: function escapeRegExp(str) {
      return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"); // eslint-disable-line
    }
  }, {
    key: "layer",
    value: function layer(options) {
      var reg = options.caseSensitive ? new RegExp(this.escapeRegExp(options.findText), "g") : new RegExp(this.escapeRegExp(options.findText), "gi");
      return options.layerName.replace(reg, options.replaceWith);
    }
  }, {
    key: "match",
    value: function match(options) {
      if (options.findText.length <= 0) return false;
      var str = String(options.findText);
      var layerName = options.layerName;

      if (!options.caseSensitive) {
        str = str.toLowerCase();
        layerName = layerName.toLowerCase();
      }

      return layerName.includes(str);
    }
  }]);

  return FindReplace;
}();

exports.default = FindReplace;

/***/ }),

/***/ "./node_modules/@rodi01/renameitlib/lib/Rename.js":
/*!********************************************************!*\
  !*** ./node_modules/@rodi01/renameitlib/lib/Rename.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Author: Rodrigo Soares <rodrigo>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Date:   2017-11-17T17:23:24-08:00
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Project: Rename It
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Last modified time: 2017-12-02T10:17:35-08:00
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _changeCase = __webpack_require__(/*! change-case */ "./node_modules/@rodi01/renameitlib/node_modules/change-case/dist.es2015/index.js");

var changeCase = _interopRequireWildcard(_changeCase);

var _titlecase = __webpack_require__(/*! titlecase */ "./node_modules/titlecase/to-title-case.js");

var _titlecase2 = _interopRequireDefault(_titlecase);

var _upperCase = __webpack_require__(/*! upper-case */ "./node_modules/@rodi01/renameitlib/node_modules/upper-case/dist.es2015/index.js");

var _lowerCase = __webpack_require__(/*! lower-case */ "./node_modules/@rodi01/renameitlib/node_modules/lower-case/dist.es2015/index.js");

var _upperCaseFirst = __webpack_require__(/*! upper-case-first */ "./node_modules/@rodi01/renameitlib/node_modules/upper-case-first/dist.es2015/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*eslint-disable */
// prettier-ignore
var uppercaseSC = "%\\*u%",
    lowerCaseSC = "%\\*l%",
    titleCase = "%\\*t%",
    upperFirstCase = "%\\*uf%",
    camelCase = "%\\*c%",
    paramCase = "%\\*pc%",
    numberSequence = "%N",
    alphaSequence = "%a",
    alphaReverse = "%ar%",
    width = "%w",
    height = "%h",
    page = "%p",
    parent = "%o",
    symbol = "%s",
    layerStyle = "%ls%",
    childLayer = "%ch%";

// prettier-ignore-end
/* eslint-enable */

var Rename = function () {
  function Rename() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$allowTextCases = _ref.allowTextCases,
        allowTextCases = _ref$allowTextCases === undefined ? true : _ref$allowTextCases,
        _ref$allowPageName = _ref.allowPageName,
        allowPageName = _ref$allowPageName === undefined ? true : _ref$allowPageName,
        _ref$allowParent = _ref.allowParent,
        allowParent = _ref$allowParent === undefined ? true : _ref$allowParent,
        _ref$allowSymbol = _ref.allowSymbol,
        allowSymbol = _ref$allowSymbol === undefined ? true : _ref$allowSymbol,
        _ref$allowLayerStyle = _ref.allowLayerStyle,
        allowLayerStyle = _ref$allowLayerStyle === undefined ? true : _ref$allowLayerStyle,
        _ref$allowChildLayer = _ref.allowChildLayer,
        allowChildLayer = _ref$allowChildLayer === undefined ? false : _ref$allowChildLayer;

    _classCallCheck(this, Rename);

    this.allowTextCases = allowTextCases;
    this.allowPageName = allowPageName;
    this.allowParent = allowParent;
    this.allowSymbol = allowSymbol;
    this.allowLayerStyle = allowLayerStyle;
    this.allowChildLayer = allowChildLayer;
  }

  // eslint-disable-next-line class-methods-use-this


  _createClass(Rename, [{
    key: "shortcut",
    value: function shortcut(s) {
      return new RegExp(s, "gi");
      // return `/${escapeStringRegexp(s)}/gi`
    }

    // eslint-disable-next-line class-methods-use-this

  }, {
    key: "paddy",
    value: function paddy(n, p, c) {
      var padChar = typeof c !== "undefined" ? c : "0";
      var pad = new Array(1 + p).join(padChar);
      return (pad + n).slice(-pad.length);
    }

    // eslint-disable-next-line class-methods-use-this

  }, {
    key: "convertTitleCase",
    value: function convertTitleCase(layerName) {
      var l = (0, _lowerCase.lowerCase)(layerName);
      return (0, _titlecase2.default)(l);
    }
  }, {
    key: "currentLayer",
    value: function currentLayer(newLayerName, layerName) {
      var name = newLayerName;

      if (this.allowTextCases) {
        // UpperCase
        name = name.replace(this.shortcut(uppercaseSC), (0, _upperCase.upperCase)(layerName));
        // LowerCase
        name = name.replace(this.shortcut(lowerCaseSC), (0, _lowerCase.lowerCase)(layerName));
        // Title Case
        name = name.replace(this.shortcut(titleCase), this.convertTitleCase(layerName));
        // UpperCase First
        name = name.replace(this.shortcut(upperFirstCase), (0, _upperCaseFirst.upperCaseFirst)(layerName));
        // Camel Case
        name = name.replace(this.shortcut(camelCase), changeCase.camelCase(layerName));
        // Param Case
        name = name.replace(this.shortcut(paramCase), changeCase.paramCase(layerName));
      }
      // Layername
      name = name.replace(/%\*/g, layerName);
      return String(name);
    }
  }, {
    key: "layer",
    value: function layer(options) {
      var newLayerName = options.inputName;

      // Interator
      var nInterators = newLayerName.match(this.shortcut(numberSequence));
      var aInterators = newLayerName.match(/(?!%ar%)%A/gi);
      var reverseAInterators = newLayerName.match(this.shortcut(alphaReverse));
      // eslint-disable-next-line no-underscore-dangle
      var _this = this;

      // Number Interator
      if (nInterators != null) {
        /* eslint-disable */
        // Replace Number
        var replaceNumber = function replaceNumber(match) {
          var nnSize = match.length - 1;
          var letter = match.charAt(1);
          var num = letter == "N" ? options.currIdx : options.selectionCount - options.currIdx - 1;
          num += options.startsFrom;
          // Check weather or not the number is bigger than the nnSizes (works up to 9999)
          if (num > 999 && (nnSize === 1 || nnSize === 2 || nnSize === 3)) nnSize = 4;else if (num > 99 && (nnSize === 1 || nnSize === 2)) nnSize = 3;else if (num > 9 && nnSize == 1) nnSize = 2;
          return _this.paddy(num, nnSize);
        };

        newLayerName = newLayerName.replace(/%n+/gi, replaceNumber);
      }
      // Alpha Interator
      var alphaStr = "abcdefghijklmnopqrstuvwxyz";
      var alphaArr = alphaStr.split("");
      var totalAlpha = alphaArr.length;
      // Replace Alpha
      function replaceAlpha(match) {
        var letter = match.charAt(1);
        var current = match === "%ar%" ? options.selectionCount - options.currIdx - 1 : options.currIdx;
        var alpha = alphaArr[current % totalAlpha];
        if (current >= totalAlpha) {
          var flIdx = Math.floor(current / totalAlpha);
          alpha = "" + alphaArr[flIdx - 1] + alpha;
        }
        return letter === "A" ? alpha.toUpperCase() : alpha;
      }
      // Reverse Alpha
      if (reverseAInterators != null) {
        newLayerName = newLayerName.replace(this.shortcut(alphaReverse), replaceAlpha);
      }
      if (aInterators != null) {
        newLayerName = newLayerName.replace(this.shortcut(alphaSequence), replaceAlpha);
      }

      // Replace asterisks
      newLayerName = _this.currentLayer(newLayerName, options.layerName);

      // Add Width and/or height
      newLayerName = newLayerName.replace(this.shortcut(width), options.width);
      newLayerName = newLayerName.replace(this.shortcut(height), options.height);

      // Page Name
      if (this.allowPageName) {
        newLayerName = newLayerName.replace(this.shortcut(page), options.pageName);
      }

      // Parent Name
      if (this.allowParent) {
        newLayerName = newLayerName.replace(this.shortcut(parent), options.parentName);
      }

      // Symbol Name
      if (this.allowSymbol) {
        newLayerName = newLayerName.replace(this.shortcut(symbol), options.symbolName);
      }

      // Layer Style
      if (this.allowLayerStyle) {
        newLayerName = newLayerName.replace(this.shortcut(layerStyle), options.layerStyle);
      }

      // Child Layer Name
      if (this.allowChildLayer) {
        newLayerName = newLayerName.replace(this.shortcut(childLayer), options.childLayer);
      }

      // Return new name
      return newLayerName;
    }
  }]);

  return Rename;
}();

exports.default = Rename;

/***/ }),

/***/ "./node_modules/@rodi01/renameitlib/lib/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@rodi01/renameitlib/lib/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _FindReplace = __webpack_require__(/*! ./FindReplace */ "./node_modules/@rodi01/renameitlib/lib/FindReplace.js");

Object.defineProperty(exports, "FindReplace", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_FindReplace).default;
  }
});

var _Rename = __webpack_require__(/*! ./Rename */ "./node_modules/@rodi01/renameitlib/lib/Rename.js");

Object.defineProperty(exports, "Rename", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Rename).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/@rodi01/renameitlib/node_modules/camel-case/dist.es2015/index.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@rodi01/renameitlib/node_modules/camel-case/dist.es2015/index.js ***!
  \***************************************************************************************/
/*! exports provided: camelCaseTransform, camelCaseTransformMerge, camelCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelCaseTransform", function() { return camelCaseTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelCaseTransformMerge", function() { return camelCaseTransformMerge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelCase", function() { return camelCase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var pascal_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pascal-case */ "./node_modules/@rodi01/renameitlib/node_modules/pascal-case/dist.es2015/index.js");


function camelCaseTransform(input, index) {
    if (index === 0)
        return input.toLowerCase();
    return Object(pascal_case__WEBPACK_IMPORTED_MODULE_1__["pascalCaseTransform"])(input, index);
}
function camelCaseTransformMerge(input, index) {
    if (index === 0)
        return input.toLowerCase();
    return Object(pascal_case__WEBPACK_IMPORTED_MODULE_1__["pascalCaseTransformMerge"])(input);
}
function camelCase(input, options) {
    if (options === void 0) { options = {}; }
    return Object(pascal_case__WEBPACK_IMPORTED_MODULE_1__["pascalCase"])(input, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ transform: camelCaseTransform }, options));
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@rodi01/renameitlib/node_modules/change-case/dist.es2015/index.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@rodi01/renameitlib/node_modules/change-case/dist.es2015/index.js ***!
  \****************************************************************************************/
/*! exports provided: camelCaseTransform, camelCaseTransformMerge, camelCase, capitalCaseTransform, capitalCase, constantCase, dotCase, headerCase, noCase, paramCase, pascalCaseTransform, pascalCaseTransformMerge, pascalCase, pathCase, sentenceCaseTransform, sentenceCase, snakeCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var camel_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! camel-case */ "./node_modules/@rodi01/renameitlib/node_modules/camel-case/dist.es2015/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "camelCaseTransform", function() { return camel_case__WEBPACK_IMPORTED_MODULE_0__["camelCaseTransform"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "camelCaseTransformMerge", function() { return camel_case__WEBPACK_IMPORTED_MODULE_0__["camelCaseTransformMerge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "camelCase", function() { return camel_case__WEBPACK_IMPORTED_MODULE_0__["camelCase"]; });

/* harmony import */ var capital_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! capital-case */ "./node_modules/capital-case/dist.es2015/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "capitalCaseTransform", function() { return capital_case__WEBPACK_IMPORTED_MODULE_1__["capitalCaseTransform"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "capitalCase", function() { return capital_case__WEBPACK_IMPORTED_MODULE_1__["capitalCase"]; });

/* harmony import */ var constant_case__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! constant-case */ "./node_modules/@rodi01/renameitlib/node_modules/constant-case/dist.es2015/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "constantCase", function() { return constant_case__WEBPACK_IMPORTED_MODULE_2__["constantCase"]; });

/* harmony import */ var dot_case__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dot-case */ "./node_modules/@rodi01/renameitlib/node_modules/dot-case/dist.es2015/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dotCase", function() { return dot_case__WEBPACK_IMPORTED_MODULE_3__["dotCase"]; });

/* harmony import */ var header_case__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! header-case */ "./node_modules/@rodi01/renameitlib/node_modules/header-case/dist.es2015/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "headerCase", function() { return header_case__WEBPACK_IMPORTED_MODULE_4__["headerCase"]; });

/* harmony import */ var no_case__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! no-case */ "./node_modules/@rodi01/renameitlib/node_modules/no-case/dist.es2015/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noCase", function() { return no_case__WEBPACK_IMPORTED_MODULE_5__["noCase"]; });

/* harmony import */ var param_case__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! param-case */ "./node_modules/@rodi01/renameitlib/node_modules/param-case/dist.es2015/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "paramCase", function() { return param_case__WEBPACK_IMPORTED_MODULE_6__["paramCase"]; });

/* harmony import */ var pascal_case__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pascal-case */ "./node_modules/@rodi01/renameitlib/node_modules/pascal-case/dist.es2015/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pascalCaseTransform", function() { return pascal_case__WEBPACK_IMPORTED_MODULE_7__["pascalCaseTransform"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pascalCaseTransformMerge", function() { return pascal_case__WEBPACK_IMPORTED_MODULE_7__["pascalCaseTransformMerge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pascalCase", function() { return pascal_case__WEBPACK_IMPORTED_MODULE_7__["pascalCase"]; });

/* harmony import */ var path_case__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! path-case */ "./node_modules/@rodi01/renameitlib/node_modules/path-case/dist.es2015/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pathCase", function() { return path_case__WEBPACK_IMPORTED_MODULE_8__["pathCase"]; });

/* harmony import */ var sentence_case__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sentence-case */ "./node_modules/@rodi01/renameitlib/node_modules/sentence-case/dist.es2015/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sentenceCaseTransform", function() { return sentence_case__WEBPACK_IMPORTED_MODULE_9__["sentenceCaseTransform"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sentenceCase", function() { return sentence_case__WEBPACK_IMPORTED_MODULE_9__["sentenceCase"]; });

/* harmony import */ var snake_case__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! snake-case */ "./node_modules/@rodi01/renameitlib/node_modules/snake-case/dist.es2015/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "snakeCase", function() { return snake_case__WEBPACK_IMPORTED_MODULE_10__["snakeCase"]; });












//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@rodi01/renameitlib/node_modules/constant-case/dist.es2015/index.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@rodi01/renameitlib/node_modules/constant-case/dist.es2015/index.js ***!
  \******************************************************************************************/
/*! exports provided: constantCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constantCase", function() { return constantCase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var no_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! no-case */ "./node_modules/@rodi01/renameitlib/node_modules/no-case/dist.es2015/index.js");
/* harmony import */ var upper_case__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! upper-case */ "./node_modules/@rodi01/renameitlib/node_modules/upper-case/dist.es2015/index.js");



function constantCase(input, options) {
    if (options === void 0) { options = {}; }
    return Object(no_case__WEBPACK_IMPORTED_MODULE_1__["noCase"])(input, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ delimiter: "_", transform: upper_case__WEBPACK_IMPORTED_MODULE_2__["upperCase"] }, options));
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@rodi01/renameitlib/node_modules/dot-case/dist.es2015/index.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@rodi01/renameitlib/node_modules/dot-case/dist.es2015/index.js ***!
  \*************************************************************************************/
/*! exports provided: dotCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dotCase", function() { return dotCase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var no_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! no-case */ "./node_modules/@rodi01/renameitlib/node_modules/no-case/dist.es2015/index.js");


function dotCase(input, options) {
    if (options === void 0) { options = {}; }
    return Object(no_case__WEBPACK_IMPORTED_MODULE_1__["noCase"])(input, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ delimiter: "." }, options));
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@rodi01/renameitlib/node_modules/header-case/dist.es2015/index.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@rodi01/renameitlib/node_modules/header-case/dist.es2015/index.js ***!
  \****************************************************************************************/
/*! exports provided: headerCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerCase", function() { return headerCase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var capital_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! capital-case */ "./node_modules/capital-case/dist.es2015/index.js");


function headerCase(input, options) {
    if (options === void 0) { options = {}; }
    return Object(capital_case__WEBPACK_IMPORTED_MODULE_1__["capitalCase"])(input, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ delimiter: "-" }, options));
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@rodi01/renameitlib/node_modules/lower-case/dist.es2015/index.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@rodi01/renameitlib/node_modules/lower-case/dist.es2015/index.js ***!
  \***************************************************************************************/
/*! exports provided: localeLowerCase, lowerCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeLowerCase", function() { return localeLowerCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lowerCase", function() { return lowerCase; });
/**
 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
 */
var SUPPORTED_LOCALE = {
    tr: {
        regexp: /\u0130|\u0049|\u0049\u0307/g,
        map: {
            İ: "\u0069",
            I: "\u0131",
            İ: "\u0069"
        }
    },
    az: {
        regexp: /\u0130/g,
        map: {
            İ: "\u0069",
            I: "\u0131",
            İ: "\u0069"
        }
    },
    lt: {
        regexp: /\u0049|\u004A|\u012E|\u00CC|\u00CD|\u0128/g,
        map: {
            I: "\u0069\u0307",
            J: "\u006A\u0307",
            Į: "\u012F\u0307",
            Ì: "\u0069\u0307\u0300",
            Í: "\u0069\u0307\u0301",
            Ĩ: "\u0069\u0307\u0303"
        }
    }
};
/**
 * Localized lower case.
 */
function localeLowerCase(str, locale) {
    var lang = SUPPORTED_LOCALE[locale.toLowerCase()];
    if (lang)
        return lowerCase(str.replace(lang.regexp, function (m) { return lang.map[m]; }));
    return lowerCase(str);
}
/**
 * Lower case as a function.
 */
function lowerCase(str) {
    return str.toLowerCase();
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@rodi01/renameitlib/node_modules/no-case/dist.es2015/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@rodi01/renameitlib/node_modules/no-case/dist.es2015/index.js ***!
  \************************************************************************************/
/*! exports provided: noCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noCase", function() { return noCase; });
/* harmony import */ var lower_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lower-case */ "./node_modules/@rodi01/renameitlib/node_modules/lower-case/dist.es2015/index.js");

// Support camel case ("camelCase" -> "camel Case" and "CAMELCase" -> "CAMEL Case").
var DEFAULT_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g];
// Remove all non-word characters.
var DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;
/**
 * Normalize the string into something other libraries can manipulate easier.
 */
function noCase(input, options) {
    if (options === void 0) { options = {}; }
    var _a = options.splitRegexp, splitRegexp = _a === void 0 ? DEFAULT_SPLIT_REGEXP : _a, _b = options.stripRegexp, stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b, _c = options.transform, transform = _c === void 0 ? lower_case__WEBPACK_IMPORTED_MODULE_0__["lowerCase"] : _c, _d = options.delimiter, delimiter = _d === void 0 ? " " : _d;
    var result = replace(replace(input, splitRegexp, "$1\0$2"), stripRegexp, "\0");
    var start = 0;
    var end = result.length;
    // Trim the delimiter from around the output string.
    while (result.charAt(start) === "\0")
        start++;
    while (result.charAt(end - 1) === "\0")
        end--;
    // Transform each token independently.
    return result
        .slice(start, end)
        .split("\0")
        .map(transform)
        .join(delimiter);
}
/**
 * Replace `re` in the input string with the replacement value.
 */
function replace(input, re, value) {
    if (re instanceof RegExp)
        return input.replace(re, value);
    return re.reduce(function (input, re) { return input.replace(re, value); }, input);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@rodi01/renameitlib/node_modules/param-case/dist.es2015/index.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@rodi01/renameitlib/node_modules/param-case/dist.es2015/index.js ***!
  \***************************************************************************************/
/*! exports provided: paramCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paramCase", function() { return paramCase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var dot_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dot-case */ "./node_modules/@rodi01/renameitlib/node_modules/dot-case/dist.es2015/index.js");


function paramCase(input, options) {
    if (options === void 0) { options = {}; }
    return Object(dot_case__WEBPACK_IMPORTED_MODULE_1__["dotCase"])(input, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ delimiter: "-" }, options));
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@rodi01/renameitlib/node_modules/pascal-case/dist.es2015/index.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@rodi01/renameitlib/node_modules/pascal-case/dist.es2015/index.js ***!
  \****************************************************************************************/
/*! exports provided: pascalCaseTransform, pascalCaseTransformMerge, pascalCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pascalCaseTransform", function() { return pascalCaseTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pascalCaseTransformMerge", function() { return pascalCaseTransformMerge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pascalCase", function() { return pascalCase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var no_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! no-case */ "./node_modules/@rodi01/renameitlib/node_modules/no-case/dist.es2015/index.js");


function pascalCaseTransform(input, index) {
    var firstChar = input.charAt(0);
    var lowerChars = input.substr(1).toLowerCase();
    if (index > 0 && firstChar >= "0" && firstChar <= "9") {
        return "_" + firstChar + lowerChars;
    }
    return "" + firstChar.toUpperCase() + lowerChars;
}
function pascalCaseTransformMerge(input) {
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}
function pascalCase(input, options) {
    if (options === void 0) { options = {}; }
    return Object(no_case__WEBPACK_IMPORTED_MODULE_1__["noCase"])(input, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ delimiter: "", transform: pascalCaseTransform }, options));
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@rodi01/renameitlib/node_modules/path-case/dist.es2015/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@rodi01/renameitlib/node_modules/path-case/dist.es2015/index.js ***!
  \**************************************************************************************/
/*! exports provided: pathCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathCase", function() { return pathCase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var dot_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dot-case */ "./node_modules/@rodi01/renameitlib/node_modules/dot-case/dist.es2015/index.js");


function pathCase(input, options) {
    if (options === void 0) { options = {}; }
    return Object(dot_case__WEBPACK_IMPORTED_MODULE_1__["dotCase"])(input, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ delimiter: "/" }, options));
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@rodi01/renameitlib/node_modules/sentence-case/dist.es2015/index.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@rodi01/renameitlib/node_modules/sentence-case/dist.es2015/index.js ***!
  \******************************************************************************************/
/*! exports provided: sentenceCaseTransform, sentenceCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sentenceCaseTransform", function() { return sentenceCaseTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sentenceCase", function() { return sentenceCase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var no_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! no-case */ "./node_modules/@rodi01/renameitlib/node_modules/no-case/dist.es2015/index.js");
/* harmony import */ var upper_case_first__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! upper-case-first */ "./node_modules/@rodi01/renameitlib/node_modules/upper-case-first/dist.es2015/index.js");



function sentenceCaseTransform(input, index) {
    var result = input.toLowerCase();
    if (index === 0)
        return Object(upper_case_first__WEBPACK_IMPORTED_MODULE_2__["upperCaseFirst"])(result);
    return result;
}
function sentenceCase(input, options) {
    if (options === void 0) { options = {}; }
    return Object(no_case__WEBPACK_IMPORTED_MODULE_1__["noCase"])(input, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ delimiter: " ", transform: sentenceCaseTransform }, options));
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@rodi01/renameitlib/node_modules/snake-case/dist.es2015/index.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@rodi01/renameitlib/node_modules/snake-case/dist.es2015/index.js ***!
  \***************************************************************************************/
/*! exports provided: snakeCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snakeCase", function() { return snakeCase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var dot_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dot-case */ "./node_modules/@rodi01/renameitlib/node_modules/dot-case/dist.es2015/index.js");


function snakeCase(input, options) {
    if (options === void 0) { options = {}; }
    return Object(dot_case__WEBPACK_IMPORTED_MODULE_1__["dotCase"])(input, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ delimiter: "_" }, options));
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@rodi01/renameitlib/node_modules/upper-case-first/dist.es2015/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@rodi01/renameitlib/node_modules/upper-case-first/dist.es2015/index.js ***!
  \*********************************************************************************************/
/*! exports provided: upperCaseFirst */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upperCaseFirst", function() { return upperCaseFirst; });
/**
 * Upper case the first character of an input string.
 */
function upperCaseFirst(input) {
    return input.charAt(0).toUpperCase() + input.substr(1);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@rodi01/renameitlib/node_modules/upper-case/dist.es2015/index.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@rodi01/renameitlib/node_modules/upper-case/dist.es2015/index.js ***!
  \***************************************************************************************/
/*! exports provided: localeUpperCase, upperCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeUpperCase", function() { return localeUpperCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upperCase", function() { return upperCase; });
/**
 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
 */
var SUPPORTED_LOCALE = {
    tr: {
        regexp: /[\u0069]/g,
        map: {
            i: "\u0130"
        }
    },
    az: {
        regexp: /[\u0069]/g,
        map: {
            i: "\u0130"
        }
    },
    lt: {
        regexp: /[\u0069\u006A\u012F]\u0307|\u0069\u0307[\u0300\u0301\u0303]/g,
        map: {
            i̇: "\u0049",
            j̇: "\u004A",
            į̇: "\u012E",
            i̇̀: "\u00CC",
            i̇́: "\u00CD",
            i̇̃: "\u0128"
        }
    }
};
/**
 * Localized upper case.
 */
function localeUpperCase(str, locale) {
    var lang = SUPPORTED_LOCALE[locale.toLowerCase()];
    if (lang)
        return upperCase(str.replace(lang.regexp, function (m) { return lang.map[m]; }));
    return upperCase(str);
}
/**
 * Upper case as a function.
 */
function upperCase(str) {
    return str.toUpperCase();
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/capital-case/dist.es2015/index.js":
/*!********************************************************!*\
  !*** ./node_modules/capital-case/dist.es2015/index.js ***!
  \********************************************************/
/*! exports provided: capitalCaseTransform, capitalCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalCaseTransform", function() { return capitalCaseTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalCase", function() { return capitalCase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var no_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! no-case */ "./node_modules/capital-case/node_modules/no-case/dist.es2015/index.js");
/* harmony import */ var upper_case_first__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! upper-case-first */ "./node_modules/capital-case/node_modules/upper-case-first/dist.es2015/index.js");



function capitalCaseTransform(input) {
    return Object(upper_case_first__WEBPACK_IMPORTED_MODULE_2__["upperCaseFirst"])(input.toLowerCase());
}
function capitalCase(input, options) {
    if (options === void 0) { options = {}; }
    return Object(no_case__WEBPACK_IMPORTED_MODULE_1__["noCase"])(input, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ delimiter: " ", transform: capitalCaseTransform }, options));
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/capital-case/node_modules/lower-case/dist.es2015/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/capital-case/node_modules/lower-case/dist.es2015/index.js ***!
  \********************************************************************************/
/*! exports provided: localeLowerCase, lowerCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeLowerCase", function() { return localeLowerCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lowerCase", function() { return lowerCase; });
/**
 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
 */
var SUPPORTED_LOCALE = {
    tr: {
        regexp: /\u0130|\u0049|\u0049\u0307/g,
        map: {
            İ: "\u0069",
            I: "\u0131",
            İ: "\u0069"
        }
    },
    az: {
        regexp: /\u0130/g,
        map: {
            İ: "\u0069",
            I: "\u0131",
            İ: "\u0069"
        }
    },
    lt: {
        regexp: /\u0049|\u004A|\u012E|\u00CC|\u00CD|\u0128/g,
        map: {
            I: "\u0069\u0307",
            J: "\u006A\u0307",
            Į: "\u012F\u0307",
            Ì: "\u0069\u0307\u0300",
            Í: "\u0069\u0307\u0301",
            Ĩ: "\u0069\u0307\u0303"
        }
    }
};
/**
 * Localized lower case.
 */
function localeLowerCase(str, locale) {
    var lang = SUPPORTED_LOCALE[locale.toLowerCase()];
    if (lang)
        return lowerCase(str.replace(lang.regexp, function (m) { return lang.map[m]; }));
    return lowerCase(str);
}
/**
 * Lower case as a function.
 */
function lowerCase(str) {
    return str.toLowerCase();
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/capital-case/node_modules/no-case/dist.es2015/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/capital-case/node_modules/no-case/dist.es2015/index.js ***!
  \*****************************************************************************/
/*! exports provided: noCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noCase", function() { return noCase; });
/* harmony import */ var lower_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lower-case */ "./node_modules/capital-case/node_modules/lower-case/dist.es2015/index.js");

// Support camel case ("camelCase" -> "camel Case" and "CAMELCase" -> "CAMEL Case").
var DEFAULT_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g];
// Remove all non-word characters.
var DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;
/**
 * Normalize the string into something other libraries can manipulate easier.
 */
function noCase(input, options) {
    if (options === void 0) { options = {}; }
    var _a = options.splitRegexp, splitRegexp = _a === void 0 ? DEFAULT_SPLIT_REGEXP : _a, _b = options.stripRegexp, stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b, _c = options.transform, transform = _c === void 0 ? lower_case__WEBPACK_IMPORTED_MODULE_0__["lowerCase"] : _c, _d = options.delimiter, delimiter = _d === void 0 ? " " : _d;
    var result = replace(replace(input, splitRegexp, "$1\0$2"), stripRegexp, "\0");
    var start = 0;
    var end = result.length;
    // Trim the delimiter from around the output string.
    while (result.charAt(start) === "\0")
        start++;
    while (result.charAt(end - 1) === "\0")
        end--;
    // Transform each token independently.
    return result
        .slice(start, end)
        .split("\0")
        .map(transform)
        .join(delimiter);
}
/**
 * Replace `re` in the input string with the replacement value.
 */
function replace(input, re, value) {
    if (re instanceof RegExp)
        return input.replace(re, value);
    return re.reduce(function (input, re) { return input.replace(re, value); }, input);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/capital-case/node_modules/upper-case-first/dist.es2015/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/capital-case/node_modules/upper-case-first/dist.es2015/index.js ***!
  \**************************************************************************************/
/*! exports provided: upperCaseFirst */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upperCaseFirst", function() { return upperCaseFirst; });
/**
 * Upper case the first character of an input string.
 */
function upperCaseFirst(input) {
    return input.charAt(0).toUpperCase() + input.substr(1);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


/***/ }),

/***/ "./node_modules/is-blank/index.js":
/*!****************************************!*\
  !*** ./node_modules/is-blank/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isEmpty = __webpack_require__(/*! is-empty */ "./node_modules/is-empty/lib/index.js")
var isWhitespace = __webpack_require__(/*! is-whitespace */ "./node_modules/is-whitespace/index.js")

function isString (object) {
  return typeof object === 'string'
}

module.exports = function (object) {
  return isString(object) && object.length ? isWhitespace(object) : isEmpty(object)
}


/***/ }),

/***/ "./node_modules/is-empty/lib/index.js":
/*!********************************************!*\
  !*** ./node_modules/is-empty/lib/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * Has own property.
 *
 * @type {Function}
 */

var has = Object.prototype.hasOwnProperty

/**
 * To string.
 *
 * @type {Function}
 */

var toString = Object.prototype.toString

/**
 * Test whether a value is "empty".
 *
 * @param {Mixed} val
 * @return {Boolean}
 */

function isEmpty(val) {
  // Null and Undefined...
  if (val == null) return true

  // Booleans...
  if ('boolean' == typeof val) return false

  // Numbers...
  if ('number' == typeof val) return val === 0

  // Strings...
  if ('string' == typeof val) return val.length === 0

  // Functions...
  if ('function' == typeof val) return val.length === 0

  // Arrays...
  if (Array.isArray(val)) return val.length === 0

  // Errors...
  if (val instanceof Error) return val.message === ''

  // Objects...
  if (val.toString == toString) {
    switch (val.toString()) {

      // Maps, Sets, Files and Errors...
      case '[object File]':
      case '[object Map]':
      case '[object Set]': {
        return val.size === 0
      }

      // Plain objects...
      case '[object Object]': {
        for (var key in val) {
          if (has.call(val, key)) return false
        }

        return true
      }
    }
  }

  // Anything else...
  return false
}

/**
 * Export `isEmpty`.
 *
 * @type {Function}
 */

module.exports = isEmpty


/***/ }),

/***/ "./node_modules/is-whitespace/index.js":
/*!*********************************************!*\
  !*** ./node_modules/is-whitespace/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-whitespace <https://github.com/jonschlinkert/is-whitespace>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



var cache;

module.exports = function isWhitespace(str) {
  return (typeof str === 'string') && regex().test(str);
};

function regex() {
  // ensure that runtime compilation only happens once
  return cache || (cache = new RegExp('^[\\s\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF"]+$'));
}


/***/ }),

/***/ "./node_modules/titlecase/articles.js":
/*!********************************************!*\
  !*** ./node_modules/titlecase/articles.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [ 'the', 'a', 'an', 'some' ]


/***/ }),

/***/ "./node_modules/titlecase/conjunctions.js":
/*!************************************************!*\
  !*** ./node_modules/titlecase/conjunctions.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [
    'as'
  , 'because'
  , 'for'
  , 'and'
  , 'nor'
  , 'but'
  , 'or'
  , 'yet'
  , 'so'
]


/***/ }),

/***/ "./node_modules/titlecase/prepositions.js":
/*!************************************************!*\
  !*** ./node_modules/titlecase/prepositions.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [
    'a'
  , 'abaft'
  , 'aboard'
  , 'about'
  , 'above'
  , 'absent'
  , 'across'
  , 'afore'
  , 'after'
  , 'against'
  , 'along'
  , 'alongside'
  , 'amid'
  , 'amidst'
  , 'among'
  , 'amongst'
  , 'an'
  , 'apropos'
  , 'apud'
  , 'around'
  , 'as'
  , 'aside'
  , 'astride'
  , 'at'
  , 'athwart'
  , 'atop'
  , 'barring'
  , 'before'
  , 'behind'
  , 'below'
  , 'beneath'
  , 'beside'
  , 'besides'
  , 'between'
  , 'beyond'
  , 'but'
  , 'by'
  , 'circa'
  , 'concerning'
  , 'despite'
  , 'down'
  , 'during'
  , 'except'
  , 'excluding'
  , 'failing'
  , 'following'
  , 'for'
  , 'forenenst'
  , 'from'
  , 'given'
  , 'in'
  , 'including'
  , 'inside'
  , 'into'
  , 'like'
  , 'mid'
  , 'midst'
  , 'minus'
  , 'modulo'
  , 'near'
  , 'next'
  , 'notwithstanding'
  , 'o\''
  , 'of'
  , 'off'
  , 'on'
  , 'onto'
  , 'opposite'
  , 'out'
  , 'outside'
  , 'over'
  , 'pace'
  , 'past'
  , 'per'
  , 'plus'
  , 'pro'
  , 'qua'
  , 'regarding'
  , 'round'
  , 'sans'
  , 'save'
  , 'since'
  , 'than'
  , 'through'
  , 'throughout'
  , 'thru'
  , 'thruout'
  , 'till'
  , 'times'
  , 'to'
  , 'toward'
  , 'towards'
  , 'under'
  , 'underneath'
  , 'unlike'
  , 'until'
  , 'unto'
  , 'up'
  , 'upon'
  , 'versus'
  , 'via'
  , 'vice'
  , 'vis-à-vis'
  , 'with'
  , 'within'
  , 'without'
  , 'worth'
]


/***/ }),

/***/ "./node_modules/titlecase/to-title-case.js":
/*!*************************************************!*\
  !*** ./node_modules/titlecase/to-title-case.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * To Title Case 2.1 – http://individed.com/code/to-title-case/
 * Copyright © 2008–2013 David Gouch. Licensed under the MIT License.
 *
 * modifications by @rvagg Apr-2014
 */

//String.prototype.toTitleCase = function(){


var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;


module.exports = function toTitleCase(str){
  return titleCase(str, smallWords)
}


module.exports.toTitleCase = module.exports


var laxWords = __webpack_require__(/*! ./articles */ "./node_modules/titlecase/articles.js").concat(__webpack_require__(/*! ./prepositions */ "./node_modules/titlecase/prepositions.js")).concat(__webpack_require__(/*! ./conjunctions */ "./node_modules/titlecase/conjunctions.js"))
      .concat(smallWords.source.replace(/(^\^\(|\)\$$)/g, '').split('|'))
      .concat(['is']) // a personal preference
  , laxWordsRe = new RegExp('^(' + laxWords.join('|') + ')$', 'i')


module.exports.toLaxTitleCase = function toLaxTitleCase(str){
  return titleCase(str, laxWordsRe)
}


function titleCase (str, smallWords) {
  if (!str)
    return str
  return str.replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function(match, index, title){
    if (index > 0 && index + match.length !== title.length &&
      match.search(smallWords) > -1 && title.charAt(index - 2) !== ':' &&
      (title.charAt(index + match.length) !== '-' || title.charAt(index - 1) === '-') &&
      title.charAt(index - 1).search(/[^\s-]/) < 0) {
      return match.toLowerCase();
    }

    if (match.substr(1).search(/[A-Z]|\../) > -1) {
      return match;
    }

    return match.charAt(0).toUpperCase() + match.substr(1);
  });
}


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/Lib/DataHelper.ts":
/*!*******************************!*\
  !*** ./src/Lib/DataHelper.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.findReplaceData = exports.renameData = void 0;
function renameData(item, selectionCount, inputName, startsFrom, pageName) {
    return {
        layerName: item.layerName,
        currIdx: item.idx,
        width: item.width,
        height: item.height,
        selectionCount: selectionCount,
        inputName: inputName,
        startsFrom: Number(startsFrom),
        pageName: pageName,
        parentName: item.parentName,
        symbolName: item.symbolName,
        layerStyle: item.layerStyle,
        childLayer: item.childLayer,
    };
}
exports.renameData = renameData;
function findReplaceData(item, findText, replaceWith, caseSensitive) {
    return {
        layerName: item.layerName,
        currIdx: item.idx,
        findText: findText,
        replaceWith: replaceWith,
        caseSensitive: caseSensitive,
    };
}
exports.findReplaceData = findReplaceData;


/***/ }),

/***/ "./src/Lib/RenameHelper.ts":
/*!*********************************!*\
  !*** ./src/Lib/RenameHelper.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.getChildLayer = exports.hasChildLayer = exports.getSymbolName = exports.hasSymbols = exports.getStyle = exports.hasStyles = void 0;
function hasStyles(item) {
    if (item.textStyleId !== undefined) {
        return item.textStyleId !== '';
    }
    else if (item.fillStyleId !== undefined) {
        return item.fillStyleId !== '';
    }
    return false;
}
exports.hasStyles = hasStyles;
function styleId(item) {
    if (item.constructor.name === 'TextNode') {
        return item.textStyleId;
    }
    else {
        return item.fillStyleId;
    }
}
function getStyle(item) {
    var name = '';
    if (hasStyles(item)) {
        var style = figma.getStyleById(styleId(item));
        name = style !== null ? style.name : '';
    }
    return name;
}
exports.getStyle = getStyle;
function hasSymbols(item) {
    return item.constructor.name === 'InstanceNode';
}
exports.hasSymbols = hasSymbols;
function getSymbolName(item) {
    var name = '';
    if (hasSymbols(item)) {
        name = item.masterComponent.name;
    }
    return name;
}
exports.getSymbolName = getSymbolName;
function hasChildLayer(item) {
    try {
        return item.children !== undefined && item.children.length > 0;
    }
    catch (error) {
        return false;
    }
}
exports.hasChildLayer = hasChildLayer;
function getChildLayer(item) {
    var name = '';
    if (hasChildLayer(item)) {
        var idx = item.children.length - 1;
        name = String(item.children[idx].name);
    }
    return name;
}
exports.getChildLayer = getChildLayer;


/***/ }),

/***/ "./src/Lib/io.js":
/*!***********************!*\
  !*** ./src/Lib/io.js ***!
  \***********************/
/*! exports provided: html, script */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "script", function() { return script; });
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);


function createInterface(renderer) {
  const emitter = new events__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]()

  const receive = result => {
    if (result && result.event) {
      emitter.emit(result.event, result.data)
    }
  }

  if (renderer) {
    window.onmessage = ev => receive(ev.data.pluginMessage)
  } else {
    figma.ui.onmessage = data => receive(data)
  }

  emitter.send = function(event, data) {
    if (typeof event !== "string") {
      throw new Error("Expected first argument to be an event name string")
    }
    const postData = {
      event,
      data
    }
    if (renderer) {
      window.parent.postMessage({ pluginMessage: postData }, "*")
    } else {
      figma.ui.postMessage(postData)
    }
  }

  emitter.async = function(ev) {
    return new Promise(resolve => {
      this.once(ev, resolve)
    })
  }

  return emitter
}

const isRenderer = typeof figma === "undefined"
const html = isRenderer ? createInterface(true) : undefined
const script = isRenderer ? undefined : createInterface()


/***/ }),

/***/ "./src/Utilities.ts":
/*!**************************!*\
  !*** ./src/Utilities.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.parseData = exports.reorderSelection = exports.hasSelection = exports.WhereTo = void 0;
var RenameHelper_1 = __webpack_require__(/*! ./Lib/RenameHelper */ "./src/Lib/RenameHelper.ts");
var WhereTo;
(function (WhereTo) {
    WhereTo["RenameLayers"] = "renameLayers";
    WhereTo["FindReplace"] = "findReplace";
    WhereTo["Settings"] = "settings";
    WhereTo["NoSelection"] = "noSelection";
})(WhereTo = exports.WhereTo || (exports.WhereTo = {}));
function hasSelection(data) {
    return data.selection.length > 0;
}
exports.hasSelection = hasSelection;
function layerObject(item, index) {
    return {
        layerName: item.name,
        idx: index,
        width: item.width,
        height: item.height,
        parentName: item.parent.name,
        layerStyle: RenameHelper_1.getStyle(item),
        symbolName: RenameHelper_1.getSymbolName(item),
        childLayer: RenameHelper_1.getChildLayer(item),
    };
}
function reorderSelection(data) {
    if (!hasSelection(data))
        return data.selection;
    var firstParent = data.selection[0].parent;
    var sameParent = data.selection.every(function (elem) { return elem.parent.id === firstParent.id; });
    if (sameParent) {
        var arr_1 = [];
        firstParent.children.forEach(function (child) {
            if (data.selection.includes(child)) {
                arr_1.push(child);
            }
        });
        return arr_1;
    }
    else {
        return data.selection;
    }
}
exports.reorderSelection = reorderSelection;
function parseData(data) {
    var object = {
        pageName: data.name,
        selectionCount: data.selection.length,
        selection: [],
        hasLayerStyle: false,
        hasSymbol: false,
        hasChildLayer: false,
    };
    var sel = reorderSelection(data);
    sel.forEach(function (item, index) {
        if (!object.hasLayerStyle)
            object.hasLayerStyle = RenameHelper_1.hasStyles(item);
        if (!object.hasSymbol)
            object.hasSymbol = RenameHelper_1.hasSymbols(item);
        if (!object.hasChildLayer)
            object.hasChildLayer = RenameHelper_1.hasChildLayer(item);
        object.selection[index] = layerObject(item, index);
    });
    return object;
}
exports.parseData = parseData;


/***/ }),

/***/ "./src/code.ts":
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var io_js_1 = __webpack_require__(/*! ./Lib/io.js */ "./src/Lib/io.js");
var renameitlib_1 = __webpack_require__(/*! @rodi01/renameitlib */ "./node_modules/@rodi01/renameitlib/lib/index.js");
var isBlank = __webpack_require__(/*! is-blank */ "./node_modules/is-blank/index.js");
var Utilities_1 = __webpack_require__(/*! ./Utilities */ "./src/Utilities.ts");
var DataHelper_1 = __webpack_require__(/*! ./Lib/DataHelper */ "./src/Lib/DataHelper.ts");
var data = Utilities_1.parseData(figma.currentPage);
function doRename(rename, item, index, inputData) {
    var options = DataHelper_1.renameData(item, data.selectionCount, inputData.nameInput, inputData.sequenceInput, data.pageName);
    return rename.layer(__assign(__assign({}, item), options));
}
function doFindReplace(findReplace, item, inputData) {
    var options = DataHelper_1.findReplaceData(item, inputData.findText, inputData.replaceText, inputData.caseSensitive);
    return findReplace.match(options) ? findReplace.layer(options) : false;
}
function theUI() {
    var to = 'noSelection';
    var windowOptions = {
        width: 430,
        height: 470,
    };
    if (figma.command === Utilities_1.WhereTo.RenameLayers && Utilities_1.hasSelection(data)) {
        to = Utilities_1.WhereTo.RenameLayers;
    }
    else if (figma.command === Utilities_1.WhereTo.FindReplace && Utilities_1.hasSelection(data)) {
        to = Utilities_1.WhereTo.FindReplace;
        windowOptions = {
            width: 430,
            height: 305,
        };
    }
    else {
        to = Utilities_1.WhereTo.NoSelection;
        windowOptions = {
            width: 300,
            height: 140,
        };
    }
    figma.showUI(__html__, windowOptions);
    io_js_1.script.send('sendData', {
        data: data,
        command: to,
    });
    io_js_1.script.once('renameLayers', function (d) {
        var rename = new renameitlib_1.Rename({ allowChildLayer: true });
        var sel = Utilities_1.reorderSelection(figma.currentPage);
        sel.forEach(function (item, index) {
            var name = doRename(rename, data.selection[index], index, d);
            if (!isBlank(name)) {
                item.name = name;
            }
        });
        figma.closePlugin();
    });
    io_js_1.script.once('findReplaceLayers', function (d) {
        var findReplace = new renameitlib_1.FindReplace();
        var sel = Utilities_1.reorderSelection(figma.currentPage);
        sel.forEach(function (item, index) {
            var name = doFindReplace(findReplace, data.selection[index], d);
            if (name)
                item.name = name;
        });
        figma.closePlugin();
    });
    io_js_1.script.once('cancel', function (d) {
        figma.closePlugin();
    });
}
theUI();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Byb2RpMDEvcmVuYW1laXRsaWIvbGliL0ZpbmRSZXBsYWNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Acm9kaTAxL3JlbmFtZWl0bGliL2xpYi9SZW5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Byb2RpMDEvcmVuYW1laXRsaWIvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Acm9kaTAxL3JlbmFtZWl0bGliL25vZGVfbW9kdWxlcy9jYW1lbC1jYXNlL2Rpc3QuZXMyMDE1L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Acm9kaTAxL3JlbmFtZWl0bGliL25vZGVfbW9kdWxlcy9jaGFuZ2UtY2FzZS9kaXN0LmVzMjAxNS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHJvZGkwMS9yZW5hbWVpdGxpYi9ub2RlX21vZHVsZXMvY29uc3RhbnQtY2FzZS9kaXN0LmVzMjAxNS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHJvZGkwMS9yZW5hbWVpdGxpYi9ub2RlX21vZHVsZXMvZG90LWNhc2UvZGlzdC5lczIwMTUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Byb2RpMDEvcmVuYW1laXRsaWIvbm9kZV9tb2R1bGVzL2hlYWRlci1jYXNlL2Rpc3QuZXMyMDE1L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Acm9kaTAxL3JlbmFtZWl0bGliL25vZGVfbW9kdWxlcy9sb3dlci1jYXNlL2Rpc3QuZXMyMDE1L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Acm9kaTAxL3JlbmFtZWl0bGliL25vZGVfbW9kdWxlcy9uby1jYXNlL2Rpc3QuZXMyMDE1L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Acm9kaTAxL3JlbmFtZWl0bGliL25vZGVfbW9kdWxlcy9wYXJhbS1jYXNlL2Rpc3QuZXMyMDE1L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Acm9kaTAxL3JlbmFtZWl0bGliL25vZGVfbW9kdWxlcy9wYXNjYWwtY2FzZS9kaXN0LmVzMjAxNS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHJvZGkwMS9yZW5hbWVpdGxpYi9ub2RlX21vZHVsZXMvcGF0aC1jYXNlL2Rpc3QuZXMyMDE1L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Acm9kaTAxL3JlbmFtZWl0bGliL25vZGVfbW9kdWxlcy9zZW50ZW5jZS1jYXNlL2Rpc3QuZXMyMDE1L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Acm9kaTAxL3JlbmFtZWl0bGliL25vZGVfbW9kdWxlcy9zbmFrZS1jYXNlL2Rpc3QuZXMyMDE1L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Acm9kaTAxL3JlbmFtZWl0bGliL25vZGVfbW9kdWxlcy91cHBlci1jYXNlLWZpcnN0L2Rpc3QuZXMyMDE1L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Acm9kaTAxL3JlbmFtZWl0bGliL25vZGVfbW9kdWxlcy91cHBlci1jYXNlL2Rpc3QuZXMyMDE1L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jYXBpdGFsLWNhc2UvZGlzdC5lczIwMTUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NhcGl0YWwtY2FzZS9ub2RlX21vZHVsZXMvbG93ZXItY2FzZS9kaXN0LmVzMjAxNS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2FwaXRhbC1jYXNlL25vZGVfbW9kdWxlcy9uby1jYXNlL2Rpc3QuZXMyMDE1L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jYXBpdGFsLWNhc2Uvbm9kZV9tb2R1bGVzL3VwcGVyLWNhc2UtZmlyc3QvZGlzdC5lczIwMTUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2V2ZW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLWJsYW5rL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pcy1lbXB0eS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLXdoaXRlc3BhY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RpdGxlY2FzZS9hcnRpY2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGl0bGVjYXNlL2Nvbmp1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGl0bGVjYXNlL3ByZXBvc2l0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGl0bGVjYXNlL3RvLXRpdGxlLWNhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTGliL0RhdGFIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xpYi9SZW5hbWVIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xpYi9pby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbGl0aWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7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QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xCQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7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QUU7SUFDckIsQ0FBQyxDQUFDO0lBRUYsY0FBRSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxVQUFDLENBQUM7UUFDN0IsSUFBTSxXQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFO1FBQ3JDLElBQU0sR0FBRyxHQUFHLDRCQUFnQixDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDL0MsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksRUFBRSxLQUFLO1lBQ3RCLElBQU0sSUFBSSxHQUFHLGFBQWEsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDakUsSUFBSSxJQUFJO2dCQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSTtRQUM1QixDQUFDLENBQUM7UUFFRixLQUFLLENBQUMsV0FBVyxFQUFFO0lBQ3JCLENBQUMsQ0FBQztJQUVGLGNBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQUMsQ0FBQztRQUNsQixLQUFLLENBQUMsV0FBVyxFQUFFO0lBQ3JCLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRCxLQUFLLEVBQUUiLCJmaWxlIjoiY29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2NvZGUudHNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuLyoqXG4gKiBAQXV0aG9yOiBSb2RyaWdvIFNvYXJlcyA8cm9kcmlnbz5cbiAqIEBEYXRlOiAgIDIwMTctMTEtMTdUMTc6MjY6MzktMDg6MDBcbiAqIEBQcm9qZWN0OiBSZW5hbWUgSXRcbiAqIEBMYXN0IG1vZGlmaWVkIGJ5OiAgIHJvZHJpZ29cbiAqIEBMYXN0IG1vZGlmaWVkIHRpbWU6IDIwMTctMTItMDJUMjE6MjI6NDEtMDg6MDBcbiAqL1xuXG52YXIgRmluZFJlcGxhY2UgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEZpbmRSZXBsYWNlKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGaW5kUmVwbGFjZSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRmluZFJlcGxhY2UsIFt7XG4gICAga2V5OiBcImVzY2FwZVJlZ0V4cFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyKSB7XG4gICAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1tcXC1cXFtcXF1cXC9cXHtcXH1cXChcXClcXCpcXCtcXD9cXC5cXFxcXFxeXFwkXFx8XS9nLCBcIlxcXFwkJlwiKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJsYXllclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsYXllcihvcHRpb25zKSB7XG4gICAgICB2YXIgcmVnID0gb3B0aW9ucy5jYXNlU2Vuc2l0aXZlID8gbmV3IFJlZ0V4cCh0aGlzLmVzY2FwZVJlZ0V4cChvcHRpb25zLmZpbmRUZXh0KSwgXCJnXCIpIDogbmV3IFJlZ0V4cCh0aGlzLmVzY2FwZVJlZ0V4cChvcHRpb25zLmZpbmRUZXh0KSwgXCJnaVwiKTtcbiAgICAgIHJldHVybiBvcHRpb25zLmxheWVyTmFtZS5yZXBsYWNlKHJlZywgb3B0aW9ucy5yZXBsYWNlV2l0aCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm1hdGNoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1hdGNoKG9wdGlvbnMpIHtcbiAgICAgIGlmIChvcHRpb25zLmZpbmRUZXh0Lmxlbmd0aCA8PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgICB2YXIgc3RyID0gU3RyaW5nKG9wdGlvbnMuZmluZFRleHQpO1xuICAgICAgdmFyIGxheWVyTmFtZSA9IG9wdGlvbnMubGF5ZXJOYW1lO1xuXG4gICAgICBpZiAoIW9wdGlvbnMuY2FzZVNlbnNpdGl2ZSkge1xuICAgICAgICBzdHIgPSBzdHIudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgbGF5ZXJOYW1lID0gbGF5ZXJOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBsYXllck5hbWUuaW5jbHVkZXMoc3RyKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRmluZFJlcGxhY2U7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEZpbmRSZXBsYWNlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpOyAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAQXV0aG9yOiBSb2RyaWdvIFNvYXJlcyA8cm9kcmlnbz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBARGF0ZTogICAyMDE3LTExLTE3VDE3OjIzOjI0LTA4OjAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQFByb2plY3Q6IFJlbmFtZSBJdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBMYXN0IG1vZGlmaWVkIHRpbWU6IDIwMTctMTItMDJUMTA6MTc6MzUtMDg6MDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxudmFyIF9jaGFuZ2VDYXNlID0gcmVxdWlyZShcImNoYW5nZS1jYXNlXCIpO1xuXG52YXIgY2hhbmdlQ2FzZSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9jaGFuZ2VDYXNlKTtcblxudmFyIF90aXRsZWNhc2UgPSByZXF1aXJlKFwidGl0bGVjYXNlXCIpO1xuXG52YXIgX3RpdGxlY2FzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90aXRsZWNhc2UpO1xuXG52YXIgX3VwcGVyQ2FzZSA9IHJlcXVpcmUoXCJ1cHBlci1jYXNlXCIpO1xuXG52YXIgX2xvd2VyQ2FzZSA9IHJlcXVpcmUoXCJsb3dlci1jYXNlXCIpO1xuXG52YXIgX3VwcGVyQ2FzZUZpcnN0ID0gcmVxdWlyZShcInVwcGVyLWNhc2UtZmlyc3RcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qZXNsaW50LWRpc2FibGUgKi9cbi8vIHByZXR0aWVyLWlnbm9yZVxudmFyIHVwcGVyY2FzZVNDID0gXCIlXFxcXCp1JVwiLFxuICAgIGxvd2VyQ2FzZVNDID0gXCIlXFxcXCpsJVwiLFxuICAgIHRpdGxlQ2FzZSA9IFwiJVxcXFwqdCVcIixcbiAgICB1cHBlckZpcnN0Q2FzZSA9IFwiJVxcXFwqdWYlXCIsXG4gICAgY2FtZWxDYXNlID0gXCIlXFxcXCpjJVwiLFxuICAgIHBhcmFtQ2FzZSA9IFwiJVxcXFwqcGMlXCIsXG4gICAgbnVtYmVyU2VxdWVuY2UgPSBcIiVOXCIsXG4gICAgYWxwaGFTZXF1ZW5jZSA9IFwiJWFcIixcbiAgICBhbHBoYVJldmVyc2UgPSBcIiVhciVcIixcbiAgICB3aWR0aCA9IFwiJXdcIixcbiAgICBoZWlnaHQgPSBcIiVoXCIsXG4gICAgcGFnZSA9IFwiJXBcIixcbiAgICBwYXJlbnQgPSBcIiVvXCIsXG4gICAgc3ltYm9sID0gXCIlc1wiLFxuICAgIGxheWVyU3R5bGUgPSBcIiVscyVcIixcbiAgICBjaGlsZExheWVyID0gXCIlY2glXCI7XG5cbi8vIHByZXR0aWVyLWlnbm9yZS1lbmRcbi8qIGVzbGludC1lbmFibGUgKi9cblxudmFyIFJlbmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUmVuYW1lKCkge1xuICAgIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fSxcbiAgICAgICAgX3JlZiRhbGxvd1RleHRDYXNlcyA9IF9yZWYuYWxsb3dUZXh0Q2FzZXMsXG4gICAgICAgIGFsbG93VGV4dENhc2VzID0gX3JlZiRhbGxvd1RleHRDYXNlcyA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IF9yZWYkYWxsb3dUZXh0Q2FzZXMsXG4gICAgICAgIF9yZWYkYWxsb3dQYWdlTmFtZSA9IF9yZWYuYWxsb3dQYWdlTmFtZSxcbiAgICAgICAgYWxsb3dQYWdlTmFtZSA9IF9yZWYkYWxsb3dQYWdlTmFtZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IF9yZWYkYWxsb3dQYWdlTmFtZSxcbiAgICAgICAgX3JlZiRhbGxvd1BhcmVudCA9IF9yZWYuYWxsb3dQYXJlbnQsXG4gICAgICAgIGFsbG93UGFyZW50ID0gX3JlZiRhbGxvd1BhcmVudCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IF9yZWYkYWxsb3dQYXJlbnQsXG4gICAgICAgIF9yZWYkYWxsb3dTeW1ib2wgPSBfcmVmLmFsbG93U3ltYm9sLFxuICAgICAgICBhbGxvd1N5bWJvbCA9IF9yZWYkYWxsb3dTeW1ib2wgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBfcmVmJGFsbG93U3ltYm9sLFxuICAgICAgICBfcmVmJGFsbG93TGF5ZXJTdHlsZSA9IF9yZWYuYWxsb3dMYXllclN0eWxlLFxuICAgICAgICBhbGxvd0xheWVyU3R5bGUgPSBfcmVmJGFsbG93TGF5ZXJTdHlsZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IF9yZWYkYWxsb3dMYXllclN0eWxlLFxuICAgICAgICBfcmVmJGFsbG93Q2hpbGRMYXllciA9IF9yZWYuYWxsb3dDaGlsZExheWVyLFxuICAgICAgICBhbGxvd0NoaWxkTGF5ZXIgPSBfcmVmJGFsbG93Q2hpbGRMYXllciA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfcmVmJGFsbG93Q2hpbGRMYXllcjtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZW5hbWUpO1xuXG4gICAgdGhpcy5hbGxvd1RleHRDYXNlcyA9IGFsbG93VGV4dENhc2VzO1xuICAgIHRoaXMuYWxsb3dQYWdlTmFtZSA9IGFsbG93UGFnZU5hbWU7XG4gICAgdGhpcy5hbGxvd1BhcmVudCA9IGFsbG93UGFyZW50O1xuICAgIHRoaXMuYWxsb3dTeW1ib2wgPSBhbGxvd1N5bWJvbDtcbiAgICB0aGlzLmFsbG93TGF5ZXJTdHlsZSA9IGFsbG93TGF5ZXJTdHlsZTtcbiAgICB0aGlzLmFsbG93Q2hpbGRMYXllciA9IGFsbG93Q2hpbGRMYXllcjtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG5cblxuICBfY3JlYXRlQ2xhc3MoUmVuYW1lLCBbe1xuICAgIGtleTogXCJzaG9ydGN1dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaG9ydGN1dChzKSB7XG4gICAgICByZXR1cm4gbmV3IFJlZ0V4cChzLCBcImdpXCIpO1xuICAgICAgLy8gcmV0dXJuIGAvJHtlc2NhcGVTdHJpbmdSZWdleHAocyl9L2dpYFxuICAgIH1cblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG5cbiAgfSwge1xuICAgIGtleTogXCJwYWRkeVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYWRkeShuLCBwLCBjKSB7XG4gICAgICB2YXIgcGFkQ2hhciA9IHR5cGVvZiBjICE9PSBcInVuZGVmaW5lZFwiID8gYyA6IFwiMFwiO1xuICAgICAgdmFyIHBhZCA9IG5ldyBBcnJheSgxICsgcCkuam9pbihwYWRDaGFyKTtcbiAgICAgIHJldHVybiAocGFkICsgbikuc2xpY2UoLXBhZC5sZW5ndGgpO1xuICAgIH1cblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG5cbiAgfSwge1xuICAgIGtleTogXCJjb252ZXJ0VGl0bGVDYXNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbnZlcnRUaXRsZUNhc2UobGF5ZXJOYW1lKSB7XG4gICAgICB2YXIgbCA9ICgwLCBfbG93ZXJDYXNlLmxvd2VyQ2FzZSkobGF5ZXJOYW1lKTtcbiAgICAgIHJldHVybiAoMCwgX3RpdGxlY2FzZTIuZGVmYXVsdCkobCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImN1cnJlbnRMYXllclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjdXJyZW50TGF5ZXIobmV3TGF5ZXJOYW1lLCBsYXllck5hbWUpIHtcbiAgICAgIHZhciBuYW1lID0gbmV3TGF5ZXJOYW1lO1xuXG4gICAgICBpZiAodGhpcy5hbGxvd1RleHRDYXNlcykge1xuICAgICAgICAvLyBVcHBlckNhc2VcbiAgICAgICAgbmFtZSA9IG5hbWUucmVwbGFjZSh0aGlzLnNob3J0Y3V0KHVwcGVyY2FzZVNDKSwgKDAsIF91cHBlckNhc2UudXBwZXJDYXNlKShsYXllck5hbWUpKTtcbiAgICAgICAgLy8gTG93ZXJDYXNlXG4gICAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UodGhpcy5zaG9ydGN1dChsb3dlckNhc2VTQyksICgwLCBfbG93ZXJDYXNlLmxvd2VyQ2FzZSkobGF5ZXJOYW1lKSk7XG4gICAgICAgIC8vIFRpdGxlIENhc2VcbiAgICAgICAgbmFtZSA9IG5hbWUucmVwbGFjZSh0aGlzLnNob3J0Y3V0KHRpdGxlQ2FzZSksIHRoaXMuY29udmVydFRpdGxlQ2FzZShsYXllck5hbWUpKTtcbiAgICAgICAgLy8gVXBwZXJDYXNlIEZpcnN0XG4gICAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UodGhpcy5zaG9ydGN1dCh1cHBlckZpcnN0Q2FzZSksICgwLCBfdXBwZXJDYXNlRmlyc3QudXBwZXJDYXNlRmlyc3QpKGxheWVyTmFtZSkpO1xuICAgICAgICAvLyBDYW1lbCBDYXNlXG4gICAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UodGhpcy5zaG9ydGN1dChjYW1lbENhc2UpLCBjaGFuZ2VDYXNlLmNhbWVsQ2FzZShsYXllck5hbWUpKTtcbiAgICAgICAgLy8gUGFyYW0gQ2FzZVxuICAgICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKHRoaXMuc2hvcnRjdXQocGFyYW1DYXNlKSwgY2hhbmdlQ2FzZS5wYXJhbUNhc2UobGF5ZXJOYW1lKSk7XG4gICAgICB9XG4gICAgICAvLyBMYXllcm5hbWVcbiAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoLyVcXCovZywgbGF5ZXJOYW1lKTtcbiAgICAgIHJldHVybiBTdHJpbmcobmFtZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImxheWVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxheWVyKG9wdGlvbnMpIHtcbiAgICAgIHZhciBuZXdMYXllck5hbWUgPSBvcHRpb25zLmlucHV0TmFtZTtcblxuICAgICAgLy8gSW50ZXJhdG9yXG4gICAgICB2YXIgbkludGVyYXRvcnMgPSBuZXdMYXllck5hbWUubWF0Y2godGhpcy5zaG9ydGN1dChudW1iZXJTZXF1ZW5jZSkpO1xuICAgICAgdmFyIGFJbnRlcmF0b3JzID0gbmV3TGF5ZXJOYW1lLm1hdGNoKC8oPyElYXIlKSVBL2dpKTtcbiAgICAgIHZhciByZXZlcnNlQUludGVyYXRvcnMgPSBuZXdMYXllck5hbWUubWF0Y2godGhpcy5zaG9ydGN1dChhbHBoYVJldmVyc2UpKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgLy8gTnVtYmVyIEludGVyYXRvclxuICAgICAgaWYgKG5JbnRlcmF0b3JzICE9IG51bGwpIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgICAgICAgLy8gUmVwbGFjZSBOdW1iZXJcbiAgICAgICAgdmFyIHJlcGxhY2VOdW1iZXIgPSBmdW5jdGlvbiByZXBsYWNlTnVtYmVyKG1hdGNoKSB7XG4gICAgICAgICAgdmFyIG5uU2l6ZSA9IG1hdGNoLmxlbmd0aCAtIDE7XG4gICAgICAgICAgdmFyIGxldHRlciA9IG1hdGNoLmNoYXJBdCgxKTtcbiAgICAgICAgICB2YXIgbnVtID0gbGV0dGVyID09IFwiTlwiID8gb3B0aW9ucy5jdXJySWR4IDogb3B0aW9ucy5zZWxlY3Rpb25Db3VudCAtIG9wdGlvbnMuY3VycklkeCAtIDE7XG4gICAgICAgICAgbnVtICs9IG9wdGlvbnMuc3RhcnRzRnJvbTtcbiAgICAgICAgICAvLyBDaGVjayB3ZWF0aGVyIG9yIG5vdCB0aGUgbnVtYmVyIGlzIGJpZ2dlciB0aGFuIHRoZSBublNpemVzICh3b3JrcyB1cCB0byA5OTk5KVxuICAgICAgICAgIGlmIChudW0gPiA5OTkgJiYgKG5uU2l6ZSA9PT0gMSB8fCBublNpemUgPT09IDIgfHwgbm5TaXplID09PSAzKSkgbm5TaXplID0gNDtlbHNlIGlmIChudW0gPiA5OSAmJiAobm5TaXplID09PSAxIHx8IG5uU2l6ZSA9PT0gMikpIG5uU2l6ZSA9IDM7ZWxzZSBpZiAobnVtID4gOSAmJiBublNpemUgPT0gMSkgbm5TaXplID0gMjtcbiAgICAgICAgICByZXR1cm4gX3RoaXMucGFkZHkobnVtLCBublNpemUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIG5ld0xheWVyTmFtZSA9IG5ld0xheWVyTmFtZS5yZXBsYWNlKC8lbisvZ2ksIHJlcGxhY2VOdW1iZXIpO1xuICAgICAgfVxuICAgICAgLy8gQWxwaGEgSW50ZXJhdG9yXG4gICAgICB2YXIgYWxwaGFTdHIgPSBcImFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6XCI7XG4gICAgICB2YXIgYWxwaGFBcnIgPSBhbHBoYVN0ci5zcGxpdChcIlwiKTtcbiAgICAgIHZhciB0b3RhbEFscGhhID0gYWxwaGFBcnIubGVuZ3RoO1xuICAgICAgLy8gUmVwbGFjZSBBbHBoYVxuICAgICAgZnVuY3Rpb24gcmVwbGFjZUFscGhhKG1hdGNoKSB7XG4gICAgICAgIHZhciBsZXR0ZXIgPSBtYXRjaC5jaGFyQXQoMSk7XG4gICAgICAgIHZhciBjdXJyZW50ID0gbWF0Y2ggPT09IFwiJWFyJVwiID8gb3B0aW9ucy5zZWxlY3Rpb25Db3VudCAtIG9wdGlvbnMuY3VycklkeCAtIDEgOiBvcHRpb25zLmN1cnJJZHg7XG4gICAgICAgIHZhciBhbHBoYSA9IGFscGhhQXJyW2N1cnJlbnQgJSB0b3RhbEFscGhhXTtcbiAgICAgICAgaWYgKGN1cnJlbnQgPj0gdG90YWxBbHBoYSkge1xuICAgICAgICAgIHZhciBmbElkeCA9IE1hdGguZmxvb3IoY3VycmVudCAvIHRvdGFsQWxwaGEpO1xuICAgICAgICAgIGFscGhhID0gXCJcIiArIGFscGhhQXJyW2ZsSWR4IC0gMV0gKyBhbHBoYTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGV0dGVyID09PSBcIkFcIiA/IGFscGhhLnRvVXBwZXJDYXNlKCkgOiBhbHBoYTtcbiAgICAgIH1cbiAgICAgIC8vIFJldmVyc2UgQWxwaGFcbiAgICAgIGlmIChyZXZlcnNlQUludGVyYXRvcnMgIT0gbnVsbCkge1xuICAgICAgICBuZXdMYXllck5hbWUgPSBuZXdMYXllck5hbWUucmVwbGFjZSh0aGlzLnNob3J0Y3V0KGFscGhhUmV2ZXJzZSksIHJlcGxhY2VBbHBoYSk7XG4gICAgICB9XG4gICAgICBpZiAoYUludGVyYXRvcnMgIT0gbnVsbCkge1xuICAgICAgICBuZXdMYXllck5hbWUgPSBuZXdMYXllck5hbWUucmVwbGFjZSh0aGlzLnNob3J0Y3V0KGFscGhhU2VxdWVuY2UpLCByZXBsYWNlQWxwaGEpO1xuICAgICAgfVxuXG4gICAgICAvLyBSZXBsYWNlIGFzdGVyaXNrc1xuICAgICAgbmV3TGF5ZXJOYW1lID0gX3RoaXMuY3VycmVudExheWVyKG5ld0xheWVyTmFtZSwgb3B0aW9ucy5sYXllck5hbWUpO1xuXG4gICAgICAvLyBBZGQgV2lkdGggYW5kL29yIGhlaWdodFxuICAgICAgbmV3TGF5ZXJOYW1lID0gbmV3TGF5ZXJOYW1lLnJlcGxhY2UodGhpcy5zaG9ydGN1dCh3aWR0aCksIG9wdGlvbnMud2lkdGgpO1xuICAgICAgbmV3TGF5ZXJOYW1lID0gbmV3TGF5ZXJOYW1lLnJlcGxhY2UodGhpcy5zaG9ydGN1dChoZWlnaHQpLCBvcHRpb25zLmhlaWdodCk7XG5cbiAgICAgIC8vIFBhZ2UgTmFtZVxuICAgICAgaWYgKHRoaXMuYWxsb3dQYWdlTmFtZSkge1xuICAgICAgICBuZXdMYXllck5hbWUgPSBuZXdMYXllck5hbWUucmVwbGFjZSh0aGlzLnNob3J0Y3V0KHBhZ2UpLCBvcHRpb25zLnBhZ2VOYW1lKTtcbiAgICAgIH1cblxuICAgICAgLy8gUGFyZW50IE5hbWVcbiAgICAgIGlmICh0aGlzLmFsbG93UGFyZW50KSB7XG4gICAgICAgIG5ld0xheWVyTmFtZSA9IG5ld0xheWVyTmFtZS5yZXBsYWNlKHRoaXMuc2hvcnRjdXQocGFyZW50KSwgb3B0aW9ucy5wYXJlbnROYW1lKTtcbiAgICAgIH1cblxuICAgICAgLy8gU3ltYm9sIE5hbWVcbiAgICAgIGlmICh0aGlzLmFsbG93U3ltYm9sKSB7XG4gICAgICAgIG5ld0xheWVyTmFtZSA9IG5ld0xheWVyTmFtZS5yZXBsYWNlKHRoaXMuc2hvcnRjdXQoc3ltYm9sKSwgb3B0aW9ucy5zeW1ib2xOYW1lKTtcbiAgICAgIH1cblxuICAgICAgLy8gTGF5ZXIgU3R5bGVcbiAgICAgIGlmICh0aGlzLmFsbG93TGF5ZXJTdHlsZSkge1xuICAgICAgICBuZXdMYXllck5hbWUgPSBuZXdMYXllck5hbWUucmVwbGFjZSh0aGlzLnNob3J0Y3V0KGxheWVyU3R5bGUpLCBvcHRpb25zLmxheWVyU3R5bGUpO1xuICAgICAgfVxuXG4gICAgICAvLyBDaGlsZCBMYXllciBOYW1lXG4gICAgICBpZiAodGhpcy5hbGxvd0NoaWxkTGF5ZXIpIHtcbiAgICAgICAgbmV3TGF5ZXJOYW1lID0gbmV3TGF5ZXJOYW1lLnJlcGxhY2UodGhpcy5zaG9ydGN1dChjaGlsZExheWVyKSwgb3B0aW9ucy5jaGlsZExheWVyKTtcbiAgICAgIH1cblxuICAgICAgLy8gUmV0dXJuIG5ldyBuYW1lXG4gICAgICByZXR1cm4gbmV3TGF5ZXJOYW1lO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBSZW5hbWU7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFJlbmFtZTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9GaW5kUmVwbGFjZSA9IHJlcXVpcmUoXCIuL0ZpbmRSZXBsYWNlXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJGaW5kUmVwbGFjZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9GaW5kUmVwbGFjZSkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfUmVuYW1lID0gcmVxdWlyZShcIi4vUmVuYW1lXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJSZW5hbWVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUmVuYW1lKS5kZWZhdWx0O1xuICB9XG59KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH0iLCJpbXBvcnQgeyBfX2Fzc2lnbiB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgcGFzY2FsQ2FzZSwgcGFzY2FsQ2FzZVRyYW5zZm9ybSwgcGFzY2FsQ2FzZVRyYW5zZm9ybU1lcmdlIH0gZnJvbSBcInBhc2NhbC1jYXNlXCI7XG5leHBvcnQgZnVuY3Rpb24gY2FtZWxDYXNlVHJhbnNmb3JtKGlucHV0LCBpbmRleCkge1xuICAgIGlmIChpbmRleCA9PT0gMClcbiAgICAgICAgcmV0dXJuIGlucHV0LnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIHBhc2NhbENhc2VUcmFuc2Zvcm0oaW5wdXQsIGluZGV4KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjYW1lbENhc2VUcmFuc2Zvcm1NZXJnZShpbnB1dCwgaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggPT09IDApXG4gICAgICAgIHJldHVybiBpbnB1dC50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiBwYXNjYWxDYXNlVHJhbnNmb3JtTWVyZ2UoaW5wdXQpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNhbWVsQ2FzZShpbnB1dCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgcmV0dXJuIHBhc2NhbENhc2UoaW5wdXQsIF9fYXNzaWduKHsgdHJhbnNmb3JtOiBjYW1lbENhc2VUcmFuc2Zvcm0gfSwgb3B0aW9ucykpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiZXhwb3J0ICogZnJvbSBcImNhbWVsLWNhc2VcIjtcbmV4cG9ydCAqIGZyb20gXCJjYXBpdGFsLWNhc2VcIjtcbmV4cG9ydCAqIGZyb20gXCJjb25zdGFudC1jYXNlXCI7XG5leHBvcnQgKiBmcm9tIFwiZG90LWNhc2VcIjtcbmV4cG9ydCAqIGZyb20gXCJoZWFkZXItY2FzZVwiO1xuZXhwb3J0ICogZnJvbSBcIm5vLWNhc2VcIjtcbmV4cG9ydCAqIGZyb20gXCJwYXJhbS1jYXNlXCI7XG5leHBvcnQgKiBmcm9tIFwicGFzY2FsLWNhc2VcIjtcbmV4cG9ydCAqIGZyb20gXCJwYXRoLWNhc2VcIjtcbmV4cG9ydCAqIGZyb20gXCJzZW50ZW5jZS1jYXNlXCI7XG5leHBvcnQgKiBmcm9tIFwic25ha2UtY2FzZVwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiaW1wb3J0IHsgX19hc3NpZ24gfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IG5vQ2FzZSB9IGZyb20gXCJuby1jYXNlXCI7XG5pbXBvcnQgeyB1cHBlckNhc2UgfSBmcm9tIFwidXBwZXItY2FzZVwiO1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0YW50Q2FzZShpbnB1dCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgcmV0dXJuIG5vQ2FzZShpbnB1dCwgX19hc3NpZ24oeyBkZWxpbWl0ZXI6IFwiX1wiLCB0cmFuc2Zvcm06IHVwcGVyQ2FzZSB9LCBvcHRpb25zKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgeyBfX2Fzc2lnbiB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgbm9DYXNlIH0gZnJvbSBcIm5vLWNhc2VcIjtcbmV4cG9ydCBmdW5jdGlvbiBkb3RDYXNlKGlucHV0LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICByZXR1cm4gbm9DYXNlKGlucHV0LCBfX2Fzc2lnbih7IGRlbGltaXRlcjogXCIuXCIgfSwgb3B0aW9ucykpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiaW1wb3J0IHsgX19hc3NpZ24gfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IGNhcGl0YWxDYXNlIH0gZnJvbSBcImNhcGl0YWwtY2FzZVwiO1xuZXhwb3J0IGZ1bmN0aW9uIGhlYWRlckNhc2UoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHJldHVybiBjYXBpdGFsQ2FzZShpbnB1dCwgX19hc3NpZ24oeyBkZWxpbWl0ZXI6IFwiLVwiIH0sIG9wdGlvbnMpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qKlxuICogU291cmNlOiBmdHA6Ly9mdHAudW5pY29kZS5vcmcvUHVibGljL1VDRC9sYXRlc3QvdWNkL1NwZWNpYWxDYXNpbmcudHh0XG4gKi9cbnZhciBTVVBQT1JURURfTE9DQUxFID0ge1xuICAgIHRyOiB7XG4gICAgICAgIHJlZ2V4cDogL1xcdTAxMzB8XFx1MDA0OXxcXHUwMDQ5XFx1MDMwNy9nLFxuICAgICAgICBtYXA6IHtcbiAgICAgICAgICAgIMSwOiBcIlxcdTAwNjlcIixcbiAgICAgICAgICAgIEk6IFwiXFx1MDEzMVwiLFxuICAgICAgICAgICAgScyHOiBcIlxcdTAwNjlcIlxuICAgICAgICB9XG4gICAgfSxcbiAgICBhejoge1xuICAgICAgICByZWdleHA6IC9cXHUwMTMwL2csXG4gICAgICAgIG1hcDoge1xuICAgICAgICAgICAgxLA6IFwiXFx1MDA2OVwiLFxuICAgICAgICAgICAgSTogXCJcXHUwMTMxXCIsXG4gICAgICAgICAgICBJzIc6IFwiXFx1MDA2OVwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGx0OiB7XG4gICAgICAgIHJlZ2V4cDogL1xcdTAwNDl8XFx1MDA0QXxcXHUwMTJFfFxcdTAwQ0N8XFx1MDBDRHxcXHUwMTI4L2csXG4gICAgICAgIG1hcDoge1xuICAgICAgICAgICAgSTogXCJcXHUwMDY5XFx1MDMwN1wiLFxuICAgICAgICAgICAgSjogXCJcXHUwMDZBXFx1MDMwN1wiLFxuICAgICAgICAgICAgxK46IFwiXFx1MDEyRlxcdTAzMDdcIixcbiAgICAgICAgICAgIMOMOiBcIlxcdTAwNjlcXHUwMzA3XFx1MDMwMFwiLFxuICAgICAgICAgICAgw406IFwiXFx1MDA2OVxcdTAzMDdcXHUwMzAxXCIsXG4gICAgICAgICAgICDEqDogXCJcXHUwMDY5XFx1MDMwN1xcdTAzMDNcIlxuICAgICAgICB9XG4gICAgfVxufTtcbi8qKlxuICogTG9jYWxpemVkIGxvd2VyIGNhc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2NhbGVMb3dlckNhc2Uoc3RyLCBsb2NhbGUpIHtcbiAgICB2YXIgbGFuZyA9IFNVUFBPUlRFRF9MT0NBTEVbbG9jYWxlLnRvTG93ZXJDYXNlKCldO1xuICAgIGlmIChsYW5nKVxuICAgICAgICByZXR1cm4gbG93ZXJDYXNlKHN0ci5yZXBsYWNlKGxhbmcucmVnZXhwLCBmdW5jdGlvbiAobSkgeyByZXR1cm4gbGFuZy5tYXBbbV07IH0pKTtcbiAgICByZXR1cm4gbG93ZXJDYXNlKHN0cik7XG59XG4vKipcbiAqIExvd2VyIGNhc2UgYXMgYSBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvd2VyQ2FzZShzdHIpIHtcbiAgICByZXR1cm4gc3RyLnRvTG93ZXJDYXNlKCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgeyBsb3dlckNhc2UgfSBmcm9tIFwibG93ZXItY2FzZVwiO1xuLy8gU3VwcG9ydCBjYW1lbCBjYXNlIChcImNhbWVsQ2FzZVwiIC0+IFwiY2FtZWwgQ2FzZVwiIGFuZCBcIkNBTUVMQ2FzZVwiIC0+IFwiQ0FNRUwgQ2FzZVwiKS5cbnZhciBERUZBVUxUX1NQTElUX1JFR0VYUCA9IFsvKFthLXowLTldKShbQS1aXSkvZywgLyhbQS1aXSkoW0EtWl1bYS16XSkvZ107XG4vLyBSZW1vdmUgYWxsIG5vbi13b3JkIGNoYXJhY3RlcnMuXG52YXIgREVGQVVMVF9TVFJJUF9SRUdFWFAgPSAvW15BLVowLTldKy9naTtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBzdHJpbmcgaW50byBzb21ldGhpbmcgb3RoZXIgbGlicmFyaWVzIGNhbiBtYW5pcHVsYXRlIGVhc2llci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vQ2FzZShpbnB1dCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zcGxpdFJlZ2V4cCwgc3BsaXRSZWdleHAgPSBfYSA9PT0gdm9pZCAwID8gREVGQVVMVF9TUExJVF9SRUdFWFAgOiBfYSwgX2IgPSBvcHRpb25zLnN0cmlwUmVnZXhwLCBzdHJpcFJlZ2V4cCA9IF9iID09PSB2b2lkIDAgPyBERUZBVUxUX1NUUklQX1JFR0VYUCA6IF9iLCBfYyA9IG9wdGlvbnMudHJhbnNmb3JtLCB0cmFuc2Zvcm0gPSBfYyA9PT0gdm9pZCAwID8gbG93ZXJDYXNlIDogX2MsIF9kID0gb3B0aW9ucy5kZWxpbWl0ZXIsIGRlbGltaXRlciA9IF9kID09PSB2b2lkIDAgPyBcIiBcIiA6IF9kO1xuICAgIHZhciByZXN1bHQgPSByZXBsYWNlKHJlcGxhY2UoaW5wdXQsIHNwbGl0UmVnZXhwLCBcIiQxXFwwJDJcIiksIHN0cmlwUmVnZXhwLCBcIlxcMFwiKTtcbiAgICB2YXIgc3RhcnQgPSAwO1xuICAgIHZhciBlbmQgPSByZXN1bHQubGVuZ3RoO1xuICAgIC8vIFRyaW0gdGhlIGRlbGltaXRlciBmcm9tIGFyb3VuZCB0aGUgb3V0cHV0IHN0cmluZy5cbiAgICB3aGlsZSAocmVzdWx0LmNoYXJBdChzdGFydCkgPT09IFwiXFwwXCIpXG4gICAgICAgIHN0YXJ0Kys7XG4gICAgd2hpbGUgKHJlc3VsdC5jaGFyQXQoZW5kIC0gMSkgPT09IFwiXFwwXCIpXG4gICAgICAgIGVuZC0tO1xuICAgIC8vIFRyYW5zZm9ybSBlYWNoIHRva2VuIGluZGVwZW5kZW50bHkuXG4gICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICAuc2xpY2Uoc3RhcnQsIGVuZClcbiAgICAgICAgLnNwbGl0KFwiXFwwXCIpXG4gICAgICAgIC5tYXAodHJhbnNmb3JtKVxuICAgICAgICAuam9pbihkZWxpbWl0ZXIpO1xufVxuLyoqXG4gKiBSZXBsYWNlIGByZWAgaW4gdGhlIGlucHV0IHN0cmluZyB3aXRoIHRoZSByZXBsYWNlbWVudCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gcmVwbGFjZShpbnB1dCwgcmUsIHZhbHVlKSB7XG4gICAgaWYgKHJlIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gaW5wdXQucmVwbGFjZShyZSwgdmFsdWUpO1xuICAgIHJldHVybiByZS5yZWR1Y2UoZnVuY3Rpb24gKGlucHV0LCByZSkgeyByZXR1cm4gaW5wdXQucmVwbGFjZShyZSwgdmFsdWUpOyB9LCBpbnB1dCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgeyBfX2Fzc2lnbiB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgZG90Q2FzZSB9IGZyb20gXCJkb3QtY2FzZVwiO1xuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtQ2FzZShpbnB1dCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgcmV0dXJuIGRvdENhc2UoaW5wdXQsIF9fYXNzaWduKHsgZGVsaW1pdGVyOiBcIi1cIiB9LCBvcHRpb25zKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgeyBfX2Fzc2lnbiB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgbm9DYXNlIH0gZnJvbSBcIm5vLWNhc2VcIjtcbmV4cG9ydCBmdW5jdGlvbiBwYXNjYWxDYXNlVHJhbnNmb3JtKGlucHV0LCBpbmRleCkge1xuICAgIHZhciBmaXJzdENoYXIgPSBpbnB1dC5jaGFyQXQoMCk7XG4gICAgdmFyIGxvd2VyQ2hhcnMgPSBpbnB1dC5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoaW5kZXggPiAwICYmIGZpcnN0Q2hhciA+PSBcIjBcIiAmJiBmaXJzdENoYXIgPD0gXCI5XCIpIHtcbiAgICAgICAgcmV0dXJuIFwiX1wiICsgZmlyc3RDaGFyICsgbG93ZXJDaGFycztcbiAgICB9XG4gICAgcmV0dXJuIFwiXCIgKyBmaXJzdENoYXIudG9VcHBlckNhc2UoKSArIGxvd2VyQ2hhcnM7XG59XG5leHBvcnQgZnVuY3Rpb24gcGFzY2FsQ2FzZVRyYW5zZm9ybU1lcmdlKGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgaW5wdXQuc2xpY2UoMSkudG9Mb3dlckNhc2UoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXNjYWxDYXNlKGlucHV0LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICByZXR1cm4gbm9DYXNlKGlucHV0LCBfX2Fzc2lnbih7IGRlbGltaXRlcjogXCJcIiwgdHJhbnNmb3JtOiBwYXNjYWxDYXNlVHJhbnNmb3JtIH0sIG9wdGlvbnMpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IF9fYXNzaWduIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBkb3RDYXNlIH0gZnJvbSBcImRvdC1jYXNlXCI7XG5leHBvcnQgZnVuY3Rpb24gcGF0aENhc2UoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHJldHVybiBkb3RDYXNlKGlucHV0LCBfX2Fzc2lnbih7IGRlbGltaXRlcjogXCIvXCIgfSwgb3B0aW9ucykpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiaW1wb3J0IHsgX19hc3NpZ24gfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IG5vQ2FzZSB9IGZyb20gXCJuby1jYXNlXCI7XG5pbXBvcnQgeyB1cHBlckNhc2VGaXJzdCB9IGZyb20gXCJ1cHBlci1jYXNlLWZpcnN0XCI7XG5leHBvcnQgZnVuY3Rpb24gc2VudGVuY2VDYXNlVHJhbnNmb3JtKGlucHV0LCBpbmRleCkge1xuICAgIHZhciByZXN1bHQgPSBpbnB1dC50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChpbmRleCA9PT0gMClcbiAgICAgICAgcmV0dXJuIHVwcGVyQ2FzZUZpcnN0KHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZW50ZW5jZUNhc2UoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHJldHVybiBub0Nhc2UoaW5wdXQsIF9fYXNzaWduKHsgZGVsaW1pdGVyOiBcIiBcIiwgdHJhbnNmb3JtOiBzZW50ZW5jZUNhc2VUcmFuc2Zvcm0gfSwgb3B0aW9ucykpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiaW1wb3J0IHsgX19hc3NpZ24gfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IGRvdENhc2UgfSBmcm9tIFwiZG90LWNhc2VcIjtcbmV4cG9ydCBmdW5jdGlvbiBzbmFrZUNhc2UoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHJldHVybiBkb3RDYXNlKGlucHV0LCBfX2Fzc2lnbih7IGRlbGltaXRlcjogXCJfXCIgfSwgb3B0aW9ucykpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLyoqXG4gKiBVcHBlciBjYXNlIHRoZSBmaXJzdCBjaGFyYWN0ZXIgb2YgYW4gaW5wdXQgc3RyaW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXBwZXJDYXNlRmlyc3QoaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBpbnB1dC5zdWJzdHIoMSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKipcbiAqIFNvdXJjZTogZnRwOi8vZnRwLnVuaWNvZGUub3JnL1B1YmxpYy9VQ0QvbGF0ZXN0L3VjZC9TcGVjaWFsQ2FzaW5nLnR4dFxuICovXG52YXIgU1VQUE9SVEVEX0xPQ0FMRSA9IHtcbiAgICB0cjoge1xuICAgICAgICByZWdleHA6IC9bXFx1MDA2OV0vZyxcbiAgICAgICAgbWFwOiB7XG4gICAgICAgICAgICBpOiBcIlxcdTAxMzBcIlxuICAgICAgICB9XG4gICAgfSxcbiAgICBhejoge1xuICAgICAgICByZWdleHA6IC9bXFx1MDA2OV0vZyxcbiAgICAgICAgbWFwOiB7XG4gICAgICAgICAgICBpOiBcIlxcdTAxMzBcIlxuICAgICAgICB9XG4gICAgfSxcbiAgICBsdDoge1xuICAgICAgICByZWdleHA6IC9bXFx1MDA2OVxcdTAwNkFcXHUwMTJGXVxcdTAzMDd8XFx1MDA2OVxcdTAzMDdbXFx1MDMwMFxcdTAzMDFcXHUwMzAzXS9nLFxuICAgICAgICBtYXA6IHtcbiAgICAgICAgICAgIGnMhzogXCJcXHUwMDQ5XCIsXG4gICAgICAgICAgICBqzIc6IFwiXFx1MDA0QVwiLFxuICAgICAgICAgICAgxK/MhzogXCJcXHUwMTJFXCIsXG4gICAgICAgICAgICBpzIfMgDogXCJcXHUwMENDXCIsXG4gICAgICAgICAgICBpzIfMgTogXCJcXHUwMENEXCIsXG4gICAgICAgICAgICBpzIfMgzogXCJcXHUwMTI4XCJcbiAgICAgICAgfVxuICAgIH1cbn07XG4vKipcbiAqIExvY2FsaXplZCB1cHBlciBjYXNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbG9jYWxlVXBwZXJDYXNlKHN0ciwgbG9jYWxlKSB7XG4gICAgdmFyIGxhbmcgPSBTVVBQT1JURURfTE9DQUxFW2xvY2FsZS50b0xvd2VyQ2FzZSgpXTtcbiAgICBpZiAobGFuZylcbiAgICAgICAgcmV0dXJuIHVwcGVyQ2FzZShzdHIucmVwbGFjZShsYW5nLnJlZ2V4cCwgZnVuY3Rpb24gKG0pIHsgcmV0dXJuIGxhbmcubWFwW21dOyB9KSk7XG4gICAgcmV0dXJuIHVwcGVyQ2FzZShzdHIpO1xufVxuLyoqXG4gKiBVcHBlciBjYXNlIGFzIGEgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cHBlckNhc2Uoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci50b1VwcGVyQ2FzZSgpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiaW1wb3J0IHsgX19hc3NpZ24gfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IG5vQ2FzZSB9IGZyb20gXCJuby1jYXNlXCI7XG5pbXBvcnQgeyB1cHBlckNhc2VGaXJzdCB9IGZyb20gXCJ1cHBlci1jYXNlLWZpcnN0XCI7XG5leHBvcnQgZnVuY3Rpb24gY2FwaXRhbENhc2VUcmFuc2Zvcm0oaW5wdXQpIHtcbiAgICByZXR1cm4gdXBwZXJDYXNlRmlyc3QoaW5wdXQudG9Mb3dlckNhc2UoKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gY2FwaXRhbENhc2UoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHJldHVybiBub0Nhc2UoaW5wdXQsIF9fYXNzaWduKHsgZGVsaW1pdGVyOiBcIiBcIiwgdHJhbnNmb3JtOiBjYXBpdGFsQ2FzZVRyYW5zZm9ybSB9LCBvcHRpb25zKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKipcbiAqIFNvdXJjZTogZnRwOi8vZnRwLnVuaWNvZGUub3JnL1B1YmxpYy9VQ0QvbGF0ZXN0L3VjZC9TcGVjaWFsQ2FzaW5nLnR4dFxuICovXG52YXIgU1VQUE9SVEVEX0xPQ0FMRSA9IHtcbiAgICB0cjoge1xuICAgICAgICByZWdleHA6IC9cXHUwMTMwfFxcdTAwNDl8XFx1MDA0OVxcdTAzMDcvZyxcbiAgICAgICAgbWFwOiB7XG4gICAgICAgICAgICDEsDogXCJcXHUwMDY5XCIsXG4gICAgICAgICAgICBJOiBcIlxcdTAxMzFcIixcbiAgICAgICAgICAgIEnMhzogXCJcXHUwMDY5XCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgYXo6IHtcbiAgICAgICAgcmVnZXhwOiAvXFx1MDEzMC9nLFxuICAgICAgICBtYXA6IHtcbiAgICAgICAgICAgIMSwOiBcIlxcdTAwNjlcIixcbiAgICAgICAgICAgIEk6IFwiXFx1MDEzMVwiLFxuICAgICAgICAgICAgScyHOiBcIlxcdTAwNjlcIlxuICAgICAgICB9XG4gICAgfSxcbiAgICBsdDoge1xuICAgICAgICByZWdleHA6IC9cXHUwMDQ5fFxcdTAwNEF8XFx1MDEyRXxcXHUwMENDfFxcdTAwQ0R8XFx1MDEyOC9nLFxuICAgICAgICBtYXA6IHtcbiAgICAgICAgICAgIEk6IFwiXFx1MDA2OVxcdTAzMDdcIixcbiAgICAgICAgICAgIEo6IFwiXFx1MDA2QVxcdTAzMDdcIixcbiAgICAgICAgICAgIMSuOiBcIlxcdTAxMkZcXHUwMzA3XCIsXG4gICAgICAgICAgICDDjDogXCJcXHUwMDY5XFx1MDMwN1xcdTAzMDBcIixcbiAgICAgICAgICAgIMONOiBcIlxcdTAwNjlcXHUwMzA3XFx1MDMwMVwiLFxuICAgICAgICAgICAgxKg6IFwiXFx1MDA2OVxcdTAzMDdcXHUwMzAzXCJcbiAgICAgICAgfVxuICAgIH1cbn07XG4vKipcbiAqIExvY2FsaXplZCBsb3dlciBjYXNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbG9jYWxlTG93ZXJDYXNlKHN0ciwgbG9jYWxlKSB7XG4gICAgdmFyIGxhbmcgPSBTVVBQT1JURURfTE9DQUxFW2xvY2FsZS50b0xvd2VyQ2FzZSgpXTtcbiAgICBpZiAobGFuZylcbiAgICAgICAgcmV0dXJuIGxvd2VyQ2FzZShzdHIucmVwbGFjZShsYW5nLnJlZ2V4cCwgZnVuY3Rpb24gKG0pIHsgcmV0dXJuIGxhbmcubWFwW21dOyB9KSk7XG4gICAgcmV0dXJuIGxvd2VyQ2FzZShzdHIpO1xufVxuLyoqXG4gKiBMb3dlciBjYXNlIGFzIGEgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb3dlckNhc2Uoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiaW1wb3J0IHsgbG93ZXJDYXNlIH0gZnJvbSBcImxvd2VyLWNhc2VcIjtcbi8vIFN1cHBvcnQgY2FtZWwgY2FzZSAoXCJjYW1lbENhc2VcIiAtPiBcImNhbWVsIENhc2VcIiBhbmQgXCJDQU1FTENhc2VcIiAtPiBcIkNBTUVMIENhc2VcIikuXG52YXIgREVGQVVMVF9TUExJVF9SRUdFWFAgPSBbLyhbYS16MC05XSkoW0EtWl0pL2csIC8oW0EtWl0pKFtBLVpdW2Etel0pL2ddO1xuLy8gUmVtb3ZlIGFsbCBub24td29yZCBjaGFyYWN0ZXJzLlxudmFyIERFRkFVTFRfU1RSSVBfUkVHRVhQID0gL1teQS1aMC05XSsvZ2k7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgc3RyaW5nIGludG8gc29tZXRoaW5nIG90aGVyIGxpYnJhcmllcyBjYW4gbWFuaXB1bGF0ZSBlYXNpZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub0Nhc2UoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3BsaXRSZWdleHAsIHNwbGl0UmVnZXhwID0gX2EgPT09IHZvaWQgMCA/IERFRkFVTFRfU1BMSVRfUkVHRVhQIDogX2EsIF9iID0gb3B0aW9ucy5zdHJpcFJlZ2V4cCwgc3RyaXBSZWdleHAgPSBfYiA9PT0gdm9pZCAwID8gREVGQVVMVF9TVFJJUF9SRUdFWFAgOiBfYiwgX2MgPSBvcHRpb25zLnRyYW5zZm9ybSwgdHJhbnNmb3JtID0gX2MgPT09IHZvaWQgMCA/IGxvd2VyQ2FzZSA6IF9jLCBfZCA9IG9wdGlvbnMuZGVsaW1pdGVyLCBkZWxpbWl0ZXIgPSBfZCA9PT0gdm9pZCAwID8gXCIgXCIgOiBfZDtcbiAgICB2YXIgcmVzdWx0ID0gcmVwbGFjZShyZXBsYWNlKGlucHV0LCBzcGxpdFJlZ2V4cCwgXCIkMVxcMCQyXCIpLCBzdHJpcFJlZ2V4cCwgXCJcXDBcIik7XG4gICAgdmFyIHN0YXJ0ID0gMDtcbiAgICB2YXIgZW5kID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAvLyBUcmltIHRoZSBkZWxpbWl0ZXIgZnJvbSBhcm91bmQgdGhlIG91dHB1dCBzdHJpbmcuXG4gICAgd2hpbGUgKHJlc3VsdC5jaGFyQXQoc3RhcnQpID09PSBcIlxcMFwiKVxuICAgICAgICBzdGFydCsrO1xuICAgIHdoaWxlIChyZXN1bHQuY2hhckF0KGVuZCAtIDEpID09PSBcIlxcMFwiKVxuICAgICAgICBlbmQtLTtcbiAgICAvLyBUcmFuc2Zvcm0gZWFjaCB0b2tlbiBpbmRlcGVuZGVudGx5LlxuICAgIHJldHVybiByZXN1bHRcbiAgICAgICAgLnNsaWNlKHN0YXJ0LCBlbmQpXG4gICAgICAgIC5zcGxpdChcIlxcMFwiKVxuICAgICAgICAubWFwKHRyYW5zZm9ybSlcbiAgICAgICAgLmpvaW4oZGVsaW1pdGVyKTtcbn1cbi8qKlxuICogUmVwbGFjZSBgcmVgIGluIHRoZSBpbnB1dCBzdHJpbmcgd2l0aCB0aGUgcmVwbGFjZW1lbnQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHJlcGxhY2UoaW5wdXQsIHJlLCB2YWx1ZSkge1xuICAgIGlmIChyZSBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIGlucHV0LnJlcGxhY2UocmUsIHZhbHVlKTtcbiAgICByZXR1cm4gcmUucmVkdWNlKGZ1bmN0aW9uIChpbnB1dCwgcmUpIHsgcmV0dXJuIGlucHV0LnJlcGxhY2UocmUsIHZhbHVlKTsgfSwgaW5wdXQpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLyoqXG4gKiBVcHBlciBjYXNlIHRoZSBmaXJzdCBjaGFyYWN0ZXIgb2YgYW4gaW5wdXQgc3RyaW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXBwZXJDYXNlRmlyc3QoaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBpbnB1dC5zdWJzdHIoMSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUiA9IHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyA/IFJlZmxlY3QgOiBudWxsXG52YXIgUmVmbGVjdEFwcGx5ID0gUiAmJiB0eXBlb2YgUi5hcHBseSA9PT0gJ2Z1bmN0aW9uJ1xuICA/IFIuYXBwbHlcbiAgOiBmdW5jdGlvbiBSZWZsZWN0QXBwbHkodGFyZ2V0LCByZWNlaXZlciwgYXJncykge1xuICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbCh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKTtcbiAgfVxuXG52YXIgUmVmbGVjdE93bktleXNcbmlmIChSICYmIHR5cGVvZiBSLm93bktleXMgPT09ICdmdW5jdGlvbicpIHtcbiAgUmVmbGVjdE93bktleXMgPSBSLm93bktleXNcbn0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpXG4gICAgICAuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KSk7XG4gIH07XG59IGVsc2Uge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBQcm9jZXNzRW1pdFdhcm5pbmcod2FybmluZykge1xuICBpZiAoY29uc29sZSAmJiBjb25zb2xlLndhcm4pIGNvbnNvbGUud2Fybih3YXJuaW5nKTtcbn1cblxudmFyIE51bWJlcklzTmFOID0gTnVtYmVyLmlzTmFOIHx8IGZ1bmN0aW9uIE51bWJlcklzTmFOKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgRXZlbnRFbWl0dGVyLmluaXQuY2FsbCh0aGlzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50c0NvdW50ID0gMDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxudmFyIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuZnVuY3Rpb24gY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcikge1xuICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEV2ZW50RW1pdHRlciwgJ2RlZmF1bHRNYXhMaXN0ZW5lcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24oYXJnKSB7XG4gICAgaWYgKHR5cGVvZiBhcmcgIT09ICdudW1iZXInIHx8IGFyZyA8IDAgfHwgTnVtYmVySXNOYU4oYXJnKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcImRlZmF1bHRNYXhMaXN0ZW5lcnNcIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgYXJnICsgJy4nKTtcbiAgICB9XG4gICAgZGVmYXVsdE1heExpc3RlbmVycyA9IGFyZztcbiAgfVxufSk7XG5cbkV2ZW50RW1pdHRlci5pbml0ID0gZnVuY3Rpb24oKSB7XG5cbiAgaWYgKHRoaXMuX2V2ZW50cyA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICB0aGlzLl9ldmVudHMgPT09IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5fZXZlbnRzKSB7XG4gICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gIH1cblxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufTtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gc2V0TWF4TGlzdGVuZXJzKG4pIHtcbiAgaWYgKHR5cGVvZiBuICE9PSAnbnVtYmVyJyB8fCBuIDwgMCB8fCBOdW1iZXJJc05hTihuKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJuXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIG4gKyAnLicpO1xuICB9XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuZnVuY3Rpb24gX2dldE1heExpc3RlbmVycyh0aGF0KSB7XG4gIGlmICh0aGF0Ll9tYXhMaXN0ZW5lcnMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIHJldHVybiB0aGF0Ll9tYXhMaXN0ZW5lcnM7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZ2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gZ2V0TWF4TGlzdGVuZXJzKCkge1xuICByZXR1cm4gX2dldE1heExpc3RlbmVycyh0aGlzKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQodHlwZSkge1xuICB2YXIgYXJncyA9IFtdO1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIHZhciBkb0Vycm9yID0gKHR5cGUgPT09ICdlcnJvcicpO1xuXG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZClcbiAgICBkb0Vycm9yID0gKGRvRXJyb3IgJiYgZXZlbnRzLmVycm9yID09PSB1bmRlZmluZWQpO1xuICBlbHNlIGlmICghZG9FcnJvcilcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAoZG9FcnJvcikge1xuICAgIHZhciBlcjtcbiAgICBpZiAoYXJncy5sZW5ndGggPiAwKVxuICAgICAgZXIgPSBhcmdzWzBdO1xuICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAvLyBOb3RlOiBUaGUgY29tbWVudHMgb24gdGhlIGB0aHJvd2AgbGluZXMgYXJlIGludGVudGlvbmFsLCB0aGV5IHNob3dcbiAgICAgIC8vIHVwIGluIE5vZGUncyBvdXRwdXQgaWYgdGhpcyByZXN1bHRzIGluIGFuIHVuaGFuZGxlZCBleGNlcHRpb24uXG4gICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICB9XG4gICAgLy8gQXQgbGVhc3QgZ2l2ZSBzb21lIGtpbmQgb2YgY29udGV4dCB0byB0aGUgdXNlclxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ1VuaGFuZGxlZCBlcnJvci4nICsgKGVyID8gJyAoJyArIGVyLm1lc3NhZ2UgKyAnKScgOiAnJykpO1xuICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgdGhyb3cgZXJyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICB9XG5cbiAgdmFyIGhhbmRsZXIgPSBldmVudHNbdHlwZV07XG5cbiAgaWYgKGhhbmRsZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgUmVmbGVjdEFwcGx5KGhhbmRsZXIsIHRoaXMsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBsZW4gPSBoYW5kbGVyLmxlbmd0aDtcbiAgICB2YXIgbGlzdGVuZXJzID0gYXJyYXlDbG9uZShoYW5kbGVyLCBsZW4pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpXG4gICAgICBSZWZsZWN0QXBwbHkobGlzdGVuZXJzW2ldLCB0aGlzLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuZnVuY3Rpb24gX2FkZExpc3RlbmVyKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIsIHByZXBlbmQpIHtcbiAgdmFyIG07XG4gIHZhciBldmVudHM7XG4gIHZhciBleGlzdGluZztcblxuICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcblxuICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRhcmdldC5fZXZlbnRzQ291bnQgPSAwO1xuICB9IGVsc2Uge1xuICAgIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gICAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICAgIGlmIChldmVudHMubmV3TGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0LmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyID8gbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cbiAgICAgIC8vIFJlLWFzc2lnbiBgZXZlbnRzYCBiZWNhdXNlIGEgbmV3TGlzdGVuZXIgaGFuZGxlciBjb3VsZCBoYXZlIGNhdXNlZCB0aGVcbiAgICAgIC8vIHRoaXMuX2V2ZW50cyB0byBiZSBhc3NpZ25lZCB0byBhIG5ldyBvYmplY3RcbiAgICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICAgIH1cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXTtcbiAgfVxuXG4gIGlmIChleGlzdGluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgICArK3RhcmdldC5fZXZlbnRzQ291bnQ7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHR5cGVvZiBleGlzdGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9XG4gICAgICAgIHByZXBlbmQgPyBbbGlzdGVuZXIsIGV4aXN0aW5nXSA6IFtleGlzdGluZywgbGlzdGVuZXJdO1xuICAgICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIH0gZWxzZSBpZiAocHJlcGVuZCkge1xuICAgICAgZXhpc3RpbmcudW5zaGlmdChsaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4aXN0aW5nLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gICAgbSA9IF9nZXRNYXhMaXN0ZW5lcnModGFyZ2V0KTtcbiAgICBpZiAobSA+IDAgJiYgZXhpc3RpbmcubGVuZ3RoID4gbSAmJiAhZXhpc3Rpbmcud2FybmVkKSB7XG4gICAgICBleGlzdGluZy53YXJuZWQgPSB0cnVlO1xuICAgICAgLy8gTm8gZXJyb3IgY29kZSBmb3IgdGhpcyBzaW5jZSBpdCBpcyBhIFdhcm5pbmdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgdmFyIHcgPSBuZXcgRXJyb3IoJ1Bvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgbGVhayBkZXRlY3RlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLmxlbmd0aCArICcgJyArIFN0cmluZyh0eXBlKSArICcgbGlzdGVuZXJzICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnYWRkZWQuIFVzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnaW5jcmVhc2UgbGltaXQnKTtcbiAgICAgIHcubmFtZSA9ICdNYXhMaXN0ZW5lcnNFeGNlZWRlZFdhcm5pbmcnO1xuICAgICAgdy5lbWl0dGVyID0gdGFyZ2V0O1xuICAgICAgdy50eXBlID0gdHlwZTtcbiAgICAgIHcuY291bnQgPSBleGlzdGluZy5sZW5ndGg7XG4gICAgICBQcm9jZXNzRW1pdFdhcm5pbmcodyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCB0cnVlKTtcbiAgICB9O1xuXG5mdW5jdGlvbiBvbmNlV3JhcHBlcigpIHtcbiAgaWYgKCF0aGlzLmZpcmVkKSB7XG4gICAgdGhpcy50YXJnZXQucmVtb3ZlTGlzdGVuZXIodGhpcy50eXBlLCB0aGlzLndyYXBGbik7XG4gICAgdGhpcy5maXJlZCA9IHRydWU7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApXG4gICAgICByZXR1cm4gdGhpcy5saXN0ZW5lci5jYWxsKHRoaXMudGFyZ2V0KTtcbiAgICByZXR1cm4gdGhpcy5saXN0ZW5lci5hcHBseSh0aGlzLnRhcmdldCwgYXJndW1lbnRzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfb25jZVdyYXAodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgc3RhdGUgPSB7IGZpcmVkOiBmYWxzZSwgd3JhcEZuOiB1bmRlZmluZWQsIHRhcmdldDogdGFyZ2V0LCB0eXBlOiB0eXBlLCBsaXN0ZW5lcjogbGlzdGVuZXIgfTtcbiAgdmFyIHdyYXBwZWQgPSBvbmNlV3JhcHBlci5iaW5kKHN0YXRlKTtcbiAgd3JhcHBlZC5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICBzdGF0ZS53cmFwRm4gPSB3cmFwcGVkO1xuICByZXR1cm4gd3JhcHBlZDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSh0eXBlLCBsaXN0ZW5lcikge1xuICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcbiAgdGhpcy5vbih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRPbmNlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRPbmNlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgdGhpcy5wcmVwZW5kTGlzdGVuZXIodHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4vLyBFbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWYgYW5kIG9ubHkgaWYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHZhciBsaXN0LCBldmVudHMsIHBvc2l0aW9uLCBpLCBvcmlnaW5hbExpc3RlbmVyO1xuXG4gICAgICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgbGlzdCA9IGV2ZW50c1t0eXBlXTtcbiAgICAgIGlmIChsaXN0ID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHwgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3QubGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBsaXN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHBvc2l0aW9uID0gLTE7XG5cbiAgICAgICAgZm9yIChpID0gbGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fCBsaXN0W2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgb3JpZ2luYWxMaXN0ZW5lciA9IGxpc3RbaV0ubGlzdGVuZXI7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9zaXRpb24gPCAwKVxuICAgICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gMClcbiAgICAgICAgICBsaXN0LnNoaWZ0KCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHNwbGljZU9uZShsaXN0LCBwb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpXG4gICAgICAgICAgZXZlbnRzW3R5cGVdID0gbGlzdFswXTtcblxuICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIG9yaWdpbmFsTGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cbiAgICBmdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcnModHlwZSkge1xuICAgICAgdmFyIGxpc3RlbmVycywgZXZlbnRzLCBpO1xuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG4gICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudHNbdHlwZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZXZlbnRzKTtcbiAgICAgICAgdmFyIGtleTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGxpc3RlbmVycyA9IGV2ZW50c1t0eXBlXTtcblxuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBMSUZPIG9yZGVyXG4gICAgICAgIGZvciAoaSA9IGxpc3RlbmVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5mdW5jdGlvbiBfbGlzdGVuZXJzKHRhcmdldCwgdHlwZSwgdW53cmFwKSB7XG4gIHZhciBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuICBpZiAoZXZsaXN0ZW5lciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpXG4gICAgcmV0dXJuIHVud3JhcCA/IFtldmxpc3RlbmVyLmxpc3RlbmVyIHx8IGV2bGlzdGVuZXJdIDogW2V2bGlzdGVuZXJdO1xuXG4gIHJldHVybiB1bndyYXAgP1xuICAgIHVud3JhcExpc3RlbmVycyhldmxpc3RlbmVyKSA6IGFycmF5Q2xvbmUoZXZsaXN0ZW5lciwgZXZsaXN0ZW5lci5sZW5ndGgpO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIHRydWUpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yYXdMaXN0ZW5lcnMgPSBmdW5jdGlvbiByYXdMaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLmxpc3RlbmVyQ291bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBsaXN0ZW5lckNvdW50LmNhbGwoZW1pdHRlciwgdHlwZSk7XG4gIH1cbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGxpc3RlbmVyQ291bnQ7XG5mdW5jdGlvbiBsaXN0ZW5lckNvdW50KHR5cGUpIHtcbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcblxuICAgIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChldmxpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gMDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5ldmVudE5hbWVzID0gZnVuY3Rpb24gZXZlbnROYW1lcygpIHtcbiAgcmV0dXJuIHRoaXMuX2V2ZW50c0NvdW50ID4gMCA/IFJlZmxlY3RPd25LZXlzKHRoaXMuX2V2ZW50cykgOiBbXTtcbn07XG5cbmZ1bmN0aW9uIGFycmF5Q2xvbmUoYXJyLCBuKSB7XG4gIHZhciBjb3B5ID0gbmV3IEFycmF5KG4pO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG47ICsraSlcbiAgICBjb3B5W2ldID0gYXJyW2ldO1xuICByZXR1cm4gY29weTtcbn1cblxuZnVuY3Rpb24gc3BsaWNlT25lKGxpc3QsIGluZGV4KSB7XG4gIGZvciAoOyBpbmRleCArIDEgPCBsaXN0Lmxlbmd0aDsgaW5kZXgrKylcbiAgICBsaXN0W2luZGV4XSA9IGxpc3RbaW5kZXggKyAxXTtcbiAgbGlzdC5wb3AoKTtcbn1cblxuZnVuY3Rpb24gdW53cmFwTGlzdGVuZXJzKGFycikge1xuICB2YXIgcmV0ID0gbmV3IEFycmF5KGFyci5sZW5ndGgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJldC5sZW5ndGg7ICsraSkge1xuICAgIHJldFtpXSA9IGFycltpXS5saXN0ZW5lciB8fCBhcnJbaV07XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cbiIsInZhciBpc0VtcHR5ID0gcmVxdWlyZSgnaXMtZW1wdHknKVxudmFyIGlzV2hpdGVzcGFjZSA9IHJlcXVpcmUoJ2lzLXdoaXRlc3BhY2UnKVxuXG5mdW5jdGlvbiBpc1N0cmluZyAob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnc3RyaW5nJ1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgcmV0dXJuIGlzU3RyaW5nKG9iamVjdCkgJiYgb2JqZWN0Lmxlbmd0aCA/IGlzV2hpdGVzcGFjZShvYmplY3QpIDogaXNFbXB0eShvYmplY3QpXG59XG4iLCJcbi8qKlxuICogSGFzIG93biBwcm9wZXJ0eS5cbiAqXG4gKiBAdHlwZSB7RnVuY3Rpb259XG4gKi9cblxudmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHlcblxuLyoqXG4gKiBUbyBzdHJpbmcuXG4gKlxuICogQHR5cGUge0Z1bmN0aW9ufVxuICovXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcblxuLyoqXG4gKiBUZXN0IHdoZXRoZXIgYSB2YWx1ZSBpcyBcImVtcHR5XCIuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbmZ1bmN0aW9uIGlzRW1wdHkodmFsKSB7XG4gIC8vIE51bGwgYW5kIFVuZGVmaW5lZC4uLlxuICBpZiAodmFsID09IG51bGwpIHJldHVybiB0cnVlXG5cbiAgLy8gQm9vbGVhbnMuLi5cbiAgaWYgKCdib29sZWFuJyA9PSB0eXBlb2YgdmFsKSByZXR1cm4gZmFsc2VcblxuICAvLyBOdW1iZXJzLi4uXG4gIGlmICgnbnVtYmVyJyA9PSB0eXBlb2YgdmFsKSByZXR1cm4gdmFsID09PSAwXG5cbiAgLy8gU3RyaW5ncy4uLlxuICBpZiAoJ3N0cmluZycgPT0gdHlwZW9mIHZhbCkgcmV0dXJuIHZhbC5sZW5ndGggPT09IDBcblxuICAvLyBGdW5jdGlvbnMuLi5cbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIHZhbCkgcmV0dXJuIHZhbC5sZW5ndGggPT09IDBcblxuICAvLyBBcnJheXMuLi5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkgcmV0dXJuIHZhbC5sZW5ndGggPT09IDBcblxuICAvLyBFcnJvcnMuLi5cbiAgaWYgKHZhbCBpbnN0YW5jZW9mIEVycm9yKSByZXR1cm4gdmFsLm1lc3NhZ2UgPT09ICcnXG5cbiAgLy8gT2JqZWN0cy4uLlxuICBpZiAodmFsLnRvU3RyaW5nID09IHRvU3RyaW5nKSB7XG4gICAgc3dpdGNoICh2YWwudG9TdHJpbmcoKSkge1xuXG4gICAgICAvLyBNYXBzLCBTZXRzLCBGaWxlcyBhbmQgRXJyb3JzLi4uXG4gICAgICBjYXNlICdbb2JqZWN0IEZpbGVdJzpcbiAgICAgIGNhc2UgJ1tvYmplY3QgTWFwXSc6XG4gICAgICBjYXNlICdbb2JqZWN0IFNldF0nOiB7XG4gICAgICAgIHJldHVybiB2YWwuc2l6ZSA9PT0gMFxuICAgICAgfVxuXG4gICAgICAvLyBQbGFpbiBvYmplY3RzLi4uXG4gICAgICBjYXNlICdbb2JqZWN0IE9iamVjdF0nOiB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiB2YWwpIHtcbiAgICAgICAgICBpZiAoaGFzLmNhbGwodmFsLCBrZXkpKSByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQW55dGhpbmcgZWxzZS4uLlxuICByZXR1cm4gZmFsc2Vcbn1cblxuLyoqXG4gKiBFeHBvcnQgYGlzRW1wdHlgLlxuICpcbiAqIEB0eXBlIHtGdW5jdGlvbn1cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRW1wdHlcbiIsIi8qIVxuICogaXMtd2hpdGVzcGFjZSA8aHR0cHM6Ly9naXRodWIuY29tL2pvbnNjaGxpbmtlcnQvaXMtd2hpdGVzcGFjZT5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtMjAxNSwgSm9uIFNjaGxpbmtlcnQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgY2FjaGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNXaGl0ZXNwYWNlKHN0cikge1xuICByZXR1cm4gKHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnKSAmJiByZWdleCgpLnRlc3Qoc3RyKTtcbn07XG5cbmZ1bmN0aW9uIHJlZ2V4KCkge1xuICAvLyBlbnN1cmUgdGhhdCBydW50aW1lIGNvbXBpbGF0aW9uIG9ubHkgaGFwcGVucyBvbmNlXG4gIHJldHVybiBjYWNoZSB8fCAoY2FjaGUgPSBuZXcgUmVnRXhwKCdeW1xcXFxzXFx4MDlcXHgwQVxceDBCXFx4MENcXHgwRFxceDIwXFx4QTBcXHUxNjgwXFx1MTgwRVxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDNcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBBXFx1MjAyRlxcdTIwNUZcXHUzMDAwXFx1MjAyOFxcdTIwMjlcXHVGRUZGXCJdKyQnKSk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFsgJ3RoZScsICdhJywgJ2FuJywgJ3NvbWUnIF1cbiIsIm1vZHVsZS5leHBvcnRzID0gW1xuICAgICdhcydcbiAgLCAnYmVjYXVzZSdcbiAgLCAnZm9yJ1xuICAsICdhbmQnXG4gICwgJ25vcidcbiAgLCAnYnV0J1xuICAsICdvcidcbiAgLCAneWV0J1xuICAsICdzbydcbl1cbiIsIm1vZHVsZS5leHBvcnRzID0gW1xuICAgICdhJ1xuICAsICdhYmFmdCdcbiAgLCAnYWJvYXJkJ1xuICAsICdhYm91dCdcbiAgLCAnYWJvdmUnXG4gICwgJ2Fic2VudCdcbiAgLCAnYWNyb3NzJ1xuICAsICdhZm9yZSdcbiAgLCAnYWZ0ZXInXG4gICwgJ2FnYWluc3QnXG4gICwgJ2Fsb25nJ1xuICAsICdhbG9uZ3NpZGUnXG4gICwgJ2FtaWQnXG4gICwgJ2FtaWRzdCdcbiAgLCAnYW1vbmcnXG4gICwgJ2Ftb25nc3QnXG4gICwgJ2FuJ1xuICAsICdhcHJvcG9zJ1xuICAsICdhcHVkJ1xuICAsICdhcm91bmQnXG4gICwgJ2FzJ1xuICAsICdhc2lkZSdcbiAgLCAnYXN0cmlkZSdcbiAgLCAnYXQnXG4gICwgJ2F0aHdhcnQnXG4gICwgJ2F0b3AnXG4gICwgJ2JhcnJpbmcnXG4gICwgJ2JlZm9yZSdcbiAgLCAnYmVoaW5kJ1xuICAsICdiZWxvdydcbiAgLCAnYmVuZWF0aCdcbiAgLCAnYmVzaWRlJ1xuICAsICdiZXNpZGVzJ1xuICAsICdiZXR3ZWVuJ1xuICAsICdiZXlvbmQnXG4gICwgJ2J1dCdcbiAgLCAnYnknXG4gICwgJ2NpcmNhJ1xuICAsICdjb25jZXJuaW5nJ1xuICAsICdkZXNwaXRlJ1xuICAsICdkb3duJ1xuICAsICdkdXJpbmcnXG4gICwgJ2V4Y2VwdCdcbiAgLCAnZXhjbHVkaW5nJ1xuICAsICdmYWlsaW5nJ1xuICAsICdmb2xsb3dpbmcnXG4gICwgJ2ZvcidcbiAgLCAnZm9yZW5lbnN0J1xuICAsICdmcm9tJ1xuICAsICdnaXZlbidcbiAgLCAnaW4nXG4gICwgJ2luY2x1ZGluZydcbiAgLCAnaW5zaWRlJ1xuICAsICdpbnRvJ1xuICAsICdsaWtlJ1xuICAsICdtaWQnXG4gICwgJ21pZHN0J1xuICAsICdtaW51cydcbiAgLCAnbW9kdWxvJ1xuICAsICduZWFyJ1xuICAsICduZXh0J1xuICAsICdub3R3aXRoc3RhbmRpbmcnXG4gICwgJ29cXCcnXG4gICwgJ29mJ1xuICAsICdvZmYnXG4gICwgJ29uJ1xuICAsICdvbnRvJ1xuICAsICdvcHBvc2l0ZSdcbiAgLCAnb3V0J1xuICAsICdvdXRzaWRlJ1xuICAsICdvdmVyJ1xuICAsICdwYWNlJ1xuICAsICdwYXN0J1xuICAsICdwZXInXG4gICwgJ3BsdXMnXG4gICwgJ3BybydcbiAgLCAncXVhJ1xuICAsICdyZWdhcmRpbmcnXG4gICwgJ3JvdW5kJ1xuICAsICdzYW5zJ1xuICAsICdzYXZlJ1xuICAsICdzaW5jZSdcbiAgLCAndGhhbidcbiAgLCAndGhyb3VnaCdcbiAgLCAndGhyb3VnaG91dCdcbiAgLCAndGhydSdcbiAgLCAndGhydW91dCdcbiAgLCAndGlsbCdcbiAgLCAndGltZXMnXG4gICwgJ3RvJ1xuICAsICd0b3dhcmQnXG4gICwgJ3Rvd2FyZHMnXG4gICwgJ3VuZGVyJ1xuICAsICd1bmRlcm5lYXRoJ1xuICAsICd1bmxpa2UnXG4gICwgJ3VudGlsJ1xuICAsICd1bnRvJ1xuICAsICd1cCdcbiAgLCAndXBvbidcbiAgLCAndmVyc3VzJ1xuICAsICd2aWEnXG4gICwgJ3ZpY2UnXG4gICwgJ3Zpcy3DoC12aXMnXG4gICwgJ3dpdGgnXG4gICwgJ3dpdGhpbidcbiAgLCAnd2l0aG91dCdcbiAgLCAnd29ydGgnXG5dXG4iLCIvKlxuICogVG8gVGl0bGUgQ2FzZSAyLjEg4oCTIGh0dHA6Ly9pbmRpdmlkZWQuY29tL2NvZGUvdG8tdGl0bGUtY2FzZS9cbiAqIENvcHlyaWdodCDCqSAyMDA44oCTMjAxMyBEYXZpZCBHb3VjaC4gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICpcbiAqIG1vZGlmaWNhdGlvbnMgYnkgQHJ2YWdnIEFwci0yMDE0XG4gKi9cblxuLy9TdHJpbmcucHJvdG90eXBlLnRvVGl0bGVDYXNlID0gZnVuY3Rpb24oKXtcblxuXG52YXIgc21hbGxXb3JkcyA9IC9eKGF8YW58YW5kfGFzfGF0fGJ1dHxieXxlbnxmb3J8aWZ8aW58bm9yfG9mfG9ufG9yfHBlcnx0aGV8dG98dnM/XFwuP3x2aWEpJC9pO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdG9UaXRsZUNhc2Uoc3RyKXtcbiAgcmV0dXJuIHRpdGxlQ2FzZShzdHIsIHNtYWxsV29yZHMpXG59XG5cblxubW9kdWxlLmV4cG9ydHMudG9UaXRsZUNhc2UgPSBtb2R1bGUuZXhwb3J0c1xuXG5cbnZhciBsYXhXb3JkcyA9IHJlcXVpcmUoJy4vYXJ0aWNsZXMnKS5jb25jYXQocmVxdWlyZSgnLi9wcmVwb3NpdGlvbnMnKSkuY29uY2F0KHJlcXVpcmUoJy4vY29uanVuY3Rpb25zJykpXG4gICAgICAuY29uY2F0KHNtYWxsV29yZHMuc291cmNlLnJlcGxhY2UoLyheXFxeXFwofFxcKVxcJCQpL2csICcnKS5zcGxpdCgnfCcpKVxuICAgICAgLmNvbmNhdChbJ2lzJ10pIC8vIGEgcGVyc29uYWwgcHJlZmVyZW5jZVxuICAsIGxheFdvcmRzUmUgPSBuZXcgUmVnRXhwKCdeKCcgKyBsYXhXb3Jkcy5qb2luKCd8JykgKyAnKSQnLCAnaScpXG5cblxubW9kdWxlLmV4cG9ydHMudG9MYXhUaXRsZUNhc2UgPSBmdW5jdGlvbiB0b0xheFRpdGxlQ2FzZShzdHIpe1xuICByZXR1cm4gdGl0bGVDYXNlKHN0ciwgbGF4V29yZHNSZSlcbn1cblxuXG5mdW5jdGlvbiB0aXRsZUNhc2UgKHN0ciwgc21hbGxXb3Jkcykge1xuICBpZiAoIXN0cilcbiAgICByZXR1cm4gc3RyXG4gIHJldHVybiBzdHIucmVwbGFjZSgvW0EtWmEtejAtOVxcdTAwQzAtXFx1MDBGRl0rW15cXHMtXSovZywgZnVuY3Rpb24obWF0Y2gsIGluZGV4LCB0aXRsZSl7XG4gICAgaWYgKGluZGV4ID4gMCAmJiBpbmRleCArIG1hdGNoLmxlbmd0aCAhPT0gdGl0bGUubGVuZ3RoICYmXG4gICAgICBtYXRjaC5zZWFyY2goc21hbGxXb3JkcykgPiAtMSAmJiB0aXRsZS5jaGFyQXQoaW5kZXggLSAyKSAhPT0gJzonICYmXG4gICAgICAodGl0bGUuY2hhckF0KGluZGV4ICsgbWF0Y2gubGVuZ3RoKSAhPT0gJy0nIHx8IHRpdGxlLmNoYXJBdChpbmRleCAtIDEpID09PSAnLScpICYmXG4gICAgICB0aXRsZS5jaGFyQXQoaW5kZXggLSAxKS5zZWFyY2goL1teXFxzLV0vKSA8IDApIHtcbiAgICAgIHJldHVybiBtYXRjaC50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIGlmIChtYXRjaC5zdWJzdHIoMSkuc2VhcmNoKC9bQS1aXXxcXC4uLykgPiAtMSkge1xuICAgICAgcmV0dXJuIG1hdGNoO1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG1hdGNoLnN1YnN0cigxKTtcbiAgfSk7XG59XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCIvKlxuICogQEF1dGhvcjogUm9kcmlnbyBTb2FyZXNcbiAqIEBEYXRlOiAyMDE5LTA3LTMxIDIwOjM2OjIzXG4gKiBATGFzdCBNb2RpZmllZCBieTogUm9kcmlnbyBTb2FyZXNcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMjAtMDUtMTUgMjM6NTg6NTBcbiAqL1xuXG4vKipcbiAqIFJlbmFtZSBkYXRhXG4gKlxuICogQGV4cG9ydFxuICogQHBhcmFtIHtPYmplY3R9IGl0ZW1cbiAqIEBwYXJhbSB7TnVtYmVyfSBzZWxlY3Rpb25Db3VudFxuICogQHBhcmFtIHtTdHJpbmd9IGlucHV0TmFtZVxuICogQHBhcmFtIHtOdW1iZXJ9IHN0YXJ0RnJvbVxuICogQHBhcmFtIHtTdHJpbmd9IHBhZ2VOYW1lXG4gKiBAcmV0dXJucyBTdHJ1Y3R1cmVkIG9iamVjdCBkYXRhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW5hbWVEYXRhKFxuICBpdGVtLFxuICBzZWxlY3Rpb25Db3VudCxcbiAgaW5wdXROYW1lLFxuICBzdGFydHNGcm9tLFxuICBwYWdlTmFtZVxuKSB7XG4gIHJldHVybiB7XG4gICAgbGF5ZXJOYW1lOiBpdGVtLmxheWVyTmFtZSxcbiAgICBjdXJySWR4OiBpdGVtLmlkeCxcbiAgICB3aWR0aDogaXRlbS53aWR0aCxcbiAgICBoZWlnaHQ6IGl0ZW0uaGVpZ2h0LFxuICAgIHNlbGVjdGlvbkNvdW50LFxuICAgIGlucHV0TmFtZSxcbiAgICBzdGFydHNGcm9tOiBOdW1iZXIoc3RhcnRzRnJvbSksXG4gICAgcGFnZU5hbWUsXG4gICAgcGFyZW50TmFtZTogaXRlbS5wYXJlbnROYW1lLFxuICAgIHN5bWJvbE5hbWU6IGl0ZW0uc3ltYm9sTmFtZSxcbiAgICBsYXllclN0eWxlOiBpdGVtLmxheWVyU3R5bGUsXG4gICAgY2hpbGRMYXllcjogaXRlbS5jaGlsZExheWVyLFxuICB9XG59XG5cbi8qKlxuICogRmluZCBhbmQgcmVwbGFjZSBkYXRhXG4gKlxuICogQGV4cG9ydFxuICogQHBhcmFtIHtPYmplY3R9IGl0ZW1cbiAqIEBwYXJhbSB7U3RyaW5nfSBmaW5kVGV4dFxuICogQHBhcmFtIHtTdHJpbmd9IHJlcGxhY2VXaXRoXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGNhc2VTZW5zaXRpdmVcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kUmVwbGFjZURhdGEoaXRlbSwgZmluZFRleHQsIHJlcGxhY2VXaXRoLCBjYXNlU2Vuc2l0aXZlKSB7XG4gIHJldHVybiB7XG4gICAgbGF5ZXJOYW1lOiBpdGVtLmxheWVyTmFtZSxcbiAgICBjdXJySWR4OiBpdGVtLmlkeCxcbiAgICBmaW5kVGV4dCxcbiAgICByZXBsYWNlV2l0aCxcbiAgICBjYXNlU2Vuc2l0aXZlLFxuICB9XG59XG4iLCIvKlxuICogQEF1dGhvcjogUm9kcmlnbyBTb2FyZXNcbiAqIEBEYXRlOiAyMDIwLTA1LTE1IDExOjAyOjIyXG4gKiBATGFzdCBNb2RpZmllZCBieTogUm9kcmlnbyBTb2FyZXNcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMjAtMDUtMTUgMjM6NTg6MjZcbiAqL1xuXG4vKipcbiAqIENoZWNrIHdlYXRoZXIgb3Igbm8gYSBsYXllciBoYXMgc3R5bGVzXG4gKlxuICogQGV4cG9ydFxuICogQHBhcmFtIHsqfSBpdGVtXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhc1N0eWxlcyhpdGVtOiBhbnkpIHtcbiAgaWYgKGl0ZW0udGV4dFN0eWxlSWQgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBpdGVtLnRleHRTdHlsZUlkICE9PSAnJ1xuICB9IGVsc2UgaWYgKGl0ZW0uZmlsbFN0eWxlSWQgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBpdGVtLmZpbGxTdHlsZUlkICE9PSAnJ1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbi8qKlxuICogR2V0IGxheWVyIFN0eWxlIGlkXG4gKlxuICogQHBhcmFtIHsqfSBpdGVtXG4gKiBAcmV0dXJuc1xuICovXG5mdW5jdGlvbiBzdHlsZUlkKGl0ZW06IGFueSkge1xuICBpZiAoaXRlbS5jb25zdHJ1Y3Rvci5uYW1lID09PSAnVGV4dE5vZGUnKSB7XG4gICAgcmV0dXJuIGl0ZW0udGV4dFN0eWxlSWRcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gaXRlbS5maWxsU3R5bGVJZFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHlsZShpdGVtOiBhbnkpIHtcbiAgbGV0IG5hbWUgPSAnJ1xuICBpZiAoaGFzU3R5bGVzKGl0ZW0pKSB7XG4gICAgY29uc3Qgc3R5bGUgPSBmaWdtYS5nZXRTdHlsZUJ5SWQoc3R5bGVJZChpdGVtKSlcbiAgICBuYW1lID0gc3R5bGUgIT09IG51bGwgPyBzdHlsZS5uYW1lIDogJydcbiAgfVxuXG4gIHJldHVybiBuYW1lXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNTeW1ib2xzKGl0ZW06IGFueSkge1xuICByZXR1cm4gaXRlbS5jb25zdHJ1Y3Rvci5uYW1lID09PSAnSW5zdGFuY2VOb2RlJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3ltYm9sTmFtZShpdGVtOiBhbnkpIHtcbiAgbGV0IG5hbWUgPSAnJ1xuICBpZiAoaGFzU3ltYm9scyhpdGVtKSkge1xuICAgIG5hbWUgPSBpdGVtLm1hc3RlckNvbXBvbmVudC5uYW1lXG4gIH1cblxuICByZXR1cm4gbmFtZVxufVxuXG4vKipcbiAqIENoZWNrIGlmIGhhcyBjaGlsZCBsYXllclxuICpcbiAqIEBleHBvcnRcbiAqIEBwYXJhbSB7Kn0gaXRlbVxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNDaGlsZExheWVyKGl0ZW06IGFueSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdGVtLmNoaWxkcmVuICE9PSB1bmRlZmluZWQgJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgZmlyc3QgY2hpbGQgbGF5ZXIgYW5kIHJldHVybiBpdHMgbmFtZVxuICpcbiAqIEBleHBvcnRcbiAqIEBwYXJhbSB7Kn0gaXRlbVxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENoaWxkTGF5ZXIoaXRlbTogYW55KSB7XG4gIGxldCBuYW1lID0gJydcblxuICBpZiAoaGFzQ2hpbGRMYXllcihpdGVtKSkge1xuICAgIGNvbnN0IGlkeCA9IGl0ZW0uY2hpbGRyZW4ubGVuZ3RoIC0gMVxuICAgIG5hbWUgPSBTdHJpbmcoaXRlbS5jaGlsZHJlbltpZHhdLm5hbWUpXG4gIH1cblxuICByZXR1cm4gbmFtZVxufVxuIiwiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSBcImV2ZW50c1wiXG5cbmZ1bmN0aW9uIGNyZWF0ZUludGVyZmFjZShyZW5kZXJlcikge1xuICBjb25zdCBlbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgY29uc3QgcmVjZWl2ZSA9IHJlc3VsdCA9PiB7XG4gICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuZXZlbnQpIHtcbiAgICAgIGVtaXR0ZXIuZW1pdChyZXN1bHQuZXZlbnQsIHJlc3VsdC5kYXRhKVxuICAgIH1cbiAgfVxuXG4gIGlmIChyZW5kZXJlcikge1xuICAgIHdpbmRvdy5vbm1lc3NhZ2UgPSBldiA9PiByZWNlaXZlKGV2LmRhdGEucGx1Z2luTWVzc2FnZSlcbiAgfSBlbHNlIHtcbiAgICBmaWdtYS51aS5vbm1lc3NhZ2UgPSBkYXRhID0+IHJlY2VpdmUoZGF0YSlcbiAgfVxuXG4gIGVtaXR0ZXIuc2VuZCA9IGZ1bmN0aW9uKGV2ZW50LCBkYXRhKSB7XG4gICAgaWYgKHR5cGVvZiBldmVudCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0ZWQgZmlyc3QgYXJndW1lbnQgdG8gYmUgYW4gZXZlbnQgbmFtZSBzdHJpbmdcIilcbiAgICB9XG4gICAgY29uc3QgcG9zdERhdGEgPSB7XG4gICAgICBldmVudCxcbiAgICAgIGRhdGFcbiAgICB9XG4gICAgaWYgKHJlbmRlcmVyKSB7XG4gICAgICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKHsgcGx1Z2luTWVzc2FnZTogcG9zdERhdGEgfSwgXCIqXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHBvc3REYXRhKVxuICAgIH1cbiAgfVxuXG4gIGVtaXR0ZXIuYXN5bmMgPSBmdW5jdGlvbihldikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMub25jZShldiwgcmVzb2x2ZSlcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGVtaXR0ZXJcbn1cblxuY29uc3QgaXNSZW5kZXJlciA9IHR5cGVvZiBmaWdtYSA9PT0gXCJ1bmRlZmluZWRcIlxuZXhwb3J0IGNvbnN0IGh0bWwgPSBpc1JlbmRlcmVyID8gY3JlYXRlSW50ZXJmYWNlKHRydWUpIDogdW5kZWZpbmVkXG5leHBvcnQgY29uc3Qgc2NyaXB0ID0gaXNSZW5kZXJlciA/IHVuZGVmaW5lZCA6IGNyZWF0ZUludGVyZmFjZSgpXG4iLCIvKlxuICogQEF1dGhvcjogUm9kcmlnbyBTb2FyZXNcbiAqIEBEYXRlOiAyMDE5LTA3LTMxIDE5OjAxOjQ1XG4gKiBATGFzdCBNb2RpZmllZCBieTogUm9kcmlnbyBTb2FyZXNcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMjAtMDUtMTYgMDA6MDc6MDRcbiAqL1xuXG5pbXBvcnQge1xuICBnZXRTdHlsZSxcbiAgZ2V0U3ltYm9sTmFtZSxcbiAgaGFzU3R5bGVzLFxuICBoYXNTeW1ib2xzLFxuICBoYXNDaGlsZExheWVyLFxuICBnZXRDaGlsZExheWVyLFxufSBmcm9tICcuL0xpYi9SZW5hbWVIZWxwZXInXG5cbmV4cG9ydCBlbnVtIFdoZXJlVG8ge1xuICBSZW5hbWVMYXllcnMgPSAncmVuYW1lTGF5ZXJzJyxcbiAgRmluZFJlcGxhY2UgPSAnZmluZFJlcGxhY2UnLFxuICBTZXR0aW5ncyA9ICdzZXR0aW5ncycsXG4gIE5vU2VsZWN0aW9uID0gJ25vU2VsZWN0aW9uJyxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc1NlbGVjdGlvbihkYXRhOiBhbnkpIHtcbiAgcmV0dXJuIGRhdGEuc2VsZWN0aW9uLmxlbmd0aCA+IDBcbn1cblxuZnVuY3Rpb24gbGF5ZXJPYmplY3QoaXRlbTogYW55LCBpbmRleCkge1xuICByZXR1cm4ge1xuICAgIGxheWVyTmFtZTogaXRlbS5uYW1lLFxuICAgIGlkeDogaW5kZXgsXG4gICAgd2lkdGg6IGl0ZW0ud2lkdGgsXG4gICAgaGVpZ2h0OiBpdGVtLmhlaWdodCxcbiAgICBwYXJlbnROYW1lOiBpdGVtLnBhcmVudC5uYW1lLFxuICAgIGxheWVyU3R5bGU6IGdldFN0eWxlKGl0ZW0pLFxuICAgIHN5bWJvbE5hbWU6IGdldFN5bWJvbE5hbWUoaXRlbSksXG4gICAgY2hpbGRMYXllcjogZ2V0Q2hpbGRMYXllcihpdGVtKSxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVvcmRlclNlbGVjdGlvbihkYXRhOiBhbnkpIHtcbiAgaWYgKCFoYXNTZWxlY3Rpb24oZGF0YSkpIHJldHVybiBkYXRhLnNlbGVjdGlvblxuXG4gIGNvbnN0IGZpcnN0UGFyZW50ID0gZGF0YS5zZWxlY3Rpb25bMF0ucGFyZW50XG4gIGNvbnN0IHNhbWVQYXJlbnQgPSBkYXRhLnNlbGVjdGlvbi5ldmVyeShcbiAgICAoZWxlbSkgPT4gZWxlbS5wYXJlbnQuaWQgPT09IGZpcnN0UGFyZW50LmlkXG4gIClcbiAgaWYgKHNhbWVQYXJlbnQpIHtcbiAgICBjb25zdCBhcnIgPSBbXVxuICAgIGZpcnN0UGFyZW50LmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBpZiAoZGF0YS5zZWxlY3Rpb24uaW5jbHVkZXMoY2hpbGQpKSB7XG4gICAgICAgIGFyci5wdXNoKGNoaWxkKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gYXJyXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRhdGEuc2VsZWN0aW9uXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRGF0YShkYXRhOiBhbnkpIHtcbiAgY29uc3Qgb2JqZWN0ID0ge1xuICAgIHBhZ2VOYW1lOiBkYXRhLm5hbWUgYXMgc3RyaW5nLFxuICAgIHNlbGVjdGlvbkNvdW50OiBkYXRhLnNlbGVjdGlvbi5sZW5ndGggYXMgbnVtYmVyLFxuICAgIHNlbGVjdGlvbjogW10gYXMgYW55W10sXG4gICAgaGFzTGF5ZXJTdHlsZTogZmFsc2UgYXMgYm9vbGVhbixcbiAgICBoYXNTeW1ib2w6IGZhbHNlIGFzIGJvb2xlYW4sXG4gICAgaGFzQ2hpbGRMYXllcjogZmFsc2UgYXMgYm9vbGVhbixcbiAgfVxuXG4gIGNvbnN0IHNlbCA9IHJlb3JkZXJTZWxlY3Rpb24oZGF0YSlcbiAgc2VsLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgaWYgKCFvYmplY3QuaGFzTGF5ZXJTdHlsZSkgb2JqZWN0Lmhhc0xheWVyU3R5bGUgPSBoYXNTdHlsZXMoaXRlbSlcbiAgICBpZiAoIW9iamVjdC5oYXNTeW1ib2wpIG9iamVjdC5oYXNTeW1ib2wgPSBoYXNTeW1ib2xzKGl0ZW0pXG4gICAgaWYgKCFvYmplY3QuaGFzQ2hpbGRMYXllcikgb2JqZWN0Lmhhc0NoaWxkTGF5ZXIgPSBoYXNDaGlsZExheWVyKGl0ZW0pXG5cbiAgICBvYmplY3Quc2VsZWN0aW9uW2luZGV4XSA9IGxheWVyT2JqZWN0KGl0ZW0sIGluZGV4KVxuICB9KVxuXG4gIHJldHVybiBvYmplY3Rcbn1cbiIsIi8qXG4gKiBAQXV0aG9yOiBSb2RyaWdvIFNvYXJlc1xuICogQERhdGU6IDIwMTktMDctMzEgMjA6MzY6MTFcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSb2RyaWdvIFNvYXJlc1xuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAyMC0wNS0xNSAyMzo1ODo1M1xuICovXG5cbmltcG9ydCB7IHNjcmlwdCBhcyBpbyB9IGZyb20gJy4vTGliL2lvLmpzJ1xuaW1wb3J0IHsgUmVuYW1lLCBGaW5kUmVwbGFjZSB9IGZyb20gJ0Byb2RpMDEvcmVuYW1laXRsaWInXG5pbXBvcnQgKiBhcyBpc0JsYW5rIGZyb20gJ2lzLWJsYW5rJ1xuaW1wb3J0IHsgcGFyc2VEYXRhLCBXaGVyZVRvLCByZW9yZGVyU2VsZWN0aW9uLCBoYXNTZWxlY3Rpb24gfSBmcm9tICcuL1V0aWxpdGllcydcbmltcG9ydCB7IGZpbmRSZXBsYWNlRGF0YSwgcmVuYW1lRGF0YSB9IGZyb20gJy4vTGliL0RhdGFIZWxwZXInXG5cbmNvbnN0IGRhdGEgPSBwYXJzZURhdGEoZmlnbWEuY3VycmVudFBhZ2UpXG5cbmZ1bmN0aW9uIGRvUmVuYW1lKHJlbmFtZSwgaXRlbSwgaW5kZXgsIGlucHV0RGF0YSkge1xuICBjb25zdCBvcHRpb25zID0gcmVuYW1lRGF0YShcbiAgICBpdGVtLFxuICAgIGRhdGEuc2VsZWN0aW9uQ291bnQsXG4gICAgaW5wdXREYXRhLm5hbWVJbnB1dCxcbiAgICBpbnB1dERhdGEuc2VxdWVuY2VJbnB1dCxcbiAgICBkYXRhLnBhZ2VOYW1lXG4gIClcblxuICByZXR1cm4gcmVuYW1lLmxheWVyKHtcbiAgICAuLi5pdGVtLFxuICAgIC4uLm9wdGlvbnMsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGRvRmluZFJlcGxhY2UoZmluZFJlcGxhY2UsIGl0ZW0sIGlucHV0RGF0YSkge1xuICBjb25zdCBvcHRpb25zID0gZmluZFJlcGxhY2VEYXRhKFxuICAgIGl0ZW0sXG4gICAgaW5wdXREYXRhLmZpbmRUZXh0LFxuICAgIGlucHV0RGF0YS5yZXBsYWNlVGV4dCxcbiAgICBpbnB1dERhdGEuY2FzZVNlbnNpdGl2ZVxuICApXG5cbiAgcmV0dXJuIGZpbmRSZXBsYWNlLm1hdGNoKG9wdGlvbnMpID8gZmluZFJlcGxhY2UubGF5ZXIob3B0aW9ucykgOiBmYWxzZVxufVxuXG5mdW5jdGlvbiB0aGVVSSgpIHtcbiAgbGV0IHRvID0gJ25vU2VsZWN0aW9uJ1xuICBsZXQgd2luZG93T3B0aW9ucyA9IHtcbiAgICB3aWR0aDogNDMwLFxuICAgIGhlaWdodDogNDcwLFxuICB9XG5cbiAgLy8gU2V0IHNjcmVlbiB0byBzaG93XG4gIGlmIChmaWdtYS5jb21tYW5kID09PSBXaGVyZVRvLlJlbmFtZUxheWVycyAmJiBoYXNTZWxlY3Rpb24oZGF0YSkpIHtcbiAgICB0byA9IFdoZXJlVG8uUmVuYW1lTGF5ZXJzXG4gIH0gZWxzZSBpZiAoZmlnbWEuY29tbWFuZCA9PT0gV2hlcmVUby5GaW5kUmVwbGFjZSAmJiBoYXNTZWxlY3Rpb24oZGF0YSkpIHtcbiAgICB0byA9IFdoZXJlVG8uRmluZFJlcGxhY2VcbiAgICB3aW5kb3dPcHRpb25zID0ge1xuICAgICAgd2lkdGg6IDQzMCxcbiAgICAgIGhlaWdodDogMzA1LFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0byA9IFdoZXJlVG8uTm9TZWxlY3Rpb25cbiAgICB3aW5kb3dPcHRpb25zID0ge1xuICAgICAgd2lkdGg6IDMwMCxcbiAgICAgIGhlaWdodDogMTQwLFxuICAgIH1cbiAgfVxuXG4gIGZpZ21hLnNob3dVSShfX2h0bWxfXywgd2luZG93T3B0aW9ucylcblxuICBpby5zZW5kKCdzZW5kRGF0YScsIHtcbiAgICBkYXRhOiBkYXRhLFxuICAgIGNvbW1hbmQ6IHRvLFxuICB9KVxuXG4gIGlvLm9uY2UoJ3JlbmFtZUxheWVycycsIChkKSA9PiB7XG4gICAgY29uc3QgcmVuYW1lID0gbmV3IFJlbmFtZSh7IGFsbG93Q2hpbGRMYXllcjogdHJ1ZSB9KVxuICAgIGNvbnN0IHNlbCA9IHJlb3JkZXJTZWxlY3Rpb24oZmlnbWEuY3VycmVudFBhZ2UpXG4gICAgc2VsLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBuYW1lID0gZG9SZW5hbWUocmVuYW1lLCBkYXRhLnNlbGVjdGlvbltpbmRleF0sIGluZGV4LCBkKVxuICAgICAgaWYgKCFpc0JsYW5rKG5hbWUpKSB7XG4gICAgICAgIGl0ZW0ubmFtZSA9IG5hbWVcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgZmlnbWEuY2xvc2VQbHVnaW4oKVxuICB9KVxuXG4gIGlvLm9uY2UoJ2ZpbmRSZXBsYWNlTGF5ZXJzJywgKGQpID0+IHtcbiAgICBjb25zdCBmaW5kUmVwbGFjZSA9IG5ldyBGaW5kUmVwbGFjZSgpXG4gICAgY29uc3Qgc2VsID0gcmVvcmRlclNlbGVjdGlvbihmaWdtYS5jdXJyZW50UGFnZSlcbiAgICBzZWwuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG5hbWUgPSBkb0ZpbmRSZXBsYWNlKGZpbmRSZXBsYWNlLCBkYXRhLnNlbGVjdGlvbltpbmRleF0sIGQpXG4gICAgICBpZiAobmFtZSkgaXRlbS5uYW1lID0gbmFtZVxuICAgIH0pXG5cbiAgICBmaWdtYS5jbG9zZVBsdWdpbigpXG4gIH0pXG5cbiAgaW8ub25jZSgnY2FuY2VsJywgKGQpID0+IHtcbiAgICBmaWdtYS5jbG9zZVBsdWdpbigpXG4gIH0pXG59XG5cbnRoZVVJKClcbiJdLCJzb3VyY2VSb290IjoiIn0=