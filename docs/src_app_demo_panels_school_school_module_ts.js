"use strict";
(self["webpackChunkng_able_pro"] = self["webpackChunkng_able_pro"] || []).push([["src_app_demo_panels_school_school_module_ts"],{

/***/ 14832:
/*!*************************************************************!*\
  !*** ./src/app/demo/panels/school/school-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchoolRoutingModule": () => (/* binding */ SchoolRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    {
        path: '',
        children: [
            {
                path: 'sch-dashboard',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_tslib_tslib_es6_js"), __webpack_require__.e("default-node_modules_fullcalendar_angular___ivy_ngcc___fesm2015_fullcalendar-angular_js"), __webpack_require__.e("default-node_modules_fullcalendar_daygrid_main_js-node_modules_fullcalendar_interaction_main_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_demo_panels_school_sch-dashboard_sch-dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sch-dashboard/sch-dashboard.module */ 82744)).then((module) => module.SchDashboardModule)
            },
            {
                path: 'sch-student',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_demo_panels_school_sch-student_sch-student_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sch-student/sch-student.module */ 35908)).then((module) => module.SchStudentModule)
            },
            {
                path: 'sch-parents',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_demo_panels_school_sch-parents_sch-parents_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sch-parents/sch-parents.module */ 85986)).then((module) => module.SchParentsModule)
            },
            {
                path: 'sch-teacher',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_demo_panels_school_sch-teacher_sch-teacher_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sch-teacher/sch-teacher.module */ 57678)).then((module) => module.SchTeacherModule)
            }
        ]
    }
];
class SchoolRoutingModule {
}
SchoolRoutingModule.ɵfac = function SchoolRoutingModule_Factory(t) { return new (t || SchoolRoutingModule)(); };
SchoolRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SchoolRoutingModule });
SchoolRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SchoolRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 80601:
/*!*****************************************************!*\
  !*** ./src/app/demo/panels/school/school.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchoolModule": () => (/* binding */ SchoolModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _school_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./school-routing.module */ 14832);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class SchoolModule {
}
SchoolModule.ɵfac = function SchoolModule_Factory(t) { return new (t || SchoolModule)(); };
SchoolModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SchoolModule });
SchoolModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _school_routing_module__WEBPACK_IMPORTED_MODULE_0__.SchoolRoutingModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SchoolModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _school_routing_module__WEBPACK_IMPORTED_MODULE_0__.SchoolRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_demo_panels_school_school_module_ts.js.map