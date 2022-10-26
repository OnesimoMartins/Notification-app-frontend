import { NgModule } from '@angular/core';

import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { AppTopbarComponent } from './layout/app-topbar/app-topbar.component';
import { AppFooterComponent } from './layout/app-footer/app-footer.component';
import { AppMenuItemComponent } from './layout/app-menu-item/app-menu-item.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppMenuComponent } from './layout/app-menu/app.menu.component';
import { AppSidebarComponent } from './layout/app-sidebar/app-sidebar.component';
import { PrimengModule } from './primeng/primeng.module';

@NgModule({
  declarations: [
    LayoutComponent,
    AppTopbarComponent,
    AppFooterComponent,
    AppSidebarComponent,
    AppMenuComponent,
    AppMenuItemComponent
  ],
  imports: [
    BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        PrimengModule,
        RouterModule,
  ],
  exports:[LayoutComponent]
})
export class SharedModule { }
