"use strict";
(self["webpackChunkng_able_pro"] = self["webpackChunkng_able_pro"] || []).push([["src_app_demo_widget_widget_module_ts"],{

/***/ 27247:
/*!******************************************************!*\
  !*** ./src/app/demo/widget/widget-routing.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WidgetRoutingModule": () => (/* binding */ WidgetRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    {
        path: '',
        children: [
            {
                path: 'statistic',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_tslib_tslib_es6_js"), __webpack_require__.e("src_app_demo_widget_widget-statistic_widget-statistic_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./widget-statistic/widget-statistic.module */ 12788)).then((module) => module.WidgetStatisticModule)
            },
            {
                path: 'data',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_widget_widget-data_widget-data_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./widget-data/widget-data.module */ 99439)).then((module) => module.WidgetDataModule)
            },
            {
                path: 'chart',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-bar-rating___ivy_ngcc___index_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_demo_widget_widget-chart_widget-chart_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./widget-chart/widget-chart.module */ 30879)).then((module) => module.WidgetChartModule)
            }
        ]
    }
];
class WidgetRoutingModule {
}
WidgetRoutingModule.ɵfac = function WidgetRoutingModule_Factory(t) { return new (t || WidgetRoutingModule)(); };
WidgetRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WidgetRoutingModule });
WidgetRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WidgetRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 40220:
/*!**********************************************!*\
  !*** ./src/app/demo/widget/widget.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WidgetModule": () => (/* binding */ WidgetModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _widget_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget-routing.module */ 27247);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class WidgetModule {
}
WidgetModule.ɵfac = function WidgetModule_Factory(t) { return new (t || WidgetModule)(); };
WidgetModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: WidgetModule });
WidgetModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _widget_routing_module__WEBPACK_IMPORTED_MODULE_0__.WidgetRoutingModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](WidgetModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _widget_routing_module__WEBPACK_IMPORTED_MODULE_0__.WidgetRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_demo_widget_widget_module_ts.js.map