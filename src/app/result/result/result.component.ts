import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProductsService} from '../../service/products.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(private router: Router, private productsService:ProductsService) {
  console.log('Holaaaaaa');

   }

  ngOnInit() {
  }

}
