import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../../service/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  resultSearch: any;
  constructor(private router: Router,  private productsService:ProductsService) { 
    console.log('holaaaaaaaa');
    let product = this.router.url.split('?search=')[1];
    console.log(this.router.url.split('?search=')[1]);
    this.productsService.getProducts(product).subscribe(
      result => {
        this.resultSearch = result.data.items;
        console.log(this.resultSearch);
      },
      error => {
        console.log('There was an error: ', error);
      
      }
    );
  }

  ngOnInit() {
  }
  getDetails(id){
    console.log(id);
    this.router.navigate(['/items/' + id]);
  }

}
