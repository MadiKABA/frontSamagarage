import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AdminComponent } from './admin.component';
import {ListProfileComponent} from "./profiles/list-profile/list-profile.component";
import {ListUtilisateursComponent} from "./utilisateurs/list-utilisateurs/list-utilisateurs.component";
import {FormulaireComponent} from "./profiles/formulaire/formulaire.component";
import {FormUtilisateursComponent} from "./utilisateurs/form-utilisateurs/form-utilisateurs.component";
import {ListZonesComponent} from "./zone/list-zones/list-zones.component";
import {AjoutZoneComponent} from "./zone/ajout-zone/ajout-zone.component";
import {GaragesComponent} from "./garage/garages/garages.component";
import {AjoutGarageComponent} from "./garage/ajout-garage/ajout-garage.component";
import {ServicesComponent} from "./service/services/services.component";
import {AjoutServiceComponent} from "./service/ajout-service/ajout-service.component";
import {BrowserModule} from "@angular/platform-browser";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AppRoutingModule} from "../app-routing.module";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    NavBarComponent,
    SideBarComponent,
    AdminComponent,
    ListProfileComponent,
    FormulaireComponent,
    ListUtilisateursComponent,
    FormUtilisateursComponent,
    ListZonesComponent,
    AjoutZoneComponent,
    GaragesComponent,
    AjoutGarageComponent,
    ServicesComponent,
    AjoutServiceComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class AdminModule { }
