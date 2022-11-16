import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppOrderListComponent } from './app-order-list/app-order-list.component';
import { PrimengModule } from '../shared/primeng/primeng.module';
import { AppNewOrderFormComponent } from './app-new-order/app-new-order-form.component';

import { MessageModule } from 'primeng/message';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppSendMessageComponent } from './app-send-message/app-send-message.component';
import { SharedModule } from '../shared/shared.module';
import { FirstNamePipe } from '../core/pipes/first-name.pipe';
import { OrdersRoutingModule } from './orders-routing.module';
import { ConfirmationService, MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppOrderListComponent,
    AppNewOrderFormComponent,
    AppSendMessageComponent,
    FirstNamePipe
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,

    CommonModule,
    MessageModule,

    ProgressSpinnerModule,
    ProgressBarModule,
    OrdersRoutingModule,
    SharedModule,
    PrimengModule
  ],
  providers:[MessageService,ConfirmationService]
})
export class OrdersModule { }
