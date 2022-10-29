import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Page } from '../models/page.model';
import { PedidoPage } from '../models/pedido.page.model';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

 private url=environment.apiUrl+'pedidos'

  constructor(private http:HttpClient) {}

   getPedidos(page:Number,size:Number,
    {telefone,nome,status}:{telefone?:String,nome?:String,status?:String}):Observable<PedidoPage>{


    let url=`${this.url}?page=${page}&size=${size}`

     if(telefone)
    url+=`&numeroTelefoneCliente=${telefone}`

    if(status)
    url+=`&status=${status}`

    if(nome)
    url+=`&nomeCliente=${nome}`


    return this.http.get<any>(url).pipe(
      map(it=>{

        console.log(it);


        const pedidoPage=new PedidoPage()
        pedidoPage.content=it.content
        pedidoPage.pageable= new Page(it.totalElements,it.totalPages,it.size,it.number)

        return pedidoPage
    })
    )
  }

}
