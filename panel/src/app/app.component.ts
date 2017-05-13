import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Merhaba {{name}}</h1>`,
})
export class AppComponent  { name = 'testPanel'; }
