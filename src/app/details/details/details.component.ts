import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  resultSearch: any;
  constructor(private router: Router,  private productsService:ProductsService) { 
    console.log(this.router.url);
    let id = this.router.url.split('/items/')[1];
    this.productsService.getDetailProduct(id).subscribe(
      result => {
       this.resultSearch = result.data.item;
        console.log( this.resultSearch);
      },
      error => {
        console.log('There was an error: ', error);
      }
    );
  }

  ngOnInit() {
  }

}
