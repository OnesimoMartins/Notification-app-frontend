import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import {IsTextWithoutSymbols, ValidNumber,}from 'src/app/core/algorithms/validations.algorithm';
import { Pedido } from 'src/app/core/models/pedido.model';
import { PedidoPage } from 'src/app/core/models/pedido.page.model';
import { LoaderService } from 'src/app/core/services/loader.service';
import { PedidoService } from 'src/app/core/services/pedido.service';
import { LayoutService } from 'src/app/shared/layout/services/layout.service';
import { Subject,  map, debounceTime } from 'rxjs';
import { PedidoFilter } from 'src/app/core/models/pedido.filter.model';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './app.lista.pedidos.component.html',
})
export class AppListaPedidosComponent implements OnInit {
  dialogVisisble = false;
  pedidoSeleccionado = new Pedido();

  searchSubject = new Subject<any>();


  totalRecords = 6;
  pedidoPage: PedidoPage = new PedidoPage();
  cardTittle = '';
  isLoading: boolean = false;

  pedidoFilter!:PedidoFilter


  constructor(
    private pedidoService: PedidoService,
    private tittle: Title,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private primeNgConfig: PrimeNGConfig,
    public layoutService: LayoutService,
    public loader: LoaderService
  ) {}

  ngOnInit() {

    this.pedidoFilter=new PedidoFilter()

    this.searchSubject .asObservable().pipe(
        debounceTime(1300),map(pageEvent => this.paging(pageEvent))
        ).subscribe(()=>{
          // this.pedidoFilter.nome=''
          // this.pedidoFilter.telefone=''
        });


    this.loader.isLoading().asObservable().subscribe(it => (this.isLoading = it));
    this.primeNgConfig.ripple = true;
    this.updatePedidoFilter();
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.tittle.setTitle('Shoes clean | Pedidos');
  }


  pesquisarPedido(event: any) {
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

  openMessageBox(pedido: Pedido) {
    this.dialogVisisble = true;
    this.pedidoSeleccionado = pedido;
    console.log(this.pedidoSeleccionado);
  }

  private updatePedidoFilter() {
    const type = this.activatedRoute.snapshot.paramMap.get('type');

    if (type == 'criados') {

      this.pedidoFilter.status='criado'
      this.cardTittle = 'Pedidos em Execução';

    } else if (type == 'concluidos') {
      this.pedidoFilter.status = 'concluido';
      this.cardTittle = 'Pedidos Concluídos';
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

  getPrimeiroNome(nomeCompleto: String) {
    return nomeCompleto.split(' ')[0];
  }

  sendMessage() {
    this.dialogVisisble = false;
  }
}
