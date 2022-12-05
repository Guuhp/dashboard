import { Injectable } from '@angular/core';
import { Sales } from '../../model/sales';

@Injectable({
  providedIn: 'root'
})
export class TableSalesService {

constructor() { }


ELEMENT_DATA: Sales[] = [
  { id: 1, product: "camiseta polo", price: "85.00" },
  { id: 2, product: "Tenis Nike", price: "130.00" },
  { id: 3, product: "Calça Jeans", price: "90.00" },
  { id: 4, product: "Tenis Adidas", price: "110.00" },
  { id: 5, product: "camisa Regata", price: "100.00" },
  { id: 6, product: "Boné", price: "77.00" },
  { id: 7, product: "Shots Jeans", price: "89.00" },
  { id: 88, product: "Camiseta regata", price: "100.00" },
  { id: 9, product: "camisa polo", price: "90.00" },
  { id: 10, product: "camisa polo", price: "100.00" },
];

public getHeroes():Sales[]{
  return this.ELEMENT_DATA;
}

}
