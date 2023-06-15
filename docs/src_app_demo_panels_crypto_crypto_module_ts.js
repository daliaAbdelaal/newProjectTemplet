"use strict";
(self["webpackChunkng_able_pro"] = self["webpackChunkng_able_pro"] || []).push([["src_app_demo_panels_crypto_crypto_module_ts"],{

/***/ 14750:
/*!*************************************************************!*\
  !*** ./src/app/demo/panels/crypto/crypto-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CryptoRoutingModule": () => (/* binding */ CryptoRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    {
        path: '',
        children: [
            {
                path: 'cp-dashboard',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_panels_crypto_cp-dashboard_cp-dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./cp-dashboard/cp-dashboard.module */ 25023)).then((module) => module.CpDashboardModule)
            },
            {
                path: 'cp-exchange',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_panels_crypto_cp-exchange_cp-exchange_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./cp-exchange/cp-exchange.module */ 12193)).then((module) => module.CpExchangeModule)
            },
            {
                path: 'cp-wallet',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_demo_panels_crypto_cp-wallet_cp-wallet_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./cp-wallet/cp-wallet.module */ 36379)).then((module) => module.CpWalletModule)
            },
            {
                path: 'cp-transactions',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_demo_panels_crypto_cp-transactions_cp-transactions_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./cp-transactions/cp-transactions.module */ 84920)).then((module) => module.CpTransactionsModule)
            },
            {
                path: 'cp-history',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_demo_panels_crypto_cp-history_cp-history_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./cp-history/cp-history.module */ 82138)).then((module) => module.CpHistoryModule)
            },
            {
                path: 'cp-trading',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_demo_panels_crypto_cp-trading_cp-trading_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./cp-trading/cp-trading.module */ 2731)).then((module) => module.CpTradingModule)
            },
            {
                path: 'cp-coin',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_rxjs_add_operator_map_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_demo_panels_crypto_cp-coin_cp-coin_module_ts-node_modules_rxjs__esm2015_internal_oper-f9df1b")]).then(__webpack_require__.bind(__webpack_require__, /*! ./cp-coin/cp-coin.module */ 12086)).then((module) => module.CpCoinModule)
            },
            {
                path: 'cp-ico',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_panels_crypto_cp-ico_cp-ico_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./cp-ico/cp-ico.module */ 46416)).then((module) => module.CpIcoModule)
            }
        ]
    }
];
class CryptoRoutingModule {
}
CryptoRoutingModule.ɵfac = function CryptoRoutingModule_Factory(t) { return new (t || CryptoRoutingModule)(); };
CryptoRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CryptoRoutingModule });
CryptoRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CryptoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 76859:
/*!*****************************************************!*\
  !*** ./src/app/demo/panels/crypto/crypto.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CryptoModule": () => (/* binding */ CryptoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _crypto_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crypto-routing.module */ 14750);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class CryptoModule {
}
CryptoModule.ɵfac = function CryptoModule_Factory(t) { return new (t || CryptoModule)(); };
CryptoModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CryptoModule });
CryptoModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _crypto_routing_module__WEBPACK_IMPORTED_MODULE_0__.CryptoRoutingModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CryptoModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _crypto_routing_module__WEBPACK_IMPORTED_MODULE_0__.CryptoRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_demo_panels_crypto_crypto_module_ts.js.map