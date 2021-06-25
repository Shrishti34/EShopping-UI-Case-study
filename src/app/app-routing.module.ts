import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component'
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HelpComponent } from './components/help/help.component';

const routes: Routes = [
  {path: '', redirectTo: '/shop', pathMatch: 'full'},
  {path: 'cart', component: CartComponent },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'shop', component: ShoppingCartComponent},
  {path: '**', component: PageNotFoundComponent},
  {path: 'contact-us', component: FooterComponent},
  {path: 'help', component: HelpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
