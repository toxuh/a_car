/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Car.ts":
/*!********************!*\
  !*** ./src/Car.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Car\": () => (/* binding */ Car)\n/* harmony export */ });\n/* harmony import */ var _Controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Controls */ \"./src/Controls.ts\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }\n\nfunction _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError(\"Cannot initialize the same private elements twice on an object\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError(\"attempted to get private field on non-instance\"); } return fn; }\n\n\n\nvar _move = /*#__PURE__*/new WeakSet();\n\nvar Car = /*#__PURE__*/function () {\n  function Car(x, y, w, h) {\n    _classCallCheck(this, Car);\n\n    _classPrivateMethodInitSpec(this, _move);\n\n    _defineProperty(this, \"x\", void 0);\n\n    _defineProperty(this, \"y\", void 0);\n\n    _defineProperty(this, \"w\", void 0);\n\n    _defineProperty(this, \"h\", void 0);\n\n    _defineProperty(this, \"speed\", void 0);\n\n    _defineProperty(this, \"maxSpeed\", void 0);\n\n    _defineProperty(this, \"reverseSpeedRatio\", void 0);\n\n    _defineProperty(this, \"acceleration\", void 0);\n\n    _defineProperty(this, \"friction\", void 0);\n\n    _defineProperty(this, \"angle\", void 0);\n\n    _defineProperty(this, \"angleChangeRatio\", void 0);\n\n    _defineProperty(this, \"controls\", void 0);\n\n    this.x = x;\n    this.y = y;\n    this.w = w;\n    this.h = h;\n    this.speed = 0;\n    this.maxSpeed = 3;\n    this.reverseSpeedRatio = 0.5;\n    this.acceleration = 0.2;\n    this.friction = 0.05;\n    this.angle = 0;\n    this.angleChangeRatio = 0.03;\n    this.controls = new _Controls__WEBPACK_IMPORTED_MODULE_0__.Controls();\n  }\n\n  _createClass(Car, [{\n    key: \"update\",\n    value: function update() {\n      _classPrivateMethodGet(this, _move, _move2).call(this);\n    }\n  }, {\n    key: \"draw\",\n    value: function draw(ctx) {\n      if (ctx) {\n        ctx.save();\n        ctx.translate(this.x, this.y);\n        ctx.rotate(this.angle);\n        ctx.beginPath();\n        ctx.rect(-this.w / 2, -this.h / 2, this.w, this.h);\n        ctx.fill();\n        ctx.restore();\n      }\n    }\n  }]);\n\n  return Car;\n}();\n\nfunction _move2() {\n  // Vertical handling\n  if (this.controls.forward) {\n    this.speed += this.acceleration;\n  }\n\n  if (this.controls.reverse) {\n    this.speed -= this.acceleration;\n  }\n\n  if (this.speed > this.maxSpeed) {\n    this.speed = this.maxSpeed;\n  }\n\n  if (this.speed < -this.maxSpeed * this.reverseSpeedRatio) {\n    this.speed = -this.maxSpeed * this.reverseSpeedRatio;\n  }\n\n  if (this.speed > 0) {\n    this.speed -= this.friction;\n  }\n\n  if (this.speed < 0) {\n    this.speed += this.friction;\n  }\n\n  if (Math.abs(this.speed) < this.friction) {\n    this.speed = 0;\n  }\n\n  this.y -= Math.cos(this.angle) * this.speed; // Horizontal handling\n\n  if (this.speed !== 0) {\n    var direction = this.speed > 0 ? 1 : -1;\n\n    if (this.controls.left) {\n      this.angle -= this.angleChangeRatio * direction;\n    }\n\n    if (this.controls.right) {\n      this.angle += this.angleChangeRatio * direction;\n    }\n  }\n\n  this.x += Math.sin(this.angle) * this.speed;\n}\n\n//# sourceURL=webpack://a_car/./src/Car.ts?");

/***/ }),

/***/ "./src/Controls.ts":
/*!*************************!*\
  !*** ./src/Controls.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Controls\": () => (/* binding */ Controls)\n/* harmony export */ });\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }\n\nfunction _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError(\"Cannot initialize the same private elements twice on an object\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError(\"attempted to get private field on non-instance\"); } return fn; }\n\nvar _addKeyboardListeners = /*#__PURE__*/new WeakSet();\n\nvar Controls = /*#__PURE__*/_createClass(function Controls() {\n  _classCallCheck(this, Controls);\n\n  _classPrivateMethodInitSpec(this, _addKeyboardListeners);\n\n  _defineProperty(this, \"forward\", void 0);\n\n  _defineProperty(this, \"reverse\", void 0);\n\n  _defineProperty(this, \"left\", void 0);\n\n  _defineProperty(this, \"right\", void 0);\n\n  this.forward = false;\n  this.reverse = false;\n  this.left = false;\n  this.right = false;\n\n  _classPrivateMethodGet(this, _addKeyboardListeners, _addKeyboardListeners2).call(this);\n});\n\nfunction _addKeyboardListeners2() {\n  var _this = this;\n\n  document.onkeydown = function (e) {\n    switch (e.key) {\n      case \"ArrowLeft\":\n        _this.left = true;\n        break;\n\n      case \"ArrowRight\":\n        _this.right = true;\n        break;\n\n      case \"ArrowUp\":\n        _this.forward = true;\n        break;\n\n      case \"ArrowDown\":\n        _this.reverse = true;\n        break;\n    }\n  };\n\n  document.onkeyup = function (e) {\n    switch (e.key) {\n      case \"ArrowLeft\":\n        _this.left = false;\n        break;\n\n      case \"ArrowRight\":\n        _this.right = false;\n        break;\n\n      case \"ArrowUp\":\n        _this.forward = false;\n        break;\n\n      case \"ArrowDown\":\n        _this.reverse = false;\n        break;\n    }\n  };\n}\n\n//# sourceURL=webpack://a_car/./src/Controls.ts?");

/***/ }),

/***/ "./src/Road.ts":
/*!*********************!*\
  !*** ./src/Road.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Road\": () => (/* binding */ Road)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar Road = /*#__PURE__*/function () {\n  function Road(x, w) {\n    var lc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;\n\n    _classCallCheck(this, Road);\n\n    _defineProperty(this, \"x\", void 0);\n\n    _defineProperty(this, \"w\", void 0);\n\n    _defineProperty(this, \"l\", void 0);\n\n    _defineProperty(this, \"r\", void 0);\n\n    _defineProperty(this, \"t\", void 0);\n\n    _defineProperty(this, \"b\", void 0);\n\n    _defineProperty(this, \"laneCount\", void 0);\n\n    _defineProperty(this, \"borders\", void 0);\n\n    var inf = 100000000;\n    this.x = x;\n    this.w = w;\n    this.laneCount = lc;\n    this.l = x - w / 2;\n    this.r = x + w / 2;\n    this.t = -inf;\n    this.b = inf;\n    var topLeft = {\n      x: this.l,\n      y: this.t\n    };\n    var topRight = {\n      x: this.r,\n      y: this.t\n    };\n    var bottomLeft = {\n      x: this.l,\n      y: this.b\n    };\n    var bottomRight = {\n      x: this.r,\n      y: this.b\n    };\n    this.borders = [[topLeft, bottomLeft], [topRight, bottomRight]];\n  }\n\n  _createClass(Road, [{\n    key: \"getLaneCenter\",\n    value: function getLaneCenter(i) {\n      var w = this.w / this.laneCount;\n      return this.l + w / 2 + Math.min(i, this.laneCount - 1) * w;\n    }\n  }, {\n    key: \"draw\",\n    value: function draw(ctx) {\n      if (ctx) {\n        ctx.lineWidth = 5;\n        ctx.strokeStyle = \"white\";\n\n        for (var i = 0; i <= this.laneCount - 1; i++) {\n          var x = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.lerp)(this.l, this.r, i / this.laneCount);\n          ctx.setLineDash([30, 25]);\n          ctx.beginPath();\n          ctx.moveTo(x, this.t);\n          ctx.lineTo(x, this.b);\n          ctx.stroke();\n        }\n\n        ctx.setLineDash([]);\n        this.borders.forEach(function (b) {\n          ctx.beginPath();\n          ctx.moveTo(b[0].x, b[0].y);\n          ctx.lineTo(b[1].x, b[1].y);\n          ctx.stroke();\n        });\n      }\n    }\n  }]);\n\n  return Road;\n}();\n\n//# sourceURL=webpack://a_car/./src/Road.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Car */ \"./src/Car.ts\");\n/* harmony import */ var _Road__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Road */ \"./src/Road.ts\");\n\n\nvar canvas = document.getElementById(\"canvas\");\ncanvas.width = 300;\nvar ctx = canvas.getContext(\"2d\");\nvar road = new _Road__WEBPACK_IMPORTED_MODULE_1__.Road(canvas.width / 2, canvas.width * 0.9);\nvar car = new _Car__WEBPACK_IMPORTED_MODULE_0__.Car(road.getLaneCenter(1), 100, 30, 50);\n\nvar animate = function animate() {\n  if (ctx) {\n    car.update();\n    canvas.height = window.innerHeight;\n    ctx.save();\n    ctx.translate(0, -car.y + canvas.height * 0.7); // Positioning car by vertical (0 to 1).\n\n    road.draw(ctx);\n    car.draw(ctx);\n    ctx.restore();\n    requestAnimationFrame(animate);\n  }\n};\n\nanimate();\n\n//# sourceURL=webpack://a_car/./src/index.ts?");

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"lerp\": () => (/* binding */ lerp)\n/* harmony export */ });\nvar lerp = function lerp(a, b, t) {\n  return a + (b - a) * t;\n};\n\n//# sourceURL=webpack://a_car/./src/utils.ts?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;