"use strict";
(self["webpackChunkng_able_pro"] = self["webpackChunkng_able_pro"] || []).push([["src_app_demo_pages_tables_tbl-bootstrap_tbl-bootstrap_module_ts"],{

/***/ 42731:
/*!*********************************************************************************!*\
  !*** ./src/app/demo/pages/tables/tbl-bootstrap/tbl-bootstrap-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TblBootstrapRoutingModule": () => (/* binding */ TblBootstrapRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    {
        path: '',
        children: [
            {
                path: 'bt-basic',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_pages_tables_tbl-bootstrap_tbl-basic_tbl-basic_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tbl-basic/tbl-basic.module */ 76994)).then((module) => module.TblBasicModule)
            },
            {
                path: 'bt-border',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_pages_tables_tbl-bootstrap_tbl-border_tbl-border_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tbl-border/tbl-border.module */ 98486)).then((module) => module.TblBorderModule)
            },
            {
                path: 'bt-sizing',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_pages_tables_tbl-bootstrap_tbl-sizing_tbl-sizing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tbl-sizing/tbl-sizing.module */ 30234)).then((module) => module.TblSizingModule)
            },
            {
                path: 'bt-styling',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_pages_tables_tbl-bootstrap_tbl-styling_tbl-styling_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tbl-styling/tbl-styling.module */ 29105)).then((module) => module.TblStylingModule)
            }
        ]
    }
];
class TblBootstrapRoutingModule {
}
TblBootstrapRoutingModule.ɵfac = function TblBootstrapRoutingModule_Factory(t) { return new (t || TblBootstrapRoutingModule)(); };
TblBootstrapRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TblBootstrapRoutingModule });
TblBootstrapRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TblBootstrapRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 48396:
/*!*************************************************************************!*\
  !*** ./src/app/demo/pages/tables/tbl-bootstrap/tbl-bootstrap.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TblBootstrapModule": () => (/* binding */ TblBootstrapModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _tbl_bootstrap_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tbl-bootstrap-routing.module */ 42731);
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ 95702);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class TblBootstrapModule {
}
TblBootstrapModule.ɵfac = function TblBootstrapModule_Factory(t) { return new (t || TblBootstrapModule)(); };
TblBootstrapModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TblBootstrapModule });
TblBootstrapModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _tbl_bootstrap_routing_module__WEBPACK_IMPORTED_MODULE_0__.TblBootstrapRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TblBootstrapModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _tbl_bootstrap_routing_module__WEBPACK_IMPORTED_MODULE_0__.TblBootstrapRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_demo_pages_tables_tbl-bootstrap_tbl-bootstrap_module_ts.js.map