import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchInput: string = '';
  constructor(private router: Router) { }

  ngOnInit() { 

   
  }
  search(){
  //  this.router.navigated = false;
    this.router.navigate(['/items'], { queryParams: { search: this.searchInput} });
    
  }
}
