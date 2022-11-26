import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomMessageService } from 'src/app/core/services/message.service';
import { PedidoService } from 'src/app/core/services/pedido.service';
import { phoneNumber } from 'src/app/core/validators/phone.validator';

@Component({
  selector: 'app-new-order-form',
  templateUrl: './app-new-order-form.component.html',
})
export class AppNewOrderFormComponent {

  constructor(private pedidoService:PedidoService
    ,private messageService:CustomMessageService,
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
    this.pedidoService.createPedido(this.pedidoForm.value).subscribe(()=>{
      this.messageService.showSuccessMessage('Pedido criado com sucesso')
           this.pedidoForm=this.getPedidoForm()
    });

   }


}
