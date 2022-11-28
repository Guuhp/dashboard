import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit{

  @ViewChild("meuCanvas", { static: true }) elemento?: ElementRef;
  chart: any
  ngOnInit() {
    Chart.register(...registerables);
    this.createChartLine()
    this.createChart()
  }

  createChartLine() {
    new Chart(this.elemento?.nativeElement, {
      type: 'line',
      data: {
        labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        datasets: [
          {
            data: [85, 72, 86, 81, 84, 86, 94, 60, 62, 65, 41, 58],
            borderColor: '#00AEFF',
            fill: false
          },
          {
            data: [33, 38, 10, 93, 68, 50, 35, 29, 34, 2, 62, 4],
            borderColor: "#FFCC00",
            fill: false
          }
        ]
      },
    });
  }

  createChart() {

    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12', '2022-05-13',
          '2022-05-14', '2022-05-15', '2022-05-16', '2022-05-17',],
        datasets: [
          {
            label: "Sales",
            data: ['467', '576', '572', '79', '92',
              '574', '573', '576'],
            backgroundColor: 'blue'
          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17',
              '0.00', '538', '541'],
            backgroundColor: 'limegreen'
          }
        ]
      },
      options: {
        aspectRatio: 2.5
      }

    });
  }
}
