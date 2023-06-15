"use strict";
(self["webpackChunkng_able_pro"] = self["webpackChunkng_able_pro"] || []).push([["src_app_demo_panels_sis_sis_module_ts"],{

/***/ 26158:
/*!*******************************************************!*\
  !*** ./src/app/demo/panels/sis/sis-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SisRoutingModule": () => (/* binding */ SisRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    {
        path: '',
        children: [
            {
                path: 'sis-dashboard',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_tslib_tslib_es6_js"), __webpack_require__.e("default-node_modules_fullcalendar_angular___ivy_ngcc___fesm2015_fullcalendar-angular_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_demo_panels_sis_sis-dashboard_sis-dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sis-dashboard/sis-dashboard.module */ 11032)).then((module) => module.SisDashboardModule)
            },
            {
                path: 'sis-leave',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_demo_panels_sis_sis-leave_sis-leave_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sis-leave/sis-leave.module */ 10878)).then((module) => module.SisLeaveModule)
            },
            {
                path: 'sis-evaluation',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_demo_panels_sis_sis-evaluation_sis-evaluation_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sis-evaluation/sis-evaluation.module */ 91993)).then((module) => module.SisEvaluationModule)
            },
            {
                path: 'sis-event',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_panels_sis_sis-event_sis-event_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./sis-event/sis-event.module */ 22148)).then((module) => module.SisEventModule)
            },
            {
                path: 'sis-circular',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_panels_sis_sis-circular_sis-circular_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./sis-circular/sis-circular.module */ 36878)).then((module) => module.SisCircularModule)
            },
            {
                path: 'sis-course',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_panels_sis_sis-course_sis-course_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./sis-course/sis-course.module */ 516)).then((module) => module.SisCourseModule)
            }
        ]
    }
];
class SisRoutingModule {
}
SisRoutingModule.ɵfac = function SisRoutingModule_Factory(t) { return new (t || SisRoutingModule)(); };
SisRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SisRoutingModule });
SisRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SisRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 29488:
/*!***********************************************!*\
  !*** ./src/app/demo/panels/sis/sis.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SisModule": () => (/* binding */ SisModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _sis_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sis-routing.module */ 26158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class SisModule {
}
SisModule.ɵfac = function SisModule_Factory(t) { return new (t || SisModule)(); };
SisModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SisModule });
SisModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _sis_routing_module__WEBPACK_IMPORTED_MODULE_0__.SisRoutingModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SisModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _sis_routing_module__WEBPACK_IMPORTED_MODULE_0__.SisRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_demo_panels_sis_sis_module_ts.js.map