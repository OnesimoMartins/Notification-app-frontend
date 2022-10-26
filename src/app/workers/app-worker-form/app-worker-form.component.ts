import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/core/models/funcionario.model';
import { WorkerService } from 'src/app/core/services/funcionario.service';

@Component({
  selector: 'app-worker-form',
  templateUrl: './app-worker-form.component.html',
})
export class AppWorkerFormComponent implements OnInit {

  funcionarioId:any=0

  funcionario=new Funcionario()

  tittle="Novo Funcionário"

  constructor(private activatedRoute:ActivatedRoute,private funcionarioService:WorkerService,router:Router) {
    router.routeReuseStrategy.shouldReuseRoute=()=>false
  }

  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.paramMap.get("id") as any

    // console.log(id);

    if( id!='novo'){

      // console.log(id);

      this.tittle="Editar Funcionário"

      this.funcionarioService.getFuncionario(id).subscribe(it=>{
        this.funcionario.nome=it.nome
        this.funcionario.sobrenome=it.sobrenome
        this.funcionario.telefone=it.telefone
      })
    }


  }

}
