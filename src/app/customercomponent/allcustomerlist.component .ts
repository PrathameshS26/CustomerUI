import { Component ,Input, Output,EventEmitter} from '@angular/core';
import { Icustomer } from '../Model/customer.model';


@Component({
  selector: 'all-customers',
  templateUrl: './allcustomerlist.component.html',
  
})
export class AllCustomerlistComponent {
 @Input() customerdata : Icustomer[];
 @Output() customEvent=new EventEmitter();
buttonStyle= "btn btn-primary";
 isDisabled=true
  i: number=10;
 onFocus(){
   this.isDisabled = false
   this.buttonStyle="btn btn-success"
 }
//  onClick(){
//    this.customEvent.emit(this.customerdata.name);
//   // console.log("Message came");
//  }
 }
