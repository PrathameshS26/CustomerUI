import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Icustomer } from '../Model/customer.model';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'customer',
  templateUrl: './customerbyid.component.html'
 
    


})
export class CustomerByIdComponent {

  private customer: Icustomer;
  private delete : any
  //dependency Injection
  constructor(private customerservice: CustomerService, private activatedrouter:ActivatedRoute, private router : Router) {
   // this.customer = this.customerservice.getbyid(+activatedrouter.snapshot.params['customerId']);
   this.customerservice.getbyid(+activatedrouter.snapshot.params['id']).subscribe(c=> this.customer =c)
  }
  ParentFunction(event) {
    console.log(event);
  }
  updateCustomer(id){
    this.router.navigateByUrl("/updateCustomer/"+id)
}
 // [routerLink]="['/customers',customer.customerId]"

}


