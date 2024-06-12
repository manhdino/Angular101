import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
//  template: `
//  <h1>Hello world!</h1>
//  <p>Angular 101</p>
//  `,
  styleUrl: './app.component.scss'
  // styles: [`h1 {color: red} 
  // p{color: blue}
  // `]
})
export class AppComponent {
  title = 'angular101';

  role = 'admin';
}
