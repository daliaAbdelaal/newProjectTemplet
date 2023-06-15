"use strict";
(self["webpackChunkng_able_pro"] = self["webpackChunkng_able_pro"] || []).push([["src_app_demo_panels_school_sch-dashboard_sch-dashboard_module_ts"],{

/***/ 23083:
/*!*********************************************************************!*\
  !*** ./src/app/demo/panels/school/chart/dashboard-summary-chart.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardSummaryChart": () => (/* binding */ DashboardSummaryChart)
/* harmony export */ });
class DashboardSummaryChart {
}
DashboardSummaryChart.schChartData = {
    chart: {
        height: 250,
        type: 'area'
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 2,
        curve: 'smooth'
    },
    colors: ['#ff5252', '#4680ff'],
    fill: {
        type: 'solid',
        opacity: 0.2
    },
    markers: {
        size: 3,
        opacity: 0.9,
        colors: '#fff',
        strokeColor: ['#ff5252', '#4680ff'],
        strokeWidth: 2,
        hover: {
            size: 7
        }
    },
    series: [
        {
            name: 'Expense',
            data: [40, 75, 20, 45, 30, 50, 30]
        },
        {
            name: 'Income',
            data: [90, 40, 60, 20, 10, 0, 0]
        }
    ],
    xaxis: {
        type: 'datetime',
        categories: ['2019-01-19', '2019-02-19', '2019-03-19', '2019-04-19', '2019-05-19', '2019-06-19', '2019-07-19']
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        }
    }
};


/***/ }),

/***/ 48145:
/*!**********************************************************************************!*\
  !*** ./src/app/demo/panels/school/sch-dashboard/sch-dashboard-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchDashboardRoutingModule": () => (/* binding */ SchDashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _sch_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sch-dashboard.component */ 15346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _sch_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.SchDashboardComponent
    }
];
class SchDashboardRoutingModule {
}
SchDashboardRoutingModule.ɵfac = function SchDashboardRoutingModule_Factory(t) { return new (t || SchDashboardRoutingModule)(); };
SchDashboardRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SchDashboardRoutingModule });
SchDashboardRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SchDashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 15346:
/*!*****************************************************************************!*\
  !*** ./src/app/demo/panels/school/sch-dashboard/sch-dashboard.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchDashboardComponent": () => (/* binding */ SchDashboardComponent)
/* harmony export */ });
/* harmony import */ var _chart_dashboard_summary_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chart/dashboard-summary-chart */ 23083);
/* harmony import */ var _chart_dashboard_project_earning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chart/dashboard-project-earning */ 3215);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../theme/shared/components/card/card.component */ 84631);
/* harmony import */ var _theme_shared_components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../theme/shared/components/chart/apex-chart/apex-chart.component */ 91540);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullcalendar/angular */ 35717);







class SchDashboardComponent {
    constructor() {
        this.dateObj = new Date();
        this.yearMonth = this.dateObj.getUTCFullYear() + '-' + (this.dateObj.getUTCMonth() + 1);
        this.calendarOptions = {
            initialView: 'dayGridMonth',
            events: [
                {
                    title: 'All Day Event',
                    start: (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(this.yearMonth + '-01', 'yyyy-MM-dd', 'en-US'),
                    borderColor: '#04a9f5',
                    backgroundColor: '#04a9f5',
                    textColor: '#fff'
                },
                {
                    title: 'Long Event',
                    start: (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(this.yearMonth + '-07', 'yyyy-MM-dd', 'en-US'),
                    end: (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(this.yearMonth + '-10', 'yyyy-MM-dd', 'en-US'),
                    borderColor: '#f44236',
                    backgroundColor: '#f44236',
                    textColor: '#fff'
                },
                {
                    id: '999',
                    title: 'Repeating Event',
                    start: (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(this.yearMonth + '-09 09:00:00 PM', 'yyyy-MM-dd hh:mm:ss', 'en-US'),
                    borderColor: '#f4c22b',
                    backgroundColor: '#f4c22b',
                    textColor: '#fff'
                },
                {
                    id: '1000',
                    title: 'Repeating Event',
                    start: (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(this.yearMonth + '-16 08:00:00 AM', 'yyyy-MM-dd hh:mm:ss', 'en-US'),
                    borderColor: '#3ebfea',
                    backgroundColor: '#3ebfea',
                    textColor: '#fff'
                },
                {
                    title: 'Conference',
                    start: (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(this.yearMonth + '-11', 'yyyy-MM-dd', 'en-US'),
                    end: (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(this.yearMonth + '-13', 'yyyy-MM-dd', 'en-US'),
                    borderColor: '#1de9b6',
                    backgroundColor: '#1de9b6',
                    textColor: '#fff'
                },
                {
                    title: 'Meeting',
                    start: (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(this.yearMonth + '-12 10:00:00 PM', 'yyyy-MM-dd hh:mm:ss', 'en-US'),
                    end: (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(this.yearMonth + '-12 12:30:00 AM', 'yyyy-MM-dd hh:mm:ss', 'en-US'),
                    textColor: '#fff'
                },
                {
                    title: 'Lunch',
                    start: (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(this.yearMonth + '-12 12:00:00 PM', 'yyyy-MM-dd hh:mm:ss', 'en-US'),
                    borderColor: '#f44236',
                    backgroundColor: '#f44236',
                    textColor: '#fff'
                },
                {
                    title: 'Meeting',
                    start: (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(this.yearMonth + '-12 02:30:00 PM', 'yyyy-MM-dd hh:mm:ss', 'en-US'),
                    textColor: '#fff'
                },
                {
                    title: 'Happy Hour',
                    start: (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(this.yearMonth + '-12 05:30:00 PM', 'yyyy-MM-dd hh:mm:ss', 'en-US'),
                    borderColor: '#a389d4',
                    backgroundColor: '#a389d4',
                    textColor: '#fff'
                },
                {
                    title: 'Dinner',
                    start: (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(this.yearMonth + '-12 08:00:00 PM', 'yyyy-MM-dd hh:mm:ss', 'en-US'),
                    textColor: '#fff'
                },
                {
                    title: 'Birthday Party',
                    start: (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(this.yearMonth + '-13 07:30:00 AM', 'yyyy-MM-dd hh:mm:ss', 'en-US'),
                    textColor: '#fff'
                },
                {
                    title: 'Click for Google',
                    url: 'http://google.com/',
                    start: (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(this.yearMonth + '-28', 'yyyy-MM-dd', 'en-US'),
                    borderColor: '#a389d4',
                    backgroundColor: '#a389d4',
                    textColor: '#fff'
                }
            ]
        };
        this.summaryChartData = _chart_dashboard_summary_chart__WEBPACK_IMPORTED_MODULE_0__.DashboardSummaryChart.schChartData;
        this.projectEarningChartData = _chart_dashboard_project_earning__WEBPACK_IMPORTED_MODULE_1__.DashboardProjectEarning.schChartData;
    }
    ngOnInit() { }
}
SchDashboardComponent.ɵfac = function SchDashboardComponent_Factory(t) { return new (t || SchDashboardComponent)(); };
SchDashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: SchDashboardComponent, selectors: [["app-sch-dashboard"]], decls: 112, vars: 11, consts: [[1, "row"], [1, "col-xl-3", "col-md-6"], [3, "hidHeader"], [1, "row", "align-items-center", "m-l-0"], [1, "col-auto"], [1, "fas", "fa-user-graduate", "f-36", "text-c-purple"], [1, "text-muted", "m-b-10"], [1, "m-b-0"], [1, "fas", "fa-users", "f-36", "text-c-red"], [1, "fas", "fa-user-tie", "f-36", "text-c-green"], [1, "fas", "fa-book-open", "f-36", "text-c-blue"], [1, "col-md-12"], ["cardTitle", "Account summary", 3, "options"], ["chartID", "summary-chart", 3, "chartConfig"], [1, "col-xl-5", "col-md-12"], ["cardTitle", "Tasks", "cardClass", "task-card"], [1, "p-t-20", "list-unstyled", "task-list"], [1, "feather", "icon-check", "f-w-600", "task-icon", "bg-c-green"], [1, "m-b-5"], [1, "text-muted"], [1, "text-c-blue"], [1, "task-icon", "bg-c-blue"], [1, "task-icon", "bg-c-red"], [1, "task-icon", "bg-c-yellow"], [1, "pb-2", "mb-0"], [1, "task-icon", "bg-c-green"], [1, "col-xl-7", "col-md-12"], ["cardClass", "overflow-hidden", "blockClass", "bg-c-blue", 3, "hidHeader", "isCardFooter"], ["chartID", "project-earning--chart", 3, "chartConfig"], [1, "app-card-footer"], [1, "text-muted", "m-b-30", "m-t-15"], [1, "row", "text-center"], [1, "col-6", "border-right"], [1, "col-6"], [1, "col-sm-12"], ["cardTitle", "Full Calendar", "cardClass", "elite-calendar", 3, "options"], [3, "options"]], template: function SchDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "app-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Student");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "45");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "app-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Parents");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "app-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Teacher");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "app-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "25");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "app-card", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "app-apex-chart", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "app-card", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "8:50");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "h6", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "Your first semester Exam will held on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "19-04-2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](57, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "Sat, 5 Mar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "h6", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61, " In your school campus on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "1-03-2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, " will held a program of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "annual sports day");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, ".You are all invited. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](69, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, "Sun, 17 Feb");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "h6", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, "Your second semester exam will held on 30-08-2018.Please be prepare for your exam");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](75, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77, "Sat, 18 Mar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "h6", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79, " On ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81, "20-11-2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](82, " will held a programming contest in school campus.Registration start from today. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](84, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](86, "Sat, 22 Mar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "h6", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88, " Prize giving ceremony will held on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90, "03-01-2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](91, ".Best Student List published In your Website. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "app-card", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](94, "app-apex-chart", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "h6", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](97, "Total completed project and earning");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](100, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](101, "Completed Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](103, "175");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](104, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](106, "Total Earnings");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](108, "76.6M");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](109, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "app-card", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](111, "full-calendar", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("chartConfig", ctx.summaryChartData);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidHeader", true)("isCardFooter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("chartConfig", ctx.projectEarningChartData);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", ctx.calendarOptions);
    } }, directives: [_theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__.CardComponent, _theme_shared_components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_3__.ApexChartComponent, _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_6__.FullCalendarComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY2gtZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 82744:
/*!**************************************************************************!*\
  !*** ./src/app/demo/panels/school/sch-dashboard/sch-dashboard.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchDashboardModule": () => (/* binding */ SchDashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _sch_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sch-dashboard-routing.module */ 48145);
/* harmony import */ var _sch_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sch-dashboard.component */ 15346);
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ 95702);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/angular */ 35717);
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/interaction */ 85194);
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/daygrid */ 13947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);









_fullcalendar_angular__WEBPACK_IMPORTED_MODULE_5__.FullCalendarModule.registerPlugins([
    // register FullCalendar plugins
    _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_4__["default"],
    _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_3__["default"]
]);
class SchDashboardModule {
}
SchDashboardModule.ɵfac = function SchDashboardModule_Factory(t) { return new (t || SchDashboardModule)(); };
SchDashboardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: SchDashboardModule });
SchDashboardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _sch_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.SchDashboardRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_5__.FullCalendarModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SchDashboardModule, { declarations: [_sch_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.SchDashboardComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _sch_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.SchDashboardRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_5__.FullCalendarModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_demo_panels_school_sch-dashboard_sch-dashboard_module_ts.js.map