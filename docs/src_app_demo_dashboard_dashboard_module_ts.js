"use strict";
(self["webpackChunkng_able_pro"] = self["webpackChunkng_able_pro"] || []).push([["src_app_demo_dashboard_dashboard_module_ts"],{

/***/ 94918:
/*!************************************************************!*\
  !*** ./src/app/demo/dashboard/dashboard-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRoutingModule": () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    {
        path: '',
        children: [
            {
                path: 'default',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_chart_js_dist_Chart_js"), __webpack_require__.e("default-node_modules_agm_core___ivy_ngcc___fesm2015_agm-core_js"), __webpack_require__.e("src_app_demo_dashboard_dash-default_dash-default_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dash-default/dash-default.module */ 70844)).then((module) => module.DashDefaultModule)
            },
            {
                path: 'sale',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_dashboard_dash-sale_dash-sale_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dash-sale/dash-sale.module */ 45888)).then((module) => module.DashSaleModule)
            },
            {
                path: 'crm',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_dashboard_dash-crm_dash-crm_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dash-crm/dash-crm.module */ 80775)).then((module) => module.DashCrmModule)
            },
            {
                path: 'analytics',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_dashboard_dash-analytics_dash-analytics_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dash-analytics/dash-analytics.module */ 10874)).then((module) => module.DashAnalyticsModule)
            },
            {
                path: 'project',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_dashboard_dash-project_dash-project_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dash-project/dash-project.module */ 97955)).then((module) => module.DashProjectModule)
            }
        ]
    }
];
class DashboardRoutingModule {
}
DashboardRoutingModule.ɵfac = function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); };
DashboardRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
DashboardRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 24464:
/*!****************************************************!*\
  !*** ./src/app/demo/dashboard/dashboard.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 94918);
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../theme/shared/shared.module */ 95702);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class DashboardModule {
}
DashboardModule.ɵfac = function DashboardModule_Factory(t) { return new (t || DashboardModule)(); };
DashboardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DashboardModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_demo_dashboard_dashboard_module_ts.js.map