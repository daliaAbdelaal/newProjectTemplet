"use strict";
(self["webpackChunkng_able_pro"] = self["webpackChunkng_able_pro"] || []).push([["src_app_demo_extension_editor_editor_module_ts"],{

/***/ 50568:
/*!****************************************************************!*\
  !*** ./src/app/demo/extension/editor/editor-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditorRoutingModule": () => (/* binding */ EditorRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    {
        path: '',
        children: [
            {
                path: 'wysiwyg',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_extension_editor_pell-wysiwyg_pell-wysiwyg_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pell-wysiwyg/pell-wysiwyg.module */ 65883)).then((module) => module.PellWysiwygModule)
            },
            {
                path: 'tinymce',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular2-tinymce___ivy_ngcc___fesm2015_angular2-tinymce_js"), __webpack_require__.e("src_app_demo_extension_editor_ext-tinymce_ext-tinymce_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ext-tinymce/ext-tinymce.module */ 1956)).then((module) => module.ExtTinymceModule)
            }
        ]
    }
];
class EditorRoutingModule {
}
EditorRoutingModule.ɵfac = function EditorRoutingModule_Factory(t) { return new (t || EditorRoutingModule)(); };
EditorRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EditorRoutingModule });
EditorRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EditorRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 60426:
/*!********************************************************!*\
  !*** ./src/app/demo/extension/editor/editor.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditorModule": () => (/* binding */ EditorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _editor_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor-routing.module */ 50568);
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ 95702);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class EditorModule {
}
EditorModule.ɵfac = function EditorModule_Factory(t) { return new (t || EditorModule)(); };
EditorModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: EditorModule });
EditorModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _editor_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditorRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EditorModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _editor_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditorRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_demo_extension_editor_editor_module_ts.js.map