import { Page } from "./page.model"
import { Pedido } from "./pedido.model"

export class PedidoPage{
  content:Pedido[]=[]
  pageable!:Page
}
