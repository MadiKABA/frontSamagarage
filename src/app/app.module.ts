import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";

import {PublicModule} from "./public/public.module";
import {AdminModule} from "./admin/admin.module";
import {ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RatingModule } from 'ngx-bootstrap/rating';
import {AuthModule} from "./auth/auth.module";
import {MatIconModule} from "@angular/material/icon";
import { DasboardUserComponent } from './dasboard-user/dasboard-user.component';
import {DasboardUserModule} from "./dasboard-user/dasboard-user.module";


@NgModule({
  declarations: [
    AppComponent,
    DasboardUserComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    PublicModule,
    AdminModule,
    BrowserAnimationsModule,
    RatingModule.forRoot(),
    AuthModule,
    MatIconModule,
    DasboardUserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
