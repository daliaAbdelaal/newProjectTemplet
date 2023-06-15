"use strict";
(self["webpackChunkng_able_pro"] = self["webpackChunkng_able_pro"] || []).push([["src_app_demo_widget_widget-chart_widget-chart_module_ts"],{

/***/ 15945:
/*!*************************************************************************!*\
  !*** ./src/app/demo/dashboard/dash-default/chart/power-card-chart-3.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PowerCardChart3": () => (/* binding */ PowerCardChart3)
/* harmony export */ });
class PowerCardChart3 {
}
PowerCardChart3.powerCardChartData = {
    chart: {
        type: 'line',
        height: 75,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#4680ff'],
    stroke: {
        curve: 'smooth',
        width: 3
    },
    series: [
        {
            name: 'series1',
            data: [55, 35, 75, 50, 90, 50]
        }
    ],
    yaxis: {
        min: 10,
        max: 100
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
                formatter: (seriesName) => 'Water'
            }
        },
        marker: {
            show: false
        }
    }
};


/***/ }),

/***/ 99219:
/*!********************************************************************!*\
  !*** ./src/app/demo/widget/widget-chart/chart/amount-processed.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AmountProcessed": () => (/* binding */ AmountProcessed)
/* harmony export */ });
class AmountProcessed {
}
AmountProcessed.analyticsChartData = {
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
        opacity: 0.3
    },
    markers: {
        size: 3,
        opacity: 0.9,
        colors: '#fff',
        strokeColor: '#4680ff',
        strokeWidth: 2,
        hover: {
            size: 7
        }
    },
    stroke: {
        curve: 'straight',
        width: 3
    },
    series: [
        {
            name: 'series1',
            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89]
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
                formatter: (seriesName) => 'Amount Processed :'
            }
        },
        marker: {
            show: false
        }
    }
};


/***/ }),

/***/ 26622:
/*!****************************************************************!*\
  !*** ./src/app/demo/widget/widget-chart/chart/amount-spent.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AmountSpent": () => (/* binding */ AmountSpent)
/* harmony export */ });
class AmountSpent {
}
AmountSpent.analyticsChartData = {
    chart: {
        type: 'bar',
        height: 50,
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
            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89, 63, 25, 44, 12]
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
                formatter: (seriesName) => 'Amount Spent :'
            }
        },
        marker: {
            show: false
        }
    }
};


/***/ }),

/***/ 73895:
/*!**************************************************************!*\
  !*** ./src/app/demo/widget/widget-chart/chart/chart-data.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartDB": () => (/* binding */ ChartDB)
/* harmony export */ });
class ChartDB {
}
ChartDB.completedTicketCAC = {
    chart: {
        type: 'line',
        height: 80,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 3,
        curve: 'smooth'
    },
    series: [
        {
            data: [45, 66, 41, 89, 25, 44, 9, 54]
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
                formatter: (seriesName) => ''
            }
        },
        marker: {
            show: false
        }
    }
};
ChartDB.transactions1CAC = {
    chart: {
        type: 'bar',
        height: 60,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#4680ff'],
    plotOptions: {
        bar: {
            columnWidth: '80%'
        }
    },
    series: [
        {
            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
        }
    ],
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
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
                formatter: (seriesName) => 'Inbound'
            }
        },
        marker: {
            show: false
        }
    }
};
ChartDB.transactions2CAC = {
    chart: {
        type: 'bar',
        height: 65,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#ff5252'],
    plotOptions: {
        bar: {
            columnWidth: '80%'
        }
    },
    series: [
        {
            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
        }
    ],
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
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
                formatter: (seriesName) => 'Outbound'
            }
        },
        marker: {
            show: false
        }
    }
};
ChartDB.percentageCAC = {
    chart: {
        height: 120,
        type: 'bar',
        sparkline: {
            enabled: true
        }
    },
    colors: ['#4680ff', '#0e9e4a', '#ff5252'],
    plotOptions: {
        bar: {
            columnWidth: '55%',
            distributed: true
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 0
    },
    series: [
        {
            name: 'Requests',
            data: [66.6, 29.7, 32.8]
        }
    ],
    xaxis: {
        categories: ['Desktop', 'Tablet', 'Mobile']
    }
};
ChartDB.userAACC = {
    chart: {
        type: 'line',
        height: 30,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight',
        width: 2
    },
    series: [
        {
            data: [3, 0, 1, 2, 1, 1, 2]
        }
    ],
    yaxis: {
        min: -2,
        max: 5
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
                formatter: (seriesName) => ''
            }
        },
        marker: {
            show: false
        }
    },
    colors: ['#FF9800']
};
ChartDB.sessionAACC = {
    chart: {
        type: 'line',
        height: 30,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight',
        width: 2
    },
    series: [
        {
            data: [2, 1, 2, 1, 1, 3, 0]
        }
    ],
    yaxis: {
        min: -2,
        max: 5
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
                formatter: (seriesName) => ''
            }
        },
        marker: {
            show: false
        }
    },
    colors: ['#dc6788']
};
ChartDB.pageViewAACC = {
    chart: {
        type: 'line',
        height: 30,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight',
        width: 2
    },
    series: [
        {
            data: [3, 0, 1, 2, 1, 1, 2]
        }
    ],
    yaxis: {
        min: -2,
        max: 5
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
                formatter: (seriesName) => ''
            }
        },
        marker: {
            show: false
        }
    },
    colors: ['#ff5252']
};
ChartDB.pageSessionAACC = {
    chart: {
        type: 'line',
        height: 30,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight',
        width: 2
    },
    series: [
        {
            data: [2, 1, 2, 1, 1, 3, 0]
        }
    ],
    yaxis: {
        min: -2,
        max: 5
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
                formatter: (seriesName) => ''
            }
        },
        marker: {
            show: false
        }
    },
    colors: ['#7759de']
};
ChartDB.avgSessionAACC = {
    chart: {
        type: 'line',
        height: 30,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight',
        width: 2
    },
    series: [
        {
            data: [3, 0, 1, 2, 1, 1, 2]
        }
    ],
    yaxis: {
        min: -2,
        max: 5
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
                formatter: (seriesName) => ''
            }
        },
        marker: {
            show: false
        }
    },
    colors: ['#4680ff']
};
ChartDB.bounceRateAACC = {
    chart: {
        type: 'line',
        height: 30,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight',
        width: 2
    },
    series: [
        {
            data: [2, 1, 2, 1, 1, 3, 0]
        }
    ],
    yaxis: {
        min: -2,
        max: 5
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
                formatter: (seriesName) => ''
            }
        },
        marker: {
            show: false
        }
    },
    colors: ['#11c15b']
};
ChartDB.timeUserCAC = {
    chart: {
        height: 400,
        type: 'heatmap'
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#4680ff'],
    series: [
        {
            name: 'Metric1',
            data: generateDataSabraThat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric2',
            data: generateDataSabraThat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric3',
            data: generateDataSabraThat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric4',
            data: generateDataSabraThat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric5',
            data: generateDataSabraThat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric6',
            data: generateDataSabraThat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric7',
            data: generateDataSabraThat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric8',
            data: generateDataSabraThat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric9',
            data: generateDataSabraThat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric10',
            data: generateDataSabraThat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric11',
            data: generateDataSabraThat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric12',
            data: generateDataSabraThat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric13',
            data: generateDataSabraThat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric14',
            data: generateDataSabraThat(12, {
                min: 0,
                max: 90
            })
        }
    ]
};
ChartDB.horizontalBarCAC = {
    chart: {
        height: 350,
        type: 'bar'
    },
    plotOptions: {
        bar: {
            horizontal: true,
            dataLabels: {
                position: 'top'
            }
        }
    },
    colors: ['#4680ff', '#0e9e4a', '#ff5252'],
    dataLabels: {
        enabled: false,
        offsetX: -6,
        style: {
            fontSize: '12px',
            colors: ['#fff']
        }
    },
    stroke: {
        show: true,
        width: 1,
        colors: ['#fff']
    },
    series: [
        {
            name: 'India',
            data: [44, 55, 41, 64, 22]
        },
        {
            name: 'Japan',
            data: [53, 32, 33, 52, 13]
        },
        {
            name: 'London',
            data: [44, 33, 52, 13, 22]
        }
    ],
    xaxis: {
        categories: [2001, 2002, 2003, 2004, 2005]
    }
};
ChartDB.conversionsBarCAC = {
    chart: {
        type: 'bar',
        height: 85,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#4680ff'],
    plotOptions: {
        bar: {
            columnWidth: '80%'
        }
    },
    series: [
        {
            data: [
                25,
                66,
                41,
                89,
                63,
                25,
                44,
                12,
                36,
                9,
                54,
                25,
                66,
                41,
                89,
                63,
                54,
                25,
                66,
                41,
                89,
                63,
                25,
                44,
                12,
                36,
                9,
                54,
                25,
                66,
                41,
                89,
                63,
                25,
                44,
                12,
                36,
                9,
                25,
                44,
                12,
                36,
                9,
                54
            ]
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
                formatter: (seriesName) => ''
            }
        },
        marker: {
            show: false
        }
    }
};
ChartDB.siteCAC = {
    chart: {
        type: 'line',
        height: 150,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight',
        width: 3
    },
    series: [
        {
            data: [135, 187, 180, 222, 185, 195, 158]
        }
    ],
    yaxis: {
        min: 100
    },
    colors: ['#4680ff']
};
ChartDB.satisfactionSACC = {
    chart: {
        height: 260,
        type: 'pie'
    },
    series: [66, 50, 40, 30],
    labels: ['extremely Satisfied', 'Satisfied', 'Poor', 'Very Poor'],
    legend: {
        show: true,
        offsetY: 50
    },
    dataLabels: {
        enabled: true,
        dropShadow: {
            enabled: false
        }
    },
    theme: {
        monochrome: {
            enabled: true,
            color: '#4680ff'
        }
    },
    responsive: [
        {
            breakpoint: 768,
            options: {
                chart: {
                    height: 320
                },
                legend: {
                    position: 'bottom',
                    offsetY: 0
                }
            }
        }
    ]
};
ChartDB.trafficCAC = {
    chart: {
        height: 300,
        type: 'donut'
    },
    dataLabels: {
        enabled: true,
        dropShadow: {
            enabled: false
        }
    },
    series: [85.7, 77.56, 20.9, 10.9, 15.8, 86.7],
    colors: ['#4680ff', '#0e9e4a', '#00acc1', '#ffa21d', '#ff5252', '#7759de'],
    labels: ['Facebook ads', 'Amazon ads', 'Youtube videos', 'Google adsense', 'Twitter ads', 'News ads'],
    legend: {
        show: true,
        position: 'bottom'
    }
};
ChartDB.saleCAC = {
    chart: {
        type: 'bar',
        height: 220,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#4680ff'],
    plotOptions: {
        bar: {
            columnWidth: '80%'
        }
    },
    series: [
        {
            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89, 63, 25]
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
                formatter: (seriesName) => ''
            }
        },
        marker: {
            show: false
        }
    }
};
ChartDB.timeCAC = {
    chart: {
        height: 225,
        type: 'line',
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 3,
        curve: 'straight'
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
    },
    colors: ['#0e9e4a'],
    series: [
        {
            name: 'Hour.',
            data: [10, 41, 35, 51, 49, 52, 58, 71, 89]
        }
    ],
    grid: {
        row: {
            colors: ['#f3f6ff', 'transparent'],
            opacity: 0.5
        }
    }
};
ChartDB.revenueCAC = {
    chart: {
        height: 223,
        type: 'donut'
    },
    dataLabels: {
        enabled: false
    },
    labels: ['Target', 'Last week', 'Last day'],
    series: [1258, 975, 500],
    legend: {
        show: false
    },
    colors: ['#00acc1', '#ffa21d', '#4680ff']
};
ChartDB.marketCAC = {
    chart: {
        height: 200,
        type: 'bar',
        stacked: true,
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#E0291D', '#3C5A99', '#42C0FB'],
    plotOptions: {
        bar: {
            horizontal: false
        }
    },
    series: [
        {
            name: 'Youtube',
            data: [44, 50, 41, 67, 22, 43, 44, 50, 41, 52, 22, 43]
        },
        {
            name: 'Facebook',
            data: [13, 23, 20, 8, 13, 27, 13, 23, 20, 8, 13, 27]
        },
        {
            name: 'Twitter',
            data: [11, 17, 15, 15, 21, 14, 11, 17, 15, 15, 21, 14]
        }
    ],
    xaxis: {
        type: 'datetime',
        categories: [
            '01/01/2011 GMT',
            '01/02/2011 GMT',
            '01/03/2011 GMT',
            '01/04/2011 GMT',
            '01/05/2011 GMT',
            '01/06/2011 GMT',
            '01/07/2011 GMT',
            '01/08/2011 GMT',
            '01/09/2011 GMT',
            '01/10/2011 GMT',
            '01/11/2011 GMT',
            '01/12/2011 GMT'
        ]
    },
    legend: {
        show: false
    },
    fill: {
        opacity: 1
    }
};
ChartDB.typeCAC = {
    chart: {
        height: 235,
        type: 'donut'
    },
    dataLabels: {
        enabled: false
    },
    plotOptions: {
        pie: {
            donut: {
                size: '65%'
            }
        }
    },
    labels: ['Desktop Computers', 'Smartphones', 'Tablets'],
    series: [76.7, 15, 30],
    legend: {
        show: false
    },
    colors: ['#ff5252', '#ffa21d', '#00acc1']
};
ChartDB.trafficMonitorCAC = {
    chart: {
        type: 'bar',
        height: 400,
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: true
    },
    colors: ['#4680ff'],
    plotOptions: {
        bar: {
            colors: {
                ranges: [
                    {
                        from: 0,
                        to: 15,
                        color: '#ff5252'
                    },
                    {
                        from: 16,
                        to: 30,
                        color: '#ffa21d'
                    },
                    {
                        from: 31,
                        to: 50,
                        color: '#4680ff'
                    },
                    {
                        from: 51,
                        to: 100,
                        color: '#0e9e4a'
                    }
                ]
            },
            columnWidth: '80%'
        }
    },
    series: [
        {
            data: [
                25,
                66,
                41,
                89,
                63,
                25,
                44,
                12,
                36,
                9,
                54,
                25,
                66,
                41,
                89,
                63,
                54,
                25,
                66,
                41,
                89,
                63,
                25,
                44,
                12,
                36,
                9,
                54,
                25,
                66,
                41,
                89,
                63,
                25,
                44,
                12,
                36,
                9,
                25,
                44,
                12,
                36,
                9,
                54
            ]
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
                formatter: (seriesName) => 'Click '
            }
        },
        marker: {
            show: false
        }
    }
};
ChartDB.supportCAC = {
    chart: {
        type: 'area',
        height: 95,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#4680ff'],
    stroke: {
        curve: 'smooth',
        width: 2
    },
    series: [
        {
            data: [0, 20, 10, 45, 30, 55, 20, 30, 0]
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
                formatter: (seriesName) => 'Ticket '
            }
        },
        marker: {
            show: false
        }
    }
};
ChartDB.average1CAC = {
    chart: {
        type: 'area',
        height: 145,
        width: '100%',
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#4680ff'],
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.8,
            opacityTo: 0.4,
            stops: [0, 80, 100]
        }
    },
    stroke: {
        curve: 'smooth',
        width: 2
    },
    series: [
        {
            name: 'series1',
            data: [40, 60, 35, 55, 35, 75, 50]
        }
    ],
    yaxis: {
        min: 0,
        max: 100
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
                formatter: (seriesName) => '$'
            }
        },
        marker: {
            show: false
        }
    }
};
ChartDB.average2CAC = {
    chart: {
        type: 'area',
        height: 145,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#0e9e4a'],
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.8,
            opacityTo: 0.4,
            stops: [0, 90, 100]
        }
    },
    stroke: {
        curve: 'smooth',
        width: 2
    },
    series: [
        {
            name: 'series1',
            data: [40, 55, 35, 75, 50, 90, 50]
        }
    ],
    yaxis: {
        min: 0,
        max: 100
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
                formatter: (seriesName) => '$'
            }
        },
        marker: {
            show: false
        }
    }
};
ChartDB.average3CAC = {
    chart: {
        type: 'area',
        height: 145,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#FFF'],
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0.4,
            stops: [0, 100]
        }
    },
    stroke: {
        curve: 'smooth',
        width: 2
    },
    series: [
        {
            name: 'series1',
            data: [40, 60, 35, 70, 50]
        }
    ],
    yaxis: {
        min: 0,
        max: 100
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
                formatter: (seriesName) => '$'
            }
        },
        marker: {
            show: false
        }
    }
};
ChartDB.average4CAC = {
    chart: {
        type: 'area',
        height: 145,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#FFF'],
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0.4,
            stops: [0, 100]
        }
    },
    stroke: {
        curve: 'smooth',
        width: 2
    },
    series: [
        {
            name: 'series1',
            data: [65, 45, 60, 40, 80]
        }
    ],
    yaxis: {
        min: 0,
        max: 100
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
                formatter: (seriesName) => '$'
            }
        },
        marker: {
            show: false
        }
    }
};
function generateDataSabraThat(count, yrange) {
    let i = 0;
    const series = [];
    while (i < count) {
        series.push({
            x: 'w' + (i + 1).toString(),
            y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
        });
        i++;
    }
    return series;
}


/***/ }),

/***/ 25623:
/*!****************************************************************!*\
  !*** ./src/app/demo/widget/widget-chart/chart/client-map-1.ts ***!
  \****************************************************************/
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

/***/ 64491:
/*!****************************************************************!*\
  !*** ./src/app/demo/widget/widget-chart/chart/client-map-2.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientMap2": () => (/* binding */ ClientMap2)
/* harmony export */ });
class ClientMap2 {
}
ClientMap2.crmChartData = {
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
    colors: ['#ff5252'],
    fill: {
        type: 'solid',
        opacity: 0.3
    },
    markers: {
        size: 3,
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
        width: 2
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
                formatter: (seriesName) => 'Activity :'
            }
        },
        marker: {
            show: false
        }
    }
};


/***/ }),

/***/ 67762:
/*!****************************************************************!*\
  !*** ./src/app/demo/widget/widget-chart/chart/client-map-3.ts ***!
  \****************************************************************/
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
        height: 70,
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

/***/ 13382:
/*!*******************************************************************!*\
  !*** ./src/app/demo/widget/widget-chart/chart/income-analysis.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncomeAnalysis": () => (/* binding */ IncomeAnalysis)
/* harmony export */ });
class IncomeAnalysis {
}
IncomeAnalysis.widgetChartData = {
    chart: {
        type: 'area',
        height: 100,
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
        size: 0,
        opacity: 0.9,
        colors: '#fff',
        strokeColor: '#ff5252',
        strokeWidth: 2,
        hover: {
            size: 7
        }
    },
    stroke: {
        width: 3
    },
    series: [
        {
            name: 'series1',
            data: [25, 66, 41, 89, 25, 44, 12, 36, 9, 54, 25, 66, 41, 66, 41, 89]
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
                formatter: (seriesName) => 'Income Analysis :'
            }
        },
        marker: {
            show: false
        }
    }
};


/***/ }),

/***/ 36168:
/*!********************************************************************!*\
  !*** ./src/app/demo/widget/widget-chart/chart/monthly-profit-1.ts ***!
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

/***/ 24930:
/*!********************************************************************!*\
  !*** ./src/app/demo/widget/widget-chart/chart/monthly-profit-2.ts ***!
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

/***/ 83942:
/*!********************************************************************!*\
  !*** ./src/app/demo/widget/widget-chart/chart/monthly-profit-3.ts ***!
  \********************************************************************/
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
        height: 70,
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

/***/ 51344:
/*!**********************************************************************!*\
  !*** ./src/app/demo/widget/widget-chart/chart/power-card-chart-1.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PowerCardChart1": () => (/* binding */ PowerCardChart1)
/* harmony export */ });
class PowerCardChart1 {
}
PowerCardChart1.powerCardChartData = {
    chart: {
        type: 'line',
        height: 75,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#ff5252'],
    stroke: {
        curve: 'smooth',
        width: 3
    },
    series: [
        {
            name: 'series1',
            data: [55, 35, 75, 50, 90, 50]
        }
    ],
    yaxis: {
        min: 10,
        max: 100
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
                formatter: (seriesName) => 'Power'
            }
        },
        marker: {
            show: false
        }
    }
};


/***/ }),

/***/ 68480:
/*!**********************************************************************!*\
  !*** ./src/app/demo/widget/widget-chart/chart/power-card-chart-2.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PowerCardChart2": () => (/* binding */ PowerCardChart2)
/* harmony export */ });
class PowerCardChart2 {
}
PowerCardChart2.powerCardChartData = {
    chart: {
        type: 'line',
        height: 75,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#ffba57'],
    stroke: {
        curve: 'smooth',
        width: 3
    },
    series: [
        {
            name: 'series1',
            data: [55, 35, 75, 50, 90, 50]
        }
    ],
    yaxis: {
        min: 10,
        max: 100
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
                formatter: (seriesName) => 'Power'
            }
        },
        marker: {
            show: false
        }
    }
};


/***/ }),

/***/ 85364:
/*!********************************************************************!*\
  !*** ./src/app/demo/widget/widget-chart/chart/profit-processed.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfitProcessed": () => (/* binding */ ProfitProcessed)
/* harmony export */ });
class ProfitProcessed {
}
ProfitProcessed.analyticsChartData = {
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
        opacity: 0.3
    },
    markers: {
        size: 3,
        opacity: 0.9,
        colors: '#fff',
        strokeColor: '#ffba57',
        strokeWidth: 2,
        hover: {
            size: 7
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
                formatter: (seriesName) => 'Profit Processed :'
            }
        },
        marker: {
            show: false
        }
    }
};


/***/ }),

/***/ 8848:
/*!*******************************************************************!*\
  !*** ./src/app/demo/widget/widget-chart/chart/project-earning.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectEarning": () => (/* binding */ ProjectEarning)
/* harmony export */ });
class ProjectEarning {
}
ProjectEarning.widgetChartData = {
    chart: {
        type: 'bar',
        height: 200,
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#fff'],
    plotOptions: {
        bar: {
            color: '#fff',
            columnWidth: '60%'
        }
    },
    fill: {
        type: 'solid',
        opacity: 1
    },
    series: [
        {
            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36]
        }
    ],
    xaxis: {
        crosshairs: {
            width: 1
        },
        labels: {
            show: false
        }
    },
    yaxis: {
        labels: {
            style: {
                color: '#fff'
            }
        }
    },
    grid: {
        borderColor: '#ffffff85',
        padding: {
            bottom: 0,
            left: 10
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
                formatter: (seriesName) => 'Total Earnings'
            }
        },
        marker: {
            show: false
        }
    }
};


/***/ }),

/***/ 86639:
/*!***************************************************************!*\
  !*** ./src/app/demo/widget/widget-chart/chart/rent-income.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RentIncome": () => (/* binding */ RentIncome)
/* harmony export */ });
class RentIncome {
}
RentIncome.widgetChartData = {
    chart: {
        type: 'area',
        height: 100,
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
        size: 0,
        opacity: 0.9,
        colors: '#fff',
        strokeColor: '#9ccc65',
        strokeWidth: 2,
        hover: {
            size: 7
        }
    },
    stroke: {
        width: 3
    },
    series: [
        {
            name: 'series1',
            data: [9, 54, 25, 66, 41, 66, 41, 89, 25, 66, 41, 89, 25, 44, 12, 36]
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
                formatter: (seriesName) => 'Rent Income :'
            }
        },
        marker: {
            show: false
        }
    }
};


/***/ }),

/***/ 38747:
/*!*********************************************************************!*\
  !*** ./src/app/demo/widget/widget-chart/chart/revenue-map-chart.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RevenueMapChart": () => (/* binding */ RevenueMapChart)
/* harmony export */ });
class RevenueMapChart {
}
RevenueMapChart.widgetChartData = {
    chart: {
        height: 220,
        type: 'line',
        toolbar: {
            show: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 2,
        curve: 'smooth'
    },
    series: [
        {
            name: 'Market Days',
            data: [20, 50, 30, 60, 30, 50, 40]
        },
        {
            name: 'Market Days ALL',
            data: [40, 20, 50, 15, 40, 65, 20]
        }
    ],
    xaxis: {
        type: 'datetime',
        categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000']
    },
    colors: ['#448aff', '#9ccc65'],
    fill: {
        type: 'solid'
    },
    markers: {
        size: 5,
        colors: ['#448aff', '#9ccc65'],
        opacity: 0.9,
        strokeWidth: 2,
        hover: {
            size: 7
        }
    },
    grid: {
        borderColor: '#e2e5e885'
    },
    yaxis: {
        title: {
            text: 'Revenue Market'
        },
        min: 10,
        max: 70
    }
};


/***/ }),

/***/ 53030:
/*!****************************************************************!*\
  !*** ./src/app/demo/widget/widget-chart/chart/sale-chart-1.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaleChart1": () => (/* binding */ SaleChart1)
/* harmony export */ });
class SaleChart1 {
}
SaleChart1.widgetChartData = {
    chart: {
        type: 'line',
        height: 117,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#fff'],
    stroke: {
        curve: 'smooth',
        width: 3
    },
    series: [
        {
            name: 'series1',
            data: [55, 35, 75, 25, 90, 50]
        }
    ],
    yaxis: {
        min: 20,
        max: 100
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
                formatter: (seriesName) => 'Sales/Order Per Day'
            }
        },
        marker: {
            show: false
        }
    }
};


/***/ }),

/***/ 82396:
/*!***************************************************************!*\
  !*** ./src/app/demo/widget/widget-chart/chart/sale-income.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaleIncome": () => (/* binding */ SaleIncome)
/* harmony export */ });
class SaleIncome {
}
SaleIncome.widgetChartData = {
    chart: {
        type: 'area',
        height: 100,
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
        size: 0,
        opacity: 0.9,
        colors: '#fff',
        strokeColor: '#4680ff',
        strokeWidth: 2,
        hover: {
            size: 7
        }
    },
    stroke: {
        width: 3
    },
    series: [
        {
            name: 'series1',
            data: [25, 66, 41, 89, 25, 44, 12, 36, 9, 54, 25, 66, 41, 66, 41, 89]
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
                formatter: (seriesName) => 'Sale Income :'
            }
        },
        marker: {
            show: false
        }
    }
};


/***/ }),

/***/ 2228:
/*!*****************************************************************!*\
  !*** ./src/app/demo/widget/widget-chart/chart/sale-report-1.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaleReport1": () => (/* binding */ SaleReport1)
/* harmony export */ });
class SaleReport1 {
}
SaleReport1.widgetChartData = {
    chart: {
        type: 'bar',
        height: 150,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#4680ff'],
    plotOptions: {
        bar: {
            columnWidth: '60%'
        }
    },
    series: [
        {
            data: [25, 66, 41, 89, 63, 25, 44, 12, 9, 54, 25, 66, 41, 69, 23]
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
                formatter: (seriesName) => 'Daily Sales :'
            }
        },
        marker: {
            show: false
        }
    }
};


/***/ }),

/***/ 24854:
/*!*****************************************************************!*\
  !*** ./src/app/demo/widget/widget-chart/chart/sale-report-2.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaleReport2": () => (/* binding */ SaleReport2)
/* harmony export */ });
class SaleReport2 {
}
SaleReport2.widgetChartData = {
    chart: {
        type: 'bar',
        height: 150,
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
            data: [25, 66, 41, 89, 63, 25, 44, 12, 9, 54, 25, 66, 41, 69, 23]
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
                formatter: (seriesName) => 'Weekly Sales :'
            }
        },
        marker: {
            show: false
        }
    }
};


/***/ }),

/***/ 22208:
/*!*****************************************************************!*\
  !*** ./src/app/demo/widget/widget-chart/chart/sale-report-3.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaleReport3": () => (/* binding */ SaleReport3)
/* harmony export */ });
class SaleReport3 {
}
SaleReport3.widgetChartData = {
    chart: {
        type: 'bar',
        height: 150,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#ff5252'],
    plotOptions: {
        bar: {
            columnWidth: '60%'
        }
    },
    series: [
        {
            data: [25, 66, 41, 89, 63, 25, 44, 12, 9, 54, 25, 66, 41, 69, 23]
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
                formatter: (seriesName) => 'Monthly Sales :'
            }
        },
        marker: {
            show: false
        }
    }
};


/***/ }),

/***/ 25304:
/*!*****************************************************************!*\
  !*** ./src/app/demo/widget/widget-chart/chart/sale-report-4.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaleReport4": () => (/* binding */ SaleReport4)
/* harmony export */ });
class SaleReport4 {
}
SaleReport4.widgetChartData = {
    chart: {
        type: 'bar',
        height: 150,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#ffba57'],
    plotOptions: {
        bar: {
            columnWidth: '60%'
        }
    },
    series: [
        {
            data: [25, 66, 41, 89, 63, 25, 44, 12, 9, 54, 25, 66, 41, 69, 23]
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
                formatter: (seriesName) => 'Yearly Sales :'
            }
        },
        marker: {
            show: false
        }
    }
};


/***/ }),

/***/ 85689:
/*!*****************************************************************************!*\
  !*** ./src/app/demo/widget/widget-chart/chart/sec-ecommerce-chart-bar-1.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecEcommerceChartBar1": () => (/* binding */ SecEcommerceChartBar1)
/* harmony export */ });
class SecEcommerceChartBar1 {
}
SecEcommerceChartBar1.widgetChartData = {
    chart: {
        type: 'bar',
        height: 170,
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#4680ff'],
    plotOptions: {
        bar: {
            color: '#4680ff',
            columnWidth: '60%'
        }
    },
    fill: {
        type: 'solid'
    },
    series: [
        {
            data: [
                25,
                66,
                41,
                89,
                63,
                25,
                44,
                12,
                36,
                9,
                54,
                25,
                66,
                41,
                89,
                63,
                54,
                25,
                66,
                41,
                89,
                63,
                25,
                44,
                12,
                36,
                9,
                54,
                25,
                66,
                41,
                89,
                63,
                25,
                44,
                12
            ]
        }
    ],
    xaxis: {
        crosshairs: {
            width: 1
        },
        labels: {
            show: false
        }
    },
    grid: {
        padding: {
            bottom: 0,
            left: 10
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
                formatter: (seriesName) => 'Active Users :'
            }
        },
        marker: {
            show: false
        }
    }
};


/***/ }),

/***/ 48538:
/*!***************************************************************************!*\
  !*** ./src/app/demo/widget/widget-chart/chart/sec-ecommerce-chart-bar.ts ***!
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
        height: 80,
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

/***/ 28256:
/*!****************************************************************************!*\
  !*** ./src/app/demo/widget/widget-chart/chart/sec-ecommerce-chart-line.ts ***!
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
        height: 50,
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

/***/ 18569:
/*!************************************************************************!*\
  !*** ./src/app/demo/widget/widget-chart/chart/seo-analytic-chart-1.ts ***!
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

/***/ 50513:
/*!************************************************************************!*\
  !*** ./src/app/demo/widget/widget-chart/chart/seo-analytic-chart-2.ts ***!
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

/***/ 89276:
/*!************************************************************************!*\
  !*** ./src/app/demo/widget/widget-chart/chart/seo-analytic-chart-3.ts ***!
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

/***/ 79258:
/*!************************************************************************!*\
  !*** ./src/app/demo/widget/widget-chart/chart/seo-analytic-chart-4.ts ***!
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

/***/ 13873:
/*!***************************************************************!*\
  !*** ./src/app/demo/widget/widget-chart/chart/seo-chart-1.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeoChart1": () => (/* binding */ SeoChart1)
/* harmony export */ });
class SeoChart1 {
}
SeoChart1.analyticsChartData = {
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
            data: [9, 66, 41, 89, 63, 25, 44, 12, 36, 20, 54, 25, 9]
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
                formatter: (seriesName) => 'Visits :'
            }
        },
        marker: {
            show: false
        }
    }
};


/***/ }),

/***/ 49084:
/*!***************************************************************!*\
  !*** ./src/app/demo/widget/widget-chart/chart/seo-chart-2.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeoChart2": () => (/* binding */ SeoChart2)
/* harmony export */ });
class SeoChart2 {
}
SeoChart2.analyticsChartData = {
    chart: {
        type: 'bar',
        height: 40,
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
                formatter: (seriesName) => 'Bounce Rate :'
            }
        },
        marker: {
            show: false
        }
    }
};


/***/ }),

/***/ 404:
/*!***************************************************************!*\
  !*** ./src/app/demo/widget/widget-chart/chart/seo-chart-3.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeoChart3": () => (/* binding */ SeoChart3)
/* harmony export */ });
class SeoChart3 {
}
SeoChart3.analyticsChartData = {
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
    colors: ['#ff5252'],
    fill: {
        type: 'solid',
        opacity: 0
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
            data: [9, 66, 41, 89, 63, 25, 44, 12, 36, 20, 54, 25, 9]
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
                formatter: (seriesName) => 'Products :'
            }
        },
        marker: {
            show: false
        }
    }
};


/***/ }),

/***/ 48896:
/*!******************************************************************!*\
  !*** ./src/app/demo/widget/widget-chart/chart/this-month-bar.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThisMonthBar": () => (/* binding */ ThisMonthBar)
/* harmony export */ });
class ThisMonthBar {
}
ThisMonthBar.widgetChartData = {
    chart: {
        type: 'bar',
        height: 150,
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
            data: [25, 66, 41, 89, 63, 25, 44, 12, 9, 54, 25, 66, 41, 69, 23]
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
                formatter: (seriesName) => 'Income in $'
            }
        },
        marker: {
            show: false
        }
    }
};


/***/ }),

/***/ 85177:
/*!*********************************************************************!*\
  !*** ./src/app/demo/widget/widget-chart/chart/tot-invoice-chart.ts ***!
  \*********************************************************************/
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

/***/ 27677:
/*!******************************************************************!*\
  !*** ./src/app/demo/widget/widget-chart/chart/tot-lead-chart.ts ***!
  \******************************************************************/
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

/***/ 9129:
/*!********************************************************************!*\
  !*** ./src/app/demo/widget/widget-chart/chart/tot-vendor-chart.ts ***!
  \********************************************************************/
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

/***/ 25364:
/*!***********************************************************************!*\
  !*** ./src/app/demo/widget/widget-chart/chart/total-value-graph-1.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TotalValueGraph1": () => (/* binding */ TotalValueGraph1)
/* harmony export */ });
class TotalValueGraph1 {
}
TotalValueGraph1.widgetChartData = {
    chart: {
        type: 'area',
        height: 100,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#FFF'],
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
                formatter: (seriesName) => 'Total Sales'
            }
        },
        marker: {
            show: false
        }
    }
};


/***/ }),

/***/ 78100:
/*!***********************************************************************!*\
  !*** ./src/app/demo/widget/widget-chart/chart/total-value-graph-2.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TotalValueGraph2": () => (/* binding */ TotalValueGraph2)
/* harmony export */ });
class TotalValueGraph2 {
}
TotalValueGraph2.widgetChartData = {
    chart: {
        type: 'area',
        height: 100,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#FFF'],
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
            data: [20, 10, 25, 18, 18, 10, 12]
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
                formatter: (seriesName) => 'Total Comment'
            }
        },
        marker: {
            show: false
        }
    }
};


/***/ }),

/***/ 42130:
/*!***********************************************************************!*\
  !*** ./src/app/demo/widget/widget-chart/chart/total-value-graph-3.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TotalValueGraph3": () => (/* binding */ TotalValueGraph3)
/* harmony export */ });
class TotalValueGraph3 {
}
TotalValueGraph3.widgetChartData = {
    chart: {
        type: 'area',
        height: 100,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#FFF'],
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
            data: [10, 20, 18, 25, 12, 10, 20]
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
                formatter: (seriesName) => 'Income Status'
            }
        },
        marker: {
            show: false
        }
    }
};


/***/ }),

/***/ 53310:
/*!***********************************************************************!*\
  !*** ./src/app/demo/widget/widget-chart/chart/total-value-graph-4.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TotalValueGraph4": () => (/* binding */ TotalValueGraph4)
/* harmony export */ });
class TotalValueGraph4 {
}
TotalValueGraph4.widgetChartData = {
    chart: {
        type: 'area',
        height: 100,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#FFF'],
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
            data: [18, 10, 20, 10, 12, 25, 20]
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
                formatter: (seriesName) => 'Total Visitors'
            }
        },
        marker: {
            show: false
        }
    }
};


/***/ }),

/***/ 53462:
/*!*************************************************************************!*\
  !*** ./src/app/demo/widget/widget-chart/widget-chart-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WidgetChartRoutingModule": () => (/* binding */ WidgetChartRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _widget_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget-chart.component */ 65786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _widget_chart_component__WEBPACK_IMPORTED_MODULE_0__.WidgetChartComponent
    }
];
class WidgetChartRoutingModule {
}
WidgetChartRoutingModule.ɵfac = function WidgetChartRoutingModule_Factory(t) { return new (t || WidgetChartRoutingModule)(); };
WidgetChartRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: WidgetChartRoutingModule });
WidgetChartRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](WidgetChartRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 65786:
/*!********************************************************************!*\
  !*** ./src/app/demo/widget/widget-chart/widget-chart.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WidgetChartComponent": () => (/* binding */ WidgetChartComponent)
/* harmony export */ });
/* harmony import */ var peity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! peity */ 54742);
/* harmony import */ var peity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(peity__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chart_chart_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart/chart-data */ 73895);
/* harmony import */ var _chart_amount_processed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart/amount-processed */ 99219);
/* harmony import */ var _chart_amount_spent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chart/amount-spent */ 26622);
/* harmony import */ var _chart_profit_processed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chart/profit-processed */ 85364);
/* harmony import */ var _chart_sec_ecommerce_chart_line__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chart/sec-ecommerce-chart-line */ 28256);
/* harmony import */ var _chart_sec_ecommerce_chart_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chart/sec-ecommerce-chart-bar */ 48538);
/* harmony import */ var _chart_sec_ecommerce_chart_bar_1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chart/sec-ecommerce-chart-bar-1 */ 85689);
/* harmony import */ var _chart_sale_income__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chart/sale-income */ 82396);
/* harmony import */ var _chart_rent_income__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chart/rent-income */ 86639);
/* harmony import */ var _chart_income_analysis__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chart/income-analysis */ 13382);
/* harmony import */ var _chart_sale_report_1__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chart/sale-report-1 */ 2228);
/* harmony import */ var _chart_sale_report_2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./chart/sale-report-2 */ 24854);
/* harmony import */ var _chart_sale_report_3__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./chart/sale-report-3 */ 22208);
/* harmony import */ var _chart_sale_report_4__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./chart/sale-report-4 */ 25304);
/* harmony import */ var _chart_sale_chart_1__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./chart/sale-chart-1 */ 53030);
/* harmony import */ var _chart_this_month_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./chart/this-month-bar */ 48896);
/* harmony import */ var _chart_power_card_chart_1__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./chart/power-card-chart-1 */ 51344);
/* harmony import */ var _dashboard_dash_default_chart_power_card_chart_3__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../dashboard/dash-default/chart/power-card-chart-3 */ 15945);
/* harmony import */ var _chart_power_card_chart_2__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./chart/power-card-chart-2 */ 68480);
/* harmony import */ var _chart_revenue_map_chart__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./chart/revenue-map-chart */ 38747);
/* harmony import */ var _chart_project_earning__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./chart/project-earning */ 8848);
/* harmony import */ var _chart_seo_analytic_chart_1__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./chart/seo-analytic-chart-1 */ 18569);
/* harmony import */ var _chart_seo_analytic_chart_2__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./chart/seo-analytic-chart-2 */ 50513);
/* harmony import */ var _chart_seo_analytic_chart_3__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./chart/seo-analytic-chart-3 */ 89276);
/* harmony import */ var _chart_seo_analytic_chart_4__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./chart/seo-analytic-chart-4 */ 79258);
/* harmony import */ var _chart_total_value_graph_1__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./chart/total-value-graph-1 */ 25364);
/* harmony import */ var _chart_total_value_graph_2__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./chart/total-value-graph-2 */ 78100);
/* harmony import */ var _chart_total_value_graph_3__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./chart/total-value-graph-3 */ 42130);
/* harmony import */ var _chart_total_value_graph_4__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./chart/total-value-graph-4 */ 53310);
/* harmony import */ var _chart_monthly_profit_1__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./chart/monthly-profit-1 */ 36168);
/* harmony import */ var _chart_monthly_profit_2__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./chart/monthly-profit-2 */ 24930);
/* harmony import */ var _chart_monthly_profit_3__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./chart/monthly-profit-3 */ 83942);
/* harmony import */ var _chart_seo_chart_1__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./chart/seo-chart-1 */ 13873);
/* harmony import */ var _chart_seo_chart_2__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./chart/seo-chart-2 */ 49084);
/* harmony import */ var _chart_seo_chart_3__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./chart/seo-chart-3 */ 404);
/* harmony import */ var _chart_client_map_1__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./chart/client-map-1 */ 25623);
/* harmony import */ var _chart_client_map_3__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./chart/client-map-3 */ 67762);
/* harmony import */ var _chart_client_map_2__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./chart/client-map-2 */ 64491);
/* harmony import */ var _chart_tot_lead_chart__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./chart/tot-lead-chart */ 27677);
/* harmony import */ var _chart_tot_vendor_chart__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./chart/tot-vendor-chart */ 9129);
/* harmony import */ var _chart_tot_invoice_chart__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./chart/tot-invoice-chart */ 85177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _theme_shared_components_chart_apex_chart_apex_chart_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../../theme/shared/components/chart/apex-chart/apex-chart.service */ 22978);
/* harmony import */ var _theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../../../theme/shared/components/card/card.component */ 84631);
/* harmony import */ var _theme_shared_components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../../../theme/shared/components/chart/apex-chart/apex-chart.component */ 91540);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var ngx_bar_rating__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ngx-bar-rating */ 90);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 59403);

















































class WidgetChartComponent {
    constructor(apexEvent) {
        this.apexEvent = apexEvent;
        this.chartDB = _chart_chart_data__WEBPACK_IMPORTED_MODULE_1__.ChartDB;
        this.taskRate = 10;
        this.amountProcessedChartData = _chart_amount_processed__WEBPACK_IMPORTED_MODULE_2__.AmountProcessed.analyticsChartData;
        this.amountSpentChartData = _chart_amount_spent__WEBPACK_IMPORTED_MODULE_3__.AmountSpent.analyticsChartData;
        this.profitProcessedChartData = _chart_profit_processed__WEBPACK_IMPORTED_MODULE_4__.ProfitProcessed.analyticsChartData;
        this.secEcommerceChartDataLine = _chart_sec_ecommerce_chart_line__WEBPACK_IMPORTED_MODULE_5__.SecEcommerceChartLine.saleChartData;
        this.secEcommerceChartDataBar = _chart_sec_ecommerce_chart_bar__WEBPACK_IMPORTED_MODULE_6__.SecEcommerceChartBar.saleChartData;
        this.secEcommerceChartDataBar1 = _chart_sec_ecommerce_chart_bar_1__WEBPACK_IMPORTED_MODULE_7__.SecEcommerceChartBar1.widgetChartData;
        this.saleIncomeChartData = _chart_sale_income__WEBPACK_IMPORTED_MODULE_8__.SaleIncome.widgetChartData;
        this.rentIncomeChartData = _chart_rent_income__WEBPACK_IMPORTED_MODULE_9__.RentIncome.widgetChartData;
        this.incomeAnalysisChartData = _chart_income_analysis__WEBPACK_IMPORTED_MODULE_10__.IncomeAnalysis.widgetChartData;
        this.saleReportChartData1 = _chart_sale_report_1__WEBPACK_IMPORTED_MODULE_11__.SaleReport1.widgetChartData;
        this.saleReportChartData2 = _chart_sale_report_2__WEBPACK_IMPORTED_MODULE_12__.SaleReport2.widgetChartData;
        this.saleReportChartData3 = _chart_sale_report_3__WEBPACK_IMPORTED_MODULE_13__.SaleReport3.widgetChartData;
        this.saleReportChartData4 = _chart_sale_report_4__WEBPACK_IMPORTED_MODULE_14__.SaleReport4.widgetChartData;
        this.saleChartData1 = _chart_sale_chart_1__WEBPACK_IMPORTED_MODULE_15__.SaleChart1.widgetChartData;
        this.thisMonthBarChartData = _chart_this_month_bar__WEBPACK_IMPORTED_MODULE_16__.ThisMonthBar.widgetChartData;
        this.powerCardChartData1 = _chart_power_card_chart_1__WEBPACK_IMPORTED_MODULE_17__.PowerCardChart1.powerCardChartData;
        this.powerCardChartData2 = _dashboard_dash_default_chart_power_card_chart_3__WEBPACK_IMPORTED_MODULE_18__.PowerCardChart3.powerCardChartData;
        this.powerCardChartData3 = _chart_power_card_chart_2__WEBPACK_IMPORTED_MODULE_19__.PowerCardChart2.powerCardChartData;
        this.revenueMapChartData = _chart_revenue_map_chart__WEBPACK_IMPORTED_MODULE_20__.RevenueMapChart.widgetChartData;
        this.projectEarningChartData = _chart_project_earning__WEBPACK_IMPORTED_MODULE_21__.ProjectEarning.widgetChartData;
        this.lastDate = 0;
        this.data = [];
        this.getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, { min: 10, max: 90 });
        this.siteVisitorCAC = {
            chart: {
                height: 230,
                type: 'area',
                animations: {
                    enabled: true,
                    easing: 'linear',
                    dynamicAnimation: {
                        speed: 2000
                    }
                },
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            series: [
                {
                    name: 'active Users :',
                    data: this.data
                }
            ],
            colors: ['#ff5252'],
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    type: 'horizontal',
                    opacityFrom: 0.8,
                    opacityTo: 0,
                    stops: [0, 100]
                }
            },
            markers: {
                size: 0
            },
            xaxis: {
                type: 'datetime',
                range: 777600000
            },
            yaxis: {
                max: 100
            },
            legend: {
                show: false
            }
        };
        this.seoChartData1 = _chart_seo_analytic_chart_1__WEBPACK_IMPORTED_MODULE_22__.SeoAnalyticChart1.seoChartData;
        this.seoChartData2 = _chart_seo_analytic_chart_2__WEBPACK_IMPORTED_MODULE_23__.SeoAnalyticChart2.seoChartData;
        this.seoChartData3 = _chart_seo_analytic_chart_3__WEBPACK_IMPORTED_MODULE_24__.SeoAnalyticChart3.seoChartData;
        this.seoChartData4 = _chart_seo_analytic_chart_4__WEBPACK_IMPORTED_MODULE_25__.SeoAnalyticChart4.seoChartData;
        this.totalValueGraphChartData1 = _chart_total_value_graph_1__WEBPACK_IMPORTED_MODULE_26__.TotalValueGraph1.widgetChartData;
        this.totalValueGraphChartData2 = _chart_total_value_graph_2__WEBPACK_IMPORTED_MODULE_27__.TotalValueGraph2.widgetChartData;
        this.totalValueGraphChartData3 = _chart_total_value_graph_3__WEBPACK_IMPORTED_MODULE_28__.TotalValueGraph3.widgetChartData;
        this.totalValueGraphChartData4 = _chart_total_value_graph_4__WEBPACK_IMPORTED_MODULE_29__.TotalValueGraph4.widgetChartData;
        this.monthlyProfitChartData1 = _chart_monthly_profit_1__WEBPACK_IMPORTED_MODULE_30__.MonthlyProfit1.saleChartData;
        this.monthlyProfitChartData2 = _chart_monthly_profit_2__WEBPACK_IMPORTED_MODULE_31__.MonthlyProfit2.saleChartData;
        this.monthlyProfitChartData3 = _chart_monthly_profit_3__WEBPACK_IMPORTED_MODULE_32__.MonthlyProfit3.crmChartData;
        this.seoSaleChartData1 = _chart_seo_chart_1__WEBPACK_IMPORTED_MODULE_33__.SeoChart1.analyticsChartData;
        this.seoSaleChartData2 = _chart_seo_chart_2__WEBPACK_IMPORTED_MODULE_34__.SeoChart2.analyticsChartData;
        this.seoSaleChartData3 = _chart_seo_chart_3__WEBPACK_IMPORTED_MODULE_35__.SeoChart3.analyticsChartData;
        this.clientMapChartData1 = _chart_client_map_1__WEBPACK_IMPORTED_MODULE_36__.ClientMap1.crmChartData;
        this.clientMapChartData2 = _chart_client_map_2__WEBPACK_IMPORTED_MODULE_38__.ClientMap2.crmChartData;
        this.clientMapChartData3 = _chart_client_map_3__WEBPACK_IMPORTED_MODULE_37__.ClientMap3.crmChartData;
        this.totLeadChartData = _chart_tot_lead_chart__WEBPACK_IMPORTED_MODULE_39__.TotLeadChart.crmChartData;
        this.totVendorChartData = _chart_tot_vendor_chart__WEBPACK_IMPORTED_MODULE_40__.TotVendorChart.crmChartData;
        this.totInvoiceChartData = _chart_tot_invoice_chart__WEBPACK_IMPORTED_MODULE_41__.TotInvoiceChart.crmChartData;
    }
    ngOnInit() {
        setTimeout(() => {
            $('.data-attributes').peity('donut');
            $('span.pie_1').peity('pie', {
                fill: ['#4680ff', '#eff3f6']
            });
            $('span.pie_2').peity('pie', {
                fill: ['#eff3f6', '#4680ff']
            });
            $('span.pie_3').peity('pie', {
                fill: ['#eff3f6', '#4680ff']
            });
        });
        this.intervalSub = setInterval(() => {
            this.getNewSeries(this.lastDate, { min: 10, max: 90 });
            this.apexEvent.eventChangeSeriesData();
        }, 2000);
        this.intervalMain = setInterval(() => {
            this.resetData();
            this.apexEvent.eventChangeSeriesData();
        }, 60000);
    }
    ngOnDestroy() {
        if (this.intervalSub) {
            clearInterval(this.intervalSub);
        }
        if (this.intervalMain) {
            clearInterval(this.intervalMain);
        }
    }
    getDayWiseTimeSeries(baseval, count, yrange) {
        let i = 0;
        while (i < count) {
            const x = baseval;
            const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
            this.data.push({ x, y });
            this.lastDate = baseval;
            baseval += 86400000;
            i++;
        }
    }
    resetData() {
        this.data = this.data.slice(this.data.length - 10, this.data.length);
    }
    getNewSeries(baseval, yrange) {
        const newDate = baseval + 86400000;
        this.lastDate = newDate;
        this.data.push({
            x: newDate,
            y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
        });
    }
}
WidgetChartComponent.ɵfac = function WidgetChartComponent_Factory(t) { return new (t || WidgetChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵdirectiveInject"](_theme_shared_components_chart_apex_chart_apex_chart_service__WEBPACK_IMPORTED_MODULE_42__.ApexChartService)); };
WidgetChartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵdefineComponent"]({ type: WidgetChartComponent, selectors: [["app-widget-chart"]], decls: 1411, vars: 203, consts: [[1, "row"], [1, "col-md-6", "col-xl-4"], ["cardClass", "amount-card overflow-hidden", "blockClass", "p-0", 3, "hidHeader"], [1, "p-20", "p-b-0"], [1, "f-w-400"], [1, "text-muted", "f-w-600", "f-16"], [1, "text-c-blue"], ["chartID", "amount-processed", 3, "chartConfig"], [1, "text-c-green"], ["chartID", "amount-spent", 3, "chartConfig"], [1, "col-md-12", "col-xl-4"], [1, "text-c-yellow"], ["chartID", "profit-processed", 3, "chartConfig"], [1, "col-xl-6", "col-md-12"], ["cardClass", "overflow-hidden", "blockClass", "bg-c-green pb-0", 3, "hidHeader", "isCardFooter"], [1, "row", "text-white"], [1, "col-auto"], [1, "m-b-5", "text-white"], [1, "text-white"], [1, "col", "text-right"], ["chartID", "sec-ecommerce-chart-line", 3, "chartConfig"], [1, "row", "justify-content-center"], [1, "col-8"], ["chartID", "sec-ecommerce-chart-bar", 3, "chartConfig"], [1, "app-card-footer"], [1, "text-muted"], [1, "col"], [1, "text-muted", "m-b-5"], [3, "hidHeader"], [1, "row", "justify-content-center", "text-center"], [1, "col-5"], ["chartID", "sec-ecommerce-chart-bar-1", 3, "chartConfig"], [1, "row", "justify-content-center", "text-center", "b-t-default", "m-t-15"], [1, "col-3", "b-r-default"], [1, "text-muted", "m-b-0"], [1, "col-3"], [1, "col-xl-4", "col-md-6"], ["cardClass", "overflow-hidden", "blockClass", "p-0", 3, "hidHeader"], [1, "mb-3"], [1, "col-4"], ["chartID", "sale-income-chart", 3, "chartConfig"], ["chartID", "rent-income-chart", 3, "chartConfig"], ["chartID", "income-analysis-chart", 3, "chartConfig"], [1, "col-md-12"], ["blockClass", "text-center", 3, "hidHeader"], [1, "col-xl-3", "col-md-6", "m-t-10", "m-b-10"], ["chartID", "sale-report-chart-1", 3, "chartConfig"], [1, "m-t-10", "m-b-0"], [1, "fa", "fa-caret-up", "text-c-green", "m-r-10"], ["chartID", "sale-report-chart-2", 3, "chartConfig"], [1, "fa", "fa-caret-down", "text-c-red", "m-r-10"], ["chartID", "sale-report-chart-3", 3, "chartConfig"], ["chartID", "sale-report-chart-4", 3, "chartConfig"], ["cardClass", "overflow-hidden", "blockClass", "bg-c-red text-white", "footerClass", "text-center", 3, "hidHeader", "isCardFooter"], [1, "float-right"], [1, "feather", "icon-trending-down", "m-r-15"], ["chartID", "sale-chart-1", 3, "chartConfig"], [1, "col-6", "b-r-default"], [1, "col-6"], [1, "badge", "badge-light-success"], ["chartID", "this-month-bar-chart", 3, "chartConfig"], [1, "col-xl-4", "col-md-12"], ["cardClass", "overflow-hidden", "blockClass", "bg-c-blue text-white", "footerClass", "text-center", 3, "hidHeader", "isCardFooter"], [1, "feather", "icon-trending-up", "m-r-15"], ["chartID", "sale-chart-1-copy", 3, "chartConfig"], [1, "text-muted", "m-l-5", "f-14"], ["chartID", "power-card-chart-1", 3, "chartConfig"], [1, "col", "col-auto"], [1, "map-area"], [1, "m-0"], [1, "text-muted", "m-0"], [1, "text-muted", "m-l-10", "f-14"], ["chartID", "power-card-chart-2", 3, "chartConfig"], ["chartID", "power-card-chart-3", 3, "chartConfig"], ["cardTitle", "Revenue", 3, "options"], ["chartID", "revenue-map-chart", 3, "chartConfig"], ["cardClass", "overflow-hidden", "blockClass", "bg-c-blue", 3, "hidHeader", "isCardFooter"], ["chartID", "project-earning--chart", 3, "chartConfig"], [1, "text-muted", "m-b-30", "m-t-15"], [1, "row", "text-center"], [1, "col-6", "border-right"], [1, "text-muted", "m-b-10"], [1, "m-b-0"], [1, "col-xl-8", "col-md-12"], ["cardTitle", "Real-time Data of Visits", 3, "options"], [1, "row", "my-2"], [1, "feather", "icon-arrow-up", "text-c-green"], [1, "feather", "icon-arrow-down", "text-c-red"], ["chartID", "chart-apex-site-visitor", 3, "chartConfig", "newData"], [1, "col-xl-3", "col-md-6"], ["chartID", "seo-chart-1", 3, "chartConfig"], ["chartID", "seo-chart-2", 3, "chartConfig"], ["chartID", "seo-chart-3", 3, "chartConfig"], ["chartID", "seo-chart-4", 3, "chartConfig"], [1, "col-lg-3", "col-md-6"], ["cardClass", "bg-c-blue total-card", "blockClass", "p-0", 3, "hidHeader"], [1, "badge", "badge-light", "float-right"], [1, "text-left"], ["chartID", "total-value-graph-1", 3, "chartConfig"], ["cardClass", "bg-c-red total-card", "blockClass", "p-0", 3, "hidHeader"], ["chartID", "total-value-graph-2", 3, "chartConfig"], ["cardClass", "bg-c-green total-card", "blockClass", "p-0", 3, "hidHeader"], ["chartID", "total-value-graph-3", 3, "chartConfig"], ["cardClass", "bg-c-yellow total-card", "blockClass", "p-0", 3, "hidHeader"], ["chartID", "total-value-graph-4", 3, "chartConfig"], [1, "text-center", "f-w-400"], [1, "text-center", "text-muted"], ["chartID", "monthly-profit-1", 3, "chartConfig"], [1, "m-t-20"], [1, "col-6", "text-center"], [1, "f-20", "f-w-400"], [1, "text-muted", "f-14", "m-b-0"], ["chartID", "monthly-profit-2", 3, "chartConfig"], ["chartID", "monthly-profit-3", 3, "chartConfig"], [1, "row", "align-items-center"], [1, "fa", "fa-caret-down", "text-c-red", "m-l-10"], ["chartID", "seo-sale-chart-1", 3, "chartConfig"], [1, "fa", "fa-caret-up", "text-c-green", "m-l-10"], ["chartID", "seo-sale-chart-2", 3, "chartConfig"], ["chartID", "seo-sale-chart-3", 3, "chartConfig"], ["cardClass", "client-map", 3, "hidHeader"], [1, "client-detail"], [1, "client-profile"], ["src", "assets/images/user/avatar-2.jpg", "alt", ""], [1, "client-contain"], ["href", "javascript:", 1, "text-muted"], [1, "text-muted", "m-0", "p-t-10"], [1, ""], [1, "client-card-box"], [1, "col-6", "text-center", "client-border", "p-10"], [1, "text-c-blue", "f-20", "f-w-600"], [1, "col-6", "text-center", "p-10"], [1, "col-sm-12", "client-border-card", "p-t-10"], ["chartID", "client-map-chart-1", 3, "chartConfig"], ["src", "assets/images/user/avatar-4.jpg", "alt", ""], [1, "text-c-red", "f-20", "f-w-600"], ["chartID", "client-map-chart-2", 3, "chartConfig"], ["src", "assets/images/user/avatar-3.jpg", "alt", ""], [1, "text-c-green", "f-20", "f-w-600"], ["chartID", "client-map-chart-3", 3, "chartConfig"], ["blockClass", "p-0", 3, "hidHeader"], [1, "text-c-green", "f-w-500"], [1, "fa", "fa-caret-up", "m-r-15"], [1, "col-4", "b-r-default"], ["chartID", "tot-lead-chart", 3, "chartConfig"], [1, "text-c-red", "f-w-500"], [1, "fa", "fa-caret-down", "m-r-15"], ["chartID", "tot-vendor-chart", 3, "chartConfig"], ["chartID", "tot-invoice-chart", 3, "chartConfig"], ["ngbDropdown", "", 1, "dropdown", "float-right"], ["ngbDropdownToggle", "", "href", "javascript:", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "dropdown-toggle", "text-c-blue"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-right"], ["href", "javascript:", 1, "dropdown-item"], [1, "mt-2", "mb-0"], [1, "mb-0", "mt-3"], [1, "text-success"], [1, "text-danger"], ["id", "hd-complited-ticket"], ["chartID", "chart-apex-completed-ticket", 3, "chartConfig"], [1, "row", "mt-2"], [1, "d-block", "text-uppercase"], [1, "mt-1"], [1, "mt-3"], ["chartID", "chart-apex-transactions1", 3, "chartConfig"], ["chartID", "chart-apex-transactions2", 3, "chartConfig"], [1, "col-6", "pr-0"], [1, "my-3"], [1, "feather", "icon-monitor", "f-20", "mr-2", "text-primary"], [1, "text-c-green", "ml-2", "f-14"], [1, "feather", "icon-arrow-up"], [1, "feather", "icon-tablet", "f-20", "mr-2", "text-success"], [1, "text-c-red", "ml-2", "f-14"], [1, "feather", "icon-arrow-down"], [1, "feather", "icon-smartphone", "f-20", "mr-2", "text-danger"], [1, "chart-percent", "text-center"], ["chartID", "chart-apex-percentage", 3, "chartConfig"], [1, "col-sm-12"], [1, "row", "no-gutters"], [1, "col-md-4", "col-xl-2", "col-sm-6"], ["chartID", "analytics-apex-user-chart", 3, "chartConfig"], ["chartID", "analytics-apex-session-chart", 3, "chartConfig"], ["chartID", "analytics-apex-page-view-chart", 3, "chartConfig"], ["chartID", "analytics-apex-page-session-chart", 3, "chartConfig"], ["chartID", "analytics-apex-avg-session-chart", 3, "chartConfig"], ["chartID", "analytics-apex-bounce-rate-chart", 3, "chartConfig"], [1, "col-xl-4", "col-md-5"], ["cardClass", "rating-bar", 3, "hidHeader"], [1, "row", "mb-3"], [1, "text-right"], [3, "rate", "max", "theme", "rateChange"], ["cardTitle", "Session by time of day"], ["chartID", "chart-apex-time-user", 3, "chartConfig"], [1, "col-xl-8", "col-md-7"], ["cardTitle", "Product manufacturing completion by Region"], ["chartID", "chart-apex-horizontal-bar", 3, "chartConfig"], [1, "marge-card"], ["cardClass", "mb-0", "blockClass", "pb-0", 3, "hidHeader"], [1, "text-c-blue", "ml-2"], ["blockClass", "p-0 m-t-15", 3, "hidHeader"], ["chartID", "chart-apex-conversions", 3, "chartConfig"], [1, "row", "d-flex", "align-items-center"], [1, "d-block"], ["chartID", "chart-apex-site", 3, "chartConfig"], [1, "col-lg-6"], [1, "text-c-blue", "d-block"], [1, "row", "d-flex", "justify-content-center", "align-items-center"], ["chartID", "chart-apex-satisfaction", 3, "chartConfig"], ["cardTitle", "Marketing campaign", 3, "options"], ["chartID", "chart-apex-traffic", 3, "chartConfig"], [1, "col-md-4"], ["cardTitle", "Sales Report", 3, "options"], ["chartID", "chart-apex-sale", 3, "chartConfig"], [1, "row", "mt-3", "d-flex", "align-items-center", "text-center"], ["cardTitle", "Time on Site", 3, "options"], ["chartID", "chart-apex-time", 3, "chartConfig"], [1, "fas", "fa-circle", "text-c-green", "f-10", "m-r-10"], [1, "col-6", "text-right"], ["cardTitle", "Browser States", "cardClass", "table-card", "headerClass", "borderless", "blockClass", "px-0 py-0", 3, "options"], [1, "table-responsive"], [1, "table", "table-hover", "mb-0"], [1, "text-right", "d-block", "m-0"], [1, "m-r-15"], ["data-peity", "{ \"fill\": [\"#4680ff\", \"#eeeeee\"],\"innerRadius\": 8, \"radius\": 13 }", 1, "data-attributes"], ["data-peity", "{ \"fill\": [\"#ff5252\", \"#eeeeee\"],\"innerRadius\": 8, \"radius\": 13 }", 1, "data-attributes"], ["data-peity", "{ \"fill\": [\"#11c15b\", \"#eeeeee\"],\"innerRadius\": 8, \"radius\": 13 }", 1, "data-attributes"], ["data-peity", "{ \"fill\": [\"#7759de\", \"#eeeeee\"],\"innerRadius\": 8, \"radius\": 13 }", 1, "data-attributes"], ["data-peity", "{ \"fill\": [\"#FF9800\", \"#eeeeee\"],\"innerRadius\": 8, \"radius\": 13 }", 1, "data-attributes"], ["cardTitle", "Total Revenue", "cardClass", "mb-0", "blockClass", "", 3, "options"], ["chartID", "chart-apex-revenue", 3, "chartConfig"], [1, "text-center", "text-muted", "d-block"], ["blockClass", "p-10", 3, "hidHeader"], [1, "row", "d-flex", "align-items-center", "text-center"], ["cardTitle", "Market Sales", 3, "options"], [1, "feather", "icon-trending-down", "text-c-red", "mr-3"], [1, "row", "d-flex", "align-items-center", "text-center", "mt-4"], [1, "text-c-red"], [1, "text-c-purple"], ["chartID", "chart-apex-market", 3, "chartConfig"], ["cardTitle", "Sale report of year", 3, "options"], ["chartID", "chart-apex-type", 3, "chartConfig"], [1, "d-block", "mb-2"], [1, "fas", "fa-circle", "f-10", "m-r-15", "text-danger"], [1, "float-right", "f-w-400"], [1, "fas", "fa-circle", "f-10", "m-r-15", "text-warning"], [1, "fas", "fa-circle", "f-10", "m-r-15", "text-info"], [1, "col-xl-12"], ["cardTitle", "Advertising campaign monitor", "cardClass", "table-card", "blockClass", "px-0 py-0", 3, "options"], ["chartID", "chart-apex-traffic-monitor", 3, "chartConfig"], [1, "table", "table-hover", "m-b-0"], [1, "help"], [1, "feather", "icon-help-circle", "f-16"], ["type", "danger", "height", "4px", 3, "value"], ["type", "primary", "height", "4px", 3, "value"], ["type", "warning", "height", "4px", 3, "value"], ["type", "success", "height", "4px", 3, "value"], ["type", "info", "height", "4px", 3, "value"], [1, "marge-card", "support-bar"], [1, "mb-3", "mt-3"], ["cardClass", "mb-0", "blockClass", "p-0", 3, "hidHeader"], ["chartID", "chart-apex-support", 3, "chartConfig"], ["cardClass", "bg-primary text-white", "blockClass", "p-10", 3, "hidHeader"], [1, "m-0", "text-white"], [1, "col-sm-6"], [1, "card", "mrr-card"], [1, "card-body", "mb-3"], [1, "d-flex", "align-items-center"], [1, "fab", "fa-bitcoin", "text-c-blue", "f-22", "m-r-5"], [1, "position-absolute", "bottom-chart", "w-100"], ["chartID", "chart-apex-average1", 3, "chartConfig"], [1, "card-body"], [1, "fab", "fa-ethereum", "text-c-green", "f-22", "m-r-5"], ["chartID", "chart-apex-average2", 3, "chartConfig"], [1, "card", "bg-danger", "text-white", "mrr-card"], [1, "position-absolute", "bottom-chart"], ["chartID", "chart-apex-average3", 3, "chartConfig"], [1, "card", "bg-warning", "text-white", "mrr-card"], ["chartID", "chart-apex-average4", 3, "chartConfig"]], template: function WidgetChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](2, "app-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](5, "$23,567");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](8, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](9, " Processed");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](10, "app-apex-chart", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](12, "app-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](14, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](15, "$14,552");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](16, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](17, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](18, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](19, " Spent");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](20, "app-apex-chart", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](22, "app-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](24, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](25, "$31,156");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](26, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](27, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](28, "Profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](29, " Processed");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](30, "app-apex-chart", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](32, "app-card", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](35, "h4", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](36, "$654");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](37, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](38, "+1.65(2.56%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](40, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](41, "Friday");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](42, "app-apex-chart", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](43, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](44, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](45, "app-apex-chart", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](46, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](47, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](48, "$2654.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](49, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](50, "Sales in Nov.");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](51, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](52, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](53, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](54, "From Market");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](55, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](56, "$1860.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](57, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](58, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](59, "Referral");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](60, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](61, "$500.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](62, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](63, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](64, "Affiliate");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](65, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](66, "$294.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](67, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](68, "app-card", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](69, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](70, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](71, "h6", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](72, "Real-Time Visits");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](73, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](74, "53k");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](75, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](76, "h6", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](77, "Returning Visitors");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](78, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](79, "10k");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](80, "app-apex-chart", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](81, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](82, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](83, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](84, "85%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](85, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](86, "Satisfied");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](87, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](88, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](89, "6%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](90, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](91, "Unsatisfied");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](92, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](93, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](94, "9%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](95, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](96, "NA");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](97, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](98, "app-card", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](99, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](100, "h5", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](101, "Sale Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](102, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](103, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](104, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](105, "Overall");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](106, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](107, "68.52%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](108, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](109, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](110, "Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](111, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](112, "28.90%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](113, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](114, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](115, "Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](116, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](117, "13.50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](118, "app-apex-chart", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](119, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](120, "app-card", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](121, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](122, "h5", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](123, "Rent Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](124, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](125, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](126, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](127, "Overall");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](128, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](129, "68.52%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](130, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](131, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](132, "Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](133, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](134, "28.90%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](135, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](136, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](137, "Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](138, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](139, "13.50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](140, "app-apex-chart", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](141, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](142, "app-card", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](143, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](144, "h5", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](145, "Income Analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](146, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](147, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](148, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](149, "Overall");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](150, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](151, "68.52%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](152, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](153, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](154, "Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](155, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](156, "28.90%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](157, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](158, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](159, "Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](160, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](161, "13.50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](162, "app-apex-chart", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](163, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](164, "app-card", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](165, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](166, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](167, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](168, "Daily Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](169, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](170, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](171, "app-apex-chart", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](172, "h5", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](173, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](174, "$16524");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](175, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](176, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](177, "Weekly Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](178, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](179, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](180, "app-apex-chart", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](181, "h5", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](182, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](183, "$6423");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](184, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](185, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](186, "Monthly Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](187, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](188, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](189, "app-apex-chart", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](190, "h5", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](191, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](192, "$14524");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](193, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](194, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](195, "Yearly Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](196, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](197, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](198, "app-apex-chart", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](199, "h5", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](200, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](201, "$8652");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](202, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](203, "app-card", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](204, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](205, " Sales Per Day ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](206, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](207, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](208, "3%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](209, "app-apex-chart", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](210, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](211, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](212, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](213, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](214, "$4230");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](215, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](216, "Total Revenue");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](217, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](218, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](219, "321");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](220, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](221, "Today Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](222, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](223, "app-card", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](224, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](225, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](226, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](227, "$256.23");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](228, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](229, "This Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](230, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](231, "label", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](232, "+20%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](233, "app-apex-chart", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](234, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](235, "app-card", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](236, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](237, " Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](238, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](239, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](240, "12%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](241, "app-apex-chart", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](242, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](243, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](244, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](245, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](246, "1695");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](247, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](248, "Monthly Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](249, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](250, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](251, "52");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](252, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](253, "Today Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](254, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](255, "app-card", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](256, "h5", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](257, "Power");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](258, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](259, "2789");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](260, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](261, "kw");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](262, "app-apex-chart", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](263, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](264, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](265, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](266, "h6", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](267, "2876 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](268, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](269, " kw");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](270, "p", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](271, "month");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](272, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](273, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](274, "h6", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](275, "234 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](276, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](277, " kw");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](278, "p", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](279, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](280, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](281, "app-card", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](282, "h5", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](283, "Water");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](284, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](285, "7.3");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](286, "span", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](287, "m3");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](288, "app-apex-chart", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](289, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](290, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](291, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](292, "h6", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](293, "4.5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](294, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](295, " m3");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](296, "p", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](297, "month");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](298, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](299, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](300, "h6", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](301, "0.5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](302, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](303, " m3");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](304, "p", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](305, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](306, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](307, "app-card", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](308, "h5", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](309, "Temperature");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](310, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](311, "7.3");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](312, "span", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](313, "deg");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](314, "app-apex-chart", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](315, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](316, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](317, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](318, "h6", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](319, "4.5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](320, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](321, " deg");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](322, "p", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](323, "month");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](324, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](325, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](326, "h6", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](327, "0.5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](328, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](329, " deg");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](330, "p", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](331, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](332, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](333, "app-card", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](334, "app-apex-chart", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](335, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](336, "app-card", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](337, "app-apex-chart", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](338, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](339, "h6", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](340, "Total completed project and earning");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](341, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](342, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](343, "h6", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](344, "Completed Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](345, "h3", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](346, "175");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](347, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](348, "h6", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](349, "Total Earnings");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](350, "h3", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](351, "76.6M");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](352, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](353, "app-card", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](354, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](355, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](356, "h4", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](357, "563,756");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](358, "i", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](359, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](360, "Visits per Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](361, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](362, "h4", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](363, "78,569");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](364, "i", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](365, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](366, "Total Visitors");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](367, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](368, "h4", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](369, "40.05%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](370, "i", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](371, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](372, "Bounce Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](373, "app-apex-chart", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](374, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](375, "app-card", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](376, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](377, "20500");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](378, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](379, "Site Analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](380, "app-apex-chart", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](381, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](382, "app-card", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](383, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](384, "20500");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](385, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](386, "Total Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](387, "app-apex-chart", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](388, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](389, "app-card", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](390, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](391, "28000");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](392, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](393, "Total Visits");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](394, "app-apex-chart", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](395, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](396, "app-card", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](397, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](398, "59600");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](399, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](400, "Total Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](401, "app-apex-chart", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](402, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](403, "app-card", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](404, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](405, "span", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](406, "12%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](407, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](408, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](409, "4000");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](410, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](411, "Total Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](412, "app-apex-chart", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](413, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](414, "app-card", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](415, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](416, "span", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](417, "15%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](418, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](419, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](420, "489");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](421, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](422, "Total Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](423, "app-apex-chart", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](424, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](425, "app-card", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](426, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](427, "span", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](428, "20%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](429, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](430, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](431, "$5782");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](432, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](433, "Income Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](434, "app-apex-chart", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](435, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](436, "app-card", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](437, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](438, "span", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](439, "23%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](440, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](441, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](442, "378");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](443, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](444, "Total Visitors");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](445, "app-apex-chart", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](446, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](447, "app-card", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](448, "h2", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](449, "$45,567");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](450, "p", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](451, "Monthly Profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](452, "app-apex-chart", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](453, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](454, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](455, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](456, "h6", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](457, "$6,234");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](458, "p", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](459, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](460, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](461, "h6", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](462, "$4,387");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](463, "p", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](464, "Yesterday");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](465, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](466, "app-card", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](467, "h2", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](468, "2,413");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](469, "p", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](470, "Total Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](471, "app-apex-chart", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](472, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](473, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](474, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](475, "h6", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](476, "1578");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](477, "p", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](478, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](479, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](480, "h6", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](481, "1028");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](482, "p", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](483, "Yesterday");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](484, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](485, "app-card", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](486, "h2", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](487, "8,421");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](488, "p", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](489, "Unique Visitors");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](490, "app-apex-chart", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](491, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](492, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](493, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](494, "h6", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](495, "2,849");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](496, "p", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](497, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](498, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](499, "h6", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](500, "3,587");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](501, "p", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](502, "Yesterday");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](503, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](504, "app-card", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](505, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](506, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](507, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](508, "$16,756");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](509, "h6", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](510, "Visits");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](511, "i", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](512, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](513, "app-apex-chart", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](514, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](515, "app-card", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](516, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](517, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](518, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](519, "49.54%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](520, "h6", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](521, "Bounce Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](522, "i", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](523, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](524, "app-apex-chart", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](525, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](526, "app-card", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](527, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](528, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](529, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](530, "1,62,564");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](531, "h6", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](532, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](533, "i", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](534, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](535, "app-apex-chart", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](536, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](537, "app-card", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](538, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](539, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](540, "img", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](541, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](542, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](543, "Gregory Johnes");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](544, "a", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](545, "gregory@demo.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](546, "p", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](547, "Product Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](548, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](549, "div", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](550, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](551, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](552, "p", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](553, "Invites");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](554, "span", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](555, "345");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](556, "div", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](557, "p", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](558, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](559, "span", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](560, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](561, "div", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](562, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](563, "Overall Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](564, "app-apex-chart", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](565, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](566, "app-card", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](567, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](568, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](569, "img", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](570, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](571, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](572, "Gregory Johnes");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](573, "a", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](574, "gregory@demo.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](575, "p", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](576, "Product Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](577, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](578, "div", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](579, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](580, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](581, "p", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](582, "Invites");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](583, "span", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](584, "845");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](585, "div", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](586, "p", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](587, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](588, "span", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](589, "02");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](590, "div", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](591, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](592, "Overall Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](593, "app-apex-chart", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](594, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](595, "app-card", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](596, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](597, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](598, "img", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](599, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](600, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](601, "Gregory Johnes");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](602, "a", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](603, "gregory@demo.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](604, "p", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](605, "Product Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](606, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](607, "div", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](608, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](609, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](610, "p", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](611, "Invites");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](612, "span", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](613, "812");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](614, "div", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](615, "p", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](616, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](617, "span", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](618, "00");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](619, "div", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](620, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](621, "Overall Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](622, "app-apex-chart", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](623, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](624, "app-card", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](625, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](626, "h5", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](627, "Total Leads");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](628, "p", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](629, "i", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](630, " 18% High than last month");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](631, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](632, "div", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](633, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](634, "Overall");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](635, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](636, "76.12%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](637, "div", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](638, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](639, "Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](640, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](641, "16.40%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](642, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](643, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](644, "Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](645, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](646, "4.56%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](647, "app-apex-chart", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](648, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](649, "app-card", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](650, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](651, "h5", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](652, "Total Vendors");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](653, "p", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](654, "i", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](655, " 24% High than last month");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](656, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](657, "div", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](658, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](659, "Overall");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](660, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](661, "68.52%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](662, "div", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](663, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](664, "Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](665, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](666, "28.90%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](667, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](668, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](669, "Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](670, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](671, "13.50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](672, "app-apex-chart", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](673, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](674, "app-card", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](675, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](676, "h5", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](677, "Invoice Generate");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](678, "p", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](679, "i", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](680, " 20% High than last month");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](681, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](682, "div", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](683, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](684, "Overall");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](685, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](686, "68.52%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](687, "div", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](688, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](689, "Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](690, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](691, "28.90%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](692, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](693, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](694, "Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](695, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](696, "13.50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](697, "app-apex-chart", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](698, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](699, "app-card", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](700, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](701, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](702, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](703, "Support Analytics");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](704, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](705, "div", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](706, "a", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](707, " Last Week ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](708, "div", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](709, "a", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](710, "1 week");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](711, "a", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](712, "2 year");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](713, "a", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](714, "3 month");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](715, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](716, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](717, "h2", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](718, "280");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](719, "span", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](720, "Tickets");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](721, "h6", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](722, "Close: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](723, "span", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](724, "120");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](725, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](726, "Response ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](727, "span", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](728, "2d");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](729, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](730, "div", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](731, "app-apex-chart", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](732, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](733, "app-card", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](734, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](735, "Traffic tracker");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](736, "div", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](737, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](738, "span", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](739, "Inbound");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](740, "h3", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](741, "180 GB");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](742, "div", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](743, "app-apex-chart", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](744, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](745, "span", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](746, "Outbound");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](747, "h3", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](748, "597.1 GB");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](749, "div", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](750, "app-apex-chart", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](751, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](752, "app-card", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](753, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](754, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](755, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](756, "Page view by device");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](757, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](758, "div", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](759, "a", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](760, "weekly");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](761, "div", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](762, "a", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](763, "1 week");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](764, "a", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](765, "2 year");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](766, "a", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](767, "3 month");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](768, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](769, "div", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](770, "h6", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](771, "i", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](772, "66.6%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](773, "span", 168);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](774, "i", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](775, "2%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](776, "h6", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](777, "i", 170);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](778, "29.7%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](779, "span", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](780, "i", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](781, "3%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](782, "h6", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](783, "i", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](784, "32.8%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](785, "span", 168);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](786, "i", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](787, "8%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](788, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](789, "div", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](790, "app-apex-chart", 175);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](791, "div", 176);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](792, "div", 177);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](793, "div", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](794, "app-card", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](795, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](796, "Transactions");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](797, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](798, "61");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](799, "app-apex-chart", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](800, "div", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](801, "app-card", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](802, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](803, "Current stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](804, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](805, "50");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](806, "app-apex-chart", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](807, "div", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](808, "app-card", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](809, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](810, "Page bounce rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](811, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](812, "0.50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](813, "app-apex-chart", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](814, "div", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](815, "app-card", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](816, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](817, "Total order value");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](818, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](819, "$203.20");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](820, "app-apex-chart", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](821, "div", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](822, "app-card", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](823, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](824, "Revenue");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](825, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](826, "$2,45,789");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](827, "app-apex-chart", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](828, "div", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](829, "app-card", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](830, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](831, "New Purchases");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](832, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](833, "45");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](834, "app-apex-chart", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](835, "div", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](836, "app-card", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](837, "div", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](838, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](839, "h6", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](840, "Task Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](841, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](842, "Successful tested");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](843, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](844, "h2", 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](845, "60%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](846, "bar-rating", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵlistener"]("rateChange", function WidgetChartComponent_Template_bar_rating_rateChange_846_listener($event) { return ctx.taskRate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](847, "app-card", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](848, "app-apex-chart", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](849, "div", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](850, "app-card", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](851, "app-apex-chart", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](852, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](853, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](854, "div", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](855, "app-card", 196);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](856, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](857, "Conversions");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](858, "h4", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](859, " 0.85%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](860, "span", 197);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](861, "i", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](862, "0.50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](863, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](864, "Purchased");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](865, "app-card", 198);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](866, "app-apex-chart", 199);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](867, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](868, "app-card", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](869, "div", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](870, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](871, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](872, "Active customer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](873, "span", 201);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](874, "on site");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](875, "h2", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](876, "2.86");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](877, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](878, "+85.9%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](879, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](880, "app-apex-chart", 202);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](881, "div", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](882, "app-card", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](883, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](884, "Customer Satisfaction");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](885, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](886, "It takes continuous effort to maintain high customer satisfaction levels.Internal and external quality measures are often tied together.,as the opinion...");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](887, "span", 204);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](888, "Learn more..");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](889, "div", 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](890, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](891, "app-apex-chart", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](892, "div", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](893, "app-card", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](894, "app-apex-chart", 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](895, "div", 209);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](896, "app-card", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](897, "app-apex-chart", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](898, "div", 212);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](899, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](900, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](901, "$1000");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](902, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](903, "Target");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](904, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](905, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](906, "$985");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](907, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](908, "Last week");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](909, "div", 209);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](910, "app-card", 213);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](911, "app-apex-chart", 214);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](912, "div", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](913, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](914, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](915, "i", 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](916, "Time on site");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](917, "div", 216);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](918, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](919, "1:31");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](920, "div", 209);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](921, "app-card", 217);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](922, "div", 218);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](923, "table", 219);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](924, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](925, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](926, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](927, "Google Chrome");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](928, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](929, "span", 220);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](930, "span", 221);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](931, "21%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](932, "span", 222);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](933, "5/7");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](934, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](935, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](936, "Mozila Firefox");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](937, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](938, "span", 220);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](939, "span", 221);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](940, "76%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](941, "span", 223);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](942, "3/8");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](943, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](944, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](945, "Apple Safari");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](946, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](947, "span", 220);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](948, "span", 221);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](949, "20%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](950, "span", 224);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](951, "5/6");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](952, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](953, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](954, "Internet Explorer");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](955, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](956, "span", 220);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](957, "span", 221);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](958, "26%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](959, "span", 225);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](960, "2/6");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](961, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](962, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](963, "Opera mini");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](964, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](965, "span", 220);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](966, "span", 221);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](967, "27%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](968, "span", 226);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](969, "5/7");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](970, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](971, "app-card", 227);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](972, "app-apex-chart", 228);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](973, "span", 229);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](974, "Total sales made today");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](975, "app-card", 230);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](976, "div", 231);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](977, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](978, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](979, "$1258");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](980, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](981, "Target");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](982, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](983, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](984, "$975");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](985, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](986, "Last week");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](987, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](988, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](989, "$500");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](990, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](991, "Last Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](992, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](993, "app-card", 232);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](994, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](995, "i", 233);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](996, "27,695.65");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](997, "div", 234);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](998, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](999, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1000, "Youtube");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1001, "span", 235);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1002, "- 16.85%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1003, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1004, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1005, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1006, "span", 236);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1007, "+ 45.36%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1008, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1009, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1010, "Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1011, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1012, "+ 50.69%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1013, "app-apex-chart", 237);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1014, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1015, "app-card", 238);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1016, "app-apex-chart", 239);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1017, "div", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1018, "span", 240);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1019, "i", 241);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1020, "Desktop Computers");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1021, "span", 242);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1022, "76.7%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1023, "span", 240);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1024, "i", 243);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1025, "Smartphones");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1026, "span", 242);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1027, "15%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1028, "span", 201);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1029, "i", 244);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1030, "Tablets");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1031, "span", 242);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1032, "30%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1033, "div", 245);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1034, "app-card", 246);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1035, "app-apex-chart", 247);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1036, "div", 218);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1037, "perfect-scrollbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1038, "table", 248);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1039, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1040, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1041, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1042, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1043, "Campaign date");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1044, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1045, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1046, "Click ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1047, "a", 249);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1048, "i", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1049, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1050, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1051, "Cost ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1052, "a", 249);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1053, "i", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1054, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1055, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1056, "CTR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1057, "a", 249);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1058, "i", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1059, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1060, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1061, "ARPU ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1062, "a", 249);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1063, "i", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1064, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1065, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1066, "ECPI ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1067, "a", 249);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1068, "i", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1069, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1070, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1071, "ROI ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1072, "a", 249);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1073, "i", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1074, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1075, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1076, "Revenue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1077, "a", 249);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1078, "i", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1079, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1080, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1081, "Conversions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1082, "a", 249);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1083, "i", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1084, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1085, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1086, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1087, "08-11-2016");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1088, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1089, " 786 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1090, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1091, "ngb-progressbar", 251);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1092, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1093, " 485 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1094, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1095, "ngb-progressbar", 252);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1096, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1097, " 769 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1098, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1099, "ngb-progressbar", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1100, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1101, " 45,3% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1102, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1103, "ngb-progressbar", 254);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1104, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1105, " 6,7% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1106, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1107, "ngb-progressbar", 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1108, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1109, " 8,56 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1110, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1111, "ngb-progressbar", 251);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1112, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1113, " 10:55 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1114, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1115, "ngb-progressbar", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1116, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1117, " 33.8% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1118, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1119, "ngb-progressbar", 254);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1120, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1121, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1122, "15-10-2016");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1123, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1124, " 786 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1125, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1126, "ngb-progressbar", 251);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1127, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1128, " 523 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1129, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1130, "ngb-progressbar", 252);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1131, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1132, " 736 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1133, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1134, "ngb-progressbar", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1135, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1136, " 78,3% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1137, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1138, "ngb-progressbar", 254);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1139, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1140, " 6,6% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1141, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1142, "ngb-progressbar", 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1143, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1144, " 7,56 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1145, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1146, "ngb-progressbar", 251);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1147, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1148, " 4:30 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1149, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1150, "ngb-progressbar", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1151, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1152, " 76.8% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1153, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1154, "ngb-progressbar", 254);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1155, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1156, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1157, "08-08-2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1158, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1159, " 624 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1160, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1161, "ngb-progressbar", 251);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1162, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1163, " 436 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1164, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1165, "ngb-progressbar", 252);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1166, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1167, " 756 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1168, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1169, "ngb-progressbar", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1170, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1171, " 78,3% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1172, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1173, "ngb-progressbar", 254);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1174, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1175, " 6,4% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1176, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1177, "ngb-progressbar", 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1178, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1179, " 9,45 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1180, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1181, "ngb-progressbar", 251);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1182, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1183, " 9:05 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1184, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1185, "ngb-progressbar", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1186, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1187, " 8.63% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1188, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1189, "ngb-progressbar", 254);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1190, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1191, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1192, "11-12-2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1193, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1194, " 423 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1195, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1196, "ngb-progressbar", 251);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1197, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1198, " 123 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1199, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1200, "ngb-progressbar", 252);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1201, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1202, " 756 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1203, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1204, "ngb-progressbar", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1205, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1206, " 78,6% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1207, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1208, "ngb-progressbar", 254);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1209, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1210, " 45,6% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1211, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1212, "ngb-progressbar", 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1213, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1214, " 6,85 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1215, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1216, "ngb-progressbar", 251);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1217, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1218, " 7:45 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1219, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1220, "ngb-progressbar", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1221, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1222, " 33.8% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1223, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1224, "ngb-progressbar", 254);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1225, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1226, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1227, "05-06-2015");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1228, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1229, " 465 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1230, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1231, "ngb-progressbar", 251);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1232, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1233, " 463 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1234, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1235, "ngb-progressbar", 252);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1236, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1237, " 456 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1238, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1239, "ngb-progressbar", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1240, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1241, " 68,6% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1242, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1243, "ngb-progressbar", 254);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1244, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1245, " 76,6% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1246, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1247, "ngb-progressbar", 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1248, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1249, " 7,56 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1250, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1251, "ngb-progressbar", 251);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1252, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1253, " 8:45 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1254, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1255, "ngb-progressbar", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1256, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1257, " 39.8% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1258, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1259, "ngb-progressbar", 254);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1260, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1261, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1262, "08-11-2016");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1263, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1264, " 786 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1265, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1266, "ngb-progressbar", 251);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1267, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1268, " 485 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1269, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1270, "ngb-progressbar", 252);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1271, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1272, " 769 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1273, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1274, "ngb-progressbar", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1275, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1276, " 45,3% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1277, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1278, "ngb-progressbar", 254);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1279, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1280, " 6,7% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1281, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1282, "ngb-progressbar", 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1283, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1284, " 8,56 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1285, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1286, "ngb-progressbar", 251);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1287, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1288, " 10:55 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1289, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1290, "ngb-progressbar", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1291, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1292, " 33.8% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1293, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1294, "ngb-progressbar", 254);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1295, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1296, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1297, "15-10-2016");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1298, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1299, " 786 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1300, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1301, "ngb-progressbar", 251);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1302, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1303, " 523 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1304, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1305, "ngb-progressbar", 252);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1306, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1307, " 736 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1308, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1309, "ngb-progressbar", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1310, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1311, " 78,3% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1312, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1313, "ngb-progressbar", 254);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1314, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1315, " 6,6% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1316, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1317, "ngb-progressbar", 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1318, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1319, " 7,56 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1320, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1321, "ngb-progressbar", 251);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1322, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1323, " 4:30 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1324, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1325, "ngb-progressbar", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1326, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1327, " 76.8% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1328, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1329, "ngb-progressbar", 254);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1330, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1331, "div", 256);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1332, "app-card", 196);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1333, "h2", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1334, "350");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1335, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1336, "Support Requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1337, "p", 257);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1338, "Total number of support requests that come in.");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1339, "app-card", 258);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1340, "app-apex-chart", 259);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1341, "app-card", 260);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1342, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1343, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1344, "h4", 261);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1345, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1346, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1347, "Open");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1348, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1349, "h4", 261);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1350, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1351, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1352, "Running");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1353, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1354, "h4", 261);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1355, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1356, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1357, "Solved");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1358, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1359, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1360, "div", 262);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1361, "div", 263);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1362, "div", 264);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1363, "span", 265);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1364, "i", 266);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1365, "Bitcoin");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1366, "div", 267);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1367, "app-apex-chart", 268);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1368, "div", 269);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1369, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1370, "Goal: $75");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1371, "h3", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1372, "$80");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1373, "div", 262);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1374, "div", 263);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1375, "div", 264);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1376, "span", 265);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1377, "i", 270);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1378, "Ethereum");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1379, "div", 267);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1380, "app-apex-chart", 271);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1381, "div", 269);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1382, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1383, "Goal: $75");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1384, "h3", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1385, "$80");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1386, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1387, "div", 262);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1388, "div", 272);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1389, "div", 264);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1390, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1391, "Total ticket Resolved");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1392, "div", 273);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1393, "app-apex-chart", 274);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1394, "div", 269);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1395, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1396, "pending: 75");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1397, "h3", 261);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1398, "400");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1399, "div", 262);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1400, "div", 275);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1401, "div", 264);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1402, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1403, "Avg. Customer Satisfaction");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1404, "div", 273);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelement"](1405, "app-apex-chart", 276);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1406, "div", 269);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1407, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1408, "Reopen: 20%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementStart"](1409, "h3", 261);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵtext"](1410, "75%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.amountProcessedChartData);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.amountSpentChartData);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.profitProcessedChartData);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true)("isCardFooter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.secEcommerceChartDataLine);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.secEcommerceChartDataBar);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.secEcommerceChartDataBar1);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.saleIncomeChartData);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.rentIncomeChartData);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.incomeAnalysisChartData);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.saleReportChartData1);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.saleReportChartData2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.saleReportChartData3);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.saleReportChartData4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true)("isCardFooter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.saleChartData1);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.thisMonthBarChartData);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true)("isCardFooter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.saleChartData1);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.powerCardChartData1);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.powerCardChartData2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.powerCardChartData3);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("options", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.revenueMapChartData);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true)("isCardFooter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.projectEarningChartData);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("options", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.siteVisitorCAC)("newData", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.seoChartData1);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.seoChartData2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.seoChartData3);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.seoChartData4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.totalValueGraphChartData1);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.totalValueGraphChartData2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.totalValueGraphChartData3);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.totalValueGraphChartData4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.monthlyProfitChartData1);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.monthlyProfitChartData2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.monthlyProfitChartData3);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.seoSaleChartData1);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.seoSaleChartData2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.seoSaleChartData3);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.clientMapChartData1);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.clientMapChartData2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.clientMapChartData3);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.totLeadChartData);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.totVendorChartData);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.totInvoiceChartData);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.chartDB.completedTicketCAC);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.chartDB.transactions1CAC);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.chartDB.transactions2CAC);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.chartDB.percentageCAC);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.chartDB.userAACC);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.chartDB.sessionAACC);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.chartDB.pageViewAACC);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.chartDB.pageSessionAACC);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.chartDB.avgSessionAACC);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.chartDB.bounceRateAACC);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("rate", ctx.taskRate)("max", 18)("theme", "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.chartDB.timeUserCAC);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.chartDB.horizontalBarCAC);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.chartDB.conversionsBarCAC);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.chartDB.siteCAC);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.chartDB.satisfactionSACC);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("options", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.chartDB.trafficCAC);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("options", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.chartDB.saleCAC);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("options", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.chartDB.timeCAC);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("options", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("options", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.chartDB.revenueCAC);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("options", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.chartDB.marketCAC);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("options", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.chartDB.typeCAC);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("options", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.chartDB.trafficMonitorCAC);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵstyleProp"]("max-height", "380px");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("value", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.chartDB.supportCAC);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("hidHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.chartDB.average1CAC);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.chartDB.average2CAC);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵstyleProp"]("width", "100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.chartDB.average3CAC);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵstyleProp"]("width", "100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵproperty"]("chartConfig", ctx.chartDB.average4CAC);
    } }, directives: [_theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_43__.CardComponent, _theme_shared_components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_44__.ApexChartComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_48__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_48__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_48__.NgbDropdownMenu, ngx_bar_rating__WEBPACK_IMPORTED_MODULE_45__.BarRatingComponent, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_46__.PerfectScrollbarComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_48__.NgbProgressbar], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aWRnZXQtY2hhcnQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 30879:
/*!*****************************************************************!*\
  !*** ./src/app/demo/widget/widget-chart/widget-chart.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WidgetChartModule": () => (/* binding */ WidgetChartModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _widget_chart_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget-chart-routing.module */ 53462);
/* harmony import */ var _widget_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget-chart.component */ 65786);
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ 95702);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var ngx_bar_rating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bar-rating */ 90);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







class WidgetChartModule {
}
WidgetChartModule.ɵfac = function WidgetChartModule_Factory(t) { return new (t || WidgetChartModule)(); };
WidgetChartModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: WidgetChartModule });
WidgetChartModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _widget_chart_routing_module__WEBPACK_IMPORTED_MODULE_0__.WidgetChartRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbProgressbarModule, ngx_bar_rating__WEBPACK_IMPORTED_MODULE_3__.BarRatingModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](WidgetChartModule, { declarations: [_widget_chart_component__WEBPACK_IMPORTED_MODULE_1__.WidgetChartComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _widget_chart_routing_module__WEBPACK_IMPORTED_MODULE_0__.WidgetChartRoutingModule, _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbProgressbarModule, ngx_bar_rating__WEBPACK_IMPORTED_MODULE_3__.BarRatingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_demo_widget_widget-chart_widget-chart_module_ts.js.map