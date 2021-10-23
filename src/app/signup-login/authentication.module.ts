import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SignupComponent} from "./signup/signup.component";
import {LoginComponent} from "./login/login.component";



@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent
  ],
  exports: [
    SignupComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthenticationModule { }
