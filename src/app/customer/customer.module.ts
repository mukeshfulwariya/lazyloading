import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewCustomerComponent } from '../customer/view-customer/view-customer.component';
import { CustomerRoutingModule } from './customer-routing.module';

@NgModule({
  declarations: [ ViewCustomerComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
