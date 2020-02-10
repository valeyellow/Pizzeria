import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { BuildComponent } from './build/build.component';
import { LoginComponent } from './login/login.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'Home', component:HomeComponent},
  {path:'Order', component:OrderComponent},
  {path:'Build', component:BuildComponent},
  {path:'Cart',component:ShoppingCartComponent},  
  {path:'Login',component:LoginComponent},
  {path:'Register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
