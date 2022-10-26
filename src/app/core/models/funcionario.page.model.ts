import { Funcionario } from "./funcionario.model";
import { Page } from "./page.model";

export class FuncionarioPage{
  content:Funcionario[]=[]
  pageable!:Page
}
