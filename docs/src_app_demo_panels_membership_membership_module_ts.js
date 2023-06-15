"use strict";
(self["webpackChunkng_able_pro"] = self["webpackChunkng_able_pro"] || []).push([["src_app_demo_panels_membership_membership_module_ts"],{

/***/ 27513:
/*!*********************************************************************!*\
  !*** ./src/app/demo/panels/membership/membership-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MembershipRoutingModule": () => (/* binding */ MembershipRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    {
        path: '',
        children: [
            {
                path: 'mshp-dashboard',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_panels_membership_mshp-dashboard_mshp-dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mshp-dashboard/mshp-dashboard.module */ 91072)).then((module) => module.MshpDashboardModule)
            },
            {
                path: 'mshp-email',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular2-tinymce___ivy_ngcc___fesm2015_angular2-tinymce_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_demo_panels_membership_mshp-email_mshp-email_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./mshp-email/mshp-email.module */ 84953)).then((module) => module.MshpEmailModule)
            },
            {
                path: 'mshp-country',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_demo_panels_membership_mshp-country_mshp-country_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./mshp-country/mshp-country.module */ 68809)).then((module) => module.MshpCountryModule)
            },
            {
                path: 'mshp-coupons',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_panels_membership_mshp-coupons_mshp-coupons_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mshp-coupons/mshp-coupons.module */ 65852)).then((module) => module.MshpCouponsModule)
            },
            {
                path: 'mshp-newsletter',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular2-tinymce___ivy_ngcc___fesm2015_angular2-tinymce_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_demo_panels_membership_mshp-newsletter_mshp-newsletter_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./mshp-newsletter/mshp-newsletter.module */ 20390)).then((module) => module.MshpNewsletterModule)
            },
            {
                path: 'mshp-user',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_panels_membership_mshp-user_mshp-user_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mshp-user/mshp-user.module */ 18313)).then((module) => module.MshpUserModule)
            },
            {
                path: 'mshp-membership',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_panels_membership_mshp-membership_mshp-membership_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mshp-membership/mshp-membership.module */ 13174)).then((module) => module.MshpMembershipModule)
            }
        ]
    }
];
class MembershipRoutingModule {
}
MembershipRoutingModule.ɵfac = function MembershipRoutingModule_Factory(t) { return new (t || MembershipRoutingModule)(); };
MembershipRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MembershipRoutingModule });
MembershipRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MembershipRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 72738:
/*!*************************************************************!*\
  !*** ./src/app/demo/panels/membership/membership.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MembershipModule": () => (/* binding */ MembershipModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _membership_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./membership-routing.module */ 27513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class MembershipModule {
}
MembershipModule.ɵfac = function MembershipModule_Factory(t) { return new (t || MembershipModule)(); };
MembershipModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MembershipModule });
MembershipModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _membership_routing_module__WEBPACK_IMPORTED_MODULE_0__.MembershipRoutingModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MembershipModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _membership_routing_module__WEBPACK_IMPORTED_MODULE_0__.MembershipRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_demo_panels_membership_membership_module_ts.js.map