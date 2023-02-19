import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationComponent } from './components/registration/registration.component';
import { loginRoutingModule } from './login-routing.module';
import { LogarComponent } from './views/logar.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    LogarComponent
  ],
  imports: [
    CommonModule,
    loginRoutingModule,
    HttpClientModule,
  ]
})
export class LoginModule { }
