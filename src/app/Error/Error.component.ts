import { Component } from "@angular/core";




@Component({
    
    template: `
    <div class="container">
    <div class="col-md-12">
    <img src = "assets/Error6.webp" class = "img-responsive" width = "100%" />
    <!--<h2>Oops Seems wrong URL</h2>

          <h3 class='errorMessage'>404</h3> 
          </div>
          </div>-->
    `,
    styles : [`
    .div{
      back-ground color:red;    }
        .errorMessage{
                font-size: 170px;
        }

    `]
    
  })
export class Error404Component  {
  
    
   
    }
  
  