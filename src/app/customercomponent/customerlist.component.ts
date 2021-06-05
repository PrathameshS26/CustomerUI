import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Icustomer } from '../Model/customer.model';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'customer-list',
  template: `<div>
          <h1> The Existing  Customers</h1>
                <hr/>
                <div class="row row-cols-3">
           <div *ngFor="let customer of customers" class="col-md-6">
  <all-customers #allcus [customerdata]=customer (customEvent)="ParentFunction($event)"></all-customers>
   <!--<div>
   {{allcus.i}}
   </div>-->
  </div>
  </div>
  `,
  
})
export class CustomerlistComponent {
  
  private customers:Icustomer[];
  //dependency Injection
  constructor( private customerservice: CustomerService){
   // let obs : Observable<Icustomer[]> =this.customerservice.getAllcustomers();
    //obs.subscribe(data =>this.customers=data)
    this.customerservice.getAllcustomers().subscribe(data =>this.customers=data)
  }
  ParentFunction(event){
    console.log(event);
  }
 
  }


