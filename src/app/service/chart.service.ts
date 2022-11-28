import { Injectable } from '@angular/core';
import { Chart } from 'chart.js';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() { }
  chart: any

  createChartBar() {
    this.chart = new Chart("MyChartBar", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul'],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
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


  createChartLine() {
    this.chart = new Chart("MyChartLine", {
      type: 'line',
      data: {
        labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        datasets: [
          {
            data: [85, 72, 86, 81, 84, 86, 94, 60, 62, 65, 41, 58],
            borderColor: '#FF79C6',
            fill: false
          },
          {
            data: [33, 38, 10, 93, 68, 50, 35, 29, 34, 2, 62, 4],
            borderColor: "#988BC7",
            fill: false
          }
        ]
      },
    })
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
