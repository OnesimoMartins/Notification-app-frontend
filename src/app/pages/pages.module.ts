import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppAboutComponent } from './app-about/app-about.component';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { AppNotFoundComponent } from './app-not-found/app-not-found.component';



@NgModule({
  declarations: [
    AppAboutComponent,
    AppDashboardComponent,
    AppNotFoundComponent],
  imports: [
    PrimengModule,
    CommonModule
  ]
})
export class PagesModule { }
