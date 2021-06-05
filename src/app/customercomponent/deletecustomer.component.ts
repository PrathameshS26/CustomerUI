import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CustomerService } from "../service/customer.service";

@Component({
    selector: 'create-course',
    template: ``,
    styles: [`em{float:right; color: #E05c65; padding-left-10px;`]
  },
  
  )
  
  
  export class DeleteCustomerComponent implements OnInit {
  
  
    constructor(private router: Router, private courseService: CustomerService, private activatedRoute: ActivatedRoute) {
    }
  
    ngOnInit(): void {
      let customerid: number = this.activatedRoute.snapshot.params['id'];
      console.log(customerid)
      this.courseService.deleteCustomer(customerid).subscribe(data => console.log(data));
      this.router.navigate(['/customers']);
    }
  }