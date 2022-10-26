import { Component, OnInit } from '@angular/core';
import { FuncionarioPage } from 'src/app/core/models/funcionario.page.model';
import { WorkerService } from 'src/app/core/services/funcionario.service';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-app-lista-funcionarios',
  templateUrl: './app-lista-funcionarios.component.html'
})
export class AppListaFuncionariosComponent implements OnInit {

  funcionarioPage:FuncionarioPage=new FuncionarioPage()
  totalElements=6

  constructor(private funcionarioService:WorkerService,public loaderService:LoaderService) { }

  ngOnInit(): void {

    this.funcionarioService.getFuncionarios(0,3).subscribe(console.log)
  }

  paging(event:any){

    this.funcionarioService.getFuncionarios(event.first/3,3).subscribe(it=>this.funcionarioPage=it)

    // this.pedidoService.getPedidos(event.first/6,6,this.pedidoStatus).subscribe(it=>{
    //   this.pedidoPage=it
    //   this.total=it.pageable.totalElements

    // })

  }


}
