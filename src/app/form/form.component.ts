import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ProductFunctionService } from "../product-function.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  products:any;
  constructor(private fb: FormBuilder, private prod:ProductFunctionService, private router:Router){
    this.products = fb.group(
      {
        productName: new FormControl('', Validators.required),
        productShortCode: new FormControl('', Validators.required),
        category: new FormControl('', Validators.required),
        price: new FormControl('', Validators.required),
        quantity: new FormControl('', Validators.required),
        createdDate: new FormControl('', Validators.required),
        origin: new FormControl('', Validators.required),
        description: new FormControl('')
      }
    )
  }


  onSubmit(){
    console.log(this.products.value);
    this.prod.CreateProductList(this.products.value).subscribe((data:any)=>{
      console.log(data);
    });

    this.router.navigate(['/productList']);
  }

}
