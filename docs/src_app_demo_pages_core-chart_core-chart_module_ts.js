"use strict";
(self["webpackChunkng_able_pro"] = self["webpackChunkng_able_pro"] || []).push([["src_app_demo_pages_core-chart_core-chart_module_ts"],{

/***/ 6558:
/*!********************************************************************!*\
  !*** ./src/app/demo/pages/core-chart/core-chart-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreChartRoutingModule": () => (/* binding */ CoreChartRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    {
        path: '',
        children: [
            {
                path: 'apex',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_pages_core-chart_crt-apex_crt-apex_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./crt-apex/crt-apex.module */ 30099)).then((module) => module.CrtApexModule)
            },
            {
                path: 'chart-js',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_chart_js_dist_Chart_js"), __webpack_require__.e("src_app_demo_pages_core-chart_crt-chart-js_crt-chart-js_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./crt-chart-js/crt-chart-js.module */ 9136)).then((module) => module.CrtChartJsModule)
            },
            {
                path: 'high-chart',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_rxjs_add_operator_map_js"), __webpack_require__.e("src_app_demo_pages_core-chart_crt-high-chart_crt-high-chart_module_ts-node_modules_rxjs__esm2-9fae96")]).then(__webpack_require__.bind(__webpack_require__, /*! ./crt-high-chart/crt-high-chart.module */ 38695)).then((module) => module.CrtHighChartModule)
            },
            {
                path: 'peity',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_demo_pages_core-chart_crt-peity_crt-peity_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./crt-peity/crt-peity.module */ 30882)).then((module) => module.CrtPeityModule)
            }
        ]
    }
];
class CoreChartRoutingModule {
}
CoreChartRoutingModule.ɵfac = function CoreChartRoutingModule_Factory(t) { return new (t || CoreChartRoutingModule)(); };
CoreChartRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreChartRoutingModule });
CoreChartRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreChartRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 71849:
/*!************************************************************!*\
  !*** ./src/app/demo/pages/core-chart/core-chart.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreChartModule": () => (/* binding */ CoreChartModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _core_chart_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-chart-routing.module */ 6558);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class CoreChartModule {
}
CoreChartModule.ɵfac = function CoreChartModule_Factory(t) { return new (t || CoreChartModule)(); };
CoreChartModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CoreChartModule });
CoreChartModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _core_chart_routing_module__WEBPACK_IMPORTED_MODULE_0__.CoreChartRoutingModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CoreChartModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _core_chart_routing_module__WEBPACK_IMPORTED_MODULE_0__.CoreChartRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_demo_pages_core-chart_core-chart_module_ts.js.map