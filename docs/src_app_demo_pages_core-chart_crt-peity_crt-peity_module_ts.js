"use strict";
(self["webpackChunkng_able_pro"] = self["webpackChunkng_able_pro"] || []).push([["src_app_demo_pages_core-chart_crt-peity_crt-peity_module_ts"],{

/***/ 24231:
/*!*****************************************************************************!*\
  !*** ./src/app/demo/pages/core-chart/crt-peity/crt-peity-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrtPeityRoutingModule": () => (/* binding */ CrtPeityRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _crt_peity_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crt-peity.component */ 11141);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _crt_peity_component__WEBPACK_IMPORTED_MODULE_0__.CrtPeityComponent
    }
];
class CrtPeityRoutingModule {
}
CrtPeityRoutingModule.ɵfac = function CrtPeityRoutingModule_Factory(t) { return new (t || CrtPeityRoutingModule)(); };
CrtPeityRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CrtPeityRoutingModule });
CrtPeityRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CrtPeityRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 11141:
/*!************************************************************************!*\
  !*** ./src/app/demo/pages/core-chart/crt-peity/crt-peity.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrtPeityComponent": () => (/* binding */ CrtPeityComponent)
/* harmony export */ });
/* harmony import */ var peity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! peity */ 54742);
/* harmony import */ var peity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(peity__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../theme/shared/components/card/card.component */ 84631);



class CrtPeityComponent {
    constructor() { }
    ngOnInit() {
        setTimeout(() => {
            $('.bar-colours-1').peity('bar', {
                fill: ['rgba(79, 195, 247, 0.65)', 'rgba(51, 219, 158, 0.65)'],
                width: '100%',
                height: '150px'
            });
            $('.bar-colours-2').peity('bar', {
                fill: ['rgba(79, 195, 247, 0.65)', 'rgba(240, 70, 107, 0.65)'],
                width: '100%',
                height: '150px'
            });
            const updatingChart = $('.updating-chart').peity('line', {
                fill: 'rgba(240, 70, 107, 0.4)',
                stroke: 'rgb(240, 70, 107)',
                width: '100%',
                height: '150px'
            });
            const updatingChart1 = $('.updating-chart1').peity('line', {
                fill: 'rgba(51, 219, 158, 0.32)',
                stroke: 'rgba(51, 219, 158, 0.90)',
                width: '100%',
                height: '150px'
            });
            const updatingChart2 = $('.updating-chart2').peity('line', {
                fill: 'rgba(79, 195, 247, 0.45)',
                stroke: 'rgba(79, 195, 247, 0.91)',
                width: '100%',
                height: '150px'
            });
            const updatingChart3 = $('.updating-chart3').peity('line', {
                fill: 'rgba(255, 138, 101, 0.39)',
                stroke: 'rgba(255, 138, 101, 0.94)',
                width: '100%',
                height: '150px'
            });
            setInterval(() => {
                const random = Math.round(Math.random() * 10);
                const values = updatingChart.text().split(',');
                values.shift();
                values.push(random);
                updatingChart.text(values.join(',')).change();
            }, 1000);
            $('.data-attributes span').peity('donut');
            $('span.pie_1').peity('pie', {
                fill: ['#f0466b', '#4fc3f7'],
                width: '16px',
                height: '16px'
            });
            $('span.pie_2').peity('pie', {
                fill: ['#ff8a65', '#33db9e'],
                width: '16px',
                height: '16px'
            });
            $('span.pie_3').peity('pie', {
                fill: ['#4fc3f7', '#536dfe'],
                width: '16px',
                height: '16px'
            });
            $('span.pie_4').peity('pie', {
                fill: ['#33db9e', '#f0466b'],
                width: '16px',
                height: '16px'
            });
            $('span.pie_5').peity('pie', {
                fill: ['#ff8a65', '#4fc3f7'],
                width: '16px',
                height: '16px'
            });
            $('span.pie_6').peity('pie', {
                fill: ['#f0466b', '#536dfe'],
                width: '16px',
                height: '16px'
            });
            $('span.pie_7').peity('pie', {
                fill: ['#33db9e', '#ff8a65'],
                width: '16px',
                height: '16px'
            });
        });
    }
}
CrtPeityComponent.ɵfac = function CrtPeityComponent_Factory(t) { return new (t || CrtPeityComponent)(); };
CrtPeityComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CrtPeityComponent, selectors: [["app-crt-peity"]], decls: 58, vars: 8, consts: [[1, "row"], [1, "col-xl-4", "col-md-6"], ["cardTitle", "Updating Chart1", 3, "options"], [1, "updating-chart"], ["cardTitle", "Updating Chart2", 3, "options"], [1, "updating-chart1"], ["cardTitle", "Line Chart 1", 3, "options"], [1, "updating-chart2"], ["cardTitle", "Line Chart 2", 3, "options"], [1, "updating-chart3"], ["cardTitle", "Bar Chart 1", 3, "options"], [1, "bar-colours-2"], ["cardTitle", "Bar Chart 2", 3, "options"], [1, "bar-colours-1"], ["cardTitle", "Custom Chart 1", 3, "options"], [1, "data-attributes"], ["data-peity", "{ \"fill\": [\"#4fc3f7\", \"#eeeeee\"],\"innerRadius\": 10, \"radius\": 40 }"], ["data-peity", "{ \"fill\": [\"#f0466b\", \"#eeeeee\"],\"innerRadius\": 14, \"radius\": 36 }"], ["data-peity", "{ \"fill\": [\"#33db9e\", \"#eeeeee\"],\"innerRadius\": 16, \"radius\": 32 }"], ["data-peity", "{ \"fill\": [\"#ff8a65\", \"#eeeeee\"],\"innerRadius\": 18, \"radius\": 28 }"], ["data-peity", "{ \"fill\": [\"#69CEC6\", \"#eeeeee\"],\"innerRadius\": 20, \"radius\": 24 }"], ["data-peity", "{ \"fill\": [\"#FE8A7D\", \"#eeeeee\"],\"innerRadius\": 18, \"radius\": 20 }"], ["data-peity", "{ \"fill\": [\"#536dfe\", \"#eeeeee\"],\"innerRadius\": 15, \"radius\": 16 }"], ["cardTitle", "Custom Chart 2", 3, "options"], [1, "pie_1"], [1, "pie_2"], [1, "pie_3"], [1, "pie_4"], [1, "pie_5"], [1, "pie_6"], [1, "pie_7"]], template: function CrtPeityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "app-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "5,3,6,4,2,10,2,3,9,1,2,8");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "app-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "5,3,9,6,5,9,7,3,5,2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "app-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "5,3,2,-1,-3,-2,2,3,5,2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "app-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "0,-3,-6,-4,-5,-4,-7,-3,-5,-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "app-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "0,3,6,4,7,3,5,2,2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "app-card", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "0,-3,-6,-4,5,-4,-5,-2,2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "app-card", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "1/7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "2/7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "3/7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "4/7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "5/7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "6/7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "7/7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "app-card", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "1/5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "226/360");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "0.52/1.561");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "1,4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "226,134");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "0.52,1.041");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "1,2,3,2,2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", false);
    } }, directives: [_theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__.CardComponent], styles: ["svg.peity {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNydC1wZWl0eS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxJVCUyMFNIT1BcXERlc2t0b3BcXHByb2plY3QlMjB3aXRoJTIwcmVhZHklMjB0ZW1wbGF0ZVxcZnVsbC12ZXJzaW9uXFxzcmNcXGFwcFxcZGVtb1xccGFnZXNcXGNvcmUtY2hhcnRcXGNydC1wZWl0eVxcY3J0LXBlaXR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSiIsImZpbGUiOiJjcnQtcGVpdHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzdmcucGVpdHkge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xufVxuIiwic3ZnLnBlaXR5IHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59Il19 */"], encapsulation: 2 });


/***/ }),

/***/ 30882:
/*!*********************************************************************!*\
  !*** ./src/app/demo/pages/core-chart/crt-peity/crt-peity.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrtPeityModule": () => (/* binding */ CrtPeityModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _crt_peity_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crt-peity-routing.module */ 24231);
/* harmony import */ var _crt_peity_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crt-peity.component */ 11141);
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ 95702);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class CrtPeityModule {
}
CrtPeityModule.ɵfac = function CrtPeityModule_Factory(t) { return new (t || CrtPeityModule)(); };
CrtPeityModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CrtPeityModule });
CrtPeityModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _crt_peity_routing_module__WEBPACK_IMPORTED_MODULE_0__.CrtPeityRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CrtPeityModule, { declarations: [_crt_peity_component__WEBPACK_IMPORTED_MODULE_1__.CrtPeityComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _crt_peity_routing_module__WEBPACK_IMPORTED_MODULE_0__.CrtPeityRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_demo_pages_core-chart_crt-peity_crt-peity_module_ts.js.map