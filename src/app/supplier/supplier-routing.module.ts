import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ViewSupplierComponent } from './view-supplier/view-supplier.component';

const routes: Routes = [
  {
    path: 'view',
    component: ViewSupplierComponent
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

export class SupplierRoutingModule { }
