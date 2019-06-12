import { Component } from '@angular/core';
import { ProductComponent } from './result/componet/product/product.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mercadolibre'; 
 

  constructor(private router: Router){}

  


}
