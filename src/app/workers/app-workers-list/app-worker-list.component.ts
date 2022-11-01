import { Component, OnInit } from '@angular/core';
import { FuncionarioPage } from 'src/app/core/models/funcionario.page.model';
import { FuncionarioService } from 'src/app/core/services/funcionario.service';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-worker-list',
  templateUrl: './app-worker-list.component.html'
})
export class AppWorkerListComponent implements OnInit {

  funcionarioPage:FuncionarioPage=new FuncionarioPage()
  totalRecords=6
  isLoading: boolean = false;

  constructor(private funcionarioService:FuncionarioService
    ,public loaderService:LoaderService,
    public loader: LoaderService) { }

  ngOnInit(): void {
   this.loader.isLoading().asObservable().subscribe(it => this.isLoading = it);
  }

  paging(event: any) {

    const page=isNaN(event.first / 6)?0:event.first / 6

      this.funcionarioService
      .getFuncionarios(page, 6)
      .subscribe((it) => {
        this.funcionarioPage = it;
        this.totalRecords = it.pageable.totalElements;

      });

  }


  refreshList(){
    console.log("Operacap realizada com sucecesso");
     console.log("Refreshing the current list");
  }

  funcionarioId:any

  setFuncionarioId(id:any){
    this.funcionarioId=id
  }

  onBlockFuncionario:Function=():void=>{
    console.log("blockeando funcionario "+this.funcionarioId)
  }
  onDeleteFuncionario:Function=(id:Number):void=>{
    console.log(" Apagando funcionario "+this.funcionarioId)
  }


}
