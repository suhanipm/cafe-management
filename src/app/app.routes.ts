import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { OrdersComponent } from './components/orders/orders.component';
import { MenuComponent } from './components/menu/menu.component';
import { ServicesComponent } from './components/services/services.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

export const routes: Routes = [
    {
    path:'',
    component:HomeComponent},
   { path: 'login', 
    component: LoginComponent
    },
    { path: 'wallet', component: WalletComponent }
,
{
    path:'signup',
    component:SignupComponent
},
{
    path:'orders',
    component:OrdersComponent
},
{
    path:'menu',
    component:MenuComponent
},
{
    path:'services',
    component:ServicesComponent
},{
    path:'gallery',
    component:GalleryComponent
},{
    path:'about',
    component:AboutUsComponent
}
    
];
