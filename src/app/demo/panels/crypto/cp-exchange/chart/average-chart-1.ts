export class AverageChart1 {
    public static chartData = {
        chart: {
            type: 'area',
            height: 145,
            width: '100%',
            sparkline: {
                enabled: true
            }
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
}
