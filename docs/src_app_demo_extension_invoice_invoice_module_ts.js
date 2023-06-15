"use strict";
(self["webpackChunkng_able_pro"] = self["webpackChunkng_able_pro"] || []).push([["src_app_demo_extension_invoice_invoice_module_ts"],{

/***/ 65934:
/*!******************************************************************!*\
  !*** ./src/app/demo/extension/invoice/invoice-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceRoutingModule": () => (/* binding */ InvoiceRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    {
        path: '',
        children: [
            {
                path: 'basic',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_extension_invoice_invoice-basic_invoice-basic_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./invoice-basic/invoice-basic.module */ 75910)).then((module) => module.InvoiceBasicModule)
            },
            {
                path: 'summary',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_extension_invoice_invoice-summary_invoice-summary_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./invoice-summary/invoice-summary.module */ 69031)).then((module) => module.InvoiceSummaryModule)
            },
            {
                path: 'list',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_extension_invoice_invoice-list_invoice-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./invoice-list/invoice-list.module */ 93820)).then((module) => module.InvoiceListModule)
            }
        ]
    }
];
class InvoiceRoutingModule {
}
InvoiceRoutingModule.ɵfac = function InvoiceRoutingModule_Factory(t) { return new (t || InvoiceRoutingModule)(); };
InvoiceRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InvoiceRoutingModule });
InvoiceRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InvoiceRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 30980:
/*!**********************************************************!*\
  !*** ./src/app/demo/extension/invoice/invoice.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceModule": () => (/* binding */ InvoiceModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _invoice_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice-routing.module */ 65934);
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ 95702);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class InvoiceModule {
}
InvoiceModule.ɵfac = function InvoiceModule_Factory(t) { return new (t || InvoiceModule)(); };
InvoiceModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: InvoiceModule });
InvoiceModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _invoice_routing_module__WEBPACK_IMPORTED_MODULE_0__.InvoiceRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](InvoiceModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _invoice_routing_module__WEBPACK_IMPORTED_MODULE_0__.InvoiceRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_demo_extension_invoice_invoice_module_ts.js.map