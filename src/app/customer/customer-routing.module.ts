import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ViewCustomerComponent } from './view-customer/view-customer.component';

const routes: Routes = [
  {
    path:'view',
    component:ViewCustomerComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class CustomerRoutingModule { }
