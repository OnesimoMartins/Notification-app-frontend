import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
