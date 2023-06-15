"use strict";
(self["webpackChunkng_able_pro"] = self["webpackChunkng_able_pro"] || []).push([["src_app_demo_application_gallery_gallery_module_ts"],{

/***/ 72743:
/*!********************************************************************!*\
  !*** ./src/app/demo/application/gallery/gallery-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalleryRoutingModule": () => (/* binding */ GalleryRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    {
        path: '',
        children: [
            {
                path: 'grid',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_application_gallery_gallery-grid_gallery-grid_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./gallery-grid/gallery-grid.module */ 12965)).then((module) => module.GalleryGridModule)
            },
            {
                path: 'masonry',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_application_gallery_gallery-masonry_gallery-masonry_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./gallery-masonry/gallery-masonry.module */ 52130)).then((module) => module.GalleryMasonryModule)
            }
        ]
    }
];
class GalleryRoutingModule {
}
GalleryRoutingModule.ɵfac = function GalleryRoutingModule_Factory(t) { return new (t || GalleryRoutingModule)(); };
GalleryRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GalleryRoutingModule });
GalleryRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GalleryRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 96159:
/*!************************************************************!*\
  !*** ./src/app/demo/application/gallery/gallery.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalleryModule": () => (/* binding */ GalleryModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _gallery_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallery-routing.module */ 72743);
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ 95702);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class GalleryModule {
}
GalleryModule.ɵfac = function GalleryModule_Factory(t) { return new (t || GalleryModule)(); };
GalleryModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: GalleryModule });
GalleryModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _gallery_routing_module__WEBPACK_IMPORTED_MODULE_0__.GalleryRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](GalleryModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _gallery_routing_module__WEBPACK_IMPORTED_MODULE_0__.GalleryRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_demo_application_gallery_gallery_module_ts.js.map