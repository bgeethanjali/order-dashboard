import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <app-orders></app-orders>
  `
})
export class AppComponent {
  title = 'Order Dashboard (Angular 8)';
}
