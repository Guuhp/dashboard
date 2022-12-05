import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { OrdersComponent } from './orders/orders.component';
import { EarningsComponent } from './earnings/earnings.component';
import { SalesComponent } from './sales/sales.component';
import { CircleChartComponent } from './circle-chart/circle-chart.component';
import { TableSalesComponent } from './table-sales/table-sales.component';
import { MaterialModule } from 'src/app/material/material.module';
import { RouterModule } from '@angular/router';

const COMPONENTS = [
  BarChartComponent,
  LineChartComponent,
  OrdersComponent,
  EarningsComponent,
  SalesComponent,
  CircleChartComponent,
  TableSalesComponent,

];


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [COMPONENTS],
  exports: [COMPONENTS,RouterModule],
})
export class ComponentModule { }
