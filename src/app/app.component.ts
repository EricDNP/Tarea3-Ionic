import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Sumadora', url: '/sumadora', icon: 'add-circle' },
    { title: 'Traductor', url: '/traductor', icon: 'book' },
    { title: 'Multiplicadora', url: '/multiplicadora', icon: 'calculator' },
    { title: 'Video', url: '/video', icon: 'videocam' }
  ];
  constructor() {}
}
