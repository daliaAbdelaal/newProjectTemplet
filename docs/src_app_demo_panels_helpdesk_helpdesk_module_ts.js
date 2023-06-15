"use strict";
(self["webpackChunkng_able_pro"] = self["webpackChunkng_able_pro"] || []).push([["src_app_demo_panels_helpdesk_helpdesk_module_ts"],{

/***/ 45964:
/*!*****************************************************************!*\
  !*** ./src/app/demo/panels/helpdesk/helpdesk-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpdeskRoutingModule": () => (/* binding */ HelpdeskRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    {
        path: '',
        children: [
            {
                path: 'hd-dashboard',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_panels_helpdesk_hd-dashboard_hd-dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./hd-dashboard/hd-dashboard.module */ 76119)).then((module) => module.HdDashboardModule)
            },
            {
                path: 'hd-customer',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular2-tinymce___ivy_ngcc___fesm2015_angular2-tinymce_js"), __webpack_require__.e("src_app_demo_panels_helpdesk_hd-customer_hd-customer_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./hd-customer/hd-customer.module */ 8937)).then((module) => module.HdCustomerModule)
            },
            {
                path: 'hd-customer-list',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_panels_helpdesk_hd-customer-list_hd-customer-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./hd-customer-list/hd-customer-list.module */ 93552)).then((module) => module.HdCustomerListModule)
            },
            {
                path: 'hd-customer-detail',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_panels_helpdesk_hd-customer-detail_hd-customer-detail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./hd-customer-detail/hd-customer-detail.module */ 1084)).then((module) => module.HdCustomerDetailModule)
            },
            {
                path: 'hd-ticket',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular2-tinymce___ivy_ngcc___fesm2015_angular2-tinymce_js"), __webpack_require__.e("src_app_demo_panels_helpdesk_hd-ticket_hd-ticket_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./hd-ticket/hd-ticket.module */ 27407)).then((module) => module.HdTicketModule)
            }
        ]
    }
];
class HelpdeskRoutingModule {
}
HelpdeskRoutingModule.ɵfac = function HelpdeskRoutingModule_Factory(t) { return new (t || HelpdeskRoutingModule)(); };
HelpdeskRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HelpdeskRoutingModule });
HelpdeskRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HelpdeskRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 54796:
/*!*********************************************************!*\
  !*** ./src/app/demo/panels/helpdesk/helpdesk.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpdeskModule": () => (/* binding */ HelpdeskModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _helpdesk_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpdesk-routing.module */ 45964);
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ 95702);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class HelpdeskModule {
}
HelpdeskModule.ɵfac = function HelpdeskModule_Factory(t) { return new (t || HelpdeskModule)(); };
HelpdeskModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HelpdeskModule });
HelpdeskModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _helpdesk_routing_module__WEBPACK_IMPORTED_MODULE_0__.HelpdeskRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HelpdeskModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _helpdesk_routing_module__WEBPACK_IMPORTED_MODULE_0__.HelpdeskRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_demo_panels_helpdesk_helpdesk_module_ts.js.map