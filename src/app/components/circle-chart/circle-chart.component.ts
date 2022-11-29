import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-circle-chart',
  templateUrl: './circle-chart.component.html',
  styleUrls: ['./circle-chart.component.css']
})
export class CircleChartComponent {
  chart: any;

  ngOnInit(): void {
    Chart.register(...registerables)
    this.createChartCircle()
  }


  createChartCircle() {
    this.chart = new Chart("MyChartCircle", {
      type: 'doughnut', //this denotes tha type of char,
      data: {// values on X-Axis
        labels: ['Red',
          'Blue',
          'Yellow'],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            '#E96379',
            '#8be9fd',
            '#f1fa8c'
          ],
          hoverOffset: 4,
        }]
      },
      options: {
        aspectRatio: 2.5,
        borderColor: '#f8f8f2'
      }

    });
  }
}
