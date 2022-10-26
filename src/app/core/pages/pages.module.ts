import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppAboutComponent } from './app-about/app-about.component';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';



@NgModule({
  declarations: [
    AppAboutComponent,
    AppDashboardComponent],
  imports: [
    PrimengModule,
    CommonModule
  ]
})
export class PagesModule { }
