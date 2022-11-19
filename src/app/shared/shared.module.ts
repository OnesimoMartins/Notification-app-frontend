import { NgModule } from '@angular/core';

import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { AppTopbarComponent } from './layout/app-topbar/app-topbar.component';
import { AppFooterComponent } from './layout/app-footer/app-footer.component';
import { AppMenuItemComponent } from './layout/app-menu-item/app-menu-item.component';
import { FormsModule } from '@angular/forms';

import { AppMenuComponent } from './layout/app-menu/app.menu.component';
import { AppSidebarComponent } from './layout/app-sidebar/app-sidebar.component';
import { AppConfirmationBoxComponent } from './app-confirmation-box/app-confirmation-box.component';
import { CommonModule } from '@angular/common';

import {ConfirmPopupModule } from 'primeng/confirmpopup'


@NgModule({
  declarations: [
    LayoutComponent,
    AppTopbarComponent,
    AppFooterComponent,
    AppSidebarComponent,
    AppMenuComponent,
    AppMenuItemComponent,
    AppConfirmationBoxComponent
  ],
  imports: [
        FormsModule,
        CommonModule,
        RouterModule,


        ConfirmPopupModule
  ],
  exports:[LayoutComponent,AppConfirmationBoxComponent]
})
export class SharedModule { }
