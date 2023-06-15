(self["webpackChunkng_able_pro"] = self["webpackChunkng_able_pro"] || []).push([["src_app_demo_ui-elements_ui-adv_adv-alert_adv-alert_module_ts"],{

/***/ 14576:
/*!*******************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-adv/adv-alert/adv-alert-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdvAlertRoutingModule": () => (/* binding */ AdvAlertRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _adv_alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adv-alert.component */ 74482);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _adv_alert_component__WEBPACK_IMPORTED_MODULE_0__.AdvAlertComponent
    }
];
class AdvAlertRoutingModule {
}
AdvAlertRoutingModule.ɵfac = function AdvAlertRoutingModule_Factory(t) { return new (t || AdvAlertRoutingModule)(); };
AdvAlertRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AdvAlertRoutingModule });
AdvAlertRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AdvAlertRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 74482:
/*!**************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-adv/adv-alert/adv-alert.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdvAlertComponent": () => (/* binding */ AdvAlertComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2/src/sweetalert2.scss */ 10039);
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ 59453);
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../theme/shared/components/card/card.component */ 84631);




class AdvAlertComponent {
    constructor() { }
    ngOnInit() { }
    basicSwal() {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1___default().fire('', 'Hello world!');
    }
    successSwal() {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1___default().fire('Good job!', 'You clicked the button!', 'success');
    }
    warningSwal() {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1___default().fire('Good job!', 'You clicked the button!', 'warning');
    }
    dangerSwal() {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1___default().fire('Good job!', 'You clicked the button!', 'error');
    }
    infoSwal() {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1___default().fire('Good job!', 'You clicked the button!', 'info');
    }
    confirmAlert() {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1___default().fire({
            title: 'Are you sure?',
            text: 'Once deleted, you will not be able to recover this imaginary file!',
            type: 'warning',
            showCloseButton: true,
            showCancelButton: true
        }).then((willDelete) => {
            if (willDelete.dismiss) {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1___default().fire('', 'Your imaginary file is safe!', 'error');
            }
            else {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1___default().fire('', 'Poof! Your imaginary file has been deleted!', 'success');
            }
        });
    }
    promptAlert() {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1___default().fire({
            text: 'Write something here:',
            input: 'text'
        }).then((result) => {
            if (result.value) {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1___default().fire('', `You typed: ${result.value}`);
            }
        });
    }
    ajaxAlert() {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1___default().fire({
            text: 'Submit your Github username',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Look up',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                return fetch(`//api.github.com/users/${login}`)
                    .then((response) => {
                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }
                    return response.json();
                })
                    .catch((error) => {
                    sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1___default().showValidationMessage(`Request failed: ${error}`);
                });
            },
            allowOutsideClick: () => !sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1___default().isLoading()
        }).then((result) => {
            if (result.value) {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    title: `${result.value.login}'s avatar`,
                    imageUrl: result.value.avatar_url
                });
            }
        });
    }
}
AdvAlertComponent.ɵfac = function AdvAlertComponent_Factory(t) { return new (t || AdvAlertComponent)(); };
AdvAlertComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AdvAlertComponent, selectors: [["app-adv-alert"]], decls: 19, vars: 0, consts: [[1, "row", "btn-page"], [1, "col-sm-12"], ["cardTitle", "Alerts"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-success", 3, "click"], ["type", "button", 1, "btn", "btn-warning", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["type", "button", 1, "btn", "btn-info", 3, "click"]], template: function AdvAlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "app-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdvAlertComponent_Template_button_click_3_listener() { return ctx.basicSwal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdvAlertComponent_Template_button_click_5_listener() { return ctx.successSwal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdvAlertComponent_Template_button_click_7_listener() { return ctx.warningSwal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdvAlertComponent_Template_button_click_9_listener() { return ctx.dangerSwal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdvAlertComponent_Template_button_click_11_listener() { return ctx.infoSwal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdvAlertComponent_Template_button_click_13_listener() { return ctx.confirmAlert(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Success or Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdvAlertComponent_Template_button_click_15_listener() { return ctx.promptAlert(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Prompt");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdvAlertComponent_Template_button_click_17_listener() { return ctx.ajaxAlert(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Ajax");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, directives: [_theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__.CardComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZHYtYWxlcnQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 47605:
/*!***********************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-adv/adv-alert/adv-alert.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdvAlertModule": () => (/* binding */ AdvAlertModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _adv_alert_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adv-alert-routing.module */ 14576);
/* harmony import */ var _adv_alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adv-alert.component */ 74482);
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ 95702);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class AdvAlertModule {
}
AdvAlertModule.ɵfac = function AdvAlertModule_Factory(t) { return new (t || AdvAlertModule)(); };
AdvAlertModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AdvAlertModule });
AdvAlertModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _adv_alert_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdvAlertRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AdvAlertModule, { declarations: [_adv_alert_component__WEBPACK_IMPORTED_MODULE_1__.AdvAlertComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _adv_alert_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdvAlertRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ }),

/***/ 59453:
/*!******************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.js ***!
  \******************************************************/
/***/ (function(module) {

/*!
* sweetalert2 v9.17.2
* Released under the MIT License.
*/
(function (global, factory) {
   true ? module.exports = factory() :
  0;
}(this, function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  var consolePrefix = 'SweetAlert2:';
  /**
   * Filter the unique values into a new array
   * @param arr
   */

  var uniqueArray = function uniqueArray(arr) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
      if (result.indexOf(arr[i]) === -1) {
        result.push(arr[i]);
      }
    }

    return result;
  };
  /**
   * Capitalize the first letter of a string
   * @param str
   */

  var capitalizeFirstLetter = function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  /**
   * Returns the array of object values (Object.values isn't supported in IE11)
   * @param obj
   */

  var objectValues = function objectValues(obj) {
    return Object.keys(obj).map(function (key) {
      return obj[key];
    });
  };
  /**
   * Convert NodeList to Array
   * @param nodeList
   */

  var toArray = function toArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
  };
  /**
   * Standardise console warnings
   * @param message
   */

  var warn = function warn(message) {
    console.warn("".concat(consolePrefix, " ").concat(message));
  };
  /**
   * Standardise console errors
   * @param message
   */

  var error = function error(message) {
    console.error("".concat(consolePrefix, " ").concat(message));
  };
  /**
   * Private global state for `warnOnce`
   * @type {Array}
   * @private
   */

  var previousWarnOnceMessages = [];
  /**
   * Show a console warning, but only if it hasn't already been shown
   * @param message
   */

  var warnOnce = function warnOnce(message) {
    if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
      previousWarnOnceMessages.push(message);
      warn(message);
    }
  };
  /**
   * Show a one-time console warning about deprecated params/methods
   */

  var warnAboutDepreation = function warnAboutDepreation(deprecatedParam, useInstead) {
    warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
  };
  /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   * @param arg
   */

  var callIfFunction = function callIfFunction(arg) {
    return typeof arg === 'function' ? arg() : arg;
  };
  var hasToPromiseFn = function hasToPromiseFn(arg) {
    return arg && typeof arg.toPromise === 'function';
  };
  var asPromise = function asPromise(arg) {
    return hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
  };
  var isPromise = function isPromise(arg) {
    return arg && Promise.resolve(arg) === arg;
  };

  var DismissReason = Object.freeze({
    cancel: 'cancel',
    backdrop: 'backdrop',
    close: 'close',
    esc: 'esc',
    timer: 'timer'
  });

  var isJqueryElement = function isJqueryElement(elem) {
    return _typeof(elem) === 'object' && elem.jquery;
  };

  var isElement = function isElement(elem) {
    return elem instanceof Element || isJqueryElement(elem);
  };

  var argsToParams = function argsToParams(args) {
    var params = {};

    if (_typeof(args[0]) === 'object' && !isElement(args[0])) {
      _extends(params, args[0]);
    } else {
      ['title', 'html', 'icon'].forEach(function (name, index) {
        var arg = args[index];

        if (typeof arg === 'string' || isElement(arg)) {
          params[name] = arg;
        } else if (arg !== undefined) {
          error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(_typeof(arg)));
        }
      });
    }

    return params;
  };

  var swalPrefix = 'swal2-';
  var prefix = function prefix(items) {
    var result = {};

    for (var i in items) {
      result[items[i]] = swalPrefix + items[i];
    }

    return result;
  };
  var swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'toast-column', 'show', 'hide', 'close', 'title', 'header', 'content', 'html-container', 'actions', 'confirm', 'cancel', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error']);
  var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

  var getContainer = function getContainer() {
    return document.body.querySelector(".".concat(swalClasses.container));
  };
  var elementBySelector = function elementBySelector(selectorString) {
    var container = getContainer();
    return container ? container.querySelector(selectorString) : null;
  };

  var elementByClass = function elementByClass(className) {
    return elementBySelector(".".concat(className));
  };

  var getPopup = function getPopup() {
    return elementByClass(swalClasses.popup);
  };
  var getIcons = function getIcons() {
    var popup = getPopup();
    return toArray(popup.querySelectorAll(".".concat(swalClasses.icon)));
  };
  var getIcon = function getIcon() {
    var visibleIcon = getIcons().filter(function (icon) {
      return isVisible(icon);
    });
    return visibleIcon.length ? visibleIcon[0] : null;
  };
  var getTitle = function getTitle() {
    return elementByClass(swalClasses.title);
  };
  var getContent = function getContent() {
    return elementByClass(swalClasses.content);
  };
  var getHtmlContainer = function getHtmlContainer() {
    return elementByClass(swalClasses['html-container']);
  };
  var getImage = function getImage() {
    return elementByClass(swalClasses.image);
  };
  var getProgressSteps = function getProgressSteps() {
    return elementByClass(swalClasses['progress-steps']);
  };
  var getValidationMessage = function getValidationMessage() {
    return elementByClass(swalClasses['validation-message']);
  };
  var getConfirmButton = function getConfirmButton() {
    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm));
  };
  var getCancelButton = function getCancelButton() {
    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel));
  };
  var getActions = function getActions() {
    return elementByClass(swalClasses.actions);
  };
  var getHeader = function getHeader() {
    return elementByClass(swalClasses.header);
  };
  var getFooter = function getFooter() {
    return elementByClass(swalClasses.footer);
  };
  var getTimerProgressBar = function getTimerProgressBar() {
    return elementByClass(swalClasses['timer-progress-bar']);
  };
  var getCloseButton = function getCloseButton() {
    return elementByClass(swalClasses.close);
  }; // https://github.com/jkup/focusable/blob/master/index.js

  var focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";
  var getFocusableElements = function getFocusableElements() {
    var focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
    .sort(function (a, b) {
      a = parseInt(a.getAttribute('tabindex'));
      b = parseInt(b.getAttribute('tabindex'));

      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      }

      return 0;
    });
    var otherFocusableElements = toArray(getPopup().querySelectorAll(focusable)).filter(function (el) {
      return el.getAttribute('tabindex') !== '-1';
    });
    return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(function (el) {
      return isVisible(el);
    });
  };
  var isModal = function isModal() {
    return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
  };
  var isToast = function isToast() {
    return document.body.classList.contains(swalClasses['toast-shown']);
  };
  var isLoading = function isLoading() {
    return getPopup().hasAttribute('data-loading');
  };

  var states = {
    previousBodyPadding: null
  };
  var setInnerHtml = function setInnerHtml(elem, html) {
    // #1926
    elem.textContent = '';

    if (html) {
      var parser = new DOMParser();
      var parsed = parser.parseFromString(html, "text/html");
      toArray(parsed.querySelector('head').childNodes).forEach(function (child) {
        elem.appendChild(child);
      });
      toArray(parsed.querySelector('body').childNodes).forEach(function (child) {
        elem.appendChild(child);
      });
    }
  };
  var hasClass = function hasClass(elem, className) {
    if (!className) {
      return false;
    }

    var classList = className.split(/\s+/);

    for (var i = 0; i < classList.length; i++) {
      if (!elem.classList.contains(classList[i])) {
        return false;
      }
    }

    return true;
  };

  var removeCustomClasses = function removeCustomClasses(elem, params) {
    toArray(elem.classList).forEach(function (className) {
      if (!(objectValues(swalClasses).indexOf(className) !== -1) && !(objectValues(iconTypes).indexOf(className) !== -1) && !(objectValues(params.showClass).indexOf(className) !== -1)) {
        elem.classList.remove(className);
      }
    });
  };

  var applyCustomClass = function applyCustomClass(elem, params, className) {
    removeCustomClasses(elem, params);

    if (params.customClass && params.customClass[className]) {
      if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
        return warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(_typeof(params.customClass[className]), "\""));
      }

      addClass(elem, params.customClass[className]);
    }
  };
  function getInput(content, inputType) {
    if (!inputType) {
      return null;
    }

    switch (inputType) {
      case 'select':
      case 'textarea':
      case 'file':
        return getChildByClass(content, swalClasses[inputType]);

      case 'checkbox':
        return content.querySelector(".".concat(swalClasses.checkbox, " input"));

      case 'radio':
        return content.querySelector(".".concat(swalClasses.radio, " input:checked")) || content.querySelector(".".concat(swalClasses.radio, " input:first-child"));

      case 'range':
        return content.querySelector(".".concat(swalClasses.range, " input"));

      default:
        return getChildByClass(content, swalClasses.input);
    }
  }
  var focusInput = function focusInput(input) {
    input.focus(); // place cursor at end of text in text input

    if (input.type !== 'file') {
      // http://stackoverflow.com/a/2345915
      var val = input.value;
      input.value = '';
      input.value = val;
    }
  };
  var toggleClass = function toggleClass(target, classList, condition) {
    if (!target || !classList) {
      return;
    }

    if (typeof classList === 'string') {
      classList = classList.split(/\s+/).filter(Boolean);
    }

    classList.forEach(function (className) {
      if (target.forEach) {
        target.forEach(function (elem) {
          condition ? elem.classList.add(className) : elem.classList.remove(className);
        });
      } else {
        condition ? target.classList.add(className) : target.classList.remove(className);
      }
    });
  };
  var addClass = function addClass(target, classList) {
    toggleClass(target, classList, true);
  };
  var removeClass = function removeClass(target, classList) {
    toggleClass(target, classList, false);
  };
  var getChildByClass = function getChildByClass(elem, className) {
    for (var i = 0; i < elem.childNodes.length; i++) {
      if (hasClass(elem.childNodes[i], className)) {
        return elem.childNodes[i];
      }
    }
  };
  var applyNumericalStyle = function applyNumericalStyle(elem, property, value) {
    if (value || parseInt(value) === 0) {
      elem.style[property] = typeof value === 'number' ? "".concat(value, "px") : value;
    } else {
      elem.style.removeProperty(property);
    }
  };
  var show = function show(elem) {
    var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
    elem.style.opacity = '';
    elem.style.display = display;
  };
  var hide = function hide(elem) {
    elem.style.opacity = '';
    elem.style.display = 'none';
  };
  var toggle = function toggle(elem, condition, display) {
    condition ? show(elem, display) : hide(elem);
  }; // borrowed from jquery $(elem).is(':visible') implementation

  var isVisible = function isVisible(elem) {
    return !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
  };
  /* istanbul ignore next */

  var isScrollable = function isScrollable(elem) {
    return !!(elem.scrollHeight > elem.clientHeight);
  }; // borrowed from https://stackoverflow.com/a/46352119

  var hasCssAnimation = function hasCssAnimation(elem) {
    var style = window.getComputedStyle(elem);
    var animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
    var transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
    return animDuration > 0 || transDuration > 0;
  };
  var contains = function contains(haystack, needle) {
    if (typeof haystack.contains === 'function') {
      return haystack.contains(needle);
    }
  };
  var animateTimerProgressBar = function animateTimerProgressBar(timer) {
    var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var timerProgressBar = getTimerProgressBar();

    if (isVisible(timerProgressBar)) {
      if (reset) {
        timerProgressBar.style.transition = 'none';
        timerProgressBar.style.width = '100%';
      }

      setTimeout(function () {
        timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
        timerProgressBar.style.width = '0%';
      }, 10);
    }
  };
  var stopTimerProgressBar = function stopTimerProgressBar() {
    var timerProgressBar = getTimerProgressBar();
    var timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = '100%';
    var timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    var timerProgressBarPercent = parseInt(timerProgressBarWidth / timerProgressBarFullWidth * 100);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
  };

  // Detect Node env
  var isNodeEnv = function isNodeEnv() {
    return typeof window === 'undefined' || typeof document === 'undefined';
  };

  var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <div class=\"").concat(swalClasses.header, "\">\n     <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.error, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.question, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.warning, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.info, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.success, "\"></div>\n     <img class=\"").concat(swalClasses.image, "\" />\n     <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n     <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.content, "\">\n     <div id=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses['html-container'], "\"></div>\n     <input class=\"").concat(swalClasses.input, "\" />\n     <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n     <div class=\"").concat(swalClasses.range, "\">\n       <input type=\"range\" />\n       <output></output>\n     </div>\n     <select class=\"").concat(swalClasses.select, "\"></select>\n     <div class=\"").concat(swalClasses.radio, "\"></div>\n     <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n       <input type=\"checkbox\" />\n       <span class=\"").concat(swalClasses.label, "\"></span>\n     </label>\n     <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n     <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   </div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\">OK</button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\">Cancel</button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar-container'], "\">\n     <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');

  var resetOldContainer = function resetOldContainer() {
    var oldContainer = getContainer();

    if (!oldContainer) {
      return false;
    }

    oldContainer.parentNode.removeChild(oldContainer);
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
    return true;
  };

  var oldInputVal; // IE11 workaround, see #1109 for details

  var resetValidationMessage = function resetValidationMessage(e) {
    if (Swal.isVisible() && oldInputVal !== e.target.value) {
      Swal.resetValidationMessage();
    }

    oldInputVal = e.target.value;
  };

  var addInputChangeListeners = function addInputChangeListeners() {
    var content = getContent();
    var input = getChildByClass(content, swalClasses.input);
    var file = getChildByClass(content, swalClasses.file);
    var range = content.querySelector(".".concat(swalClasses.range, " input"));
    var rangeOutput = content.querySelector(".".concat(swalClasses.range, " output"));
    var select = getChildByClass(content, swalClasses.select);
    var checkbox = content.querySelector(".".concat(swalClasses.checkbox, " input"));
    var textarea = getChildByClass(content, swalClasses.textarea);
    input.oninput = resetValidationMessage;
    file.onchange = resetValidationMessage;
    select.onchange = resetValidationMessage;
    checkbox.onchange = resetValidationMessage;
    textarea.oninput = resetValidationMessage;

    range.oninput = function (e) {
      resetValidationMessage(e);
      rangeOutput.value = range.value;
    };

    range.onchange = function (e) {
      resetValidationMessage(e);
      range.nextSibling.value = range.value;
    };
  };

  var getTarget = function getTarget(target) {
    return typeof target === 'string' ? document.querySelector(target) : target;
  };

  var setupAccessibility = function setupAccessibility(params) {
    var popup = getPopup();
    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

    if (!params.toast) {
      popup.setAttribute('aria-modal', 'true');
    }
  };

  var setupRTL = function setupRTL(targetElement) {
    if (window.getComputedStyle(targetElement).direction === 'rtl') {
      addClass(getContainer(), swalClasses.rtl);
    }
  };
  /*
   * Add modal + backdrop to DOM
   */


  var init = function init(params) {
    // Clean up the old popup container if it exists
    var oldContainerExisted = resetOldContainer();
    /* istanbul ignore if */

    if (isNodeEnv()) {
      error('SweetAlert2 requires document to initialize');
      return;
    }

    var container = document.createElement('div');
    container.className = swalClasses.container;

    if (oldContainerExisted) {
      addClass(container, swalClasses['no-transition']);
    }

    setInnerHtml(container, sweetHTML);
    var targetElement = getTarget(params.target);
    targetElement.appendChild(container);
    setupAccessibility(params);
    setupRTL(targetElement);
    addInputChangeListeners();
  };

  var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
    // DOM element
    if (param instanceof HTMLElement) {
      target.appendChild(param); // Object
    } else if (_typeof(param) === 'object') {
      handleObject(param, target); // Plain string
    } else if (param) {
      setInnerHtml(target, param);
    }
  };

  var handleObject = function handleObject(param, target) {
    // JQuery element(s)
    if (param.jquery) {
      handleJqueryElem(target, param); // For other objects use their string representation
    } else {
      setInnerHtml(target, param.toString());
    }
  };

  var handleJqueryElem = function handleJqueryElem(target, elem) {
    target.textContent = '';

    if (0 in elem) {
      for (var i = 0; (i in elem); i++) {
        target.appendChild(elem[i].cloneNode(true));
      }
    } else {
      target.appendChild(elem.cloneNode(true));
    }
  };

  var animationEndEvent = function () {
    // Prevent run in Node env

    /* istanbul ignore if */
    if (isNodeEnv()) {
      return false;
    }

    var testEl = document.createElement('div');
    var transEndEventNames = {
      WebkitAnimation: 'webkitAnimationEnd',
      OAnimation: 'oAnimationEnd oanimationend',
      animation: 'animationend'
    };

    for (var i in transEndEventNames) {
      if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
        return transEndEventNames[i];
      }
    }

    return false;
  }();

  // https://github.com/twbs/bootstrap/blob/master/js/src/modal.js

  var measureScrollbar = function measureScrollbar() {
    var scrollDiv = document.createElement('div');
    scrollDiv.className = swalClasses['scrollbar-measure'];
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };

  var renderActions = function renderActions(instance, params) {
    var actions = getActions();
    var confirmButton = getConfirmButton();
    var cancelButton = getCancelButton(); // Actions (buttons) wrapper

    if (!params.showConfirmButton && !params.showCancelButton) {
      hide(actions);
    } // Custom class


    applyCustomClass(actions, params, 'actions'); // Render confirm button

    renderButton(confirmButton, 'confirm', params); // render Cancel Button

    renderButton(cancelButton, 'cancel', params);

    if (params.buttonsStyling) {
      handleButtonsStyling(confirmButton, cancelButton, params);
    } else {
      removeClass([confirmButton, cancelButton], swalClasses.styled);
      confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
      cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
    }

    if (params.reverseButtons) {
      confirmButton.parentNode.insertBefore(cancelButton, confirmButton);
    }
  };

  function handleButtonsStyling(confirmButton, cancelButton, params) {
    addClass([confirmButton, cancelButton], swalClasses.styled); // Buttons background colors

    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
    }

    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
    } // Loading state


    if (!isLoading()) {
      var confirmButtonBackgroundColor = window.getComputedStyle(confirmButton).getPropertyValue('background-color');
      confirmButton.style.borderLeftColor = confirmButtonBackgroundColor;
      confirmButton.style.borderRightColor = confirmButtonBackgroundColor;
    }
  }

  function renderButton(button, buttonType, params) {
    toggle(button, params["show".concat(capitalizeFirstLetter(buttonType), "Button")], 'inline-block');
    setInnerHtml(button, params["".concat(buttonType, "ButtonText")]); // Set caption text

    button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")]); // ARIA label
    // Add buttons custom classes

    button.className = swalClasses[buttonType];
    applyCustomClass(button, params, "".concat(buttonType, "Button"));
    addClass(button, params["".concat(buttonType, "ButtonClass")]);
  }

  function handleBackdropParam(container, backdrop) {
    if (typeof backdrop === 'string') {
      container.style.background = backdrop;
    } else if (!backdrop) {
      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
    }
  }

  function handlePositionParam(container, position) {
    if (position in swalClasses) {
      addClass(container, swalClasses[position]);
    } else {
      warn('The "position" parameter is not valid, defaulting to "center"');
      addClass(container, swalClasses.center);
    }
  }

  function handleGrowParam(container, grow) {
    if (grow && typeof grow === 'string') {
      var growClass = "grow-".concat(grow);

      if (growClass in swalClasses) {
        addClass(container, swalClasses[growClass]);
      }
    }
  }

  var renderContainer = function renderContainer(instance, params) {
    var container = getContainer();

    if (!container) {
      return;
    }

    handleBackdropParam(container, params.backdrop);

    if (!params.backdrop && params.allowOutsideClick) {
      warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    }

    handlePositionParam(container, params.position);
    handleGrowParam(container, params.grow); // Custom class

    applyCustomClass(container, params, 'container'); // Set queue step attribute for getQueueStep() method

    var queueStep = document.body.getAttribute('data-swal2-queue-step');

    if (queueStep) {
      container.setAttribute('data-queue-step', queueStep);
      document.body.removeAttribute('data-swal2-queue-step');
    }
  };

  /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateProps = {
    promise: new WeakMap(),
    innerParams: new WeakMap(),
    domCache: new WeakMap()
  };

  var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
  var renderInput = function renderInput(instance, params) {
    var content = getContent();
    var innerParams = privateProps.innerParams.get(instance);
    var rerender = !innerParams || params.input !== innerParams.input;
    inputTypes.forEach(function (inputType) {
      var inputClass = swalClasses[inputType];
      var inputContainer = getChildByClass(content, inputClass); // set attributes

      setAttributes(inputType, params.inputAttributes); // set class

      inputContainer.className = inputClass;

      if (rerender) {
        hide(inputContainer);
      }
    });

    if (params.input) {
      if (rerender) {
        showInput(params);
      } // set custom class


      setCustomClass(params);
    }
  };

  var showInput = function showInput(params) {
    if (!renderInputType[params.input]) {
      return error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(params.input, "\""));
    }

    var inputContainer = getInputContainer(params.input);
    var input = renderInputType[params.input](inputContainer, params);
    show(input); // input autofocus

    setTimeout(function () {
      focusInput(input);
    });
  };

  var removeAttributes = function removeAttributes(input) {
    for (var i = 0; i < input.attributes.length; i++) {
      var attrName = input.attributes[i].name;

      if (!(['type', 'value', 'style'].indexOf(attrName) !== -1)) {
        input.removeAttribute(attrName);
      }
    }
  };

  var setAttributes = function setAttributes(inputType, inputAttributes) {
    var input = getInput(getContent(), inputType);

    if (!input) {
      return;
    }

    removeAttributes(input);

    for (var attr in inputAttributes) {
      // Do not set a placeholder for <input type="range">
      // it'll crash Edge, #1298
      if (inputType === 'range' && attr === 'placeholder') {
        continue;
      }

      input.setAttribute(attr, inputAttributes[attr]);
    }
  };

  var setCustomClass = function setCustomClass(params) {
    var inputContainer = getInputContainer(params.input);

    if (params.customClass) {
      addClass(inputContainer, params.customClass.input);
    }
  };

  var setInputPlaceholder = function setInputPlaceholder(input, params) {
    if (!input.placeholder || params.inputPlaceholder) {
      input.placeholder = params.inputPlaceholder;
    }
  };

  var getInputContainer = function getInputContainer(inputType) {
    var inputClass = swalClasses[inputType] ? swalClasses[inputType] : swalClasses.input;
    return getChildByClass(getContent(), inputClass);
  };

  var renderInputType = {};

  renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = function (input, params) {
    if (typeof params.inputValue === 'string' || typeof params.inputValue === 'number') {
      input.value = params.inputValue;
    } else if (!isPromise(params.inputValue)) {
      warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(_typeof(params.inputValue), "\""));
    }

    setInputPlaceholder(input, params);
    input.type = params.input;
    return input;
  };

  renderInputType.file = function (input, params) {
    setInputPlaceholder(input, params);
    return input;
  };

  renderInputType.range = function (range, params) {
    var rangeInput = range.querySelector('input');
    var rangeOutput = range.querySelector('output');
    rangeInput.value = params.inputValue;
    rangeInput.type = params.input;
    rangeOutput.value = params.inputValue;
    return range;
  };

  renderInputType.select = function (select, params) {
    select.textContent = '';

    if (params.inputPlaceholder) {
      var placeholder = document.createElement('option');
      setInnerHtml(placeholder, params.inputPlaceholder);
      placeholder.value = '';
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);
    }

    return select;
  };

  renderInputType.radio = function (radio) {
    radio.textContent = '';
    return radio;
  };

  renderInputType.checkbox = function (checkboxContainer, params) {
    var checkbox = getInput(getContent(), 'checkbox');
    checkbox.value = 1;
    checkbox.id = swalClasses.checkbox;
    checkbox.checked = Boolean(params.inputValue);
    var label = checkboxContainer.querySelector('span');
    setInnerHtml(label, params.inputPlaceholder);
    return checkboxContainer;
  };

  renderInputType.textarea = function (textarea, params) {
    textarea.value = params.inputValue;
    setInputPlaceholder(textarea, params);

    if ('MutationObserver' in window) {
      // #1699
      var initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
      var popupPadding = parseInt(window.getComputedStyle(getPopup()).paddingLeft) + parseInt(window.getComputedStyle(getPopup()).paddingRight);

      var outputsize = function outputsize() {
        var contentWidth = textarea.offsetWidth + popupPadding;

        if (contentWidth > initialPopupWidth) {
          getPopup().style.width = "".concat(contentWidth, "px");
        } else {
          getPopup().style.width = null;
        }
      };

      new MutationObserver(outputsize).observe(textarea, {
        attributes: true,
        attributeFilter: ['style']
      });
    }

    return textarea;
  };

  var renderContent = function renderContent(instance, params) {
    var content = getContent().querySelector("#".concat(swalClasses.content)); // Content as HTML

    if (params.html) {
      parseHtmlToContainer(params.html, content);
      show(content, 'block'); // Content as plain text
    } else if (params.text) {
      content.textContent = params.text;
      show(content, 'block'); // No content
    } else {
      hide(content);
    }

    renderInput(instance, params); // Custom class

    applyCustomClass(getContent(), params, 'content');
  };

  var renderFooter = function renderFooter(instance, params) {
    var footer = getFooter();
    toggle(footer, params.footer);

    if (params.footer) {
      parseHtmlToContainer(params.footer, footer);
    } // Custom class


    applyCustomClass(footer, params, 'footer');
  };

  var renderCloseButton = function renderCloseButton(instance, params) {
    var closeButton = getCloseButton();
    setInnerHtml(closeButton, params.closeButtonHtml); // Custom class

    applyCustomClass(closeButton, params, 'closeButton');
    toggle(closeButton, params.showCloseButton);
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
  };

  var renderIcon = function renderIcon(instance, params) {
    var innerParams = privateProps.innerParams.get(instance); // if the give icon already rendered, apply the custom class without re-rendering the icon

    if (innerParams && params.icon === innerParams.icon && getIcon()) {
      applyCustomClass(getIcon(), params, 'icon');
      return;
    }

    hideAllIcons();

    if (!params.icon) {
      return;
    }

    if (Object.keys(iconTypes).indexOf(params.icon) !== -1) {
      var icon = elementBySelector(".".concat(swalClasses.icon, ".").concat(iconTypes[params.icon]));
      show(icon); // Custom or default content

      setContent(icon, params);
      adjustSuccessIconBackgoundColor(); // Custom class

      applyCustomClass(icon, params, 'icon'); // Animate icon

      addClass(icon, params.showClass.icon);
    } else {
      error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
    }
  };

  var hideAllIcons = function hideAllIcons() {
    var icons = getIcons();

    for (var i = 0; i < icons.length; i++) {
      hide(icons[i]);
    }
  }; // Adjust success icon background color to match the popup background color


  var adjustSuccessIconBackgoundColor = function adjustSuccessIconBackgoundColor() {
    var popup = getPopup();
    var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

    for (var i = 0; i < successIconParts.length; i++) {
      successIconParts[i].style.backgroundColor = popupBackgroundColor;
    }
  };

  var setContent = function setContent(icon, params) {
    icon.textContent = '';

    if (params.iconHtml) {
      setInnerHtml(icon, iconContent(params.iconHtml));
    } else if (params.icon === 'success') {
      setInnerHtml(icon, "\n      <div class=\"swal2-success-circular-line-left\"></div>\n      <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n      <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n      <div class=\"swal2-success-circular-line-right\"></div>\n    ");
    } else if (params.icon === 'error') {
      setInnerHtml(icon, "\n      <span class=\"swal2-x-mark\">\n        <span class=\"swal2-x-mark-line-left\"></span>\n        <span class=\"swal2-x-mark-line-right\"></span>\n      </span>\n    ");
    } else {
      var defaultIconHtml = {
        question: '?',
        warning: '!',
        info: 'i'
      };
      setInnerHtml(icon, iconContent(defaultIconHtml[params.icon]));
    }
  };

  var iconContent = function iconContent(content) {
    return "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");
  };

  var renderImage = function renderImage(instance, params) {
    var image = getImage();

    if (!params.imageUrl) {
      return hide(image);
    }

    show(image, ''); // Src, alt

    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt); // Width, height

    applyNumericalStyle(image, 'width', params.imageWidth);
    applyNumericalStyle(image, 'height', params.imageHeight); // Class

    image.className = swalClasses.image;
    applyCustomClass(image, params, 'image');
  };

  var currentSteps = [];
  /*
   * Global function for chaining sweetAlert popups
   */

  var queue = function queue(steps) {
    var Swal = this;
    currentSteps = steps;

    var resetAndResolve = function resetAndResolve(resolve, value) {
      currentSteps = [];
      resolve(value);
    };

    var queueResult = [];
    return new Promise(function (resolve) {
      (function step(i, callback) {
        if (i < currentSteps.length) {
          document.body.setAttribute('data-swal2-queue-step', i);
          Swal.fire(currentSteps[i]).then(function (result) {
            if (typeof result.value !== 'undefined') {
              queueResult.push(result.value);
              step(i + 1, callback);
            } else {
              resetAndResolve(resolve, {
                dismiss: result.dismiss
              });
            }
          });
        } else {
          resetAndResolve(resolve, {
            value: queueResult
          });
        }
      })(0);
    });
  };
  /*
   * Global function for getting the index of current popup in queue
   */

  var getQueueStep = function getQueueStep() {
    return getContainer() && getContainer().getAttribute('data-queue-step');
  };
  /*
   * Global function for inserting a popup to the queue
   */

  var insertQueueStep = function insertQueueStep(step, index) {
    if (index && index < currentSteps.length) {
      return currentSteps.splice(index, 0, step);
    }

    return currentSteps.push(step);
  };
  /*
   * Global function for deleting a popup from the queue
   */

  var deleteQueueStep = function deleteQueueStep(index) {
    if (typeof currentSteps[index] !== 'undefined') {
      currentSteps.splice(index, 1);
    }
  };

  var createStepElement = function createStepElement(step) {
    var stepEl = document.createElement('li');
    addClass(stepEl, swalClasses['progress-step']);
    setInnerHtml(stepEl, step);
    return stepEl;
  };

  var createLineElement = function createLineElement(params) {
    var lineEl = document.createElement('li');
    addClass(lineEl, swalClasses['progress-step-line']);

    if (params.progressStepsDistance) {
      lineEl.style.width = params.progressStepsDistance;
    }

    return lineEl;
  };

  var renderProgressSteps = function renderProgressSteps(instance, params) {
    var progressStepsContainer = getProgressSteps();

    if (!params.progressSteps || params.progressSteps.length === 0) {
      return hide(progressStepsContainer);
    }

    show(progressStepsContainer);
    progressStepsContainer.textContent = '';
    var currentProgressStep = parseInt(params.currentProgressStep === undefined ? getQueueStep() : params.currentProgressStep);

    if (currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }

    params.progressSteps.forEach(function (step, index) {
      var stepEl = createStepElement(step);
      progressStepsContainer.appendChild(stepEl);

      if (index === currentProgressStep) {
        addClass(stepEl, swalClasses['active-progress-step']);
      }

      if (index !== params.progressSteps.length - 1) {
        var lineEl = createLineElement(params);
        progressStepsContainer.appendChild(lineEl);
      }
    });
  };

  var renderTitle = function renderTitle(instance, params) {
    var title = getTitle();
    toggle(title, params.title || params.titleText);

    if (params.title) {
      parseHtmlToContainer(params.title, title);
    }

    if (params.titleText) {
      title.innerText = params.titleText;
    } // Custom class


    applyCustomClass(title, params, 'title');
  };

  var renderHeader = function renderHeader(instance, params) {
    var header = getHeader(); // Custom class

    applyCustomClass(header, params, 'header'); // Progress steps

    renderProgressSteps(instance, params); // Icon

    renderIcon(instance, params); // Image

    renderImage(instance, params); // Title

    renderTitle(instance, params); // Close button

    renderCloseButton(instance, params);
  };

  var renderPopup = function renderPopup(instance, params) {
    var popup = getPopup(); // Width

    applyNumericalStyle(popup, 'width', params.width); // Padding

    applyNumericalStyle(popup, 'padding', params.padding); // Background

    if (params.background) {
      popup.style.background = params.background;
    } // Classes


    addClasses(popup, params);
  };

  var addClasses = function addClasses(popup, params) {
    // Default Class + showClass when updating Swal.update({})
    popup.className = "".concat(swalClasses.popup, " ").concat(isVisible(popup) ? params.showClass.popup : '');

    if (params.toast) {
      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
      addClass(popup, swalClasses.toast);
    } else {
      addClass(popup, swalClasses.modal);
    } // Custom class


    applyCustomClass(popup, params, 'popup');

    if (typeof params.customClass === 'string') {
      addClass(popup, params.customClass);
    } // Icon class (#1842)


    if (params.icon) {
      addClass(popup, swalClasses["icon-".concat(params.icon)]);
    }
  };

  var render = function render(instance, params) {
    renderPopup(instance, params);
    renderContainer(instance, params);
    renderHeader(instance, params);
    renderContent(instance, params);
    renderActions(instance, params);
    renderFooter(instance, params);

    if (typeof params.onRender === 'function') {
      params.onRender(getPopup());
    }
  };

  /*
   * Global function to determine if SweetAlert2 popup is shown
   */

  var isVisible$1 = function isVisible$$1() {
    return isVisible(getPopup());
  };
  /*
   * Global function to click 'Confirm' button
   */

  var clickConfirm = function clickConfirm() {
    return getConfirmButton() && getConfirmButton().click();
  };
  /*
   * Global function to click 'Cancel' button
   */

  var clickCancel = function clickCancel() {
    return getCancelButton() && getCancelButton().click();
  };

  function fire() {
    var Swal = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _construct(Swal, args);
  }

  /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param mixinParams
   */
  function mixin(mixinParams) {
    var MixinSwal = /*#__PURE__*/function (_this) {
      _inherits(MixinSwal, _this);

      var _super = _createSuper(MixinSwal);

      function MixinSwal() {
        _classCallCheck(this, MixinSwal);

        return _super.apply(this, arguments);
      }

      _createClass(MixinSwal, [{
        key: "_main",
        value: function _main(params) {
          return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, _extends({}, mixinParams, params));
        }
      }]);

      return MixinSwal;
    }(this);

    return MixinSwal;
  }

  /**
   * Show spinner instead of Confirm button
   */

  var showLoading = function showLoading() {
    var popup = getPopup();

    if (!popup) {
      Swal.fire();
    }

    popup = getPopup();
    var actions = getActions();
    var confirmButton = getConfirmButton();
    show(actions);
    show(confirmButton, 'inline-block');
    addClass([popup, actions], swalClasses.loading);
    confirmButton.disabled = true;
    popup.setAttribute('data-loading', true);
    popup.setAttribute('aria-busy', true);
    popup.focus();
  };

  var RESTORE_FOCUS_TIMEOUT = 100;

  var globalState = {};

  var focusPreviousActiveElement = function focusPreviousActiveElement() {
    if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    } else if (document.body) {
      document.body.focus();
    }
  }; // Restore previous active (focused) element


  var restoreActiveElement = function restoreActiveElement() {
    return new Promise(function (resolve) {
      var x = window.scrollX;
      var y = window.scrollY;
      globalState.restoreFocusTimeout = setTimeout(function () {
        focusPreviousActiveElement();
        resolve();
      }, RESTORE_FOCUS_TIMEOUT); // issues/900

      /* istanbul ignore if */

      if (typeof x !== 'undefined' && typeof y !== 'undefined') {
        // IE doesn't have scrollX/scrollY support
        window.scrollTo(x, y);
      }
    });
  };

  /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   */

  var getTimerLeft = function getTimerLeft() {
    return globalState.timeout && globalState.timeout.getTimerLeft();
  };
  /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var stopTimer = function stopTimer() {
    if (globalState.timeout) {
      stopTimerProgressBar();
      return globalState.timeout.stop();
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var resumeTimer = function resumeTimer() {
    if (globalState.timeout) {
      var remaining = globalState.timeout.start();
      animateTimerProgressBar(remaining);
      return remaining;
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var toggleTimer = function toggleTimer() {
    var timer = globalState.timeout;
    return timer && (timer.running ? stopTimer() : resumeTimer());
  };
  /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   */

  var increaseTimer = function increaseTimer(n) {
    if (globalState.timeout) {
      var remaining = globalState.timeout.increase(n);
      animateTimerProgressBar(remaining, true);
      return remaining;
    }
  };
  /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   */

  var isTimerRunning = function isTimerRunning() {
    return globalState.timeout && globalState.timeout.isRunning();
  };

  var defaultParams = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    icon: undefined,
    iconHtml: undefined,
    toast: false,
    animation: true,
    showClass: {
      popup: 'swal2-show',
      backdrop: 'swal2-backdrop-show',
      icon: 'swal2-icon-show'
    },
    hideClass: {
      popup: 'swal2-hide',
      backdrop: 'swal2-backdrop-hide',
      icon: 'swal2-icon-hide'
    },
    customClass: undefined,
    target: 'body',
    backdrop: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showCancelButton: false,
    preConfirm: undefined,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: undefined,
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: undefined,
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusCancel: false,
    showCloseButton: false,
    closeButtonHtml: '&times;',
    closeButtonAriaLabel: 'Close this dialog',
    showLoaderOnConfirm: false,
    imageUrl: undefined,
    imageWidth: undefined,
    imageHeight: undefined,
    imageAlt: '',
    timer: undefined,
    timerProgressBar: false,
    width: undefined,
    padding: undefined,
    background: undefined,
    input: undefined,
    inputPlaceholder: '',
    inputValue: '',
    inputOptions: {},
    inputAutoTrim: true,
    inputAttributes: {},
    inputValidator: undefined,
    validationMessage: undefined,
    grow: false,
    position: 'center',
    progressSteps: [],
    currentProgressStep: undefined,
    progressStepsDistance: undefined,
    onBeforeOpen: undefined,
    onOpen: undefined,
    onRender: undefined,
    onClose: undefined,
    onAfterClose: undefined,
    onDestroy: undefined,
    scrollbarPadding: true
  };
  var updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'footer', 'hideClass', 'html', 'icon', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'onAfterClose', 'onClose', 'onDestroy', 'progressSteps', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'text', 'title', 'titleText'];
  var deprecatedParams = {
    animation: 'showClass" and "hideClass'
  };
  var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusCancel', 'heightAuto', 'keydownListenerCapture'];
  /**
   * Is valid parameter
   * @param {String} paramName
   */

  var isValidParameter = function isValidParameter(paramName) {
    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
  };
  /**
   * Is valid parameter for Swal.update() method
   * @param {String} paramName
   */

  var isUpdatableParameter = function isUpdatableParameter(paramName) {
    return updatableParams.indexOf(paramName) !== -1;
  };
  /**
   * Is deprecated parameter
   * @param {String} paramName
   */

  var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
    return deprecatedParams[paramName];
  };

  var checkIfParamIsValid = function checkIfParamIsValid(param) {
    if (!isValidParameter(param)) {
      warn("Unknown parameter \"".concat(param, "\""));
    }
  };

  var checkIfToastParamIsValid = function checkIfToastParamIsValid(param) {
    if (toastIncompatibleParams.indexOf(param) !== -1) {
      warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
    }
  };

  var checkIfParamIsDeprecated = function checkIfParamIsDeprecated(param) {
    if (isDeprecatedParameter(param)) {
      warnAboutDepreation(param, isDeprecatedParameter(param));
    }
  };
  /**
   * Show relevant warnings for given params
   *
   * @param params
   */


  var showWarningsForParams = function showWarningsForParams(params) {
    for (var param in params) {
      checkIfParamIsValid(param);

      if (params.toast) {
        checkIfToastParamIsValid(param);
      }

      checkIfParamIsDeprecated(param);
    }
  };



  var staticMethods = /*#__PURE__*/Object.freeze({
    isValidParameter: isValidParameter,
    isUpdatableParameter: isUpdatableParameter,
    isDeprecatedParameter: isDeprecatedParameter,
    argsToParams: argsToParams,
    isVisible: isVisible$1,
    clickConfirm: clickConfirm,
    clickCancel: clickCancel,
    getContainer: getContainer,
    getPopup: getPopup,
    getTitle: getTitle,
    getContent: getContent,
    getHtmlContainer: getHtmlContainer,
    getImage: getImage,
    getIcon: getIcon,
    getIcons: getIcons,
    getCloseButton: getCloseButton,
    getActions: getActions,
    getConfirmButton: getConfirmButton,
    getCancelButton: getCancelButton,
    getHeader: getHeader,
    getFooter: getFooter,
    getTimerProgressBar: getTimerProgressBar,
    getFocusableElements: getFocusableElements,
    getValidationMessage: getValidationMessage,
    isLoading: isLoading,
    fire: fire,
    mixin: mixin,
    queue: queue,
    getQueueStep: getQueueStep,
    insertQueueStep: insertQueueStep,
    deleteQueueStep: deleteQueueStep,
    showLoading: showLoading,
    enableLoading: showLoading,
    getTimerLeft: getTimerLeft,
    stopTimer: stopTimer,
    resumeTimer: resumeTimer,
    toggleTimer: toggleTimer,
    increaseTimer: increaseTimer,
    isTimerRunning: isTimerRunning
  });

  /**
   * Enables buttons and hide loader.
   */

  function hideLoading() {
    // do nothing if popup is closed
    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return;
    }

    var domCache = privateProps.domCache.get(this);

    if (!innerParams.showConfirmButton) {
      hide(domCache.confirmButton);

      if (!innerParams.showCancelButton) {
        hide(domCache.actions);
      }
    }

    removeClass([domCache.popup, domCache.actions], swalClasses.loading);
    domCache.popup.removeAttribute('aria-busy');
    domCache.popup.removeAttribute('data-loading');
    domCache.confirmButton.disabled = false;
    domCache.cancelButton.disabled = false;
  }

  function getInput$1(instance) {
    var innerParams = privateProps.innerParams.get(instance || this);
    var domCache = privateProps.domCache.get(instance || this);

    if (!domCache) {
      return null;
    }

    return getInput(domCache.content, innerParams.input);
  }

  var fixScrollbar = function fixScrollbar() {
    // for queues, do not do this more than once
    if (states.previousBodyPadding !== null) {
      return;
    } // if the body has overflow


    if (document.body.scrollHeight > window.innerHeight) {
      // add padding so the content doesn't shift after removal of scrollbar
      states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
      document.body.style.paddingRight = "".concat(states.previousBodyPadding + measureScrollbar(), "px");
    }
  };
  var undoScrollbar = function undoScrollbar() {
    if (states.previousBodyPadding !== null) {
      document.body.style.paddingRight = "".concat(states.previousBodyPadding, "px");
      states.previousBodyPadding = null;
    }
  };

  /* istanbul ignore file */

  var iOSfix = function iOSfix() {
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

    if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
      var offset = document.body.scrollTop;
      document.body.style.top = "".concat(offset * -1, "px");
      addClass(document.body, swalClasses.iosfix);
      lockBodyScroll();
      addBottomPaddingForTallPopups(); // #1948
    }
  };

  var addBottomPaddingForTallPopups = function addBottomPaddingForTallPopups() {
    var safari = !navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i);

    if (safari) {
      var bottomPanelHeight = 44;

      if (getPopup().scrollHeight > window.innerHeight - bottomPanelHeight) {
        getContainer().style.paddingBottom = "".concat(bottomPanelHeight, "px");
      }
    }
  };

  var lockBodyScroll = function lockBodyScroll() {
    // #1246
    var container = getContainer();
    var preventTouchMove;

    container.ontouchstart = function (e) {
      preventTouchMove = shouldPreventTouchMove(e.target);
    };

    container.ontouchmove = function (e) {
      if (preventTouchMove) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
  };

  var shouldPreventTouchMove = function shouldPreventTouchMove(target) {
    var container = getContainer();

    if (target === container) {
      return true;
    }

    if (!isScrollable(container) && target.tagName !== 'INPUT' && // #1603
    !(isScrollable(getContent()) && // #1944
    getContent().contains(target))) {
      return true;
    }

    return false;
  };

  var undoIOSfix = function undoIOSfix() {
    if (hasClass(document.body, swalClasses.iosfix)) {
      var offset = parseInt(document.body.style.top, 10);
      removeClass(document.body, swalClasses.iosfix);
      document.body.style.top = '';
      document.body.scrollTop = offset * -1;
    }
  };

  /* istanbul ignore file */

  var isIE11 = function isIE11() {
    return !!window.MSInputMethodContext && !!document.documentMode;
  }; // Fix IE11 centering sweetalert2/issues/933


  var fixVerticalPositionIE = function fixVerticalPositionIE() {
    var container = getContainer();
    var popup = getPopup();
    container.style.removeProperty('align-items');

    if (popup.offsetTop < 0) {
      container.style.alignItems = 'flex-start';
    }
  };

  var IEfix = function IEfix() {
    if (typeof window !== 'undefined' && isIE11()) {
      fixVerticalPositionIE();
      window.addEventListener('resize', fixVerticalPositionIE);
    }
  };
  var undoIEfix = function undoIEfix() {
    if (typeof window !== 'undefined' && isIE11()) {
      window.removeEventListener('resize', fixVerticalPositionIE);
    }
  };

  // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
  // elements not within the active modal dialog will not be surfaced if a user opens a screen
  // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

  var setAriaHidden = function setAriaHidden() {
    var bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(function (el) {
      if (el === getContainer() || contains(el, getContainer())) {
        return;
      }

      if (el.hasAttribute('aria-hidden')) {
        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
      }

      el.setAttribute('aria-hidden', 'true');
    });
  };
  var unsetAriaHidden = function unsetAriaHidden() {
    var bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(function (el) {
      if (el.hasAttribute('data-previous-aria-hidden')) {
        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
        el.removeAttribute('data-previous-aria-hidden');
      } else {
        el.removeAttribute('aria-hidden');
      }
    });
  };

  /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateMethods = {
    swalPromiseResolve: new WeakMap()
  };

  /*
   * Instance method to close sweetAlert
   */

  function removePopupAndResetState(instance, container, isToast$$1, onAfterClose) {
    if (isToast$$1) {
      triggerOnAfterCloseAndDispose(instance, onAfterClose);
    } else {
      restoreActiveElement().then(function () {
        return triggerOnAfterCloseAndDispose(instance, onAfterClose);
      });
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (container.parentNode && !document.body.getAttribute('data-swal2-queue-step')) {
      container.parentNode.removeChild(container);
    }

    if (isModal()) {
      undoScrollbar();
      undoIOSfix();
      undoIEfix();
      unsetAriaHidden();
    }

    removeBodyClasses();
  }

  function removeBodyClasses() {
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['toast-column']]);
  }

  function close(resolveValue) {
    var popup = getPopup();

    if (!popup) {
      return;
    }

    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
      return;
    }

    var swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
    removeClass(popup, innerParams.showClass.popup);
    addClass(popup, innerParams.hideClass.popup);
    var backdrop = getContainer();
    removeClass(backdrop, innerParams.showClass.backdrop);
    addClass(backdrop, innerParams.hideClass.backdrop);
    handlePopupAnimation(this, popup, innerParams);

    if (typeof resolveValue !== 'undefined') {
      resolveValue.isDismissed = typeof resolveValue.dismiss !== 'undefined';
      resolveValue.isConfirmed = typeof resolveValue.dismiss === 'undefined';
    } else {
      resolveValue = {
        isDismissed: true,
        isConfirmed: false
      };
    } // Resolve Swal promise


    swalPromiseResolve(resolveValue || {});
  }

  var handlePopupAnimation = function handlePopupAnimation(instance, popup, innerParams) {
    var container = getContainer(); // If animation is supported, animate

    var animationIsSupported = animationEndEvent && hasCssAnimation(popup);
    var onClose = innerParams.onClose,
        onAfterClose = innerParams.onAfterClose;

    if (onClose !== null && typeof onClose === 'function') {
      onClose(popup);
    }

    if (animationIsSupported) {
      animatePopup(instance, popup, container, onAfterClose);
    } else {
      // Otherwise, remove immediately
      removePopupAndResetState(instance, container, isToast(), onAfterClose);
    }
  };

  var animatePopup = function animatePopup(instance, popup, container, onAfterClose) {
    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, isToast(), onAfterClose);
    popup.addEventListener(animationEndEvent, function (e) {
      if (e.target === popup) {
        globalState.swalCloseEventFinishedCallback();
        delete globalState.swalCloseEventFinishedCallback;
      }
    });
  };

  var triggerOnAfterCloseAndDispose = function triggerOnAfterCloseAndDispose(instance, onAfterClose) {
    setTimeout(function () {
      if (typeof onAfterClose === 'function') {
        onAfterClose();
      }

      instance._destroy();
    });
  };

  function setButtonsDisabled(instance, buttons, disabled) {
    var domCache = privateProps.domCache.get(instance);
    buttons.forEach(function (button) {
      domCache[button].disabled = disabled;
    });
  }

  function setInputDisabled(input, disabled) {
    if (!input) {
      return false;
    }

    if (input.type === 'radio') {
      var radiosContainer = input.parentNode.parentNode;
      var radios = radiosContainer.querySelectorAll('input');

      for (var i = 0; i < radios.length; i++) {
        radios[i].disabled = disabled;
      }
    } else {
      input.disabled = disabled;
    }
  }

  function enableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'cancelButton'], false);
  }
  function disableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'cancelButton'], true);
  }
  function enableInput() {
    return setInputDisabled(this.getInput(), false);
  }
  function disableInput() {
    return setInputDisabled(this.getInput(), true);
  }

  function showValidationMessage(error) {
    var domCache = privateProps.domCache.get(this);
    setInnerHtml(domCache.validationMessage, error);
    var popupComputedStyle = window.getComputedStyle(domCache.popup);
    domCache.validationMessage.style.marginLeft = "-".concat(popupComputedStyle.getPropertyValue('padding-left'));
    domCache.validationMessage.style.marginRight = "-".concat(popupComputedStyle.getPropertyValue('padding-right'));
    show(domCache.validationMessage);
    var input = this.getInput();

    if (input) {
      input.setAttribute('aria-invalid', true);
      input.setAttribute('aria-describedBy', swalClasses['validation-message']);
      focusInput(input);
      addClass(input, swalClasses.inputerror);
    }
  } // Hide block with validation message

  function resetValidationMessage$1() {
    var domCache = privateProps.domCache.get(this);

    if (domCache.validationMessage) {
      hide(domCache.validationMessage);
    }

    var input = this.getInput();

    if (input) {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedBy');
      removeClass(input, swalClasses.inputerror);
    }
  }

  function getProgressSteps$1() {
    var domCache = privateProps.domCache.get(this);
    return domCache.progressSteps;
  }

  var Timer = /*#__PURE__*/function () {
    function Timer(callback, delay) {
      _classCallCheck(this, Timer);

      this.callback = callback;
      this.remaining = delay;
      this.running = false;
      this.start();
    }

    _createClass(Timer, [{
      key: "start",
      value: function start() {
        if (!this.running) {
          this.running = true;
          this.started = new Date();
          this.id = setTimeout(this.callback, this.remaining);
        }

        return this.remaining;
      }
    }, {
      key: "stop",
      value: function stop() {
        if (this.running) {
          this.running = false;
          clearTimeout(this.id);
          this.remaining -= new Date() - this.started;
        }

        return this.remaining;
      }
    }, {
      key: "increase",
      value: function increase(n) {
        var running = this.running;

        if (running) {
          this.stop();
        }

        this.remaining += n;

        if (running) {
          this.start();
        }

        return this.remaining;
      }
    }, {
      key: "getTimerLeft",
      value: function getTimerLeft() {
        if (this.running) {
          this.stop();
          this.start();
        }

        return this.remaining;
      }
    }, {
      key: "isRunning",
      value: function isRunning() {
        return this.running;
      }
    }]);

    return Timer;
  }();

  var defaultInputValidators = {
    email: function email(string, validationMessage) {
      return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
    },
    url: function url(string, validationMessage) {
      // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
    }
  };

  function setDefaultInputValidators(params) {
    // Use default `inputValidator` for supported input types if not provided
    if (!params.inputValidator) {
      Object.keys(defaultInputValidators).forEach(function (key) {
        if (params.input === key) {
          params.inputValidator = defaultInputValidators[key];
        }
      });
    }
  }

  function validateCustomTargetElement(params) {
    // Determine if the custom target element is valid
    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
      warn('Target parameter is not valid, defaulting to "body"');
      params.target = 'body';
    }
  }
  /**
   * Set type, text and actions on popup
   *
   * @param params
   * @returns {boolean}
   */


  function setParameters(params) {
    setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm

    if (params.showLoaderOnConfirm && !params.preConfirm) {
      warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
    } // params.animation will be actually used in renderPopup.js
    // but in case when params.animation is a function, we need to call that function
    // before popup (re)initialization, so it'll be possible to check Swal.isVisible()
    // inside the params.animation function


    params.animation = callIfFunction(params.animation);
    validateCustomTargetElement(params); // Replace newlines with <br> in title

    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }

    init(params);
  }

  /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param {Array} params
   */

  var openPopup = function openPopup(params) {
    var container = getContainer();
    var popup = getPopup();

    if (typeof params.onBeforeOpen === 'function') {
      params.onBeforeOpen(popup);
    }

    var bodyStyles = window.getComputedStyle(document.body);
    var initialBodyOverflow = bodyStyles.overflowY;
    addClasses$1(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'

    setScrollingVisibility(container, popup);

    if (isModal()) {
      fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
      setAriaHidden();
    }

    if (!isToast() && !globalState.previousActiveElement) {
      globalState.previousActiveElement = document.activeElement;
    }

    if (typeof params.onOpen === 'function') {
      setTimeout(function () {
        return params.onOpen(popup);
      });
    }

    removeClass(container, swalClasses['no-transition']);
  };

  function swalOpenAnimationFinished(event) {
    var popup = getPopup();

    if (event.target !== popup) {
      return;
    }

    var container = getContainer();
    popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
    container.style.overflowY = 'auto';
  }

  var setScrollingVisibility = function setScrollingVisibility(container, popup) {
    if (animationEndEvent && hasCssAnimation(popup)) {
      container.style.overflowY = 'hidden';
      popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
    } else {
      container.style.overflowY = 'auto';
    }
  };

  var fixScrollContainer = function fixScrollContainer(container, scrollbarPadding, initialBodyOverflow) {
    iOSfix();
    IEfix();

    if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
      fixScrollbar();
    } // sweetalert2/issues/1247


    setTimeout(function () {
      container.scrollTop = 0;
    });
  };

  var addClasses$1 = function addClasses(container, popup, params) {
    addClass(container, params.showClass.backdrop);
    show(popup); // Animate popup right after showing it

    addClass(popup, params.showClass.popup);
    addClass([document.documentElement, document.body], swalClasses.shown);

    if (params.heightAuto && params.backdrop && !params.toast) {
      addClass([document.documentElement, document.body], swalClasses['height-auto']);
    }
  };

  var handleInputOptionsAndValue = function handleInputOptionsAndValue(instance, params) {
    if (params.input === 'select' || params.input === 'radio') {
      handleInputOptions(instance, params);
    } else if (['text', 'email', 'number', 'tel', 'textarea'].indexOf(params.input) !== -1 && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
      handleInputValue(instance, params);
    }
  };
  var getInputValue = function getInputValue(instance, innerParams) {
    var input = instance.getInput();

    if (!input) {
      return null;
    }

    switch (innerParams.input) {
      case 'checkbox':
        return getCheckboxValue(input);

      case 'radio':
        return getRadioValue(input);

      case 'file':
        return getFileValue(input);

      default:
        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
    }
  };

  var getCheckboxValue = function getCheckboxValue(input) {
    return input.checked ? 1 : 0;
  };

  var getRadioValue = function getRadioValue(input) {
    return input.checked ? input.value : null;
  };

  var getFileValue = function getFileValue(input) {
    return input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;
  };

  var handleInputOptions = function handleInputOptions(instance, params) {
    var content = getContent();

    var processInputOptions = function processInputOptions(inputOptions) {
      return populateInputOptions[params.input](content, formatInputOptions(inputOptions), params);
    };

    if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
      showLoading();
      asPromise(params.inputOptions).then(function (inputOptions) {
        instance.hideLoading();
        processInputOptions(inputOptions);
      });
    } else if (_typeof(params.inputOptions) === 'object') {
      processInputOptions(params.inputOptions);
    } else {
      error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(params.inputOptions)));
    }
  };

  var handleInputValue = function handleInputValue(instance, params) {
    var input = instance.getInput();
    hide(input);
    asPromise(params.inputValue).then(function (inputValue) {
      input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : "".concat(inputValue);
      show(input);
      input.focus();
      instance.hideLoading();
    })["catch"](function (err) {
      error("Error in inputValue promise: ".concat(err));
      input.value = '';
      show(input);
      input.focus();
      instance.hideLoading();
    });
  };

  var populateInputOptions = {
    select: function select(content, inputOptions, params) {
      var select = getChildByClass(content, swalClasses.select);

      var renderOption = function renderOption(parent, optionLabel, optionValue) {
        var option = document.createElement('option');
        option.value = optionValue;
        setInnerHtml(option, optionLabel);

        if (params.inputValue.toString() === optionValue.toString()) {
          option.selected = true;
        }

        parent.appendChild(option);
      };

      inputOptions.forEach(function (inputOption) {
        var optionValue = inputOption[0];
        var optionLabel = inputOption[1]; // <optgroup> spec:
        // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
        // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
        // check whether this is a <optgroup>

        if (Array.isArray(optionLabel)) {
          // if it is an array, then it is an <optgroup>
          var optgroup = document.createElement('optgroup');
          optgroup.label = optionValue;
          optgroup.disabled = false; // not configurable for now

          select.appendChild(optgroup);
          optionLabel.forEach(function (o) {
            return renderOption(optgroup, o[1], o[0]);
          });
        } else {
          // case of <option>
          renderOption(select, optionLabel, optionValue);
        }
      });
      select.focus();
    },
    radio: function radio(content, inputOptions, params) {
      var radio = getChildByClass(content, swalClasses.radio);
      inputOptions.forEach(function (inputOption) {
        var radioValue = inputOption[0];
        var radioLabel = inputOption[1];
        var radioInput = document.createElement('input');
        var radioLabelElement = document.createElement('label');
        radioInput.type = 'radio';
        radioInput.name = swalClasses.radio;
        radioInput.value = radioValue;

        if (params.inputValue.toString() === radioValue.toString()) {
          radioInput.checked = true;
        }

        var label = document.createElement('span');
        setInnerHtml(label, radioLabel);
        label.className = swalClasses.label;
        radioLabelElement.appendChild(radioInput);
        radioLabelElement.appendChild(label);
        radio.appendChild(radioLabelElement);
      });
      var radios = radio.querySelectorAll('input');

      if (radios.length) {
        radios[0].focus();
      }
    }
  };
  /**
   * Converts `inputOptions` into an array of `[value, label]`s
   * @param inputOptions
   */

  var formatInputOptions = function formatInputOptions(inputOptions) {
    var result = [];

    if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
      inputOptions.forEach(function (value, key) {
        var valueFormatted = value;

        if (_typeof(valueFormatted) === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    } else {
      Object.keys(inputOptions).forEach(function (key) {
        var valueFormatted = inputOptions[key];

        if (_typeof(valueFormatted) === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    }

    return result;
  };

  var handleConfirmButtonClick = function handleConfirmButtonClick(instance, innerParams) {
    instance.disableButtons();

    if (innerParams.input) {
      handleConfirmWithInput(instance, innerParams);
    } else {
      confirm(instance, innerParams, true);
    }
  };
  var handleCancelButtonClick = function handleCancelButtonClick(instance, dismissWith) {
    instance.disableButtons();
    dismissWith(DismissReason.cancel);
  };

  var handleConfirmWithInput = function handleConfirmWithInput(instance, innerParams) {
    var inputValue = getInputValue(instance, innerParams);

    if (innerParams.inputValidator) {
      instance.disableInput();
      var validationPromise = Promise.resolve().then(function () {
        return asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage));
      });
      validationPromise.then(function (validationMessage) {
        instance.enableButtons();
        instance.enableInput();

        if (validationMessage) {
          instance.showValidationMessage(validationMessage);
        } else {
          confirm(instance, innerParams, inputValue);
        }
      });
    } else if (!instance.getInput().checkValidity()) {
      instance.enableButtons();
      instance.showValidationMessage(innerParams.validationMessage);
    } else {
      confirm(instance, innerParams, inputValue);
    }
  };

  var succeedWith = function succeedWith(instance, value) {
    instance.closePopup({
      value: value
    });
  };

  var confirm = function confirm(instance, innerParams, value) {
    if (innerParams.showLoaderOnConfirm) {
      showLoading(); // TODO: make showLoading an *instance* method
    }

    if (innerParams.preConfirm) {
      instance.resetValidationMessage();
      var preConfirmPromise = Promise.resolve().then(function () {
        return asPromise(innerParams.preConfirm(value, innerParams.validationMessage));
      });
      preConfirmPromise.then(function (preConfirmValue) {
        if (isVisible(getValidationMessage()) || preConfirmValue === false) {
          instance.hideLoading();
        } else {
          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
        }
      });
    } else {
      succeedWith(instance, value);
    }
  };

  var addKeydownHandler = function addKeydownHandler(instance, globalState, innerParams, dismissWith) {
    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (!innerParams.toast) {
      globalState.keydownHandler = function (e) {
        return keydownHandler(instance, e, dismissWith);
      };

      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }
  }; // Focus handling

  var setFocus = function setFocus(innerParams, index, increment) {
    var focusableElements = getFocusableElements(); // search for visible elements and select the next possible match

    for (var i = 0; i < focusableElements.length; i++) {
      index = index + increment; // rollover to first item

      if (index === focusableElements.length) {
        index = 0; // go to last item
      } else if (index === -1) {
        index = focusableElements.length - 1;
      }

      return focusableElements[index].focus();
    } // no visible focusable elements, focus the popup


    getPopup().focus();
  };
  var arrowKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Left', 'Right', 'Up', 'Down' // IE11
  ];
  var escKeys = ['Escape', 'Esc' // IE11
  ];

  var keydownHandler = function keydownHandler(instance, e, dismissWith) {
    var innerParams = privateProps.innerParams.get(instance);

    if (innerParams.stopKeydownPropagation) {
      e.stopPropagation();
    } // ENTER


    if (e.key === 'Enter') {
      handleEnter(instance, e, innerParams); // TAB
    } else if (e.key === 'Tab') {
      handleTab(e, innerParams); // ARROWS - switch focus between buttons
    } else if (arrowKeys.indexOf(e.key) !== -1) {
      handleArrows(); // ESC
    } else if (escKeys.indexOf(e.key) !== -1) {
      handleEsc(e, innerParams, dismissWith);
    }
  };

  var handleEnter = function handleEnter(instance, e, innerParams) {
    // #720 #721
    if (e.isComposing) {
      return;
    }

    if (e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
      if (['textarea', 'file'].indexOf(innerParams.input) !== -1) {
        return; // do not submit
      }

      clickConfirm();
      e.preventDefault();
    }
  };

  var handleTab = function handleTab(e, innerParams) {
    var targetElement = e.target;
    var focusableElements = getFocusableElements();
    var btnIndex = -1;

    for (var i = 0; i < focusableElements.length; i++) {
      if (targetElement === focusableElements[i]) {
        btnIndex = i;
        break;
      }
    }

    if (!e.shiftKey) {
      // Cycle to the next button
      setFocus(innerParams, btnIndex, 1);
    } else {
      // Cycle to the prev button
      setFocus(innerParams, btnIndex, -1);
    }

    e.stopPropagation();
    e.preventDefault();
  };

  var handleArrows = function handleArrows() {
    var confirmButton = getConfirmButton();
    var cancelButton = getCancelButton(); // focus Cancel button if Confirm button is currently focused

    if (document.activeElement === confirmButton && isVisible(cancelButton)) {
      cancelButton.focus(); // and vice versa
    } else if (document.activeElement === cancelButton && isVisible(confirmButton)) {
      confirmButton.focus();
    }
  };

  var handleEsc = function handleEsc(e, innerParams, dismissWith) {
    if (callIfFunction(innerParams.allowEscapeKey)) {
      e.preventDefault();
      dismissWith(DismissReason.esc);
    }
  };

  var handlePopupClick = function handlePopupClick(instance, domCache, dismissWith) {
    var innerParams = privateProps.innerParams.get(instance);

    if (innerParams.toast) {
      handleToastClick(instance, domCache, dismissWith);
    } else {
      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup

      handleContainerMousedown(domCache);
      handleModalClick(instance, domCache, dismissWith);
    }
  };

  var handleToastClick = function handleToastClick(instance, domCache, dismissWith) {
    // Closing toast by internal click
    domCache.popup.onclick = function () {
      var innerParams = privateProps.innerParams.get(instance);

      if (innerParams.showConfirmButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.input) {
        return;
      }

      dismissWith(DismissReason.close);
    };
  };

  var ignoreOutsideClick = false;

  var handleModalMousedown = function handleModalMousedown(domCache) {
    domCache.popup.onmousedown = function () {
      domCache.container.onmouseup = function (e) {
        domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
        // have any other direct children aside of the popup

        if (e.target === domCache.container) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  var handleContainerMousedown = function handleContainerMousedown(domCache) {
    domCache.container.onmousedown = function () {
      domCache.popup.onmouseup = function (e) {
        domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

        if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  var handleModalClick = function handleModalClick(instance, domCache, dismissWith) {
    domCache.container.onclick = function (e) {
      var innerParams = privateProps.innerParams.get(instance);

      if (ignoreOutsideClick) {
        ignoreOutsideClick = false;
        return;
      }

      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
        dismissWith(DismissReason.backdrop);
      }
    };
  };

  function _main(userParams) {
    showWarningsForParams(userParams);

    if (globalState.currentInstance) {
      globalState.currentInstance._destroy();
    }

    globalState.currentInstance = this;
    var innerParams = prepareParams(userParams);
    setParameters(innerParams);
    Object.freeze(innerParams); // clear the previous timer

    if (globalState.timeout) {
      globalState.timeout.stop();
      delete globalState.timeout;
    } // clear the restore focus timeout


    clearTimeout(globalState.restoreFocusTimeout);
    var domCache = populateDomCache(this);
    render(this, innerParams);
    privateProps.innerParams.set(this, innerParams);
    return swalPromise(this, domCache, innerParams);
  }

  var prepareParams = function prepareParams(userParams) {
    var showClass = _extends({}, defaultParams.showClass, userParams.showClass);

    var hideClass = _extends({}, defaultParams.hideClass, userParams.hideClass);

    var params = _extends({}, defaultParams, userParams);

    params.showClass = showClass;
    params.hideClass = hideClass; // @deprecated

    if (userParams.animation === false) {
      params.showClass = {
        popup: 'swal2-noanimation',
        backdrop: 'swal2-noanimation'
      };
      params.hideClass = {};
    }

    return params;
  };

  var swalPromise = function swalPromise(instance, domCache, innerParams) {
    return new Promise(function (resolve) {
      // functions to handle all closings/dismissals
      var dismissWith = function dismissWith(dismiss) {
        instance.closePopup({
          dismiss: dismiss
        });
      };

      privateMethods.swalPromiseResolve.set(instance, resolve);

      domCache.confirmButton.onclick = function () {
        return handleConfirmButtonClick(instance, innerParams);
      };

      domCache.cancelButton.onclick = function () {
        return handleCancelButtonClick(instance, dismissWith);
      };

      domCache.closeButton.onclick = function () {
        return dismissWith(DismissReason.close);
      };

      handlePopupClick(instance, domCache, dismissWith);
      addKeydownHandler(instance, globalState, innerParams, dismissWith);

      if (innerParams.toast && (innerParams.input || innerParams.footer || innerParams.showCloseButton)) {
        addClass(document.body, swalClasses['toast-column']);
      } else {
        removeClass(document.body, swalClasses['toast-column']);
      }

      handleInputOptionsAndValue(instance, innerParams);
      openPopup(innerParams);
      setupTimer(globalState, innerParams, dismissWith);
      initFocus(domCache, innerParams); // Scroll container to top on open (#1247, #1946)

      setTimeout(function () {
        domCache.container.scrollTop = 0;
      });
    });
  };

  var populateDomCache = function populateDomCache(instance) {
    var domCache = {
      popup: getPopup(),
      container: getContainer(),
      content: getContent(),
      actions: getActions(),
      confirmButton: getConfirmButton(),
      cancelButton: getCancelButton(),
      closeButton: getCloseButton(),
      validationMessage: getValidationMessage(),
      progressSteps: getProgressSteps()
    };
    privateProps.domCache.set(instance, domCache);
    return domCache;
  };

  var setupTimer = function setupTimer(globalState$$1, innerParams, dismissWith) {
    var timerProgressBar = getTimerProgressBar();
    hide(timerProgressBar);

    if (innerParams.timer) {
      globalState$$1.timeout = new Timer(function () {
        dismissWith('timer');
        delete globalState$$1.timeout;
      }, innerParams.timer);

      if (innerParams.timerProgressBar) {
        show(timerProgressBar);
        setTimeout(function () {
          if (globalState$$1.timeout.running) {
            // timer can be already stopped at this point
            animateTimerProgressBar(innerParams.timer);
          }
        });
      }
    }
  };

  var initFocus = function initFocus(domCache, innerParams) {
    if (innerParams.toast) {
      return;
    }

    if (!callIfFunction(innerParams.allowEnterKey)) {
      return blurActiveElement();
    }

    if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
      return domCache.cancelButton.focus();
    }

    if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
      return domCache.confirmButton.focus();
    }

    setFocus(innerParams, -1, 1);
  };

  var blurActiveElement = function blurActiveElement() {
    if (document.activeElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
  };

  /**
   * Updates popup parameters.
   */

  function update(params) {
    var popup = getPopup();
    var innerParams = privateProps.innerParams.get(this);

    if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
      return warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
    }

    var validUpdatableParams = {}; // assign valid params from `params` to `defaults`

    Object.keys(params).forEach(function (param) {
      if (Swal.isUpdatableParameter(param)) {
        validUpdatableParams[param] = params[param];
      } else {
        warn("Invalid parameter to update: \"".concat(param, "\". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js"));
      }
    });

    var updatedParams = _extends({}, innerParams, validUpdatableParams);

    render(this, updatedParams);
    privateProps.innerParams.set(this, updatedParams);
    Object.defineProperties(this, {
      params: {
        value: _extends({}, this.params, params),
        writable: false,
        enumerable: true
      }
    });
  }

  function _destroy() {
    var domCache = privateProps.domCache.get(this);
    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return; // This instance has already been destroyed
    } // Check if there is another Swal closing


    if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    } // Check if there is a swal disposal defer timer


    if (globalState.deferDisposalTimer) {
      clearTimeout(globalState.deferDisposalTimer);
      delete globalState.deferDisposalTimer;
    }

    if (typeof innerParams.onDestroy === 'function') {
      innerParams.onDestroy();
    }

    disposeSwal(this);
  }

  var disposeSwal = function disposeSwal(instance) {
    // Unset this.params so GC will dispose it (#1569)
    delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)

    delete globalState.keydownHandler;
    delete globalState.keydownTarget; // Unset WeakMaps so GC will be able to dispose them (#1569)

    unsetWeakMaps(privateProps);
    unsetWeakMaps(privateMethods);
  };

  var unsetWeakMaps = function unsetWeakMaps(obj) {
    for (var i in obj) {
      obj[i] = new WeakMap();
    }
  };



  var instanceMethods = /*#__PURE__*/Object.freeze({
    hideLoading: hideLoading,
    disableLoading: hideLoading,
    getInput: getInput$1,
    close: close,
    closePopup: close,
    closeModal: close,
    closeToast: close,
    enableButtons: enableButtons,
    disableButtons: disableButtons,
    enableInput: enableInput,
    disableInput: disableInput,
    showValidationMessage: showValidationMessage,
    resetValidationMessage: resetValidationMessage$1,
    getProgressSteps: getProgressSteps$1,
    _main: _main,
    update: update,
    _destroy: _destroy
  });

  var currentInstance;

  var SweetAlert = /*#__PURE__*/function () {
    function SweetAlert() {
      _classCallCheck(this, SweetAlert);

      // Prevent run in Node env
      if (typeof window === 'undefined') {
        return;
      } // Check for the existence of Promise


      if (typeof Promise === 'undefined') {
        error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
      }

      currentInstance = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var outerParams = Object.freeze(this.constructor.argsToParams(args));
      Object.defineProperties(this, {
        params: {
          value: outerParams,
          writable: false,
          enumerable: true,
          configurable: true
        }
      });

      var promise = this._main(this.params);

      privateProps.promise.set(this, promise);
    } // `catch` cannot be the name of a module export, so we define our thenable methods here instead


    _createClass(SweetAlert, [{
      key: "then",
      value: function then(onFulfilled) {
        var promise = privateProps.promise.get(this);
        return promise.then(onFulfilled);
      }
    }, {
      key: "finally",
      value: function _finally(onFinally) {
        var promise = privateProps.promise.get(this);
        return promise["finally"](onFinally);
      }
    }]);

    return SweetAlert;
  }(); // Assign instance methods from src/instanceMethods/*.js to prototype


  _extends(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor


  _extends(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility


  Object.keys(instanceMethods).forEach(function (key) {
    SweetAlert[key] = function () {
      if (currentInstance) {
        var _currentInstance;

        return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
      }
    };
  });
  SweetAlert.DismissReason = DismissReason;
  SweetAlert.version = '9.17.2';

  var Swal = SweetAlert;
  Swal["default"] = Swal;

  return Swal;

}));
if (typeof this !== 'undefined' && this.Sweetalert2){  this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2}


/***/ }),

/***/ 10039:
/*!*******************************************************!*\
  !*** ./node_modules/sweetalert2/src/sweetalert2.scss ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".swal2-popup.swal2-toast {\n  flex-direction: row;\n  align-items: center;\n  width: auto;\n  padding: 0.625em;\n  overflow-y: hidden;\n  background: #fff;\n  box-shadow: 0 0 0.625em #d9d9d9;\n}\n.swal2-popup.swal2-toast .swal2-header {\n  flex-direction: row;\n  padding: 0;\n}\n.swal2-popup.swal2-toast .swal2-title {\n  flex-grow: 1;\n  justify-content: flex-start;\n  margin: 0 0.6em;\n  font-size: 1em;\n}\n.swal2-popup.swal2-toast .swal2-footer {\n  margin: 0.5em 0 0;\n  padding: 0.5em 0 0;\n  font-size: 0.8em;\n}\n.swal2-popup.swal2-toast .swal2-close {\n  position: static;\n  width: 0.8em;\n  height: 0.8em;\n  line-height: 0.8;\n}\n.swal2-popup.swal2-toast .swal2-content {\n  justify-content: flex-start;\n  padding: 0;\n  font-size: 1em;\n}\n.swal2-popup.swal2-toast .swal2-icon {\n  width: 2em;\n  min-width: 2em;\n  height: 2em;\n  margin: 0;\n}\n.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content {\n  display: flex;\n  align-items: center;\n  font-size: 1.8em;\n  font-weight: bold;\n}\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .swal2-popup.swal2-toast .swal2-icon .swal2-icon-content {\n    font-size: 0.25em;\n  }\n}\n.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring {\n  width: 2em;\n  height: 2em;\n}\n.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line] {\n  top: 0.875em;\n  width: 1.375em;\n}\n.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left] {\n  left: 0.3125em;\n}\n.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right] {\n  right: 0.3125em;\n}\n.swal2-popup.swal2-toast .swal2-actions {\n  flex-basis: auto !important;\n  width: auto;\n  height: auto;\n  margin: 0 0.3125em;\n}\n.swal2-popup.swal2-toast .swal2-styled {\n  margin: 0 0.3125em;\n  padding: 0.3125em 0.625em;\n  font-size: 1em;\n}\n.swal2-popup.swal2-toast .swal2-styled:focus {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 3px rgba(50, 100, 150, 0.4);\n}\n.swal2-popup.swal2-toast .swal2-success {\n  border-color: #a5dc86;\n}\n.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line] {\n  position: absolute;\n  width: 1.6em;\n  height: 3em;\n  transform: rotate(45deg);\n  border-radius: 50%;\n}\n.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left] {\n  top: -0.8em;\n  left: -0.5em;\n  transform: rotate(-45deg);\n  transform-origin: 2em 2em;\n  border-radius: 4em 0 0 4em;\n}\n.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right] {\n  top: -0.25em;\n  left: 0.9375em;\n  transform-origin: 0 1.5em;\n  border-radius: 0 4em 4em 0;\n}\n.swal2-popup.swal2-toast .swal2-success .swal2-success-ring {\n  width: 2em;\n  height: 2em;\n}\n.swal2-popup.swal2-toast .swal2-success .swal2-success-fix {\n  top: 0;\n  left: 0.4375em;\n  width: 0.4375em;\n  height: 2.6875em;\n}\n.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line] {\n  height: 0.3125em;\n}\n.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip] {\n  top: 1.125em;\n  left: 0.1875em;\n  width: 0.75em;\n}\n.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long] {\n  top: 0.9375em;\n  right: 0.1875em;\n  width: 1.375em;\n}\n.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip {\n  animation: swal2-toast-animate-success-line-tip 0.75s;\n}\n.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long {\n  animation: swal2-toast-animate-success-line-long 0.75s;\n}\n.swal2-popup.swal2-toast.swal2-show {\n  animation: swal2-toast-show 0.5s;\n}\n.swal2-popup.swal2-toast.swal2-hide {\n  animation: swal2-toast-hide 0.1s forwards;\n}\n.swal2-container {\n  display: flex;\n  position: fixed;\n  z-index: 1060;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  padding: 0.625em;\n  overflow-x: hidden;\n  transition: background-color 0.1s;\n  -webkit-overflow-scrolling: touch;\n}\n.swal2-container.swal2-backdrop-show, .swal2-container.swal2-noanimation {\n  background: rgba(0, 0, 0, 0.4);\n}\n.swal2-container.swal2-backdrop-hide {\n  background: transparent !important;\n}\n.swal2-container.swal2-top {\n  align-items: flex-start;\n}\n.swal2-container.swal2-top-start, .swal2-container.swal2-top-left {\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n.swal2-container.swal2-top-end, .swal2-container.swal2-top-right {\n  align-items: flex-start;\n  justify-content: flex-end;\n}\n.swal2-container.swal2-center {\n  align-items: center;\n}\n.swal2-container.swal2-center-start, .swal2-container.swal2-center-left {\n  align-items: center;\n  justify-content: flex-start;\n}\n.swal2-container.swal2-center-end, .swal2-container.swal2-center-right {\n  align-items: center;\n  justify-content: flex-end;\n}\n.swal2-container.swal2-bottom {\n  align-items: flex-end;\n}\n.swal2-container.swal2-bottom-start, .swal2-container.swal2-bottom-left {\n  align-items: flex-end;\n  justify-content: flex-start;\n}\n.swal2-container.swal2-bottom-end, .swal2-container.swal2-bottom-right {\n  align-items: flex-end;\n  justify-content: flex-end;\n}\n.swal2-container.swal2-bottom > :first-child, .swal2-container.swal2-bottom-start > :first-child, .swal2-container.swal2-bottom-left > :first-child, .swal2-container.swal2-bottom-end > :first-child, .swal2-container.swal2-bottom-right > :first-child {\n  margin-top: auto;\n}\n.swal2-container.swal2-grow-fullscreen > .swal2-modal {\n  display: flex !important;\n  flex: 1;\n  align-self: stretch;\n  justify-content: center;\n}\n.swal2-container.swal2-grow-row > .swal2-modal {\n  display: flex !important;\n  flex: 1;\n  align-content: center;\n  justify-content: center;\n}\n.swal2-container.swal2-grow-column {\n  flex: 1;\n  flex-direction: column;\n}\n.swal2-container.swal2-grow-column.swal2-top, .swal2-container.swal2-grow-column.swal2-center, .swal2-container.swal2-grow-column.swal2-bottom {\n  align-items: center;\n}\n.swal2-container.swal2-grow-column.swal2-top-start, .swal2-container.swal2-grow-column.swal2-center-start, .swal2-container.swal2-grow-column.swal2-bottom-start, .swal2-container.swal2-grow-column.swal2-top-left, .swal2-container.swal2-grow-column.swal2-center-left, .swal2-container.swal2-grow-column.swal2-bottom-left {\n  align-items: flex-start;\n}\n.swal2-container.swal2-grow-column.swal2-top-end, .swal2-container.swal2-grow-column.swal2-center-end, .swal2-container.swal2-grow-column.swal2-bottom-end, .swal2-container.swal2-grow-column.swal2-top-right, .swal2-container.swal2-grow-column.swal2-center-right, .swal2-container.swal2-grow-column.swal2-bottom-right {\n  align-items: flex-end;\n}\n.swal2-container.swal2-grow-column > .swal2-modal {\n  display: flex !important;\n  flex: 1;\n  align-content: center;\n  justify-content: center;\n}\n.swal2-container.swal2-no-transition {\n  transition: none !important;\n}\n.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen) > .swal2-modal {\n  margin: auto;\n}\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .swal2-container .swal2-modal {\n    margin: 0 !important;\n  }\n}\n.swal2-popup {\n  display: none;\n  position: relative;\n  box-sizing: border-box;\n  flex-direction: column;\n  justify-content: center;\n  width: 32em;\n  max-width: 100%;\n  padding: 1.25em;\n  border: none;\n  border-radius: 0.3125em;\n  background: #fff;\n  font-family: inherit;\n  font-size: 1rem;\n}\n.swal2-popup:focus {\n  outline: none;\n}\n.swal2-popup.swal2-loading {\n  overflow-y: hidden;\n}\n.swal2-header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0 1.8em;\n}\n.swal2-title {\n  position: relative;\n  max-width: 100%;\n  margin: 0 0 0.4em;\n  padding: 0;\n  color: #595959;\n  font-size: 1.875em;\n  font-weight: 600;\n  text-align: center;\n  text-transform: none;\n  word-wrap: break-word;\n}\n.swal2-actions {\n  display: flex;\n  z-index: 1;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  margin: 1.25em auto 0;\n}\n.swal2-actions:not(.swal2-loading) .swal2-styled[disabled] {\n  opacity: 0.4;\n}\n.swal2-actions:not(.swal2-loading) .swal2-styled:hover {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));\n}\n.swal2-actions:not(.swal2-loading) .swal2-styled:active {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));\n}\n.swal2-actions.swal2-loading .swal2-styled.swal2-confirm {\n  box-sizing: border-box;\n  width: 2.5em;\n  height: 2.5em;\n  margin: 0.46875em;\n  padding: 0;\n  animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n  border: 0.25em solid transparent;\n  border-radius: 100%;\n  border-color: transparent;\n  background-color: transparent !important;\n  color: transparent !important;\n  cursor: default;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.swal2-actions.swal2-loading .swal2-styled.swal2-cancel {\n  margin-right: 30px;\n  margin-left: 30px;\n}\n.swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after {\n  content: \"\";\n  display: inline-block;\n  width: 15px;\n  height: 15px;\n  margin-left: 5px;\n  animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n  border: 3px solid #999999;\n  border-radius: 50%;\n  border-right-color: transparent;\n  box-shadow: 1px 1px 1px #fff;\n}\n.swal2-styled {\n  margin: 0.3125em;\n  padding: 0.625em 2em;\n  box-shadow: none;\n  font-weight: 500;\n}\n.swal2-styled:not([disabled]) {\n  cursor: pointer;\n}\n.swal2-styled.swal2-confirm {\n  border: 0;\n  border-radius: 0.25em;\n  background: initial;\n  background-color: #3085d6;\n  color: #fff;\n  font-size: 1.0625em;\n}\n.swal2-styled.swal2-cancel {\n  border: 0;\n  border-radius: 0.25em;\n  background: initial;\n  background-color: #aaa;\n  color: #fff;\n  font-size: 1.0625em;\n}\n.swal2-styled:focus {\n  outline: none;\n  box-shadow: 0 0 0 1px #fff, 0 0 0 3px rgba(50, 100, 150, 0.4);\n}\n.swal2-styled::-moz-focus-inner {\n  border: 0;\n}\n.swal2-footer {\n  justify-content: center;\n  margin: 1.25em 0 0;\n  padding: 1em 0 0;\n  border-top: 1px solid #eee;\n  color: #545454;\n  font-size: 1em;\n}\n.swal2-timer-progress-bar-container {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 0.25em;\n  overflow: hidden;\n  border-bottom-right-radius: 0.3125em;\n  border-bottom-left-radius: 0.3125em;\n}\n.swal2-timer-progress-bar {\n  width: 100%;\n  height: 0.25em;\n  background: rgba(0, 0, 0, 0.2);\n}\n.swal2-image {\n  max-width: 100%;\n  margin: 1.25em auto;\n}\n.swal2-close {\n  position: absolute;\n  z-index: 2;\n  top: 0;\n  right: 0;\n  align-items: center;\n  justify-content: center;\n  width: 1.2em;\n  height: 1.2em;\n  padding: 0;\n  overflow: hidden;\n  transition: color 0.1s ease-out;\n  border: none;\n  border-radius: 0;\n  background: transparent;\n  color: #cccccc;\n  font-family: serif;\n  font-size: 2.5em;\n  line-height: 1.2;\n  cursor: pointer;\n}\n.swal2-close:hover {\n  transform: none;\n  background: transparent;\n  color: #f27474;\n}\n.swal2-close::-moz-focus-inner {\n  border: 0;\n}\n.swal2-content {\n  z-index: 1;\n  justify-content: center;\n  margin: 0;\n  padding: 0 1.6em;\n  color: #545454;\n  font-size: 1.125em;\n  font-weight: normal;\n  line-height: normal;\n  text-align: center;\n  word-wrap: break-word;\n}\n.swal2-input,\n.swal2-file,\n.swal2-textarea,\n.swal2-select,\n.swal2-radio,\n.swal2-checkbox {\n  margin: 1em auto;\n}\n.swal2-input,\n.swal2-file,\n.swal2-textarea {\n  box-sizing: border-box;\n  width: 100%;\n  transition: border-color 0.3s, box-shadow 0.3s;\n  border: 1px solid #d9d9d9;\n  border-radius: 0.1875em;\n  background: inherit;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06);\n  color: inherit;\n  font-size: 1.125em;\n}\n.swal2-input.swal2-inputerror,\n.swal2-file.swal2-inputerror,\n.swal2-textarea.swal2-inputerror {\n  border-color: #f27474 !important;\n  box-shadow: 0 0 2px #f27474 !important;\n}\n.swal2-input:focus,\n.swal2-file:focus,\n.swal2-textarea:focus {\n  border: 1px solid #b4dbed;\n  outline: none;\n  box-shadow: 0 0 3px #c4e6f5;\n}\n.swal2-input::placeholder,\n.swal2-file::placeholder,\n.swal2-textarea::placeholder {\n  color: #cccccc;\n}\n.swal2-range {\n  margin: 1em auto;\n  background: #fff;\n}\n.swal2-range input {\n  width: 80%;\n}\n.swal2-range output {\n  width: 20%;\n  color: inherit;\n  font-weight: 600;\n  text-align: center;\n}\n.swal2-range input,\n.swal2-range output {\n  height: 2.625em;\n  padding: 0;\n  font-size: 1.125em;\n  line-height: 2.625em;\n}\n.swal2-input {\n  height: 2.625em;\n  padding: 0 0.75em;\n}\n.swal2-input[type=number] {\n  max-width: 10em;\n}\n.swal2-file {\n  background: inherit;\n  font-size: 1.125em;\n}\n.swal2-textarea {\n  height: 6.75em;\n  padding: 0.75em;\n}\n.swal2-select {\n  min-width: 50%;\n  max-width: 100%;\n  padding: 0.375em 0.625em;\n  background: inherit;\n  color: inherit;\n  font-size: 1.125em;\n}\n.swal2-radio,\n.swal2-checkbox {\n  align-items: center;\n  justify-content: center;\n  background: #fff;\n  color: inherit;\n}\n.swal2-radio label,\n.swal2-checkbox label {\n  margin: 0 0.6em;\n  font-size: 1.125em;\n}\n.swal2-radio input,\n.swal2-checkbox input {\n  margin: 0 0.4em;\n}\n.swal2-validation-message {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  padding: 0.625em;\n  overflow: hidden;\n  background: #f0f0f0;\n  color: #666666;\n  font-size: 1em;\n  font-weight: 300;\n}\n.swal2-validation-message::before {\n  content: \"!\";\n  display: inline-block;\n  width: 1.5em;\n  min-width: 1.5em;\n  height: 1.5em;\n  margin: 0 0.625em;\n  border-radius: 50%;\n  background-color: #f27474;\n  color: #fff;\n  font-weight: 600;\n  line-height: 1.5em;\n  text-align: center;\n}\n.swal2-icon {\n  position: relative;\n  box-sizing: content-box;\n  justify-content: center;\n  width: 5em;\n  height: 5em;\n  margin: 1.25em auto 1.875em;\n  border: 0.25em solid transparent;\n  border-radius: 50%;\n  font-family: inherit;\n  line-height: 5em;\n  cursor: default;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.swal2-icon .swal2-icon-content {\n  display: flex;\n  align-items: center;\n  font-size: 3.75em;\n}\n.swal2-icon.swal2-error {\n  border-color: #f27474;\n  color: #f27474;\n}\n.swal2-icon.swal2-error .swal2-x-mark {\n  position: relative;\n  flex-grow: 1;\n}\n.swal2-icon.swal2-error [class^=swal2-x-mark-line] {\n  display: block;\n  position: absolute;\n  top: 2.3125em;\n  width: 2.9375em;\n  height: 0.3125em;\n  border-radius: 0.125em;\n  background-color: #f27474;\n}\n.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left] {\n  left: 1.0625em;\n  transform: rotate(45deg);\n}\n.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right] {\n  right: 1em;\n  transform: rotate(-45deg);\n}\n.swal2-icon.swal2-error.swal2-icon-show {\n  animation: swal2-animate-error-icon 0.5s;\n}\n.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark {\n  animation: swal2-animate-error-x-mark 0.5s;\n}\n.swal2-icon.swal2-warning {\n  border-color: #facea8;\n  color: #f8bb86;\n}\n.swal2-icon.swal2-info {\n  border-color: #9de0f6;\n  color: #3fc3ee;\n}\n.swal2-icon.swal2-question {\n  border-color: #c9dae1;\n  color: #87adbd;\n}\n.swal2-icon.swal2-success {\n  border-color: #a5dc86;\n  color: #a5dc86;\n}\n.swal2-icon.swal2-success [class^=swal2-success-circular-line] {\n  position: absolute;\n  width: 3.75em;\n  height: 7.5em;\n  transform: rotate(45deg);\n  border-radius: 50%;\n}\n.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left] {\n  top: -0.4375em;\n  left: -2.0635em;\n  transform: rotate(-45deg);\n  transform-origin: 3.75em 3.75em;\n  border-radius: 7.5em 0 0 7.5em;\n}\n.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right] {\n  top: -0.6875em;\n  left: 1.875em;\n  transform: rotate(-45deg);\n  transform-origin: 0 3.75em;\n  border-radius: 0 7.5em 7.5em 0;\n}\n.swal2-icon.swal2-success .swal2-success-ring {\n  position: absolute;\n  z-index: 2;\n  top: -0.25em;\n  left: -0.25em;\n  box-sizing: content-box;\n  width: 100%;\n  height: 100%;\n  border: 0.25em solid rgba(165, 220, 134, 0.3);\n  border-radius: 50%;\n}\n.swal2-icon.swal2-success .swal2-success-fix {\n  position: absolute;\n  z-index: 1;\n  top: 0.5em;\n  left: 1.625em;\n  width: 0.4375em;\n  height: 5.625em;\n  transform: rotate(-45deg);\n}\n.swal2-icon.swal2-success [class^=swal2-success-line] {\n  display: block;\n  position: absolute;\n  z-index: 2;\n  height: 0.3125em;\n  border-radius: 0.125em;\n  background-color: #a5dc86;\n}\n.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip] {\n  top: 2.875em;\n  left: 0.8125em;\n  width: 1.5625em;\n  transform: rotate(45deg);\n}\n.swal2-icon.swal2-success [class^=swal2-success-line][class$=long] {\n  top: 2.375em;\n  right: 0.5em;\n  width: 2.9375em;\n  transform: rotate(-45deg);\n}\n.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip {\n  animation: swal2-animate-success-line-tip 0.75s;\n}\n.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long {\n  animation: swal2-animate-success-line-long 0.75s;\n}\n.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right {\n  animation: swal2-rotate-success-circular-line 4.25s ease-in;\n}\n.swal2-progress-steps {\n  align-items: center;\n  margin: 0 0 1.25em;\n  padding: 0;\n  background: inherit;\n  font-weight: 600;\n}\n.swal2-progress-steps li {\n  display: inline-block;\n  position: relative;\n}\n.swal2-progress-steps .swal2-progress-step {\n  z-index: 20;\n  width: 2em;\n  height: 2em;\n  border-radius: 2em;\n  background: #3085d6;\n  color: #fff;\n  line-height: 2em;\n  text-align: center;\n}\n.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step {\n  background: #3085d6;\n}\n.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step ~ .swal2-progress-step {\n  background: #add8e6;\n  color: #fff;\n}\n.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step ~ .swal2-progress-step-line {\n  background: #add8e6;\n}\n.swal2-progress-steps .swal2-progress-step-line {\n  z-index: 10;\n  width: 2.5em;\n  height: 0.4em;\n  margin: 0 -1px;\n  background: #3085d6;\n}\n[class^=swal2] {\n  -webkit-tap-highlight-color: transparent;\n}\n.swal2-show {\n  animation: swal2-show 0.3s;\n}\n.swal2-hide {\n  animation: swal2-hide 0.15s forwards;\n}\n.swal2-noanimation {\n  transition: none;\n}\n.swal2-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n.swal2-rtl .swal2-close {\n  right: auto;\n  left: 0;\n}\n.swal2-rtl .swal2-timer-progress-bar {\n  right: 0;\n  left: auto;\n}\n@supports (-ms-accelerator: true) {\n  .swal2-range input {\n    width: 100% !important;\n  }\n  .swal2-range output {\n    display: none;\n  }\n}\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .swal2-range input {\n    width: 100% !important;\n  }\n  .swal2-range output {\n    display: none;\n  }\n}\n@-moz-document url-prefix() {\n  .swal2-close:focus {\n    outline: 2px solid rgba(50, 100, 150, 0.4);\n  }\n}\n@keyframes swal2-toast-show {\n  0% {\n    transform: translateY(-0.625em) rotateZ(2deg);\n  }\n  33% {\n    transform: translateY(0) rotateZ(-2deg);\n  }\n  66% {\n    transform: translateY(0.3125em) rotateZ(2deg);\n  }\n  100% {\n    transform: translateY(0) rotateZ(0deg);\n  }\n}\n@keyframes swal2-toast-hide {\n  100% {\n    transform: rotateZ(1deg);\n    opacity: 0;\n  }\n}\n@keyframes swal2-toast-animate-success-line-tip {\n  0% {\n    top: 0.5625em;\n    left: 0.0625em;\n    width: 0;\n  }\n  54% {\n    top: 0.125em;\n    left: 0.125em;\n    width: 0;\n  }\n  70% {\n    top: 0.625em;\n    left: -0.25em;\n    width: 1.625em;\n  }\n  84% {\n    top: 1.0625em;\n    left: 0.75em;\n    width: 0.5em;\n  }\n  100% {\n    top: 1.125em;\n    left: 0.1875em;\n    width: 0.75em;\n  }\n}\n@keyframes swal2-toast-animate-success-line-long {\n  0% {\n    top: 1.625em;\n    right: 1.375em;\n    width: 0;\n  }\n  65% {\n    top: 1.25em;\n    right: 0.9375em;\n    width: 0;\n  }\n  84% {\n    top: 0.9375em;\n    right: 0;\n    width: 1.125em;\n  }\n  100% {\n    top: 0.9375em;\n    right: 0.1875em;\n    width: 1.375em;\n  }\n}\n@keyframes swal2-show {\n  0% {\n    transform: scale(0.7);\n  }\n  45% {\n    transform: scale(1.05);\n  }\n  80% {\n    transform: scale(0.95);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes swal2-hide {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(0.5);\n    opacity: 0;\n  }\n}\n@keyframes swal2-animate-success-line-tip {\n  0% {\n    top: 1.1875em;\n    left: 0.0625em;\n    width: 0;\n  }\n  54% {\n    top: 1.0625em;\n    left: 0.125em;\n    width: 0;\n  }\n  70% {\n    top: 2.1875em;\n    left: -0.375em;\n    width: 3.125em;\n  }\n  84% {\n    top: 3em;\n    left: 1.3125em;\n    width: 1.0625em;\n  }\n  100% {\n    top: 2.8125em;\n    left: 0.8125em;\n    width: 1.5625em;\n  }\n}\n@keyframes swal2-animate-success-line-long {\n  0% {\n    top: 3.375em;\n    right: 2.875em;\n    width: 0;\n  }\n  65% {\n    top: 3.375em;\n    right: 2.875em;\n    width: 0;\n  }\n  84% {\n    top: 2.1875em;\n    right: 0;\n    width: 3.4375em;\n  }\n  100% {\n    top: 2.375em;\n    right: 0.5em;\n    width: 2.9375em;\n  }\n}\n@keyframes swal2-rotate-success-circular-line {\n  0% {\n    transform: rotate(-45deg);\n  }\n  5% {\n    transform: rotate(-45deg);\n  }\n  12% {\n    transform: rotate(-405deg);\n  }\n  100% {\n    transform: rotate(-405deg);\n  }\n}\n@keyframes swal2-animate-error-x-mark {\n  0% {\n    margin-top: 1.625em;\n    transform: scale(0.4);\n    opacity: 0;\n  }\n  50% {\n    margin-top: 1.625em;\n    transform: scale(0.4);\n    opacity: 0;\n  }\n  80% {\n    margin-top: -0.375em;\n    transform: scale(1.15);\n  }\n  100% {\n    margin-top: 0;\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes swal2-animate-error-icon {\n  0% {\n    transform: rotateX(100deg);\n    opacity: 0;\n  }\n  100% {\n    transform: rotateX(0deg);\n    opacity: 1;\n  }\n}\n@keyframes swal2-rotate-loading {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\nbody.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) {\n  overflow: hidden;\n}\nbody.swal2-height-auto {\n  height: auto !important;\n}\nbody.swal2-no-backdrop .swal2-container {\n  top: auto;\n  right: auto;\n  bottom: auto;\n  left: auto;\n  max-width: calc(100% - 0.625em * 2);\n  background-color: transparent !important;\n}\nbody.swal2-no-backdrop .swal2-container > .swal2-modal {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);\n}\nbody.swal2-no-backdrop .swal2-container.swal2-top {\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n}\nbody.swal2-no-backdrop .swal2-container.swal2-top-start, body.swal2-no-backdrop .swal2-container.swal2-top-left {\n  top: 0;\n  left: 0;\n}\nbody.swal2-no-backdrop .swal2-container.swal2-top-end, body.swal2-no-backdrop .swal2-container.swal2-top-right {\n  top: 0;\n  right: 0;\n}\nbody.swal2-no-backdrop .swal2-container.swal2-center {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\nbody.swal2-no-backdrop .swal2-container.swal2-center-start, body.swal2-no-backdrop .swal2-container.swal2-center-left {\n  top: 50%;\n  left: 0;\n  transform: translateY(-50%);\n}\nbody.swal2-no-backdrop .swal2-container.swal2-center-end, body.swal2-no-backdrop .swal2-container.swal2-center-right {\n  top: 50%;\n  right: 0;\n  transform: translateY(-50%);\n}\nbody.swal2-no-backdrop .swal2-container.swal2-bottom {\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n}\nbody.swal2-no-backdrop .swal2-container.swal2-bottom-start, body.swal2-no-backdrop .swal2-container.swal2-bottom-left {\n  bottom: 0;\n  left: 0;\n}\nbody.swal2-no-backdrop .swal2-container.swal2-bottom-end, body.swal2-no-backdrop .swal2-container.swal2-bottom-right {\n  right: 0;\n  bottom: 0;\n}\n@media print {\n  body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) {\n    overflow-y: scroll !important;\n  }\n  body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) > [aria-hidden=true] {\n    display: none;\n  }\n  body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container {\n    position: static !important;\n  }\n}\nbody.swal2-toast-shown .swal2-container {\n  background-color: transparent;\n}\nbody.swal2-toast-shown .swal2-container.swal2-top {\n  top: 0;\n  right: auto;\n  bottom: auto;\n  left: 50%;\n  transform: translateX(-50%);\n}\nbody.swal2-toast-shown .swal2-container.swal2-top-end, body.swal2-toast-shown .swal2-container.swal2-top-right {\n  top: 0;\n  right: 0;\n  bottom: auto;\n  left: auto;\n}\nbody.swal2-toast-shown .swal2-container.swal2-top-start, body.swal2-toast-shown .swal2-container.swal2-top-left {\n  top: 0;\n  right: auto;\n  bottom: auto;\n  left: 0;\n}\nbody.swal2-toast-shown .swal2-container.swal2-center-start, body.swal2-toast-shown .swal2-container.swal2-center-left {\n  top: 50%;\n  right: auto;\n  bottom: auto;\n  left: 0;\n  transform: translateY(-50%);\n}\nbody.swal2-toast-shown .swal2-container.swal2-center {\n  top: 50%;\n  right: auto;\n  bottom: auto;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\nbody.swal2-toast-shown .swal2-container.swal2-center-end, body.swal2-toast-shown .swal2-container.swal2-center-right {\n  top: 50%;\n  right: 0;\n  bottom: auto;\n  left: auto;\n  transform: translateY(-50%);\n}\nbody.swal2-toast-shown .swal2-container.swal2-bottom-start, body.swal2-toast-shown .swal2-container.swal2-bottom-left {\n  top: auto;\n  right: auto;\n  bottom: 0;\n  left: 0;\n}\nbody.swal2-toast-shown .swal2-container.swal2-bottom {\n  top: auto;\n  right: auto;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n}\nbody.swal2-toast-shown .swal2-container.swal2-bottom-end, body.swal2-toast-shown .swal2-container.swal2-bottom-right {\n  top: auto;\n  right: 0;\n  bottom: 0;\n  left: auto;\n}\nbody.swal2-toast-column .swal2-toast {\n  flex-direction: column;\n  align-items: stretch;\n}\nbody.swal2-toast-column .swal2-toast .swal2-actions {\n  flex: 1;\n  align-self: stretch;\n  height: 2.2em;\n  margin-top: 0.3125em;\n}\nbody.swal2-toast-column .swal2-toast .swal2-loading {\n  justify-content: center;\n}\nbody.swal2-toast-column .swal2-toast .swal2-input {\n  height: 2em;\n  margin: 0.3125em auto;\n  font-size: 1em;\n}\nbody.swal2-toast-column .swal2-toast .swal2-validation-message {\n  font-size: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjc3NcXF90b2FzdHMuc2NzcyIsInZhcmlhYmxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXElUJTIwU0hPUFxcRGVza3RvcFxccHJvamVjdCUyMHdpdGglMjByZWFkeSUyMHRlbXBsYXRlXFxmdWxsLXZlcnNpb25cXG5vZGVfbW9kdWxlc1xcc3dlZXRhbGVydDJcXHNyY1xcc3dlZXRhbGVydDIuc2NzcyIsInNjc3NcXF9taXhpbnMuc2NzcyIsInNjc3NcXF9jb3JlLnNjc3MiLCJzY3NzXFxfcG9seWZpbGxzLnNjc3MiLCJzY3NzXFxfdG9hc3RzLWFuaW1hdGlvbnMuc2NzcyIsInNjc3NcXF9hbmltYXRpb25zLnNjc3MiLCJzY3NzXFxfYm9keS5zY3NzIiwic2Nzc1xcX3RvYXN0cy1ib2R5LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0MrS2dCO0VEOUtoQixnQkMrS2tCO0VEOUtsQixrQkFBQTtFQUNBLGdCQ1BrQjtFRFFsQiwrQkNzS3FCO0FDdEt6QjtBRkVJO0VBQ0UsbUJBQUE7RUFDQSxVQ3lLdUI7QUN6SzdCO0FGR0k7RUFDRSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQ29LcUI7RURuS3JCLGNDb0t3QjtBQ3JLOUI7QUZJSTtFQUNFLGlCQ3VLc0I7RUR0S3RCLGtCQ3NLc0I7RURyS3RCLGdCQ3VLeUI7QUN6Sy9CO0FGS0k7RUFDRSxnQkFBQTtFQUNBLFlDa0oyQjtFRGpKM0IsYUNrSjRCO0VEako1QixnQkNrSmlDO0FDckp2QztBRk1JO0VBQ0UsMkJBQUE7RUFDQSxVQ21Kd0I7RURsSnhCLGNDbUowQjtBQ3ZKaEM7QUZPSTtFQUNFLFVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUVMTjtBRk9NO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBRUxSO0FDN0NFO0VIOENJO0lBT0ksaUJBQUE7RUVKUjtBQUNGO0FGUVE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBRU5WO0FGV1E7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBRVRWO0FGV1U7RUFDRSxjQUFBO0FFVFo7QUZZVTtFQUNFLGVBQUE7QUVWWjtBRmdCSTtFQUNFLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBRWROO0FGaUJJO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNDaUcwQjtBQ2hIaEM7QUZpQk07RUFDRSw2REMrRjhCO0FDOUd0QztBRm1CSTtFQUNFLHFCQzlEVTtBQzZDaEI7QUZtQk07RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtBRWpCUjtBRm1CUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FFakJWO0FGb0JRO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FFbEJWO0FGc0JNO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUVwQlI7QUZ1Qk07RUFDRSxNQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRXJCUjtBRndCTTtFQUNFLGdCQUFBO0FFdEJSO0FGd0JRO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FFdEJWO0FGeUJRO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FFdkJWO0FGNkJVO0VBQ0UscURBQUE7QUUzQlo7QUY4QlU7RUFDRSxzREFBQTtBRTVCWjtBRmtDSTtFQUNFLGdDQ0t1QjtBQ3JDN0I7QUZtQ0k7RUFDRSx5Q0NFdUI7QUNuQzdCO0FFeklBO0VBRUUsYUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCSFB3QjtFR1F4QixrQkFBQTtFQUNBLGlDSGEwQjtFR1YxQixpQ0FBQTtBRnlJRjtBRXZJRTtFQUVFLDhCSEthO0FDbUlqQjtBRXJJRTtFQUNFLGtDQUFBO0FGdUlKO0FFcElFO0VBQ0UsdUJBQUE7QUZzSUo7QUVuSUU7RUFFRSx1QkFBQTtFQUNBLDJCQUFBO0FGb0lKO0FFaklFO0VBRUUsdUJBQUE7RUFDQSx5QkFBQTtBRmtJSjtBRS9IRTtFQUNFLG1CQUFBO0FGaUlKO0FFOUhFO0VBRUUsbUJBQUE7RUFDQSwyQkFBQTtBRitISjtBRTVIRTtFQUVFLG1CQUFBO0VBQ0EseUJBQUE7QUY2SEo7QUUxSEU7RUFDRSxxQkFBQTtBRjRISjtBRXpIRTtFQUVFLHFCQUFBO0VBQ0EsMkJBQUE7QUYwSEo7QUV2SEU7RUFFRSxxQkFBQTtFQUNBLHlCQUFBO0FGd0hKO0FFckhFO0VBS0UsZ0JBQUE7QUZtSEo7QUVoSEU7RUFDRSx3QkFBQTtFQUNBLE9BQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FGa0hKO0FFL0dFO0VBQ0Usd0JBQUE7RUFDQSxPQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBRmlISjtBRTlHRTtFQUNFLE9BQUE7RUFDQSxzQkFBQTtBRmdISjtBRTlHSTtFQUdFLG1CQUFBO0FGOEdOO0FFM0dJO0VBTUUsdUJBQUE7QUZ3R047QUVyR0k7RUFNRSxxQkFBQTtBRmtHTjtBRS9GSTtFQUNFLHdCQUFBO0VBQ0EsT0FBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUZpR047QUU3RkU7RUFDRSwyQkFBQTtBRitGSjtBRTdFSTtFQUNFLFlBQUE7QUYrRU47QUN4T0U7RUM4SkU7SUFDRSxvQkFBQTtFRjZFSjtBQUNGO0FFekVBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0huS1k7RUdvS1osZUFBQTtFQUNBLGVIcEtjO0VHcUtkLFlIcEthO0VHcUtiLHVCSHBLb0I7RUdxS3BCLGdCSGhMb0I7RUdpTHBCLG9CSDNKVztFRzRKWCxlSDNKZ0I7QUN1T2xCO0FFMUVFO0VBQ0UsYUFBQTtBRjRFSjtBRXpFRTtFQUNFLGtCQUFBO0FGMkVKO0FFdkVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkhuS3FCO0FDNk92QjtBRXZFQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCSHRKbUI7RUd1Sm5CLFVBQUE7RUFDQSxjSHZKa0I7RUd3SmxCLGtCSHZKc0I7RUd3SnRCLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FGMEVGO0FFdkVBO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSxlSHJFd0I7RUdzRXhCLG1CSHJFMEI7RUdzRTFCLHVCSHJFOEI7RUdzRTlCLFdIckVvQjtFR3NFcEIscUJIckVxQjtBQytJdkI7QUV0RU07RUFDRSxZQUFBO0FGd0VSO0FFckVNO0VBQ0UseUVBQUE7QUZ1RVI7QUVwRU07RUFDRSx5RUFBQTtBRnNFUjtBRS9ETTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSw4REFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHdDQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBRmlFUjtBRTlETTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUZnRVI7QUUxRFE7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsOERBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtBRjREVjtBRXJEQTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FGd0RGO0FFdERFO0VBQ0UsZUFBQTtBRndESjtBRXJERTtFQUNFLFNIMUkwQjtFRzJJMUIscUJIMUlpQztFRzJJakMsbUJBQUE7RUFDQSx5QkgzSW9DO0VHNElwQyxXSHBTa0I7RUdxU2xCLG1CSDNJNkI7QUNrTWpDO0FFcERFO0VBQ0UsU0g1SXlCO0VHNkl6QixxQkg1SWdDO0VHNkloQyxtQkFBQTtFQUNBLHNCSDdJbUM7RUc4SW5DLFdIN1NrQjtFRzhTbEIsbUJIN0k0QjtBQ21NaEM7QUVuREU7RUFDRSxhSDVJeUI7RUc4SXpCLDZESDVJNEI7QUNnTWhDO0FFakRFO0VBQ0UsU0FBQTtBRm1ESjtBRS9DQTtFQUNFLHVCQUFBO0VBQ0Esa0JIaE5vQjtFR2lOcEIsZ0JIaE5xQjtFR2lOckIsMEJBQUE7RUFDQSxjSGhObUI7RUdpTm5CLGNIaE51QjtBQ2tRekI7QUUvQ0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGNIck5nQztFR3NOaEMsZ0JBQUE7RUFDQSxvQ0hqVW9CO0VHa1VwQixtQ0hsVW9CO0FDb1h0QjtBRS9DQTtFQUNFLFdBQUE7RUFDQSxjSDdOZ0M7RUc4TmhDLDhCSDdOb0M7QUMrUXRDO0FFL0NBO0VBQ0UsZUFBQTtFQUNBLG1CSDFTbUI7QUM0VnJCO0FFL0NBO0VBQ0Usa0JIOU40QjtFRytONUIsVUFBQTtFQUNBLE1IL051QjtFR2dPdkIsUUhoT3VCO0VHaU92QixtQkh2TytCO0VHd08vQix1Qkh2T21DO0VHd09uQyxZSHZPeUI7RUd3T3pCLGFIdk8wQjtFR3dPMUIsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JIdE84QjtFR3VPOUIsWUh0TzBCO0VHdU8xQixnQkh0T2lDO0VHd09qQyx1Qkh0TzhCO0VHdU85QixjSHRPeUI7RUd1T3pCLGtCSHRPK0I7RUd1Ty9CLGdCSHRPNkI7RUd1TzdCLGdCSGpQK0I7RUdrUC9CLGVBQUE7QUZpREY7QUUvQ0U7RUFDRSxlSHhPaUM7RUd5T2pDLHVCSHZPa0M7RUd3T2xDLGNIN1VVO0FDOFhkO0FFOUNFO0VBQ0UsU0FBQTtBRmdESjtBRTVDQTtFQUNFLFVBQUE7RUFDQSx1Qkh4VThCO0VHeVU5QixTSHhVcUI7RUd5VXJCLGdCSHhVc0I7RUd5VXRCLGNIeFVvQjtFR3lVcEIsa0JIeFV3QjtFR3lVeEIsbUJIeFUwQjtFR3lVMUIsbUJIeFUwQjtFR3lVMUIsa0JIeFV5QjtFR3lVekIscUJIeFV3QjtBQ3VYMUI7QUU1Q0E7Ozs7OztFQU1FLGdCSDlVbUI7QUM2WHJCO0FFNUNBOzs7RUFHRSxzQkFBQTtFQUNBLFdIcFZrQjtFR3FWbEIsOENIelV1QjtFRzBVdkIseUJIblZtQjtFR29WbkIsdUJIblYwQjtFR29WMUIsbUJIOVV1QjtFRytVdkIsK0NIcFZ1QjtFR3FWdkIsY0gvVWtCO0VHZ1ZsQixrQkhsVnNCO0FDaVl4QjtBRTdDRTs7O0VBQ0UsZ0NBQUE7RUFDQSxzQ0FBQTtBRmlESjtBRTlDRTs7O0VBQ0UseUJIN1Z1QjtFRzhWdkIsYUg3VndCO0VHOFZ4QiwyQkg3VjJCO0FDK1kvQjtBRS9DRTs7O0VBQ0UsY0FBQTtBRm1ESjtBRS9DQTtFQUNFLGdCSC9XbUI7RUdnWG5CLGdCSGpib0I7QUNtZXRCO0FFaERFO0VBQ0UsVUFBQTtBRmtESjtBRS9DRTtFQUNFLFVBQUE7RUFDQSxjSDVXZ0I7RUc2V2hCLGdCQUFBO0VBQ0Esa0JBQUE7QUZpREo7QUU5Q0U7O0VBRUUsZUg3WGlCO0VHOFhqQixVQUFBO0VBQ0Esa0JIdlhvQjtFR3dYcEIsb0JIaFlpQjtBQ2dickI7QUU1Q0E7RUFDRSxlSHJZbUI7RUdzWW5CLGlCSHJZb0I7QUNvYnRCO0FFN0NFO0VBQ0UsZUFBQTtBRitDSjtBRTNDQTtFQUNFLG1CSHJZdUI7RUdzWXZCLGtCSHZZc0I7QUNxYnhCO0FFM0NBO0VBQ0UsY0hyWXNCO0VHc1l0QixlSHJZdUI7QUNtYnpCO0FFM0NBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLG1CSGxadUI7RUdtWnZCLGNIbFprQjtFR21abEIsa0JIclpzQjtBQ21jeEI7QUUzQ0E7O0VBRUUsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCSHZlb0I7RUd3ZXBCLGNIM1prQjtBQ3ljcEI7QUU1Q0U7O0VBQ0UsZUFBQTtFQUNBLGtCSGphb0I7QUNnZHhCO0FFNUNFOztFQUNFLGVBQUE7QUYrQ0o7QUUzQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkhsYXlDO0VHbWF6QyxnQkhsYWlDO0VHbWFqQyxnQkFBQTtFQUNBLG1CSG5hb0M7RUdvYXBDLGNIbmErQjtFR29hL0IsY0huYW1DO0VHb2FuQyxnQkhuYXFDO0FDaWR2QztBRTVDRTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUVBLGtCQUFBO0VBQ0EseUJIamVVO0VHa2VWLFdIemdCa0I7RUcwZ0JsQixnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUY2Q0o7QUV6Q0E7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVSG5mZ0I7RUdvZmhCLFdIcGZnQjtFR3FmaEIsMkJIbmZrQjtFR3FmbEIsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG9CSC9ldUI7RUdnZnZCLGdCSDFmZ0I7RUcyZmhCLGVBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0FGMkNGO0FFekNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUYyQ0o7QUV4Q0U7RUFDRSxxQkgvZlU7RUdnZ0JWLGNIaGdCVTtBQzBpQmQ7QUV4Q0k7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUYwQ047QUV2Q0k7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5Qkg5Z0JRO0FDdWpCZDtBRXZDTTtFQUNFLGNBQUE7RUFDQSx3QkFBQTtBRnlDUjtBRXRDTTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtBRndDUjtBRW5DSTtFQUVJLHdDQUFBO0FGb0NSO0FFbENRO0VBQ0UsMENBQUE7QUZvQ1Y7QUU5QkU7RUFDRSxxQkFBQTtFQUNBLGNIeGlCWTtBQ3drQmhCO0FFN0JFO0VBQ0UscUJBQUE7RUFDQSxjSDVpQlM7QUMya0JiO0FFNUJFO0VBQ0UscUJBQUE7RUFDQSxjSGhqQmE7QUM4a0JqQjtBRTNCRTtFQUNFLHFCSHpqQlk7RUcwakJaLGNIMWpCWTtBQ3VsQmhCO0FFM0JJO0VBRUUsa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7QUY0Qk47QUUxQk07RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtBRjRCUjtBRXpCTTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLDhCQUFBO0FGMkJSO0FFdkJJO0VBRUUsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQkFBQTtBRndCTjtBRXJCSTtFQUVFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBRnNCTjtBRW5CSTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJIbm5CVTtBQ3dvQmhCO0FFbkJNO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7QUZxQlI7QUVsQk07RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBRm9CUjtBRWJRO0VBQ0UsK0NBQUE7QUZlVjtBRVpRO0VBQ0UsZ0RBQUE7QUZjVjtBRVhRO0VBQ0UsMkRBQUE7QUZhVjtBRU5BO0VBQ0UsbUJBQUE7RUFDQSxrQkg3bEI0QjtFRzhsQjVCLFVIN2xCNkI7RUc4bEI3QixtQkhobUJnQztFR2ltQmhDLGdCSDlsQmlDO0FDdW1CbkM7QUVQRTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUZTSjtBRU5FO0VBQ0UsV0FBQTtFQUNBLFVIcm1Cd0I7RUdzbUJ4QixXSHJtQnlCO0VHc21CekIsa0JIcm1CZ0M7RUdzbUJoQyxtQkhubUIyQjtFR29tQjNCLFdIOXNCa0I7RUcrc0JsQixnQkh6bUJ5QjtFRzBtQnpCLGtCQUFBO0FGUUo7QUVOSTtFQUNFLG1CSHptQnlCO0FDaW5CL0I7QUVOTTtFQUNFLG1CSDltQnlCO0VHK21CekIsV0h2dEJjO0FDK3RCdEI7QUVMTTtFQUNFLG1CSG5uQnlCO0FDMG5CakM7QUVGRTtFQUNFLFdBQUE7RUFDQSxZSDluQjRCO0VHK25CNUIsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkgzbkIyQjtBQytuQi9CO0FFQ0E7RUFDRSx3Q0FBQTtBRkVGO0FFQ0E7RUFDRSwwQkhodUJxQjtBQ2t1QnZCO0FFQ0E7RUFDRSxvQ0hudUJxQjtBQ3F1QnZCO0FFQ0E7RUFDRSxnQkFBQTtBRkVGO0FFRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FGQ0Y7QUVJRTtFQUNFLFdBQUE7RUFDQSxPSHhvQnFCO0FDdW9CekI7QUVJRTtFQUNFLFFBQUE7RUFDQSxVQUFBO0FGRko7QUd2d0JBO0VBRUk7SUFDRSxzQkFBQTtFSHl3Qko7RUd0d0JFO0lBQ0UsYUFBQTtFSHd3Qko7QUFDRjtBR253QkE7RUFHSTtJQUNFLHNCQUFBO0VIbXdCSjtFR2h3QkU7SUFDRSxhQUFBO0VIa3dCSjtBQUNGO0FHN3ZCQTtFQUVJO0lBQ0UsMENBQUE7RUg4dkJKO0FBQ0Y7QUkveEJBO0VBQ0U7SUFDRSw2Q0FBQTtFSml5QkY7RUk5eEJBO0lBQ0UsdUNBQUE7RUpneUJGO0VJN3hCQTtJQUNFLDZDQUFBO0VKK3hCRjtFSTV4QkE7SUFDRSxzQ0FBQTtFSjh4QkY7QUFDRjtBSTN4QkE7RUFDRTtJQUNFLHdCQUFBO0lBQ0EsVUFBQTtFSjZ4QkY7QUFDRjtBSTF4QkE7RUFDRTtJQUNFLGFBQUE7SUFDQSxjQUFBO0lBQ0EsUUFBQTtFSjR4QkY7RUl6eEJBO0lBQ0UsWUFBQTtJQUNBLGFBQUE7SUFDQSxRQUFBO0VKMnhCRjtFSXh4QkE7SUFDRSxZQUFBO0lBQ0EsYUFBQTtJQUNBLGNBQUE7RUoweEJGO0VJdnhCQTtJQUNFLGFBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtFSnl4QkY7RUl0eEJBO0lBQ0UsWUFBQTtJQUNBLGNBQUE7SUFDQSxhQUFBO0VKd3hCRjtBQUNGO0FJcnhCQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGNBQUE7SUFDQSxRQUFBO0VKdXhCRjtFSXB4QkE7SUFDRSxXQUFBO0lBQ0EsZUFBQTtJQUNBLFFBQUE7RUpzeEJGO0VJbnhCQTtJQUNFLGFBQUE7SUFDQSxRQUFBO0lBQ0EsY0FBQTtFSnF4QkY7RUlseEJBO0lBQ0UsYUFBQTtJQUNBLGVBQUE7SUFDQSxjQUFBO0VKb3hCRjtBQUNGO0FLbDJCQTtFQUNFO0lBQ0UscUJBQUE7RUxvMkJGO0VLajJCQTtJQUNFLHNCQUFBO0VMbTJCRjtFS2gyQkE7SUFDRSxzQkFBQTtFTGsyQkY7RUsvMUJBO0lBQ0UsbUJBQUE7RUxpMkJGO0FBQ0Y7QUs3MUJBO0VBQ0U7SUFDRSxtQkFBQTtJQUNBLFVBQUE7RUwrMUJGO0VLNTFCQTtJQUNFLHFCQUFBO0lBQ0EsVUFBQTtFTDgxQkY7QUFDRjtBSzExQkE7RUFDRTtJQUNFLGFBQUE7SUFDQSxjQUFBO0lBQ0EsUUFBQTtFTDQxQkY7RUt6MUJBO0lBQ0UsYUFBQTtJQUNBLGFBQUE7SUFDQSxRQUFBO0VMMjFCRjtFS3gxQkE7SUFDRSxhQUFBO0lBQ0EsY0FBQTtJQUNBLGNBQUE7RUwwMUJGO0VLdjFCQTtJQUNFLFFBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtFTHkxQkY7RUt0MUJBO0lBQ0UsYUFBQTtJQUNBLGNBQUE7SUFDQSxlQUFBO0VMdzFCRjtBQUNGO0FLcjFCQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGNBQUE7SUFDQSxRQUFBO0VMdTFCRjtFS3AxQkE7SUFDRSxZQUFBO0lBQ0EsY0FBQTtJQUNBLFFBQUE7RUxzMUJGO0VLbjFCQTtJQUNFLGFBQUE7SUFDQSxRQUFBO0lBQ0EsZUFBQTtFTHExQkY7RUtsMUJBO0lBQ0UsWUFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0VMbzFCRjtBQUNGO0FLajFCQTtFQUNFO0lBQ0UseUJBQUE7RUxtMUJGO0VLaDFCQTtJQUNFLHlCQUFBO0VMazFCRjtFSy8wQkE7SUFDRSwwQkFBQTtFTGkxQkY7RUs5MEJBO0lBQ0UsMEJBQUE7RUxnMUJGO0FBQ0Y7QUs1MEJBO0VBQ0U7SUFDRSxtQkFBQTtJQUNBLHFCQUFBO0lBQ0EsVUFBQTtFTDgwQkY7RUszMEJBO0lBQ0UsbUJBQUE7SUFDQSxxQkFBQTtJQUNBLFVBQUE7RUw2MEJGO0VLMTBCQTtJQUNFLG9CQUFBO0lBQ0Esc0JBQUE7RUw0MEJGO0VLejBCQTtJQUNFLGFBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7RUwyMEJGO0FBQ0Y7QUt4MEJBO0VBQ0U7SUFDRSwwQkFBQTtJQUNBLFVBQUE7RUwwMEJGO0VLdjBCQTtJQUNFLHdCQUFBO0lBQ0EsVUFBQTtFTHkwQkY7QUFDRjtBS3QwQkE7RUFDRTtJQUNFLHVCQUFBO0VMdzBCRjtFS3IwQkE7SUFDRSx5QkFBQTtFTHUwQkY7QUFDRjtBQ2o5QkU7RUtiSSxnQkFBQTtBTmkrQk47QU03OUJFO0VBQ0UsdUJBQUE7QU4rOUJKO0FNMzlCSTtFQUNFLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQ0FBQTtFQUNBLHdDQUFBO0FONjlCTjtBTTM5Qk07RUFDRSx1Q0FBQTtBTjY5QlI7QU0xOUJNO0VBQ0UsTUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBTjQ5QlI7QU16OUJNO0VBRUUsTUFBQTtFQUNBLE9BQUE7QU4wOUJSO0FNdjlCTTtFQUVFLE1BQUE7RUFDQSxRQUFBO0FOdzlCUjtBTXI5Qk07RUFDRSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FOdTlCUjtBTXA5Qk07RUFFRSxRQUFBO0VBQ0EsT0FBQTtFQUNBLDJCQUFBO0FOcTlCUjtBTWw5Qk07RUFFRSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FObTlCUjtBTWg5Qk07RUFDRSxTQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0FOazlCUjtBTS84Qk07RUFFRSxTQUFBO0VBQ0EsT0FBQTtBTmc5QlI7QU03OEJNO0VBRUUsUUFBQTtFQUNBLFNBQUE7QU44OEJSO0FNejhCRTtFTGxFQTtJS3FFTSw2QkFBQTtFTjA4Qk47RU14OEJNO0lBQ0UsYUFBQTtFTjA4QlI7RU12OEJNO0lBQ0UsMkJBQUE7RU55OEJSO0FBQ0Y7QU90aUNJO0VBQ0UsNkJBQUE7QVB3aUNOO0FPdGlDTTtFQUNFLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBUHdpQ1I7QU9yaUNNO0VBRUUsTUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBUHNpQ1I7QU9uaUNNO0VBRUUsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtBUG9pQ1I7QU9qaUNNO0VBRUUsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLDJCQUFBO0FQa2lDUjtBTy9oQ007RUFDRSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QVBpaUNSO0FPOWhDTTtFQUVFLFFBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtBUCtoQ1I7QU81aENNO0VBRUUsU0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtBUDZoQ1I7QU8xaENNO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0FQNGhDUjtBT3poQ007RUFFRSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FQMGhDUjtBT3BoQ0k7RUFDRSxzQkFBQTtFQUNBLG9CQUFBO0FQc2hDTjtBT3BoQ007RUFDRSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QVBzaENSO0FPbmhDTTtFQUNFLHVCQUFBO0FQcWhDUjtBT2xoQ007RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxjUnNGc0I7QUM4N0I5QjtBT2poQ007RUFDRSxjUm1GMkI7QUNnOEJuQyIsImZpbGUiOiJzd2VldGFsZXJ0Mi5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN3YWwyLXBvcHVwIHtcbiAgJi5zd2FsMi10b2FzdCB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAkc3dhbDItdG9hc3Qtd2lkdGg7XG4gICAgcGFkZGluZzogJHN3YWwyLXRvYXN0LXBhZGRpbmc7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgIGJhY2tncm91bmQ6ICRzd2FsMi10b2FzdC1iYWNrZ3JvdW5kO1xuICAgIGJveC1zaGFkb3c6ICRzd2FsMi10b2FzdC1ib3gtc2hhZG93O1xuXG4gICAgLnN3YWwyLWhlYWRlciB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgcGFkZGluZzogJHN3YWwyLXRvYXN0LWhlYWRlci1wYWRkaW5nO1xuICAgIH1cblxuICAgIC5zd2FsMi10aXRsZSB7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICBtYXJnaW46ICRzd2FsMi10b2FzdC10aXRsZS1tYXJnaW47XG4gICAgICBmb250LXNpemU6ICRzd2FsMi10b2FzdC10aXRsZS1mb250LXNpemU7XG4gICAgfVxuXG4gICAgLnN3YWwyLWZvb3RlciB7XG4gICAgICBtYXJnaW46ICRzd2FsMi10b2FzdC1mb290ZXItbWFyZ2luO1xuICAgICAgcGFkZGluZzogJHN3YWwyLXRvYXN0LWZvb3Rlci1tYXJnaW47XG4gICAgICBmb250LXNpemU6ICRzd2FsMi10b2FzdC1mb290ZXItZm9udC1zaXplO1xuICAgIH1cblxuICAgIC5zd2FsMi1jbG9zZSB7XG4gICAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgICAgd2lkdGg6ICRzd2FsMi10b2FzdC1jbG9zZS1idXR0b24td2lkdGg7XG4gICAgICBoZWlnaHQ6ICRzd2FsMi10b2FzdC1jbG9zZS1idXR0b24taGVpZ2h0O1xuICAgICAgbGluZS1oZWlnaHQ6ICRzd2FsMi10b2FzdC1jbG9zZS1idXR0b24tbGluZS1oZWlnaHQ7XG4gICAgfVxuXG4gICAgLnN3YWwyLWNvbnRlbnQge1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgcGFkZGluZzogJHN3YWwyLXRvYXN0LWNvbnRlbnQtcGFkZGluZztcbiAgICAgIGZvbnQtc2l6ZTogJHN3YWwyLXRvYXN0LWNvbnRlbnQtZm9udC1zaXplO1xuICAgIH1cblxuICAgIC5zd2FsMi1pY29uIHtcbiAgICAgIHdpZHRoOiAyZW07XG4gICAgICBtaW4td2lkdGg6IDJlbTtcbiAgICAgIGhlaWdodDogMmVtO1xuICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICAuc3dhbDItaWNvbi1jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxLjhlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICAgICAgQGluY2x1ZGUgaWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogLjI1ZW07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5zd2FsMi1zdWNjZXNzIHtcbiAgICAgICAgLnN3YWwyLXN1Y2Nlc3MtcmluZyB7XG4gICAgICAgICAgd2lkdGg6IDJlbTtcbiAgICAgICAgICBoZWlnaHQ6IDJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLWVycm9yIHtcbiAgICAgICAgW2NsYXNzXj0nc3dhbDIteC1tYXJrLWxpbmUnXSB7XG4gICAgICAgICAgdG9wOiAuODc1ZW07XG4gICAgICAgICAgd2lkdGg6IDEuMzc1ZW07XG5cbiAgICAgICAgICAmW2NsYXNzJD0nbGVmdCddIHtcbiAgICAgICAgICAgIGxlZnQ6IC4zMTI1ZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJltjbGFzcyQ9J3JpZ2h0J10ge1xuICAgICAgICAgICAgcmlnaHQ6IC4zMTI1ZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnN3YWwyLWFjdGlvbnMge1xuICAgICAgZmxleC1iYXNpczogYXV0byAhaW1wb3J0YW50O1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICBtYXJnaW46IDAgLjMxMjVlbTtcbiAgICB9XG5cbiAgICAuc3dhbDItc3R5bGVkIHtcbiAgICAgIG1hcmdpbjogMCAuMzEyNWVtO1xuICAgICAgcGFkZGluZzogLjMxMjVlbSAuNjI1ZW07XG4gICAgICBmb250LXNpemU6ICRzd2FsMi10b2FzdC1idXR0b25zLWZvbnQtc2l6ZTtcblxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGJveC1zaGFkb3c6ICRzd2FsMi10b2FzdC1idXR0b24tZm9jdXMtYm94LXNoYWRvdztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc3dhbDItc3VjY2VzcyB7XG4gICAgICBib3JkZXItY29sb3I6ICRzd2FsMi1zdWNjZXNzO1xuXG4gICAgICBbY2xhc3NePSdzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUnXSB7IC8vIEVtdWxhdGUgbW92aW5nIGNpcmN1bGFyIGxpbmVcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMS42ZW07XG4gICAgICAgIGhlaWdodDogM2VtO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuICAgICAgICAmW2NsYXNzJD0nbGVmdCddIHtcbiAgICAgICAgICB0b3A6IC0uOGVtO1xuICAgICAgICAgIGxlZnQ6IC0uNWVtO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMmVtIDJlbTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0ZW0gMCAwIDRlbTtcbiAgICAgICAgfVxuXG4gICAgICAgICZbY2xhc3MkPSdyaWdodCddIHtcbiAgICAgICAgICB0b3A6IC0uMjVlbTtcbiAgICAgICAgICBsZWZ0OiAuOTM3NWVtO1xuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMS41ZW07XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMCA0ZW0gNGVtIDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnN3YWwyLXN1Y2Nlc3MtcmluZyB7XG4gICAgICAgIHdpZHRoOiAyZW07XG4gICAgICAgIGhlaWdodDogMmVtO1xuICAgICAgfVxuXG4gICAgICAuc3dhbDItc3VjY2Vzcy1maXgge1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IC40Mzc1ZW07XG4gICAgICAgIHdpZHRoOiAuNDM3NWVtO1xuICAgICAgICBoZWlnaHQ6IDIuNjg3NWVtO1xuICAgICAgfVxuXG4gICAgICBbY2xhc3NePSdzd2FsMi1zdWNjZXNzLWxpbmUnXSB7XG4gICAgICAgIGhlaWdodDogLjMxMjVlbTtcblxuICAgICAgICAmW2NsYXNzJD0ndGlwJ10ge1xuICAgICAgICAgIHRvcDogMS4xMjVlbTtcbiAgICAgICAgICBsZWZ0OiAuMTg3NWVtO1xuICAgICAgICAgIHdpZHRoOiAuNzVlbTtcbiAgICAgICAgfVxuXG4gICAgICAgICZbY2xhc3MkPSdsb25nJ10ge1xuICAgICAgICAgIHRvcDogLjkzNzVlbTtcbiAgICAgICAgICByaWdodDogLjE4NzVlbTtcbiAgICAgICAgICB3aWR0aDogMS4zNzVlbTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLWljb24tc2hvdyB7XG4gICAgICAgIEBpZiAkc3dhbDItaWNvbi1hbmltYXRpb25zIHtcbiAgICAgICAgICAuc3dhbDItc3VjY2Vzcy1saW5lLXRpcCB7XG4gICAgICAgICAgICBhbmltYXRpb246IHN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcCAuNzVzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zd2FsMi1zdWNjZXNzLWxpbmUtbG9uZyB7XG4gICAgICAgICAgICBhbmltYXRpb246IHN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcgLjc1cztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLnN3YWwyLXNob3cge1xuICAgICAgYW5pbWF0aW9uOiAkc3dhbDItdG9hc3Qtc2hvdy1hbmltYXRpb247XG4gICAgfVxuXG4gICAgJi5zd2FsMi1oaWRlIHtcbiAgICAgIGFuaW1hdGlvbjogJHN3YWwyLXRvYXN0LWhpZGUtYW5pbWF0aW9uO1xuICAgIH1cbiAgfVxufVxuIiwiJHN3YWwyLXdoaXRlOiAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kc3dhbDItYmxhY2s6ICAgICAgICAgIzAwMCAhZGVmYXVsdDtcbiRzd2FsMi1vdXRsaW5lLWNvbG9yOiByZ2JhKDUwLCAxMDAsIDE1MCwgLjQpICFkZWZhdWx0O1xuXG4vLyBDT05UQUlORVJcbiRzd2FsMi1jb250YWluZXItcGFkZGluZzogLjYyNWVtICFkZWZhdWx0O1xuXG4vLyBCT1ggTU9ERUxcbiRzd2FsMi13aWR0aDogMzJlbSAhZGVmYXVsdDtcbiRzd2FsMi1wYWRkaW5nOiAxLjI1ZW0gIWRlZmF1bHQ7XG4kc3dhbDItYm9yZGVyOiBub25lICFkZWZhdWx0O1xuJHN3YWwyLWJvcmRlci1yYWRpdXM6IC4zMTI1ZW0gIWRlZmF1bHQ7XG4kc3dhbDItYm94LXNoYWRvdzogI2Q5ZDlkOSAhZGVmYXVsdDtcblxuLy8gQU5JTUFUSU9OU1xuJHN3YWwyLXNob3ctYW5pbWF0aW9uOiBzd2FsMi1zaG93IC4zcyAhZGVmYXVsdDtcbiRzd2FsMi1oaWRlLWFuaW1hdGlvbjogc3dhbDItaGlkZSAuMTVzIGZvcndhcmRzICFkZWZhdWx0O1xuXG4vLyBCQUNLR1JPVU5EXG4kc3dhbDItYmFja2dyb3VuZDogJHN3YWwyLXdoaXRlICFkZWZhdWx0O1xuXG4vLyBUWVBPR1JBUEhZXG4kc3dhbDItZm9udDogaW5oZXJpdCAhZGVmYXVsdDtcbiRzd2FsMi1mb250LXNpemU6IDFyZW0gIWRlZmF1bHQ7XG5cbi8vIEJBQ0tEUk9QXG4kc3dhbDItYmFja2Ryb3A6IHJnYmEoJHN3YWwyLWJsYWNrLCAuNCkgIWRlZmF1bHQ7XG4kc3dhbDItYmFja2Ryb3AtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMXMgIWRlZmF1bHQ7XG5cbi8vIEhFQURFUlxuJHN3YWwyLWhlYWRlci1wYWRkaW5nOiAwIDEuOGVtICFkZWZhdWx0O1xuXG4vLyBJQ09OU1xuJHN3YWwyLWljb24tc2l6ZTogNWVtICFkZWZhdWx0O1xuJHN3YWwyLWljb24tYW5pbWF0aW9uczogdHJ1ZSAhZGVmYXVsdDtcbiRzd2FsMi1pY29uLW1hcmdpbjogMS4yNWVtIGF1dG8gMS44NzVlbSAhZGVmYXVsdDtcbiRzd2FsMi1pY29uLXpvb206IG51bGwgIWRlZmF1bHQ7XG4kc3dhbDItc3VjY2VzczogI2E1ZGM4NiAhZGVmYXVsdDtcbiRzd2FsMi1zdWNjZXNzLWJvcmRlcjogcmdiYSgkc3dhbDItc3VjY2VzcywgLjMpICFkZWZhdWx0O1xuJHN3YWwyLWVycm9yOiAjZjI3NDc0ICFkZWZhdWx0O1xuJHN3YWwyLXdhcm5pbmc6ICNmOGJiODYgIWRlZmF1bHQ7XG4kc3dhbDItaW5mbzogIzNmYzNlZSAhZGVmYXVsdDtcbiRzd2FsMi1xdWVzdGlvbjogIzg3YWRiZCAhZGVmYXVsdDtcbiRzd2FsMi1pY29uLWZvbnQtZmFtaWx5OiBpbmhlcml0ICFkZWZhdWx0O1xuXG4vLyBJTUFHRVxuJHN3YWwyLWltYWdlLW1hcmdpbjogMS4yNWVtIGF1dG8gIWRlZmF1bHQ7XG5cbi8vIFRJVExFXG4kc3dhbDItdGl0bGUtbWFyZ2luOiAwIDAgLjRlbSAhZGVmYXVsdDtcbiRzd2FsMi10aXRsZS1jb2xvcjogbGlnaHRlbigkc3dhbDItYmxhY2ssIDM1KSAhZGVmYXVsdDtcbiRzd2FsMi10aXRsZS1mb250LXNpemU6IDEuODc1ZW0gIWRlZmF1bHQ7XG5cbi8vIENPTlRFTlRcbiRzd2FsMi1jb250ZW50LWp1c3RpZnktY29udGVudDogY2VudGVyICFkZWZhdWx0O1xuJHN3YWwyLWNvbnRlbnQtbWFyZ2luOiAwICFkZWZhdWx0O1xuJHN3YWwyLWNvbnRlbnQtcGFkZGluZzogMCAxLjZlbSAhZGVmYXVsdDtcbiRzd2FsMi1jb250ZW50LWNvbG9yOiBsaWdodGVuKCRzd2FsMi1ibGFjaywgMzMpICFkZWZhdWx0O1xuJHN3YWwyLWNvbnRlbnQtZm9udC1zaXplOiAxLjEyNWVtICFkZWZhdWx0O1xuJHN3YWwyLWNvbnRlbnQtZm9udC13ZWlnaHQ6IG5vcm1hbCAhZGVmYXVsdDtcbiRzd2FsMi1jb250ZW50LWxpbmUtaGVpZ2h0OiBub3JtYWwgIWRlZmF1bHQ7XG4kc3dhbDItY29udGVudC10ZXh0LWFsaWduOiBjZW50ZXIgIWRlZmF1bHQ7XG4kc3dhbDItY29udGVudC13b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWRlZmF1bHQ7XG5cbi8vIElOUFVUXG4kc3dhbDItaW5wdXQtbWFyZ2luOiAxZW0gYXV0byAhZGVmYXVsdDtcbiRzd2FsMi1pbnB1dC13aWR0aDogMTAwJSAhZGVmYXVsdDtcbiRzd2FsMi1pbnB1dC1oZWlnaHQ6IDIuNjI1ZW0gIWRlZmF1bHQ7XG4kc3dhbDItaW5wdXQtcGFkZGluZzogMCAuNzVlbSAhZGVmYXVsdDtcbiRzd2FsMi1pbnB1dC1ib3JkZXI6IDFweCBzb2xpZCBsaWdodGVuKCRzd2FsMi1ibGFjaywgODUpICFkZWZhdWx0O1xuJHN3YWwyLWlucHV0LWJvcmRlci1yYWRpdXM6IC4xODc1ZW0gIWRlZmF1bHQ7XG4kc3dhbDItaW5wdXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoJHN3YWwyLWJsYWNrLCAuMDYpICFkZWZhdWx0O1xuJHN3YWwyLWlucHV0LWZvY3VzLWJvcmRlcjogMXB4IHNvbGlkICNiNGRiZWQgIWRlZmF1bHQ7XG4kc3dhbDItaW5wdXQtZm9jdXMtb3V0bGluZTogbm9uZSAhZGVmYXVsdDtcbiRzd2FsMi1pbnB1dC1mb2N1cy1ib3gtc2hhZG93OiAwIDAgM3B4ICNjNGU2ZjUgIWRlZmF1bHQ7XG4kc3dhbDItaW5wdXQtZm9udC1zaXplOiAxLjEyNWVtICFkZWZhdWx0O1xuJHN3YWwyLWlucHV0LWJhY2tncm91bmQ6IGluaGVyaXQgIWRlZmF1bHQ7XG4kc3dhbDItaW5wdXQtY29sb3I6IGluaGVyaXQgIWRlZmF1bHQ7XG4kc3dhbDItaW5wdXQtdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4zcywgYm94LXNoYWRvdyAuM3MgIWRlZmF1bHQ7XG5cbi8vIFRFWFRBUkVBIFNQRUNJRklDIFZBUklBQkxFU1xuJHN3YWwyLXRleHRhcmVhLWhlaWdodDogNi43NWVtICFkZWZhdWx0O1xuJHN3YWwyLXRleHRhcmVhLXBhZGRpbmc6IC43NWVtICFkZWZhdWx0O1xuXG4vLyBWQUxJREFUSU9OIE1FU1NBR0VcbiRzd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2UtanVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWRlZmF1bHQ7XG4kc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlLXBhZGRpbmc6IC42MjVlbSAhZGVmYXVsdDtcbiRzd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2UtYmFja2dyb3VuZDogbGlnaHRlbigkc3dhbDItYmxhY2ssIDk0KSAhZGVmYXVsdDtcbiRzd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2UtY29sb3I6IGxpZ2h0ZW4oJHN3YWwyLWJsYWNrLCA0MCkgIWRlZmF1bHQ7XG4kc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlLWZvbnQtc2l6ZTogMWVtICFkZWZhdWx0O1xuJHN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZS1mb250LXdlaWdodDogMzAwICFkZWZhdWx0O1xuJHN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZS1pY29uLWJhY2tncm91bmQ6ICRzd2FsMi1lcnJvciAhZGVmYXVsdDtcbiRzd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2UtaWNvbi1jb2xvcjogJHN3YWwyLXdoaXRlICFkZWZhdWx0O1xuJHN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZS1pY29uLXpvb206IG51bGwgIWRlZmF1bHQ7XG5cbi8vIFBST0dSRVNTIFNURVBTXG4kc3dhbDItcHJvZ3Jlc3Mtc3RlcHMtYmFja2dyb3VuZDogaW5oZXJpdCAhZGVmYXVsdDtcbiRzd2FsMi1wcm9ncmVzcy1zdGVwcy1tYXJnaW46IDAgMCAxLjI1ZW0gIWRlZmF1bHQ7XG4kc3dhbDItcHJvZ3Jlc3Mtc3RlcHMtcGFkZGluZzogMCAhZGVmYXVsdDtcbiRzd2FsMi1wcm9ncmVzcy1zdGVwcy1mb250LXdlaWdodDogNjAwICFkZWZhdWx0O1xuJHN3YWwyLXByb2dyZXNzLXN0ZXBzLWRpc3RhbmNlOiAyLjVlbSAhZGVmYXVsdDtcbiRzd2FsMi1wcm9ncmVzcy1zdGVwLXdpZHRoOiAyZW07XG4kc3dhbDItcHJvZ3Jlc3Mtc3RlcC1oZWlnaHQ6IDJlbTtcbiRzd2FsMi1wcm9ncmVzcy1zdGVwLWJvcmRlci1yYWRpdXM6IDJlbTtcbiRzd2FsMi1wcm9ncmVzcy1zdGVwLWJhY2tncm91bmQ6ICNhZGQ4ZTYgIWRlZmF1bHQ7XG4kc3dhbDItcHJvZ3Jlc3Mtc3RlcC1jb2xvcjogJHN3YWwyLXdoaXRlICFkZWZhdWx0O1xuJHN3YWwyLWFjdGl2ZS1zdGVwLWJhY2tncm91bmQ6ICMzMDg1ZDYgIWRlZmF1bHQ7XG4kc3dhbDItYWN0aXZlLXN0ZXAtY29sb3I6ICRzd2FsMi13aGl0ZSAhZGVmYXVsdDtcblxuLy8gRk9PVEVSXG4kc3dhbDItZm9vdGVyLW1hcmdpbjogMS4yNWVtIDAgMCAhZGVmYXVsdDtcbiRzd2FsMi1mb290ZXItcGFkZGluZzogMWVtIDAgMCAhZGVmYXVsdDtcbiRzd2FsMi1mb290ZXItYm9yZGVyLWNvbG9yOiAjZWVlICFkZWZhdWx0O1xuJHN3YWwyLWZvb3Rlci1jb2xvcjogbGlnaHRlbigkc3dhbDItYmxhY2ssIDMzKSAhZGVmYXVsdDtcbiRzd2FsMi1mb290ZXItZm9udC1zaXplOiAxZW0gIWRlZmF1bHQ7XG5cbi8vIFRJTUVSIFBPR1JFU1MgQkFSXG4kc3dhbDItdGltZXItcHJvZ3Jlc3MtYmFyLWhlaWdodDogLjI1ZW07XG4kc3dhbDItdGltZXItcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQ6IHJnYmEoJHN3YWwyLWJsYWNrLCAuMikgIWRlZmF1bHQ7XG5cbi8vIENMT1NFIEJVVFRPTlxuJHN3YWwyLWNsb3NlLWJ1dHRvbi1hbGlnbi1pdGVtczogY2VudGVyICFkZWZhdWx0O1xuJHN3YWwyLWNsb3NlLWJ1dHRvbi1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhZGVmYXVsdDtcbiRzd2FsMi1jbG9zZS1idXR0b24td2lkdGg6IDEuMmVtICFkZWZhdWx0O1xuJHN3YWwyLWNsb3NlLWJ1dHRvbi1oZWlnaHQ6IDEuMmVtICFkZWZhdWx0O1xuJHN3YWwyLWNsb3NlLWJ1dHRvbi1saW5lLWhlaWdodDogMS4yICFkZWZhdWx0O1xuJHN3YWwyLWNsb3NlLWJ1dHRvbi1wb3NpdGlvbjogYWJzb2x1dGUgIWRlZmF1bHQ7XG4kc3dhbDItY2xvc2UtYnV0dG9uLWdhcDogMCAhZGVmYXVsdDtcbiRzd2FsMi1jbG9zZS1idXR0b24tdHJhbnNpdGlvbjogY29sb3IgLjFzIGVhc2Utb3V0ICFkZWZhdWx0O1xuJHN3YWwyLWNsb3NlLWJ1dHRvbi1ib3JkZXI6IG5vbmUgIWRlZmF1bHQ7XG4kc3dhbDItY2xvc2UtYnV0dG9uLWJvcmRlci1yYWRpdXM6IDAgIWRlZmF1bHQ7XG4kc3dhbDItY2xvc2UtYnV0dG9uLW91dGxpbmU6IG51bGwgIWRlZmF1bHQ7XG4kc3dhbDItY2xvc2UtYnV0dG9uLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuJHN3YWwyLWNsb3NlLWJ1dHRvbi1jb2xvcjogbGlnaHRlbigkc3dhbDItYmxhY2ssIDgwKSAhZGVmYXVsdDtcbiRzd2FsMi1jbG9zZS1idXR0b24tZm9udC1mYW1pbHk6IHNlcmlmICFkZWZhdWx0O1xuJHN3YWwyLWNsb3NlLWJ1dHRvbi1mb250LXNpemU6IDIuNWVtICFkZWZhdWx0O1xuXG4vLyBDTE9TRSBCVVRUT046SE9WRVJcbiRzd2FsMi1jbG9zZS1idXR0b24taG92ZXItdHJhbnNmb3JtOiBub25lICFkZWZhdWx0O1xuJHN3YWwyLWNsb3NlLWJ1dHRvbi1ob3Zlci1jb2xvcjogJHN3YWwyLWVycm9yICFkZWZhdWx0O1xuJHN3YWwyLWNsb3NlLWJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuLy8gQUNUSU9OU1xuJHN3YWwyLWFjdGlvbnMtZmxleC13cmFwOiB3cmFwICFkZWZhdWx0O1xuJHN3YWwyLWFjdGlvbnMtYWxpZ24taXRlbXM6IGNlbnRlciAhZGVmYXVsdDtcbiRzd2FsMi1hY3Rpb25zLWp1c3RpZnktY29udGVudDogY2VudGVyICFkZWZhdWx0O1xuJHN3YWwyLWFjdGlvbnMtd2lkdGg6IDEwMCUgIWRlZmF1bHQ7XG4kc3dhbDItYWN0aW9ucy1tYXJnaW46IDEuMjVlbSBhdXRvIDAgIWRlZmF1bHQ7XG5cbi8vIENPTkZJUk0gQlVUVE9OXG4kc3dhbDItY29uZmlybS1idXR0b24tYm9yZGVyOiAwICFkZWZhdWx0O1xuJHN3YWwyLWNvbmZpcm0tYnV0dG9uLWJvcmRlci1yYWRpdXM6IC4yNWVtICFkZWZhdWx0O1xuJHN3YWwyLWNvbmZpcm0tYnV0dG9uLWJhY2tncm91bmQtY29sb3I6ICMzMDg1ZDYgIWRlZmF1bHQ7XG4kc3dhbDItY29uZmlybS1idXR0b24tY29sb3I6ICRzd2FsMi13aGl0ZSAhZGVmYXVsdDtcbiRzd2FsMi1jb25maXJtLWJ1dHRvbi1mb250LXNpemU6IDEuMDYyNWVtICFkZWZhdWx0O1xuXG4vLyBDQU5DRUwgQlVUVE9OXG4kc3dhbDItY2FuY2VsLWJ1dHRvbi1ib3JkZXI6IDAgIWRlZmF1bHQ7XG4kc3dhbDItY2FuY2VsLWJ1dHRvbi1ib3JkZXItcmFkaXVzOiAuMjVlbSAhZGVmYXVsdDtcbiRzd2FsMi1jYW5jZWwtYnV0dG9uLWJhY2tncm91bmQtY29sb3I6ICNhYWEgIWRlZmF1bHQ7XG4kc3dhbDItY2FuY2VsLWJ1dHRvbi1jb2xvcjogJHN3YWwyLXdoaXRlICFkZWZhdWx0O1xuJHN3YWwyLWNhbmNlbC1idXR0b24tZm9udC1zaXplOiAxLjA2MjVlbSAhZGVmYXVsdDtcblxuLy8gQ09NTU9OIFZBUklBQkxFUyBGT1IgQ09ORklSTSBBTkQgQ0FOQ0VMIEJVVFRPTlNcbiRzd2FsMi1idXR0b24tZGFya2VuLWhvdmVyOiByZ2JhKCRzd2FsMi1ibGFjaywgLjEpICFkZWZhdWx0O1xuJHN3YWwyLWJ1dHRvbi1kYXJrZW4tYWN0aXZlOiByZ2JhKCRzd2FsMi1ibGFjaywgLjIpICFkZWZhdWx0O1xuJHN3YWwyLWJ1dHRvbi1mb2N1cy1vdXRsaW5lOiBub25lICFkZWZhdWx0O1xuJHN3YWwyLWJ1dHRvbi1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBudWxsICFkZWZhdWx0O1xuJHN3YWwyLWJ1dHRvbi1mb2N1cy1ib3gtc2hhZG93OiAwIDAgMCAxcHggJHN3YWwyLWJhY2tncm91bmQsIDAgMCAwIDNweCAkc3dhbDItb3V0bGluZS1jb2xvciAhZGVmYXVsdDtcblxuLy8gVE9BU1RTXG4kc3dhbDItdG9hc3Qtc2hvdy1hbmltYXRpb246IHN3YWwyLXRvYXN0LXNob3cgLjVzICFkZWZhdWx0O1xuJHN3YWwyLXRvYXN0LWhpZGUtYW5pbWF0aW9uOiBzd2FsMi10b2FzdC1oaWRlIC4xcyBmb3J3YXJkcyAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC1ib3JkZXI6IG5vbmUgIWRlZmF1bHQ7XG4kc3dhbDItdG9hc3QtYm94LXNoYWRvdzogMCAwIC42MjVlbSAjZDlkOWQ5ICFkZWZhdWx0O1xuJHN3YWwyLXRvYXN0LWJhY2tncm91bmQ6ICRzd2FsMi13aGl0ZSAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC1jbG9zZS1idXR0b24td2lkdGg6IC44ZW0gIWRlZmF1bHQ7XG4kc3dhbDItdG9hc3QtY2xvc2UtYnV0dG9uLWhlaWdodDogLjhlbSAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC1jbG9zZS1idXR0b24tbGluZS1oZWlnaHQ6IC44ICFkZWZhdWx0O1xuJHN3YWwyLXRvYXN0LXdpZHRoOiBhdXRvICFkZWZhdWx0O1xuJHN3YWwyLXRvYXN0LXBhZGRpbmc6IC42MjVlbSAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC1oZWFkZXItcGFkZGluZzogMCAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC10aXRsZS1tYXJnaW46IDAgLjZlbSAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC10aXRsZS1mb250LXNpemU6IDFlbSAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC1jb250ZW50LXBhZGRpbmc6IDAgIWRlZmF1bHQ7XG4kc3dhbDItdG9hc3QtY29udGVudC1mb250LXNpemU6IDFlbSAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC1pbnB1dC1mb250LXNpemU6IDFlbSAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC12YWxpZGF0aW9uLWZvbnQtc2l6ZTogMWVtICFkZWZhdWx0O1xuJHN3YWwyLXRvYXN0LWJ1dHRvbnMtZm9udC1zaXplOiAxZW0gIWRlZmF1bHQ7XG4kc3dhbDItdG9hc3QtYnV0dG9uLWZvY3VzLWJveC1zaGFkb3c6IDAgMCAwIDFweCAkc3dhbDItYmFja2dyb3VuZCwgMCAwIDAgM3B4ICRzd2FsMi1vdXRsaW5lLWNvbG9yICFkZWZhdWx0O1xuJHN3YWwyLXRvYXN0LWZvb3Rlci1tYXJnaW46IC41ZW0gMCAwICFkZWZhdWx0O1xuJHN3YWwyLXRvYXN0LWZvb3Rlci1wYWRkaW5nOiAuNWVtIDAgMCAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC1mb290ZXItZm9udC1zaXplOiAuOGVtICFkZWZhdWx0O1xuIiwiLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IGF1dG87XG4gIHBhZGRpbmc6IDAuNjI1ZW07XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAwIDAuNjI1ZW0gI2Q5ZDlkOTtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaGVhZGVyIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcGFkZGluZzogMDtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItdGl0bGUge1xuICBmbGV4LWdyb3c6IDE7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgbWFyZ2luOiAwIDAuNmVtO1xuICBmb250LXNpemU6IDFlbTtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItZm9vdGVyIHtcbiAgbWFyZ2luOiAwLjVlbSAwIDA7XG4gIHBhZGRpbmc6IDAuNWVtIDAgMDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItY2xvc2Uge1xuICBwb3NpdGlvbjogc3RhdGljO1xuICB3aWR0aDogMC44ZW07XG4gIGhlaWdodDogMC44ZW07XG4gIGxpbmUtaGVpZ2h0OiAwLjg7XG59XG4uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWNvbnRlbnQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uIHtcbiAgd2lkdGg6IDJlbTtcbiAgbWluLXdpZHRoOiAyZW07XG4gIGhlaWdodDogMmVtO1xuICBtYXJnaW46IDA7XG59XG4uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24gLnN3YWwyLWljb24tY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS44ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcbiAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uIC5zd2FsMi1pY29uLWNvbnRlbnQge1xuICAgIGZvbnQtc2l6ZTogMC4yNWVtO1xuICB9XG59XG4uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyAuc3dhbDItc3VjY2Vzcy1yaW5nIHtcbiAgd2lkdGg6IDJlbTtcbiAgaGVpZ2h0OiAyZW07XG59XG4uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj1zd2FsMi14LW1hcmstbGluZV0ge1xuICB0b3A6IDAuODc1ZW07XG4gIHdpZHRoOiAxLjM3NWVtO1xufVxuLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uLnN3YWwyLWVycm9yIFtjbGFzc149c3dhbDIteC1tYXJrLWxpbmVdW2NsYXNzJD1sZWZ0XSB7XG4gIGxlZnQ6IDAuMzEyNWVtO1xufVxuLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uLnN3YWwyLWVycm9yIFtjbGFzc149c3dhbDIteC1tYXJrLWxpbmVdW2NsYXNzJD1yaWdodF0ge1xuICByaWdodDogMC4zMTI1ZW07XG59XG4uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWFjdGlvbnMge1xuICBmbGV4LWJhc2lzOiBhdXRvICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMCAwLjMxMjVlbTtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3R5bGVkIHtcbiAgbWFyZ2luOiAwIDAuMzEyNWVtO1xuICBwYWRkaW5nOiAwLjMxMjVlbSAwLjYyNWVtO1xuICBmb250LXNpemU6IDFlbTtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3R5bGVkOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICNmZmYsIDAgMCAwIDNweCByZ2JhKDUwLCAxMDAsIDE1MCwgMC40KTtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyB7XG4gIGJvcmRlci1jb2xvcjogI2E1ZGM4Njtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxLjZlbTtcbiAgaGVpZ2h0OiAzZW07XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXVtjbGFzcyQ9bGVmdF0ge1xuICB0b3A6IC0wLjhlbTtcbiAgbGVmdDogLTAuNWVtO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAyZW0gMmVtO1xuICBib3JkZXItcmFkaXVzOiA0ZW0gMCAwIDRlbTtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV1bY2xhc3MkPXJpZ2h0XSB7XG4gIHRvcDogLTAuMjVlbTtcbiAgbGVmdDogMC45Mzc1ZW07XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMS41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDAgNGVtIDRlbSAwO1xufVxuLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLXJpbmcge1xuICB3aWR0aDogMmVtO1xuICBoZWlnaHQ6IDJlbTtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyAuc3dhbDItc3VjY2Vzcy1maXgge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDAuNDM3NWVtO1xuICB3aWR0aDogMC40Mzc1ZW07XG4gIGhlaWdodDogMi42ODc1ZW07XG59XG4uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVdIHtcbiAgaGVpZ2h0OiAwLjMxMjVlbTtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtbGluZV1bY2xhc3MkPXRpcF0ge1xuICB0b3A6IDEuMTI1ZW07XG4gIGxlZnQ6IDAuMTg3NWVtO1xuICB3aWR0aDogMC43NWVtO1xufVxuLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1saW5lXVtjbGFzcyQ9bG9uZ10ge1xuICB0b3A6IDAuOTM3NWVtO1xuICByaWdodDogMC4xODc1ZW07XG4gIHdpZHRoOiAxLjM3NWVtO1xufVxuLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzLnN3YWwyLWljb24tc2hvdyAuc3dhbDItc3VjY2Vzcy1saW5lLXRpcCB7XG4gIGFuaW1hdGlvbjogc3dhbDItdG9hc3QtYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwIDAuNzVzO1xufVxuLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzLnN3YWwyLWljb24tc2hvdyAuc3dhbDItc3VjY2Vzcy1saW5lLWxvbmcge1xuICBhbmltYXRpb246IHN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcgMC43NXM7XG59XG4uc3dhbDItcG9wdXAuc3dhbDItdG9hc3Quc3dhbDItc2hvdyB7XG4gIGFuaW1hdGlvbjogc3dhbDItdG9hc3Qtc2hvdyAwLjVzO1xufVxuLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0LnN3YWwyLWhpZGUge1xuICBhbmltYXRpb246IHN3YWwyLXRvYXN0LWhpZGUgMC4xcyBmb3J3YXJkcztcbn1cblxuLnN3YWwyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTA2MDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMC42MjVlbTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMXM7XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbn1cbi5zd2FsMi1jb250YWluZXIuc3dhbDItYmFja2Ryb3Atc2hvdywgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ub2FuaW1hdGlvbiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cbi5zd2FsMi1jb250YWluZXIuc3dhbDItYmFja2Ryb3AtaGlkZSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG4uc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3Atc3RhcnQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLWxlZnQge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtZW5kLCAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1yaWdodCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItc3RhcnQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLWxlZnQge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4uc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1lbmQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLXJpZ2h0IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tc3RhcnQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWxlZnQge1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWVuZCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tcmlnaHQge1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbSA+IDpmaXJzdC1jaGlsZCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tc3RhcnQgPiA6Zmlyc3QtY2hpbGQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWxlZnQgPiA6Zmlyc3QtY2hpbGQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWVuZCA+IDpmaXJzdC1jaGlsZCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tcmlnaHQgPiA6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xufVxuLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWZ1bGxzY3JlZW4gPiAuc3dhbDItbW9kYWwge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDE7XG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LXJvdyA+IC5zd2FsMi1tb2RhbCB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgZmxleDogMTtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4ge1xuICBmbGV4OiAxO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi10b3AsIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItY2VudGVyLCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWJvdHRvbSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLXRvcC1zdGFydCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1jZW50ZXItc3RhcnQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItYm90dG9tLXN0YXJ0LCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLXRvcC1sZWZ0LCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWNlbnRlci1sZWZ0LCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWJvdHRvbS1sZWZ0IHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4uc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLXRvcC1lbmQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItY2VudGVyLWVuZCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1ib3R0b20tZW5kLCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLXRvcC1yaWdodCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1jZW50ZXItcmlnaHQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItYm90dG9tLXJpZ2h0IHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbiA+IC5zd2FsMi1tb2RhbCB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgZmxleDogMTtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5zd2FsMi1jb250YWluZXIuc3dhbDItbm8tdHJhbnNpdGlvbiB7XG4gIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cbi5zd2FsMi1jb250YWluZXI6bm90KC5zd2FsMi10b3ApOm5vdCguc3dhbDItdG9wLXN0YXJ0KTpub3QoLnN3YWwyLXRvcC1lbmQpOm5vdCguc3dhbDItdG9wLWxlZnQpOm5vdCguc3dhbDItdG9wLXJpZ2h0KTpub3QoLnN3YWwyLWNlbnRlci1zdGFydCk6bm90KC5zd2FsMi1jZW50ZXItZW5kKTpub3QoLnN3YWwyLWNlbnRlci1sZWZ0KTpub3QoLnN3YWwyLWNlbnRlci1yaWdodCk6bm90KC5zd2FsMi1ib3R0b20pOm5vdCguc3dhbDItYm90dG9tLXN0YXJ0KTpub3QoLnN3YWwyLWJvdHRvbS1lbmQpOm5vdCguc3dhbDItYm90dG9tLWxlZnQpOm5vdCguc3dhbDItYm90dG9tLXJpZ2h0KTpub3QoLnN3YWwyLWdyb3ctZnVsbHNjcmVlbikgPiAuc3dhbDItbW9kYWwge1xuICBtYXJnaW46IGF1dG87XG59XG5AbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuICAuc3dhbDItY29udGFpbmVyIC5zd2FsMi1tb2RhbCB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLnN3YWwyLXBvcHVwIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDMyZW07XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMS4yNWVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzEyNWVtO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLnN3YWwyLXBvcHVwOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi1sb2FkaW5nIHtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG4uc3dhbDItaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAxLjhlbTtcbn1cblxuLnN3YWwyLXRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCAwIDAuNGVtO1xuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogIzU5NTk1OTtcbiAgZm9udC1zaXplOiAxLjg3NWVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5zd2FsMi1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgei1pbmRleDogMTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMS4yNWVtIGF1dG8gMDtcbn1cbi5zd2FsMi1hY3Rpb25zOm5vdCguc3dhbDItbG9hZGluZykgLnN3YWwyLXN0eWxlZFtkaXNhYmxlZF0ge1xuICBvcGFjaXR5OiAwLjQ7XG59XG4uc3dhbDItYWN0aW9uczpub3QoLnN3YWwyLWxvYWRpbmcpIC5zd2FsMi1zdHlsZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjEpLCByZ2JhKDAsIDAsIDAsIDAuMSkpO1xufVxuLnN3YWwyLWFjdGlvbnM6bm90KC5zd2FsMi1sb2FkaW5nKSAuc3dhbDItc3R5bGVkOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuMiksIHJnYmEoMCwgMCwgMCwgMC4yKSk7XG59XG4uc3dhbDItYWN0aW9ucy5zd2FsMi1sb2FkaW5nIC5zd2FsMi1zdHlsZWQuc3dhbDItY29uZmlybSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAyLjVlbTtcbiAgaGVpZ2h0OiAyLjVlbTtcbiAgbWFyZ2luOiAwLjQ2ODc1ZW07XG4gIHBhZGRpbmc6IDA7XG4gIGFuaW1hdGlvbjogc3dhbDItcm90YXRlLWxvYWRpbmcgMS41cyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO1xuICBib3JkZXI6IDAuMjVlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4uc3dhbDItYWN0aW9ucy5zd2FsMi1sb2FkaW5nIC5zd2FsMi1zdHlsZWQuc3dhbDItY2FuY2VsIHtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cbi5zd2FsMi1hY3Rpb25zLnN3YWwyLWxvYWRpbmcgOm5vdCguc3dhbDItc3R5bGVkKS5zd2FsMi1jb25maXJtOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgYW5pbWF0aW9uOiBzd2FsMi1yb3RhdGUtbG9hZGluZyAxLjVzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWw7XG4gIGJvcmRlcjogM3B4IHNvbGlkICM5OTk5OTk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggI2ZmZjtcbn1cblxuLnN3YWwyLXN0eWxlZCB7XG4gIG1hcmdpbjogMC4zMTI1ZW07XG4gIHBhZGRpbmc6IDAuNjI1ZW0gMmVtO1xuICBib3gtc2hhZG93OiBub25lO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLnN3YWwyLXN0eWxlZDpub3QoW2Rpc2FibGVkXSkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc3dhbDItc3R5bGVkLnN3YWwyLWNvbmZpcm0ge1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcbiAgYmFja2dyb3VuZDogaW5pdGlhbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwODVkNjtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMS4wNjI1ZW07XG59XG4uc3dhbDItc3R5bGVkLnN3YWwyLWNhbmNlbCB7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICBiYWNrZ3JvdW5kOiBpbml0aWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxLjA2MjVlbTtcbn1cbi5zd2FsMi1zdHlsZWQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiAwIDAgMCAxcHggI2ZmZiwgMCAwIDAgM3B4IHJnYmEoNTAsIDEwMCwgMTUwLCAwLjQpO1xufVxuLnN3YWwyLXN0eWxlZDo6LW1vei1mb2N1cy1pbm5lciB7XG4gIGJvcmRlcjogMDtcbn1cblxuLnN3YWwyLWZvb3RlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDEuMjVlbSAwIDA7XG4gIHBhZGRpbmc6IDFlbSAwIDA7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xuICBjb2xvcjogIzU0NTQ1NDtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbi5zd2FsMi10aW1lci1wcm9ncmVzcy1iYXItY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDAuMjVlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuMzEyNWVtO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjMxMjVlbTtcbn1cblxuLnN3YWwyLXRpbWVyLXByb2dyZXNzLWJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDAuMjVlbTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uc3dhbDItaW1hZ2Uge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMS4yNWVtIGF1dG87XG59XG5cbi5zd2FsMi1jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxLjJlbTtcbiAgaGVpZ2h0OiAxLjJlbTtcbiAgcGFkZGluZzogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xcyBlYXNlLW91dDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNjY2NjY2M7XG4gIGZvbnQtZmFtaWx5OiBzZXJpZjtcbiAgZm9udC1zaXplOiAyLjVlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnN3YWwyLWNsb3NlOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmMjc0NzQ7XG59XG4uc3dhbDItY2xvc2U6Oi1tb3otZm9jdXMtaW5uZXIge1xuICBib3JkZXI6IDA7XG59XG5cbi5zd2FsMi1jb250ZW50IHtcbiAgei1pbmRleDogMTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCAxLjZlbTtcbiAgY29sb3I6ICM1NDU0NTQ7XG4gIGZvbnQtc2l6ZTogMS4xMjVlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5zd2FsMi1pbnB1dCxcbi5zd2FsMi1maWxlLFxuLnN3YWwyLXRleHRhcmVhLFxuLnN3YWwyLXNlbGVjdCxcbi5zd2FsMi1yYWRpbyxcbi5zd2FsMi1jaGVja2JveCB7XG4gIG1hcmdpbjogMWVtIGF1dG87XG59XG5cbi5zd2FsMi1pbnB1dCxcbi5zd2FsMi1maWxlLFxuLnN3YWwyLXRleHRhcmVhIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzLCBib3gtc2hhZG93IDAuM3M7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XG4gIGJvcmRlci1yYWRpdXM6IDAuMTg3NWVtO1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMS4xMjVlbTtcbn1cbi5zd2FsMi1pbnB1dC5zd2FsMi1pbnB1dGVycm9yLFxuLnN3YWwyLWZpbGUuc3dhbDItaW5wdXRlcnJvcixcbi5zd2FsMi10ZXh0YXJlYS5zd2FsMi1pbnB1dGVycm9yIHtcbiAgYm9yZGVyLWNvbG9yOiAjZjI3NDc0ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgMCAycHggI2YyNzQ3NCAhaW1wb3J0YW50O1xufVxuLnN3YWwyLWlucHV0OmZvY3VzLFxuLnN3YWwyLWZpbGU6Zm9jdXMsXG4uc3dhbDItdGV4dGFyZWE6Zm9jdXMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjRkYmVkO1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiAwIDAgM3B4ICNjNGU2ZjU7XG59XG4uc3dhbDItaW5wdXQ6OnBsYWNlaG9sZGVyLFxuLnN3YWwyLWZpbGU6OnBsYWNlaG9sZGVyLFxuLnN3YWwyLXRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjY2NjY2NjO1xufVxuXG4uc3dhbDItcmFuZ2Uge1xuICBtYXJnaW46IDFlbSBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLnN3YWwyLXJhbmdlIGlucHV0IHtcbiAgd2lkdGg6IDgwJTtcbn1cbi5zd2FsMi1yYW5nZSBvdXRwdXQge1xuICB3aWR0aDogMjAlO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnN3YWwyLXJhbmdlIGlucHV0LFxuLnN3YWwyLXJhbmdlIG91dHB1dCB7XG4gIGhlaWdodDogMi42MjVlbTtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAxLjEyNWVtO1xuICBsaW5lLWhlaWdodDogMi42MjVlbTtcbn1cblxuLnN3YWwyLWlucHV0IHtcbiAgaGVpZ2h0OiAyLjYyNWVtO1xuICBwYWRkaW5nOiAwIDAuNzVlbTtcbn1cbi5zd2FsMi1pbnB1dFt0eXBlPW51bWJlcl0ge1xuICBtYXgtd2lkdGg6IDEwZW07XG59XG5cbi5zd2FsMi1maWxlIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxLjEyNWVtO1xufVxuXG4uc3dhbDItdGV4dGFyZWEge1xuICBoZWlnaHQ6IDYuNzVlbTtcbiAgcGFkZGluZzogMC43NWVtO1xufVxuXG4uc3dhbDItc2VsZWN0IHtcbiAgbWluLXdpZHRoOiA1MCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMC4zNzVlbSAwLjYyNWVtO1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxLjEyNWVtO1xufVxuXG4uc3dhbDItcmFkaW8sXG4uc3dhbDItY2hlY2tib3gge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG4uc3dhbDItcmFkaW8gbGFiZWwsXG4uc3dhbDItY2hlY2tib3ggbGFiZWwge1xuICBtYXJnaW46IDAgMC42ZW07XG4gIGZvbnQtc2l6ZTogMS4xMjVlbTtcbn1cbi5zd2FsMi1yYWRpbyBpbnB1dCxcbi5zd2FsMi1jaGVja2JveCBpbnB1dCB7XG4gIG1hcmdpbjogMCAwLjRlbTtcbn1cblxuLnN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwLjYyNWVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuICBjb2xvcjogIzY2NjY2NjtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIiFcIjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMS41ZW07XG4gIG1pbi13aWR0aDogMS41ZW07XG4gIGhlaWdodDogMS41ZW07XG4gIG1hcmdpbjogMCAwLjYyNWVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMjc0NzQ7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMS41ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnN3YWwyLWljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDVlbTtcbiAgaGVpZ2h0OiA1ZW07XG4gIG1hcmdpbjogMS4yNWVtIGF1dG8gMS44NzVlbTtcbiAgYm9yZGVyOiAwLjI1ZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiA1ZW07XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4uc3dhbDItaWNvbiAuc3dhbDItaWNvbi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzLjc1ZW07XG59XG4uc3dhbDItaWNvbi5zd2FsMi1lcnJvciB7XG4gIGJvcmRlci1jb2xvcjogI2YyNzQ3NDtcbiAgY29sb3I6ICNmMjc0NzQ7XG59XG4uc3dhbDItaWNvbi5zd2FsMi1lcnJvciAuc3dhbDIteC1tYXJrIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4LWdyb3c6IDE7XG59XG4uc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePXN3YWwyLXgtbWFyay1saW5lXSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMi4zMTI1ZW07XG4gIHdpZHRoOiAyLjkzNzVlbTtcbiAgaGVpZ2h0OiAwLjMxMjVlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4xMjVlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyNzQ3NDtcbn1cbi5zd2FsMi1pY29uLnN3YWwyLWVycm9yIFtjbGFzc149c3dhbDIteC1tYXJrLWxpbmVdW2NsYXNzJD1sZWZ0XSB7XG4gIGxlZnQ6IDEuMDYyNWVtO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG4uc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePXN3YWwyLXgtbWFyay1saW5lXVtjbGFzcyQ9cmlnaHRdIHtcbiAgcmlnaHQ6IDFlbTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cbi5zd2FsMi1pY29uLnN3YWwyLWVycm9yLnN3YWwyLWljb24tc2hvdyB7XG4gIGFuaW1hdGlvbjogc3dhbDItYW5pbWF0ZS1lcnJvci1pY29uIDAuNXM7XG59XG4uc3dhbDItaWNvbi5zd2FsMi1lcnJvci5zd2FsMi1pY29uLXNob3cgLnN3YWwyLXgtbWFyayB7XG4gIGFuaW1hdGlvbjogc3dhbDItYW5pbWF0ZS1lcnJvci14LW1hcmsgMC41cztcbn1cbi5zd2FsMi1pY29uLnN3YWwyLXdhcm5pbmcge1xuICBib3JkZXItY29sb3I6ICNmYWNlYTg7XG4gIGNvbG9yOiAjZjhiYjg2O1xufVxuLnN3YWwyLWljb24uc3dhbDItaW5mbyB7XG4gIGJvcmRlci1jb2xvcjogIzlkZTBmNjtcbiAgY29sb3I6ICMzZmMzZWU7XG59XG4uc3dhbDItaWNvbi5zd2FsMi1xdWVzdGlvbiB7XG4gIGJvcmRlci1jb2xvcjogI2M5ZGFlMTtcbiAgY29sb3I6ICM4N2FkYmQ7XG59XG4uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIHtcbiAgYm9yZGVyLWNvbG9yOiAjYTVkYzg2O1xuICBjb2xvcjogI2E1ZGM4Njtcbn1cbi5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVdIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMy43NWVtO1xuICBoZWlnaHQ6IDcuNWVtO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVdW2NsYXNzJD1sZWZ0XSB7XG4gIHRvcDogLTAuNDM3NWVtO1xuICBsZWZ0OiAtMi4wNjM1ZW07XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDMuNzVlbSAzLjc1ZW07XG4gIGJvcmRlci1yYWRpdXM6IDcuNWVtIDAgMCA3LjVlbTtcbn1cbi5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVdW2NsYXNzJD1yaWdodF0ge1xuICB0b3A6IC0wLjY4NzVlbTtcbiAgbGVmdDogMS44NzVlbTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAzLjc1ZW07XG4gIGJvcmRlci1yYWRpdXM6IDAgNy41ZW0gNy41ZW0gMDtcbn1cbi5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtcmluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbiAgdG9wOiAtMC4yNWVtO1xuICBsZWZ0OiAtMC4yNWVtO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiAwLjI1ZW0gc29saWQgcmdiYSgxNjUsIDIyMCwgMTM0LCAwLjMpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLWZpeCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgdG9wOiAwLjVlbTtcbiAgbGVmdDogMS42MjVlbTtcbiAgd2lkdGg6IDAuNDM3NWVtO1xuICBoZWlnaHQ6IDUuNjI1ZW07XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG4uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1saW5lXSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIGhlaWdodDogMC4zMTI1ZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuMTI1ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNhNWRjODY7XG59XG4uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1saW5lXVtjbGFzcyQ9dGlwXSB7XG4gIHRvcDogMi44NzVlbTtcbiAgbGVmdDogMC44MTI1ZW07XG4gIHdpZHRoOiAxLjU2MjVlbTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuLnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtbGluZV1bY2xhc3MkPWxvbmddIHtcbiAgdG9wOiAyLjM3NWVtO1xuICByaWdodDogMC41ZW07XG4gIHdpZHRoOiAyLjkzNzVlbTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cbi5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3Muc3dhbDItaWNvbi1zaG93IC5zd2FsMi1zdWNjZXNzLWxpbmUtdGlwIHtcbiAgYW5pbWF0aW9uOiBzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS10aXAgMC43NXM7XG59XG4uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzLnN3YWwyLWljb24tc2hvdyAuc3dhbDItc3VjY2Vzcy1saW5lLWxvbmcge1xuICBhbmltYXRpb246IHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcgMC43NXM7XG59XG4uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzLnN3YWwyLWljb24tc2hvdyAuc3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lLXJpZ2h0IHtcbiAgYW5pbWF0aW9uOiBzd2FsMi1yb3RhdGUtc3VjY2Vzcy1jaXJjdWxhci1saW5lIDQuMjVzIGVhc2UtaW47XG59XG5cbi5zd2FsMi1wcm9ncmVzcy1zdGVwcyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMCAwIDEuMjVlbTtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5zd2FsMi1wcm9ncmVzcy1zdGVwcyBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnN3YWwyLXByb2dyZXNzLXN0ZXBzIC5zd2FsMi1wcm9ncmVzcy1zdGVwIHtcbiAgei1pbmRleDogMjA7XG4gIHdpZHRoOiAyZW07XG4gIGhlaWdodDogMmVtO1xuICBib3JkZXItcmFkaXVzOiAyZW07XG4gIGJhY2tncm91bmQ6ICMzMDg1ZDY7XG4gIGNvbG9yOiAjZmZmO1xuICBsaW5lLWhlaWdodDogMmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc3dhbDItcHJvZ3Jlc3Mtc3RlcHMgLnN3YWwyLXByb2dyZXNzLXN0ZXAuc3dhbDItYWN0aXZlLXByb2dyZXNzLXN0ZXAge1xuICBiYWNrZ3JvdW5kOiAjMzA4NWQ2O1xufVxuLnN3YWwyLXByb2dyZXNzLXN0ZXBzIC5zd2FsMi1wcm9ncmVzcy1zdGVwLnN3YWwyLWFjdGl2ZS1wcm9ncmVzcy1zdGVwIH4gLnN3YWwyLXByb2dyZXNzLXN0ZXAge1xuICBiYWNrZ3JvdW5kOiAjYWRkOGU2O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5zd2FsMi1wcm9ncmVzcy1zdGVwcyAuc3dhbDItcHJvZ3Jlc3Mtc3RlcC5zd2FsMi1hY3RpdmUtcHJvZ3Jlc3Mtc3RlcCB+IC5zd2FsMi1wcm9ncmVzcy1zdGVwLWxpbmUge1xuICBiYWNrZ3JvdW5kOiAjYWRkOGU2O1xufVxuLnN3YWwyLXByb2dyZXNzLXN0ZXBzIC5zd2FsMi1wcm9ncmVzcy1zdGVwLWxpbmUge1xuICB6LWluZGV4OiAxMDtcbiAgd2lkdGg6IDIuNWVtO1xuICBoZWlnaHQ6IDAuNGVtO1xuICBtYXJnaW46IDAgLTFweDtcbiAgYmFja2dyb3VuZDogIzMwODVkNjtcbn1cblxuW2NsYXNzXj1zd2FsMl0ge1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uc3dhbDItc2hvdyB7XG4gIGFuaW1hdGlvbjogc3dhbDItc2hvdyAwLjNzO1xufVxuXG4uc3dhbDItaGlkZSB7XG4gIGFuaW1hdGlvbjogc3dhbDItaGlkZSAwLjE1cyBmb3J3YXJkcztcbn1cblxuLnN3YWwyLW5vYW5pbWF0aW9uIHtcbiAgdHJhbnNpdGlvbjogbm9uZTtcbn1cblxuLnN3YWwyLXNjcm9sbGJhci1tZWFzdXJlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC05OTk5cHg7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi5zd2FsMi1ydGwgLnN3YWwyLWNsb3NlIHtcbiAgcmlnaHQ6IGF1dG87XG4gIGxlZnQ6IDA7XG59XG4uc3dhbDItcnRsIC5zd2FsMi10aW1lci1wcm9ncmVzcy1iYXIge1xuICByaWdodDogMDtcbiAgbGVmdDogYXV0bztcbn1cblxuQHN1cHBvcnRzICgtbXMtYWNjZWxlcmF0b3I6IHRydWUpIHtcbiAgLnN3YWwyLXJhbmdlIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG4gIC5zd2FsMi1yYW5nZSBvdXRwdXQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSksICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG4gIC5zd2FsMi1yYW5nZSBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuICAuc3dhbDItcmFuZ2Ugb3V0cHV0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5ALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xuICAuc3dhbDItY2xvc2U6Zm9jdXMge1xuICAgIG91dGxpbmU6IDJweCBzb2xpZCByZ2JhKDUwLCAxMDAsIDE1MCwgMC40KTtcbiAgfVxufVxuQGtleWZyYW1lcyBzd2FsMi10b2FzdC1zaG93IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC42MjVlbSkgcm90YXRlWigyZGVnKTtcbiAgfVxuICAzMyUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGVaKC0yZGVnKTtcbiAgfVxuICA2NiUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwLjMxMjVlbSkgcm90YXRlWigyZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlWigwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzd2FsMi10b2FzdC1oaWRlIHtcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDFkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3dhbDItdG9hc3QtYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwIHtcbiAgMCUge1xuICAgIHRvcDogMC41NjI1ZW07XG4gICAgbGVmdDogMC4wNjI1ZW07XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgNTQlIHtcbiAgICB0b3A6IDAuMTI1ZW07XG4gICAgbGVmdDogMC4xMjVlbTtcbiAgICB3aWR0aDogMDtcbiAgfVxuICA3MCUge1xuICAgIHRvcDogMC42MjVlbTtcbiAgICBsZWZ0OiAtMC4yNWVtO1xuICAgIHdpZHRoOiAxLjYyNWVtO1xuICB9XG4gIDg0JSB7XG4gICAgdG9wOiAxLjA2MjVlbTtcbiAgICBsZWZ0OiAwLjc1ZW07XG4gICAgd2lkdGg6IDAuNWVtO1xuICB9XG4gIDEwMCUge1xuICAgIHRvcDogMS4xMjVlbTtcbiAgICBsZWZ0OiAwLjE4NzVlbTtcbiAgICB3aWR0aDogMC43NWVtO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcge1xuICAwJSB7XG4gICAgdG9wOiAxLjYyNWVtO1xuICAgIHJpZ2h0OiAxLjM3NWVtO1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIDY1JSB7XG4gICAgdG9wOiAxLjI1ZW07XG4gICAgcmlnaHQ6IDAuOTM3NWVtO1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIDg0JSB7XG4gICAgdG9wOiAwLjkzNzVlbTtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMS4xMjVlbTtcbiAgfVxuICAxMDAlIHtcbiAgICB0b3A6IDAuOTM3NWVtO1xuICAgIHJpZ2h0OiAwLjE4NzVlbTtcbiAgICB3aWR0aDogMS4zNzVlbTtcbiAgfVxufVxuQGtleWZyYW1lcyBzd2FsMi1zaG93IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcbiAgfVxuICA0NSUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIH1cbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3dhbDItaGlkZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwIHtcbiAgMCUge1xuICAgIHRvcDogMS4xODc1ZW07XG4gICAgbGVmdDogMC4wNjI1ZW07XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgNTQlIHtcbiAgICB0b3A6IDEuMDYyNWVtO1xuICAgIGxlZnQ6IDAuMTI1ZW07XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgNzAlIHtcbiAgICB0b3A6IDIuMTg3NWVtO1xuICAgIGxlZnQ6IC0wLjM3NWVtO1xuICAgIHdpZHRoOiAzLjEyNWVtO1xuICB9XG4gIDg0JSB7XG4gICAgdG9wOiAzZW07XG4gICAgbGVmdDogMS4zMTI1ZW07XG4gICAgd2lkdGg6IDEuMDYyNWVtO1xuICB9XG4gIDEwMCUge1xuICAgIHRvcDogMi44MTI1ZW07XG4gICAgbGVmdDogMC44MTI1ZW07XG4gICAgd2lkdGg6IDEuNTYyNWVtO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcge1xuICAwJSB7XG4gICAgdG9wOiAzLjM3NWVtO1xuICAgIHJpZ2h0OiAyLjg3NWVtO1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIDY1JSB7XG4gICAgdG9wOiAzLjM3NWVtO1xuICAgIHJpZ2h0OiAyLjg3NWVtO1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIDg0JSB7XG4gICAgdG9wOiAyLjE4NzVlbTtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMy40Mzc1ZW07XG4gIH1cbiAgMTAwJSB7XG4gICAgdG9wOiAyLjM3NWVtO1xuICAgIHJpZ2h0OiAwLjVlbTtcbiAgICB3aWR0aDogMi45Mzc1ZW07XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3dhbDItcm90YXRlLXN1Y2Nlc3MtY2lyY3VsYXItbGluZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB9XG4gIDUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB9XG4gIDEyJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQwNWRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQwNWRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1lcnJvci14LW1hcmsge1xuICAwJSB7XG4gICAgbWFyZ2luLXRvcDogMS42MjVlbTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICA1MCUge1xuICAgIG1hcmdpbi10b3A6IDEuNjI1ZW07XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjQpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgODAlIHtcbiAgICBtYXJnaW4tdG9wOiAtMC4zNzVlbTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB9XG4gIDEwMCUge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTAwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHN3YWwyLXJvdGF0ZS1sb2FkaW5nIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbmJvZHkuc3dhbDItc2hvd246bm90KC5zd2FsMi1uby1iYWNrZHJvcCk6bm90KC5zd2FsMi10b2FzdC1zaG93bikge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuYm9keS5zd2FsMi1oZWlnaHQtYXV0byB7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xufVxuYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyIHtcbiAgdG9wOiBhdXRvO1xuICByaWdodDogYXV0bztcbiAgYm90dG9tOiBhdXRvO1xuICBsZWZ0OiBhdXRvO1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDAuNjI1ZW0gKiAyKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbmJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lciA+IC5zd2FsMi1tb2RhbCB7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cbmJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3Age1xuICB0b3A6IDA7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1zdGFydCwgYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1sZWZ0IHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1lbmQsIGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtcmlnaHQge1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xufVxuYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlciB7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1zdGFydCwgYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1sZWZ0IHtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbmJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItZW5kLCBib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLXJpZ2h0IHtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5ib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tIHtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cbmJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tc3RhcnQsIGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tbGVmdCB7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbn1cbmJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tZW5kLCBib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXJpZ2h0IHtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cbkBtZWRpYSBwcmludCB7XG4gIGJvZHkuc3dhbDItc2hvd246bm90KC5zd2FsMi1uby1iYWNrZHJvcCk6bm90KC5zd2FsMi10b2FzdC1zaG93bikge1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbCAhaW1wb3J0YW50O1xuICB9XG4gIGJvZHkuc3dhbDItc2hvd246bm90KC5zd2FsMi1uby1iYWNrZHJvcCk6bm90KC5zd2FsMi10b2FzdC1zaG93bikgPiBbYXJpYS1oaWRkZW49dHJ1ZV0ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgYm9keS5zd2FsMi1zaG93bjpub3QoLnN3YWwyLW5vLWJhY2tkcm9wKTpub3QoLnN3YWwyLXRvYXN0LXNob3duKSAuc3dhbDItY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogc3RhdGljICFpbXBvcnRhbnQ7XG4gIH1cbn1cbmJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcCB7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IGF1dG87XG4gIGJvdHRvbTogYXV0bztcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG5ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLWVuZCwgYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1yaWdodCB7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogYXV0bztcbiAgbGVmdDogYXV0bztcbn1cbmJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3Atc3RhcnQsIGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtbGVmdCB7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IGF1dG87XG4gIGJvdHRvbTogYXV0bztcbiAgbGVmdDogMDtcbn1cbmJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItc3RhcnQsIGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItbGVmdCB7XG4gIHRvcDogNTAlO1xuICByaWdodDogYXV0bztcbiAgYm90dG9tOiBhdXRvO1xuICBsZWZ0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyIHtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiBhdXRvO1xuICBib3R0b206IGF1dG87XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLWVuZCwgYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1yaWdodCB7XG4gIHRvcDogNTAlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiBhdXRvO1xuICBsZWZ0OiBhdXRvO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXN0YXJ0LCBib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWxlZnQge1xuICB0b3A6IGF1dG87XG4gIHJpZ2h0OiBhdXRvO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG59XG5ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tIHtcbiAgdG9wOiBhdXRvO1xuICByaWdodDogYXV0bztcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cbmJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tZW5kLCBib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXJpZ2h0IHtcbiAgdG9wOiBhdXRvO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiBhdXRvO1xufVxuYm9keS5zd2FsMi10b2FzdC1jb2x1bW4gLnN3YWwyLXRvYXN0IHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG5ib2R5LnN3YWwyLXRvYXN0LWNvbHVtbiAuc3dhbDItdG9hc3QgLnN3YWwyLWFjdGlvbnMge1xuICBmbGV4OiAxO1xuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICBoZWlnaHQ6IDIuMmVtO1xuICBtYXJnaW4tdG9wOiAwLjMxMjVlbTtcbn1cbmJvZHkuc3dhbDItdG9hc3QtY29sdW1uIC5zd2FsMi10b2FzdCAuc3dhbDItbG9hZGluZyB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuYm9keS5zd2FsMi10b2FzdC1jb2x1bW4gLnN3YWwyLXRvYXN0IC5zd2FsMi1pbnB1dCB7XG4gIGhlaWdodDogMmVtO1xuICBtYXJnaW46IDAuMzEyNWVtIGF1dG87XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuYm9keS5zd2FsMi10b2FzdC1jb2x1bW4gLnN3YWwyLXRvYXN0IC5zd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2Uge1xuICBmb250LXNpemU6IDFlbTtcbn0iLCJAbWl4aW4gaWUge1xuICBAbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zMDI1MDE2MVxuQG1peGluIG5vdCgkaWdub3ItbGlzdC4uLikge1xuICBAaWYgKGxlbmd0aCgkaWdub3ItbGlzdCkgPT0gMSkge1xuICAgICRpZ25vci1saXN0OiBudGgoJGlnbm9yLWxpc3QsIDEpO1xuICB9XG5cbiAgJG5vdC1vdXRwdXQ6ICcnO1xuXG4gIEBlYWNoICRub3QgaW4gJGlnbm9yLWxpc3Qge1xuICAgICRub3Qtb3V0cHV0OiAkbm90LW91dHB1dCArICc6bm90KCN7JG5vdH0pJzsgLy8gc3R5bGVsaW50LWRpc2FibGUtbGluZSBzY3NzL25vLWR1cGxpY2F0ZS1kb2xsYXItdmFyaWFibGVzXG4gIH1cblxuICAmI3skbm90LW91dHB1dH0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iLCIuc3dhbDItY29udGFpbmVyIHtcbiAgLy8gY2VudGVyaW5nXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTA2MDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogJHN3YWwyLWNvbnRhaW5lci1wYWRkaW5nO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHRyYW5zaXRpb246ICRzd2FsMi1iYWNrZHJvcC10cmFuc2l0aW9uO1xuXG4gIC8vIHN3ZWV0YWxlcnQyL2lzc3Vlcy85MDVcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuXG4gICYuc3dhbDItYmFja2Ryb3Atc2hvdyxcbiAgJi5zd2FsMi1ub2FuaW1hdGlvbiB7XG4gICAgYmFja2dyb3VuZDogJHN3YWwyLWJhY2tkcm9wO1xuICB9XG5cbiAgJi5zd2FsMi1iYWNrZHJvcC1oaWRlIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICB9XG5cbiAgJi5zd2FsMi10b3Age1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB9XG5cbiAgJi5zd2FsMi10b3Atc3RhcnQsXG4gICYuc3dhbDItdG9wLWxlZnQge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxuXG4gICYuc3dhbDItdG9wLWVuZCxcbiAgJi5zd2FsMi10b3AtcmlnaHQge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cblxuICAmLnN3YWwyLWNlbnRlciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gICYuc3dhbDItY2VudGVyLXN0YXJ0LFxuICAmLnN3YWwyLWNlbnRlci1sZWZ0IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxuXG4gICYuc3dhbDItY2VudGVyLWVuZCxcbiAgJi5zd2FsMi1jZW50ZXItcmlnaHQge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuXG4gICYuc3dhbDItYm90dG9tIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIH1cblxuICAmLnN3YWwyLWJvdHRvbS1zdGFydCxcbiAgJi5zd2FsMi1ib3R0b20tbGVmdCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxuXG4gICYuc3dhbDItYm90dG9tLWVuZCxcbiAgJi5zd2FsMi1ib3R0b20tcmlnaHQge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG5cbiAgJi5zd2FsMi1ib3R0b20gPiA6Zmlyc3QtY2hpbGQsXG4gICYuc3dhbDItYm90dG9tLXN0YXJ0ID4gOmZpcnN0LWNoaWxkLFxuICAmLnN3YWwyLWJvdHRvbS1sZWZ0ID4gOmZpcnN0LWNoaWxkLFxuICAmLnN3YWwyLWJvdHRvbS1lbmQgPiA6Zmlyc3QtY2hpbGQsXG4gICYuc3dhbDItYm90dG9tLXJpZ2h0ID4gOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICB9XG5cbiAgJi5zd2FsMi1ncm93LWZ1bGxzY3JlZW4gPiAuc3dhbDItbW9kYWwge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICBmbGV4OiAxO1xuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAmLnN3YWwyLWdyb3ctcm93ID4gLnN3YWwyLW1vZGFsIHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgZmxleDogMTtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAmLnN3YWwyLWdyb3ctY29sdW1uIHtcbiAgICBmbGV4OiAxO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAmLnN3YWwyLXRvcCxcbiAgICAmLnN3YWwyLWNlbnRlcixcbiAgICAmLnN3YWwyLWJvdHRvbSB7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgICYuc3dhbDItdG9wLXN0YXJ0LFxuICAgICYuc3dhbDItY2VudGVyLXN0YXJ0LFxuICAgICYuc3dhbDItYm90dG9tLXN0YXJ0LFxuICAgICYuc3dhbDItdG9wLWxlZnQsXG4gICAgJi5zd2FsMi1jZW50ZXItbGVmdCxcbiAgICAmLnN3YWwyLWJvdHRvbS1sZWZ0IHtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIH1cblxuICAgICYuc3dhbDItdG9wLWVuZCxcbiAgICAmLnN3YWwyLWNlbnRlci1lbmQsXG4gICAgJi5zd2FsMi1ib3R0b20tZW5kLFxuICAgICYuc3dhbDItdG9wLXJpZ2h0LFxuICAgICYuc3dhbDItY2VudGVyLXJpZ2h0LFxuICAgICYuc3dhbDItYm90dG9tLXJpZ2h0IHtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICB9XG5cbiAgICAmID4gLnN3YWwyLW1vZGFsIHtcbiAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAmLnN3YWwyLW5vLXRyYW5zaXRpb24ge1xuICAgIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIEBpbmNsdWRlIG5vdCgnLnN3YWwyLXRvcCcsXG4gICcuc3dhbDItdG9wLXN0YXJ0JyxcbiAgJy5zd2FsMi10b3AtZW5kJyxcbiAgJy5zd2FsMi10b3AtbGVmdCcsXG4gICcuc3dhbDItdG9wLXJpZ2h0JyxcbiAgJy5zd2FsMi1jZW50ZXItc3RhcnQnLFxuICAnLnN3YWwyLWNlbnRlci1lbmQnLFxuICAnLnN3YWwyLWNlbnRlci1sZWZ0JyxcbiAgJy5zd2FsMi1jZW50ZXItcmlnaHQnLFxuICAnLnN3YWwyLWJvdHRvbScsXG4gICcuc3dhbDItYm90dG9tLXN0YXJ0JyxcbiAgJy5zd2FsMi1ib3R0b20tZW5kJyxcbiAgJy5zd2FsMi1ib3R0b20tbGVmdCcsXG4gICcuc3dhbDItYm90dG9tLXJpZ2h0JyxcbiAgJy5zd2FsMi1ncm93LWZ1bGxzY3JlZW4nKSB7XG4gICAgJiA+IC5zd2FsMi1tb2RhbCB7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuICB9XG5cbiAgQGluY2x1ZGUgaWUge1xuICAgIC5zd2FsMi1tb2RhbCB7XG4gICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cblxuLnN3YWwyLXBvcHVwIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6ICRzd2FsMi13aWR0aDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAkc3dhbDItcGFkZGluZztcbiAgYm9yZGVyOiAkc3dhbDItYm9yZGVyO1xuICBib3JkZXItcmFkaXVzOiAkc3dhbDItYm9yZGVyLXJhZGl1cztcbiAgYmFja2dyb3VuZDogJHN3YWwyLWJhY2tncm91bmQ7XG4gIGZvbnQtZmFtaWx5OiAkc3dhbDItZm9udDtcbiAgZm9udC1zaXplOiAkc3dhbDItZm9udC1zaXplO1xuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICAmLnN3YWwyLWxvYWRpbmcge1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgfVxufVxuXG4uc3dhbDItaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogJHN3YWwyLWhlYWRlci1wYWRkaW5nO1xufVxuXG4uc3dhbDItdGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAkc3dhbDItdGl0bGUtbWFyZ2luO1xuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogJHN3YWwyLXRpdGxlLWNvbG9yO1xuICBmb250LXNpemU6ICRzd2FsMi10aXRsZS1mb250LXNpemU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuLnN3YWwyLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICB6LWluZGV4OiAxOyAvLyBwcmV2ZW50IHN1Y2VzcyBpY29uIGZyb20gb3ZlcmxhcHBpbmcgYnV0dG9uc1xuICBmbGV4LXdyYXA6ICRzd2FsMi1hY3Rpb25zLWZsZXgtd3JhcDtcbiAgYWxpZ24taXRlbXM6ICRzd2FsMi1hY3Rpb25zLWFsaWduLWl0ZW1zO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRzd2FsMi1hY3Rpb25zLWp1c3RpZnktY29udGVudDtcbiAgd2lkdGg6ICRzd2FsMi1hY3Rpb25zLXdpZHRoO1xuICBtYXJnaW46ICRzd2FsMi1hY3Rpb25zLW1hcmdpbjtcblxuICAmOm5vdCguc3dhbDItbG9hZGluZykge1xuICAgIC5zd2FsMi1zdHlsZWQge1xuICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICBvcGFjaXR5OiAuNDtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkc3dhbDItYnV0dG9uLWRhcmtlbi1ob3ZlciwgJHN3YWwyLWJ1dHRvbi1kYXJrZW4taG92ZXIpO1xuICAgICAgfVxuXG4gICAgICAmOmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkc3dhbDItYnV0dG9uLWRhcmtlbi1hY3RpdmUsICRzd2FsMi1idXR0b24tZGFya2VuLWFjdGl2ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi5zd2FsMi1sb2FkaW5nIHtcbiAgICAuc3dhbDItc3R5bGVkIHtcbiAgICAgICYuc3dhbDItY29uZmlybSB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIHdpZHRoOiAyLjVlbTtcbiAgICAgICAgaGVpZ2h0OiAyLjVlbTtcbiAgICAgICAgbWFyZ2luOiAuNDY4NzVlbTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYW5pbWF0aW9uOiBzd2FsMi1yb3RhdGUtbG9hZGluZyAxLjVzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWw7XG4gICAgICAgIGJvcmRlcjogLjI1ZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLWNhbmNlbCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgOm5vdCguc3dhbDItc3R5bGVkKSB7XG4gICAgICAmLnN3YWwyLWNvbmZpcm0ge1xuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgIGFuaW1hdGlvbjogc3dhbDItcm90YXRlLWxvYWRpbmcgMS41cyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO1xuICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIGxpZ2h0ZW4oJHN3YWwyLWJsYWNrLCA2MCk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggJHN3YWwyLXdoaXRlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5zd2FsMi1zdHlsZWQge1xuICBtYXJnaW46IC4zMTI1ZW07XG4gIHBhZGRpbmc6IC42MjVlbSAyZW07XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgJjpub3QoW2Rpc2FibGVkXSkge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gICYuc3dhbDItY29uZmlybSB7XG4gICAgYm9yZGVyOiAkc3dhbDItY29uZmlybS1idXR0b24tYm9yZGVyO1xuICAgIGJvcmRlci1yYWRpdXM6ICRzd2FsMi1jb25maXJtLWJ1dHRvbi1ib3JkZXItcmFkaXVzO1xuICAgIGJhY2tncm91bmQ6IGluaXRpYWw7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHN3YWwyLWNvbmZpcm0tYnV0dG9uLWJhY2tncm91bmQtY29sb3I7XG4gICAgY29sb3I6ICRzd2FsMi1jb25maXJtLWJ1dHRvbi1jb2xvcjtcbiAgICBmb250LXNpemU6ICRzd2FsMi1jb25maXJtLWJ1dHRvbi1mb250LXNpemU7XG4gIH1cblxuICAmLnN3YWwyLWNhbmNlbCB7XG4gICAgYm9yZGVyOiAkc3dhbDItY2FuY2VsLWJ1dHRvbi1ib3JkZXI7XG4gICAgYm9yZGVyLXJhZGl1czogJHN3YWwyLWNhbmNlbC1idXR0b24tYm9yZGVyLXJhZGl1cztcbiAgICBiYWNrZ3JvdW5kOiBpbml0aWFsO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzd2FsMi1jYW5jZWwtYnV0dG9uLWJhY2tncm91bmQtY29sb3I7XG4gICAgY29sb3I6ICRzd2FsMi1jYW5jZWwtYnV0dG9uLWNvbG9yO1xuICAgIGZvbnQtc2l6ZTogJHN3YWwyLWNhbmNlbC1idXR0b24tZm9udC1zaXplO1xuICB9XG5cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogJHN3YWwyLWJ1dHRvbi1mb2N1cy1vdXRsaW5lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzd2FsMi1idXR0b24tZm9jdXMtYmFja2dyb3VuZC1jb2xvcjtcbiAgICBib3gtc2hhZG93OiAkc3dhbDItYnV0dG9uLWZvY3VzLWJveC1zaGFkb3c7XG4gIH1cblxuICAmOjotbW96LWZvY3VzLWlubmVyIHtcbiAgICBib3JkZXI6IDA7XG4gIH1cbn1cblxuLnN3YWwyLWZvb3RlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46ICRzd2FsMi1mb290ZXItbWFyZ2luO1xuICBwYWRkaW5nOiAkc3dhbDItZm9vdGVyLXBhZGRpbmc7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAkc3dhbDItZm9vdGVyLWJvcmRlci1jb2xvcjtcbiAgY29sb3I6ICRzd2FsMi1mb290ZXItY29sb3I7XG4gIGZvbnQtc2l6ZTogJHN3YWwyLWZvb3Rlci1mb250LXNpemU7XG59XG5cbi5zd2FsMi10aW1lci1wcm9ncmVzcy1iYXItY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6ICRzd2FsMi10aW1lci1wcm9ncmVzcy1iYXItaGVpZ2h0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJHN3YWwyLWJvcmRlci1yYWRpdXM7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRzd2FsMi1ib3JkZXItcmFkaXVzO1xufVxuXG4uc3dhbDItdGltZXItcHJvZ3Jlc3MtYmFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogJHN3YWwyLXRpbWVyLXByb2dyZXNzLWJhci1oZWlnaHQ7XG4gIGJhY2tncm91bmQ6ICRzd2FsMi10aW1lci1wcm9ncmVzcy1iYXItYmFja2dyb3VuZDtcbn1cblxuLnN3YWwyLWltYWdlIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46ICRzd2FsMi1pbWFnZS1tYXJnaW47XG59XG5cbi5zd2FsMi1jbG9zZSB7XG4gIHBvc2l0aW9uOiAkc3dhbDItY2xvc2UtYnV0dG9uLXBvc2l0aW9uO1xuICB6LWluZGV4OiAyOyAvLyBzd2VldGFsZXJ0Mi9pc3N1ZXMvMTYxN1xuICB0b3A6ICRzd2FsMi1jbG9zZS1idXR0b24tZ2FwO1xuICByaWdodDogJHN3YWwyLWNsb3NlLWJ1dHRvbi1nYXA7XG4gIGFsaWduLWl0ZW1zOiAkc3dhbDItY2xvc2UtYnV0dG9uLWFsaWduLWl0ZW1zO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRzd2FsMi1jbG9zZS1idXR0b24tanVzdGlmeS1jb250ZW50O1xuICB3aWR0aDogJHN3YWwyLWNsb3NlLWJ1dHRvbi13aWR0aDtcbiAgaGVpZ2h0OiAkc3dhbDItY2xvc2UtYnV0dG9uLWhlaWdodDtcbiAgcGFkZGluZzogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogJHN3YWwyLWNsb3NlLWJ1dHRvbi10cmFuc2l0aW9uO1xuICBib3JkZXI6ICRzd2FsMi1jbG9zZS1idXR0b24tYm9yZGVyO1xuICBib3JkZXItcmFkaXVzOiAkc3dhbDItY2xvc2UtYnV0dG9uLWJvcmRlci1yYWRpdXM7XG4gIG91dGxpbmU6ICRzd2FsMi1jbG9zZS1idXR0b24tb3V0bGluZTtcbiAgYmFja2dyb3VuZDogJHN3YWwyLWNsb3NlLWJ1dHRvbi1iYWNrZ3JvdW5kO1xuICBjb2xvcjogJHN3YWwyLWNsb3NlLWJ1dHRvbi1jb2xvcjtcbiAgZm9udC1mYW1pbHk6ICRzd2FsMi1jbG9zZS1idXR0b24tZm9udC1mYW1pbHk7XG4gIGZvbnQtc2l6ZTogJHN3YWwyLWNsb3NlLWJ1dHRvbi1mb250LXNpemU7XG4gIGxpbmUtaGVpZ2h0OiAkc3dhbDItY2xvc2UtYnV0dG9uLWxpbmUtaGVpZ2h0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiAkc3dhbDItY2xvc2UtYnV0dG9uLWhvdmVyLXRyYW5zZm9ybTtcbiAgICBiYWNrZ3JvdW5kOiAkc3dhbDItY2xvc2UtYnV0dG9uLWhvdmVyLWJhY2tncm91bmQ7XG4gICAgY29sb3I6ICRzd2FsMi1jbG9zZS1idXR0b24taG92ZXItY29sb3I7XG4gIH1cblxuICAmOjotbW96LWZvY3VzLWlubmVyIHtcbiAgICBib3JkZXI6IDA7XG4gIH1cbn1cblxuLnN3YWwyLWNvbnRlbnQge1xuICB6LWluZGV4OiAxOyAvLyBwcmV2ZW50IHN1Y2VzcyBpY29uIG92ZXJsYXBwaW5nIHRoZSBjb250ZW50XG4gIGp1c3RpZnktY29udGVudDogJHN3YWwyLWNvbnRlbnQtanVzdGlmeS1jb250ZW50O1xuICBtYXJnaW46ICRzd2FsMi1jb250ZW50LW1hcmdpbjtcbiAgcGFkZGluZzogJHN3YWwyLWNvbnRlbnQtcGFkZGluZztcbiAgY29sb3I6ICRzd2FsMi1jb250ZW50LWNvbG9yO1xuICBmb250LXNpemU6ICRzd2FsMi1jb250ZW50LWZvbnQtc2l6ZTtcbiAgZm9udC13ZWlnaHQ6ICRzd2FsMi1jb250ZW50LWZvbnQtd2VpZ2h0O1xuICBsaW5lLWhlaWdodDogJHN3YWwyLWNvbnRlbnQtbGluZS1oZWlnaHQ7XG4gIHRleHQtYWxpZ246ICRzd2FsMi1jb250ZW50LXRleHQtYWxpZ247XG4gIHdvcmQtd3JhcDogJHN3YWwyLWNvbnRlbnQtd29yZC13cmFwO1xufVxuXG4uc3dhbDItaW5wdXQsXG4uc3dhbDItZmlsZSxcbi5zd2FsMi10ZXh0YXJlYSxcbi5zd2FsMi1zZWxlY3QsXG4uc3dhbDItcmFkaW8sXG4uc3dhbDItY2hlY2tib3gge1xuICBtYXJnaW46ICRzd2FsMi1pbnB1dC1tYXJnaW47XG59XG5cbi5zd2FsMi1pbnB1dCxcbi5zd2FsMi1maWxlLFxuLnN3YWwyLXRleHRhcmVhIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6ICRzd2FsMi1pbnB1dC13aWR0aDtcbiAgdHJhbnNpdGlvbjogJHN3YWwyLWlucHV0LXRyYW5zaXRpb247XG4gIGJvcmRlcjogJHN3YWwyLWlucHV0LWJvcmRlcjtcbiAgYm9yZGVyLXJhZGl1czogJHN3YWwyLWlucHV0LWJvcmRlci1yYWRpdXM7XG4gIGJhY2tncm91bmQ6ICRzd2FsMi1pbnB1dC1iYWNrZ3JvdW5kO1xuICBib3gtc2hhZG93OiAkc3dhbDItaW5wdXQtYm94LXNoYWRvdztcbiAgY29sb3I6ICRzd2FsMi1pbnB1dC1jb2xvcjtcbiAgZm9udC1zaXplOiAkc3dhbDItaW5wdXQtZm9udC1zaXplO1xuXG4gICYuc3dhbDItaW5wdXRlcnJvciB7XG4gICAgYm9yZGVyLWNvbG9yOiAkc3dhbDItZXJyb3IgIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiAwIDAgMnB4ICRzd2FsMi1lcnJvciAhaW1wb3J0YW50O1xuICB9XG5cbiAgJjpmb2N1cyB7XG4gICAgYm9yZGVyOiAkc3dhbDItaW5wdXQtZm9jdXMtYm9yZGVyO1xuICAgIG91dGxpbmU6ICRzd2FsMi1pbnB1dC1mb2N1cy1vdXRsaW5lO1xuICAgIGJveC1zaGFkb3c6ICRzd2FsMi1pbnB1dC1mb2N1cy1ib3gtc2hhZG93O1xuICB9XG5cbiAgJjo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiBsaWdodGVuKCRzd2FsMi1ibGFjaywgODApO1xuICB9XG59XG5cbi5zd2FsMi1yYW5nZSB7XG4gIG1hcmdpbjogJHN3YWwyLWlucHV0LW1hcmdpbjtcbiAgYmFja2dyb3VuZDogJHN3YWwyLWJhY2tncm91bmQ7XG5cbiAgaW5wdXQge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cblxuICBvdXRwdXQge1xuICAgIHdpZHRoOiAyMCU7XG4gICAgY29sb3I6ICRzd2FsMi1pbnB1dC1jb2xvcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIGlucHV0LFxuICBvdXRwdXQge1xuICAgIGhlaWdodDogJHN3YWwyLWlucHV0LWhlaWdodDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtc2l6ZTogJHN3YWwyLWlucHV0LWZvbnQtc2l6ZTtcbiAgICBsaW5lLWhlaWdodDogJHN3YWwyLWlucHV0LWhlaWdodDtcbiAgfVxufVxuXG4uc3dhbDItaW5wdXQge1xuICBoZWlnaHQ6ICRzd2FsMi1pbnB1dC1oZWlnaHQ7XG4gIHBhZGRpbmc6ICRzd2FsMi1pbnB1dC1wYWRkaW5nO1xuXG4gICZbdHlwZT0nbnVtYmVyJ10ge1xuICAgIG1heC13aWR0aDogMTBlbTtcbiAgfVxufVxuXG4uc3dhbDItZmlsZSB7XG4gIGJhY2tncm91bmQ6ICRzd2FsMi1pbnB1dC1iYWNrZ3JvdW5kO1xuICBmb250LXNpemU6ICRzd2FsMi1pbnB1dC1mb250LXNpemU7XG59XG5cbi5zd2FsMi10ZXh0YXJlYSB7XG4gIGhlaWdodDogJHN3YWwyLXRleHRhcmVhLWhlaWdodDtcbiAgcGFkZGluZzogJHN3YWwyLXRleHRhcmVhLXBhZGRpbmc7XG59XG5cbi5zd2FsMi1zZWxlY3Qge1xuICBtaW4td2lkdGg6IDUwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAuMzc1ZW0gLjYyNWVtO1xuICBiYWNrZ3JvdW5kOiAkc3dhbDItaW5wdXQtYmFja2dyb3VuZDtcbiAgY29sb3I6ICRzd2FsMi1pbnB1dC1jb2xvcjtcbiAgZm9udC1zaXplOiAkc3dhbDItaW5wdXQtZm9udC1zaXplO1xufVxuXG4uc3dhbDItcmFkaW8sXG4uc3dhbDItY2hlY2tib3gge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogJHN3YWwyLWJhY2tncm91bmQ7XG4gIGNvbG9yOiAkc3dhbDItaW5wdXQtY29sb3I7XG5cbiAgbGFiZWwge1xuICAgIG1hcmdpbjogMCAuNmVtO1xuICAgIGZvbnQtc2l6ZTogJHN3YWwyLWlucHV0LWZvbnQtc2l6ZTtcbiAgfVxuXG4gIGlucHV0IHtcbiAgICBtYXJnaW46IDAgLjRlbTtcbiAgfVxufVxuXG4uc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiAkc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlLWp1c3RpZnktY29udGVudDtcbiAgcGFkZGluZzogJHN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZS1wYWRkaW5nO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiAkc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlLWJhY2tncm91bmQ7XG4gIGNvbG9yOiAkc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlLWNvbG9yO1xuICBmb250LXNpemU6ICRzd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2UtZm9udC1zaXplO1xuICBmb250LXdlaWdodDogJHN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZS1mb250LXdlaWdodDtcblxuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICchJztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEuNWVtO1xuICAgIG1pbi13aWR0aDogMS41ZW07XG4gICAgaGVpZ2h0OiAxLjVlbTtcbiAgICBtYXJnaW46IDAgLjYyNWVtO1xuICAgIHpvb206ICRzd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2UtaWNvbi16b29tO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlLWljb24tYmFja2dyb3VuZDtcbiAgICBjb2xvcjogJHN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZS1pY29uLWNvbG9yO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuXG4uc3dhbDItaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogJHN3YWwyLWljb24tc2l6ZTtcbiAgaGVpZ2h0OiAkc3dhbDItaWNvbi1zaXplO1xuICBtYXJnaW46ICRzd2FsMi1pY29uLW1hcmdpbjtcbiAgem9vbTogJHN3YWwyLWljb24tem9vbTtcbiAgYm9yZGVyOiAuMjVlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LWZhbWlseTogJHN3YWwyLWljb24tZm9udC1mYW1pbHk7XG4gIGxpbmUtaGVpZ2h0OiAkc3dhbDItaWNvbi1zaXplO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuXG4gIC5zd2FsMi1pY29uLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDMuNzVlbTtcbiAgfVxuXG4gICYuc3dhbDItZXJyb3Ige1xuICAgIGJvcmRlci1jb2xvcjogJHN3YWwyLWVycm9yO1xuICAgIGNvbG9yOiAkc3dhbDItZXJyb3I7XG5cbiAgICAuc3dhbDIteC1tYXJrIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICB9XG5cbiAgICBbY2xhc3NePSdzd2FsMi14LW1hcmstbGluZSddIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAyLjMxMjVlbTtcbiAgICAgIHdpZHRoOiAyLjkzNzVlbTtcbiAgICAgIGhlaWdodDogLjMxMjVlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IC4xMjVlbTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzd2FsMi1lcnJvcjtcblxuICAgICAgJltjbGFzcyQ9J2xlZnQnXSB7XG4gICAgICAgIGxlZnQ6IDEuMDYyNWVtO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICB9XG5cbiAgICAgICZbY2xhc3MkPSdyaWdodCddIHtcbiAgICAgICAgcmlnaHQ6IDFlbTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBFcnJvciBpY29uIGFuaW1hdGlvblxuICAgICYuc3dhbDItaWNvbi1zaG93IHtcbiAgICAgIEBpZiAkc3dhbDItaWNvbi1hbmltYXRpb25zIHtcbiAgICAgICAgYW5pbWF0aW9uOiBzd2FsMi1hbmltYXRlLWVycm9yLWljb24gLjVzO1xuXG4gICAgICAgIC5zd2FsMi14LW1hcmsge1xuICAgICAgICAgIGFuaW1hdGlvbjogc3dhbDItYW5pbWF0ZS1lcnJvci14LW1hcmsgLjVzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi5zd2FsMi13YXJuaW5nIHtcbiAgICBib3JkZXItY29sb3I6IGxpZ2h0ZW4oJHN3YWwyLXdhcm5pbmcsIDcpO1xuICAgIGNvbG9yOiAkc3dhbDItd2FybmluZztcbiAgfVxuXG4gICYuc3dhbDItaW5mbyB7XG4gICAgYm9yZGVyLWNvbG9yOiBsaWdodGVuKCRzd2FsMi1pbmZvLCAyMCk7XG4gICAgY29sb3I6ICRzd2FsMi1pbmZvO1xuICB9XG5cbiAgJi5zd2FsMi1xdWVzdGlvbiB7XG4gICAgYm9yZGVyLWNvbG9yOiBsaWdodGVuKCRzd2FsMi1xdWVzdGlvbiwgMjApO1xuICAgIGNvbG9yOiAkc3dhbDItcXVlc3Rpb247XG4gIH1cblxuICAmLnN3YWwyLXN1Y2Nlc3Mge1xuICAgIGJvcmRlci1jb2xvcjogJHN3YWwyLXN1Y2Nlc3M7XG4gICAgY29sb3I6ICRzd2FsMi1zdWNjZXNzO1xuXG4gICAgW2NsYXNzXj0nc3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lJ10ge1xuICAgICAgLy8gRW11bGF0ZSBtb3ZpbmcgY2lyY3VsYXIgbGluZVxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDMuNzVlbTtcbiAgICAgIGhlaWdodDogNy41ZW07XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgICAgICZbY2xhc3MkPSdsZWZ0J10ge1xuICAgICAgICB0b3A6IC0uNDM3NWVtO1xuICAgICAgICBsZWZ0OiAtMi4wNjM1ZW07XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDMuNzVlbSAzLjc1ZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDcuNWVtIDAgMCA3LjVlbTtcbiAgICAgIH1cblxuICAgICAgJltjbGFzcyQ9J3JpZ2h0J10ge1xuICAgICAgICB0b3A6IC0uNjg3NWVtO1xuICAgICAgICBsZWZ0OiAxLjg3NWVtO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDMuNzVlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCA3LjVlbSA3LjVlbSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5zd2FsMi1zdWNjZXNzLXJpbmcge1xuICAgICAgLy8gUmluZ1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgei1pbmRleDogMjtcbiAgICAgIHRvcDogLS4yNWVtO1xuICAgICAgbGVmdDogLS4yNWVtO1xuICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJvcmRlcjogLjI1ZW0gc29saWQgJHN3YWwyLXN1Y2Nlc3MtYm9yZGVyO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIH1cblxuICAgIC5zd2FsMi1zdWNjZXNzLWZpeCB7XG4gICAgICAvLyBIaWRlIGNvcm5lcnMgbGVmdCBmcm9tIGFuaW1hdGlvblxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIHRvcDogLjVlbTtcbiAgICAgIGxlZnQ6IDEuNjI1ZW07XG4gICAgICB3aWR0aDogLjQzNzVlbTtcbiAgICAgIGhlaWdodDogNS42MjVlbTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgfVxuXG4gICAgW2NsYXNzXj0nc3dhbDItc3VjY2Vzcy1saW5lJ10ge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OiAyO1xuICAgICAgaGVpZ2h0OiAuMzEyNWVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogLjEyNWVtO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHN3YWwyLXN1Y2Nlc3M7XG5cbiAgICAgICZbY2xhc3MkPSd0aXAnXSB7XG4gICAgICAgIHRvcDogMi44NzVlbTtcbiAgICAgICAgbGVmdDogLjgxMjVlbTtcbiAgICAgICAgd2lkdGg6IDEuNTYyNWVtO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICB9XG5cbiAgICAgICZbY2xhc3MkPSdsb25nJ10ge1xuICAgICAgICB0b3A6IDIuMzc1ZW07XG4gICAgICAgIHJpZ2h0OiAuNWVtO1xuICAgICAgICB3aWR0aDogMi45Mzc1ZW07XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3VjY2VzcyBpY29uIGFuaW1hdGlvblxuICAgICYuc3dhbDItaWNvbi1zaG93IHtcbiAgICAgIEBpZiAkc3dhbDItaWNvbi1hbmltYXRpb25zIHtcbiAgICAgICAgLnN3YWwyLXN1Y2Nlc3MtbGluZS10aXAge1xuICAgICAgICAgIGFuaW1hdGlvbjogc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwIC43NXM7XG4gICAgICAgIH1cblxuICAgICAgICAuc3dhbDItc3VjY2Vzcy1saW5lLWxvbmcge1xuICAgICAgICAgIGFuaW1hdGlvbjogc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtbG9uZyAuNzVzO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZS1yaWdodCB7XG4gICAgICAgICAgYW5pbWF0aW9uOiBzd2FsMi1yb3RhdGUtc3VjY2Vzcy1jaXJjdWxhci1saW5lIDQuMjVzIGVhc2UtaW47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnN3YWwyLXByb2dyZXNzLXN0ZXBzIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAkc3dhbDItcHJvZ3Jlc3Mtc3RlcHMtbWFyZ2luO1xuICBwYWRkaW5nOiAkc3dhbDItcHJvZ3Jlc3Mtc3RlcHMtcGFkZGluZztcbiAgYmFja2dyb3VuZDogJHN3YWwyLXByb2dyZXNzLXN0ZXBzLWJhY2tncm91bmQ7XG4gIGZvbnQtd2VpZ2h0OiAkc3dhbDItcHJvZ3Jlc3Mtc3RlcHMtZm9udC13ZWlnaHQ7XG5cbiAgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAuc3dhbDItcHJvZ3Jlc3Mtc3RlcCB7XG4gICAgei1pbmRleDogMjA7XG4gICAgd2lkdGg6ICRzd2FsMi1wcm9ncmVzcy1zdGVwLXdpZHRoO1xuICAgIGhlaWdodDogJHN3YWwyLXByb2dyZXNzLXN0ZXAtaGVpZ2h0O1xuICAgIGJvcmRlci1yYWRpdXM6ICRzd2FsMi1wcm9ncmVzcy1zdGVwLWJvcmRlci1yYWRpdXM7XG4gICAgYmFja2dyb3VuZDogJHN3YWwyLWFjdGl2ZS1zdGVwLWJhY2tncm91bmQ7XG4gICAgY29sb3I6ICRzd2FsMi1hY3RpdmUtc3RlcC1jb2xvcjtcbiAgICBsaW5lLWhlaWdodDogJHN3YWwyLXByb2dyZXNzLXN0ZXAtaGVpZ2h0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICYuc3dhbDItYWN0aXZlLXByb2dyZXNzLXN0ZXAge1xuICAgICAgYmFja2dyb3VuZDogJHN3YWwyLWFjdGl2ZS1zdGVwLWJhY2tncm91bmQ7XG5cbiAgICAgIH4gLnN3YWwyLXByb2dyZXNzLXN0ZXAge1xuICAgICAgICBiYWNrZ3JvdW5kOiAkc3dhbDItcHJvZ3Jlc3Mtc3RlcC1iYWNrZ3JvdW5kO1xuICAgICAgICBjb2xvcjogJHN3YWwyLXByb2dyZXNzLXN0ZXAtY29sb3I7XG4gICAgICB9XG5cbiAgICAgIH4gLnN3YWwyLXByb2dyZXNzLXN0ZXAtbGluZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICRzd2FsMi1wcm9ncmVzcy1zdGVwLWJhY2tncm91bmQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnN3YWwyLXByb2dyZXNzLXN0ZXAtbGluZSB7XG4gICAgei1pbmRleDogMTA7XG4gICAgd2lkdGg6ICRzd2FsMi1wcm9ncmVzcy1zdGVwcy1kaXN0YW5jZTtcbiAgICBoZWlnaHQ6IC40ZW07XG4gICAgbWFyZ2luOiAwIC0xcHg7XG4gICAgYmFja2dyb3VuZDogJHN3YWwyLWFjdGl2ZS1zdGVwLWJhY2tncm91bmQ7XG4gIH1cbn1cblxuLy8gZ2l0aHViLmNvbS9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0Mi9pc3N1ZXMvMjY4XG5bY2xhc3NePSdzd2FsMiddIHtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnN3YWwyLXNob3cge1xuICBhbmltYXRpb246ICRzd2FsMi1zaG93LWFuaW1hdGlvbjtcbn1cblxuLnN3YWwyLWhpZGUge1xuICBhbmltYXRpb246ICRzd2FsMi1oaWRlLWFuaW1hdGlvbjtcbn1cblxuLnN3YWwyLW5vYW5pbWF0aW9uIHtcbiAgdHJhbnNpdGlvbjogbm9uZTtcbn1cblxuLy8gTWVhc3VyZSBzY3JvbGxiYXIgd2lkdGggZm9yIHBhZGRpbmcgYm9keSBkdXJpbmcgbW9kYWwgc2hvdy9oaWRlXG4uc3dhbDItc2Nyb2xsYmFyLW1lYXN1cmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTk5OTlweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLy8gUmlnaHQtdG8tbGVmdCBzdXBwb3J0XG4uc3dhbDItcnRsIHtcbiAgLnN3YWwyLWNsb3NlIHtcbiAgICByaWdodDogYXV0bztcbiAgICBsZWZ0OiAkc3dhbDItY2xvc2UtYnV0dG9uLWdhcDtcbiAgfVxuXG4gIC5zd2FsMi10aW1lci1wcm9ncmVzcy1iYXIge1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IGF1dG87XG4gIH1cbn1cbiIsIkBpbXBvcnQgJy4uL3ZhcmlhYmxlcyc7XG5cbi8vIE1pY3Jvc29mdCBFZGdlXG5Ac3VwcG9ydHMgKC1tcy1hY2NlbGVyYXRvcjogdHJ1ZSkge1xuICAuc3dhbDItcmFuZ2Uge1xuICAgIGlucHV0IHtcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgb3V0cHV0IHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbi8vIElFMTFcbkBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSksXG4gICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG4gIC5zd2FsMi1yYW5nZSB7XG4gICAgaW5wdXQge1xuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBvdXRwdXQge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuLy8gRmlyZWZveFxuQC1tb3otZG9jdW1lbnQgdXJsLXByZWZpeCgpIHtcbiAgLnN3YWwyLWNsb3NlIHtcbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IDJweCBzb2xpZCAkc3dhbDItb3V0bGluZS1jb2xvcjtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIEFuaW1hdGlvbnNcbkBrZXlmcmFtZXMgc3dhbDItdG9hc3Qtc2hvdyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLS42MjVlbSkgcm90YXRlWigyZGVnKTtcbiAgfVxuXG4gIDMzJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZVooLTJkZWcpO1xuICB9XG5cbiAgNjYlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLjMxMjVlbSkgcm90YXRlWigyZGVnKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGVaKDBkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3dhbDItdG9hc3QtaGlkZSB7XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWigxZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3dhbDItdG9hc3QtYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwIHtcbiAgMCUge1xuICAgIHRvcDogLjU2MjVlbTtcbiAgICBsZWZ0OiAuMDYyNWVtO1xuICAgIHdpZHRoOiAwO1xuICB9XG5cbiAgNTQlIHtcbiAgICB0b3A6IC4xMjVlbTtcbiAgICBsZWZ0OiAuMTI1ZW07XG4gICAgd2lkdGg6IDA7XG4gIH1cblxuICA3MCUge1xuICAgIHRvcDogLjYyNWVtO1xuICAgIGxlZnQ6IC0uMjVlbTtcbiAgICB3aWR0aDogMS42MjVlbTtcbiAgfVxuXG4gIDg0JSB7XG4gICAgdG9wOiAxLjA2MjVlbTtcbiAgICBsZWZ0OiAuNzVlbTtcbiAgICB3aWR0aDogLjVlbTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRvcDogMS4xMjVlbTtcbiAgICBsZWZ0OiAuMTg3NWVtO1xuICAgIHdpZHRoOiAuNzVlbTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcge1xuICAwJSB7XG4gICAgdG9wOiAxLjYyNWVtO1xuICAgIHJpZ2h0OiAxLjM3NWVtO1xuICAgIHdpZHRoOiAwO1xuICB9XG5cbiAgNjUlIHtcbiAgICB0b3A6IDEuMjVlbTtcbiAgICByaWdodDogLjkzNzVlbTtcbiAgICB3aWR0aDogMDtcbiAgfVxuXG4gIDg0JSB7XG4gICAgdG9wOiAuOTM3NWVtO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxLjEyNWVtO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdG9wOiAuOTM3NWVtO1xuICAgIHJpZ2h0OiAuMTg3NWVtO1xuICAgIHdpZHRoOiAxLjM3NWVtO1xuICB9XG59XG4iLCJAaW1wb3J0ICd0b2FzdHMtYW5pbWF0aW9ucyc7XG5cbi8vIEFwcGVhcmFuY2UgYW5pbWF0aW9uXG5Aa2V5ZnJhbWVzIHN3YWwyLXNob3cge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSguNyk7XG4gIH1cblxuICA0NSUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIH1cblxuICA4MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjk1KTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cblxuLy8gRGlzcHBlYXJhbmNlIGFuaW1hdGlvblxuQGtleWZyYW1lcyBzd2FsMi1oaWRlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuLy8gU3VjY2VzcyBpY29uIGFuaW1hdGlvbnNcbkBrZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwIHtcbiAgMCUge1xuICAgIHRvcDogMS4xODc1ZW07XG4gICAgbGVmdDogLjA2MjVlbTtcbiAgICB3aWR0aDogMDtcbiAgfVxuXG4gIDU0JSB7XG4gICAgdG9wOiAxLjA2MjVlbTtcbiAgICBsZWZ0OiAuMTI1ZW07XG4gICAgd2lkdGg6IDA7XG4gIH1cblxuICA3MCUge1xuICAgIHRvcDogMi4xODc1ZW07XG4gICAgbGVmdDogLS4zNzVlbTtcbiAgICB3aWR0aDogMy4xMjVlbTtcbiAgfVxuXG4gIDg0JSB7XG4gICAgdG9wOiAzZW07XG4gICAgbGVmdDogMS4zMTI1ZW07XG4gICAgd2lkdGg6IDEuMDYyNWVtO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdG9wOiAyLjgxMjVlbTtcbiAgICBsZWZ0OiAuODEyNWVtO1xuICAgIHdpZHRoOiAxLjU2MjVlbTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcge1xuICAwJSB7XG4gICAgdG9wOiAzLjM3NWVtO1xuICAgIHJpZ2h0OiAyLjg3NWVtO1xuICAgIHdpZHRoOiAwO1xuICB9XG5cbiAgNjUlIHtcbiAgICB0b3A6IDMuMzc1ZW07XG4gICAgcmlnaHQ6IDIuODc1ZW07XG4gICAgd2lkdGg6IDA7XG4gIH1cblxuICA4NCUge1xuICAgIHRvcDogMi4xODc1ZW07XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDMuNDM3NWVtO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdG9wOiAyLjM3NWVtO1xuICAgIHJpZ2h0OiAuNWVtO1xuICAgIHdpZHRoOiAyLjkzNzVlbTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHN3YWwyLXJvdGF0ZS1zdWNjZXNzLWNpcmN1bGFyLWxpbmUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgfVxuXG4gIDUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB9XG5cbiAgMTIlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDA1ZGVnKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00MDVkZWcpO1xuICB9XG59XG5cbi8vIEVycm9yIGljb24gYW5pbWF0aW9uc1xuQGtleWZyYW1lcyBzd2FsMi1hbmltYXRlLWVycm9yLXgtbWFyayB7XG4gIDAlIHtcbiAgICBtYXJnaW4tdG9wOiAxLjYyNWVtO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjQpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICA1MCUge1xuICAgIG1hcmdpbi10b3A6IDEuNjI1ZW07XG4gICAgdHJhbnNmb3JtOiBzY2FsZSguNCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIDgwJSB7XG4gICAgbWFyZ2luLXRvcDogLS4zNzVlbTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzd2FsMi1hbmltYXRlLWVycm9yLWljb24ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDEwMGRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3dhbDItcm90YXRlLWxvYWRpbmcge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4iLCJAaW1wb3J0ICd0b2FzdHMtYm9keSc7XG5cbkBtaXhpbiBzd2VldGFsZXJ0Mi1ib2R5KCkge1xuICAmLnN3YWwyLXNob3duIHtcbiAgICBAaW5jbHVkZSBub3QoJy5zd2FsMi1uby1iYWNrZHJvcCcsICcuc3dhbDItdG9hc3Qtc2hvd24nKSB7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuOyAvLyBub3Qgb3ZlcmZsb3cteSBiZWNhdXNlIG9mIFNhcmFyaSwgIzEyNTNcbiAgICB9XG4gIH1cblxuICAmLnN3YWwyLWhlaWdodC1hdXRvIHtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDsgLy8gIzc4MSAjMTEwN1xuICB9XG5cbiAgJi5zd2FsMi1uby1iYWNrZHJvcCB7XG4gICAgLnN3YWwyLWNvbnRhaW5lciB7XG4gICAgICB0b3A6IGF1dG87XG4gICAgICByaWdodDogYXV0bztcbiAgICAgIGJvdHRvbTogYXV0bztcbiAgICAgIGxlZnQ6IGF1dG87XG4gICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtICN7JHN3YWwyLWNvbnRhaW5lci1wYWRkaW5nfSAqIDIpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcblxuICAgICAgJiA+IC5zd2FsMi1tb2RhbCB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICRzd2FsMi1iYWNrZHJvcDtcbiAgICAgIH1cblxuICAgICAgJi5zd2FsMi10b3Age1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLXRvcC1zdGFydCxcbiAgICAgICYuc3dhbDItdG9wLWxlZnQge1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICB9XG5cbiAgICAgICYuc3dhbDItdG9wLWVuZCxcbiAgICAgICYuc3dhbDItdG9wLXJpZ2h0IHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgIH1cblxuICAgICAgJi5zd2FsMi1jZW50ZXIge1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgIH1cblxuICAgICAgJi5zd2FsMi1jZW50ZXItc3RhcnQsXG4gICAgICAmLnN3YWwyLWNlbnRlci1sZWZ0IHtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgIH1cblxuICAgICAgJi5zd2FsMi1jZW50ZXItZW5kLFxuICAgICAgJi5zd2FsMi1jZW50ZXItcmlnaHQge1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgIH1cblxuICAgICAgJi5zd2FsMi1ib3R0b20ge1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLWJvdHRvbS1zdGFydCxcbiAgICAgICYuc3dhbDItYm90dG9tLWxlZnQge1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICB9XG5cbiAgICAgICYuc3dhbDItYm90dG9tLWVuZCxcbiAgICAgICYuc3dhbDItYm90dG9tLXJpZ2h0IHtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAbWVkaWEgcHJpbnQge1xuICAgICYuc3dhbDItc2hvd24ge1xuICAgICAgQGluY2x1ZGUgbm90KCcuc3dhbDItbm8tYmFja2Ryb3AnLCAnLnN3YWwyLXRvYXN0LXNob3duJykge1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGwgIWltcG9ydGFudDtcblxuICAgICAgICA+IFthcmlhLWhpZGRlbj0ndHJ1ZSddIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN3YWwyLWNvbnRhaW5lciB7XG4gICAgICAgICAgcG9zaXRpb246IHN0YXRpYyAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAbWl4aW4gc3dlZXRhbGVydDItdG9hc3RzLWJvZHkoKSB7XG4gICYuc3dhbDItdG9hc3Qtc2hvd24ge1xuICAgIC5zd2FsMi1jb250YWluZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICAgICYuc3dhbDItdG9wIHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgYm90dG9tOiBhdXRvO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgIH1cblxuICAgICAgJi5zd2FsMi10b3AtZW5kLFxuICAgICAgJi5zd2FsMi10b3AtcmlnaHQge1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IGF1dG87XG4gICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICB9XG5cbiAgICAgICYuc3dhbDItdG9wLXN0YXJ0LFxuICAgICAgJi5zd2FsMi10b3AtbGVmdCB7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIGJvdHRvbTogYXV0bztcbiAgICAgICAgbGVmdDogMDtcbiAgICAgIH1cblxuICAgICAgJi5zd2FsMi1jZW50ZXItc3RhcnQsXG4gICAgICAmLnN3YWwyLWNlbnRlci1sZWZ0IHtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICBib3R0b206IGF1dG87XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgIH1cblxuICAgICAgJi5zd2FsMi1jZW50ZXIge1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIGJvdHRvbTogYXV0bztcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgIH1cblxuICAgICAgJi5zd2FsMi1jZW50ZXItZW5kLFxuICAgICAgJi5zd2FsMi1jZW50ZXItcmlnaHQge1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogYXV0bztcbiAgICAgICAgbGVmdDogYXV0bztcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLWJvdHRvbS1zdGFydCxcbiAgICAgICYuc3dhbDItYm90dG9tLWxlZnQge1xuICAgICAgICB0b3A6IGF1dG87XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICB9XG5cbiAgICAgICYuc3dhbDItYm90dG9tIHtcbiAgICAgICAgdG9wOiBhdXRvO1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgIH1cblxuICAgICAgJi5zd2FsMi1ib3R0b20tZW5kLFxuICAgICAgJi5zd2FsMi1ib3R0b20tcmlnaHQge1xuICAgICAgICB0b3A6IGF1dG87XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi5zd2FsMi10b2FzdC1jb2x1bW4ge1xuICAgIC5zd2FsMi10b2FzdCB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG5cbiAgICAgIC5zd2FsMi1hY3Rpb25zIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgICAgICAgaGVpZ2h0OiAyLjJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogLjMxMjVlbTtcbiAgICAgIH1cblxuICAgICAgLnN3YWwyLWxvYWRpbmcge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLnN3YWwyLWlucHV0IHtcbiAgICAgICAgaGVpZ2h0OiAyZW07XG4gICAgICAgIG1hcmdpbjogLjMxMjVlbSBhdXRvO1xuICAgICAgICBmb250LXNpemU6ICRzd2FsMi10b2FzdC1pbnB1dC1mb250LXNpemU7XG4gICAgICB9XG5cbiAgICAgIC5zd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2Uge1xuICAgICAgICBmb250LXNpemU6ICRzd2FsMi10b2FzdC12YWxpZGF0aW9uLWZvbnQtc2l6ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_demo_ui-elements_ui-adv_adv-alert_adv-alert_module_ts.js.map