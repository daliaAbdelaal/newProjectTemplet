"use strict";
(self["webpackChunkng_able_pro"] = self["webpackChunkng_able_pro"] || []).push([["src_app_demo_pages_core-chart_crt-chart-js_crt-chart-js_module_ts"],{

/***/ 98447:
/*!***********************************************************************************!*\
  !*** ./src/app/demo/pages/core-chart/crt-chart-js/crt-chart-js-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrtChartJsRoutingModule": () => (/* binding */ CrtChartJsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _crt_chart_js_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crt-chart-js.component */ 39025);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _crt_chart_js_component__WEBPACK_IMPORTED_MODULE_0__.CrtChartJsComponent
    }
];
class CrtChartJsRoutingModule {
}
CrtChartJsRoutingModule.ɵfac = function CrtChartJsRoutingModule_Factory(t) { return new (t || CrtChartJsRoutingModule)(); };
CrtChartJsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CrtChartJsRoutingModule });
CrtChartJsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CrtChartJsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 39025:
/*!******************************************************************************!*\
  !*** ./src/app/demo/pages/core-chart/crt-chart-js/crt-chart-js.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrtChartJsComponent": () => (/* binding */ CrtChartJsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../theme/shared/components/card/card.component */ 84631);
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-chartjs */ 55015);
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_1__);



const _c0 = ["barBasicChart"];
const _c1 = ["barStackedChart"];
const _c2 = ["lineIPMChart"];
const _c3 = ["areaBasicChart"];
const _c4 = ["areaFillOriginChart"];
const _c5 = ["areaFillEndChart"];
const _c6 = ["areaRadar1Chart"];
const _c7 = ["areaRadar2Chart"];
const _c8 = ["areaRadar3Chart"];
const _c9 = ["pieChart"];
class CrtChartJsComponent {
    constructor() { }
    ngOnInit() {
        setTimeout(() => {
            /* bar basic chart */
            const barBasicTag = this.barBasicChart.nativeElement.children;
            this.barBasicChartTag = barBasicTag['bar_basic_chart'].lastChild.getContext('2d');
            // used bar_stacked_chart, bar_horizontal_chart
            const abc = this.barBasicChartTag.createLinearGradient(0, 300, 0, 0);
            abc.addColorStop(0, '#4680ff');
            abc.addColorStop(1, '#4680ff');
            const def = this.barBasicChartTag.createLinearGradient(0, 300, 0, 0);
            def.addColorStop(0, '#0e9e4a');
            def.addColorStop(1, '#0e9e4a');
            this.barBasicChartData = {
                labels: [0, 1, 2, 3],
                datasets: [
                    {
                        label: 'Data 1',
                        data: [25, 45, 74, 85],
                        borderColor: abc,
                        backgroundColor: abc,
                        hoverborderColor: abc,
                        hoverBackgroundColor: abc
                    },
                    {
                        label: 'Data 2',
                        data: [30, 52, 65, 65],
                        borderColor: def,
                        backgroundColor: def,
                        hoverborderColor: def,
                        hoverBackgroundColor: def
                    }
                ]
            };
            this.barBasicChartOption = {
                barValueSpacing: 20
            };
            const barBasicStackTag = this.barStackedChart.nativeElement.children;
            this.barBasicStackChartTag = barBasicStackTag['bar_stacked_chart'].lastChild.getContext('2d');
            // used bar_stacked_chart, bar_horizontal_chart
            const abcd = this.barBasicStackChartTag.createLinearGradient(0, 300, 0, 0);
            abcd.addColorStop(0, '#4680ff');
            abcd.addColorStop(1, '#4680ff');
            const defg = this.barBasicStackChartTag.createLinearGradient(0, 300, 0, 0);
            defg.addColorStop(0, '#ffa21d');
            defg.addColorStop(1, '#ffa21d');
            this.barBasicStackChartData = {
                labels: [0, 1, 2, 3],
                datasets: [
                    {
                        label: 'Data 1',
                        data: [25, 45, 74, 85],
                        borderColor: abcd,
                        backgroundColor: abcd,
                        hoverborderColor: abcd,
                        hoverBackgroundColor: abcd
                    },
                    {
                        label: 'Data 2',
                        data: [30, 52, 65, 65],
                        borderColor: defg,
                        backgroundColor: defg,
                        hoverborderColor: defg,
                        hoverBackgroundColor: defg
                    }
                ]
            };
            /* bar stacked chart */
            this.barStackedChartOption = {
                barValueSpacing: 20,
                scales: {
                    xAxes: [
                        {
                            stacked: true
                        }
                    ],
                    yAxes: [
                        {
                            stacked: true
                        }
                    ]
                }
            };
            /* line interpolation mode chart */
            const lineIpmTag = this.lineIPMChart.nativeElement.children;
            this.lineIPMChartTag = lineIpmTag['line_ipm_chart'].lastChild.getContext('2d');
            const klm = this.lineIPMChartTag.createLinearGradient(0, 0, 500, 0);
            klm.addColorStop(0, '#0e9e4a');
            klm.addColorStop(1, '#0e9e4a');
            const hij = this.lineIPMChartTag.createLinearGradient(0, 0, 500, 0);
            hij.addColorStop(0, '#4680ff');
            hij.addColorStop(1, '#4680ff');
            this.lineIPMChartData = {
                labels: [0, 1, 2, 3, 4, 5, 6],
                datasets: [
                    {
                        label: 'D1',
                        data: [55, 70, 62, 81, 56, 70, 90],
                        fill: false,
                        borderWidth: 4,
                        lineTension: 0,
                        borderDash: [15, 10],
                        borderColor: klm,
                        backgroundColor: klm,
                        hoverborderColor: klm,
                        hoverBackgroundColor: klm
                    },
                    {
                        label: 'D2',
                        data: [85, 55, 70, 50, 75, 45, 60],
                        fill: true,
                        cubicInterpolationMode: 'monotone',
                        borderWidth: 0,
                        borderColor: hij,
                        backgroundColor: hij,
                        hoverborderColor: hij,
                        hoverBackgroundColor: hij
                    },
                    {
                        label: 'D3',
                        data: [50, 75, 80, 70, 85, 80, 70],
                        fill: false,
                        borderWidth: 4,
                        borderColor: '#0e9e4a',
                        backgroundColor: '#0e9e4a',
                        hoverborderColor: '#0e9e4a',
                        hoverBackgroundColor: '#0e9e4a'
                    }
                ]
            };
            this.lineIPMChartOption = {
                barValueSpacing: 20
            };
            /* area basic chart */
            const areaBasicTag = this.areaBasicChart.nativeElement.children;
            this.areaBasicChartTag = areaBasicTag['area_basic_chart'].lastChild.getContext('2d');
            const bcd = this.areaBasicChartTag.createLinearGradient(0, 0, 500, 0);
            bcd.addColorStop(0, '#4680ff');
            bcd.addColorStop(1, '#4680ff');
            const efg = this.areaBasicChartTag.createLinearGradient(0, 0, 500, 0);
            efg.addColorStop(0, '#0e9e4a');
            efg.addColorStop(1, '#0e9e4a');
            this.areaBasicChartData = {
                labels: [0, 1, 2, 3, 4, 5, 6],
                datasets: [
                    {
                        label: 'D1',
                        data: [45, 60, 45, 80, 60, 80, 45],
                        fill: true,
                        borderWidth: 4,
                        borderColor: bcd,
                        backgroundColor: bcd,
                        hoverborderColor: bcd,
                        hoverBackgroundColor: bcd
                    },
                    {
                        label: 'D2',
                        data: [45, 80, 45, 45, 60, 45, 80],
                        fill: true,
                        cubicInterpolationMode: 'monotone',
                        borderWidth: 0,
                        borderColor: '#0e9e4a',
                        backgroundColor: '#0e9e4a',
                        hoverborderColor: '#0e9e4a',
                        hoverBackgroundColor: '#0e9e4a'
                    },
                    {
                        label: 'D3',
                        data: [83, 45, 60, 45, 45, 55, 45],
                        fill: true,
                        borderWidth: 4,
                        borderColor: efg,
                        backgroundColor: efg,
                        hoverborderColor: efg,
                        hoverBackgroundColor: efg
                    }
                ]
            };
            this.areaBasicChartOption = {
                barValueSpacing: 20
            };
            /* area fill origin chart */
            const areaFillOriginTag = this.areaFillOriginChart.nativeElement.children;
            this.areaFillOriginChartTag = areaFillOriginTag['area_fill_origin_chart'].lastChild.getContext('2d');
            const bcde = this.areaFillOriginChartTag.createLinearGradient(0, 0, 500, 0);
            bcde.addColorStop(0, '#4680ff');
            bcde.addColorStop(1, '#4680ff');
            this.areaFillOriginChartData = {
                labels: [0, 1, 2, 3, 4, 5, 6],
                datasets: [
                    {
                        label: 'D1',
                        data: [85, 55, 70, 50, 75, 45, 60],
                        borderWidth: 1,
                        borderColor: bcde,
                        backgroundColor: bcde,
                        hoverborderColor: bcde,
                        hoverBackgroundColor: bcde,
                        fill: 'origin'
                    }
                ]
            };
            /* area fill end chart */
            const areaFillEndTag = this.areaFillEndChart.nativeElement.children;
            this.areaFillEndChartTag = areaFillEndTag['area_fill_end_chart'].lastChild.getContext('2d');
            const cde = this.areaFillEndChartTag.createLinearGradient(0, 0, 500, 0);
            cde.addColorStop(0, '#4caf50');
            cde.addColorStop(1, '#4caf50');
            this.areaFillEndChartData = {
                labels: [0, 1, 2, 3, 4, 5, 6],
                datasets: [
                    {
                        label: 'D1',
                        data: [85, 55, 70, 50, 75, 45, 60],
                        borderWidth: 1,
                        borderColor: cde,
                        backgroundColor: cde,
                        hoverborderColor: cde,
                        hoverBackgroundColor: cde,
                        fill: 'end'
                    }
                ]
            };
            /* area radar1 cart */
            const areaRadar1Tag = this.areaRadar1Chart.nativeElement.children;
            this.areaRadar1ChartTag = areaRadar1Tag['area_radar1_chart'].lastChild.getContext('2d');
            const pqr = this.areaRadar1ChartTag.createLinearGradient(0, 0, 350, 0);
            pqr.addColorStop(0, '#4680ff');
            pqr.addColorStop(1, '#4680ff');
            const stu = this.areaRadar1ChartTag.createLinearGradient(0, 0, 350, 0);
            stu.addColorStop(0, '#4caf50');
            stu.addColorStop(1, '#4caf50');
            this.areaRadar1ChartData = {
                labels: [0, 1, 2, 3, 4, 5, 6],
                datasets: [
                    {
                        label: 'D1',
                        data: [60, 60, 45, 80, 60, 80, 45],
                        fill: true,
                        borderWidth: 4,
                        borderColor: pqr,
                        backgroundColor: pqr,
                        hoverborderColor: pqr,
                        hoverBackgroundColor: pqr
                    },
                    {
                        label: 'D2',
                        data: [40, 80, 40, 65, 60, 50, 95],
                        fill: true,
                        cubicInterpolationMode: 'monotone',
                        borderWidth: 0,
                        borderColor: '#0e9e4a',
                        backgroundColor: '#0e9e4a',
                        hoverborderColor: '#0e9e4a',
                        hoverBackgroundColor: '#0e9e4a'
                    },
                    {
                        label: 'D3',
                        data: [20, 40, 80, 60, 85, 60, 20],
                        fill: true,
                        borderWidth: 4,
                        borderColor: stu,
                        backgroundColor: stu,
                        hoverborderColor: stu,
                        hoverBackgroundColor: stu
                    }
                ]
            };
            /* area radar2 cart */
            const areaRadar2Tag = this.areaRadar2Chart.nativeElement.children;
            this.areaRadar2ChartTag = areaRadar2Tag['area_radar2_chart'].lastChild.getContext('2d');
            const pqrs = this.areaRadar2ChartTag.createLinearGradient(0, 0, 350, 0);
            pqrs.addColorStop(0, '#4caf50');
            pqrs.addColorStop(1, '#4caf50');
            const stuv = this.areaRadar2ChartTag.createLinearGradient(0, 0, 350, 0);
            stuv.addColorStop(0, '#FF9800');
            stuv.addColorStop(1, '#FF9800');
            this.areaRadar2ChartData = {
                labels: [0, 1, 2, 3, 4, 5, 6],
                datasets: [
                    {
                        label: 'D1',
                        data: [60, 60, 45, 80, 60, 80, 45],
                        fill: true,
                        borderWidth: 4,
                        borderColor: pqrs,
                        backgroundColor: pqrs,
                        hoverborderColor: pqrs,
                        hoverBackgroundColor: pqrs
                    },
                    {
                        label: 'D2',
                        data: [40, 80, 40, 65, 60, 50, 95],
                        fill: true,
                        cubicInterpolationMode: 'monotone',
                        borderWidth: 0,
                        borderColor: '#f44336',
                        backgroundColor: '#f44336',
                        hoverborderColor: '#f44336',
                        hoverBackgroundColor: '#f44336'
                    },
                    {
                        label: 'D3',
                        data: [20, 40, 80, 60, 85, 60, 20],
                        fill: true,
                        borderWidth: 4,
                        borderColor: stuv,
                        backgroundColor: stuv,
                        hoverborderColor: stuv,
                        hoverBackgroundColor: stuv
                    }
                ]
            };
            /* area radar3 cart */
            const areaRadar3Tag = this.areaRadar3Chart.nativeElement.children;
            this.areaRadar3ChartTag = areaRadar3Tag['area_radar3_chart'].lastChild.getContext('2d');
            const xyz = this.areaRadar3ChartTag.createLinearGradient(0, 0, 350, 0);
            xyz.addColorStop(0, '#4680ff');
            xyz.addColorStop(1, '#4680ff');
            const wxy = this.areaRadar3ChartTag.createLinearGradient(0, 0, 350, 0);
            wxy.addColorStop(0, '#4caf50');
            wxy.addColorStop(1, '#4caf50');
            this.areaRadar3ChartData = {
                labels: [0, 1, 2, 3, 4, 5, 6],
                datasets: [
                    {
                        label: 'D1',
                        data: [60, 60, 45, 80, 60, 80, 45],
                        fill: true,
                        borderWidth: 4,
                        borderColor: xyz,
                        backgroundColor: 'transparent',
                        hoverborderColor: xyz,
                        hoverBackgroundColor: 'transparent'
                    },
                    {
                        label: 'D2',
                        data: [40, 80, 40, 65, 60, 50, 95],
                        fill: true,
                        cubicInterpolationMode: 'monotone',
                        borderWidth: 0,
                        borderColor: '#0e9e4a',
                        backgroundColor: 'transparent',
                        hoverborderColor: '#0e9e4a',
                        hoverBackgroundColor: 'transparent'
                    },
                    {
                        label: 'D3',
                        data: [20, 40, 80, 60, 85, 60, 20],
                        fill: true,
                        borderWidth: 4,
                        borderColor: wxy,
                        backgroundColor: 'transparent',
                        hoverborderColor: wxy,
                        hoverBackgroundColor: 'transparent'
                    }
                ]
            };
            /* pie cart */
            const pieTag = this.pieChart.nativeElement.children;
            this.pieChartTag = pieTag['pie_chart'].lastChild.getContext('2d'); // doughnut_chart
            const cdef = this.pieChartTag.createLinearGradient(100, 0, 300, 0);
            cdef.addColorStop(0, '#4caf50');
            cdef.addColorStop(1, '#4caf50');
            const wxyz = this.pieChartTag.createLinearGradient(100, 0, 300, 0);
            wxyz.addColorStop(0, '#FF9800');
            wxyz.addColorStop(1, '#FF9800');
            this.pieChartData = {
                labels: ['Data 1', 'Data 2', 'Data 3'],
                datasets: [
                    {
                        data: [30, 30, 40],
                        backgroundColor: [cdef, wxyz, '#f44336'],
                        hoverBackgroundColor: [cdef, wxyz, '#f44336']
                    }
                ]
            };
        });
    }
}
CrtChartJsComponent.ɵfac = function CrtChartJsComponent_Factory(t) { return new (t || CrtChartJsComponent)(); };
CrtChartJsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CrtChartJsComponent, selectors: [["app-crt-chart-js"]], viewQuery: function CrtChartJsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c6, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c8, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c9, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.barBasicChart = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.barStackedChart = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.lineIPMChart = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.areaBasicChart = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.areaFillOriginChart = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.areaFillEndChart = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.areaRadar1Chart = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.areaRadar2Chart = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.areaRadar3Chart = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.pieChart = _t.first);
    } }, decls: 61, vars: 46, consts: [[1, "row"], [1, "col-xl-4", "col-md-6"], ["cardTitle", "Bar Chart", 3, "options"], ["barBasicChart", ""], ["id", "bar_basic_chart", 3, "type", "data", "options"], ["cardTitle", "Bar [Stacked] Chart", 3, "options"], ["barStackedChart", ""], ["id", "bar_stacked_chart", 3, "type", "data", "options"], [1, "col-xl-4", "col-md-12"], ["cardTitle", "Bar [Horizontal] Chart", 3, "options"], ["barHorizontalChart", ""], ["id", "bar_horizontal_chart", 3, "type", "data", "options"], [1, "col-xl-6", "col-md-12"], ["cardTitle", "Line Interpolation Mode Chart", 3, "options"], ["lineIPMChart", ""], ["id", "line_ipm_chart", 3, "type", "data", "options"], ["cardTitle", "Area Chart", 3, "options"], ["areaBasicChart", ""], ["id", "area_basic_chart", 3, "type", "data", "options"], ["cardTitle", "Area [Fill: origin] Chart", 3, "options"], ["areaFillOriginChart", ""], ["id", "area_fill_origin_chart", 3, "type", "data", "options"], ["cardTitle", "Area [Fill: end] Chart", 3, "options"], ["areaFillEndChart", ""], ["id", "area_fill_end_chart", 3, "type", "data", "options"], ["cardTitle", "Radar [Area] Chart", 3, "options"], ["areaRadar1Chart", ""], ["id", "area_radar1_chart", 3, "type", "data", "options"], ["areaRadar2Chart", ""], ["id", "area_radar2_chart", 3, "type", "data", "options"], ["areaRadar3Chart", ""], ["id", "area_radar3_chart", 3, "type", "data", "options"], ["cardTitle", "Pie Chart", 3, "options"], ["pieChart", ""], ["id", "pie_chart", 3, "type", "data"], ["cardTitle", "Doughnut Chart", 3, "options"], ["doughnutChart", ""], ["id", "doughnut_chart", 3, "type", "data"]], template: function CrtChartJsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "app-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "chart", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "app-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "chart", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "app-card", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "chart", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "app-card", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", null, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "chart", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "app-card", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", null, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "chart", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "app-card", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", null, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "chart", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "app-card", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", null, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "chart", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "app-card", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", null, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "chart", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "app-card", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", null, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "chart", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "app-card", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", null, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "chart", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "app-card", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", null, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "chart", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "app-card", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", null, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "chart", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", "bar")("data", ctx.barBasicChartData)("options", ctx.barBasicChartOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", "bar")("data", ctx.barBasicStackChartData)("options", ctx.barStackedChartOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", "horizontalBar")("data", ctx.barBasicChartData)("options", ctx.barBasicChartOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", "line")("data", ctx.lineIPMChartData)("options", ctx.lineIPMChartOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", "line")("data", ctx.areaBasicChartData)("options", ctx.areaBasicChartOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", "line")("data", ctx.areaFillOriginChartData)("options", ctx.areaBasicChartOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", "line")("data", ctx.areaFillEndChartData)("options", ctx.areaBasicChartOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", "radar")("data", ctx.areaRadar1ChartData)("options", ctx.areaBasicChartOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", "radar")("data", ctx.areaRadar2ChartData)("options", ctx.areaBasicChartOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", "radar")("data", ctx.areaRadar3ChartData)("options", ctx.areaBasicChartOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", "pie")("data", ctx.pieChartData);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", "doughnut")("data", ctx.pieChartData);
    } }, directives: [_theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_0__.CardComponent, angular2_chartjs__WEBPACK_IMPORTED_MODULE_1__.ChartComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcnQtY2hhcnQtanMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 9136:
/*!***************************************************************************!*\
  !*** ./src/app/demo/pages/core-chart/crt-chart-js/crt-chart-js.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrtChartJsModule": () => (/* binding */ CrtChartJsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _crt_chart_js_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crt-chart-js-routing.module */ 98447);
/* harmony import */ var _crt_chart_js_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crt-chart-js.component */ 39025);
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ 95702);
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-chartjs */ 55015);
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






class CrtChartJsModule {
}
CrtChartJsModule.ɵfac = function CrtChartJsModule_Factory(t) { return new (t || CrtChartJsModule)(); };
CrtChartJsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CrtChartJsModule });
CrtChartJsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _crt_chart_js_routing_module__WEBPACK_IMPORTED_MODULE_0__.CrtChartJsRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, angular2_chartjs__WEBPACK_IMPORTED_MODULE_3__.ChartModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CrtChartJsModule, { declarations: [_crt_chart_js_component__WEBPACK_IMPORTED_MODULE_1__.CrtChartJsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _crt_chart_js_routing_module__WEBPACK_IMPORTED_MODULE_0__.CrtChartJsRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, angular2_chartjs__WEBPACK_IMPORTED_MODULE_3__.ChartModule] }); })();


/***/ }),

/***/ 60609:
/*!****************************************************************************!*\
  !*** ./node_modules/angular2-chartjs/__ivy_ngcc__/dist/chart.component.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var core_1 = __webpack_require__(/*! @angular/core */ 3184);
var ɵngcc0 = __webpack_require__(/*! @angular/core */ 3184);
var ChartComponent = (function () {
    function ChartComponent(elementRef, ngZone) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.clickCanvas = new core_1.EventEmitter();
        this.clickDataset = new core_1.EventEmitter();
        this.clickElements = new core_1.EventEmitter();
        this.clickElement = new core_1.EventEmitter();
    }
    ChartComponent.prototype.ngOnInit = function () {
        this.create();
    };
    ChartComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.chart) {
            if (changes['type'] || changes['options']) {
                this.create();
            }
            else if (changes['data']) {
                var currentValue_1 = changes['data'].currentValue;
                ['datasets', 'labels', 'xLabels', 'yLabels'].forEach(function (property) {
                    _this.chart.data[property] = currentValue_1[property];
                });
                this.chart.update();
            }
        }
    };
    ChartComponent.prototype.create = function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            if (_this.canvas) {
                _this.elementRef.nativeElement.removeChild(_this.canvas);
            }
            _this.canvas = document.createElement('canvas');
            _this.elementRef.nativeElement.appendChild(_this.canvas);
            _this.chart = new Chart(_this.canvas, {
                type: _this.type,
                data: _this.data,
                options: _this.options
            });
            _this.canvas.onclick = function (e) {
                _this.ngZone.run(function () {
                    _this.clickCanvas.next(e);
                    if (_this.clickDataset.observers.length) {
                        _this.clickDataset.next(_this.chart.getDatasetAtEvent(e));
                    }
                    if (_this.clickElements.observers.length) {
                        _this.clickElements.next(_this.chart.getElementsAtEvent(e));
                    }
                    if (_this.clickElement.observers.length) {
                        _this.clickElement.next(_this.chart.getElementAtEvent(e));
                    }
                });
            };
        });
    };
    ChartComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
    ]; };
    ChartComponent.propDecorators = {
        'type': [{ type: core_1.Input },],
        'data': [{ type: core_1.Input },],
        'options': [{ type: core_1.Input },],
        'clickCanvas': [{ type: core_1.Output },],
        'clickDataset': [{ type: core_1.Output },],
        'clickElements': [{ type: core_1.Output },],
        'clickElement': [{ type: core_1.Output },],
    };
ChartComponent.ɵfac = function ChartComponent_Factory(t) { return new (t || ChartComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
ChartComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: ChartComponent, selectors: [["chart"]], inputs: { type: "type", data: "data", options: "options" }, outputs: { clickCanvas: "clickCanvas", clickDataset: "clickDataset", clickElements: "clickElements", clickElement: "clickElement" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function ChartComponent_Template(rf, ctx) { }, styles: ["[_nghost-%COMP%] { display: block; }"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ChartComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'chart',
                template: '',
                styles: [':host { display: block; }']
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }]; }, { clickCanvas: [{
            type: core_1.Output
        }], clickDataset: [{
            type: core_1.Output
        }], clickElements: [{
            type: core_1.Output
        }], clickElement: [{
            type: core_1.Output
        }], type: [{
            type: core_1.Input
        }], data: [{
            type: core_1.Input
        }], options: [{
            type: core_1.Input
        }] }); })();
    return ChartComponent;
}());
exports.ChartComponent = ChartComponent;



/***/ }),

/***/ 22865:
/*!*************************************************************************!*\
  !*** ./node_modules/angular2-chartjs/__ivy_ngcc__/dist/chart.module.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


if (typeof window === 'object') {
    __webpack_require__(/*! chart.js */ 37942);
}
var core_1 = __webpack_require__(/*! @angular/core */ 3184);
var chart_component_1 = __webpack_require__(/*! ./chart.component */ 60609);
var ɵngcc0 = __webpack_require__(/*! @angular/core */ 3184);
var ɵngcc1 = __webpack_require__(/*! ./chart.component */ 60609);
var ChartModule = (function () {
    function ChartModule() {
    }
    ChartModule.ctorParameters = function () { return []; };
ChartModule.ɵfac = function ChartModule_Factory(t) { return new (t || ChartModule)(); };
ChartModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: ChartModule });
ChartModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ChartModule, [{
        type: core_1.NgModule,
        args: [{
                declarations: [chart_component_1.ChartComponent],
                exports: [chart_component_1.ChartComponent]
            }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ChartModule, { declarations: [ɵngcc1.ChartComponent], exports: [ɵngcc1.ChartComponent] }); })();
    return ChartModule;
}());
exports.ChartModule = ChartModule;



/***/ }),

/***/ 55015:
/*!******************************************************************!*\
  !*** ./node_modules/angular2-chartjs/__ivy_ngcc__/dist/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(/*! ./chart.component */ 60609));
__export(__webpack_require__(/*! ./chart.module */ 22865));



/***/ })

}]);
//# sourceMappingURL=src_app_demo_pages_core-chart_crt-chart-js_crt-chart-js_module_ts.js.map