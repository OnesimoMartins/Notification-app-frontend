import { Component, EventEmitter, Output } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-confirmation-box',
  templateUrl: './app-confirmation-box.component.html'
})
export class AppConfirmationBoxComponent {

  constructor(private confirmationService:ConfirmationService) { }

  @Output()
  afterAccept=new EventEmitter()

  openComfirmPopUp(event:Event,message:string,Fun:Function){
    this.confirmationService.confirm({
      key: 'confirmPopUp',
      target: event.target || new EventTarget,
      message:message,
      acceptLabel:"Sim",
      rejectLabel:"Não",
      icon: 'pi pi-exclamation-triangle',
      accept: () =>{
        Fun()
        this.afterAccept.emit()
      }
  });
  }


}
