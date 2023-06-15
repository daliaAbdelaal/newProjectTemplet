"use strict";
(self["webpackChunkng_able_pro"] = self["webpackChunkng_able_pro"] || []).push([["src_app_demo_application_task_task_module_ts"],{

/***/ 4729:
/*!**************************************************************!*\
  !*** ./src/app/demo/application/task/task-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskRoutingModule": () => (/* binding */ TaskRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    {
        path: '',
        children: [
            {
                path: 'list',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_demo_application_task_task-list_task-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./task-list/task-list.module */ 74232)).then((module) => module.TaskListModule)
            },
            {
                path: 'board',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_application_task_task-board_task-board_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./task-board/task-board.module */ 66976)).then((module) => module.TaskBoardModule)
            },
            {
                path: 'detail',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_rxjs_add_operator_map_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_demo_application_task_task-detail_task-detail_module_ts-node_modules_rxjs__esm2015_in-1dd097")]).then(__webpack_require__.bind(__webpack_require__, /*! ./task-detail/task-detail.module */ 54910)).then((module) => module.TaskDetailModule)
            }
        ]
    }
];
class TaskRoutingModule {
}
TaskRoutingModule.ɵfac = function TaskRoutingModule_Factory(t) { return new (t || TaskRoutingModule)(); };
TaskRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TaskRoutingModule });
TaskRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TaskRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 76799:
/*!******************************************************!*\
  !*** ./src/app/demo/application/task/task.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskModule": () => (/* binding */ TaskModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _task_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-routing.module */ 4729);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class TaskModule {
}
TaskModule.ɵfac = function TaskModule_Factory(t) { return new (t || TaskModule)(); };
TaskModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TaskModule });
TaskModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _task_routing_module__WEBPACK_IMPORTED_MODULE_0__.TaskRoutingModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TaskModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _task_routing_module__WEBPACK_IMPORTED_MODULE_0__.TaskRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_demo_application_task_task_module_ts.js.map