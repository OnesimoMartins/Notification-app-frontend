import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";;
import { AppOrderListComponent } from "./pedidos/app-order-list/app-order-list.component";
import { AppNewOrderFormComponent } from "./pedidos/app-new-order/app-new-order-form.component";
import { LayoutComponent } from "./shared/layout/layout.component";
import { AppLoginComponent } from "./security/app-login/app-login.component";
import { AppWorkerFormComponent } from "./workers/app-worker-form/app-worker-form.component";
import { AppProfileComponent } from "./workers/app-profile/app-profile.component";
import { AppWorkerListComponent } from "./workers/app-workers-list/app-worker-list.component";
import { AuthenticationGuard } from "./core/guards/authentication.guard";
import { LoginGuard } from "./core/guards/login.guard";
import { AdministradorGuard } from "./core/guards/administrador.guard";
import { AppDashboardComponent } from "./pages/app-dashboard/app-dashboard.component";
import { AppAboutComponent } from "./pages/app-about/app-about.component";
import { AppNotFoundComponent } from "./pages/app-not-found/app-not-found.component";


const routes:Routes=[


  {path:'',component:LayoutComponent,
  children:[
    {path:'',component:AppDashboardComponent,canActivate:[AuthenticationGuard]},
    {path:'perfil',component:AppProfileComponent,canActivate:[AuthenticationGuard]},
    {path:'home',component:AppDashboardComponent,canActivate:[AuthenticationGuard]},
    {path:'sobre',component:AppAboutComponent,canActivate:[AuthenticationGuard]},
    {path:'pedidos/novo',component:AppNewOrderFormComponent,canActivate:[AuthenticationGuard]},
    {path:'pedidos/:type',component:AppOrderListComponent,canActivate:[AuthenticationGuard]},
    {path:'funcionarios',loadChildren:()=>import('./workers/workers.module').then(it=>it.WorkersModule) },
    // {path:'funcionarios',component:AppWorkerListComponent,canActivate:[AuthenticationGuard,AdministradorGuard]},
    // {path:'funcionarios/:id',component:AppWorkerFormComponent,canActivate:[AuthenticationGuard,AdministradorGuard]},
    // {path:'funcionarios/novo',component:AppWorkerFormComponent,canActivate:[AuthenticationGuard,AdministradorGuard]},


    // {path:'funcionarios',canActivate:[AuthenticationGuard,AdministradorGuard],
    // loadChildren:()=>import('./workers/workers.module').then(it=>it.WorkersModule),
    // children:[
    //   {path:'',component:AppWorkerListComponent},
    //   {path:'funcionarios/:id',component:AppWorkerFormComponent},
    //   {path:'funcionarios/novo',component:AppWorkerFormComponent},
    // ]},



  ],
  },
  {path:"auth/login",component:AppLoginComponent,canActivate:[LoginGuard]},
  {path:'**',component:AppNotFoundComponent,canActivate:[AuthenticationGuard]}
]

@NgModule({
  declarations:[],
 imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}
