import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchInput: string = '';
  constructor(private router: Router, private location: Location) { }

  ngOnInit() { 

   
  }
  search(){
    console.log(this.searchInput);
    this.router.navigate(['/items'], { queryParams: { search: this.searchInput} });
    
  }
}
