import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthenticationGuard } from "../core/guards/authentication.guard";
import { AppNewOrderFormComponent } from "./app-new-order/app-new-order-form.component";
import { AppOrderListComponent } from "./app-order-list/app-order-list.component";

const routes:Routes=[
  {path:'novo',component:AppNewOrderFormComponent,canActivate:[AuthenticationGuard]},
  {path:':type',component:AppOrderListComponent,canActivate:[AuthenticationGuard]}
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class OrdersRoutingModule{}
