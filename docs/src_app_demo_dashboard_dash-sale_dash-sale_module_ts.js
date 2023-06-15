"use strict";
(self["webpackChunkng_able_pro"] = self["webpackChunkng_able_pro"] || []).push([["src_app_demo_dashboard_dash-sale_dash-sale_module_ts"],{

/***/ 3906:
/*!********************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-sale/chart/monthly-profit-1.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonthlyProfit1": () => (/* binding */ MonthlyProfit1)
/* harmony export */ });
class MonthlyProfit1 {
}
MonthlyProfit1.saleChartData = {
    chart: {
        type: 'area',
        height: 70,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#4680ff'],
    fill: {
        type: 'solid',
        opacity: 0.3
    },
    markers: {
        size: 2,
        opacity: 0.9,
        colors: '#4680ff',
        strokeColor: '#4680ff',
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
            data: [9, 66, 41, 89, 63, 25, 44, 12, 36, 20, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 9]
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
                formatter: (seriesName) => 'Monthly Profit :'
            }
        },
        marker: {
            show: false
        }
    }
};


/***/ }),

/***/ 31527:
/*!********************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-sale/chart/monthly-profit-2.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonthlyProfit2": () => (/* binding */ MonthlyProfit2)
/* harmony export */ });
class MonthlyProfit2 {
}
MonthlyProfit2.saleChartData = {
    chart: {
        type: 'area',
        height: 70,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#9ccc65'],
    fill: {
        type: 'solid',
        opacity: 0.3
    },
    markers: {
        size: 2,
        opacity: 0.9,
        colors: '#9ccc65',
        strokeColor: '#9ccc65',
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
            data: [9, 66, 41, 89, 63, 25, 44, 12, 36, 20, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 9]
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
                formatter: (seriesName) => 'Monthly Profit :'
            }
        },
        marker: {
            show: false
        }
    }
};


/***/ }),

/***/ 98751:
/*!***************************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-sale/chart/sec-ecommerce-chart-bar.ts ***!
  \***************************************************************************/
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

/***/ 25132:
/*!****************************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-sale/chart/sec-ecommerce-chart-line.ts ***!
  \****************************************************************************/
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

/***/ 98647:
/*!************************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-sale/chart/seo-analytic-chart-1.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeoAnalyticChart1": () => (/* binding */ SeoAnalyticChart1)
/* harmony export */ });
class SeoAnalyticChart1 {
}
SeoAnalyticChart1.seoChartData = {
    chart: {
        type: 'area',
        height: 50,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#4680ff'],
    fill: {
        type: 'solid',
        opacity: 0
    },
    grid: {
        padding: {
            left: 5,
            right: 5
        }
    },
    markers: {
        size: 3,
        opacity: 0.9,
        colors: '#4680ff',
        strokeColor: '#4680ff',
        strokeWidth: 1,
        hover: {
            size: 4
        }
    },
    stroke: {
        curve: 'straight',
        width: 2
    },
    series: [
        {
            name: 'series1',
            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89]
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
                formatter: (seriesName) => 'Site Analysis :'
            }
        },
        marker: {
            show: false
        }
    }
};


/***/ }),

/***/ 93740:
/*!************************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-sale/chart/seo-analytic-chart-2.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeoAnalyticChart2": () => (/* binding */ SeoAnalyticChart2)
/* harmony export */ });
class SeoAnalyticChart2 {
}
SeoAnalyticChart2.seoChartData = {
    chart: {
        type: 'area',
        height: 50,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#9ccc65'],
    fill: {
        type: 'solid',
        opacity: 0
    },
    grid: {
        padding: {
            left: 5,
            right: 5
        }
    },
    markers: {
        size: 3,
        opacity: 0.9,
        colors: '#9ccc65',
        strokeColor: '#9ccc65',
        strokeWidth: 1,
        hover: {
            size: 4
        }
    },
    stroke: {
        curve: 'straight',
        width: 2
    },
    series: [
        {
            name: 'series1',
            data: [12, 25, 36, 9, 54, 25, 66, 66, 41, 89, 63, 25, 44, 89, 41]
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
                formatter: (seriesName) => 'Total Sales :'
            }
        },
        marker: {
            show: false
        }
    }
};


/***/ }),

/***/ 25698:
/*!************************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-sale/chart/seo-analytic-chart-3.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeoAnalyticChart3": () => (/* binding */ SeoAnalyticChart3)
/* harmony export */ });
class SeoAnalyticChart3 {
}
SeoAnalyticChart3.seoChartData = {
    chart: {
        type: 'area',
        height: 50,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#ff5252'],
    fill: {
        type: 'solid',
        opacity: 0
    },
    grid: {
        padding: {
            left: 5,
            right: 5
        }
    },
    markers: {
        size: 3,
        opacity: 0.9,
        colors: '#ff5252',
        strokeColor: '#ff5252',
        strokeWidth: 1,
        hover: {
            size: 4
        }
    },
    stroke: {
        curve: 'straight',
        width: 2
    },
    series: [
        {
            name: 'series1',
            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89]
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
                formatter: (seriesName) => 'Total Visits :'
            }
        },
        marker: {
            show: false
        }
    }
};


/***/ }),

/***/ 19264:
/*!************************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-sale/chart/seo-analytic-chart-4.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeoAnalyticChart4": () => (/* binding */ SeoAnalyticChart4)
/* harmony export */ });
class SeoAnalyticChart4 {
}
SeoAnalyticChart4.seoChartData = {
    chart: {
        type: 'area',
        height: 50,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#ffba57'],
    fill: {
        type: 'solid',
        opacity: 0
    },
    grid: {
        padding: {
            left: 5,
            right: 5
        }
    },
    markers: {
        size: 3,
        opacity: 0.9,
        colors: '#ffba57',
        strokeColor: '#ffba57',
        strokeWidth: 1,
        hover: {
            size: 4
        }
    },
    stroke: {
        curve: 'straight',
        width: 2
    },
    series: [
        {
            name: 'series1',
            data: [12, 25, 36, 9, 54, 25, 66, 66, 41, 89, 63, 25, 44, 89, 41]
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
                formatter: (seriesName) => 'Total Usage :'
            }
        },
        marker: {
            show: false
        }
    }
};


/***/ }),

/***/ 27878:
/*!**********************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-sale/dash-sale-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashSaleRoutingModule": () => (/* binding */ DashSaleRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _dash_sale_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dash-sale.component */ 31670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _dash_sale_component__WEBPACK_IMPORTED_MODULE_0__.DashSaleComponent
    }
];
class DashSaleRoutingModule {
}
DashSaleRoutingModule.ɵfac = function DashSaleRoutingModule_Factory(t) { return new (t || DashSaleRoutingModule)(); };
DashSaleRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DashSaleRoutingModule });
DashSaleRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DashSaleRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 31670:
/*!*****************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-sale/dash-sale.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashSaleComponent": () => (/* binding */ DashSaleComponent)
/* harmony export */ });
/* harmony import */ var _chart_seo_analytic_chart_1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart/seo-analytic-chart-1 */ 98647);
/* harmony import */ var _chart_seo_analytic_chart_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart/seo-analytic-chart-2 */ 93740);
/* harmony import */ var _chart_seo_analytic_chart_3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart/seo-analytic-chart-3 */ 25698);
/* harmony import */ var _chart_seo_analytic_chart_4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chart/seo-analytic-chart-4 */ 19264);
/* harmony import */ var _chart_sec_ecommerce_chart_line__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chart/sec-ecommerce-chart-line */ 25132);
/* harmony import */ var _chart_sec_ecommerce_chart_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chart/sec-ecommerce-chart-bar */ 98751);
/* harmony import */ var _chart_monthly_profit_1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chart/monthly-profit-1 */ 3906);
/* harmony import */ var _chart_monthly_profit_2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chart/monthly-profit-2 */ 31527);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../theme/shared/components/card/card.component */ 84631);
/* harmony import */ var _theme_shared_components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../theme/shared/components/chart/apex-chart/apex-chart.component */ 91540);











class DashSaleComponent {
    constructor() {
        this.seoChartData1 = _chart_seo_analytic_chart_1__WEBPACK_IMPORTED_MODULE_0__.SeoAnalyticChart1.seoChartData;
        this.seoChartData2 = _chart_seo_analytic_chart_2__WEBPACK_IMPORTED_MODULE_1__.SeoAnalyticChart2.seoChartData;
        this.seoChartData3 = _chart_seo_analytic_chart_3__WEBPACK_IMPORTED_MODULE_2__.SeoAnalyticChart3.seoChartData;
        this.seoChartData4 = _chart_seo_analytic_chart_4__WEBPACK_IMPORTED_MODULE_3__.SeoAnalyticChart4.seoChartData;
        this.secEcommerceChartDataLine = _chart_sec_ecommerce_chart_line__WEBPACK_IMPORTED_MODULE_4__.SecEcommerceChartLine.saleChartData;
        this.secEcommerceChartDataBar = _chart_sec_ecommerce_chart_bar__WEBPACK_IMPORTED_MODULE_5__.SecEcommerceChartBar.saleChartData;
        this.monthlyProfitChartData1 = _chart_monthly_profit_1__WEBPACK_IMPORTED_MODULE_6__.MonthlyProfit1.saleChartData;
        this.monthlyProfitChartData2 = _chart_monthly_profit_2__WEBPACK_IMPORTED_MODULE_7__.MonthlyProfit2.saleChartData;
    }
    ngOnInit() { }
}
DashSaleComponent.ɵfac = function DashSaleComponent_Factory(t) { return new (t || DashSaleComponent)(); };
DashSaleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: DashSaleComponent, selectors: [["app-dash-sale"]], decls: 287, vars: 19, consts: [[1, "row"], [1, "col-xl-3", "col-md-6"], [3, "hidHeader"], [1, "text-muted"], ["chartID", "seo-chart-1", 3, "chartConfig"], ["chartID", "seo-chart-2", 3, "chartConfig"], ["chartID", "seo-chart-3", 3, "chartConfig"], ["chartID", "seo-chart-4", 3, "chartConfig"], [1, "col-lg-4", "col-md-12"], ["cardClass", "overflow-hidden", "blockClass", "bg-c-green pb-0", 3, "hidHeader", "isCardFooter"], [1, "row", "text-white"], [1, "col-auto"], [1, "m-b-5", "text-white"], [1, "text-white"], [1, "col", "text-right"], ["chartID", "sec-ecommerce-chart-line", 3, "chartConfig"], [1, "row", "justify-content-center"], [1, "col-8"], ["chartID", "sec-ecommerce-chart-bar", 3, "chartConfig"], [1, "app-card-footer"], [1, "col"], [1, "text-muted", "m-b-5"], [1, "col-lg-8", "col-md-12"], ["cardTitle", "Latest Order", "cardClass", "table-card latest-activity-card", "blockClass", "p-0"], [1, "table-responsive"], [1, "table", "table-hover", "table-borderless", "mb-0"], ["src", "assets/images/widget/PHONE1.jpg", "alt", "", 1, "img-fluid"], [1, "badge", "badge-light-warning"], ["href", "javascript:"], [1, "icon", "feather", "icon-edit", "f-w-600", "f-16", "m-r-15", "text-c-green"], [1, "feather", "icon-trash-2", "f-w-600", "f-16", "text-c-red"], ["src", "assets/images/widget/PHONE2.jpg", "alt", "", 1, "img-fluid"], [1, "badge", "badge-light-primary"], ["src", "assets/images/widget/PHONE3.jpg", "alt", "", 1, "img-fluid"], [1, "badge", "badge-light-success"], [1, "col-md-12", "col-xl-4"], ["cardClass", "bg-c-yellow order-card", 3, "hidHeader"], [1, "m-b-0"], [1, "feather", "icon-arrow-up", "m-l-10"], [1, "card-icon", "feather", "icon-filter"], [1, "col-md-6", "col-xl-4"], ["cardClass", "bg-c-blue order-card", 3, "hidHeader"], [1, "feather", "icon-arrow-up", "m-l-10", "m-r-10"], [1, "feather", "icon-arrow-down"], [1, "card-icon", "feather", "icon-users"], ["cardClass", "bg-c-green order-card", 3, "hidHeader"], [1, "feather", "icon-arrow-down", "m-l-10", "m-r-10"], [1, "feather", "icon-arrow-up"], [1, "card-icon", "feather", "icon-radio"], ["cardTitle", "Customer Reviews", "headerClass", "borderless", "cardClass", "table-card review-card"], [1, "review-block"], [1, "col-sm-auto", "p-r-0"], ["src", "assets/images/user/avatar-2.jpg", "alt", "user image", 1, "img-radius", "profile-img", "cust-img", "m-b-15"], [1, "m-b-15"], [1, "float-right", "f-13", "text-muted"], [1, "feather", "icon-star-on", "f-18", "text-c-yellow"], [1, "feather", "icon-star", "f-18", "text-muted"], [1, "m-t-15", "m-b-15", "text-muted"], ["href", "javascript:", 1, "m-r-30", "text-muted"], [1, "feather", "icon-thumbs-up", "m-r-15"], [1, "feather", "icon-heart-on", "text-c-red", "m-r-15"], [1, "feather", "icon-edit", "text-muted"], ["src", "assets/images/user/avatar-4.jpg", "alt", "user image", 1, "img-radius", "profile-img", "cust-img", "m-b-15"], [1, "blockquote", "m-t-15", "m-b-0"], [1, "m-b-0", "text-muted"], [1, "text-right", "m-r-20"], ["href", "javascript:", 1, "b-b-primary", "text-primary"], [1, "text-center", "f-w-400"], [1, "text-center", "text-muted"], ["chartID", "monthly-profit-1", 3, "chartConfig"], [1, "m-t-20"], [1, "col-6", "text-center"], [1, "f-20", "f-w-400"], [1, "text-muted", "f-14", "m-b-0"], ["chartID", "monthly-profit-2", 3, "chartConfig"]], template: function DashSaleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "app-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "20500");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Site Analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "app-apex-chart", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "app-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "20500");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "Total Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "app-apex-chart", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "app-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "28000");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, "Total Visits");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](21, "app-apex-chart", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "app-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, "59600");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "Total Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](28, "app-apex-chart", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "app-card", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34, "$654");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "h6", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36, "+1.65(2.56%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "h6", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39, "Friday");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](40, "app-apex-chart", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](43, "app-apex-chart", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](46, "$2654.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](48, "Sales in Nov.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](52, "From Market");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](53, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](54, "$1860.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](57, "Referral");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](59, "$500.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](60, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](61, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](62, "Affiliate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](63, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](64, "$294.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](65, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](66, "app-card", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](67, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](68, "table", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](69, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](70, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](71, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](72, "Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](73, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](74, "Order ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](75, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](76, "Photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](77, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](78, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](79, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](80, "Qty");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](81, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](82, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](83, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](84, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](85, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](86, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](87, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](88, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](89, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](90, "John Deo");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](91, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](92, "#814123");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](93, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](94, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](95, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](96, "Moto G5");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](97, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](98, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](99, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](100, "17-2-2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](101, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](102, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](103, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](104, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](105, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](106, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](107, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](108, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](109, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](110, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](111, "Jenny William");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](112, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](113, "#684898");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](114, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](115, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](116, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](117, "iPhone 8");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](118, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](119, "16");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](120, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](121, "20-2-2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](122, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](123, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](124, "Paid");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](125, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](126, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](127, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](128, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](129, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](130, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](131, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](132, "Lori Moore");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](133, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](134, "#454898");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](135, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](136, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](137, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](138, "Redmi 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](139, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](140, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](141, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](142, "17-2-2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](143, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](144, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](145, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](146, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](147, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](148, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](149, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](150, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](151, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](152, "app-card", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](153, "h6", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](154, "Revenue");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](155, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](156, "$42,562");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](157, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](158, "$5,032 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](159, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](160, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](161, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](162, "app-card", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](163, "h6", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](164, "Orders Received");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](165, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](166, "486");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](167, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](168, "$5,032 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](169, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](170, "$1,055 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](171, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](172, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](173, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](174, "app-card", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](175, "h6", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](176, "Total Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](177, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](178, "1641");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](179, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](180, "$5,032 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](181, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](182, "$1,055 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](183, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](184, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](185, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](186, "app-card", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](187, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](188, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](189, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](190, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](191, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](192, "h6", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](193, "John Deo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](194, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](195, " a week ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](196, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](197, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](198, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](199, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](200, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](201, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](202, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](203, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](204, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](205, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](206, "p", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](207, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](208, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](209, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](210, "Helpful?");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](211, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](212, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](213, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](214, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](215, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](216, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](217, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](218, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](219, "h6", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](220, "Allina D\u2019croze ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](221, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](222, " a week ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](223, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](224, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](225, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](226, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](227, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](228, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](229, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](230, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](231, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](232, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](233, "p", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](234, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](235, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](236, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](237, "Helpful?");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](238, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](239, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](240, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](241, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](242, "blockquote", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](243, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](244, "Allina D\u2019croze");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](245, "p", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](246, "Lorem Ipsum is simply dummy text of the industry.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](247, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](248, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](249, "View all Customer Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](250, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](251, "app-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](252, "h2", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](253, "$45,567");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](254, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](255, "Monthly Profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](256, "app-apex-chart", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](257, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](258, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](259, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](260, "h6", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](261, "$6,234");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](262, "p", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](263, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](264, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](265, "h6", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](266, "$4,387");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](267, "p", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](268, "Yesterday");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](269, "app-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](270, "h2", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](271, "2,413");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](272, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](273, "Total Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](274, "app-apex-chart", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](275, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](276, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](277, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](278, "h6", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](279, "1578");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](280, "p", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](281, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](282, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](283, "h6", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](284, "1028");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](285, "p", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](286, "Yesterday");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("chartConfig", ctx.seoChartData1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("chartConfig", ctx.seoChartData2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("chartConfig", ctx.seoChartData3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("chartConfig", ctx.seoChartData4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidHeader", true)("isCardFooter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("chartConfig", ctx.secEcommerceChartDataLine);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("chartConfig", ctx.secEcommerceChartDataBar);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](109);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("chartConfig", ctx.monthlyProfitChartData1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("chartConfig", ctx.monthlyProfitChartData2);
    } }, directives: [_theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_8__.CardComponent, _theme_shared_components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_9__.ApexChartComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoLXNhbGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 45888:
/*!**************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-sale/dash-sale.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashSaleModule": () => (/* binding */ DashSaleModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _dash_sale_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dash-sale-routing.module */ 27878);
/* harmony import */ var _dash_sale_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dash-sale.component */ 31670);
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ 95702);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class DashSaleModule {
}
DashSaleModule.ɵfac = function DashSaleModule_Factory(t) { return new (t || DashSaleModule)(); };
DashSaleModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: DashSaleModule });
DashSaleModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _dash_sale_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashSaleRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DashSaleModule, { declarations: [_dash_sale_component__WEBPACK_IMPORTED_MODULE_1__.DashSaleComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _dash_sale_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashSaleRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_demo_dashboard_dash-sale_dash-sale_module_ts.js.map