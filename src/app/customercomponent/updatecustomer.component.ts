import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { pipe } from "rxjs";
import { Icustomer } from "../Model/customer.model";
import { CustomerService } from "../service/customer.service";


@Component({
    selector: 'update-customer',
    templateUrl: './updatecustomer.component.html',
    
  })

export class UpdateCustomerComponent implements OnInit {
 
    //id : number
    customer : Icustomer ; 
    //customer: Icustomer = {customerFirstName: '', customerLastName: '', orgUnit: {orgName: '', phoneNumber : 0},postal: {postalCodeValue: 0}};
    constructor(private router: Router, private customerService: CustomerService, private activatedRoute: ActivatedRoute) {
    }
  
    ngOnInit(): void {
     
     this.customerService.getbyid(+this.activatedRoute.snapshot.params['id']).subscribe(customer => this.customer = customer);
     console.log(Icustomer);
     
    }
  
    updateCustomer(customer){
        console.log(customer);
         this.customerService.updateCustomer(customer).subscribe(customer => this.customer = customer);
         this.router.navigate(['/customers']);
    }
}