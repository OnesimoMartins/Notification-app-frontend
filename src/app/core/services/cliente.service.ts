import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Cliente from '../models/cliente.model';
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl=environment.apiUrl+'clientes'
  constructor(private http:HttpClient) { }

  getCliente(id:string):Observable<Cliente>{
    return this.http.get<Cliente>(`${this.baseUrl}/${id}`)
  }

  sendMessage(phone:string,body:string):Observable<any>{

    return this.http.post<any>(`${this.baseUrl}/mensagem`,{
      numero:phone,
      corpo:body
    })

  }
}
