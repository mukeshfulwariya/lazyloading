import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewSupplierComponent } from '../supplier/view-supplier/view-supplier.component';
import { SupplierRoutingModule } from './supplier-routing.module';

@NgModule({
  declarations: [ ViewSupplierComponent],
  imports: [
    CommonModule,
    SupplierRoutingModule
  ]
})
export class SupplierModule { }
