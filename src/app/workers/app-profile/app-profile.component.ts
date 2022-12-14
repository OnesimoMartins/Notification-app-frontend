import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { Funcionario } from 'src/app/core/models/funcionario.model';
import { LoggedUser } from 'src/app/core/models/loged.user.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { FuncionarioService } from 'src/app/core/services/funcionario.service';
import { CustomMessageService } from 'src/app/core/services/message.service';

@Component({
  selector: 'app-app-profile',
  templateUrl: './app-profile.component.html',
  providers:[CustomMessageService]
})
export class AppProfileComponent implements OnInit {


  constructor(private funcionarioService:FuncionarioService
    ,private authService:AuthService
    ,private fb:FormBuilder
    ,private messageService:CustomMessageService){}

  option:number=0
  loggedUser=new LoggedUser()
  funcionario=new Funcionario()

  changeNameForm!:FormGroup

  changePasswordForm=this.getChangePasswordForm()

  ngOnInit(): void {
  this.loggedUser=this.authService.getLoggedUser()

  this.funcionarioService.getFuncionario(this.loggedUser.id).subscribe(it=>{
    this.funcionario=Funcionario.fromJSON(it)
    this.changeNameForm=this.getChangeNameForm(it)
  })
  }

  private getChangePasswordForm(){
    return this.fb.group({
      palavra_passe_actual:["",[Validators.required,Validators.minLength(6)]],
      nova_palavra_passe:["",[Validators.required,Validators.minLength(6)]]
    })
  }

  private getChangeNameForm(funcionario:Funcionario){
   return this.fb.group({
    nome:[funcionario.nome,[Validators.required]],
    sobrenome:[funcionario.sobrenome,[Validators.required]]
  })
  }


  updateWorker(){
    if(this.option==2){
      this.funcionarioService.updateWorkerPassword(this.changePasswordForm.value,
        this.loggedUser.id).subscribe({
          next:()=>{

            this.messageService.showSuccessMessage("Palavra-passe alterada com sucesso.")
          this.changePasswordForm=this.getChangePasswordForm()
        },

        error: (error:HttpErrorResponse)=>{
          if(error.error.code=='C-00')
           this.messageService.showErrorMessage("Palavra-passe fornecida est?? incorrecta.")
          this.changePasswordForm=this.getChangePasswordForm()
        }

      })
    }
    else if(this.option==1){

      this.funcionario.nome=this.changeNameForm.value.nome
      this.funcionario.sobrenome=this.changeNameForm.value.sobrenome

      this.funcionarioService.createUpdateFuncionario(this.funcionario.asFuncionarioInput(),this.funcionario.id)
      .subscribe(()=>this.messageService.showSuccessMessage("Nome actualizado com sucesso"))
    }
  }

  setOption(option:number){this.option=option }

}
