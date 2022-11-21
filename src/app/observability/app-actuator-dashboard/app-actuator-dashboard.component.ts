import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ObservabilityService } from 'src/app/core/services/observability.service';
import { LayoutService } from 'src/app/shared/layout/services/layout.service';

import { SystemHealth } from '../models/system-healt';
import { SystemReadyTime } from '../models/system-ready-time';

@Component({
  selector: 'app-actuator-dashboard',
  templateUrl: './app-actuator-dashboard.component.html',
})
export class AppActuatorDashboardComponent implements OnInit {

  systemHealth!:SystemHealth
  systemReadyTime!:SystemReadyTime
  httpTraces:any

  constructor(public layoutService:LayoutService,
    private observabilityService:ObservabilityService){}

  ngOnInit(){
    this.getSystemHealth()
    this.getSystemReadyTime()
    this.getHttpTraces()
  }

private getSystemHealth(){
    this.observabilityService.getSystemHealth().subscribe({
      next:it=>{this.systemHealth=it},
      error:(it:HttpErrorResponse)=>{ this.systemHealth=it.error}
    })
}

private getHttpTraces(){
  this.observabilityService.getHttpTraces().subscribe(it=>{this.httpTraces=it.traces})
}

private getSystemReadyTime(){
  this.observabilityService.SystemReadyTime().subscribe(it=>this.systemReadyTime=it)
}


}
