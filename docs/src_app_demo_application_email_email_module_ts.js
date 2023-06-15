"use strict";
(self["webpackChunkng_able_pro"] = self["webpackChunkng_able_pro"] || []).push([["src_app_demo_application_email_email_module_ts"],{

/***/ 3041:
/*!****************************************************************!*\
  !*** ./src/app/demo/application/email/email-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailRoutingModule": () => (/* binding */ EmailRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    {
        path: '',
        children: [
            {
                path: 'mail-inbox',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_application_email_mail-inbox_mail-inbox_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mail-inbox/mail-inbox.module */ 83466)).then((module) => module.MailInboxModule)
            },
            {
                path: 'mail-read',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_application_email_mail-read_mail-read_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mail-read/mail-read.module */ 29253)).then((module) => module.MailReadModule)
            },
            {
                path: 'mail-compose',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular2-tinymce___ivy_ngcc___fesm2015_angular2-tinymce_js"), __webpack_require__.e("src_app_demo_application_email_mail-compose_mail-compose_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./mail-compose/mail-compose.module */ 35995)).then((module) => module.MailComposeModule)
            }
        ]
    }
];
class EmailRoutingModule {
}
EmailRoutingModule.ɵfac = function EmailRoutingModule_Factory(t) { return new (t || EmailRoutingModule)(); };
EmailRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EmailRoutingModule });
EmailRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmailRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 38457:
/*!********************************************************!*\
  !*** ./src/app/demo/application/email/email.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailModule": () => (/* binding */ EmailModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _email_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email-routing.module */ 3041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class EmailModule {
}
EmailModule.ɵfac = function EmailModule_Factory(t) { return new (t || EmailModule)(); };
EmailModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: EmailModule });
EmailModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _email_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmailRoutingModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EmailModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _email_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmailRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_demo_application_email_email_module_ts.js.map