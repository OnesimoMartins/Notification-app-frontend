import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";;
import { AppListaPedidosComponent } from "./pedidos/app-lista-pedidos/app.lista.pedidos.component";
import { AppNovoPedidoFormComponent } from "./pedidos/app-novo-pedido-form/app-novo-pedido-form.component";
import { LayoutComponent } from "./shared/layout/layout.component";
import { AppLoginComponent } from "./security/app-login/app-login.component";
import { AppAboutComponent } from "./core/pages/app-about/app-about.component";
import { AppDashboardComponent } from "./core/pages/app-dashboard/app-dashboard.component";
import { AppWorkerFormComponent } from "./workers/app-worker-form/app-worker-form.component";
import { AppProfileComponent } from "./workers/app-profile/app-profile.component";
import { AppListaFuncionariosComponent } from "./workers/app-workers-list/app-lista-funcionarios.component";
import { AuthenticationGuard } from "./core/guards/authentication.guard";
import { LoginGuard } from "./core/guards/login.guard";


const routes:Routes=[
  {path:'',component:LayoutComponent,
  children:[
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'perfil',component:AppProfileComponent,canActivate:[AuthenticationGuard]},
    {path:'home',component:AppDashboardComponent,canActivate:[AuthenticationGuard]},
    {path:'sobre',component:AppAboutComponent,canActivate:[AuthenticationGuard]},
    {path:'pedidos/novo',component:AppNovoPedidoFormComponent,canActivate:[AuthenticationGuard]},
    {path:'pedidos/:type',component:AppListaPedidosComponent},
    {path:'funcionarios',component:AppListaFuncionariosComponent},
    {path:'funcionarios/:id',component:AppWorkerFormComponent},
    {path:'funcionarios/novo',component:AppWorkerFormComponent},
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
