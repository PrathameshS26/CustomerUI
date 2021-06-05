    import {​​​​​​​​ Injectable }​​​​​​​​ from"@angular/core";
    import {​​​​​​​​ ActivatedRouteSnapshot,  CanActivate, Router, RouterStateSnapshot, UrlTree }​​​​​​​​ from"@angular/router";
    import {​​​​​​​​ RouterTestingModule }​​​​​​​​ from"@angular/router/testing";
    import {​​​​​​​​ Observable }​​​​​​​​ from"rxjs";
    import {​​​​​​​​ Icustomer }​​​​​​​​ from"../model/customer.model";
import { CustomerService } from "./customer.service";

     
    @Injectable()
    export class CustomerIdRouteGaurdCheckService implements CanActivate {
    customerid: any;​​​​​​​​
  
    constructor(private customerService : CustomerService , private router : Router){​​​​​​​​
     
      ​​​​​​​​}
    canActivate(activatesroute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {​​​​​​​​
    console.log("Route guard is called")
    //activate route when true returned other wise don't activate the url
   this.customerService.getbyid(+activatesroute.params['id']).subscribe(customerExists => this.customerid = customerExists.customerId)
    
      
      if (!this.customerid){
    this.router.navigate(['/customernotfound'])
        }​​​​​​​​
    return true;
     
      ​​​​​​​​
    
    }
     
  }
      
    
