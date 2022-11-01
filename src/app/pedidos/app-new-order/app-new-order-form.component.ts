import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { PedidoService } from 'src/app/core/services/pedido.service';
import { phoneNumber } from 'src/app/core/validators/phone.validator';

@Component({
  selector: 'app-new-order-form',
  templateUrl: './app-new-order-form.component.html',
  providers:[MessageService]
})
export class AppNewOrderFormComponent {

  constructor(private pedidoService:PedidoService
    ,private messageService:MessageService,
    private fb:FormBuilder) { }

  pedidoForm=this.getPedidoForm()

  private getPedidoForm() {
  return this.fb.group({
    numero:["",[Validators.required,phoneNumber]],
    nome: ["",[Validators.required]],
    itens: this.fb.array([],Validators.minLength(2))
  })
  }


  addItem(input:HTMLInputElement){
    this.pedidoForm.controls['itens'].value.push(input.value)
    input.value=''
  }

  submitPedido(){

    this.pedidoService.createPedido(this.pedidoForm.value).subscribe(it=>{
      this.messageService.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'Message sent' })
      this.pedidoForm=this.getPedidoForm()
      console.log(it);

    });


   }


}
