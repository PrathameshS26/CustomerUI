import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Icustomer } from '../Model/customer.model';

@Injectable()
export class CustomerService {
    
 
  private url: string = "http://localhost:8888/customers"
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private httpclient: HttpClient){

  }
      public  getAllcustomers(): Observable<Icustomer[]>{
        //return customers;
        //Ankita  
        //67877
        //new changes done in ankita
        //Observable receives data
       // let obs : Observable<Icustomer[]> = this.httpclient.get<Icustomer[]>(this.url);//this doesn't process the data
      return this.httpclient.get<Icustomer[]>(this.url);
      }
      public  getbyid(id:number):Observable<Icustomer>{
      //  return customers.find(Icustomer => Icustomer.customerId===id);
      let url2:string="http://localhost:8888/customers/customer"
      const url =`${url2}/${id}`;
      return  this.httpclient.get<Icustomer>(url);
      }
      public addCustomer(newCustomer):Observable<Icustomer> {
        let url3:string="http://localhost:8888/customers/customer"
        console.log(url3)
        console.log(newCustomer)
        return this.httpclient.post<Icustomer>(url3, newCustomer, this.httpOptions);
      }
      public deleteCustomer(id: number): Observable<any> {
        // return courses.find( course => course.id === cid);
        let url4:string="http://localhost:8888/customers/customer"
        const url = `${url4}/${id}`;
        return this.httpclient.delete<any>(url);
      }
      public updateCustomer(newCustomer:Icustomer): Observable<Icustomer> {
        console.log(Icustomer);
        let url5:string="http://localhost:8888/customers/customer"
        const url = `${url5}/${newCustomer.customerId}`;
        return this.httpclient.put<Icustomer>(url, newCustomer, this.httpOptions);

       
      }
 
}
//  const customers:Icustomer[]=[
  
//     {
//       "customerId": 4,
//       "customerFirstName": "Tanya",
//       "customerLastName": "Advani",
//       "orgunit": {
//         "orgId": 5,
//         "orgName": "cap",
//         "phoneNumber": 4567876668
//       },
//       "postal": {
//         "postalCodeValue": 736182,
//         "countryname": "india",
//         "statename": "west bengal",
//         "cityname": "kolkata"
//       }
//     },
//     {
//       "customerId": 7,
//       "customerFirstName": "Sanjay",
//       "customerLastName": "Tyagi",
//       "orgunit": {
//         "orgId": 8,
//         "orgName": "Cap",
//         "phoneNumber": 3488765677
//       },
//       "postal": {
//         "postalCodeValue": 456712,
//         "countryname": "india",
//         "statename": "Maharastra",
//         "cityname": "Mumbai"
//       }
//     }
//   ]

