"use strict";
(self["webpackChunkng_able_pro"] = self["webpackChunkng_able_pro"] || []).push([["src_app_demo_panels_hospital_hospital_module_ts"],{

/***/ 78811:
/*!*****************************************************************!*\
  !*** ./src/app/demo/panels/hospital/hospital-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HospitalRoutingModule": () => (/* binding */ HospitalRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    {
        path: '',
        children: [
            {
                path: 'hosp-dashboard',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_panels_hospital_hosp-dashboard_hosp-dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./hosp-dashboard/hosp-dashboard.module */ 67939)).then((module) => module.HospDashboardModule)
            },
            {
                path: 'hosp-department',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_demo_panels_hospital_hosp-department_hosp-department_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./hosp-department/hosp-department.module */ 64417)).then((module) => module.HospDepartmentModule)
            },
            {
                path: 'hosp-doctor',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_demo_panels_hospital_hosp-doctor_hosp-doctor_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./hosp-doctor/hosp-doctor.module */ 48939)).then((module) => module.HospDoctorModule)
            },
            {
                path: 'hosp-patient',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_demo_panels_hospital_hosp-patient_hosp-patient_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./hosp-patient/hosp-patient.module */ 68707)).then((module) => module.HospPatientModule)
            },
            {
                path: 'hosp-nurse',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_demo_panels_hospital_hosp-nurse_hosp-nurse_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./hosp-nurse/hosp-nurse.module */ 46542)).then((module) => module.HospNurseModule)
            },
            {
                path: 'hosp-pharmacist',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_demo_panels_hospital_hosp-pharmacist_hosp-pharmacist_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./hosp-pharmacist/hosp-pharmacist.module */ 96989)).then((module) => module.HospPharmacistModule)
            },
            {
                path: 'hosp-laboratory',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_demo_panels_hospital_hosp-laboratory_hosp-laboratory_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./hosp-laboratory/hosp-laboratory.module */ 34269)).then((module) => module.HospLaboratoryModule)
            }
        ]
    }
];
class HospitalRoutingModule {
}
HospitalRoutingModule.ɵfac = function HospitalRoutingModule_Factory(t) { return new (t || HospitalRoutingModule)(); };
HospitalRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HospitalRoutingModule });
HospitalRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HospitalRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 85845:
/*!*********************************************************!*\
  !*** ./src/app/demo/panels/hospital/hospital.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HospitalModule": () => (/* binding */ HospitalModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _hospital_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hospital-routing.module */ 78811);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class HospitalModule {
}
HospitalModule.ɵfac = function HospitalModule_Factory(t) { return new (t || HospitalModule)(); };
HospitalModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HospitalModule });
HospitalModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _hospital_routing_module__WEBPACK_IMPORTED_MODULE_0__.HospitalRoutingModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HospitalModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _hospital_routing_module__WEBPACK_IMPORTED_MODULE_0__.HospitalRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_demo_panels_hospital_hospital_module_ts.js.map