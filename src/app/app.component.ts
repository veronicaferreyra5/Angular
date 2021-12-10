import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-utn';
  edad = 45;
  numeros = [45, 456, 344, 3222, 6789, 345];
}
