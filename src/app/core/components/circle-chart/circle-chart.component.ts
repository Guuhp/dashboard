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
        labels: ['Alcançado',
          'Não alcançado'],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50],
          backgroundColor: [
            '#50fa7b',
            '#ff5555',
           
          ],
          hoverOffset: 8,
        }]
      },
      options: {
        aspectRatio: 2,
        borderColor: '#f8f8f2'
      }

    });
  }
}
