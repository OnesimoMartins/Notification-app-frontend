import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../shared/primeng/primeng.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppWorkerFormComponent } from './app-worker-form/app-worker-form.component';
import { AppProfileComponent } from './app-profile/app-profile.component';
import { AppListaFuncionariosComponent } from './app-workers-list/app-lista-funcionarios.component';


@NgModule({
  declarations: [
    AppProfileComponent,
    AppListaFuncionariosComponent,
    AppWorkerFormComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    PrimengModule,
    FormsModule,
    CommonModule,
    RouterModule
  ]
})
export class WorkersModule { }
