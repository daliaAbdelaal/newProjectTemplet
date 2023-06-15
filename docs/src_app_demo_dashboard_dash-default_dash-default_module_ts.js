"use strict";
(self["webpackChunkng_able_pro"] = self["webpackChunkng_able_pro"] || []).push([["src_app_demo_dashboard_dash-default_dash-default_module_ts"],{

/***/ 99670:
/*!****************************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-default/dash-default-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashDefaultRoutingModule": () => (/* binding */ DashDefaultRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _dash_default_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dash-default.component */ 48706);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _dash_default_component__WEBPACK_IMPORTED_MODULE_0__.DashDefaultComponent
    }
];
class DashDefaultRoutingModule {
}
DashDefaultRoutingModule.ɵfac = function DashDefaultRoutingModule_Factory(t) { return new (t || DashDefaultRoutingModule)(); };
DashDefaultRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DashDefaultRoutingModule });
DashDefaultRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DashDefaultRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 48706:
/*!***********************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-default/dash-default.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashDefaultComponent": () => (/* binding */ DashDefaultComponent)
/* harmony export */ });
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ 37942);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../theme/shared/components/card/card.component */ 84631);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ 93333);




class DashDefaultComponent {
    constructor() {
    }
    ngOnInit() {
        this.renderChart('line', 'linechart');
        this.renderChart('doughnut', 'doughnutchart');
        this.renderChart('bar', 'barchart');
        this.renderChart('line', 'linechart2');
        this.renderChart('doughnut', 'doughnutchart2');
        this.renderChart('bar', 'barchart2');
        this.renderChart('line', 'linechart3');
    }
    renderChart(type, id) {
        const myChart = new chart_js__WEBPACK_IMPORTED_MODULE_0__.Chart(id, {
            type: type,
            data: {
                labels: ['Blue', 'Green', 'Purple'],
                datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {}
            }
        });
    }
}
DashDefaultComponent.ɵfac = function DashDefaultComponent_Factory(t) { return new (t || DashDefaultComponent)(); };
DashDefaultComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DashDefaultComponent, selectors: [["app-dash-default"]], decls: 92, vars: 3, consts: [[1, "row"], [1, "col-12"], ["id", "section_1"], [1, "row", "data_num", "bg-white", "py-4", "pr-3", "my-3"], [1, "col-xl-3", "col-lg-6", "pb-xl-0", "pb-3"], [1, "row", "card-num", "first", "py-3", "ml-0", "ml-lg-2"], [1, "col-6"], [1, "icon"], [1, "fa-solid", "fa-user-group"], [1, "row", "card-num", "sec", "py-3", "ml-0", "ml-lg-2"], [1, "row", "card-num", "third", "py-3", "ml-0", "ml-lg-2"], [1, "fa-regular", "fa-calendar"], [1, "row", "card-num", "fourth", "py-3", "ml-0", "ml-lg-2"], [1, "fa-solid", "fa-video"], ["id", "section_2"], [1, "col-xl-4", "col-lg-6", "mb-3"], [1, "chart-container", "p-3"], [1, "px-3"], ["id", "linechart"], [1, "px-3", "pt-2"], ["id", "doughnutchart"], ["id", "barchart"], ["id", "linechart2"], ["id", "doughnutchart2"], ["id", "barchart2"], ["id", "linechart3"], [1, "col-xl-8", "mb-3"], [1, "chart-container", "px-3", "pt-3"], ["cardTitle", "\u0627\u0644\u062E\u0631\u064A\u0637\u0647 \u0627\u0644\u062A\u0641\u0627\u0639\u0644\u064A\u0647", 3, "options"], [3, "latitude", "longitude"]], template: function DashDefaultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u0639\u062F\u062F \u0627\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u062F\u062E\u0648\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "27131");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "\u0639\u062F\u062F \u0627\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u062F\u062E\u0648\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "27131");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "\u0639\u062F\u062F \u0627\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u062F\u062E\u0648\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "27131");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "\u0639\u062F\u062F \u0627\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u062F\u062E\u0648\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "27131");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, " \u062A\u062D\u0644\u064A\u0644 \u0645\u0639\u062F\u0644 \u0631\u0635\u062F \u0627\u0644\u062F\u062E\u0648\u0644 \u062E\u0644\u0627\u0644 \u0627\u0644\u0641\u062A\u0631\u0629 \u0648\u062A\u0648\u0642\u0639 \u0627\u0644\u062F\u062E\u0648\u0644 \u062E\u0644\u0627\u0644 3 \u0627\u064A\u0627\u0645 \u0627\u0644\u0642\u0627\u062F\u0629 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "canvas", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "h6", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, " \u0646\u0633\u0628\u0629 \u0627\u0644\u062F\u062E\u0648\u0644 \u062D\u0633\u0628 \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627\u062A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "canvas", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "h6", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, " \u0646\u0633\u0628\u0629 \u0627\u0644\u062F\u062E\u0648\u0644 \u062D\u0633\u0628 \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627\u062A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "canvas", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, " \u062A\u062D\u0644\u064A\u0644 \u0645\u0639\u062F\u0644 \u0631\u0635\u062F \u0627\u0644\u062F\u062E\u0648\u0644 \u062E\u0644\u0627\u0644 \u0627\u0644\u0641\u062A\u0631\u0629 \u0648\u062A\u0648\u0642\u0639 \u0627\u0644\u062F\u062E\u0648\u0644 \u062E\u0644\u0627\u0644 3 \u0627\u064A\u0627\u0645 \u0627\u0644\u0642\u0627\u062F\u0629 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "canvas", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "h6", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, " \u0646\u0633\u0628\u0629 \u0627\u0644\u062F\u062E\u0648\u0644 \u062D\u0633\u0628 \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627\u062A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "canvas", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "h6", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, " \u0646\u0633\u0628\u0629 \u0627\u0644\u062F\u062E\u0648\u0644 \u062D\u0633\u0628 \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627\u062A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "canvas", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, " \u062A\u062D\u0644\u064A\u0644 \u0645\u0639\u062F\u0644 \u0631\u0635\u062F \u0627\u0644\u062F\u062E\u0648\u0644 \u062E\u0644\u0627\u0644 \u0627\u0644\u0641\u062A\u0631\u0629 \u0648\u062A\u0648\u0642\u0639 \u0627\u0644\u062F\u062E\u0648\u0644 \u062E\u0644\u0627\u0644 3 \u0627\u064A\u0627\u0645 \u0627\u0644\u0642\u0627\u062F\u0629 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](87, "canvas", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "app-card", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](91, "agm-map", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("latitude", 21.217319)("longitude", 72.866472);
    } }, directives: [_theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__.CardComponent, _agm_core__WEBPACK_IMPORTED_MODULE_3__.AgmMap], styles: ["#section_1[_ngcontent-%COMP%]   .data_num[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n#section_1[_ngcontent-%COMP%]   .data_num[_ngcontent-%COMP%]   .card-num[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n#section_1[_ngcontent-%COMP%]   .data_num[_ngcontent-%COMP%]   .card-num[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  text-align: right;\n}\n#section_1[_ngcontent-%COMP%]   .data_num[_ngcontent-%COMP%]   .card-num[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], #section_1[_ngcontent-%COMP%]   .data_num[_ngcontent-%COMP%]   .card-num[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: bold;\n}\n#section_1[_ngcontent-%COMP%]   .data_num[_ngcontent-%COMP%]   .card-num[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  line-height: 50px;\n  font-size: 25px;\n  text-align: left;\n}\n#section_1[_ngcontent-%COMP%]   .data_num[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%] {\n  background-color: #f4f1e7;\n  color: #6a6147;\n  border-right: 1rem solid #6a6147;\n}\n#section_1[_ngcontent-%COMP%]   .data_num[_ngcontent-%COMP%]   .sec[_ngcontent-%COMP%] {\n  background-color: #c3ffcd;\n  color: #1f5528;\n  border-right: 1rem solid #1f5528;\n}\n#section_1[_ngcontent-%COMP%]   .data_num[_ngcontent-%COMP%]   .third[_ngcontent-%COMP%] {\n  background-color: #e2f7ff;\n  color: #5c6064;\n  border-right: 1rem solid #5c6064;\n}\n#section_1[_ngcontent-%COMP%]   .data_num[_ngcontent-%COMP%]   .fourth[_ngcontent-%COMP%] {\n  background-color: #fff6dd;\n  color: #b07c48;\n  border-right: 1rem solid #b07c48;\n}\n#section_2[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 15px;\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n}\n#section_2[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  width: 85%;\n  text-align: right;\n  padding-bottom: 10px;\n}\n#section_2[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  right: 15px;\n  background-color: #ff305b;\n  padding: 4px 0 5px;\n  width: 12px;\n  height: 40px;\n  border-radius: 12rem 0 0 12rem;\n  background-color: #b07c48;\n}\nagm-map.sebm-google-map-container.ng-tns-c113-0[_ngcontent-%COMP%] {\n  height: 240px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2gtZGVmYXVsdC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXElUJTIwU0hPUFxcRGVza3RvcFxccHJvamVjdCUyMHdpdGglMjByZWFkeSUyMHRlbXBsYXRlXFxmdWxsLXZlcnNpb25cXHNyY1xcYXBwXFxkZW1vXFxkYXNoYm9hcmRcXGRhc2gtZGVmYXVsdFxcZGFzaC1kZWZhdWx0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBRUksbUJBQUE7QUNGUjtBRElRO0VBRUksbUJBQUE7QUNIWjtBRElZO0VBRUksaUJBQUE7QUNIaEI7QURLWTtFQUVJLGVBQUE7RUFDQSxpQkFBQTtBQ0poQjtBRE1ZO0VBRUksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNMaEI7QURTUTtFQUVJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FDUlo7QURVUTtFQUVJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FDVFo7QURXUTtFQUVJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FDVlo7QURZUTtFQUVJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FDWFo7QURrQkk7RUFFSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EscURBQUE7QUNoQlI7QURrQlE7RUFFRyxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ2pCWDtBRG9CUTtFQUVJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0FDbkJaO0FEd0JBO0VBQ0ksYUFBQTtBQ3JCSiIsImZpbGUiOiJkYXNoLWRlZmF1bHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2VjdGlvbl8xXHJcbntcclxuICAgIC5kYXRhX251bVxyXG4gICAge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gICAgICAgIC5jYXJkLW51bVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgaDZcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDUsaDZcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmljb25cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5maXJzdFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjFlNztcclxuICAgICAgICAgICAgY29sb3I6ICM2YTYxNDc7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXJlbSBzb2xpZCAjNmE2MTQ3O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VjXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzNmZmNkO1xyXG4gICAgICAgICAgICBjb2xvcjogIzFmNTUyODtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcmVtIHNvbGlkICMxZjU1Mjg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50aGlyZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZjdmZjtcclxuICAgICAgICAgICAgY29sb3I6ICM1YzYwNjQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXJlbSBzb2xpZCAjNWM2MDY0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm91cnRoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmNmRkO1xyXG4gICAgICAgICAgICBjb2xvcjogI2IwN2M0ODtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcmVtIHNvbGlkICNiMDdjNDg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4jc2VjdGlvbl8yXHJcbntcclxuICAgIC5jaGFydC1jb250YWluZXJcclxuICAgIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgxMDAsIDEwMCwgMTExLCAwLjIpIDBweCA3cHggMjlweCAwcHg7XHJcbiAgICAgXHJcbiAgICAgICAgaDZcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBcclxuICAgICAgICAmOjpiZWZvcmVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjMwNWI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweCAwIDVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJyZW0gMCAwIDEycmVtO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjA3YzQ4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuYWdtLW1hcC5zZWJtLWdvb2dsZS1tYXAtY29udGFpbmVyLm5nLXRucy1jMTEzLTAge1xyXG4gICAgaGVpZ2h0OiAyNDBweDtcclxufVxyXG4vLyBhcHAtY2FyZFxyXG4vLyB7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuLy8gICAgIGJveC1zaGFkb3c6IHJnYmEoMTAwLCAxMDAsIDExMSwgMC4yKSAwcHggN3B4IDI5cHggMHB4O1xyXG4vLyB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIiNzZWN0aW9uXzEgLmRhdGFfbnVtIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbiNzZWN0aW9uXzEgLmRhdGFfbnVtIC5jYXJkLW51bSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4jc2VjdGlvbl8xIC5kYXRhX251bSAuY2FyZC1udW0gaDYge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbiNzZWN0aW9uXzEgLmRhdGFfbnVtIC5jYXJkLW51bSBoNSwgI3NlY3Rpb25fMSAuZGF0YV9udW0gLmNhcmQtbnVtIGg2IHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiNzZWN0aW9uXzEgLmRhdGFfbnVtIC5jYXJkLW51bSAuaWNvbiB7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDI1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4jc2VjdGlvbl8xIC5kYXRhX251bSAuZmlyc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmMWU3O1xuICBjb2xvcjogIzZhNjE0NztcbiAgYm9yZGVyLXJpZ2h0OiAxcmVtIHNvbGlkICM2YTYxNDc7XG59XG4jc2VjdGlvbl8xIC5kYXRhX251bSAuc2VjIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MzZmZjZDtcbiAgY29sb3I6ICMxZjU1Mjg7XG4gIGJvcmRlci1yaWdodDogMXJlbSBzb2xpZCAjMWY1NTI4O1xufVxuI3NlY3Rpb25fMSAuZGF0YV9udW0gLnRoaXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZjdmZjtcbiAgY29sb3I6ICM1YzYwNjQ7XG4gIGJvcmRlci1yaWdodDogMXJlbSBzb2xpZCAjNWM2MDY0O1xufVxuI3NlY3Rpb25fMSAuZGF0YV9udW0gLmZvdXJ0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY2ZGQ7XG4gIGNvbG9yOiAjYjA3YzQ4O1xuICBib3JkZXItcmlnaHQ6IDFyZW0gc29saWQgI2IwN2M0ODtcbn1cblxuI3NlY3Rpb25fMiAuY2hhcnQtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm94LXNoYWRvdzogcmdiYSgxMDAsIDEwMCwgMTExLCAwLjIpIDBweCA3cHggMjlweCAwcHg7XG59XG4jc2VjdGlvbl8yIC5jaGFydC1jb250YWluZXIgaDYge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aWR0aDogODUlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4jc2VjdGlvbl8yIC5jaGFydC1jb250YWluZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjMwNWI7XG4gIHBhZGRpbmc6IDRweCAwIDVweDtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTJyZW0gMCAwIDEycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjA3YzQ4O1xufVxuXG5hZ20tbWFwLnNlYm0tZ29vZ2xlLW1hcC1jb250YWluZXIubmctdG5zLWMxMTMtMCB7XG4gIGhlaWdodDogMjQwcHg7XG59Il19 */"] });


/***/ }),

/***/ 70844:
/*!********************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-default/dash-default.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashDefaultModule": () => (/* binding */ DashDefaultModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _dash_default_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dash-default-routing.module */ 99670);
/* harmony import */ var _dash_default_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dash-default.component */ 48706);
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ 95702);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ 93333);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);







class DashDefaultModule {
}
DashDefaultModule.ɵfac = function DashDefaultModule_Factory(t) { return new (t || DashDefaultModule)(); };
DashDefaultModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: DashDefaultModule });
DashDefaultModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _dash_default_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashDefaultRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _agm_core__WEBPACK_IMPORTED_MODULE_5__.AgmCoreModule.forRoot({
                apiKey: 'AIzaSyBBek1t8M1zQ6TJtFV405GCUBcj_zTjwCs'
            })]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DashDefaultModule, { declarations: [_dash_default_component__WEBPACK_IMPORTED_MODULE_1__.DashDefaultComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _dash_default_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashDefaultRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _agm_core__WEBPACK_IMPORTED_MODULE_5__.AgmCoreModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_demo_dashboard_dash-default_dash-default_module_ts.js.map