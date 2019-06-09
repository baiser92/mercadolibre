import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }


  getProducts(product) {

    return this.http.get('http://localhost:3000/api/items?q=' + product);
  }

  getDetailProduct(id) {
    return this.http.get('http://localhost:3000/api/items/' + id);
  }
}
