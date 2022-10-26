import { Component, ElementRef } from '@angular/core';
import { LayoutService } from '../services/layout.service';

@Component({
  selector: 'app-sidebar',
  template: '<app-menu></app-menu>',
})
export class AppSidebarComponent {

  constructor(public layoutService: LayoutService, public el: ElementRef) { }

}
