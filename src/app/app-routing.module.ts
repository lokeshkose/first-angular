import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DeafultComponent} from "./layout/deafult/deafult.component";
import {DashboardComponent} from "./nav-content/dashboard/dashboard.component";
import {OrdersComponent} from "./nav-content/orders/orders.component";
import {CustomersComponent} from "./nav-content/customers/customers.component";
import {ProductsComponent} from "./nav-content/products/products.component";
import {CapturePriceComponent} from "./nav-content/capture-price/capture-price.component";
import {SalesExecutiveComponent} from "./nav-content/sales-executive/sales-executive.component";
import {EdituserComponent} from "./nav-content/customers/edituser/edituser.component";
import {UserdashboardComponent} from "./nav-content/customers/userdashboard/userdashboard.component";
import {ParentcategoriesComponent} from "./nav-content/products/parentcategories/parentcategories.component";
import {CornchipsComponent} from "./nav-content/products/parentcategories/cornchips/cornchips.component";
import {ParasboxComponent} from "./nav-content/products/parentcategories/cornchips/parasbox/parasbox.component";
import {ProductComponent} from "./nav-content/products/parentcategories/cornchips/parasbox/product/product.component";




const routes: Routes = [{
  path : '',
  component: DeafultComponent,
  children: [{
    path: '',
    component: DashboardComponent,
  }, {
    path: 'orders',
    component: OrdersComponent,
  },
    {path: 'customers', children:[
        {path:'', component: CustomersComponent,},
      { path: 'edituser', component: EdituserComponent},
      {path: 'userdashboard', component: UserdashboardComponent,}
    ]},
    {path: 'products', children:[
      {path:'', component: ProductsComponent,},
      { path: 'parentcategories', component: ParentcategoriesComponent},

    ]},

    {path: 'products/parentcategories', children:[
      {path:'', component: ParentcategoriesComponent,},
      { path: 'cornchips', component: CornchipsComponent},

    ]},
    {path: 'products/parentcategories/cornchips', children:[
      {path:'', component: CornchipsComponent,},
      { path: 'parasbox', component: ParasboxComponent},

    ]},
    {path: 'products/parentcategories/cornchips/parasbox', children:[
      {path:'', component: ParasboxComponent,},
      { path: 'product', component: ProductComponent},

    ]},



    {
    path: 'sales-executive',
    component: SalesExecutiveComponent,
  },{
    path:'capture-price',
    component: CapturePriceComponent
  }]

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
