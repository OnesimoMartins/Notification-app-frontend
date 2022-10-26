import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WorkerService } from 'src/app/core/services/funcionario.service';
import { PhoneNumberValidator } from 'src/app/core/validators/phone.validator';

@Component({
  selector: 'app-app-profile',
  templateUrl: './app-profile.component.html'
})
export class AppProfileComponent  {


  constructor(private workerService:WorkerService){}

  option:number=0

  changePasswordForm:FormGroup=new FormGroup({
    oldPassword:new FormControl("",[Validators.required]),
    newPassword:new FormControl("",[])
  })

  changeNumberForm= new FormGroup({
    number:new FormControl("",PhoneNumberValidator)
  })

  updateWorker(){
    if(this.option==3){
      this.workerService.updateWorkerPassword(this.changePasswordForm.value)
    }
    else if(this.option==1){
      console.log(this.changeNumberForm.value);

    }
  }


  setOption(option:number){

    this.option=option

    if(this.option==1){

    }

  }

}
