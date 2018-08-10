import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDiscount } from './IDiscount';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  private _url: string = "../assets/data/discount.json";

  constructor(private http: HttpClient) {
  }

  getDiscounts(): Observable<IDiscount[]> {
    return this.http.get<IDiscount[]>(this._url);
  }
}
