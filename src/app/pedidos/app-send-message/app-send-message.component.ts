import { Component, OnInit,Input } from '@angular/core';
import Cliente from 'src/app/core/models/cliente.model';
import { LayoutService } from 'src/app/shared/layout/services/layout.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './app-send-message.component.html',
})
export class AppSendMessageComponent implements OnInit {


  @Input("isVisible")
  isVisible:boolean=false

  cliente:Cliente=new Cliente()

  constructor(  public layoutService: LayoutService,) { }

  ngOnInit(): void {
  }


  openMessageBox(cliente:Cliente){
    this.isVisible=true
    console.log(cliente);
    this.cliente=cliente

  }

  getPrimeiroNome(nomeCompleto: String) {
    return nomeCompleto.split(' ')[0];
  }

  sendMessage() {
    this.isVisible = false;
  }

}
