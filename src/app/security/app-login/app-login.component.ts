import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/core/services/auth.service';
// import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { PhoneNumberValidator } from 'src/app/core/validators/phone.validator';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  providers:[MessageService]
})
export class AppLoginComponent {

   constructor(private messageService:MessageService,private authService:AuthService
    ,private router:Router){}


  formLogin=new FormGroup({
    username:new FormControl("",[PhoneNumberValidator]),
    password:new FormControl("",[Validators.required])

  })

  performLogin(){

    if(this.formLogin.valid){
      this.authService.login(this.formLogin.value).subscribe({
      complete:()=>{
        // this.reloadPage()
        this.router.navigateByUrl("/home")
      },
      error:()=>{
        this.messageService.add({key:'tst',closable:true,severity:"error",summary:"Credenciais incorrectas"
      ,detail:"O número de telefone ou palavra-passe estão incorretos.",life:8000})
      }
    })
    }

    if(this.formLogin.get("username")?.invalid){
      this.messageService.add({key:'tst',closable:true,severity:"error",
      summary:"Número de telefone inválido",detail:"informe um número de telefone válido.",life:5000})
    }
    else if(this.formLogin.get("password")?.invalid){
      this.messageService.add({key:'tst',closable:true,severity:"error",summary:"palavra-passe vazia"
      ,detail:"informe uma palavra-passe.",life:5000})
    }

  }

  private reloadPage(){
    window.location.reload()
  }

}
