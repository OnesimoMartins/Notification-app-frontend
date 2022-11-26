import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/core/services/auth.service';
import { CustomMessageService } from 'src/app/core/services/message.service';
import { phoneNumber } from 'src/app/core/validators/phone.validator';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  providers:[CustomMessageService,MessageService]
})
export class AppLoginComponent {

   constructor(private messageService:CustomMessageService,private authService:AuthService
    ,private router:Router){}


  formLogin=new FormGroup({
    username:new FormControl("",[phoneNumber]),
    password:new FormControl("",[Validators.required])

  })

  performLogin(){

    if(this.formLogin.valid){
      this.authService.login(this.formLogin.value).subscribe({

        complete:()=>  this.router.navigateByUrl("/home"),

      error:()=> this.messageService.showErrorMessage("Credenciais incorrectas","O número de telefone ou palavra-passe estão incorretos.")

    })

    }

    if(this.formLogin.get("username")?.invalid){
      this.messageService.showErrorMessage("Número de telefone inválido","informe um número de telefone válido.")
    }
    else if(this.formLogin.get("password")?.invalid){
      this.messageService.showErrorMessage("Palavra-passe vazia","informe uma palavra-passe.")
    }

  }

}
