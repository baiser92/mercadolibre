import { Component, OnInit, Input, Output,EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../../service/products.service';
import { Location } from '@angular/common';
import { OnChanges } from '@angular/core';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  resultSearch: any;
  @Output() public breadcrumbCategories = new EventEmitter();  
  constructor(private router: Router,  private productsService:ProductsService, private location: Location) { 
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) {
        this.getServiceProducts();
      }
  });

  }

  ngOnInit() {
  } 

  getServiceProducts(){
    let product = this.router.url.split('?search=')[1];
    this.productsService.getProducts(product).subscribe(
      result => {
        this.resultSearch = this.getResult(result);
      },
      error => {
        console.log('There was an error: ', error);
      }
    );

  }
 
  getResult(result){
    result.data.hasOwnProperty('categories') ? this.breadcrumbCategories.emit(result.data.categories) :  this.breadcrumbCategories.emit([]);
    return result.data.items;
  }
  getDetails(id){
    this.router.navigate(['/items/' + id]);
  } 

}
