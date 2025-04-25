import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from "./components/home/home.component";
import { NavComponent } from "./components/nav/nav.component";
import { LoginComponent } from './components/login/login.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { MenuComponent } from './components/menu/menu.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HomeComponent,LoginComponent, NavComponent,WalletComponent,MenuComponent,ServicesComponent,AboutUsComponent],
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
