import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './order-list/order-list.component';

@NgModule({
  declarations: [OrderListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OrdersRoutingModule ,
    QuillModule.forRoot()
    
  ]
})
export class OrdersModule { }
