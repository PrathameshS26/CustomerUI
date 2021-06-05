import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Icustomer } from '../Model/customer.model';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'create-customer-list',
  templateUrl: './createcustomer.component.html',
  
  
})


export class CreateNcustomerComponent {
  
  
  
  customer: Icustomer = {customerFirstName: '', customerLastName: '', orgUnit: {orgName: '', phoneNumber : 0},postal: {postalCodeValue: 0}};
  constructor(private router: Router, private customerService: CustomerService) {
  }

  addCustomer(newcustomer) {

     this.customerService.addCustomer(newcustomer).subscribe(customer => this.customer = customer);
     this.router.navigate(['/customers'])
   
  }
  cancelbutton(){
    this.router.navigate(['/customers'])
  }
  
  }


