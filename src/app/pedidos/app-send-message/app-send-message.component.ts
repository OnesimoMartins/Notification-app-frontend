import { Component, EventEmitter,Output } from '@angular/core';
import Cliente from 'src/app/core/models/cliente.model';
import { ClienteService } from 'src/app/core/services/cliente.service';
import { LayoutService } from 'src/app/shared/layout/services/layout.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './app-send-message.component.html',
})
export class AppSendMessageComponent {

  isVisible:boolean=false
  cliente:Cliente=new Cliente()
  message:any=''
  markAsDone=true

  @Output()
  onMessageSent= new EventEmitter()

  constructor(public layoutService: LayoutService,private clienteService: ClienteService) { }

  openMessageBox(cliente:Cliente){
    this.isVisible=true
    this.cliente=cliente
  }

  getPrimeiroNome(nomeCompleto: String) {
    return nomeCompleto.split(' ')[0];
  }

  sendMessage() {

    console.log(this.cliente);


    this.clienteService.sendMessage(this.cliente.numero_telefone,this.message).subscribe(()=>{
      this.onMessageSent.emit()
      this.isVisible = false;
    })

  }

}
