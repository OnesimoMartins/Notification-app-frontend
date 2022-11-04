import { Component, EventEmitter,Output } from '@angular/core';
import Cliente from 'src/app/core/models/cliente.model';
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

  constructor(public layoutService: LayoutService) { }

  openMessageBox(cliente:Cliente){
    this.isVisible=true
    this.cliente=cliente
  }

  getPrimeiroNome(nomeCompleto: String) {
    return nomeCompleto.split(' ')[0];
  }

  sendMessage() {
    // this.isVisible = false;
    console.log(this.message);
    this.onMessageSent.emit()

  }

}
