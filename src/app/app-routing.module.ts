import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";;
import { AppOrderListComponent } from "./pedidos/app-order-list/app-order-list.component";
import { AppNewOrderFormComponent } from "./pedidos/app-new-order/app-new-order-form.component";
import { LayoutComponent } from "./shared/layout/layout.component";
import { AppLoginComponent } from "./security/app-login/app-login.component";
import { AppAboutComponent } from "./core/pages/app-about/app-about.component";
import { AppDashboardComponent } from "./core/pages/app-dashboard/app-dashboard.component";
import { AppWorkerFormComponent } from "./workers/app-worker-form/app-worker-form.component";
import { AppProfileComponent } from "./workers/app-profile/app-profile.component";
import { AppWorkerListComponent } from "./workers/app-workers-list/app-worker-list.component";
import { AuthenticationGuard } from "./core/guards/authentication.guard";
import { LoginGuard } from "./core/guards/login.guard";


const routes:Routes=[
  {path:'',component:LayoutComponent,
  children:[
    {path:'',component:AppDashboardComponent,canActivate:[AuthenticationGuard]},
    {path:'perfil',component:AppProfileComponent,canActivate:[AuthenticationGuard]},
    {path:'home',component:AppDashboardComponent,canActivate:[AuthenticationGuard]},
    {path:'sobre',component:AppAboutComponent,canActivate:[AuthenticationGuard]},
    {path:'pedidos/novo',component:AppNewOrderFormComponent,canActivate:[AuthenticationGuard]},
    {path:'pedidos/:type',component:AppOrderListComponent,canActivate:[AuthenticationGuard]},
    {path:'funcionarios',component:AppWorkerListComponent,canActivate:[AuthenticationGuard]},
    {path:'funcionarios/:id',component:AppWorkerFormComponent,canActivate:[AuthenticationGuard]},
    {path:'funcionarios/novo',component:AppWorkerFormComponent,canActivate:[AuthenticationGuard]},
  ],
  },
  {path:"auth/login",component:AppLoginComponent,canActivate:[LoginGuard]}

]

@NgModule({
  declarations:[],
 imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}
