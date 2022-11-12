import { Component, OnInit,ChangeDetectionStrategy ,ChangeDetectorRef, AfterViewInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
import { FuncionarioFilter } from 'src/app/core/models/funcionario.filter';
import { FuncionarioPage } from 'src/app/core/models/funcionario.page.model';
import { FuncionarioService } from 'src/app/core/services/funcionario.service';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-worker-list',
  templateUrl: './app-worker-list.component.html',
})
export class AppWorkerListComponent implements OnInit,AfterViewInit {

  funcionarioPage:FuncionarioPage=new FuncionarioPage()
  totalRecords=6
  funcionarioId:any
  isLoading: boolean = false;
  funcionarioFilter=new FuncionarioFilter()
  searchSubject = new Subject<any>();

  constructor(private funcionarioService:FuncionarioService,
    private messageService:MessageService,
    public loaderService:LoaderService,
    private cdrf:ChangeDetectorRef,
    public loader: LoaderService,
    private tittle:Title) { }


  ngAfterViewInit(): void {
      this.cdrf.detectChanges()
  }

  ngOnInit(): void {
   this.loader.isLoading().asObservable().subscribe(it => this.isLoading = it);
   this.tittle.setTitle('Shoes clean | Funcionários');
  }

  paging(event: any) {
    const page=isNaN(event.first / 6)?0:event.first / 6
    this.getFuncionarios(page)
  }

  setFuncionarioId(id:any){
    this.funcionarioId=id
  }

  private getFuncionarios(page:any){
    this.funcionarioService.getFuncionarios(page, 6).subscribe(it =>this.fillFuncionarioPage(it));
  }

  private fillFuncionarioPage(funcinarioPage:FuncionarioPage){
    this.funcionarioPage=funcinarioPage
    this.totalRecords=funcinarioPage.pageable.totalElements
  }

  handleLockFuncionario:Function=():void=>{

    if(this.funcionarioPage.content.find(it=>it.id==this.funcionarioId)?.is_bloqueado){

    this.funcionarioService.unlockFuncionario(this.funcionarioId).subscribe((it)=>{

      // update the status of funcionario in current array
      const index=this.funcionarioPage.content.findIndex(f=>f.id==it.id)

      this.funcionarioPage.content[index]=it

      this.messageService.add({
        closable:true,
        life:7000,
        summary:"Funcionário desbloqueado com sucesso",
        key:'tst',
        severity:'success'})

    })

  }

else{

  this.funcionarioService.lockFuncionario(this.funcionarioId).subscribe(it=>{
      // update the status of funcionario in current array
      const index=this.funcionarioPage.content.findIndex(f=>f.id==it.id)
      this.funcionarioPage.content[index]=it

      this.messageService.add({
        closable:true,
        life:7000,
        summary:"Funcionário bloqueado com sucesso",
        key:'tst',
        severity:'warn'})
      })

   }

}

  onDeleteFuncionario:Function=():void=>{
    this.funcionarioService.deleteFuncionario(this.funcionarioId).subscribe( ()=>{

      this.funcionarioService.getFuncionarios(0,6).subscribe((it)=>{
        this.fillFuncionarioPage(it)
        this.messageService.add({closable:true,life:7000,
          summary:"Funcionário eliminado com sucesso",key:'tst',severity:'success'})

      })
   })

  }



}
