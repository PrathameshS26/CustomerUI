 import { IorgUnit } from "./Orgunit.model"
import { Ipostal } from "./postal.model"


export class Icustomer{
     
     constructor(    
      public customerId?:number,
      public customerFirstName?:string,
      public customerLastName?:string,
      public orgUnit?:IorgUnit,
      public  postal?:Ipostal ,
     )
     {}
     

}
    
