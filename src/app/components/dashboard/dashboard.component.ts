import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ChartService } from 'src/app/service/chart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  chart: any;

  constructor(private chartService: ChartService) { }

  ngOnInit(): void {
    Chart.register(...registerables);
    this.chartService.createChartBar()
    this.chartService.createChartLine()
    this.chartService.createChartCircle()
    this.chartService.createChartPolarArea()
    this.chartService.createChartBar2()
  
    
  }

  













}
