import { Component, OnInit } from '@angular/core';
import { Chart } from  'chart.js';


@Component({
    selector: 'app-dash-default',
    templateUrl: './dash-default.component.html',
    styleUrls: ['./dash-default.component.scss']
})
export class DashDefaultComponent implements OnInit {


    constructor() {
      
    }


    ngOnInit(): void {
        this.renderChart('line','linechart');
        this.renderChart('doughnut','doughnutchart');
        this.renderChart('bar','barchart');
        this.renderChart('line','linechart2');
        this.renderChart('doughnut','doughnutchart2');
        this.renderChart('bar','barchart2');
        this.renderChart('line','linechart3');
    
      }
    
      renderChart(type:any,id:any)
      {
        const myChart = new Chart(id, {
          type: type,
          data: {
              labels: [ 'Blue', 'Green', 'Purple'],
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
              scales: {
                 
              }
          }
      });
      }
}
