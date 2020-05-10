webpackHotUpdate("static\\development\\pages\\memo_list.js",{

/***/ "./components/MemoList.js":
/*!********************************!*\
  !*** ./components/MemoList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _static_address_lib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../static/address_lib */ "./static/address_lib.js");
/* harmony import */ var _Account__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Account */ "./components/Account.js");







var _jsxFileName = "C:\\Users\\roone\\git\\memo-app\\components\\MemoList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var MemoList = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(MemoList, _Component);

  var _super = _createSuper(MemoList);

  function MemoList(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MemoList);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "style", {
      fontSize: "12pt",
      padding: "5px 10px"
    });

    _this.logined = _this.logined.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.logouted = _this.logouted.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MemoList, [{
    key: "logined",
    value: function logined() {
      this.getMemoList();
    }
  }, {
    key: "logouted",
    value: function logouted() {
      next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/');
    }
  }, {
    key: "getMemoList",
    value: function getMemoList() {
      var _this2 = this;

      if (this.props.email == undefined || this.props.email == '') {
        return;
      }

      var email = _static_address_lib__WEBPACK_IMPORTED_MODULE_11__["default"].encodeEmail(this.props.email);
      var db = firebase__WEBPACK_IMPORTED_MODULE_10___default.a.database();
      var ref = db.ref('memo/');
      var self = this;
      ref.orderByKey().equalTo(email).on('value', function (snapshot) {
        var d = _static_address_lib__WEBPACK_IMPORTED_MODULE_11__["default"].deepcopy(snapshot.val());

        _this2.props.dispatch({
          type: 'UPDATE_USER',
          value: {
            login: _this2.props.login,
            username: _this2.props.username,
            email: _this2.props.email,
            data: d,
            items: self.getItem(d)
          }
        });
      });
    }
  }, {
    key: "getItem",
    value: function getItem(data) {
      if (data == undefined) {
        return;
      }

      var res = [];
      console.log(data);

      for (var i in data) {
        console.log(i);

        for (var j in data[i]) {
          console.log(data[i][j]);
          var id = data[i][j].id;
          var title = data[i][j].title;
          var body = data[i][j].body;
          res.push();
        }

        break;
      }

      console.log(res);
      return res;
    }
  }, {
    key: "render",
    value: function render() {
      var title = 'タイトル';
      var body = '詳細';
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 13
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 17
        }
      }, "\u30E1\u30E2\u4E00\u89A7"), __jsx(_Account__WEBPACK_IMPORTED_MODULE_12__["default"], {
        self: this,
        onLogined: this.logined,
        onLogouted: this.logouted,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 17
        }
      }), __jsx("hr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 13
        }
      }), __jsx("table", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 13
        }
      }, __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 17
        }
      }, title), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 17
        }
      }, body)), this.props.items);
    }
  }]);

  return MemoList;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

MemoList = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(function (state) {
  return state;
})(MemoList);
/* harmony default export */ __webpack_exports__["default"] = (MemoList);

/***/ })

})
//# sourceMappingURL=memo_list.js.26ee26247ff09ece1bbd.hot-update.js.map