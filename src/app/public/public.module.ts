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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbRatingModule} from "@ng-bootstrap/ng-bootstrap";
import {RatingModule} from "ngx-bootstrap/rating";




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
    NgbRatingModule,
    FormsModule,
    RatingModule,

  ]
})
export class PublicModule { }
