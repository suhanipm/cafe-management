import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from "./components/home/home.component";
import { NavComponent } from "./components/nav/nav.component";
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HomeComponent,LoginComponent, NavComponent],
  template: `
<app-header></app-header> 
  <app-nav/>
  <router-outlet />
`
,
  styles: [`
    `
  ],
})
export class AppComponent {
  title = 'cafe_management_app';
}
