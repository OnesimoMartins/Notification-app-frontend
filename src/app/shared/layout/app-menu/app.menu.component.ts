import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../services/layout.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

  model: any[] = [];

  constructor(public layoutService: LayoutService) { }

  ngOnInit() {
      this.model = [
          {
              label: 'Home',
              items: [
                { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/home'] }
              ]
          },
          {
            label: 'Pedidos',
            items: [
              { label: 'Novo Pedido', icon: 'pi pi-fw pi-tag', routerLink: ['/pedidos/novo'] },
              { label: 'Pedidos Pendentes', icon: 'pi pi-spin pi-spinner', routerLink: ['/pedidos/criados'] },
              { label: 'Pedidos Concluídos', icon: 'pi pi-fw pi-check-circle', routerLink: ['/pedidos/concluidos'] }
            ]
        },
          {
              label: 'Funcionarios',
              items: [
                { label: 'Novo Funcionário', icon: 'pi pi-fw pi-user-plus', routerLink: ['funcionarios/novo'] },
                  { label: 'Todos Funcionários', icon: 'pi pi-fw pi-users', routerLink: ['funcionarios'] },
                 ]
          },

          // {
          //     label: 'Publicidade',
          //     icon: 'pi pi-fw pi-briefcase',
          //     routerLink: ['/pages'],
          //     items: [
          //       {
          //         label: 'Criar Publicidade',
          //         icon: 'pi pi-fw pi-calendar-plus',
          //         routerLink: ['/auth/login']
          //       }

          //     ]
          // },

          {
            label: 'Outros',
            icon: 'pi pi-fw pi-briefcase',
            routerLink: ['/pages'],
            items: [
              {
                label: 'Sobre ',
                icon: 'pi pi-fw pi-info-circle',
                routerLink: ['/sobre']
              },
              // {
              //   label: 'Configurações ',
              //   icon: 'pi pi-fw pi-sliders-h',
              //   routerLink: ['/configuracoes']
              // }


            ]
        }

      ];



  }
}
