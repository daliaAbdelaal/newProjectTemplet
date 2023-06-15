"use strict";
(self["webpackChunkng_able_pro"] = self["webpackChunkng_able_pro"] || []).push([["src_app_demo_ui-elements_ui-basic_ui-basic_module_ts"],{

/***/ 85334:
/*!**********************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/ui-basic-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UiBasicRoutingModule": () => (/* binding */ UiBasicRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    {
        path: '',
        children: [
            {
                path: 'alert',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_ui-elements_ui-basic_basic-alert_basic-alert_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./basic-alert/basic-alert.module */ 91542)).then((module) => module.BasicAlertModule)
            },
            {
                path: 'button',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_ui-elements_ui-basic_basic-button_basic-button_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./basic-button/basic-button.module */ 48367)).then((module) => module.BasicButtonModule)
            },
            {
                path: 'badges',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_ui-elements_ui-basic_basic-badge_basic-badge_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./basic-badge/basic-badge.module */ 22042)).then((module) => module.BasicBadgeModule)
            },
            {
                path: 'breadcrumb-paging',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_ui-elements_ui-basic_breadcrumb-paging_breadcrumb-paging_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./breadcrumb-paging/breadcrumb-paging.module */ 42463)).then((module) => module.BreadcrumbPagingModule)
            },
            {
                path: 'cards',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_ui-elements_ui-basic_basic-cards_basic-cards_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./basic-cards/basic-cards.module */ 75854)).then((module) => module.BasicCardsModule)
            },
            {
                path: 'collapse',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_ui-elements_ui-basic_basic-collapse_basic-collapse_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./basic-collapse/basic-collapse.module */ 2662)).then((module) => module.BasicCollapseModule)
            },
            {
                path: 'carousel',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_ui-elements_ui-basic_basic-carousel_basic-carousel_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./basic-carousel/basic-carousel.module */ 61132)).then((module) => module.BasicCarouselModule)
            },
            {
                path: 'grid-system',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_ui-elements_ui-basic_basic-grid_basic-grid_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./basic-grid/basic-grid.module */ 88678)).then((module) => module.BasicGridModule)
            },
            {
                path: 'progress',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_ui-elements_ui-basic_basic-progress-bar_basic-progress-bar_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./basic-progress-bar/basic-progress-bar.module */ 31980)).then((module) => module.BasicProgressBarModule)
            },
            {
                path: 'modal',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_ui-elements_ui-basic_basic-modal_basic-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./basic-modal/basic-modal.module */ 77481)).then((module) => module.BasicModalModule)
            },
            {
                path: 'spinner',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_ui-elements_ui-basic_basic-spinner_basic-spinner_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./basic-spinner/basic-spinner.module */ 60841)).then((module) => module.BasicSpinnerModule)
            },
            {
                path: 'tabs-pills',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_ui-elements_ui-basic_basic-tabs-pills_basic-tabs-pills_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./basic-tabs-pills/basic-tabs-pills.module */ 86420)).then((module) => module.BasicTabsPillsModule)
            },
            {
                path: 'typography',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_ui-elements_ui-basic_basic-typography_basic-typography_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./basic-typography/basic-typography.module */ 80826)).then((module) => module.BasicTypographyModule)
            },
            {
                path: 'tooltip-popovers',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_ui-elements_ui-basic_basic-tooltip-popovers_basic-tooltip-popovers_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./basic-tooltip-popovers/basic-tooltip-popovers.module */ 14409)).then((module) => module.BasicTooltipPopoversModule)
            },
            {
                path: 'toasts',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_ui-elements_ui-basic_basic-toasts_basic-toasts_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./basic-toasts/basic-toasts.module */ 90651)).then((module) => module.BasicToastsModule)
            },
            {
                path: 'other',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_ui-elements_ui-basic_basic-other_basic-other_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./basic-other/basic-other.module */ 42079)).then((module) => module.BasicOtherModule)
            }
        ]
    }
];
class UiBasicRoutingModule {
}
UiBasicRoutingModule.ɵfac = function UiBasicRoutingModule_Factory(t) { return new (t || UiBasicRoutingModule)(); };
UiBasicRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UiBasicRoutingModule });
UiBasicRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UiBasicRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 31925:
/*!**************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-basic/ui-basic.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UiBasicModule": () => (/* binding */ UiBasicModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ui_basic_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-basic-routing.module */ 85334);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class UiBasicModule {
}
UiBasicModule.ɵfac = function UiBasicModule_Factory(t) { return new (t || UiBasicModule)(); };
UiBasicModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: UiBasicModule });
UiBasicModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ui_basic_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiBasicRoutingModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UiBasicModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ui_basic_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiBasicRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_demo_ui-elements_ui-basic_ui-basic_module_ts.js.map