import { Cargo } from "./cargo.model"

export class Funcionario{
  id!: Number
  telefone:string=''
  nome:string=''
  sobrenome:string=''
  cargo:Cargo=new Cargo()
}
