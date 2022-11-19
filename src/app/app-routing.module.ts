import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./shared/layout/layout.component";
import { AuthenticationGuard } from "./core/guards/authentication.guard";
import { AppDashboardComponent } from "./pages/app-dashboard/app-dashboard.component";
import { AppAboutComponent } from "./pages/app-about/app-about.component";
import { AppNotFoundComponent } from "./pages/app-not-found/app-not-found.component";


const routes:Routes=[

  {path:'',
  component:LayoutComponent,

  children:[

     {path:'',redirectTo:'home',pathMatch:'full'},
     {path:'home',component:AppDashboardComponent,canActivate:[AuthenticationGuard]},
     {path:'sobre',component:AppAboutComponent,canActivate:[AuthenticationGuard]},

     {path:'funcionarios',loadChildren:()=>import('./workers/workers.module').then(it=>it.WorkersModule) },
     {path:'pedidos',loadChildren:()=>import('./pedidos/orders.module').then(it=>it.OrdersModule)},

    ]

  },

  {path:'auth/login',loadChildren:()=>import('./security/security.module').then(it=>it.SecurityModule)},
  {path:'admin/api',loadChildren:()=>import('./observability/observability.module').then(it=>it.ObservabilityModule)},

  {path:'**',component:AppNotFoundComponent,canActivate:[AuthenticationGuard]}
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}
