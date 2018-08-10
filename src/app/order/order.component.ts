import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDiscount } from '../discount/IDiscount';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  customerId = "";
  private selectedProducts = [];
  private selectedDiscount: IDiscount;
  private totalAmount: number;
  private totalDiscount: number;
  private subTotal: number;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(res => this.customerId = res.userId);
  }
  ngOnInit() {
  }

  receiveSelectedProducts($event) {
    // console.log('i am inside receiveSelectedProducts()');
    this.selectedProducts = $event;
    // this.selectedProducts.forEach(i => console.log(i));reduce(((a,b) > a+b,0));
    this.totalAmount = this.selectedProducts.map(((product) => product.price)).reduce((a,b)=>a+b,0);
    this.calculateSubTotal();
  }

  receiveSelectedDiscount($event) {
    this.selectedDiscount = $event;
    this.calculateSubTotal();
  }

  calculateSubTotal(){
    if(this.selectedDiscount != undefined){
      if(this.selectedDiscount.type === "flat"){
        this.totalDiscount = this.selectedDiscount.discount;
      }else{
        this.totalDiscount = (this.totalAmount * this.selectedDiscount.discount) / 100;
      }
      this.subTotal = this.totalAmount - this.totalDiscount;
    }else{
      this.totalDiscount = 0;
    }
  }
}
