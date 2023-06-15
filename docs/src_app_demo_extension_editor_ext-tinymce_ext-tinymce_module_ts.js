"use strict";
(self["webpackChunkng_able_pro"] = self["webpackChunkng_able_pro"] || []).push([["src_app_demo_extension_editor_ext-tinymce_ext-tinymce_module_ts"],{

/***/ 65460:
/*!*********************************************************************************!*\
  !*** ./src/app/demo/extension/editor/ext-tinymce/ext-tinymce-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExtTinymceRoutingModule": () => (/* binding */ ExtTinymceRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ext_tinymce_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ext-tinymce.component */ 98597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _ext_tinymce_component__WEBPACK_IMPORTED_MODULE_0__.ExtTinymceComponent
    }
];
class ExtTinymceRoutingModule {
}
ExtTinymceRoutingModule.ɵfac = function ExtTinymceRoutingModule_Factory(t) { return new (t || ExtTinymceRoutingModule)(); };
ExtTinymceRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExtTinymceRoutingModule });
ExtTinymceRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExtTinymceRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 98597:
/*!****************************************************************************!*\
  !*** ./src/app/demo/extension/editor/ext-tinymce/ext-tinymce.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExtTinymceComponent": () => (/* binding */ ExtTinymceComponent)
/* harmony export */ });
/* harmony import */ var _node_modules_tinymce_tinymce_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/tinymce/tinymce.min.js */ 68610);
/* harmony import */ var _node_modules_tinymce_tinymce_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tinymce_tinymce_min_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../theme/shared/components/card/card.component */ 84631);
/* harmony import */ var angular2_tinymce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-tinymce */ 85381);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);





class ExtTinymceComponent {
    constructor() { }
    ngOnInit() {
        this.basicContent = '<p>Hello...</p>';
    }
}
ExtTinymceComponent.ɵfac = function ExtTinymceComponent_Factory(t) { return new (t || ExtTinymceComponent)(); };
ExtTinymceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ExtTinymceComponent, selectors: [["app-ext-tinymce"]], decls: 5, vars: 2, consts: [[1, "row"], [1, "col-sm-12"], ["cardTitle", "Tinymce Editor", 3, "options"], [3, "ngModel", "ngModelChange"], ["tinymce", "tinymce"]], template: function ExtTinymceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "app-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "app-tinymce", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ExtTinymceComponent_Template_app_tinymce_ngModelChange_3_listener($event) { return ctx.basicContent = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.basicContent);
    } }, directives: [_theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__.CardComponent, angular2_tinymce__WEBPACK_IMPORTED_MODULE_3__.TinymceComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHQtdGlueW1jZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 1956:
/*!*************************************************************************!*\
  !*** ./src/app/demo/extension/editor/ext-tinymce/ext-tinymce.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExtTinymceModule": () => (/* binding */ ExtTinymceModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ext_tinymce_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ext-tinymce-routing.module */ 65460);
/* harmony import */ var _ext_tinymce_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ext-tinymce.component */ 98597);
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ 95702);
/* harmony import */ var angular2_tinymce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-tinymce */ 85381);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






class ExtTinymceModule {
}
ExtTinymceModule.ɵfac = function ExtTinymceModule_Factory(t) { return new (t || ExtTinymceModule)(); };
ExtTinymceModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ExtTinymceModule });
ExtTinymceModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ext_tinymce_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExtTinymceRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, angular2_tinymce__WEBPACK_IMPORTED_MODULE_5__.TinymceModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ExtTinymceModule, { declarations: [_ext_tinymce_component__WEBPACK_IMPORTED_MODULE_1__.ExtTinymceComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ext_tinymce_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExtTinymceRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, angular2_tinymce__WEBPACK_IMPORTED_MODULE_5__.TinymceModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_demo_extension_editor_ext-tinymce_ext-tinymce_module_ts.js.map