import { Routes } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { AboutComponent } from './about/about.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { GoodInfoComponent } from './good-info/good-info.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { Component } from '@angular/core';
import { CabinetComponent } from './cabinet/cabinet.component';
import { RegistrationComponent } from './registration/registration.component';

export const routes: Routes = [
  {path:'',component:StartPageComponent},
  {path:'catalog/:category',component:CategoryPageComponent},
  {path:'catalog/:category/:id',component:GoodInfoComponent},
  {path:'about',component:AboutComponent},
  {path:'cart',component:CartComponent},
  {path:'login', component:LoginComponent},
  {path:'cabinet', component:CabinetComponent},
  {path:'registration', component:RegistrationComponent}
];
