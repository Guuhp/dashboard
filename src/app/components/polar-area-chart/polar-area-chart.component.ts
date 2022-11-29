import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-polar-area-chart',
  templateUrl: './polar-area-chart.component.html',
  styleUrls: ['./polar-area-chart.component.css']
})
export class PolarAreaChartComponent implements OnInit{
  chart: any;

  ngOnInit(): void {
    Chart.register(...registerables)
    this.createChartPolarArea()
  }

  createChartPolarArea() {
    this.chart = new Chart("MyChartPolarArea", {
      type: 'polarArea', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Red',
          'Green',
          'Yellow',
          'Grey',
          'Blue'],
        datasets: [{
          label: 'My First Dataset',
          data: [11, 16, 7, 3, 14],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(201, 203, 207)',
            'rgb(54, 162, 235)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
          ],
          borderWidth: 1,
        }]
      }
    });
  }

}
