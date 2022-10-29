import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FuncionarioPage } from '../models/funcionario.page.model';
import {Observable,map} from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { Page } from '../models/page.model';
import { Funcionario } from '../models/funcionario.model';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {


  url=environment.apiUrl+'funcionarios/'

  constructor(private http:HttpClient) { }



  updateWorkerPassword(passwordChange:any){
    console.log(passwordChange);
  }

  createUpdateFuncionario(funcionario:Funcionario,id?:any) {
   return id? this.updateFuncionario(funcionario,id): this.http.post<Funcionario>(this.url,funcionario);
  }

  private updateFuncionario(funcionario:Funcionario,id:any){
    const url= this.url+id
  return this. http.put<Funcionario>(url,funcionario)

  }

  getFuncionarios(page:Number,size:Number):Observable<FuncionarioPage>{


    let url=`${this.url}?page=${page}&size=${size}`

    return this.http.get<any>(url).pipe(
      map(it=>{

        const funcionarioPage=new FuncionarioPage()
        funcionarioPage.content=it.content
        funcionarioPage.pageable= new Page(it.totalElements,it.totalPages,it.size,it.number)

        return funcionarioPage
    })
    )

  }

  getFuncionario(id:any):Observable<Funcionario>{
    return this.http.get<Funcionario>(this.url+id);
  }
}
