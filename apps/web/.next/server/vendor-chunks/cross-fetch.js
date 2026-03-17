/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/cross-fetch";
exports.ids = ["vendor-chunks/cross-fetch"];
exports.modules = {

/***/ "(action-browser)/../../node_modules/cross-fetch/dist/node-polyfill.js":
/*!************************************************************!*\
  !*** ../../node_modules/cross-fetch/dist/node-polyfill.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const fetchNode = __webpack_require__(/*! ./node-ponyfill */ \"(action-browser)/../../node_modules/cross-fetch/dist/node-ponyfill.js\")\nconst fetch = fetchNode.fetch.bind({})\n\nfetch.polyfill = true\n\nif (!global.fetch) {\n  global.fetch = fetch\n  global.Response = fetchNode.Response\n  global.Headers = fetchNode.Headers\n  global.Request = fetchNode.Request\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uLi8uLi9ub2RlX21vZHVsZXMvY3Jvc3MtZmV0Y2gvZGlzdC9ub2RlLXBvbHlmaWxsLmpzIiwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQixtQkFBTyxDQUFDLDhGQUFpQjtBQUMzQyxxQ0FBcUM7O0FBRXJDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BlbnRlcnByaXNlLWNvbW1lcmNlL3dlYi8uLi8uLi9ub2RlX21vZHVsZXMvY3Jvc3MtZmV0Y2gvZGlzdC9ub2RlLXBvbHlmaWxsLmpzP2FjMzAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZmV0Y2hOb2RlID0gcmVxdWlyZSgnLi9ub2RlLXBvbnlmaWxsJylcbmNvbnN0IGZldGNoID0gZmV0Y2hOb2RlLmZldGNoLmJpbmQoe30pXG5cbmZldGNoLnBvbHlmaWxsID0gdHJ1ZVxuXG5pZiAoIWdsb2JhbC5mZXRjaCkge1xuICBnbG9iYWwuZmV0Y2ggPSBmZXRjaFxuICBnbG9iYWwuUmVzcG9uc2UgPSBmZXRjaE5vZGUuUmVzcG9uc2VcbiAgZ2xvYmFsLkhlYWRlcnMgPSBmZXRjaE5vZGUuSGVhZGVyc1xuICBnbG9iYWwuUmVxdWVzdCA9IGZldGNoTm9kZS5SZXF1ZXN0XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(action-browser)/../../node_modules/cross-fetch/dist/node-polyfill.js\n");

/***/ }),

/***/ "(rsc)/../../node_modules/cross-fetch/dist/node-polyfill.js":
/*!************************************************************!*\
  !*** ../../node_modules/cross-fetch/dist/node-polyfill.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const fetchNode = __webpack_require__(/*! ./node-ponyfill */ \"(rsc)/../../node_modules/cross-fetch/dist/node-ponyfill.js\")\nconst fetch = fetchNode.fetch.bind({})\n\nfetch.polyfill = true\n\nif (!global.fetch) {\n  global.fetch = fetch\n  global.Response = fetchNode.Response\n  global.Headers = fetchNode.Headers\n  global.Request = fetchNode.Request\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzL2Nyb3NzLWZldGNoL2Rpc3Qvbm9kZS1wb2x5ZmlsbC5qcyIsIm1hcHBpbmdzIjoiQUFBQSxrQkFBa0IsbUJBQU8sQ0FBQyxtRkFBaUI7QUFDM0MscUNBQXFDOztBQUVyQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZW50ZXJwcmlzZS1jb21tZXJjZS93ZWIvLi4vLi4vbm9kZV9tb2R1bGVzL2Nyb3NzLWZldGNoL2Rpc3Qvbm9kZS1wb2x5ZmlsbC5qcz9lOTlmIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZldGNoTm9kZSA9IHJlcXVpcmUoJy4vbm9kZS1wb255ZmlsbCcpXG5jb25zdCBmZXRjaCA9IGZldGNoTm9kZS5mZXRjaC5iaW5kKHt9KVxuXG5mZXRjaC5wb2x5ZmlsbCA9IHRydWVcblxuaWYgKCFnbG9iYWwuZmV0Y2gpIHtcbiAgZ2xvYmFsLmZldGNoID0gZmV0Y2hcbiAgZ2xvYmFsLlJlc3BvbnNlID0gZmV0Y2hOb2RlLlJlc3BvbnNlXG4gIGdsb2JhbC5IZWFkZXJzID0gZmV0Y2hOb2RlLkhlYWRlcnNcbiAgZ2xvYmFsLlJlcXVlc3QgPSBmZXRjaE5vZGUuUmVxdWVzdFxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/cross-fetch/dist/node-polyfill.js\n");

/***/ }),

/***/ "(action-browser)/../../node_modules/cross-fetch/dist/node-ponyfill.js":
/*!************************************************************!*\
  !*** ../../node_modules/cross-fetch/dist/node-ponyfill.js ***!
  \************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("const nodeFetch = __webpack_require__(/*! node-fetch */ \"(action-browser)/../../node_modules/node-fetch/lib/index.mjs\")\nconst realFetch = nodeFetch.default || nodeFetch\n\nconst fetch = function (url, options) {\n  // Support schemaless URIs on the server for parity with the browser.\n  // Ex: //github.com/ -> https://github.com/\n  if (/^\\/\\//.test(url)) {\n    url = 'https:' + url\n  }\n  return realFetch.call(this, url, options)\n}\n\nfetch.ponyfill = true\n\nmodule.exports = exports = fetch\nexports.fetch = fetch\nexports.Headers = nodeFetch.Headers\nexports.Request = nodeFetch.Request\nexports.Response = nodeFetch.Response\n\n// Needed for TypeScript consumers without esModuleInterop.\nexports[\"default\"] = fetch\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uLi8uLi9ub2RlX21vZHVsZXMvY3Jvc3MtZmV0Y2gvZGlzdC9ub2RlLXBvbnlmaWxsLmpzIiwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQixtQkFBTyxDQUFDLGdGQUFZO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2IsZUFBZTtBQUNmLGVBQWU7QUFDZixnQkFBZ0I7O0FBRWhCO0FBQ0Esa0JBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZW50ZXJwcmlzZS1jb21tZXJjZS93ZWIvLi4vLi4vbm9kZV9tb2R1bGVzL2Nyb3NzLWZldGNoL2Rpc3Qvbm9kZS1wb255ZmlsbC5qcz9jNTBhIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG5vZGVGZXRjaCA9IHJlcXVpcmUoJ25vZGUtZmV0Y2gnKVxuY29uc3QgcmVhbEZldGNoID0gbm9kZUZldGNoLmRlZmF1bHQgfHwgbm9kZUZldGNoXG5cbmNvbnN0IGZldGNoID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICAvLyBTdXBwb3J0IHNjaGVtYWxlc3MgVVJJcyBvbiB0aGUgc2VydmVyIGZvciBwYXJpdHkgd2l0aCB0aGUgYnJvd3Nlci5cbiAgLy8gRXg6IC8vZ2l0aHViLmNvbS8gLT4gaHR0cHM6Ly9naXRodWIuY29tL1xuICBpZiAoL15cXC9cXC8vLnRlc3QodXJsKSkge1xuICAgIHVybCA9ICdodHRwczonICsgdXJsXG4gIH1cbiAgcmV0dXJuIHJlYWxGZXRjaC5jYWxsKHRoaXMsIHVybCwgb3B0aW9ucylcbn1cblxuZmV0Y2gucG9ueWZpbGwgPSB0cnVlXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZldGNoXG5leHBvcnRzLmZldGNoID0gZmV0Y2hcbmV4cG9ydHMuSGVhZGVycyA9IG5vZGVGZXRjaC5IZWFkZXJzXG5leHBvcnRzLlJlcXVlc3QgPSBub2RlRmV0Y2guUmVxdWVzdFxuZXhwb3J0cy5SZXNwb25zZSA9IG5vZGVGZXRjaC5SZXNwb25zZVxuXG4vLyBOZWVkZWQgZm9yIFR5cGVTY3JpcHQgY29uc3VtZXJzIHdpdGhvdXQgZXNNb2R1bGVJbnRlcm9wLlxuZXhwb3J0cy5kZWZhdWx0ID0gZmV0Y2hcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(action-browser)/../../node_modules/cross-fetch/dist/node-ponyfill.js\n");

/***/ }),

/***/ "(rsc)/../../node_modules/cross-fetch/dist/node-ponyfill.js":
/*!************************************************************!*\
  !*** ../../node_modules/cross-fetch/dist/node-ponyfill.js ***!
  \************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("const nodeFetch = __webpack_require__(/*! node-fetch */ \"(rsc)/../../node_modules/node-fetch/lib/index.mjs\")\nconst realFetch = nodeFetch.default || nodeFetch\n\nconst fetch = function (url, options) {\n  // Support schemaless URIs on the server for parity with the browser.\n  // Ex: //github.com/ -> https://github.com/\n  if (/^\\/\\//.test(url)) {\n    url = 'https:' + url\n  }\n  return realFetch.call(this, url, options)\n}\n\nfetch.ponyfill = true\n\nmodule.exports = exports = fetch\nexports.fetch = fetch\nexports.Headers = nodeFetch.Headers\nexports.Request = nodeFetch.Request\nexports.Response = nodeFetch.Response\n\n// Needed for TypeScript consumers without esModuleInterop.\nexports[\"default\"] = fetch\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzL2Nyb3NzLWZldGNoL2Rpc3Qvbm9kZS1wb255ZmlsbC5qcyIsIm1hcHBpbmdzIjoiQUFBQSxrQkFBa0IsbUJBQU8sQ0FBQyxxRUFBWTtBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiLGVBQWU7QUFDZixlQUFlO0FBQ2YsZ0JBQWdCOztBQUVoQjtBQUNBLGtCQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGVudGVycHJpc2UtY29tbWVyY2Uvd2ViLy4uLy4uL25vZGVfbW9kdWxlcy9jcm9zcy1mZXRjaC9kaXN0L25vZGUtcG9ueWZpbGwuanM/ZGE2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBub2RlRmV0Y2ggPSByZXF1aXJlKCdub2RlLWZldGNoJylcbmNvbnN0IHJlYWxGZXRjaCA9IG5vZGVGZXRjaC5kZWZhdWx0IHx8IG5vZGVGZXRjaFxuXG5jb25zdCBmZXRjaCA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgLy8gU3VwcG9ydCBzY2hlbWFsZXNzIFVSSXMgb24gdGhlIHNlcnZlciBmb3IgcGFyaXR5IHdpdGggdGhlIGJyb3dzZXIuXG4gIC8vIEV4OiAvL2dpdGh1Yi5jb20vIC0+IGh0dHBzOi8vZ2l0aHViLmNvbS9cbiAgaWYgKC9eXFwvXFwvLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSAnaHR0cHM6JyArIHVybFxuICB9XG4gIHJldHVybiByZWFsRmV0Y2guY2FsbCh0aGlzLCB1cmwsIG9wdGlvbnMpXG59XG5cbmZldGNoLnBvbnlmaWxsID0gdHJ1ZVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmZXRjaFxuZXhwb3J0cy5mZXRjaCA9IGZldGNoXG5leHBvcnRzLkhlYWRlcnMgPSBub2RlRmV0Y2guSGVhZGVyc1xuZXhwb3J0cy5SZXF1ZXN0ID0gbm9kZUZldGNoLlJlcXVlc3RcbmV4cG9ydHMuUmVzcG9uc2UgPSBub2RlRmV0Y2guUmVzcG9uc2VcblxuLy8gTmVlZGVkIGZvciBUeXBlU2NyaXB0IGNvbnN1bWVycyB3aXRob3V0IGVzTW9kdWxlSW50ZXJvcC5cbmV4cG9ydHMuZGVmYXVsdCA9IGZldGNoXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/cross-fetch/dist/node-ponyfill.js\n");

/***/ })

};
;