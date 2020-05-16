import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  images = [
    { path: 'assets/images/01.jpg' },
    { path: 'assets/images/02.jpg' },
    { path: 'assets/images/03.jpg' },
    { path: 'assets/images/04.jpg' },
    { path: 'assets/images/05.jpg' },
    { path: 'assets/images/06.jpg' },
    { path: 'assets/images/07.jpg' },
    { path: 'assets/images/08.jpg' },
    { path: 'assets/images/09.jpg' },
    { path: 'assets/images/10.jpg' },
    { path: 'assets/images/11.jpg' },
    { path: 'assets/images/12.jpg' },
    { path: 'assets/images/13.jpg' },
    { path: 'assets/images/14.jpg' },
    { path: 'assets/images/15.jpg' },
    { path: 'assets/images/16.jpg' },
    { path: 'assets/images/17.jpg' },
    { path: 'assets/images/18.jpg' },
    { path: 'assets/images/19.jpg' },
    { path: 'assets/images/20.jpg' },
    { path: 'assets/images/21.jpg' },
  ];
}
