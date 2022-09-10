import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login/login.component';
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "../app-routing.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
