/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n\n\nconst addProjectBtn = document.querySelector(\".add-project\");\nconst content = document.querySelector(\".content\")\n\naddProjectBtn.addEventListener('click', () => {\n    const projectText = document.createElement('p');\n    projectText.innerHTML = _project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].displayProject();\n    content.appendChild(projectText);\n})\n\n\n //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBa0M7O0FBRWxDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QixtREFBTztBQUNuQztBQUNBLENBQUM7OztBQUdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1wcmFjdGljZS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9qZWN0IGZyb20gXCIuL3Byb2plY3QuanNcIlxuXG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdFwiKTtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIilcblxuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcm9qZWN0VGV4dC5pbm5lckhUTUwgPSBwcm9qZWN0LmRpc3BsYXlQcm9qZWN0KCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0VGV4dCk7XG59KVxuXG5cbiAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nclass Project {\n    \n    constructor(title, description, priority, notes, dueDate) {\n        this.title = title;\n        this.description = description\n        this.priority = priority;\n        this.notes = notes;\n        this.dueDate = dueDate;\n    } \n    \n    addProject() {\n        this.title  = prompt(\"Title?\");\n        this.description  = prompt(\"Add a description\");\n        this.priority = prompt(\"Choose priority\");\n        this.notes = prompt(\"Add some notes\");\n        this.dueDate = prompt(\"Choose due date\");\n    }\n\n    //shows a project\n    displayProject() {\n        this.addProject();\n        console.log(`Title:${this.title}\\nDescription:${this.description}\\nPriority:${this.priority}\\nNotes:${this.notes}\\nDue Date:${this.dueDate}` \n        );\n        const projectText = `Title:${this.title}\\nDescription:${this.description}\\nPriority:${this.priority}\\nNotes:${this.notes}\\nDue Date:${this.dueDate}`;\n        return projectText;\n    }\n}\n\nconst project = new Project;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (project);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvamVjdC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFdBQVcsZ0JBQWdCLGlCQUFpQixhQUFhLGNBQWMsVUFBVSxXQUFXLGFBQWEsYUFBYTtBQUNuSjtBQUNBLHFDQUFxQyxXQUFXLGdCQUFnQixpQkFBaUIsYUFBYSxjQUFjLFVBQVUsV0FBVyxhQUFhLGFBQWE7QUFDM0o7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlFQUFlLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXByYWN0aWNlLy4vc3JjL3Byb2plY3QuanM/ZjU5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIFByb2plY3Qge1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIG5vdGVzLCBkdWVEYXRlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIH0gXG4gICAgXG4gICAgYWRkUHJvamVjdCgpIHtcbiAgICAgICAgdGhpcy50aXRsZSAgPSBwcm9tcHQoXCJUaXRsZT9cIik7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gID0gcHJvbXB0KFwiQWRkIGEgZGVzY3JpcHRpb25cIik7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcm9tcHQoXCJDaG9vc2UgcHJpb3JpdHlcIik7XG4gICAgICAgIHRoaXMubm90ZXMgPSBwcm9tcHQoXCJBZGQgc29tZSBub3Rlc1wiKTtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gcHJvbXB0KFwiQ2hvb3NlIGR1ZSBkYXRlXCIpO1xuICAgIH1cblxuICAgIC8vc2hvd3MgYSBwcm9qZWN0XG4gICAgZGlzcGxheVByb2plY3QoKSB7XG4gICAgICAgIHRoaXMuYWRkUHJvamVjdCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhgVGl0bGU6JHt0aGlzLnRpdGxlfVxcbkRlc2NyaXB0aW9uOiR7dGhpcy5kZXNjcmlwdGlvbn1cXG5Qcmlvcml0eToke3RoaXMucHJpb3JpdHl9XFxuTm90ZXM6JHt0aGlzLm5vdGVzfVxcbkR1ZSBEYXRlOiR7dGhpcy5kdWVEYXRlfWAgXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHByb2plY3RUZXh0ID0gYFRpdGxlOiR7dGhpcy50aXRsZX1cXG5EZXNjcmlwdGlvbjoke3RoaXMuZGVzY3JpcHRpb259XFxuUHJpb3JpdHk6JHt0aGlzLnByaW9yaXR5fVxcbk5vdGVzOiR7dGhpcy5ub3Rlc31cXG5EdWUgRGF0ZToke3RoaXMuZHVlRGF0ZX1gO1xuICAgICAgICByZXR1cm4gcHJvamVjdFRleHQ7XG4gICAgfVxufVxuXG5jb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3Q7XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/project.js\n");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;