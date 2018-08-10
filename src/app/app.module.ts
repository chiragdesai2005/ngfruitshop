import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderComponent } from './order/order.component';
import { HttpClientModule } from  '@angular/common/http';
import { ProductService } from './product.service';
import { DiscountService } from './discount/discount.service';
import { DiscountComponent } from './discount/discount.component';
const routes: Routes = [
  {
    path: 'product',
    component: ProductComponent,
    data: { title: 'Products List' }
  },
  {
    path: 'order/:userId',
    component: OrderComponent,
    data: { title: 'Products List' }
  },
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    OrderComponent,
    DiscountComponent
  ],
  imports: [
  
  BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProductService, DiscountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
