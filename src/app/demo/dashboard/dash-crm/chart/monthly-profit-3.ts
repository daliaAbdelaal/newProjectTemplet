export class MonthlyProfit3 {
    public static crmChartData = {
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
}
