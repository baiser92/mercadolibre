import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {ProductsService} from '../../service/products.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  @Output() public breadcrumb = new EventEmitter();
  public SendBreadcrumb:any;
  constructor(private router: Router, private productsService:ProductsService) {

   }

  ngOnInit() {
  }
  onbreadcrumbCategories(event){
    this.SendBreadcrumb = event;
  }
}
