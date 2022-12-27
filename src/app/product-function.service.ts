import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductFunctionService {
  url = "http://localhost:4200/CreateProductList";

  constructor(public http: HttpClient){ }

  CreateProductList(data:any){
    console.log(data);
    return this.http.post(this.url, data);
  }
}



