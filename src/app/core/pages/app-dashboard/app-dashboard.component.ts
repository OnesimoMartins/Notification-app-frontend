import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/shared/layout/services/layout.service';

@Component({
  selector: 'app-app-dashboard',
  templateUrl: './app-dashboard.component.html'
})
export class AppDashboardComponent {

  // items!: MenuItem[];

  // products!: Product[];

  chartData: any;

  chartOptions: any;


  constructor( public layoutService: LayoutService) {
  }





}
