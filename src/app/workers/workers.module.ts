import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppWorkerFormComponent } from './app-worker-form/app-worker-form.component';
import { AppProfileComponent } from './app-profile/app-profile.component';
import { AppWorkerListComponent } from './app-workers-list/app-worker-list.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SharedModule } from '../shared/shared.module';
import { PhoneNumberPipe } from '../core/pipes/phone-Number.pipe';
import { WorkersRoutingModule } from './workers-routing.module';

import {DataViewModule} from 'primeng/dataview'
import {InputTextModule} from 'primeng/inputtext'
import {DropdownModule} from 'primeng/dropdown'
import {ButtonModule} from 'primeng/button'
import { ToastModule } from 'primeng/toast';
import {DividerModule } from 'primeng/divider'

@NgModule({
  declarations: [
    AppProfileComponent,
    AppWorkerListComponent,
    AppWorkerFormComponent,
    PhoneNumberPipe
  ],
  imports: [
    WorkersRoutingModule,
    SharedModule,

    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,


    DividerModule,
    ToastModule,
    DataViewModule,
    InputTextModule,
    DropdownModule,
    ButtonModule
  ],
  providers:[MessageService,ConfirmationService]
})
export class WorkersModule { }
