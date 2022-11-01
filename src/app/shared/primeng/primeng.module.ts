import { NgModule } from '@angular/core';
import {DataViewModule} from 'primeng/dataview'
import {OrderListModule} from 'primeng/orderlist'
import {InputTextModule} from 'primeng/inputtext'
import {DropdownModule} from 'primeng/dropdown'
import {PickListModule} from 'primeng/picklist'
import {ButtonModule} from 'primeng/button'
import {RatingModule} from 'primeng/rating'
import {SidebarModule} from 'primeng/sidebar'
import {RadioButtonModule} from 'primeng/radiobutton'
import {RippleModule} from 'primeng/ripple'
import {InputSwitchModule} from 'primeng/inputswitch'
import{BadgeModule} from 'primeng/badge'
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog'
import {CheckboxModule } from 'primeng/checkbox'
import {DividerModule } from 'primeng/divider'
import {ConfirmPopupModule } from 'primeng/confirmpopup'
import { InputTextareaModule } from 'primeng/inputtextarea'
import { MessagesModule } from 'primeng/messages'


@NgModule({
  exports: [
    ConfirmPopupModule,
    MessagesModule,
    DividerModule,
    CheckboxModule,
    InputTextareaModule,
    DialogModule,
    ToastModule,
    BadgeModule,
    SidebarModule,
    RippleModule,
    RadioButtonModule,
    InputSwitchModule,
    DataViewModule,
    PickListModule,
    OrderListModule,
    InputTextModule,
    DropdownModule,
    RatingModule,
    ButtonModule
  ]
})
export class PrimengModule { }
