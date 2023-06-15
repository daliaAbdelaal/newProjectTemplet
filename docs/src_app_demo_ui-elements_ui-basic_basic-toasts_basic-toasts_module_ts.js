"use strict";
(self["webpackChunkng_able_pro"] = self["webpackChunkng_able_pro"] || []).push([["src_app_demo_ui-elements_ui-basic_basic-toasts_basic-toasts_module_ts"],{

/***/ 69452:
/*!***************************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-toasts/basic-toasts-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicToastsRoutingModule": () => (/* binding */ BasicToastsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _basic_toasts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic-toasts.component */ 81842);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _basic_toasts_component__WEBPACK_IMPORTED_MODULE_0__.BasicToastsComponent
    }
];
class BasicToastsRoutingModule {
}
BasicToastsRoutingModule.ɵfac = function BasicToastsRoutingModule_Factory(t) { return new (t || BasicToastsRoutingModule)(); };
BasicToastsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BasicToastsRoutingModule });
BasicToastsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BasicToastsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 81842:
/*!**********************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-toasts/basic-toasts.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicToastsComponent": () => (/* binding */ BasicToastsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _theme_shared_components_toast_toast_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../theme/shared/components/toast/toast.service */ 59186);
/* harmony import */ var _theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../theme/shared/components/card/card.component */ 84631);
/* harmony import */ var _theme_shared_components_toast_toast_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../theme/shared/components/toast/toast.component */ 70618);




class BasicToastsComponent {
    constructor(toastEvent) {
        this.toastEvent = toastEvent;
    }
    ngOnInit() { }
}
BasicToastsComponent.ɵfac = function BasicToastsComponent_Factory(t) { return new (t || BasicToastsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_theme_shared_components_toast_toast_service__WEBPACK_IMPORTED_MODULE_0__.ToastService)); };
BasicToastsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: BasicToastsComponent, selectors: [["app-basic-toasts"]], decls: 64, vars: 5, consts: [[1, "row", "btn-page"], [1, "col-sm-6"], ["cardTitle", "Toasts", 3, "options"], [1, "bg-light", "p-4", "mb-2", 2, "height", "150px"], ["uID", "toast1", "toastTitle", "Bootstrap", "toastCaption", "11 min ago"], [1, "btn", "btn-primary", 3, "click"], ["cardTitle", "Translucent", 3, "options"], [1, "bg-dark", "p-4", "mb-2", 2, "height", "150px"], ["uID", "toast2", "toastTitle", "Translucent", "toastCaption", "11 min ago"], ["cardTitle", "Stacking", 3, "options"], [1, "bg-light", "p-4", "mb-2", 2, "height", "325px"], ["uID", "toast3", "toastTitle", "Stacking 1", "toastCaption", "11 min ago", "toastClass", "m-b-10"], ["uID", "toast4", "toastTitle", "Stacking 2", "toastCaption", "11 min ago"], ["cardTitle", "Data-delay", 3, "options"], ["uID", "toast5", "toastTitle", "Delay 1s", "toastCaption", "11 min ago", "toastClass", "m-b-10"], ["uID", "toast6", "toastTitle", "Delay 2s", "toastCaption", "11 min ago", "toastClass", "m-b-10"], ["uID", "toast7", "toastTitle", "Delay 5s", "toastCaption", "11 min ago"], [1, "col"], [1, "col-sm-12"], ["cardTitle", "Placement", 3, "options"], [1, "position-relative", "bg-light", "p-4", "mb-2", 2, "height", "250px"], [2, "position", "absolute", "top", "40px", "left", "40px"], ["uID", "toastLeft", "toastTitle", "Placement Left", "toastCaption", "11 min ago", "toastClass", "m-b-10"], [1, "d-flex", "justify-content-center", 2, "position", "absolute", "top", "40px", "left", "40px", "right", "40px"], ["uID", "toastCenter", "toastTitle", "Placement Center", "toastCaption", "11 min ago", "toastClass", "m-b-10"], [2, "position", "absolute", "top", "40px", "right", "40px"], ["uID", "toastRight", "toastTitle", "Placement Right", "toastCaption", "11 min ago", "toastClass", "m-b-10"], [1, "d-flex", "justify-content-center", "align-items-center", 2, "min-height", "100%", "position", "absolute", "top", "0px", "right", "0px", "left", "0"], ["uID", "toastMiddle", "toastTitle", "Placement Middle", "toastCaption", "11 min ago", "toastClass", "m-b-10"]], template: function BasicToastsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "app-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "app-toast", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Hello, world! This is a toast message. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BasicToastsComponent_Template_button_click_6_listener() { return ctx.toastEvent.toast({ uid: "toast1" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "click");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "app-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "app-toast", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Hello, world! This is a toast message. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BasicToastsComponent_Template_button_click_13_listener() { return ctx.toastEvent.toast({ uid: "toast2" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "click");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "app-card", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "app-toast", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " Hello, world! This is a toast message. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "app-toast", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " Hello, world! This is a toast message. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BasicToastsComponent_Template_button_click_22_listener() { ctx.toastEvent.toast({ uid: "toast3", delay: 1000 }); return ctx.toastEvent.toast({ uid: "toast4", delay: 1000 }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " click ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "app-card", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "app-toast", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, " Hello, world! This is a toast message. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "app-toast", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, " Hello, world! This is a toast message. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "app-toast", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, " Hello, world! This is a toast message. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BasicToastsComponent_Template_button_click_34_listener() { return ctx.toastEvent.toast({ uid: "toast5", delay: 1000 }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "1 sec");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BasicToastsComponent_Template_button_click_36_listener() { return ctx.toastEvent.toast({ uid: "toast6", delay: 3000 }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "3 sec");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BasicToastsComponent_Template_button_click_38_listener() { return ctx.toastEvent.toast({ uid: "toast7", delay: 5000 }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "5 sec");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "app-card", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "app-toast", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, " Hello, world! This is a toast message. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "app-toast", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, " Hello, world! This is a toast message. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "app-toast", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, " Hello, world! This is a toast message. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "app-toast", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, " Hello, world! This is a toast message. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BasicToastsComponent_Template_button_click_56_listener() { return ctx.toastEvent.toast({ uid: "toastLeft", delay: 1500 }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BasicToastsComponent_Template_button_click_58_listener() { return ctx.toastEvent.toast({ uid: "toastCenter", delay: 1500 }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BasicToastsComponent_Template_button_click_60_listener() { return ctx.toastEvent.toast({ uid: "toastRight", delay: 1500 }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Right");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BasicToastsComponent_Template_button_click_62_listener() { return ctx.toastEvent.toast({ uid: "toastMiddle", delay: 1500 }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "Middle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", false);
    } }, directives: [_theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__.CardComponent, _theme_shared_components_toast_toast_component__WEBPACK_IMPORTED_MODULE_2__.ToastComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNpYy10b2FzdHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 90651:
/*!*******************************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/basic-toasts/basic-toasts.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicToastsModule": () => (/* binding */ BasicToastsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _basic_toasts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic-toasts-routing.module */ 69452);
/* harmony import */ var _basic_toasts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic-toasts.component */ 81842);
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ 95702);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class BasicToastsModule {
}
BasicToastsModule.ɵfac = function BasicToastsModule_Factory(t) { return new (t || BasicToastsModule)(); };
BasicToastsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: BasicToastsModule });
BasicToastsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _basic_toasts_routing_module__WEBPACK_IMPORTED_MODULE_0__.BasicToastsRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](BasicToastsModule, { declarations: [_basic_toasts_component__WEBPACK_IMPORTED_MODULE_1__.BasicToastsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _basic_toasts_routing_module__WEBPACK_IMPORTED_MODULE_0__.BasicToastsRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_demo_ui-elements_ui-basic_basic-toasts_basic-toasts_module_ts.js.map