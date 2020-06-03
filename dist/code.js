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

/***/ "./manifest.json":
/*!***********************!*\
  !*** ./manifest.json ***!
  \***********************/
/*! exports provided: name, id, api, ui, main, menu, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"Rename It\",\"id\":\"731271836271143349\",\"api\":\"1.0.0\",\"ui\":\"dist/ui.html\",\"main\":\"dist/code.js\",\"menu\":[{\"name\":\"Rename Selected Layers\",\"command\":\"renameLayers\"},{\"name\":\"Find and Replace Selected Layers\",\"command\":\"findReplace\"},{\"separator\":true},{\"name\":\"Settings\",\"command\":\"settings\"},{\"name\":\"Donate\",\"command\":\"donate\"}]}");

/***/ }),

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

/***/ "./node_modules/uuid/dist/esm-browser/bytesToUuid.js":
/*!***********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/bytesToUuid.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex; // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4

  return [bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]]].join('');
}

/* harmony default export */ __webpack_exports__["default"] = (bytesToUuid);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/index.js ***!
  \*****************************************************/
/*! exports provided: v1, v3, v4, v5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v1.js */ "./node_modules/uuid/dist/esm-browser/v1.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v1", function() { return _v1_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _v3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v3.js */ "./node_modules/uuid/dist/esm-browser/v3.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v3", function() { return _v3_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _v4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./v4.js */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v4", function() { return _v4_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _v5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./v5.js */ "./node_modules/uuid/dist/esm-browser/v5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v5", function() { return _v5_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/md5.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/md5.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes == 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Array(msg.length);

    for (var i = 0; i < msg.length; i++) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  var i;
  var x;
  var output = [];
  var length32 = input.length * 32;
  var hexTab = '0123456789abcdef';
  var hex;

  for (i = 0; i < length32; i += 8) {
    x = input[i >> 5] >>> i % 32 & 0xff;
    hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[(len + 64 >>> 9 << 4) + 14] = len;
  var i;
  var olda;
  var oldb;
  var oldc;
  var oldd;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;

  for (i = 0; i < x.length; i += 16) {
    olda = a;
    oldb = b;
    oldc = c;
    oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  var i;
  var output = [];
  output[(input.length >> 2) - 1] = undefined;

  for (i = 0; i < output.length; i += 1) {
    output[i] = 0;
  }

  var length8 = input.length * 8;

  for (i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

/* harmony default export */ __webpack_exports__["default"] = (md5);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rng; });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
// find the complete implementation of crypto (msCrypto) on IE11.
var getRandomValues = typeof crypto != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != 'undefined' && typeof msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto);
var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

function rng() {
  if (!getRandomValues) {
    throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/sha1.js":
/*!****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/sha1.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes == 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Array(msg.length);

    for (var i = 0; i < msg.length; i++) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  bytes.push(0x80);
  var l = bytes.length / 4 + 2;
  var N = Math.ceil(l / 16);
  var M = new Array(N);

  for (var i = 0; i < N; i++) {
    M[i] = new Array(16);

    for (var j = 0; j < 16; j++) {
      M[i][j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
    }
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (var i = 0; i < N; i++) {
    var W = new Array(80);

    for (var t = 0; t < 16; t++) {
      W[t] = M[i][t];
    }

    for (var t = 16; t < 80; t++) {
      W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
    }

    var a = H[0];
    var b = H[1];
    var c = H[2];
    var d = H[3];
    var e = H[4];

    for (var t = 0; t < 80; t++) {
      var s = Math.floor(t / 20);
      var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

/* harmony default export */ __webpack_exports__["default"] = (sha1);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v1.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v1.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bytesToUuid.js */ "./node_modules/uuid/dist/esm-browser/bytesToUuid.js");

 // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;

var _clockseq; // Previous uuid creation time


var _lastMSecs = 0;
var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];
  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    var seedBytes = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : Object(_bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__["default"])(b);
}

/* harmony default export */ __webpack_exports__["default"] = (v1);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v3.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v3.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "./node_modules/uuid/dist/esm-browser/v35.js");
/* harmony import */ var _md5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./md5.js */ "./node_modules/uuid/dist/esm-browser/md5.js");


var v3 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v3', 0x30, _md5_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (v3);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v35.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v35.js ***!
  \***************************************************/
/*! exports provided: DNS, URL, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DNS", function() { return DNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return URL; });
/* harmony import */ var _bytesToUuid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bytesToUuid.js */ "./node_modules/uuid/dist/esm-browser/bytesToUuid.js");


function uuidToBytes(uuid) {
  // Note: We assume we're being passed a valid uuid string
  var bytes = [];
  uuid.replace(/[a-fA-F0-9]{2}/g, function (hex) {
    bytes.push(parseInt(hex, 16));
  });
  return bytes;
}

function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  var bytes = new Array(str.length);

  for (var i = 0; i < str.length; i++) {
    bytes[i] = str.charCodeAt(i);
  }

  return bytes;
}

var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
var URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
/* harmony default export */ __webpack_exports__["default"] = (function (name, version, hashfunc) {
  var generateUUID = function generateUUID(value, namespace, buf, offset) {
    var off = buf && offset || 0;
    if (typeof value == 'string') value = stringToBytes(value);
    if (typeof namespace == 'string') namespace = uuidToBytes(namespace);
    if (!Array.isArray(value)) throw TypeError('value must be an array of bytes');
    if (!Array.isArray(namespace) || namespace.length !== 16) throw TypeError('namespace must be uuid string or an Array of 16 byte values'); // Per 4.3

    var bytes = hashfunc(namespace.concat(value));
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      for (var idx = 0; idx < 16; ++idx) {
        buf[off + idx] = bytes[idx];
      }
    }

    return buf || Object(_bytesToUuid_js__WEBPACK_IMPORTED_MODULE_0__["default"])(bytes);
  }; // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name;
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bytesToUuid.js */ "./node_modules/uuid/dist/esm-browser/bytesToUuid.js");



function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof options == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }

  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || Object(_bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ __webpack_exports__["default"] = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v5.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v5.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "./node_modules/uuid/dist/esm-browser/v35.js");
/* harmony import */ var _sha1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sha1.js */ "./node_modules/uuid/dist/esm-browser/sha1.js");


var v5 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v5', 0x50, _sha1_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (v5);

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, main, scripts, author, license, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"rename-it-figma\",\"version\":\"1.1.0\",\"description\":\"\\\"Keep your Figma files organized, batch rename layers and frames.\\\"\",\"main\":\"code.js\",\"scripts\":{\"dev\":\"webpack --watch --mode development --devtool inline-source-map --config webpack.config.js\",\"prod\":\"webpack --mode production --devtool inline-source-map --config webpack.config.js\",\"test\":\"echo \\\"Error: no test specified\\\" && exit 1\"},\"author\":\"Rodrigo Soares\",\"license\":\"ISC\",\"dependencies\":{\"@figma/plugin-typings\":\"^1.15.0\",\"@rodi01/renameitlib\":\"^1.2.3\",\"@types/react\":\"^16.9.35\",\"@types/react-dom\":\"^16.9.8\",\"css-loader\":\"^3.5.3\",\"html-webpack-inline-source-plugin\":\"0.0.10\",\"html-webpack-plugin\":\"^3.2.0\",\"node-sass\":\"^4.14.1\",\"react\":\"^16.13.1\",\"react-dom\":\"^16.13.1\",\"react-figma-plugin-ds\":\"^1.0.3\",\"sass-loader\":\"^8.0.2\",\"style-loader\":\"^1.2.1\",\"ts-loader\":\"^7.0.4\",\"typescript\":\"^3.9.2\",\"url-loader\":\"^4.1.0\",\"uuid\":\"^8.0.0\",\"webpack\":\"^4.43.0\",\"webpack-cli\":\"^3.3.11\"},\"devDependencies\":{\"@typescript-eslint/eslint-plugin\":\"^2.33.0\",\"@typescript-eslint/parser\":\"^2.33.0\",\"eslint\":\"^7.0.0\",\"eslint-config-airbnb\":\"^18.1.0\",\"eslint-config-prettier\":\"^6.11.0\",\"eslint-plugin-prettier\":\"^3.1.3\",\"eslint-plugin-react\":\"^7.20.0\",\"is-blank\":\"^2.1.0\",\"is-number\":\"^7.0.0\",\"prettier\":\"^2.0.5\"}}");

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

/***/ "./src/Lib/GoogleAnalytics.ts":
/*!************************************!*\
  !*** ./src/Lib/GoogleAnalytics.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
exports.__esModule = true;
exports.track = exports.analyticsFirstRun = exports.setAnalyticsEnabled = exports.analyticsEnabled = exports.getUUID = void 0;
var uuid_1 = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
var manifest = __webpack_require__(/*! ../../manifest.json */ "./manifest.json");
var pkg = __webpack_require__(/*! ../../package.json */ "./package.json");
var kUUIDKey = 'google.analytics.uuid';
var kAnalyticsEnabled = 'analytics.enabled';
var kAnalyticsFirstRun = 'analytics.first.run';
var UUDID_key = 'cf564ee7-8aae-4ff2-91ef-3f62b1656b10';
var source = 'Figma';
var trackingId = 'UA-104184459-2';
function getUUID() {
    return __awaiter(this, void 0, void 0, function () {
        var uuid;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, figma.clientStorage.getAsync(kUUIDKey)];
                case 1:
                    uuid = _a.sent();
                    if (!uuid) {
                        uuid = uuid_1.v3(String(Date.now()), UUDID_key);
                    }
                    return [4, figma.clientStorage.setAsync(kUUIDKey, uuid)];
                case 2:
                    _a.sent();
                    return [2, uuid];
            }
        });
    });
}
exports.getUUID = getUUID;
function analyticsEnabled() {
    return __awaiter(this, void 0, void 0, function () {
        var ae;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, figma.clientStorage.getAsync(kAnalyticsEnabled)];
                case 1:
                    ae = _a.sent();
                    if (!(ae === undefined)) return [3, 3];
                    return [4, setAnalyticsEnabled(true)];
                case 2:
                    _a.sent();
                    ae = true;
                    _a.label = 3;
                case 3: return [2, ae];
            }
        });
    });
}
exports.analyticsEnabled = analyticsEnabled;
function setAnalyticsEnabled(value) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, figma.clientStorage.setAsync(kAnalyticsEnabled, value)];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    });
}
exports.setAnalyticsEnabled = setAnalyticsEnabled;
function analyticsFirstRun() {
    return __awaiter(this, void 0, void 0, function () {
        var fr;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, figma.clientStorage.getAsync(kAnalyticsFirstRun)];
                case 1:
                    fr = _a.sent();
                    if (fr === undefined)
                        fr = true;
                    if (!fr) return [3, 3];
                    return [4, setAnalyticsFirstRun()];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [2, fr];
            }
        });
    });
}
exports.analyticsFirstRun = analyticsFirstRun;
function setAnalyticsFirstRun() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, figma.clientStorage.setAsync(kAnalyticsFirstRun, false)];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    });
}
function jsonToQueryString(json) {
    return Object.keys(json)
        .map(function (key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
    })
        .join('&');
}
function makeRequest(url, options) {
    if (!url) {
        return;
    }
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.send();
}
function track(hitType, props, options) {
    return __awaiter(this, void 0, void 0, function () {
        var isAnalyticsEnabled, payload, url;
        return __generator(this, function (_a) {
            isAnalyticsEnabled = true;
            if (options && !options.analyticsEnabled) {
                console.log('not enabled');
                return [2, "the user didn't enable sharing analytics"];
            }
            payload = {
                v: 1,
                tid: trackingId,
                ds: source,
                t: hitType,
                an: manifest.name,
                aid: 'com.renameit.design',
                av: pkg.version,
            };
            if (props) {
                Object.keys(props).forEach(function (key) {
                    payload[key] = props[key];
                });
            }
            url = "https://www.google-analytics.com/" + (options && options.debug ? 'debug/' : '') + "collect?" + jsonToQueryString(payload) + "&z=" + Date.now();
            if (options && options.debug) {
                console.log('DEBUG: Analytics');
                console.log(payload);
                console.log("url: " + url);
            }
            return [2, makeRequest(url, options)];
        });
    });
}
exports.track = track;


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
    WhereTo["Donate"] = "donate";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
exports.__esModule = true;
var io_js_1 = __webpack_require__(/*! ./Lib/io.js */ "./src/Lib/io.js");
var renameitlib_1 = __webpack_require__(/*! @rodi01/renameitlib */ "./node_modules/@rodi01/renameitlib/lib/index.js");
var isBlank = __webpack_require__(/*! is-blank */ "./node_modules/is-blank/index.js");
var Utilities_1 = __webpack_require__(/*! ./Utilities */ "./src/Utilities.ts");
var DataHelper_1 = __webpack_require__(/*! ./Lib/DataHelper */ "./src/Lib/DataHelper.ts");
var GoogleAnalytics_1 = __webpack_require__(/*! ./Lib/GoogleAnalytics */ "./src/Lib/GoogleAnalytics.ts");
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
    return __awaiter(this, void 0, void 0, function () {
        var to, firstRun, windowOptions, windowDim, _a, _b, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    to = 'noSelection';
                    return [4, GoogleAnalytics_1.analyticsFirstRun()];
                case 1:
                    firstRun = _e.sent();
                    windowOptions = {
                        width: 430,
                        height: 490,
                        visible: true,
                    };
                    if (figma.command === Utilities_1.WhereTo.RenameLayers && Utilities_1.hasSelection(data)) {
                        to = Utilities_1.WhereTo.RenameLayers;
                    }
                    else if (figma.command === Utilities_1.WhereTo.FindReplace && Utilities_1.hasSelection(data)) {
                        to = Utilities_1.WhereTo.FindReplace;
                        windowOptions = {
                            width: 430,
                            height: 320,
                            visible: true,
                        };
                    }
                    else if (figma.command === Utilities_1.WhereTo.Settings) {
                        to = Utilities_1.WhereTo.Settings;
                        windowOptions = {
                            width: 430,
                            height: 300,
                            visible: true,
                        };
                    }
                    else if (figma.command === Utilities_1.WhereTo.Donate) {
                        to = Utilities_1.WhereTo.Donate;
                        windowOptions = { width: 0, height: 0, visible: false };
                        figma.showUI(__html__, { visible: false });
                    }
                    else {
                        to = Utilities_1.WhereTo.NoSelection;
                        windowOptions = {
                            width: 430,
                            height: 150,
                            visible: true,
                        };
                    }
                    windowDim = firstRun
                        ? { width: 430, height: 180, visible: true }
                        : windowOptions;
                    figma.showUI(__html__, windowDim);
                    _b = (_a = io_js_1.script).send;
                    _c = ['sendData'];
                    _d = {
                        data: data,
                        command: to
                    };
                    return [4, GoogleAnalytics_1.getUUID()];
                case 2:
                    _d.UUID = _e.sent(),
                        _d.firstRun = firstRun;
                    return [4, GoogleAnalytics_1.analyticsEnabled()];
                case 3:
                    _b.apply(_a, _c.concat([(_d.analyticsEnabled = _e.sent(),
                            _d.windowDim = windowOptions,
                            _d)]));
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
                    io_js_1.script.once('setAnalytics', function (value) {
                        GoogleAnalytics_1.setAnalyticsEnabled(value);
                    });
                    io_js_1.script.once('resizeViewport', function (opts) {
                        figma.ui.resize(opts.width, opts.height);
                    });
                    return [2];
            }
        });
    });
}
theUI();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Byb2RpMDEvcmVuYW1laXRsaWIvbGliL0ZpbmRSZXBsYWNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Acm9kaTAxL3JlbmFtZWl0bGliL2xpYi9SZW5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Byb2RpMDEvcmVuYW1laXRsaWIvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Acm9kaTAxL3JlbmFtZWl0bGliL25vZGVfbW9kdWxlcy9jYW1lbC1jYXNlL2Rpc3QuZXMyMDE1L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Acm9kaTAxL3JlbmFtZWl0bGliL25vZGVfbW9kdWxlcy9jaGFuZ2UtY2FzZS9kaXN0LmVzMjAxNS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHJvZGkwMS9yZW5hbWVpdGxpYi9ub2RlX21vZHVsZXMvY29uc3RhbnQtY2FzZS9kaXN0LmVzMjAxNS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHJvZGkwMS9yZW5hbWVpdGxpYi9ub2RlX21vZHVsZXMvZG90LWNhc2UvZGlzdC5lczIwMTUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Byb2RpMDEvcmVuYW1laXRsaWIvbm9kZV9tb2R1bGVzL2hlYWRlci1jYXNlL2Rpc3QuZXMyMDE1L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Acm9kaTAxL3JlbmFtZWl0bGliL25vZGVfbW9kdWxlcy9sb3dlci1jYXNlL2Rpc3QuZXMyMDE1L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Acm9kaTAxL3JlbmFtZWl0bGliL25vZGVfbW9kdWxlcy9uby1jYXNlL2Rpc3QuZXMyMDE1L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Acm9kaTAxL3JlbmFtZWl0bGliL25vZGVfbW9kdWxlcy9wYXJhbS1jYXNlL2Rpc3QuZXMyMDE1L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Acm9kaTAxL3JlbmFtZWl0bGliL25vZGVfbW9kdWxlcy9wYXNjYWwtY2FzZS9kaXN0LmVzMjAxNS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHJvZGkwMS9yZW5hbWVpdGxpYi9ub2RlX21vZHVsZXMvcGF0aC1jYXNlL2Rpc3QuZXMyMDE1L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Acm9kaTAxL3JlbmFtZWl0bGliL25vZGVfbW9kdWxlcy9zZW50ZW5jZS1jYXNlL2Rpc3QuZXMyMDE1L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Acm9kaTAxL3JlbmFtZWl0bGliL25vZGVfbW9kdWxlcy9zbmFrZS1jYXNlL2Rpc3QuZXMyMDE1L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Acm9kaTAxL3JlbmFtZWl0bGliL25vZGVfbW9kdWxlcy91cHBlci1jYXNlLWZpcnN0L2Rpc3QuZXMyMDE1L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Acm9kaTAxL3JlbmFtZWl0bGliL25vZGVfbW9kdWxlcy91cHBlci1jYXNlL2Rpc3QuZXMyMDE1L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jYXBpdGFsLWNhc2UvZGlzdC5lczIwMTUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NhcGl0YWwtY2FzZS9ub2RlX21vZHVsZXMvbG93ZXItY2FzZS9kaXN0LmVzMjAxNS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2FwaXRhbC1jYXNlL25vZGVfbW9kdWxlcy9uby1jYXNlL2Rpc3QuZXMyMDE1L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jYXBpdGFsLWNhc2Uvbm9kZV9tb2R1bGVzL3VwcGVyLWNhc2UtZmlyc3QvZGlzdC5lczIwMTUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2V2ZW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLWJsYW5rL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pcy1lbXB0eS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLXdoaXRlc3BhY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RpdGxlY2FzZS9hcnRpY2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGl0bGVjYXNlL2Nvbmp1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGl0bGVjYXNlL3ByZXBvc2l0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGl0bGVjYXNlL3RvLXRpdGxlLWNhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL2J5dGVzVG9VdWlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9tZDUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zaGExLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92My5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3YzNS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xpYi9EYXRhSGVscGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9MaWIvR29vZ2xlQW5hbHl0aWNzLnRzIiwid2VicGFjazovLy8uL3NyYy9MaWIvUmVuYW1lSGVscGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9MaWIvaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1V0aWxpdGllcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtR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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxpQ0FBaUMsUUFBUTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLHlCQUF5QjtBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzdiQSxjQUFjLG1CQUFPLENBQUMsc0RBQVU7QUFDaEMsbUJBQW1CLG1CQUFPLENBQUMsNERBQWU7O0FBRTFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xCQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzVHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBOzs7QUFHQSxlQUFlLG1CQUFPLENBQUMsd0RBQVksU0FBUyxtQkFBTyxDQUFDLGdFQUFnQixVQUFVLG1CQUFPLENBQUMsZ0VBQWdCO0FBQ3RHO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLG1CQUFtQjtBQUNoQztBQUNBOztBQUVBOztBQUVBLGFBQWEsYUFBYTtBQUMxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVlLGtFQUFHLEU7Ozs7Ozs7Ozs7OztBQ3pObEI7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjs7QUFFaEI7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDs7QUFFbEQ7O0FBRUEsbUJB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XHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jb2RlLnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbi8qKlxuICogQEF1dGhvcjogUm9kcmlnbyBTb2FyZXMgPHJvZHJpZ28+XG4gKiBARGF0ZTogICAyMDE3LTExLTE3VDE3OjI2OjM5LTA4OjAwXG4gKiBAUHJvamVjdDogUmVuYW1lIEl0XG4gKiBATGFzdCBtb2RpZmllZCBieTogICByb2RyaWdvXG4gKiBATGFzdCBtb2RpZmllZCB0aW1lOiAyMDE3LTEyLTAyVDIxOjIyOjQxLTA4OjAwXG4gKi9cblxudmFyIEZpbmRSZXBsYWNlID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBGaW5kUmVwbGFjZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRmluZFJlcGxhY2UpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEZpbmRSZXBsYWNlLCBbe1xuICAgIGtleTogXCJlc2NhcGVSZWdFeHBcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cikge1xuICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bXFwtXFxbXFxdXFwvXFx7XFx9XFwoXFwpXFwqXFwrXFw/XFwuXFxcXFxcXlxcJFxcfF0vZywgXCJcXFxcJCZcIik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibGF5ZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGF5ZXIob3B0aW9ucykge1xuICAgICAgdmFyIHJlZyA9IG9wdGlvbnMuY2FzZVNlbnNpdGl2ZSA/IG5ldyBSZWdFeHAodGhpcy5lc2NhcGVSZWdFeHAob3B0aW9ucy5maW5kVGV4dCksIFwiZ1wiKSA6IG5ldyBSZWdFeHAodGhpcy5lc2NhcGVSZWdFeHAob3B0aW9ucy5maW5kVGV4dCksIFwiZ2lcIik7XG4gICAgICByZXR1cm4gb3B0aW9ucy5sYXllck5hbWUucmVwbGFjZShyZWcsIG9wdGlvbnMucmVwbGFjZVdpdGgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJtYXRjaFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtYXRjaChvcHRpb25zKSB7XG4gICAgICBpZiAob3B0aW9ucy5maW5kVGV4dC5sZW5ndGggPD0gMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgdmFyIHN0ciA9IFN0cmluZyhvcHRpb25zLmZpbmRUZXh0KTtcbiAgICAgIHZhciBsYXllck5hbWUgPSBvcHRpb25zLmxheWVyTmFtZTtcblxuICAgICAgaWYgKCFvcHRpb25zLmNhc2VTZW5zaXRpdmUpIHtcbiAgICAgICAgc3RyID0gc3RyLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGxheWVyTmFtZSA9IGxheWVyTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbGF5ZXJOYW1lLmluY2x1ZGVzKHN0cik7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEZpbmRSZXBsYWNlO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBGaW5kUmVwbGFjZTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTsgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQEF1dGhvcjogUm9kcmlnbyBTb2FyZXMgPHJvZHJpZ28+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQERhdGU6ICAgMjAxNy0xMS0xN1QxNzoyMzoyNC0wODowMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBQcm9qZWN0OiBSZW5hbWUgSXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBATGFzdCBtb2RpZmllZCB0aW1lOiAyMDE3LTEyLTAyVDEwOjE3OjM1LTA4OjAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cbnZhciBfY2hhbmdlQ2FzZSA9IHJlcXVpcmUoXCJjaGFuZ2UtY2FzZVwiKTtcblxudmFyIGNoYW5nZUNhc2UgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfY2hhbmdlQ2FzZSk7XG5cbnZhciBfdGl0bGVjYXNlID0gcmVxdWlyZShcInRpdGxlY2FzZVwiKTtcblxudmFyIF90aXRsZWNhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGl0bGVjYXNlKTtcblxudmFyIF91cHBlckNhc2UgPSByZXF1aXJlKFwidXBwZXItY2FzZVwiKTtcblxudmFyIF9sb3dlckNhc2UgPSByZXF1aXJlKFwibG93ZXItY2FzZVwiKTtcblxudmFyIF91cHBlckNhc2VGaXJzdCA9IHJlcXVpcmUoXCJ1cHBlci1jYXNlLWZpcnN0XCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vKmVzbGludC1kaXNhYmxlICovXG4vLyBwcmV0dGllci1pZ25vcmVcbnZhciB1cHBlcmNhc2VTQyA9IFwiJVxcXFwqdSVcIixcbiAgICBsb3dlckNhc2VTQyA9IFwiJVxcXFwqbCVcIixcbiAgICB0aXRsZUNhc2UgPSBcIiVcXFxcKnQlXCIsXG4gICAgdXBwZXJGaXJzdENhc2UgPSBcIiVcXFxcKnVmJVwiLFxuICAgIGNhbWVsQ2FzZSA9IFwiJVxcXFwqYyVcIixcbiAgICBwYXJhbUNhc2UgPSBcIiVcXFxcKnBjJVwiLFxuICAgIG51bWJlclNlcXVlbmNlID0gXCIlTlwiLFxuICAgIGFscGhhU2VxdWVuY2UgPSBcIiVhXCIsXG4gICAgYWxwaGFSZXZlcnNlID0gXCIlYXIlXCIsXG4gICAgd2lkdGggPSBcIiV3XCIsXG4gICAgaGVpZ2h0ID0gXCIlaFwiLFxuICAgIHBhZ2UgPSBcIiVwXCIsXG4gICAgcGFyZW50ID0gXCIlb1wiLFxuICAgIHN5bWJvbCA9IFwiJXNcIixcbiAgICBsYXllclN0eWxlID0gXCIlbHMlXCIsXG4gICAgY2hpbGRMYXllciA9IFwiJWNoJVwiO1xuXG4vLyBwcmV0dGllci1pZ25vcmUtZW5kXG4vKiBlc2xpbnQtZW5hYmxlICovXG5cbnZhciBSZW5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFJlbmFtZSgpIHtcbiAgICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge30sXG4gICAgICAgIF9yZWYkYWxsb3dUZXh0Q2FzZXMgPSBfcmVmLmFsbG93VGV4dENhc2VzLFxuICAgICAgICBhbGxvd1RleHRDYXNlcyA9IF9yZWYkYWxsb3dUZXh0Q2FzZXMgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBfcmVmJGFsbG93VGV4dENhc2VzLFxuICAgICAgICBfcmVmJGFsbG93UGFnZU5hbWUgPSBfcmVmLmFsbG93UGFnZU5hbWUsXG4gICAgICAgIGFsbG93UGFnZU5hbWUgPSBfcmVmJGFsbG93UGFnZU5hbWUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBfcmVmJGFsbG93UGFnZU5hbWUsXG4gICAgICAgIF9yZWYkYWxsb3dQYXJlbnQgPSBfcmVmLmFsbG93UGFyZW50LFxuICAgICAgICBhbGxvd1BhcmVudCA9IF9yZWYkYWxsb3dQYXJlbnQgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBfcmVmJGFsbG93UGFyZW50LFxuICAgICAgICBfcmVmJGFsbG93U3ltYm9sID0gX3JlZi5hbGxvd1N5bWJvbCxcbiAgICAgICAgYWxsb3dTeW1ib2wgPSBfcmVmJGFsbG93U3ltYm9sID09PSB1bmRlZmluZWQgPyB0cnVlIDogX3JlZiRhbGxvd1N5bWJvbCxcbiAgICAgICAgX3JlZiRhbGxvd0xheWVyU3R5bGUgPSBfcmVmLmFsbG93TGF5ZXJTdHlsZSxcbiAgICAgICAgYWxsb3dMYXllclN0eWxlID0gX3JlZiRhbGxvd0xheWVyU3R5bGUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBfcmVmJGFsbG93TGF5ZXJTdHlsZSxcbiAgICAgICAgX3JlZiRhbGxvd0NoaWxkTGF5ZXIgPSBfcmVmLmFsbG93Q2hpbGRMYXllcixcbiAgICAgICAgYWxsb3dDaGlsZExheWVyID0gX3JlZiRhbGxvd0NoaWxkTGF5ZXIgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3JlZiRhbGxvd0NoaWxkTGF5ZXI7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVuYW1lKTtcblxuICAgIHRoaXMuYWxsb3dUZXh0Q2FzZXMgPSBhbGxvd1RleHRDYXNlcztcbiAgICB0aGlzLmFsbG93UGFnZU5hbWUgPSBhbGxvd1BhZ2VOYW1lO1xuICAgIHRoaXMuYWxsb3dQYXJlbnQgPSBhbGxvd1BhcmVudDtcbiAgICB0aGlzLmFsbG93U3ltYm9sID0gYWxsb3dTeW1ib2w7XG4gICAgdGhpcy5hbGxvd0xheWVyU3R5bGUgPSBhbGxvd0xheWVyU3R5bGU7XG4gICAgdGhpcy5hbGxvd0NoaWxkTGF5ZXIgPSBhbGxvd0NoaWxkTGF5ZXI7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuXG5cbiAgX2NyZWF0ZUNsYXNzKFJlbmFtZSwgW3tcbiAgICBrZXk6IFwic2hvcnRjdXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvcnRjdXQocykge1xuICAgICAgcmV0dXJuIG5ldyBSZWdFeHAocywgXCJnaVwiKTtcbiAgICAgIC8vIHJldHVybiBgLyR7ZXNjYXBlU3RyaW5nUmVnZXhwKHMpfS9naWBcbiAgICB9XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicGFkZHlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFkZHkobiwgcCwgYykge1xuICAgICAgdmFyIHBhZENoYXIgPSB0eXBlb2YgYyAhPT0gXCJ1bmRlZmluZWRcIiA/IGMgOiBcIjBcIjtcbiAgICAgIHZhciBwYWQgPSBuZXcgQXJyYXkoMSArIHApLmpvaW4ocGFkQ2hhcik7XG4gICAgICByZXR1cm4gKHBhZCArIG4pLnNsaWNlKC1wYWQubGVuZ3RoKTtcbiAgICB9XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY29udmVydFRpdGxlQ2FzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb252ZXJ0VGl0bGVDYXNlKGxheWVyTmFtZSkge1xuICAgICAgdmFyIGwgPSAoMCwgX2xvd2VyQ2FzZS5sb3dlckNhc2UpKGxheWVyTmFtZSk7XG4gICAgICByZXR1cm4gKDAsIF90aXRsZWNhc2UyLmRlZmF1bHQpKGwpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjdXJyZW50TGF5ZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3VycmVudExheWVyKG5ld0xheWVyTmFtZSwgbGF5ZXJOYW1lKSB7XG4gICAgICB2YXIgbmFtZSA9IG5ld0xheWVyTmFtZTtcblxuICAgICAgaWYgKHRoaXMuYWxsb3dUZXh0Q2FzZXMpIHtcbiAgICAgICAgLy8gVXBwZXJDYXNlXG4gICAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UodGhpcy5zaG9ydGN1dCh1cHBlcmNhc2VTQyksICgwLCBfdXBwZXJDYXNlLnVwcGVyQ2FzZSkobGF5ZXJOYW1lKSk7XG4gICAgICAgIC8vIExvd2VyQ2FzZVxuICAgICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKHRoaXMuc2hvcnRjdXQobG93ZXJDYXNlU0MpLCAoMCwgX2xvd2VyQ2FzZS5sb3dlckNhc2UpKGxheWVyTmFtZSkpO1xuICAgICAgICAvLyBUaXRsZSBDYXNlXG4gICAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UodGhpcy5zaG9ydGN1dCh0aXRsZUNhc2UpLCB0aGlzLmNvbnZlcnRUaXRsZUNhc2UobGF5ZXJOYW1lKSk7XG4gICAgICAgIC8vIFVwcGVyQ2FzZSBGaXJzdFxuICAgICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKHRoaXMuc2hvcnRjdXQodXBwZXJGaXJzdENhc2UpLCAoMCwgX3VwcGVyQ2FzZUZpcnN0LnVwcGVyQ2FzZUZpcnN0KShsYXllck5hbWUpKTtcbiAgICAgICAgLy8gQ2FtZWwgQ2FzZVxuICAgICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKHRoaXMuc2hvcnRjdXQoY2FtZWxDYXNlKSwgY2hhbmdlQ2FzZS5jYW1lbENhc2UobGF5ZXJOYW1lKSk7XG4gICAgICAgIC8vIFBhcmFtIENhc2VcbiAgICAgICAgbmFtZSA9IG5hbWUucmVwbGFjZSh0aGlzLnNob3J0Y3V0KHBhcmFtQ2FzZSksIGNoYW5nZUNhc2UucGFyYW1DYXNlKGxheWVyTmFtZSkpO1xuICAgICAgfVxuICAgICAgLy8gTGF5ZXJuYW1lXG4gICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC8lXFwqL2csIGxheWVyTmFtZSk7XG4gICAgICByZXR1cm4gU3RyaW5nKG5hbWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJsYXllclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsYXllcihvcHRpb25zKSB7XG4gICAgICB2YXIgbmV3TGF5ZXJOYW1lID0gb3B0aW9ucy5pbnB1dE5hbWU7XG5cbiAgICAgIC8vIEludGVyYXRvclxuICAgICAgdmFyIG5JbnRlcmF0b3JzID0gbmV3TGF5ZXJOYW1lLm1hdGNoKHRoaXMuc2hvcnRjdXQobnVtYmVyU2VxdWVuY2UpKTtcbiAgICAgIHZhciBhSW50ZXJhdG9ycyA9IG5ld0xheWVyTmFtZS5tYXRjaCgvKD8hJWFyJSklQS9naSk7XG4gICAgICB2YXIgcmV2ZXJzZUFJbnRlcmF0b3JzID0gbmV3TGF5ZXJOYW1lLm1hdGNoKHRoaXMuc2hvcnRjdXQoYWxwaGFSZXZlcnNlKSk7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGVcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIC8vIE51bWJlciBJbnRlcmF0b3JcbiAgICAgIGlmIChuSW50ZXJhdG9ycyAhPSBudWxsKSB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlICovXG4gICAgICAgIC8vIFJlcGxhY2UgTnVtYmVyXG4gICAgICAgIHZhciByZXBsYWNlTnVtYmVyID0gZnVuY3Rpb24gcmVwbGFjZU51bWJlcihtYXRjaCkge1xuICAgICAgICAgIHZhciBublNpemUgPSBtYXRjaC5sZW5ndGggLSAxO1xuICAgICAgICAgIHZhciBsZXR0ZXIgPSBtYXRjaC5jaGFyQXQoMSk7XG4gICAgICAgICAgdmFyIG51bSA9IGxldHRlciA9PSBcIk5cIiA/IG9wdGlvbnMuY3VycklkeCA6IG9wdGlvbnMuc2VsZWN0aW9uQ291bnQgLSBvcHRpb25zLmN1cnJJZHggLSAxO1xuICAgICAgICAgIG51bSArPSBvcHRpb25zLnN0YXJ0c0Zyb207XG4gICAgICAgICAgLy8gQ2hlY2sgd2VhdGhlciBvciBub3QgdGhlIG51bWJlciBpcyBiaWdnZXIgdGhhbiB0aGUgbm5TaXplcyAod29ya3MgdXAgdG8gOTk5OSlcbiAgICAgICAgICBpZiAobnVtID4gOTk5ICYmIChublNpemUgPT09IDEgfHwgbm5TaXplID09PSAyIHx8IG5uU2l6ZSA9PT0gMykpIG5uU2l6ZSA9IDQ7ZWxzZSBpZiAobnVtID4gOTkgJiYgKG5uU2l6ZSA9PT0gMSB8fCBublNpemUgPT09IDIpKSBublNpemUgPSAzO2Vsc2UgaWYgKG51bSA+IDkgJiYgbm5TaXplID09IDEpIG5uU2l6ZSA9IDI7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLnBhZGR5KG51bSwgbm5TaXplKTtcbiAgICAgICAgfTtcblxuICAgICAgICBuZXdMYXllck5hbWUgPSBuZXdMYXllck5hbWUucmVwbGFjZSgvJW4rL2dpLCByZXBsYWNlTnVtYmVyKTtcbiAgICAgIH1cbiAgICAgIC8vIEFscGhhIEludGVyYXRvclxuICAgICAgdmFyIGFscGhhU3RyID0gXCJhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5elwiO1xuICAgICAgdmFyIGFscGhhQXJyID0gYWxwaGFTdHIuc3BsaXQoXCJcIik7XG4gICAgICB2YXIgdG90YWxBbHBoYSA9IGFscGhhQXJyLmxlbmd0aDtcbiAgICAgIC8vIFJlcGxhY2UgQWxwaGFcbiAgICAgIGZ1bmN0aW9uIHJlcGxhY2VBbHBoYShtYXRjaCkge1xuICAgICAgICB2YXIgbGV0dGVyID0gbWF0Y2guY2hhckF0KDEpO1xuICAgICAgICB2YXIgY3VycmVudCA9IG1hdGNoID09PSBcIiVhciVcIiA/IG9wdGlvbnMuc2VsZWN0aW9uQ291bnQgLSBvcHRpb25zLmN1cnJJZHggLSAxIDogb3B0aW9ucy5jdXJySWR4O1xuICAgICAgICB2YXIgYWxwaGEgPSBhbHBoYUFycltjdXJyZW50ICUgdG90YWxBbHBoYV07XG4gICAgICAgIGlmIChjdXJyZW50ID49IHRvdGFsQWxwaGEpIHtcbiAgICAgICAgICB2YXIgZmxJZHggPSBNYXRoLmZsb29yKGN1cnJlbnQgLyB0b3RhbEFscGhhKTtcbiAgICAgICAgICBhbHBoYSA9IFwiXCIgKyBhbHBoYUFycltmbElkeCAtIDFdICsgYWxwaGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxldHRlciA9PT0gXCJBXCIgPyBhbHBoYS50b1VwcGVyQ2FzZSgpIDogYWxwaGE7XG4gICAgICB9XG4gICAgICAvLyBSZXZlcnNlIEFscGhhXG4gICAgICBpZiAocmV2ZXJzZUFJbnRlcmF0b3JzICE9IG51bGwpIHtcbiAgICAgICAgbmV3TGF5ZXJOYW1lID0gbmV3TGF5ZXJOYW1lLnJlcGxhY2UodGhpcy5zaG9ydGN1dChhbHBoYVJldmVyc2UpLCByZXBsYWNlQWxwaGEpO1xuICAgICAgfVxuICAgICAgaWYgKGFJbnRlcmF0b3JzICE9IG51bGwpIHtcbiAgICAgICAgbmV3TGF5ZXJOYW1lID0gbmV3TGF5ZXJOYW1lLnJlcGxhY2UodGhpcy5zaG9ydGN1dChhbHBoYVNlcXVlbmNlKSwgcmVwbGFjZUFscGhhKTtcbiAgICAgIH1cblxuICAgICAgLy8gUmVwbGFjZSBhc3Rlcmlza3NcbiAgICAgIG5ld0xheWVyTmFtZSA9IF90aGlzLmN1cnJlbnRMYXllcihuZXdMYXllck5hbWUsIG9wdGlvbnMubGF5ZXJOYW1lKTtcblxuICAgICAgLy8gQWRkIFdpZHRoIGFuZC9vciBoZWlnaHRcbiAgICAgIG5ld0xheWVyTmFtZSA9IG5ld0xheWVyTmFtZS5yZXBsYWNlKHRoaXMuc2hvcnRjdXQod2lkdGgpLCBvcHRpb25zLndpZHRoKTtcbiAgICAgIG5ld0xheWVyTmFtZSA9IG5ld0xheWVyTmFtZS5yZXBsYWNlKHRoaXMuc2hvcnRjdXQoaGVpZ2h0KSwgb3B0aW9ucy5oZWlnaHQpO1xuXG4gICAgICAvLyBQYWdlIE5hbWVcbiAgICAgIGlmICh0aGlzLmFsbG93UGFnZU5hbWUpIHtcbiAgICAgICAgbmV3TGF5ZXJOYW1lID0gbmV3TGF5ZXJOYW1lLnJlcGxhY2UodGhpcy5zaG9ydGN1dChwYWdlKSwgb3B0aW9ucy5wYWdlTmFtZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFBhcmVudCBOYW1lXG4gICAgICBpZiAodGhpcy5hbGxvd1BhcmVudCkge1xuICAgICAgICBuZXdMYXllck5hbWUgPSBuZXdMYXllck5hbWUucmVwbGFjZSh0aGlzLnNob3J0Y3V0KHBhcmVudCksIG9wdGlvbnMucGFyZW50TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFN5bWJvbCBOYW1lXG4gICAgICBpZiAodGhpcy5hbGxvd1N5bWJvbCkge1xuICAgICAgICBuZXdMYXllck5hbWUgPSBuZXdMYXllck5hbWUucmVwbGFjZSh0aGlzLnNob3J0Y3V0KHN5bWJvbCksIG9wdGlvbnMuc3ltYm9sTmFtZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIExheWVyIFN0eWxlXG4gICAgICBpZiAodGhpcy5hbGxvd0xheWVyU3R5bGUpIHtcbiAgICAgICAgbmV3TGF5ZXJOYW1lID0gbmV3TGF5ZXJOYW1lLnJlcGxhY2UodGhpcy5zaG9ydGN1dChsYXllclN0eWxlKSwgb3B0aW9ucy5sYXllclN0eWxlKTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2hpbGQgTGF5ZXIgTmFtZVxuICAgICAgaWYgKHRoaXMuYWxsb3dDaGlsZExheWVyKSB7XG4gICAgICAgIG5ld0xheWVyTmFtZSA9IG5ld0xheWVyTmFtZS5yZXBsYWNlKHRoaXMuc2hvcnRjdXQoY2hpbGRMYXllciksIG9wdGlvbnMuY2hpbGRMYXllcik7XG4gICAgICB9XG5cbiAgICAgIC8vIFJldHVybiBuZXcgbmFtZVxuICAgICAgcmV0dXJuIG5ld0xheWVyTmFtZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUmVuYW1lO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBSZW5hbWU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfRmluZFJlcGxhY2UgPSByZXF1aXJlKFwiLi9GaW5kUmVwbGFjZVwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiRmluZFJlcGxhY2VcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRmluZFJlcGxhY2UpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX1JlbmFtZSA9IHJlcXVpcmUoXCIuL1JlbmFtZVwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUmVuYW1lXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JlbmFtZSkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9IiwiaW1wb3J0IHsgX19hc3NpZ24gfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IHBhc2NhbENhc2UsIHBhc2NhbENhc2VUcmFuc2Zvcm0sIHBhc2NhbENhc2VUcmFuc2Zvcm1NZXJnZSB9IGZyb20gXCJwYXNjYWwtY2FzZVwiO1xuZXhwb3J0IGZ1bmN0aW9uIGNhbWVsQ2FzZVRyYW5zZm9ybShpbnB1dCwgaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggPT09IDApXG4gICAgICAgIHJldHVybiBpbnB1dC50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiBwYXNjYWxDYXNlVHJhbnNmb3JtKGlucHV0LCBpbmRleCk7XG59XG5leHBvcnQgZnVuY3Rpb24gY2FtZWxDYXNlVHJhbnNmb3JtTWVyZ2UoaW5wdXQsIGluZGV4KSB7XG4gICAgaWYgKGluZGV4ID09PSAwKVxuICAgICAgICByZXR1cm4gaW5wdXQudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gcGFzY2FsQ2FzZVRyYW5zZm9ybU1lcmdlKGlucHV0KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjYW1lbENhc2UoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHJldHVybiBwYXNjYWxDYXNlKGlucHV0LCBfX2Fzc2lnbih7IHRyYW5zZm9ybTogY2FtZWxDYXNlVHJhbnNmb3JtIH0sIG9wdGlvbnMpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImV4cG9ydCAqIGZyb20gXCJjYW1lbC1jYXNlXCI7XG5leHBvcnQgKiBmcm9tIFwiY2FwaXRhbC1jYXNlXCI7XG5leHBvcnQgKiBmcm9tIFwiY29uc3RhbnQtY2FzZVwiO1xuZXhwb3J0ICogZnJvbSBcImRvdC1jYXNlXCI7XG5leHBvcnQgKiBmcm9tIFwiaGVhZGVyLWNhc2VcIjtcbmV4cG9ydCAqIGZyb20gXCJuby1jYXNlXCI7XG5leHBvcnQgKiBmcm9tIFwicGFyYW0tY2FzZVwiO1xuZXhwb3J0ICogZnJvbSBcInBhc2NhbC1jYXNlXCI7XG5leHBvcnQgKiBmcm9tIFwicGF0aC1jYXNlXCI7XG5leHBvcnQgKiBmcm9tIFwic2VudGVuY2UtY2FzZVwiO1xuZXhwb3J0ICogZnJvbSBcInNuYWtlLWNhc2VcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IF9fYXNzaWduIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBub0Nhc2UgfSBmcm9tIFwibm8tY2FzZVwiO1xuaW1wb3J0IHsgdXBwZXJDYXNlIH0gZnJvbSBcInVwcGVyLWNhc2VcIjtcbmV4cG9ydCBmdW5jdGlvbiBjb25zdGFudENhc2UoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHJldHVybiBub0Nhc2UoaW5wdXQsIF9fYXNzaWduKHsgZGVsaW1pdGVyOiBcIl9cIiwgdHJhbnNmb3JtOiB1cHBlckNhc2UgfSwgb3B0aW9ucykpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiaW1wb3J0IHsgX19hc3NpZ24gfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IG5vQ2FzZSB9IGZyb20gXCJuby1jYXNlXCI7XG5leHBvcnQgZnVuY3Rpb24gZG90Q2FzZShpbnB1dCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgcmV0dXJuIG5vQ2FzZShpbnB1dCwgX19hc3NpZ24oeyBkZWxpbWl0ZXI6IFwiLlwiIH0sIG9wdGlvbnMpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IF9fYXNzaWduIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBjYXBpdGFsQ2FzZSB9IGZyb20gXCJjYXBpdGFsLWNhc2VcIjtcbmV4cG9ydCBmdW5jdGlvbiBoZWFkZXJDYXNlKGlucHV0LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICByZXR1cm4gY2FwaXRhbENhc2UoaW5wdXQsIF9fYXNzaWduKHsgZGVsaW1pdGVyOiBcIi1cIiB9LCBvcHRpb25zKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKipcbiAqIFNvdXJjZTogZnRwOi8vZnRwLnVuaWNvZGUub3JnL1B1YmxpYy9VQ0QvbGF0ZXN0L3VjZC9TcGVjaWFsQ2FzaW5nLnR4dFxuICovXG52YXIgU1VQUE9SVEVEX0xPQ0FMRSA9IHtcbiAgICB0cjoge1xuICAgICAgICByZWdleHA6IC9cXHUwMTMwfFxcdTAwNDl8XFx1MDA0OVxcdTAzMDcvZyxcbiAgICAgICAgbWFwOiB7XG4gICAgICAgICAgICDEsDogXCJcXHUwMDY5XCIsXG4gICAgICAgICAgICBJOiBcIlxcdTAxMzFcIixcbiAgICAgICAgICAgIEnMhzogXCJcXHUwMDY5XCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgYXo6IHtcbiAgICAgICAgcmVnZXhwOiAvXFx1MDEzMC9nLFxuICAgICAgICBtYXA6IHtcbiAgICAgICAgICAgIMSwOiBcIlxcdTAwNjlcIixcbiAgICAgICAgICAgIEk6IFwiXFx1MDEzMVwiLFxuICAgICAgICAgICAgScyHOiBcIlxcdTAwNjlcIlxuICAgICAgICB9XG4gICAgfSxcbiAgICBsdDoge1xuICAgICAgICByZWdleHA6IC9cXHUwMDQ5fFxcdTAwNEF8XFx1MDEyRXxcXHUwMENDfFxcdTAwQ0R8XFx1MDEyOC9nLFxuICAgICAgICBtYXA6IHtcbiAgICAgICAgICAgIEk6IFwiXFx1MDA2OVxcdTAzMDdcIixcbiAgICAgICAgICAgIEo6IFwiXFx1MDA2QVxcdTAzMDdcIixcbiAgICAgICAgICAgIMSuOiBcIlxcdTAxMkZcXHUwMzA3XCIsXG4gICAgICAgICAgICDDjDogXCJcXHUwMDY5XFx1MDMwN1xcdTAzMDBcIixcbiAgICAgICAgICAgIMONOiBcIlxcdTAwNjlcXHUwMzA3XFx1MDMwMVwiLFxuICAgICAgICAgICAgxKg6IFwiXFx1MDA2OVxcdTAzMDdcXHUwMzAzXCJcbiAgICAgICAgfVxuICAgIH1cbn07XG4vKipcbiAqIExvY2FsaXplZCBsb3dlciBjYXNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbG9jYWxlTG93ZXJDYXNlKHN0ciwgbG9jYWxlKSB7XG4gICAgdmFyIGxhbmcgPSBTVVBQT1JURURfTE9DQUxFW2xvY2FsZS50b0xvd2VyQ2FzZSgpXTtcbiAgICBpZiAobGFuZylcbiAgICAgICAgcmV0dXJuIGxvd2VyQ2FzZShzdHIucmVwbGFjZShsYW5nLnJlZ2V4cCwgZnVuY3Rpb24gKG0pIHsgcmV0dXJuIGxhbmcubWFwW21dOyB9KSk7XG4gICAgcmV0dXJuIGxvd2VyQ2FzZShzdHIpO1xufVxuLyoqXG4gKiBMb3dlciBjYXNlIGFzIGEgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb3dlckNhc2Uoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiaW1wb3J0IHsgbG93ZXJDYXNlIH0gZnJvbSBcImxvd2VyLWNhc2VcIjtcbi8vIFN1cHBvcnQgY2FtZWwgY2FzZSAoXCJjYW1lbENhc2VcIiAtPiBcImNhbWVsIENhc2VcIiBhbmQgXCJDQU1FTENhc2VcIiAtPiBcIkNBTUVMIENhc2VcIikuXG52YXIgREVGQVVMVF9TUExJVF9SRUdFWFAgPSBbLyhbYS16MC05XSkoW0EtWl0pL2csIC8oW0EtWl0pKFtBLVpdW2Etel0pL2ddO1xuLy8gUmVtb3ZlIGFsbCBub24td29yZCBjaGFyYWN0ZXJzLlxudmFyIERFRkFVTFRfU1RSSVBfUkVHRVhQID0gL1teQS1aMC05XSsvZ2k7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgc3RyaW5nIGludG8gc29tZXRoaW5nIG90aGVyIGxpYnJhcmllcyBjYW4gbWFuaXB1bGF0ZSBlYXNpZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub0Nhc2UoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3BsaXRSZWdleHAsIHNwbGl0UmVnZXhwID0gX2EgPT09IHZvaWQgMCA/IERFRkFVTFRfU1BMSVRfUkVHRVhQIDogX2EsIF9iID0gb3B0aW9ucy5zdHJpcFJlZ2V4cCwgc3RyaXBSZWdleHAgPSBfYiA9PT0gdm9pZCAwID8gREVGQVVMVF9TVFJJUF9SRUdFWFAgOiBfYiwgX2MgPSBvcHRpb25zLnRyYW5zZm9ybSwgdHJhbnNmb3JtID0gX2MgPT09IHZvaWQgMCA/IGxvd2VyQ2FzZSA6IF9jLCBfZCA9IG9wdGlvbnMuZGVsaW1pdGVyLCBkZWxpbWl0ZXIgPSBfZCA9PT0gdm9pZCAwID8gXCIgXCIgOiBfZDtcbiAgICB2YXIgcmVzdWx0ID0gcmVwbGFjZShyZXBsYWNlKGlucHV0LCBzcGxpdFJlZ2V4cCwgXCIkMVxcMCQyXCIpLCBzdHJpcFJlZ2V4cCwgXCJcXDBcIik7XG4gICAgdmFyIHN0YXJ0ID0gMDtcbiAgICB2YXIgZW5kID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAvLyBUcmltIHRoZSBkZWxpbWl0ZXIgZnJvbSBhcm91bmQgdGhlIG91dHB1dCBzdHJpbmcuXG4gICAgd2hpbGUgKHJlc3VsdC5jaGFyQXQoc3RhcnQpID09PSBcIlxcMFwiKVxuICAgICAgICBzdGFydCsrO1xuICAgIHdoaWxlIChyZXN1bHQuY2hhckF0KGVuZCAtIDEpID09PSBcIlxcMFwiKVxuICAgICAgICBlbmQtLTtcbiAgICAvLyBUcmFuc2Zvcm0gZWFjaCB0b2tlbiBpbmRlcGVuZGVudGx5LlxuICAgIHJldHVybiByZXN1bHRcbiAgICAgICAgLnNsaWNlKHN0YXJ0LCBlbmQpXG4gICAgICAgIC5zcGxpdChcIlxcMFwiKVxuICAgICAgICAubWFwKHRyYW5zZm9ybSlcbiAgICAgICAgLmpvaW4oZGVsaW1pdGVyKTtcbn1cbi8qKlxuICogUmVwbGFjZSBgcmVgIGluIHRoZSBpbnB1dCBzdHJpbmcgd2l0aCB0aGUgcmVwbGFjZW1lbnQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHJlcGxhY2UoaW5wdXQsIHJlLCB2YWx1ZSkge1xuICAgIGlmIChyZSBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIGlucHV0LnJlcGxhY2UocmUsIHZhbHVlKTtcbiAgICByZXR1cm4gcmUucmVkdWNlKGZ1bmN0aW9uIChpbnB1dCwgcmUpIHsgcmV0dXJuIGlucHV0LnJlcGxhY2UocmUsIHZhbHVlKTsgfSwgaW5wdXQpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiaW1wb3J0IHsgX19hc3NpZ24gfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IGRvdENhc2UgfSBmcm9tIFwiZG90LWNhc2VcIjtcbmV4cG9ydCBmdW5jdGlvbiBwYXJhbUNhc2UoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHJldHVybiBkb3RDYXNlKGlucHV0LCBfX2Fzc2lnbih7IGRlbGltaXRlcjogXCItXCIgfSwgb3B0aW9ucykpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiaW1wb3J0IHsgX19hc3NpZ24gfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IG5vQ2FzZSB9IGZyb20gXCJuby1jYXNlXCI7XG5leHBvcnQgZnVuY3Rpb24gcGFzY2FsQ2FzZVRyYW5zZm9ybShpbnB1dCwgaW5kZXgpIHtcbiAgICB2YXIgZmlyc3RDaGFyID0gaW5wdXQuY2hhckF0KDApO1xuICAgIHZhciBsb3dlckNoYXJzID0gaW5wdXQuc3Vic3RyKDEpLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKGluZGV4ID4gMCAmJiBmaXJzdENoYXIgPj0gXCIwXCIgJiYgZmlyc3RDaGFyIDw9IFwiOVwiKSB7XG4gICAgICAgIHJldHVybiBcIl9cIiArIGZpcnN0Q2hhciArIGxvd2VyQ2hhcnM7XG4gICAgfVxuICAgIHJldHVybiBcIlwiICsgZmlyc3RDaGFyLnRvVXBwZXJDYXNlKCkgKyBsb3dlckNoYXJzO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBhc2NhbENhc2VUcmFuc2Zvcm1NZXJnZShpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGlucHV0LnNsaWNlKDEpLnRvTG93ZXJDYXNlKCk7XG59XG5leHBvcnQgZnVuY3Rpb24gcGFzY2FsQ2FzZShpbnB1dCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgcmV0dXJuIG5vQ2FzZShpbnB1dCwgX19hc3NpZ24oeyBkZWxpbWl0ZXI6IFwiXCIsIHRyYW5zZm9ybTogcGFzY2FsQ2FzZVRyYW5zZm9ybSB9LCBvcHRpb25zKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgeyBfX2Fzc2lnbiB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgZG90Q2FzZSB9IGZyb20gXCJkb3QtY2FzZVwiO1xuZXhwb3J0IGZ1bmN0aW9uIHBhdGhDYXNlKGlucHV0LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICByZXR1cm4gZG90Q2FzZShpbnB1dCwgX19hc3NpZ24oeyBkZWxpbWl0ZXI6IFwiL1wiIH0sIG9wdGlvbnMpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IF9fYXNzaWduIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBub0Nhc2UgfSBmcm9tIFwibm8tY2FzZVwiO1xuaW1wb3J0IHsgdXBwZXJDYXNlRmlyc3QgfSBmcm9tIFwidXBwZXItY2FzZS1maXJzdFwiO1xuZXhwb3J0IGZ1bmN0aW9uIHNlbnRlbmNlQ2FzZVRyYW5zZm9ybShpbnB1dCwgaW5kZXgpIHtcbiAgICB2YXIgcmVzdWx0ID0gaW5wdXQudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoaW5kZXggPT09IDApXG4gICAgICAgIHJldHVybiB1cHBlckNhc2VGaXJzdChyZXN1bHQpO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnQgZnVuY3Rpb24gc2VudGVuY2VDYXNlKGlucHV0LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICByZXR1cm4gbm9DYXNlKGlucHV0LCBfX2Fzc2lnbih7IGRlbGltaXRlcjogXCIgXCIsIHRyYW5zZm9ybTogc2VudGVuY2VDYXNlVHJhbnNmb3JtIH0sIG9wdGlvbnMpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IF9fYXNzaWduIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBkb3RDYXNlIH0gZnJvbSBcImRvdC1jYXNlXCI7XG5leHBvcnQgZnVuY3Rpb24gc25ha2VDYXNlKGlucHV0LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICByZXR1cm4gZG90Q2FzZShpbnB1dCwgX19hc3NpZ24oeyBkZWxpbWl0ZXI6IFwiX1wiIH0sIG9wdGlvbnMpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qKlxuICogVXBwZXIgY2FzZSB0aGUgZmlyc3QgY2hhcmFjdGVyIG9mIGFuIGlucHV0IHN0cmluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwcGVyQ2FzZUZpcnN0KGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgaW5wdXQuc3Vic3RyKDEpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLyoqXG4gKiBTb3VyY2U6IGZ0cDovL2Z0cC51bmljb2RlLm9yZy9QdWJsaWMvVUNEL2xhdGVzdC91Y2QvU3BlY2lhbENhc2luZy50eHRcbiAqL1xudmFyIFNVUFBPUlRFRF9MT0NBTEUgPSB7XG4gICAgdHI6IHtcbiAgICAgICAgcmVnZXhwOiAvW1xcdTAwNjldL2csXG4gICAgICAgIG1hcDoge1xuICAgICAgICAgICAgaTogXCJcXHUwMTMwXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgYXo6IHtcbiAgICAgICAgcmVnZXhwOiAvW1xcdTAwNjldL2csXG4gICAgICAgIG1hcDoge1xuICAgICAgICAgICAgaTogXCJcXHUwMTMwXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbHQ6IHtcbiAgICAgICAgcmVnZXhwOiAvW1xcdTAwNjlcXHUwMDZBXFx1MDEyRl1cXHUwMzA3fFxcdTAwNjlcXHUwMzA3W1xcdTAzMDBcXHUwMzAxXFx1MDMwM10vZyxcbiAgICAgICAgbWFwOiB7XG4gICAgICAgICAgICBpzIc6IFwiXFx1MDA0OVwiLFxuICAgICAgICAgICAgasyHOiBcIlxcdTAwNEFcIixcbiAgICAgICAgICAgIMSvzIc6IFwiXFx1MDEyRVwiLFxuICAgICAgICAgICAgacyHzIA6IFwiXFx1MDBDQ1wiLFxuICAgICAgICAgICAgacyHzIE6IFwiXFx1MDBDRFwiLFxuICAgICAgICAgICAgacyHzIM6IFwiXFx1MDEyOFwiXG4gICAgICAgIH1cbiAgICB9XG59O1xuLyoqXG4gKiBMb2NhbGl6ZWQgdXBwZXIgY2FzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvY2FsZVVwcGVyQ2FzZShzdHIsIGxvY2FsZSkge1xuICAgIHZhciBsYW5nID0gU1VQUE9SVEVEX0xPQ0FMRVtsb2NhbGUudG9Mb3dlckNhc2UoKV07XG4gICAgaWYgKGxhbmcpXG4gICAgICAgIHJldHVybiB1cHBlckNhc2Uoc3RyLnJlcGxhY2UobGFuZy5yZWdleHAsIGZ1bmN0aW9uIChtKSB7IHJldHVybiBsYW5nLm1hcFttXTsgfSkpO1xuICAgIHJldHVybiB1cHBlckNhc2Uoc3RyKTtcbn1cbi8qKlxuICogVXBwZXIgY2FzZSBhcyBhIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXBwZXJDYXNlKHN0cikge1xuICAgIHJldHVybiBzdHIudG9VcHBlckNhc2UoKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IF9fYXNzaWduIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBub0Nhc2UgfSBmcm9tIFwibm8tY2FzZVwiO1xuaW1wb3J0IHsgdXBwZXJDYXNlRmlyc3QgfSBmcm9tIFwidXBwZXItY2FzZS1maXJzdFwiO1xuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxDYXNlVHJhbnNmb3JtKGlucHV0KSB7XG4gICAgcmV0dXJuIHVwcGVyQ2FzZUZpcnN0KGlucHV0LnRvTG93ZXJDYXNlKCkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxDYXNlKGlucHV0LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICByZXR1cm4gbm9DYXNlKGlucHV0LCBfX2Fzc2lnbih7IGRlbGltaXRlcjogXCIgXCIsIHRyYW5zZm9ybTogY2FwaXRhbENhc2VUcmFuc2Zvcm0gfSwgb3B0aW9ucykpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLyoqXG4gKiBTb3VyY2U6IGZ0cDovL2Z0cC51bmljb2RlLm9yZy9QdWJsaWMvVUNEL2xhdGVzdC91Y2QvU3BlY2lhbENhc2luZy50eHRcbiAqL1xudmFyIFNVUFBPUlRFRF9MT0NBTEUgPSB7XG4gICAgdHI6IHtcbiAgICAgICAgcmVnZXhwOiAvXFx1MDEzMHxcXHUwMDQ5fFxcdTAwNDlcXHUwMzA3L2csXG4gICAgICAgIG1hcDoge1xuICAgICAgICAgICAgxLA6IFwiXFx1MDA2OVwiLFxuICAgICAgICAgICAgSTogXCJcXHUwMTMxXCIsXG4gICAgICAgICAgICBJzIc6IFwiXFx1MDA2OVwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGF6OiB7XG4gICAgICAgIHJlZ2V4cDogL1xcdTAxMzAvZyxcbiAgICAgICAgbWFwOiB7XG4gICAgICAgICAgICDEsDogXCJcXHUwMDY5XCIsXG4gICAgICAgICAgICBJOiBcIlxcdTAxMzFcIixcbiAgICAgICAgICAgIEnMhzogXCJcXHUwMDY5XCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbHQ6IHtcbiAgICAgICAgcmVnZXhwOiAvXFx1MDA0OXxcXHUwMDRBfFxcdTAxMkV8XFx1MDBDQ3xcXHUwMENEfFxcdTAxMjgvZyxcbiAgICAgICAgbWFwOiB7XG4gICAgICAgICAgICBJOiBcIlxcdTAwNjlcXHUwMzA3XCIsXG4gICAgICAgICAgICBKOiBcIlxcdTAwNkFcXHUwMzA3XCIsXG4gICAgICAgICAgICDErjogXCJcXHUwMTJGXFx1MDMwN1wiLFxuICAgICAgICAgICAgw4w6IFwiXFx1MDA2OVxcdTAzMDdcXHUwMzAwXCIsXG4gICAgICAgICAgICDDjTogXCJcXHUwMDY5XFx1MDMwN1xcdTAzMDFcIixcbiAgICAgICAgICAgIMSoOiBcIlxcdTAwNjlcXHUwMzA3XFx1MDMwM1wiXG4gICAgICAgIH1cbiAgICB9XG59O1xuLyoqXG4gKiBMb2NhbGl6ZWQgbG93ZXIgY2FzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvY2FsZUxvd2VyQ2FzZShzdHIsIGxvY2FsZSkge1xuICAgIHZhciBsYW5nID0gU1VQUE9SVEVEX0xPQ0FMRVtsb2NhbGUudG9Mb3dlckNhc2UoKV07XG4gICAgaWYgKGxhbmcpXG4gICAgICAgIHJldHVybiBsb3dlckNhc2Uoc3RyLnJlcGxhY2UobGFuZy5yZWdleHAsIGZ1bmN0aW9uIChtKSB7IHJldHVybiBsYW5nLm1hcFttXTsgfSkpO1xuICAgIHJldHVybiBsb3dlckNhc2Uoc3RyKTtcbn1cbi8qKlxuICogTG93ZXIgY2FzZSBhcyBhIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbG93ZXJDYXNlKHN0cikge1xuICAgIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IGxvd2VyQ2FzZSB9IGZyb20gXCJsb3dlci1jYXNlXCI7XG4vLyBTdXBwb3J0IGNhbWVsIGNhc2UgKFwiY2FtZWxDYXNlXCIgLT4gXCJjYW1lbCBDYXNlXCIgYW5kIFwiQ0FNRUxDYXNlXCIgLT4gXCJDQU1FTCBDYXNlXCIpLlxudmFyIERFRkFVTFRfU1BMSVRfUkVHRVhQID0gWy8oW2EtejAtOV0pKFtBLVpdKS9nLCAvKFtBLVpdKShbQS1aXVthLXpdKS9nXTtcbi8vIFJlbW92ZSBhbGwgbm9uLXdvcmQgY2hhcmFjdGVycy5cbnZhciBERUZBVUxUX1NUUklQX1JFR0VYUCA9IC9bXkEtWjAtOV0rL2dpO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIHN0cmluZyBpbnRvIHNvbWV0aGluZyBvdGhlciBsaWJyYXJpZXMgY2FuIG1hbmlwdWxhdGUgZWFzaWVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9DYXNlKGlucHV0LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnNwbGl0UmVnZXhwLCBzcGxpdFJlZ2V4cCA9IF9hID09PSB2b2lkIDAgPyBERUZBVUxUX1NQTElUX1JFR0VYUCA6IF9hLCBfYiA9IG9wdGlvbnMuc3RyaXBSZWdleHAsIHN0cmlwUmVnZXhwID0gX2IgPT09IHZvaWQgMCA/IERFRkFVTFRfU1RSSVBfUkVHRVhQIDogX2IsIF9jID0gb3B0aW9ucy50cmFuc2Zvcm0sIHRyYW5zZm9ybSA9IF9jID09PSB2b2lkIDAgPyBsb3dlckNhc2UgOiBfYywgX2QgPSBvcHRpb25zLmRlbGltaXRlciwgZGVsaW1pdGVyID0gX2QgPT09IHZvaWQgMCA/IFwiIFwiIDogX2Q7XG4gICAgdmFyIHJlc3VsdCA9IHJlcGxhY2UocmVwbGFjZShpbnB1dCwgc3BsaXRSZWdleHAsIFwiJDFcXDAkMlwiKSwgc3RyaXBSZWdleHAsIFwiXFwwXCIpO1xuICAgIHZhciBzdGFydCA9IDA7XG4gICAgdmFyIGVuZCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgLy8gVHJpbSB0aGUgZGVsaW1pdGVyIGZyb20gYXJvdW5kIHRoZSBvdXRwdXQgc3RyaW5nLlxuICAgIHdoaWxlIChyZXN1bHQuY2hhckF0KHN0YXJ0KSA9PT0gXCJcXDBcIilcbiAgICAgICAgc3RhcnQrKztcbiAgICB3aGlsZSAocmVzdWx0LmNoYXJBdChlbmQgLSAxKSA9PT0gXCJcXDBcIilcbiAgICAgICAgZW5kLS07XG4gICAgLy8gVHJhbnNmb3JtIGVhY2ggdG9rZW4gaW5kZXBlbmRlbnRseS5cbiAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgIC5zbGljZShzdGFydCwgZW5kKVxuICAgICAgICAuc3BsaXQoXCJcXDBcIilcbiAgICAgICAgLm1hcCh0cmFuc2Zvcm0pXG4gICAgICAgIC5qb2luKGRlbGltaXRlcik7XG59XG4vKipcbiAqIFJlcGxhY2UgYHJlYCBpbiB0aGUgaW5wdXQgc3RyaW5nIHdpdGggdGhlIHJlcGxhY2VtZW50IHZhbHVlLlxuICovXG5mdW5jdGlvbiByZXBsYWNlKGlucHV0LCByZSwgdmFsdWUpIHtcbiAgICBpZiAocmUgaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKHJlLCB2YWx1ZSk7XG4gICAgcmV0dXJuIHJlLnJlZHVjZShmdW5jdGlvbiAoaW5wdXQsIHJlKSB7IHJldHVybiBpbnB1dC5yZXBsYWNlKHJlLCB2YWx1ZSk7IH0sIGlucHV0KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qKlxuICogVXBwZXIgY2FzZSB0aGUgZmlyc3QgY2hhcmFjdGVyIG9mIGFuIGlucHV0IHN0cmluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwcGVyQ2FzZUZpcnN0KGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgaW5wdXQuc3Vic3RyKDEpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFIgPSB0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgPyBSZWZsZWN0IDogbnVsbFxudmFyIFJlZmxlY3RBcHBseSA9IFIgJiYgdHlwZW9mIFIuYXBwbHkgPT09ICdmdW5jdGlvbidcbiAgPyBSLmFwcGx5XG4gIDogZnVuY3Rpb24gUmVmbGVjdEFwcGx5KHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpIHtcbiAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwodGFyZ2V0LCByZWNlaXZlciwgYXJncyk7XG4gIH1cblxudmFyIFJlZmxlY3RPd25LZXlzXG5pZiAoUiAmJiB0eXBlb2YgUi5vd25LZXlzID09PSAnZnVuY3Rpb24nKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gUi5vd25LZXlzXG59IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KVxuICAgICAgLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkpO1xuICB9O1xufSBlbHNlIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gUHJvY2Vzc0VtaXRXYXJuaW5nKHdhcm5pbmcpIHtcbiAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS53YXJuKSBjb25zb2xlLndhcm4od2FybmluZyk7XG59XG5cbnZhciBOdW1iZXJJc05hTiA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiBOdW1iZXJJc05hTih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIEV2ZW50RW1pdHRlci5pbml0LmNhbGwodGhpcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHNDb3VudCA9IDA7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbnZhciBkZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbmZ1bmN0aW9uIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICB9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShFdmVudEVtaXR0ZXIsICdkZWZhdWx0TWF4TGlzdGVuZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkZWZhdWx0TWF4TGlzdGVuZXJzO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uKGFyZykge1xuICAgIGlmICh0eXBlb2YgYXJnICE9PSAnbnVtYmVyJyB8fCBhcmcgPCAwIHx8IE51bWJlcklzTmFOKGFyZykpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJkZWZhdWx0TWF4TGlzdGVuZXJzXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIGFyZyArICcuJyk7XG4gICAgfVxuICAgIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSBhcmc7XG4gIH1cbn0pO1xuXG5FdmVudEVtaXR0ZXIuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gIGlmICh0aGlzLl9ldmVudHMgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgdGhpcy5fZXZlbnRzID09PSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuX2V2ZW50cykge1xuICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICB9XG5cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn07XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIHNldE1heExpc3RlbmVycyhuKSB7XG4gIGlmICh0eXBlb2YgbiAhPT0gJ251bWJlcicgfHwgbiA8IDAgfHwgTnVtYmVySXNOYU4obikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiblwiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBuICsgJy4nKTtcbiAgfVxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uIF9nZXRNYXhMaXN0ZW5lcnModGhhdCkge1xuICBpZiAodGhhdC5fbWF4TGlzdGVuZXJzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICByZXR1cm4gdGhhdC5fbWF4TGlzdGVuZXJzO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmdldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIGdldE1heExpc3RlbmVycygpIHtcbiAgcmV0dXJuIF9nZXRNYXhMaXN0ZW5lcnModGhpcyk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KHR5cGUpIHtcbiAgdmFyIGFyZ3MgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICB2YXIgZG9FcnJvciA9ICh0eXBlID09PSAnZXJyb3InKTtcblxuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpXG4gICAgZG9FcnJvciA9IChkb0Vycm9yICYmIGV2ZW50cy5lcnJvciA9PT0gdW5kZWZpbmVkKTtcbiAgZWxzZSBpZiAoIWRvRXJyb3IpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKGRvRXJyb3IpIHtcbiAgICB2YXIgZXI7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMClcbiAgICAgIGVyID0gYXJnc1swXTtcbiAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgLy8gTm90ZTogVGhlIGNvbW1lbnRzIG9uIHRoZSBgdGhyb3dgIGxpbmVzIGFyZSBpbnRlbnRpb25hbCwgdGhleSBzaG93XG4gICAgICAvLyB1cCBpbiBOb2RlJ3Mgb3V0cHV0IGlmIHRoaXMgcmVzdWx0cyBpbiBhbiB1bmhhbmRsZWQgZXhjZXB0aW9uLlxuICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgfVxuICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdVbmhhbmRsZWQgZXJyb3IuJyArIChlciA/ICcgKCcgKyBlci5tZXNzYWdlICsgJyknIDogJycpKTtcbiAgICBlcnIuY29udGV4dCA9IGVyO1xuICAgIHRocm93IGVycjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgfVxuXG4gIHZhciBoYW5kbGVyID0gZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChoYW5kbGVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFJlZmxlY3RBcHBseShoYW5kbGVyLCB0aGlzLCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbGVuID0gaGFuZGxlci5sZW5ndGg7XG4gICAgdmFyIGxpc3RlbmVycyA9IGFycmF5Q2xvbmUoaGFuZGxlciwgbGVuKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKVxuICAgICAgUmVmbGVjdEFwcGx5KGxpc3RlbmVyc1tpXSwgdGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmZ1bmN0aW9uIF9hZGRMaXN0ZW5lcih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBwcmVwZW5kKSB7XG4gIHZhciBtO1xuICB2YXIgZXZlbnRzO1xuICB2YXIgZXhpc3Rpbmc7XG5cbiAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG5cbiAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0YXJnZXQuX2V2ZW50c0NvdW50ID0gMDtcbiAgfSBlbHNlIHtcbiAgICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAgIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgICBpZiAoZXZlbnRzLm5ld0xpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldC5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA/IGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gICAgICAvLyBSZS1hc3NpZ24gYGV2ZW50c2AgYmVjYXVzZSBhIG5ld0xpc3RlbmVyIGhhbmRsZXIgY291bGQgaGF2ZSBjYXVzZWQgdGhlXG4gICAgICAvLyB0aGlzLl9ldmVudHMgdG8gYmUgYXNzaWduZWQgdG8gYSBuZXcgb2JqZWN0XG4gICAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgICB9XG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV07XG4gIH1cblxuICBpZiAoZXhpc3RpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gICAgKyt0YXJnZXQuX2V2ZW50c0NvdW50O1xuICB9IGVsc2Uge1xuICAgIGlmICh0eXBlb2YgZXhpc3RpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPVxuICAgICAgICBwcmVwZW5kID8gW2xpc3RlbmVyLCBleGlzdGluZ10gOiBbZXhpc3RpbmcsIGxpc3RlbmVyXTtcbiAgICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB9IGVsc2UgaWYgKHByZXBlbmQpIHtcbiAgICAgIGV4aXN0aW5nLnVuc2hpZnQobGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleGlzdGluZy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICAgIG0gPSBfZ2V0TWF4TGlzdGVuZXJzKHRhcmdldCk7XG4gICAgaWYgKG0gPiAwICYmIGV4aXN0aW5nLmxlbmd0aCA+IG0gJiYgIWV4aXN0aW5nLndhcm5lZCkge1xuICAgICAgZXhpc3Rpbmcud2FybmVkID0gdHJ1ZTtcbiAgICAgIC8vIE5vIGVycm9yIGNvZGUgZm9yIHRoaXMgc2luY2UgaXQgaXMgYSBXYXJuaW5nXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgIHZhciB3ID0gbmV3IEVycm9yKCdQb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5IGxlYWsgZGV0ZWN0ZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5sZW5ndGggKyAnICcgKyBTdHJpbmcodHlwZSkgKyAnIGxpc3RlbmVycyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FkZGVkLiBVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2luY3JlYXNlIGxpbWl0Jyk7XG4gICAgICB3Lm5hbWUgPSAnTWF4TGlzdGVuZXJzRXhjZWVkZWRXYXJuaW5nJztcbiAgICAgIHcuZW1pdHRlciA9IHRhcmdldDtcbiAgICAgIHcudHlwZSA9IHR5cGU7XG4gICAgICB3LmNvdW50ID0gZXhpc3RpbmcubGVuZ3RoO1xuICAgICAgUHJvY2Vzc0VtaXRXYXJuaW5nKHcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgdHJ1ZSk7XG4gICAgfTtcblxuZnVuY3Rpb24gb25jZVdyYXBwZXIoKSB7XG4gIGlmICghdGhpcy5maXJlZCkge1xuICAgIHRoaXMudGFyZ2V0LnJlbW92ZUxpc3RlbmVyKHRoaXMudHlwZSwgdGhpcy53cmFwRm4pO1xuICAgIHRoaXMuZmlyZWQgPSB0cnVlO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxuICAgICAgcmV0dXJuIHRoaXMubGlzdGVuZXIuY2FsbCh0aGlzLnRhcmdldCk7XG4gICAgcmV0dXJuIHRoaXMubGlzdGVuZXIuYXBwbHkodGhpcy50YXJnZXQsIGFyZ3VtZW50cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX29uY2VXcmFwKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIHN0YXRlID0geyBmaXJlZDogZmFsc2UsIHdyYXBGbjogdW5kZWZpbmVkLCB0YXJnZXQ6IHRhcmdldCwgdHlwZTogdHlwZSwgbGlzdGVuZXI6IGxpc3RlbmVyIH07XG4gIHZhciB3cmFwcGVkID0gb25jZVdyYXBwZXIuYmluZChzdGF0ZSk7XG4gIHdyYXBwZWQubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgc3RhdGUud3JhcEZuID0gd3JhcHBlZDtcbiAgcmV0dXJuIHdyYXBwZWQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UodHlwZSwgbGlzdGVuZXIpIHtcbiAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG4gIHRoaXMub24odHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kT25jZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kT25jZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgIHRoaXMucHJlcGVuZExpc3RlbmVyKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuLy8gRW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmIGFuZCBvbmx5IGlmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICB2YXIgbGlzdCwgZXZlbnRzLCBwb3NpdGlvbiwgaSwgb3JpZ2luYWxMaXN0ZW5lcjtcblxuICAgICAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGxpc3QgPSBldmVudHNbdHlwZV07XG4gICAgICBpZiAobGlzdCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8IGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0Lmxpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbGlzdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwb3NpdGlvbiA9IC0xO1xuXG4gICAgICAgIGZvciAoaSA9IGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHwgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIG9yaWdpbmFsTGlzdGVuZXIgPSBsaXN0W2ldLmxpc3RlbmVyO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgICBpZiAocG9zaXRpb24gPT09IDApXG4gICAgICAgICAgbGlzdC5zaGlmdCgpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBzcGxpY2VPbmUobGlzdCwgcG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKVxuICAgICAgICAgIGV2ZW50c1t0eXBlXSA9IGxpc3RbMF07XG5cbiAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBvcmlnaW5hbExpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKHR5cGUpIHtcbiAgICAgIHZhciBsaXN0ZW5lcnMsIGV2ZW50cywgaTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRzW3R5cGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGV2ZW50cyk7XG4gICAgICAgIHZhciBrZXk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBsaXN0ZW5lcnMgPSBldmVudHNbdHlwZV07XG5cbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXJzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gTElGTyBvcmRlclxuICAgICAgICBmb3IgKGkgPSBsaXN0ZW5lcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuZnVuY3Rpb24gX2xpc3RlbmVycyh0YXJnZXQsIHR5cGUsIHVud3JhcCkge1xuICB2YXIgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcbiAgaWYgKGV2bGlzdGVuZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKVxuICAgIHJldHVybiB1bndyYXAgPyBbZXZsaXN0ZW5lci5saXN0ZW5lciB8fCBldmxpc3RlbmVyXSA6IFtldmxpc3RlbmVyXTtcblxuICByZXR1cm4gdW53cmFwID9cbiAgICB1bndyYXBMaXN0ZW5lcnMoZXZsaXN0ZW5lcikgOiBhcnJheUNsb25lKGV2bGlzdGVuZXIsIGV2bGlzdGVuZXIubGVuZ3RoKTtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCB0cnVlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmF3TGlzdGVuZXJzID0gZnVuY3Rpb24gcmF3TGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5saXN0ZW5lckNvdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJDb3VudCh0eXBlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbGlzdGVuZXJDb3VudC5jYWxsKGVtaXR0ZXIsIHR5cGUpO1xuICB9XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBsaXN0ZW5lckNvdW50O1xuZnVuY3Rpb24gbGlzdGVuZXJDb3VudCh0eXBlKSB7XG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG5cbiAgICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAoZXZsaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZXZsaXN0ZW5lci5sZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIDA7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZXZlbnROYW1lcyA9IGZ1bmN0aW9uIGV2ZW50TmFtZXMoKSB7XG4gIHJldHVybiB0aGlzLl9ldmVudHNDb3VudCA+IDAgPyBSZWZsZWN0T3duS2V5cyh0aGlzLl9ldmVudHMpIDogW107XG59O1xuXG5mdW5jdGlvbiBhcnJheUNsb25lKGFyciwgbikge1xuICB2YXIgY29weSA9IG5ldyBBcnJheShuKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpXG4gICAgY29weVtpXSA9IGFycltpXTtcbiAgcmV0dXJuIGNvcHk7XG59XG5cbmZ1bmN0aW9uIHNwbGljZU9uZShsaXN0LCBpbmRleCkge1xuICBmb3IgKDsgaW5kZXggKyAxIDwgbGlzdC5sZW5ndGg7IGluZGV4KyspXG4gICAgbGlzdFtpbmRleF0gPSBsaXN0W2luZGV4ICsgMV07XG4gIGxpc3QucG9wKCk7XG59XG5cbmZ1bmN0aW9uIHVud3JhcExpc3RlbmVycyhhcnIpIHtcbiAgdmFyIHJldCA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXQubGVuZ3RoOyArK2kpIHtcbiAgICByZXRbaV0gPSBhcnJbaV0ubGlzdGVuZXIgfHwgYXJyW2ldO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG4iLCJ2YXIgaXNFbXB0eSA9IHJlcXVpcmUoJ2lzLWVtcHR5JylcbnZhciBpc1doaXRlc3BhY2UgPSByZXF1aXJlKCdpcy13aGl0ZXNwYWNlJylcblxuZnVuY3Rpb24gaXNTdHJpbmcgKG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ3N0cmluZydcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0KSB7XG4gIHJldHVybiBpc1N0cmluZyhvYmplY3QpICYmIG9iamVjdC5sZW5ndGggPyBpc1doaXRlc3BhY2Uob2JqZWN0KSA6IGlzRW1wdHkob2JqZWN0KVxufVxuIiwiXG4vKipcbiAqIEhhcyBvd24gcHJvcGVydHkuXG4gKlxuICogQHR5cGUge0Z1bmN0aW9ufVxuICovXG5cbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG5cbi8qKlxuICogVG8gc3RyaW5nLlxuICpcbiAqIEB0eXBlIHtGdW5jdGlvbn1cbiAqL1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG5cbi8qKlxuICogVGVzdCB3aGV0aGVyIGEgdmFsdWUgaXMgXCJlbXB0eVwiLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5mdW5jdGlvbiBpc0VtcHR5KHZhbCkge1xuICAvLyBOdWxsIGFuZCBVbmRlZmluZWQuLi5cbiAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdHJ1ZVxuXG4gIC8vIEJvb2xlYW5zLi4uXG4gIGlmICgnYm9vbGVhbicgPT0gdHlwZW9mIHZhbCkgcmV0dXJuIGZhbHNlXG5cbiAgLy8gTnVtYmVycy4uLlxuICBpZiAoJ251bWJlcicgPT0gdHlwZW9mIHZhbCkgcmV0dXJuIHZhbCA9PT0gMFxuXG4gIC8vIFN0cmluZ3MuLi5cbiAgaWYgKCdzdHJpbmcnID09IHR5cGVvZiB2YWwpIHJldHVybiB2YWwubGVuZ3RoID09PSAwXG5cbiAgLy8gRnVuY3Rpb25zLi4uXG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiB2YWwpIHJldHVybiB2YWwubGVuZ3RoID09PSAwXG5cbiAgLy8gQXJyYXlzLi4uXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHJldHVybiB2YWwubGVuZ3RoID09PSAwXG5cbiAgLy8gRXJyb3JzLi4uXG4gIGlmICh2YWwgaW5zdGFuY2VvZiBFcnJvcikgcmV0dXJuIHZhbC5tZXNzYWdlID09PSAnJ1xuXG4gIC8vIE9iamVjdHMuLi5cbiAgaWYgKHZhbC50b1N0cmluZyA9PSB0b1N0cmluZykge1xuICAgIHN3aXRjaCAodmFsLnRvU3RyaW5nKCkpIHtcblxuICAgICAgLy8gTWFwcywgU2V0cywgRmlsZXMgYW5kIEVycm9ycy4uLlxuICAgICAgY2FzZSAnW29iamVjdCBGaWxlXSc6XG4gICAgICBjYXNlICdbb2JqZWN0IE1hcF0nOlxuICAgICAgY2FzZSAnW29iamVjdCBTZXRdJzoge1xuICAgICAgICByZXR1cm4gdmFsLnNpemUgPT09IDBcbiAgICAgIH1cblxuICAgICAgLy8gUGxhaW4gb2JqZWN0cy4uLlxuICAgICAgY2FzZSAnW29iamVjdCBPYmplY3RdJzoge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdmFsKSB7XG4gICAgICAgICAgaWYgKGhhcy5jYWxsKHZhbCwga2V5KSkgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEFueXRoaW5nIGVsc2UuLi5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbi8qKlxuICogRXhwb3J0IGBpc0VtcHR5YC5cbiAqXG4gKiBAdHlwZSB7RnVuY3Rpb259XG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBpc0VtcHR5XG4iLCIvKiFcbiAqIGlzLXdoaXRlc3BhY2UgPGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L2lzLXdoaXRlc3BhY2U+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LTIwMTUsIEpvbiBTY2hsaW5rZXJ0LlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGNhY2hlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzV2hpdGVzcGFjZShzdHIpIHtcbiAgcmV0dXJuICh0eXBlb2Ygc3RyID09PSAnc3RyaW5nJykgJiYgcmVnZXgoKS50ZXN0KHN0cik7XG59O1xuXG5mdW5jdGlvbiByZWdleCgpIHtcbiAgLy8gZW5zdXJlIHRoYXQgcnVudGltZSBjb21waWxhdGlvbiBvbmx5IGhhcHBlbnMgb25jZVxuICByZXR1cm4gY2FjaGUgfHwgKGNhY2hlID0gbmV3IFJlZ0V4cCgnXltcXFxcc1xceDA5XFx4MEFcXHgwQlxceDBDXFx4MERcXHgyMFxceEEwXFx1MTY4MFxcdTE4MEVcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwQVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdTIwMjhcXHUyMDI5XFx1RkVGRlwiXSskJykpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBbICd0aGUnLCAnYScsICdhbicsICdzb21lJyBdXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFtcbiAgICAnYXMnXG4gICwgJ2JlY2F1c2UnXG4gICwgJ2ZvcidcbiAgLCAnYW5kJ1xuICAsICdub3InXG4gICwgJ2J1dCdcbiAgLCAnb3InXG4gICwgJ3lldCdcbiAgLCAnc28nXG5dXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFtcbiAgICAnYSdcbiAgLCAnYWJhZnQnXG4gICwgJ2Fib2FyZCdcbiAgLCAnYWJvdXQnXG4gICwgJ2Fib3ZlJ1xuICAsICdhYnNlbnQnXG4gICwgJ2Fjcm9zcydcbiAgLCAnYWZvcmUnXG4gICwgJ2FmdGVyJ1xuICAsICdhZ2FpbnN0J1xuICAsICdhbG9uZydcbiAgLCAnYWxvbmdzaWRlJ1xuICAsICdhbWlkJ1xuICAsICdhbWlkc3QnXG4gICwgJ2Ftb25nJ1xuICAsICdhbW9uZ3N0J1xuICAsICdhbidcbiAgLCAnYXByb3BvcydcbiAgLCAnYXB1ZCdcbiAgLCAnYXJvdW5kJ1xuICAsICdhcydcbiAgLCAnYXNpZGUnXG4gICwgJ2FzdHJpZGUnXG4gICwgJ2F0J1xuICAsICdhdGh3YXJ0J1xuICAsICdhdG9wJ1xuICAsICdiYXJyaW5nJ1xuICAsICdiZWZvcmUnXG4gICwgJ2JlaGluZCdcbiAgLCAnYmVsb3cnXG4gICwgJ2JlbmVhdGgnXG4gICwgJ2Jlc2lkZSdcbiAgLCAnYmVzaWRlcydcbiAgLCAnYmV0d2VlbidcbiAgLCAnYmV5b25kJ1xuICAsICdidXQnXG4gICwgJ2J5J1xuICAsICdjaXJjYSdcbiAgLCAnY29uY2VybmluZydcbiAgLCAnZGVzcGl0ZSdcbiAgLCAnZG93bidcbiAgLCAnZHVyaW5nJ1xuICAsICdleGNlcHQnXG4gICwgJ2V4Y2x1ZGluZydcbiAgLCAnZmFpbGluZydcbiAgLCAnZm9sbG93aW5nJ1xuICAsICdmb3InXG4gICwgJ2ZvcmVuZW5zdCdcbiAgLCAnZnJvbSdcbiAgLCAnZ2l2ZW4nXG4gICwgJ2luJ1xuICAsICdpbmNsdWRpbmcnXG4gICwgJ2luc2lkZSdcbiAgLCAnaW50bydcbiAgLCAnbGlrZSdcbiAgLCAnbWlkJ1xuICAsICdtaWRzdCdcbiAgLCAnbWludXMnXG4gICwgJ21vZHVsbydcbiAgLCAnbmVhcidcbiAgLCAnbmV4dCdcbiAgLCAnbm90d2l0aHN0YW5kaW5nJ1xuICAsICdvXFwnJ1xuICAsICdvZidcbiAgLCAnb2ZmJ1xuICAsICdvbidcbiAgLCAnb250bydcbiAgLCAnb3Bwb3NpdGUnXG4gICwgJ291dCdcbiAgLCAnb3V0c2lkZSdcbiAgLCAnb3ZlcidcbiAgLCAncGFjZSdcbiAgLCAncGFzdCdcbiAgLCAncGVyJ1xuICAsICdwbHVzJ1xuICAsICdwcm8nXG4gICwgJ3F1YSdcbiAgLCAncmVnYXJkaW5nJ1xuICAsICdyb3VuZCdcbiAgLCAnc2FucydcbiAgLCAnc2F2ZSdcbiAgLCAnc2luY2UnXG4gICwgJ3RoYW4nXG4gICwgJ3Rocm91Z2gnXG4gICwgJ3Rocm91Z2hvdXQnXG4gICwgJ3RocnUnXG4gICwgJ3RocnVvdXQnXG4gICwgJ3RpbGwnXG4gICwgJ3RpbWVzJ1xuICAsICd0bydcbiAgLCAndG93YXJkJ1xuICAsICd0b3dhcmRzJ1xuICAsICd1bmRlcidcbiAgLCAndW5kZXJuZWF0aCdcbiAgLCAndW5saWtlJ1xuICAsICd1bnRpbCdcbiAgLCAndW50bydcbiAgLCAndXAnXG4gICwgJ3Vwb24nXG4gICwgJ3ZlcnN1cydcbiAgLCAndmlhJ1xuICAsICd2aWNlJ1xuICAsICd2aXMtw6AtdmlzJ1xuICAsICd3aXRoJ1xuICAsICd3aXRoaW4nXG4gICwgJ3dpdGhvdXQnXG4gICwgJ3dvcnRoJ1xuXVxuIiwiLypcbiAqIFRvIFRpdGxlIENhc2UgMi4xIOKAkyBodHRwOi8vaW5kaXZpZGVkLmNvbS9jb2RlL3RvLXRpdGxlLWNhc2UvXG4gKiBDb3B5cmlnaHQgwqkgMjAwOOKAkzIwMTMgRGF2aWQgR291Y2guIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqXG4gKiBtb2RpZmljYXRpb25zIGJ5IEBydmFnZyBBcHItMjAxNFxuICovXG5cbi8vU3RyaW5nLnByb3RvdHlwZS50b1RpdGxlQ2FzZSA9IGZ1bmN0aW9uKCl7XG5cblxudmFyIHNtYWxsV29yZHMgPSAvXihhfGFufGFuZHxhc3xhdHxidXR8Ynl8ZW58Zm9yfGlmfGlufG5vcnxvZnxvbnxvcnxwZXJ8dGhlfHRvfHZzP1xcLj98dmlhKSQvaTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRvVGl0bGVDYXNlKHN0cil7XG4gIHJldHVybiB0aXRsZUNhc2Uoc3RyLCBzbWFsbFdvcmRzKVxufVxuXG5cbm1vZHVsZS5leHBvcnRzLnRvVGl0bGVDYXNlID0gbW9kdWxlLmV4cG9ydHNcblxuXG52YXIgbGF4V29yZHMgPSByZXF1aXJlKCcuL2FydGljbGVzJykuY29uY2F0KHJlcXVpcmUoJy4vcHJlcG9zaXRpb25zJykpLmNvbmNhdChyZXF1aXJlKCcuL2Nvbmp1bmN0aW9ucycpKVxuICAgICAgLmNvbmNhdChzbWFsbFdvcmRzLnNvdXJjZS5yZXBsYWNlKC8oXlxcXlxcKHxcXClcXCQkKS9nLCAnJykuc3BsaXQoJ3wnKSlcbiAgICAgIC5jb25jYXQoWydpcyddKSAvLyBhIHBlcnNvbmFsIHByZWZlcmVuY2VcbiAgLCBsYXhXb3Jkc1JlID0gbmV3IFJlZ0V4cCgnXignICsgbGF4V29yZHMuam9pbignfCcpICsgJykkJywgJ2knKVxuXG5cbm1vZHVsZS5leHBvcnRzLnRvTGF4VGl0bGVDYXNlID0gZnVuY3Rpb24gdG9MYXhUaXRsZUNhc2Uoc3RyKXtcbiAgcmV0dXJuIHRpdGxlQ2FzZShzdHIsIGxheFdvcmRzUmUpXG59XG5cblxuZnVuY3Rpb24gdGl0bGVDYXNlIChzdHIsIHNtYWxsV29yZHMpIHtcbiAgaWYgKCFzdHIpXG4gICAgcmV0dXJuIHN0clxuICByZXR1cm4gc3RyLnJlcGxhY2UoL1tBLVphLXowLTlcXHUwMEMwLVxcdTAwRkZdK1teXFxzLV0qL2csIGZ1bmN0aW9uKG1hdGNoLCBpbmRleCwgdGl0bGUpe1xuICAgIGlmIChpbmRleCA+IDAgJiYgaW5kZXggKyBtYXRjaC5sZW5ndGggIT09IHRpdGxlLmxlbmd0aCAmJlxuICAgICAgbWF0Y2guc2VhcmNoKHNtYWxsV29yZHMpID4gLTEgJiYgdGl0bGUuY2hhckF0KGluZGV4IC0gMikgIT09ICc6JyAmJlxuICAgICAgKHRpdGxlLmNoYXJBdChpbmRleCArIG1hdGNoLmxlbmd0aCkgIT09ICctJyB8fCB0aXRsZS5jaGFyQXQoaW5kZXggLSAxKSA9PT0gJy0nKSAmJlxuICAgICAgdGl0bGUuY2hhckF0KGluZGV4IC0gMSkuc2VhcmNoKC9bXlxccy1dLykgPCAwKSB7XG4gICAgICByZXR1cm4gbWF0Y2gudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICBpZiAobWF0Y2guc3Vic3RyKDEpLnNlYXJjaCgvW0EtWl18XFwuLi8pID4gLTEpIHtcbiAgICAgIHJldHVybiBtYXRjaDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2guY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBtYXRjaC5zdWJzdHIoMSk7XG4gIH0pO1xufVxuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG52YXIgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4W2ldID0gKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKTtcbn1cblxuZnVuY3Rpb24gYnl0ZXNUb1V1aWQoYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBvZmZzZXQgfHwgMDtcbiAgdmFyIGJ0aCA9IGJ5dGVUb0hleDsgLy8gam9pbiB1c2VkIHRvIGZpeCBtZW1vcnkgaXNzdWUgY2F1c2VkIGJ5IGNvbmNhdGVuYXRpb246IGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMxNzUjYzRcblxuICByZXR1cm4gW2J0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJywgYnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLCBidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsIGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJywgYnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXV0uam9pbignJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJ5dGVzVG9VdWlkOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgdjEgfSBmcm9tICcuL3YxLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdjMgfSBmcm9tICcuL3YzLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdjQgfSBmcm9tICcuL3Y0LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdjUgfSBmcm9tICcuL3Y1LmpzJzsiLCIvKlxuICogQnJvd3Nlci1jb21wYXRpYmxlIEphdmFTY3JpcHQgTUQ1XG4gKlxuICogTW9kaWZpY2F0aW9uIG9mIEphdmFTY3JpcHQgTUQ1XG4gKiBodHRwczovL2dpdGh1Yi5jb20vYmx1ZWltcC9KYXZhU2NyaXB0LU1ENVxuICpcbiAqIENvcHlyaWdodCAyMDExLCBTZWJhc3RpYW4gVHNjaGFuXG4gKiBodHRwczovL2JsdWVpbXAubmV0XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlOlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqXG4gKiBCYXNlZCBvblxuICogQSBKYXZhU2NyaXB0IGltcGxlbWVudGF0aW9uIG9mIHRoZSBSU0EgRGF0YSBTZWN1cml0eSwgSW5jLiBNRDUgTWVzc2FnZVxuICogRGlnZXN0IEFsZ29yaXRobSwgYXMgZGVmaW5lZCBpbiBSRkMgMTMyMS5cbiAqIFZlcnNpb24gMi4yIENvcHlyaWdodCAoQykgUGF1bCBKb2huc3RvbiAxOTk5IC0gMjAwOVxuICogT3RoZXIgY29udHJpYnV0b3JzOiBHcmVnIEhvbHQsIEFuZHJldyBLZXBlcnQsIFlkbmFyLCBMb3N0aW5ldFxuICogRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIEJTRCBMaWNlbnNlXG4gKiBTZWUgaHR0cDovL3BhamhvbWUub3JnLnVrL2NyeXB0L21kNSBmb3IgbW9yZSBpbmZvLlxuICovXG5mdW5jdGlvbiBtZDUoYnl0ZXMpIHtcbiAgaWYgKHR5cGVvZiBieXRlcyA9PSAnc3RyaW5nJykge1xuICAgIHZhciBtc2cgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoYnl0ZXMpKTsgLy8gVVRGOCBlc2NhcGVcblxuICAgIGJ5dGVzID0gbmV3IEFycmF5KG1zZy5sZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtc2cubGVuZ3RoOyBpKyspIHtcbiAgICAgIGJ5dGVzW2ldID0gbXNnLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1kNVRvSGV4RW5jb2RlZEFycmF5KHdvcmRzVG9NZDUoYnl0ZXNUb1dvcmRzKGJ5dGVzKSwgYnl0ZXMubGVuZ3RoICogOCkpO1xufVxuLypcbiAqIENvbnZlcnQgYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3JkcyB0byBhbiBhcnJheSBvZiBieXRlc1xuICovXG5cblxuZnVuY3Rpb24gbWQ1VG9IZXhFbmNvZGVkQXJyYXkoaW5wdXQpIHtcbiAgdmFyIGk7XG4gIHZhciB4O1xuICB2YXIgb3V0cHV0ID0gW107XG4gIHZhciBsZW5ndGgzMiA9IGlucHV0Lmxlbmd0aCAqIDMyO1xuICB2YXIgaGV4VGFiID0gJzAxMjM0NTY3ODlhYmNkZWYnO1xuICB2YXIgaGV4O1xuXG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGgzMjsgaSArPSA4KSB7XG4gICAgeCA9IGlucHV0W2kgPj4gNV0gPj4+IGkgJSAzMiAmIDB4ZmY7XG4gICAgaGV4ID0gcGFyc2VJbnQoaGV4VGFiLmNoYXJBdCh4ID4+PiA0ICYgMHgwZikgKyBoZXhUYWIuY2hhckF0KHggJiAweDBmKSwgMTYpO1xuICAgIG91dHB1dC5wdXNoKGhleCk7XG4gIH1cblxuICByZXR1cm4gb3V0cHV0O1xufVxuLypcbiAqIENhbGN1bGF0ZSB0aGUgTUQ1IG9mIGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHMsIGFuZCBhIGJpdCBsZW5ndGguXG4gKi9cblxuXG5mdW5jdGlvbiB3b3Jkc1RvTWQ1KHgsIGxlbikge1xuICAvKiBhcHBlbmQgcGFkZGluZyAqL1xuICB4W2xlbiA+PiA1XSB8PSAweDgwIDw8IGxlbiAlIDMyO1xuICB4WyhsZW4gKyA2NCA+Pj4gOSA8PCA0KSArIDE0XSA9IGxlbjtcbiAgdmFyIGk7XG4gIHZhciBvbGRhO1xuICB2YXIgb2xkYjtcbiAgdmFyIG9sZGM7XG4gIHZhciBvbGRkO1xuICB2YXIgYSA9IDE3MzI1ODQxOTM7XG4gIHZhciBiID0gLTI3MTczMzg3OTtcbiAgdmFyIGMgPSAtMTczMjU4NDE5NDtcbiAgdmFyIGQgPSAyNzE3MzM4Nzg7XG5cbiAgZm9yIChpID0gMDsgaSA8IHgubGVuZ3RoOyBpICs9IDE2KSB7XG4gICAgb2xkYSA9IGE7XG4gICAgb2xkYiA9IGI7XG4gICAgb2xkYyA9IGM7XG4gICAgb2xkZCA9IGQ7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaV0sIDcsIC02ODA4NzY5MzYpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyAxXSwgMTIsIC0zODk1NjQ1ODYpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAyXSwgMTcsIDYwNjEwNTgxOSk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDNdLCAyMiwgLTEwNDQ1MjUzMzApO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyA0XSwgNywgLTE3NjQxODg5Nyk7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDVdLCAxMiwgMTIwMDA4MDQyNik7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDZdLCAxNywgLTE0NzMyMzEzNDEpO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyA3XSwgMjIsIC00NTcwNTk4Myk7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDhdLCA3LCAxNzcwMDM1NDE2KTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgOV0sIDEyLCAtMTk1ODQxNDQxNyk7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDEwXSwgMTcsIC00MjA2Myk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDExXSwgMjIsIC0xOTkwNDA0MTYyKTtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgMTJdLCA3LCAxODA0NjAzNjgyKTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgMTNdLCAxMiwgLTQwMzQxMTAxKTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMTRdLCAxNywgLTE1MDIwMDIyOTApO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAxNV0sIDIyLCAxMjM2NTM1MzI5KTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgMV0sIDUsIC0xNjU3OTY1MTApO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyA2XSwgOSwgLTEwNjk1MDE2MzIpO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAxMV0sIDE0LCA2NDM3MTc3MTMpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2ldLCAyMCwgLTM3Mzg5NzMwMik7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDVdLCA1LCAtNzAxNTU4NjkxKTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMTBdLCA5LCAzODAxNjA4Myk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDE1XSwgMTQsIC02NjA0NzgzMzUpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyA0XSwgMjAsIC00MDU1Mzc4NDgpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyA5XSwgNSwgNTY4NDQ2NDM4KTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMTRdLCA5LCAtMTAxOTgwMzY5MCk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDNdLCAxNCwgLTE4NzM2Mzk2MSk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDhdLCAyMCwgMTE2MzUzMTUwMSk7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDEzXSwgNSwgLTE0NDQ2ODE0NjcpO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAyXSwgOSwgLTUxNDAzNzg0KTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgN10sIDE0LCAxNzM1MzI4NDczKTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgMTJdLCAyMCwgLTE5MjY2MDc3MzQpO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyA1XSwgNCwgLTM3ODU1OCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDhdLCAxMSwgLTIwMjI1NzQ0NjMpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAxMV0sIDE2LCAxODM5MDMwNTYyKTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMTRdLCAyMywgLTM1MzA5NTU2KTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgMV0sIDQsIC0xNTMwOTkyMDYwKTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgNF0sIDExLCAxMjcyODkzMzUzKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgN10sIDE2LCAtMTU1NDk3NjMyKTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMTBdLCAyMywgLTEwOTQ3MzA2NDApO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyAxM10sIDQsIDY4MTI3OTE3NCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaV0sIDExLCAtMzU4NTM3MjIyKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgM10sIDE2LCAtNzIyNTIxOTc5KTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgNl0sIDIzLCA3NjAyOTE4OSk7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDldLCA0LCAtNjQwMzY0NDg3KTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgMTJdLCAxMSwgLTQyMTgxNTgzNSk7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDE1XSwgMTYsIDUzMDc0MjUyMCk7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDJdLCAyMywgLTk5NTMzODY1MSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaV0sIDYsIC0xOTg2MzA4NDQpO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyA3XSwgMTAsIDExMjY4OTE0MTUpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAxNF0sIDE1LCAtMTQxNjM1NDkwNSk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDVdLCAyMSwgLTU3NDM0MDU1KTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgMTJdLCA2LCAxNzAwNDg1NTcxKTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgM10sIDEwLCAtMTg5NDk4NjYwNik7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDEwXSwgMTUsIC0xMDUxNTIzKTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgMV0sIDIxLCAtMjA1NDkyMjc5OSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDhdLCA2LCAxODczMzEzMzU5KTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgMTVdLCAxMCwgLTMwNjExNzQ0KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgNl0sIDE1LCAtMTU2MDE5ODM4MCk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDEzXSwgMjEsIDEzMDkxNTE2NDkpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyA0XSwgNiwgLTE0NTUyMzA3MCk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDExXSwgMTAsIC0xMTIwMjEwMzc5KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMl0sIDE1LCA3MTg3ODcyNTkpO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyA5XSwgMjEsIC0zNDM0ODU1NTEpO1xuICAgIGEgPSBzYWZlQWRkKGEsIG9sZGEpO1xuICAgIGIgPSBzYWZlQWRkKGIsIG9sZGIpO1xuICAgIGMgPSBzYWZlQWRkKGMsIG9sZGMpO1xuICAgIGQgPSBzYWZlQWRkKGQsIG9sZGQpO1xuICB9XG5cbiAgcmV0dXJuIFthLCBiLCBjLCBkXTtcbn1cbi8qXG4gKiBDb252ZXJ0IGFuIGFycmF5IGJ5dGVzIHRvIGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHNcbiAqIENoYXJhY3RlcnMgPjI1NSBoYXZlIHRoZWlyIGhpZ2gtYnl0ZSBzaWxlbnRseSBpZ25vcmVkLlxuICovXG5cblxuZnVuY3Rpb24gYnl0ZXNUb1dvcmRzKGlucHV0KSB7XG4gIHZhciBpO1xuICB2YXIgb3V0cHV0ID0gW107XG4gIG91dHB1dFsoaW5wdXQubGVuZ3RoID4+IDIpIC0gMV0gPSB1bmRlZmluZWQ7XG5cbiAgZm9yIChpID0gMDsgaSA8IG91dHB1dC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIG91dHB1dFtpXSA9IDA7XG4gIH1cblxuICB2YXIgbGVuZ3RoOCA9IGlucHV0Lmxlbmd0aCAqIDg7XG5cbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDg7IGkgKz0gOCkge1xuICAgIG91dHB1dFtpID4+IDVdIHw9IChpbnB1dFtpIC8gOF0gJiAweGZmKSA8PCBpICUgMzI7XG4gIH1cblxuICByZXR1cm4gb3V0cHV0O1xufVxuLypcbiAqIEFkZCBpbnRlZ2Vycywgd3JhcHBpbmcgYXQgMl4zMi4gVGhpcyB1c2VzIDE2LWJpdCBvcGVyYXRpb25zIGludGVybmFsbHlcbiAqIHRvIHdvcmsgYXJvdW5kIGJ1Z3MgaW4gc29tZSBKUyBpbnRlcnByZXRlcnMuXG4gKi9cblxuXG5mdW5jdGlvbiBzYWZlQWRkKHgsIHkpIHtcbiAgdmFyIGxzdyA9ICh4ICYgMHhmZmZmKSArICh5ICYgMHhmZmZmKTtcbiAgdmFyIG1zdyA9ICh4ID4+IDE2KSArICh5ID4+IDE2KSArIChsc3cgPj4gMTYpO1xuICByZXR1cm4gbXN3IDw8IDE2IHwgbHN3ICYgMHhmZmZmO1xufVxuLypcbiAqIEJpdHdpc2Ugcm90YXRlIGEgMzItYml0IG51bWJlciB0byB0aGUgbGVmdC5cbiAqL1xuXG5cbmZ1bmN0aW9uIGJpdFJvdGF0ZUxlZnQobnVtLCBjbnQpIHtcbiAgcmV0dXJuIG51bSA8PCBjbnQgfCBudW0gPj4+IDMyIC0gY250O1xufVxuLypcbiAqIFRoZXNlIGZ1bmN0aW9ucyBpbXBsZW1lbnQgdGhlIGZvdXIgYmFzaWMgb3BlcmF0aW9ucyB0aGUgYWxnb3JpdGhtIHVzZXMuXG4gKi9cblxuXG5mdW5jdGlvbiBtZDVjbW4ocSwgYSwgYiwgeCwgcywgdCkge1xuICByZXR1cm4gc2FmZUFkZChiaXRSb3RhdGVMZWZ0KHNhZmVBZGQoc2FmZUFkZChhLCBxKSwgc2FmZUFkZCh4LCB0KSksIHMpLCBiKTtcbn1cblxuZnVuY3Rpb24gbWQ1ZmYoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGIgJiBjIHwgfmIgJiBkLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZnVuY3Rpb24gbWQ1Z2coYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGIgJiBkIHwgYyAmIH5kLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZnVuY3Rpb24gbWQ1aGgoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGIgXiBjIF4gZCwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmZ1bmN0aW9uIG1kNWlpKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihjIF4gKGIgfCB+ZCksIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZDU7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG4vLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uIEFsc28sXG4vLyBmaW5kIHRoZSBjb21wbGV0ZSBpbXBsZW1lbnRhdGlvbiBvZiBjcnlwdG8gKG1zQ3J5cHRvKSBvbiBJRTExLlxudmFyIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKSB8fCB0eXBlb2YgbXNDcnlwdG8gIT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyA9PSAnZnVuY3Rpb24nICYmIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKG1zQ3J5cHRvKTtcbnZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiLy8gQWRhcHRlZCBmcm9tIENocmlzIFZlbmVzcycgU0hBMSBjb2RlIGF0XG4vLyBodHRwOi8vd3d3Lm1vdmFibGUtdHlwZS5jby51ay9zY3JpcHRzL3NoYTEuaHRtbFxuZnVuY3Rpb24gZihzLCB4LCB5LCB6KSB7XG4gIHN3aXRjaCAocykge1xuICAgIGNhc2UgMDpcbiAgICAgIHJldHVybiB4ICYgeSBeIH54ICYgejtcblxuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiB4IF4geSBeIHo7XG5cbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4geCAmIHkgXiB4ICYgeiBeIHkgJiB6O1xuXG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIHggXiB5IF4gejtcbiAgfVxufVxuXG5mdW5jdGlvbiBST1RMKHgsIG4pIHtcbiAgcmV0dXJuIHggPDwgbiB8IHggPj4+IDMyIC0gbjtcbn1cblxuZnVuY3Rpb24gc2hhMShieXRlcykge1xuICB2YXIgSyA9IFsweDVhODI3OTk5LCAweDZlZDllYmExLCAweDhmMWJiY2RjLCAweGNhNjJjMWQ2XTtcbiAgdmFyIEggPSBbMHg2NzQ1MjMwMSwgMHhlZmNkYWI4OSwgMHg5OGJhZGNmZSwgMHgxMDMyNTQ3NiwgMHhjM2QyZTFmMF07XG5cbiAgaWYgKHR5cGVvZiBieXRlcyA9PSAnc3RyaW5nJykge1xuICAgIHZhciBtc2cgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoYnl0ZXMpKTsgLy8gVVRGOCBlc2NhcGVcblxuICAgIGJ5dGVzID0gbmV3IEFycmF5KG1zZy5sZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtc2cubGVuZ3RoOyBpKyspIHtcbiAgICAgIGJ5dGVzW2ldID0gbXNnLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICB9XG5cbiAgYnl0ZXMucHVzaCgweDgwKTtcbiAgdmFyIGwgPSBieXRlcy5sZW5ndGggLyA0ICsgMjtcbiAgdmFyIE4gPSBNYXRoLmNlaWwobCAvIDE2KTtcbiAgdmFyIE0gPSBuZXcgQXJyYXkoTik7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBOOyBpKyspIHtcbiAgICBNW2ldID0gbmV3IEFycmF5KDE2KTtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgMTY7IGorKykge1xuICAgICAgTVtpXVtqXSA9IGJ5dGVzW2kgKiA2NCArIGogKiA0XSA8PCAyNCB8IGJ5dGVzW2kgKiA2NCArIGogKiA0ICsgMV0gPDwgMTYgfCBieXRlc1tpICogNjQgKyBqICogNCArIDJdIDw8IDggfCBieXRlc1tpICogNjQgKyBqICogNCArIDNdO1xuICAgIH1cbiAgfVxuXG4gIE1bTiAtIDFdWzE0XSA9IChieXRlcy5sZW5ndGggLSAxKSAqIDggLyBNYXRoLnBvdygyLCAzMik7XG4gIE1bTiAtIDFdWzE0XSA9IE1hdGguZmxvb3IoTVtOIC0gMV1bMTRdKTtcbiAgTVtOIC0gMV1bMTVdID0gKGJ5dGVzLmxlbmd0aCAtIDEpICogOCAmIDB4ZmZmZmZmZmY7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBOOyBpKyspIHtcbiAgICB2YXIgVyA9IG5ldyBBcnJheSg4MCk7XG5cbiAgICBmb3IgKHZhciB0ID0gMDsgdCA8IDE2OyB0KyspIHtcbiAgICAgIFdbdF0gPSBNW2ldW3RdO1xuICAgIH1cblxuICAgIGZvciAodmFyIHQgPSAxNjsgdCA8IDgwOyB0KyspIHtcbiAgICAgIFdbdF0gPSBST1RMKFdbdCAtIDNdIF4gV1t0IC0gOF0gXiBXW3QgLSAxNF0gXiBXW3QgLSAxNl0sIDEpO1xuICAgIH1cblxuICAgIHZhciBhID0gSFswXTtcbiAgICB2YXIgYiA9IEhbMV07XG4gICAgdmFyIGMgPSBIWzJdO1xuICAgIHZhciBkID0gSFszXTtcbiAgICB2YXIgZSA9IEhbNF07XG5cbiAgICBmb3IgKHZhciB0ID0gMDsgdCA8IDgwOyB0KyspIHtcbiAgICAgIHZhciBzID0gTWF0aC5mbG9vcih0IC8gMjApO1xuICAgICAgdmFyIFQgPSBST1RMKGEsIDUpICsgZihzLCBiLCBjLCBkKSArIGUgKyBLW3NdICsgV1t0XSA+Pj4gMDtcbiAgICAgIGUgPSBkO1xuICAgICAgZCA9IGM7XG4gICAgICBjID0gUk9UTChiLCAzMCkgPj4+IDA7XG4gICAgICBiID0gYTtcbiAgICAgIGEgPSBUO1xuICAgIH1cblxuICAgIEhbMF0gPSBIWzBdICsgYSA+Pj4gMDtcbiAgICBIWzFdID0gSFsxXSArIGIgPj4+IDA7XG4gICAgSFsyXSA9IEhbMl0gKyBjID4+PiAwO1xuICAgIEhbM10gPSBIWzNdICsgZCA+Pj4gMDtcbiAgICBIWzRdID0gSFs0XSArIGUgPj4+IDA7XG4gIH1cblxuICByZXR1cm4gW0hbMF0gPj4gMjQgJiAweGZmLCBIWzBdID4+IDE2ICYgMHhmZiwgSFswXSA+PiA4ICYgMHhmZiwgSFswXSAmIDB4ZmYsIEhbMV0gPj4gMjQgJiAweGZmLCBIWzFdID4+IDE2ICYgMHhmZiwgSFsxXSA+PiA4ICYgMHhmZiwgSFsxXSAmIDB4ZmYsIEhbMl0gPj4gMjQgJiAweGZmLCBIWzJdID4+IDE2ICYgMHhmZiwgSFsyXSA+PiA4ICYgMHhmZiwgSFsyXSAmIDB4ZmYsIEhbM10gPj4gMjQgJiAweGZmLCBIWzNdID4+IDE2ICYgMHhmZiwgSFszXSA+PiA4ICYgMHhmZiwgSFszXSAmIDB4ZmYsIEhbNF0gPj4gMjQgJiAweGZmLCBIWzRdID4+IDE2ICYgMHhmZiwgSFs0XSA+PiA4ICYgMHhmZiwgSFs0XSAmIDB4ZmZdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzaGExOyIsImltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IGJ5dGVzVG9VdWlkIGZyb20gJy4vYnl0ZXNUb1V1aWQuanMnOyAvLyAqKmB2MSgpYCAtIEdlbmVyYXRlIHRpbWUtYmFzZWQgVVVJRCoqXG4vL1xuLy8gSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL0xpb3NLL1VVSUQuanNcbi8vIGFuZCBodHRwOi8vZG9jcy5weXRob24ub3JnL2xpYnJhcnkvdXVpZC5odG1sXG5cbnZhciBfbm9kZUlkO1xuXG52YXIgX2Nsb2Nrc2VxOyAvLyBQcmV2aW91cyB1dWlkIGNyZWF0aW9uIHRpbWVcblxuXG52YXIgX2xhc3RNU2VjcyA9IDA7XG52YXIgX2xhc3ROU2VjcyA9IDA7IC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQgZm9yIEFQSSBkZXRhaWxzXG5cbmZ1bmN0aW9uIHYxKG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuICB2YXIgYiA9IGJ1ZiB8fCBbXTtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBub2RlID0gb3B0aW9ucy5ub2RlIHx8IF9ub2RlSWQ7XG4gIHZhciBjbG9ja3NlcSA9IG9wdGlvbnMuY2xvY2tzZXEgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuY2xvY2tzZXEgOiBfY2xvY2tzZXE7IC8vIG5vZGUgYW5kIGNsb2Nrc2VxIG5lZWQgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gcmFuZG9tIHZhbHVlcyBpZiB0aGV5J3JlIG5vdFxuICAvLyBzcGVjaWZpZWQuICBXZSBkbyB0aGlzIGxhemlseSB0byBtaW5pbWl6ZSBpc3N1ZXMgcmVsYXRlZCB0byBpbnN1ZmZpY2llbnRcbiAgLy8gc3lzdGVtIGVudHJvcHkuICBTZWUgIzE4OVxuXG4gIGlmIChub2RlID09IG51bGwgfHwgY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgIHZhciBzZWVkQnl0ZXMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpO1xuXG4gICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuNSwgY3JlYXRlIGFuZCA0OC1iaXQgbm9kZSBpZCwgKDQ3IHJhbmRvbSBiaXRzICsgbXVsdGljYXN0IGJpdCA9IDEpXG4gICAgICBub2RlID0gX25vZGVJZCA9IFtzZWVkQnl0ZXNbMF0gfCAweDAxLCBzZWVkQnl0ZXNbMV0sIHNlZWRCeXRlc1syXSwgc2VlZEJ5dGVzWzNdLCBzZWVkQnl0ZXNbNF0sIHNlZWRCeXRlc1s1XV07XG4gICAgfVxuXG4gICAgaWYgKGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjIuMiwgcmFuZG9taXplICgxNCBiaXQpIGNsb2Nrc2VxXG4gICAgICBjbG9ja3NlcSA9IF9jbG9ja3NlcSA9IChzZWVkQnl0ZXNbNl0gPDwgOCB8IHNlZWRCeXRlc1s3XSkgJiAweDNmZmY7XG4gICAgfVxuICB9IC8vIFVVSUQgdGltZXN0YW1wcyBhcmUgMTAwIG5hbm8tc2Vjb25kIHVuaXRzIHNpbmNlIHRoZSBHcmVnb3JpYW4gZXBvY2gsXG4gIC8vICgxNTgyLTEwLTE1IDAwOjAwKS4gIEpTTnVtYmVycyBhcmVuJ3QgcHJlY2lzZSBlbm91Z2ggZm9yIHRoaXMsIHNvXG4gIC8vIHRpbWUgaXMgaGFuZGxlZCBpbnRlcm5hbGx5IGFzICdtc2VjcycgKGludGVnZXIgbWlsbGlzZWNvbmRzKSBhbmQgJ25zZWNzJ1xuICAvLyAoMTAwLW5hbm9zZWNvbmRzIG9mZnNldCBmcm9tIG1zZWNzKSBzaW5jZSB1bml4IGVwb2NoLCAxOTcwLTAxLTAxIDAwOjAwLlxuXG5cbiAgdmFyIG1zZWNzID0gb3B0aW9ucy5tc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5tc2VjcyA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpOyAvLyBQZXIgNC4yLjEuMiwgdXNlIGNvdW50IG9mIHV1aWQncyBnZW5lcmF0ZWQgZHVyaW5nIHRoZSBjdXJyZW50IGNsb2NrXG4gIC8vIGN5Y2xlIHRvIHNpbXVsYXRlIGhpZ2hlciByZXNvbHV0aW9uIGNsb2NrXG5cbiAgdmFyIG5zZWNzID0gb3B0aW9ucy5uc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uc2VjcyA6IF9sYXN0TlNlY3MgKyAxOyAvLyBUaW1lIHNpbmNlIGxhc3QgdXVpZCBjcmVhdGlvbiAoaW4gbXNlY3MpXG5cbiAgdmFyIGR0ID0gbXNlY3MgLSBfbGFzdE1TZWNzICsgKG5zZWNzIC0gX2xhc3ROU2VjcykgLyAxMDAwMDsgLy8gUGVyIDQuMi4xLjIsIEJ1bXAgY2xvY2tzZXEgb24gY2xvY2sgcmVncmVzc2lvblxuXG4gIGlmIChkdCA8IDAgJiYgb3B0aW9ucy5jbG9ja3NlcSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2xvY2tzZXEgPSBjbG9ja3NlcSArIDEgJiAweDNmZmY7XG4gIH0gLy8gUmVzZXQgbnNlY3MgaWYgY2xvY2sgcmVncmVzc2VzIChuZXcgY2xvY2tzZXEpIG9yIHdlJ3ZlIG1vdmVkIG9udG8gYSBuZXdcbiAgLy8gdGltZSBpbnRlcnZhbFxuXG5cbiAgaWYgKChkdCA8IDAgfHwgbXNlY3MgPiBfbGFzdE1TZWNzKSAmJiBvcHRpb25zLm5zZWNzID09PSB1bmRlZmluZWQpIHtcbiAgICBuc2VjcyA9IDA7XG4gIH0gLy8gUGVyIDQuMi4xLjIgVGhyb3cgZXJyb3IgaWYgdG9vIG1hbnkgdXVpZHMgYXJlIHJlcXVlc3RlZFxuXG5cbiAgaWYgKG5zZWNzID49IDEwMDAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwidXVpZC52MSgpOiBDYW4ndCBjcmVhdGUgbW9yZSB0aGFuIDEwTSB1dWlkcy9zZWNcIik7XG4gIH1cblxuICBfbGFzdE1TZWNzID0gbXNlY3M7XG4gIF9sYXN0TlNlY3MgPSBuc2VjcztcbiAgX2Nsb2Nrc2VxID0gY2xvY2tzZXE7IC8vIFBlciA0LjEuNCAtIENvbnZlcnQgZnJvbSB1bml4IGVwb2NoIHRvIEdyZWdvcmlhbiBlcG9jaFxuXG4gIG1zZWNzICs9IDEyMjE5MjkyODAwMDAwOyAvLyBgdGltZV9sb3dgXG5cbiAgdmFyIHRsID0gKChtc2VjcyAmIDB4ZmZmZmZmZikgKiAxMDAwMCArIG5zZWNzKSAlIDB4MTAwMDAwMDAwO1xuICBiW2krK10gPSB0bCA+Pj4gMjQgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gMTYgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsICYgMHhmZjsgLy8gYHRpbWVfbWlkYFxuXG4gIHZhciB0bWggPSBtc2VjcyAvIDB4MTAwMDAwMDAwICogMTAwMDAgJiAweGZmZmZmZmY7XG4gIGJbaSsrXSA9IHRtaCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRtaCAmIDB4ZmY7IC8vIGB0aW1lX2hpZ2hfYW5kX3ZlcnNpb25gXG5cbiAgYltpKytdID0gdG1oID4+PiAyNCAmIDB4ZiB8IDB4MTA7IC8vIGluY2x1ZGUgdmVyc2lvblxuXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMTYgJiAweGZmOyAvLyBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGAgKFBlciA0LjIuMiAtIGluY2x1ZGUgdmFyaWFudClcblxuICBiW2krK10gPSBjbG9ja3NlcSA+Pj4gOCB8IDB4ODA7IC8vIGBjbG9ja19zZXFfbG93YFxuXG4gIGJbaSsrXSA9IGNsb2Nrc2VxICYgMHhmZjsgLy8gYG5vZGVgXG5cbiAgZm9yICh2YXIgbiA9IDA7IG4gPCA2OyArK24pIHtcbiAgICBiW2kgKyBuXSA9IG5vZGVbbl07XG4gIH1cblxuICByZXR1cm4gYnVmID8gYnVmIDogYnl0ZXNUb1V1aWQoYik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHYxOyIsImltcG9ydCB2MzUgZnJvbSAnLi92MzUuanMnO1xuaW1wb3J0IG1kNSBmcm9tICcuL21kNS5qcyc7XG52YXIgdjMgPSB2MzUoJ3YzJywgMHgzMCwgbWQ1KTtcbmV4cG9ydCBkZWZhdWx0IHYzOyIsImltcG9ydCBieXRlc1RvVXVpZCBmcm9tICcuL2J5dGVzVG9VdWlkLmpzJztcblxuZnVuY3Rpb24gdXVpZFRvQnl0ZXModXVpZCkge1xuICAvLyBOb3RlOiBXZSBhc3N1bWUgd2UncmUgYmVpbmcgcGFzc2VkIGEgdmFsaWQgdXVpZCBzdHJpbmdcbiAgdmFyIGJ5dGVzID0gW107XG4gIHV1aWQucmVwbGFjZSgvW2EtZkEtRjAtOV17Mn0vZywgZnVuY3Rpb24gKGhleCkge1xuICAgIGJ5dGVzLnB1c2gocGFyc2VJbnQoaGV4LCAxNikpO1xuICB9KTtcbiAgcmV0dXJuIGJ5dGVzO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdUb0J5dGVzKHN0cikge1xuICBzdHIgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoc3RyKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgdmFyIGJ5dGVzID0gbmV3IEFycmF5KHN0ci5sZW5ndGgpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgYnl0ZXNbaV0gPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgfVxuXG4gIHJldHVybiBieXRlcztcbn1cblxuZXhwb3J0IHZhciBETlMgPSAnNmJhN2I4MTAtOWRhZC0xMWQxLTgwYjQtMDBjMDRmZDQzMGM4JztcbmV4cG9ydCB2YXIgVVJMID0gJzZiYTdiODExLTlkYWQtMTFkMS04MGI0LTAwYzA0ZmQ0MzBjOCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobmFtZSwgdmVyc2lvbiwgaGFzaGZ1bmMpIHtcbiAgdmFyIGdlbmVyYXRlVVVJRCA9IGZ1bmN0aW9uIGdlbmVyYXRlVVVJRCh2YWx1ZSwgbmFtZXNwYWNlLCBidWYsIG9mZnNldCkge1xuICAgIHZhciBvZmYgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykgdmFsdWUgPSBzdHJpbmdUb0J5dGVzKHZhbHVlKTtcbiAgICBpZiAodHlwZW9mIG5hbWVzcGFjZSA9PSAnc3RyaW5nJykgbmFtZXNwYWNlID0gdXVpZFRvQnl0ZXMobmFtZXNwYWNlKTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB0aHJvdyBUeXBlRXJyb3IoJ3ZhbHVlIG11c3QgYmUgYW4gYXJyYXkgb2YgYnl0ZXMnKTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobmFtZXNwYWNlKSB8fCBuYW1lc3BhY2UubGVuZ3RoICE9PSAxNikgdGhyb3cgVHlwZUVycm9yKCduYW1lc3BhY2UgbXVzdCBiZSB1dWlkIHN0cmluZyBvciBhbiBBcnJheSBvZiAxNiBieXRlIHZhbHVlcycpOyAvLyBQZXIgNC4zXG5cbiAgICB2YXIgYnl0ZXMgPSBoYXNoZnVuYyhuYW1lc3BhY2UuY29uY2F0KHZhbHVlKSk7XG4gICAgYnl0ZXNbNl0gPSBieXRlc1s2XSAmIDB4MGYgfCB2ZXJzaW9uO1xuICAgIGJ5dGVzWzhdID0gYnl0ZXNbOF0gJiAweDNmIHwgMHg4MDtcblxuICAgIGlmIChidWYpIHtcbiAgICAgIGZvciAodmFyIGlkeCA9IDA7IGlkeCA8IDE2OyArK2lkeCkge1xuICAgICAgICBidWZbb2ZmICsgaWR4XSA9IGJ5dGVzW2lkeF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZiB8fCBieXRlc1RvVXVpZChieXRlcyk7XG4gIH07IC8vIEZ1bmN0aW9uI25hbWUgaXMgbm90IHNldHRhYmxlIG9uIHNvbWUgcGxhdGZvcm1zICgjMjcwKVxuXG5cbiAgdHJ5IHtcbiAgICBnZW5lcmF0ZVVVSUQubmFtZSA9IG5hbWU7XG4gIH0gY2F0Y2ggKGVycikge30gLy8gRm9yIENvbW1vbkpTIGRlZmF1bHQgZXhwb3J0IHN1cHBvcnRcblxuXG4gIGdlbmVyYXRlVVVJRC5ETlMgPSBETlM7XG4gIGdlbmVyYXRlVVVJRC5VUkwgPSBVUkw7XG4gIHJldHVybiBnZW5lcmF0ZVVVSUQ7XG59IiwiaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgYnl0ZXNUb1V1aWQgZnJvbSAnLi9ieXRlc1RvVXVpZC5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PSAnc3RyaW5nJykge1xuICAgIGJ1ZiA9IG9wdGlvbnMgPT09ICdiaW5hcnknID8gbmV3IEFycmF5KDE2KSA6IG51bGw7XG4gICAgb3B0aW9ucyA9IG51bGw7XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCAxNjsgKytpaSkge1xuICAgICAgYnVmW2kgKyBpaV0gPSBybmRzW2lpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnVmIHx8IGJ5dGVzVG9VdWlkKHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgdjM1IGZyb20gJy4vdjM1LmpzJztcbmltcG9ydCBzaGExIGZyb20gJy4vc2hhMS5qcyc7XG52YXIgdjUgPSB2MzUoJ3Y1JywgMHg1MCwgc2hhMSk7XG5leHBvcnQgZGVmYXVsdCB2NTsiLCIvKlxuICogQEF1dGhvcjogUm9kcmlnbyBTb2FyZXNcbiAqIEBEYXRlOiAyMDE5LTA3LTMxIDIwOjM2OjIzXG4gKiBATGFzdCBNb2RpZmllZCBieTogUm9kcmlnbyBTb2FyZXNcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMjAtMDUtMTUgMjM6NTg6NTBcbiAqL1xuXG4vKipcbiAqIFJlbmFtZSBkYXRhXG4gKlxuICogQGV4cG9ydFxuICogQHBhcmFtIHtPYmplY3R9IGl0ZW1cbiAqIEBwYXJhbSB7TnVtYmVyfSBzZWxlY3Rpb25Db3VudFxuICogQHBhcmFtIHtTdHJpbmd9IGlucHV0TmFtZVxuICogQHBhcmFtIHtOdW1iZXJ9IHN0YXJ0RnJvbVxuICogQHBhcmFtIHtTdHJpbmd9IHBhZ2VOYW1lXG4gKiBAcmV0dXJucyBTdHJ1Y3R1cmVkIG9iamVjdCBkYXRhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW5hbWVEYXRhKFxuICBpdGVtLFxuICBzZWxlY3Rpb25Db3VudCxcbiAgaW5wdXROYW1lLFxuICBzdGFydHNGcm9tLFxuICBwYWdlTmFtZVxuKSB7XG4gIHJldHVybiB7XG4gICAgbGF5ZXJOYW1lOiBpdGVtLmxheWVyTmFtZSxcbiAgICBjdXJySWR4OiBpdGVtLmlkeCxcbiAgICB3aWR0aDogaXRlbS53aWR0aCxcbiAgICBoZWlnaHQ6IGl0ZW0uaGVpZ2h0LFxuICAgIHNlbGVjdGlvbkNvdW50LFxuICAgIGlucHV0TmFtZSxcbiAgICBzdGFydHNGcm9tOiBOdW1iZXIoc3RhcnRzRnJvbSksXG4gICAgcGFnZU5hbWUsXG4gICAgcGFyZW50TmFtZTogaXRlbS5wYXJlbnROYW1lLFxuICAgIHN5bWJvbE5hbWU6IGl0ZW0uc3ltYm9sTmFtZSxcbiAgICBsYXllclN0eWxlOiBpdGVtLmxheWVyU3R5bGUsXG4gICAgY2hpbGRMYXllcjogaXRlbS5jaGlsZExheWVyLFxuICB9XG59XG5cbi8qKlxuICogRmluZCBhbmQgcmVwbGFjZSBkYXRhXG4gKlxuICogQGV4cG9ydFxuICogQHBhcmFtIHtPYmplY3R9IGl0ZW1cbiAqIEBwYXJhbSB7U3RyaW5nfSBmaW5kVGV4dFxuICogQHBhcmFtIHtTdHJpbmd9IHJlcGxhY2VXaXRoXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGNhc2VTZW5zaXRpdmVcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kUmVwbGFjZURhdGEoaXRlbSwgZmluZFRleHQsIHJlcGxhY2VXaXRoLCBjYXNlU2Vuc2l0aXZlKSB7XG4gIHJldHVybiB7XG4gICAgbGF5ZXJOYW1lOiBpdGVtLmxheWVyTmFtZSxcbiAgICBjdXJySWR4OiBpdGVtLmlkeCxcbiAgICBmaW5kVGV4dCxcbiAgICByZXBsYWNlV2l0aCxcbiAgICBjYXNlU2Vuc2l0aXZlLFxuICB9XG59XG4iLCIvKlxuICogQEF1dGhvcjogUm9kcmlnbyBTb2FyZXNcbiAqIEBEYXRlOiAyMDIwLTA1LTE2IDAyOjAwOjQ4XG4gKiBATGFzdCBNb2RpZmllZCBieTogUm9kcmlnbyBTb2FyZXNcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMjAtMDUtMjIgMDA6NTI6MjFcbiAqL1xuXG5pbXBvcnQgeyB2MyBhcyB1dWlkdjMgfSBmcm9tICd1dWlkJ1xuaW1wb3J0ICogYXMgbWFuaWZlc3QgZnJvbSAnLi4vLi4vbWFuaWZlc3QuanNvbidcbmltcG9ydCAqIGFzIHBrZyBmcm9tICcuLi8uLi9wYWNrYWdlLmpzb24nXG5pbXBvcnQgeyBodG1sIGFzIGlvIH0gZnJvbSAnLi9pby5qcydcbmNvbnN0IGtVVUlES2V5ID0gJ2dvb2dsZS5hbmFseXRpY3MudXVpZCdcbmNvbnN0IGtBbmFseXRpY3NFbmFibGVkID0gJ2FuYWx5dGljcy5lbmFibGVkJ1xuY29uc3Qga0FuYWx5dGljc0ZpcnN0UnVuID0gJ2FuYWx5dGljcy5maXJzdC5ydW4nXG5jb25zdCBVVURJRF9rZXkgPSAnY2Y1NjRlZTctOGFhZS00ZmYyLTkxZWYtM2Y2MmIxNjU2YjEwJ1xuY29uc3Qgc291cmNlID0gJ0ZpZ21hJ1xuY29uc3QgdHJhY2tpbmdJZCA9ICdVQS0xMDQxODQ0NTktMidcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVVSUQoKSB7XG4gIGxldCB1dWlkID0gYXdhaXQgZmlnbWEuY2xpZW50U3RvcmFnZS5nZXRBc3luYyhrVVVJREtleSlcbiAgaWYgKCF1dWlkKSB7XG4gICAgdXVpZCA9IHV1aWR2MyhTdHJpbmcoRGF0ZS5ub3coKSksIFVVRElEX2tleSlcbiAgfVxuXG4gIGF3YWl0IGZpZ21hLmNsaWVudFN0b3JhZ2Uuc2V0QXN5bmMoa1VVSURLZXksIHV1aWQpXG5cbiAgcmV0dXJuIHV1aWRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFuYWx5dGljc0VuYWJsZWQoKSB7XG4gIGxldCBhZSA9IGF3YWl0IGZpZ21hLmNsaWVudFN0b3JhZ2UuZ2V0QXN5bmMoa0FuYWx5dGljc0VuYWJsZWQpXG4gIGlmIChhZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYXdhaXQgc2V0QW5hbHl0aWNzRW5hYmxlZCh0cnVlKVxuICAgIGFlID0gdHJ1ZVxuICB9XG4gIHJldHVybiBhZVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2V0QW5hbHl0aWNzRW5hYmxlZCh2YWx1ZSkge1xuICBhd2FpdCBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKGtBbmFseXRpY3NFbmFibGVkLCB2YWx1ZSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFuYWx5dGljc0ZpcnN0UnVuKCkge1xuICBsZXQgZnIgPSBhd2FpdCBmaWdtYS5jbGllbnRTdG9yYWdlLmdldEFzeW5jKGtBbmFseXRpY3NGaXJzdFJ1bilcbiAgaWYgKGZyID09PSB1bmRlZmluZWQpIGZyID0gdHJ1ZVxuICBpZiAoZnIpIHtcbiAgICBhd2FpdCBzZXRBbmFseXRpY3NGaXJzdFJ1bigpXG4gIH1cblxuICByZXR1cm4gZnJcbn1cblxuYXN5bmMgZnVuY3Rpb24gc2V0QW5hbHl0aWNzRmlyc3RSdW4oKSB7XG4gIGF3YWl0IGZpZ21hLmNsaWVudFN0b3JhZ2Uuc2V0QXN5bmMoa0FuYWx5dGljc0ZpcnN0UnVuLCBmYWxzZSlcbn1cblxuZnVuY3Rpb24ganNvblRvUXVlcnlTdHJpbmcoanNvbikge1xuICByZXR1cm4gT2JqZWN0LmtleXMoanNvbilcbiAgICAubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChqc29uW2tleV0pXG4gICAgfSlcbiAgICAuam9pbignJicpXG59XG5cbmZ1bmN0aW9uIG1ha2VSZXF1ZXN0KHVybCwgb3B0aW9ucykge1xuICBpZiAoIXVybCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcbiAgcmVxLm9wZW4oJ0dFVCcsIHVybClcbiAgcmVxLnNlbmQoKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJhY2soaGl0VHlwZSwgcHJvcHMsIG9wdGlvbnMpIHtcbiAgLy8gY29uc3QgaXNBbmFseXRpY3NFbmFibGVkID0gYXdhaXQgYW5hbHl0aWNzRW5hYmxlZCgpXG4gIGNvbnN0IGlzQW5hbHl0aWNzRW5hYmxlZCA9IHRydWVcblxuICBpZiAob3B0aW9ucyAmJiAhb3B0aW9ucy5hbmFseXRpY3NFbmFibGVkKSB7XG4gICAgY29uc29sZS5sb2coJ25vdCBlbmFibGVkJylcblxuICAgIC8vIHRoZSB1c2VyIGRpZG4ndCBlbmFibGUgc2hhcmluZyBhbmFseXRpY3NcbiAgICByZXR1cm4gXCJ0aGUgdXNlciBkaWRuJ3QgZW5hYmxlIHNoYXJpbmcgYW5hbHl0aWNzXCJcbiAgfVxuXG4gIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgdjogMSxcbiAgICB0aWQ6IHRyYWNraW5nSWQsXG4gICAgZHM6IHNvdXJjZSxcbiAgICB0OiBoaXRUeXBlLFxuICAgIGFuOiBtYW5pZmVzdC5uYW1lLFxuICAgIGFpZDogJ2NvbS5yZW5hbWVpdC5kZXNpZ24nLFxuICAgIGF2OiBwa2cudmVyc2lvbixcbiAgfVxuXG4gIGlmIChwcm9wcykge1xuICAgIE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHBheWxvYWRba2V5XSA9IHByb3BzW2tleV1cbiAgICB9KVxuICB9XG5cbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vd3d3Lmdvb2dsZS1hbmFseXRpY3MuY29tLyR7XG4gICAgb3B0aW9ucyAmJiBvcHRpb25zLmRlYnVnID8gJ2RlYnVnLycgOiAnJ1xuICB9Y29sbGVjdD8ke2pzb25Ub1F1ZXJ5U3RyaW5nKHBheWxvYWQpfSZ6PSR7RGF0ZS5ub3coKX1gXG5cbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5kZWJ1Zykge1xuICAgIGNvbnNvbGUubG9nKCdERUJVRzogQW5hbHl0aWNzJylcbiAgICBjb25zb2xlLmxvZyhwYXlsb2FkKVxuICAgIGNvbnNvbGUubG9nKGB1cmw6ICR7dXJsfWApXG4gIH1cblxuICByZXR1cm4gbWFrZVJlcXVlc3QodXJsLCBvcHRpb25zKVxufVxuIiwiLypcbiAqIEBBdXRob3I6IFJvZHJpZ28gU29hcmVzXG4gKiBARGF0ZTogMjAyMC0wNS0xNSAxMTowMjoyMlxuICogQExhc3QgTW9kaWZpZWQgYnk6IFJvZHJpZ28gU29hcmVzXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDIwLTA1LTE1IDIzOjU4OjI2XG4gKi9cblxuLyoqXG4gKiBDaGVjayB3ZWF0aGVyIG9yIG5vIGEgbGF5ZXIgaGFzIHN0eWxlc1xuICpcbiAqIEBleHBvcnRcbiAqIEBwYXJhbSB7Kn0gaXRlbVxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNTdHlsZXMoaXRlbTogYW55KSB7XG4gIGlmIChpdGVtLnRleHRTdHlsZUlkICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gaXRlbS50ZXh0U3R5bGVJZCAhPT0gJydcbiAgfSBlbHNlIGlmIChpdGVtLmZpbGxTdHlsZUlkICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gaXRlbS5maWxsU3R5bGVJZCAhPT0gJydcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG4vKipcbiAqIEdldCBsYXllciBTdHlsZSBpZFxuICpcbiAqIEBwYXJhbSB7Kn0gaXRlbVxuICogQHJldHVybnNcbiAqL1xuZnVuY3Rpb24gc3R5bGVJZChpdGVtOiBhbnkpIHtcbiAgaWYgKGl0ZW0uY29uc3RydWN0b3IubmFtZSA9PT0gJ1RleHROb2RlJykge1xuICAgIHJldHVybiBpdGVtLnRleHRTdHlsZUlkXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGl0ZW0uZmlsbFN0eWxlSWRcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3R5bGUoaXRlbTogYW55KSB7XG4gIGxldCBuYW1lID0gJydcbiAgaWYgKGhhc1N0eWxlcyhpdGVtKSkge1xuICAgIGNvbnN0IHN0eWxlID0gZmlnbWEuZ2V0U3R5bGVCeUlkKHN0eWxlSWQoaXRlbSkpXG4gICAgbmFtZSA9IHN0eWxlICE9PSBudWxsID8gc3R5bGUubmFtZSA6ICcnXG4gIH1cblxuICByZXR1cm4gbmFtZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzU3ltYm9scyhpdGVtOiBhbnkpIHtcbiAgcmV0dXJuIGl0ZW0uY29uc3RydWN0b3IubmFtZSA9PT0gJ0luc3RhbmNlTm9kZSdcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN5bWJvbE5hbWUoaXRlbTogYW55KSB7XG4gIGxldCBuYW1lID0gJydcbiAgaWYgKGhhc1N5bWJvbHMoaXRlbSkpIHtcbiAgICBuYW1lID0gaXRlbS5tYXN0ZXJDb21wb25lbnQubmFtZVxuICB9XG5cbiAgcmV0dXJuIG5hbWVcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBoYXMgY2hpbGQgbGF5ZXJcbiAqXG4gKiBAZXhwb3J0XG4gKiBAcGFyYW0geyp9IGl0ZW1cbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFzQ2hpbGRMYXllcihpdGVtOiBhbnkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRlbS5jaGlsZHJlbiAhPT0gdW5kZWZpbmVkICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMFxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbi8qKlxuICogR2V0IGZpcnN0IGNoaWxkIGxheWVyIGFuZCByZXR1cm4gaXRzIG5hbWVcbiAqXG4gKiBAZXhwb3J0XG4gKiBAcGFyYW0geyp9IGl0ZW1cbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGlsZExheWVyKGl0ZW06IGFueSkge1xuICBsZXQgbmFtZSA9ICcnXG5cbiAgaWYgKGhhc0NoaWxkTGF5ZXIoaXRlbSkpIHtcbiAgICBjb25zdCBpZHggPSBpdGVtLmNoaWxkcmVuLmxlbmd0aCAtIDFcbiAgICBuYW1lID0gU3RyaW5nKGl0ZW0uY2hpbGRyZW5baWR4XS5uYW1lKVxuICB9XG5cbiAgcmV0dXJuIG5hbWVcbn1cbiIsImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gXCJldmVudHNcIlxuXG5mdW5jdGlvbiBjcmVhdGVJbnRlcmZhY2UocmVuZGVyZXIpIHtcbiAgY29uc3QgZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIGNvbnN0IHJlY2VpdmUgPSByZXN1bHQgPT4ge1xuICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LmV2ZW50KSB7XG4gICAgICBlbWl0dGVyLmVtaXQocmVzdWx0LmV2ZW50LCByZXN1bHQuZGF0YSlcbiAgICB9XG4gIH1cblxuICBpZiAocmVuZGVyZXIpIHtcbiAgICB3aW5kb3cub25tZXNzYWdlID0gZXYgPT4gcmVjZWl2ZShldi5kYXRhLnBsdWdpbk1lc3NhZ2UpXG4gIH0gZWxzZSB7XG4gICAgZmlnbWEudWkub25tZXNzYWdlID0gZGF0YSA9PiByZWNlaXZlKGRhdGEpXG4gIH1cblxuICBlbWl0dGVyLnNlbmQgPSBmdW5jdGlvbihldmVudCwgZGF0YSkge1xuICAgIGlmICh0eXBlb2YgZXZlbnQgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIGZpcnN0IGFyZ3VtZW50IHRvIGJlIGFuIGV2ZW50IG5hbWUgc3RyaW5nXCIpXG4gICAgfVxuICAgIGNvbnN0IHBvc3REYXRhID0ge1xuICAgICAgZXZlbnQsXG4gICAgICBkYXRhXG4gICAgfVxuICAgIGlmIChyZW5kZXJlcikge1xuICAgICAgd2luZG93LnBhcmVudC5wb3N0TWVzc2FnZSh7IHBsdWdpbk1lc3NhZ2U6IHBvc3REYXRhIH0sIFwiKlwiKVxuICAgIH0gZWxzZSB7XG4gICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShwb3N0RGF0YSlcbiAgICB9XG4gIH1cblxuICBlbWl0dGVyLmFzeW5jID0gZnVuY3Rpb24oZXYpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLm9uY2UoZXYsIHJlc29sdmUpXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBlbWl0dGVyXG59XG5cbmNvbnN0IGlzUmVuZGVyZXIgPSB0eXBlb2YgZmlnbWEgPT09IFwidW5kZWZpbmVkXCJcbmV4cG9ydCBjb25zdCBodG1sID0gaXNSZW5kZXJlciA/IGNyZWF0ZUludGVyZmFjZSh0cnVlKSA6IHVuZGVmaW5lZFxuZXhwb3J0IGNvbnN0IHNjcmlwdCA9IGlzUmVuZGVyZXIgPyB1bmRlZmluZWQgOiBjcmVhdGVJbnRlcmZhY2UoKVxuIiwiLypcbiAqIEBBdXRob3I6IFJvZHJpZ28gU29hcmVzXG4gKiBARGF0ZTogMjAxOS0wNy0zMSAxOTowMTo0NVxuICogQExhc3QgTW9kaWZpZWQgYnk6IFJvZHJpZ28gU29hcmVzXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDIwLTA1LTIyIDEzOjMxOjUxXG4gKi9cblxuaW1wb3J0IHtcbiAgZ2V0U3R5bGUsXG4gIGdldFN5bWJvbE5hbWUsXG4gIGhhc1N0eWxlcyxcbiAgaGFzU3ltYm9scyxcbiAgaGFzQ2hpbGRMYXllcixcbiAgZ2V0Q2hpbGRMYXllcixcbn0gZnJvbSAnLi9MaWIvUmVuYW1lSGVscGVyJ1xuXG5leHBvcnQgZW51bSBXaGVyZVRvIHtcbiAgUmVuYW1lTGF5ZXJzID0gJ3JlbmFtZUxheWVycycsXG4gIEZpbmRSZXBsYWNlID0gJ2ZpbmRSZXBsYWNlJyxcbiAgU2V0dGluZ3MgPSAnc2V0dGluZ3MnLFxuICBOb1NlbGVjdGlvbiA9ICdub1NlbGVjdGlvbicsXG4gIERvbmF0ZSA9ICdkb25hdGUnLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzU2VsZWN0aW9uKGRhdGE6IGFueSkge1xuICByZXR1cm4gZGF0YS5zZWxlY3Rpb24ubGVuZ3RoID4gMFxufVxuXG5mdW5jdGlvbiBsYXllck9iamVjdChpdGVtOiBhbnksIGluZGV4KSB7XG4gIHJldHVybiB7XG4gICAgbGF5ZXJOYW1lOiBpdGVtLm5hbWUsXG4gICAgaWR4OiBpbmRleCxcbiAgICB3aWR0aDogaXRlbS53aWR0aCxcbiAgICBoZWlnaHQ6IGl0ZW0uaGVpZ2h0LFxuICAgIHBhcmVudE5hbWU6IGl0ZW0ucGFyZW50Lm5hbWUsXG4gICAgbGF5ZXJTdHlsZTogZ2V0U3R5bGUoaXRlbSksXG4gICAgc3ltYm9sTmFtZTogZ2V0U3ltYm9sTmFtZShpdGVtKSxcbiAgICBjaGlsZExheWVyOiBnZXRDaGlsZExheWVyKGl0ZW0pLFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW9yZGVyU2VsZWN0aW9uKGRhdGE6IGFueSkge1xuICBpZiAoIWhhc1NlbGVjdGlvbihkYXRhKSkgcmV0dXJuIGRhdGEuc2VsZWN0aW9uXG5cbiAgY29uc3QgZmlyc3RQYXJlbnQgPSBkYXRhLnNlbGVjdGlvblswXS5wYXJlbnRcbiAgY29uc3Qgc2FtZVBhcmVudCA9IGRhdGEuc2VsZWN0aW9uLmV2ZXJ5KFxuICAgIChlbGVtKSA9PiBlbGVtLnBhcmVudC5pZCA9PT0gZmlyc3RQYXJlbnQuaWRcbiAgKVxuICBpZiAoc2FtZVBhcmVudCkge1xuICAgIGNvbnN0IGFyciA9IFtdXG4gICAgZmlyc3RQYXJlbnQuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGlmIChkYXRhLnNlbGVjdGlvbi5pbmNsdWRlcyhjaGlsZCkpIHtcbiAgICAgICAgYXJyLnB1c2goY2hpbGQpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBhcnJcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGF0YS5zZWxlY3Rpb25cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VEYXRhKGRhdGE6IGFueSkge1xuICBjb25zdCBvYmplY3QgPSB7XG4gICAgcGFnZU5hbWU6IGRhdGEubmFtZSBhcyBzdHJpbmcsXG4gICAgc2VsZWN0aW9uQ291bnQ6IGRhdGEuc2VsZWN0aW9uLmxlbmd0aCBhcyBudW1iZXIsXG4gICAgc2VsZWN0aW9uOiBbXSBhcyBhbnlbXSxcbiAgICBoYXNMYXllclN0eWxlOiBmYWxzZSBhcyBib29sZWFuLFxuICAgIGhhc1N5bWJvbDogZmFsc2UgYXMgYm9vbGVhbixcbiAgICBoYXNDaGlsZExheWVyOiBmYWxzZSBhcyBib29sZWFuLFxuICB9XG5cbiAgY29uc3Qgc2VsID0gcmVvcmRlclNlbGVjdGlvbihkYXRhKVxuICBzZWwuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICBpZiAoIW9iamVjdC5oYXNMYXllclN0eWxlKSBvYmplY3QuaGFzTGF5ZXJTdHlsZSA9IGhhc1N0eWxlcyhpdGVtKVxuICAgIGlmICghb2JqZWN0Lmhhc1N5bWJvbCkgb2JqZWN0Lmhhc1N5bWJvbCA9IGhhc1N5bWJvbHMoaXRlbSlcbiAgICBpZiAoIW9iamVjdC5oYXNDaGlsZExheWVyKSBvYmplY3QuaGFzQ2hpbGRMYXllciA9IGhhc0NoaWxkTGF5ZXIoaXRlbSlcblxuICAgIG9iamVjdC5zZWxlY3Rpb25baW5kZXhdID0gbGF5ZXJPYmplY3QoaXRlbSwgaW5kZXgpXG4gIH0pXG5cbiAgcmV0dXJuIG9iamVjdFxufVxuIiwiLypcbiAqIEBBdXRob3I6IFJvZHJpZ28gU29hcmVzXG4gKiBARGF0ZTogMjAxOS0wNy0zMSAyMDozNjoxMVxuICogQExhc3QgTW9kaWZpZWQgYnk6IFJvZHJpZ28gU29hcmVzXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDIwLTA1LTIyIDE0OjU0OjE1XG4gKi9cblxuaW1wb3J0IHsgc2NyaXB0IGFzIGlvIH0gZnJvbSAnLi9MaWIvaW8uanMnXG5pbXBvcnQgeyBSZW5hbWUsIEZpbmRSZXBsYWNlIH0gZnJvbSAnQHJvZGkwMS9yZW5hbWVpdGxpYidcbmltcG9ydCAqIGFzIGlzQmxhbmsgZnJvbSAnaXMtYmxhbmsnXG5pbXBvcnQgeyBwYXJzZURhdGEsIFdoZXJlVG8sIHJlb3JkZXJTZWxlY3Rpb24sIGhhc1NlbGVjdGlvbiB9IGZyb20gJy4vVXRpbGl0aWVzJ1xuaW1wb3J0IHsgZmluZFJlcGxhY2VEYXRhLCByZW5hbWVEYXRhIH0gZnJvbSAnLi9MaWIvRGF0YUhlbHBlcidcbmltcG9ydCB7XG4gIGdldFVVSUQsXG4gIGFuYWx5dGljc0VuYWJsZWQsXG4gIHNldEFuYWx5dGljc0VuYWJsZWQsXG4gIGFuYWx5dGljc0ZpcnN0UnVuLFxufSBmcm9tICcuL0xpYi9Hb29nbGVBbmFseXRpY3MnXG5cbmNvbnN0IGRhdGEgPSBwYXJzZURhdGEoZmlnbWEuY3VycmVudFBhZ2UpXG5cbmZ1bmN0aW9uIGRvUmVuYW1lKHJlbmFtZSwgaXRlbSwgaW5kZXgsIGlucHV0RGF0YSkge1xuICBjb25zdCBvcHRpb25zID0gcmVuYW1lRGF0YShcbiAgICBpdGVtLFxuICAgIGRhdGEuc2VsZWN0aW9uQ291bnQsXG4gICAgaW5wdXREYXRhLm5hbWVJbnB1dCxcbiAgICBpbnB1dERhdGEuc2VxdWVuY2VJbnB1dCxcbiAgICBkYXRhLnBhZ2VOYW1lXG4gIClcblxuICByZXR1cm4gcmVuYW1lLmxheWVyKHtcbiAgICAuLi5pdGVtLFxuICAgIC4uLm9wdGlvbnMsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGRvRmluZFJlcGxhY2UoZmluZFJlcGxhY2UsIGl0ZW0sIGlucHV0RGF0YSkge1xuICBjb25zdCBvcHRpb25zID0gZmluZFJlcGxhY2VEYXRhKFxuICAgIGl0ZW0sXG4gICAgaW5wdXREYXRhLmZpbmRUZXh0LFxuICAgIGlucHV0RGF0YS5yZXBsYWNlVGV4dCxcbiAgICBpbnB1dERhdGEuY2FzZVNlbnNpdGl2ZVxuICApXG5cbiAgcmV0dXJuIGZpbmRSZXBsYWNlLm1hdGNoKG9wdGlvbnMpID8gZmluZFJlcGxhY2UubGF5ZXIob3B0aW9ucykgOiBmYWxzZVxufVxuXG5hc3luYyBmdW5jdGlvbiB0aGVVSSgpIHtcbiAgbGV0IHRvID0gJ25vU2VsZWN0aW9uJ1xuICBjb25zdCBmaXJzdFJ1biA9IGF3YWl0IGFuYWx5dGljc0ZpcnN0UnVuKClcbiAgbGV0IHdpbmRvd09wdGlvbnMgPSB7XG4gICAgd2lkdGg6IDQzMCxcbiAgICBoZWlnaHQ6IDQ5MCxcbiAgICB2aXNpYmxlOiB0cnVlLFxuICB9XG5cbiAgLy8gU2V0IHNjcmVlbiB0byBzaG93XG4gIGlmIChmaWdtYS5jb21tYW5kID09PSBXaGVyZVRvLlJlbmFtZUxheWVycyAmJiBoYXNTZWxlY3Rpb24oZGF0YSkpIHtcbiAgICB0byA9IFdoZXJlVG8uUmVuYW1lTGF5ZXJzXG4gIH0gZWxzZSBpZiAoZmlnbWEuY29tbWFuZCA9PT0gV2hlcmVUby5GaW5kUmVwbGFjZSAmJiBoYXNTZWxlY3Rpb24oZGF0YSkpIHtcbiAgICB0byA9IFdoZXJlVG8uRmluZFJlcGxhY2VcbiAgICB3aW5kb3dPcHRpb25zID0ge1xuICAgICAgd2lkdGg6IDQzMCxcbiAgICAgIGhlaWdodDogMzIwLFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICB9XG4gIH0gZWxzZSBpZiAoZmlnbWEuY29tbWFuZCA9PT0gV2hlcmVUby5TZXR0aW5ncykge1xuICAgIHRvID0gV2hlcmVUby5TZXR0aW5nc1xuICAgIHdpbmRvd09wdGlvbnMgPSB7XG4gICAgICB3aWR0aDogNDMwLFxuICAgICAgaGVpZ2h0OiAzMDAsXG4gICAgICB2aXNpYmxlOiB0cnVlLFxuICAgIH1cbiAgfSBlbHNlIGlmIChmaWdtYS5jb21tYW5kID09PSBXaGVyZVRvLkRvbmF0ZSkge1xuICAgIHRvID0gV2hlcmVUby5Eb25hdGVcbiAgICB3aW5kb3dPcHRpb25zID0geyB3aWR0aDogMCwgaGVpZ2h0OiAwLCB2aXNpYmxlOiBmYWxzZSB9XG4gICAgZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7IHZpc2libGU6IGZhbHNlIH0pXG4gIH0gZWxzZSB7XG4gICAgdG8gPSBXaGVyZVRvLk5vU2VsZWN0aW9uXG4gICAgd2luZG93T3B0aW9ucyA9IHtcbiAgICAgIHdpZHRoOiA0MzAsXG4gICAgICBoZWlnaHQ6IDE1MCxcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgd2luZG93RGltID0gZmlyc3RSdW5cbiAgICA/IHsgd2lkdGg6IDQzMCwgaGVpZ2h0OiAxODAsIHZpc2libGU6IHRydWUgfVxuICAgIDogd2luZG93T3B0aW9uc1xuXG4gIGZpZ21hLnNob3dVSShfX2h0bWxfXywgd2luZG93RGltKVxuXG4gIGlvLnNlbmQoJ3NlbmREYXRhJywge1xuICAgIGRhdGE6IGRhdGEsXG4gICAgY29tbWFuZDogdG8sXG4gICAgVVVJRDogYXdhaXQgZ2V0VVVJRCgpLFxuICAgIGZpcnN0UnVuOiBmaXJzdFJ1bixcbiAgICBhbmFseXRpY3NFbmFibGVkOiBhd2FpdCBhbmFseXRpY3NFbmFibGVkKCksXG4gICAgd2luZG93RGltOiB3aW5kb3dPcHRpb25zLFxuICB9KVxuXG4gIGlvLm9uY2UoJ3JlbmFtZUxheWVycycsIChkKSA9PiB7XG4gICAgY29uc3QgcmVuYW1lID0gbmV3IFJlbmFtZSh7IGFsbG93Q2hpbGRMYXllcjogdHJ1ZSB9KVxuICAgIGNvbnN0IHNlbCA9IHJlb3JkZXJTZWxlY3Rpb24oZmlnbWEuY3VycmVudFBhZ2UpXG4gICAgc2VsLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBuYW1lID0gZG9SZW5hbWUocmVuYW1lLCBkYXRhLnNlbGVjdGlvbltpbmRleF0sIGluZGV4LCBkKVxuICAgICAgaWYgKCFpc0JsYW5rKG5hbWUpKSB7XG4gICAgICAgIGl0ZW0ubmFtZSA9IG5hbWVcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgZmlnbWEuY2xvc2VQbHVnaW4oKVxuICB9KVxuXG4gIGlvLm9uY2UoJ2ZpbmRSZXBsYWNlTGF5ZXJzJywgKGQpID0+IHtcbiAgICBjb25zdCBmaW5kUmVwbGFjZSA9IG5ldyBGaW5kUmVwbGFjZSgpXG4gICAgY29uc3Qgc2VsID0gcmVvcmRlclNlbGVjdGlvbihmaWdtYS5jdXJyZW50UGFnZSlcbiAgICBzZWwuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG5hbWUgPSBkb0ZpbmRSZXBsYWNlKGZpbmRSZXBsYWNlLCBkYXRhLnNlbGVjdGlvbltpbmRleF0sIGQpXG4gICAgICBpZiAobmFtZSkgaXRlbS5uYW1lID0gbmFtZVxuICAgIH0pXG5cbiAgICBmaWdtYS5jbG9zZVBsdWdpbigpXG4gIH0pXG5cbiAgaW8ub25jZSgnY2FuY2VsJywgKGQpID0+IHtcbiAgICBmaWdtYS5jbG9zZVBsdWdpbigpXG4gIH0pXG5cbiAgaW8ub25jZSgnc2V0QW5hbHl0aWNzJywgKHZhbHVlKSA9PiB7XG4gICAgc2V0QW5hbHl0aWNzRW5hYmxlZCh2YWx1ZSlcbiAgfSlcblxuICBpby5vbmNlKCdyZXNpemVWaWV3cG9ydCcsIChvcHRzKSA9PiB7XG4gICAgZmlnbWEudWkucmVzaXplKG9wdHMud2lkdGgsIG9wdHMuaGVpZ2h0KVxuICB9KVxufVxuXG50aGVVSSgpXG4iXSwic291cmNlUm9vdCI6IiJ9