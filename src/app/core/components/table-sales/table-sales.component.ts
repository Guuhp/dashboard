import { Component, OnInit } from '@angular/core';
import { Sales } from '../../model/sales';
import { TableSalesService } from './table-sales.service';

@Component({
  selector: 'app-table-sales',
  templateUrl: './table-sales.component.html',
  styleUrls: ['./table-sales.component.css']
})
export class TableSalesComponent implements OnInit {

  dataSource!:Sales[]
  
  displayedColumns: string[] = ['id', 'product', 'price'];
  constructor(private serviceSales: TableSalesService){}

  ngOnInit(): void {
    this.dataSource = this.serviceSales.getHeroes()
    console.log(this.dataSource);
    

  }







  
}
