import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../shared/primeng/primeng.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppWorkerFormComponent } from './app-worker-form/app-worker-form.component';
import { AppProfileComponent } from './app-profile/app-profile.component';
import { AppWorkerListComponent } from './app-workers-list/app-worker-list.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AppProfileComponent,
    AppWorkerListComponent,
    AppWorkerFormComponent
  ],
  imports: [
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    PrimengModule,
    FormsModule,
    CommonModule,
    RouterModule
  ],
  providers:[MessageService,ConfirmationService]
})
export class WorkersModule { }
