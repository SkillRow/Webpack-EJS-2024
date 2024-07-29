/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/product.js":
/*!****************************!*\
  !*** ./src/api/product.js ***!
  \****************************/
/***/ ((module) => {

eval("// src/api/product.js\nasync function search(query) {\n  // Dummy function to simulate an API call\n  return Promise.resolve(`Results for ${query}`);\n}\nasync function info(id) {\n  // Dummy function to simulate an API call\n  return Promise.resolve(`Info for product ${id}`);\n}\nmodule.exports = {\n  search,\n  info\n};\n\n//# sourceURL=webpack://html/./src/api/product.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n__webpack_require__(/*! @scss/index.scss */ \"./scss/index.scss\");\nconst {\n  search,\n  info\n} = __webpack_require__(/*! ./api/product */ \"./src/api/product.js\");\nconst testTemplate = __webpack_require__(/*! ./templates/test.ejs */ \"./src/templates/test.ejs\");\nconsole.log(testTemplate({\n  name: \"TEST!\"\n}));\ndocument.getElementById('app').innerHTML = testTemplate({\n  name: \"TEST!\"\n});\nsearch(\"Apple\").then(res => {\n  console.log(res);\n  const resultsDiv = document.createElement('div');\n  resultsDiv.innerHTML = `<p>Results for Apple: ${res}</p>`;\n  document.getElementById('app').appendChild(resultsDiv);\n});\n// info(171689).then((res) => console.log(res))\n\n//# sourceURL=webpack://html/./src/index.js?");

/***/ }),

/***/ "./src/templates/test.ejs":
/*!********************************!*\
  !*** ./src/templates/test.ejs ***!
  \********************************/
/***/ ((module) => {

eval("module.exports = function(obj) {\nobj || (obj = {});\nvar __t, __p = '';\nwith (obj) {\n__p += '<!-- src/templates/test.ejs -->\\n<div>\\n  <p>Product name: ' +\n((__t = ( name )) == null ? '' : __t) +\n'</p>\\n</div>\\n';\n\n}\nreturn __p\n}\n\n//# sourceURL=webpack://html/./src/templates/test.ejs?");

/***/ }),

/***/ "./scss/index.scss":
/*!*************************!*\
  !*** ./scss/index.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://html/./scss/index.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;