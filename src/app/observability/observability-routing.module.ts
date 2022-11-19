import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthenticationGuard } from "../core/guards/authentication.guard";
import { AppActuatorDashboardComponent } from "./app-actuator-dashboard/app-actuator-dashboard.component";

const routes:Routes=[
      {path:'',component:AppActuatorDashboardComponent,canActivate:[AuthenticationGuard]},
]
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class ObservabilityRoutingModule{}
