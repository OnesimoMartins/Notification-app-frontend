import { Component, OnInit } from '@angular/core';
import { Dashboard } from 'src/app/core/models/dashboard.model';
import { DashboardService } from 'src/app/core/services/dashboard.service';
import { LayoutService } from 'src/app/shared/layout/services/layout.service';

@Component({
  selector: 'app-app-dashboard',
  templateUrl: './app-dashboard.component.html'
})
export class AppDashboardComponent implements OnInit {

  constructor( public layoutService: LayoutService,
     private dashboardService:DashboardService) {  }

  dashboard=new Dashboard()

  ngOnInit(): void {
      this.dashboardService.getDashBoard().subscribe(it=>{
        this.dashboard=it
      })
  }



}
