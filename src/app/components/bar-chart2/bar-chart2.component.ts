import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-bar-chart2',
  templateUrl: './bar-chart2.component.html',
  styleUrls: ['./bar-chart2.component.css']
})
export class BarChart2Component implements OnInit{
  chart: any;

  ngOnInit(): void {
    Chart.register(...registerables)
    this.createChartBar2()
    
  }

  createChartBar2() {
    this.chart = new Chart("MyChartBar2", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul'],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: [
            '#ffb86c',
            '#988BC7',
            '#f1fa8c',
            '#ff79c6',
            '#ff5555',
            '#50fa7b',
            '#78D1E1',

          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
        }]
      }
    });
  }

}
