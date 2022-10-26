import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppListaPedidosComponent } from './app-lista-pedidos/app.lista.pedidos.component';
import { PrimengModule } from '../shared/primeng/primeng.module';
import { AppNovoPedidoFormComponent } from './app-novo-pedido-form/app-novo-pedido-form.component';

import { MessageModule } from 'primeng/message';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppListaPedidosComponent,
    AppNovoPedidoFormComponent
  ],
  imports: [
    FormsModule,
    MessageModule,
    ProgressSpinnerModule,
    ProgressBarModule,
    ReactiveFormsModule,
    CommonModule,
    PrimengModule

  ]
})
export class PedidosModule { }
