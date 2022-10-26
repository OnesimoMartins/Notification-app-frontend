import Cliente from "./cliente.model"
import { ItemPedido } from "./item.pedido.model"
import { Page } from "./page.model"

export class Pedido{
  id!: Number
  cliente: Cliente=new Cliente
  //  "tempoCriacao": null
   status_pedido: string=''
  items: ItemPedido[]=[]

}

