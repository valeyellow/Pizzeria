import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BuildComponent } from './build/build.component';
import { OrderComponent } from './order/order.component';
import { Routes , RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { PizzaDetailsService } from './pizza-details.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSliderModule,
  MatListModule,
  MatSidenavModule,
  MatBadgeModule,
  MatGridListModule,
  MatMenuTrigger
  
} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuildComponent,
    OrderComponent,
    NavbarComponent,
    LoginComponent,
    ShoppingCartComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule,HttpClientModule, ReactiveFormsModule, FormsModule, BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSliderModule,
    MatSidenavModule,
    MatListModule,
    MatBadgeModule,
    MatGridListModule
  ],
  providers: [PizzaDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
