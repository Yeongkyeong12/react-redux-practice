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

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ (() => {

eval("function createDOM(Node) {\n  if (typeof Node === \"string\") {\n    return document.createTextNode(Node);\n  }\n\n  var element = document.createElement(Node.tag);\n  Node.children.map(createDOM).forEach(element.appendChild.bind(element));\n  return element;\n}\n\nvar vdom = {\n  tag: \"p\",\n  props: {},\n  children: [{\n    tag: \"h1\",\n    props: {},\n    children: [\"React 만들기\"]\n  }, {\n    tag: \"ul\",\n    props: {},\n    children: [{\n      tag: \"li\",\n      props: {},\n      children: [\"첫 번째 아이템\"]\n    }, {\n      tag: \"li\",\n      props: {},\n      children: [\"두 번째 아이템\"]\n    }, {\n      tag: \"li\",\n      props: {},\n      children: [\"세 번째 아이템\"]\n    }]\n  }]\n};\ndocument.querySelector(\"#root\").appendChild(createDOM(vdom));\n\n//# sourceURL=webpack://2.3/./app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./app.js"]();
/******/ 	
/******/ })()
;