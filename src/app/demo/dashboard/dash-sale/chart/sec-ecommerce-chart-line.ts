export class SecEcommerceChartLine {
    public static saleChartData = {
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
}
