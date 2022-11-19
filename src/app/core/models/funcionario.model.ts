import { Cargo } from "./cargo.model"
import { FuncionarioInput } from "./funcionario.input.model"

export class Funcionario{
  id!: Number
  telefone:string=''
  nome:string=''
  sobrenome:string=''
  is_bloqueado:boolean=false
  cargo:Cargo=new Cargo()

  static fromJSON(json:any):Funcionario{

    const funcionario= new Funcionario()

    funcionario.cargo=json.cargo ?? ''
    funcionario.id=json.id ?? null
    funcionario.nome=json.nome ?? ''
    funcionario.sobrenome=json.sobrenome?? ''
    funcionario.telefone=json.telefone?? ''
    funcionario.is_bloqueado=json.is_bloqueado

    return funcionario;
  }

  asFuncionarioInput():FuncionarioInput{
    return {
      nome:this.nome,
      sobrenome:this.sobrenome,
      cargo_id:this.cargo.id,
      telefone:this.telefone
    }
  }
}
