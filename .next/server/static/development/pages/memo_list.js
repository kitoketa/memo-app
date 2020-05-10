module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Account.js":
/*!*******************************!*\
  !*** ./components/Account.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\roone\\git\\memo-app\\components\\Account.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Account extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "style", {
      fontSize: "12pt",
      padding: "5px 10px"
    });

    this.login_check = this.login_check.bind(this);
  } // ログイン処理


  login() {
    let provider = new firebase__WEBPACK_IMPORTED_MODULE_2___default.a.auth.GoogleAuthProvider();
    var self = this;
    firebase__WEBPACK_IMPORTED_MODULE_2___default.a.auth().signInWithPopup(provider).then(result => {
      this.props.dispatch({
        type: 'UPDATE_USER',
        value: {
          login: true,
          username: result.user.displayName,
          email: result.user.email,
          data: this.props.data,
          items: this.props.items
        }
      });
      this.props.onLogined();
    });
  } // ログアウト処理


  logout() {
    console.log("logout");
    firebase__WEBPACK_IMPORTED_MODULE_2___default.a.auth().signOut();
    this.props.dispatch({
      type: 'UPDATE_USER',
      value: {
        login: false,
        username: '(click here!)',
        email: '',
        data: [],
        items: []
      }
    });
    this.props.onLogouted();
  } // login,loguoutの✓


  login_check() {
    if (this.props.login == false) {
      this.login();
    } else {
      this.logout();
    }
  } // レンダリング


  render() {
    return __jsx("p", {
      className: "login",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 7
      }
    }, __jsx("span", {
      className: "account",
      onClick: this.login_check,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }
    }, "LOGINED: ", this.props.username));
  }

}

Account = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(state => state)(Account);
/* harmony default export */ __webpack_exports__["default"] = (Account);

/***/ }),

/***/ "./components/MemoList.js":
/*!********************************!*\
  !*** ./components/MemoList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_address_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/address_lib */ "./static/address_lib.js");
/* harmony import */ var _Account__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Account */ "./components/Account.js");
var _jsxFileName = "C:\\Users\\roone\\git\\memo-app\\components\\MemoList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class MemoList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "style", {
      fontSize: "12pt",
      padding: "5px 10px"
    });

    this.logined = this.logined.bind(this);
    this.logouted = this.logouted.bind(this);
  }

  logined() {
    this.getMemoList();
  }

  logouted() {
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');
  }

  getMemoList() {
    if (this.props.email == undefined || this.props.email == '') {
      return;
    }

    let email = _static_address_lib__WEBPACK_IMPORTED_MODULE_4__["default"].encodeEmail(this.props.email);
    let db = firebase__WEBPACK_IMPORTED_MODULE_3___default.a.database();
    let ref = db.ref('memo/');
    let self = this;
    ref.orderByKey().equalTo(email).on('value', snapshot => {
      let d = _static_address_lib__WEBPACK_IMPORTED_MODULE_4__["default"].deepcopy(snapshot.val());
      this.props.dispatch({
        type: 'UPDATE_USER',
        value: {
          login: this.props.login,
          username: this.props.username,
          email: this.props.email,
          data: d,
          items: self.getItem(d)
        }
      });
    });
  }

  getItem(data) {
    if (data == undefined) {
      return;
    }

    let res = [];
    console.log(data);

    for (let i in data) {
      console.log(i);

      for (let j in data[i]) {
        console.log(data[i][j]);
        let id = data[i][j].id;
        let title = data[i][j].title;
        let body = data[i][j].body;
        res.push( // <li key={title} data-tag={body}>
        //     タイトル:{title}
        //     詳細:{body}
        // </li>)
        // <td>{title}<br>{body}</br></td>
        __jsx("table", {
          border: "1",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 17
          }
        }, __jsx("tbody", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 17
          }
        }, __jsx("tr", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 21
          }
        }, __jsx("td", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 25
          }
        }, title))), __jsx("tbody", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 17
          }
        }, __jsx("tr", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 21
          }
        }, __jsx("td", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 25
          }
        }, body)))));
      }

      break;
    }

    console.log(res);
    return res;
  }

  render() {
    const title = 'タイトル';
    const body = '詳細';
    const title2 = 'タイトル2';
    const body2 = '詳細2';
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 13
      }
    }, __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 17
      }
    }, "\u30E1\u30E2\u4E00\u89A7"), __jsx(_Account__WEBPACK_IMPORTED_MODULE_5__["default"], {
      self: this,
      onLogined: this.logined,
      onLogouted: this.logouted,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }
    }), __jsx("hr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 13
      }
    }), this.props.items);
  }

}

MemoList = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(state => state)(MemoList);
/* harmony default export */ __webpack_exports__["default"] = (MemoList);

/***/ }),

/***/ "./pages/memo_list.js":
/*!****************************!*\
  !*** ./pages/memo_list.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MemoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MemoList */ "./components/MemoList.js");
var _jsxFileName = "C:\\Users\\roone\\git\\memo-app\\pages\\memo_list.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(_components_MemoList__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}));

/***/ }),

/***/ "./static/address_lib.js":
/*!*******************************!*\
  !*** ./static/address_lib.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Lib {
  static deepcopy(val) {
    return JSON.parse(JSON.stringify(val));
  }

  static encodeEmail(val) {
    return val.split(".").join("*");
  }

  static decodeEmail(val) {
    return val.split("*").join(".");
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Lib);

/***/ }),

/***/ 5:
/*!**********************************!*\
  !*** multi ./pages/memo_list.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\roone\git\memo-app\pages\memo_list.js */"./pages/memo_list.js");


/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=memo_list.js.map