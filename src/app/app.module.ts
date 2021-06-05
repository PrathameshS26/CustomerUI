import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CustomerlistComponent} from './customercomponent/customerlist.component';
import {AllCustomerlistComponent} from './customercomponent/allcustomerlist.component ';
import { NavbarComponent } from './navbar/navbar.component';
import { CustomerService } from './service/customer.service';
import{CustomerByIdComponent} from './customercomponent/customerbyid.component';
import { CreateNcustomerComponent } from './customercomponent/createcustomer.component';
import { Error404Component } from './Error/Error.component';
import { CustomerIdRouteGaurdCheckService } from './service/customerroutegaurd.service';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DeleteCustomerComponent } from './customercomponent/deletecustomer.component';
import { UpdateCustomerComponent } from './customercomponent/updatecustomer.component';

@NgModule({
  declarations: [
    AppComponent,CustomerlistComponent, NavbarComponent,AllCustomerlistComponent,
    CustomerByIdComponent,CreateNcustomerComponent,Error404Component,DeleteCustomerComponent,UpdateCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule //template driven form

  ],
  providers: [CustomerService ,CustomerIdRouteGaurdCheckService],
  bootstrap: [AppComponent]
})
export class AppModule { }
