import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProduct } from './IProduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  customerId = "";
  private products = [];
  // orderForm: FormGroup;;
  @Output() messageEvent = new EventEmitter<IProduct[]>();

  

constructor(private route: ActivatedRoute, private _productService : ProductService) {
  this.route.params.subscribe(res => this.customerId = res.userId);
  // console.log('i am inside product ', this.customerId);

  // this.orderForm = new FormGroup({
  //   productId: new FormControl('', {
  //     validators: Validators.required,
  //     updateOn: 'change'
  //   })
  // });
}

ngOnInit() {
  this._productService.getProducts().subscribe(data => this.products = data);
  this.products.forEach(element => {
    console.log(element);
  });
}

selectedProducts: any = { "products": [] };

onChange(product:any, isChecked: boolean) { // Use appropriate model type instead of any
  if(isChecked) {
    this.selectedProducts.products.push(product);
  }else {
    let index = this.selectedProducts.products.indexOf(product);
    this.selectedProducts.products.splice(index,1);
  } 
  // console.log(this.selectedProducts.products);
  this.messageEvent.emit(this.selectedProducts.products);
  // console.log('emit a event');
} 

}
