"use strict";
(self["webpackChunkng_able_pro"] = self["webpackChunkng_able_pro"] || []).push([["src_app_demo_dashboard_dash-crm_dash-crm_module_ts"],{

/***/ 76127:
/*!***************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-crm/chart/client-map-1.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientMap1": () => (/* binding */ ClientMap1)
/* harmony export */ });
class ClientMap1 {
}
ClientMap1.crmChartData = {
    chart: {
        type: 'area',
        height: 90,
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
        opacity: 0.4
    },
    stroke: {
        curve: 'smooth',
        width: 3
    },
    series: [
        {
            name: 'series1',
            data: [20, 10, 18, 12, 25, 10, 20]
        }
    ],
    yaxis: {
        min: 0,
        max: 30
    },
    tooltip: {
        theme: 'dark',
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: (seriesName) => 'Activity'
            }
        },
        marker: {
            show: false
        }
    }
};


/***/ }),

/***/ 84520:
/*!***************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-crm/chart/client-map-3.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientMap3": () => (/* binding */ ClientMap3)
/* harmony export */ });
class ClientMap3 {
}
ClientMap3.crmChartData = {
    chart: {
        type: 'bar',
        height: 90,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#9ccc65'],
    plotOptions: {
        bar: {
            columnWidth: '60%'
        }
    },
    series: [
        {
            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63]
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
                formatter: (seriesName) => 'Activity :'
            }
        },
        marker: {
            show: false
        }
    }
};


/***/ }),

/***/ 93570:
/*!*******************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-crm/chart/monthly-profit-3.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonthlyProfit3": () => (/* binding */ MonthlyProfit3)
/* harmony export */ });
class MonthlyProfit3 {
}
MonthlyProfit3.crmChartData = {
    chart: {
        type: 'area',
        height: 30,
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
        opacity: 0.3
    },
    markers: {
        size: 2,
        opacity: 0.9,
        colors: '#ff5252',
        strokeColor: '#ff5252',
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
                formatter: (seriesName) => 'Unique Visitors :'
            }
        },
        marker: {
            show: false
        }
    }
};


/***/ }),

/***/ 75126:
/*!********************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-crm/chart/tot-invoice-chart.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TotInvoiceChart": () => (/* binding */ TotInvoiceChart)
/* harmony export */ });
class TotInvoiceChart {
}
TotInvoiceChart.crmChartData = {
    chart: {
        type: 'area',
        height: 150,
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
        opacity: 0.3
    },
    stroke: {
        curve: 'straight',
        width: 3
    },
    series: [
        {
            name: 'series1',
            data: [25, 66, 41, 89, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89]
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
                formatter: (seriesName) => 'Total Leads :'
            }
        },
        marker: {
            show: false
        }
    }
};


/***/ }),

/***/ 50148:
/*!*****************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-crm/chart/tot-lead-chart.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TotLeadChart": () => (/* binding */ TotLeadChart)
/* harmony export */ });
class TotLeadChart {
}
TotLeadChart.crmChartData = {
    chart: {
        type: 'area',
        height: 150,
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
    stroke: {
        curve: 'straight',
        width: 3
    },
    series: [
        {
            name: 'series1',
            data: [25, 66, 41, 89, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89]
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
                formatter: (seriesName) => 'Total Leads :'
            }
        },
        marker: {
            show: false
        }
    }
};


/***/ }),

/***/ 16500:
/*!*******************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-crm/chart/tot-vendor-chart.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TotVendorChart": () => (/* binding */ TotVendorChart)
/* harmony export */ });
class TotVendorChart {
}
TotVendorChart.crmChartData = {
    chart: {
        type: 'area',
        height: 150,
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
    stroke: {
        curve: 'straight',
        width: 3
    },
    series: [
        {
            name: 'series1',
            data: [25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 25, 66, 41, 50]
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
                formatter: (seriesName) => 'Total Vendors :'
            }
        },
        marker: {
            show: false
        }
    }
};


/***/ }),

/***/ 85077:
/*!********************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-crm/dash-crm-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashCrmRoutingModule": () => (/* binding */ DashCrmRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _dash_crm_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dash-crm.component */ 77636);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _dash_crm_component__WEBPACK_IMPORTED_MODULE_0__.DashCrmComponent
    }
];
class DashCrmRoutingModule {
}
DashCrmRoutingModule.ɵfac = function DashCrmRoutingModule_Factory(t) { return new (t || DashCrmRoutingModule)(); };
DashCrmRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DashCrmRoutingModule });
DashCrmRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DashCrmRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 77636:
/*!***************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-crm/dash-crm.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashCrmComponent": () => (/* binding */ DashCrmComponent)
/* harmony export */ });
/* harmony import */ var _chart_tot_lead_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart/tot-lead-chart */ 50148);
/* harmony import */ var _chart_tot_vendor_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart/tot-vendor-chart */ 16500);
/* harmony import */ var _chart_tot_invoice_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart/tot-invoice-chart */ 75126);
/* harmony import */ var _chart_monthly_profit_3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chart/monthly-profit-3 */ 93570);
/* harmony import */ var _chart_client_map_1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chart/client-map-1 */ 76127);
/* harmony import */ var _chart_client_map_3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chart/client-map-3 */ 84520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../theme/shared/components/card/card.component */ 84631);
/* harmony import */ var _theme_shared_components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../theme/shared/components/chart/apex-chart/apex-chart.component */ 91540);









class DashCrmComponent {
    constructor() {
        this.totLeadChartData = _chart_tot_lead_chart__WEBPACK_IMPORTED_MODULE_0__.TotLeadChart.crmChartData;
        this.totVendorChartData = _chart_tot_vendor_chart__WEBPACK_IMPORTED_MODULE_1__.TotVendorChart.crmChartData;
        this.totInvoiceChartData = _chart_tot_invoice_chart__WEBPACK_IMPORTED_MODULE_2__.TotInvoiceChart.crmChartData;
        this.monthlyProfitChartData3 = _chart_monthly_profit_3__WEBPACK_IMPORTED_MODULE_3__.MonthlyProfit3.crmChartData;
        this.clientMapChartData1 = _chart_client_map_1__WEBPACK_IMPORTED_MODULE_4__.ClientMap1.crmChartData;
        this.clientMapChartData3 = _chart_client_map_3__WEBPACK_IMPORTED_MODULE_5__.ClientMap3.crmChartData;
    }
    ngOnInit() { }
}
DashCrmComponent.ɵfac = function DashCrmComponent_Factory(t) { return new (t || DashCrmComponent)(); };
DashCrmComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: DashCrmComponent, selectors: [["app-dash-crm"]], decls: 312, vars: 16, consts: [[1, "row"], [1, "col-md-12", "col-lg-4"], ["blockClass", "text-center", 3, "hidHeader"], [1, "feather", "icon-mail", "text-c-blue", "d-block", "f-40"], [1, "m-t-20"], [1, "text-c-blue"], [1, "m-b-20"], [1, "btn", "btn-primary", "btn-sm", "btn-round"], [1, "col-md-6", "col-lg-4"], [1, "feather", "icon-twitter", "text-c-green", "d-block", "f-40"], [1, "text-c-green"], [1, "btn", "btn-success", "btn-sm", "btn-round"], [1, "feather", "icon-briefcase", "text-c-red", "d-block", "f-40"], [1, "btn", "btn-danger", "btn-sm", "btn-round"], [1, "col-xl-4", "col-md-6"], ["blockClass", "p-0", 3, "hidHeader"], [1, "p-20", "p-b-0"], [1, "mb-3"], [1, "text-c-green", "f-w-500"], [1, "fa", "fa-caret-up", "m-r-15"], [1, "col-4", "b-r-default"], [1, "text-muted", "m-b-5"], [1, "col-4"], ["chartID", "tot-lead-chart", 3, "chartConfig"], [1, "text-c-red", "f-w-500"], [1, "fa", "fa-caret-down", "m-r-15"], ["chartID", "tot-vendor-chart", 3, "chartConfig"], [1, "col-xl-4", "col-md-12"], ["chartID", "tot-invoice-chart", 3, "chartConfig"], [1, "col-xl-8", "col-md-12"], ["cardTitle", "Latest Activity", "cardClass", "latest-activity-card"], [1, "latest-update-box"], [1, "row", "p-t-20", "p-b-30"], [1, "col-auto", "text-right", "update-meta"], [1, "text-muted", "m-b-0", "d-inline-flex"], [1, "feather", "icon-sunrise", "bg-c-blue", "update-icon"], [1, "col"], ["href", "javascript:"], [1, "text-muted", "m-b-15"], ["src", "assets/images/widget/dashborad-1.jpg", "alt", "", 1, "img-fluid", "wid-100", "m-r-15", "m-b-10"], ["src", "assets/images/widget/dashborad-3.jpg", "alt", "", 1, "img-fluid", "wid-100", "m-r-15", "m-b-10"], [1, "row", "p-b-30"], [1, "feather", "icon-file-text", "bg-c-blue", "update-icon"], [1, "text-muted", "m-b-0"], [1, "feather", "icon-map-pin", "bg-c-blue", "update-icon"], ["href", "javascript:", 1, "text-c-blue"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.961710410607!2d72.86204201533417!3d21.233366886136675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f1c84348989%3A0xfb5817a0f069bfe5!2sPhoenixcoded!5e0!3m2!1sen!2sin!4v1562323931692!5m2!1sen!2sin", "frameborder", "0", "allowfullscreen", "", 2, "width", "100%", "height", "270px", "border", "0"], [1, "text-right"], ["href", "javascript:", 1, "b-b-primary", "text-primary"], ["cardTitle", "Feeds", "cardClass", "feed-card"], [1, "row", "m-b-30", "m-t-20"], [1, "col-auto", "p-r-0"], [1, "feather", "icon-bell", "bg-c-blue", "feed-icon"], [1, "m-b-5"], [1, "text-muted", "float-right", "f-13"], [1, "row", "m-b-30"], [1, "feather", "icon-shopping-cart", "bg-c-red", "feed-icon"], [1, "feather", "icon-file-text", "bg-c-green", "feed-icon"], [1, "row", "m-b-20"], [1, "text-center"], ["cardTitle", "Upcoming Deadlines", "cardClass", "feed-card"], [1, "row", "m-b-25", "m-t-20"], ["src", "assets/images/widget/dashborad-1.jpg", "alt", "", 1, "img-fluid", "wid-50"], [1, "text-c-red", "m-b-0"], [1, "row", "m-b-25"], ["src", "assets/images/widget/dashborad-2.jpg", "alt", "", 1, "img-fluid", "wid-50"], ["src", "assets/images/widget/dashborad-3.jpg", "alt", "", 1, "img-fluid", "wid-50"], [1, "text-c-green", "m-b-0"], [1, "col-md-6", "col-xl-4"], [3, "hidHeader"], [1, "row", "align-items-center", "m-l-0"], [1, "col-auto"], [1, "icon", "feather", "icon-users", "f-30", "text-c-red"], [1, "text-muted", "m-b-10"], [1, "m-b-0"], [1, "text-center", "f-w-400"], [1, "text-center", "text-muted"], ["id", "-3"], ["chartID", "monthly-profit-chart-3", 3, "chartConfig"], [1, "col-6", "text-center"], [1, "f-20", "f-w-400"], [1, "text-muted", "f-14", "m-b-0"], ["cardClass", "client-map", 3, "hidHeader"], [1, "client-detail"], [1, "client-profile"], ["src", "assets/images/user/avatar-2.jpg", "alt", ""], [1, "client-contain"], ["href", "javascript:", 1, "text-muted"], [1, "text-muted", "m-0", "p-t-10"], [1, ""], [1, "client-card-box"], [1, "col-6", "text-center", "client-border", "p-10"], [1, "text-muted", "m-0"], [1, "text-c-blue", "f-20", "f-w-600"], [1, "col-6", "text-center", "p-10"], [1, "col-sm-12", "client-border-card", "p-t-10"], ["chartID", "client-map-chart-1", 3, "chartConfig"], ["src", "assets/images/user/avatar-3.jpg", "alt", ""], [1, "text-c-green", "f-20", "f-w-600"], ["chartID", "client-map-chart-3", 3, "chartConfig"]], template: function DashCrmComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "app-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "8.62k");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, " Subscribers");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Your main list is growing");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Manage List");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "app-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "+40");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, " Followers");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "Your main list is growing");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "Check them out");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "app-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](25, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "Business Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "This is your current active plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, "Upgrade to VIP");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "app-card", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "h5", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36, "Total Leads");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](38, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39, " 18% High than last month");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, "Overall");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45, "76.12%");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48, "Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](50, "16.40%");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](53, "Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](55, "4.56%");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](56, "app-apex-chart", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "app-card", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "h5", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](61, "Total Vendors");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](63, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](64, " 24% High than last month");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](68, "Overall");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](69, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](70, "68.52%");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](71, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](72, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](73, "Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](75, "28.90%");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](77, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](78, "Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](79, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](80, "13.50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](81, "app-apex-chart", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](82, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](83, "app-card", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](84, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](85, "h5", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](86, "Invoice Generate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](87, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](88, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](89, " 20% High than last month");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](90, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](91, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](92, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](93, "Overall");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](94, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](95, "68.52%");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](96, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](97, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](98, "Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](99, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](100, "28.90%");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](101, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](102, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](103, "Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](104, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](105, "13.50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](106, "app-apex-chart", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](107, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](108, "app-card", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](109, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](110, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](111, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](112, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](113, "just now");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](114, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](115, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](116, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](117, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](118, "John Deo");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](119, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](120, "The trip was an amazing and a life changing experience!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](121, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](122, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](123, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](124, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](125, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](126, "5 min ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](127, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](128, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](129, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](130, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](131, "Administrator");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](132, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](133, "Free courses for all our customers at A1 Conference Room - 9:00 am tomorrow!");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](134, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](135, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](136, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](137, "3 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](138, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](139, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](140, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](141, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](142, "Jeny William");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](143, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](144, " Happy Hour! Free drinks at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](145, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](146, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](147, "Cafe-Bar all ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](148, "day long! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](149, "iframe", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](150, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](151, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](152, "View all Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](153, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](154, "app-card", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](155, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](156, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](157, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](158, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](159, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](160, "h6", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](161, "You have 3 pending tasks. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](162, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](163, "Just Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](164, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](165, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](166, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](167, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](168, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](169, "h6", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](170, "New order received ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](171, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](172, "Just Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](173, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](174, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](175, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](176, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](177, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](178, "h6", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](179, "You have 3 pending tasks. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](180, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](181, "Just Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](182, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](183, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](184, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](185, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](186, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](187, "h6", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](188, "New order received ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](189, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](190, "Just Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](191, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](192, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](193, "View all Feeds");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](194, "app-card", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](195, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](196, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](197, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](198, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](199, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](200, "h6", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](201, "New able - Redesign");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](202, "p", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](203, "2 Days Remaining");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](204, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](205, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](206, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](207, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](208, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](209, "h6", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](210, "New Admin Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](211, "p", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](212, "Proposal in 6 Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](213, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](214, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](215, "img", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](216, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](217, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](218, "h6", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](219, "Logo Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](220, "p", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](221, "10 Days Remaining");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](222, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](223, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](224, "View all Feeds");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](225, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](226, "app-card", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](227, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](228, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](229, "i", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](230, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](231, "h6", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](232, "Happy Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](233, "h2", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](234, "5984");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](235, "app-card", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](236, "h2", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](237, "8,421");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](238, "p", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](239, "Unique Visitors");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](240, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](241, "app-apex-chart", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](242, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](243, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](244, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](245, "h6", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](246, "2,849");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](247, "p", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](248, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](249, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](250, "h6", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](251, "3,587");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](252, "p", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](253, "Yesterday");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](254, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](255, "app-card", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](256, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](257, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](258, "img", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](259, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](260, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](261, "Gregory Johnes");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](262, "a", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](263, "gregory@demo.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](264, "p", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](265, "Product Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](266, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](267, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](268, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](269, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](270, "p", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](271, "Invites");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](272, "span", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](273, "345");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](274, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](275, "p", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](276, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](277, "span", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](278, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](279, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](280, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](281, "Overall Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](282, "app-apex-chart", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](283, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](284, "app-card", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](285, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](286, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](287, "img", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](288, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](289, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](290, "Gregory Johnes");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](291, "a", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](292, "gregory@demo.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](293, "p", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](294, "Product Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](295, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](296, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](297, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](298, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](299, "p", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](300, "Invites");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](301, "span", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](302, "812");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](303, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](304, "p", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](305, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](306, "span", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](307, "00");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](308, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](309, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](310, "Overall Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](311, "app-apex-chart", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("chartConfig", ctx.totLeadChartData);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("chartConfig", ctx.totVendorChartData);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("chartConfig", ctx.totInvoiceChartData);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](120);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("chartConfig", ctx.monthlyProfitChartData3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("chartConfig", ctx.clientMapChartData1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("chartConfig", ctx.clientMapChartData3);
    } }, directives: [_theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_6__.CardComponent, _theme_shared_components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_7__.ApexChartComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoLWNybS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 80775:
/*!************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-crm/dash-crm.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashCrmModule": () => (/* binding */ DashCrmModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _dash_crm_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dash-crm-routing.module */ 85077);
/* harmony import */ var _dash_crm_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dash-crm.component */ 77636);
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ 95702);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class DashCrmModule {
}
DashCrmModule.ɵfac = function DashCrmModule_Factory(t) { return new (t || DashCrmModule)(); };
DashCrmModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: DashCrmModule });
DashCrmModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _dash_crm_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashCrmRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DashCrmModule, { declarations: [_dash_crm_component__WEBPACK_IMPORTED_MODULE_1__.DashCrmComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _dash_crm_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashCrmRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_demo_dashboard_dash-crm_dash-crm_module_ts.js.map