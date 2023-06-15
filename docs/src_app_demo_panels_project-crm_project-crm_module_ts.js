"use strict";
(self["webpackChunkng_able_pro"] = self["webpackChunkng_able_pro"] || []).push([["src_app_demo_panels_project-crm_project-crm_module_ts"],{

/***/ 28296:
/*!***********************************************************************!*\
  !*** ./src/app/demo/panels/project-crm/project-crm-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectCrmRoutingModule": () => (/* binding */ ProjectCrmRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    {
        path: '',
        children: [
            {
                path: 'pc-dashboard',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_panels_project-crm_pc-dashboard_pc-dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pc-dashboard/pc-dashboard.module */ 47085)).then((module) => module.PcDashboardModule)
            },
            {
                path: 'pc-customers',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_demo_panels_project-crm_pc-customers_pc-customers_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pc-customers/pc-customers.module */ 55549)).then((module) => module.PcCustomersModule)
            },
            {
                path: 'pc-project',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular2-tinymce___ivy_ngcc___fesm2015_angular2-tinymce_js"), __webpack_require__.e("default-node_modules_ngx-chips___ivy_ngcc___fesm2015_ngx-chips_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_demo_panels_project-crm_pc-project_pc-project_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pc-project/pc-project.module */ 51668)).then((module) => module.PcProjectModule)
            },
            {
                path: 'pc-task',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular2-tinymce___ivy_ngcc___fesm2015_angular2-tinymce_js"), __webpack_require__.e("default-node_modules_ngx-chips___ivy_ngcc___fesm2015_ngx-chips_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_demo_panels_project-crm_pc-task_pc-task_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pc-task/pc-task.module */ 56873)).then((module) => module.PcTaskModule)
            }
        ]
    }
];
class ProjectCrmRoutingModule {
}
ProjectCrmRoutingModule.ɵfac = function ProjectCrmRoutingModule_Factory(t) { return new (t || ProjectCrmRoutingModule)(); };
ProjectCrmRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProjectCrmRoutingModule });
ProjectCrmRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProjectCrmRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 32810:
/*!***************************************************************!*\
  !*** ./src/app/demo/panels/project-crm/project-crm.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectCrmModule": () => (/* binding */ ProjectCrmModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _project_crm_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-crm-routing.module */ 28296);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class ProjectCrmModule {
}
ProjectCrmModule.ɵfac = function ProjectCrmModule_Factory(t) { return new (t || ProjectCrmModule)(); };
ProjectCrmModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ProjectCrmModule });
ProjectCrmModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _project_crm_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProjectCrmRoutingModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProjectCrmModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _project_crm_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProjectCrmRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_demo_panels_project-crm_project-crm_module_ts.js.map