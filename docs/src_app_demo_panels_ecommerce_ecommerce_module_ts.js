"use strict";
(self["webpackChunkng_able_pro"] = self["webpackChunkng_able_pro"] || []).push([["src_app_demo_panels_ecommerce_ecommerce_module_ts"],{

/***/ 70010:
/*!*******************************************************************!*\
  !*** ./src/app/demo/panels/ecommerce/ecommerce-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EcommerceRoutingModule": () => (/* binding */ EcommerceRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    {
        path: '',
        children: [
            {
                path: 'ecomm-product',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_demo_panels_ecommerce_ecomm-product_ecomm-product_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ecomm-product/ecomm-product.module */ 17067)).then((module) => module.EcommProductModule)
            },
            {
                path: 'ecomm-product-details',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_demo_panels_ecommerce_ecomm-product-details_ecomm-product-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ecomm-product-details/ecomm-product-details.module */ 20350)).then((module) => module.EcommProductDetailsModule)
            },
            {
                path: 'ecomm-order',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_panels_ecommerce_ecomm-order_ecomm-order_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ecomm-order/ecomm-order.module */ 48763)).then((module) => module.EcommOrderModule)
            },
            {
                path: 'ecomm-checkout',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular-archwizard___ivy_ngcc___fesm2015_angular-archwizard_js"), __webpack_require__.e("src_app_demo_panels_ecommerce_ecomm-checkout_ecomm-checkout_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ecomm-checkout/ecomm-checkout.module */ 2151)).then((module) => module.EcommCheckoutModule)
            },
            {
                path: 'ecomm-cart',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_panels_ecommerce_ecomm-cart_ecomm-cart_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ecomm-cart/ecomm-cart.module */ 43637)).then((module) => module.EcommCartModule)
            },
            {
                path: 'ecomm-customer',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_demo_panels_ecommerce_ecomm-customer_ecomm-customer_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ecomm-customer/ecomm-customer.module */ 72205)).then((module) => module.EcommCustomerModule)
            },
            {
                path: 'ecomm-seller',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_demo_panels_ecommerce_ecomm-seller_ecomm-seller_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ecomm-seller/ecomm-seller.module */ 78230)).then((module) => module.EcommSellerModule)
            }
        ]
    }
];
class EcommerceRoutingModule {
}
EcommerceRoutingModule.ɵfac = function EcommerceRoutingModule_Factory(t) { return new (t || EcommerceRoutingModule)(); };
EcommerceRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EcommerceRoutingModule });
EcommerceRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EcommerceRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 41138:
/*!***********************************************************!*\
  !*** ./src/app/demo/panels/ecommerce/ecommerce.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EcommerceModule": () => (/* binding */ EcommerceModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ecommerce_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ecommerce-routing.module */ 70010);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class EcommerceModule {
}
EcommerceModule.ɵfac = function EcommerceModule_Factory(t) { return new (t || EcommerceModule)(); };
EcommerceModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: EcommerceModule });
EcommerceModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ecommerce_routing_module__WEBPACK_IMPORTED_MODULE_0__.EcommerceRoutingModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EcommerceModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ecommerce_routing_module__WEBPACK_IMPORTED_MODULE_0__.EcommerceRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_demo_panels_ecommerce_ecommerce_module_ts.js.map