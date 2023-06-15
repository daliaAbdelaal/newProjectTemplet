"use strict";
(self["webpackChunkng_able_pro"] = self["webpackChunkng_able_pro"] || []).push([["src_app_demo_application_todo_todo_module_ts"],{

/***/ 11803:
/*!**************************************************************!*\
  !*** ./src/app/demo/application/todo/todo-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoRoutingModule": () => (/* binding */ TodoRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    {
        path: '',
        children: [
            {
                path: 'basic',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_application_todo_todo-list_todo-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./todo-list/todo-list.module */ 35941)).then((module) => module.TodoListModule)
            }
        ]
    }
];
class TodoRoutingModule {
}
TodoRoutingModule.ɵfac = function TodoRoutingModule_Factory(t) { return new (t || TodoRoutingModule)(); };
TodoRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TodoRoutingModule });
TodoRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TodoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 35103:
/*!******************************************************!*\
  !*** ./src/app/demo/application/todo/todo.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoModule": () => (/* binding */ TodoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _todo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-routing.module */ 11803);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class TodoModule {
}
TodoModule.ɵfac = function TodoModule_Factory(t) { return new (t || TodoModule)(); };
TodoModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TodoModule });
TodoModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _todo_routing_module__WEBPACK_IMPORTED_MODULE_0__.TodoRoutingModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TodoModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _todo_routing_module__WEBPACK_IMPORTED_MODULE_0__.TodoRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_demo_application_todo_todo_module_ts.js.map