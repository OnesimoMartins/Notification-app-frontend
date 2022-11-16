import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdministradorGuard } from "../core/guards/administrador.guard";
import { AuthenticationGuard } from "../core/guards/authentication.guard";
import { AppProfileComponent } from "./app-profile/app-profile.component";
import { AppWorkerFormComponent } from "./app-worker-form/app-worker-form.component";
import { AppWorkerListComponent } from "./app-workers-list/app-worker-list.component";


const routes:Routes=[

      {path:'meu-perfil',component:AppProfileComponent,canActivate:[AuthenticationGuard]},
      {path:'novo',component:AppWorkerFormComponent,canActivate:[AuthenticationGuard,AdministradorGuard]},
      {path:'',component:AppWorkerListComponent,canActivate:[AuthenticationGuard,AdministradorGuard]},
      {path:':id',component:AppWorkerFormComponent,canActivate:[AuthenticationGuard,AdministradorGuard]},
      // {path:'x/:id',component:AppWorkerFormComponent,canActivate:[AuthenticationGuard,AdministradorGuard]},
    ]


@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class WorkersRoutingModule { }

