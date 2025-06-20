import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { AlimenteComponent } from './alimente/alimente.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, AlimenteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ListaCumparaturi';
}
