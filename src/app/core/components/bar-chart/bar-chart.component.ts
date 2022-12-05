import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit{
  chart: any;

  ngOnInit(): void {
    Chart.register(...registerables)
    this.createChartBar()
  }

  createChartBar() {
    this.chart = new Chart("MyChartBar", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun'],
        datasets: [{
          label: 'maior N° vendas',
          data: [100, 59, 80, 81, 56, 55, 40],
          backgroundColor: [
            '#ff5555',
            '#ffb86c',
            '#f1fa8c',
            '#50fa7b',
            '#78D1E1',
            '#988BC7',
            '#ff79c6'
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
          borderWidth: 1,
        }]
      }
    });
  }
}
