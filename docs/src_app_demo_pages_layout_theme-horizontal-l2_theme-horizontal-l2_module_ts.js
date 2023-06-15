"use strict";
(self["webpackChunkng_able_pro"] = self["webpackChunkng_able_pro"] || []).push([["src_app_demo_pages_layout_theme-horizontal-l2_theme-horizontal-l2_module_ts"],{

/***/ 70360:
/*!*********************************************************************************************!*\
  !*** ./src/app/demo/pages/layout/theme-horizontal-l2/theme-horizontal-l2-routing.module.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeHorizontalL2RoutingModule": () => (/* binding */ ThemeHorizontalL2RoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _theme_horizontal_l2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme-horizontal-l2.component */ 85666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _theme_horizontal_l2_component__WEBPACK_IMPORTED_MODULE_0__.ThemeHorizontalL2Component
    }
];
class ThemeHorizontalL2RoutingModule {
}
ThemeHorizontalL2RoutingModule.ɵfac = function ThemeHorizontalL2RoutingModule_Factory(t) { return new (t || ThemeHorizontalL2RoutingModule)(); };
ThemeHorizontalL2RoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ThemeHorizontalL2RoutingModule });
ThemeHorizontalL2RoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ThemeHorizontalL2RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 85666:
/*!****************************************************************************************!*\
  !*** ./src/app/demo/pages/layout/theme-horizontal-l2/theme-horizontal-l2.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeHorizontalL2Component": () => (/* binding */ ThemeHorizontalL2Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../theme/shared/components/card/card.component */ 84631);
/* harmony import */ var _common_content_common_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common-content/common-content.component */ 40839);



class ThemeHorizontalL2Component {
    constructor() { }
    ngOnInit() { }
}
ThemeHorizontalL2Component.ɵfac = function ThemeHorizontalL2Component_Factory(t) { return new (t || ThemeHorizontalL2Component)(); };
ThemeHorizontalL2Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ThemeHorizontalL2Component, selectors: [["app-theme-horizontal-l2"]], decls: 37, vars: 0, consts: [[1, "row"], [1, "col-sm-12"], ["cardTitle", "Horizontal Layout V2"], ["role", "alert", 1, "alert", "alert-info", "mb-0"], [1, "mb-0"], [1, "m-15"], [1, "table-responsive"], [1, "table", "table-bordered", "table-striped"], [1, "header-table"]], template: function ThemeHorizontalL2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "app-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " In Horizontal Layout V2 - Navigation bar is set in a Horizontal way with fixed width container. It also showing/hidden while scrolling up/down. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " It is best suited for those applications where you required your navigation is set to be a Horizontal way with fixed width container. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "You can edit this file at [ ../src/app/app-config.ts ]");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "thead", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "layout: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "subLayout: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "horizontal-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "navFixedLayout: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "headerFixedLayout: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "app-common-content");
    } }, directives: [_theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_0__.CardComponent, _common_content_common_content_component__WEBPACK_IMPORTED_MODULE_1__.CommonContentComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aGVtZS1ob3Jpem9udGFsLWwyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 2396:
/*!*************************************************************************************!*\
  !*** ./src/app/demo/pages/layout/theme-horizontal-l2/theme-horizontal-l2.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeHorizontalL2Module": () => (/* binding */ ThemeHorizontalL2Module)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _theme_horizontal_l2_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme-horizontal-l2-routing.module */ 70360);
/* harmony import */ var _theme_horizontal_l2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme-horizontal-l2.component */ 85666);
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ 95702);
/* harmony import */ var _common_content_common_content_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common-content/common-content.module */ 40366);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






class ThemeHorizontalL2Module {
}
ThemeHorizontalL2Module.ɵfac = function ThemeHorizontalL2Module_Factory(t) { return new (t || ThemeHorizontalL2Module)(); };
ThemeHorizontalL2Module.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ThemeHorizontalL2Module });
ThemeHorizontalL2Module.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _theme_horizontal_l2_routing_module__WEBPACK_IMPORTED_MODULE_0__.ThemeHorizontalL2RoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _common_content_common_content_module__WEBPACK_IMPORTED_MODULE_3__.CommonContentModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ThemeHorizontalL2Module, { declarations: [_theme_horizontal_l2_component__WEBPACK_IMPORTED_MODULE_1__.ThemeHorizontalL2Component], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _theme_horizontal_l2_routing_module__WEBPACK_IMPORTED_MODULE_0__.ThemeHorizontalL2RoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _common_content_common_content_module__WEBPACK_IMPORTED_MODULE_3__.CommonContentModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_demo_pages_layout_theme-horizontal-l2_theme-horizontal-l2_module_ts.js.map