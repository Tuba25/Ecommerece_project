import { Component, ViewChild } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable, ReplaySubject} from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  name: string;
  position: number;
  quantity: number;
  price:string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', quantity: 1.0079, price: 'H'},
  {position: 2, name: 'Helium', quantity: 4.0026, price: 'He'},
  {position: 3, name: 'Lithium', quantity: 6.941, price: 'Li'},
  {position: 4, name: 'Beryllium', quantity: 9.0122, price: 'Be'},
  {position: 5, name: 'Boron', quantity: 10.811, price: 'B'},
  {position: 6, name: 'Carbon', quantity: 12.0107, price: 'C'},
  {position: 7, name: 'Nitrogen', quantity: 14.0067, price: 'N'},
  {position: 8, name: 'Oxygen', quantity: 15.9994, price: 'O'},
  {position: 9, name: 'Fluorine', quantity: 18.9984, price: 'F'},
  {position: 10, name: 'Neon', quantity: 20.1797, price: 'Ne'},
];
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {displayedColumns: string[] = ['position', 'name', 'quantity', 'price'];
dataToDisplay = [...ELEMENT_DATA];

@ViewChild(MatPaginator) paginator: MatPaginator | undefined;

ngOnInit(){
  this.dataSource.paginator=this.paginator;
}

dataSource = new ExampleDataSource(this.dataToDisplay);

addData() {
  const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
  this.dataToDisplay = [...this.dataToDisplay, ELEMENT_DATA[randomElementIndex]];
  this.dataSource.setData(this.dataToDisplay);
}

removeData() {
  this.dataToDisplay = this.dataToDisplay.slice(0, -1);
  this.dataSource.setData(this.dataToDisplay);
}
}

class ExampleDataSource extends DataSource<PeriodicElement> {
private _dataStream = new ReplaySubject<PeriodicElement[]>();
  paginator: MatPaginator | undefined;

constructor(initialData: PeriodicElement[]) {
  super();
  this.setData(initialData);
}

connect(): Observable<PeriodicElement[]> {
  return this._dataStream;
}

disconnect() {}

setData(data: PeriodicElement[]) {
  this._dataStream.next(data);
}
}
export class PaginatorOverviewExample {}



