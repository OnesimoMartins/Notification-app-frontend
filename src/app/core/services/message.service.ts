import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',

})
export class CustomMessageService {

  constructor(private messageService:MessageService) { }


  showSuccessMessage(msg:string){
    this.messageService.add({
      summary:msg,
      key:'tst',
      life:6000,
      severity:'success'
    })
  }


  showErrorMessage(summary:string,detail?:string,key?:string){
    this.messageService.add({
      key:key??'tst',
      closable:true,
      severity:"error",
      summary:summary??'',
      detail:detail,
      life:8000})
    }
}
