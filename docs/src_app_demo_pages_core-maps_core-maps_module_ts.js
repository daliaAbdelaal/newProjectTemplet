"use strict";
(self["webpackChunkng_able_pro"] = self["webpackChunkng_able_pro"] || []).push([["src_app_demo_pages_core-maps_core-maps_module_ts"],{

/***/ 36809:
/*!******************************************************************!*\
  !*** ./src/app/demo/pages/core-maps/core-maps-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreMapsRoutingModule": () => (/* binding */ CoreMapsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    {
        path: '',
        children: [
            {
                path: 'google',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_agm_core___ivy_ngcc___fesm2015_agm-core_js"), __webpack_require__.e("src_app_demo_pages_core-maps_google-maps_google-maps_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./google-maps/google-maps.module */ 37282)).then((module) => module.GoogleMapsModule)
            }
        ]
    }
];
class CoreMapsRoutingModule {
}
CoreMapsRoutingModule.ɵfac = function CoreMapsRoutingModule_Factory(t) { return new (t || CoreMapsRoutingModule)(); };
CoreMapsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreMapsRoutingModule });
CoreMapsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreMapsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 83138:
/*!**********************************************************!*\
  !*** ./src/app/demo/pages/core-maps/core-maps.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreMapsModule": () => (/* binding */ CoreMapsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _core_maps_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-maps-routing.module */ 36809);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class CoreMapsModule {
}
CoreMapsModule.ɵfac = function CoreMapsModule_Factory(t) { return new (t || CoreMapsModule)(); };
CoreMapsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CoreMapsModule });
CoreMapsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _core_maps_routing_module__WEBPACK_IMPORTED_MODULE_0__.CoreMapsRoutingModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CoreMapsModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _core_maps_routing_module__WEBPACK_IMPORTED_MODULE_0__.CoreMapsRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_demo_pages_core-maps_core-maps_module_ts.js.map