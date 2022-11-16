import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginGuard } from "../core/guards/login.guard";
import { AppLoginComponent } from "./app-login/app-login.component";


const routes:Routes=[
      {path:'',component:AppLoginComponent,canActivate:[LoginGuard]},
]
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class SecurityRoutingModule{}
