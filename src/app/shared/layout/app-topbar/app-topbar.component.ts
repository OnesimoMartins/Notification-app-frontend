import { Component ,ViewChild,ElementRef} from '@angular/core';
import {MenuItem} from 'primeng/api'
// import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { LayoutService } from '../services/layout.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './app-topbar.component.html'
})
export class AppTopbarComponent{


  items!: MenuItem[];

  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  constructor(public layoutService: LayoutService,/*public authService:AuthenticationService*/) { }




}
