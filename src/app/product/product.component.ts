import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  customerId ="";
  constructor(private route:ActivatedRoute) { 
    this.route.params.subscribe(res => this.customerId = res.userId);
    
  }

  ngOnInit() {
  }

  

}
