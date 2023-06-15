"use strict";
(self["webpackChunkng_able_pro"] = self["webpackChunkng_able_pro"] || []).push([["src_app_demo_pages_form-elements_form-elements_module_ts"],{

/***/ 34258:
/*!**************************************************************************!*\
  !*** ./src/app/demo/pages/form-elements/form-elements-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormElementsRoutingModule": () => (/* binding */ FormElementsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    {
        path: '',
        children: [
            {
                path: 'basic',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_pages_form-elements_basic-elements_basic-elements_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./basic-elements/basic-elements.module */ 49994)).then((module) => module.BasicElementsModule)
            },
            {
                path: 'advance',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-chips___ivy_ngcc___fesm2015_ngx-chips_js"), __webpack_require__.e("src_app_demo_pages_form-elements_frm-advance_frm-advance_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./frm-advance/frm-advance.module */ 65241)).then((module) => module.FrmAdvanceModule)
            },
            {
                path: 'validation',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_pages_form-elements_frm-validation_frm-validation_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./frm-validation/frm-validation.module */ 93864)).then((module) => module.FrmValidationModule)
            },
            {
                path: 'masking',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_pages_form-elements_frm-masking_frm-masking_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./frm-masking/frm-masking.module */ 29815)).then((module) => module.FrmMaskingModule)
            },
            {
                path: 'wizard',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular-archwizard___ivy_ngcc___fesm2015_angular-archwizard_js"), __webpack_require__.e("src_app_demo_pages_form-elements_frm-wizard_frm-wizard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./frm-wizard/frm-wizard.module */ 13793)).then((module) => module.FrmWizardModule)
            },
            {
                path: 'picker',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_tslib_tslib_es6_js"), __webpack_require__.e("src_app_demo_pages_form-elements_frm-picker_frm-picker_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./frm-picker/frm-picker.module */ 24104)).then((module) => module.FrmPickerModule)
            },
            {
                path: 'select',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-chips___ivy_ngcc___fesm2015_ngx-chips_js"), __webpack_require__.e("default-node_modules_rxjs_add_operator_map_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_demo_pages_form-elements_frm-select_frm-select_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./frm-select/frm-select.module */ 86743)).then((module) => module.FrmSelectModule)
            }
        ]
    }
];
class FormElementsRoutingModule {
}
FormElementsRoutingModule.ɵfac = function FormElementsRoutingModule_Factory(t) { return new (t || FormElementsRoutingModule)(); };
FormElementsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FormElementsRoutingModule });
FormElementsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FormElementsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 29942:
/*!******************************************************************!*\
  !*** ./src/app/demo/pages/form-elements/form-elements.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormElementsModule": () => (/* binding */ FormElementsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _form_elements_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-elements-routing.module */ 34258);
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ 95702);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class FormElementsModule {
}
FormElementsModule.ɵfac = function FormElementsModule_Factory(t) { return new (t || FormElementsModule)(); };
FormElementsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: FormElementsModule });
FormElementsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _form_elements_routing_module__WEBPACK_IMPORTED_MODULE_0__.FormElementsRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FormElementsModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _form_elements_routing_module__WEBPACK_IMPORTED_MODULE_0__.FormElementsRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_demo_pages_form-elements_form-elements_module_ts.js.map