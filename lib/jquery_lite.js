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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const DOMNodeCollection = __webpack_require__(1);

window.$l = function (input) {
  if (typeof input === "string") {
    return new DOMNodeCollection(
      Array.from(document.querySelectorAll(input))
    );
  } else if(input instanceof HTMLElement) {
    let elements = [];
    elements.push(input);
    return new DOMNodeCollection(elements);
  }
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class DOMNodeCollection {
  constructor(HTMLElements) {
    this.HTMLElements = HTMLElements;
  }

  html (string) {
    if (string !== undefined){
      this.HTMLElements.forEach((el) => {
        el.innerHTML = string;
      });
    } else {
      return this.HTMLElements[0].innerHTML;
    }
  }

  empty () {
    this.HTMLElements.forEach((el) => {
      el.innerHTML = "";
    });
  }

  append (input) {
    this.HTMLElements.forEach( (el) => {
      el.innerHTML += input;
    });
  }

  attr (attrName, value) {
    if (value === undefined) {
    const arr = [];
      return this.HTMLElements[0].getAttribute(attrName);
    } else {
      this.HTMLElements.forEach((el) => {
        el.setAttribute(attrName,value);
      });
    }
  }

  addClass(className) {
    const currClass = this.attr("class");
    this.attr("class",`${currClass} ${className}`);
  }

  removeClass(className) {
    const currClass = this.attr("class");
    let sepClasses = currClass.split(" ");
    let ans = sepClasses.filter((el) => el !== className );
    this.attr("class", ans.join(" "));
  }

  children() {
      return new DOMNodeCollection(this.HTMLElements[0].children);
  }

  parent(){
    return new DOMNodeCollection(this.HTMLElements[0].parentNode);
  }

  find(selector) {
    return new DOMNodeCollection(this.HTMLElements[0].querySelectorAll(selector));
  }

  remove() {
    this.parent().HTMLElements.removeChild(this.HTMLElements[0]);
  }

  on(event, callback){
    this.HTMLElements.forEach((el) => {

    });


  }
}


module.exports = DOMNodeCollection;


/***/ })
/******/ ]);