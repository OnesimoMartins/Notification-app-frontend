import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLoginComponent } from './app-login/app-login.component';
import { PrimengModule } from '../shared/primeng/primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SecurityRoutingModule } from './security-routing.module';


@NgModule({
  declarations: [
    AppLoginComponent
  ],
  imports: [
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
    SecurityRoutingModule,
    CommonModule
  ]
})
export class SecurityModule { }
