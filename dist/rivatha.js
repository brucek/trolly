(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["rivatha"] = factory();
	else
		root["rivatha"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dom = __webpack_require__(1);

	var _dom2 = _interopRequireDefault(_dom);

	var _core = __webpack_require__(6);

	var _core2 = _interopRequireDefault(_core);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  core: _core2.default,
	  dom: _dom2.default
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _DOMProperties = __webpack_require__(2);

	var _DOMProperties2 = _interopRequireDefault(_DOMProperties);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  DOMProperties: _DOMProperties2.default
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _hasSVG = __webpack_require__(3);

	var _hasSVG2 = _interopRequireDefault(_hasSVG);

	var _checkMask = __webpack_require__(5);

	var _checkMask2 = _interopRequireDefault(_checkMask);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NS = {
	    xlink: 'http://www.w3.org/1999/xlink',
	    xml: 'http://www.w3.org/XML/1998/namespace'
	};

	var DOMMutationMethods = {};

	var DOMAttributeNamespaces = {
	    'xlink:actuate': NS.xlink,
	    'xlink:arcrole': NS.xlink,
	    'xlink:href': NS.xlink,
	    'xlink:role': NS.xlink,
	    'xlink:show': NS.xlink,
	    'xlink:title': NS.xlink,
	    'xlink:type': NS.xlink,
	    'xml:base': NS.xml,
	    'xml:id': NS.xml,
	    'xml:lang': NS.xml,
	    'xml:space': NS.xml
	};

	var attributeToPropertyMapping = {};

	var propertyToAttributeMapping = {
	    acceptCharset: 'accept-charset',
	    className: 'class',
	    htmlFor: 'for',
	    httpEquiv: 'http-equiv',

	    // SVG

	    accentHeight: 'accent-height',
	    alignmentBaseline: 'alignment-baseline',
	    arabicForm: 'arabic-form',
	    autoStartReverse: 'auto-start-reverse',
	    baselineShift: 'baseline-shift',
	    bufferedRendering: 'buffered-rendering',
	    colorRendering: 'color-rendering',
	    colorInterpolation: 'color-interpolation',
	    colorInterpolationFilters: 'color-interpolation-filters',
	    colorProfile: 'color-profile',
	    clipPath: 'clip-path',
	    dominantBaseline: 'dominant-baseline',
	    fillOpacity: 'fill-opacity',
	    fillRule: 'fill-rule',
	    filterRes: 'filterRes',
	    filterUnits: 'filterUnits',
	    floodColor: 'flood-color',
	    floodOpacity: 'flood-opacity',
	    fontFamily: 'font-family',
	    fontSize: 'font-size',
	    fontStyle: 'font-style',
	    fontWeight: 'font-weight',
	    glyphName: 'glyph-name',
	    glyphRef: 'glyphRef',
	    gradientTransform: 'gradientTransform',
	    gradientUnits: 'gradientUnits',
	    horizAdvX: 'horiz-adv-x',
	    horizOriginX: 'horiz-origin-x',
	    horizOriginY: 'horiz-origin-y',
	    markerEnd: 'marker-end',
	    markerMid: 'marker-mid',
	    markerStart: 'marker-start',
	    overlinePosition: 'overline-position',
	    overlineThickness: 'overline-thickness',
	    paintOrder: 'paint-order',
	    patternContentUnits: 'patternContentUnits',
	    patternUnits: 'patternUnits',
	    pathLength: 'pathLength',
	    patternTransform: 'patternTransform',
	    pointsAtX: 'pointsAtX',
	    pointsAtY: 'pointsAtY',
	    pointsAtZ: 'pointsAtZ',
	    preserveAlpha: 'preserveAlpha',
	    preserveAspectRatio: 'preserveAspectRatio',
	    primitiveUnits: 'primitiveUnits',
	    shapeRendering: 'shape-rendering',
	    spreadMethod: 'spreadMethod',
	    stopColor: 'stop-color',
	    stopOpacity: 'stop-opacity',
	    strikethroughPosition: 'strikethrough-position',
	    strikethroughThickness: 'strikethrough-thickness',
	    strokeDashoffset: 'stroke-dashoffset',
	    strokeDasharray: 'stroke-dasharray',
	    strokeLinecap: 'stroke-linecap',
	    strokeOpacity: 'stroke-opacity',
	    strokeWidth: 'stroke-width',
	    tableValues: 'tableValues',
	    targetX: 'targetX',
	    targetY: 'targetY',
	    textLength: 'textLength',
	    underlinePosition: 'underline-position',
	    underlineThickness: 'underline-thickness',
	    unicodeBidi: 'unicode-bidi',
	    unicodeRange: 'unicode-range',
	    unitsPerEm: 'units-per-em',
	    solidColor: 'solid-color',
	    solidOpacity: 'solid-opacity',
	    strokeLinejoin: 'stroke-linejoin',
	    textAnchor: 'text-anchor',
	    textDecoration: 'text-decoration',
	    textRendering: 'text-rendering',
	    vAlphabetic: 'v-alphabetic',
	    vectorEffect: 'vector-effect',
	    vHanging: 'v-hanging',
	    vIdeographic: 'v-ideographic',
	    vMathematical: 'v-mathematical',
	    vertAdvY: 'vert-adv-y',
	    vertOriginX: 'vert-origin-x',
	    vertOriginY: 'vert-origin-y',
	    viewBox: 'viewBox'
	};

	var MustUseAttribute = 0x1;
	var MustUseProperty = 0x2;
	var HasBooleanValue = 0x8;

	var Properties = {

	    className: _hasSVG2.default ? MustUseAttribute : MustUseProperty
	};

	var DOMProperties = (function () {
	    var propInfoByAttributeName = {};

	    for (var propName in Properties) {

	        var propConfig = Properties[propName];
	        var attributeName = propertyToAttributeMapping[propName] || propName.toLowerCase();
	        var propertyInfo = {
	            attributeName: attributeName,
	            propertyName: propName,
	            attributeNamespace: null,
	            mustUseAttribute: (0, _checkMask2.default)(propConfig, MustUseAttribute),
	            mustUseProperty: (0, _checkMask2.default)(propConfig, MustUseProperty),
	            hasBooleanValue: (0, _checkMask2.default)(propConfig, HasBooleanValue)
	        };

	        propInfoByAttributeName[attributeName] = propertyInfo;
	    }

	    return function (name) {
	        var lowerCased = name.toLowerCase();
	        var propInfo = undefined;

	        if (DOMAttributeNamespaces[name]) {
	            propInfo = {
	                attributeName: name,
	                mustUseAttribute: true,
	                isCustomAttribute: true,
	                attributeNamespace: DOMAttributeNamespaces[name]
	            };
	        } else if (propInfoByAttributeName[lowerCased]) {
	            propInfo = propInfoByAttributeName[lowerCased];
	        } else {
	            propInfo = {
	                attributeName: propertyToAttributeMapping[name] || name,
	                mustUseAttribute: true,
	                isCustomAttribute: true
	            };
	        }

	        if (DOMMutationMethods[lowerCased]) {
	            propInfo.mutationMethod = DOMMutationMethods[lowerCased];
	        }

	        return propInfo;
	    };
	})();

	/**
	 * Sets the value for multiple styles on a node. If a value is specified as
	 * '' (empty string), the corresponding style property will be unset.
	 *
	 * @param {DOMElement} node
	 * @param {object} styles
	 */
	var setStyles = function setStyles(node, styles) {};

	/**
	 * Set HTML attributes / properties on a node
	 * @param {!Element} node
	 * @param {string} name
	 * @param {*} value
	 */

	exports.default = function (node, name, value) {

	    var propInfo = DOMProperties(name);
	    var propName = propInfo.attributeName;

	    if (propInfo) {

	        // Attributes
	        if (propInfo.mustUseAttribute) {

	            // namespace attributes
	            if (propInfo.attributeNamespace) {
	                node.setAttributeNS(propInfo.attributeNamespace, propName, '' + value);
	            } else if (propInfo.mutationMethod) {
	                propInfo.mutationMethod(node, propName, value);
	            } else {

	                switch (propName) {
	                    case 'type':
	                        if (node.tagName.toLowerCase() === 'input') {
	                            var val = node.value; // value will be lost in IE if type is changed
	                            node.setAttribute(propName, '' + value);
	                            node.value = val;
	                            return;
	                        }
	                    default:
	                        node.setAttribute(propName, propInfo.hasBooleanValue ? value : value);
	                }
	            }
	        } else {
	            if (propInfo.hasBooleanValue) {
	                // Boolean properties remove the attribute when set to `false`.
	                node[attributeToPropertyMapping[propName] || propName] = value === '' || name.toLowerCase() === propInfo.attributeName ? true : false;
	            } else if (propInfo.mustDeleteProperty) {
	                // Some properties are separate from their attribute, `removeAttribute`
	                // does not have the intended effect for these.
	                // Boolean properties are already handled above.
	                node[name] = '';
	            } else if (propInfo.mutationMethod) {
	                propInfo.mutationMethod(node, name, value);
	            } else {

	                switch (name) {

	                    case 'style':
	                        setStyles(node, value);
	                        return;
	                    case 'value':
	                        if (node.tagName.toLowerCase() === 'select') {
	                            // TODO! Deal with select / select multiple
	                            return;
	                        }
	                    default:
	                        node[propName] = value;
	                }
	            }
	        }
	        // custom attributes
	    } else {}
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _executionEnvironment = __webpack_require__(4);

	var _executionEnvironment2 = _interopRequireDefault(_executionEnvironment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var hasSVG = undefined;
	if (_executionEnvironment2.default.canUseDOM) {
	  var implementation = document.implementation;
	  hasSVG = implementation && implementation.hasFeature && implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#BasicStructure', '1.1');
	}
	exports.default = hasSVG;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	exports.default = {

	  canUseDOM: canUseDOM,

	  canUseWorkers: typeof Worker !== 'undefined',

	  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

	  canUseViewport: canUseDOM && !!window.screen

	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (value, bitmask) {
	  return (value & bitmask) === bitmask;
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _executionEnvironment = __webpack_require__(4);

	var _executionEnvironment2 = _interopRequireDefault(_executionEnvironment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var msg = undefined;

	if (_executionEnvironment2.default.canUseDOM) {
	  msg = 'Client side';
	} else {
	  msg = 'Server side';
	}
	exports.default = msg;

/***/ }
/******/ ])
});
;