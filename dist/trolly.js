(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["trolly"] = factory();
	else
		root["trolly"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:8080/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var __cov_IyeqIm$PWbbUTHA9S_3Vbw = Function('return this')();
	if (!__cov_IyeqIm$PWbbUTHA9S_3Vbw.__coverage__) {
	   __cov_IyeqIm$PWbbUTHA9S_3Vbw.__coverage__ = {};
	}
	__cov_IyeqIm$PWbbUTHA9S_3Vbw = __cov_IyeqIm$PWbbUTHA9S_3Vbw.__coverage__;
	if (!__cov_IyeqIm$PWbbUTHA9S_3Vbw['C:\\xampp3\\htdocs\\trolly\\src\\index.js']) {
	   __cov_IyeqIm$PWbbUTHA9S_3Vbw['C:\\xampp3\\htdocs\\trolly\\src\\index.js'] = { "path": "C:\\xampp3\\htdocs\\trolly\\src\\index.js", "s": { "1": 0, "2": 1, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0 }, "b": { "1": [0, 0], "2": [0, 0] }, "f": { "1": 0 }, "fnMap": { "1": { "name": "_interopRequireDefault", "line": 7, "skip": true, "loc": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true } } }, "statementMap": { "1": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, "2": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, "3": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, "4": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, "5": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, "6": { "end": { "line": 4, "column": 14 }, "start": { "line": 4, "column": 0 } }, "7": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, "8": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true } }, "branchMap": { "1": { "line": 7, "type": "cond-expr", "locations": [{ "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }] }, "2": { "line": 7, "type": "binary-expr", "locations": [{ "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }] } }, "code": ["import environment from './environment';", "", "// test the environment", "environment();", "", "export default {};"] };
	}
	__cov_IyeqIm$PWbbUTHA9S_3Vbw = __cov_IyeqIm$PWbbUTHA9S_3Vbw['C:\\xampp3\\htdocs\\trolly\\src\\index.js'];
	__cov_IyeqIm$PWbbUTHA9S_3Vbw.s['1']++;Object.defineProperty(exports, '__esModule', { value: true });function _interopRequireDefault(obj) {
	   __cov_IyeqIm$PWbbUTHA9S_3Vbw.f['1']++;__cov_IyeqIm$PWbbUTHA9S_3Vbw.s['3']++;return (__cov_IyeqIm$PWbbUTHA9S_3Vbw.b['2'][0]++, obj) && (__cov_IyeqIm$PWbbUTHA9S_3Vbw.b['2'][1]++, obj.__esModule) ? (__cov_IyeqIm$PWbbUTHA9S_3Vbw.b['1'][0]++, obj) : (__cov_IyeqIm$PWbbUTHA9S_3Vbw.b['1'][1]++, { 'default': obj });
	}__cov_IyeqIm$PWbbUTHA9S_3Vbw.s['4']++;var _environment = __webpack_require__(1);__cov_IyeqIm$PWbbUTHA9S_3Vbw.s['5']++;var _environment2 = _interopRequireDefault(_environment);__cov_IyeqIm$PWbbUTHA9S_3Vbw.s['6']++;(0, _environment2['default'])();__cov_IyeqIm$PWbbUTHA9S_3Vbw.s['7']++;exports['default'] = {};__cov_IyeqIm$PWbbUTHA9S_3Vbw.s['8']++;module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var __cov_o0vTg$9ithmSfYvtQvSVkQ = Function('return this')();
	if (!__cov_o0vTg$9ithmSfYvtQvSVkQ.__coverage__) {
	   __cov_o0vTg$9ithmSfYvtQvSVkQ.__coverage__ = {};
	}
	__cov_o0vTg$9ithmSfYvtQvSVkQ = __cov_o0vTg$9ithmSfYvtQvSVkQ.__coverage__;
	if (!__cov_o0vTg$9ithmSfYvtQvSVkQ['C:\\xampp3\\htdocs\\trolly\\src\\environment.js']) {
	   __cov_o0vTg$9ithmSfYvtQvSVkQ['C:\\xampp3\\htdocs\\trolly\\src\\environment.js'] = { "path": "C:\\xampp3\\htdocs\\trolly\\src\\environment.js", "s": { "1": 0, "2": 1, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0, "10": 0, "11": 0, "12": 0 }, "b": { "1": [0, 0], "2": [0, 0], "3": [0, 0] }, "f": { "1": 0, "2": 0 }, "fnMap": { "1": { "name": "_interopRequireDefault", "line": 7, "skip": true, "loc": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true } }, "2": { "name": "(anonymous_2)", "line": 22, "loc": { "start": { "line": 12, "column": 15 }, "end": { "line": 12, "column": 21 } } } }, "statementMap": { "1": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, "2": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, "3": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, "4": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, "5": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, "6": { "end": { "line": 3, "column": 12 }, "start": { "line": 3, "column": 0 } }, "7": { "end": { "line": 10, "column": 1 }, "start": { "line": 6, "column": 0 } }, "8": { "end": { "line": 7, "column": 28 }, "start": { "line": 7, "column": 4 } }, "9": { "end": { "line": 9, "column": 28 }, "start": { "line": 9, "column": 4 } }, "10": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, "11": { "end": { "line": 13, "column": 25 }, "start": { "line": 13, "column": 4 } }, "12": { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true } }, "branchMap": { "1": { "line": 7, "type": "cond-expr", "locations": [{ "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }] }, "2": { "line": 7, "type": "binary-expr", "locations": [{ "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }, { "start": { "line": 0, "column": 0 }, "end": { "line": 0, "column": 0 }, "skip": true }] }, "3": { "line": 16, "type": "if", "locations": [{ "end": { "line": 6, "column": 0 }, "start": { "line": 6, "column": 0 } }, { "end": { "line": 6, "column": 0 }, "start": { "line": 6, "column": 0 } }] } }, "code": ["import ExecutionEnvironment from 'exenv';", "", "let message;", "", "// Will be executed if the DOM are available", "if (ExecutionEnvironment.canUseDOM) {", "    message = 'Client side';", "} else {", "    message = 'Server side';", "}", "", "export default () => {", "    console.log(message);", "};"] };
	}
	__cov_o0vTg$9ithmSfYvtQvSVkQ = __cov_o0vTg$9ithmSfYvtQvSVkQ['C:\\xampp3\\htdocs\\trolly\\src\\environment.js'];
	__cov_o0vTg$9ithmSfYvtQvSVkQ.s['1']++;Object.defineProperty(exports, '__esModule', { value: true });function _interopRequireDefault(obj) {
	   __cov_o0vTg$9ithmSfYvtQvSVkQ.f['1']++;__cov_o0vTg$9ithmSfYvtQvSVkQ.s['3']++;return (__cov_o0vTg$9ithmSfYvtQvSVkQ.b['2'][0]++, obj) && (__cov_o0vTg$9ithmSfYvtQvSVkQ.b['2'][1]++, obj.__esModule) ? (__cov_o0vTg$9ithmSfYvtQvSVkQ.b['1'][0]++, obj) : (__cov_o0vTg$9ithmSfYvtQvSVkQ.b['1'][1]++, { 'default': obj });
	}__cov_o0vTg$9ithmSfYvtQvSVkQ.s['4']++;var _exenv = __webpack_require__(2);__cov_o0vTg$9ithmSfYvtQvSVkQ.s['5']++;var _exenv2 = _interopRequireDefault(_exenv);__cov_o0vTg$9ithmSfYvtQvSVkQ.s['6']++;var message = undefined;__cov_o0vTg$9ithmSfYvtQvSVkQ.s['7']++;if (_exenv2['default'].canUseDOM) {
	   __cov_o0vTg$9ithmSfYvtQvSVkQ.b['3'][0]++;__cov_o0vTg$9ithmSfYvtQvSVkQ.s['8']++;message = 'Client side';
	} else {
	   __cov_o0vTg$9ithmSfYvtQvSVkQ.b['3'][1]++;__cov_o0vTg$9ithmSfYvtQvSVkQ.s['9']++;message = 'Server side';
	}__cov_o0vTg$9ithmSfYvtQvSVkQ.s['10']++;exports['default'] = function () {
	   __cov_o0vTg$9ithmSfYvtQvSVkQ.f['2']++;__cov_o0vTg$9ithmSfYvtQvSVkQ.s['11']++;console.log(message);
	};__cov_o0vTg$9ithmSfYvtQvSVkQ.s['12']++;module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Based on code that is Copyright 2013-2015, Facebook, Inc.
	  All rights reserved.
	*/
	
	(function () {
		'use strict';
	
		var canUseDOM = !!(
			typeof window !== 'undefined' &&
			window.document &&
			window.document.createElement
		);
	
		var ExecutionEnvironment = {
	
			canUseDOM: canUseDOM,
	
			canUseWorkers: typeof Worker !== 'undefined',
	
			canUseEventListeners:
				canUseDOM && !!(window.addEventListener || window.attachEvent),
	
			canUseViewport: canUseDOM && !!window.screen
	
		};
	
		if (true) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return ExecutionEnvironment;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = ExecutionEnvironment;
		} else {
			window.ExecutionEnvironment = ExecutionEnvironment;
		}
	
	}());


/***/ }
/******/ ])
});
;
//# sourceMappingURL=trolly.js.map