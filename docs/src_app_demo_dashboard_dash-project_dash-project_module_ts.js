"use strict";
(self["webpackChunkng_able_pro"] = self["webpackChunkng_able_pro"] || []).push([["src_app_demo_dashboard_dash-project_dash-project_module_ts"],{

/***/ 4462:
/*!********************************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-project/chart/sec-ecommerce-chart-bar-1.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecEcommerceChartBar1": () => (/* binding */ SecEcommerceChartBar1)
/* harmony export */ });
class SecEcommerceChartBar1 {
}
SecEcommerceChartBar1.saleChartData = {
    chart: {
        type: 'bar',
        height: 70,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#0491a2'],
    plotOptions: {
        bar: {
            columnWidth: '60%'
        }
    },
    series: [
        {
            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89]
        }
    ],
    xaxis: {
        crosshairs: {
            width: 1
        }
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: (seriesName) => 'Affiliate :'
            }
        },
        marker: {
            show: false
        }
    }
};


/***/ }),

/***/ 3225:
/*!******************************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-project/chart/sec-ecommerce-chart-bar.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecEcommerceChartBar": () => (/* binding */ SecEcommerceChartBar)
/* harmony export */ });
class SecEcommerceChartBar {
}
SecEcommerceChartBar.saleChartData = {
    chart: {
        type: 'bar',
        height: 70,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#548b2e'],
    plotOptions: {
        bar: {
            columnWidth: '60%'
        }
    },
    series: [
        {
            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89]
        }
    ],
    xaxis: {
        crosshairs: {
            width: 1
        }
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: (seriesName) => 'Affiliate :'
            }
        },
        marker: {
            show: false
        }
    }
};


/***/ }),

/***/ 88370:
/*!*******************************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-project/chart/sec-ecommerce-chart-line.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecEcommerceChartLine": () => (/* binding */ SecEcommerceChartLine)
/* harmony export */ });
class SecEcommerceChartLine {
}
SecEcommerceChartLine.saleChartData = {
    chart: {
        type: 'area',
        height: 40,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#fff'],
    fill: {
        type: 'solid',
        opacity: 0
    },
    markers: {
        size: 3,
        opacity: 0.9,
        colors: '#fff',
        strokeColor: '#fff',
        strokeWidth: 2,
        hover: {
            size: 4
        }
    },
    stroke: {
        curve: 'straight',
        width: 3
    },
    series: [
        {
            name: 'series1',
            data: [25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89, 63]
        }
    ],
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: (seriesName) => 'Referral :'
            }
        },
        marker: {
            show: false
        }
    }
};


/***/ }),

/***/ 88539:
/*!****************************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-project/dash-project-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashProjectRoutingModule": () => (/* binding */ DashProjectRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _dash_project_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dash-project.component */ 1405);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _dash_project_component__WEBPACK_IMPORTED_MODULE_0__.DashProjectComponent
    }
];
class DashProjectRoutingModule {
}
DashProjectRoutingModule.ɵfac = function DashProjectRoutingModule_Factory(t) { return new (t || DashProjectRoutingModule)(); };
DashProjectRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DashProjectRoutingModule });
DashProjectRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DashProjectRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 1405:
/*!***********************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-project/dash-project.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashProjectComponent": () => (/* binding */ DashProjectComponent)
/* harmony export */ });
/* harmony import */ var _chart_sec_ecommerce_chart_line__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart/sec-ecommerce-chart-line */ 88370);
/* harmony import */ var _chart_sec_ecommerce_chart_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart/sec-ecommerce-chart-bar */ 3225);
/* harmony import */ var _chart_sec_ecommerce_chart_bar_1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart/sec-ecommerce-chart-bar-1 */ 4462);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../theme/shared/components/card/card.component */ 84631);
/* harmony import */ var _theme_shared_components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../theme/shared/components/chart/apex-chart/apex-chart.component */ 91540);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);







class DashProjectComponent {
    constructor() {
        this.secEcommerceChartDataLine = _chart_sec_ecommerce_chart_line__WEBPACK_IMPORTED_MODULE_0__.SecEcommerceChartLine.saleChartData;
        this.secEcommerceChartDataBar = _chart_sec_ecommerce_chart_bar__WEBPACK_IMPORTED_MODULE_1__.SecEcommerceChartBar.saleChartData;
        this.secEcommerceChartDataBar1 = _chart_sec_ecommerce_chart_bar_1__WEBPACK_IMPORTED_MODULE_2__.SecEcommerceChartBar1.saleChartData;
    }
    ngOnInit() { }
}
DashProjectComponent.ɵfac = function DashProjectComponent_Factory(t) { return new (t || DashProjectComponent)(); };
DashProjectComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: DashProjectComponent, selectors: [["app-dash-project"]], decls: 453, vars: 15, consts: [[1, "row"], [1, "col-xl-3", "col-md-6"], [3, "hidHeader"], [1, "row", "align-items-center", "m-l-0"], [1, "col-auto"], [1, "icon", "feather", "icon-book", "f-30", "text-c-purple"], [1, "text-muted", "m-b-10"], [1, "m-b-0"], [1, "icon", "feather", "icon-navigation-2", "f-30", "text-c-green"], [1, "icon", "feather", "icon-users", "f-30", "text-c-red"], [1, "icon", "feather", "icon-award", "f-30", "text-c-blue"], [1, "col-xl-4", "col-md-6"], ["cardClass", "overflow-hidden", "blockClass", "bg-c-green pb-0", 3, "hidHeader", "isCardFooter"], [1, "row", "text-white"], [1, "m-b-5", "text-white"], [1, "text-white"], [1, "col", "text-right"], ["chartID", "sec-ecommerce-chart-line", 3, "chartConfig"], [1, "row", "justify-content-center"], [1, "col-8"], ["chartID", "sec-ecommerce-chart-bar", 3, "chartConfig"], [1, "app-card-footer"], [1, "text-muted"], [1, "col"], [1, "text-muted", "m-b-5"], ["cardClass", "overflow-hidden", "blockClass", "bg-info pb-0", 3, "hidHeader", "isCardFooter"], ["chartID", "sec-ecommerce-chart-line-1", 3, "chartConfig"], ["chartID", "sec-ecommerce-chart-bar-1", 3, "chartConfig"], [1, "col-xl-4", "col-md-12"], ["cardClass", "app-design", 3, "hidHeader"], [1, "btn", "btn-primary", "float-right"], [1, "f-w-400", "text-muted", "mb-3"], [1, "text-c-blue", "f-w-400"], [1, "design-description", "d-inline-block", "m-r-40"], [1, "f-w-400"], [1, "design-description", "d-inline-block"], [1, "team-box", "p-b-20", "m-t-10"], [1, "d-inline-block", "m-r-20", "f-w-400"], [1, "team-section", "d-inline-block"], ["href", "javascript:"], ["src", "assets/images/user/avatar-2.jpg ", "data-toggle", "tooltip", "title", "Josephin Doe", "alt", " "], ["src", "assets/images/user/avatar-3.jpg ", "data-toggle", "tooltip", "title", "Lary Doe", "alt", " ", 1, "m-l-5"], ["src", "assets/images/user/avatar-4.jpg ", "data-toggle", "tooltip", "title", "Alia", "alt", " ", 1, "m-l-5"], ["src", "assets/images/user/avatar-2.jpg ", "data-toggle", "tooltip", "title", "Suzen", "alt", " ", 1, "m-l-5"], [1, "progress-box"], ["type", "primary", 3, "value"], [1, "col-xl-5", "col-md-12"], ["cardTitle", "Latest Updates", "cardClass", "latest-update-card"], [1, "latest-update-box"], [1, "row", "p-b-30", "p-t-20"], [1, "col-auto", "text-right", "update-meta"], [1, "text-muted", "m-b-0", "d-inline-flex"], [1, "feather", "icon-twitter", "bg-twitter", "update-icon"], [1, "text-muted", "m-b-0"], [1, "row", "p-b-30"], [1, "feather", "icon-briefcase", "bg-c-red", "update-icon"], [1, "row", "p-b-0"], [1, "feather", "icon-facebook", "bg-facebook", "update-icon"], [1, "table-responsive"], [1, "table", "table-hover"], [1, "b-none"], ["href", "javascript:", 1, "align-middle"], ["src", "assets/images/user/avatar-2.jpg", "alt", "user image", 1, "img-radius", "wid-40", "align-top", "m-r-15"], [1, "d-inline-block"], ["cardClass", "user-card2 overflow-hidden", "blockClass", "text-center p-0", 3, "hidHeader"], [1, "p-20", "p-b-0"], [1, "m-b-15"], [1, "risk-rate"], [1, "m-b-20", "m-t-15"], ["href", "javascript:", 1, "text-c-green", "b-b-success"], [1, "row", "justify-content-center", "m-t-10", "b-t-default", "m-l-0", "m-r-0"], [1, "col", "m-t-15", "b-r-default"], [1, "col", "m-t-15"], [1, "btn", "btn-success", "btn-block"], ["cardTitle", "Tasks", "cardClass", "task-card"], [1, "list-unstyled", "task-list", "p-t-20"], [1, "feather", "icon-check", "f-w-600", "task-icon", "bg-c-green"], [1, "m-b-5"], [1, "text-c-blue"], ["href", "javascript:", 1, "text-c-blue"], [1, "task-icon", "bg-c-blue"], [1, "task-icon", "bg-c-red"], [1, "task-icon", "bg-c-yellow"], [1, "text-muted", "mb-3"], [1, "col-xl-6", "col-md-12"], ["cardTitle", "Projects", "cardClass", "table-card", "blockClass", "p-0"], [1, "table", "table-hover", "mb-0"], [1, "chk-option"], [1, "check-task", "custom-control", "custom-checkbox", "d-flex", "justify-content-center", "done-task"], ["type", "checkbox", 1, "custom-control-input"], [1, "custom-control-label"], [1, "text-right"], [1, "d-inline-block", "align-middle"], ["src", "assets/images/user/avatar-4.jpg", "alt", "user image", 1, "img-radius", "wid-40", "align-top", "m-r-15"], [1, "badge", "badge-light-danger"], [1, "badge", "badge-light-primary"], ["src", "assets/images/user/avatar-3.jpg", "alt", "user image", 1, "img-radius", "wid-40", "align-top", "m-r-15"], [1, "badge", "badge-light-success"], ["cardTitle", "Active Tickets", "cardClass", "table-card", "blockClass", "p-0"], [1, "table", "table-hover", "table-borderless", "mb-0"], [1, "d-inline-block", "align-middle", "text-center"], ["src", "assets/images/user/avatar-4.jpg", "data-toggle", "tooltip", "title", "John Deo", "data-placement", "top", "alt", "user image", 1, "img-radius", "wid-40", "align-top", "m-r-15"], ["src", "assets/images/user/avatar-3.jpg", "data-toggle", "tooltip", "title", "Jems Win", "data-placement", "top", "alt", "user image", 1, "img-radius", "wid-40", "align-top", "m-r-15"], ["src", "assets/images/user/avatar-2.jpg", "data-toggle", "tooltip", "title", "Jeny Wiliiam", "data-placement", "top", "alt", "user image", 1, "img-radius", "wid-40", "align-top", "m-r-15"]], template: function DashProjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "app-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Tickets Answered");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "379");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Projects Launched");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "205");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Happy Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "5984");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Unique Innovation");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "325");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "app-card", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "h4", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "$654");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "h6", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "+1.65(2.56%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "h6", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "Friday");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](52, "app-apex-chart", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](55, "app-apex-chart", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "$2654.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "Sales in Nov.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "From Market");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "$1860.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](69, "Referral");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, "$500.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "Affiliate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](76, "$294.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "app-card", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "h4", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](82, "$654");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "h6", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](84, "+1.65(2.56%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "h6", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](87, "Friday");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](88, "app-apex-chart", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](91, "app-apex-chart", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](94, "$2654.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96, "Sales in Nov.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100, "From Market");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](102, "$1860.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](104, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](105, "Referral");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](107, "$500.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](108, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](109, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](110, "Affiliate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](111, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](112, "$294.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](114, "app-card", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](115, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](116, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "h6", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](118, "App Design And Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](119, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](120, "Android");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](121, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](122, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](123, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](124, "h3", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](125, "678");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](126, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](127, "Question");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](128, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](129, "h3", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](130, "1,452");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](131, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](132, "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](133, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](134, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](135, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](136, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](137, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](138, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](139, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](140, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](141, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](142, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](143, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](144, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](145, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](146, "ngb-progressbar", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](147, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](148, "app-card", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](149, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](150, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](151, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](152, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](153, "2 hrs ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](154, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](155, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](156, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](157, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](158, "+ 1652 Followers");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](159, "p", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](160, "You\u2019re getting more and more followers, keep it up!");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](161, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](162, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](163, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](164, "4 hrs ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](165, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](166, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](167, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](168, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](169, "+ 5 New Products were added!");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](170, "p", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](171, "Congratulations!");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](172, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](173, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](174, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](175, "2 day ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](176, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](177, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](178, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](179, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](180, "+1 Friend Requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](181, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](182, "This is great, keep it up!");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](183, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](184, "table", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](185, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](186, "td", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](187, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](188, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](189, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](190, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](191, "Jeny William");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](192, "p", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](193, "Graphic Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](194, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](195, "app-card", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](196, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](197, "h6", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](198, "Project Risk");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](199, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](200, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](201, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](202, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](203, "h6", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](204, "Balanced");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](205, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](206, "Change Your Risk");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](207, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](208, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](209, "h6", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](210, "Nr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](211, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](212, "AWS 2455");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](213, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](214, "h6", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](215, "Created");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](216, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](217, "30th Sep");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](218, "button", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](219, "Download Overall Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](220, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](221, "app-card", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](222, "ul", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](223, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](224, "i", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](225, "p", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](226, "8:50");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](227, "h6", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](228, " Call to customer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](229, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](230, "a", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](231, "Jacob");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](232, " and discuss the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](233, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](234, "i", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](235, "p", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](236, "Sat, 5 Mar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](237, "h6", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](238, "Design mobile Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](239, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](240, "i", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](241, "p", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](242, "Sun, 17 Feb");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](243, "h6", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](244, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](245, "a", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](246, "Jeny");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](247, " assign you a task ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](248, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](249, "a", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](250, "Mockup Design.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](251, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](252, "i", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](253, "p", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](254, "Sat, 18 Mar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](255, "h6", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](256, "Design logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](257, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](258, "app-card", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](259, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](260, "table", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](261, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](262, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](263, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](264, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](265, "label", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](266, "input", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](267, "span", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](268, " Assigned ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](269, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](270, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](271, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](272, "Due Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](273, "th", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](274, "Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](275, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](276, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](277, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](278, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](279, "label", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](280, "input", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](281, "span", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](282, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](283, "img", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](284, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](285, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](286, "John Deo");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](287, "p", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](288, "Graphics Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](289, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](290, "Able Pro");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](291, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](292, "Jun, 26");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](293, "td", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](294, "label", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](295, "Low");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](296, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](297, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](298, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](299, "label", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](300, "input", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](301, "span", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](302, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](303, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](304, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](305, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](306, "Jenifer Vintage");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](307, "p", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](308, "Web Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](309, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](310, "Mashable");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](311, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](312, "March, 31");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](313, "td", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](314, "label", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](315, "high");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](316, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](317, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](318, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](319, "label", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](320, "input", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](321, "span", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](322, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](323, "img", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](324, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](325, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](326, "William Jem");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](327, "p", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](328, "Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](329, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](330, "Flatable");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](331, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](332, "Aug, 02");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](333, "td", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](334, "label", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](335, "medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](336, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](337, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](338, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](339, "label", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](340, "input", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](341, "span", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](342, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](343, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](344, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](345, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](346, "David Jones");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](347, "p", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](348, "Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](349, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](350, "Guruable");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](351, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](352, "Sep, 22");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](353, "td", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](354, "label", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](355, "high");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](356, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](357, "app-card", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](358, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](359, "table", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](360, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](361, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](362, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](363, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](364, "label", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](365, "input", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](366, "span", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](367, " Due ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](368, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](369, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](370, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](371, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](372, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](373, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](374, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](375, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](376, "label", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](377, "input", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](378, "span", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](379, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](380, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](381, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](382, "p", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](383, "hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](384, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](385, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](386, "img", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](387, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](388, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](389, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](390, "[#1183] Workaround for OS X selects");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](391, "p", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](392, "Chrome fixed the bug several versions ago...");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](393, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](394, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](395, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](396, "label", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](397, "input", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](398, "span", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](399, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](400, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](401, "16");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](402, "p", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](403, "hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](404, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](405, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](406, "img", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](407, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](408, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](409, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](410, "[#1249] Vertically center carousel controls");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](411, "p", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](412, "Try any carousel control and reduce the screen...");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](413, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](414, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](415, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](416, "label", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](417, "input", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](418, "span", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](419, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](420, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](421, "40");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](422, "p", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](423, "hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](424, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](425, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](426, "img", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](427, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](428, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](429, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](430, "[#1254] Inaccurate small pagination height");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](431, "p", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](432, "The height of pagination elements is not");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](433, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](434, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](435, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](436, "label", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](437, "input", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](438, "span", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](439, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](440, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](441, "16");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](442, "p", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](443, "hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](444, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](445, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](446, "img", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](447, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](448, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](449, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](450, "[#1249] Vertically center carousel controls");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](451, "p", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](452, "Try any carousel control and reduce the screen");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
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
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidHeader", true)("isCardFooter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("chartConfig", ctx.secEcommerceChartDataLine);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("chartConfig", ctx.secEcommerceChartDataBar);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidHeader", true)("isCardFooter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("chartConfig", ctx.secEcommerceChartDataLine);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("chartConfig", ctx.secEcommerceChartDataBar1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidHeader", true);
    } }, directives: [_theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__.CardComponent, _theme_shared_components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_4__.ApexChartComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbProgressbar], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoLXByb2plY3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 97955:
/*!********************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-project/dash-project.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashProjectModule": () => (/* binding */ DashProjectModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _dash_project_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dash-project-routing.module */ 88539);
/* harmony import */ var _dash_project_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dash-project.component */ 1405);
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ 95702);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






class DashProjectModule {
}
DashProjectModule.ɵfac = function DashProjectModule_Factory(t) { return new (t || DashProjectModule)(); };
DashProjectModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: DashProjectModule });
DashProjectModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _dash_project_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashProjectRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbProgressbarModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DashProjectModule, { declarations: [_dash_project_component__WEBPACK_IMPORTED_MODULE_1__.DashProjectComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _dash_project_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashProjectRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbProgressbarModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_demo_dashboard_dash-project_dash-project_module_ts.js.map