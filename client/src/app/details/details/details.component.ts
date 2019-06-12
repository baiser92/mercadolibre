import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../service/products.service';
import { Detail } from '../../models/detail.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  resultSearch: Array<Detail> = [];
  priceProduct:any ="";
  constructor(private router: Router,  private productsService:ProductsService) { 
  }

  ngOnInit() {
    let id = this.router.url.split('/items/')[1];
    this.productsService.getDetailProduct(id).subscribe(
      result => {
       this.resultSearch = this.getResult(result);
      },
      error => {
        console.log('There was an error: ', error);
      }
    );
  }

  getResult (result) {
    this.priceProduct = result.data.item.price.amount;
    return result.data.item;

  }

}
