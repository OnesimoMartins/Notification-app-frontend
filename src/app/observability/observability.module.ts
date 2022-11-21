import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ObservabilityRoutingModule } from './observability-routing.module';
import { AppActuatorDashboardComponent } from './app-actuator-dashboard/app-actuator-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { HourMinutePipe } from '../core/pipes/hour-minute.pipe';



@NgModule({
  declarations:[AppActuatorDashboardComponent,
    HourMinutePipe],
  imports: [
    CommonModule,
    ObservabilityRoutingModule,
    FormsModule,

    SharedModule,

    MenuModule,
    TableModule,
    StyleClassModule,
    PanelMenuModule,
    ButtonModule,
  ],
})
export class ObservabilityModule { }
