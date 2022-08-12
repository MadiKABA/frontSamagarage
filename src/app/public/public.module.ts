import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TrouverUnGarageComponent} from "./trouver-un-garage/trouver-un-garage.component";
import {ListGaragesComponent} from "./list-garages/list-garages.component";
import {DetailsGarageComponent} from "./details-garage/details-garage.component";
import {ListOffresComponent} from "./list-offres/list-offres.component";
import {FooterComponent} from "./footer/footer.component";
import { PublicComponent } from './public.component';
import {MenuComponent} from "./menu/menu.component";
import {AppRoutingModule} from "../app-routing.module";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    TrouverUnGarageComponent,
    ListGaragesComponent,
    DetailsGarageComponent,
    ListOffresComponent,
    FooterComponent,
    PublicComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class PublicModule { }
