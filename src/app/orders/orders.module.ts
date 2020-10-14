import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './order-list/order-list.component';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  declarations: [OrderListComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    CKEditorModule
    
  ]
})
export class OrdersModule { }
