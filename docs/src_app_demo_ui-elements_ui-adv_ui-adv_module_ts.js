"use strict";
(self["webpackChunkng_able_pro"] = self["webpackChunkng_able_pro"] || []).push([["src_app_demo_ui-elements_ui-adv_ui-adv_module_ts"],{

/***/ 3962:
/*!******************************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-adv/ui-adv-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UiAdvRoutingModule": () => (/* binding */ UiAdvRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    {
        path: '',
        children: [
            {
                path: 'alert',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_ui-elements_ui-adv_adv-alert_adv-alert_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./adv-alert/adv-alert.module */ 47605)).then((module) => module.AdvAlertModule)
            },
            /*{
        path: 'datepicker',
        loadChildren: () => import('./adv-datepicker/adv-datepicker.module').then(module => module.AdvDatepickerModule)
      },*/
            {
                path: 'task-board',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_ui-elements_ui-adv_adv-task-board_adv-task-board_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./adv-task-board/adv-task-board.module */ 16637)).then((module) => module.AdvTaskBoardModule)
            },
            {
                path: 'light-box',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_ui-elements_ui-adv_adv-light-box_adv-light-box_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./adv-light-box/adv-light-box.module */ 19609)).then((module) => module.AdvLightBoxModule)
            },
            {
                path: 'notification',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_tslib_tslib_es6_js"), __webpack_require__.e("src_app_demo_ui-elements_ui-adv_adv-notification_adv-notification_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./adv-notification/adv-notification.module */ 54740)).then((module) => module.AdvNotificationModule)
            },
            {
                path: 'rating',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-bar-rating___ivy_ngcc___index_js"), __webpack_require__.e("src_app_demo_ui-elements_ui-adv_adv-rating_adv-rating_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./adv-rating/adv-rating.module */ 15172)).then((module) => module.AdvRatingModule)
            },
            {
                path: 'range-slider',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_ui-elements_ui-adv_adv-range-slider_adv-range-slider_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./adv-range-slider/adv-range-slider.module */ 15003)).then((module) => module.AdvRangeSliderModule)
            }
        ]
    }
];
class UiAdvRoutingModule {
}
UiAdvRoutingModule.ɵfac = function UiAdvRoutingModule_Factory(t) { return new (t || UiAdvRoutingModule)(); };
UiAdvRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UiAdvRoutingModule });
UiAdvRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UiAdvRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 9493:
/*!**********************************************************!*\
  !*** ./src/app/demo/ui-elements/ui-adv/ui-adv.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UiAdvModule": () => (/* binding */ UiAdvModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ui_adv_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-adv-routing.module */ 3962);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class UiAdvModule {
}
UiAdvModule.ɵfac = function UiAdvModule_Factory(t) { return new (t || UiAdvModule)(); };
UiAdvModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: UiAdvModule });
UiAdvModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ui_adv_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiAdvRoutingModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UiAdvModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ui_adv_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiAdvRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_demo_ui-elements_ui-adv_ui-adv_module_ts.js.map