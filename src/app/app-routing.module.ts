import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateNcustomerComponent } from './customercomponent/createcustomer.component';
import { CustomerByIdComponent } from './customercomponent/customerbyid.component';
import { CustomerlistComponent } from './customercomponent/customerlist.component';
import { DeleteCustomerComponent } from './customercomponent/deletecustomer.component';
import { UpdateCustomerComponent } from './customercomponent/updatecustomer.component';
import { Error404Component } from './Error/Error.component';
import { CustomerIdRouteGaurdCheckService } from './service/customerroutegaurd.service';

const routes: Routes = [
  { path: "customers", component: CustomerlistComponent },
  {​​​​​​​​path:'customernotfound',component:Error404Component}​​​​​​​​,
  { path: "customers/new", component: CreateNcustomerComponent },
  { path: "customers/:id", component: CustomerByIdComponent,canActivate:[CustomerIdRouteGaurdCheckService]},
  { path: "deletecustomer/:id", component:  DeleteCustomerComponent, canActivate: [CustomerIdRouteGaurdCheckService] },
  { path: "updateCustomer/:id", component: UpdateCustomerComponent, canActivate: [CustomerIdRouteGaurdCheckService] },
  {path:'',redirectTo:'/customers',pathMatch:'full'},  
  {path:'**',component:Error404Component}               

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
