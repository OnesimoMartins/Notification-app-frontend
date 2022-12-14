import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cargo } from 'src/app/core/models/cargo.model';
import { Funcionario } from 'src/app/core/models/funcionario.model';
import { CargoService } from 'src/app/core/services/cargo.service';
import { FuncionarioService } from 'src/app/core/services/funcionario.service';
import { CustomMessageService } from 'src/app/core/services/message.service';
import { phoneNumber } from 'src/app/core/validators/phone.validator';

@Component({
  selector: 'app-worker-form',
  templateUrl: './app-worker-form.component.html',
  providers:[CustomMessageService]
})
export class AppWorkerFormComponent implements OnInit,AfterViewInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private funcionarioService: FuncionarioService,
    private messageService:CustomMessageService,
    private cargoService:CargoService,
    private fb:FormBuilder,
    private router: Router
  ) {}

  tittle = 'Novo Funcionário';
  funcionarioForm= this.getFormGroup()
  cargos:Cargo[]=[]
  funcionarioId:any=null

  ngAfterViewInit(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {

    this.funcionarioId = this.activatedRoute.snapshot.paramMap.get('id');


    if (this.isEditing()) {
      this.tittle = 'Editar Funcionário';
      this.funcionarioService.getFuncionario(this.funcionarioId).subscribe(it =>{
        this.funcionarioForm=this.getFormGroup(it)
        this.funcionarioForm.removeControl('password')

      });
    }

        this.cargoService.getCargos().subscribe(it=>this.cargos=it)

  }

  private getFormGroup(funcionario?:Funcionario):FormGroup{
    return this.fb.group({
      nome:[funcionario?.nome ?? '',Validators.required],
      sobrenome:[funcionario?.sobrenome ?? '',[Validators.required]],
      telefone: [funcionario?.telefone ?? '',[Validators.required,phoneNumber]],
      cargo_id:[funcionario?.cargo.id?? null,[Validators.required]],
      password:['',[Validators.required,Validators.minLength(6)]]
    });
  }

 public submitWorker() {

  const id=this.isEditing()? this.funcionarioId :null
  this.funcionarioService.createUpdateFuncionario(this.funcionarioForm.value,id).subscribe({
  next:value=>{
    this.messageService.showSuccessMessage(this.isEditing()?'Funcionário editado com sucesso.':"Funcionário criado com sucesso.")
      if(!this.isEditing()) this.funcionarioForm=this.getFormGroup()
  },

  error: (errorResponse:HttpErrorResponse)=>{


    if(errorResponse.error.code=="A-02" ){
      this.messageService.showErrorMessage("Número de telefone em uso.",'Escolha outro número de telefone.')
      this.funcionarioForm.get("telefone")?.reset('')
    }

    else{
      this.messageService.showErrorMessage("Erro ao criar funcionário",'Um ou mais campos estão inválidos.')
    }

  }

})

  }

  public isEditing(){
    return  this.funcionarioId  && this.funcionarioId != 'novo'
 }

}
