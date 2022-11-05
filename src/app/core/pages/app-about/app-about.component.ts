import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './app-about.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppAboutComponent {}
