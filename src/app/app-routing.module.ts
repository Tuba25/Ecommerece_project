import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
{path: 'product-list', component: ProductComponent},
{path: 'Add Product', component: FormComponent},
{path: 'My cart', component: MyCartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
