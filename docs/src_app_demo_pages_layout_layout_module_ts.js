"use strict";
(self["webpackChunkng_able_pro"] = self["webpackChunkng_able_pro"] || []).push([["src_app_demo_pages_layout_layout_module_ts"],{

/***/ 30612:
/*!************************************************************!*\
  !*** ./src/app/demo/pages/layout/layout-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutRoutingModule": () => (/* binding */ LayoutRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    {
        path: '',
        children: [
            {
                path: 'static',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_demo_pages_layout_common-content_common-content_module_ts"), __webpack_require__.e("src_app_demo_pages_layout_theme-static_theme-static_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./theme-static/theme-static.module */ 45513)).then((module) => module.ThemeStaticModule)
            },
            {
                path: 'fixed',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_demo_pages_layout_common-content_common-content_module_ts"), __webpack_require__.e("src_app_demo_pages_layout_theme-fixed_theme-fixed_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./theme-fixed/theme-fixed.module */ 95916)).then((module) => module.ThemeFixedModule)
            },
            {
                path: 'nav-fixed',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_demo_pages_layout_common-content_common-content_module_ts"), __webpack_require__.e("src_app_demo_pages_layout_theme-nav-fixed_theme-nav-fixed_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./theme-nav-fixed/theme-nav-fixed.module */ 7570)).then((module) => module.ThemeNavFixedModule)
            },
            {
                path: 'collapse-menu',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_demo_pages_layout_common-content_common-content_module_ts"), __webpack_require__.e("src_app_demo_pages_layout_theme-collapse-menu_theme-collapse-menu_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./theme-collapse-menu/theme-collapse-menu.module */ 93729)).then((module) => module.ThemeCollapseMenuModule)
            },
            {
                path: 'vertical-rtl',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_demo_pages_layout_common-content_common-content_module_ts"), __webpack_require__.e("src_app_demo_pages_layout_theme-rtl-v_theme-rtl-v_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./theme-rtl-v/theme-rtl-v.module */ 42779)).then((module) => module.ThemeRtlVModule)
            },
            {
                path: 'horizontal',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_demo_pages_layout_common-content_common-content_module_ts"), __webpack_require__.e("src_app_demo_pages_layout_theme-horizontal_theme-horizontal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./theme-horizontal/theme-horizontal.module */ 36304)).then((module) => module.ThemeHorizontalModule)
            },
            {
                path: 'horizontal-l2',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_demo_pages_layout_common-content_common-content_module_ts"), __webpack_require__.e("src_app_demo_pages_layout_theme-horizontal-l2_theme-horizontal-l2_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./theme-horizontal-l2/theme-horizontal-l2.module */ 2396)).then((module) => module.ThemeHorizontalL2Module)
            },
            {
                path: 'horizontal-rtl',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_demo_pages_layout_common-content_common-content_module_ts"), __webpack_require__.e("src_app_demo_pages_layout_theme-rtl-h_theme-rtl-h_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./theme-rtl-h/theme-rtl-h.module */ 78850)).then((module) => module.ThemeRtlHModule)
            },
            {
                path: 'box',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_demo_pages_layout_common-content_common-content_module_ts"), __webpack_require__.e("src_app_demo_pages_layout_theme-box_theme-box_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./theme-box/theme-box.module */ 48553)).then((module) => module.ThemeBoxModule)
            },
            {
                path: 'light',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_demo_pages_layout_common-content_common-content_module_ts"), __webpack_require__.e("src_app_demo_pages_layout_theme-light_theme-light_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./theme-light/theme-light.module */ 48820)).then((module) => module.ThemeLightModule)
            },
            {
                path: 'dark',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_demo_pages_layout_common-content_common-content_module_ts"), __webpack_require__.e("src_app_demo_pages_layout_theme-dark_theme-dark_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./theme-dark/theme-dark.module */ 5011)).then((module) => module.ThemeDarkModule)
            }
        ]
    }
];
class LayoutRoutingModule {
}
LayoutRoutingModule.ɵfac = function LayoutRoutingModule_Factory(t) { return new (t || LayoutRoutingModule)(); };
LayoutRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LayoutRoutingModule });
LayoutRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LayoutRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 13412:
/*!****************************************************!*\
  !*** ./src/app/demo/pages/layout/layout.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutModule": () => (/* binding */ LayoutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout-routing.module */ 30612);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class LayoutModule {
}
LayoutModule.ɵfac = function LayoutModule_Factory(t) { return new (t || LayoutModule)(); };
LayoutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LayoutModule });
LayoutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _layout_routing_module__WEBPACK_IMPORTED_MODULE_0__.LayoutRoutingModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LayoutModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _layout_routing_module__WEBPACK_IMPORTED_MODULE_0__.LayoutRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_demo_pages_layout_layout_module_ts.js.map