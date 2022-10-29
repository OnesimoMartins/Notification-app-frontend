import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ClienteService } from 'src/app/core/services/cliente.service';
import { phoneNumber } from 'src/app/core/validators/phone.validator';

@Component({
  selector: 'app-new-order-form',
  templateUrl: './app-new-order-form.component.html',
  providers:[MessageService]
})
export class AppNewOrderFormComponent {

  constructor(private clienteService:ClienteService
    ,private messageService:MessageService) { }

  pedidoForm=new FormGroup({
    numero:new FormControl("",[Validators.required,phoneNumber]),
    nome: new FormControl("",[Validators.required]),
    itens: new FormControl([])
  })



  addItem(item:string){
    this.pedidoForm.controls['itens'].value.push(item)

    this.messageService.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'Message sent' });

  }

  getCliente(){

    if( this.pedidoForm.controls['numero'].valid){

    this.clienteService.getCliente(  this.pedidoForm.controls['numero'].value).subscribe(it=>{
      this.pedidoForm.controls['nome'].setValue(it.nome)
    },
    ()=>{
      this.pedidoForm.controls['nome'].setValue("")
    })

    }

  }

  submitPedido(){
    console.log(this.pedidoForm);
      this.messageService.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'Message sent' });

  }


}
