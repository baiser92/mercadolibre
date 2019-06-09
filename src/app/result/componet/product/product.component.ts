import { Component, OnInit, Input, Output,EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../../service/products.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  resultSearch: any;

  @Output() public breadcrumbCategories = new EventEmitter();
 // breadcrumbCategories:any = [];
  
  constructor(private router: Router,  private productsService:ProductsService, private location: Location) { 
    let product = this.router.url.split('?search=')[1];
    console.log(this.router.url.split('?search=')[1]);
    this.productsService.getProducts(product).subscribe(
      result => {
        this.resultSearch = this.getResult(result);
      },
      error => {
        console.log('There was an error: ', error);
      }
    );
  }

  ngOnInit() {
  }

  getResult(result){
    result.data.hasOwnProperty('categories') ? this.breadcrumbCategories.emit(result.data.categories) :  this.breadcrumbCategories.emit([]);
   
    return result.data.items;
  }
  getDetails(id){
    console.log(id);
    this.router.navigate(['/items/' + id]);
  }

}
