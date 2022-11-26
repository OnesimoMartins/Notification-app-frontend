import { Component, EventEmitter,Output } from '@angular/core';
import { Pedido } from 'src/app/core/models/pedido.model';
import { ClienteService } from 'src/app/core/services/cliente.service';
import { PedidoService } from 'src/app/core/services/pedido.service';
import { LayoutService } from 'src/app/shared/layout/services/layout.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './app-send-message.component.html',
})
export class AppSendMessageComponent {

  isVisible:boolean=false
  pedido:Pedido=new Pedido()
  message:any=''
  markAsDone=true

  @Output()
  onMessageSent= new EventEmitter()

  @Output()
  onMessageNotSent= new EventEmitter()

  constructor(
    public layoutService: LayoutService,
    private clienteService: ClienteService,
    private pedidoService:PedidoService) { }

  openMessageBox(pedido:Pedido){
    this.isVisible=true
    this.pedido=pedido
  }

  sendMessage() {

    this.clienteService.sendMessage(this.pedido.cliente.numero_telefone,this.message).subscribe({

   error:()=>{this.onMessageNotSent.emit();this.closeDialog()},
   complete:()=> this.closeDialog(),
   next: ()=>{

    if(this.markAsDone){
      this.pedidoService.confirmPedido(this.pedido.id,false).subscribe({
        next:()=>this.onMessageSent.emit({markAsDone:true,id:this.pedido.id}),
        error:()=>   this.onMessageNotSent.emit()
      })
    }else
       this.onMessageSent.emit({markAsDone:true,id:this.pedido.id})

  }

  })

  }
  public closeDialog(){
    this.message=''
    this.isVisible = false;
  }

}
