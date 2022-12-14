import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import {IsTextWithoutSymbols, ValidNumber,}from 'src/app/core/algorithms/validations.algorithm';
import { Pedido } from 'src/app/core/models/pedido.model';
import { PedidoPage } from 'src/app/core/models/pedido.page.model';
import { LoaderService } from 'src/app/core/services/loader.service';
import { PedidoService } from 'src/app/core/services/pedido.service';
import { Subject,  map, debounceTime } from 'rxjs';
import { PedidoFilter } from 'src/app/core/models/pedido.filter';
import { CustomMessageService } from 'src/app/core/services/message.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './app-order-list.component.html',
})
export class AppOrderListComponent implements OnInit {

  dialogVisisble = false;
  pedidoSeleccionado = new Pedido();
  searchSubject = new Subject<any>();
  totalRecords = 6;
  pedidoPage: PedidoPage = new PedidoPage();
  cardTittle = '';
  isLoading: boolean = false;
  pedidoFilter!:PedidoFilter

  pedidoIdForConfirmation=12

  constructor(
    private pedidoService: PedidoService,
    private tittle: Title,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private primeNgConfig: PrimeNGConfig,
    public loader: LoaderService,
    private messageService:CustomMessageService
  ) {}

  ngOnInit() {

    this.pedidoFilter=new PedidoFilter()

    this.searchSubject .asObservable().pipe(
        debounceTime(1300),map(pageEvent => this.paging(pageEvent))
        ).subscribe();


    this.loader.isLoading().asObservable().subscribe(it => this.isLoading = it);
    this.primeNgConfig.ripple = true;
    this.updatePedidoFilter();
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.tittle.setTitle('Shoes clean | Pedidos');

  }

  searchPedido(event: any) {
    const text = event.target.value;

    if (ValidNumber(text)){
    this.pedidoFilter.telefone=text
      this.searchSubject.next(event);
     }

    else if (IsTextWithoutSymbols(text)){
      this.pedidoFilter.nome=text
      this.searchSubject.next(event);

    }

   else if(!text){

    this.pedidoFilter.telefone=''
    this.pedidoFilter.nome=''
    this.paging({first:0})
  }
  }

  private updatePedidoFilter() {
    const type = this.activatedRoute.snapshot.paramMap.get('type');

    if (type == 'criados') {

      this.pedidoFilter.status='criado'
      this.cardTittle = 'Pedidos em Execu????o';

    } else if (type == 'concluidos') {
      this.pedidoFilter.status = 'concluido';
      this.cardTittle = 'Pedidos Conclu??dos';
    }

  }

  paging(event: any) {

    const page=isNaN(event.first / 6)?0:event.first / 6

      this.pedidoService
      .getPedidos(page, 6, this.pedidoFilter)
      .subscribe((it) => {
        this.pedidoPage = it;
        this.totalRecords = it.pageable.totalElements;
      });

  }

  onMessageSent(pedido:any){

    if(pedido.markAsDone)  this.removeFromPedidoArray(pedido.id);

      this.messageService.showSuccessMessage('Cliente notificado com sucesso')
  }

  onMessageNotSent(){
    this.messageService.showErrorMessage("N??o foi poss??vel enviar a mensagem")
  }

  setPedidoId(id:any){
    this.pedidoIdForConfirmation=id
   }

  private removeFromPedidoArray(id:any){
   const index=this.pedidoPage.content.findIndex(p=>p.id==id)
   this.pedidoPage.content.splice(index,1)

  }

  onFinishOrder =()=>{
  this.pedidoService.confirmPedido(this.pedidoIdForConfirmation,true).subscribe({
   next: ()=>{
    this.messageService.showSuccessMessage('Pedido confirmado com sucesso')
    this.removeFromPedidoArray(this.pedidoIdForConfirmation)
   },
   error:()=>this.messageService.showErrorMessage('Nao foi poss??vel confirmar o pedido')
  })
  }

  // afterFinshOrder(){
  //    this.messageService.showSuccessMessage('Pedido confirmado com sucesso')
  // }



}
