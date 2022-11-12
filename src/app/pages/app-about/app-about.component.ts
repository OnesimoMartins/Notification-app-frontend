import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './app-about.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppAboutComponent implements OnInit{

  constructor(private tittle:Title){}
  ngOnInit(): void {
    this.tittle.setTitle('Shoes clean | sobre');
  }

}
