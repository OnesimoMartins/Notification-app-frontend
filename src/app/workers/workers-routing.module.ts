import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdministradorGuard } from "../core/guards/administrador.guard";
import { AuthenticationGuard } from "../core/guards/authentication.guard";
import { AppWorkerFormComponent } from "./app-worker-form/app-worker-form.component";
import { AppWorkerListComponent } from "./app-workers-list/app-worker-list.component";


const routes:Routes=[
//       {path:'',component:AppWorkerListComponent,canActivate:[AuthenticationGuard,AdministradorGuard]},
//       {path:'funcionarios/:id',component:AppWorkerFormComponent,canActivate:[AuthenticationGuard,AdministradorGuard]},
//       {path:'funcionarios/novo',component:AppWorkerFormComponent,canActivate:[AuthenticationGuard,AdministradorGuard]},
//
]

@NgModule({

  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class WorkersRoutingModule{}
