import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLoginComponent } from './app-login/app-login.component';
import { PrimengModule } from '../shared/primeng/primeng.module';
import { JwtHelperService,JWT_OPTIONS } from '@auth0/angular-jwt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppLoginComponent
  ],
  imports: [
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers:[
    {provide:JWT_OPTIONS,useValue:JWT_OPTIONS},
    JwtHelperService
  ]
})
export class SecurityModule { }
