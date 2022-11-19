import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLoginComponent } from './app-login/app-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SecurityRoutingModule } from './security-routing.module';

import {InputTextModule} from 'primeng/inputtext'
import {ButtonModule} from 'primeng/button'
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    AppLoginComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SecurityRoutingModule,
    CommonModule,

    ToastModule,
    InputTextModule,
    ButtonModule
  ]
})
export class SecurityModule { }
