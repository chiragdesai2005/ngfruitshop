import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DiscountService } from './discount.service';
import { IDiscount } from './IDiscount';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {

  private discounts = [];
  private _selectedDiscount: IDiscount;
  @Output() discontRate = new EventEmitter<IDiscount>();

  constructor(private _discountService : DiscountService) { }

  ngOnInit() {
    this._discountService.getDiscounts().subscribe(data => this.discounts=data);
  }

  

  onChange(discount:any, isChecked: boolean) { // Use appropriate model type instead of any
    this._selectedDiscount = discount;
    // console.log(this._selectedDiscount);
    this.discontRate.emit(this._selectedDiscount);
  } 
  
}
