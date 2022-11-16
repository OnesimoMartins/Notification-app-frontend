import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Cargo } from 'src/app/core/models/cargo.model';
import { Funcionario } from 'src/app/core/models/funcionario.model';
import { CargoService } from 'src/app/core/services/cargo.service';
import { FuncionarioService } from 'src/app/core/services/funcionario.service';
import { phoneNumber } from 'src/app/core/validators/phone.validator';

@Component({
  selector: 'app-worker-form',
  templateUrl: './app-worker-form.component.html',
})
export class AppWorkerFormComponent implements OnInit,AfterViewInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private funcionarioService: FuncionarioService,
    private messageService:MessageService,
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

    console.log(this.activatedRoute.snapshot.paramMap.getAll('id'));

    console.log(this.funcionarioId);

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
      this.messageService.add({key:'tst',
      severity:'success',
      closable:true,summary:"Funcionário criado"
      ,detail:value.nome.concat(" ".concat(value.sobrenome)), life:7000,})

      if(!this.isEditing()) this.funcionarioForm=this.getFormGroup()

  },
  error: (errorResponse:HttpErrorResponse)=>{


    if(errorResponse.error.code=="A-02" ){
      this.messageService.add({key:'tst',
      severity:'error',
      closable:true,summary:"Número de telefone em uso."
      ,detail:'Escolha outro número de telefone.', life:11000,})

      this.funcionarioForm.get("telefone")?.reset('')
    }

    else{this.messageService.add({key:'tst',severity:'error',closable:true,summary:"Erro ao criar funcionário"
    ,detail:'Um ou mais campos estão inválidos.', life:5000,})

    }

  }

})
   console.log(this.funcionarioForm.value);

  }

  public isEditing(){
    console.log(this.funcionarioId);

    return  this.funcionarioId != 'novo'
  }


}
