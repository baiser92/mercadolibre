import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

    console.log(this.searchInput);
    this.router.navigate(['/items'], { queryParams: { search: this.searchInput} });
  }
}
