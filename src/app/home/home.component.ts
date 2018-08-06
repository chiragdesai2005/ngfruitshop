import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  customerid = '';
  // customerForm: FormGroup;
  customer = new Customer();
  constructor(private router: Router) { }

  ngOnInit() {
  }

  showProduct() {
    //let userId = 'qa-test';
    // this.customerForm = new FormGroup({
    //   customerId: new FormControl('', {
    //     validators: Validators.required,
    //     updateOn: 'change'
    //   })
    // });
    // console.log('i am inside showProduct',this.customer.id);
    this.router.navigate(['product', this.customer.id]);
  }

}

export class Customer{
  id: String;

}
