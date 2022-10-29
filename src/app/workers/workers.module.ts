import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../shared/primeng/primeng.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppWorkerFormComponent } from './app-worker-form/app-worker-form.component';
import { AppProfileComponent } from './app-profile/app-profile.component';
import { AppWorkerListComponent } from './app-workers-list/app-worker-list.component';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    AppProfileComponent,
    AppWorkerListComponent,
    AppWorkerFormComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    PrimengModule,
    FormsModule,
    CommonModule,
    RouterModule
  ],
  providers:[MessageService]
})
export class WorkersModule { }
