import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { IProduct } from './product/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _url: string = "../assets/data/product.json";

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this._url);
  }

}
